try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "90f35149-3e2f-42c8-99f6-36e3d65dd339", e._sentryDebugIdIdentifier = "sentry-dbid-90f35149-3e2f-42c8-99f6-36e3d65dd339")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9212], {
        13937: function(e) {
            e.exports = function() {
                "use strict";
                var e = "millisecond",
                    t = "second",
                    n = "minute",
                    r = "hour",
                    i = "week",
                    s = "month",
                    o = "quarter",
                    u = "year",
                    a = "date",
                    c = "Invalid Date",
                    d = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    f = function(e, t, n) {
                        var r = String(e);
                        return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e
                    },
                    l = "en",
                    p = {};
                p[l] = {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    ordinal: function(e) {
                        var t = ["th", "st", "nd", "rd"],
                            n = e % 100;
                        return "[" + e + (t[(n - 20) % 10] || t[n] || t[0]) + "]"
                    }
                };
                var y = "$isDayjsObject",
                    m = function(e) {
                        return e instanceof g || !(!e || !e[y])
                    },
                    _ = function e(t, n, r) {
                        var i;
                        if (!t) return l;
                        if ("string" == typeof t) {
                            var s = t.toLowerCase();
                            p[s] && (i = s), n && (p[s] = n, i = s);
                            var o = t.split("-");
                            if (!i && o.length > 1) return e(o[0])
                        } else {
                            var u = t.name;
                            p[u] = t, i = u
                        }
                        return !r && i && (l = i), i || !r && l
                    },
                    v = function(e, t) {
                        if (m(e)) return e.clone();
                        var n = "object" == typeof t ? t : {};
                        return n.date = e, n.args = arguments, new g(n)
                    },
                    S = {
                        s: f,
                        z: function(e) {
                            var t = -e.utcOffset(),
                                n = Math.abs(t);
                            return (t <= 0 ? "+" : "-") + f(Math.floor(n / 60), 2, "0") + ":" + f(n % 60, 2, "0")
                        },
                        m: function e(t, n) {
                            if (t.date() < n.date()) return -e(n, t);
                            var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                                i = t.clone().add(r, s),
                                o = n - i < 0,
                                u = t.clone().add(r + (o ? -1 : 1), s);
                            return +(-(r + (n - i) / (o ? i - u : u - i)) || 0)
                        },
                        a: function(e) {
                            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                        },
                        p: function(c) {
                            return ({
                                M: s,
                                y: u,
                                w: i,
                                d: "day",
                                D: a,
                                h: r,
                                m: n,
                                s: t,
                                ms: e,
                                Q: o
                            })[c] || String(c || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function(e) {
                            return void 0 === e
                        }
                    };
                S.l = _, S.i = m, S.w = function(e, t) {
                    return v(e, {
                        locale: t.$L,
                        utc: t.$u,
                        x: t.$x,
                        $offset: t.$offset
                    })
                };
                var g = function() {
                        function f(e) {
                            this.$L = _(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[y] = !0
                        }
                        var l = f.prototype;
                        return l.parse = function(e) {
                            this.$d = function(e) {
                                var t = e.date,
                                    n = e.utc;
                                if (null === t) return new Date(NaN);
                                if (S.u(t)) return new Date;
                                if (t instanceof Date) return new Date(t);
                                if ("string" == typeof t && !/Z$/i.test(t)) {
                                    var r = t.match(d);
                                    if (r) {
                                        var i = r[2] - 1 || 0,
                                            s = (r[7] || "0").substring(0, 3);
                                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)
                                    }
                                }
                                return new Date(t)
                            }(e), this.init()
                        }, l.init = function() {
                            var e = this.$d;
                            this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                        }, l.$utils = function() {
                            return S
                        }, l.isValid = function() {
                            return this.$d.toString() !== c
                        }, l.isSame = function(e, t) {
                            var n = v(e);
                            return this.startOf(t) <= n && n <= this.endOf(t)
                        }, l.isAfter = function(e, t) {
                            return v(e) < this.startOf(t)
                        }, l.isBefore = function(e, t) {
                            return this.endOf(t) < v(e)
                        }, l.$g = function(e, t, n) {
                            return S.u(e) ? this[t] : this.set(n, e)
                        }, l.unix = function() {
                            return Math.floor(this.valueOf() / 1e3)
                        }, l.valueOf = function() {
                            return this.$d.getTime()
                        }, l.startOf = function(e, o) {
                            var c = this,
                                d = !!S.u(o) || o,
                                h = S.p(e),
                                f = function(e, t) {
                                    var n = S.w(c.$u ? Date.UTC(c.$y, t, e) : new Date(c.$y, t, e), c);
                                    return d ? n : n.endOf("day")
                                },
                                l = function(e, t) {
                                    return S.w(c.toDate()[e].apply(c.toDate("s"), (d ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), c)
                                },
                                p = this.$W,
                                y = this.$M,
                                m = this.$D,
                                _ = "set" + (this.$u ? "UTC" : "");
                            switch (h) {
                                case u:
                                    return d ? f(1, 0) : f(31, 11);
                                case s:
                                    return d ? f(1, y) : f(0, y + 1);
                                case i:
                                    var v = this.$locale().weekStart || 0,
                                        g = (p < v ? p + 7 : p) - v;
                                    return f(d ? m - g : m + (6 - g), y);
                                case "day":
                                case a:
                                    return l(_ + "Hours", 0);
                                case r:
                                    return l(_ + "Minutes", 1);
                                case n:
                                    return l(_ + "Seconds", 2);
                                case t:
                                    return l(_ + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, l.endOf = function(e) {
                            return this.startOf(e, !1)
                        }, l.$set = function(i, o) {
                            var c, d = S.p(i),
                                h = "set" + (this.$u ? "UTC" : ""),
                                f = ((c = {}).day = h + "Date", c[a] = h + "Date", c[s] = h + "Month", c[u] = h + "FullYear", c[r] = h + "Hours", c[n] = h + "Minutes", c[t] = h + "Seconds", c[e] = h + "Milliseconds", c)[d],
                                l = "day" === d ? this.$D + (o - this.$W) : o;
                            if (d === s || d === u) {
                                var p = this.clone().set(a, 1);
                                p.$d[f](l), p.init(), this.$d = p.set(a, Math.min(this.$D, p.daysInMonth())).$d
                            } else f && this.$d[f](l);
                            return this.init(), this
                        }, l.set = function(e, t) {
                            return this.clone().$set(e, t)
                        }, l.get = function(e) {
                            return this[S.p(e)]()
                        }, l.add = function(e, o) {
                            var a, c = this;
                            e = Number(e);
                            var d = S.p(o),
                                h = function(t) {
                                    var n = v(c);
                                    return S.w(n.date(n.date() + Math.round(t * e)), c)
                                };
                            if (d === s) return this.set(s, this.$M + e);
                            if (d === u) return this.set(u, this.$y + e);
                            if ("day" === d) return h(1);
                            if (d === i) return h(7);
                            var f = ((a = {})[n] = 6e4, a[r] = 36e5, a[t] = 1e3, a)[d] || 1,
                                l = this.$d.getTime() + e * f;
                            return S.w(l, this)
                        }, l.subtract = function(e, t) {
                            return this.add(-1 * e, t)
                        }, l.format = function(e) {
                            var t = this,
                                n = this.$locale();
                            if (!this.isValid()) return n.invalidDate || c;
                            var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                                i = S.z(this),
                                s = this.$H,
                                o = this.$m,
                                u = this.$M,
                                a = n.weekdays,
                                d = n.months,
                                f = n.meridiem,
                                l = function(e, n, i, s) {
                                    return e && (e[n] || e(t, r)) || i[n].slice(0, s)
                                },
                                p = function(e) {
                                    return S.s(s % 12 || 12, e, "0")
                                },
                                y = f || function(e, t, n) {
                                    var r = e < 12 ? "AM" : "PM";
                                    return n ? r.toLowerCase() : r
                                };
                            return r.replace(h, function(e, r) {
                                return r || function(e) {
                                    switch (e) {
                                        case "YY":
                                            return String(t.$y).slice(-2);
                                        case "YYYY":
                                            return S.s(t.$y, 4, "0");
                                        case "M":
                                            return u + 1;
                                        case "MM":
                                            return S.s(u + 1, 2, "0");
                                        case "MMM":
                                            return l(n.monthsShort, u, d, 3);
                                        case "MMMM":
                                            return l(d, u);
                                        case "D":
                                            return t.$D;
                                        case "DD":
                                            return S.s(t.$D, 2, "0");
                                        case "d":
                                            return String(t.$W);
                                        case "dd":
                                            return l(n.weekdaysMin, t.$W, a, 2);
                                        case "ddd":
                                            return l(n.weekdaysShort, t.$W, a, 3);
                                        case "dddd":
                                            return a[t.$W];
                                        case "H":
                                            return String(s);
                                        case "HH":
                                            return S.s(s, 2, "0");
                                        case "h":
                                            return p(1);
                                        case "hh":
                                            return p(2);
                                        case "a":
                                            return y(s, o, !0);
                                        case "A":
                                            return y(s, o, !1);
                                        case "m":
                                            return String(o);
                                        case "mm":
                                            return S.s(o, 2, "0");
                                        case "s":
                                            return String(t.$s);
                                        case "ss":
                                            return S.s(t.$s, 2, "0");
                                        case "SSS":
                                            return S.s(t.$ms, 3, "0");
                                        case "Z":
                                            return i
                                    }
                                    return null
                                }(e) || i.replace(":", "")
                            })
                        }, l.utcOffset = function() {
                            return -(15 * Math.round(this.$d.getTimezoneOffset() / 15))
                        }, l.diff = function(e, a, c) {
                            var d, h = this,
                                f = S.p(a),
                                l = v(e),
                                p = (l.utcOffset() - this.utcOffset()) * 6e4,
                                y = this - l,
                                m = function() {
                                    return S.m(h, l)
                                };
                            switch (f) {
                                case u:
                                    d = m() / 12;
                                    break;
                                case s:
                                    d = m();
                                    break;
                                case o:
                                    d = m() / 3;
                                    break;
                                case i:
                                    d = (y - p) / 6048e5;
                                    break;
                                case "day":
                                    d = (y - p) / 864e5;
                                    break;
                                case r:
                                    d = y / 36e5;
                                    break;
                                case n:
                                    d = y / 6e4;
                                    break;
                                case t:
                                    d = y / 1e3;
                                    break;
                                default:
                                    d = y
                            }
                            return c ? d : S.a(d)
                        }, l.daysInMonth = function() {
                            return this.endOf(s).$D
                        }, l.$locale = function() {
                            return p[this.$L]
                        }, l.locale = function(e, t) {
                            if (!e) return this.$L;
                            var n = this.clone(),
                                r = _(e, t, !0);
                            return r && (n.$L = r), n
                        }, l.clone = function() {
                            return S.w(this.$d, this)
                        }, l.toDate = function() {
                            return new Date(this.valueOf())
                        }, l.toJSON = function() {
                            return this.isValid() ? this.toISOString() : null
                        }, l.toISOString = function() {
                            return this.$d.toISOString()
                        }, l.toString = function() {
                            return this.$d.toUTCString()
                        }, f
                    }(),
                    $ = g.prototype;
                return v.prototype = $, [
                    ["$ms", e],
                    ["$s", t],
                    ["$m", n],
                    ["$H", r],
                    ["$W", "day"],
                    ["$M", s],
                    ["$y", u],
                    ["$D", a]
                ].forEach(function(e) {
                    $[e[1]] = function(t) {
                        return this.$g(t, e[0], e[1])
                    }
                }), v.extend = function(e, t) {
                    return e.$i || (e(t, g, v), e.$i = !0), v
                }, v.locale = _, v.isDayjs = m, v.unix = function(e) {
                    return v(1e3 * e)
                }, v.en = p[l], v.Ls = p, v.p = {}, v
            }()
        },
        28556: (e, t, n) => {
            "use strict";
            e.exports = n(83223).style
        },
        39365: (e, t, n) => {
            "use strict";
            n.d(t, {
                HF: () => r.Y,
                xI: () => r.p,
                gz: () => r.V,
                Pj: () => r.ae,
                MN: () => r.ad,
                oM: () => r.t,
                eN: () => r.a2,
                hK: () => r.af,
                df: () => r.d,
                r7: () => r.al
            });
            var r = n(62468);
            n(94845), n(15864), n(84291), n(41412)
        },
        51459: function(e) {
            e.exports = function(e, t, n) {
                t.prototype.isToday = function() {
                    var e = "YYYY-MM-DD",
                        t = n();
                    return this.format(e) === t.format(e)
                }
            }
        },
        62986: function(e) {
            e.exports = function(e, t, n) {
                t.prototype.isYesterday = function() {
                    var e = "YYYY-MM-DD",
                        t = n().subtract(1, "day");
                    return this.format(e) === t.format(e)
                }
            }
        },
        68693: () => {},
        76516: (e, t, n) => {
            "use strict";
            n.d(t, {
                Dk: () => r.Dk,
                Wp: () => r.Wp
            });
            var r = n(94845);
            (0, r.KO)("firebase", "11.10.0", "app")
        },
        83223: (e, t, n) => {
            "use strict";
            var r = n(63335);
            n(68693);
            var i = n(73787),
                s = function(e) {
                    return e && "object" == typeof e && "default" in e ? e : {
                        default: e
                    }
                }(i),
                o = void 0 !== r && r.env && !0,
                u = function(e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                },
                a = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            n = t.name,
                            r = void 0 === n ? "stylesheet" : n,
                            i = t.optimizeForSpeed,
                            s = void 0 === i ? o : i;
                        c(u(r), "`name` must be a string"), this._name = r, this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}", c("boolean" == typeof s, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = s, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                        var a = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
                        this._nonce = a ? a.getAttribute("content") : null
                    }
                    var t, n = e.prototype;
                    return n.setOptimizeForSpeed = function(e) {
                            c("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), c(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                        }, n.isOptimizeForSpeed = function() {
                            return this._optimizeForSpeed
                        }, n.inject = function() {
                            var e = this;
                            if (c(!this._injected, "sheet already injected"), this._injected = !0, "undefined" != typeof window && this._optimizeForSpeed) {
                                this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (o || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                                return
                            }
                            this._serverSheet = {
                                cssRules: [],
                                insertRule: function(t, n) {
                                    return "number" == typeof n ? e._serverSheet.cssRules[n] = {
                                        cssText: t
                                    } : e._serverSheet.cssRules.push({
                                        cssText: t
                                    }), n
                                },
                                deleteRule: function(t) {
                                    e._serverSheet.cssRules[t] = null
                                }
                            }
                        }, n.getSheetForTag = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++)
                                if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                        }, n.getSheet = function() {
                            return this.getSheetForTag(this._tags[this._tags.length - 1])
                        }, n.insertRule = function(e, t) {
                            if (c(u(e), "`insertRule` accepts only strings"), "undefined" == typeof window) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                            if (this._optimizeForSpeed) {
                                var n = this.getSheet();
                                "number" != typeof t && (t = n.cssRules.length);
                                try {
                                    n.insertRule(e, t)
                                } catch (t) {
                                    return o || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                                }
                            } else {
                                var r = this._tags[t];
                                this._tags.push(this.makeStyleTag(this._name, e, r))
                            }
                            return this._rulesCount++
                        }, n.replaceRule = function(e, t) {
                            if (this._optimizeForSpeed || "undefined" == typeof window) {
                                var n = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
                                if (t.trim() || (t = this._deletedRulePlaceholder), !n.cssRules[e]) return e;
                                n.deleteRule(e);
                                try {
                                    n.insertRule(t, e)
                                } catch (r) {
                                    o || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), n.insertRule(this._deletedRulePlaceholder, e)
                                }
                            } else {
                                var r = this._tags[e];
                                c(r, "old rule at index `" + e + "` not found"), r.textContent = t
                            }
                            return e
                        }, n.deleteRule = function(e) {
                            if ("undefined" == typeof window) return void this._serverSheet.deleteRule(e);
                            if (this._optimizeForSpeed) this.replaceRule(e, "");
                            else {
                                var t = this._tags[e];
                                c(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                            }
                        }, n.flush = function() {
                            this._injected = !1, this._rulesCount = 0, "undefined" != typeof window ? (this._tags.forEach(function(e) {
                                return e && e.parentNode.removeChild(e)
                            }), this._tags = []) : this._serverSheet.cssRules = []
                        }, n.cssRules = function() {
                            var e = this;
                            return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, n) {
                                return n ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules, function(t) {
                                    return t.cssText === e._deletedRulePlaceholder ? null : t
                                })) : t.push(null), t
                            }, [])
                        }, n.makeStyleTag = function(e, t, n) {
                            t && c(u(t), "makeStyleTag accepts only strings as second parameter");
                            var r = document.createElement("style");
                            this._nonce && r.setAttribute("nonce", this._nonce), r.type = "text/css", r.setAttribute("data-" + e, ""), t && r.appendChild(document.createTextNode(t));
                            var i = document.head || document.getElementsByTagName("head")[0];
                            return n ? i.insertBefore(r, n) : i.appendChild(r), r
                        }, t = [{
                            key: "length",
                            get: function() {
                                return this._rulesCount
                            }
                        }],
                        function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }(e.prototype, t), e
                }();

            function c(e, t) {
                if (!e) throw Error("StyleSheet: " + t + ".")
            }
            var d = function(e) {
                    for (var t = 5381, n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
                    return t >>> 0
                },
                h = {};

            function f(e, t) {
                if (!t) return "jsx-" + e;
                var n = String(t),
                    r = e + n;
                return h[r] || (h[r] = "jsx-" + d(e + "-" + n)), h[r]
            }

            function l(e, t) {
                "undefined" == typeof window && (t = t.replace(/\/style/gi, "\\/style"));
                var n = e + t;
                return h[n] || (h[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), h[n]
            }
            var p = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            n = t.styleSheet,
                            r = void 0 === n ? null : n,
                            i = t.optimizeForSpeed,
                            s = void 0 !== i && i;
                        this._sheet = r || new a({
                            name: "styled-jsx",
                            optimizeForSpeed: s
                        }), this._sheet.inject(), r && "boolean" == typeof s && (this._sheet.setOptimizeForSpeed(s), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }
                    var t = e.prototype;
                    return t.add = function(e) {
                        var t = this;
                        void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                            return e[t] = 0, e
                        }, {}));
                        var n = this.getIdAndRules(e),
                            r = n.styleId,
                            i = n.rules;
                        if (r in this._instancesCounts) {
                            this._instancesCounts[r] += 1;
                            return
                        }
                        var s = i.map(function(e) {
                            return t._sheet.insertRule(e)
                        }).filter(function(e) {
                            return -1 !== e
                        });
                        this._indices[r] = s, this._instancesCounts[r] = 1
                    }, t.remove = function(e) {
                        var t = this,
                            n = this.getIdAndRules(e).styleId;
                        if (function(e, t) {
                                if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                            }(n in this._instancesCounts, "styleId: `" + n + "` not found"), this._instancesCounts[n] -= 1, this._instancesCounts[n] < 1) {
                            var r = this._fromServer && this._fromServer[n];
                            r ? (r.parentNode.removeChild(r), delete this._fromServer[n]) : (this._indices[n].forEach(function(e) {
                                return t._sheet.deleteRule(e)
                            }), delete this._indices[n]), delete this._instancesCounts[n]
                        }
                    }, t.update = function(e, t) {
                        this.add(t), this.remove(e)
                    }, t.flush = function() {
                        this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }, t.cssRules = function() {
                        var e = this,
                            t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                                return [t, e._fromServer[t]]
                            }) : [],
                            n = this._sheet.cssRules();
                        return t.concat(Object.keys(this._indices).map(function(t) {
                            return [t, e._indices[t].map(function(e) {
                                return n[e].cssText
                            }).join(e._optimizeForSpeed ? "" : "\n")]
                        }).filter(function(e) {
                            return !!e[1]
                        }))
                    }, t.styles = function(e) {
                        var t, n;
                        return t = this.cssRules(), void 0 === (n = e) && (n = {}), t.map(function(e) {
                            var t = e[0],
                                r = e[1];
                            return s.default.createElement("style", {
                                id: "__" + t,
                                key: "__" + t,
                                nonce: n.nonce ? n.nonce : void 0,
                                dangerouslySetInnerHTML: {
                                    __html: r
                                }
                            })
                        })
                    }, t.getIdAndRules = function(e) {
                        var t = e.children,
                            n = e.dynamic,
                            r = e.id;
                        if (n) {
                            var i = f(r, n);
                            return {
                                styleId: i,
                                rules: Array.isArray(t) ? t.map(function(e) {
                                    return l(i, e)
                                }) : [l(i, t)]
                            }
                        }
                        return {
                            styleId: f(r),
                            rules: Array.isArray(t) ? t : [t]
                        }
                    }, t.selectFromServer = function() {
                        return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                            return e[t.id.slice(2)] = t, e
                        }, {})
                    }, e
                }(),
                y = i.createContext(null);
            y.displayName = "StyleSheetContext";
            var m = s.default.useInsertionEffect || s.default.useLayoutEffect,
                _ = "undefined" != typeof window ? new p : void 0;

            function v(e) {
                var t = _ || i.useContext(y);
                return t && ("undefined" == typeof window ? t.add(e) : m(function() {
                    return t.add(e),
                        function() {
                            t.remove(e)
                        }
                }, [e.id, String(e.dynamic)])), null
            }
            v.dynamic = function(e) {
                return e.map(function(e) {
                    return f(e[0], e[1])
                }).join(" ")
            }, t.style = v
        }
    }
]);