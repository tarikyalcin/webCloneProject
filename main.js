// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './app.vue';

const app = createApp(App);

// Pinia'yı bağlayın
const pinia = createPinia();
app.use(pinia);

app.mount('#app');
