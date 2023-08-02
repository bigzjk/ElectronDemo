import { createApp } from 'vue'
import './style.css'
import { router } from './router';
import App from './App.vue'
import { MainClass } from './ts/electron-render';
new MainClass().Init();

const app = createApp(App);
app.use(router)

app.mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))
