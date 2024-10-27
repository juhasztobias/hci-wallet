/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import router from '@/router';
import pinia from '@/stores';
import VueQrcodeVue from 'qrcode.vue';
import VueApexCharts from 'vue3-apexcharts';
import vuetify from './vuetify';

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VueApexCharts)
    .use(VueQrcodeVue)
}
