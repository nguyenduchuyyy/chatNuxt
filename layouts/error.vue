<template>
  <div class="error_page">
    <h1>Something went wrong</h1>
    <h2>Return to <nuxt-link to="/">Home page</nuxt-link></h2>
  </div>
</template>

<style lang="scss" scope>
.error_page {
  color: red;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
