<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/course">Course</router-link> |
      <router-link to="/modtype">Module Type</router-link> |
      <router-link to="/industry">Industry</router-link> |
      <router-link to="/about">About</router-link>
    </div>
      <!-- <b-navbar toggleable="lg" type="dark" variant="info" class="customnav">
        <b-navbar-brand><b-link to="/" class="navbar-brand">Modules+</b-link></b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" />

        <b-collapse is-nav id="nav_collapse">
        </b-collapse>
      </b-navbar> -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
