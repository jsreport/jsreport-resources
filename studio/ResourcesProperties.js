import React, { Component } from 'react'
import Studio from 'jsreport-studio'

const EntityRefSelect = Studio.EntityRefSelect

const selectValues = (selected) => {
  return selected.map((e) => ({ shortid: e.shortid, entitySet: 'data' }))
}

export default class ResourcesProperties extends Component {
  static getSelectedResources (entity, entities) {
    const getName = (s) => {
      const foundData = Object.keys(entities).map((k) => entities[k]).filter((sc) => sc.shortid === s.shortid)

      return foundData.length ? foundData[0].name : ''
    }

    return ((entity.resources || {}).items || []).map((d) => ({
      ...d,
      name: getName(d)
    }))
  }

  componentDidMount () {
    this.removeInvalidDataReferences()
  }

  componentDidUpdate () {
    this.removeInvalidDataReferences()
  }

  static title (entity, entities) {
    if (!entity.resources) {
      return 'resources'
    }

    return `resources: ${entity.resources.defaultLanguage || ''} ` + ResourcesProperties.getSelectedResources(entity, entities).map((s) => s.name).join(', ')
  }

  removeInvalidDataReferences () {
    const { entity, entities, onChange } = this.props

    if (!entity.resources || !entity.resources.items.length) {
      return
    }

    const updatedResources = entity.resources.items.filter((s) => Object.keys(entities).filter((k) => entities[k].__entitySet === 'data' && entities[k].shortid === s.shortid).length)

    if (updatedResources.length !== entity.resources.items.length) {
      onChange({ _id: entity._id, resources: { defaultLanguage: entity.resources.defaultLanguage, items: updatedResources } })
    }
  }

  render () {
    const { entity, onChange } = this.props
    const items = (entity.resources || {}).items || []
    const defaultLanguage = (entity.resources || {}).defaultLanguage

    return (
      <div className='properties-section'>
        <div className='form-group'><label>Default language <a href='http://jsreport.net/learn/resources' target='_blank'><i className='fa fa-question' /> </a></label>
          <input
            type='text' placeholder='en' value={defaultLanguage || ''}
            onChange={(v) => onChange({_id: entity._id, resources: {defaultLanguage: v.target.value, items: items}})} />
        </div>
        <div className='form-group'>
          <EntityRefSelect
            headingLabel='Select data'
            filter={(references) => ({ data: references.data })}
            value={items.map((s) => s.shortid)}
            onChange={(selected) => onChange({ _id: entity._id, resources: { items: selectValues(selected), defaultLanguage: defaultLanguage } })}
            multiple
          />
        </div>
      </div>
    )
  }
}
