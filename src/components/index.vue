<template>
  <div class="container" :style="background">
    <myhead on="0"></myhead>
    <div class="content">
      <div class="carouselbox">
        <p class="carouselinfo">
          Heat Stress Interferes with Chromosome Segregation and Cytokinesis
          during Male Meiosis
          in Arabidopsis thaliana
        </p>
        <div class="carouselcontainer">
          <div class="items" ref="items">
            <div v-for="(item,index) in carouselitem" :key="index" class="item">
              <img :src="item" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="aboutbox">
        <div class="title">About Bing Liu Lab</div>
        <p
          class="about"
        >The Bing Liu lab was initiated since Dec. 2018. We have a particular interest in male meiosis of plants. We do hope that our work would contribute to the understanding of how male meiosis and recombination in plants is genetically controlled. Moreover, we try to understand the molecular mechanism that underlines the sensitivity and response of male meiosis in plants to environment conditions, which may benefit stress-tolerant crop breeding.</p>
      </div>
    </div>
  </div>
</template>

<script>
import myhead from "./myhead.vue";
import backpng from "../assets/back1.png";
import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";

export default {
  name: "index",
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
      carouselitem: [carousel3, carousel1, carousel2, carousel3, carousel1],
    };
  },
  mounted() {
    this.swapper();
    document.title = "The Bing Liu Lab";
  },
  methods: {
    swapper: function () {
      let items = this.$refs.items;
      let now = 1;
      let timer = setInterval(() => {
        if (now == 3) {
          now++;
          items.style.transform = "translate(" + -now * 20 + "%)";
          items.style.transition = "2s";
          setTimeout(() => {
            now = 1;
            items.style.transform = "translate(" + -now * 20 + "%)";
            items.style.transition = "0s";
          }, 2001);
        } else {
          now++;
          items.style.transform = "translate(" + -now * 20 + "%)";
          items.style.transition = "2s";
        }
      }, 2001);
      timer;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.content {
  width: 100%;
  margin-top: 3vw;
  display: flex;
}
.carouselbox {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carouselinfo {
  width: 60%;
  color: #f5ebc6;
  font-family: Times New Roman;
  font-size: 1.25vw;
  margin: 1vw;
}
.aboutbox {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  width: 50%;
  font-size: 2vw;
  color: #fff4cd;
  font-family: Times New Roman;
  margin: 1vw;
}
.about {
  width: 70%;
  color: #fff4cd;
  line-height: 1.7vw;
  font-family: Times New Roman;
  font-size: 1.25vw;
}
.carouselcontainer {
  width: 26vw;
  overflow: hidden;
}
.items {
  width: 500%;
  display: flex;
  transform: translate(-20%);
}
.item {
  width: 20%;
}
.item img {
  width: 100%;
}
</style>
