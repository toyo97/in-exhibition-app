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
    <div v-if="showAudioPlayer">
      <v-img v-bind:src="require('../assets/gfx/Group.png')"></v-img>
      <mini-audio
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