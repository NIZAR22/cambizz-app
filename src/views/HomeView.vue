<script>
// import HelloWorld from "../components/HelloWorld";

export default {
  name: "HomeView",

  components: {
    // HelloWorld,
  },
  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
  }),
};
</script>

<!-- <template>
  <hello-world />
</template> -->
<template>
  <!-- <div class="home">
    <h1>This is an home page</h1>
  </div> -->

  <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>
