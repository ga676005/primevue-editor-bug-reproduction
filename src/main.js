import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Editor from 'primevue/editor';


const app = createApp(App)
app
  .use(PrimeVue)
  .component('Editor',Editor)
  .mount('#app')
