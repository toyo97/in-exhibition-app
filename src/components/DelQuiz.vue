<template>
      <div
          v-if="boxCode !== ''"
          align="center"
      >
        <div
          v-if="showImg">
          <v-img
              v-bind:src="require('../assets/imgs/' + boxCode + '_img.png')"
              width="100"
              contain
          ></v-img>
          <!--      <span>show quiz for {{scannedQuiz}}</span>-->
          <Quiz
              v-bind:quiz-data="scannedBox.quizData"
              @ended="hideImage"
          >
          </Quiz>
        </div>
        <div v-if="!showImg">
          <Story v-bind:box-data="scannedBox.desc"></Story>
        </div>
    </div>
</template>

<script>
import Quiz from "@/components/Quiz";
import Story from "@/components/Story";
export default {
  name: "DelQuiz",
  components: {Story, Quiz},
  props: {
    boxCode: String
  },
  methods: {
    hideImage(quizEnded) {
      this.showImg = !quizEnded
    }
  },
  data () {
    return {
      boxData: [
        {
          boxCode: "DOT",
          data: "FTM, transgender, USA",
          img: "../assets/imgs/DOT_img.png",
          desc: "Faccio consegne a domicilio per Marco's Pizza. Una notte ho dovuto consegnare una pizza in una zona" +
              "in mezzo ai boschi. Arrivo all'abitazione, prendo il cibo dalla macchina, lo scontrino e mi avvio verso la porta." +
              "Una magra signora di mezz'età esce dal retro e mi dice 'Hey! Siamo giù nel garage'.\n Questa è stato il primo" +
              "campanello d'allarme.\n Titubante, vado verso il garage, senza passare l'uscio. Dentro al garage, due uomini" +
              "anziani seduti su sedie reclinabili, vestiti in abiti mimetici e sulle pareti almeno 5 bandiere dei confederati americani," +
              " 6 teste di cervo e un poster di Trump del 2016.\n" +
              "Sono transgender FTM, ho fatto del mio meglio per presentarmi come maschio. Tuttavia la donna e i due uomini continuavano" +
              "a chiamarmi 'signora' o 'signorina'. Penso che la parte più spaventosa sia stata quando uno degli uomini mi ha chiesto di entrare nel garage." +
              "Ho educatamente rifiutato e l'ho informato che non ci era permesso entrare nella casa o nel garage dei clienti." +
              "Mi ha ignorato e presto tutti e tre mi hanno invitato nuovamente ad entrare nel garage. Rifiutando ancora, gli ho dato la pizza e detto " +
              "il conto. Penso mi abbiano anche dato una mancia di circa 3 dollari, che non è poi così male - sicuramente è meglio di una mazzata almeno.\n" +
              "Ogni volta che ripasso da quelle strade mi vengono i brividi.",
          quizData: [{
            question: "Il proprietario del box...",
            choices: [
              "È un sostenitore di Trump",
              "Ha consegnato pizza ad un sostenitore di Trump",
              "Vestiva strani abiti",
              "Attaccava poster di Trump mentre consegnava pizza"
            ],
            answer: 1
          }, {
            question: "Il proprietario del box...",
            choices: [
              "Ha fatto amicizia con i clienti",
              "Si è sentito in pericolo durante una consegna",
              "Ha ricevuto un pezzo di pizza",
              "Non ha preso nessuna mancia"
            ],
            answer: 1
          }]
        },
        {
          boxCode: "9EL",
          data: "Male, Brown skin color",
          img: "../assets/imgs/9EL_img.png",
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
      ],
      showImg: true
    }
  },
  computed: {
    scannedBox: function () {
      for (const el of this.boxData) {
        if (el.boxCode === this.boxCode) {
          return el
        }
      }
      return null
    }
  }
}
</script>

<style scoped>

</style>