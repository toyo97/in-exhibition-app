<template>
  <div class="exhibition">
    <h3 class="title-main">{{exNames[component]}}</h3>
    <br>
    <component v-bind:is="component" />

    <v-row>
    <v-col class="text-right">
    <v-btn :disabled="!$store.state.obj.validForm" @click="toggle" v-if="component!=='End'">
      <span class="title-main">Avanti</span></v-btn>
    </v-col>
    </v-row>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import Indispensable from "@/components/Indispensable";
import Insight from "@/components/Insight";
import Deliverin from "@/components/Deliverin";
import Invisible from "@/components/Invisible";
import End from "@/components/End";

export default {
  name: 'Exhibition',
  components:{
    LoginForm, Indispensable, Insight, Deliverin, Invisible, End
  },
  data () {
    let exNames = {
      "LoginForm": "Profilo",
      "Indispensable": "Indispensable",
      "Insight": "Insight",
      "Deliverin": "Deliver-in",
      "Invisible": "In-visible"
    }

    return {
      exNames: exNames,
      component: "LoginForm",
      valid: false
    }
  },
  methods: {
    toggle () {
      switch (this.component) {
        case "LoginForm": this.component = "Indispensable"; this.$store.state.obj.curr_exhibit=0; break;
        case "Indispensable": this.component = "Insight"; break;
        case "Insight": this.component = "Deliverin"; break;
        case "Deliverin": this.component = "Invisible"; break
        case "Invisible": this.component = "End"; break;
      }
      this.$store.commit("nextExhibit")
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
