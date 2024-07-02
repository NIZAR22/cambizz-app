<script>
export default {
  data() {
    return {
      show: false,
      message: "",
      color: "info", // Default color
      showCloseButton: true,
    };
  },
  methods: {
    showSnackbar(message, type) {
      this.message = message;
      this.color = type || "info"; // If no type provided, default to 'info
      this.show = true;

      // Automatically close Snackbar after 4 seconds if it's a success message
      if (this.color === "success") {
        this.showCloseButton = false; // Hide the close button for success message
        setTimeout(() => {
          this.show = false;
          this.showCloseButton = true; // Reset the close button for future messages
        }, 4000); // 4 seconds (4000 milliseconds)
      }
    },
  },
};
</script>

<template>
  <v-snackbar v-model="show" :color="color" top>
    {{ message }}
    <v-btn v-if="showCloseButton" @click="show = false" text> Close </v-btn>
  </v-snackbar>
</template>
