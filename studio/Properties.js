import React, { Component } from 'react'
import Studio from 'jsreport-studio'

const MultiSelect = Studio.MultiSelect

export default class Properties extends Component {
  selectData (entities) {
    return Object.keys(entities).filter((k) => entities[k].__entitySet === 'data').map((k) => entities[k])
  }

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

    return `resources: ${entity.resources.defaultLanguage || ''} ` + Properties.getSelectedResources(entity, entities).map((s) => s.name).join(', ')
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
    const { entity, entities, onChange } = this.props
    const data = this.selectData(entities)

    const selectValues = (selectData) => {
      const { value: selectedValue, options } = selectData
      let items = []

      for (var i = 0; i < options.length; i++) {
        const optionIsSelected = selectedValue.indexOf(options[i].value) !== -1

        if (optionIsSelected) {
          if (!items.filter((s) => s.shortid === options[i].value).length) {
            items.push({ shortid: options[i].value })
          }
        } else {
          if (items.filter((s) => s.shortid === options[i].value).length) {
            items = items.filter((s) => s.shortid !== options[i].value)
          }
        }
      }

      return items.map((i) => ({ ...i, entitySet: 'data' }))
    }

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
          <MultiSelect
            title='Use the checkboxes to select/deselect multiple options'
            size={7}
            value={items.map((s) => s.shortid)}
            onChange={(selectData) => onChange({ _id: entity._id, resources: { items: selectValues(selectData), defaultLanguage: defaultLanguage } })}
            options={data.map(d => ({ key: d.shortid, name: d.name, value: d.shortid }))}
          />
        </div>
      </div>
    )
  }
}
