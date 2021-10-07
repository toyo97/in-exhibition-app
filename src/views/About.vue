<template>
  <div id="about">
    <h1 class="title-main">Chi siamo</h1>
    <v-img src="../../public/logo.png" width="200px" class="mx-auto my-5"></v-img>
    <h4 class="title-main">Inclusive Intersectional Interactive</h4>
    <h5 style="font-weight: normal; font-family: Roboto,serif; text-align: center">
      an exhibition about equality
    </h5>

    <v-col md="3" class="mx-auto">
    <p class="about text-center">
      <span>Per accedere all'app, visita il sito da un dispositivo mobile (smartphone, tablet).
        Altrimenti, se sei semplicemente curioso, visita la pagina Instagram relativa a IN exhibition</span>
      <v-btn
          large
          href="https://www.instagram.com/in.exhibition" class="my-3">
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </p>
    </v-col>
  </div>
</template>

<script>
export default {
name: "About"
}
</script>

<style scoped>

</style>