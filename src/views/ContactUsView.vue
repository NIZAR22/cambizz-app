<script>
import emailjs from "emailjs-com";
import SnackBar from "@/components/SnackBar.vue";

export default {
  name: "ContactUsView",

  components: {
    SnackBar,
  },
  data: () => ({
    formData: {
      name: "",
      email: "",
      phone: "",
      services: [],
      comments: "",
    },
    serviceOptions: [
      "Laundry",
      "Dishes",
      "Organization",
      "Cleaning",
      "Grocery Shopping",
      "Meal Preparation",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    formattedPhone: "",
  }),

  methods: {
    // Method to send the email using EmailJS
    sendEmail() {
      // Parameters to be sent to EmailJS template
      const templateParams = {
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        services: this.formData.services.join(", "), // Convert services array to string
        comments: this.formData.comments,
      };
      // Send email using EmailJS
      emailjs
        .send(
          "service_cambizz",
          "template_wdam81j",
          templateParams,
          "Fl9J878FwEmwkrdaE"
        )
        .then((response) => {
          // On success, log response and reset the form
          console.log("Success:", response.status, response.text);
          this.$refs.snackbar.showSnackbar("Success! Email sent.", "success");
          this.resetForm(); // Reset the form after successful submission
        })
        .catch((error) => {
          // If there's an error, log it and handle the error
          console.error("Error:", error);
          this.$refs.snackbar.showSnackbar("Error sending email.", "error");
          // Handle error, show error message, etc.
        });
    },
    submitForm() {
      if (this.$refs.form.validate()) {
        this.sendEmail(); // Call the sendEmail method on form validation
      }
    },
    // Method to reset the form fields after submission
    resetForm() {
      this.formData = {
        name: "",
        email: "",
        phone: "",
        services: [],
        comments: "",
      };
      this.formattedPhone = "";
    },
    // Method to format phone number input
    formatPhoneNumber(value) {
      // Remove non-numeric characters
      const cleanValue = value.replace(/\D/g, "");

      // Limit input to only numeric characters
      if (/^\d*$/.test(cleanValue)) {
        // Format phone number with hyphens (###-###-####)
        if (cleanValue.length <= 10) {
          const formattedNumber = cleanValue.replace(
            /(\d{3})(\d{1,3})?(\d{1,4})?/,
            (_, p1, p2, p3) => {
              let part1 = p1;
              let part2 = p2 ? `-${p2}` : "";
              let part3 = p3 ? `-${p3}` : "";
              return part1 + part2 + part3;
            }
          );
          this.formattedPhone = formattedNumber;
          this.formData.phone = cleanValue; // Set the cleaned value to the form data
        }
      }
    },
  },
};
</script>

<template>
  <v-container>
    <v-card class="contact-card">
      <v-card-title>Contact Us</v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="submitForm">
          <v-text-field
            v-model="formData.name"
            label="Name *"
            required
          ></v-text-field>
          <v-text-field
            v-model="formData.email"
            label="Email *"
            required
            :rules="emailRules"
          ></v-text-field>
          <v-text-field
            v-model="formattedPhone"
            label="Phone"
            @input="formatPhoneNumber"
          ></v-text-field>
          <v-select
            v-model="formData.services"
            :items="serviceOptions"
            label="Services *"
            multiple
          ></v-select>
          <v-textarea
            v-model="formData.comments"
            label="Comments"
            :counter="300"
            hint="Maximum 300 characters"
          ></v-textarea>
          <v-btn color="primary" type="submit">Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <SnackBar ref="snackbar" />
  </v-container>
</template>
