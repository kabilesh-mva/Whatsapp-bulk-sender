"use strict";
(self.webpackChunkwasender_chrome_extension =
  self.webpackChunkwasender_chrome_extension || []).push([
  [195],
  {
    6195: (f, c, o) => {
      (o.r(c), o.d(c, { ChatbotPageModule: () => u }));
      var t = o(6814),
        i = o(6223),
        p = o(3427),
        e = o(9291),
        h = o(7825),
        d = o(858);
      const m = [
        {
          path: "",
          component: (() => {
            var n;
            class a {
              constructor() {}
            }
            return (
              ((n = a).ɵfac = function (s) {
                return new (s || n)();
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-chatbot-page"]],
                decls: 24,
                vars: 18,
                consts: [
                  [1, "home", "p12", "pt20"],
                  [1, "wrapper", "d-flex", "d-flex-column"],
                  [1, "mt30"],
                  [1, "mt10", "example"],
                  ["src", "../../assets/whatsapp-chatbot.png"],
                  [
                    "href",
                    "https://joyz.ai/whatsapp-ai-chatbot.html?src=ext",
                    "target",
                    "_blank",
                  ],
                  [1, "btn", "btn-theme", "mt10"],
                ],
                template: function (s, C) {
                  (1 & s &&
                    (e.TgZ(0, "div", 0),
                    e._UZ(1, "app-header"),
                    e.TgZ(2, "div", 1)(3, "h4", 2),
                    e._uU(4),
                    e.ALo(5, "jtranslate"),
                    e.qZA(),
                    e.TgZ(6, "ol")(7, "li"),
                    e._uU(8),
                    e.ALo(9, "jtranslate"),
                    e.qZA(),
                    e.TgZ(10, "li"),
                    e._uU(11),
                    e.ALo(12, "jtranslate"),
                    e.qZA(),
                    e.TgZ(13, "li"),
                    e._uU(14),
                    e.ALo(15, "jtranslate"),
                    e.qZA()(),
                    e.TgZ(16, "span", 3),
                    e._uU(17),
                    e.ALo(18, "jtranslate"),
                    e.qZA(),
                    e._UZ(19, "img", 4),
                    e.TgZ(20, "a", 5)(21, "button", 6),
                    e._uU(22),
                    e.ALo(23, "jtranslate"),
                    e.qZA()()()()),
                    2 & s &&
                      (e.xp6(4),
                      e.Oqu(
                        e.lcZ(
                          5,
                          6,
                          "Instant AI replies for all incoming WhatsApp msgs",
                        ),
                      ),
                      e.xp6(4),
                      e.Oqu(
                        e.lcZ(
                          9,
                          8,
                          "Capture all replies and incoming inquiries",
                        ),
                      ),
                      e.xp6(3),
                      e.Oqu(
                        e.lcZ(
                          12,
                          10,
                          "Support 24x7 replies to incoming queries",
                        ),
                      ),
                      e.xp6(3),
                      e.Oqu(
                        e.lcZ(
                          15,
                          12,
                          "Qualify leads with AI for your sales team",
                        ),
                      ),
                      e.xp6(3),
                      e.Oqu(e.lcZ(18, 14, "Example:")),
                      e.xp6(5),
                      e.hij(" ", e.lcZ(23, 16, "Try Now"), " ")));
                },
                dependencies: [h.G, d.Q],
                styles: [
                  '@charset "UTF-8";.home[_ngcontent-%COMP%]{background-color:#fff;height:100%}.home[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]{margin-left:-320px;color:#999}.home[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:-80px}.home[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}.home[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\1f449  "}',
                ],
              })),
              a
            );
          })(),
        },
      ];
      let l = (() => {
        var n;
        class a {}
        return (
          ((n = a).ɵfac = function (s) {
            return new (s || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({ imports: [p.Bz.forChild(m), p.Bz] })),
          a
        );
      })();
      var g = o(7677);
      let u = (() => {
        var n;
        class a {}
        return (
          ((n = a).ɵfac = function (s) {
            return new (s || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({ imports: [t.ez, i.u5, l, g.e] })),
          a
        );
      })();
    },
    7825: (f, c, o) => {
      o.d(c, { G: () => m });
      var t = o(9291),
        i = o(7228),
        p = o(9955),
        e = o(2572),
        h = o(8043),
        d = o(3427),
        _ = o(858);
      let m = (() => {
        var l;
        class g {
          constructor(n, a, r) {
            ((this.extDataService = n),
              (this.waService = a),
              (this.uiService = r),
              (this.userNameIntitals = (0, t.Flj)(() =>
                this.extDataService.getUserDetails()?.getUserNameIntitals(),
              )),
              (this.downloadContactLink = `/${i.ME.downloadContact()}`),
              (this.reportsLink = `/${i.ME.messagingReport()}`),
              (this.helpLink = `/${i.ME.helpLink()}`),
              (this.msgLink = `/${i.ME.bulkMsgs()}`),
              (this.chatbotLink = `/${i.ME.chatbot()}`),
              (this.userDetailsPage = `/${i.ME.getUserDetails()}`));
          }
          closeWindow() {
            this.waService.closeWindow();
          }
        }
        return (
          ((l = g).ɵfac = function (n) {
            return new (n || l)(t.Y36(p.a), t.Y36(e.o), t.Y36(h.F));
          }),
          (l.ɵcmp = t.Xpm({
            type: l,
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
            template: function (n, a) {
              (1 & n &&
                (t.TgZ(0, "div", 0)(1, "div", 1)(2, "i", 2),
                t.NdJ("click", function () {
                  return a.closeWindow();
                }),
                t.qZA(),
                t.TgZ(3, "div", 3),
                t._UZ(4, "img", 4),
                t.qZA()(),
                t.TgZ(5, "div", 5)(6, "div", 6),
                t._UZ(7, "i", 7),
                t.TgZ(8, "span"),
                t._uU(9),
                t.ALo(10, "jtranslate"),
                t.qZA()(),
                t.TgZ(11, "div", 6),
                t._UZ(12, "i", 8),
                t.TgZ(13, "span"),
                t._uU(14),
                t.ALo(15, "jtranslate"),
                t.qZA()(),
                t.TgZ(16, "div", 9),
                t._UZ(17, "i", 10),
                t.TgZ(18, "span"),
                t._uU(19),
                t.ALo(20, "jtranslate"),
                t.qZA()()(),
                t.TgZ(21, "div", 11)(22, "div", 12),
                t._uU(23),
                t.qZA(),
                t.TgZ(24, "div", 13)(25, "div", 14),
                t._UZ(26, "i", 15),
                t.TgZ(27, "span"),
                t._uU(28),
                t.ALo(29, "jtranslate"),
                t.qZA()(),
                t.TgZ(30, "div", 16),
                t._UZ(31, "i", 17),
                t.TgZ(32, "span"),
                t._uU(33),
                t.ALo(34, "jtranslate"),
                t.qZA()()()()()),
                2 & n &&
                  (t.xp6(6),
                  t.Q6J("routerLink", a.msgLink),
                  t.xp6(3),
                  t.Oqu(t.lcZ(10, 11, "Send messages")),
                  t.xp6(2),
                  t.Q6J("routerLink", a.reportsLink),
                  t.xp6(3),
                  t.Oqu(t.lcZ(15, 13, "Reports")),
                  t.xp6(2),
                  t.Q6J("routerLink", a.helpLink),
                  t.xp6(3),
                  t.Oqu(t.lcZ(20, 15, "Get support")),
                  t.xp6(4),
                  t.hij(" ", a.userNameIntitals(), " "),
                  t.xp6(2),
                  t.Q6J("routerLink", a.userDetailsPage),
                  t.xp6(3),
                  t.Oqu(t.lcZ(29, 17, "Profile")),
                  t.xp6(2),
                  t.Q6J("routerLink", a.downloadContactLink),
                  t.xp6(3),
                  t.Oqu(t.lcZ(34, 19, "Download contacts"))));
            },
            dependencies: [d.rH, d.Od, _.Q],
            styles: [
              ".header[_ngcontent-%COMP%]{padding:0 24px 0 17px;border-bottom:1px solid rgba(0,0,0,.05);display:flex;justify-content:space-between;height:50px}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%;gap:20px}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]{cursor:pointer;transition:border .2s;border-bottom:2px solid transparent;height:100%;color:#03080299}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]:hover{color:#019f53}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap.active[_ngcontent-%COMP%]{color:#019f53;border-bottom:2px solid #019F53}.header[_ngcontent-%COMP%]   .profile-initals[_ngcontent-%COMP%]{display:flex;width:28px;height:28px;padding:7px 6px;justify-content:center;align-items:center;gap:2px;border-radius:4px;background:#F3EECE;color:#03080299}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{padding-bottom:0}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{padding:5px 10px;color:#2e2e2e;font-size:13px;cursor:pointer;border-bottom:1px solid rgba(0,0,0,.08)}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{background:#fafafa}",
            ],
          })),
          g
        );
      })();
    },
  },
]);
