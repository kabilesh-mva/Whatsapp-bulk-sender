"use strict";
(self.webpackChunkwasender_chrome_extension =
  self.webpackChunkwasender_chrome_extension || []).push([
  [572],
  {
    572: (k, m, s) => {
      (s.r(m), s.d(m, { BulkContactDownloadPageModule: () => W }));
      var o = s(6814),
        p = s(6223),
        h = s(3427),
        f = s(5861),
        v = s(7228),
        u = s(2017),
        t = s(9291),
        O = s(2572),
        g = s(9955),
        w = s(8043),
        C = s(6979),
        _ = s(7825),
        d = s(858),
        x = s(326);
      const T = ["dropdown"];
      function Z(a, i) {
        if (
          (1 & a && (t.TgZ(0, "span"), t._uU(1), t.ALo(2, "keys"), t.qZA()),
          2 & a)
        ) {
          const l = t.oxw();
          let n;
          (t.xp6(1),
            t.AsE(
              " (",
              null == (n = t.lcZ(2, 2, l.selectedOptions)) ? null : n.length,
              "/",
              null == l.groups ? null : l.groups.length,
              ") ",
            ));
        }
      }
      function b(a, i) {
        if ((1 & a && (t.TgZ(0, "span"), t._uU(1), t.qZA()), 2 & a)) {
          const l = t.oxw();
          (t.xp6(1),
            t.hij(" (", null == l.groups ? null : l.groups.length, ") "));
        }
      }
      function D(a, i) {
        1 & a && t._UZ(0, "i", 15);
      }
      function A(a, i) {
        if (1 & a) {
          const l = t.EpF();
          (t.TgZ(0, "span", 16),
            t._uU(1),
            t.TgZ(2, "i", 17),
            t.NdJ("click", function () {
              const c = t.CHM(l).$implicit,
                r = t.oxw(3);
              return t.KtG(r.selectDelselectOption(r.selectedOptions[c]));
            }),
            t.qZA()());
        }
        if (2 & a) {
          const l = i.$implicit,
            n = t.oxw(3);
          (t.xp6(1),
            t.hij(
              " ",
              null == n.selectedOptions[l] ? null : n.selectedOptions[l].name,
              " ",
            ));
        }
      }
      function P(a, i) {
        if (
          (1 & a &&
            (t.TgZ(0, "span", 16),
            t._uU(1),
            t.ALo(2, "keys"),
            t.ALo(3, "jtranslate"),
            t.qZA()),
          2 & a)
        ) {
          const l = t.oxw(3);
          let n;
          (t.xp6(1),
            t.AsE(
              " + ",
              (null == (n = t.lcZ(2, 2, l.selectedOptions)) ? null : n.length) -
                50,
              " ",
              t.lcZ(3, 4, "more"),
              " ",
            ));
        }
      }
      function M(a, i) {
        if (1 & a) {
          const l = t.EpF();
          (t.TgZ(0, "div", 10),
            t.YNc(1, D, 1, 0, "i", 11),
            t.ALo(2, "keys"),
            t.YNc(3, A, 3, 1, "span", 12),
            t.ALo(4, "slice"),
            t.ALo(5, "keys"),
            t.YNc(6, P, 4, 6, "span", 13),
            t.ALo(7, "keys"),
            t.TgZ(8, "input", 14),
            t.NdJ("click", function () {
              t.CHM(l);
              const e = t.oxw(2);
              return t.KtG(e.dropdownOpen());
            })("ngModelChange", function (e) {
              t.CHM(l);
              const c = t.oxw(2);
              return t.KtG((c.seachString = e));
            })("keydown.backspace", function () {
              t.CHM(l);
              const e = t.oxw(2);
              return t.KtG(e.removeLastOption());
            })("keyup", function () {
              t.CHM(l);
              const e = t.oxw(2);
              return t.KtG(e.updateView());
            })("keyup.enter", function () {
              t.CHM(l);
              const e = t.oxw(2);
              return t.KtG(e.addSingleOptions());
            }),
            t.ALo(9, "jtranslate"),
            t.qZA()());
        }
        if (2 & a) {
          const l = t.oxw(2);
          let n, e;
          (t.xp6(1),
            t.Q6J(
              "ngIf",
              !(null != (n = t.lcZ(2, 5, l.selectedOptions)) && n.length),
            ),
            t.xp6(2),
            t.Q6J(
              "ngForOf",
              t.Dn7(4, 7, t.lcZ(5, 11, l.selectedOptions), 0, 50),
            ),
            t.xp6(3),
            t.Q6J(
              "ngIf",
              (null == (e = t.lcZ(7, 13, l.selectedOptions))
                ? null
                : e.length) > 50,
            ),
            t.xp6(2),
            t.Q6J("ngModel", l.seachString)(
              "placeholder",
              t.lcZ(9, 15, "Search"),
            ));
        }
      }
      function L(a, i) {
        if (1 & a) {
          const l = t.EpF();
          (t.TgZ(0, "div", 18),
            t.NdJ("click", function () {
              const c = t.CHM(l).$implicit,
                r = t.oxw(3);
              return t.KtG(r.selectDelselectOption(c));
            }),
            t._UZ(1, "input", 19),
            t.TgZ(2, "label", 22),
            t._uU(3),
            t.qZA()());
        }
        if (2 & a) {
          const l = i.$implicit,
            n = t.oxw(3);
          (t.xp6(1),
            t.Q6J("name", "all-contacts-" + l.id)(
              "checked",
              n.selectedOptions[null == l ? null : l.id],
            ),
            t.xp6(1),
            t.Q6J("for", "all-contact-" + l.id),
            t.xp6(1),
            t.Oqu(null == l ? null : l.name));
        }
      }
      function y(a, i) {
        if (1 & a) {
          const l = t.EpF();
          (t.TgZ(0, "form")(1, "div", 18),
            t.NdJ("click", function () {
              t.CHM(l);
              const e = t.oxw(2);
              return t.KtG(e.selectAllFiltered());
            }),
            t._UZ(2, "input", 19),
            t.TgZ(3, "label", 20),
            t._uU(4),
            t.ALo(5, "jtranslate"),
            t.qZA()(),
            t.YNc(6, L, 4, 4, "div", 21),
            t.qZA());
        }
        if (2 & a) {
          const l = t.oxw(2);
          (t.xp6(2),
            t.Q6J("name", "all-contacts")("checked", l.allSelected),
            t.xp6(1),
            t.Q6J("for", "all-contact"),
            t.xp6(1),
            t.Oqu(t.lcZ(5, 5, "Select all")),
            t.xp6(2),
            t.Q6J("ngForOf", l.filteredOptions));
        }
      }
      const E = function (a) {
          return { label: a };
        },
        B = function (a) {
          return { term: a };
        };
      function J(a, i) {
        if (
          (1 & a &&
            (t.ynx(0),
            t.TgZ(1, "span"),
            t._uU(2),
            t.ALo(3, "jtranslate"),
            t.TgZ(4, "b")(5, "i"),
            t._uU(6),
            t.ALo(7, "jtranslate"),
            t.qZA()()(),
            t.BQk()),
          2 & a)
        ) {
          const l = t.oxw(2);
          (t.xp6(2),
            t.hij(
              " ",
              t.xi3(3, 2, "No {{label}} found", t.VKq(8, E, l.label)),
              " ",
            ),
            t.xp6(4),
            t.hij(
              " ",
              l.seachString
                ? t.xi3(7, 5, "for {{term}}", t.VKq(10, B, l.seachString))
                : "",
              " ",
            ));
        }
      }
      function U(a, i) {
        if (
          (1 & a &&
            (t.TgZ(0, "div", 5),
            t._UZ(1, "div", 6, 7),
            t.YNc(3, M, 10, 17, "div", 8),
            t.TgZ(4, "div", 9),
            t.YNc(5, y, 7, 7, "form", 3),
            t.YNc(6, J, 8, 12, "ng-container", 3),
            t.qZA()()),
          2 & a)
        ) {
          const l = t.oxw();
          (t.xp6(3),
            t.Q6J("ngIf", null == l.groups ? null : l.groups.length),
            t.xp6(2),
            t.Q6J(
              "ngIf",
              null == l.filteredOptions ? null : l.filteredOptions.length,
            ),
            t.xp6(1),
            t.Q6J(
              "ngIf",
              !(null != l.filteredOptions && l.filteredOptions.length),
            ));
        }
      }
      let S = (() => {
        var a;
        class i {
          constructor() {
            ((this.label = ""),
              (this.groups = []),
              (this.dynamic = !1),
              (this.onOptionsEdit = new t.vpe()),
              (this.onEnableChange = new t.vpe()),
              (this.selectItem = !1),
              (this.selectedOptions = {}),
              (this.seachString = ""));
          }
          dropdownOpen() {
            (this.onEnableChange.emit(this.selectItem),
              setTimeout(() => {
                this.dropdown.nativeElement.click();
              }, 0));
          }
          ngOnChanges(n) {
            this.updateView();
          }
          removeLastOption() {
            const n = Object.values(this.selectedOptions),
              e = n?.[n?.length - 1];
            e &&
              !this.seachString?.length &&
              setTimeout(() => {
                ((this.seachString = e.name),
                  delete this.selectedOptions[e?.id],
                  this.updateView());
              }, 0);
          }
          addSingleOptions() {
            let n = this.filteredOptions?.find(
              (e) =>
                e.name?.toLowerCase()?.trim() ===
                this.seachString?.toLowerCase()?.trim(),
            );
            (!n &&
              1 === this.filteredOptions?.length &&
              (n = this.filteredOptions[0]),
              n &&
                !this.selectedOptions[n?.id] &&
                ((this.seachString = ""),
                (this.selectedOptions[n?.id] = n),
                this.updateView()));
          }
          selectAllFiltered() {
            const n = this.filteredOptions.some(
              (e) => !this.selectedOptions[e?.id],
            );
            ((this.allSelected = !n),
              this.filteredOptions.forEach(
                n
                  ? (e) => {
                      this.selectedOptions[e?.id] = e;
                    }
                  : (e) => {
                      delete this.selectedOptions[e?.id];
                    },
              ),
              this.updateView());
          }
          selectDelselectOption(n) {
            (this.selectedOptions[n?.id]
              ? delete this.selectedOptions[n?.id]
              : (this.selectedOptions[n?.id] = n),
              this.updateView());
          }
          updateView() {
            this.filteredOptions = this.groups?.filter((e) =>
              e?.name
                ?.toLowerCase()
                ?.trim()
                .includes(this.seachString?.toLowerCase()?.trim()),
            );
            const n = this.filteredOptions?.some(
              (e) => !this.selectedOptions[e?.id],
            );
            ((this.allSelected = !n),
              this.onOptionsEdit.emit(this.selectedOptions));
          }
        }
        return (
          ((a = i).ɵfac = function (n) {
            return new (n || a)();
          }),
          (a.ɵcmp = t.Xpm({
            type: a,
            selectors: [["app-tag-dropdown"]],
            viewQuery: function (n, e) {
              if ((1 & n && t.Gf(T, 5), 2 & n)) {
                let c;
                t.iGM((c = t.CRH())) && (e.dropdown = c.first);
              }
            },
            inputs: { label: "label", groups: "groups", dynamic: "dynamic" },
            outputs: {
              onOptionsEdit: "onOptionsEdit",
              onEnableChange: "onEnableChange",
            },
            features: [t.TTD],
            decls: 9,
            vars: 11,
            consts: [
              [1, "flex", "a-flex-center", "w-fit-content", "cp", 3, "click"],
              ["type", "checkbox", 1, "mt0", 3, "name", "checked"],
              [1, "fwn", "ml0", "mb0", 3, "for"],
              [4, "ngIf"],
              ["class", "all-groups mt10 mb10 dropdown", 4, "ngIf"],
              [1, "all-groups", "mt10", "mb10", "dropdown"],
              ["data-toggle", "dropdown"],
              ["dropdown", ""],
              ["class", "search-box", 4, "ngIf"],
              [1, "groups", "dropdown-menu", "w100p"],
              [1, "search-box"],
              ["class", "fa-kit fa-search", 4, "ngIf"],
              ["class", "group-tag", 4, "ngFor", "ngForOf"],
              ["class", "group-tag", 4, "ngIf"],
              [
                "type",
                "text",
                1,
                "search-input",
                3,
                "ngModel",
                "placeholder",
                "click",
                "ngModelChange",
                "keydown.backspace",
                "keyup",
                "keyup.enter",
              ],
              [1, "fa-kit", "fa-search"],
              [1, "group-tag"],
              [1, "fa-kit", "fa-x", 3, "click"],
              [3, "click"],
              ["type", "checkbox", 3, "name", "checked"],
              [3, "for"],
              [3, "click", 4, "ngFor", "ngForOf"],
              [1, "fwn", 3, "for"],
            ],
            template: function (n, e) {
              if (
                (1 & n &&
                  (t.TgZ(0, "div", 0),
                  t.NdJ("click", function () {
                    return ((e.selectItem = !e.selectItem), e.dropdownOpen());
                  }),
                  t._UZ(1, "input", 1),
                  t.TgZ(2, "label", 2),
                  t._uU(3),
                  t.YNc(4, Z, 3, 4, "span", 3),
                  t.ALo(5, "keys"),
                  t.YNc(6, b, 2, 1, "span", 3),
                  t.ALo(7, "keys"),
                  t.qZA()(),
                  t.YNc(8, U, 7, 3, "div", 4)),
                2 & n)
              ) {
                let c, r;
                (t.xp6(1),
                  t.Q6J("name", "all-" + e.label)("checked", e.selectItem),
                  t.xp6(1),
                  t.Q6J("for", "all-" + e.label),
                  t.xp6(1),
                  t.hij(" ", e.label, " "),
                  t.xp6(1),
                  t.Q6J(
                    "ngIf",
                    e.selectItem &&
                      (null == (c = t.lcZ(5, 7, e.selectedOptions))
                        ? null
                        : c.length),
                  ),
                  t.xp6(2),
                  t.Q6J(
                    "ngIf",
                    (!e.selectItem ||
                      !(
                        null != (r = t.lcZ(7, 9, e.selectedOptions)) && r.length
                      )) &&
                      (null == e.groups ? null : e.groups.length),
                  ),
                  t.xp6(2),
                  t.Q6J("ngIf", e.selectItem));
              }
            },
            dependencies: [
              o.sg,
              o.O5,
              p._Y,
              p.Fj,
              p.JJ,
              p.JL,
              p.On,
              p.F,
              o.OU,
              d.Q,
              x.V,
            ],
            styles: [
              ".all-groups[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{border-radius:5px;display:flex;padding:8px 10px;align-items:center;border:.5px solid #BEBEBE;flex-wrap:wrap;gap:4px;max-height:100px;overflow:auto}.all-groups[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .group-tag[_ngcontent-%COMP%]{border-radius:4px;display:flex;padding:4px;align-items:center;gap:4px;font-size:12px;color:#818181;background:#F5F5F5}.all-groups[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;outline:none;flex:1 0 0}.all-groups[_ngcontent-%COMP%]   .groups[_ngcontent-%COMP%]{max-height:300px;overflow:auto;padding:10px}input[_ngcontent-%COMP%]{accent-color:black}label[_ngcontent-%COMP%]{margin:0}",
            ],
          })),
          i
        );
      })();
      const j = ["groupDropdown"];
      function I(a, i) {
        if (1 & a) {
          const l = t.EpF();
          (t.TgZ(0, "button", 11),
            t.NdJ("click", function () {
              t.CHM(l);
              const e = t.oxw();
              return t.KtG(e.downloadContacts());
            }),
            t._UZ(1, "i", 12),
            t._uU(2),
            t.ALo(3, "jtranslate"),
            t.qZA());
        }
        2 & a && (t.xp6(2), t.hij(" ", t.lcZ(3, 1, "Download"), " "));
      }
      function N(a, i) {
        1 & a && t._UZ(0, "div", 17);
      }
      function Q(a, i) {
        if (1 & a) {
          const l = t.EpF();
          (t.TgZ(0, "span", 13),
            t.NdJ("click", function () {
              t.CHM(l);
              const e = t.oxw();
              return t.KtG(e.sendMessage());
            }),
            t.TgZ(1, "span", 14),
            t._uU(2),
            t.ALo(3, "jtranslate"),
            t.qZA(),
            t._UZ(4, "i", 15),
            t.YNc(5, N, 1, 0, "div", 16),
            t.qZA());
        }
        if (2 & a) {
          const l = t.oxw();
          (t.ekj("pe-none", l.loading),
            t.xp6(2),
            t.hij(" ", t.lcZ(3, 4, "Send message"), " "),
            t.xp6(3),
            t.Q6J("ngIf", l.loading));
        }
      }
      function F(a, i) {
        (1 & a &&
          (t.ynx(0),
          t._uU(1),
          t.ALo(2, "jtranslate"),
          t.TgZ(3, "b"),
          t._uU(4),
          t.ALo(5, "jtranslate"),
          t.qZA(),
          t.BQk()),
          2 & a &&
            (t.xp6(1),
            t.hij(" ", t.lcZ(2, 2, "Buy pro to"), " "),
            t.xp6(3),
            t.Oqu(t.lcZ(5, 4, "download contacts"))));
      }
      function G(a, i) {
        (1 & a &&
          (t.ynx(0),
          t._uU(1),
          t.ALo(2, "jtranslate"),
          t.TgZ(3, "b"),
          t._uU(4),
          t.ALo(5, "jtranslate"),
          t.qZA(),
          t.BQk()),
          2 & a &&
            (t.xp6(1),
            t.hij(" ", t.lcZ(2, 2, "Buy pro to"), " "),
            t.xp6(3),
            t.Oqu(t.lcZ(5, 4, "directly send messages from here"))));
      }
      function Y(a, i) {
        if (1 & a) {
          const l = t.EpF();
          (t.TgZ(0, "app-pro-warn", 18),
            t.NdJ("close", function () {
              t.CHM(l);
              const e = t.oxw();
              return t.KtG((e.showProType = null));
            }),
            t.YNc(1, F, 6, 6, "ng-container", 19),
            t.YNc(2, G, 6, 6, "ng-container", 19),
            t.qZA());
        }
        if (2 & a) {
          const l = t.oxw();
          (t.Q6J("type", l.showProType),
            t.xp6(1),
            t.Q6J("ngIf", l.showProType === l.proWarnType.CONTACT_DOWNLOAD),
            t.xp6(1),
            t.Q6J(
              "ngIf",
              l.showProType === l.proWarnType.CONTACT_SEND_MESSAGES,
            ));
        }
      }
      const q = [
        {
          path: "",
          component: (() => {
            var a;
            class i {
              constructor(n, e, c, r) {
                ((this.waService = n),
                  (this.extDataService = e),
                  (this.uiService = c),
                  (this.router = r),
                  (this.downloadAllContact = !1),
                  (this.downloadGroupContact = !1),
                  (this.groups = []),
                  (this.downloadGroups = {}),
                  (this.downloadLabels = {}),
                  (this.showProType = ""),
                  (this.proWarnType = u.B),
                  (this.downloadAllChatContact = !1),
                  (this.bulkMessageLink = `/${v.ME.bulkMsgs()}`));
              }
              ngOnInit() {
                var n = this;
                return (0, f.Z)(function* () {
                  ((n.groups = yield n.waService.getAllGroup()),
                    (n.labels = yield n.waService.getLabels()));
                })();
              }
              downloadContacts() {
                var n = this;
                return (0, f.Z)(function* () {
                  if (n.extDataService.isPro()) {
                    let e = n.getDownloadDescriptor();
                    yield n.waService.downloadContacts(e);
                  } else n.showProType = u.B.CONTACT_DOWNLOAD;
                })();
              }
              getDownloadDescriptor() {
                return {
                  allContacts: this.downloadAllContact,
                  allChatContacts: this.downloadAllChatContact,
                  groupContacts: this.downloadGroupContact
                    ? Object.values(this.downloadGroups)
                    : [],
                  labels: this.downloadLabelsContact
                    ? Object.values(this.downloadLabels)
                    : [],
                };
              }
              sendMessage() {
                var n = this;
                return (0, f.Z)(function* () {
                  if (n.extDataService.isPro()) {
                    n.loading = !0;
                    let e = n.getDownloadDescriptor();
                    const c = yield n.waService.getContacts(e);
                    n.router.navigate([n.bulkMessageLink]);
                    const r = c.map((R) => R.phoneNumber);
                    (n.uiService.addContactsForMessaging(r), (n.loading = !1));
                  } else n.showProType = u.B.CONTACT_SEND_MESSAGES;
                })();
              }
              get hasSelection() {
                return (
                  this.downloadAllContact ||
                  this.downloadAllChatContact ||
                  (this.downloadGroupContact &&
                    Object.values(this.downloadGroups).length) ||
                  (this.downloadLabelsContact &&
                    Object.values(this.downloadLabels).length)
                );
              }
            }
            return (
              ((a = i).ID = "BulkContactDownloadPage"),
              (a.ɵfac = function (n) {
                return new (n || a)(
                  t.Y36(O.o),
                  t.Y36(g.a),
                  t.Y36(w.F),
                  t.Y36(h.F0),
                );
              }),
              (a.ɵcmp = t.Xpm({
                type: a,
                selectors: [["app-bulk-contact-download-page"]],
                viewQuery: function (n, e) {
                  if ((1 & n && t.Gf(j, 5), 2 & n)) {
                    let c;
                    t.iGM((c = t.CRH())) && (e.groupDropdown = c.first);
                  }
                },
                decls: 20,
                vars: 19,
                consts: [
                  [1, "home"],
                  [1, "action-btns", "d-flex", "mt15"],
                  ["class", "btn btn-theme", 3, "click", 4, "ngIf"],
                  ["class", "d-flex cp ml5", 3, "pe-none", "click", 4, "ngIf"],
                  [
                    1,
                    "flex",
                    "a-flex-center",
                    "w-fit-content",
                    "cp",
                    "mt10",
                    3,
                    "click",
                  ],
                  [
                    "type",
                    "checkbox",
                    "name",
                    "all-contacts",
                    1,
                    "mt0",
                    3,
                    "checked",
                  ],
                  ["for", "all-contact", 1, "fwn", "ml0", "mb0"],
                  [
                    "type",
                    "checkbox",
                    "name",
                    "all-chat-contacts",
                    1,
                    "mt0",
                    3,
                    "checked",
                  ],
                  ["for", "all-chat-contact", 1, "fwn", "ml0", "mb0"],
                  [
                    1,
                    "mt10",
                    "d-block",
                    3,
                    "label",
                    "groups",
                    "onOptionsEdit",
                    "onEnableChange",
                  ],
                  ["class", "mt15 d-block", 3, "type", "close", 4, "ngIf"],
                  [1, "btn", "btn-theme", 3, "click"],
                  [1, "fa-kit", "fa-download"],
                  [1, "d-flex", "cp", "ml5", 3, "click"],
                  [1, "tul"],
                  [1, "fa-kit", "fa-chevrons-right", "ml3"],
                  ["class", "loader theme ml5", 4, "ngIf"],
                  [1, "loader", "theme", "ml5"],
                  [1, "mt15", "d-block", 3, "type", "close"],
                  [4, "ngIf"],
                ],
                template: function (n, e) {
                  (1 & n &&
                    (t._UZ(0, "app-header"),
                    t.TgZ(1, "div", 0)(2, "div", 1),
                    t.YNc(3, I, 4, 3, "button", 2),
                    t.YNc(4, Q, 6, 6, "span", 3),
                    t.qZA(),
                    t.TgZ(5, "div", 4),
                    t.NdJ("click", function () {
                      return (e.downloadAllContact = !e.downloadAllContact);
                    }),
                    t._UZ(6, "input", 5),
                    t.TgZ(7, "label", 6),
                    t._uU(8),
                    t.ALo(9, "jtranslate"),
                    t.qZA()(),
                    t.TgZ(10, "div", 4),
                    t.NdJ("click", function () {
                      return (e.downloadAllChatContact =
                        !e.downloadAllChatContact);
                    }),
                    t._UZ(11, "input", 7),
                    t.TgZ(12, "label", 8),
                    t._uU(13),
                    t.ALo(14, "jtranslate"),
                    t.qZA()(),
                    t.TgZ(15, "app-tag-dropdown", 9),
                    t.NdJ("onOptionsEdit", function (r) {
                      return (e.downloadGroups = r);
                    })("onEnableChange", function (r) {
                      return (e.downloadGroupContact = r);
                    }),
                    t.ALo(16, "jtranslate"),
                    t.qZA(),
                    t.TgZ(17, "app-tag-dropdown", 9),
                    t.NdJ("onOptionsEdit", function (r) {
                      return (e.downloadLabels = r);
                    })("onEnableChange", function (r) {
                      return (e.downloadLabelsContact = r);
                    }),
                    t.ALo(18, "jtranslate"),
                    t.qZA(),
                    t.YNc(19, Y, 3, 3, "app-pro-warn", 10),
                    t.qZA()),
                    2 & n &&
                      (t.xp6(3),
                      t.Q6J("ngIf", e.hasSelection),
                      t.xp6(1),
                      t.Q6J("ngIf", e.hasSelection),
                      t.xp6(2),
                      t.Q6J("checked", e.downloadAllContact),
                      t.xp6(2),
                      t.Oqu(t.lcZ(9, 11, "All contacts")),
                      t.xp6(3),
                      t.Q6J("checked", e.downloadAllChatContact),
                      t.xp6(2),
                      t.Oqu(t.lcZ(14, 13, "All chat contacts")),
                      t.xp6(2),
                      t.Q6J("label", t.lcZ(16, 15, "Groups"))(
                        "groups",
                        e.groups,
                      ),
                      t.xp6(2),
                      t.Q6J("label", t.lcZ(18, 17, "Labels"))(
                        "groups",
                        e.labels,
                      ),
                      t.xp6(2),
                      t.Q6J("ngIf", e.showProType)));
                },
                dependencies: [o.O5, C.V, _.G, S, d.Q],
                styles: [
                  ".home[_ngcontent-%COMP%]{background-color:#fff;height:500px;padding:20px 12px 12px}.home[_ngcontent-%COMP%]   .action-btns[_ngcontent-%COMP%]{position:absolute;right:12px}input[_ngcontent-%COMP%]{accent-color:black}.icon-trash[_ngcontent-%COMP%]{color:#b42727}",
                ],
              })),
              i
            );
          })(),
        },
      ];
      let K = (() => {
        var a;
        class i {}
        return (
          ((a = i).ɵfac = function (n) {
            return new (n || a)();
          }),
          (a.ɵmod = t.oAB({ type: a })),
          (a.ɵinj = t.cJS({ imports: [h.Bz.forChild(q), h.Bz] })),
          i
        );
      })();
      var H = s(7677);
      let W = (() => {
        var a;
        class i {}
        return (
          ((a = i).ɵfac = function (n) {
            return new (n || a)();
          }),
          (a.ɵmod = t.oAB({ type: a })),
          (a.ɵinj = t.cJS({ imports: [o.ez, p.u5, K, H.e] })),
          i
        );
      })();
    },
    7825: (k, m, s) => {
      s.d(m, { G: () => O });
      var o = s(9291),
        p = s(7228),
        h = s(9955),
        f = s(2572),
        v = s(8043),
        u = s(3427),
        t = s(858);
      let O = (() => {
        var g;
        class w {
          constructor(_, d, x) {
            ((this.extDataService = _),
              (this.waService = d),
              (this.uiService = x),
              (this.userNameIntitals = (0, o.Flj)(() =>
                this.extDataService.getUserDetails()?.getUserNameIntitals(),
              )),
              (this.downloadContactLink = `/${p.ME.downloadContact()}`),
              (this.reportsLink = `/${p.ME.messagingReport()}`),
              (this.helpLink = `/${p.ME.helpLink()}`),
              (this.msgLink = `/${p.ME.bulkMsgs()}`),
              (this.chatbotLink = `/${p.ME.chatbot()}`),
              (this.userDetailsPage = `/${p.ME.getUserDetails()}`));
          }
          closeWindow() {
            this.waService.closeWindow();
          }
        }
        return (
          ((g = w).ɵfac = function (_) {
            return new (_ || g)(o.Y36(h.a), o.Y36(f.o), o.Y36(v.F));
          }),
          (g.ɵcmp = o.Xpm({
            type: g,
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
            template: function (_, d) {
              (1 & _ &&
                (o.TgZ(0, "div", 0)(1, "div", 1)(2, "i", 2),
                o.NdJ("click", function () {
                  return d.closeWindow();
                }),
                o.qZA(),
                o.TgZ(3, "div", 3),
                o._UZ(4, "img", 4),
                o.qZA()(),
                o.TgZ(5, "div", 5)(6, "div", 6),
                o._UZ(7, "i", 7),
                o.TgZ(8, "span"),
                o._uU(9),
                o.ALo(10, "jtranslate"),
                o.qZA()(),
                o.TgZ(11, "div", 6),
                o._UZ(12, "i", 8),
                o.TgZ(13, "span"),
                o._uU(14),
                o.ALo(15, "jtranslate"),
                o.qZA()(),
                o.TgZ(16, "div", 9),
                o._UZ(17, "i", 10),
                o.TgZ(18, "span"),
                o._uU(19),
                o.ALo(20, "jtranslate"),
                o.qZA()()(),
                o.TgZ(21, "div", 11)(22, "div", 12),
                o._uU(23),
                o.qZA(),
                o.TgZ(24, "div", 13)(25, "div", 14),
                o._UZ(26, "i", 15),
                o.TgZ(27, "span"),
                o._uU(28),
                o.ALo(29, "jtranslate"),
                o.qZA()(),
                o.TgZ(30, "div", 16),
                o._UZ(31, "i", 17),
                o.TgZ(32, "span"),
                o._uU(33),
                o.ALo(34, "jtranslate"),
                o.qZA()()()()()),
                2 & _ &&
                  (o.xp6(6),
                  o.Q6J("routerLink", d.msgLink),
                  o.xp6(3),
                  o.Oqu(o.lcZ(10, 11, "Send messages")),
                  o.xp6(2),
                  o.Q6J("routerLink", d.reportsLink),
                  o.xp6(3),
                  o.Oqu(o.lcZ(15, 13, "Reports")),
                  o.xp6(2),
                  o.Q6J("routerLink", d.helpLink),
                  o.xp6(3),
                  o.Oqu(o.lcZ(20, 15, "Get support")),
                  o.xp6(4),
                  o.hij(" ", d.userNameIntitals(), " "),
                  o.xp6(2),
                  o.Q6J("routerLink", d.userDetailsPage),
                  o.xp6(3),
                  o.Oqu(o.lcZ(29, 17, "Profile")),
                  o.xp6(2),
                  o.Q6J("routerLink", d.downloadContactLink),
                  o.xp6(3),
                  o.Oqu(o.lcZ(34, 19, "Download contacts"))));
            },
            dependencies: [u.rH, u.Od, t.Q],
            styles: [
              ".header[_ngcontent-%COMP%]{padding:0 24px 0 17px;border-bottom:1px solid rgba(0,0,0,.05);display:flex;justify-content:space-between;height:50px}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%;gap:20px}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]{cursor:pointer;transition:border .2s;border-bottom:2px solid transparent;height:100%;color:#03080299}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]:hover{color:#019f53}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap.active[_ngcontent-%COMP%]{color:#019f53;border-bottom:2px solid #019F53}.header[_ngcontent-%COMP%]   .profile-initals[_ngcontent-%COMP%]{display:flex;width:28px;height:28px;padding:7px 6px;justify-content:center;align-items:center;gap:2px;border-radius:4px;background:#F3EECE;color:#03080299}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{padding-bottom:0}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{padding:5px 10px;color:#2e2e2e;font-size:13px;cursor:pointer;border-bottom:1px solid rgba(0,0,0,.08)}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{background:#fafafa}",
            ],
          })),
          w
        );
      })();
    },
  },
]);
