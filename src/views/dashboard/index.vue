<template>
    <div class="container-fluid mb-5 mt-4 dashboard">
        <div class="row">
            <div class="col-md-3 mb-4">
                <UserMenuComponent />
            </div>
            <div class="col-md-9 md-mb-5">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h5 class="font-weight-bold"> <i class="fas fa-tachometer-alt"></i> DASHBOARD</h5>
                        <hr>
                        Selamat Datang <strong>{{ user.nik }}</strong>
                    </div>
                </div>
                <div class="card border-0 rounded shadow mt-3">
                    <div class="card-body">
                        <h5 class="font-weight-bold"> <i class="fas fa-tachometer-alt"></i> Daftar Request</h5>
                        <hr>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    //import customer menu component
    import UserMenuComponent from '../../components/UserMenu.vue'
    import {computed, onMounted, reactive} from 'vue';
    import {useStore} from 'vuex';

    export default {

        name: 'DashboardComponent',

        components: {
            //customer menu component
            UserMenuComponent
        },

        setup() {
            //inisiasi store vuex 
            const store = useStore()

            //mounted 
            onMounted(() => {
                //panggil action "getUser" dari module "auth"
                store.dispatch('auth/getUser')
            })

            //computed
            const user = computed(() => {
                //panggil getters dengan nama "currentUser"
                return store.getters['auth/currentUser']
            })

            //return state dan function supaya bisa digunakan di template 
            return {
                store,
                user
            }
        }

    }
</script>