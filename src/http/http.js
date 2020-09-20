import axios from "axios";
const baseUrl = "http://149.129.73.223:8080/ssmblog";
const login = (username, password) => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/login",
      method: "post",
      params: {
        username: username,
        password: password,
      },
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
/* const addEvent = (param, data) => {
  let config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  let url =
    baseUrl +
    "/addEvent?eventInfo=" +
    param.eventInfo +
    "&eventTime=" +
    "2020" +
    "&eventTitle=" +
    param.eventTitle;
  return new Promise(function(resolve) {
    axios.post(url, data, config).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
}; */
const addEvent = (eventInfo, eventTitle, eventTime, eventImg) => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/addEvent",
      method: "post",
      params: {
        eventInfo: eventInfo,
        eventTitle: eventTitle,
        eventTime: eventTime,
        eventImg: eventImg,
      },
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const updateEvent = (eventInfo, eventTitle, eventTime, eventImg, eventId) => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/updateEvent",
      method: "post",
      params: {
        eventInfo: eventInfo,
        eventTitle: eventTitle,
        eventTime: eventTime,
        eventImg: eventImg,
        eventId: eventId,
      },
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const uploadImg = (data) => {
  let config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  let url = baseUrl + "/image";
  return new Promise(function(resolve) {
    axios.post(url, data, config).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const uploadFile = (data) => {
  let config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  let url = baseUrl + "/file";
  return new Promise(function(resolve) {
    axios.post(url, data, config).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const getEventlist = (year) => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/queryEventByTime",
      method: "post",
      params: {
        time: year,
      },
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const getEventyear = () => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/queryTime",
      method: "post",
      params: {},
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const addPerson = (perInfo, perName, perEducate, perImg) => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/addPer",
      method: "post",
      params: {
        perInfo: perInfo,
        perName: perName,
        perEducate: perEducate,
        perImg: perImg,
      },
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const updatePer = (perInfo, perName, perEducate, perImg, perId) => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/updatePer",
      method: "post",
      params: {
        perInfo: perInfo,
        perName: perName,
        perEducate: perEducate,
        perImg: perImg,
        perId: perId,
      },
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const getPersonlist = (condition) => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/showPer",
      method: "post",
      params: {
        condition: condition,
      },
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const addResearch = (resImg, resInfo, resTitle) => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/addResearch",
      method: "post",
      params: {
        resImg: resImg,
        resInfo: resInfo,
        resTitle: resTitle,
      },
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const updateResearch = (resImg, resInfo, resTitle, resId) => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/updateResearch",
      method: "post",
      params: {
        resImg: resImg,
        resInfo: resInfo,
        resTitle: resTitle,
        resId: resId,
      },
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const getResearchlist = () => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/queryResearch",
      method: "post",
      params: {},
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const updatePublication = (pubImg, pubInfo, pubTitle, pubId) => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/updatePublication",
      method: "post",
      params: {
        pubImg: pubImg,
        pubInfo: pubInfo,
        pubTitle: pubTitle,
        pubId: pubId,
      },
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const getPublishlist = () => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/queryPublication",
      method: "post",
      params: {},
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const updatePerCondition = (perid) => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/updatePerCondition",
      method: "post",
      params: { id: perid },
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const deletePerById = (perid) => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/deletePerById",
      method: "post",
      params: { perId: perid },
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
const deleteEvent = (id) => {
  return new Promise(function(resolve) {
    axios({
      url: baseUrl + "/deleteEvent",
      method: "post",
      params: { id: id },
    }).then((res) => {
      window.console.log(res);
      resolve(res);
    });
  });
};
export {
  addEvent,
  updateEvent,
  getEventlist,
  getEventyear,
  addPerson,
  updatePer,
  getPersonlist,
  addResearch,
  updateResearch,
  getResearchlist,
  updatePublication,
  getPublishlist,
  uploadImg,
  uploadFile,
  updatePerCondition,
  deletePerById,
  deleteEvent,
  login,
};
