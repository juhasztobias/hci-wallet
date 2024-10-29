/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1D60F8',  
        },
      },
    },
  },
  defaults: {
    VTextField: {
      variant: 'outlined',
      labelPlacement: 'outside',
      
    },
    VSelect: {
      variant: 'outlined',
    }
  }
})
