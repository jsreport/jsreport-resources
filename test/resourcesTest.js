require('should')
const jsreport = require('jsreport-core')
const resources = require('../')
const data = require('jsreport-data')
const templates = require('jsreport-templates')

describe('with resources extension', () => {
  let reporter

  beforeEach(() => {
    reporter = jsreport({ tasks: { strategy: 'in-process' } })
    reporter.use(templates())
    reporter.use(data())
    reporter.use(resources())

    return reporter.init()
  })

  it('should parse resource into the options.resources collection', async () => {
    const data = await reporter.documentStore.collection('data').insert({
      name: 'foo',
      dataJson: '{ "foo": "x"}'
    })

    const request = {
      template: {
        content: ' ',
        engine: 'none',
        recipe: 'html',
        resources: {
          items: [{shortid: data.shortid, entitySet: 'data'}]
        }
      }
    }

    let beforeRenderRequest
    reporter.beforeRenderListeners.add('test', (req) => (beforeRenderRequest = req))
    await reporter.render(request)

    beforeRenderRequest.options.should.have.property('resources')
    beforeRenderRequest.options.resources.should.have.length(1)

    beforeRenderRequest.data.should.have.property('$resources')
    beforeRenderRequest.data['$resources'].should.have.length(1)

    beforeRenderRequest.options.should.have.property('resource')
    beforeRenderRequest.options.resource.should.have.property('foo')
    beforeRenderRequest.options.resource.foo.should.have.property('foo')

    beforeRenderRequest.data.should.have.property('$resource')
    beforeRenderRequest.data['$resource'].should.have.property('foo')
    beforeRenderRequest.data['$resource'].foo.should.have.property('foo')
  })

  it('should parse resource based on language into localizedResource', async () => {
    const data = await reporter.documentStore.collection('data').insert({
      name: 'en-foo',
      dataJson: '{ "foo": "x"}'
    })
    const request = {
      template: {
        content: ' ',
        recipe: 'html',
        engine: 'none',
        resources: {
          items: [{shortid: data.shortid, entitySet: 'data'}]
        }
      },
      data: {},
      options: {language: 'en'}
    }

    let beforeRenderRequest
    reporter.beforeRenderListeners.add('test', (req) => (beforeRenderRequest = req))
    await reporter.render(request)

    beforeRenderRequest.data.should.have.property('$localizedResource')
    beforeRenderRequest.data.$localizedResource.should.have.property('foo')
  })

  it('should parse resource based on language into localizedResource by names when multiple resources are applicable', async () => {
    const data = await reporter.documentStore.collection('data').insert({
      name: 'en-data1',
      dataJson: '{ "foo": "x"}'
    })

    const data2 = await reporter.documentStore.collection('data').insert({
      name: 'en-data2',
      dataJson: '{ "foo2": "x"}'
    })
    const request = {
      template: {
        content: ' ',
        engine: 'none',
        recipe: 'html',
        resources: {
          items: [
            {shortid: data.shortid, entitySet: 'data'},
            {shortid: data2.shortid, entitySet: 'data'}
          ]
        }
      },
      options: {language: 'en'},
      data: {}
    }

    let beforeRenderRequest
    reporter.beforeRenderListeners.add('test', (req) => (beforeRenderRequest = req))
    await reporter.render(request)

    beforeRenderRequest.data.should.have.property('$localizedResource')
    beforeRenderRequest.data.$localizedResource.should.have.property('data1')
    beforeRenderRequest.data.$localizedResource.should.have.property('data2')
    beforeRenderRequest.data.$localizedResource.data1.should.have.property('foo')
    beforeRenderRequest.data.$localizedResource.data2.should.have.property('foo2')
  })
})
