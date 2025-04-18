!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var o = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            i,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "./"),
    n((n.s = 3));
})([
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = +new Date(),
      o = "yzfh5-data-" + i,
      a = "yzfh5-main-chat-" + i,
      r = "yzfh5-main-iframe-" + i,
      c = "yzfh5-main-contact-" + i,
      d = "yzfh5-chat-btn-" + i,
      s = "yzfh5-dot-" + i,
      l = "yzfh5-state-" + i,
      u = "yzfh5-icon-" + i;
    t.default = {
      scope: o,
      mainChatId: a,
      mainIframeId: r,
      mainContactId: c,
      chatBtnId: d,
      dotId: s,
      stateId: l,
      iconId: u,
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = {
        isMobile: (function () {
          var e = !1;
          return (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ) && (e = !0),
            e
          );
        })(),
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getElem = function (e) {
        return document.getElementById(e);
      }),
      (t.hideElem = function (e) {
        e.style.display = "none";
      }),
      (t.showElem = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "block";
        e.style.display = t;
      });
  },
  function (e, t, n) {
    e.exports = n(4);
  },
  function (e, t, n) {
    "use strict";
    var i = n(5),
      o =
        Object({
          NODE_ENV: "development",
          YZF_CHAT_WEB_CHAT: "https://yzf.qq.com/xv/web/static/chat/index.html",
          YZF_CHAT_WEB_PREFIX: "https://yzf.qq.com/xv/web",
        }) || !1,
      a = o.YZF_CHAT_WEB_CHAT,
      r = void 0 === a ? "https://yzf.qq.com/xv/web/static/chat/index.html" : a,
      c = o.YZF_CHAT_WEB_PREFIX,
      d = void 0 === c ? "https://yzf.qq.com/xv/web" : c,
      s = !1,
      l = {
        init: function (e) {
          if (!s) {
            var t = e.sign || "",
              n = e.data || {},
              o = e.uid || "",
              a = e.selector || "",
              c = e.callback,
              l = !("rmb" in e) || e.rmb,
              u = "goodImg" in e ? e.goodImg : "contain",
              f = !0 === e.nofixed,
              p =
                r +
                "?inner=1&sign=" +
                t +
                "&uid=" +
                o +
                "&rmb=" +
                l +
                "&goodImg=" +
                u;
            if (n && Object.keys(n).length)
              (p += "&c1=" + (n.c1 || "")),
                (p += "&c2=" + (n.c2 || "")),
                (p += "&c3=" + (n.c3 || "")),
                (p += "&c4=" + (n.c4 || "")),
                (p += "&c5=" + (n.c5 || ""));
            f && (p += "&nofixed=1"), (0, i.render)(p, d, a, c, t), (s = !0);
          }
        },
        close: function () {
          (0, i.close)();
        },
      };
    window.yzf = l;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.render = function (e, t, n, c, s) {
        var h = (0, i.default)({ id: o.default, isMobile: f });
        h = (h = h.replace(new RegExp(u, "g"), o.default.scope)).replace(
          new RegExp("https://kf.qq.com/xv-dev/web", "g"),
          t
        );
        var x = document.createElement("div");
        (x.innerHTML = h),
          (x.style.display = "none"),
          document.body.appendChild(x);
        var b = function () {
            x.style.display = "block";
          },
          g = setTimeout(b, 3e3),
          y = (0, r.getElem)(o.default.mainChatId);
        !f && (y.style.zIndex = 2147483647);
        var _ = (0, r.getElem)(o.default.dotId),
          v = (0, r.getElem)(o.default.stateId),
          E = (0, r.getElem)(o.default.mainIframeId),
          w = (0, r.getElem)(o.default.mainContactId),
          I = w;
        if (n)
          try {
            var F = document.querySelector(n);
            F &&
              ((p = !1), (I = F), w.remove(), clearTimeout(g), (g = null), b());
          } catch (Y) {
            console.error(Y);
          }
        p &&
          (0, d.loadTheme)(t, s, function (e, t) {
            var n = !1;
            if (e && t && 0 == t.status) {
              var i = null;
              try {
                i = JSON.parse(t.data);
              } catch (Y) {}
              if (i && i.custom_color) {
                var a = i.custom_color,
                  c = (0, r.getElem)(o.default.chatBtnId);
                console.log(2222, e, t, i, c),
                  c &&
                    ((c.style.backgroundColor = a),
                    c.parentNode &&
                      c.parentNode.parentNode &&
                      (c.parentNode.parentNode.style.display = "block"));
              } else n = !0;
            } else n = !0;
            clearTimeout(g), (g = null), n && b(), (0, r.showElem)(w);
          });
        I.addEventListener("click", function () {
          l ||
            ((l = !0),
            (E.src = e),
            (E.onload = function () {
              E.contentWindow.postMessage({ type: "init" }, "*");
            })),
            (0, r.showElem)(y),
            p && ((0, r.hideElem)(I), (0, r.hideElem)(_), (0, r.hideElem)(v));
        }),
          a.default.listen(I, c, p),
          p && ((window.onresize = m), m());
      }),
      (t.close = function () {
        var e = (0, r.getElem)(o.default.mainChatId),
          t = (0, r.getElem)(o.default.mainContactId);
        (0, r.hideElem)(e), p && (0, r.showElem)(t);
      });
    var i = s(n(6)),
      o = s(n(0)),
      a = s(n(10)),
      r = n(2),
      c = s(n(1)),
      d = n(11);
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var l = !1,
      u = "YZF_STYLE_PREFIX",
      f = c.default.isMobile,
      p = !0;
    function m() {
      var e = (0, r.getElem)(o.default.chatBtnId).getElementsByClassName(
          "txt"
        )[0],
        t = window.innerWidth;
      e.textContent = t >= 1e3 ? "\u8054\u7cfb\u5ba2\u670d" : "\u5ba2\u670d";
    }
  },
  function (e, t, n) {
    var i = n(7);
    e.exports = function (e) {
      "use strict";
      e = e || {};
      var t = "",
        n = i.$escape,
        o = e.id,
        a = e.isMobile;
      return (
        (t += '<style id="style'),
        (t += n(o.scope)),
        (t +=
          '">\n@media (max-height:600px),(max-width:1000px){[YZF_STYLE_PREFIX].main-contact{position:fixed;bottom:150px;right:15px;z-index:100000000000000000}[YZF_STYLE_PREFIX].main-contact .icon{display:block;width:30px;height:30px;background-image:url(https://kf.qq.com/xv-dev/web/static/img/chat-btn.png);background-size:100% 100%;vertical-align:-3px}[YZF_STYLE_PREFIX].main-contact .chat-btn{padding:10px;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:12px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;text-decoration:none;padding:5px 10px;border-radius:2px}[YZF_STYLE_PREFIX].main-contact .chat-btn .txt{display:block;margin-top:-2px}[YZF_STYLE_PREFIX].main-contact .dot{width:12px;height:12px;border-radius:50%;position:absolute;top:-6px;right:-6px;background:#ed4343;border:1px solid #fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.5)}[YZF_STYLE_PREFIX].main-contact .state{display:none}}@media (min-height:600px) and (min-width:1000px){[YZF_STYLE_PREFIX].main-contact{position:fixed;bottom:50px;right:50px;display:block;z-index:100000000000000000}[YZF_STYLE_PREFIX].main-contact .icon{display:inline-block;width:24px;height:24px;background-image:url(https://kf.qq.com/xv-dev/web/static/img/chat-btn.png);background-size:100% 100%;margin-right:10px;vertical-align:top}[YZF_STYLE_PREFIX].main-contact .chat-btn{width:138px;padding:13px 10px;font-size:0;height:50px}[YZF_STYLE_PREFIX].main-contact .txt{display:inline-block;font-size:16px;line-height:24px}[YZF_STYLE_PREFIX].main-contact .dot{display:none}[YZF_STYLE_PREFIX].main-contact .state{display:inline-block;width:138px;height:50px;position:absolute;background:#fff;left:-153px;top:0;z-index:99999;line-height:50px;box-shadow:0 2px 8px 0 rgba(0,0,0,.14)}[YZF_STYLE_PREFIX].main-contact .state .desc{color:#000;padding-left:16px;position:relative;font-size:16px}[YZF_STYLE_PREFIX].main-contact .state .desc:before{display:inline-block;border-radius:50%;content:"";width:6px;height:6px;background:#265bed;position:absolute;left:0;top:50%;margin-top:-3px}[YZF_STYLE_PREFIX].main-contact .state .desc:after{content:"";position:absolute;width:0;height:0;border-color:transparent;border-style:solid;right:-26px;border-width:5px 0 5px 5px;border-left-color:#fff;top:50%;margin-top:-5px}}[YZF_STYLE_PREFIX] .chat-btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;min-width:50px;padding:7px 10px;font-size:15px;color:#fff;background-color:#4979ff;box-sizing:border-box;vertical-align:middle}@media (max-height:600px),(max-width:1000px){[YZF_STYLE_PREFIX].main-chat{position:fixed;top:0;left:0;right:0;bottom:0;z-index:10000000000000000}[YZF_STYLE_PREFIX].main-chat .main-iframe{width:100%;height:100%;position:fixed;top:0;bottom:0;left:0;right:0}}@media (min-height:600px) and (min-width:1000px){[YZF_STYLE_PREFIX].main-chat{position:fixed;width:375px;max-height:667px;height:calc(100vh - 100px);right:50px;bottom:50px;background:#fafafb;box-shadow:0 2px 8px 0 rgba(0,0,0,.14);overflow:hidden}[YZF_STYLE_PREFIX].main-chat .main-iframe{width:100%;height:100%}}\n</style>\n<div '),
        (t += n(o.scope)),
        (t += ' id="'),
        (t += n(o.mainContactId)),
        (t +=
          '" class="main-contact" style="display:none">\n    <a href="javascript:;" id="'),
        (t += n(o.chatBtnId)),
        (t += '" class="chat-btn">\n        <i class="icon" id="'),
        (t += n(o.iconId)),
        (t += '"></i>\n        <span class="txt">'),
        a || (t += "\u8054\u7cfb"),
        (t += '\u5ba2\u670d</span>\n        <i class="dot" id="'),
        (t += n(o.dotId)),
        (t += '" style="display:none"></i>\n        <div class="state" id="'),
        (t += n(o.stateId)),
        (t +=
          '" style="display:none"><span class="desc">\u5ba2\u670d\u5df2\u56de\u590d</span></div>\n    </a>\n</div>\n<div '),
        (t += n(o.scope)),
        (t += ' id="'),
        (t += n(o.mainChatId)),
        (t += '" class="main-chat" style="display:none">\n    <iframe id="'),
        (t += n(o.mainIframeId)),
        (t += '" class="main-iframe" frameborder="0"></iframe>\n</div>')
      );
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = n(8);
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var n =
          "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof t
            ? t
            : {},
        i = Object.create(n),
        o = /["&'<>]/;
      (i.$escape = function (e) {
        return (function (e) {
          var t = "" + e,
            n = o.exec(t);
          if (!n) return e;
          var i = "",
            a = void 0,
            r = void 0,
            c = void 0;
          for (a = n.index, r = 0; a < t.length; a++) {
            switch (t.charCodeAt(a)) {
              case 34:
                c = "&#34;";
                break;
              case 38:
                c = "&#38;";
                break;
              case 39:
                c = "&#39;";
                break;
              case 60:
                c = "&#60;";
                break;
              case 62:
                c = "&#62;";
                break;
              default:
                continue;
            }
            r !== a && (i += t.substring(r, a)), (r = a + 1), (i += c);
          }
          return r !== a ? i + t.substring(r, a) : i;
        })(
          (function e(t) {
            "string" !== typeof t &&
              (t =
                void 0 === t || null === t
                  ? ""
                  : "function" === typeof t
                  ? e(t.call(t))
                  : JSON.stringify(t));
            return t;
          })(e)
        );
      }),
        (i.$each = function (e, t) {
          if (Array.isArray(e))
            for (var n = 0, i = e.length; n < i; n++) t(e[n], n);
          else for (var o in e) t(e[o], o);
        }),
        (e.exports = i);
    }).call(this, n(9));
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (i) {
      "object" === typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = r(n(0)),
      o = r(n(1)),
      a = n(2);
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = o.default.isMobile;
    t.default = {
      listen: function (e, t, n) {
        window.addEventListener("message", function (o) {
          var r = o.data || {},
            d = r.type,
            s = (0, a.getElem)(i.default.mainChatId),
            l = (0, a.getElem)(i.default.dotId),
            u = (0, a.getElem)(i.default.stateId);
          if (d) {
            if ("newmsg" == d)
              n && (c ? (0, a.showElem)(l) : (0, a.showElem)(u));
            else if ("close" == d)
              (0, a.hideElem)(s),
                n &&
                  ((0, a.hideElem)(l), (0, a.hideElem)(u), (0, a.showElem)(e));
            else if ("error" == d);
            else if ("channel_info" == d) {
              var f = r.data;
              if (n && f && f.h5_theme_css)
                try {
                  var p = JSON.parse(f.h5_theme_css);
                  if (p) {
                    var m = p.custom_color,
                      h = (0, a.getElem)(i.default.chatBtnId);
                    h &&
                      ((h.style.backgroundColor = m),
                      h.parentNode &&
                        h.parentNode.parentNode &&
                        (h.parentNode.parentNode.style.display = "block"));
                  }
                } catch (o) {}
            }
            !(function (e, t, n) {
              "function" === typeof e && e(t, n);
            })(t, d, r.data);
          }
        });
      },
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.loadTheme = function (e, t, n) {
        var o = e + "/user_manage/h5_channel/get_h5_channel_css?sign=" + t;
        (0, i.getJson)(o, n);
      });
    var i = n(12);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getJson = function (e, t) {
        var n = new XMLHttpRequest();
        (n.timeout = 3e3),
          (n.onload = function () {
            if (
              (this.status >= 200 && this.status < 300) ||
              304 === this.status
            ) {
              var e = this.responseText;
              try {
                var n = JSON.parse(e);
                n ? t(!0, n) : t(!1);
              } catch (i) {
                t(!1);
              }
            }
          }),
          (n.ontimeout = function () {
            t(!1);
          }),
          (n.onerror = function () {
            t(!1);
          }),
          n.open("GET", e),
          n.send(null);
      });
  },
]);
