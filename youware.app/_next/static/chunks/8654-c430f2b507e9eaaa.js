try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "da41b312-f1e1-469f-9dbf-872a40157b61", e._sentryDebugIdIdentifier = "sentry-dbid-da41b312-f1e1-469f-9dbf-872a40157b61")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2191, 8654], {
        1493: (e, t, n) => {
            n.d(t, {
                Dc: () => u,
                TL: () => l
            });
            var r = n(73787),
                o = n(54273),
                i = n(72011);

            function l(e) {
                let t = function(e) {
                        let t = r.forwardRef((e, t) => {
                            let {
                                children: n,
                                ...i
                            } = e;
                            if (r.isValidElement(n)) {
                                var l;
                                let e, a, u = (l = n, (a = (e = Object.getOwnPropertyDescriptor(l.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? l.ref : (a = (e = Object.getOwnPropertyDescriptor(l, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? l.props.ref : l.props.ref || l.ref),
                                    c = function(e, t) {
                                        let n = { ...t
                                        };
                                        for (let r in t) {
                                            let o = e[r],
                                                i = t[r];
                                            /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                                                let t = i(...e);
                                                return o(...e), t
                                            } : o && (n[r] = o) : "style" === r ? n[r] = { ...o,
                                                ...i
                                            } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                                        }
                                        return { ...e,
                                            ...n
                                        }
                                    }(i, n.props);
                                return n.type !== r.Fragment && (c.ref = t ? (0, o.t)(t, u) : u), r.cloneElement(n, c)
                            }
                            return r.Children.count(n) > 1 ? r.Children.only(null) : null
                        });
                        return t.displayName = `${e}.SlotClone`, t
                    }(e),
                    n = r.forwardRef((e, n) => {
                        let {
                            children: o,
                            ...l
                        } = e, a = r.Children.toArray(o), u = a.find(c);
                        if (u) {
                            let e = u.props.children,
                                o = a.map(t => t !== u ? t : r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null);
                            return (0, i.jsx)(t, { ...l,
                                ref: n,
                                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
                            })
                        }
                        return (0, i.jsx)(t, { ...l,
                            ref: n,
                            children: o
                        })
                    });
                return n.displayName = `${e}.Slot`, n
            }
            var a = Symbol("radix.slottable");

            function u(e) {
                let t = ({
                    children: e
                }) => (0, i.jsx)(i.Fragment, {
                    children: e
                });
                return t.displayName = `${e}.Slottable`, t.__radixId = a, t
            }

            function c(e) {
                return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === a
            }
        },
        2544: (e, t, n) => {
            n.d(t, {
                hO: () => u,
                sG: () => a
            });
            var r = n(73787),
                o = n(45050),
                i = n(1493),
                l = n(72011),
                a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
                    let n = (0, i.TL)(`Primitive.${t}`),
                        o = r.forwardRef((e, r) => {
                            let {
                                asChild: o,
                                ...i
                            } = e;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(o ? n : t, { ...i,
                                ref: r
                            })
                        });
                    return o.displayName = `Primitive.${t}`, { ...e,
                        [t]: o
                    }
                }, {});

            function u(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t))
            }
        },
        2735: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var r = n(73787),
                o = n(72011);

            function i(e, t = []) {
                let n = [],
                    l = () => {
                        let t = n.map(e => r.createContext(e));
                        return function(n) {
                            let o = n ? .[e] || t;
                            return r.useMemo(() => ({
                                [`__scope${e}`]: { ...n,
                                    [e]: o
                                }
                            }), [n, o])
                        }
                    };
                return l.scopeName = e, [function(t, i) {
                    let l = r.createContext(i),
                        a = n.length;
                    n = [...n, i];
                    let u = t => {
                        let {
                            scope: n,
                            children: i,
                            ...u
                        } = t, c = n ? .[e] ? .[a] || l, s = r.useMemo(() => u, Object.values(u));
                        return (0, o.jsx)(c.Provider, {
                            value: s,
                            children: i
                        })
                    };
                    return u.displayName = t + "Provider", [u, function(n, o) {
                        let u = o ? .[e] ? .[a] || l,
                            c = r.useContext(u);
                        if (c) return c;
                        if (void 0 !== i) return i;
                        throw Error(`\`${n}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let n = () => {
                        let n = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let o = n.reduce((t, {
                                useScope: n,
                                scopeName: r
                            }) => {
                                let o = n(e)[`__scope${r}`];
                                return { ...t,
                                    ...o
                                }
                            }, {});
                            return r.useMemo(() => ({
                                [`__scope${t.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return n.scopeName = t.scopeName, n
                }(l, ...t)]
            }
        },
        7905: (e, t, n) => {
            n.d(t, {
                Mz: () => e0,
                i3: () => e7,
                UC: () => e1,
                bL: () => eQ,
                Bk: () => eF
            });
            var r = n(73787);
            let o = ["top", "right", "bottom", "left"],
                i = Math.min,
                l = Math.max,
                a = Math.round,
                u = Math.floor,
                c = e => ({
                    x: e,
                    y: e
                }),
                s = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                f = {
                    start: "end",
                    end: "start"
                };

            function d(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function p(e) {
                return e.split("-")[0]
            }

            function h(e) {
                return e.split("-")[1]
            }

            function m(e) {
                return "x" === e ? "y" : "x"
            }

            function v(e) {
                return "y" === e ? "height" : "width"
            }
            let g = new Set(["top", "bottom"]);

            function y(e) {
                return g.has(p(e)) ? "y" : "x"
            }

            function w(e) {
                return e.replace(/start|end/g, e => f[e])
            }
            let b = ["left", "right"],
                x = ["right", "left"],
                E = ["top", "bottom"],
                C = ["bottom", "top"];

            function R(e) {
                return e.replace(/left|right|bottom|top/g, e => s[e])
            }

            function T(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function A(e) {
                let {
                    x: t,
                    y: n,
                    width: r,
                    height: o
                } = e;
                return {
                    width: r,
                    height: o,
                    top: n,
                    left: t,
                    right: t + r,
                    bottom: n + o,
                    x: t,
                    y: n
                }
            }

            function S(e, t, n) {
                let r, {
                        reference: o,
                        floating: i
                    } = e,
                    l = y(t),
                    a = m(y(t)),
                    u = v(a),
                    c = p(t),
                    s = "y" === l,
                    f = o.x + o.width / 2 - i.width / 2,
                    d = o.y + o.height / 2 - i.height / 2,
                    g = o[u] / 2 - i[u] / 2;
                switch (c) {
                    case "top":
                        r = {
                            x: f,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: f,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        r = {
                            x: o.x + o.width,
                            y: d
                        };
                        break;
                    case "left":
                        r = {
                            x: o.x - i.width,
                            y: d
                        };
                        break;
                    default:
                        r = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (h(t)) {
                    case "start":
                        r[a] -= g * (n && s ? -1 : 1);
                        break;
                    case "end":
                        r[a] += g * (n && s ? -1 : 1)
                }
                return r
            }
            let L = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: l
                } = n, a = i.filter(Boolean), u = await (null == l.isRTL ? void 0 : l.isRTL(t)), c = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: s,
                    y: f
                } = S(c, r, u), d = r, p = {}, h = 0;
                for (let n = 0; n < a.length; n++) {
                    let {
                        name: i,
                        fn: m
                    } = a[n], {
                        x: v,
                        y: g,
                        data: y,
                        reset: w
                    } = await m({
                        x: s,
                        y: f,
                        initialPlacement: r,
                        placement: d,
                        strategy: o,
                        middlewareData: p,
                        rects: c,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    s = null != v ? v : s, f = null != g ? g : f, p = { ...p,
                        [i]: { ...p[i],
                            ...y
                        }
                    }, w && h <= 50 && (h++, "object" == typeof w && (w.placement && (d = w.placement), w.rects && (c = !0 === w.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : w.rects), {
                        x: s,
                        y: f
                    } = S(c, d, u)), n = -1)
                }
                return {
                    x: s,
                    y: f,
                    placement: d,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function P(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: r,
                    y: o,
                    platform: i,
                    rects: l,
                    elements: a,
                    strategy: u
                } = e, {
                    boundary: c = "clippingAncestors",
                    rootBoundary: s = "viewport",
                    elementContext: f = "floating",
                    altBoundary: p = !1,
                    padding: h = 0
                } = d(t, e), m = T(h), v = a[p ? "floating" === f ? "reference" : "floating" : f], g = A(await i.getClippingRect({
                    element: null == (n = await (null == i.isElement ? void 0 : i.isElement(v))) || n ? v : v.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                    boundary: c,
                    rootBoundary: s,
                    strategy: u
                })), y = "floating" === f ? {
                    x: r,
                    y: o,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, w = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), b = await (null == i.isElement ? void 0 : i.isElement(w)) && await (null == i.getScale ? void 0 : i.getScale(w)) || {
                    x: 1,
                    y: 1
                }, x = A(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: a,
                    rect: y,
                    offsetParent: w,
                    strategy: u
                }) : y);
                return {
                    top: (g.top - x.top + m.top) / b.y,
                    bottom: (x.bottom - g.bottom + m.bottom) / b.y,
                    left: (g.left - x.left + m.left) / b.x,
                    right: (x.right - g.right + m.right) / b.x
                }
            }

            function N(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function k(e) {
                return o.some(t => e[t] >= 0)
            }
            let O = new Set(["left", "top"]);
            async function M(e, t) {
                let {
                    placement: n,
                    platform: r,
                    elements: o
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), l = p(n), a = h(n), u = "y" === y(n), c = O.has(l) ? -1 : 1, s = i && u ? -1 : 1, f = d(t, e), {
                    mainAxis: m,
                    crossAxis: v,
                    alignmentAxis: g
                } = "number" == typeof f ? {
                    mainAxis: f,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: f.mainAxis || 0,
                    crossAxis: f.crossAxis || 0,
                    alignmentAxis: f.alignmentAxis
                };
                return a && "number" == typeof g && (v = "end" === a ? -1 * g : g), u ? {
                    x: v * s,
                    y: m * c
                } : {
                    x: m * c,
                    y: v * s
                }
            }

            function D() {
                return "undefined" != typeof window
            }

            function j(e) {
                return I(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function _(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function F(e) {
                var t;
                return null == (t = (I(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function I(e) {
                return !!D() && (e instanceof Node || e instanceof _(e).Node)
            }

            function W(e) {
                return !!D() && (e instanceof Element || e instanceof _(e).Element)
            }

            function B(e) {
                return !!D() && (e instanceof HTMLElement || e instanceof _(e).HTMLElement)
            }

            function H(e) {
                return !!D() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof _(e).ShadowRoot)
            }
            let z = new Set(["inline", "contents"]);

            function U(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = ee(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !z.has(o)
            }
            let $ = new Set(["table", "td", "th"]),
                V = [":popover-open", ":modal"];

            function X(e) {
                return V.some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }
            let Y = ["transform", "translate", "scale", "rotate", "perspective"],
                G = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
                K = ["paint", "layout", "strict", "content"];

            function Z(e) {
                let t = q(),
                    n = W(e) ? ee(e) : e;
                return Y.some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || G.some(e => (n.willChange || "").includes(e)) || K.some(e => (n.contain || "").includes(e))
            }

            function q() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }
            let J = new Set(["html", "body", "#document"]);

            function Q(e) {
                return J.has(j(e))
            }

            function ee(e) {
                return _(e).getComputedStyle(e)
            }

            function et(e) {
                return W(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function en(e) {
                if ("html" === j(e)) return e;
                let t = e.assignedSlot || e.parentNode || H(e) && e.host || F(e);
                return H(t) ? t.host : t
            }

            function er(e, t, n) {
                var r;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                let o = function e(t) {
                        let n = en(t);
                        return Q(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : B(n) && U(n) ? n : e(n)
                    }(e),
                    i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    l = _(o);
                if (i) {
                    let e = eo(l);
                    return t.concat(l, l.visualViewport || [], U(o) ? o : [], e && n ? er(e) : [])
                }
                return t.concat(o, er(o, [], n))
            }

            function eo(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }

            function ei(e) {
                let t = ee(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    o = B(e),
                    i = o ? e.offsetWidth : n,
                    l = o ? e.offsetHeight : r,
                    u = a(n) !== i || a(r) !== l;
                return u && (n = i, r = l), {
                    width: n,
                    height: r,
                    $: u
                }
            }

            function el(e) {
                return W(e) ? e : e.contextElement
            }

            function ea(e) {
                let t = el(e);
                if (!B(t)) return c(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: o,
                        $: i
                    } = ei(t),
                    l = (i ? a(n.width) : n.width) / r,
                    u = (i ? a(n.height) : n.height) / o;
                return l && Number.isFinite(l) || (l = 1), u && Number.isFinite(u) || (u = 1), {
                    x: l,
                    y: u
                }
            }
            let eu = c(0);

            function ec(e) {
                let t = _(e);
                return q() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : eu
            }

            function es(e, t, n, r) {
                var o;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let i = e.getBoundingClientRect(),
                    l = el(e),
                    a = c(1);
                t && (r ? W(r) && (a = ea(r)) : a = ea(e));
                let u = (void 0 === (o = n) && (o = !1), r && (!o || r === _(l)) && o) ? ec(l) : c(0),
                    s = (i.left + u.x) / a.x,
                    f = (i.top + u.y) / a.y,
                    d = i.width / a.x,
                    p = i.height / a.y;
                if (l) {
                    let e = _(l),
                        t = r && W(r) ? _(r) : r,
                        n = e,
                        o = eo(n);
                    for (; o && r && t !== n;) {
                        let e = ea(o),
                            t = o.getBoundingClientRect(),
                            r = ee(o),
                            i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                        s *= e.x, f *= e.y, d *= e.x, p *= e.y, s += i, f += l, o = eo(n = _(o))
                    }
                }
                return A({
                    width: d,
                    height: p,
                    x: s,
                    y: f
                })
            }

            function ef(e, t) {
                let n = et(e).scrollLeft;
                return t ? t.left + n : es(F(e)).left + n
            }

            function ed(e, t, n) {
                void 0 === n && (n = !1);
                let r = e.getBoundingClientRect();
                return {
                    x: r.left + t.scrollLeft - (n ? 0 : ef(e, r)),
                    y: r.top + t.scrollTop
                }
            }
            let ep = new Set(["absolute", "fixed"]);

            function eh(e, t, n) {
                let r;
                if ("viewport" === t) r = function(e, t) {
                    let n = _(e),
                        r = F(e),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        l = r.clientHeight,
                        a = 0,
                        u = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        let e = q();
                        (!e || e && "fixed" === t) && (a = o.offsetLeft, u = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: u
                    }
                }(e, n);
                else if ("document" === t) r = function(e) {
                    let t = F(e),
                        n = et(e),
                        r = e.ownerDocument.body,
                        o = l(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        i = l(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        a = -n.scrollLeft + ef(e),
                        u = -n.scrollTop;
                    return "rtl" === ee(r).direction && (a += l(t.clientWidth, r.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: a,
                        y: u
                    }
                }(F(e));
                else if (W(t)) r = function(e, t) {
                    let n = es(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft,
                        i = B(e) ? ea(e) : c(1),
                        l = e.clientWidth * i.x,
                        a = e.clientHeight * i.y;
                    return {
                        width: l,
                        height: a,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
                else {
                    let n = ec(e);
                    r = {
                        x: t.x - n.x,
                        y: t.y - n.y,
                        width: t.width,
                        height: t.height
                    }
                }
                return A(r)
            }

            function em(e) {
                return "static" === ee(e).position
            }

            function ev(e, t) {
                if (!B(e) || "fixed" === ee(e).position) return null;
                if (t) return t(e);
                let n = e.offsetParent;
                return F(e) === n && (n = n.ownerDocument.body), n
            }

            function eg(e, t) {
                var n;
                let r = _(e);
                if (X(e)) return r;
                if (!B(e)) {
                    let t = en(e);
                    for (; t && !Q(t);) {
                        if (W(t) && !em(t)) return t;
                        t = en(t)
                    }
                    return r
                }
                let o = ev(e, t);
                for (; o && (n = o, $.has(j(n))) && em(o);) o = ev(o, t);
                return o && Q(o) && em(o) && !Z(o) ? r : o || function(e) {
                    let t = en(e);
                    for (; B(t) && !Q(t);) {
                        if (Z(t)) return t;
                        if (X(t)) break;
                        t = en(t)
                    }
                    return null
                }(e) || r
            }
            let ey = async function(e) {
                    let t = this.getOffsetParent || eg,
                        n = this.getDimensions,
                        r = await n(e.floating);
                    return {
                        reference: function(e, t, n) {
                            let r = B(t),
                                o = F(t),
                                i = "fixed" === n,
                                l = es(e, !0, i, t),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                u = c(0);
                            if (r || !r && !i)
                                if (("body" !== j(t) || U(o)) && (a = et(t)), r) {
                                    let e = es(t, !0, i, t);
                                    u.x = e.x + t.clientLeft, u.y = e.y + t.clientTop
                                } else o && (u.x = ef(o));
                            i && !r && o && (u.x = ef(o));
                            let s = !o || r || i ? c(0) : ed(o, a);
                            return {
                                x: l.left + a.scrollLeft - u.x - s.x,
                                y: l.top + a.scrollTop - u.y - s.y,
                                width: l.width,
                                height: l.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: r.width,
                            height: r.height
                        }
                    }
                },
                ew = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: n,
                            offsetParent: r,
                            strategy: o
                        } = e, i = "fixed" === o, l = F(r), a = !!t && X(t.floating);
                        if (r === l || a && i) return n;
                        let u = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            s = c(1),
                            f = c(0),
                            d = B(r);
                        if ((d || !d && !i) && (("body" !== j(r) || U(l)) && (u = et(r)), B(r))) {
                            let e = es(r);
                            s = ea(r), f.x = e.x + r.clientLeft, f.y = e.y + r.clientTop
                        }
                        let p = !l || d || i ? c(0) : ed(l, u, !0);
                        return {
                            width: n.width * s.x,
                            height: n.height * s.y,
                            x: n.x * s.x - u.scrollLeft * s.x + f.x + p.x,
                            y: n.y * s.y - u.scrollTop * s.y + f.y + p.y
                        }
                    },
                    getDocumentElement: F,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: n,
                            rootBoundary: r,
                            strategy: o
                        } = e, a = [..."clippingAncestors" === n ? X(t) ? [] : function(e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = er(e, [], !1).filter(e => W(e) && "body" !== j(e)),
                                o = null,
                                i = "fixed" === ee(e).position,
                                l = i ? en(e) : e;
                            for (; W(l) && !Q(l);) {
                                let t = ee(l),
                                    n = Z(l);
                                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && !!o && ep.has(o.position) || U(l) && !n && function e(t, n) {
                                    let r = en(t);
                                    return !(r === n || !W(r) || Q(r)) && ("fixed" === ee(r).position || e(r, n))
                                }(e, l)) ? r = r.filter(e => e !== l) : o = t, l = en(l)
                            }
                            return t.set(e, r), r
                        }(t, this._c) : [].concat(n), r], u = a[0], c = a.reduce((e, n) => {
                            let r = eh(t, n, o);
                            return e.top = l(r.top, e.top), e.right = i(r.right, e.right), e.bottom = i(r.bottom, e.bottom), e.left = l(r.left, e.left), e
                        }, eh(t, u, o));
                        return {
                            width: c.right - c.left,
                            height: c.bottom - c.top,
                            x: c.left,
                            y: c.top
                        }
                    },
                    getOffsetParent: eg,
                    getElementRects: ey,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: n
                        } = ei(e);
                        return {
                            width: t,
                            height: n
                        }
                    },
                    getScale: ea,
                    isElement: W,
                    isRTL: function(e) {
                        return "rtl" === ee(e).direction
                    }
                };

            function eb(e, t) {
                return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
            }
            let ex = e => ({
                name: "arrow",
                options: e,
                async fn(t) {
                    let {
                        x: n,
                        y: r,
                        placement: o,
                        rects: a,
                        platform: u,
                        elements: c,
                        middlewareData: s
                    } = t, {
                        element: f,
                        padding: p = 0
                    } = d(e, t) || {};
                    if (null == f) return {};
                    let g = T(p),
                        w = {
                            x: n,
                            y: r
                        },
                        b = m(y(o)),
                        x = v(b),
                        E = await u.getDimensions(f),
                        C = "y" === b,
                        R = C ? "clientHeight" : "clientWidth",
                        A = a.reference[x] + a.reference[b] - w[b] - a.floating[x],
                        S = w[b] - a.reference[b],
                        L = await (null == u.getOffsetParent ? void 0 : u.getOffsetParent(f)),
                        P = L ? L[R] : 0;
                    P && await (null == u.isElement ? void 0 : u.isElement(L)) || (P = c.floating[R] || a.floating[x]);
                    let N = P / 2 - E[x] / 2 - 1,
                        k = i(g[C ? "top" : "left"], N),
                        O = i(g[C ? "bottom" : "right"], N),
                        M = P - E[x] - O,
                        D = P / 2 - E[x] / 2 + (A / 2 - S / 2),
                        j = l(k, i(D, M)),
                        _ = !s.arrow && null != h(o) && D !== j && a.reference[x] / 2 - (D < k ? k : O) - E[x] / 2 < 0,
                        F = _ ? D < k ? D - k : D - M : 0;
                    return {
                        [b]: w[b] + F,
                        data: {
                            [b]: j,
                            centerOffset: D - j - F,
                            ..._ && {
                                alignmentOffset: F
                            }
                        },
                        reset: _
                    }
                }
            });
            var eE = n(45050),
                eC = "undefined" != typeof document ? r.useLayoutEffect : function() {};

            function eR(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!eR(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !eR(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function eT(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function eA(e, t) {
                let n = eT(e);
                return Math.round(t * n) / n
            }

            function eS(e) {
                let t = r.useRef(e);
                return eC(() => {
                    t.current = e
                }), t
            }
            var eL = n(2544),
                eP = n(72011),
                eN = r.forwardRef((e, t) => {
                    let {
                        children: n,
                        width: r = 10,
                        height: o = 5,
                        ...i
                    } = e;
                    return (0, eP.jsx)(eL.sG.svg, { ...i,
                        ref: t,
                        width: r,
                        height: o,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none",
                        children: e.asChild ? n : (0, eP.jsx)("polygon", {
                            points: "0,0 30,0 15,10"
                        })
                    })
                });
            eN.displayName = "Arrow";
            var ek = n(54273),
                eO = n(2735),
                eM = n(40530),
                eD = n(14282),
                ej = "Popper",
                [e_, eF] = (0, eO.A)(ej),
                [eI, eW] = e_(ej),
                eB = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [o, i] = r.useState(null);
                    return (0, eP.jsx)(eI, {
                        scope: t,
                        anchor: o,
                        onAnchorChange: i,
                        children: n
                    })
                };
            eB.displayName = ej;
            var eH = "PopperAnchor",
                ez = r.forwardRef((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: o,
                        ...i
                    } = e, l = eW(eH, n), a = r.useRef(null), u = (0, ek.s)(t, a);
                    return r.useEffect(() => {
                        l.onAnchorChange((null == o ? void 0 : o.current) || a.current)
                    }), o ? null : (0, eP.jsx)(eL.sG.div, { ...i,
                        ref: u
                    })
                });
            ez.displayName = eH;
            var eU = "PopperContent",
                [e$, eV] = e_(eU),
                eX = r.forwardRef((e, t) => {
                    var n, o, a, c, s, f, g, T;
                    let {
                        __scopePopper: A,
                        side: S = "bottom",
                        sideOffset: D = 0,
                        align: j = "center",
                        alignOffset: _ = 0,
                        arrowPadding: I = 0,
                        avoidCollisions: W = !0,
                        collisionBoundary: B = [],
                        collisionPadding: H = 0,
                        sticky: z = "partial",
                        hideWhenDetached: U = !1,
                        updatePositionStrategy: $ = "optimized",
                        onPlaced: V,
                        ...X
                    } = e, Y = eW(eU, A), [G, K] = r.useState(null), Z = (0, ek.s)(t, e => K(e)), [q, J] = r.useState(null), Q = function(e) {
                        let [t, n] = r.useState(void 0);
                        return (0, eD.N)(() => {
                            if (e) {
                                n({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                let t = new ResizeObserver(t => {
                                    let r, o;
                                    if (!Array.isArray(t) || !t.length) return;
                                    let i = t[0];
                                    if ("borderBoxSize" in i) {
                                        let e = i.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        r = t.inlineSize, o = t.blockSize
                                    } else r = e.offsetWidth, o = e.offsetHeight;
                                    n({
                                        width: r,
                                        height: o
                                    })
                                });
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            n(void 0)
                        }, [e]), t
                    }(q), ee = null != (g = null == Q ? void 0 : Q.width) ? g : 0, et = null != (T = null == Q ? void 0 : Q.height) ? T : 0, en = "number" == typeof H ? H : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...H
                    }, eo = Array.isArray(B) ? B : [B], ei = eo.length > 0, ea = {
                        padding: en,
                        boundary: eo.filter(eZ),
                        altBoundary: ei
                    }, {
                        refs: eu,
                        floatingStyles: ec,
                        placement: ef,
                        isPositioned: ed,
                        middlewareData: ep
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: n = "absolute",
                            middleware: o = [],
                            platform: i,
                            elements: {
                                reference: l,
                                floating: a
                            } = {},
                            transform: u = !0,
                            whileElementsMounted: c,
                            open: s
                        } = e, [f, d] = r.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [p, h] = r.useState(o);
                        eR(p, o) || h(o);
                        let [m, v] = r.useState(null), [g, y] = r.useState(null), w = r.useCallback(e => {
                            e !== C.current && (C.current = e, v(e))
                        }, []), b = r.useCallback(e => {
                            e !== R.current && (R.current = e, y(e))
                        }, []), x = l || m, E = a || g, C = r.useRef(null), R = r.useRef(null), T = r.useRef(f), A = null != c, S = eS(c), P = eS(i), N = eS(s), k = r.useCallback(() => {
                            if (!C.current || !R.current) return;
                            let e = {
                                placement: t,
                                strategy: n,
                                middleware: p
                            };
                            P.current && (e.platform = P.current), ((e, t, n) => {
                                let r = new Map,
                                    o = {
                                        platform: ew,
                                        ...n
                                    },
                                    i = { ...o.platform,
                                        _c: r
                                    };
                                return L(e, t, { ...o,
                                    platform: i
                                })
                            })(C.current, R.current, e).then(e => {
                                let t = { ...e,
                                    isPositioned: !1 !== N.current
                                };
                                O.current && !eR(T.current, t) && (T.current = t, eE.flushSync(() => {
                                    d(t)
                                }))
                            })
                        }, [p, t, n, P, N]);
                        eC(() => {
                            !1 === s && T.current.isPositioned && (T.current.isPositioned = !1, d(e => ({ ...e,
                                isPositioned: !1
                            })))
                        }, [s]);
                        let O = r.useRef(!1);
                        eC(() => (O.current = !0, () => {
                            O.current = !1
                        }), []), eC(() => {
                            if (x && (C.current = x), E && (R.current = E), x && E) {
                                if (S.current) return S.current(x, E, k);
                                k()
                            }
                        }, [x, E, k, S, A]);
                        let M = r.useMemo(() => ({
                                reference: C,
                                floating: R,
                                setReference: w,
                                setFloating: b
                            }), [w, b]),
                            D = r.useMemo(() => ({
                                reference: x,
                                floating: E
                            }), [x, E]),
                            j = r.useMemo(() => {
                                let e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!D.floating) return e;
                                let t = eA(D.floating, f.x),
                                    r = eA(D.floating, f.y);
                                return u ? { ...e,
                                    transform: "translate(" + t + "px, " + r + "px)",
                                    ...eT(D.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: r
                                }
                            }, [n, u, D.floating, f.x, f.y]);
                        return r.useMemo(() => ({ ...f,
                            update: k,
                            refs: M,
                            elements: D,
                            floatingStyles: j
                        }), [f, k, M, D, j])
                    }({
                        strategy: "fixed",
                        placement: S + ("center" !== j ? "-" + j : ""),
                        whileElementsMounted: function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return function(e, t, n, r) {
                                let o;
                                void 0 === r && (r = {});
                                let {
                                    ancestorScroll: a = !0,
                                    ancestorResize: c = !0,
                                    elementResize: s = "function" == typeof ResizeObserver,
                                    layoutShift: f = "function" == typeof IntersectionObserver,
                                    animationFrame: d = !1
                                } = r, p = el(e), h = a || c ? [...p ? er(p) : [], ...er(t)] : [];
                                h.forEach(e => {
                                    a && e.addEventListener("scroll", n, {
                                        passive: !0
                                    }), c && e.addEventListener("resize", n)
                                });
                                let m = p && f ? function(e, t) {
                                        let n, r = null,
                                            o = F(e);

                                        function a() {
                                            var e;
                                            clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                                        }
                                        return ! function c(s, f) {
                                            void 0 === s && (s = !1), void 0 === f && (f = 1), a();
                                            let d = e.getBoundingClientRect(),
                                                {
                                                    left: p,
                                                    top: h,
                                                    width: m,
                                                    height: v
                                                } = d;
                                            if (s || t(), !m || !v) return;
                                            let g = u(h),
                                                y = u(o.clientWidth - (p + m)),
                                                w = {
                                                    rootMargin: -g + "px " + -y + "px " + -u(o.clientHeight - (h + v)) + "px " + -u(p) + "px",
                                                    threshold: l(0, i(1, f)) || 1
                                                },
                                                b = !0;

                                            function x(t) {
                                                let r = t[0].intersectionRatio;
                                                if (r !== f) {
                                                    if (!b) return c();
                                                    r ? c(!1, r) : n = setTimeout(() => {
                                                        c(!1, 1e-7)
                                                    }, 1e3)
                                                }
                                                1 !== r || eb(d, e.getBoundingClientRect()) || c(), b = !1
                                            }
                                            try {
                                                r = new IntersectionObserver(x, { ...w,
                                                    root: o.ownerDocument
                                                })
                                            } catch (e) {
                                                r = new IntersectionObserver(x, w)
                                            }
                                            r.observe(e)
                                        }(!0), a
                                    }(p, n) : null,
                                    v = -1,
                                    g = null;
                                s && (g = new ResizeObserver(e => {
                                    let [r] = e;
                                    r && r.target === p && g && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
                                        var e;
                                        null == (e = g) || e.observe(t)
                                    })), n()
                                }), p && !d && g.observe(p), g.observe(t));
                                let y = d ? es(e) : null;
                                return d && function t() {
                                    let r = es(e);
                                    y && !eb(y, r) && n(), y = r, o = requestAnimationFrame(t)
                                }(), n(), () => {
                                    var e;
                                    h.forEach(e => {
                                        a && e.removeEventListener("scroll", n), c && e.removeEventListener("resize", n)
                                    }), null == m || m(), null == (e = g) || e.disconnect(), g = null, d && cancelAnimationFrame(o)
                                }
                            }(...t, {
                                animationFrame: "always" === $
                            })
                        },
                        elements: {
                            reference: Y.anchor
                        },
                        middleware: [((e, t) => ({ ... function(e) {
                                return void 0 === e && (e = 0), {
                                    name: "offset",
                                    options: e,
                                    async fn(t) {
                                        var n, r;
                                        let {
                                            x: o,
                                            y: i,
                                            placement: l,
                                            middlewareData: a
                                        } = t, u = await M(t, e);
                                        return l === (null == (n = a.offset) ? void 0 : n.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
                                            x: o + u.x,
                                            y: i + u.y,
                                            data: { ...u,
                                                placement: l
                                            }
                                        }
                                    }
                                }
                            }(e),
                            options: [e, t]
                        }))({
                            mainAxis: D + et,
                            alignmentAxis: _
                        }), W && ((e, t) => ({ ... function(e) {
                                return void 0 === e && (e = {}), {
                                    name: "shift",
                                    options: e,
                                    async fn(t) {
                                        let {
                                            x: n,
                                            y: r,
                                            placement: o
                                        } = t, {
                                            mainAxis: a = !0,
                                            crossAxis: u = !1,
                                            limiter: c = {
                                                fn: e => {
                                                    let {
                                                        x: t,
                                                        y: n
                                                    } = e;
                                                    return {
                                                        x: t,
                                                        y: n
                                                    }
                                                }
                                            },
                                            ...s
                                        } = d(e, t), f = {
                                            x: n,
                                            y: r
                                        }, h = await P(t, s), v = y(p(o)), g = m(v), w = f[g], b = f[v];
                                        if (a) {
                                            let e = "y" === g ? "top" : "left",
                                                t = "y" === g ? "bottom" : "right",
                                                n = w + h[e],
                                                r = w - h[t];
                                            w = l(n, i(w, r))
                                        }
                                        if (u) {
                                            let e = "y" === v ? "top" : "left",
                                                t = "y" === v ? "bottom" : "right",
                                                n = b + h[e],
                                                r = b - h[t];
                                            b = l(n, i(b, r))
                                        }
                                        let x = c.fn({ ...t,
                                            [g]: w,
                                            [v]: b
                                        });
                                        return { ...x,
                                            data: {
                                                x: x.x - n,
                                                y: x.y - r,
                                                enabled: {
                                                    [g]: a,
                                                    [v]: u
                                                }
                                            }
                                        }
                                    }
                                }
                            }(e),
                            options: [e, t]
                        }))({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === z ? ((e, t) => ({ ... function(e) {
                                    return void 0 === e && (e = {}), {
                                        options: e,
                                        fn(t) {
                                            let {
                                                x: n,
                                                y: r,
                                                placement: o,
                                                rects: i,
                                                middlewareData: l
                                            } = t, {
                                                offset: a = 0,
                                                mainAxis: u = !0,
                                                crossAxis: c = !0
                                            } = d(e, t), s = {
                                                x: n,
                                                y: r
                                            }, f = y(o), h = m(f), v = s[h], g = s[f], w = d(a, t), b = "number" == typeof w ? {
                                                mainAxis: w,
                                                crossAxis: 0
                                            } : {
                                                mainAxis: 0,
                                                crossAxis: 0,
                                                ...w
                                            };
                                            if (u) {
                                                let e = "y" === h ? "height" : "width",
                                                    t = i.reference[h] - i.floating[e] + b.mainAxis,
                                                    n = i.reference[h] + i.reference[e] - b.mainAxis;
                                                v < t ? v = t : v > n && (v = n)
                                            }
                                            if (c) {
                                                var x, E;
                                                let e = "y" === h ? "width" : "height",
                                                    t = O.has(p(o)),
                                                    n = i.reference[f] - i.floating[e] + (t && (null == (x = l.offset) ? void 0 : x[f]) || 0) + (t ? 0 : b.crossAxis),
                                                    r = i.reference[f] + i.reference[e] + (t ? 0 : (null == (E = l.offset) ? void 0 : E[f]) || 0) - (t ? b.crossAxis : 0);
                                                g < n ? g = n : g > r && (g = r)
                                            }
                                            return {
                                                [h]: v,
                                                [f]: g
                                            }
                                        }
                                    }
                                }(e),
                                options: [e, t]
                            }))() : void 0,
                            ...ea
                        }), W && ((e, t) => ({ ... function(e) {
                                return void 0 === e && (e = {}), {
                                    name: "flip",
                                    options: e,
                                    async fn(t) {
                                        var n, r, o, i, l;
                                        let {
                                            placement: a,
                                            middlewareData: u,
                                            rects: c,
                                            initialPlacement: s,
                                            platform: f,
                                            elements: g
                                        } = t, {
                                            mainAxis: T = !0,
                                            crossAxis: A = !0,
                                            fallbackPlacements: S,
                                            fallbackStrategy: L = "bestFit",
                                            fallbackAxisSideDirection: N = "none",
                                            flipAlignment: k = !0,
                                            ...O
                                        } = d(e, t);
                                        if (null != (n = u.arrow) && n.alignmentOffset) return {};
                                        let M = p(a),
                                            D = y(s),
                                            j = p(s) === s,
                                            _ = await (null == f.isRTL ? void 0 : f.isRTL(g.floating)),
                                            F = S || (j || !k ? [R(s)] : function(e) {
                                                let t = R(e);
                                                return [w(e), t, w(t)]
                                            }(s)),
                                            I = "none" !== N;
                                        !S && I && F.push(... function(e, t, n, r) {
                                            let o = h(e),
                                                i = function(e, t, n) {
                                                    switch (e) {
                                                        case "top":
                                                        case "bottom":
                                                            if (n) return t ? x : b;
                                                            return t ? b : x;
                                                        case "left":
                                                        case "right":
                                                            return t ? E : C;
                                                        default:
                                                            return []
                                                    }
                                                }(p(e), "start" === n, r);
                                            return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(w)))), i
                                        }(s, k, N, _));
                                        let W = [s, ...F],
                                            B = await P(t, O),
                                            H = [],
                                            z = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                                        if (T && H.push(B[M]), A) {
                                            let e = function(e, t, n) {
                                                void 0 === n && (n = !1);
                                                let r = h(e),
                                                    o = m(y(e)),
                                                    i = v(o),
                                                    l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                                return t.reference[i] > t.floating[i] && (l = R(l)), [l, R(l)]
                                            }(a, c, _);
                                            H.push(B[e[0]], B[e[1]])
                                        }
                                        if (z = [...z, {
                                                placement: a,
                                                overflows: H
                                            }], !H.every(e => e <= 0)) {
                                            let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                                                t = W[e];
                                            if (t && ("alignment" !== A || D === y(t) || z.every(e => y(e.placement) !== D || e.overflows[0] > 0))) return {
                                                data: {
                                                    index: e,
                                                    overflows: z
                                                },
                                                reset: {
                                                    placement: t
                                                }
                                            };
                                            let n = null == (i = z.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                            if (!n) switch (L) {
                                                case "bestFit":
                                                    {
                                                        let e = null == (l = z.filter(e => {
                                                            if (I) {
                                                                let t = y(e.placement);
                                                                return t === D || "y" === t
                                                            }
                                                            return !0
                                                        }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];e && (n = e);
                                                        break
                                                    }
                                                case "initialPlacement":
                                                    n = s
                                            }
                                            if (a !== n) return {
                                                reset: {
                                                    placement: n
                                                }
                                            }
                                        }
                                        return {}
                                    }
                                }
                            }(e),
                            options: [e, t]
                        }))({ ...ea
                        }), ((e, t) => ({ ... function(e) {
                                return void 0 === e && (e = {}), {
                                    name: "size",
                                    options: e,
                                    async fn(t) {
                                        var n, r;
                                        let o, a, {
                                                placement: u,
                                                rects: c,
                                                platform: s,
                                                elements: f
                                            } = t,
                                            {
                                                apply: m = () => {},
                                                ...v
                                            } = d(e, t),
                                            g = await P(t, v),
                                            w = p(u),
                                            b = h(u),
                                            x = "y" === y(u),
                                            {
                                                width: E,
                                                height: C
                                            } = c.floating;
                                        "top" === w || "bottom" === w ? (o = w, a = b === (await (null == s.isRTL ? void 0 : s.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (a = w, o = "end" === b ? "top" : "bottom");
                                        let R = C - g.top - g.bottom,
                                            T = E - g.left - g.right,
                                            A = i(C - g[o], R),
                                            S = i(E - g[a], T),
                                            L = !t.middlewareData.shift,
                                            N = A,
                                            k = S;
                                        if (null != (n = t.middlewareData.shift) && n.enabled.x && (k = T), null != (r = t.middlewareData.shift) && r.enabled.y && (N = R), L && !b) {
                                            let e = l(g.left, 0),
                                                t = l(g.right, 0),
                                                n = l(g.top, 0),
                                                r = l(g.bottom, 0);
                                            x ? k = E - 2 * (0 !== e || 0 !== t ? e + t : l(g.left, g.right)) : N = C - 2 * (0 !== n || 0 !== r ? n + r : l(g.top, g.bottom))
                                        }
                                        await m({ ...t,
                                            availableWidth: k,
                                            availableHeight: N
                                        });
                                        let O = await s.getDimensions(f.floating);
                                        return E !== O.width || C !== O.height ? {
                                            reset: {
                                                rects: !0
                                            }
                                        } : {}
                                    }
                                }
                            }(e),
                            options: [e, t]
                        }))({ ...ea,
                            apply: e => {
                                let {
                                    elements: t,
                                    rects: n,
                                    availableWidth: r,
                                    availableHeight: o
                                } = e, {
                                    width: i,
                                    height: l
                                } = n.reference, a = t.floating.style;
                                a.setProperty("--radix-popper-available-width", "".concat(r, "px")), a.setProperty("--radix-popper-available-height", "".concat(o, "px")), a.setProperty("--radix-popper-anchor-width", "".concat(i, "px")), a.setProperty("--radix-popper-anchor-height", "".concat(l, "px"))
                            }
                        }), q && ((e, t) => ({ ...(e => ({
                                name: "arrow",
                                options: e,
                                fn(t) {
                                    let {
                                        element: n,
                                        padding: r
                                    } = "function" == typeof e ? e(t) : e;
                                    return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? ex({
                                        element: n.current,
                                        padding: r
                                    }).fn(t) : {} : n ? ex({
                                        element: n,
                                        padding: r
                                    }).fn(t) : {}
                                }
                            }))(e),
                            options: [e, t]
                        }))({
                            element: q,
                            padding: I
                        }), eq({
                            arrowWidth: ee,
                            arrowHeight: et
                        }), U && ((e, t) => ({ ... function(e) {
                                return void 0 === e && (e = {}), {
                                    name: "hide",
                                    options: e,
                                    async fn(t) {
                                        let {
                                            rects: n
                                        } = t, {
                                            strategy: r = "referenceHidden",
                                            ...o
                                        } = d(e, t);
                                        switch (r) {
                                            case "referenceHidden":
                                                {
                                                    let e = N(await P(t, { ...o,
                                                        elementContext: "reference"
                                                    }), n.reference);
                                                    return {
                                                        data: {
                                                            referenceHiddenOffsets: e,
                                                            referenceHidden: k(e)
                                                        }
                                                    }
                                                }
                                            case "escaped":
                                                {
                                                    let e = N(await P(t, { ...o,
                                                        altBoundary: !0
                                                    }), n.floating);
                                                    return {
                                                        data: {
                                                            escapedOffsets: e,
                                                            escaped: k(e)
                                                        }
                                                    }
                                                }
                                            default:
                                                return {}
                                        }
                                    }
                                }
                            }(e),
                            options: [e, t]
                        }))({
                            strategy: "referenceHidden",
                            ...ea
                        })]
                    }), [eh, em] = eJ(ef), ev = (0, eM.c)(V);
                    (0, eD.N)(() => {
                        ed && (null == ev || ev())
                    }, [ed, ev]);
                    let eg = null == (n = ep.arrow) ? void 0 : n.x,
                        ey = null == (o = ep.arrow) ? void 0 : o.y,
                        eN = (null == (a = ep.arrow) ? void 0 : a.centerOffset) !== 0,
                        [eO, ej] = r.useState();
                    return (0, eD.N)(() => {
                        G && ej(window.getComputedStyle(G).zIndex)
                    }, [G]), (0, eP.jsx)("div", {
                        ref: eu.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...ec,
                            transform: ed ? ec.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: eO,
                            "--radix-popper-transform-origin": [null == (c = ep.transformOrigin) ? void 0 : c.x, null == (s = ep.transformOrigin) ? void 0 : s.y].join(" "),
                            ...(null == (f = ep.hide) ? void 0 : f.referenceHidden) && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, eP.jsx)(e$, {
                            scope: A,
                            placedSide: eh,
                            onArrowChange: J,
                            arrowX: eg,
                            arrowY: ey,
                            shouldHideArrow: eN,
                            children: (0, eP.jsx)(eL.sG.div, {
                                "data-side": eh,
                                "data-align": em,
                                ...X,
                                ref: Z,
                                style: { ...X.style,
                                    animation: ed ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            eX.displayName = eU;
            var eY = "PopperArrow",
                eG = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                eK = r.forwardRef(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...r
                    } = e, o = eV(eY, n), i = eG[o.placedSide];
                    return (0, eP.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [i]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[o.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[o.placedSide],
                            visibility: o.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, eP.jsx)(eN, { ...r,
                            ref: t,
                            style: { ...r.style,
                                display: "block"
                            }
                        })
                    })
                });

            function eZ(e) {
                return null !== e
            }
            eK.displayName = eY;
            var eq = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, o, i, l;
                    let {
                        placement: a,
                        rects: u,
                        middlewareData: c
                    } = t, s = (null == (n = c.arrow) ? void 0 : n.centerOffset) !== 0, f = s ? 0 : e.arrowWidth, d = s ? 0 : e.arrowHeight, [p, h] = eJ(a), m = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[h], v = (null != (i = null == (r = c.arrow) ? void 0 : r.x) ? i : 0) + f / 2, g = (null != (l = null == (o = c.arrow) ? void 0 : o.y) ? l : 0) + d / 2, y = "", w = "";
                    return "bottom" === p ? (y = s ? m : "".concat(v, "px"), w = "".concat(-d, "px")) : "top" === p ? (y = s ? m : "".concat(v, "px"), w = "".concat(u.floating.height + d, "px")) : "right" === p ? (y = "".concat(-d, "px"), w = s ? m : "".concat(g, "px")) : "left" === p && (y = "".concat(u.floating.width + d, "px"), w = s ? m : "".concat(g, "px")), {
                        data: {
                            x: y,
                            y: w
                        }
                    }
                }
            });

            function eJ(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            var eQ = eB,
                e0 = ez,
                e1 = eX,
                e7 = eK
        },
        14282: (e, t, n) => {
            n.d(t, {
                N: () => o
            });
            var r = n(73787),
                o = globalThis ? .document ? r.useLayoutEffect : () => {}
        },
        16112: (e, t, n) => {
            function r(e, ...t) {
                let n = new String(String.raw(e, ...t));
                return n.__sentry_template_string__ = e.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s"), n.__sentry_template_values__ = t, n
            }
            n.d(t, {
                S: () => o,
                y: () => r
            });
            let o = r
        },
        36254: (e, t, n) => {
            n.d(t, {
                i: () => a
            });
            var r, o = n(73787),
                i = n(14282),
                l = (r || (r = n.t(o, 2)))[" useInsertionEffect ".trim().toString()] || i.N;

            function a({
                prop: e,
                defaultProp: t,
                onChange: n = () => {},
                caller: r
            }) {
                let [i, a, u] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let [n, r] = o.useState(e), i = o.useRef(n), a = o.useRef(t);
                    return l(() => {
                        a.current = t
                    }, [t]), o.useEffect(() => {
                        i.current !== n && (a.current ? .(n), i.current = n)
                    }, [n, i]), [n, r, a]
                }({
                    defaultProp: t,
                    onChange: n
                }), c = void 0 !== e, s = c ? e : i; {
                    let t = o.useRef(void 0 !== e);
                    o.useEffect(() => {
                        let e = t.current;
                        if (e !== c) {
                            let t = c ? "controlled" : "uncontrolled";
                            console.warn(`${r} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
                        }
                        t.current = c
                    }, [c, r])
                }
                return [s, o.useCallback(t => {
                    if (c) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && u.current ? .(n)
                    } else a(t)
                }, [c, e, a, u])]
            }
            Symbol("RADIX:SYNC_STATE")
        },
        40370: (e, t, n) => {
            n.d(t, {
                B: () => u
            });
            var r, o = n(73787),
                i = n(14282),
                l = (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => void 0),
                a = 0;

            function u(e) {
                let [t, n] = o.useState(l());
                return (0, i.N)(() => {
                    e || n(e => e ? ? String(a++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        40530: (e, t, n) => {
            n.d(t, {
                c: () => o
            });
            var r = n(73787);

            function o(e) {
                let t = r.useRef(e);
                return r.useEffect(() => {
                    t.current = e
                }), r.useMemo(() => (...e) => t.current ? .(...e), [])
            }
        },
        42156: (e, t, n) => {
            n.d(t, {
                Mz: () => eY,
                i3: () => eq,
                UC: () => eZ,
                ZL: () => eK,
                bL: () => eX,
                l9: () => eG
            });
            var r, o, i = n(73787),
                l = n(65537),
                a = n(54273),
                u = n(2735),
                c = n(67231),
                s = 0;

            function f() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
            }
            var d = n(2544),
                p = n(40530),
                h = n(72011),
                m = "focusScope.autoFocusOnMount",
                v = "focusScope.autoFocusOnUnmount",
                g = {
                    bubbles: !1,
                    cancelable: !0
                },
                y = i.forwardRef((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: l,
                        ...u
                    } = e, [c, s] = i.useState(null), f = (0, p.c)(o), y = (0, p.c)(l), C = i.useRef(null), R = (0, a.s)(t, e => s(e)), T = i.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    i.useEffect(() => {
                        if (r) {
                            let e = function(e) {
                                    if (T.paused || !c) return;
                                    let t = e.target;
                                    c.contains(t) ? C.current = t : x(C.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (T.paused || !c) return;
                                    let t = e.relatedTarget;
                                    null !== t && (c.contains(t) || x(C.current, {
                                        select: !0
                                    }))
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && x(c)
                            });
                            return c && n.observe(c, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, c, T.paused]), i.useEffect(() => {
                        if (c) {
                            E.add(T);
                            let e = document.activeElement;
                            if (!c.contains(e)) {
                                let t = new CustomEvent(m, g);
                                c.addEventListener(m, f), c.dispatchEvent(t), t.defaultPrevented || (function(e) {
                                    let {
                                        select: t = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.activeElement;
                                    for (let r of e)
                                        if (x(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(w(c).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && x(c))
                            }
                            return () => {
                                c.removeEventListener(m, f), setTimeout(() => {
                                    let t = new CustomEvent(v, g);
                                    c.addEventListener(v, y), c.dispatchEvent(t), t.defaultPrevented || x(null != e ? e : document.body, {
                                        select: !0
                                    }), c.removeEventListener(v, y), E.remove(T)
                                }, 0)
                            }
                        }
                    }, [c, f, y, T]);
                    let A = i.useCallback(e => {
                        if (!n && !r || T.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, i] = function(e) {
                                    let t = w(e);
                                    return [b(t, e), b(t.reverse(), e)]
                                }(t);
                            r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && x(i, {
                                select: !0
                            })) : (e.preventDefault(), n && x(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, T.paused]);
                    return (0, h.jsx)(d.sG.div, {
                        tabIndex: -1,
                        ...u,
                        ref: R,
                        onKeyDown: A
                    })
                });

            function w(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function b(e, t) {
                for (let n of e)
                    if (! function(e, t) {
                            let {
                                upTo: n
                            } = t;
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === n || e !== n);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function x(e) {
                let {
                    select: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            y.displayName = "FocusScope";
            var E = function() {
                let e = [];
                return {
                    add(t) {
                        let n = e[0];
                        t !== n && (null == n || n.pause()), (e = C(e, t)).unshift(t)
                    },
                    remove(t) {
                        var n;
                        null == (n = (e = C(e, t))[0]) || n.resume()
                    }
                }
            }();

            function C(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
            var R = n(40370),
                T = n(7905),
                A = n(67414),
                S = n(92787),
                L = n(1493),
                P = n(36254),
                N = new WeakMap,
                k = new WeakMap,
                O = {},
                M = 0,
                D = function(e) {
                    return e && (e.host || D(e.parentNode))
                },
                j = function(e, t, n, r) {
                    var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var n = D(e);
                        return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    O[n] || (O[n] = new WeakMap);
                    var i = O[n],
                        l = [],
                        a = new Set,
                        u = new Set(o),
                        c = function(e) {
                            !e || a.has(e) || (a.add(e), c(e.parentNode))
                        };
                    o.forEach(c);
                    var s = function(e) {
                        !e || u.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (a.has(e)) s(e);
                            else try {
                                var t = e.getAttribute(r),
                                    o = null !== t && "false" !== t,
                                    u = (N.get(e) || 0) + 1,
                                    c = (i.get(e) || 0) + 1;
                                N.set(e, u), i.set(e, c), l.push(e), 1 === u && o && k.set(e, !0), 1 === c && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                            } catch (t) {
                                console.error("aria-hidden: cannot operate on ", e, t)
                            }
                        })
                    };
                    return s(t), a.clear(), M++,
                        function() {
                            l.forEach(function(e) {
                                var t = N.get(e) - 1,
                                    o = i.get(e) - 1;
                                N.set(e, t), i.set(e, o), t || (k.has(e) || e.removeAttribute(r), k.delete(e)), o || e.removeAttribute(n)
                            }), --M || (N = new WeakMap, N = new WeakMap, k = new WeakMap, O = {})
                        }
                },
                _ = function(e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var r = Array.from(Array.isArray(e) ? e : [e]),
                        o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), j(r, o, n, "aria-hidden")) : function() {
                        return null
                    }
                },
                F = n(53647),
                I = "right-scroll-bar-position",
                W = "width-before-scroll-bar";

            function B(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }
            var H = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
                z = new WeakMap;

            function U(e) {
                return e
            }
            var $ = function(e) {
                    void 0 === e && (e = {});
                    var t, n, r, o = (void 0 === t && (t = U), n = [], r = !1, {
                        read: function() {
                            if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                            return n.length ? n[n.length - 1] : null
                        },
                        useMedium: function(e) {
                            var o = t(e, r);
                            return n.push(o),
                                function() {
                                    n = n.filter(function(e) {
                                        return e !== o
                                    })
                                }
                        },
                        assignSyncMedium: function(e) {
                            for (r = !0; n.length;) {
                                var t = n;
                                n = [], t.forEach(e)
                            }
                            n = {
                                push: function(t) {
                                    return e(t)
                                },
                                filter: function() {
                                    return n
                                }
                            }
                        },
                        assignMedium: function(e) {
                            r = !0;
                            var t = [];
                            if (n.length) {
                                var o = n;
                                n = [], o.forEach(e), t = n
                            }
                            var i = function() {
                                    var n = t;
                                    t = [], n.forEach(e)
                                },
                                l = function() {
                                    return Promise.resolve().then(i)
                                };
                            l(), n = {
                                push: function(e) {
                                    t.push(e), l()
                                },
                                filter: function(e) {
                                    return t = t.filter(e), n
                                }
                            }
                        }
                    });
                    return o.options = (0, F.Cl)({
                        async: !0,
                        ssr: !1
                    }, e), o
                }(),
                V = function() {},
                X = i.forwardRef(function(e, t) {
                    var n, r, o, l, a = i.useRef(null),
                        u = i.useState({
                            onScrollCapture: V,
                            onWheelCapture: V,
                            onTouchMoveCapture: V
                        }),
                        c = u[0],
                        s = u[1],
                        f = e.forwardProps,
                        d = e.children,
                        p = e.className,
                        h = e.removeScrollBar,
                        m = e.enabled,
                        v = e.shards,
                        g = e.sideCar,
                        y = e.noRelative,
                        w = e.noIsolation,
                        b = e.inert,
                        x = e.allowPinchZoom,
                        E = e.as,
                        C = e.gapMode,
                        R = (0, F.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        T = (n = [a, t], r = function(e) {
                            return n.forEach(function(t) {
                                return B(t, e)
                            })
                        }, (o = (0, i.useState)(function() {
                            return {
                                value: null,
                                callback: r,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(value) {
                                        var e = o.value;
                                        e !== value && (o.value = value, o.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = r, l = o.facade, H(function() {
                            var e = z.get(l);
                            if (e) {
                                var t = new Set(e),
                                    r = new Set(n),
                                    o = l.current;
                                t.forEach(function(e) {
                                    r.has(e) || B(e, null)
                                }), r.forEach(function(e) {
                                    t.has(e) || B(e, o)
                                })
                            }
                            z.set(l, n)
                        }, [n]), l),
                        A = (0, F.Cl)((0, F.Cl)({}, R), c);
                    return i.createElement(i.Fragment, null, m && i.createElement(g, {
                        sideCar: $,
                        removeScrollBar: h,
                        shards: v,
                        noRelative: y,
                        noIsolation: w,
                        inert: b,
                        setCallbacks: s,
                        allowPinchZoom: !!x,
                        lockRef: a,
                        gapMode: C
                    }), f ? i.cloneElement(i.Children.only(d), (0, F.Cl)((0, F.Cl)({}, A), {
                        ref: T
                    })) : i.createElement(void 0 === E ? "div" : E, (0, F.Cl)({}, A, {
                        className: p,
                        ref: T
                    }), d))
                });
            X.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, X.classNames = {
                fullWidth: W,
                zeroRight: I
            };
            var Y = function(e) {
                var t = e.sideCar,
                    n = (0, F.Tt)(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = t.read();
                if (!r) throw Error("Sidecar medium not found");
                return i.createElement(r, (0, F.Cl)({}, n))
            };
            Y.isSideCarExport = !0;
            var G = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(r) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = o || n.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var i, l;
                                (i = t).styleSheet ? i.styleSheet.cssText = r : i.appendChild(document.createTextNode(r)), l = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(l)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                K = function() {
                    var e = G();
                    return function(t, n) {
                        i.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && n])
                    }
                },
                Z = function() {
                    var e = K();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                q = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                J = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                Q = function(e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [J(n), J(r), J(o)]
                },
                ee = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return q;
                    var t = Q(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                et = Z(),
                en = "data-scroll-locked",
                er = function(e, t, n, r) {
                    var o = e.left,
                        i = e.top,
                        l = e.right,
                        a = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(a, "px ").concat(r, ";\n  }\n  body[").concat(en, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(I, " {\n    right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(W, " {\n    margin-right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(I, " .").concat(I, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(W, " .").concat(W, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(en, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
                },
                eo = function() {
                    var e = parseInt(document.body.getAttribute(en) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                ei = function() {
                    i.useEffect(function() {
                        return document.body.setAttribute(en, (eo() + 1).toString()),
                            function() {
                                var e = eo() - 1;
                                e <= 0 ? document.body.removeAttribute(en) : document.body.setAttribute(en, e.toString())
                            }
                    }, [])
                },
                el = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        o = void 0 === r ? "margin" : r;
                    ei();
                    var l = i.useMemo(function() {
                        return ee(o)
                    }, [o]);
                    return i.createElement(et, {
                        styles: er(l, !t, o, n ? "" : "!important")
                    })
                },
                ea = !1;
            if ("undefined" != typeof window) try {
                var eu = Object.defineProperty({}, "passive", {
                    get: function() {
                        return ea = !0, !0
                    }
                });
                window.addEventListener("test", eu, eu), window.removeEventListener("test", eu, eu)
            } catch (e) {
                ea = !1
            }
            var ec = !!ea && {
                    passive: !1
                },
                es = function(e, t) {
                    if (!(e instanceof Element)) return !1;
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && (n.overflowY !== n.overflowX || "TEXTAREA" === e.tagName || "visible" !== n[t])
                },
                ef = function(e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), ed(e, r)) {
                            var o = ep(e, r);
                            if (o[1] > o[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== n.body);
                    return !1
                },
                ed = function(e, t) {
                    return "v" === e ? es(t, "overflowY") : es(t, "overflowX")
                },
                ep = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                eh = function(e, t, n, r, o) {
                    var i, l = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                        a = l * r,
                        u = n.target,
                        c = t.contains(u),
                        s = !1,
                        f = a > 0,
                        d = 0,
                        p = 0;
                    do {
                        if (!u) break;
                        var h = ep(e, u),
                            m = h[0],
                            v = h[1] - h[2] - l * m;
                        (m || v) && ed(e, u) && (d += v, p += m);
                        var g = u.parentNode;
                        u = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g
                    } while (!c && u !== document.body || c && (t.contains(u) || t === u));
                    return f && (o && 1 > Math.abs(d) || !o && a > d) ? s = !0 : !f && (o && 1 > Math.abs(p) || !o && -a > p) && (s = !0), s
                },
                em = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                ev = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                eg = function(e) {
                    return e && "current" in e ? e.current : e
                },
                ey = 0,
                ew = [];
            let eb = (r = function(e) {
                var t = i.useRef([]),
                    n = i.useRef([0, 0]),
                    r = i.useRef(),
                    o = i.useState(ey++)[0],
                    l = i.useState(Z)[0],
                    a = i.useRef(e);
                i.useEffect(function() {
                    a.current = e
                }, [e]), i.useEffect(function() {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-".concat(o));
                        var t = (0, F.fX)([e.lockRef.current], (e.shards || []).map(eg), !0).filter(Boolean);
                        return t.forEach(function(e) {
                                return e.classList.add("allow-interactivity-".concat(o))
                            }),
                            function() {
                                document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                                    return e.classList.remove("allow-interactivity-".concat(o))
                                })
                            }
                    }
                }, [e.inert, e.lockRef.current, e.shards]);
                var u = i.useCallback(function(e, t) {
                        if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !a.current.allowPinchZoom;
                        var o, i = em(e),
                            l = n.current,
                            u = "deltaX" in e ? e.deltaX : l[0] - i[0],
                            c = "deltaY" in e ? e.deltaY : l[1] - i[1],
                            s = e.target,
                            f = Math.abs(u) > Math.abs(c) ? "h" : "v";
                        if ("touches" in e && "h" === f && "range" === s.type) return !1;
                        var d = ef(f, s);
                        if (!d) return !0;
                        if (d ? o = f : (o = "v" === f ? "h" : "v", d = ef(f, s)), !d) return !1;
                        if (!r.current && "changedTouches" in e && (u || c) && (r.current = o), !o) return !0;
                        var p = r.current || o;
                        return eh(p, t, e, "h" === p ? u : c, !0)
                    }, []),
                    c = i.useCallback(function(e) {
                        if (ew.length && ew[ew.length - 1] === l) {
                            var n = "deltaY" in e ? ev(e) : em(e),
                                r = t.current.filter(function(t) {
                                    var r;
                                    return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta, r[0] === n[0] && r[1] === n[1])
                                })[0];
                            if (r && r.should) {
                                e.cancelable && e.preventDefault();
                                return
                            }
                            if (!r) {
                                var o = (a.current.shards || []).map(eg).filter(Boolean).filter(function(t) {
                                    return t.contains(e.target)
                                });
                                (o.length > 0 ? u(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault()
                            }
                        }
                    }, []),
                    s = i.useCallback(function(e, n, r, o) {
                        var i = {
                            name: e,
                            delta: n,
                            target: r,
                            should: o,
                            shadowParent: function(e) {
                                for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                                return t
                            }(r)
                        };
                        t.current.push(i), setTimeout(function() {
                            t.current = t.current.filter(function(e) {
                                return e !== i
                            })
                        }, 1)
                    }, []),
                    f = i.useCallback(function(e) {
                        n.current = em(e), r.current = void 0
                    }, []),
                    d = i.useCallback(function(t) {
                        s(t.type, ev(t), t.target, u(t, e.lockRef.current))
                    }, []),
                    p = i.useCallback(function(t) {
                        s(t.type, em(t), t.target, u(t, e.lockRef.current))
                    }, []);
                i.useEffect(function() {
                    return ew.push(l), e.setCallbacks({
                            onScrollCapture: d,
                            onWheelCapture: d,
                            onTouchMoveCapture: p
                        }), document.addEventListener("wheel", c, ec), document.addEventListener("touchmove", c, ec), document.addEventListener("touchstart", f, ec),
                        function() {
                            ew = ew.filter(function(e) {
                                return e !== l
                            }), document.removeEventListener("wheel", c, ec), document.removeEventListener("touchmove", c, ec), document.removeEventListener("touchstart", f, ec)
                        }
                }, []);
                var h = e.removeScrollBar,
                    m = e.inert;
                return i.createElement(i.Fragment, null, m ? i.createElement(l, {
                    styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                }) : null, h ? i.createElement(el, {
                    noRelative: e.noRelative,
                    gapMode: e.gapMode
                }) : null)
            }, $.useMedium(r), Y);
            var ex = i.forwardRef(function(e, t) {
                return i.createElement(X, (0, F.Cl)({}, e, {
                    ref: t,
                    sideCar: eb
                }))
            });
            ex.classNames = X.classNames;
            var eE = "Popover",
                [eC, eR] = (0, u.A)(eE, [T.Bk]),
                eT = (0, T.Bk)(),
                [eA, eS] = eC(eE),
                eL = e => {
                    let {
                        __scopePopover: t,
                        children: n,
                        open: r,
                        defaultOpen: o,
                        onOpenChange: l,
                        modal: a = !1
                    } = e, u = eT(t), c = i.useRef(null), [s, f] = i.useState(!1), [d, p] = (0, P.i)({
                        prop: r,
                        defaultProp: null != o && o,
                        onChange: l,
                        caller: eE
                    });
                    return (0, h.jsx)(T.bL, { ...u,
                        children: (0, h.jsx)(eA, {
                            scope: t,
                            contentId: (0, R.B)(),
                            triggerRef: c,
                            open: d,
                            onOpenChange: p,
                            onOpenToggle: i.useCallback(() => p(e => !e), [p]),
                            hasCustomAnchor: s,
                            onCustomAnchorAdd: i.useCallback(() => f(!0), []),
                            onCustomAnchorRemove: i.useCallback(() => f(!1), []),
                            modal: a,
                            children: n
                        })
                    })
                };
            eL.displayName = eE;
            var eP = "PopoverAnchor",
                eN = i.forwardRef((e, t) => {
                    let {
                        __scopePopover: n,
                        ...r
                    } = e, o = eS(eP, n), l = eT(n), {
                        onCustomAnchorAdd: a,
                        onCustomAnchorRemove: u
                    } = o;
                    return i.useEffect(() => (a(), () => u()), [a, u]), (0, h.jsx)(T.Mz, { ...l,
                        ...r,
                        ref: t
                    })
                });
            eN.displayName = eP;
            var ek = "PopoverTrigger",
                eO = i.forwardRef((e, t) => {
                    let {
                        __scopePopover: n,
                        ...r
                    } = e, o = eS(ek, n), i = eT(n), u = (0, a.s)(t, o.triggerRef), c = (0, h.jsx)(d.sG.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": o.open,
                        "aria-controls": o.contentId,
                        "data-state": eV(o.open),
                        ...r,
                        ref: u,
                        onClick: (0, l.m)(e.onClick, o.onOpenToggle)
                    });
                    return o.hasCustomAnchor ? c : (0, h.jsx)(T.Mz, {
                        asChild: !0,
                        ...i,
                        children: c
                    })
                });
            eO.displayName = ek;
            var eM = "PopoverPortal",
                [eD, ej] = eC(eM, {
                    forceMount: void 0
                }),
                e_ = e => {
                    let {
                        __scopePopover: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, i = eS(eM, t);
                    return (0, h.jsx)(eD, {
                        scope: t,
                        forceMount: n,
                        children: (0, h.jsx)(S.C, {
                            present: n || i.open,
                            children: (0, h.jsx)(A.Z, {
                                asChild: !0,
                                container: o,
                                children: r
                            })
                        })
                    })
                };
            e_.displayName = eM;
            var eF = "PopoverContent",
                eI = i.forwardRef((e, t) => {
                    let n = ej(eF, e.__scopePopover),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        i = eS(eF, e.__scopePopover);
                    return (0, h.jsx)(S.C, {
                        present: r || i.open,
                        children: i.modal ? (0, h.jsx)(eB, { ...o,
                            ref: t
                        }) : (0, h.jsx)(eH, { ...o,
                            ref: t
                        })
                    })
                });
            eI.displayName = eF;
            var eW = (0, L.TL)("PopoverContent.RemoveScroll"),
                eB = i.forwardRef((e, t) => {
                    let n = eS(eF, e.__scopePopover),
                        r = i.useRef(null),
                        o = (0, a.s)(t, r),
                        u = i.useRef(!1);
                    return i.useEffect(() => {
                        let e = r.current;
                        if (e) return _(e)
                    }, []), (0, h.jsx)(ex, {
                        as: eW,
                        allowPinchZoom: !0,
                        children: (0, h.jsx)(ez, { ...e,
                            ref: o,
                            trapFocus: n.open,
                            disableOutsidePointerEvents: !0,
                            onCloseAutoFocus: (0, l.m)(e.onCloseAutoFocus, e => {
                                var t;
                                e.preventDefault(), u.current || null == (t = n.triggerRef.current) || t.focus()
                            }),
                            onPointerDownOutside: (0, l.m)(e.onPointerDownOutside, e => {
                                let t = e.detail.originalEvent,
                                    n = 0 === t.button && !0 === t.ctrlKey;
                                u.current = 2 === t.button || n
                            }, {
                                checkForDefaultPrevented: !1
                            }),
                            onFocusOutside: (0, l.m)(e.onFocusOutside, e => e.preventDefault(), {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                }),
                eH = i.forwardRef((e, t) => {
                    let n = eS(eF, e.__scopePopover),
                        r = i.useRef(!1),
                        o = i.useRef(!1);
                    return (0, h.jsx)(ez, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var i, l;
                            null == (i = e.onCloseAutoFocus) || i.call(e, t), t.defaultPrevented || (r.current || null == (l = n.triggerRef.current) || l.focus(), t.preventDefault()), r.current = !1, o.current = !1
                        },
                        onInteractOutside: t => {
                            var i, l;
                            null == (i = e.onInteractOutside) || i.call(e, t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
                            let a = t.target;
                            (null == (l = n.triggerRef.current) ? void 0 : l.contains(a)) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
                        }
                    })
                }),
                ez = i.forwardRef((e, t) => {
                    let {
                        __scopePopover: n,
                        trapFocus: r,
                        onOpenAutoFocus: o,
                        onCloseAutoFocus: l,
                        disableOutsidePointerEvents: a,
                        onEscapeKeyDown: u,
                        onPointerDownOutside: d,
                        onFocusOutside: p,
                        onInteractOutside: m,
                        ...v
                    } = e, g = eS(eF, n), w = eT(n);
                    return i.useEffect(() => {
                        var e, t;
                        let n = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", null != (e = n[0]) ? e : f()), document.body.insertAdjacentElement("beforeend", null != (t = n[1]) ? t : f()), s++, () => {
                            1 === s && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), s--
                        }
                    }, []), (0, h.jsx)(y, {
                        asChild: !0,
                        loop: !0,
                        trapped: r,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: l,
                        children: (0, h.jsx)(c.qW, {
                            asChild: !0,
                            disableOutsidePointerEvents: a,
                            onInteractOutside: m,
                            onEscapeKeyDown: u,
                            onPointerDownOutside: d,
                            onFocusOutside: p,
                            onDismiss: () => g.onOpenChange(!1),
                            children: (0, h.jsx)(T.UC, {
                                "data-state": eV(g.open),
                                role: "dialog",
                                id: g.contentId,
                                ...w,
                                ...v,
                                ref: t,
                                style: { ...v.style,
                                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                                }
                            })
                        })
                    })
                }),
                eU = "PopoverClose";
            i.forwardRef((e, t) => {
                let {
                    __scopePopover: n,
                    ...r
                } = e, o = eS(eU, n);
                return (0, h.jsx)(d.sG.button, {
                    type: "button",
                    ...r,
                    ref: t,
                    onClick: (0, l.m)(e.onClick, () => o.onOpenChange(!1))
                })
            }).displayName = eU;
            var e$ = i.forwardRef((e, t) => {
                let {
                    __scopePopover: n,
                    ...r
                } = e, o = eT(n);
                return (0, h.jsx)(T.i3, { ...o,
                    ...r,
                    ref: t
                })
            });

            function eV(e) {
                return e ? "open" : "closed"
            }
            e$.displayName = "PopoverArrow";
            var eX = eL,
                eY = eN,
                eG = eO,
                eK = e_,
                eZ = eI,
                eq = e$
        },
        54273: (e, t, n) => {
            n.d(t, {
                s: () => l,
                t: () => i
            });
            var r = n(73787);

            function o(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function i(...e) {
                return t => {
                    let n = !1,
                        r = e.map(e => {
                            let r = o(e, t);
                            return n || "function" != typeof r || (n = !0), r
                        });
                    if (n) return () => {
                        for (let t = 0; t < r.length; t++) {
                            let n = r[t];
                            "function" == typeof n ? n() : o(e[t], null)
                        }
                    }
                }
            }

            function l(...e) {
                return r.useCallback(i(...e), e)
            }
        },
        65537: (e, t, n) => {
            n.d(t, {
                m: () => r
            });

            function r(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (e ? .(r), !1 === n || !r.defaultPrevented) return t ? .(r)
                }
            }
        },
        67231: (e, t, n) => {
            n.d(t, {
                qW: () => d
            });
            var r, o = n(73787),
                i = n(65537),
                l = n(2544),
                a = n(54273),
                u = n(40530),
                c = n(72011),
                s = "dismissableLayer.update",
                f = o.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                d = o.forwardRef((e, t) => {
                    var n, d;
                    let {
                        disableOutsidePointerEvents: m = !1,
                        onEscapeKeyDown: v,
                        onPointerDownOutside: g,
                        onFocusOutside: y,
                        onInteractOutside: w,
                        onDismiss: b,
                        ...x
                    } = e, E = o.useContext(f), [C, R] = o.useState(null), T = null != (d = null == C ? void 0 : C.ownerDocument) ? d : null == (n = globalThis) ? void 0 : n.document, [, A] = o.useState({}), S = (0, a.s)(t, e => R(e)), L = Array.from(E.layers), [P] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), N = L.indexOf(P), k = C ? L.indexOf(C) : -1, O = E.layersWithOutsidePointerEventsDisabled.size > 0, M = k >= N, D = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (t = globalThis) ? void 0 : t.document,
                            r = (0, u.c)(e),
                            i = o.useRef(!1),
                            l = o.useRef(() => {});
                        return o.useEffect(() => {
                            let e = e => {
                                    if (e.target && !i.current) {
                                        let t = function() {
                                                h("dismissableLayer.pointerDownOutside", r, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (n.removeEventListener("click", l.current), l.current = t, n.addEventListener("click", l.current, {
                                            once: !0
                                        })) : t()
                                    } else n.removeEventListener("click", l.current);
                                    i.current = !1
                                },
                                t = window.setTimeout(() => {
                                    n.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", l.current)
                            }
                        }, [n, r]), {
                            onPointerDownCapture: () => i.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...E.branches].some(e => e.contains(t));
                        M && !n && (null == g || g(e), null == w || w(e), e.defaultPrevented || null == b || b())
                    }, T), j = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (t = globalThis) ? void 0 : t.document,
                            r = (0, u.c)(e),
                            i = o.useRef(!1);
                        return o.useEffect(() => {
                            let e = e => {
                                e.target && !i.current && h("dismissableLayer.focusOutside", r, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
                        }, [n, r]), {
                            onFocusCapture: () => i.current = !0,
                            onBlurCapture: () => i.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        ![...E.branches].some(e => e.contains(t)) && (null == y || y(e), null == w || w(e), e.defaultPrevented || null == b || b())
                    }, T);
                    return ! function(e, t = globalThis ? .document) {
                        let n = (0, u.c)(e);
                        o.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [n, t])
                    }(e => {
                        k === E.layers.size - 1 && (null == v || v(e), !e.defaultPrevented && b && (e.preventDefault(), b()))
                    }, T), o.useEffect(() => {
                        if (C) return m && (0 === E.layersWithOutsidePointerEventsDisabled.size && (r = T.body.style.pointerEvents, T.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(C)), E.layers.add(C), p(), () => {
                            m && 1 === E.layersWithOutsidePointerEventsDisabled.size && (T.body.style.pointerEvents = r)
                        }
                    }, [C, T, m, E]), o.useEffect(() => () => {
                        C && (E.layers.delete(C), E.layersWithOutsidePointerEventsDisabled.delete(C), p())
                    }, [C, E]), o.useEffect(() => {
                        let e = () => A({});
                        return document.addEventListener(s, e), () => document.removeEventListener(s, e)
                    }, []), (0, c.jsx)(l.sG.div, { ...x,
                        ref: S,
                        style: {
                            pointerEvents: O ? M ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, i.m)(e.onFocusCapture, j.onFocusCapture),
                        onBlurCapture: (0, i.m)(e.onBlurCapture, j.onBlurCapture),
                        onPointerDownCapture: (0, i.m)(e.onPointerDownCapture, D.onPointerDownCapture)
                    })
                });

            function p() {
                let e = new CustomEvent(s);
                document.dispatchEvent(e)
            }

            function h(e, t, n, r) {
                let {
                    discrete: o
                } = r, i = n.originalEvent.target, a = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: n
                });
                t && i.addEventListener(e, t, {
                    once: !0
                }), o ? (0, l.hO)(i, a) : i.dispatchEvent(a)
            }
            d.displayName = "DismissableLayer", o.forwardRef((e, t) => {
                let n = o.useContext(f),
                    r = o.useRef(null),
                    i = (0, a.s)(t, r);
                return o.useEffect(() => {
                    let e = r.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, c.jsx)(l.sG.div, { ...e,
                    ref: i
                })
            }).displayName = "DismissableLayerBranch"
        },
        67414: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(73787),
                o = n(45050),
                i = n(2544),
                l = n(14282),
                a = n(72011),
                u = r.forwardRef((e, t) => {
                    var n, u;
                    let {
                        container: c,
                        ...s
                    } = e, [f, d] = r.useState(!1);
                    (0, l.N)(() => d(!0), []);
                    let p = c || f && (null == (u = globalThis) || null == (n = u.document) ? void 0 : n.body);
                    return p ? o.createPortal((0, a.jsx)(i.sG.div, { ...s,
                        ref: t
                    }), p) : null
                });
            u.displayName = "Portal"
        },
        72191: (e, t, n) => {
            n.r(t), n.d(t, {
                debug: () => a,
                error: () => s,
                fatal: () => f,
                fmt: () => o.S,
                info: () => u,
                trace: () => l,
                warn: () => c
            });
            var r = n(38967),
                o = n(16112);

            function i(e, t, n, o) {
                (0, r.KG)({
                    level: e,
                    message: t,
                    attributes: n,
                    severityNumber: o
                })
            }

            function l(e, t) {
                i("trace", e, t)
            }

            function a(e, t) {
                i("debug", e, t)
            }

            function u(e, t) {
                i("info", e, t)
            }

            function c(e, t) {
                i("warn", e, t)
            }

            function s(e, t) {
                i("error", e, t)
            }

            function f(e, t) {
                i("fatal", e, t)
            }
        },
        76907: (e, t, n) => {
            n.d(t, {
                i3: () => Z,
                UC: () => K,
                ZL: () => G,
                Kq: () => V,
                bL: () => X,
                l9: () => Y
            });
            var r = n(73787),
                o = n(65537),
                i = n(54273),
                l = n(2735),
                a = n(67231),
                u = n(40370),
                c = n(7905),
                s = n(67414),
                f = n(92787),
                d = n(2544),
                p = n(1493),
                h = n(36254),
                m = n(72011),
                v = Object.freeze({
                    position: "absolute",
                    border: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    wordWrap: "normal"
                }),
                g = r.forwardRef((e, t) => (0, m.jsx)(d.sG.span, { ...e,
                    ref: t,
                    style: { ...v,
                        ...e.style
                    }
                }));
            g.displayName = "VisuallyHidden";
            var [y, w] = (0, l.A)("Tooltip", [c.Bk]), b = (0, c.Bk)(), x = "TooltipProvider", E = "tooltip.open", [C, R] = y(x), T = e => {
                let {
                    __scopeTooltip: t,
                    delayDuration: n = 700,
                    skipDelayDuration: o = 300,
                    disableHoverableContent: i = !1,
                    children: l
                } = e, a = r.useRef(!0), u = r.useRef(!1), c = r.useRef(0);
                return r.useEffect(() => {
                    let e = c.current;
                    return () => window.clearTimeout(e)
                }, []), (0, m.jsx)(C, {
                    scope: t,
                    isOpenDelayedRef: a,
                    delayDuration: n,
                    onOpen: r.useCallback(() => {
                        window.clearTimeout(c.current), a.current = !1
                    }, []),
                    onClose: r.useCallback(() => {
                        window.clearTimeout(c.current), c.current = window.setTimeout(() => a.current = !0, o)
                    }, [o]),
                    isPointerInTransitRef: u,
                    onPointerInTransitChange: r.useCallback(e => {
                        u.current = e
                    }, []),
                    disableHoverableContent: i,
                    children: l
                })
            };
            T.displayName = x;
            var A = "Tooltip",
                [S, L] = y(A),
                P = e => {
                    let {
                        __scopeTooltip: t,
                        children: n,
                        open: o,
                        defaultOpen: i,
                        onOpenChange: l,
                        disableHoverableContent: a,
                        delayDuration: s
                    } = e, f = R(A, e.__scopeTooltip), d = b(t), [p, v] = r.useState(null), g = (0, u.B)(), y = r.useRef(0), w = null != a ? a : f.disableHoverableContent, x = null != s ? s : f.delayDuration, C = r.useRef(!1), [T, L] = (0, h.i)({
                        prop: o,
                        defaultProp: null != i && i,
                        onChange: e => {
                            e ? (f.onOpen(), document.dispatchEvent(new CustomEvent(E))) : f.onClose(), null == l || l(e)
                        },
                        caller: A
                    }), P = r.useMemo(() => T ? C.current ? "delayed-open" : "instant-open" : "closed", [T]), N = r.useCallback(() => {
                        window.clearTimeout(y.current), y.current = 0, C.current = !1, L(!0)
                    }, [L]), k = r.useCallback(() => {
                        window.clearTimeout(y.current), y.current = 0, L(!1)
                    }, [L]), O = r.useCallback(() => {
                        window.clearTimeout(y.current), y.current = window.setTimeout(() => {
                            C.current = !0, L(!0), y.current = 0
                        }, x)
                    }, [x, L]);
                    return r.useEffect(() => () => {
                        y.current && (window.clearTimeout(y.current), y.current = 0)
                    }, []), (0, m.jsx)(c.bL, { ...d,
                        children: (0, m.jsx)(S, {
                            scope: t,
                            contentId: g,
                            open: T,
                            stateAttribute: P,
                            trigger: p,
                            onTriggerChange: v,
                            onTriggerEnter: r.useCallback(() => {
                                f.isOpenDelayedRef.current ? O() : N()
                            }, [f.isOpenDelayedRef, O, N]),
                            onTriggerLeave: r.useCallback(() => {
                                w ? k() : (window.clearTimeout(y.current), y.current = 0)
                            }, [k, w]),
                            onOpen: N,
                            onClose: k,
                            disableHoverableContent: w,
                            children: n
                        })
                    })
                };
            P.displayName = A;
            var N = "TooltipTrigger",
                k = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...l
                    } = e, a = L(N, n), u = R(N, n), s = b(n), f = r.useRef(null), p = (0, i.s)(t, f, a.onTriggerChange), h = r.useRef(!1), v = r.useRef(!1), g = r.useCallback(() => h.current = !1, []);
                    return r.useEffect(() => () => document.removeEventListener("pointerup", g), [g]), (0, m.jsx)(c.Mz, {
                        asChild: !0,
                        ...s,
                        children: (0, m.jsx)(d.sG.button, {
                            "aria-describedby": a.open ? a.contentId : void 0,
                            "data-state": a.stateAttribute,
                            ...l,
                            ref: p,
                            onPointerMove: (0, o.m)(e.onPointerMove, e => {
                                "touch" !== e.pointerType && (v.current || u.isPointerInTransitRef.current || (a.onTriggerEnter(), v.current = !0))
                            }),
                            onPointerLeave: (0, o.m)(e.onPointerLeave, () => {
                                a.onTriggerLeave(), v.current = !1
                            }),
                            onPointerDown: (0, o.m)(e.onPointerDown, () => {
                                a.open && a.onClose(), h.current = !0, document.addEventListener("pointerup", g, {
                                    once: !0
                                })
                            }),
                            onFocus: (0, o.m)(e.onFocus, () => {
                                h.current || a.onOpen()
                            }),
                            onBlur: (0, o.m)(e.onBlur, a.onClose),
                            onClick: (0, o.m)(e.onClick, a.onClose)
                        })
                    })
                });
            k.displayName = N;
            var O = "TooltipPortal",
                [M, D] = y(O, {
                    forceMount: void 0
                }),
                j = e => {
                    let {
                        __scopeTooltip: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, i = L(O, t);
                    return (0, m.jsx)(M, {
                        scope: t,
                        forceMount: n,
                        children: (0, m.jsx)(f.C, {
                            present: n || i.open,
                            children: (0, m.jsx)(s.Z, {
                                asChild: !0,
                                container: o,
                                children: r
                            })
                        })
                    })
                };
            j.displayName = O;
            var _ = "TooltipContent",
                F = r.forwardRef((e, t) => {
                    let n = D(_, e.__scopeTooltip),
                        {
                            forceMount: r = n.forceMount,
                            side: o = "top",
                            ...i
                        } = e,
                        l = L(_, e.__scopeTooltip);
                    return (0, m.jsx)(f.C, {
                        present: r || l.open,
                        children: l.disableHoverableContent ? (0, m.jsx)(z, {
                            side: o,
                            ...i,
                            ref: t
                        }) : (0, m.jsx)(I, {
                            side: o,
                            ...i,
                            ref: t
                        })
                    })
                }),
                I = r.forwardRef((e, t) => {
                    let n = L(_, e.__scopeTooltip),
                        o = R(_, e.__scopeTooltip),
                        l = r.useRef(null),
                        a = (0, i.s)(t, l),
                        [u, c] = r.useState(null),
                        {
                            trigger: s,
                            onClose: f
                        } = n,
                        d = l.current,
                        {
                            onPointerInTransitChange: p
                        } = o,
                        h = r.useCallback(() => {
                            c(null), p(!1)
                        }, [p]),
                        v = r.useCallback((e, t) => {
                            let n = e.currentTarget,
                                r = {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                o = function(e, t) {
                                    let n = Math.abs(t.top - e.y),
                                        r = Math.abs(t.bottom - e.y),
                                        o = Math.abs(t.right - e.x),
                                        i = Math.abs(t.left - e.x);
                                    switch (Math.min(n, r, o, i)) {
                                        case i:
                                            return "left";
                                        case o:
                                            return "right";
                                        case n:
                                            return "top";
                                        case r:
                                            return "bottom";
                                        default:
                                            throw Error("unreachable")
                                    }
                                }(r, n.getBoundingClientRect());
                            c(function(e) {
                                let t = e.slice();
                                return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y)),
                                    function(e) {
                                        if (e.length <= 1) return e.slice();
                                        let t = [];
                                        for (let n = 0; n < e.length; n++) {
                                            let r = e[n];
                                            for (; t.length >= 2;) {
                                                let e = t[t.length - 1],
                                                    n = t[t.length - 2];
                                                if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
                                                else break
                                            }
                                            t.push(r)
                                        }
                                        t.pop();
                                        let n = [];
                                        for (let t = e.length - 1; t >= 0; t--) {
                                            let r = e[t];
                                            for (; n.length >= 2;) {
                                                let e = n[n.length - 1],
                                                    t = n[n.length - 2];
                                                if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
                                                else break
                                            }
                                            n.push(r)
                                        }
                                        return (n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y) ? t : t.concat(n)
                                    }(t)
                            }([... function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                                    r = [];
                                switch (t) {
                                    case "top":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y + n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "bottom":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y - n
                                        });
                                        break;
                                    case "left":
                                        r.push({
                                            x: e.x + n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "right":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x - n,
                                            y: e.y + n
                                        })
                                }
                                return r
                            }(r, o), ... function(e) {
                                let {
                                    top: t,
                                    right: n,
                                    bottom: r,
                                    left: o
                                } = e;
                                return [{
                                    x: o,
                                    y: t
                                }, {
                                    x: n,
                                    y: t
                                }, {
                                    x: n,
                                    y: r
                                }, {
                                    x: o,
                                    y: r
                                }]
                            }(t.getBoundingClientRect())])), p(!0)
                        }, [p]);
                    return r.useEffect(() => () => h(), [h]), r.useEffect(() => {
                        if (s && d) {
                            let e = e => v(e, d),
                                t = e => v(e, s);
                            return s.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
                                s.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t)
                            }
                        }
                    }, [s, d, v, h]), r.useEffect(() => {
                        if (u) {
                            let e = e => {
                                let t = e.target,
                                    n = {
                                        x: e.clientX,
                                        y: e.clientY
                                    },
                                    r = (null == s ? void 0 : s.contains(t)) || (null == d ? void 0 : d.contains(t)),
                                    o = ! function(e, t) {
                                        let {
                                            x: n,
                                            y: r
                                        } = e, o = !1;
                                        for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                            let l = t[e],
                                                a = t[i],
                                                u = l.x,
                                                c = l.y,
                                                s = a.x,
                                                f = a.y;
                                            c > r != f > r && n < (s - u) * (r - c) / (f - c) + u && (o = !o)
                                        }
                                        return o
                                    }(n, u);
                                r ? h() : o && (h(), f())
                            };
                            return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                        }
                    }, [s, d, u, f, h]), (0, m.jsx)(z, { ...e,
                        ref: a
                    })
                }),
                [W, B] = y(A, {
                    isInside: !1
                }),
                H = (0, p.Dc)("TooltipContent"),
                z = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        children: o,
                        "aria-label": i,
                        onEscapeKeyDown: l,
                        onPointerDownOutside: u,
                        ...s
                    } = e, f = L(_, n), d = b(n), {
                        onClose: p
                    } = f;
                    return r.useEffect(() => (document.addEventListener(E, p), () => document.removeEventListener(E, p)), [p]), r.useEffect(() => {
                        if (f.trigger) {
                            let e = e => {
                                let t = e.target;
                                (null == t ? void 0 : t.contains(f.trigger)) && p()
                            };
                            return window.addEventListener("scroll", e, {
                                capture: !0
                            }), () => window.removeEventListener("scroll", e, {
                                capture: !0
                            })
                        }
                    }, [f.trigger, p]), (0, m.jsx)(a.qW, {
                        asChild: !0,
                        disableOutsidePointerEvents: !1,
                        onEscapeKeyDown: l,
                        onPointerDownOutside: u,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: p,
                        children: (0, m.jsxs)(c.UC, {
                            "data-state": f.stateAttribute,
                            ...d,
                            ...s,
                            ref: t,
                            style: { ...s.style,
                                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                            },
                            children: [(0, m.jsx)(H, {
                                children: o
                            }), (0, m.jsx)(W, {
                                scope: n,
                                isInside: !0,
                                children: (0, m.jsx)(g, {
                                    id: f.contentId,
                                    role: "tooltip",
                                    children: i || o
                                })
                            })]
                        })
                    })
                });
            F.displayName = _;
            var U = "TooltipArrow",
                $ = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...r
                    } = e, o = b(n);
                    return B(U, n).isInside ? null : (0, m.jsx)(c.i3, { ...o,
                        ...r,
                        ref: t
                    })
                });
            $.displayName = U;
            var V = T,
                X = P,
                Y = k,
                G = j,
                K = F,
                Z = $
        },
        92787: (e, t, n) => {
            n.d(t, {
                C: () => l
            });
            var r = n(73787),
                o = n(54273),
                i = n(14282),
                l = e => {
                    let {
                        present: t,
                        children: n
                    } = e, l = function(e) {
                        var t, n;
                        let [o, l] = r.useState(), u = r.useRef(null), c = r.useRef(e), s = r.useRef("none"), [f, d] = (t = e ? "mounted" : "unmounted", n = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, r.useReducer((e, t) => {
                            let r = n[e][t];
                            return null != r ? r : e
                        }, t));
                        return r.useEffect(() => {
                            let e = a(u.current);
                            s.current = "mounted" === f ? e : "none"
                        }, [f]), (0, i.N)(() => {
                            let t = u.current,
                                n = c.current;
                            if (n !== e) {
                                let r = s.current,
                                    o = a(t);
                                e ? d("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? d("UNMOUNT") : n && r !== o ? d("ANIMATION_OUT") : d("UNMOUNT"), c.current = e
                            }
                        }, [e, d]), (0, i.N)(() => {
                            if (o) {
                                var e;
                                let t, n = null != (e = o.ownerDocument.defaultView) ? e : window,
                                    r = e => {
                                        let r = a(u.current).includes(e.animationName);
                                        if (e.target === o && r && (d("ANIMATION_END"), !c.current)) {
                                            let e = o.style.animationFillMode;
                                            o.style.animationFillMode = "forwards", t = n.setTimeout(() => {
                                                "forwards" === o.style.animationFillMode && (o.style.animationFillMode = e)
                                            })
                                        }
                                    },
                                    i = e => {
                                        e.target === o && (s.current = a(u.current))
                                    };
                                return o.addEventListener("animationstart", i), o.addEventListener("animationcancel", r), o.addEventListener("animationend", r), () => {
                                    n.clearTimeout(t), o.removeEventListener("animationstart", i), o.removeEventListener("animationcancel", r), o.removeEventListener("animationend", r)
                                }
                            }
                            d("ANIMATION_END")
                        }, [o, d]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(f),
                            ref: r.useCallback(e => {
                                u.current = e ? getComputedStyle(e) : null, l(e)
                            }, [])
                        }
                    }(t), u = "function" == typeof n ? n({
                        present: l.isPresent
                    }) : r.Children.only(n), c = (0, o.s)(l.ref, function(e) {
                        var t, n;
                        let r = null == (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : t.get,
                            o = r && "isReactWarning" in r && r.isReactWarning;
                        return o ? e.ref : (o = (r = null == (n = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : n.get) && "isReactWarning" in r && r.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(u));
                    return "function" == typeof n || l.isPresent ? r.cloneElement(u, {
                        ref: c
                    }) : null
                };

            function a(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            l.displayName = "Presence"
        }
    }
]);