<template>
  <div id="invisible">
    <div v-if="!showAudioPlayer">
      <ExQRCode v-bind:comp-name=$options.name></ExQRCode>
      <p>
        <span>
          Oppure, ascolta direttamente la storia di Sissi!
        </span>
        <v-btn @click="function () {showAudioPlayer = true}" class="title-main ma-3">Ascolta</v-btn>
      </p>
    </div>
    <div v-if="showAudioPlayer" align="center" class="px-auto py-3">
      <v-img
          v-bind:src="require('../assets/imgs/sissi.png')" width="150"></v-img>
      <mini-audio
          class="my-4"
          style="background-color: #F5C02D !important; background-image: none !important;"
          v-bind:audio-source="require('../assets/audio/sissi_voice_recording.mp3')"
      ></mini-audio>
    </div>
  </div>
</template>

<script>
import ExQRCode from "@/components/ExQRCode";

export default {
  name: "Invisible",
  components: {ExQRCode},
  methods: {
  },
  data () {
    return {
      showAudioPlayer: false
    }
  }
}
</script>

<style scoped>

</style>