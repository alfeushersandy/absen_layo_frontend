import Api from '../../api/Api';

const auth = {
    namespaced: true,

    state: {
        //state untuk token, pakai localstorage, untuk menyimpan informasi ttg jwt
        token: localStorage.getItem('token') || '',

        //state user, pakai localstorage untuk menyimpan data user yang sedang login
        user: JSON.parse(localStorage.getItem('user')) || {},
    },

    //mutation
    mutations: {
        //mengaupdate state user dari hasil response login
        //update state token dan state user dari hasil response
        AUTH_SUCCESS(state, token, user) {
            state.token   = token // <-- assign state token dengan response token
            state.user    = user // <-- assign state user dengan response data user
        },
        GET_USER(state, user){
            state.user = user //assign state user dengan hasil response data user
        },
        //fungsi logout 
        AUTH_LOGOUT(state){
            state.token = '',
            state.user = {}
        }
    }, 

    //action
    actions: {
        //action getUser
        getUser({ commit }) {
            //ambil data dari localstorage
            const token = localStorage.getItem('token')

            Api.defaults.headers.common['Authorization'] = "Bearer " + token
            Api.get('/user')
            .then(response => {
                console.log(response.data.user)
                //commit ke mutation GET_USER dengan hasil response
                commit('GET_USER', response.data.user)
            }) 
            
        }, 

        logout({commit}) {
            //define callback promise
            return new Promise((resolve) => {
                //commit ke mutation AUTH_LOGOUT
                commit('AUTH_LOGOUT')

                //remove value dari localstorage 
                localStorage.removeItem('token')
                localStorage.removeItem('user')

                delete Api.defaults.headers.common['Authorization']

                //return resolve ke component
                resolve()
            })
        },

         //action login
         login({ commit }, user) {

            //define callback promise
            return new Promise((resolve, reject) => {
            
                Api.post('/login', {
                    
                    //data yang dikirim ke server
                    nik: user.nik,
                    password: user.password,
          
                  })
                    
                  .then(response => {
          
                    //define variable dengan isi hasil response dari server
                    const token = response.data.token
                    const user  = response.data.user
          
                    //set localStorage untuk menyimpan token dan data user
                    localStorage.setItem('token', token)
                    localStorage.setItem('user', JSON.stringify(user))
          
                    //set default header axios dengan token
                    Api.defaults.headers.common['Authorization'] = "Bearer " + token

                    //commit auth success ke mutation
                    commit('AUTH_SUCCESS', token, user)

                    //commit get user ke mutation
                    commit('GET_USER', user)

                    //resolve ke component dengan hasil response
                    resolve(response)
          
                  }).catch(error => { 
          
                      //jika gagal, remove localStorage dengan key token
                      localStorage.removeItem('token')

                      //reject ke component dengan hasil response
                      reject(error.response.data)
          
                  })

            })

        }

    },


    //getter 
    getters: {

        currentUser(state) {
            return state.user;
        },

        isLoggedIn(state) {
            return state.token;
        }

    }
}

export default auth