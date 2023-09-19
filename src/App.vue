<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    NavBar,
  },
  async created() {
    try {
      const response = await axios.get("/users");
      this.$store.dispatch("user", response.data.data);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap");
:root {
  --mint: #42b883;
  --baby-mint: #2dd78b;
  --light-mint: #c7ffd8;
  --dark-white: #edf0f1;
  --dark: #040d12;
  --smooth: all 0.3s ease 0s;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

body {
  background-image: url("/src/assets/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
}
</style>
