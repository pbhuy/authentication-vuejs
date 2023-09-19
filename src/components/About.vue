<template>
  <div>
    <div class="container">
      <div class="content">
        <h1>About me</h1>
        <h3>Lorem ipsum dolor sit amet consectetur</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga vitae,
          commodi itaque aut, recusandae voluptate cum sapiente at, porro animi
          modi illo. Enim veritatis ut delectus cum exercitationem quasi
          voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fuga illo nisi provident pariatur magni cumque voluptates doloribus et
          alias, porro saepe eos nihil corporis amet animi quaerat. Doloremque,
          culpa eligendi?
        </p>
        <button>Read more</button>
        <div class="social">
          <a href="#"><i class="bx bxl-facebook"></i></a>
          <a href="#"><i class="bx bxl-github"></i></a>
          <a href="#"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>
      <div class="avatar">
        <img src="../assets/symbol.png" alt="avatar" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  setup() {
    return {};
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10% 12%;
}
.content {
  max-width: 660px;
}
.content h1 {
  text-align: center;
  padding: 10px 0;
}
.content p {
  font-size: 1.1rem;
  margin: 10px 0;
}
.container button {
  position: relative;
  background: transparent;
  border: 2px solid var(--mint);
  border-radius: 50px;
  font-size: 20px;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  color: var(--mint);
  transition: var(--smooth);
  z-index: 1;
  overflow: hidden;
}
.container button:hover {
  color: var(--dark-white);
}
.container button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  z-index: -1;
  background: var(--mint);
  transition: var(--smooth);
}
.container button:hover::before {
  width: 100%;
}
.avatar img {
  max-width: 640px;
  height: 400px;
}
.social {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 200px;
  padding: 20px;
  font-size: 25px;
  text-decoration: none;
}
.social a {
  position: relative;
  border-radius: 50%;
  border: 2px solid var(--mint);
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  overflow: hidden;
  z-index: 1;
  color: var(--mint);
}
.social a:hover {
  color: var(--dark-white);
}
.social a::before {
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
.social a:hover::before {
  width: 100%;
}
@media (max-width: 1280px) {
  .content {
    max-width: 500px;
    width: 80%;
    padding: 10% 0;
  }
  .avatar img {
    width: 100%;
    height: auto;
  }
}
@media (max-width: 960px) {
  .content {
    max-width: 400px;
    width: 90%;
    padding: 7% 2%;
  }
  .avatar img {
    width: 12 0%;
    height: auto;
  }
}
</style>
