import Properties from './Properties.js'
import Studio from 'jsreport-studio'

Studio.addApiSpec({
  options: {
    language: 'en'
  }
})

Studio.addPropertiesComponent(Properties.title, Properties, (entity) => entity.__entitySet === 'templates')
