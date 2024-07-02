<script>
export default {
  name: "GalleryView",

  data: () => ({
    socialLinks: {
      "mdi-facebook": "https://www.facebook.com",
      "mdi-twitter": "https://www.twitter.com",
      "mdi-linkedin": "https://www.linkedin.com",
      "mdi-instagram": "https://www.instagram.com",
    },
  }),

  methods: {
    getSocialLink(index) {
      return this.socialLinks[index];
    },
  },
};
</script>

<style>
/* Define the style for the social links */
.social-link {
  text-decoration: none; /* Remove underline */
  color: inherit !important; /* Maintain the default color */
}

.black-section {
  background-color: black;
  color: white; /* Change text color if needed */
}
</style>

<template>
  <v-footer color="black" app>
    <v-row no-gutters>
      <v-col cols="12">
        <div
          class="black-section d-flex align-center justify-center flex-wrap px-4"
        >
          <strong v-if="$vuetify.breakpoint.mdAndUp">
            Get connected with us on social networks!
          </strong>

          <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>

          <v-btn
            v-for="(link, icon) in socialLinks"
            :key="icon"
            class="mx-4"
            icon
            :small="true"
          >
            <a
              :href="link"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <v-icon color="white">{{ icon }}</v-icon>
            </a>
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12">
        <div class="text-center px-4 py-2 black-section caption">
          <span class="caption">&copy;</span> Copyright
          {{ new Date().getFullYear() }}
          <strong class="caption">Camry's Touch</strong>
          <br v-if="!$vuetify.breakpoint.mdAndUp" />
          - All Rights Reserved.
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>
