<template>
  <v-container fluid>
    <v-row>
      <v-col sm="6" class="d-flex flex-column">
        <v-flex class="text-center">
          <v-img src="../../public/logo.png" width="200px" class="mx-auto my-5"></v-img>
        </v-flex>
        <h4 style="font-size: .6em" class="title-main">Inclusive Intersectional Interactive</h4>
        <h5 style="font-weight: normal; font-family: Roboto,serif; text-align: center">
          an exhibition about equality
        </h5>

      </v-col>

    </v-row>
    <v-row align="end">
      <v-flex class="text-center align-end">
        <v-btn to="/exhibition"><span style="font-family: jangkui,serif">Start</span></v-btn>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
export default {
name: "Home"
}
</script>

<style scoped>

</style>