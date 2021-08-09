<template>
  <v-container>
  <p v-if="!quiz">Play the insight game!</p><br>
  <p>When you're done, check the following quiz</p>
  <v-btn v-if="!quiz" @click="toQuiz">To quiz</v-btn>

  <Quiz v-if="quiz" v-bind:quiz-data="quizData">
  </Quiz>
  </v-container>
</template>

<script>
import Quiz from "@/components/Quiz";

export default {
  name: "Insight",
  components: {Quiz},
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