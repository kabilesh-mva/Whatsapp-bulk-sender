"use strict";
(self.webpackChunkwasender_chrome_extension =
  self.webpackChunkwasender_chrome_extension || []).push([
  [146],
  {
    9146: (X, I, d) => {
      (d.r(I), d.d(I, { BulkGroupMessagePageModule: () => Eo }));
      var l = d(6814),
        T = d(6223),
        y = d(3427),
        m = d(5861),
        R = d(2743),
        x = d(4631),
        A = d(7228),
        k = d(5258),
        S = d(3964),
        e = d(9291),
        v = d(6461);
      const h = new e.OlP("NGXTENSION_LOCAL_STORAGE", {
        providedIn: "root",
        factory: () => localStorage,
      });
      function D(o) {
        return "function" == typeof o;
      }
      function ee(o, i) {
        try {
          return o();
        } catch {
          return i;
        }
      }
      function ue(o) {
        return "undefined" === o ? void 0 : JSON.parse(o);
      }
      const E = (o, i = {}) => {
          if (
            (function U(o) {
              return "defaultValue" in o;
            })(i)
          ) {
            const r = D(i.defaultValue) ? i.defaultValue() : i.defaultValue;
            return ie(o, i, r);
          }
          return ie(o, i, void 0);
        },
        ie = (o, i, r) => {
          const n = D(i.stringify) ? i.stringify : JSON.stringify,
            t = D(i.parse) ? i.parse : ue,
            a = i.storageSync ?? !0;
          return (function _(o, i, r) {
            !i && (0, e.gHi)(o);
            const n = i ?? (0, e.f3M)(e.zs3);
            return r ? (0, e.r_H)(n, r) : n;
          })(E, i.injector, () => {
            const s = (0, e.f3M)(h),
              c = (0, e.f3M)(e.ktI),
              p = (0, e.f3M)(l.K0).defaultView;
            if (!p) throw new Error("Cannot access to window element");
            const g = ee(() => s.getItem(o), null),
              u = (0, e.tdS)(g ? ee(() => t(g), r) : r),
              M = (C) => {
                const b = ee(() => (void 0 === C ? null : n(C)), null);
                try {
                  if (b === s.getItem(o)) return;
                  (null === b ? s.removeItem(o) : s.setItem(o, b),
                    p.dispatchEvent(
                      new StorageEvent("storage", {
                        key: o,
                        newValue: b,
                        storageArea: s,
                      }),
                    ));
                } catch {}
              };
            if (a) {
              const C = u.set,
                b = u.update,
                Z = (w) => {
                  let F;
                  (b((V) => (F = w(V))), M(F));
                };
              ((u.set = (w) => {
                (C(w), M(w));
              }),
                (u.update = Z));
              const N = (w) => {
                if (w.storageArea === s && w.key === o) {
                  const F = null !== w.newValue ? t(w.newValue) : r;
                  u.set(F);
                }
              };
              (p.addEventListener("storage", N),
                c.onDestroy(() => {
                  p.removeEventListener("storage", N);
                }));
            }
            return u;
          });
        };
      class G {
        static getMappedText(i, r) {
          return r?.replace(/{{(.*?)}}/g, (t, a) => {
            const s = a.toLowerCase(),
              c = Object.keys(i).reduce(
                (p, g) => ((p[`${g}`.toLowerCase()] = i[g]), p),
                {},
              );
            return c.hasOwnProperty(s) ? c[s] : "";
          });
        }
        static getInvalidVariables(i, r) {
          const n = /{{(.*?)}}/g;
          let t;
          const a = [],
            s = r.map((c) => `${c}`.toLowerCase());
          for (; null !== (t = n.exec(i));)
            s.includes(t[1].toLowerCase()) || a.push(t[1]);
          return a;
        }
        static getValidVariables(i, r) {
          const n = /{{(.*?)}}/g;
          let t;
          const a = [],
            s = r.map((c) => `${c}`.toLowerCase());
          for (; null !== (t = n.exec(i));) {
            const c = t[1].toLowerCase();
            s.includes(c) && !a.includes(t[1]) && a.push(t[1]);
          }
          return a;
        }
      }
      var te = d(3932),
        j = d(2017),
        se = d(2572);
      let ne = (() => {
        var o;
        class i {
          constructor(n) {
            ((this.excelService = n),
              (this.excelDetails = null),
              (this.worksheet = []),
              (this.columnNames = (0, e.tdS)([])),
              (this.activeSheet = E("activeSheet")),
              (this.selectedPhoneColumn = E("selectedPhoneColumn")),
              (this.startRow = E("startRow")),
              (this.endRow = E("startendRowRow")),
              (this.numberColumn = (0, e.Flj)(() => {
                const t = this.worksheet?.[0];
                let a = this.columnNames()?.[0];
                for (const s of this.columnNames())
                  try {
                    const c = `${t[s]}`?.trim(),
                      p = parseInt(`${c}`);
                    if (!isNaN(p) && c?.length >= 6) {
                      a = s;
                      break;
                    }
                  } catch {}
                return a;
              })));
          }
          init() {
            this.columnNames() || this.columnNames.set([]);
          }
          selectWorksheet(n) {
            var t = this;
            return (0, m.Z)(function* () {
              t.activeSheet.set(n);
              try {
                if (t.file) {
                  const a = yield t.excelService.readSheet(
                    t.file,
                    t.activeSheet(),
                  );
                  ((t.worksheet = a.data), t.columnNames.set(a.columns));
                }
              } catch (a) {
                console.error(a);
              }
              t.selectedPhoneColumn.set(
                t.columnNames().includes(t.selectedPhoneColumn())
                  ? t.selectedPhoneColumn()
                  : t.numberColumn(),
              );
            })();
          }
          getInitActiveSheet() {
            return this.excelDetails?.sheetNames.includes(this.activeSheet())
              ? this.activeSheet()
              : this.excelDetails?.sheetNames[0];
          }
        }
        return (
          ((o = i).ɵfac = function (n) {
            return new (n || o)(e.LFG(v.xB));
          }),
          (o.ɵprov = e.Yz7({ token: o, factory: o.ɵfac, providedIn: "root" })),
          i
        );
      })();
      var q = d(9955),
        he = d(8377),
        oe = d(7122),
        Y = d(2226);
      class re {
        constructor(i, r, n, t, a) {
          ((this.number = i),
            (this.originalNumber = r),
            (this.correctNumber = n),
            (this.isValid = t),
            (this.sheetIndex = a));
        }
      }
      class le {
        constructor(i, r, n) {
          ((this.validNumber = i),
            (this.invalidNumber = r),
            (this.phoneData = n));
        }
      }
      let L = (() => {
        var o;
        class i {
          constructor(n, t, a, s, c, p, g) {
            ((this.waService = n),
              (this.waBGService = t),
              (this.sheet = a),
              (this.extDataService = s),
              (this.routingService = c),
              (this.broadcastService = p),
              (this.log = g),
              (this.message = E("messages")),
              (this.sendWithCaption = E("sendWithCaption")),
              (this.addUnsubscriptionText = E("addUnsubscriptionText")),
              (this.unsubscriptionText = E("unsubscriptionText")),
              (this.randomDelay = E("randomDelay")),
              (this.waitForMin = E("waitForMin")),
              (this.waitAfterpeople = E("waitAfterpeople")),
              (this.selectedCountryInfo = E("selectedCountryInfo")),
              (this.timegapSettings = E("timegapSettings")),
              (this.batchSettings = E("batchSettings")),
              (this.banAlertTime = E("banAlertTime")),
              (this.attachments = []),
              (this.phoneNumberData = null),
              (this.proFeauters = ""),
              (this.forceNumbersLimit = 0),
              (this.isValidUnsubscripitonText = (0, e.Flj)(() => {
                const u = this.unsubscriptionText()?.match(/\{[^{}]+\}/g);
                return null !== u && 1 === u.length;
              })));
          }
          updateAttachmentsOverall(n) {
            var t = this;
            return (0, m.Z)(function* () {
              (t.sendWithCaption.set(n),
                yield t.waService.sendSetAttachmentMessage(t.attachments));
            })();
          }
          init() {
            var n = this;
            return (0, m.Z)(function* () {
              n.forceNumbersLimit = 0;
              const t = yield n.waService.getAttachments();
              ((n.attachments =
                JSON.parse(JSON.stringify(t))?.map(
                  (a) => new k.M(a.name, a.size, a.type, a.base64),
                ) || []),
                n.unsubscriptionText() ||
                  n.unsubscriptionText.set(
                    x.MessageTemplate.DEFAULT_UNSUBSCRIPTION_TEXT,
                  ));
            })();
          }
          getMessageVariants() {
            return (this.message() || []).filter((n) => n?.trim()?.length);
          }
          primaryMessage() {
            return this.message()?.[0] ?? "";
          }
          setPrimaryMessage(n) {
            this.setMessageAt(0, n);
          }
          setMessageAt(n, t) {
            const a = [...(this.message() || [])];
            for (; a.length <= n;) a.push("");
            ((a[n] = t ?? ""), this.message.set(a));
          }
          addMessageVariant() {
            const n = [...(this.message() || [])];
            return (n.push(""), this.message.set(n), n.length - 1);
          }
          removeMessageVariant(n) {
            const t = this.message() || [];
            n <= 0 ||
              n >= t.length ||
              this.message.set(t.filter((a, s) => s !== n));
          }
          get proceesablePhoneData() {
            const n = new le(0, 0, []);
            let t = this.sheet.endRow() - 1;
            return (
              this.forceNumbersLimit &&
                t > this.forceNumbersLimit &&
                (t = this.forceNumbersLimit),
              (n.phoneData = this.sheet.excelDetails
                ? this.sheet.startRow() >= 2
                  ? this.phoneNumberData?.phoneData?.slice(
                      this.sheet.startRow() - 2,
                      t,
                    )
                  : this.phoneNumberData?.phoneData?.slice(0, t)
                : this.forceNumbersLimit
                  ? this.phoneNumberData?.phoneData?.slice(
                      0,
                      this.forceNumbersLimit,
                    )
                  : this.phoneNumberData?.phoneData),
              (n.validNumber = n?.phoneData?.filter((a) => a.isValid)?.length),
              (n.invalidNumber = n?.phoneData?.length - n.validNumber),
              n
            );
          }
          sendMessages(n, t) {
            var a = this;
            return (0, m.Z)(function* () {
              if (
                ((a.processingMessageSending = !0),
                n === x.Operation.OPERATION_FILTER && !a.extDataService.isPro())
              )
                return (
                  (a.proFeauters = j.B.FILTER),
                  void (a.processingMessageSending = !1)
                );
              const s = yield a.broadcastService.getBroadcastsCount(),
                c = yield a.createBroadcast(n),
                p = a.getDefaultBulkMessage(c.id);
              p.metaData = {
                sendSourceAction: t,
                addUnsubscriptionText: a.addUnsubscriptionText(),
                excelUsed: !!a.sheet.excelDetails,
                freeMessageLimit: a.extDataService.appConfig.freeMessageLimit,
                totalBroadCasts: s,
              };
              const g = a.getMessageVariants(),
                u = c.unsubscriptionTextToBeSent(),
                M = u ? `\n\n_${u}_` : "";
              switch (
                (a.proceesablePhoneData?.phoneData.forEach((C, b) => {
                  p.numbers.push({ contact: `${C.correctNumber}` });
                  const Z =
                      (a.extDataService.isPro() &&
                        a.sheet.worksheet?.[C.sheetIndex]) ||
                      {},
                    w = `${g.length ? g[b % g.length] : c.text || ""}${M}`;
                  p.messages.push(Z ? G.getMappedText(Z, w) : w);
                }),
                n)
              ) {
                case x.Operation.OPERATION_SEND_MESSAGE:
                  const C = G.getValidVariables(
                    a.primaryMessage(),
                    a.sheet.columnNames(),
                  )?.filter((b) => b?.trim());
                  (a.log.log("message_job", {
                    messageText: c.msgToBeSent(),
                    ...p.metaData,
                    timeGap: p.randomizeDelay,
                    feature_time_gap: a.timegapSettings(),
                    feature_batching: a.batchSettings(),
                    batchGap: p.batchGap,
                    batchSize: p.batchSize,
                    sendAsCaption: p.isCaption,
                    feature_attachment: p.attachment,
                    attachmentCounts:
                      p.attachment && a.attachments ? a.attachments.length : 0,
                    attachmentSizes:
                      p.attachment && a.attachments
                        ? a.attachments.map((b) => b.size).join(", ")
                        : 0,
                    isPro: p.isPro,
                    messaging_started_at: Date.now(),
                    numbers_count: p.numbers.length,
                    usingPersonalization: C.length > 0,
                  }),
                    yield a.waBGService.sendBulkMessages(p));
                  break;
                case x.Operation.OPERATION_FILTER:
                  ((p.randomizeDelay = !1),
                    (p.messageGap = 0),
                    (p.batchGap = 0),
                    (p.batchSize = 0),
                    yield a.waBGService.sendFilter(p));
              }
              ((a.processingMessageSending = !1),
                a.routingService.navigate([A.ME.currentMessagingReport()]));
            })();
          }
          createBroadcast(n) {
            var t = this;
            return (0, m.Z)(function* () {
              const a = `${Date.now()}`,
                s = t.attachments.map(
                  (function () {
                    var p = (0, m.Z)(function* (g) {
                      const u = yield t.broadcastService.uploadAttachments(
                        a,
                        encodeURIComponent(g.name),
                        g,
                      );
                      return new x.MessageAttachmentDetails(
                        g.name,
                        u,
                        g.size,
                        g.type,
                      );
                    });
                    return function (g) {
                      return p.apply(this, arguments);
                    };
                  })(),
                ),
                c = yield Promise.all(s);
              return yield t.broadcastService.saveBroadcast(
                new x.Broadcast(
                  a,
                  n,
                  t.extDataService.currentUser.phoneNumber,
                  t.addUnsubscriptionText() ? t.unsubscriptionText() : "",
                  t.addUnsubscriptionText(),
                  c,
                  t.sendWithCaption(),
                  t.primaryMessage(),
                  Date.now(),
                ),
              );
            })();
          }
          getDefaultBulkMessage(n) {
            return new x.BulkMessage(
              n,
              this.extDataService.currentUser.phoneNumber,
              this.sheet.excelDetails?.fileName || "Manual",
              [],
              [],
              this.batchSettings() && this.extDataService.isPro()
                ? this.waitAfterpeople()
                : 0,
              this.batchSettings() && this.extDataService.isPro()
                ? this.waitForMin()
                : 0,
              this.extDataService.isPro(),
              this.timegapSettings() && this.extDataService.isPro()
                ? this.randomDelay()
                : 0,
              this.timegapSettings() && this.extDataService.isPro(),
              !!this.attachments?.length,
              this.sendWithCaption(),
              Date.now(),
              {},
            );
          }
          createPhoneNumbersData(n) {
            let t = 0,
              a = 0,
              s = [];
            (n.map((c, p) => {
              const g = `${c}`?.replace(/[^0-9]/g, "")?.replace(/^0+/, "");
              if (g.trim()) {
                const u = "XX" === this.selectedCountryInfo().code,
                  M = u
                    ? (0, te.S)(`+${g}`)
                    : (0, te.S)(`${g}`, this.selectedCountryInfo().code);
                if (M?.isValid()) {
                  t++;
                  const C = u ? g : M?.nationalNumber,
                    b = u
                      ? g
                      : `${this.selectedCountryInfo().dial_code}${M?.nationalNumber}`;
                  s.push(new re(C, g, b, !0, p));
                } else if (
                  !g.startsWith("52") ||
                  ("XX" !== this.selectedCountryInfo().code &&
                    "52" !== this.selectedCountryInfo().code)
                ) {
                  a++;
                  const C = u
                    ? g
                    : `${this.selectedCountryInfo().dial_code}${g}`;
                  s.push(new re(g, g, C, !1, p));
                } else {
                  t++;
                  const C =
                    "52" === this.selectedCountryInfo().code
                      ? g.slice(0, 2)
                      : g;
                  s.push(new re(C, g, g, !0, p));
                }
              }
            }),
              (this.phoneNumberData = new le(t, a, s)));
          }
        }
        return (
          ((o = i).ɵfac = function (n) {
            return new (n || o)(
              e.LFG(se.o),
              e.LFG(se.j),
              e.LFG(ne),
              e.LFG(q.a),
              e.LFG(he.Z),
              e.LFG(oe.Mr),
              e.LFG(Y.m),
            );
          }),
          (o.ɵprov = e.Yz7({ token: o, factory: o.ɵfac, providedIn: "root" })),
          i
        );
      })();
      var fe = d(8645),
        Q = (function (o) {
          return (
            (o.IGNORE_AND_SEND = "Ignore and send"),
            (o.FIX_AND_SEND = "Fix and send"),
            (o.NO_ERROR_AND_SEND = "No error and send"),
            (o.FILTER = "Filter"),
            o
          );
        })(Q || {}),
        J = (function (o) {
          return (
            (o.PROMOTIONAL_MESSAGE_ERROR = "PROMOTIONAL_MESSAGE_ERROR"),
            (o.UPDATE_MESSAGE_ERROR = "UPDATE_MESSAGE_ERROR"),
            o
          );
        })(J || {}),
        H = (function (o) {
          return (
            (o.HIGH_MESSAGE_COUNT_ERROR = "highMessageCountError"),
            (o.NEW_WA_NUMBER_ERROR = "NEW_WA_NUMBER_ERROR"),
            (o.HIGH_MESSAGE_SPEED_ERROR = "HIGH_MESSAGE_SPEED_ERROR"),
            (o.PROMO_MSGS_ERROR = "PROMO_MSGS_ERROR"),
            (o.UNSUBSCRIBE_NOT_ADDED = "UNSUBSCRIBE_NOT_ADDED"),
            o
          );
        })(H || {});
      class z {
        constructor(i, r) {
          ((this.label = i),
            (this.action = r),
            (this.isLoading = !1),
            (this.action = this.wrapWithLoading(r)));
        }
        wrapWithLoading(i) {
          var r = this;
          return (0, m.Z)(function* () {
            r.isLoading = !0;
            try {
              yield i();
            } finally {
              r.isLoading = !1;
            }
          });
        }
      }
      var O = (function (o) {
        return (
          (o.INPROGRESS = "INPROGRESS"),
          (o.PROCESSED = "PROCESSED"),
          (o.CANCELLED = "CANCELLED"),
          (o.PENDING = "PENDING"),
          o
        );
      })(O || {});
      class ce {
        constructor(i, r, n, t = () => !1, a = O.PENDING, s = !1) {
          ((this.id = i),
            (this.actionBtn = r),
            (this.skipBtn = n),
            (this.checkIfErrorOccurred = t),
            (this.errorProcessState = a),
            (this.isAllowedForFreeUser = s));
        }
      }
      let W = (() => {
        var o;
        class i {
          constructor(n, t, a, s, c) {
            ((this.store = n),
              (this.extAuth = t),
              (this.userSerivce = a),
              (this.sheet = s),
              (this.logger = c),
              (this.highMessageCountError = (0, e.tdS)(null)),
              (this.newWANumberError = (0, e.tdS)(null)),
              (this.highMsgsSpeedError = (0, e.tdS)(null)),
              (this.promoMsgsError = (0, e.tdS)(null)),
              (this.unsubscribeNotAdded = (0, e.tdS)(null)),
              (this.activeErrorSegment = (0, e.tdS)(
                J.PROMOTIONAL_MESSAGE_ERROR,
              )),
              (this.textMsgWhileCalculatingError = (0, e.tdS)("")),
              (this.activeSegmentErrors = (0, e.tdS)([])),
              (this.showErrorModal = new fe.x()),
              (this.showErrorModal$ = this.showErrorModal.asObservable()),
              (this.fixingAll = !1),
              (this.inprogressError = (0, e.Flj)(() =>
                this.activeSegmentErrors().find(
                  (p) => p.errorProcessState === O.INPROGRESS,
                ),
              )),
              (this.inprogressErrorIndex = (0, e.Flj)(() =>
                this.activeSegmentErrors().findIndex(
                  (p) => p.errorProcessState === O.INPROGRESS,
                ),
              )),
              this.activeErrorSegment.set(J.PROMOTIONAL_MESSAGE_ERROR));
          }
          get messageRedrafted() {
            return (
              this.textMsgWhileCalculatingError()?.trim() &&
              this.store.primaryMessage()?.trim() ===
                this.textMsgWhileCalculatingError()?.trim()
            );
          }
          onShowErrorModal() {
            this.showErrorModal.next(!0);
          }
          recalculateErrors() {
            return ((this.store.forceNumbersLimit = 0), []);
          }
          checkIfHighSpeedMsging(n) {
            const t =
              !this.store.timegapSettings() || !this.store.batchSettings();
            let a = !1;
            return (
              this.store.proceesablePhoneData.phoneData?.length > 10 &&
                (a =
                  this.activeErrorSegment() === J.PROMOTIONAL_MESSAGE_ERROR
                    ? n
                      ? this.store.waitForMin() <= 10 ||
                        this.store.waitAfterpeople() >= 20 ||
                        this.store.randomDelay() <= 10
                      : this.store.waitForMin() <= 10 ||
                        this.store.waitAfterpeople() >= 50 ||
                        this.store.randomDelay() <= 15
                    : n
                      ? this.store.waitForMin() <= 10 ||
                        this.store.waitAfterpeople() >= 40 ||
                        this.store.randomDelay() <= 10
                      : this.store.waitForMin() <= 10 ||
                        this.store.waitAfterpeople() >= 50 ||
                        this.store.randomDelay() <= 10),
              t || a
            );
          }
          createPromoMsgsError() {
            var n = this;
            this.store.primaryMessage() !==
              this.textMsgWhileCalculatingError() &&
              this.promoMsgsError.set(
                new ce(
                  H.PROMO_MSGS_ERROR,
                  new z(
                    "Redraft with AI",
                    (0, m.Z)(function* () {
                      let t = [];
                      n.sheet.excelDetails &&
                        n.sheet.columnNames()?.length > 1 &&
                        (t = n.sheet
                          .columnNames()
                          .filter((s) => s !== n.sheet.selectedPhoneColumn()));
                      const a = yield n.userSerivce.redraftTextMessage(
                        n.store.primaryMessage(),
                        t,
                      );
                      (n.logger.log("promo_msgs_error", {
                        resolve: !0,
                        message: n.store.primaryMessage(),
                        aiMessage: a,
                      }),
                        n.textMsgWhileCalculatingError.set(
                          n.store.primaryMessage() || "",
                        ),
                        n.store.setPrimaryMessage(a),
                        n.nextStep(O.PROCESSED));
                    }),
                  ),
                  new z(
                    "Skip",
                    (0, m.Z)(function* () {
                      (n.logger.log("promo_msgs_error", {
                        resolve: !1,
                        message: n.store.primaryMessage(),
                      }),
                        n.nextStep(O.CANCELLED));
                    }),
                  ),
                  () =>
                    this.store.primaryMessage() !==
                    this.textMsgWhileCalculatingError(),
                  O.PENDING,
                ),
              );
          }
          createUnsubscribeNotAddedError() {
            var n = this;
            this.unsubscribeNotAdded.set(
              new ce(
                H.UNSUBSCRIBE_NOT_ADDED,
                new z(
                  "Add Unsubscription Text",
                  (0, m.Z)(function* () {
                    (n.store.addUnsubscriptionText.set(!0),
                      n.store.unsubscriptionText.set(
                        x.MessageTemplate.DEFAULT_UNSUBSCRIPTION_TEXT,
                      ),
                      n.logger.log("unsubscribe_not_added_error", {
                        resolve: !0,
                        addUnsubscriptionText: n.store.addUnsubscriptionText(),
                        unsubscriptionText: n.store.unsubscriptionText(),
                      }),
                      n.nextStep(O.PROCESSED));
                  }),
                ),
                new z(
                  "Skip",
                  (0, m.Z)(function* () {
                    (n.logger.log("unsubscribe_not_added_error", {
                      resolve: !1,
                    }),
                      n.nextStep(O.CANCELLED));
                  }),
                ),
                () =>
                  !this.store.addUnsubscriptionText() ||
                  !this.store.unsubscriptionText() ||
                  !this.store.isValidUnsubscripitonText(),
                O.PENDING,
                !0,
              ),
            );
          }
          getActiveSegmentErrors() {
            let n = [];
            return (
              (n =
                this.activeErrorSegment() === J.PROMOTIONAL_MESSAGE_ERROR
                  ? this.getPromoErrorsToBeProcessed()
                  : this.getUpdatesErrorsToBeProcessed()),
              n
            );
          }
          getAllOccurredErrors() {
            return this.getAllErrors()?.filter((n) =>
              n?.checkIfErrorOccurred(),
            );
          }
          getAllErrors() {
            return [
              this.highMessageCountError(),
              this.newWANumberError(),
              this.highMsgsSpeedError(),
              this.promoMsgsError(),
              this.unsubscribeNotAdded(),
            ].filter((n) => null !== n);
          }
          nextStep(n) {
            const t = this.inprogressErrorIndex(),
              a = this.activeSegmentErrors();
            (t > -1 && (a[t].errorProcessState = n),
              t + 1 < a.length
                ? (a[t + 1].errorProcessState = O.INPROGRESS)
                : this.store.sendMessages(
                    x.Operation.OPERATION_SEND_MESSAGE,
                    Q.FIX_AND_SEND,
                  ),
              this.activeSegmentErrors.set(a));
          }
          getAllPromoErros() {
            return [
              this.highMessageCountError(),
              this.newWANumberError(),
              this.highMsgsSpeedError(),
              this.promoMsgsError(),
              this.unsubscribeNotAdded(),
            ].filter((n) => null !== n);
          }
          getPromoErrorsToBeProcessed() {
            return this.getAllPromoErros().filter(
              (n) =>
                (n.errorProcessState === O.PENDING ||
                  n.errorProcessState === O.INPROGRESS) &&
                n.checkIfErrorOccurred(),
            );
          }
          getAllUpdatesErrors() {
            return [
              this.highMessageCountError(),
              this.newWANumberError(),
              this.highMsgsSpeedError(),
              this.unsubscribeNotAdded(),
            ].filter((n) => null !== n);
          }
          getUpdatesErrorsToBeProcessed() {
            return this.getAllUpdatesErrors().filter(
              (n) =>
                (n.errorProcessState === O.PENDING ||
                  n.errorProcessState === O.INPROGRESS) &&
                n.checkIfErrorOccurred(),
            );
          }
          fixAll() {
            var n = this;
            return (0, m.Z)(function* () {
              n.fixingAll = !0;
              const t = n.activeSegmentErrors();
              for (const a of t)
                if (
                  a.errorProcessState === O.PENDING ||
                  a.errorProcessState === O.INPROGRESS
                ) {
                  a.errorProcessState = O.INPROGRESS;
                  try {
                    yield a.actionBtn.action();
                  } catch (s) {
                    console.error("Error while processing error:", s, a);
                  }
                  a.errorProcessState = O.PROCESSED;
                }
              (n.logger.log("fix_all_errors", n.getErrorsMap(t)),
                (n.fixingAll = !1));
            })();
          }
          getErrorsMap(n) {
            const t = n.map((s) => s.id),
              a = {};
            return (
              t.forEach((s) => {
                a[s] = !0;
              }),
              a
            );
          }
        }
        return (
          ((o = i).ɵfac = function (n) {
            return new (n || o)(
              e.LFG(L),
              e.LFG(q.a),
              e.LFG(oe.KD),
              e.LFG(ne),
              e.LFG(Y.m),
            );
          }),
          (o.ɵprov = e.Yz7({ token: o, factory: o.ɵfac, providedIn: "root" })),
          i
        );
      })();
      var xe = d(6593),
        pe = d(4517),
        Me = d(7825),
        Ce = d(4825);
      const be = ["fileSelector"];
      function ve(o, i) {
        if ((1 & o && (e.TgZ(0, "div", 8), e._uU(1), e.qZA()), 2 & o)) {
          const r = e.oxw(2);
          (e.xp6(1), e.Oqu(r.dropZoneLabel));
        }
      }
      function Oe(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div")(1, "input", 9),
            e.NdJ("click", function (t) {
              e.CHM(r);
              const a = e.oxw(2);
              return e.KtG(a.openFileSelector(t));
            }),
            e.qZA()());
        }
        if (2 & o) {
          const r = e.oxw(2);
          (e.xp6(1),
            e.s9C("value", r.browseBtnLabel),
            e.Q6J("className", r.browseBtnClassName));
        }
      }
      function Pe(o, i) {
        if (
          (1 & o &&
            (e.YNc(0, ve, 2, 1, "div", 6), e.YNc(1, Oe, 2, 2, "div", 7)),
          2 & o)
        ) {
          const r = e.oxw();
          (e.Q6J("ngIf", r.dropZoneLabel),
            e.xp6(1),
            e.Q6J("ngIf", r.showBrowseBtn));
        }
      }
      function Te(o, i) {}
      const Ee = function (o) {
        return { openFileSelector: o };
      };
      class K {
        constructor(i, r) {
          ((this.relativePath = i), (this.fileEntry = r));
        }
      }
      let we = (() => {
          var o;
          class i {
            constructor(n) {
              this.template = n;
            }
          }
          return (
            ((o = i).ɵfac = function (n) {
              return new (n || o)(e.Y36(e.Rgc));
            }),
            (o.ɵdir = e.lG2({
              type: o,
              selectors: [["", "ngx-file-drop-content-tmp", ""]],
            })),
            i
          );
        })(),
        ge = (() => {
          var o;
          class i {
            get disabled() {
              return this._disabled;
            }
            set disabled(n) {
              this._disabled = null != n && "false" != `${n}`;
            }
            constructor(n, t) {
              ((this.zone = n),
                (this.renderer = t),
                (this.accept = "*"),
                (this.directory = !1),
                (this.multiple = !0),
                (this.dropZoneLabel = ""),
                (this.dropZoneClassName = "ngx-file-drop__drop-zone"),
                (this.useDragEnter = !1),
                (this.contentClassName = "ngx-file-drop__content"),
                (this.showBrowseBtn = !1),
                (this.browseBtnClassName =
                  "btn btn-primary btn-xs ngx-file-drop__browse-btn"),
                (this.browseBtnLabel = "Browse files"),
                (this.onFileDrop = new e.vpe()),
                (this.onFileOver = new e.vpe()),
                (this.onFileLeave = new e.vpe()),
                (this.isDraggingOverDropZone = !1),
                (this.globalDraggingInProgress = !1),
                (this.files = []),
                (this.numOfActiveReadEntries = 0),
                (this.helperFormEl = null),
                (this.fileInputPlaceholderEl = null),
                (this.dropEventTimerSubscription = null),
                (this._disabled = !1),
                (this.openFileSelector = (a) => {
                  this.fileSelector &&
                    this.fileSelector.nativeElement &&
                    this.fileSelector.nativeElement.click();
                }),
                (this.globalDragStartListener = this.renderer.listen(
                  "document",
                  "dragstart",
                  (a) => {
                    this.globalDraggingInProgress = !0;
                  },
                )),
                (this.globalDragEndListener = this.renderer.listen(
                  "document",
                  "dragend",
                  (a) => {
                    this.globalDraggingInProgress = !1;
                  },
                )));
            }
            ngOnDestroy() {
              (this.dropEventTimerSubscription &&
                (this.dropEventTimerSubscription.unsubscribe(),
                (this.dropEventTimerSubscription = null)),
                this.globalDragStartListener(),
                this.globalDragEndListener(),
                (this.files = []),
                (this.helperFormEl = null),
                (this.fileInputPlaceholderEl = null));
            }
            onDragOver(n) {
              this.useDragEnter
                ? (this.preventAndStop(n),
                  n.dataTransfer && (n.dataTransfer.dropEffect = "copy"))
                : !this.isDropzoneDisabled() &&
                  !this.useDragEnter &&
                  n.dataTransfer &&
                  (this.isDraggingOverDropZone ||
                    ((this.isDraggingOverDropZone = !0),
                    this.onFileOver.emit(n)),
                  this.preventAndStop(n),
                  (n.dataTransfer.dropEffect = "copy"));
            }
            onDragEnter(n) {
              !this.isDropzoneDisabled() &&
                this.useDragEnter &&
                (this.isDraggingOverDropZone ||
                  ((this.isDraggingOverDropZone = !0), this.onFileOver.emit(n)),
                this.preventAndStop(n));
            }
            onDragLeave(n) {
              this.isDropzoneDisabled() ||
                (this.isDraggingOverDropZone &&
                  ((this.isDraggingOverDropZone = !1),
                  this.onFileLeave.emit(n)),
                this.preventAndStop(n));
            }
            dropFiles(n) {
              if (
                !this.isDropzoneDisabled() &&
                ((this.isDraggingOverDropZone = !1), n.dataTransfer)
              ) {
                let t;
                ((t = n.dataTransfer.items
                  ? n.dataTransfer.items
                  : n.dataTransfer.files),
                  this.preventAndStop(n),
                  this.checkFiles(t));
              }
            }
            uploadFiles(n) {
              !this.isDropzoneDisabled() &&
                n.target &&
                (this.checkFiles(n.target.files || []), this.resetFileInput());
            }
            getFakeDropEntry(n) {
              const t = {
                name: n.name,
                isDirectory: !1,
                isFile: !0,
                file: (a) => a(n),
              };
              return new K(t.name, t);
            }
            checkFile(n) {
              if (n) {
                if ("webkitGetAsEntry" in n) {
                  let t = n.webkitGetAsEntry();
                  if (t) {
                    if (t.isFile) {
                      const a = new K(t.name, t);
                      this.addToQueue(a);
                    } else t.isDirectory && this.traverseFileTree(t, t.name);
                    return;
                  }
                }
                this.addToQueue(this.getFakeDropEntry(n));
              }
            }
            checkFiles(n) {
              for (let t = 0; t < n.length; t++) this.checkFile(n[t]);
              (this.dropEventTimerSubscription &&
                this.dropEventTimerSubscription.unsubscribe(),
                (this.dropEventTimerSubscription = (0, Ce.H)(
                  200,
                  200,
                ).subscribe(() => {
                  if (
                    this.files.length > 0 &&
                    0 === this.numOfActiveReadEntries
                  ) {
                    const t = this.files;
                    ((this.files = []), this.onFileDrop.emit(t));
                  }
                })));
            }
            traverseFileTree(n, t) {
              if (n.isFile) {
                const a = new K(t, n);
                this.files.push(a);
              } else {
                t += "/";
                const a = n.createReader();
                let s = [];
                const c = () => {
                  (this.numOfActiveReadEntries++,
                    a.readEntries((p) => {
                      if (p.length) ((s = s.concat(p)), c());
                      else if (0 === s.length) {
                        const g = new K(t, n);
                        this.zone.run(() => {
                          this.addToQueue(g);
                        });
                      } else
                        for (let g = 0; g < s.length; g++)
                          this.zone.run(() => {
                            this.traverseFileTree(s[g], t + s[g].name);
                          });
                      this.numOfActiveReadEntries--;
                    }));
                };
                c();
              }
            }
            resetFileInput() {
              if (this.fileSelector && this.fileSelector.nativeElement) {
                const n = this.fileSelector.nativeElement,
                  t = n.parentElement,
                  a = this.getHelperFormElement(),
                  s = this.getFileInputPlaceholderElement();
                t !== a &&
                  (this.renderer.insertBefore(t, s, n),
                  this.renderer.appendChild(a, n),
                  a.reset(),
                  this.renderer.insertBefore(t, n, s),
                  this.renderer.removeChild(t, s));
              }
            }
            getHelperFormElement() {
              return (
                this.helperFormEl ||
                  (this.helperFormEl = this.renderer.createElement("form")),
                this.helperFormEl
              );
            }
            getFileInputPlaceholderElement() {
              return (
                this.fileInputPlaceholderEl ||
                  (this.fileInputPlaceholderEl =
                    this.renderer.createElement("div")),
                this.fileInputPlaceholderEl
              );
            }
            isDropzoneDisabled() {
              return this.globalDraggingInProgress || this.disabled;
            }
            addToQueue(n) {
              this.files.push(n);
            }
            preventAndStop(n) {
              (n.stopPropagation(), n.preventDefault());
            }
          }
          return (
            ((o = i).ɵfac = function (n) {
              return new (n || o)(e.Y36(e.R0b), e.Y36(e.Qsj));
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [["ngx-file-drop"]],
              contentQueries: function (n, t, a) {
                if ((1 & n && e.Suo(a, we, 5, e.Rgc), 2 & n)) {
                  let s;
                  e.iGM((s = e.CRH())) && (t.contentTemplate = s.first);
                }
              },
              viewQuery: function (n, t) {
                if ((1 & n && e.Gf(be, 7), 2 & n)) {
                  let a;
                  e.iGM((a = e.CRH())) && (t.fileSelector = a.first);
                }
              },
              inputs: {
                accept: "accept",
                directory: "directory",
                multiple: "multiple",
                dropZoneLabel: "dropZoneLabel",
                dropZoneClassName: "dropZoneClassName",
                useDragEnter: "useDragEnter",
                contentClassName: "contentClassName",
                showBrowseBtn: "showBrowseBtn",
                browseBtnClassName: "browseBtnClassName",
                browseBtnLabel: "browseBtnLabel",
                disabled: "disabled",
              },
              outputs: {
                onFileDrop: "onFileDrop",
                onFileOver: "onFileOver",
                onFileLeave: "onFileLeave",
              },
              decls: 7,
              vars: 15,
              consts: [
                [3, "className", "drop", "dragover", "dragenter", "dragleave"],
                [3, "className"],
                [
                  "type",
                  "file",
                  1,
                  "ngx-file-drop__file-input",
                  3,
                  "accept",
                  "multiple",
                  "change",
                ],
                ["fileSelector", ""],
                ["defaultContentTemplate", ""],
                [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
                ["class", "ngx-file-drop__drop-zone-label", 4, "ngIf"],
                [4, "ngIf"],
                [1, "ngx-file-drop__drop-zone-label"],
                ["type", "button", 3, "className", "value", "click"],
              ],
              template: function (n, t) {
                if (
                  (1 & n &&
                    (e.TgZ(0, "div", 0),
                    e.NdJ("drop", function (s) {
                      return t.dropFiles(s);
                    })("dragover", function (s) {
                      return t.onDragOver(s);
                    })("dragenter", function (s) {
                      return t.onDragEnter(s);
                    })("dragleave", function (s) {
                      return t.onDragLeave(s);
                    }),
                    e.TgZ(1, "div", 1)(2, "input", 2, 3),
                    e.NdJ("change", function (s) {
                      return t.uploadFiles(s);
                    }),
                    e.qZA(),
                    e.YNc(4, Pe, 2, 2, "ng-template", null, 4, e.W1O),
                    e.YNc(6, Te, 0, 0, "ng-template", 5),
                    e.qZA()()),
                  2 & n)
                ) {
                  const a = e.MAs(5);
                  (e.ekj(
                    "ngx-file-drop__drop-zone--over",
                    t.isDraggingOverDropZone,
                  ),
                    e.Q6J("className", t.dropZoneClassName),
                    e.xp6(1),
                    e.Q6J("className", t.contentClassName),
                    e.xp6(1),
                    e.Q6J("accept", t.accept)("multiple", t.multiple),
                    e.uIk("directory", t.directory || void 0)(
                      "webkitdirectory",
                      t.directory || void 0,
                    )("mozdirectory", t.directory || void 0)(
                      "msdirectory",
                      t.directory || void 0,
                    )("odirectory", t.directory || void 0),
                    e.xp6(4),
                    e.Q6J("ngTemplateOutlet", t.contentTemplate || a)(
                      "ngTemplateOutletContext",
                      e.VKq(13, Ee, t.openFileSelector),
                    ));
                }
              },
              dependencies: [l.O5, l.tP],
              styles: [
                ".ngx-file-drop__drop-zone[_ngcontent-%COMP%]{height:100px;margin:auto;border:2px dotted #0782d0;border-radius:30px}.ngx-file-drop__drop-zone--over[_ngcontent-%COMP%]{background-color:#93939380}.ngx-file-drop__content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100px;color:#0782d0}.ngx-file-drop__drop-zone-label[_ngcontent-%COMP%]{text-align:center}.ngx-file-drop__file-input[_ngcontent-%COMP%]{display:none}",
              ],
            })),
            i
          );
        })(),
        Ze = (() => {
          var o;
          class i {}
          return (
            ((o = i).ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵmod = e.oAB({ type: o, bootstrap: [ge] })),
            (o.ɵinj = e.cJS({ imports: [l.ez] })),
            i
          );
        })();
      var $ = d(1486),
        Ae = d(6358),
        de = d(8043);
      let _e = (() => {
        var o;
        class i {
          deleteTemplate(n) {
            var t = this;
            return (0, m.Z)(function* () {
              (yield t.templateService.deleteTemplate(n.id),
                t.templates.mutate((a) => {
                  const s = a.findIndex((c) => c.id === n.id);
                  s >= 0 && a.splice(s, 1);
                }));
            })();
          }
          constructor(n, t, a, s, c) {
            ((this.templateService = n),
              (this.store = t),
              (this.extAuth = a),
              (this.log = s),
              (this.uiService = c),
              (this.templateName = ""),
              (this.savingtemplate = !1),
              (this.templates = (0, e.tdS)([])),
              (this.activeTemplateId = E("activeTemplateId")),
              (this.search = (0, e.tdS)("")),
              (this.filterTemplates = (0, e.Flj)(() => {
                const p = this.search();
                return p
                  ? this.templates().filter((g) => {
                      const u = g.name.toLowerCase(),
                        M = p.toLowerCase();
                      return u.includes(M);
                    })
                  : this.templates();
              })),
              (this.getActiveTemplate = (0, e.Flj)(() =>
                this.templates().find((p) => p.id === this.activeTemplateId()),
              )));
          }
          useTemplate(n) {
            var t = this;
            return (0, m.Z)(function* () {
              if (t.extAuth.isPro()) {
                (t.store.setPrimaryMessage(n.template),
                  t.log.log("use_template_event", {
                    name: n.name,
                    attachmentNumber: n.attachmentDetails.length,
                    hasUnsubscriptionText: n.addUnsubscriptionText,
                    hasSendWithCaption: n.sendWithCaption,
                  }));
                const a = n.attachmentDetails.map((s) =>
                  t.templateService.fetchAttachmentsFromUrl(s.url),
                );
                ((t.store.attachments = yield Promise.all(a)),
                  (t.store.attachments = t.store.attachments.filter((s) => s)),
                  t.store.sendWithCaption.set(n.sendWithCaption),
                  t.store.addUnsubscriptionText.set(n.addUnsubscriptionText),
                  t.store.unsubscriptionText.set(
                    n.unsubscriptionText ||
                      x.MessageTemplate.DEFAULT_UNSUBSCRIPTION_TEXT,
                  ),
                  t.store.updateAttachmentsOverall(n.sendWithCaption),
                  t.activeTemplateId.set(n.id));
              } else
                setTimeout(() => {
                  t.uiService.showProWarning(j.B.USE_TEMPLATE);
                }, 100);
            })();
          }
          saveTemplate(n = "") {
            var t = this;
            return (0, m.Z)(function* () {
              t.savingtemplate = !0;
              try {
                let a = null;
                ((a = n
                  ? t.templates().find((u) => u.id === n)
                  : x.MessageTemplate.getDefault(
                      t.extAuth.currentUser.phoneNumber,
                    )),
                  (a.name = t.templateName),
                  (a.template = t.store.primaryMessage()),
                  (a.sendWithCaption = t.store.sendWithCaption()),
                  (a.addUnsubscriptionText = t.store.addUnsubscriptionText()),
                  (a.unsubscriptionText = t.store.unsubscriptionText()));
                const s = t.store.attachments.map(
                    (function () {
                      var u = (0, m.Z)(function* (M) {
                        const C =
                          yield t.templateService.uploadTemplateAttachments(
                            a.id,
                            encodeURIComponent(M.name),
                            M,
                          );
                        return new x.MessageAttachmentDetails(
                          M.name,
                          C,
                          M.size,
                          M.type,
                        );
                      });
                      return function (M) {
                        return u.apply(this, arguments);
                      };
                    })(),
                  ),
                  c = yield Promise.all(s);
                a.attachmentDetails = c;
                const p = yield t.templateService.saveTemplate(a);
                t.log.log("save_template_event", {
                  name: p.name,
                  attachmentNumber: p.attachmentDetails.length,
                  hasUnsubscriptionText: p.addUnsubscriptionText,
                  hasSendWithCaption: p.sendWithCaption,
                });
                const g = t.templates().findIndex((u) => u.id === p.id);
                return (
                  t.templates.mutate(
                    g < 0
                      ? (u) => {
                          u.push(p);
                        }
                      : (u) => {
                          u[g] = p;
                        },
                  ),
                  (t.templateSaved = !0),
                  (t.savingtemplate = !1),
                  p
                );
              } catch (a) {
                throw (
                  console.error("Error saving template:", a),
                  (t.savingtemplate = !1),
                  a
                );
              }
            })();
          }
          init() {
            var n = this;
            return (0, m.Z)(function* () {
              (n.reset(), (n.templateName = ""), n.templates.set([]));
              try {
                const t = yield n.templateService.getTemplates();
                return (n.templates.set(t), t);
              } catch (t) {
                throw (
                  n.templates.set([]),
                  console.error("Error fetching templates:", t),
                  t
                );
              }
            })();
          }
          reset() {
            ((this.savingtemplate = !1), (this.templateSaved = !1));
          }
        }
        return (
          ((o = i).ɵfac = function (n) {
            return new (n || o)(
              e.LFG(oe.ER),
              e.LFG(L),
              e.LFG(q.a),
              e.LFG(Y.m),
              e.LFG(de.F),
            );
          }),
          (o.ɵprov = e.Yz7({ token: o, factory: o.ɵfac, providedIn: "root" })),
          i
        );
      })();
      var Ne = d(4575),
        Se = d(6979);
      const ke = ["*"];
      let ye = (() => {
        var o;
        class i {
          constructor() {
            ((this.name = ""),
              (this.size = "small"),
              (this.selected = !1),
              (this.selectedChange = new e.vpe()));
          }
          ngOnInit() {}
          onChange(n) {
            this.selectedChange.emit(this.selected);
          }
        }
        return (
          ((o = i).ɵfac = function (n) {
            return new (n || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["app-toggle"]],
            inputs: { name: "name", size: "size", selected: "selected" },
            outputs: { selectedChange: "selectedChange" },
            ngContentSelectors: ke,
            decls: 5,
            vars: 6,
            consts: [
              [
                "type",
                "checkbox",
                1,
                "toggle-input",
                3,
                "checked",
                "id",
                "change",
              ],
              ["tabindex", "1", 1, "toggle-label", 3, "for"],
              ["tabindex", "1", 3, "for"],
            ],
            template: function (n, t) {
              (1 & n &&
                (e.F$t(),
                e.TgZ(0, "div")(1, "input", 0),
                e.NdJ("change", function (s) {
                  return t.onChange(s);
                }),
                e.qZA(),
                e._UZ(2, "label", 1),
                e.TgZ(3, "label", 2),
                e.Hsn(4),
                e.qZA()()),
                2 & n &&
                  (e.Tol(t.size + " toggle"),
                  e.xp6(1),
                  e.Q6J("checked", t.selected)("id", t.name),
                  e.xp6(1),
                  e.Q6J("for", t.name),
                  e.xp6(1),
                  e.Q6J("for", t.name)));
            },
            styles: [
              '.toggle[_ngcontent-%COMP%]{position:relative;display:inline-flex;gap:var(--spacing-4)}.toggle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer}.toggle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before{content:none}.toggle[_ngcontent-%COMP%]   .toggle-input[_ngcontent-%COMP%]{display:none}.toggle[_ngcontent-%COMP%]   .toggle-input[_ngcontent-%COMP%]:checked + .toggle-label[_ngcontent-%COMP%]{background:var(--fill-selected, #1A1A1A)}.toggle[_ngcontent-%COMP%]   .toggle-input[_ngcontent-%COMP%]:checked + .toggle-label[_ngcontent-%COMP%]:after{border:2px solid var(--fill-selected, black)}.toggle.small[_ngcontent-%COMP%]{--toggle-width: 46px;--toggle-height: 20px;--toggle-left: 25px}.toggle.large[_ngcontent-%COMP%]{--toggle-width: 64px;--toggle-height: 20px;--toggle-left: 30px}.toggle[_ngcontent-%COMP%]   .toggle-input[_ngcontent-%COMP%]:checked + .toggle-label[_ngcontent-%COMP%]:after{left:var(--toggle-left)}.toggle[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]{width:var(--toggle-width);height:var(--toggle-height)}.toggle[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]:after{width:var(--toggle-height);height:var(--toggle-height)}.toggle[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]{display:block;border-radius:var(--corner-radius-32, 32px);border:1px solid var(--stroke-strong, rgba(0, 13, 77, .45));background-color:var(--fill-weak, rgba(0, 21, 128, .04));border-radius:99px;transition:background-color .3s ease}.toggle[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]:hover{background:var(--fill-hover, rgba(0, 21, 128, .04))}.toggle[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]:active{background:var(--fill-press, rgba(0, 17, 102, .1))}.toggle[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]:focus{outline:2px solid var(--stroke-focus, #1A1A1A);outline-offset:2px}.toggle[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]:after{content:"";position:absolute;left:-1px;top:-1px;border-radius:50%;transition:left .3s ease;background-color:var(--background-overlay, #FFF);border:2px solid var(--stroke-strong, rgba(0, 13, 77, .45));filter:drop-shadow(0px 4px 8px rgba(0,0,0,.04)) drop-shadow(0px 2px 4px rgba(0,0,0,.08))}',
            ],
          })),
          i
        );
      })();
      var ae = d(858);
      const Fe = ["inputImages"],
        De = ["phoneInput"],
        Ie = ["dropdownRoot"],
        Ue = ["allTemplates"],
        Re = ["allTemplatesToggle"],
        Le = ["main"],
        Je = ["inputDocuments"],
        Ge = ["msgTextarea"],
        je = ["deleteBtn"],
        qe = ["unsubscriptionArea"];
      function Qe(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 90),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.editFile());
            }),
            e._UZ(1, "i", 91),
            e.TgZ(2, "span", 92),
            e._uU(3),
            e.ALo(4, "jtranslate"),
            e.qZA()());
        }
        2 & o && (e.xp6(3), e.hij(" ", e.lcZ(4, 1, "Import"), " "));
      }
      function Be(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 93),
            e._UZ(1, "i", 94),
            e.TgZ(2, "span"),
            e._uU(3),
            e.qZA(),
            e.TgZ(4, "div", 95),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.clearSelections());
            }),
            e._UZ(5, "i", 96),
            e.qZA()());
        }
        if (2 & o) {
          const r = e.oxw();
          (e.xp6(3),
            e.hij(
              " ",
              null == r.sheet.excelDetails
                ? null
                : r.sheet.excelDetails.fileName,
              " ",
            ));
        }
      }
      function Ye(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 112),
            e.NdJ("click", function () {
              const a = e.CHM(r).$implicit,
                s = e.oxw(2);
              return e.KtG(s.selectActiveSheet(a));
            }),
            e._uU(1),
            e.qZA());
        }
        if (2 & o) {
          const r = i.$implicit;
          (e.xp6(1), e.Oqu(r));
        }
      }
      function He(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 112),
            e.NdJ("click", function () {
              const a = e.CHM(r).$implicit,
                s = e.oxw(2);
              return e.KtG(s.selectPhoneNumberKey(a));
            }),
            e._uU(1),
            e.qZA());
        }
        if (2 & o) {
          const r = i.$implicit;
          (e.xp6(1), e.Oqu(r));
        }
      }
      function ze(o, i) {
        1 & o && e._UZ(0, "i", 113);
      }
      function We(o, i) {
        1 & o && e._UZ(0, "i", 113);
      }
      function Ke(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 97)(1, "div", 98)(2, "div", 11),
            e._uU(3),
            e.ALo(4, "jtranslate"),
            e.qZA(),
            e.TgZ(5, "div", 99)(6, "div", 36)(7, "div", 100)(8, "span", 101),
            e._uU(9),
            e.qZA(),
            e._UZ(10, "i", 102),
            e.qZA(),
            e.TgZ(11, "div", 103),
            e.YNc(12, Ye, 2, 1, "div", 104),
            e.qZA()()()(),
            e.TgZ(13, "div", 98)(14, "div", 11),
            e._uU(15),
            e.ALo(16, "jtranslate"),
            e.qZA(),
            e.TgZ(17, "div", 99)(18, "div", 36)(19, "div", 100)(
              20,
              "span",
              105,
            ),
            e._uU(21),
            e.ALo(22, "jtranslate"),
            e.qZA(),
            e.TgZ(23, "span", 106),
            e._uU(24),
            e.qZA(),
            e._UZ(25, "i", 107),
            e.qZA(),
            e.TgZ(26, "div", 51),
            e.YNc(27, He, 2, 1, "div", 104),
            e.qZA()()()(),
            e.TgZ(28, "div", 98)(29, "div", 11),
            e._uU(30),
            e.ALo(31, "jtranslate"),
            e.qZA(),
            e.TgZ(32, "div", 108),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.proWarnSheetSelection());
            }),
            e.TgZ(33, "input", 109),
            e.NdJ("ngModelChange", function (t) {
              e.CHM(r);
              const a = e.oxw();
              return e.KtG(a.sheet.startRow.set(t));
            }),
            e.qZA(),
            e.YNc(34, ze, 1, 0, "i", 110),
            e.qZA()(),
            e.TgZ(35, "div", 98)(36, "div", 11),
            e._uU(37),
            e.ALo(38, "jtranslate"),
            e.qZA(),
            e.TgZ(39, "div", 108),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.proWarnSheetSelection());
            }),
            e.TgZ(40, "input", 111),
            e.NdJ("ngModelChange", function (t) {
              e.CHM(r);
              const a = e.oxw();
              return e.KtG(a.sheet.endRow.set(t));
            }),
            e.qZA(),
            e.YNc(41, We, 1, 0, "i", 110),
            e.qZA()()());
        }
        if (2 & o) {
          const r = e.oxw();
          (e.xp6(3),
            e.hij("", e.lcZ(4, 15, "Sheet"), ":"),
            e.xp6(6),
            e.Oqu(r.sheet.activeSheet()),
            e.xp6(3),
            e.Q6J("ngForOf", r.sheet.excelDetails.sheetNames),
            e.xp6(3),
            e.hij("", e.lcZ(16, 17, "Column"), ":"),
            e.xp6(6),
            e.hij(
              " ",
              r.sheet.selectedPhoneColumn() ||
                e.lcZ(22, 19, "Select phonenumbercolumn"),
              " ",
            ),
            e.xp6(3),
            e.hij(
              "(",
              null == r.store.phoneNumberData ||
                null == r.store.phoneNumberData.phoneData
                ? null
                : r.store.phoneNumberData.phoneData.length,
              ")",
            ),
            e.xp6(3),
            e.Q6J("ngForOf", r.sheet.columnNames()),
            e.xp6(3),
            e.hij("", e.lcZ(31, 21, "From"), ":"),
            e.xp6(3),
            e.Q6J("ngModel", r.sheet.startRow())(
              "disabled",
              !r.extDataService.isPro(),
            ),
            e.xp6(1),
            e.Q6J("ngIf", !r.extDataService.isPro()),
            e.xp6(3),
            e.hij("", e.lcZ(38, 23, "To"), ":"),
            e.xp6(3),
            e.Q6J("ngModel", r.sheet.endRow())(
              "disabled",
              !r.extDataService.isPro(),
            ),
            e.xp6(1),
            e.Q6J("ngIf", !r.extDataService.isPro()));
        }
      }
      function $e(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "i", 119),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw(2).index,
                a = e.oxw();
              return e.KtG(a.removeNumber(t));
            }),
            e.qZA());
        }
      }
      function Ve(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "textarea", 120),
            e.NdJ("blur", function () {
              (e.CHM(r), e.oxw());
              const t = e.MAs(2),
                a = e.oxw().index,
                s = e.oxw();
              return (s.addPhoneNumber(a), e.KtG(s.focusOut(t)));
            })("paste", function () {
              (e.CHM(r), e.oxw());
              const t = e.MAs(2),
                a = e.oxw().index,
                s = e.oxw();
              return e.KtG(s.onPaste(a, t));
            })("ngModelChange", function (t) {
              e.CHM(r);
              const a = e.oxw(3);
              return e.KtG(a.phoneNumber.set(t));
            })("keyup.enter", function () {
              (e.CHM(r), e.oxw());
              const t = e.MAs(2),
                a = e.oxw().index,
                s = e.oxw();
              return (
                s.sanitzeNumber(),
                s.addPhoneNumber(a),
                e.KtG(s.focusOut(t))
              );
            }),
            e.ALo(1, "jtranslate"),
            e.qZA());
        }
        if (2 & o) {
          const r = e.oxw(3);
          e.Q6J("ngModel", r.phoneNumber())(
            "placeholder",
            e.lcZ(1, 2, "Enter phonenumber"),
          );
        }
      }
      function Xe(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.ynx(0),
            e.TgZ(1, "span", 114, 115)(3, "span", 116),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.MAs(2),
                a = e.oxw().$implicit,
                s = e.oxw();
              return e.KtG(s.focusTag(t, a));
            }),
            e.TgZ(4, "span"),
            e._uU(5),
            e.qZA(),
            e.YNc(6, $e, 1, 0, "i", 117),
            e.qZA(),
            e.YNc(7, Ve, 2, 4, "textarea", 118),
            e.qZA(),
            e.BQk());
        }
        if (2 & o) {
          const r = e.oxw().$implicit,
            n = e.oxw();
          (e.xp6(3),
            e.ekj("invalid", !r.isValid),
            e.xp6(2),
            e.Oqu(r.number),
            e.xp6(1),
            e.Q6J("ngIf", !n.sheet.excelDetails),
            e.xp6(1),
            e.Q6J("ngIf", !n.sheet.excelDetails));
        }
      }
      function et(o, i) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, Xe, 8, 5, "ng-container", 20), e.BQk()),
          2 & o)
        ) {
          const r = i.$implicit;
          (e.xp6(1), e.Q6J("ngIf", null == r ? null : r.originalNumber));
        }
      }
      function tt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "span", 121),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG((t.sliceNumber = !1));
            }),
            e._uU(1),
            e.ALo(2, "jtranslate"),
            e.qZA());
        }
        if (2 & o) {
          const r = e.oxw();
          (e.xp6(1),
            e.AsE(
              " + ",
              (null == r.store.proceesablePhoneData ||
              null == r.store.proceesablePhoneData.phoneData
                ? null
                : r.store.proceesablePhoneData.phoneData.length) - 100,
              " ",
              e.lcZ(2, 2, "more"),
              " ",
            ));
        }
      }
      function nt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "textarea", 122, 123),
            e.NdJ("blur", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(
                t.addPhoneNumber(
                  null == t.store.phoneNumberData ||
                    null == t.store.phoneNumberData.phoneData
                    ? null
                    : t.store.phoneNumberData.phoneData.length,
                ),
              );
            })("paste", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(
                t.onPaste(
                  null == t.store.phoneNumberData ||
                    null == t.store.phoneNumberData.phoneData
                    ? null
                    : t.store.phoneNumberData.phoneData.length,
                ),
              );
            })("ngModelChange", function (t) {
              e.CHM(r);
              const a = e.oxw();
              return e.KtG(a.phoneNumber.set(t));
            })("keydown.backspace", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.removeLastEntry());
            })("keyup.space", function () {
              e.CHM(r);
              const t = e.oxw();
              return (
                t.sanitzeNumber(),
                e.KtG(
                  t.addPhoneNumber(
                    null == t.store.phoneNumberData ||
                      null == t.store.phoneNumberData.phoneData
                      ? null
                      : t.store.phoneNumberData.phoneData.length,
                    !0,
                  ),
                )
              );
            })("keyup.enter", function () {
              e.CHM(r);
              const t = e.oxw();
              return (
                t.sanitzeNumber(),
                e.KtG(
                  t.addPhoneNumber(
                    null == t.store.phoneNumberData ||
                      null == t.store.phoneNumberData.phoneData
                      ? null
                      : t.store.phoneNumberData.phoneData.length,
                  ),
                )
              );
            }),
            e.ALo(2, "jtranslate"),
            e.qZA());
        }
        if (2 & o) {
          const r = e.oxw();
          e.Q6J("ngModel", r.phoneNumber())(
            "placeholder",
            e.lcZ(2, 2, "Enter phonenumber"),
          );
        }
      }
      function ot(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 124),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.clearSelections());
            }),
            e._UZ(1, "i", 84),
            e.qZA());
        }
      }
      function rt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 127),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw(2);
              return e.KtG(t.sendMessages(t.operations.OPERATION_FILTER));
            }),
            e.ALo(1, "jtranslate"),
            e.TgZ(2, "span"),
            e._uU(3),
            e.ALo(4, "jtranslate"),
            e.qZA(),
            e._UZ(5, "i", 128),
            e._uU(6, " Filter "),
            e.qZA());
        }
        if (2 & o) {
          const r = e.oxw(2);
          (e.Q6J("title", e.lcZ(1, 3, "Run filter")),
            e.xp6(3),
            e.AsE(
              "",
              e.lcZ(4, 5, "Numbers"),
              ": ",
              null == r.store.proceesablePhoneData ||
                null == r.store.proceesablePhoneData.phoneData
                ? null
                : r.store.proceesablePhoneData.phoneData.length,
              " | ",
            ));
        }
      }
      function at(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 129),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw(2);
              return e.KtG(t.downloadWrongNumber());
            }),
            e.TgZ(1, "span"),
            e._uU(2),
            e.ALo(3, "jtranslate"),
            e.qZA(),
            e._UZ(4, "i", 130),
            e.qZA());
        }
        if (2 & o) {
          const r = e.oxw(2);
          (e.xp6(2),
            e.AsE(
              "",
              e.lcZ(3, 2, "Error"),
              ": ",
              r.store.proceesablePhoneData.invalidNumber,
              " | ",
            ));
        }
      }
      function it(o, i) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.YNc(1, rt, 7, 7, "div", 125),
            e.YNc(2, at, 5, 4, "div", 126),
            e.BQk()),
          2 & o)
        ) {
          const r = e.oxw();
          (e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == r.store.proceesablePhoneData ||
              null == r.store.proceesablePhoneData.phoneData
                ? null
                : r.store.proceesablePhoneData.phoneData.length) > 0,
            ),
            e.xp6(1),
            e.Q6J("ngIf", r.store.proceesablePhoneData.invalidNumber > 0));
        }
      }
      function st(o, i) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.TgZ(1, "div", 136),
            e._UZ(2, "i", 137),
            e._uU(3),
            e.qZA(),
            e.TgZ(4, "div", 136)(5, "div", 30),
            e._UZ(6, "i", 138),
            e._uU(7),
            e.qZA(),
            e._uU(8, " | "),
            e.TgZ(9, "div", 30),
            e._UZ(10, "i", 139),
            e._uU(11),
            e.qZA()(),
            e.BQk()),
          2 & o)
        ) {
          const r = e.oxw(2);
          (e.xp6(3),
            e.hij(" ", r.store.randomDelay() || "0", " "),
            e.xp6(4),
            e.hij(" ", r.store.waitAfterpeople() || "0", " "),
            e.xp6(4),
            e.hij(" ", r.store.waitForMin() || "0", " "));
        }
      }
      function lt(o, i) {
        (1 & o &&
          (e.ynx(0),
          e.TgZ(1, "div", 136)(2, "i"),
          e._uU(3),
          e.ALo(4, "jtranslate"),
          e.qZA()(),
          e.BQk()),
          2 & o && (e.xp6(3), e.Oqu(e.lcZ(4, 1, "Disabled"))));
      }
      function ct(o, i) {
        1 & o && e._UZ(0, "i", 140);
      }
      function pt(o, i) {
        1 & o && e._UZ(0, "i", 141);
      }
      function gt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 131),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG((t.openSettings = !t.openSettings));
            }),
            e.TgZ(1, "div", 132),
            e._UZ(2, "i", 133),
            e._uU(3),
            e.ALo(4, "jtranslate"),
            e.qZA(),
            e.YNc(5, st, 12, 3, "ng-container", 20),
            e.YNc(6, lt, 5, 3, "ng-container", 20),
            e.YNc(7, ct, 1, 0, "i", 134),
            e.YNc(8, pt, 1, 0, "i", 135),
            e.qZA());
        }
        if (2 & o) {
          const r = e.oxw();
          (e.xp6(3),
            e.hij(" ", e.lcZ(4, 5, "Time gap b/w msgs"), " "),
            e.xp6(2),
            e.Q6J("ngIf", r.store.batchSettings() || r.store.timegapSettings()),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              !r.store.batchSettings() && !r.store.timegapSettings(),
            ),
            e.xp6(1),
            e.Q6J("ngIf", !r.openSettings),
            e.xp6(1),
            e.Q6J("ngIf", r.openSettings));
        }
      }
      function dt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 142)(1, "div", 143)(2, "div", 144)(3, "span", 145),
            e._uU(4),
            e.ALo(5, "jtranslate"),
            e.qZA(),
            e.TgZ(6, "span"),
            e._uU(7),
            e.ALo(8, "jtranslate"),
            e.ALo(9, "jtranslate"),
            e.TgZ(10, "input", 146),
            e.NdJ("ngModelChange", function (t) {
              e.CHM(r);
              const a = e.oxw();
              return e.KtG(a.store.randomDelay.set(t));
            }),
            e.qZA(),
            e._uU(11),
            e.ALo(12, "jtranslate"),
            e.qZA()(),
            e.TgZ(13, "app-toggle", 147),
            e.NdJ("selectedChange", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.onTimeGapChange());
            }),
            e.qZA()(),
            e.TgZ(14, "div", 148)(15, "div", 149)(16, "span", 145),
            e._uU(17),
            e.ALo(18, "jtranslate"),
            e.qZA(),
            e.TgZ(19, "span"),
            e._uU(20),
            e.ALo(21, "jtranslate"),
            e.TgZ(22, "input", 146),
            e.NdJ("ngModelChange", function (t) {
              e.CHM(r);
              const a = e.oxw();
              return e.KtG(a.store.waitAfterpeople.set(t));
            }),
            e.qZA(),
            e._uU(23),
            e.ALo(24, "jtranslate"),
            e.TgZ(25, "input", 146),
            e.NdJ("ngModelChange", function (t) {
              e.CHM(r);
              const a = e.oxw();
              return e.KtG(a.store.waitForMin.set(t));
            }),
            e.qZA(),
            e._uU(26),
            e.ALo(27, "jtranslate"),
            e.qZA()(),
            e.TgZ(28, "app-toggle", 150),
            e.NdJ("selectedChange", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.onBatchGapChange());
            }),
            e.qZA()()());
        }
        if (2 & o) {
          const r = e.oxw();
          (e.xp6(4),
            e.hij("", e.lcZ(5, 13, "Random time gap"), ":\xa0"),
            e.xp6(3),
            e.AsE(" ", e.lcZ(8, 15, "0 to"), " ", e.lcZ(9, 17, "to"), " "),
            e.xp6(3),
            e.Q6J("ngModel", r.store.randomDelay()),
            e.xp6(1),
            e.hij(" ", e.lcZ(12, 19, "sec"), " "),
            e.xp6(2),
            e.Q6J("selected", r.store.timegapSettings()),
            e.xp6(4),
            e.Oqu(e.lcZ(18, 21, "Split Msgs into batches")),
            e.xp6(3),
            e.hij(" ", e.lcZ(21, 23, "Send in batches of"), " "),
            e.xp6(2),
            e.Q6J("ngModel", r.store.waitAfterpeople()),
            e.xp6(1),
            e.hij(" ", e.lcZ(24, 25, "msgs and wait for"), " "),
            e.xp6(2),
            e.Q6J("ngModel", r.store.waitForMin()),
            e.xp6(1),
            e.hij(" ", e.lcZ(27, 27, "min after every batch"), " "),
            e.xp6(2),
            e.Q6J("selected", r.store.batchSettings() && r.extDataService));
        }
      }
      function _t(o, i) {
        (1 & o &&
          (e.TgZ(0, "span"),
          e._uU(1),
          e.ALo(2, "jtranslate"),
          e.TgZ(3, "b"),
          e._uU(4),
          e.ALo(5, "jtranslate"),
          e.qZA()()),
          2 & o &&
            (e.xp6(1),
            e.hij(" ", e.lcZ(2, 2, "Buy pro to use"), " "),
            e.xp6(3),
            e.Oqu(e.lcZ(5, 4, "WhatsApp number filter"))));
      }
      function mt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "app-pro-warn", 151),
            e.NdJ("close", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG((t.store.proFeauters = null));
            }),
            e.YNc(1, _t, 6, 6, "span", 20),
            e.qZA());
        }
        if (2 & o) {
          const r = e.oxw();
          (e.Q6J("type", r.store.proFeauters),
            e.xp6(1),
            e.Q6J("ngIf", "Filter" === r.store.proFeauters));
        }
      }
      function ut(o, i) {
        (1 & o &&
          (e.TgZ(0, "span"),
          e._uU(1),
          e.ALo(2, "jtranslate"),
          e.TgZ(3, "b"),
          e._uU(4),
          e.ALo(5, "jtranslate"),
          e.qZA()()),
          2 & o &&
            (e.xp6(1),
            e.hij(" ", e.lcZ(2, 2, "Buy pro to use"), " "),
            e.xp6(3),
            e.Oqu(e.lcZ(5, 4, "time gap and batching feature"))));
      }
      function ht(o, i) {
        (1 & o &&
          (e.TgZ(0, "span"),
          e._uU(1),
          e.ALo(2, "jtranslate"),
          e.TgZ(3, "b"),
          e._uU(4),
          e.ALo(5, "jtranslate"),
          e.qZA()()),
          2 & o &&
            (e.xp6(1),
            e.hij(" ", e.lcZ(2, 2, "Buy pro to use"), " "),
            e.xp6(3),
            e.Oqu(e.lcZ(5, 4, "message personalisation feature"))));
      }
      function ft(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "app-pro-warn", 152),
            e.YNc(1, ut, 6, 6, "span", 20),
            e.YNc(2, ht, 6, 6, "span", 20),
            e.qZA()),
          2 & o)
        ) {
          const r = e.oxw();
          (e.Q6J("canClose", !1)("type", r.proOptions),
            e.xp6(1),
            e.Q6J("ngIf", "Time Gap and Batching" === r.proOptions),
            e.xp6(1),
            e.Q6J("ngIf", "Personalisation" === r.proOptions));
        }
      }
      function xt(o, i) {
        (1 & o &&
          (e.TgZ(0, "span", 153)(1, "b"),
          e._uU(2),
          e.ALo(3, "jtranslate"),
          e.qZA()()),
          2 & o && (e.xp6(2), e.Oqu(e.lcZ(3, 1, "cannot be blank"))));
      }
      function Mt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 156),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw(2);
              let a;
              return (
                (t.templateStore.templateName =
                  null == (a = t.templateStore.getActiveTemplate())
                    ? null
                    : a.name),
                e.KtG(t.templateStore.reset())
              );
            }),
            e._uU(1),
            e.ALo(2, "jtranslate"),
            e.qZA());
        }
        2 & o && (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "Update template"), " "));
      }
      function Ct(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.ynx(0),
            e.YNc(1, Mt, 3, 3, "div", 154),
            e.TgZ(2, "div", 155),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return (
                (t.templateStore.templateName = ""),
                e.KtG(t.templateStore.reset())
              );
            }),
            e._uU(3),
            e.ALo(4, "jtranslate"),
            e.qZA(),
            e.BQk());
        }
        if (2 & o) {
          const r = e.oxw();
          (e.xp6(1),
            e.Q6J(
              "ngIf",
              r.templateStore.getActiveTemplate() &&
                r.isActiveTemplateChanged(),
            ),
            e.xp6(2),
            e.hij(" ", e.lcZ(4, 2, "Save as new template"), " "));
        }
      }
      function bt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 158),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw(2);
              return e.KtG(t.attachTemplateDropdownInTextarea());
            }),
            e._uU(1),
            e.ALo(2, "jtranslate"),
            e.qZA());
        }
        2 & o &&
          (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "Use saved templates"), " "));
      }
      function vt(o, i) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, bt, 3, 3, "div", 157), e.BQk()), 2 & o)
        ) {
          const r = e.oxw();
          let n;
          (e.xp6(1),
            e.Q6J(
              "ngIf",
              null == r.templateStore ||
                null == (n = r.templateStore.templates())
                ? null
                : n.length,
            ));
        }
      }
      function Ot(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 164),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw(2);
              return e.KtG(t.attachTemplateDropdownInTextarea());
            }),
            e._uU(1),
            e.ALo(2, "jtranslate"),
            e.qZA());
        }
        2 & o &&
          (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "Use saved templates"), " "));
      }
      function Pt(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "ng-conatainer")(1, "div", 159)(2, "div", 160),
            e._UZ(3, "i", 161),
            e.qZA(),
            e.TgZ(4, "div", 162),
            e.YNc(5, Ot, 3, 3, "div", 163),
            e.qZA()()()),
          2 & o)
        ) {
          const r = e.oxw();
          let n;
          (e.xp6(5),
            e.Q6J(
              "ngIf",
              null == r.templateStore ||
                null == (n = r.templateStore.templates())
                ? null
                : n.length,
            ));
        }
      }
      function Tt(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "app-alert", 165)(1, "div", 166),
            e._uU(2),
            e.ALo(3, "jtranslate"),
            e.TgZ(4, "b")(5, "i"),
            e._uU(6),
            e.qZA()()()()),
          2 & o)
        ) {
          const r = e.oxw();
          (e.Q6J("alignment", r.left)("canClose", !1),
            e.xp6(2),
            e.hij(" ", e.lcZ(3, 4, "No columns in excel sheet named"), " "),
            e.xp6(4),
            e.Oqu(r.invalidCustomization().join(", ")));
        }
      }
      function Et(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 175),
            e.NdJ("click", function () {
              const a = e.CHM(r).$implicit,
                s = e.oxw(3);
              return e.KtG(s.insertVariable(a));
            }),
            e._uU(1),
            e.qZA());
        }
        if (2 & o) {
          const r = i.$implicit;
          (e.xp6(1), e.Oqu(r));
        }
      }
      function wt(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 170)(1, "div", 171)(2, "span"),
            e._uU(3),
            e.qZA(),
            e._UZ(4, "i", 172),
            e.qZA(),
            e.TgZ(5, "div", 173),
            e.YNc(6, Et, 2, 1, "div", 174),
            e.qZA()()),
          2 & o)
        ) {
          const r = e.oxw(2);
          let n;
          (e.xp6(3),
            e.hij(
              "+ ",
              (null == (n = r.sheet.columnNames()) ? null : n.length) - 1,
              "",
            ),
            e.xp6(3),
            e.Q6J("ngForOf", r.sheet.columnNames()));
        }
      }
      function Zt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 167)(1, "span", 168),
            e._uU(2),
            e.ALo(3, "jtranslate"),
            e.qZA(),
            e.TgZ(4, "div", 112),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.insertVariable(t.sheet.columnNames()[0]));
            }),
            e._uU(5),
            e.qZA(),
            e.YNc(6, wt, 7, 2, "div", 169),
            e.qZA());
        }
        if (2 & o) {
          const r = e.oxw();
          let n;
          (e.xp6(2),
            e.hij("", e.lcZ(3, 3, "Customizations"), ":"),
            e.xp6(3),
            e.hij("", r.sheet.columnNames()[0], " "),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (n = r.sheet.columnNames()) ? null : n.length) > 1,
            ));
        }
      }
      function At(o, i) {
        (1 & o &&
          (e.TgZ(0, "div", 176),
          e._UZ(1, "i", 177),
          e._uU(2),
          e.ALo(3, "jtranslate"),
          e.qZA()),
          2 & o && (e.xp6(2), e.hij(" ", e.lcZ(3, 1, "Preview"), " ")));
      }
      function Nt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "i", 186),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw(2);
              return e.KtG(t.templateStore.search.set(""));
            }),
            e.qZA());
        }
      }
      function St(o, i) {
        1 & o && e._UZ(0, "i", 197);
      }
      function kt(o, i) {
        1 & o && e._UZ(0, "i", 198);
      }
      function yt(o, i) {
        1 & o && e._UZ(0, "i", 199);
      }
      function Ft(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.ynx(0),
            e.TgZ(1, "div", 187)(2, "div", 149)(3, "div", 188),
            e.NdJ("click", function () {
              const a = e.CHM(r).$implicit,
                s = e.oxw(2);
              return e.KtG(s.useSavedTemplate(a));
            }),
            e.YNc(4, St, 1, 0, "i", 189),
            e.YNc(5, kt, 1, 0, "i", 190),
            e.YNc(6, yt, 1, 0, "i", 191),
            e.qZA(),
            e.TgZ(7, "div", 192),
            e.NdJ("click", function () {
              const a = e.CHM(r).$implicit,
                s = e.oxw(2);
              return e.KtG(s.useSavedTemplate(a));
            }),
            e.TgZ(8, "div"),
            e._uU(9),
            e.qZA(),
            e.TgZ(10, "div", 193),
            e._uU(11),
            e.qZA()(),
            e.TgZ(12, "div", 194)(13, "div", 195),
            e.NdJ("click", function () {
              const a = e.CHM(r).$implicit,
                s = e.oxw(2);
              return e.KtG(s.selectTemplateToDelete(a));
            }),
            e._UZ(14, "i", 196),
            e.qZA()()()(),
            e.BQk());
        }
        if (2 & o) {
          const r = i.$implicit,
            n = e.oxw(2);
          (e.xp6(4),
            e.Q6J("ngIf", r.templateType === n.templateType.TEXT),
            e.xp6(1),
            e.Q6J("ngIf", r.templateType === n.templateType.IMAGE),
            e.xp6(1),
            e.Q6J("ngIf", r.templateType === n.templateType.DOC),
            e.xp6(3),
            e.hij(" ", r.name, " "),
            e.xp6(2),
            e.hij(" ", r.template, " "));
        }
      }
      function Dt(o, i) {
        (1 & o &&
          (e.ynx(0),
          e.TgZ(1, "div", 187),
          e._uU(2),
          e.ALo(3, "jtranslate"),
          e.qZA(),
          e.BQk()),
          2 & o &&
            (e.xp6(2), e.hij(" ", e.lcZ(3, 1, "No saved templates"), " ")));
      }
      function It(o, i) {
        (1 & o &&
          (e.TgZ(0, "div", 187), e._uU(1), e.ALo(2, "jtranslate"), e.qZA()),
          2 & o &&
            (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "No saved templates"), " ")));
      }
      function Ut(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 178, 179)(2, "div", 180)(3, "form", 181)(
            4,
            "input",
            182,
            183,
          ),
            e.NdJ("ngModelChange", function (t) {
              e.CHM(r);
              const a = e.oxw();
              return e.KtG(a.templateStore.search.set(t));
            }),
            e.ALo(6, "jtranslate"),
            e.qZA(),
            e.YNc(7, Nt, 1, 0, "i", 184),
            e.qZA()(),
            e.YNc(8, Ft, 15, 5, "ng-container", 14),
            e.YNc(9, Dt, 4, 3, "ng-container", 20),
            e.YNc(10, It, 3, 3, "div", 185),
            e.qZA());
        }
        if (2 & o) {
          const r = e.oxw();
          let n, t;
          (e.xp6(4),
            e.Q6J("ngModel", r.templateStore.search())(
              "placeholder",
              e.lcZ(6, 6, "Search templates"),
            ),
            e.xp6(3),
            e.Q6J("ngIf", r.templateStore.search()),
            e.xp6(1),
            e.Q6J(
              "ngForOf",
              null == r.templateStore
                ? null
                : r.templateStore.filterTemplates(),
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              !(
                null != r.templateStore &&
                null != (n = r.templateStore.filterTemplates()) &&
                n.length
              ),
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              !(
                null != r.templateStore &&
                null != (t = r.templateStore.templates()) &&
                t.length
              ),
            ));
        }
      }
      function Rt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 204)(1, "div", 205)(2, "span", 206),
            e._uU(3),
            e.ALo(4, "jtranslate"),
            e.qZA(),
            e.TgZ(5, "i", 207),
            e.NdJ("click", function () {
              const a = e.CHM(r).index,
                s = e.oxw(2);
              return e.KtG(s.store.removeMessageVariant(a + 1));
            }),
            e.ALo(6, "jtranslate"),
            e.qZA()(),
            e.TgZ(7, "textarea", 208),
            e.NdJ("ngModelChange", function (t) {
              const s = e.CHM(r).index,
                c = e.oxw(2);
              return e.KtG(c.store.setMessageAt(s + 1, t));
            }),
            e.ALo(8, "jtranslate"),
            e.qZA()());
        }
        if (2 & o) {
          const r = i.$implicit,
            n = i.index;
          (e.xp6(3),
            e.AsE("", e.lcZ(4, 5, "Message variant"), " #", n + 2, ""),
            e.xp6(2),
            e.Q6J("title", e.lcZ(6, 7, "Remove variant")),
            e.xp6(2),
            e.Q6J("ngModel", r)(
              "placeholder",
              e.lcZ(8, 9, "Type another message to rotate with"),
            ));
        }
      }
      function Lt(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 200),
            e.YNc(1, Rt, 9, 11, "div", 201),
            e.TgZ(2, "div", 202),
            e._UZ(3, "i", 203),
            e._uU(4),
            e.ALo(5, "jtranslate"),
            e.ALo(6, "jtranslate"),
            e.qZA()()),
          2 & o)
        ) {
          const r = e.oxw();
          (e.xp6(1),
            e.Q6J("ngForOf", r.additionalVariants)(
              "ngForTrackBy",
              r.trackByIndex,
            ),
            e.xp6(3),
            e.lnq(
              " ",
              e.lcZ(5, 5, "Recipients receive messages in rotation"),
              " (",
              r.store.getMessageVariants().length,
              " ",
              e.lcZ(6, 7, "variants"),
              ") ",
            ));
        }
      }
      function Jt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "textarea", 209, 210),
            e.NdJ("ngModelChange", function (t) {
              e.CHM(r);
              const a = e.oxw();
              return e.KtG(a.store.unsubscriptionText.set(t));
            }),
            e._uU(2, "            "),
            e.qZA());
        }
        if (2 & o) {
          const r = e.oxw();
          (e.ekj("invalid", !r.store.isValidUnsubscripitonText()),
            e.Q6J("ngModel", r.store.unsubscriptionText()));
        }
      }
      function Gt(o, i) {
        (1 & o && (e.ynx(0), e._uU(1), e.ALo(2, "jtranslate"), e.BQk()),
          2 & o && (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "Attachments"), " ")));
      }
      function jt(o, i) {
        (1 & o &&
          (e.ynx(0),
          e._uU(1),
          e.ALo(2, "jtranslate"),
          e.TgZ(3, "span", 211),
          e._uU(4),
          e.ALo(5, "jtranslate"),
          e.qZA(),
          e.BQk()),
          2 & o &&
            (e.xp6(1),
            e.hij(" ", e.lcZ(2, 2, "Attach a file"), " "),
            e.xp6(3),
            e.Oqu(e.lcZ(5, 4, "(max 8MB)"))));
      }
      function qt(o, i) {
        if ((1 & o && (e.TgZ(0, "div", 212), e._uU(1), e.qZA()), 2 & o)) {
          const r = e.oxw();
          (e.xp6(1),
            e.hij(
              " ",
              null == r.store.attachments ? null : r.store.attachments.length,
              " ",
            ));
        }
      }
      function Qt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 218)(1, "div", 219),
            e._UZ(2, "img", 220),
            e.TgZ(3, "span", 221),
            e._uU(4),
            e.qZA()(),
            e.TgZ(5, "div", 222)(6, "i", 223),
            e.NdJ("click", function () {
              const a = e.CHM(r).index,
                s = e.oxw(2);
              return e.KtG(s.removeAttachment(a));
            }),
            e.qZA()()());
        }
        if (2 & o) {
          const r = i.$implicit;
          (e.xp6(2),
            e.ekj(
              "doc",
              !(null != r.base64 && r.base64.includes("data:image/")),
            ),
            e.Q6J(
              "src",
              null != r.base64 && r.base64.includes("data:image/")
                ? r.base64
                : "../../../assets/img/doc.png",
              e.LSH,
            ),
            e.xp6(2),
            e.hij(" ", r.name, " "));
        }
      }
      function Bt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.ynx(0),
            e.TgZ(1, "div", 213)(2, "div", 214)(3, "span"),
            e._uU(4, "File attached"),
            e.qZA(),
            e.TgZ(5, "a", 215),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.clearFiles());
            }),
            e._uU(6, "Clear"),
            e.qZA()(),
            e.YNc(7, Qt, 7, 4, "div", 216),
            e.TgZ(8, "div", 217),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.selectDoc());
            }),
            e.TgZ(9, "span"),
            e._uU(10),
            e.ALo(11, "jtranslate"),
            e.qZA()()(),
            e.BQk());
        }
        if (2 & o) {
          const r = e.oxw();
          (e.xp6(7),
            e.Q6J("ngForOf", r.store.attachments),
            e.xp6(3),
            e.Oqu(e.lcZ(11, 2, "Add new file")));
        }
      }
      function Yt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.ynx(0),
            e.TgZ(1, "div", 112),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.selectDoc());
            }),
            e._UZ(2, "i", 224),
            e._uU(3),
            e.ALo(4, "jtranslate"),
            e.qZA(),
            e.TgZ(5, "div", 112),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.selectMedia());
            }),
            e._UZ(6, "i", 225),
            e._uU(7),
            e.ALo(8, "jtranslate"),
            e.qZA(),
            e.BQk());
        }
        2 & o &&
          (e.xp6(3),
          e.hij("", e.lcZ(4, 2, "Document"), " "),
          e.xp6(4),
          e.hij("", e.lcZ(8, 4, "Media"), " "));
      }
      function Ht(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 226)(1, "input", 227),
            e.NdJ("change", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.toggleCaption());
            }),
            e.qZA(),
            e.TgZ(2, "label", 228),
            e._uU(3),
            e.ALo(4, "jtranslate"),
            e.qZA()());
        }
        if (2 & o) {
          const r = e.oxw();
          (e.xp6(1),
            e.Q6J("checked", r.store.sendWithCaption()),
            e.xp6(2),
            e.Oqu(e.lcZ(4, 2, "Send text as caption")));
        }
      }
      function zt(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "a", 229),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.store.addMessageVariant());
            }),
            e._UZ(1, "i", 230),
            e._uU(2),
            e.ALo(3, "jtranslate"),
            e.qZA());
        }
        2 & o &&
          (e.xp6(2), e.hij(" ", e.lcZ(3, 1, "Add new msg variant"), " "));
      }
      function Wt(o, i) {
        (1 & o && (e.TgZ(0, "span"), e._uU(1), e.ALo(2, "jtranslate"), e.qZA()),
          2 & o && (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "Send"), " ")));
      }
      function Kt(o, i) {
        1 & o && e._UZ(0, "div", 233);
      }
      function $t(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "button", 231),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.sendMessages(t.operations.OPERATION_SEND_MESSAGE));
            }),
            e.YNc(1, Wt, 3, 3, "span", 20),
            e.YNc(2, Kt, 1, 0, "div", 232),
            e.qZA());
        }
        if (2 & o) {
          const r = e.oxw();
          (e.ekj("disable", r.isSendingNotAllowed),
            e.xp6(1),
            e.Q6J("ngIf", !r.store.processingMessageSending),
            e.xp6(1),
            e.Q6J("ngIf", r.store.processingMessageSending));
        }
      }
      function Vt(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "span"),
            e._uU(1),
            e.ALo(2, "jtranslate"),
            e.ALo(3, "jtranslate"),
            e.qZA()),
          2 & o)
        ) {
          const r = e.oxw(2);
          (e.xp6(1),
            e.lnq(
              "",
              e.lcZ(2, 3, "Low risk of number ban"),
              " (",
              r.errorsCount,
              " ",
              e.lcZ(3, 5, "errors"),
              ")",
            ));
        }
      }
      function Xt(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "span"),
            e._uU(1),
            e.ALo(2, "jtranslate"),
            e.ALo(3, "jtranslate"),
            e.qZA()),
          2 & o)
        ) {
          const r = e.oxw(2);
          (e.xp6(1),
            e.lnq(
              "",
              e.lcZ(2, 3, "Medium risk of number ban"),
              " (",
              r.errorsCount,
              " ",
              e.lcZ(3, 5, "errors"),
              ")",
            ));
        }
      }
      function en(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "span"),
            e._uU(1),
            e.ALo(2, "jtranslate"),
            e.ALo(3, "jtranslate"),
            e.qZA()),
          2 & o)
        ) {
          const r = e.oxw(2);
          (e.xp6(1),
            e.lnq(
              "",
              e.lcZ(2, 3, "High risk of number ban"),
              " (",
              r.errorsCount,
              " ",
              e.lcZ(3, 5, "errors"),
              ")",
            ));
        }
      }
      function tn(o, i) {
        (1 & o && (e.TgZ(0, "span"), e._uU(1), e.ALo(2, "jtranslate"), e.qZA()),
          2 & o && (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "Ignore & Send"), " ")));
      }
      function nn(o, i) {
        1 & o && e._UZ(0, "div", 233);
      }
      function on(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 234)(1, "div", 235),
            e._UZ(2, "i", 236),
            e.TgZ(3, "div", 237),
            e.YNc(4, Vt, 4, 7, "span", 20),
            e.YNc(5, Xt, 4, 7, "span", 20),
            e.YNc(6, en, 4, 7, "span", 20),
            e.qZA()(),
            e.TgZ(7, "div", 238)(8, "button", 239),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(
                t.store.sendMessages(
                  t.operations.OPERATION_SEND_MESSAGE,
                  t.sendSourceAction.IGNORE_AND_SEND,
                ),
              );
            }),
            e.YNc(9, tn, 3, 3, "span", 20),
            e.YNc(10, nn, 1, 0, "div", 232),
            e.qZA(),
            e.TgZ(11, "button", 240),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.showErrorModal());
            }),
            e._uU(12),
            e.ALo(13, "jtranslate"),
            e.qZA()()());
        }
        if (2 & o) {
          const r = e.oxw();
          (e.Q6J("ngClass", "alert-" + r.risk()),
            e.xp6(4),
            e.Q6J("ngIf", r.risk() === r.riskLevel.LOW),
            e.xp6(1),
            e.Q6J("ngIf", r.risk() === r.riskLevel.MEDIUM),
            e.xp6(1),
            e.Q6J("ngIf", r.risk() === r.riskLevel.HIGH),
            e.xp6(2),
            e.Q6J("disabled", r.isSendingNotAllowed),
            e.xp6(1),
            e.Q6J("ngIf", !r.store.processingMessageSending),
            e.xp6(1),
            e.Q6J("ngIf", r.store.processingMessageSending),
            e.xp6(1),
            e.Q6J("disabled", r.isSendingNotAllowed),
            e.xp6(1),
            e.Oqu(e.lcZ(13, 9, "Fix Errors")));
        }
      }
      function rn(o, i) {
        (1 & o && (e.TgZ(0, "span"), e._uU(1), e.ALo(2, "jtranslate"), e.qZA()),
          2 & o && (e.xp6(1), e.Oqu(e.lcZ(2, 1, "Save"))));
      }
      function an(o, i) {
        1 & o && e._UZ(0, "div", 233);
      }
      function sn(o, i) {
        (1 & o &&
          (e.TgZ(0, "button", 244), e._uU(1), e.ALo(2, "jtranslate"), e.qZA()),
          2 & o && (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "Discard"), " ")));
      }
      function ln(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 81)(1, "input", 241),
            e.NdJ("ngModelChange", function (t) {
              e.CHM(r);
              const a = e.oxw();
              return e.KtG((a.templateStore.templateName = t));
            }),
            e.ALo(2, "jtranslate"),
            e.qZA(),
            e.TgZ(3, "div", 86)(4, "button", 242),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.saveTemplate());
            }),
            e.YNc(5, rn, 3, 3, "span", 20),
            e.YNc(6, an, 1, 0, "div", 232),
            e.qZA(),
            e.YNc(7, sn, 3, 3, "button", 243),
            e.qZA()());
        }
        if (2 & o) {
          const r = e.oxw();
          (e.xp6(1),
            e.Q6J("ngModel", r.templateStore.templateName)(
              "placeholder",
              e.lcZ(2, 6, "Enter template name"),
            )("disabled", r.templateStore.savingtemplate),
            e.xp6(4),
            e.Q6J("ngIf", !r.templateStore.savingtemplate),
            e.xp6(1),
            e.Q6J("ngIf", r.templateStore.savingtemplate),
            e.xp6(1),
            e.Q6J("ngIf", !r.templateStore.savingtemplate));
        }
      }
      function cn(o, i) {
        1 & o && e.GkF(0);
      }
      function pn(o, i) {
        (1 & o && (e.TgZ(0, "span"), e._uU(1), e.ALo(2, "jtranslate"), e.qZA()),
          2 & o && (e.xp6(1), e.Oqu(e.lcZ(2, 1, "Update"))));
      }
      function gn(o, i) {
        1 & o && e._UZ(0, "div", 233);
      }
      function dn(o, i) {
        (1 & o &&
          (e.TgZ(0, "button", 244), e._uU(1), e.ALo(2, "jtranslate"), e.qZA()),
          2 & o && (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "Discard"), " ")));
      }
      function _n(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 81)(1, "input", 241),
            e.NdJ("ngModelChange", function (t) {
              e.CHM(r);
              const a = e.oxw();
              return e.KtG((a.templateStore.templateName = t));
            }),
            e.ALo(2, "jtranslate"),
            e.qZA(),
            e.TgZ(3, "div", 86)(4, "button", 242),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              let a;
              return e.KtG(
                t.saveTemplate(
                  null == (a = t.templateStore.getActiveTemplate())
                    ? null
                    : a.id,
                ),
              );
            }),
            e.YNc(5, pn, 3, 3, "span", 20),
            e.YNc(6, gn, 1, 0, "div", 232),
            e.qZA(),
            e.YNc(7, dn, 3, 3, "button", 243),
            e.qZA()());
        }
        if (2 & o) {
          const r = e.oxw();
          (e.xp6(1),
            e.Q6J("ngModel", r.templateStore.templateName)(
              "placeholder",
              e.lcZ(2, 6, "Enter template name"),
            )("disabled", r.templateStore.savingtemplate),
            e.xp6(4),
            e.Q6J("ngIf", !r.templateStore.savingtemplate),
            e.xp6(1),
            e.Q6J("ngIf", r.templateStore.savingtemplate),
            e.xp6(1),
            e.Q6J("ngIf", !r.templateStore.savingtemplate));
        }
      }
      function mn(o, i) {
        1 & o && e.GkF(0);
      }
      function un(o, i) {
        (1 & o &&
          (e.TgZ(0, "button", 245), e._uU(1), e.ALo(2, "jtranslate"), e.qZA()),
          2 & o && (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "Discard"), " ")));
      }
      function hn(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 81)(1, "div", 82),
            e._UZ(2, "img", 246),
            e.TgZ(3, "div", 247),
            e._uU(4),
            e.ALo(5, "jtranslate"),
            e.qZA()()()),
          2 & o)
        ) {
          const r = e.oxw(2);
          (e.xp6(4),
            e.AsE(
              " ",
              e.lcZ(5, 2, "Template saved with name"),
              " ",
              r.templateStore.templateName,
              " ",
            ));
        }
      }
      function fn(o, i) {
        if ((1 & o && e.YNc(0, hn, 6, 4, "div", 75), 2 & o)) {
          const r = e.oxw();
          e.Q6J("ngIf", r.templateStore.templateSaved);
        }
      }
      const me = function () {
        return {};
      };
      var B = (function (o) {
        return ((o.LOW = "LOW"), (o.MEDIUM = "MEDIUM"), (o.HIGH = "HIGH"), o);
      })(B || {});
      let xn = (() => {
        var o;
        class i {
          constructor(n, t, a, s, c, p, g, u, M, C) {
            ((this.waBGService = n),
              (this.extDataService = t),
              (this.uiService = a),
              (this.cd = s),
              (this.datePipe = c),
              (this.store = p),
              (this.templateStore = g),
              (this.sheet = u),
              (this.errorStore = M),
              (this.log = C),
              (this.phoneNumber = E("phoneNumber")),
              (this.excelDetails = null),
              (this.chooseFile = new e.vpe()),
              (this.clearFile = new e.vpe()),
              (this.templateType = x.MessageTemplateType),
              (this.openSettings = !1),
              (this.phoneNumbers = []),
              (this.operations = x.Operation),
              (this.variableMapper = G),
              (this.proOptions = ""),
              (this.sliceNumber = !0),
              (this.errorsCount = 0),
              (this.riskLevel = B),
              (this.templateToDelete = null),
              (this.sendSourceAction = Q),
              (this.attachmentsUpdated = (0, e.tdS)(!1)),
              (this.invalidCustomization = (0, e.Flj)(() =>
                G.getInvalidVariables(
                  this.store.primaryMessage(),
                  this.sheet.columnNames(),
                )?.filter((P) => P?.trim()),
              )),
              (this.validCustomization = (0, e.Flj)(() =>
                G.getValidVariables(
                  this.store.primaryMessage(),
                  this.sheet.columnNames(),
                )?.filter((P) => P?.trim()),
              )),
              (this.risk = (0, e.Flj)(() =>
                this.showRisks
                  ? ((this.errorsCount =
                      this.errorStore.getAllOccurredErrors()?.length),
                    this.errorsCount >= 5
                      ? B.HIGH
                      : this.errorsCount >= 3
                        ? B.MEDIUM
                        : this.errorsCount >= 1
                          ? B.LOW
                          : null)
                  : null,
              )));
            const b = (0, te.S)(`+${t.currentUser.phoneNumber}`);
            (b?.country &&
              (this.preferredDialCode = x.CountryDialCodes.find(
                (P) => P?.code === b?.country,
              )),
              this.uiService.onAddContactsForMessaging$.subscribe((P) => {
                (this.phoneNumber.set(P.join(",")), this.addPhoneNumber(0));
              }),
              (0, e.cEC)(() => {
                this.proOptions = this.extDataService.isPro()
                  ? null
                  : this.validCustomization()?.length
                    ? j.B.PERSONALISATION
                    : this.store.timegapSettings() || this.store.batchSettings()
                      ? j.B.TIMEGAP_BATCH
                      : null;
              }));
          }
          attachTemplateDropdownInTextarea() {
            setTimeout(() => {
              this.allTemplatesToggle?.nativeElement?.click();
              const t = this.allTemplatesElement?.nativeElement;
              ((t.style.top = "0px"), (t.style.left = "0px"));
            }, 0);
          }
          useSavedTemplate(n) {
            this.templateStore.useTemplate(n);
          }
          selectPhoneNumberKey(n) {
            var t = this;
            return (0, m.Z)(function* () {
              t.sheet.selectedPhoneColumn.set(n);
              const a = [];
              for (const s of t.sheet.worksheet) {
                const c = s[t.sheet.selectedPhoneColumn()];
                a.push(c);
              }
              (t.setPhoneNumbers(a),
                t.store.createPhoneNumbersData(a),
                (t.sheet.startRow() === t.sheet.endRow() ||
                  !t.sheet.startRow() ||
                  !t.sheet.endRow()) &&
                  (t.sheet.startRow.set(2),
                  t.sheet.endRow.set(
                    1 + t.store.phoneNumberData.phoneData?.length,
                  )));
            })();
          }
          deleteTemplate(n) {
            this.templateStore.deleteTemplate(n);
          }
          get banPreventLink() {
            let n = "I need help to reduce chances of banning\n";
            ((n += `Name: ${this.extDataService.getUserDetails()?.name}\n`),
              (n += `Phone: ${this.extDataService.currentUser.phoneNumber}\n`),
              (n += `Version: ${this.extDataService.version}\n`),
              (n +=
                (this.extDataService.isPro()
                  ? "I am pro user"
                  : "I am free user") + "\n"));
            const t = this.extDataService.getUserDetails()?.installTimestamp;
            return (
              (n +=
                (t
                  ? `using wasender since ${this.datePipe.transform(t, "dd/MM/YYYY")}`
                  : "") + "\n"),
              (n += `Messaging to: ${this.store.proceesablePhoneData?.phoneData?.length} Contacts\n`),
              (n += `Message i am sending:\n------------------------------------\n${this.store.primaryMessage()?.slice(0, 500)} ${this.store.primaryMessage()?.length - 500 > 0 ? "+" + this.store.primaryMessage()?.length + "characters" : ""}\n------------------------------------\n    \n`),
              (n +=
                (this.store.attachments?.length > 0
                  ? `Attachments: ${this.store.attachments.map((a) => `${a.name} (${Math.round(a.size / 1024)}kb)`).join(", ")}`
                  : "") + "\n"),
              (n += this.store.timegapSettings
                ? `Time gap with random delay of ${this.store.randomDelay} is on\n`
                : ""),
              (n += this.store.batchSettings
                ? `And Sending in batches of ${this.store.waitAfterpeople} msgs and waiting for ${this.store.waitForMin} min after every batch\n`
                : ""),
              `${Ae.N.BAN_PREVENT_LINK}&chat=${encodeURIComponent(n)}`
            );
          }
          ngOnInit() {
            var n = this;
            return (0, m.Z)(function* () {
              ((n.phoneNumbers = yield n.waBGService.getPhoneNumbers()),
                n.store.selectedCountryInfo() ||
                  n.store.selectedCountryInfo.set({
                    name: "India",
                    dial_code: "91",
                    code: "IN",
                  }),
                n.phoneNumbers || (n.phoneNumbers = []),
                n.sheet.init(),
                (!n.sheet.startRow() || !n.sheet.endRow()) &&
                  (n.sheet.startRow.set(0), n.sheet.endRow.set(0)),
                n.phoneNumbers?.length &&
                  !n.sheet.excelDetails &&
                  n.store.createPhoneNumbersData(n.phoneNumbers),
                n.store.banAlertTime || n.store.banAlertTime.set(0),
                (n.errorsCount = 0),
                (n.showRisks = !1),
                yield Promise.all([n.templateStore.init(), n.store.init()]));
            })();
          }
          toggleCaption() {
            var n = this;
            return (0, m.Z)(function* () {
              const t = n.store.sendWithCaption();
              n.store.sendWithCaption.set(!t);
            })();
          }
          onCountryCodeChange(n) {
            var t = this;
            return (0, m.Z)(function* () {
              (t.store.selectedCountryInfo.set(n),
                t.store.createPhoneNumbersData(t.phoneNumbers));
            })();
          }
          clearSelections() {
            var n = this;
            return (0, m.Z)(function* () {
              (n.setPhoneNumbers([]),
                n.sheet.selectedPhoneColumn.set(""),
                (n.sheet.excelDetails = null),
                n.sheet.activeSheet.set(null),
                (n.sheet.worksheet = null),
                (n.store.phoneNumberData = null),
                n.sheet.columnNames.set([]),
                n.sheet.startRow.set(0),
                n.sheet.endRow.set(0),
                (n.store.forceNumbersLimit = 0),
                (n.errorsCount = 0),
                n.clearFile.emit());
            })();
          }
          setPhoneNumbers(n) {
            var t = this;
            return (0, m.Z)(function* () {
              ((t.phoneNumbers = n),
                yield t.waBGService.sendPhoneNumbers(t.phoneNumbers));
            })();
          }
          ngOnChanges(n) {
            var t = this;
            return (0, m.Z)(function* () {
              if (n.excelDetails && t.excelDetails) {
                ((t.sheet.excelDetails = t.excelDetails),
                  (t.sheet.file = t.file),
                  (t.store.forceNumbersLimit = 0),
                  t.setPhoneNumbers([]));
                const a = t.sheet.getInitActiveSheet();
                (yield t.selectActiveSheet(a), t.cd.detectChanges());
              }
            })();
          }
          selectDoc() {
            this.inputDocuments?.nativeElement?.click();
          }
          selectMedia() {
            this.inputImages?.nativeElement?.click();
          }
          editFile() {
            this.chooseFile.emit();
          }
          selectActiveSheet(n) {
            var t = this;
            return (0, m.Z)(function* () {
              (yield t.sheet.selectWorksheet(n),
                t.sheet.selectedPhoneColumn() && t.processPhoneNumberColumn());
            })();
          }
          processPhoneNumberColumn() {
            var n = this;
            return (0, m.Z)(function* () {
              const t = [];
              for (const a of n.sheet.worksheet) {
                const s = a[n.sheet.selectedPhoneColumn()];
                t.push(s);
              }
              (n.setPhoneNumbers(t),
                n.store.createPhoneNumbersData(n.phoneNumbers),
                (n.sheet.startRow() === n.sheet.endRow() ||
                  !n.sheet.startRow() ||
                  !n.sheet.endRow()) &&
                  (n.sheet.startRow.set(2),
                  n.sheet.endRow.set(
                    1 + n.store.phoneNumberData.phoneData?.length,
                  )));
            })();
          }
          removeLastEntry() {
            const n = this.phoneNumbers?.length - 1;
            this.phoneNumber() ||
              (n > -1 &&
                setTimeout(() => {
                  (this.phoneNumber.set(this.phoneNumbers?.[n]),
                    this.removeNumber(n));
                }, 0));
          }
          addPhoneNumber(n, t = !1) {
            var a = this;
            return (0, m.Z)(function* () {
              const s = a.phoneNumbers || [],
                c = isNaN(a.phoneNumber)
                  ? a.phoneNumber()
                  : `${a.phoneNumber()}`;
              if (c) {
                if (c?.includes(",")) {
                  const p = c?.split(",")?.filter((g) => g?.trim()?.length);
                  s.splice(n, 1, ...p);
                } else if (c?.includes("\n")) {
                  const p = c?.split("\n")?.filter((g) => g?.trim()?.length);
                  s.splice(n, 1, ...p);
                } else if (t && c?.includes(" ")) {
                  const p = c?.split("\n")?.filter((g) => g?.trim()?.length);
                  s.splice(n, 1, ...p);
                } else s.splice(n, 1, a.phoneNumber());
                (a.setPhoneNumbers(s), a.phoneNumber.set(""));
              }
              (a.store.createPhoneNumbersData(a.phoneNumbers),
                setTimeout(() => {
                  c && !a.phoneNumber() && a.phoneInput?.nativeElement.focus();
                }, 0));
            })();
          }
          removeNumber(n) {
            var t = this;
            return (0, m.Z)(function* () {
              let a = t.phoneNumbers;
              (a && ((a = a.filter((s, c) => c !== n)), t.setPhoneNumbers(a)),
                t.store.createPhoneNumbersData(t.phoneNumbers));
            })();
          }
          sanitzeNumber() {
            this.phoneNumber.set(this.phoneNumber().replace(/[^0-9, ]/g, ""));
          }
          insertVariable(n) {
            var t = this;
            return (0, m.Z)(function* () {
              const a = t.store.primaryMessage(),
                s =
                  t.msgTextarea?.nativeElement?.selectionStart ||
                  a?.length ||
                  0;
              (t.store.setPrimaryMessage(
                a?.slice(0, s) + `{{${n}}}` + a?.slice(s),
              ),
                t.onMsgChange());
            })();
          }
          get additionalVariants() {
            return (this.store.message() || []).slice(1);
          }
          trackByIndex(n) {
            return n;
          }
          clearFiles() {
            ((this.store.attachments = []),
              this.store.sendWithCaption.set(!1),
              this.store.updateAttachmentsOverall(!1));
          }
          attachFile(n) {
            var t = this;
            return (0, m.Z)(function* () {
              const a = n.target.files;
              for (let s of a) {
                const c = yield k.M.toBase64(s);
                t.store.attachments.push(new k.M(s.name, s.size, s.type, c));
              }
              (t.cd.detectChanges(),
                a.length > 0 && (yield t.store.updateAttachmentsOverall(!0)),
                t.attachmentsUpdated.set(!0),
                (t.inputDocuments.nativeElement.value = null),
                (t.inputImages.nativeElement.value = null));
            })();
          }
          removeAttachment(n) {
            var t = this;
            return (0, m.Z)(function* () {
              setTimeout(
                (0, m.Z)(function* () {
                  (t.store.attachments.splice(n, 1),
                    t.store.attachments?.length ||
                      t.store.sendWithCaption.set(!1),
                    yield t.store.updateAttachmentsOverall(
                      t.store.sendWithCaption(),
                    ));
                }),
                0,
              );
            })();
          }
          downloadWrongNumber() {
            const n = this.store.proceesablePhoneData.phoneData
                .filter((c) => !c.isValid)
                .map(
                  (c) =>
                    this.sheet.worksheet?.[c.sheetIndex] || {
                      number: c.originalNumber,
                    },
                ),
              t = $.P6.json_to_sheet(n, { header: this.sheet.columnNames() }),
              s = $.P6.book_new();
            ($.P6.book_append_sheet(s, t, "Wrong Numbers"),
              $.NC(s, "wrong-phone-numbers.xls"));
          }
          onPaste(n, t) {
            setTimeout(() => {
              (this.addPhoneNumber(n), t && this.focusOut(t));
            }, 100);
          }
          focusTag(n, t) {
            (n.classList.add("on-input"),
              n.querySelector("textarea").focus(),
              this.mainElement?.nativeElement.classList.add("tag-input-open"),
              this.phoneNumber.set(t.originalNumber));
          }
          focusOut(n) {
            (n?.classList.remove("on-input"),
              this.mainElement?.nativeElement.classList.remove(
                "tag-input-open",
              ));
          }
          onMsgChange(n = {}) {
            "/" === n.key
              ? this.attachTemplateDropdownInTextarea()
              : this.msgTextarea?.nativeElement?.click();
          }
          onTimeGapChange() {
            this.store.timegapSettings.set(!this.store.timegapSettings());
          }
          onBatchGapChange() {
            this.store.batchSettings.set(!this.store.batchSettings());
          }
          get isPro() {
            return this.extDataService.isPro();
          }
          get showBanAlert() {
            const n = this.extDataService.isPro();
            return (
              !!(
                this.store.banAlertTime() - Date.now() <= 0 &&
                this.extDataService?.appConfig?.suggestBanEnabled(
                  this.extDataService?.currentUser?.phoneNumber,
                )
              ) &&
              (n
                ? this.store.proceesablePhoneData?.phoneData?.length >= 2 &&
                  (this.store.attachments?.length > 4 ||
                    (this.store.primaryMessage()?.length &&
                      (!this.store.timegapSettings() ||
                        !this.store.batchSettings())) ||
                    (this.store.primaryMessage()?.length &&
                      this.sheet.excelDetails &&
                      !this.validCustomization()?.length) ||
                    this.store.primaryMessage()?.length > 500 ||
                    this.store.waitAfterpeople() > 50)
                : this.store.proceesablePhoneData?.phoneData?.length > 50)
            );
          }
          closeBanAlert() {
            this.store.banAlertTime.set(Date.now() + 864e5);
          }
          saveTemplate(n = "") {
            var t = this;
            return (0, m.Z)(function* () {
              yield t.templateStore.saveTemplate(n);
            })();
          }
          sendMessages(n) {
            n === x.Operation.OPERATION_SEND_MESSAGE
              ? (this.errorStore.recalculateErrors(),
                (this.errorsCount =
                  this.errorStore.getAllOccurredErrors()?.length),
                this.errorsCount
                  ? (this.showRisks = !0)
                  : this.store.sendMessages(n, Q.NO_ERROR_AND_SEND))
              : this.store.sendMessages(n, Q.FILTER);
          }
          showErrorModal() {
            const t = this.errorStore.recalculateErrors().map((s) => s.id),
              a = {};
            (t.forEach((s) => {
              a[s] = !0;
            }),
              this.log.log("show_anti_ban_error_modal", a),
              this.errorStore.onShowErrorModal());
          }
          toggleUnsubscription() {
            (this.store.addUnsubscriptionText.set(
              !this.store.addUnsubscriptionText(),
            ),
              this.store.unsubscriptionText() ||
                this.store.unsubscriptionText.set(
                  x.MessageTemplate.DEFAULT_UNSUBSCRIPTION_TEXT,
                ),
              setTimeout(() => {
                if (this.store.addUnsubscriptionText()) {
                  const n = this.unsubscriptionArea?.nativeElement;
                  n &&
                    (n.focus(),
                    n.setSelectionRange(n.value.length, n.value.length));
                }
              }, 0));
          }
          proWarnSheetSelection() {
            this.extDataService.isPro() ||
              this.uiService.showProWarning(j.B.SHEET_RANGE);
          }
          selectTemplateToDelete(n) {
            ((this.templateToDelete = n),
              setTimeout(() => {
                this.deleteBtn?.nativeElement.click();
              }, 0));
          }
          isActiveTemplateChanged() {
            const n = this.templateStore.getActiveTemplate();
            return (
              !!n &&
              (this.store.primaryMessage() !== n.template ||
                this.store.sendWithCaption() !== n.sendWithCaption ||
                this.store.addUnsubscriptionText() !==
                  n.addUnsubscriptionText ||
                this.store.unsubscriptionText() !== n.unsubscriptionText ||
                this.attachmentsUpdated())
            );
          }
          get isSendingNotAllowed() {
            return (
              (this.store.addUnsubscriptionText() &&
                !this.store.isValidUnsubscripitonText()) ||
              this.proOptions ||
              !this.store.proceesablePhoneData?.phoneData?.length ||
              0 === this.store.proceesablePhoneData.validNumber ||
              !this.store.primaryMessage()?.trim()?.length
            );
          }
        }
        return (
          ((o = i).ɵfac = function (n) {
            return new (n || o)(
              e.Y36(v.jI),
              e.Y36(q.a),
              e.Y36(v.Fz),
              e.Y36(e.sBO),
              e.Y36(l.uU),
              e.Y36(L),
              e.Y36(_e),
              e.Y36(ne),
              e.Y36(W),
              e.Y36(v.mQ),
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["app-excel-mapping-for-messaging"]],
            viewQuery: function (n, t) {
              if (
                (1 & n &&
                  (e.Gf(Fe, 5),
                  e.Gf(De, 5),
                  e.Gf(Ie, 5),
                  e.Gf(Ue, 5),
                  e.Gf(Re, 5),
                  e.Gf(Le, 5),
                  e.Gf(Je, 5),
                  e.Gf(Ge, 5),
                  e.Gf(je, 5),
                  e.Gf(qe, 5)),
                2 & n)
              ) {
                let a;
                (e.iGM((a = e.CRH())) && (t.inputImages = a.first),
                  e.iGM((a = e.CRH())) && (t.phoneInput = a.first),
                  e.iGM((a = e.CRH())) && (t.dropdownRoot = a.first),
                  e.iGM((a = e.CRH())) && (t.allTemplatesElement = a.first),
                  e.iGM((a = e.CRH())) && (t.allTemplatesToggle = a.first),
                  e.iGM((a = e.CRH())) && (t.mainElement = a.first),
                  e.iGM((a = e.CRH())) && (t.inputDocuments = a.first),
                  e.iGM((a = e.CRH())) && (t.msgTextarea = a.first),
                  e.iGM((a = e.CRH())) && (t.deleteBtn = a.first),
                  e.iGM((a = e.CRH())) && (t.unsubscriptionArea = a.first));
              }
            },
            inputs: { excelDetails: "excelDetails", file: "file" },
            outputs: { chooseFile: "chooseFile", clearFile: "clearFile" },
            features: [e.TTD],
            decls: 126,
            vars: 69,
            consts: [
              [1, "excel-mapper"],
              ["main", ""],
              [1, "phone-adder"],
              [1, "d-flex", "w100p"],
              [1, "flex", "j-flex-center", "fs12", "fw500"],
              [1, "fa-kit", "fa-contact-book", "mr3"],
              [
                "class",
                "import-contacts a-flex-center flex cp",
                3,
                "click",
                4,
                "ngIf",
              ],
              ["class", "import-contacts a-flex-center flex", 4, "ngIf"],
              ["class", "mapping mt5", 4, "ngIf"],
              [1, "d-flex", "w100p", "mt5"],
              [1, "group-ids"],
              [1, "head"],
              [3, "preferredCountry", "countryInfo", "valueChange"],
              [1, "ids"],
              [4, "ngFor", "ngForOf"],
              [
                "class",
                "number-tag cp",
                "tabindex",
                "1",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                "rows",
                "1",
                "type",
                "text",
                "id",
                "main-number-input",
                3,
                "ngModel",
                "placeholder",
                "blur",
                "paste",
                "ngModelChange",
                "keydown.backspace",
                "keyup.space",
                "keyup.enter",
                4,
                "ngIf",
              ],
              ["class", "delete-all cp", 3, "click", 4, "ngIf"],
              [1, "messaging-details"],
              [1, "number-validations"],
              [4, "ngIf"],
              ["class", "msg-settings-preview cp", 3, "click", 4, "ngIf"],
              ["class", "msg-settings mt5 fs14 px10", 4, "ngIf"],
              ["class", "mt10 d-block", 3, "type", "close", 4, "ngIf"],
              [
                "tone",
                "error",
                "class",
                "mt10 d-block",
                3,
                "canClose",
                "type",
                4,
                "ngIf",
              ],
              [1, "message-creator"],
              [1, "head-content", "mb5", "mt10"],
              [1, "main", "fs12", "fw500"],
              [1, "fa-kit", "fa-message-solid"],
              ["class", "text-error", 4, "ngIf"],
              [1, "d-flex"],
              [
                "class",
                "mb10 d-block",
                "tone",
                "warning",
                3,
                "alignment",
                "canClose",
                4,
                "ngIf",
              ],
              [1, "text-area", "mb5"],
              [1, "area-header"],
              ["class", "customizations", 4, "ngIf"],
              [
                "class",
                "template-action-btn cp fs12 mr5",
                "data-toggle",
                "modal",
                "data-target",
                "#preview-modal",
                4,
                "ngIf",
              ],
              [1, "dropdown"],
              ["dropdownRoot", ""],
              [
                "rows",
                "7",
                "placeholder",
                "Type / to use a saved message template",
                1,
                "w100p",
                3,
                "ngModel",
                "ngModelChange",
                "keyup",
              ],
              ["msgTextarea", ""],
              ["data-toggle", "dropdown", 1, "d-none"],
              ["allTemplatesToggle", ""],
              ["class", "dropdown-menu all-templates", 4, "ngIf"],
              ["class", "message-variants", 4, "ngIf"],
              [
                "class",
                "w100p p10 mb5 unsubscribe-text",
                "rows",
                "1",
                3,
                "invalid",
                "ngModel",
                "ngModelChange",
                4,
                "ngIf",
              ],
              [1, "action-bar", "d-flex"],
              [1, "wrapper", "d-flex", "j-flex-start"],
              [1, "attachment-wrapper", "dropdown"],
              ["data-toggle", "dropdown", 1, "fs12", "cp", "p-relative"],
              [1, "fa-kit", "fa-attachment", "mr3"],
              ["class", "attachment-count", 4, "ngIf"],
              [1, "dropdown-menu"],
              ["class", "checkbox-wrapper ml5", 4, "ngIf"],
              [1, "wrapper", "d-flex"],
              [1, "checkbox-wrapper", "mr5"],
              [
                "type",
                "checkbox",
                "name",
                "addUnsubscriptionText",
                "id",
                "addUnsubscriptionText",
                3,
                "checked",
                "change",
              ],
              ["for", "addUnsubscriptionText", 1, "fwn", "fs12"],
              ["class", "add-variant cp fs12", 3, "click", 4, "ngIf"],
              [
                "class",
                "btn btn-theme mt5 mb15",
                3,
                "disable",
                "click",
                4,
                "ngIf",
              ],
              ["class", "alert", 3, "ngClass", 4, "ngIf"],
              [
                "accept",
                "image/*,video/mp4,video/3gpp,video/quicktime",
                "type",
                "file",
                "multiple",
                "",
                2,
                "display",
                "none",
                3,
                "change",
              ],
              ["inputImages", ""],
              [
                "type",
                "file",
                "multiple",
                "",
                2,
                "display",
                "none",
                3,
                "change",
              ],
              ["inputDocuments", ""],
              [
                "id",
                "preview-modal",
                "tabindex",
                "-1",
                "role",
                "dialog",
                "aria-labelledby",
                "modalLabel",
                "aria-hidden",
                "true",
                1,
                "modal",
                "fade",
              ],
              ["role", "document", 1, "modal-dialog"],
              [1, "modal-content", "p0"],
              [1, "modal-header", "py10"],
              [1, "mb0"],
              [
                "type",
                "button",
                "data-dismiss",
                "modal",
                "aria-label",
                "Close",
                1,
                "close",
              ],
              ["aria-hidden", "true"],
              [1, "modal-body", "p0"],
              ["disabled", "", "rows", "7", 1, "w100p", "p10"],
              [
                "id",
                "template-modal",
                "tabindex",
                "-1",
                "role",
                "dialog",
                "aria-labelledby",
                "modalLabel",
                "aria-hidden",
                "true",
                1,
                "modal",
                "fade",
              ],
              [
                1,
                "modal-content",
                "p0",
                "m-auto",
                "modal-content",
                "p0",
                "w-fit-content",
              ],
              ["class", "modal-body p10", 4, "ngIf"],
              [4, "ngTemplateOutlet"],
              [
                "id",
                "update-template-modal",
                "tabindex",
                "-1",
                "role",
                "dialog",
                "aria-labelledby",
                "modalLabel",
                "aria-hidden",
                "true",
                1,
                "modal",
                "fade",
              ],
              [
                "data-toggle",
                "modal",
                "data-target",
                "#delete-template-modal",
                1,
                "action-btn",
              ],
              ["deleteBtn", ""],
              [
                "id",
                "delete-template-modal",
                "tabindex",
                "-1",
                "role",
                "dialog",
                "aria-labelledby",
                "modalLabel",
                "aria-hidden",
                "true",
                1,
                "modal",
                "fade",
              ],
              [1, "modal-body", "p10"],
              [1, "text-center"],
              [1, "fs36"],
              [1, "fa-kit", "fa-trash"],
              [1, "ml5"],
              [1, "a-flex-center", "d-flex", "j-flex-start", "mt10"],
              [
                "data-dismiss",
                "modal",
                1,
                "btn",
                "btn-submit",
                "w100p",
                3,
                "click",
              ],
              [
                "class",
                "btn btn-light ml10 w100p",
                "data-dismiss",
                "modal",
                "aria-label",
                "Close",
                4,
                "ngIf",
              ],
              ["templateSaved", ""],
              [1, "import-contacts", "a-flex-center", "flex", "cp", 3, "click"],
              [1, "fa-kit", "fa-excel", "mr3", "text-crm"],
              [1, "tul"],
              [1, "import-contacts", "a-flex-center", "flex"],
              [1, "fa-kit", "fa-excel", "mr3"],
              [1, "close-sheet", "cp", 3, "click"],
              [1, "fa-kit", "fa-x", "text-danger"],
              [1, "mapping", "mt5"],
              [1, "map-block"],
              [1, "block-item"],
              [
                "data-toggle",
                "dropdown",
                1,
                "bg-crm-white",
                "br5",
                "d-flex",
                "p5",
                "py3",
                "block-item-name-wrapper",
              ],
              [1, "block-item-name"],
              [1, "fa-kit", "fa-chevron-down", "fs7", "ml5"],
              [1, "dropdown-menu", "pt5", "px10", "pb0"],
              ["class", "item cp", 3, "click", 4, "ngFor", "ngForOf"],
              [1, "block-item-name", "phone-nos-col"],
              [1, "phone-nos-count", "ml3", "mr3"],
              [1, "fa-kit", "fa-chevron-down", "fs7"],
              [1, "sheet-input", 3, "click"],
              [
                "type",
                "number",
                "name",
                "from",
                3,
                "ngModel",
                "disabled",
                "ngModelChange",
              ],
              ["class", "d-flex fs10 pro fa-kit fa-lock", 4, "ngIf"],
              [
                "type",
                "number",
                "name",
                "to",
                3,
                "ngModel",
                "disabled",
                "ngModelChange",
              ],
              [1, "item", "cp", 3, "click"],
              [1, "d-flex", "fs10", "pro", "fa-kit", "fa-lock"],
              ["tabindex", "1", 1, "number-tag"],
              ["tag", ""],
              [1, "number", "cp", 3, "click"],
              ["class", "fa-kit fa-x cp ml5", 3, "click", 4, "ngIf"],
              [
                "rows",
                "1",
                3,
                "ngModel",
                "placeholder",
                "blur",
                "paste",
                "ngModelChange",
                "keyup.enter",
                4,
                "ngIf",
              ],
              [1, "fa-kit", "fa-x", "cp", "ml5", 3, "click"],
              [
                "rows",
                "1",
                3,
                "ngModel",
                "placeholder",
                "blur",
                "paste",
                "ngModelChange",
                "keyup.enter",
              ],
              ["tabindex", "1", 1, "number-tag", "cp", 3, "click"],
              [
                "rows",
                "1",
                "type",
                "text",
                "id",
                "main-number-input",
                3,
                "ngModel",
                "placeholder",
                "blur",
                "paste",
                "ngModelChange",
                "keydown.backspace",
                "keyup.space",
                "keyup.enter",
              ],
              ["phoneInput", ""],
              [1, "delete-all", "cp", 3, "click"],
              [
                "class",
                "tag validation correct cp",
                3,
                "title",
                "click",
                4,
                "ngIf",
              ],
              ["class", "tag validation wrong cp", 3, "click", 4, "ngIf"],
              [1, "tag", "validation", "correct", "cp", 3, "title", "click"],
              [1, "fa-kit", "fa-filter", "d-flex"],
              [1, "tag", "validation", "wrong", "cp", 3, "click"],
              [1, "fa-kit", "fa-download", "d-flex"],
              [1, "msg-settings-preview", "cp", 3, "click"],
              [1, "d-flex", "fs12"],
              [1, "fa-kit", "fa-clock", "d-flex", "mr3"],
              ["class", "fa-kit fa-chevron-down", 4, "ngIf"],
              ["class", "fa-kit fa-chevron-up", 4, "ngIf"],
              [1, "tag"],
              [1, "fa-kit", "fa-hourglass", "d-flex"],
              [1, "fa-kit", "fa-server", "d-flex", "mr5"],
              [1, "fa-kit", "fa-clock", "d-flex", "mr5"],
              [1, "fa-kit", "fa-chevron-down"],
              [1, "fa-kit", "fa-chevron-up"],
              [1, "msg-settings", "mt5", "fs14", "px10"],
              [1, "settings", "d-flex"],
              [1, "content", "d-flex"],
              [1, "section-title"],
              ["type", "number", 3, "ngModel", "ngModelChange"],
              [
                "size",
                "small",
                "name",
                "time-gap",
                1,
                "d-flex",
                3,
                "selected",
                "selectedChange",
              ],
              [1, "settings", "mt10"],
              [1, "content"],
              [
                "size",
                "small",
                "name",
                "batch-gap",
                3,
                "selected",
                "selectedChange",
              ],
              [1, "mt10", "d-block", 3, "type", "close"],
              ["tone", "error", 1, "mt10", "d-block", 3, "canClose", "type"],
              [1, "text-error"],
              [
                "class",
                "template-action-btn cp mr5 fs12 ",
                "data-toggle",
                "modal",
                "data-target",
                "#update-template-modal",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                "data-toggle",
                "modal",
                "data-target",
                "#template-modal",
                1,
                "template-action-btn",
                "cp",
                "fs12",
                3,
                "click",
              ],
              [
                "data-toggle",
                "modal",
                "data-target",
                "#update-template-modal",
                1,
                "template-action-btn",
                "cp",
                "mr5",
                "fs12",
                3,
                "click",
              ],
              [
                "class",
                "template-action-btn cp mr5 fs12",
                3,
                "click",
                4,
                "ngIf",
              ],
              [1, "template-action-btn", "cp", "mr5", "fs12", 3, "click"],
              [1, "dropdown", "ml5"],
              ["data-toggle", "dropdown", 1, "template-action-btn", "cp", "p4"],
              [1, "fa-kit", "fa-kebab-menu", "fa-kit", "fs11", "ml5", "mr5"],
              [1, "dropdown-menu", "p10", "l-unset", "r0"],
              ["class", "option cp", 3, "click", 4, "ngIf"],
              [1, "option", "cp", 3, "click"],
              [
                "tone",
                "warning",
                1,
                "mb10",
                "d-block",
                3,
                "alignment",
                "canClose",
              ],
              ["head", ""],
              [1, "customizations"],
              [1, "fwn", "fs12"],
              ["class", "dropdown r0 lauto", 4, "ngIf"],
              [1, "dropdown", "r0", "lauto"],
              ["data-toggle", "dropdown", 1, "fs12", "item", "cp", "d-flex"],
              [1, "fa-kit", "fa-chevron-down", "ml5", "fs7"],
              [1, "dropdown-menu", "pt5", "px10", "pb0", "l-unset", "r0"],
              ["class", "item cp mb5", 3, "click", 4, "ngFor", "ngForOf"],
              [1, "item", "cp", "mb5", 3, "click"],
              [
                "data-toggle",
                "modal",
                "data-target",
                "#preview-modal",
                1,
                "template-action-btn",
                "cp",
                "fs12",
                "mr5",
              ],
              [1, "icon-eye"],
              [1, "dropdown-menu", "all-templates"],
              ["allTemplates", ""],
              [1, "p10"],
              [1, "form-control", "template-search"],
              [
                "type",
                "text",
                "name",
                "",
                "id",
                "",
                1,
                "w100p",
                3,
                "ngModel",
                "placeholder",
                "ngModelChange",
              ],
              ["search", ""],
              ["class", "fa-kit fa-x cp", 3, "click", 4, "ngIf"],
              ["class", "template-option", 4, "ngIf"],
              [1, "fa-kit", "fa-x", "cp", 3, "click"],
              [1, "template-option"],
              [1, "icon-cover", "p10", 3, "click"],
              ["class", "fa-kit fa-text fs12", 4, "ngIf"],
              ["class", "fa-kit fa-union", 4, "ngIf"],
              ["class", "fa-kit fa-document", 4, "ngIf"],
              [1, "content-body", "w100p", 3, "click"],
              [1, "template-msg"],
              [1, "action-btns"],
              [1, "action-btn", 3, "click"],
              [1, "fa-kit", "fa-trash", "text-danger"],
              [1, "fa-kit", "fa-text", "fs12"],
              [1, "fa-kit", "fa-union"],
              [1, "fa-kit", "fa-document"],
              [1, "message-variants"],
              ["class", "variant", 4, "ngFor", "ngForOf", "ngForTrackBy"],
              [1, "rotation-hint", "fs11"],
              [1, "fa-kit", "fa-info", "mr5"],
              [1, "variant"],
              [1, "variant-header"],
              [1, "fs11", "fw500"],
              [
                1,
                "fa-kit",
                "fa-trash",
                "text-danger",
                "cp",
                3,
                "title",
                "click",
              ],
              [
                "rows",
                "5",
                1,
                "w100p",
                "p10",
                "variant-textarea",
                3,
                "ngModel",
                "placeholder",
                "ngModelChange",
              ],
              [
                "rows",
                "1",
                1,
                "w100p",
                "p10",
                "mb5",
                "unsubscribe-text",
                3,
                "ngModel",
                "ngModelChange",
              ],
              ["unsubscriptionArea", ""],
              [1, "text-crm-grey-dark-faded"],
              [1, "attachment-count"],
              [1, "previews-wrapper"],
              [1, "previews-header"],
              [1, "clear", 3, "click"],
              ["class", "tt-grey preview", 4, "ngFor", "ngForOf"],
              [1, "add-new", 3, "click"],
              [1, "tt-grey", "preview"],
              [1, "flex", "a-flex-center", "preview-body"],
              ["alt", "File", 3, "src"],
              [1, "ml5", "file-name"],
              [1, "remove-attachment"],
              [1, "fa-kit", "fa-x", "d-flex", "cp", 3, "click"],
              [1, "fa-kit", "fa-document", "mr5"],
              [1, "fa-kit", "fa-image", "mr5"],
              [1, "checkbox-wrapper", "ml5"],
              [
                "type",
                "checkbox",
                "name",
                "sendAsCaption",
                "id",
                "sendAsCaption",
                3,
                "checked",
                "change",
              ],
              ["for", "sendAsCaption", 1, "fwn", "fs12"],
              [1, "add-variant", "cp", "fs12", 3, "click"],
              [1, "fa-kit", "fa-add", "mr3"],
              [1, "btn", "btn-theme", "mt5", "mb15", 3, "click"],
              ["class", "loader theme", 4, "ngIf"],
              [1, "loader", "theme"],
              [1, "alert", 3, "ngClass"],
              [1, "d-flex", "a-flex-center"],
              [1, "fa-kit", "fa-ai", "mr10"],
              [1, "message"],
              [1, "actions"],
              [1, "btn", "ignore", 3, "disabled", "click"],
              [1, "btn", "fix", 3, "disabled", "click"],
              [
                "type",
                "text",
                "name",
                "from",
                1,
                "input",
                "form-control",
                3,
                "ngModel",
                "placeholder",
                "disabled",
                "ngModelChange",
              ],
              [1, "btn", "btn-submit", 3, "click"],
              [
                "class",
                "btn btn-light ml10",
                "data-dismiss",
                "modal",
                "aria-label",
                "Close",
                4,
                "ngIf",
              ],
              [
                "data-dismiss",
                "modal",
                "aria-label",
                "Close",
                1,
                "btn",
                "btn-light",
                "ml10",
              ],
              [
                "data-dismiss",
                "modal",
                "aria-label",
                "Close",
                1,
                "btn",
                "btn-light",
                "ml10",
                "w100p",
              ],
              [
                "_ngcontent-ng-c2662400487",
                "",
                "src",
                "../../../assets/img/web-mail.svg",
                "alt",
                "",
                "srcset",
                "",
              ],
              [1, "mt10"],
            ],
            template: function (n, t) {
              if (
                (1 & n &&
                  (e.TgZ(0, "div", 0, 1)(2, "div", 2)(3, "div", 3)(4, "div", 4),
                  e._UZ(5, "i", 5),
                  e.TgZ(6, "span"),
                  e._uU(7),
                  e.ALo(8, "jtranslate"),
                  e.qZA()(),
                  e.YNc(9, Qe, 5, 3, "div", 6),
                  e.YNc(10, Be, 6, 1, "div", 7),
                  e.qZA(),
                  e.YNc(11, Ke, 42, 25, "div", 8),
                  e.TgZ(12, "div", 9)(13, "div", 10)(14, "div", 11)(
                    15,
                    "app-dial-code-picker",
                    12,
                  ),
                  e.NdJ("valueChange", function (s) {
                    return t.onCountryCodeChange(s);
                  }),
                  e.qZA()(),
                  e.TgZ(16, "div", 13),
                  e.YNc(17, et, 2, 1, "ng-container", 14),
                  e.ALo(18, "slice"),
                  e.YNc(19, tt, 3, 4, "span", 15),
                  e.YNc(20, nt, 3, 4, "textarea", 16),
                  e.qZA()(),
                  e.YNc(21, ot, 2, 0, "div", 17),
                  e.qZA()(),
                  e.TgZ(22, "div", 18)(23, "div", 19),
                  e.YNc(24, it, 3, 2, "ng-container", 20),
                  e.qZA(),
                  e.YNc(25, gt, 9, 7, "div", 21),
                  e.qZA(),
                  e.YNc(26, dt, 29, 29, "div", 22),
                  e.YNc(27, mt, 2, 2, "app-pro-warn", 23),
                  e.YNc(28, ft, 3, 4, "app-pro-warn", 24),
                  e.TgZ(29, "div", 25)(30, "div", 26)(31, "div", 27),
                  e._UZ(32, "i", 28),
                  e.TgZ(33, "span"),
                  e._uU(34),
                  e.ALo(35, "jtranslate"),
                  e.qZA(),
                  e.YNc(36, xt, 4, 3, "span", 29),
                  e.qZA(),
                  e.TgZ(37, "div", 30),
                  e.YNc(38, Ct, 5, 4, "ng-container", 20),
                  e.YNc(39, vt, 2, 1, "ng-container", 20),
                  e.YNc(40, Pt, 6, 1, "ng-conatainer", 20),
                  e.qZA()(),
                  e.YNc(41, Tt, 7, 6, "app-alert", 31),
                  e.TgZ(42, "div", 32)(43, "div", 33),
                  e.YNc(44, Zt, 7, 5, "div", 34),
                  e.YNc(45, At, 4, 3, "div", 35),
                  e.qZA(),
                  e.TgZ(46, "div", 36, 37)(48, "textarea", 38, 39),
                  e.NdJ("ngModelChange", function (s) {
                    return t.store.setPrimaryMessage(s);
                  })("keyup", function (s) {
                    return t.onMsgChange(s);
                  }),
                  e.qZA(),
                  e.TgZ(50, "div", 40, 41),
                  e._uU(52, "xx"),
                  e.qZA(),
                  e.YNc(53, Ut, 11, 8, "div", 42),
                  e.qZA(),
                  e.YNc(54, Lt, 7, 9, "div", 43),
                  e.YNc(55, Jt, 3, 3, "textarea", 44),
                  e.TgZ(56, "div", 45)(57, "div", 46)(58, "div", 47)(
                    59,
                    "div",
                    48,
                  ),
                  e._UZ(60, "i", 49),
                  e.YNc(61, Gt, 3, 3, "ng-container", 20),
                  e.YNc(62, jt, 6, 6, "ng-container", 20),
                  e.YNc(63, qt, 2, 1, "div", 50),
                  e.qZA(),
                  e.TgZ(64, "div", 51)(65, "form"),
                  e.YNc(66, Bt, 12, 4, "ng-container", 20),
                  e.YNc(67, Yt, 9, 6, "ng-container", 20),
                  e.qZA()()(),
                  e.YNc(68, Ht, 5, 4, "div", 52),
                  e.qZA(),
                  e.TgZ(69, "div", 53)(70, "div", 54)(71, "input", 55),
                  e.NdJ("change", function () {
                    return t.toggleUnsubscription();
                  }),
                  e.qZA(),
                  e.TgZ(72, "label", 56),
                  e._uU(73),
                  e.ALo(74, "jtranslate"),
                  e.qZA()(),
                  e.YNc(75, zt, 4, 3, "a", 57),
                  e.qZA()()(),
                  e.YNc(76, $t, 3, 4, "button", 58),
                  e.YNc(77, on, 14, 11, "div", 59),
                  e.qZA(),
                  e.TgZ(78, "input", 60, 61),
                  e.NdJ("change", function (s) {
                    return t.attachFile(s);
                  }),
                  e.qZA(),
                  e.TgZ(80, "input", 62, 63),
                  e.NdJ("change", function (s) {
                    return t.attachFile(s);
                  }),
                  e.qZA(),
                  e.TgZ(82, "div", 64)(83, "div", 65)(84, "div", 66)(
                    85,
                    "div",
                    67,
                  )(
                    86,
                    "p",
                    68,
                  )(87, "b"),
                  e._uU(88),
                  e.ALo(89, "jtranslate"),
                  e.qZA()(),
                  e.TgZ(90, "button", 69)(91, "span", 70),
                  e._uU(92, "\xd7"),
                  e.qZA()()(),
                  e.TgZ(93, "div", 71)(94, "textarea", 72),
                  e._uU(95),
                  e.qZA()()()()(),
                  e.TgZ(96, "div", 73)(97, "div", 65)(98, "div", 74),
                  e.YNc(99, ln, 8, 8, "div", 75),
                  e.YNc(100, cn, 1, 0, "ng-container", 76),
                  e.qZA()()(),
                  e.TgZ(101, "div", 77)(102, "div", 65)(103, "div", 74),
                  e.YNc(104, _n, 8, 8, "div", 75),
                  e.YNc(105, mn, 1, 0, "ng-container", 76),
                  e.qZA()()(),
                  e._UZ(106, "div", 78, 79),
                  e.TgZ(108, "div", 80)(109, "div", 65)(110, "div", 74)(
                    111,
                    "div",
                    81,
                  )(112, "div", 82)(113, "div", 83),
                  e._UZ(114, "i", 84),
                  e.qZA(),
                  e.TgZ(115, "span", 85),
                  e._uU(116),
                  e.ALo(117, "jtranslate"),
                  e.qZA()(),
                  e.TgZ(118, "div", 86)(119, "button", 87),
                  e.NdJ("click", function () {
                    return t.deleteTemplate(t.templateToDelete);
                  }),
                  e.TgZ(120, "span"),
                  e._uU(121),
                  e.ALo(122, "jtranslate"),
                  e.qZA()(),
                  e.YNc(123, un, 3, 3, "button", 88),
                  e.qZA()()()()(),
                  e.YNc(124, fn, 1, 1, "ng-template", null, 89, e.W1O),
                  e.qZA()),
                2 & n)
              ) {
                const a = e.MAs(125);
                let s, c, p, g, u, M, C, b, P, Z, N, w, F, V;
                (e.xp6(7),
                  e.Oqu(e.lcZ(8, 51, "Contacts")),
                  e.xp6(2),
                  e.Q6J("ngIf", !t.sheet.excelDetails),
                  e.xp6(1),
                  e.Q6J("ngIf", t.sheet.excelDetails),
                  e.xp6(1),
                  e.Q6J("ngIf", t.sheet.excelDetails),
                  e.xp6(4),
                  e.Q6J("preferredCountry", t.preferredDialCode)(
                    "countryInfo",
                    t.store.selectedCountryInfo(),
                  ),
                  e.xp6(1),
                  e.ekj("disabled", t.sheet.excelDetails),
                  e.xp6(1),
                  e.Q6J(
                    "ngForOf",
                    e.Dn7(
                      18,
                      53,
                      null == t.store.proceesablePhoneData
                        ? null
                        : t.store.proceesablePhoneData.phoneData,
                      0,
                      t.sliceNumber
                        ? 100
                        : null == t.store.proceesablePhoneData ||
                            null == t.store.proceesablePhoneData.phoneData
                          ? null
                          : t.store.proceesablePhoneData.phoneData.length,
                    ),
                  ),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    t.sliceNumber &&
                      (null == t.store.proceesablePhoneData ||
                      null == t.store.proceesablePhoneData.phoneData
                        ? null
                        : t.store.proceesablePhoneData.phoneData.length) > 100,
                  ),
                  e.xp6(1),
                  e.Q6J("ngIf", !t.sheet.excelDetails),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    !t.sheet.excelDetails &&
                      (null == t.store.phoneNumberData ||
                      null == t.store.phoneNumberData.phoneData
                        ? null
                        : t.store.phoneNumberData.phoneData.length),
                  ),
                  e.xp6(3),
                  e.Q6J("ngIf", t.store.phoneNumberData),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    (null == t.store.proceesablePhoneData
                      ? null
                      : t.store.proceesablePhoneData.validNumber) > 1,
                  ),
                  e.xp6(1),
                  e.Q6J("ngIf", t.openSettings),
                  e.xp6(1),
                  e.Q6J("ngIf", t.store.proFeauters),
                  e.xp6(1),
                  e.Q6J("ngIf", t.proOptions),
                  e.xp6(6),
                  e.Oqu(e.lcZ(35, 57, "Message box")),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    !(null != (s = t.store.primaryMessage()) && s.length) &&
                      (null == t.store.phoneNumberData ||
                      null == t.store.phoneNumberData.phoneData
                        ? null
                        : t.store.phoneNumberData.phoneData.length),
                  ),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    t.extDataService.isPro() &&
                      (null == (c = t.store.primaryMessage()) ||
                      null == (p = c.trim())
                        ? null
                        : p.length),
                  ),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    !(
                      null != (g = t.store.primaryMessage()) &&
                      null != (u = g.trim()) &&
                      u.length
                    ) &&
                      (null == t.templateStore ||
                      null == (g = t.templateStore.templates())
                        ? null
                        : g.length),
                  ),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    (null == (M = t.store.primaryMessage()) ||
                    null == (C = M.trim())
                      ? null
                      : C.length) &&
                      (null == t.templateStore ||
                      null == (M = t.templateStore.templates())
                        ? null
                        : M.length),
                  ),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    t.sheet.excelDetails &&
                      (null == (b = t.invalidCustomization())
                        ? null
                        : b.length),
                  ),
                  e.xp6(3),
                  e.Q6J(
                    "ngIf",
                    null == (P = t.sheet.columnNames()) ? null : P.length,
                  ),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    (null == (Z = t.sheet.columnNames()) ? null : Z.length) &&
                      (null == (Z = t.validCustomization()) ? null : Z.length),
                  ),
                  e.xp6(3),
                  e.Q6J("ngModel", t.store.primaryMessage()),
                  e.xp6(5),
                  e.Q6J(
                    "ngIf",
                    null == t.templateStore ||
                      null == (N = t.templateStore.templates())
                      ? null
                      : N.length,
                  ),
                  e.xp6(1),
                  e.Q6J("ngIf", t.additionalVariants.length > 0),
                  e.xp6(1),
                  e.Q6J("ngIf", t.store.addUnsubscriptionText()),
                  e.xp6(1),
                  e.ekj(
                    "pt15",
                    null == t.store.attachments
                      ? null
                      : t.store.attachments.length,
                  ),
                  e.xp6(5),
                  e.Q6J(
                    "ngIf",
                    null == t.store.attachments
                      ? null
                      : t.store.attachments.length,
                  ),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    !(
                      null != t.store.attachments && t.store.attachments.length
                    ),
                  ),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    null == t.store.attachments
                      ? null
                      : t.store.attachments.length,
                  ),
                  e.xp6(3),
                  e.Q6J(
                    "ngIf",
                    null == t.store.attachments
                      ? null
                      : t.store.attachments.length,
                  ),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    !(
                      null != t.store.attachments && t.store.attachments.length
                    ),
                  ),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    null == t.store.attachments
                      ? null
                      : t.store.attachments.length,
                  ),
                  e.xp6(3),
                  e.Q6J("checked", t.store.addUnsubscriptionText()),
                  e.xp6(2),
                  e.Oqu(e.lcZ(74, 59, "Unsubscribe option")),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    null == (w = t.store.primaryMessage()) ||
                      null == (F = w.trim())
                      ? null
                      : F.length,
                  ),
                  e.xp6(1),
                  e.Q6J("ngIf", !t.showRisks || !t.risk()),
                  e.xp6(1),
                  e.Q6J("ngIf", t.showRisks && t.risk()),
                  e.xp6(11),
                  e.Oqu(e.lcZ(89, 61, "Preview")),
                  e.xp6(7),
                  e.hij(
                    "                        ",
                    null ==
                      (V = t.variableMapper.getMappedText(
                        null != t.extDataService && t.extDataService.isPro()
                          ? (null == t.sheet.worksheet
                              ? null
                              : t.sheet.worksheet[t.sheet.startRow() - 2]) ||
                              e.DdM(67, me)
                          : e.DdM(68, me),
                        t.store.primaryMessage(),
                      ))
                      ? null
                      : V.trim(),
                    "\n                    ",
                  ),
                  e.xp6(4),
                  e.Q6J("ngIf", !t.templateStore.templateSaved),
                  e.xp6(1),
                  e.Q6J("ngTemplateOutlet", a),
                  e.xp6(4),
                  e.Q6J("ngIf", !t.templateStore.templateSaved),
                  e.xp6(1),
                  e.Q6J("ngTemplateOutlet", a),
                  e.xp6(11),
                  e.hij(
                    " ",
                    e.lcZ(
                      117,
                      63,
                      "Are you sure you want to delete this template?",
                    ),
                    " ",
                  ),
                  e.xp6(5),
                  e.Oqu(e.lcZ(122, 65, "Delete")),
                  e.xp6(2),
                  e.Q6J("ngIf", !t.templateStore.savingtemplate));
              }
            },
            dependencies: [
              l.mk,
              l.sg,
              l.O5,
              l.tP,
              T._Y,
              T.Fj,
              T.wV,
              T.JJ,
              T.JL,
              T.On,
              T.F,
              Ne.U,
              Se.V,
              pe.w,
              ye,
              l.OU,
              ae.Q,
            ],
            styles: [
              ".excel-mapper.tag-input-open[_ngcontent-%COMP%]   #main-number-input[_ngcontent-%COMP%]{display:none}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;justify-content:center}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .import-contacts[_ngcontent-%COMP%]{display:flex;align-items:center;color:#000c}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .import-contacts[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:18px;margin-right:3px}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .import-contacts[_ngcontent-%COMP%]   .tul[_ngcontent-%COMP%]{color:#019f53}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .import-contacts[_ngcontent-%COMP%]   .close-sheet[_ngcontent-%COMP%]{border-radius:4px;background:rgba(0,0,0,.05);display:flex;padding:6px 5px;flex-direction:column;justify-content:center;align-items:center;gap:10px;font-size:12px;margin-left:4px}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .import-contacts[_ngcontent-%COMP%]   .close-sheet[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#616161}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .import-contacts[_ngcontent-%COMP%]   .close-sheet[_ngcontent-%COMP%]   i.text-danger[_ngcontent-%COMP%]{color:#b42727}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-start;gap:12px;padding:8px;background:grey;background:#FAFAFA;border-radius:7px}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{background:#F5F5F5;border-radius:6px;padding:2px 10px;font-size:12px;margin-bottom:5px}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .map-block[_ngcontent-%COMP%]{display:flex;white-space:nowrap;align-items:center;gap:6px;font-size:12px}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .map-block[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{background:#F5F5F5;border-radius:6px;padding:2px 10px;font-size:12px;margin-bottom:5px}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .map-block[_ngcontent-%COMP%]   .sheet-input[_ngcontent-%COMP%]{padding:0 5px 0 0;height:auto;font-size:13px;box-shadow:none;border-radius:4px;border:1px solid rgba(0,0,0,.05);overflow:hidden;background-color:#fff;display:flex;align-items:center}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .map-block[_ngcontent-%COMP%]   .sheet-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:5px;width:35px}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .map-block[_ngcontent-%COMP%]   .sheet-input.form-control[disabled][_ngcontent-%COMP%]{background-color:#fff}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .map-block[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{color:gray}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .map-block[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%]{display:flex;gap:3px;align-items:center;cursor:pointer}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .map-block[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   div[data-toggle=dropdown][_ngcontent-%COMP%]{max-width:133px;overflow:hidden;text-overflow:ellipsis}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .map-block[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%]   .block-item-name-wrapper[_ngcontent-%COMP%]{max-width:120px}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .map-block[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%]   .block-item-name-wrapper[_ngcontent-%COMP%]   .block-item-name[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .map-block[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%]   .block-item-name-wrapper[_ngcontent-%COMP%]   .block-item-name.phone-nos-col[_ngcontent-%COMP%]{max-width:250px;display:block}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .map-block[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{display:flex;align-items:center}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .map-block[_ngcontent-%COMP%]:last-child   .block-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{right:0;left:unset}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .group-ids[_ngcontent-%COMP%]{width:100%;display:flex;border:1px solid #dbdbdb;border-radius:8px}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .group-ids[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{padding:10px;flex-shrink:0;background:#ebebeb;display:flex;justify-content:center;align-items:center}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .group-ids[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]{width:100%;padding:10px;display:flex;flex-wrap:wrap;gap:4px;max-height:85px;overflow:auto}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .group-ids[_ngcontent-%COMP%]   .ids.disabled[_ngcontent-%COMP%]{background:#fafafa}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .group-ids[_ngcontent-%COMP%]   .ids.disabled[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{pointer-events:none}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .group-ids[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{flex:1 0 auto;resize:none}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .group-ids[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .number-tag[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-size:12px;padding:4px 6px;display:flex;align-items:center;border-radius:3px;border:1px solid #E6E6E6;background:#F5F5F5;color:#818181;height:-moz-fit-content;height:fit-content}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .group-ids[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .number-tag[_ngcontent-%COMP%]   .number.invalid[_ngcontent-%COMP%]{border:1px solid #FFC2C2;background:#FFEFEF}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .group-ids[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .number-tag[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{display:none}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .group-ids[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .number-tag.on-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{display:block}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .group-ids[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .number-tag.on-input[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{display:none}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .group-ids[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:none;outline:none;height:-moz-fit-content;height:fit-content}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .group-ids[_ngcontent-%COMP%]   .csv-import[_ngcontent-%COMP%]{display:flex;padding:5px 10px 2px;flex-direction:column;justify-content:center;align-items:center;background:rgba(1,159,83,.05)}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .group-ids[_ngcontent-%COMP%]   .csv-import[_ngcontent-%COMP%]   .csv-label[_ngcontent-%COMP%]{font-size:11px}.excel-mapper[_ngcontent-%COMP%]   .phone-adder[_ngcontent-%COMP%]   .delete-all[_ngcontent-%COMP%]{display:flex;padding-left:7px;flex-direction:column;justify-content:center;align-items:center;color:#b42727}.excel-mapper[_ngcontent-%COMP%]   .messaging-details[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;justify-content:space-between;margin-top:10px}.excel-mapper[_ngcontent-%COMP%]   .messaging-details[_ngcontent-%COMP%]   .msg-settings-preview[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px}.excel-mapper[_ngcontent-%COMP%]   .messaging-details[_ngcontent-%COMP%]   .number-validations[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.excel-mapper[_ngcontent-%COMP%]   .messaging-details[_ngcontent-%COMP%]   .number-validations[_ngcontent-%COMP%]   .validation.correct[_ngcontent-%COMP%]{background:#F5F5F5}.excel-mapper[_ngcontent-%COMP%]   .messaging-details[_ngcontent-%COMP%]   .number-validations[_ngcontent-%COMP%]   .validation.wrong[_ngcontent-%COMP%]{background:#FFEFEF}.excel-mapper[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{border-radius:4px;display:flex;padding:4px;align-items:center;gap:4px;font-size:12px;color:#818181;background:#F5F5F5}.excel-mapper[_ngcontent-%COMP%]   .group-errors[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-top:7px}.excel-mapper[_ngcontent-%COMP%]   .group-errors[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{display:flex;align-items:center;gap:7px}.excel-mapper[_ngcontent-%COMP%]   .group-errors[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:16px;height:16px;border-radius:2px;border:1px solid grey;display:inline-block}.excel-mapper[_ngcontent-%COMP%]   .group-errors[_ngcontent-%COMP%]   .error.not-found[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:orange}.excel-mapper[_ngcontent-%COMP%]   .group-errors[_ngcontent-%COMP%]   .error.duplicate[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:red}.excel-mapper[_ngcontent-%COMP%]   .msg-settings[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.excel-mapper[_ngcontent-%COMP%]   .msg-settings[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{font-weight:500}.excel-mapper[_ngcontent-%COMP%]   .msg-settings[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;white-space:nowrap;gap:6px;color:#818181}.excel-mapper[_ngcontent-%COMP%]   .msg-settings[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#000}.excel-mapper[_ngcontent-%COMP%]   .msg-settings[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;outline:none;background:#f5f5f5;width:34px;border-radius:3px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]{margin-top:10px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .btn-theme.disable[_ngcontent-%COMP%]{background-color:#019f538a!important;box-shadow:none;cursor:not-allowed}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .head-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:10px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .head-content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{font-size:14px;font-weight:600;display:flex;align-items:center;gap:4px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .head-content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:inline-flex}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-error[_ngcontent-%COMP%]{color:#b42727}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .template-action-btn[_ngcontent-%COMP%]{display:flex;padding:3px 4px;align-items:center;gap:4px;border-radius:4px;background:#F5F5F5}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]{position:relative;margin-top:5px;border:1px solid #dbdbdb;border-radius:5px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .add-variant[_ngcontent-%COMP%]{color:#019f53;text-decoration:none;display:inline-flex;align-items:center}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .area-header[_ngcontent-%COMP%]{padding:8px 10px 0%;display:flex;align-items:center;justify-content:space-between}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .area-header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{display:none;margin:0}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .area-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] ~ hr[_ngcontent-%COMP%]{display:block;border-bottom:1px solid #F5F5F5}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .area-header[_ngcontent-%COMP%]   .customizations[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:5px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .area-header[_ngcontent-%COMP%]   .customizations[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{background:#F5F5F5;border-radius:6px;padding:2px 10px;font-size:12px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:none;outline:none;padding:5px 10px 15px;min-height:200px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   textarea.unsubscribe-text[_ngcontent-%COMP%]{min-height:unset;max-height:84px;background-color:#0000000a;margin-bottom:0!important;border-radius:0}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   textarea.unsubscribe-text[_ngcontent-%COMP%]:focus{border:2px solid #019F53;outline:3px solid rgba(1,159,83,.2)}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .all-templates[_ngcontent-%COMP%]{top:120px;left:42px;max-height:400px;overflow:auto}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .all-templates[_ngcontent-%COMP%]   .template-search[_ngcontent-%COMP%]{position:relative;display:block;min-height:auto;height:auto;display:flex;align-items:center;padding:5px 10px!important}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .all-templates[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{height:12px;width:12px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .all-templates[_ngcontent-%COMP%]   .template-option[_ngcontent-%COMP%]{width:350px;cursor:pointer;white-space:nowrap;border-radius:3px;padding:8px 12px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .all-templates[_ngcontent-%COMP%]   .template-option[_ngcontent-%COMP%]   .icon-cover[_ngcontent-%COMP%]{display:flex;padding:3px 4px;align-items:center;gap:4px;border-radius:4px;background:#F5F5F5;font-size:16px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .all-templates[_ngcontent-%COMP%]   .template-option[_ngcontent-%COMP%]:hover{background-color:#fafafa}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .all-templates[_ngcontent-%COMP%]   .template-option[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;gap:8px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .all-templates[_ngcontent-%COMP%]   .template-option[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-body[_ngcontent-%COMP%]{overflow:hidden;font-size:12px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .all-templates[_ngcontent-%COMP%]   .template-option[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .template-msg[_ngcontent-%COMP%]{color:#818181;overflow:hidden;text-overflow:ellipsis;line-height:normal}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .all-templates[_ngcontent-%COMP%]   .template-option[_ngcontent-%COMP%]   .action-btns[_ngcontent-%COMP%]{display:none}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .all-templates[_ngcontent-%COMP%]   .template-option[_ngcontent-%COMP%]:hover   .action-btns[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .message-variants[_ngcontent-%COMP%]{border-top:1px dashed #e2e2e2;padding:6px 10px 0;display:flex;flex-direction:column;gap:8px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .message-variants[_ngcontent-%COMP%]   .variant[_ngcontent-%COMP%]{border:1px solid #ececec;border-radius:5px;background:#fafafa}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .message-variants[_ngcontent-%COMP%]   .variant[_ngcontent-%COMP%]   .variant-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:4px 8px;color:#000000a6}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .message-variants[_ngcontent-%COMP%]   .variant[_ngcontent-%COMP%]   .variant-textarea[_ngcontent-%COMP%]{border:none;outline:none;min-height:80px;background:transparent;resize:vertical}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .message-variants[_ngcontent-%COMP%]   .rotation-hint[_ngcontent-%COMP%]{color:#0000008c;display:flex;align-items:center}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:5px 10px;border-top:1px solid #F5F5F5;position:relative}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]{padding:3px;display:flex;align-items:center}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .attachment-wrapper[_ngcontent-%COMP%]   .attachment-count[_ngcontent-%COMP%]{position:absolute;left:4px;top:-10px;border-radius:30px;border:1px solid #FFF;background:#019F53;padding:0 5px;color:#fff;font-size:10px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .attachment-wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;gap:5px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .attachment-wrapper[_ngcontent-%COMP%]   .previews-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;position:relative;max-height:300px;overflow:auto;font-size:12px;white-space:nowrap}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .attachment-wrapper[_ngcontent-%COMP%]   .previews-wrapper[_ngcontent-%COMP%]   .previews-header[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.04);display:flex;align-items:center;justify-content:space-between;font-size:13px;padding:4px 10px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .attachment-wrapper[_ngcontent-%COMP%]   .previews-wrapper[_ngcontent-%COMP%]   .previews-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#b42727}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .attachment-wrapper[_ngcontent-%COMP%]   .previews-wrapper[_ngcontent-%COMP%]   .remove-attachment[_ngcontent-%COMP%]{color:#616161;border:1px solid #fff;font-size:11px;background:rgba(0,0,0,.05);display:flex;align-items:center;justify-content:center;border-radius:200px;padding:4px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .attachment-wrapper[_ngcontent-%COMP%]   .previews-wrapper[_ngcontent-%COMP%]   .add-new[_ngcontent-%COMP%]{padding:10px 10px 7px;text-align:center;color:#019f53;border-top:1px solid rgba(0,0,0,.05);position:sticky;bottom:0;background:white}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .attachment-wrapper[_ngcontent-%COMP%]   .previews-wrapper[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]{position:relative;width:-moz-fit-content;width:fit-content;display:flex;align-items:center;justify-content:space-between;width:300px;gap:10px;padding:0 10px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .attachment-wrapper[_ngcontent-%COMP%]   .previews-wrapper[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .preview-body[_ngcontent-%COMP%], .excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .attachment-wrapper[_ngcontent-%COMP%]   .previews-wrapper[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .preview-body[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .attachment-wrapper[_ngcontent-%COMP%]   .previews-wrapper[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:25px;width:28px;border-radius:5px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .attachment-wrapper[_ngcontent-%COMP%]   .previews-wrapper[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover ~ .tooltip[_ngcontent-%COMP%]{display:block;position:absolute}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .attachment-wrapper[_ngcontent-%COMP%]   .previews-wrapper[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]{display:none}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .attachment-wrapper[_ngcontent-%COMP%]   .previews-wrapper[_ngcontent-%COMP%]   .plus-count[_ngcontent-%COMP%]{padding:2px 6px;display:flex;align-self:center;font-weight:700;font-size:16px;background:rgb(220,220,220);border-radius:4px;margin-right:3px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:flex;padding:5px}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{display:flex;padding:8px 12px;align-items:center;gap:10px;border-radius:4px;border:1px solid rgba(3,8,2,.1)}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   textarea.invalid[_ngcontent-%COMP%]{box-shadow:0 0 8px #b42727}.excel-mapper[_ngcontent-%COMP%]   .message-creator[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border:2px solid #019F53;outline:3px solid rgba(1,159,83,.2)}.modal-dialog[_ngcontent-%COMP%]{margin-top:300px}.modal-dialog[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%]{margin-top:-25px!important;margin-right:0!important;padding:5px}textarea[_ngcontent-%COMP%]{border:none;outline:none;padding:5px 10px;border-radius:4px;background:transparent}textarea[_ngcontent-%COMP%]:disabled{background-color:transparent}.dropdown-menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid rgba(230,230,230,.6)}.dropdown-menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:5px}.dropdown-menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{background-color:#e6e6e699}.alert[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-radius:6px;font-family:sans-serif;margin-bottom:12px}.alert[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{flex-shrink:0;width:16px;height:16px;margin-right:12px;fill:currentColor}.alert[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{flex:1;font-size:14px;color:#222}.alert[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;gap:8px}.alert[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:6px 12px;font-size:14px;border-radius:4px;cursor:pointer;border:1px solid transparent}.alert[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn.ignore[_ngcontent-%COMP%]{background-color:#fff;color:#222;border-color:#ccc}.alert[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn.fix[_ngcontent-%COMP%]{background-color:#10b981;color:#fff}.alert-LOW[_ngcontent-%COMP%]{background:rgba(0,0,0,.04)}.alert-LOW[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#555}.alert-MEDIUM[_ngcontent-%COMP%]{background:rgba(215,154,0,.08)}.alert-MEDIUM[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#d97706}.alert-HIGH[_ngcontent-%COMP%]{background:rgba(180,39,39,.08)}.alert-HIGH[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#b91c1c}input[_ngcontent-%COMP%]{box-shadow:none!important;outline:none;border:none}#template-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #update-template-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #ccc}",
            ],
          })),
          i
        );
      })();
      function Mn(o, i) {}
      function Cn(o, i) {
        1 & o && e.YNc(0, Mn, 0, 0, "ng-template");
      }
      const bn = function (o) {
        return { errorId: o };
      };
      function vn(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "li")(1, "span", 28),
            e.NdJ("click", function () {
              const a = e.CHM(r).$implicit,
                s = e.oxw();
              return e.KtG(s.selectError(a.id));
            }),
            e.YNc(2, Cn, 1, 0, null, 29),
            e.qZA()());
        }
        if (2 & o) {
          const r = i.$implicit,
            n = e.oxw(),
            t = e.MAs(34);
          (e.ekj(
            "active",
            r.errorProcessState === n.errorProcessState.INPROGRESS,
          )(
            "completed",
            r.errorProcessState === n.errorProcessState.PROCESSED ||
              r.errorProcessState === n.errorProcessState.CANCELLED,
          ),
            e.xp6(2),
            e.Q6J("ngTemplateOutlet", t)(
              "ngTemplateOutletContext",
              e.VKq(6, bn, r.id),
            ));
        }
      }
      function On(o, i) {
        (1 & o &&
          (e.TgZ(0, "span"),
          e._UZ(1, "i", 33),
          e._uU(2),
          e.ALo(3, "jtranslate"),
          e.qZA()),
          2 & o && (e.xp6(2), e.hij(" ", e.lcZ(3, 1, "Fix all"), " ")));
      }
      function Pn(o, i) {
        1 & o && e._UZ(0, "i", 34);
      }
      function Tn(o, i) {
        1 & o && e._UZ(0, "div", 35);
      }
      function En(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "button", 30),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(
                t.isPro
                  ? t.errorStore.fixAll()
                  : t.ui.showProWarning("fix-all"),
              );
            }),
            e.YNc(1, On, 4, 3, "span", 20),
            e.YNc(2, Pn, 1, 0, "i", 31),
            e.YNc(3, Tn, 1, 0, "div", 32),
            e.qZA());
        }
        if (2 & o) {
          const r = e.oxw();
          (e.ekj("disable-btn", !r.isPro),
            e.xp6(1),
            e.Q6J("ngIf", !r.errorStore.fixingAll),
            e.xp6(1),
            e.Q6J("ngIf", !r.isPro),
            e.xp6(1),
            e.Q6J("ngIf", r.errorStore.fixingAll));
        }
      }
      function wn(o, i) {}
      function Zn(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "button", 36),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              return e.KtG(t.send());
            }),
            e._uU(1),
            e.ALo(2, "jtranslate"),
            e.qZA());
        }
        2 & o && (e.xp6(1), e.hij(" ", e.lcZ(2, 1, "Send"), " "));
      }
      function An(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "span"),
            e._uU(1),
            e.ALo(2, "jtranslate"),
            e.ALo(3, "jtranslate"),
            e.qZA()),
          2 & o)
        ) {
          const r = e.oxw(2);
          let n;
          (e.xp6(1),
            e.AsE(
              " ",
              e.lcZ(
                2,
                2,
                null == (n = r.errorStore.inprogressError()) ||
                  null == n.actionBtn
                  ? null
                  : n.actionBtn.label,
              ),
              " ",
              (null == (n = r.errorStore.activeSegmentErrors())
                ? null
                : n.length) ===
                r.errorStore.inprogressErrorIndex() + 1
                ? e.lcZ(3, 4, " & Send")
                : "",
              " ",
            ));
        }
      }
      function Nn(o, i) {
        1 & o && e._UZ(0, "div", 35);
      }
      function Sn(o, i) {
        1 & o && e._UZ(0, "i", 34);
      }
      function kn(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.ynx(0),
            e.TgZ(1, "button", 36),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              let a;
              return e.KtG(
                t.isPro ||
                  (null != (a = t.errorStore.inprogressError()) &&
                    a.isAllowedForFreeUser)
                  ? null == (a = t.errorStore.inprogressError()) ||
                    null == a.actionBtn
                    ? null
                    : a.actionBtn.action()
                  : t.ui.showProWarning(
                      null == (a = t.errorStore.inprogressError())
                        ? null
                        : a.id,
                    ),
              );
            }),
            e.YNc(2, An, 4, 6, "span", 20),
            e.YNc(3, Nn, 1, 0, "div", 32),
            e.YNc(4, Sn, 1, 0, "i", 31),
            e.qZA(),
            e.TgZ(5, "button", 37),
            e.NdJ("click", function () {
              e.CHM(r);
              const t = e.oxw();
              let a;
              return e.KtG(
                null == (a = t.errorStore.inprogressError()) ||
                  null == a.skipBtn
                  ? null
                  : a.skipBtn.action(),
              );
            }),
            e._uU(6),
            e.ALo(7, "jtranslate"),
            e.qZA(),
            e.BQk());
        }
        if (2 & o) {
          const r = e.oxw();
          let n, t, a, s, c, p;
          (e.xp6(1),
            e.ekj(
              "disable-btn",
              !(
                r.isPro ||
                (null != (n = r.errorStore.inprogressError()) &&
                  n.isAllowedForFreeUser)
              ),
            )(
              "pe-none",
              null == (t = r.errorStore.inprogressError()) ||
                null == t.actionBtn
                ? null
                : t.actionBtn.isLoading,
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              !(
                null != (a = r.errorStore.inprogressError()) &&
                null != a.actionBtn &&
                a.actionBtn.isLoading
              ),
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (s = r.errorStore.inprogressError()) ||
                null == s.actionBtn
                ? null
                : s.actionBtn.isLoading,
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              !(
                r.isPro ||
                (null != (c = r.errorStore.inprogressError()) &&
                  c.isAllowedForFreeUser)
              ),
            ),
            e.xp6(2),
            e.hij(
              " ",
              e.lcZ(
                7,
                8,
                null == (p = r.errorStore.inprogressError()) ||
                  null == p.skipBtn
                  ? null
                  : p.skipBtn.label,
              ),
              " ",
            ));
        }
      }
      function yn(o, i) {
        (1 & o &&
          (e.ynx(0),
          e.TgZ(1, "span"),
          e._uU(2),
          e.ALo(3, "jtranslate"),
          e.qZA(),
          e.BQk()),
          2 & o && (e.xp6(2), e.Oqu(e.lcZ(3, 1, "High message count"))));
      }
      function Fn(o, i) {
        (1 & o &&
          (e.ynx(0),
          e.TgZ(1, "span"),
          e._uU(2),
          e.ALo(3, "jtranslate"),
          e.qZA(),
          e.BQk()),
          2 & o && (e.xp6(2), e.Oqu(e.lcZ(3, 1, "New WA number"))));
      }
      function Dn(o, i) {
        (1 & o &&
          (e.ynx(0),
          e.TgZ(1, "span"),
          e._uU(2),
          e.ALo(3, "jtranslate"),
          e.qZA(),
          e.BQk()),
          2 & o && (e.xp6(2), e.Oqu(e.lcZ(3, 1, "High messaging speed"))));
      }
      function In(o, i) {
        (1 & o &&
          (e.ynx(0),
          e.TgZ(1, "span"),
          e._uU(2),
          e.ALo(3, "jtranslate"),
          e.qZA(),
          e.BQk()),
          2 & o && (e.xp6(2), e.Oqu(e.lcZ(3, 1, "Promotional msg content"))));
      }
      function Un(o, i) {
        (1 & o &&
          (e.ynx(0),
          e.TgZ(1, "span"),
          e._uU(2),
          e.ALo(3, "jtranslate"),
          e.qZA(),
          e.BQk()),
          2 & o && (e.xp6(2), e.Oqu(e.lcZ(3, 1, "No unsubscribe"))));
      }
      function Rn(o, i) {
        (1 & o &&
          (e.ynx(0),
          e._UZ(1, "br"),
          e.TgZ(2, "span"),
          e._uU(3),
          e.ALo(4, "jtranslate"),
          e.qZA(),
          e.BQk()),
          2 & o &&
            (e.xp6(3), e.Oqu(e.lcZ(4, 1, "Select an error to proceed"))));
      }
      function Ln(o, i) {
        if (
          (1 & o &&
            (e.ynx(0, 38),
            e.YNc(1, yn, 4, 3, "ng-container", 39),
            e.YNc(2, Fn, 4, 3, "ng-container", 39),
            e.YNc(3, Dn, 4, 3, "ng-container", 39),
            e.YNc(4, In, 4, 3, "ng-container", 39),
            e.YNc(5, Un, 4, 3, "ng-container", 39),
            e.YNc(6, Rn, 5, 3, "ng-container", 40),
            e.BQk()),
          2 & o)
        ) {
          const r = i.errorId,
            n = e.oxw();
          (e.Q6J("ngSwitch", r),
            e.xp6(1),
            e.Q6J("ngSwitchCase", n.messagingErrorIds.HIGH_MESSAGE_COUNT_ERROR),
            e.xp6(1),
            e.Q6J("ngSwitchCase", n.messagingErrorIds.NEW_WA_NUMBER_ERROR),
            e.xp6(1),
            e.Q6J("ngSwitchCase", n.messagingErrorIds.HIGH_MESSAGE_SPEED_ERROR),
            e.xp6(1),
            e.Q6J("ngSwitchCase", n.messagingErrorIds.PROMO_MSGS_ERROR),
            e.xp6(1),
            e.Q6J("ngSwitchCase", n.messagingErrorIds.UNSUBSCRIBE_NOT_ADDED));
        }
      }
      function Jn(o, i) {
        1 & o && e.GkF(0);
      }
      function Gn(o, i) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, Jn, 1, 0, "ng-container", 41), e.BQk()),
          2 & o)
        ) {
          e.oxw(2);
          const r = e.MAs(38);
          (e.xp6(1), e.Q6J("ngTemplateOutlet", r));
        }
      }
      function jn(o, i) {
        1 & o && e.GkF(0);
      }
      function qn(o, i) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, jn, 1, 0, "ng-container", 41), e.BQk()),
          2 & o)
        ) {
          e.oxw(2);
          const r = e.MAs(40);
          (e.xp6(1), e.Q6J("ngTemplateOutlet", r));
        }
      }
      function Qn(o, i) {
        1 & o && e.GkF(0);
      }
      function Bn(o, i) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, Qn, 1, 0, "ng-container", 41), e.BQk()),
          2 & o)
        ) {
          e.oxw(2);
          const r = e.MAs(42);
          (e.xp6(1), e.Q6J("ngTemplateOutlet", r));
        }
      }
      function Yn(o, i) {
        1 & o && e.GkF(0);
      }
      function Hn(o, i) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, Yn, 1, 0, "ng-container", 41), e.BQk()),
          2 & o)
        ) {
          e.oxw(2);
          const r = e.MAs(44);
          (e.xp6(1), e.Q6J("ngTemplateOutlet", r));
        }
      }
      function zn(o, i) {
        1 & o && e.GkF(0);
      }
      function Wn(o, i) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, zn, 1, 0, "ng-container", 41), e.BQk()),
          2 & o)
        ) {
          e.oxw(2);
          const r = e.MAs(46);
          (e.xp6(1), e.Q6J("ngTemplateOutlet", r));
        }
      }
      function Kn(o, i) {
        if (
          (1 & o &&
            (e.ynx(0, 38),
            e.YNc(1, Gn, 2, 1, "ng-container", 39),
            e.YNc(2, qn, 2, 1, "ng-container", 39),
            e.YNc(3, Bn, 2, 1, "ng-container", 39),
            e.YNc(4, Hn, 2, 1, "ng-container", 39),
            e.YNc(5, Wn, 2, 1, "ng-container", 39),
            e.BQk()),
          2 & o)
        ) {
          const r = e.oxw();
          let n;
          (e.Q6J(
            "ngSwitch",
            null == (n = r.errorStore.inprogressError()) ? null : n.id,
          ),
            e.xp6(1),
            e.Q6J("ngSwitchCase", r.messagingErrorIds.HIGH_MESSAGE_COUNT_ERROR),
            e.xp6(1),
            e.Q6J("ngSwitchCase", r.messagingErrorIds.NEW_WA_NUMBER_ERROR),
            e.xp6(1),
            e.Q6J("ngSwitchCase", r.messagingErrorIds.HIGH_MESSAGE_SPEED_ERROR),
            e.xp6(1),
            e.Q6J("ngSwitchCase", r.messagingErrorIds.PROMO_MSGS_ERROR),
            e.xp6(1),
            e.Q6J("ngSwitchCase", r.messagingErrorIds.UNSUBSCRIBE_NOT_ADDED));
        }
      }
      function $n(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "h2"),
            e._uU(1, "You have selected "),
            e.TgZ(2, "strong"),
            e._uU(3),
            e.qZA(),
            e._uU(4, " contacts which too high to broadcast."),
            e.qZA(),
            e.TgZ(5, "p", 42),
            e._uU(
              6,
              " Sending messages to too many people at once may get your number banned. ",
            ),
            e.qZA(),
            e.TgZ(7, "p", 43)(8, "i")(9, "strong"),
            e._uU(10, "Hint:"),
            e.qZA()(),
            e._uU(
              11,
              " Start by messaging a few contacts, then gradually increase over time. ",
            ),
            e.qZA(),
            e.TgZ(12, "ul", 44)(13, "li"),
            e._uU(14, "Reduce message volume to 500"),
            e.qZA(),
            e.TgZ(15, "li"),
            e._uU(16, "or "),
            e.TgZ(17, "a", 45),
            e._uU(18, "switch to official API"),
            e.qZA()()()),
          2 & o)
        ) {
          const r = e.oxw();
          (e.xp6(3),
            e.Oqu(
              null == r.store.proceesablePhoneData ||
                null == r.store.proceesablePhoneData.phoneData
                ? null
                : r.store.proceesablePhoneData.phoneData.length,
            ));
        }
      }
      function Vn(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "h2"),
            e._uU(1),
            e.qZA(),
            e.TgZ(2, "p", 42),
            e._uU(3, " New numbers get banned really fast on WhatsApp "),
            e.qZA(),
            e.TgZ(4, "p", 43)(5, "i")(6, "strong"),
            e._uU(7, "Hint:"),
            e.qZA()(),
            e._uU(8, " Use an old & active WhatsApp number "),
            e.qZA()),
          2 & o)
        ) {
          const r = e.oxw();
          (e.xp6(1),
            e.hij(
              "You're now using a new WhatsApp number: ",
              r.extAuth.currentUser.phoneNumber,
              ".",
            ));
        }
      }
      function Xn(o, i) {
        if ((1 & o && (e.ynx(0), e._uU(1), e.BQk()), 2 & o)) {
          const r = e.oxw(2);
          (e.xp6(1), e.hij("added ", r.store.waitForMin(), " sec time gap"));
        }
      }
      function eo(o, i) {
        1 & o && (e.ynx(0), e._uU(1, " in "), e.BQk());
      }
      function to(o, i) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.YNc(1, eo, 2, 0, "ng-container", 20),
            e._uU(2),
            e.BQk()),
          2 & o)
        ) {
          const r = e.oxw(2);
          (e.xp6(1),
            e.Q6J("ngIf", r.store.waitForMin()),
            e.xp6(1),
            e.hij(" batch of ", r.store.waitAfterpeople(), " "));
        }
      }
      function no(o, i) {
        1 & o && (e.ynx(0), e._uU(1, ", "), e.BQk());
      }
      function oo(o, i) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.YNc(1, no, 2, 0, "ng-container", 20),
            e._uU(2),
            e.BQk()),
          2 & o)
        ) {
          const r = e.oxw(2);
          (e.xp6(1),
            e.Q6J("ngIf", r.store.waitForMin() || r.store.waitAfterpeople()),
            e.xp6(1),
            e.hij(
              " ",
              r.store.randomDelay(),
              " random delay between messages ",
            ));
        }
      }
      function ro(o, i) {
        1 & o && (e.ynx(0), e._uU(1, " no timegap settings "), e.BQk());
      }
      function ao(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "h2"),
            e._uU(1, " You have "),
            e.YNc(2, Xn, 2, 1, "ng-container", 20),
            e.YNc(3, to, 3, 2, "ng-container", 20),
            e.YNc(4, oo, 3, 2, "ng-container", 20),
            e.YNc(5, ro, 2, 0, "ng-container", 20),
            e._uU(6, ". "),
            e.qZA(),
            e.TgZ(7, "p", 42),
            e._uU(8, " WhatsApp algorithm checks for fast automated messages "),
            e.qZA(),
            e.TgZ(9, "p", 43)(10, "i")(11, "strong"),
            e._uU(12, "Hint:"),
            e.qZA()(),
            e._uU(13, " Slow down messaging to mimic human sending "),
            e.qZA(),
            e.TgZ(14, "ul", 44)(15, "li"),
            e._uU(16, "Add a 0-10 sec random time gap between messages"),
            e.qZA(),
            e.TgZ(17, "li"),
            e._uU(18, "Send in batches of 50 messages"),
            e.qZA(),
            e.TgZ(19, "li"),
            e._uU(20, "Keep a 10 min gap between batches"),
            e.qZA()()),
          2 & o)
        ) {
          const r = e.oxw();
          (e.xp6(2),
            e.Q6J("ngIf", r.store.waitForMin()),
            e.xp6(1),
            e.Q6J("ngIf", r.store.waitAfterpeople()),
            e.xp6(1),
            e.Q6J("ngIf", r.store.randomDelay()),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              !r.store.waitForMin() &&
                !r.store.waitAfterpeople() &&
                !r.store.randomDelay(),
            ));
        }
      }
      function io(o, i) {
        1 & o &&
          (e.TgZ(0, "h2"),
          e._uU(1, "Redraft message & make it less promotional"),
          e.qZA(),
          e.TgZ(2, "p", 42),
          e._uU(3, " WhatsApp algorithm checks for fast automated messages "),
          e.qZA(),
          e.TgZ(4, "p", 43)(5, "i")(6, "strong"),
          e._uU(7, "Hint:"),
          e.qZA()()(),
          e.TgZ(8, "ul", 44)(9, "li"),
          e._uU(10, "Give a context as to how you found their number"),
          e.qZA(),
          e.TgZ(11, "li"),
          e._uU(12, "Shorten the offer of the message"),
          e.qZA(),
          e.TgZ(13, "li"),
          e._uU(14, "Reframe it like a yes or no question"),
          e.qZA()());
      }
      function so(o, i) {
        1 & o &&
          (e.TgZ(0, "h2"),
          e._uU(
            1,
            "The message you have drafted right now doesn't have a unsubscription option.",
          ),
          e.qZA(),
          e.TgZ(2, "p", 42),
          e._uU(3, " WhatsApp algorithm may ban without this "),
          e.qZA(),
          e.TgZ(4, "p", 43)(5, "i")(6, "strong"),
          e._uU(7, "Hint:"),
          e.qZA()()(),
          e.TgZ(8, "ul", 44)(9, "li"),
          e._uU(10, "Add a short unsubscription line at the end of message"),
          e.qZA()());
      }
      let lo = (() => {
        var o;
        class i {
          constructor(n, t, a, s, c) {
            ((this.errorStore = n),
              (this.store = t),
              (this.extAuth = a),
              (this.ui = s),
              (this.log = c),
              (this.errorSegements = J),
              (this.messagingErrorIds = H),
              (this.errorProcessState = O));
          }
          get isPro() {
            return this.extAuth.isPro();
          }
          onSegmentChange(n) {
            (this.errorStore.activeErrorSegment.set(n),
              this.errorStore.recalculateErrors());
          }
          selectError(n) {
            const t = this.errorStore.activeSegmentErrors(),
              a = t.findIndex((s) => s.id === n);
            -1 !== a &&
              (t.forEach((s, c) => {
                s.errorProcessState === this.errorProcessState.INPROGRESS &&
                  (s.errorProcessState = this.errorProcessState.PENDING);
              }),
              (t[a].errorProcessState = this.errorProcessState.INPROGRESS),
              this.errorStore.activeSegmentErrors.set(t));
          }
          closeLog() {
            this.log.log("close_anti_ban_modal");
          }
          send() {
            this.errorStore.nextStep(O.CANCELLED);
          }
        }
        return (
          ((o = i).ɵfac = function (n) {
            return new (n || o)(
              e.Y36(W),
              e.Y36(L),
              e.Y36(q.a),
              e.Y36(de.F),
              e.Y36(Y.m),
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["app-error-resolver"]],
            decls: 47,
            vars: 20,
            consts: [
              [1, "errors"],
              [1, "modal-header"],
              [1, "flex", "a-flex-center"],
              [1, "modal-title"],
              [1, "radio-group"],
              [3, "click"],
              [
                "type",
                "radio",
                "name",
                "msg-type",
                "checked",
                "",
                3,
                "checked",
              ],
              [1, "custom-radio"],
              ["type", "radio", "name", "msg-type", 3, "checked"],
              [
                "data-dismiss",
                "modal",
                "aria-label",
                "Close",
                "aria-label",
                "Close",
                1,
                "close-btn",
                3,
                "click",
              ],
              [1, "modal-body"],
              [1, "sidebar"],
              [1, "errors-found"],
              [1, "error-list"],
              [3, "active", "completed", 4, "ngFor", "ngForOf"],
              ["class", "fix-all", 3, "disable-btn", "click", 4, "ngIf"],
              [1, "main-content"],
              [3, "ngTemplateOutlet"],
              [1, "modal-footer"],
              ["class", "btn primary", 3, "click", 4, "ngIf"],
              [4, "ngIf"],
              ["errorTitle", ""],
              ["errorContent", ""],
              ["highMessageCountError", ""],
              ["newWANumberError", ""],
              ["highMessageSpeedError", ""],
              ["promoMsgsError", ""],
              ["unsubscribeNotAddedError", ""],
              [1, "cp", 3, "click"],
              [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
              [1, "fix-all", 3, "click"],
              ["class", "fa-kit fa-lock ml5 d-flex", 4, "ngIf"],
              ["class", "loader theme", 4, "ngIf"],
              [1, "fa-kit", "fa-ai"],
              [1, "fa-kit", "fa-lock", "ml5", "d-flex"],
              [1, "loader", "theme"],
              [1, "btn", "primary", 3, "click"],
              [1, "btn", "secondary", "ml15", 3, "click"],
              [3, "ngSwitch"],
              [4, "ngSwitchCase"],
              [4, "ngSwitchDefault"],
              [4, "ngTemplateOutlet"],
              [1, "warning"],
              [1, "hint"],
              [1, "recommendations"],
              ["href", "#"],
            ],
            template: function (n, t) {
              if (
                (1 & n &&
                  (e.TgZ(0, "div", 0)(1, "header", 1)(2, "div", 2)(
                    3,
                    "span",
                    3,
                  ),
                  e._uU(4),
                  e.ALo(5, "jtranslate"),
                  e.qZA(),
                  e.TgZ(6, "div", 4)(7, "label", 5),
                  e.NdJ("click", function () {
                    return t.onSegmentChange(
                      t.errorSegements.PROMOTIONAL_MESSAGE_ERROR,
                    );
                  }),
                  e._UZ(8, "input", 6)(9, "span", 7),
                  e._uU(10),
                  e.ALo(11, "jtranslate"),
                  e.qZA(),
                  e.TgZ(12, "label", 5),
                  e.NdJ("click", function () {
                    return t.onSegmentChange(
                      t.errorSegements.UPDATE_MESSAGE_ERROR,
                    );
                  }),
                  e._UZ(13, "input", 8)(14, "span", 7),
                  e._uU(15),
                  e.ALo(16, "jtranslate"),
                  e.qZA()()(),
                  e.TgZ(17, "button", 9),
                  e.NdJ("click", function () {
                    return t.closeLog();
                  }),
                  e._uU(18, "\xd7"),
                  e.qZA()(),
                  e.TgZ(19, "div", 10)(20, "aside", 11)(21, "div", 12),
                  e._uU(22),
                  e.ALo(23, "jtranslate"),
                  e.qZA(),
                  e.TgZ(24, "ol", 13),
                  e.YNc(25, vn, 3, 8, "li", 14),
                  e.qZA(),
                  e.YNc(26, En, 4, 5, "button", 15),
                  e.qZA(),
                  e.TgZ(27, "section", 16)(28, "div"),
                  e.YNc(29, wn, 0, 0, "ng-template", 17),
                  e.qZA(),
                  e.TgZ(30, "footer", 18),
                  e.YNc(31, Zn, 3, 3, "button", 19),
                  e.YNc(32, kn, 8, 10, "ng-container", 20),
                  e.qZA()()()(),
                  e.YNc(33, Ln, 7, 6, "ng-template", null, 21, e.W1O),
                  e.YNc(35, Kn, 6, 6, "ng-template", null, 22, e.W1O),
                  e.YNc(37, $n, 19, 1, "ng-template", null, 23, e.W1O),
                  e.YNc(39, Vn, 9, 1, "ng-template", null, 24, e.W1O),
                  e.YNc(41, ao, 21, 4, "ng-template", null, 25, e.W1O),
                  e.YNc(43, io, 15, 0, "ng-template", null, 26, e.W1O),
                  e.YNc(45, so, 11, 0, "ng-template", null, 27, e.W1O)),
                2 & n)
              ) {
                const a = e.MAs(36);
                let s, c;
                (e.xp6(4),
                  e.Oqu(e.lcZ(5, 12, "This message is")),
                  e.xp6(4),
                  e.Q6J(
                    "checked",
                    t.errorStore.activeErrorSegment() ===
                      t.errorSegements.PROMOTIONAL_MESSAGE_ERROR,
                  ),
                  e.xp6(2),
                  e.hij(" ", e.lcZ(11, 14, "Promotional/Marketing"), " "),
                  e.xp6(3),
                  e.Q6J(
                    "checked",
                    t.errorStore.activeErrorSegment() ===
                      t.errorSegements.UPDATE_MESSAGE_ERROR,
                  ),
                  e.xp6(2),
                  e.hij(" ", e.lcZ(16, 16, "Update/Greeting"), " "),
                  e.xp6(7),
                  e.AsE(
                    "",
                    null == (s = t.errorStore.activeSegmentErrors())
                      ? null
                      : s.length,
                    " ",
                    e.lcZ(23, 18, "Errors found"),
                    " ",
                  ),
                  e.xp6(3),
                  e.Q6J("ngForOf", t.errorStore.activeSegmentErrors()),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    t.errorStore.activeSegmentErrors() &&
                      (null == (c = t.errorStore.activeSegmentErrors())
                        ? null
                        : c.length),
                  ),
                  e.xp6(3),
                  e.Q6J("ngTemplateOutlet", a),
                  e.xp6(2),
                  e.Q6J("ngIf", !t.errorStore.inprogressError()),
                  e.xp6(1),
                  e.Q6J("ngIf", t.errorStore.inprogressError()));
              }
            },
            dependencies: [l.sg, l.O5, l.tP, l.RF, l.n9, l.ED, ae.Q],
            styles: [
              '.errors[_ngcontent-%COMP%]{--bg: #fff;--fg: #222;--muted: rgba(0, 0, 0, .4);--border: #ddd;--green: #019F53;--green-light: #ebf6f0;--red: #d93025;--radius: 12px}.errors[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{padding:16px 10px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;position:relative}.errors[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:var(--fg);font-size:14px;margin-right:16px}.errors[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]{display:flex;gap:16px}.errors[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative;padding-left:28px;font-size:14px;color:var(--fg);cursor:pointer;-webkit-user-select:none;user-select:none;font-weight:400;margin:0}.errors[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;opacity:0;cursor:pointer}.errors[_ngcontent-%COMP%]   .custom-radio[_ngcontent-%COMP%]{position:absolute;top:1px;left:0;height:18px;width:18px;border:1px solid var(--border);border-radius:50%}.errors[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .custom-radio[_ngcontent-%COMP%]{border-color:var(--green);background:white}.errors[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .custom-radio[_ngcontent-%COMP%]:after{content:"";position:absolute;width:10px;height:10px;background:var(--green);border-radius:50%;top:3px;left:3px}.errors[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{border:none;background:none;font-size:20px;color:var(--muted);cursor:pointer}.errors[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{display:flex;padding:0;gap:24px}.errors[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{width:200px;border-right:1px solid var(--border);display:flex;flex-direction:column;background:#FAFAFA;padding:12px}.errors[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .fix-all[_ngcontent-%COMP%]{margin-top:auto;font-size:14px;color:var(--green);background:none;border:none;cursor:pointer;align-items:center;gap:4px;background:white;display:inline-flex;width:max-content;padding:10px;border-radius:4px;border:1px solid rgba(0,0,0,.05);margin-bottom:10px}.errors[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .fix-all.disable-btn[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.05);color:#0000004d}.errors[_ngcontent-%COMP%]   .errors-found[_ngcontent-%COMP%]{font-size:14px;font-weight:400;color:var(--fg);margin-bottom:16px}.errors[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]{list-style:none;counter-reset:item;padding:0}.errors[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{counter-increment:item;position:relative;padding-left:32px;margin-bottom:16px;font-size:14px;color:var(--muted)}.errors[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:counter(item);position:absolute;left:0;top:0;width:24px;height:24px;line-height:24px;text-align:center;border:1px solid var(--border);border-radius:50%;color:var(--muted);display:flex;align-items:center;justify-content:center;font-size:12px}.errors[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:var(--fg);font-weight:500}.errors[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:before{border-color:var(--muted);color:var(--fg)}.errors[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%]{color:var(--muted)}.errors[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%]:before{border-color:var(--green);color:#fff;background:var(--green)}.errors[_ngcontent-%COMP%]   .fix-all[_ngcontent-%COMP%]{margin-top:auto;font-size:14px;color:var(--green);background:none;border:none;cursor:pointer;padding:8px 0;display:flex;align-items:center;gap:4px}.errors[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;justify-content:space-between;padding-bottom:10px;padding-right:10px}.errors[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;color:var(--fg);margin-bottom:12px;font-weight:300;line-height:1.2}.errors[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%], .errors[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]{font-size:14px;color:var(--muted);margin-bottom:16px}.errors[_ngcontent-%COMP%]   .recommendations[_ngcontent-%COMP%]{list-style:disc;margin-left:16px;font-size:14px}.errors[_ngcontent-%COMP%]   .recommendations[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:8px}.errors[_ngcontent-%COMP%]   .recommendations[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--green);text-decoration:none}.errors[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]{padding:0;border-top:none;display:flex;justify-content:flex-start;margin-top:25px;margin-bottom:10px}.errors[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:14px;padding:10px 20px;border-radius:6px;cursor:pointer;border:1px solid transparent}.errors[_ngcontent-%COMP%]   .btn.primary[_ngcontent-%COMP%]{background:var(--green);color:#fff}.errors[_ngcontent-%COMP%]   .btn.primary.disable-btn[_ngcontent-%COMP%]{background:rgba(0,0,0,.2)!important;box-shadow:0 0 5px #93939340;border-radius:4px;color:#fff!important}.errors[_ngcontent-%COMP%]   .btn.secondary[_ngcontent-%COMP%]{background:#fff;color:var(--fg);border-color:var(--border)}',
            ],
          })),
          i
        );
      })();
      const co = ["fileInput"],
        po = ["openErrorModalBtn"],
        go = ["adFrame"];
      function _o(o, i) {
        if (1 & o) {
          const r = e.EpF();
          (e.TgZ(0, "div", 15)(1, "ngx-file-drop", 16),
            e.NdJ("onFileDrop", function (t) {
              e.CHM(r);
              const a = e.oxw();
              return e.KtG(a.dropped(t));
            })("onFileOver", function (t) {
              e.CHM(r);
              const a = e.oxw();
              return e.KtG(a.fileOver(t));
            })("onFileLeave", function (t) {
              e.CHM(r);
              const a = e.oxw();
              return e.KtG(a.fileLeave(t));
            }),
            e.qZA()());
        }
        2 & o && (e.xp6(1), e.Q6J("multiple", !0));
      }
      function mo(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "app-alert", 17)(1, "div", 18),
            e._uU(2),
            e.ALo(3, "jtranslate"),
            e.TgZ(4, "a", 19),
            e._uU(5, " Check campaign "),
            e.qZA()()()),
          2 & o)
        ) {
          const r = e.oxw();
          (e.Q6J("alignment", r.left)("canClose", !1),
            e.xp6(2),
            e.hij(
              " ",
              e.lcZ(
                3,
                4,
                "Can't edit this as a campaign is currently in progress",
              ),
              " ",
            ),
            e.xp6(2),
            e.Q6J("routerLink", r.reportLink));
        }
      }
      function uo(o, i) {
        1 & o && e._UZ(0, "div", 20);
      }
      function ho(o, i) {
        if ((1 & o && e._UZ(0, "iframe", 21, 22), 2 & o)) {
          const r = e.oxw();
          e.Q6J("src", r.iframeAdLink, e.uOi);
        }
      }
      const fo = [
        {
          path: "",
          component: (() => {
            var o;
            class i {
              onDragOver(n) {
                (n.preventDefault(),
                  (this.showPlaceholder = !0),
                  clearTimeout(this.closeTimeout),
                  (this.closeTimeout = setTimeout(() => {
                    this.showPlaceholder = !1;
                  }, 2e3)));
              }
              constructor(n, t, a, s, c, p, g, u, M) {
                ((this.excelService = n),
                  (this.uiService = t),
                  (this.wabgService = a),
                  (this.cd = s),
                  (this.extDataService = c),
                  (this.store = p),
                  (this.errorStore = g),
                  (this.logger = u),
                  (this.sanitizer = M),
                  (this.operations = x.Operation),
                  (this.files = []),
                  (this.showPlaceholder = !1),
                  this.errorStore.showErrorModal$.subscribe((N) => {
                    this.openErrorModalBtn?.nativeElement?.click();
                  }),
                  window.addEventListener("message", (N) => {
                    (console.log("event", N),
                      this.adFrame?.nativeElement &&
                        "setAdvertHeight" === N.data.type &&
                        (this.adFrame.nativeElement.style.height =
                          N.data.height + "px"));
                  }));
                const b = new URL(
                    this.extDataService?.appConfig?.bannerIframeLink || "",
                  ),
                  P = b.searchParams,
                  Z = this.extDataService?.currentUser;
                (P.set("name", `${Z?.name ?? ""}`),
                  P.set("nocache", "1"),
                  P.set("phonenumber", `${Z?.phoneNumber ?? ""}`),
                  P.set(
                    "appversion",
                    `${S.nB.getManifestData()?.version ?? ""}`,
                  ),
                  (this.iframeAdLink = b.toString()),
                  (this.iframeAdLink =
                    this.extDataService.appConfig?.bannerEnabled(
                      this.extDataService?.currentUser?.phoneNumber,
                    )
                      ? this.sanitizer.bypassSecurityTrustResourceUrl(
                          this.iframeAdLink,
                        )
                      : ""));
              }
              get reportLink() {
                return `/${A.ME.broadcastReport("")}`;
              }
              ngOnInit() {
                var n = this;
                return (0, m.Z)(function* () {
                  n.liveReport = !(yield n.uiService.getBulkMessageReport())
                    ?.isFinished;
                  const a = yield n.wabgService.getFile();
                  ((n.file = yield n.stringToFile(a)), yield n.handleNewFile());
                })();
              }
              stringToFile(n) {
                return new Promise((t, a) => {
                  try {
                    const s = n;
                    if (s) {
                      const { name: c, type: p, data: u } = s;
                      if (u) {
                        const M = atob(u),
                          C = [];
                        for (let Z = 0; Z < M.length; Z += 1024) {
                          const N = M.slice(Z, Z + 1024),
                            w = new Array(N.length);
                          for (let F = 0; F < N.length; F++)
                            w[F] = N.charCodeAt(F);
                          C.push(new Uint8Array(w));
                        }
                        const b = new Blob(C, { type: p });
                        t(
                          new File([b], c, {
                            type: p,
                            lastModified: Date.now(),
                          }),
                        );
                      } else t(null);
                    } else t(null);
                  } catch (s) {
                    (console.log("error", s), t(null));
                  }
                });
              }
              onFileChange(n) {
                var t = this;
                return (0, m.Z)(function* () {
                  ((t.file = n.target.files[0]),
                    yield t.handleNewFile(),
                    yield t.saveInCache(),
                    (n.target.value = ""),
                    t.cd.detectChanges());
                })();
              }
              saveInCache() {
                var n = this;
                return (0, m.Z)(function* () {
                  const t = new FileReader();
                  ((t.onload = (function () {
                    var a = (0, m.Z)(function* (s) {
                      const c = t.result?.split(",")[1],
                        p = {
                          name: n.file.name,
                          type: n.file.type,
                          size: n.file.size,
                          data: c,
                        };
                      yield n.wabgService.sendFile(p);
                    });
                    return function (s) {
                      return a.apply(this, arguments);
                    };
                  })()),
                    t.readAsDataURL(n.file),
                    (t.onerror = function (a) {
                      console.error("Error reading file:", a);
                    }));
                })();
              }
              clearFile() {
                var n = this;
                return (0, m.Z)(function* () {
                  yield n.wabgService.sendFile({});
                })();
              }
              handleNewFile() {
                var n = this;
                return (0, m.Z)(function* () {
                  if (n.file) {
                    const t = yield n.excelService.readExcel(n.file);
                    t.sheetNames.length
                      ? (n.excelDetails = t)
                      : n.uiService.showActionFeedback(
                          R.s.failureAction(
                            "No sheet found",
                            `There is no sheet in file ${n.file.name}`,
                          ),
                        );
                  }
                })();
              }
              closeWindow() {
                window.close();
              }
              chooseFile() {
                this.fileInput?.nativeElement?.click();
              }
              dropped(n) {
                var t = this;
                return (0, m.Z)(function* () {
                  t.showPlaceholder = !1;
                  const a = [];
                  for (const s of n)
                    if (s.fileEntry.isFile) {
                      const c = s.fileEntry;
                      yield new Promise((p, g) => {
                        c.file(
                          (u) => {
                            (a.push(u), p());
                          },
                          (u) => {
                            (console.error("Error reading file:", u), g(u));
                          },
                        );
                      });
                    }
                  if (
                    1 === a.length &&
                    [
                      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                      "application/vnd.ms-excel",
                      "application/vnd.ms-excel.sheet.macroEnabled.12",
                      "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
                      "application/vnd.ms-excel.template.macroEnabled.12",
                      "application/vnd.ms-excel.addin.macroEnabled.12",
                      "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
                    ].includes(a[0].type)
                  )
                    ((t.file = a[0]),
                      yield t.handleNewFile(),
                      yield t.saveInCache());
                  else {
                    for (let s of a) {
                      const c = yield k.M.toBase64(s);
                      t.store.attachments.push(
                        new k.M(s.name, s.size, s.type, c),
                      );
                    }
                    (t.cd.detectChanges(),
                      a.length > 0 &&
                        (yield t.store.updateAttachmentsOverall(!0)));
                  }
                })();
              }
              fileOver(n) {}
              fileLeave(n) {}
            }
            return (
              ((o = i).ɵfac = function (n) {
                return new (n || o)(
                  e.Y36(v.xB),
                  e.Y36(v.Fz),
                  e.Y36(v.jI),
                  e.Y36(e.sBO),
                  e.Y36(v.aF),
                  e.Y36(L),
                  e.Y36(W),
                  e.Y36(v.mQ),
                  e.Y36(xe.H7),
                );
              }),
              (o.ɵcmp = e.Xpm({
                type: o,
                selectors: [["app-bulk-message"]],
                viewQuery: function (n, t) {
                  if (
                    (1 & n && (e.Gf(co, 5), e.Gf(po, 5), e.Gf(go, 5)), 2 & n)
                  ) {
                    let a;
                    (e.iGM((a = e.CRH())) && (t.fileInput = a.first),
                      e.iGM((a = e.CRH())) && (t.openErrorModalBtn = a.first),
                      e.iGM((a = e.CRH())) && (t.adFrame = a.first));
                  }
                },
                hostBindings: function (n, t) {
                  1 & n &&
                    e.NdJ(
                      "dragover",
                      function (s) {
                        return t.onDragOver(s);
                      },
                      !1,
                      e.evT,
                    );
                },
                decls: 24,
                vars: 9,
                consts: [
                  [1, "p20"],
                  ["class", "drag-placeholder", 4, "ngIf"],
                  [1, "home"],
                  [
                    "class",
                    "mb10 d-block",
                    "tone",
                    "warning",
                    3,
                    "alignment",
                    "canClose",
                    4,
                    "ngIf",
                  ],
                  ["class", "scrim", 4, "ngIf"],
                  [
                    "accept",
                    ".xls, .xlsx, .csv, .xlsm, .xlsb, .ods",
                    "type",
                    "file",
                    1,
                    "d-none",
                    3,
                    "change",
                  ],
                  ["fileInput", ""],
                  [
                    "tabindex",
                    "1",
                    3,
                    "excelDetails",
                    "file",
                    "chooseFile",
                    "clearFile",
                  ],
                  [
                    "data-toggle",
                    "modal",
                    "data-target",
                    "#errors-modal",
                    2,
                    "display",
                    "none",
                  ],
                  ["openErrorModalBtn", ""],
                  [
                    "id",
                    "errors-modal",
                    "tabindex",
                    "-1",
                    "role",
                    "dialog",
                    "aria-labelledby",
                    "modalLabel",
                    "aria-hidden",
                    "true",
                    1,
                    "modal",
                  ],
                  ["role", "document", 1, "modal-dialog", "m0"],
                  [1, "modal-content", "p0", "m-auto", "modal-content", "p0"],
                  [1, "modal-body", "p0"],
                  [
                    "credentialless",
                    "",
                    "style",
                    "border: none; width: 100%;",
                    3,
                    "src",
                    4,
                    "ngIf",
                  ],
                  [1, "drag-placeholder"],
                  [
                    "dropZoneLabel",
                    "Drag and drop files here",
                    1,
                    "fs17",
                    "h100p",
                    "m-auto",
                    "w100p",
                    3,
                    "multiple",
                    "onFileDrop",
                    "onFileOver",
                    "onFileLeave",
                  ],
                  [
                    "tone",
                    "warning",
                    1,
                    "mb10",
                    "d-block",
                    3,
                    "alignment",
                    "canClose",
                  ],
                  ["head", ""],
                  [1, "text-crm", "tul", 3, "routerLink"],
                  [1, "scrim"],
                  [
                    "credentialless",
                    "",
                    2,
                    "border",
                    "none",
                    "width",
                    "100%",
                    3,
                    "src",
                  ],
                  ["adFrame", ""],
                ],
                template: function (n, t) {
                  (1 & n &&
                    (e._UZ(0, "app-header"),
                    e.TgZ(1, "div", 0),
                    e.YNc(2, _o, 2, 1, "div", 1),
                    e.TgZ(3, "div", 2),
                    e.YNc(4, mo, 6, 6, "app-alert", 3),
                    e.YNc(5, uo, 1, 0, "div", 4),
                    e.TgZ(6, "input", 5, 6),
                    e.NdJ("change", function (s) {
                      return t.onFileChange(s);
                    }),
                    e.qZA(),
                    e.TgZ(8, "app-excel-mapping-for-messaging", 7),
                    e.NdJ("chooseFile", function () {
                      return t.chooseFile();
                    })("clearFile", function () {
                      return t.clearFile();
                    }),
                    e.qZA(),
                    e.TgZ(9, "div", 8, 9),
                    e._uU(11),
                    e.ALo(12, "jtranslate"),
                    e.qZA(),
                    e.TgZ(13, "div", 10)(14, "div", 11)(15, "div", 12)(
                      16,
                      "div",
                      13,
                    ),
                    e._UZ(17, "app-error-resolver"),
                    e.qZA(),
                    e.GkF(18),
                    e.qZA()()(),
                    e._UZ(19, "br"),
                    e.YNc(20, ho, 2, 1, "iframe", 14),
                    e._UZ(21, "br")(22, "br")(23, "br"),
                    e.qZA()()),
                    2 & n &&
                      (e.xp6(2),
                      e.Q6J("ngIf", t.showPlaceholder),
                      e.xp6(2),
                      e.Q6J("ngIf", t.liveReport),
                      e.xp6(1),
                      e.Q6J("ngIf", t.liveReport),
                      e.xp6(3),
                      e.Q6J("excelDetails", t.excelDetails)("file", t.file),
                      e.xp6(3),
                      e.hij(" ", e.lcZ(12, 7, "Update"), " "),
                      e.xp6(9),
                      e.Q6J("ngIf", t.iframeAdLink)));
                },
                dependencies: [l.O5, y.rH, pe.w, Me.G, ge, xn, lo, ae.Q],
                styles: [
                  ".home[_ngcontent-%COMP%]{position:relative}.home[_ngcontent-%COMP%]   .scrim[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;background:rgba(0,0,0,.0509803922);width:100%;z-index:11}.home[_ngcontent-%COMP%]   app-alert[_ngcontent-%COMP%]{z-index:12;display:block!important;position:relative;background:lightgoldenrodyellow;border-radius:8px}.home[_ngcontent-%COMP%]   .icon-plus[_ngcontent-%COMP%]{background-color:#7e869e29;border-radius:25px;display:inline-flex;transform:rotate(45deg);padding:4px;position:absolute;right:12px;top:13px;z-index:1}.home[_ngcontent-%COMP%]   .upload-file[_ngcontent-%COMP%]{height:400px;border:1px dashed #7C65F1;border-radius:12px;position:relative}.home[_ngcontent-%COMP%]   .upload-file[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]{display:flex;width:75px;height:75px;padding:10px;flex-direction:column;justify-content:center;align-items:center;gap:10px;background:#c6bdfe;border-radius:51px;margin-bottom:17px}.home[_ngcontent-%COMP%]   .upload-file[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:100%;width:100%;position:absolute;top:0;left:0;opacity:0;cursor:pointer}.home[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:626px;margin:-10px auto 3px;display:block;border:1px solid #eee;border-radius:4px;box-shadow:0 1px 1px #0000000f,1px 4px 8px #00000014}.home[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:0}[_nghost-%COMP%]     #errors-modal .modal-backdrop, #ai-redrafter-modal[_ngcontent-%COMP%]   .modal-backdrop[_ngcontent-%COMP%]{pointer-events:none}",
                ],
              })),
              i
            );
          })(),
        },
      ];
      let xo = (() => {
        var o;
        class i {}
        return (
          ((o = i).ɵfac = function (n) {
            return new (n || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [y.Bz.forChild(fo), y.Bz] })),
          i
        );
      })();
      var Mo = d(7677),
        Co = d(6707),
        bo = d(9862);
      const Po = new e.OlP("ngx-skeleton-loader.config");
      let To = (() => {
          var o;
          class i {
            static forRoot(n) {
              return { ngModule: i, providers: [{ provide: Po, useValue: n }] };
            }
          }
          return (
            ((o = i).ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵmod = e.oAB({ type: o })),
            (o.ɵinj = e.cJS({ imports: [l.ez] })),
            i
          );
        })(),
        Eo = (() => {
          var o;
          class i {}
          return (
            ((o = i).ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵmod = e.oAB({ type: o })),
            (o.ɵinj = e.cJS({
              providers: [l.uU, L, _e, W],
              imports: [l.ez, T.u5, xo, Mo.e, bo.JF, Co.Fx, To, Ze],
            })),
            i
          );
        })();
    },
    7825: (X, I, d) => {
      d.d(I, { G: () => k });
      var l = d(9291),
        T = d(7228),
        y = d(9955),
        m = d(2572),
        R = d(8043),
        x = d(3427),
        A = d(858);
      let k = (() => {
        var S;
        class e {
          constructor(_, h, f) {
            ((this.extDataService = _),
              (this.waService = h),
              (this.uiService = f),
              (this.userNameIntitals = (0, l.Flj)(() =>
                this.extDataService.getUserDetails()?.getUserNameIntitals(),
              )),
              (this.downloadContactLink = `/${T.ME.downloadContact()}`),
              (this.reportsLink = `/${T.ME.messagingReport()}`),
              (this.helpLink = `/${T.ME.helpLink()}`),
              (this.msgLink = `/${T.ME.bulkMsgs()}`),
              (this.chatbotLink = `/${T.ME.chatbot()}`),
              (this.userDetailsPage = `/${T.ME.getUserDetails()}`));
          }
          closeWindow() {
            this.waService.closeWindow();
          }
        }
        return (
          ((S = e).ɵfac = function (_) {
            return new (_ || S)(l.Y36(y.a), l.Y36(m.o), l.Y36(R.F));
          }),
          (S.ɵcmp = l.Xpm({
            type: S,
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
            template: function (_, h) {
              (1 & _ &&
                (l.TgZ(0, "div", 0)(1, "div", 1)(2, "i", 2),
                l.NdJ("click", function () {
                  return h.closeWindow();
                }),
                l.qZA(),
                l.TgZ(3, "div", 3),
                l._UZ(4, "img", 4),
                l.qZA()(),
                l.TgZ(5, "div", 5)(6, "div", 6),
                l._UZ(7, "i", 7),
                l.TgZ(8, "span"),
                l._uU(9),
                l.ALo(10, "jtranslate"),
                l.qZA()(),
                l.TgZ(11, "div", 6),
                l._UZ(12, "i", 8),
                l.TgZ(13, "span"),
                l._uU(14),
                l.ALo(15, "jtranslate"),
                l.qZA()(),
                l.TgZ(16, "div", 9),
                l._UZ(17, "i", 10),
                l.TgZ(18, "span"),
                l._uU(19),
                l.ALo(20, "jtranslate"),
                l.qZA()()(),
                l.TgZ(21, "div", 11)(22, "div", 12),
                l._uU(23),
                l.qZA(),
                l.TgZ(24, "div", 13)(25, "div", 14),
                l._UZ(26, "i", 15),
                l.TgZ(27, "span"),
                l._uU(28),
                l.ALo(29, "jtranslate"),
                l.qZA()(),
                l.TgZ(30, "div", 16),
                l._UZ(31, "i", 17),
                l.TgZ(32, "span"),
                l._uU(33),
                l.ALo(34, "jtranslate"),
                l.qZA()()()()()),
                2 & _ &&
                  (l.xp6(6),
                  l.Q6J("routerLink", h.msgLink),
                  l.xp6(3),
                  l.Oqu(l.lcZ(10, 11, "Send messages")),
                  l.xp6(2),
                  l.Q6J("routerLink", h.reportsLink),
                  l.xp6(3),
                  l.Oqu(l.lcZ(15, 13, "Reports")),
                  l.xp6(2),
                  l.Q6J("routerLink", h.helpLink),
                  l.xp6(3),
                  l.Oqu(l.lcZ(20, 15, "Get support")),
                  l.xp6(4),
                  l.hij(" ", h.userNameIntitals(), " "),
                  l.xp6(2),
                  l.Q6J("routerLink", h.userDetailsPage),
                  l.xp6(3),
                  l.Oqu(l.lcZ(29, 17, "Profile")),
                  l.xp6(2),
                  l.Q6J("routerLink", h.downloadContactLink),
                  l.xp6(3),
                  l.Oqu(l.lcZ(34, 19, "Download contacts"))));
            },
            dependencies: [x.rH, x.Od, A.Q],
            styles: [
              ".header[_ngcontent-%COMP%]{padding:0 24px 0 17px;border-bottom:1px solid rgba(0,0,0,.05);display:flex;justify-content:space-between;height:50px}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%;gap:20px}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]{cursor:pointer;transition:border .2s;border-bottom:2px solid transparent;height:100%;color:#03080299}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]:hover{color:#019f53}.header[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .wrap.active[_ngcontent-%COMP%]{color:#019f53;border-bottom:2px solid #019F53}.header[_ngcontent-%COMP%]   .profile-initals[_ngcontent-%COMP%]{display:flex;width:28px;height:28px;padding:7px 6px;justify-content:center;align-items:center;gap:2px;border-radius:4px;background:#F3EECE;color:#03080299}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{padding-bottom:0}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{padding:5px 10px;color:#2e2e2e;font-size:13px;cursor:pointer;border-bottom:1px solid rgba(0,0,0,.08)}.header[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{background:#fafafa}",
            ],
          })),
          e
        );
      })();
    },
    4825: (X, I, d) => {
      d.d(I, { H: () => R });
      var l = d(5592),
        T = d(2832),
        y = d(671);
      function R(x = 0, A, k = T.P) {
        let S = -1;
        return (
          null != A && ((0, y.K)(A) ? (k = A) : (S = A)),
          new l.y((e) => {
            let v = (function m(x) {
              return x instanceof Date && !isNaN(x);
            })(x)
              ? +x - k.now()
              : x;
            v < 0 && (v = 0);
            let _ = 0;
            return k.schedule(function () {
              e.closed ||
                (e.next(_++), 0 <= S ? this.schedule(void 0, S) : e.complete());
            }, v);
          })
        );
      }
    },
    2832: (X, I, d) => {
      d.d(I, { P: () => e, z: () => S });
      var l = d(5113);
      class T extends l.w0 {
        constructor(_, h) {
          super();
        }
        schedule(_, h = 0) {
          return this;
        }
      }
      const y = {
        setInterval(v, _, ...h) {
          const { delegate: f } = y;
          return f?.setInterval
            ? f.setInterval(v, _, ...h)
            : setInterval(v, _, ...h);
        },
        clearInterval(v) {
          const { delegate: _ } = y;
          return (_?.clearInterval || clearInterval)(v);
        },
        delegate: void 0,
      };
      var m = d(9039),
        x = d(4552);
      class A {
        constructor(_, h = A.now) {
          ((this.schedulerActionCtor = _), (this.now = h));
        }
        schedule(_, h = 0, f) {
          return new this.schedulerActionCtor(this, _).schedule(f, h);
        }
      }
      A.now = x.l.now;
      const S = new (class k extends A {
          constructor(_, h = A.now) {
            (super(_, h), (this.actions = []), (this._active = !1));
          }
          flush(_) {
            const { actions: h } = this;
            if (this._active) return void h.push(_);
            let f;
            this._active = !0;
            do {
              if ((f = _.execute(_.state, _.delay))) break;
            } while ((_ = h.shift()));
            if (((this._active = !1), f)) {
              for (; (_ = h.shift());) _.unsubscribe();
              throw f;
            }
          }
        })(
          class R extends T {
            constructor(_, h) {
              (super(_, h),
                (this.scheduler = _),
                (this.work = h),
                (this.pending = !1));
            }
            schedule(_, h = 0) {
              var f;
              if (this.closed) return this;
              this.state = _;
              const U = this.id,
                D = this.scheduler;
              return (
                null != U && (this.id = this.recycleAsyncId(D, U, h)),
                (this.pending = !0),
                (this.delay = h),
                (this.id =
                  null !== (f = this.id) && void 0 !== f
                    ? f
                    : this.requestAsyncId(D, this.id, h)),
                this
              );
            }
            requestAsyncId(_, h, f = 0) {
              return y.setInterval(_.flush.bind(_, this), f);
            }
            recycleAsyncId(_, h, f = 0) {
              if (null != f && this.delay === f && !1 === this.pending)
                return h;
              null != h && y.clearInterval(h);
            }
            execute(_, h) {
              if (this.closed) return new Error("executing a cancelled action");
              this.pending = !1;
              const f = this._execute(_, h);
              if (f) return f;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }
            _execute(_, h) {
              let U,
                f = !1;
              try {
                this.work(_);
              } catch (D) {
                ((f = !0),
                  (U = D || new Error("Scheduled action threw falsy error")));
              }
              if (f) return (this.unsubscribe(), U);
            }
            unsubscribe() {
              if (!this.closed) {
                const { id: _, scheduler: h } = this,
                  { actions: f } = h;
                ((this.work = this.state = this.scheduler = null),
                  (this.pending = !1),
                  (0, m.P)(f, this),
                  null != _ && (this.id = this.recycleAsyncId(h, _, null)),
                  (this.delay = null),
                  super.unsubscribe());
              }
            }
          },
        ),
        e = S;
    },
  },
]);
