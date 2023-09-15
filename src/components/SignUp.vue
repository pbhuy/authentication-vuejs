<template>
  <div class="container">
    <router-link to="/"><i class="bx bx-x form_close"></i></router-link>
    <div class="form">
      <form action="#">
        <h2>Register</h2>
        <div class="input_box">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
            required
          />
          <i class="bx bx-envelope email"></i>
        </div>
        <div class="input_box">
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
            required
            ref="pwd"
          />
          <i class="bx bx-lock-alt password"></i>
          <i
            class="bx pwd_hide"
            @click="showPassword()"
            :class="showPwd ? 'bx-hide' : 'bx-show'"
          ></i>
        </div>
        <div class="input_box">
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter repeat password"
            required
            ref="repwd"
          />
          <i class="bx bx-lock-alt password"></i>
          <i
            class="bx pwd_hide"
            @click="showRepeatPassword()"
            :class="showRePwd ? 'bx-hide' : 'bx-show'"
          ></i>
        </div>
        <div class="optional">
          <span class="checkbox">
            <input type="checkbox" name="" id="check" />
            <label for="check">Remember me</label>
          </span>
          <a href="#" class="forgot">Forgot password</a>
        </div>
        <button class="btn_signin">Register</button>
        <div class="signup">
          Already have an account?
          <router-link to="/signin" id="signup">Sign in</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      showPwd: false,
      showRePwd: false,
    };
  },
  methods: {
    showPassword() {
      this.showPwd = !this.showPwd;
      this.$refs.pwd.type = this.showPwd ? "text" : "password";
    },
    showRepeatPassword() {
      this.showRePwd = !this.showRePwd;
      this.$refs.repwd.type = this.showRePwd ? "text" : "password";
    },
  },
};
</script>

<style scoped>
::-ms-reveal {
  display: none;
}
.container {
  position: absolute;
  max-width: 360px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(white, white) padding-box,
    linear-gradient(135deg, var(--mint), 50%, #6082f4) border-box;
  border-radius: 50em;
  border: 2px solid transparent;
  z-index: 101;
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1);
}
.form_close {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 30px;
  color: var(--dark);
  overflow: 0.7;
  cursor: pointer;
}
.container h2 {
  font-size: 40px;
  font-weight: 700;
  background: #121fcf;
  background: linear-gradient(135deg, var(--mint), 50%, #6082f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}
.input_box {
  position: relative;
  margin-top: 20px;
  width: 100%;
  height: 50px;
}
.input_box input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 30px;
  color: #333;
  border-bottom: 1.5px solid #aaaaaa;
  transition: var(--smooth);
  font-size: 15px;
}
.input_box input:focus {
  border-color: var(--mint);
}
.input_box i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #707070;
}
.input_box i.email,
.input_box i.password {
  left: 0;
}

.input_box input:focus ~ i.email,
.input_box input:focus ~ i.password {
  color: var(--mint);
}
.input_box i.pwd_hide {
  right: 0;
  font-size: 20px;
  cursor: pointer;
}
.optional {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
}
.container a {
  color: var(--mint);
  font-size: 15px;
  text-decoration: none;
}
.container a:hover {
  text-decoration: underline;
}
.checkbox {
  display: flex;
  white-space: nowrap;
  column-gap: 8px;
  font-size: 15px;
}
.checkbox input {
  accent-color: var(--mint);
}
.checkbox label {
  color: var(--dark);
  font-size: 15px;
  cursor: pointer;
  user-select: none;
}
.container .btn_signin {
  background: linear-gradient(135deg, var(--mint), 50%, #6082f4);
  margin-top: 30px;
  width: 100%;
  padding: 15px 0;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  color: #fff;
  cursor: pointer;
}
.signup {
  font-size: 15px;
  text-align: center;
  margin-top: 25px;
}
</style>
