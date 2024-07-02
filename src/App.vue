<script>
import NavBar from "@/components/NavBar";
import FootBar from "@/components/FootBar";

export default {
  name: "App",
  components: {
    NavBar,
    FootBar,
  },
  data: () => ({
    //
  }),
};
</script>

<template>
  <v-app>
    <NavBar />
    <v-main class="ma-4">
      <router-view></router-view>
    </v-main>
    <FootBar />
  </v-app>
</template>
