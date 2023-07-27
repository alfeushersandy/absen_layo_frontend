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
                        Selamat Datang <strong>{{ user.karyawan.nama }},</strong> <span class="text-danger">Aplikasi Ini sedang dalam masa Trial !!</span>
                    </div>
                </div>
                <div class="card border-0 rounded shadow mt-3">
                    <div class="card-body">
                        <h5 class="font-weight-bold"> <i class="fas fa-tachometer-alt"></i> Daftar Request</h5>
                        <hr>
                        <table class="table table-bordered table-responsive" style="width: 100%">
                            <thead class="thead-dark">
                                <tr>
                                    <th>NIK</th>
                                    <th>Nama</th>
                                    <th>Jenis Ijin</th>
                                    <th>Tanggal Awal</th>
                                    <th>Tanggal Akhir</th>
                                    <th>Jumlah Hari</th>
                                    <th>Status</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="loading">
                                    <td colspan="8" class="text-center">
                                        <div>
                                            Loading . . . 
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="absens.length == 0">
                                    <td colspan="8" class="text-center">
                                        <div class="alert alert-danger mb-0">
                                            Data Belum Tersedia!
                                        </div>
                                    </td>
                                </tr>
                                <tr v-else v-for="(absen, index) in absens" :key="index">
                                    <td>{{ absen.karyawan.nik_karyawan }}</td>
                                    <td>{{ absen.karyawan.nama }}</td>
                                    <td>{{ absen.jenis_absen.nama_abs }}</td>
                                    <td>{{ absen.tanggal_awal }}</td>
                                    <td>{{ absen.tanggal_akhir }}</td>
                                    <td class="text-center">{{ absen.jumlah_hari }}</td>
                                    <td>{{ absen.status }}</td>
                                    <td v-if="absen.status == 'Pending'">
                                        <a href="" class="btn btn-info btn-sm">Approve</a>
                                        <a href="" class="btn btn-danger btn-sm">Reject</a>
                                    </td>
                                    <td v-if="absen.status == 'Approved'">
                                        <a href="" class="btn btn-info btn-sm">Verify</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    //import customer menu component
    import UserMenuComponent from '../../components/UserMenu.vue'
    import {computed, onMounted, ref} from 'vue';
    import {useStore} from 'vuex';
    import Api from '../../api/Api';

    export default {

        name: 'DashboardComponent',

        components: {
            //customer menu component
            UserMenuComponent
        },

        setup() {
            //inisiasi store vuex 
            const store = useStore()
            //inisiasi state daftar absen
            const absens = ref({});
            //loading
            const loading = ref();
            //mounted 
            onMounted(() => {
                loading.value = true;
                //panggil action "getUser" dari module "auth"
                store.dispatch('auth/getUser')
                //panggil fetchdataabsen
                fetchDataAbsen();
            })

            //computed
            const user = computed(() => {
                //panggil getters dengan nama "currentUser"
                return store.getters['auth/currentUser']
            })

            const fetchDataAbsen = async () => {
                //fetch data
                //ambil data dari localstorage
                const token = localStorage.getItem('token')

                await Api.get('/absen', {
                    headers: {
                        'Content-Type': 'Application-json',
                        'Accept': 'Application-json',
                        'Authorization': 'Bearer '+token
                    }
                })

                .then(response => {
                    absens.value = response.data.data.data;
                    loading.value = false;
                    console.log(response.data.data);
                })
            }

            //return state dan function supaya bisa digunakan di template 
            return {
                store,
                user,
                absens, 
                loading
            }
        }

    }
</script>