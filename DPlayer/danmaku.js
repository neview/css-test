const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors());

// 使用 body-parser 中间件解析 JSON 请求体
app.use(bodyParser.json());

// 模拟弹幕数据存储
let danmakuData = {
  "video-1": [
    {
      text: "第一条弹幕",
      color: "#FFFFFF",
      time: 1.5,
      type: "right",
      size: "medium",
    },
    {
      text: "第二条弹幕",
      color: "#FF0000",
      time: 3.0,
      type: "top",
      size: "large",
    },
  ],
  "video-2": [
    {
      text: "另一个视频的弹幕",
      color: "#00FF00",
      time: 2.0,
      type: "right",
      size: "medium",
    },
  ],
};

// 获取弹幕数据的接口
app.get("/danmaku/v3", (req, res) => {
  const videoId = req.query.id; // 获取视频 ID
  const max = req.query.max || 1000; // 获取最大弹幕数量
  const data = danmakuData[videoId] || []; // 根据 ID 返回对应弹幕数据
  res.json({
    code: 0,
    data: [
      [3.713021, "right", 16711680, "618c713c", "嗨哈嗨"],
      [5.713021, "right", 16711680, "6b2884ac", "嗨嗨嗨"],
    ],
  });
  //   res.json(data.slice(0, max)); // 返回弹幕数据
});

// 发送弹幕的接口
app.post("/danmaku/v3", (req, res) => {
  const videoId = req.body.id; // 获取视频 ID
  const danmaku = req.body.danmaku; // 获取弹幕数据

  if (!videoId || !danmaku) {
    return res.status(400).json({ error: "Missing video ID or danmaku data" });
  }

  // 初始化视频的弹幕数据（如果不存在）
  if (!danmakuData[videoId]) {
    danmakuData[videoId] = [];
  }

  // 添加新弹幕
  danmakuData[videoId].push(danmaku);

  // 返回成功响应
  res.json({ success: true, message: "Danmaku added successfully" });
});

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
