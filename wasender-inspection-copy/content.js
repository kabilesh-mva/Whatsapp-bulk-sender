(() => {
  "use strict";
  var Uf = {
      4631: function (Ye, L, ie) {
        var ae =
            (this && this.__createBinding) ||
            (Object.create
              ? function (U, Q, J, M) {
                  void 0 === M && (M = J);
                  var G = Object.getOwnPropertyDescriptor(Q, J);
                  ((!G ||
                    ("get" in G
                      ? !Q.__esModule
                      : G.writable || G.configurable)) &&
                    (G = {
                      enumerable: !0,
                      get: function () {
                        return Q[J];
                      },
                    }),
                    Object.defineProperty(U, M, G));
                }
              : function (U, Q, J, M) {
                  (void 0 === M && (M = J), (U[M] = Q[J]));
                }),
          B =
            (this && this.__exportStar) ||
            function (U, Q) {
              for (var J in U)
                "default" !== J &&
                  !Object.prototype.hasOwnProperty.call(Q, J) &&
                  ae(Q, U, J);
            };
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          B(ie(7763), L),
          B(ie(721), L));
      },
      9061: (Ye, L) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.APIPathFragments = void 0));
        var ie = (function (ae) {
          return (
            (ae.REPORTS = "reports"),
            (ae.BROADCAST = "braodcast"),
            (ae.REPLY = "reply"),
            (ae.USER = "user"),
            (ae.ATTACHEMENT = "attachement"),
            (ae.UPLOAD = "upload"),
            (ae.TEMPLATE = "template"),
            (ae.BLOCKLIST = "blocklist"),
            (ae.STATS = "stats"),
            (ae.REDRAFT = "redraft"),
            (ae.COUNT = "count"),
            (ae.DELETE = "delete"),
            (ae.ALARM = "alarm"),
            ae
          );
        })(ie || (L.APIPathFragments = ie = {}));
      },
      2527: (Ye, L) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.Blockcontact = void 0));
        var ie = (function () {
          function ae(B, U, Q, J) {
            ((this.phoneNumber = B),
              (this.blockNumberId = U),
              (this.blockKeyword = Q),
              (this.version = J));
          }
          return (
            (ae.fromJSON = function (B) {
              var U = null;
              return (
                B &&
                  (((U = new ae("", "", "", "")).phoneNumber = B.phoneNumber
                    ? B.phoneNumber
                    : ""),
                  (U.blockNumberId = B.blockNumberId ? B.blockNumberId : ""),
                  (U.blockKeyword = B.blockKeyword ? B.blockKeyword : ""),
                  (U.version = B.version ? B.version : "")),
                U
              );
            }),
            ae
          );
        })();
        L.Blockcontact = ie;
      },
      1546: function (Ye, L, ie) {
        var ae =
            (this && this.__createBinding) ||
            (Object.create
              ? function (U, Q, J, M) {
                  void 0 === M && (M = J);
                  var G = Object.getOwnPropertyDescriptor(Q, J);
                  ((!G ||
                    ("get" in G
                      ? !Q.__esModule
                      : G.writable || G.configurable)) &&
                    (G = {
                      enumerable: !0,
                      get: function () {
                        return Q[J];
                      },
                    }),
                    Object.defineProperty(U, M, G));
                }
              : function (U, Q, J, M) {
                  (void 0 === M && (M = J), (U[M] = Q[J]));
                }),
          B =
            (this && this.__exportStar) ||
            function (U, Q) {
              for (var J in U)
                "default" !== J &&
                  !Object.prototype.hasOwnProperty.call(Q, J) &&
                  ae(Q, U, J);
            };
        (Object.defineProperty(L, "__esModule", { value: !0 }), B(ie(2527), L));
      },
      6363: (Ye, L) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.BroadCastReplyData = void 0));
        var ie = (function () {
          function ae(B, U, Q, J, M, G, Te, Ue, Qe, ar) {
            (void 0 === ar && (ar = Date.now()),
              (this.phonenumber = B),
              (this.version = U),
              (this.broadcastId = Q),
              (this.replyMsgId = J),
              (this.replyText = M || ""),
              (this.braodCastMsdId = G),
              (this.chatId = Te),
              (this.fromPhonenumber = Ue),
              (this.tab = Qe),
              (this.timestamp = ar));
          }
          return (
            (ae.fromJSON = function (B) {
              var U = null;
              return (
                B &&
                  (U = new ae(
                    B.phonenumber,
                    B.version,
                    B.broadcastId,
                    B.replyMsgId,
                    B.replyText,
                    B.braodCastMsdId,
                    B.chatId,
                    B.fromPhonenumber,
                    B.tab,
                    B.timestamp,
                  )),
                U
              );
            }),
            ae
          );
        })();
        L.BroadCastReplyData = ie;
      },
      6065: (Ye, L, ie) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.BroadcastReplyStats = void 0));
        var ae = ie(1766),
          B = (function () {
            function U() {}
            return (
              (U.fromJSON = function (Q) {
                var J,
                  M,
                  G,
                  Te,
                  Ue,
                  Qe = new U();
                return (
                  Q &&
                    (Qe.tabs =
                      (((J = {})[ae.BroadcastReplyTab.AUTO_REPLY] =
                        (null === (M = Q.tabs) || void 0 === M
                          ? void 0
                          : M[ae.BroadcastReplyTab.AUTO_REPLY]) || 0),
                      (J[ae.BroadcastReplyTab.UNSUBSCRIBE] =
                        (null === (G = Q.tabs) || void 0 === G
                          ? void 0
                          : G[ae.BroadcastReplyTab.UNSUBSCRIBE]) || 0),
                      (J[ae.BroadcastReplyTab.INTERESTED] =
                        (null === (Te = Q.tabs) || void 0 === Te
                          ? void 0
                          : Te[ae.BroadcastReplyTab.INTERESTED]) || 0),
                      (J[ae.BroadcastReplyTab.NOT_INTERESTED] =
                        (null === (Ue = Q.tabs) || void 0 === Ue
                          ? void 0
                          : Ue[ae.BroadcastReplyTab.NOT_INTERESTED]) || 0),
                      J)),
                  Qe
                );
              }),
              Object.defineProperty(U.prototype, "auto", {
                get: function () {
                  var Q;
                  return (
                    (null === (Q = this.tabs) || void 0 === Q
                      ? void 0
                      : Q[ae.BroadcastReplyTab.AUTO_REPLY]) || 0
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(U.prototype, "unsubscribe", {
                get: function () {
                  var Q;
                  return (
                    (null === (Q = this.tabs) || void 0 === Q
                      ? void 0
                      : Q[ae.BroadcastReplyTab.UNSUBSCRIBE]) || 0
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(U.prototype, "interested", {
                get: function () {
                  var Q;
                  return (
                    (null === (Q = this.tabs) || void 0 === Q
                      ? void 0
                      : Q[ae.BroadcastReplyTab.INTERESTED]) || 0
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(U.prototype, "notInterested", {
                get: function () {
                  var Q;
                  return (
                    (null === (Q = this.tabs) || void 0 === Q
                      ? void 0
                      : Q[ae.BroadcastReplyTab.NOT_INTERESTED]) || 0
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(U.prototype, "total", {
                get: function () {
                  return (
                    this.auto +
                    this.unsubscribe +
                    this.interested +
                    this.notInterested
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              U
            );
          })();
        L.BroadcastReplyStats = B;
      },
      1766: (Ye, L) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.BroadcastReplyTab = void 0));
        var ie = (function (ae) {
          return (
            (ae.AUTO_REPLY = "auto-reply"),
            (ae.UNSUBSCRIBE = "unsubscribe"),
            (ae.INTERESTED = "interested"),
            (ae.NOT_INTERESTED = "not-interested"),
            (ae.TOTAL = "total"),
            ae
          );
        })(ie || (L.BroadcastReplyTab = ie = {}));
      },
      1451: (Ye, L) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.BroadcastStats = void 0));
        var ie = (function () {
          function ae(B, U, Q, J, M) {
            ((this.totalMessages = B),
              (this.sent = U),
              (this.pending = Q),
              (this.failed = J),
              (this.blocked = M));
          }
          return (
            (ae.fromJSON = function (B) {
              var U = new ae(0, 0, 0, 0, 0);
              return (
                B &&
                  ((U.totalMessages = B.totalMessages ? B.totalMessages : 0),
                  (U.sent = B.sent ? B.sent : 0),
                  (U.pending = B.pending ? B.pending : 0),
                  (U.failed = B.failed ? B.failed : 0),
                  (U.blocked = B.blocked ? B.blocked : 0)),
                U
              );
            }),
            ae
          );
        })();
        L.BroadcastStats = ie;
      },
      8503: (Ye, L, ie) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.Broadcast = void 0));
        var ae = ie(5941),
          B = ie(6065),
          U = ie(1451),
          Q = ie(8131),
          J = (function () {
            function M(G, Te, Ue, Qe, ar, ta, Ut, aa, na) {
              ((this.id = G),
                (this.operation = Te),
                (this.phoneNumber = Ue),
                (this.unsubscriptionText = Qe),
                (this.messageAttachmentDetails = ta),
                (this.addUnsubscriptionText = ar),
                (this.sendWithCaption = Ut),
                (this.text = aa),
                (this.timestamp = na));
            }
            return (
              (M.fromJSON = function (G) {
                var Te = null;
                if (G) {
                  if (
                    (((Te = new M("", null, "", "", !1, [], !1, "", 0)).id =
                      G.id ? G.id : ""),
                    (Te.name = G.name ? G.name : ""),
                    (Te.operation = G.operation
                      ? G.operation
                      : Q.Operation.OPERATION_NONE),
                    (Te.phoneNumber = G.phoneNumber ? G.phoneNumber : ""),
                    (Te.unsubscriptionText = G.unsubscriptionText
                      ? G.unsubscriptionText
                      : ""),
                    (Te.broadcastStats = U.BroadcastStats.fromJSON(
                      G.broadcastStats,
                    )),
                    (Te.broadcastReplyStats = G.broadcastReplyStats
                      ? B.BroadcastReplyStats.fromJSON(G.broadcastReplyStats)
                      : new B.BroadcastReplyStats()),
                    G.messageAttachmentDetails)
                  )
                    for (
                      var Ue = 0;
                      Ue < G.messageAttachmentDetails.length;
                      Ue++
                    ) {
                      var Qe = ae.MessageAttachmentDetails.fromJSON(
                        G.messageAttachmentDetails[Ue],
                      );
                      Qe && Te.messageAttachmentDetails.push(Qe);
                    }
                  ((Te.addUnsubscriptionText =
                    !!G.addUnsubscriptionText && G.addUnsubscriptionText),
                    (Te.sendWithCaption =
                      !!G.sendWithCaption && G.sendWithCaption),
                    (Te.text = G.text ? G.text : ""),
                    (Te.timestamp = G.timestamp ? G.timestamp : 0));
                }
                return Te;
              }),
              (M.prototype.unsubscriptionTextToBeSent = function () {
                if (this.addUnsubscriptionText && this.unsubscriptionText) {
                  var G = this.getUnsbuscriptionKeyWord();
                  if (G)
                    return "".concat(
                      this.unsubscriptionText.replace("{".concat(G, "}"), G),
                    );
                }
                return "";
              }),
              (M.prototype.msgToBeSent = function () {
                var G = this.text,
                  Te = this.unsubscriptionTextToBeSent();
                return (Te && (G = "".concat(G, "\n\n_").concat(Te, "_")), G);
              }),
              (M.prototype.getUnsbuscriptionKeyWord = function () {
                var G = this.unsubscriptionText.match(/\{([^{}]+)\}/);
                return G && G.length > 1 ? G[1] : "";
              }),
              M
            );
          })();
        L.Broadcast = J;
      },
      4215: (Ye, L) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.BulkMessage = L.WAContactNumbers = void 0));
        var ie = (function () {
          function B(U) {
            this.contact = U;
          }
          return (
            (B.fromJSON = function (U) {
              var Q = null;
              return (
                U && ((Q = new B("")).contact = U.contact ? U.contact : ""),
                Q
              );
            }),
            B
          );
        })();
        L.WAContactNumbers = ie;
        var ae = (function () {
          function B(U, Q, J, M, G, Te, Ue, Qe, ar, ta, Ut, aa, na, Ti) {
            ((this.id = U),
              (this.authid = Q),
              (this.fileName = J),
              (this.numbers = M),
              (this.messages = G),
              (this.batchSize = Te),
              (this.batchGap = Ue),
              (this.isPro = Qe),
              (this.messageGap = ar),
              (this.randomizeDelay = ta),
              (this.attachment = Ut),
              (this.isCaption = aa),
              (this.startTime = na),
              (this.metaData = Ti));
          }
          return (
            (B.fromJSON = function (U) {
              var Q = null;
              return (
                U &&
                  (((Q = new B(
                    "",
                    "",
                    "",
                    [],
                    [],
                    0,
                    0,
                    !1,
                    0,
                    !1,
                    !1,
                    !1,
                    0,
                    !1,
                  )).id = U.id ? U.id : ""),
                  (Q.authid = U.authid ? U.authid : ""),
                  (Q.fileName = U.fileName ? U.fileName : ""),
                  (Q.numbers = U.numbers
                    ? U.numbers.map(function (J) {
                        return ie.fromJSON(J);
                      })
                    : []),
                  (Q.messages = U.messages ? U.messages : []),
                  (Q.batchSize = U.batchSize ? U.batchSize : 0),
                  (Q.batchGap = U.batchGap ? U.batchGap : 0),
                  (Q.isPro = !!U.isPro && U.isPro),
                  (Q.messageGap = U.messageGap ? U.messageGap : 0),
                  (Q.randomizeDelay = !!U.randomizeDelay && U.randomizeDelay),
                  (Q.attachment = !!U.attachment && U.attachment),
                  (Q.isCaption = !!U.isCaption && U.isCaption),
                  (Q.startTime = !!U.startTime && U.startTime),
                  (Q.metaData = !!U.metaData && U.metaData)),
                Q
              );
            }),
            B
          );
        })();
        L.BulkMessage = ae;
      },
      8131: (Ye, L) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.Operation = void 0));
        var ie = (function (ae) {
          return (
            (ae.OPERATION_NONE = "OPERATION_NONE"),
            (ae.OPERATION_SEND_MESSAGE = "OPERATION_SEND_MESSAGE"),
            (ae.OPERATION_FILTER = "OPERATION_FILTER"),
            (ae.STATUS_SENT = "STATUS_SENT"),
            (ae.STATUS_FAILED = "STATUS_FAILED"),
            (ae.STATUS_PENDING = "STATUS_PENDING"),
            (ae.STATUS_SKIPPED = "STATUS_SKIPPED"),
            (ae.STATUS_BLOCKED = "STATUS_BLOCKED"),
            ae
          );
        })(ie || (L.Operation = ie = {}));
      },
      4283: function (Ye, L, ie) {
        var Q,
          ae =
            (this && this.__extends) ||
            ((Q = function (J, M) {
              return (Q =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (G, Te) {
                    G.__proto__ = Te;
                  }) ||
                function (G, Te) {
                  for (var Ue in Te)
                    Object.prototype.hasOwnProperty.call(Te, Ue) &&
                      (G[Ue] = Te[Ue]);
                })(J, M);
            }),
            function (J, M) {
              if ("function" != typeof M && null !== M)
                throw new TypeError(
                  "Class extends value " +
                    String(M) +
                    " is not a constructor or null",
                );
              function G() {
                this.constructor = J;
              }
              (Q(J, M),
                (J.prototype =
                  null === M
                    ? Object.create(M)
                    : ((G.prototype = M.prototype), new G())));
            });
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.Contact = void 0));
        var B = ie(5384),
          U = (function (Q) {
            function J(M, G) {
              var Te = Q.call(this, B.ModelType.CONTACT) || this;
              return ((Te.name = M), (Te.phoneNumber = G), Te);
            }
            return (
              ae(J, Q),
              (J.fromJSON = function (M) {
                var G = null;
                return (
                  M &&
                    M.phoneNumber &&
                    ((G = new J("", M.phoneNumber)).name = M.name
                      ? M.name
                      : ""),
                  G
                );
              }),
              J
            );
          })(B.Model);
        L.Contact = U;
      },
      6900: (Ye, L) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.CountryCodeAndNumber = L.CountryDialCodes = void 0),
          (L.CountryDialCodes = [
            { name: "Multiple Countries", dial_code: "00", code: "XX" },
            { name: "Afghanistan", dial_code: "93", code: "AF" },
            { name: "Albania", dial_code: "355", code: "AL" },
            { name: "Algeria", dial_code: "213", code: "DZ" },
            { name: "AmericanSamoa", dial_code: "1 684", code: "AS" },
            { name: "Andorra", dial_code: "376", code: "AD" },
            { name: "Angola", dial_code: "244", code: "AO" },
            { name: "Anguilla", dial_code: "1 264", code: "AI" },
            { name: "Antarctica", dial_code: "672", code: "AQ" },
            { name: "Antigua and Barbuda", dial_code: "1268", code: "AG" },
            { name: "Argentina", dial_code: "54", code: "AR" },
            { name: "Armenia", dial_code: "374", code: "AM" },
            { name: "Aruba", dial_code: "297", code: "AW" },
            { name: "Australia", dial_code: "61", code: "AU" },
            { name: "Austria", dial_code: "43", code: "AT" },
            { name: "Azerbaijan", dial_code: "994", code: "AZ" },
            { name: "Bahamas", dial_code: "1 242", code: "BS" },
            { name: "Bahrain", dial_code: "973", code: "BH" },
            { name: "Bangladesh", dial_code: "880", code: "BD" },
            { name: "Barbados", dial_code: "1 246", code: "BB" },
            { name: "Belarus", dial_code: "375", code: "BY" },
            { name: "Belgium", dial_code: "32", code: "BE" },
            { name: "Belize", dial_code: "501", code: "BZ" },
            { name: "Benin", dial_code: "229", code: "BJ" },
            { name: "Bermuda", dial_code: "1 441", code: "BM" },
            { name: "Bhutan", dial_code: "975", code: "BT" },
            {
              name: "Bolivia, Plurinational State of",
              dial_code: "591",
              code: "BO",
            },
            { name: "Bosnia and Herzegovina", dial_code: "387", code: "BA" },
            { name: "Botswana", dial_code: "267", code: "BW" },
            { name: "Brazil", dial_code: "55", code: "BR" },
            {
              name: "British Indian Ocean Territory",
              dial_code: "246",
              code: "IO",
            },
            { name: "Brunei Darussalam", dial_code: "673", code: "BN" },
            { name: "Bulgaria", dial_code: "359", code: "BG" },
            { name: "Burkina Faso", dial_code: "226", code: "BF" },
            { name: "Burundi", dial_code: "257", code: "BI" },
            { name: "Cambodia", dial_code: "855", code: "KH" },
            { name: "Cameroon", dial_code: "237", code: "CM" },
            { name: "Canada", dial_code: "1", code: "CA" },
            { name: "Cape Verde", dial_code: "238", code: "CV" },
            { name: "Cayman Islands", dial_code: " 345", code: "KY" },
            { name: "Central African Republic", dial_code: "236", code: "CF" },
            { name: "Chad", dial_code: "235", code: "TD" },
            { name: "Chile", dial_code: "56", code: "CL" },
            { name: "China", dial_code: "86", code: "CN" },
            { name: "Christmas Island", dial_code: "61", code: "CX" },
            { name: "Cocos (Keeling) Islands", dial_code: "61", code: "CC" },
            { name: "Colombia", dial_code: "57", code: "CO" },
            { name: "Comoros", dial_code: "269", code: "KM" },
            { name: "Congo", dial_code: "242", code: "CG" },
            {
              name: "Congo, The Democratic Republic of the",
              dial_code: "243",
              code: "CD",
            },
            { name: "Cook Islands", dial_code: "682", code: "CK" },
            { name: "Costa Rica", dial_code: "506", code: "CR" },
            { name: "Cote d'Ivoire", dial_code: "225", code: "CI" },
            { name: "Croatia", dial_code: "385", code: "HR" },
            { name: "Cuba", dial_code: "53", code: "CU" },
            { name: "Cyprus", dial_code: "357", code: "CY" },
            { name: "Czech Republic", dial_code: "420", code: "CZ" },
            { name: "Denmark", dial_code: "45", code: "DK" },
            { name: "Djibouti", dial_code: "253", code: "DJ" },
            { name: "Dominica", dial_code: "1 767", code: "DM" },
            { name: "Dominican Republic", dial_code: "1 849", code: "DO" },
            { name: "Ecuador", dial_code: "593", code: "EC" },
            { name: "Egypt", dial_code: "20", code: "EG" },
            { name: "El Salvador", dial_code: "503", code: "SV" },
            { name: "Equatorial Guinea", dial_code: "240", code: "GQ" },
            { name: "Eritrea", dial_code: "291", code: "ER" },
            { name: "Estonia", dial_code: "372", code: "EE" },
            { name: "Ethiopia", dial_code: "251", code: "ET" },
            {
              name: "Falkland Islands (Malvinas)",
              dial_code: "500",
              code: "FK",
            },
            { name: "Faroe Islands", dial_code: "298", code: "FO" },
            { name: "Fiji", dial_code: "679", code: "FJ" },
            { name: "Finland", dial_code: "358", code: "FI" },
            { name: "France", dial_code: "33", code: "FR" },
            { name: "French Guiana", dial_code: "594", code: "GF" },
            { name: "French Polynesia", dial_code: "689", code: "PF" },
            { name: "Gabon", dial_code: "241", code: "GA" },
            { name: "Gambia", dial_code: "220", code: "GM" },
            { name: "Georgia", dial_code: "995", code: "GE" },
            { name: "Germany", dial_code: "49", code: "DE" },
            { name: "Ghana", dial_code: "233", code: "GH" },
            { name: "Gibraltar", dial_code: "350", code: "GI" },
            { name: "Greece", dial_code: "30", code: "GR" },
            { name: "Greenland", dial_code: "299", code: "GL" },
            { name: "Grenada", dial_code: "1 473", code: "GD" },
            { name: "Guadeloupe", dial_code: "590", code: "GP" },
            { name: "Guam", dial_code: "1 671", code: "GU" },
            { name: "Guatemala", dial_code: "502", code: "GT" },
            { name: "Guernsey", dial_code: "44", code: "GG" },
            { name: "Guinea", dial_code: "224", code: "GN" },
            { name: "Guinea-Bissau", dial_code: "245", code: "GW" },
            { name: "Guyana", dial_code: "595", code: "GY" },
            { name: "Haiti", dial_code: "509", code: "HT" },
            {
              name: "Holy See (Vatican City State)",
              dial_code: "379",
              code: "VA",
            },
            { name: "Honduras", dial_code: "504", code: "HN" },
            { name: "Hong Kong", dial_code: "852", code: "HK" },
            { name: "Hungary", dial_code: "36", code: "HU" },
            { name: "Iceland", dial_code: "354", code: "IS" },
            { name: "India", dial_code: "91", code: "IN" },
            { name: "Indonesia", dial_code: "62", code: "ID" },
            { name: "Iran, Islamic Republic of", dial_code: "98", code: "IR" },
            { name: "Iraq", dial_code: "964", code: "IQ" },
            { name: "Ireland", dial_code: "353", code: "IE" },
            { name: "Isle of Man", dial_code: "44", code: "IM" },
            { name: "Israel", dial_code: "972", code: "IL" },
            { name: "Italy", dial_code: "39", code: "IT" },
            { name: "Jamaica", dial_code: "1 876", code: "JM" },
            { name: "Japan", dial_code: "81", code: "JP" },
            { name: "Jersey", dial_code: "44", code: "JE" },
            { name: "Jordan", dial_code: "962", code: "JO" },
            { name: "Kazakhstan", dial_code: "7 7", code: "KZ" },
            { name: "Kenya", dial_code: "254", code: "KE" },
            { name: "Kiribati", dial_code: "686", code: "KI" },
            {
              name: "Korea, Democratic People's Republic of",
              dial_code: "850",
              code: "KP",
            },
            { name: "Korea, Republic of", dial_code: "82", code: "KR" },
            { name: "Kuwait", dial_code: "965", code: "KW" },
            { name: "Kyrgyzstan", dial_code: "996", code: "KG" },
            {
              name: "Lao People's Democratic Republic",
              dial_code: "856",
              code: "LA",
            },
            { name: "Latvia", dial_code: "371", code: "LV" },
            { name: "Lebanon", dial_code: "961", code: "LB" },
            { name: "Lesotho", dial_code: "266", code: "LS" },
            { name: "Liberia", dial_code: "231", code: "LR" },
            { name: "Libyan Arab Jamahiriya", dial_code: "218", code: "LY" },
            { name: "Liechtenstein", dial_code: "423", code: "LI" },
            { name: "Lithuania", dial_code: "370", code: "LT" },
            { name: "Luxembourg", dial_code: "352", code: "LU" },
            { name: "Macao", dial_code: "853", code: "MO" },
            {
              name: "Macedonia, The Former Yugoslav Republic of",
              dial_code: "389",
              code: "MK",
            },
            { name: "Madagascar", dial_code: "261", code: "MG" },
            { name: "Malawi", dial_code: "265", code: "MW" },
            { name: "Malaysia", dial_code: "60", code: "MY" },
            { name: "Maldives", dial_code: "960", code: "MV" },
            { name: "Mali", dial_code: "223", code: "ML" },
            { name: "Malta", dial_code: "356", code: "MT" },
            { name: "Marshall Islands", dial_code: "692", code: "MH" },
            { name: "Martinique", dial_code: "596", code: "MQ" },
            { name: "Mauritania", dial_code: "222", code: "MR" },
            { name: "Mauritius", dial_code: "230", code: "MU" },
            { name: "Mayotte", dial_code: "262", code: "YT" },
            { name: "Mexico", dial_code: "52", code: "MX" },
            {
              name: "Micronesia, Federated States of",
              dial_code: "691",
              code: "FM",
            },
            { name: "Moldova, Republic of", dial_code: "373", code: "MD" },
            { name: "Monaco", dial_code: "377", code: "MC" },
            { name: "Mongolia", dial_code: "976", code: "MN" },
            { name: "Montenegro", dial_code: "382", code: "ME" },
            { name: "Montserrat", dial_code: "1664", code: "MS" },
            { name: "Morocco", dial_code: "212", code: "MA" },
            { name: "Mozambique", dial_code: "258", code: "MZ" },
            { name: "Myanmar", dial_code: "95", code: "MM" },
            { name: "Namibia", dial_code: "264", code: "NA" },
            { name: "Nauru", dial_code: "674", code: "NR" },
            { name: "Nepal", dial_code: "977", code: "NP" },
            { name: "Netherlands", dial_code: "31", code: "NL" },
            { name: "Netherlands Antilles", dial_code: "599", code: "AN" },
            { name: "New Caledonia", dial_code: "687", code: "NC" },
            { name: "New Zealand", dial_code: "64", code: "NZ" },
            { name: "Nicaragua", dial_code: "505", code: "NI" },
            { name: "Niger", dial_code: "227", code: "NE" },
            { name: "Nigeria", dial_code: "234", code: "NG" },
            { name: "Niue", dial_code: "683", code: "NU" },
            { name: "Norfolk Island", dial_code: "672", code: "NF" },
            {
              name: "Northern Mariana Islands",
              dial_code: "1 670",
              code: "MP",
            },
            { name: "Norway", dial_code: "47", code: "NO" },
            { name: "Oman", dial_code: "968", code: "OM" },
            { name: "Pakistan", dial_code: "92", code: "PK" },
            { name: "Palau", dial_code: "680", code: "PW" },
            {
              name: "Palestinian Territory, Occupied",
              dial_code: "970",
              code: "PS",
            },
            { name: "Panama", dial_code: "507", code: "PA" },
            { name: "Papua New Guinea", dial_code: "675", code: "PG" },
            { name: "Paraguay", dial_code: "595", code: "PY" },
            { name: "Peru", dial_code: "51", code: "PE" },
            { name: "Philippines", dial_code: "63", code: "PH" },
            { name: "Pitcairn", dial_code: "872", code: "PN" },
            { name: "Poland", dial_code: "48", code: "PL" },
            { name: "Portugal", dial_code: "351", code: "PT" },
            { name: "Puerto Rico", dial_code: "1 939", code: "PR" },
            { name: "Qatar", dial_code: "974", code: "QA" },
            { name: "Romania", dial_code: "40", code: "RO" },
            { name: "Russia", dial_code: "7", code: "RU" },
            { name: "Rwanda", dial_code: "250", code: "RW" },
            { name: "R\xe9union", dial_code: "262", code: "RE" },
            { name: "Saint Barth\xe9lemy", dial_code: "590", code: "BL" },
            {
              name: "Saint Helena, Ascension and Tristan Da Cunha",
              dial_code: "290",
              code: "SH",
            },
            { name: "Saint Kitts and Nevis", dial_code: "1 869", code: "KN" },
            { name: "Saint Lucia", dial_code: "1 758", code: "LC" },
            { name: "Saint Martin", dial_code: "590", code: "MF" },
            { name: "Saint Pierre and Miquelon", dial_code: "508", code: "PM" },
            {
              name: "Saint Vincent and the Grenadines",
              dial_code: "1 784",
              code: "VC",
            },
            { name: "Samoa", dial_code: "685", code: "WS" },
            { name: "San Marino", dial_code: "378", code: "SM" },
            { name: "Sao Tome and Principe", dial_code: "239", code: "ST" },
            { name: "Saudi Arabia", dial_code: "966", code: "SA" },
            { name: "Senegal", dial_code: "221", code: "SN" },
            { name: "Serbia", dial_code: "381", code: "RS" },
            { name: "Seychelles", dial_code: "248", code: "SC" },
            { name: "Sierra Leone", dial_code: "232", code: "SL" },
            { name: "Singapore", dial_code: "65", code: "SG" },
            { name: "Slovakia", dial_code: "421", code: "SK" },
            { name: "Slovenia", dial_code: "386", code: "SI" },
            { name: "Solomon Islands", dial_code: "677", code: "SB" },
            { name: "Somalia", dial_code: "252", code: "SO" },
            { name: "South Africa", dial_code: "27", code: "ZA" },
            {
              name: "South Georgia and the South Sandwich Islands",
              dial_code: "500",
              code: "GS",
            },
            { name: "Spain", dial_code: "34", code: "ES" },
            { name: "Sri Lanka", dial_code: "94", code: "LK" },
            { name: "Sudan", dial_code: "249", code: "SD" },
            { name: "Suriname", dial_code: "597", code: "SR" },
            { name: "Svalbard and Jan Mayen", dial_code: "47", code: "SJ" },
            { name: "Swaziland", dial_code: "268", code: "SZ" },
            { name: "Sweden", dial_code: "46", code: "SE" },
            { name: "Switzerland", dial_code: "41", code: "CH" },
            { name: "Syrian Arab Republic", dial_code: "963", code: "SY" },
            { name: "Taiwan, Province of China", dial_code: "886", code: "TW" },
            { name: "Tajikistan", dial_code: "992", code: "TJ" },
            {
              name: "Tanzania, United Republic of",
              dial_code: "255",
              code: "TZ",
            },
            { name: "Thailand", dial_code: "66", code: "TH" },
            { name: "Timor-Leste", dial_code: "670", code: "TL" },
            { name: "Togo", dial_code: "228", code: "TG" },
            { name: "Tokelau", dial_code: "690", code: "TK" },
            { name: "Tonga", dial_code: "676", code: "TO" },
            { name: "Trinidad and Tobago", dial_code: "1 868", code: "TT" },
            { name: "Tunisia", dial_code: "216", code: "TN" },
            { name: "Turkey", dial_code: "90", code: "TR" },
            { name: "Turkmenistan", dial_code: "993", code: "TM" },
            {
              name: "Turks and Caicos Islands",
              dial_code: "1 649",
              code: "TC",
            },
            { name: "Tuvalu", dial_code: "688", code: "TV" },
            { name: "Uganda", dial_code: "256", code: "UG" },
            { name: "Ukraine", dial_code: "380", code: "UA" },
            { name: "United Arab Emirates", dial_code: "971", code: "AE" },
            { name: "United Kingdom", dial_code: "44", code: "GB" },
            { name: "United States", dial_code: "1", code: "US" },
            { name: "Uruguay", dial_code: "598", code: "UY" },
            { name: "Uzbekistan", dial_code: "998", code: "UZ" },
            { name: "Vanuatu", dial_code: "678", code: "VU" },
            {
              name: "Venezuela, Bolivarian Republic of",
              dial_code: "58",
              code: "VE",
            },
            { name: "Viet Nam", dial_code: "84", code: "VN" },
            { name: "Virgin Islands, British", dial_code: "1 284", code: "VG" },
            { name: "Virgin Islands, U.S.", dial_code: "1 340", code: "VI" },
            { name: "Wallis and Futuna", dial_code: "681", code: "WF" },
            { name: "Yemen", dial_code: "967", code: "YE" },
            { name: "Zambia", dial_code: "260", code: "ZM" },
            { name: "Zimbabwe", dial_code: "263", code: "ZW" },
            { name: "\xc5land Islands", dial_code: "358", code: "AX" },
          ]));
        var ie = (function () {
          function ae(B, U) {
            ((this.countryInfo = B), (this.phoneNumber = U));
          }
          return (
            (ae.extractCountryCodeAndNumber = function (B) {
              for (
                var U = new ae(null, B),
                  J = 0,
                  M = L.CountryDialCodes.sort(function (Qe, ar) {
                    return ar.dial_code.length - Qe.dial_code.length;
                  });
                J < M.length;
                J++
              ) {
                var G = M[J],
                  Te = G.dial_code.replace(/\s+/g, "");
                B.startsWith(Te) && (U = new ae(G, B.slice(Te.length)));
              }
              return U;
            }),
            ae
          );
        })();
        L.CountryCodeAndNumber = ie;
      },
      7763: function (Ye, L, ie) {
        var ae =
            (this && this.__createBinding) ||
            (Object.create
              ? function (U, Q, J, M) {
                  void 0 === M && (M = J);
                  var G = Object.getOwnPropertyDescriptor(Q, J);
                  ((!G ||
                    ("get" in G
                      ? !Q.__esModule
                      : G.writable || G.configurable)) &&
                    (G = {
                      enumerable: !0,
                      get: function () {
                        return Q[J];
                      },
                    }),
                    Object.defineProperty(U, M, G));
                }
              : function (U, Q, J, M) {
                  (void 0 === M && (M = J), (U[M] = Q[J]));
                }),
          B =
            (this && this.__exportStar) ||
            function (U, Q) {
              for (var J in U)
                "default" !== J &&
                  !Object.prototype.hasOwnProperty.call(Q, J) &&
                  ae(Q, U, J);
            };
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          B(ie(9061), L),
          B(ie(6900), L),
          B(ie(1730), L),
          B(ie(7313), L),
          B(ie(5384), L),
          B(ie(232), L),
          B(ie(1766), L),
          B(ie(6363), L),
          B(ie(8503), L),
          B(ie(4215), L),
          B(ie(4283), L),
          B(ie(6900), L),
          B(ie(232), L),
          B(ie(5941), L),
          B(ie(1546), L),
          B(ie(8131), L),
          B(ie(1451), L),
          B(ie(6065), L));
      },
      7313: function (Ye, L, ie) {
        var Q,
          ae =
            (this && this.__extends) ||
            ((Q = function (J, M) {
              return (Q =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (G, Te) {
                    G.__proto__ = Te;
                  }) ||
                function (G, Te) {
                  for (var Ue in Te)
                    Object.prototype.hasOwnProperty.call(Te, Ue) &&
                      (G[Ue] = Te[Ue]);
                })(J, M);
            }),
            function (J, M) {
              if ("function" != typeof M && null !== M)
                throw new TypeError(
                  "Class extends value " +
                    String(M) +
                    " is not a constructor or null",
                );
              function G() {
                this.constructor = J;
              }
              (Q(J, M),
                (J.prototype =
                  null === M
                    ? Object.create(M)
                    : ((G.prototype = M.prototype), new G())));
            });
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.Message = void 0));
        var B = ie(5384),
          U = (function (Q) {
            function J(M, G, Te, Ue, Qe) {
              var ar = Q.call(this, B.ModelType.MESSAGE) || this;
              return (
                (ar.id = M),
                (ar.msg = G),
                (ar.chatPhonenumber = Te),
                (ar.fromPhonenumber = Ue),
                (ar.time = Qe),
                ar
              );
            }
            return (
              ae(J, Q),
              (J.fromJSON = function (M) {
                var G = null;
                return (
                  M &&
                    (((G = new J("", null, null, null, 0)).id = M.id
                      ? M.id
                      : null),
                    (G.msg = M.msg ? M.msg : null),
                    (G.chatPhonenumber = M.chatPhonenumber
                      ? M.chatPhonenumber
                      : null),
                    (G.fromPhonenumber = M.fromPhonenumber
                      ? M.fromPhonenumber
                      : null),
                    (G.time = M.time ? M.time : 0)),
                  G
                );
              }),
              J
            );
          })(B.Model);
        L.Message = U;
      },
      5384: (Ye, L) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.Model = L.ModelType = void 0));
        var ie = (function (B) {
          return (
            (B.CONTACT = "CONTACT"),
            (B.EXT_AUTH = "EXT_AUTH"),
            (B.MESSAGE = "MESSAGE"),
            B
          );
        })(ie || (L.ModelType = ie = {}));
        L.Model = function B(U) {
          this.modelType = U;
        };
      },
      232: (Ye, L, ie) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.ModelUtils = void 0));
        var ae = ie(4283),
          B = ie(7313),
          U = ie(5384),
          Q = (function () {
            function J() {}
            return (
              (J.fromJSON = function (M) {
                var G = null;
                return M
                  ? Array.isArray(M)
                    ? J.handleDataArray(M, G)
                    : "object" == typeof M
                      ? J.handleDataObject(M, G)
                      : M
                  : M;
              }),
              (J.handleDataObject = function (M, G) {
                if (M)
                  if (M.modelType)
                    switch (M.modelType) {
                      case U.ModelType.CONTACT:
                        G = ae.Contact.fromJSON(M);
                        break;
                      case U.ModelType.MESSAGE:
                        G = B.Message.fromJSON(M);
                    }
                  else G = M;
                return G;
              }),
              (J.handleDataArray = function (M, G) {
                return (
                  M &&
                    M.length &&
                    (G = M.map(function (Te) {
                      return J.fromJSON(Te);
                    })),
                  G
                );
              }),
              J
            );
          })();
        L.ModelUtils = Q;
      },
      5941: function (Ye, L, ie) {
        var ae =
            (this && this.__createBinding) ||
            (Object.create
              ? function (U, Q, J, M) {
                  void 0 === M && (M = J);
                  var G = Object.getOwnPropertyDescriptor(Q, J);
                  ((!G ||
                    ("get" in G
                      ? !Q.__esModule
                      : G.writable || G.configurable)) &&
                    (G = {
                      enumerable: !0,
                      get: function () {
                        return Q[J];
                      },
                    }),
                    Object.defineProperty(U, M, G));
                }
              : function (U, Q, J, M) {
                  (void 0 === M && (M = J), (U[M] = Q[J]));
                }),
          B =
            (this && this.__exportStar) ||
            function (U, Q) {
              for (var J in U)
                "default" !== J &&
                  !Object.prototype.hasOwnProperty.call(Q, J) &&
                  ae(Q, U, J);
            };
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          B(ie(8349), L),
          B(ie(2044), L));
      },
      8349: (Ye, L) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.MessageAttachmentDetails = void 0));
        var ie = (function () {
          function ae(B, U, Q, J) {
            ((this.type = J), (this.name = B), (this.url = U), (this.size = Q));
          }
          return (
            (ae.fromJSON = function (B) {
              var U = null;
              return (
                B &&
                  (((U = new ae("", "", 0, "")).name = B.name ? B.name : ""),
                  (U.url = B.url ? B.url : ""),
                  (U.size = B.size ? B.size : 0),
                  (U.type = B.type ? B.type : "")),
                U
              );
            }),
            ae
          );
        })();
        L.MessageAttachmentDetails = ie;
      },
      2044: (Ye, L, ie) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.MessageTemplate = L.MessageTemplateType = void 0));
        var ae = ie(721),
          B = ie(8349),
          U = (function (J) {
            return ((J.TEXT = "text"), (J.IMAGE = "image"), (J.DOC = "doc"), J);
          })(U || (L.MessageTemplateType = U = {})),
          Q = (function () {
            function J(M, G, Te, Ue, Qe, ar, ta, Ut, aa, na) {
              ((this.id = M),
                (this.phoneNumber = G),
                (this.name = Te),
                (this.template = Ue),
                (this.attachmentDetails = Qe),
                (this.addUnsubscriptionText = ar),
                (this.unsubscriptionText = ta),
                (this.sendWithCaption = Ut),
                (this.createdAt = aa),
                (this.updatedAt = na));
            }
            return (
              (J.fromJSON = function (M) {
                var G = null;
                if (M) {
                  if (
                    (((G = new J("", "", "", "", [], !1, "", !1, 0, 0)).id =
                      M.id ? M.id : ""),
                    (G.phoneNumber = M.phoneNumber ? M.phoneNumber : ""),
                    (G.name = M.name ? M.name : ""),
                    (G.template = M.template ? M.template : ""),
                    M.attachmentDetails)
                  )
                    for (var Te = 0; Te < M.attachmentDetails.length; Te++) {
                      var Ue = B.MessageAttachmentDetails.fromJSON(
                        M.attachmentDetails[Te],
                      );
                      Ue && G.attachmentDetails.push(Ue);
                    }
                  ((G.addUnsubscriptionText =
                    !!M.addUnsubscriptionText && M.addUnsubscriptionText),
                    (G.unsubscriptionText = M.unsubscriptionText
                      ? M.unsubscriptionText
                      : ""),
                    (G.sendWithCaption =
                      !!M.sendWithCaption && M.sendWithCaption),
                    (G.createdAt = M.createdAt ? M.createdAt : 0),
                    (G.updatedAt = M.updatedAt ? M.updatedAt : 0));
                }
                return G;
              }),
              (J.getDefault = function (M) {
                return new J(
                  ae.UUIDUtils.generate(),
                  M,
                  "",
                  "",
                  [],
                  !1,
                  "",
                  !1,
                  Date.now(),
                  Date.now(),
                );
              }),
              Object.defineProperty(J.prototype, "templateType", {
                get: function () {
                  return this.attachmentDetails.length > 0
                    ? this.attachmentDetails.every(function (G) {
                        return G.type.includes("image");
                      })
                      ? U.IMAGE
                      : U.DOC
                    : U.TEXT;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (J.DEFAULT_UNSUBSCRIPTION_TEXT =
                "If this is not relevant please say {STOP} and we will never message you again."),
              J
            );
          })();
        L.MessageTemplate = Q;
      },
      1730: (Ye, L) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.UserDetails = void 0));
        var ie = (function () {
          function ae(B, U, Q, J, M, G, Te, Ue) {
            ((this.phoneNumber = B),
              (this.number = U),
              (this.email = Q),
              (this.name = J),
              (this.verifiedEmail = M),
              (this.getTips = G),
              (this.countryInfo = Te),
              (this.installTimestamp = Ue));
          }
          return (
            (ae.fromJSON = function (B) {
              var U = null;
              return (
                B &&
                  (((U = new ae("", "", "", "", !1, !1, null, 0)).phoneNumber =
                    B.phoneNumber ? B.phoneNumber : ""),
                  (U.phoneNumber = U.phoneNumber.replace(/[^0-9]/g, "")),
                  (U.number = B.number ? B.number : ""),
                  (U.email = B.email ? B.email : ""),
                  (U.name = B.name ? B.name : ""),
                  (U.verifiedEmail = !!B.verifiedEmail && B.verifiedEmail),
                  (U.getTips = !!B.getTips && B.getTips),
                  (U.countryInfo = B.countryInfo ? B.countryInfo : null),
                  (U.installTimestamp = B.installTimestamp
                    ? B.installTimestamp
                    : 0)),
                U
              );
            }),
            (ae.prototype.getUserNameIntitals = function () {
              var B = this.name.split(" ");
              return B.length > 1
                ? B[0].charAt(0).toUpperCase() + B[1].charAt(0).toUpperCase()
                : B[0].charAt(0).toUpperCase();
            }),
            (ae.prototype.isValid = function () {
              return !(!this.number.trim() || !this.name.trim());
            }),
            ae
          );
        })();
        L.UserDetails = ie;
      },
      721: function (Ye, L, ie) {
        var ae =
            (this && this.__createBinding) ||
            (Object.create
              ? function (U, Q, J, M) {
                  void 0 === M && (M = J);
                  var G = Object.getOwnPropertyDescriptor(Q, J);
                  ((!G ||
                    ("get" in G
                      ? !Q.__esModule
                      : G.writable || G.configurable)) &&
                    (G = {
                      enumerable: !0,
                      get: function () {
                        return Q[J];
                      },
                    }),
                    Object.defineProperty(U, M, G));
                }
              : function (U, Q, J, M) {
                  (void 0 === M && (M = J), (U[M] = Q[J]));
                }),
          B =
            (this && this.__exportStar) ||
            function (U, Q) {
              for (var J in U)
                "default" !== J &&
                  !Object.prototype.hasOwnProperty.call(Q, J) &&
                  ae(Q, U, J);
            };
        (Object.defineProperty(L, "__esModule", { value: !0 }), B(ie(3895), L));
      },
      3895: (Ye, L) => {
        (Object.defineProperty(L, "__esModule", { value: !0 }),
          (L.UUIDUtils = void 0));
        var ie = (function () {
          function ae() {}
          return (
            (ae.generate = function () {
              var B = new Date().getTime();
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                function (Q) {
                  var J = ((B + 16 * Math.random()) % 16) | 0;
                  return (
                    (B = Math.floor(B / 16)),
                    ("x" == Q ? J : (3 & J) | 8).toString(16)
                  );
                },
              );
            }),
            ae
          );
        })();
        L.UUIDUtils = ie;
      },
    },
    Qs = {};
  function qs(Ye) {
    var L = Qs[Ye];
    if (void 0 !== L) return L.exports;
    var ie = (Qs[Ye] = { exports: {} });
    return (Uf[Ye].call(ie.exports, ie, ie.exports, qs), ie.exports);
  }
  (() => {
    function Ye(e, r, t, a, n, i, s) {
      try {
        var c = e[i](s),
          o = c.value;
      } catch (f) {
        return void t(f);
      }
      c.done ? r(o) : Promise.resolve(o).then(a, n);
    }
    function L(e) {
      return function () {
        var r = this,
          t = arguments;
        return new Promise(function (a, n) {
          var i = e.apply(r, t);
          function s(o) {
            Ye(i, a, n, s, c, "next", o);
          }
          function c(o) {
            Ye(i, a, n, s, c, "throw", o);
          }
          s(void 0);
        });
      };
    }
    var ie = qs(4631);
    let ae = (() => {
      class r extends ie.Model {
        constructor(a, n, i) {
          (super(ie.ModelType.EXT_AUTH),
            (this.phoneNumber = a),
            (this.license = n),
            (this.details = i));
        }
        static fromJSON(a) {
          let n = null;
          return (
            a &&
              ((n = new r("", null, null)),
              (n.phoneNumber = a.phoneNumber ? a.phoneNumber : ""),
              (n.license = a.license ? a.license : ""),
              (n.details = ie.UserDetails.fromJSON(a.details))),
            n
          );
        }
        isPro() {
          return this.getActiveLicenseExpiry() > Date.now();
        }
        getExpiryTime() {
          return this.getActiveLicenseExpiry();
        }
        getActiveLicenseExpiry() {
          return this.license?.gold?.expiryDate &&
            this.license?.gold?.expiryDate > Date.now()
            ? this.license?.gold?.expiryDate
            : 0;
        }
        isSubscription() {
          return !!this.license?.subscribed && !!this.license?.subscribed;
        }
        isReviewGiven() {
          return this.license?.gold?.reviewUrlIds?.length > 0;
        }
        isFreePlan() {
          return (
            "FREE" === this.getLicenseType() &&
            this.license?.gold?.expiryDate > Date.now()
          );
        }
        getLicenseType() {
          return this.license?.gold?.licenseType;
        }
      }
      return ((r.AUTH_KEY = "AUTH_KEY"), r);
    })();
    function B(e) {
      return "function" == typeof e;
    }
    const Q = (function U(e) {
      const t = e((a) => {
        (Error.call(a), (a.stack = new Error().stack));
      });
      return (
        (t.prototype = Object.create(Error.prototype)),
        (t.prototype.constructor = t),
        t
      );
    })(
      (e) =>
        function (t) {
          (e(this),
            (this.message = t
              ? `${t.length} errors occurred during unsubscription:\n${t.map((a, n) => `${n + 1}) ${a.toString()}`).join("\n  ")}`
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = t));
        },
    );
    function J(e, r) {
      if (e) {
        const t = e.indexOf(r);
        0 <= t && e.splice(t, 1);
      }
    }
    class M {
      constructor(r) {
        ((this.initialTeardown = r),
          (this.closed = !1),
          (this._parentage = null),
          (this._finalizers = null));
      }
      unsubscribe() {
        let r;
        if (!this.closed) {
          this.closed = !0;
          const { _parentage: t } = this;
          if (t)
            if (((this._parentage = null), Array.isArray(t)))
              for (const i of t) i.remove(this);
            else t.remove(this);
          const { initialTeardown: a } = this;
          if (B(a))
            try {
              a();
            } catch (i) {
              r = i instanceof Q ? i.errors : [i];
            }
          const { _finalizers: n } = this;
          if (n) {
            this._finalizers = null;
            for (const i of n)
              try {
                Ue(i);
              } catch (s) {
                ((r = r ?? []),
                  s instanceof Q ? (r = [...r, ...s.errors]) : r.push(s));
              }
          }
          if (r) throw new Q(r);
        }
      }
      add(r) {
        var t;
        if (r && r !== this)
          if (this.closed) Ue(r);
          else {
            if (r instanceof M) {
              if (r.closed || r._hasParent(this)) return;
              r._addParent(this);
            }
            (this._finalizers =
              null !== (t = this._finalizers) && void 0 !== t ? t : []).push(r);
          }
      }
      _hasParent(r) {
        const { _parentage: t } = this;
        return t === r || (Array.isArray(t) && t.includes(r));
      }
      _addParent(r) {
        const { _parentage: t } = this;
        this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [t, r] : r;
      }
      _removeParent(r) {
        const { _parentage: t } = this;
        t === r ? (this._parentage = null) : Array.isArray(t) && J(t, r);
      }
      remove(r) {
        const { _finalizers: t } = this;
        (t && J(t, r), r instanceof M && r._removeParent(this));
      }
    }
    function Te(e) {
      return (
        e instanceof M ||
        (e && "closed" in e && B(e.remove) && B(e.add) && B(e.unsubscribe))
      );
    }
    function Ue(e) {
      B(e) ? e() : e.unsubscribe();
    }
    M.EMPTY = (() => {
      const e = new M();
      return ((e.closed = !0), e);
    })();
    const Qe = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      },
      ar = {
        setTimeout(e, r, ...t) {
          const { delegate: a } = ar;
          return a?.setTimeout
            ? a.setTimeout(e, r, ...t)
            : setTimeout(e, r, ...t);
        },
        clearTimeout(e) {
          const { delegate: r } = ar;
          return (r?.clearTimeout || clearTimeout)(e);
        },
        delegate: void 0,
      };
    function Ut() {}
    const aa = Ai("C", void 0, void 0);
    function Ai(e, r, t) {
      return { kind: e, value: r, error: t };
    }
    let ia = null;
    class e0 extends M {
      constructor(r) {
        (super(),
          (this.isStopped = !1),
          r
            ? ((this.destination = r), Te(r) && r.add(this))
            : (this.destination = Kf));
      }
      static create(r, t, a) {
        return new wi(r, t, a);
      }
      next(r) {
        this.isStopped
          ? ki(
              (function Ti(e) {
                return Ai("N", e, void 0);
              })(r),
              this,
            )
          : this._next(r);
      }
      error(r) {
        this.isStopped
          ? ki(
              (function na(e) {
                return Ai("E", void 0, e);
              })(r),
              this,
            )
          : ((this.isStopped = !0), this._error(r));
      }
      complete() {
        this.isStopped
          ? ki(aa, this)
          : ((this.isStopped = !0), this._complete());
      }
      unsubscribe() {
        this.closed ||
          ((this.isStopped = !0),
          super.unsubscribe(),
          (this.destination = null));
      }
      _next(r) {
        this.destination.next(r);
      }
      _error(r) {
        try {
          this.destination.error(r);
        } finally {
          this.unsubscribe();
        }
      }
      _complete() {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }
    }
    const Hf = Function.prototype.bind;
    function Si(e, r) {
      return Hf.call(e, r);
    }
    class Vf {
      constructor(r) {
        this.partialObserver = r;
      }
      next(r) {
        const { partialObserver: t } = this;
        if (t.next)
          try {
            t.next(r);
          } catch (a) {
            Pn(a);
          }
      }
      error(r) {
        const { partialObserver: t } = this;
        if (t.error)
          try {
            t.error(r);
          } catch (a) {
            Pn(a);
          }
        else Pn(r);
      }
      complete() {
        const { partialObserver: r } = this;
        if (r.complete)
          try {
            r.complete();
          } catch (t) {
            Pn(t);
          }
      }
    }
    class wi extends e0 {
      constructor(r, t, a) {
        let n;
        if ((super(), B(r) || !r))
          n = { next: r ?? void 0, error: t ?? void 0, complete: a ?? void 0 };
        else {
          let i;
          this && Qe.useDeprecatedNextContext
            ? ((i = Object.create(r)),
              (i.unsubscribe = () => this.unsubscribe()),
              (n = {
                next: r.next && Si(r.next, i),
                error: r.error && Si(r.error, i),
                complete: r.complete && Si(r.complete, i),
              }))
            : (n = r);
        }
        this.destination = new Vf(n);
      }
    }
    function Pn(e) {
      Qe.useDeprecatedSynchronousErrorHandling
        ? (function Wf(e) {
            Qe.useDeprecatedSynchronousErrorHandling &&
              ia &&
              ((ia.errorThrown = !0), (ia.error = e));
          })(e)
        : (function ta(e) {
            ar.setTimeout(() => {
              const { onUnhandledError: r } = Qe;
              if (!r) throw e;
              r(e);
            });
          })(e);
    }
    function ki(e, r) {
      const { onStoppedNotification: t } = Qe;
      t && ar.setTimeout(() => t(e, r));
    }
    const Kf = {
        closed: !0,
        next: Ut,
        error: function Xf(e) {
          throw e;
        },
        complete: Ut,
      },
      Yf = ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    function zf(e) {
      return e;
    }
    let Jf = (() => {
      class e {
        constructor(t) {
          t && (this._subscribe = t);
        }
        lift(t) {
          const a = new e();
          return ((a.source = this), (a.operator = t), a);
        }
        subscribe(t, a, n) {
          const i = (function $f(e) {
            return (
              (e && e instanceof e0) ||
              ((function Zf(e) {
                return e && B(e.next) && B(e.error) && B(e.complete);
              })(e) &&
                Te(e))
            );
          })(t)
            ? t
            : new wi(t, a, n);
          return (
            (function Gf(e) {
              if (Qe.useDeprecatedSynchronousErrorHandling) {
                const r = !ia;
                if ((r && (ia = { errorThrown: !1, error: null }), e(), r)) {
                  const { errorThrown: t, error: a } = ia;
                  if (((ia = null), t)) throw a;
                }
              } else e();
            })(() => {
              const { operator: s, source: c } = this;
              i.add(
                s
                  ? s.call(i, c)
                  : c
                    ? this._subscribe(i)
                    : this._trySubscribe(i),
              );
            }),
            i
          );
        }
        _trySubscribe(t) {
          try {
            return this._subscribe(t);
          } catch (a) {
            t.error(a);
          }
        }
        forEach(t, a) {
          return new (a = t0(a))((n, i) => {
            const s = new wi({
              next: (c) => {
                try {
                  t(c);
                } catch (o) {
                  (i(o), s.unsubscribe());
                }
              },
              error: i,
              complete: n,
            });
            this.subscribe(s);
          });
        }
        _subscribe(t) {
          var a;
          return null === (a = this.source) || void 0 === a
            ? void 0
            : a.subscribe(t);
        }
        [Yf]() {
          return this;
        }
        pipe(...t) {
          return (function r0(e) {
            return 0 === e.length
              ? zf
              : 1 === e.length
                ? e[0]
                : function (t) {
                    return e.reduce((a, n) => n(a), t);
                  };
          })(t)(this);
        }
        toPromise(t) {
          return new (t = t0(t))((a, n) => {
            let i;
            this.subscribe(
              (s) => (i = s),
              (s) => n(s),
              () => a(i),
            );
          });
        }
      }
      return ((e.create = (r) => new e(r)), e);
    })();
    function t0(e) {
      var r;
      return null !== (r = e ?? Qe.Promise) && void 0 !== r ? r : Promise;
    }
    var sa = (function (e) {
      return (
        (e.TELECRM_AUTH = "TELECRM_AUTH"),
        (e.ENTERPRISE_BLOCKLIST = "TELECRM_BLOCKLIST"),
        (e.TEAMMEMBER_BLOCKLIST = "TEAMMEMBER_BLOCKLIST"),
        (e.LAST_ROUTE = "LAST_ROUTE"),
        (e.AUTO_SYNC = "AUTO_SYNC"),
        (e.LATEST_SYNC_TIMESTAMP = "LATEST_SYNC_TIMESTAMP"),
        (e.SUPPORT_GROUP_MEMBERS = "SUPPORT_GROUP_MEMBERS"),
        (e.GROUP_CREATION_DATA = "GROUP_CREATION_DATA"),
        (e.GROUP_CREATION_RESPONSE_DATA = "GROUP_CREATION_RESPONSE_DATA"),
        (e.KEY_ATTACHMENTS_SETTINGS_DATA = "KEY_ATTACHMENTS_SETTINGS_DATA"),
        e
      );
    })(sa || {});
    class Ct {
      static setStorage(r, t) {
        return new Promise((a, n) => {
          const i = {};
          ((i[r] = t),
            chrome.storage.local.set(i, () => {
              a();
            }));
        });
      }
      static getStorage(r) {
        return new Promise((t, a) => {
          chrome.storage.local.get(r, (n) => {
            t(n[r]);
          });
        });
      }
      static removeStorage(r) {
        return L(function* () {
          yield chrome.storage.local.remove([r]);
        })();
      }
      static saveTeleCRMAuth(r) {
        return Ct.setStorage(sa.TELECRM_AUTH, JSON.stringify(r || ""));
      }
      static getTeleCRMAuth() {
        return L(function* () {
          const r = yield Ct.getStorage(sa.TELECRM_AUTH);
          return r ? ae.fromJSON(JSON.parse(r)) : null;
        })();
      }
      static saveVariables(r) {
        const t = {};
        return (
          r.forEach((a) => {
            t[a.key] = a.value;
          }),
          this.saveToStorage(t)
        );
      }
      static saveToStorage(r) {
        return new Jf((t) => {
          chrome.storage.sync.set(r, () => {
            (t.next(), t.complete());
          });
        });
      }
      static loadVariables(r) {
        return this.getFromStorage(r);
      }
      static getFromStorage(r) {
        return new Promise((t, a) => {
          chrome.storage.sync.get(r, (n) => {
            t(n);
          });
        });
      }
      static clear() {
        return new Promise((r, t) => {
          chrome.storage.local.clear(function () {
            var a = chrome.runtime.lastError;
            (a && t(a), r());
          });
        });
      }
      static setLastRoute(r) {
        return Ct.setStorage(sa.LAST_ROUTE, r || "");
      }
      static getLastRoute() {
        return L(function* () {
          return yield Ct.getStorage(sa.LAST_ROUTE);
        })();
      }
      static parseBoolean(r) {
        return "true" === r;
      }
      static saveAttachmentsSettings(r) {
        let t = "";
        return (
          r && (t = JSON.stringify(r)),
          Ct.setStorage(sa.KEY_ATTACHMENTS_SETTINGS_DATA, t)
        );
      }
      static getAttachmentsSettings() {
        return L(function* () {
          let r = {};
          const t = yield Ct.getStorage(sa.KEY_ATTACHMENTS_SETTINGS_DATA);
          return (t && (r = JSON.parse(t)), r);
        })();
      }
    }
    function Dn(e, r, t) {
      return (
        (r = (function il(e) {
          var r = (function nl(e, r) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var a = t.call(e, r || "default");
              if ("object" != typeof a) return a;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === r ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof r ? r : r + "";
        })(r)) in e
          ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[r] = t),
        e
      );
    }
    function n0(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        (r &&
          (a = a.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          t.push.apply(t, a));
      }
      return t;
    }
    function Ka(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? n0(Object(t), !0).forEach(function (a) {
              Dn(e, a, t[a]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : n0(Object(t)).forEach(function (a) {
                Object.defineProperty(
                  e,
                  a,
                  Object.getOwnPropertyDescriptor(t, a),
                );
              });
      }
      return e;
    }
    var Ya = {
      countries: {
        AD: "Andorra",
        AE: "United Arab Emirates",
        AF: "Afghanistan",
        AG: "Antigua and Barbuda",
        AI: "Anguilla",
        AL: "Albania",
        AM: "Armenia",
        AO: "Angola",
        AQ: "Antarctica",
        AR: "Argentina",
        AS: "American Samoa",
        AT: "Austria",
        AU: "Australia",
        AW: "Aruba",
        AX: "\xc5land Islands",
        AZ: "Azerbaijan",
        BA: "Bosnia and Herzegovina",
        BB: "Barbados",
        BD: "Bangladesh",
        BE: "Belgium",
        BF: "Burkina Faso",
        BG: "Bulgaria",
        BH: "Bahrain",
        BI: "Burundi",
        BJ: "Benin",
        BL: "Saint Barth\xe9lemy",
        BM: "Bermuda",
        BN: "Brunei",
        BO: "Bolivia",
        BQ: "Caribbean Netherlands",
        BR: "Brazil",
        BS: "Bahamas",
        BT: "Bhutan",
        BW: "Botswana",
        BY: "Belarus",
        BZ: "Belize",
        CA: "Canada",
        CC: "Cocos Islands",
        CD: "Democratic Republic of the Congo",
        CF: "Central African Republic",
        CG: "Republic of the Congo",
        CH: "Switzerland",
        CI: "Ivory Coast",
        CK: "Cook Islands",
        CL: "Chile",
        CM: "Cameroon",
        CN: "China",
        CO: "Colombia",
        CR: "Costa Rica",
        CU: "Cuba",
        CV: "Cabo Verde",
        CW: "Cura\xe7ao",
        CX: "Christmas Island",
        CY: "Cyprus",
        CZ: "Czechia",
        DE: "Germany",
        DJ: "Djibouti",
        DK: "Denmark",
        DM: "Dominica",
        DO: "Dominican Republic",
        DZ: "Algeria",
        EC: "Ecuador",
        EE: "Estonia",
        EG: "Egypt",
        EH: "Western Sahara",
        ER: "Eritrea",
        ES: "Spain",
        ET: "Ethiopia",
        FI: "Finland",
        FJ: "Fiji",
        FK: "Falkland Islands",
        FM: "Micronesia",
        FO: "Faroe Islands",
        FR: "France",
        GA: "Gabon",
        GB: "United Kingdom",
        GD: "Grenada",
        GE: "Georgia",
        GF: "French Guiana",
        GG: "Guernsey",
        GH: "Ghana",
        GI: "Gibraltar",
        GL: "Greenland",
        GM: "Gambia",
        GN: "Guinea",
        GP: "Guadeloupe",
        GQ: "Equatorial Guinea",
        GR: "Greece",
        GS: "South Georgia and the South Sandwich Islands",
        GT: "Guatemala",
        GU: "Guam",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HK: "Hong Kong",
        HN: "Honduras",
        HR: "Croatia",
        HT: "Haiti",
        HU: "Hungary",
        ID: "Indonesia",
        IE: "Ireland",
        IL: "Israel",
        IM: "Isle of Man",
        IN: "India",
        IO: "British Indian Ocean Territory",
        IQ: "Iraq",
        IR: "Iran",
        IS: "Iceland",
        IT: "Italy",
        JE: "Jersey",
        JM: "Jamaica",
        JO: "Jordan",
        JP: "Japan",
        KE: "Kenya",
        KG: "Kyrgyzstan",
        KH: "Cambodia",
        KI: "Kiribati",
        KM: "Comoros",
        KN: "Saint Kitts and Nevis",
        KP: "North Korea",
        KR: "South Korea",
        KW: "Kuwait",
        KY: "Cayman Islands",
        KZ: "Kazakhstan",
        LA: "Laos",
        LB: "Lebanon",
        LC: "Saint Lucia",
        LI: "Liechtenstein",
        LK: "Sri Lanka",
        LR: "Liberia",
        LS: "Lesotho",
        LT: "Lithuania",
        LU: "Luxembourg",
        LV: "Latvia",
        LY: "Libya",
        MA: "Morocco",
        MC: "Monaco",
        MD: "Moldova",
        ME: "Montenegro",
        MF: "Saint Martin",
        MG: "Madagascar",
        MH: "Marshall Islands",
        MK: "North Macedonia",
        ML: "Mali",
        MM: "Myanmar",
        MN: "Mongolia",
        MO: "Macao",
        MP: "Northern Mariana Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MS: "Montserrat",
        MT: "Malta",
        MU: "Mauritius",
        MV: "Maldives",
        MW: "Malawi",
        MX: "Mexico",
        MY: "Malaysia",
        MZ: "Mozambique",
        NA: "Namibia",
        NC: "New Caledonia",
        NE: "Niger",
        NF: "Norfolk Island",
        NG: "Nigeria",
        NI: "Nicaragua",
        NL: "Netherlands",
        NO: "Norway",
        NP: "Nepal",
        NR: "Nauru",
        NU: "Niue",
        NZ: "New Zealand",
        OM: "Oman",
        PA: "Panama",
        PE: "Peru",
        PF: "French Polynesia",
        PG: "Papua New Guinea",
        PH: "Philippines",
        PK: "Pakistan",
        PL: "Poland",
        PM: "Saint Pierre and Miquelon",
        PN: "Pitcairn",
        PR: "Puerto Rico",
        PS: "Palestine",
        PT: "Portugal",
        PW: "Palau",
        PY: "Paraguay",
        QA: "Qatar",
        RE: "R\xe9union",
        RO: "Romania",
        RS: "Serbia",
        RU: "Russia",
        RW: "Rwanda",
        SA: "Saudi Arabia",
        SB: "Solomon Islands",
        SC: "Seychelles",
        SD: "Sudan",
        SE: "Sweden",
        SG: "Singapore",
        SH: "Saint Helena, Ascension and Tristan da Cunha",
        SI: "Slovenia",
        SJ: "Svalbard and Jan Mayen",
        SK: "Slovakia",
        SL: "Sierra Leone",
        SM: "San Marino",
        SN: "Senegal",
        SO: "Somalia",
        SR: "Suriname",
        SS: "South Sudan",
        ST: "Sao Tome and Principe",
        SV: "El Salvador",
        SX: "Sint Maarten",
        SY: "Syria",
        SZ: "Eswatini",
        TC: "Turks and Caicos Islands",
        TD: "Chad",
        TF: "French Southern Territories",
        TG: "Togo",
        TH: "Thailand",
        TJ: "Tajikistan",
        TK: "Tokelau",
        TL: "Timor-Leste",
        TM: "Turkmenistan",
        TN: "Tunisia",
        TO: "Tonga",
        TR: "T\xfcrkiye",
        TT: "Trinidad and Tobago",
        TV: "Tuvalu",
        TW: "Taiwan",
        TZ: "Tanzania",
        UA: "Ukraine",
        UG: "Uganda",
        UM: "United States Minor Outlying Islands",
        US: "United States of America",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VA: "Holy See",
        VC: "Saint Vincent and the Grenadines",
        VE: "Venezuela",
        VG: "Virgin Islands (UK)",
        VI: "Virgin Islands (US)",
        VN: "Vietnam",
        VU: "Vanuatu",
        WF: "Wallis and Futuna",
        WS: "Samoa",
        YE: "Yemen",
        YT: "Mayotte",
        ZA: "South Africa",
        ZM: "Zambia",
        ZW: "Zimbabwe",
      },
      timezones: {
        "Africa/Abidjan": {
          u: 0,
          c: [
            "CI",
            "BF",
            "GH",
            "GM",
            "GN",
            "IS",
            "ML",
            "MR",
            "SH",
            "SL",
            "SN",
            "TG",
          ],
        },
        "Africa/Accra": { a: "Africa/Abidjan", c: ["GH"], r: 1 },
        "Africa/Addis_Ababa": { a: "Africa/Nairobi", c: ["ET"], r: 1 },
        "Africa/Algiers": { u: 60, c: ["DZ"] },
        "Africa/Asmara": { a: "Africa/Nairobi", c: ["ER"], r: 1 },
        "Africa/Asmera": { a: "Africa/Nairobi", c: ["ER"], r: 1 },
        "Africa/Bamako": { a: "Africa/Abidjan", c: ["ML"], r: 1 },
        "Africa/Bangui": { a: "Africa/Lagos", c: ["CF"], r: 1 },
        "Africa/Banjul": { a: "Africa/Abidjan", c: ["GM"], r: 1 },
        "Africa/Bissau": { u: 0, c: ["GW"] },
        "Africa/Blantyre": { a: "Africa/Maputo", c: ["MW"], r: 1 },
        "Africa/Brazzaville": { a: "Africa/Lagos", c: ["CG"], r: 1 },
        "Africa/Bujumbura": { a: "Africa/Maputo", c: ["BI"], r: 1 },
        "Africa/Cairo": { u: 120, d: 180, c: ["EG"] },
        "Africa/Casablanca": { u: 60, d: 0, c: ["MA"] },
        "Africa/Ceuta": { u: 60, d: 120, c: ["ES"] },
        "Africa/Conakry": { a: "Africa/Abidjan", c: ["GN"], r: 1 },
        "Africa/Dakar": { a: "Africa/Abidjan", c: ["SN"], r: 1 },
        "Africa/Dar_es_Salaam": { a: "Africa/Nairobi", c: ["TZ"], r: 1 },
        "Africa/Djibouti": { a: "Africa/Nairobi", c: ["DJ"], r: 1 },
        "Africa/Douala": { a: "Africa/Lagos", c: ["CM"], r: 1 },
        "Africa/El_Aaiun": { u: 60, d: 0, c: ["EH"] },
        "Africa/Freetown": { a: "Africa/Abidjan", c: ["SL"], r: 1 },
        "Africa/Gaborone": { a: "Africa/Maputo", c: ["BW"], r: 1 },
        "Africa/Harare": { a: "Africa/Maputo", c: ["ZW"], r: 1 },
        "Africa/Johannesburg": { u: 120, c: ["ZA", "LS", "SZ"] },
        "Africa/Juba": { u: 120, c: ["SS"] },
        "Africa/Kampala": { a: "Africa/Nairobi", c: ["UG"], r: 1 },
        "Africa/Khartoum": { u: 120, c: ["SD"] },
        "Africa/Kigali": { a: "Africa/Maputo", c: ["RW"], r: 1 },
        "Africa/Kinshasa": { a: "Africa/Lagos", c: ["CD"], r: 1 },
        "Africa/Lagos": {
          u: 60,
          c: ["NG", "AO", "BJ", "CD", "CF", "CG", "CM", "GA", "GQ", "NE"],
        },
        "Africa/Libreville": { a: "Africa/Lagos", c: ["GA"], r: 1 },
        "Africa/Lome": { a: "Africa/Abidjan", c: ["TG"], r: 1 },
        "Africa/Luanda": { a: "Africa/Lagos", c: ["AO"], r: 1 },
        "Africa/Lubumbashi": { a: "Africa/Maputo", c: ["CD"], r: 1 },
        "Africa/Lusaka": { a: "Africa/Maputo", c: ["ZM"], r: 1 },
        "Africa/Malabo": { a: "Africa/Lagos", c: ["GQ"], r: 1 },
        "Africa/Maputo": {
          u: 120,
          c: ["MZ", "BI", "BW", "CD", "MW", "RW", "ZM", "ZW"],
        },
        "Africa/Maseru": { a: "Africa/Johannesburg", c: ["LS"], r: 1 },
        "Africa/Mbabane": { a: "Africa/Johannesburg", c: ["SZ"], r: 1 },
        "Africa/Mogadishu": { a: "Africa/Nairobi", c: ["SO"], r: 1 },
        "Africa/Monrovia": { u: 0, c: ["LR"] },
        "Africa/Nairobi": {
          u: 180,
          c: ["KE", "DJ", "ER", "ET", "KM", "MG", "SO", "TZ", "UG", "YT"],
        },
        "Africa/Ndjamena": { u: 60, c: ["TD"] },
        "Africa/Niamey": { a: "Africa/Lagos", c: ["NE"], r: 1 },
        "Africa/Nouakchott": { a: "Africa/Abidjan", c: ["MR"], r: 1 },
        "Africa/Ouagadougou": { a: "Africa/Abidjan", c: ["BF"], r: 1 },
        "Africa/Porto-Novo": { a: "Africa/Lagos", c: ["BJ"], r: 1 },
        "Africa/Sao_Tome": { u: 0, c: ["ST"] },
        "Africa/Timbuktu": { a: "Africa/Abidjan", c: ["ML"], r: 1 },
        "Africa/Tripoli": { u: 120, c: ["LY"] },
        "Africa/Tunis": { u: 60, c: ["TN"] },
        "Africa/Windhoek": { u: 120, c: ["NA"] },
        "America/Adak": { u: -600, d: -540, c: ["US"] },
        "America/Anchorage": { u: -540, d: -480, c: ["US"] },
        "America/Anguilla": { a: "America/Puerto_Rico", c: ["AI"], r: 1 },
        "America/Antigua": { a: "America/Puerto_Rico", c: ["AG"], r: 1 },
        "America/Araguaina": { u: -180, c: ["BR"] },
        "America/Argentina/Buenos_Aires": { u: -180, c: ["AR"] },
        "America/Argentina/Catamarca": { u: -180, c: ["AR"] },
        "America/Argentina/ComodRivadavia": {
          a: "America/Argentina/Catamarca",
          r: 1,
        },
        "America/Argentina/Cordoba": { u: -180, c: ["AR"] },
        "America/Argentina/Jujuy": { u: -180, c: ["AR"] },
        "America/Argentina/La_Rioja": { u: -180, c: ["AR"] },
        "America/Argentina/Mendoza": { u: -180, c: ["AR"] },
        "America/Argentina/Rio_Gallegos": { u: -180, c: ["AR"] },
        "America/Argentina/Salta": { u: -180, c: ["AR"] },
        "America/Argentina/San_Juan": { u: -180, c: ["AR"] },
        "America/Argentina/San_Luis": { u: -180, c: ["AR"] },
        "America/Argentina/Tucuman": { u: -180, c: ["AR"] },
        "America/Argentina/Ushuaia": { u: -180, c: ["AR"] },
        "America/Aruba": { a: "America/Puerto_Rico", c: ["AW"], r: 1 },
        "America/Asuncion": { u: -180, c: ["PY"] },
        "America/Atikokan": { a: "America/Panama", c: ["CA"], r: 1 },
        "America/Atka": { a: "America/Adak", r: 1 },
        "America/Bahia": { u: -180, c: ["BR"] },
        "America/Bahia_Banderas": { u: -360, c: ["MX"] },
        "America/Barbados": { u: -240, c: ["BB"] },
        "America/Belem": { u: -180, c: ["BR"] },
        "America/Belize": { u: -360, c: ["BZ"] },
        "America/Blanc-Sablon": { a: "America/Puerto_Rico", c: ["CA"], r: 1 },
        "America/Boa_Vista": { u: -240, c: ["BR"] },
        "America/Bogota": { u: -300, c: ["CO"] },
        "America/Boise": { u: -420, d: -360, c: ["US"] },
        "America/Buenos_Aires": { a: "America/Argentina/Buenos_Aires", r: 1 },
        "America/Cambridge_Bay": { u: -420, d: -360, c: ["CA"] },
        "America/Campo_Grande": { u: -240, c: ["BR"] },
        "America/Cancun": { u: -300, c: ["MX"] },
        "America/Caracas": { u: -240, c: ["VE"] },
        "America/Catamarca": { a: "America/Argentina/Catamarca", r: 1 },
        "America/Cayenne": { u: -180, c: ["GF"] },
        "America/Cayman": { a: "America/Panama", c: ["KY"], r: 1 },
        "America/Chicago": { u: -360, d: -300, c: ["US"] },
        "America/Chihuahua": { u: -360, c: ["MX"] },
        "America/Ciudad_Juarez": { u: -420, d: -360, c: ["MX"] },
        "America/Coral_Harbour": { a: "America/Panama", c: ["CA"], r: 1 },
        "America/Cordoba": { a: "America/Argentina/Cordoba", r: 1 },
        "America/Costa_Rica": { u: -360, c: ["CR"] },
        "America/Coyhaique": { u: -180, c: ["CL"] },
        "America/Creston": { a: "America/Phoenix", c: ["CA"], r: 1 },
        "America/Cuiaba": { u: -240, c: ["BR"] },
        "America/Curacao": { a: "America/Puerto_Rico", c: ["CW"], r: 1 },
        "America/Danmarkshavn": { u: 0, c: ["GL"] },
        "America/Dawson": { u: -420, c: ["CA"] },
        "America/Dawson_Creek": { u: -420, c: ["CA"] },
        "America/Denver": { u: -420, d: -360, c: ["US"] },
        "America/Detroit": { u: -300, d: -240, c: ["US"] },
        "America/Dominica": { a: "America/Puerto_Rico", c: ["DM"], r: 1 },
        "America/Edmonton": { u: -420, d: -360, c: ["CA"] },
        "America/Eirunepe": { u: -300, c: ["BR"] },
        "America/El_Salvador": { u: -360, c: ["SV"] },
        "America/Ensenada": { a: "America/Tijuana", r: 1 },
        "America/Fort_Nelson": { u: -420, c: ["CA"] },
        "America/Fort_Wayne": { a: "America/Indiana/Indianapolis", r: 1 },
        "America/Fortaleza": { u: -180, c: ["BR"] },
        "America/Glace_Bay": { u: -240, d: -180, c: ["CA"] },
        "America/Godthab": { a: "America/Nuuk", r: 1 },
        "America/Goose_Bay": { u: -240, d: -180, c: ["CA"] },
        "America/Grand_Turk": { u: -300, d: -240, c: ["TC"] },
        "America/Grenada": { a: "America/Puerto_Rico", c: ["GD"], r: 1 },
        "America/Guadeloupe": { a: "America/Puerto_Rico", c: ["GP"], r: 1 },
        "America/Guatemala": { u: -360, c: ["GT"] },
        "America/Guayaquil": { u: -300, c: ["EC"] },
        "America/Guyana": { u: -240, c: ["GY"] },
        "America/Halifax": { u: -240, d: -180, c: ["CA"] },
        "America/Havana": { u: -300, d: -240, c: ["CU"] },
        "America/Hermosillo": { u: -420, c: ["MX"] },
        "America/Indiana/Indianapolis": { u: -300, d: -240, c: ["US"] },
        "America/Indiana/Knox": { u: -360, d: -300, c: ["US"] },
        "America/Indiana/Marengo": { u: -300, d: -240, c: ["US"] },
        "America/Indiana/Petersburg": { u: -300, d: -240, c: ["US"] },
        "America/Indiana/Tell_City": { u: -360, d: -300, c: ["US"] },
        "America/Indiana/Vevay": { u: -300, d: -240, c: ["US"] },
        "America/Indiana/Vincennes": { u: -300, d: -240, c: ["US"] },
        "America/Indiana/Winamac": { u: -300, d: -240, c: ["US"] },
        "America/Indianapolis": { a: "America/Indiana/Indianapolis", r: 1 },
        "America/Inuvik": { u: -420, d: -360, c: ["CA"] },
        "America/Iqaluit": { u: -300, d: -240, c: ["CA"] },
        "America/Jamaica": { u: -300, c: ["JM"] },
        "America/Jujuy": { a: "America/Argentina/Jujuy", r: 1 },
        "America/Juneau": { u: -540, d: -480, c: ["US"] },
        "America/Kentucky/Louisville": { u: -300, d: -240, c: ["US"] },
        "America/Kentucky/Monticello": { u: -300, d: -240, c: ["US"] },
        "America/Knox_IN": { a: "America/Indiana/Knox", r: 1 },
        "America/Kralendijk": { a: "America/Puerto_Rico", c: ["BQ"], r: 1 },
        "America/La_Paz": { u: -240, c: ["BO"] },
        "America/Lima": { u: -300, c: ["PE"] },
        "America/Los_Angeles": { u: -480, d: -420, c: ["US"] },
        "America/Louisville": { a: "America/Kentucky/Louisville", r: 1 },
        "America/Lower_Princes": { a: "America/Puerto_Rico", c: ["SX"], r: 1 },
        "America/Maceio": { u: -180, c: ["BR"] },
        "America/Managua": { u: -360, c: ["NI"] },
        "America/Manaus": { u: -240, c: ["BR"] },
        "America/Marigot": { a: "America/Puerto_Rico", c: ["MF"], r: 1 },
        "America/Martinique": { u: -240, c: ["MQ"] },
        "America/Matamoros": { u: -360, d: -300, c: ["MX"] },
        "America/Mazatlan": { u: -420, c: ["MX"] },
        "America/Mendoza": { a: "America/Argentina/Mendoza", r: 1 },
        "America/Menominee": { u: -360, d: -300, c: ["US"] },
        "America/Merida": { u: -360, c: ["MX"] },
        "America/Metlakatla": { u: -540, d: -480, c: ["US"] },
        "America/Mexico_City": { u: -360, c: ["MX"] },
        "America/Miquelon": { u: -180, d: -120, c: ["PM"] },
        "America/Moncton": { u: -240, d: -180, c: ["CA"] },
        "America/Monterrey": { u: -360, c: ["MX"] },
        "America/Montevideo": { u: -180, c: ["UY"] },
        "America/Montreal": { a: "America/Toronto", c: ["CA"], r: 1 },
        "America/Montserrat": { a: "America/Puerto_Rico", c: ["MS"], r: 1 },
        "America/Nassau": { a: "America/Toronto", c: ["BS"], r: 1 },
        "America/New_York": { u: -300, d: -240, c: ["US"] },
        "America/Nipigon": { a: "America/Toronto", c: ["CA"], r: 1 },
        "America/Nome": { u: -540, d: -480, c: ["US"] },
        "America/Noronha": { u: -120, c: ["BR"] },
        "America/North_Dakota/Beulah": { u: -360, d: -300, c: ["US"] },
        "America/North_Dakota/Center": { u: -360, d: -300, c: ["US"] },
        "America/North_Dakota/New_Salem": { u: -360, d: -300, c: ["US"] },
        "America/Nuuk": { u: -120, d: -60, c: ["GL"] },
        "America/Ojinaga": { u: -360, d: -300, c: ["MX"] },
        "America/Panama": { u: -300, c: ["PA", "CA", "KY"] },
        "America/Pangnirtung": { a: "America/Iqaluit", r: 1 },
        "America/Paramaribo": { u: -180, c: ["SR"] },
        "America/Phoenix": { u: -420, c: ["US", "CA"] },
        "America/Port-au-Prince": { u: -300, d: -240, c: ["HT"] },
        "America/Port_of_Spain": { a: "America/Puerto_Rico", c: ["TT"], r: 1 },
        "America/Porto_Acre": { a: "America/Rio_Branco", r: 1 },
        "America/Porto_Velho": { u: -240, c: ["BR"] },
        "America/Puerto_Rico": {
          u: -240,
          c: [
            "PR",
            "AG",
            "CA",
            "AI",
            "AW",
            "BL",
            "BQ",
            "CW",
            "DM",
            "GD",
            "GP",
            "KN",
            "LC",
            "MF",
            "MS",
            "SX",
            "TT",
            "VC",
            "VG",
            "VI",
          ],
        },
        "America/Punta_Arenas": { u: -180, c: ["CL"] },
        "America/Rainy_River": { a: "America/Winnipeg", r: 1 },
        "America/Rankin_Inlet": { u: -360, d: -300, c: ["CA"] },
        "America/Recife": { u: -180, c: ["BR"] },
        "America/Regina": { u: -360, c: ["CA"] },
        "America/Resolute": { u: -360, d: -300, c: ["CA"] },
        "America/Rio_Branco": { u: -300, c: ["BR"] },
        "America/Rosario": { a: "America/Argentina/Cordoba", r: 1 },
        "America/Santa_Isabel": { a: "America/Tijuana", r: 1 },
        "America/Santarem": { u: -180, c: ["BR"] },
        "America/Santiago": { u: -240, d: -180, c: ["CL"] },
        "America/Santo_Domingo": { u: -240, c: ["DO"] },
        "America/Sao_Paulo": { u: -180, c: ["BR"] },
        "America/Scoresbysund": { u: -120, d: -60, c: ["GL"] },
        "America/Shiprock": { a: "America/Denver", r: 1 },
        "America/Sitka": { u: -540, d: -480, c: ["US"] },
        "America/St_Barthelemy": { a: "America/Puerto_Rico", c: ["BL"], r: 1 },
        "America/St_Johns": { u: -210, d: -150, c: ["CA"] },
        "America/St_Kitts": { a: "America/Puerto_Rico", c: ["KN"], r: 1 },
        "America/St_Lucia": { a: "America/Puerto_Rico", c: ["LC"], r: 1 },
        "America/St_Thomas": { a: "America/Puerto_Rico", c: ["VI"], r: 1 },
        "America/St_Vincent": { a: "America/Puerto_Rico", c: ["VC"], r: 1 },
        "America/Swift_Current": { u: -360, c: ["CA"] },
        "America/Tegucigalpa": { u: -360, c: ["HN"] },
        "America/Thule": { u: -240, d: -180, c: ["GL"] },
        "America/Thunder_Bay": { a: "America/Toronto", c: ["CA"], r: 1 },
        "America/Tijuana": { u: -480, d: -420, c: ["MX"] },
        "America/Toronto": { u: -300, d: -240, c: ["CA", "BS"] },
        "America/Tortola": { a: "America/Puerto_Rico", c: ["VG"], r: 1 },
        "America/Vancouver": { u: -480, d: -420, c: ["CA"] },
        "America/Virgin": { a: "America/Puerto_Rico", c: ["VI"], r: 1 },
        "America/Whitehorse": { u: -420, c: ["CA"] },
        "America/Winnipeg": { u: -360, d: -300, c: ["CA"] },
        "America/Yakutat": { u: -540, d: -480, c: ["US"] },
        "America/Yellowknife": { a: "America/Edmonton", r: 1 },
        "Antarctica/Casey": { u: 480, c: ["AQ"] },
        "Antarctica/Davis": { u: 420, c: ["AQ"] },
        "Antarctica/DumontDUrville": {
          a: "Pacific/Port_Moresby",
          c: ["AQ"],
          r: 1,
        },
        "Antarctica/Macquarie": { u: 600, d: 660, c: ["AU"] },
        "Antarctica/Mawson": { u: 300, c: ["AQ"] },
        "Antarctica/McMurdo": { a: "Pacific/Auckland", c: ["AQ"], r: 1 },
        "Antarctica/Palmer": { u: -180, c: ["AQ"] },
        "Antarctica/Rothera": { u: -180, c: ["AQ"] },
        "Antarctica/South_Pole": { a: "Pacific/Auckland", c: ["AQ"], r: 1 },
        "Antarctica/Syowa": { a: "Asia/Riyadh", c: ["AQ"], r: 1 },
        "Antarctica/Troll": { u: 0, d: 120, c: ["AQ"] },
        "Antarctica/Vostok": { u: 300, c: ["AQ"] },
        "Arctic/Longyearbyen": { a: "Europe/Berlin", c: ["SJ"], r: 1 },
        "Asia/Aden": { a: "Asia/Riyadh", c: ["YE"], r: 1 },
        "Asia/Almaty": { u: 300, c: ["KZ"] },
        "Asia/Amman": { u: 180, c: ["JO"] },
        "Asia/Anadyr": { u: 720, c: ["RU"] },
        "Asia/Aqtau": { u: 300, c: ["KZ"] },
        "Asia/Aqtobe": { u: 300, c: ["KZ"] },
        "Asia/Ashgabat": { u: 300, c: ["TM"] },
        "Asia/Ashkhabad": { a: "Asia/Ashgabat", r: 1 },
        "Asia/Atyrau": { u: 300, c: ["KZ"] },
        "Asia/Baghdad": { u: 180, c: ["IQ"] },
        "Asia/Bahrain": { a: "Asia/Qatar", c: ["BH"], r: 1 },
        "Asia/Baku": { u: 240, c: ["AZ"] },
        "Asia/Bangkok": { u: 420, c: ["TH", "CX", "KH", "LA", "VN"] },
        "Asia/Barnaul": { u: 420, c: ["RU"] },
        "Asia/Beirut": { u: 120, d: 180, c: ["LB"] },
        "Asia/Bishkek": { u: 360, c: ["KG"] },
        "Asia/Brunei": { a: "Asia/Kuching", c: ["BN"], r: 1 },
        "Asia/Calcutta": { a: "Asia/Kolkata", r: 1 },
        "Asia/Chita": { u: 540, c: ["RU"] },
        "Asia/Choibalsan": { a: "Asia/Ulaanbaatar", r: 1 },
        "Asia/Chongqing": { a: "Asia/Shanghai", r: 1 },
        "Asia/Chungking": { a: "Asia/Shanghai", r: 1 },
        "Asia/Colombo": { u: 330, c: ["LK"] },
        "Asia/Dacca": { a: "Asia/Dhaka", r: 1 },
        "Asia/Damascus": { u: 180, c: ["SY"] },
        "Asia/Dhaka": { u: 360, c: ["BD"] },
        "Asia/Dili": { u: 540, c: ["TL"] },
        "Asia/Dubai": { u: 240, c: ["AE", "OM", "RE", "SC", "TF"] },
        "Asia/Dushanbe": { u: 300, c: ["TJ"] },
        "Asia/Famagusta": { u: 120, d: 180, c: ["CY"] },
        "Asia/Gaza": { u: 120, d: 180, c: ["PS"] },
        "Asia/Harbin": { a: "Asia/Shanghai", r: 1 },
        "Asia/Hebron": { u: 120, d: 180, c: ["PS"] },
        "Asia/Ho_Chi_Minh": { u: 420, c: ["VN"] },
        "Asia/Hong_Kong": { u: 480, c: ["HK"] },
        "Asia/Hovd": { u: 420, c: ["MN"] },
        "Asia/Irkutsk": { u: 480, c: ["RU"] },
        "Asia/Istanbul": { a: "Europe/Istanbul", r: 1 },
        "Asia/Jakarta": { u: 420, c: ["ID"] },
        "Asia/Jayapura": { u: 540, c: ["ID"] },
        "Asia/Jerusalem": { u: 120, d: 180, c: ["IL"] },
        "Asia/Kabul": { u: 270, c: ["AF"] },
        "Asia/Kamchatka": { u: 720, c: ["RU"] },
        "Asia/Karachi": { u: 300, c: ["PK"] },
        "Asia/Kashgar": { a: "Asia/Urumqi", r: 1 },
        "Asia/Kathmandu": { u: 345, c: ["NP"] },
        "Asia/Katmandu": { a: "Asia/Kathmandu", r: 1 },
        "Asia/Khandyga": { u: 540, c: ["RU"] },
        "Asia/Kolkata": { u: 330, c: ["IN"] },
        "Asia/Krasnoyarsk": { u: 420, c: ["RU"] },
        "Asia/Kuala_Lumpur": { a: "Asia/Singapore", c: ["MY"], r: 1 },
        "Asia/Kuching": { u: 480, c: ["MY", "BN"] },
        "Asia/Kuwait": { a: "Asia/Riyadh", c: ["KW"], r: 1 },
        "Asia/Macao": { a: "Asia/Macau", r: 1 },
        "Asia/Macau": { u: 480, c: ["MO"] },
        "Asia/Magadan": { u: 660, c: ["RU"] },
        "Asia/Makassar": { u: 480, c: ["ID"] },
        "Asia/Manila": { u: 480, c: ["PH"] },
        "Asia/Muscat": { a: "Asia/Dubai", c: ["OM"], r: 1 },
        "Asia/Nicosia": { u: 120, d: 180, c: ["CY"] },
        "Asia/Novokuznetsk": { u: 420, c: ["RU"] },
        "Asia/Novosibirsk": { u: 420, c: ["RU"] },
        "Asia/Omsk": { u: 360, c: ["RU"] },
        "Asia/Oral": { u: 300, c: ["KZ"] },
        "Asia/Phnom_Penh": { a: "Asia/Bangkok", c: ["KH"], r: 1 },
        "Asia/Pontianak": { u: 420, c: ["ID"] },
        "Asia/Pyongyang": { u: 540, c: ["KP"] },
        "Asia/Qatar": { u: 180, c: ["QA", "BH"] },
        "Asia/Qostanay": { u: 300, c: ["KZ"] },
        "Asia/Qyzylorda": { u: 300, c: ["KZ"] },
        "Asia/Rangoon": { a: "Asia/Yangon", c: ["MM"], r: 1 },
        "Asia/Riyadh": { u: 180, c: ["SA", "AQ", "KW", "YE"] },
        "Asia/Saigon": { a: "Asia/Ho_Chi_Minh", r: 1 },
        "Asia/Sakhalin": { u: 660, c: ["RU"] },
        "Asia/Samarkand": { u: 300, c: ["UZ"] },
        "Asia/Seoul": { u: 540, c: ["KR"] },
        "Asia/Shanghai": { u: 480, c: ["CN"] },
        "Asia/Singapore": { u: 480, c: ["SG", "AQ", "MY"] },
        "Asia/Srednekolymsk": { u: 660, c: ["RU"] },
        "Asia/Taipei": { u: 480, c: ["TW"] },
        "Asia/Tashkent": { u: 300, c: ["UZ"] },
        "Asia/Tbilisi": { u: 240, c: ["GE"] },
        "Asia/Tehran": { u: 210, c: ["IR"] },
        "Asia/Tel_Aviv": { a: "Asia/Jerusalem", r: 1 },
        "Asia/Thimbu": { a: "Asia/Thimphu", r: 1 },
        "Asia/Thimphu": { u: 360, c: ["BT"] },
        "Asia/Tokyo": { u: 540, c: ["JP", "AU"] },
        "Asia/Tomsk": { u: 420, c: ["RU"] },
        "Asia/Ujung_Pandang": { a: "Asia/Makassar", r: 1 },
        "Asia/Ulaanbaatar": { u: 480, c: ["MN"] },
        "Asia/Ulan_Bator": { a: "Asia/Ulaanbaatar", r: 1 },
        "Asia/Urumqi": { u: 360, c: ["CN"] },
        "Asia/Ust-Nera": { u: 600, c: ["RU"] },
        "Asia/Vientiane": { a: "Asia/Bangkok", c: ["LA"], r: 1 },
        "Asia/Vladivostok": { u: 600, c: ["RU"] },
        "Asia/Yakutsk": { u: 540, c: ["RU"] },
        "Asia/Yangon": { u: 390, c: ["MM", "CC"] },
        "Asia/Yekaterinburg": { u: 300, c: ["RU"] },
        "Asia/Yerevan": { u: 240, c: ["AM"] },
        "Atlantic/Azores": { u: -60, d: 0, c: ["PT"] },
        "Atlantic/Bermuda": { u: -240, d: -180, c: ["BM"] },
        "Atlantic/Canary": { u: 0, d: 60, c: ["ES"] },
        "Atlantic/Cape_Verde": { u: -60, c: ["CV"] },
        "Atlantic/Faeroe": { a: "Atlantic/Faroe", r: 1 },
        "Atlantic/Faroe": { u: 0, d: 60, c: ["FO"] },
        "Atlantic/Jan_Mayen": { a: "Europe/Berlin", c: ["SJ"], r: 1 },
        "Atlantic/Madeira": { u: 0, d: 60, c: ["PT"] },
        "Atlantic/Reykjavik": { a: "Africa/Abidjan", c: ["IS"], r: 1 },
        "Atlantic/South_Georgia": { u: -120, c: ["GS"] },
        "Atlantic/St_Helena": { a: "Africa/Abidjan", c: ["SH"], r: 1 },
        "Atlantic/Stanley": { u: -180, c: ["FK"] },
        "Australia/ACT": { a: "Australia/Sydney", r: 1 },
        "Australia/Adelaide": { u: 570, d: 630, c: ["AU"] },
        "Australia/Brisbane": { u: 600, c: ["AU"] },
        "Australia/Broken_Hill": { u: 570, d: 630, c: ["AU"] },
        "Australia/Canberra": { a: "Australia/Sydney", r: 1 },
        "Australia/Currie": { a: "Australia/Hobart", r: 1 },
        "Australia/Darwin": { u: 570, c: ["AU"] },
        "Australia/Eucla": { u: 525, c: ["AU"] },
        "Australia/Hobart": { u: 600, d: 660, c: ["AU"] },
        "Australia/LHI": { a: "Australia/Lord_Howe", r: 1 },
        "Australia/Lindeman": { u: 600, c: ["AU"] },
        "Australia/Lord_Howe": { u: 630, d: 660, c: ["AU"] },
        "Australia/Melbourne": { u: 600, d: 660, c: ["AU"] },
        "Australia/NSW": { a: "Australia/Sydney", r: 1 },
        "Australia/North": { a: "Australia/Darwin", r: 1 },
        "Australia/Perth": { u: 480, c: ["AU"] },
        "Australia/Queensland": { a: "Australia/Brisbane", r: 1 },
        "Australia/South": { a: "Australia/Adelaide", r: 1 },
        "Australia/Sydney": { u: 600, d: 660, c: ["AU"] },
        "Australia/Tasmania": { a: "Australia/Hobart", r: 1 },
        "Australia/Victoria": { a: "Australia/Melbourne", r: 1 },
        "Australia/West": { a: "Australia/Perth", r: 1 },
        "Australia/Yancowinna": { a: "Australia/Broken_Hill", r: 1 },
        "Brazil/Acre": { a: "America/Rio_Branco", r: 1 },
        "Brazil/DeNoronha": { a: "America/Noronha", r: 1 },
        "Brazil/East": { a: "America/Sao_Paulo", r: 1 },
        "Brazil/West": { a: "America/Manaus", r: 1 },
        CET: { a: "Europe/Brussels", r: 1 },
        CST6CDT: { a: "America/Chicago", r: 1 },
        "Canada/Atlantic": { a: "America/Halifax", r: 1 },
        "Canada/Central": { a: "America/Winnipeg", r: 1 },
        "Canada/Eastern": { a: "America/Toronto", c: ["CA"], r: 1 },
        "Canada/Mountain": { a: "America/Edmonton", r: 1 },
        "Canada/Newfoundland": { a: "America/St_Johns", r: 1 },
        "Canada/Pacific": { a: "America/Vancouver", r: 1 },
        "Canada/Saskatchewan": { a: "America/Regina", r: 1 },
        "Canada/Yukon": { a: "America/Whitehorse", r: 1 },
        "Chile/Continental": { a: "America/Santiago", r: 1 },
        "Chile/EasterIsland": { a: "Pacific/Easter", r: 1 },
        Cuba: { a: "America/Havana", r: 1 },
        EET: { a: "Europe/Athens", r: 1 },
        EST: { a: "America/Panama", r: 1 },
        EST5EDT: { a: "America/New_York", r: 1 },
        Egypt: { a: "Africa/Cairo", r: 1 },
        Eire: { a: "Europe/Dublin", r: 1 },
        "Etc/GMT": { u: 0 },
        "Etc/GMT+0": { a: "Etc/GMT", r: 1 },
        "Etc/GMT+1": { u: -60 },
        "Etc/GMT+10": { u: -600 },
        "Etc/GMT+11": { u: -660 },
        "Etc/GMT+12": { u: -720 },
        "Etc/GMT+2": { u: -120 },
        "Etc/GMT+3": { u: -180 },
        "Etc/GMT+4": { u: -240 },
        "Etc/GMT+5": { u: -300 },
        "Etc/GMT+6": { u: -360 },
        "Etc/GMT+7": { u: -420 },
        "Etc/GMT+8": { u: -480 },
        "Etc/GMT+9": { u: -540 },
        "Etc/GMT-0": { a: "Etc/GMT", r: 1 },
        "Etc/GMT-1": { u: 60 },
        "Etc/GMT-10": { u: 600 },
        "Etc/GMT-11": { u: 660 },
        "Etc/GMT-12": { u: 720 },
        "Etc/GMT-13": { u: 780 },
        "Etc/GMT-14": { u: 840 },
        "Etc/GMT-2": { u: 120 },
        "Etc/GMT-3": { u: 180 },
        "Etc/GMT-4": { u: 240 },
        "Etc/GMT-5": { u: 300 },
        "Etc/GMT-6": { u: 360 },
        "Etc/GMT-7": { u: 420 },
        "Etc/GMT-8": { u: 480 },
        "Etc/GMT-9": { u: 540 },
        "Etc/GMT0": { a: "Etc/GMT", r: 1 },
        "Etc/Greenwich": { a: "Etc/GMT", r: 1 },
        "Etc/UCT": { a: "Etc/UTC", r: 1 },
        "Etc/UTC": { u: 0 },
        "Etc/Universal": { a: "Etc/UTC", r: 1 },
        "Etc/Zulu": { a: "Etc/UTC", r: 1 },
        "Europe/Amsterdam": { a: "Europe/Brussels", c: ["NL"], r: 1 },
        "Europe/Andorra": { u: 60, d: 120, c: ["AD"] },
        "Europe/Astrakhan": { u: 240, c: ["RU"] },
        "Europe/Athens": { u: 120, d: 180, c: ["GR"] },
        "Europe/Belfast": { a: "Europe/London", c: ["GB"], r: 1 },
        "Europe/Belgrade": {
          u: 60,
          d: 120,
          c: ["RS", "BA", "HR", "ME", "MK", "SI"],
        },
        "Europe/Berlin": { u: 60, d: 120, c: ["DE", "DK", "NO", "SE", "SJ"] },
        "Europe/Bratislava": { a: "Europe/Prague", c: ["SK"], r: 1 },
        "Europe/Brussels": { u: 60, d: 120, c: ["BE", "LU", "NL"] },
        "Europe/Bucharest": { u: 120, d: 180, c: ["RO"] },
        "Europe/Budapest": { u: 60, d: 120, c: ["HU"] },
        "Europe/Busingen": { a: "Europe/Zurich", c: ["DE"], r: 1 },
        "Europe/Chisinau": { u: 120, d: 180, c: ["MD"] },
        "Europe/Copenhagen": { a: "Europe/Berlin", c: ["DK"], r: 1 },
        "Europe/Dublin": { u: 0, d: 60, c: ["IE"] },
        "Europe/Gibraltar": { u: 60, d: 120, c: ["GI"] },
        "Europe/Guernsey": { a: "Europe/London", c: ["GG"], r: 1 },
        "Europe/Helsinki": { u: 120, d: 180, c: ["FI", "AX"] },
        "Europe/Isle_of_Man": { a: "Europe/London", c: ["IM"], r: 1 },
        "Europe/Istanbul": { u: 180, c: ["TR"] },
        "Europe/Jersey": { a: "Europe/London", c: ["JE"], r: 1 },
        "Europe/Kaliningrad": { u: 120, c: ["RU"] },
        "Europe/Kiev": { a: "Europe/Kyiv", r: 1 },
        "Europe/Kirov": { u: 180, c: ["RU"] },
        "Europe/Kyiv": { u: 120, d: 180, c: ["UA"] },
        "Europe/Lisbon": { u: 0, d: 60, c: ["PT"] },
        "Europe/Ljubljana": { a: "Europe/Belgrade", c: ["SI"], r: 1 },
        "Europe/London": { u: 0, d: 60, c: ["GB", "GG", "IM", "JE"] },
        "Europe/Luxembourg": { a: "Europe/Brussels", c: ["LU"], r: 1 },
        "Europe/Madrid": { u: 60, d: 120, c: ["ES"] },
        "Europe/Malta": { u: 60, d: 120, c: ["MT"] },
        "Europe/Mariehamn": { a: "Europe/Helsinki", c: ["AX"], r: 1 },
        "Europe/Minsk": { u: 180, c: ["BY"] },
        "Europe/Monaco": { a: "Europe/Paris", c: ["MC"], r: 1 },
        "Europe/Moscow": { u: 180, c: ["RU"] },
        "Europe/Nicosia": { a: "Asia/Nicosia", r: 1 },
        "Europe/Oslo": { a: "Europe/Berlin", c: ["NO"], r: 1 },
        "Europe/Paris": { u: 60, d: 120, c: ["FR", "MC"] },
        "Europe/Podgorica": { a: "Europe/Belgrade", c: ["ME"], r: 1 },
        "Europe/Prague": { u: 60, d: 120, c: ["CZ", "SK"] },
        "Europe/Riga": { u: 120, d: 180, c: ["LV"] },
        "Europe/Rome": { u: 60, d: 120, c: ["IT", "SM", "VA"] },
        "Europe/Samara": { u: 240, c: ["RU"] },
        "Europe/San_Marino": { a: "Europe/Rome", c: ["SM"], r: 1 },
        "Europe/Sarajevo": { a: "Europe/Belgrade", c: ["BA"], r: 1 },
        "Europe/Saratov": { u: 240, c: ["RU"] },
        "Europe/Simferopol": { u: 180, c: ["RU", "UA"] },
        "Europe/Skopje": { a: "Europe/Belgrade", c: ["MK"], r: 1 },
        "Europe/Sofia": { u: 120, d: 180, c: ["BG"] },
        "Europe/Stockholm": { a: "Europe/Berlin", c: ["SE"], r: 1 },
        "Europe/Tallinn": { u: 120, d: 180, c: ["EE"] },
        "Europe/Tirane": { u: 60, d: 120, c: ["AL"] },
        "Europe/Tiraspol": { a: "Europe/Chisinau", r: 1 },
        "Europe/Ulyanovsk": { u: 240, c: ["RU"] },
        "Europe/Uzhgorod": { a: "Europe/Kyiv", r: 1 },
        "Europe/Vaduz": { a: "Europe/Zurich", c: ["LI"], r: 1 },
        "Europe/Vatican": { a: "Europe/Rome", c: ["VA"], r: 1 },
        "Europe/Vienna": { u: 60, d: 120, c: ["AT"] },
        "Europe/Vilnius": { u: 120, d: 180, c: ["LT"] },
        "Europe/Volgograd": { u: 180, c: ["RU"] },
        "Europe/Warsaw": { u: 60, d: 120, c: ["PL"] },
        "Europe/Zagreb": { a: "Europe/Belgrade", c: ["HR"], r: 1 },
        "Europe/Zaporozhye": { a: "Europe/Kyiv", r: 1 },
        "Europe/Zurich": { u: 60, d: 120, c: ["CH", "DE", "LI"] },
        Factory: { u: 0 },
        GB: { a: "Europe/London", c: ["GB"], r: 1 },
        "GB-Eire": { a: "Europe/London", c: ["GB"], r: 1 },
        GMT: { a: "Etc/GMT", r: 1 },
        "GMT+0": { a: "Etc/GMT", r: 1 },
        "GMT-0": { a: "Etc/GMT", r: 1 },
        GMT0: { a: "Etc/GMT", r: 1 },
        Greenwich: { a: "Etc/GMT", r: 1 },
        HST: { a: "Pacific/Honolulu", r: 1 },
        Hongkong: { a: "Asia/Hong_Kong", r: 1 },
        Iceland: { a: "Africa/Abidjan", c: ["IS"], r: 1 },
        "Indian/Antananarivo": { a: "Africa/Nairobi", c: ["MG"], r: 1 },
        "Indian/Chagos": { u: 360, c: ["IO"] },
        "Indian/Christmas": { a: "Asia/Bangkok", c: ["CX"], r: 1 },
        "Indian/Cocos": { a: "Asia/Yangon", c: ["CC"], r: 1 },
        "Indian/Comoro": { a: "Africa/Nairobi", c: ["KM"], r: 1 },
        "Indian/Kerguelen": { a: "Indian/Maldives", c: ["TF"], r: 1 },
        "Indian/Mahe": { a: "Asia/Dubai", c: ["SC"], r: 1 },
        "Indian/Maldives": { u: 300, c: ["MV", "TF"] },
        "Indian/Mauritius": { u: 240, c: ["MU"] },
        "Indian/Mayotte": { a: "Africa/Nairobi", c: ["YT"], r: 1 },
        "Indian/Reunion": { a: "Asia/Dubai", c: ["RE"], r: 1 },
        Iran: { a: "Asia/Tehran", r: 1 },
        Israel: { a: "Asia/Jerusalem", r: 1 },
        Jamaica: { a: "America/Jamaica", r: 1 },
        Japan: { a: "Asia/Tokyo", c: ["JP"], r: 1 },
        Kwajalein: { a: "Pacific/Kwajalein", r: 1 },
        Libya: { a: "Africa/Tripoli", r: 1 },
        MET: { a: "Europe/Brussels", r: 1 },
        MST: { a: "America/Phoenix", r: 1 },
        MST7MDT: { a: "America/Denver", r: 1 },
        "Mexico/BajaNorte": { a: "America/Tijuana", r: 1 },
        "Mexico/BajaSur": { a: "America/Mazatlan", r: 1 },
        "Mexico/General": { a: "America/Mexico_City", r: 1 },
        NZ: { a: "Pacific/Auckland", c: ["NZ"], r: 1 },
        "NZ-CHAT": { a: "Pacific/Chatham", r: 1 },
        Navajo: { a: "America/Denver", r: 1 },
        PRC: { a: "Asia/Shanghai", r: 1 },
        PST8PDT: { a: "America/Los_Angeles", r: 1 },
        "Pacific/Apia": { u: 780, c: ["WS"] },
        "Pacific/Auckland": { u: 720, d: 780, c: ["NZ", "AQ"] },
        "Pacific/Bougainville": { u: 660, c: ["PG"] },
        "Pacific/Chatham": { u: 765, d: 825, c: ["NZ"] },
        "Pacific/Chuuk": { a: "Pacific/Port_Moresby", c: ["FM"], r: 1 },
        "Pacific/Easter": { u: -360, d: -300, c: ["CL"] },
        "Pacific/Efate": { u: 660, c: ["VU"] },
        "Pacific/Enderbury": { a: "Pacific/Kanton", r: 1 },
        "Pacific/Fakaofo": { u: 780, c: ["TK"] },
        "Pacific/Fiji": { u: 720, c: ["FJ"] },
        "Pacific/Funafuti": { a: "Pacific/Tarawa", c: ["TV"], r: 1 },
        "Pacific/Galapagos": { u: -360, c: ["EC"] },
        "Pacific/Gambier": { u: -540, c: ["PF"] },
        "Pacific/Guadalcanal": { u: 660, c: ["SB", "FM"] },
        "Pacific/Guam": { u: 600, c: ["GU", "MP"] },
        "Pacific/Honolulu": { u: -600, c: ["US"] },
        "Pacific/Johnston": { a: "Pacific/Honolulu", c: ["UM"], r: 1 },
        "Pacific/Kanton": { u: 780, c: ["KI"] },
        "Pacific/Kiritimati": { u: 840, c: ["KI"] },
        "Pacific/Kosrae": { u: 660, c: ["FM"] },
        "Pacific/Kwajalein": { u: 720, c: ["MH"] },
        "Pacific/Majuro": { a: "Pacific/Tarawa", c: ["MH"], r: 1 },
        "Pacific/Marquesas": { u: -570, c: ["PF"] },
        "Pacific/Midway": { a: "Pacific/Pago_Pago", c: ["UM"], r: 1 },
        "Pacific/Nauru": { u: 720, c: ["NR"] },
        "Pacific/Niue": { u: -660, c: ["NU"] },
        "Pacific/Norfolk": { u: 660, d: 720, c: ["NF"] },
        "Pacific/Noumea": { u: 660, c: ["NC"] },
        "Pacific/Pago_Pago": { u: -660, c: ["AS", "UM"] },
        "Pacific/Palau": { u: 540, c: ["PW"] },
        "Pacific/Pitcairn": { u: -480, c: ["PN"] },
        "Pacific/Pohnpei": { a: "Pacific/Guadalcanal", c: ["FM"], r: 1 },
        "Pacific/Ponape": { a: "Pacific/Guadalcanal", c: ["FM"], r: 1 },
        "Pacific/Port_Moresby": { u: 600, c: ["PG", "AQ", "FM"] },
        "Pacific/Rarotonga": { u: -600, c: ["CK"] },
        "Pacific/Saipan": { a: "Pacific/Guam", c: ["MP"], r: 1 },
        "Pacific/Samoa": { a: "Pacific/Pago_Pago", c: ["AS"], r: 1 },
        "Pacific/Tahiti": { u: -600, c: ["PF"] },
        "Pacific/Tarawa": { u: 720, c: ["KI", "MH", "TV", "UM", "WF"] },
        "Pacific/Tongatapu": { u: 780, c: ["TO"] },
        "Pacific/Truk": { a: "Pacific/Port_Moresby", c: ["FM"], r: 1 },
        "Pacific/Wake": { a: "Pacific/Tarawa", c: ["UM"], r: 1 },
        "Pacific/Wallis": { a: "Pacific/Tarawa", c: ["WF"], r: 1 },
        "Pacific/Yap": { a: "Pacific/Port_Moresby", c: ["FM"], r: 1 },
        Poland: { a: "Europe/Warsaw", r: 1 },
        Portugal: { a: "Europe/Lisbon", r: 1 },
        ROC: { a: "Asia/Taipei", r: 1 },
        ROK: { a: "Asia/Seoul", r: 1 },
        Singapore: { a: "Asia/Singapore", c: ["SG"], r: 1 },
        Turkey: { a: "Europe/Istanbul", r: 1 },
        UCT: { a: "Etc/UTC", r: 1 },
        "US/Alaska": { a: "America/Anchorage", r: 1 },
        "US/Aleutian": { a: "America/Adak", r: 1 },
        "US/Arizona": { a: "America/Phoenix", c: ["US"], r: 1 },
        "US/Central": { a: "America/Chicago", r: 1 },
        "US/East-Indiana": { a: "America/Indiana/Indianapolis", r: 1 },
        "US/Eastern": { a: "America/New_York", r: 1 },
        "US/Hawaii": { a: "Pacific/Honolulu", r: 1 },
        "US/Indiana-Starke": { a: "America/Indiana/Knox", r: 1 },
        "US/Michigan": { a: "America/Detroit", r: 1 },
        "US/Mountain": { a: "America/Denver", r: 1 },
        "US/Pacific": { a: "America/Los_Angeles", r: 1 },
        "US/Samoa": { a: "Pacific/Pago_Pago", c: ["AS"], r: 1 },
        UTC: { a: "Etc/UTC", r: 1 },
        Universal: { a: "Etc/UTC", r: 1 },
        "W-SU": { a: "Europe/Moscow", r: 1 },
        WET: { a: "Europe/Lisbon", r: 1 },
        Zulu: { a: "Etc/UTC", r: 1 },
      },
    };
    function s0(e) {
      var r = Math.floor(Math.abs(e) / 60),
        t = e % 60;
      return ""
        .concat(e < 0 ? "-" : "+")
        .concat(c0(r), ":")
        .concat(c0(t));
    }
    function c0(e) {
      var r = Math.abs(e);
      return "".concat(r < 10 ? "0" : "").concat(r);
    }
    Object.keys(Ya.timezones);
    var za = {};
    let Al = (() => {
      class r {
        constructor(
          a,
          n,
          i,
          s,
          c,
          o = r.BUY_FRAME_DEFAULT_URL,
          f = !1,
          l = 10,
          h,
          d,
          x,
        ) {
          ((this.DEFAULT_COOKIES = ["origin", "clickid", "campaignid"]),
            (this.reviewMode = !1),
            (this.freeMessageLimit = 10),
            (this.waSenderCookies = this.DEFAULT_COOKIES),
            (this.suggestBan = a),
            (this.banner = n),
            (this.bannerIframeLink = i),
            (this.helpNumber = s),
            (this.buyFrameLink = o),
            (this.reviewMode = f),
            (this.freeMessageLimit = l),
            (this.waSenderCookies = h),
            (this.autoRenewalLink = d),
            (this.manageRenewalLink = x),
            (this.onBoardingFrameURL = c));
        }
        static fromJSON(a) {
          let n = null;
          return (
            a &&
              ((n = new r(
                {},
                {},
                "",
                "",
                "",
                r.BUY_FRAME_DEFAULT_URL,
                !1,
                10,
                [],
                "",
                "",
              )),
              (n.suggestBan = a.suggestBan ? a.suggestBan : {}),
              (n.banner = a.banner ? a.banner : {}),
              (n.bannerIframeLink = a.bannerIframeLink
                ? a.bannerIframeLink
                : ""),
              (n.helpNumber = a.helpNumber ? a.helpNumber : ""),
              (n.buyFrameLink = a.buyFrameLink
                ? a.buyFrameLink
                : r.BUY_FRAME_DEFAULT_URL),
              (n.reviewMode = !!a.reviewMode && a.reviewMode),
              (n.freeMessageLimit = a.freeMessageLimit
                ? a.freeMessageLimit
                : 10),
              (n.waSenderCookies = a.waSenderCookies
                ? a.waSenderCookies
                : n.DEFAULT_COOKIES),
              (n.autoRenewalLink = a.autoRenewalLink ? a.autoRenewalLink : ""),
              (n.manageRenewalLink = a.manageRenewalLink
                ? a.manageRenewalLink
                : ""),
              (n.onBoardingFrameURL = a.onBoardingFrameURL
                ? a.onBoardingFrameURL
                : "")),
            n
          );
        }
        get countries() {
          return (function Ja(e) {
            return (
              za[e] ||
                (function pl(e) {
                  e && ((za[e.name] = e), Object.keys(e));
                })(
                  (function ul(e, r) {
                    var t = e.timezones[r];
                    if (!t) return null;
                    var a = t.a,
                      n = void 0 === a ? null : a,
                      s = Ka(Ka({}, n ? e.timezones[n] : {}), e.timezones[r]),
                      c = s.c || [],
                      o = s.u,
                      f = Number.isInteger(s.d) ? s.d : o,
                      l = {
                        name: r,
                        countries: c,
                        utcOffset: o,
                        utcOffsetStr: s0(o),
                        dstOffset: f,
                        dstOffsetStr: s0(f),
                        aliasOf: n,
                      };
                    return (t.r && (l.deprecated = !0), l);
                  })(Ya, e),
                ),
              za[e] ? Ka({}, za[e]) : null
            );
          })(Intl.DateTimeFormat().resolvedOptions().timeZone)?.countries;
        }
        bannerEnabled(a) {
          return (
            !this.banner ||
            0 === Object.keys(this.banner).length ||
            this.isAllowed(a, this.banner)
          );
        }
        suggestBanEnabled(a) {
          return this.isAllowed(a, this.suggestBan);
        }
        isAllowed(a, n) {
          const i = a + "wasender";
          let s = 0;
          for (let l = 0; l < i.length; l++)
            ((s = (s << 5) - s + i.charCodeAt(l)), (s |= 0));
          const c = Math.abs(s % 100),
            o = this.countries.find((l) => Object.keys(n).includes(l)),
            f = n[o] || n?.ALL || 0;
          return f?.[0] <= c && c <= f?.[1];
        }
      }
      return (
        (r.BUY_FRAME_DEFAULT_URL =
          "https://wasender.com/modal.html?nocache=true"),
        r
      );
    })();
    class Fi {
      constructor(r, t, a, n, i, s, c, o, f, l) {
        ((this.broadcastId = r),
          (this.broadcastName = t),
          (this.fileName = a),
          (this.nextMessageTime = n),
          (this.operation = i),
          (this.isPaused = s),
          (this.isFinished = c),
          (this.startTime = o),
          (this.report = f),
          (this.stopReason = l));
      }
      static fromJSON(r) {
        let t = null;
        return (
          r &&
            ((t = new Fi("", "", "", 0, "", !1, !1, 0, null, null)),
            (t.broadcastId = r.broadcastId ? r.broadcastId : ""),
            (t.broadcastName = r.broadcastName ? r.broadcastName : ""),
            (t.fileName = r.fileName ? r.fileName : ""),
            (t.nextMessageTime = r.nextMessageTime ? r.nextMessageTime : 0),
            (t.operation = r.operation ? r.operation : ""),
            (t.isPaused = !!r.isPaused && r.isPaused),
            (t.isFinished = !!r.isFinished && r.isFinished),
            (t.startTime = r.startTime ? r.startTime : 0),
            (t.report = r.report ? Ri.fromJSON(r.report) : null),
            (t.stopReason = r.stopReason ? r.stopReason : null)),
          t
        );
      }
      getBroadcastStats() {
        let r = new ie.BroadcastStats(0, 0, 0, 0, 0);
        return (
          this.report &&
            ((r.totalMessages = this.report.messages.length),
            (r.sent = this.report.status.filter(
              (t) => t === ie.Operation.STATUS_SENT,
            ).length),
            (r.pending = this.report.status.filter(
              (t) => t === ie.Operation.STATUS_PENDING,
            ).length),
            (r.failed = this.report.status.filter(
              (t) =>
                t === ie.Operation.STATUS_FAILED ||
                t === ie.Operation.STATUS_SKIPPED,
            ).length),
            (r.blocked = this.report.status.filter(
              (t) => t === ie.Operation.STATUS_BLOCKED,
            ).length)),
          r
        );
      }
      getPercentCompleted() {
        let r = 0;
        if (this.report) {
          const t = this.report.messages.length,
            a = this.report.status.filter(
              (n) => n !== ie.Operation.STATUS_PENDING,
            ).length;
          r = Math.floor((a / t) * 100);
        }
        return r;
      }
    }
    class Ri {
      constructor(r, t, a, n, i, s, c, o, f) {
        ((this.isFinished = r),
          (this.operation = t),
          (this.isPaused = a),
          (this.numbers = n),
          (this.messages = i),
          (this.status = s),
          (this.nextMessageIndex = c),
          (this.isPro = o),
          (this.isAttachment = f));
      }
      static fromJSON(r) {
        let t = new Ri(!1, "", !1, [], [], [], 0, !1, !1);
        return (
          r &&
            ((t.isFinished = !!r.isFinished && r.isFinished),
            (t.operation = r.operation ? r.operation : ""),
            (t.isPaused = !!r.isPaused && r.isPaused),
            (t.numbers = r.numbers
              ? r.numbers.map((a) => ie.WAContactNumbers.fromJSON(a))
              : []),
            (t.messages = r.messages ? r.messages : []),
            (t.status = r.status ? r.status : []),
            (t.nextMessageIndex = r.nextMessageIndex ? r.nextMessageIndex : 0),
            (t.isPro = !!r.isPro && r.isPro),
            (t.isAttachment = !!r.isAttachment && r.isAttachment)),
          t
        );
      }
    }
    var l0 = (function (e) {
      return (
        (e.WHATSAPP_NOT_LOADED = "Whatsapp not loaded"),
        (e.TELECRM_AUTH_NOT_FOUND = "TELECRM_AUTH_NOT_FOUND"),
        (e.SUPPORT_GROUP_INFO_NOT_FOUND = "SUPPORT_GROUP_INFO_NOT_FOUND"),
        (e.INVALID_MEMBERS = "INVALID_MEMBERS"),
        (e.API_KEY_NOT_FOUND = "API_KEY_NOT_FOUND"),
        (e.FAILED_TO_UPDATE_TASK = "Failed to update task"),
        (e.NO_RESPONSE = "NO_RESPONSE"),
        (e.NO_VIEW_FOUND = "NO_VIEW_FOUND"),
        (e.INSUFFICIENT_INFO = "INSUFFICIENT_INFO"),
        (e.WORKER_NOT_SUPPORTED = "WORKER_NOT_SUPPORTED"),
        e
      );
    })(l0 || {});
    class Gt {
      static sendMsgToExtension(r) {
        return new Promise((t, a) => {
          try {
            chrome.runtime.sendMessage(r, (n) => {
              t(n);
            });
          } catch (n) {
            (console.log(n), a(n));
          }
        });
      }
      static getActiveTab() {
        return new Promise((r) => {
          chrome.tabs?.query({ active: !0, currentWindow: !0 }, function (t) {
            r(t[0].id);
          });
        });
      }
      static sendMsgToActiveTab(r) {
        return this.getActiveTab().then((t) => this.sendMessageToTab(r, t));
      }
      static sendMessageToTab(r, t) {
        return new Promise((a, n) => {
          null != t &&
            t >= 0 &&
            chrome.tabs.sendMessage(t || 0, r, function (i) {
              chrome.runtime.lastError && n(chrome.runtime.lastError);
              try {
                if (i) {
                  const s = ie.ModelUtils.fromJSON(i);
                  a(s);
                } else n(l0.NO_RESPONSE);
              } catch (s) {
                console.log("error in send message to tab", s);
              }
            });
        });
      }
    }
    var yt = (function (e) {
        return (
          (e.CONTENT = "CONTENT"),
          (e.POPUP = "POPUP"),
          (e.BACKGROUND_JS = "BACKGROUND_JS"),
          e
        );
      })(yt || {}),
      He = (function (e) {
        return (
          (e.MSG_LIB_DOWNLOAD_CONTACTS = "MSG_LIB_DOWNLOAD_CONTACTS"),
          (e.GET_CURRENT_URL = "GET_CURRENT_URL"),
          (e.GET_CURRENT_USER = "GET_CURRENT_USER"),
          (e.LIBHOOK_READY = "LIBHOOK_READY"),
          (e.USER_INIT = "USER_INIT"),
          (e.GET_CURRENT_GROUP = "GET_CURRENT_GROUP"),
          (e.NEW_GROUP_OPENED = "NEW_GROUP_OPENED"),
          (e.SHOW_SUPPORT_GROUP_INFO = "SHOW_SUPPORT_GROUP_INFO"),
          (e.HIDE_SUPPORT_GROUP_INFO = "HIDE_SUPPORT_GROUP_INFO"),
          (e.OPEN_SUPPORT_GROUP_TICKETS = "OPEN_SUPPORT_GROUP_TICKETS"),
          (e.BULK_GROUP_MESSAGE = "BULK_GROUP_MESSAGE"),
          (e.ALL_USERS_GROUP = "ALL_USERS_GROUP"),
          (e.MSG_SEND_MESSAGE = "MSG_SEND_MESSAGE"),
          (e.MSG_VALIDATE_NUMBER = "MSG_VALIDATE_NUMBER"),
          (e.MSG_MESSAGE_RESULTS = "MSG_MESSAGE_RESULTS"),
          (e.MSG_CLEAR_PROGRESS = "MSG_CLEAR_PROGRESS"),
          (e.MSG_NEXT_MESSAGE_IN_TIME = "MSG_NEXT_MESSAGE_IN_TIME"),
          (e.MSG_SETUP_BATCH = "MSG_SETUP_BATCH"),
          (e.MSG_GET_MESSAGE_RESULTS = "MSG_GET_MESSAGE_RESULTS"),
          (e.MSG_PAUSE = "MSG_PAUSE"),
          (e.MSG_CANCEL_OPERATION = "MSG_CANCEL_OPERATION"),
          (e.MSG_RESUME = "MSG_RESUME"),
          (e.MSG_STOP = "MSG_STOP"),
          (e.SET_ACTIVE_WHATSAPP_TAB = "SET_ACTIVE_WHATSAPP_TAB"),
          (e.CREATE_GROUP = "CREATE_GROUP"),
          (e.MSG_SET_ATTACHMENTS = "MSG_SET_ATTACHMENTS"),
          (e.MSG_CACHE_ATTACHMENT_BACKGROUND =
            "MSG_CACHE_ATTACHMENT_BACKGROUND"),
          (e.MSG_CLEAR_ATTACHMENTS = "MSG_CLEAR_ATTACHMENTS"),
          (e.MSG_GET_ATTACHMENT_BACKGROUND = "MSG_GET_ATTACHMENT_BACKGROUND"),
          (e.MSG_GET_ATTACHMENT = "MSG_GET_ATTACHMENT"),
          (e.MSG_LIB_GET_USER_GROUPS = "MSG_LIB_GET_USER_GROUPS"),
          (e.CACHE_DATA = "CACHE_DATA"),
          (e.GET_CACHE_DATA = "GET_CACHE_DATA"),
          (e.MSG_FILTER_NUMBERS = "MSG_FILTER_NUMBERS"),
          (e.MSG_LIB_GET_USER_LABELS = "MSG_LIB_GET_USER_LABELS"),
          (e.GET_CONTACTS = "GET_CONTACTS"),
          (e.CLOSE_FRAME = "CLOSE_FRAME"),
          (e.OPEN_FRAME = "OPEN_FRAME"),
          (e.UNINSTALL_URL = "UNINSTALL_URL"),
          (e.API_LOG_ADDS = "API_LOG_ADDS"),
          (e.API_GET_LICENSE = "API_GET_LICENSE"),
          (e.API_GET_USER_DETAILS = "API_GET_USER_DETAILS"),
          (e.API_GET_APP_CONFIG = "API_GET_APP_CONFIG"),
          (e.API_UPDATE_DETAILS = "API_UPDATE_DETAILS"),
          (e.API_UPLOAD_TO_S3 = "API_UPLOAD_TO_S3"),
          (e.API_GET_REPORT_PRESIGNED_URL = "API_GET_REPORT_PRESIGNED_URL"),
          (e.API_POST_BROADCAST_STATS = "API_POST_BROADCAST_STATS"),
          (e.API_IS_CONTACT_BLOCKED = "API_IS_CONTACT_BLOCKED"),
          (e.API_LOG_AMPLITUDE = "API_LOG_AMPLITUDE"),
          (e.API_CREATE_LEAD = "API_CREATE_LEAD"),
          e
        );
      })(He || {});
    class ca {
      constructor(r, t, a) {
        ((this.from = r), (this.subject = t), (this.data = a));
      }
    }
    function ut(e, r) {
      return Ni.apply(this, arguments);
    }
    function Ni() {
      return (Ni = L(function* (e, r) {
        const t = yield Gt.sendMsgToExtension({
          from: yt.CONTENT,
          subject: e,
          data: r,
        });
        return (
          console.log("Response from background for subject", e, "is", t),
          t
        );
      })).apply(this, arguments);
    }
    const Bn = new (class Cl {
      constructor(r) {
        this.storage = r;
      }
      createLead(r) {
        return ut(He.API_CREATE_LEAD, { properties: r });
      }
      setUserAuth(r) {
        var t = this;
        return L(function* () {
          const a = (function () {
              var i = L(function* () {
                return ut(He.API_GET_LICENSE, { phoneNumber: r });
              });
              return function () {
                return i.apply(this, arguments);
              };
            })(),
            n = (function () {
              var i = L(function* () {
                return yield t.getUserDetails(r);
              });
              return function () {
                return i.apply(this, arguments);
              };
            })();
          try {
            const [i, s] = yield Promise.all([a(), n()]);
            if (i && i.licensedetails) {
              const o = new ae(r, i.licensedetails, s),
                f = yield t.storage.get(ae.AUTH_KEY),
                l = ae.fromJSON(f);
              return (
                l && l.isFreePlan() && o.isPro(),
                t.storage.set(ae.AUTH_KEY, o),
                o
              );
            }
            return (console.warn("No license data found"), null);
          } catch (i) {
            return (console.error("Error in setUserAuth", i), null);
          }
        })();
      }
      updateDetails(r, t) {
        return L(function* () {
          const a = yield ut(He.API_UPDATE_DETAILS, {
            phoneNumber: r,
            details: t,
          });
          return new ae(r, a.message, a.message.details);
        })();
      }
      getAppData(r) {
        return L(function* () {
          const t = yield ut(He.API_GET_APP_CONFIG, { phoneNumber: r });
          return Al.fromJSON(t.message);
        })();
      }
      getSelectors(r) {
        return L(function* () {
          return {
            SELECTOR_APP_WA_ME_LINK: "#app .app-wrapper-web span",
            SELECTOR_IMAGE_CURRENT_CHAT_WINDOW: "#main header img",
            SELECTOR_TOP_RIBBON_CURRENT_CHAT_WINDOW:
              "#main header [role=button]",
            SELECTOR_SIDE_BAR_PHONE_NUMBER:
              ".selectable-text.invisible-space.copyable-text ._3Tk1z,.selectable-text.copyable-text ._1Kn3o._3O1wx",
            SELECTOR_LOGGEDIN_USER_DETAILS_BUTTON:
              'header [data-icon="default-user"]',
            SELECTOR_CLOSE_LOGGEDIN_USER_DETAILS_BUTTON:
              'span[data-icon="back-light"],span[data-icon="back"]',
            SELECTOR_LOGGEDIN_USER_PROFILE_IMAGE: "#side header img",
            SELECTOR_WHATSAPP_APP: "#app",
            SELECTOR_CURRENT_CHAT_WINDOW_TITLE: 'header [dir="auto"]',
            SELECTOR_INVALID_WHATSAPP_NUMBER_TEXT_ENVELOPE:
              '[data-testid="popup-controls-ok"]',
            SELECTOR_INVALID_WHATSAPP_NUMBER_LOADER_SVG:
              '[data-testid="popup-controls-cancel"]',
            SELECTOR_INVALID_WHATSAPP_NUMBER_TEXT_ENVELOPE_JQUERY:
              '[data-animate-modal-popup="true"] button:contains(OK)',
            SELECTOR_INVALID_WHATSAPP_NUMBER_LOADER_SVG_JQUERY:
              '[data-animate-modal-popup="true"] button:contains(Cancel)',
            SELECTOR_LINK_PREVIEW_SELECTOR:
              '._2VC-w [role="button"],._3P_7M [role="button"]',
            SELECTOR_WHATSAPP_FOOTER: "footer",
            SELECTOR_SEND_BUTTON: "[data-icon=send]",
            SELECTOR_ADD_ATTACHMENT_BUTTON: "[data-icon=clip]",
            SELECTOR_ADD_PHOTO_ATTACHMENT_BUTTON:
              "[data-icon=image],[data-icon=attach-image],[data-icon=attach-image-old]",
            SELECTOR_ADD_DOCUMENT_ATTACHMENT_BUTTON:
              "[data-icon=document],[data-icon=attach-document],[data-icon=attach-document-old]",
            SELECTOR_FILE_MENU_INPUT: "input",
            SELECTOR_FORWARD_BUTTON: "[data-icon=send-light],[data-icon=send]",
            SELECTOR_FORWARD_CHAT: "[data-icon=forward-chat]",
            SELECTOR_ATTACHMENT_COUNT:
              ".YZNwM.uslS5,._3ZYWe._2g59E,.qpqWq._3O1wx._1Yoli",
            SELECTOR_ALBUM_ATTRIBUTE_NAME: "data-id",
            SELECTOR_ALBUM_ATTRIBUTE_VALUE: "album-true",
            SELECTOR_ATTACHMENT_IMAGE:
              ".gDOmN img, .xOg_4 img, ._1kqM- img,img._1-59F._3Oxpo",
            SELECTOR_ATTACHMENT_VEDIO:
              ".video-thumb .eD3kt,.video-thumb ._2MrqQ,._2MrqQ",
            SELECTOR_ATTACHMENT_FILE:
              'a._3_4_I,a._4NdIu,[data-icon="audio-download"]',
            SELECTOR_ATTACHMENT_FILE_PREVIEW:
              "button._1rnRi._23vfb ._1kOOx,button._1UTQ6._1s_fV ._1VkQG",
            SELECTOR_ATTACHMENT_FILE_NAME: "._1VzZY,._3-8er",
            SELECTOR_ATTACHMENT_GIFF: ".f-0-U,._14qwl",
            SELECTOR_ATTACHMENT_CONTACT: "._3Nkcb,._1QRcr",
            SELECTOR_ATTACHMENT_AUDIO: '[data-icon="audio-file"]',
            SELECTOR_ATTACHMENT_AUDIO_DURATION: "._3umVQ",
            SELECTOR_OUTGOING_MESSAGE: ".vW7d1.message-out,.message-out ",
            SELECTOR_OUTGOING_MESSAGE_FORWARD_BUTTON:
              '[data-icon="forward-chat"]',
            SELECTOR_FORWARD_MODAL: "[data-animate-modal-body]",
            SELECTOR_FORWARD_MODAL_USER_TITLE: "._3vPI2 span[dir]",
            SELECTOR_GROUP_NAME_NODE:
              "#main header ._3-cMa._3Whw5,#main header ._1hI5g._ccCW._1VzZY, #main header ._35k-1._1adfa._3-8er",
            SELECTOR_GROUP_TITLE_NODE:
              "#main header .DP7CM span,#main header ._2Gdma._2amHe span,#main header .YmixP.fKfSX",
            SELECTOR_GROUP_DETAILS_CLOSE_BUTTON: '[data-icon="x"]',
            SELECTOR_GROUP_DETAILS_OPEN_BUTTON: "#main header [role=button]",
            SELECTOR_EXPAND_ALL_GROUP_MEMEBERS_BUTTTON: '[data-icon="down"]',
            SELCTOR_GROUP_MEMBER:
              "._1qDvT._2wPpw .-GlrD._2xoTX ._210SC,._32vnm._2k4Ax ._2aBzC",
            SELCTOR_GROUP_MEMBER_TITLE:
              "._3dtfX ._3ko75._5h6Y_._3Whw5,._1hI5g._ccCW._1VzZY",
            SELCTOR_GROUP_MEMBER_EXTRAINFO:
              '._1_1Jb span[dir="auto"],._3rGLp span[dir="auto"]',
            SELCTOR_GROUP_SCROLL_NODE: "._1qDvT._2wPpw,._3Xjbn._1RHZR",
            SELECTOR_WHATSAPP_TEMPLATE_ENVELOPE: "._1BFYt,._1AwiL",
            SELECTOR_CHATS: "#pane-side ._3m_Xw",
            SELECTOR_CHAT_DATETIME: "._3dtfX .m61XR,._1c_mC ._2gsiG",
            SELECTOR_CONTACTS_SCROLL_NODE: "._1qDvT._3R02z,._3Xjbn._3jNGW",
            SELECTOR_APP_LOADED_CLASS_MARKER: "app-wrapper-web",
            SELECTOR_GROUP_DOWNLOAD_LINK:
              "._3nq_A ._3All._3NrAe .PVMjB:first-child, .VPvMz .chGSa.LhZF7 ._2wfYK:first-child",
            SELECTOR_GROP_DOWNLOAD_LINK_BUTTON_CLASS: "PVMjB,_2wfYK",
            SELECTOR_PROGRESS_SELECTOR: "#side header ._1MXsz",
            SELECTOR_TEMPLATE_UI: "#main footer .copyable-text.selectable-text",
            SELECTOR_PROFILE_PIC_MUTATION:
              "#side header ._1BjNO,#side header ._3LtPa",
            SELECTOR_INCOMING_MESSAGE: ".message-in>div",
            SELECTOR_INCOMING_MESSAGE_EMOJI_ELEMENT: ".Nm1g1._22AX6",
            SELECTOR_LIKE_BUTTON: ".p3_M1",
            LIBHOOK_SELECTOR_STORE: "Store",
            LIBHOOK_SELECTOR_CONN: "Store.Conn",
            LIBHOOK_SELECTOR_CHAT: "Store.Chat",
            LIBHOOK_SELECTOR_CONTACT: "Store.Contact",
            LIBHOOK_SELECTOR_CONTACT_MODEL: "Store.Contact._models",
            LIBHOOK_SELECTOR_BUSINESSPROFILE: "Store.BusinessProfile",
            LIBHOOK_SELECTOR_WAPQUERY: "Store.WapQuery",
            LIBHOOK_SELECTOR_GROUPMETADATA: "Store.GroupMetadata",
            LIBHOOK_SELECTOR_SENDMESSAGEPROTOTYPE: "Store.sendMessagePrototype",
            LIBHOOK_SELECTOR_MSG: "Store.Msg",
            LIBHOOK_SELECTOR_MSG_MODELS: "Store.Msg._models",
            LIBHOOK_SELECTOR_LABEL: "Store.Label",
            LIBHOOK_SELECTOR_PRESENCE: "Store.Presence2",
            LIBHOOK_SELECTOR_VCARD: "Store.Vcard",
            LIBHOOK_SELECTOR_PRESENCE_FIRST: "Store.Presence",
            STYLE_BLUR_RECENT_MESSAGE:
              "._37FrU { filter: blur(4px); } ._37FrU:hover { filter: blur(0); }",
            STYLE_BLUR_CONTACT_NUMBER:
              "._3vPI2, ._ccCW, ._3WYXy, ._13NKt { filter: blur(4px); } ._3vPI2:hover, ._ccCW:hover, ._3WYXy:hover, ._13NKt:hover { filter: blur(0); }",
            STYLE_BLUR_PROFILE_PICS:
              "._8hzr9 { filter: blur(4px); } ._8hzr9:hover { filter: blur(0); }",
            STYLE_BLUR_CONTACT_MSGS:
              ".message-out, .message-in { filter: blur(4px); } .message-out:hover, .message-in:hover { filter: blur(0); }",
            STYLE_ID_BLUR_RECENT_MESSAGE: "wsn-blr-rcnt-msgs",
            STYLE_ID_BLUR_CONTACT_NUMBER: "wsn-blr-cnct-nms",
            STYLE_ID_BLUR_PROFILE_PICS: "wsn-blr-pp",
            STYLE_ID_BLUR_CONTACT_MSGS: "wsn-blr-conv-msgs",
            LIBHOOK_WEBPACK: "webpackChunkwhatsapp_web_client",
            SHELL_LOADED_INDICATOR: "#pane-side",
            LWM: "eyJpbnMiOiJpbXBvcnROYW1lc3BhY2UiLCJtb2RzIjpbeyJtb2RfayI6IkNvbnRhY3QiLCJtb2QiOiJXQVdlYkNvbnRhY3RDb2xsZWN0aW9uIiwibW9kX3JlZiI6IkNvbnRhY3RDb2xsZWN0aW9uIn0seyJtb2RfayI6IkNvbm4iLCJtb2QiOiJXQVdlYkNvbm5Nb2RlbCIsIm1vZF9yZWYiOiJDb25uIn0seyJtb2RfayI6IkNoYXQiLCJtb2QiOiJXQVdlYkNoYXRDb2xsZWN0aW9uIiwibW9kX3JlZiI6IkNoYXRDb2xsZWN0aW9uIn0seyJtb2RfayI6IkJ1c2luZXNzUHJvZmlsZSIsIm1vZCI6IldBV2ViQnVzaW5lc3NQcm9maWxlQ29sbGVjdGlvbiIsIm1vZF9yZWYiOiJCdXNpbmVzc1Byb2ZpbGVDb2xsZWN0aW9uIn0seyJtb2RfayI6Ik1zZyIsIm1vZCI6IldBV2ViTXNnQ29sbGVjdGlvbiIsIm1vZF9yZWYiOiJNc2dDb2xsZWN0aW9uIn0seyJtb2RfayI6IkxhYmVsIiwibW9kIjoiV0FXZWJMYWJlbENvbGxlY3Rpb24iLCJtb2RfcmVmIjoiTGFiZWxDb2xsZWN0aW9uIn0seyJtb2RfayI6IlByZXNlbmNlMiIsIm1vZCI6IldBV2ViUHJlc2VuY2VDb2xsZWN0aW9uIiwibW9kX3JlZiI6IlByZXNlbmNlQ29sbGVjdGlvbiJ9LHsibW9kX2siOiJHcm91cE1ldGFkYXRhIiwibW9kIjoiV0FXZWJHcm91cE1ldGFkYXRhQ29sbGVjdGlvbiIsIm1vZF9yZWYiOiJkZWZhdWx0In0seyJtb2RfayI6IlNlbmRUZXh0TXNnVG9DaGF0IiwibW9kIjoiV0FXZWJTZW5kVGV4dE1zZ0NoYXRBY3Rpb24iLCJtb2RfcmVmIjoic2VuZFRleHRNc2dUb0NoYXQifSx7Im1vZF9rIjoiTWVkaWFDb2xsZWN0aW9uIiwibW9kIjoiV0FXZWJBdHRhY2hNZWRpYUNvbGxlY3Rpb24iLCJtb2RfcmVmIjoiZGVmYXVsdCJ9LHsibW9kX2siOiJXaWQiLCJtb2QiOiJXQVdlYldpZCJ9LHsibW9kX2siOiJXYXAiLCJtb2QiOiJXQVdlYkdyb3VwQ3JlYXRlSm9iIn0seyJtb2RfayI6Ikdyb3VwSW52aXRlIiwibW9kIjoiV0FXZWJHcm91cEludml0ZUpvYiJ9LHsibW9kX2siOiJXaWRGYWN0b3J5IiwibW9kIjoiV0FXZWJXaWRGYWN0b3J5In0seyJtb2RfayI6IlBhcnRpY2lwYW50cyIsIm1vZCI6IldBV2ViTW9kaWZ5UGFydGljaXBhbnRzR3JvdXBBY3Rpb24ifV19",
            RMG: "RMG",
          };
        })();
      }
      uploadReport(r, t, a) {
        return L(function* () {
          try {
            const n = Fi.fromJSON(a),
              [i] = yield Promise.all([
                ut(He.API_GET_REPORT_PRESIGNED_URL, {
                  phoneNumber: r,
                  broadcastId: t,
                }),
                ut(He.API_POST_BROADCAST_STATS, {
                  phoneNumber: r,
                  broadcastId: t,
                  stats: n.getBroadcastStats(),
                }),
              ]);
            if (i) {
              const { uploadUrl: s, originalS3URL: c } = i;
              return (
                yield ut(He.API_UPLOAD_TO_S3, {
                  uploadUrl: s,
                  content: JSON.stringify(a),
                  contentType: "application/json",
                }),
                c
              );
            }
            return "";
          } catch (n) {
            return (console.log("Error in uploadReport", n), "");
          }
        })();
      }
      uploadToS3(r, t, a) {
        return L(function* () {
          return ut(He.API_UPLOAD_TO_S3, {
            uploadUrl: r,
            content: t,
            contentType: a,
          });
        })();
      }
      getUserDetails(r) {
        return L(function* () {
          const t = yield ut(He.API_GET_USER_DETAILS, { phoneNumber: r });
          return ie.UserDetails.fromJSON(t);
        })();
      }
      isContactBlocked(r, t) {
        return L(function* () {
          return ut(He.API_IS_CONTACT_BLOCKED, {
            userPhoneNumber: r,
            numberToBeChecked: t,
          });
        })();
      }
      logAmplitude(r, t, a = {}, n = {}) {
        return L(function* () {
          yield ut(He.API_LOG_AMPLITUDE, {
            eventType: r,
            userId: t,
            eventProperties: a,
            userProperties: n,
          });
        })();
      }
    })(
      new (class kl {
        set(r, t) {
          Ct.setStorage(r, t);
        }
        get(r) {
          return L(function* () {
            return yield Ct.getStorage(r);
          })();
        }
      })(),
    );
    var ya = (function (e) {
      return (
        (e.INSTANCE_TYPE_CONTENT = "INSTANCE_TYPE_CONTENT"),
        (e.INSTANCE_TYPE_LIB = "INSTANCE_TYPE_LIB"),
        e
      );
    })(ya || {});
    class et {
      constructor(r, t) {
        ((this.subject = r),
          (this.payload = t),
          (this.id = this.getDefaultId()));
      }
      getDefaultId() {
        return `${Date.now()}${Math.floor(1e4 * Math.random() + 1)}`;
      }
    }
    class u0 {
      constructor(r, t) {
        ((this.subject = r.subject),
          (this.id = r.id),
          (this.payload = r.payload),
          (this.response = t));
      }
    }
    class h0 {
      constructor(r, t) {
        ((this.subject = r.subject),
          (this.id = r.id),
          (this.payload = r.payload),
          (this.error = t.message || "Error"));
      }
    }
    class yl {
      constructor(r, t) {
        ((this.CONTENT_TO_LIBHOOK_ELEMENT_ID = "wa_contentToLibHook"),
          (this.LIBHOOK_TO_CONTENT_ELEMENT_ID = "wa_libHookToContent"),
          (this.callBackMap = new Map()),
          (this.contentToLibNode = null),
          (this.libToContentNode = null),
          (this.instanceType = r),
          (this.requestHandler = t));
      }
      init() {
        this.instanceType === ya.INSTANCE_TYPE_CONTENT
          ? this.initContentChannel()
          : this.initLibChannel();
      }
      initContentChannel() {
        (this.createDivElement(
          document.body,
          this.CONTENT_TO_LIBHOOK_ELEMENT_ID,
        ),
          this.createDivElement(
            document.body,
            this.LIBHOOK_TO_CONTENT_ELEMENT_ID,
          ));
        const r = document.querySelector(
          `#${this.LIBHOOK_TO_CONTENT_ELEMENT_ID} `,
        );
        if (!r) throw new Error("Unable to find Libhook Div");
        this.addObserver(r, this.domObserverCallBack.bind(this));
      }
      initLibChannel() {
        const r = this.getContentToLibNode();
        if (!r) throw new Error("Unable to find Content to Lib Hook");
        this.addObserver(r, this.domObserverCallBack.bind(this));
      }
      getLibToContentNode() {
        return (
          this.libToContentNode ||
            (this.libToContentNode = document.querySelector(
              `#${this.LIBHOOK_TO_CONTENT_ELEMENT_ID} `,
            )),
          this.libToContentNode
        );
      }
      getContentToLibNode() {
        return (
          this.contentToLibNode ||
            (this.contentToLibNode = document.querySelector(
              `#${this.CONTENT_TO_LIBHOOK_ELEMENT_ID} `,
            )),
          this.contentToLibNode
        );
      }
      domObserverCallBack(r, t) {
        var a = this;
        r.filter((n) => n.addedNodes.length).forEach((n) => {
          n.addedNodes.forEach(
            (function () {
              var i = L(function* (s) {
                const c = a.recieveMessage(s);
                c.hasOwnProperty("error")
                  ? a.processError(c)
                  : c.hasOwnProperty("response")
                    ? a.processResponse(c)
                    : c && a.processRequest(c);
              });
              return function (s) {
                return i.apply(this, arguments);
              };
            })(),
          );
        });
      }
      processRequest(r) {
        this.requestHandler(r);
      }
      processResponse(r) {
        if (r) {
          const t = this.callBackMap.get(r.id);
          if (t && t.resolve) {
            this.callBackMap.delete(r.id);
            try {
              if (r.response) {
                const a = ie.ModelUtils.fromJSON(r.response);
                t.resolve(a);
              } else t.resolve(r.response);
            } catch (a) {
              (console.log("error in process reponse", a), t.reject(a));
            }
          } else
            console.warn(
              `No Resolve Call back found for message: ${r.id} ${r.subject} `,
            );
        }
      }
      processError(r) {
        if (r) {
          const t = this.callBackMap.get(r.id);
          t && t.reject
            ? (this.callBackMap.delete(r.id), t.reject(r.error))
            : console.warn(
                `No Reject Call back found for message: ${r.id} ${r.subject} `,
              );
        }
      }
      sendMessage(r, t) {
        r
          ? this.createDivElement(r, t.id, t)
          : console.log("can't send message on Null");
      }
      recieveMessage(r) {
        if (r) {
          const t = this.decodeMessage(r);
          return (r.parentNode?.removeChild(r), t);
        }
      }
      decodeMessage(r) {
        return JSON.parse(r.value);
      }
      addObserver(r, t) {
        new (
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver
        )(t).observe(r, { attributes: !0, childList: !0, subtree: !0 });
      }
      createDivElement(r, t, a = null) {
        if (!r) throw new Error("Missing ParentNode");
        if (!t) throw new Error("Missing Id");
        {
          const n = document.createElement("input");
          ((n.id = t),
            (n.style.display = "none"),
            (n.value = JSON.stringify(a)),
            r.appendChild(n));
        }
      }
      sendResponse(r, t) {
        this.sendMessage(
          this.instanceType === ya.INSTANCE_TYPE_CONTENT
            ? this.getContentToLibNode()
            : this.getLibToContentNode(),
          new u0(r, t),
        );
      }
      sendError(r, t) {
        this.sendMessage(
          this.instanceType === ya.INSTANCE_TYPE_CONTENT
            ? this.getContentToLibNode()
            : this.getLibToContentNode(),
          new h0(r, t),
        );
      }
      sendRequest(r, t) {
        (t
          ? this.callBackMap.set(r.id, t)
          : console.warn(
              `No CallBacks Object found for message: ${r.id} ${r.subject} `,
            ),
          this.sendMessage(
            this.instanceType === ya.INSTANCE_TYPE_CONTENT
              ? this.getContentToLibNode()
              : this.getLibToContentNode(),
            r,
          ));
      }
    }
    var Kr = (function (e) {
        return (
          (e.SET_SELECTORS = "SET_SELECTORS"),
          (e.GET_USER_INFO = "GET_USER_INFO"),
          (e.GET_USER_SAVED_CONTACTS = "GET_USER_SAVED_CONTACT"),
          (e.GET_ACTIVE_GROUP_NAME = "GET_ACTIVE_CHAT"),
          (e.ALL_USERS_GROUP = "ALL_USERS_GROUP"),
          (e.SEND_MESSAGE_TO_CONTACT = "SEND_MESSAGE_TO_CONTACT"),
          (e.CREATE_GROUP = "CREATE_GROUP"),
          (e.SEND_ATTACHMENTS = "SEND_ATTACHMENTS"),
          (e.REQUEST_SEND_ATTACH_FILE = "REQUEST_SEND_ATTACH_FILE"),
          (e.REQUEST_GET_USER_GROUPS_INFO = "REQUEST_GET_USER_GROUPS_INFO"),
          (e.REQUEST_GET_LABEL_MEMBERS = "REQUEST_GET_LABEL_MEMBERS"),
          (e.REQUEST_GET_GROUP_MEMBERS = "REQUEST_GET_GROUP_MEMBERS"),
          (e.REQUEST_GET_USER_ONLY_WA_CONTACT =
            "REQUEST_GET_USER_ONLY_WA_CONTACT"),
          (e.REQUEST_GET_USER_SAVED_CONTACT = "REQUEST_GET_USER_SAVED_CONTACT"),
          (e.REQUEST_GET_USER_LABELS = "REQUEST_GET_USER_LABELS"),
          (e.GET_MESSAGES = "GET_MESSAGES"),
          e
        );
      })(Kr || {}),
      Za = (function (e) {
        return (
          (e.NOTIFY_CHANNEL_READY = "NOTIFY_CHANNEL_READY"),
          (e.NOTIFY_LIB_READY = "NOTIFY_LIBHOOK_READY"),
          (e.SEND_LIBHOOK_LISTENER_EVENT = "SEND_LIBHOOK_LISTENER_EVENT"),
          (e.NOTIFY_UNPAIRED = "NOTIFY_UNPAIRED"),
          e
        );
      })(Za || {});
    class Fl {
      constructor(r) {
        ((this.libHookListener = r),
          (this.channel = new yl(
            ya.INSTANCE_TYPE_CONTENT,
            this.eventLoop.bind(this),
          )),
          this.channel.init());
      }
      eventLoop(r) {
        var t = this;
        return L(function* () {
          if (r && r.id && r.subject)
            switch (r.subject) {
              case Za.NOTIFY_CHANNEL_READY:
                (t.channel.sendResponse(r, ""),
                  yield t.libHookListener.onChannelReady());
                break;
              case Za.NOTIFY_LIB_READY:
                (t.channel.sendResponse(r, ""),
                  yield t.libHookListener.onLibReady());
                break;
              case Za.SEND_LIBHOOK_LISTENER_EVENT:
                (t.channel.sendResponse(r, ""),
                  yield t.libHookListener.onNewEvent(r.payload));
                break;
              case Za.NOTIFY_UNPAIRED:
                (t.channel.sendResponse(r, ""),
                  yield t.libHookListener.notifyUnpaired(r.payload));
            }
        })();
      }
      setSelectors(r) {
        return new Promise((t, a) => {
          const n = new et(Kr.SET_SELECTORS, r);
          this.channel.sendRequest(n, { resolve: t, reject: a });
        });
      }
      getUserInfo() {
        return new Promise((r, t) => {
          const a = new et(Kr.GET_USER_INFO, null);
          this.channel.sendRequest(a, { resolve: r, reject: t });
        });
      }
      sendMessageToContact(r, t) {
        return new Promise((a, n) => {
          const i = new et(Kr.SEND_MESSAGE_TO_CONTACT, {
            phoneNumber: r,
            message: t,
          });
          this.channel.sendRequest(i, { resolve: a, reject: n });
        });
      }
      sendFileToActiveChat(r, t) {
        return new Promise((a, n) => {
          const i = new et(Kr.REQUEST_SEND_ATTACH_FILE, {
            phoneNumber: r,
            caption: t,
          });
          this.channel.sendRequest(i, { resolve: a, reject: n });
        });
      }
      getUserGroups() {
        var r = this;
        return L(function* () {
          return new Promise((t, a) => {
            const n = new et(Kr.REQUEST_GET_USER_GROUPS_INFO, null);
            r.channel.sendRequest(n, { resolve: t, reject: a });
          });
        })();
      }
      getChatMsgs(r, t = {}) {
        var a = this;
        return L(function* () {
          return new Promise((n, i) => {
            const s = new et(Kr.GET_MESSAGES, { chatId: r, searchOptions: t });
            a.channel.sendRequest(s, { resolve: n, reject: i });
          });
        })();
      }
      sendSetAttachmentMessage(r) {
        return new Promise((t, a) => {
          const n = new et(Kr.SEND_ATTACHMENTS, { attachments: r });
          this.channel.sendRequest(n, { resolve: t, reject: a });
        });
      }
      getLabelMembersMessage(r) {
        return new Promise((t, a) => {
          const n = new et(Kr.REQUEST_GET_LABEL_MEMBERS, r);
          this.channel.sendRequest(n, { resolve: t, reject: a });
        });
      }
      getUserGroupMemberContact(r) {
        return new Promise((t, a) => {
          const n = new et(Kr.REQUEST_GET_GROUP_MEMBERS, r);
          this.channel.sendRequest(n, { resolve: t, reject: a });
        });
      }
      getUserWhatsAppContacts() {
        return new Promise((r, t) => {
          const a = new et(Kr.REQUEST_GET_USER_ONLY_WA_CONTACT, null);
          this.channel.sendRequest(a, { resolve: r, reject: t });
        });
      }
      getUserSavedContacts() {
        return new Promise((r, t) => {
          const a = new et(Kr.REQUEST_GET_USER_SAVED_CONTACT, null);
          this.channel.sendRequest(a, { resolve: r, reject: t });
        });
      }
      getUserLabelsMessage() {
        return new Promise((r, t) => {
          const a = new et(Kr.REQUEST_GET_USER_LABELS, null);
          this.channel.sendRequest(a, { resolve: r, reject: t });
        });
      }
    }
    var $a = { version: "0.18.5" },
      Yr = 1200,
      oa = 1252,
      Rl = [
        874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257,
        1258, 1e4,
      ],
      Oi = {
        0: 1252,
        1: 65001,
        2: 65001,
        77: 1e4,
        128: 932,
        129: 949,
        130: 1361,
        134: 936,
        136: 950,
        161: 1253,
        162: 1254,
        163: 1258,
        177: 1255,
        178: 1256,
        186: 1257,
        204: 1251,
        222: 874,
        238: 1250,
        255: 1252,
        69: 6969,
      },
      Un = function (e) {
        -1 != Rl.indexOf(e) && (oa = Oi[0] = e);
      },
      rt = function (e) {
        ((Yr = e), Un(e));
      };
    var We,
      ja = function (r) {
        return String.fromCharCode(r);
      },
      Ii = function (r) {
        return String.fromCharCode(r);
      },
      ir = null,
      Wt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function qa(e) {
      for (
        var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, c = 0, o = 0, f = 0;
        f < e.length;
      )
        ((i = (t = e.charCodeAt(f++)) >> 2),
          (s = ((3 & t) << 4) | ((a = e.charCodeAt(f++)) >> 4)),
          (c = ((15 & a) << 2) | ((n = e.charCodeAt(f++)) >> 6)),
          (o = 63 & n),
          isNaN(a) ? (c = o = 64) : isNaN(n) && (o = 64),
          (r += Wt.charAt(i) + Wt.charAt(s) + Wt.charAt(c) + Wt.charAt(o)));
      return r;
    }
    function zr(e) {
      var r = "",
        i = 0,
        s = 0,
        c = 0,
        o = 0;
      e = e.replace(/[^\w\+\/\=]/g, "");
      for (var f = 0; f < e.length;)
        ((i = Wt.indexOf(e.charAt(f++))),
          (s = Wt.indexOf(e.charAt(f++))),
          (r += String.fromCharCode((i << 2) | (s >> 4))),
          64 !== (c = Wt.indexOf(e.charAt(f++))) &&
            (r += String.fromCharCode(((15 & s) << 4) | (c >> 2))),
          64 !== (o = Wt.indexOf(e.charAt(f++))) &&
            (r += String.fromCharCode(((3 & c) << 6) | o)));
      return r;
    }
    var be = (function () {
        return (
          typeof Buffer < "u" &&
          typeof process < "u" &&
          typeof process.versions < "u" &&
          !!process.versions.node
        );
      })(),
      Ft = (function () {
        if (typeof Buffer < "u") {
          var e = !Buffer.from;
          if (!e)
            try {
              Buffer.from("foo", "utf8");
            } catch {
              e = !0;
            }
          return e
            ? function (r, t) {
                return t ? new Buffer(r, t) : new Buffer(r);
              }
            : Buffer.from.bind(Buffer);
        }
        return function () {};
      })();
    function Ht(e) {
      return be
        ? Buffer.alloc
          ? Buffer.alloc(e)
          : new Buffer(e)
        : typeof Uint8Array < "u"
          ? new Uint8Array(e)
          : new Array(e);
    }
    function x0(e) {
      return be
        ? Buffer.allocUnsafe
          ? Buffer.allocUnsafe(e)
          : new Buffer(e)
        : typeof Uint8Array < "u"
          ? new Uint8Array(e)
          : new Array(e);
    }
    var Jr = function (r) {
      return be
        ? Ft(r, "binary")
        : r.split("").map(function (t) {
            return 255 & t.charCodeAt(0);
          });
    };
    function en(e) {
      if (typeof ArrayBuffer > "u") return Jr(e);
      for (
        var r = new ArrayBuffer(e.length), t = new Uint8Array(r), a = 0;
        a != e.length;
        ++a
      )
        t[a] = 255 & e.charCodeAt(a);
      return r;
    }
    function Vt(e) {
      if (Array.isArray(e))
        return e
          .map(function (a) {
            return String.fromCharCode(a);
          })
          .join("");
      for (var r = [], t = 0; t < e.length; ++t)
        r[t] = String.fromCharCode(e[t]);
      return r.join("");
    }
    var Tr = be
        ? function (e) {
            return Buffer.concat(
              e.map(function (r) {
                return Buffer.isBuffer(r) ? r : Ft(r);
              }),
            );
          }
        : function (e) {
            if (typeof Uint8Array < "u") {
              var r = 0,
                t = 0;
              for (r = 0; r < e.length; ++r) t += e[r].length;
              var a = new Uint8Array(t),
                n = 0;
              for (r = 0, t = 0; r < e.length; t += n, ++r)
                if (((n = e[r].length), e[r] instanceof Uint8Array))
                  a.set(e[r], t);
                else {
                  if ("string" == typeof e[r]) throw "wtf";
                  a.set(new Uint8Array(e[r]), t);
                }
              return a;
            }
            return [].concat.apply(
              [],
              e.map(function (i) {
                return Array.isArray(i) ? i : [].slice.call(i);
              }),
            );
          },
      Rr = /\u0000/g,
      rn = /[\u0001-\u0006]/g;
    function Ra(e) {
      for (var r = "", t = e.length - 1; t >= 0;) r += e.charAt(t--);
      return r;
    }
    function ht(e, r) {
      var t = "" + e;
      return t.length >= r ? t : cr("0", r - t.length) + t;
    }
    function bi(e, r) {
      var t = "" + e;
      return t.length >= r ? t : cr(" ", r - t.length) + t;
    }
    function Hn(e, r) {
      var t = "" + e;
      return t.length >= r ? t : t + cr(" ", r - t.length);
    }
    var m0 = Math.pow(2, 32);
    function Na(e, r) {
      return e > m0 || e < -m0
        ? (function bl(e, r) {
            var t = "" + Math.round(e);
            return t.length >= r ? t : cr("0", r - t.length) + t;
          })(e, r)
        : (function Pl(e, r) {
            var t = "" + e;
            return t.length >= r ? t : cr("0", r - t.length) + t;
          })(Math.round(e), r);
    }
    function Vn(e, r) {
      return (
        e.length >= 7 + (r = r || 0) &&
        103 == (32 | e.charCodeAt(r)) &&
        101 == (32 | e.charCodeAt(r + 1)) &&
        110 == (32 | e.charCodeAt(r + 2)) &&
        101 == (32 | e.charCodeAt(r + 3)) &&
        114 == (32 | e.charCodeAt(r + 4)) &&
        97 == (32 | e.charCodeAt(r + 5)) &&
        108 == (32 | e.charCodeAt(r + 6))
      );
    }
    var _0 = [
        ["Sun", "Sunday"],
        ["Mon", "Monday"],
        ["Tue", "Tuesday"],
        ["Wed", "Wednesday"],
        ["Thu", "Thursday"],
        ["Fri", "Friday"],
        ["Sat", "Saturday"],
      ],
      Pi = [
        ["J", "Jan", "January"],
        ["F", "Feb", "February"],
        ["M", "Mar", "March"],
        ["A", "Apr", "April"],
        ["M", "May", "May"],
        ["J", "Jun", "June"],
        ["J", "Jul", "July"],
        ["A", "Aug", "August"],
        ["S", "Sep", "September"],
        ["O", "Oct", "October"],
        ["N", "Nov", "November"],
        ["D", "Dec", "December"],
      ],
      we = {
        0: "General",
        1: "0",
        2: "0.00",
        3: "#,##0",
        4: "#,##0.00",
        9: "0%",
        10: "0.00%",
        11: "0.00E+00",
        12: "# ?/?",
        13: "# ??/??",
        14: "m/d/yy",
        15: "d-mmm-yy",
        16: "d-mmm",
        17: "mmm-yy",
        18: "h:mm AM/PM",
        19: "h:mm:ss AM/PM",
        20: "h:mm",
        21: "h:mm:ss",
        22: "m/d/yy h:mm",
        37: "#,##0 ;(#,##0)",
        38: "#,##0 ;[Red](#,##0)",
        39: "#,##0.00;(#,##0.00)",
        40: "#,##0.00;[Red](#,##0.00)",
        45: "mm:ss",
        46: "[h]:mm:ss",
        47: "mmss.0",
        48: "##0.0E+0",
        49: "@",
        56: '"\u4e0a\u5348/\u4e0b\u5348 "hh"\u6642"mm"\u5206"ss"\u79d2 "',
      },
      p0 = {
        5: 37,
        6: 38,
        7: 39,
        8: 40,
        23: 0,
        24: 0,
        25: 0,
        26: 0,
        27: 14,
        28: 14,
        29: 14,
        30: 14,
        31: 14,
        50: 14,
        51: 14,
        52: 14,
        53: 14,
        54: 14,
        55: 14,
        56: 14,
        57: 14,
        58: 14,
        59: 1,
        60: 2,
        61: 3,
        62: 4,
        67: 9,
        68: 10,
        69: 12,
        70: 13,
        71: 14,
        72: 14,
        73: 15,
        74: 16,
        75: 17,
        76: 20,
        77: 21,
        78: 22,
        79: 45,
        80: 46,
        81: 47,
        82: 0,
      },
      Ml = {
        5: '"$"#,##0_);\\("$"#,##0\\)',
        63: '"$"#,##0_);\\("$"#,##0\\)',
        6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
        64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
        7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
        65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
        8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
        66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
        41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
        42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
        43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
        44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)',
      };
    function Xn(e, r, t) {
      for (
        var a = e < 0 ? -1 : 1,
          n = e * a,
          i = 0,
          s = 1,
          c = 0,
          o = 1,
          f = 0,
          l = 0,
          h = Math.floor(n);
        f < r &&
        ((c = (h = Math.floor(n)) * s + i), (l = h * f + o), !(n - h < 5e-8));
      )
        ((n = 1 / (n - h)), (i = s), (s = c), (o = f), (f = l));
      if ((l > r && (f > r ? ((l = o), (c = i)) : ((l = f), (c = s))), !t))
        return [0, a * c, l];
      var d = Math.floor((a * c) / l);
      return [d, a * c - d * l, l];
    }
    function Xt(e, r, t) {
      if (e > 2958465 || e < 0) return null;
      var a = 0 | e,
        n = Math.floor(86400 * (e - a)),
        i = 0,
        s = [],
        c = {
          D: a,
          T: n,
          u: 86400 * (e - a) - n,
          y: 0,
          m: 0,
          d: 0,
          H: 0,
          M: 0,
          S: 0,
          q: 0,
        };
      if (
        (Math.abs(c.u) < 1e-6 && (c.u = 0),
        r && r.date1904 && (a += 1462),
        c.u > 0.9999 &&
          ((c.u = 0), 86400 == ++n && ((c.T = n = 0), ++a, ++c.D)),
        60 === a)
      )
        ((s = t ? [1317, 10, 29] : [1900, 2, 29]), (i = 3));
      else if (0 === a) ((s = t ? [1317, 8, 29] : [1900, 1, 0]), (i = 6));
      else {
        a > 60 && --a;
        var o = new Date(1900, 0, 1);
        (o.setDate(o.getDate() + a - 1),
          (s = [o.getFullYear(), o.getMonth() + 1, o.getDate()]),
          (i = o.getDay()),
          a < 60 && (i = (i + 6) % 7),
          t &&
            (i = (function Vl(e, r) {
              r[0] -= 581;
              var t = e.getDay();
              return (e < 60 && (t = (t + 6) % 7), t);
            })(o, s)));
      }
      return (
        (c.y = s[0]),
        (c.m = s[1]),
        (c.d = s[2]),
        (c.S = n % 60),
        (n = Math.floor(n / 60)),
        (c.M = n % 60),
        (n = Math.floor(n / 60)),
        (c.H = n),
        (c.q = i),
        c
      );
    }
    var v0 = new Date(1899, 11, 31, 0, 0, 0),
      Bl = v0.getTime(),
      Ul = new Date(1900, 2, 1, 0, 0, 0);
    function g0(e, r) {
      var t = e.getTime();
      return (
        r ? (t -= 1262304e5) : e >= Ul && (t += 864e5),
        (t - (Bl + 6e4 * (e.getTimezoneOffset() - v0.getTimezoneOffset()))) /
          864e5
      );
    }
    function Di(e) {
      return -1 == e.indexOf(".")
        ? e
        : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
    }
    function fa(e, r) {
      switch (typeof e) {
        case "string":
          return e;
        case "boolean":
          return e ? "TRUE" : "FALSE";
        case "number":
          return (0 | e) === e
            ? e.toString(10)
            : (function tn(e) {
                var t,
                  r = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E);
                return (
                  (t =
                    r >= -4 && r <= -1
                      ? e.toPrecision(10 + r)
                      : Math.abs(r) <= 9
                        ? (function Wl(e) {
                            var r = e < 0 ? 12 : 11,
                              t = Di(e.toFixed(12));
                            return t.length <= r ||
                              (t = e.toPrecision(10)).length <= r
                              ? t
                              : e.toExponential(5);
                          })(e)
                        : 10 === r
                          ? e.toFixed(10).substr(0, 12)
                          : (function Hl(e) {
                              var r = Di(e.toFixed(11));
                              return r.length > (e < 0 ? 12 : 11) ||
                                "0" === r ||
                                "-0" === r
                                ? e.toPrecision(6)
                                : r;
                            })(e)),
                  Di(
                    (function Gl(e) {
                      return -1 == e.indexOf("E")
                        ? e
                        : e
                            .replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E")
                            .replace(/(E[+-])(\d)$/, "$10$2");
                    })(t.toUpperCase()),
                  )
                );
              })(e);
        case "undefined":
          return "";
        case "object":
          if (null == e) return "";
          if (e instanceof Date) return Zr(14, g0(e, r && r.date1904), r);
      }
      throw new Error("unsupported value in General format: " + e);
    }
    function Xl(e, r, t, a) {
      var o,
        n = "",
        i = 0,
        s = 0,
        c = t.y,
        f = 0;
      switch (e) {
        case 98:
          c = t.y + 543;
        case 121:
          switch (r.length) {
            case 1:
            case 2:
              ((o = c % 100), (f = 2));
              break;
            default:
              ((o = c % 1e4), (f = 4));
          }
          break;
        case 109:
          switch (r.length) {
            case 1:
            case 2:
              ((o = t.m), (f = r.length));
              break;
            case 3:
              return Pi[t.m - 1][1];
            case 5:
              return Pi[t.m - 1][0];
            default:
              return Pi[t.m - 1][2];
          }
          break;
        case 100:
          switch (r.length) {
            case 1:
            case 2:
              ((o = t.d), (f = r.length));
              break;
            case 3:
              return _0[t.q][0];
            default:
              return _0[t.q][1];
          }
          break;
        case 104:
          switch (r.length) {
            case 1:
            case 2:
              ((o = 1 + ((t.H + 11) % 12)), (f = r.length));
              break;
            default:
              throw "bad hour format: " + r;
          }
          break;
        case 72:
          switch (r.length) {
            case 1:
            case 2:
              ((o = t.H), (f = r.length));
              break;
            default:
              throw "bad hour format: " + r;
          }
          break;
        case 77:
          switch (r.length) {
            case 1:
            case 2:
              ((o = t.M), (f = r.length));
              break;
            default:
              throw "bad minute format: " + r;
          }
          break;
        case 115:
          if ("s" != r && "ss" != r && ".0" != r && ".00" != r && ".000" != r)
            throw "bad second format: " + r;
          return 0 !== t.u || ("s" != r && "ss" != r)
            ? ((s = a >= 2 ? (3 === a ? 1e3 : 100) : 1 === a ? 10 : 1),
              (i = Math.round(s * (t.S + t.u))) >= 60 * s && (i = 0),
              "s" === r
                ? 0 === i
                  ? "0"
                  : "" + i / s
                : ((n = ht(i, 2 + a)),
                  "ss" === r
                    ? n.substr(0, 2)
                    : "." + n.substr(2, r.length - 1)))
            : ht(t.S, r.length);
        case 90:
          switch (r) {
            case "[h]":
            case "[hh]":
              o = 24 * t.D + t.H;
              break;
            case "[m]":
            case "[mm]":
              o = 60 * (24 * t.D + t.H) + t.M;
              break;
            case "[s]":
            case "[ss]":
              o = 60 * (60 * (24 * t.D + t.H) + t.M) + Math.round(t.S + t.u);
              break;
            default:
              throw "bad abstime format: " + r;
          }
          f = 3 === r.length ? 1 : 2;
          break;
        case 101:
          ((o = c), (f = 1));
      }
      return f > 0 ? ht(o, f) : "";
    }
    function Kt(e) {
      if (e.length <= 3) return e;
      for (var t = e.length % 3, a = e.substr(0, t); t != e.length; t += 3)
        a += (a.length > 0 ? "," : "") + e.substr(t, 3);
      return a;
    }
    var E0 = /%/g;
    function T0(e, r) {
      var t,
        a = e.indexOf("E") - e.indexOf(".") - 1;
      if (e.match(/^#+0.0E\+0$/)) {
        if (0 == r) return "0.0E+0";
        if (r < 0) return "-" + T0(e, -r);
        var n = e.indexOf(".");
        -1 === n && (n = e.indexOf("E"));
        var i = Math.floor(Math.log(r) * Math.LOG10E) % n;
        if (
          (i < 0 && (i += n),
          -1 ===
            (t = (r / Math.pow(10, i)).toPrecision(
              a + 1 + ((n + i) % n),
            )).indexOf("e"))
        ) {
          var s = Math.floor(Math.log(r) * Math.LOG10E);
          for (
            -1 === t.indexOf(".")
              ? (t =
                  t.charAt(0) + "." + t.substr(1) + "E+" + (s - t.length + i))
              : (t += "E+" + (s - i));
            "0." === t.substr(0, 2);
          )
            t = (t = t.charAt(0) + t.substr(2, n) + "." + t.substr(2 + n))
              .replace(/^0+([1-9])/, "$1")
              .replace(/^0+\./, "0.");
          t = t.replace(/\+-/, "-");
        }
        t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (c, o, f, l) {
          return o + f + l.substr(0, (n + i) % n) + "." + l.substr(i) + "E";
        });
      } else t = r.toExponential(a);
      return (
        e.match(/E\+00$/) &&
          t.match(/e[+-]\d$/) &&
          (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)),
        e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")),
        t.replace("e", "E")
      );
    }
    var A0 = /# (\?+)( ?)\/( ?)(\d+)/,
      S0 = /^#*0*\.([0#]+)/,
      w0 = /\).*[0#]/,
      k0 = /\(###\) ###\\?-####/;
    function Br(e) {
      for (var t, r = "", a = 0; a != e.length; ++a)
        switch ((t = e.charCodeAt(a))) {
          case 35:
            break;
          case 63:
            r += " ";
            break;
          case 48:
            r += "0";
            break;
          default:
            r += String.fromCharCode(t);
        }
      return r;
    }
    function C0(e, r) {
      var t = Math.pow(10, r);
      return "" + Math.round(e * t) / t;
    }
    function y0(e, r) {
      var t = e - Math.floor(e),
        a = Math.pow(10, r);
      return r < ("" + Math.round(t * a)).length ? 0 : Math.round(t * a);
    }
    function tt(e, r, t) {
      if (40 === e.charCodeAt(0) && !r.match(w0)) {
        var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
        return t >= 0 ? tt("n", a, t) : "(" + tt("n", a, -t) + ")";
      }
      if (44 === r.charCodeAt(r.length - 1))
        return (function Yl(e, r, t) {
          for (var a = r.length - 1; 44 === r.charCodeAt(a - 1);) --a;
          return Rt(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
        })(e, r, t);
      if (-1 !== r.indexOf("%"))
        return (function Kl(e, r, t) {
          var a = r.replace(E0, ""),
            n = r.length - a.length;
          return Rt(e, a, t * Math.pow(10, 2 * n)) + cr("%", n);
        })(e, r, t);
      if (-1 !== r.indexOf("E")) return T0(r, t);
      if (36 === r.charCodeAt(0))
        return "$" + tt(e, r.substr(" " == r.charAt(1) ? 2 : 1), t);
      var n,
        i,
        s,
        c,
        o = Math.abs(t),
        f = t < 0 ? "-" : "";
      if (r.match(/^00+$/)) return f + Na(o, r.length);
      if (r.match(/^[#?]+$/))
        return (
          "0" === (n = Na(t, 0)) && (n = ""),
          n.length > r.length ? n : Br(r.substr(0, r.length - n.length)) + n
        );
      if ((i = r.match(A0)))
        return (function zl(e, r, t) {
          var a = parseInt(e[4], 10),
            n = Math.round(r * a),
            i = Math.floor(n / a),
            s = n - i * a,
            c = a;
          return (
            t +
            (0 === i ? "" : "" + i) +
            " " +
            (0 === s
              ? cr(" ", e[1].length + 1 + e[4].length)
              : bi(s, e[1].length) + e[2] + "/" + e[3] + ht(c, e[4].length))
          );
        })(i, o, f);
      if (r.match(/^#+0+$/)) return f + Na(o, r.length - r.indexOf("0"));
      if ((i = r.match(S0)))
        return (
          (n = C0(t, i[1].length)
            .replace(/^([^\.]+)$/, "$1." + Br(i[1]))
            .replace(/\.$/, "." + Br(i[1]))
            .replace(/\.(\d*)$/, function (m, u) {
              return "." + u + cr("0", Br(i[1]).length - u.length);
            })),
          -1 !== r.indexOf("0.") ? n : n.replace(/^0\./, ".")
        );
      if (((r = r.replace(/^#+([0.])/, "$1")), (i = r.match(/^(0*)\.(#*)$/))))
        return (
          f +
          C0(o, i[2].length)
            .replace(/\.(\d*[1-9])0*$/, ".$1")
            .replace(/^(-?\d*)$/, "$1.")
            .replace(/^0\./, i[1].length ? "0." : ".")
        );
      if ((i = r.match(/^#{1,3},##0(\.?)$/))) return f + Kt(Na(o, 0));
      if ((i = r.match(/^#,##0\.([#0]*0)$/)))
        return t < 0
          ? "-" + tt(e, r, -t)
          : Kt(
              "" +
                (Math.floor(t) +
                  (function Zl(e, r) {
                    return r <
                      ("" + Math.round((e - Math.floor(e)) * Math.pow(10, r)))
                        .length
                      ? 1
                      : 0;
                  })(t, i[1].length)),
            ) +
              "." +
              ht(y0(t, i[1].length), i[1].length);
      if ((i = r.match(/^#,#*,#0/))) return tt(e, r.replace(/^#,#*,/, ""), t);
      if ((i = r.match(/^([0#]+)(\\?-([0#]+))+$/)))
        return (
          (n = Ra(tt(e, r.replace(/[\\-]/g, ""), t))),
          (s = 0),
          Ra(
            Ra(r.replace(/\\/g, "")).replace(/[0#]/g, function (m) {
              return s < n.length ? n.charAt(s++) : "0" === m ? "0" : "";
            }),
          )
        );
      if (r.match(k0))
        return (
          "(" +
          (n = tt(e, "##########", t)).substr(0, 3) +
          ") " +
          n.substr(3, 3) +
          "-" +
          n.substr(6)
        );
      var l = "";
      if ((i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
        return (
          (s = Math.min(i[4].length, 7)),
          (c = Xn(o, Math.pow(10, s) - 1, !1)),
          (n = "" + f),
          " " == (l = Rt("n", i[1], c[1])).charAt(l.length - 1) &&
            (l = l.substr(0, l.length - 1) + "0"),
          (n += l + i[2] + "/" + i[3]),
          (l = Hn(c[2], s)).length < i[4].length &&
            (l = Br(i[4].substr(i[4].length - l.length)) + l),
          (n += l)
        );
      if ((i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
        return (
          (s = Math.min(Math.max(i[1].length, i[4].length), 7)),
          f +
            ((c = Xn(o, Math.pow(10, s) - 1, !0))[0] || (c[1] ? "" : "0")) +
            " " +
            (c[1]
              ? bi(c[1], s) + i[2] + "/" + i[3] + Hn(c[2], s)
              : cr(" ", 2 * s + 1 + i[2].length + i[3].length))
        );
      if ((i = r.match(/^[#0?]+$/)))
        return (
          (n = Na(t, 0)),
          r.length <= n.length ? n : Br(r.substr(0, r.length - n.length)) + n
        );
      if ((i = r.match(/^([#0?]+)\.([#0]+)$/))) {
        ((n =
          "" + t.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1")),
          (s = n.indexOf(".")));
        var h = r.indexOf(".") - s,
          d = r.length - n.length - h;
        return Br(r.substr(0, h) + n + r.substr(r.length - d));
      }
      if ((i = r.match(/^00,000\.([#0]*0)$/)))
        return (
          (s = y0(t, i[1].length)),
          t < 0
            ? "-" + tt(e, r, -t)
            : Kt(
                (function $l(e) {
                  return e < 2147483647 && e > -2147483648
                    ? "" + (e >= 0 ? 0 | e : (e - 1) | 0)
                    : "" + Math.floor(e);
                })(t),
              )
                .replace(/^\d,\d{3}$/, "0$&")
                .replace(/^\d*$/, function (m) {
                  return "00," + (m.length < 3 ? ht(0, 3 - m.length) : "") + m;
                }) +
              "." +
              ht(s, i[1].length)
        );
      switch (r) {
        case "###,##0.00":
          return tt(e, "#,##0.00", t);
        case "###,###":
        case "##,###":
        case "#,###":
          var x = Kt(Na(o, 0));
          return "0" !== x ? f + x : "";
        case "###,###.00":
          return tt(e, "###,##0.00", t).replace(/^0\./, ".");
        case "#,###.00":
          return tt(e, "#,##0.00", t).replace(/^0\./, ".");
      }
      throw new Error("unsupported format |" + r + "|");
    }
    function F0(e, r) {
      var t,
        a = e.indexOf("E") - e.indexOf(".") - 1;
      if (e.match(/^#+0.0E\+0$/)) {
        if (0 == r) return "0.0E+0";
        if (r < 0) return "-" + F0(e, -r);
        var n = e.indexOf(".");
        -1 === n && (n = e.indexOf("E"));
        var i = Math.floor(Math.log(r) * Math.LOG10E) % n;
        if (
          (i < 0 && (i += n),
          !(t = (r / Math.pow(10, i)).toPrecision(a + 1 + ((n + i) % n))).match(
            /[Ee]/,
          ))
        ) {
          var s = Math.floor(Math.log(r) * Math.LOG10E);
          (-1 === t.indexOf(".")
            ? (t = t.charAt(0) + "." + t.substr(1) + "E+" + (s - t.length + i))
            : (t += "E+" + (s - i)),
            (t = t.replace(/\+-/, "-")));
        }
        t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (c, o, f, l) {
          return o + f + l.substr(0, (n + i) % n) + "." + l.substr(i) + "E";
        });
      } else t = r.toExponential(a);
      return (
        e.match(/E\+00$/) &&
          t.match(/e[+-]\d$/) &&
          (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)),
        e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")),
        t.replace("e", "E")
      );
    }
    function _t(e, r, t) {
      if (40 === e.charCodeAt(0) && !r.match(w0)) {
        var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
        return t >= 0 ? _t("n", a, t) : "(" + _t("n", a, -t) + ")";
      }
      if (44 === r.charCodeAt(r.length - 1))
        return (function jl(e, r, t) {
          for (var a = r.length - 1; 44 === r.charCodeAt(a - 1);) --a;
          return Rt(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
        })(e, r, t);
      if (-1 !== r.indexOf("%"))
        return (function Ql(e, r, t) {
          var a = r.replace(E0, ""),
            n = r.length - a.length;
          return Rt(e, a, t * Math.pow(10, 2 * n)) + cr("%", n);
        })(e, r, t);
      if (-1 !== r.indexOf("E")) return F0(r, t);
      if (36 === r.charCodeAt(0))
        return "$" + _t(e, r.substr(" " == r.charAt(1) ? 2 : 1), t);
      var n,
        i,
        s,
        c,
        o = Math.abs(t),
        f = t < 0 ? "-" : "";
      if (r.match(/^00+$/)) return f + ht(o, r.length);
      if (r.match(/^[#?]+$/))
        return (
          (n = "" + t),
          0 === t && (n = ""),
          n.length > r.length ? n : Br(r.substr(0, r.length - n.length)) + n
        );
      if ((i = r.match(A0)))
        return (function Jl(e, r, t) {
          return (
            t + (0 === r ? "" : "" + r) + cr(" ", e[1].length + 2 + e[4].length)
          );
        })(i, o, f);
      if (r.match(/^#+0+$/)) return f + ht(o, r.length - r.indexOf("0"));
      if ((i = r.match(S0)))
        return (
          (n = (n = ("" + t)
            .replace(/^([^\.]+)$/, "$1." + Br(i[1]))
            .replace(/\.$/, "." + Br(i[1]))).replace(
            /\.(\d*)$/,
            function (m, u) {
              return "." + u + cr("0", Br(i[1]).length - u.length);
            },
          )),
          -1 !== r.indexOf("0.") ? n : n.replace(/^0\./, ".")
        );
      if (((r = r.replace(/^#+([0.])/, "$1")), (i = r.match(/^(0*)\.(#*)$/))))
        return (
          f +
          ("" + o)
            .replace(/\.(\d*[1-9])0*$/, ".$1")
            .replace(/^(-?\d*)$/, "$1.")
            .replace(/^0\./, i[1].length ? "0." : ".")
        );
      if ((i = r.match(/^#{1,3},##0(\.?)$/))) return f + Kt("" + o);
      if ((i = r.match(/^#,##0\.([#0]*0)$/)))
        return t < 0
          ? "-" + _t(e, r, -t)
          : Kt("" + t) + "." + cr("0", i[1].length);
      if ((i = r.match(/^#,#*,#0/))) return _t(e, r.replace(/^#,#*,/, ""), t);
      if ((i = r.match(/^([0#]+)(\\?-([0#]+))+$/)))
        return (
          (n = Ra(_t(e, r.replace(/[\\-]/g, ""), t))),
          (s = 0),
          Ra(
            Ra(r.replace(/\\/g, "")).replace(/[0#]/g, function (m) {
              return s < n.length ? n.charAt(s++) : "0" === m ? "0" : "";
            }),
          )
        );
      if (r.match(k0))
        return (
          "(" +
          (n = _t(e, "##########", t)).substr(0, 3) +
          ") " +
          n.substr(3, 3) +
          "-" +
          n.substr(6)
        );
      var l = "";
      if ((i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
        return (
          (s = Math.min(i[4].length, 7)),
          (c = Xn(o, Math.pow(10, s) - 1, !1)),
          (n = "" + f),
          " " == (l = Rt("n", i[1], c[1])).charAt(l.length - 1) &&
            (l = l.substr(0, l.length - 1) + "0"),
          (n += l + i[2] + "/" + i[3]),
          (l = Hn(c[2], s)).length < i[4].length &&
            (l = Br(i[4].substr(i[4].length - l.length)) + l),
          (n += l)
        );
      if ((i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
        return (
          (s = Math.min(Math.max(i[1].length, i[4].length), 7)),
          f +
            ((c = Xn(o, Math.pow(10, s) - 1, !0))[0] || (c[1] ? "" : "0")) +
            " " +
            (c[1]
              ? bi(c[1], s) + i[2] + "/" + i[3] + Hn(c[2], s)
              : cr(" ", 2 * s + 1 + i[2].length + i[3].length))
        );
      if ((i = r.match(/^[#0?]+$/)))
        return r.length <= (n = "" + t).length
          ? n
          : Br(r.substr(0, r.length - n.length)) + n;
      if ((i = r.match(/^([#0]+)\.([#0]+)$/))) {
        ((n =
          "" + t.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1")),
          (s = n.indexOf(".")));
        var h = r.indexOf(".") - s,
          d = r.length - n.length - h;
        return Br(r.substr(0, h) + n + r.substr(r.length - d));
      }
      if ((i = r.match(/^00,000\.([#0]*0)$/)))
        return t < 0
          ? "-" + _t(e, r, -t)
          : Kt("" + t)
              .replace(/^\d,\d{3}$/, "0$&")
              .replace(/^\d*$/, function (m) {
                return "00," + (m.length < 3 ? ht(0, 3 - m.length) : "") + m;
              }) +
              "." +
              ht(0, i[1].length);
      switch (r) {
        case "###,###":
        case "##,###":
        case "#,###":
          var x = Kt("" + o);
          return "0" !== x ? f + x : "";
        default:
          if (r.match(/\.[0#?]*$/))
            return (
              _t(e, r.slice(0, r.lastIndexOf(".")), t) +
              Br(r.slice(r.lastIndexOf(".")))
            );
      }
      throw new Error("unsupported format |" + r + "|");
    }
    function Rt(e, r, t) {
      return (0 | t) === t ? _t(e, r, t) : tt(e, r, t);
    }
    var R0 = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
    function Oa(e) {
      for (var r = 0, t = "", a = ""; r < e.length;)
        switch ((t = e.charAt(r))) {
          case "G":
            (Vn(e, r) && (r += 6), r++);
            break;
          case '"':
            for (; 34 !== e.charCodeAt(++r) && r < e.length;);
            ++r;
            break;
          case "\\":
          case "_":
            r += 2;
            break;
          case "@":
            ++r;
            break;
          case "B":
          case "b":
            if ("1" === e.charAt(r + 1) || "2" === e.charAt(r + 1)) return !0;
          case "M":
          case "D":
          case "Y":
          case "H":
          case "S":
          case "E":
          case "m":
          case "d":
          case "y":
          case "h":
          case "s":
          case "e":
          case "g":
            return !0;
          case "A":
          case "a":
          case "\u4e0a":
            if (
              "A/P" === e.substr(r, 3).toUpperCase() ||
              "AM/PM" === e.substr(r, 5).toUpperCase() ||
              "\u4e0a\u5348/\u4e0b\u5348" === e.substr(r, 5).toUpperCase()
            )
              return !0;
            ++r;
            break;
          case "[":
            for (a = t; "]" !== e.charAt(r++) && r < e.length;)
              a += e.charAt(r);
            if (a.match(R0)) return !0;
            break;
          case ".":
          case "0":
          case "#":
            for (
              ;
              r < e.length &&
              ("0#?.,E+-%".indexOf((t = e.charAt(++r))) > -1 ||
                ("\\" == t &&
                  "-" == e.charAt(r + 1) &&
                  "0#".indexOf(e.charAt(r + 2)) > -1));
            );
            break;
          case "?":
            for (; e.charAt(++r) === t;);
            break;
          case "*":
            (++r, (" " == e.charAt(r) || "*" == e.charAt(r)) && ++r);
            break;
          case "(":
          case ")":
            ++r;
            break;
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            for (; r < e.length && "0123456789".indexOf(e.charAt(++r)) > -1;);
            break;
          default:
            ++r;
        }
      return !1;
    }
    var N0 = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
    function O0(e, r) {
      if (null == r) return !1;
      var t = parseFloat(r[2]);
      switch (r[1]) {
        case "=":
          if (e == t) return !0;
          break;
        case ">":
          if (e > t) return !0;
          break;
        case "<":
          if (e < t) return !0;
          break;
        case "<>":
          if (e != t) return !0;
          break;
        case ">=":
          if (e >= t) return !0;
          break;
        case "<=":
          if (e <= t) return !0;
      }
      return !1;
    }
    function Zr(e, r, t) {
      null == t && (t = {});
      var a = "";
      switch (typeof e) {
        case "string":
          a = "m/d/yy" == e && t.dateNF ? t.dateNF : e;
          break;
        case "number":
          (null ==
            (a =
              14 == e && t.dateNF
                ? t.dateNF
                : (null != t.table ? t.table : we)[e]) &&
            (a = (t.table && t.table[p0[e]]) || we[p0[e]]),
            null == a && (a = Ml[e] || "General"));
      }
      if (Vn(a, 0)) return fa(r, t);
      r instanceof Date && (r = g0(r, t.date1904));
      var n = (function ru(e, r) {
        var t = (function ql(e) {
            for (var r = [], t = !1, a = 0, n = 0; a < e.length; ++a)
              switch (e.charCodeAt(a)) {
                case 34:
                  t = !t;
                  break;
                case 95:
                case 42:
                case 92:
                  ++a;
                  break;
                case 59:
                  ((r[r.length] = e.substr(n, a - n)), (n = a + 1));
              }
            if (((r[r.length] = e.substr(n)), !0 === t))
              throw new Error("Format |" + e + "| unterminated string ");
            return r;
          })(e),
          a = t.length,
          n = t[a - 1].indexOf("@");
        if ((a < 4 && n > -1 && --a, t.length > 4))
          throw new Error("cannot find right format for |" + t.join("|") + "|");
        if ("number" != typeof r)
          return [4, 4 === t.length || n > -1 ? t[t.length - 1] : "@"];
        switch (t.length) {
          case 1:
            t =
              n > -1
                ? ["General", "General", "General", t[0]]
                : [t[0], t[0], t[0], "@"];
            break;
          case 2:
            t = n > -1 ? [t[0], t[0], t[0], t[1]] : [t[0], t[1], t[0], "@"];
            break;
          case 3:
            t = n > -1 ? [t[0], t[1], t[0], t[2]] : [t[0], t[1], t[2], "@"];
        }
        var i = r > 0 ? t[0] : r < 0 ? t[1] : t[2];
        if (-1 === t[0].indexOf("[") && -1 === t[1].indexOf("[")) return [a, i];
        if (null != t[0].match(/\[[=<>]/) || null != t[1].match(/\[[=<>]/)) {
          var s = t[0].match(N0),
            c = t[1].match(N0);
          return O0(r, s)
            ? [a, t[0]]
            : O0(r, c)
              ? [a, t[1]]
              : [a, t[null != s && null != c ? 2 : 1]];
        }
        return [a, i];
      })(a, r);
      if (Vn(n[1])) return fa(r, t);
      if (!0 === r) r = "TRUE";
      else if (!1 === r) r = "FALSE";
      else if ("" === r || null == r) return "";
      return (function eu(e, r, t, a) {
        for (
          var f, l, h, n = [], i = "", s = 0, c = "", o = "t", d = "H";
          s < e.length;
        )
          switch ((c = e.charAt(s))) {
            case "G":
              if (!Vn(e, s))
                throw new Error("unrecognized character " + c + " in " + e);
              ((n[n.length] = { t: "G", v: "General" }), (s += 7));
              break;
            case '"':
              for (i = ""; 34 !== (h = e.charCodeAt(++s)) && s < e.length;)
                i += String.fromCharCode(h);
              ((n[n.length] = { t: "t", v: i }), ++s);
              break;
            case "\\":
              var x = e.charAt(++s);
              ((n[n.length] = { t: "(" === x || ")" === x ? x : "t", v: x }),
                ++s);
              break;
            case "_":
              ((n[n.length] = { t: "t", v: " " }), (s += 2));
              break;
            case "@":
              ((n[n.length] = { t: "T", v: r }), ++s);
              break;
            case "B":
            case "b":
              if ("1" === e.charAt(s + 1) || "2" === e.charAt(s + 1)) {
                if (
                  null == f &&
                  null == (f = Xt(r, t, "2" === e.charAt(s + 1)))
                )
                  return "";
                ((n[n.length] = { t: "X", v: e.substr(s, 2) }),
                  (o = c),
                  (s += 2));
                break;
              }
            case "M":
            case "D":
            case "Y":
            case "H":
            case "S":
            case "E":
              c = c.toLowerCase();
            case "m":
            case "d":
            case "y":
            case "h":
            case "s":
            case "e":
            case "g":
              if (r < 0 || (null == f && null == (f = Xt(r, t)))) return "";
              for (i = c; ++s < e.length && e.charAt(s).toLowerCase() === c;)
                i += c;
              ("m" === c && "h" === o.toLowerCase() && (c = "M"),
                "h" === c && (c = d),
                (n[n.length] = { t: c, v: i }),
                (o = c));
              break;
            case "A":
            case "a":
            case "\u4e0a":
              var u = { t: c, v: c };
              if (
                (null == f && (f = Xt(r, t)),
                "A/P" === e.substr(s, 3).toUpperCase()
                  ? (null != f && (u.v = f.H >= 12 ? "P" : "A"),
                    (u.t = "T"),
                    (d = "h"),
                    (s += 3))
                  : "AM/PM" === e.substr(s, 5).toUpperCase()
                    ? (null != f && (u.v = f.H >= 12 ? "PM" : "AM"),
                      (u.t = "T"),
                      (s += 5),
                      (d = "h"))
                    : "\u4e0a\u5348/\u4e0b\u5348" ===
                        e.substr(s, 5).toUpperCase()
                      ? (null != f &&
                          (u.v = f.H >= 12 ? "\u4e0b\u5348" : "\u4e0a\u5348"),
                        (u.t = "T"),
                        (s += 5),
                        (d = "h"))
                      : ((u.t = "t"), ++s),
                null == f && "T" === u.t)
              )
                return "";
              ((n[n.length] = u), (o = c));
              break;
            case "[":
              for (i = c; "]" !== e.charAt(s++) && s < e.length;)
                i += e.charAt(s);
              if ("]" !== i.slice(-1))
                throw 'unterminated "[" block: |' + i + "|";
              if (i.match(R0)) {
                if (null == f && null == (f = Xt(r, t))) return "";
                ((n[n.length] = { t: "Z", v: i.toLowerCase() }),
                  (o = i.charAt(1)));
              } else
                i.indexOf("$") > -1 &&
                  ((i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$"),
                  Oa(e) || (n[n.length] = { t: "t", v: i }));
              break;
            case ".":
              if (null != f) {
                for (i = c; ++s < e.length && "0" === (c = e.charAt(s));)
                  i += c;
                n[n.length] = { t: "s", v: i };
                break;
              }
            case "0":
            case "#":
              for (
                i = c;
                ++s < e.length && "0#?.,E+-%".indexOf((c = e.charAt(s))) > -1;
              )
                i += c;
              n[n.length] = { t: "n", v: i };
              break;
            case "?":
              for (i = c; e.charAt(++s) === c;) i += c;
              ((n[n.length] = { t: c, v: i }), (o = c));
              break;
            case "*":
              (++s, (" " == e.charAt(s) || "*" == e.charAt(s)) && ++s);
              break;
            case "(":
            case ")":
              ((n[n.length] = { t: 1 === a ? "t" : c, v: c }), ++s);
              break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              for (
                i = c;
                s < e.length && "0123456789".indexOf(e.charAt(++s)) > -1;
              )
                i += e.charAt(s);
              n[n.length] = { t: "D", v: i };
              break;
            case " ":
              ((n[n.length] = { t: c, v: c }), ++s);
              break;
            case "$":
              ((n[n.length] = { t: "t", v: "$" }), ++s);
              break;
            default:
              if (
                -1 === ",$-+/():!^&'~{}<>=\u20acacfijklopqrtuvwxzP".indexOf(c)
              )
                throw new Error("unrecognized character " + c + " in " + e);
              ((n[n.length] = { t: "t", v: c }), ++s);
          }
        var T,
          _ = 0,
          A = 0;
        for (s = n.length - 1, o = "t"; s >= 0; --s)
          switch (n[s].t) {
            case "h":
            case "H":
              ((n[s].t = d), (o = "h"), _ < 1 && (_ = 1));
              break;
            case "s":
              ((T = n[s].v.match(/\.0+$/)) &&
                (A = Math.max(A, T[0].length - 1)),
                _ < 3 && (_ = 3));
            case "d":
            case "y":
            case "M":
            case "e":
              o = n[s].t;
              break;
            case "m":
              "s" === o && ((n[s].t = "M"), _ < 2 && (_ = 2));
              break;
            case "X":
              break;
            case "Z":
              (_ < 1 && n[s].v.match(/[Hh]/) && (_ = 1),
                _ < 2 && n[s].v.match(/[Mm]/) && (_ = 2),
                _ < 3 && n[s].v.match(/[Ss]/) && (_ = 3));
          }
        switch (_) {
          case 0:
            break;
          case 1:
            (f.u >= 0.5 && ((f.u = 0), ++f.S),
              f.S >= 60 && ((f.S = 0), ++f.M),
              f.M >= 60 && ((f.M = 0), ++f.H));
            break;
          case 2:
            (f.u >= 0.5 && ((f.u = 0), ++f.S), f.S >= 60 && ((f.S = 0), ++f.M));
        }
        var O,
          g = "";
        for (s = 0; s < n.length; ++s)
          switch (n[s].t) {
            case "t":
            case "T":
            case " ":
            case "D":
              break;
            case "X":
              ((n[s].v = ""), (n[s].t = ";"));
              break;
            case "d":
            case "m":
            case "y":
            case "h":
            case "H":
            case "M":
            case "s":
            case "e":
            case "b":
            case "Z":
              ((n[s].v = Xl(n[s].t.charCodeAt(0), n[s].v, f, A)),
                (n[s].t = "t"));
              break;
            case "n":
            case "?":
              for (
                O = s + 1;
                null != n[O] &&
                ("?" === (c = n[O].t) ||
                  "D" === c ||
                  ((" " === c || "t" === c) &&
                    null != n[O + 1] &&
                    ("?" === n[O + 1].t ||
                      ("t" === n[O + 1].t && "/" === n[O + 1].v))) ||
                  ("(" === n[s].t && (" " === c || "n" === c || ")" === c)) ||
                  ("t" === c &&
                    ("/" === n[O].v ||
                      (" " === n[O].v &&
                        null != n[O + 1] &&
                        "?" == n[O + 1].t))));
              )
                ((n[s].v += n[O].v), (n[O] = { v: "", t: ";" }), ++O);
              ((g += n[s].v), (s = O - 1));
              break;
            case "G":
              ((n[s].t = "t"), (n[s].v = fa(r, t)));
          }
        var Y,
          F,
          D = "";
        if (g.length > 0) {
          (40 == g.charCodeAt(0)
            ? ((Y = r < 0 && 45 === g.charCodeAt(0) ? -r : r),
              (F = Rt("n", g, Y)))
            : ((F = Rt("n", g, (Y = r < 0 && a > 1 ? -r : r))),
              Y < 0 &&
                n[0] &&
                "t" == n[0].t &&
                ((F = F.substr(1)), (n[0].v = "-" + n[0].v))),
            (O = F.length - 1));
          var P = n.length;
          for (s = 0; s < n.length; ++s)
            if (null != n[s] && "t" != n[s].t && n[s].v.indexOf(".") > -1) {
              P = s;
              break;
            }
          var I = n.length;
          if (P === n.length && -1 === F.indexOf("E")) {
            for (s = n.length - 1; s >= 0; --s)
              null == n[s] ||
                -1 === "n?".indexOf(n[s].t) ||
                (O >= n[s].v.length - 1
                  ? (n[s].v = F.substr(1 + (O -= n[s].v.length), n[s].v.length))
                  : O < 0
                    ? (n[s].v = "")
                    : ((n[s].v = F.substr(0, O + 1)), (O = -1)),
                (n[s].t = "t"),
                (I = s));
            O >= 0 && I < n.length && (n[I].v = F.substr(0, O + 1) + n[I].v);
          } else if (P !== n.length && -1 === F.indexOf("E")) {
            for (O = F.indexOf(".") - 1, s = P; s >= 0; --s)
              if (null != n[s] && -1 !== "n?".indexOf(n[s].t)) {
                for (
                  l =
                    n[s].v.indexOf(".") > -1 && s === P
                      ? n[s].v.indexOf(".") - 1
                      : n[s].v.length - 1,
                    D = n[s].v.substr(l + 1);
                  l >= 0;
                  --l
                )
                  O >= 0 &&
                    ("0" === n[s].v.charAt(l) || "#" === n[s].v.charAt(l)) &&
                    (D = F.charAt(O--) + D);
                ((n[s].v = D), (n[s].t = "t"), (I = s));
              }
            for (
              O >= 0 && I < n.length && (n[I].v = F.substr(0, O + 1) + n[I].v),
                O = F.indexOf(".") + 1,
                s = P;
              s < n.length;
              ++s
            )
              if (null != n[s] && (-1 !== "n?(".indexOf(n[s].t) || s === P)) {
                for (
                  l =
                    n[s].v.indexOf(".") > -1 && s === P
                      ? n[s].v.indexOf(".") + 1
                      : 0,
                    D = n[s].v.substr(0, l);
                  l < n[s].v.length;
                  ++l
                )
                  O < F.length && (D += F.charAt(O++));
                ((n[s].v = D), (n[s].t = "t"), (I = s));
              }
          }
        }
        for (s = 0; s < n.length; ++s)
          null != n[s] &&
            "n?".indexOf(n[s].t) > -1 &&
            ((n[s].v = Rt(
              n[s].t,
              n[s].v,
              (Y = a > 1 && r < 0 && s > 0 && "-" === n[s - 1].v ? -r : r),
            )),
            (n[s].t = "t"));
        var z = "";
        for (s = 0; s !== n.length; ++s) null != n[s] && (z += n[s].v);
        return z;
      })(n[1], r, t, n[0]);
    }
    function pt(e, r) {
      if ("number" != typeof r) {
        r = +r || -1;
        for (var t = 0; t < 392; ++t)
          if (null != we[t]) {
            if (we[t] == e) {
              r = t;
              break;
            }
          } else r < 0 && (r = t);
        r < 0 && (r = 391);
      }
      return ((we[r] = e), r);
    }
    function an(e) {
      for (var r = 0; 392 != r; ++r) void 0 !== e[r] && pt(e[r], r);
    }
    function Ia() {
      we = (function Dl(e) {
        return (
          e || (e = {}),
          (e[0] = "General"),
          (e[1] = "0"),
          (e[2] = "0.00"),
          (e[3] = "#,##0"),
          (e[4] = "#,##0.00"),
          (e[9] = "0%"),
          (e[10] = "0.00%"),
          (e[11] = "0.00E+00"),
          (e[12] = "# ?/?"),
          (e[13] = "# ??/??"),
          (e[14] = "m/d/yy"),
          (e[15] = "d-mmm-yy"),
          (e[16] = "d-mmm"),
          (e[17] = "mmm-yy"),
          (e[18] = "h:mm AM/PM"),
          (e[19] = "h:mm:ss AM/PM"),
          (e[20] = "h:mm"),
          (e[21] = "h:mm:ss"),
          (e[22] = "m/d/yy h:mm"),
          (e[37] = "#,##0 ;(#,##0)"),
          (e[38] = "#,##0 ;[Red](#,##0)"),
          (e[39] = "#,##0.00;(#,##0.00)"),
          (e[40] = "#,##0.00;[Red](#,##0.00)"),
          (e[45] = "mm:ss"),
          (e[46] = "[h]:mm:ss"),
          (e[47] = "mmss.0"),
          (e[48] = "##0.0E+0"),
          (e[49] = "@"),
          (e[56] =
            '"\u4e0a\u5348/\u4e0b\u5348 "hh"\u6642"mm"\u5206"ss"\u79d2 "'),
          e
        );
      })();
    }
    var I0 = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g,
      su = (function () {
        var e = { version: "1.2.0" },
          t = (function r() {
            for (var F = 0, P = new Array(256), I = 0; 256 != I; ++I)
              P[I] = F =
                1 &
                (F =
                  1 &
                  (F =
                    1 &
                    (F =
                      1 &
                      (F =
                        1 &
                        (F =
                          1 &
                          (F =
                            1 &
                            (F = 1 & (F = I) ? -306674912 ^ (F >>> 1) : F >>> 1)
                              ? -306674912 ^ (F >>> 1)
                              : F >>> 1)
                            ? -306674912 ^ (F >>> 1)
                            : F >>> 1)
                          ? -306674912 ^ (F >>> 1)
                          : F >>> 1)
                        ? -306674912 ^ (F >>> 1)
                        : F >>> 1)
                      ? -306674912 ^ (F >>> 1)
                      : F >>> 1)
                    ? -306674912 ^ (F >>> 1)
                    : F >>> 1)
                  ? -306674912 ^ (F >>> 1)
                  : F >>> 1;
            return typeof Int32Array < "u" ? new Int32Array(P) : P;
          })(),
          n = (function a(F) {
            var P = 0,
              I = 0,
              z = 0,
              Z =
                typeof Int32Array < "u"
                  ? new Int32Array(4096)
                  : new Array(4096);
            for (z = 0; 256 != z; ++z) Z[z] = F[z];
            for (z = 0; 256 != z; ++z)
              for (I = F[z], P = 256 + z; P < 4096; P += 256)
                I = Z[P] = (I >>> 8) ^ F[255 & I];
            var b = [];
            for (z = 1; 16 != z; ++z)
              b[z - 1] =
                typeof Int32Array < "u"
                  ? Z.subarray(256 * z, 256 * z + 256)
                  : Z.slice(256 * z, 256 * z + 256);
            return b;
          })(t),
          i = n[0],
          s = n[1],
          c = n[2],
          o = n[3],
          f = n[4],
          l = n[5],
          h = n[6],
          d = n[7],
          x = n[8],
          m = n[9],
          u = n[10],
          _ = n[11],
          A = n[12],
          T = n[13],
          g = n[14];
        return (
          (e.table = t),
          (e.bstr = function O(F, P) {
            for (var I = -1 ^ P, z = 0, Z = F.length; z < Z;)
              I = (I >>> 8) ^ t[255 & (I ^ F.charCodeAt(z++))];
            return ~I;
          }),
          (e.buf = function D(F, P) {
            for (var I = -1 ^ P, z = F.length - 15, Z = 0; Z < z;)
              I =
                g[F[Z++] ^ (255 & I)] ^
                T[F[Z++] ^ ((I >> 8) & 255)] ^
                A[F[Z++] ^ ((I >> 16) & 255)] ^
                _[F[Z++] ^ (I >>> 24)] ^
                u[F[Z++]] ^
                m[F[Z++]] ^
                x[F[Z++]] ^
                d[F[Z++]] ^
                h[F[Z++]] ^
                l[F[Z++]] ^
                f[F[Z++]] ^
                o[F[Z++]] ^
                c[F[Z++]] ^
                s[F[Z++]] ^
                i[F[Z++]] ^
                t[F[Z++]];
            for (z += 15; Z < z;) I = (I >>> 8) ^ t[255 & (I ^ F[Z++])];
            return ~I;
          }),
          (e.str = function Y(F, P) {
            for (var I = -1 ^ P, z = 0, Z = F.length, b = 0, ue = 0; z < Z;)
              (b = F.charCodeAt(z++)) < 128
                ? (I = (I >>> 8) ^ t[255 & (I ^ b)])
                : b < 2048
                  ? (I =
                      ((I =
                        (I >>> 8) ^ t[255 & (I ^ (192 | ((b >> 6) & 31)))]) >>>
                        8) ^
                      t[255 & (I ^ (128 | (63 & b)))])
                  : b >= 55296 && b < 57344
                    ? ((b = 64 + (1023 & b)),
                      (ue = 1023 & F.charCodeAt(z++)),
                      (I =
                        ((I =
                          ((I =
                            ((I =
                              (I >>> 8) ^
                              t[255 & (I ^ (240 | ((b >> 8) & 7)))]) >>>
                              8) ^
                            t[255 & (I ^ (128 | ((b >> 2) & 63)))]) >>>
                            8) ^
                          t[
                            255 &
                              (I ^ (128 | ((ue >> 6) & 15) | ((3 & b) << 4)))
                          ]) >>>
                          8) ^
                        t[255 & (I ^ (128 | (63 & ue)))]))
                    : (I =
                        ((I =
                          ((I =
                            (I >>> 8) ^
                            t[255 & (I ^ (224 | ((b >> 12) & 15)))]) >>>
                            8) ^
                          t[255 & (I ^ (128 | ((b >> 6) & 63)))]) >>>
                          8) ^
                        t[255 & (I ^ (128 | (63 & b)))]);
            return ~I;
          }),
          e
        );
      })(),
      Se = (function () {
        var o,
          r = {};
        function a(p) {
          if ("/" == p.charAt(p.length - 1))
            return -1 === p.slice(0, -1).indexOf("/") ? p : a(p.slice(0, -1));
          var S = p.lastIndexOf("/");
          return -1 === S ? p : p.slice(0, S + 1);
        }
        function n(p) {
          if ("/" == p.charAt(p.length - 1)) return n(p.slice(0, -1));
          var S = p.lastIndexOf("/");
          return -1 === S ? p : p.slice(S + 1);
        }
        function i(p, S) {
          "string" == typeof S && (S = new Date(S));
          var v = S.getHours();
          ((v =
            ((v = (v << 6) | S.getMinutes()) << 5) | (S.getSeconds() >>> 1)),
            p.write_shift(2, v));
          var E = S.getFullYear() - 1980;
          ((E = ((E = (E << 4) | (S.getMonth() + 1)) << 5) | S.getDate()),
            p.write_shift(2, E));
        }
        function c(p) {
          Fr(p, 0);
          for (var S = {}, v = 0; p.l <= p.length - 4;) {
            var E = p.read_shift(2),
              w = p.read_shift(2),
              k = p.l + w,
              W = {};
            (21589 === E &&
              (1 & (v = p.read_shift(1)) && (W.mtime = p.read_shift(4)),
              w > 5 &&
                (2 & v && (W.atime = p.read_shift(4)),
                4 & v && (W.ctime = p.read_shift(4))),
              W.mtime && (W.mt = new Date(1e3 * W.mtime))),
              (p.l = k),
              (S[E] = W));
          }
          return S;
        }
        function f() {
          return o || (o = {});
        }
        function l(p, S) {
          if (80 == p[0] && 75 == p[1]) return Bf(p, S);
          if (109 == (32 | p[0]) && 105 == (32 | p[1]))
            return (function BE(p, S) {
              if ("mime-version:" != ve(p.slice(0, 13)).toLowerCase())
                throw new Error("Unsupported MAD header");
              var v = (S && S.root) || "",
                E = (
                  be && Buffer.isBuffer(p) ? p.toString("binary") : ve(p)
                ).split("\r\n"),
                w = 0,
                k = "";
              for (w = 0; w < E.length; ++w)
                if (
                  /^Content-Location:/i.test((k = E[w])) &&
                  ((k = k.slice(k.indexOf("file"))),
                  v || (v = k.slice(0, k.lastIndexOf("/") + 1)),
                  k.slice(0, v.length) != v)
                )
                  for (
                    ;
                    v.length > 0 &&
                    ((v = (v = v.slice(0, v.length - 1)).slice(
                      0,
                      v.lastIndexOf("/") + 1,
                    )),
                    k.slice(0, v.length) != v);
                  );
              var W = (E[1] || "").match(/boundary="(.*?)"/);
              if (!W) throw new Error("MAD cannot find boundary");
              var q = "--" + (W[1] || ""),
                K = { FileIndex: [], FullPaths: [] };
              F(K);
              var se,
                he = 0;
              for (w = 0; w < E.length; ++w) {
                var Ee = E[w];
                (Ee !== q && Ee !== q + "--") ||
                  (he++ && ME(K, E.slice(se, w), v), (se = w));
              }
              return K;
            })(p, S);
          if (p.length < 512)
            throw new Error("CFB file size " + p.length + " < 512");
          var v,
            w,
            k,
            W,
            q,
            V,
            E = 512,
            H = [],
            K = p.slice(0, 512);
          Fr(K, 0);
          var se = (function h(p) {
            if (80 == p[p.l] && 75 == p[p.l + 1]) return [0, 0];
            (p.chk(ge, "Header Signature: "), (p.l += 16));
            var S = p.read_shift(2, "u");
            return [p.read_shift(2, "u"), S];
          })(K);
          switch ((v = se[0])) {
            case 3:
              E = 512;
              break;
            case 4:
              E = 4096;
              break;
            case 0:
              if (0 == se[1]) return Bf(p, S);
            default:
              throw new Error("Major Version: Expected 3 or 4 saw " + v);
          }
          512 !== E && Fr((K = p.slice(0, E)), 28);
          var he = p.slice(0, E);
          !(function d(p, S) {
            var v;
            switch (((p.l += 2), (v = p.read_shift(2)))) {
              case 9:
                if (3 != S)
                  throw new Error("Sector Shift: Expected 9 saw " + v);
                break;
              case 12:
                if (4 != S)
                  throw new Error("Sector Shift: Expected 12 saw " + v);
                break;
              default:
                throw new Error("Sector Shift: Expected 9 or 12 saw " + v);
            }
            (p.chk("0600", "Mini Sector Shift: "),
              p.chk("000000000000", "Reserved: "));
          })(K, v);
          var Ee = K.read_shift(4, "i");
          if (3 === v && 0 !== Ee)
            throw new Error("# Directory Sectors: Expected 0 saw " + Ee);
          ((K.l += 4),
            (W = K.read_shift(4, "i")),
            (K.l += 4),
            K.chk("00100000", "Mini Stream Cutoff Size: "),
            (q = K.read_shift(4, "i")),
            (w = K.read_shift(4, "i")),
            (V = K.read_shift(4, "i")),
            (k = K.read_shift(4, "i")));
          for (
            var de = -1, me = 0;
            me < 109 && !((de = K.read_shift(4, "i")) < 0);
            ++me
          )
            H[me] = de;
          var Fe = (function x(p, S) {
            for (var v = Math.ceil(p.length / S) - 1, E = [], w = 1; w < v; ++w)
              E[w - 1] = p.slice(w * S, (w + 1) * S);
            return ((E[v - 1] = p.slice(v * S)), E);
          })(p, E);
          _(V, k, Fe, E, H);
          var rr = (function T(p, S, v, E) {
            var w = p.length,
              k = [],
              W = [],
              q = [],
              V = [],
              H = E - 1,
              K = 0,
              se = 0,
              he = 0,
              Ee = 0;
            for (K = 0; K < w; ++K)
              if (((q = []), (he = K + S) >= w && (he -= w), !W[he])) {
                V = [];
                var de = [];
                for (se = he; se >= 0;) {
                  ((de[se] = !0),
                    (W[se] = !0),
                    (q[q.length] = se),
                    V.push(p[se]));
                  var me = v[Math.floor((4 * se) / E)];
                  if (E < 4 + (Ee = (4 * se) & H))
                    throw new Error("FAT boundary crossed: " + se + " 4 " + E);
                  if (!p[me] || de[(se = ua(p[me], Ee))]) break;
                }
                k[he] = { nodes: q, data: ec([V]) };
              }
            return k;
          })(Fe, W, H, E);
          ((rr[W].name = "!Directory"),
            w > 0 && q !== ue && (rr[q].name = "!MiniFAT"),
            (rr[H[0]].name = "!FAT"),
            (rr.fat_addrs = H),
            (rr.ssz = E));
          var gr = [],
            qr = [],
            Ln = [];
          ((function g(p, S, v, E, w, k, W, q) {
            for (
              var Ee,
                V = 0,
                H = E.length ? 2 : 0,
                K = S[p].data,
                se = 0,
                he = 0;
              se < K.length;
              se += 128
            ) {
              var de = K.slice(se, se + 128);
              (Fr(de, 64),
                (he = de.read_shift(2)),
                (Ee = Zn(de, 0, he - H)),
                E.push(Ee));
              var me = {
                name: Ee,
                type: de.read_shift(1),
                color: de.read_shift(1),
                L: de.read_shift(4, "i"),
                R: de.read_shift(4, "i"),
                C: de.read_shift(4, "i"),
                clsid: de.read_shift(16),
                state: de.read_shift(4, "i"),
                start: 0,
                size: 0,
              };
              (0 !==
                de.read_shift(2) +
                  de.read_shift(2) +
                  de.read_shift(2) +
                  de.read_shift(2) && (me.ct = O(de, de.l - 8)),
                0 !==
                  de.read_shift(2) +
                    de.read_shift(2) +
                    de.read_shift(2) +
                    de.read_shift(2) && (me.mt = O(de, de.l - 8)),
                (me.start = de.read_shift(4, "i")),
                (me.size = de.read_shift(4, "i")),
                me.size < 0 &&
                  me.start < 0 &&
                  ((me.size = me.type = 0), (me.start = ue), (me.name = "")),
                5 === me.type
                  ? ((V = me.start),
                    w > 0 && V !== ue && (S[V].name = "!StreamData"))
                  : me.size >= 4096
                    ? ((me.storage = "fat"),
                      void 0 === S[me.start] &&
                        (S[me.start] = A(v, me.start, S.fat_addrs, S.ssz)),
                      (S[me.start].name = me.name),
                      (me.content = S[me.start].data.slice(0, me.size)))
                    : ((me.storage = "minifat"),
                      me.size < 0
                        ? (me.size = 0)
                        : V !== ue &&
                          me.start !== ue &&
                          S[V] &&
                          (me.content = u(me, S[V].data, (S[q] || {}).data))),
                me.content && Fr(me.content, 0),
                (k[Ee] = me),
                W.push(me));
            }
          })(W, rr, Fe, gr, w, {}, qr, q),
            (function m(p, S, v) {
              for (
                var E = 0,
                  w = 0,
                  k = 0,
                  W = 0,
                  q = 0,
                  V = v.length,
                  H = [],
                  K = [];
                E < V;
                ++E
              )
                ((H[E] = K[E] = E), (S[E] = v[E]));
              for (; q < K.length; ++q)
                ((w = p[(E = K[q])].L),
                  (k = p[E].R),
                  (W = p[E].C),
                  H[E] === E &&
                    (-1 !== w && H[w] !== w && (H[E] = H[w]),
                    -1 !== k && H[k] !== k && (H[E] = H[k])),
                  -1 !== W && (H[W] = E),
                  -1 !== w &&
                    E != H[E] &&
                    ((H[w] = H[E]), K.lastIndexOf(w) < q && K.push(w)),
                  -1 !== k &&
                    E != H[E] &&
                    ((H[k] = H[E]), K.lastIndexOf(k) < q && K.push(k)));
              for (E = 1; E < V; ++E)
                H[E] === E &&
                  (-1 !== k && H[k] !== k
                    ? (H[E] = H[k])
                    : -1 !== w && H[w] !== w && (H[E] = H[w]));
              for (E = 1; E < V; ++E)
                if (0 !== p[E].type) {
                  if ((q = E) != H[q])
                    do {
                      S[E] = S[(q = H[q])] + "/" + S[E];
                    } while (0 !== q && -1 !== H[q] && q != H[q]);
                  H[E] = -1;
                }
              for (S[0] += "/", E = 1; E < V; ++E)
                2 !== p[E].type && (S[E] += "/");
            })(qr, Ln, gr),
            gr.shift());
          var bn = { FileIndex: qr, FullPaths: Ln };
          return (S && S.raw && (bn.raw = { header: he, sectors: Fe }), bn);
        }
        function u(p, S, v) {
          for (var w = p.size, k = [], W = p.start; v && w > 0 && W >= 0;)
            (k.push(S.slice(W * b, W * b + b)), (w -= b), (W = ua(v, 4 * W)));
          return 0 === k.length ? j(0) : Tr(k).slice(0, p.size);
        }
        function _(p, S, v, E, w) {
          var k = ue;
          if (p === ue) {
            if (0 !== S) throw new Error("DIFAT chain shorter than expected");
          } else if (-1 !== p) {
            var W = v[p],
              q = (E >>> 2) - 1;
            if (!W) return;
            for (var V = 0; V < q && (k = ua(W, 4 * V)) !== ue; ++V) w.push(k);
            _(ua(W, E - 4), S - 1, v, E, w);
          }
        }
        function A(p, S, v, E, w) {
          var k = [],
            W = [];
          w || (w = []);
          var q = E - 1,
            V = 0,
            H = 0;
          for (V = S; V >= 0;) {
            ((w[V] = !0), (k[k.length] = V), W.push(p[V]));
            var K = v[Math.floor((4 * V) / E)];
            if (E < 4 + (H = (4 * V) & q))
              throw new Error("FAT boundary crossed: " + V + " 4 " + E);
            if (!p[K]) break;
            V = ua(p[K], H);
          }
          return { nodes: k, data: ec([W]) };
        }
        function O(p, S) {
          return new Date(
            1e3 *
              ((Sr(p, S + 4) / 1e7) * Math.pow(2, 32) +
                Sr(p, S) / 1e7 -
                11644473600),
          );
        }
        function F(p, S) {
          var v = S || {},
            E = v.root || "Root Entry";
          if (
            (p.FullPaths || (p.FullPaths = []),
            p.FileIndex || (p.FileIndex = []),
            p.FullPaths.length !== p.FileIndex.length)
          )
            throw new Error("inconsistent CFB structure");
          (0 === p.FullPaths.length &&
            ((p.FullPaths[0] = E + "/"),
            (p.FileIndex[0] = { name: E, type: 5 })),
            v.CLSID && (p.FileIndex[0].clsid = v.CLSID),
            (function P(p) {
              var S = "\x01Sh33tJ5";
              if (!Se.find(p, "/" + S)) {
                var v = j(4);
                ((v[0] = 55),
                  (v[1] = v[3] = 50),
                  (v[2] = 54),
                  p.FileIndex.push({
                    name: S,
                    type: 2,
                    content: v,
                    size: 4,
                    L: 69,
                    R: 69,
                    C: 69,
                  }),
                  p.FullPaths.push(p.FullPaths[0] + S),
                  I(p));
              }
            })(p));
        }
        function I(p, S) {
          F(p);
          for (var v = !1, E = !1, w = p.FullPaths.length - 1; w >= 0; --w) {
            var k = p.FileIndex[w];
            switch (k.type) {
              case 0:
                E ? (v = !0) : (p.FileIndex.pop(), p.FullPaths.pop());
                break;
              case 1:
              case 2:
              case 5:
                ((E = !0),
                  isNaN(k.R * k.L * k.C) && (v = !0),
                  k.R > -1 && k.L > -1 && k.R == k.L && (v = !0));
                break;
              default:
                v = !0;
            }
          }
          if (v || S) {
            var W = new Date(1987, 1, 19),
              q = 0,
              V = Object.create ? Object.create(null) : {},
              H = [];
            for (w = 0; w < p.FullPaths.length; ++w)
              ((V[p.FullPaths[w]] = !0),
                0 !== p.FileIndex[w].type &&
                  H.push([p.FullPaths[w], p.FileIndex[w]]));
            for (w = 0; w < H.length; ++w) {
              var K = a(H[w][0]);
              (E = V[K]) ||
                (H.push([
                  K,
                  {
                    name: n(K).replace("/", ""),
                    type: 1,
                    clsid: ke,
                    ct: W,
                    mt: W,
                    content: null,
                  },
                ]),
                (V[K] = !0));
            }
            for (
              H.sort(function (Ee, de) {
                return (function t(p, S) {
                  for (
                    var v = p.split("/"),
                      E = S.split("/"),
                      w = 0,
                      k = 0,
                      W = Math.min(v.length, E.length);
                    w < W;
                    ++w
                  ) {
                    if ((k = v[w].length - E[w].length)) return k;
                    if (v[w] != E[w]) return v[w] < E[w] ? -1 : 1;
                  }
                  return v.length - E.length;
                })(Ee[0], de[0]);
              }),
                p.FullPaths = [],
                p.FileIndex = [],
                w = 0;
              w < H.length;
              ++w
            )
              ((p.FullPaths[w] = H[w][0]), (p.FileIndex[w] = H[w][1]));
            for (w = 0; w < H.length; ++w) {
              var se = p.FileIndex[w],
                he = p.FullPaths[w];
              if (
                ((se.name = n(he).replace("/", "")),
                (se.L = se.R = se.C = -(se.color = 1)),
                (se.size = se.content ? se.content.length : 0),
                (se.start = 0),
                (se.clsid = se.clsid || ke),
                0 === w)
              )
                ((se.C = H.length > 1 ? 1 : -1), (se.size = 0), (se.type = 5));
              else if ("/" == he.slice(-1)) {
                for (q = w + 1; q < H.length && a(p.FullPaths[q]) != he; ++q);
                for (
                  se.C = q >= H.length ? -1 : q, q = w + 1;
                  q < H.length && a(p.FullPaths[q]) != a(he);
                  ++q
                );
                ((se.R = q >= H.length ? -1 : q), (se.type = 1));
              } else
                (a(p.FullPaths[w + 1] || "") == a(he) && (se.R = w + 1),
                  (se.type = 2));
            }
          }
        }
        function z(p, S) {
          var v = S || {};
          if ("mad" == v.fileType)
            return (function UE(p, S) {
              for (
                var v = S || {},
                  E = v.boundary || "SheetJS",
                  w = [
                    "MIME-Version: 1.0",
                    'Content-Type: multipart/related; boundary="' +
                      (E = "------=" + E).slice(2) +
                      '"',
                    "",
                    "",
                    "",
                  ],
                  k = p.FullPaths[0],
                  W = k,
                  q = p.FileIndex[0],
                  V = 1;
                V < p.FullPaths.length;
                ++V
              )
                if (
                  ((W = p.FullPaths[V].slice(k.length)),
                  (q = p.FileIndex[V]).size && q.content && "\x01Sh33tJ5" != W)
                ) {
                  W = W.replace(
                    /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,
                    function (Fe) {
                      return "_x" + Fe.charCodeAt(0).toString(16) + "_";
                    },
                  ).replace(/[\u0080-\uFFFF]/g, function (Fe) {
                    return "_u" + Fe.charCodeAt(0).toString(16) + "_";
                  });
                  for (
                    var H = q.content,
                      K =
                        be && Buffer.isBuffer(H) ? H.toString("binary") : ve(H),
                      se = 0,
                      he = Math.min(1024, K.length),
                      Ee = 0,
                      de = 0;
                    de <= he;
                    ++de
                  )
                    (Ee = K.charCodeAt(de)) >= 32 && Ee < 128 && ++se;
                  var me = se >= (4 * he) / 5;
                  (w.push(E),
                    w.push(
                      "Content-Location: " +
                        (v.root || "file:///C:/SheetJS/") +
                        W,
                    ),
                    w.push(
                      "Content-Transfer-Encoding: " +
                        (me ? "quoted-printable" : "base64"),
                    ),
                    w.push("Content-Type: " + LE(q, W)),
                    w.push(""),
                    w.push(me ? PE(K) : bE(K)));
                }
              return (w.push(E + "--\r\n"), w.join("\r\n"));
            })(p, v);
          if ("zip" === (I(p), v.fileType))
            return (function IE(p, S) {
              var v = S || {},
                E = [],
                w = [],
                k = j(1),
                W = v.compression ? 8 : 0,
                q = 0,
                H = 0,
                K = 0,
                se = 0,
                he = 0,
                Ee = p.FullPaths[0],
                de = Ee,
                me = p.FileIndex[0],
                Fe = [],
                rr = 0;
              for (H = 1; H < p.FullPaths.length; ++H)
                if (
                  ((de = p.FullPaths[H].slice(Ee.length)),
                  (me = p.FileIndex[H]).size &&
                    me.content &&
                    "\x01Sh33tJ5" != de)
                ) {
                  var Xr = se,
                    gr = j(de.length);
                  for (K = 0; K < de.length; ++K)
                    gr.write_shift(1, 127 & de.charCodeAt(K));
                  ((gr = gr.slice(0, gr.l)), (Fe[he] = su.buf(me.content, 0)));
                  var qr = me.content;
                  (8 == W && (qr = N(qr)),
                    (k = j(30)).write_shift(4, 67324752),
                    k.write_shift(2, 20),
                    k.write_shift(2, q),
                    k.write_shift(2, W),
                    me.mt ? i(k, me.mt) : k.write_shift(4, 0),
                    k.write_shift(-4, 8 & q ? 0 : Fe[he]),
                    k.write_shift(4, 8 & q ? 0 : qr.length),
                    k.write_shift(4, 8 & q ? 0 : me.content.length),
                    k.write_shift(2, gr.length),
                    k.write_shift(2, 0),
                    (se += k.length),
                    E.push(k),
                    (se += gr.length),
                    E.push(gr),
                    (se += qr.length),
                    E.push(qr),
                    8 & q &&
                      ((k = j(12)).write_shift(-4, Fe[he]),
                      k.write_shift(4, qr.length),
                      k.write_shift(4, me.content.length),
                      (se += k.l),
                      E.push(k)),
                    (k = j(46)).write_shift(4, 33639248),
                    k.write_shift(2, 0),
                    k.write_shift(2, 20),
                    k.write_shift(2, q),
                    k.write_shift(2, W),
                    k.write_shift(4, 0),
                    k.write_shift(-4, Fe[he]),
                    k.write_shift(4, qr.length),
                    k.write_shift(4, me.content.length),
                    k.write_shift(2, gr.length),
                    k.write_shift(2, 0),
                    k.write_shift(2, 0),
                    k.write_shift(2, 0),
                    k.write_shift(2, 0),
                    k.write_shift(4, 0),
                    k.write_shift(4, Xr),
                    (rr += k.l),
                    w.push(k),
                    (rr += gr.length),
                    w.push(gr),
                    ++he);
                }
              return (
                (k = j(22)).write_shift(4, 101010256),
                k.write_shift(2, 0),
                k.write_shift(2, 0),
                k.write_shift(2, he),
                k.write_shift(2, he),
                k.write_shift(4, rr),
                k.write_shift(4, se),
                k.write_shift(2, 0),
                Tr([Tr(E), Tr(w), k])
              );
            })(p, v);
          var E = (function (Ee) {
              for (var de = 0, me = 0, Fe = 0; Fe < Ee.FileIndex.length; ++Fe) {
                var rr = Ee.FileIndex[Fe];
                if (rr.content) {
                  var Xr = rr.content.length;
                  Xr > 0 &&
                    (Xr < 4096
                      ? (de += (Xr + 63) >> 6)
                      : (me += (Xr + 511) >> 9));
                }
              }
              for (
                var gr = (Ee.FullPaths.length + 3) >> 2,
                  Ln = (de + 127) >> 7,
                  bn = ((de + 7) >> 3) + me + gr + Ln,
                  Ca = (bn + 127) >> 7,
                  js = Ca <= 109 ? 0 : Math.ceil((Ca - 109) / 127);
                (bn + Ca + js + 127) >> 7 > Ca;
              )
                js = ++Ca <= 109 ? 0 : Math.ceil((Ca - 109) / 127);
              var Bt = [1, js, Ca, Ln, gr, me, de, 0];
              return (
                (Ee.FileIndex[0].size = de << 6),
                (Bt[7] =
                  (Ee.FileIndex[0].start =
                    Bt[0] + Bt[1] + Bt[2] + Bt[3] + Bt[4] + Bt[5]) +
                  ((Bt[6] + 7) >> 3)),
                Bt
              );
            })(p),
            w = j(E[7] << 9),
            k = 0,
            W = 0;
          for (k = 0; k < 8; ++k) w.write_shift(1, xe[k]);
          for (k = 0; k < 8; ++k) w.write_shift(2, 0);
          for (
            w.write_shift(2, 62),
              w.write_shift(2, 3),
              w.write_shift(2, 65534),
              w.write_shift(2, 9),
              w.write_shift(2, 6),
              k = 0;
            k < 3;
            ++k
          )
            w.write_shift(2, 0);
          for (
            w.write_shift(4, 0),
              w.write_shift(4, E[2]),
              w.write_shift(4, E[0] + E[1] + E[2] + E[3] - 1),
              w.write_shift(4, 0),
              w.write_shift(4, 4096),
              w.write_shift(4, E[3] ? E[0] + E[1] + E[2] - 1 : ue),
              w.write_shift(4, E[3]),
              w.write_shift(-4, E[1] ? E[0] - 1 : ue),
              w.write_shift(4, E[1]),
              k = 0;
            k < 109;
            ++k
          )
            w.write_shift(-4, k < E[2] ? E[1] + k : -1);
          if (E[1])
            for (W = 0; W < E[1]; ++W) {
              for (; k < 236 + 127 * W; ++k)
                w.write_shift(-4, k < E[2] ? E[1] + k : -1);
              w.write_shift(-4, W === E[1] - 1 ? ue : W + 1);
            }
          var q = function (Ee) {
            for (W += Ee; k < W - 1; ++k) w.write_shift(-4, k + 1);
            Ee && (++k, w.write_shift(-4, ue));
          };
          for (W = k = 0, W += E[1]; k < W; ++k) w.write_shift(-4, Ae.DIFSECT);
          for (W += E[2]; k < W; ++k) w.write_shift(-4, Ae.FATSECT);
          (q(E[3]), q(E[4]));
          for (
            var V = 0, H = 0, K = p.FileIndex[0];
            V < p.FileIndex.length;
            ++V
          )
            (K = p.FileIndex[V]).content &&
              !((H = K.content.length) < 4096) &&
              ((K.start = W), q((H + 511) >> 9));
          for (q((E[6] + 7) >> 3); 511 & w.l;) w.write_shift(-4, Ae.ENDOFCHAIN);
          for (W = k = 0, V = 0; V < p.FileIndex.length; ++V)
            (K = p.FileIndex[V]).content &&
              (H = K.content.length) &&
              !(H >= 4096) &&
              ((K.start = W), q((H + 63) >> 6));
          for (; 511 & w.l;) w.write_shift(-4, Ae.ENDOFCHAIN);
          for (k = 0; k < E[4] << 2; ++k) {
            var se = p.FullPaths[k];
            if (se && 0 !== se.length) {
              ((K = p.FileIndex[k]),
                0 === k && (K.start = K.size ? K.start - 1 : ue));
              var he = (0 === k && v.root) || K.name;
              if (
                ((H = 2 * (he.length + 1)),
                w.write_shift(64, he, "utf16le"),
                w.write_shift(2, H),
                w.write_shift(1, K.type),
                w.write_shift(1, K.color),
                w.write_shift(-4, K.L),
                w.write_shift(-4, K.R),
                w.write_shift(-4, K.C),
                K.clsid)
              )
                w.write_shift(16, K.clsid, "hex");
              else for (V = 0; V < 4; ++V) w.write_shift(4, 0);
              (w.write_shift(4, K.state || 0),
                w.write_shift(4, 0),
                w.write_shift(4, 0),
                w.write_shift(4, 0),
                w.write_shift(4, 0),
                w.write_shift(4, K.start),
                w.write_shift(4, K.size),
                w.write_shift(4, 0));
            } else {
              for (V = 0; V < 17; ++V) w.write_shift(4, 0);
              for (V = 0; V < 3; ++V) w.write_shift(4, -1);
              for (V = 0; V < 12; ++V) w.write_shift(4, 0);
            }
          }
          for (k = 1; k < p.FileIndex.length; ++k)
            if ((K = p.FileIndex[k]).size >= 4096)
              if (
                ((w.l = (K.start + 1) << 9), be && Buffer.isBuffer(K.content))
              )
                (K.content.copy(w, w.l, 0, K.size),
                  (w.l += (K.size + 511) & -512));
              else {
                for (V = 0; V < K.size; ++V) w.write_shift(1, K.content[V]);
                for (; 511 & V; ++V) w.write_shift(1, 0);
              }
          for (k = 1; k < p.FileIndex.length; ++k)
            if ((K = p.FileIndex[k]).size > 0 && K.size < 4096)
              if (be && Buffer.isBuffer(K.content))
                (K.content.copy(w, w.l, 0, K.size),
                  (w.l += (K.size + 63) & -64));
              else {
                for (V = 0; V < K.size; ++V) w.write_shift(1, K.content[V]);
                for (; 63 & V; ++V) w.write_shift(1, 0);
              }
          if (be) w.l = w.length;
          else for (; w.l < w.length;) w.write_shift(1, 0);
          return w;
        }
        r.version = "1.2.1";
        var ne,
          b = 64,
          ue = -2,
          ge = "d0cf11e0a1b11ae1",
          xe = [208, 207, 17, 224, 161, 177, 26, 225],
          ke = "00000000000000000000000000000000",
          Ae = {
            MAXREGSECT: -6,
            DIFSECT: -4,
            FATSECT: -3,
            ENDOFCHAIN: ue,
            FREESECT: -1,
            HEADER_SIGNATURE: ge,
            HEADER_MINOR_VERSION: "3e00",
            MAXREGSID: -6,
            NOSTREAM: -1,
            HEADER_CLSID: ke,
            EntryTypes: [
              "unknown",
              "storage",
              "stream",
              "lockbytes",
              "property",
              "root",
            ],
          };
        function ve(p) {
          for (var S = new Array(p.length), v = 0; v < p.length; ++v)
            S[v] = String.fromCharCode(p[v]);
          return S.join("");
        }
        function N(p) {
          return ne ? ne.deflateRawSync(p) : Pe(p);
        }
        for (
          var p,
            S,
            R = [
              16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
            ],
            ee = [
              3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43,
              51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258,
            ],
            _e = [
              1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257,
              385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289,
              16385, 24577,
            ],
            fe = typeof Uint8Array < "u",
            te = fe ? new Uint8Array(256) : [],
            Le = 0;
          Le < 256;
          ++Le
        )
          te[Le] =
            (void 0,
            255 &
              (((S =
                (139536 & (((p = Le) << 1) | (p << 11))) |
                (558144 & ((p << 5) | (p << 15)))) >>
                16) |
                (S >> 8) |
                S));
        function C(p, S) {
          var v = te[255 & p];
          return S <= 8
            ? v >>> (8 - S)
            : ((v = (v << 8) | te[(p >> 8) & 255]),
              S <= 16
                ? v >>> (16 - S)
                : (v = (v << 8) | te[(p >> 16) & 255]) >>> (24 - S));
        }
        function Ze(p, S) {
          var v = 7 & S,
            E = S >>> 3;
          return ((p[E] | (v <= 6 ? 0 : p[E + 1] << 8)) >>> v) & 3;
        }
        function Me(p, S) {
          var v = 7 & S,
            E = S >>> 3;
          return ((p[E] | (v <= 5 ? 0 : p[E + 1] << 8)) >>> v) & 7;
        }
        function Be(p, S) {
          var v = 7 & S,
            E = S >>> 3;
          return ((p[E] | (v <= 3 ? 0 : p[E + 1] << 8)) >>> v) & 31;
        }
        function pe(p, S) {
          var v = 7 & S,
            E = S >>> 3;
          return ((p[E] | (v <= 1 ? 0 : p[E + 1] << 8)) >>> v) & 127;
        }
        function dr(p, S, v) {
          var E = 7 & S,
            w = S >>> 3,
            W = p[w] >>> E;
          return (
            v < 8 - E ||
              ((W |= p[w + 1] << (8 - E)), v < 16 - E) ||
              ((W |= p[w + 2] << (16 - E)), v < 24 - E) ||
              (W |= p[w + 3] << (24 - E)),
            W & ((1 << v) - 1)
          );
        }
        function ft(p, S, v) {
          var E = 7 & S,
            w = S >>> 3;
          return (
            E <= 5
              ? (p[w] |= (7 & v) << E)
              : ((p[w] |= (v << E) & 255), (p[w + 1] = (7 & v) >> (8 - E))),
            S + 3
          );
        }
        function wt(p, S, v) {
          return ((p[S >>> 3] |= v = (1 & v) << (7 & S)), S + 1);
        }
        function Dt(p, S, v) {
          var w = S >>> 3;
          return ((p[w] |= 255 & (v <<= 7 & S)), (p[w + 1] = v >>>= 8), S + 8);
        }
        function On(p, S, v) {
          var w = S >>> 3;
          return (
            (p[w] |= 255 & (v <<= 7 & S)),
            (p[w + 1] = 255 & (v >>>= 8)),
            (p[w + 2] = v >>> 8),
            S + 16
          );
        }
        function ea(p, S) {
          var v = p.length,
            E = 2 * v > S ? 2 * v : S + 5,
            w = 0;
          if (v >= S) return p;
          if (be) {
            var k = x0(E);
            if (p.copy) p.copy(k);
            else for (; w < p.length; ++w) k[w] = p[w];
            return k;
          }
          if (fe) {
            var W = new Uint8Array(E);
            if (W.set) W.set(p);
            else for (; w < v; ++w) W[w] = p[w];
            return W;
          }
          return ((p.length = E), p);
        }
        function Qr(p) {
          for (var S = new Array(p), v = 0; v < p; ++v) S[v] = 0;
          return S;
        }
        function Mt(p, S, v) {
          var E = 1,
            w = 0,
            k = 0,
            W = 0,
            q = 0,
            V = p.length,
            H = fe ? new Uint16Array(32) : Qr(32);
          for (k = 0; k < 32; ++k) H[k] = 0;
          for (k = V; k < v; ++k) p[k] = 0;
          V = p.length;
          var K = fe ? new Uint16Array(V) : Qr(V);
          for (k = 0; k < V; ++k)
            (H[(w = p[k])]++, E < w && (E = w), (K[k] = 0));
          for (H[0] = 0, k = 1; k <= E; ++k)
            H[k + 16] = q = (q + H[k - 1]) << 1;
          for (k = 0; k < V; ++k) 0 != (q = p[k]) && (K[k] = H[q + 16]++);
          var se = 0;
          for (k = 0; k < V; ++k)
            if (0 != (se = p[k]))
              for (
                q = C(K[k], E) >> (E - se), W = (1 << (E + 4 - se)) - 1;
                W >= 0;
                --W
              )
                S[q | (W << se)] = (15 & se) | (k << 4);
          return E;
        }
        var ra = fe ? new Uint16Array(512) : Qr(512),
          In = fe ? new Uint16Array(32) : Qr(32);
        if (!fe) {
          for (var Hr = 0; Hr < 512; ++Hr) ra[Hr] = 0;
          for (Hr = 0; Hr < 32; ++Hr) In[Hr] = 0;
        }
        !(function () {
          for (var p = [], S = 0; S < 32; S++) p.push(5);
          Mt(p, In, 32);
          var v = [];
          for (S = 0; S <= 143; S++) v.push(8);
          for (; S <= 255; S++) v.push(9);
          for (; S <= 279; S++) v.push(7);
          for (; S <= 287; S++) v.push(8);
          Mt(v, ra, 288);
        })();
        var kt = (function () {
          for (
            var S = fe ? new Uint8Array(32768) : [], v = 0, E = 0;
            v < _e.length - 1;
            ++v
          )
            for (; E < _e[v + 1]; ++E) S[E] = v;
          for (; E < 32768; ++E) S[E] = 29;
          var w = fe ? new Uint8Array(259) : [];
          for (v = 0, E = 0; v < ee.length - 1; ++v)
            for (; E < ee[v + 1]; ++E) w[E] = v;
          return function (V, H) {
            return V.length < 8
              ? (function k(q, V) {
                  for (var H = 0; H < q.length;) {
                    var K = Math.min(65535, q.length - H);
                    for (
                      V.write_shift(1, +(H + K == q.length)),
                        V.write_shift(2, K),
                        V.write_shift(2, 65535 & ~K);
                      K-- > 0;
                    )
                      V[V.l++] = q[H++];
                  }
                  return V.l;
                })(V, H)
              : (function W(q, V) {
                  for (
                    var H = 0, K = 0, se = fe ? new Uint16Array(32768) : [];
                    K < q.length;
                  ) {
                    var he = Math.min(65535, q.length - K);
                    if (he < 10) {
                      for (
                        7 & (H = ft(V, H, +(K + he == q.length))) &&
                          (H += 8 - (7 & H)),
                          V.l = (H / 8) | 0,
                          V.write_shift(2, he),
                          V.write_shift(2, 65535 & ~he);
                        he-- > 0;
                      )
                        V[V.l++] = q[K++];
                      H = 8 * V.l;
                    } else {
                      H = ft(V, H, +(K + he == q.length) + 2);
                      for (var Ee = 0; he-- > 0;) {
                        var de = q[K],
                          me = -1,
                          Fe = 0;
                        if (
                          (me = se[(Ee = 32767 & ((Ee << 5) ^ de))]) &&
                          ((me |= -32768 & K) > K && (me -= 32768), me < K)
                        )
                          for (; q[me + Fe] == q[K + Fe] && Fe < 250;) ++Fe;
                        if (Fe > 2) {
                          (de = w[Fe]) <= 22
                            ? (H = Dt(V, H, te[de + 1] >> 1) - 1)
                            : (Dt(V, H, 3),
                              Dt(V, (H += 5), te[de - 23] >> 5),
                              (H += 3));
                          var rr = de < 8 ? 0 : (de - 4) >> 2;
                          (rr > 0 && (On(V, H, Fe - ee[de]), (H += rr)),
                            (H = Dt(V, H, te[(de = S[K - me])] >> 3)),
                            (H -= 3));
                          var Xr = de < 4 ? 0 : (de - 2) >> 1;
                          Xr > 0 && (On(V, H, K - me - _e[de]), (H += Xr));
                          for (var gr = 0; gr < Fe; ++gr)
                            ((se[Ee] = 32767 & K),
                              (Ee = 32767 & ((Ee << 5) ^ q[K])),
                              ++K);
                          he -= Fe - 1;
                        } else
                          (de <= 143 ? (de += 48) : (H = wt(V, H, 1)),
                            (H = Dt(V, H, te[de])),
                            (se[Ee] = 32767 & K),
                            ++K);
                      }
                      H = Dt(V, H, 0) - 1;
                    }
                  }
                  return ((V.l = ((H + 7) / 8) | 0), V.l);
                })(V, H);
          };
        })();
        function Pe(p) {
          var S = j(50 + Math.floor(1.1 * p.length)),
            v = kt(p, S);
          return S.slice(0, v);
        }
        var xr = fe ? new Uint16Array(32768) : Qr(32768),
          lt = fe ? new Uint16Array(32768) : Qr(32768),
          Er = fe ? new Uint16Array(128) : Qr(128),
          ka = 1,
          Pf = 1;
        function RE(p, S) {
          var v = Be(p, S) + 257,
            E = Be(p, (S += 5)) + 1,
            w =
              (function $e(p, S) {
                var v = 7 & S,
                  E = S >>> 3;
                return ((p[E] | (v <= 4 ? 0 : p[E + 1] << 8)) >>> v) & 15;
              })(p, (S += 5)) + 4;
          S += 4;
          for (
            var k = 0,
              W = fe ? new Uint8Array(19) : Qr(19),
              q = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              V = 1,
              H = fe ? new Uint8Array(8) : Qr(8),
              K = fe ? new Uint8Array(8) : Qr(8),
              se = W.length,
              he = 0;
            he < w;
            ++he
          )
            ((W[R[he]] = k = Me(p, S)), V < k && (V = k), H[k]++, (S += 3));
          var Ee = 0;
          for (H[0] = 0, he = 1; he <= V; ++he)
            K[he] = Ee = (Ee + H[he - 1]) << 1;
          for (he = 0; he < se; ++he) 0 != (Ee = W[he]) && (q[he] = K[Ee]++);
          var de = 0;
          for (he = 0; he < se; ++he)
            if (0 != (de = W[he])) {
              Ee = te[q[he]] >> (8 - de);
              for (var me = (1 << (7 - de)) - 1; me >= 0; --me)
                Er[Ee | (me << de)] = (7 & de) | (he << 3);
            }
          var Fe = [];
          for (V = 1; Fe.length < v + E;)
            switch (((Ee = Er[pe(p, S)]), (S += 7 & Ee), (Ee >>>= 3))) {
              case 16:
                for (k = 3 + Ze(p, S), S += 2, Ee = Fe[Fe.length - 1]; k-- > 0;)
                  Fe.push(Ee);
                break;
              case 17:
                for (k = 3 + Me(p, S), S += 3; k-- > 0;) Fe.push(0);
                break;
              case 18:
                for (k = 11 + pe(p, S), S += 7; k-- > 0;) Fe.push(0);
                break;
              default:
                (Fe.push(Ee), V < Ee && (V = Ee));
            }
          var rr = Fe.slice(0, v),
            Xr = Fe.slice(v);
          for (he = v; he < 286; ++he) rr[he] = 0;
          for (he = E; he < 30; ++he) Xr[he] = 0;
          return ((ka = Mt(rr, xr, 286)), (Pf = Mt(Xr, lt, 30)), S);
        }
        function Df(p, S) {
          var E = (function NE(p, S) {
            if (3 == p[0] && !(3 & p[1])) return [Ht(S), 2];
            for (
              var v = 0,
                E = 0,
                w = x0(S || 1 << 18),
                k = 0,
                W = w.length >>> 0,
                q = 0,
                V = 0;
              !(1 & E);
            )
              if (((E = Me(p, v)), (v += 3), E >>> 1))
                for (
                  E >> 1 == 1
                    ? ((q = 9), (V = 5))
                    : ((v = RE(p, v)), (q = ka), (V = Pf));
                  ;
                ) {
                  !S && W < k + 32767 && (W = (w = ea(w, k + 32767)).length);
                  var K = dr(p, v, q),
                    se = E >>> 1 == 1 ? ra[K] : xr[K];
                  if (((v += 15 & se), ((se >>>= 4) >>> 8) & 255)) {
                    if (256 == se) break;
                    var he = (se -= 257) < 8 ? 0 : (se - 4) >> 2;
                    he > 5 && (he = 0);
                    var Ee = k + ee[se];
                    (he > 0 && ((Ee += dr(p, v, he)), (v += he)),
                      (K = dr(p, v, V)),
                      (v += 15 & (se = E >>> 1 == 1 ? In[K] : lt[K])));
                    var de = (se >>>= 4) < 4 ? 0 : (se - 2) >> 1,
                      me = _e[se];
                    for (
                      de > 0 && ((me += dr(p, v, de)), (v += de)),
                        !S && W < Ee && (W = (w = ea(w, Ee + 100)).length);
                      k < Ee;
                    )
                      ((w[k] = w[k - me]), ++k);
                  } else w[k++] = se;
                }
              else {
                7 & v && (v += 8 - (7 & v));
                var H = p[v >>> 3] | (p[1 + (v >>> 3)] << 8);
                if (((v += 32), H > 0))
                  for (
                    !S && W < k + H && (W = (w = ea(w, k + H)).length);
                    H-- > 0;
                  )
                    ((w[k++] = p[v >>> 3]), (v += 8));
              }
            return S ? [w, (v + 7) >>> 3] : [w.slice(0, k), (v + 7) >>> 3];
          })(p.slice(p.l || 0), S);
          return ((p.l += E[1]), E[0]);
        }
        function Mf(p, S) {
          if (!p) throw new Error(S);
          typeof console < "u" && console.error(S);
        }
        function Bf(p, S) {
          var v = p;
          Fr(v, 0);
          var k = { FileIndex: [], FullPaths: [] };
          F(k, { root: S.root });
          for (
            var W = v.length - 4;
            (80 != v[W] || 75 != v[W + 1] || 5 != v[W + 2] || 6 != v[W + 3]) &&
            W >= 0;
          )
            --W;
          ((v.l = W + 4), (v.l += 4));
          var q = v.read_shift(2);
          v.l += 6;
          var V = v.read_shift(4);
          for (v.l = V, W = 0; W < q; ++W) {
            v.l += 20;
            var H = v.read_shift(4),
              K = v.read_shift(4),
              se = v.read_shift(2),
              he = v.read_shift(2),
              Ee = v.read_shift(2);
            v.l += 8;
            var de = v.read_shift(4),
              me = c(v.slice(v.l + se, v.l + se + he));
            v.l += se + he + Ee;
            var Fe = v.l;
            ((v.l = de + 4), OE(v, H, K, k, me), (v.l = Fe));
          }
          return k;
        }
        function OE(p, S, v, E, w) {
          p.l += 2;
          var k = p.read_shift(2),
            W = p.read_shift(2),
            q = (function s(p) {
              var S = 65535 & p.read_shift(2),
                v = 65535 & p.read_shift(2),
                E = new Date(),
                w = 31 & v,
                k = 15 & (v >>>= 5);
              ((v >>>= 4),
                E.setMilliseconds(0),
                E.setFullYear(v + 1980),
                E.setMonth(k - 1),
                E.setDate(w));
              var W = 31 & S,
                q = 63 & (S >>>= 5);
              return (
                E.setHours((S >>>= 6)),
                E.setMinutes(q),
                E.setSeconds(W << 1),
                E
              );
            })(p);
          if (8257 & k) throw new Error("Unsupported ZIP encryption");
          p.read_shift(4);
          for (
            var H = p.read_shift(4),
              K = p.read_shift(4),
              se = p.read_shift(2),
              he = p.read_shift(2),
              Ee = "",
              de = 0;
            de < se;
            ++de
          )
            Ee += String.fromCharCode(p[p.l++]);
          if (he) {
            var me = c(p.slice(p.l, p.l + he));
            ((me[21589] || {}).mt && (q = me[21589].mt),
              ((w || {})[21589] || {}).mt && (q = w[21589].mt));
          }
          p.l += he;
          var Fe = p.slice(p.l, p.l + H);
          switch (W) {
            case 8:
              Fe = (function X(p, S) {
                if (!ne) return Df(p, S);
                var E = new (0, ne.InflateRaw)(),
                  w = E._processChunk(p.slice(p.l), E._finishFlushFlag);
                return ((p.l += E.bytesRead), w);
              })(p, K);
              break;
            case 0:
              break;
            default:
              throw new Error("Unsupported ZIP Compression method " + W);
          }
          var rr = !1;
          (8 & k &&
            (134695760 == p.read_shift(4) && (p.read_shift(4), (rr = !0)),
            (H = p.read_shift(4)),
            (K = p.read_shift(4))),
            H != S && Mf(rr, "Bad compressed size: " + S + " != " + H),
            K != v && Mf(rr, "Bad uncompressed size: " + v + " != " + K),
            $s(E, Ee, Fe, { unsafe: !0, mt: q }));
        }
        var Ei = {
          htm: "text/html",
          xml: "text/xml",
          gif: "image/gif",
          jpg: "image/jpeg",
          png: "image/png",
          mso: "application/x-mso",
          thmx: "application/vnd.ms-officetheme",
          sh33tj5: "application/octet-stream",
        };
        function LE(p, S) {
          if (p.ctype) return p.ctype;
          var v = p.name || "",
            E = v.match(/\.([^\.]+)$/);
          return (E && Ei[E[1]]) ||
            (S && (E = (v = S).match(/[\.\\]([^\.\\])+$/)) && Ei[E[1]])
            ? Ei[E[1]]
            : "application/octet-stream";
        }
        function bE(p) {
          for (var S = qa(p), v = [], E = 0; E < S.length; E += 76)
            v.push(S.slice(E, E + 76));
          return v.join("\r\n") + "\r\n";
        }
        function PE(p) {
          var S = p.replace(
            /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,
            function (H) {
              var K = H.charCodeAt(0).toString(16).toUpperCase();
              return "=" + (1 == K.length ? "0" + K : K);
            },
          );
          "\n" ==
            (S = S.replace(/ $/gm, "=20").replace(/\t$/gm, "=09")).charAt(0) &&
            (S = "=0D" + S.slice(1));
          for (
            var v = [],
              E = (S = S.replace(/\r(?!\n)/gm, "=0D")
                .replace(/\n\n/gm, "\n=0A")
                .replace(/([^\r\n])\n/gm, "$1=0A")).split("\r\n"),
              w = 0;
            w < E.length;
            ++w
          ) {
            var k = E[w];
            if (0 != k.length)
              for (var W = 0; W < k.length;) {
                var q = 76,
                  V = k.slice(W, W + q);
                ("=" == V.charAt(q - 1)
                  ? q--
                  : "=" == V.charAt(q - 2)
                    ? (q -= 2)
                    : "=" == V.charAt(q - 3) && (q -= 3),
                  (V = k.slice(W, W + q)),
                  (W += q) < k.length && (V += "="),
                  v.push(V));
              }
            else v.push("");
          }
          return v.join("\r\n");
        }
        function ME(p, S, v) {
          for (var W, E = "", w = "", k = "", q = 0; q < 10; ++q) {
            var V = S[q];
            if (!V || V.match(/^\s*$/)) break;
            var H = V.match(/^(.*?):\s*([^\s].*)$/);
            if (H)
              switch (H[1].toLowerCase()) {
                case "content-location":
                  E = H[2].trim();
                  break;
                case "content-type":
                  k = H[2].trim();
                  break;
                case "content-transfer-encoding":
                  w = H[2].trim();
              }
          }
          switch ((++q, w.toLowerCase())) {
            case "base64":
              W = Jr(zr(S.slice(q).join("")));
              break;
            case "quoted-printable":
              W = (function DE(p) {
                for (var S = [], v = 0; v < p.length; ++v) {
                  for (
                    var E = p[v];
                    v <= p.length && "=" == E.charAt(E.length - 1);
                  )
                    E = E.slice(0, E.length - 1) + p[++v];
                  S.push(E);
                }
                for (var w = 0; w < S.length; ++w)
                  S[w] = S[w].replace(/[=][0-9A-Fa-f]{2}/g, function (k) {
                    return String.fromCharCode(parseInt(k.slice(1), 16));
                  });
                return Jr(S.join("\r\n"));
              })(S.slice(q));
              break;
            default:
              throw new Error("Unsupported Content-Transfer-Encoding " + w);
          }
          var K = $s(p, E.slice(v.length), W, { unsafe: !0 });
          k && (K.ctype = k);
        }
        function $s(p, S, v, E) {
          var w = E && E.unsafe;
          w || F(p);
          var k = !w && Se.find(p, S);
          if (!k) {
            var W = p.FullPaths[0];
            (S.slice(0, W.length) == W
              ? (W = S)
              : ("/" != W.slice(-1) && (W += "/"),
                (W = (W + S).replace("//", "/"))),
              (k = { name: n(S), type: 2 }),
              p.FileIndex.push(k),
              p.FullPaths.push(W),
              w || Se.utils.cfb_gc(p));
          }
          return (
            (k.content = v),
            (k.size = v ? v.length : 0),
            E &&
              (E.CLSID && (k.clsid = E.CLSID),
              E.mt && (k.mt = E.mt),
              E.ct && (k.ct = E.ct)),
            k
          );
        }
        return (
          (r.find = function Z(p, S) {
            var v = p.FullPaths.map(function (V) {
                return V.toUpperCase();
              }),
              E = v.map(function (V) {
                var H = V.split("/");
                return H[H.length - ("/" == V.slice(-1) ? 2 : 1)];
              }),
              w = !1;
            47 === S.charCodeAt(0)
              ? ((w = !0), (S = v[0].slice(0, -1) + S))
              : (w = -1 !== S.indexOf("/"));
            var k = S.toUpperCase(),
              W = !0 === w ? v.indexOf(k) : E.indexOf(k);
            if (-1 !== W) return p.FileIndex[W];
            var q = !k.match(rn);
            for (
              k = k.replace(Rr, ""), q && (k = k.replace(rn, "!")), W = 0;
              W < v.length;
              ++W
            )
              if (
                (q ? v[W].replace(rn, "!") : v[W]).replace(Rr, "") == k ||
                (q ? E[W].replace(rn, "!") : E[W]).replace(Rr, "") == k
              )
                return p.FileIndex[W];
            return null;
          }),
          (r.read = function Y(p, S) {
            var v = S && S.type;
            switch (
              (v || (be && Buffer.isBuffer(p) && (v = "buffer")), v || "base64")
            ) {
              case "file":
                return (function D(p, S) {
                  return (f(), l(o.readFileSync(p), S));
                })(p, S);
              case "base64":
                return l(Jr(zr(p)), S);
              case "binary":
                return l(Jr(p), S);
            }
            return l(p, S);
          }),
          (r.parse = l),
          (r.write = function ye(p, S) {
            var v = z(p, S);
            switch ((S && S.type) || "buffer") {
              case "file":
                return (f(), o.writeFileSync(S.filename, v), v);
              case "binary":
                return "string" == typeof v ? v : ve(v);
              case "base64":
                return qa("string" == typeof v ? v : ve(v));
              case "buffer":
                if (be) return Buffer.isBuffer(v) ? v : Ft(v);
              case "array":
                return "string" == typeof v ? Jr(v) : v;
            }
            return v;
          }),
          (r.writeFile = function De(p, S, v) {
            f();
            var E = z(p, v);
            o.writeFileSync(S, E);
          }),
          (r.utils = {
            cfb_new: function GE(p) {
              var S = {};
              return (F(S, p), S);
            },
            cfb_add: $s,
            cfb_del: function WE(p, S) {
              F(p);
              var v = Se.find(p, S);
              if (v)
                for (var E = 0; E < p.FileIndex.length; ++E)
                  if (p.FileIndex[E] == v)
                    return (
                      p.FileIndex.splice(E, 1),
                      p.FullPaths.splice(E, 1),
                      !0
                    );
              return !1;
            },
            cfb_mov: function HE(p, S, v) {
              F(p);
              var E = Se.find(p, S);
              if (E)
                for (var w = 0; w < p.FileIndex.length; ++w)
                  if (p.FileIndex[w] == E)
                    return (
                      (p.FileIndex[w].name = n(v)),
                      (p.FullPaths[w] = v),
                      !0
                    );
              return !1;
            },
            cfb_gc: function VE(p) {
              I(p, !0);
            },
            ReadShift: fn,
            CheckField: hc,
            prep_blob: Fr,
            bconcat: Tr,
            use_zlib: function y(p) {
              try {
                var v = new (0, p.InflateRaw)();
                if (
                  (v._processChunk(new Uint8Array([3, 0]), v._finishFlushFlag),
                  !v.bytesRead)
                )
                  throw new Error("zlib does not expose bytesRead");
                ne = p;
              } catch (E) {
                console.error("cannot use native zlib: " + (E.message || E));
              }
            },
            _deflateRaw: Pe,
            _inflateRaw: Df,
            consts: Ae,
          }),
          r
        );
      })();
    let Yt;
    function cu(e) {
      return "string" == typeof e
        ? en(e)
        : Array.isArray(e)
          ? (function Il(e) {
              if (typeof Uint8Array > "u") throw new Error("Unsupported");
              return new Uint8Array(e);
            })(e)
          : e;
    }
    function nn(e, r, t) {
      if (typeof Yt < "u" && Yt.writeFileSync)
        return t ? Yt.writeFileSync(e, r, t) : Yt.writeFileSync(e, r);
      if (typeof Deno < "u") {
        if (t && "string" == typeof r)
          switch (t) {
            case "utf8":
              r = new TextEncoder(t).encode(r);
              break;
            case "binary":
              r = en(r);
              break;
            default:
              throw new Error("Unsupported encoding " + t);
          }
        return Deno.writeFileSync(e, r);
      }
      var a = "utf8" == t ? gt(r) : r;
      if (typeof IE_SaveFile < "u") return IE_SaveFile(a, e);
      if (typeof Blob < "u") {
        var n = new Blob([cu(a)], { type: "application/octet-stream" });
        if (typeof navigator < "u" && navigator.msSaveBlob)
          return navigator.msSaveBlob(n, e);
        if (typeof saveAs < "u") return saveAs(n, e);
        if (
          typeof URL < "u" &&
          typeof document < "u" &&
          document.createElement &&
          URL.createObjectURL
        ) {
          var i = URL.createObjectURL(n);
          if (
            "object" == typeof chrome &&
            "function" == typeof (chrome.downloads || {}).download
          )
            return (
              URL.revokeObjectURL &&
                typeof setTimeout < "u" &&
                setTimeout(function () {
                  URL.revokeObjectURL(i);
                }, 6e4),
              chrome.downloads.download({ url: i, filename: e, saveAs: !0 })
            );
          var s = document.createElement("a");
          if (null != s.download)
            return (
              (s.download = e),
              (s.href = i),
              document.body.appendChild(s),
              s.click(),
              document.body.removeChild(s),
              URL.revokeObjectURL &&
                typeof setTimeout < "u" &&
                setTimeout(function () {
                  URL.revokeObjectURL(i);
                }, 6e4),
              i
            );
        }
      }
      if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u")
        try {
          var c = File(e);
          return (
            c.open("w"),
            (c.encoding = "binary"),
            Array.isArray(r) && (r = Vt(r)),
            c.write(r),
            c.close(),
            r
          );
        } catch (o) {
          if (!o.message || !o.message.match(/onstruct/)) throw o;
        }
      throw new Error("cannot save file " + e);
    }
    function sr(e) {
      for (var r = Object.keys(e), t = [], a = 0; a < r.length; ++a)
        Object.prototype.hasOwnProperty.call(e, r[a]) && t.push(r[a]);
      return t;
    }
    function L0(e, r) {
      for (var t = [], a = sr(e), n = 0; n !== a.length; ++n)
        null == t[e[a[n]][r]] && (t[e[a[n]][r]] = a[n]);
      return t;
    }
    function Kn(e) {
      for (var r = [], t = sr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] = t[a];
      return r;
    }
    function Yn(e) {
      for (var r = [], t = sr(e), a = 0; a !== t.length; ++a)
        r[e[t[a]]] = parseInt(t[a], 10);
      return r;
    }
    var zn = new Date(1899, 11, 30, 0, 0, 0);
    function Ar(e, r) {
      var t = e.getTime();
      return (
        r && (t -= 1263168e5),
        (t -
          (zn.getTime() +
            6e4 * (e.getTimezoneOffset() - zn.getTimezoneOffset()))) /
          864e5
      );
    }
    var b0 = new Date(),
      lu =
        zn.getTime() + 6e4 * (b0.getTimezoneOffset() - zn.getTimezoneOffset()),
      P0 = b0.getTimezoneOffset();
    function Mi(e) {
      var r = new Date();
      return (
        r.setTime(24 * e * 60 * 60 * 1e3 + lu),
        r.getTimezoneOffset() !== P0 &&
          r.setTime(r.getTime() + 6e4 * (r.getTimezoneOffset() - P0)),
        r
      );
    }
    var D0 = new Date("2017-02-19T19:06:09.000Z"),
      M0 = isNaN(D0.getFullYear()) ? new Date("2/19/17") : D0,
      hu = 2017 == M0.getFullYear();
    function nr(e, r) {
      var t = new Date(e);
      if (hu)
        return (
          r > 0
            ? t.setTime(t.getTime() + 60 * t.getTimezoneOffset() * 1e3)
            : r < 0 &&
              t.setTime(t.getTime() - 60 * t.getTimezoneOffset() * 1e3),
          t
        );
      if (e instanceof Date) return e;
      if (1917 == M0.getFullYear() && !isNaN(t.getFullYear())) {
        var a = t.getFullYear();
        return (
          e.indexOf("" + a) > -1 || t.setFullYear(t.getFullYear() + 100),
          t
        );
      }
      var n = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"],
        i = new Date(
          +n[0],
          +n[1] - 1,
          +n[2],
          +n[3] || 0,
          +n[4] || 0,
          +n[5] || 0,
        );
      return (
        e.indexOf("Z") > -1 &&
          (i = new Date(i.getTime() - 60 * i.getTimezoneOffset() * 1e3)),
        i
      );
    }
    function la(e, r) {
      if (be && Buffer.isBuffer(e)) {
        if (r) {
          if (255 == e[0] && 254 == e[1])
            return gt(e.slice(2).toString("utf16le"));
          if (254 == e[1] && 255 == e[2])
            return gt(
              (function d0(e) {
                for (var r = [], t = 0; t < e.length >> 1; ++t)
                  r[t] = String.fromCharCode(
                    e.charCodeAt(2 * t + 1) + (e.charCodeAt(2 * t) << 8),
                  );
                return r.join("");
              })(e.slice(2).toString("binary")),
            );
        }
        return e.toString("binary");
      }
      if (typeof TextDecoder < "u")
        try {
          if (r) {
            if (255 == e[0] && 254 == e[1])
              return gt(new TextDecoder("utf-16le").decode(e.slice(2)));
            if (254 == e[0] && 255 == e[1])
              return gt(new TextDecoder("utf-16be").decode(e.slice(2)));
          }
          var t = {
            "\u20ac": "\x80",
            "\u201a": "\x82",
            ƒ: "\x83",
            "\u201e": "\x84",
            "\u2026": "\x85",
            "\u2020": "\x86",
            "\u2021": "\x87",
            ˆ: "\x88",
            "\u2030": "\x89",
            Š: "\x8a",
            "\u2039": "\x8b",
            Œ: "\x8c",
            Ž: "\x8e",
            "\u2018": "\x91",
            "\u2019": "\x92",
            "\u201c": "\x93",
            "\u201d": "\x94",
            "\u2022": "\x95",
            "\u2013": "\x96",
            "\u2014": "\x97",
            "\u02dc": "\x98",
            "\u2122": "\x99",
            š: "\x9a",
            "\u203a": "\x9b",
            œ: "\x9c",
            ž: "\x9e",
            Ÿ: "\x9f",
          };
          return (
            Array.isArray(e) && (e = new Uint8Array(e)),
            new TextDecoder("latin1")
              .decode(e)
              .replace(
                /[\u20ac\u201a\u0192\u201e\u2026\u2020\u2021\u02c6\u2030\u0160\u2039\u0152\u017d\u2018\u2019\u201c\u201d\u2022\u2013\u2014\u02dc\u2122\u0161\u203a\u0153\u017e\u0178]/g,
                function (i) {
                  return t[i] || i;
                },
              )
          );
        } catch {}
      for (var a = [], n = 0; n != e.length; ++n)
        a.push(String.fromCharCode(e[n]));
      return a.join("");
    }
    function je(e) {
      if (typeof JSON < "u" && !Array.isArray(e))
        return JSON.parse(JSON.stringify(e));
      if ("object" != typeof e || null == e) return e;
      if (e instanceof Date) return new Date(e.getTime());
      var r = {};
      for (var t in e)
        Object.prototype.hasOwnProperty.call(e, t) && (r[t] = je(e[t]));
      return r;
    }
    function cr(e, r) {
      for (var t = ""; t.length < r;) t += e;
      return t;
    }
    function dt(e) {
      var r = Number(e);
      if (!isNaN(r)) return isFinite(r) ? r : NaN;
      if (!/\d/.test(e)) return r;
      var t = 1,
        a = e
          .replace(/([\d]),([\d])/g, "$1$2")
          .replace(/[$]/g, "")
          .replace(/[%]/g, function () {
            return ((t *= 100), "");
          });
      return isNaN((r = Number(a))) &&
        ((a = a.replace(/[(](.*)[)]/, function (n, i) {
          return ((t = -t), i);
        })),
        isNaN((r = Number(a))))
        ? r
        : r / t;
    }
    var du = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    function La(e) {
      var r = new Date(e),
        t = new Date(NaN),
        a = r.getYear(),
        n = r.getMonth(),
        i = r.getDate();
      if (isNaN(i)) return t;
      var s = e.toLowerCase();
      if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
        if (
          (s = s
            .replace(/[^a-z]/g, "")
            .replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "")).length > 3 &&
          -1 == du.indexOf(s)
        )
          return t;
      } else if (s.match(/[a-z]/)) return t;
      return a < 0 || a > 8099
        ? t
        : (n > 0 || i > 1) && 101 != a
          ? r
          : e.match(/[^-0-9:,\/\\]/)
            ? t
            : r;
    }
    function Ie(e, r, t) {
      if (e.FullPaths) {
        var a;
        if ("string" == typeof t)
          return (
            (a = be
              ? Ft(t)
              : (function Ll(e) {
                  for (
                    var r = [],
                      t = 0,
                      a = e.length + 250,
                      n = Ht(e.length + 255),
                      i = 0;
                    i < e.length;
                    ++i
                  ) {
                    var s = e.charCodeAt(i);
                    if (s < 128) n[t++] = s;
                    else if (s < 2048)
                      ((n[t++] = 192 | ((s >> 6) & 31)),
                        (n[t++] = 128 | (63 & s)));
                    else if (s >= 55296 && s < 57344) {
                      s = 64 + (1023 & s);
                      var c = 1023 & e.charCodeAt(++i);
                      ((n[t++] = 240 | ((s >> 8) & 7)),
                        (n[t++] = 128 | ((s >> 2) & 63)),
                        (n[t++] = 128 | ((c >> 6) & 15) | ((3 & s) << 4)),
                        (n[t++] = 128 | (63 & c)));
                    } else
                      ((n[t++] = 224 | ((s >> 12) & 15)),
                        (n[t++] = 128 | ((s >> 6) & 63)),
                        (n[t++] = 128 | (63 & s)));
                    t > a &&
                      (r.push(n.slice(0, t)),
                      (t = 0),
                      (n = Ht(65535)),
                      (a = 65530));
                  }
                  return (r.push(n.slice(0, t)), Tr(r));
                })(t)),
            Se.utils.cfb_add(e, r, a)
          );
        Se.utils.cfb_add(e, r, t);
      } else e.file(r, t);
    }
    function Ui() {
      return Se.utils.cfb_new();
    }
    var or = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n',
      Gi = Kn({
        "&quot;": '"',
        "&apos;": "'",
        "&gt;": ">",
        "&lt;": "<",
        "&amp;": "&",
      }),
      Wi = /[&<>'"]/g,
      Tu = /[\u0000-\u0008\u000b-\u001f]/g;
    function Je(e) {
      return (e + "")
        .replace(Wi, function (t) {
          return Gi[t];
        })
        .replace(Tu, function (t) {
          return "_x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + "_";
        });
    }
    function X0(e) {
      return Je(e).replace(/ /g, "_x0020_");
    }
    var K0 = /[\u0000-\u001f]/g;
    function Y0(e) {
      return (e + "")
        .replace(Wi, function (t) {
          return Gi[t];
        })
        .replace(/\n/g, "<br/>")
        .replace(K0, function (t) {
          return "&#x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + ";";
        });
    }
    function Hi(e) {
      for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, c = 0; t < e.length;)
        (a = e.charCodeAt(t++)) < 128
          ? (r += String.fromCharCode(a))
          : ((n = e.charCodeAt(t++)),
            a > 191 && a < 224
              ? ((s = (31 & a) << 6),
                (s |= 63 & n),
                (r += String.fromCharCode(s)))
              : ((i = e.charCodeAt(t++)),
                a < 240
                  ? (r += String.fromCharCode(
                      ((15 & a) << 12) | ((63 & n) << 6) | (63 & i),
                    ))
                  : ((c =
                      (((7 & a) << 18) |
                        ((63 & n) << 12) |
                        ((63 & i) << 6) |
                        (63 & (s = e.charCodeAt(t++)))) -
                      65536),
                    (r += String.fromCharCode(55296 + ((c >>> 10) & 1023))),
                    (r += String.fromCharCode(56320 + (1023 & c))))));
      return r;
    }
    function J0(e) {
      var t,
        a,
        c,
        r = Ht(2 * e.length),
        n = 1,
        i = 0,
        s = 0;
      for (a = 0; a < e.length; a += n)
        ((n = 1),
          (c = e.charCodeAt(a)) < 128
            ? (t = c)
            : c < 224
              ? ((t = 64 * (31 & c) + (63 & e.charCodeAt(a + 1))), (n = 2))
              : c < 240
                ? ((t =
                    4096 * (15 & c) +
                    64 * (63 & e.charCodeAt(a + 1)) +
                    (63 & e.charCodeAt(a + 2))),
                  (n = 3))
                : ((n = 4),
                  (t =
                    262144 * (7 & c) +
                    4096 * (63 & e.charCodeAt(a + 1)) +
                    64 * (63 & e.charCodeAt(a + 2)) +
                    (63 & e.charCodeAt(a + 3))),
                  (s = 55296 + (((t -= 65536) >>> 10) & 1023)),
                  (t = 56320 + (1023 & t))),
          0 !== s && ((r[i++] = 255 & s), (r[i++] = s >>> 8), (s = 0)),
          (r[i++] = t % 256),
          (r[i++] = t >>> 8));
      return r.slice(0, i).toString("ucs2");
    }
    function Z0(e) {
      return Ft(e, "binary").toString("utf8");
    }
    var Jn = "foo bar baz\xe2\x98\x83\xf0\x9f\x8d\xa3",
      qe = (be && ((Z0(Jn) == Hi(Jn) && Z0) || (J0(Jn) == Hi(Jn) && J0))) || Hi,
      gt = be
        ? function (e) {
            return Ft(e, "utf8").toString("binary");
          }
        : function (e) {
            for (var r = [], t = 0, a = 0, n = 0; t < e.length;)
              switch (((a = e.charCodeAt(t++)), !0)) {
                case a < 128:
                  r.push(String.fromCharCode(a));
                  break;
                case a < 2048:
                  (r.push(String.fromCharCode(192 + (a >> 6))),
                    r.push(String.fromCharCode(128 + (63 & a))));
                  break;
                case a >= 55296 && a < 57344:
                  ((a -= 55296),
                    (n = e.charCodeAt(t++) - 56320 + (a << 10)),
                    r.push(String.fromCharCode(240 + ((n >> 18) & 7))),
                    r.push(String.fromCharCode(144 + ((n >> 12) & 63))),
                    r.push(String.fromCharCode(128 + ((n >> 6) & 63))),
                    r.push(String.fromCharCode(128 + (63 & n))));
                  break;
                default:
                  (r.push(String.fromCharCode(224 + (a >> 12))),
                    r.push(String.fromCharCode(128 + ((a >> 6) & 63))),
                    r.push(String.fromCharCode(128 + (63 & a))));
              }
            return r.join("");
          },
      $0 = (function () {
        var e = [
          ["nbsp", " "],
          ["middot", "\xb7"],
          ["quot", '"'],
          ["apos", "'"],
          ["gt", ">"],
          ["lt", "<"],
          ["amp", "&"],
        ].map(function (r) {
          return [new RegExp("&" + r[0] + ";", "ig"), r[1]];
        });
        return function (t) {
          for (
            var a = t
                .replace(/^[\t\n\r ]+/, "")
                .replace(/[\t\n\r ]+$/, "")
                .replace(/>\s+/g, ">")
                .replace(/\s+</g, "<")
                .replace(/[\t\n\r ]+/g, " ")
                .replace(/<\s*[bB][rR]\s*\/?>/g, "\n")
                .replace(/<[^>]*>/g, ""),
              n = 0;
            n < e.length;
            ++n
          )
            a = a.replace(e[n][0], e[n][1]);
          return a;
        };
      })(),
      Q0 = /(^\s|\s$|\n)/;
    function yr(e, r) {
      return (
        "<" +
        e +
        (r.match(Q0) ? ' xml:space="preserve"' : "") +
        ">" +
        r +
        "</" +
        e +
        ">"
      );
    }
    function cn(e) {
      return sr(e)
        .map(function (r) {
          return " " + r + '="' + e[r] + '"';
        })
        .join("");
    }
    function ce(e, r, t) {
      return (
        "<" +
        e +
        (null != t ? cn(t) : "") +
        (null != r
          ? (r.match(Q0) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e
          : "/") +
        ">"
      );
    }
    function Vi(e, r) {
      try {
        return e.toISOString().replace(/\.\d*/, "");
      } catch (t) {
        if (r) throw t;
      }
      return "";
    }
    var _r = {
        CORE_PROPS:
          "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
        CUST_PROPS:
          "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
        EXT_PROPS:
          "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
        CT: "http://schemas.openxmlformats.org/package/2006/content-types",
        RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
        TCMNT:
          "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
        dc: "http://purl.org/dc/elements/1.1/",
        dcterms: "http://purl.org/dc/terms/",
        dcmitype: "http://purl.org/dc/dcmitype/",
        mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
        vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
        xsi: "http://www.w3.org/2001/XMLSchema-instance",
        xsd: "http://www.w3.org/2001/XMLSchema",
      },
      zt = [
        "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
        "http://purl.oclc.org/ooxml/spreadsheetml/main",
        "http://schemas.microsoft.com/office/excel/2006/main",
        "http://schemas.microsoft.com/office/excel/2006/2",
      ],
      jr = {
        o: "urn:schemas-microsoft-com:office:office",
        x: "urn:schemas-microsoft-com:office:excel",
        ss: "urn:schemas-microsoft-com:office:spreadsheet",
        dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
        mv: "http://macVmlSchemaUri",
        v: "urn:schemas-microsoft-com:vml",
        html: "http://www.w3.org/TR/REC-html40",
      },
      q0 = function (e) {
        for (var r = [], a = 0; a < e[0].length; ++a)
          if (e[0][a])
            for (var n = 0, i = e[0][a].length; n < i; n += 10240)
              r.push.apply(r, e[0][a].slice(n, n + 10240));
        return r;
      },
      ec = be
        ? function (e) {
            return e[0].length > 0 && Buffer.isBuffer(e[0][0])
              ? Buffer.concat(
                  e[0].map(function (r) {
                    return Buffer.isBuffer(r) ? r : Ft(r);
                  }),
                )
              : q0(e);
          }
        : q0,
      rc = function (e, r, t) {
        for (var a = [], n = r; n < t; n += 2)
          a.push(String.fromCharCode(Nt(e, n)));
        return a.join("").replace(Rr, "");
      },
      Zn = be
        ? function (e, r, t) {
            return Buffer.isBuffer(e)
              ? e.toString("utf16le", r, t).replace(Rr, "")
              : rc(e, r, t);
          }
        : rc,
      tc = function (e, r, t) {
        for (var a = [], n = r; n < r + t; ++n)
          a.push(("0" + e[n].toString(16)).slice(-2));
        return a.join("");
      },
      ac = be
        ? function (e, r, t) {
            return Buffer.isBuffer(e)
              ? e.toString("hex", r, r + t)
              : tc(e, r, t);
          }
        : tc,
      nc = function (e, r, t) {
        for (var a = [], n = r; n < t; n++)
          a.push(String.fromCharCode(Pa(e, n)));
        return a.join("");
      },
      ba = be
        ? function (r, t, a) {
            return Buffer.isBuffer(r) ? r.toString("utf8", t, a) : nc(r, t, a);
          }
        : nc,
      ic = function (e, r) {
        var t = Sr(e, r);
        return t > 0 ? ba(e, r + 4, r + 4 + t - 1) : "";
      },
      Ki = ic,
      sc = function (e, r) {
        var t = Sr(e, r);
        return t > 0 ? ba(e, r + 4, r + 4 + t - 1) : "";
      },
      Yi = sc,
      cc = function (e, r) {
        var t = 2 * Sr(e, r);
        return t > 0 ? ba(e, r + 4, r + 4 + t - 1) : "";
      },
      zi = cc,
      oc = function (r, t) {
        var a = Sr(r, t);
        return a > 0 ? Zn(r, t + 4, t + 4 + a) : "";
      },
      Ji = oc,
      fc = function (e, r) {
        var t = Sr(e, r);
        return t > 0 ? ba(e, r + 4, r + 4 + t) : "";
      },
      Zi = fc,
      lc = function (e, r) {
        return (function Ru(e, r) {
          for (
            var t = 1 - 2 * (e[r + 7] >>> 7),
              a = ((127 & e[r + 7]) << 4) + ((e[r + 6] >>> 4) & 15),
              n = 15 & e[r + 6],
              i = 5;
            i >= 0;
            --i
          )
            n = 256 * n + e[r + i];
          return 2047 == a
            ? 0 == n
              ? t * (1 / 0)
              : NaN
            : (0 == a ? (a = -1022) : ((a -= 1023), (n += Math.pow(2, 52))),
              t * Math.pow(2, a - 52) * n);
        })(e, r);
      },
      $n = lc,
      $i = function (r) {
        return (
          Array.isArray(r) ||
          (typeof Uint8Array < "u" && r instanceof Uint8Array)
        );
      };
    (be &&
      ((Ki = function (r, t) {
        if (!Buffer.isBuffer(r)) return ic(r, t);
        var a = r.readUInt32LE(t);
        return a > 0 ? r.toString("utf8", t + 4, t + 4 + a - 1) : "";
      }),
      (Yi = function (r, t) {
        if (!Buffer.isBuffer(r)) return sc(r, t);
        var a = r.readUInt32LE(t);
        return a > 0 ? r.toString("utf8", t + 4, t + 4 + a - 1) : "";
      }),
      (zi = function (r, t) {
        if (!Buffer.isBuffer(r)) return cc(r, t);
        var a = 2 * r.readUInt32LE(t);
        return r.toString("utf16le", t + 4, t + 4 + a - 1);
      }),
      (Ji = function (r, t) {
        if (!Buffer.isBuffer(r)) return oc(r, t);
        var a = r.readUInt32LE(t);
        return r.toString("utf16le", t + 4, t + 4 + a);
      }),
      (Zi = function (r, t) {
        if (!Buffer.isBuffer(r)) return fc(r, t);
        var a = r.readUInt32LE(t);
        return r.toString("utf8", t + 4, t + 4 + a);
      }),
      ($n = function (r, t) {
        return Buffer.isBuffer(r) ? r.readDoubleLE(t) : lc(r, t);
      }),
      ($i = function (r) {
        return (
          Buffer.isBuffer(r) ||
          Array.isArray(r) ||
          (typeof Uint8Array < "u" && r instanceof Uint8Array)
        );
      })),
      typeof We < "u" &&
        (function uc() {
          ((Zn = function (e, r, t) {
            return We.utils.decode(1200, e.slice(r, t)).replace(Rr, "");
          }),
            (ba = function (e, r, t) {
              return We.utils.decode(65001, e.slice(r, t));
            }),
            (Ki = function (e, r) {
              var t = Sr(e, r);
              return t > 0
                ? We.utils.decode(oa, e.slice(r + 4, r + 4 + t - 1))
                : "";
            }),
            (Yi = function (e, r) {
              var t = Sr(e, r);
              return t > 0
                ? We.utils.decode(Yr, e.slice(r + 4, r + 4 + t - 1))
                : "";
            }),
            (zi = function (e, r) {
              var t = 2 * Sr(e, r);
              return t > 0
                ? We.utils.decode(1200, e.slice(r + 4, r + 4 + t - 1))
                : "";
            }),
            (Ji = function (e, r) {
              var t = Sr(e, r);
              return t > 0
                ? We.utils.decode(1200, e.slice(r + 4, r + 4 + t))
                : "";
            }),
            (Zi = function (e, r) {
              var t = Sr(e, r);
              return t > 0
                ? We.utils.decode(65001, e.slice(r + 4, r + 4 + t))
                : "";
            }));
        })());
    var Pa = function (e, r) {
        return e[r];
      },
      Nt = function (e, r) {
        return 256 * e[r + 1] + e[r];
      },
      Ou = function (e, r) {
        var t = 256 * e[r + 1] + e[r];
        return t < 32768 ? t : -1 * (65535 - t + 1);
      },
      Sr = function (e, r) {
        return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r];
      },
      ua = function (e, r) {
        return (e[r + 3] << 24) | (e[r + 2] << 16) | (e[r + 1] << 8) | e[r];
      },
      Iu = function (e, r) {
        return (e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3];
      };
    function fn(e, r) {
      var a,
        n,
        s,
        c,
        o,
        f,
        t = "",
        i = [];
      switch (r) {
        case "dbcs":
          if (((f = this.l), be && Buffer.isBuffer(this)))
            t = this.slice(this.l, this.l + 2 * e).toString("utf16le");
          else
            for (o = 0; o < e; ++o)
              ((t += String.fromCharCode(Nt(this, f))), (f += 2));
          e *= 2;
          break;
        case "utf8":
          t = ba(this, this.l, this.l + e);
          break;
        case "utf16le":
          t = Zn(this, this.l, this.l + (e *= 2));
          break;
        case "wstr":
          if (!(typeof We < "u")) return fn.call(this, e, "dbcs");
          ((t = We.utils.decode(Yr, this.slice(this.l, this.l + 2 * e))),
            (e *= 2));
          break;
        case "lpstr-ansi":
          ((t = Ki(this, this.l)), (e = 4 + Sr(this, this.l)));
          break;
        case "lpstr-cp":
          ((t = Yi(this, this.l)), (e = 4 + Sr(this, this.l)));
          break;
        case "lpwstr":
          ((t = zi(this, this.l)), (e = 4 + 2 * Sr(this, this.l)));
          break;
        case "lpp4":
          ((e = 4 + Sr(this, this.l)),
            (t = Ji(this, this.l)),
            2 & e && (e += 2));
          break;
        case "8lpp4":
          ((e = 4 + Sr(this, this.l)),
            (t = Zi(this, this.l)),
            3 & e && (e += 4 - (3 & e)));
          break;
        case "cstr":
          for (e = 0, t = ""; 0 !== (s = Pa(this, this.l + e++));)
            i.push(ja(s));
          t = i.join("");
          break;
        case "_wstr":
          for (e = 0, t = ""; 0 !== (s = Nt(this, this.l + e));)
            (i.push(ja(s)), (e += 2));
          ((e += 2), (t = i.join("")));
          break;
        case "dbcs-cont":
          for (t = "", f = this.l, o = 0; o < e; ++o) {
            if (this.lens && -1 !== this.lens.indexOf(f))
              return (
                (s = Pa(this, f)),
                (this.l = f + 1),
                (c = fn.call(this, e - o, s ? "dbcs-cont" : "sbcs-cont")),
                i.join("") + c
              );
            (i.push(ja(Nt(this, f))), (f += 2));
          }
          ((t = i.join("")), (e *= 2));
          break;
        case "cpstr":
          if (typeof We < "u") {
            t = We.utils.decode(Yr, this.slice(this.l, this.l + e));
            break;
          }
        case "sbcs-cont":
          for (t = "", f = this.l, o = 0; o != e; ++o) {
            if (this.lens && -1 !== this.lens.indexOf(f))
              return (
                (s = Pa(this, f)),
                (this.l = f + 1),
                (c = fn.call(this, e - o, s ? "dbcs-cont" : "sbcs-cont")),
                i.join("") + c
              );
            (i.push(ja(Pa(this, f))), (f += 1));
          }
          t = i.join("");
          break;
        default:
          switch (e) {
            case 1:
              return ((a = Pa(this, this.l)), this.l++, a);
            case 2:
              return (
                (a = ("i" === r ? Ou : Nt)(this, this.l)),
                (this.l += 2),
                a
              );
            case 4:
            case -4:
              return "i" !== r && 128 & this[this.l + 3]
                ? ((n = Sr(this, this.l)), (this.l += 4), n)
                : ((a = (e > 0 ? ua : Iu)(this, this.l)), (this.l += 4), a);
            case 8:
            case -8:
              if ("f" === r)
                return (
                  (n =
                    8 == e
                      ? $n(this, this.l)
                      : $n(
                          [
                            this[this.l + 7],
                            this[this.l + 6],
                            this[this.l + 5],
                            this[this.l + 4],
                            this[this.l + 3],
                            this[this.l + 2],
                            this[this.l + 1],
                            this[this.l + 0],
                          ],
                          0,
                        )),
                  (this.l += 8),
                  n
                );
              e = 8;
            case 16:
              t = ac(this, this.l, e);
          }
      }
      return ((this.l += e), t);
    }
    var Lu = function (e, r, t) {
        ((e[t] = 255 & r),
          (e[t + 1] = (r >>> 8) & 255),
          (e[t + 2] = (r >>> 16) & 255),
          (e[t + 3] = (r >>> 24) & 255));
      },
      bu = function (e, r, t) {
        ((e[t] = 255 & r),
          (e[t + 1] = (r >> 8) & 255),
          (e[t + 2] = (r >> 16) & 255),
          (e[t + 3] = (r >> 24) & 255));
      },
      Pu = function (e, r, t) {
        ((e[t] = 255 & r), (e[t + 1] = (r >>> 8) & 255));
      };
    function Du(e, r, t) {
      var a = 0,
        n = 0;
      if ("dbcs" === t) {
        for (n = 0; n != r.length; ++n)
          Pu(this, r.charCodeAt(n), this.l + 2 * n);
        a = 2 * r.length;
      } else if ("sbcs" === t) {
        if (typeof We < "u" && 874 == oa)
          for (n = 0; n != r.length; ++n) {
            var i = We.utils.encode(oa, r.charAt(n));
            this[this.l + n] = i[0];
          }
        else
          for (r = r.replace(/[^\x00-\x7F]/g, "_"), n = 0; n != r.length; ++n)
            this[this.l + n] = 255 & r.charCodeAt(n);
        a = r.length;
      } else {
        if ("hex" === t) {
          for (; n < e; ++n)
            this[this.l++] = parseInt(r.slice(2 * n, 2 * n + 2), 16) || 0;
          return this;
        }
        if ("utf16le" === t) {
          var s = Math.min(this.l + e, this.length);
          for (n = 0; n < Math.min(r.length, e); ++n) {
            var c = r.charCodeAt(n);
            ((this[this.l++] = 255 & c), (this[this.l++] = c >> 8));
          }
          for (; this.l < s;) this[this.l++] = 0;
          return this;
        }
        switch (e) {
          case 1:
            ((a = 1), (this[this.l] = 255 & r));
            break;
          case 2:
            ((a = 2),
              (this[this.l] = 255 & r),
              (this[this.l + 1] = 255 & (r >>>= 8)));
            break;
          case 3:
            ((a = 3),
              (this[this.l] = 255 & r),
              (this[this.l + 1] = 255 & (r >>>= 8)),
              (this[this.l + 2] = 255 & (r >>>= 8)));
            break;
          case 4:
            ((a = 4), Lu(this, r, this.l));
            break;
          case 8:
            if (((a = 8), "f" === t)) {
              !(function Nu(e, r, t) {
                var a = (r < 0 || 1 / r == -1 / 0 ? 1 : 0) << 7,
                  n = 0,
                  i = 0,
                  s = a ? -r : r;
                isFinite(s)
                  ? 0 == s
                    ? (n = i = 0)
                    : ((n = Math.floor(Math.log(s) / Math.LN2)),
                      (i = s * Math.pow(2, 52 - n)),
                      n <= -1023 && (!isFinite(i) || i < Math.pow(2, 52))
                        ? (n = -1022)
                        : ((i -= Math.pow(2, 52)), (n += 1023)))
                  : ((n = 2047), (i = isNaN(r) ? 26985 : 0));
                for (var c = 0; c <= 5; ++c, i /= 256) e[t + c] = 255 & i;
                ((e[t + 6] = ((15 & n) << 4) | (15 & i)),
                  (e[t + 7] = (n >> 4) | a));
              })(this, r, this.l);
              break;
            }
          case 16:
            break;
          case -4:
            ((a = 4), bu(this, r, this.l));
        }
      }
      return ((this.l += a), this);
    }
    function hc(e, r) {
      var t = ac(this, this.l, e.length >> 1);
      if (t !== e) throw new Error(r + "Expected " + e + " saw " + t);
      this.l += e.length >> 1;
    }
    function Fr(e, r) {
      ((e.l = r), (e.read_shift = fn), (e.chk = hc), (e.write_shift = Du));
    }
    function Or(e, r) {
      e.l += r;
    }
    function j(e) {
      var r = Ht(e);
      return (Fr(r, 0), r);
    }
    function Ur() {
      var e = [],
        r = be ? 256 : 2048,
        t = function (f) {
          var l = j(f);
          return (Fr(l, 0), l);
        },
        a = t(r),
        n = function () {
          a &&
            (a.length > a.l && ((a = a.slice(0, a.l)).l = a.length),
            a.length > 0 && e.push(a),
            (a = null));
        },
        i = function (f) {
          return a && f < a.length - a.l
            ? a
            : (n(), (a = t(Math.max(f + 1, r))));
        };
      return {
        next: i,
        push: function (f) {
          (n(), null == (a = f).l && (a.l = a.length), i(r));
        },
        end: function () {
          return (n(), Tr(e));
        },
        _bufs: e,
      };
    }
    function re(e, r, t, a) {
      var i,
        n = +r;
      if (!isNaN(n)) {
        (a || (a = yn[n].p || (t || []).length || 0),
          (i = 1 + (n >= 128 ? 1 : 0) + 1),
          a >= 128 && ++i,
          a >= 16384 && ++i,
          a >= 2097152 && ++i);
        var s = e.next(i);
        n <= 127
          ? s.write_shift(1, n)
          : (s.write_shift(1, 128 + (127 & n)), s.write_shift(1, n >> 7));
        for (var c = 0; 4 != c; ++c) {
          if (!(a >= 128)) {
            s.write_shift(1, a);
            break;
          }
          (s.write_shift(1, 128 + (127 & a)), (a >>= 7));
        }
        a > 0 && $i(t) && e.push(t);
      }
    }
    function ln(e, r, t) {
      var a = je(e);
      if (
        (r.s
          ? (a.cRel && (a.c += r.s.c), a.rRel && (a.r += r.s.r))
          : (a.cRel && (a.c += r.c), a.rRel && (a.r += r.r)),
        !t || t.biff < 12)
      ) {
        for (; a.c >= 256;) a.c -= 256;
        for (; a.r >= 65536;) a.r -= 65536;
      }
      return a;
    }
    function dc(e, r, t) {
      var a = je(e);
      return ((a.s = ln(a.s, r.s, t)), (a.e = ln(a.e, r.s, t)), a);
    }
    function un(e, r) {
      if (e.cRel && e.c < 0)
        for (e = je(e); e.c < 0;) e.c += r > 8 ? 16384 : 256;
      if (e.rRel && e.r < 0)
        for (e = je(e); e.r < 0;)
          e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
      var t = Ce(e);
      return (
        !e.cRel &&
          null != e.cRel &&
          (t = (function Uu(e) {
            return e.replace(/^([A-Z])/, "$$$1");
          })(t)),
        !e.rRel &&
          null != e.rRel &&
          (t = (function Mu(e) {
            return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
          })(t)),
        t
      );
    }
    function ji(e, r) {
      return 0 != e.s.r ||
        e.s.rRel ||
        e.e.r != (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) ||
        e.e.rRel
        ? 0 != e.s.c ||
          e.s.cRel ||
          e.e.c != (r.biff >= 12 ? 16383 : 255) ||
          e.e.cRel
          ? un(e.s, r.biff) + ":" + un(e.e, r.biff)
          : (e.s.rRel ? "" : "$") +
            fr(e.s.r) +
            ":" +
            (e.e.rRel ? "" : "$") +
            fr(e.e.r)
        : (e.s.cRel ? "" : "$") +
            er(e.s.c) +
            ":" +
            (e.e.cRel ? "" : "$") +
            er(e.e.c);
    }
    function Qi(e) {
      return (
        parseInt(
          (function Bu(e) {
            return e.replace(/\$(\d+)$/, "$1");
          })(e),
          10,
        ) - 1
      );
    }
    function fr(e) {
      return "" + (e + 1);
    }
    function qi(e) {
      for (
        var r = (function Gu(e) {
            return e.replace(/^\$([A-Z])/, "$1");
          })(e),
          t = 0,
          a = 0;
        a !== r.length;
        ++a
      )
        t = 26 * t + r.charCodeAt(a) - 64;
      return t - 1;
    }
    function er(e) {
      if (e < 0) throw new Error("invalid column " + e);
      var r = "";
      for (++e; e; e = Math.floor((e - 1) / 26))
        r = String.fromCharCode(((e - 1) % 26) + 65) + r;
      return r;
    }
    function ur(e) {
      for (var r = 0, t = 0, a = 0; a < e.length; ++a) {
        var n = e.charCodeAt(a);
        n >= 48 && n <= 57
          ? (r = 10 * r + (n - 48))
          : n >= 65 && n <= 90 && (t = 26 * t + (n - 64));
      }
      return { c: t - 1, r: r - 1 };
    }
    function Ce(e) {
      for (var r = e.c + 1, t = ""; r; r = ((r - 1) / 26) | 0)
        t = String.fromCharCode(((r - 1) % 26) + 65) + t;
      return t + (e.r + 1);
    }
    function Gr(e) {
      var r = e.indexOf(":");
      return -1 == r
        ? { s: ur(e), e: ur(e) }
        : { s: ur(e.slice(0, r)), e: ur(e.slice(r + 1)) };
    }
    function Ne(e, r) {
      return typeof r > "u" || "number" == typeof r
        ? Ne(e.s, e.e)
        : ("string" != typeof e && (e = Ce(e)),
          "string" != typeof r && (r = Ce(r)),
          e == r ? e : e + ":" + r);
    }
    function Ge(e) {
      var r = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
        t = 0,
        a = 0,
        n = 0,
        i = e.length;
      for (t = 0; a < i && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a)
        t = 26 * t + n;
      for (
        r.s.c = --t, t = 0;
        a < i && !((n = e.charCodeAt(a) - 48) < 0 || n > 9);
        ++a
      )
        t = 10 * t + n;
      if (((r.s.r = --t), a === i || 10 != n))
        return ((r.e.c = r.s.c), (r.e.r = r.s.r), r);
      for (
        ++a, t = 0;
        a != i && !((n = e.charCodeAt(a) - 64) < 1 || n > 26);
        ++a
      )
        t = 26 * t + n;
      for (
        r.e.c = --t, t = 0;
        a != i && !((n = e.charCodeAt(a) - 48) < 0 || n > 9);
        ++a
      )
        t = 10 * t + n;
      return ((r.e.r = --t), r);
    }
    function Et(e, r, t) {
      return null == e || null == e.t || "z" == e.t
        ? ""
        : void 0 !== e.w
          ? e.w
          : ("d" == e.t && !e.z && t && t.dateNF && (e.z = t.dateNF),
            "e" == e.t
              ? It[e.v] || e.v
              : (function xc(e, r) {
                  var t = "d" == e.t && r instanceof Date;
                  if (null != e.z)
                    try {
                      return (e.w = Zr(e.z, t ? Ar(r) : r));
                    } catch {}
                  try {
                    return (e.w = Zr(
                      (e.XF || {}).numFmtId || (t ? 14 : 0),
                      t ? Ar(r) : r,
                    ));
                  } catch {
                    return "" + r;
                  }
                })(e, null == r ? e.v : r));
    }
    function Jt(e, r) {
      var t = r && r.sheet ? r.sheet : "Sheet1",
        a = {};
      return ((a[t] = e), { SheetNames: [t], Sheets: a });
    }
    function mc(e, r, t) {
      var a = t || {},
        n = e ? Array.isArray(e) : a.dense;
      null != ir && null == n && (n = ir);
      var i = e || (n ? [] : {}),
        s = 0,
        c = 0;
      if (i && null != a.origin) {
        if ("number" == typeof a.origin) s = a.origin;
        else {
          var o = "string" == typeof a.origin ? ur(a.origin) : a.origin;
          ((s = o.r), (c = o.c));
        }
        i["!ref"] || (i["!ref"] = "A1:A1");
      }
      var f = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
      if (i["!ref"]) {
        var l = Ge(i["!ref"]);
        ((f.s.c = l.s.c),
          (f.s.r = l.s.r),
          (f.e.c = Math.max(f.e.c, l.e.c)),
          (f.e.r = Math.max(f.e.r, l.e.r)),
          -1 == s && (f.e.r = s = l.e.r + 1));
      }
      for (var h = 0; h != r.length; ++h)
        if (r[h]) {
          if (!Array.isArray(r[h]))
            throw new Error("aoa_to_sheet expects an array of arrays");
          for (var d = 0; d != r[h].length; ++d)
            if (!(typeof r[h][d] > "u")) {
              var x = { v: r[h][d] },
                m = s + h,
                u = c + d;
              if (
                (f.s.r > m && (f.s.r = m),
                f.s.c > u && (f.s.c = u),
                f.e.r < m && (f.e.r = m),
                f.e.c < u && (f.e.c = u),
                !r[h][d] ||
                  "object" != typeof r[h][d] ||
                  Array.isArray(r[h][d]) ||
                  r[h][d] instanceof Date)
              )
                if (
                  (Array.isArray(x.v) && ((x.f = r[h][d][1]), (x.v = x.v[0])),
                  null === x.v)
                )
                  if (x.f) x.t = "n";
                  else if (a.nullError) ((x.t = "e"), (x.v = 0));
                  else {
                    if (!a.sheetStubs) continue;
                    x.t = "z";
                  }
                else
                  "number" == typeof x.v
                    ? (x.t = "n")
                    : "boolean" == typeof x.v
                      ? (x.t = "b")
                      : x.v instanceof Date
                        ? ((x.z = a.dateNF || we[14]),
                          a.cellDates
                            ? ((x.t = "d"), (x.w = Zr(x.z, Ar(x.v))))
                            : ((x.t = "n"),
                              (x.v = Ar(x.v)),
                              (x.w = Zr(x.z, x.v))))
                        : (x.t = "s");
              else x = r[h][d];
              if (n)
                (i[m] || (i[m] = []),
                  i[m][u] && i[m][u].z && (x.z = i[m][u].z),
                  (i[m][u] = x));
              else {
                var _ = Ce({ c: u, r: m });
                (i[_] && i[_].z && (x.z = i[_].z), (i[_] = x));
              }
            }
        }
      return (f.s.c < 1e7 && (i["!ref"] = Ne(f)), i);
    }
    function Da(e, r) {
      return mc(null, e, r);
    }
    function xt(e, r) {
      return (r || (r = j(4)), r.write_shift(4, e), r);
    }
    function Ir(e) {
      var r = e.read_shift(4);
      return 0 === r ? "" : e.read_shift(r, "dbcs");
    }
    function wr(e, r) {
      var t = !1;
      return (
        null == r && ((t = !0), (r = j(4 + 2 * e.length))),
        r.write_shift(4, e.length),
        e.length > 0 && r.write_shift(0, e, "dbcs"),
        t ? r.slice(0, r.l) : r
      );
    }
    function Vu(e) {
      return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
    }
    function es(e, r) {
      var t = e.l,
        a = e.read_shift(1),
        n = Ir(e),
        i = [],
        s = { t: n, h: n };
      if (1 & a) {
        for (var c = e.read_shift(4), o = 0; o != c; ++o) i.push(Vu(e));
        s.r = i;
      } else s.r = [{ ich: 0, ifnt: 0 }];
      return ((e.l = t + r), s);
    }
    var Yu = es;
    function nt(e) {
      var r = e.read_shift(4),
        t = e.read_shift(2);
      return ((t += e.read_shift(1) << 16), e.l++, { c: r, iStyleRef: t });
    }
    function ha(e, r) {
      return (
        null == r && (r = j(8)),
        r.write_shift(-4, e.c),
        r.write_shift(3, e.iStyleRef || e.s),
        r.write_shift(1, 0),
        r
      );
    }
    function da(e) {
      var r = e.read_shift(2);
      return ((r += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: r });
    }
    function xa(e, r) {
      return (
        null == r && (r = j(4)),
        r.write_shift(3, e.iStyleRef || e.s),
        r.write_shift(1, 0),
        r
      );
    }
    var Ju = Ir,
      _c = wr;
    function rs(e) {
      var r = e.read_shift(4);
      return 0 === r || 4294967295 === r ? "" : e.read_shift(r, "dbcs");
    }
    function jn(e, r) {
      var t = !1;
      return (
        null == r && ((t = !0), (r = j(127))),
        r.write_shift(4, e.length > 0 ? e.length : 4294967295),
        e.length > 0 && r.write_shift(0, e, "dbcs"),
        t ? r.slice(0, r.l) : r
      );
    }
    var Zu = Ir,
      ts = rs,
      as = jn;
    function ns(e) {
      var r = e.slice(e.l, e.l + 4),
        t = 1 & r[0],
        a = 2 & r[0];
      e.l += 4;
      var n =
        0 === a
          ? $n([0, 0, 0, 0, 252 & r[0], r[1], r[2], r[3]], 0)
          : ua(r, 0) >> 2;
      return t ? n / 100 : n;
    }
    function pc(e, r) {
      null == r && (r = j(4));
      var t = 0,
        a = 0,
        n = 100 * e;
      if (
        (e == (0 | e) && e >= -(1 << 29) && e < 1 << 29
          ? (a = 1)
          : n == (0 | n) &&
            n >= -(1 << 29) &&
            n < 1 << 29 &&
            ((a = 1), (t = 1)),
        !a)
      )
        throw new Error("unsupported RkNumber " + e);
      r.write_shift(-4, ((t ? n : e) << 2) + (t + 2));
    }
    function vc(e) {
      var r = { s: {}, e: {} };
      return (
        (r.s.r = e.read_shift(4)),
        (r.e.r = e.read_shift(4)),
        (r.s.c = e.read_shift(4)),
        (r.e.c = e.read_shift(4)),
        r
      );
    }
    var ma = vc,
      Ma = function $u(e, r) {
        return (
          r || (r = j(16)),
          r.write_shift(4, e.s.r),
          r.write_shift(4, e.e.r),
          r.write_shift(4, e.s.c),
          r.write_shift(4, e.e.c),
          r
        );
      };
    function Lr(e) {
      if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
      return e.read_shift(8, "f");
    }
    function _a(e, r) {
      return (r || j(8)).write_shift(8, e, "f");
    }
    function Qn(e, r) {
      if ((r || (r = j(8)), !e || e.auto))
        return (r.write_shift(4, 0), r.write_shift(4, 0), r);
      null != e.index
        ? (r.write_shift(1, 2), r.write_shift(1, e.index))
        : null != e.theme
          ? (r.write_shift(1, 6), r.write_shift(1, e.theme))
          : (r.write_shift(1, 5), r.write_shift(1, 0));
      var t = e.tint || 0;
      if (
        (t > 0 ? (t *= 32767) : t < 0 && (t *= 32768),
        r.write_shift(2, t),
        e.rgb && null == e.theme)
      ) {
        var a = e.rgb || "FFFFFF";
        ("number" == typeof a && (a = ("000000" + a.toString(16)).slice(-6)),
          r.write_shift(1, parseInt(a.slice(0, 2), 16)),
          r.write_shift(1, parseInt(a.slice(2, 4), 16)),
          r.write_shift(1, parseInt(a.slice(4, 6), 16)),
          r.write_shift(1, 255));
      } else (r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0));
      return r;
    }
    var ss = {
        1: { n: "CodePage", t: 2 },
        2: { n: "Category", t: 80 },
        3: { n: "PresentationFormat", t: 80 },
        4: { n: "ByteCount", t: 3 },
        5: { n: "LineCount", t: 3 },
        6: { n: "ParagraphCount", t: 3 },
        7: { n: "SlideCount", t: 3 },
        8: { n: "NoteCount", t: 3 },
        9: { n: "HiddenCount", t: 3 },
        10: { n: "MultimediaClipCount", t: 3 },
        11: { n: "ScaleCrop", t: 11 },
        12: { n: "HeadingPairs", t: 4108 },
        13: { n: "TitlesOfParts", t: 4126 },
        14: { n: "Manager", t: 80 },
        15: { n: "Company", t: 80 },
        16: { n: "LinksUpToDate", t: 11 },
        17: { n: "CharacterCount", t: 3 },
        19: { n: "SharedDoc", t: 11 },
        22: { n: "HyperlinksChanged", t: 11 },
        23: { n: "AppVersion", t: 3, p: "version" },
        24: { n: "DigSig", t: 65 },
        26: { n: "ContentType", t: 80 },
        27: { n: "ContentStatus", t: 80 },
        28: { n: "Language", t: 80 },
        29: { n: "Version", t: 80 },
        255: {},
        2147483648: { n: "Locale", t: 19 },
        2147483651: { n: "Behavior", t: 19 },
        1919054434: {},
      },
      cs = {
        1: { n: "CodePage", t: 2 },
        2: { n: "Title", t: 80 },
        3: { n: "Subject", t: 80 },
        4: { n: "Author", t: 80 },
        5: { n: "Keywords", t: 80 },
        6: { n: "Comments", t: 80 },
        7: { n: "Template", t: 80 },
        8: { n: "LastAuthor", t: 80 },
        9: { n: "RevNumber", t: 80 },
        10: { n: "EditTime", t: 64 },
        11: { n: "LastPrinted", t: 64 },
        12: { n: "CreatedDate", t: 64 },
        13: { n: "ModifiedDate", t: 64 },
        14: { n: "PageCount", t: 3 },
        15: { n: "WordCount", t: 3 },
        16: { n: "CharCount", t: 3 },
        17: { n: "Thumbnail", t: 71 },
        18: { n: "Application", t: 80 },
        19: { n: "DocSecurity", t: 3 },
        255: {},
        2147483648: { n: "Locale", t: 19 },
        2147483651: { n: "Behavior", t: 19 },
        1919054434: {},
      };
    function oh(e) {
      return e.map(function (r) {
        return [(r >> 16) & 255, (r >> 8) & 255, 255 & r];
      });
    }
    var pa = je(
        oh([
          0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0,
          16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608,
          32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431,
          10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128,
          16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479,
          13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057,
          3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937,
          9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545,
          3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]),
      ),
      It = {
        0: "#NULL!",
        7: "#DIV/0!",
        15: "#VALUE!",
        23: "#REF!",
        29: "#NAME?",
        36: "#NUM!",
        42: "#N/A",
        43: "#GETTING_DATA",
        255: "#WTF?",
      },
      os = {
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":
          "workbooks",
        "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
        "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
        "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":
          "workbooks",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":
          "sheets",
        "application/vnd.ms-excel.worksheet": "sheets",
        "application/vnd.ms-excel.binIndexWs": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":
          "charts",
        "application/vnd.ms-excel.chartsheet": "charts",
        "application/vnd.ms-excel.macrosheet+xml": "macros",
        "application/vnd.ms-excel.macrosheet": "macros",
        "application/vnd.ms-excel.intlmacrosheet": "TODO",
        "application/vnd.ms-excel.binIndexMs": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":
          "dialogs",
        "application/vnd.ms-excel.dialogsheet": "dialogs",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":
          "strs",
        "application/vnd.ms-excel.sharedStrings": "strs",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":
          "styles",
        "application/vnd.ms-excel.styles": "styles",
        "application/vnd.openxmlformats-package.core-properties+xml":
          "coreprops",
        "application/vnd.openxmlformats-officedocument.custom-properties+xml":
          "custprops",
        "application/vnd.openxmlformats-officedocument.extended-properties+xml":
          "extprops",
        "application/vnd.openxmlformats-officedocument.customXmlProperties+xml":
          "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":
          "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":
          "comments",
        "application/vnd.ms-excel.comments": "comments",
        "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
        "application/vnd.ms-excel.person+xml": "people",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":
          "metadata",
        "application/vnd.ms-excel.sheetMetadata": "metadata",
        "application/vnd.ms-excel.pivotTable": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":
          "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.chart+xml":
          "TODO",
        "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
        "application/vnd.ms-office.chartstyle+xml": "TODO",
        "application/vnd.ms-office.chartex+xml": "TODO",
        "application/vnd.ms-excel.calcChain": "calcchains",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":
          "calcchains",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":
          "TODO",
        "application/vnd.ms-office.activeX": "TODO",
        "application/vnd.ms-office.activeX+xml": "TODO",
        "application/vnd.ms-excel.attachedToolbars": "TODO",
        "application/vnd.ms-excel.connections": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":
          "TODO",
        "application/vnd.ms-excel.externalLink": "links",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":
          "links",
        "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
        "application/vnd.ms-excel.pivotCacheRecords": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":
          "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":
          "TODO",
        "application/vnd.ms-excel.queryTable": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":
          "TODO",
        "application/vnd.ms-excel.userNames": "TODO",
        "application/vnd.ms-excel.revisionHeaders": "TODO",
        "application/vnd.ms-excel.revisionLog": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":
          "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":
          "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":
          "TODO",
        "application/vnd.ms-excel.tableSingleCells": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":
          "TODO",
        "application/vnd.ms-excel.slicer": "TODO",
        "application/vnd.ms-excel.slicerCache": "TODO",
        "application/vnd.ms-excel.slicer+xml": "TODO",
        "application/vnd.ms-excel.slicerCache+xml": "TODO",
        "application/vnd.ms-excel.wsSortMap": "TODO",
        "application/vnd.ms-excel.table": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":
          "TODO",
        "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
        "application/vnd.openxmlformats-officedocument.themeOverride+xml":
          "TODO",
        "application/vnd.ms-excel.Timeline+xml": "TODO",
        "application/vnd.ms-excel.TimelineCache+xml": "TODO",
        "application/vnd.ms-office.vbaProject": "vba",
        "application/vnd.ms-office.vbaProjectSignature": "TODO",
        "application/vnd.ms-office.volatileDependencies": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":
          "TODO",
        "application/vnd.ms-excel.controlproperties+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.model+data": "TODO",
        "application/vnd.ms-excel.Survey+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
        "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":
          "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":
          "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":
          "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":
          "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":
          "TODO",
        "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
        "application/vnd.openxmlformats-package.relationships+xml": "rels",
        "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
        "image/png": "TODO",
        sheet: "js",
      },
      ti = {
        workbooks: {
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
          xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
          xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
          xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
          xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml",
        },
        strs: {
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
          xlsb: "application/vnd.ms-excel.sharedStrings",
        },
        comments: {
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
          xlsb: "application/vnd.ms-excel.comments",
        },
        sheets: {
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
          xlsb: "application/vnd.ms-excel.worksheet",
        },
        charts: {
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
          xlsb: "application/vnd.ms-excel.chartsheet",
        },
        dialogs: {
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
          xlsb: "application/vnd.ms-excel.dialogsheet",
        },
        macros: {
          xlsx: "application/vnd.ms-excel.macrosheet+xml",
          xlsb: "application/vnd.ms-excel.macrosheet",
        },
        metadata: {
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
          xlsb: "application/vnd.ms-excel.sheetMetadata",
        },
        styles: {
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
          xlsb: "application/vnd.ms-excel.styles",
        },
      };
    function Sc(e, r) {
      var n,
        t = (function fu(e) {
          for (var r = [], t = sr(e), a = 0; a !== t.length; ++a)
            (null == r[e[t[a]]] && (r[e[t[a]]] = []), r[e[t[a]]].push(t[a]));
          return r;
        })(os),
        a = [];
      ((a[a.length] = or),
        (a[a.length] = ce("Types", null, {
          xmlns: _r.CT,
          "xmlns:xsd": _r.xsd,
          "xmlns:xsi": _r.xsi,
        })),
        (a = a.concat(
          [
            ["xml", "application/xml"],
            ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
            ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
            [
              "data",
              "application/vnd.openxmlformats-officedocument.model+data",
            ],
            ["bmp", "image/bmp"],
            ["png", "image/png"],
            ["gif", "image/gif"],
            ["emf", "image/x-emf"],
            ["wmf", "image/x-wmf"],
            ["jpg", "image/jpeg"],
            ["jpeg", "image/jpeg"],
            ["tif", "image/tiff"],
            ["tiff", "image/tiff"],
            ["pdf", "application/pdf"],
            [
              "rels",
              "application/vnd.openxmlformats-package.relationships+xml",
            ],
          ].map(function (o) {
            return ce("Default", null, { Extension: o[0], ContentType: o[1] });
          }),
        )));
      var i = function (o) {
          e[o] &&
            e[o].length > 0 &&
            (a[a.length] = ce("Override", null, {
              PartName: ("/" == (n = e[o][0])[0] ? "" : "/") + n,
              ContentType: ti[o][r.bookType] || ti[o].xlsx,
            }));
        },
        s = function (o) {
          (e[o] || []).forEach(function (f) {
            a[a.length] = ce("Override", null, {
              PartName: ("/" == f[0] ? "" : "/") + f,
              ContentType: ti[o][r.bookType] || ti[o].xlsx,
            });
          });
        },
        c = function (o) {
          (e[o] || []).forEach(function (f) {
            a[a.length] = ce("Override", null, {
              PartName: ("/" == f[0] ? "" : "/") + f,
              ContentType: t[o][0],
            });
          });
        };
      return (
        i("workbooks"),
        s("sheets"),
        s("charts"),
        c("themes"),
        ["strs", "styles"].forEach(i),
        ["coreprops", "extprops", "custprops"].forEach(c),
        c("vba"),
        c("comments"),
        c("threadedcomments"),
        c("drawings"),
        s("metadata"),
        c("people"),
        a.length > 2 &&
          ((a[a.length] = "</Types>"), (a[1] = a[1].replace("/>", ">"))),
        a.join("")
      );
    }
    var Oe = {
      WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
      SHEET:
        "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
      HLINK:
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
      VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
      XPATH:
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
      XMISS:
        "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
      XLINK:
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
      CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
      CXMLP:
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
      CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
      CORE_PROPS:
        "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
      EXT_PROPS:
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
      CUST_PROPS:
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
      SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
      STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
      THEME:
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
      CHART:
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
      CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
      CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
      WS: [
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
        "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet",
      ],
      DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
      MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
      IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
      DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
      XLMETA:
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
      TCMNT:
        "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
      PEOPLE:
        "http://schemas.microsoft.com/office/2017/10/relationships/person",
      VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject",
    };
    function hn(e) {
      var r = e.lastIndexOf("/");
      return e.slice(0, r + 1) + "_rels/" + e.slice(r + 1) + ".rels";
    }
    function Ba(e) {
      var r = [or, ce("Relationships", null, { xmlns: _r.RELS })];
      return (
        sr(e["!id"]).forEach(function (t) {
          r[r.length] = ce("Relationship", null, e["!id"][t]);
        }),
        r.length > 2 &&
          ((r[r.length] = "</Relationships>"),
          (r[1] = r[1].replace("/>", ">"))),
        r.join("")
      );
    }
    function Xe(e, r, t, a, n, i) {
      if (
        (n || (n = {}),
        e["!id"] || (e["!id"] = {}),
        e["!idx"] || (e["!idx"] = 1),
        r < 0)
      )
        for (r = e["!idx"]; e["!id"]["rId" + r]; ++r);
      if (
        ((e["!idx"] = r + 1),
        (n.Id = "rId" + r),
        (n.Type = a),
        (n.Target = t),
        i
          ? (n.TargetMode = i)
          : [Oe.HLINK, Oe.XPATH, Oe.XMISS].indexOf(n.Type) > -1 &&
            (n.TargetMode = "External"),
        e["!id"][n.Id])
      )
        throw new Error("Cannot rewrite rId " + r);
      return (
        (e["!id"][n.Id] = n),
        (e[("/" + n.Target).replace("//", "/")] = n),
        r
      );
    }
    function wc(e, r, t) {
      return [
        '  <rdf:Description rdf:about="' + e + '">\n',
        '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' +
          (t || "odf") +
          "#" +
          r +
          '"/>\n',
        "  </rdf:Description>\n",
      ].join("");
    }
    function mh(e, r) {
      return [
        '  <rdf:Description rdf:about="' + e + '">\n',
        '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' +
          r +
          '"/>\n',
        "  </rdf:Description>\n",
      ].join("");
    }
    function kc() {
      return (
        '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' +
        $a.version +
        "</meta:generator></office:meta></office:document-meta>"
      );
    }
    var Lt = [
      ["cp:category", "Category"],
      ["cp:contentStatus", "ContentStatus"],
      ["cp:keywords", "Keywords"],
      ["cp:lastModifiedBy", "LastAuthor"],
      ["cp:lastPrinted", "LastPrinted"],
      ["cp:revision", "RevNumber"],
      ["cp:version", "Version"],
      ["dc:creator", "Author"],
      ["dc:description", "Comments"],
      ["dc:identifier", "Identifier"],
      ["dc:language", "Language"],
      ["dc:subject", "Subject"],
      ["dc:title", "Title"],
      ["dcterms:created", "CreatedDate", "date"],
      ["dcterms:modified", "ModifiedDate", "date"],
    ];
    function ls(e, r, t, a, n) {
      null != n[e] ||
        null == r ||
        "" === r ||
        ((n[e] = r), (r = Je(r)), (a[a.length] = t ? ce(e, r, t) : yr(e, r)));
    }
    function yc(e, r) {
      var t = r || {},
        a = [
          or,
          ce("cp:coreProperties", null, {
            "xmlns:cp": _r.CORE_PROPS,
            "xmlns:dc": _r.dc,
            "xmlns:dcterms": _r.dcterms,
            "xmlns:dcmitype": _r.dcmitype,
            "xmlns:xsi": _r.xsi,
          }),
        ],
        n = {};
      if (!e && !t.Props) return a.join("");
      e &&
        (null != e.CreatedDate &&
          ls(
            "dcterms:created",
            "string" == typeof e.CreatedDate
              ? e.CreatedDate
              : Vi(e.CreatedDate, t.WTF),
            { "xsi:type": "dcterms:W3CDTF" },
            a,
            n,
          ),
        null != e.ModifiedDate &&
          ls(
            "dcterms:modified",
            "string" == typeof e.ModifiedDate
              ? e.ModifiedDate
              : Vi(e.ModifiedDate, t.WTF),
            { "xsi:type": "dcterms:W3CDTF" },
            a,
            n,
          ));
      for (var i = 0; i != Lt.length; ++i) {
        var s = Lt[i],
          c =
            t.Props && null != t.Props[s[1]]
              ? t.Props[s[1]]
              : e
                ? e[s[1]]
                : null;
        (!0 === c
          ? (c = "1")
          : !1 === c
            ? (c = "0")
            : "number" == typeof c && (c = String(c)),
          null != c && ls(s[0], c, null, a, n));
      }
      return (
        a.length > 2 &&
          ((a[a.length] = "</cp:coreProperties>"),
          (a[1] = a[1].replace("/>", ">"))),
        a.join("")
      );
    }
    var va = [
        ["Application", "Application", "string"],
        ["AppVersion", "AppVersion", "string"],
        ["Company", "Company", "string"],
        ["DocSecurity", "DocSecurity", "string"],
        ["Manager", "Manager", "string"],
        ["HyperlinksChanged", "HyperlinksChanged", "bool"],
        ["SharedDoc", "SharedDoc", "bool"],
        ["LinksUpToDate", "LinksUpToDate", "bool"],
        ["ScaleCrop", "ScaleCrop", "bool"],
        ["HeadingPairs", "HeadingPairs", "raw"],
        ["TitlesOfParts", "TitlesOfParts", "raw"],
      ],
      Fc = [
        "Worksheets",
        "SheetNames",
        "NamedRanges",
        "DefinedNames",
        "Chartsheets",
        "ChartNames",
      ];
    function Nc(e) {
      var r = [],
        t = ce;
      return (
        e || (e = {}),
        (e.Application = "SheetJS"),
        (r[r.length] = or),
        (r[r.length] = ce("Properties", null, {
          xmlns: _r.EXT_PROPS,
          "xmlns:vt": _r.vt,
        })),
        va.forEach(function (a) {
          if (void 0 !== e[a[1]]) {
            var n;
            switch (a[2]) {
              case "string":
                n = Je(String(e[a[1]]));
                break;
              case "bool":
                n = e[a[1]] ? "true" : "false";
            }
            void 0 !== n && (r[r.length] = t(a[0], n));
          }
        }),
        (r[r.length] = t(
          "HeadingPairs",
          t(
            "vt:vector",
            t("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") +
              t("vt:variant", t("vt:i4", String(e.Worksheets))),
            { size: 2, baseType: "variant" },
          ),
        )),
        (r[r.length] = t(
          "TitlesOfParts",
          t(
            "vt:vector",
            e.SheetNames.map(function (a) {
              return "<vt:lpstr>" + Je(a) + "</vt:lpstr>";
            }).join(""),
            { size: e.Worksheets, baseType: "lpstr" },
          ),
        )),
        r.length > 2 &&
          ((r[r.length] = "</Properties>"), (r[1] = r[1].replace("/>", ">"))),
        r.join("")
      );
    }
    function Oc(e) {
      var r = [
        or,
        ce("Properties", null, { xmlns: _r.CUST_PROPS, "xmlns:vt": _r.vt }),
      ];
      if (!e) return r.join("");
      var t = 1;
      return (
        sr(e).forEach(function (n) {
          (++t,
            (r[r.length] = ce(
              "property",
              (function Fu(e, r) {
                switch (typeof e) {
                  case "string":
                    var t = ce("vt:lpwstr", Je(e));
                    return (r && (t = t.replace(/&quot;/g, "_x0022_")), t);
                  case "number":
                    return ce((0 | e) == e ? "vt:i4" : "vt:r8", Je(String(e)));
                  case "boolean":
                    return ce("vt:bool", e ? "true" : "false");
                }
                if (e instanceof Date) return ce("vt:filetime", Vi(e));
                throw new Error("Unable to serialize " + e);
              })(e[n], !0),
              {
                fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
                pid: t,
                name: Je(n),
              },
            )));
        }),
        r.length > 2 &&
          ((r[r.length] = "</Properties>"), (r[1] = r[1].replace("/>", ">"))),
        r.join("")
      );
    }
    var us = {
      Title: "Title",
      Subject: "Subject",
      Author: "Author",
      Keywords: "Keywords",
      Comments: "Description",
      LastAuthor: "LastAuthor",
      RevNumber: "Revision",
      Application: "AppName",
      LastPrinted: "LastPrinted",
      CreatedDate: "Created",
      ModifiedDate: "LastSaved",
      Category: "Category",
      Manager: "Manager",
      Company: "Company",
      AppVersion: "Version",
      ContentStatus: "ContentStatus",
      Identifier: "Identifier",
      Language: "Language",
    };
    function Mc(e, r) {
      var t = j(4),
        a = j(4);
      switch ((t.write_shift(4, 80 == e ? 31 : e), e)) {
        case 3:
          a.write_shift(-4, r);
          break;
        case 5:
          (a = j(8)).write_shift(8, r, "f");
          break;
        case 11:
          a.write_shift(4, r ? 1 : 0);
          break;
        case 64:
          a = (function wh(e) {
            var t =
                ("string" == typeof e ? new Date(Date.parse(e)) : e).getTime() /
                  1e3 +
                11644473600,
              a = t % Math.pow(2, 32),
              n = (t - a) / Math.pow(2, 32);
            n *= 1e7;
            var i = ((a *= 1e7) / Math.pow(2, 32)) | 0;
            i > 0 && ((a %= Math.pow(2, 32)), (n += i));
            var s = j(8);
            return (s.write_shift(4, a), s.write_shift(4, n), s);
          })(r);
          break;
        case 31:
        case 80:
          for (
            (a = j(
              4 + 2 * (r.length + 1) + (r.length % 2 ? 0 : 2),
            )).write_shift(4, r.length + 1),
              a.write_shift(0, r, "dbcs");
            a.l != a.length;
          )
            a.write_shift(1, 0);
          break;
        default:
          throw new Error(
            "TypedPropertyValue unrecognized type " + e + " " + r,
          );
      }
      return Tr([t, a]);
    }
    var Uc = [
      "CodePage",
      "Thumbnail",
      "_PID_LINKBASE",
      "_PID_HLINKS",
      "SystemIdentifier",
      "FMTID",
    ];
    function Oh(e) {
      switch (typeof e) {
        case "boolean":
          return 11;
        case "number":
          return (0 | e) == e ? 3 : 5;
        case "string":
          return 31;
        case "object":
          if (e instanceof Date) return 64;
      }
      return -1;
    }
    function Gc(e, r, t) {
      var a = j(8),
        n = [],
        i = [],
        s = 8,
        c = 0,
        o = j(8),
        f = j(8);
      if (
        (o.write_shift(4, 2),
        o.write_shift(4, 1200),
        f.write_shift(4, 1),
        i.push(o),
        n.push(f),
        (s += 8 + o.length),
        !r)
      ) {
        ((f = j(8)).write_shift(4, 0), n.unshift(f));
        var l = [j(4)];
        for (l[0].write_shift(4, e.length), c = 0; c < e.length; ++c) {
          var h = e[c][0];
          for (
            (o = j(
              8 + 2 * (h.length + 1) + (h.length % 2 ? 0 : 2),
            )).write_shift(4, c + 2),
              o.write_shift(4, h.length + 1),
              o.write_shift(0, h, "dbcs");
            o.l != o.length;
          )
            o.write_shift(1, 0);
          l.push(o);
        }
        ((o = Tr(l)), i.unshift(o), (s += 8 + o.length));
      }
      for (c = 0; c < e.length; ++c)
        if (
          (!r || r[e[c][0]]) &&
          !(Uc.indexOf(e[c][0]) > -1 || Fc.indexOf(e[c][0]) > -1) &&
          null != e[c][1]
        ) {
          var d = e[c][1],
            x = 0;
          if (r) {
            var m = t[(x = +r[e[c][0]])];
            if ("version" == m.p && "string" == typeof d) {
              var u = d.split(".");
              d = (+u[0] << 16) + (+u[1] || 0);
            }
            o = Mc(m.t, d);
          } else {
            var _ = Oh(d);
            (-1 == _ && ((_ = 31), (d = String(d))), (o = Mc(_, d)));
          }
          (i.push(o),
            (f = j(8)).write_shift(4, r ? x : 2 + c),
            n.push(f),
            (s += 8 + o.length));
        }
      var A = 8 * (i.length + 1);
      for (c = 0; c < i.length; ++c)
        (n[c].write_shift(4, A), (A += i[c].length));
      return (
        a.write_shift(4, s),
        a.write_shift(4, i.length),
        Tr([a].concat(n).concat(i))
      );
    }
    function Hc(e, r, t, a, n, i) {
      var s = j(n ? 68 : 48),
        c = [s];
      (s.write_shift(2, 65534),
        s.write_shift(2, 0),
        s.write_shift(4, 842412599),
        s.write_shift(16, Se.utils.consts.HEADER_CLSID, "hex"),
        s.write_shift(4, n ? 2 : 1),
        s.write_shift(16, r, "hex"),
        s.write_shift(4, n ? 68 : 48));
      var o = Gc(e, t, a);
      if ((c.push(o), n)) {
        var f = Gc(n, null, null);
        (s.write_shift(16, i, "hex"),
          s.write_shift(4, 68 + o.length),
          c.push(f));
      }
      return Tr(c);
    }
    function Wr(e, r) {
      return (r || (r = j(2)), r.write_shift(2, +!!e), r);
    }
    function pr(e) {
      return e.read_shift(2, "u");
    }
    function it(e, r) {
      return (r || (r = j(2)), r.write_shift(2, e), r);
    }
    function Xc(e, r, t) {
      return (
        t || (t = j(2)),
        t.write_shift(1, "e" == r ? +e : +!!e),
        t.write_shift(1, "e" == r ? 1 : 0),
        t
      );
    }
    function xn(e, r, t) {
      var a = e.read_shift(t && t.biff >= 12 ? 2 : 1),
        n = "sbcs-cont",
        i = Yr;
      (t && t.biff >= 8 && (Yr = 1200),
        t && 8 != t.biff
          ? 12 == t.biff && (n = "wstr")
          : e.read_shift(1) && (n = "dbcs-cont"),
        t.biff >= 2 && t.biff <= 5 && (n = "cpstr"));
      var c = a ? e.read_shift(a, n) : "";
      return ((Yr = i), c);
    }
    function Dh(e) {
      var r = e.t || "",
        a = j(3);
      (a.write_shift(2, r.length), a.write_shift(1, 1));
      var n = j(2 * r.length);
      return (n.write_shift(2 * r.length, r, "utf16le"), Tr([a, n]));
    }
    function Kc(e, r, t) {
      return (
        t || (t = j(3 + 2 * e.length)),
        t.write_shift(2, e.length),
        t.write_shift(1, 1),
        t.write_shift(31, e, "utf16le"),
        t
      );
    }
    function Yc(e, r) {
      (r || (r = j(6 + 2 * e.length)), r.write_shift(4, 1 + e.length));
      for (var t = 0; t < e.length; ++t) r.write_shift(2, e.charCodeAt(t));
      return (r.write_shift(2, 0), r);
    }
    function Hh(e) {
      var r = j(512),
        t = 0,
        a = e.Target;
      "file://" == a.slice(0, 7) && (a = a.slice(7));
      var n = a.indexOf("#"),
        i = n > -1 ? 31 : 23;
      switch (a.charAt(0)) {
        case "#":
          i = 28;
          break;
        case ".":
          i &= -3;
      }
      (r.write_shift(4, 2), r.write_shift(4, i));
      var s = [8, 6815827, 6619237, 4849780, 83];
      for (t = 0; t < s.length; ++t) r.write_shift(4, s[t]);
      if (28 == i) Yc((a = a.slice(1)), r);
      else if (2 & i) {
        for (
          s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "),
            t = 0;
          t < s.length;
          ++t
        )
          r.write_shift(1, parseInt(s[t], 16));
        var c = n > -1 ? a.slice(0, n) : a;
        for (r.write_shift(4, 2 * (c.length + 1)), t = 0; t < c.length; ++t)
          r.write_shift(2, c.charCodeAt(t));
        (r.write_shift(2, 0), 8 & i && Yc(n > -1 ? a.slice(n + 1) : "", r));
      } else {
        for (
          s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "),
            t = 0;
          t < s.length;
          ++t
        )
          r.write_shift(1, parseInt(s[t], 16));
        for (
          var o = 0;
          "../" == a.slice(3 * o, 3 * o + 3) ||
          "..\\" == a.slice(3 * o, 3 * o + 3);
        )
          ++o;
        for (
          r.write_shift(2, o), r.write_shift(4, a.length - 3 * o + 1), t = 0;
          t < a.length - 3 * o;
          ++t
        )
          r.write_shift(1, 255 & a.charCodeAt(t + 3 * o));
        for (
          r.write_shift(1, 0),
            r.write_shift(2, 65535),
            r.write_shift(2, 57005),
            t = 0;
          t < 6;
          ++t
        )
          r.write_shift(4, 0);
      }
      return r.slice(0, r.l);
    }
    function Ta(e, r, t, a) {
      return (
        a || (a = j(6)),
        a.write_shift(2, e),
        a.write_shift(2, r),
        a.write_shift(2, t || 0),
        a
      );
    }
    function Kh(e, r, t) {
      var a = t.biff > 8 ? 4 : 2;
      return [e.read_shift(a), e.read_shift(a, "i"), e.read_shift(a, "i")];
    }
    function ii(e) {
      var r = e.read_shift(2),
        t = e.read_shift(2);
      return { s: { c: e.read_shift(2), r }, e: { c: e.read_shift(2), r: t } };
    }
    function $c(e, r) {
      return (
        r || (r = j(8)),
        r.write_shift(2, e.s.r),
        r.write_shift(2, e.e.r),
        r.write_shift(2, e.s.c),
        r.write_shift(2, e.e.c),
        r
      );
    }
    function ms(e, r, t) {
      var a = 1536,
        n = 16;
      switch (t.bookType) {
        case "biff8":
        case "xla":
          break;
        case "biff5":
          ((a = 1280), (n = 8));
          break;
        case "biff4":
          ((a = 4), (n = 6));
          break;
        case "biff3":
          ((a = 3), (n = 6));
          break;
        case "biff2":
          ((a = 2), (n = 4));
          break;
        default:
          throw new Error("unsupported BIFF version");
      }
      var i = j(n);
      return (
        i.write_shift(2, a),
        i.write_shift(2, r),
        n > 4 && i.write_shift(2, 29282),
        n > 6 && i.write_shift(2, 1997),
        n > 8 &&
          (i.write_shift(2, 49161),
          i.write_shift(2, 1),
          i.write_shift(2, 1798),
          i.write_shift(2, 0)),
        i
      );
    }
    function ad(e, r) {
      var t = !r || r.biff >= 8 ? 2 : 1,
        a = j(8 + t * e.name.length);
      (a.write_shift(4, e.pos),
        a.write_shift(1, e.hs || 0),
        a.write_shift(1, e.dt),
        a.write_shift(1, e.name.length),
        r.biff >= 8 && a.write_shift(1, 1),
        a.write_shift(
          t * e.name.length,
          e.name,
          r.biff < 8 ? "sbcs" : "utf16le",
        ));
      var n = a.slice(0, a.l);
      return ((n.l = a.l), n);
    }
    function Ad(e, r, t, a) {
      var n = t && 5 == t.biff;
      (a || (a = j(n ? 3 + r.length : 5 + 2 * r.length)),
        a.write_shift(2, e),
        a.write_shift(n ? 1 : 2, r.length),
        n || a.write_shift(1, 1),
        a.write_shift((n ? 1 : 2) * r.length, r, n ? "sbcs" : "utf16le"));
      var i = a.length > a.l ? a.slice(0, a.l) : a;
      return (null == i.l && (i.l = i.length), i);
    }
    function ro(e, r, t, a) {
      var n = t && 5 == t.biff;
      (a || (a = j(n ? 16 : 20)),
        a.write_shift(2, 0),
        e.style
          ? (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, 65524))
          : (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, r << 4)));
      var i = 0;
      return (
        e.numFmtId > 0 && n && (i |= 1024),
        a.write_shift(4, i),
        a.write_shift(4, 0),
        n || a.write_shift(4, 0),
        a.write_shift(2, 0),
        a
      );
    }
    function $d(e) {
      var r = j(24),
        t = ur(e[0]);
      (r.write_shift(2, t.r),
        r.write_shift(2, t.r),
        r.write_shift(2, t.c),
        r.write_shift(2, t.c));
      for (
        var a = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "),
          n = 0;
        n < 16;
        ++n
      )
        r.write_shift(1, parseInt(a[n], 16));
      return Tr([r, Hh(e[1])]);
    }
    function Qd(e) {
      var r = e[1].Tooltip,
        t = j(10 + 2 * (r.length + 1));
      t.write_shift(2, 2048);
      var a = ur(e[0]);
      (t.write_shift(2, a.r),
        t.write_shift(2, a.r),
        t.write_shift(2, a.c),
        t.write_shift(2, a.c));
      for (var n = 0; n < r.length; ++n) t.write_shift(2, r.charCodeAt(n));
      return (t.write_shift(2, 0), t);
    }
    var _s = (function () {
        var e = {
            1: 437,
            2: 850,
            3: 1252,
            4: 1e4,
            100: 852,
            101: 866,
            102: 865,
            103: 861,
            104: 895,
            105: 620,
            106: 737,
            107: 857,
            120: 950,
            121: 949,
            122: 936,
            123: 932,
            124: 874,
            125: 1255,
            126: 1256,
            150: 10007,
            151: 10029,
            152: 10006,
            200: 1250,
            201: 1251,
            202: 1254,
            203: 1253,
            0: 20127,
            8: 865,
            9: 437,
            10: 850,
            11: 437,
            13: 437,
            14: 850,
            15: 437,
            16: 850,
            17: 437,
            18: 850,
            19: 932,
            20: 850,
            21: 437,
            22: 850,
            23: 865,
            24: 437,
            25: 437,
            26: 850,
            27: 437,
            28: 863,
            29: 850,
            31: 852,
            34: 852,
            35: 852,
            36: 860,
            37: 850,
            38: 866,
            55: 850,
            64: 852,
            77: 936,
            78: 949,
            79: 950,
            80: 874,
            87: 1252,
            88: 1252,
            89: 1252,
            108: 863,
            134: 737,
            135: 852,
            136: 857,
            204: 1257,
            255: 16969,
          },
          r = Kn({
            1: 437,
            2: 850,
            3: 1252,
            4: 1e4,
            100: 852,
            101: 866,
            102: 865,
            103: 861,
            104: 895,
            105: 620,
            106: 737,
            107: 857,
            120: 950,
            121: 949,
            122: 936,
            123: 932,
            124: 874,
            125: 1255,
            126: 1256,
            150: 10007,
            151: 10029,
            152: 10006,
            200: 1250,
            201: 1251,
            202: 1254,
            203: 1253,
            0: 20127,
          });
        function a(c, o) {
          var f = o || {};
          f.dateNF || (f.dateNF = "yyyymmdd");
          var l = Da(
            (function t(c, o) {
              var f = [],
                l = Ht(1);
              switch (o.type) {
                case "base64":
                  l = Jr(zr(c));
                  break;
                case "binary":
                  l = Jr(c);
                  break;
                case "buffer":
                case "array":
                  l = c;
              }
              Fr(l, 0);
              var h = l.read_shift(1),
                d = !!(136 & h),
                x = !1,
                m = !1;
              switch (h) {
                case 2:
                case 3:
                case 131:
                case 139:
                case 245:
                  break;
                case 48:
                case 49:
                  ((x = !0), (d = !0));
                  break;
                case 140:
                  m = !0;
                  break;
                default:
                  throw new Error("DBF Unsupported Version: " + h.toString(16));
              }
              var u = 0,
                _ = 521;
              (2 == h && (u = l.read_shift(2)),
                (l.l += 3),
                2 != h && (u = l.read_shift(4)),
                u > 1048576 && (u = 1e6),
                2 != h && (_ = l.read_shift(2)));
              var A = l.read_shift(2),
                T = o.codepage || 1252;
              (2 != h &&
                ((l.l += 16),
                l.read_shift(1),
                0 !== l[l.l] && (T = e[l[l.l]]),
                (l.l += 1),
                (l.l += 2)),
                m && (l.l += 36));
              for (
                var g = [],
                  O = {},
                  D = Math.min(l.length, 2 == h ? 521 : _ - 10 - (x ? 264 : 0)),
                  Y = m ? 32 : 11;
                l.l < D && 13 != l[l.l];
              )
                switch (
                  ((O = {}),
                  (O.name = We.utils
                    .decode(T, l.slice(l.l, l.l + Y))
                    .replace(/[\u0000\r\n].*$/g, "")),
                  (l.l += Y),
                  (O.type = String.fromCharCode(l.read_shift(1))),
                  2 != h && !m && (O.offset = l.read_shift(4)),
                  (O.len = l.read_shift(1)),
                  2 == h && (O.offset = l.read_shift(2)),
                  (O.dec = l.read_shift(1)),
                  O.name.length && g.push(O),
                  2 != h && (l.l += m ? 13 : 14),
                  O.type)
                ) {
                  case "B":
                    (!x || 8 != O.len) &&
                      o.WTF &&
                      console.log("Skipping " + O.name + ":" + O.type);
                    break;
                  case "G":
                  case "P":
                    o.WTF && console.log("Skipping " + O.name + ":" + O.type);
                    break;
                  case "+":
                  case "0":
                  case "@":
                  case "C":
                  case "D":
                  case "F":
                  case "I":
                  case "L":
                  case "M":
                  case "N":
                  case "O":
                  case "T":
                  case "Y":
                    break;
                  default:
                    throw new Error("Unknown Field Type: " + O.type);
                }
              if ((13 !== l[l.l] && (l.l = _ - 1), 13 !== l.read_shift(1)))
                throw new Error(
                  "DBF Terminator not found " + l.l + " " + l[l.l],
                );
              l.l = _;
              var F = 0,
                P = 0;
              for (f[0] = [], P = 0; P != g.length; ++P) f[0][P] = g[P].name;
              for (; u-- > 0;)
                if (42 !== l[l.l])
                  for (++l.l, f[++F] = [], P = 0, P = 0; P != g.length; ++P) {
                    var I = l.slice(l.l, l.l + g[P].len);
                    ((l.l += g[P].len), Fr(I, 0));
                    var z = We.utils.decode(T, I);
                    switch (g[P].type) {
                      case "C":
                        z.trim().length && (f[F][P] = z.replace(/\s+$/, ""));
                        break;
                      case "D":
                        f[F][P] =
                          8 === z.length
                            ? new Date(
                                +z.slice(0, 4),
                                +z.slice(4, 6) - 1,
                                +z.slice(6, 8),
                              )
                            : z;
                        break;
                      case "F":
                        f[F][P] = parseFloat(z.trim());
                        break;
                      case "+":
                      case "I":
                        f[F][P] = m
                          ? 2147483648 ^ I.read_shift(-4, "i")
                          : I.read_shift(4, "i");
                        break;
                      case "L":
                        switch (z.trim().toUpperCase()) {
                          case "Y":
                          case "T":
                            f[F][P] = !0;
                            break;
                          case "N":
                          case "F":
                            f[F][P] = !1;
                            break;
                          case "":
                          case "?":
                            break;
                          default:
                            throw new Error("DBF Unrecognized L:|" + z + "|");
                        }
                        break;
                      case "M":
                        if (!d)
                          throw new Error(
                            "DBF Unexpected MEMO for type " + h.toString(16),
                          );
                        f[F][P] =
                          "##MEMO##" +
                          (m ? parseInt(z.trim(), 10) : I.read_shift(4));
                        break;
                      case "N":
                        (z = z.replace(/\u0000/g, "").trim()) &&
                          "." != z &&
                          (f[F][P] = +z || 0);
                        break;
                      case "@":
                        f[F][P] = new Date(I.read_shift(-8, "f") - 621356832e5);
                        break;
                      case "T":
                        f[F][P] = new Date(
                          864e5 * (I.read_shift(4) - 2440588) + I.read_shift(4),
                        );
                        break;
                      case "Y":
                        f[F][P] =
                          I.read_shift(4, "i") / 1e4 +
                          (I.read_shift(4, "i") / 1e4) * Math.pow(2, 32);
                        break;
                      case "O":
                        f[F][P] = -I.read_shift(-8, "f");
                        break;
                      case "B":
                        if (x && 8 == g[P].len) {
                          f[F][P] = I.read_shift(8, "f");
                          break;
                        }
                      case "G":
                      case "P":
                        I.l += g[P].len;
                        break;
                      case "0":
                        if ("_NullFlags" === g[P].name) break;
                      default:
                        throw new Error(
                          "DBF Unsupported data type " + g[P].type,
                        );
                    }
                  }
                else l.l += A;
              if (2 != h && l.l < l.length && 26 != l[l.l++])
                throw new Error(
                  "DBF EOF Marker missing " +
                    (l.l - 1) +
                    " of " +
                    l.length +
                    " " +
                    l[l.l - 1].toString(16),
                );
              return (
                o && o.sheetRows && (f = f.slice(0, o.sheetRows)),
                (o.DBF = g),
                f
              );
            })(c, f),
            f,
          );
          return (
            (l["!cols"] = f.DBF.map(function (h) {
              return { wch: h.len, DBF: h };
            })),
            delete f.DBF,
            l
          );
        }
        var i = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
        return {
          to_workbook: function n(c, o) {
            try {
              return Jt(a(c, o), o);
            } catch (f) {
              if (o && o.WTF) throw f;
            }
            return { SheetNames: [], Sheets: {} };
          },
          to_sheet: a,
          from_sheet: function s(c, o) {
            var f = o || {};
            if ((+f.codepage >= 0 && rt(+f.codepage), "string" == f.type))
              throw new Error("Cannot write DBF to JS string");
            var l = Ur(),
              h = vi(c, { header: 1, raw: !0, cellDates: !0 }),
              d = h[0],
              x = h.slice(1),
              m = c["!cols"] || [],
              u = 0,
              _ = 0,
              A = 0,
              T = 1;
            for (u = 0; u < d.length; ++u)
              if (((m[u] || {}).DBF || {}).name) ((d[u] = m[u].DBF.name), ++A);
              else if (null != d[u]) {
                if (
                  (++A,
                  "number" == typeof d[u] && (d[u] = d[u].toString(10)),
                  "string" != typeof d[u])
                )
                  throw new Error(
                    "DBF Invalid column name " +
                      d[u] +
                      " |" +
                      typeof d[u] +
                      "|",
                  );
                if (d.indexOf(d[u]) !== u)
                  for (_ = 0; _ < 1024; ++_)
                    if (-1 == d.indexOf(d[u] + "_" + _)) {
                      d[u] += "_" + _;
                      break;
                    }
              }
            var g = Ge(c["!ref"]),
              O = [],
              D = [],
              Y = [];
            for (u = 0; u <= g.e.c - g.s.c; ++u) {
              var F = "",
                P = "",
                I = 0,
                z = [];
              for (_ = 0; _ < x.length; ++_) null != x[_][u] && z.push(x[_][u]);
              if (0 != z.length && null != d[u]) {
                for (_ = 0; _ < z.length; ++_) {
                  switch (typeof z[_]) {
                    case "number":
                      P = "B";
                      break;
                    case "string":
                    default:
                      P = "C";
                      break;
                    case "boolean":
                      P = "L";
                      break;
                    case "object":
                      P = z[_] instanceof Date ? "D" : "C";
                  }
                  ((I = Math.max(I, String(z[_]).length)),
                    (F = F && F != P ? "C" : P));
                }
                (I > 250 && (I = 250),
                  "C" == (P = ((m[u] || {}).DBF || {}).type) &&
                    m[u].DBF.len > I &&
                    (I = m[u].DBF.len),
                  "B" == F &&
                    "N" == P &&
                    ((F = "N"), (Y[u] = m[u].DBF.dec), (I = m[u].DBF.len)),
                  (D[u] = "C" == F || "N" == P ? I : i[F] || 0),
                  (T += D[u]),
                  (O[u] = F));
              } else O[u] = "?";
            }
            var Z = l.next(32);
            for (
              Z.write_shift(4, 318902576),
                Z.write_shift(4, x.length),
                Z.write_shift(2, 296 + 32 * A),
                Z.write_shift(2, T),
                u = 0;
              u < 4;
              ++u
            )
              Z.write_shift(4, 0);
            for (
              Z.write_shift(4, 0 | ((+r[oa] || 3) << 8)), u = 0, _ = 0;
              u < d.length;
              ++u
            )
              if (null != d[u]) {
                var b = l.next(32),
                  ue = (d[u].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(
                    0,
                    11,
                  );
                (b.write_shift(1, ue, "sbcs"),
                  b.write_shift(1, "?" == O[u] ? "C" : O[u], "sbcs"),
                  b.write_shift(4, _),
                  b.write_shift(1, D[u] || i[O[u]] || 0),
                  b.write_shift(1, Y[u] || 0),
                  b.write_shift(1, 2),
                  b.write_shift(4, 0),
                  b.write_shift(1, 0),
                  b.write_shift(4, 0),
                  b.write_shift(4, 0),
                  (_ += D[u] || i[O[u]] || 0));
              }
            var ge = l.next(264);
            for (ge.write_shift(4, 13), u = 0; u < 65; ++u)
              ge.write_shift(4, 0);
            for (u = 0; u < x.length; ++u) {
              var xe = l.next(T);
              for (xe.write_shift(1, 0), _ = 0; _ < d.length; ++_)
                if (null != d[_])
                  switch (O[_]) {
                    case "L":
                      xe.write_shift(
                        1,
                        null == x[u][_] ? 63 : x[u][_] ? 84 : 70,
                      );
                      break;
                    case "B":
                      xe.write_shift(8, x[u][_] || 0, "f");
                      break;
                    case "N":
                      var ke = "0";
                      for (
                        "number" == typeof x[u][_] &&
                          (ke = x[u][_].toFixed(Y[_] || 0)),
                          A = 0;
                        A < D[_] - ke.length;
                        ++A
                      )
                        xe.write_shift(1, 32);
                      xe.write_shift(1, ke, "sbcs");
                      break;
                    case "D":
                      x[u][_]
                        ? (xe.write_shift(
                            4,
                            ("0000" + x[u][_].getFullYear()).slice(-4),
                            "sbcs",
                          ),
                          xe.write_shift(
                            2,
                            ("00" + (x[u][_].getMonth() + 1)).slice(-2),
                            "sbcs",
                          ),
                          xe.write_shift(
                            2,
                            ("00" + x[u][_].getDate()).slice(-2),
                            "sbcs",
                          ))
                        : xe.write_shift(8, "00000000", "sbcs");
                      break;
                    case "C":
                      var Ae = String(null != x[u][_] ? x[u][_] : "").slice(
                        0,
                        D[_],
                      );
                      for (
                        xe.write_shift(1, Ae, "sbcs"), A = 0;
                        A < D[_] - Ae.length;
                        ++A
                      )
                        xe.write_shift(1, 32);
                  }
            }
            return (l.next(1).write_shift(1, 26), l.end());
          },
        };
      })(),
      fo = (function () {
        var e = {
            AA: "\xc0",
            BA: "\xc1",
            CA: "\xc2",
            DA: 195,
            HA: "\xc4",
            JA: 197,
            AE: "\xc8",
            BE: "\xc9",
            CE: "\xca",
            HE: "\xcb",
            AI: "\xcc",
            BI: "\xcd",
            CI: "\xce",
            HI: "\xcf",
            AO: "\xd2",
            BO: "\xd3",
            CO: "\xd4",
            DO: 213,
            HO: "\xd6",
            AU: "\xd9",
            BU: "\xda",
            CU: "\xdb",
            HU: "\xdc",
            Aa: "\xe0",
            Ba: "\xe1",
            Ca: "\xe2",
            Da: 227,
            Ha: "\xe4",
            Ja: 229,
            Ae: "\xe8",
            Be: "\xe9",
            Ce: "\xea",
            He: "\xeb",
            Ai: "\xec",
            Bi: "\xed",
            Ci: "\xee",
            Hi: "\xef",
            Ao: "\xf2",
            Bo: "\xf3",
            Co: "\xf4",
            Do: 245,
            Ho: "\xf6",
            Au: "\xf9",
            Bu: "\xfa",
            Cu: "\xfb",
            Hu: "\xfc",
            KC: "\xc7",
            Kc: "\xe7",
            q: "\xe6",
            z: "\u0153",
            a: "\xc6",
            j: "\u0152",
            DN: 209,
            Dn: 241,
            Hy: 255,
            S: 169,
            c: 170,
            R: 174,
            "B ": 180,
            0: 176,
            1: 177,
            2: 178,
            3: 179,
            5: 181,
            6: 182,
            7: 183,
            Q: 185,
            k: 186,
            b: 208,
            i: 216,
            l: 222,
            s: 240,
            y: 248,
            "!": 161,
            '"': 162,
            "#": 163,
            "(": 164,
            "%": 165,
            "'": 167,
            "H ": 168,
            "+": 171,
            ";": 187,
            "<": 188,
            "=": 189,
            ">": 190,
            "?": 191,
            "{": 223,
          },
          r = new RegExp(
            "\x1bN(" +
              sr(e)
                .join("|")
                .replace(/\|\|\|/, "|\\||")
                .replace(/([?()+])/g, "\\$1") +
              "|\\|)",
            "gm",
          ),
          t = function (d, x) {
            var m = e[x];
            return "number" == typeof m ? Ii(m) : m;
          },
          a = function (d, x, m) {
            var u = ((x.charCodeAt(0) - 32) << 4) | (m.charCodeAt(0) - 48);
            return 59 == u ? d : Ii(u);
          };
        function i(d, x) {
          var Z,
            m = d.split(/[\n\r]+/),
            u = -1,
            _ = -1,
            A = 0,
            T = 0,
            g = [],
            O = [],
            D = null,
            Y = {},
            F = [],
            P = [],
            I = [],
            z = 0;
          for (+x.codepage >= 0 && rt(+x.codepage); A !== m.length; ++A) {
            z = 0;
            var xe,
              b = m[A].trim()
                .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a)
                .replace(r, t),
              ue = b
                .replace(/;;/g, "\0")
                .split(";")
                .map(function (R) {
                  return R.replace(/\u0000/g, ";");
                });
            if (b.length > 0)
              switch (ue[0]) {
                case "ID":
                case "E":
                case "B":
                case "O":
                case "W":
                  break;
                case "P":
                  "P" == ue[1].charAt(0) &&
                    O.push(b.slice(3).replace(/;;/g, ";"));
                  break;
                case "C":
                  var ke = !1,
                    Ae = !1,
                    De = !1,
                    ve = !1,
                    ye = -1,
                    ne = -1;
                  for (T = 1; T < ue.length; ++T)
                    switch (ue[T].charAt(0)) {
                      case "A":
                      case "G":
                        break;
                      case "X":
                        ((_ = parseInt(ue[T].slice(1)) - 1), (Ae = !0));
                        break;
                      case "Y":
                        for (
                          u = parseInt(ue[T].slice(1)) - 1,
                            Ae || (_ = 0),
                            Z = g.length;
                          Z <= u;
                          ++Z
                        )
                          g[Z] = [];
                        break;
                      case "K":
                        ('"' === (xe = ue[T].slice(1)).charAt(0)
                          ? (xe = xe.slice(1, xe.length - 1))
                          : "TRUE" === xe
                            ? (xe = !0)
                            : "FALSE" === xe
                              ? (xe = !1)
                              : isNaN(dt(xe))
                                ? isNaN(La(xe).getDate()) || (xe = nr(xe))
                                : ((xe = dt(xe)),
                                  null !== D && Oa(D) && (xe = Mi(xe))),
                          typeof We < "u" &&
                            "string" == typeof xe &&
                            "string" != (x || {}).type &&
                            (x || {}).codepage &&
                            (xe = We.utils.decode(x.codepage, xe)),
                          (ke = !0));
                        break;
                      case "E":
                        ve = !0;
                        var y = Wa(ue[T].slice(1), { r: u, c: _ });
                        g[u][_] = [g[u][_], y];
                        break;
                      case "S":
                        ((De = !0), (g[u][_] = [g[u][_], "S5S"]));
                        break;
                      case "R":
                        ye = parseInt(ue[T].slice(1)) - 1;
                        break;
                      case "C":
                        ne = parseInt(ue[T].slice(1)) - 1;
                        break;
                      default:
                        if (x && x.WTF) throw new Error("SYLK bad record " + b);
                    }
                  if (
                    (ke &&
                      (g[u][_] && 2 == g[u][_].length
                        ? (g[u][_][0] = xe)
                        : (g[u][_] = xe),
                      (D = null)),
                    De)
                  ) {
                    if (ve)
                      throw new Error(
                        "SYLK shared formula cannot have own formula",
                      );
                    var X = ye > -1 && g[ye][ne];
                    if (!X || !X[1])
                      throw new Error("SYLK shared formula cannot find base");
                    g[u][_][1] = Oo(X[1], { r: u - ye, c: _ - ne });
                  }
                  break;
                case "F":
                  var N = 0;
                  for (T = 1; T < ue.length; ++T)
                    switch (ue[T].charAt(0)) {
                      case "X":
                        ((_ = parseInt(ue[T].slice(1)) - 1), ++N);
                        break;
                      case "Y":
                        for (
                          u = parseInt(ue[T].slice(1)) - 1, Z = g.length;
                          Z <= u;
                          ++Z
                        )
                          g[Z] = [];
                        break;
                      case "M":
                        z = parseInt(ue[T].slice(1)) / 20;
                        break;
                      case "F":
                      case "G":
                      case "S":
                      case "D":
                      case "N":
                        break;
                      case "P":
                        D = O[parseInt(ue[T].slice(1))];
                        break;
                      case "W":
                        for (
                          I = ue[T].slice(1).split(" "), Z = parseInt(I[0], 10);
                          Z <= parseInt(I[1], 10);
                          ++Z
                        )
                          ((z = parseInt(I[2], 10)),
                            (P[Z - 1] = 0 === z ? { hidden: !0 } : { wch: z }),
                            $t(P[Z - 1]));
                        break;
                      case "C":
                        P[(_ = parseInt(ue[T].slice(1)) - 1)] || (P[_] = {});
                        break;
                      case "R":
                        (F[(u = parseInt(ue[T].slice(1)) - 1)] || (F[u] = {}),
                          z > 0
                            ? ((F[u].hpt = z), (F[u].hpx = fi(z)))
                            : 0 === z && (F[u].hidden = !0));
                        break;
                      default:
                        if (x && x.WTF) throw new Error("SYLK bad record " + b);
                    }
                  N < 1 && (D = null);
                  break;
                default:
                  if (x && x.WTF) throw new Error("SYLK bad record " + b);
              }
          }
          return (
            F.length > 0 && (Y["!rows"] = F),
            P.length > 0 && (Y["!cols"] = P),
            x && x.sheetRows && (g = g.slice(0, x.sheetRows)),
            [g, Y]
          );
        }
        function s(d, x) {
          var m = (function n(d, x) {
              switch (x.type) {
                case "base64":
                  return i(zr(d), x);
                case "binary":
                  return i(d, x);
                case "buffer":
                  return i(
                    be && Buffer.isBuffer(d) ? d.toString("binary") : Vt(d),
                    x,
                  );
                case "array":
                  return i(la(d), x);
              }
              throw new Error("Unrecognized type " + x.type);
            })(d, x),
            _ = m[1],
            A = Da(m[0], x);
          return (
            sr(_).forEach(function (T) {
              A[T] = _[T];
            }),
            A
          );
        }
        function o(d, x, m, u) {
          var _ = "C;Y" + (m + 1) + ";X" + (u + 1) + ";K";
          switch (d.t) {
            case "n":
              ((_ += d.v || 0),
                d.f && !d.F && (_ += ";E" + Ss(d.f, { r: m, c: u })));
              break;
            case "b":
              _ += d.v ? "TRUE" : "FALSE";
              break;
            case "e":
              _ += d.w || d.v;
              break;
            case "d":
              _ += '"' + (d.w || d.v) + '"';
              break;
            case "s":
              _ += '"' + d.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
          }
          return _;
        }
        return (
          (e["|"] = 254),
          {
            to_workbook: function c(d, x) {
              return Jt(s(d, x), x);
            },
            to_sheet: s,
            from_sheet: function h(d, x) {
              var A,
                m = ["ID;PWXL;N;E"],
                u = [],
                _ = Ge(d["!ref"]),
                T = Array.isArray(d),
                g = "\r\n";
              (m.push("P;PGeneral"),
                m.push("F;P0;DG0G8;M255"),
                d["!cols"] &&
                  (function f(d, x) {
                    x.forEach(function (m, u) {
                      var _ = "F;W" + (u + 1) + " " + (u + 1) + " ";
                      (m.hidden
                        ? (_ += "0")
                        : ("number" == typeof m.width &&
                            !m.wpx &&
                            (m.wpx = pn(m.width)),
                          "number" == typeof m.wpx &&
                            !m.wch &&
                            (m.wch = vn(m.wpx)),
                          "number" == typeof m.wch && (_ += Math.round(m.wch))),
                        " " != _.charAt(_.length - 1) && d.push(_));
                    });
                  })(m, d["!cols"]),
                d["!rows"] &&
                  (function l(d, x) {
                    x.forEach(function (m, u) {
                      var _ = "F;";
                      (m.hidden
                        ? (_ += "M0;")
                        : m.hpt
                          ? (_ += "M" + 20 * m.hpt + ";")
                          : m.hpx && (_ += "M" + 20 * gn(m.hpx) + ";"),
                        _.length > 2 && d.push(_ + "R" + (u + 1)));
                    });
                  })(m, d["!rows"]),
                m.push(
                  "B;Y" +
                    (_.e.r - _.s.r + 1) +
                    ";X" +
                    (_.e.c - _.s.c + 1) +
                    ";D" +
                    [_.s.c, _.s.r, _.e.c, _.e.r].join(" "),
                ));
              for (var O = _.s.r; O <= _.e.r; ++O)
                for (var D = _.s.c; D <= _.e.c; ++D) {
                  var Y = Ce({ r: O, c: D });
                  (A = T ? (d[O] || [])[D] : d[Y]) &&
                    (null != A.v || (A.f && !A.F)) &&
                    u.push(o(A, 0, O, D));
                }
              return m.join(g) + g + u.join(g) + g + "E" + g;
            },
          }
        );
      })(),
      lo = (function () {
        function r(i, s) {
          for (
            var c = i.split("\n"), o = -1, f = -1, l = 0, h = [];
            l !== c.length;
            ++l
          )
            if ("BOT" !== c[l].trim()) {
              if (!(o < 0)) {
                for (
                  var d = c[l].trim().split(","),
                    x = d[0],
                    m = d[1],
                    u = c[++l] || "";
                  1 & (u.match(/["]/g) || []).length && l < c.length - 1;
                )
                  u += "\n" + c[++l];
                switch (((u = u.trim()), +x)) {
                  case -1:
                    if ("BOT" === u) {
                      ((h[++o] = []), (f = 0));
                      continue;
                    }
                    if ("EOD" !== u)
                      throw new Error("Unrecognized DIF special command " + u);
                    break;
                  case 0:
                    ((h[o][f] =
                      "TRUE" === u ||
                      ("FALSE" !== u &&
                        (isNaN(dt(m))
                          ? isNaN(La(m).getDate())
                            ? m
                            : nr(m)
                          : dt(m)))),
                      ++f);
                    break;
                  case 1:
                    ((u = (u = u.slice(1, u.length - 1)).replace(/""/g, '"')) &&
                      u.match(/^=".*"$/) &&
                      (u = u.slice(2, -1)),
                      (h[o][f++] = "" !== u ? u : null));
                }
                if ("EOD" === u) break;
              }
            } else ((h[++o] = []), (f = 0));
          return (s && s.sheetRows && (h = h.slice(0, s.sheetRows)), h);
        }
        function t(i, s) {
          return Da(
            (function e(i, s) {
              switch (s.type) {
                case "base64":
                  return r(zr(i), s);
                case "binary":
                  return r(i, s);
                case "buffer":
                  return r(
                    be && Buffer.isBuffer(i) ? i.toString("binary") : Vt(i),
                    s,
                  );
                case "array":
                  return r(la(i), s);
              }
              throw new Error("Unrecognized type " + s.type);
            })(i, s),
            s,
          );
        }
        return {
          to_workbook: function a(i, s) {
            return Jt(t(i, s), s);
          },
          to_sheet: t,
          from_sheet: (function () {
            var i = function (o, f, l, h, d) {
                (o.push(f),
                  o.push(l + "," + h),
                  o.push('"' + d.replace(/"/g, '""') + '"'));
              },
              s = function (o, f, l, h) {
                (o.push(f + "," + l),
                  o.push(1 == f ? '"' + h.replace(/"/g, '""') + '"' : h));
              };
            return function (o) {
              var h,
                f = [],
                l = Ge(o["!ref"]),
                d = Array.isArray(o);
              (i(f, "TABLE", 0, 1, "sheetjs"),
                i(f, "VECTORS", 0, l.e.r - l.s.r + 1, ""),
                i(f, "TUPLES", 0, l.e.c - l.s.c + 1, ""),
                i(f, "DATA", 0, 0, ""));
              for (var x = l.s.r; x <= l.e.r; ++x) {
                s(f, -1, 0, "BOT");
                for (var m = l.s.c; m <= l.e.c; ++m) {
                  var u = Ce({ r: x, c: m });
                  if ((h = d ? (o[x] || [])[m] : o[u]))
                    switch (h.t) {
                      case "n":
                        var _ = h.w;
                        (!_ && null != h.v && (_ = h.v),
                          null == _
                            ? s(f, 1, 0, h.f && !h.F ? "=" + h.f : "")
                            : s(f, 0, _, "V"));
                        break;
                      case "b":
                        s(f, 0, h.v ? 1 : 0, h.v ? "TRUE" : "FALSE");
                        break;
                      case "s":
                        s(f, 1, 0, isNaN(h.v) ? h.v : '="' + h.v + '"');
                        break;
                      case "d":
                        (h.w || (h.w = Zr(h.z || we[14], Ar(nr(h.v)))),
                          s(f, 0, h.w, "V"));
                        break;
                      default:
                        s(f, 1, 0, "");
                    }
                  else s(f, 1, 0, "");
                }
              }
              return (s(f, -1, 0, "EOD"), f.join("\r\n"));
            };
          })(),
        };
      })(),
      uo = (function () {
        function e(h) {
          return h
            .replace(/\\b/g, "\\")
            .replace(/\\c/g, ":")
            .replace(/\\n/g, "\n");
        }
        function r(h) {
          return h
            .replace(/\\/g, "\\b")
            .replace(/:/g, "\\c")
            .replace(/\n/g, "\\n");
        }
        function a(h, d) {
          return Da(
            (function t(h, d) {
              for (
                var x = h.split("\n"), m = -1, u = -1, _ = 0, A = [];
                _ !== x.length;
                ++_
              ) {
                var T = x[_].trim().split(":");
                if ("cell" === T[0]) {
                  var g = ur(T[1]);
                  if (A.length <= g.r)
                    for (m = A.length; m <= g.r; ++m) A[m] || (A[m] = []);
                  switch (((m = g.r), (u = g.c), T[2])) {
                    case "t":
                      A[m][u] = e(T[3]);
                      break;
                    case "v":
                      A[m][u] = +T[3];
                      break;
                    case "vtf":
                      var O = T[T.length - 1];
                    case "vtc":
                      ((A[m][u] = "nl" === T[3] ? !!+T[4] : +T[4]),
                        "vtf" == T[2] && (A[m][u] = [A[m][u], O]));
                  }
                }
              }
              return (d && d.sheetRows && (A = A.slice(0, d.sheetRows)), A);
            })(h, d),
            d,
          );
        }
        var i = [
            "socialcalc:version:1.5",
            "MIME-Version: 1.0",
            "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave",
          ].join("\n"),
          s =
            [
              "--SocialCalcSpreadsheetControlSave",
              "Content-type: text/plain; charset=UTF-8",
            ].join("\n") + "\n",
          c = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join(
            "\n",
          ),
          o = "--SocialCalcSpreadsheetControlSave--";
        function f(h) {
          if (!h || !h["!ref"]) return "";
          for (
            var m,
              d = [],
              x = [],
              u = "",
              _ = Gr(h["!ref"]),
              A = Array.isArray(h),
              T = _.s.r;
            T <= _.e.r;
            ++T
          )
            for (var g = _.s.c; g <= _.e.c; ++g)
              if (
                ((u = Ce({ r: T, c: g })),
                (m = A ? (h[T] || [])[g] : h[u]) && null != m.v && "z" !== m.t)
              ) {
                switch (((x = ["cell", u, "t"]), m.t)) {
                  case "s":
                  case "str":
                    x.push(r(m.v));
                    break;
                  case "n":
                    m.f
                      ? ((x[2] = "vtf"),
                        (x[3] = "n"),
                        (x[4] = m.v),
                        (x[5] = r(m.f)))
                      : ((x[2] = "v"), (x[3] = m.v));
                    break;
                  case "b":
                    ((x[2] = "vt" + (m.f ? "f" : "c")),
                      (x[3] = "nl"),
                      (x[4] = m.v ? "1" : "0"),
                      (x[5] = r(m.f || (m.v ? "TRUE" : "FALSE"))));
                    break;
                  case "d":
                    var O = Ar(nr(m.v));
                    ((x[2] = "vtc"),
                      (x[3] = "nd"),
                      (x[4] = "" + O),
                      (x[5] = m.w || Zr(m.z || we[14], O)));
                    break;
                  case "e":
                    continue;
                }
                d.push(x.join(":"));
              }
          return (
            d.push(
              "sheet:c:" +
                (_.e.c - _.s.c + 1) +
                ":r:" +
                (_.e.r - _.s.r + 1) +
                ":tvf:1",
            ),
            d.push("valueformat:1:text-wiki"),
            d.join("\n")
          );
        }
        return {
          to_workbook: function n(h, d) {
            return Jt(a(h, d), d);
          },
          to_sheet: a,
          from_sheet: function l(h) {
            return [i, s, c, s, f(h), o].join("\n");
          },
        };
      })(),
      Ua = (function () {
        function e(l, h, d, x, m) {
          m.raw
            ? (h[d][x] = l)
            : "" === l ||
              (h[d][x] =
                "TRUE" === l ||
                ("FALSE" !== l &&
                  (isNaN(dt(l))
                    ? isNaN(La(l).getDate())
                      ? l
                      : nr(l)
                    : dt(l))));
        }
        var t = { 44: ",", 9: "\t", 59: ";", 124: "|" },
          a = { 44: 3, 9: 2, 59: 1, 124: 0 };
        function n(l) {
          for (var h = {}, d = !1, x = 0, m = 0; x < l.length; ++x)
            34 == (m = l.charCodeAt(x))
              ? (d = !d)
              : !d && m in t && (h[m] = (h[m] || 0) + 1);
          for (x in ((m = []), h))
            Object.prototype.hasOwnProperty.call(h, x) && m.push([h[x], x]);
          if (!m.length)
            for (x in (h = a))
              Object.prototype.hasOwnProperty.call(h, x) && m.push([h[x], x]);
          return (
            m.sort(function (u, _) {
              return u[0] - _[0] || a[u[1]] - a[_[1]];
            }),
            t[m.pop()[1]] || 44
          );
        }
        function s(l, h) {
          return !h ||
            !h.PRN ||
            h.FS ||
            "sep=" == l.slice(0, 4) ||
            l.indexOf("\t") >= 0 ||
            l.indexOf(",") >= 0 ||
            l.indexOf(";") >= 0
            ? (function i(l, h) {
                var d = h || {},
                  x = "";
                null != ir && null == d.dense && (d.dense = ir);
                var m = d.dense ? [] : {},
                  u = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
                "sep=" == l.slice(0, 4)
                  ? 13 == l.charCodeAt(5) && 10 == l.charCodeAt(6)
                    ? ((x = l.charAt(4)), (l = l.slice(7)))
                    : 13 == l.charCodeAt(5) || 10 == l.charCodeAt(5)
                      ? ((x = l.charAt(4)), (l = l.slice(6)))
                      : (x = n(l.slice(0, 1024)))
                  : (x = d && d.FS ? d.FS : n(l.slice(0, 1024)));
                var _ = 0,
                  A = 0,
                  T = 0,
                  g = 0,
                  O = 0,
                  D = x.charCodeAt(0),
                  Y = !1,
                  F = 0,
                  P = l.charCodeAt(0);
                l = l.replace(/\r\n/gm, "\n");
                var I =
                  null != d.dateNF
                    ? (function nu(e) {
                        var r = "number" == typeof e ? we[e] : e;
                        return (
                          (r = r.replace(I0, "(\\d+)")),
                          new RegExp("^" + r + "$")
                        );
                      })(d.dateNF)
                    : null;
                function z() {
                  var Z = l.slice(g, O),
                    b = {};
                  if (
                    ('"' == Z.charAt(0) &&
                      '"' == Z.charAt(Z.length - 1) &&
                      (Z = Z.slice(1, -1).replace(/""/g, '"')),
                    0 === Z.length)
                  )
                    b.t = "z";
                  else if (d.raw) ((b.t = "s"), (b.v = Z));
                  else if (0 === Z.trim().length) ((b.t = "s"), (b.v = Z));
                  else if (61 == Z.charCodeAt(0))
                    34 == Z.charCodeAt(1) && 34 == Z.charCodeAt(Z.length - 1)
                      ? ((b.t = "s"),
                        (b.v = Z.slice(2, -1).replace(/""/g, '"')))
                      : (function Fm(e) {
                            return 1 != e.length;
                          })(Z)
                        ? ((b.t = "n"), (b.f = Z.slice(1)))
                        : ((b.t = "s"), (b.v = Z));
                  else if ("TRUE" == Z) ((b.t = "b"), (b.v = !0));
                  else if ("FALSE" == Z) ((b.t = "b"), (b.v = !1));
                  else if (isNaN((T = dt(Z))))
                    if (!isNaN(La(Z).getDate()) || (I && Z.match(I))) {
                      b.z = d.dateNF || we[14];
                      var ue = 0;
                      (I &&
                        Z.match(I) &&
                        ((Z = (function iu(e, r, t) {
                          var a = -1,
                            n = -1,
                            i = -1,
                            s = -1,
                            c = -1,
                            o = -1;
                          ((r.match(I0) || []).forEach(function (h, d) {
                            var x = parseInt(t[d + 1], 10);
                            switch (h.toLowerCase().charAt(0)) {
                              case "y":
                                a = x;
                                break;
                              case "d":
                                i = x;
                                break;
                              case "h":
                                s = x;
                                break;
                              case "s":
                                o = x;
                                break;
                              case "m":
                                s >= 0 ? (c = x) : (n = x);
                            }
                          }),
                            o >= 0 && -1 == c && n >= 0 && ((c = n), (n = -1)));
                          var f =
                            (
                              "" + (a >= 0 ? a : new Date().getFullYear())
                            ).slice(-4) +
                            "-" +
                            ("00" + (n >= 1 ? n : 1)).slice(-2) +
                            "-" +
                            ("00" + (i >= 1 ? i : 1)).slice(-2);
                          (7 == f.length && (f = "0" + f),
                            8 == f.length && (f = "20" + f));
                          var l =
                            ("00" + (s >= 0 ? s : 0)).slice(-2) +
                            ":" +
                            ("00" + (c >= 0 ? c : 0)).slice(-2) +
                            ":" +
                            ("00" + (o >= 0 ? o : 0)).slice(-2);
                          return -1 == s && -1 == c && -1 == o
                            ? f
                            : -1 == a && -1 == n && -1 == i
                              ? l
                              : f + "T" + l;
                        })(0, d.dateNF, Z.match(I) || [])),
                        (ue = 1)),
                        d.cellDates
                          ? ((b.t = "d"), (b.v = nr(Z, ue)))
                          : ((b.t = "n"), (b.v = Ar(nr(Z, ue)))),
                        !1 !== d.cellText &&
                          (b.w = Zr(b.z, b.v instanceof Date ? Ar(b.v) : b.v)),
                        d.cellNF || delete b.z);
                    } else ((b.t = "s"), (b.v = Z));
                  else ((b.t = "n"), !1 !== d.cellText && (b.w = Z), (b.v = T));
                  if (
                    ("z" == b.t ||
                      (d.dense
                        ? (m[_] || (m[_] = []), (m[_][A] = b))
                        : (m[Ce({ c: A, r: _ })] = b)),
                    (P = l.charCodeAt((g = O + 1))),
                    u.e.c < A && (u.e.c = A),
                    u.e.r < _ && (u.e.r = _),
                    F == D)
                  )
                    ++A;
                  else if (((A = 0), ++_, d.sheetRows && d.sheetRows <= _))
                    return !0;
                }
                e: for (; O < l.length; ++O)
                  switch ((F = l.charCodeAt(O))) {
                    case 34:
                      34 === P && (Y = !Y);
                      break;
                    case D:
                    case 10:
                    case 13:
                      if (!Y && z()) break e;
                  }
                return (O - g > 0 && z(), (m["!ref"] = Ne(u)), m);
              })(l, h)
            : Da(
                (function r(l, h) {
                  var d = h || {},
                    x = [];
                  if (!l || 0 === l.length) return x;
                  for (
                    var m = l.split(/[\r\n]/), u = m.length - 1;
                    u >= 0 && 0 === m[u].length;
                  )
                    --u;
                  for (var _ = 10, A = 0, T = 0; T <= u; ++T)
                    (-1 == (A = m[T].indexOf(" ")) ? (A = m[T].length) : A++,
                      (_ = Math.max(_, A)));
                  for (T = 0; T <= u; ++T) {
                    x[T] = [];
                    var g = 0;
                    for (
                      e(m[T].slice(0, _).trim(), x, T, g, d), g = 1;
                      g <= (m[T].length - _) / 10 + 1;
                      ++g
                    )
                      e(
                        m[T].slice(_ + 10 * (g - 1), _ + 10 * g).trim(),
                        x,
                        T,
                        g,
                        d,
                      );
                  }
                  return (d.sheetRows && (x = x.slice(0, d.sheetRows)), x);
                })(l, h),
                h,
              );
        }
        function c(l, h) {
          var d = "",
            x =
              "string" == h.type
                ? [0, 0, 0, 0]
                : (function Gs(e, r) {
                    var t = "";
                    switch ((r || {}).type || "base64") {
                      case "buffer":
                      case "array":
                        return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
                      case "base64":
                        t = zr(e.slice(0, 12));
                        break;
                      case "binary":
                        t = e;
                        break;
                      default:
                        throw new Error(
                          "Unrecognized type " + ((r && r.type) || "undefined"),
                        );
                    }
                    return [
                      t.charCodeAt(0),
                      t.charCodeAt(1),
                      t.charCodeAt(2),
                      t.charCodeAt(3),
                      t.charCodeAt(4),
                      t.charCodeAt(5),
                      t.charCodeAt(6),
                      t.charCodeAt(7),
                    ];
                  })(l, h);
          switch (h.type) {
            case "base64":
              d = zr(l);
              break;
            case "binary":
            case "string":
              d = l;
              break;
            case "buffer":
              d =
                65001 == h.codepage
                  ? l.toString("utf8")
                  : h.codepage && typeof We < "u"
                    ? We.utils.decode(h.codepage, l)
                    : be && Buffer.isBuffer(l)
                      ? l.toString("binary")
                      : Vt(l);
              break;
            case "array":
              d = la(l);
              break;
            default:
              throw new Error("Unrecognized type " + h.type);
          }
          return (
            239 == x[0] && 187 == x[1] && 191 == x[2]
              ? (d = qe(d.slice(3)))
              : "string" != h.type && "buffer" != h.type && 65001 == h.codepage
                ? (d = qe(d))
                : "binary" == h.type &&
                  typeof We < "u" &&
                  h.codepage &&
                  (d = We.utils.decode(h.codepage, We.utils.encode(28591, d))),
            "socialcalc:version:" == d.slice(0, 19)
              ? uo.to_sheet("string" == h.type ? d : qe(d), h)
              : s(d, h)
          );
        }
        return {
          to_workbook: function o(l, h) {
            return Jt(c(l, h), h);
          },
          to_sheet: c,
          from_sheet: function f(l) {
            for (
              var x, h = [], d = Ge(l["!ref"]), m = Array.isArray(l), u = d.s.r;
              u <= d.e.r;
              ++u
            ) {
              for (var _ = [], A = d.s.c; A <= d.e.c; ++A) {
                var T = Ce({ r: u, c: A });
                if ((x = m ? (l[u] || [])[A] : l[T]) && null != x.v) {
                  for (
                    var g = (x.w || (Et(x), x.w) || "").slice(0, 10);
                    g.length < 10;
                  )
                    g += " ";
                  _.push(g + (0 === A ? " " : ""));
                } else _.push("          ");
              }
              h.push(_.join(""));
            }
            return h.join("\n");
          },
        };
      })(),
      Aa = (function () {
        function e(y, X, N) {
          if (y) {
            Fr(y, y.l || 0);
            for (var R = N.Enum || ye; y.l < y.length;) {
              var ee = y.read_shift(2),
                _e = R[ee] || R[65535],
                oe = y.read_shift(2),
                fe = y.l + oe,
                te = _e.f && _e.f(y, oe, N);
              if (((y.l = fe), X(te, _e, ee))) return;
            }
          }
        }
        function t(y, X) {
          if (!y) return y;
          var N = X || {};
          null != ir && null == N.dense && (N.dense = ir);
          var R = N.dense ? [] : {},
            ee = "Sheet1",
            _e = "",
            oe = 0,
            fe = {},
            te = [],
            Le = [],
            C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
            Ze = N.sheetRows || 0;
          if (
            0 == y[2] &&
            (8 == y[3] || 9 == y[3]) &&
            y.length >= 16 &&
            5 == y[14] &&
            108 === y[15]
          )
            throw new Error("Unsupported Works 3 for Mac file");
          if (2 == y[2])
            ((N.Enum = ye),
              e(
                y,
                function (pe, dr, ft) {
                  switch (ft) {
                    case 0:
                      ((N.vers = pe), pe >= 4096 && (N.qpro = !0));
                      break;
                    case 6:
                      C = pe;
                      break;
                    case 204:
                      pe && (_e = pe);
                      break;
                    case 222:
                      _e = pe;
                      break;
                    case 15:
                    case 51:
                      N.qpro || (pe[1].v = pe[1].v.slice(1));
                    case 13:
                    case 14:
                    case 16:
                      (14 == ft &&
                        112 == (112 & pe[2]) &&
                        (15 & pe[2]) > 1 &&
                        (15 & pe[2]) < 15 &&
                        ((pe[1].z = N.dateNF || we[14]),
                        N.cellDates &&
                          ((pe[1].t = "d"), (pe[1].v = Mi(pe[1].v)))),
                        N.qpro &&
                          pe[3] > oe &&
                          ((R["!ref"] = Ne(C)),
                          (fe[ee] = R),
                          te.push(ee),
                          (R = N.dense ? [] : {}),
                          (C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                          (oe = pe[3]),
                          (ee = _e || "Sheet" + (oe + 1)),
                          (_e = "")));
                      var wt = N.dense
                        ? (R[pe[0].r] || [])[pe[0].c]
                        : R[Ce(pe[0])];
                      if (wt) {
                        ((wt.t = pe[1].t),
                          (wt.v = pe[1].v),
                          null != pe[1].z && (wt.z = pe[1].z),
                          null != pe[1].f && (wt.f = pe[1].f));
                        break;
                      }
                      N.dense
                        ? (R[pe[0].r] || (R[pe[0].r] = []),
                          (R[pe[0].r][pe[0].c] = pe[1]))
                        : (R[Ce(pe[0])] = pe[1]);
                  }
                },
                N,
              ));
          else {
            if (26 != y[2] && 14 != y[2])
              throw new Error("Unrecognized LOTUS BOF " + y[2]);
            ((N.Enum = ne),
              14 == y[2] && ((N.qpro = !0), (y.l = 0)),
              e(
                y,
                function (pe, dr, ft) {
                  switch (ft) {
                    case 204:
                      ee = pe;
                      break;
                    case 22:
                      pe[1].v = pe[1].v.slice(1);
                    case 23:
                    case 24:
                    case 25:
                    case 37:
                    case 39:
                    case 40:
                      if (
                        (pe[3] > oe &&
                          ((R["!ref"] = Ne(C)),
                          (fe[ee] = R),
                          te.push(ee),
                          (R = N.dense ? [] : {}),
                          (C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                          (ee = "Sheet" + ((oe = pe[3]) + 1))),
                        Ze > 0 && pe[0].r >= Ze)
                      )
                        break;
                      (N.dense
                        ? (R[pe[0].r] || (R[pe[0].r] = []),
                          (R[pe[0].r][pe[0].c] = pe[1]))
                        : (R[Ce(pe[0])] = pe[1]),
                        C.e.c < pe[0].c && (C.e.c = pe[0].c),
                        C.e.r < pe[0].r && (C.e.r = pe[0].r));
                      break;
                    case 27:
                      pe[14e3] && (Le[pe[14e3][0]] = pe[14e3][1]);
                      break;
                    case 1537:
                      ((Le[pe[0]] = pe[1]), pe[0] == oe && (ee = pe[1]));
                  }
                },
                N,
              ));
          }
          if (
            ((R["!ref"] = Ne(C)),
            (fe[_e || ee] = R),
            te.push(_e || ee),
            !Le.length)
          )
            return { SheetNames: te, Sheets: fe };
          for (var Me = {}, $e = [], Be = 0; Be < Le.length; ++Be)
            fe[te[Be]]
              ? ($e.push(Le[Be] || te[Be]),
                (Me[Le[Be]] = fe[Le[Be]] || fe[te[Be]]))
              : ($e.push(Le[Be]), (Me[Le[Be]] = { "!ref": "A1" }));
          return { SheetNames: $e, Sheets: Me };
        }
        function f(y, X, N) {
          var R = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
          return (
            N.qpro && 20768 != N.vers
              ? ((R[0].c = y.read_shift(1)),
                (R[3] = y.read_shift(1)),
                (R[0].r = y.read_shift(2)),
                (y.l += 2))
              : ((R[2] = y.read_shift(1)),
                (R[0].c = y.read_shift(2)),
                (R[0].r = y.read_shift(2))),
            R
          );
        }
        function l(y, X, N) {
          var R = y.l + X,
            ee = f(y, 0, N);
          if (((ee[1].t = "s"), 20768 == N.vers)) {
            y.l++;
            var _e = y.read_shift(1);
            return ((ee[1].v = y.read_shift(_e, "utf8")), ee);
          }
          return (
            N.qpro && y.l++,
            (ee[1].v = y.read_shift(R - y.l, "cstr")),
            ee
          );
        }
        function h(y, X, N) {
          var R = j(7 + N.length);
          (R.write_shift(1, 255),
            R.write_shift(2, X),
            R.write_shift(2, y),
            R.write_shift(1, 39));
          for (var ee = 0; ee < R.length; ++ee) {
            var _e = N.charCodeAt(ee);
            R.write_shift(1, _e >= 128 ? 95 : _e);
          }
          return (R.write_shift(1, 0), R);
        }
        function x(y, X, N) {
          var R = j(7);
          return (
            R.write_shift(1, 255),
            R.write_shift(2, X),
            R.write_shift(2, y),
            R.write_shift(2, N, "i"),
            R
          );
        }
        function u(y, X, N) {
          var R = j(13);
          return (
            R.write_shift(1, 255),
            R.write_shift(2, X),
            R.write_shift(2, y),
            R.write_shift(8, N, "f"),
            R
          );
        }
        function A(y, X, N) {
          var R = 32768 & X;
          return (
            (X = (R ? y : 0) + ((X &= -32769) >= 8192 ? X - 16384 : X)),
            (R ? "" : "$") + (N ? er(X) : fr(X))
          );
        }
        var T = {
            51: ["FALSE", 0],
            52: ["TRUE", 0],
            70: ["LEN", 1],
            80: ["SUM", 69],
            81: ["AVERAGEA", 69],
            82: ["COUNTA", 69],
            83: ["MINA", 69],
            84: ["MAXA", 69],
            111: ["T", 1],
          },
          g = [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "+",
            "-",
            "*",
            "/",
            "^",
            "=",
            "<>",
            "<=",
            ">=",
            "<",
            ">",
            "",
            "",
            "",
            "",
            "&",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
          ];
        function D(y) {
          var X = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
          return (
            (X[0].r = y.read_shift(2)),
            (X[3] = y[y.l++]),
            (X[0].c = y[y.l++]),
            X
          );
        }
        function F(y, X, N, R) {
          var ee = j(6 + R.length);
          (ee.write_shift(2, y),
            ee.write_shift(1, N),
            ee.write_shift(1, X),
            ee.write_shift(1, 39));
          for (var _e = 0; _e < R.length; ++_e) {
            var oe = R.charCodeAt(_e);
            ee.write_shift(1, oe >= 128 ? 95 : oe);
          }
          return (ee.write_shift(1, 0), ee);
        }
        function I(y, X) {
          var N = D(y),
            R = y.read_shift(4),
            ee = y.read_shift(4),
            _e = y.read_shift(2);
          if (65535 == _e)
            return (
              0 === R && 3221225472 === ee
                ? ((N[1].t = "e"), (N[1].v = 15))
                : 0 === R && 3489660928 === ee
                  ? ((N[1].t = "e"), (N[1].v = 42))
                  : (N[1].v = 0),
              N
            );
          var oe = 32768 & _e;
          return (
            (_e = (32767 & _e) - 16446),
            (N[1].v =
              (1 - 2 * oe) * (ee * Math.pow(2, _e + 32) + R * Math.pow(2, _e))),
            N
          );
        }
        function z(y, X, N, R) {
          var ee = j(14);
          if (
            (ee.write_shift(2, y),
            ee.write_shift(1, N),
            ee.write_shift(1, X),
            0 == R)
          )
            return (
              ee.write_shift(4, 0),
              ee.write_shift(4, 0),
              ee.write_shift(2, 65535),
              ee
            );
          var _e = 0,
            oe = 0,
            te = 0;
          return (
            R < 0 && ((_e = 1), (R = -R)),
            (oe = 0 | Math.log2(R)),
            2147483648 & (te = (R /= Math.pow(2, oe - 31)) >>> 0) ||
              (++oe, (te = (R /= 2) >>> 0)),
            (R -= te),
            (te |= 2147483648),
            (te >>>= 0),
            (R *= Math.pow(2, 32)),
            ee.write_shift(4, R >>> 0),
            ee.write_shift(4, te),
            ee.write_shift(2, (oe += 16383 + (_e ? 32768 : 0))),
            ee
          );
        }
        function ue(y, X) {
          var N = D(y),
            R = y.read_shift(8, "f");
          return ((N[1].v = R), N);
        }
        function xe(y, X) {
          return 0 == y[y.l + X - 1] ? y.read_shift(X, "cstr") : "";
        }
        function ve(y, X) {
          var N = j(5 + y.length);
          (N.write_shift(2, 14e3), N.write_shift(2, X));
          for (var R = 0; R < y.length; ++R) {
            var ee = y.charCodeAt(R);
            N[N.l++] = ee > 127 ? 95 : ee;
          }
          return ((N[N.l++] = 0), N);
        }
        var ye = {
            0: { n: "BOF", f: pr },
            1: { n: "EOF" },
            2: { n: "CALCMODE" },
            3: { n: "CALCORDER" },
            4: { n: "SPLIT" },
            5: { n: "SYNC" },
            6: {
              n: "RANGE",
              f: function c(y, X, N) {
                var R = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
                return 8 == X && N.qpro
                  ? ((R.s.c = y.read_shift(1)),
                    y.l++,
                    (R.s.r = y.read_shift(2)),
                    (R.e.c = y.read_shift(1)),
                    y.l++,
                    (R.e.r = y.read_shift(2)),
                    R)
                  : ((R.s.c = y.read_shift(2)),
                    (R.s.r = y.read_shift(2)),
                    12 == X && N.qpro && (y.l += 2),
                    (R.e.c = y.read_shift(2)),
                    (R.e.r = y.read_shift(2)),
                    12 == X && N.qpro && (y.l += 2),
                    65535 == R.s.c && (R.s.c = R.e.c = R.s.r = R.e.r = 0),
                    R);
              },
            },
            7: { n: "WINDOW1" },
            8: { n: "COLW1" },
            9: { n: "WINTWO" },
            10: { n: "COLW2" },
            11: { n: "NAME" },
            12: { n: "BLANK" },
            13: {
              n: "INTEGER",
              f: function d(y, X, N) {
                var R = f(y, 0, N);
                return ((R[1].v = y.read_shift(2, "i")), R);
              },
            },
            14: {
              n: "NUMBER",
              f: function m(y, X, N) {
                var R = f(y, 0, N);
                return ((R[1].v = y.read_shift(8, "f")), R);
              },
            },
            15: { n: "LABEL", f: l },
            16: {
              n: "FORMULA",
              f: function _(y, X, N) {
                var R = y.l + X,
                  ee = f(y, 0, N);
                if (((ee[1].v = y.read_shift(8, "f")), N.qpro)) y.l = R;
                else {
                  var _e = y.read_shift(2);
                  ((function O(y, X) {
                    Fr(y, 0);
                    for (
                      var N = [], R = 0, ee = "", _e = "", oe = "", fe = "";
                      y.l < y.length;
                    ) {
                      var te = y[y.l++];
                      switch (te) {
                        case 0:
                          N.push(y.read_shift(8, "f"));
                          break;
                        case 1:
                          ((_e = A(X[0].c, y.read_shift(2), !0)),
                            (ee = A(X[0].r, y.read_shift(2), !1)),
                            N.push(_e + ee));
                          break;
                        case 2:
                          var Le = A(X[0].c, y.read_shift(2), !0),
                            C = A(X[0].r, y.read_shift(2), !1);
                          ((_e = A(X[0].c, y.read_shift(2), !0)),
                            (ee = A(X[0].r, y.read_shift(2), !1)),
                            N.push(Le + C + ":" + _e + ee));
                          break;
                        case 3:
                          if (y.l < y.length)
                            return void console.error(
                              "WK1 premature formula end",
                            );
                          break;
                        case 4:
                          N.push("(" + N.pop() + ")");
                          break;
                        case 5:
                          N.push(y.read_shift(2));
                          break;
                        case 6:
                          for (var Ze = ""; (te = y[y.l++]);)
                            Ze += String.fromCharCode(te);
                          N.push('"' + Ze.replace(/"/g, '""') + '"');
                          break;
                        case 8:
                          N.push("-" + N.pop());
                          break;
                        case 23:
                          N.push("+" + N.pop());
                          break;
                        case 22:
                          N.push("NOT(" + N.pop() + ")");
                          break;
                        case 20:
                        case 21:
                          ((fe = N.pop()),
                            (oe = N.pop()),
                            N.push(
                              ["AND", "OR"][te - 20] +
                                "(" +
                                oe +
                                "," +
                                fe +
                                ")",
                            ));
                          break;
                        default:
                          if (te < 32 && g[te])
                            ((fe = N.pop()),
                              (oe = N.pop()),
                              N.push(oe + g[te] + fe));
                          else {
                            if (!T[te])
                              return te <= 7
                                ? console.error(
                                    "WK1 invalid opcode " + te.toString(16),
                                  )
                                : te <= 24
                                  ? console.error(
                                      "WK1 unsupported op " + te.toString(16),
                                    )
                                  : te <= 30
                                    ? console.error(
                                        "WK1 invalid opcode " + te.toString(16),
                                      )
                                    : te <= 115
                                      ? console.error(
                                          "WK1 unsupported function opcode " +
                                            te.toString(16),
                                        )
                                      : console.error(
                                          "WK1 unrecognized opcode " +
                                            te.toString(16),
                                        );
                            if (
                              (69 == (R = T[te][1]) && (R = y[y.l++]),
                              R > N.length)
                            )
                              return void console.error(
                                "WK1 bad formula parse 0x" +
                                  te.toString(16) +
                                  ":|" +
                                  N.join("|") +
                                  "|",
                              );
                            var Me = N.slice(-R);
                            ((N.length -= R),
                              N.push(T[te][0] + "(" + Me.join(",") + ")"));
                          }
                      }
                    }
                    1 == N.length
                      ? (X[1].f = "" + N[0])
                      : console.error(
                          "WK1 bad formula parse |" + N.join("|") + "|",
                        );
                  })(y.slice(y.l, y.l + _e), ee),
                    (y.l += _e));
                }
                return ee;
              },
            },
            24: { n: "TABLE" },
            25: { n: "ORANGE" },
            26: { n: "PRANGE" },
            27: { n: "SRANGE" },
            28: { n: "FRANGE" },
            29: { n: "KRANGE1" },
            32: { n: "HRANGE" },
            35: { n: "KRANGE2" },
            36: { n: "PROTEC" },
            37: { n: "FOOTER" },
            38: { n: "HEADER" },
            39: { n: "SETUP" },
            40: { n: "MARGINS" },
            41: { n: "LABELFMT" },
            42: { n: "TITLES" },
            43: { n: "SHEETJS" },
            45: { n: "GRAPH" },
            46: { n: "NGRAPH" },
            47: { n: "CALCCOUNT" },
            48: { n: "UNFORMATTED" },
            49: { n: "CURSORW12" },
            50: { n: "WINDOW" },
            51: { n: "STRING", f: l },
            55: { n: "PASSWORD" },
            56: { n: "LOCKED" },
            60: { n: "QUERY" },
            61: { n: "QUERYNAME" },
            62: { n: "PRINT" },
            63: { n: "PRINTNAME" },
            64: { n: "GRAPH2" },
            65: { n: "GRAPHNAME" },
            66: { n: "ZOOM" },
            67: { n: "SYMSPLIT" },
            68: { n: "NSROWS" },
            69: { n: "NSCOLS" },
            70: { n: "RULER" },
            71: { n: "NNAME" },
            72: { n: "ACOMM" },
            73: { n: "AMACRO" },
            74: { n: "PARSE" },
            102: { n: "PRANGES??" },
            103: { n: "RRANGES??" },
            104: { n: "FNAME??" },
            105: { n: "MRANGES??" },
            204: { n: "SHEETNAMECS", f: xe },
            222: {
              n: "SHEETNAMELP",
              f: function ke(y, X) {
                var N = y[y.l++];
                N > X - 1 && (N = X - 1);
                for (var R = ""; R.length < N;)
                  R += String.fromCharCode(y[y.l++]);
                return R;
              },
            },
            65535: { n: "" },
          },
          ne = {
            0: { n: "BOF" },
            1: { n: "EOF" },
            2: { n: "PASSWORD" },
            3: { n: "CALCSET" },
            4: { n: "WINDOWSET" },
            5: { n: "SHEETCELLPTR" },
            6: { n: "SHEETLAYOUT" },
            7: { n: "COLUMNWIDTH" },
            8: { n: "HIDDENCOLUMN" },
            9: { n: "USERRANGE" },
            10: { n: "SYSTEMRANGE" },
            11: { n: "ZEROFORCE" },
            12: { n: "SORTKEYDIR" },
            13: { n: "FILESEAL" },
            14: { n: "DATAFILLNUMS" },
            15: { n: "PRINTMAIN" },
            16: { n: "PRINTSTRING" },
            17: { n: "GRAPHMAIN" },
            18: { n: "GRAPHSTRING" },
            19: { n: "??" },
            20: { n: "ERRCELL" },
            21: { n: "NACELL" },
            22: {
              n: "LABEL16",
              f: function Y(y, X) {
                var N = D(y);
                return (
                  (N[1].t = "s"),
                  (N[1].v = y.read_shift(X - 4, "cstr")),
                  N
                );
              },
            },
            23: { n: "NUMBER17", f: I },
            24: {
              n: "NUMBER18",
              f: function P(y, X) {
                var N = D(y);
                N[1].v = y.read_shift(2);
                var R = N[1].v >> 1;
                if (1 & N[1].v)
                  switch (7 & R) {
                    case 0:
                      R = 5e3 * (R >> 3);
                      break;
                    case 1:
                      R = 500 * (R >> 3);
                      break;
                    case 2:
                      R = (R >> 3) / 20;
                      break;
                    case 3:
                      R = (R >> 3) / 200;
                      break;
                    case 4:
                      R = (R >> 3) / 2e3;
                      break;
                    case 5:
                      R = (R >> 3) / 2e4;
                      break;
                    case 6:
                      R = (R >> 3) / 16;
                      break;
                    case 7:
                      R = (R >> 3) / 64;
                  }
                return ((N[1].v = R), N);
              },
            },
            25: {
              n: "FORMULA19",
              f: function Z(y, X) {
                var N = I(y);
                return ((y.l += X - 14), N);
              },
            },
            26: { n: "FORMULA1A" },
            27: {
              n: "XFORMAT",
              f: function De(y, X) {
                for (var N = {}, R = y.l + X; y.l < R;) {
                  var ee = y.read_shift(2);
                  if (14e3 == ee) {
                    for (N[ee] = [0, ""], N[ee][0] = y.read_shift(2); y[y.l];)
                      ((N[ee][1] += String.fromCharCode(y[y.l])), y.l++);
                    y.l++;
                  }
                }
                return N;
              },
            },
            28: { n: "DTLABELMISC" },
            29: { n: "DTLABELCELL" },
            30: { n: "GRAPHWINDOW" },
            31: { n: "CPA" },
            32: { n: "LPLAUTO" },
            33: { n: "QUERY" },
            34: { n: "HIDDENSHEET" },
            35: { n: "??" },
            37: {
              n: "NUMBER25",
              f: function b(y, X) {
                var N = D(y),
                  R = y.read_shift(4);
                return ((N[1].v = R >> 6), N);
              },
            },
            38: { n: "??" },
            39: { n: "NUMBER27", f: ue },
            40: {
              n: "FORMULA28",
              f: function ge(y, X) {
                var N = ue(y);
                return ((y.l += X - 10), N);
              },
            },
            142: { n: "??" },
            147: { n: "??" },
            150: { n: "??" },
            151: { n: "??" },
            152: { n: "??" },
            153: { n: "??" },
            154: { n: "??" },
            155: { n: "??" },
            156: { n: "??" },
            163: { n: "??" },
            174: { n: "??" },
            175: { n: "??" },
            176: { n: "??" },
            177: { n: "??" },
            184: { n: "??" },
            185: { n: "??" },
            186: { n: "??" },
            187: { n: "??" },
            188: { n: "??" },
            195: { n: "??" },
            201: { n: "??" },
            204: { n: "SHEETNAMECS", f: xe },
            205: { n: "??" },
            206: { n: "??" },
            207: { n: "??" },
            208: { n: "??" },
            256: { n: "??" },
            259: { n: "??" },
            260: { n: "??" },
            261: { n: "??" },
            262: { n: "??" },
            263: { n: "??" },
            265: { n: "??" },
            266: { n: "??" },
            267: { n: "??" },
            268: { n: "??" },
            270: { n: "??" },
            271: { n: "??" },
            384: { n: "??" },
            389: { n: "??" },
            390: { n: "??" },
            393: { n: "??" },
            396: { n: "??" },
            512: { n: "??" },
            514: { n: "??" },
            513: { n: "??" },
            516: { n: "??" },
            517: { n: "??" },
            640: { n: "??" },
            641: { n: "??" },
            642: { n: "??" },
            643: { n: "??" },
            644: { n: "??" },
            645: { n: "??" },
            646: { n: "??" },
            647: { n: "??" },
            648: { n: "??" },
            658: { n: "??" },
            659: { n: "??" },
            660: { n: "??" },
            661: { n: "??" },
            662: { n: "??" },
            665: { n: "??" },
            666: { n: "??" },
            768: { n: "??" },
            772: { n: "??" },
            1537: {
              n: "SHEETINFOQP",
              f: function Ae(y, X, N) {
                if (N.qpro && !(X < 21)) {
                  var R = y.read_shift(1);
                  return (
                    (y.l += 17),
                    (y.l += 1),
                    (y.l += 2),
                    [R, y.read_shift(X - 21, "cstr")]
                  );
                }
              },
            },
            1600: { n: "??" },
            1602: { n: "??" },
            1793: { n: "??" },
            1794: { n: "??" },
            1795: { n: "??" },
            1796: { n: "??" },
            1920: { n: "??" },
            2048: { n: "??" },
            2049: { n: "??" },
            2052: { n: "??" },
            2688: { n: "??" },
            10998: { n: "??" },
            12849: { n: "??" },
            28233: { n: "??" },
            28484: { n: "??" },
            65535: { n: "" },
          };
        return {
          sheet_to_wk1: function a(y, X) {
            var N = X || {};
            if ((+N.codepage >= 0 && rt(+N.codepage), "string" == N.type))
              throw new Error("Cannot write WK1 to JS string");
            var R = Ur(),
              ee = Ge(y["!ref"]),
              _e = Array.isArray(y),
              oe = [];
            (le(
              R,
              0,
              (function i(y) {
                var X = j(2);
                return (X.write_shift(2, y), X);
              })(1030),
            ),
              le(
                R,
                6,
                (function o(y) {
                  var X = j(8);
                  return (
                    X.write_shift(2, y.s.c),
                    X.write_shift(2, y.s.r),
                    X.write_shift(2, y.e.c),
                    X.write_shift(2, y.e.r),
                    X
                  );
                })(ee),
              ));
            for (var fe = Math.min(ee.e.r, 8191), te = ee.s.r; te <= fe; ++te)
              for (var Le = fr(te), C = ee.s.c; C <= ee.e.c; ++C) {
                te === ee.s.r && (oe[C] = er(C));
                var Me = _e ? (y[te] || [])[C] : y[oe[C] + Le];
                Me &&
                  "z" != Me.t &&
                  ("n" == Me.t
                    ? (0 | Me.v) == Me.v && Me.v >= -32768 && Me.v <= 32767
                      ? le(R, 13, x(te, C, Me.v))
                      : le(R, 14, u(te, C, Me.v))
                    : le(R, 15, h(te, C, Et(Me).slice(0, 239))));
              }
            return (le(R, 1), R.end());
          },
          book_to_wk3: function n(y, X) {
            var N = X || {};
            if ((+N.codepage >= 0 && rt(+N.codepage), "string" == N.type))
              throw new Error("Cannot write WK3 to JS string");
            var R = Ur();
            le(
              R,
              0,
              (function s(y) {
                var X = j(26);
                (X.write_shift(2, 4096),
                  X.write_shift(2, 4),
                  X.write_shift(4, 0));
                for (
                  var N = 0, R = 0, ee = 0, _e = 0;
                  _e < y.SheetNames.length;
                  ++_e
                ) {
                  var fe = y.Sheets[y.SheetNames[_e]];
                  if (fe && fe["!ref"]) {
                    ++ee;
                    var te = Gr(fe["!ref"]);
                    (N < te.e.r && (N = te.e.r), R < te.e.c && (R = te.e.c));
                  }
                }
                return (
                  N > 8191 && (N = 8191),
                  X.write_shift(2, N),
                  X.write_shift(1, ee),
                  X.write_shift(1, R),
                  X.write_shift(2, 0),
                  X.write_shift(2, 0),
                  X.write_shift(1, 1),
                  X.write_shift(1, 2),
                  X.write_shift(4, 0),
                  X.write_shift(4, 0),
                  X
                );
              })(y),
            );
            for (var ee = 0, _e = 0; ee < y.SheetNames.length; ++ee)
              (y.Sheets[y.SheetNames[ee]] || {})["!ref"] &&
                le(R, 27, ve(y.SheetNames[ee], _e++));
            var oe = 0;
            for (ee = 0; ee < y.SheetNames.length; ++ee) {
              var fe = y.Sheets[y.SheetNames[ee]];
              if (fe && fe["!ref"]) {
                for (
                  var te = Ge(fe["!ref"]),
                    Le = Array.isArray(fe),
                    C = [],
                    Ze = Math.min(te.e.r, 8191),
                    Me = te.s.r;
                  Me <= Ze;
                  ++Me
                )
                  for (var $e = fr(Me), Be = te.s.c; Be <= te.e.c; ++Be) {
                    Me === te.s.r && (C[Be] = er(Be));
                    var dr = Le ? (fe[Me] || [])[Be] : fe[C[Be] + $e];
                    dr &&
                      "z" != dr.t &&
                      ("n" == dr.t
                        ? le(R, 23, z(Me, Be, oe, dr.v))
                        : le(R, 22, F(Me, Be, oe, Et(dr).slice(0, 239))));
                  }
                ++oe;
              }
            }
            return (le(R, 1), R.end());
          },
          to_workbook: function r(y, X) {
            switch (X.type) {
              case "base64":
                return t(Jr(zr(y)), X);
              case "binary":
                return t(Jr(y), X);
              case "buffer":
              case "array":
                return t(y, X);
            }
            throw "Unsupported type " + X.type;
          },
        };
      })(),
      O1 = /^\s|\s$|[\t\n\r]/;
    function xo(e, r) {
      if (!r.bookSST) return "";
      var t = [or];
      t[t.length] = ce("sst", null, {
        xmlns: zt[0],
        count: e.Count,
        uniqueCount: e.Unique,
      });
      for (var a = 0; a != e.length; ++a)
        if (null != e[a]) {
          var n = e[a],
            i = "<si>";
          (n.r
            ? (i += n.r)
            : ((i += "<t"),
              n.t || (n.t = ""),
              n.t.match(O1) && (i += ' xml:space="preserve"'),
              (i += ">" + Je(n.t) + "</t>")),
            (t[t.length] = i += "</si>"));
        }
      return (
        t.length > 2 &&
          ((t[t.length] = "</sst>"), (t[1] = t[1].replace("/>", ">"))),
        t.join("")
      );
    }
    var P1 = function Ku(e, r) {
      var t = !1;
      return (
        null == r && ((t = !0), (r = j(15 + 4 * e.t.length))),
        r.write_shift(1, 0),
        wr(e.t, r),
        t ? r.slice(0, r.l) : r
      );
    };
    function D1(e) {
      var r = Ur();
      re(
        r,
        159,
        (function b1(e, r) {
          return (
            r || (r = j(8)),
            r.write_shift(4, e.Count),
            r.write_shift(4, e.Unique),
            r
          );
        })(e),
      );
      for (var t = 0; t < e.length; ++t) re(r, 19, P1(e[t]));
      return (re(r, 160), r.end());
    }
    function ps(e) {
      var t,
        i,
        r = 0,
        a = (function mo(e) {
          if (typeof We < "u") return We.utils.encode(oa, e);
          for (var r = [], t = e.split(""), a = 0; a < t.length; ++a)
            r[a] = t[a].charCodeAt(0);
          return r;
        })(e),
        n = a.length + 1;
      for ((t = Ht(n))[0] = a.length, i = 1; i != n; ++i) t[i] = a[i - 1];
      for (i = n - 1; i >= 0; --i)
        r = ((16384 & r ? 1 : 0) | ((r << 1) & 32767)) ^ t[i];
      return 52811 ^ r;
    }
    var go = (function () {
      function e(n, i) {
        switch (i.type) {
          case "base64":
            return r(zr(n), i);
          case "binary":
            return r(n, i);
          case "buffer":
            return r(
              be && Buffer.isBuffer(n) ? n.toString("binary") : Vt(n),
              i,
            );
          case "array":
            return r(la(n), i);
        }
        throw new Error("Unrecognized type " + i.type);
      }
      function r(n, i) {
        var c = (i || {}).dense ? [] : {},
          o = n.match(/\\trowd.*?\\row\b/g);
        if (!o.length) throw new Error("RTF missing table");
        var f = { s: { c: 0, r: 0 }, e: { c: 0, r: o.length - 1 } };
        return (
          o.forEach(function (l, h) {
            Array.isArray(c) && (c[h] = []);
            for (var m, d = /\\\w+\b/g, x = 0, u = -1; (m = d.exec(l));) {
              if ("\\cell" === m[0]) {
                var _ = l.slice(x, d.lastIndex - m[0].length);
                if ((" " == _[0] && (_ = _.slice(1)), ++u, _.length)) {
                  var A = { v: _, t: "s" };
                  Array.isArray(c)
                    ? (c[h][u] = A)
                    : (c[Ce({ r: h, c: u })] = A);
                }
              }
              x = d.lastIndex;
            }
            u > f.e.c && (f.e.c = u);
          }),
          (c["!ref"] = Ne(f)),
          c
        );
      }
      return {
        to_workbook: function t(n, i) {
          return Jt(e(n, i), i);
        },
        to_sheet: e,
        from_sheet: function a(n) {
          for (
            var c,
              i = ["{\\rtf1\\ansi"],
              s = Ge(n["!ref"]),
              o = Array.isArray(n),
              f = s.s.r;
            f <= s.e.r;
            ++f
          ) {
            i.push("\\trowd\\trautofit1");
            for (var l = s.s.c; l <= s.e.c; ++l) i.push("\\cellx" + (l + 1));
            for (i.push("\\pard\\intbl"), l = s.s.c; l <= s.e.c; ++l) {
              var h = Ce({ r: f, c: l });
              (c = o ? (n[f] || [])[l] : n[h]) &&
                (null != c.v || (c.f && !c.F)) &&
                (i.push(" " + (c.w || (Et(c), c.w))), i.push("\\cell"));
            }
            i.push("\\pard\\intbl\\row");
          }
          return i.join("") + "}";
        },
      };
    })();
    function _n(e) {
      for (var r = 0, t = 1; 3 != r; ++r)
        t = 256 * t + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
      return t.toString(16).toUpperCase().slice(1);
    }
    var Pr = 6;
    function pn(e) {
      return Math.floor((e + Math.round(128 / Pr) / 256) * Pr);
    }
    function vn(e) {
      return Math.floor(((e - 5) / Pr) * 100 + 0.5) / 100;
    }
    function oi(e) {
      return Math.round(((e * Pr + 5) / Pr) * 256) / 256;
    }
    function $t(e) {
      (e.width
        ? ((e.wpx = pn(e.width)), (e.wch = vn(e.wpx)), (e.MDW = Pr))
        : e.wpx
          ? ((e.wch = vn(e.wpx)), (e.width = oi(e.wch)), (e.MDW = Pr))
          : "number" == typeof e.wch &&
            ((e.width = oi(e.wch)), (e.wpx = pn(e.width)), (e.MDW = Pr)),
        e.customWidth && delete e.customWidth);
    }
    var To = 96;
    function gn(e) {
      return (96 * e) / To;
    }
    function fi(e) {
      return (e * To) / 96;
    }
    function Ao(e, r) {
      var a,
        t = [or, ce("styleSheet", null, { xmlns: zt[0], "xmlns:vt": _r.vt })];
      return (
        e.SSF &&
          null !=
            (a = (function cx(e) {
              var r = ["<numFmts>"];
              return (
                [
                  [5, 8],
                  [23, 26],
                  [41, 44],
                  [50, 392],
                ].forEach(function (t) {
                  for (var a = t[0]; a <= t[1]; ++a)
                    null != e[a] &&
                      (r[r.length] = ce("numFmt", null, {
                        numFmtId: a,
                        formatCode: Je(e[a]),
                      }));
                }),
                1 === r.length
                  ? ""
                  : ((r[r.length] = "</numFmts>"),
                    (r[0] = ce("numFmts", null, {
                      count: r.length - 2,
                    }).replace("/>", ">")),
                    r.join(""))
              );
            })(e.SSF)) &&
          (t[t.length] = a),
        (t[t.length] =
          '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
        (t[t.length] =
          '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
        (t[t.length] =
          '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
        (t[t.length] =
          '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
        (a = (function ox(e) {
          var r = [];
          return (
            (r[r.length] = ce("cellXfs", null)),
            e.forEach(function (t) {
              r[r.length] = ce("xf", null, t);
            }),
            (r[r.length] = "</cellXfs>"),
            2 === r.length
              ? ""
              : ((r[0] = ce("cellXfs", null, { count: r.length - 2 }).replace(
                  "/>",
                  ">",
                )),
                r.join(""))
          );
        })(r.cellXfs)) && (t[t.length] = a),
        (t[t.length] =
          '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>'),
        (t[t.length] = '<dxfs count="0"/>'),
        (t[t.length] =
          '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>'),
        t.length > 2 &&
          ((t[t.length] = "</styleSheet>"), (t[1] = t[1].replace("/>", ">"))),
        t.join("")
      );
    }
    function ux(e, r, t) {
      (t || (t = j(6 + 4 * r.length)), t.write_shift(2, e), wr(r, t));
      var a = t.length > t.l ? t.slice(0, t.l) : t;
      return (null == t.l && (t.l = t.length), a);
    }
    var Es,
      xx = [
        "none",
        "solid",
        "mediumGray",
        "darkGray",
        "lightGray",
        "darkHorizontal",
        "darkVertical",
        "darkDown",
        "darkUp",
        "darkGrid",
        "darkTrellis",
        "lightHorizontal",
        "lightVertical",
        "lightDown",
        "lightUp",
        "lightGrid",
        "lightTrellis",
        "gray125",
        "gray0625",
      ],
      mx = Or;
    function So(e, r) {
      (r || (r = j(84)), Es || (Es = Kn(xx)));
      var t = Es[e.patternType];
      (null == t && (t = 40), r.write_shift(4, t));
      var a = 0;
      if (40 != t)
        for (Qn({ auto: 1 }, r), Qn({ auto: 1 }, r); a < 12; ++a)
          r.write_shift(4, 0);
      else {
        for (; a < 4; ++a) r.write_shift(4, 0);
        for (; a < 12; ++a) r.write_shift(4, 0);
      }
      return r.length > r.l ? r.slice(0, r.l) : r;
    }
    function wo(e, r, t) {
      return (
        t || (t = j(16)),
        t.write_shift(2, r || 0),
        t.write_shift(2, e.numFmtId || 0),
        t.write_shift(2, 0),
        t.write_shift(2, 0),
        t.write_shift(2, 0),
        t.write_shift(1, 0),
        t.write_shift(1, 0),
        t.write_shift(1, 0),
        t.write_shift(1, 0),
        t.write_shift(1, 0),
        t.write_shift(1, 0),
        t
      );
    }
    function En(e, r) {
      return (
        r || (r = j(10)),
        r.write_shift(1, 0),
        r.write_shift(1, 0),
        r.write_shift(4, 0),
        r.write_shift(4, 0),
        r
      );
    }
    var px = Or;
    function Ox(e, r) {
      var t = Ur();
      return (
        re(t, 278),
        (function Ax(e, r) {
          if (r) {
            var t = 0;
            ([
              [5, 8],
              [23, 26],
              [41, 44],
              [50, 392],
            ].forEach(function (a) {
              for (var n = a[0]; n <= a[1]; ++n) null != r[n] && ++t;
            }),
              0 != t &&
                (re(e, 615, xt(t)),
                [
                  [5, 8],
                  [23, 26],
                  [41, 44],
                  [50, 392],
                ].forEach(function (a) {
                  for (var n = a[0]; n <= a[1]; ++n)
                    null != r[n] && re(e, 44, ux(n, r[n]));
                }),
                re(e, 616)));
          }
        })(t, e.SSF),
        (function Sx(e) {
          (re(e, 611, xt(1)),
            re(
              e,
              43,
              (function dx(e, r) {
                (r || (r = j(153)),
                  r.write_shift(2, 20 * e.sz),
                  (function qu(e, r) {
                    (r || (r = j(2)),
                      r.write_shift(
                        1,
                        (e.italic ? 2 : 0) |
                          (e.strike ? 8 : 0) |
                          (e.outline ? 16 : 0) |
                          (e.shadow ? 32 : 0) |
                          (e.condense ? 64 : 0) |
                          (e.extend ? 128 : 0),
                      ),
                      r.write_shift(1, 0));
                  })(e, r),
                  r.write_shift(2, e.bold ? 700 : 400));
                var t = 0;
                ("superscript" == e.vertAlign
                  ? (t = 1)
                  : "subscript" == e.vertAlign && (t = 2),
                  r.write_shift(2, t),
                  r.write_shift(1, e.underline || 0),
                  r.write_shift(1, e.family || 0),
                  r.write_shift(1, e.charset || 0),
                  r.write_shift(1, 0),
                  Qn(e.color, r));
                var a = 0;
                return (
                  "major" == e.scheme && (a = 1),
                  "minor" == e.scheme && (a = 2),
                  r.write_shift(1, a),
                  wr(e.name, r),
                  r.length > r.l ? r.slice(0, r.l) : r
                );
              })({
                sz: 12,
                color: { theme: 1 },
                name: "Calibri",
                family: 2,
                scheme: "minor",
              }),
            ),
            re(e, 612));
        })(t),
        (function wx(e) {
          (re(e, 603, xt(2)),
            re(e, 45, So({ patternType: "none" })),
            re(e, 45, So({ patternType: "gray125" })),
            re(e, 604));
        })(t),
        (function kx(e) {
          (re(e, 613, xt(1)),
            re(
              e,
              46,
              (function vx(e, r) {
                return (
                  r || (r = j(51)),
                  r.write_shift(1, 0),
                  En(0, r),
                  En(0, r),
                  En(0, r),
                  En(0, r),
                  En(0, r),
                  r.length > r.l ? r.slice(0, r.l) : r
                );
              })(),
            ),
            re(e, 614));
        })(t),
        (function Cx(e) {
          (re(e, 626, xt(1)),
            re(
              e,
              47,
              wo({ numFmtId: 0, fontId: 0, fillId: 0, borderId: 0 }, 65535),
            ),
            re(e, 627));
        })(t),
        (function yx(e, r) {
          (re(e, 617, xt(r.length)),
            r.forEach(function (t) {
              re(e, 47, wo(t, 0));
            }),
            re(e, 618));
        })(t, r.cellXfs),
        (function Fx(e) {
          (re(e, 619, xt(1)),
            re(
              e,
              48,
              (function gx(e, r) {
                return (
                  r || (r = j(52)),
                  r.write_shift(4, e.xfId),
                  r.write_shift(2, 1),
                  r.write_shift(1, +e.builtinId),
                  r.write_shift(1, 0),
                  jn(e.name || "", r),
                  r.length > r.l ? r.slice(0, r.l) : r
                );
              })({ xfId: 0, builtinId: 0, name: "Normal" }),
            ),
            re(e, 620));
        })(t),
        (function Rx(e) {
          (re(e, 505, xt(0)), re(e, 506));
        })(t),
        (function Nx(e) {
          (re(
            e,
            508,
            (function Ex(e, r, t) {
              var a = j(2052);
              return (
                a.write_shift(4, e),
                jn(r, a),
                jn(t, a),
                a.length > a.l ? a.slice(0, a.l) : a
              );
            })(0, "TableStyleMedium9", "PivotStyleMedium4"),
          ),
            re(e, 509));
        })(t),
        re(t, 279),
        t.end()
      );
    }
    function Ts(e, r) {
      if (r && r.themeXLSX) return r.themeXLSX;
      if (e && "string" == typeof e.raw) return e.raw;
      var t = [or];
      return (
        (t[t.length] =
          '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">'),
        (t[t.length] = "<a:themeElements>"),
        (t[t.length] = '<a:clrScheme name="Office">'),
        (t[t.length] =
          '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>'),
        (t[t.length] =
          '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>'),
        (t[t.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>'),
        (t[t.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>'),
        (t[t.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>'),
        (t[t.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>'),
        (t[t.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>'),
        (t[t.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>'),
        (t[t.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>'),
        (t[t.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>'),
        (t[t.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>'),
        (t[t.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>'),
        (t[t.length] = "</a:clrScheme>"),
        (t[t.length] = '<a:fontScheme name="Office">'),
        (t[t.length] = "<a:majorFont>"),
        (t[t.length] = '<a:latin typeface="Cambria"/>'),
        (t[t.length] = '<a:ea typeface=""/>'),
        (t[t.length] = '<a:cs typeface=""/>'),
        (t[t.length] =
          '<a:font script="Jpan" typeface="\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af"/>'),
        (t[t.length] =
          '<a:font script="Hang" typeface="\ub9d1\uc740 \uace0\ub515"/>'),
        (t[t.length] = '<a:font script="Hans" typeface="\u5b8b\u4f53"/>'),
        (t[t.length] =
          '<a:font script="Hant" typeface="\u65b0\u7d30\u660e\u9ad4"/>'),
        (t[t.length] = '<a:font script="Arab" typeface="Times New Roman"/>'),
        (t[t.length] = '<a:font script="Hebr" typeface="Times New Roman"/>'),
        (t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
        (t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
        (t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
        (t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
        (t[t.length] = '<a:font script="Khmr" typeface="MoolBoran"/>'),
        (t[t.length] = '<a:font script="Knda" typeface="Tunga"/>'),
        (t[t.length] = '<a:font script="Guru" typeface="Raavi"/>'),
        (t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
        (t[t.length] =
          '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
        (t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
        (t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
        (t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
        (t[t.length] = '<a:font script="Deva" typeface="Mangal"/>'),
        (t[t.length] = '<a:font script="Telu" typeface="Gautami"/>'),
        (t[t.length] = '<a:font script="Taml" typeface="Latha"/>'),
        (t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
        (t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
        (t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
        (t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
        (t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
        (t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
        (t[t.length] = '<a:font script="Viet" typeface="Times New Roman"/>'),
        (t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
        (t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
        (t[t.length] = "</a:majorFont>"),
        (t[t.length] = "<a:minorFont>"),
        (t[t.length] = '<a:latin typeface="Calibri"/>'),
        (t[t.length] = '<a:ea typeface=""/>'),
        (t[t.length] = '<a:cs typeface=""/>'),
        (t[t.length] =
          '<a:font script="Jpan" typeface="\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af"/>'),
        (t[t.length] =
          '<a:font script="Hang" typeface="\ub9d1\uc740 \uace0\ub515"/>'),
        (t[t.length] = '<a:font script="Hans" typeface="\u5b8b\u4f53"/>'),
        (t[t.length] =
          '<a:font script="Hant" typeface="\u65b0\u7d30\u660e\u9ad4"/>'),
        (t[t.length] = '<a:font script="Arab" typeface="Arial"/>'),
        (t[t.length] = '<a:font script="Hebr" typeface="Arial"/>'),
        (t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
        (t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
        (t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
        (t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
        (t[t.length] = '<a:font script="Khmr" typeface="DaunPenh"/>'),
        (t[t.length] = '<a:font script="Knda" typeface="Tunga"/>'),
        (t[t.length] = '<a:font script="Guru" typeface="Raavi"/>'),
        (t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
        (t[t.length] =
          '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
        (t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
        (t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
        (t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
        (t[t.length] = '<a:font script="Deva" typeface="Mangal"/>'),
        (t[t.length] = '<a:font script="Telu" typeface="Gautami"/>'),
        (t[t.length] = '<a:font script="Taml" typeface="Latha"/>'),
        (t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
        (t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
        (t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
        (t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
        (t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
        (t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
        (t[t.length] = '<a:font script="Viet" typeface="Arial"/>'),
        (t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
        (t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
        (t[t.length] = "</a:minorFont>"),
        (t[t.length] = "</a:fontScheme>"),
        (t[t.length] = '<a:fmtScheme name="Office">'),
        (t[t.length] = "<a:fillStyleLst>"),
        (t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
        (t[t.length] = '<a:gradFill rotWithShape="1">'),
        (t[t.length] = "<a:gsLst>"),
        (t[t.length] =
          '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
        (t[t.length] =
          '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
        (t[t.length] =
          '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
        (t[t.length] = "</a:gsLst>"),
        (t[t.length] = '<a:lin ang="16200000" scaled="1"/>'),
        (t[t.length] = "</a:gradFill>"),
        (t[t.length] = '<a:gradFill rotWithShape="1">'),
        (t[t.length] = "<a:gsLst>"),
        (t[t.length] =
          '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>'),
        (t[t.length] =
          '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
        (t[t.length] = "</a:gsLst>"),
        (t[t.length] = '<a:lin ang="16200000" scaled="0"/>'),
        (t[t.length] = "</a:gradFill>"),
        (t[t.length] = "</a:fillStyleLst>"),
        (t[t.length] = "<a:lnStyleLst>"),
        (t[t.length] =
          '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>'),
        (t[t.length] =
          '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
        (t[t.length] =
          '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
        (t[t.length] = "</a:lnStyleLst>"),
        (t[t.length] = "<a:effectStyleLst>"),
        (t[t.length] = "<a:effectStyle>"),
        (t[t.length] = "<a:effectLst>"),
        (t[t.length] =
          '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>'),
        (t[t.length] = "</a:effectLst>"),
        (t[t.length] = "</a:effectStyle>"),
        (t[t.length] = "<a:effectStyle>"),
        (t[t.length] = "<a:effectLst>"),
        (t[t.length] =
          '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
        (t[t.length] = "</a:effectLst>"),
        (t[t.length] = "</a:effectStyle>"),
        (t[t.length] = "<a:effectStyle>"),
        (t[t.length] = "<a:effectLst>"),
        (t[t.length] =
          '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
        (t[t.length] = "</a:effectLst>"),
        (t[t.length] =
          '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>'),
        (t[t.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>'),
        (t[t.length] = "</a:effectStyle>"),
        (t[t.length] = "</a:effectStyleLst>"),
        (t[t.length] = "<a:bgFillStyleLst>"),
        (t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
        (t[t.length] = '<a:gradFill rotWithShape="1">'),
        (t[t.length] = "<a:gsLst>"),
        (t[t.length] =
          '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
        (t[t.length] =
          '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
        (t[t.length] =
          '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>'),
        (t[t.length] = "</a:gsLst>"),
        (t[t.length] =
          '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>'),
        (t[t.length] = "</a:gradFill>"),
        (t[t.length] = '<a:gradFill rotWithShape="1">'),
        (t[t.length] = "<a:gsLst>"),
        (t[t.length] =
          '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
        (t[t.length] =
          '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>'),
        (t[t.length] = "</a:gsLst>"),
        (t[t.length] =
          '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>'),
        (t[t.length] = "</a:gradFill>"),
        (t[t.length] = "</a:bgFillStyleLst>"),
        (t[t.length] = "</a:fmtScheme>"),
        (t[t.length] = "</a:themeElements>"),
        (t[t.length] = "<a:objectDefaults>"),
        (t[t.length] = "<a:spDef>"),
        (t[t.length] =
          '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>'),
        (t[t.length] = "</a:spDef>"),
        (t[t.length] = "<a:lnDef>"),
        (t[t.length] =
          '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>'),
        (t[t.length] = "</a:lnDef>"),
        (t[t.length] = "</a:objectDefaults>"),
        (t[t.length] = "<a:extraClrSchemeLst/>"),
        (t[t.length] = "</a:theme>"),
        t.join("")
      );
    }
    function am() {
      var e = Ur();
      return (
        re(e, 332),
        re(e, 334, xt(1)),
        re(
          e,
          335,
          (function $x(e) {
            var r = j(12 + 2 * e.name.length);
            return (
              r.write_shift(4, e.flags),
              r.write_shift(4, e.version),
              wr(e.name, r),
              r.slice(0, r.l)
            );
          })({ name: "XLDAPR", version: 12e4, flags: 3496657072 }),
        ),
        re(e, 336),
        re(
          e,
          339,
          (function qx(e, r) {
            var t = j(8 + 2 * r.length);
            return (t.write_shift(4, e), wr(r, t), t.slice(0, t.l));
          })(1, "XLDAPR"),
        ),
        re(e, 52),
        re(e, 35, xt(514)),
        re(e, 4096, xt(0)),
        re(e, 4097, it(1)),
        re(e, 36),
        re(e, 53),
        re(e, 340),
        re(
          e,
          337,
          (function rm(e, r) {
            var t = j(8);
            return (t.write_shift(4, e), t.write_shift(4, r ? 1 : 0), t);
          })(1, !0),
        ),
        re(
          e,
          51,
          (function Qx(e) {
            var r = j(4 + 8 * e.length);
            r.write_shift(4, e.length);
            for (var t = 0; t < e.length; ++t)
              (r.write_shift(4, e[t][0]), r.write_shift(4, e[t][1]));
            return r;
          })([[1, 0]]),
        ),
        re(e, 338),
        re(e, 333),
        e.end()
      );
    }
    function Co() {
      var e = [or];
      return (
        e.push(
          '<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">\n  <metadataTypes count="1">\n    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>\n  </metadataTypes>\n  <futureMetadata name="XLDAPR" count="1">\n    <bk>\n      <extLst>\n        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">\n          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>\n        </ext>\n      </extLst>\n    </bk>\n  </futureMetadata>\n  <cellMetadata count="1">\n    <bk>\n      <rc t="1" v="0"/>\n    </bk>\n  </cellMetadata>\n</metadata>',
        ),
        e.join("")
      );
    }
    var Ga = 1024;
    function yo(e, r) {
      for (
        var t = [21600, 21600],
          a = ["m0,0l0", t[1], t[0], t[1], t[0], "0xe"].join(","),
          n = [
            ce("xml", null, {
              "xmlns:v": jr.v,
              "xmlns:o": jr.o,
              "xmlns:x": jr.x,
              "xmlns:mv": jr.mv,
            }).replace(/\/>/, ">"),
            ce(
              "o:shapelayout",
              ce("o:idmap", null, { "v:ext": "edit", data: e }),
              { "v:ext": "edit" },
            ),
            ce(
              "v:shapetype",
              [
                ce("v:stroke", null, { joinstyle: "miter" }),
                ce("v:path", null, {
                  gradientshapeok: "t",
                  "o:connecttype": "rect",
                }),
              ].join(""),
              {
                id: "_x0000_t202",
                "o:spt": 202,
                coordsize: t.join(","),
                path: a,
              },
            ),
          ];
        Ga < 1e3 * e;
      )
        Ga += 1e3;
      return (
        r.forEach(function (i) {
          var s = ur(i[0]),
            c = { color2: "#BEFF82", type: "gradient" };
          "gradient" == c.type && (c.angle = "-180");
          var o =
              "gradient" == c.type
                ? ce("o:fill", null, {
                    type: "gradientUnscaled",
                    "v:ext": "view",
                  })
                : null,
            f = ce("v:fill", o, c);
          (++Ga,
            (n = n.concat([
              "<v:shape" +
                cn({
                  id: "_x0000_s" + Ga,
                  type: "#_x0000_t202",
                  style:
                    "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" +
                    (i[1].hidden ? ";visibility:hidden" : ""),
                  fillcolor: "#ECFAD4",
                  strokecolor: "#edeaa1",
                }) +
                ">",
              f,
              ce("v:shadow", null, { on: "t", obscured: "t" }),
              ce("v:path", null, { "o:connecttype": "none" }),
              '<v:textbox><div style="text-align:left"></div></v:textbox>',
              '<x:ClientData ObjectType="Note">',
              "<x:MoveWithCells/>",
              "<x:SizeWithCells/>",
              yr(
                "x:Anchor",
                [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(","),
              ),
              yr("x:AutoFill", "False"),
              yr("x:Row", String(s.r)),
              yr("x:Column", String(s.c)),
              i[1].hidden ? "" : "<x:Visible/>",
              "</x:ClientData>",
              "</v:shape>",
            ])));
        }),
        n.push("</xml>"),
        n.join("")
      );
    }
    function Ro(e) {
      var r = [or, ce("comments", null, { xmlns: zt[0] })],
        t = [];
      return (
        r.push("<authors>"),
        e.forEach(function (a) {
          a[1].forEach(function (n) {
            var i = Je(n.a);
            (-1 == t.indexOf(i) &&
              (t.push(i), r.push("<author>" + i + "</author>")),
              n.T &&
                n.ID &&
                -1 == t.indexOf("tc=" + n.ID) &&
                (t.push("tc=" + n.ID),
                r.push("<author>tc=" + n.ID + "</author>")));
          });
        }),
        0 == t.length &&
          (t.push("SheetJ5"), r.push("<author>SheetJ5</author>")),
        r.push("</authors>"),
        r.push("<commentList>"),
        e.forEach(function (a) {
          var n = 0,
            i = [];
          if (
            (a[1][0] && a[1][0].T && a[1][0].ID
              ? (n = t.indexOf("tc=" + a[1][0].ID))
              : a[1].forEach(function (o) {
                  (o.a && (n = t.indexOf(Je(o.a))), i.push(o.t || ""));
                }),
            r.push('<comment ref="' + a[0] + '" authorId="' + n + '"><text>'),
            i.length <= 1)
          )
            r.push(yr("t", Je(i[0] || "")));
          else {
            for (
              var s = "Comment:\n    " + i[0] + "\n", c = 1;
              c < i.length;
              ++c
            )
              s += "Reply:\n    " + i[c] + "\n";
            r.push(yr("t", Je(s)));
          }
          r.push("</text></comment>");
        }),
        r.push("</commentList>"),
        r.length > 2 &&
          ((r[r.length] = "</comments>"), (r[1] = r[1].replace("/>", ">"))),
        r.join("")
      );
    }
    function hm(e, r, t) {
      var a = [
        or,
        ce("ThreadedComments", null, { xmlns: _r.TCMNT }).replace(/[\/]>/, ">"),
      ];
      return (
        e.forEach(function (n) {
          var i = "";
          (n[1] || []).forEach(function (s, c) {
            if (s.T) {
              s.a && -1 == r.indexOf(s.a) && r.push(s.a);
              var o = {
                ref: n[0],
                id:
                  "{54EE7951-7262-4200-6969-" +
                  ("000000000000" + t.tcid++).slice(-12) +
                  "}",
              };
              (0 == c ? (i = o.id) : (o.parentId = i),
                (s.ID = o.id),
                s.a &&
                  (o.personId =
                    "{54EE7950-7262-4200-6969-" +
                    ("000000000000" + r.indexOf(s.a)).slice(-12) +
                    "}"),
                a.push(ce("threadedComment", yr("text", s.t || ""), o)));
            } else delete s.ID;
          });
        }),
        a.push("</ThreadedComments>"),
        a.join("")
      );
    }
    var pm = Ir;
    function Em(e) {
      var r = Ur(),
        t = [];
      return (
        re(r, 628),
        re(r, 630),
        e.forEach(function (a) {
          a[1].forEach(function (n) {
            t.indexOf(n.a) > -1 ||
              (t.push(n.a.slice(0, 54)),
              re(
                r,
                632,
                (function vm(e) {
                  return wr(e.slice(0, 54));
                })(n.a),
              ));
          });
        }),
        re(r, 631),
        re(r, 633),
        e.forEach(function (a) {
          a[1].forEach(function (n) {
            n.iauthor = t.indexOf(n.a);
            var i = { s: ur(a[0]), e: ur(a[0]) };
            (re(
              r,
              635,
              (function _m(e, r) {
                return (
                  null == r && (r = j(36)),
                  r.write_shift(4, e[1].iauthor),
                  Ma(e[0], r),
                  r.write_shift(4, 0),
                  r.write_shift(4, 0),
                  r.write_shift(4, 0),
                  r.write_shift(4, 0),
                  r
                );
              })([i, n]),
            ),
              n.t &&
                n.t.length > 0 &&
                re(
                  r,
                  637,
                  (function zu(e, r) {
                    var t = !1;
                    return (
                      null == r && ((t = !0), (r = j(23 + 4 * e.t.length))),
                      r.write_shift(1, 1),
                      wr(e.t, r),
                      r.write_shift(4, 1),
                      (function Xu(e, r) {
                        (r || (r = j(4)),
                          r.write_shift(2, e.ich || 0),
                          r.write_shift(2, e.ifnt || 0));
                      })({ ich: 0, ifnt: 0 }, r),
                      t ? r.slice(0, r.l) : r
                    );
                  })(n),
                ),
              re(r, 636),
              delete n.iauthor);
          });
        }),
        re(r, 634),
        re(r, 629),
        r.end()
      );
    }
    var No = ["xlsb", "xlsm", "xlam", "biff8", "xla"],
      Wa = (function () {
        var e =
            /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
          r = { r: 0, c: 0 };
        function t(a, n, i, s) {
          var c = !1,
            o = !1;
          (0 == i.length
            ? (o = !0)
            : "[" == i.charAt(0) && ((o = !0), (i = i.slice(1, -1))),
            0 == s.length
              ? (c = !0)
              : "[" == s.charAt(0) && ((c = !0), (s = s.slice(1, -1))));
          var f = i.length > 0 ? 0 | parseInt(i, 10) : 0,
            l = s.length > 0 ? 0 | parseInt(s, 10) : 0;
          return (
            c ? (l += r.c) : --l,
            o ? (f += r.r) : --f,
            n + (c ? "" : "$") + er(l) + (o ? "" : "$") + fr(f)
          );
        }
        return function (n, i) {
          return ((r = i), n.replace(e, t));
        };
      })(),
      As =
        /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
      Ss = (function () {
        return function (r, t) {
          return r.replace(As, function (a, n, i, s, c, o) {
            var f = qi(s) - (i ? 0 : t.c),
              l = Qi(o) - (c ? 0 : t.r);
            return (
              n +
              "R" +
              (0 == l ? "" : c ? l + 1 : "[" + l + "]") +
              "C" +
              (0 == f ? "" : i ? f + 1 : "[" + f + "]")
            );
          });
        };
      })();
    function Oo(e, r) {
      return e.replace(As, function (t, a, n, i, s, c) {
        return (
          a +
          ("$" == n ? n + i : er(qi(i) + r.c)) +
          ("$" == s ? s + c : fr(Qi(c) + r.r))
        );
      });
    }
    function vr(e) {
      e.l += 1;
    }
    function jt(e, r) {
      var t = e.read_shift(1 == r ? 1 : 2);
      return [16383 & t, (t >> 14) & 1, (t >> 15) & 1];
    }
    function Io(e, r, t) {
      var a = 2;
      if (t) {
        if (t.biff >= 2 && t.biff <= 5) return Lo(e);
        12 == t.biff && (a = 4);
      }
      var n = e.read_shift(a),
        i = e.read_shift(a),
        s = jt(e, 2),
        c = jt(e, 2);
      return {
        s: { r: n, c: s[0], cRel: s[1], rRel: s[2] },
        e: { r: i, c: c[0], cRel: c[1], rRel: c[2] },
      };
    }
    function Lo(e) {
      var r = jt(e, 2),
        t = jt(e, 2),
        a = e.read_shift(1),
        n = e.read_shift(1);
      return {
        s: { r: r[0], c: a, cRel: r[1], rRel: r[2] },
        e: { r: t[0], c: n, cRel: t[1], rRel: t[2] },
      };
    }
    function bo(e, r, t) {
      if (t && t.biff >= 2 && t.biff <= 5)
        return (function Nm(e) {
          var r = jt(e, 2),
            t = e.read_shift(1);
          return { r: r[0], c: t, cRel: r[1], rRel: r[2] };
        })(e);
      var a = e.read_shift(t && 12 == t.biff ? 4 : 2),
        n = jt(e, 2);
      return { r: a, c: n[0], cRel: n[1], rRel: n[2] };
    }
    function Om(e) {
      var r = e.read_shift(2),
        t = e.read_shift(2);
      return {
        r,
        c: 255 & t,
        fQuoted: !!(16384 & t),
        cRel: t >> 15,
        rRel: t >> 15,
      };
    }
    function Po(e) {
      var r = 1 & e[e.l + 1];
      return ((e.l += 4), [r, 1]);
    }
    function Do(e) {
      return [e.read_shift(1), e.read_shift(1)];
    }
    function s_(e, r) {
      var t = [e.read_shift(1)];
      if (12 == r)
        switch (t[0]) {
          case 2:
            t[0] = 4;
            break;
          case 4:
            t[0] = 16;
            break;
          case 0:
            t[0] = 1;
            break;
          case 1:
            t[0] = 2;
        }
      switch (t[0]) {
        case 4:
          ((t[1] = (function hr(e, r) {
            return 1 === e.read_shift(r);
          })(e, 1)
            ? "TRUE"
            : "FALSE"),
            12 != r && (e.l += 7));
          break;
        case 37:
        case 16:
          ((t[1] = It[e[e.l]]), (e.l += 12 == r ? 4 : 8));
          break;
        case 0:
          e.l += 8;
          break;
        case 1:
          t[1] = Lr(e);
          break;
        case 2:
          t[1] = (function Ea(e, r, t) {
            if (t.biff > 5)
              return (function mn(e, r, t) {
                var a = e.read_shift(t && 2 == t.biff ? 1 : 2);
                return 0 === a
                  ? (e.l++, "")
                  : (function ga(e, r, t) {
                      if (t) {
                        if (t.biff >= 2 && t.biff <= 5)
                          return e.read_shift(r, "cpstr");
                        if (t.biff >= 12) return e.read_shift(r, "dbcs-cont");
                      }
                      var n = e.read_shift(1);
                      return e.read_shift(
                        r,
                        0 === n ? "sbcs-cont" : "dbcs-cont",
                      );
                    })(e, a, t);
              })(e, 0, t);
            var a = e.read_shift(1);
            return 0 === a
              ? (e.l++, "")
              : e.read_shift(a, t.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
          })(e, 0, { biff: r > 0 && r < 8 ? 2 : r });
          break;
        default:
          throw new Error("Bad SerAr: " + t[0]);
      }
      return t;
    }
    function c_(e, r, t) {
      for (
        var a = e.read_shift(12 == t.biff ? 4 : 2), n = [], i = 0;
        i != a;
        ++i
      )
        n.push((12 == t.biff ? ma : ii)(e, 8));
      return n;
    }
    function o_(e, r, t) {
      var a = 0,
        n = 0;
      (12 == t.biff
        ? ((a = e.read_shift(4)), (n = e.read_shift(4)))
        : ((n = 1 + e.read_shift(1)), (a = 1 + e.read_shift(2))),
        t.biff >= 2 && t.biff < 8 && (--a, 0 == --n && (n = 256)));
      for (var i = 0, s = []; i != a && (s[i] = []); ++i)
        for (var c = 0; c != n; ++c) s[i][c] = s_(e, t.biff);
      return s;
    }
    function Tn(e, r, t) {
      return ((e.l += 2), [Om(e)]);
    }
    function ws(e) {
      return ((e.l += 6), []);
    }
    function Mo(e) {
      return ((e.l += 2), [pr(e), 1 & e.read_shift(2)]);
    }
    var F_ = [
        "Data",
        "All",
        "Headers",
        "??",
        "?Data2",
        "??",
        "?DataHeaders",
        "??",
        "Totals",
        "??",
        "??",
        "??",
        "?DataTotals",
        "??",
        "??",
        "??",
        "?Current",
      ],
      Bo = {
        1: {
          n: "PtgExp",
          f: function e_(e, r, t) {
            return (
              e.l++,
              t && 12 == t.biff
                ? [e.read_shift(4, "i"), 0]
                : [e.read_shift(2), e.read_shift(t && 2 == t.biff ? 1 : 2)]
            );
          },
        },
        2: { n: "PtgTbl", f: Or },
        3: { n: "PtgAdd", f: vr },
        4: { n: "PtgSub", f: vr },
        5: { n: "PtgMul", f: vr },
        6: { n: "PtgDiv", f: vr },
        7: { n: "PtgPower", f: vr },
        8: { n: "PtgConcat", f: vr },
        9: { n: "PtgLt", f: vr },
        10: { n: "PtgLe", f: vr },
        11: { n: "PtgEq", f: vr },
        12: { n: "PtgGe", f: vr },
        13: { n: "PtgGt", f: vr },
        14: { n: "PtgNe", f: vr },
        15: { n: "PtgIsect", f: vr },
        16: { n: "PtgUnion", f: vr },
        17: { n: "PtgRange", f: vr },
        18: { n: "PtgUplus", f: vr },
        19: { n: "PtgUminus", f: vr },
        20: { n: "PtgPercent", f: vr },
        21: { n: "PtgParen", f: vr },
        22: { n: "PtgMissArg", f: vr },
        23: {
          n: "PtgStr",
          f: function i_(e, r, t) {
            return (e.l++, xn(e, 0, t));
          },
        },
        26: {
          n: "PtgSheet",
          f: function O_(e, r, t) {
            return (
              (e.l += 5),
              (e.l += 2),
              (e.l += 2 == t.biff ? 1 : 4),
              ["PTGSHEET"]
            );
          },
        },
        27: {
          n: "PtgEndSheet",
          f: function I_(e, r, t) {
            return ((e.l += 2 == t.biff ? 4 : 5), ["PTGENDSHEET"]);
          },
        },
        28: {
          n: "PtgErr",
          f: function r_(e) {
            return (e.l++, It[e.read_shift(1)]);
          },
        },
        29: {
          n: "PtgBool",
          f: function a_(e) {
            return (e.l++, 0 !== e.read_shift(1));
          },
        },
        30: {
          n: "PtgInt",
          f: function t_(e) {
            return (e.l++, e.read_shift(2));
          },
        },
        31: {
          n: "PtgNum",
          f: function n_(e) {
            return (e.l++, Lr(e));
          },
        },
        32: {
          n: "PtgArray",
          f: function Um(e, r, t) {
            var a = (96 & e[e.l++]) >> 5;
            return ((e.l += 2 == t.biff ? 6 : 12 == t.biff ? 14 : 7), [a]);
          },
        },
        33: {
          n: "PtgFunc",
          f: function $m(e, r, t) {
            var a = (96 & e[e.l]) >> 5;
            e.l += 1;
            var n = e.read_shift(t && t.biff <= 3 ? 1 : 2);
            return [q_[n], Wo[n], a];
          },
        },
        34: {
          n: "PtgFuncVar",
          f: function jm(e, r, t) {
            var a = e[e.l++],
              n = e.read_shift(1),
              i =
                t && t.biff <= 3
                  ? [88 == a ? -1 : 0, e.read_shift(1)]
                  : (function Qm(e) {
                      return [e[e.l + 1] >> 7, 32767 & e.read_shift(2)];
                    })(e);
            return [n, (0 === i[0] ? Wo : Q_)[i[1]]];
          },
        },
        35: {
          n: "PtgName",
          f: function f_(e, r, t) {
            var a = (e.read_shift(1) >>> 5) & 3,
              i = e.read_shift(!t || t.biff >= 8 ? 4 : 2);
            switch (t.biff) {
              case 2:
                e.l += 5;
                break;
              case 3:
              case 4:
                e.l += 8;
                break;
              case 5:
                e.l += 12;
            }
            return [a, 0, i];
          },
        },
        36: {
          n: "PtgRef",
          f: function zm(e, r, t) {
            var a = (96 & e[e.l]) >> 5;
            return ((e.l += 1), [a, bo(e, 0, t)]);
          },
        },
        37: {
          n: "PtgArea",
          f: function bm(e, r, t) {
            return [(96 & e[e.l++]) >> 5, Io(e, 0, t)];
          },
        },
        38: {
          n: "PtgMemArea",
          f: function h_(e, r, t) {
            var a = (e.read_shift(1) >>> 5) & 3;
            return (
              (e.l += t && 2 == t.biff ? 3 : 4),
              [a, e.read_shift(t && 2 == t.biff ? 1 : 2)]
            );
          },
        },
        39: { n: "PtgMemErr", f: Or },
        40: { n: "PtgMemNoMem", f: Or },
        41: {
          n: "PtgMemFunc",
          f: function d_(e, r, t) {
            return [
              (e.read_shift(1) >>> 5) & 3,
              e.read_shift(t && 2 == t.biff ? 1 : 2),
            ];
          },
        },
        42: {
          n: "PtgRefErr",
          f: function x_(e, r, t) {
            var a = (e.read_shift(1) >>> 5) & 3;
            return (
              (e.l += 4),
              t.biff < 8 && e.l--,
              12 == t.biff && (e.l += 2),
              [a]
            );
          },
        },
        43: {
          n: "PtgAreaErr",
          f: function Dm(e, r, t) {
            var a = (96 & e[e.l++]) >> 5;
            return ((e.l += t && t.biff > 8 ? 12 : t.biff < 8 ? 6 : 8), [a]);
          },
        },
        44: {
          n: "PtgRefN",
          f: function Jm(e, r, t) {
            var a = (96 & e[e.l]) >> 5;
            e.l += 1;
            var n = (function Im(e, r, t) {
              var a = t && t.biff ? t.biff : 8;
              if (a >= 2 && a <= 5)
                return (function Lm(e) {
                  var r = e.read_shift(2),
                    t = e.read_shift(1),
                    a = (32768 & r) >> 15,
                    n = (16384 & r) >> 14;
                  return (
                    (r &= 16383),
                    1 == a && r >= 8192 && (r -= 16384),
                    1 == n && t >= 128 && (t -= 256),
                    { r, c: t, cRel: n, rRel: a }
                  );
                })(e);
              var n = e.read_shift(a >= 12 ? 4 : 2),
                i = e.read_shift(2),
                s = (16384 & i) >> 14,
                c = (32768 & i) >> 15;
              if (((i &= 16383), 1 == c)) for (; n > 524287;) n -= 1048576;
              if (1 == s) for (; i > 8191;) i -= 16384;
              return { r: n, c: i, cRel: s, rRel: c };
            })(e, 0, t);
            return [a, n];
          },
        },
        45: {
          n: "PtgAreaN",
          f: function Bm(e, r, t) {
            var a = (96 & e[e.l++]) >> 5,
              n = (function Rm(e, r, t) {
                if (t.biff < 8) return Lo(e);
                var a = e.read_shift(12 == t.biff ? 4 : 2),
                  n = e.read_shift(12 == t.biff ? 4 : 2),
                  i = jt(e, 2),
                  s = jt(e, 2);
                return {
                  s: { r: a, c: i[0], cRel: i[1], rRel: i[2] },
                  e: { r: n, c: s[0], cRel: s[1], rRel: s[2] },
                };
              })(e, 0, t);
            return [a, n];
          },
        },
        46: {
          n: "PtgMemAreaN",
          f: function L_(e) {
            return [(e.read_shift(1) >>> 5) & 3, e.read_shift(2)];
          },
        },
        47: {
          n: "PtgMemNoMemN",
          f: function b_(e) {
            return [(e.read_shift(1) >>> 5) & 3, e.read_shift(2)];
          },
        },
        57: {
          n: "PtgNameX",
          f: function l_(e, r, t) {
            return 5 == t.biff
              ? (function u_(e) {
                  var r = (e.read_shift(1) >>> 5) & 3,
                    t = e.read_shift(2, "i");
                  e.l += 8;
                  var a = e.read_shift(2);
                  return ((e.l += 12), [r, t, a]);
                })(e)
              : [(e.read_shift(1) >>> 5) & 3, e.read_shift(2), e.read_shift(4)];
          },
        },
        58: {
          n: "PtgRef3d",
          f: function Zm(e, r, t) {
            var a = (96 & e[e.l]) >> 5;
            e.l += 1;
            var n = e.read_shift(2);
            return (t && 5 == t.biff && (e.l += 12), [a, n, bo(e, 0, t)]);
          },
        },
        59: {
          n: "PtgArea3d",
          f: function Pm(e, r, t) {
            var a = (96 & e[e.l++]) >> 5,
              n = e.read_shift(2, "i");
            if (t && 5 === t.biff) e.l += 12;
            return [a, n, Io(e, 0, t)];
          },
        },
        60: {
          n: "PtgRefErr3d",
          f: function m_(e, r, t) {
            var a = (96 & e[e.l++]) >> 5,
              n = e.read_shift(2),
              i = 4;
            if (t)
              switch (t.biff) {
                case 5:
                  i = 15;
                  break;
                case 12:
                  i = 6;
              }
            return ((e.l += i), [a, n]);
          },
        },
        61: {
          n: "PtgAreaErr3d",
          f: function Mm(e, r, t) {
            var a = (96 & e[e.l++]) >> 5,
              n = e.read_shift(2),
              i = 8;
            if (t)
              switch (t.biff) {
                case 5:
                  ((e.l += 12), (i = 6));
                  break;
                case 12:
                  i = 12;
              }
            return ((e.l += i), [a, n]);
          },
        },
        255: {},
      },
      D_ = {
        64: 32,
        96: 32,
        65: 33,
        97: 33,
        66: 34,
        98: 34,
        67: 35,
        99: 35,
        68: 36,
        100: 36,
        69: 37,
        101: 37,
        70: 38,
        102: 38,
        71: 39,
        103: 39,
        72: 40,
        104: 40,
        73: 41,
        105: 41,
        74: 42,
        106: 42,
        75: 43,
        107: 43,
        76: 44,
        108: 44,
        77: 45,
        109: 45,
        78: 46,
        110: 46,
        79: 47,
        111: 47,
        88: 34,
        120: 34,
        89: 57,
        121: 57,
        90: 58,
        122: 58,
        91: 59,
        123: 59,
        92: 60,
        124: 60,
        93: 61,
        125: 61,
      },
      M_ = {
        1: { n: "PtgElfLel", f: Mo },
        2: { n: "PtgElfRw", f: Tn },
        3: { n: "PtgElfCol", f: Tn },
        6: { n: "PtgElfRwV", f: Tn },
        7: { n: "PtgElfColV", f: Tn },
        10: { n: "PtgElfRadical", f: Tn },
        11: { n: "PtgElfRadicalS", f: ws },
        13: { n: "PtgElfColS", f: ws },
        15: { n: "PtgElfColSV", f: ws },
        16: { n: "PtgElfRadicalLel", f: Mo },
        25: {
          n: "PtgList",
          f: function R_(e) {
            e.l += 2;
            var r = e.read_shift(2),
              t = e.read_shift(2),
              a = e.read_shift(4),
              n = e.read_shift(2),
              i = e.read_shift(2);
            return {
              ixti: r,
              coltype: 3 & t,
              rt: F_[(t >> 2) & 31],
              idx: a,
              c: n,
              C: i,
            };
          },
        },
        29: {
          n: "PtgSxName",
          f: function N_(e) {
            return ((e.l += 2), [e.read_shift(4)]);
          },
        },
        255: {},
      },
      B_ = {
        0: {
          n: "PtgAttrNoop",
          f: function P_(e) {
            return ((e.l += 4), [0, 0]);
          },
        },
        1: {
          n: "PtgAttrSemi",
          f: function Xm(e, r, t) {
            var a = 255 & e[e.l + 1] ? 1 : 0;
            return ((e.l += t && 2 == t.biff ? 3 : 4), [a]);
          },
        },
        2: {
          n: "PtgAttrIf",
          f: function Hm(e, r, t) {
            var a = 255 & e[e.l + 1] ? 1 : 0;
            return ((e.l += 2), [a, e.read_shift(t && 2 == t.biff ? 1 : 2)]);
          },
        },
        4: {
          n: "PtgAttrChoose",
          f: function Gm(e, r, t) {
            e.l += 2;
            for (
              var a = e.read_shift(t && 2 == t.biff ? 1 : 2), n = [], i = 0;
              i <= a;
              ++i
            )
              n.push(e.read_shift(t && 2 == t.biff ? 1 : 2));
            return n;
          },
        },
        8: {
          n: "PtgAttrGoto",
          f: function Wm(e, r, t) {
            var a = 255 & e[e.l + 1] ? 1 : 0;
            return ((e.l += 2), [a, e.read_shift(t && 2 == t.biff ? 1 : 2)]);
          },
        },
        16: {
          n: "PtgAttrSum",
          f: function qm(e, r, t) {
            e.l += t && 2 == t.biff ? 3 : 4;
          },
        },
        32: { n: "PtgAttrBaxcel", f: Po },
        33: { n: "PtgAttrBaxcel", f: Po },
        64: {
          n: "PtgAttrSpace",
          f: function Km(e) {
            return (e.read_shift(2), Do(e));
          },
        },
        65: {
          n: "PtgAttrSpaceSemi",
          f: function Ym(e) {
            return (e.read_shift(2), Do(e));
          },
        },
        128: {
          n: "PtgAttrIfError",
          f: function Vm(e) {
            var r = 255 & e[e.l + 1] ? 1 : 0;
            return ((e.l += 2), [r, e.read_shift(2)]);
          },
        },
        255: {},
      };
    function An(e, r, t, a) {
      if (a.biff < 8) return Or(e, r);
      for (var n = e.l + r, i = [], s = 0; s !== t.length; ++s)
        switch (t[s][0]) {
          case "PtgArray":
            ((t[s][1] = o_(e, 0, a)), i.push(t[s][1]));
            break;
          case "PtgMemArea":
            ((t[s][2] = c_(e, 0, a)), i.push(t[s][2]));
            break;
          case "PtgExp":
            a &&
              12 == a.biff &&
              ((t[s][1][1] = e.read_shift(4)), i.push(t[s][1]));
            break;
          case "PtgList":
          case "PtgElfRadicalS":
          case "PtgElfColS":
          case "PtgElfColSV":
            throw "Unsupported " + t[s][0];
        }
      return (0 != (r = n - e.l) && i.push(Or(e, r)), i);
    }
    function U_(e) {
      for (var r = [], t = 0; t < e.length; ++t) {
        for (var a = e[t], n = [], i = 0; i < a.length; ++i) {
          var s = a[i];
          n.push(
            s ? (2 === s[0] ? '"' + s[1].replace(/"/g, '""') + '"' : s[1]) : "",
          );
        }
        r.push(n.join(","));
      }
      return r.join(";");
    }
    var G_ = {
      PtgAdd: "+",
      PtgConcat: "&",
      PtgDiv: "/",
      PtgEq: "=",
      PtgGe: ">=",
      PtgGt: ">",
      PtgLe: "<=",
      PtgLt: "<",
      PtgMul: "*",
      PtgNe: "<>",
      PtgPower: "^",
      PtgSub: "-",
    };
    function Uo(e, r, t) {
      if (!e) return "SH33TJSERR0";
      if (t.biff > 8 && (!e.XTI || !e.XTI[r])) return e.SheetNames[r];
      if (!e.XTI) return "SH33TJSERR6";
      var a = e.XTI[r];
      if (t.biff < 8)
        return (
          r > 1e4 && (r -= 65536),
          r < 0 && (r = -r),
          0 == r ? "" : e.XTI[r - 1]
        );
      if (!a) return "SH33TJSERR1";
      var n = "";
      if (t.biff > 8)
        switch (e[a[0]][0]) {
          case 357:
            return (
              (n = -1 == a[1] ? "#REF" : e.SheetNames[a[1]]),
              a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]]
            );
          case 358:
            return null != t.SID
              ? e.SheetNames[t.SID]
              : "SH33TJSSAME" + e[a[0]][0];
          default:
            return "SH33TJSSRC" + e[a[0]][0];
        }
      switch (e[a[0]][0][0]) {
        case 1025:
          return (
            (n = -1 == a[1] ? "#REF" : e.SheetNames[a[1]] || "SH33TJSERR3"),
            a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]]
          );
        case 14849:
          return e[a[0]]
            .slice(1)
            .map(function (i) {
              return i.Name;
            })
            .join(";;");
        default:
          return e[a[0]][0][3]
            ? ((n = -1 == a[1] ? "#REF" : e[a[0]][0][3][a[1]] || "SH33TJSERR4"),
              a[1] == a[2] ? n : n + ":" + e[a[0]][0][3][a[2]])
            : "SH33TJSERR2";
      }
    }
    function Go(e, r, t) {
      var a = Uo(e, r, t);
      return "#REF" == a
        ? a
        : (function W_(e, r) {
            if (!(e || (r && r.biff <= 5 && r.biff >= 2)))
              throw new Error("empty sheet name");
            return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e)
              ? "'" + e + "'"
              : e;
          })(a, t);
    }
    function Dr(e, r, t, a, n) {
      var o,
        f,
        l,
        x,
        i = (n && n.biff) || 8,
        s = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
        c = [],
        h = 0,
        d = 0,
        m = "";
      if (!e[0] || !e[0][0]) return "";
      for (var u = -1, _ = "", A = 0, T = e[0].length; A < T; ++A) {
        var g = e[0][A];
        switch (g[0]) {
          case "PtgUminus":
            c.push("-" + c.pop());
            break;
          case "PtgUplus":
            c.push("+" + c.pop());
            break;
          case "PtgPercent":
            c.push(c.pop() + "%");
            break;
          case "PtgAdd":
          case "PtgConcat":
          case "PtgDiv":
          case "PtgEq":
          case "PtgGe":
          case "PtgGt":
          case "PtgLe":
          case "PtgLt":
          case "PtgMul":
          case "PtgNe":
          case "PtgPower":
          case "PtgSub":
            if (((o = c.pop()), (f = c.pop()), u >= 0)) {
              switch (e[0][u][1][0]) {
                case 0:
                  _ = cr(" ", e[0][u][1][1]);
                  break;
                case 1:
                  _ = cr("\r", e[0][u][1][1]);
                  break;
                default:
                  if (((_ = ""), n.WTF))
                    throw new Error(
                      "Unexpected PtgAttrSpaceType " + e[0][u][1][0],
                    );
              }
              ((f += _), (u = -1));
            }
            c.push(f + G_[g[0]] + o);
            break;
          case "PtgIsect":
            ((o = c.pop()), (f = c.pop()), c.push(f + " " + o));
            break;
          case "PtgUnion":
            ((o = c.pop()), (f = c.pop()), c.push(f + "," + o));
            break;
          case "PtgRange":
            ((o = c.pop()), (f = c.pop()), c.push(f + ":" + o));
            break;
          case "PtgAttrChoose":
          case "PtgAttrGoto":
          case "PtgAttrIf":
          case "PtgAttrIfError":
          case "PtgAttrBaxcel":
          case "PtgAttrSemi":
          case "PtgMemArea":
          case "PtgTbl":
          case "PtgMemErr":
          case "PtgMemAreaN":
          case "PtgMemNoMemN":
          case "PtgAttrNoop":
          case "PtgSheet":
          case "PtgEndSheet":
          case "PtgMemFunc":
          case "PtgMemNoMem":
            break;
          case "PtgRef":
            ((l = ln(g[1][1], s, n)), c.push(un(l, i)));
            break;
          case "PtgRefN":
            ((l = t ? ln(g[1][1], t, n) : g[1][1]), c.push(un(l, i)));
            break;
          case "PtgRef3d":
            ((h = g[1][1]),
              (l = ln(g[1][2], s, n)),
              (m = Go(a, h, n)),
              c.push(m + "!" + un(l, i)));
            break;
          case "PtgFunc":
          case "PtgFuncVar":
            var D = g[1][0],
              Y = g[1][1];
            D || (D = 0);
            var F = 0 == (D &= 127) ? [] : c.slice(-D);
            ((c.length -= D),
              "User" === Y && (Y = F.shift()),
              c.push(Y + "(" + F.join(",") + ")"));
            break;
          case "PtgBool":
            c.push(g[1] ? "TRUE" : "FALSE");
            break;
          case "PtgInt":
          case "PtgErr":
            c.push(g[1]);
            break;
          case "PtgNum":
            c.push(String(g[1]));
            break;
          case "PtgStr":
            c.push('"' + g[1].replace(/"/g, '""') + '"');
            break;
          case "PtgAreaN":
            ((x = dc(g[1][1], t ? { s: t } : s, n)), c.push(ji(x, n)));
            break;
          case "PtgArea":
            ((x = dc(g[1][1], s, n)), c.push(ji(x, n)));
            break;
          case "PtgArea3d":
            ((x = g[1][2]),
              (m = Go(a, (h = g[1][1]), n)),
              c.push(m + "!" + ji(x, n)));
            break;
          case "PtgAttrSum":
            c.push("SUM(" + c.pop() + ")");
            break;
          case "PtgName":
            var P = (a.names || [])[(d = g[1][2]) - 1] || (a[0] || [])[d],
              I = P ? P.Name : "SH33TJSNAME" + String(d);
            (I && "_xlfn." == I.slice(0, 6) && !n.xlfn && (I = I.slice(6)),
              c.push(I));
            break;
          case "PtgNameX":
            var Z,
              z = g[1][1];
            if (((d = g[1][2]), !(n.biff <= 5))) {
              var b = "";
              if (
                (14849 == ((a[z] || [])[0] || [])[0] ||
                  (1025 == ((a[z] || [])[0] || [])[0]
                    ? a[z][d] &&
                      a[z][d].itab > 0 &&
                      (b = a.SheetNames[a[z][d].itab - 1] + "!")
                    : (b = a.SheetNames[d - 1] + "!")),
                a[z] && a[z][d])
              )
                b += a[z][d].Name;
              else if (a[0] && a[0][d]) b += a[0][d].Name;
              else {
                var ue = (Uo(a, z, n) || "").split(";;");
                ue[d - 1] ? (b = ue[d - 1]) : (b += "SH33TJSERRX");
              }
              c.push(b);
              break;
            }
            (z < 0 && (z = -z),
              a[z] && (Z = a[z][d]),
              Z || (Z = { Name: "SH33TJSERRY" }),
              c.push(Z.Name));
            break;
          case "PtgParen":
            var ge = "(",
              xe = ")";
            if (u >= 0) {
              switch (((_ = ""), e[0][u][1][0])) {
                case 2:
                  ge = cr(" ", e[0][u][1][1]) + ge;
                  break;
                case 3:
                  ge = cr("\r", e[0][u][1][1]) + ge;
                  break;
                case 4:
                  xe = cr(" ", e[0][u][1][1]) + xe;
                  break;
                case 5:
                  xe = cr("\r", e[0][u][1][1]) + xe;
                  break;
                default:
                  if (n.WTF)
                    throw new Error(
                      "Unexpected PtgAttrSpaceType " + e[0][u][1][0],
                    );
              }
              u = -1;
            }
            c.push(ge + c.pop() + xe);
            break;
          case "PtgRefErr":
          case "PtgRefErr3d":
          case "PtgAreaErr":
          case "PtgAreaErr3d":
            c.push("#REF!");
            break;
          case "PtgExp":
            var ke = { c: t.c, r: t.r };
            if (a.sharedf[Ce((l = { c: g[1][1], r: g[1][0] }))]) {
              var Ae = a.sharedf[Ce(l)];
              c.push(Dr(Ae, 0, ke, a, n));
            } else {
              var De = !1;
              for (o = 0; o != a.arrayf.length; ++o)
                if (!(
                  l.c < (f = a.arrayf[o])[0].s.c ||
                  l.c > f[0].e.c ||
                  l.r < f[0].s.r ||
                  l.r > f[0].e.r
                )) {
                  (c.push(Dr(f[1], 0, ke, a, n)), (De = !0));
                  break;
                }
              De || c.push(g[1]);
            }
            break;
          case "PtgArray":
            c.push("{" + U_(g[1]) + "}");
            break;
          case "PtgAttrSpace":
          case "PtgAttrSpaceSemi":
            u = A;
            break;
          case "PtgMissArg":
            c.push("");
            break;
          case "PtgList":
            c.push("Table" + g[1].idx + "[#" + g[1].rt + "]");
            break;
          case "PtgElfCol":
          case "PtgElfColS":
          case "PtgElfColSV":
          case "PtgElfColV":
          case "PtgElfLel":
          case "PtgElfRadical":
          case "PtgElfRadicalLel":
          case "PtgElfRadicalS":
          case "PtgElfRw":
          case "PtgElfRwV":
            throw new Error("Unsupported ELFs");
          default:
            throw new Error("Unrecognized Formula Token: " + String(g));
        }
        if (
          3 != n.biff &&
          u >= 0 &&
          -1 ==
            ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"].indexOf(
              e[0][A][0],
            )
        ) {
          var ye = !0;
          switch ((g = e[0][u])[1][0]) {
            case 4:
              ye = !1;
            case 0:
              _ = cr(" ", g[1][1]);
              break;
            case 5:
              ye = !1;
            case 1:
              _ = cr("\r", g[1][1]);
              break;
            default:
              if (((_ = ""), n.WTF))
                throw new Error("Unexpected PtgAttrSpaceType " + g[1][0]);
          }
          (c.push((ye ? _ : "") + c.pop() + (ye ? "" : _)), (u = -1));
        }
      }
      if (c.length > 1 && n.WTF) throw new Error("bad formula stack");
      return c[0];
    }
    function hi(e, r, t) {
      var a = e.read_shift(4),
        n = (function Sn(e, r, t) {
          for (var n, i, a = e.l + r, s = []; a != e.l;)
            ((r = a - e.l),
              (n = Bo[(i = e[e.l])] || Bo[D_[i]]),
              (24 === i || 25 === i) && (n = (24 === i ? M_ : B_)[e[e.l + 1]]),
              n && n.f ? s.push([n.n, n.f(e, r, t)]) : Or(e, r));
          return s;
        })(e, a, t),
        i = e.read_shift(4);
      return [n, i > 0 ? An(e, i, n, t) : null];
    }
    var Z_ = hi,
      di = hi,
      $_ = hi,
      j_ = hi,
      Q_ = {
        0: "BEEP",
        1: "OPEN",
        2: "OPEN.LINKS",
        3: "CLOSE.ALL",
        4: "SAVE",
        5: "SAVE.AS",
        6: "FILE.DELETE",
        7: "PAGE.SETUP",
        8: "PRINT",
        9: "PRINTER.SETUP",
        10: "QUIT",
        11: "NEW.WINDOW",
        12: "ARRANGE.ALL",
        13: "WINDOW.SIZE",
        14: "WINDOW.MOVE",
        15: "FULL",
        16: "CLOSE",
        17: "RUN",
        22: "SET.PRINT.AREA",
        23: "SET.PRINT.TITLES",
        24: "SET.PAGE.BREAK",
        25: "REMOVE.PAGE.BREAK",
        26: "FONT",
        27: "DISPLAY",
        28: "PROTECT.DOCUMENT",
        29: "PRECISION",
        30: "A1.R1C1",
        31: "CALCULATE.NOW",
        32: "CALCULATION",
        34: "DATA.FIND",
        35: "EXTRACT",
        36: "DATA.DELETE",
        37: "SET.DATABASE",
        38: "SET.CRITERIA",
        39: "SORT",
        40: "DATA.SERIES",
        41: "TABLE",
        42: "FORMAT.NUMBER",
        43: "ALIGNMENT",
        44: "STYLE",
        45: "BORDER",
        46: "CELL.PROTECTION",
        47: "COLUMN.WIDTH",
        48: "UNDO",
        49: "CUT",
        50: "COPY",
        51: "PASTE",
        52: "CLEAR",
        53: "PASTE.SPECIAL",
        54: "EDIT.DELETE",
        55: "INSERT",
        56: "FILL.RIGHT",
        57: "FILL.DOWN",
        61: "DEFINE.NAME",
        62: "CREATE.NAMES",
        63: "FORMULA.GOTO",
        64: "FORMULA.FIND",
        65: "SELECT.LAST.CELL",
        66: "SHOW.ACTIVE.CELL",
        67: "GALLERY.AREA",
        68: "GALLERY.BAR",
        69: "GALLERY.COLUMN",
        70: "GALLERY.LINE",
        71: "GALLERY.PIE",
        72: "GALLERY.SCATTER",
        73: "COMBINATION",
        74: "PREFERRED",
        75: "ADD.OVERLAY",
        76: "GRIDLINES",
        77: "SET.PREFERRED",
        78: "AXES",
        79: "LEGEND",
        80: "ATTACH.TEXT",
        81: "ADD.ARROW",
        82: "SELECT.CHART",
        83: "SELECT.PLOT.AREA",
        84: "PATTERNS",
        85: "MAIN.CHART",
        86: "OVERLAY",
        87: "SCALE",
        88: "FORMAT.LEGEND",
        89: "FORMAT.TEXT",
        90: "EDIT.REPEAT",
        91: "PARSE",
        92: "JUSTIFY",
        93: "HIDE",
        94: "UNHIDE",
        95: "WORKSPACE",
        96: "FORMULA",
        97: "FORMULA.FILL",
        98: "FORMULA.ARRAY",
        99: "DATA.FIND.NEXT",
        100: "DATA.FIND.PREV",
        101: "FORMULA.FIND.NEXT",
        102: "FORMULA.FIND.PREV",
        103: "ACTIVATE",
        104: "ACTIVATE.NEXT",
        105: "ACTIVATE.PREV",
        106: "UNLOCKED.NEXT",
        107: "UNLOCKED.PREV",
        108: "COPY.PICTURE",
        109: "SELECT",
        110: "DELETE.NAME",
        111: "DELETE.FORMAT",
        112: "VLINE",
        113: "HLINE",
        114: "VPAGE",
        115: "HPAGE",
        116: "VSCROLL",
        117: "HSCROLL",
        118: "ALERT",
        119: "NEW",
        120: "CANCEL.COPY",
        121: "SHOW.CLIPBOARD",
        122: "MESSAGE",
        124: "PASTE.LINK",
        125: "APP.ACTIVATE",
        126: "DELETE.ARROW",
        127: "ROW.HEIGHT",
        128: "FORMAT.MOVE",
        129: "FORMAT.SIZE",
        130: "FORMULA.REPLACE",
        131: "SEND.KEYS",
        132: "SELECT.SPECIAL",
        133: "APPLY.NAMES",
        134: "REPLACE.FONT",
        135: "FREEZE.PANES",
        136: "SHOW.INFO",
        137: "SPLIT",
        138: "ON.WINDOW",
        139: "ON.DATA",
        140: "DISABLE.INPUT",
        142: "OUTLINE",
        143: "LIST.NAMES",
        144: "FILE.CLOSE",
        145: "SAVE.WORKBOOK",
        146: "DATA.FORM",
        147: "COPY.CHART",
        148: "ON.TIME",
        149: "WAIT",
        150: "FORMAT.FONT",
        151: "FILL.UP",
        152: "FILL.LEFT",
        153: "DELETE.OVERLAY",
        155: "SHORT.MENUS",
        159: "SET.UPDATE.STATUS",
        161: "COLOR.PALETTE",
        162: "DELETE.STYLE",
        163: "WINDOW.RESTORE",
        164: "WINDOW.MAXIMIZE",
        166: "CHANGE.LINK",
        167: "CALCULATE.DOCUMENT",
        168: "ON.KEY",
        169: "APP.RESTORE",
        170: "APP.MOVE",
        171: "APP.SIZE",
        172: "APP.MINIMIZE",
        173: "APP.MAXIMIZE",
        174: "BRING.TO.FRONT",
        175: "SEND.TO.BACK",
        185: "MAIN.CHART.TYPE",
        186: "OVERLAY.CHART.TYPE",
        187: "SELECT.END",
        188: "OPEN.MAIL",
        189: "SEND.MAIL",
        190: "STANDARD.FONT",
        191: "CONSOLIDATE",
        192: "SORT.SPECIAL",
        193: "GALLERY.3D.AREA",
        194: "GALLERY.3D.COLUMN",
        195: "GALLERY.3D.LINE",
        196: "GALLERY.3D.PIE",
        197: "VIEW.3D",
        198: "GOAL.SEEK",
        199: "WORKGROUP",
        200: "FILL.GROUP",
        201: "UPDATE.LINK",
        202: "PROMOTE",
        203: "DEMOTE",
        204: "SHOW.DETAIL",
        206: "UNGROUP",
        207: "OBJECT.PROPERTIES",
        208: "SAVE.NEW.OBJECT",
        209: "SHARE",
        210: "SHARE.NAME",
        211: "DUPLICATE",
        212: "APPLY.STYLE",
        213: "ASSIGN.TO.OBJECT",
        214: "OBJECT.PROTECTION",
        215: "HIDE.OBJECT",
        216: "SET.EXTRACT",
        217: "CREATE.PUBLISHER",
        218: "SUBSCRIBE.TO",
        219: "ATTRIBUTES",
        220: "SHOW.TOOLBAR",
        222: "PRINT.PREVIEW",
        223: "EDIT.COLOR",
        224: "SHOW.LEVELS",
        225: "FORMAT.MAIN",
        226: "FORMAT.OVERLAY",
        227: "ON.RECALC",
        228: "EDIT.SERIES",
        229: "DEFINE.STYLE",
        240: "LINE.PRINT",
        243: "ENTER.DATA",
        249: "GALLERY.RADAR",
        250: "MERGE.STYLES",
        251: "EDITION.OPTIONS",
        252: "PASTE.PICTURE",
        253: "PASTE.PICTURE.LINK",
        254: "SPELLING",
        256: "ZOOM",
        259: "INSERT.OBJECT",
        260: "WINDOW.MINIMIZE",
        265: "SOUND.NOTE",
        266: "SOUND.PLAY",
        267: "FORMAT.SHAPE",
        268: "EXTEND.POLYGON",
        269: "FORMAT.AUTO",
        272: "GALLERY.3D.BAR",
        273: "GALLERY.3D.SURFACE",
        274: "FILL.AUTO",
        276: "CUSTOMIZE.TOOLBAR",
        277: "ADD.TOOL",
        278: "EDIT.OBJECT",
        279: "ON.DOUBLECLICK",
        280: "ON.ENTRY",
        281: "WORKBOOK.ADD",
        282: "WORKBOOK.MOVE",
        283: "WORKBOOK.COPY",
        284: "WORKBOOK.OPTIONS",
        285: "SAVE.WORKSPACE",
        288: "CHART.WIZARD",
        289: "DELETE.TOOL",
        290: "MOVE.TOOL",
        291: "WORKBOOK.SELECT",
        292: "WORKBOOK.ACTIVATE",
        293: "ASSIGN.TO.TOOL",
        295: "COPY.TOOL",
        296: "RESET.TOOL",
        297: "CONSTRAIN.NUMERIC",
        298: "PASTE.TOOL",
        302: "WORKBOOK.NEW",
        305: "SCENARIO.CELLS",
        306: "SCENARIO.DELETE",
        307: "SCENARIO.ADD",
        308: "SCENARIO.EDIT",
        309: "SCENARIO.SHOW",
        310: "SCENARIO.SHOW.NEXT",
        311: "SCENARIO.SUMMARY",
        312: "PIVOT.TABLE.WIZARD",
        313: "PIVOT.FIELD.PROPERTIES",
        314: "PIVOT.FIELD",
        315: "PIVOT.ITEM",
        316: "PIVOT.ADD.FIELDS",
        318: "OPTIONS.CALCULATION",
        319: "OPTIONS.EDIT",
        320: "OPTIONS.VIEW",
        321: "ADDIN.MANAGER",
        322: "MENU.EDITOR",
        323: "ATTACH.TOOLBARS",
        324: "VBAActivate",
        325: "OPTIONS.CHART",
        328: "VBA.INSERT.FILE",
        330: "VBA.PROCEDURE.DEFINITION",
        336: "ROUTING.SLIP",
        338: "ROUTE.DOCUMENT",
        339: "MAIL.LOGON",
        342: "INSERT.PICTURE",
        343: "EDIT.TOOL",
        344: "GALLERY.DOUGHNUT",
        350: "CHART.TREND",
        352: "PIVOT.ITEM.PROPERTIES",
        354: "WORKBOOK.INSERT",
        355: "OPTIONS.TRANSITION",
        356: "OPTIONS.GENERAL",
        370: "FILTER.ADVANCED",
        373: "MAIL.ADD.MAILER",
        374: "MAIL.DELETE.MAILER",
        375: "MAIL.REPLY",
        376: "MAIL.REPLY.ALL",
        377: "MAIL.FORWARD",
        378: "MAIL.NEXT.LETTER",
        379: "DATA.LABEL",
        380: "INSERT.TITLE",
        381: "FONT.PROPERTIES",
        382: "MACRO.OPTIONS",
        383: "WORKBOOK.HIDE",
        384: "WORKBOOK.UNHIDE",
        385: "WORKBOOK.DELETE",
        386: "WORKBOOK.NAME",
        388: "GALLERY.CUSTOM",
        390: "ADD.CHART.AUTOFORMAT",
        391: "DELETE.CHART.AUTOFORMAT",
        392: "CHART.ADD.DATA",
        393: "AUTO.OUTLINE",
        394: "TAB.ORDER",
        395: "SHOW.DIALOG",
        396: "SELECT.ALL",
        397: "UNGROUP.SHEETS",
        398: "SUBTOTAL.CREATE",
        399: "SUBTOTAL.REMOVE",
        400: "RENAME.OBJECT",
        412: "WORKBOOK.SCROLL",
        413: "WORKBOOK.NEXT",
        414: "WORKBOOK.PREV",
        415: "WORKBOOK.TAB.SPLIT",
        416: "FULL.SCREEN",
        417: "WORKBOOK.PROTECT",
        420: "SCROLLBAR.PROPERTIES",
        421: "PIVOT.SHOW.PAGES",
        422: "TEXT.TO.COLUMNS",
        423: "FORMAT.CHARTTYPE",
        424: "LINK.FORMAT",
        425: "TRACER.DISPLAY",
        430: "TRACER.NAVIGATE",
        431: "TRACER.CLEAR",
        432: "TRACER.ERROR",
        433: "PIVOT.FIELD.GROUP",
        434: "PIVOT.FIELD.UNGROUP",
        435: "CHECKBOX.PROPERTIES",
        436: "LABEL.PROPERTIES",
        437: "LISTBOX.PROPERTIES",
        438: "EDITBOX.PROPERTIES",
        439: "PIVOT.REFRESH",
        440: "LINK.COMBO",
        441: "OPEN.TEXT",
        442: "HIDE.DIALOG",
        443: "SET.DIALOG.FOCUS",
        444: "ENABLE.OBJECT",
        445: "PUSHBUTTON.PROPERTIES",
        446: "SET.DIALOG.DEFAULT",
        447: "FILTER",
        448: "FILTER.SHOW.ALL",
        449: "CLEAR.OUTLINE",
        450: "FUNCTION.WIZARD",
        451: "ADD.LIST.ITEM",
        452: "SET.LIST.ITEM",
        453: "REMOVE.LIST.ITEM",
        454: "SELECT.LIST.ITEM",
        455: "SET.CONTROL.VALUE",
        456: "SAVE.COPY.AS",
        458: "OPTIONS.LISTS.ADD",
        459: "OPTIONS.LISTS.DELETE",
        460: "SERIES.AXES",
        461: "SERIES.X",
        462: "SERIES.Y",
        463: "ERRORBAR.X",
        464: "ERRORBAR.Y",
        465: "FORMAT.CHART",
        466: "SERIES.ORDER",
        467: "MAIL.LOGOFF",
        468: "CLEAR.ROUTING.SLIP",
        469: "APP.ACTIVATE.MICROSOFT",
        470: "MAIL.EDIT.MAILER",
        471: "ON.SHEET",
        472: "STANDARD.WIDTH",
        473: "SCENARIO.MERGE",
        474: "SUMMARY.INFO",
        475: "FIND.FILE",
        476: "ACTIVE.CELL.FONT",
        477: "ENABLE.TIPWIZARD",
        478: "VBA.MAKE.ADDIN",
        480: "INSERTDATATABLE",
        481: "WORKGROUP.OPTIONS",
        482: "MAIL.SEND.MAILER",
        485: "AUTOCORRECT",
        489: "POST.DOCUMENT",
        491: "PICKLIST",
        493: "VIEW.SHOW",
        494: "VIEW.DEFINE",
        495: "VIEW.DELETE",
        509: "SHEET.BACKGROUND",
        510: "INSERT.MAP.OBJECT",
        511: "OPTIONS.MENONO",
        517: "MSOCHECKS",
        518: "NORMAL",
        519: "LAYOUT",
        520: "RM.PRINT.AREA",
        521: "CLEAR.PRINT.AREA",
        522: "ADD.PRINT.AREA",
        523: "MOVE.BRK",
        545: "HIDECURR.NOTE",
        546: "HIDEALL.NOTES",
        547: "DELETE.NOTE",
        548: "TRAVERSE.NOTES",
        549: "ACTIVATE.NOTES",
        620: "PROTECT.REVISIONS",
        621: "UNPROTECT.REVISIONS",
        647: "OPTIONS.ME",
        653: "WEB.PUBLISH",
        667: "NEWWEBQUERY",
        673: "PIVOT.TABLE.CHART",
        753: "OPTIONS.SAVE",
        755: "OPTIONS.SPELL",
        808: "HIDEALL.INKANNOTS",
      },
      Wo = {
        0: "COUNT",
        1: "IF",
        2: "ISNA",
        3: "ISERROR",
        4: "SUM",
        5: "AVERAGE",
        6: "MIN",
        7: "MAX",
        8: "ROW",
        9: "COLUMN",
        10: "NA",
        11: "NPV",
        12: "STDEV",
        13: "DOLLAR",
        14: "FIXED",
        15: "SIN",
        16: "COS",
        17: "TAN",
        18: "ATAN",
        19: "PI",
        20: "SQRT",
        21: "EXP",
        22: "LN",
        23: "LOG10",
        24: "ABS",
        25: "INT",
        26: "SIGN",
        27: "ROUND",
        28: "LOOKUP",
        29: "INDEX",
        30: "REPT",
        31: "MID",
        32: "LEN",
        33: "VALUE",
        34: "TRUE",
        35: "FALSE",
        36: "AND",
        37: "OR",
        38: "NOT",
        39: "MOD",
        40: "DCOUNT",
        41: "DSUM",
        42: "DAVERAGE",
        43: "DMIN",
        44: "DMAX",
        45: "DSTDEV",
        46: "VAR",
        47: "DVAR",
        48: "TEXT",
        49: "LINEST",
        50: "TREND",
        51: "LOGEST",
        52: "GROWTH",
        53: "GOTO",
        54: "HALT",
        55: "RETURN",
        56: "PV",
        57: "FV",
        58: "NPER",
        59: "PMT",
        60: "RATE",
        61: "MIRR",
        62: "IRR",
        63: "RAND",
        64: "MATCH",
        65: "DATE",
        66: "TIME",
        67: "DAY",
        68: "MONTH",
        69: "YEAR",
        70: "WEEKDAY",
        71: "HOUR",
        72: "MINUTE",
        73: "SECOND",
        74: "NOW",
        75: "AREAS",
        76: "ROWS",
        77: "COLUMNS",
        78: "OFFSET",
        79: "ABSREF",
        80: "RELREF",
        81: "ARGUMENT",
        82: "SEARCH",
        83: "TRANSPOSE",
        84: "ERROR",
        85: "STEP",
        86: "TYPE",
        87: "ECHO",
        88: "SET.NAME",
        89: "CALLER",
        90: "DEREF",
        91: "WINDOWS",
        92: "SERIES",
        93: "DOCUMENTS",
        94: "ACTIVE.CELL",
        95: "SELECTION",
        96: "RESULT",
        97: "ATAN2",
        98: "ASIN",
        99: "ACOS",
        100: "CHOOSE",
        101: "HLOOKUP",
        102: "VLOOKUP",
        103: "LINKS",
        104: "INPUT",
        105: "ISREF",
        106: "GET.FORMULA",
        107: "GET.NAME",
        108: "SET.VALUE",
        109: "LOG",
        110: "EXEC",
        111: "CHAR",
        112: "LOWER",
        113: "UPPER",
        114: "PROPER",
        115: "LEFT",
        116: "RIGHT",
        117: "EXACT",
        118: "TRIM",
        119: "REPLACE",
        120: "SUBSTITUTE",
        121: "CODE",
        122: "NAMES",
        123: "DIRECTORY",
        124: "FIND",
        125: "CELL",
        126: "ISERR",
        127: "ISTEXT",
        128: "ISNUMBER",
        129: "ISBLANK",
        130: "T",
        131: "N",
        132: "FOPEN",
        133: "FCLOSE",
        134: "FSIZE",
        135: "FREADLN",
        136: "FREAD",
        137: "FWRITELN",
        138: "FWRITE",
        139: "FPOS",
        140: "DATEVALUE",
        141: "TIMEVALUE",
        142: "SLN",
        143: "SYD",
        144: "DDB",
        145: "GET.DEF",
        146: "REFTEXT",
        147: "TEXTREF",
        148: "INDIRECT",
        149: "REGISTER",
        150: "CALL",
        151: "ADD.BAR",
        152: "ADD.MENU",
        153: "ADD.COMMAND",
        154: "ENABLE.COMMAND",
        155: "CHECK.COMMAND",
        156: "RENAME.COMMAND",
        157: "SHOW.BAR",
        158: "DELETE.MENU",
        159: "DELETE.COMMAND",
        160: "GET.CHART.ITEM",
        161: "DIALOG.BOX",
        162: "CLEAN",
        163: "MDETERM",
        164: "MINVERSE",
        165: "MMULT",
        166: "FILES",
        167: "IPMT",
        168: "PPMT",
        169: "COUNTA",
        170: "CANCEL.KEY",
        171: "FOR",
        172: "WHILE",
        173: "BREAK",
        174: "NEXT",
        175: "INITIATE",
        176: "REQUEST",
        177: "POKE",
        178: "EXECUTE",
        179: "TERMINATE",
        180: "RESTART",
        181: "HELP",
        182: "GET.BAR",
        183: "PRODUCT",
        184: "FACT",
        185: "GET.CELL",
        186: "GET.WORKSPACE",
        187: "GET.WINDOW",
        188: "GET.DOCUMENT",
        189: "DPRODUCT",
        190: "ISNONTEXT",
        191: "GET.NOTE",
        192: "NOTE",
        193: "STDEVP",
        194: "VARP",
        195: "DSTDEVP",
        196: "DVARP",
        197: "TRUNC",
        198: "ISLOGICAL",
        199: "DCOUNTA",
        200: "DELETE.BAR",
        201: "UNREGISTER",
        204: "USDOLLAR",
        205: "FINDB",
        206: "SEARCHB",
        207: "REPLACEB",
        208: "LEFTB",
        209: "RIGHTB",
        210: "MIDB",
        211: "LENB",
        212: "ROUNDUP",
        213: "ROUNDDOWN",
        214: "ASC",
        215: "DBCS",
        216: "RANK",
        219: "ADDRESS",
        220: "DAYS360",
        221: "TODAY",
        222: "VDB",
        223: "ELSE",
        224: "ELSE.IF",
        225: "END.IF",
        226: "FOR.CELL",
        227: "MEDIAN",
        228: "SUMPRODUCT",
        229: "SINH",
        230: "COSH",
        231: "TANH",
        232: "ASINH",
        233: "ACOSH",
        234: "ATANH",
        235: "DGET",
        236: "CREATE.OBJECT",
        237: "VOLATILE",
        238: "LAST.ERROR",
        239: "CUSTOM.UNDO",
        240: "CUSTOM.REPEAT",
        241: "FORMULA.CONVERT",
        242: "GET.LINK.INFO",
        243: "TEXT.BOX",
        244: "INFO",
        245: "GROUP",
        246: "GET.OBJECT",
        247: "DB",
        248: "PAUSE",
        251: "RESUME",
        252: "FREQUENCY",
        253: "ADD.TOOLBAR",
        254: "DELETE.TOOLBAR",
        255: "User",
        256: "RESET.TOOLBAR",
        257: "EVALUATE",
        258: "GET.TOOLBAR",
        259: "GET.TOOL",
        260: "SPELLING.CHECK",
        261: "ERROR.TYPE",
        262: "APP.TITLE",
        263: "WINDOW.TITLE",
        264: "SAVE.TOOLBAR",
        265: "ENABLE.TOOL",
        266: "PRESS.TOOL",
        267: "REGISTER.ID",
        268: "GET.WORKBOOK",
        269: "AVEDEV",
        270: "BETADIST",
        271: "GAMMALN",
        272: "BETAINV",
        273: "BINOMDIST",
        274: "CHIDIST",
        275: "CHIINV",
        276: "COMBIN",
        277: "CONFIDENCE",
        278: "CRITBINOM",
        279: "EVEN",
        280: "EXPONDIST",
        281: "FDIST",
        282: "FINV",
        283: "FISHER",
        284: "FISHERINV",
        285: "FLOOR",
        286: "GAMMADIST",
        287: "GAMMAINV",
        288: "CEILING",
        289: "HYPGEOMDIST",
        290: "LOGNORMDIST",
        291: "LOGINV",
        292: "NEGBINOMDIST",
        293: "NORMDIST",
        294: "NORMSDIST",
        295: "NORMINV",
        296: "NORMSINV",
        297: "STANDARDIZE",
        298: "ODD",
        299: "PERMUT",
        300: "POISSON",
        301: "TDIST",
        302: "WEIBULL",
        303: "SUMXMY2",
        304: "SUMX2MY2",
        305: "SUMX2PY2",
        306: "CHITEST",
        307: "CORREL",
        308: "COVAR",
        309: "FORECAST",
        310: "FTEST",
        311: "INTERCEPT",
        312: "PEARSON",
        313: "RSQ",
        314: "STEYX",
        315: "SLOPE",
        316: "TTEST",
        317: "PROB",
        318: "DEVSQ",
        319: "GEOMEAN",
        320: "HARMEAN",
        321: "SUMSQ",
        322: "KURT",
        323: "SKEW",
        324: "ZTEST",
        325: "LARGE",
        326: "SMALL",
        327: "QUARTILE",
        328: "PERCENTILE",
        329: "PERCENTRANK",
        330: "MODE",
        331: "TRIMMEAN",
        332: "TINV",
        334: "MOVIE.COMMAND",
        335: "GET.MOVIE",
        336: "CONCATENATE",
        337: "POWER",
        338: "PIVOT.ADD.DATA",
        339: "GET.PIVOT.TABLE",
        340: "GET.PIVOT.FIELD",
        341: "GET.PIVOT.ITEM",
        342: "RADIANS",
        343: "DEGREES",
        344: "SUBTOTAL",
        345: "SUMIF",
        346: "COUNTIF",
        347: "COUNTBLANK",
        348: "SCENARIO.GET",
        349: "OPTIONS.LISTS.GET",
        350: "ISPMT",
        351: "DATEDIF",
        352: "DATESTRING",
        353: "NUMBERSTRING",
        354: "ROMAN",
        355: "OPEN.DIALOG",
        356: "SAVE.DIALOG",
        357: "VIEW.GET",
        358: "GETPIVOTDATA",
        359: "HYPERLINK",
        360: "PHONETIC",
        361: "AVERAGEA",
        362: "MAXA",
        363: "MINA",
        364: "STDEVPA",
        365: "VARPA",
        366: "STDEVA",
        367: "VARA",
        368: "BAHTTEXT",
        369: "THAIDAYOFWEEK",
        370: "THAIDIGIT",
        371: "THAIMONTHOFYEAR",
        372: "THAINUMSOUND",
        373: "THAINUMSTRING",
        374: "THAISTRINGLENGTH",
        375: "ISTHAIDIGIT",
        376: "ROUNDBAHTDOWN",
        377: "ROUNDBAHTUP",
        378: "THAIYEAR",
        379: "RTD",
        380: "CUBEVALUE",
        381: "CUBEMEMBER",
        382: "CUBEMEMBERPROPERTY",
        383: "CUBERANKEDMEMBER",
        384: "HEX2BIN",
        385: "HEX2DEC",
        386: "HEX2OCT",
        387: "DEC2BIN",
        388: "DEC2HEX",
        389: "DEC2OCT",
        390: "OCT2BIN",
        391: "OCT2HEX",
        392: "OCT2DEC",
        393: "BIN2DEC",
        394: "BIN2OCT",
        395: "BIN2HEX",
        396: "IMSUB",
        397: "IMDIV",
        398: "IMPOWER",
        399: "IMABS",
        400: "IMSQRT",
        401: "IMLN",
        402: "IMLOG2",
        403: "IMLOG10",
        404: "IMSIN",
        405: "IMCOS",
        406: "IMEXP",
        407: "IMARGUMENT",
        408: "IMCONJUGATE",
        409: "IMAGINARY",
        410: "IMREAL",
        411: "COMPLEX",
        412: "IMSUM",
        413: "IMPRODUCT",
        414: "SERIESSUM",
        415: "FACTDOUBLE",
        416: "SQRTPI",
        417: "QUOTIENT",
        418: "DELTA",
        419: "GESTEP",
        420: "ISEVEN",
        421: "ISODD",
        422: "MROUND",
        423: "ERF",
        424: "ERFC",
        425: "BESSELJ",
        426: "BESSELK",
        427: "BESSELY",
        428: "BESSELI",
        429: "XIRR",
        430: "XNPV",
        431: "PRICEMAT",
        432: "YIELDMAT",
        433: "INTRATE",
        434: "RECEIVED",
        435: "DISC",
        436: "PRICEDISC",
        437: "YIELDDISC",
        438: "TBILLEQ",
        439: "TBILLPRICE",
        440: "TBILLYIELD",
        441: "PRICE",
        442: "YIELD",
        443: "DOLLARDE",
        444: "DOLLARFR",
        445: "NOMINAL",
        446: "EFFECT",
        447: "CUMPRINC",
        448: "CUMIPMT",
        449: "EDATE",
        450: "EOMONTH",
        451: "YEARFRAC",
        452: "COUPDAYBS",
        453: "COUPDAYS",
        454: "COUPDAYSNC",
        455: "COUPNCD",
        456: "COUPNUM",
        457: "COUPPCD",
        458: "DURATION",
        459: "MDURATION",
        460: "ODDLPRICE",
        461: "ODDLYIELD",
        462: "ODDFPRICE",
        463: "ODDFYIELD",
        464: "RANDBETWEEN",
        465: "WEEKNUM",
        466: "AMORDEGRC",
        467: "AMORLINC",
        468: "CONVERT",
        724: "SHEETJS",
        469: "ACCRINT",
        470: "ACCRINTM",
        471: "WORKDAY",
        472: "NETWORKDAYS",
        473: "GCD",
        474: "MULTINOMIAL",
        475: "LCM",
        476: "FVSCHEDULE",
        477: "CUBEKPIMEMBER",
        478: "CUBESET",
        479: "CUBESETCOUNT",
        480: "IFERROR",
        481: "COUNTIFS",
        482: "SUMIFS",
        483: "AVERAGEIF",
        484: "AVERAGEIFS",
      },
      q_ = {
        2: 1,
        3: 1,
        10: 0,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        19: 0,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 2,
        30: 2,
        31: 3,
        32: 1,
        33: 1,
        34: 0,
        35: 0,
        38: 1,
        39: 2,
        40: 3,
        41: 3,
        42: 3,
        43: 3,
        44: 3,
        45: 3,
        47: 3,
        48: 2,
        53: 1,
        61: 3,
        63: 0,
        65: 3,
        66: 3,
        67: 1,
        68: 1,
        69: 1,
        70: 1,
        71: 1,
        72: 1,
        73: 1,
        74: 0,
        75: 1,
        76: 1,
        77: 1,
        79: 2,
        80: 2,
        83: 1,
        85: 0,
        86: 1,
        89: 0,
        90: 1,
        94: 0,
        95: 0,
        97: 2,
        98: 1,
        99: 1,
        101: 3,
        102: 3,
        105: 1,
        106: 1,
        108: 2,
        111: 1,
        112: 1,
        113: 1,
        114: 1,
        117: 2,
        118: 1,
        119: 4,
        121: 1,
        126: 1,
        127: 1,
        128: 1,
        129: 1,
        130: 1,
        131: 1,
        133: 1,
        134: 1,
        135: 1,
        136: 2,
        137: 2,
        138: 2,
        140: 1,
        141: 1,
        142: 3,
        143: 4,
        144: 4,
        161: 1,
        162: 1,
        163: 1,
        164: 1,
        165: 2,
        172: 1,
        175: 2,
        176: 2,
        177: 3,
        178: 2,
        179: 1,
        184: 1,
        186: 1,
        189: 3,
        190: 1,
        195: 3,
        196: 3,
        197: 1,
        198: 1,
        199: 3,
        201: 1,
        207: 4,
        210: 3,
        211: 1,
        212: 2,
        213: 2,
        214: 1,
        215: 1,
        225: 0,
        229: 1,
        230: 1,
        231: 1,
        232: 1,
        233: 1,
        234: 1,
        235: 3,
        244: 1,
        247: 4,
        252: 2,
        257: 1,
        261: 1,
        271: 1,
        273: 4,
        274: 2,
        275: 2,
        276: 2,
        277: 3,
        278: 3,
        279: 1,
        280: 3,
        281: 3,
        282: 3,
        283: 1,
        284: 1,
        285: 2,
        286: 4,
        287: 3,
        288: 2,
        289: 4,
        290: 3,
        291: 3,
        292: 3,
        293: 4,
        294: 1,
        295: 3,
        296: 1,
        297: 3,
        298: 1,
        299: 2,
        300: 3,
        301: 3,
        302: 4,
        303: 2,
        304: 2,
        305: 2,
        306: 2,
        307: 2,
        308: 2,
        309: 3,
        310: 2,
        311: 2,
        312: 2,
        313: 2,
        314: 2,
        315: 2,
        316: 4,
        325: 2,
        326: 2,
        327: 2,
        328: 2,
        331: 2,
        332: 2,
        337: 2,
        342: 1,
        343: 1,
        346: 2,
        347: 1,
        350: 4,
        351: 3,
        352: 1,
        353: 2,
        360: 1,
        368: 1,
        369: 1,
        370: 1,
        371: 1,
        372: 1,
        373: 1,
        374: 1,
        375: 1,
        376: 1,
        377: 1,
        378: 1,
        382: 3,
        385: 1,
        392: 1,
        393: 1,
        396: 2,
        397: 2,
        398: 2,
        399: 1,
        400: 1,
        401: 1,
        402: 1,
        403: 1,
        404: 1,
        405: 1,
        406: 1,
        407: 1,
        408: 1,
        409: 1,
        410: 1,
        414: 4,
        415: 1,
        416: 1,
        417: 2,
        420: 1,
        421: 1,
        422: 2,
        424: 1,
        425: 2,
        426: 2,
        427: 2,
        428: 2,
        430: 3,
        438: 3,
        439: 3,
        440: 3,
        443: 2,
        444: 2,
        445: 2,
        446: 2,
        447: 6,
        448: 6,
        449: 2,
        450: 2,
        464: 2,
        468: 3,
        476: 2,
        479: 1,
        480: 2,
        65535: 0,
      };
    function ep(e) {
      return ("of:=" + e.replace(As, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":"))
        .replace(/;/g, "|")
        .replace(/,/g, ";");
    }
    function rp(e) {
      return e.replace(/\./, "!");
    }
    var wn = typeof Map < "u";
    function ys(e, r, t) {
      var a = 0,
        n = e.length;
      if (t) {
        if (wn ? t.has(r) : Object.prototype.hasOwnProperty.call(t, r))
          for (var i = wn ? t.get(r) : t[r]; a < i.length; ++a)
            if (e[i[a]].t === r) return (e.Count++, i[a]);
      } else for (; a < n; ++a) if (e[a].t === r) return (e.Count++, a);
      return (
        (e[n] = { t: r }),
        e.Count++,
        e.Unique++,
        t &&
          (wn
            ? (t.has(r) || t.set(r, []), t.get(r).push(n))
            : (Object.prototype.hasOwnProperty.call(t, r) || (t[r] = []),
              t[r].push(n))),
        n
      );
    }
    function mi(e, r) {
      var t = { min: e + 1, max: e + 1 },
        a = -1;
      return (
        r.MDW && (Pr = r.MDW),
        null != r.width
          ? (t.customWidth = 1)
          : null != r.wpx
            ? (a = vn(r.wpx))
            : null != r.wch && (a = r.wch),
        a > -1
          ? ((t.width = oi(a)), (t.customWidth = 1))
          : null != r.width && (t.width = r.width),
        r.hidden && (t.hidden = !0),
        null != r.level && (t.outlineLevel = t.level = r.level),
        t
      );
    }
    function Sa(e, r) {
      if (e) {
        var t = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
        ("xlml" == r && (t = [1, 1, 1, 1, 0.5, 0.5]),
          null == e.left && (e.left = t[0]),
          null == e.right && (e.right = t[1]),
          null == e.top && (e.top = t[2]),
          null == e.bottom && (e.bottom = t[3]),
          null == e.header && (e.header = t[4]),
          null == e.footer && (e.footer = t[5]));
      }
    }
    function Qt(e, r, t) {
      var a = t.revssf[null != r.z ? r.z : "General"],
        n = 60,
        i = e.length;
      if (null == a && t.ssf)
        for (; n < 392; ++n)
          if (null == t.ssf[n]) {
            (pt(r.z, n), (t.ssf[n] = r.z), (t.revssf[r.z] = a = n));
            break;
          }
      for (n = 0; n != i; ++n) if (e[n].numFmtId === a) return n;
      return (
        (e[i] = {
          numFmtId: a,
          fontId: 0,
          fillId: 0,
          borderId: 0,
          xfId: 0,
          applyNumberFormat: 1,
        }),
        i
      );
    }
    function ap(e, r, t) {
      if (e && e["!ref"]) {
        var a = Ge(e["!ref"]);
        if (a.e.c < a.s.c || a.e.r < a.s.r)
          throw new Error("Bad range (" + t + "): " + e["!ref"]);
      }
    }
    var vp = [
        "objects",
        "scenarios",
        "selectLockedCells",
        "selectUnlockedCells",
      ],
      gp = [
        "formatColumns",
        "formatRows",
        "formatCells",
        "insertColumns",
        "insertRows",
        "insertHyperlinks",
        "deleteColumns",
        "deleteRows",
        "sort",
        "autoFilter",
        "pivotTables",
      ];
    function Op(e, r, t, a) {
      if (
        (e.c && t["!comments"].push([r, e.c]),
        (void 0 === e.v && "string" != typeof e.f) || ("z" === e.t && !e.f))
      )
        return "";
      var n = "",
        i = e.t,
        s = e.v;
      if ("z" !== e.t)
        switch (e.t) {
          case "b":
            n = e.v ? "1" : "0";
            break;
          case "n":
            n = "" + e.v;
            break;
          case "e":
            n = It[e.v];
            break;
          case "d":
            (a && a.cellDates
              ? (n = nr(e.v, -1).toISOString())
              : (((e = je(e)).t = "n"), (n = "" + (e.v = Ar(nr(e.v))))),
              typeof e.z > "u" && (e.z = we[14]));
            break;
          default:
            n = e.v;
        }
      var c = yr("v", Je(n)),
        o = { r },
        f = Qt(a.cellXfs, e, a);
      switch ((0 !== f && (o.s = f), e.t)) {
        case "n":
        case "z":
          break;
        case "d":
          o.t = "d";
          break;
        case "b":
          o.t = "b";
          break;
        case "e":
          o.t = "e";
          break;
        default:
          if (null == e.v) {
            delete e.t;
            break;
          }
          if (e.v.length > 32767)
            throw new Error("Text length must not exceed 32767 characters");
          if (a && a.bookSST) {
            ((c = yr("v", "" + ys(a.Strings, e.v, a.revStrings))), (o.t = "s"));
            break;
          }
          o.t = "str";
      }
      if ((e.t != i && ((e.t = i), (e.v = s)), "string" == typeof e.f && e.f)) {
        var l =
          e.F && e.F.slice(0, r.length) == r ? { t: "array", ref: e.F } : null;
        c = ce("f", Je(e.f), l) + (null != e.v ? c : "");
      }
      return (
        e.l && t["!links"].push([r, e.l]),
        e.D && (o.cm = 1),
        ce("c", c, o)
      );
    }
    function Xo(e, r, t, a) {
      var s,
        n = [or, ce("worksheet", null, { xmlns: zt[0], "xmlns:r": _r.r })],
        c = "",
        o = t.Sheets[t.SheetNames[e]];
      null == o && (o = {});
      var f = o["!ref"] || "A1",
        l = Ge(f);
      if (l.e.c > 16383 || l.e.r > 1048575) {
        if (r.WTF)
          throw new Error("Range " + f + " exceeds format limit A1:XFD1048576");
        ((l.e.c = Math.min(l.e.c, 16383)),
          (l.e.r = Math.min(l.e.c, 1048575)),
          (f = Ne(l)));
      }
      (a || (a = {}), (o["!comments"] = []));
      var h = [];
      ((function pp(e, r, t, a, n) {
        var i = !1,
          s = {},
          c = null;
        if ("xlsx" !== a.bookType && r.vbaraw) {
          var o = r.SheetNames[t];
          try {
            r.Workbook && (o = r.Workbook.Sheets[t].CodeName || o);
          } catch {}
          ((i = !0), (s.codeName = gt(Je(o))));
        }
        if (e && e["!outline"]) {
          var f = { summaryBelow: 1, summaryRight: 1 };
          (e["!outline"].above && (f.summaryBelow = 0),
            e["!outline"].left && (f.summaryRight = 0),
            (c = (c || "") + ce("outlinePr", null, f)));
        }
        (!i && !c) || (n[n.length] = ce("sheetPr", c, s));
      })(o, t, e, r, n),
        (n[n.length] = ce("dimension", null, { ref: f })),
        (n[n.length] = (function Np(e, r, t, a) {
          var n = { workbookViewId: "0" };
          return (
            (((a || {}).Workbook || {}).Views || [])[0] &&
              (n.rightToLeft = a.Workbook.Views[0].RTL ? "1" : "0"),
            ce("sheetViews", ce("sheetView", null, n), {})
          );
        })(0, 0, 0, t)),
        r.sheetFormat &&
          (n[n.length] = ce("sheetFormatPr", null, {
            defaultRowHeight: r.sheetFormat.defaultRowHeight || "16",
            baseColWidth: r.sheetFormat.baseColWidth || "10",
            outlineLevelRow: r.sheetFormat.outlineLevelRow || "7",
          })),
        null != o["!cols"] &&
          o["!cols"].length > 0 &&
          (n[n.length] = (function kp(e, r) {
            for (var a, t = ["<cols>"], n = 0; n != r.length; ++n)
              (a = r[n]) && (t[t.length] = ce("col", null, mi(n, a)));
            return ((t[t.length] = "</cols>"), t.join(""));
          })(0, o["!cols"])),
        (n[(s = n.length)] = "<sheetData/>"),
        (o["!links"] = []),
        null != o["!ref"] &&
          ((c = (function Lp(e, r, t, a) {
            var o,
              _,
              n = [],
              i = [],
              s = Ge(e["!ref"]),
              c = "",
              f = "",
              l = [],
              h = 0,
              d = 0,
              x = e["!rows"],
              m = Array.isArray(e),
              u = { r: f },
              A = -1;
            for (d = s.s.c; d <= s.e.c; ++d) l[d] = er(d);
            for (h = s.s.r; h <= s.e.r; ++h) {
              for (i = [], f = fr(h), d = s.s.c; d <= s.e.c; ++d) {
                o = l[d] + f;
                var T = m ? (e[h] || [])[d] : e[o];
                void 0 !== T && null != (c = Op(T, o, e, r)) && i.push(c);
              }
              (i.length > 0 || (x && x[h])) &&
                ((u = { r: f }),
                x &&
                  x[h] &&
                  ((_ = x[h]).hidden && (u.hidden = 1),
                  (A = -1),
                  _.hpx ? (A = gn(_.hpx)) : _.hpt && (A = _.hpt),
                  A > -1 && ((u.ht = A), (u.customHeight = 1)),
                  _.level && (u.outlineLevel = _.level)),
                (n[n.length] = ce("row", i.join(""), u)));
            }
            if (x)
              for (; h < x.length; ++h)
                x &&
                  x[h] &&
                  ((u = { r: h + 1 }),
                  (_ = x[h]).hidden && (u.hidden = 1),
                  (A = -1),
                  _.hpx ? (A = gn(_.hpx)) : _.hpt && (A = _.hpt),
                  A > -1 && ((u.ht = A), (u.customHeight = 1)),
                  _.level && (u.outlineLevel = _.level),
                  (n[n.length] = ce("row", "", u)));
            return n.join("");
          })(o, r)),
          c.length > 0 && (n[n.length] = c)),
        n.length > s + 1 &&
          ((n[n.length] = "</sheetData>"), (n[s] = n[s].replace("/>", ">"))),
        o["!protect"] &&
          (n[n.length] = (function Ep(e) {
            var r = { sheet: 1 };
            return (
              vp.forEach(function (t) {
                null != e[t] && e[t] && (r[t] = "1");
              }),
              gp.forEach(function (t) {
                null != e[t] && !e[t] && (r[t] = "0");
              }),
              e.password &&
                (r.password = ps(e.password).toString(16).toUpperCase()),
              ce("sheetProtection", null, r)
            );
          })(o["!protect"])),
        null != o["!autofilter"] &&
          (n[n.length] = (function yp(e, r, t, a) {
            var n = "string" == typeof e.ref ? e.ref : Ne(e.ref);
            (t.Workbook || (t.Workbook = { Sheets: [] }),
              t.Workbook.Names || (t.Workbook.Names = []));
            var i = t.Workbook.Names,
              s = Gr(n);
            s.s.r == s.e.r && ((s.e.r = Gr(r["!ref"]).e.r), (n = Ne(s)));
            for (var c = 0; c < i.length; ++c) {
              var o = i[c];
              if ("_xlnm._FilterDatabase" == o.Name && o.Sheet == a) {
                o.Ref = "'" + t.SheetNames[a] + "'!" + n;
                break;
              }
            }
            return (
              c == i.length &&
                i.push({
                  Name: "_xlnm._FilterDatabase",
                  Sheet: a,
                  Ref: "'" + t.SheetNames[a] + "'!" + n,
                }),
              ce("autoFilter", null, { ref: n })
            );
          })(o["!autofilter"], o, t, e)),
        null != o["!merges"] &&
          o["!merges"].length > 0 &&
          (n[n.length] = (function mp(e) {
            if (0 === e.length) return "";
            for (
              var r = '<mergeCells count="' + e.length + '">', t = 0;
              t != e.length;
              ++t
            )
              r += '<mergeCell ref="' + Ne(e[t]) + '"/>';
            return r + "</mergeCells>";
          })(o["!merges"])));
      var x,
        d = -1,
        m = -1;
      return (
        o["!links"].length > 0 &&
          ((n[n.length] = "<hyperlinks>"),
          o["!links"].forEach(function (u) {
            u[1].Target &&
              ((x = { ref: u[0] }),
              "#" != u[1].Target.charAt(0) &&
                ((m = Xe(a, -1, Je(u[1].Target).replace(/#.*$/, ""), Oe.HLINK)),
                (x["r:id"] = "rId" + m)),
              (d = u[1].Target.indexOf("#")) > -1 &&
                (x.location = Je(u[1].Target.slice(d + 1))),
              u[1].Tooltip && (x.tooltip = Je(u[1].Tooltip)),
              (n[n.length] = ce("hyperlink", null, x)));
          }),
          (n[n.length] = "</hyperlinks>")),
        delete o["!links"],
        null != o["!margins"] &&
          (n[n.length] = (function Sp(e) {
            return (Sa(e), ce("pageMargins", null, e));
          })(o["!margins"])),
        (!r || r.ignoreEC || null == r.ignoreEC) &&
          (n[n.length] = yr(
            "ignoredErrors",
            ce("ignoredError", null, { numberStoredAsText: 1, sqref: f }),
          )),
        h.length > 0 &&
          ((m = Xe(a, -1, "../drawings/drawing" + (e + 1) + ".xml", Oe.DRAW)),
          (n[n.length] = ce("drawing", null, { "r:id": "rId" + m })),
          (o["!drawing"] = h)),
        o["!comments"].length > 0 &&
          ((m = Xe(a, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", Oe.VML)),
          (n[n.length] = ce("legacyDrawing", null, { "r:id": "rId" + m })),
          (o["!legacy"] = m)),
        n.length > 1 &&
          ((n[n.length] = "</worksheet>"), (n[1] = n[1].replace("/>", ">"))),
        n.join("")
      );
    }
    function Dp(e, r, t, a) {
      var n = (function Pp(e, r, t) {
        var a = j(145),
          n = (t["!rows"] || [])[e] || {};
        (a.write_shift(4, e), a.write_shift(4, 0));
        var i = 320;
        (n.hpx ? (i = 20 * gn(n.hpx)) : n.hpt && (i = 20 * n.hpt),
          a.write_shift(2, i),
          a.write_shift(1, 0));
        var s = 0;
        (n.level && (s |= n.level),
          n.hidden && (s |= 16),
          (n.hpx || n.hpt) && (s |= 32),
          a.write_shift(1, s),
          a.write_shift(1, 0));
        var c = 0,
          o = a.l;
        a.l += 4;
        for (var f = { r: e, c: 0 }, l = 0; l < 16; ++l)
          if (!(r.s.c > (l + 1) << 10 || r.e.c < l << 10)) {
            for (var h = -1, d = -1, x = l << 10; x < (l + 1) << 10; ++x)
              ((f.c = x),
                (Array.isArray(t) ? (t[f.r] || [])[f.c] : t[Ce(f)]) &&
                  (h < 0 && (h = x), (d = x)));
            h < 0 || (++c, a.write_shift(4, h), a.write_shift(4, d));
          }
        var u = a.l;
        return (
          (a.l = o),
          a.write_shift(4, c),
          (a.l = u),
          a.length > a.l ? a.slice(0, a.l) : a
        );
      })(a, t, r);
      (n.length > 17 || (r["!rows"] || [])[a]) && re(e, 0, n);
    }
    var Mp = ma,
      Bp = Ma;
    var Ev = ma,
      Tv = Ma,
      Yo = ["left", "right", "top", "bottom", "header", "footer"];
    function Bv(e, r, t, a, n, i, s) {
      if (void 0 === r.v) return !1;
      var c = "";
      switch (r.t) {
        case "b":
          c = r.v ? "1" : "0";
          break;
        case "d":
          (((r = je(r)).z = r.z || we[14]), (r.v = Ar(nr(r.v))), (r.t = "n"));
          break;
        case "n":
        case "e":
          c = "" + r.v;
          break;
        default:
          c = r.v;
      }
      var o = { r: t, c: a };
      switch (
        ((o.s = Qt(n.cellXfs, r, n)),
        r.l && i["!links"].push([Ce(o), r.l]),
        r.c && i["!comments"].push([Ce(o), r.c]),
        r.t)
      ) {
        case "s":
        case "str":
          return (
            n.bookSST
              ? ((c = ys(n.Strings, r.v, n.revStrings)),
                (o.t = "s"),
                (o.v = c),
                s
                  ? re(
                      e,
                      18,
                      (function av(e, r, t) {
                        return (
                          null == t && (t = j(8)),
                          xa(r, t),
                          t.write_shift(4, r.v),
                          t
                        );
                      })(0, o),
                    )
                  : re(
                      e,
                      7,
                      (function rv(e, r, t) {
                        return (
                          null == t && (t = j(12)),
                          ha(r, t),
                          t.write_shift(4, r.v),
                          t
                        );
                      })(0, o),
                    ))
              : ((o.t = "str"),
                s
                  ? re(
                      e,
                      17,
                      (function mv(e, r, t) {
                        return (
                          null == t && (t = j(8 + 4 * e.v.length)),
                          xa(r, t),
                          wr(e.v, t),
                          t.length > t.l ? t.slice(0, t.l) : t
                        );
                      })(r, o),
                    )
                  : re(
                      e,
                      6,
                      (function dv(e, r, t) {
                        return (
                          null == t && (t = j(12 + 4 * e.v.length)),
                          ha(r, t),
                          wr(e.v, t),
                          t.length > t.l ? t.slice(0, t.l) : t
                        );
                      })(r, o),
                    )),
            !0
          );
        case "n":
          return (
            r.v == (0 | r.v) && r.v > -1e3 && r.v < 1e3
              ? s
                ? re(
                    e,
                    13,
                    (function lv(e, r, t) {
                      return (null == t && (t = j(8)), xa(r, t), pc(e.v, t), t);
                    })(r, o),
                  )
                : re(
                    e,
                    2,
                    (function ov(e, r, t) {
                      return (
                        null == t && (t = j(12)),
                        ha(r, t),
                        pc(e.v, t),
                        t
                      );
                    })(r, o),
                  )
              : s
                ? re(
                    e,
                    16,
                    (function sv(e, r, t) {
                      return (
                        null == t && (t = j(12)),
                        xa(r, t),
                        _a(e.v, t),
                        t
                      );
                    })(r, o),
                  )
                : re(
                    e,
                    5,
                    (function iv(e, r, t) {
                      return (
                        null == t && (t = j(16)),
                        ha(r, t),
                        _a(e.v, t),
                        t
                      );
                    })(r, o),
                  ),
            !0
          );
        case "b":
          return (
            (o.t = "b"),
            s
              ? re(
                  e,
                  15,
                  (function Zp(e, r, t) {
                    return (
                      null == t && (t = j(5)),
                      xa(r, t),
                      t.write_shift(1, e.v ? 1 : 0),
                      t
                    );
                  })(r, o),
                )
              : re(
                  e,
                  4,
                  (function zp(e, r, t) {
                    return (
                      null == t && (t = j(9)),
                      ha(r, t),
                      t.write_shift(1, e.v ? 1 : 0),
                      t
                    );
                  })(r, o),
                ),
            !0
          );
        case "e":
          return (
            (o.t = "e"),
            s
              ? re(
                  e,
                  14,
                  (function qp(e, r, t) {
                    return (
                      null == t && (t = j(8)),
                      xa(r, t),
                      t.write_shift(1, e.v),
                      t.write_shift(2, 0),
                      t.write_shift(1, 0),
                      t
                    );
                  })(r, o),
                )
              : re(
                  e,
                  3,
                  (function jp(e, r, t) {
                    return (
                      null == t && (t = j(9)),
                      ha(r, t),
                      t.write_shift(1, e.v),
                      t
                    );
                  })(r, o),
                ),
            !0
          );
      }
      return (
        s
          ? re(
              e,
              12,
              (function Kp(e, r, t) {
                return (null == t && (t = j(4)), xa(r, t));
              })(0, o),
            )
          : re(
              e,
              1,
              (function Vp(e, r, t) {
                return (null == t && (t = j(8)), ha(r, t));
              })(0, o),
            ),
        !0
      );
    }
    function Jv(e, r, t, a) {
      var n = Ur(),
        i = t.SheetNames[e],
        s = t.Sheets[i] || {},
        c = i;
      try {
        t && t.Workbook && (c = t.Workbook.Sheets[e].CodeName || c);
      } catch {}
      var o = Ge(s["!ref"] || "A1");
      if (o.e.c > 16383 || o.e.r > 1048575) {
        if (r.WTF)
          throw new Error(
            "Range " +
              (s["!ref"] || "A1") +
              " exceeds format limit A1:XFD1048576",
          );
        ((o.e.c = Math.min(o.e.c, 16383)), (o.e.r = Math.min(o.e.c, 1048575)));
      }
      return (
        (s["!links"] = []),
        (s["!comments"] = []),
        re(n, 129),
        (t.vbaraw || s["!outline"]) &&
          re(
            n,
            147,
            (function Wp(e, r, t) {
              null == t && (t = j(84 + 4 * e.length));
              var a = 192;
              (r && (r.above && (a &= -65), r.left && (a &= -129)),
                t.write_shift(1, a));
              for (var n = 1; n < 3; ++n) t.write_shift(1, 0);
              return (
                Qn({ auto: 1 }, t),
                t.write_shift(-4, -1),
                t.write_shift(-4, -1),
                _c(e, t),
                t.slice(0, t.l)
              );
            })(c, s["!outline"]),
          ),
        re(n, 148, Bp(o)),
        (function Yv(e, r, t) {
          (re(e, 133),
            re(
              e,
              137,
              (function Iv(e, r, t) {
                null == t && (t = j(30));
                var a = 924;
                return (
                  (((r || {}).Views || [])[0] || {}).RTL && (a |= 32),
                  t.write_shift(2, a),
                  t.write_shift(4, 0),
                  t.write_shift(4, 0),
                  t.write_shift(4, 0),
                  t.write_shift(1, 0),
                  t.write_shift(1, 0),
                  t.write_shift(2, 0),
                  t.write_shift(2, 100),
                  t.write_shift(2, 0),
                  t.write_shift(2, 0),
                  t.write_shift(2, 0),
                  t.write_shift(4, 0),
                  t
                );
              })(0, t),
            ),
            re(e, 138),
            re(e, 134));
        })(n, 0, t.Workbook),
        (function Wv(e, r) {
          !r ||
            !r["!cols"] ||
            (re(e, 390),
            r["!cols"].forEach(function (t, a) {
              t &&
                re(
                  e,
                  60,
                  (function Fv(e, r, t) {
                    null == t && (t = j(18));
                    var a = mi(e, r);
                    (t.write_shift(-4, e),
                      t.write_shift(-4, e),
                      t.write_shift(4, 256 * (a.width || 10)),
                      t.write_shift(4, 0));
                    var n = 0;
                    return (
                      r.hidden && (n |= 1),
                      "number" == typeof a.width && (n |= 2),
                      r.level && (n |= r.level << 8),
                      t.write_shift(2, n),
                      t
                    );
                  })(a, t),
                );
            }),
            re(e, 391));
        })(n, s),
        (function Uv(e, r, t, a) {
          var n = Ge(r["!ref"] || "A1"),
            s = "",
            c = [];
          re(e, 145);
          var o = Array.isArray(r),
            f = n.e.r;
          r["!rows"] && (f = Math.max(n.e.r, r["!rows"].length - 1));
          for (var l = n.s.r; l <= f; ++l) {
            ((s = fr(l)), Dp(e, r, n, l));
            var h = !1;
            if (l <= n.e.r)
              for (var d = n.s.c; d <= n.e.c; ++d) {
                l === n.s.r && (c[d] = er(d));
                var x = o ? (r[l] || [])[d] : r[c[d] + s];
                h = !!x && Bv(e, x, l, d, a, r, h);
              }
          }
          re(e, 146);
        })(n, s, 0, r),
        (function zv(e, r) {
          r["!protect"] &&
            re(
              e,
              535,
              (function bv(e, r) {
                return (
                  null == r && (r = j(66)),
                  r.write_shift(2, e.password ? ps(e.password) : 0),
                  r.write_shift(4, 1),
                  [
                    ["objects", !1],
                    ["scenarios", !1],
                    ["formatCells", !0],
                    ["formatColumns", !0],
                    ["formatRows", !0],
                    ["insertColumns", !0],
                    ["insertRows", !0],
                    ["insertHyperlinks", !0],
                    ["deleteColumns", !0],
                    ["deleteRows", !0],
                    ["selectLockedCells", !1],
                    ["sort", !0],
                    ["autoFilter", !0],
                    ["pivotTables", !0],
                    ["selectUnlockedCells", !1],
                  ].forEach(function (t) {
                    r.write_shift(
                      4,
                      t[1]
                        ? null == e[t[0]] || e[t[0]]
                          ? 0
                          : 1
                        : null != e[t[0]] && e[t[0]]
                          ? 0
                          : 1,
                    );
                  }),
                  r
                );
              })(r["!protect"]),
            );
        })(n, s),
        (function Kv(e, r, t, a) {
          if (r["!autofilter"]) {
            var n = r["!autofilter"],
              i = "string" == typeof n.ref ? n.ref : Ne(n.ref);
            (t.Workbook || (t.Workbook = { Sheets: [] }),
              t.Workbook.Names || (t.Workbook.Names = []));
            var s = t.Workbook.Names,
              c = Gr(i);
            c.s.r == c.e.r && ((c.e.r = Gr(r["!ref"]).e.r), (i = Ne(c)));
            for (var o = 0; o < s.length; ++o) {
              var f = s[o];
              if ("_xlnm._FilterDatabase" == f.Name && f.Sheet == a) {
                f.Ref = "'" + t.SheetNames[a] + "'!" + i;
                break;
              }
            }
            (o == s.length &&
              s.push({
                Name: "_xlnm._FilterDatabase",
                Sheet: a,
                Ref: "'" + t.SheetNames[a] + "'!" + i,
              }),
              re(e, 161, Ma(Ge(i))),
              re(e, 162));
          }
        })(n, s, t, e),
        (function Gv(e, r) {
          !r ||
            !r["!merges"] ||
            (re(
              e,
              177,
              (function Av(e, r) {
                return (null == r && (r = j(4)), r.write_shift(4, e), r);
              })(r["!merges"].length),
            ),
            r["!merges"].forEach(function (t) {
              re(e, 176, Tv(t));
            }),
            re(e, 178));
        })(n, s),
        (function Vv(e, r, t) {
          (r["!links"].forEach(function (a) {
            if (a[1].Target) {
              var n = Xe(t, -1, a[1].Target.replace(/#.*$/, ""), Oe.HLINK);
              re(
                e,
                494,
                (function wv(e, r) {
                  var t = j(
                    50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length),
                  );
                  (Ma({ s: ur(e[0]), e: ur(e[0]) }, t), as("rId" + r, t));
                  var a = e[1].Target.indexOf("#");
                  return (
                    wr((-1 == a ? "" : e[1].Target.slice(a + 1)) || "", t),
                    wr(e[1].Tooltip || "", t),
                    wr("", t),
                    t.slice(0, t.l)
                  );
                })(a, n),
              );
            }
          }),
            delete r["!links"]);
        })(n, s, a),
        s["!margins"] &&
          re(
            n,
            476,
            (function Nv(e, r) {
              return (
                null == r && (r = j(48)),
                Sa(e),
                Yo.forEach(function (t) {
                  _a(e[t], r);
                }),
                r
              );
            })(s["!margins"]),
          ),
        (!r || r.ignoreEC || null == r.ignoreEC) &&
          (function Hv(e, r) {
            !r ||
              !r["!ref"] ||
              (re(e, 648),
              re(
                e,
                649,
                (function Lv(e) {
                  var r = j(24);
                  return (
                    r.write_shift(4, 4),
                    r.write_shift(4, 1),
                    Ma(e, r),
                    r
                  );
                })(Ge(r["!ref"])),
              ),
              re(e, 650));
          })(n, s),
        (function Xv(e, r, t, a) {
          if (r["!comments"].length > 0) {
            var n = Xe(
              a,
              -1,
              "../drawings/vmlDrawing" + (t + 1) + ".vml",
              Oe.VML,
            );
            (re(e, 551, as("rId" + n)), (r["!legacy"] = n));
          }
        })(n, s, e, a),
        re(n, 130),
        n.end()
      );
    }
    var Rs = [
        ["allowRefreshQuery", !1, "bool"],
        ["autoCompressPictures", !0, "bool"],
        ["backupFile", !1, "bool"],
        ["checkCompatibility", !1, "bool"],
        ["CodeName", ""],
        ["date1904", !1, "bool"],
        ["defaultThemeVersion", 0, "int"],
        ["filterPrivacy", !1, "bool"],
        ["hidePivotFieldList", !1, "bool"],
        ["promptedSolutions", !1, "bool"],
        ["publishItems", !1, "bool"],
        ["refreshAllConnections", !1, "bool"],
        ["saveExternalLinkValues", !0, "bool"],
        ["showBorderUnselectedTables", !0, "bool"],
        ["showInkAnnotation", !0, "bool"],
        ["showObjects", "all"],
        ["showPivotChartFilter", !1, "bool"],
        ["updateLinks", "userSet"],
      ],
      s2 = "][*?/\\".split("");
    function $o(e, r) {
      if (e.length > 31) {
        if (r) return !1;
        throw new Error("Sheet names cannot exceed 31 chars");
      }
      var t = !0;
      return (
        s2.forEach(function (a) {
          if (-1 != e.indexOf(a)) {
            if (!r) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
            t = !1;
          }
        }),
        t
      );
    }
    function Qo(e) {
      var r = [or];
      r[r.length] = ce("workbook", null, { xmlns: zt[0], "xmlns:r": _r.r });
      var t = e.Workbook && (e.Workbook.Names || []).length > 0,
        a = { codeName: "ThisWorkbook" };
      (e.Workbook &&
        e.Workbook.WBProps &&
        (Rs.forEach(function (c) {
          null != e.Workbook.WBProps[c[0]] &&
            e.Workbook.WBProps[c[0]] != c[1] &&
            (a[c[0]] = e.Workbook.WBProps[c[0]]);
        }),
        e.Workbook.WBProps.CodeName &&
          ((a.codeName = e.Workbook.WBProps.CodeName), delete a.CodeName)),
        (r[r.length] = ce("workbookPr", null, a)));
      var n = (e.Workbook && e.Workbook.Sheets) || [],
        i = 0;
      if (n && n[0] && n[0].Hidden) {
        for (
          r[r.length] = "<bookViews>", i = 0;
          i != e.SheetNames.length && n[i] && n[i].Hidden;
          ++i
        );
        (i == e.SheetNames.length && (i = 0),
          (r[r.length] =
            '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>'),
          (r[r.length] = "</bookViews>"));
      }
      for (r[r.length] = "<sheets>", i = 0; i != e.SheetNames.length; ++i) {
        var s = { name: Je(e.SheetNames[i].slice(0, 31)) };
        if (((s.sheetId = "" + (i + 1)), (s["r:id"] = "rId" + (i + 1)), n[i]))
          switch (n[i].Hidden) {
            case 1:
              s.state = "hidden";
              break;
            case 2:
              s.state = "veryHidden";
          }
        r[r.length] = ce("sheet", null, s);
      }
      return (
        (r[r.length] = "</sheets>"),
        t &&
          ((r[r.length] = "<definedNames>"),
          e.Workbook &&
            e.Workbook.Names &&
            e.Workbook.Names.forEach(function (c) {
              var o = { name: c.Name };
              (c.Comment && (o.comment = c.Comment),
                null != c.Sheet && (o.localSheetId = "" + c.Sheet),
                c.Hidden && (o.hidden = "1"),
                c.Ref && (r[r.length] = ce("definedName", Je(c.Ref), o)));
            }),
          (r[r.length] = "</definedNames>")),
        r.length > 2 &&
          ((r[r.length] = "</workbook>"), (r[1] = r[1].replace("/>", ">"))),
        r.join("")
      );
    }
    function u2(e, r) {
      return (
        r || (r = j(127)),
        r.write_shift(4, e.Hidden),
        r.write_shift(4, e.iTabID),
        as(e.strRelID, r),
        wr(e.name.slice(0, 31), r),
        r.length > r.l ? r.slice(0, r.l) : r
      );
    }
    function T2(e, r) {
      var t = Ur();
      return (
        re(t, 131),
        re(
          t,
          128,
          (function v2(e, r) {
            r || (r = j(127));
            for (var t = 0; 4 != t; ++t) r.write_shift(4, 0);
            return (
              wr("SheetJS", r),
              wr($a.version, r),
              wr($a.version, r),
              wr("7262", r),
              r.length > r.l ? r.slice(0, r.l) : r
            );
          })(),
        ),
        re(
          t,
          153,
          (function d2(e, r) {
            r || (r = j(72));
            var t = 0;
            return (
              e && e.filterPrivacy && (t |= 8),
              r.write_shift(4, t),
              r.write_shift(4, 0),
              _c((e && e.CodeName) || "ThisWorkbook", r),
              r.slice(0, r.l)
            );
          })((e.Workbook && e.Workbook.WBProps) || null),
        ),
        (function E2(e, r) {
          if (r.Workbook && r.Workbook.Sheets) {
            for (
              var t = r.Workbook.Sheets, a = 0, n = -1, i = -1;
              a < t.length;
              ++a
            )
              !t[a] || (!t[a].Hidden && -1 == n)
                ? (n = a)
                : 1 == t[a].Hidden && -1 == i && (i = a);
            i > n ||
              (re(e, 135),
              re(
                e,
                158,
                (function g2(e, r) {
                  return (
                    r || (r = j(29)),
                    r.write_shift(-4, 0),
                    r.write_shift(-4, 460),
                    r.write_shift(4, 28800),
                    r.write_shift(4, 17600),
                    r.write_shift(4, 500),
                    r.write_shift(4, e),
                    r.write_shift(4, e),
                    r.write_shift(1, 120),
                    r.length > r.l ? r.slice(0, r.l) : r
                  );
                })(n),
              ),
              re(e, 136));
          }
        })(t, e),
        (function p2(e, r) {
          re(e, 143);
          for (var t = 0; t != r.SheetNames.length; ++t)
            re(
              e,
              156,
              u2({
                Hidden:
                  (r.Workbook &&
                    r.Workbook.Sheets &&
                    r.Workbook.Sheets[t] &&
                    r.Workbook.Sheets[t].Hidden) ||
                  0,
                iTabID: t + 1,
                strRelID: "rId" + (t + 1),
                name: r.SheetNames[t],
              }),
            );
          re(e, 144);
        })(t, e),
        re(t, 132),
        t.end()
      );
    }
    function P2(e, r, t, a, n) {
      return (".bin" === r.slice(-4) ? Jv : Xo)(e, t, a, n);
    }
    function B2(e, r, t) {
      return (".bin" === r.slice(-4) ? Em : Ro)(e, t);
    }
    function rf(e) {
      return ce("NamedRange", null, {
        "ss:Name": e.Name,
        "ss:RefersTo": "=" + Ss(e.Ref, { r: 0, c: 0 }),
      });
    }
    function eg(e, r, t, a, n, i, s) {
      if (!e || (null == e.v && null == e.f)) return "";
      var c = {};
      if (
        (e.f && (c["ss:Formula"] = "=" + Je(Ss(e.f, s))),
        e.F && e.F.slice(0, r.length) == r)
      ) {
        var o = ur(e.F.slice(r.length + 1));
        c["ss:ArrayRange"] =
          "RC:R" +
          (o.r == s.r ? "" : "[" + (o.r - s.r) + "]") +
          "C" +
          (o.c == s.c ? "" : "[" + (o.c - s.c) + "]");
      }
      if (
        (e.l &&
          e.l.Target &&
          ((c["ss:HRef"] = Je(e.l.Target)),
          e.l.Tooltip && (c["x:HRefScreenTip"] = Je(e.l.Tooltip))),
        t["!merges"])
      )
        for (var f = t["!merges"], l = 0; l != f.length; ++l)
          f[l].s.c != s.c ||
            f[l].s.r != s.r ||
            (f[l].e.c > f[l].s.c && (c["ss:MergeAcross"] = f[l].e.c - f[l].s.c),
            f[l].e.r > f[l].s.r && (c["ss:MergeDown"] = f[l].e.r - f[l].s.r));
      var h = "",
        d = "";
      switch (e.t) {
        case "z":
          if (!a.sheetStubs) return "";
          break;
        case "n":
          ((h = "Number"), (d = String(e.v)));
          break;
        case "b":
          ((h = "Boolean"), (d = e.v ? "1" : "0"));
          break;
        case "e":
          ((h = "Error"), (d = It[e.v]));
          break;
        case "d":
          ((h = "DateTime"),
            (d = new Date(e.v).toISOString()),
            null == e.z && (e.z = e.z || we[14]));
          break;
        case "s":
          ((h = "String"),
            (d = (function Au(e) {
              return (e + "")
                .replace(Wi, function (t) {
                  return Gi[t];
                })
                .replace(K0, function (t) {
                  return (
                    "&#x" + t.charCodeAt(0).toString(16).toUpperCase() + ";"
                  );
                });
            })(e.v || "")));
      }
      var x = Qt(a.cellXfs, e, a);
      ((c["ss:StyleID"] = "s" + (21 + x)), (c["ss:Index"] = s.c + 1));
      var u =
        "z" == e.t
          ? ""
          : '<Data ss:Type="' + h + '">' + (null != e.v ? d : "") + "</Data>";
      return (
        (e.c || []).length > 0 &&
          (u += (function q2(e) {
            return e
              .map(function (r) {
                var t = (function Su(e) {
                    return e.replace(/(\r\n|[\r\n])/g, "&#10;");
                  })(r.t || ""),
                  a = ce("ss:Data", t, {
                    xmlns: "http://www.w3.org/TR/REC-html40",
                  });
                return ce("Comment", a, { "ss:Author": r.a });
              })
              .join("");
          })(e.c)),
        ce("Cell", u, c)
      );
    }
    function rg(e, r) {
      var t = '<Row ss:Index="' + (e + 1) + '"';
      return (
        r &&
          (r.hpt && !r.hpx && (r.hpx = fi(r.hpt)),
          r.hpx && (t += ' ss:AutoFitHeight="0" ss:Height="' + r.hpx + '"'),
          r.hidden && (t += ' ss:Hidden="1"')),
        t + ">"
      );
    }
    function ag(e, r, t) {
      var a = [],
        i = t.Sheets[t.SheetNames[e]],
        s = i
          ? (function j2(e, r, t, a) {
              if (!e || !((a || {}).Workbook || {}).Names) return "";
              for (var n = a.Workbook.Names, i = [], s = 0; s < n.length; ++s) {
                var c = n[s];
                c.Sheet == t && (c.Name.match(/^_xlfn\./) || i.push(rf(c)));
              }
              return i.join("");
            })(i, 0, e, t)
          : "";
      return (
        s.length > 0 && a.push("<Names>" + s + "</Names>"),
        (s = i
          ? (function tg(e, r, t, a) {
              if (!e["!ref"]) return "";
              var n = Ge(e["!ref"]),
                i = e["!merges"] || [],
                s = 0,
                c = [];
              e["!cols"] &&
                e["!cols"].forEach(function (_, A) {
                  $t(_);
                  var T = !!_.width,
                    g = mi(A, _),
                    O = { "ss:Index": A + 1 };
                  (T && (O["ss:Width"] = pn(g.width)),
                    _.hidden && (O["ss:Hidden"] = "1"),
                    c.push(ce("Column", null, O)));
                });
              for (var o = Array.isArray(e), f = n.s.r; f <= n.e.r; ++f) {
                for (
                  var l = [rg(f, (e["!rows"] || [])[f])], h = n.s.c;
                  h <= n.e.c;
                  ++h
                ) {
                  var d = !1;
                  for (s = 0; s != i.length; ++s)
                    if (!(
                      i[s].s.c > h ||
                      i[s].s.r > f ||
                      i[s].e.c < h ||
                      i[s].e.r < f
                    )) {
                      (i[s].s.c != h || i[s].s.r != f) && (d = !0);
                      break;
                    }
                  if (!d) {
                    var x = { r: f, c: h },
                      m = Ce(x);
                    l.push(eg(o ? (e[f] || [])[h] : e[m], m, e, r, 0, 0, x));
                  }
                }
                (l.push("</Row>"), l.length > 2 && c.push(l.join("")));
              }
              return c.join("");
            })(i, r)
          : ""),
        s.length > 0 && a.push("<Table>" + s + "</Table>"),
        a.push(
          (function Q2(e, r, t, a) {
            if (!e) return "";
            var n = [];
            if (
              (e["!margins"] &&
                (n.push("<PageSetup>"),
                e["!margins"].header &&
                  n.push(
                    ce("Header", null, { "x:Margin": e["!margins"].header }),
                  ),
                e["!margins"].footer &&
                  n.push(
                    ce("Footer", null, { "x:Margin": e["!margins"].footer }),
                  ),
                n.push(
                  ce("PageMargins", null, {
                    "x:Bottom": e["!margins"].bottom || "0.75",
                    "x:Left": e["!margins"].left || "0.7",
                    "x:Right": e["!margins"].right || "0.7",
                    "x:Top": e["!margins"].top || "0.75",
                  }),
                ),
                n.push("</PageSetup>")),
              a && a.Workbook && a.Workbook.Sheets && a.Workbook.Sheets[t])
            )
              if (a.Workbook.Sheets[t].Hidden)
                n.push(
                  ce(
                    "Visible",
                    1 == a.Workbook.Sheets[t].Hidden
                      ? "SheetHidden"
                      : "SheetVeryHidden",
                    {},
                  ),
                );
              else {
                for (
                  var i = 0;
                  i < t &&
                  (!a.Workbook.Sheets[i] || a.Workbook.Sheets[i].Hidden);
                  ++i
                );
                i == t && n.push("<Selected/>");
              }
            return (
              ((((a || {}).Workbook || {}).Views || [])[0] || {}).RTL &&
                n.push("<DisplayRightToLeft/>"),
              e["!protect"] &&
                (n.push(yr("ProtectContents", "True")),
                e["!protect"].objects && n.push(yr("ProtectObjects", "True")),
                e["!protect"].scenarios &&
                  n.push(yr("ProtectScenarios", "True")),
                null == e["!protect"].selectLockedCells ||
                e["!protect"].selectLockedCells
                  ? null != e["!protect"].selectUnlockedCells &&
                    !e["!protect"].selectUnlockedCells &&
                    n.push(yr("EnableSelection", "UnlockedCells"))
                  : n.push(yr("EnableSelection", "NoSelection")),
                [
                  ["formatCells", "AllowFormatCells"],
                  ["formatColumns", "AllowSizeCols"],
                  ["formatRows", "AllowSizeRows"],
                  ["insertColumns", "AllowInsertCols"],
                  ["insertRows", "AllowInsertRows"],
                  ["insertHyperlinks", "AllowInsertHyperlinks"],
                  ["deleteColumns", "AllowDeleteCols"],
                  ["deleteRows", "AllowDeleteRows"],
                  ["sort", "AllowSort"],
                  ["autoFilter", "AllowFilter"],
                  ["pivotTables", "AllowUsePivotTables"],
                ].forEach(function (s) {
                  e["!protect"][s[0]] && n.push("<" + s[1] + "/>");
                })),
              0 == n.length
                ? ""
                : ce("WorksheetOptions", n.join(""), { xmlns: jr.x })
            );
          })(i, 0, e, t),
        ),
        a.join("")
      );
    }
    function ng(e, r) {
      (r || (r = {}),
        e.SSF || (e.SSF = je(we)),
        e.SSF &&
          (Ia(),
          an(e.SSF),
          (r.revssf = Yn(e.SSF)),
          (r.revssf[e.SSF[65535]] = 0),
          (r.ssf = e.SSF),
          (r.cellXfs = []),
          Qt(r.cellXfs, {}, { revssf: { General: 0 } })));
      var t = [];
      (t.push(
        (function z2(e, r) {
          var t = [];
          return (
            e.Props &&
              t.push(
                (function Ah(e, r) {
                  var t = [];
                  return (
                    sr(us)
                      .map(function (a) {
                        for (var n = 0; n < Lt.length; ++n)
                          if (Lt[n][1] == a) return Lt[n];
                        for (n = 0; n < va.length; ++n)
                          if (va[n][1] == a) return va[n];
                        throw a;
                      })
                      .forEach(function (a) {
                        if (null != e[a[1]]) {
                          var n =
                            r && r.Props && null != r.Props[a[1]]
                              ? r.Props[a[1]]
                              : e[a[1]];
                          ("date" === a[2] &&
                            (n = new Date(n)
                              .toISOString()
                              .replace(/\.\d*Z/, "Z")),
                            "number" == typeof n
                              ? (n = String(n))
                              : !0 === n || !1 === n
                                ? (n = n ? "1" : "0")
                                : n instanceof Date &&
                                  (n = new Date(n)
                                    .toISOString()
                                    .replace(/\.\d*Z/, "")),
                            t.push(yr(us[a[1]] || a[1], n)));
                        }
                      }),
                    ce("DocumentProperties", t.join(""), { xmlns: jr.o })
                  );
                })(e.Props, r),
              ),
            e.Custprops &&
              t.push(
                (function Sh(e, r) {
                  var t = ["Worksheets", "SheetNames"],
                    a = "CustomDocumentProperties",
                    n = [];
                  return (
                    e &&
                      sr(e).forEach(function (i) {
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                          for (var s = 0; s < Lt.length; ++s)
                            if (i == Lt[s][1]) return;
                          for (s = 0; s < va.length; ++s)
                            if (i == va[s][1]) return;
                          for (s = 0; s < t.length; ++s) if (i == t[s]) return;
                          var c = e[i],
                            o = "string";
                          ("number" == typeof c
                            ? ((o = "float"), (c = String(c)))
                            : !0 === c || !1 === c
                              ? ((o = "boolean"), (c = c ? "1" : "0"))
                              : (c = String(c)),
                            n.push(ce(X0(i), c, { "dt:dt": o })));
                        }
                      }),
                    r &&
                      sr(r).forEach(function (i) {
                        if (
                          Object.prototype.hasOwnProperty.call(r, i) &&
                          (!e || !Object.prototype.hasOwnProperty.call(e, i))
                        ) {
                          var s = r[i],
                            c = "string";
                          ("number" == typeof s
                            ? ((c = "float"), (s = String(s)))
                            : !0 === s || !1 === s
                              ? ((c = "boolean"), (s = s ? "1" : "0"))
                              : s instanceof Date
                                ? ((c = "dateTime.tz"), (s = s.toISOString()))
                                : (s = String(s)),
                            n.push(ce(X0(i), s, { "dt:dt": c })));
                        }
                      }),
                    "<" +
                      a +
                      ' xmlns="' +
                      jr.o +
                      '">' +
                      n.join("") +
                      "</" +
                      a +
                      ">"
                  );
                })(e.Props, e.Custprops),
              ),
            t.join("")
          );
        })(e, r),
      ),
        t.push(""),
        t.push(""),
        t.push(""));
      for (var a = 0; a < e.SheetNames.length; ++a)
        t.push(
          ce("Worksheet", ag(a, r, e), { "ss:Name": Je(e.SheetNames[a]) }),
        );
      return (
        (t[2] = (function Z2(e, r) {
          var t = [
            '<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>',
          ];
          return (
            r.cellXfs.forEach(function (a, n) {
              var i = [];
              i.push(
                ce("NumberFormat", null, { "ss:Format": Je(we[a.numFmtId]) }),
              );
              var s = { "ss:ID": "s" + (21 + n) };
              t.push(ce("Style", i.join(""), s));
            }),
            ce("Styles", t.join(""))
          );
        })(0, r)),
        (t[3] = (function $2(e) {
          if (!((e || {}).Workbook || {}).Names) return "";
          for (var r = e.Workbook.Names, t = [], a = 0; a < r.length; ++a) {
            var n = r[a];
            null == n.Sheet && (n.Name.match(/^_xlfn\./) || t.push(rf(n)));
          }
          return ce("Names", t.join(""));
        })(e)),
        or +
          ce("Workbook", t.join(""), {
            xmlns: jr.ss,
            "xmlns:o": jr.o,
            "xmlns:x": jr.x,
            "xmlns:ss": jr.ss,
            "xmlns:dt": jr.dt,
            "xmlns:html": jr.html,
          })
      );
    }
    var Cn = {
      SI: "e0859ff2f94f6810ab9108002b27b3d9",
      DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
      UDI: "05d5cdd59c2e1b10939708002b2cf9ae",
    };
    var yn = {
      0: {
        f: function bp(e, r) {
          var t = {},
            a = e.l + r;
          ((t.r = e.read_shift(4)), (e.l += 4));
          var n = e.read_shift(2);
          e.l += 1;
          var i = e.read_shift(1);
          return (
            (e.l = a),
            7 & i && (t.level = 7 & i),
            16 & i && (t.hidden = !0),
            32 & i && (t.hpt = n / 20),
            t
          );
        },
      },
      1: {
        f: function Hp(e) {
          return [nt(e)];
        },
      },
      2: {
        f: function cv(e) {
          return [nt(e), ns(e), "n"];
        },
      },
      3: {
        f: function $p(e) {
          return [nt(e), e.read_shift(1), "e"];
        },
      },
      4: {
        f: function Yp(e) {
          return [nt(e), e.read_shift(1), "b"];
        },
      },
      5: {
        f: function nv(e) {
          return [nt(e), Lr(e), "n"];
        },
      },
      6: {
        f: function hv(e) {
          return [nt(e), Ir(e), "str"];
        },
      },
      7: {
        f: function ev(e) {
          return [nt(e), e.read_shift(4), "s"];
        },
      },
      8: {
        f: function gv(e, r, t) {
          var a = e.l + r,
            n = nt(e);
          n.r = t["!row"];
          var s = [n, Ir(e), "str"];
          if (t.cellFormula) {
            e.l += 2;
            var c = di(e, a - e.l, t);
            s[3] = Dr(c, 0, n, t.supbooks, t);
          } else e.l = a;
          return s;
        },
      },
      9: {
        f: function vv(e, r, t) {
          var a = e.l + r,
            n = nt(e);
          n.r = t["!row"];
          var s = [n, Lr(e), "n"];
          if (t.cellFormula) {
            e.l += 2;
            var c = di(e, a - e.l, t);
            s[3] = Dr(c, 0, n, t.supbooks, t);
          } else e.l = a;
          return s;
        },
      },
      10: {
        f: function _v(e, r, t) {
          var a = e.l + r,
            n = nt(e);
          n.r = t["!row"];
          var s = [n, e.read_shift(1), "b"];
          if (t.cellFormula) {
            e.l += 2;
            var c = di(e, a - e.l, t);
            s[3] = Dr(c, 0, n, t.supbooks, t);
          } else e.l = a;
          return s;
        },
      },
      11: {
        f: function pv(e, r, t) {
          var a = e.l + r,
            n = nt(e);
          n.r = t["!row"];
          var s = [n, e.read_shift(1), "e"];
          if (t.cellFormula) {
            e.l += 2;
            var c = di(e, a - e.l, t);
            s[3] = Dr(c, 0, n, t.supbooks, t);
          } else e.l = a;
          return s;
        },
      },
      12: {
        f: function Xp(e) {
          return [da(e)];
        },
      },
      13: {
        f: function fv(e) {
          return [da(e), ns(e), "n"];
        },
      },
      14: {
        f: function Qp(e) {
          return [da(e), e.read_shift(1), "e"];
        },
      },
      15: {
        f: function Jp(e) {
          return [da(e), e.read_shift(1), "b"];
        },
      },
      16: {
        f: function Ko(e) {
          return [da(e), Lr(e), "n"];
        },
      },
      17: {
        f: function xv(e) {
          return [da(e), Ir(e), "str"];
        },
      },
      18: {
        f: function tv(e) {
          return [da(e), e.read_shift(4), "s"];
        },
      },
      19: { f: es },
      20: {},
      21: {},
      22: {},
      23: {},
      24: {},
      25: {},
      26: {},
      27: {},
      28: {},
      29: {},
      30: {},
      31: {},
      32: {},
      33: {},
      34: {},
      35: { T: 1 },
      36: { T: -1 },
      37: { T: 1 },
      38: { T: -1 },
      39: {
        f: function m2(e, r, t) {
          var a = e.l + r;
          ((e.l += 4), (e.l += 1));
          var n = e.read_shift(4),
            i = Zu(e),
            s = $_(e, 0, t),
            c = rs(e);
          e.l = a;
          var o = { Name: i, Ptg: s };
          return (n < 268435455 && (o.Sheet = n), c && (o.Comment = c), o);
        },
      },
      40: {},
      42: {},
      43: {
        f: function hx(e, r, t) {
          var a = {};
          a.sz = e.read_shift(2) / 20;
          var n = (function Qu(e) {
            var r = e.read_shift(1);
            return (
              e.l++,
              {
                fBold: 1 & r,
                fItalic: 2 & r,
                fUnderline: 4 & r,
                fStrikeout: 8 & r,
                fOutline: 16 & r,
                fShadow: 32 & r,
                fCondense: 64 & r,
                fExtend: 128 & r,
              }
            );
          })(e);
          switch (
            (n.fItalic && (a.italic = 1),
            n.fCondense && (a.condense = 1),
            n.fExtend && (a.extend = 1),
            n.fShadow && (a.shadow = 1),
            n.fOutline && (a.outline = 1),
            n.fStrikeout && (a.strike = 1),
            700 === e.read_shift(2) && (a.bold = 1),
            e.read_shift(2))
          ) {
            case 1:
              a.vertAlign = "superscript";
              break;
            case 2:
              a.vertAlign = "subscript";
          }
          var s = e.read_shift(1);
          0 != s && (a.underline = s);
          var c = e.read_shift(1);
          c > 0 && (a.family = c);
          var o = e.read_shift(1);
          switch (
            (o > 0 && (a.charset = o),
            e.l++,
            (a.color = (function ju(e) {
              var r = {},
                a = e.read_shift(1) >>> 1,
                n = e.read_shift(1),
                i = e.read_shift(2, "i"),
                s = e.read_shift(1),
                c = e.read_shift(1),
                o = e.read_shift(1);
              switch ((e.l++, a)) {
                case 0:
                  r.auto = 1;
                  break;
                case 1:
                  r.index = n;
                  var f = pa[n];
                  f && (r.rgb = _n(f));
                  break;
                case 2:
                  r.rgb = _n([s, c, o]);
                  break;
                case 3:
                  r.theme = n;
              }
              return (0 != i && (r.tint = i > 0 ? i / 32767 : i / 32768), r);
            })(e)),
            e.read_shift(1))
          ) {
            case 1:
              a.scheme = "major";
              break;
            case 2:
              a.scheme = "minor";
          }
          return ((a.name = Ir(e)), a);
        },
      },
      44: {
        f: function lx(e, r) {
          return [e.read_shift(2), Ir(e)];
        },
      },
      45: { f: mx },
      46: { f: px },
      47: {
        f: function _x(e, r) {
          var t = e.l + r,
            a = e.read_shift(2),
            n = e.read_shift(2);
          return ((e.l = t), { ixfe: a, numFmtId: n });
        },
      },
      48: {},
      49: {
        f: function Hu(e) {
          return e.read_shift(4, "i");
        },
      },
      50: {},
      51: {
        f: function jx(e) {
          for (var r = [], t = e.read_shift(4); t-- > 0;)
            r.push([e.read_shift(4), e.read_shift(4)]);
          return r;
        },
      },
      52: { T: 1 },
      53: { T: -1 },
      54: { T: 1 },
      55: { T: -1 },
      56: { T: 1 },
      57: { T: -1 },
      58: {},
      59: {},
      60: {
        f: function oo(e, r, t) {
          if (!t.cellStyles) return Or(e, r);
          var a = t && t.biff >= 12 ? 4 : 2,
            n = e.read_shift(a),
            i = e.read_shift(a),
            s = e.read_shift(a),
            c = e.read_shift(a),
            o = e.read_shift(2);
          2 == a && (e.l += 2);
          var f = { s: n, e: i, w: s, ixfe: c, flags: o };
          return ((t.biff >= 5 || !t.biff) && (f.level = (o >> 8) & 7), f);
        },
      },
      62: {
        f: function uv(e) {
          return [nt(e), es(e), "is"];
        },
      },
      63: {
        f: function sm(e) {
          var r = {};
          r.i = e.read_shift(4);
          var t = {};
          ((t.r = e.read_shift(4)), (t.c = e.read_shift(4)), (r.r = Ce(t)));
          var a = e.read_shift(1);
          return (2 & a && (r.l = "1"), 8 & a && (r.a = "1"), r);
        },
      },
      64: { f: function Pv() {} },
      65: {},
      66: {},
      67: {},
      68: {},
      69: {},
      70: {},
      128: {},
      129: { T: 1 },
      130: { T: -1 },
      131: { T: 1, f: Or, p: 0 },
      132: { T: -1 },
      133: { T: 1 },
      134: { T: -1 },
      135: { T: 1 },
      136: { T: -1 },
      137: {
        T: 1,
        f: function Ov(e) {
          var r = e.read_shift(2);
          return ((e.l += 28), { RTL: 32 & r });
        },
      },
      138: { T: -1 },
      139: { T: 1 },
      140: { T: -1 },
      141: { T: 1 },
      142: { T: -1 },
      143: { T: 1 },
      144: { T: -1 },
      145: { T: 1 },
      146: { T: -1 },
      147: {
        f: function Gp(e, r) {
          var t = {},
            a = e[e.l];
          return (
            ++e.l,
            (t.above = !(64 & a)),
            (t.left = !(128 & a)),
            (e.l += 18),
            (t.name = Ju(e, r - 19)),
            t
          );
        },
      },
      148: { f: Mp, p: 16 },
      151: { f: function kv() {} },
      152: {},
      153: {
        f: function h2(e, r) {
          var t = {},
            a = e.read_shift(4);
          t.defaultThemeVersion = e.read_shift(4);
          var n = r > 8 ? Ir(e) : "";
          return (
            n.length > 0 && (t.CodeName = n),
            (t.autoCompressPictures = !!(65536 & a)),
            (t.backupFile = !!(64 & a)),
            (t.checkCompatibility = !!(4096 & a)),
            (t.date1904 = !!(1 & a)),
            (t.filterPrivacy = !!(8 & a)),
            (t.hidePivotFieldList = !!(1024 & a)),
            (t.promptedSolutions = !!(16 & a)),
            (t.publishItems = !!(2048 & a)),
            (t.refreshAllConnections = !!(262144 & a)),
            (t.saveExternalLinkValues = !!(128 & a)),
            (t.showBorderUnselectedTables = !!(4 & a)),
            (t.showInkAnnotation = !!(32 & a)),
            (t.showObjects = ["all", "placeholders", "none"][(a >> 13) & 3]),
            (t.showPivotChartFilter = !!(32768 & a)),
            (t.updateLinks = ["userSet", "never", "always"][(a >> 8) & 3]),
            t
          );
        },
      },
      154: {},
      155: {},
      156: {
        f: function l2(e, r) {
          var t = {};
          return (
            (t.Hidden = e.read_shift(4)),
            (t.iTabID = e.read_shift(4)),
            (t.strRelID = ts(e, r - 8)),
            (t.name = Ir(e)),
            t
          );
        },
      },
      157: {},
      158: {},
      159: {
        T: 1,
        f: function I1(e) {
          return [e.read_shift(4), e.read_shift(4)];
        },
      },
      160: { T: -1 },
      161: { T: 1, f: ma },
      162: { T: -1 },
      163: { T: 1 },
      164: { T: -1 },
      165: { T: 1 },
      166: { T: -1 },
      167: {},
      168: {},
      169: {},
      170: {},
      171: {},
      172: { T: 1 },
      173: { T: -1 },
      174: {},
      175: {},
      176: { f: Ev },
      177: { T: 1 },
      178: { T: -1 },
      179: { T: 1 },
      180: { T: -1 },
      181: { T: 1 },
      182: { T: -1 },
      183: { T: 1 },
      184: { T: -1 },
      185: { T: 1 },
      186: { T: -1 },
      187: { T: 1 },
      188: { T: -1 },
      189: { T: 1 },
      190: { T: -1 },
      191: { T: 1 },
      192: { T: -1 },
      193: { T: 1 },
      194: { T: -1 },
      195: { T: 1 },
      196: { T: -1 },
      197: { T: 1 },
      198: { T: -1 },
      199: { T: 1 },
      200: { T: -1 },
      201: { T: 1 },
      202: { T: -1 },
      203: { T: 1 },
      204: { T: -1 },
      205: { T: 1 },
      206: { T: -1 },
      207: { T: 1 },
      208: { T: -1 },
      209: { T: 1 },
      210: { T: -1 },
      211: { T: 1 },
      212: { T: -1 },
      213: { T: 1 },
      214: { T: -1 },
      215: { T: 1 },
      216: { T: -1 },
      217: { T: 1 },
      218: { T: -1 },
      219: { T: 1 },
      220: { T: -1 },
      221: { T: 1 },
      222: { T: -1 },
      223: { T: 1 },
      224: { T: -1 },
      225: { T: 1 },
      226: { T: -1 },
      227: { T: 1 },
      228: { T: -1 },
      229: { T: 1 },
      230: { T: -1 },
      231: { T: 1 },
      232: { T: -1 },
      233: { T: 1 },
      234: { T: -1 },
      235: { T: 1 },
      236: { T: -1 },
      237: { T: 1 },
      238: { T: -1 },
      239: { T: 1 },
      240: { T: -1 },
      241: { T: 1 },
      242: { T: -1 },
      243: { T: 1 },
      244: { T: -1 },
      245: { T: 1 },
      246: { T: -1 },
      247: { T: 1 },
      248: { T: -1 },
      249: { T: 1 },
      250: { T: -1 },
      251: { T: 1 },
      252: { T: -1 },
      253: { T: 1 },
      254: { T: -1 },
      255: { T: 1 },
      256: { T: -1 },
      257: { T: 1 },
      258: { T: -1 },
      259: { T: 1 },
      260: { T: -1 },
      261: { T: 1 },
      262: { T: -1 },
      263: { T: 1 },
      264: { T: -1 },
      265: { T: 1 },
      266: { T: -1 },
      267: { T: 1 },
      268: { T: -1 },
      269: { T: 1 },
      270: { T: -1 },
      271: { T: 1 },
      272: { T: -1 },
      273: { T: 1 },
      274: { T: -1 },
      275: { T: 1 },
      276: { T: -1 },
      277: {},
      278: { T: 1 },
      279: { T: -1 },
      280: { T: 1 },
      281: { T: -1 },
      282: { T: 1 },
      283: { T: 1 },
      284: { T: -1 },
      285: { T: 1 },
      286: { T: -1 },
      287: { T: 1 },
      288: { T: -1 },
      289: { T: 1 },
      290: { T: -1 },
      291: { T: 1 },
      292: { T: -1 },
      293: { T: 1 },
      294: { T: -1 },
      295: { T: 1 },
      296: { T: -1 },
      297: { T: 1 },
      298: { T: -1 },
      299: { T: 1 },
      300: { T: -1 },
      301: { T: 1 },
      302: { T: -1 },
      303: { T: 1 },
      304: { T: -1 },
      305: { T: 1 },
      306: { T: -1 },
      307: { T: 1 },
      308: { T: -1 },
      309: { T: 1 },
      310: { T: -1 },
      311: { T: 1 },
      312: { T: -1 },
      313: { T: -1 },
      314: { T: 1 },
      315: { T: -1 },
      316: { T: 1 },
      317: { T: -1 },
      318: { T: 1 },
      319: { T: -1 },
      320: { T: 1 },
      321: { T: -1 },
      322: { T: 1 },
      323: { T: -1 },
      324: { T: 1 },
      325: { T: -1 },
      326: { T: 1 },
      327: { T: -1 },
      328: { T: 1 },
      329: { T: -1 },
      330: { T: 1 },
      331: { T: -1 },
      332: { T: 1 },
      333: { T: -1 },
      334: { T: 1 },
      335: {
        f: function Zx(e, r) {
          return {
            flags: e.read_shift(4),
            version: e.read_shift(4),
            name: Ir(e),
          };
        },
      },
      336: { T: -1 },
      337: {
        f: function em(e) {
          return ((e.l += 4), 0 != e.read_shift(4));
        },
        T: 1,
      },
      338: { T: -1 },
      339: { T: 1 },
      340: { T: -1 },
      341: { T: 1 },
      342: { T: -1 },
      343: { T: 1 },
      344: { T: -1 },
      345: { T: 1 },
      346: { T: -1 },
      347: { T: 1 },
      348: { T: -1 },
      349: { T: 1 },
      350: { T: -1 },
      351: {},
      352: {},
      353: { T: 1 },
      354: { T: -1 },
      355: { f: ts },
      357: {},
      358: {},
      359: {},
      360: { T: 1 },
      361: {},
      362: {
        f: function so(e, r, t) {
          if (t.biff < 8)
            return (function Md(e, r, t) {
              3 == e[e.l + 1] && e[e.l]++;
              var a = xn(e, 0, t);
              return 3 == a.charCodeAt(0) ? a.slice(1) : a;
            })(e, 0, t);
          for (
            var a = [], n = e.l + r, i = e.read_shift(t.biff > 8 ? 4 : 2);
            0 != i--;
          )
            a.push(Kh(e, 0, t));
          if (e.l != n) throw new Error("Bad ExternSheet: " + e.l + " != " + n);
          return a;
        },
      },
      363: {},
      364: {},
      366: {},
      367: {},
      368: {},
      369: {},
      370: {},
      371: {},
      372: { T: 1 },
      373: { T: -1 },
      374: { T: 1 },
      375: { T: -1 },
      376: { T: 1 },
      377: { T: -1 },
      378: { T: 1 },
      379: { T: -1 },
      380: { T: 1 },
      381: { T: -1 },
      382: { T: 1 },
      383: { T: -1 },
      384: { T: 1 },
      385: { T: -1 },
      386: { T: 1 },
      387: { T: -1 },
      388: { T: 1 },
      389: { T: -1 },
      390: { T: 1 },
      391: { T: -1 },
      392: { T: 1 },
      393: { T: -1 },
      394: { T: 1 },
      395: { T: -1 },
      396: {},
      397: {},
      398: {},
      399: {},
      400: {},
      401: { T: 1 },
      403: {},
      404: {},
      405: {},
      406: {},
      407: {},
      408: {},
      409: {},
      410: {},
      411: {},
      412: {},
      413: {},
      414: {},
      415: {},
      416: {},
      417: {},
      418: {},
      419: {},
      420: {},
      421: {},
      422: { T: 1 },
      423: { T: 1 },
      424: { T: -1 },
      425: { T: -1 },
      426: {
        f: function Cv(e, r, t) {
          var a = e.l + r,
            n = vc(e),
            i = e.read_shift(1),
            s = [n];
          if (((s[2] = i), t.cellFormula)) {
            var c = Z_(e, a - e.l, t);
            s[1] = c;
          } else e.l = a;
          return s;
        },
      },
      427: {
        f: function yv(e, r, t) {
          var a = e.l + r,
            i = [ma(e, 16)];
          if (t.cellFormula) {
            var s = j_(e, a - e.l, t);
            ((i[1] = s), (e.l = a));
          } else e.l = a;
          return i;
        },
      },
      428: {},
      429: { T: 1 },
      430: { T: -1 },
      431: { T: 1 },
      432: { T: -1 },
      433: { T: 1 },
      434: { T: -1 },
      435: { T: 1 },
      436: { T: -1 },
      437: { T: 1 },
      438: { T: -1 },
      439: { T: 1 },
      440: { T: -1 },
      441: { T: 1 },
      442: { T: -1 },
      443: { T: 1 },
      444: { T: -1 },
      445: { T: 1 },
      446: { T: -1 },
      447: { T: 1 },
      448: { T: -1 },
      449: { T: 1 },
      450: { T: -1 },
      451: { T: 1 },
      452: { T: -1 },
      453: { T: 1 },
      454: { T: -1 },
      455: { T: 1 },
      456: { T: -1 },
      457: { T: 1 },
      458: { T: -1 },
      459: { T: 1 },
      460: { T: -1 },
      461: { T: 1 },
      462: { T: -1 },
      463: { T: 1 },
      464: { T: -1 },
      465: { T: 1 },
      466: { T: -1 },
      467: { T: 1 },
      468: { T: -1 },
      469: { T: 1 },
      470: { T: -1 },
      471: {},
      472: {},
      473: { T: 1 },
      474: { T: -1 },
      475: {},
      476: {
        f: function Rv(e) {
          var r = {};
          return (
            Yo.forEach(function (t) {
              r[t] = Lr(e);
            }),
            r
          );
        },
      },
      477: {},
      478: {},
      479: { T: 1 },
      480: { T: -1 },
      481: { T: 1 },
      482: { T: -1 },
      483: { T: 1 },
      484: { T: -1 },
      485: { f: function Up() {} },
      486: { T: 1 },
      487: { T: -1 },
      488: { T: 1 },
      489: { T: -1 },
      490: { T: 1 },
      491: { T: -1 },
      492: { T: 1 },
      493: { T: -1 },
      494: {
        f: function Sv(e, r) {
          var t = e.l + r,
            a = ma(e, 16),
            n = rs(e),
            i = Ir(e),
            s = Ir(e),
            c = Ir(e);
          e.l = t;
          var o = { rfx: a, relId: n, loc: i, display: c };
          return (s && (o.Tooltip = s), o);
        },
      },
      495: { T: 1 },
      496: { T: -1 },
      497: { T: 1 },
      498: { T: -1 },
      499: {},
      500: { T: 1 },
      501: { T: -1 },
      502: { T: 1 },
      503: { T: -1 },
      504: {},
      505: { T: 1 },
      506: { T: -1 },
      507: {},
      508: { T: 1 },
      509: { T: -1 },
      510: { T: 1 },
      511: { T: -1 },
      512: {},
      513: {},
      514: { T: 1 },
      515: { T: -1 },
      516: { T: 1 },
      517: { T: -1 },
      518: { T: 1 },
      519: { T: -1 },
      520: { T: 1 },
      521: { T: -1 },
      522: {},
      523: {},
      524: {},
      525: {},
      526: {},
      527: {},
      528: { T: 1 },
      529: { T: -1 },
      530: { T: 1 },
      531: { T: -1 },
      532: { T: 1 },
      533: { T: -1 },
      534: {},
      535: {},
      536: {},
      537: {},
      538: { T: 1 },
      539: { T: -1 },
      540: { T: 1 },
      541: { T: -1 },
      542: { T: 1 },
      548: {},
      549: {},
      550: { f: ts },
      551: {},
      552: {},
      553: {},
      554: { T: 1 },
      555: { T: -1 },
      556: { T: 1 },
      557: { T: -1 },
      558: { T: 1 },
      559: { T: -1 },
      560: { T: 1 },
      561: { T: -1 },
      562: {},
      564: {},
      565: { T: 1 },
      566: { T: -1 },
      569: { T: 1 },
      570: { T: -1 },
      572: {},
      573: { T: 1 },
      574: { T: -1 },
      577: {},
      578: {},
      579: {},
      580: {},
      581: {},
      582: {},
      583: {},
      584: {},
      585: {},
      586: {},
      587: {},
      588: { T: -1 },
      589: {},
      590: { T: 1 },
      591: { T: -1 },
      592: { T: 1 },
      593: { T: -1 },
      594: { T: 1 },
      595: { T: -1 },
      596: {},
      597: { T: 1 },
      598: { T: -1 },
      599: { T: 1 },
      600: { T: -1 },
      601: { T: 1 },
      602: { T: -1 },
      603: { T: 1 },
      604: { T: -1 },
      605: { T: 1 },
      606: { T: -1 },
      607: {},
      608: { T: 1 },
      609: { T: -1 },
      610: {},
      611: { T: 1 },
      612: { T: -1 },
      613: { T: 1 },
      614: { T: -1 },
      615: { T: 1 },
      616: { T: -1 },
      617: { T: 1 },
      618: { T: -1 },
      619: { T: 1 },
      620: { T: -1 },
      625: {},
      626: { T: 1 },
      627: { T: -1 },
      628: { T: 1 },
      629: { T: -1 },
      630: { T: 1 },
      631: { T: -1 },
      632: { f: pm },
      633: { T: 1 },
      634: { T: -1 },
      635: {
        T: 1,
        f: function mm(e) {
          var r = {};
          r.iauthor = e.read_shift(4);
          var t = ma(e, 16);
          return ((r.rfx = t.s), (r.ref = Ce(t.s)), (e.l += 16), r);
        },
      },
      636: { T: -1 },
      637: { f: Yu },
      638: { T: 1 },
      639: {},
      640: { T: -1 },
      641: { T: 1 },
      642: { T: -1 },
      643: { T: 1 },
      644: {},
      645: { T: -1 },
      646: { T: 1 },
      648: { T: 1 },
      649: {},
      650: { T: -1 },
      651: {
        f: function qv(e, r) {
          return ((e.l += 10), { name: Ir(e) });
        },
      },
      652: {},
      653: { T: 1 },
      654: { T: -1 },
      655: { T: 1 },
      656: { T: -1 },
      657: { T: 1 },
      658: { T: -1 },
      659: {},
      660: { T: 1 },
      661: {},
      662: { T: -1 },
      663: {},
      664: { T: 1 },
      665: {},
      666: { T: -1 },
      667: {},
      668: {},
      669: {},
      671: { T: 1 },
      672: { T: -1 },
      673: { T: 1 },
      674: { T: -1 },
      675: {},
      676: {},
      677: {},
      678: {},
      679: {},
      680: {},
      681: {},
      1024: {},
      1025: {},
      1026: { T: 1 },
      1027: { T: -1 },
      1028: { T: 1 },
      1029: { T: -1 },
      1030: {},
      1031: { T: 1 },
      1032: { T: -1 },
      1033: { T: 1 },
      1034: { T: -1 },
      1035: {},
      1036: {},
      1037: {},
      1038: { T: 1 },
      1039: { T: -1 },
      1040: {},
      1041: { T: 1 },
      1042: { T: -1 },
      1043: {},
      1044: {},
      1045: {},
      1046: { T: 1 },
      1047: { T: -1 },
      1048: { T: 1 },
      1049: { T: -1 },
      1050: {},
      1051: { T: 1 },
      1052: { T: 1 },
      1053: { f: function Dv() {} },
      1054: { T: 1 },
      1055: {},
      1056: { T: 1 },
      1057: { T: -1 },
      1058: { T: 1 },
      1059: { T: -1 },
      1061: {},
      1062: { T: 1 },
      1063: { T: -1 },
      1064: { T: 1 },
      1065: { T: -1 },
      1066: { T: 1 },
      1067: { T: -1 },
      1068: { T: 1 },
      1069: { T: -1 },
      1070: { T: 1 },
      1071: { T: -1 },
      1072: { T: 1 },
      1073: { T: -1 },
      1075: { T: 1 },
      1076: { T: -1 },
      1077: { T: 1 },
      1078: { T: -1 },
      1079: { T: 1 },
      1080: { T: -1 },
      1081: { T: 1 },
      1082: { T: -1 },
      1083: { T: 1 },
      1084: { T: -1 },
      1085: {},
      1086: { T: 1 },
      1087: { T: -1 },
      1088: { T: 1 },
      1089: { T: -1 },
      1090: { T: 1 },
      1091: { T: -1 },
      1092: { T: 1 },
      1093: { T: -1 },
      1094: { T: 1 },
      1095: { T: -1 },
      1096: {},
      1097: { T: 1 },
      1098: {},
      1099: { T: -1 },
      1100: { T: 1 },
      1101: { T: -1 },
      1102: {},
      1103: {},
      1104: {},
      1105: {},
      1111: {},
      1112: {},
      1113: { T: 1 },
      1114: { T: -1 },
      1115: { T: 1 },
      1116: { T: -1 },
      1117: {},
      1118: { T: 1 },
      1119: { T: -1 },
      1120: { T: 1 },
      1121: { T: -1 },
      1122: { T: 1 },
      1123: { T: -1 },
      1124: { T: 1 },
      1125: { T: -1 },
      1126: {},
      1128: { T: 1 },
      1129: { T: -1 },
      1130: {},
      1131: { T: 1 },
      1132: { T: -1 },
      1133: { T: 1 },
      1134: { T: -1 },
      1135: { T: 1 },
      1136: { T: -1 },
      1137: { T: 1 },
      1138: { T: -1 },
      1139: { T: 1 },
      1140: { T: -1 },
      1141: {},
      1142: { T: 1 },
      1143: { T: -1 },
      1144: { T: 1 },
      1145: { T: -1 },
      1146: {},
      1147: { T: 1 },
      1148: { T: -1 },
      1149: { T: 1 },
      1150: { T: -1 },
      1152: { T: 1 },
      1153: { T: -1 },
      1154: { T: -1 },
      1155: { T: -1 },
      1156: { T: -1 },
      1157: { T: 1 },
      1158: { T: -1 },
      1159: { T: 1 },
      1160: { T: -1 },
      1161: { T: 1 },
      1162: { T: -1 },
      1163: { T: 1 },
      1164: { T: -1 },
      1165: { T: 1 },
      1166: { T: -1 },
      1167: { T: 1 },
      1168: { T: -1 },
      1169: { T: 1 },
      1170: { T: -1 },
      1171: {},
      1172: { T: 1 },
      1173: { T: -1 },
      1177: {},
      1178: { T: 1 },
      1180: {},
      1181: {},
      1182: {},
      2048: { T: 1 },
      2049: { T: -1 },
      2050: {},
      2051: { T: 1 },
      2052: { T: -1 },
      2053: {},
      2054: {},
      2055: { T: 1 },
      2056: { T: -1 },
      2057: { T: 1 },
      2058: { T: -1 },
      2060: {},
      2067: {},
      2068: { T: 1 },
      2069: { T: -1 },
      2070: {},
      2071: {},
      2072: { T: 1 },
      2073: { T: -1 },
      2075: {},
      2076: {},
      2077: { T: 1 },
      2078: { T: -1 },
      2079: {},
      2080: { T: 1 },
      2081: { T: -1 },
      2082: {},
      2083: { T: 1 },
      2084: { T: -1 },
      2085: { T: 1 },
      2086: { T: -1 },
      2087: { T: 1 },
      2088: { T: -1 },
      2089: { T: 1 },
      2090: { T: -1 },
      2091: {},
      2092: {},
      2093: { T: 1 },
      2094: { T: -1 },
      2095: {},
      2096: { T: 1 },
      2097: { T: -1 },
      2098: { T: 1 },
      2099: { T: -1 },
      2100: { T: 1 },
      2101: { T: -1 },
      2102: {},
      2103: { T: 1 },
      2104: { T: -1 },
      2105: {},
      2106: { T: 1 },
      2107: { T: -1 },
      2108: {},
      2109: { T: 1 },
      2110: { T: -1 },
      2111: { T: 1 },
      2112: { T: -1 },
      2113: { T: 1 },
      2114: { T: -1 },
      2115: {},
      2116: {},
      2117: {},
      2118: { T: 1 },
      2119: { T: -1 },
      2120: {},
      2121: { T: 1 },
      2122: { T: -1 },
      2123: { T: 1 },
      2124: { T: -1 },
      2125: {},
      2126: { T: 1 },
      2127: { T: -1 },
      2128: {},
      2129: { T: 1 },
      2130: { T: -1 },
      2131: { T: 1 },
      2132: { T: -1 },
      2133: { T: 1 },
      2134: {},
      2135: {},
      2136: {},
      2137: { T: 1 },
      2138: { T: -1 },
      2139: { T: 1 },
      2140: { T: -1 },
      2141: {},
      3072: {},
      3073: {},
      4096: { T: 1 },
      4097: { T: -1 },
      5002: { T: 1 },
      5003: { T: -1 },
      5081: { T: 1 },
      5082: { T: -1 },
      5083: {},
      5084: { T: 1 },
      5085: { T: -1 },
      5086: { T: 1 },
      5087: { T: -1 },
      5088: {},
      5089: {},
      5090: {},
      5092: { T: 1 },
      5093: { T: -1 },
      5094: {},
      5095: { T: 1 },
      5096: { T: -1 },
      5097: {},
      5099: {},
      65535: { n: "" },
    };
    function le(e, r, t, a) {
      var n = r;
      if (!isNaN(n)) {
        var i = a || (t || []).length || 0,
          s = e.next(4);
        (s.write_shift(2, n), s.write_shift(2, i), i > 0 && $i(t) && e.push(t));
      }
    }
    function Fn(e, r, t) {
      return (
        e || (e = j(7)),
        e.write_shift(2, r),
        e.write_shift(2, t),
        e.write_shift(2, 0),
        e.write_shift(1, 0),
        e
      );
    }
    function mg(e, r, t, a) {
      if (null != r.v)
        switch (r.t) {
          case "d":
          case "n":
            var n = "d" == r.t ? Ar(nr(r.v)) : r.v;
            return void (n == (0 | n) && n >= 0 && n < 65536
              ? le(
                  e,
                  2,
                  (function _1(e, r, t) {
                    var a = j(9);
                    return (Fn(a, e, r), a.write_shift(2, t), a);
                  })(t, a, n),
                )
              : le(
                  e,
                  3,
                  (function x1(e, r, t) {
                    var a = j(15);
                    return (Fn(a, e, r), a.write_shift(8, t, "f"), a);
                  })(t, a, n),
                ));
          case "b":
          case "e":
            return void le(
              e,
              5,
              (function dg(e, r, t, a) {
                var n = j(9);
                return (Fn(n, e, r), Xc(t, a || "b", n), n);
              })(t, a, r.v, r.t),
            );
          case "s":
          case "str":
            return void le(
              e,
              4,
              (function xg(e, r, t) {
                var a = j(8 + 2 * t.length);
                return (
                  Fn(a, e, r),
                  a.write_shift(1, t.length),
                  a.write_shift(t.length, t, "sbcs"),
                  a.l < a.length ? a.slice(0, a.l) : a
                );
              })(t, a, (r.v || "").slice(0, 255)),
            );
        }
      le(e, 1, Fn(null, t, a));
    }
    function wg(e, r, t, a, n) {
      var i = 16 + Qt(n.cellXfs, r, n);
      if (null != r.v || r.bf)
        if (r.bf)
          le(
            e,
            6,
            (function J_(e, r, t, a, n) {
              var i = Ta(r, t, n),
                s = (function z_(e) {
                  if (null == e) {
                    var r = j(8);
                    return (
                      r.write_shift(1, 3),
                      r.write_shift(1, 0),
                      r.write_shift(2, 0),
                      r.write_shift(2, 0),
                      r.write_shift(2, 65535),
                      r
                    );
                  }
                  return _a("number" == typeof e ? e : 0);
                })(e.v),
                c = j(6);
              (c.write_shift(2, 33), c.write_shift(4, 0));
              for (var f = j(e.bf.length), l = 0; l < e.bf.length; ++l)
                f[l] = e.bf[l];
              return Tr([i, s, c, f]);
            })(r, t, a, 0, i),
          );
        else
          switch (r.t) {
            case "d":
            case "n":
              le(
                e,
                515,
                (function bd(e, r, t, a) {
                  var n = j(14);
                  return (Ta(e, r, a, n), _a(t, n), n);
                })(t, a, "d" == r.t ? Ar(nr(r.v)) : r.v, i),
              );
              break;
            case "b":
            case "e":
              le(
                e,
                517,
                (function Id(e, r, t, a, n, i) {
                  var s = j(8);
                  return (Ta(e, r, a, s), Xc(t, i, s), s);
                })(t, a, r.v, i, 0, r.t),
              );
              break;
            case "s":
            case "str":
              n.bookSST
                ? le(
                    e,
                    253,
                    (function vd(e, r, t, a) {
                      var n = j(10);
                      return (Ta(e, r, a, n), n.write_shift(4, t), n);
                    })(t, a, ys(n.Strings, r.v, n.revStrings), i),
                  )
                : le(
                    e,
                    516,
                    (function Ed(e, r, t, a, n) {
                      var i = !n || 8 == n.biff,
                        s = j(+i + 8 + (1 + i) * t.length);
                      return (
                        Ta(e, r, a, s),
                        s.write_shift(2, t.length),
                        i && s.write_shift(1, 1),
                        s.write_shift(
                          (1 + i) * t.length,
                          t,
                          i ? "utf16le" : "sbcs",
                        ),
                        s
                      );
                    })(t, a, (r.v || "").slice(0, 255), i, n),
                  );
              break;
            default:
              le(e, 513, Ta(t, a, i));
          }
      else le(e, 513, Ta(t, a, i));
    }
    function kg(e, r, t) {
      var l,
        a = Ur(),
        n = t.SheetNames[e],
        i = t.Sheets[n] || {},
        s = (t || {}).Workbook || {},
        c = (s.Sheets || [])[e] || {},
        o = Array.isArray(i),
        f = 8 == r.biff,
        h = "",
        d = [],
        x = Ge(i["!ref"] || "A1"),
        m = f ? 65536 : 16384;
      if (x.e.c > 255 || x.e.r >= m) {
        if (r.WTF)
          throw new Error(
            "Range " + (i["!ref"] || "A1") + " exceeds format limit A1:IV16384",
          );
        ((x.e.c = Math.min(x.e.c, 255)), (x.e.r = Math.min(x.e.c, m - 1)));
      }
      (le(a, 2057, ms(0, 16, r)),
        le(a, 13, it(1)),
        le(a, 12, it(100)),
        le(a, 15, Wr(!0)),
        le(a, 17, Wr(!1)),
        le(a, 16, _a(0.001)),
        le(a, 95, Wr(!0)),
        le(a, 42, Wr(!1)),
        le(a, 43, Wr(!1)),
        le(a, 130, it(1)),
        le(
          a,
          128,
          (function Od(e) {
            var r = j(8);
            return (
              r.write_shift(4, 0),
              r.write_shift(2, e[0] ? e[0] + 1 : 0),
              r.write_shift(2, e[1] ? e[1] + 1 : 0),
              r
            );
          })([0, 0]),
        ),
        le(a, 131, Wr(!1)),
        le(a, 132, Wr(!1)),
        f &&
          (function Sg(e, r) {
            if (r) {
              var t = 0;
              r.forEach(function (a, n) {
                ++t <= 256 &&
                  a &&
                  le(
                    e,
                    125,
                    (function n1(e, r) {
                      var t = j(12);
                      (t.write_shift(2, r),
                        t.write_shift(2, r),
                        t.write_shift(2, 256 * e.width),
                        t.write_shift(2, 0));
                      var a = 0;
                      return (
                        e.hidden && (a |= 1),
                        t.write_shift(1, a),
                        t.write_shift(1, (a = e.level || 0)),
                        t.write_shift(2, 0),
                        t
                      );
                    })(mi(n, a), n),
                  );
              });
            }
          })(a, i["!cols"]),
        le(
          a,
          512,
          (function wd(e, r) {
            var t = 8 != r.biff && r.biff ? 2 : 4,
              a = j(2 * t + 6);
            return (
              a.write_shift(t, e.s.r),
              a.write_shift(t, e.e.r + 1),
              a.write_shift(2, e.s.c),
              a.write_shift(2, e.e.c + 1),
              a.write_shift(2, 0),
              a
            );
          })(x, r),
        ),
        f && (i["!links"] = []));
      for (var u = x.s.r; u <= x.e.r; ++u) {
        h = fr(u);
        for (var _ = x.s.c; _ <= x.e.c; ++_) {
          (u === x.s.r && (d[_] = er(_)), (l = d[_] + h));
          var A = o ? (i[u] || [])[_] : i[l];
          A && (wg(a, A, u, _, r), f && A.l && i["!links"].push([l, A.l]));
        }
      }
      var T = c.CodeName || c.name || n;
      return (
        f &&
          le(
            a,
            574,
            (function dd(e) {
              var r = j(18),
                t = 1718;
              return (
                e && e.RTL && (t |= 64),
                r.write_shift(2, t),
                r.write_shift(4, 0),
                r.write_shift(4, 64),
                r.write_shift(4, 0),
                r.write_shift(4, 0),
                r
              );
            })((s.Views || [])[0]),
          ),
        f &&
          (i["!merges"] || []).length &&
          le(
            a,
            229,
            (function Xd(e) {
              var r = j(2 + 8 * e.length);
              r.write_shift(2, e.length);
              for (var t = 0; t < e.length; ++t) $c(e[t], r);
              return r;
            })(i["!merges"]),
          ),
        f &&
          (function Ag(e, r) {
            for (var t = 0; t < r["!links"].length; ++t) {
              var a = r["!links"][t];
              (le(e, 440, $d(a)), a[1].Tooltip && le(e, 2048, Qd(a)));
            }
            delete r["!links"];
          })(a, i),
        le(a, 442, Kc(T)),
        f &&
          (function Eg(e, r) {
            var t = j(19);
            (t.write_shift(4, 2151),
              t.write_shift(4, 0),
              t.write_shift(4, 0),
              t.write_shift(2, 3),
              t.write_shift(1, 1),
              t.write_shift(4, 0),
              le(e, 2151, t),
              (t = j(39)).write_shift(4, 2152),
              t.write_shift(4, 0),
              t.write_shift(4, 0),
              t.write_shift(2, 3),
              t.write_shift(1, 0),
              t.write_shift(4, 0),
              t.write_shift(2, 1),
              t.write_shift(4, 4),
              t.write_shift(2, 0),
              $c(Ge(r["!ref"] || "A1"), t),
              t.write_shift(4, 4),
              le(e, 2152, t));
          })(a, i),
        le(a, 10),
        a.end()
      );
    }
    function Cg(e, r, t) {
      var a = Ur(),
        n = (e || {}).Workbook || {},
        i = n.Sheets || [],
        s = n.WBProps || {},
        c = 8 == t.biff,
        o = 5 == t.biff;
      (le(a, 2057, ms(0, 5, t)),
        "xla" == t.bookType && le(a, 135),
        le(a, 225, c ? it(1200) : null),
        le(
          a,
          193,
          (function Ih(e, r) {
            r || (r = j(e));
            for (var t = 0; t < e; ++t) r.write_shift(1, 0);
            return r;
          })(2),
        ),
        o && le(a, 191),
        o && le(a, 192),
        le(a, 226),
        le(
          a,
          92,
          (function ed(e, r) {
            var t = !r || 8 == r.biff,
              a = j(t ? 112 : 54);
            for (
              a.write_shift(8 == r.biff ? 2 : 1, 7),
                t && a.write_shift(1, 0),
                a.write_shift(4, 859007059),
                a.write_shift(4, 5458548 | (t ? 0 : 536870912));
              a.l < a.length;
            )
              a.write_shift(1, t ? 0 : 32);
            return a;
          })(0, t),
        ),
        le(a, 66, it(c ? 1200 : 1252)),
        c && le(a, 353, it(0)),
        c && le(a, 448),
        le(
          a,
          317,
          (function c1(e) {
            for (var r = j(2 * e), t = 0; t < e; ++t) r.write_shift(2, t + 1);
            return r;
          })(e.SheetNames.length),
        ),
        c && e.vbaraw && le(a, 211),
        c && e.vbaraw && le(a, 442, Kc(s.CodeName || "ThisWorkbook")),
        le(a, 156, it(17)),
        le(a, 25, Wr(!1)),
        le(a, 18, Wr(!1)),
        le(a, 19, it(0)),
        c && le(a, 431, Wr(!1)),
        c && le(a, 444, it(0)),
        le(
          a,
          61,
          (function ud() {
            var e = j(18);
            return (
              e.write_shift(2, 0),
              e.write_shift(2, 0),
              e.write_shift(2, 29280),
              e.write_shift(2, 17600),
              e.write_shift(2, 56),
              e.write_shift(2, 0),
              e.write_shift(2, 0),
              e.write_shift(2, 1),
              e.write_shift(2, 500),
              e
            );
          })(),
        ),
        le(a, 64, Wr(!1)),
        le(a, 141, it(0)),
        le(
          a,
          34,
          Wr(
            "true" ==
              (function i2(e) {
                return e.Workbook &&
                  e.Workbook.WBProps &&
                  (function tr(e) {
                    switch (e) {
                      case 1:
                      case !0:
                      case "1":
                      case "true":
                      case "TRUE":
                        return !0;
                      default:
                        return !1;
                    }
                  })(e.Workbook.WBProps.date1904)
                  ? "true"
                  : "false";
              })(e),
          ),
        ),
        le(a, 14, Wr(!0)),
        c && le(a, 439, Wr(!1)),
        le(a, 218, it(0)),
        (function vg(e, r, t) {
          le(
            e,
            49,
            (function _d(e, r) {
              var t = e.name || "Arial",
                a = r && 5 == r.biff,
                i = j(a ? 15 + t.length : 16 + 2 * t.length);
              return (
                i.write_shift(2, 20 * (e.sz || 12)),
                i.write_shift(4, 0),
                i.write_shift(2, 400),
                i.write_shift(4, 0),
                i.write_shift(2, 0),
                i.write_shift(1, t.length),
                a || i.write_shift(1, 1),
                i.write_shift(
                  (a ? 1 : 2) * t.length,
                  t,
                  a ? "sbcs" : "utf16le",
                ),
                i
              );
            })(
              {
                sz: 12,
                color: { theme: 1 },
                name: "Arial",
                family: 2,
                scheme: "minor",
              },
              t,
            ),
          );
        })(a, 0, t),
        (function gg(e, r, t) {
          r &&
            [
              [5, 8],
              [23, 26],
              [41, 44],
              [50, 392],
            ].forEach(function (a) {
              for (var n = a[0]; n <= a[1]; ++n)
                null != r[n] && le(e, 1054, Ad(n, r[n], t));
            });
        })(a, e.SSF, t),
        (function Tg(e, r) {
          for (var t = 0; t < 16; ++t)
            le(e, 224, ro({ numFmtId: 0, style: !0 }, 0, r));
          r.cellXfs.forEach(function (a) {
            le(e, 224, ro(a, 0, r));
          });
        })(a, t),
        c && le(a, 352, Wr(!1)));
      var l = a.end(),
        h = Ur();
      (c &&
        le(
          h,
          140,
          (function e1(e) {
            return (
              e || (e = j(4)),
              e.write_shift(2, 1),
              e.write_shift(2, 1),
              e
            );
          })(),
        ),
        c &&
          t.Strings &&
          (function hg(e, r, t, a) {
            var n = a || (t || []).length || 0;
            if (n <= 8224) return le(e, r, t, n);
            var i = r;
            if (!isNaN(i)) {
              for (
                var s = t.parts || [], c = 0, o = 0, f = 0;
                f + (s[c] || 8224) <= 8224;
              )
                ((f += s[c] || 8224), c++);
              var l = e.next(4);
              for (
                l.write_shift(2, i),
                  l.write_shift(2, f),
                  e.push(t.slice(o, o + f)),
                  o += f;
                o < n;
              ) {
                for (
                  (l = e.next(4)).write_shift(2, 60), f = 0;
                  f + (s[c] || 8224) <= 8224;
                )
                  ((f += s[c] || 8224), c++);
                (l.write_shift(2, f), e.push(t.slice(o, o + f)), (o += f));
              }
            }
          })(
            h,
            252,
            (function id(e, r) {
              var t = j(8);
              (t.write_shift(4, e.Count), t.write_shift(4, e.Unique));
              for (var a = [], n = 0; n < e.length; ++n) a[n] = Dh(e[n]);
              var i = Tr([t].concat(a));
              return (
                (i.parts = [t.length].concat(
                  a.map(function (s) {
                    return s.length;
                  }),
                )),
                i
              );
            })(t.Strings),
          ),
        le(h, 10));
      var d = h.end(),
        x = Ur(),
        m = 0,
        u = 0;
      for (u = 0; u < e.SheetNames.length; ++u)
        m += (c ? 12 : 11) + (c ? 2 : 1) * e.SheetNames[u].length;
      var _ = l.length + m + d.length;
      for (u = 0; u < e.SheetNames.length; ++u)
        (le(
          x,
          133,
          ad(
            {
              pos: _,
              hs: (i[u] || {}).Hidden || 0,
              dt: 0,
              name: e.SheetNames[u],
            },
            t,
          ),
        ),
          (_ += r[u].length));
      var T = x.end();
      if (m != T.length) throw new Error("BS8 " + m + " != " + T.length);
      var g = [];
      return (
        l.length && g.push(l),
        T.length && g.push(T),
        d.length && g.push(d),
        Tr(g)
      );
    }
    function af(e, r) {
      for (var t = 0; t <= e.SheetNames.length; ++t) {
        var a = e.Sheets[e.SheetNames[t]];
        a &&
          a["!ref"] &&
          Gr(a["!ref"]).e.c > 255 &&
          typeof console < "u" &&
          console.error &&
          console.error(
            "Worksheet '" +
              e.SheetNames[t] +
              "' extends beyond column IV (255).  Data may be lost.",
          );
      }
      var i = r || {};
      switch (i.biff || 2) {
        case 8:
        case 5:
          return (function yg(e, r) {
            var t = r || {},
              a = [];
            (e && !e.SSF && (e.SSF = je(we)),
              e &&
                e.SSF &&
                (Ia(),
                an(e.SSF),
                (t.revssf = Yn(e.SSF)),
                (t.revssf[e.SSF[65535]] = 0),
                (t.ssf = e.SSF)),
              (t.Strings = []),
              (t.Strings.Count = 0),
              (t.Strings.Unique = 0),
              Us(t),
              (t.cellXfs = []),
              Qt(t.cellXfs, {}, { revssf: { General: 0 } }),
              e.Props || (e.Props = {}));
            for (var n = 0; n < e.SheetNames.length; ++n)
              a[a.length] = kg(n, t, e);
            return (a.unshift(Cg(e, a, t)), Tr(a));
          })(e, r);
        case 4:
        case 3:
        case 2:
          return (function pg(e, r) {
            var t = r || {};
            null != ir && null == t.dense && (t.dense = ir);
            for (var a = Ur(), n = 0, i = 0; i < e.SheetNames.length; ++i)
              e.SheetNames[i] == t.sheet && (n = i);
            if (0 == n && t.sheet && e.SheetNames[0] != t.sheet)
              throw new Error("Sheet not found: " + t.sheet);
            return (
              le(a, 4 == t.biff ? 1033 : 3 == t.biff ? 521 : 9, ms(0, 16, t)),
              (function _g(e, r, t, a) {
                var s,
                  n = Array.isArray(r),
                  i = Ge(r["!ref"] || "A1"),
                  c = "",
                  o = [];
                if (i.e.c > 255 || i.e.r > 16383) {
                  if (a.WTF)
                    throw new Error(
                      "Range " +
                        (r["!ref"] || "A1") +
                        " exceeds format limit A1:IV16384",
                    );
                  ((i.e.c = Math.min(i.e.c, 255)),
                    (i.e.r = Math.min(i.e.c, 16383)),
                    (s = Ne(i)));
                }
                for (var f = i.s.r; f <= i.e.r; ++f) {
                  c = fr(f);
                  for (var l = i.s.c; l <= i.e.c; ++l) {
                    (f === i.s.r && (o[l] = er(l)), (s = o[l] + c));
                    var h = n ? (r[f] || [])[l] : r[s];
                    h && mg(e, h, f, l);
                  }
                }
              })(a, e.Sheets[e.SheetNames[n]], 0, t),
              le(a, 10),
              a.end()
            );
          })(e, r);
      }
      throw new Error("invalid type " + i.bookType + " for BIFF");
    }
    function sf(e, r, t, a) {
      for (var n = e["!merges"] || [], i = [], s = r.s.c; s <= r.e.c; ++s) {
        for (var c = 0, o = 0, f = 0; f < n.length; ++f)
          if (!(n[f].s.r > t || n[f].s.c > s || n[f].e.r < t || n[f].e.c < s)) {
            if (n[f].s.r < t || n[f].s.c < s) {
              c = -1;
              break;
            }
            ((c = n[f].e.r - n[f].s.r + 1), (o = n[f].e.c - n[f].s.c + 1));
            break;
          }
        if (!(c < 0)) {
          var l = Ce({ r: t, c: s }),
            h = a.dense ? (e[t] || [])[s] : e[l],
            d =
              (h && null != h.v && (h.h || Y0(h.w || (Et(h), h.w) || ""))) ||
              "",
            x = {};
          (c > 1 && (x.rowspan = c),
            o > 1 && (x.colspan = o),
            a.editable
              ? (d = '<span contenteditable="true">' + d + "</span>")
              : h &&
                ((x["data-t"] = (h && h.t) || "z"),
                null != h.v && (x["data-v"] = h.v),
                null != h.z && (x["data-z"] = h.z),
                h.l &&
                  "#" != (h.l.Target || "#").charAt(0) &&
                  (d = '<a href="' + h.l.Target + '">' + d + "</a>")),
            (x.id = (a.id || "sjs") + "-" + l),
            i.push(ce("td", d, x)));
        }
      }
      return "<tr>" + i.join("") + "</tr>";
    }
    var cf =
        '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
      of = "</body></html>";
    function lf(e, r) {
      var t = r || {},
        n = null != t.footer ? t.footer : of,
        i = [null != t.header ? t.header : cf],
        s = Gr(e["!ref"]);
      ((t.dense = Array.isArray(e)),
        i.push(
          (function ff(e, r, t) {
            return (
              [].join("") +
              "<table" +
              (t && t.id ? ' id="' + t.id + '"' : "") +
              ">"
            );
          })(0, 0, t),
        ));
      for (var c = s.s.r; c <= s.e.r; ++c) i.push(sf(e, s, c, t));
      return (i.push("</table>" + n), i.join(""));
    }
    function uf(e, r, t) {
      var a = t || {};
      null != ir && (a.dense = ir);
      var n = 0,
        i = 0;
      if (null != a.origin)
        if ("number" == typeof a.origin) n = a.origin;
        else {
          var s = "string" == typeof a.origin ? ur(a.origin) : a.origin;
          ((n = s.r), (i = s.c));
        }
      var c = r.getElementsByTagName("tr"),
        o = Math.min(a.sheetRows || 1e7, c.length),
        f = { s: { r: 0, c: 0 }, e: { r: n, c: i } };
      if (e["!ref"]) {
        var l = Gr(e["!ref"]);
        ((f.s.r = Math.min(f.s.r, l.s.r)),
          (f.s.c = Math.min(f.s.c, l.s.c)),
          (f.e.r = Math.max(f.e.r, l.e.r)),
          (f.e.c = Math.max(f.e.c, l.e.c)),
          -1 == n && (f.e.r = n = l.e.r + 1));
      }
      var h = [],
        d = 0,
        x = e["!rows"] || (e["!rows"] = []),
        m = 0,
        u = 0,
        _ = 0,
        A = 0,
        T = 0,
        g = 0;
      for (e["!cols"] || (e["!cols"] = []); m < c.length && u < o; ++m) {
        var O = c[m];
        if (df(O)) {
          if (a.display) continue;
          x[u] = { hidden: !0 };
        }
        var D = O.children;
        for (_ = A = 0; _ < D.length; ++_) {
          var Y = D[_];
          if (!a.display || !df(Y)) {
            var F = Y.hasAttribute("data-v")
                ? Y.getAttribute("data-v")
                : Y.hasAttribute("v")
                  ? Y.getAttribute("v")
                  : $0(Y.innerHTML),
              P = Y.getAttribute("data-z") || Y.getAttribute("z");
            for (d = 0; d < h.length; ++d) {
              var I = h[d];
              I.s.c == A + i &&
                I.s.r < u + n &&
                u + n <= I.e.r &&
                ((A = I.e.c + 1 - i), (d = -1));
            }
            ((g = +Y.getAttribute("colspan") || 1),
              ((T = +Y.getAttribute("rowspan") || 1) > 1 || g > 1) &&
                h.push({
                  s: { r: u + n, c: A + i },
                  e: { r: u + n + (T || 1) - 1, c: A + i + (g || 1) - 1 },
                }));
            var z = { t: "s", v: F },
              Z = Y.getAttribute("data-t") || Y.getAttribute("t") || "";
            (null != F &&
              (0 == F.length
                ? (z.t = Z || "z")
                : a.raw ||
                  0 == F.trim().length ||
                  "s" == Z ||
                  ("TRUE" === F
                    ? (z = { t: "b", v: !0 })
                    : "FALSE" === F
                      ? (z = { t: "b", v: !1 })
                      : isNaN(dt(F))
                        ? isNaN(La(F).getDate()) ||
                          ((z = { t: "d", v: nr(F) }),
                          a.cellDates || (z = { t: "n", v: Ar(z.v) }),
                          (z.z = a.dateNF || we[14]))
                        : (z = { t: "n", v: dt(F) }))),
              void 0 === z.z && null != P && (z.z = P));
            var b = "",
              ue = Y.getElementsByTagName("A");
            if (ue && ue.length)
              for (
                var ge = 0;
                ge < ue.length &&
                (!ue[ge].hasAttribute("href") ||
                  "#" == (b = ue[ge].getAttribute("href")).charAt(0));
                ++ge
              );
            (b && "#" != b.charAt(0) && (z.l = { Target: b }),
              a.dense
                ? (e[u + n] || (e[u + n] = []), (e[u + n][A + i] = z))
                : (e[Ce({ c: A + i, r: u + n })] = z),
              f.e.c < A + i && (f.e.c = A + i),
              (A += g));
          }
        }
        ++u;
      }
      return (
        h.length && (e["!merges"] = (e["!merges"] || []).concat(h)),
        (f.e.r = Math.max(f.e.r, u - 1 + n)),
        (e["!ref"] = Ne(f)),
        u >= o && (e["!fullref"] = Ne(((f.e.r = c.length - m + u - 1 + n), f))),
        e
      );
    }
    function hf(e, r) {
      return uf((r || {}).dense ? [] : {}, e, r);
    }
    function df(e) {
      var r = "",
        t = (function Ng(e) {
          return e.ownerDocument.defaultView &&
            "function" == typeof e.ownerDocument.defaultView.getComputedStyle
            ? e.ownerDocument.defaultView.getComputedStyle
            : "function" == typeof getComputedStyle
              ? getComputedStyle
              : null;
        })(e);
      return (
        t && (r = t(e).getPropertyValue("display")),
        r || (r = e.style && e.style.display),
        "none" === r
      );
    }
    var Ig = (function () {
        var e = [
            "<office:master-styles>",
            '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
            "<style:header/>",
            '<style:header-left style:display="false"/>',
            "<style:footer/>",
            '<style:footer-left style:display="false"/>',
            "</style:master-page>",
            "</office:master-styles>",
          ].join(""),
          r =
            "<office:document-styles " +
            cn({
              "xmlns:office":
                "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
              "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
              "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
              "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
              "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
              "xmlns:fo":
                "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              "xmlns:dc": "http://purl.org/dc/elements/1.1/",
              "xmlns:number":
                "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
              "xmlns:svg":
                "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
              "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
              "office:version": "1.2",
            }) +
            ">" +
            e +
            "</office:document-styles>";
        return function () {
          return or + r;
        };
      })(),
      vf = (function () {
        var e = function (i) {
            return Je(i)
              .replace(/  +/g, function (s) {
                return '<text:s text:c="' + s.length + '"/>';
              })
              .replace(/\t/g, "<text:tab/>")
              .replace(/\n/g, "</text:p><text:p>")
              .replace(/^ /, "<text:s/>")
              .replace(/ $/, "<text:s/>");
          },
          r = "          <table:table-cell />\n",
          a = function (i, s, c) {
            var o = [];
            o.push(
              '      <table:table table:name="' +
                Je(s.SheetNames[c]) +
                '" table:style-name="ta1">\n',
            );
            var f = 0,
              l = 0,
              h = Gr(i["!ref"] || "A1"),
              d = i["!merges"] || [],
              x = 0,
              m = Array.isArray(i);
            if (i["!cols"])
              for (l = 0; l <= h.e.c; ++l)
                o.push(
                  "        <table:table-column" +
                    (i["!cols"][l]
                      ? ' table:style-name="co' + i["!cols"][l].ods + '"'
                      : "") +
                    "></table:table-column>\n",
                );
            var _ = i["!rows"] || [];
            for (f = 0; f < h.s.r; ++f)
              o.push(
                "        <table:table-row" +
                  (_[f] ? ' table:style-name="ro' + _[f].ods + '"' : "") +
                  "></table:table-row>\n",
              );
            for (; f <= h.e.r; ++f) {
              for (
                o.push(
                  "        <table:table-row" +
                    (_[f] ? ' table:style-name="ro' + _[f].ods + '"' : "") +
                    ">\n",
                ),
                  l = 0;
                l < h.s.c;
                ++l
              )
                o.push(r);
              for (; l <= h.e.c; ++l) {
                var A = !1,
                  T = {},
                  g = "";
                for (x = 0; x != d.length; ++x)
                  if (!(
                    d[x].s.c > l ||
                    d[x].s.r > f ||
                    d[x].e.c < l ||
                    d[x].e.r < f
                  )) {
                    ((d[x].s.c != l || d[x].s.r != f) && (A = !0),
                      (T["table:number-columns-spanned"] =
                        d[x].e.c - d[x].s.c + 1),
                      (T["table:number-rows-spanned"] =
                        d[x].e.r - d[x].s.r + 1));
                    break;
                  }
                if (A) o.push("          <table:covered-table-cell/>\n");
                else {
                  var O = Ce({ r: f, c: l }),
                    D = m ? (i[f] || [])[l] : i[O];
                  if (
                    D &&
                    D.f &&
                    ((T["table:formula"] = Je(ep(D.f))),
                    D.F && D.F.slice(0, O.length) == O)
                  ) {
                    var Y = Gr(D.F);
                    ((T["table:number-matrix-columns-spanned"] =
                      Y.e.c - Y.s.c + 1),
                      (T["table:number-matrix-rows-spanned"] =
                        Y.e.r - Y.s.r + 1));
                  }
                  if (D) {
                    switch (D.t) {
                      case "b":
                        ((g = D.v ? "TRUE" : "FALSE"),
                          (T["office:value-type"] = "boolean"),
                          (T["office:boolean-value"] = D.v ? "true" : "false"));
                        break;
                      case "n":
                        ((g = D.w || String(D.v || 0)),
                          (T["office:value-type"] = "float"),
                          (T["office:value"] = D.v || 0));
                        break;
                      case "s":
                      case "str":
                        ((g = null == D.v ? "" : D.v),
                          (T["office:value-type"] = "string"));
                        break;
                      case "d":
                        ((g = D.w || nr(D.v).toISOString()),
                          (T["office:value-type"] = "date"),
                          (T["office:date-value"] = nr(D.v).toISOString()),
                          (T["table:style-name"] = "ce1"));
                        break;
                      default:
                        o.push(r);
                        continue;
                    }
                    var F = e(g);
                    if (D.l && D.l.Target) {
                      var P = D.l.Target;
                      ("#" !=
                        (P =
                          "#" == P.charAt(0) ? "#" + rp(P.slice(1)) : P).charAt(
                          0,
                        ) &&
                        !P.match(/^\w+:/) &&
                        (P = "../" + P),
                        (F = ce("text:a", F, {
                          "xlink:href": P.replace(/&/g, "&amp;"),
                        })));
                    }
                    o.push(
                      "          " +
                        ce("table:table-cell", ce("text:p", F, {}), T) +
                        "\n",
                    );
                  } else o.push(r);
                }
              }
              o.push("        </table:table-row>\n");
            }
            return (o.push("      </table:table>\n"), o.join(""));
          };
        return function (s, c) {
          var o = [or],
            f = cn({
              "xmlns:office":
                "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
              "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
              "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
              "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
              "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
              "xmlns:fo":
                "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              "xmlns:dc": "http://purl.org/dc/elements/1.1/",
              "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
              "xmlns:number":
                "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
              "xmlns:presentation":
                "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
              "xmlns:svg":
                "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
              "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
              "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
              "xmlns:math": "http://www.w3.org/1998/Math/MathML",
              "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
              "xmlns:script":
                "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
              "xmlns:ooo": "http://openoffice.org/2004/office",
              "xmlns:ooow": "http://openoffice.org/2004/writer",
              "xmlns:oooc": "http://openoffice.org/2004/calc",
              "xmlns:dom": "http://www.w3.org/2001/xml-events",
              "xmlns:xforms": "http://www.w3.org/2002/xforms",
              "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
              "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
              "xmlns:rpt": "http://openoffice.org/2005/report",
              "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
              "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
              "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
              "xmlns:tableooo": "http://openoffice.org/2009/table",
              "xmlns:drawooo": "http://openoffice.org/2010/draw",
              "xmlns:calcext":
                "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
              "xmlns:loext":
                "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
              "xmlns:field":
                "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
              "xmlns:formx":
                "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
              "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
              "office:version": "1.2",
            }),
            l = cn({
              "xmlns:config":
                "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
              "office:mimetype":
                "application/vnd.oasis.opendocument.spreadsheet",
            });
          ("fods" == c.bookType
            ? (o.push("<office:document" + f + l + ">\n"),
              o.push(kc().replace(/office:document-meta/g, "office:meta")))
            : o.push("<office:document-content" + f + ">\n"),
            (function (i, s) {
              (i.push(" <office:automatic-styles>\n"),
                i.push(
                  '  <number:date-style style:name="N37" number:automatic-order="true">\n',
                ),
                i.push('   <number:month number:style="long"/>\n'),
                i.push("   <number:text>/</number:text>\n"),
                i.push('   <number:day number:style="long"/>\n'),
                i.push("   <number:text>/</number:text>\n"),
                i.push("   <number:year/>\n"),
                i.push("  </number:date-style>\n"));
              var c = 0;
              s.SheetNames.map(function (f) {
                return s.Sheets[f];
              }).forEach(function (f) {
                if (f && f["!cols"])
                  for (var l = 0; l < f["!cols"].length; ++l)
                    if (f["!cols"][l]) {
                      var h = f["!cols"][l];
                      if (null == h.width && null == h.wpx && null == h.wch)
                        continue;
                      ($t(h), (h.ods = c));
                      var d = f["!cols"][l].wpx + "px";
                      (i.push(
                        '  <style:style style:name="co' +
                          c +
                          '" style:family="table-column">\n',
                      ),
                        i.push(
                          '   <style:table-column-properties fo:break-before="auto" style:column-width="' +
                            d +
                            '"/>\n',
                        ),
                        i.push("  </style:style>\n"),
                        ++c);
                    }
              });
              var o = 0;
              (s.SheetNames.map(function (f) {
                return s.Sheets[f];
              }).forEach(function (f) {
                if (f && f["!rows"])
                  for (var l = 0; l < f["!rows"].length; ++l)
                    if (f["!rows"][l]) {
                      f["!rows"][l].ods = o;
                      var h = f["!rows"][l].hpx + "px";
                      (i.push(
                        '  <style:style style:name="ro' +
                          o +
                          '" style:family="table-row">\n',
                      ),
                        i.push(
                          '   <style:table-row-properties fo:break-before="auto" style:row-height="' +
                            h +
                            '"/>\n',
                        ),
                        i.push("  </style:style>\n"),
                        ++o);
                    }
              }),
                i.push(
                  '  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">\n',
                ),
                i.push(
                  '   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>\n',
                ),
                i.push("  </style:style>\n"),
                i.push(
                  '  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>\n',
                ),
                i.push(" </office:automatic-styles>\n"));
            })(o, s),
            o.push("  <office:body>\n"),
            o.push("    <office:spreadsheet>\n"));
          for (var h = 0; h != s.SheetNames.length; ++h)
            o.push(a(s.Sheets[s.SheetNames[h]], s, h));
          return (
            o.push("    </office:spreadsheet>\n"),
            o.push("  </office:body>\n"),
            o.push(
              "fods" == c.bookType
                ? "</office:document>"
                : "</office:document-content>",
            ),
            o.join("")
          );
        };
      })();
    function gf(e, r) {
      if ("fods" == r.bookType) return vf(e, r);
      var t = Ui(),
        a = "",
        n = [],
        i = [];
      return (
        Ie(
          t,
          (a = "mimetype"),
          "application/vnd.oasis.opendocument.spreadsheet",
        ),
        Ie(t, (a = "content.xml"), vf(e, r)),
        n.push([a, "text/xml"]),
        i.push([a, "ContentFile"]),
        Ie(t, (a = "styles.xml"), Ig(e, r)),
        n.push([a, "text/xml"]),
        i.push([a, "StylesFile"]),
        Ie(t, (a = "meta.xml"), or + kc()),
        n.push([a, "text/xml"]),
        i.push([a, "MetadataFile"]),
        Ie(
          t,
          (a = "manifest.rdf"),
          (function _h(e) {
            var r = [or];
            r.push(
              '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n',
            );
            for (var t = 0; t != e.length; ++t)
              (r.push(wc(e[t][0], e[t][1])), r.push(mh("", e[t][0])));
            return (
              r.push(wc("", "Document", "pkg")),
              r.push("</rdf:RDF>"),
              r.join("")
            );
          })(i),
        ),
        n.push([a, "application/rdf+xml"]),
        Ie(
          t,
          (a = "META-INF/manifest.xml"),
          (function xh(e) {
            var r = [or];
            (r.push(
              '<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">\n',
            ),
              r.push(
                '  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>\n',
              ));
            for (var t = 0; t < e.length; ++t)
              r.push(
                '  <manifest:file-entry manifest:full-path="' +
                  e[t][0] +
                  '" manifest:media-type="' +
                  e[t][1] +
                  '"/>\n',
              );
            return (r.push("</manifest:manifest>"), r.join(""));
          })(n),
        ),
        t
      );
    }
    function wa(e) {
      return new DataView(e.buffer, e.byteOffset, e.byteLength);
    }
    function Lg(e) {
      return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : Jr(gt(e));
    }
    function qt(e) {
      var r = e.reduce(function (n, i) {
          return n + i.length;
        }, 0),
        t = new Uint8Array(r),
        a = 0;
      return (
        e.forEach(function (n) {
          (t.set(n, a), (a += n.length));
        }),
        t
      );
    }
    function Rn(e, r) {
      var t = r ? r[0] : 0,
        a = 127 & e[t];
      e: if (
        e[t++] >= 128 &&
        ((a |= (127 & e[t]) << 7),
        e[t++] < 128 ||
          ((a |= (127 & e[t]) << 14), e[t++] < 128) ||
          ((a |= (127 & e[t]) << 21), e[t++] < 128) ||
          ((a += (127 & e[t]) * Math.pow(2, 28)), ++t, e[t++] < 128) ||
          ((a += (127 & e[t]) * Math.pow(2, 35)), ++t, e[t++] < 128) ||
          ((a += (127 & e[t]) * Math.pow(2, 42)), ++t, e[t++] < 128))
      )
        break e;
      return (r && (r[0] = t), a);
    }
    function Ke(e) {
      var r = new Uint8Array(7);
      r[0] = 127 & e;
      var t = 1;
      e: if (e > 127) {
        if (
          ((r[t - 1] |= 128),
          (r[t] = (e >> 7) & 127),
          ++t,
          e <= 16383 ||
            ((r[t - 1] |= 128), (r[t] = (e >> 14) & 127), ++t, e <= 2097151) ||
            ((r[t - 1] |= 128),
            (r[t] = (e >> 21) & 127),
            ++t,
            e <= 268435455) ||
            ((r[t - 1] |= 128),
            (r[t] = ((e / 256) >>> 21) & 127),
            ++t,
            e <= 34359738367) ||
            ((r[t - 1] |= 128),
            (r[t] = ((e / 65536) >>> 21) & 127),
            ++t,
            e <= 4398046511103))
        )
          break e;
        ((r[t - 1] |= 128), (r[t] = ((e / 16777216) >>> 21) & 127), ++t);
      }
      return r.slice(0, t);
    }
    function lr(e) {
      var r = 0,
        t = 127 & e[r];
      e: if (e[r++] >= 128) {
        if (
          ((t |= (127 & e[r]) << 7),
          e[r++] < 128 ||
            ((t |= (127 & e[r]) << 14), e[r++] < 128) ||
            ((t |= (127 & e[r]) << 21), e[r++] < 128))
        )
          break e;
        t |= (127 & e[r]) << 28;
      }
      return t;
    }
    function Ve(e) {
      for (var r = [], t = [0]; t[0] < e.length;) {
        var c,
          a = t[0],
          n = Rn(e, t),
          i = 7 & n,
          s = 0;
        if (0 == (n = Math.floor(n / 8))) break;
        switch (i) {
          case 0:
            for (var o = t[0]; e[t[0]++] >= 128;);
            c = e.slice(o, t[0]);
            break;
          case 5:
            ((c = e.slice(t[0], t[0] + (s = 4))), (t[0] += s));
            break;
          case 1:
            ((c = e.slice(t[0], t[0] + (s = 8))), (t[0] += s));
            break;
          case 2:
            ((s = Rn(e, t)), (c = e.slice(t[0], t[0] + s)), (t[0] += s));
            break;
          default:
            throw new Error(
              "PB Type "
                .concat(i, " for Field ")
                .concat(n, " at offset ")
                .concat(a),
            );
        }
        var f = { data: c, type: i };
        null == r[n] ? (r[n] = [f]) : r[n].push(f);
      }
      return r;
    }
    function Cr(e) {
      var r = [];
      return (
        e.forEach(function (t, a) {
          t.forEach(function (n) {
            n.data &&
              (r.push(Ke(8 * a + n.type)),
              2 == n.type && r.push(Ke(n.data.length)),
              r.push(n.data));
          });
        }),
        qt(r)
      );
    }
    function st(e) {
      for (var r, t = [], a = [0]; a[0] < e.length;) {
        var n = Rn(e, a),
          i = Ve(e.slice(a[0], a[0] + n));
        a[0] += n;
        var s = { id: lr(i[1][0].data), messages: [] };
        (i[2].forEach(function (c) {
          var o = Ve(c.data),
            f = lr(o[3][0].data);
          (s.messages.push({ meta: o, data: e.slice(a[0], a[0] + f) }),
            (a[0] += f));
        }),
          null != (r = i[3]) && r[0] && (s.merge = lr(i[3][0].data) >>> 0 > 0),
          t.push(s));
      }
      return t;
    }
    function Va(e) {
      var r = [];
      return (
        e.forEach(function (t) {
          var a = [];
          ((a[1] = [{ data: Ke(t.id), type: 0 }]),
            (a[2] = []),
            null != t.merge && (a[3] = [{ data: Ke(+!!t.merge), type: 0 }]));
          var n = [];
          t.messages.forEach(function (s) {
            (n.push(s.data),
              (s.meta[3] = [{ type: 0, data: Ke(s.data.length) }]),
              a[2].push({ data: Cr(s.meta), type: 2 }));
          });
          var i = Cr(a);
          (r.push(Ke(i.length)),
            r.push(i),
            n.forEach(function (s) {
              return r.push(s);
            }));
        }),
        qt(r)
      );
    }
    function Mg(e, r) {
      if (0 != e) throw new Error("Unexpected Snappy chunk type ".concat(e));
      for (var t = [0], a = Rn(r, t), n = []; t[0] < r.length;) {
        var i = 3 & r[t[0]];
        if (0 != i) {
          var o = 0,
            f = 0;
          if (
            (1 == i
              ? ((f = 4 + ((r[t[0]] >> 2) & 7)),
                (o = (224 & r[t[0]++]) << 3),
                (o |= r[t[0]++]))
              : ((f = 1 + (r[t[0]++] >> 2)),
                2 == i
                  ? ((o = r[t[0]] | (r[t[0] + 1] << 8)), (t[0] += 2))
                  : ((o =
                      (r[t[0]] |
                        (r[t[0] + 1] << 8) |
                        (r[t[0] + 2] << 16) |
                        (r[t[0] + 3] << 24)) >>>
                      0),
                    (t[0] += 4))),
            (n = [qt(n)]),
            0 == o)
          )
            throw new Error("Invalid offset 0");
          if (o > n[0].length) throw new Error("Invalid offset beyond length");
          if (f >= o)
            for (n.push(n[0].slice(-o)), f -= o; f >= n[n.length - 1].length;)
              (n.push(n[n.length - 1]), (f -= n[n.length - 1].length));
          n.push(n[0].slice(-o, -o + f));
        } else {
          var s = r[t[0]++] >> 2;
          if (s < 60) ++s;
          else {
            var c = s - 59;
            ((s = r[t[0]]),
              c > 1 && (s |= r[t[0] + 1] << 8),
              c > 2 && (s |= r[t[0] + 2] << 16),
              c > 3 && (s |= r[t[0] + 3] << 24),
              (s >>>= 0),
              s++,
              (t[0] += c));
          }
          (n.push(r.slice(t[0], t[0] + s)), (t[0] += s));
        }
      }
      var l = qt(n);
      if (l.length != a)
        throw new Error(
          "Unexpected length: ".concat(l.length, " != ").concat(a),
        );
      return l;
    }
    function ct(e) {
      for (var r = [], t = 0; t < e.length;) {
        var a = e[t++],
          n = e[t] | (e[t + 1] << 8) | (e[t + 2] << 16);
        (r.push(Mg(a, e.slice((t += 3), t + n))), (t += n));
      }
      if (t !== e.length) throw new Error("data is not a valid framed stream!");
      return qt(r);
    }
    function Xa(e) {
      for (var r = [], t = 0; t < e.length;) {
        var a = Math.min(e.length - t, 268435455),
          n = new Uint8Array(4);
        r.push(n);
        var i = Ke(a),
          s = i.length;
        (r.push(i),
          a <= 60
            ? (s++, r.push(new Uint8Array([(a - 1) << 2])))
            : a <= 256
              ? ((s += 2), r.push(new Uint8Array([240, (a - 1) & 255])))
              : a <= 65536
                ? ((s += 3),
                  r.push(
                    new Uint8Array([244, (a - 1) & 255, ((a - 1) >> 8) & 255]),
                  ))
                : a <= 16777216
                  ? ((s += 4),
                    r.push(
                      new Uint8Array([
                        248,
                        (a - 1) & 255,
                        ((a - 1) >> 8) & 255,
                        ((a - 1) >> 16) & 255,
                      ]),
                    ))
                  : a <= 4294967296 &&
                    ((s += 5),
                    r.push(
                      new Uint8Array([
                        252,
                        (a - 1) & 255,
                        ((a - 1) >> 8) & 255,
                        ((a - 1) >> 16) & 255,
                        ((a - 1) >>> 24) & 255,
                      ]),
                    )),
          r.push(e.slice(t, t + a)),
          (s += a),
          (n[0] = 0),
          (n[1] = 255 & s),
          (n[2] = (s >> 8) & 255),
          (n[3] = (s >> 16) & 255),
          (t += a));
      }
      return qt(r);
    }
    function Ps(e, r) {
      var t = new Uint8Array(32),
        a = wa(t),
        n = 12,
        i = 0;
      switch (((t[0] = 5), e.t)) {
        case "n":
          ((t[1] = 2),
            (function Dg(e, r, t) {
              var a =
                  Math.floor(0 == t ? 0 : Math.LOG10E * Math.log(Math.abs(t))) +
                  6176 -
                  20,
                n = t / Math.pow(10, a - 6176);
              ((e[r + 15] |= a >> 7), (e[r + 14] |= (127 & a) << 1));
              for (var i = 0; n >= 1; ++i, n /= 256) e[r + i] = 255 & n;
              e[r + 15] |= t >= 0 ? 0 : 128;
            })(t, n, e.v),
            (i |= 1),
            (n += 16));
          break;
        case "b":
          ((t[1] = 6), a.setFloat64(n, e.v ? 1 : 0, !0), (i |= 2), (n += 8));
          break;
        case "s":
          if (-1 == r.indexOf(e.v))
            throw new Error("Value ".concat(e.v, " missing from SST!"));
          ((t[1] = 3), a.setUint32(n, r.indexOf(e.v), !0), (i |= 8), (n += 4));
          break;
        default:
          throw "unsupported cell type " + e.t;
      }
      return (a.setUint32(8, i, !0), t.slice(0, n));
    }
    function Ds(e, r) {
      var t = new Uint8Array(32),
        a = wa(t),
        n = 12,
        i = 0;
      switch (((t[0] = 3), e.t)) {
        case "n":
          ((t[2] = 2), a.setFloat64(n, e.v, !0), (i |= 32), (n += 8));
          break;
        case "b":
          ((t[2] = 6), a.setFloat64(n, e.v ? 1 : 0, !0), (i |= 32), (n += 8));
          break;
        case "s":
          if (-1 == r.indexOf(e.v))
            throw new Error("Value ".concat(e.v, " missing from SST!"));
          ((t[2] = 3), a.setUint32(n, r.indexOf(e.v), !0), (i |= 16), (n += 4));
          break;
        default:
          throw "unsupported cell type " + e.t;
      }
      return (a.setUint32(4, i, !0), t.slice(0, n));
    }
    function Mr(e) {
      return Rn(Ve(e)[1][0].data);
    }
    function zg(e, r, t) {
      var a, n, i, s;
      if (null == (a = e[6]) || !a[0] || null == (n = e[7]) || !n[0])
        throw "Mutation only works on post-BNC storages!";
      if (
        (null == (s = null == (i = e[8]) ? void 0 : i[0]) ? void 0 : s.data) &&
        lr(e[8][0].data) > 0
      )
        throw "Math only works with normal offsets";
      for (
        var o = 0,
          f = wa(e[7][0].data),
          l = 0,
          h = [],
          d = wa(e[4][0].data),
          x = 0,
          m = [],
          u = 0;
        u < r.length;
        ++u
      )
        if (null != r[u]) {
          var _, A;
          switch (
            (f.setUint16(2 * u, l, !0), d.setUint16(2 * u, x, !0), typeof r[u])
          ) {
            case "string":
              ((_ = Ps({ t: "s", v: r[u] }, t)),
                (A = Ds({ t: "s", v: r[u] }, t)));
              break;
            case "number":
              ((_ = Ps({ t: "n", v: r[u] }, t)),
                (A = Ds({ t: "n", v: r[u] }, t)));
              break;
            case "boolean":
              ((_ = Ps({ t: "b", v: r[u] }, t)),
                (A = Ds({ t: "b", v: r[u] }, t)));
              break;
            default:
              throw new Error("Unsupported value " + r[u]);
          }
          (h.push(_), (l += _.length), m.push(A), (x += A.length), ++o);
        } else (f.setUint16(2 * u, 65535, !0), d.setUint16(2 * u, 65535));
      for (e[2][0].data = Ke(o); u < e[7][0].data.length / 2; ++u)
        (f.setUint16(2 * u, 65535, !0), d.setUint16(2 * u, 65535, !0));
      return ((e[6][0].data = qt(h)), (e[3][0].data = qt(m)), o);
    }
    function Us(e) {
      !(function Af(e) {
        return function (t) {
          for (var a = 0; a != e.length; ++a) {
            var n = e[a];
            (void 0 === t[n[0]] && (t[n[0]] = n[1]),
              "n" === n[2] && (t[n[0]] = Number(t[n[0]])));
          }
        };
      })([
        ["cellDates", !1],
        ["bookSST", !1],
        ["bookType", "xlsx"],
        ["compression", !1],
        ["WTF", !1],
      ])(e);
    }
    function eE(e, r) {
      return "ods" == r.bookType
        ? gf(e, r)
        : "numbers" == r.bookType
          ? (function Jg(e, r) {
              if (!r || !r.numbers)
                throw new Error(
                  "Must pass a `numbers` option -- check the README",
                );
              var t = e.Sheets[e.SheetNames[0]];
              e.SheetNames.length > 1 &&
                console.error(
                  "The Numbers writer currently writes only the first table",
                );
              var a = Gr(t["!ref"]);
              a.s.r = a.s.c = 0;
              var n = !1;
              (a.e.c > 9 && ((n = !0), (a.e.c = 9)),
                a.e.r > 49 && ((n = !0), (a.e.r = 49)),
                n &&
                  console.error(
                    "The Numbers writer is currently limited to ".concat(Ne(a)),
                  ));
              var i = vi(t, { range: a, header: 1 }),
                s = ["~Sh33tJ5~"];
              i.forEach(function (N) {
                return N.forEach(function (R) {
                  "string" == typeof R && s.push(R);
                });
              });
              var c = {},
                o = [],
                f = Se.read(r.numbers, { type: "base64" });
              (f.FileIndex.map(function (N, R) {
                return [N, f.FullPaths[R]];
              }).forEach(function (N) {
                var R = N[0],
                  ee = N[1];
                2 == R.type &&
                  R.name.match(/\.iwa/) &&
                  st(ct(R.content)).forEach(function (te) {
                    (o.push(te.id),
                      (c[te.id] = {
                        deps: [],
                        location: ee,
                        type: lr(te.messages[0].meta[1][0].data),
                      }));
                  });
              }),
                o.sort(function (N, R) {
                  return N - R;
                }));
              var l = o
                .filter(function (N) {
                  return N > 1;
                })
                .map(function (N) {
                  return [N, Ke(N)];
                });
              f.FileIndex.map(function (N, R) {
                return [N, f.FullPaths[R]];
              }).forEach(function (N) {
                var R = N[0];
                R.name.match(/\.iwa/) &&
                  st(ct(R.content)).forEach(function (oe) {
                    oe.messages.forEach(function (fe) {
                      l.forEach(function (te) {
                        oe.messages.some(function (Le) {
                          return (
                            11006 != lr(Le.meta[1][0].data) &&
                            (function bg(e, r) {
                              e: for (
                                var t = 0;
                                t <= e.length - r.length;
                                ++t
                              ) {
                                for (var a = 0; a < r.length; ++a)
                                  if (e[t + a] != r[a]) continue e;
                                return !0;
                              }
                              return !1;
                            })(Le.data, te[1])
                          );
                        }) && c[te[0]].deps.push(oe.id);
                      });
                    });
                  });
              });
              for (
                var m,
                  d = Se.find(f, c[1].location),
                  x = st(ct(d.content)),
                  u = 0;
                u < x.length;
                ++u
              ) {
                var _ = x[u];
                1 == _.id && (m = _);
              }
              var A = Mr(Ve(m.messages[0].data)[1][0].data);
              for (
                x = st(ct((d = Se.find(f, c[A].location)).content)), u = 0;
                u < x.length;
                ++u
              )
                (_ = x[u]).id == A && (m = _);
              for (
                A = Mr(Ve(m.messages[0].data)[2][0].data),
                  x = st(ct((d = Se.find(f, c[A].location)).content)),
                  u = 0;
                u < x.length;
                ++u
              )
                (_ = x[u]).id == A && (m = _);
              for (
                A = Mr(Ve(m.messages[0].data)[2][0].data),
                  x = st(ct((d = Se.find(f, c[A].location)).content)),
                  u = 0;
                u < x.length;
                ++u
              )
                (_ = x[u]).id == A && (m = _);
              var T = Ve(m.messages[0].data);
              ((T[6][0].data = Ke(a.e.r + 1)), (T[7][0].data = Ke(a.e.c + 1)));
              for (
                var g = Mr(T[46][0].data),
                  O = Se.find(f, c[g].location),
                  D = st(ct(O.content)),
                  Y = 0;
                Y < D.length && D[Y].id != g;
                ++Y
              );
              if (D[Y].id != g) throw "Bad ColumnRowUIDMapArchive";
              var F = Ve(D[Y].messages[0].data);
              ((F[1] = []), (F[2] = []), (F[3] = []));
              for (var P = 0; P <= a.e.c; ++P) {
                var I = [];
                ((I[1] = I[2] = [{ type: 0, data: Ke(P + 420690) }]),
                  F[1].push({ type: 2, data: Cr(I) }),
                  F[2].push({ type: 0, data: Ke(P) }),
                  F[3].push({ type: 0, data: Ke(P) }));
              }
              ((F[4] = []), (F[5] = []), (F[6] = []));
              for (var z = 0; z <= a.e.r; ++z)
                (((I = [])[1] = I[2] = [{ type: 0, data: Ke(z + 726270) }]),
                  F[4].push({ type: 2, data: Cr(I) }),
                  F[5].push({ type: 0, data: Ke(z) }),
                  F[6].push({ type: 0, data: Ke(z) }));
              ((D[Y].messages[0].data = Cr(F)),
                (O.content = Xa(Va(D))),
                (O.size = O.content.length),
                delete T[46]);
              var Z = Ve(T[4][0].data);
              Z[7][0].data = Ke(a.e.r + 1);
              var ue = Mr(Ve(Z[1][0].data)[2][0].data);
              if (
                (D = st(ct((O = Se.find(f, c[ue].location)).content)))[0].id !=
                ue
              )
                throw "Bad HeaderStorageBucket";
              var ge = Ve(D[0].messages[0].data);
              for (z = 0; z < i.length; ++z) {
                var xe = Ve(ge[2][0].data);
                ((xe[1][0].data = Ke(z)),
                  (xe[4][0].data = Ke(i[z].length)),
                  (ge[2][z] = { type: ge[2][0].type, data: Cr(xe) }));
              }
              ((D[0].messages[0].data = Cr(ge)),
                (O.content = Xa(Va(D))),
                (O.size = O.content.length));
              var ke = Mr(Z[2][0].data);
              if (
                (D = st(ct((O = Se.find(f, c[ke].location)).content)))[0].id !=
                ke
              )
                throw "Bad HeaderStorageBucket";
              for (ge = Ve(D[0].messages[0].data), P = 0; P <= a.e.c; ++P)
                (((xe = Ve(ge[2][0].data))[1][0].data = Ke(P)),
                  (xe[4][0].data = Ke(a.e.r + 1)),
                  (ge[2][P] = { type: ge[2][0].type, data: Cr(xe) }));
              ((D[0].messages[0].data = Cr(ge)),
                (O.content = Xa(Va(D))),
                (O.size = O.content.length));
              var Ae = Mr(Z[4][0].data);
              !(function () {
                for (
                  var ee,
                    N = Se.find(f, c[Ae].location),
                    R = st(ct(N.content)),
                    _e = 0;
                  _e < R.length;
                  ++_e
                ) {
                  var oe = R[_e];
                  oe.id == Ae && (ee = oe);
                }
                var fe = Ve(ee.messages[0].data);
                fe[3] = [];
                var te = [];
                (s.forEach(function (Ze, Me) {
                  ((te[1] = [{ type: 0, data: Ke(Me) }]),
                    (te[2] = [{ type: 0, data: Ke(1) }]),
                    (te[3] = [{ type: 2, data: Lg(Ze) }]),
                    fe[3].push({ type: 2, data: Cr(te) }));
                }),
                  (ee.messages[0].data = Cr(fe)));
                var C = Xa(Va(R));
                ((N.content = C), (N.size = N.content.length));
              })();
              var De = Ve(Z[3][0].data),
                ve = De[1][0];
              delete De[2];
              var ye = Ve(ve.data),
                ne = Mr(ye[2][0].data);
              (!(function () {
                for (
                  var ee,
                    N = Se.find(f, c[ne].location),
                    R = st(ct(N.content)),
                    _e = 0;
                  _e < R.length;
                  ++_e
                ) {
                  var oe = R[_e];
                  oe.id == ne && (ee = oe);
                }
                var fe = Ve(ee.messages[0].data);
                (delete fe[6], delete De[7]);
                var te = new Uint8Array(fe[5][0].data);
                fe[5] = [];
                for (var Le = 0, C = 0; C <= a.e.r; ++C) {
                  var Ze = Ve(te);
                  ((Le += zg(Ze, i[C], s)),
                    (Ze[1][0].data = Ke(C)),
                    fe[5].push({ data: Cr(Ze), type: 2 }));
                }
                ((fe[1] = [{ type: 0, data: Ke(a.e.c + 1) }]),
                  (fe[2] = [{ type: 0, data: Ke(a.e.r + 1) }]),
                  (fe[3] = [{ type: 0, data: Ke(Le) }]),
                  (fe[4] = [{ type: 0, data: Ke(a.e.r + 1) }]),
                  (ee.messages[0].data = Cr(fe)));
                var $e = Xa(Va(R));
                ((N.content = $e), (N.size = N.content.length));
              })(),
                (ve.data = Cr(ye)),
                (Z[3][0].data = Cr(De)),
                (T[4][0].data = Cr(Z)),
                (m.messages[0].data = Cr(T)));
              var X = Xa(Va(x));
              return ((d.content = X), (d.size = d.content.length), f);
            })(e, r)
          : "xlsb" == r.bookType
            ? (function rE(e, r) {
                ((Ga = 1024),
                  e && !e.SSF && (e.SSF = je(we)),
                  e &&
                    e.SSF &&
                    (Ia(),
                    an(e.SSF),
                    (r.revssf = Yn(e.SSF)),
                    (r.revssf[e.SSF[65535]] = 0),
                    (r.ssf = e.SSF)),
                  (r.rels = {}),
                  (r.wbrels = {}),
                  (r.Strings = []),
                  (r.Strings.Count = 0),
                  (r.Strings.Unique = 0),
                  wn
                    ? (r.revStrings = new Map())
                    : ((r.revStrings = {}),
                      (r.revStrings.foo = []),
                      delete r.revStrings.foo));
                var t = "xlsb" == r.bookType ? "bin" : "xml",
                  a = No.indexOf(r.bookType) > -1,
                  n = {
                    workbooks: [],
                    sheets: [],
                    charts: [],
                    dialogs: [],
                    macros: [],
                    rels: [],
                    strs: [],
                    comments: [],
                    threadedcomments: [],
                    links: [],
                    coreprops: [],
                    extprops: [],
                    custprops: [],
                    themes: [],
                    styles: [],
                    calcchains: [],
                    vba: [],
                    drawings: [],
                    metadata: [],
                    people: [],
                    TODO: [],
                    xmlns: "",
                  };
                Us((r = r || {}));
                var i = Ui(),
                  s = "",
                  c = 0;
                if (
                  ((r.cellXfs = []),
                  Qt(r.cellXfs, {}, { revssf: { General: 0 } }),
                  e.Props || (e.Props = {}),
                  Ie(i, (s = "docProps/core.xml"), yc(e.Props, r)),
                  n.coreprops.push(s),
                  Xe(r.rels, 2, s, Oe.CORE_PROPS),
                  (s = "docProps/app.xml"),
                  !e.Props || !e.Props.SheetNames)
                )
                  if (e.Workbook && e.Workbook.Sheets) {
                    for (var o = [], f = 0; f < e.SheetNames.length; ++f)
                      2 != (e.Workbook.Sheets[f] || {}).Hidden &&
                        o.push(e.SheetNames[f]);
                    e.Props.SheetNames = o;
                  } else e.Props.SheetNames = e.SheetNames;
                for (
                  e.Props.Worksheets = e.Props.SheetNames.length,
                    Ie(i, s, Nc(e.Props)),
                    n.extprops.push(s),
                    Xe(r.rels, 3, s, Oe.EXT_PROPS),
                    e.Custprops !== e.Props &&
                      sr(e.Custprops || {}).length > 0 &&
                      (Ie(i, (s = "docProps/custom.xml"), Oc(e.Custprops)),
                      n.custprops.push(s),
                      Xe(r.rels, 4, s, Oe.CUST_PROPS)),
                    c = 1;
                  c <= e.SheetNames.length;
                  ++c
                ) {
                  var l = { "!id": {} },
                    h = e.Sheets[e.SheetNames[c - 1]];
                  if (
                    (Ie(
                      i,
                      (s = "xl/worksheets/sheet" + c + "." + t),
                      P2(c - 1, s, r, e, l),
                    ),
                    n.sheets.push(s),
                    Xe(
                      r.wbrels,
                      -1,
                      "worksheets/sheet" + c + "." + t,
                      Oe.WS[0],
                    ),
                    h)
                  ) {
                    var x = h["!comments"],
                      m = !1,
                      u = "";
                    (x &&
                      x.length > 0 &&
                      (Ie(i, (u = "xl/comments" + c + "." + t), B2(x, u, r)),
                      n.comments.push(u),
                      Xe(l, -1, "../comments" + c + "." + t, Oe.CMNT),
                      (m = !0)),
                      h["!legacy"] &&
                        m &&
                        Ie(
                          i,
                          "xl/drawings/vmlDrawing" + c + ".vml",
                          yo(c, h["!comments"]),
                        ),
                      delete h["!comments"],
                      delete h["!legacy"]);
                  }
                  l["!id"].rId1 && Ie(i, hn(s), Ba(l));
                }
                return (
                  null != r.Strings &&
                    r.Strings.length > 0 &&
                    (Ie(
                      i,
                      (s = "xl/sharedStrings." + t),
                      (function M2(e, r, t) {
                        return (".bin" === r.slice(-4) ? D1 : xo)(e, t);
                      })(r.Strings, s, r),
                    ),
                    n.strs.push(s),
                    Xe(r.wbrels, -1, "sharedStrings." + t, Oe.SST)),
                  Ie(
                    i,
                    (s = "xl/workbook." + t),
                    (function b2(e, r, t) {
                      return (".bin" === r.slice(-4) ? T2 : Qo)(e, t);
                    })(e, s, r),
                  ),
                  n.workbooks.push(s),
                  Xe(r.rels, 1, s, Oe.WB),
                  Ie(i, (s = "xl/theme/theme1.xml"), Ts(e.Themes, r)),
                  n.themes.push(s),
                  Xe(r.wbrels, -1, "theme/theme1.xml", Oe.THEME),
                  Ie(
                    i,
                    (s = "xl/styles." + t),
                    (function D2(e, r, t) {
                      return (".bin" === r.slice(-4) ? Ox : Ao)(e, t);
                    })(e, s, r),
                  ),
                  n.styles.push(s),
                  Xe(r.wbrels, -1, "styles." + t, Oe.STY),
                  e.vbaraw &&
                    a &&
                    (Ie(i, (s = "xl/vbaProject.bin"), e.vbaraw),
                    n.vba.push(s),
                    Xe(r.wbrels, -1, "vbaProject.bin", Oe.VBA)),
                  Ie(
                    i,
                    (s = "xl/metadata." + t),
                    (function U2(e) {
                      return (".bin" === e.slice(-4) ? am : Co)();
                    })(s),
                  ),
                  n.metadata.push(s),
                  Xe(r.wbrels, -1, "metadata." + t, Oe.XLMETA),
                  Ie(i, "[Content_Types].xml", Sc(n, r)),
                  Ie(i, "_rels/.rels", Ba(r.rels)),
                  Ie(i, "xl/_rels/workbook." + t + ".rels", Ba(r.wbrels)),
                  delete r.revssf,
                  delete r.ssf,
                  i
                );
              })(e, r)
            : (function Sf(e, r) {
                ((Ga = 1024),
                  e && !e.SSF && (e.SSF = je(we)),
                  e &&
                    e.SSF &&
                    (Ia(),
                    an(e.SSF),
                    (r.revssf = Yn(e.SSF)),
                    (r.revssf[e.SSF[65535]] = 0),
                    (r.ssf = e.SSF)),
                  (r.rels = {}),
                  (r.wbrels = {}),
                  (r.Strings = []),
                  (r.Strings.Count = 0),
                  (r.Strings.Unique = 0),
                  wn
                    ? (r.revStrings = new Map())
                    : ((r.revStrings = {}),
                      (r.revStrings.foo = []),
                      delete r.revStrings.foo));
                var t = "xml",
                  a = No.indexOf(r.bookType) > -1,
                  n = {
                    workbooks: [],
                    sheets: [],
                    charts: [],
                    dialogs: [],
                    macros: [],
                    rels: [],
                    strs: [],
                    comments: [],
                    threadedcomments: [],
                    links: [],
                    coreprops: [],
                    extprops: [],
                    custprops: [],
                    themes: [],
                    styles: [],
                    calcchains: [],
                    vba: [],
                    drawings: [],
                    metadata: [],
                    people: [],
                    TODO: [],
                    xmlns: "",
                  };
                Us((r = r || {}));
                var i = Ui(),
                  s = "",
                  c = 0;
                if (
                  ((r.cellXfs = []),
                  Qt(r.cellXfs, {}, { revssf: { General: 0 } }),
                  e.Props || (e.Props = {}),
                  Ie(i, (s = "docProps/core.xml"), yc(e.Props, r)),
                  n.coreprops.push(s),
                  Xe(r.rels, 2, s, Oe.CORE_PROPS),
                  (s = "docProps/app.xml"),
                  !e.Props || !e.Props.SheetNames)
                )
                  if (e.Workbook && e.Workbook.Sheets) {
                    for (var o = [], f = 0; f < e.SheetNames.length; ++f)
                      2 != (e.Workbook.Sheets[f] || {}).Hidden &&
                        o.push(e.SheetNames[f]);
                    e.Props.SheetNames = o;
                  } else e.Props.SheetNames = e.SheetNames;
                ((e.Props.Worksheets = e.Props.SheetNames.length),
                  Ie(i, s, Nc(e.Props)),
                  n.extprops.push(s),
                  Xe(r.rels, 3, s, Oe.EXT_PROPS),
                  e.Custprops !== e.Props &&
                    sr(e.Custprops || {}).length > 0 &&
                    (Ie(i, (s = "docProps/custom.xml"), Oc(e.Custprops)),
                    n.custprops.push(s),
                    Xe(r.rels, 4, s, Oe.CUST_PROPS)));
                var l = ["SheetJ5"];
                for (r.tcid = 0, c = 1; c <= e.SheetNames.length; ++c) {
                  var h = { "!id": {} },
                    d = e.Sheets[e.SheetNames[c - 1]];
                  if (
                    (Ie(
                      i,
                      (s = "xl/worksheets/sheet" + c + "." + t),
                      Xo(c - 1, r, e, h),
                    ),
                    n.sheets.push(s),
                    Xe(
                      r.wbrels,
                      -1,
                      "worksheets/sheet" + c + "." + t,
                      Oe.WS[0],
                    ),
                    d)
                  ) {
                    var m = d["!comments"],
                      u = !1,
                      _ = "";
                    if (m && m.length > 0) {
                      var A = !1;
                      (m.forEach(function (T) {
                        T[1].forEach(function (g) {
                          1 == g.T && (A = !0);
                        });
                      }),
                        A &&
                          (Ie(
                            i,
                            (_ =
                              "xl/threadedComments/threadedComment" +
                              c +
                              "." +
                              t),
                            hm(m, l, r),
                          ),
                          n.threadedcomments.push(_),
                          Xe(
                            h,
                            -1,
                            "../threadedComments/threadedComment" + c + "." + t,
                            Oe.TCMNT,
                          )),
                        Ie(i, (_ = "xl/comments" + c + "." + t), Ro(m)),
                        n.comments.push(_),
                        Xe(h, -1, "../comments" + c + "." + t, Oe.CMNT),
                        (u = !0));
                    }
                    (d["!legacy"] &&
                      u &&
                      Ie(
                        i,
                        "xl/drawings/vmlDrawing" + c + ".vml",
                        yo(c, d["!comments"]),
                      ),
                      delete d["!comments"],
                      delete d["!legacy"]);
                  }
                  h["!id"].rId1 && Ie(i, hn(s), Ba(h));
                }
                return (
                  null != r.Strings &&
                    r.Strings.length > 0 &&
                    (Ie(i, (s = "xl/sharedStrings." + t), xo(r.Strings, r)),
                    n.strs.push(s),
                    Xe(r.wbrels, -1, "sharedStrings." + t, Oe.SST)),
                  Ie(i, (s = "xl/workbook." + t), Qo(e)),
                  n.workbooks.push(s),
                  Xe(r.rels, 1, s, Oe.WB),
                  Ie(i, (s = "xl/theme/theme1.xml"), Ts(e.Themes, r)),
                  n.themes.push(s),
                  Xe(r.wbrels, -1, "theme/theme1.xml", Oe.THEME),
                  Ie(i, (s = "xl/styles." + t), Ao(e, r)),
                  n.styles.push(s),
                  Xe(r.wbrels, -1, "styles." + t, Oe.STY),
                  e.vbaraw &&
                    a &&
                    (Ie(i, (s = "xl/vbaProject.bin"), e.vbaraw),
                    n.vba.push(s),
                    Xe(r.wbrels, -1, "vbaProject.bin", Oe.VBA)),
                  Ie(i, (s = "xl/metadata." + t), Co()),
                  n.metadata.push(s),
                  Xe(r.wbrels, -1, "metadata." + t, Oe.XLMETA),
                  l.length > 1 &&
                    (Ie(
                      i,
                      (s = "xl/persons/person.xml"),
                      (function xm(e) {
                        var r = [
                          or,
                          ce("personList", null, {
                            xmlns: _r.TCMNT,
                            "xmlns:x": zt[0],
                          }).replace(/[\/]>/, ">"),
                        ];
                        return (
                          e.forEach(function (t, a) {
                            r.push(
                              ce("person", null, {
                                displayName: t,
                                id:
                                  "{54EE7950-7262-4200-6969-" +
                                  ("000000000000" + a).slice(-12) +
                                  "}",
                                userId: t,
                                providerId: "None",
                              }),
                            );
                          }),
                          r.push("</personList>"),
                          r.join("")
                        );
                      })(l),
                    ),
                    n.people.push(s),
                    Xe(r.wbrels, -1, "persons/person.xml", Oe.PEOPLE)),
                  Ie(i, "[Content_Types].xml", Sc(n, r)),
                  Ie(i, "_rels/.rels", Ba(r.rels)),
                  Ie(i, "xl/_rels/workbook.xml.rels", Ba(r.wbrels)),
                  delete r.revssf,
                  delete r.ssf,
                  i
                );
              })(e, r);
    }
    function kf(e, r) {
      switch (r.type) {
        case "base64":
        case "binary":
          break;
        case "buffer":
        case "array":
          r.type = "";
          break;
        case "file":
          return nn(r.file, Se.write(e, { type: be ? "buffer" : "" }));
        case "string":
          throw new Error(
            "'string' output type invalid for '" + r.bookType + "' files",
          );
        default:
          throw new Error("Unrecognized type " + r.type);
      }
      return Se.write(e, r);
    }
    function St(e, r, t) {
      t || (t = "");
      var a = t + e;
      switch (r.type) {
        case "base64":
          return qa(gt(a));
        case "binary":
          return gt(a);
        case "string":
          return e;
        case "file":
          return nn(r.file, a, "utf8");
        case "buffer":
          return be
            ? Ft(a, "utf8")
            : typeof TextEncoder < "u"
              ? new TextEncoder().encode(a)
              : St(a, { type: "binary" })
                  .split("")
                  .map(function (n) {
                    return n.charCodeAt(0);
                  });
      }
      throw new Error("Unrecognized type " + r.type);
    }
    function pi(e, r) {
      switch (r.type) {
        case "string":
        case "base64":
        case "binary":
          for (var t = "", a = 0; a < e.length; ++a)
            t += String.fromCharCode(e[a]);
          return "base64" == r.type ? qa(t) : "string" == r.type ? qe(t) : t;
        case "file":
          return nn(r.file, e);
        case "buffer":
          return e;
        default:
          throw new Error("Unrecognized type " + r.type);
      }
    }
    function Vs(e, r) {
      ((function Gn() {
        (rt(1200),
          (function Nl() {
            Un(1252);
          })());
      })(),
        (function jo(e) {
          if (!e || !e.SheetNames || !e.Sheets)
            throw new Error("Invalid Workbook");
          if (!e.SheetNames.length) throw new Error("Workbook is empty");
          !(function c2(e, r, t) {
            e.forEach(function (a, n) {
              $o(a);
              for (var i = 0; i < n; ++i)
                if (a == e[i]) throw new Error("Duplicate Sheet Name: " + a);
              if (t) {
                var s = (r && r[n] && r[n].CodeName) || a;
                if (95 == s.charCodeAt(0) && s.length > 22)
                  throw new Error("Bad Code Name: Worksheet" + s);
              }
            });
          })(e.SheetNames, (e.Workbook && e.Workbook.Sheets) || [], !!e.vbaraw);
          for (var t = 0; t < e.SheetNames.length; ++t)
            ap(e.Sheets[e.SheetNames[t]], 0, t);
        })(e));
      var t = je(r || {});
      if (
        (t.cellStyles && ((t.cellNF = !0), (t.sheetStubs = !0)),
        "array" == t.type)
      ) {
        t.type = "binary";
        var a = Vs(e, t);
        return ((t.type = "array"), en(a));
      }
      var n = 0;
      if (
        t.sheet &&
        ((n =
          "number" == typeof t.sheet ? t.sheet : e.SheetNames.indexOf(t.sheet)),
        !e.SheetNames[n])
      )
        throw new Error("Sheet not found: " + t.sheet + " : " + typeof t.sheet);
      switch (t.bookType || "xlsb") {
        case "xml":
        case "xlml":
          return St(ng(e, t), t);
        case "slk":
        case "sylk":
          return St(fo.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
        case "htm":
        case "html":
          return St(lf(e.Sheets[e.SheetNames[n]], t), t);
        case "txt":
          return (function lE(e, r) {
            switch (r.type) {
              case "base64":
                return qa(e);
              case "binary":
              case "string":
                return e;
              case "file":
                return nn(r.file, e, "binary");
              case "buffer":
                return be
                  ? Ft(e, "binary")
                  : e.split("").map(function (t) {
                      return t.charCodeAt(0);
                    });
            }
            throw new Error("Unrecognized type " + r.type);
          })(Of(e.Sheets[e.SheetNames[n]], t), t);
        case "csv":
          return St(Ks(e.Sheets[e.SheetNames[n]], t), t, "\ufeff");
        case "dif":
          return St(lo.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
        case "dbf":
          return pi(_s.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
        case "prn":
          return St(Ua.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
        case "rtf":
          return St(go.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
        case "eth":
          return St(uo.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
        case "fods":
          return St(gf(e, t), t);
        case "wk1":
          return pi(Aa.sheet_to_wk1(e.Sheets[e.SheetNames[n]], t), t);
        case "wk3":
          return pi(Aa.book_to_wk3(e, t), t);
        case "biff2":
          t.biff || (t.biff = 2);
        case "biff3":
          t.biff || (t.biff = 3);
        case "biff4":
          return (t.biff || (t.biff = 4), pi(af(e, t), t));
        case "biff5":
          t.biff || (t.biff = 5);
        case "biff8":
        case "xla":
        case "xls":
          return (
            t.biff || (t.biff = 8),
            (function fE(e, r) {
              var t = r || {};
              return kf(
                (function ug(e, r) {
                  var t = r || {},
                    a = Se.utils.cfb_new({ root: "R" }),
                    n = "/Workbook";
                  switch (t.bookType || "xls") {
                    case "xls":
                      t.bookType = "biff8";
                    case "xla":
                      t.bookType || (t.bookType = "xla");
                    case "biff8":
                      ((n = "/Workbook"), (t.biff = 8));
                      break;
                    case "biff5":
                      ((n = "/Book"), (t.biff = 5));
                      break;
                    default:
                      throw new Error(
                        "invalid type " + t.bookType + " for XLS CFB",
                      );
                  }
                  return (
                    Se.utils.cfb_add(a, n, af(e, t)),
                    8 == t.biff &&
                      (e.Props || e.Custprops) &&
                      (function lg(e, r) {
                        var s,
                          t = [],
                          a = [],
                          n = [],
                          i = 0,
                          c = L0(ss, "n"),
                          o = L0(cs, "n");
                        if (e.Props)
                          for (s = sr(e.Props), i = 0; i < s.length; ++i)
                            (Object.prototype.hasOwnProperty.call(c, s[i])
                              ? t
                              : Object.prototype.hasOwnProperty.call(o, s[i])
                                ? a
                                : n
                            ).push([s[i], e.Props[s[i]]]);
                        if (e.Custprops)
                          for (s = sr(e.Custprops), i = 0; i < s.length; ++i)
                            Object.prototype.hasOwnProperty.call(
                              e.Props || {},
                              s[i],
                            ) ||
                              (Object.prototype.hasOwnProperty.call(c, s[i])
                                ? t
                                : Object.prototype.hasOwnProperty.call(o, s[i])
                                  ? a
                                  : n
                              ).push([s[i], e.Custprops[s[i]]]);
                        var f = [];
                        for (i = 0; i < n.length; ++i)
                          Uc.indexOf(n[i][0]) > -1 ||
                            Fc.indexOf(n[i][0]) > -1 ||
                            (null != n[i][1] && f.push(n[i]));
                        (a.length &&
                          Se.utils.cfb_add(
                            r,
                            "/\x05SummaryInformation",
                            Hc(a, Cn.SI, o, cs),
                          ),
                          (t.length || f.length) &&
                            Se.utils.cfb_add(
                              r,
                              "/\x05DocumentSummaryInformation",
                              Hc(t, Cn.DSI, c, ss, f.length ? f : null, Cn.UDI),
                            ));
                      })(e, a),
                    8 == t.biff &&
                      e.vbaraw &&
                      (function Sm(e, r) {
                        r.FullPaths.forEach(function (t, a) {
                          if (0 != a) {
                            var n = t.replace(
                              /[^\/]*[\/]/,
                              "/_VBA_PROJECT_CUR/",
                            );
                            "/" !== n.slice(-1) &&
                              Se.utils.cfb_add(e, n, r.FileIndex[a].content);
                          }
                        });
                      })(
                        a,
                        Se.read(e.vbaraw, {
                          type:
                            "string" == typeof e.vbaraw ? "binary" : "buffer",
                        }),
                      ),
                    a
                  );
                })(e, t),
                t,
              );
            })(e, t)
          );
        case "xlsx":
        case "xlsm":
        case "xlam":
        case "xlsb":
        case "numbers":
        case "ods":
          return (function cE(e, r) {
            var t = je(r || {});
            return (function Cf(e, r) {
              var t = {},
                a = be
                  ? "nodebuffer"
                  : typeof Uint8Array < "u"
                    ? "array"
                    : "string";
              if ((r.compression && (t.compression = "DEFLATE"), r.password))
                t.type = a;
              else
                switch (r.type) {
                  case "base64":
                    t.type = "base64";
                    break;
                  case "binary":
                    t.type = "string";
                    break;
                  case "string":
                    throw new Error(
                      "'string' output type invalid for '" +
                        r.bookType +
                        "' files",
                    );
                  case "buffer":
                  case "file":
                    t.type = a;
                    break;
                  default:
                    throw new Error("Unrecognized type " + r.type);
                }
              var n = e.FullPaths
                ? Se.write(e, {
                    fileType: "zip",
                    type:
                      { nodebuffer: "buffer", string: "binary" }[t.type] ||
                      t.type,
                    compression: !!r.compression,
                  })
                : e.generate(t);
              if (typeof Deno < "u" && "string" == typeof n) {
                if ("binary" == r.type || "base64" == r.type) return n;
                n = new Uint8Array(en(n));
              }
              return r.password && typeof encrypt_agile < "u"
                ? kf(encrypt_agile(n, r.password), r)
                : "file" === r.type
                  ? nn(r.file, n)
                  : "string" == r.type
                    ? qe(n)
                    : n;
            })(eE(e, t), t);
          })(e, t);
        default:
          throw new Error("Unrecognized bookType |" + t.bookType + "|");
      }
    }
    function Ff(e, r, t, a, n, i, s, c) {
      var o = fr(t),
        f = c.defval,
        l = c.raw || !Object.prototype.hasOwnProperty.call(c, "raw"),
        h = !0,
        d = 1 === n ? [] : {};
      if (1 !== n)
        if (Object.defineProperty)
          try {
            Object.defineProperty(d, "__rowNum__", {
              value: t,
              enumerable: !1,
            });
          } catch {
            d.__rowNum__ = t;
          }
        else d.__rowNum__ = t;
      if (!s || e[t])
        for (var x = r.s.c; x <= r.e.c; ++x) {
          var m = s ? e[t][x] : e[a[x] + o];
          if (void 0 !== m && void 0 !== m.t) {
            var u = m.v;
            switch (m.t) {
              case "z":
                if (null == u) break;
                continue;
              case "e":
                u = 0 == u ? null : void 0;
                break;
              case "s":
              case "d":
              case "b":
              case "n":
                break;
              default:
                throw new Error("unrecognized type " + m.t);
            }
            if (null != i[x]) {
              if (null == u)
                if ("e" == m.t && null === u) d[i[x]] = null;
                else if (void 0 !== f) d[i[x]] = f;
                else {
                  if (!l || null !== u) continue;
                  d[i[x]] = null;
                }
              else
                d[i[x]] =
                  l && ("n" !== m.t || ("n" === m.t && !1 !== c.rawNumbers))
                    ? u
                    : Et(m, u, c);
              null != u && (h = !1);
            }
          } else {
            if (void 0 === f) continue;
            null != i[x] && (d[i[x]] = f);
          }
        }
      return { row: d, isempty: h };
    }
    function vi(e, r) {
      if (null == e || null == e["!ref"]) return [];
      var t = { t: "n", v: 0 },
        a = 0,
        n = 1,
        i = [],
        s = 0,
        c = "",
        o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
        f = r || {},
        l = null != f.range ? f.range : e["!ref"];
      switch (
        (1 === f.header
          ? (a = 1)
          : "A" === f.header
            ? (a = 2)
            : Array.isArray(f.header)
              ? (a = 3)
              : null == f.header && (a = 0),
        typeof l)
      ) {
        case "string":
          o = Ge(l);
          break;
        case "number":
          (o = Ge(e["!ref"])).s.r = l;
          break;
        default:
          o = l;
      }
      a > 0 && (n = 0);
      var h = fr(o.s.r),
        d = [],
        x = [],
        m = 0,
        u = 0,
        _ = Array.isArray(e),
        A = o.s.r,
        T = 0,
        g = {};
      _ && !e[A] && (e[A] = []);
      var O = (f.skipHidden && e["!cols"]) || [],
        D = (f.skipHidden && e["!rows"]) || [];
      for (T = o.s.c; T <= o.e.c; ++T)
        if (!(O[T] || {}).hidden)
          switch (((d[T] = er(T)), (t = _ ? e[A][T] : e[d[T] + h]), a)) {
            case 1:
              i[T] = T - o.s.c;
              break;
            case 2:
              i[T] = d[T];
              break;
            case 3:
              i[T] = f.header[T - o.s.c];
              break;
            default:
              if (
                (null == t && (t = { w: "__EMPTY", t: "s" }),
                (c = s = Et(t, null, f)),
                (u = g[s] || 0))
              ) {
                do {
                  c = s + "_" + u++;
                } while (g[c]);
                ((g[s] = u), (g[c] = 1));
              } else g[s] = 1;
              i[T] = c;
          }
      for (A = o.s.r + n; A <= o.e.r; ++A)
        if (!(D[A] || {}).hidden) {
          var Y = Ff(e, o, A, d, a, i, _, f);
          (!1 === Y.isempty || (1 === a ? !1 !== f.blankrows : f.blankrows)) &&
            (x[m++] = Y.row);
        }
      return ((x.length = m), x);
    }
    var Rf = /"/g;
    function Nf(e, r, t, a, n, i, s, c) {
      for (var o = !0, f = [], l = "", h = fr(t), d = r.s.c; d <= r.e.c; ++d)
        if (a[d]) {
          var x = c.dense ? (e[t] || [])[d] : e[a[d] + h];
          if (null == x) l = "";
          else if (null != x.v) {
            ((o = !1),
              (l = "" + (c.rawNumbers && "n" == x.t ? x.v : Et(x, null, c))));
            for (var m = 0, u = 0; m !== l.length; ++m)
              if (
                (u = l.charCodeAt(m)) === n ||
                u === i ||
                34 === u ||
                c.forceQuotes
              ) {
                l = '"' + l.replace(Rf, '""') + '"';
                break;
              }
            "ID" == l && (l = '"ID"');
          } else
            null == x.f || x.F
              ? (l = "")
              : ((o = !1),
                (l = "=" + x.f).indexOf(",") >= 0 &&
                  (l = '"' + l.replace(Rf, '""') + '"'));
          f.push(l);
        }
      return !1 === c.blankrows && o ? null : f.join(s);
    }
    function Ks(e, r) {
      var t = [],
        a = r ?? {};
      if (null == e || null == e["!ref"]) return "";
      var n = Ge(e["!ref"]),
        i = void 0 !== a.FS ? a.FS : ",",
        s = i.charCodeAt(0),
        c = void 0 !== a.RS ? a.RS : "\n",
        o = c.charCodeAt(0),
        f = new RegExp(("|" == i ? "\\|" : i) + "+$"),
        l = "",
        h = [];
      a.dense = Array.isArray(e);
      for (
        var d = (a.skipHidden && e["!cols"]) || [],
          x = (a.skipHidden && e["!rows"]) || [],
          m = n.s.c;
        m <= n.e.c;
        ++m
      )
        (d[m] || {}).hidden || (h[m] = er(m));
      for (var u = 0, _ = n.s.r; _ <= n.e.r; ++_)
        (x[_] || {}).hidden ||
          (null != (l = Nf(e, n, _, h, s, o, i, a)) &&
            (a.strip && (l = l.replace(f, "")),
            (l || !1 !== a.blankrows) && t.push((u++ ? c : "") + l)));
      return (delete a.dense, t.join(""));
    }
    function Of(e, r) {
      (r || (r = {}), (r.FS = "\t"), (r.RS = "\n"));
      var t = Ks(e, r);
      if (typeof We > "u" || "string" == r.type) return t;
      var a = We.utils.encode(1200, t, "str");
      return String.fromCharCode(255) + String.fromCharCode(254) + a;
    }
    function If(e, r, t) {
      var a = t || {},
        n = +!a.skipHeader,
        i = e || {},
        s = 0,
        c = 0;
      if (i && null != a.origin)
        if ("number" == typeof a.origin) s = a.origin;
        else {
          var o = "string" == typeof a.origin ? ur(a.origin) : a.origin;
          ((s = o.r), (c = o.c));
        }
      var f,
        l = { s: { c: 0, r: 0 }, e: { c, r: s + r.length - 1 + n } };
      if (i["!ref"]) {
        var h = Ge(i["!ref"]);
        ((l.e.c = Math.max(l.e.c, h.e.c)),
          (l.e.r = Math.max(l.e.r, h.e.r)),
          -1 == s && (l.e.r = (s = h.e.r + 1) + r.length - 1 + n));
      } else -1 == s && ((s = 0), (l.e.r = r.length - 1 + n));
      var d = a.header || [],
        x = 0;
      (r.forEach(function (u, _) {
        sr(u).forEach(function (A) {
          -1 == (x = d.indexOf(A)) && (d[(x = d.length)] = A);
          var T = u[A],
            g = "z",
            O = "",
            D = Ce({ c: c + x, r: s + _ + n });
          ((f = Nn(i, D)),
            !T || "object" != typeof T || T instanceof Date
              ? ("number" == typeof T
                  ? (g = "n")
                  : "boolean" == typeof T
                    ? (g = "b")
                    : "string" == typeof T
                      ? (g = "s")
                      : T instanceof Date
                        ? ((g = "d"),
                          a.cellDates || ((g = "n"), (T = Ar(T))),
                          (O = a.dateNF || we[14]))
                        : null === T && a.nullError && ((g = "e"), (T = 0)),
                f
                  ? ((f.t = g),
                    (f.v = T),
                    delete f.w,
                    delete f.R,
                    O && (f.z = O))
                  : (i[D] = f = { t: g, v: T }),
                O && (f.z = O))
              : (i[D] = T));
        });
      }),
        (l.e.c = Math.max(l.e.c, c + d.length - 1)));
      var m = fr(s);
      if (n)
        for (x = 0; x < d.length; ++x) i[er(x + c) + m] = { t: "s", v: d[x] };
      return ((i["!ref"] = Ne(l)), i);
    }
    function Nn(e, r, t) {
      if ("string" == typeof r) {
        if (Array.isArray(e)) {
          var a = ur(r);
          return (
            e[a.r] || (e[a.r] = []),
            e[a.r][a.c] || (e[a.r][a.c] = { t: "z" })
          );
        }
        return e[r] || (e[r] = { t: "z" });
      }
      return Nn(e, Ce("number" != typeof r ? r : { r, c: t || 0 }));
    }
    function Lf(e, r, t) {
      return (
        r ? ((e.l = { Target: r }), t && (e.l.Tooltip = t)) : delete e.l,
        e
      );
    }
    var Pt = {
      encode_col: er,
      encode_row: fr,
      encode_cell: Ce,
      encode_range: Ne,
      decode_col: qi,
      decode_row: Qi,
      split_cell: function Wu(e) {
        return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
      },
      decode_cell: ur,
      decode_range: Gr,
      format_cell: Et,
      sheet_add_aoa: mc,
      sheet_add_json: If,
      sheet_add_dom: uf,
      aoa_to_sheet: Da,
      json_to_sheet: function dE(e, r) {
        return If(null, e, r);
      },
      table_to_sheet: hf,
      table_to_book: function Rg(e, r) {
        return Jt(hf(e, r), r);
      },
      sheet_to_csv: Ks,
      sheet_to_txt: Of,
      sheet_to_json: vi,
      sheet_to_html: lf,
      sheet_to_formulae: function hE(e) {
        var t,
          r = "",
          a = "";
        if (null == e || null == e["!ref"]) return [];
        var c,
          n = Ge(e["!ref"]),
          i = "",
          s = [],
          o = [],
          f = Array.isArray(e);
        for (c = n.s.c; c <= n.e.c; ++c) s[c] = er(c);
        for (var l = n.s.r; l <= n.e.r; ++l)
          for (i = fr(l), c = n.s.c; c <= n.e.c; ++c)
            if (
              ((r = s[c] + i),
              (a = ""),
              void 0 !== (t = f ? (e[l] || [])[c] : e[r]))
            ) {
              if (null != t.F) {
                if (((r = t.F), !t.f)) continue;
                ((a = t.f), -1 == r.indexOf(":") && (r = r + ":" + r));
              }
              if (null != t.f) a = t.f;
              else {
                if ("z" == t.t) continue;
                if ("n" == t.t && null != t.v) a = "" + t.v;
                else if ("b" == t.t) a = t.v ? "TRUE" : "FALSE";
                else if (void 0 !== t.w) a = "'" + t.w;
                else {
                  if (void 0 === t.v) continue;
                  a = "s" == t.t ? "'" + t.v : "" + t.v;
                }
              }
              o[o.length] = r + "=" + a;
            }
        return o;
      },
      sheet_to_row_object_array: vi,
      sheet_get_cell: Nn,
      book_new: function Ys() {
        return { SheetNames: [], Sheets: {} };
      },
      book_append_sheet: function zs(e, r, t, a) {
        var n = 1;
        if (!t)
          for (
            ;
            n <= 65535 && -1 != e.SheetNames.indexOf((t = "Sheet" + n));
            ++n, t = void 0
          );
        if (!t || e.SheetNames.length >= 65535)
          throw new Error("Too many worksheets");
        if (a && e.SheetNames.indexOf(t) >= 0) {
          var i = t.match(/(^.*?)(\d+)$/);
          n = (i && +i[2]) || 0;
          var s = (i && i[1]) || t;
          for (++n; n <= 65535 && -1 != e.SheetNames.indexOf((t = s + n)); ++n);
        }
        if (($o(t), e.SheetNames.indexOf(t) >= 0))
          throw new Error("Worksheet with name |" + t + "| already exists!");
        return (e.SheetNames.push(t), (e.Sheets[t] = r), t);
      },
      book_set_sheet_visibility: function mE(e, r, t) {
        (e.Workbook || (e.Workbook = {}),
          e.Workbook.Sheets || (e.Workbook.Sheets = []));
        var a = (function xE(e, r) {
          if ("number" == typeof r) {
            if (r >= 0 && e.SheetNames.length > r) return r;
            throw new Error("Cannot find sheet # " + r);
          }
          if ("string" == typeof r) {
            var t = e.SheetNames.indexOf(r);
            if (t > -1) return t;
            throw new Error("Cannot find sheet name |" + r + "|");
          }
          throw new Error("Cannot find sheet |" + r + "|");
        })(e, r);
        switch ((e.Workbook.Sheets[a] || (e.Workbook.Sheets[a] = {}), t)) {
          case 0:
          case 1:
          case 2:
            break;
          default:
            throw new Error("Bad sheet visibility setting " + t);
        }
        e.Workbook.Sheets[a].Hidden = t;
      },
      cell_set_number_format: function _E(e, r) {
        return ((e.z = r), e);
      },
      cell_set_hyperlink: Lf,
      cell_set_internal_link: function pE(e, r, t) {
        return Lf(e, "#" + r, t);
      },
      cell_add_comment: function vE(e, r, t) {
        (e.c || (e.c = []), e.c.push({ t: r, a: t || "SheetJS" }));
      },
      sheet_set_array_formula: function gE(e, r, t, a) {
        for (
          var n = "string" != typeof r ? r : Ge(r),
            i = "string" == typeof r ? r : Ne(r),
            s = n.s.r;
          s <= n.e.r;
          ++s
        )
          for (var c = n.s.c; c <= n.e.c; ++c) {
            var o = Nn(e, s, c);
            ((o.t = "n"),
              (o.F = i),
              delete o.v,
              s == n.s.r && c == n.s.c && ((o.f = t), a && (o.D = !0)));
          }
        return e;
      },
      consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 },
    };
    class wE {
      getSavedContactSheet(r) {
        var t = this;
        return L(function* () {
          const n = yield t.getSavedContacts(r);
          return Pt.json_to_sheet(n, { header: ["Name", "PhoneNumber"] });
        })();
      }
      getValidSheetName(r, t) {
        let a = t,
          n = 0;
        for (; r.has(a);) (++n, (a = `${t}${n}`));
        return (r.add(a), a);
      }
      getSavedContacts(r) {
        return L(function* () {
          const t = [];
          return (
            r &&
              r.forEach((n, i) => {
                t.push({ Name: r[i].name, PhoneNumber: r[i].phoneNumber });
              }),
            t
          );
        })();
      }
      getMemberContactSheet(r) {
        var t = this;
        return L(function* () {
          const n = yield t.getMemberContacts(r);
          return Pt.json_to_sheet(n, { header: ["Name", "PhoneNumber"] });
        })();
      }
      getMemberContacts(r) {
        return L(function* () {
          const t = [];
          return (
            r &&
              r.forEach((n, i) => {
                if (r[i]) {
                  let s = r[i].name;
                  ((s = Number(s.replace(/[ +()-]/g, ""))),
                    Number.isInteger(s)
                      ? t.push({ Name: "", PhoneNumber: r[i].phoneNumber })
                      : t.push({
                          Name: r[i].name,
                          PhoneNumber: r[i].phoneNumber,
                        }));
                }
              }),
            t
          );
        })();
      }
      getWhatsAppContactSheet(r) {
        var t = this;
        return L(function* () {
          const n = yield t.getWhatsAppContacts(r);
          return Pt.json_to_sheet(n, { header: ["Name", "PhoneNumber"] });
        })();
      }
      getWhatsAppContacts(r) {
        return L(function* () {
          const t = [];
          let a;
          return (
            r &&
              r.forEach((i, s) => {
                ((a = r[s].name || r[s].name ? r[s].name : ""),
                  t.push({ Name: a, PhoneNumber: r[s].phoneNumber }));
              }),
            t
          );
        })();
      }
    }
    const kE = {
      SELECTOR_APP_WA_ME_LINK: "#app .app-wrapper-web span",
      SELECTOR_IMAGE_CURRENT_CHAT_WINDOW: "#main header img",
      SELECTOR_TOP_RIBBON_CURRENT_CHAT_WINDOW: "#main header [role=button]",
      SELECTOR_SIDE_BAR_PHONE_NUMBER:
        ".selectable-text.invisible-space.copyable-text ._3Tk1z,.selectable-text.copyable-text ._1Kn3o._3O1wx",
      SELECTOR_LOGGEDIN_USER_DETAILS_BUTTON:
        'header [data-icon="default-user"]',
      SELECTOR_CLOSE_LOGGEDIN_USER_DETAILS_BUTTON:
        'span[data-icon="back-light"],span[data-icon="back"]',
      SELECTOR_LOGGEDIN_USER_PROFILE_IMAGE: "#side header img",
      SELECTOR_WHATSAPP_APP: "#app",
      SELECTOR_CURRENT_CHAT_WINDOW_TITLE: 'header [dir="auto"]',
      SELECTOR_INVALID_WHATSAPP_NUMBER_TEXT_ENVELOPE:
        '[data-testid="popup-controls-ok"]',
      SELECTOR_INVALID_WHATSAPP_NUMBER_LOADER_SVG:
        '[data-testid="popup-controls-cancel"]',
      SELECTOR_INVALID_WHATSAPP_NUMBER_TEXT_ENVELOPE_JQUERY:
        '[data-animate-modal-popup="true"] button:contains(OK)',
      SELECTOR_INVALID_WHATSAPP_NUMBER_LOADER_SVG_JQUERY:
        '[data-animate-modal-popup="true"] button:contains(Cancel)',
      SELECTOR_LINK_PREVIEW_SELECTOR:
        '._2VC-w [role="button"],._3P_7M [role="button"]',
      SELECTOR_WHATSAPP_FOOTER: "footer",
      SELECTOR_SEND_BUTTON: "[data-icon=send]",
      SELECTOR_ADD_ATTACHMENT_BUTTON: "[data-icon=clip]",
      SELECTOR_ADD_PHOTO_ATTACHMENT_BUTTON:
        "[data-icon=image],[data-icon=attach-image],[data-icon=attach-image-old]",
      SELECTOR_ADD_DOCUMENT_ATTACHMENT_BUTTON:
        "[data-icon=document],[data-icon=attach-document],[data-icon=attach-document-old]",
      SELECTOR_FILE_MENU_INPUT: "input",
      SELECTOR_FORWARD_BUTTON: "[data-icon=send-light],[data-icon=send]",
      SELECTOR_FORWARD_CHAT: "[data-icon=forward-chat]",
      SELECTOR_ATTACHMENT_COUNT:
        ".YZNwM.uslS5,._3ZYWe._2g59E,.qpqWq._3O1wx._1Yoli",
      SELECTOR_ALBUM_ATTRIBUTE_NAME: "data-id",
      SELECTOR_ALBUM_ATTRIBUTE_VALUE: "album-true",
      SELECTOR_ATTACHMENT_IMAGE:
        ".gDOmN img, .xOg_4 img, ._1kqM- img,img._1-59F._3Oxpo",
      SELECTOR_ATTACHMENT_VEDIO:
        ".video-thumb .eD3kt,.video-thumb ._2MrqQ,._2MrqQ",
      SELECTOR_ATTACHMENT_FILE:
        'a._3_4_I,a._4NdIu,[data-icon="audio-download"]',
      SELECTOR_ATTACHMENT_FILE_PREVIEW:
        "button._1rnRi._23vfb ._1kOOx,button._1UTQ6._1s_fV ._1VkQG",
      SELECTOR_ATTACHMENT_FILE_NAME: "._1VzZY,._3-8er",
      SELECTOR_ATTACHMENT_GIFF: ".f-0-U,._14qwl",
      SELECTOR_ATTACHMENT_CONTACT: "._3Nkcb,._1QRcr",
      SELECTOR_ATTACHMENT_AUDIO: '[data-icon="audio-file"]',
      SELECTOR_ATTACHMENT_AUDIO_DURATION: "._3umVQ",
      SELECTOR_OUTGOING_MESSAGE: ".vW7d1.message-out,.message-out ",
      SELECTOR_OUTGOING_MESSAGE_FORWARD_BUTTON: '[data-icon="forward-chat"]',
      SELECTOR_FORWARD_MODAL: "[data-animate-modal-body]",
      SELECTOR_FORWARD_MODAL_USER_TITLE: "._3vPI2 span[dir]",
      SELECTOR_GROUP_NAME_NODE:
        "#main header ._3-cMa._3Whw5,#main header ._1hI5g._ccCW._1VzZY, #main header ._35k-1._1adfa._3-8er",
      SELECTOR_GROUP_TITLE_NODE:
        "#main header .DP7CM span,#main header ._2Gdma._2amHe span,#main header .YmixP.fKfSX",
      SELECTOR_GROUP_DETAILS_CLOSE_BUTTON: '[data-icon="x"]',
      SELECTOR_GROUP_DETAILS_OPEN_BUTTON: "#main header [role=button]",
      SELECTOR_EXPAND_ALL_GROUP_MEMEBERS_BUTTTON: '[data-icon="down"]',
      SELCTOR_GROUP_MEMBER:
        "._1qDvT._2wPpw .-GlrD._2xoTX ._210SC,._32vnm._2k4Ax ._2aBzC",
      SELCTOR_GROUP_MEMBER_TITLE:
        "._3dtfX ._3ko75._5h6Y_._3Whw5,._1hI5g._ccCW._1VzZY",
      SELCTOR_GROUP_MEMBER_EXTRAINFO:
        '._1_1Jb span[dir="auto"],._3rGLp span[dir="auto"]',
      SELCTOR_GROUP_SCROLL_NODE: "._1qDvT._2wPpw,._3Xjbn._1RHZR",
      SELECTOR_WHATSAPP_TEMPLATE_ENVELOPE: "._1BFYt,._1AwiL",
      SELECTOR_CHATS: "#pane-side ._3m_Xw",
      SELECTOR_CHAT_DATETIME: "._3dtfX .m61XR,._1c_mC ._2gsiG",
      SELECTOR_CONTACTS_SCROLL_NODE: "._1qDvT._3R02z,._3Xjbn._3jNGW",
      SELECTOR_APP_LOADED_CLASS_MARKER: "app-wrapper-web",
      SELECTOR_GROUP_DOWNLOAD_LINK:
        "._3nq_A ._3All._3NrAe .PVMjB:first-child, .VPvMz .chGSa.LhZF7 ._2wfYK:first-child",
      SELECTOR_GROP_DOWNLOAD_LINK_BUTTON_CLASS: "PVMjB,_2wfYK",
      SELECTOR_PROGRESS_SELECTOR: "#side header ._1MXsz",
      SELECTOR_TEMPLATE_UI: "#main footer .copyable-text.selectable-text",
      SELECTOR_PROFILE_PIC_MUTATION:
        "#side header ._1BjNO,#side header ._3LtPa",
      SELECTOR_INCOMING_MESSAGE: ".message-in>div",
      SELECTOR_INCOMING_MESSAGE_EMOJI_ELEMENT: ".Nm1g1._22AX6",
      SELECTOR_LIKE_BUTTON: ".p3_M1",
      LIBHOOK_SELECTOR_STORE: "Store",
      LIBHOOK_SELECTOR_CONN: "Store.Conn",
      LIBHOOK_SELECTOR_CHAT: "Store.Chat",
      LIBHOOK_SELECTOR_CONTACT: "Store.Contact",
      LIBHOOK_SELECTOR_CONTACT_MODEL: "Store.Contact._models",
      LIBHOOK_SELECTOR_BUSINESSPROFILE: "Store.BusinessProfile",
      LIBHOOK_SELECTOR_WAPQUERY: "Store.WapQuery",
      LIBHOOK_SELECTOR_GROUPMETADATA: "Store.GroupMetadata",
      LIBHOOK_SELECTOR_SENDMESSAGEPROTOTYPE: "Store.sendMessagePrototype",
      LIBHOOK_SELECTOR_MSG: "Store.Msg",
      LIBHOOK_SELECTOR_MSG_MODELS: "Store.Msg._models",
      LIBHOOK_SELECTOR_LABEL: "Store.Label",
      LIBHOOK_SELECTOR_PRESENCE: "Store.Presence2",
      LIBHOOK_SELECTOR_VCARD: "Store.Vcard",
      LIBHOOK_SELECTOR_PRESENCE_FIRST: "Store.Presence",
      STYLE_BLUR_RECENT_MESSAGE:
        "._37FrU { filter: blur(4px); } ._37FrU:hover { filter: blur(0); }",
      STYLE_BLUR_CONTACT_NUMBER:
        "._3vPI2, ._ccCW, ._3WYXy, ._13NKt { filter: blur(4px); } ._3vPI2:hover, ._ccCW:hover, ._3WYXy:hover, ._13NKt:hover { filter: blur(0); }",
      STYLE_BLUR_PROFILE_PICS:
        "._8hzr9 { filter: blur(4px); } ._8hzr9:hover { filter: blur(0); }",
      STYLE_BLUR_CONTACT_MSGS:
        ".message-out, .message-in { filter: blur(4px); } .message-out:hover, .message-in:hover { filter: blur(0); }",
      STYLE_ID_BLUR_RECENT_MESSAGE: "wsn-blr-rcnt-msgs",
      STYLE_ID_BLUR_CONTACT_NUMBER: "wsn-blr-cnct-nms",
      STYLE_ID_BLUR_PROFILE_PICS: "wsn-blr-pp",
      STYLE_ID_BLUR_CONTACT_MSGS: "wsn-blr-conv-msgs",
      LIBHOOK_WEBPACK: "webpackChunkwhatsapp_web_client",
      SHELL_LOADED_INDICATOR: "#pane-side",
      LWM: "eyJpbnMiOiJpbXBvcnROYW1lc3BhY2UiLCJtb2RzIjpbeyJtb2RfayI6IkNvbnRhY3QiLCJtb2QiOiJXQVdlYkNvbnRhY3RDb2xsZWN0aW9uIiwibW9kX3JlZiI6IkNvbnRhY3RDb2xsZWN0aW9uIn0seyJtb2RfayI6IkNvbm4iLCJtb2QiOiJXQVdlYkNvbm5Nb2RlbCIsIm1vZF9yZWYiOiJDb25uIn0seyJtb2RfayI6IkNoYXQiLCJtb2QiOiJXQVdlYkNoYXRDb2xsZWN0aW9uIiwibW9kX3JlZiI6IkNoYXRDb2xsZWN0aW9uIn0seyJtb2RfayI6IkJ1c2luZXNzUHJvZmlsZSIsIm1vZCI6IldBV2ViQnVzaW5lc3NQcm9maWxlQ29sbGVjdGlvbiIsIm1vZF9yZWYiOiJCdXNpbmVzc1Byb2ZpbGVDb2xsZWN0aW9uIn0seyJtb2RfayI6Ik1zZyIsIm1vZCI6IldBV2ViTXNnQ29sbGVjdGlvbiIsIm1vZF9yZWYiOiJNc2dDb2xsZWN0aW9uIn0seyJtb2RfayI6IkxhYmVsIiwibW9kIjoiV0FXZWJMYWJlbENvbGxlY3Rpb24iLCJtb2RfcmVmIjoiTGFiZWxDb2xsZWN0aW9uIn0seyJtb2RfayI6IlByZXNlbmNlMiIsIm1vZCI6IldBV2ViUHJlc2VuY2VDb2xsZWN0aW9uIiwibW9kX3JlZiI6IlByZXNlbmNlQ29sbGVjdGlvbiJ9LHsibW9kX2siOiJHcm91cE1ldGFkYXRhIiwibW9kIjoiV0FXZWJHcm91cE1ldGFkYXRhQ29sbGVjdGlvbiIsIm1vZF9yZWYiOiJkZWZhdWx0In0seyJtb2RfayI6IlNlbmRUZXh0TXNnVG9DaGF0IiwibW9kIjoiV0FXZWJTZW5kVGV4dE1zZ0NoYXRBY3Rpb24iLCJtb2RfcmVmIjoic2VuZFRleHRNc2dUb0NoYXQifSx7Im1vZF9rIjoiTWVkaWFDb2xsZWN0aW9uIiwibW9kIjoiV0FXZWJBdHRhY2hNZWRpYUNvbGxlY3Rpb24iLCJtb2RfcmVmIjoiZGVmYXVsdCJ9LHsibW9kX2siOiJXaWQiLCJtb2QiOiJXQVdlYldpZCJ9LHsibW9kX2siOiJXYXAiLCJtb2QiOiJXQVdlYkdyb3VwQ3JlYXRlSm9iIn0seyJtb2RfayI6Ikdyb3VwSW52aXRlIiwibW9kIjoiV0FXZWJHcm91cEludml0ZUpvYiJ9LHsibW9kX2siOiJXaWRGYWN0b3J5IiwibW9kIjoiV0FXZWJXaWRGYWN0b3J5In0seyJtb2RfayI6IlBhcnRpY2lwYW50cyIsIm1vZCI6IldBV2ViTW9kaWZ5UGFydGljaXBhbnRzR3JvdXBBY3Rpb24ifV19",
      RMG: "RMG",
    };
    function Js() {
      let e = null;
      try {
        e = chrome.runtime.getManifest();
      } catch (i) {
        console.log("error data", i);
      }
      function t() {
        return (t = L(function* (i, s, c = {}) {
          const o = { ...c, version: String(e?.version) };
          yield Bn.logAmplitude(i, s, o, {});
        })).apply(this, arguments);
      }
      function n() {
        return (n = L(function* (i) {
          return kE;
        })).apply(this, arguments);
      }
      return {
        logAmplitude: function r(i, s) {
          return t.apply(this, arguments);
        },
        logAdds: function a(i) {
          return n.apply(this, arguments);
        },
      };
    }
    class CE {
      constructor(r) {
        ((this.iframeId = r),
          (this.removeCallbacks = []),
          (this.iframe = document.createElement("iframe")),
          (this.iframe.id = this.iframeId),
          (this.iframe.src = chrome.runtime.getURL("index.html")));
      }
      init() {
        this.removeCallbacks = [];
      }
      injectFrame() {
        document.getElementById(this.iframeId) ||
          ((this.iframe.src = new URL(this.iframe.src).toString()),
          document.body.appendChild(this.iframe),
          this.injectCSS(),
          setTimeout(() => {
            this.iframe.classList.add("open");
          }, 100));
      }
      remove() {
        const r = document.getElementById(this.iframeId);
        r &&
          (this.iframe.classList.remove("open"),
          setTimeout(() => {
            r.remove();
          }, 300),
          this.triggerRemoveCallbacks());
      }
      onRemove(r) {
        this.removeCallbacks.push(r);
      }
      triggerRemoveCallbacks() {
        this.removeCallbacks.forEach((r) => r());
      }
      injectCSS() {
        if (
          !document.querySelector(
            `link[href="${chrome.runtime.getURL("assets/contentcss.css")}"]`,
          )
        ) {
          const t = document.createElement("link");
          ((t.rel = "stylesheet"),
            (t.type = "text/css"),
            (t.href = chrome.runtime.getURL("assets/contentcss.css")),
            document.head.appendChild(t));
        }
      }
    }
    class yE {
      constructor(r, t) {
        ((this.btnId = r), (this.clickHandler = t), this.inject());
      }
      inject() {
        if (!document.getElementById(this.btnId)) {
          ((this.btn = document.createElement("div")),
            (this.btn.id = this.btnId),
            (this.btn.className = "wanew-btn"));
          const r = document.createElement("div");
          ((r.className = "wanew-icon-container"),
            (r.innerHTML = `<img src="${chrome.runtime.getURL("assets/icon/logo.png")}" alt="Icon" class="wanew-icon">`),
            this.btn.appendChild(r),
            (this.btn.onclick = () => {
              this.clickHandler();
            }),
            document.body.appendChild(this.btn),
            this.injectCSS());
        }
      }
      openWindow() {
        this.clickHandler();
      }
      init(r) {
        this.user = r;
      }
      injectCSS() {
        if (
          !document.querySelector(
            `link[href="${chrome.runtime.getURL("assets/contentcss.css")}"]`,
          )
        ) {
          const t = document.createElement("link");
          ((t.rel = "stylesheet"),
            (t.type = "text/css"),
            (t.href = chrome.runtime.getURL("assets/contentcss.css")),
            document.head.appendChild(t));
        }
      }
    }
    function bf() {
      const e = "KEY_ATTACHMENTS",
        r = "KEY_DELETED_CHATS",
        a = "BROADCAST_MSGS_TIME";
      function n() {
        return `${window?.Store?.Conn?._serialized}_INSPECTED_MESSAGE`;
      }
      function i(u, _) {
        window.localStorage.setItem(u, _);
      }
      function s(u) {
        return window.localStorage.getItem(u);
      }
      return {
        getAttachments: function h() {
          const u = s(e);
          return u ? JSON.parse(u) : [];
        },
        setAttachments: function d(u) {
          i(e, u ? JSON.stringify(u) : null);
        },
        setInspectChats: function f(u) {
          i(n(), u ? JSON.stringify(u) : null);
        },
        getInspectChats: function l() {
          const _ = s(n());
          return _ ? JSON.parse(_) : [];
        },
        getDeletedChats: function c() {
          const u = s(r);
          return u ? JSON.parse(u) : [];
        },
        setDeletedChats: function o(u) {
          i(r, u ? JSON.stringify(u) : null);
        },
        setBroadcastTimestamp: function x() {
          i(a, JSON.stringify(Date.now()));
        },
        getBroadcastTimestamp: function m() {
          const u = s(a);
          return u ? JSON.parse(u) : null;
        },
      };
    }
    class FE {
      constructor() {
        ((this.ONE_DAY_TIMESTAMP = 864e5),
          (this.contentToLibhook = null),
          (this.isLibHookReady = !1),
          (this.extAuth = null),
          (this.CACHE_KEY_LOGGED_IN_PHONE = "loogedInphoneNumber"),
          (this.EVENT_USER_CHANGED = "user_changed"),
          (this.EVENT_LOGGED_OUT = "logged_out"),
          (this.UNINSTALL_URL = "uninstallurl"),
          (this.XLSXUtils = new wE()),
          (this.popupInjector = new CE("popup-injector")),
          (this.popupBtnInjector = new yE("popup-btn", () => {
            this.popupInjector
              ? this.popupInjector.injectFrame()
              : alert("Please wait for whatsapp to load or reload the page");
          })));
      }
      onNewEvent(r) {
        return L(function* () {})();
      }
      init() {
        var r = this;
        return L(function* () {
          window.location.href.startsWith("https://web.whatsapp.com") &&
            (console.log("loaded"),
            chrome.runtime.onMessage.addListener(r.msgListener.bind(r)),
            (r.selectors = yield Bn.getSelectors("SYSTEM")),
            r.injectJs("fl.js"),
            (r.contentToLibhook = new Fl(r)));
        })();
      }
      loadAttachmentFromBackgound() {
        var r = this;
        return L(function* () {
          ((r.attachments = yield Gt.sendMsgToExtension(
            new ca(yt.CONTENT, He.MSG_GET_ATTACHMENT_BACKGROUND, ""),
          )),
            yield r.contentToLibhook.sendSetAttachmentMessage(r.attachments));
        })();
      }
      msgListener(r, t, a) {
        switch (r.subject) {
          case He.GET_CURRENT_URL:
            a(window.location.href);
            break;
          case He.GET_CURRENT_USER:
            if (!this.isLibHookReady) throw "Libhook not ready";
            this.getCurrentUser()?.then((n) => {
              a(n);
            });
            break;
          case He.USER_INIT:
            if (!this.isLibHookReady) throw "Libhook not ready";
            this.callUserInitEvent().then(() => {
              a(!0);
            });
            break;
          case He.MSG_VALIDATE_NUMBER:
          case He.MSG_SEND_MESSAGE:
            r.data &&
              this.msgSendMessage(r).then((n) => {
                a(n);
              });
            break;
          case He.MSG_SET_ATTACHMENTS:
            this.handleAttachment(r.data).then(() => {
              a(!0);
            });
            break;
          case He.MSG_CLEAR_ATTACHMENTS:
            this.handleClearAttachment().then(() => {
              a(!0);
            });
            break;
          case He.MSG_GET_ATTACHMENT:
            a(this.attachments);
            break;
          case He.MSG_LIB_GET_USER_GROUPS:
            this.getAllGroups().then((n) => a(n));
            break;
          case He.MSG_LIB_DOWNLOAD_CONTACTS:
            r.data && this.downloadContactsFromLib(r.data).then(() => a(!0));
            break;
          case He.MSG_LIB_GET_USER_LABELS:
            this.getUserLabelsMessage().then((n) => a(n));
            break;
          case He.GET_CONTACTS:
            this.getContactsFromLib(r.data).then((n) => a(n));
            break;
          case He.CLOSE_FRAME:
            (this.popupInjector.remove(), a(!0));
            break;
          case He.OPEN_FRAME:
            (this.popupBtnInjector.openWindow(), a(!0));
        }
        return !0;
      }
      getUserLabelsMessage() {
        var r = this;
        return L(function* () {
          return yield r.contentToLibhook.getUserLabelsMessage();
        })();
      }
      downloadContactsFromLib(r) {
        var t = this;
        return L(function* () {
          let a;
          const n = { ...r, contactCount: 0 },
            i = Pt.book_new(),
            s = new Set();
          if (r.allContacts) {
            a = yield t.contentToLibhook.getUserSavedContacts();
            const c = yield t.XLSXUtils.getSavedContactSheet(a);
            ((n.contactCount = a?.length),
              Pt.book_append_sheet(
                i,
                c,
                t.XLSXUtils.getValidSheetName(s, "Saved Contacts"),
              ));
          }
          if (r.allChatContacts) {
            a = yield t.contentToLibhook.getUserWhatsAppContacts();
            const c = yield t.XLSXUtils.getWhatsAppContactSheet(a);
            ((n.contactCount += a?.length),
              Pt.book_append_sheet(
                i,
                c,
                t.XLSXUtils.getValidSheetName(s, "Whatsapp Contacts"),
              ));
          }
          if (r.groupContacts)
            for (let c of r.groupContacts) {
              let o = yield t.contentToLibhook.getUserGroupMemberContact(c.id);
              n.contactCount += o?.length;
              const f = yield t.XLSXUtils.getMemberContactSheet(o);
              let l = c.name;
              ((l = l.replaceAll(/[\/\\\?\*\[\]]/gm, "-")),
                (l = l.substring(0, 30)),
                Pt.book_append_sheet(
                  i,
                  f,
                  t.XLSXUtils.getValidSheetName(s, l),
                ));
            }
          if (r.labels)
            for (let c of r.labels) {
              let o = yield t.contentToLibhook.getLabelMembersMessage(c.name);
              const f = yield t.XLSXUtils.getMemberContactSheet(o);
              ((n.contactCount += o?.length),
                Pt.book_append_sheet(
                  i,
                  f,
                  t.XLSXUtils.getValidSheetName(s, c.name),
                ));
            }
          if (r.broadcasts)
            for (let c of r.broadcasts) {
              let o = yield t.contentToLibhook.getUserGroupMemberContact(c.id);
              const f = yield t.XLSXUtils.getMemberContactSheet(o);
              ((n.contactCount += o?.length),
                Pt.book_append_sheet(
                  i,
                  f,
                  t.XLSXUtils.getValidSheetName(s, c.name),
                ));
            }
          return (
            (function uE(e, r, t) {
              var a = t || {};
              ((a.type = "file"),
                (a.file = r),
                (function Xs(e) {
                  if (!e.bookType) {
                    var t = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
                    (t.match(/^\.[a-z]+$/) && (e.bookType = t.slice(1)),
                      (e.bookType =
                        {
                          xls: "biff8",
                          htm: "html",
                          slk: "sylk",
                          socialcalc: "eth",
                          Sh33tJS: "WTF",
                        }[e.bookType] || e.bookType));
                  }
                })(a),
                Vs(e, a));
            })(i, "Contacts.xls"),
            Js().logAmplitude("contacts_download", r.authid, n),
            !0
          );
        })();
      }
      getContactsFromLib(r) {
        var t = this;
        return L(function* () {
          let a = [];
          if (r.allContacts) {
            let n = yield t.contentToLibhook.getUserSavedContacts();
            n?.length && (a = [...a, ...n]);
          }
          if (r.allChatContacts) {
            let n = yield t.contentToLibhook.getUserWhatsAppContacts();
            n?.length && (a = [...a, ...n]);
          }
          if (r.groupContacts)
            for (let n of r.groupContacts)
              try {
                let i = yield t.contentToLibhook.getUserGroupMemberContact(
                  n.id,
                );
                i?.length && (a = [...a, ...i]);
              } catch (i) {
                console.log("error in groups contact get ", i);
              }
          if (r.labels)
            for (let n of r.labels) {
              let i = yield t.contentToLibhook.getLabelMembersMessage(n.name);
              i?.length && (a = [...a, ...i]);
            }
          if (r.broadcasts)
            for (let n of r.broadcasts) {
              let i = yield t.contentToLibhook.getUserGroupMemberContact(n.id);
              i?.length && (a = [...a, ...i]);
            }
          return a;
        })();
      }
      getAllGroups() {
        var r = this;
        return L(function* () {
          return yield r.contentToLibhook.getUserGroups();
        })();
      }
      handleClearAttachment() {
        var r = this;
        return L(function* () {
          ((r.attachments = []),
            yield r.contentToLibhook.sendSetAttachmentMessage(r.attachments),
            yield Gt.sendMsgToExtension(
              new ca(
                yt.CONTENT,
                He.MSG_CACHE_ATTACHMENT_BACKGROUND,
                r.attachments,
              ),
            ));
        })();
      }
      handleAttachment(r) {
        var t = this;
        return L(function* () {
          ((t.attachments = r),
            yield t.contentToLibhook.sendSetAttachmentMessage(t.attachments),
            yield Gt.sendMsgToExtension(
              new ca(
                yt.CONTENT,
                He.MSG_CACHE_ATTACHMENT_BACKGROUND,
                t.attachments,
              ),
            ));
        })();
      }
      msgSendMessage(r) {
        var t = this;
        return L(function* () {
          try {
            let a = null;
            const n = r.data.message,
              i = r.data.isAttachment,
              s = r.data.isCaption,
              c = r.data.number.contact || r.data.number;
            if (
              t.extAuth?.isPro() &&
              n?.trim() &&
              (yield Bn.isContactBlocked(t.user.phoneNumber, c))
            )
              a = ie.Operation.STATUS_BLOCKED;
            else {
              if (i && !s) {
                const f = yield t.sendMessageByLib(n, c, !1),
                  l = yield Zs(2);
                a = yield Promise.race([f, l]);
                const h = yield t.sendMessageByLib("", c, !0),
                  d = yield Zs(2);
                a = yield Promise.race([h, d]);
              } else {
                const f = yield t.sendMessageByLib(n, c, i),
                  l = Zs(2);
                a = yield Promise.race([f, l]);
              }
              try {
                bf().setBroadcastTimestamp();
              } catch {}
            }
            return a;
          } catch (a) {
            return (console.log("error", a), ie.Operation.STATUS_FAILED);
          }
        })();
      }
      sendMessageByLib(r, t, a) {
        var n = this;
        return L(function* () {
          return a
            ? yield n.contentToLibhook?.sendFileToActiveChat(t, r)
            : yield n.contentToLibhook?.sendMessageToContact(t, r);
        })();
      }
      sendMessageToNumber(r, t) {
        var a = this;
        return L(function* () {
          return yield a.contentToLibhook?.sendMessageToContact(t, r);
        })();
      }
      callUserInitEvent() {
        var r = this;
        return L(function* () {
          yield r.initUserExtension();
        })();
      }
      getCurrentUser() {
        var r = this;
        return L(function* () {
          return yield r.contentToLibhook?.getUserInfo();
        })();
      }
      injectJs(r) {
        try {
          const t = chrome.runtime.getURL(r),
            a = document.createElement("script");
          ((a.type = "text/javascript"),
            (a.src = t),
            (
              document.head ||
              document.body ||
              document.documentElement
            ).appendChild(a));
        } catch {}
      }
      onChannelReady() {
        var r = this;
        return L(function* () {
          yield r.contentToLibhook?.setSelectors(r.selectors);
        })();
      }
      onLibReady() {
        var r = this;
        return L(function* () {
          (console.log("libhook is ready..."),
            (r.isLibHookReady = !0),
            setTimeout(
              L(function* () {
                (yield r.initUserExtension(),
                  yield Gt.sendMsgToExtension(
                    new ca(yt.CONTENT, He.LIBHOOK_READY, null),
                  ),
                  yield r.loadAttachmentFromBackgound());
              }),
              200,
            ));
        })();
      }
      cacheData(r, t) {
        return L(function* () {
          try {
            yield Gt.sendMsgToExtension(
              new ca(yt.CONTENT, He.CACHE_DATA, { key: r, data: t }),
            );
          } catch (a) {
            console.log(`Error caching data for key: ${r}`, a);
          }
        })();
      }
      initUserExtension() {
        var r = this;
        return L(function* () {
          try {
            r.user = yield r.getCurrentUser();
          } catch (t) {
            (console.error("[Content] getUserInfo failed:", t),
              (r.user = void 0));
          }
          if (r.user?.phoneNumber) {
            try {
              const t = yield Gt.sendMsgToExtension(
                new ca(yt.CONTENT, He.GET_CACHE_DATA, {
                  key: r.CACHE_KEY_LOGGED_IN_PHONE,
                }),
              );
              t !== r.user.phoneNumber &&
                (Js().logAmplitude(r.EVENT_USER_CHANGED, t, {
                  prevPhone: t,
                  currentPhone: r.user.phoneNumber,
                }),
                yield r.cacheData(
                  r.CACHE_KEY_LOGGED_IN_PHONE,
                  r.user.phoneNumber,
                ));
            } catch (t) {
              console.log("error in getting phone number", t);
            }
            ((r.extAuth = yield Bn.setUserAuth(r.user.phoneNumber)),
              r.setUninstallURL(),
              r.popupInjector.init(),
              r.popupBtnInjector.init(r.user),
              r.popupInjector.onRemove(() => {
                r.popupBtnInjector.init(r.user);
              }));
          } else
            console.error(
              "[Content] Could not resolve logged-in WhatsApp user; aborting user init. This is why the extension shows the login page.",
            );
        })();
      }
      setUninstallURL() {
        var r = this;
        return L(function* () {
          const t = !!(yield bf().getBroadcastTimestamp()),
            a = `https://wasender.com/uninstall?phone=${r.user.phoneNumber}&name=${r.user.name}`;
          r.extAuth?.isFreePlan()
            ? yield r.cacheData(
                r.UNINSTALL_URL,
                `${a}&freePlan=true&used=${!!t}`,
              )
            : yield r.cacheData(r.UNINSTALL_URL, `${a}`);
        })();
      }
      notifyUnpaired(r) {
        var t = this;
        return L(function* () {
          const a = yield Gt.sendMsgToExtension(
            new ca(yt.CONTENT, He.GET_CACHE_DATA, {
              key: t.CACHE_KEY_LOGGED_IN_PHONE,
            }),
          );
          Js().logAmplitude(t.EVENT_LOGGED_OUT, a, {});
        })();
      }
    }
    function Zs(e) {
      return new Promise((r) => {
        setTimeout(() => r("timeout"), 1e3 * e);
      });
    }
    (console.log("Content Loaded."),
      (window.onload = L(function* () {
        new FE().init();
      })));
  })();
})();
