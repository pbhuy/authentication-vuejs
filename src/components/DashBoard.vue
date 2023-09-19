<template>
  <section class="home">
    <div class="home-content">
      <h1>
        Hi <span v-if="user">{{ user.first_name }} {{ user.last_name }}</span
        ><span v-if="!user">guys</span>
      </h1>
      <!-- <h3>Backend Developer</h3> -->
      <p>
        Our project focuses on building a secure authentication and
        authorization system using Node.js, Express, and Vue.js. This system
        ensures the privacy and security of user data while providing a
        user-friendly experience.
      </p>
      <div class="btn-box">
        <router-link v-if="!user" to="/signup">Get started</router-link>
        <router-link v-if="user" to="/">Get started</router-link>
        <router-link to="/about">Explore me</router-link>
      </div>
    </div>
    <img src="../assets/symbol.png" alt="" />
    <div class="home-icon">
      <a href="https://www.facebook.com/pbhuy09" target="_blank"
        ><i class="bx bxl-facebook"></i
      ></a>
      <a href="https://www.linkedin.com/in/pbhuy" target="_blank"
        ><i class="bx bxl-linkedin"></i
      ></a>
      <a href="https://github.com/pbhuy" target="_blank"
        ><i class="bx bxl-github"></i
      ></a>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HomePage",
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 12%;
}
.home-content {
  max-width: 600px;
}
.home-content h1 {
  font-size: 56px;
  font-weight: 600;
  line-height: 1.2;
}
.home span {
  color: var(--mint);
}
.home-content h3 {
  font-size: 32px;
  font-weight: 700;
}
.home-content p {
  font-size: 20px;
  margin: 20px 0 40px;
}
.home-content .btn-box {
  display: flex;
  justify-content: space-between;
  width: 345px;
  height: 50px;
}
.btn-box a {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100%;
  background: var(--mint);
  border: 2px solid var(--mint);
  color: var(--dark-white);
  border-radius: 50px;
  font-size: 19px;
  color: var(--dark-white);
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  z-index: 1;
  overflow: hidden;
  transition: var(--smooth);
}
.btn-box a:hover {
  color: var(--mint);
}
.btn-box a:nth-child(2) {
  background: transparent;
  color: var(--mint);
}
.btn-box a:nth-child(2):hover {
  color: var(--dark-white);
}
.btn-box a:nth-child(2)::before {
  background: var(--mint);
}
.btn-box a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--dark-white);
  z-index: -1;
  transition: var(--smooth);
}
.btn-box a:hover::before {
  width: 100%;
}
.home-icon {
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 40px;
  width: 170px;
}
.home-icon a {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid var(--mint);
  border-radius: 50%;
  color: var(--mint);
  text-decoration: none;
  font-size: 20px;
  z-index: 1;
  overflow: hidden;
  transition: var(--smooth);
}
.home-icon a:hover {
  color: var(--dark-white);
}
.home-icon a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--mint);
  z-index: -1;
  transition: var(--smooth);
}
.home-icon a:hover::before {
  width: 100%;
}
.home img {
  width: 100%;
  height: auto;
}
@media (max-width: 1440px) {
  .home {
    padding: 20px 12%;
    transition: var(--smooth);
  }
  .home-content {
    padding: 10px 0;
    margin: 0px 20px;
  }
  .home img {
    width: 50%;
    margin-right: -150px;
    transition: var(--smooth);
  }
}
@media (max-width: 1280px) {
  .home {
    padding: 14px 2%;
    transition: var(--smooth);
  }
  .home-content {
    padding: 10px 0;
    margin: 0px 20px;
  }
  .home img {
    width: 50%;
    transition: var(--smooth);
  }
}
</style>
