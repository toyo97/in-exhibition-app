<template>
<v-container>
  <v-container v-if="code === ''">
    <p>Scan the objects and try to guess</p>

    <QRCode @decode="code = $event"></QRCode>
  </v-container>

  <v-container v-else>
    <v-btn @click="function () {code = ''}">Re-scan</v-btn>
    <DelQuiz v-bind:boxCode="code"></DelQuiz>
  </v-container>
</v-container>
</template>

<script>
import QRCode from "@/components/QRCode";
import DelQuiz from "@/components/DelQuiz";
export default {
name: "Deliverin",
  components: {DelQuiz, QRCode},
  data () {
    return {
      code: ''
    }
  }
}
</script>

<style scoped>

</style>