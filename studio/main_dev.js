import ResourcesProperties from './ResourcesProperties.js'
import Studio from 'jsreport-studio'

Studio.addApiSpec({
  options: {
    language: 'en'
  }
})

Studio.addPropertiesComponent(ResourcesProperties.title, ResourcesProperties, (entity) => entity.__entitySet === 'templates')
