"use strict";
(self.webpackChunkwasender_chrome_extension =
  self.webpackChunkwasender_chrome_extension || []).push([
  [886],
  {
    7825: (f, c, t) => {
      t.d(c, { G: () => _ });
      var e = t(9291),
        a = t(7228),
        l = t(9955),
        g = t(2572),
        d = t(8043),
        p = t(3427),
        u = t(858);
      let _ = (() => {
        var s;
        class n {
          constructor(r, o, m) {
            ((this.extDataService = r),
              (this.waService = o),
              (this.uiService = m),
              (this.userNameIntitals = (0, e.Flj)(() =>
                this.extDataService.getUserDetails()?.getUserNameIntitals(),
              )),
              (this.downloadContactLink = `/${a.ME.downloadContact()}`),
              (this.reportsLink = `/${a.ME.messagingReport()}`),
              (this.helpLink = `/${a.ME.helpLink()}`),
              (this.msgLink = `/${a.ME.bulkMsgs()}`),
              (this.chatbotLink = `/${a.ME.chatbot()}`),
              (this.userDetailsPage = `/${a.ME.getUserDetails()}`));
          }
          closeWindow() {
            this.waService.closeWindow();
          }
        }
        return (
          ((s = n).ɵfac = function (r) {
            return new (r || s)(e.Y36(l.a), e.Y36(g.o), e.Y36(d.F));
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
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
            template: function (r, o) {
              (1 & r &&
                (e.TgZ(0, "div", 0)(1, "div", 1)(2, "i", 2),
                e.NdJ("click", function () {
                  return o.closeWindow();
                }),
                e.qZA(),
                e.TgZ(3, "div", 3),
                e._UZ(4, "img", 4),
                e.qZA()(),
                e.TgZ(5, "div", 5)(6, "div", 6),
                e._UZ(7, "i", 7),
                e.TgZ(8, "span"),
                e._uU(9),
                e.ALo(10, "jtranslate"),
                e.qZA()(),
                e.TgZ(11, "div", 6),
                e._UZ(12, "i", 8),
                e.TgZ(13, "span"),
                e._uU(14),
                e.ALo(15, "jtranslate"),
                e.qZA()(),
                e.TgZ(16, "div", 9),
                e._UZ(17, "i", 10),
                e.TgZ(18, "span"),
                e._uU(19),
                e.ALo(20, "jtranslate"),
                e.qZA()()(),
                e.TgZ(21, "div", 11)(22, "div", 12),
                e._uU(23),
                e.qZA(),
                e.TgZ(24, "div", 13)(25, "div", 14),
                e._UZ(26, "i", 15),
                e.TgZ(27, "span"),
                e._uU(28),
                e.ALo(29, "jtranslate"),
                e.qZA()(),
                e.TgZ(30, "div", 16),
                e._UZ(31, "i", 17),
                e.TgZ(32, "span"),
                e._uU(33),
                e.ALo(34, "jtranslate"),
                e.qZA()()()()()),
                2 & r &&
                  (e.xp6(6),
                  e.Q6J("routerLink", o.msgLink),
                  e.xp6(3),
                  e.Oqu(e.lcZ(10, 11, "Send messages")),
                  e.xp6(2),
                  e.Q6J("routerLink", o.reportsLink),
                  e.xp6(3),
                  e.Oqu(e.lcZ(15, 13, "Reports")),
                  e.xp6(2),
                  e.Q6J("routerLink", o.helpLink),
                  e.xp6(3),
                  e.Oqu(e.lcZ(20, 15, "Get support")),
                  e.xp6(4),
                  e.hij(" ", o.userNameIntitals(), " "),
                  e.xp6(2),
                  e.Q6J("routerLink", o.userDetailsPage),
                  e.xp6(3),
                  e.Oqu(e.lcZ(29, 17, "Profile")),
                  e.xp6(2),
                  e.Q6J("routerLink", o.downloadContactLink),
                  e.xp6(3),
                  e.Oqu(e.lcZ(34, 19, "Download contacts"))));
            },
            dependencies: [p.rH, p.Od, u.Q],
            styles: [
              ".header[_ngcontent-%COMP%]{padding:0 24px 0 17px;border-bottom:1px solid rgba(0,0,0,.05);display:flex;justify-content:space-between;height:50px}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%;gap:20px}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]{cursor:pointer;transition:border .2s;border-bottom:2px solid transparent;height:100%;color:#03080299}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]:hover{color:#019f53}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap.active[_ngcontent-%COMP%]{color:#019f53;border-bottom:2px solid #019F53}.header[_ngcontent-%COMP%]   .profile-initals[_ngcontent-%COMP%]{display:flex;width:28px;height:28px;padding:7px 6px;justify-content:center;align-items:center;gap:2px;border-radius:4px;background:#F3EECE;color:#03080299}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{padding-bottom:0}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{padding:5px 10px;color:#2e2e2e;font-size:13px;cursor:pointer;border-bottom:1px solid rgba(0,0,0,.08)}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{background:#fafafa}",
            ],
          })),
          n
        );
      })();
    },
    7507: (f, c, t) => {
      (t.r(c), t.d(c, { WAHelpPageModule: () => s }));
      var e = t(6814),
        a = t(6223),
        l = t(3427),
        g = t(1410),
        d = t(9291);
      const p = [{ path: "", component: g.M }];
      let u = (() => {
        var n;
        class i {}
        return (
          ((n = i).ɵfac = function (o) {
            return new (o || n)();
          }),
          (n.ɵmod = d.oAB({ type: n })),
          (n.ɵinj = d.cJS({ imports: [l.Bz.forChild(p), l.Bz] })),
          i
        );
      })();
      var _ = t(7677);
      let s = (() => {
        var n;
        class i {}
        return (
          ((n = i).ɵfac = function (o) {
            return new (o || n)();
          }),
          (n.ɵmod = d.oAB({ type: n })),
          (n.ɵinj = d.cJS({ imports: [e.ez, a.u5, u, _.e] })),
          i
        );
      })();
    },
  },
]);
