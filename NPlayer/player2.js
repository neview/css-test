!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("NPlayer", [], e)
    : "object" == typeof exports
    ? (exports.NPlayer = e())
    : (t.NPlayer = e());
})(this, function () {
  return (function () {
    var t = {
        14: function (t, e, n) {
          "use strict";
          n.r(e);
          var o = n(81),
            r = n.n(o),
            i = n(645),
            a = n.n(i),
            c = n(667),
            l = n.n(c),
            u = new URL(n(831), n.b),
            s = a()(r()),
            f = l()(u);
          s.push([
            t.id,
            '.nplayer{--theme-color:#007aff;--poster-bg-color:transparent;--progress-bg:#007aff;--volume-progress-bg:#007aff;--safe-area-inset-bottom:$control_bottom;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;align-items:center;background:#000;color:#fff;display:flex;font-family:-apple-system,BlinkMacSystemFont,Microsoft YaHei;height:100%;justify-content:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;z-index:auto}@supports(padding-bottom:constant(safe-area-inset-bottom)){.nplayer{--safe-area-inset-bottom:max(8px,constant(safe-area-inset-bottom))}}@supports(padding-bottom:env(safe-area-inset-bottom)){.nplayer{--safe-area-inset-bottom:max(8px,env(safe-area-inset-bottom))}}.nplayer *{box-sizing:content-box}.nplayer_control{z-index:10}.nplayer_control_bg{z-index:9}.nplayer_poster{z-index:20}.nplayer_loading{z-index:30}.nplayer_contextmenu{z-index:40}.nplayer_toast{z-index:50}.nplayer:focus{outline:none}.nplayer_flex{display:flex}.nplayer_align-center{align-items:center}.nplayer-web-full{bottom:0;left:0;position:fixed;right:0;top:0;z-index:99999}.nplayer-web-full .nplayer_control{padding-bottom:var(--safe-area-inset-bottom)}.nplayer-loading .nplayer_loading{display:block}.nplayer_icon{fill:#fff;height:28px;width:28px}.nplayer_video{max-height:100%;outline:none;touch-action:none;width:100%}.nplayer_spacer{flex:1}.nplayer_tooltip{cursor:pointer;padding:3px;position:relative;transition:background .2s ease}@media not all and (hover:none){.nplayer_tooltip:hover{background:var(--theme-color)}.nplayer_tooltip:hover .nplayer_tooltip_content{opacity:1;transform:translate(-50%)}.nplayer_tooltip:hover .nplayer_tooltip-left,.nplayer_tooltip:hover .nplayer_tooltip-right{transform:translate(0)}}.nplayer_tooltip_content{background:rgba(0,0,0,.7);bottom:100%;font-size:12px;left:50%;margin-bottom:10px;opacity:0;padding:5px 10px;pointer-events:none;position:absolute;transform:translate(-50%,10px) scale(.8);transform-origin:50% 100%;transition:transform .2s ease .1s,opacity .2s ease .1s;white-space:nowrap}.nplayer_tooltip-left{left:0;transform:translateY(10px) scale(.8);transform-origin:0 100%}.nplayer_tooltip-right{left:auto;right:0;transform:translateY(10px) scale(.8);transform-origin:100% 100%}.nplayer_tooltip-bottom{bottom:auto;margin-bottom:0;margin-top:10px;top:100%;transform:translate(-50%,-10px) scale(.8)}.nplayer_tooltip-bottom.nplayer_tooltip-left,.nplayer_tooltip-bottom.nplayer_tooltip-right{transform:translateY(-10px) scale(.8)}.nplayer_popover{pointer-events:none}.nplayer_popover-active{pointer-events:auto}.nplayer_popover-active .nplayer_popover_panel{opacity:1;transform:translateY(0)}.nplayer_popover_panel{background:rgba(0,0,0,.7);bottom:100%;box-shadow:0 1px 20px 1px rgba(0,0,0,.2);font-size:14px;margin-bottom:5px;opacity:0;overflow:hidden;padding:3px 0;position:absolute;right:0;transform:translateY(10px);transition:opacity .2s ease,transform .2s ease,height .2s cubic-bezier(.4,0,.2,1),width .2s cubic-bezier(.4,0,.2,1);white-space:nowrap;z-index:2}.nplayer_popover_panel-bottom{bottom:auto;margin-bottom:0;margin-top:5px;top:100%;transform:translateY(-10px)}.nplayer_popover_panel-left{left:0;right:auto}.nplayer_popover_mask{bottom:0;left:0;position:fixed;right:0;top:0;z-index:1}.nplayer_switch{background:rgba(255,255,255,.3);border-radius:10px;cursor:pointer;display:inline-block;padding:2px;transition:background-color .3s cubic-bezier(.4,0,.2,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:30px}.nplayer_switch:after{background:#fff;border-radius:50%;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);content:"";display:block;height:15px;transition:transform .15s cubic-bezier(.4,0,.2,1);width:15px}.nplayer_switch-active{background:var(--theme-color)}.nplayer_switch-active:after{transform:translateX(16px)}.nplayer_loading{display:none;height:70px;left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:70px}.nplayer_loading i{-webkit-animation:nplayer-loading 1s linear infinite;animation:nplayer-loading 1s linear infinite;background-color:#fff;border-radius:50%/20%;height:25%;left:44.5%;opacity:.25;position:absolute;top:37%;width:5px}.nplayer_loading i:first-child{-webkit-animation-delay:0s;animation-delay:0s;transform:rotate(-150deg) translateY(-150%)}.nplayer_loading i:nth-child(2){-webkit-animation-delay:.0833s;animation-delay:.0833s;transform:rotate(-120deg) translateY(-150%)}.nplayer_loading i:nth-child(3){-webkit-animation-delay:.1666s;animation-delay:.1666s;transform:rotate(-90deg) translateY(-150%)}.nplayer_loading i:nth-child(4){-webkit-animation-delay:.2499s;animation-delay:.2499s;transform:rotate(-60deg) translateY(-150%)}.nplayer_loading i:nth-child(5){-webkit-animation-delay:.3332s;animation-delay:.3332s;transform:rotate(-30deg) translateY(-150%)}.nplayer_loading i:nth-child(6){-webkit-animation-delay:.4165s;animation-delay:.4165s;transform:rotate(0deg) translateY(-150%)}.nplayer_loading i:nth-child(7){-webkit-animation-delay:.4998s;animation-delay:.4998s;transform:rotate(30deg) translateY(-150%)}.nplayer_loading i:nth-child(8){-webkit-animation-delay:.5831s;animation-delay:.5831s;transform:rotate(60deg) translateY(-150%)}.nplayer_loading i:nth-child(9){-webkit-animation-delay:.6664s;animation-delay:.6664s;transform:rotate(90deg) translateY(-150%)}.nplayer_loading i:nth-child(10){-webkit-animation-delay:.7497s;animation-delay:.7497s;transform:rotate(120deg) translateY(-150%)}.nplayer_loading i:nth-child(11){-webkit-animation-delay:.833s;animation-delay:.833s;transform:rotate(150deg) translateY(-150%)}.nplayer_loading i:nth-child(12){-webkit-animation-delay:.9163s;animation-delay:.9163s;transform:rotate(180deg) translateY(-150%)}.nplayer_toast{background:rgba(0,0,0,.7);font-size:16px;padding:3px 5px;position:absolute;white-space:nowrap}.nplayer_toast-center{left:50%;top:50%;transform:translate(-50%,-50%)}.nplayer_toast-left-top,.nplayer_toast-right-top{top:5px}.nplayer_toast-left-bottom,.nplayer_toast-left-top{left:5px}.nplayer_toast-right-bottom,.nplayer_toast-right-top{right:5px}.nplayer_toast-left-bottom,.nplayer_toast-right-bottom{bottom:60px}.nplayer_slider{cursor:pointer;display:inline-block;flex:1;margin:0 6px;padding:5px 0;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.nplayer_slider_track{background:rgba(255,255,255,.3);height:4px;overflow:hidden;width:100%}.nplayer_slider_track_inner{background:var(--theme-color);height:100%;transform-origin:0 0}.nplayer_slider_stop{background:rgba(255,255,255,.7);font-size:12px;height:8px;position:absolute;top:3px;white-space:nowrap;width:3px}.nplayer_slider_stop span{left:2px;position:absolute;top:6px;transform:translateX(-50%)}.nplayer_slider_dot{background:var(--theme-color);border-radius:50%;height:13px;left:-6px;pointer-events:none;position:absolute;top:.5px;width:13px}.nplayer_checkbox{align-items:center;color:#fff;cursor:pointer;display:inline-flex;font-size:12px;position:relative;transition:color .2s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.nplayer_checkbox:before{border:1px solid;border-radius:2px;content:"";display:block;height:1em;margin-right:5px;transition:background .2s ease;width:1em}.nplayer_checkbox:after{border:1px solid #fff;border-left:0;border-top:0;content:"";height:7px;left:.5em;opacity:0;position:absolute;top:50%;transform:translate(-30%,-70%) rotate(45deg);width:4px}.nplayer_checkbox:hover{color:var(--theme-color)}.nplayer_checkbox-active:before{background:var(--theme-color);border-color:var(--theme-color)}.nplayer_checkbox-active:after{opacity:1}.nplayer_poster{background-color:var(--poster-bg-color);background-position:50% 50%;background-repeat:no-repeat;background-size:cover;bottom:0;left:0;position:absolute;right:0;top:0}.nplayer_poster_play{cursor:pointer;height:50px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:50px}.nplayer_control{bottom:0;left:0;padding:0 5px 8px;position:absolute;right:0;transition:opacity .2s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.nplayer_control-hide{opacity:0;pointer-events:none}.nplayer_control:hover{cursor:default!important;opacity:1!important;pointer-events:auto!important}.nplayer_control:hover~.nplayer_control_bg{opacity:1!important}.nplayer_control_bg{background:url(' +
              f +
              ') repeat-x bottom;bottom:0;height:100px;left:0;pointer-events:none;position:absolute;right:0;transition:opacity .2s ease}.nplayer_control_bg-hide{opacity:0}.nplayer_control_bar{align-items:center;display:flex;font-size:0}.nplayer_control_bar-top{left:0;padding-top:5px;position:absolute;right:0;top:0;transition:opacity .2s ease;z-index:10}.nplayer_control_bar-hide{opacity:0;pointer-events:none}.nplayer_control_bar>div{margin:0 3px}.nplayer_control_time{font-size:13px;white-space:nowrap}.nplayer_control_time-live{align-items:center;display:flex}.nplayer_control_time-live:before{background:var(--theme-color);border-radius:50%;content:"";display:block;height:10px;margin-right:5px;margin-top:2px;width:10px}.nplayer_control_time :first-child:after{content:"/";display:inline-block;font-size:12px;margin:0 5px;transform:translateY(-.5px)}.nplayer_control_volume{position:relative;z-index:1}.nplayer_control_volume-ver .nplayer_control_volume_bars{bottom:100%;left:0;right:0}.nplayer_control_volume-hor .nplayer_control_volume_bars{bottom:0;left:100%;top:0}.nplayer_control_volume_bars{background:rgba(255,255,255,.3);font-size:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;transition:opacity .2s ease}.nplayer_control_volume:hover .nplayer_control_volume_bars{opacity:1;pointer-events:auto}.nplayer_control_volume_bar{background:var(--volume-progress-bg);height:100%;transform:scaleX(0) scaleY(0);transform-origin:0 100%;width:100%;will-change:transform}.nplayer_control_setting .nplayer_icon{transition:transform .2s ease}.nplayer_control_setting-active{background:var(--theme-color)}.nplayer_control_setting-active .nplayer_icon{transform:rotate(90deg)}.nplayer_control_setting_item,.nplayer_control_setting_option{align-items:center;display:flex;padding:5px 8px}.nplayer_control_setting_item:hover,.nplayer_control_setting_option:hover{background:rgba(255,255,255,.2)}.nplayer_control_setting_item{justify-content:space-between}.nplayer_control_setting_item>:first-child{margin-right:20px}.nplayer_control_setting_item-select:after{border:4px solid transparent;border-left-color:#fff;content:"";display:block;height:0;margin-left:10px;width:0}.nplayer_control_setting_option:before{border-bottom:1px solid #fff;border-right:1px solid #fff;content:"";display:inline-block;height:12px;margin-left:6px;margin-right:17px;opacity:0;transform:rotate(45deg);width:5px}.nplayer_control_setting_option-active:before{opacity:1}.nplayer_control_setting_back{border-bottom:1px solid rgba(255,255,255,.2);justify-content:flex-start;padding-right:20px}.nplayer_control_setting_back:before{border:4px solid transparent;border-right-color:#fff;content:"";display:block;height:0;margin-right:21px;width:0}.nplayer_contextmenu{background:rgba(0,0,0,.7);font-size:14px;left:0;padding:3px 0;position:absolute;top:0}.nplayer_contextmenu_item{align-items:center;cursor:pointer;display:flex;justify-content:space-between;padding:5px 8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.nplayer_contextmenu_item:hover{background:rgba(255,255,255,.2)}.nplayer_contextmenu_item-disabled{color:rgba(255,255,255,.5)}.nplayer_contextmenu_item-disabled:hover{background:transparent}.nplayer_contextmenu_item-checked:after{border-bottom:1px solid #fff;border-right:1px solid #fff;content:"";display:inline-block;height:12px;margin:0 2px 5px;transform:rotate(45deg);width:5px}.nplayer_progress{cursor:pointer;flex:1;padding:5px 0;position:relative}.nplayer_progress_bars{background:rgba(255,255,255,.3);height:4px;overflow:hidden;position:relative;touch-action:none;transition:height .12s ease}.nplayer_progress_dot{left:0;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);transition:opacity .2s ease}.nplayer_progress_dot>:first-child{transform:translate(-50%)}.nplayer_progress_dot_inner{background:var(--theme-color);border-radius:50%;height:13px;width:13px}@media not all and (hover:none){.nplayer_progress_dot{opacity:0}.nplayer_progress:hover .nplayer_progress_dot{opacity:1}}.nplayer_progress_buf,.nplayer_progress_played{bottom:0;left:0;position:absolute;right:0;top:0;transform:scaleX(0);transform-origin:0 0}.nplayer_progress_played{background:var(--progress-bg);will-change:transform}.nplayer_progress_buf,.nplayer_progress_hover{background:rgba(255,255,255,.5)}.nplayer_progress_hover{opacity:0}.nplayer_progress:hover .nplayer_thumb{display:block}.nplayer_thumb{bottom:20px;display:none;font-size:12px;left:0;pointer-events:none;position:absolute;text-align:center;text-shadow:0 0 2px rgba(0,0,0,.3)}.nplayer_thumb_img{background-color:rgba(255,255,255,.5);background-repeat:no-repeat;border:1px solid #fff;box-shadow:0 0 10px rgba(0,0,0,.1)}.nplayer_thumb_time{background:rgba(0,0,0,.7);border-radius:3px;display:inline-block;margin-top:5px;padding:2px 5px 3px}@-webkit-keyframes nplayer-loading{0%{opacity:.85}50%{opacity:.25}to{opacity:.25}}@keyframes nplayer-loading{0%{opacity:.85}50%{opacity:.25}to{opacity:.25}}',
            "",
          ]),
            (e.default = s);
        },
        645: function (t) {
          "use strict";
          t.exports = function (t) {
            var e = [];
            return (
              (e.toString = function () {
                return this.map(function (e) {
                  var n = "",
                    o = void 0 !== e[5];
                  return (
                    e[4] && (n += "@supports (".concat(e[4], ") {")),
                    e[2] && (n += "@media ".concat(e[2], " {")),
                    o &&
                      (n += "@layer".concat(
                        e[5].length > 0 ? " ".concat(e[5]) : "",
                        " {"
                      )),
                    (n += t(e)),
                    o && (n += "}"),
                    e[2] && (n += "}"),
                    e[4] && (n += "}"),
                    n
                  );
                }).join("");
              }),
              (e.i = function (t, n, o, r, i) {
                "string" == typeof t && (t = [[null, t, void 0]]);
                var a = {};
                if (o)
                  for (var c = 0; c < this.length; c++) {
                    var l = this[c][0];
                    null != l && (a[l] = !0);
                  }
                for (var u = 0; u < t.length; u++) {
                  var s = [].concat(t[u]);
                  (o && a[s[0]]) ||
                    (void 0 !== i &&
                      (void 0 === s[5] ||
                        (s[1] = "@layer"
                          .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                          .concat(s[1], "}")),
                      (s[5] = i)),
                    n &&
                      (s[2]
                        ? ((s[1] = "@media "
                            .concat(s[2], " {")
                            .concat(s[1], "}")),
                          (s[2] = n))
                        : (s[2] = n)),
                    r &&
                      (s[4]
                        ? ((s[1] = "@supports ("
                            .concat(s[4], ") {")
                            .concat(s[1], "}")),
                          (s[4] = r))
                        : (s[4] = "".concat(r))),
                    e.push(s));
                }
              }),
              e
            );
          };
        },
        667: function (t) {
          "use strict";
          t.exports = function (t, e) {
            return (
              e || (e = {}),
              t
                ? ((t = String(t.__esModule ? t.default : t)),
                  /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
                  e.hash && (t += e.hash),
                  /["'() \t\n]|(%20)/.test(t) || e.needQuotes
                    ? '"'.concat(
                        t.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                        '"'
                      )
                    : t)
                : t
            );
          };
        },
        81: function (t) {
          "use strict";
          t.exports = function (t) {
            return t[1];
          };
        },
        4: function (t, e, n) {
          var o;
          "undefined" != typeof window &&
            window.document &&
            (function () {
              var t = n(14);
              t.__esModule && (t = t.default);
              var e = "string" == typeof t ? t : t[0][1],
                r = !1;
              o ||
                ((o = document.createElement("style")).setAttribute(
                  "type",
                  "text/css"
                ),
                (r = !0)),
                "textContent" in o
                  ? (o.textContent = e)
                  : (o.styleSheet.cssText = e),
                r && document.head.appendChild(o);
            })();
        },
        831: function (t) {
          "use strict";
          t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==";
        },
      },
      e = {};
    function n(o) {
      var r = e[o];
      if (void 0 !== r) return r.exports;
      var i = (e[o] = { id: o, exports: {} });
      return t[o](i, i.exports, n), i.exports;
    }
    (n.m = t),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, { a: e }), e;
      }),
      (n.d = function (t, e) {
        for (var o in e)
          n.o(e, o) &&
            !n.o(t, o) &&
            Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.b = document.baseURI || self.location.href);
    var o = {};
    return (
      (function () {
        "use strict";
        n.r(o),
          n.d(o, {
            AIRPLAY: function () {
              return ln;
            },
            CLASS_PLAYER: function () {
              return c;
            },
            CLASS_PREFIX: function () {
              return a;
            },
            Checkbox: function () {
              return br;
            },
            ContextMenu: function () {
              return re;
            },
            Control: function () {
              return Mt;
            },
            EVENT: function () {
              return l;
            },
            EXIT_FULL_SCREEN: function () {
              return Ze;
            },
            FULL_SCREEN: function () {
              return Xe;
            },
            Fullscreen: function () {
              return ge;
            },
            I18n: function () {
              return sn;
            },
            Icon: function () {
              return pn;
            },
            LIVE: function () {
              return un;
            },
            LOOP: function () {
              return an;
            },
            Loading: function () {
              return qt;
            },
            MUTE: function () {
              return tn;
            },
            NORMAL: function () {
              return nn;
            },
            PAUSE: function () {
              return $e;
            },
            PIP: function () {
              return rn;
            },
            PLAY: function () {
              return Je;
            },
            Player: function () {
              return Xr;
            },
            Popover: function () {
              return Le;
            },
            SETTINGS: function () {
              return Qe;
            },
            SPEED: function () {
              return on;
            },
            Shortcut: function () {
              return jn;
            },
            Slider: function () {
              return kr;
            },
            Switch: function () {
              return Ve;
            },
            Toast: function () {
              return de;
            },
            ToastItem: function () {
              return ye;
            },
            Tooltip: function () {
              return bt;
            },
            UNMUTE: function () {
              return en;
            },
            VOLUME: function () {
              return cn;
            },
            WEB_EXIT_FULL_SCREEN: function () {
              return Ke;
            },
            WEB_FULL_SCREEN: function () {
              return qe;
            },
            WebFullscreen: function () {
              return Ee;
            },
            default: function () {
              return Xr;
            },
          });
        var t = {};
        n.r(t),
          n.d(t, {
            Checkbox: function () {
              return br;
            },
            Popover: function () {
              return Le;
            },
            Slider: function () {
              return kr;
            },
            Switch: function () {
              return Ve;
            },
            Tooltip: function () {
              return bt;
            },
          });
        n(4);
        function e(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e &&
              (o = o.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        function r(t) {
          for (var n = 1; n < arguments.length; n++) {
            var o = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? e(Object(o), !0).forEach(function (e) {
                  i(t, e, o[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
              : e(Object(o)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(o, e)
                  );
                });
          }
          return t;
        }
        function i(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var a = "nplayer_",
          c = "nplayer",
          l = {
            ENTER_FULLSCREEN: "EnterFullscreen",
            EXIT_FULLSCREEN: "ExitFullscreen",
            WEB_ENTER_FULLSCREEN: "WebEnterFullscreen",
            WEB_EXIT_FULLSCREEN: "WebExitFullscreen",
            DURATION_CHANGE: "DurationChange",
            RATE_CHANGE: "RateChange",
            AFTER_INIT: "AfterInit",
            PLAY: "Play",
            PAUSE: "Pause",
            ENDED: "Ended",
            WAITING: "Waiting",
            STALLED: "Stalled",
            CANPLAY: "Canplay",
            LOADED_METADATA: "LoadedMetadata",
            ERROR: "Error",
            SEEKED: "Seeked",
            TIME_UPDATE: "TimeUpdate",
            VOLUME_CHANGE: "VolumeChange",
            PROGRESS: "Progress",
            ENTER_PIP: "EnterPip",
            EXIT_PIP: "ExitPip",
            LOADING_SHOW: "LoadingShow",
            LOADING_HIDE: "LoadingHide",
            MOUNTED: "Mounted",
            UPDATE_SIZE: "UpdateSize",
            BEFORE_DISPOSE: "BeforeDispose",
            UPDATE_OPTIONS: "UpdateOptions",
            OPEN_EDGE: "OpenEdge",
            CONTROL_SHOW: "ControlShow",
            CONTROL_HIDE: "ControlHide",
            CONTROL_ITEM_UPDATE: "ControlItemUpdate",
            BP_CHANGE: "BpChange",
          },
          u = "undefined" != typeof window,
          s = u && /(iPad|iPhone|iPod)/gi.test(navigator.platform),
          f = u && /MSIE|Trident/.test(navigator.userAgent),
          p = u && f && navigator.userAgent.indexOf("Windows NT 10.0") > -1;
        function h(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        var y = /([\w-]+)?(?:#([\w-]+))?((?:\.(?:[\w-]+))*)/;
        function d(t, e, n) {
          var o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : a,
            r = [];
          t && (r = y.exec(t) || []);
          var i = document.createElement(r[1] || "div");
          return (
            r[2] && (i.id = r[3]),
            r[3] && (i.className = r[3].replace(/\./g, " ".concat(o)).trim()),
            e &&
              Object.keys(e).forEach(function (t) {
                var n = e[t];
                void 0 !== n &&
                  (/^on\w+$/.test(t)
                    ? (i[t] = n)
                    : "selected" === t
                    ? n && i.setAttribute(t, "true")
                    : i.setAttribute(t, n));
              }),
            n &&
              (N(n)
                ? (i.innerHTML = n)
                : n.forEach(function (t) {
                    return i.appendChild(t);
                  })),
            i
          );
        }
        function b(t) {
          return t ? (N(t) ? document.querySelector(t) : t) : null;
        }
        function v(t) {
          t &&
            (t.remove
              ? t.remove()
              : t.parentNode && t.parentNode.removeChild(t));
        }
        function m(t) {
          t.style.display = "";
        }
        function g(t) {
          t.style.display = "none";
        }
        function _(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : a;
          if (!(e = e.trim())) return t;
          if (t.classList)
            e.split(" ").forEach(function (e) {
              return t.classList.add(n + e);
            });
          else {
            var o = (t.className && t.className.baseVal) || "";
            t.setAttribute(
              "class",
              (o ? "".concat(o, " ") : "") +
                e
                  .split(" ")
                  .map(function (t) {
                    return n + t;
                  })
                  .join(" ")
            );
          }
          return t;
        }
        function w(t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a;
          return t.classList.remove(n + e), t;
        }
        function E(t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a;
          return t.classList.contains(n + e);
        }
        function O(t, e, n) {
          var o =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a;
          return (
            (e = o + e),
            n
              ? (t.classList.add(e), !0)
              : !1 === n
              ? (t.classList.remove(e), !0)
              : t.classList.toggle(e, n)
          );
        }
        var k = "http://www.w3.org/2000/svg";
        function P(t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "0 0 24 24",
            o = document.createElementNS(k, "svg");
          if ((o.setAttribute("viewBox", n), t && _(o, t), e)) {
            var r = document.createElementNS(k, "path");
            r.setAttributeNS(null, "d", e), o.appendChild(r);
          }
          return o;
        }
        function x(t) {
          return t.path || t.composedPath();
        }
        var T = !1;
        if (u)
          try {
            var S = Object.defineProperty({}, "once", {
              get: function () {
                T = !0;
              },
            });
            window.addEventListener("test", null, S);
          } catch (t) {}
        var j = (function () {
          function t(e, n, o, r) {
            var i;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.node = e),
              (this.type = n),
              (this.handler = o),
              (this.options = r),
              (this.options =
                !0 === (i = r) || !1 === i || "[object Boolean]" === B.call(i)
                  ? r
                  : !!r && T && r),
              e.addEventListener(n, o, this.options);
          }
          var e, n, o;
          return (
            (e = t),
            (n = [
              {
                key: "dispose",
                value: function () {
                  this.handler &&
                    (this.node.removeEventListener(
                      this.type,
                      this.handler,
                      this.options
                    ),
                    (this.node = null),
                    (this.handler = null),
                    (this.options = null));
                },
              },
            ]) && h(e.prototype, n),
            o && h(e, o),
            t
          );
        })();
        function C(t) {
          var e = t.cloneNode(!0);
          (e.style.position = "absolute"),
            (e.style.opacity = "0"),
            e.removeAttribute("hidden");
          var n = t.parentNode || document.body;
          n.appendChild(e);
          var o = e.getBoundingClientRect();
          return n.removeChild(e), o;
        }
        function R(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function L(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var I = (function () {
          function t(e, n, o, r) {
            var i = this;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              L(this, "pending", !1),
              L(this, "downHandler", function (t) {
                t.preventDefault(),
                  i.el.setPointerCapture(t.pointerId),
                  i.el.addEventListener("pointermove", i.moveHandler, !0),
                  i.start(t);
              }),
              L(this, "moveHandler", function (t) {
                t.preventDefault(),
                  (i.lastEv = t),
                  i.pending ||
                    ((i.pending = !0), requestAnimationFrame(i.handlerMove));
              }),
              L(this, "handlerMove", function () {
                i.move(i.lastEv), (i.pending = !1);
              }),
              L(this, "upHandler", function (t) {
                t.preventDefault(),
                  i.el.releasePointerCapture(t.pointerId),
                  i.el.removeEventListener("pointermove", i.moveHandler, !0),
                  i.end && i.end(t);
              }),
              (this.el = e),
              (this.start = n),
              (this.move = o),
              (this.end = r),
              e.addEventListener("pointerdown", this.downHandler, !0),
              e.addEventListener("pointerup", this.upHandler, !0),
              e.addEventListener("pointercancel", this.upHandler, !0);
          }
          var e, n, o;
          return (
            (e = t),
            (n = [
              {
                key: "dispose",
                value: function () {
                  this.el &&
                    (this.el.removeEventListener(
                      "pointerdown",
                      this.downHandler,
                      !0
                    ),
                    this.el.removeEventListener(
                      "pointerup",
                      this.upHandler,
                      !0
                    ),
                    this.el.removeEventListener(
                      "pointercancel",
                      this.upHandler,
                      !0
                    ),
                    this.el.removeEventListener(
                      "pointermove",
                      this.moveHandler,
                      !0
                    ),
                    (this.start = null),
                    (this.move = null),
                    (this.end = null),
                    (this.lastEv = null),
                    (this.el = null));
                },
              },
            ]) && R(e.prototype, n),
            o && R(e, o),
            t
          );
        })();
        function A(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        var D = (function () {
            function t(e, n) {
              var o,
                r,
                i,
                a = this;
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (i = function () {
                  a.rect = a.el.getBoundingClientRect();
                }),
                (r = "update") in (o = this)
                  ? Object.defineProperty(o, r, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (o[r] = i),
                (this.el = e),
                (this.player = n),
                (this.rect = {}),
                n && n.on(l.UPDATE_SIZE, this.update);
            }
            var e, n, o;
            return (
              (e = t),
              (n = [
                {
                  key: "isHeightGtWidth",
                  get: function () {
                    return this.width < this.height;
                  },
                },
                {
                  key: "width",
                  get: function () {
                    return this.tryUpdate(this.rect.width), this.rect.width;
                  },
                },
                {
                  key: "height",
                  get: function () {
                    return this.tryUpdate(this.rect.height), this.rect.height;
                  },
                },
                {
                  key: "x",
                  get: function () {
                    return this.tryUpdate(this.rect.left), this.rect.left;
                  },
                },
                {
                  key: "y",
                  get: function () {
                    return this.tryUpdate(this.rect.top), this.rect.top;
                  },
                },
                {
                  key: "changed",
                  get: function () {
                    var t = this.el.getBoundingClientRect(),
                      e =
                        t.top !== this.rect.top ||
                        t.left !== this.rect.left ||
                        t.width !== this.rect.width ||
                        t.height !== this.rect.height;
                    return e && (this.rect = t), e;
                  },
                },
                {
                  key: "tryUpdate",
                  value: function (t) {
                    t || this.update();
                  },
                },
                {
                  key: "dispose",
                  value: function () {
                    this.player && this.player.off(l.UPDATE_SIZE, this.update),
                      (this.el = null),
                      (this.rect = null);
                  },
                },
              ]) && A(e.prototype, n),
              o && A(e, o),
              t
            );
          })(),
          B = Object.prototype.toString;
        function N(t) {
          return "string" == typeof t || t instanceof String;
        }
        function H(t) {
          return "function" == typeof t;
        }
        function M(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function U(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        var F = function t(e, n, o) {
            U(this, t),
              (this.fn = e),
              (this.context = n),
              (this.once = o),
              (this.once = o || !1);
          },
          V = (function () {
            function t() {
              U(this, t),
                (this._events = Object.create(null)),
                (this._eventsCount = 0);
            }
            var e, n, o;
            return (
              (e = t),
              (n = [
                {
                  key: "emit",
                  value: function (t, e, n, o, r, i) {
                    if (!this._events[t]) return !1;
                    var a,
                      c,
                      l = this._events[t],
                      u = arguments.length;
                    if (l.fn) {
                      switch ((l.once && this.off(t, l.fn, void 0, !0), u)) {
                        case 1:
                          return l.fn.call(l.context), !0;
                        case 2:
                          return l.fn.call(l.context, e), !0;
                        case 3:
                          return l.fn.call(l.context, e, n), !0;
                        case 4:
                          return l.fn.call(l.context, e, n, o), !0;
                        case 5:
                          return l.fn.call(l.context, e, n, o, r), !0;
                        case 6:
                          return l.fn.call(l.context, e, n, o, r, i), !0;
                      }
                      for (c = 1, a = new Array(u - 1); c < u; c++)
                        a[c - 1] = arguments[c];
                      l.fn.apply(l.context, a);
                    } else {
                      var s,
                        f = l.length;
                      for (c = 0; c < f; c++)
                        switch (
                          (l[c].once && this.off(t, l[c].fn, void 0, !0), u)
                        ) {
                          case 1:
                            l[c].fn.call(l[c].context);
                            break;
                          case 2:
                            l[c].fn.call(l[c].context, e);
                            break;
                          case 3:
                            l[c].fn.call(l[c].context, e, n);
                            break;
                          case 4:
                            l[c].fn.call(l[c].context, e, n, o);
                            break;
                          default:
                            if (!a)
                              for (s = 1, a = new Array(u - 1); s < u; s++)
                                a[s - 1] = arguments[s];
                            l[c].fn.apply(l[c].context, a);
                        }
                    }
                    return !0;
                  },
                },
                {
                  key: "on",
                  value: function (t, e, n) {
                    var o =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    if ("function" != typeof e)
                      throw new TypeError("The listener must be a function");
                    var r = new F(e, n || this, o);
                    return (
                      this._events[t]
                        ? this._events[t].fn
                          ? (this._events[t] = [this._events[t], r])
                          : this._events[t].push(r)
                        : ((this._events[t] = r), this._eventsCount++),
                      { dispose: this.off.bind(this, t, e) }
                    );
                  },
                },
                {
                  key: "once",
                  value: function (t, e, n) {
                    return this.on(t, e, n, !0);
                  },
                },
                {
                  key: "off",
                  value: function (t, e, n, o) {
                    if (!this._events[t]) return this;
                    if (!e) return this.clearEvent(t), this;
                    var r = this._events[t],
                      i = [];
                    if (r.fn)
                      r.fn !== e ||
                        (o && !r.once) ||
                        (n && r.context !== n) ||
                        this.clearEvent(t);
                    else {
                      for (var a = 0, c = r.length; a < c; a++)
                        (r[a].fn !== e ||
                          (o && !r[a].once) ||
                          (n && r[a].context !== n)) &&
                          i.push(r[a]);
                      i.length
                        ? (this._events[t] = 1 === i.length ? i[0] : i)
                        : this.clearEvent(t);
                    }
                    return this;
                  },
                },
                {
                  key: "removeAllListeners",
                  value: function (t) {
                    return (
                      t
                        ? this._events[t] && this.clearEvent(t)
                        : ((this._events = Object.create(null)),
                          (this._eventsCount = 0)),
                      this
                    );
                  },
                },
                {
                  key: "clearEvent",
                  value: function (t) {
                    0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : delete this._events[t];
                  },
                },
              ]) && M(e.prototype, n),
              o && M(e, o),
              t
            );
          })();
        function z(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        var Y = (function () {
          function t(e, n, o, r, i) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              n && !N(n) ? (this.el = n) : (this.el = d(n, o, r, i)),
              e && e.appendChild(this.el);
          }
          var e, n, o;
          return (
            (e = t),
            (n = [
              {
                key: "applyStyle",
                value: function (t) {
                  Object.assign(this.el.style, t);
                },
              },
              {
                key: "dispose",
                value: function () {
                  v(this.el), et(this);
                },
              },
            ]) && z(e.prototype, n),
            o && z(e, o),
            t
          );
        })();
        function W(t, e) {
          return !(!t || !e) && (t === e || t.id === e.id);
        }
        function G(t, e) {
          v(t.el), e && e(t);
        }
        function X(t, e, n, o) {
          e.insertBefore(t.el, (null == n ? void 0 : n.el) || null), o && o(t);
        }
        function Z(t) {
          for (
            var e,
              n = [],
              o = [t[0]],
              r = 0,
              i = 0,
              a = 0,
              c = 0,
              l = 1,
              u = t.length;
            l < u;
            ++l
          )
            if (-1 !== (e = t[l]))
              if (e > t[o[(c = o.length - 1)]]) (n[l] = o[c]), o.push(l);
              else {
                for (r = 0, i = c; r < i; )
                  e > t[o[(a = ((r + i) / 2) | 0)]] ? (r = a + 1) : (i = a);
                (n[l] = o[r - 1]), (o[r] = l);
              }
          for (r = o[(c = o.length) - 1]; c-- > 0; ) (o[c] = r), (r = n[r]);
          return o;
        }
        var q = { checked: !0, muted: !0, multiple: !0, selected: !0 };
        function K(t, e, n) {
          q[e]
            ? (t[e] = n)
            : null == n
            ? t.removeAttribute(e)
            : t.setAttribute(e, n);
        }
        function Q(t, e, n) {
          var o, r;
          void 0 !== n &&
            (Object.keys(n).forEach(function (i) {
              (o = e[i]),
                (r = n[i]),
                "style" === i
                  ? (function (t, e, n) {
                      void 0 !== n &&
                        (n
                          ? (Object.keys(n).forEach(function (e) {
                              t.style[e] = n[e] || "";
                            }),
                            Object.keys(e).forEach(function (e) {
                              e in n || (t.style[e] = "");
                            }))
                          : t.removeAttribute("style"));
                    })(t, o, r)
                  : o !== r && K(t, i, r);
            }),
            Object.keys(e).forEach(function (e) {
              e in n || K(t, e, void 0);
            }));
        }
        function J(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
          return Math.max(Math.min(t, n), e);
        }
        var $ = new Map();
        function tt(t, e) {
          return $.has(t) || $.set(t, []), $.get(t).push(e), e;
        }
        function et(t) {
          $.has(t) &&
            ($.get(t).forEach(function (t) {
              return t.dispose();
            }),
            $.delete(t));
        }
        function nt(t, e, n, o, r) {
          var i = new j(e, n, o, r);
          return t && tt(t, i), i;
        }
        function ot(t, e) {
          var n = !1,
            o = !0,
            r = null;
          return function () {
            if (((r = arguments), o)) return (o = !1), t.apply(e, r);
            n ||
              ((n = !0),
              requestAnimationFrame(function () {
                t.apply(e, r), (n = !1);
              }));
          };
        }
        function rt(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "0";
          if ((t = String(t)).length >= 2) return t;
          for (var o = 0, r = e - t.length; o < r; o++) t = n + t;
          return t;
        }
        function it(t) {
          return isFinite(t)
            ? t <= 0
              ? "0:00"
              : (t = Math.round(t)) < 60
              ? "0:".concat(rt(t))
              : t < 3600
              ? "".concat(Math.floor(t / 60), ":").concat(rt(t % 60))
              : ""
                  .concat(Math.floor(t / 3600), ":")
                  .concat(rt(Math.floor((t % 3600) / 60)), ":")
                  .concat(rt(t % 60))
            : "-";
        }
        var at = {
          $: d,
          clamp: J,
          addDisposableListener: nt,
          addDisposable: tt,
          createSvg: P,
          dispose: et,
          getEventPath: x,
          removeNode: v,
          addClass: _,
        };
        function ct(t) {
          return (ct =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function lt(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function ut(t, e) {
          return (ut =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function st(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = pt(t);
            if (e) {
              var r = pt(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return ft(this, n);
          };
        }
        function ft(t, e) {
          if (e && ("object" === ct(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t);
        }
        function pt(t) {
          return (pt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        var ht = "tooltip-left",
          yt = "tooltip-right",
          dt = "tooltip-bottom",
          bt = (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && ut(t, e);
            })(i, t);
            var e,
              n,
              o,
              r = st(i);
            function i(t, e) {
              var n;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i),
                (n = r.call(this, t, ".tooltip_content")),
                _(t, "tooltip"),
                e && (n.html = e),
                n
              );
            }
            return (
              (e = i),
              (n = [
                {
                  key: "html",
                  get: function () {
                    return this.el.innerHTML;
                  },
                  set: function (t) {
                    this.el.innerHTML = t;
                  },
                },
                {
                  key: "resetPos",
                  value: function () {
                    w(this.el, ht), w(this.el, yt), w(this.el, dt);
                  },
                },
                {
                  key: "setBottom",
                  value: function () {
                    _(this.el, dt);
                  },
                },
                {
                  key: "setLeft",
                  value: function () {
                    _(this.el, ht);
                  },
                },
                {
                  key: "setRight",
                  value: function () {
                    _(this.el, yt);
                  },
                },
                {
                  key: "hide",
                  value: function () {
                    g(this.el);
                  },
                },
                {
                  key: "show",
                  value: function () {
                    m(this.el);
                  },
                },
              ]) && lt(e.prototype, n),
              o && lt(e, o),
              i
            );
          })(Y),
          vt = function () {
            return { id: "spacer", el: d(".spacer") };
          };
        function mt(t) {
          return (mt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function gt(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function _t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function wt(t, e) {
          return (wt =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function Et(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = Pt(t);
            if (e) {
              var r = Pt(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return Ot(this, n);
          };
        }
        function Ot(t, e) {
          if (e && ("object" === mt(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return kt(t);
        }
        function kt(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Pt(t) {
          return (Pt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function xt(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var Tt = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && wt(t, e);
          })(i, t);
          var e,
            n,
            o,
            r = Et(i);
          function i(t, e, n) {
            var o,
              a =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 0;
            if (
              (gt(this, i),
              xt(kt((o = r.call(this, t, ".control_bar"))), "prevItems", []),
              xt(kt(o), "spacer", vt()),
              xt(kt(o), "initControlItem", function (t) {
                var e;
                if ((t = o.getItem(t)))
                  return (
                    t.el || (t.el = d()),
                    t.mounted
                      ? (t.tooltip &&
                          (t.tooltip.resetPos(),
                          2 === o.position && t.tooltip.setBottom()),
                        void (t.update && t.update(o.position)))
                      : (t.tip && (e = new bt(t.el, t.tip)),
                        t.init &&
                          (t.init.length > 2 && !e && (e = new bt(t.el)),
                          t.init(o.player, o.position, e)),
                        t.dispose && tt(kt(o), t),
                        e || (e = t.tooltip),
                        e && (e.resetPos(), 2 === o.position && e.setBottom()),
                        (t.mounted = !0),
                        t)
                  );
              }),
              xt(kt(o), "onHideControlItem", function (t) {
                t.hide && t.hide();
              }),
              (o.player = e),
              (o.position = a),
              2 === a && _(o.el, "control_bar-top"),
              n)
            ) {
              var c = document.createDocumentFragment();
              n.forEach(function (t) {
                (t = o.initControlItem(t)) &&
                  (c.appendChild(t.el), o.prevItems.push(t));
              }),
                o.updateTooltipPos(),
                o.el.appendChild(c);
            }
            return o;
          }
          return (
            (e = i),
            (n = [
              {
                key: "getItem",
                value: function (t) {
                  return "spacer" === t
                    ? this.spacer
                    : (N(t) && (t = this.player.getControlItem(t)),
                      !t || (t.isSupport && !t.isSupport(this.player))
                        ? void 0
                        : t);
                },
              },
              {
                key: "updateTooltipPos",
                value: function () {
                  var t = this,
                    e = this.prevItems.length - 1;
                  this.prevItems.forEach(function (n, o) {
                    n.tooltip &&
                      (n.tooltip.resetPos(),
                      2 === t.position && n.tooltip.setBottom(),
                      0 === o
                        ? n.tooltip.setLeft()
                        : o === e && n.tooltip.setRight());
                  });
                },
              },
              {
                key: "getItems",
                value: function () {
                  return this.prevItems;
                },
              },
              {
                key: "setItems",
                value: function (t) {
                  t && (this.prevItems = t);
                },
              },
              {
                key: "update",
                value: function (t) {
                  var e = this;
                  if (t) {
                    var n = [];
                    t.forEach(function (t) {
                      (t = e.getItem(t)) && n.push(t);
                    }),
                      (function (t, e, n) {
                        for (
                          var o =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : {},
                            r = t.length - 1,
                            i = e.length - 1,
                            a = 0,
                            c = t[a],
                            l = e[a];
                          W(c, l);

                        )
                          (c = t[++a]), (l = e[a]);
                        if (a < r && a < i)
                          for (c = t[r], l = e[i]; W(c, l); )
                            (c = t[--r]), (l = e[--i]);
                        if (!(a > r && a > i))
                          if (a > r)
                            for (var u = a; u <= i; u++)
                              X(e[u], n, void 0, o.mount);
                          else if (a > i)
                            for (var s = a; s <= r; s++) G(t[s], o.unmount);
                          else {
                            for (var f = [], p = new Map(), h = a; h <= i; h++)
                              f.push(-1), p.set(e[h].id || e[h], h);
                            for (var y = !1, d = 0, b = 0, v = a; v <= r; v++)
                              (c = t[v]),
                                null == (b = p.get(c.id || c))
                                  ? G(c, o.unmount)
                                  : ((f[b - a] = v),
                                    d > b ? (y = !0) : (d = b));
                            for (
                              var m,
                                g,
                                _ = y ? Z(f) : [],
                                w = _.length - 1,
                                E = f.length - 1;
                              E > -1;
                              E--
                            )
                              (m = f[E]),
                                (g = e[(b = a + E) + 1]),
                                -1 === m
                                  ? X(e[b], n, g, o.mount)
                                  : y &&
                                    (E === _[w]
                                      ? w--
                                      : X(e[b], n, g, o.update));
                          }
                      })(this.prevItems, n, this.el, {
                        mount: this.initControlItem,
                        unmount: this.onHideControlItem,
                      }),
                      (this.prevItems = n),
                      this.updateTooltipPos(),
                      this.player.emit(l.CONTROL_ITEM_UPDATE);
                  }
                },
              },
            ]) && _t(e.prototype, n),
            o && _t(e, o),
            i
          );
        })(Y);
        function St(t) {
          return (St =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function jt(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function Ct(t, e) {
          return (Ct =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function Rt(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = At(t);
            if (e) {
              var r = At(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return Lt(this, n);
          };
        }
        function Lt(t, e) {
          if (e && ("object" === St(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return It(t);
        }
        function It(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function At(t) {
          return (At = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function Dt(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var Bt = "control-hide",
          Nt = "control_bg-hide",
          Ht = "control_bar-hide",
          Mt = (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && Ct(t, e);
            })(i, t);
            var e,
              n,
              o,
              r = Rt(i);
            function i(t, e) {
              var n;
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
                Dt(It((n = r.call(this, t, ".control"))), "delayHidTime", 3e3),
                Dt(It(n), "latch", 0),
                Dt(It(n), "controlBars", []),
                Dt(It(n), "emitAndUpdateBp", function () {
                  var t = n.player.rect.width,
                    e = n.controls.find(function (e) {
                      return t <= e.bp;
                    });
                  if (n.currentBp != (null == e ? void 0 : e.bp)) {
                    n.currentBp = null == e ? void 0 : e.bp;
                    var o =
                      (null == e ? void 0 : e.controls) ||
                      n.player.opts.controls;
                    n.updateItems(o[0], 0),
                      n.updateItems(o[1], 1),
                      n.updateItems(o[2], 2),
                      n.player.emit(l.BP_CHANGE, n.currentBp);
                  }
                  return e;
                }),
                Dt(It(n), "show", function () {
                  w(n.el, Bt),
                    w(n.bgElement, Nt),
                    w(n.controlBars[2].el, Ht),
                    (n.player.el.style.cursor = ""),
                    n.player.emit(l.CONTROL_SHOW);
                }),
                Dt(It(n), "hide", function () {
                  _(n.el, Bt),
                    _(n.bgElement, Nt),
                    _(n.controlBars[2].el, Ht),
                    (n.player.el.style.cursor = "none"),
                    n.player.emit(l.CONTROL_HIDE);
                }),
                Dt(It(n), "showTransient", function () {
                  n.show(),
                    clearTimeout(n.showTimer),
                    (n.showTimer = setTimeout(n.tryHide, n.delayHidTime));
                }),
                Dt(It(n), "tryHide", function () {
                  !n.player.video.played.length ||
                    n.player.paused ||
                    n.latch ||
                    n.hide();
                }),
                (n.player = e),
                (n.bgElement = t.appendChild(d(".control_bg"))),
                (n.controlBars[1] = tt(
                  It(n),
                  new Tt(n.el, e, e.opts.controls[1], 1)
                )),
                (n.controlBars[0] = tt(
                  It(n),
                  new Tt(n.el, e, e.opts.controls[0], 0)
                )),
                (n.controlBars[2] = tt(
                  It(n),
                  new Tt(t, e, e.opts.controls[2], 2)
                ));
              var o = e.opts.bpControls;
              return (
                (n.controls = Object.keys(o)
                  .map(function (t) {
                    return { bp: Number(t), controls: o[t] };
                  })
                  .sort(function (t, e) {
                    return t.bp - e.bp;
                  })),
                n.controls.length &&
                  (tt(It(n), e.on(l.UPDATE_SIZE, n.emitAndUpdateBp)),
                  tt(It(n), e.on(l.MOUNTED, n.emitAndUpdateBp))),
                tt(
                  It(n),
                  e.on(l.PAUSE, function () {
                    e.opts.isTouch || n.show();
                  })
                ),
                tt(
                  It(n),
                  e.on(l.PLAY, function () {
                    e.opts.isTouch || n.showTransient();
                  })
                ),
                nt(It(n), e.el, "mousemove", n.showTransient),
                nt(It(n), e.el, "mouseleave", n.tryHide),
                n.showTransient(),
                n
              );
            }
            return (
              (e = i),
              (n = [
                {
                  key: "isActive",
                  get: function () {
                    return !E(this.el, Bt);
                  },
                },
                {
                  key: "filterItems",
                  value: function (t, e) {
                    if (t.length && e.length) {
                      var n = new Map();
                      return (
                        t.forEach(function (t) {
                          return n.set(t, !0);
                        }),
                        e.filter(function (t) {
                          return !n.get(t);
                        })
                      );
                    }
                  },
                },
                {
                  key: "updateItems",
                  value: function (t) {
                    var e = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      o = this.controlBars[n];
                    if (o) {
                      o.update(t || []);
                      var r = o.getItems();
                      this.controlBars.forEach(function (t, o) {
                        o !== n &&
                          (t.setItems(e.filterItems(r, t.getItems())),
                          t.updateTooltipPos());
                      });
                    }
                  },
                },
                {
                  key: "require",
                  value: function () {
                    this.latch++;
                  },
                },
                {
                  key: "release",
                  value: function () {
                    this.latch && (this.latch--, this.tryHide());
                  },
                },
              ]) && jt(e.prototype, n),
              o && jt(e, o),
              i
            );
          })(Y);
        function Ut(t) {
          return (Ut =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function Ft(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function Vt(t, e) {
          return (Vt =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function zt(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = Gt(t);
            if (e) {
              var r = Gt(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return Yt(this, n);
          };
        }
        function Yt(t, e) {
          if (e && ("object" === Ut(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Wt(t);
        }
        function Wt(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Gt(t) {
          return (Gt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function Xt(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var Zt = "-loading",
          qt = (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && Vt(t, e);
            })(i, t);
            var e,
              n,
              o,
              r = zt(i);
            function i(t, e) {
              var n;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i),
                Xt(
                  Wt(
                    (n = r.call(
                      this,
                      t,
                      e.opts.loadingEl || ".loading",
                      void 0,
                      e.opts.loadingEl
                        ? void 0
                        : (function (t, e) {
                            for (var n = [], o = 0; o < e; ++o) n.push(t);
                            return n.join("");
                          })("<i></i>", 12)
                    ))
                  ),
                  "startWaitingTime",
                  0
                ),
                Xt(Wt(n), "_checkCanplay", function () {
                  n.startWaitingTime !== n.player.currentTime &&
                    (n.hide(),
                    clearTimeout(n.showTimer),
                    n.player.off(l.TIME_UPDATE, n._checkCanplay));
                }),
                Xt(Wt(n), "show", function () {
                  _(n.player.el, Zt, c), n.player.emit(l.LOADING_SHOW);
                }),
                Xt(Wt(n), "hide", function () {
                  w(n.player.el, Zt, c), n.player.emit(l.LOADING_HIDE);
                }),
                (n.player = e),
                tt(Wt(n), e.on(l.CANPLAY, n.hide)),
                tt(
                  Wt(n),
                  e.on(l.WAITING, function () {
                    n.player.currentTime && n.tryShow();
                  })
                ),
                tt(
                  Wt(n),
                  e.on(l.STALLED, function () {
                    var t = n.player.currentTime;
                    if (t) {
                      var e = !0;
                      n.player.eachBuffer(function (n, o) {
                        if (n <= t && o > t) return (e = !1), !0;
                      }),
                        e && n.tryShow();
                    }
                  })
                ),
                n
              );
            }
            return (
              (e = i),
              (n = [
                {
                  key: "isActive",
                  get: function () {
                    return E(this.player.el, Zt, c);
                  },
                },
                {
                  key: "checkCanplay",
                  value: function () {
                    (this.startWaitingTime = this.player.currentTime),
                      this.player.off(l.TIME_UPDATE, this._checkCanplay),
                      this.player.on(l.TIME_UPDATE, this._checkCanplay);
                  },
                },
                {
                  key: "tryShow",
                  value: function () {
                    this.checkCanplay(),
                      clearTimeout(this.showTimer),
                      (this.showTimer = setTimeout(this.show, 100));
                  },
                },
              ]) && Ft(e.prototype, n),
              o && Ft(e, o),
              i
            );
          })(Y);
        function Kt(t) {
          return (Kt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function Qt(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function Jt(t, e) {
          return (Jt =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function $t(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = ne(t);
            if (e) {
              var r = ne(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return te(this, n);
          };
        }
        function te(t, e) {
          if (e && ("object" === Kt(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return ee(t);
        }
        function ee(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function ne(t) {
          return (ne = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function oe(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var re = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Jt(t, e);
          })(i, t);
          var e,
            n,
            o,
            r = $t(i);
          function i(t, e, n) {
            var o;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              oe(ee((o = r.call(this, t, ".contextmenu"))), "showed", !1),
              oe(ee(o), "hide", function () {
                g(o.el);
              }),
              (o.player = e),
              (o.items = n),
              g(o.el),
              (o.rect = new D(o.el, e)),
              o.items.forEach(function (t) {
                return t.init && t.init(e, t);
              }),
              nt(ee(o), e.el, "contextmenu", function (t) {
                if (
                  (o.hide(),
                  (!e.opts.contextMenuToggle || !o.showed) &&
                    (t.preventDefault(), t.stopPropagation(), o.renderItems()))
                ) {
                  m(o.el), o.rect.update(), o.player.rect.update();
                  var n = o.rect,
                    r = n.width,
                    i = n.height,
                    a = o.player.rect,
                    c = a.x,
                    l = a.y,
                    u = window,
                    s = u.innerWidth,
                    f = u.innerHeight,
                    p = t.clientX,
                    h = t.clientY,
                    y = p - c,
                    d = h - l;
                  p + r > s && (y = s - r),
                    h + i > f && (d = f - i),
                    o.applyStyle({
                      left: "".concat(y, "px"),
                      top: "".concat(d, "px"),
                    });
                }
                o.showed = !o.showed;
              }),
              nt(ee(o), document, "click", function () {
                (o.showed = !1), o.hide();
              }),
              o
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "getDomNodes",
                value: function () {
                  var t = this;
                  return this.items
                    .filter(function (t) {
                      return t && !t.invisible;
                    })
                    .map(function (e) {
                      var n = d(".contextmenu_item");
                      return (
                        e.show && e.show(t.player, e),
                        e.html && (n.innerHTML = e.html),
                        e.disabled && _(n, "contextmenu_item-disabled"),
                        e.checked && _(n, "contextmenu_item-checked"),
                        e.click &&
                          n.addEventListener(
                            "click",
                            function () {
                              return e.click(t.player, e);
                            },
                            !1
                          ),
                        n
                      );
                    });
                },
              },
              {
                key: "renderItems",
                value: function () {
                  var t = this.getDomNodes();
                  if (!t.length) return !1;
                  this.el.textContent = "";
                  var e = document.createDocumentFragment();
                  return (
                    t.forEach(function (t) {
                      return e.appendChild(t);
                    }),
                    this.el.appendChild(e),
                    !0
                  );
                },
              },
              {
                key: "isActive",
                get: function () {
                  return "none" !== this.el.style.display;
                },
              },
            ]) && Qt(e.prototype, n),
            o && Qt(e, o),
            i
          );
        })(Y);
        function ie(t) {
          return (ie =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function ae(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function ce(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function le(t, e, n) {
          return e && ce(t.prototype, e), n && ce(t, n), t;
        }
        function ue(t, e, n) {
          return (ue =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (t, e, n) {
                  var o = (function (t, e) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(t, e) &&
                      null !== (t = he(t));

                    );
                    return t;
                  })(t, e);
                  if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, e);
                    return r.get ? r.get.call(n) : r.value;
                  }
                })(t, e, n || t);
        }
        function se(t, e) {
          return (se =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function fe(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = he(t);
            if (e) {
              var r = he(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return pe(this, n);
          };
        }
        function pe(t, e) {
          if (e && ("object" === ie(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t);
        }
        function he(t) {
          return (he = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        var ye = (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && se(t, e);
            })(n, t);
            var e = fe(n);
            function n(t, o) {
              var r,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "center";
              return (
                ae(this, n),
                ((r = e.call(this, t, ".toast")).position = i),
                _(r.el, "toast-".concat(i)),
                (r.el.innerHTML = o),
                r
              );
            }
            return (
              le(n, [
                {
                  key: "dispose",
                  value: function () {
                    ue(he(n.prototype), "dispose", this).call(this),
                      clearTimeout(this.timer);
                  },
                },
              ]),
              n
            );
          })(Y),
          de = (function () {
            function t(e) {
              var n, o, r;
              ae(this, t),
                (r = []),
                (o = "toasts") in (n = this)
                  ? Object.defineProperty(n, o, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[o] = r),
                (this.container = e);
            }
            return (
              le(t, [
                {
                  key: "show",
                  value: function (t, e) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 3e3,
                      o = this.toasts.find(function (t) {
                        return t.position === e;
                      });
                    return (
                      o
                        ? (clearTimeout(o.timer), (o.el.innerHTML = t))
                        : ((o = new ye(this.container, t, e)),
                          this.toasts.push(o)),
                      n > 0 &&
                        (o.timer = setTimeout(this.close.bind(this, o), n)),
                      o
                    );
                  },
                },
                {
                  key: "close",
                  value: function (t) {
                    if (t)
                      return (
                        (this.toasts = this.toasts.filter(function (e) {
                          return e !== t;
                        })),
                        t.dispose()
                      );
                    this.toasts.forEach(function (t) {
                      return t.dispose();
                    }),
                      (this.toasts = []);
                  },
                },
                {
                  key: "dispose",
                  value: function () {
                    this.toasts &&
                      (this.close(),
                      (this.toasts = null),
                      (this.container = null));
                  },
                },
              ]),
              t
            );
          })();
        function be(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function ve(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var me = "-full",
          ge = (function () {
            function t(e) {
              var n = this;
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                ve(this, "prefix", this.getPrefix()),
                ve(this, "toggle", function () {
                  n.isActive ? n.exit() : n.enter();
                }),
                (this.player = e),
                nt(
                  this,
                  document,
                  "ms" === this.prefix
                    ? "MSFullscreenChange"
                    : "".concat(this.prefix, "fullscreenchange"),
                  function () {
                    var t = "";
                    n.isActive
                      ? (n.addClass(), (t = l.ENTER_FULLSCREEN))
                      : (n.removeClass(), (t = l.EXIT_FULLSCREEN)),
                      n.player.emit(t),
                      n.player.emit(l.UPDATE_SIZE);
                  }
                ),
                tt(
                  this,
                  e.on(l.UPDATE_OPTIONS, function () {
                    n.disableDblclick();
                  })
                ),
                this.setTarget(),
                this.isActive && this.addClass(),
                e.opts.isTouch || this.enableDblclick();
            }
            var e, n, o;
            return (
              (e = t),
              (n = [
                {
                  key: "getPrefix",
                  value: function () {
                    if (H(document.exitFullscreen)) return "";
                    var t = "";
                    return (
                      ["webkit", "moz", "ms"].forEach(function (e) {
                        (H(document["".concat(e, "ExitFullscreen")]) ||
                          H(document["".concat(e, "CancelFullScreen")])) &&
                          (t = e);
                      }),
                      t
                    );
                  },
                },
                {
                  key: "requestFullscreen",
                  get: function () {
                    return (
                      HTMLElement.prototype.requestFullscreen ||
                      HTMLElement.prototype.webkitRequestFullscreen ||
                      HTMLElement.prototype.mozRequestFullScreen ||
                      HTMLElement.prototype.msRequestFullscreen
                    );
                  },
                },
                {
                  key: "exitFullscreen",
                  get: function () {
                    return (
                      HTMLDocument.prototype.exitFullscreen ||
                      HTMLDocument.prototype.webkitExitFullscreen ||
                      HTMLDocument.prototype.cancelFullScreen ||
                      HTMLDocument.prototype.mozCancelFullScreen ||
                      HTMLDocument.prototype.msExitFullscreen
                    );
                  },
                },
                {
                  key: "fullscreenElement",
                  get: function () {
                    return (
                      document.fullscreenElement ||
                      document.mozFullScreenElement ||
                      document.msFullscreenElement ||
                      document.webkitFullscreenElement
                    );
                  },
                },
                {
                  key: "isActive",
                  get: function () {
                    return this.fullscreenElement === this.target;
                  },
                },
                {
                  key: "addClass",
                  value: function () {
                    _(this.player.el, me, c);
                  },
                },
                {
                  key: "removeClass",
                  value: function () {
                    w(this.player.el, me, c);
                  },
                },
                {
                  key: "enableDblclick",
                  value: function () {
                    this.player.video.addEventListener("dblclick", this.toggle);
                  },
                },
                {
                  key: "disableDblclick",
                  value: function () {
                    this.player.video.removeEventListener(
                      "dblclick",
                      this.toggle
                    );
                  },
                },
                {
                  key: "setTarget",
                  value: function (t, e) {
                    (this.target =
                      (t && s ? e : t) ||
                      (s ? this.player.video : this.player.el)),
                      this.isActive && this.enter();
                  },
                },
                {
                  key: "enter",
                  value: function () {
                    s
                      ? this.target.webkitEnterFullscreen()
                      : (this.requestFullscreen.call(this.target, {
                          navigationUI: "hide",
                        }),
                        this.player.emit(l.UPDATE_SIZE));
                  },
                },
                {
                  key: "exit",
                  value: function () {
                    return (
                      !!this.isActive &&
                      (s
                        ? this.target.webkitExitFullscreen()
                        : (this.exitFullscreen.call(document),
                          this.player.emit(l.UPDATE_SIZE)),
                      !0)
                    );
                  },
                },
                {
                  key: "dispose",
                  value: function () {
                    this.player &&
                      (this.player.off(l.ENTER_FULLSCREEN),
                      this.player.off(l.EXIT_FULLSCREEN),
                      this.disableDblclick(),
                      (this.player = null),
                      et(this));
                  },
                },
              ]) && be(e.prototype, n),
              o && be(e, o),
              t
            );
          })();
        function _e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        var we = "-web-full",
          Ee = (function () {
            function t(e) {
              var n,
                o,
                r,
                i = this;
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (r = function () {
                  i.isActive ? i.exit() : i.enter();
                }),
                (o = "toggle") in (n = this)
                  ? Object.defineProperty(n, o, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[o] = r),
                (this.player = e);
            }
            var e, n, o;
            return (
              (e = t),
              (n = [
                {
                  key: "isActive",
                  get: function () {
                    return E(this.player.el, we, c);
                  },
                },
                {
                  key: "enter",
                  value: function () {
                    _(this.player.el, we, c),
                      this.player.emit(l.WEB_ENTER_FULLSCREEN),
                      this.player.emit(l.UPDATE_SIZE);
                  },
                },
                {
                  key: "exit",
                  value: function () {
                    return (
                      !!this.isActive &&
                      (w(this.player.el, we, c),
                      this.player.emit(l.WEB_EXIT_FULLSCREEN),
                      this.player.emit(l.UPDATE_SIZE),
                      !0)
                    );
                  },
                },
                {
                  key: "dispose",
                  value: function () {
                    this.player &&
                      (this.player.off(l.WEB_ENTER_FULLSCREEN),
                      this.player.off(l.WEB_EXIT_FULLSCREEN),
                      (this.player = null));
                  },
                },
              ]) && _e(e.prototype, n),
              o && _e(e, o),
              t
            );
          })();
        function Oe(t) {
          return (Oe =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function ke(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function Pe(t, e) {
          return (Pe =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function xe(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = je(t);
            if (e) {
              var r = je(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return Te(this, n);
          };
        }
        function Te(t, e) {
          if (e && ("object" === Oe(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Se(t);
        }
        function Se(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function je(t) {
          return (je = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        var Ce = "popover-active",
          Re = "popover_panel-bottom",
          Le = (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && Pe(t, e);
            })(i, t);
            var e,
              n,
              o,
              r = xe(i);
            function i(t, e, n, o) {
              var a;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i),
                ((a = r.call(this, t, ".popover")).onHide = e),
                (a.maskEl = a.el.appendChild(d(".popover_mask"))),
                (a.panelEl = a.el.appendChild(d(".popover_panel"))),
                n && a.applyPanelStyle(n),
                o && _(a.panelEl, "popover_panel-left"),
                nt(Se(a), a.maskEl, "click", function (t) {
                  t.stopPropagation(), x(t).includes(a.panelEl) || a.hide(t);
                }),
                a
              );
            }
            return (
              (e = i),
              (n = [
                {
                  key: "resetPos",
                  value: function () {
                    w(this.panelEl, Re);
                  },
                },
                {
                  key: "setBottom",
                  value: function () {
                    _(this.panelEl, Re);
                  },
                },
                {
                  key: "applyPanelStyle",
                  value: function (t) {
                    Object.assign(this.panelEl.style, t);
                  },
                },
                {
                  key: "show",
                  value: function () {
                    _(this.el, Ce);
                  },
                },
                {
                  key: "hide",
                  value: function (t) {
                    w(this.el, Ce), this.onHide && this.onHide(t);
                  },
                },
              ]) && ke(e.prototype, n),
              o && ke(e, o),
              i
            );
          })(Y);
        function Ie(t) {
          return (Ie =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function Ae(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function De(t, e) {
          return (De =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function Be(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = Me(t);
            if (e) {
              var r = Me(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return Ne(this, n);
          };
        }
        function Ne(t, e) {
          if (e && ("object" === Ie(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return He(t);
        }
        function He(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Me(t) {
          return (Me = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        var Ue,
          Fe = "switch-active",
          Ve = (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && De(t, e);
            })(i, t);
            var e,
              n,
              o,
              r = Be(i);
            function i(t, e, n) {
              var o;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i),
                (o = r.call(this, t, ".switch")).toggle(e || !1),
                n &&
                  nt(He(o), o.el, "click", function () {
                    o.toggle(), n(E(o.el, Fe));
                  }),
                o
              );
            }
            return (
              (e = i),
              (n = [
                {
                  key: "toggle",
                  value: function (t) {
                    O(this.el, Fe, t);
                  },
                },
              ]) && Ae(e.prototype, n),
              o && Ae(e, o),
              i
            );
          })(Y);
        function ze(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e &&
              (o = o.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        function Ye(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? ze(Object(n), !0).forEach(function (e) {
                  We(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : ze(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function We(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var Ge = Object.create(null),
          Xe = "Fullscreen",
          Ze = "Exit fullscreen",
          qe = "Web fullscreen",
          Ke = "Exit web fullscreen",
          Qe = "Settings",
          Je = "Play",
          $e = "Pause",
          tn = "Mute",
          en = "Unmute",
          nn = "Normal",
          on = "Speed",
          rn = "Picture in Picture",
          an = "Loop",
          cn = "Volume",
          ln = "Airplay",
          un = "Live",
          sn = {
            defaultLang: "",
            currentLang: "",
            t: function (t, e) {
              var n;
              return (
                (null === (n = Ge[e || sn.currentLang || sn.defaultLang]) ||
                void 0 === n
                  ? void 0
                  : n[t]) || t
              );
            },
            add: function (t, e) {
              (Ge[t.toLowerCase()] = Ye(Ye({}, Ge[t.toLowerCase()]), e)),
                sn.fallback();
            },
            fallback: function () {
              Object.keys(Ge).forEach(function (t) {
                Ge[t.split("-")[0]] = Ge[t];
              });
            },
            setCurrentLang: function (t) {
              (this.currentLang =
                t || navigator.language || navigator.userLanguage),
                this.currentLang &&
                  (this.currentLang = this.currentLang.toLowerCase());
            },
            setDefaultLang: function (t) {
              this.defaultLang = (t || "").toLowerCase();
            },
          };
        sn.add(
          "zh-cn",
          (We((Ue = {}), Xe, "全屏"),
          We(Ue, Ze, "取消全屏"),
          We(Ue, qe, "网页全屏"),
          We(Ue, Ke, "退出网页全屏"),
          We(Ue, Qe, "设置"),
          We(Ue, Je, "播放"),
          We(Ue, $e, "暂停"),
          We(Ue, tn, "静音"),
          We(Ue, en, "取消静音"),
          We(Ue, nn, "正常"),
          We(Ue, on, "播放速度"),
          We(Ue, rn, "画中画"),
          We(Ue, an, "循环播放"),
          We(Ue, cn, "音量"),
          We(Ue, ln, "隔空播放"),
          We(Ue, un, "直播"),
          Ue)
        ),
          u && sn.setCurrentLang();
        function fn(t) {
          return function (e) {
            var n = P("icon", t);
            return e && _(n, e), n;
          };
        }
        var pn = Object.create(null);
        function hn(t, e) {
          pn[t] = e;
        }
        function yn(t) {
          return (yn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function dn(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function bn(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function vn(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function mn(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && gn(t, e);
        }
        function gn(t, e) {
          return (gn =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function _n(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = On(t);
            if (e) {
              var r = On(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return wn(this, n);
          };
        }
        function wn(t, e) {
          if (e && ("object" === yn(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return En(t);
        }
        function En(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function On(t) {
          return (On = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        Object.defineProperty(pn, "register", { value: hn }),
          hn("play", fn("M6 2.914v18.172L20.279 12 6 2.914z")),
          hn(
            "pause",
            fn("M14.333 20.133H19V3.8h-4.667M5 20.133h4.667V3.8H5v16.333z")
          ),
          hn(
            "volume",
            fn(
              "M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
            )
          ),
          hn(
            "muted",
            fn(
              "M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"
            )
          ),
          hn(
            "cog",
            fn(
              "M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"
            )
          ),
          hn(
            "webEnterFullscreen",
            fn(
              "M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"
            )
          ),
          hn(
            "webExitFullscreen",
            fn(
              "M19.5,3.09L15,7.59V4H13V11H20V9H16.41L20.91,4.5L19.5,3.09M4,13V15H7.59L3.09,19.5L4.5,20.91L9,16.41V20H11V13H4Z"
            )
          ),
          hn(
            "enterFullscreen",
            fn(
              "M3 3h6.429v2.571H5.57V9.43H3V3m11.571 0H21v6.429h-2.571V5.57H14.57V3m3.858 11.571H21V21h-6.429v-2.571h3.858V14.57m-9 3.858V21H3v-6.429h2.571v3.858H9.43z"
            )
          ),
          hn(
            "exitFullscreen",
            fn(
              "M14.571 14.571H21v2.572h-3.857V21H14.57v-6.429M3 14.571h6.429V21H6.857v-3.857H3V14.57M6.857 3H9.43v6.429H3V6.857h3.857V3M21 6.857V9.43h-6.429V3h2.572v3.857H21z"
            )
          ),
          hn(
            "airplay",
            fn(
              "M6 22h12l-6-6m9-13H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H3V5h18v12h-4v2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
            )
          );
        var kn = "control_setting-active",
          Pn = "control_setting_option-active",
          xn = (function (t) {
            mn(i, t);
            var e,
              n,
              o,
              r = _n(i);
            function i() {
              var t;
              vn(this, i);
              for (
                var e = arguments.length, n = new Array(e), o = 0;
                o < e;
                o++
              )
                n[o] = arguments[o];
              return (
                bn(
                  En((t = r.call.apply(r, [this].concat(n)))),
                  "id",
                  "settings"
                ),
                bn(En(t), "tip", sn.t(Qe)),
                bn(En(t), "onItemClick", function (e) {
                  return function () {
                    "switch" === e.type
                      ? ((e.checked = !e.checked),
                        e._switch.toggle(e.checked),
                        e.change && e.change(e.checked, t.player, e))
                      : (t.renderOptions(), t.showOptionPage(e._optionEl));
                  };
                }),
                bn(En(t), "onOptionClick", function (e, n) {
                  return function () {
                    e.value !== n.value &&
                      ((e.value = n.value),
                      e.change && e.change(n.value, t.player, e)),
                      t.renderHome(),
                      t.showHomePage(e._optionEl);
                  };
                }),
                bn(En(t), "back", function (e) {
                  return function () {
                    t.showHomePage(e._optionEl);
                  };
                }),
                bn(En(t), "show", function (e) {
                  (e && x(e).includes(t.popover.el)) ||
                    (t.tooltip.hide(),
                    t.renderHome(),
                    t.popover.show(),
                    (t.homeEl.style.display = ""),
                    _(t.el, kn));
                }),
                bn(En(t), "hide", function (e) {
                  e && e.stopPropagation(),
                    t.tooltip.show(),
                    w(t.el, kn),
                    t.currentOptionEl &&
                      setTimeout(function () {
                        return t.showHomePage(t.currentOptionEl);
                      }, 200);
                }),
                t
              );
            }
            return (
              (e = i),
              (n = [
                {
                  key: "init",
                  value: function (t, e, n) {
                    var o = this;
                    (this.player = t),
                      (this.tooltip = n),
                      _(this.el, "control_setting"),
                      (this.items = t.__settingItems),
                      this.el.appendChild(pn.cog()),
                      (this.popover = new Le(this.el, this.hide, {
                        willChange: "width, height",
                      })),
                      (this.homeEl = this.popover.panelEl.appendChild(d())),
                      (this.probeEl = this.el.appendChild(d()));
                    var r = this.probeEl.style;
                    (r.position = "absolute"),
                      (r.zIndex = "-9"),
                      (r.width = "2px"),
                      (r.height = "1px"),
                      (r.opacity = "0"),
                      this.setPos(e),
                      nt(this, this.el, "click", this.show),
                      tt(
                        this,
                        t.on(l.MOUNTED, function () {
                          return o.showHomePage();
                        })
                      ),
                      this.items.forEach(function (e) {
                        return e.init && e.init(t, e);
                      }),
                      this.renderHome();
                  },
                },
                {
                  key: "update",
                  value: function (t) {
                    this.setPos(t);
                  },
                },
                {
                  key: "setPos",
                  value: function (t) {
                    this.popover.resetPos(),
                      2 === t && this.popover.setBottom();
                  },
                },
                {
                  key: "renderHome",
                  value: function () {
                    var t = this;
                    this.items.forEach(function (e) {
                      var n =
                        e._switch || e._selectedEl || e._optionEl
                          ? null
                          : d(".control_setting_item");
                      if (
                        (n &&
                          (n.appendChild(d(void 0, void 0, e.html)),
                          "switch" !== e.type && n.appendChild(d(".spacer"))),
                        "switch" === e.type)
                      )
                        e._switch || (e._switch = new Ve(n, e.checked));
                      else {
                        if (!e.options || !e.options.length) return;
                        e._selectedEl ||
                          (_(n, "control_setting_item-select"),
                          (e._selectedEl = n.appendChild(d())));
                        var o = e.options.find(function (t) {
                          return t.value === e.value;
                        });
                        if (!o) return;
                        e._selectedEl.innerHTML =
                          o.selectedHtml || o.html || "";
                      }
                      e._optionEl && (e._optionEl.style.display = "none"),
                        n &&
                          (n.addEventListener("click", t.onItemClick(e)),
                          t.homeEl.appendChild(n));
                    });
                  },
                },
                {
                  key: "renderOptions",
                  value: function () {
                    var t = this;
                    this.items.forEach(function (e) {
                      if ("switch" !== e.type) {
                        if (!e._optionEl) {
                          e._optionEl = t.popover.panelEl.appendChild(d());
                          var n = e._optionEl.appendChild(
                            d(".control_setting_item.control_setting_back")
                          );
                          (n.innerHTML = e.html || ""),
                            n.addEventListener("click", t.back(e));
                        }
                        !e._optionEls &&
                          e.options &&
                          (e._optionEls = e.options.map(function (n) {
                            var o = e._optionEl.appendChild(
                              d(".control_setting_option", void 0, n.html)
                            );
                            return (
                              o.addEventListener(
                                "click",
                                t.onOptionClick(e, n)
                              ),
                              o
                            );
                          })),
                          e._optionEls &&
                            e._optionEls.forEach(function (t, n) {
                              w(t, Pn),
                                e.value === e.options[n].value && _(t, Pn);
                            }),
                          (e._optionEl.style.display = "none");
                      }
                    });
                  },
                },
                {
                  key: "showOptionPage",
                  value: function (t) {
                    (this.homeEl.style.display = "none"),
                      (t.style.display = "");
                    var e = C(t),
                      n = e.width,
                      o = e.height,
                      r = this.probeEl.getBoundingClientRect(),
                      i = r.width,
                      a = r.height > i;
                    this.popover.applyPanelStyle({
                      width: "".concat(a ? o : n, "px"),
                      height: "".concat(a ? n : o, "px"),
                    }),
                      (this.currentOptionEl = t);
                  },
                },
                {
                  key: "showHomePage",
                  value: function (t) {
                    t && (t.style.display = "none"),
                      (this.homeEl.style.display = "");
                    var e = C(this.homeEl),
                      n = e.width,
                      o = e.height,
                      r = this.probeEl.getBoundingClientRect(),
                      i = r.width,
                      a = r.height > i;
                    this.popover.applyPanelStyle({
                      width: "".concat(a ? o : n, "px"),
                      height: "".concat(a ? n : o, "px"),
                    });
                  },
                },
              ]) && dn(e.prototype, n),
              o && dn(e, o),
              i
            );
          })(Y);
        function Tn(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        var Sn = ["input", "textarea", "select"],
          jn = (function () {
            function t(e, n) {
              var o,
                r,
                i,
                a = this;
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (i = function (t) {
                  if (!(t.altKey || t.ctrlKey || t.metaKey || t.shiftKey)) {
                    var e = document.activeElement;
                    if (e) {
                      var n = e.tagName.toLowerCase(),
                        o = e.getAttribute("contenteditable");
                      if (Sn.indexOf(n) > -1 || o || "" === o) return;
                    }
                    var r = t.keyCode ? t.keyCode : t.which;
                    if (
                      "number" == typeof (i = r) ||
                      "[object Number]" === B.call(i)
                    ) {
                      var i,
                        c = !1;
                      a.map[r] &&
                        (a.map[r](a.player),
                        (c = !0),
                        a.player.control.showTransient()),
                        c && (t.preventDefault(), t.stopPropagation());
                    }
                  }
                }),
                (r = "onKeyDown") in (o = this)
                  ? Object.defineProperty(o, r, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (o[r] = i),
                (this.player = e),
                (this.map = Object.create(null));
              var c = function (t) {
                return t.toast.show(
                  ""
                    .concat(sn.t(cn), " ")
                    .concat(Math.round(100 * t.volume), "%"),
                  "left-bottom",
                  500
                );
              };
              this.register(27, function (t) {
                t.fullscreen.exit() || t.webFullscreen.exit();
              }),
                this.register(32, function (t) {
                  return t.toggle();
                }),
                this.register(37, function (t) {
                  t.rewind(),
                    t.toast.show(
                      "- ".concat(t.opts.seekStep, "s"),
                      "left-bottom",
                      500
                    );
                }),
                this.register(38, function (t) {
                  t.incVolume(), c(t);
                }),
                this.register(39, function (t) {
                  t.forward(),
                    t.toast.show(
                      "+ ".concat(t.opts.seekStep, "s"),
                      "left-bottom",
                      500
                    );
                }),
                this.register(40, function (t) {
                  t.decVolume(), c(t);
                }),
                n && this.enable();
            }
            var e, n, o;
            return (
              (e = t),
              (n = [
                {
                  key: "register",
                  value: function (t, e) {
                    this.map[t] = e;
                  },
                },
                {
                  key: "unregister",
                  value: function (t) {
                    return delete this.map[t];
                  },
                },
                {
                  key: "dispose",
                  value: function () {
                    this.map && (et(this), (this.map = null));
                  },
                },
                {
                  key: "enable",
                  value: function () {
                    this.disable(),
                      nt(this, this.player.el, "keydown", this.onKeyDown);
                  },
                },
                {
                  key: "disable",
                  value: function () {
                    et(this);
                  },
                },
              ]) && Tn(e.prototype, n),
              o && Tn(e, o),
              t
            );
          })();
        function Cn(t) {
          return (Cn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function Rn(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function Ln(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function In(t, e) {
          return (In =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function An(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = Nn(t);
            if (e) {
              var r = Nn(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return Dn(this, n);
          };
        }
        function Dn(t, e) {
          if (e && ("object" === Cn(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Bn(t);
        }
        function Bn(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Nn(t) {
          return (Nn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function Hn(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var Mn = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && In(t, e);
          })(i, t);
          var e,
            n,
            o,
            r = An(i);
          function i() {
            var t;
            Rn(this, i);
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
              n[o] = arguments[o];
            return (
              Hn(Bn((t = r.call.apply(r, [this].concat(n)))), "id", "play"),
              Hn(Bn(t), "onPlay", function () {
                m(t.pauseIcon), g(t.playIcon), (t.tooltip.html = sn.t($e));
              }),
              Hn(Bn(t), "onPause", function () {
                m(t.playIcon), g(t.pauseIcon), (t.tooltip.html = sn.t(Je));
              }),
              t
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "init",
                value: function (t, e, n) {
                  (this.tooltip = n),
                    (this.playIcon = this.el.appendChild(pn.play())),
                    (this.pauseIcon = this.el.appendChild(pn.pause())),
                    t.paused ? this.onPause() : this.onPlay(),
                    tt(this, t.on(l.PLAY, this.onPlay)),
                    tt(this, t.on(l.PAUSE, this.onPause)),
                    nt(this, this.el, "click", t.toggle);
                },
              },
            ]) && Ln(e.prototype, n),
            o && Ln(e, o),
            i
          );
        })(Y);
        function Un(t) {
          return (Un =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function Fn(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function Vn(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function zn(t, e) {
          return (zn =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function Yn(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = Xn(t);
            if (e) {
              var r = Xn(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return Wn(this, n);
          };
        }
        function Wn(t, e) {
          if (e && ("object" === Un(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Gn(t);
        }
        function Gn(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Xn(t) {
          return (Xn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function Zn(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var qn = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && zn(t, e);
          })(i, t);
          var e,
            n,
            o,
            r = Yn(i);
          function i() {
            var t;
            Fn(this, i);
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
              n[o] = arguments[o];
            return (
              Zn(Gn((t = r.call.apply(r, [this].concat(n)))), "id", "volume"),
              Zn(Gn(t), "onDragStart", function (e) {
                t.onDragging(e);
              }),
              Zn(Gn(t), "onDragging", function (e) {
                t.rect.update(),
                  (t.player.volume = J(
                    (t.isVer
                      ? t.rect.height - e.clientY + t.rect.y
                      : e.clientX - t.rect.x) /
                      (t.isVer ? t.rect.height : t.rect.width)
                  ));
              }),
              Zn(Gn(t), "onVolumeChange", function () {
                t.player.muted ? t.mute() : t.unmute(),
                  (t.bar.style.transform = "scale"
                    .concat(t.isVer ? "Y" : "X", "(")
                    .concat(t.player.volume, ")"));
              }),
              t
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "init",
                value: function (t, e, n) {
                  (this.player = t),
                    (this.tooltip = n),
                    (this.isVer = t.opts.volumeVertical),
                    _(this.el, "control_volume"),
                    _(
                      this.el,
                      "control_volume-".concat(this.isVer ? "ver" : "hor")
                    ),
                    this.isVer && n.hide(),
                    (this.volumeIcon = this.el.appendChild(pn.volume())),
                    (this.mutedIcon = this.el.appendChild(pn.muted()));
                  var o = this.el.appendChild(d(".control_volume_bars")),
                    r = t.opts.volumeBarLength;
                  (o.style[this.isVer ? "height" : "width"] = N(r)
                    ? r
                    : "".concat(r, "px")),
                    (this.bar = o.appendChild(d(".control_volume_bar"))),
                    (this.rect = new D(o, t)),
                    tt(this, t.on(l.VOLUME_CHANGE, this.onVolumeChange)),
                    tt(this, new I(o, this.onDragStart, this.onDragging)),
                    nt(this, this.el, "click", function (e) {
                      x(e).includes(o) || t.toggleVolume();
                    }),
                    t.opts.isTouch &&
                      nt(this, o, "touchstart", function (t) {
                        return t.preventDefault();
                      }),
                    this.onVolumeChange();
                },
              },
              {
                key: "mute",
                value: function () {
                  m(this.mutedIcon),
                    g(this.volumeIcon),
                    (this.tooltip.html = sn.t(en));
                },
              },
              {
                key: "unmute",
                value: function () {
                  m(this.volumeIcon),
                    g(this.mutedIcon),
                    (this.tooltip.html = sn.t(tn));
                },
              },
            ]) && Vn(e.prototype, n),
            o && Vn(e, o),
            i
          );
        })(Y);
        function Kn(t) {
          return (Kn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function Qn(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function Jn(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function $n(t, e) {
          return ($n =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function to(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = oo(t);
            if (e) {
              var r = oo(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return eo(this, n);
          };
        }
        function eo(t, e) {
          if (e && ("object" === Kn(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return no(t);
        }
        function no(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function oo(t) {
          return (oo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function ro(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var io = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && $n(t, e);
          })(i, t);
          var e,
            n,
            o,
            r = to(i);
          function i() {
            var t;
            Qn(this, i);
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
              n[o] = arguments[o];
            return (
              ro(no((t = r.call.apply(r, [this].concat(n)))), "id", "time"), t
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "init",
                value: function (t) {
                  var e = this;
                  _(this.el, "control_time"),
                    t.opts.live
                      ? (_(this.el, "control_time-live"),
                        (this.el.textContent = sn.t(un)))
                      : ((this.playedEl = this.el.appendChild(d("span"))),
                        (this.totalEl = this.el.appendChild(d("span"))),
                        (this.played = t.currentTime),
                        (this.total = t.duration),
                        tt(
                          this,
                          t.on(l.TIME_UPDATE, function () {
                            e.played = t.currentTime;
                          })
                        ),
                        tt(
                          this,
                          t.on(l.DURATION_CHANGE, function () {
                            e.total = t.duration;
                          })
                        ));
                },
              },
              {
                key: "played",
                set: function (t) {
                  this.playedEl.textContent = it(t);
                },
              },
              {
                key: "total",
                set: function (t) {
                  this.totalEl.textContent = it(t);
                },
              },
            ]) && Jn(e.prototype, n),
            o && Jn(e, o),
            i
          );
        })(Y);
        function ao(t) {
          return (ao =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function co(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function lo(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function uo(t, e) {
          return (uo =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function so(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = ho(t);
            if (e) {
              var r = ho(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return fo(this, n);
          };
        }
        function fo(t, e) {
          if (e && ("object" === ao(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return po(t);
        }
        function po(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function ho(t) {
          return (ho = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function yo(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var bo = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && uo(t, e);
          })(i, t);
          var e,
            n,
            o,
            r = so(i);
          function i() {
            var t;
            co(this, i);
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
              n[o] = arguments[o];
            return (
              yo(
                po((t = r.call.apply(r, [this].concat(n)))),
                "id",
                "web-fullscreen"
              ),
              yo(po(t), "enter", function () {
                m(t.exitIcon), g(t.enterIcon), (t.tooltip.html = sn.t(Ke));
              }),
              yo(po(t), "exit", function () {
                g(t.exitIcon), m(t.enterIcon), (t.tooltip.html = sn.t(qe));
              }),
              t
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "init",
                value: function (t, e, n) {
                  (this.tooltip = n),
                    (this.enterIcon = this.el.appendChild(
                      pn.webEnterFullscreen()
                    )),
                    (this.exitIcon = this.el.appendChild(
                      pn.webExitFullscreen()
                    )),
                    t.webFullscreen.isActive ? this.enter() : this.exit(),
                    tt(this, t.on(l.WEB_ENTER_FULLSCREEN, this.enter)),
                    tt(this, t.on(l.WEB_EXIT_FULLSCREEN, this.exit)),
                    nt(this, this.el, "click", t.webFullscreen.toggle);
                },
              },
            ]) && lo(e.prototype, n),
            o && lo(e, o),
            i
          );
        })(Y);
        function vo(t) {
          return (vo =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function mo(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function go(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function _o(t, e) {
          return (_o =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function wo(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = ko(t);
            if (e) {
              var r = ko(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return Eo(this, n);
          };
        }
        function Eo(t, e) {
          if (e && ("object" === vo(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Oo(t);
        }
        function Oo(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function ko(t) {
          return (ko = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function Po(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var xo = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && _o(t, e);
          })(i, t);
          var e,
            n,
            o,
            r = wo(i);
          function i() {
            var t;
            mo(this, i);
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
              n[o] = arguments[o];
            return (
              Po(
                Oo((t = r.call.apply(r, [this].concat(n)))),
                "id",
                "fullscreen"
              ),
              Po(Oo(t), "enter", function () {
                m(t.exitIcon), g(t.enterIcon), (t.tooltip.html = sn.t(Ze));
              }),
              Po(Oo(t), "exit", function () {
                g(t.exitIcon), m(t.enterIcon), (t.tooltip.html = sn.t(Xe));
              }),
              t
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "init",
                value: function (t, e, n) {
                  (this.tooltip = n),
                    (this.exitIcon = this.el.appendChild(pn.exitFullscreen())),
                    (this.enterIcon = this.el.appendChild(
                      pn.enterFullscreen()
                    )),
                    t.fullscreen.isActive ? this.enter() : this.exit(),
                    tt(this, t.on(l.ENTER_FULLSCREEN, this.enter)),
                    tt(this, t.on(l.EXIT_FULLSCREEN, this.exit)),
                    nt(this, this.el, "click", t.fullscreen.toggle);
                },
              },
            ]) && go(e.prototype, n),
            o && go(e, o),
            i
          );
        })(Y);
        function To(t) {
          return (To =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function So(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function jo(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function Co(t, e) {
          return (Co =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function Ro(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = Ao(t);
            if (e) {
              var r = Ao(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return Lo(this, n);
          };
        }
        function Lo(t, e) {
          if (e && ("object" === To(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Io(t);
        }
        function Io(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Ao(t) {
          return (Ao = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function Do(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var Bo = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Co(t, e);
          })(i, t);
          var e,
            n,
            o,
            r = Ro(i);
          function i() {
            var t;
            So(this, i);
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
              n[o] = arguments[o];
            return (
              Do(Io((t = r.call.apply(r, [this].concat(n)))), "id", "airplay"),
              Do(Io(t), "tip", sn.t(ln)),
              t
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "init",
                value: function (t) {
                  var e = this;
                  this.isSupport()
                    ? (this.el.appendChild(pn.airplay()),
                      nt(
                        this,
                        t.video,
                        "webkitplaybacktargetavailabilitychanged",
                        function (t) {
                          "available" === t.availability ? m(e.el) : g(e.el);
                        }
                      ),
                      nt(this, this.el, "click", function () {
                        var e = t.video;
                        e &&
                          e.webkitShowPlaybackTargetPicker &&
                          e.webkitShowPlaybackTargetPicker();
                      }))
                    : g(this.el);
                },
              },
              {
                key: "isSupport",
                value: function () {
                  return !!window.WebKitPlaybackTargetAvailabilityEvent;
                },
              },
            ]) && jo(e.prototype, n),
            o && jo(e, o),
            i
          );
        })(Y);
        function No(t) {
          return (No =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function Ho(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function Mo(t, e) {
          return (Mo =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function Uo(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = zo(t);
            if (e) {
              var r = zo(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return Fo(this, n);
          };
        }
        function Fo(t, e) {
          if (e && ("object" === No(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Vo(t);
        }
        function Vo(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function zo(t) {
          return (zo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        var Yo = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Mo(t, e);
          })(i, t);
          var e,
            n,
            o,
            r = Uo(i);
          function i(t, e) {
            var n, o, a, c;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              (n = r.call(this, t, ".thumb")),
              (o = Vo(n)),
              (c = {
                startSecond: 0,
                gapSecond: 10,
                col: 5,
                row: 5,
                width: 160,
                height: 90,
                images: [],
              }),
              (a = "opts") in o
                ? Object.defineProperty(o, a, {
                    value: c,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (o[a] = c),
              n.updateOptions(e),
              (n.timeEl = n.el.appendChild(d(".thumb_time"))),
              (n.timeEl.textContent = "0:00"),
              (n.rect = tt(Vo(n), new D(n.el))),
              n
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "getCurrentThumb",
                value: function (t) {
                  var e =
                      0 |
                      Math.max(t / this.opts.gapSecond - this.ssGapRatio, 0),
                    n = this.opts.images[(e / this.thumbImgPrePic) | 0];
                  if (n)
                    return {
                      url: n,
                      x: (e % this.opts.col) * this.opts.width,
                      y:
                        ~~((e % this.thumbImgPrePic) / this.opts.col) *
                        this.opts.height,
                    };
                },
              },
              {
                key: "updateOptions",
                value: function (t) {
                  Object.assign(this.opts, t),
                    this.opts.images.length &&
                      (this.imgEl ||
                        (this.imgEl = this.el.appendChild(d(".thumb_img"))),
                      (this.imgEl.style.width = "".concat(
                        this.opts.width,
                        "px"
                      )),
                      (this.imgEl.style.height = "".concat(
                        this.opts.height,
                        "px"
                      )),
                      (this.thumbImgPrePic = this.opts.col * this.opts.row),
                      (this.ssGapRatio =
                        this.opts.startSecond / this.opts.gapSecond));
                },
              },
              {
                key: "update",
                value: function (t, e, n) {
                  if (((this.timeEl.textContent = it(t)), this.imgEl)) {
                    var o = this.getCurrentThumb(t);
                    o &&
                      ((this.imgEl.style.backgroundImage = "url(".concat(
                        o.url,
                        ")"
                      )),
                      (this.imgEl.style.backgroundPosition = "-"
                        .concat(o.x, "px -")
                        .concat(o.y, "px")));
                  } else this.rect.update();
                  var r = this.rect.width / 2;
                  this.applyStyle({
                    left: "".concat(J(e - r, 0, Math.max(0, n - 2 * r)), "px"),
                  });
                },
              },
            ]) && Ho(e.prototype, n),
            o && Ho(e, o),
            i
          );
        })(Y);
        function Wo(t) {
          return (Wo =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function Go(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function Xo(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function Zo(t, e) {
          return (Zo =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function qo(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = Jo(t);
            if (e) {
              var r = Jo(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return Ko(this, n);
          };
        }
        function Ko(t, e) {
          if (e && ("object" === Wo(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Qo(t);
        }
        function Qo(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Jo(t) {
          return (Jo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function $o(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var tr = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Zo(t, e);
          })(i, t);
          var e,
            n,
            o,
            r = qo(i);
          function i() {
            var t;
            Go(this, i);
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
              n[o] = arguments[o];
            return (
              $o(Qo((t = r.call.apply(r, [this].concat(n)))), "id", "progress"),
              $o(Qo(t), "dragging", !1),
              $o(Qo(t), "onDragStart", function (e) {
                (t.dragging = !0), t.rect.update(), t.onDragging(e);
              }),
              $o(Qo(t), "onDragging", function (e) {
                var n = t.rect.isHeightGtWidth,
                  o = n ? e.clientY - t.rect.y : e.clientX - t.rect.x;
                t.setPlayedBarLength(o / (n ? t.rect.height : t.rect.width)),
                  t.updateThumbnail(e);
              }),
              $o(Qo(t), "onDragEnd", function (e) {
                t.dragging = !1;
                var n = t.rect.isHeightGtWidth;
                t.player.seek(t.getCurrentTime(n ? e.clientY : e.clientX, n));
              }),
              $o(Qo(t), "updateBufBar", function () {
                if (!t.player.buffered.length) return t.setBufBarLength(0);
                var e = t.player.currentTime,
                  n = 0;
                t.player.eachBuffer(function (o, r) {
                  if (o <= e && r >= e) return (n = r / t.player.duration), !0;
                }),
                  t.setBufBarLength(n);
              }),
              $o(Qo(t), "updatePlayedBar", function () {
                t.dragging ||
                  t.setPlayedBarLength(
                    t.player.currentTime / t.player.duration
                  );
              }),
              t
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "init",
                value: function (t) {
                  var e = this;
                  (this.player = t),
                    _(this.el, "progress"),
                    (this.bars = this.el.appendChild(d(".progress_bars"))),
                    (this.bufBar = this.bars.appendChild(d(".progress_buf"))),
                    (this.playedBar = this.bars.appendChild(
                      d(".progress_played")
                    )),
                    (this.dot = this.el.appendChild(d(".progress_dot"))),
                    this.dot.appendChild(
                      t.opts.progressDot || d(".progress_dot_inner")
                    ),
                    (this.rect = tt(this, new D(this.bars, t))),
                    (this.thumbnail = tt(
                      this,
                      new Yo(this.el, t.opts.thumbnail)
                    )),
                    tt(
                      this,
                      new I(
                        this.el,
                        this.onDragStart,
                        this.onDragging,
                        this.onDragEnd
                      )
                    ),
                    tt(this, t.on(l.TIME_UPDATE, this.updatePlayedBar)),
                    tt(this, t.on(l.PROGRESS, this.updateBufBar)),
                    tt(
                      this,
                      t.on(l.UPDATE_OPTIONS, function () {
                        return e.thumbnail.updateOptions(t.opts.thumbnail);
                      })
                    ),
                    tt(
                      this,
                      t.on(l.UPDATE_SIZE, function () {
                        t.playing || e.resetPlayedBar();
                      })
                    ),
                    tt(
                      this,
                      t.on(l.CONTROL_ITEM_UPDATE, function () {
                        e.rect.update(), e.resetPlayedBar();
                      })
                    ),
                    nt(
                      this,
                      this.el,
                      "mousemove",
                      ot(function (t) {
                        return e.updateThumbnail(t);
                      }),
                      !0
                    ),
                    t.opts.isTouch &&
                      nt(this, this.el, "touchstart", function (t) {
                        return t.preventDefault();
                      });
                },
              },
              {
                key: "resetPlayedBar",
                value: function () {
                  this.setPlayedBarLength(
                    this.player.currentTime / this.player.duration
                  );
                },
              },
              {
                key: "setPlayedBarLength",
                value: function (t) {
                  this.playedBar.style.transform = "scaleX(".concat(J(t), ")");
                  var e = this.rect.isHeightGtWidth
                    ? this.rect.height
                    : this.rect.width;
                  this.dot.style.transform = "translate(".concat(
                    J(t * e, 0, e),
                    "px, -50%)"
                  );
                },
              },
              {
                key: "setBufBarLength",
                value: function (t) {
                  this.bufBar.style.transform = "scaleX(".concat(J(t), ")");
                },
              },
              {
                key: "updateThumbnail",
                value: function (t) {
                  this.rect.update();
                  var e = this.rect.isHeightGtWidth,
                    n = e ? t.clientY : t.clientX;
                  this.thumbnail.update(
                    this.getCurrentTime(n, e),
                    n - (e ? this.rect.y : this.rect.x),
                    e ? this.rect.height : this.rect.width
                  );
                },
              },
              {
                key: "getCurrentTime",
                value: function (t, e) {
                  return (
                    J(
                      (t - (e ? this.rect.y : this.rect.x)) /
                        (e ? this.rect.height : this.rect.width)
                    ) * this.player.duration
                  );
                },
              },
            ]) && Xo(e.prototype, n),
            o && Xo(e, o),
            i
          );
        })(Y);
        function er(t, e, n) {
          var o = function (e) {
            return t.emit(n, e);
          };
          return (
            t.video.addEventListener(e, o),
            {
              dispose: function () {
                return t.video.removeEventListener(e, o);
              },
            }
          );
        }
        function nr(t, e, n) {
          var o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : t.video,
            r =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : function (e) {
                    t.emit(n, e);
                  };
          return (
            o.addEventListener(e, ot(r)),
            {
              dispose: function () {
                return o.removeEventListener(e, r);
              },
            }
          );
        }
        function or(t, e) {
          var n = t.style;
          e.themeColor && n.setProperty("--theme-color", e.themeColor),
            e.progressBg && n.setProperty("--progress-bg", e.progressBg),
            e.posterBgColor &&
              n.setProperty("--poster-bg-color", e.posterBgColor),
            e.volumeProgressBg &&
              n.setProperty("--volume-progress-bg", e.volumeProgressBg);
        }
        function rr(t, e) {
          if (e && ((t.innerHTML = ""), e.length)) {
            var n = document.createDocumentFragment();
            e.forEach(function (t) {
              var e = document.createElement("source");
              Object.keys(t).forEach(function (n) {
                e.setAttribute(n, t[n]);
              }),
                n.appendChild(e);
            }),
              t.appendChild(n);
          }
        }
        var ir = "nplayer:volume";
        function ar(t) {
          t.registerContextMenuItem({
            id: "loop",
            html: sn.t(an),
            show: function (t, e) {
              e.checked = t.loop;
            },
            click: function (t, e) {
              e.checked = t.loop = !t.loop;
            },
          }),
            t.registerContextMenuItem({
              id: "pip",
              html: sn.t(rn),
              init: function () {
                this.invisible = !("pictureInPictureEnabled" in document);
              },
              click: function (t) {
                t.loaded &&
                  (document.pictureInPictureElement !== t.video
                    ? t.video.requestPictureInPicture()
                    : document.exitPictureInPicture());
              },
            }),
            t.registerContextMenuItem({
              id: "version",
              html: "NPlayer v".concat("1.0.13"),
              disabled: !0,
            }),
            t.registerSettingItem({
              id: "speed",
              html: sn.t(on),
              type: "select",
              value: 1,
              options: [
                { value: 0.25, html: "0.25" },
                { value: 0.5, html: "0.5" },
                { value: 1, html: sn.t(nn) },
                { value: 1.5, html: "1.5" },
                { value: 2, html: "2" },
              ],
              init: function (t, e) {
                if (e.options)
                  for (
                    var n = t.playbackRate, o = 0, r = e.options.length;
                    o < r;
                    o++
                  )
                    if (e.options[o].value === n) return void (e.value = n);
                t.playbackRate = 1;
              },
              change: function (t, e) {
                this.value = e.playbackRate = t;
              },
            }),
            t.registerControlItem(new Mn()),
            t.registerControlItem(new qn()),
            t.registerControlItem(new io()),
            t.registerControlItem(new xn()),
            t.registerControlItem(new bo()),
            t.registerControlItem(new xo()),
            t.registerControlItem(new Bo()),
            t.registerControlItem(new tr());
        }
        function cr(t) {
          var e = function (e) {
            return tt(t, e);
          };
          if (
            (e(er(t, "durationchange", l.DURATION_CHANGE)),
            e(er(t, "ratechange", l.RATE_CHANGE)),
            e(er(t, "play", l.PLAY)),
            e(er(t, "pause", l.PAUSE)),
            e(er(t, "ended", l.ENDED)),
            e(er(t, "waiting", l.WAITING)),
            e(er(t, "stalled", l.STALLED)),
            e(er(t, "canplay", l.CANPLAY)),
            e(er(t, "loadedmetadata", l.LOADED_METADATA)),
            e(er(t, "error", l.ERROR)),
            e(er(t, "seeked", l.SEEKED)),
            e(er(t, "enterpictureinpicture", l.ENTER_PIP)),
            e(er(t, "leavepictureinpicture", l.EXIT_PIP)),
            e(nr(t, "timeupdate", l.TIME_UPDATE)),
            e(nr(t, "volumechange", l.VOLUME_CHANGE)),
            e(nr(t, "progress", l.PROGRESS)),
            e(
              nr(t, "resize", l.UPDATE_SIZE, window, function (e) {
                return (function (t, e) {
                  t && t.rect.changed && t.emit(l.UPDATE_SIZE, e);
                })(t, e);
              })
            ),
            window.ResizeObserver)
          ) {
            var n = new ResizeObserver(
              ot(function () {
                return t.emit(l.UPDATE_SIZE);
              })
            );
            n.observe(t.el),
              e({
                dispose: function () {
                  return n.disconnect();
                },
              });
          }
          t.on(l.LOADED_METADATA, function () {
            t.video.paused ? t.emit(l.PAUSE) : t.emit(l.PLAY);
          });
        }
        function lr(t) {
          return (lr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function ur(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function sr(t, e) {
          return (sr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function fr(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = yr(t);
            if (e) {
              var r = yr(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return pr(this, n);
          };
        }
        function pr(t, e) {
          if (e && ("object" === lr(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return hr(t);
        }
        function hr(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function yr(t) {
          return (yr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        var dr = "checkbox-active",
          br = (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && sr(t, e);
            })(i, t);
            var e,
              n,
              o,
              r = fr(i);
            function i(t, e) {
              var n;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i),
                (n = r.call(this, t, ".checkbox")),
                e.html && (n.el.innerHTML = e.html),
                e.change &&
                  nt(hr(n), n.el, "click", function () {
                    O(n.el, dr), e.change(E(n.el, dr));
                  }),
                e.checked && _(n.el, dr),
                n
              );
            }
            return (
              (e = i),
              (n = [
                {
                  key: "update",
                  value: function (t) {
                    O(this.el, dr, t);
                  },
                },
              ]) && ur(e.prototype, n),
              o && ur(e, o),
              i
            );
          })(Y);
        function vr(t) {
          return (vr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function mr(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function gr(t, e) {
          return (gr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function _r(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = Or(t);
            if (e) {
              var r = Or(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return wr(this, n);
          };
        }
        function wr(t, e) {
          if (e && ("object" === vr(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Er(t);
        }
        function Er(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Or(t) {
          return (Or = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        var kr = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && gr(t, e);
          })(i, t);
          var e,
            n,
            o,
            r = _r(i);
          function i(t, e) {
            var n, o, a, c, l;
            ((function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            (n = r.call(this, t, ".slider")),
            (o = Er(n)),
            (c = function (t) {
              var e = n.rect.isHeightGtWidth,
                o = e ? t.clientY - n.rect.y : t.clientX - n.rect.x;
              n.update(o / (e ? n.rect.height : n.rect.width), o);
            }),
            (a = "onDrag") in o
              ? Object.defineProperty(o, a, {
                  value: c,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (o[a] = c),
            (n.opts = e),
            (n.rect = new D(n.el)),
            (n.trackEl = n.el
              .appendChild(d(".slider_track"))
              .appendChild(d(".slider_track_inner"))),
            e.stops) &&
              e.stops.forEach(function (t) {
                ((l = d(
                  ".slider_stop",
                  void 0,
                  t.html ? "<span>".concat(t.html, "</span>") : ""
                )).style.left = "".concat(100 * t.value, "%")),
                  n.el.appendChild(l);
              });
            return (
              (n.dotEl = n.el.appendChild(d(".slider_dot"))),
              tt(
                Er(n),
                new I(
                  n.el,
                  function (t) {
                    n.rect.update(), n.onDrag(t);
                  },
                  n.onDrag
                )
              ),
              nt(Er(n), n.el, "touchstart", function (t) {
                return t.preventDefault();
              }),
              (n.step = e.stops && e.step),
              n.update(e.value || 0, void 0, !1),
              n
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "update",
                value: function (t, e) {
                  var n =
                    !(arguments.length > 2 && void 0 !== arguments[2]) ||
                    arguments[2];
                  if (this.step) {
                    var o,
                      r = 1 / 0,
                      i = 0;
                    this.opts.stops.forEach(function (e) {
                      (o = Math.abs(t - e.value)) < r &&
                        ((r = o), (i = e.value));
                    }),
                      (t = i),
                      (e = null);
                  }
                  var a = this.rect.isHeightGtWidth
                    ? this.rect.height
                    : this.rect.width;
                  (e = null != e ? e : t * a),
                    (this.trackEl.style.transform = "scaleX(".concat(
                      J(t),
                      ")"
                    )),
                    (this.dotEl.style.transform = "translateX(".concat(
                      J(e, 0, a),
                      "px)"
                    )),
                    n && this.opts.change && this.opts.change(t);
                },
              },
            ]) && mr(e.prototype, n),
            o && mr(e, o),
            i
          );
        })(Y);
        function Pr(t) {
          return (Pr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function xr(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function Tr(t, e) {
          return (Tr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function Sr(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = Rr(t);
            if (e) {
              var r = Rr(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return jr(this, n);
          };
        }
        function jr(t, e) {
          if (e && ("object" === Pr(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Cr(t);
        }
        function Cr(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Rr(t) {
          return (Rr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function Lr(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var Ir = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Tr(t, e);
          })(i, t);
          var e,
            n,
            o,
            r = Sr(i);
          function i(t, e) {
            var n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              Lr(Cr((n = r.call(this, t, ".poster"))), "tryToPlayed", !1),
              Lr(Cr(n), "onTimeUpdate", function () {
                n.player.playing &&
                  ((n.tryToPlayed = !0),
                  n.hide(),
                  n.player.off(l.TIME_UPDATE, n.onTimeUpdate));
              }),
              Lr(Cr(n), "tryHide", function () {
                n.tryToPlayed && n.hide();
              }),
              (n.player = e),
              (n.poster = e.opts.poster),
              (n.playEl = e.opts.posterPlayEl || pn.play()),
              _(n.playEl, "poster_play"),
              n.el.appendChild(n.playEl),
              n.hide(),
              e.opts.posterEnable
                ? (n.show(),
                  n.poster &&
                    n.applyStyle({
                      backgroundImage: "url(".concat(n.poster, ")"),
                    }),
                  nt(Cr(n), n.el, "click", function () {
                    if (n.tryToPlayed)
                      return m(n.playEl), e.pause(), void (n.tryToPlayed = !1);
                    (n.tryToPlayed = !0),
                      e.loaded ? n.hide() : (g(n.playEl), e.loading.show()),
                      e.play();
                  }),
                  tt(Cr(n), e.on(l.CANPLAY, n.tryHide)),
                  tt(Cr(n), e.on(l.LOADED_METADATA, n.tryHide)),
                  tt(
                    Cr(n),
                    e.on(l.UPDATE_OPTIONS, function () {
                      e.opts.poster &&
                        e.opts.poster !== n.poster &&
                        !e.playing &&
                        ((n.poster = e.opts.poster),
                        n.applyStyle({
                          backgroundImage: "url(".concat(n.poster, ")"),
                        }),
                        (n.tryToPlayed = !1),
                        n.addTimeUpdateHandler(),
                        n.show());
                    })
                  ),
                  n.addTimeUpdateHandler(),
                  n)
                : jr(n)
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "addTimeUpdateHandler",
                value: function () {
                  this.player.off(l.TIME_UPDATE, this.onTimeUpdate),
                    this.player.on(l.TIME_UPDATE, this.onTimeUpdate);
                },
              },
              {
                key: "isActive",
                get: function () {
                  return "none" !== this.el.style.display;
                },
              },
              {
                key: "show",
                value: function () {
                  m(this.el), m(this.playEl);
                },
              },
              {
                key: "hide",
                value: function () {
                  g(this.el);
                },
              },
            ]) && xr(e.prototype, n),
            o && xr(e, o),
            i
          );
        })(Y);
        function Ar(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function Dr(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var Br = (function () {
          function t(e) {
            var n = this;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Dr(this, "startX", 0),
              Dr(this, "duration", 0),
              Dr(this, "durationStr", ""),
              Dr(this, "currentTime", 0),
              Dr(this, "seekTime", -1),
              Dr(this, "videoTouched", !1),
              Dr(this, "dragged", !1),
              Dr(this, "onTouchStart", function (t) {
                1 === t.touches.length &&
                  (t.preventDefault(),
                  n.videoTouched
                    ? (clearTimeout(n.showControlTimer),
                      (n.videoTouched = !1),
                      n.player.toggle())
                    : ((n.videoTouched = !0),
                      (n.showControlTimer = setTimeout(function () {
                        n.videoTouched = !1;
                        var t = n.player.control;
                        t.isActive ? t.hide() : t.showTransient();
                      }, 200))));
              }),
              Dr(
                this,
                "onTouchMove",
                ot(function (t) {
                  if (1 === t.touches.length)
                    if ((t.preventDefault(), n.dragged)) {
                      var e = t.touches[0].clientX - n.startX;
                      if (Math.abs(e) < 15) return;
                      (n.seekTime =
                        0 | J(n.currentTime + e / 5, 0, n.duration)),
                        (n.toastItem = n.player.toast.show(
                          ""
                            .concat(it(n.seekTime), " · ")
                            .concat(n.durationStr),
                          "center",
                          0
                        ));
                    } else
                      (n.duration = n.player.duration),
                        !n.player.opts.live &&
                          n.duration &&
                          ((n.durationStr = it(n.duration)),
                          (n.currentTime = n.player.currentTime),
                          (n.startX = t.touches[0].clientX),
                          (n.seekTime = -1),
                          (n.dragged = !0));
                })
              ),
              Dr(this, "onTouchEnd", function () {
                n.dragged &&
                  ((n.dragged = !1),
                  n.toastItem &&
                    setTimeout(function () {
                      return n.player.toast.close(n.toastItem);
                    }, 200),
                  n.seekTime >= 0 &&
                    Math.abs(n.seekTime - n.player.currentTime) > 3 &&
                    (n.player.currentTime = n.seekTime));
              }),
              (this.player = e),
              e.opts.isTouch && this.enable();
          }
          var e, n, o;
          return (
            (e = t),
            (n = [
              {
                key: "enable",
                value: function () {
                  this.player.video.addEventListener(
                    "touchstart",
                    this.onTouchStart
                  ),
                    this.player.video.addEventListener(
                      "touchmove",
                      this.onTouchMove
                    ),
                    this.player.video.addEventListener(
                      "touchend",
                      this.onTouchEnd
                    ),
                    this.player.video.addEventListener(
                      "touchcancel",
                      this.onTouchEnd
                    );
                },
              },
              {
                key: "disable",
                value: function () {
                  this.player.video.removeEventListener(
                    "touchstart",
                    this.onTouchStart
                  ),
                    this.player.video.removeEventListener(
                      "touchmove",
                      this.onTouchMove
                    ),
                    this.player.video.removeEventListener(
                      "touchend",
                      this.onTouchEnd
                    ),
                    this.player.video.removeEventListener(
                      "touchcancel",
                      this.onTouchEnd
                    );
                },
              },
              {
                key: "dispose",
                value: function () {
                  this.toastItem && this.player.toast.close(this.toastItem),
                    this.disable();
                },
              },
            ]) && Ar(e.prototype, n),
            o && Ar(e, o),
            t
          );
        })();
        function Nr(t) {
          return (Nr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function Hr(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e &&
              (o = o.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        function Mr(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Hr(Object(n), !0).forEach(function (e) {
                  Gr(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Hr(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function Ur(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function Fr(t, e) {
          return (Fr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function Vr(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              o = Wr(t);
            if (e) {
              var r = Wr(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return zr(this, n);
          };
        }
        function zr(t, e) {
          if (e && ("object" === Nr(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Yr(t);
        }
        function Yr(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Wr(t) {
          return (Wr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function Gr(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var Xr = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Fr(t, e);
          })(a, t);
          var e,
            n,
            o,
            i = Vr(a);
          function a(t) {
            var e, n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              Gr(Yr((e = i.call(this))), "mounted", !1),
              Gr(Yr(e), "prevVolume", 1),
              Gr(Yr(e), "settingNamedMap", Object.create(null)),
              Gr(Yr(e), "contextmenuNamedMap", Object.create(null)),
              Gr(Yr(e), "controlNamedMap", Object.create(null)),
              Gr(Yr(e), "plugins", new Set()),
              Gr(Yr(e), "toggle", function () {
                e.paused ? e.play() : e.pause();
              }),
              (e.opts = (function (t) {
                var e = r(
                  r(
                    {},
                    {
                      shortcut: !0,
                      seekStep: 10,
                      volumeStep: 0.1,
                      volumeBarLength: 100,
                      settings: ["speed"],
                      contextMenus: ["loop", "pip", "version"],
                      contextMenuToggle: !0,
                      openEdgeInIE: !0,
                      posterEnable: !0,
                      videoProps: { preload: "auto", playsinline: "true" },
                    }
                  ),
                  {},
                  {
                    isTouch:
                      "ontouchstart" in window ||
                      navigator.maxTouchPoints > 0 ||
                      navigator.msMaxTouchPoints > 0,
                  },
                  t
                );
                (e.controls = e.controls || [
                  [
                    "play",
                    e.isTouch ? "" : "volume",
                    "time",
                    "spacer",
                    "airplay",
                    "settings",
                    "web-fullscreen",
                    "fullscreen",
                  ],
                  [e.live ? "" : "progress"],
                ]),
                  (e.bpControls = e.bpControls || {
                    650: [
                      [
                        "play",
                        e.live ? "" : "progress",
                        "time",
                        "web-fullscreen",
                        "fullscreen",
                      ],
                      [],
                      ["spacer", "airplay", "settings"],
                    ],
                  }),
                  (e.controls = e.controls.filter(Boolean).map(function (t) {
                    return t.filter(Boolean);
                  }));
                var n = {};
                return (
                  Object.keys(e.bpControls)
                    .filter(function (t) {
                      return (
                        t && !isNaN(Number(t)) && Array.isArray(e.bpControls[t])
                      );
                    })
                    .forEach(function (t) {
                      n[t] = e.bpControls[t].filter(Boolean).map(function (t) {
                        return t.filter(Boolean);
                      });
                    }),
                  (e.bpControls = n),
                  e
                );
              })(t)),
              (n = Yr(e)).opts.openEdgeInIE &&
                p &&
                (window.location.assign("microsoft-edge:".concat(document.URL)),
                n.emit(l.OPEN_EDGE)),
              sn.setCurrentLang(e.opts.i18n),
              (e.container = b(e.opts.container)),
              (e.el = d(".nplayer", { tabindex: "0" }, void 0, "")),
              e.opts.video
                ? ((e.video = e.opts.video), _(e.video, "video"))
                : (e.video = d("video.video")),
              e.opts.src && (e.opts.videoProps.src = e.opts.src),
              or(e.el, e.opts),
              (function (t, e) {
                e &&
                  Object.keys(e).forEach(function (n) {
                    t.setAttribute(n, e[n]);
                  });
              })(e.video, e.opts.videoProps),
              rr(e.video, e.opts.videoSources),
              (function (t) {
                try {
                  var e = parseFloat(localStorage.getItem(ir));
                  isNaN(e) || (t.volume = e);
                } catch (t) {}
              })(e.video),
              cr(Yr(e)),
              e.el.appendChild(e.video),
              ar(Yr(e)),
              (e.rect = tt(Yr(e), new D(e.el, Yr(e)))),
              (e.fullscreen = tt(Yr(e), new ge(Yr(e)))),
              (e.webFullscreen = tt(Yr(e), new Ee(Yr(e)))),
              (e.shortcut = tt(Yr(e), new jn(Yr(e), e.opts.shortcut))),
              (e.touch = tt(Yr(e), new Br(Yr(e)))),
              (e.toast = tt(Yr(e), new de(e.el))),
              (e.loading = tt(Yr(e), new qt(e.el, Yr(e)))),
              (e.poster = tt(Yr(e), new Ir(e.el, Yr(e)))),
              e.opts.plugins &&
                e.opts.plugins.forEach(function (t) {
                  return e.use(t);
                }),
              (e.contextmenu = tt(
                Yr(e),
                new re(
                  e.el,
                  Yr(e),
                  e.opts.contextMenus
                    .map(function (t) {
                      return N(t) ? e.contextmenuNamedMap[t] : t;
                    })
                    .filter(Boolean)
                )
              )),
              (e.__settingItems = e.opts.settings
                .map(function (t) {
                  return N(t) ? e.settingNamedMap[t] : t;
                })
                .filter(Boolean)),
              (e.control = tt(Yr(e), new Mt(e.el, Yr(e)))),
              tt(
                Yr(e),
                e.on(l.CANPLAY, function () {
                  var t = e.opts.autoSeekTime || 0.3;
                  e.currentTime < t &&
                    ((e.currentTime = t),
                    e.currentTime < t && (e.video.load(), e.video.pause())),
                    (e.opts.autoSeekTime = 0);
                })
              ),
              e.opts.isTouch || e.enableClickPause(),
              e.emit(l.AFTER_INIT),
              e
            );
          }
          return (
            (e = a),
            (n = [
              {
                key: "currentTime",
                get: function () {
                  return this.video.currentTime;
                },
                set: function (t) {
                  this.duration &&
                    t - this.video.currentTime &&
                    (this.video.currentTime = J(t, 0, this.duration));
                },
              },
              {
                key: "loaded",
                get: function () {
                  return this.video.readyState >= 3;
                },
              },
              {
                key: "duration",
                get: function () {
                  return this.video.duration || 0;
                },
              },
              {
                key: "buffered",
                get: function () {
                  return this.video.buffered;
                },
              },
              {
                key: "volume",
                get: function () {
                  return this.video.volume;
                },
                set: function (t) {
                  (this.video.volume = J(t)),
                    this.muted && t > 0 && (this.muted = !1),
                    (function (t) {
                      try {
                        localStorage.setItem(ir, String(t));
                      } catch (t) {}
                    })(this.video.volume);
                },
              },
              {
                key: "muted",
                get: function () {
                  return this.video.muted || 0 === this.volume;
                },
                set: function (t) {
                  this.video.muted = t;
                },
              },
              {
                key: "playbackRate",
                get: function () {
                  return this.video.playbackRate;
                },
                set: function (t) {
                  this.video.playbackRate = t;
                },
              },
              {
                key: "ended",
                get: function () {
                  return this.video.ended;
                },
              },
              {
                key: "paused",
                get: function () {
                  return this.video.paused;
                },
              },
              {
                key: "playing",
                get: function () {
                  return !this.paused && !this.ended;
                },
              },
              {
                key: "loop",
                get: function () {
                  return this.video.loop;
                },
                set: function (t) {
                  this.video.loop = t;
                },
              },
              {
                key: "enableClickPause",
                value: function () {
                  this.video.addEventListener("click", this.toggle);
                },
              },
              {
                key: "disableClickPause",
                value: function () {
                  this.video.removeEventListener("click", this.toggle);
                },
              },
              {
                key: "use",
                value: function (t) {
                  return (
                    !t ||
                      this.plugins.has(t) ||
                      (t.dispose && tt(this, t), t.apply(this)),
                    this
                  );
                },
              },
              {
                key: "mount",
                value: function (t) {
                  this.mounted
                    ? (t = b(t)) &&
                      t !== this.container &&
                      (this.container && this.container.removeChild(this.el),
                      (this.container = t),
                      this.container.appendChild(this.el),
                      this.emit(l.UPDATE_SIZE))
                    : (t && (this.container = b(t) || this.container),
                      this.container &&
                        (this.container.appendChild(this.el),
                        this.emit(l.MOUNTED),
                        (this.mounted = !0)));
                },
              },
              {
                key: "incVolume",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.opts.volumeStep;
                  this.volume += t;
                },
              },
              {
                key: "decVolume",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.opts.volumeStep;
                  this.volume -= t;
                },
              },
              {
                key: "forward",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.opts.seekStep;
                  this.currentTime += t;
                },
              },
              {
                key: "rewind",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.opts.seekStep;
                  this.currentTime -= t;
                },
              },
              {
                key: "play",
                value: function () {
                  return this.video.play();
                },
              },
              {
                key: "pause",
                value: function () {
                  this.video.pause();
                },
              },
              {
                key: "seek",
                value: function (t) {
                  this.video.currentTime = J(t, 0, this.duration);
                },
              },
              {
                key: "toggleVolume",
                value: function () {
                  this.muted
                    ? ((this.volume = this.prevVolume || 1), (this.muted = !1))
                    : ((this.prevVolume = this.volume), (this.volume = 0));
                },
              },
              {
                key: "eachBuffer",
                value: function (t) {
                  for (
                    var e = this.buffered.length - 1;
                    e >= 0 && !t(this.buffered.start(e), this.buffered.end(e));
                    e--
                  );
                },
              },
              {
                key: "registerSettingItem",
                value: function (t, e) {
                  this.settingNamedMap[e || t.id] = t;
                },
              },
              {
                key: "registerContextMenuItem",
                value: function (t, e) {
                  this.contextmenuNamedMap[e || t.id] = t;
                },
              },
              {
                key: "registerControlItem",
                value: function (t, e) {
                  this.controlNamedMap[e || t.id] = t;
                },
              },
              {
                key: "getSettingItem",
                value: function (t) {
                  return this.settingNamedMap[t];
                },
              },
              {
                key: "getContextMenuItem",
                value: function (t) {
                  return this.contextmenuNamedMap[t];
                },
              },
              {
                key: "getControlItem",
                value: function (t) {
                  return this.controlNamedMap[t];
                },
              },
              {
                key: "updateOptions",
                value: function (t) {
                  t.videoProps !== this.opts.videoProps &&
                    Q(this.video, this.opts.videoProps, t.videoProps),
                    t.src &&
                      t.src !== this.opts.src &&
                      (this.video.src = t.src),
                    t.videoSources !== this.opts.videoSources &&
                      rr(this.video, t.videoSources),
                    (this.opts = Mr(Mr({}, this.opts), t)),
                    or(this.el, this.opts),
                    this.opts.shortcut
                      ? this.shortcut.enable()
                      : this.shortcut.disable(),
                    this.emit(l.UPDATE_OPTIONS, this.opts);
                },
              },
              {
                key: "updateControlItems",
                value: function (t, e) {
                  this.control.updateItems(t, e);
                },
              },
              {
                key: "dispose",
                value: function () {
                  if (this.el) {
                    this.emit(l.BEFORE_DISPOSE), et(this);
                    var t = this.opts.plugins;
                    t &&
                      t.forEach(function (t) {
                        return t.dispose && t.dispose();
                      }),
                      this.removeAllListeners(),
                      v(this.el),
                      (this.el = null),
                      (this.container = null);
                  }
                },
              },
            ]) && Ur(e.prototype, n),
            o && Ur(e, o),
            a
          );
        })(V);
        Gr(Xr, "__utils", at),
          Gr(Xr, "EVENT", l),
          Gr(Xr, "I18n", sn),
          Gr(Xr, "Icon", pn),
          Gr(Xr, "components", t),
          Gr(Xr, "Player", Xr),
          (Xr.prototype.Player = Xr),
          (Xr.prototype.EVENT = l);
      })(),
      o
    );
  })();
});
//# sourceMappingURL=index.min.js.map
