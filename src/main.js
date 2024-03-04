import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import axios from 'axios';

// CSS
import './assets/main.css';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

// Use Vue Router
app.use(router);

// Use Axios globally
app.config.globalProperties.$axios = axios;

// Mount the app
app.mount('#app');
