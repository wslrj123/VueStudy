import { createApp, VueElement } from 'vue';
import App from './App.vue';
// import App from './components/UserQuery.vue'
// import App from './test.vue'
// import App from './components/SliderCheck.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router.js';
import store from './store/index.js';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(ElementPlus)
    .use(router)
    .use(store)
    .mount('#app');

