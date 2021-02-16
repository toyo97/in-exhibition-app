<template>
  <div id="nfc-reader">
    This is the NFC reader component<br/>

    <button @click="scan">Scan tag!</button>
    <br/>
    <span v-if="tag !== ''">{{ tag }}</span>
    <span v-if="log_msg !== ''">LOG: {{ log_msg }}</span>
  </div>
</template>

<script>
/* global NDEFReader */

export default {
  name: "NFCReader",
  data() {
    return {
      tag: "",
      nfcPermitted: false,
      log_msg: ""
    }
  },
  created() {
    // console.log(this.$window)
  },
  methods: {
    log(msg) {
      this.log_msg = msg
    },
    scan() {
      const ndef = new NDEFReader();

      function read() {
        return new Promise((resolve, reject) => {
          const ctlr = new AbortController();
          ctlr.signal.onabort = reject;
          ndef.addEventListener("reading", event => {
            ctlr.abort();
            resolve(event);
          }, { once: true });
          ndef.scan({ signal: ctlr.signal }).catch(err => reject(err));
        });
      }

      read().then(({ serialNumber }) => {
        console.log(serialNumber);
      });
    },
  }
}
</script>

<style scoped>

</style>