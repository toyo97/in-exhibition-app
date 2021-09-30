<template>
  <div id="deliverin">
    <div v-if="!quiz">
      <ExQRCode v-bind:comp-name=$options.name v-if="!quiz"></ExQRCode>
      <v-btn v-if="!quiz" @click="toQuiz" class="title-main">Quiz</v-btn>
    </div>

    <div v-else>
      <div v-if="code === ''">
        <p>
          <span>
            Scegli un box e scansiona il QR-code che trovi stampato per accedere al quiz relativo.
          </span>
        </p>

        <QRCode @decode="code = $event"></QRCode>
      </div>
      <div v-else>
        <DelQuiz v-bind:boxCode="code"></DelQuiz>
        <v-btn @click="function () {code = ''}">
          <span class="title-main">
          Altro quiz
          </span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "@/components/QRCode";
import DelQuiz from "@/components/DelQuiz";
import ExQRCode from "@/components/ExQRCode";

export default {
name: "Deliverin",
  components: {ExQRCode, DelQuiz, QRCode},
  data () {
    return {
      code: '',
      quiz: false
    }
  },
  methods: {
    toQuiz() {
      this.quiz = true
    }
  }
}
</script>

<style scoped>

</style>