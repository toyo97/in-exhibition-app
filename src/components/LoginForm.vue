<template>
  <div id="login-form">
    This is the Login form component
    <v-form v-model="$store.state.obj.validForm">
    <v-text-field v-model="user_name" :rules="nameRules" placeholder="Inserisci il tuo nome" required></v-text-field>
    <br>
      <v-text-field v-model="age" :rules="ageRules" placeholder="Inserisci la tua età" required></v-text-field>  <br>
      <v-select v-model="gender" :items="items" required></v-select>
      <v-text-field v-model="gender" :rules="genderRules" v-if="!['Uomo', 'Donna', 'Preferisco non rispondere'].includes(gender)"
             placeholder="Inserisci la tua identità di genere"></v-text-field><br>
    </v-form>

  </div>
</template>

<script>
export default {
  name: "loginform",
  data () {
    return {
      gender: 'Donna',
      items: ['Uomo', 'Donna', 'Preferisco non rispondere', 'Altro'],
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