<template>
  <div id="invisible">
    <div>
      <ExQRCode v-bind:comp-name=$options.name></ExQRCode>
      <p>
        <span>
          Oppure, ascolta direttamente la storia di Sissi!
        </span>
        <v-btn @click="toQuiz" class="title-main ma-3">Ascolta</v-btn>
      </p>
    </div>
  </div>
</template>

<script>
import ExQRCode from "@/components/ExQRCode";

export default {
  name: "Invisible",
  components: {ExQRCode}
}
</script>

<style scoped>

</style>