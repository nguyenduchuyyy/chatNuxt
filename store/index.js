import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null,
    },
    mutations: {
      setToken(state, token) {
        state.token = token
      },
    },
    actions: {
      authenticationUser(vuexContext, credentials) {
        //check method
        let loginApi =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA0qXrqxpNc5FuQ_PE9D2bE4nlmPTuFAnc'
        if (!credentials.checkLogin) {
          let loginApi =
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA0qXrqxpNc5FuQ_PE9D2bE4nlmPTuFAnc'
        }

        return {
          $post(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA0qXrqxpNc5FuQ_PE9D2bE4nlmPTuFAnc',
            {
              email: this.email,
              password: this.password,
              returnSecureToken: true,
            }
          )
          .then((result) => {
            alert('Login Success !')
            // window.location.href = '/'
          })}
      },
    },
  })
}
