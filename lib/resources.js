/*!
 * Copyright(c) 2018 Jan Blaha
 */

class Resources {
  constructor (reporter, definition) {
    this.reporter = reporter
    this.definition = definition

    if (!this.reporter.documentStore.model.entityTypes.TemplateType) {
      throw new Error('resources extension depends on templates extension')
    }

    this.reporter.beforeRenderListeners.insert({
      after: 'data',
      before: 'scripts'
    }, definition.name, this, this.handleBeforeRender.bind(this))

    this.reporter.documentStore.registerComplexType('ResourceRefType', {
      shortid: {type: 'Edm.String'},
      entitySet: {type: 'Edm.String'}
    })

    this.reporter.documentStore.registerComplexType('ResourcesType', {
      items: {type: 'Collection(jsreport.ResourceRefType)'},
      defaultLanguage: {type: 'Edm.String'}
    })

    this.reporter.documentStore.model.entityTypes['TemplateType'].resources = {type: 'jsreport.ResourcesType'}
  }

  async handleBeforeRender (request, response) {
    if (!request.template.resources || !request.template.resources.items || request.template.resources.items.length < 1) {
      this.reporter.logger.debug('Resources not defined for this template.', request)
      return
    }

    const resources = await Promise.all(request.template.resources.items.map(async (r) => {
      const res = await this.reporter.documentStore.collection(r.entitySet).find({shortid: r.shortid}, request)
      if (res.length < 1) {
        throw this.reporter.createError(`Data item with shortid ${r.shortid} was not found (resource lookup)`, {
          statusCode: 404
        })
      }

      return res[0]
    }))

    resources.forEach((r) => (r.data = JSON.parse(r.dataJson)))

    request.options.resources = resources
    request.data['$resources'] = resources

    const resourcesByName = {}
    resources.forEach((r) => (resourcesByName[r.name] = r.data))

    request.options.resource = resourcesByName
    request.data['$resource'] = resourcesByName

    if (request.options.language || (request.template.resources && request.template.resources.defaultLanguage)) {
      let applicableResources = resources.filter((r) => r.name.startsWith(request.options.language + '-'))

      if (!applicableResources.length && request.template.resources && request.template.resources.defaultLanguage) {
        applicableResources = resources.filter((r) => r.name.startsWith(request.template.resources.defaultLanguage + '-'))
      }

      this.reporter.logger.debug('Found ' + applicableResources.length + ' applicable resources.', request)

      request.options.localizedResources = applicableResources
      request.data['$localizedResources'] = applicableResources

      const localizedResourceByName = {}
      applicableResources.forEach((r) => (localizedResourceByName[r.name.substring((request.options.language + '-').length)] = r.data))
      request.options.localizedResource = applicableResources.length === 1 ? applicableResources[0].data : localizedResourceByName
      request.data['$localizedResource'] = request.options.localizedResource
    }
  }
}

module.exports = function (reporter, definition) {
  reporter.resources = new Resources(reporter, definition)
}
