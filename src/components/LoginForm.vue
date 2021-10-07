<template>
  <div id="login-form">
    <p>Dicci chi sei</p>
    <v-form v-model="$store.state.obj.validForm">
    <v-text-field v-model="user_name" :rules="nameRules" placeholder="Come ti chiami?" required></v-text-field>
    <br>
      <v-text-field v-model="age" :rules="ageRules" placeholder="Quanti anni hai?" required></v-text-field>  <br>
      <v-select v-model="gender" :items="items" required placeholder="La tua identità di genere è"></v-select>
      <v-text-field v-model="gender" :rules="genderRules" v-if="!['Uomo', 'Donna', 'Non-binary', 'Preferisco non rispondere', ''].includes(gender) || isOther"
             placeholder="La tua identità di genere è"></v-text-field><br>
    </v-form>

  </div>
</template>

<script>
export default {
  name: "loginform",
  data () {
    return {
      isOther: false,
      gender: '',
      items: ['Uomo', 'Donna', 'Non-binary', 'Preferisco non rispondere', 'Altro'],
      nameRules: [
          v => !!v || "Devi inserire un nome",
          v => /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(v) || "Numeri e caratteri speciali non sono ammessi"
      ],
      ageRules: [
          v => /^\d+$/.test(v) || "Età non valida",
          v => parseInt(v) < 110 && parseInt(v) > 0 || "Seriamente?"
      ],
      genderRules: [
          v => v.length > 0 || "Devi inserire una scelta"
      ]
    }
  },
  watch: {
    'gender': function (newVal) {
      if (newVal === 'Altro') {
        this.gender = ''
        this.isOther = true
      }
    }
  },
  computed: {
    user_name: {
      get () {
        return this.$store.state.obj.user_name
      },
      set (value) {
        this.$store.commit('updateUserName', value)
      }
    },
    age: {
      get() {
        return this.$store.state.obj.age
      },
      set(value) {
        this.$store.commit('updateAge', value)
      }
    }
  }
}
</script>

<style scoped>

</style>