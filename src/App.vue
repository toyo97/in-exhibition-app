<template>
  <v-app>
    <v-app-bar
        app
        color="#DD573A"
        dark
    >
      <div class="d-flex align-center">
        <router-link
          to="/"
        >
          <v-img
              alt="IN logo"
              class="shrink mr-2"
              contain
              src="../public/logo.png"
              transition="scale-transition"
              width="40"
          />
        </router-link>

<!--        <v-img-->
<!--            alt="Vuetify Name"-->
<!--            class="shrink mt-1"-->
<!--            contain-->
<!--            min-width="100"-->
<!--            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"-->
<!--            width="100"-->
<!--        />-->
      </div>

      <v-spacer></v-spacer>

      <v-btn
          v-if="$store.state.obj.user_name !== null && $store.state.obj.validForm"
          color="navy"
          class="mx-2"
          fab
          small
          elevation="2"
      >
        <span style="font-size: 1.5em">{{$store.state.obj.user_name.charAt(0)}}</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container md="6" v-if="isMobile()" fluid fill-height :style="styles">
        <v-row align="center" justify="center">
          <v-col>
          <router-view/>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else fluid fill-height>
        <v-row align="center">
          <v-col sm="12" class="mr-8 ml-8">
            <About></About>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

<!--    Bottom navigation to show progress of exhibits-->
<!--    <BottomNav></BottomNav>-->
  </v-app>
</template>

<script>
// import BottomNav from "@/components/BottomNav";

import About from "@/views/About";
export default {
  name: 'App',
  components: {About},
  // components: {BottomNav},
  data: () => ({
    bgclass: {
      'background-repeat': 'no-repeat',
      'background-size': 'auto'
    }
  }),
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  },
  computed: {
    styles() {
      return {
        'background-image': 'url(' + require('./assets/gfx/background2.png') + ')',
        'background-repeat': 'no-repeat',
        'background-size': 'cover'
      }
    }
  }
};
</script>
