"use strict";
(self.webpackChunkwasender_chrome_extension =
  self.webpackChunkwasender_chrome_extension || []).push([
  [592],
  {
    326: (T, f, t) => {
      t.d(f, { V: () => n });
      var a = t(9291);
      let n = (() => {
        var p;
        class e {
          transform(l) {
            let m = [];
            return (l && (m = Object.keys(l).filter((i) => l[i])), m);
          }
        }
        return (
          ((p = e).ɵfac = function (l) {
            return new (l || p)();
          }),
          (p.ɵpipe = a.Yjl({ name: "keys", type: p, pure: !1 })),
          e
        );
      })();
    },
    6979: (T, f, t) => {
      t.d(f, { V: () => x });
      var a = t(5861),
        n = t(9291),
        p = t(8043),
        e = t(9955),
        u = t(6814),
        l = t(858);
      function m(_, P) {
        if (1 & _) {
          const g = n.EpF();
          (n.TgZ(0, "div", 7),
            n.NdJ("click", function () {
              n.CHM(g);
              const r = n.oxw();
              return n.KtG(r.openBuyLicnese());
            }),
            n._uU(1, "Give Review & get pro"),
            n.qZA());
        }
      }
      function i(_, P) {
        if (1 & _) {
          const g = n.EpF();
          (n.TgZ(0, "div", 7),
            n.NdJ("click", function () {
              n.CHM(g);
              const r = n.oxw();
              return n.KtG(r.openBuyLicnese());
            }),
            n._uU(1, "Upgrade"),
            n.qZA());
        }
      }
      function v(_, P) {
        if (1 & _) {
          const g = n.EpF();
          (n.TgZ(0, "i", 8),
            n.NdJ("click", function () {
              n.CHM(g);
              const r = n.oxw();
              return n.KtG(r.close.emit());
            }),
            n.ALo(1, "jtranslate"),
            n.qZA());
        }
        2 & _ && n.s9C("title", n.lcZ(1, 1, "Close warning"));
      }
      const M = ["*"];
      let x = (() => {
        var _;
        class P {
          constructor(c, r) {
            ((this.uiService = c),
              (this.extDataService = r),
              (this.tone = "warn"),
              (this.canClose = !0),
              (this.close = new n.vpe()));
          }
          get isReviewGiven() {
            return this.extDataService.getAuth()?.isReviewGiven();
          }
          openBuyLicnese() {
            var c = this;
            return (0, a.Z)(function* () {
              c.uiService.showProWarning(c.type);
            })();
          }
        }
        return (
          ((_ = P).ɵfac = function (c) {
            return new (c || _)(n.Y36(p.F), n.Y36(e.a));
          }),
          (_.ɵcmp = n.Xpm({
            type: _,
            selectors: [["app-pro-warn"]],
            inputs: { type: "type", tone: "tone", canClose: "canClose" },
            outputs: { close: "close" },
            ngContentSelectors: M,
            decls: 10,
            vars: 3,
            consts: [
              [1, "upgrade-banner"],
              [1, "banner-left"],
              [1, "rocket"],
              [1, "banner-text"],
              [1, "d-flex"],
              ["class", "upgrade-button", 3, "click", 4, "ngIf"],
              ["class", "fa-kit fa-x cp ml5", 3, "title", "click", 4, "ngIf"],
              [1, "upgrade-button", 3, "click"],
              [1, "fa-kit", "fa-x", "cp", "ml5", 3, "title", "click"],
            ],
            template: function (c, r) {
              (1 & c &&
                (n.F$t(),
                n.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2),
                n._uU(3, "\u{1f680}"),
                n.qZA(),
                n.TgZ(4, "div", 3),
                n.Hsn(5),
                n.qZA()(),
                n.TgZ(6, "div", 4),
                n.YNc(7, m, 2, 0, "div", 5),
                n.YNc(8, i, 2, 0, "div", 5),
                n.YNc(9, v, 2, 3, "i", 6),
                n.qZA()()),
                2 & c &&
                  (n.xp6(7),
                  n.Q6J(
                    "ngIf",
                    (null == r.extDataService ||
                    null == r.extDataService.appConfig
                      ? null
                      : r.extDataService.appConfig.reviewMode) &&
                      !r.isReviewGiven,
                  ),
                  n.xp6(1),
                  n.Q6J(
                    "ngIf",
                    !(
                      null != r.extDataService &&
                      null != r.extDataService.appConfig &&
                      r.extDataService.appConfig.reviewMode
                    ) || r.isReviewGiven,
                  ),
                  n.xp6(1),
                  n.Q6J("ngIf", r.canClose)));
            },
            dependencies: [u.O5, l.Q],
            styles: [
              ".upgrade-banner[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background:rgba(180,39,39,.08);padding:10px 8px;border-radius:4px}.upgrade-banner[_ngcontent-%COMP%]   .rocket[_ngcontent-%COMP%]{border-radius:4px;background:white;padding:6px;margin-right:6px}.upgrade-banner[_ngcontent-%COMP%]   .banner-left[_ngcontent-%COMP%]{display:flex;align-items:center}.upgrade-banner[_ngcontent-%COMP%]   .banner-left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:24px;height:24px;margin-right:12px;flex-shrink:0}.upgrade-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]{font-size:13px;color:#111827}.upgrade-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:600}.upgrade-banner[_ngcontent-%COMP%]   .upgrade-button[_ngcontent-%COMP%]{padding:8px 12px;font-size:13px;color:#10b981;background:#ffffff;border-radius:4px;cursor:pointer;text-decoration:none;font-weight:500}.upgrade-banner[_ngcontent-%COMP%]   .upgrade-button[_ngcontent-%COMP%]:hover{background:#f0fdf4}",
            ],
          })),
          P
        );
      })();
    },
    9682: (T, f, t) => {
      t.d(f, { g: () => e });
      var a = t(9291),
        n = t(2572),
        p = t(4517);
      let e = (() => {
        var u;
        class l {
          constructor(i) {
            ((this.wabgService = i), (this.close = new a.vpe()));
          }
          finishReport() {
            ((this.report.isFinished = !0),
              this.wabgService.stopMessaging(),
              this.close.emit());
          }
        }
        return (
          ((u = l).ɵfac = function (i) {
            return new (i || u)(a.Y36(n.j));
          }),
          (u.ɵcmp = a.Xpm({
            type: u,
            selectors: [["app-report-cancel-alert"]],
            inputs: { report: "report" },
            outputs: { close: "close" },
            decls: 9,
            vars: 1,
            consts: [
              ["tone", "warning", 1, "d-block", 3, "canClose"],
              ["head", "", 1, "w100p", "text-center"],
              [1, "flex", "j-flex-center", "mt10"],
              [1, "text-danger", "tul", "cp", 3, "click"],
              [1, "text-crm", "tul", "cp", "ml10", 3, "click"],
            ],
            template: function (i, v) {
              (1 & i &&
                (a.TgZ(0, "app-alert", 0)(1, "div", 1)(2, "div"),
                a._uU(3, "Are you sure you want to cancel?"),
                a.qZA(),
                a.TgZ(4, "div", 2)(5, "a", 3),
                a.NdJ("click", function () {
                  return v.finishReport();
                }),
                a._uU(6, "Yes"),
                a.qZA(),
                a.TgZ(7, "a", 4),
                a.NdJ("click", function () {
                  return v.close.emit();
                }),
                a._uU(8, "No"),
                a.qZA()()()()),
                2 & i && a.Q6J("canClose", !1));
            },
            dependencies: [p.w],
          })),
          l
        );
      })();
    },
    1410: (T, f, t) => {
      t.d(f, { M: () => A });
      var a = t(5861),
        n = t(7228),
        p = t(3964),
        e = t(9291),
        u = t(2572),
        l = t(9955),
        m = t(2226),
        i = t(6814),
        v = t(6223),
        M = t(4517),
        x = t(7825),
        _ = t(858),
        P = t(326);
      function g(s, E) {
        (1 & s &&
          (e.TgZ(0, "app-alert", 6)(1, "span", 7),
          e._uU(2),
          e.ALo(3, "jtranslate"),
          e.ALo(4, "jtranslate"),
          e.qZA()()),
          2 & s &&
            (e.Q6J("canClose", !1),
            e.xp6(2),
            e.AsE(
              " ",
              e.lcZ(3, 3, "Success! Your query has been received!"),
              " ",
              e.lcZ(4, 5, "You will soon receive a response on WhatsApp."),
              " ",
            )));
      }
      function c(s, E) {
        if (1 & s) {
          const C = e.EpF();
          (e.TgZ(0, "div", 8),
            e.NdJ("click", function () {
              const O = e.CHM(C).$implicit,
                h = e.oxw();
              return e.KtG((h.selectTopic = h.supportTopic[O]));
            }),
            e._UZ(1, "input", 9),
            e.TgZ(2, "label", 10),
            e._uU(3),
            e.qZA()());
        }
        if (2 & s) {
          const C = E.$implicit,
            o = e.oxw();
          (e.xp6(1),
            e.Q6J("checked", o.selectTopic === o.supportTopic[C]),
            e.xp6(2),
            e.Oqu(o.supportTopic[C]));
        }
      }
      var r = (function (s) {
        return (
          (s.TECH_SUPPORT = "Tech support"),
          (s.ACCOUNT = "Account/Billing"),
          (s.BUG = "Report a Bug/Issue"),
          (s.REFUND = "Request refund"),
          (s.NEW_FEATURE = "Request a new feature"),
          s
        );
      })(r || {});
      let A = (() => {
        var s;
        class E {
          constructor(o, d, O) {
            ((this.waService = o),
              (this.authService = d),
              (this.log = O),
              (this.supportTopic = r),
              (this.selectTopic = r.TECH_SUPPORT),
              (this.query = ""),
              (this.messagesent = !1),
              (this.bulkMessageLink = `/${n.ME.bulkMsgs()}`));
          }
          get helpNumber() {
            return this.authService.appConfig?.helpNumber;
          }
          get onBoardingFrameURL() {
            return this.authService.appConfig?.onBoardingFrameURL;
          }
          sendMessage() {
            var o = this;
            return (0, a.Z)(function* () {
              o.messagesent = !0;
              const d = {
                messages: [],
                message: `Hi,\nI am using ${o.authService.isPro() ? "*WASender PRO*" : "*WASender*"} Version:${p.nB.getManifestData()?.version} \n ${o.selectTopic.trim()} \n ${o.query}  `,
                number: `${o.helpNumber}`,
              };
              (o.log.log("support_query", {
                topic: o.selectTopic,
                query: o.query?.trim(),
              }),
                yield o.waService.sendMessage(d));
            })();
          }
        }
        return (
          ((s = E).ɵfac = function (o) {
            return new (o || s)(e.Y36(u.o), e.Y36(l.a), e.Y36(m.m));
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [["app-wa-help"]],
            decls: 16,
            vars: 11,
            consts: [
              [1, "home", "p12", "pt0"],
              [
                "class",
                "mt10 mb10 d-block",
                "type",
                "success",
                "alignment",
                "center",
                3,
                "canClose",
                4,
                "ngIf",
              ],
              [
                "class",
                "d-flex j-flex-start",
                3,
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "p-relative"],
              ["rows", "5", 1, "w100p", 3, "ngModel", "ngModelChange"],
              [1, "btn", "btn-theme", 3, "click"],
              [
                "type",
                "success",
                "alignment",
                "center",
                1,
                "mt10",
                "mb10",
                "d-block",
                3,
                "canClose",
              ],
              ["head", ""],
              [1, "d-flex", "j-flex-start", 3, "click"],
              ["type", "radio", "name", "all-contacts", 1, "mt0", 3, "checked"],
              ["for", "all-contact", 1, "fwn", "ml5", "mb0"],
            ],
            template: function (o, d) {
              (1 & o &&
                (e.TgZ(0, "div", 0),
                e._UZ(1, "app-header"),
                e.YNc(2, g, 5, 7, "app-alert", 1),
                e.TgZ(3, "h4"),
                e._uU(4),
                e.ALo(5, "jtranslate"),
                e.qZA(),
                e.YNc(6, c, 4, 2, "div", 2),
                e.ALo(7, "keys"),
                e._UZ(8, "br"),
                e.TgZ(9, "b"),
                e._uU(10),
                e.ALo(11, "jtranslate"),
                e.qZA(),
                e.TgZ(12, "div", 3)(13, "textarea", 4),
                e.NdJ("ngModelChange", function (h) {
                  return (d.query = h);
                }),
                e.qZA(),
                e.TgZ(14, "button", 5),
                e.NdJ("click", function () {
                  return d.sendMessage();
                }),
                e._uU(15, " Send "),
                e.qZA()()()),
                2 & o &&
                  (e.xp6(2),
                  e.Q6J("ngIf", d.messagesent),
                  e.xp6(2),
                  e.Oqu(e.lcZ(5, 5, "Issue/Topic")),
                  e.xp6(2),
                  e.Q6J("ngForOf", e.lcZ(7, 7, d.supportTopic)),
                  e.xp6(4),
                  e.Oqu(e.lcZ(11, 9, "Please describe your issue.")),
                  e.xp6(3),
                  e.Q6J("ngModel", d.query)));
            },
            dependencies: [i.sg, i.O5, v.Fj, v.JJ, v.On, M.w, x.G, _.Q, P.V],
            styles: [
              "textarea[_ngcontent-%COMP%]{border:1px solid #dbdbdb;border-radius:4px}.btn.btn-theme[_ngcontent-%COMP%]{position:absolute;bottom:10px;right:4px;display:flex;align-items:center;justify-content:center;padding:10px}",
            ],
          })),
          E
        );
      })();
    },
  },
]);
