<template>
<v-container>
  <p v-if="!quiz">Interact with the exhibit, then press the button below and answer to few questions</p><br>
  <v-btn v-if="!quiz" @click="toQuiz">To quiz</v-btn>

  <Quiz v-if="quiz" v-bind:quiz-data="quizData">
  </Quiz>

</v-container>
</template>

<script>
import Quiz from "@/components/Quiz";
export default {
  name: "Indispensable",
  components: {Quiz},
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