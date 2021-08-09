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
              src="../public/favicon.png"
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
          to="/exhibition"
          color="#E3DFD3"
          light rounded
          value="exhibition"
          elevation="2"
      >
        <span class="mr-2">Start here</span>
        <v-icon>mdi-play</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid fill-height>
        <v-row align="center" class="ms-4">
        <router-view/>
        </v-row>
      </v-container>
    </v-main>

<!--    Bottom navigation to show progress of exhibits-->
    <BottomNav></BottomNav>
  </v-app>
</template>

<script>
import BottomNav from "@/components/BottomNav";

export default {
  name: 'App',
  components: {BottomNav},
  data: () => ({
    //
  }),
};
</script>
