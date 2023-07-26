import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//import router
import router from './router'
//import store vuex 
import store from "./store";


const app = createApp(App)

//inisiasi router
app.use(router)

//inisisasi store vuex
app.use(store)

//mount app to #app
app.mount('#app')
