<template>
  <div id="quiz">
    <h2>{{quizData[curr_question].question}}</h2>
    <v-col sm="10">
      <v-row v-for="idx in [0,1,2,3]" :key="idx">
          <v-card style="width: 100%" class="ma-4"
                  @click="nextQuestion">
            <v-card-text style="height: 100%" align="center">
              {{quizData[curr_question].choices[idx]}}
            </v-card-text>
          </v-card>
      </v-row>
    </v-col>
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