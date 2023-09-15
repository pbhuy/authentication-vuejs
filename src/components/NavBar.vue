<template>
  <header>
    <router-link to="/"
      ><img src="../assets/logo.png" alt="logo" class="logo"
    /></router-link>
    <ul class="navbar" @click="openNav" :class="active ? 'open' : ''">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">Projects</router-link></li>
      <li><router-link to="/">Portfolio</router-link></li>
      <li><router-link to="/">About</router-link></li>
    </ul>
    <div class="main">
      <router-link to="/signin"><button>Sign In</button></router-link>
      <i @click="openNav" class="bx" :class="active ? 'bx-x' : 'bx-menu'"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    openNav() {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
.logo {
  width: 75px;
  height: 75px;
  cursor: pointer;
}
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
.main i {
  font-size: 35px;
  margin-right: 7px;
  display: none;
  z-index: 1001;
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
  .main i {
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
