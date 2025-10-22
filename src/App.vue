<template>
  <header class="header">
    <router-link to="/">maCôt</router-link>
  </header>
  <router-view />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// dedicated component
.header {
  background-color: black;
  padding: 12px;
  font-size: 24px;
  text-align: left;

  a {
    text-decoration: none;
    color: white;
  }
}
</style>
