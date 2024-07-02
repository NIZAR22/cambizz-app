<script>
export default {
  name: "App",
  components: {
    //
  },
  data: () => ({
    drawer: true,
    links: [
      { icon: "home", text: "Home", route: "/" },
      { icon: "book", text: "About Us", route: "/about-us" },
      { icon: "cleaning_services", text: "Services", route: "/services" },
      { icon: "email", text: "Contact Us", route: "/contact-us" },
      { icon: "work_history", text: "Gallery", route: "/gallery" },
    ],
  }),
};
</script>

<style>
.border {
  border-left: 4px solid #0ba518;
}
</style>

<template>
  <nav>
    <v-app-bar color="red" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Camry's Touch</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark app>
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on"> </v-btn>
      </template>
      <v-list flat>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          active-class="border"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
