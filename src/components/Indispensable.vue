<template>
  <div id="indispensable">
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
  name: "Indispensable",
  components: {ExQRCode, Quiz},
  data () {
    return {
      quiz: false,
      quizData: [{
              question: "Secondo te ci vogliono più litri d'acqua per produrre un avocado o un'arancia?",
              choices: [
                  "Avocado", "Arancia"
              ],
              answer: 0
      }, {
              question: "Secondo te quanta CO2 si immette nell'atmosfera " +
                  "per produrre un paio di calzini di lana (non fast-fashion)?",
              choices: [
                "come mandare 50 e-mail", "come mandare 3650 e-mail", "come mandare 500 e-mail", "come mandare 12000 e-mail"
              ],
              answer: 1
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