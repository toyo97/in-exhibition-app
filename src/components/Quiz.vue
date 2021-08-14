<template>
  <div id="quiz">
    <h2>{{quizData[curr_question].question}}</h2>
    <v-row>
      <v-col>
        <v-btn @click="nextQuestion" style="width:100px;"><span class="text-truncate" style="width:80px;font-size: 3vw">{{quizData[curr_question].choices[0]}}</span></v-btn>
        <v-btn @click="nextQuestion" style="width:100px;"><span class="text-truncate" style="width:80px;font-size: 3vw">{{quizData[curr_question].choices[1]}}</span></v-btn>
      </v-col>
      <v-col>
        <v-btn @click="nextQuestion" style="width:100px;"><span class="text-truncate" style="width:80px;font-size: 3vw">{{quizData[curr_question].choices[2]}}</span></v-btn>
        <v-btn @click="nextQuestion" style="width:100px;"><span class="text-truncate" style="width:80px; font-size: 3vw">{{quizData[curr_question].choices[3]}}</span></v-btn>
      </v-col>
    </v-row>
    <br>
    <span v-if="end_quiz">Great! Go to the next exhibit</span>
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