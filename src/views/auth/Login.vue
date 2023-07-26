<template>
     <div class="container-fluid mb-5 mt-4">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div v-if="validation.message" class="mt-2 alert alert-danger">
                    {{ validation.message }}
                </div>
                <div class="card border-0 shadow rounded">
                    <div class="card-body">
                        <h4 class="text-center">LOGIN</h4>
                        <hr>
                        <form @submit.prevent="login">
                            <div class="form-group">
                                <label>NIK</label>
                                <input type="text" v-model="user.nik" class="form-control"
                                    placeholder="Masukkan NIK" maxlength="5" pattern="\d*">
                            </div>
                            <div v-if="validation.nik" class="mt-2 alert alert-danger">
                                {{ validation.nik[0] }}
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" v-model="user.password" class="form-control"
                                    placeholder="Password">
                            </div>
                            <div v-if="validation.password" class="mt-2 alert alert-danger">
                                {{ validation.password[0] }}
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">LOGIN</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref, reactive} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

    export default {
        name: 'LoginComponent',

        setup() {

            //inisiasi user state 
            const user = reactive({
                nik: '',
                password: ''
            })

            //validation state 
            const validation = ref([])

            //store vuex
            const store = useStore()

            //route
            const router = useRouter() 

            //function login
            function login() {
                //define variable 
                let nik = user.nik
                let password = user.password

                //panggil action "login" dari module "auth" di vuex
                store.dispatch('auth/login', {
                    nik,
                    password
                })
                .then(() => {
                    //redirect ke dashboard
                    router.push({name: 'dashboard'})
                }).catch(error => {
                    //assign validation error 
                    validation.value =  error 
                })
            }

            return {
                user,
                validation,
                login
            }
        }
    }
</script>