<template>
  <div class="container" :style="background">
    <myhead on="5"></myhead>
    <div class="info">
      <p>Dr. Bing Liu</p>
      <p>Research: Plant Meiosis and Reproduction</p>
      <p>Address: 8-A506, College of Life Sciences, South-Central University for Nationalities, 430074 Wuhan, China</p>
      <p class="dire">湖北省武汉市，洪山区，中南民族大学，生命科学学院，8A506</p>
      <p>E-mail: bl472@scuec.edu.cn</p>
      <p>Phone: (+86) 13554039531</p>
      <p>Website:</p>
    </div>
  </div>
</template>

<script>
import myhead from "./myhead.vue";
import backpng from "../assets/back1.png";
export default {
  name: "contact",
  components: {
    myhead,
  },
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
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style >
.container {
  justify-content: flex-start;
}
.info {
  align-self: flex-start;
  margin-top: 8vw;
  margin-left: 6vw;
}
.info p {
  color: #fff4cd;
  font-family: Times New Roman;
  font-weight: 400;
  font-style: italic;
  line-height: 36px;
  font-size: 18px;
}
.dire {
  font-family: DFKai-SB;
}
</style>