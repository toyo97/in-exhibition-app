<template>
  <div id="deliverin">
    <div v-if="!boxQuiz">
      <ExQRCode v-bind:comp-name=$options.name></ExQRCode>
      <v-btn v-on:click="toScan()" class="title-main">Box</v-btn>
    </div>

    <div v-else>
      <div v-if="code === ''" align="center">
        <p>
          <span>
            Attiva l'NFC e avvicina il cellulare al box.
          </span>
          <span v-if="simulateScan">Scanning...</span>
          <v-btn
              class="ma-4"
              large fab
              v-on:click="toBoxQuiz()">
            <v-icon>mdi-access-point</v-icon>
          </v-btn>
        </p>
      </div>
      <div v-else align="center">
        <DelQuiz v-bind:boxCode="code"></DelQuiz>
        <v-btn @click="function () {code = ''}" class="ma-4">
          <span class="title-main">
          Altro box
          </span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import DelQuiz from "@/components/DelQuiz";
import ExQRCode from "@/components/ExQRCode";

export default {
name: "Deliverin",
  components: {ExQRCode, DelQuiz},
  data () {
    return {
      code: '',
      boxQuiz: false,
      simulateScan: false
    }
  },
  methods: {
    async toBoxQuiz() {
      const delay = ms => new Promise(res => setTimeout(res, ms));

      this.simulateScan = true
      await delay(1000)
      this.simulateScan = false
      this.code = 'DOT'
    },
    toScan() {
      this.boxQuiz = true
    }
  }
}
</script>

<style scoped>

</style>