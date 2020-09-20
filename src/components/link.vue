<template>
  <div class="container" :style="background">
    <myhead on="6"></myhead>
    <div class="linkbox">
      <a
        class="linkitem"
        v-for="(item,index) in linklist"
        :key="index"
        :href="item.link"
      >{{item.name}}</a>
    </div>
  </div>
</template>

<script>
import myhead from "./myhead.vue";
import backpng from "../assets/back1.png";
export default {
  name: "links",
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
      linklist: [
        {
          name: "South-Central University for Nationalities",
          link: "https://www.scuec.edu.cn/s/1/t/560/main.htm",
        },
        { name: "Science", link: "https://www.sciencemag.org/" },
        { name: "Nature", link: "https://www.nature.com/nature/research" },
        { name: "Cell", link: "https://www.cell.com/" },
        { name: "PNAS", link: "https://www.pnas.org/" },
        {
          name: "Annual Review of Plant Biology",
          link: "https://www.annualreviews.org/journal/arplant",
        },
        {
          name: "Trends in Plant Science",
          link: "https://www.sciencedirect.com/journal/trends-in-plant-science",
        },
        { name: "Nature Plants", link: "https://www.nature.com/nplants/" },
        { name: "Plant Cell", link: "http://www.plantcell.org/" },
        { name: "Plant Physiology", link: "http://www.plantphysiol.org/" },
        {
          name: "Plant Journal",
          link: "https://onlinelibrary.wiley.com/journal/1365313x",
        },
        {
          name: "Plant Communications",
          link: "https://www.cell.com/plant-communications/home",
        },
        {
          name: "Molecular Plant",
          link: "https://www.cell.com/molecular-plant/home",
        },
        {
          name: "Elife: Plant Biology",
          link: "https://elifesciences.org/subjects/plant-biology",
        },
        {
          name: "New Phytologist",
          link: "https://nph.onlinelibrary.wiley.com/journal/14698137",
        },
        {
          name: "Current Opinion in Plant Biology",
          link:
            "https://www.sciencedirect.com/journal/current-opinion-in-plant-biology",
        },
        {
          name: "Plant Cell & Environment",
          link: "https://onlinelibrary.wiley.com/journal/13653040",
        },
        {
          name: "Journal of Experimental Botany",
          link: "https://academic.oup.com/jxb/",
        },
        {
          name: "Plant and Cell Physiology",
          link: "https://academic.oup.com/pcp/",
        },
        {
          name: "Plant Reproduction",
          link: "https://www.springer.com/journal/497",
        },
        {
          name: "Frontiers in Plant Science",
          link: "https://www.frontiersin.org/journals/plant-science#",
        },
        { name: "Tair", link: "https://www.arabidopsis.org/" },
        { name: "NCBI", link: "https://www.ncbi.nlm.nih.gov/" },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style >
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.linkbox {
  margin-top: 2.5vw;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
}
.linkitem {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 18%;
  color: #e2f0d9;
  margin: 0.5vw;
  height: 2.5vw;
  font-size: 1vw;
}
</style>