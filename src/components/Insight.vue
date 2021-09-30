<template>
  <div id="insight">
    <div v-if="!quiz">
      <ExQRCode v-bind:comp-name=$options.name v-if="!quiz"></ExQRCode>
      <v-btn v-if="!quiz" @click="toQuiz" class="title-main">Quiz</v-btn>
    </div>

    <Quiz v-if="quiz" v-bind:quiz-data="quizData">
    </Quiz>
  </div>
</template>

<script>
import Quiz from "@/components/Quiz";
import ExQRCode from "@/components/ExQRCode";

export default {
  name: "Insight",
  components: {ExQRCode, Quiz},
  data () {
    return {
      quiz: false,
      quizData: [{
        question: "Quanto spesso usi mezzi di trasporto pubblici?",
        choices: [
          "Ogni giorno", "Una volta a settimana", "Una volta al mese", "Mai"
        ]
      }, {
        question: "Quale mezzo di trasporto usi di solito?",
        choices: [
          "Macchina", "Bus/Treno", "Bicicletta", "Monopattino elettrico"
        ]
      }]
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