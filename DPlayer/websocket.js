const WebSocket = require("ws");

// 创建 WebSocket 服务器
const wss = new WebSocket.Server({ port: 8182 });

// 心跳间隔时间（毫秒）
const HEARTBEAT_INTERVAL = 15000; // 30 秒
// 超时时间（毫秒）
const HEARTBEAT_TIMEOUT = 10000; // 10 秒

wss.on("connection", (ws) => {
  console.log("新的客户端连接");

  let isAlive = true;

  // 设置心跳检测
  const heartbeat = () => {
    isAlive = true;
  };

  // 定时发送 ping 消息
  const pingInterval = setInterval(() => {
    if (isAlive === false) {
      console.log("客户端无响应，关闭连接");
      return ws.terminate(); // 关闭连接
    }

    isAlive = false; // 标记为未响应
    ws.ping(() => {}); // 发送 ping 消息
  }, HEARTBEAT_INTERVAL);

  // 监听 pong 消息（客户端响应 ping）
  ws.on("pong", heartbeat);

  // 监听客户端消息
  ws.on("message", (message) => {
    // ws.send(`服务器回复: ${message}`);
    ws.send(message.toString("utf8"));
  });

  // 监听客户端断开连接
  ws.on("close", () => {
    console.log("客户端断开连接");
    clearInterval(pingInterval); // 清除定时器
  });

  // 监听错误
  ws.on("error", (error) => {
    console.error("WebSocket 错误:", error);
  });
});

console.log("WebSocket 服务器已启动，正在监听 ws://localhost:8182");
