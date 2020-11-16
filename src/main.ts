import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Feng from './components/Feng.vue';
import Feng2 from './components/Feng2.vue';


const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Feng},
    {path:'/xxx',component: Feng2}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
