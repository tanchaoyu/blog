<template>
  <div class="container" :style="background">
    <myhead></myhead>
    <div class="content">
      <input type="file" class="hide" accept="image/*" ref="input" id="input" @change="uploadImg" />
      <div class="inputbox">
        <div class="upimgbox" @click="changeimg">
          <img :src="userimg" alt class />
          <p>{{add}}</p>
          <img :src="reviewimg" alt class="reviewimg" v-show="show" />
        </div>
        <textarea
          name
          id="title"
          cols="30"
          rows="10"
          :placeholder="type=='event'?eventplaceholder:null"
          class="title"
          v-model="title"
        ></textarea>
      </div>
      <div class="tinymcebox">
        <tinymce class="tinymce" ref="tinymce" :value="content" :login="login"></tinymce>
        <div class="submit" @click="clickControl" v-show="login">submit</div>
      </div>
    </div>
  </div>
</template>

<script>
import myhead from "../myhead.vue";
import tinymce from "../tinymce.vue";
import backpng from "../../assets/back1.png";
import camera from "../../assets/camera.png";
import {
  addEvent,
  updateEvent,
  uploadImg,
  addPerson,
  updatePer,
  updateResearch,
  updatePublication,
} from "../../http/http";
export default {
  name: "event",
  components: {
    tinymce,
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
      image: null,
      eventplaceholder: "title",
      userimg: camera,
      reviewimg: null,
      add: "Add images",
      show: false,
      title: null,
      type: null,
      content: null,
      login: false,
      id: null,
      time: null,
    };
  },
  mounted() {
    /**
     * 初始化edit页通用操作
     */
    this.type = this.$route.query.type;
    if (this.$route.query.content) {
      this.content = this.$route.query.content;
      this.title = this.$route.query.title;
      this.reviewimg = this.$route.query.img;
      (this.userimg = null), (this.add = null), (this.show = true);
      console.log(this.content);
    }
    console.log(this.type);
    /**
     * 登陆处理
     */
    let userid = sessionStorage.getItem("userid");
    if (userid) {
      this.login = true;
    }
    /**
     * 对不同栏目分类处理
     */
    if (this.type == "person") {
      //判断修改还是新增,有id的是修改无则新增
      let perID = this.$route.query.id;
      if (perID) {
        this.id = perID;
      }
    }
    if (this.type == "event") {
      //判断修改还是新增,有id的是修改无则新增
      let eventId = this.$route.query.id;
      let time = this.$route.query.time;
      if (eventId) {
        this.id = eventId;
        this.time = time;
      }
    }
    if (this.type == "research") {
      //research无新增情况
      let researchID = this.$route.query.id;
      if (researchID) {
        this.id = researchID;
      }
    }
    if (this.type == "publish") {
      //research无新增情况
      let publishID = this.$route.query.id;
      if (publishID) {
        this.id = publishID;
      }
    }
  },
  methods: {
    clickControl: function () {
      if (this.type == "event") {
        this.submitEvent();
      }
      if (this.type == "person") {
        this.submitPerson();
      }
      if (this.type == "research") {
        this.submitResearch();
      }
      if (this.type == "publish") {
        this.submitPublish();
      }
      this.$router.push({ name: "index" });
    },
    changeimg: function () {
      this.$refs.input.dispatchEvent(new MouseEvent("click"));
    },
    uploadImg: function () {
      let that = this;
      let file = this.$refs.input.files[0];
      let image = new FormData();
      image.append("file", file);
      window.console.log(image.get("file"));
      this.image = image;
      console.log(this.image.get("file"));
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (res) => {
        let img = res.target;
        window.console.log(img);
        that.reviewimg = img.result;
        (that.userimg = null), (that.add = null), (that.show = true);
      };
    },
    submitEvent: function () {
      this.content = this.$refs.tinymce.myValue;
      if (this.id) {
        //判断是否修改图片
        if (this.image) {
          uploadImg(this.image).then((res) => {
            updateEvent(
              this.content,
              this.title,
              this.time,
              res.data,
              this.id
            ).then((res) => {
              console.log(res);
            });
          });
        }
        //不修改图片
        else {
          updatePer(
            this.content,
            this.title,
            this.time,
            this.reviewimg,
            this.id
          ).then((res) => {
            console.log(res);
          });
        }
      } else {
        let newData = new Date();
        let param = {
          eventInfo: this.content,
          eventTime: newData.getFullYear(),
          eventTitle: this.title,
        };
        console.log(this.title);
        uploadImg(this.image).then((res) => {
          addEvent(
            param.eventInfo,
            param.eventTitle,
            param.eventTime,
            res.data
          ).then((res) => {
            console.log(res);
          });
        });
      }
    },
    submitPerson: function () {
      /**
       * 修改人员
       */
      console.log(this.id);
      let that = this;
      this.content = this.$refs.tinymce.myValue;
      if (this.id) {
        //判断有无修改图片
        if (this.image) {
          uploadImg(this.image).then((res) => {
            updatePer(that.content, that.title, "1", res.data, that.id).then(
              (res) => {
                console.log(res);
              }
            );
          });
        } else {
          updatePer(
            this.content,
            this.title,
            "1",
            this.reviewimg,
            this.id
          ).then((res) => {
            console.log(res);
          });
        }
      }
      //新增人员
      else {
        console.log(this.image);
        uploadImg(this.image).then((res) => {
          console.log(res);
          console.log(that.content);
          addPerson(that.content, that.title, "1", res.data).then((res) => {
            window.console.log(res);
          });
        });
      }
    },
    submitResearch: function () {
      if (this.image) {
        uploadImg(this.image).then((res) => {
          updateResearch(res.data, this.content, this.title, this.id).then(
            (res) => {
              console.log(res);
            }
          );
        });
      } else {
        updateResearch(
          this.reviewimg,
          this.content,
          this.title,

          this.id
        ).then((res) => {
          console.log(res);
        });
      }
    },
    submitPublish: function () {
      if (this.image) {
        uploadImg(this.image).then((res) => {
          updatePublication(res.data, this.content, this.title, this.id).then(
            (res) => {
              console.log(res);
            }
          );
        });
      } else {
        updatePublication(
          this.reviewimg,
          this.content,
          this.title,

          this.id
        ).then((res) => {
          console.log(res);
        });
      }
    },
  },
};
</script>

<style>
.content {
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.inputbox {
  margin: 2vw;
  margin-left: 2vw;
  width: 26%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.upimgbox {
  width: 100%;
  height: 16vw;
  border: 2px #8a8a8a solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.upimgbox p {
  color: #8a8a8a;
}
.title {
  width: 100%;
  height: 6vw;
  background: rgba(0, 0, 0, 0);
  margin-top: 2vw;
  color: #fff4cd;
}
.tinymce {
  width: 64%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2vw;
}
.tinymcebox {
  width: 66%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hide {
  display: none;
}
.submit {
  width: 6vw;
  align-self: flex-end;
  padding: 0.4vw;
  margin-right: 2vw;
  color: #fff4cd;
  border: solid #929292 2px;
  border-radius: 1px;
}
.reviewimg {
  width: 100%;
  height: 100%;
}
</style>
