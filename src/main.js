import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//import router
import router from './router'
//import store vuex 
import store from "./store";
//import axios
import axios from 'axios';



const app = createApp(App)

//inisiasi router
app.use(router)

//inisisasi store vuex
app.use(store)

axios.interceptors.response.use(undefined, function (error) {
    if (error) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
    
          originalRequest._retry = true;
          store.dispatch('auth/Logout')
          return router.push('/login')
      }
    }
  })

//mount app to #app
app.mount('#app')
