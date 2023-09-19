<template>
  <header>
    <router-link to="/"
      ><img src="../assets/logo.png" alt="logo" class="logo"
    /></router-link>
    <ul class="navbar" @click="openNav" :class="active ? 'open' : ''">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">Projects</router-link></li>
      <!-- <li><router-link to="/">Portfolio</router-link></li> -->
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <div class="main">
      <router-link to="/signin"
        ><button v-if="!user">Sign In</button></router-link
      >
      <div v-if="user" class="profile">
        <router-link to="/profile"
          ><img class="avatar" src="../assets/user.png" alt=""
        /></router-link>
        <router-link to="/profile"
          >{{ user.first_name }} {{ user.last_name }}</router-link
        >
        <i
          @click="showOptional"
          class="bx profile_open"
          :class="open ? 'bx-chevron-up' : 'bx-chevron-down'"
        ></i>
        <div
          class="optional_profile"
          :class="open ? 'optional_profile' : 'close'"
        >
          <ul class="optional">
            <li>
              <router-link to="/profile" @click="handleProfile"
                >Profile</router-link
              >
            </li>
            <li>
              <a href="javascript:void(0)" @click="handleLogout">Log out</a>
            </li>
          </ul>
        </div>
      </div>
      <i
        id="btn_menu"
        @click="openNav"
        class="bx"
        :class="active ? 'bx-x' : 'bx-menu'"
      ></i>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {
      active: false,
      open: false,
    };
  },
  methods: {
    openNav() {
      this.active = !this.active;
    },
    showOptional() {
      this.open = !this.open;
    },
    handleLogout() {
      this.open = !this.open;
      localStorage.removeItem("access_token");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },
    handleProfile() {
      this.open = !this.open;
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 12%;
  transition: var(--smooth);
}
.logo {
  width: 75px;
  height: 75px;
  cursor: pointer;
}
.navbar {
  display: flex;
  list-style-type: none;
}
.navbar a {
  color: var(--dark);
  font-size: 1.1rem;
  font-weight: 600;
  padding: 5px 0;
  margin: 0 30px;
  text-decoration: none;
  transition: var(--smooth);
}
.navbar a:hover {
  color: var(--mint);
  transition: var(--smooth);
}
.main {
  display: flex;
  align-items: center;
}
.main button {
  margin-right: 25px;
  margin-left: 10px;
  color: var(--dark);
  font-size: 1.1rem;
  transition: var(--smooth);
  border: 2px solid var(--mint);
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
}
button:hover {
  background-color: var(--mint);
  transition: var(--smooth);
  color: var(--dark-white);
}
.main #btn_menu {
  font-size: 35px;
  margin-right: 7px;
  display: none;
  z-index: 1001;
}
.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.avatar {
  width: 45px;
  height: 45px;
  margin: 0 5px;
  cursor: pointer;
}
.profile a {
  font-weight: 500;
  margin-left: 5px;
  text-decoration: none;
  color: var(--dark);
  cursor: pointer;
}
.profile i {
  margin-left: 10px;
  font-size: 25px;
  color: gray;
  cursor: pointer;
  border-radius: 50%;
  /* border: 1px solid black; */
  transition: var(--smooth);
}
.profile i:hover {
  background-color: rgb(206, 206, 206);
}
.optional_profile {
  position: relative;
  transition: var(--smooth);
}
.close {
  display: none;
}
.optional {
  position: absolute;
  top: 0;
  right: 0;
  width: 8rem;
  box-shadow: 0 0.15em 0.25em rgba(black, 0.25);
  transform: translateY(40%);
  border-radius: 5px;
  border: 1px solid var(--baby-mint);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  text-align: center;
}
.optional li {
  list-style-type: none;
  padding: 10px 10px;
  font-weight: 600;
}
.optional li a {
  color: var(--dark);
  text-decoration: none;
  transition: var(--smooth);
  cursor: pointer;
}
.optional li a:hover {
  color: var(--mint);
}
@media (max-width: 1280px) {
  header {
    padding: 14px 2%;
    transition: var(--smooth);
  }
  .navbar a {
    padding: 5px 0;
    margin: 0px 20px;
  }
}
@media (max-width: 768px) {
  .main #btn_menu {
    display: inline-block;
  }
  .navbar {
    position: absolute;
    top: 100%;
    right: -100%;
    width: 200px;
    height: 29vh;
    background: var(--mint);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    transition: var(--smooth);
    margin-right: 50px;
  }
  .navbar a {
    display: block;
    margin: 12px 0;
    padding: 0 25px;
    transition: var(--smooth);
  }
}
.navbar.open {
  right: 2%;
}
</style>
