<template>
  <div id="exqrcode">
    <div v-if="!isShowingCamera && scanRes !== 2">
      <p>
        <span>
        Inquadra il QR-code relativo all'exhibit prima di interagire.
        Così potrai salvare la tua esperienza!
        </span>
        <br>
        <span>
        Se non sei interessato/a, semplicemente clicca su "Quiz" o su "Avanti" per passare
        alla prossima exhibit.
        </span>
      </p>
      <v-img v-bind:src="require('../assets/gfx/qrcode_scan.png')" width="100px" v-on:click="openCamera"
             class="mx-auto my-5" alt="Scan QR-code"
      ></v-img>
    </div>
    <qrcode-stream class="my-5 mx-auto" v-if="isShowingCamera" @init="onInit" @decode="onDecode"></qrcode-stream>
    <p v-if="scanRes === 1">
      <span>
        Sei davanti ad un'altra exhibit, vai di fronte a {{compName}} e scansiona di nuovo il codice.
      </span>
    </p>
    <p v-else-if="scanRes === 2">
      Perfetto, ora la tua esperienza verrà registrata sul tuo profilo!
    </p>
  </div>
</template>

<script>
export default {
  name: "ExQRCode",
  data() {
    return {
      isShowingCamera: false,
      scanRes: 0,
      result: '',
      error: '',
      codeMap: {
        "TB8":"Indispensable",
        "T6F":"Insight",
        "DHC":"Deliverin",
        "IH3":"Invisible"
      }
    }
  },
  props: {
    compName: String
  },
  methods: {
    openCamera() {
      this.isShowingCamera = true;
    },
    onDecode(result) {
      this.result = result
      console.log(this.result)
      if (this.codeMap[result] === this.compName) {
        console.log("success")
        this.scanRes = 2
      } else {
        console.log("wrong code")
        this.scanRes = 1
      }
      this.$emit('decode', this.result)
      // close the camera
      this.isShowingCamera = false;
    },

    async onInit(promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permission"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        } else if (error.name === 'InsecureContextError') {
          this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }
      }
    }
  }
}
</script>

<style scoped>

</style>