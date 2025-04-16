const MyPIP = {
  html: "查看player",
  init() {
    console.log("init");
  },
  click(player) {
    console.log("click", player);
  },
};

let screenshot = document.getElementById("screenshot");

const MyControl = {
  el: screenshot, // 控制项的 DOM 元素
  id: "123123", // 一般只有在自定义插件中才会设置
  // tip: string, // 提示字符串
  // tooltip: Tooltip, // 提示组件对象
  mounted: true, // 是否已经初始化，内部使用字段
  init: (player, position, tooltip) => {
    console.log("初始化");
  }, // 初始化时会调用
  update: (position) => {
    console.log("挂在");
  }, // 挂载时，如果 `mounted` 等于 `true`，则会调用
  hide: () => {
    console.log("隐藏");
  }, // 隐藏时会调用
  isSupport: (player) => true, // 是否支持
  // dispose: () => void, // 调用将销毁该项目
};

const player = new NPlayer.Player({
  src: "./280443.mp4",
  // poster:
  //   "https://gips0.baidu.com/it/u=3560029307,576412274&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280",
  posterEnable: true,
  thumbnail: {
    startSecond: 1,
    gapSecond: 1,
    col: 5,
    row: 5,
    images: ["M1.jpg", "M2.jpg"],
  },
  seekStep: 2,
  volumeStep: 5,
  isTouch: true,
  // contextMenus: ["loop", "pip", MyPIP],
  contextMenuToggle: true,
  bpControls: {
    650: [
      [
        "play",
        "time",
        "volume",
        "spacer",
        "web-fullscreen",
        "fullscreen",
        "settings",
        MyControl,
      ],
      ["progress"],
      [],
    ],
  },
  controls: [
    [
      "play",
      "time",
      "volume",
      "spacer",
      "web-fullscreen",
      "fullscreen",
      "settings",
      MyControl,
    ],
    ["progress"],
    [],
    // ["progress"],
    // [
    //   "play",
    //   "volume",
    //   "time",
    //   "spacer",
    //   "airplay",
    //   "settings",
    //   "web-fullscreen",
    //   "fullscreen",
    //   MyControl,
    // ],
  ],
  settings: [
    {
      html: "播放速度",
      type: "select",
      value: 1,
      options: [
        { value: 0.25, html: "0.25" },
        { value: 0.5, html: "0.5" },
        { value: 1, html: "正常" },
        { value: 1.5, html: "1.5" },
        { value: 2, html: "2" },
      ],
      init(player) {
        player.playbackRate = 1;
      },
      change(value, player) {
        this.value = player.playbackRate = value;
      },
    },
    {
      id: "aaa", // 设置项 id
      html: "选项A", // 菜单项显示的 label 提示
      type: "switch", // 类型
      checked: false, // 是否是选中状态
      options: [true, false], // 选项
      value: true, // 当前选中的值，与 options 中的 value 对应
      init: (player, item) => {
        console.log("初始化");
      }, // 初始化时，会调用
      change: (value, player, item) => {
        console.log("修改", value);
      }, // 当用户修改时会调用
    },
  ],
});
player.mount("#test-video");
// console.log(player.container); // document.body
// console.log(player.el); // DIV Element
// console.log(player.video); // VIDEO Element
// console.log(player.rect.width);
// console.log(player.rect.height);
// console.log(player.rect.x);
// console.log(player.rect.y);
// setTimeout(() => player.dispose(), 3000);
// player.toast.show("提示~", "left-top", 1000);

function screenshotButt() {
  alert("截图");
}
