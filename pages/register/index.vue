<template>
  <div class="container">
    <div v-if="checkLogin" class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadein first">
          <Logo />
        </div>
        <!-- Login Form -->
        <h1 class="fadein second">Register</h1>
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
          <input
            id="repassword"
            v-model="rePassword"
            type="password"
            class="fadein third"
            name="repassword"
            placeholder="Re Password"
          />
          <button type="submit" class="fadein fourth" value="Log In">
            Submit
          </button>
        </form>
        <!-- Remind Passowrd -->
        <!-- <div id="formFooter">
          <a class="underlineHover" href="#">Forgot Password?</a>
        </div> -->
        <div class="fadein third">
          Have your account? Login <nuxt-link to="/login">here</nuxt-link>
        </div>
      </div>
    </div>
    <div v-else>TEST</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkLogin: true,
      email: '',
      password: '',
      rePassword: '',
      error: null,
    }
  },
  methods: {
    checkPw() {
      return this.password === this.rePassword
    },
    onSubmit() {
      const valPass = this.checkPw()
      if (valPass) {
        this.$axios
          .$post(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA0qXrqxpNc5FuQ_PE9D2bE4nlmPTuFAnc',
            {
              email: this.email,
              password: this.password,
              returnSecureToken: true,
            }
          )
          .then((result) => {
            alert('Register Success, please login')
            window.location.href = '/'
          })
      } else {
        alert("repassword don't match with password")
      }
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
