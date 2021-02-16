<template>
  <div id="app">
    <img src="../public/favicon.png">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <span if="$store.state.obj.user_name === ''">Log in</span>
      <span if="$store.state.obj.user_name !== ''">{{ $store.state.obj.user_name }}</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
