<template>
  <div class="container" :style="background">
    <myhead on="1"></myhead>
    <p class="reserchp General">General introduction</p>
    <p class="reserchp">
      In higher plants, pollen mother cells (PMCs) undergo meiosis to sexually reproduce spores with halved chromosome number and ploidy, which thereafter fuse with haploid eggs yielded by female meiosis to complete fertilization. Irregular male meiosis either leads to unbalanced chromosome segregation with associated aneuploid progenies and impaired fertility, or causes meiotic restitution and the production of unreduced gametes. Male meiosis thus ensures the genomic ploidy consistency over generations, benefits genome diversification, and is vital for seed set and fertility of plants. It has been considered that in the history of plant evolution, whole genome duplication (WGD) occurs repeatedly, and the unreduced gamete formation is the main source of plant polyploidization. Many studies have reported that environmental factors can influence one or more processes during male meiosis and subsequently causes altered meiotic recombination landscape and evokes meiotic restitution, pointing to a notion that environment conditions have a huge impact on genome stability of plants, and may have a potential role in driving plant genomic WGD by interacting with meiosis. Our lab has a strong interest in understanding the genetic factors and signaling pathways involved in controlling male meiosis, and the mechanism underlining the sensitivity and response of male meiosis to environmental factors especially for temperature alterations. We use model plant
      as a tool trying to address the corresponding biological questions, aiming to contribute to polyploid and stress-tolerant crop breeding. Generally, we are now working on the following four aspects:
    </p>
    <div class="researchbox">
      <div
        class="researchitem"
        v-for="(item,index) in researchlist"
        :key="index"
        :data-index="index"
        @click="toEdit"
      >
        <p>{{item.resTitle}}</p>
        <img :src="item.resImg" alt class="researchimg" />
      </div>
    </div>
  </div>
</template>

<script>
import { getResearchlist } from "../http/http";
import myhead from "./myhead.vue";
import backpng from "../assets/back1.png";
export default {
  name: "research",
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
      researchlist: [],
    };
  },
  mounted() {
    getResearchlist().then((res) => {
      console.log(111);
      console.log(res);
      this.researchlist = res.data;
    });
  },
  methods: {
    toEdit: function (e) {
      let num = parseInt(e.currentTarget.dataset.index);
      console.log(num);
      this.$router.push({
        name: "event",
        query: {
          type: "research",
          content: this.researchlist[num].resInfo,
          img: this.researchlist[num].resImg,
          title: this.researchlist[num].resTitle,
          id: this.researchlist[num].resId,
        },
      });
    },
  },
};
</script>

<style >
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.reserchp {
  width: 90%;
  margin: 2px;
  color: #fff4cd;
  font-size: 1vw;
  font-weight: 400;
  line-height: 1.25vw;
}
.General {
  margin: 1vw;
}
.researchbox {
  margin-top: 1vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
.researchimg {
  width: 60%;
}
.researchitem {
  width: 22%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.researchbox p {
  color: #fff4cd;
  width: 60%;
  font-size: 0.8vw;
  height: 3vw;
}
</style>