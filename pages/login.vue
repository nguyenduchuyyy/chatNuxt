<template>
  <div class="container">
    <div v-if="checkLogin" class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadein first">
          <Logo />
        </div>
        <h1 class="fadein second">Login</h1>
        <!-- Login Form -->
        <form @submit.prevent="onSubmit">
          <input
            id="email"
            v-model="email"
            type="text"
            class="fadein second"
            name="email"
            placeholder="Email"
          />
          <input
            id="password"
            v-model="password"
            type="password"
            class="fadein third"
            name="password"
            placeholder="Password"
          />
          <button type="submit" class="fadein fourth" value="Log In">
            Submit
          </button>
        </form>
        <div class="fadein third">
          New to ChatChat?
          <nuxt-link to="/register">Create an account.</nuxt-link>
        </div>
        <!-- Remind Passowrd -->
        <!-- <div id="formFooter">
          <a class="underlineHover" href="#">Forgot Password?</a>
        </div> -->
      </div>
    </div>
    <div v-else>TEST</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'clean',
  data() {
    return {
      checkLogin: true,
      email: '',
      password: '',
      error: null,
    }
  },

  methods: {
    onSubmit() {
      this.$axios
        .$post(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA0qXrqxpNc5FuQ_PE9D2bE4nlmPTuFAnc',
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((result) => {
          alert('Login Success !')
          // window.location.href = '/'
        })
    },
  },
}
</script>

<style scope>
@import '@/assets/css/custom.scss';
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
