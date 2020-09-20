<template>
  <div class="per-container" :style="background">
    <myhead :on="3"></myhead>
    <div class="personbox" v-show="showperson">
      <div class="person" v-for="(item,index) in personlist" :key="index">
        <div class="change" v-show="showchange" @click="showButton" :data-index="index">
          ...
          <div
            v-show="item.showbutton"
            class="delbutton"
            :data-index="index"
            @click="deletePerson"
          >delete</div>
          <div
            v-show="item.showbutton"
            class="leftbutton"
            :data-index="index"
            @click="setpersonLeft"
          >left</div>
        </div>
        <img :src="item. perImg" alt :data-index="index" @click="toEdit" />
        <p>{{item.perName}}</p>
      </div>
    </div>
    <div class="personbox" v-show="showleft">
      <div class="person" v-for="(item2,index2) in leftpersonlist" :key="index2">
        <div class="change" v-show="showchange" @click="showButton" :data-index="index2">
          ...
          <div
            v-show="item2.showbutton"
            class="delbutton"
            :data-index="index2"
            @click="deletePerson"
          >delete</div>
        </div>
        <img :src="item2.perImg" alt :data-index="index2" @click="toEdit" />
        <p>{{item2.perName}}</p>
      </div>
    </div>
    <div class="tap" @click="toleft">{{leftcontent}}</div>
  </div>
</template>

<script>
import { updatePerCondition, getPersonlist, deletePerById } from "../http/http";
import myhead from "./myhead.vue";
import backpng from "../assets/back1.png";
export default {
  name: "person",
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
      personlist: [],
      leftpersonlist: [],
      showleft: false,
      showperson: true,
      showchange: false,
      showbutton: false,
      leftcontent: "People who has left",
    };
  },
  mounted() {
    /**
     * 加载人员列表
     * 登陆判断
     * 登录开启添加按钮
     */
    getPersonlist(1).then((res) => {
      console.log(res);
      for (let i = 0; i < res.data.length; i++) {
        res.data[i].showbutton = false;
      }
      this.personlist = res.data;
      let userid = sessionStorage.getItem("userid");
      if (userid) {
        console.log(userid);
        this.showchange = true;
        this.personlist.push({
          perId: null,
          perInfo: "",
          perName: "",
          perImg: "http://149.129.73.223:8080/ssmblog/images/addperson.png",
          perEducate: "1",
          showbutton: false,
        });
      }
    });
    getPersonlist(2).then((res) => {
      console.log(res);
      for (let i = 0; i < res.data.length; i++) {
        res.data[i].showbutton = false;
      }
      this.leftpersonlist = res.data;
    });
  },
  methods: {
    toleft: function () {
      if (this.showperson) {
        this.showleft = true;
        this.showperson = false;
        this.leftcontent = "back";
      } else {
        this.showleft = false;
        this.showperson = true;
        this.leftcontent = "People who has left";
      }
    },
    toEdit: function (e) {
      let index = e.currentTarget.dataset.index;
      if (this.showperson) {
        console.log(this.personlist[index]);
        this.$router.push({
          name: "event",
          query: {
            type: "person",
            content: this.personlist[index].perInfo,
            img: this.personlist[index].perImg,
            title: this.personlist[index].perName,
            id: this.personlist[index].perId,
          },
        });
      } else {
        console.log(this.leftpersonlist[index]);
        this.$router.push({
          name: "event",
          query: {
            type: "person",
            content: this.leftpersonlist[index].perInfo,
            img: this.leftpersonlist[index].perImg,
            title: this.leftpersonlist[index].perName,
            id: this.leftpersonlist[index].perId,
          },
        });
      }
    },
    showButton: function (e) {
      if (this.showperson) {
        let index = e.currentTarget.dataset.index;
        if (!this.personlist[index].showbutton) {
          this.personlist[index].showbutton = true;
        } else {
          this.personlist[index].showbutton = false;
        }
      } else {
        let index = e.currentTarget.dataset.index;
        if (!this.leftpersonlist[index].showbutton) {
          this.leftpersonlist[index].showbutton = true;
        } else {
          this.leftpersonlist[index].showbutton = false;
        }
      }
    },
    setpersonLeft: function (e) {
      let index = e.currentTarget.dataset.index;
      let confirm = window.confirm("确定设置为离开？");
      if (confirm) {
        updatePerCondition(this.personlist[index].perId).then((res) => {
          console.log(res);
          this.$router.push({ name: "person" });
        });
      }
    },
    deletePerson: function (e) {
      let index = e.currentTarget.dataset.index;
      let confirm = window.confirm("确定删除？");
      if (confirm) {
        deletePerById(this.personlist[index].perId).then((res) => {
          console.log(res);
          this.$router.push({ name: "person" });
        });
      }
    },
  },
};
</script>

<style >
.per-container {
  display: block;
}
.personbox {
  margin-top: 2vw;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.person {
  width: 18%;
  margin: 0.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.person img {
  width: 80%;
  min-height: 9.1vw;
  max-height: 10vw;
}
.person p {
  color: #fff4cd;
  width: 80%;
  height: 1.5vw;
  font-size: 1.1vw;
}
.tap {
  color: #fff4cd;
  font-size: 1vw;
  font-weight: bold;
  text-decoration: underline;
  line-height: 1.5vw;
  margin-left: 2vw;
}
.change {
  align-self: flex-end;
  color: #fff4cd;
  font-size: 1vw;
}
.change div {
  width: 4vw;
  color: #fff4cd;
  font-size: 1.5vw;
  text-align: center;
}
.delbutton {
  position: absolute;
  background: rgba(43, 43, 43, 1);
  transform: translateX(-4vw);
  border-bottom: 1px solid #fff4cd;
}
.leftbutton {
  position: absolute;
  background: rgba(43, 43, 43, 1);
  transform: translate(-4vw, 1.8vw);
}
</style>
