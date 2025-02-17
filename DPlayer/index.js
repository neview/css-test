// 连接 WebSocket 服务器
const ws = new WebSocket("ws://localhost:8182");
let dp;

dp = new DPlayer({
  container: document.getElementById("dplayer"),
  video: {
    url: "280443.mp4",
  },
  // danmaku: {
  //   id: "video-1",
  //   api: "http://localhost:3000/danmaku/",
  //   maximum: 1000,
  //   user: "DIYgod",
  //   bottom: "15%",
  //   unlimited: true, // 是否无限加载弹幕
  //   speedRate: 0.5, // 弹幕速度
  // },
  live: true,
  danmaku: true,
  apiBackend: {
    read: function (options) {
      console.log("渲染", options);
      options.success([]);
    },
    send: function (options) {
      console.log("发送", options.data);
      options.success();
    },
  },
  // danmaku: true,
  // apiBackend: {
  //   send: (endpoint, danmakuData, callback) => {
  //     const danmu = {
  //       color: danmakuData.color,
  //       type:
  //         danmakuData.type === "right"
  //           ? 0
  //           : danmakuData.type === "top"
  //           ? 1
  //           : 2,
  //       text: danmakuData.text,
  //       time: danmakuData.time,
  //     };
  //     addDanmu(danmu)
  //       .then((response) => {
  //         this.$notify({
  //           title: "弹幕发送成功",
  //           message: danmu.text,
  //           type: "success",
  //         });
  //         callback();
  //       })
  //       .catch((error) => {
  //         this.$notify.error({
  //           title: "失败",
  //           message: "弹幕发送失败 " + error,
  //         });
  //       });
  //   },
  //   read: (endpoint, callback) => {
  //     callback("", [
  //       ["5.713021", 0, "#fff", "c3cad6e5", "嗨哈嗨"],
  //       ["2.572623", 0, "#fff", "c3cad6e5", "嗨嗨嗨"],
  //     ]);
  //   },
  // },
});

//   const danmakuData = [
//     {
//         text: '这是第一条弹幕',
//         time: 5,
//         color: '#FF0000',
//         fontSize: 24
//     },
//     {
//         text: '第二条弹幕来啦',
//         time: 10,
//         color: '#00FF00',
//         fontSize: 26
//     },
//     {
//         text: '哈哈，第三条弹幕',
//         time: 15,
//         color: '#0000FF',
//         fontSize: 22
//     }
// ];

// if (!dp.danmaku) {
//   console.error("弹幕功能初始化失败，请检查配置");
// } else {
//   console.log("弹幕功能已启用");
// }
// 连接成功时触发
ws.onopen = () => {
  console.log("已连接到服务器");
  // 发送一条消息
  // ws.send("你好，服务器！");
};

// 收到服务器消息时触发
ws.onmessage = (event) => {
  console.log("收到服务器消息:", event.data);
  // const danmakuData = JSON.parse(event.data); // 解析弹幕数据
  // dp.danmaku.draw({
  //   // 在播放器中显示弹幕
  //   text: danmakuData.text,
  //   color: danmakuData.color,
  //   type: danmakuData.type,
  // });
  const danmaku = {
    text: "Get a danmaku via WebSocket",
    color: "#fff",
    type: "right",
  };
  dp.danmaku.draw(danmaku);
};

// 收到服务器的 ping 时触发
ws.onping = () => {
  console.log("收到服务器的 ping");
  // 浏览器会自动回复 pong，无需手动处理
};

// 连接关闭时触发
ws.onclose = () => {
  console.log("连接已关闭");
};

// 发生错误时触发
ws.onerror = (error) => {
  console.error("WebSocket 错误:", error);
};

let sendText = document.getElementById("send_text");
sendText.addEventListener("click", () => {
  // 自定义弹幕发送逻辑
  const danmakuData = {
    text: "Get a danmaku via WebSocket",
    color: "#fff",
    type: "right",
  };
  dp.danmaku.draw(danmakuData);
  // ws.send(JSON.stringify(danmakuData)); // 发送弹幕到 WebSocket 服务器
});
