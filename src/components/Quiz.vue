<template>
  <div id="quiz">
    <v-col sm="10"
           v-if="!end_quiz"
    >
      <h2 class="quiz-title">{{quizData[curr_question].question}}</h2>
      <v-row
          v-for="(value, index) in quizData[curr_question].choices" :key="index">
        <v-expand-x-transition>
        <v-card v-bind:id="'quiz-choice-' + index" class="ma-4 quiz-choice" v-bind:style="quizChoiceStyles[index]"
                  @click="'answer' in quizData[curr_question] ? verify(index) : nextQuestion()">
            <v-card-text style="height: 100%" align="center">
              {{value}}
            </v-card-text>
          </v-card>
        </v-expand-x-transition>
      </v-row>
      <span style="font-family: atsurt; color: #1C2D46; font-weight: bold">{{result}}</span>
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
      correctStyle: "",
      wrongStyle: {'background-color': '#D587AE !important'},
      quizChoiceStyles: Array(4).fill(this.correctStyle),
      result: ""
    }
  },
  methods: {
    async verify(ans) {
      const delay = ms => new Promise(res => setTimeout(res, ms));

      for (let i=0; i < this.quizChoiceStyles.length; i++) {
        if (i !== this.quizData[this.curr_question].answer) {
          this.quizChoiceStyles[i] = this.wrongStyle
        }
      }
      if (ans === this.quizData[this.curr_question].answer) {
        this.result = "Correct!"
      } else {
        this.result = "Wrong"
        // console.log(ans + ", " + this.quizData[this.curr_question].answer)
      }
      await delay(2000);
      this.quizChoiceStyles.fill(this.correctStyle)
      this.result = ""
      this.nextQuestion()
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