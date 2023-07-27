//import vuex 
import { createStore } from "vuex";
//import module auth
import auth from './module/auth'
//import mmodule absen
import absen from "./module/absen";


//create store vuex
export default createStore({
    modules: {
        auth, //<-- modul auth 
        absen,
    }
})