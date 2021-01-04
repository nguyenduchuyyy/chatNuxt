<template>
  <div class="container">
    <div v-if="checkLogin">HOME PAGE</div>
    <div v-else>
      <script>
        window.location.href = '/login'
      </script>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkLogin: false,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/css/custom.css';
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
