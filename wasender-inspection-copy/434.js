"use strict";
(self.webpackChunkwasender_chrome_extension =
  self.webpackChunkwasender_chrome_extension || []).push([
  [434],
  {
    7825: (w, u, e) => {
      e.d(u, { G: () => f });
      var n = e(9291),
        c = e(7228),
        C = e(9955),
        d = e(2572),
        m = e(8043),
        O = e(3427),
        t = e(858);
      let f = (() => {
        var p;
        class _ {
          constructor(s, r, x) {
            ((this.extDataService = s),
              (this.waService = r),
              (this.uiService = x),
              (this.userNameIntitals = (0, n.Flj)(() =>
                this.extDataService.getUserDetails()?.getUserNameIntitals(),
              )),
              (this.downloadContactLink = `/${c.ME.downloadContact()}`),
              (this.reportsLink = `/${c.ME.messagingReport()}`),
              (this.helpLink = `/${c.ME.helpLink()}`),
              (this.msgLink = `/${c.ME.bulkMsgs()}`),
              (this.chatbotLink = `/${c.ME.chatbot()}`),
              (this.userDetailsPage = `/${c.ME.getUserDetails()}`));
          }
          closeWindow() {
            this.waService.closeWindow();
          }
        }
        return (
          ((p = _).ɵfac = function (s) {
            return new (s || p)(n.Y36(C.a), n.Y36(d.o), n.Y36(m.F));
          }),
          (p.ɵcmp = n.Xpm({
            type: p,
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
            template: function (s, r) {
              (1 & s &&
                (n.TgZ(0, "div", 0)(1, "div", 1)(2, "i", 2),
                n.NdJ("click", function () {
                  return r.closeWindow();
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
                2 & s &&
                  (n.xp6(6),
                  n.Q6J("routerLink", r.msgLink),
                  n.xp6(3),
                  n.Oqu(n.lcZ(10, 11, "Send messages")),
                  n.xp6(2),
                  n.Q6J("routerLink", r.reportsLink),
                  n.xp6(3),
                  n.Oqu(n.lcZ(15, 13, "Reports")),
                  n.xp6(2),
                  n.Q6J("routerLink", r.helpLink),
                  n.xp6(3),
                  n.Oqu(n.lcZ(20, 15, "Get support")),
                  n.xp6(4),
                  n.hij(" ", r.userNameIntitals(), " "),
                  n.xp6(2),
                  n.Q6J("routerLink", r.userDetailsPage),
                  n.xp6(3),
                  n.Oqu(n.lcZ(29, 17, "Profile")),
                  n.xp6(2),
                  n.Q6J("routerLink", r.downloadContactLink),
                  n.xp6(3),
                  n.Oqu(n.lcZ(34, 19, "Download contacts"))));
            },
            dependencies: [O.rH, O.Od, t.Q],
            styles: [
              ".header[_ngcontent-%COMP%]{padding:0 24px 0 17px;border-bottom:1px solid rgba(0,0,0,.05);display:flex;justify-content:space-between;height:50px}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%;gap:20px}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]{cursor:pointer;transition:border .2s;border-bottom:2px solid transparent;height:100%;color:#03080299}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]:hover{color:#019f53}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap.active[_ngcontent-%COMP%]{color:#019f53;border-bottom:2px solid #019F53}.header[_ngcontent-%COMP%]   .profile-initals[_ngcontent-%COMP%]{display:flex;width:28px;height:28px;padding:7px 6px;justify-content:center;align-items:center;gap:2px;border-radius:4px;background:#F3EECE;color:#03080299}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{padding-bottom:0}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{padding:5px 10px;color:#2e2e2e;font-size:13px;cursor:pointer;border-bottom:1px solid rgba(0,0,0,.08)}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{background:#fafafa}",
            ],
          })),
          _
        );
      })();
    },
    6626: (w, u, e) => {
      (e.r(u), e.d(u, { OnboardingPageModule: () => Z }));
      var n = e(6223),
        c = e(6814),
        C = e(9862),
        d = e(3427),
        m = e(1410),
        O = e(7228),
        t = e(9291),
        f = e(2572),
        p = e(9955),
        _ = e(2226),
        M = e(6593),
        s = e(858);
      function r(o, g) {
        (1 & o && t._UZ(0, "span", 13), 2 & o && t.Q6J("routerLink", "../"));
      }
      const b = [
        {
          path: "",
          component: (() => {
            var o;
            class g {
              constructor(i, a, P, y, L) {
                ((this.waService = i),
                  (this.extDataService = a),
                  (this.log = P),
                  (this.router = y),
                  (this.sanitizer = L),
                  (this.WaHelpPage = new m.M(
                    this.waService,
                    this.extDataService,
                    this.log,
                  )),
                  (this.onBoardingFrameURL = ""),
                  (this.originalDetails = null),
                  (this.loading = !1),
                  (this.originalDetails =
                    this.extDataService.getUserDetails() ?? null));
                const h = new URL(
                  this.extDataService.appConfig?.onBoardingFrameURL,
                );
                (console.log("Onboarding URL:", h.toString()),
                  (this.onBoardingFrameURL = h.toString()
                    ? this.sanitizer.bypassSecurityTrustResourceUrl(
                        h.toString(),
                      )
                    : ""));
              }
              isFormValid() {
                return !0;
              }
              handleNavigateToBulkMsgs() {
                this.router.navigate([O.ME.bulkMsgs()]);
              }
              closeWindow() {
                this.waService.closeWindow();
              }
            }
            return (
              ((o = g).ɵfac = function (i) {
                return new (i || o)(
                  t.Y36(f.o),
                  t.Y36(p.a),
                  t.Y36(_.m),
                  t.Y36(d.F0),
                  t.Y36(M.H7),
                );
              }),
              (o.ɵcmp = t.Xpm({
                type: o,
                selectors: [["app-onboarding-page"]],
                decls: 19,
                vars: 9,
                consts: [
                  [1, "signup-header"],
                  [1, "d-flex", "a-flex-center", "j-flex-center"],
                  [
                    "class",
                    "fa-kit fa-chevron-left mr5 cp p5 ml5-minus",
                    3,
                    "routerLink",
                    4,
                    "ngIf",
                  ],
                  [
                    "width",
                    "28px",
                    "src",
                    "../../assets/icon/logo.png",
                    "alt",
                    "Logo",
                  ],
                  [1, "pl5"],
                  [1, "close-btn", 3, "title", "click"],
                  [1, "fa-kit", "fa-x", "close-icon"],
                  [1, "header-divider"],
                  [1, "wa-sender-container"],
                  [1, "close-container", 3, "click"],
                  [1, "fa-kit", "fa-x"],
                  [
                    "frameborder",
                    "0",
                    "credentialless",
                    "",
                    2,
                    "height",
                    "85vh",
                    "width",
                    "100%",
                    3,
                    "src",
                  ],
                  [
                    "type",
                    "submit",
                    1,
                    "btn",
                    "btn-submit",
                    "mb50",
                    "p-fixed",
                    "start-50",
                    "translate-middle-x",
                    2,
                    "bottom",
                    "1rem",
                    "width",
                    "calc(100% - 5rem)",
                    "max-width",
                    "500px",
                    3,
                    "disabled",
                    "click",
                  ],
                  [
                    1,
                    "fa-kit",
                    "fa-chevron-left",
                    "mr5",
                    "cp",
                    "p5",
                    "ml5-minus",
                    3,
                    "routerLink",
                  ],
                ],
                template: function (i, a) {
                  (1 & i &&
                    (t.TgZ(0, "div", 0)(1, "div", 1),
                    t.YNc(2, r, 1, 1, "span", 2),
                    t._UZ(3, "img", 3),
                    t.TgZ(4, "span", 4),
                    t._uU(5, "Sender"),
                    t.qZA()(),
                    t.TgZ(6, "div", 5),
                    t.NdJ("click", function () {
                      return a.closeWindow();
                    }),
                    t.ALo(7, "jtranslate"),
                    t._UZ(8, "i", 6),
                    t.qZA()(),
                    t._UZ(9, "div", 7),
                    t.ynx(10),
                    t.TgZ(11, "div", 8)(12, "div", 9),
                    t.NdJ("click", function () {
                      return a.handleNavigateToBulkMsgs();
                    }),
                    t._UZ(13, "i", 10),
                    t.qZA(),
                    t._UZ(14, "iframe", 11),
                    t.TgZ(15, "button", 12),
                    t.NdJ("click", function () {
                      return a.handleNavigateToBulkMsgs();
                    }),
                    t.TgZ(16, "span"),
                    t._uU(17),
                    t.ALo(18, "jtranslate"),
                    t.qZA()()(),
                    t.BQk()),
                    2 & i &&
                      (t.xp6(2),
                      t.Q6J(
                        "ngIf",
                        null == a.originalDetails
                          ? null
                          : a.originalDetails.number,
                      ),
                      t.xp6(4),
                      t.s9C("title", t.lcZ(7, 5, "Skip to messaging")),
                      t.xp6(8),
                      t.Q6J("src", a.onBoardingFrameURL, t.uOi),
                      t.xp6(1),
                      t.Q6J("disabled", !a.isFormValid() || a.loading),
                      t.xp6(2),
                      t.hij(" ", t.lcZ(18, 7, "Skip to messaging"), " ")));
                },
                dependencies: [c.O5, d.rH, s.Q],
                styles: [
                  ".signup-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:16px 32px}.signup-header[_ngcontent-%COMP%]   .logo-box[_ngcontent-%COMP%]{background:#019F53;border-radius:6px;padding:6px 10px;display:flex;align-items:center;justify-content:center}.signup-header[_ngcontent-%COMP%]   .logo-box[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]{color:#fff;font-weight:700;font-size:14px}.signup-header[_ngcontent-%COMP%]   .fa-chevron-double-right[_ngcontent-%COMP%]{color:#000;font-size:16px}.signup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{cursor:pointer;border-radius:24px;background:#F1F1F1;display:flex;padding:6px;justify-content:center;align-items:center;font-size:12px}.header-divider[_ngcontent-%COMP%]{height:1px;background:rgba(0,0,0,.08);width:100%}.wa-sender-container[_ngcontent-%COMP%]{display:flex;padding-top:4px;justify-content:center}.wa-sender-container[_ngcontent-%COMP%]   .close-container[_ngcontent-%COMP%]{width:40px;height:40px;position:fixed;right:8px;top:78px;cursor:pointer;color:#000}.wa-sender-container[_ngcontent-%COMP%]   .wa-sender-card[_ngcontent-%COMP%]{width:calc(100% - 200px);max-width:500px}.wa-sender-container[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]{border-radius:24px;display:flex;padding:12px 16px;justify-content:center;align-items:center;gap:10px;width:100%;cursor:pointer;border:1px solid rgba(0,0,0,.05);background:#FFF;margin-bottom:12px}.wa-sender-container[_ngcontent-%COMP%]   .option.active[_ngcontent-%COMP%]{border:1px solid #019F53;background:rgba(1,159,83,.05)}.wa-sender-container[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:hover{background-color:#fafafa}.wa-sender-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#000;font-size:24px;font-weight:600;text-align:center;display:flex;align-items:center;gap:4px;justify-content:center;margin-bottom:8px}.wa-sender-container[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:32px;cursor:pointer}.wa-sender-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:#03080299;font-size:14px;font-weight:400;text-align:center}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]{margin-top:40px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-club[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:flex-start}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:400}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(.phone), .wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group.error[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]{border-color:#df0000!important;background:rgba(255,0,0,.1215686275)!important}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group.error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:red}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#030802;font-size:12px;height:auto;margin-bottom:6px;display:block}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   app-dial-code-picker[_ngcontent-%COMP%]{background:rgba(3,8,2,.06);display:flex;padding:0 12px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:#FFF;border:none!important;outline:none!important;width:100%;box-shadow:none!important;padding:0!important;height:auto}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(.phone), .wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]{display:flex;padding:14px 20px!important;align-self:stretch;border-radius:8px;border:1px solid rgba(3,8,2,.1)!important;background:#FFF!important;width:100%}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]{padding:0!important;border-radius:8px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]   app-dial-code-picker[_ngcontent-%COMP%]{border-radius:8px 0 0 8px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:12px 16px!important;border-radius:0 8px 8px 0}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]{background:#F8F8F8;border-radius:8px;border:1px solid rgba(3,8,2,.08);padding:20px 24px;margin:24px 0}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .tips-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#030802;margin-bottom:12px;margin-top:0}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .tips-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0 0 16px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .tips-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:13px;color:#030802;margin-bottom:8px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .tips-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%]{font-weight:700;background:#019F53;color:#fff;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .no-spam-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:20px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .no-spam-badge[_ngcontent-%COMP%]   .shield-icon[_ngcontent-%COMP%]{font-size:20px!important;color:#019f53}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .no-spam-badge[_ngcontent-%COMP%]   .no-spam-text[_ngcontent-%COMP%]{color:#019f53;font-weight:600;font-size:12px;letter-spacing:.5px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .phone-group[_ngcontent-%COMP%]{margin-bottom:0}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .phone-group[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]{background:#FFF!important}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]{display:flex;gap:16px;margin-top:12px;flex-wrap:wrap}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;color:#d32f2f!important}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{width:18px;height:18px;cursor:pointer;margin:0;accent-color:#d32f2f}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}.wa-sender-container[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]{width:100%;margin-top:24px;margin-bottom:16px;border-radius:8px;padding:16px 24px;font-size:14px;font-weight:500}.wa-sender-container[_ngcontent-%COMP%]   .btn-submit.btn-warning[_ngcontent-%COMP%]{background:#d32f2f!important;border-color:#d32f2f!important;color:#fff!important;font-weight:600}.wa-sender-container[_ngcontent-%COMP%]   .btn-submit.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled){background:#b71c1c!important}.wa-sender-container[_ngcontent-%COMP%]   .usage-policy[_ngcontent-%COMP%]{color:#03080299;text-align:center;font-size:13px}.wa-sender-container[_ngcontent-%COMP%]   .usage-policy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#03080299;text-decoration:underline}.footer-info[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;padding:16px;text-align:center;font-size:13px;color:#03080280}.footer-info[_ngcontent-%COMP%]   .help-link[_ngcontent-%COMP%]{color:#019f53;text-decoration:none;margin-left:12px;font-weight:500}.footer-info[_ngcontent-%COMP%]   .help-link[_ngcontent-%COMP%]:hover{text-decoration:underline}",
                ],
              })),
              g
            );
          })(),
        },
      ];
      let v = (() => {
        var o;
        class g {}
        return (
          ((o = g).ɵfac = function (i) {
            return new (i || o)();
          }),
          (o.ɵmod = t.oAB({ type: o })),
          (o.ɵinj = t.cJS({ imports: [d.Bz.forChild(b), d.Bz] })),
          g
        );
      })();
      var k = e(7677);
      let Z = (() => {
        var o;
        class g {}
        return (
          ((o = g).ɵfac = function (i) {
            return new (i || o)();
          }),
          (o.ɵmod = t.oAB({ type: o })),
          (o.ɵinj = t.cJS({ imports: [c.ez, n.u5, C.JF, v, k.e] })),
          g
        );
      })();
    },
  },
]);
