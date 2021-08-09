<template>
  <div class="exhibition">
    <h1>{{component}}</h1>
    <br>
    <component v-bind:is="component" />
    <v-btn @click="toggle" v-if="component!=='End'">Next</v-btn>
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
    return {
      component: "LoginForm",
    }
  },
  methods: {
    toggle () {
      switch (this.component) {
        case "LoginForm": this.component = "Indispensable"; break;
        case "Indispensable": this.component = "Insight"; break;
        case "Insight": this.component = "Deliverin"; break;
        case "Deliverin": this.component = "Invisible"; break
        case "Invisible": this.component = "End"; break;
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
