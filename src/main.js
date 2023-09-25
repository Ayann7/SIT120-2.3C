import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import UserItem from '/Users/Ayann/Desktop/Intro to Responsive Webapps/Week 2/2.3c/Task2.3C/src/views/UserItem.vue';

const app = createApp(App)

app.use(router)
app.component('user-item', UserItem)

app.mount('#app')
