<template>
  <div id="indispensable">
  <div v-if="!quiz">
    <ExQRCode v-if="!quiz"></ExQRCode>
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
              question: "How many clothing items do you buy every month?",
              choices: [
                  "1 or less", "1-5", "5-10", "10 or more"
              ]
      }, {
              question: "How many euros do you spend for clothes every month?",
              choices: [
                "10 or less", "10-50", "50-100", "100 or more"
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