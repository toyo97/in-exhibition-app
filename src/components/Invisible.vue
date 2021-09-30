<template>
  <div id="invisible">
    <div v-if="!quiz">
      <ExQRCode v-bind:comp-name=$options.name v-if="!quiz"></ExQRCode>
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