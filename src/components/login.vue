<template>
  <div class="container" :style="background">
    <div class="loginbox">
      <p>Account Name</p>
      <div>
        <input type="text" class="username" v-model="username" />
      </div>
      <p>Password</p>
      <div>
        <input type="text" class="password" v-model="password" />
      </div>
      <div class="signin" @click="login">Sign In</div>
    </div>
  </div>
</template>

<script>
import { login } from "../http/http";
import backpng from "../assets/back1.png";
export default {
  name: "login",
  components: {},
  data() {
    return {
      background: {
        backgroundImage: "url(" + backpng + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundColor: "black",
        width: "70%",
        height: "100vh",
      },
      username: null,
      password: null,
    };
  },
  mounted() {},
  methods: {
    login: function () {
      login(this.username, this.password).then((res) => {
        console.log(res);
        if (res.data.id) {
          sessionStorage.setItem("userid", res.data.id);
          this.$router.push({ name: "index" });
        }
      });
    },
  },
};
</script>

<style >
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginbox {
  position: relative;
  width: 22vw;
  height: 14vw;
  border: #e2f0d9 0.4vw solid;
  border-radius: 0.3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loginbox p {
  color: #e2f0d9;
  font-size: 1.25vw;
  margin: 0.5vw;
}
.loginbox div {
  border-bottom: #e2f0d9 2px solid;
}
.loginbox div input {
  color: #e2f0d9;
  margin: 0.2vw;
}
.signin {
  color: #e2f0d9;
  border: #e2f0d9 0.2vw solid;
  font-size: 1.25vw;
  margin: 0.5vw;
  width: 11vw;
  height: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2vw;
  position: absolute;
  top: 15vw;
  z-index: 2;
}
</style>