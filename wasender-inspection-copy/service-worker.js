(() => {
  "use strict";
  var Xa = {
      4631: function (y, f, _) {
        var m =
            (this && this.__createBinding) ||
            (Object.create
              ? function (c, A, s, l) {
                  void 0 === l && (l = s);
                  var u = Object.getOwnPropertyDescriptor(A, s);
                  ((!u ||
                    ("get" in u
                      ? !A.__esModule
                      : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return A[s];
                      },
                    }),
                    Object.defineProperty(c, l, u));
                }
              : function (c, A, s, l) {
                  (void 0 === l && (l = s), (c[l] = A[s]));
                }),
          d =
            (this && this.__exportStar) ||
            function (c, A) {
              for (var s in c)
                "default" !== s &&
                  !Object.prototype.hasOwnProperty.call(A, s) &&
                  m(A, c, s);
            };
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          d(_(7763), f),
          d(_(721), f));
      },
      9061: (y, f) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.APIPathFragments = void 0));
        var _ = (function (m) {
          return (
            (m.REPORTS = "reports"),
            (m.BROADCAST = "braodcast"),
            (m.REPLY = "reply"),
            (m.USER = "user"),
            (m.ATTACHEMENT = "attachement"),
            (m.UPLOAD = "upload"),
            (m.TEMPLATE = "template"),
            (m.BLOCKLIST = "blocklist"),
            (m.STATS = "stats"),
            (m.REDRAFT = "redraft"),
            (m.COUNT = "count"),
            (m.DELETE = "delete"),
            (m.ALARM = "alarm"),
            m
          );
        })(_ || (f.APIPathFragments = _ = {}));
      },
      2527: (y, f) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.Blockcontact = void 0));
        var _ = (function () {
          function m(d, c, A, s) {
            ((this.phoneNumber = d),
              (this.blockNumberId = c),
              (this.blockKeyword = A),
              (this.version = s));
          }
          return (
            (m.fromJSON = function (d) {
              var c = null;
              return (
                d &&
                  (((c = new m("", "", "", "")).phoneNumber = d.phoneNumber
                    ? d.phoneNumber
                    : ""),
                  (c.blockNumberId = d.blockNumberId ? d.blockNumberId : ""),
                  (c.blockKeyword = d.blockKeyword ? d.blockKeyword : ""),
                  (c.version = d.version ? d.version : "")),
                c
              );
            }),
            m
          );
        })();
        f.Blockcontact = _;
      },
      1546: function (y, f, _) {
        var m =
            (this && this.__createBinding) ||
            (Object.create
              ? function (c, A, s, l) {
                  void 0 === l && (l = s);
                  var u = Object.getOwnPropertyDescriptor(A, s);
                  ((!u ||
                    ("get" in u
                      ? !A.__esModule
                      : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return A[s];
                      },
                    }),
                    Object.defineProperty(c, l, u));
                }
              : function (c, A, s, l) {
                  (void 0 === l && (l = s), (c[l] = A[s]));
                }),
          d =
            (this && this.__exportStar) ||
            function (c, A) {
              for (var s in c)
                "default" !== s &&
                  !Object.prototype.hasOwnProperty.call(A, s) &&
                  m(A, c, s);
            };
        (Object.defineProperty(f, "__esModule", { value: !0 }), d(_(2527), f));
      },
      6363: (y, f) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.BroadCastReplyData = void 0));
        var _ = (function () {
          function m(d, c, A, s, l, u, C, M, v, w) {
            (void 0 === w && (w = Date.now()),
              (this.phonenumber = d),
              (this.version = c),
              (this.broadcastId = A),
              (this.replyMsgId = s),
              (this.replyText = l || ""),
              (this.braodCastMsdId = u),
              (this.chatId = C),
              (this.fromPhonenumber = M),
              (this.tab = v),
              (this.timestamp = w));
          }
          return (
            (m.fromJSON = function (d) {
              var c = null;
              return (
                d &&
                  (c = new m(
                    d.phonenumber,
                    d.version,
                    d.broadcastId,
                    d.replyMsgId,
                    d.replyText,
                    d.braodCastMsdId,
                    d.chatId,
                    d.fromPhonenumber,
                    d.tab,
                    d.timestamp,
                  )),
                c
              );
            }),
            m
          );
        })();
        f.BroadCastReplyData = _;
      },
      6065: (y, f, _) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.BroadcastReplyStats = void 0));
        var m = _(1766),
          d = (function () {
            function c() {}
            return (
              (c.fromJSON = function (A) {
                var s,
                  l,
                  u,
                  C,
                  M,
                  v = new c();
                return (
                  A &&
                    (v.tabs =
                      (((s = {})[m.BroadcastReplyTab.AUTO_REPLY] =
                        (null === (l = A.tabs) || void 0 === l
                          ? void 0
                          : l[m.BroadcastReplyTab.AUTO_REPLY]) || 0),
                      (s[m.BroadcastReplyTab.UNSUBSCRIBE] =
                        (null === (u = A.tabs) || void 0 === u
                          ? void 0
                          : u[m.BroadcastReplyTab.UNSUBSCRIBE]) || 0),
                      (s[m.BroadcastReplyTab.INTERESTED] =
                        (null === (C = A.tabs) || void 0 === C
                          ? void 0
                          : C[m.BroadcastReplyTab.INTERESTED]) || 0),
                      (s[m.BroadcastReplyTab.NOT_INTERESTED] =
                        (null === (M = A.tabs) || void 0 === M
                          ? void 0
                          : M[m.BroadcastReplyTab.NOT_INTERESTED]) || 0),
                      s)),
                  v
                );
              }),
              Object.defineProperty(c.prototype, "auto", {
                get: function () {
                  var A;
                  return (
                    (null === (A = this.tabs) || void 0 === A
                      ? void 0
                      : A[m.BroadcastReplyTab.AUTO_REPLY]) || 0
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(c.prototype, "unsubscribe", {
                get: function () {
                  var A;
                  return (
                    (null === (A = this.tabs) || void 0 === A
                      ? void 0
                      : A[m.BroadcastReplyTab.UNSUBSCRIBE]) || 0
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(c.prototype, "interested", {
                get: function () {
                  var A;
                  return (
                    (null === (A = this.tabs) || void 0 === A
                      ? void 0
                      : A[m.BroadcastReplyTab.INTERESTED]) || 0
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(c.prototype, "notInterested", {
                get: function () {
                  var A;
                  return (
                    (null === (A = this.tabs) || void 0 === A
                      ? void 0
                      : A[m.BroadcastReplyTab.NOT_INTERESTED]) || 0
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(c.prototype, "total", {
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
              c
            );
          })();
        f.BroadcastReplyStats = d;
      },
      1766: (y, f) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.BroadcastReplyTab = void 0));
        var _ = (function (m) {
          return (
            (m.AUTO_REPLY = "auto-reply"),
            (m.UNSUBSCRIBE = "unsubscribe"),
            (m.INTERESTED = "interested"),
            (m.NOT_INTERESTED = "not-interested"),
            (m.TOTAL = "total"),
            m
          );
        })(_ || (f.BroadcastReplyTab = _ = {}));
      },
      1451: (y, f) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.BroadcastStats = void 0));
        var _ = (function () {
          function m(d, c, A, s, l) {
            ((this.totalMessages = d),
              (this.sent = c),
              (this.pending = A),
              (this.failed = s),
              (this.blocked = l));
          }
          return (
            (m.fromJSON = function (d) {
              var c = new m(0, 0, 0, 0, 0);
              return (
                d &&
                  ((c.totalMessages = d.totalMessages ? d.totalMessages : 0),
                  (c.sent = d.sent ? d.sent : 0),
                  (c.pending = d.pending ? d.pending : 0),
                  (c.failed = d.failed ? d.failed : 0),
                  (c.blocked = d.blocked ? d.blocked : 0)),
                c
              );
            }),
            m
          );
        })();
        f.BroadcastStats = _;
      },
      8503: (y, f, _) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.Broadcast = void 0));
        var m = _(5941),
          d = _(6065),
          c = _(1451),
          A = _(8131),
          s = (function () {
            function l(u, C, M, v, w, K, _e, ne, ie) {
              ((this.id = u),
                (this.operation = C),
                (this.phoneNumber = M),
                (this.unsubscriptionText = v),
                (this.messageAttachmentDetails = K),
                (this.addUnsubscriptionText = w),
                (this.sendWithCaption = _e),
                (this.text = ne),
                (this.timestamp = ie));
            }
            return (
              (l.fromJSON = function (u) {
                var C = null;
                if (u) {
                  if (
                    (((C = new l("", null, "", "", !1, [], !1, "", 0)).id = u.id
                      ? u.id
                      : ""),
                    (C.name = u.name ? u.name : ""),
                    (C.operation = u.operation
                      ? u.operation
                      : A.Operation.OPERATION_NONE),
                    (C.phoneNumber = u.phoneNumber ? u.phoneNumber : ""),
                    (C.unsubscriptionText = u.unsubscriptionText
                      ? u.unsubscriptionText
                      : ""),
                    (C.broadcastStats = c.BroadcastStats.fromJSON(
                      u.broadcastStats,
                    )),
                    (C.broadcastReplyStats = u.broadcastReplyStats
                      ? d.BroadcastReplyStats.fromJSON(u.broadcastReplyStats)
                      : new d.BroadcastReplyStats()),
                    u.messageAttachmentDetails)
                  )
                    for (
                      var M = 0;
                      M < u.messageAttachmentDetails.length;
                      M++
                    ) {
                      var v = m.MessageAttachmentDetails.fromJSON(
                        u.messageAttachmentDetails[M],
                      );
                      v && C.messageAttachmentDetails.push(v);
                    }
                  ((C.addUnsubscriptionText =
                    !!u.addUnsubscriptionText && u.addUnsubscriptionText),
                    (C.sendWithCaption =
                      !!u.sendWithCaption && u.sendWithCaption),
                    (C.text = u.text ? u.text : ""),
                    (C.timestamp = u.timestamp ? u.timestamp : 0));
                }
                return C;
              }),
              (l.prototype.unsubscriptionTextToBeSent = function () {
                if (this.addUnsubscriptionText && this.unsubscriptionText) {
                  var u = this.getUnsbuscriptionKeyWord();
                  if (u)
                    return "".concat(
                      this.unsubscriptionText.replace("{".concat(u, "}"), u),
                    );
                }
                return "";
              }),
              (l.prototype.msgToBeSent = function () {
                var u = this.text,
                  C = this.unsubscriptionTextToBeSent();
                return (C && (u = "".concat(u, "\n\n_").concat(C, "_")), u);
              }),
              (l.prototype.getUnsbuscriptionKeyWord = function () {
                var u = this.unsubscriptionText.match(/\{([^{}]+)\}/);
                return u && u.length > 1 ? u[1] : "";
              }),
              l
            );
          })();
        f.Broadcast = s;
      },
      4215: (y, f) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.BulkMessage = f.WAContactNumbers = void 0));
        var _ = (function () {
          function d(c) {
            this.contact = c;
          }
          return (
            (d.fromJSON = function (c) {
              var A = null;
              return (
                c && ((A = new d("")).contact = c.contact ? c.contact : ""),
                A
              );
            }),
            d
          );
        })();
        f.WAContactNumbers = _;
        var m = (function () {
          function d(c, A, s, l, u, C, M, v, w, K, _e, ne, ie, ee) {
            ((this.id = c),
              (this.authid = A),
              (this.fileName = s),
              (this.numbers = l),
              (this.messages = u),
              (this.batchSize = C),
              (this.batchGap = M),
              (this.isPro = v),
              (this.messageGap = w),
              (this.randomizeDelay = K),
              (this.attachment = _e),
              (this.isCaption = ne),
              (this.startTime = ie),
              (this.metaData = ee));
          }
          return (
            (d.fromJSON = function (c) {
              var A = null;
              return (
                c &&
                  (((A = new d(
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
                  )).id = c.id ? c.id : ""),
                  (A.authid = c.authid ? c.authid : ""),
                  (A.fileName = c.fileName ? c.fileName : ""),
                  (A.numbers = c.numbers
                    ? c.numbers.map(function (s) {
                        return _.fromJSON(s);
                      })
                    : []),
                  (A.messages = c.messages ? c.messages : []),
                  (A.batchSize = c.batchSize ? c.batchSize : 0),
                  (A.batchGap = c.batchGap ? c.batchGap : 0),
                  (A.isPro = !!c.isPro && c.isPro),
                  (A.messageGap = c.messageGap ? c.messageGap : 0),
                  (A.randomizeDelay = !!c.randomizeDelay && c.randomizeDelay),
                  (A.attachment = !!c.attachment && c.attachment),
                  (A.isCaption = !!c.isCaption && c.isCaption),
                  (A.startTime = !!c.startTime && c.startTime),
                  (A.metaData = !!c.metaData && c.metaData)),
                A
              );
            }),
            d
          );
        })();
        f.BulkMessage = m;
      },
      8131: (y, f) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.Operation = void 0));
        var _ = (function (m) {
          return (
            (m.OPERATION_NONE = "OPERATION_NONE"),
            (m.OPERATION_SEND_MESSAGE = "OPERATION_SEND_MESSAGE"),
            (m.OPERATION_FILTER = "OPERATION_FILTER"),
            (m.STATUS_SENT = "STATUS_SENT"),
            (m.STATUS_FAILED = "STATUS_FAILED"),
            (m.STATUS_PENDING = "STATUS_PENDING"),
            (m.STATUS_SKIPPED = "STATUS_SKIPPED"),
            (m.STATUS_BLOCKED = "STATUS_BLOCKED"),
            m
          );
        })(_ || (f.Operation = _ = {}));
      },
      4283: function (y, f, _) {
        var A,
          m =
            (this && this.__extends) ||
            ((A = function (s, l) {
              return (A =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (u, C) {
                    u.__proto__ = C;
                  }) ||
                function (u, C) {
                  for (var M in C)
                    Object.prototype.hasOwnProperty.call(C, M) && (u[M] = C[M]);
                })(s, l);
            }),
            function (s, l) {
              if ("function" != typeof l && null !== l)
                throw new TypeError(
                  "Class extends value " +
                    String(l) +
                    " is not a constructor or null",
                );
              function u() {
                this.constructor = s;
              }
              (A(s, l),
                (s.prototype =
                  null === l
                    ? Object.create(l)
                    : ((u.prototype = l.prototype), new u())));
            });
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.Contact = void 0));
        var d = _(5384),
          c = (function (A) {
            function s(l, u) {
              var C = A.call(this, d.ModelType.CONTACT) || this;
              return ((C.name = l), (C.phoneNumber = u), C);
            }
            return (
              m(s, A),
              (s.fromJSON = function (l) {
                var u = null;
                return (
                  l &&
                    l.phoneNumber &&
                    ((u = new s("", l.phoneNumber)).name = l.name
                      ? l.name
                      : ""),
                  u
                );
              }),
              s
            );
          })(d.Model);
        f.Contact = c;
      },
      6900: (y, f) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.CountryCodeAndNumber = f.CountryDialCodes = void 0),
          (f.CountryDialCodes = [
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
        var _ = (function () {
          function m(d, c) {
            ((this.countryInfo = d), (this.phoneNumber = c));
          }
          return (
            (m.extractCountryCodeAndNumber = function (d) {
              for (
                var c = new m(null, d),
                  s = 0,
                  l = f.CountryDialCodes.sort(function (v, w) {
                    return w.dial_code.length - v.dial_code.length;
                  });
                s < l.length;
                s++
              ) {
                var u = l[s],
                  C = u.dial_code.replace(/\s+/g, "");
                d.startsWith(C) && (c = new m(u, d.slice(C.length)));
              }
              return c;
            }),
            m
          );
        })();
        f.CountryCodeAndNumber = _;
      },
      7763: function (y, f, _) {
        var m =
            (this && this.__createBinding) ||
            (Object.create
              ? function (c, A, s, l) {
                  void 0 === l && (l = s);
                  var u = Object.getOwnPropertyDescriptor(A, s);
                  ((!u ||
                    ("get" in u
                      ? !A.__esModule
                      : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return A[s];
                      },
                    }),
                    Object.defineProperty(c, l, u));
                }
              : function (c, A, s, l) {
                  (void 0 === l && (l = s), (c[l] = A[s]));
                }),
          d =
            (this && this.__exportStar) ||
            function (c, A) {
              for (var s in c)
                "default" !== s &&
                  !Object.prototype.hasOwnProperty.call(A, s) &&
                  m(A, c, s);
            };
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          d(_(9061), f),
          d(_(6900), f),
          d(_(1730), f),
          d(_(7313), f),
          d(_(5384), f),
          d(_(232), f),
          d(_(1766), f),
          d(_(6363), f),
          d(_(8503), f),
          d(_(4215), f),
          d(_(4283), f),
          d(_(6900), f),
          d(_(232), f),
          d(_(5941), f),
          d(_(1546), f),
          d(_(8131), f),
          d(_(1451), f),
          d(_(6065), f));
      },
      7313: function (y, f, _) {
        var A,
          m =
            (this && this.__extends) ||
            ((A = function (s, l) {
              return (A =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (u, C) {
                    u.__proto__ = C;
                  }) ||
                function (u, C) {
                  for (var M in C)
                    Object.prototype.hasOwnProperty.call(C, M) && (u[M] = C[M]);
                })(s, l);
            }),
            function (s, l) {
              if ("function" != typeof l && null !== l)
                throw new TypeError(
                  "Class extends value " +
                    String(l) +
                    " is not a constructor or null",
                );
              function u() {
                this.constructor = s;
              }
              (A(s, l),
                (s.prototype =
                  null === l
                    ? Object.create(l)
                    : ((u.prototype = l.prototype), new u())));
            });
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.Message = void 0));
        var d = _(5384),
          c = (function (A) {
            function s(l, u, C, M, v) {
              var w = A.call(this, d.ModelType.MESSAGE) || this;
              return (
                (w.id = l),
                (w.msg = u),
                (w.chatPhonenumber = C),
                (w.fromPhonenumber = M),
                (w.time = v),
                w
              );
            }
            return (
              m(s, A),
              (s.fromJSON = function (l) {
                var u = null;
                return (
                  l &&
                    (((u = new s("", null, null, null, 0)).id = l.id
                      ? l.id
                      : null),
                    (u.msg = l.msg ? l.msg : null),
                    (u.chatPhonenumber = l.chatPhonenumber
                      ? l.chatPhonenumber
                      : null),
                    (u.fromPhonenumber = l.fromPhonenumber
                      ? l.fromPhonenumber
                      : null),
                    (u.time = l.time ? l.time : 0)),
                  u
                );
              }),
              s
            );
          })(d.Model);
        f.Message = c;
      },
      5384: (y, f) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.Model = f.ModelType = void 0));
        var _ = (function (d) {
          return (
            (d.CONTACT = "CONTACT"),
            (d.EXT_AUTH = "EXT_AUTH"),
            (d.MESSAGE = "MESSAGE"),
            d
          );
        })(_ || (f.ModelType = _ = {}));
        f.Model = function d(c) {
          this.modelType = c;
        };
      },
      232: (y, f, _) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.ModelUtils = void 0));
        var m = _(4283),
          d = _(7313),
          c = _(5384),
          A = (function () {
            function s() {}
            return (
              (s.fromJSON = function (l) {
                var u = null;
                return l
                  ? Array.isArray(l)
                    ? s.handleDataArray(l, u)
                    : "object" == typeof l
                      ? s.handleDataObject(l, u)
                      : l
                  : l;
              }),
              (s.handleDataObject = function (l, u) {
                if (l)
                  if (l.modelType)
                    switch (l.modelType) {
                      case c.ModelType.CONTACT:
                        u = m.Contact.fromJSON(l);
                        break;
                      case c.ModelType.MESSAGE:
                        u = d.Message.fromJSON(l);
                    }
                  else u = l;
                return u;
              }),
              (s.handleDataArray = function (l, u) {
                return (
                  l &&
                    l.length &&
                    (u = l.map(function (C) {
                      return s.fromJSON(C);
                    })),
                  u
                );
              }),
              s
            );
          })();
        f.ModelUtils = A;
      },
      5941: function (y, f, _) {
        var m =
            (this && this.__createBinding) ||
            (Object.create
              ? function (c, A, s, l) {
                  void 0 === l && (l = s);
                  var u = Object.getOwnPropertyDescriptor(A, s);
                  ((!u ||
                    ("get" in u
                      ? !A.__esModule
                      : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return A[s];
                      },
                    }),
                    Object.defineProperty(c, l, u));
                }
              : function (c, A, s, l) {
                  (void 0 === l && (l = s), (c[l] = A[s]));
                }),
          d =
            (this && this.__exportStar) ||
            function (c, A) {
              for (var s in c)
                "default" !== s &&
                  !Object.prototype.hasOwnProperty.call(A, s) &&
                  m(A, c, s);
            };
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          d(_(8349), f),
          d(_(2044), f));
      },
      8349: (y, f) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.MessageAttachmentDetails = void 0));
        var _ = (function () {
          function m(d, c, A, s) {
            ((this.type = s), (this.name = d), (this.url = c), (this.size = A));
          }
          return (
            (m.fromJSON = function (d) {
              var c = null;
              return (
                d &&
                  (((c = new m("", "", 0, "")).name = d.name ? d.name : ""),
                  (c.url = d.url ? d.url : ""),
                  (c.size = d.size ? d.size : 0),
                  (c.type = d.type ? d.type : "")),
                c
              );
            }),
            m
          );
        })();
        f.MessageAttachmentDetails = _;
      },
      2044: (y, f, _) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.MessageTemplate = f.MessageTemplateType = void 0));
        var m = _(721),
          d = _(8349),
          c = (function (s) {
            return ((s.TEXT = "text"), (s.IMAGE = "image"), (s.DOC = "doc"), s);
          })(c || (f.MessageTemplateType = c = {})),
          A = (function () {
            function s(l, u, C, M, v, w, K, _e, ne, ie) {
              ((this.id = l),
                (this.phoneNumber = u),
                (this.name = C),
                (this.template = M),
                (this.attachmentDetails = v),
                (this.addUnsubscriptionText = w),
                (this.unsubscriptionText = K),
                (this.sendWithCaption = _e),
                (this.createdAt = ne),
                (this.updatedAt = ie));
            }
            return (
              (s.fromJSON = function (l) {
                var u = null;
                if (l) {
                  if (
                    (((u = new s("", "", "", "", [], !1, "", !1, 0, 0)).id =
                      l.id ? l.id : ""),
                    (u.phoneNumber = l.phoneNumber ? l.phoneNumber : ""),
                    (u.name = l.name ? l.name : ""),
                    (u.template = l.template ? l.template : ""),
                    l.attachmentDetails)
                  )
                    for (var C = 0; C < l.attachmentDetails.length; C++) {
                      var M = d.MessageAttachmentDetails.fromJSON(
                        l.attachmentDetails[C],
                      );
                      M && u.attachmentDetails.push(M);
                    }
                  ((u.addUnsubscriptionText =
                    !!l.addUnsubscriptionText && l.addUnsubscriptionText),
                    (u.unsubscriptionText = l.unsubscriptionText
                      ? l.unsubscriptionText
                      : ""),
                    (u.sendWithCaption =
                      !!l.sendWithCaption && l.sendWithCaption),
                    (u.createdAt = l.createdAt ? l.createdAt : 0),
                    (u.updatedAt = l.updatedAt ? l.updatedAt : 0));
                }
                return u;
              }),
              (s.getDefault = function (l) {
                return new s(
                  m.UUIDUtils.generate(),
                  l,
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
              Object.defineProperty(s.prototype, "templateType", {
                get: function () {
                  return this.attachmentDetails.length > 0
                    ? this.attachmentDetails.every(function (u) {
                        return u.type.includes("image");
                      })
                      ? c.IMAGE
                      : c.DOC
                    : c.TEXT;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (s.DEFAULT_UNSUBSCRIPTION_TEXT =
                "If this is not relevant please say {STOP} and we will never message you again."),
              s
            );
          })();
        f.MessageTemplate = A;
      },
      1730: (y, f) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.UserDetails = void 0));
        var _ = (function () {
          function m(d, c, A, s, l, u, C, M) {
            ((this.phoneNumber = d),
              (this.number = c),
              (this.email = A),
              (this.name = s),
              (this.verifiedEmail = l),
              (this.getTips = u),
              (this.countryInfo = C),
              (this.installTimestamp = M));
          }
          return (
            (m.fromJSON = function (d) {
              var c = null;
              return (
                d &&
                  (((c = new m("", "", "", "", !1, !1, null, 0)).phoneNumber =
                    d.phoneNumber ? d.phoneNumber : ""),
                  (c.phoneNumber = c.phoneNumber.replace(/[^0-9]/g, "")),
                  (c.number = d.number ? d.number : ""),
                  (c.email = d.email ? d.email : ""),
                  (c.name = d.name ? d.name : ""),
                  (c.verifiedEmail = !!d.verifiedEmail && d.verifiedEmail),
                  (c.getTips = !!d.getTips && d.getTips),
                  (c.countryInfo = d.countryInfo ? d.countryInfo : null),
                  (c.installTimestamp = d.installTimestamp
                    ? d.installTimestamp
                    : 0)),
                c
              );
            }),
            (m.prototype.getUserNameIntitals = function () {
              var d = this.name.split(" ");
              return d.length > 1
                ? d[0].charAt(0).toUpperCase() + d[1].charAt(0).toUpperCase()
                : d[0].charAt(0).toUpperCase();
            }),
            (m.prototype.isValid = function () {
              return !(!this.number.trim() || !this.name.trim());
            }),
            m
          );
        })();
        f.UserDetails = _;
      },
      721: function (y, f, _) {
        var m =
            (this && this.__createBinding) ||
            (Object.create
              ? function (c, A, s, l) {
                  void 0 === l && (l = s);
                  var u = Object.getOwnPropertyDescriptor(A, s);
                  ((!u ||
                    ("get" in u
                      ? !A.__esModule
                      : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return A[s];
                      },
                    }),
                    Object.defineProperty(c, l, u));
                }
              : function (c, A, s, l) {
                  (void 0 === l && (l = s), (c[l] = A[s]));
                }),
          d =
            (this && this.__exportStar) ||
            function (c, A) {
              for (var s in c)
                "default" !== s &&
                  !Object.prototype.hasOwnProperty.call(A, s) &&
                  m(A, c, s);
            };
        (Object.defineProperty(f, "__esModule", { value: !0 }), d(_(3895), f));
      },
      3895: (y, f) => {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.UUIDUtils = void 0));
        var _ = (function () {
          function m() {}
          return (
            (m.generate = function () {
              var d = new Date().getTime();
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                function (A) {
                  var s = ((d + 16 * Math.random()) % 16) | 0;
                  return (
                    (d = Math.floor(d / 16)),
                    ("x" == A ? s : (3 & s) | 8).toString(16)
                  );
                },
              );
            }),
            m
          );
        })();
        f.UUIDUtils = _;
      },
    },
    xt = {};
  function j(y) {
    var f = xt[y];
    if (void 0 !== f) return f.exports;
    var _ = (xt[y] = { exports: {} });
    return (Xa[y].call(_.exports, _, _.exports, j), _.exports);
  }
  ((j.d = (y, f) => {
    for (var _ in f)
      j.o(f, _) &&
        !j.o(y, _) &&
        Object.defineProperty(y, _, { enumerable: !0, get: f[_] });
  }),
    (j.o = (y, f) => Object.prototype.hasOwnProperty.call(y, f)),
    (j.r = (y) => {
      (typeof Symbol < "u" &&
        Symbol.toStringTag &&
        Object.defineProperty(y, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(y, "__esModule", { value: !0 }));
    }),
    (() => {
      var y = {};
      function f(e, t, a, r, n, i, o) {
        try {
          var E = e[i](o),
            h = E.value;
        } catch (O) {
          return void a(O);
        }
        E.done ? t(h) : Promise.resolve(h).then(r, n);
      }
      function _(e) {
        return function () {
          var t = this,
            a = arguments;
          return new Promise(function (r, n) {
            var i = e.apply(t, a);
            function o(h) {
              f(i, r, n, o, E, "next", h);
            }
            function E(h) {
              f(i, r, n, o, E, "throw", h);
            }
            o(void 0);
          });
        };
      }
      (j.r(y),
        j.d(y, {
          hasBrowserEnv: () => Ra,
          hasStandardBrowserEnv: () => bn,
          hasStandardBrowserWebWorkerEnv: () => Mn,
        }));
      var m = j(4631),
        d = (function (e) {
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
        })(d || {});
      class c {
        static sendMsgToExtension(t) {
          return new Promise((a, r) => {
            try {
              chrome.runtime.sendMessage(t, (n) => {
                a(n);
              });
            } catch (n) {
              (console.log(n), r(n));
            }
          });
        }
        static getActiveTab() {
          return new Promise((t) => {
            chrome.tabs?.query({ active: !0, currentWindow: !0 }, function (a) {
              t(a[0].id);
            });
          });
        }
        static sendMsgToActiveTab(t) {
          return this.getActiveTab().then((a) => this.sendMessageToTab(t, a));
        }
        static sendMessageToTab(t, a) {
          return new Promise((r, n) => {
            null != a &&
              a >= 0 &&
              chrome.tabs.sendMessage(a || 0, t, function (i) {
                chrome.runtime.lastError && n(chrome.runtime.lastError);
                try {
                  if (i) {
                    const o = m.ModelUtils.fromJSON(i);
                    r(o);
                  } else n(d.NO_RESPONSE);
                } catch (o) {
                  console.log("error in send message to tab", o);
                }
              });
          });
        }
      }
      var A = (function (e) {
          return (
            (e.CONTENT = "CONTENT"),
            (e.POPUP = "POPUP"),
            (e.BACKGROUND_JS = "BACKGROUND_JS"),
            e
          );
        })(A || {}),
        s = (function (e) {
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
        })(s || {});
      let u = (() => {
        class t extends m.Model {
          constructor(r, n, i) {
            (super(m.ModelType.EXT_AUTH),
              (this.phoneNumber = r),
              (this.license = n),
              (this.details = i));
          }
          static fromJSON(r) {
            let n = null;
            return (
              r &&
                ((n = new t("", null, null)),
                (n.phoneNumber = r.phoneNumber ? r.phoneNumber : ""),
                (n.license = r.license ? r.license : ""),
                (n.details = m.UserDetails.fromJSON(r.details))),
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
        return ((t.AUTH_KEY = "AUTH_KEY"), t);
      })();
      function C(e) {
        return "function" == typeof e;
      }
      const v = (function M(e) {
        const a = e((r) => {
          (Error.call(r), (r.stack = new Error().stack));
        });
        return (
          (a.prototype = Object.create(Error.prototype)),
          (a.prototype.constructor = a),
          a
        );
      })(
        (e) =>
          function (a) {
            (e(this),
              (this.message = a
                ? `${a.length} errors occurred during unsubscription:\n${a.map((r, n) => `${n + 1}) ${r.toString()}`).join("\n  ")}`
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = a));
          },
      );
      function w(e, t) {
        if (e) {
          const a = e.indexOf(t);
          0 <= a && e.splice(a, 1);
        }
      }
      class K {
        constructor(t) {
          ((this.initialTeardown = t),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null));
        }
        unsubscribe() {
          let t;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: a } = this;
            if (a)
              if (((this._parentage = null), Array.isArray(a)))
                for (const i of a) i.remove(this);
              else a.remove(this);
            const { initialTeardown: r } = this;
            if (C(r))
              try {
                r();
              } catch (i) {
                t = i instanceof v ? i.errors : [i];
              }
            const { _finalizers: n } = this;
            if (n) {
              this._finalizers = null;
              for (const i of n)
                try {
                  ie(i);
                } catch (o) {
                  ((t = t ?? []),
                    o instanceof v ? (t = [...t, ...o.errors]) : t.push(o));
                }
            }
            if (t) throw new v(t);
          }
        }
        add(t) {
          var a;
          if (t && t !== this)
            if (this.closed) ie(t);
            else {
              if (t instanceof K) {
                if (t.closed || t._hasParent(this)) return;
                t._addParent(this);
              }
              (this._finalizers =
                null !== (a = this._finalizers) && void 0 !== a ? a : []).push(
                t,
              );
            }
        }
        _hasParent(t) {
          const { _parentage: a } = this;
          return a === t || (Array.isArray(a) && a.includes(t));
        }
        _addParent(t) {
          const { _parentage: a } = this;
          this._parentage = Array.isArray(a) ? (a.push(t), a) : a ? [a, t] : t;
        }
        _removeParent(t) {
          const { _parentage: a } = this;
          a === t ? (this._parentage = null) : Array.isArray(a) && w(a, t);
        }
        remove(t) {
          const { _finalizers: a } = this;
          (a && w(a, t), t instanceof K && t._removeParent(this));
        }
      }
      function ne(e) {
        return (
          e instanceof K ||
          (e && "closed" in e && C(e.remove) && C(e.add) && C(e.unsubscribe))
        );
      }
      function ie(e) {
        C(e) ? e() : e.unsubscribe();
      }
      K.EMPTY = (() => {
        const e = new K();
        return ((e.closed = !0), e);
      })();
      const ee = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        Ge = {
          setTimeout(e, t, ...a) {
            const { delegate: r } = Ge;
            return r?.setTimeout
              ? r.setTimeout(e, t, ...a)
              : setTimeout(e, t, ...a);
          },
          clearTimeout(e) {
            const { delegate: t } = Ge;
            return (t?.clearTimeout || clearTimeout)(e);
          },
          delegate: void 0,
        };
      function Kt() {}
      const qa = je("C", void 0, void 0);
      function je(e, t, a) {
        return { kind: e, value: t, error: a };
      }
      let ce = null;
      class Jt extends K {
        constructor(t) {
          (super(),
            (this.isStopped = !1),
            t
              ? ((this.destination = t), ne(t) && t.add(this))
              : (this.destination = ir));
        }
        static create(t, a, r) {
          return new tt(t, a, r);
        }
        next(t) {
          this.isStopped
            ? at(
                (function ja(e) {
                  return je("N", e, void 0);
                })(t),
                this,
              )
            : this._next(t);
        }
        error(t) {
          this.isStopped
            ? at(
                (function $a(e) {
                  return je("E", void 0, e);
                })(t),
                this,
              )
            : ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped
            ? at(qa, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          try {
            this.destination.error(t);
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
      const ar = Function.prototype.bind;
      function et(e, t) {
        return ar.call(e, t);
      }
      class rr {
        constructor(t) {
          this.partialObserver = t;
        }
        next(t) {
          const { partialObserver: a } = this;
          if (a.next)
            try {
              a.next(t);
            } catch (r) {
              ve(r);
            }
        }
        error(t) {
          const { partialObserver: a } = this;
          if (a.error)
            try {
              a.error(t);
            } catch (r) {
              ve(r);
            }
          else ve(t);
        }
        complete() {
          const { partialObserver: t } = this;
          if (t.complete)
            try {
              t.complete();
            } catch (a) {
              ve(a);
            }
        }
      }
      class tt extends Jt {
        constructor(t, a, r) {
          let n;
          if ((super(), C(t) || !t))
            n = {
              next: t ?? void 0,
              error: a ?? void 0,
              complete: r ?? void 0,
            };
          else {
            let i;
            this && ee.useDeprecatedNextContext
              ? ((i = Object.create(t)),
                (i.unsubscribe = () => this.unsubscribe()),
                (n = {
                  next: t.next && et(t.next, i),
                  error: t.error && et(t.error, i),
                  complete: t.complete && et(t.complete, i),
                }))
              : (n = t);
          }
          this.destination = new rr(n);
        }
      }
      function ve(e) {
        ee.useDeprecatedSynchronousErrorHandling
          ? (function tr(e) {
              ee.useDeprecatedSynchronousErrorHandling &&
                ce &&
                ((ce.errorThrown = !0), (ce.error = e));
            })(e)
          : (function Qa(e) {
              Ge.setTimeout(() => {
                const { onUnhandledError: t } = ee;
                if (!t) throw e;
                t(e);
              });
            })(e);
      }
      function at(e, t) {
        const { onStoppedNotification: a } = ee;
        a && Ge.setTimeout(() => a(e, t));
      }
      const ir = {
          closed: !0,
          next: Kt,
          error: function nr(e) {
            throw e;
          },
          complete: Kt,
        },
        or =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      function sr(e) {
        return e;
      }
      let cr = (() => {
        class e {
          constructor(a) {
            a && (this._subscribe = a);
          }
          lift(a) {
            const r = new e();
            return ((r.source = this), (r.operator = a), r);
          }
          subscribe(a, r, n) {
            const i = (function lr(e) {
              return (
                (e && e instanceof Jt) ||
                ((function ur(e) {
                  return e && C(e.next) && C(e.error) && C(e.complete);
                })(e) &&
                  ne(e))
              );
            })(a)
              ? a
              : new tt(a, r, n);
            return (
              (function er(e) {
                if (ee.useDeprecatedSynchronousErrorHandling) {
                  const t = !ce;
                  if ((t && (ce = { errorThrown: !1, error: null }), e(), t)) {
                    const { errorThrown: a, error: r } = ce;
                    if (((ce = null), a)) throw r;
                  }
                } else e();
              })(() => {
                const { operator: o, source: E } = this;
                i.add(
                  o
                    ? o.call(i, E)
                    : E
                      ? this._subscribe(i)
                      : this._trySubscribe(i),
                );
              }),
              i
            );
          }
          _trySubscribe(a) {
            try {
              return this._subscribe(a);
            } catch (r) {
              a.error(r);
            }
          }
          forEach(a, r) {
            return new (r = kt(r))((n, i) => {
              const o = new tt({
                next: (E) => {
                  try {
                    a(E);
                  } catch (h) {
                    (i(h), o.unsubscribe());
                  }
                },
                error: i,
                complete: n,
              });
              this.subscribe(o);
            });
          }
          _subscribe(a) {
            var r;
            return null === (r = this.source) || void 0 === r
              ? void 0
              : r.subscribe(a);
          }
          [or]() {
            return this;
          }
          pipe(...a) {
            return (function Vt(e) {
              return 0 === e.length
                ? sr
                : 1 === e.length
                  ? e[0]
                  : function (a) {
                      return e.reduce((r, n) => n(r), a);
                    };
            })(a)(this);
          }
          toPromise(a) {
            return new (a = kt(a))((r, n) => {
              let i;
              this.subscribe(
                (o) => (i = o),
                (o) => n(o),
                () => r(i),
              );
            });
          }
        }
        return ((e.create = (t) => new e(t)), e);
      })();
      function kt(e) {
        var t;
        return null !== (t = e ?? ee.Promise) && void 0 !== t ? t : Promise;
      }
      var ue = (function (e) {
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
      })(ue || {});
      class te {
        static setStorage(t, a) {
          return new Promise((r, n) => {
            const i = {};
            ((i[t] = a),
              chrome.storage.local.set(i, () => {
                r();
              }));
          });
        }
        static getStorage(t) {
          return new Promise((a, r) => {
            chrome.storage.local.get(t, (n) => {
              a(n[t]);
            });
          });
        }
        static removeStorage(t) {
          return _(function* () {
            yield chrome.storage.local.remove([t]);
          })();
        }
        static saveTeleCRMAuth(t) {
          return te.setStorage(ue.TELECRM_AUTH, JSON.stringify(t || ""));
        }
        static getTeleCRMAuth() {
          return _(function* () {
            const t = yield te.getStorage(ue.TELECRM_AUTH);
            return t ? u.fromJSON(JSON.parse(t)) : null;
          })();
        }
        static saveVariables(t) {
          const a = {};
          return (
            t.forEach((r) => {
              a[r.key] = r.value;
            }),
            this.saveToStorage(a)
          );
        }
        static saveToStorage(t) {
          return new cr((a) => {
            chrome.storage.sync.set(t, () => {
              (a.next(), a.complete());
            });
          });
        }
        static loadVariables(t) {
          return this.getFromStorage(t);
        }
        static getFromStorage(t) {
          return new Promise((a, r) => {
            chrome.storage.sync.get(t, (n) => {
              a(n);
            });
          });
        }
        static clear() {
          return new Promise((t, a) => {
            chrome.storage.local.clear(function () {
              var r = chrome.runtime.lastError;
              (r && a(r), t());
            });
          });
        }
        static setLastRoute(t) {
          return te.setStorage(ue.LAST_ROUTE, t || "");
        }
        static getLastRoute() {
          return _(function* () {
            return yield te.getStorage(ue.LAST_ROUTE);
          })();
        }
        static parseBoolean(t) {
          return "true" === t;
        }
        static saveAttachmentsSettings(t) {
          let a = "";
          return (
            t && (a = JSON.stringify(t)),
            te.setStorage(ue.KEY_ATTACHMENTS_SETTINGS_DATA, a)
          );
        }
        static getAttachmentsSettings() {
          return _(function* () {
            let t = {};
            const a = yield te.getStorage(ue.KEY_ATTACHMENTS_SETTINGS_DATA);
            return (a && (t = JSON.parse(a)), t);
          })();
        }
      }
      function we(e, t, a) {
        return (
          (t = (function Sr(e) {
            var t = (function hr(e, t) {
              if ("object" != typeof e || !e) return e;
              var a = e[Symbol.toPrimitive];
              if (void 0 !== a) {
                var r = a.call(e, t || "default");
                if ("object" != typeof r) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == typeof t ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function zt(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          (t &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            a.push.apply(a, r));
        }
        return a;
      }
      function Oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? zt(Object(a), !0).forEach(function (r) {
                we(e, r, a[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : zt(Object(a)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(a, r),
                  );
                });
        }
        return e;
      }
      var Ce = {
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
          "America/Lower_Princes": {
            a: "America/Puerto_Rico",
            c: ["SX"],
            r: 1,
          },
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
          "America/Port_of_Spain": {
            a: "America/Puerto_Rico",
            c: ["TT"],
            r: 1,
          },
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
          "America/St_Barthelemy": {
            a: "America/Puerto_Rico",
            c: ["BL"],
            r: 1,
          },
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
      function Xt(e) {
        var t = Math.floor(Math.abs(e) / 60),
          a = e % 60;
        return ""
          .concat(e < 0 ? "-" : "+")
          .concat(Qt(t), ":")
          .concat(Qt(a));
      }
      function Qt(e) {
        var t = Math.abs(e);
        return "".concat(t < 10 ? "0" : "").concat(t);
      }
      Object.keys(Ce.timezones);
      var Ne = {};
      let vr = (() => {
        class t {
          constructor(
            r,
            n,
            i,
            o,
            E,
            h = t.BUY_FRAME_DEFAULT_URL,
            O = !1,
            R = 10,
            p,
            g,
            U,
          ) {
            ((this.DEFAULT_COOKIES = ["origin", "clickid", "campaignid"]),
              (this.reviewMode = !1),
              (this.freeMessageLimit = 10),
              (this.waSenderCookies = this.DEFAULT_COOKIES),
              (this.suggestBan = r),
              (this.banner = n),
              (this.bannerIframeLink = i),
              (this.helpNumber = o),
              (this.buyFrameLink = h),
              (this.reviewMode = O),
              (this.freeMessageLimit = R),
              (this.waSenderCookies = p),
              (this.autoRenewalLink = g),
              (this.manageRenewalLink = U),
              (this.onBoardingFrameURL = E));
          }
          static fromJSON(r) {
            let n = null;
            return (
              r &&
                ((n = new t(
                  {},
                  {},
                  "",
                  "",
                  "",
                  t.BUY_FRAME_DEFAULT_URL,
                  !1,
                  10,
                  [],
                  "",
                  "",
                )),
                (n.suggestBan = r.suggestBan ? r.suggestBan : {}),
                (n.banner = r.banner ? r.banner : {}),
                (n.bannerIframeLink = r.bannerIframeLink
                  ? r.bannerIframeLink
                  : ""),
                (n.helpNumber = r.helpNumber ? r.helpNumber : ""),
                (n.buyFrameLink = r.buyFrameLink
                  ? r.buyFrameLink
                  : t.BUY_FRAME_DEFAULT_URL),
                (n.reviewMode = !!r.reviewMode && r.reviewMode),
                (n.freeMessageLimit = r.freeMessageLimit
                  ? r.freeMessageLimit
                  : 10),
                (n.waSenderCookies = r.waSenderCookies
                  ? r.waSenderCookies
                  : n.DEFAULT_COOKIES),
                (n.autoRenewalLink = r.autoRenewalLink
                  ? r.autoRenewalLink
                  : ""),
                (n.manageRenewalLink = r.manageRenewalLink
                  ? r.manageRenewalLink
                  : ""),
                (n.onBoardingFrameURL = r.onBoardingFrameURL
                  ? r.onBoardingFrameURL
                  : "")),
              n
            );
          }
          get countries() {
            return (function Pe(e) {
              return (
                Ne[e] ||
                  (function gr(e) {
                    e && ((Ne[e.name] = e), Object.keys(e));
                  })(
                    (function Pr(e, t) {
                      var a = e.timezones[t];
                      if (!a) return null;
                      var r = a.a,
                        n = void 0 === r ? null : r,
                        o = Oe(Oe({}, n ? e.timezones[n] : {}), e.timezones[t]),
                        E = o.c || [],
                        h = o.u,
                        O = Number.isInteger(o.d) ? o.d : h,
                        R = {
                          name: t,
                          countries: E,
                          utcOffset: h,
                          utcOffsetStr: Xt(h),
                          dstOffset: O,
                          dstOffsetStr: Xt(O),
                          aliasOf: n,
                        };
                      return (a.r && (R.deprecated = !0), R);
                    })(Ce, e),
                  ),
                Ne[e] ? Oe({}, Ne[e]) : null
              );
            })(Intl.DateTimeFormat().resolvedOptions().timeZone)?.countries;
          }
          bannerEnabled(r) {
            return (
              !this.banner ||
              0 === Object.keys(this.banner).length ||
              this.isAllowed(r, this.banner)
            );
          }
          suggestBanEnabled(r) {
            return this.isAllowed(r, this.suggestBan);
          }
          isAllowed(r, n) {
            const i = r + "wasender";
            let o = 0;
            for (let R = 0; R < i.length; R++)
              ((o = (o << 5) - o + i.charCodeAt(R)), (o |= 0));
            const E = Math.abs(o % 100),
              h = this.countries.find((R) => Object.keys(n).includes(R)),
              O = n[h] || n?.ALL || 0;
            return O?.[0] <= E && E <= O?.[1];
          }
        }
        return (
          (t.BUY_FRAME_DEFAULT_URL =
            "https://wasender.com/modal.html?nocache=true"),
          t
        );
      })();
      var it = (function (e) {
        return ((e.PRO = "PRO"), (e.MAIL_VERIFY = "MAIL_VERIFY"), e);
      })(it || {});
      class Ae {
        constructor(t, a, r, n, i, o, E, h, O, R) {
          ((this.broadcastId = t),
            (this.broadcastName = a),
            (this.fileName = r),
            (this.nextMessageTime = n),
            (this.operation = i),
            (this.isPaused = o),
            (this.isFinished = E),
            (this.startTime = h),
            (this.report = O),
            (this.stopReason = R));
        }
        static fromJSON(t) {
          let a = null;
          return (
            t &&
              ((a = new Ae("", "", "", 0, "", !1, !1, 0, null, null)),
              (a.broadcastId = t.broadcastId ? t.broadcastId : ""),
              (a.broadcastName = t.broadcastName ? t.broadcastName : ""),
              (a.fileName = t.fileName ? t.fileName : ""),
              (a.nextMessageTime = t.nextMessageTime ? t.nextMessageTime : 0),
              (a.operation = t.operation ? t.operation : ""),
              (a.isPaused = !!t.isPaused && t.isPaused),
              (a.isFinished = !!t.isFinished && t.isFinished),
              (a.startTime = t.startTime ? t.startTime : 0),
              (a.report = t.report ? ot.fromJSON(t.report) : null),
              (a.stopReason = t.stopReason ? t.stopReason : null)),
            a
          );
        }
        getBroadcastStats() {
          let t = new m.BroadcastStats(0, 0, 0, 0, 0);
          return (
            this.report &&
              ((t.totalMessages = this.report.messages.length),
              (t.sent = this.report.status.filter(
                (a) => a === m.Operation.STATUS_SENT,
              ).length),
              (t.pending = this.report.status.filter(
                (a) => a === m.Operation.STATUS_PENDING,
              ).length),
              (t.failed = this.report.status.filter(
                (a) =>
                  a === m.Operation.STATUS_FAILED ||
                  a === m.Operation.STATUS_SKIPPED,
              ).length),
              (t.blocked = this.report.status.filter(
                (a) => a === m.Operation.STATUS_BLOCKED,
              ).length)),
            t
          );
        }
        getPercentCompleted() {
          let t = 0;
          if (this.report) {
            const a = this.report.messages.length,
              r = this.report.status.filter(
                (n) => n !== m.Operation.STATUS_PENDING,
              ).length;
            t = Math.floor((r / a) * 100);
          }
          return t;
        }
      }
      class ot {
        constructor(t, a, r, n, i, o, E, h, O) {
          ((this.isFinished = t),
            (this.operation = a),
            (this.isPaused = r),
            (this.numbers = n),
            (this.messages = i),
            (this.status = o),
            (this.nextMessageIndex = E),
            (this.isPro = h),
            (this.isAttachment = O));
        }
        static fromJSON(t) {
          let a = new ot(!1, "", !1, [], [], [], 0, !1, !1);
          return (
            t &&
              ((a.isFinished = !!t.isFinished && t.isFinished),
              (a.operation = t.operation ? t.operation : ""),
              (a.isPaused = !!t.isPaused && t.isPaused),
              (a.numbers = t.numbers
                ? t.numbers.map((r) => m.WAContactNumbers.fromJSON(r))
                : []),
              (a.messages = t.messages ? t.messages : []),
              (a.status = t.status ? t.status : []),
              (a.nextMessageIndex = t.nextMessageIndex
                ? t.nextMessageIndex
                : 0),
              (a.isPro = !!t.isPro && t.isPro),
              (a.isAttachment = !!t.isAttachment && t.isAttachment)),
            a
          );
        }
      }
      function Z(e, t) {
        return st.apply(this, arguments);
      }
      function st() {
        return (st = _(function* (e, t) {
          const a = yield c.sendMsgToExtension({
            from: A.CONTENT,
            subject: e,
            data: t,
          });
          return (
            console.log("Response from background for subject", e, "is", a),
            a
          );
        })).apply(this, arguments);
      }
      const Wr = new (class Hr {
          constructor(t) {
            this.storage = t;
          }
          createLead(t) {
            return Z(s.API_CREATE_LEAD, { properties: t });
          }
          setUserAuth(t) {
            var a = this;
            return _(function* () {
              const r = (function () {
                  var i = _(function* () {
                    return Z(s.API_GET_LICENSE, { phoneNumber: t });
                  });
                  return function () {
                    return i.apply(this, arguments);
                  };
                })(),
                n = (function () {
                  var i = _(function* () {
                    return yield a.getUserDetails(t);
                  });
                  return function () {
                    return i.apply(this, arguments);
                  };
                })();
              try {
                const [i, o] = yield Promise.all([r(), n()]);
                if (i && i.licensedetails) {
                  const h = new u(t, i.licensedetails, o),
                    O = yield a.storage.get(u.AUTH_KEY),
                    R = u.fromJSON(O);
                  return (
                    R && R.isFreePlan() && h.isPro(),
                    a.storage.set(u.AUTH_KEY, h),
                    h
                  );
                }
                return (console.warn("No license data found"), null);
              } catch (i) {
                return (console.error("Error in setUserAuth", i), null);
              }
            })();
          }
          updateDetails(t, a) {
            return _(function* () {
              const r = yield Z(s.API_UPDATE_DETAILS, {
                phoneNumber: t,
                details: a,
              });
              return new u(t, r.message, r.message.details);
            })();
          }
          getAppData(t) {
            return _(function* () {
              const a = yield Z(s.API_GET_APP_CONFIG, { phoneNumber: t });
              return vr.fromJSON(a.message);
            })();
          }
          getSelectors(t) {
            return _(function* () {
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
                SELECTOR_FORWARD_BUTTON:
                  "[data-icon=send-light],[data-icon=send]",
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
                SELECTOR_GROUP_DETAILS_OPEN_BUTTON:
                  "#main header [role=button]",
                SELECTOR_EXPAND_ALL_GROUP_MEMEBERS_BUTTTON:
                  '[data-icon="down"]',
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
                SELECTOR_TEMPLATE_UI:
                  "#main footer .copyable-text.selectable-text",
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
                LIBHOOK_SELECTOR_SENDMESSAGEPROTOTYPE:
                  "Store.sendMessagePrototype",
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
          uploadReport(t, a, r) {
            return _(function* () {
              try {
                const n = Ae.fromJSON(r),
                  [i] = yield Promise.all([
                    Z(s.API_GET_REPORT_PRESIGNED_URL, {
                      phoneNumber: t,
                      broadcastId: a,
                    }),
                    Z(s.API_POST_BROADCAST_STATS, {
                      phoneNumber: t,
                      broadcastId: a,
                      stats: n.getBroadcastStats(),
                    }),
                  ]);
                if (i) {
                  const { uploadUrl: o, originalS3URL: E } = i;
                  return (
                    yield Z(s.API_UPLOAD_TO_S3, {
                      uploadUrl: o,
                      content: JSON.stringify(r),
                      contentType: "application/json",
                    }),
                    E
                  );
                }
                return "";
              } catch (n) {
                return (console.log("Error in uploadReport", n), "");
              }
            })();
          }
          uploadToS3(t, a, r) {
            return _(function* () {
              return Z(s.API_UPLOAD_TO_S3, {
                uploadUrl: t,
                content: a,
                contentType: r,
              });
            })();
          }
          getUserDetails(t) {
            return _(function* () {
              const a = yield Z(s.API_GET_USER_DETAILS, { phoneNumber: t });
              return m.UserDetails.fromJSON(a);
            })();
          }
          isContactBlocked(t, a) {
            return _(function* () {
              return Z(s.API_IS_CONTACT_BLOCKED, {
                userPhoneNumber: t,
                numberToBeChecked: a,
              });
            })();
          }
          logAmplitude(t, a, r = {}, n = {}) {
            return _(function* () {
              yield Z(s.API_LOG_AMPLITUDE, {
                eventType: t,
                userId: a,
                eventProperties: r,
                userProperties: n,
              });
            })();
          }
        })(
          new (class Fr {
            set(t, a) {
              te.setStorage(t, a);
            }
            get(t) {
              return _(function* () {
                return yield te.getStorage(t);
              })();
            }
          })(),
        ),
        xr = {
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
        },
        J_ROOT_URL = "https://us-central1-waplugin-34798.cloudfunctions.net",
        J_CRM_ROUTE =
          "https://next-api.telecrm.in/enterprise/60a51c74589084cee99c1903/autoupdatelead",
        J_ROOT_LAMBDA_URL$0 =
          "https://3fsfla67nmbaykipymj7qlsahy0uymzo.lambda-url.ap-south-1.on.aws",
        J_SELECTOR_URL =
          "https://us-central1-waplugin-34798.cloudfunctions.net/stats/adds";
      class W {
        static getVersion() {
          try {
            return chrome.runtime.getManifest()?.version;
          } catch {
            return;
          }
        }
        static fetchJSON(t, a = {}) {
          return _(function* () {
            const r = yield fetch(t, a);
            if (!r.ok) throw new Error(`Request failed. Status: ${r.status}`);
            const n = yield r.text();
            if (!n || "" === n.trim()) return null;
            const i = r.headers.get("Content-Type");
            if (i && i.includes("application/json"))
              try {
                return JSON.parse(n);
              } catch {
                return (console.error("Failed to parse JSON:", n), n);
              }
            return n;
          })();
        }
        static httpGet(t, a = {}) {
          var r = this;
          return _(function* () {
            return r.fetchJSON(t, {
              method: "GET",
              headers: {
                ...a,
                "Cache-Control": "no-cache, no-store, must-revalidate",
              },
            });
          })();
        }
        static httpPost(t, a, r = {}) {
          var n = this;
          return _(function* () {
            return n.fetchJSON(t, {
              method: "POST",
              headers: { "Content-Type": "application/json", ...r },
              body: JSON.stringify(a),
            });
          })();
        }
        static httpPut(t, a, r = {}) {
          var n = this;
          return _(function* () {
            return n.fetchJSON(t, {
              method: "PUT",
              headers: { "Content-Type": "application/json", ...r },
              body: JSON.stringify(a),
            });
          })();
        }
        static logAdds(t) {
          var a = this;
          return _(function* () {
            return a.httpPost(J_SELECTOR_URL, { authid: t });
          })();
        }
        static getLicense(t) {
          var a = this;
          return _(function* () {
            return a.httpGet(`${J_ROOT_URL}/stats/getlicense?phonenumber=${t}`);
          })();
        }
        static getUserDetails(t) {
          var a = this;
          return _(function* () {
            return a.httpGet(
              `${J_ROOT_LAMBDA_URL$0}/${m.APIPathFragments.USER}`,
              { Authorization: `Bearer ${t}`, Version: a.getVersion() },
            );
          })();
        }
        static getAppConfig(t) {
          var a = this;
          return _(function* () {
            return a.httpGet(
              `${J_ROOT_URL}/stats/getAppConfig/v2?phonenumber=${t}`,
            );
          })();
        }
        static updateDetails(t, a) {
          var r = this;
          return _(function* () {
            const n = { phonenumber: t, ...a, version: r.getVersion() };
            return r.httpPost(`${J_ROOT_URL}/stats/updatedetails`, n);
          })();
        }
        static postBroadcastStatus(t, a, r) {
          var n = this;
          return _(function* () {
            return n.httpPost(
              `${J_ROOT_LAMBDA_URL$0}/${m.APIPathFragments.BROADCAST}/${a}/status`,
              { status: r },
              { Authorization: `Bearer ${t}`, Version: n.getVersion() },
            );
          })();
        }
        static uploadToS3(t, a, r) {
          return _(function* () {
            yield fetch(t, {
              method: "PUT",
              headers: { "Content-Type": r },
              body: a,
            });
          })();
        }
        static getReportPresignedURL(t, a) {
          var r = this;
          return _(function* () {
            return r.httpPut(
              `${J_ROOT_LAMBDA_URL$0}/${m.APIPathFragments.REPORTS}/${a}`,
              {},
              { Authorization: `Bearer ${t}`, Version: r.getVersion() },
            );
          })();
        }
        static requestBroadcastPreviews(t, a) {
          var r = this;
          return _(function* () {
            return r.httpPost(
              `${J_ROOT_LAMBDA_URL$0}/${m.APIPathFragments.BROADCAST}/${a}/preview`,
              {},
              { Authorization: `Bearer ${t}`, Version: r.getVersion() },
            );
          })();
        }
        static getBroadcast(t, a) {
          var r = this;
          return _(function* () {
            return r.httpGet(
              `${J_ROOT_LAMBDA_URL$0}/${m.APIPathFragments.BROADCAST}/${a}`,
              { Authorization: `Bearer ${t}`, Version: r.getVersion() },
            );
          })();
        }
        static postBroadcastStats(t, a, r, n) {
          var i = this;
          return _(function* () {
            return i.httpPost(
              `${J_ROOT_LAMBDA_URL$0}/${m.APIPathFragments.BROADCAST}/${a}/${m.APIPathFragments.STATS}`,
              { stats: r, status: n },
              { Authorization: `Bearer ${t}`, Version: i.getVersion() },
            );
          })();
        }
        static isContactBlocked(t, a) {
          var r = this;
          return _(function* () {
            return r.httpGet(
              `${J_ROOT_LAMBDA_URL$0}/${m.APIPathFragments.BLOCKLIST}/${a}`,
              { Authorization: `Bearer ${t}`, Version: r.getVersion() },
            );
          })();
        }
        static logAmplitude(t, a, r, n) {
          var i = this;
          return _(function* () {
            const o = `${J_ROOT_URL}/stats/log-amplitude`;
            yield i.httpPost(
              o,
              {
                eventType: t,
                userId: a,
                eventProperties: r,
                userProperties: n,
              },
              { Authorization: `Bearer ${a}`, Version: i.getVersion() },
            );
          })();
        }
        static createLead(t) {
          var a = this;
          return _(function* () {
            return a.httpPost(`${J_CRM_ROUTE}`, t, {
              Authorization:
                "Bearer bb0267ce-bb95-4d4a-9290-85850c697d011757062885590:2b49b9c1-4e9e-4d84-80ec-7971d6688472",
            });
          })();
        }
      }
      function jt(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      const { toString: Jr } = Object.prototype,
        { getPrototypeOf: ct } = Object,
        He =
          ((e = Object.create(null)),
          (t) => {
            const a = Jr.call(t);
            return e[a] || (e[a] = a.slice(8, -1).toLowerCase());
          }),
        Q = (e) => ((e = e.toLowerCase()), (t) => He(t) === e),
        We = (e) => (t) => typeof t === e,
        { isArray: me } = Array,
        Ie = We("undefined");
      var e;
      const ea = Q("ArrayBuffer"),
        Yr = We("string"),
        Y = We("function"),
        ta = We("number"),
        xe = (e) => null !== e && "object" == typeof e,
        Ke = (e) => {
          if ("object" !== He(e)) return !1;
          const t = ct(e);
          return !(
            (null !== t &&
              t !== Object.prototype &&
              null !== Object.getPrototypeOf(t)) ||
            Symbol.toStringTag in e ||
            Symbol.iterator in e
          );
        },
        Zr = Q("Date"),
        Xr = Q("File"),
        Qr = Q("Blob"),
        qr = Q("FileList"),
        en = Q("URLSearchParams");
      function Le(e, t, { allOwnKeys: a = !1 } = {}) {
        if (null === e || typeof e > "u") return;
        let r, n;
        if (("object" != typeof e && (e = [e]), me(e)))
          for (r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
        else {
          const i = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
            o = i.length;
          let E;
          for (r = 0; r < o; r++) ((E = i[r]), t.call(null, e[E], E, e));
        }
      }
      function aa(e, t) {
        t = t.toLowerCase();
        const a = Object.keys(e);
        let n,
          r = a.length;
        for (; r-- > 0;) if (((n = a[r]), t === n.toLowerCase())) return n;
        return null;
      }
      const ra =
          typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : typeof window < "u"
                ? window
                : global,
        na = (e) => !Ie(e) && e !== ra,
        un = (
          (e) => (t) =>
            e && t instanceof e
        )(typeof Uint8Array < "u" && ct(Uint8Array)),
        _n = Q("HTMLFormElement"),
        ia = (
          ({ hasOwnProperty: e }) =>
          (t, a) =>
            e.call(t, a)
        )(Object.prototype),
        mn = Q("RegExp"),
        oa = (e, t) => {
          const a = Object.getOwnPropertyDescriptors(e),
            r = {};
          (Le(a, (n, i) => {
            let o;
            !1 !== (o = t(n, i, e)) && (r[i] = o || n);
          }),
            Object.defineProperties(e, r));
        },
        lt = "abcdefghijklmnopqrstuvwxyz",
        sa = "0123456789",
        ca = { DIGIT: sa, ALPHA: lt, ALPHA_DIGIT: lt + lt.toUpperCase() + sa },
        On = Q("AsyncFunction"),
        T = {
          isArray: me,
          isArrayBuffer: ea,
          isBuffer: function Vr(e) {
            return (
              null !== e &&
              !Ie(e) &&
              null !== e.constructor &&
              !Ie(e.constructor) &&
              Y(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" == typeof FormData && e instanceof FormData) ||
                (Y(e.append) &&
                  ("formdata" === (t = He(e)) ||
                    ("object" === t &&
                      Y(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function kr(e) {
            let t;
            return (
              (t =
                typeof ArrayBuffer < "u" && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && ea(e.buffer)),
              t
            );
          },
          isString: Yr,
          isNumber: ta,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: xe,
          isPlainObject: Ke,
          isUndefined: Ie,
          isDate: Zr,
          isFile: Xr,
          isBlob: Qr,
          isRegExp: mn,
          isFunction: Y,
          isStream: (e) => xe(e) && Y(e.pipe),
          isURLSearchParams: en,
          isTypedArray: un,
          isFileList: qr,
          forEach: Le,
          merge: function ut() {
            const { caseless: e } = (na(this) && this) || {},
              t = {},
              a = (r, n) => {
                const i = (e && aa(t, n)) || n;
                t[i] =
                  Ke(t[i]) && Ke(r)
                    ? ut(t[i], r)
                    : Ke(r)
                      ? ut({}, r)
                      : me(r)
                        ? r.slice()
                        : r;
              };
            for (let r = 0, n = arguments.length; r < n; r++)
              arguments[r] && Le(arguments[r], a);
            return t;
          },
          extend: (e, t, a, { allOwnKeys: r } = {}) => (
            Le(
              t,
              (n, i) => {
                e[i] = a && Y(n) ? jt(n, a) : n;
              },
              { allOwnKeys: r },
            ),
            e
          ),
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, a, r) => {
            ((e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              a && Object.assign(e.prototype, a));
          },
          toFlatObject: (e, t, a, r) => {
            let n, i, o;
            const E = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (n = Object.getOwnPropertyNames(e), i = n.length; i-- > 0;)
                ((o = n[i]),
                  (!r || r(o, e, t)) && !E[o] && ((t[o] = e[o]), (E[o] = !0)));
              e = !1 !== a && ct(e);
            } while (e && (!a || a(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: He,
          kindOfTest: Q,
          endsWith: (e, t, a) => {
            ((e = String(e)), (void 0 === a || a > e.length) && (a = e.length));
            const r = e.indexOf(t, (a -= t.length));
            return -1 !== r && r === a;
          },
          toArray: (e) => {
            if (!e) return null;
            if (me(e)) return e;
            let t = e.length;
            if (!ta(t)) return null;
            const a = new Array(t);
            for (; t-- > 0;) a[t] = e[t];
            return a;
          },
          forEachEntry: (e, t) => {
            const r = (e && e[Symbol.iterator]).call(e);
            let n;
            for (; (n = r.next()) && !n.done;) {
              const i = n.value;
              t.call(e, i[0], i[1]);
            }
          },
          matchAll: (e, t) => {
            let a;
            const r = [];
            for (; null !== (a = e.exec(t));) r.push(a);
            return r;
          },
          isHTMLForm: _n,
          hasOwnProperty: ia,
          hasOwnProp: ia,
          reduceDescriptors: oa,
          freezeMethods: (e) => {
            oa(e, (t, a) => {
              if (Y(e) && -1 !== ["arguments", "caller", "callee"].indexOf(a))
                return !1;
              if (Y(e[a])) {
                if (((t.enumerable = !1), "writable" in t))
                  return void (t.writable = !1);
                t.set ||
                  (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + a + "'");
                  });
              }
            });
          },
          toObjectSet: (e, t) => {
            const a = {},
              r = (n) => {
                n.forEach((i) => {
                  a[i] = !0;
                });
              };
            return (me(e) ? r(e) : r(String(e).split(t)), a);
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (a, r, n) {
                return r.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
          findKey: aa,
          global: ra,
          isContextDefined: na,
          ALPHABET: ca,
          generateString: (e = 16, t = ca.ALPHA_DIGIT) => {
            let a = "";
            const { length: r } = t;
            for (; e--;) a += t[(Math.random() * r) | 0];
            return a;
          },
          isSpecCompliantForm: function pn(e) {
            return !!(
              e &&
              Y(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            const t = new Array(10),
              a = (r, n) => {
                if (xe(r)) {
                  if (t.indexOf(r) >= 0) return;
                  if (!("toJSON" in r)) {
                    t[n] = r;
                    const i = me(r) ? [] : {};
                    return (
                      Le(r, (o, E) => {
                        const h = a(o, n + 1);
                        !Ie(h) && (i[E] = h);
                      }),
                      (t[n] = void 0),
                      i
                    );
                  }
                }
                return r;
              };
            return a(e, 0);
          },
          isAsyncFn: On,
          isThenable: (e) => e && (xe(e) || Y(e)) && Y(e.then) && Y(e.catch),
        };
      function fe(e, t, a, r, n) {
        (Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          a && (this.config = a),
          r && (this.request = r),
          n && (this.response = n));
      }
      T.inherits(fe, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: T.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      const ua = fe.prototype,
        la = {};
      ([
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        la[e] = { value: e };
      }),
        Object.defineProperties(fe, la),
        Object.defineProperty(ua, "isAxiosError", { value: !0 }),
        (fe.from = (e, t, a, r, n, i) => {
          const o = Object.create(ua);
          return (
            T.toFlatObject(
              e,
              o,
              function (h) {
                return h !== Error.prototype;
              },
              (E) => "isAxiosError" !== E,
            ),
            fe.call(o, e.message, t, a, r, n),
            (o.cause = e),
            (o.name = e.name),
            i && Object.assign(o, i),
            o
          );
        }));
      const B = fe;
      function dt(e) {
        return T.isPlainObject(e) || T.isArray(e);
      }
      function _a(e) {
        return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function Aa(e, t, a) {
        return e
          ? e
              .concat(t)
              .map(function (n, i) {
                return ((n = _a(n)), !a && i ? "[" + n + "]" : n);
              })
              .join(a ? "." : "")
          : t;
      }
      const Nn = T.toFlatObject(T, {}, null, function (t) {
          return /^is[A-Z]/.test(t);
        }),
        Je = function Pn(e, t, a) {
          if (!T.isObject(e)) throw new TypeError("target must be an object");
          t = t || new FormData();
          const r = (a = T.toFlatObject(
              a,
              { metaTokens: !0, dots: !1, indexes: !1 },
              !1,
              function (P, b) {
                return !T.isUndefined(b[P]);
              },
            )).metaTokens,
            n = a.visitor || R,
            i = a.dots,
            o = a.indexes,
            h =
              (a.Blob || (typeof Blob < "u" && Blob)) &&
              T.isSpecCompliantForm(t);
          if (!T.isFunction(n))
            throw new TypeError("visitor must be a function");
          function O(N) {
            if (null === N) return "";
            if (T.isDate(N)) return N.toISOString();
            if (!h && T.isBlob(N))
              throw new B("Blob is not supported. Use a Buffer instead.");
            return T.isArrayBuffer(N) || T.isTypedArray(N)
              ? h && "function" == typeof Blob
                ? new Blob([N])
                : Buffer.from(N)
              : N;
          }
          function R(N, P, b) {
            let G = N;
            if (N && !b && "object" == typeof N)
              if (T.endsWith(P, "{}"))
                ((P = r ? P : P.slice(0, -2)), (N = JSON.stringify(N)));
              else if (
                (T.isArray(N) &&
                  (function Cn(e) {
                    return T.isArray(e) && !e.some(dt);
                  })(N)) ||
                ((T.isFileList(N) || T.endsWith(P, "[]")) && (G = T.toArray(N)))
              )
                return (
                  (P = _a(P)),
                  G.forEach(function (H, k) {
                    !T.isUndefined(H) &&
                      null !== H &&
                      t.append(
                        !0 === o ? Aa([P], k, i) : null === o ? P : P + "[]",
                        O(H),
                      );
                  }),
                  !1
                );
            return !!dt(N) || (t.append(Aa(b, P, i), O(N)), !1);
          }
          const p = [],
            g = Object.assign(Nn, {
              defaultVisitor: R,
              convertValue: O,
              isVisitable: dt,
            });
          if (!T.isObject(e)) throw new TypeError("data must be an object");
          return (
            (function U(N, P) {
              if (!T.isUndefined(N)) {
                if (-1 !== p.indexOf(N))
                  throw Error("Circular reference detected in " + P.join("."));
                (p.push(N),
                  T.forEach(N, function (G, V) {
                    !0 ===
                      (!(T.isUndefined(G) || null === G) &&
                        n.call(t, G, T.isString(V) ? V.trim() : V, P, g)) &&
                      U(G, P ? P.concat(V) : [V]);
                  }),
                  p.pop());
              }
            })(e),
            t
          );
        };
      function ma(e) {
        const t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
          return t[r];
        });
      }
      function fa(e, t) {
        ((this._pairs = []), e && Je(e, this, t));
      }
      const Ea = fa.prototype;
      ((Ea.append = function (t, a) {
        this._pairs.push([t, a]);
      }),
        (Ea.toString = function (t) {
          const a = t
            ? function (r) {
                return t.call(this, r, ma);
              }
            : ma;
          return this._pairs
            .map(function (n) {
              return a(n[0]) + "=" + a(n[1]);
            }, "")
            .join("&");
        }));
      const Ta = fa;
      function In(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function ha(e, t, a) {
        if (!t) return e;
        const r = (a && a.encode) || In,
          n = a && a.serialize;
        let i;
        if (
          ((i = n
            ? n(t, a)
            : T.isURLSearchParams(t)
              ? t.toString()
              : new Ta(t, a).toString(r)),
          i)
        ) {
          const o = e.indexOf("#");
          (-1 !== o && (e = e.slice(0, o)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + i));
        }
        return e;
      }
      const Sa = class Ln {
          constructor() {
            this.handlers = [];
          }
          use(t, a, r) {
            return (
              this.handlers.push({
                fulfilled: t,
                rejected: a,
                synchronous: !!r && r.synchronous,
                runWhen: r ? r.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(t) {
            this.handlers[t] && (this.handlers[t] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(t) {
            T.forEach(this.handlers, function (r) {
              null !== r && t(r);
            });
          }
        },
        pa = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        yn = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              typeof URLSearchParams < "u" ? URLSearchParams : Ta,
            FormData: typeof FormData < "u" ? FormData : null,
            Blob: typeof Blob < "u" ? Blob : null,
          },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        Ra = typeof window < "u" && typeof document < "u",
        bn = ((e) =>
          Ra && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
          typeof navigator < "u" && navigator.product,
        ),
        Mn =
          typeof WorkerGlobalScope < "u" &&
          self instanceof WorkerGlobalScope &&
          "function" == typeof self.importScripts,
        q = { ...y, ...yn },
        Oa = function Dn(e) {
          function t(a, r, n, i) {
            let o = a[i++];
            const E = Number.isFinite(+o),
              h = i >= a.length;
            return (
              (o = !o && T.isArray(n) ? n.length : o),
              h
                ? ((n[o] = T.hasOwnProp(n, o) ? [n[o], r] : r), !E)
                : ((!n[o] || !T.isObject(n[o])) && (n[o] = []),
                  t(a, r, n[o], i) &&
                    T.isArray(n[o]) &&
                    (n[o] = (function Bn(e) {
                      const t = {},
                        a = Object.keys(e);
                      let r;
                      const n = a.length;
                      let i;
                      for (r = 0; r < n; r++) ((i = a[r]), (t[i] = e[i]));
                      return t;
                    })(n[o])),
                  !E)
            );
          }
          if (T.isFormData(e) && T.isFunction(e.entries)) {
            const a = {};
            return (
              T.forEachEntry(e, (r, n) => {
                t(
                  (function Un(e) {
                    return T.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
                      "[]" === t[0] ? "" : t[1] || t[0],
                    );
                  })(r),
                  n,
                  a,
                  0,
                );
              }),
              a
            );
          }
          return null;
        },
        _t = {
          transitional: pa,
          adapter: ["xhr", "http"],
          transformRequest: [
            function (t, a) {
              const r = a.getContentType() || "",
                n = r.indexOf("application/json") > -1,
                i = T.isObject(t);
              if (
                (i && T.isHTMLForm(t) && (t = new FormData(t)), T.isFormData(t))
              )
                return n && n ? JSON.stringify(Oa(t)) : t;
              if (
                T.isArrayBuffer(t) ||
                T.isBuffer(t) ||
                T.isStream(t) ||
                T.isFile(t) ||
                T.isBlob(t)
              )
                return t;
              if (T.isArrayBufferView(t)) return t.buffer;
              if (T.isURLSearchParams(t))
                return (
                  a.setContentType(
                    "application/x-www-form-urlencoded;charset=utf-8",
                    !1,
                  ),
                  t.toString()
                );
              let E;
              if (i) {
                if (r.indexOf("application/x-www-form-urlencoded") > -1)
                  return (function gn(e, t) {
                    return Je(
                      e,
                      new q.classes.URLSearchParams(),
                      Object.assign(
                        {
                          visitor: function (a, r, n, i) {
                            return q.isNode && T.isBuffer(a)
                              ? (this.append(r, a.toString("base64")), !1)
                              : i.defaultVisitor.apply(this, arguments);
                          },
                        },
                        t,
                      ),
                    );
                  })(t, this.formSerializer).toString();
                if (
                  (E = T.isFileList(t)) ||
                  r.indexOf("multipart/form-data") > -1
                ) {
                  const h = this.env && this.env.FormData;
                  return Je(
                    E ? { "files[]": t } : t,
                    h && new h(),
                    this.formSerializer,
                  );
                }
              }
              return i || n
                ? (a.setContentType("application/json", !1),
                  (function Gn(e, t, a) {
                    if (T.isString(e))
                      try {
                        return ((t || JSON.parse)(e), T.trim(e));
                      } catch (r) {
                        if ("SyntaxError" !== r.name) throw r;
                      }
                    return (a || JSON.stringify)(e);
                  })(t))
                : t;
            },
          ],
          transformResponse: [
            function (t) {
              const a = this.transitional || _t.transitional,
                r = a && a.forcedJSONParsing,
                n = "json" === this.responseType;
              if (t && T.isString(t) && ((r && !this.responseType) || n)) {
                const o = !(a && a.silentJSONParsing) && n;
                try {
                  return JSON.parse(t);
                } catch (E) {
                  if (o)
                    throw "SyntaxError" === E.name
                      ? B.from(E, B.ERR_BAD_RESPONSE, this, null, this.response)
                      : E;
                }
              }
              return t;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: q.classes.FormData, Blob: q.classes.Blob },
          validateStatus: function (t) {
            return t >= 200 && t < 300;
          },
          headers: {
            common: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": void 0,
            },
          },
        };
      T.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        _t.headers[e] = {};
      });
      const At = _t,
        vn = T.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        Ca = Symbol("internals");
      function ye(e) {
        return e && String(e).trim().toLowerCase();
      }
      function Ve(e) {
        return !1 === e || null == e ? e : T.isArray(e) ? e.map(Ve) : String(e);
      }
      function mt(e, t, a, r, n) {
        if (T.isFunction(r)) return r.call(this, t, a);
        if ((n && (t = a), T.isString(t))) {
          if (T.isString(r)) return -1 !== t.indexOf(r);
          if (T.isRegExp(r)) return r.test(t);
        }
      }
      class ke {
        constructor(t) {
          t && this.set(t);
        }
        set(t, a, r) {
          const n = this;
          function i(E, h, O) {
            const R = ye(h);
            if (!R) throw new Error("header name must be a non-empty string");
            const p = T.findKey(n, R);
            (!p ||
              void 0 === n[p] ||
              !0 === O ||
              (void 0 === O && !1 !== n[p])) &&
              (n[p || h] = Ve(E));
          }
          const o = (E, h) => T.forEach(E, (O, R) => i(O, R, h));
          return (
            T.isPlainObject(t) || t instanceof this.constructor
              ? o(t, a)
              : T.isString(t) &&
                  (t = t.trim()) &&
                  !((e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))(t)
                ? o(
                    ((e) => {
                      const t = {};
                      let a, r, n;
                      return (
                        e &&
                          e.split("\n").forEach(function (o) {
                            ((n = o.indexOf(":")),
                              (a = o.substring(0, n).trim().toLowerCase()),
                              (r = o.substring(n + 1).trim()),
                              !(!a || (t[a] && vn[a])) &&
                                ("set-cookie" === a
                                  ? t[a]
                                    ? t[a].push(r)
                                    : (t[a] = [r])
                                  : (t[a] = t[a] ? t[a] + ", " + r : r)));
                          }),
                        t
                      );
                    })(t),
                    a,
                  )
                : null != t && i(a, t, r),
            this
          );
        }
        get(t, a) {
          if ((t = ye(t))) {
            const r = T.findKey(this, t);
            if (r) {
              const n = this[r];
              if (!a) return n;
              if (!0 === a)
                return (function Fn(e) {
                  const t = Object.create(null),
                    a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let r;
                  for (; (r = a.exec(e));) t[r[1]] = r[2];
                  return t;
                })(n);
              if (T.isFunction(a)) return a.call(this, n, r);
              if (T.isRegExp(a)) return a.exec(n);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(t, a) {
          if ((t = ye(t))) {
            const r = T.findKey(this, t);
            return !(!r || void 0 === this[r] || (a && !mt(0, this[r], r, a)));
          }
          return !1;
        }
        delete(t, a) {
          const r = this;
          let n = !1;
          function i(o) {
            if ((o = ye(o))) {
              const E = T.findKey(r, o);
              E && (!a || mt(0, r[E], E, a)) && (delete r[E], (n = !0));
            }
          }
          return (T.isArray(t) ? t.forEach(i) : i(t), n);
        }
        clear(t) {
          const a = Object.keys(this);
          let r = a.length,
            n = !1;
          for (; r--;) {
            const i = a[r];
            (!t || mt(0, this[i], i, t, !0)) && (delete this[i], (n = !0));
          }
          return n;
        }
        normalize(t) {
          const a = this,
            r = {};
          return (
            T.forEach(this, (n, i) => {
              const o = T.findKey(r, i);
              if (o) return ((a[o] = Ve(n)), void delete a[i]);
              const E = t
                ? (function Wn(e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(
                        /([a-z\d])(\w*)/g,
                        (t, a, r) => a.toUpperCase() + r,
                      );
                  })(i)
                : String(i).trim();
              (E !== i && delete a[i], (a[E] = Ve(n)), (r[E] = !0));
            }),
            this
          );
        }
        concat(...t) {
          return this.constructor.concat(this, ...t);
        }
        toJSON(t) {
          const a = Object.create(null);
          return (
            T.forEach(this, (r, n) => {
              null != r &&
                !1 !== r &&
                (a[n] = t && T.isArray(r) ? r.join(", ") : r);
            }),
            a
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([t, a]) => t + ": " + a)
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(t) {
          return t instanceof this ? t : new this(t);
        }
        static concat(t, ...a) {
          const r = new this(t);
          return (a.forEach((n) => r.set(n)), r);
        }
        static accessor(t) {
          const r = (this[Ca] = this[Ca] = { accessors: {} }).accessors,
            n = this.prototype;
          function i(o) {
            const E = ye(o);
            r[E] ||
              ((function xn(e, t) {
                const a = T.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r) => {
                  Object.defineProperty(e, r + a, {
                    value: function (n, i, o) {
                      return this[r].call(this, t, n, i, o);
                    },
                    configurable: !0,
                  });
                });
              })(n, o),
              (r[E] = !0));
          }
          return (T.isArray(t) ? t.forEach(i) : i(t), this);
        }
      }
      (ke.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        T.reduceDescriptors(ke.prototype, ({ value: e }, t) => {
          let a = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => e,
            set(r) {
              this[a] = r;
            },
          };
        }),
        T.freezeMethods(ke));
      const ae = ke;
      function ft(e, t) {
        const a = this || At,
          r = t || a,
          n = ae.from(r.headers);
        let i = r.data;
        return (
          T.forEach(e, function (E) {
            i = E.call(a, i, n.normalize(), t ? t.status : void 0);
          }),
          n.normalize(),
          i
        );
      }
      function Na(e) {
        return !(!e || !e.__CANCEL__);
      }
      function Pa(e, t, a) {
        (B.call(this, e ?? "canceled", B.ERR_CANCELED, t, a),
          (this.name = "CanceledError"));
      }
      T.inherits(Pa, B, { __CANCEL__: !0 });
      const Ye = Pa,
        Jn = q.hasStandardBrowserEnv
          ? {
              write(e, t, a, r, n, i) {
                const o = [e + "=" + encodeURIComponent(t)];
                (T.isNumber(a) &&
                  o.push("expires=" + new Date(a).toGMTString()),
                  T.isString(r) && o.push("path=" + r),
                  T.isString(n) && o.push("domain=" + n),
                  !0 === i && o.push("secure"),
                  (document.cookie = o.join("; ")));
              },
              read(e) {
                const t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function Ia(e, t) {
        return e &&
          !(function Vn(e) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
          })(t)
          ? (function kn(e, t) {
              return t
                ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      const Yn = q.hasStandardBrowserEnv
        ? (function () {
            const t = /(msie|trident)/i.test(navigator.userAgent),
              a = document.createElement("a");
            let r;
            function n(i) {
              let o = i;
              return (
                t && (a.setAttribute("href", o), (o = a.href)),
                a.setAttribute("href", o),
                {
                  href: a.href,
                  protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
                  host: a.host,
                  search: a.search ? a.search.replace(/^\?/, "") : "",
                  hash: a.hash ? a.hash.replace(/^#/, "") : "",
                  hostname: a.hostname,
                  port: a.port,
                  pathname:
                    "/" === a.pathname.charAt(0)
                      ? a.pathname
                      : "/" + a.pathname,
                }
              );
            }
            return (
              (r = n(window.location.href)),
              function (o) {
                const E = T.isString(o) ? n(o) : o;
                return E.protocol === r.protocol && E.host === r.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      function La(e, t) {
        let a = 0;
        const r = (function Zn(e, t) {
          e = e || 10;
          const a = new Array(e),
            r = new Array(e);
          let o,
            n = 0,
            i = 0;
          return (
            (t = void 0 !== t ? t : 1e3),
            function (h) {
              const O = Date.now(),
                R = r[i];
              (o || (o = O), (a[n] = h), (r[n] = O));
              let p = i,
                g = 0;
              for (; p !== n;) ((g += a[p++]), (p %= e));
              if (((n = (n + 1) % e), n === i && (i = (i + 1) % e), O - o < t))
                return;
              const U = R && O - R;
              return U ? Math.round((1e3 * g) / U) : void 0;
            }
          );
        })(50, 250);
        return (n) => {
          const i = n.loaded,
            o = n.lengthComputable ? n.total : void 0,
            E = i - a,
            h = r(E);
          a = i;
          const R = {
            loaded: i,
            total: o,
            progress: o ? i / o : void 0,
            bytes: E,
            rate: h || void 0,
            estimated: h && o && i <= o ? (o - i) / h : void 0,
            event: n,
          };
          ((R[t ? "download" : "upload"] = !0), e(R));
        };
      }
      const Et = {
        http: null,
        xhr:
          typeof XMLHttpRequest < "u" &&
          function (e) {
            return new Promise(function (a, r) {
              let n = e.data;
              const i = ae.from(e.headers).normalize();
              let h,
                R,
                { responseType: o, withXSRFToken: E } = e;
              function O() {
                (e.cancelToken && e.cancelToken.unsubscribe(h),
                  e.signal && e.signal.removeEventListener("abort", h));
              }
              if (T.isFormData(n))
                if (q.hasStandardBrowserEnv || q.hasStandardBrowserWebWorkerEnv)
                  i.setContentType(!1);
                else if (!1 !== (R = i.getContentType())) {
                  const [P, ...b] = R
                    ? R.split(";")
                        .map((G) => G.trim())
                        .filter(Boolean)
                    : [];
                  i.setContentType(
                    [P || "multipart/form-data", ...b].join("; "),
                  );
                }
              let p = new XMLHttpRequest();
              if (e.auth) {
                const P = e.auth.username || "",
                  b = e.auth.password
                    ? unescape(encodeURIComponent(e.auth.password))
                    : "";
                i.set("Authorization", "Basic " + btoa(P + ":" + b));
              }
              const g = Ia(e.baseURL, e.url);
              function U() {
                if (!p) return;
                const P = ae.from(
                  "getAllResponseHeaders" in p && p.getAllResponseHeaders(),
                );
                ((function Kn(e, t, a) {
                  const r = a.config.validateStatus;
                  a.status && r && !r(a.status)
                    ? t(
                        new B(
                          "Request failed with status code " + a.status,
                          [B.ERR_BAD_REQUEST, B.ERR_BAD_RESPONSE][
                            Math.floor(a.status / 100) - 4
                          ],
                          a.config,
                          a.request,
                          a,
                        ),
                      )
                    : e(a);
                })(
                  function (H) {
                    (a(H), O());
                  },
                  function (H) {
                    (r(H), O());
                  },
                  {
                    data:
                      o && "text" !== o && "json" !== o
                        ? p.response
                        : p.responseText,
                    status: p.status,
                    statusText: p.statusText,
                    headers: P,
                    config: e,
                    request: p,
                  },
                ),
                  (p = null));
              }
              if (
                (p.open(
                  e.method.toUpperCase(),
                  ha(g, e.params, e.paramsSerializer),
                  !0,
                ),
                (p.timeout = e.timeout),
                "onloadend" in p
                  ? (p.onloadend = U)
                  : (p.onreadystatechange = function () {
                      !p ||
                        4 !== p.readyState ||
                        (0 === p.status &&
                          (!p.responseURL ||
                            0 !== p.responseURL.indexOf("file:"))) ||
                        setTimeout(U);
                    }),
                (p.onabort = function () {
                  p &&
                    (r(new B("Request aborted", B.ECONNABORTED, e, p)),
                    (p = null));
                }),
                (p.onerror = function () {
                  (r(new B("Network Error", B.ERR_NETWORK, e, p)), (p = null));
                }),
                (p.ontimeout = function () {
                  let b = e.timeout
                    ? "timeout of " + e.timeout + "ms exceeded"
                    : "timeout exceeded";
                  (e.timeoutErrorMessage && (b = e.timeoutErrorMessage),
                    r(
                      new B(
                        b,
                        (e.transitional || pa).clarifyTimeoutError
                          ? B.ETIMEDOUT
                          : B.ECONNABORTED,
                        e,
                        p,
                      ),
                    ),
                    (p = null));
                }),
                q.hasStandardBrowserEnv &&
                  (E && T.isFunction(E) && (E = E(e)),
                  E || (!1 !== E && Yn(g))))
              ) {
                const P =
                  e.xsrfHeaderName &&
                  e.xsrfCookieName &&
                  Jn.read(e.xsrfCookieName);
                P && i.set(e.xsrfHeaderName, P);
              }
              (void 0 === n && i.setContentType(null),
                "setRequestHeader" in p &&
                  T.forEach(i.toJSON(), function (b, G) {
                    p.setRequestHeader(G, b);
                  }),
                T.isUndefined(e.withCredentials) ||
                  (p.withCredentials = !!e.withCredentials),
                o && "json" !== o && (p.responseType = e.responseType),
                "function" == typeof e.onDownloadProgress &&
                  p.addEventListener("progress", La(e.onDownloadProgress, !0)),
                "function" == typeof e.onUploadProgress &&
                  p.upload &&
                  p.upload.addEventListener("progress", La(e.onUploadProgress)),
                (e.cancelToken || e.signal) &&
                  ((h = (P) => {
                    p &&
                      (r(!P || P.type ? new Ye(null, e, p) : P),
                      p.abort(),
                      (p = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(h),
                  e.signal &&
                    (e.signal.aborted
                      ? h()
                      : e.signal.addEventListener("abort", h))));
              const N = (function zn(e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(g);
              N && -1 === q.protocols.indexOf(N)
                ? r(
                    new B(
                      "Unsupported protocol " + N + ":",
                      B.ERR_BAD_REQUEST,
                      e,
                    ),
                  )
                : p.send(n || null);
            });
          },
      };
      T.forEach(Et, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      const ya = (e) => `- ${e}`,
        Qn = (e) => T.isFunction(e) || null === e || !1 === e,
        ba_getAdapter = (e) => {
          e = T.isArray(e) ? e : [e];
          const { length: t } = e;
          let a, r;
          const n = {};
          for (let i = 0; i < t; i++) {
            let o;
            if (
              ((a = e[i]),
              (r = a),
              !Qn(a) && ((r = Et[(o = String(a)).toLowerCase()]), void 0 === r))
            )
              throw new B(`Unknown adapter '${o}'`);
            if (r) break;
            n[o || "#" + i] = r;
          }
          if (!r) {
            const i = Object.entries(n).map(
              ([E, h]) =>
                `adapter ${E} ` +
                (!1 === h
                  ? "is not supported by the environment"
                  : "is not available in the build"),
            );
            let o = t
              ? i.length > 1
                ? "since :\n" + i.map(ya).join("\n")
                : " " + ya(i[0])
              : "as no adapter specified";
            throw new B(
              "There is no suitable adapter to dispatch the request " + o,
              "ERR_NOT_SUPPORT",
            );
          }
          return r;
        };
      function Tt(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new Ye(null, e);
      }
      function Ma(e) {
        return (
          Tt(e),
          (e.headers = ae.from(e.headers)),
          (e.data = ft.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
          ba_getAdapter(e.adapter || At.adapter)(e).then(
            function (r) {
              return (
                Tt(e),
                (r.data = ft.call(e, e.transformResponse, r)),
                (r.headers = ae.from(r.headers)),
                r
              );
            },
            function (r) {
              return (
                Na(r) ||
                  (Tt(e),
                  r &&
                    r.response &&
                    ((r.response.data = ft.call(
                      e,
                      e.transformResponse,
                      r.response,
                    )),
                    (r.response.headers = ae.from(r.response.headers)))),
                Promise.reject(r)
              );
            },
          )
        );
      }
      const ga = (e) => (e instanceof ae ? e.toJSON() : e);
      function Ee(e, t) {
        t = t || {};
        const a = {};
        function r(O, R, p) {
          return T.isPlainObject(O) && T.isPlainObject(R)
            ? T.merge.call({ caseless: p }, O, R)
            : T.isPlainObject(R)
              ? T.merge({}, R)
              : T.isArray(R)
                ? R.slice()
                : R;
        }
        function n(O, R, p) {
          return T.isUndefined(R)
            ? T.isUndefined(O)
              ? void 0
              : r(void 0, O, p)
            : r(O, R, p);
        }
        function i(O, R) {
          if (!T.isUndefined(R)) return r(void 0, R);
        }
        function o(O, R) {
          return T.isUndefined(R)
            ? T.isUndefined(O)
              ? void 0
              : r(void 0, O)
            : r(void 0, R);
        }
        function E(O, R, p) {
          return p in t ? r(O, R) : p in e ? r(void 0, O) : void 0;
        }
        const h = {
          url: i,
          method: i,
          data: i,
          baseURL: o,
          transformRequest: o,
          transformResponse: o,
          paramsSerializer: o,
          timeout: o,
          timeoutMessage: o,
          withCredentials: o,
          withXSRFToken: o,
          adapter: o,
          responseType: o,
          xsrfCookieName: o,
          xsrfHeaderName: o,
          onUploadProgress: o,
          onDownloadProgress: o,
          decompress: o,
          maxContentLength: o,
          maxBodyLength: o,
          beforeRedirect: o,
          transport: o,
          httpAgent: o,
          httpsAgent: o,
          cancelToken: o,
          socketPath: o,
          responseEncoding: o,
          validateStatus: E,
          headers: (O, R) => n(ga(O), ga(R), !0),
        };
        return (
          T.forEach(Object.keys(Object.assign({}, e, t)), function (R) {
            const p = h[R] || n,
              g = p(e[R], t[R], R);
            (T.isUndefined(g) && p !== E) || (a[R] = g);
          }),
          a
        );
      }
      const ht = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          ht[e] = function (r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        },
      );
      const Ba = {};
      ht.transitional = function (t, a, r) {
        function n(i, o) {
          return (
            "[Axios v1.6.3] Transitional option '" +
            i +
            "'" +
            o +
            (r ? ". " + r : "")
          );
        }
        return (i, o, E) => {
          if (!1 === t)
            throw new B(
              n(o, " has been removed" + (a ? " in " + a : "")),
              B.ERR_DEPRECATED,
            );
          return (
            a &&
              !Ba[o] &&
              ((Ba[o] = !0),
              console.warn(
                n(
                  o,
                  " has been deprecated since v" +
                    a +
                    " and will be removed in the near future",
                ),
              )),
            !t || t(i, o, E)
          );
        };
      };
      const St = {
          assertOptions: function qn(e, t, a) {
            if ("object" != typeof e)
              throw new B("options must be an object", B.ERR_BAD_OPTION_VALUE);
            const r = Object.keys(e);
            let n = r.length;
            for (; n-- > 0;) {
              const i = r[n],
                o = t[i];
              if (o) {
                const E = e[i],
                  h = void 0 === E || o(E, i, e);
                if (!0 !== h)
                  throw new B(
                    "option " + i + " must be " + h,
                    B.ERR_BAD_OPTION_VALUE,
                  );
              } else if (!0 !== a)
                throw new B("Unknown option " + i, B.ERR_BAD_OPTION);
            }
          },
          validators: ht,
        },
        oe = St.validators;
      class ze {
        constructor(t) {
          ((this.defaults = t),
            (this.interceptors = { request: new Sa(), response: new Sa() }));
        }
        request(t, a) {
          ("string" == typeof t ? ((a = a || {}).url = t) : (a = t || {}),
            (a = Ee(this.defaults, a)));
          const { transitional: r, paramsSerializer: n, headers: i } = a;
          (void 0 !== r &&
            St.assertOptions(
              r,
              {
                silentJSONParsing: oe.transitional(oe.boolean),
                forcedJSONParsing: oe.transitional(oe.boolean),
                clarifyTimeoutError: oe.transitional(oe.boolean),
              },
              !1,
            ),
            null != n &&
              (T.isFunction(n)
                ? (a.paramsSerializer = { serialize: n })
                : St.assertOptions(
                    n,
                    { encode: oe.function, serialize: oe.function },
                    !0,
                  )),
            (a.method = (
              a.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase()));
          let o = i && T.merge(i.common, i[a.method]);
          (i &&
            T.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (N) => {
                delete i[N];
              },
            ),
            (a.headers = ae.concat(o, i)));
          const E = [];
          let h = !0;
          this.interceptors.request.forEach(function (P) {
            ("function" == typeof P.runWhen && !1 === P.runWhen(a)) ||
              ((h = h && P.synchronous), E.unshift(P.fulfilled, P.rejected));
          });
          const O = [];
          this.interceptors.response.forEach(function (P) {
            O.push(P.fulfilled, P.rejected);
          });
          let R,
            g,
            p = 0;
          if (!h) {
            const N = [Ma.bind(this), void 0];
            for (
              N.unshift.apply(N, E),
                N.push.apply(N, O),
                g = N.length,
                R = Promise.resolve(a);
              p < g;
            )
              R = R.then(N[p++], N[p++]);
            return R;
          }
          g = E.length;
          let U = a;
          for (p = 0; p < g;) {
            const N = E[p++],
              P = E[p++];
            try {
              U = N(U);
            } catch (b) {
              P.call(this, b);
              break;
            }
          }
          try {
            R = Ma.call(this, U);
          } catch (N) {
            return Promise.reject(N);
          }
          for (p = 0, g = O.length; p < g;) R = R.then(O[p++], O[p++]);
          return R;
        }
        getUri(t) {
          return ha(
            Ia((t = Ee(this.defaults, t)).baseURL, t.url),
            t.params,
            t.paramsSerializer,
          );
        }
      }
      (T.forEach(["delete", "get", "head", "options"], function (t) {
        ze.prototype[t] = function (a, r) {
          return this.request(
            Ee(r || {}, { method: t, url: a, data: (r || {}).data }),
          );
        };
      }),
        T.forEach(["post", "put", "patch"], function (t) {
          function a(r) {
            return function (i, o, E) {
              return this.request(
                Ee(E || {}, {
                  method: t,
                  headers: r ? { "Content-Type": "multipart/form-data" } : {},
                  url: i,
                  data: o,
                }),
              );
            };
          }
          ((ze.prototype[t] = a()), (ze.prototype[t + "Form"] = a(!0)));
        }));
      const Ze = ze;
      class pt {
        constructor(t) {
          if ("function" != typeof t)
            throw new TypeError("executor must be a function.");
          let a;
          this.promise = new Promise(function (i) {
            a = i;
          });
          const r = this;
          (this.promise.then((n) => {
            if (!r._listeners) return;
            let i = r._listeners.length;
            for (; i-- > 0;) r._listeners[i](n);
            r._listeners = null;
          }),
            (this.promise.then = (n) => {
              let i;
              const o = new Promise((E) => {
                (r.subscribe(E), (i = E));
              }).then(n);
              return (
                (o.cancel = function () {
                  r.unsubscribe(i);
                }),
                o
              );
            }),
            t(function (i, o, E) {
              r.reason || ((r.reason = new Ye(i, o, E)), a(r.reason));
            }));
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(t) {
          this.reason
            ? t(this.reason)
            : this._listeners
              ? this._listeners.push(t)
              : (this._listeners = [t]);
        }
        unsubscribe(t) {
          if (!this._listeners) return;
          const a = this._listeners.indexOf(t);
          -1 !== a && this._listeners.splice(a, 1);
        }
        static source() {
          let t;
          return {
            token: new pt(function (n) {
              t = n;
            }),
            cancel: t,
          };
        }
      }
      const $n = pt,
        Rt = {
          Continue: 100,
          SwitchingProtocols: 101,
          Processing: 102,
          EarlyHints: 103,
          Ok: 200,
          Created: 201,
          Accepted: 202,
          NonAuthoritativeInformation: 203,
          NoContent: 204,
          ResetContent: 205,
          PartialContent: 206,
          MultiStatus: 207,
          AlreadyReported: 208,
          ImUsed: 226,
          MultipleChoices: 300,
          MovedPermanently: 301,
          Found: 302,
          SeeOther: 303,
          NotModified: 304,
          UseProxy: 305,
          Unused: 306,
          TemporaryRedirect: 307,
          PermanentRedirect: 308,
          BadRequest: 400,
          Unauthorized: 401,
          PaymentRequired: 402,
          Forbidden: 403,
          NotFound: 404,
          MethodNotAllowed: 405,
          NotAcceptable: 406,
          ProxyAuthenticationRequired: 407,
          RequestTimeout: 408,
          Conflict: 409,
          Gone: 410,
          LengthRequired: 411,
          PreconditionFailed: 412,
          PayloadTooLarge: 413,
          UriTooLong: 414,
          UnsupportedMediaType: 415,
          RangeNotSatisfiable: 416,
          ExpectationFailed: 417,
          ImATeapot: 418,
          MisdirectedRequest: 421,
          UnprocessableEntity: 422,
          Locked: 423,
          FailedDependency: 424,
          TooEarly: 425,
          UpgradeRequired: 426,
          PreconditionRequired: 428,
          TooManyRequests: 429,
          RequestHeaderFieldsTooLarge: 431,
          UnavailableForLegalReasons: 451,
          InternalServerError: 500,
          NotImplemented: 501,
          BadGateway: 502,
          ServiceUnavailable: 503,
          GatewayTimeout: 504,
          HttpVersionNotSupported: 505,
          VariantAlsoNegotiates: 506,
          InsufficientStorage: 507,
          LoopDetected: 508,
          NotExtended: 510,
          NetworkAuthenticationRequired: 511,
        };
      Object.entries(Rt).forEach(([e, t]) => {
        Rt[t] = e;
      });
      const ti = Rt,
        F = (function Da(e) {
          const t = new Ze(e),
            a = jt(Ze.prototype.request, t);
          return (
            T.extend(a, Ze.prototype, t, { allOwnKeys: !0 }),
            T.extend(a, t, null, { allOwnKeys: !0 }),
            (a.create = function (n) {
              return Da(Ee(e, n));
            }),
            a
          );
        })(At);
      ((F.Axios = Ze),
        (F.CanceledError = Ye),
        (F.CancelToken = $n),
        (F.isCancel = Na),
        (F.VERSION = "1.6.3"),
        (F.toFormData = Je),
        (F.AxiosError = B),
        (F.Cancel = F.CanceledError),
        (F.all = function (t) {
          return Promise.all(t);
        }),
        (F.spread = function jn(e) {
          return function (a) {
            return e.apply(null, a);
          };
        }),
        (F.isAxiosError = function ei(e) {
          return T.isObject(e) && !0 === e.isAxiosError;
        }),
        (F.mergeConfig = Ee),
        (F.AxiosHeaders = ae),
        (F.formToJSON = (e) => Oa(T.isHTMLForm(e) ? new FormData(e) : e)),
        (F.getAdapter = ba_getAdapter),
        (F.HttpStatusCode = ti),
        (F.default = F));
      const Ga = F;
      class Ot {
        static encodePath(t) {
          const a = t ? t.indexOf("://") : -1,
            r = a < 0 ? -1 : t.indexOf("/", a + 3);
          if (r < 0) return t;
          const n = t
            .slice(r + 1)
            .split("/")
            .map((i) => encodeURIComponent(Ot.safeDecode(i)))
            .join("/");
          return `${t.slice(0, r)}/${n}`;
        }
        static safeDecode(t) {
          try {
            return decodeURIComponent(t);
          } catch {
            return t;
          }
        }
      }
      class Xe {
        constructor(t, a, r, n) {
          ((this.name = t),
            (this.size = a),
            (this.type = r),
            (this.base64 = n));
        }
        getOriginalFileFromBase64() {
          const [t, a] = this.base64.split(","),
            r = atob(a),
            n = new Array(r.length);
          for (let o = 0; o < r.length; o++) n[o] = r.charCodeAt(o);
          const i = new Uint8Array(n);
          return new Blob([i], { type: this.type });
        }
        static convertURLFileToExtAttachment(t) {
          return _(function* () {
            const a = yield Xe.getWithEncodedFallback(t),
              r = t.split("/").pop(),
              n = a.headers["content-type"],
              i = a.data.byteLength,
              o = `data:${n};base64,${btoa(String.fromCharCode(...new Uint8Array(a.data)))}`;
            return new Xe(r, i, n, o);
          })();
        }
        static getWithEncodedFallback(t) {
          return _(function* () {
            try {
              return yield Ga.get(t, { responseType: "arraybuffer" });
            } catch (a) {
              const r = Ot.encodePath(t);
              if (r === t) throw a;
              return yield Ga.get(r, { responseType: "arraybuffer" });
            }
          })();
        }
        static toBase64(t) {
          return new Promise((a, r) => {
            const n = new FileReader();
            (n.readAsDataURL(t),
              (n.onload = () => a(n.result)),
              (n.onerror = (i) => r(i)));
          });
        }
      }
      let va,
        Te = (() => {
          class t {
            static save(r) {
              return _(function* () {
                try {
                  yield chrome.storage.local.set({
                    [t.KEY]: { ...r, savedAt: Date.now() },
                  });
                } catch (n) {
                  console.error("Failed to persist broadcast snapshot", n);
                }
              })();
            }
            static load() {
              return _(function* () {
                try {
                  const n = (yield chrome.storage.local.get(t.KEY))?.[t.KEY];
                  return n && n.report
                    ? !0 === n.report.isFinished
                      ? (yield t.clear(), null)
                      : n
                    : null;
                } catch (r) {
                  return (
                    console.error("Failed to read broadcast snapshot", r),
                    null
                  );
                }
              })();
            }
            static clear() {
              return _(function* () {
                try {
                  yield chrome.storage.local.remove(t.KEY);
                } catch (r) {
                  console.error("Failed to clear broadcast snapshot", r);
                }
              })();
            }
            static restoreAttachments(r) {
              return _(function* () {
                const n = [];
                for (const i of r || [])
                  try {
                    const o = yield Xe.convertURLFileToExtAttachment(i);
                    o && n.push(o);
                  } catch (o) {
                    console.error("Failed to restore attachment from S3", i, o);
                  }
                return n;
              })();
            }
          }
          return ((t.KEY = "wasender:active-broadcast"), t);
        })();
      function wa() {
        return Ct.apply(this, arguments);
      }
      function Ct() {
        return (Ct = _(function* () {
          yield chrome.storage.local.set({
            "last-heartbeat": new Date().getTime(),
          });
        })).apply(this, arguments);
      }
      function Nt() {
        return (Nt = _(function* () {
          wa().then(() => {
            (console.log("Heartbeat started"), (va = setInterval(wa, 2e4)));
          });
        })).apply(this, arguments);
      }
      !(function ai() {
        Nt.apply(this, arguments);
      })();
      const se = (function ri() {
        let Ha,
          a = "",
          r = [],
          n = [],
          i = !1,
          o = 0,
          E = 0,
          h = 0,
          O = 0,
          R = !1,
          p = null,
          g = null,
          U = !1,
          N = !0,
          P = 0,
          b = -1,
          G = [],
          V = [],
          H = [],
          k = (function Ci() {
            let L = null,
              D = 0;
            function x() {
              ((function Ni() {
                c.sendMsgToExtension({
                  from: A.BACKGROUND_JS,
                  subject: s.MSG_NEXT_MESSAGE_IN_TIME,
                  data: za(),
                });
              })(),
                (function Pi() {
                  c.sendMessageToTab(
                    {
                      from: A.BACKGROUND_JS,
                      subject: s.MSG_NEXT_MESSAGE_IN_TIME,
                      data: {
                        nextMessageTime: D,
                        operation: g,
                        isPaused: U,
                        isFinished: N,
                      },
                    },
                    le,
                  );
                })());
            }
            function za() {
              return {
                broadcastId: z,
                broadcastName: qe,
                fileName: a,
                nextMessageTime: D,
                operation: g,
                isPaused: U,
                isFinished: N,
                startTime: O,
                stopReason: Qe,
                report: hi(),
              };
            }
            function Za() {
              L && clearInterval(L);
            }
            return {
              cancel: Za,
              set: function re(Li) {
                ((D = Li),
                  Za(),
                  D - Date.now() > 0 && (L = setInterval(x, 1e3)));
              },
              sendUpdates: x,
              getTimeLeftForNextShoot: function Ii() {
                return D - Date.now();
              },
              getUpdateData: za,
            };
          })(),
          be = null,
          Me = null,
          ge = !1,
          X = "",
          pe = !1,
          $ = !1,
          de = null,
          Qe = null,
          z = "",
          qe = "",
          It = 0,
          Ue = null,
          Lt = !1,
          $e = !1,
          yt = !1;
        const ni = 9e5;
        let Re = {};
        function bt() {
          return (
            (bt = _(function* (S, I) {
              (yield (function _i(S) {
                return vt.apply(this, arguments);
              })(S?.id),
                ($e = !1),
                xa(),
                console.log("taskData", S),
                (g = I),
                (Re = S.metaData),
                (a = S.fileName ? S.fileName : ""),
                (X = S.authid ? S.authid : ""),
                (z = S?.id),
                (qe = S?.broadcastName),
                (r = S.numbers ? S.numbers : []),
                (n = S.messages ? S.messages : r.map((D) => "")),
                (i = !!S.attachment && S.attachment),
                (o = S.messageGap ? S.messageGap : 0),
                (R = !!S.randomizeDelay && S.randomizeDelay),
                (E = S.batchGap ? S.batchGap : 0),
                (h = S.batchSize ? S.batchSize : r.length),
                (pe = !!S.isCaption && S.isCaption),
                ($ = he.isPro),
                (de = S.contact),
                (H = []),
                r.forEach((D) => H.push(m.Operation.STATUS_PENDING)));
              let L = S.startTime ? S.startTime : Date.now();
              ((O = L), Wa(L));
            })),
            bt.apply(this, arguments)
          );
        }
        function Wa(S) {
          (b < 0 ? (b = 0) : (b += 1),
            h > 0 &&
              ((G = r.slice(b * h, (b + 1) * h)),
              (V = n.slice(b * h, (b + 1) * h))),
            S ? (S -= Date.now()) < 0 && (S = 0) : (S = 0),
            G && G.length > 0
              ? (p = setTimeout(function () {
                  ((p = null), Ka());
                }, S))
              : ((N = !0), Be(), k.cancel(), Wt()));
        }
        function xa() {
          (gt(),
            k.cancel(),
            (function oi() {
              ((r = []),
                (n = []),
                (H = []),
                (i = !1),
                (pe = !1),
                (o = 0),
                (E = 0),
                (h = 0),
                (U = !1),
                (N = !1),
                ($ = !1),
                (g = null),
                (ge = !1),
                (de = null));
            })(),
            (function si() {
              ((b = -1), (G = []), (V = []));
            })(),
            Mt(),
            Dt(),
            (Lt = !1),
            (yt = !1),
            (It = 0),
            Wt());
        }
        function Mt() {
          (be && (clearTimeout(be), (be = null)), Me && (Me(), (Me = null)));
        }
        function gt() {
          (p && (clearTimeout(p), (P = 0)), (p = null));
        }
        function ci() {
          let S = !0;
          Qe = null;
          const I = H.filter((L) => L === m.Operation.STATUS_SENT).length;
          return (
            I > 2 && (i || de) && !$ && ((S = !1), $ || (Qe = it.PRO)),
            Re?.totalBroadCasts >= 1 &&
              I >= Re?.freeMessageLimit &&
              !$ &&
              ((S = !1), (Qe = it.PRO)),
            S
          );
        }
        function Ka() {
          return Ut.apply(this, arguments);
        }
        function Ut() {
          return (Ut = _(function* (S = 0, I = 0) {
            P = S;
            for (let L = S; L < G.length; ++L) {
              if ((yield ui(I), (I = 0), le === Fa || U)) {
                De();
                break;
              }
              if (G.length > L) {
                try {
                  if (ci())
                    try {
                      const D = yield li(G[L], V[L], i, pe);
                      H[b * h + L] = D;
                    } catch (D) {
                      (console.log("Error in sending message", D),
                        (H[b * h + L] = m.Operation.STATUS_FAILED),
                        De());
                    }
                  else De();
                } catch {
                  De();
                  break;
                }
                (Be(), (P = L + 1));
              }
            }
            if (!U) {
              const L = (function Ei() {
                return 6e4 * E;
              })();
              (k.set(Date.now() + L), Wa(Date.now() + L));
            }
          })).apply(this, arguments);
        }
        function ui(S) {
          return new Promise((I, L) => {
            let D;
            ((D =
              0 !== S
                ? S
                : (function Ti() {
                    let S = 0;
                    return (
                      (S = R && Math.random() < 0.5 ? (1e3 * o) / 2 : 1e3 * o),
                      S
                    );
                  })()),
              k.set(Date.now() + D),
              (be = setTimeout(() => {
                ((be = null), (Me = null), I());
              }, D)),
              (Me = I));
          });
        }
        function li(S, I, L, D) {
          k.cancel();
          try {
            return g === m.Operation.OPERATION_SEND_MESSAGE
              ? c.sendMessageToTab(
                  {
                    from: A.BACKGROUND_JS,
                    subject: s.MSG_SEND_MESSAGE,
                    data: {
                      id: z,
                      message: I,
                      number: S,
                      isAttachment: L,
                      isCaption: D,
                      skipLinkPreview: ge,
                      contact: de,
                    },
                  },
                  le,
                )
              : g === m.Operation.OPERATION_FILTER
                ? c.sendMessageToTab(
                    {
                      from: A.BACKGROUND_JS,
                      subject: s.MSG_VALIDATE_NUMBER,
                      data: { id: z, number: S },
                    },
                    le,
                  )
                : null;
          } catch (re) {
            return re;
          }
        }
        function Ja(S) {
          return Bt.apply(this, arguments);
        }
        function Bt() {
          return (Bt = _(function* (S) {
            if (S)
              try {
                const I = S.getBroadcastStats(),
                  L = yt
                    ? "Stopped"
                    : N
                      ? "Completed"
                      : U
                        ? "Paused"
                        : "Running",
                  [, D] = yield Promise.all([
                    W.postBroadcastStats(X, z, I, L),
                    W.getReportPresignedURL(X, z),
                  ]);
                D?.uploadUrl &&
                  (yield W.uploadToS3(
                    D.uploadUrl,
                    JSON.stringify(S),
                    "application/json",
                  ));
              } catch (I) {
                console.error("Error uploading report from background", I);
              }
          })).apply(this, arguments);
        }
        function Dt() {
          Ue && (clearTimeout(Ue), (Ue = null));
        }
        function Va(S) {
          return Gt.apply(this, arguments);
        }
        function Gt() {
          return (Gt = _(function* (S) {
            if (S && X)
              try {
                yield W.requestBroadcastPreviews(X, S);
              } catch (I) {
                console.error("Failed to request attachment previews", S, I);
              }
          })).apply(this, arguments);
        }
        function vt() {
          return (vt = _(function* (S) {
            try {
              const I = yield Te.load();
              (I &&
                I.broadcastId &&
                I.broadcastId !== S &&
                (yield Va(I.broadcastId)),
                I && (yield Te.clear()));
            } catch (I) {
              console.error("Failed to release superseded broadcast", I);
            }
          })).apply(this, arguments);
        }
        function wt() {
          return (wt = _(function* () {
            try {
              const I = (
                (yield W.getBroadcast(X, z))?.messageAttachmentDetails || []
              )
                .map((D) => D?.url)
                .filter(Boolean);
              if (!I.length) return !1;
              const L = yield Te.restoreAttachments(I);
              return L.length === I.length && ((Se = L), !0);
            } catch (S) {
              return (
                console.error("Failed to restore attachments for resume", S),
                !1
              );
            }
          })).apply(this, arguments);
        }
        function Be() {
          const S = Ft(),
            I = Ae.fromJSON(S);
          if (N)
            try {
              const L = Se,
                D = ka(O),
                re = ka(Date.now());
              (function Kr() {
                let e = null;
                try {
                  e = chrome.runtime.getManifest();
                } catch (i) {
                  console.log("error data", i);
                }
                function a() {
                  return (a = _(function* (i, o, E = {}) {
                    const h = { ...E, version: String(e?.version) };
                    yield Wr.logAmplitude(i, o, h, {});
                  })).apply(this, arguments);
                }
                function n() {
                  return (n = _(function* (i) {
                    return xr;
                  })).apply(this, arguments);
                }
                return {
                  logAmplitude: function t(i, o) {
                    return a.apply(this, arguments);
                  },
                  logAdds: function r(i) {
                    return n.apply(this, arguments);
                  },
                };
              })().logAmplitude("message_job_report", X, {
                messageText: I.report?.messages?.[0],
                ...Re,
                feature_time_gap: R,
                feature_batching: E,
                batchSize: h,
                sendAsCaption: pe,
                usingAttachment: i,
                attachmentCounts: i && L ? L.length : 0,
                attachmentSizes: i && L ? L.map((x) => x.size).join(", ") : 0,
                failed: I.report.status.filter(
                  (x) => x === m.Operation.STATUS_FAILED,
                ).length,
                sent: I.report.status.filter(
                  (x) => x === m.Operation.STATUS_SENT,
                ).length,
                pending: I.report.status.filter(
                  (x) => x === m.Operation.STATUS_PENDING,
                ).length,
                skipped: I.report.status.filter(
                  (x) => x === m.Operation.STATUS_SKIPPED,
                ).length,
                blocked: I.report.status.filter(
                  (x) => x === m.Operation.STATUS_BLOCKED,
                ).length,
                isPro: $,
                messaging_started_at: D,
                numbers_count: I.report.numbers.length,
                messaging_ended_at: re,
              });
            } catch (L) {
              console.error("Error in sending report to popup", L);
            }
          (N
            ? ($e || (($e = !0), Va(z)), Te.clear())
            : Te.save(
                (function Ai() {
                  return {
                    broadcastId: z,
                    attachmentUrls: [],
                    report: {
                      numbers: r,
                      messages: n,
                      status: H,
                      nextMessageIndex: Ya(),
                      operation: g,
                      isPaused: U,
                      isFinished: N,
                      isAttachment: i,
                      isPro: $,
                      contact: de,
                      startTime: O,
                      broadcastName: qe,
                      fileName: a,
                      metaData: Re,
                    },
                    settings: {
                      messageGap: o,
                      batchGap: E,
                      batchSize: h,
                      randomizeDelay: R,
                      skipLinkPreview: ge,
                      isCaption: pe,
                      isPro: $,
                      authid: X,
                    },
                  };
                })(),
              ),
            N || U
              ? (Ja(Ae.fromJSON(S)), Dt(), (It = 0))
              : (function di() {
                  (Dt(),
                    (Ue = setTimeout(() => {
                      if (((Ue = null), !N && !Lt)) {
                        Lt = !0;
                        const S = Ft();
                        Ja(Ae.fromJSON(S));
                      }
                    }, ni)));
                })(),
            It++,
            c.sendMsgToExtension({
              from: A.BACKGROUND_JS,
              subject: s.MSG_MESSAGE_RESULTS,
              data: S,
            }));
        }
        function ka(S) {
          return new Date(S).toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          });
        }
        function Ft() {
          return k.getUpdateData();
        }
        function Ya() {
          return P === h ? b * h : b * h + P;
        }
        function hi() {
          const S = {
            isFinished: N,
            operation: g,
            isPaused: U,
            numbers: r,
            messages: n,
            status: H,
            nextMessageIndex: Ya(),
            isPro: $,
            isAttachment: i,
            contact: de,
            startTime: O,
          };
          return (N && (S.endTime = Date.now()), S);
        }
        function De() {
          "OPERATION_NONE" !== g &&
            H.filter((S) => "STATUS_PENDING" === S).length > 0 &&
            (U ||
              ((U = !0),
              (Ha = k.getTimeLeftForNextShoot()),
              Mt(),
              gt(),
              Be(),
              k.cancel(),
              k.sendUpdates()));
        }
        function Ht() {
          return (
            (Ht = _(function* () {
              if (U) {
                if (
                  i &&
                  (!Se || !Se.length) &&
                  !(yield (function fi() {
                    return wt.apply(this, arguments);
                  })())
                )
                  return (
                    console.error(
                      "Not resuming: attachments could not be restored",
                    ),
                    void Be()
                  );
                ((U = !1),
                  W.postBroadcastStatus(X, z, "Running").catch((S) =>
                    console.error("Failed to report resume status", S),
                  ),
                  Wt(),
                  Ka(P, Ha));
              }
            })),
            Ht.apply(this, arguments)
          );
        }
        function Wt() {
          (c.sendMessageToTab(
            {
              from: A.BACKGROUND_JS,
              subject: s.MSG_CLEAR_PROGRESS,
              data: null,
            },
            le,
          ),
            c.sendMsgToExtension({
              from: A.BACKGROUND_JS,
              subject: s.MSG_CLEAR_PROGRESS,
              data: null,
            }));
        }
        return {
          init: function ii(S, I) {
            return bt.apply(this, arguments);
          },
          getUpdateData: Ft,
          pause: De,
          resume: function pi() {
            return Ht.apply(this, arguments);
          },
          restoreFromSnapshot: function mi(S) {
            const I = S.report || {},
              L = S.settings || {};
            ((g = I.operation),
              (z = S.broadcastId),
              (qe = I.broadcastName || ""),
              (a = I.fileName || ""),
              (X = L.authid || ""),
              (Re = I.metaData || {}),
              (r = I.numbers || []),
              (n = I.messages || []),
              (H = I.status || []),
              (i = !!I.isAttachment),
              ($ = !!I.isPro),
              (de = I.contact),
              (O = I.startTime || Date.now()),
              (o = L.messageGap || 0),
              (E = L.batchGap || 0),
              (h = L.batchSize || r.length),
              (R = !!L.randomizeDelay),
              (ge = !!L.skipLinkPreview),
              (pe = !!L.isCaption),
              (U = !0),
              (N = !1),
              ($e = !1));
            const D = H.findIndex((x) => x === m.Operation.STATUS_PENDING),
              re = D >= 0 ? D : I.nextMessageIndex || 0;
            ((b = h > 0 ? Math.floor(re / h) : 0),
              (P = h > 0 ? re % h : re),
              (G = r.slice(b * h, (b + 1) * h)),
              (V = n.slice(b * h, (b + 1) * h)));
          },
          abort: function Ri() {
            (N ||
              W.postBroadcastStatus(X, z, "Stopped").catch((S) =>
                console.error("Failed to report cancel status", S),
              ),
              xa());
          },
          stop: function Si() {
            ((N = !0),
              (U = !0),
              (yt = !0),
              Mt(),
              gt(),
              Be(),
              k.cancel(),
              k.sendUpdates());
          },
          skipLinkPreview: function Oi() {
            ge = !0;
          },
        };
      })();
      (_(function* () {
        try {
          const e = yield Te.load();
          e &&
            (se.restoreFromSnapshot(e),
            console.log(
              "Restored unfinished broadcast (paused):",
              e.broadcastId,
            ));
        } catch (e) {
          console.error("Failed to restore broadcast on startup", e);
        }
      })(),
        chrome.runtime.onInstalled.addListener(
          (function () {
            var e = _(function* (t) {
              chrome.tabs.create({ url: "https://web.whatsapp.com" });
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        chrome.runtime.onSuspend.addListener(
          _(function* () {
            chrome.tabs.create({ url: he.uninstallUrl });
          }),
        ),
        chrome.action.onClicked.addListener((e) => {
          (console.log("[DEBUG] chrome.action.onClicked - tab:", e),
            c
              .sendMsgToActiveTab({
                from: A.BACKGROUND_JS,
                subject: s.OPEN_FRAME,
                data: {},
              })
              .then(() => {
                console.log("Popup opened");
              })
              .catch((t) => {
                console.error("Error opening popup:", t);
              }));
        }));
      const he = {};
      let Se = [];
      chrome.runtime.onMessage.addListener(function (e, t, a) {
        let r = null;
        if (e && e.subject)
          switch (e.subject) {
            case s.MSG_SETUP_BATCH:
              ((le = e.data.tabId),
                se.init(
                  e.data.bulkGrpMessages,
                  m.Operation.OPERATION_SEND_MESSAGE,
                ),
                a(!0));
              break;
            case s.MSG_FILTER_NUMBERS:
              ((le = e.data.tabId),
                se.init(e.data.bulkGrpMessages, m.Operation.OPERATION_FILTER),
                a(!0));
              break;
            case s.MSG_GET_MESSAGE_RESULTS:
              ((r = se.getUpdateData()), a(r));
              break;
            case s.MSG_PAUSE:
              (se.pause(), a(!0));
              break;
            case s.MSG_STOP:
              (se.stop(), a(!0));
              break;
            case s.MSG_CANCEL_OPERATION:
              (se.abort(), a(!0));
              break;
            case s.MSG_RESUME:
              (se.resume(), a(!0));
              break;
            case s.MSG_CACHE_ATTACHMENT_BACKGROUND:
              ((Se = e.data), a(!0));
              break;
            case s.MSG_GET_ATTACHMENT_BACKGROUND:
              ((r = Se), a(r));
              break;
            case s.CACHE_DATA: {
              const { key: n, data: i } = e.data;
              ((he[n] = i),
                he.uninstallurl &&
                  chrome.runtime.setUninstallURL(he.uninstallurl),
                a(!0));
              break;
            }
            case s.GET_CACHE_DATA: {
              const { key: n } = e.data;
              ((r = he[n]), a(r));
              break;
            }
            case s.API_LOG_ADDS:
              return (
                W.logAdds(e.data.authid)
                  .then((n) => a(n))
                  .catch((n) => {
                    (console.error("Error in API_LOG_ADDS:", n), a(null));
                  }),
                !0
              );
            case s.API_GET_LICENSE:
              return (
                W.getLicense(e.data.phoneNumber)
                  .then((n) => a(n))
                  .catch((n) => {
                    (console.error("Error in API_GET_LICENSE:", n), a(null));
                  }),
                !0
              );
            case s.API_GET_USER_DETAILS:
              return (
                W.getUserDetails(e.data.phoneNumber)
                  .then((n) => a(n))
                  .catch((n) => {
                    (console.error(
                      "Error in API_GET_USER_DETAILS:",
                      e.data.phoneNumber,
                      n,
                    ),
                      a(null));
                  }),
                !0
              );
            case s.API_GET_APP_CONFIG:
              return (
                W.getAppConfig(e.data.phoneNumber)
                  .then((n) => a(n))
                  .catch((n) => {
                    (console.error("Error in API_GET_APP_CONFIG:", n), a(null));
                  }),
                !0
              );
            case s.API_UPDATE_DETAILS:
              return (
                W.updateDetails(e.data.phoneNumber, e.data.details)
                  .then((n) => a(n))
                  .catch((n) => {
                    (console.error("Error in API_UPDATE_DETAILS:", n), a(null));
                  }),
                !0
              );
            case s.API_UPLOAD_TO_S3:
              return (
                W.uploadToS3(
                  e.data.uploadUrl,
                  e.data.content,
                  e.data.contentType,
                )
                  .then(() => a(!0))
                  .catch((n) => {
                    (console.error("Error in API_UPLOAD_TO_S3:", n), a(null));
                  }),
                !0
              );
            case s.API_GET_REPORT_PRESIGNED_URL:
              return (
                W.getReportPresignedURL(e.data.phoneNumber, e.data.broadcastId)
                  .then((n) => a(n))
                  .catch((n) => {
                    (console.error("Error in API_GET_REPORT_PRESIGNED_URL:", n),
                      a(null));
                  }),
                !0
              );
            case s.API_POST_BROADCAST_STATS:
              return (
                W.postBroadcastStats(
                  e.data.phoneNumber,
                  e.data.broadcastId,
                  e.data.stats,
                )
                  .then(() => a(!0))
                  .catch((n) => {
                    (console.error("Error in API_POST_BROADCAST_STATS:", n),
                      a(null));
                  }),
                !0
              );
            case s.API_IS_CONTACT_BLOCKED:
              return (
                W.isContactBlocked(
                  e.data.userPhoneNumber,
                  e.data.numberToBeChecked,
                )
                  .then((n) => a(n))
                  .catch((n) => {
                    (console.error("Error in API_IS_CONTACT_BLOCKED:", n),
                      a(null));
                  }),
                !0
              );
            case s.API_LOG_AMPLITUDE:
              return (
                W.logAmplitude(
                  e.data.eventType,
                  e.data.userId,
                  e.data.eventProperties,
                  e.data.userProperties,
                )
                  .then(() => a(!0))
                  .catch((n) => {
                    (console.error("Error in API_LOG_AMPLITUDE:", n), a(null));
                  }),
                !0
              );
            case s.API_CREATE_LEAD:
              return (
                W.createLead(e.data.properties)
                  .then((n) => a(n))
                  .catch((n) => {
                    (console.error("Error in API_CREATE_LEAD:", n), a(null));
                  }),
                !0
              );
          }
        return !0;
      });
      const Fa = -1;
      let le = Fa;
    })());
})();
