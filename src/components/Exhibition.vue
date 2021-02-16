<template>
  <div class="exhibition">
    This is the Exhibition page.<br>
    <component v-bind:is="component" />
    <button v-on:click="toggle" v-if="component!=='End'">Next</button>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import Quiz from "@/components/Quiz";
import NFCReader from "@/components/NFCReader";
import GooseGame from "@/components/GooseGame";
import End from "@/components/End";

export default {
  name: 'Exhibition',
  components:{
    LoginForm, Quiz, NFCReader, GooseGame, End
  },
  data () {
    return {
      component: "LoginForm"
    }
  },
  methods: {
    toggle () {
      switch (this.component){
        case "LoginForm": this.component = "Quiz"; break;
        case "Quiz": this.component = "NFCReader"; break;
        case "NFCReader": this.component = "GooseGame"; break;
        case "GooseGame": this.component = "End"; break;
      }
    }
  }
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
