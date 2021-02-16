<template>
  <div id="login-form">
    This is the Login form component
    <label>
      <input v-model="user_name" placeholder="Enter your name">
    </label>
  </div>
</template>

<script>
export default {
  name: "loginform",
  computed: {
    user_name: {
      get () {
        return this.$store.state.obj.user_name
      },
      set (value) {
        this.$store.commit('updateUserName', value)
      }
    }
  }
}
</script>

<style scoped>

</style>