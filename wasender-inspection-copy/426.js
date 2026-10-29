"use strict";
(self.webpackChunkwasender_chrome_extension =
  self.webpackChunkwasender_chrome_extension || []).push([
  [426],
  {
    7825: (I, O, l) => {
      l.d(O, { G: () => C });
      var n = l(9291),
        w = l(7228),
        y = l(9955),
        M = l(2572),
        E = l(8043),
        S = l(3427),
        h = l(858);
      let C = (() => {
        var m;
        class T {
          constructor(r, s, a) {
            ((this.extDataService = r),
              (this.waService = s),
              (this.uiService = a),
              (this.userNameIntitals = (0, n.Flj)(() =>
                this.extDataService.getUserDetails()?.getUserNameIntitals(),
              )),
              (this.downloadContactLink = `/${w.ME.downloadContact()}`),
              (this.reportsLink = `/${w.ME.messagingReport()}`),
              (this.helpLink = `/${w.ME.helpLink()}`),
              (this.msgLink = `/${w.ME.bulkMsgs()}`),
              (this.chatbotLink = `/${w.ME.chatbot()}`),
              (this.userDetailsPage = `/${w.ME.getUserDetails()}`));
          }
          closeWindow() {
            this.waService.closeWindow();
          }
        }
        return (
          ((m = T).ɵfac = function (r) {
            return new (r || m)(n.Y36(y.a), n.Y36(M.o), n.Y36(E.F));
          }),
          (m.ɵcmp = n.Xpm({
            type: m,
            selectors: [["app-header"]],
            decls: 35,
            vars: 21,
            consts: [
              [1, "header"],
              [1, "d-flex", "a-flex-center"],
              [
                1,
                "fa-kit",
                "fa-chevrons-right",
                "close-icon",
                "mr10",
                3,
                "click",
              ],
              [1, "d-flex", "a-flex-center", "j-flex-center"],
              [
                "width",
                "28px",
                "src",
                "../../../assets/icon/logo.png",
                "alt",
                "Logo",
              ],
              [1, "tabs"],
              [
                "routerLinkActive",
                "active",
                1,
                "wrap",
                "cp",
                "d-flex",
                3,
                "routerLink",
              ],
              [1, "fa-kit", "fa-message", "mr3", "d-flex"],
              [1, "fa-kit", "fa-graph", "mr3"],
              [
                "routerLinkActive",
                "active",
                1,
                "wrap",
                "cp",
                "d-flex",
                "p-relative",
                3,
                "routerLink",
              ],
              [1, "fa-kit", "fa-question", "mr3"],
              [1, "dropdown", "d-flex"],
              ["data-toggle", "dropdown", 1, "profile-initals", "cp"],
              [
                "aria-labelledby",
                "navbarDropdown",
                1,
                "dropdown-menu",
                "r0",
                "l-unset",
              ],
              [
                "routerLinkActive",
                "active",
                1,
                "dropdown-item",
                3,
                "routerLink",
              ],
              [1, "fa-kit", "fa-user", "mr3"],
              [1, "dropdown-item", 3, "routerLink"],
              [1, "fa-kit", "fa-address-book", "mr3"],
            ],
            template: function (r, s) {
              (1 & r &&
                (n.TgZ(0, "div", 0)(1, "div", 1)(2, "i", 2),
                n.NdJ("click", function () {
                  return s.closeWindow();
                }),
                n.qZA(),
                n.TgZ(3, "div", 3),
                n._UZ(4, "img", 4),
                n.qZA()(),
                n.TgZ(5, "div", 5)(6, "div", 6),
                n._UZ(7, "i", 7),
                n.TgZ(8, "span"),
                n._uU(9),
                n.ALo(10, "jtranslate"),
                n.qZA()(),
                n.TgZ(11, "div", 6),
                n._UZ(12, "i", 8),
                n.TgZ(13, "span"),
                n._uU(14),
                n.ALo(15, "jtranslate"),
                n.qZA()(),
                n.TgZ(16, "div", 9),
                n._UZ(17, "i", 10),
                n.TgZ(18, "span"),
                n._uU(19),
                n.ALo(20, "jtranslate"),
                n.qZA()()(),
                n.TgZ(21, "div", 11)(22, "div", 12),
                n._uU(23),
                n.qZA(),
                n.TgZ(24, "div", 13)(25, "div", 14),
                n._UZ(26, "i", 15),
                n.TgZ(27, "span"),
                n._uU(28),
                n.ALo(29, "jtranslate"),
                n.qZA()(),
                n.TgZ(30, "div", 16),
                n._UZ(31, "i", 17),
                n.TgZ(32, "span"),
                n._uU(33),
                n.ALo(34, "jtranslate"),
                n.qZA()()()()()),
                2 & r &&
                  (n.xp6(6),
                  n.Q6J("routerLink", s.msgLink),
                  n.xp6(3),
                  n.Oqu(n.lcZ(10, 11, "Send messages")),
                  n.xp6(2),
                  n.Q6J("routerLink", s.reportsLink),
                  n.xp6(3),
                  n.Oqu(n.lcZ(15, 13, "Reports")),
                  n.xp6(2),
                  n.Q6J("routerLink", s.helpLink),
                  n.xp6(3),
                  n.Oqu(n.lcZ(20, 15, "Get support")),
                  n.xp6(4),
                  n.hij(" ", s.userNameIntitals(), " "),
                  n.xp6(2),
                  n.Q6J("routerLink", s.userDetailsPage),
                  n.xp6(3),
                  n.Oqu(n.lcZ(29, 17, "Profile")),
                  n.xp6(2),
                  n.Q6J("routerLink", s.downloadContactLink),
                  n.xp6(3),
                  n.Oqu(n.lcZ(34, 19, "Download contacts"))));
            },
            dependencies: [S.rH, S.Od, h.Q],
            styles: [
              ".header[_ngcontent-%COMP%]{padding:0 24px 0 17px;border-bottom:1px solid rgba(0,0,0,.05);display:flex;justify-content:space-between;height:50px}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%;gap:20px}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]{cursor:pointer;transition:border .2s;border-bottom:2px solid transparent;height:100%;color:#03080299}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]:hover{color:#019f53}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap.active[_ngcontent-%COMP%]{color:#019f53;border-bottom:2px solid #019F53}.header[_ngcontent-%COMP%]   .profile-initals[_ngcontent-%COMP%]{display:flex;width:28px;height:28px;padding:7px 6px;justify-content:center;align-items:center;gap:2px;border-radius:4px;background:#F3EECE;color:#03080299}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{padding-bottom:0}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{padding:5px 10px;color:#2e2e2e;font-size:13px;cursor:pointer;border-bottom:1px solid rgba(0,0,0,.08)}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{background:#fafafa}",
            ],
          })),
          T
        );
      })();
    },
    4825: (I, O, l) => {
      l.d(O, { H: () => E });
      var n = l(5592),
        w = l(2832),
        y = l(671);
      function E(S = 0, h, C = w.P) {
        let m = -1;
        return (
          null != h && ((0, y.K)(h) ? (C = h) : (m = h)),
          new n.y((T) => {
            let v = (function M(S) {
              return S instanceof Date && !isNaN(S);
            })(S)
              ? +S - C.now()
              : S;
            v < 0 && (v = 0);
            let r = 0;
            return C.schedule(function () {
              T.closed ||
                (T.next(r++), 0 <= m ? this.schedule(void 0, m) : T.complete());
            }, v);
          })
        );
      }
    },
    2832: (I, O, l) => {
      l.d(O, { P: () => T, z: () => m });
      var n = l(5113);
      class w extends n.w0 {
        constructor(r, s) {
          super();
        }
        schedule(r, s = 0) {
          return this;
        }
      }
      const y = {
        setInterval(v, r, ...s) {
          const { delegate: a } = y;
          return a?.setInterval
            ? a.setInterval(v, r, ...s)
            : setInterval(v, r, ...s);
        },
        clearInterval(v) {
          const { delegate: r } = y;
          return (r?.clearInterval || clearInterval)(v);
        },
        delegate: void 0,
      };
      var M = l(9039),
        S = l(4552);
      class h {
        constructor(r, s = h.now) {
          ((this.schedulerActionCtor = r), (this.now = s));
        }
        schedule(r, s = 0, a) {
          return new this.schedulerActionCtor(this, r).schedule(a, s);
        }
      }
      h.now = S.l.now;
      const m = new (class C extends h {
          constructor(r, s = h.now) {
            (super(r, s), (this.actions = []), (this._active = !1));
          }
          flush(r) {
            const { actions: s } = this;
            if (this._active) return void s.push(r);
            let a;
            this._active = !0;
            do {
              if ((a = r.execute(r.state, r.delay))) break;
            } while ((r = s.shift()));
            if (((this._active = !1), a)) {
              for (; (r = s.shift());) r.unsubscribe();
              throw a;
            }
          }
        })(
          class E extends w {
            constructor(r, s) {
              (super(r, s),
                (this.scheduler = r),
                (this.work = s),
                (this.pending = !1));
            }
            schedule(r, s = 0) {
              var a;
              if (this.closed) return this;
              this.state = r;
              const D = this.id,
                P = this.scheduler;
              return (
                null != D && (this.id = this.recycleAsyncId(P, D, s)),
                (this.pending = !0),
                (this.delay = s),
                (this.id =
                  null !== (a = this.id) && void 0 !== a
                    ? a
                    : this.requestAsyncId(P, this.id, s)),
                this
              );
            }
            requestAsyncId(r, s, a = 0) {
              return y.setInterval(r.flush.bind(r, this), a);
            }
            recycleAsyncId(r, s, a = 0) {
              if (null != a && this.delay === a && !1 === this.pending)
                return s;
              null != s && y.clearInterval(s);
            }
            execute(r, s) {
              if (this.closed) return new Error("executing a cancelled action");
              this.pending = !1;
              const a = this._execute(r, s);
              if (a) return a;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }
            _execute(r, s) {
              let D,
                a = !1;
              try {
                this.work(r);
              } catch (P) {
                ((a = !0),
                  (D = P || new Error("Scheduled action threw falsy error")));
              }
              if (a) return (this.unsubscribe(), D);
            }
            unsubscribe() {
              if (!this.closed) {
                const { id: r, scheduler: s } = this,
                  { actions: a } = s;
                ((this.work = this.state = this.scheduler = null),
                  (this.pending = !1),
                  (0, M.P)(a, this),
                  null != r && (this.id = this.recycleAsyncId(s, r, null)),
                  (this.delay = null),
                  super.unsubscribe());
              }
            }
          },
        ),
        T = m;
    },
    1721: (I, O, l) => {
      l.d(O, { Ry: () => yt, Rq: () => Ct });
      var n = l(9291),
        w = l(2096),
        y = l(4829),
        M = l(5592),
        E = l(1631),
        S = l(4266),
        h = l(4674),
        C = l(7400);
      const m = ["addListener", "removeListener"],
        T = ["addEventListener", "removeEventListener"],
        v = ["on", "off"];
      function r(t, e, o, i) {
        if (((0, h.m)(o) && ((i = o), (o = void 0)), i))
          return r(t, e, o).pipe((0, C.Z)(i));
        const [c, d] = (function P(t) {
          return (
            (0, h.m)(t.addEventListener) && (0, h.m)(t.removeEventListener)
          );
        })(t)
          ? T.map((u) => (p) => t[u](e, p, o))
          : (function a(t) {
                return (0, h.m)(t.addListener) && (0, h.m)(t.removeListener);
              })(t)
            ? m.map(s(t, e))
            : (function D(t) {
                  return (0, h.m)(t.on) && (0, h.m)(t.off);
                })(t)
              ? v.map(s(t, e))
              : [];
        if (!c && (0, S.z)(t)) return (0, E.z)((u) => r(u, e, o))((0, y.Xf)(t));
        if (!c) throw new TypeError("Invalid event target");
        return new M.y((u) => {
          const p = (...f) => u.next(1 < f.length ? f : f[0]);
          return (c(p), () => d(p));
        });
      }
      function s(t, e) {
        return (o) => (i) => t[o](e, i);
      }
      var W = l(7398),
        Z = l(9397),
        j = l(2181),
        Y = l(2832),
        B = l(9360),
        k = l(8251),
        V = l(4825);
      function $(t, e, o, i) {
        const c =
          window && !!window.document && window.document.documentElement;
        let d = c && e ? window : o;
        if (
          t &&
          ((d =
            t && c && "string" == typeof t
              ? (function X(t, e, o) {
                  return (o ? window.document : e).querySelector(t);
                })(t, o.nativeElement, i)
              : t),
          !d)
        )
          throw new Error(
            "ngx-infinite-scroll {resolveContainerElement()}: selector for",
          );
        return d;
      }
      function b(t) {
        return t && !t.firstChange;
      }
      const q = {
          clientHeight: "clientHeight",
          offsetHeight: "offsetHeight",
          scrollHeight: "scrollHeight",
          pageYOffset: "pageYOffset",
          offsetTop: "offsetTop",
          scrollTop: "scrollTop",
          top: "top",
        },
        tt = {
          clientHeight: "clientWidth",
          offsetHeight: "offsetWidth",
          scrollHeight: "scrollWidth",
          pageYOffset: "pageXOffset",
          offsetTop: "offsetLeft",
          scrollTop: "scrollLeft",
          top: "left",
        };
      class et {
        constructor(e = !0) {
          ((this.vertical = e), (this.propsMap = e ? q : tt));
        }
        clientHeightKey() {
          return this.propsMap.clientHeight;
        }
        offsetHeightKey() {
          return this.propsMap.offsetHeight;
        }
        scrollHeightKey() {
          return this.propsMap.scrollHeight;
        }
        pageYOffsetKey() {
          return this.propsMap.pageYOffset;
        }
        offsetTopKey() {
          return this.propsMap.offsetTop;
        }
        scrollTopKey() {
          return this.propsMap.scrollTop;
        }
        topKey() {
          return this.propsMap.top;
        }
      }
      function rt(t) {
        return ["Window", "global"].some((o) =>
          Object.prototype.toString.call(t).includes(o),
        );
      }
      function A(t, e) {
        return t ? e.document.documentElement : null;
      }
      function K(t, e) {
        const o = (function ct({ container: t, isWindow: e, axis: o }) {
          const { offsetHeightKey: i, clientHeightKey: c } = _(o);
          return R(t, e, i, c);
        })(e);
        return e.isWindow
          ? (function st(t, e, o) {
              const { axis: i, container: c, isWindow: d } = o,
                { offsetHeightKey: u, clientHeightKey: p } = _(i),
                f = t + F(A(d, c), i, d),
                g = R(e.nativeElement, d, u, p),
                x =
                  (function at(t, e, o) {
                    const i = e.topKey();
                    if (t.getBoundingClientRect)
                      return t.getBoundingClientRect()[i] + F(t, e, o);
                  })(e.nativeElement, i, d) + g;
              return { height: t, scrolled: f, totalToScroll: x, isWindow: d };
            })(o, t, e)
          : (function lt(t, e, o) {
              const { axis: i, container: c } = o;
              return {
                height: t,
                scrolled: c[i.scrollTopKey()],
                totalToScroll: c[i.scrollHeightKey()],
                isWindow: !1,
              };
            })(o, 0, e);
      }
      function _(t) {
        return {
          offsetHeightKey: t.offsetHeightKey(),
          clientHeightKey: t.clientHeightKey(),
        };
      }
      function R(t, e, o, i) {
        if (isNaN(t[o])) {
          const c = A(e, t);
          return c ? c[i] : 0;
        }
        return t[o];
      }
      function F(t, e, o) {
        const i = e.pageYOffsetKey(),
          c = e.scrollTopKey(),
          d = e.offsetTopKey();
        return isNaN(window.pageYOffset)
          ? A(o, t)[c]
          : t.ownerDocument
            ? t.ownerDocument.defaultView[i]
            : t[d];
      }
      function dt(t, e = { down: 0, up: 0 }, o) {
        let i, c;
        if (t.totalToScroll <= 0) return !1;
        const d = t.isWindow ? t.scrolled : t.height + t.scrolled;
        return (
          o
            ? ((i = (t.totalToScroll - d) / t.totalToScroll),
              (c = (e?.down ? e.down : 0) / 10))
            : ((i = t.scrolled / (t.scrolled + (t.totalToScroll - d))),
              (c = (e?.up ? e.up : 0) / 10)),
          i <= c
        );
      }
      class gt {
        constructor({ totalToScroll: e }) {
          ((this.lastScrollPosition = 0),
            (this.lastTotalToScroll = 0),
            (this.totalToScroll = 0),
            (this.triggered = { down: 0, up: 0 }),
            (this.totalToScroll = e));
        }
        updateScrollPosition(e) {
          return (this.lastScrollPosition = e);
        }
        updateTotalToScroll(e) {
          this.lastTotalToScroll !== e &&
            ((this.lastTotalToScroll = this.totalToScroll),
            (this.totalToScroll = e));
        }
        updateScroll(e, o) {
          (this.updateScrollPosition(e), this.updateTotalToScroll(o));
        }
        updateTriggeredFlag(e, o) {
          o ? (this.triggered.down = e) : (this.triggered.up = e);
        }
        isTriggeredScroll(e, o) {
          return o ? this.triggered.down === e : this.triggered.up === e;
        }
      }
      function vt(t) {
        const {
            scrollContainer: e,
            scrollWindow: o,
            element: i,
            fromRoot: c,
          } = t,
          d = (function ot({ windowElement: t, axis: e }) {
            return (function it(t, e) {
              const o =
                t.isWindow || (e && !e.nativeElement) ? e : e.nativeElement;
              return { ...t, container: o };
            })({ axis: e, isWindow: rt(t) }, t);
          })({ axis: new et(!t.horizontal), windowElement: $(e, o, i, c) }),
          u = new gt({ totalToScroll: K(i, d) }),
          f = { up: t.upDistance, down: t.downDistance };
        return (function mt(t) {
          let e = r(t.container, "scroll");
          return (
            t.throttle &&
              (e = e.pipe(
                (function Q(t, e = Y.z, o) {
                  const i = (0, V.H)(t, e);
                  return (function J(t, e) {
                    return (0, B.e)((o, i) => {
                      const { leading: c = !0, trailing: d = !1 } = e ?? {};
                      let u = !1,
                        p = null,
                        f = null,
                        g = !1;
                      const x = () => {
                          (f?.unsubscribe(),
                            (f = null),
                            d && (z(), g && i.complete()));
                        },
                        U = () => {
                          ((f = null), g && i.complete());
                        },
                        N = (L) =>
                          (f = (0, y.Xf)(t(L)).subscribe((0, k.x)(i, x, U))),
                        z = () => {
                          if (u) {
                            u = !1;
                            const L = p;
                            ((p = null), i.next(L), !g && N(L));
                          }
                        };
                      o.subscribe(
                        (0, k.x)(
                          i,
                          (L) => {
                            ((u = !0),
                              (p = L),
                              (!f || f.closed) && (c ? z() : N(L)));
                          },
                          () => {
                            ((g = !0),
                              (!(d && u && f) || f.closed) && i.complete());
                          },
                        ),
                      );
                    });
                  })(() => i, o);
                })(t.throttle, void 0, { leading: !0, trailing: !0 }),
              )),
            e
          );
        })({ container: d.container, throttle: t.throttle }).pipe(
          (0, E.z)(() => (0, w.of)(K(i, d))),
          (0, W.U)((g) =>
            (function St(t, e, o) {
              const { scrollDown: i, fire: c } = (function ft(t, e, o) {
                const i = (function ut(t, e) {
                  return t < e.scrolled;
                })(t, e);
                return { fire: dt(e, o, i), scrollDown: i };
              })(t, e, o);
              return { scrollDown: i, fire: c, stats: e };
            })(u.lastScrollPosition, g, f),
          ),
          (0, Z.b)(({ stats: g }) =>
            u.updateScroll(g.scrolled, g.totalToScroll),
          ),
          (0, j.h)(({ fire: g, scrollDown: x, stats: { totalToScroll: U } }) =>
            (function nt(t, e, o) {
              return !!((t && e) || (!o && e));
            })(t.alwaysCallback, g, u.isTriggeredScroll(U, x)),
          ),
          (0, Z.b)(({ scrollDown: g, stats: { totalToScroll: x } }) => {
            u.updateTriggeredFlag(x, g);
          }),
          (0, W.U)(wt),
        );
      }
      const H = { DOWN: "[NGX_ISE] DOWN", UP: "[NGX_ISE] UP" };
      function wt(t) {
        const {
          scrollDown: e,
          stats: { scrolled: o },
        } = t;
        return {
          type: e ? H.DOWN : H.UP,
          payload: { currentScrollPosition: o },
        };
      }
      let yt = (() => {
          var t;
          class e {
            constructor(i, c) {
              ((this.element = i),
                (this.zone = c),
                (this.scrolled = new n.vpe()),
                (this.scrolledUp = new n.vpe()),
                (this.infiniteScrollDistance = 2),
                (this.infiniteScrollUpDistance = 1.5),
                (this.infiniteScrollThrottle = 150),
                (this.infiniteScrollDisabled = !1),
                (this.infiniteScrollContainer = null),
                (this.scrollWindow = !0),
                (this.immediateCheck = !1),
                (this.horizontal = !1),
                (this.alwaysCallback = !1),
                (this.fromRoot = !1));
            }
            ngAfterViewInit() {
              this.infiniteScrollDisabled || this.setup();
            }
            ngOnChanges({
              infiniteScrollContainer: i,
              infiniteScrollDisabled: c,
              infiniteScrollDistance: d,
            }) {
              const u = b(i),
                p = b(c),
                f = b(d),
                g =
                  (!p && !this.infiniteScrollDisabled) ||
                  (p && !c.currentValue) ||
                  f;
              (u || p || f) && (this.destroyScroller(), g && this.setup());
            }
            setup() {
              (function G() {
                return typeof window < "u";
              })() &&
                this.zone.runOutsideAngular(() => {
                  this.disposeScroller = vt({
                    fromRoot: this.fromRoot,
                    alwaysCallback: this.alwaysCallback,
                    disable: this.infiniteScrollDisabled,
                    downDistance: this.infiniteScrollDistance,
                    element: this.element,
                    horizontal: this.horizontal,
                    scrollContainer: this.infiniteScrollContainer,
                    scrollWindow: this.scrollWindow,
                    throttle: this.infiniteScrollThrottle,
                    upDistance: this.infiniteScrollUpDistance,
                  }).subscribe((i) => this.handleOnScroll(i));
                });
            }
            handleOnScroll({ type: i, payload: c }) {
              const d = i === H.DOWN ? this.scrolled : this.scrolledUp;
              (function Tt(t) {
                return t.observed ?? t.observers.length > 0;
              })(d) && this.zone.run(() => d.emit(c));
            }
            ngOnDestroy() {
              this.destroyScroller();
            }
            destroyScroller() {
              this.disposeScroller && this.disposeScroller.unsubscribe();
            }
          }
          return (
            ((t = e).ɵfac = function (i) {
              return new (i || t)(n.Y36(n.SBq), n.Y36(n.R0b));
            }),
            (t.ɵdir = n.lG2({
              type: t,
              selectors: [
                ["", "infiniteScroll", ""],
                ["", "infinite-scroll", ""],
                ["", "data-infinite-scroll", ""],
              ],
              inputs: {
                infiniteScrollDistance: "infiniteScrollDistance",
                infiniteScrollUpDistance: "infiniteScrollUpDistance",
                infiniteScrollThrottle: "infiniteScrollThrottle",
                infiniteScrollDisabled: "infiniteScrollDisabled",
                infiniteScrollContainer: "infiniteScrollContainer",
                scrollWindow: "scrollWindow",
                immediateCheck: "immediateCheck",
                horizontal: "horizontal",
                alwaysCallback: "alwaysCallback",
                fromRoot: "fromRoot",
              },
              outputs: { scrolled: "scrolled", scrolledUp: "scrolledUp" },
              features: [n.TTD],
            })),
            e
          );
        })(),
        Ct = (() => {
          var t;
          class e {}
          return (
            ((t = e).ɵfac = function (i) {
              return new (i || t)();
            }),
            (t.ɵmod = n.oAB({ type: t })),
            (t.ɵinj = n.cJS({})),
            e
          );
        })();
    },
  },
]);
