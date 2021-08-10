<template>
<v-container>
  <p>Scan the objects and try to guess</p>

  <QRCode @decode="code = $event"></QRCode>

  <DelQuiz boxCode="code"></DelQuiz>

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
      code: '',
      boxData: [
        {
          boxCode: "VGFHI",
          data: "FTM, transgender, USA",
          img: ""
        },
        {
          boxCode: "XQRTP",
          data: "Male, Brown skin color",
          img: ""
        }
      ]
    }
  }
}
</script>

<!--TODO https://www.smashingmagazine.com/2020/01/data-components-vue-js/ -->

<style scoped>

</style>