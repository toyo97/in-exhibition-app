<template>
  <div id="quiz">
    <h2>{{quizData[curr_question].question}}</h2>
    <v-row align="center">
      <v-col xs="6" v-for="col in [[0,1], [2,3]]" :key="col">
        <v-card style="height: 100%" class="ma-4"
                v-for="idx in col" :key="idx"
                @click="nextQuestion"
                height="120" width="120">
          <v-card-text style="height: 100%" align="center">
            {{quizData[curr_question].choices[idx]}}
          </v-card-text>
        </v-card>
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