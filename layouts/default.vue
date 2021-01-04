<template>
  <div>
    <div id="navbar">
      <div id="logo">
        <Logo />
      </div>
      <ul id="navbar-child">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/chat">Chat Room</nuxt-link></li>
        <li><nuxt-link to="/about">About Me</nuxt-link></li>
        <li>
          <!-- hi username -->
          Hi
          <!-- log out button -->
        </li>
        <li>
          <!-- log in button -->
          <nuxt-link to="/about">{Not login yet}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="default_nuxt">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
#navbar {
  height: 50px;
  width: 100%;
  background-color: black;
  #navbar-child {
    float: right;
    margin-top: 27px;
  }
  .defautl-nuxt {
    max-width: 800px;
    margin: auto;
  }
  li {
    float: left;
    list-style-type: none;
    display: list-item;
    text-align: -webkit-match-parent;
    a {
      color: red;
      text-decoration: none;
      margin-right: 10px;
      font-size: 20px;
    }
  }

  svg {
    max-width: 50px;
    max-height: 60px;
  }
  #logo {
    padding-left: 20px;
    width: 50px;
    height: 60px;
    float: left;
  }
}
</style>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
