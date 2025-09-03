try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "42385c5f-56eb-47e4-ad03-d5f355a2b933", e._sentryDebugIdIdentifier = "sentry-dbid-42385c5f-56eb-47e4-ad03-d5f355a2b933")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5869], {
        36044: (e, t, a) => {
            a.d(t, {
                f: () => i
            });
            var i = function(e) {
                return e.Add = "add", e.Cancel = "cancel", e
            }({})
        },
        58695: (e, t, a) => {
            a.d(t, {
                M: () => s
            });
            var i = a(3417),
                r = a(33686),
                n = a(23914),
                o = a(11825),
                c = a(27743);
            let s = () => {
                let {
                    isLoggedIn: e
                } = (0, r.J)(), t = (0, i.useRouter)(), a = (0, n.A)(() => e);
                return {
                    checkAuth: (e, i) => async function() {
                        for (var r = arguments.length, n = Array(r), s = 0; s < r; s++) n[s] = arguments[s];
                        return a() ? e(...n) : new Promise(e => {
                            (0, o.S)({
                                title: i.title,
                                description: i.description,
                                cancelText: i.cancelText || "Cancel",
                                confirmText: i.confirmText || "Log in",
                                onCancel: () => {
                                    i.onCancel && i.onCancel(), e(void 0)
                                },
                                onConfirm: () => {
                                    let a = (0, c.getOrigin)() + window.location.pathname + window.location.search;
                                    t.push("".concat((0, c.getOrigin)(), "/login?returnTo=").concat(encodeURIComponent(a))), e(void 0)
                                }
                            })
                        })
                    }
                }
            }
        },
        95869: (e, t, a) => {
            a.d(t, {
                EmojiProvider: () => L,
                k: () => C
            });
            var i = a(72011),
                r = a(73787),
                n = a(65547);
            let o = (0, n.createServerReference)("007e23d313c30045715704c00fb1591999e12203eb", n.callServer, void 0, n.findSourceMapURL, "fetchEmojiList");
            var c = a(33686),
                s = a(58695),
                l = a(23914),
                d = a(92394);
            let u = (0, n.createServerReference)("7085ebadff0c789d5f6c5a9e756316f0ec9bc461fc", n.callServer, void 0, n.findSourceMapURL, "postInteract");
            var h = a(36044);
            class p {
                addOperation(e, t, a, i) {
                    let r = "".concat(e.project_id, "-").concat(t, "-").concat(Date.now());
                    this.queue = this.queue.filter(a => !(a.project_id === e.project_id && a.interaction_type === t && !this.isOperationInProgress(a.id)));
                    let n = e.interaction || {
                        count: [],
                        status: []
                    };
                    n = this.calculateUpdatedInteraction(e, t, a), i && (this.callbacks.get(e.project_id) || new Set).forEach(t => {
                        t(e.project_id, n)
                    });
                    let o = {
                        id: r,
                        project_id: e.project_id,
                        interaction_type: t,
                        action: a,
                        timestamp: Date.now()
                    };
                    return this.queue.push(o), this.scheduleBatch(), r
                }
                registerCallback(e, t) {
                    var a;
                    return this.callbacks.has(e) || this.callbacks.set(e, new Set), null == (a = this.callbacks.get(e)) || a.add(t), () => {
                        let a = this.callbacks.get(e);
                        a && (a.delete(t), 0 === a.size && this.callbacks.delete(e))
                    }
                }
                isOperationInProgress(e) {
                    return this.processingOperations.has(e)
                }
                getOperationKey(e) {
                    return "".concat(e.project_id, "-").concat(e.interaction_type)
                }
                scheduleBatch() {
                    this.batchTimer && clearTimeout(this.batchTimer), this.batchTimer = setTimeout(() => {
                        this.processQueue()
                    }, this.batchDelay)
                }
                async processQueue() {
                    if (0 === this.queue.length) return;
                    this.batchTimer = null;
                    let e = new Map;
                    for (let a of this.queue) {
                        var t;
                        let i = this.getOperationKey(a);
                        e.has(i) || e.set(i, []), null == (t = e.get(i)) || t.push(a)
                    }
                    let a = [];
                    for (let [t, i] of e.entries()) {
                        if (this.processingOperations.has(t)) continue;
                        let e = i[0];
                        a.push(this.processOperation(e, t))
                    }
                    a.length > 0 && (await Promise.all(a), this.queue.length > 0 && this.scheduleBatch())
                }
                async processOperation(e, t) {
                    this.processingOperations.add(t), this.processingOperations.add(e.id);
                    try {
                        await u(e.project_id, e.action, e.interaction_type), this.queue = this.queue.filter(t => t.id !== e.id)
                    } catch (t) {
                        console.error("Failed to process interaction operation:", t), this.queue = this.queue.filter(t => t.id !== e.id)
                    } finally {
                        this.processingOperations.delete(t), this.processingOperations.delete(e.id)
                    }
                }
                calculateUpdatedInteraction(e, t, a) {
                    var i, r;
                    let n = [...(null == (i = e.interaction) ? void 0 : i.count) || []],
                        o = [...(null == (r = e.interaction) ? void 0 : r.status) || []],
                        c = o.findIndex(e => e.interaction_type === t);
                    c >= 0 ? o[c] = { ...o[c],
                        status: a === h.f.Add
                    } : a === h.f.Add && o.push({
                        interaction_type: t,
                        status: !0
                    });
                    let s = n.findIndex(e => e.interaction_type === t);
                    if (s >= 0) {
                        let e = a === h.f.Add ? 1 : -1;
                        n[s] = { ...n[s],
                            count: Math.max(0, n[s].count + e)
                        }
                    } else a === h.f.Add && n.push({
                        interaction_type: t,
                        count: 1
                    });
                    return {
                        count: n,
                        status: o
                    }
                }
                constructor() {
                    this.queue = [], this.processingOperations = new Set, this.batchTimer = null, this.batchDelay = 500, this.callbacks = new Map
                }
            }
            let f = "yourware-emoji-list",
                g = "yourware-emoji-lottie-cache",
                y = [],
                m = !1,
                v = [],
                b = {},
                w = new Map,
                T = !1,
                S = e => {
                    v.forEach(t => t(e)), v = []
                },
                j = () => {
                    try {
                        let e = localStorage.getItem(g);
                        e && (b = JSON.parse(atob(e)))
                    } catch (e) {
                        d.vF.error("Failed to load Lottie cache", e), b = {}, localStorage.removeItem(g)
                    }
                },
                _ = async e => {
                    if (!e || b[e] && b[e].expireTime > Date.now() && b[e].data) return;
                    if (w.has(e)) return w.get(e);
                    let t = (async () => {
                        try {
                            d.vF.trace("Start loading Lottie: ".concat(e));
                            let t = await fetch(e),
                                a = await t.json();
                            b[e] = {
                                data: a,
                                expireTime: Date.now() + 864e5
                            };
                            try {
                                localStorage.setItem(g, btoa(JSON.stringify(b)))
                            } catch (e) {
                                d.vF.error("Failed to save Lottie cache", e)
                            }
                            d.vF.trace("Lottie loaded successfully: ".concat(e))
                        } catch (t) {
                            d.vF.error("Failed to preload Lottie: ".concat(e), t)
                        } finally {
                            w.delete(e)
                        }
                    })();
                    return w.set(e, t), t
                },
                I = e => {
                    T || (T = !0, j(), setTimeout(async () => {
                        try {
                            d.vF.trace("Start preloading all Lottie animations");
                            let t = e.filter(e => e.lottie).map(e => e.lottie);
                            await Promise.all([...new Set(t)].map(e => _(e))), d.vF.trace("All Lottie animations preloaded successfully")
                        } catch (e) {
                            d.vF.error("Failed to preload Lottie animations", e)
                        } finally {
                            T = !1
                        }
                    }, 2e3))
                },
                O = e => e ? b[e] && b[e].expireTime > Date.now() && b[e].data ? b[e].data : (w.has(e) || setTimeout(() => {
                    _(e).catch(console.error)
                }, 0), null) : null,
                x = () => {
                    try {
                        let e = localStorage.getItem(f);
                        if (!e) return {
                            data: [],
                            isExpired: !0
                        };
                        let t = JSON.parse(atob(e)),
                            a = t.expireTime < Date.now();
                        return {
                            data: t.data,
                            isExpired: a
                        }
                    } catch (e) {
                        return d.vF.error("Failed to read emoji cache", e), localStorage.removeItem(f), {
                            data: [],
                            isExpired: !0
                        }
                    }
                },
                F = async function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (m) return new Promise(e => {
                        v.push(e)
                    });
                    if (y.length > 0 && !e) return y;
                    if (!e) {
                        let {
                            data: e,
                            isExpired: t
                        } = x();
                        if (e.length > 0) return y = e, t ? setTimeout(() => {
                            F(!0).catch(console.error)
                        }, 0) : T || I(e), y
                    }
                    try {
                        m = !0;
                        let e = (await o()).data || [];
                        y = e;
                        try {
                            let t = {
                                data: e,
                                expireTime: Date.now() + 3e5
                            };
                            localStorage.setItem(f, btoa(JSON.stringify(t)))
                        } catch (e) {
                            d.vF.error("Failed to save emoji cache", e)
                        }
                        return T || I(e), S(e), e
                    } catch (e) {
                        return d.vF.error("Failed to fetch emojis", e), S(y), y
                    } finally {
                        m = !1
                    }
                },
                k = (0, r.createContext)({
                    emojis: [],
                    isLoading: !1,
                    getEmojiByType: () => void 0,
                    refreshEmojis: async () => {},
                    asyncGetEmojis: async () => [],
                    getLottieData: () => null,
                    interact: () => Promise.resolve(""),
                    registerInteractionCallback: () => {}
                }),
                L = e => {
                    let {
                        children: t
                    } = e, [a, n] = (0, r.useState)([]), [o, d] = (0, r.useState)(!1), {
                        userId: u
                    } = (0, c.J)(), {
                        checkAuth: h
                    } = (0, s.M)(), f = (0, r.useRef)(new p), g = (0, l.A)(() => u);
                    (0, r.useEffect)(() => {
                        setTimeout(() => {
                            j()
                        }, 3e3)
                    }, []), (0, r.useEffect)(() => {
                        let e = !0;
                        return (async () => {
                            d(!0);
                            let t = await m();
                            e && (n(t), d(!1))
                        })(), () => {
                            e = !1
                        }
                    }, []);
                    let m = async () => {
                            if (y.length > 0) {
                                let {
                                    isExpired: e
                                } = x();
                                return e && !o && setTimeout(() => {
                                    F(!0).catch(console.error)
                                }, 0), y
                            }
                            return F()
                        },
                        v = async (e, t, a) => h(async () => f.current.addOperation(e, t, a, g() || ""), {
                            title: "Love this project?",
                            description: "Log in to leave reactions and show some love.",
                            cancelText: "Cancel",
                            confirmText: "Log in"
                        })() || "",
                        b = async () => {
                            await F(!0)
                        };
                    return (0, i.jsx)(k.Provider, {
                        value: {
                            emojis: a,
                            isLoading: o,
                            getEmojiByType: e => a.find(t => t.interaction_type === e),
                            refreshEmojis: b,
                            asyncGetEmojis: m,
                            getLottieData: O,
                            interact: v,
                            registerInteractionCallback: (e, t) => {
                                f.current.registerCallback(e, t)
                            }
                        },
                        children: t
                    })
                },
                C = () => (0, r.useContext)(k)
        }
    }
]);