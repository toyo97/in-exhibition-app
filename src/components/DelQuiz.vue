<template>
      <v-container
          v-if="boxCode !== ''"
      >
      <v-img
          v-bind:src="require('../assets/imgs/' + boxCode + '_img.png')"
          max-width="300"
          contain
      ></v-img>
<!--      <span>show quiz for {{scannedQuiz}}</span>-->
        <Quiz
          v-bind:quiz-data="scannedQuiz"
        >
        </Quiz>
    </v-container>
</template>

<script>
import Quiz from "@/components/Quiz";
export default {
  name: "DelQuiz",
  components: {Quiz},
  props: {
    boxCode: String
  },
  data () {
    return {
      boxData: [
        {
          boxCode: "VGFHI",
          data: "FTM, transgender, USA",
          img: "../assets/imgs/VGFHI_img.png",
          desc: "A delivery person was scared of some creepy people, that had rebel flags, dead deer heads, Trump 2016 poster on the wall and had to pretend being not the FTM transgender to feel safer.",
          quizData: [{
            question: "The owner of the box...",
            choices: [
              "Is a Trump supporter",
              "Delivered pizza to some Trump supporters",
              "Was wearing two t-shirts at once",
              "Had to attach Trump posters while delivering pizza"
            ],
            answer: 1
          }, {
            question: "The owner of the box...",
            choices: [
              "Became friend with the customers",
              "Felt unsafe meeting the customers",
              "Was offered a bite of pizza",
              "Got no tip"
            ],
            answer: 1
          }]
        },
        {
          boxCode: "XQRTP",
          data: "Male, Brown skin color",
          img: "../assets/imgs/XQRTP_img.png",
          desc: "Refused to deliver because the customers have realized that the rider belongs to minority community. According to the officials and reports, the delivery person was wearing a mask and gloves to avoid contact with anyone. All other necessary precautions were taken stated by the health experts to avoid any form of risk. However, it was still humiliation by the customer. The rider filled a case at the police station and suctomer was arrested. ",
          quizData: [{
            question: "The owner of the box...",
            choices: [
              "Collects coins",
              "Wants to take all the necessary precautions",
              "Was given very low tip",
              "Is ill"
            ],
            answer: 1
          }, {
            question: "The owner of the box...",
            choices: [
              "Has been discriminated is victim of religious discrimination",
              "Is rich",
              "Has COVID",
              "Had not enough change for the customers"
            ],
            answer: 0
          }]
        }
      ]
    }
  },
  computed: {
    scannedQuiz: function () {
      for (const el of this.boxData) {
        if (el.boxCode === this.boxCode) {
          return el.quizData
        }
      }
      return null
    }
  }
}
</script>

<style scoped>

</style>