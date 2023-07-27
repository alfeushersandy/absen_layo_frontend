<template>
    <div class="card border-0 rounded shadow p-0">
      <div class="card-body">
          <h5 class="font-weight-bold text-center sm-text-left">USER MENU</h5>
          <hr>
          <ul class="list-group">
              <Router-link :to="{name: 'dashboard'}" class="list-group-item text-decoration-none text-dark text-uppercase"><i class="fas fa-shopping-cart"></i> dashboard</Router-link>
              <Router-link :to="{name:'izin'}" class="list-group-item text-decoration-none text-dark text-uppercase"><i class="fas fa-shopping-cart"></i> Permohonan Izin</Router-link>
              <a @click="logout" style="cursor:pointer" class="list-group-item text-decoration-none text-dark text-uppercase"><i class="fas fa-sign-out-alt"></i> Logout</a>
          </ul>
      </div>
    </div>
  </template>
  
  <script>
  import {useStore} from 'vuex';
  import {useRouter} from 'vue-router';

  export default {
      name: 'UserMenuComponent',

      setup() {
        //store vuex
        const store = useStore()

        //vue router
        const router = useRouter() 

        //method untuk logout 
        function logout() {
            //panggil action logout dari modul auth
            store.dispatch('auth/logout')
                .then(() => {
                    //klo berhasil diarahkan ke route login
                    router.push({
                        name: 'login'
                    })
                })
        }

        return {
            store,
            router,
            logout
        }
      }
  }
  </script>