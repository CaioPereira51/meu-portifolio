import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
// import do tema e do CSS global removidos, pois serão carregados via CDN
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './style.css';

const app = createApp(App);
app.use(PrimeVue);
app.mount('#app');
