"use strict";
(self.webpackChunkwasender_chrome_extension =
  self.webpackChunkwasender_chrome_extension || []).push([
  [969],
  {
    969: (Y, _, r) => {
      (r.r(_), r.d(_, { UserDetailsPageModule: () => S }));
      var m = r(6814),
        c = r(6223),
        h = r(9862),
        g = r(3427),
        l = r(5861),
        p = r(3932),
        d = r(7228),
        u = r(4631),
        n = r(9291),
        P = r(9955),
        C = r(2572),
        M = r(7122),
        x = r(2226),
        O = r(8043),
        b = r(4575),
        v = r(4517),
        Z = r(858);
      function w(i, s) {
        (1 & i && n._UZ(0, "span", 9), 2 & i && n.Q6J("routerLink", "../"));
      }
      function A(i, s) {
        (1 & i && (n.TgZ(0, "span"), n._uU(1), n.ALo(2, "jtranslate"), n.qZA()),
          2 & i && (n.xp6(1), n.Oqu(n.lcZ(2, 1, "Enter valid name"))));
      }
      function U(i, s) {
        (1 & i && (n.TgZ(0, "span"), n._uU(1), n.ALo(2, "jtranslate"), n.qZA()),
          2 & i && (n.xp6(1), n.Oqu(n.lcZ(2, 1, "Enter valid WA number"))));
      }
      function N(i, s) {
        if (1 & i) {
          const t = n.EpF();
          (n.TgZ(0, "div", 38)(1, "label", 39)(2, "input", 40),
            n.NdJ("ngModelChange", function (o) {
              n.CHM(t);
              const a = n.oxw(2);
              return n.KtG((a.samePhoneChoice = o));
            }),
            n.qZA(),
            n.TgZ(3, "span", 41),
            n._uU(4),
            n.ALo(5, "jtranslate"),
            n.qZA()(),
            n.TgZ(6, "label", 39)(7, "input", 42),
            n.NdJ("ngModelChange", function (o) {
              n.CHM(t);
              const a = n.oxw(2);
              return n.KtG((a.samePhoneChoice = o));
            }),
            n.qZA(),
            n.TgZ(8, "span", 41),
            n._uU(9),
            n.ALo(10, "jtranslate"),
            n.qZA()()());
        }
        if (2 & i) {
          const t = n.oxw(2);
          (n.xp6(2),
            n.Q6J("ngModel", t.samePhoneChoice),
            n.xp6(2),
            n.Oqu(n.lcZ(5, 4, "It's same")),
            n.xp6(3),
            n.Q6J("ngModel", t.samePhoneChoice),
            n.xp6(2),
            n.Oqu(n.lcZ(10, 6, "Will not share my non-blast number")));
        }
      }
      function y(i, s) {
        if (1 & i) {
          const t = n.EpF();
          (n.TgZ(0, "app-alert", 43),
            n.NdJ("close", function () {
              n.CHM(t);
              const o = n.oxw(2);
              return n.KtG((o.showNumberNotOnWhatsAppAlert = !1));
            }),
            n.TgZ(1, "span", 44),
            n._uU(2),
            n.ALo(3, "jtranslate"),
            n.qZA(),
            n.TgZ(4, "span", 45),
            n._uU(5),
            n.ALo(6, "jtranslate"),
            n.qZA()());
        }
        2 & i &&
          (n.Q6J("alignment", "left")("canClose", !0),
          n.xp6(2),
          n.Oqu(n.lcZ(3, 4, "Number not on WhatsApp")),
          n.xp6(3),
          n.hij(
            " ",
            n.lcZ(
              6,
              6,
              "The number you entered is not registered on WhatsApp. Please enter a valid WhatsApp number.",
            ),
            " ",
          ));
      }
      function T(i, s) {
        (1 & i && (n.TgZ(0, "span"), n._uU(1), n.ALo(2, "jtranslate"), n.qZA()),
          2 & i &&
            (n.xp6(1),
            n.hij(" ", n.lcZ(2, 1, "Signup and Start Messaging"), " ")));
      }
      function D(i, s) {
        (1 & i && (n.TgZ(0, "span"), n._uU(1), n.ALo(2, "jtranslate"), n.qZA()),
          2 & i &&
            (n.xp6(1),
            n.hij(
              " ",
              n.lcZ(2, 1, "I am ok to miss important updates, PROCEED ANYWAY"),
              " ",
            )));
      }
      function j(i, s) {
        1 & i && n._UZ(0, "div", 46);
      }
      const F = function () {
        return { standalone: !0 };
      };
      function k(i, s) {
        if (1 & i) {
          const t = n.EpF();
          (n.ynx(0),
            n.TgZ(1, "div", 10)(2, "div", 11)(3, "h1", 12)(4, "span"),
            n._uU(5),
            n.ALo(6, "jtranslate"),
            n.qZA()(),
            n.TgZ(7, "p", 13),
            n._uU(8),
            n.ALo(9, "jtranslate"),
            n.qZA(),
            n.TgZ(10, "div", 14)(11, "div", 15)(12, "label", 16),
            n._uU(13),
            n.ALo(14, "jtranslate"),
            n.qZA(),
            n.TgZ(15, "input", 17),
            n.NdJ("ngModelChange", function (o) {
              n.CHM(t);
              const a = n.oxw();
              return n.KtG((a.details.name = o));
            })("keyup", function () {
              n.CHM(t);
              const o = n.oxw();
              return n.KtG(o.validateName());
            }),
            n.ALo(16, "jtranslate"),
            n.qZA(),
            n.YNc(17, A, 3, 3, "span", 8),
            n.qZA(),
            n.TgZ(18, "div", 18)(19, "h3", 19),
            n._uU(20),
            n.ALo(21, "jtranslate"),
            n.qZA(),
            n.TgZ(22, "ul", 20)(23, "li")(24, "span", 21),
            n._uU(25, "\u2713"),
            n.qZA(),
            n._uU(26),
            n.ALo(27, "jtranslate"),
            n.qZA(),
            n.TgZ(28, "li")(29, "span", 21),
            n._uU(30, "\u2713"),
            n.qZA(),
            n._uU(31),
            n.ALo(32, "jtranslate"),
            n.qZA(),
            n.TgZ(33, "li")(34, "span", 21),
            n._uU(35, "\u2713"),
            n.qZA(),
            n._uU(36),
            n.ALo(37, "jtranslate"),
            n.qZA(),
            n.TgZ(38, "li")(39, "span", 21),
            n._uU(40, "\u2713"),
            n.qZA(),
            n._uU(41),
            n.ALo(42, "jtranslate"),
            n.qZA()(),
            n.TgZ(43, "div", 22),
            n._UZ(44, "i", 23),
            n.TgZ(45, "span", 24),
            n._uU(46),
            n.ALo(47, "jtranslate"),
            n.qZA()(),
            n.TgZ(48, "div", 25)(49, "label", 26),
            n._uU(50),
            n.ALo(51, "jtranslate"),
            n.qZA(),
            n.TgZ(52, "div", 27)(53, "app-dial-code-picker", 28),
            n.NdJ("valueChange", function (o) {
              n.CHM(t);
              const a = n.oxw();
              return ((a.details.countryInfo = o), n.KtG(a.validatePhone()));
            }),
            n.qZA(),
            n.TgZ(54, "input", 29),
            n.NdJ("ngModelChange", function (o) {
              n.CHM(t);
              const a = n.oxw();
              return n.KtG((a.details.number = o));
            })("keyup", function () {
              n.CHM(t);
              const o = n.oxw();
              return n.KtG(o.validatePhone());
            }),
            n.ALo(55, "jtranslate"),
            n.qZA()(),
            n.YNc(56, U, 3, 3, "span", 8),
            n.YNc(57, N, 11, 8, "div", 30),
            n.qZA()(),
            n.TgZ(58, "input", 31),
            n.NdJ("ngModelChange", function (o) {
              n.CHM(t);
              const a = n.oxw();
              return n.KtG((a.details.email = o));
            }),
            n.qZA(),
            n.TgZ(59, "input", 32),
            n.NdJ("ngModelChange", function (o) {
              n.CHM(t);
              const a = n.oxw();
              return n.KtG((a.details.getTips = o));
            }),
            n.qZA(),
            n.YNc(60, y, 7, 8, "app-alert", 33),
            n.TgZ(61, "button", 34),
            n.NdJ("click", function () {
              n.CHM(t);
              const o = n.oxw();
              return n.KtG(o.addDetails());
            }),
            n.YNc(62, T, 3, 3, "span", 8),
            n.YNc(63, D, 3, 3, "span", 8),
            n.YNc(64, j, 1, 0, "div", 35),
            n.qZA()(),
            n.TgZ(65, "p", 36),
            n._uU(66),
            n.ALo(67, "jtranslate"),
            n.TgZ(68, "a", 37),
            n._uU(69),
            n.ALo(70, "jtranslate"),
            n.qZA(),
            n._uU(71, ". "),
            n.qZA()()(),
            n.BQk());
        }
        if (2 & i) {
          const t = n.oxw();
          (n.xp6(5),
            n.Oqu(
              null != t.originalDetails && t.originalDetails.number
                ? n.lcZ(6, 33, "Profile")
                : "Sign Up",
            ),
            n.xp6(3),
            n.Oqu(n.lcZ(9, 35, "Free Messaging to contacts on WhatsApp")),
            n.xp6(3),
            n.ekj("error", !t.validName),
            n.xp6(2),
            n.Oqu(n.lcZ(14, 37, "Name")),
            n.xp6(2),
            n.Q6J("placeholder", n.lcZ(16, 39, "e.g. Aman Gupta"))(
              "ngModel",
              t.details.name,
            ),
            n.xp6(2),
            n.Q6J("ngIf", !t.validName),
            n.xp6(3),
            n.Oqu(
              n.lcZ(21, 41, "Share your NON-BLAST WA number to get tips on"),
            ),
            n.xp6(6),
            n.hij(" ", n.lcZ(27, 43, "How to prevent number banning"), " "),
            n.xp6(5),
            n.hij(" ", n.lcZ(32, 45, "How to get maximum conversion"), " "),
            n.xp6(5),
            n.hij(" ", n.lcZ(37, 47, "Updates in WhatsApp policy"), " "),
            n.xp6(5),
            n.hij(" ", n.lcZ(42, 49, "New WASender features"), " "),
            n.xp6(5),
            n.Oqu(n.lcZ(47, 51, "WE WILL NEVER SPAM! PROMISE!!")),
            n.xp6(4),
            n.Oqu(n.lcZ(51, 53, "Non-blast/Personal WhatsApp Number")),
            n.xp6(3),
            n.Q6J("countryInfo", t.details.countryInfo)(
              "preferredCountry",
              t.preferredDialCode,
            ),
            n.xp6(1),
            n.Q6J("placeholder", n.lcZ(55, 55, "e.g. 8873520027"))(
              "ngModel",
              t.details.number,
            ),
            n.xp6(2),
            n.Q6J(
              "ngIf",
              !t.validPhone && t.phoneNumber !== t.extUserPhoneNumber,
            ),
            n.xp6(1),
            n.Q6J(
              "ngIf",
              t.phoneNumber === t.extUserPhoneNumber && t.validPhone,
            ),
            n.xp6(1),
            n.Q6J("ngModel", t.details.email),
            n.xp6(1),
            n.Q6J("ngModel", t.details.getTips)("ngModelOptions", n.DdM(61, F)),
            n.xp6(1),
            n.Q6J("ngIf", t.showNumberNotOnWhatsAppAlert),
            n.xp6(1),
            n.ekj("btn-warning", t.phoneNumber === t.extUserPhoneNumber),
            n.Q6J("disabled", !t.isFormValid() || t.loading),
            n.xp6(1),
            n.Q6J("ngIf", t.phoneNumber !== t.extUserPhoneNumber && !t.loading),
            n.xp6(1),
            n.Q6J("ngIf", t.phoneNumber === t.extUserPhoneNumber && !t.loading),
            n.xp6(1),
            n.Q6J("ngIf", t.loading),
            n.xp6(2),
            n.hij(" ", n.lcZ(67, 57, "By clicking, you agree to the"), " "),
            n.xp6(3),
            n.Oqu(n.lcZ(70, 59, "usage policy")));
        }
      }
      const J = [
        {
          path: "",
          component: (() => {
            var i;
            class s {
              constructor(e, o, a, W, I, Q, E) {
                ((this.extDataService = e),
                  (this.router = o),
                  (this.waService = a),
                  (this.userService = W),
                  (this.log = I),
                  (this.uiService = Q),
                  (this.http = E),
                  (this.onBoardingFrameURL = ""),
                  (this.validPhone = !0),
                  (this.validName = !0),
                  (this.samePhoneAllowed = !1),
                  (this.samePhoneChoice = "proceed"),
                  (this.showNumberNotOnWhatsAppAlert = !1));
                const f = (0, p.S)(`+${e?.currentUser?.phoneNumber}`);
                f &&
                  ((this.preferredDialCode = u.CountryDialCodes.find(
                    (z) => z.code === f?.country,
                  )),
                  (this.details =
                    e.getUserDetails() ||
                    new u.UserDetails(
                      e?.currentUser?.phoneNumber,
                      "",
                      "",
                      e?.currentUser.name,
                      !1,
                      !0,
                      this.preferredDialCode,
                      0,
                    )),
                  (this.originalDetails = u.UserDetails.fromJSON(
                    JSON.parse(JSON.stringify(this.details)),
                  )));
              }
              reRouteIfValid() {
                this.details.isValid() &&
                  this.router.navigate([d.ME.bulkMsgs()]);
              }
              validateForm() {
                return (
                  this.validateName(),
                  this.validatePhone(),
                  this.formValidation
                );
              }
              get formValidation() {
                return this.validName && this.validPhone;
              }
              isFormValid() {
                return this.phoneNumber !== this.extUserPhoneNumber
                  ? this.validName && this.validPhone
                  : this.validName &&
                      this.validPhone &&
                      ("same" === this.samePhoneChoice ||
                        "proceed" === this.samePhoneChoice);
              }
              addDetails() {
                var e = this;
                return (0, l.Z)(function* () {
                  if (e.validateForm()) {
                    if (
                      e.phoneNumber !== e.extUserPhoneNumber &&
                      !(yield e.validateNumberOnWhatsApp())
                    )
                      return void (e.showNumberNotOnWhatsAppAlert = !0);
                    e.saveDetails();
                  }
                })();
              }
              validateNumberOnWhatsApp() {
                var e = this;
                return (0, l.Z)(function* () {
                  try {
                    e.loading = !0;
                    const o = e.phoneNumber.replace(/\+/g, "");
                    return yield e.http
                      .post(
                        "https://us-central1-waplugin-34798.cloudfunctions.net/stats/validatenumber",
                        { number: o },
                      )
                      .toPromise();
                  } catch (o) {
                    return (
                      console.error("Error validating WhatsApp number:", o),
                      !0
                    );
                  } finally {
                    e.loading = !1;
                  }
                })();
              }
              get phoneNumber() {
                return `${this.details.countryInfo.dial_code}${this.details.number}`;
              }
              get extUserPhoneNumber() {
                return `${this.extDataService.currentUser.phoneNumber}`;
              }
              validatePhone() {
                (this.showNumberNotOnWhatsAppAlert &&
                  (this.showNumberNotOnWhatsAppAlert = !1),
                  (this.validPhone = !!(
                    "XX" === this.details.countryInfo.code
                      ? (0, p.S)(`+${this.details.number}`)
                      : (0, p.S)(
                          this.phoneNumber,
                          this.details.countryInfo.code,
                        )
                  )?.isValid()));
              }
              validateName() {
                this.validName = !!this.details.name?.trim()?.length;
              }
              closeWindow() {
                this.waService.closeWindow();
              }
              saveDetails() {
                var e = this;
                return (0, l.Z)(function* () {
                  ((e.loading = !0),
                    yield e.userService.saveUserDetails(e.details),
                    yield e.extDataService.setExtAuth());
                  const o = e.getChangedDetails();
                  (e.originalDetails?.number ||
                    (yield e.handleFirstTimeSignup()),
                    e.logProfileEvent(o),
                    (e.loading = !1),
                    (e.onBoardingFrameURL =
                      e.extDataService.appConfig?.onBoardingFrameURL || ""),
                    console.log(
                      "onBoardingFrameURL",
                      e.extDataService.appConfig?.onBoardingFrameURL,
                    ),
                    e.onBoardingFrameURL
                      ? (console.log("Navigating to onboarding page"),
                        e.router.navigate([d.ME.onboardingPage()]))
                      : e.router.navigate([d.ME.bulkMsgs()]));
                })();
              }
              getChangedDetails() {
                return Object.keys(this.details).reduce(
                  (e, o) => (
                    "object" != typeof this.details[o] &&
                      this.details[o] !== this.originalDetails[o] &&
                      ((e[`${o}-oldValue`] = this.originalDetails[o]),
                      (e[`${o}-newValue`] = this.details[o])),
                    e
                  ),
                  {},
                );
              }
              handleFirstTimeSignup() {
                var e = this;
                return (0, l.Z)(function* () {
                  try {
                    (yield e.log.getCookies(),
                      e.log.createLead({
                        fields: e.log.getCookies(),
                        actiontexts: [
                          "Signup done",
                          JSON.stringify(e.log.getCookies(), null, 2),
                        ],
                      }));
                  } catch (o) {
                    console.error("Error in creating lead", o);
                  }
                  try {
                    e.extDataService.getAuth()?.isPro() ||
                      (yield e.userService.activateFreePlan(),
                      setTimeout(() => {
                        e.uiService.refresh();
                      }, 0));
                  } catch (o) {
                    console.error("Error in activating free plan", o);
                  }
                })();
              }
              logProfileEvent(e) {
                this.log.log("profile-event", { ...e });
              }
            }
            return (
              ((i = s).ɵfac = function (e) {
                return new (e || i)(
                  n.Y36(P.a),
                  n.Y36(g.F0),
                  n.Y36(C.o),
                  n.Y36(M.KD),
                  n.Y36(x.m),
                  n.Y36(O.F),
                  n.Y36(h.eN),
                );
              }),
              (i.ɵcmp = n.Xpm({
                type: i,
                selectors: [["app-user-details"]],
                decls: 10,
                vars: 2,
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
                  [1, "close-btn", 3, "click"],
                  [1, "fa-kit", "fa-x", "close-icon"],
                  [1, "header-divider"],
                  [4, "ngIf"],
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
                  [1, "wa-sender-container"],
                  [1, "wa-sender-card"],
                  [1, "title"],
                  [1, "subtitle"],
                  [1, "signup-form"],
                  [1, "form-group"],
                  ["for", "name"],
                  [
                    "id",
                    "name",
                    "name",
                    "name",
                    "type",
                    "text",
                    "required",
                    "",
                    1,
                    "form-control",
                    3,
                    "placeholder",
                    "ngModel",
                    "ngModelChange",
                    "keyup",
                  ],
                  [1, "tips-container"],
                  [1, "tips-title"],
                  [1, "tips-list"],
                  [1, "check-icon"],
                  [1, "no-spam-badge"],
                  [1, "fa-kit", "fa-shield", "shield-icon"],
                  [1, "no-spam-text"],
                  [1, "form-group", "phone-group"],
                  ["for", "phoneNumber"],
                  [1, "phone-input"],
                  [3, "countryInfo", "preferredCountry", "valueChange"],
                  [
                    "id",
                    "phoneNumber",
                    "name",
                    "phoneNumber",
                    "type",
                    "tel",
                    "required",
                    "",
                    "autocomplete",
                    "off",
                    1,
                    "form-control",
                    "phone",
                    3,
                    "placeholder",
                    "ngModel",
                    "ngModelChange",
                    "keyup",
                  ],
                  ["class", "radio-group", 4, "ngIf"],
                  ["type", "hidden", 3, "ngModel", "ngModelChange"],
                  [
                    "type",
                    "hidden",
                    3,
                    "ngModel",
                    "ngModelOptions",
                    "ngModelChange",
                  ],
                  [
                    "class",
                    "mb10 d-block",
                    "tone",
                    "error",
                    3,
                    "alignment",
                    "canClose",
                    "close",
                    4,
                    "ngIf",
                  ],
                  [
                    "type",
                    "submit",
                    1,
                    "btn",
                    "btn-submit",
                    3,
                    "disabled",
                    "click",
                  ],
                  ["class", "loader theme ml5", 4, "ngIf"],
                  [1, "usage-policy"],
                  ["href", "https://wasender.com/tnc", "target", "_blank"],
                  [1, "radio-group"],
                  [1, "radio-option"],
                  [
                    "type",
                    "radio",
                    "name",
                    "phoneChoice",
                    "id",
                    "sameChoice",
                    "value",
                    "same",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [1, "radio-label"],
                  [
                    "type",
                    "radio",
                    "name",
                    "phoneChoice",
                    "id",
                    "proceedChoice",
                    "value",
                    "proceed",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [
                    "tone",
                    "error",
                    1,
                    "mb10",
                    "d-block",
                    3,
                    "alignment",
                    "canClose",
                    "close",
                  ],
                  ["head", ""],
                  ["description", ""],
                  [1, "loader", "theme", "ml5"],
                ],
                template: function (e, o) {
                  (1 & e &&
                    (n.TgZ(0, "div", 0)(1, "div", 1),
                    n.YNc(2, w, 1, 1, "span", 2),
                    n._UZ(3, "img", 3),
                    n.TgZ(4, "span", 4),
                    n._uU(5, "Sender"),
                    n.qZA()(),
                    n.TgZ(6, "div", 5),
                    n.NdJ("click", function () {
                      return o.closeWindow();
                    }),
                    n._UZ(7, "i", 6),
                    n.qZA()(),
                    n._UZ(8, "div", 7),
                    n.YNc(9, k, 72, 62, "ng-container", 8)),
                    2 & e &&
                      (n.xp6(2),
                      n.Q6J(
                        "ngIf",
                        null == o.originalDetails
                          ? null
                          : o.originalDetails.number,
                      ),
                      n.xp6(7),
                      n.Q6J("ngIf", o.details)));
                },
                dependencies: [
                  m.O5,
                  c.Fj,
                  c._,
                  c.JJ,
                  c.Q7,
                  c.On,
                  g.rH,
                  b.U,
                  v.w,
                  Z.Q,
                ],
                styles: [
                  ".signup-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:16px 32px}.signup-header[_ngcontent-%COMP%]   .logo-box[_ngcontent-%COMP%]{background:#019F53;border-radius:6px;padding:6px 10px;display:flex;align-items:center;justify-content:center}.signup-header[_ngcontent-%COMP%]   .logo-box[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]{color:#fff;font-weight:700;font-size:14px}.signup-header[_ngcontent-%COMP%]   .fa-chevron-double-right[_ngcontent-%COMP%]{color:#000;font-size:16px}.signup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{cursor:pointer;border-radius:24px;background:#F1F1F1;display:flex;padding:6px;justify-content:center;align-items:center;font-size:12px}.header-divider[_ngcontent-%COMP%]{height:1px;background:rgba(0,0,0,.08);width:100%}.wa-sender-container[_ngcontent-%COMP%]{display:flex;padding-top:4px;justify-content:center}.wa-sender-container[_ngcontent-%COMP%]   .close-container[_ngcontent-%COMP%]{width:40px;height:40px;position:fixed;right:50px;top:50px;cursor:pointer;color:#000}.wa-sender-container[_ngcontent-%COMP%]   .wa-sender-card[_ngcontent-%COMP%]{width:calc(100% - 200px);max-width:500px}.wa-sender-container[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]{border-radius:24px;display:flex;padding:12px 16px;justify-content:center;align-items:center;gap:10px;width:100%;cursor:pointer;border:1px solid rgba(0,0,0,.05);background:#FFF;margin-bottom:12px}.wa-sender-container[_ngcontent-%COMP%]   .option.active[_ngcontent-%COMP%]{border:1px solid #019F53;background:rgba(1,159,83,.05)}.wa-sender-container[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:hover{background-color:#fafafa}.wa-sender-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#000;font-size:24px;font-weight:600;text-align:center;display:flex;align-items:center;gap:4px;justify-content:center;margin-bottom:8px}.wa-sender-container[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:32px;cursor:pointer}.wa-sender-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:#03080299;font-size:14px;font-weight:400;text-align:center}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]{margin-top:40px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-club[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:flex-start}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:400}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(.phone), .wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group.error[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]{border-color:#df0000!important;background:rgba(255,0,0,.1215686275)!important}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group.error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:red}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#030802;font-size:12px;height:auto;margin-bottom:6px;display:block}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   app-dial-code-picker[_ngcontent-%COMP%]{background:rgba(3,8,2,.06);display:flex;padding:0 12px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:#FFF;border:none!important;outline:none!important;width:100%;box-shadow:none!important;padding:0!important;height:auto}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(.phone), .wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]{display:flex;padding:14px 20px!important;align-self:stretch;border-radius:8px;border:1px solid rgba(3,8,2,.1)!important;background:#FFF!important;width:100%}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]{padding:0!important;border-radius:8px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]   app-dial-code-picker[_ngcontent-%COMP%]{border-radius:8px 0 0 8px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:12px 16px!important;border-radius:0 8px 8px 0}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]{background:#F8F8F8;border-radius:8px;border:1px solid rgba(3,8,2,.08);padding:20px 24px;margin:24px 0}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .tips-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#030802;margin-bottom:12px;margin-top:0}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .tips-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0 0 16px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .tips-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:13px;color:#030802;margin-bottom:8px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .tips-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%]{font-weight:700;background:#019F53;color:#fff;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .no-spam-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:20px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .no-spam-badge[_ngcontent-%COMP%]   .shield-icon[_ngcontent-%COMP%]{font-size:20px!important;color:#019f53}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .no-spam-badge[_ngcontent-%COMP%]   .no-spam-text[_ngcontent-%COMP%]{color:#019f53;font-weight:600;font-size:12px;letter-spacing:.5px}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .phone-group[_ngcontent-%COMP%]{margin-bottom:0}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .tips-container[_ngcontent-%COMP%]   .phone-group[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]{background:#FFF!important}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]{display:flex;gap:16px;margin-top:12px;flex-wrap:wrap}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;color:#d32f2f!important}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{width:18px;height:18px;cursor:pointer;margin:0;accent-color:#d32f2f}.wa-sender-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}.wa-sender-container[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]{width:100%;margin-top:24px;margin-bottom:16px;border-radius:8px;padding:16px 24px;font-size:14px;font-weight:500}.wa-sender-container[_ngcontent-%COMP%]   .btn-submit.btn-warning[_ngcontent-%COMP%]{background:#d32f2f!important;border-color:#d32f2f!important;color:#fff!important;font-weight:600}.wa-sender-container[_ngcontent-%COMP%]   .btn-submit.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled){background:#b71c1c!important}.wa-sender-container[_ngcontent-%COMP%]   .usage-policy[_ngcontent-%COMP%]{color:#03080299;text-align:center;font-size:13px}.wa-sender-container[_ngcontent-%COMP%]   .usage-policy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#03080299;text-decoration:underline}.footer-info[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;padding:16px;text-align:center;font-size:13px;color:#03080280}.footer-info[_ngcontent-%COMP%]   .help-link[_ngcontent-%COMP%]{color:#019f53;text-decoration:none;margin-left:12px;font-weight:500}.footer-info[_ngcontent-%COMP%]   .help-link[_ngcontent-%COMP%]:hover{text-decoration:underline}",
                ],
              })),
              s
            );
          })(),
        },
      ];
      let L = (() => {
        var i;
        class s {}
        return (
          ((i = s).ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵmod = n.oAB({ type: i })),
          (i.ɵinj = n.cJS({ imports: [g.Bz.forChild(J), g.Bz] })),
          s
        );
      })();
      var q = r(7677);
      let S = (() => {
        var i;
        class s {}
        return (
          ((i = s).ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵmod = n.oAB({ type: i })),
          (i.ɵinj = n.cJS({ imports: [m.ez, c.u5, h.JF, L, q.e] })),
          s
        );
      })();
    },
  },
]);
