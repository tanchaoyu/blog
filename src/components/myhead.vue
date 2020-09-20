<template>
  <div class="container">
    <div class="top">
      <img src="../assets/head1.png" alt srcset class="headpng" />
      <!-- <div class="labpbox">
        <div class="labp">Laboratory of Plant Meiosis and Reproduction</div>
        <div class="labp2">Bing Liu Lab</div>
      </div>
      <p class="headcontent">坚持，是一种品格</p>-->
    </div>
    <nav class="links">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <router-link to="/index">
        <div :class="on==0?'on':'icon'">Home</div>
      </router-link>
      <router-link to="/research">
        <div :class="on==1?'on':'icon'">Research</div>
      </router-link>
      <router-link to="/publish">
        <div :class="on==2?'on':'icon'">Publication</div>
      </router-link>
      <router-link to="/person">
        <div :class="on==3?'on':'icon'">Personal</div>
      </router-link>
      <router-link to="/eventlist">
        <div :class="on==4?'on':'icon'">Event</div>
      </router-link>
      <router-link to="/contact">
        <div :class="on==5?'on':'icon'">Contact</div>
      </router-link>
      <router-link to="/links">
        <div :class="on==6?'on':'icon'">Link</div>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "myhead",
  components: {},
  props: {
    on: Number,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style >
.container {
}
.top {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1vw;
  padding-bottom: 1vw;
  margin-left: 3vw;
}
.links {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.icon {
  color: #e2f0d9;
  font-size: 1.4vw;
  font-weight: 600;
}
.on {
  color: #00e4ff;
  font-size: 1.4vw;
  font-weight: 600;
}
.headpng {
  /* width: 23.3vh;
  height: 10vh; */
  width: 70vw;
  height: 5vw;
}
.labpbox {
  align-self: flex-end;
}
.labp {
  color: #e2f0d9;
  font-size: 1.5vw;
  font-family: Times New Roman;
}
.labp2 {
  color: #e2f0d9;
  font-size: 1vw;
  font-family: Times New Roman;
}
.headcontent {
  color: #e2f0d9;
}
.headcontent {
  margin-left: 10vw;
  font-family: DFKai-SB;
  font-size: 1.5vw;
  color: #e2f0d9;
}
</style>
