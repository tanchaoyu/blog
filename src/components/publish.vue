<template>
  <div class="container" :style="background">
    <myhead on="2"></myhead>
    <div class="publishbox">
      <div
        class="publishitem"
        v-for="(item,index) in publishlist"
        :key="index"
        :data-index="index"
        @click="toEdit"
      >
        <img :src="item.pubImg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { getPublishlist } from "../http/http";
import myhead from "./myhead.vue";
import backpng from "../assets/back1.png";
export default {
  name: "publish",
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
      publishlist: [],
    };
  },
  mounted() {
    getPublishlist().then((res) => {
      console.log(res);
      this.publishlist = res.data;
    });
  },
  methods: {
    toEdit: function (e) {
      let num = parseInt(e.currentTarget.dataset.index);
      console.log(num);
      this.$router.push({
        name: "event",
        query: {
          type: "publish",
          content: this.publishlist[num].pubInfo,
          img: this.publishlist[num].pubImg,
          title: this.publishlist[num].pubTitle,
          id: this.publishlist[num].pubId,
        },
      });
    },
  },
};
</script>

<style >
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.publishbox {
  width: 40vw;
  display: flex;
  flex-wrap: wrap;
}
.publishitem {
  width: 15vw;
  height: 15vw;
  margin: 2vw;
}
.publishitem img {
  width: 100%;
}
</style>