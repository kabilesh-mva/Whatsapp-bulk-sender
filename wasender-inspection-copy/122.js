"use strict";
(self.webpackChunkwasender_chrome_extension =
  self.webpackChunkwasender_chrome_extension || []).push([
  [122],
  {
    6122: (w, v, i) => {
      (i.r(v), i.d(v, { BulkMessageReportPageModule: () => be }));
      var s = i(6814),
        u = i(6223),
        x = i(3427),
        l = i(5861),
        O = i(7228),
        d = i(4631),
        f = i(5878),
        k = i(3964),
        _ = i(2017),
        e = i(9291),
        b = i(2572),
        M = i(8043),
        p = i(8377),
        C = i(9955),
        Z = i(7122),
        R = i(9682),
        A = i(6979),
        B = i(4517),
        S = i(7825);
      function I(n, r) {
        if ((1 & n && e._UZ(0, "div", 3), 2 & n)) {
          const a = r.index,
            t = e.oxw();
          e.ekj("active", a < t.activeCount);
        }
      }
      let U = (() => {
        var n;
        class r {
          constructor() {
            ((this.percentage = 0),
              (this.totalBars = 10),
              (this.bars = []),
              (this.activeCount = 0));
          }
          ngOnChanges(t) {
            (t.percentage || t.totalBars) &&
              ((this.percentage = Math.max(0, Math.min(100, this.percentage))),
              (this.bars = Array(this.totalBars).fill(0)),
              (this.activeCount = Math.round(
                (this.percentage / 100) * this.totalBars,
              )));
          }
        }
        return (
          ((n = r).ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-bar-loader"]],
            inputs: { percentage: "percentage", totalBars: "totalBars" },
            features: [e.TTD],
            decls: 4,
            vars: 2,
            consts: [
              [1, "bar-loader"],
              ["class", "bar", 3, "active", 4, "ngFor", "ngForOf"],
              [1, "percent"],
              [1, "bar"],
            ],
            template: function (t, o) {
              (1 & t &&
                (e.TgZ(0, "div", 0),
                e.YNc(1, I, 1, 2, "div", 1),
                e.TgZ(2, "span", 2),
                e._uU(3),
                e.qZA()()),
                2 & t &&
                  (e.xp6(1),
                  e.Q6J("ngForOf", o.bars),
                  e.xp6(2),
                  e.hij("", o.percentage, "%")));
            },
            dependencies: [s.sg],
            styles: [
              ".bar-loader[_ngcontent-%COMP%]{display:flex;align-items:center}.bar-loader[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{width:3px;border-radius:10000px;height:15px;margin:0 1px;background-color:#e0e0e0;transition:background-color .3s}.bar-loader[_ngcontent-%COMP%]   .bar.active[_ngcontent-%COMP%]{background-color:#019f53}.bar-loader[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]{margin-left:8px;font-size:13px;color:#019f53;font-weight:600}",
            ],
          })),
          r
        );
      })();
      var y = i(4774),
        T = i(5524);
      function N(n, r) {
        if (1 & n) {
          const a = e.EpF();
          (e.TgZ(0, "img", 7),
            e.NdJ("error", function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(
                o.onImageError(
                  null == o.broadcast.messageAttachmentDetails ||
                    null == o.broadcast.messageAttachmentDetails[0]
                    ? null
                    : o.broadcast.messageAttachmentDetails[0].url,
                ),
              );
            }),
            e.qZA());
        }
        if (2 & n) {
          const a = e.oxw();
          e.Q6J(
            "src",
            a.getValidUrl(
              null == a.broadcast.messageAttachmentDetails ||
                null == a.broadcast.messageAttachmentDetails[0]
                ? null
                : a.broadcast.messageAttachmentDetails[0].url,
            ),
            e.LSH,
          );
        }
      }
      function E(n, r) {
        if (1 & n) {
          const a = e.EpF();
          (e.ynx(0),
            e.TgZ(1, "img", 8),
            e.NdJ("error", function () {
              e.CHM(a);
              const o = e.oxw().$implicit,
                c = e.oxw();
              return e.KtG(c.onImageError(o.url));
            }),
            e.qZA(),
            e.BQk());
        }
        if (2 & n) {
          const a = e.oxw().$implicit,
            t = e.oxw();
          (e.xp6(1), e.Q6J("src", t.getValidUrl(a.url), e.LSH));
        }
      }
      function L(n, r) {
        if (
          (1 & n && (e.ynx(0), e.YNc(1, E, 2, 1, "ng-container", 6), e.BQk()),
          2 & n)
        ) {
          const a = r.index;
          (e.xp6(1), e.Q6J("ngIf", a > 0));
        }
      }
      function D(n, r) {
        if ((1 & n && (e.ynx(0), e._uU(1), e.BQk()), 2 & n)) {
          const a = e.oxw();
          (e.xp6(1),
            e.hij(
              " +",
              (null == a.broadcast.messageAttachmentDetails
                ? null
                : a.broadcast.messageAttachmentDetails.length) - 3,
              " ",
            ));
        }
      }
      let j = (() => {
        var n;
        class r {
          constructor(t) {
            ((this.changeDetector = t),
              (this.broadcast = null),
              (this.encodedFallback = new Set()),
              (this.hasPreviewImage = new Set()),
              (this.checked = new Set()));
          }
          getValidUrl(t) {
            return this.determineIfImage(t) || this.hasPreviewImage.has(t)
              ? this.encodedFallback.has(t)
                ? T.j.encodePath(t)
                : t
              : (this.checkForPreviewImage(t), r.DOCUMENT_ICON);
          }
          onImageError(t) {
            (this.determineIfImage(t) || this.hasPreviewImage.has(t)) &&
              this.encodedFallback.add(t);
          }
          determineIfImage(t) {
            return /\.(jpe?g|png|gif)$/i.test(t || "");
          }
          checkForPreviewImage(t) {
            var o = this;
            return (0, l.Z)(function* () {
              if (t && !o.checked.has(t)) {
                o.checked.add(t);
                try {
                  `${(yield y.Z.head(T.j.encodePath(t))).headers["content-type"]}`.startsWith(
                    "image/",
                  ) &&
                    (o.hasPreviewImage.add(t),
                    o.changeDetector.detectChanges());
                } catch {}
              }
            })();
          }
        }
        return (
          ((n = r).DOCUMENT_ICON = "../../../assets/img/doc.png"),
          (n.ɵfac = function (t) {
            return new (t || n)(e.Y36(e.sBO));
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-message-preview"]],
            inputs: { broadcast: "broadcast" },
            decls: 14,
            vars: 9,
            consts: [
              [1, "preview-cover"],
              [1, "heading", "mb10"],
              [1, "preview"],
              [
                "class",
                "w100p",
                "crossorigin",
                "anonymous",
                "alt",
                "",
                "srcset",
                "",
                3,
                "src",
                "error",
                4,
                "ngIf",
              ],
              [1, "other-attachments"],
              [4, "ngFor", "ngForOf"],
              [4, "ngIf"],
              [
                "crossorigin",
                "anonymous",
                "alt",
                "",
                "srcset",
                "",
                1,
                "w100p",
                3,
                "src",
                "error",
              ],
              [
                "crossorigin",
                "anonymous",
                "alt",
                "",
                "srcset",
                "",
                3,
                "src",
                "error",
              ],
            ],
            template: function (t, o) {
              (1 & t &&
                (e.TgZ(0, "div", 0)(1, "div", 1),
                e._uU(2, "Message preview"),
                e.qZA(),
                e.TgZ(3, "div", 2),
                e.YNc(4, N, 1, 1, "img", 3),
                e._uU(5),
                e._UZ(6, "br")(7, "br"),
                e.TgZ(8, "i"),
                e._uU(9),
                e.qZA(),
                e.TgZ(10, "div", 4),
                e.YNc(11, L, 2, 1, "ng-container", 5),
                e.ALo(12, "slice"),
                e.YNc(13, D, 2, 1, "ng-container", 6),
                e.qZA()()()),
                2 & t &&
                  (e.xp6(4),
                  e.Q6J(
                    "ngIf",
                    null == o.broadcast.messageAttachmentDetails ||
                      null == o.broadcast.messageAttachmentDetails[0]
                      ? null
                      : o.broadcast.messageAttachmentDetails[0].url,
                  ),
                  e.xp6(1),
                  e.hij(" ", o.broadcast.text, " "),
                  e.xp6(4),
                  e.hij(" ", o.broadcast.unsubscriptionTextToBeSent(), " "),
                  e.xp6(2),
                  e.Q6J(
                    "ngForOf",
                    e.Dn7(12, 5, o.broadcast.messageAttachmentDetails, 0, 3),
                  ),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    (null == o.broadcast.messageAttachmentDetails
                      ? null
                      : o.broadcast.messageAttachmentDetails.length) > 3,
                  )));
            },
            dependencies: [s.sg, s.O5, s.OU],
            styles: [
              ".preview-cover[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]{border-radius:4px;border:1px solid rgba(0,0,0,.04);background:#FAFAFA;display:flex;padding:8px;flex-direction:column;align-items:flex-start;gap:10px;align-self:stretch;font-size:12px}.preview-cover[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .other-attachments[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:4px}.preview-cover[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .other-attachments[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px}",
            ],
          })),
          r
        );
      })();
      var J = i(858);
      function Q(n, r) {
        if (1 & n) {
          const a = e.EpF();
          (e.TgZ(0, "app-report-cancel-alert", 30),
            e.NdJ("close", function () {
              e.CHM(a);
              const o = e.oxw(2);
              return e.KtG((o.cancelReport = !1));
            }),
            e.qZA());
        }
        if (2 & n) {
          const a = e.oxw(2);
          e.Q6J("report", a.bulkMessageReport);
        }
      }
      function q(n, r) {
        (1 & n &&
          (e.TgZ(0, "span", 33), e._uU(1), e.ALo(2, "jtranslate"), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu(e.lcZ(2, 1, "LIVE"))));
      }
      function F(n, r) {
        (1 & n &&
          (e.TgZ(0, "span", 34), e._uU(1), e.ALo(2, "jtranslate"), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu(e.lcZ(2, 1, "Completed"))));
      }
      function Y(n, r) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.YNc(1, q, 3, 3, "span", 31),
            e.YNc(2, F, 3, 3, "span", 32),
            e.BQk()),
          2 & n)
        ) {
          const a = e.oxw(2);
          (e.xp6(1),
            e.Q6J(
              "ngIf",
              a.bulkMessageReport && !a.bulkMessageReport.isFinished,
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              a.bulkMessageReport && a.bulkMessageReport.isFinished,
            ));
        }
      }
      function G(n, r) {
        if (1 & n) {
          const a = e.EpF();
          (e.TgZ(0, "button", 41),
            e.NdJ("click", function () {
              e.CHM(a);
              const o = e.oxw(3);
              return e.KtG(o.play());
            }),
            e._UZ(1, "i", 42),
            e.qZA());
        }
      }
      function W(n, r) {
        if (1 & n) {
          const a = e.EpF();
          (e.TgZ(0, "button", 43),
            e.NdJ("click", function () {
              e.CHM(a);
              const o = e.oxw(3);
              return e.KtG(o.pause());
            }),
            e._UZ(1, "i", 44),
            e.qZA());
        }
      }
      function H(n, r) {
        if (1 & n) {
          const a = e.EpF();
          (e.TgZ(0, "div", 35),
            e._UZ(1, "app-bar-loader", 36),
            e.YNc(2, G, 2, 0, "button", 37),
            e.YNc(3, W, 2, 0, "button", 38),
            e.TgZ(4, "button", 39),
            e.NdJ("click", function () {
              e.CHM(a);
              const o = e.oxw(2);
              return e.KtG((o.cancelReport = !0));
            }),
            e._UZ(5, "i", 40),
            e.qZA()());
        }
        if (2 & n) {
          const a = e.oxw(2);
          (e.xp6(1),
            e.Q6J("percentage", a.bulkMessageReport.getPercentCompleted()),
            e.xp6(1),
            e.Q6J("ngIf", a.bulkMessageReport.isPaused),
            e.xp6(1),
            e.Q6J("ngIf", !a.bulkMessageReport.isPaused));
        }
      }
      function K(n, r) {
        if (1 & n) {
          const a = e.EpF();
          (e.TgZ(0, "div", 8),
            e.YNc(1, Q, 1, 1, "app-report-cancel-alert", 9),
            e.TgZ(2, "div", 10)(3, "div", 11)(4, "i", 12),
            e.NdJ("click", function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.openAllBroadcasts());
            }),
            e.qZA(),
            e.TgZ(5, "span", 13),
            e.NdJ("click", function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.openAllBroadcasts());
            }),
            e._uU(6),
            e.qZA(),
            e.YNc(7, Y, 3, 2, "ng-container", 7),
            e.qZA(),
            e.YNc(8, H, 6, 3, "div", 14),
            e.qZA(),
            e.TgZ(9, "div", 15)(10, "div", 16)(11, "div", 17),
            e._UZ(12, "i", 18),
            e.TgZ(13, "span"),
            e._uU(14),
            e.ALo(15, "jtranslate"),
            e.qZA()(),
            e.TgZ(16, "div", 19),
            e._uU(17),
            e.qZA()(),
            e.TgZ(18, "div", 20)(19, "div", 17),
            e._UZ(20, "i", 21),
            e.TgZ(21, "span"),
            e._uU(22),
            e.ALo(23, "jtranslate"),
            e.qZA()(),
            e.TgZ(24, "div", 19),
            e._uU(25),
            e.qZA()(),
            e.TgZ(26, "div", 16)(27, "div", 17),
            e._UZ(28, "i", 22),
            e.TgZ(29, "span", 23),
            e._uU(30),
            e.ALo(31, "jtranslate"),
            e.qZA()(),
            e.TgZ(32, "div", 24),
            e._uU(33),
            e.qZA()(),
            e.TgZ(34, "div", 16)(35, "div", 17),
            e._UZ(36, "i", 25),
            e.TgZ(37, "span"),
            e._uU(38),
            e.ALo(39, "jtranslate"),
            e.qZA()(),
            e.TgZ(40, "div", 26),
            e._uU(41),
            e.qZA()(),
            e.TgZ(42, "div", 27)(43, "div", 17),
            e._UZ(44, "i", 28),
            e.TgZ(45, "span"),
            e._uU(46),
            e.ALo(47, "jtranslate"),
            e.qZA()(),
            e.TgZ(48, "div", 29),
            e._uU(49),
            e.qZA()()()());
        }
        if (2 & n) {
          const a = e.oxw();
          let t, o, c, g, m;
          (e.xp6(1),
            e.Q6J("ngIf", a.cancelReport),
            e.xp6(5),
            e.Oqu(null == a.reportBroadcast ? null : a.reportBroadcast.name),
            e.xp6(1),
            e.Q6J("ngIf", !a.broadcastId),
            e.xp6(1),
            e.Q6J("ngIf", !a.bulkMessageReport.isFinished && !a.broadcastId),
            e.xp6(6),
            e.Oqu(e.lcZ(15, 14, "Total")),
            e.xp6(3),
            e.Oqu(
              null == a.bulkMessageReport ||
                null == (t = a.bulkMessageReport.getBroadcastStats())
                ? null
                : t.totalMessages,
            ),
            e.xp6(5),
            e.Oqu(e.lcZ(23, 16, "Sent")),
            e.xp6(3),
            e.Oqu(
              null == a.bulkMessageReport ||
                null == (o = a.bulkMessageReport.getBroadcastStats())
                ? null
                : o.sent,
            ),
            e.xp6(5),
            e.Oqu(e.lcZ(31, 18, "Pending")),
            e.xp6(3),
            e.hij(
              "",
              null == a.bulkMessageReport ||
                null == (c = a.bulkMessageReport.getBroadcastStats())
                ? null
                : c.pending,
              " ",
            ),
            e.xp6(5),
            e.Oqu(e.lcZ(39, 20, "Skipped (opt-out)")),
            e.xp6(3),
            e.Oqu(
              null == a.bulkMessageReport ||
                null == (g = a.bulkMessageReport.getBroadcastStats())
                ? null
                : g.blocked,
            ),
            e.xp6(5),
            e.Oqu(e.lcZ(47, 22, "No. unavailable")),
            e.xp6(3),
            e.Oqu(
              null == a.bulkMessageReport ||
                null == (m = a.bulkMessageReport.getBroadcastStats())
                ? null
                : m.failed,
            ));
        }
      }
      function $(n, r) {
        if (1 & n) {
          const a = e.EpF();
          (e.TgZ(0, "app-alert", 45)(1, "div", 46)(2, "div", 47),
            e._uU(3),
            e.ALo(4, "jtranslate"),
            e.TgZ(5, "a", 48),
            e.NdJ("click", function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.stopsMessaging());
            }),
            e._uU(6),
            e.ALo(7, "jtranslate"),
            e.qZA(),
            e.TgZ(8, "a", 49),
            e.NdJ("click", function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG((o.showStopAlert = !1));
            }),
            e._uU(9),
            e.ALo(10, "jtranslate"),
            e.qZA()()()());
        }
        if (2 & n) {
          const a = e.oxw();
          (e.Q6J("alignment", a.center)("canClose", !1),
            e.xp6(3),
            e.hij(" ", e.lcZ(4, 5, "Confirm stop?"), " "),
            e.xp6(3),
            e.Oqu(e.lcZ(7, 7, "Yes")),
            e.xp6(3),
            e.Oqu(e.lcZ(10, 9, "No")));
        }
      }
      function z(n, r) {
        if (1 & n) {
          const a = e.EpF();
          (e.TgZ(0, "app-alert", 50, 51),
            e.NdJ("click", function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG((o.showMiniAlert = !1));
            }),
            e.TgZ(2, "div", 52)(3, "div", 53)(4, "b"),
            e._uU(5),
            e.ALo(6, "jtranslate"),
            e.qZA(),
            e.TgZ(7, "span", 54),
            e._uU(8),
            e.ALo(9, "jtranslate"),
            e.qZA()()()());
        }
        if (2 & n) {
          const a = e.oxw();
          (e.Q6J("alignment", a.left)("canClose", !0),
            e.xp6(5),
            e.hij("", e.lcZ(6, 4, "Messaging started"), " \u{1f680}\u{1f680}"),
            e.xp6(3),
            e.Oqu(e.lcZ(9, 6, "Now you can minimise the screen if you want")));
        }
      }
      function V(n, r) {
        (1 & n &&
          (e.TgZ(0, "div", 55), e._uU(1), e.ALo(2, "jtranslate"), e.qZA()),
          2 & n && (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "No report found"), " ")));
      }
      function X(n, r) {
        (1 & n &&
          (e.TgZ(0, "span"),
          e._uU(1),
          e.ALo(2, "jtranslate"),
          e.TgZ(3, "b"),
          e._uU(4),
          e.ALo(5, "jtranslate"),
          e.qZA()()),
          2 & n &&
            (e.xp6(1),
            e.hij(" ", e.lcZ(2, 2, "Buy pro to"), " "),
            e.xp6(3),
            e.Oqu(e.lcZ(5, 4, "send more than 3 messages with attachments"))));
      }
      function ee(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "span"),
            e._uU(1),
            e.ALo(2, "jtranslate"),
            e.TgZ(3, "b"),
            e._uU(4),
            e.qZA()()),
          2 & n)
        ) {
          const a = e.oxw(2);
          (e.xp6(1),
            e.hij(" ", e.lcZ(2, 2, "Buy pro to"), " "),
            e.xp6(3),
            e.hij("send more than ", a.messageLimit, " messages in bulk"));
        }
      }
      function te(n, r) {
        if (1 & n) {
          const a = e.EpF();
          (e.TgZ(0, "app-pro-warn", 56),
            e.NdJ("close", function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG((o.proWarnType = null));
            }),
            e.YNc(1, X, 6, 6, "span", 7),
            e.YNc(2, ee, 5, 4, "span", 7),
            e.qZA());
        }
        if (2 & n) {
          const a = e.oxw();
          (e.Q6J("type", a.proWarnType),
            e.xp6(1),
            e.Q6J("ngIf", a.proWarnType === a.ProWarnType.ATTACHMENT),
            e.xp6(1),
            e.Q6J("ngIf", a.proWarnType === a.ProWarnType.BULK_MESSAGE));
        }
      }
      function ne(n, r) {
        (1 & n && (e.TgZ(0, "span"), e._uU(1), e.ALo(2, "jtranslate"), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu(e.lcZ(2, 1, "Mail sent"))));
      }
      function ae(n, r) {
        (1 & n && (e.TgZ(0, "span"), e._uU(1), e.ALo(2, "jtranslate"), e.qZA()),
          2 & n && (e.xp6(1), e.Oqu(e.lcZ(2, 1, "Resend mail"))));
      }
      function oe(n, r) {
        1 & n && e._UZ(0, "div", 61);
      }
      function se(n, r) {
        if (1 & n) {
          const a = e.EpF();
          (e.TgZ(0, "div", 57),
            e._uU(1),
            e.ALo(2, "jtranslate"),
            e.TgZ(3, "button", 58),
            e.NdJ("click", function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.resendMail());
            }),
            e._UZ(4, "i", 59),
            e.YNc(5, ne, 3, 3, "span", 7),
            e.YNc(6, ae, 3, 3, "span", 7),
            e.YNc(7, oe, 1, 0, "div", 60),
            e.qZA()());
        }
        if (2 & n) {
          const a = e.oxw();
          (e.xp6(1),
            e.hij(
              " ",
              e.lcZ(
                2,
                5,
                "Email not verified, please verify your email to send more messages.",
              ),
              " ",
            ),
            e.xp6(2),
            e.Q6J("disabled", a.loading || a.mailSent),
            e.xp6(2),
            e.Q6J("ngIf", a.mailSent),
            e.xp6(1),
            e.Q6J("ngIf", !a.mailSent),
            e.xp6(1),
            e.Q6J("ngIf", a.loading));
        }
      }
      function re(n, r) {
        1 & n && e._UZ(0, "i", 72);
      }
      function ie(n, r) {
        if ((1 & n && (e.TgZ(0, "span", 77), e._uU(1), e.qZA()), 2 & n)) {
          const a = e.oxw(4);
          (e.xp6(1), e.hij(" ", a.nextMessageIN, " "));
        }
      }
      function ce(n, r) {
        (1 & n &&
          (e.TgZ(0, "span", 77), e._uU(1), e.ALo(2, "jtranslate"), e.qZA()),
          2 & n && (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "Pending"), " ")));
      }
      function le(n, r) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.YNc(1, ie, 2, 1, "span", 76),
            e.YNc(2, ce, 3, 3, "span", 76),
            e.BQk()),
          2 & n)
        ) {
          const a = e.oxw().index,
            t = e.oxw(2);
          (e.xp6(1),
            e.Q6J(
              "ngIf",
              (a < 1 ||
                t.bulkMessageReport.report.status[a - 1] !==
                  t.operations.STATUS_PENDING) &&
                t.nextMessageIN,
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (a >= 1 &&
                t.bulkMessageReport.report.status[a - 1] ===
                  t.operations.STATUS_PENDING) ||
                !t.nextMessageIN,
            ));
        }
      }
      function ge(n, r) {
        (1 & n && (e.ynx(0), e._uU(1), e.ALo(2, "jtranslate"), e.BQk()),
          2 & n && (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "Invalid"), " ")));
      }
      function pe(n, r) {
        (1 & n && (e.ynx(0), e._uU(1), e.ALo(2, "jtranslate"), e.BQk()),
          2 & n && (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "Failed"), " ")));
      }
      function _e(n, r) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "span", 78),
            e.YNc(2, ge, 3, 3, "ng-container", 7),
            e.YNc(3, pe, 3, 3, "ng-container", 7),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const a = e.oxw(3);
          (e.xp6(2),
            e.Q6J(
              "ngIf",
              a.bulkMessageReport.operation === a.operation.OPERATION_FILTER,
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              a.bulkMessageReport.operation ===
                a.operation.OPERATION_SEND_MESSAGE,
            ));
        }
      }
      function ue(n, r) {
        (1 & n && (e.ynx(0), e._uU(1), e.ALo(2, "jtranslate"), e.BQk()),
          2 & n && (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "Valid"), " ")));
      }
      function de(n, r) {
        (1 & n && (e.ynx(0), e._uU(1), e.ALo(2, "jtranslate"), e.BQk()),
          2 & n && (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "Sent"), " ")));
      }
      function Me(n, r) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "span", 79),
            e.YNc(2, ue, 3, 3, "ng-container", 7),
            e.YNc(3, de, 3, 3, "ng-container", 7),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const a = e.oxw(3);
          (e.xp6(2),
            e.Q6J(
              "ngIf",
              a.bulkMessageReport.operation === a.operation.OPERATION_FILTER,
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              a.bulkMessageReport.operation ===
                a.operation.OPERATION_SEND_MESSAGE,
            ));
        }
      }
      function me(n, r) {
        (1 & n &&
          (e.ynx(0),
          e.TgZ(1, "span", 80),
          e._uU(2),
          e.ALo(3, "jtranslate"),
          e.qZA(),
          e.BQk()),
          2 & n && (e.xp6(2), e.hij(" ", e.lcZ(3, 1, "Unsubscribed"), " ")));
      }
      function fe(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 68)(1, "div", 69),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "div", 69),
            e._uU(4),
            e.qZA(),
            e.TgZ(5, "div", 73),
            e.ynx(6, 74),
            e.YNc(7, le, 3, 2, "ng-container", 75),
            e.YNc(8, _e, 4, 2, "ng-container", 75),
            e.YNc(9, Me, 4, 2, "ng-container", 75),
            e.YNc(10, me, 4, 3, "ng-container", 75),
            e.BQk(),
            e.qZA()()),
          2 & n)
        ) {
          const a = r.$implicit,
            t = r.index,
            o = e.oxw(2);
          (e.xp6(2),
            e.Oqu(t + 1),
            e.xp6(2),
            e.Oqu(a.contact),
            e.xp6(1),
            e.Q6J("ngClass", o.bulkMessageReport.report.status[t]),
            e.xp6(1),
            e.Q6J("ngSwitch", o.bulkMessageReport.report.status[t]),
            e.xp6(1),
            e.Q6J("ngSwitchCase", o.operations.STATUS_PENDING),
            e.xp6(1),
            e.Q6J("ngSwitchCase", o.operations.STATUS_FAILED),
            e.xp6(1),
            e.Q6J("ngSwitchCase", o.operations.STATUS_SENT),
            e.xp6(1),
            e.Q6J("ngSwitchCase", o.operations.STATUS_BLOCKED));
        }
      }
      function he(n, r) {
        if ((1 & n && e._UZ(0, "app-message-preview", 81), 2 & n)) {
          const a = e.oxw(2);
          e.Q6J("broadcast", a.reportBroadcast);
        }
      }
      function xe(n, r) {
        if (1 & n) {
          const a = e.EpF();
          (e.ynx(0),
            e.TgZ(1, "div", 62)(2, "div", 63)(3, "div", 64)(4, "div"),
            e._uU(5),
            e.ALo(6, "jtranslate"),
            e.qZA(),
            e.TgZ(7, "div", 65),
            e.NdJ("click", function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.downloadReports());
            }),
            e._UZ(8, "i", 66),
            e.TgZ(9, "span"),
            e._uU(10),
            e.ALo(11, "jtranslate"),
            e.qZA(),
            e.YNc(12, re, 1, 0, "i", 67),
            e.qZA()(),
            e.TgZ(13, "div")(14, "div", 68)(15, "div", 69),
            e._uU(16),
            e.ALo(17, "jtranslate"),
            e.qZA(),
            e.TgZ(18, "div", 69),
            e._uU(19),
            e.ALo(20, "jtranslate"),
            e.qZA(),
            e.TgZ(21, "div", 69),
            e._uU(22),
            e.ALo(23, "jtranslate"),
            e.qZA()(),
            e.YNc(24, fe, 11, 8, "div", 70),
            e.qZA()(),
            e.YNc(25, he, 1, 1, "app-message-preview", 71),
            e.qZA(),
            e.BQk());
        }
        if (2 & n) {
          const a = e.oxw();
          (e.xp6(5),
            e.hij(" ", e.lcZ(6, 10, "Message sent"), " "),
            e.xp6(2),
            e.ekj("disable-btn", !a.isPro),
            e.xp6(3),
            e.Oqu(e.lcZ(11, 12, "Download Data")),
            e.xp6(2),
            e.Q6J("ngIf", !a.isPro),
            e.xp6(4),
            e.Oqu(e.lcZ(17, 14, "Sq no")),
            e.xp6(3),
            e.Oqu(e.lcZ(20, 16, "WA Number")),
            e.xp6(3),
            e.Oqu(e.lcZ(23, 18, "Status")),
            e.xp6(2),
            e.Q6J(
              "ngForOf",
              null == a.bulkMessageReport || null == a.bulkMessageReport.report
                ? null
                : a.bulkMessageReport.report.numbers,
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              a.reportBroadcast &&
                a.bulkMessageReport.operation ===
                  a.operation.OPERATION_SEND_MESSAGE,
            ));
        }
      }
      const Pe = [
        {
          path: "",
          component: (() => {
            var n;
            class r {
              constructor(t, o, c, g, m, P, h, Ce) {
                ((this.waBgService = t),
                  (this.uiService = o),
                  (this.changeDetector = c),
                  (this.routingService = g),
                  (this.route = m),
                  (this.extDataService = P),
                  (this.broadcastService = h),
                  (this.reportService = Ce),
                  (this.bulkMessageReport = null),
                  (this.operations = d.Operation),
                  (this.operation = d.Operation),
                  (this.showStopAlert = !1),
                  (this.ProWarnType = _.B),
                  (this.reportStopReason = f.he),
                  (this.showMiniAlert = !0));
              }
              get isPro() {
                return this.extDataService.isPro();
              }
              pause() {
                var t = this;
                return (0, l.Z)(function* () {
                  ((t.bulkMessageReport.isPaused = !0),
                    yield t.waBgService.pauseBulkGrpMessaging());
                })();
              }
              play() {
                var t = this;
                return (0, l.Z)(function* () {
                  ((t.bulkMessageReport.isPaused = !1),
                    yield t.waBgService.resumeBulkMessaging());
                })();
              }
              closeWindow() {
                var t = this;
                return (0, l.Z)(function* () {
                  (t.updateBulkGrpSubscription.unsubscribe(),
                    yield t.routingService.navigate([O.ME.bulkMsgs()]));
                })();
              }
              ngOnInit() {
                var t = this;
                return (0, l.Z)(function* () {
                  ((t.broadcastId =
                    t.route.snapshot.paramMap.get("broadcastId")),
                    t.broadcastId
                      ? yield t.loadReportById(t.broadcastId)
                      : yield t.loadDefaultReport(),
                    t.loadBroadcastDetails(),
                    setTimeout(() => {
                      t.updateReportStatus();
                    }, 1e3));
                })();
              }
              loadReportById(t) {
                var o = this;
                return (0, l.Z)(function* () {
                  const c = yield o.reportService.getBroadcastReport(
                    o.extDataService.currentUser.phoneNumber,
                    t,
                  );
                  o.assignReport(c);
                })();
              }
              loadDefaultReport() {
                var t = this;
                return (0, l.Z)(function* () {
                  const o = yield t.uiService.getBulkMessageReport();
                  (t.assignReport(o),
                    (t.updateBulkGrpSubscription =
                      t.uiService.onUpdateBulkGrpMessageReport$.subscribe(
                        (function () {
                          var c = (0, l.Z)(function* (g) {
                            g &&
                              (t.assignReport(g),
                              g?.isFinished && (yield t.closeWindow()),
                              t.reportBroadcast?.id !== g.broadcastId &&
                                t.loadBroadcastDetails());
                          });
                          return function (g) {
                            return c.apply(this, arguments);
                          };
                        })(),
                      )));
                })();
              }
              loadBroadcastDetails() {
                this.bulkMessageReport?.broadcastId &&
                  this.broadcastService
                    .getBroadcastById(this.bulkMessageReport.broadcastId)
                    .then((t) => {
                      t && (this.reportBroadcast = t);
                    });
              }
              assignReport(t) {
                (t?.report?.numbers?.length &&
                  ((this.bulkMessageReport = f.JW.fromJSON(
                    JSON.parse(JSON.stringify(t)),
                  )),
                  this.updateReportStatus()),
                  this.changeDetector.detectChanges());
              }
              updateReportStatus() {
                (this.bulkMessageReport?.isPaused && this.handlePausedReport(),
                  this.updateNextMessageTime());
              }
              handlePausedReport() {
                switch (this.bulkMessageReport?.stopReason) {
                  case f.he.MAIL_VERIFY:
                    break;
                  case f.he.PRO:
                    this.extDataService.isPro() ||
                      (this.proWarnType = this.bulkMessageReport.report
                        .isAttachment
                        ? _.B.ATTACHMENT
                        : _.B.BULK_MESSAGE);
                }
              }
              get messageLimit() {
                return this.extDataService.appConfig?.freeMessageLimit;
              }
              updateNextMessageTime() {
                const t = this.bulkMessageReport?.nextMessageTime,
                  o = this.bulkMessageReport?.isPaused;
                this.nextMessageIN = o
                  ? this.pausedMessage()
                  : this.getTimeLeft(t);
              }
              pausedMessage() {
                return "OPERATION_SEND_MESSAGE" ===
                  this.bulkMessageReport?.operation
                  ? "Paused"
                  : "OPERATION_FILTER" === this.bulkMessageReport?.operation
                    ? "paused"
                    : "";
              }
              getTimeLeft(t) {
                let c = t - Date.now();
                if (c <= 0) return "Sending Now...";
                const g = Math.floor(c / 36e5);
                c %= 36e5;
                const m = Math.floor(c / 6e4);
                c %= 6e4;
                const P = Math.floor(c / 1e3);
                let h = "";
                return (
                  (h =
                    0 === g
                      ? 0 === m
                        ? `In ${P} sec`
                        : `In ${String(m).padStart(2, "0")}:${String(P).padStart(2, "0")}`
                      : `In ${String(g).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(P).padStart(2, "0")}`),
                  h
                );
              }
              checkIfInProgress() {
                this.bulkMessageReport?.report?.numbers?.length ||
                  this.startNew();
              }
              pauseMessaging() {
                var t = this;
                return (0, l.Z)(function* () {
                  ((t.bulkMessageReport.isPaused = !0),
                    yield t.waBgService.pauseBulkGrpMessaging());
                })();
              }
              resumeMessaging() {
                var t = this;
                return (0, l.Z)(function* () {
                  ((t.bulkMessageReport.isPaused = !1),
                    yield t.waBgService.resumeBulkMessaging());
                })();
              }
              stopsMessaging() {
                var t = this;
                return (0, l.Z)(function* () {
                  ((t.bulkMessageReport.isPaused = !1),
                    yield t.waBgService.stopMessaging());
                })();
              }
              resendMail() {
                var t = this;
                return (0, l.Z)(function* () {
                  ((t.loading = !0),
                    yield k.bl.updateDetails(
                      t.extDataService.currentUser.phoneNumber,
                      t.extDataService.getUserDetails(),
                    ),
                    (t.loading = !1),
                    (t.mailSent = !0),
                    setTimeout(() => {
                      t.mailSent = !1;
                    }, 1e4));
                })();
              }
              startNew() {
                var t = this;
                return (0, l.Z)(function* () {
                  yield t.pauseMessaging();
                })();
              }
              get sentMessages() {
                return (
                  this.bulkMessageReport?.report?.status.filter(
                    (t) => d.Operation.STATUS_SENT === t,
                  )?.length || 0
                );
              }
              get pendingMessages() {
                return (
                  this.bulkMessageReport?.report?.status.filter(
                    (t) => d.Operation.STATUS_PENDING === t,
                  )?.length || 0
                );
              }
              get failedMessages() {
                return (
                  this.bulkMessageReport?.report?.status.filter(
                    (t) => d.Operation.STATUS_FAILED === t,
                  )?.length || 0
                );
              }
              downloadReports() {
                this.extDataService.isPro()
                  ? this.uiService.downloadReports(this.bulkMessageReport)
                  : this.uiService.showProWarning(_.B.REPORT_DOWNLOAD);
              }
              getContactLabel(t) {
                return t.id ? t.name : t?.contact || t;
              }
              openAllBroadcasts() {
                this.routingService.navigate([O.ME.messagingReportLists()]);
              }
            }
            return (
              ((n = r).ɵfac = function (t) {
                return new (t || n)(
                  e.Y36(b.j),
                  e.Y36(M.F),
                  e.Y36(e.sBO),
                  e.Y36(p.Z),
                  e.Y36(x.gz),
                  e.Y36(C.a),
                  e.Y36(Z.Mr),
                  e.Y36(Z.rM),
                );
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [["app-group-info"]],
                decls: 9,
                vars: 7,
                consts: [
                  [1, "home"],
                  ["class", "panel", 4, "ngIf"],
                  [
                    "class",
                    "mb10 mt5 d-block",
                    "tone",
                    "warning",
                    3,
                    "alignment",
                    "canClose",
                    4,
                    "ngIf",
                  ],
                  [
                    "class",
                    "mb10 mt5 d-block",
                    "tone",
                    "success",
                    3,
                    "alignment",
                    "canClose",
                    "click",
                    4,
                    "ngIf",
                  ],
                  ["class", "text-center", 4, "ngIf"],
                  ["class", "mt10 d-block", 3, "type", "close", 4, "ngIf"],
                  ["class", "alert-danger br10 d-flex mt10 p10", 4, "ngIf"],
                  [4, "ngIf"],
                  [1, "panel"],
                  [3, "report", "close", 4, "ngIf"],
                  [1, "header"],
                  [1, "header-left"],
                  [1, "fa-kit", "fa-chevron-left", "cp", "mr5", 3, "click"],
                  [1, "campaign-name", "cp", 3, "click"],
                  ["class", "view-actions", 4, "ngIf"],
                  [1, "stats"],
                  [1, "stats-item"],
                  [1, "label"],
                  [1, "fa-kit", "fa-arrow-up-right", "mr3"],
                  [1, "value"],
                  [1, "stats-item", "sent"],
                  [1, "fa-kit", "fa-check-circle", "mr3"],
                  [1, "fa-kit", "fa-hourglass-outline", "mr3"],
                  [1, "text-crm-grey-dark-faded"],
                  [1, "value", "text-crm-grey-dark-faded"],
                  [1, "fa-kit", "fa-unsubscribe", "mr3"],
                  [1, "value", "text-danger"],
                  [1, "stats-item", "unavailable"],
                  [1, "fa-kit", "fa-phone-slash", "mr3"],
                  [1, "value", "text-warning"],
                  [3, "report", "close"],
                  ["class", "status-label live", 4, "ngIf"],
                  ["class", "status-label completed", 4, "ngIf"],
                  [1, "status-label", "live"],
                  [1, "status-label", "completed"],
                  [1, "view-actions"],
                  [3, "percentage"],
                  ["class", "text-success", 3, "click", 4, "ngIf"],
                  ["class", "text-warning", 3, "click", 4, "ngIf"],
                  [1, "text-danger", 3, "click"],
                  [1, "fa-kit", "fa-stop"],
                  [1, "text-success", 3, "click"],
                  [1, "fa-kit", "fa-play"],
                  [1, "text-warning", 3, "click"],
                  [1, "fa-kit", "fa-pause"],
                  [
                    "tone",
                    "warning",
                    1,
                    "mb10",
                    "mt5",
                    "d-block",
                    3,
                    "alignment",
                    "canClose",
                  ],
                  ["head", "", 1, "text-center"],
                  [1, "d-flex", "j-flex-center"],
                  [1, "confirm", "text-error", "cp", "ml5", 3, "click"],
                  [1, "cancel", "ml5", "text-pending", "cp", "ml5", 3, "click"],
                  [
                    "tone",
                    "success",
                    1,
                    "mb10",
                    "mt5",
                    "d-block",
                    3,
                    "alignment",
                    "canClose",
                    "click",
                  ],
                  ["minimiseAlert", ""],
                  ["head", "", 1, "stop-alert", "text-left"],
                  [1, "d-flex", "j-flex-start", "d-flex-column"],
                  [1, "mt5"],
                  [1, "text-center"],
                  [1, "mt10", "d-block", 3, "type", "close"],
                  [1, "alert-danger", "br10", "d-flex", "mt10", "p10"],
                  [
                    1,
                    "btn",
                    "btn-theme",
                    "flex",
                    "a-flex-center",
                    "ml5",
                    "fs12",
                    "p5",
                    3,
                    "disabled",
                    "click",
                  ],
                  [1, "icon-crown-o", "mr5", "flex"],
                  ["class", "loader theme", 4, "ngIf"],
                  [1, "loader", "theme"],
                  [1, "flex", "mt10"],
                  [1, "mr15", "report-status"],
                  [1, "d-flex", "w100p", "mb10"],
                  [1, "d-flex", "download", "cp", 3, "click"],
                  [1, "fa-kit", "fa-download"],
                  ["class", "fa-kit fa-lock pro d-flex ml5", 4, "ngIf"],
                  [1, "table-row"],
                  [1, "table-item"],
                  ["class", "table-row", 4, "ngFor", "ngForOf"],
                  ["class", "w50p", 3, "broadcast", 4, "ngIf"],
                  [1, "fa-kit", "fa-lock", "pro", "d-flex", "ml5"],
                  [1, "table-item", 3, "ngClass"],
                  [3, "ngSwitch"],
                  [4, "ngSwitchCase"],
                  ["class", "text-pending", 4, "ngIf"],
                  [1, "text-pending"],
                  [1, "text-error"],
                  [1, "text-success"],
                  [1, "text-warning"],
                  [1, "w50p", 3, "broadcast"],
                ],
                template: function (t, o) {
                  (1 & t &&
                    (e._UZ(0, "app-header"),
                    e.TgZ(1, "div", 0),
                    e.YNc(2, K, 50, 24, "div", 1),
                    e.YNc(3, $, 11, 11, "app-alert", 2),
                    e.YNc(4, z, 10, 8, "app-alert", 3),
                    e.YNc(5, V, 3, 3, "div", 4),
                    e.YNc(6, te, 3, 3, "app-pro-warn", 5),
                    e.YNc(7, se, 8, 7, "div", 6),
                    e.YNc(8, xe, 26, 20, "ng-container", 7),
                    e.qZA()),
                    2 & t &&
                      (e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        null == o.bulkMessageReport
                          ? null
                          : o.bulkMessageReport.broadcastId,
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", o.showStopAlert),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        o.showMiniAlert &&
                          o.bulkMessageReport &&
                          !o.bulkMessageReport.isFinished,
                      ),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        !(
                          null != o.bulkMessageReport &&
                          null != o.bulkMessageReport.report &&
                          null != o.bulkMessageReport.report.numbers &&
                          o.bulkMessageReport.report.numbers.length
                        ),
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", o.proWarnType),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null == o.bulkMessageReport
                          ? null
                          : o.bulkMessageReport.stopReason) ===
                          o.reportStopReason.MAIL_VERIFY,
                      ),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        null == o.bulkMessageReport ||
                          null == o.bulkMessageReport.report ||
                          null == o.bulkMessageReport.report.numbers
                          ? null
                          : o.bulkMessageReport.report.numbers.length,
                      )));
                },
                dependencies: [
                  s.mk,
                  s.sg,
                  s.O5,
                  s.RF,
                  s.n9,
                  R.g,
                  A.V,
                  B.w,
                  S.G,
                  U,
                  j,
                  J.Q,
                ],
                styles: [
                  ".home[_ngcontent-%COMP%]{background-color:#fff;padding:16px 24px}.home[_ngcontent-%COMP%]   .text-error[_ngcontent-%COMP%]{color:#d44c47}.home[_ngcontent-%COMP%]   .text-pending[_ngcontent-%COMP%]{color:#818181}.home[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%]{color:#448361}.home[_ngcontent-%COMP%]   .text-warning[_ngcontent-%COMP%]{color:#d79a00}.home[_ngcontent-%COMP%]   .stop-alert[_ngcontent-%COMP%]{color:#000}.home[_ngcontent-%COMP%]   .stop-alert[_ngcontent-%COMP%]   .text-error[_ngcontent-%COMP%]{color:#d44c47}.home[_ngcontent-%COMP%]   .stop-alert[_ngcontent-%COMP%]   .text-pending[_ngcontent-%COMP%]{color:#818181}.home[_ngcontent-%COMP%]   .icon-plus[_ngcontent-%COMP%]{background-color:#000;border-radius:25px;display:inline-flex;transform:rotate(45deg);padding:4px;position:absolute;right:12px;top:13px;z-index:1}.home[_ngcontent-%COMP%]   .report-status[_ngcontent-%COMP%]{position:relative;overflow:auto;border-radius:5px;width:100%}.home[_ngcontent-%COMP%]   .report-status[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]{display:flex;gap:5px;color:#0006;font-size:12px}.home[_ngcontent-%COMP%]   .report-status[_ngcontent-%COMP%]   .download.disable-btn[_ngcontent-%COMP%]{color:#0006}.home[_ngcontent-%COMP%]   .report-status[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-decoration:underline}.home[_ngcontent-%COMP%]   .report-status[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;padding:10px}.home[_ngcontent-%COMP%]   .report-status[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:first-child{border-bottom:1px solid rgba(0,0,0,.04);border-right:1px solid rgba(0,0,0,.04);background:rgba(0,0,0,.04)!important;color:#00000080;position:sticky;top:0;z-index:1}.home[_ngcontent-%COMP%]   .report-status[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:nth-child(2n-1){background:rgba(0,0,0,.03)}.home[_ngcontent-%COMP%]   .report-status[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]{width:100%;font-size:12px}.home[_ngcontent-%COMP%]   .report-status[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{white-space:nowrap;max-width:132px;overflow:hidden;text-overflow:ellipsis;display:block}.home[_ngcontent-%COMP%]   .report-status[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]:first-child{padding-left:15px;max-width:69px}.home[_ngcontent-%COMP%]   .report-status[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]:last-child{text-align:center}.home[_ngcontent-%COMP%]   .report-status[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]:last-child.STATUS_PENDING, .home[_ngcontent-%COMP%]   .report-status[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]:last-child   .pending[_ngcontent-%COMP%]{color:orange}.home[_ngcontent-%COMP%]   .report-status[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]:last-child.STATUS_FAILED, .home[_ngcontent-%COMP%]   .report-status[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]:last-child   .failed[_ngcontent-%COMP%]{color:red}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{width:100%;background:#fff;border-radius:4px;margin:auto;box-shadow:none}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]{display:flex;align-items:center}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .bug-icon[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:8px}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .campaign-name[_ngcontent-%COMP%]{font-size:16px;margin-right:8px;color:#333}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .status-label[_ngcontent-%COMP%]{color:#fff;font-size:12px;padding:2px 6px;border-radius:4px}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .status-label.live[_ngcontent-%COMP%]{color:#b42727;background:rgba(180,39,39,.1)}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .status-label.completed[_ngcontent-%COMP%]{color:#019f53;background:rgba(1,159,83,.1)}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .view-actions[_ngcontent-%COMP%]{font-size:14px;color:#4caf50;text-decoration:none;display:flex;align-items:center;gap:10px}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .view-actions[_ngcontent-%COMP%]   app-bar-loader[_ngcontent-%COMP%]{border-right:1px solid rgba(0,0,0,.1);padding-right:9px;display:flex}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .view-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#fff;border:1px solid #ddd;display:flex;align-items:center;padding:8px 12px;font-size:14px;border-radius:4px;cursor:pointer}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:8px}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stats-item[_ngcontent-%COMP%]{flex:1;border:1px solid rgba(0,0,0,.05);padding:8px;border-radius:4px}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stats-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:13px;color:#0009;margin-bottom:4px;padding:0;margin-bottom:8px!important;display:block;text-align:unset;font-weight:400}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stats-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stats-item.unavailable[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#d79a00}.home[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stats-item.sent[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#4caf50}.download-btn[_ngcontent-%COMP%]{margin-left:10px;padding:4px 7px}[_nghost-%COMP%]     app-alert .alert{display:flex;justify-content:center}.loader[_ngcontent-%COMP%]{scale:.8;margin-left:8px}",
                ],
              })),
              r
            );
          })(),
        },
      ];
      let ve = (() => {
        var n;
        class r {}
        return (
          ((n = r).ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({ imports: [x.Bz.forChild(Pe), x.Bz] })),
          r
        );
      })();
      var Oe = i(7677);
      let be = (() => {
        var n;
        class r {}
        return (
          ((n = r).ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({ imports: [s.ez, u.u5, ve, Oe.e] })),
          r
        );
      })();
    },
    7825: (w, v, i) => {
      i.d(v, { G: () => k });
      var s = i(9291),
        u = i(7228),
        x = i(9955),
        l = i(2572),
        O = i(8043),
        d = i(3427),
        f = i(858);
      let k = (() => {
        var _;
        class e {
          constructor(M, p, C) {
            ((this.extDataService = M),
              (this.waService = p),
              (this.uiService = C),
              (this.userNameIntitals = (0, s.Flj)(() =>
                this.extDataService.getUserDetails()?.getUserNameIntitals(),
              )),
              (this.downloadContactLink = `/${u.ME.downloadContact()}`),
              (this.reportsLink = `/${u.ME.messagingReport()}`),
              (this.helpLink = `/${u.ME.helpLink()}`),
              (this.msgLink = `/${u.ME.bulkMsgs()}`),
              (this.chatbotLink = `/${u.ME.chatbot()}`),
              (this.userDetailsPage = `/${u.ME.getUserDetails()}`));
          }
          closeWindow() {
            this.waService.closeWindow();
          }
        }
        return (
          ((_ = e).ɵfac = function (M) {
            return new (M || _)(s.Y36(x.a), s.Y36(l.o), s.Y36(O.F));
          }),
          (_.ɵcmp = s.Xpm({
            type: _,
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
            template: function (M, p) {
              (1 & M &&
                (s.TgZ(0, "div", 0)(1, "div", 1)(2, "i", 2),
                s.NdJ("click", function () {
                  return p.closeWindow();
                }),
                s.qZA(),
                s.TgZ(3, "div", 3),
                s._UZ(4, "img", 4),
                s.qZA()(),
                s.TgZ(5, "div", 5)(6, "div", 6),
                s._UZ(7, "i", 7),
                s.TgZ(8, "span"),
                s._uU(9),
                s.ALo(10, "jtranslate"),
                s.qZA()(),
                s.TgZ(11, "div", 6),
                s._UZ(12, "i", 8),
                s.TgZ(13, "span"),
                s._uU(14),
                s.ALo(15, "jtranslate"),
                s.qZA()(),
                s.TgZ(16, "div", 9),
                s._UZ(17, "i", 10),
                s.TgZ(18, "span"),
                s._uU(19),
                s.ALo(20, "jtranslate"),
                s.qZA()()(),
                s.TgZ(21, "div", 11)(22, "div", 12),
                s._uU(23),
                s.qZA(),
                s.TgZ(24, "div", 13)(25, "div", 14),
                s._UZ(26, "i", 15),
                s.TgZ(27, "span"),
                s._uU(28),
                s.ALo(29, "jtranslate"),
                s.qZA()(),
                s.TgZ(30, "div", 16),
                s._UZ(31, "i", 17),
                s.TgZ(32, "span"),
                s._uU(33),
                s.ALo(34, "jtranslate"),
                s.qZA()()()()()),
                2 & M &&
                  (s.xp6(6),
                  s.Q6J("routerLink", p.msgLink),
                  s.xp6(3),
                  s.Oqu(s.lcZ(10, 11, "Send messages")),
                  s.xp6(2),
                  s.Q6J("routerLink", p.reportsLink),
                  s.xp6(3),
                  s.Oqu(s.lcZ(15, 13, "Reports")),
                  s.xp6(2),
                  s.Q6J("routerLink", p.helpLink),
                  s.xp6(3),
                  s.Oqu(s.lcZ(20, 15, "Get support")),
                  s.xp6(4),
                  s.hij(" ", p.userNameIntitals(), " "),
                  s.xp6(2),
                  s.Q6J("routerLink", p.userDetailsPage),
                  s.xp6(3),
                  s.Oqu(s.lcZ(29, 17, "Profile")),
                  s.xp6(2),
                  s.Q6J("routerLink", p.downloadContactLink),
                  s.xp6(3),
                  s.Oqu(s.lcZ(34, 19, "Download contacts"))));
            },
            dependencies: [d.rH, d.Od, f.Q],
            styles: [
              ".header[_ngcontent-%COMP%]{padding:0 24px 0 17px;border-bottom:1px solid rgba(0,0,0,.05);display:flex;justify-content:space-between;height:50px}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%;gap:20px}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]{cursor:pointer;transition:border .2s;border-bottom:2px solid transparent;height:100%;color:#03080299}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]:hover{color:#019f53}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap.active[_ngcontent-%COMP%]{color:#019f53;border-bottom:2px solid #019F53}.header[_ngcontent-%COMP%]   .profile-initals[_ngcontent-%COMP%]{display:flex;width:28px;height:28px;padding:7px 6px;justify-content:center;align-items:center;gap:2px;border-radius:4px;background:#F3EECE;color:#03080299}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{padding-bottom:0}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{padding:5px 10px;color:#2e2e2e;font-size:13px;cursor:pointer;border-bottom:1px solid rgba(0,0,0,.08)}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{background:#fafafa}",
            ],
          })),
          e
        );
      })();
    },
  },
]);
