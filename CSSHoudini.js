// CSSHoudini.js 文件
// 1、首先我们，通过 properties.get("--clipPath")，我们能够拿到传入的 --clipPath 参数
// 2、通过 spilt() 方法，将 --clipPath 分成一段段，也就是我们的图形实际的绘制步骤
// 3、这里有一点非常重要，也就是 parseClipPath() 方法，由于我们的 -clipPath 的每一段可能是 100% 50% 这样的构造，但是实际在绘图的过程中，我们需要的实际坐标的绝对值，譬如在一个 100 x 100 的画布上，我们需要将 50% 50% 的百分比坐标，转化为实际的 50 50 这样的绝对值
// 4、在理解了 parseClipPath() 后，剩下的就都非常好理解了，我们通过 ctx.beginPath()、ctx.move、ctx.lineTo 以及 ctx.closePath() 将整个 --clipPath 的图形绘制出来
// 5、最后，利用 ctx.fill() 给图形上色

registerPaint(
  "borderDraw",
  class {
    static get inputProperties() {
      return ["--clipPath", "--borderWidth"];
    }

    paint(ctx, size, properties) {
      const { width, height } = size;
      const clipPath = properties.get("--clipPath");
      const borderWidth = properties.get("--borderWidth");
      const paths = clipPath.toString().split(",");
      const parseClipPath = function (obj) {
        const x = obj[0];
        const y = obj[1];
        let fx = 0,
          fy = 0;
        if (x.indexOf("%") > -1) {
          fx = (parseFloat(x) / 100) * width;
        } else if (x.indexOf("px") > -1) {
          fx = parseFloat(x);
        }
        if (y.indexOf("%") > -1) {
          fy = (parseFloat(y) / 100) * height;
        } else if (y.indexOf("px") > -1) {
          fy = parseFloat(y);
        }
        return [fx, fy];
      };

      var p = parseClipPath(paths[0].trim().split(" "));
      ctx.beginPath();
      ctx.moveTo(p[0], p[1]);
      for (var i = 1; i < paths.length; i++) {
        p = parseClipPath(paths[i].trim().split(" "));
        ctx.lineTo(p[0], p[1]);
      }
      ctx.closePath();
      ctx.lineWidth = borderWidth * 2;
      ctx.strokeStyle = "red";
      ctx.stroke();
      //   ctx.fill();
    }
  }
);
