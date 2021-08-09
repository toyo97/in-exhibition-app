<template>
  <div id="quiz">
    <h2>{{quizData[curr_question].question}}</h2>
    <v-row>
      <v-col>
        <v-btn @click="nextQuestion">{{quizData[curr_question].choices[0]}}</v-btn>
        <v-btn @click="nextQuestion">{{quizData[curr_question].choices[1]}}</v-btn>
      </v-col>
      <v-col>
        <v-btn @click="nextQuestion">{{quizData[curr_question].choices[2]}}</v-btn>
        <v-btn @click="nextQuestion">{{quizData[curr_question].choices[3]}}</v-btn>
      </v-col>
    </v-row>
    <br>
    <span v-if="end_quiz">Great! Go to the next exhibit</span>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  props: ['quizData'],
  data () {
    return {
      curr_question: 0,
      end_quiz: false
    }
  },
  methods: {
    nextQuestion() {
      if (this.curr_question >= this.quizData.length - 1) {
        this.end_quiz = true
      } else {
        this.curr_question++
      }
    }
  }
}
</script>

<style scoped>

</style>