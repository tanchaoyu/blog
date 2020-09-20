<template>
  <div class="plist-container" :style="background">
    <myhead on="4"></myhead>
    <div class="plist-content">
      <div class="yearlist" v-show="showyear">
        <div
          class="year"
          v-for="(item,index) in yearlist"
          :key="index"
          @click="getEventlist"
          :data-year="item"
        >
          <div class="point"></div>
          {{item}}
        </div>
      </div>
      <div class="eventlist" v-show="showlist">
        <div class="eventbox" v-if="eventlist[eventindex+nowpage*3]">
          <img
            :src="eventlist[eventindex+nowpage*3].eventImg"
            alt
            class="eventimg"
            @click="toEvent"
            :data-info="0"
          />
          <p class="eventp">{{eventlist[eventindex+nowpage*3].eventTitle}}</p>
          <img
            src="../../assets/delete.png"
            alt
            v-show="login"
            class="deletepng"
            :data-index="eventindex+nowpage*3"
            @click="deleteEvent"
          />
        </div>
        <div class="eventbox" v-if="eventlist[eventindex+nowpage*3+1]">
          <img
            :src="eventlist[eventindex+nowpage*3+1].eventImg"
            alt
            class="eventimg"
            @click="toEvent"
            :data-info="1"
          />
          <p class="eventp">{{eventlist[eventindex+nowpage*3+1].eventTitle}}</p>
          <img
            src="../../assets/delete.png"
            alt
            v-show="login"
            class="deletepng"
            :data-index="eventindex+nowpage*3+1"
            @click="deleteEvent"
          />
        </div>
        <div class="eventbox" v-if="eventlist[eventindex+nowpage*3+2]">
          <img
            :src="eventlist[eventindex+nowpage*3+2].eventImg"
            alt
            class="eventimg"
            @click="toEvent"
            :data-info="2"
          />
          <p class="eventp">{{eventlist[eventindex+nowpage*3+2].eventTitle}}</p>
          <img
            src="../../assets/delete.png"
            alt
            v-show="login"
            class="deletepng"
            :data-index="eventindex+nowpage*3+2"
            @click="deleteEvent"
          />
        </div>
        <div class="pagectr">
          <img src="../../assets/eventleft.png" alt @click="pre" />
          {{nowpage+1}}/{{page}}
          <img src="../../assets/eventright.png" alt @click="next" />
        </div>
      </div>
      <div class="add" @click="toAddevent" v-show="login">
        add
        <img src="../../assets/add.png" alt class="addpng" />
      </div>
    </div>
  </div>
</template>

<script>
import myhead from "../myhead.vue";
import backpng from "../../assets/back1.png";
import { getEventlist, deleteEvent, getEventyear } from "../../http/http";
export default {
  name: "eventlist",
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
      yearlist: null,
      showyear: true,
      showlist: false,
      page: null,
      eventlist: null,
      nowpage: 0,
      eventindex: 0,
    };
  },
  mounted() {
    let userid = sessionStorage.getItem("userid");
    if (userid) {
      this.login = true;
    }
    getEventyear().then((res) => {
      console.log(res);
      this.yearlist = res.data;
      console.log(this.yearlist);
    });
    getEventlist(2020).then((res) => {
      this.page = Math.ceil(res.data.length / 3);
      this.eventlist = res.data;
    });
  },
  methods: {
    getEventlist: function (e) {
      let year = e.currentTarget.dataset.year;
      console.log(e.currentTarget.dataset.year);
      getEventlist(year).then((res) => {
        this.page = Math.ceil(res.data.length / 3);
        this.eventlist = res.data;
        this.showlist = true;
        this.showyear = false;
      });
    },
    toAddevent: function () {
      this.$router.push({ name: "event", query: { type: "event" } });
    },
    toEvent: function (e) {
      let num = parseInt(e.currentTarget.dataset.info) + this.nowpage * 3;
      console.log(num);
      console.log(this.eventlist[num]);
      this.$router.push({
        name: "event",
        query: {
          type: "event",
          content: this.eventlist[num].eventInfo,
          img: this.eventlist[num].eventImg,
          title: this.eventlist[num].eventTitle,
          id: this.eventlist[num].eventId,
          time: this.eventlist[num].eventTime,
        },
      });
    },
    deleteEvent: function (e) {
      let index = e.currentTarget.dataset.index;
      let confirm = window.confirm("确定删除？");
      if (confirm) {
        deleteEvent(this.eventlist[index].eventId).then((res) => {
          console.log(res);
          this.$router.push({
            name: "eventlist",
          });
        });
      }
    },
    next: function () {
      this.nowpage++;
    },
    pre: function () {
      this.nowpage--;
    },
  },
};
</script>

<style >
.plist-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.plist-content {
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-top: 3vw;
}
.year {
  margin: 1vw;
  display: flex;
  align-items: center;
  color: #fff4cd;
  font-size: 1.5vw;
  font-weight: Bold;
  font-style: italic;
  line-height: 1.5vw;
  text-decoration: underline;
}
.add {
  color: #fff4cd;
  font-size: 30px;
}
.addpng {
  width: 1.5vw;
  height: 1.5vw;
}
.point {
  width: 1.5vw;
  height: 1.5vw;
  background-color: #fff4cd;
  border-radius: 50% 50%;
  margin-left: 0.5vw;
}
.eventbox {
  height: 10vw;
  display: flex;
  align-items: center;
  margin: 0.8vw;
}
.eventimg {
  width: 10vw;
  height: 8vw;
  margin-right: 2vw;
}
.eventp {
  color: #fff4cd;
  font-size: 1.2vw;
}
.pagectr {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #818181;
  width: 5vw;
}
.deletepng {
  width: 2vw;
  height: 2vw;
}
</style>