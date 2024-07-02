import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@mdi/font/css/materialdesignicons.css"; // Import the MDI CSS
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Import the Material Design Icons CSS

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md",
  },
});
