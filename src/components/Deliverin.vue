<template>
<v-container>
  <p>Scan the objects and try to guess</p>

  <QRCode></QRCode>

  <DelQuiz v-bind:itemCode="this.code" @decode="this.code = $event"></DelQuiz>

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

<!--TODO https://www.smashingmagazine.com/2020/01/data-components-vue-js/ -->

<style scoped>

</style>