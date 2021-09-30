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
        question: "How often do you use public transportation?",
        choices: [
          "Every day", "Once a week", "Once a month", "Never"
        ]
      }, {
        question: "What means of transportation do you usually take for a daily commute?",
        choices: [
          "Car", "Bus/Train", "Bike", "Electric scooter"
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