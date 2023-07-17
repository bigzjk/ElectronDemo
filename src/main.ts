import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MainClass } from './ts/main';
new MainClass().Init();

createApp(App).mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))
