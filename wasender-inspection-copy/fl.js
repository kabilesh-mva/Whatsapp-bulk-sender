(() => {
  "use strict";
  var ee = {
      4631: function (W, r, h) {
        var m =
            (this && this.__createBinding) ||
            (Object.create
              ? function (d, w, u, c) {
                  void 0 === c && (c = u);
                  var l = Object.getOwnPropertyDescriptor(w, u);
                  ((!l ||
                    ("get" in l
                      ? !w.__esModule
                      : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return w[u];
                      },
                    }),
                    Object.defineProperty(d, c, l));
                }
              : function (d, w, u, c) {
                  (void 0 === c && (c = u), (d[c] = w[u]));
                }),
          s =
            (this && this.__exportStar) ||
            function (d, w) {
              for (var u in d)
                "default" !== u &&
                  !Object.prototype.hasOwnProperty.call(w, u) &&
                  m(w, d, u);
            };
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          s(h(7763), r),
          s(h(721), r));
      },
      9061: (W, r) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.APIPathFragments = void 0));
        var h = (function (m) {
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
        })(h || (r.APIPathFragments = h = {}));
      },
      2527: (W, r) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.Blockcontact = void 0));
        var h = (function () {
          function m(s, d, w, u) {
            ((this.phoneNumber = s),
              (this.blockNumberId = d),
              (this.blockKeyword = w),
              (this.version = u));
          }
          return (
            (m.fromJSON = function (s) {
              var d = null;
              return (
                s &&
                  (((d = new m("", "", "", "")).phoneNumber = s.phoneNumber
                    ? s.phoneNumber
                    : ""),
                  (d.blockNumberId = s.blockNumberId ? s.blockNumberId : ""),
                  (d.blockKeyword = s.blockKeyword ? s.blockKeyword : ""),
                  (d.version = s.version ? s.version : "")),
                d
              );
            }),
            m
          );
        })();
        r.Blockcontact = h;
      },
      1546: function (W, r, h) {
        var m =
            (this && this.__createBinding) ||
            (Object.create
              ? function (d, w, u, c) {
                  void 0 === c && (c = u);
                  var l = Object.getOwnPropertyDescriptor(w, u);
                  ((!l ||
                    ("get" in l
                      ? !w.__esModule
                      : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return w[u];
                      },
                    }),
                    Object.defineProperty(d, c, l));
                }
              : function (d, w, u, c) {
                  (void 0 === c && (c = u), (d[c] = w[u]));
                }),
          s =
            (this && this.__exportStar) ||
            function (d, w) {
              for (var u in d)
                "default" !== u &&
                  !Object.prototype.hasOwnProperty.call(w, u) &&
                  m(w, d, u);
            };
        (Object.defineProperty(r, "__esModule", { value: !0 }), s(h(2527), r));
      },
      6363: (W, r) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.BroadCastReplyData = void 0));
        var h = (function () {
          function m(s, d, w, u, c, l, p, C, P, R) {
            (void 0 === R && (R = Date.now()),
              (this.phonenumber = s),
              (this.version = d),
              (this.broadcastId = w),
              (this.replyMsgId = u),
              (this.replyText = c || ""),
              (this.braodCastMsdId = l),
              (this.chatId = p),
              (this.fromPhonenumber = C),
              (this.tab = P),
              (this.timestamp = R));
          }
          return (
            (m.fromJSON = function (s) {
              var d = null;
              return (
                s &&
                  (d = new m(
                    s.phonenumber,
                    s.version,
                    s.broadcastId,
                    s.replyMsgId,
                    s.replyText,
                    s.braodCastMsdId,
                    s.chatId,
                    s.fromPhonenumber,
                    s.tab,
                    s.timestamp,
                  )),
                d
              );
            }),
            m
          );
        })();
        r.BroadCastReplyData = h;
      },
      6065: (W, r, h) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.BroadcastReplyStats = void 0));
        var m = h(1766),
          s = (function () {
            function d() {}
            return (
              (d.fromJSON = function (w) {
                var u,
                  c,
                  l,
                  p,
                  C,
                  P = new d();
                return (
                  w &&
                    (P.tabs =
                      (((u = {})[m.BroadcastReplyTab.AUTO_REPLY] =
                        (null === (c = w.tabs) || void 0 === c
                          ? void 0
                          : c[m.BroadcastReplyTab.AUTO_REPLY]) || 0),
                      (u[m.BroadcastReplyTab.UNSUBSCRIBE] =
                        (null === (l = w.tabs) || void 0 === l
                          ? void 0
                          : l[m.BroadcastReplyTab.UNSUBSCRIBE]) || 0),
                      (u[m.BroadcastReplyTab.INTERESTED] =
                        (null === (p = w.tabs) || void 0 === p
                          ? void 0
                          : p[m.BroadcastReplyTab.INTERESTED]) || 0),
                      (u[m.BroadcastReplyTab.NOT_INTERESTED] =
                        (null === (C = w.tabs) || void 0 === C
                          ? void 0
                          : C[m.BroadcastReplyTab.NOT_INTERESTED]) || 0),
                      u)),
                  P
                );
              }),
              Object.defineProperty(d.prototype, "auto", {
                get: function () {
                  var w;
                  return (
                    (null === (w = this.tabs) || void 0 === w
                      ? void 0
                      : w[m.BroadcastReplyTab.AUTO_REPLY]) || 0
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "unsubscribe", {
                get: function () {
                  var w;
                  return (
                    (null === (w = this.tabs) || void 0 === w
                      ? void 0
                      : w[m.BroadcastReplyTab.UNSUBSCRIBE]) || 0
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "interested", {
                get: function () {
                  var w;
                  return (
                    (null === (w = this.tabs) || void 0 === w
                      ? void 0
                      : w[m.BroadcastReplyTab.INTERESTED]) || 0
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "notInterested", {
                get: function () {
                  var w;
                  return (
                    (null === (w = this.tabs) || void 0 === w
                      ? void 0
                      : w[m.BroadcastReplyTab.NOT_INTERESTED]) || 0
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "total", {
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
              d
            );
          })();
        r.BroadcastReplyStats = s;
      },
      1766: (W, r) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.BroadcastReplyTab = void 0));
        var h = (function (m) {
          return (
            (m.AUTO_REPLY = "auto-reply"),
            (m.UNSUBSCRIBE = "unsubscribe"),
            (m.INTERESTED = "interested"),
            (m.NOT_INTERESTED = "not-interested"),
            (m.TOTAL = "total"),
            m
          );
        })(h || (r.BroadcastReplyTab = h = {}));
      },
      1451: (W, r) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.BroadcastStats = void 0));
        var h = (function () {
          function m(s, d, w, u, c) {
            ((this.totalMessages = s),
              (this.sent = d),
              (this.pending = w),
              (this.failed = u),
              (this.blocked = c));
          }
          return (
            (m.fromJSON = function (s) {
              var d = new m(0, 0, 0, 0, 0);
              return (
                s &&
                  ((d.totalMessages = s.totalMessages ? s.totalMessages : 0),
                  (d.sent = s.sent ? s.sent : 0),
                  (d.pending = s.pending ? s.pending : 0),
                  (d.failed = s.failed ? s.failed : 0),
                  (d.blocked = s.blocked ? s.blocked : 0)),
                d
              );
            }),
            m
          );
        })();
        r.BroadcastStats = h;
      },
      8503: (W, r, h) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.Broadcast = void 0));
        var m = h(5941),
          s = h(6065),
          d = h(1451),
          w = h(8131),
          u = (function () {
            function c(l, p, C, P, R, J, M, B, F) {
              ((this.id = l),
                (this.operation = p),
                (this.phoneNumber = C),
                (this.unsubscriptionText = P),
                (this.messageAttachmentDetails = J),
                (this.addUnsubscriptionText = R),
                (this.sendWithCaption = M),
                (this.text = B),
                (this.timestamp = F));
            }
            return (
              (c.fromJSON = function (l) {
                var p = null;
                if (l) {
                  if (
                    (((p = new c("", null, "", "", !1, [], !1, "", 0)).id = l.id
                      ? l.id
                      : ""),
                    (p.name = l.name ? l.name : ""),
                    (p.operation = l.operation
                      ? l.operation
                      : w.Operation.OPERATION_NONE),
                    (p.phoneNumber = l.phoneNumber ? l.phoneNumber : ""),
                    (p.unsubscriptionText = l.unsubscriptionText
                      ? l.unsubscriptionText
                      : ""),
                    (p.broadcastStats = d.BroadcastStats.fromJSON(
                      l.broadcastStats,
                    )),
                    (p.broadcastReplyStats = l.broadcastReplyStats
                      ? s.BroadcastReplyStats.fromJSON(l.broadcastReplyStats)
                      : new s.BroadcastReplyStats()),
                    l.messageAttachmentDetails)
                  )
                    for (
                      var C = 0;
                      C < l.messageAttachmentDetails.length;
                      C++
                    ) {
                      var P = m.MessageAttachmentDetails.fromJSON(
                        l.messageAttachmentDetails[C],
                      );
                      P && p.messageAttachmentDetails.push(P);
                    }
                  ((p.addUnsubscriptionText =
                    !!l.addUnsubscriptionText && l.addUnsubscriptionText),
                    (p.sendWithCaption =
                      !!l.sendWithCaption && l.sendWithCaption),
                    (p.text = l.text ? l.text : ""),
                    (p.timestamp = l.timestamp ? l.timestamp : 0));
                }
                return p;
              }),
              (c.prototype.unsubscriptionTextToBeSent = function () {
                if (this.addUnsubscriptionText && this.unsubscriptionText) {
                  var l = this.getUnsbuscriptionKeyWord();
                  if (l)
                    return "".concat(
                      this.unsubscriptionText.replace("{".concat(l, "}"), l),
                    );
                }
                return "";
              }),
              (c.prototype.msgToBeSent = function () {
                var l = this.text,
                  p = this.unsubscriptionTextToBeSent();
                return (p && (l = "".concat(l, "\n\n_").concat(p, "_")), l);
              }),
              (c.prototype.getUnsbuscriptionKeyWord = function () {
                var l = this.unsubscriptionText.match(/\{([^{}]+)\}/);
                return l && l.length > 1 ? l[1] : "";
              }),
              c
            );
          })();
        r.Broadcast = u;
      },
      4215: (W, r) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.BulkMessage = r.WAContactNumbers = void 0));
        var h = (function () {
          function s(d) {
            this.contact = d;
          }
          return (
            (s.fromJSON = function (d) {
              var w = null;
              return (
                d && ((w = new s("")).contact = d.contact ? d.contact : ""),
                w
              );
            }),
            s
          );
        })();
        r.WAContactNumbers = h;
        var m = (function () {
          function s(d, w, u, c, l, p, C, P, R, J, M, B, F, z) {
            ((this.id = d),
              (this.authid = w),
              (this.fileName = u),
              (this.numbers = c),
              (this.messages = l),
              (this.batchSize = p),
              (this.batchGap = C),
              (this.isPro = P),
              (this.messageGap = R),
              (this.randomizeDelay = J),
              (this.attachment = M),
              (this.isCaption = B),
              (this.startTime = F),
              (this.metaData = z));
          }
          return (
            (s.fromJSON = function (d) {
              var w = null;
              return (
                d &&
                  (((w = new s(
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
                  )).id = d.id ? d.id : ""),
                  (w.authid = d.authid ? d.authid : ""),
                  (w.fileName = d.fileName ? d.fileName : ""),
                  (w.numbers = d.numbers
                    ? d.numbers.map(function (u) {
                        return h.fromJSON(u);
                      })
                    : []),
                  (w.messages = d.messages ? d.messages : []),
                  (w.batchSize = d.batchSize ? d.batchSize : 0),
                  (w.batchGap = d.batchGap ? d.batchGap : 0),
                  (w.isPro = !!d.isPro && d.isPro),
                  (w.messageGap = d.messageGap ? d.messageGap : 0),
                  (w.randomizeDelay = !!d.randomizeDelay && d.randomizeDelay),
                  (w.attachment = !!d.attachment && d.attachment),
                  (w.isCaption = !!d.isCaption && d.isCaption),
                  (w.startTime = !!d.startTime && d.startTime),
                  (w.metaData = !!d.metaData && d.metaData)),
                w
              );
            }),
            s
          );
        })();
        r.BulkMessage = m;
      },
      8131: (W, r) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.Operation = void 0));
        var h = (function (m) {
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
        })(h || (r.Operation = h = {}));
      },
      4283: function (W, r, h) {
        var w,
          m =
            (this && this.__extends) ||
            ((w = function (u, c) {
              return (w =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (l, p) {
                    l.__proto__ = p;
                  }) ||
                function (l, p) {
                  for (var C in p)
                    Object.prototype.hasOwnProperty.call(p, C) && (l[C] = p[C]);
                })(u, c);
            }),
            function (u, c) {
              if ("function" != typeof c && null !== c)
                throw new TypeError(
                  "Class extends value " +
                    String(c) +
                    " is not a constructor or null",
                );
              function l() {
                this.constructor = u;
              }
              (w(u, c),
                (u.prototype =
                  null === c
                    ? Object.create(c)
                    : ((l.prototype = c.prototype), new l())));
            });
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.Contact = void 0));
        var s = h(5384),
          d = (function (w) {
            function u(c, l) {
              var p = w.call(this, s.ModelType.CONTACT) || this;
              return ((p.name = c), (p.phoneNumber = l), p);
            }
            return (
              m(u, w),
              (u.fromJSON = function (c) {
                var l = null;
                return (
                  c &&
                    c.phoneNumber &&
                    ((l = new u("", c.phoneNumber)).name = c.name
                      ? c.name
                      : ""),
                  l
                );
              }),
              u
            );
          })(s.Model);
        r.Contact = d;
      },
      6900: (W, r) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.CountryCodeAndNumber = r.CountryDialCodes = void 0),
          (r.CountryDialCodes = [
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
        var h = (function () {
          function m(s, d) {
            ((this.countryInfo = s), (this.phoneNumber = d));
          }
          return (
            (m.extractCountryCodeAndNumber = function (s) {
              for (
                var d = new m(null, s),
                  u = 0,
                  c = r.CountryDialCodes.sort(function (P, R) {
                    return R.dial_code.length - P.dial_code.length;
                  });
                u < c.length;
                u++
              ) {
                var l = c[u],
                  p = l.dial_code.replace(/\s+/g, "");
                s.startsWith(p) && (d = new m(l, s.slice(p.length)));
              }
              return d;
            }),
            m
          );
        })();
        r.CountryCodeAndNumber = h;
      },
      7763: function (W, r, h) {
        var m =
            (this && this.__createBinding) ||
            (Object.create
              ? function (d, w, u, c) {
                  void 0 === c && (c = u);
                  var l = Object.getOwnPropertyDescriptor(w, u);
                  ((!l ||
                    ("get" in l
                      ? !w.__esModule
                      : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return w[u];
                      },
                    }),
                    Object.defineProperty(d, c, l));
                }
              : function (d, w, u, c) {
                  (void 0 === c && (c = u), (d[c] = w[u]));
                }),
          s =
            (this && this.__exportStar) ||
            function (d, w) {
              for (var u in d)
                "default" !== u &&
                  !Object.prototype.hasOwnProperty.call(w, u) &&
                  m(w, d, u);
            };
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          s(h(9061), r),
          s(h(6900), r),
          s(h(1730), r),
          s(h(7313), r),
          s(h(5384), r),
          s(h(232), r),
          s(h(1766), r),
          s(h(6363), r),
          s(h(8503), r),
          s(h(4215), r),
          s(h(4283), r),
          s(h(6900), r),
          s(h(232), r),
          s(h(5941), r),
          s(h(1546), r),
          s(h(8131), r),
          s(h(1451), r),
          s(h(6065), r));
      },
      7313: function (W, r, h) {
        var w,
          m =
            (this && this.__extends) ||
            ((w = function (u, c) {
              return (w =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (l, p) {
                    l.__proto__ = p;
                  }) ||
                function (l, p) {
                  for (var C in p)
                    Object.prototype.hasOwnProperty.call(p, C) && (l[C] = p[C]);
                })(u, c);
            }),
            function (u, c) {
              if ("function" != typeof c && null !== c)
                throw new TypeError(
                  "Class extends value " +
                    String(c) +
                    " is not a constructor or null",
                );
              function l() {
                this.constructor = u;
              }
              (w(u, c),
                (u.prototype =
                  null === c
                    ? Object.create(c)
                    : ((l.prototype = c.prototype), new l())));
            });
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.Message = void 0));
        var s = h(5384),
          d = (function (w) {
            function u(c, l, p, C, P) {
              var R = w.call(this, s.ModelType.MESSAGE) || this;
              return (
                (R.id = c),
                (R.msg = l),
                (R.chatPhonenumber = p),
                (R.fromPhonenumber = C),
                (R.time = P),
                R
              );
            }
            return (
              m(u, w),
              (u.fromJSON = function (c) {
                var l = null;
                return (
                  c &&
                    (((l = new u("", null, null, null, 0)).id = c.id
                      ? c.id
                      : null),
                    (l.msg = c.msg ? c.msg : null),
                    (l.chatPhonenumber = c.chatPhonenumber
                      ? c.chatPhonenumber
                      : null),
                    (l.fromPhonenumber = c.fromPhonenumber
                      ? c.fromPhonenumber
                      : null),
                    (l.time = c.time ? c.time : 0)),
                  l
                );
              }),
              u
            );
          })(s.Model);
        r.Message = d;
      },
      5384: (W, r) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.Model = r.ModelType = void 0));
        var h = (function (s) {
          return (
            (s.CONTACT = "CONTACT"),
            (s.EXT_AUTH = "EXT_AUTH"),
            (s.MESSAGE = "MESSAGE"),
            s
          );
        })(h || (r.ModelType = h = {}));
        r.Model = function s(d) {
          this.modelType = d;
        };
      },
      232: (W, r, h) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.ModelUtils = void 0));
        var m = h(4283),
          s = h(7313),
          d = h(5384),
          w = (function () {
            function u() {}
            return (
              (u.fromJSON = function (c) {
                var l = null;
                return c
                  ? Array.isArray(c)
                    ? u.handleDataArray(c, l)
                    : "object" == typeof c
                      ? u.handleDataObject(c, l)
                      : c
                  : c;
              }),
              (u.handleDataObject = function (c, l) {
                if (c)
                  if (c.modelType)
                    switch (c.modelType) {
                      case d.ModelType.CONTACT:
                        l = m.Contact.fromJSON(c);
                        break;
                      case d.ModelType.MESSAGE:
                        l = s.Message.fromJSON(c);
                    }
                  else l = c;
                return l;
              }),
              (u.handleDataArray = function (c, l) {
                return (
                  c &&
                    c.length &&
                    (l = c.map(function (p) {
                      return u.fromJSON(p);
                    })),
                  l
                );
              }),
              u
            );
          })();
        r.ModelUtils = w;
      },
      5941: function (W, r, h) {
        var m =
            (this && this.__createBinding) ||
            (Object.create
              ? function (d, w, u, c) {
                  void 0 === c && (c = u);
                  var l = Object.getOwnPropertyDescriptor(w, u);
                  ((!l ||
                    ("get" in l
                      ? !w.__esModule
                      : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return w[u];
                      },
                    }),
                    Object.defineProperty(d, c, l));
                }
              : function (d, w, u, c) {
                  (void 0 === c && (c = u), (d[c] = w[u]));
                }),
          s =
            (this && this.__exportStar) ||
            function (d, w) {
              for (var u in d)
                "default" !== u &&
                  !Object.prototype.hasOwnProperty.call(w, u) &&
                  m(w, d, u);
            };
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          s(h(8349), r),
          s(h(2044), r));
      },
      8349: (W, r) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.MessageAttachmentDetails = void 0));
        var h = (function () {
          function m(s, d, w, u) {
            ((this.type = u), (this.name = s), (this.url = d), (this.size = w));
          }
          return (
            (m.fromJSON = function (s) {
              var d = null;
              return (
                s &&
                  (((d = new m("", "", 0, "")).name = s.name ? s.name : ""),
                  (d.url = s.url ? s.url : ""),
                  (d.size = s.size ? s.size : 0),
                  (d.type = s.type ? s.type : "")),
                d
              );
            }),
            m
          );
        })();
        r.MessageAttachmentDetails = h;
      },
      2044: (W, r, h) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.MessageTemplate = r.MessageTemplateType = void 0));
        var m = h(721),
          s = h(8349),
          d = (function (u) {
            return ((u.TEXT = "text"), (u.IMAGE = "image"), (u.DOC = "doc"), u);
          })(d || (r.MessageTemplateType = d = {})),
          w = (function () {
            function u(c, l, p, C, P, R, J, M, B, F) {
              ((this.id = c),
                (this.phoneNumber = l),
                (this.name = p),
                (this.template = C),
                (this.attachmentDetails = P),
                (this.addUnsubscriptionText = R),
                (this.unsubscriptionText = J),
                (this.sendWithCaption = M),
                (this.createdAt = B),
                (this.updatedAt = F));
            }
            return (
              (u.fromJSON = function (c) {
                var l = null;
                if (c) {
                  if (
                    (((l = new u("", "", "", "", [], !1, "", !1, 0, 0)).id =
                      c.id ? c.id : ""),
                    (l.phoneNumber = c.phoneNumber ? c.phoneNumber : ""),
                    (l.name = c.name ? c.name : ""),
                    (l.template = c.template ? c.template : ""),
                    c.attachmentDetails)
                  )
                    for (var p = 0; p < c.attachmentDetails.length; p++) {
                      var C = s.MessageAttachmentDetails.fromJSON(
                        c.attachmentDetails[p],
                      );
                      C && l.attachmentDetails.push(C);
                    }
                  ((l.addUnsubscriptionText =
                    !!c.addUnsubscriptionText && c.addUnsubscriptionText),
                    (l.unsubscriptionText = c.unsubscriptionText
                      ? c.unsubscriptionText
                      : ""),
                    (l.sendWithCaption =
                      !!c.sendWithCaption && c.sendWithCaption),
                    (l.createdAt = c.createdAt ? c.createdAt : 0),
                    (l.updatedAt = c.updatedAt ? c.updatedAt : 0));
                }
                return l;
              }),
              (u.getDefault = function (c) {
                return new u(
                  m.UUIDUtils.generate(),
                  c,
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
              Object.defineProperty(u.prototype, "templateType", {
                get: function () {
                  return this.attachmentDetails.length > 0
                    ? this.attachmentDetails.every(function (l) {
                        return l.type.includes("image");
                      })
                      ? d.IMAGE
                      : d.DOC
                    : d.TEXT;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (u.DEFAULT_UNSUBSCRIPTION_TEXT =
                "If this is not relevant please say {STOP} and we will never message you again."),
              u
            );
          })();
        r.MessageTemplate = w;
      },
      1730: (W, r) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.UserDetails = void 0));
        var h = (function () {
          function m(s, d, w, u, c, l, p, C) {
            ((this.phoneNumber = s),
              (this.number = d),
              (this.email = w),
              (this.name = u),
              (this.verifiedEmail = c),
              (this.getTips = l),
              (this.countryInfo = p),
              (this.installTimestamp = C));
          }
          return (
            (m.fromJSON = function (s) {
              var d = null;
              return (
                s &&
                  (((d = new m("", "", "", "", !1, !1, null, 0)).phoneNumber =
                    s.phoneNumber ? s.phoneNumber : ""),
                  (d.phoneNumber = d.phoneNumber.replace(/[^0-9]/g, "")),
                  (d.number = s.number ? s.number : ""),
                  (d.email = s.email ? s.email : ""),
                  (d.name = s.name ? s.name : ""),
                  (d.verifiedEmail = !!s.verifiedEmail && s.verifiedEmail),
                  (d.getTips = !!s.getTips && s.getTips),
                  (d.countryInfo = s.countryInfo ? s.countryInfo : null),
                  (d.installTimestamp = s.installTimestamp
                    ? s.installTimestamp
                    : 0)),
                d
              );
            }),
            (m.prototype.getUserNameIntitals = function () {
              var s = this.name.split(" ");
              return s.length > 1
                ? s[0].charAt(0).toUpperCase() + s[1].charAt(0).toUpperCase()
                : s[0].charAt(0).toUpperCase();
            }),
            (m.prototype.isValid = function () {
              return !(!this.number.trim() || !this.name.trim());
            }),
            m
          );
        })();
        r.UserDetails = h;
      },
      721: function (W, r, h) {
        var m =
            (this && this.__createBinding) ||
            (Object.create
              ? function (d, w, u, c) {
                  void 0 === c && (c = u);
                  var l = Object.getOwnPropertyDescriptor(w, u);
                  ((!l ||
                    ("get" in l
                      ? !w.__esModule
                      : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return w[u];
                      },
                    }),
                    Object.defineProperty(d, c, l));
                }
              : function (d, w, u, c) {
                  (void 0 === c && (c = u), (d[c] = w[u]));
                }),
          s =
            (this && this.__exportStar) ||
            function (d, w) {
              for (var u in d)
                "default" !== u &&
                  !Object.prototype.hasOwnProperty.call(w, u) &&
                  m(w, d, u);
            };
        (Object.defineProperty(r, "__esModule", { value: !0 }), s(h(3895), r));
      },
      3895: (W, r) => {
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.UUIDUtils = void 0));
        var h = (function () {
          function m() {}
          return (
            (m.generate = function () {
              var s = new Date().getTime();
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                function (w) {
                  var u = ((s + 16 * Math.random()) % 16) | 0;
                  return (
                    (s = Math.floor(s / 16)),
                    ("x" == w ? u : (3 & u) | 8).toString(16)
                  );
                },
              );
            }),
            m
          );
        })();
        r.UUIDUtils = h;
      },
    },
    Y = {};
  function $(W) {
    var r = Y[W];
    if (void 0 !== r) return r.exports;
    var h = (Y[W] = { exports: {} });
    return (ee[W].call(h.exports, h, h.exports, $), h.exports);
  }
  (() => {
    function W(o, i, n, t, a, e, f) {
      try {
        var _ = o[e](f),
          S = _.value;
      } catch (E) {
        return void n(E);
      }
      _.done ? i(S) : Promise.resolve(S).then(t, a);
    }
    function r(o) {
      return function () {
        var i = this,
          n = arguments;
        return new Promise(function (t, a) {
          var e = o.apply(i, n);
          function f(S) {
            W(e, t, a, f, _, "next", S);
          }
          function _(S) {
            W(e, t, a, f, _, "throw", S);
          }
          f(void 0);
        });
      };
    }
    var h = (function (o) {
      return (
        (o.LIBHOOK_SELECTOR_STORE = "LIBHOOK_SELECTOR_STORE"),
        (o.LIBHOOK_SELECTOR_CONN = "LIBHOOK_SELECTOR_CONN"),
        (o.LIBHOOK_SELECTOR_CHAT = "LIBHOOK_SELECTOR_CHAT"),
        (o.LIBHOOK_SELECTOR_CONTACT = "LIBHOOK_SELECTOR_CONTACT"),
        (o.LIBHOOK_SELECTOR_CONTACT_MODEL = "LIBHOOK_SELECTOR_CONTACT_MODEL"),
        (o.LIBHOOK_SELECTOR_BUSINESSPROFILE =
          "LIBHOOK_SELECTOR_BUSINESSPROFILE"),
        (o.LIBHOOK_SELECTOR_WAPQUERY = "LIBHOOK_SELECTOR_WAPQUERY"),
        (o.LIBHOOK_SELECTOR_GROUPMETADATA = "LIBHOOK_SELECTOR_GROUPMETADATA"),
        (o.LIBHOOK_SELECTOR_SENDMESSAGEPROTOTYPE =
          "LIBHOOK_SELECTOR_SENDMESSAGEPROTOTYPE"),
        (o.LIBHOOK_SELECTOR_MSG = "LIBHOOK_SELECTOR_MSG"),
        (o.LIBHOOK_SELECTOR_MSG_MODELS = "LIBHOOK_SELECTOR_MSG_MODELS"),
        (o.LIBHOOK_SELECTOR_LABEL = "LIBHOOK_SELECTOR_LABEL"),
        (o.LIBHOOK_SELECTOR_PRESENCE = "LIBHOOK_SELECTOR_PRESENCE"),
        (o.LIBHOOK_SELECTOR_VCARD = "LIBHOOK_SELECTOR_VCARD"),
        (o.LIBHOOK_SELECTOR_PRESENCE_FIRST = "LIBHOOK_SELECTOR_PRESENCE_FIRST"),
        (o.LIBHOOK_WEBPACK = "LIBHOOK_WEBPACK"),
        (o.SHELL_LOADED_INDICATOR = "SHELL_LOADED_INDICATOR"),
        (o.SELECTOR_APP_WA_ME_LINK = "SELECTOR_APP_WA_ME_LINK"),
        (o.LIBHOOK_WEBPACK_NEW = "LWM"),
        o
      );
    })(h || {});
    let m = (() => {
      class i {
        static getLibHookObject(t, a) {
          if (i.selectors[a])
            return i.selectors[a].split(".").reduce((f, _) => f[_], t);
        }
      }
      return ((i.selectors = {}), i);
    })();
    var s = $(4631),
      d = (function (o) {
        return (
          (o.INSTANCE_TYPE_CONTENT = "INSTANCE_TYPE_CONTENT"),
          (o.INSTANCE_TYPE_LIB = "INSTANCE_TYPE_LIB"),
          o
        );
      })(d || {});
    class w {
      constructor(i, n) {
        ((this.subject = i),
          (this.payload = n),
          (this.id = this.getDefaultId()));
      }
      getDefaultId() {
        return `${Date.now()}${Math.floor(1e4 * Math.random() + 1)}`;
      }
    }
    class u {
      constructor(i, n) {
        ((this.subject = i.subject),
          (this.id = i.id),
          (this.payload = i.payload),
          (this.response = n));
      }
    }
    class c {
      constructor(i, n) {
        ((this.subject = i.subject),
          (this.id = i.id),
          (this.payload = i.payload),
          (this.error = n.message || "Error"));
      }
    }
    class l {
      constructor(i, n) {
        ((this.CONTENT_TO_LIBHOOK_ELEMENT_ID = "wa_contentToLibHook"),
          (this.LIBHOOK_TO_CONTENT_ELEMENT_ID = "wa_libHookToContent"),
          (this.callBackMap = new Map()),
          (this.contentToLibNode = null),
          (this.libToContentNode = null),
          (this.instanceType = i),
          (this.requestHandler = n));
      }
      init() {
        this.instanceType === d.INSTANCE_TYPE_CONTENT
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
        const i = document.querySelector(
          `#${this.LIBHOOK_TO_CONTENT_ELEMENT_ID} `,
        );
        if (!i) throw new Error("Unable to find Libhook Div");
        this.addObserver(i, this.domObserverCallBack.bind(this));
      }
      initLibChannel() {
        const i = this.getContentToLibNode();
        if (!i) throw new Error("Unable to find Content to Lib Hook");
        this.addObserver(i, this.domObserverCallBack.bind(this));
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
      domObserverCallBack(i, n) {
        var t = this;
        i.filter((a) => a.addedNodes.length).forEach((a) => {
          a.addedNodes.forEach(
            (function () {
              var e = r(function* (f) {
                const _ = t.recieveMessage(f);
                _.hasOwnProperty("error")
                  ? t.processError(_)
                  : _.hasOwnProperty("response")
                    ? t.processResponse(_)
                    : _ && t.processRequest(_);
              });
              return function (f) {
                return e.apply(this, arguments);
              };
            })(),
          );
        });
      }
      processRequest(i) {
        this.requestHandler(i);
      }
      processResponse(i) {
        if (i) {
          const n = this.callBackMap.get(i.id);
          if (n && n.resolve) {
            this.callBackMap.delete(i.id);
            try {
              if (i.response) {
                const t = s.ModelUtils.fromJSON(i.response);
                n.resolve(t);
              } else n.resolve(i.response);
            } catch (t) {
              (console.log("error in process reponse", t), n.reject(t));
            }
          } else
            console.warn(
              `No Resolve Call back found for message: ${i.id} ${i.subject} `,
            );
        }
      }
      processError(i) {
        if (i) {
          const n = this.callBackMap.get(i.id);
          n && n.reject
            ? (this.callBackMap.delete(i.id), n.reject(i.error))
            : console.warn(
                `No Reject Call back found for message: ${i.id} ${i.subject} `,
              );
        }
      }
      sendMessage(i, n) {
        i
          ? this.createDivElement(i, n.id, n)
          : console.log("can't send message on Null");
      }
      recieveMessage(i) {
        if (i) {
          const n = this.decodeMessage(i);
          return (i.parentNode?.removeChild(i), n);
        }
      }
      decodeMessage(i) {
        return JSON.parse(i.value);
      }
      addObserver(i, n) {
        new (
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver
        )(n).observe(i, { attributes: !0, childList: !0, subtree: !0 });
      }
      createDivElement(i, n, t = null) {
        if (!i) throw new Error("Missing ParentNode");
        if (!n) throw new Error("Missing Id");
        {
          const a = document.createElement("input");
          ((a.id = n),
            (a.style.display = "none"),
            (a.value = JSON.stringify(t)),
            i.appendChild(a));
        }
      }
      sendResponse(i, n) {
        this.sendMessage(
          this.instanceType === d.INSTANCE_TYPE_CONTENT
            ? this.getContentToLibNode()
            : this.getLibToContentNode(),
          new u(i, n),
        );
      }
      sendError(i, n) {
        this.sendMessage(
          this.instanceType === d.INSTANCE_TYPE_CONTENT
            ? this.getContentToLibNode()
            : this.getLibToContentNode(),
          new c(i, n),
        );
      }
      sendRequest(i, n) {
        (n
          ? this.callBackMap.set(i.id, n)
          : console.warn(
              `No CallBacks Object found for message: ${i.id} ${i.subject} `,
            ),
          this.sendMessage(
            this.instanceType === d.INSTANCE_TYPE_CONTENT
              ? this.getContentToLibNode()
              : this.getLibToContentNode(),
            i,
          ));
      }
    }
    var J,
      p = (function (o) {
        return (
          (o.SET_SELECTORS = "SET_SELECTORS"),
          (o.GET_USER_INFO = "GET_USER_INFO"),
          (o.GET_USER_SAVED_CONTACTS = "GET_USER_SAVED_CONTACT"),
          (o.GET_ACTIVE_GROUP_NAME = "GET_ACTIVE_CHAT"),
          (o.ALL_USERS_GROUP = "ALL_USERS_GROUP"),
          (o.SEND_MESSAGE_TO_CONTACT = "SEND_MESSAGE_TO_CONTACT"),
          (o.CREATE_GROUP = "CREATE_GROUP"),
          (o.SEND_ATTACHMENTS = "SEND_ATTACHMENTS"),
          (o.REQUEST_SEND_ATTACH_FILE = "REQUEST_SEND_ATTACH_FILE"),
          (o.REQUEST_GET_USER_GROUPS_INFO = "REQUEST_GET_USER_GROUPS_INFO"),
          (o.REQUEST_GET_LABEL_MEMBERS = "REQUEST_GET_LABEL_MEMBERS"),
          (o.REQUEST_GET_GROUP_MEMBERS = "REQUEST_GET_GROUP_MEMBERS"),
          (o.REQUEST_GET_USER_ONLY_WA_CONTACT =
            "REQUEST_GET_USER_ONLY_WA_CONTACT"),
          (o.REQUEST_GET_USER_SAVED_CONTACT = "REQUEST_GET_USER_SAVED_CONTACT"),
          (o.REQUEST_GET_USER_LABELS = "REQUEST_GET_USER_LABELS"),
          (o.GET_MESSAGES = "GET_MESSAGES"),
          o
        );
      })(p || {}),
      C = (function (o) {
        return (
          (o.NOTIFY_CHANNEL_READY = "NOTIFY_CHANNEL_READY"),
          (o.NOTIFY_LIB_READY = "NOTIFY_LIBHOOK_READY"),
          (o.SEND_LIBHOOK_LISTENER_EVENT = "SEND_LIBHOOK_LISTENER_EVENT"),
          (o.NOTIFY_UNPAIRED = "NOTIFY_UNPAIRED"),
          o
        );
      })(C || {});
    class R {
      static msgFromWAMsg(i) {
        return new s.Message(
          i?.id?.id,
          i?.caption || i?.body,
          i?.id?.remote?.split("@")?.[0],
          i?.from?.user,
          1e3 * i.t,
        );
      }
      static stringToKey(i) {
        let n = 5381;
        for (let t = 0; t < i.length; t++) n = (33 * n) ^ i.charCodeAt(t);
        return (n >>> 0).toString(36);
      }
    }
    class M {
      getState() {
        return window.wa.AppState.state;
      }
      static getUserLabel() {
        return r(function* () {
          const i = yield m
            .getLibHookObject(window, h.LIBHOOK_SELECTOR_LABEL)
            .where({});
          if (i)
            return i.map((n) => ({
              id: n.id,
              name: n.name,
              color: n.hexColor,
              count: n.count,
            }));
          throw new Error("No Labels found");
        })();
      }
      static getUserWAContactsOnly() {
        const i = m
          .getLibHookObject(window, h.LIBHOOK_SELECTOR_CONTACT_MODEL)
          .filter((n) => !n.isAddressBookContact && "c.us" === n.id.server)
          .map((n) => ({
            name: M.searchContactName(n),
            phoneNumber: n?.phoneNumber?.user || n.id.user,
          }));
        return i.length > 0 ? i : "No contacts";
      }
      static getUserSavedContacts() {
        const i = m
          .getLibHookObject(window, h.LIBHOOK_SELECTOR_CONTACT_MODEL)
          .filter((n) => n.isAddressBookContact && "c.us" === n.__x_id.server)
          .map((n) => ({
            name: M.searchContactName(n),
            phoneNumber: n?.phoneNumber?.user || n.id.user,
          }));
        return i.length > 0 ? i : "No Saved Contact Found";
      }
      static getGroupContacts(i) {
        return r(function* () {
          return yield M.getGroupParticipantIDs(i);
        })();
      }
      static getGroupParticipantIDs(i) {
        return r(function* () {
          return (yield M._getGroupParticipants(i))
            .map((t) => t.contact)
            .map((t) => ({
              name: M.searchContactName(t),
              phoneNumber: t?.phoneNumber?.user || t.id.user,
            }));
        })();
      }
      static _getGroupParticipants(i) {
        return r(function* () {
          return (yield M.getGroupMetadata(i)).participants._models;
        })();
      }
      static getGroupMetadata(i) {
        return r(function* () {
          let n = m
            .getLibHookObject(window, h.LIBHOOK_SELECTOR_GROUPMETADATA)
            .find(i);
          return (void 0 !== n && n.stale && (yield n.update()), n);
        })();
      }
      static getLabelMembers(i) {
        let n = [],
          t = null;
        const a = M.getLabelMembersId(i);
        return (
          a.size &&
            a.forEach((e) => {
              t = m.getLibHookObject(window, h.LIBHOOK_SELECTOR_CONTACT).get(e);
              const f = M.searchContactName(t),
                _ = t?.phoneNumber?.user || t?.id?.user;
              _ && n.push({ name: f, phoneNumber: _ });
            }),
          n
        );
      }
      static getLabelMembersId(i) {
        let n = m
          .getLibHookObject(window, h.LIBHOOK_SELECTOR_LABEL)
          .where({ name: i })[0];
        if (n) {
          let t = n.labelItemCollection._models,
            a = new Set();
          return (t.forEach((e) => a.add(e.parentId)), a);
        }
        throw new Error(`Label = ${i} not defined in your system`);
      }
      static getAllGroups() {
        const i = m
          .getLibHookObject(window, h.LIBHOOK_SELECTOR_CHAT)
          ?._models.filter((n) => n.__x_id.server.includes("g.us"))
          .map((n) => ({
            name: n.__x_formattedTitle,
            id: n.__x_id._serialized,
          }));
        return i.length > 0 ? i : [];
      }
      static attacheFiles(i) {
        return ((this.attachedFiles = i), !0);
      }
      static sendFileToChat(i, n) {
        var t = this;
        return r(function* () {
          try {
            if (t.attachedFiles.length) {
              for (let a = 0; a < t.attachedFiles.length; ++a) {
                const e = {
                  data: t.attachedFiles[a].base64?.split(",")[1],
                  filesize: t.attachedFiles[a].size,
                  filename: t.attachedFiles[a].name,
                  mimetype: t.attachedFiles[a].type,
                };
                yield t.sendMessageToChat(i.__x_id._serialized, e, {
                  caption: 0 === a ? n.caption : "",
                  media: e,
                });
              }
              return s.Operation.STATUS_SENT;
            }
            throw new Error("No Attached File. Plz Attached a File");
          } catch (a) {
            throw (
              console.error("sendFileToChat failed:", a),
              new Error(`Failed to attach: ${a?.message || a}`)
            );
          }
        })();
      }
      static base64toFile(i, n) {
        for (
          var t = i.split(","),
            a = t[0].match(/:(.*?);/)[1],
            e = atob(t[1]),
            f = e.length,
            _ = new Uint8Array(f);
          f--;
        )
          _[f] = e.charCodeAt(f);
        return new File([_], n, { type: a });
      }
      static sendAttachment(i, n, t) {
        return r(function* () {
          const a = new window.Store.MediaCollection(i);
          return (
            yield a.processAttachments([{ file: n }, 1], 1, i),
            yield a._models[0].sendToChat(i, { caption: t }),
            s.Operation.STATUS_SENT
          );
        })();
      }
      static sendMessageToContact(i) {
        var n = this;
        return r(function* () {
          try {
            yield n.openChat(i.phoneNumber);
          } catch (a) {
            console.log("Error opening chat", a);
          }
          const t = yield n.getChat(i.phoneNumber);
          return i.message
            ? yield n.sendMessageToChat(t.__x_id._serialized, i.message)
            : t.__x_id
              ? s.Operation.STATUS_SENT
              : s.Operation.STATUS_FAILED;
        })();
      }
      static getContactMsgs(i, n) {
        var t = this;
        return r(function* () {
          const a = (_) =>
              !(
                _.isNotification ||
                (n && void 0 !== n.fromMe && _.id.fromMe !== n.fromMe) ||
                (n.textOnly && !_.__x_body)
              ),
            e = yield t.getChat(i);
          let f = e?.msgs?.getModelsArray()?.filter(a) || [];
          if (n && n.limit > 0) {
            for (; f.length < n.limit;) {
              const _ = yield window.wa.ConversationMsgs.loadEarlierMsgs(e);
              if (!_ || !_.length) break;
              f = [..._.filter(a), ...f];
            }
            f.length > n.limit &&
              (f.sort((_, S) => (_.t > S.t ? 1 : -1)),
              (f = f.splice(f.length - n.limit)));
          }
          return f.map((_) => R.msgFromWAMsg(window.WWebJS.getMessageModel(_)));
        })();
      }
      static sendFileToContact(i) {
        var n = this;
        return r(function* () {
          try {
            try {
              yield n.openChat(i.phoneNumber);
            } catch {}
            const t = yield n.getChat(i.phoneNumber);
            return yield n.sendFileToChat(t, i);
          } catch (t) {
            throw (console.log(t), t);
          }
        })();
      }
      static getChat(i) {
        var n = this;
        return r(function* () {
          let t = "";
          return (
            (t = i.includes("@") ? i : yield n.getContactId(i)),
            yield window.WWebJS.getChat(t, { getAsModel: !1 })
          );
        })();
      }
      static getContactId(i) {
        return r(function* () {
          if (i) {
            i.endsWith("@c.us") || (i += "@c.us");
            const n = window.Store.WidFactory.createWid(i),
              t = yield window.Store.QueryExist(n);
            if (t && (t.wid || t.__x_id))
              return t?.wid?._serialized || t?.__x_id?._serialized;
            throw new Error("No contact Found");
          }
          throw new Error("Please provide contact number.");
        })();
      }
      static getGroupChat(i) {
        let n = "";
        return (
          (n = -1 === i.search("@") ? this.getGroupId(i) : i),
          m.getLibHookObject(window, h.LIBHOOK_SELECTOR_CHAT).get(n)
        );
      }
      static getGroupMetaData(i) {
        return r(function* () {
          return (yield window.Store.GroupMetadata)?._models.find((t) =>
            t?.__x_id?._serialized?.includes(i),
          );
        })();
      }
      static getGroupId(i) {
        if (i) {
          const n = m
            .getLibHookObject(window, h.LIBHOOK_SELECTOR_CONTACT_MODEL)
            .find((t) => t.id.user.includes(i) && "g.us" === t.id.server);
          if (n) return n.id._serialized;
          throw new Error("No contact Found");
        }
        throw new Error("Please provide contact number.");
      }
      static sendMessageToChat(i, n, t = {}) {
        var a = this;
        return r(function* () {
          try {
            const e = m
              .getLibHookObject(window, h.LIBHOOK_SELECTOR_CHAT)
              .getActive();
            if (e && e?.id?._serialized === i)
              yield window.WWebJS.sendMessage(e, n, t, !1);
            else {
              const f = yield a.getChat(i);
              yield window.WWebJS.sendMessage(f, n, t, !1);
            }
            return s.Operation.STATUS_SENT;
          } catch (e) {
            throw (
              console.log("sendResult error", e),
              new Error("Message not Send")
            );
          }
        })();
      }
      static getUserInfo() {
        const i = window.Store;
        let n = null;
        try {
          n = i?.Contact?.getMeContact?.();
        } catch (a) {
          console.warn("[LibHook] getMeContact() threw:", a);
        }
        if (n) {
          const a = n?.phoneNumber?.user || n.id.user,
            e = M.searchContactName(n);
          return new s.Contact(e, a);
        }
        console.warn(
          "[LibHook] getMeContact() returned null, falling back to User store",
        );
        const t = M.getMeUserWid();
        if (t?.user) {
          let a = null;
          try {
            a = i?.Contact?.get?.(t) || i?.Contact?.get?.(t?._serialized);
          } catch (f) {
            console.warn("[LibHook] Contact.get(meWid) threw:", f);
          }
          const e =
            (a ? M.searchContactName(a) : "") || i?.Conn?.pushname || "";
          return (
            console.log(
              "[LibHook] Resolved logged-in user from User store:",
              t.user,
            ),
            new s.Contact(e, t.user)
          );
        }
        throw (
          console.error("[LibHook] Unable to resolve logged-in user.", {
            hasStore: !!i,
            hasContact: !!i?.Contact,
            hasGetMeContact: "function" == typeof i?.Contact?.getMeContact,
            hasUser: !(!i?.User && !window.wa?.User),
            connWid:
              i?.Conn?.wid?._serialized ?? window.wa?.Conn?.wid?._serialized,
          }),
          new Error("User Not found--")
        );
      }
      static getMeUserWid() {
        const i = window.Store?.User || window.wa?.User;
        let n = null;
        try {
          n = i?.getMaybeMePnUser?.();
        } catch (t) {
          console.warn("[LibHook] getMaybeMePnUser() threw:", t);
        }
        if (
          (n?.user ||
            (n = window.Store?.Conn?.wid || window.wa?.Conn?.wid || n),
          !n?.user)
        )
          try {
            n = i?.getMaybeMeUser?.() || n;
          } catch (t) {
            console.warn("[LibHook] getMaybeMeUser() threw:", t);
          }
        return n;
      }
      static getActiveGroupName() {
        let i = m
            .getLibHookObject(window, h.LIBHOOK_SELECTOR_CHAT)
            .where({ active: !0 }),
          n = null;
        i && i.length > 0
          ? (n = i[0])
          : ((i = m
              .getLibHookObject(window, h.LIBHOOK_SELECTOR_CHAT)
              .getActive()),
            (n = i || "noactivechat"));
        let t = "";
        return ("g.us" === n?.id?.server && (t = n?.__x_formattedTitle), t);
      }
      static searchContactName(i) {
        if (i) {
          const { verifiedName: n, pushname: t, name: a } = i,
            e = { verifiedName: n, pushname: t, name: a },
            f = Object.keys(e).filter((S) => e[S]),
            _ = f.find((S) =>
              e[S].replaceAll(/[\s@~`!@#$%^&*()_=+\\';:"\/?>.<,-]/g, "").match(
                /\D+/,
              ),
            );
          return _ ? e[_] : f.length ? e[f[0]].replace(/\W+/g, "") : "";
        }
      }
      static chatSchema(i) {
        const n = {
            messageId: i.id?._serialized,
            timestamp: i.t,
            backupTime: i.toriginal || i.t,
            isGroup: i.isGroup,
            type: i.type,
            sentByMe: i.id?.fromMe,
            isNewMsg: i.isNewMsg || !1,
            sender: i.from?._serialized,
            reciever: i.to?._serialized,
            content: i.body,
            link: i.link,
            repliedToMsg: i.quotedMsg || "",
            repliedTo: i.quotedParticipant
              ? i.quotedParticipant_serialized
              : "",
            repliedMsgId: i.quotedStanzaID || "",
            ack: i.__x_ack || "",
            name: "",
          },
          t = M.getContactDetails(n.sender);
        if (t) {
          const a = M.searchContactName(t);
          ((n.name = a), (n.isGroup = t.isGroup));
        }
        return n;
      }
      static getContactDetails(i) {
        const n = m.getLibHookObject(window, h.LIBHOOK_SELECTOR_CONTACT).get(i);
        return n ? M.contactSchema(n) : null;
      }
      static contactSchema(i) {
        return void 0 === i
          ? null
          : {
              id: i.id._serialized,
              userphone: i?.phoneNumber?.user || i?.id?.user,
              formattedName: i.formattedName || i.formattedTitle,
              pushName: i.pushname,
              notifyName: i.notifyName,
              displayName: i.displayName,
              isBusiness: i.isBusiness,
              toriginal: i.toriginal || i.t,
              isBlocked: i.isContactBlocked,
              isGroup: i.isGroup,
            };
      }
      static findFailedParticipants(i, n) {
        var t = this;
        return r(function* () {
          try {
            const e = (yield t.getGroupMetaData(
                i.wid._serialized,
              ))?.participants?.parent?.participants?._models?.map(
                (_) => _.__x_id.user,
              ),
              f = n
                .filter((_) => !e.includes(_))
                .map((_) => ({
                  error: 500,
                  invite_code: "",
                  invite_code_exp: "",
                  type: "FAILED",
                  wid: _,
                }));
            i.participants.push(...f);
          } catch (a) {
            console.log(a);
          }
        })();
      }
      static getGroupInviteLink(i) {
        return r(function* () {
          return yield window.Store.GroupInvite.queryGroupInviteCode(i);
        })();
      }
      static getGroupMembersIds(i) {
        return i
          .map((n) => `${n}@c.us`)
          .map((n) => window.Store.WidFactory.createWid(n))
          .filter((n) => n);
      }
      static promoteParticipant(i, n) {
        return r(function* () {
          try {
            return yield window.Store.Participants.promoteParticipants(i, n);
          } catch {
            console.log("promoteParticipant failed");
          }
        })();
      }
      static addParticipant(i, n) {
        return r(function* () {
          try {
            yield window.Store.Participants.addParticipants(i, n);
          } catch (t) {
            console.log("addParticipant failed", t);
          }
        })();
      }
      static openChat0(i) {
        var n = this;
        return r(function* () {
          let t = "";
          t = i.includes("@") ? i : yield n.getContactId(i);
          const a = yield window.WWebJS.getChat(t, { getAsModel: !1 });
          (yield window.wa.Cmd.openChatBottom(a), yield n.waitFor(2e3));
        })();
      }
      static openChat(i) {
        var n = this;
        return new Promise(
          (function () {
            var t = r(function* (a, e) {
              if (m.selectors[h.SELECTOR_APP_WA_ME_LINK])
                try {
                  if (yield n.getContactId(i)) {
                    const _ = document.getElementById("blkwhattsapplink");
                    if (i)
                      if (_) _.setAttribute("href", `https://wa.me/${i}`);
                      else {
                        const S = `<a href="https://wa.me/${i}" id= "blkwhattsapplink"></a>`;
                        document.querySelectorAll(
                          m.selectors[h.SELECTOR_APP_WA_ME_LINK],
                        )[4].innerHTML = S;
                      }
                    setTimeout(() => {
                      (document.getElementById("blkwhattsapplink")?.click(),
                        setTimeout(() => {
                          a();
                        }, 2e3));
                    }, 500);
                  } else e(new Error("Invalid contact number"));
                } catch (f) {
                  (console.error("Error opening chat:", f), e(f));
                }
              else e();
            });
            return function (a, e) {
              return t.apply(this, arguments);
            };
          })(),
        );
      }
      static waitFor(i) {
        return new Promise((n, t) => {
          setTimeout(() => {
            n();
          }, i);
        });
      }
    }
    (((J = M).localStorage = (function P() {
      const o = "KEY_ATTACHMENTS",
        i = "KEY_DELETED_CHATS",
        t = "BROADCAST_MSGS_TIME";
      function a() {
        return `${window?.Store?.Conn?._serialized}_INSPECTED_MESSAGE`;
      }
      function e(A, I) {
        window.localStorage.setItem(A, I);
      }
      function f(A) {
        return window.localStorage.getItem(A);
      }
      return {
        getAttachments: function N() {
          const A = f(o);
          return A ? JSON.parse(A) : [];
        },
        setAttachments: function v(A) {
          e(o, A ? JSON.stringify(A) : null);
        },
        setInspectChats: function E(A) {
          e(a(), A ? JSON.stringify(A) : null);
        },
        getInspectChats: function y() {
          const I = f(a());
          return I ? JSON.parse(I) : [];
        },
        getDeletedChats: function _() {
          const A = f(i);
          return A ? JSON.parse(A) : [];
        },
        setDeletedChats: function S(A) {
          e(i, A ? JSON.stringify(A) : null);
        },
        setBroadcastTimestamp: function O() {
          e(t, JSON.stringify(Date.now()));
        },
        getBroadcastTimestamp: function T() {
          const A = f(t);
          return A ? JSON.parse(A) : null;
        },
      };
    })()),
      (J.attachedFiles = J.localStorage.getAttachments()));
    var Z,
      x,
      B = (function (o) {
        return (
          (o.AUTHENTICATED = "authenticated"),
          (o.AUTHENTICATION_FAILURE = "auth_failure"),
          (o.READY = "ready"),
          (o.MESSAGE_RECEIVED = "message"),
          (o.MESSAGE_CIPHERTEXT = "message_ciphertext"),
          (o.MESSAGE_CREATE = "message_create"),
          (o.MESSAGE_REVOKED_EVERYONE = "message_revoke_everyone"),
          (o.MESSAGE_REVOKED_ME = "message_revoke_me"),
          (o.MESSAGE_ACK = "message_ack"),
          (o.MESSAGE_EDIT = "message_edit"),
          (o.MEDIA_UPLOADED = "media_uploaded"),
          (o.CONTACT_CHANGED = "contact_changed"),
          (o.GROUP_JOIN = "group_join"),
          (o.GROUP_LEAVE = "group_leave"),
          (o.GROUP_ADMIN_CHANGED = "group_admin_changed"),
          (o.GROUP_MEMBERSHIP_REQUEST = "group_membership_request"),
          (o.GROUP_UPDATE = "group_update"),
          (o.QR_RECEIVED = "qr"),
          (o.LOADING_SCREEN = "loading_screen"),
          (o.DISCONNECTED = "disconnected"),
          (o.STATE_CHANGED = "change_state"),
          (o.BATTERY_CHANGED = "change_battery"),
          (o.REMOTE_SESSION_SAVED = "remote_session_saved"),
          (o.CALL = "call"),
          o
        );
      })(B || {});
    class F {
      constructor(i) {
        ((this.eventEmitter = i), this.attachListeners());
      }
      emit(i, n) {
        return this.eventEmitter.emit(i, n);
      }
      attachListeners() {
        var i = this;
        return r(function* () {
          let n = window;
          n.wa.Msg.on("add", (t) => {
            t.isNewMsg &&
              ("ciphertext" === t.type
                ? (t.once("change:type", (a) =>
                    i.onAddMessageEvent(n.WWebJS.getMessageModel(a)),
                  ),
                  n.onAddMessageCiphertextEvent(n.WWebJS.getMessageModel(t)))
                : i.onAddMessageEvent(n.WWebJS.getMessageModel(t)));
          });
        })();
      }
      onAddMessageCiphertextEvent(i) {
        this.emit(B.MESSAGE_CIPHERTEXT, i);
      }
      onAddMessageEvent(i) {
        if ("gp2" !== i.type)
          (this.emit(B.MESSAGE_CREATE, R.msgFromWAMsg(i)),
            !i.id.fromMe && this.emit(B.MESSAGE_RECEIVED, R.msgFromWAMsg(i)));
        else {
          const n = i;
          ["add", "invite", "linked_group_join"].includes(i.subtype)
            ? this.emit(B.GROUP_JOIN, n)
            : this.emit(
                "remove" === i.subtype || "leave" === i.subtype
                  ? B.GROUP_LEAVE
                  : "promote" === i.subtype || "demote" === i.subtype
                    ? B.GROUP_ADMIN_CHANGED
                    : "membership_approval_request" === i.subtype
                      ? B.GROUP_MEMBERSHIP_REQUEST
                      : B.GROUP_UPDATE,
                n,
              );
        }
      }
    }
    class z {
      constructor() {
        ((this.channel = new l(d.INSTANCE_TYPE_LIB, this.eventLoop.bind(this))),
          this.channel.init());
      }
      emit(i, n) {
        return new Promise((t, a) => {
          const e = new w(C.SEND_LIBHOOK_LISTENER_EVENT, {
            libhookListenEvents: i,
            data: n,
          });
          this.channel.sendRequest(e, { resolve: t, reject: a });
        });
      }
      eventLoop(i) {
        var n = this;
        return r(function* () {
          if (i && i.id && i.subject)
            switch (i.subject) {
              case p.SET_SELECTORS:
                ((m.selectors = i.payload), n.channel.sendResponse(i, ""));
                break;
              case p.GET_USER_INFO:
                try {
                  const t = M.getUserInfo();
                  n.channel.sendResponse(i, t);
                } catch (t) {
                  n.channel.sendError(i, t);
                }
                break;
              case p.GET_ACTIVE_GROUP_NAME:
                try {
                  const t = M.getActiveGroupName();
                  n.channel.sendResponse(i, t);
                } catch (t) {
                  n.channel.sendError(i, t);
                }
                break;
              case p.SEND_MESSAGE_TO_CONTACT:
                try {
                  const t = yield M.sendMessageToContact(i.payload);
                  n.channel.sendResponse(i, t);
                } catch (t) {
                  n.channel.sendError(i, t);
                }
                break;
              case p.SEND_ATTACHMENTS:
                try {
                  n.attachedFiles = i.payload.attachments;
                  const t = M.attacheFiles(i.payload.attachments);
                  n.channel.sendResponse(i, t);
                } catch (t) {
                  n.channel.sendError(i, t);
                }
                break;
              case p.REQUEST_SEND_ATTACH_FILE:
                try {
                  const t = i.payload,
                    a = yield M.sendFileToContact(t);
                  n.channel.sendResponse(i, a);
                } catch (t) {
                  (console.log(t), n.channel.sendError(i, t));
                }
                break;
              case p.REQUEST_GET_USER_GROUPS_INFO:
                try {
                  const t = yield M.getAllGroups();
                  n.channel.sendResponse(i, t);
                } catch (t) {
                  (console.log(t), n.channel.sendError(i, t));
                }
                break;
              case p.REQUEST_GET_LABEL_MEMBERS:
                try {
                  const t = i.payload;
                  let a = yield M.getLabelMembers(t);
                  n.channel.sendResponse(i, a);
                } catch (t) {
                  (console.log(t), n.channel.sendError(i, t));
                }
                break;
              case p.REQUEST_GET_GROUP_MEMBERS:
                try {
                  const t = i.payload,
                    a = yield M.getGroupContacts(t);
                  n.channel.sendResponse(i, a);
                } catch (t) {
                  (console.log(t), n.channel.sendError(i, t));
                }
                break;
              case p.REQUEST_GET_USER_ONLY_WA_CONTACT:
                try {
                  const t = M.getUserWAContactsOnly();
                  n.channel.sendResponse(i, t);
                } catch (t) {
                  (console.log(t), n.channel.sendError(i, t));
                }
                break;
              case p.REQUEST_GET_USER_SAVED_CONTACT:
                try {
                  const t = M.getUserSavedContacts();
                  n.channel.sendResponse(i, t);
                } catch (t) {
                  (console.log(t), n.channel.sendError(i, t));
                }
                break;
              case p.REQUEST_GET_USER_LABELS:
                try {
                  let t = yield M.getUserLabel();
                  n.channel.sendResponse(i, t);
                } catch (t) {
                  (console.log(t), n.channel.sendError(i, t));
                }
                break;
              case p.GET_MESSAGES:
                try {
                  const { chatId: t, searchOptions: a } = i.payload;
                  let e = yield M.getContactMsgs(t, a);
                  n.channel.sendResponse(i, e);
                } catch (t) {
                  (console.log(t), n.channel.sendError(i, t));
                }
            }
        })();
      }
      notifyChannelReady() {
        return new Promise((i, n) => {
          const t = new w(C.NOTIFY_CHANNEL_READY, null);
          this.channel.sendRequest(t, { resolve: i, reject: n });
        });
      }
      notifyLibReady() {
        return new Promise((i, n) => {
          (this.listener || (this.listener = new F(this)),
            (this.listener.eventEmitter = this));
          const t = new w(C.NOTIFY_LIB_READY, null);
          this.channel.sendRequest(t, { resolve: i, reject: n });
        });
      }
      notifyUnPaired() {
        return new Promise((i, n) => {
          const t = new w(C.NOTIFY_UNPAIRED, null);
          this.channel.sendRequest(t, { resolve: i, reject: n });
        });
      }
    }
    const ie = ["CONNECTED", "OPENING", "PAIRING", "TIMEOUT"];
    function X(o) {
      (console.log("AppState changed:", o),
        o && ie.includes(o)
          ? (function oe() {
              try {
                const o = [],
                  i = JSON.parse(atob(m.selectors[h.LIBHOOK_WEBPACK_NEW]));
                for (const a of i?.mods)
                  o.push({
                    key: a.mod_k,
                    mod: a.mod,
                    get: () =>
                      a.mod_ref
                        ? window[i.ins](a.mod)[a.mod_ref]
                        : window[i.ins](a.mod),
                  });
                const n = {},
                  t = [];
                (o.forEach((a) => {
                  try {
                    n[a.key] = a.get();
                  } catch {
                    (t.push(`${a.key} (${a.mod})`), (n[a.key] = void 0));
                  }
                }),
                  t.length &&
                    console.warn(
                      "[FL] Skipped unavailable WhatsApp modules:",
                      t,
                    ),
                  (window.Store = n));
                try {
                  window.Store.QueryExist = window.importNamespace(
                    "WAWebQueryExistsJob",
                  ).queryWidExists;
                } catch (a) {
                  console.warn("[FL] WAWebQueryExistsJob unavailable", a);
                }
                (window.Store.Chat
                  ? (window.Store.Chat._find = (a) => {
                      const e = window.Store.Chat.get(a);
                      return Promise.resolve(e || { id: a });
                    })
                  : console.error(
                      "[FL] Store.Chat is missing; core chat functionality will not work.",
                    ),
                  (window.Store.sendMessagePrototype = function (a) {
                    return window.Store.SendTextMsgToChat(this, ...arguments);
                  }),
                  (function te() {
                    const o = (i) => {
                      try {
                        return window.require(i);
                      } catch (n) {
                        return (
                          console.warn(
                            `[WA Store] Failed to load module: ${i}`,
                            n,
                          ),
                          {}
                        );
                      }
                    };
                    ((window.compareWwebVersions = (i, n, t) => {
                      if (![">", ">=", "<", "<=", "="].includes(n))
                        throw new (class extends Error {
                          constructor(e) {
                            (super(e),
                              (this.name = "CompareWwebVersionsError"));
                          }
                        })("Invalid comparison operator is provided");
                      if ("string" != typeof i || "string" != typeof t)
                        throw new (class extends Error {
                          constructor(e) {
                            (super(e),
                              (this.name = "CompareWwebVersionsError"));
                          }
                        })("A non-string WWeb version type is provided");
                      for (
                        i = i.replace(/-beta$/, ""),
                          t = t.replace(/-beta$/, "");
                        i.length !== t.length;
                      )
                        i.length > t.length
                          ? (t = t.concat("0"))
                          : (i = i.concat("0"));
                      return (
                        (i = Number(i.replace(/\./g, ""))),
                        (t = Number(t.replace(/\./g, ""))),
                        ">" === n
                          ? i > t
                          : ">=" === n
                            ? i >= t
                            : "<" === n
                              ? i < t
                              : "<=" === n
                                ? i <= t
                                : "=" === n && i === t
                      );
                    }),
                      (window.wa = Object.assign({}, o("WAWebCollections"))),
                      (window.wa.AppState = o("WAWebSocketModel").Socket),
                      (window.wa.BlockContact = o("WAWebBlockContactAction")),
                      (window.wa.Conn = o("WAWebConnModel").Conn),
                      (window.wa.Cmd = o("WAWebCmd").Cmd),
                      (window.wa.DownloadManager = o(
                        "WAWebDownloadManager",
                      ).downloadManager),
                      (window.wa.GroupQueryAndUpdate =
                        o(
                          "WAWebGroupQueryJob",
                        ).queryAndUpdateGroupMetadataById),
                      (window.wa.MediaPrep = o("WAWebPrepRawMedia")),
                      (window.wa.MediaObject = o("WAWebMediaStorage")),
                      (window.wa.MediaTypes = o("WAWebMmsMediaTypes")),
                      (window.wa.MediaUpload = o("WAWebMediaMmsV4Upload")),
                      (window.wa.MsgKey = o("WAWebMsgKey")),
                      (window.wa.OpaqueData = o("WAWebMediaOpaqueData")),
                      (window.wa.QueryProduct = o(
                        "WAWebBizProductCatalogBridge",
                      )),
                      (window.wa.QueryOrder = o("WAWebBizOrderBridge")),
                      (window.wa.SendClear = o("WAWebChatClearBridge")),
                      (window.wa.SendDelete = o("WAWebDeleteChatAction")),
                      (window.wa.SendMessage = o("WAWebSendMsgChatAction")),
                      (window.wa.EditMessage = o("WAWebSendMessageEditAction")),
                      (window.wa.SendSeen = o("WAWebUpdateUnreadChatAction")),
                      (window.wa.User = o("WAWebUserPrefsMeUser")),
                      (window.wa.ContactMethods = o("WAWebContactGetters")),
                      (window.wa.UserConstructor = o("WAWebWid")),
                      (window.wa.Validators = o("WALinkify")),
                      (window.wa.WidFactory = o("WAWebWidFactory")),
                      (window.wa.ProfilePic = o(
                        "WAWebContactProfilePicThumbBridge",
                      )),
                      (window.wa.PresenceUtils = o("WAWebPresenceChatAction")),
                      (window.wa.ChatState = o("WAWebChatStateBridge")),
                      (window.wa.findCommonGroups = o(
                        "WAWebFindCommonGroupsContactAction",
                      ).findCommonGroups),
                      (window.wa.StatusUtils = o("WAWebContactStatusBridge")),
                      (window.wa.ConversationMsgs = o("WAWebChatLoadMessages")),
                      (window.wa.sendReactionToMsg = o(
                        "WAWebSendReactionMsgAction",
                      ).sendReactionToMsg),
                      (window.wa.createOrUpdateReactionsModule = o(
                        "WAWebDBCreateOrUpdateReactions",
                      )),
                      (window.wa.EphemeralFields = o(
                        "WAWebGetEphemeralFieldsMsgActionsUtils",
                      )),
                      (window.wa.MsgActionChecks = o(
                        "WAWebMsgActionCapability",
                      )),
                      (window.wa.QuotedMsg = o("WAWebQuotedMsgModelUtils")),
                      (window.wa.LinkPreview = o("WAWebLinkPreviewChatAction")),
                      (window.wa.Socket = o("WADeprecatedSendIq")),
                      (window.wa.SocketWap = o("WAWap")),
                      (window.wa.SearchContext = o("WAWebChatMessageSearch")),
                      (window.wa.DrawerManager =
                        o("WAWebDrawerManager").DrawerManager),
                      (window.wa.LidUtils = o("WAWebApiContact")),
                      (window.wa.WidToJid = o("WAWebWidToJid")),
                      (window.wa.JidToWid = o("WAWebJidToWid")),
                      (window.wa.getMsgInfo = o(
                        "WAWebApiMessageInfoStore",
                      ).queryMsgInfo),
                      (window.wa.pinUnpinMsg = o(
                        "WAWebSendPinMessageAction",
                      ).sendPinInChatMsg),
                      (window.wa.QueryExist = o(
                        "WAWebQueryExistsJob",
                      ).queryWidExists),
                      (window.wa.ReplyUtils = o("WAWebMsgReply")),
                      (window.wa.BotSecret = o("WAWebBotMessageSecret")),
                      (window.wa.BotProfiles = o("WAWebBotProfileCollection")),
                      (window.wa.ContactCollection = o(
                        "WAWebContactCollection",
                      ).ContactCollection),
                      (window.wa.DeviceList = o("WAWebApiDeviceList")),
                      (window.wa.HistorySync = o(
                        "WAWebSendNonMessageDataRequest",
                      )),
                      (window.wa.AddonReactionTable = o(
                        "WAWebAddonReactionTableMode",
                      ).reactionTableMode),
                      (window.wa.ChatGetters = o("WAWebChatGetters")),
                      (window.wa.UploadUtils = o("WAWebUploadManager")),
                      (window.wa.Settings = {
                        ...o("WAWebUserPrefsGeneral"),
                        ...o("WAWebUserPrefsNotifications"),
                      }),
                      (window.wa.NumberInfo = { ...o("WAPhoneFindCC") }),
                      (window.wa.ForwardUtils = {}),
                      (window.wa.VCard = {
                        ...o("WAWebFrontendVcardUtils"),
                        ...o("WAWebVcardParsingUtils"),
                        ...o("WAWebVcardGetNameFromParsed"),
                      }),
                      (window.wa.StickerTools = {
                        ...o("WAWebImageUtils"),
                        ...o("WAWebAddWebpMetadata"),
                      }),
                      (window.wa.GroupUtils = {
                        ...o("WAWebGroupCreateJob"),
                        ...o("WAWebGroupModifyInfoJob"),
                        ...o("WAWebExitGroupAction"),
                        ...o("WAWebContactProfilePicThumbBridge"),
                      }),
                      (window.wa.GroupParticipants = {
                        ...o("WAWebModifyParticipantsGroupAction"),
                        ...o("WASmaxGroupsAddParticipantsRPC"),
                      }),
                      (window.wa.GroupInvite = {
                        ...o("WAWebGroupInviteJob"),
                        ...o("WAWebGroupQueryJob"),
                        ...o("WAWebMexFetchGroupInviteCodeJob"),
                      }),
                      (window.wa.GroupInviteV4 = {
                        ...o("WAWebGroupInviteV4Job"),
                        ...o("WAWebChatSendMessages"),
                      }),
                      (window.wa.MembershipRequestUtils = {
                        ...o("WAWebApiMembershipApprovalRequestStore"),
                        ...o("WASmaxGroupsMembershipRequestsActionRPC"),
                      }),
                      (window.wa.ChannelUtils = {
                        ...o("WAWebLoadNewsletterPreviewChatAction"),
                        ...o("WAWebNewsletterMetadataQueryJob"),
                        ...o("WAWebNewsletterCreateQueryJob"),
                        ...o("WAWebEditNewsletterMetadataAction"),
                        ...o("WAWebNewsletterDeleteAction"),
                        ...o("WAWebNewsletterSubscribeAction"),
                        ...o("WAWebNewsletterUnsubscribeAction"),
                        ...o("WAWebNewsletterDirectorySearchAction"),
                        ...o("WAWebNewsletterGatingUtils"),
                        ...o("WAWebNewsletterModelUtils"),
                        ...o("WAWebMexAcceptNewsletterAdminInviteJob"),
                        ...o("WAWebMexRevokeNewsletterAdminInviteJob"),
                        ...o("WAWebChangeNewsletterOwnerAction"),
                        ...o("WAWebDemoteNewsletterAdminAction"),
                        ...o("WAWebNewsletterDemoteAdminJob"),
                        countryCodesIso: o("WAWebCountriesNativeCountryNames"),
                        currentRegion: o("WAWebL10N").getRegion(),
                      }),
                      (window.wa.SendChannelMessage = {
                        ...o("WAWebNewsletterUpdateMsgsRecordsJob"),
                        ...o("WAWebMsgDataFromModel"),
                        ...o("WAWebNewsletterSendMessageJob"),
                        ...o("WAWebNewsletterSendMsgAction"),
                        ...o("WAMediaCalculateFilehash"),
                      }),
                      (window.wa.ChannelSubscribers = {
                        ...o("WAWebNewsletterSubscriberListAction"),
                      }),
                      (window.wa.AddressbookContactUtils = {
                        ...o("WAWebSaveContactAction"),
                        ...o("WAWebDeleteContactAction"),
                      }),
                      (!window.wa.Chat?._find || !window.wa.Chat?.findImpl) &&
                        ((window.wa.Chat._find = (i) => {
                          const n = window.wa.Chat?.get(i);
                          return Promise.resolve(n || { id: i });
                        }),
                        window.wa.Chat &&
                          (window.wa.Chat.findImpl = window.wa.Chat._find)),
                      (window.injectToFunction = (i, n) => {
                        try {
                          const t = o(i.module),
                            a = t[i.function];
                          a && (t[i.function] = (...f) => n(a, ...f));
                        } catch (t) {
                          console.warn(
                            `[WA Store] Failed to inject to function: ${i.module}.${i.function}`,
                            t,
                          );
                        }
                      }));
                    try {
                      window.injectToFunction(
                        {
                          module: "WAWebBackendJobsCommon",
                          function: "mediaTypeFromProtobuf",
                        },
                        (i, ...n) => {
                          const [t] = n;
                          return t.locationMessage ? null : i(...n);
                        },
                      );
                    } catch (i) {
                      console.warn(
                        "[WA Store] Failed to inject mediaTypeFromProtobuf",
                        i,
                      );
                    }
                    try {
                      window.injectToFunction(
                        {
                          module: "WAWebE2EProtoUtils",
                          function: "typeAttributeFromProtobuf",
                        },
                        (i, ...n) => {
                          const [t] = n;
                          return t.locationMessage || t.groupInviteMessage
                            ? "text"
                            : i(...n);
                        },
                      );
                    } catch (i) {
                      console.warn(
                        "[WA Store] Failed to inject typeAttributeFromProtobuf",
                        i,
                      );
                    }
                  })(),
                  (function ne() {
                    ((window.WWebJS = {}),
                      (window.WWebJS.forwardMessage = (function () {
                        var n = r(function* (t, a) {
                          const e =
                            window.wa.Msg.get(a) ||
                            (yield window.wa.Msg.getMessagesById([a]))
                              ?.messages?.[0];
                          let f = window.wa.Chat.get(t);
                          return window.compareWwebVersions(
                            window.Debug.VERSION,
                            ">",
                            "2.3000.0",
                          )
                            ? window.wa.ForwardUtils.forwardMessagesToChats(
                                [e],
                                [f],
                                !1,
                              )
                            : f.forwardMessages([e]);
                        });
                        return function (t, a) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.sendSeen = (function () {
                        var n = r(function* (t) {
                          let a = window.wa.Chat.get(t);
                          return (
                            void 0 !== a &&
                            (yield window.wa.SendSeen.sendSeen(a, !1), !0)
                          );
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.sendMessage = (function () {
                        var n = r(function* (t, a, e = {}) {
                          const f = window.wa.ChatGetters.getIsNewsletter(t);
                          let _ = {};
                          e.media &&
                            ((_ =
                              e.sendMediaAsSticker && !f
                                ? yield window.WWebJS.processStickerData(
                                    e.media,
                                  )
                                : yield window.WWebJS.processMediaData(
                                    e.media,
                                    {
                                      forceSticker: e.sendMediaAsSticker,
                                      forceGif: e.sendVideoAsGif,
                                      forceVoice: e.sendAudioAsVoice,
                                      forceDocument: e.sendMediaAsDocument,
                                      forceMediaHd: e.sendMediaAsHd,
                                      sendToChannel: f,
                                    },
                                  )),
                            (_.caption = e.caption),
                            (a = e.sendMediaAsSticker ? void 0 : _.preview),
                            (_.isViewOnce = e.isViewOnce),
                            delete e.media,
                            delete e.sendMediaAsSticker);
                          let S = {};
                          if (e.quotedMessageId) {
                            let g = window.wa.Msg.get(e.quotedMessageId);
                            if (
                              (!g &&
                                (g = (yield window.wa.Msg.getMessagesById([
                                  e.quotedMessageId,
                                ]))?.messages?.[0]),
                              g)
                            )
                              (window.wa.ReplyUtils
                                ? window.wa.ReplyUtils.canReplyMsg(g.unsafe())
                                : g.canReply()) && (S = g.msgContextInfo(t));
                            else if (!e.ignoreQuoteErrors)
                              throw new Error(
                                "Could not get the quoted message.",
                              );
                            (delete e.ignoreQuoteErrors,
                              delete e.quotedMessageId);
                          }
                          (e.mentionedJidList &&
                            ((e.mentionedJidList = yield Promise.all(
                              e.mentionedJidList.map(
                                (function () {
                                  var g = r(function* (U) {
                                    const L = window.wa.WidFactory.createWid(U);
                                    if (yield window.wa.QueryExist(L)) return L;
                                  });
                                  return function (U) {
                                    return g.apply(this, arguments);
                                  };
                                })(),
                              ),
                            )),
                            (e.mentionedJidList =
                              e.mentionedJidList.filter(Boolean))),
                            e.groupMentions &&
                              (e.groupMentions = e.groupMentions.map((g) => ({
                                groupSubject: g.subject,
                                groupJid: window.wa.WidFactory.createWid(g.id),
                              }))));
                          let E = {};
                          if (e.location) {
                            let {
                              latitude: g,
                              longitude: U,
                              description: L,
                              url: D,
                            } = e.location;
                            ((D = window.wa.Validators.findLink(D)?.href),
                              D && !L && (L = D),
                              (E = {
                                type: "location",
                                loc: L,
                                lat: g,
                                lng: U,
                                clientUrl: D,
                              }),
                              delete e.location);
                          }
                          let y = {};
                          if (e.poll) {
                            const { pollName: g, pollOptions: U } = e.poll,
                              { allowMultipleAnswers: L, messageSecret: D } =
                                e.poll.options;
                            ((y = {
                              kind: "pollCreation",
                              type: "poll_creation",
                              pollName: g,
                              pollOptions: U,
                              pollSelectableOptionsCount: L ? 0 : 1,
                              messageSecret:
                                Array.isArray(D) && 32 === D.length
                                  ? new Uint8Array(D)
                                  : window.crypto.getRandomValues(
                                      new Uint8Array(32),
                                    ),
                            }),
                              delete e.poll);
                          }
                          let N = {};
                          if (e.contactCard) {
                            let g = window.wa.Contact.get(e.contactCard);
                            ((N = {
                              body: window.wa.VCard.vcardFromContactModel(g)
                                .vcard,
                              type: "vcard",
                              vcardFormattedName: g.formattedName,
                            }),
                              delete e.contactCard);
                          } else if (e.contactCardList)
                            ((N = {
                              type: "multi_vcard",
                              vcardList: e.contactCardList
                                .map((L) => window.wa.Contact.get(L))
                                .map((L) =>
                                  window.wa.VCard.vcardFromContactModel(L),
                                ),
                              body: null,
                            }),
                              delete e.contactCardList);
                          else if (
                            e.parseVCards &&
                            "string" == typeof a &&
                            a.startsWith("BEGIN:VCARD")
                          ) {
                            (delete e.parseVCards, delete e.linkPreview);
                            try {
                              const g = window.wa.VCard.parseVcard(a);
                              g &&
                                (N = {
                                  type: "vcard",
                                  vcardFormattedName:
                                    window.wa.VCard.vcardGetNameFromParsed(g),
                                });
                            } catch {}
                          }
                          if (e.linkPreview) {
                            delete e.linkPreview;
                            const g = window.wa.Validators.findLink(a);
                            if (g) {
                              let U =
                                yield window.wa.LinkPreview.getLinkPreview(g);
                              U &&
                                U.data &&
                                ((U = U.data),
                                (U.preview = !0),
                                (U.subtype = "url"),
                                (e = { ...e, ...U }));
                            }
                          }
                          let v = {};
                          if (e.buttons) {
                            let g;
                            ((g =
                              "chat" === e.buttons.type
                                ? (a = e.buttons.body)
                                : e.caption
                                  ? e.caption
                                  : " "),
                              (v = {
                                productHeaderImageRejected: !1,
                                isFromTemplate: !1,
                                isDynamicReplyButtonsMsg: !0,
                                title: e.buttons.title
                                  ? e.buttons.title
                                  : void 0,
                                footer: e.buttons.footer
                                  ? e.buttons.footer
                                  : void 0,
                                dynamicReplyButtons: e.buttons.buttons,
                                replyButtons: e.buttons.buttons,
                                caption: g,
                              }),
                              delete e.buttons);
                          }
                          let O = {};
                          if (e.list) {
                            if (
                              "smba" === window.wa.Conn.platform ||
                              "smbi" === window.wa.Conn.platform
                            )
                              throw "[LT01] Whatsapp business can't send this yet";
                            ((O = {
                              type: "list",
                              footer: e.list.footer,
                              list: { ...e.list, listType: 1 },
                              body: e.list.description,
                            }),
                              delete e.list,
                              delete O.list.footer);
                          }
                          const T = {};
                          e.invokedBotWid &&
                            ((T.messageSecret = window.crypto.getRandomValues(
                              new Uint8Array(32),
                            )),
                            (T.botMessageSecret =
                              yield window.wa.BotSecret.genBotMsgSecretFromMsgSecret(
                                T.messageSecret,
                              )),
                            (T.invokedBotWid = window.wa.WidFactory.createWid(
                              e.invokedBotWid,
                            )),
                            (T.botPersonaId =
                              window.wa.BotProfiles.BotProfileCollection.get(
                                e.invokedBotWid,
                              ).personaId),
                            delete e.invokedBotWid);
                          const A = window.wa.User.getMaybeMeLidUser(),
                            I = yield o(),
                            b = yield window.wa.MsgKey.newId();
                          let K,
                            G = (t.id.isLid() && A) || I;
                          t.isGroup &&
                            ((G =
                              (t.groupMetadata &&
                                t.groupMetadata.isLidAddressingMode &&
                                A) ||
                              I),
                            (K = window.wa.WidFactory.toUserWid(G)));
                          const k = new window.wa.MsgKey({
                              from: G,
                              to: t.id,
                              id: b,
                              participant: K,
                              selfDir: "out",
                            }),
                            H = e.extraOptions || {};
                          delete e.extraOptions;
                          const de =
                              window.wa.EphemeralFields.getEphemeralFields(t),
                            q = _.toJSON ? _.toJSON() : { ..._ };
                          for (const g of [
                            "caption",
                            "isViewOnce",
                            "preview",
                            "mediaHandle",
                          ])
                            void 0 !== _[g] && (q[g] = _[g]);
                          delete q.id;
                          const V = {
                            ...e,
                            ack: 0,
                            body: a,
                            from: G,
                            to: t.id,
                            local: !0,
                            self: "out",
                            t: parseInt("" + new Date().getTime() / 1e3),
                            isNewMsg: !0,
                            type: "chat",
                            ...de,
                            ...q,
                            ...S,
                            ...E,
                            ...y,
                            ...N,
                            ...v,
                            ...O,
                            ...T,
                            ...H,
                            id: k,
                          };
                          if ((T && delete V.canonicalUrl, f)) {
                            const g = new window.wa.Msg.modelClass(V),
                              U =
                                window.wa.SendChannelMessage.msgDataFromMsgModel(
                                  g,
                                ),
                              L = Object.keys(_).length > 0;
                            (yield window.wa.SendChannelMessage.addNewsletterMsgsRecords(
                              [U],
                            ),
                              t.msgs.add(g),
                              (t.t = g.t));
                            const D =
                              yield window.wa.SendChannelMessage.sendNewsletterMessageJob(
                                {
                                  msg: g,
                                  type:
                                    "chat" === V.type
                                      ? "text"
                                      : L
                                        ? "media"
                                        : "pollCreation",
                                  newsletterJid: t.id.toJid(),
                                  ...(L
                                    ? {
                                        mediaMetadata: g.avParams(),
                                        mediaHandle: L ? _.mediaHandle : null,
                                      }
                                    : {}),
                                },
                              );
                            return (
                              D.success &&
                                ((g.t = D.ack.t), (g.serverId = D.serverId)),
                              g.updateAck(1, !0),
                              yield window.wa.SendChannelMessage.updateNewsletterMsgRecord(
                                g,
                              ),
                              g
                            );
                          }
                          const j =
                            yield window.wa.SendMessage.addAndSendMsgToChat(
                              t,
                              V,
                            );
                          Array.isArray(j) &&
                            (yield Promise.all(
                              j.map((g) => Promise.resolve(g)),
                            ));
                          try {
                            yield window.wa.HistorySync.sendPeerDataOperationRequest(
                              3,
                              { chatId: t.id },
                            );
                          } catch (g) {
                            console.error(
                              "sendPeerDataOperationRequest failed (message already sent):",
                              g,
                            );
                          }
                          return window.wa.Msg.get(k._serialized);
                        });
                        return function (t, a) {
                          return n.apply(this, arguments);
                        };
                      })()));
                    const o = () => {
                      let n = null;
                      try {
                        n = window.wa.User.getMaybeMePnUser();
                      } catch (t) {
                        console.error("Error getting me user 0:", t);
                      }
                      if (!n)
                        try {
                          n = window.wa.User.getMaybeMeUser();
                        } catch (t) {
                          console.error("Error getting me user:", t);
                        }
                      return n;
                    };
                    ((window.WWebJS.editMessage = (function () {
                      var n = r(function* (t, a, e = {}) {
                        const f = e.extraOptions || {};
                        if (
                          (delete e.extraOptions,
                          e.mentionedJidList &&
                            ((e.mentionedJidList = yield Promise.all(
                              e.mentionedJidList.map(
                                (function () {
                                  var S = r(function* (E) {
                                    const y = window.wa.WidFactory.createWid(E);
                                    if (yield window.wa.QueryExist(y)) return y;
                                  });
                                  return function (E) {
                                    return S.apply(this, arguments);
                                  };
                                })(),
                              ),
                            )),
                            (e.mentionedJidList =
                              e.mentionedJidList.filter(Boolean))),
                          e.groupMentions &&
                            (e.groupMentions = e.groupMentions.map((S) => ({
                              groupSubject: S.subject,
                              groupJid: window.wa.WidFactory.createWid(S.id),
                            }))),
                          e.linkPreview)
                        ) {
                          delete e.linkPreview;
                          const S = window.wa.Validators.findLink(a);
                          if (S) {
                            const E =
                              yield window.wa.LinkPreview.getLinkPreview(S);
                            ((E.preview = !0),
                              (E.subtype = "url"),
                              (e = { ...e, ...E }));
                          }
                        }
                        const _ = { ...e, ...f };
                        return (
                          yield window.wa.EditMessage.sendMessageEdit(t, a, _),
                          window.wa.Msg.get(t.id._serialized)
                        );
                      });
                      return function (t, a) {
                        return n.apply(this, arguments);
                      };
                    })()),
                      (window.WWebJS.toStickerData = (function () {
                        var n = r(function* (t) {
                          if ("image/webp" == t.mimetype) return t;
                          const a = window.WWebJS.mediaInfoToFile(t),
                            f =
                              yield (yield window.wa.StickerTools.toWebpSticker(
                                a,
                              )).arrayBuffer();
                          return {
                            mimetype: "image/webp",
                            data: window.WWebJS.arrayBufferToBase64(f),
                          };
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.processStickerData = (function () {
                        var n = r(function* (t) {
                          if ("image/webp" !== t.mimetype)
                            throw new Error("Invalid media type");
                          const a = window.WWebJS.mediaInfoToFile(t);
                          let e = yield window.WWebJS.getFileHash(a),
                            f = yield window.WWebJS.generateHash(32);
                          const _ = new AbortController(),
                            S = yield window.wa.UploadUtils.encryptAndUpload({
                              blob: a,
                              type: "sticker",
                              signal: _.signal,
                              mediaKey: f,
                            });
                          return {
                            ...S,
                            clientUrl: S.url,
                            deprecatedMms3Url: S.url,
                            uploadhash: S.encFilehash,
                            size: a.size,
                            type: "sticker",
                            filehash: e,
                          };
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.processMediaData = (function () {
                        var n = r(function* (
                          t,
                          { forceVoice: a, forceDocument: e, forceGif: f },
                        ) {
                          (() => {
                            const t = [
                              ["OpaqueData", "createFromData"],
                              ["MediaPrep", "prepRawMedia"],
                              ["MediaObject", "getOrCreateMediaObject"],
                              ["MediaTypes", "msgToMediaType"],
                              ["MediaUpload", "uploadMedia"],
                            ]
                              .filter(
                                ([a, e]) =>
                                  "function" != typeof window.wa?.[a]?.[e],
                              )
                              .map(([a, e]) => `wa.${a}.${e}`);
                            if (t.length)
                              throw new Error(
                                `Media modules unavailable (WhatsApp Web bundle changed?): ${t.join(", ")}`,
                              );
                          })();
                          const _ = window.WWebJS.mediaInfoToFile(t),
                            S = yield window.wa.OpaqueData.createFromData(
                              _,
                              _.type,
                            ),
                            y = yield window.wa.MediaPrep.prepRawMedia(S, {
                              asDocument: e,
                            }).waitForPrep(),
                            N = window.wa.MediaObject.getOrCreateMediaObject(
                              y.filehash,
                            ),
                            v = window.wa.MediaTypes.msgToMediaType({
                              type: y.type,
                              isGif: y.isGif,
                            });
                          (a &&
                            "audio" === y.type &&
                            ((y.type = "ptt"),
                            (y.waveform =
                              N.contentInfo.waveform ??
                              (yield window.WWebJS.generateWaveform(_)))),
                            f && "video" === y.type && (y.isGif = !0),
                            e && (y.type = "document"),
                            y.mediaBlob instanceof window.wa.OpaqueData ||
                              (y.mediaBlob =
                                yield window.wa.OpaqueData.createFromData(
                                  y.mediaBlob,
                                  y.mediaBlob.type,
                                )),
                            (y.renderableUrl = y.mediaBlob.url()),
                            N.consolidate(y.toJSON()),
                            y.mediaBlob.autorelease());
                          const T = (yield window.wa.MediaUpload.uploadMedia({
                            mimetype: y.mimetype,
                            mediaObject: N,
                            mediaType: v,
                          })).mediaEntry;
                          if (!T)
                            throw new Error(
                              "upload failed: media entry was not created",
                            );
                          return (
                            y.set({
                              clientUrl: T.mmsUrl,
                              deprecatedMms3Url: T.deprecatedMms3Url,
                              directPath: T.directPath,
                              mediaKey: T.mediaKey,
                              mediaKeyTimestamp: T.mediaKeyTimestamp,
                              filehash: N.filehash,
                              encFilehash: T.encFilehash,
                              uploadhash: T.uploadHash,
                              size: N.size,
                              streamingSidecar: T.sidecar,
                              firstFrameSidecar: T.firstFrameSidecar,
                            }),
                            y
                          );
                        });
                        return function (t, a) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.getMessageModel = (n) => {
                        const t = n.serialize();
                        return (
                          (t.isEphemeral = n.isEphemeral),
                          (t.isStatusV3 = n.isStatusV3),
                          (t.links = window.wa.Validators.findLinks(
                            n.mediaObject ? n.caption : n.body,
                          ).map((a) => ({
                            link: a.href,
                            isSuspicious: !(
                              !a.suspiciousCharacters ||
                              !a.suspiciousCharacters.size
                            ),
                          }))),
                          t.buttons && (t.buttons = t.buttons.serialize()),
                          t.dynamicReplyButtons &&
                            (t.dynamicReplyButtons = JSON.parse(
                              JSON.stringify(t.dynamicReplyButtons),
                            )),
                          t.replyButtons &&
                            (t.replyButtons = JSON.parse(
                              JSON.stringify(t.replyButtons),
                            )),
                          "object" == typeof t.id.remote &&
                            (t.id = Object.assign({}, t.id, {
                              remote: t.id.remote._serialized,
                            })),
                          delete t.pendingAckUpdate,
                          t
                        );
                      }),
                      (window.WWebJS.getPollVoteModel = (function () {
                        var n = r(function* (t) {
                          const a = t.serialize();
                          if (!t.parentMsgKey) return null;
                          const e =
                            window.wa.Msg.get(t.parentMsgKey) ||
                            (yield window.wa.Msg.getMessagesById([
                              t.parentMsgKey,
                            ]))?.messages?.[0];
                          return (
                            e &&
                              (a.parentMessage =
                                window.WWebJS.getMessageModel(e)),
                            a
                          );
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.getChatModel = (function () {
                        var n = r(function* (t) {
                          let a = t.serialize();
                          if (
                            ((a.isGroup = !1),
                            (a.formattedTitle = t.formattedTitle),
                            (a.isMuted = 0 != t.muteExpiration),
                            t.groupMetadata)
                          ) {
                            a.isGroup = !0;
                            const e = window.wa.WidFactory.createWid(
                              t.id._serialized,
                            );
                            (yield window.wa.GroupMetadata.update(e),
                              (a.groupMetadata = t.groupMetadata.serialize()));
                          }
                          if (
                            ((a.lastMessage = null), a.msgs && a.msgs.length)
                          ) {
                            const e = t.lastReceivedKey
                              ? window.wa.Msg.get(
                                  t.lastReceivedKey._serialized,
                                ) ||
                                (yield window.wa.Msg.getMessagesById([
                                  t.lastReceivedKey._serialized,
                                ]))?.messages?.[0]
                              : null;
                            e &&
                              (a.lastMessage =
                                window.WWebJS.getMessageModel(e));
                          }
                          return (
                            delete a.msgs,
                            delete a.msgUnsyncedButtonReplyMsgs,
                            delete a.unsyncedButtonReplies,
                            a
                          );
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.getChat = (function () {
                        var n = r(function* (t, { getAsModel: a = !0 } = {}) {
                          const e = /@\w*newsletter\b/.test(t),
                            f = window.require("WAWebWidFactory").createWid(t);
                          let _;
                          if (e)
                            try {
                              ((_ = window
                                .require("WAWebCollections")
                                .WAWebNewsletterCollection.get(t)),
                                _ ||
                                  (yield window
                                    .require(
                                      "WAWebLoadNewsletterPreviewChatAction",
                                    )
                                    .loadNewsletterPreviewChat(t),
                                  (_ = yield window
                                    .require("WAWebCollections")
                                    .WAWebNewsletterCollection.find(f))));
                            } catch {
                              _ = null;
                            }
                          else
                            _ =
                              window.require("WAWebCollections").Chat.get(f) ||
                              (yield window
                                .require("WAWebFindChatAction")
                                .findOrCreateLatestChat(f))?.chat;
                          return a && _
                            ? yield window.WWebJS.getChatModel(_, {
                                isChannel: e,
                              })
                            : _;
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.getChats = r(function* () {
                        const t = window.wa.Chat.getModelsArray().map((a) =>
                          window.WWebJS.getChatModel(a),
                        );
                        return yield Promise.all(t);
                      })),
                      (window.WWebJS.getContactModel = (n) => {
                        let t = n.serialize();
                        ((t.isBusiness =
                          void 0 !== n.isBusiness && n.isBusiness),
                          n.businessProfile &&
                            (t.businessProfile =
                              n.businessProfile.serialize()));
                        const a = window.compareWwebVersions(
                          window.Debug.VERSION,
                          "<",
                          "2.2327.4",
                        );
                        return (
                          (t.isMe = a
                            ? n.isMe
                            : window.wa.ContactMethods.getIsMe(n)),
                          (t.isUser = a
                            ? n.isUser
                            : window.wa.ContactMethods.getIsUser(n)),
                          (t.isGroup = a
                            ? n.isGroup
                            : window.wa.ContactMethods.getIsGroup(n)),
                          (t.isWAContact = a
                            ? n.isWAContact
                            : window.wa.ContactMethods.getIsWAContact(n)),
                          (t.isMyContact = a
                            ? n.isMyContact
                            : window.wa.ContactMethods.getIsMyContact(n)),
                          (t.isBlocked = n.isContactBlocked),
                          (t.userid = a
                            ? n.userid
                            : window.wa.ContactMethods.getUserid(n)),
                          (t.isEnterprise = a
                            ? n.isEnterprise
                            : window.wa.ContactMethods.getIsEnterprise(n)),
                          (t.verifiedName = a
                            ? n.verifiedName
                            : window.wa.ContactMethods.getVerifiedName(n)),
                          (t.verifiedLevel = a
                            ? n.verifiedLevel
                            : window.wa.ContactMethods.getVerifiedLevel(n)),
                          (t.statusMute = a
                            ? n.statusMute
                            : window.wa.ContactMethods.getStatusMute(n)),
                          (t.name = a
                            ? n.name
                            : window.wa.ContactMethods.getName(n)),
                          (t.shortName = a
                            ? n.shortName
                            : window.wa.ContactMethods.getShortName(n)),
                          (t.pushname = a
                            ? n.pushname
                            : window.wa.ContactMethods.getPushname(n)),
                          t
                        );
                      }),
                      (window.WWebJS.getContact = (function () {
                        var n = r(function* (t) {
                          const a = window.wa.WidFactory.createWid(t),
                            e = yield window.wa.Contact.find(a),
                            f =
                              yield window.wa.BusinessProfile.fetchBizProfile(
                                a,
                              );
                          return (
                            f.profileOptions && (e.businessProfile = f),
                            window.WWebJS.getContactModel(e)
                          );
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.getContacts = () =>
                        window.wa.Contact.getModelsArray().map((t) =>
                          window.WWebJS.getContactModel(t),
                        )),
                      (window.WWebJS.mediaInfoToFile = ({
                        data: n,
                        mimetype: t,
                        filename: a,
                      }) => {
                        const e = window.atob(n),
                          f = new ArrayBuffer(e.length),
                          _ = new Uint8Array(f);
                        for (let E = 0; E < e.length; E++)
                          _[E] = e.charCodeAt(E);
                        const S = new Blob([f], { type: t });
                        return new File([S], a, {
                          type: t,
                          lastModified: Date.now(),
                        });
                      }),
                      (window.WWebJS.arrayBufferToBase64 = (n) => {
                        let t = "";
                        const a = new Uint8Array(n),
                          e = a.byteLength;
                        for (let f = 0; f < e; f++)
                          t += String.fromCharCode(a[f]);
                        return window.btoa(t);
                      }),
                      (window.WWebJS.arrayBufferToBase64Async = (n) =>
                        new Promise((t, a) => {
                          const e = new Blob([n], {
                              type: "application/octet-stream",
                            }),
                            f = new FileReader();
                          ((f.onload = () => {
                            const [, _] = f.result.split(",");
                            t(_);
                          }),
                            (f.onerror = (_) => a(_)),
                            f.readAsDataURL(e));
                        })),
                      (window.WWebJS.getFileHash = (function () {
                        var n = r(function* (t) {
                          let a = yield t.arrayBuffer();
                          const e = yield crypto.subtle.digest("SHA-256", a);
                          return btoa(
                            String.fromCharCode(...new Uint8Array(e)),
                          );
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.generateHash = (function () {
                        var n = r(function* (t) {
                          for (var a = "", _ = 0; _ < t; _++)
                            a +=
                              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
                                Math.floor(62 * Math.random()),
                              );
                          return a;
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.generateWaveform = (function () {
                        var n = r(function* (t) {
                          try {
                            const a = yield t.arrayBuffer(),
                              _ = (yield new AudioContext().decodeAudioData(
                                a,
                              )).getChannelData(0),
                              S = 64,
                              E = Math.floor(_.length / S),
                              y = [];
                            for (let T = 0; T < S; T++) {
                              const A = E * T;
                              let I = 0;
                              for (let b = 0; b < E; b++)
                                I += Math.abs(_[A + b]);
                              y.push(I / E);
                            }
                            const N = Math.pow(Math.max(...y), -1),
                              v = y.map((T) => T * N);
                            return new Uint8Array(
                              v.map((T) => Math.floor(100 * T)),
                            );
                          } catch {
                            return;
                          }
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.sendClearChat = (function () {
                        var n = r(function* (t) {
                          let a = window.wa.Chat.get(t);
                          return (
                            void 0 !== a &&
                            (yield window.wa.SendClear.sendClear(a, !1), !0)
                          );
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.sendDeleteChat = (function () {
                        var n = r(function* (t) {
                          let a = window.wa.Chat.get(t);
                          return (
                            void 0 !== a &&
                            (yield window.wa.SendDelete.sendDelete(a), !0)
                          );
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.sendChatstate = (function () {
                        var n = r(function* (t, a) {
                          switch (
                            ((a = window.wa.WidFactory.createWid(a)), t)
                          ) {
                            case "typing":
                              yield window.wa.ChatState.sendChatStateComposing(
                                a,
                              );
                              break;
                            case "recording":
                              yield window.wa.ChatState.sendChatStateRecording(
                                a,
                              );
                              break;
                            case "stop":
                              yield window.wa.ChatState.sendChatStatePaused(a);
                              break;
                            default:
                              throw "Invalid chatstate";
                          }
                          return !0;
                        });
                        return function (t, a) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.getLabelModel = (n) => {
                        let t = n.serialize();
                        return ((t.hexColor = n.hexColor), t);
                      }),
                      (window.WWebJS.getLabels = () =>
                        window.wa.Label.getModelsArray().map((t) =>
                          window.WWebJS.getLabelModel(t),
                        )),
                      (window.WWebJS.getLabel = (n) => {
                        const t = window.wa.Label.get(n);
                        return window.WWebJS.getLabelModel(t);
                      }),
                      (window.WWebJS.getChatLabels = (function () {
                        var n = r(function* (t) {
                          return (
                            (yield window.WWebJS.getChat(t)).labels || []
                          ).map((e) => window.WWebJS.getLabel(e));
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.getOrderDetail = (function () {
                        var n = r(function* (t, a, e) {
                          const f = window.wa.WidFactory.createWid(e);
                          return window.wa.QueryOrder.queryOrder(
                            f,
                            t,
                            80,
                            80,
                            a,
                          );
                        });
                        return function (t, a, e) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.getProductMetadata = (function () {
                        var n = r(function* (t) {
                          let a = window.wa.Conn.wid,
                            e = yield window.wa.QueryProduct.queryProduct(a, t);
                          if (e && e.data) return e.data;
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.rejectCall = (function () {
                        var n = r(function* (t, a) {
                          t = t.split("@")[0] + "@s.whatsapp.net";
                          let e = o().user + "@s.whatsapp.net";
                          const f = window.wa.SocketWap.wap(
                            "call",
                            {
                              id: window.wa.SocketWap.generateId(),
                              from: window.wa.SocketWap.USER_JID(e),
                              to: window.wa.SocketWap.USER_JID(t),
                            },
                            [
                              window.wa.SocketWap.wap("reject", {
                                "call-id": a,
                                "call-creator": window.wa.SocketWap.USER_JID(t),
                                count: "0",
                              }),
                            ],
                          );
                          yield window.wa.Socket.deprecatedCastStanza(f);
                        });
                        return function (t, a) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.cropAndResizeImage = (function () {
                        var n = r(function* (t, a = {}) {
                          if (!t.mimetype.includes("image"))
                            throw new Error("Media is not an image");
                          (a.mimetype &&
                            !a.mimetype.includes("image") &&
                            delete a.mimetype,
                            (a = Object.assign(
                              {
                                size: 640,
                                mimetype: t.mimetype,
                                quality: 0.75,
                                asDataUrl: !1,
                              },
                              a,
                            )));
                          const e = yield new Promise((v, O) => {
                              const T = new Image();
                              ((T.onload = () => v(T)),
                                (T.onerror = O),
                                (T.src = `data:${t.mimetype};base64,${t.data}`));
                            }),
                            f = Math.min(e.width, e.height),
                            _ = Math.floor((e.width - f) / 2),
                            S = Math.floor((e.height - f) / 2),
                            E = document.createElement("canvas");
                          ((E.width = a.size),
                            (E.height = a.size),
                            E.getContext("2d").drawImage(
                              e,
                              _,
                              S,
                              f,
                              f,
                              0,
                              0,
                              a.size,
                              a.size,
                            ));
                          const N = E.toDataURL(a.mimetype, a.quality);
                          return a.asDataUrl
                            ? N
                            : Object.assign(t, {
                                mimetype: a.mimeType,
                                data: N.replace(
                                  `data:${a.mimeType};base64,`,
                                  "",
                                ),
                              });
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.setPicture = (function () {
                        var n = r(function* (t, a) {
                          const e = yield window.WWebJS.cropAndResizeImage(a, {
                              asDataUrl: !0,
                              mimetype: "image/jpeg",
                              size: 96,
                            }),
                            f = yield window.WWebJS.cropAndResizeImage(a, {
                              asDataUrl: !0,
                              mimetype: "image/jpeg",
                              size: 640,
                            }),
                            _ = window.wa.WidFactory.createWid(t);
                          try {
                            if (!window.wa.ProfilePicThumb.get(t).canSet())
                              return !1;
                            const E = yield window.wa.GroupUtils.sendSetPicture(
                              _,
                              e,
                              f,
                            );
                            return !!E && 200 === E.status;
                          } catch (S) {
                            if ("ServerStatusCodeError" === S.name) return !1;
                            throw S;
                          }
                        });
                        return function (t, a) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.deletePicture = (function () {
                        var n = r(function* (t) {
                          const a = window.wa.WidFactory.createWid(t);
                          try {
                            if (!window.wa.ProfilePicThumb.get(t).canDelete())
                              return !1;
                            const f =
                              yield window.wa.GroupUtils.requestDeletePicture(
                                a,
                              );
                            return !!f && 200 === f.status;
                          } catch (e) {
                            if ("ServerStatusCodeError" === e.name) return !1;
                            throw e;
                          }
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.getProfilePicThumbToBase64 = (function () {
                        var n = r(function* (t) {
                          const a = yield window.wa.ProfilePicThumb.find(t);
                          if (a?.img)
                            try {
                              const f = yield fetch(a.img);
                              if (f.ok) {
                                const _ = yield f.blob();
                                if (_)
                                  return yield ((f) =>
                                    new Promise((_) => {
                                      const S = new FileReader();
                                      ((S.onloadend = function () {
                                        const E = S.result;
                                        if (null == E) _(void 0);
                                        else {
                                          const y = E.toString().split(",")[1];
                                          _(y);
                                        }
                                      }),
                                        S.readAsDataURL(f));
                                    }))(_);
                              }
                            } catch {}
                        });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.getAddParticipantsRpcResult =
                        (function () {
                          var n = r(function* (t, a, e) {
                            const f = t?.isLidAddressingMode
                                ? {
                                    phoneNumber: e,
                                    lid: window.wa.LidUtils.getCurrentLid(e),
                                  }
                                : { phoneNumber: e },
                              _ = window.wa.WidToJid.widToGroupJid(a),
                              S = f.lid
                                ? [
                                    {
                                      participantJid:
                                        window.wa.WidToJid.widToUserJid(f.lid),
                                      phoneNumberMixinArgs: {
                                        anyPhoneNumber:
                                          window.wa.WidToJid.widToUserJid(
                                            f.phoneNumber,
                                          ),
                                      },
                                    },
                                  ]
                                : [
                                    {
                                      participantJid:
                                        window.wa.WidToJid.widToUserJid(
                                          f.phoneNumber,
                                        ),
                                    },
                                  ];
                            let E, y;
                            const N = window.compareWwebVersions(
                                window.Debug.VERSION,
                                "<=",
                                "2.2335.9",
                              ),
                              v = {
                                name: void 0,
                                code: void 0,
                                inviteV4Code: void 0,
                                inviteV4CodeExp: void 0,
                              };
                            try {
                              ((E =
                                yield window.wa.GroupParticipants.sendAddParticipantsRPC(
                                  { participantArgs: S, iqTo: _ },
                                )),
                                (y = N
                                  ? E.value.addParticipant[0]
                                      .addParticipantsParticipantMixins
                                  : E.value.addParticipant[0]
                                      .addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup
                                      .value.addParticipantsParticipantMixins));
                            } catch {
                              return ((v.code = 400), v);
                            }
                            if ("AddParticipantsResponseSuccess" === E.name) {
                              const O = y?.value.error ?? "200";
                              ((v.name = y?.name),
                                (v.code = +O),
                                (v.inviteV4Code = y?.value.addRequestCode),
                                (v.inviteV4CodeExp =
                                  y?.value.addRequestExpiration?.toString()));
                            } else if (
                              "AddParticipantsResponseClientError" === E.name
                            ) {
                              const { code: O } =
                                E.value.errorAddParticipantsClientErrors.value;
                              v.code = +O;
                            } else if (
                              "AddParticipantsResponseServerError" === E.name
                            ) {
                              const { code: O } =
                                E.value.errorServerErrors.value;
                              v.code = +O;
                            }
                            return v;
                          });
                          return function (t, a, e) {
                            return n.apply(this, arguments);
                          };
                        })()),
                      (window.WWebJS.membershipRequestAction = (function () {
                        var n = r(function* (t, a, e, f) {
                          const _ = window.wa.WidFactory.createWid(t),
                            S = yield window.wa.Chat.find(_),
                            E = "Approve" === a;
                          let y,
                            N,
                            v = [];
                          if (
                            (yield window.wa.GroupQueryAndUpdate(_),
                            e?.length
                              ? (!Array.isArray(e) && (e = [e]),
                                (y = e.map((b) =>
                                  window.wa.WidFactory.createWid(b),
                                )))
                              : (y =
                                  S.groupMetadata.membershipApprovalRequests._models.map(
                                    ({ id: b }) => b,
                                  )),
                            !y.length)
                          )
                            return [];
                          const O = y.map((b) => ({
                              participantArgs: [
                                {
                                  participantJid:
                                    window.wa.WidToJid.widToUserJid(b),
                                },
                              ],
                            })),
                            T = window.wa.WidToJid.widToGroupJid(_),
                            A = (b) =>
                              !Array.isArray(b) ||
                              (2 === b.length && b[0] === b[1])
                                ? b
                                : 1 === b.length
                                  ? b[0]
                                  : (b[1] - b[0] < 100 &&
                                      (b[0] = b[1]) &&
                                      (b[1] += 100),
                                    Math.floor(
                                      Math.random() * (b[1] - b[0] + 1),
                                    ) + b[0]),
                            I = {
                              default: `An unknown error occupied while ${E ? "approving" : "rejecting"} the participant membership request`,
                              400: "ParticipantNotFoundError",
                              401: "ParticipantNotAuthorizedError",
                              403: "ParticipantForbiddenError",
                              404: "ParticipantRequestNotFoundError",
                              408: "ParticipantTemporarilyBlockedError",
                              409: "ParticipantConflictError",
                              412: "ParticipantParentLinkedGroupsResourceConstraintError",
                              500: "ParticipantResourceConstraintError",
                            };
                          try {
                            for (const b of O) {
                              if (
                                ((N =
                                  yield window.wa.MembershipRequestUtils.sendMembershipRequestsActionRPC(
                                    {
                                      iqTo: T,
                                      [E ? "approveArgs" : "rejectArgs"]: b,
                                    },
                                  )),
                                "MembershipRequestsActionResponseSuccess" ===
                                  N.name)
                              ) {
                                const G = E
                                  ? N.value.membershipRequestsActionApprove
                                  : N.value.membershipRequestsActionReject;
                                if (G?.participant) {
                                  const [K] = G.participant.map((k) => {
                                    const H = E
                                      ? G.participant[0]
                                          .membershipRequestsActionAcceptParticipantMixins
                                          ?.value.error
                                      : G.participant[0]
                                          .membershipRequestsActionRejectParticipantMixins
                                          ?.value.error;
                                    return {
                                      requesterId:
                                        window.wa.WidFactory.createWid(k.jid)
                                          ._serialized,
                                      ...(H
                                        ? {
                                            error: +H,
                                            message: I[H] || I.default,
                                          }
                                        : {
                                            message:
                                              (E ? "Approved" : "Rejected") +
                                              " successfully",
                                          }),
                                    };
                                  });
                                  K && v.push(K);
                                }
                              } else
                                v.push({
                                  requesterId:
                                    window.wa.JidToWid.userJidToUserWid(
                                      b.participantArgs[0].participantJid,
                                    )._serialized,
                                  message: "ServerStatusCodeError",
                                });
                              f &&
                                O.length > 1 &&
                                O.indexOf(b) !== O.length - 1 &&
                                (yield new Promise((G) => setTimeout(G, A(f))));
                            }
                            return v;
                          } catch {
                            return [];
                          }
                        });
                        return function (t, a, e, f) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.pinUnpinMsgAction = (function () {
                        var n = r(function* (t, a, e) {
                          const f =
                            window.wa.Msg.get(t) ||
                            (yield window.wa.Msg.getMessagesById([t]))
                              ?.messages?.[0];
                          return (
                            !!f &&
                            "OK" ===
                              (yield window.wa.pinUnpinMsg(f, a, e))
                                .messageSendResult
                          );
                        });
                        return function (t, a, e) {
                          return n.apply(this, arguments);
                        };
                      })()),
                      (window.WWebJS.getStatusModel = (n) => {
                        let t = n.serialize();
                        return (
                          delete t._msgs,
                          (t.msgs = n._msgs.map((a) =>
                            window.WWebJS.getMessageModel(a),
                          )),
                          t
                        );
                      }),
                      (window.WWebJS.getAllStatuses = () =>
                        window.wa.Status.getModelsArray().map((t) =>
                          window.WWebJS.getStatusModel(t),
                        )));
                  })(),
                  console.log("[FL] Store ready; notifying content script."),
                  x.notifyLibReady());
              } catch (o) {
                console.error(
                  "[FL] getNewModulesStore failed; libhook will NOT be marked ready:",
                  o,
                );
              }
            })()
          : "UNPAIRED" === o && x.notifyUnPaired());
    }
    function ae() {
      const o = window?.require("WAWebSocketModel")?.Socket;
      if ((console.log("AppState:", o), o)) {
        o.on("change:state", (n, t) => {
          X(t);
        });
        const i = o?.state;
        (X(i), clearInterval(Z));
      }
    }
    function Q() {
      return (Q = r(function* () {
        ((x = new z()), console.log("FL.js Load completed."));
        const o = yield x.notifyChannelReady();
        (console.log(`Within Libhook:${o}`), (Z = setInterval(ae, 1e3)));
      })).apply(this, arguments);
    }
    (console.log("FL.js init ."),
      (function re() {
        Q.apply(this, arguments);
      })());
  })();
})();
