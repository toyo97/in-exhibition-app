<template>
  <div id="quiz">
    <v-col sm="10"
           v-if="!end_quiz"
    >
      <h2 class="quiz-title">{{quizData[curr_question].question}}</h2>
      <v-row
          v-for="(value, name, index) in quizData[curr_question].choices" :key="index">
          <v-card v-bind:id="'quiz-choice-' + toString(index)" class="ma-4 quiz-choice"
                  @click="nextQuestion()">
            <v-card-text style="height: 100%" align="center">
              {{value}}
            </v-card-text>
          </v-card>
      </v-row>
    </v-col>
    <br>
    <span v-if="end_quiz">Bene, prova il quiz con un altro box vai alla prossima exhibit</span>
  </div>
</template>

<!--TODO fix button dimensions-->

<script>
export default {
  name: "Quiz",
  props: {
    quizData: Array
  },
  data () {
    return {
      curr_question: 0,
      end_quiz: false,
      quizChoiceStyle: ''
    }
  },
  methods: {
    verify(ans) {
      if (ans === this.quizData[this.curr_question].answer) {
        this.quizChoiceStyle = {
          'background-color': '#4CAF50'
        }
        console.log("correct")
        return true
      } else {
        return false
      }
    },
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