try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1bd98bf1-58ed-4442-b8df-3f4477e10be7", e._sentryDebugIdIdentifier = "sentry-dbid-1bd98bf1-58ed-4442-b8df-3f4477e10be7")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [100], {
        8581: (e, t, r) => {
            r.d(t, {
                J: () => f
            });
            var a = r(73787),
                i = r(33686),
                n = r(5392),
                o = r(65547);
            let l = (0, o.createServerReference)("00a67d5bf95726f1df64c18b4c466f0c0498b6112d", o.callServer, void 0, o.findSourceMapURL, "fetchDailyLoginReward"),
                d = () => {
                    let e = new Date,
                        t = e.getUTCFullYear(),
                        r = String(e.getUTCMonth() + 1).padStart(2, "0"),
                        a = String(e.getUTCDate()).padStart(2, "0");
                    return "".concat(t, "-").concat(r, "-").concat(a)
                },
                s = e => "daily_login_reward_last_clicked_".concat(e);
            var c = r(92394);
            let w = {
                    shouldShowDailyLoginReward: !1
                },
                g = (0, n.v)()((e, t, r) => ({ ...w,
                    ...((e, t) => ({
                        checkShouldShowTips: e => {
                            if (!e) return !1;
                            let t = d(),
                                r = localStorage.getItem(s(e));
                            return !r || r !== t
                        },
                        updateShouldShowDailyLoginReward: t => {
                            e({
                                shouldShowDailyLoginReward: t
                            })
                        },
                        handleDailyLoginRewardAction: async t => {
                            if (!t) throw Error("Not authenticated");
                            try {
                                let r = await l();
                                if (0 !== r.code) throw Error("Daily login reward failed with code: ".concat(r.code));
                                let a = d();
                                localStorage.setItem(s(t), a), e({
                                    shouldShowDailyLoginReward: !1
                                })
                            } catch (e) {
                                throw c.vF.error("Daily Login Reward Error", e), e
                            }
                        },
                        initializeDailyLoginReward: r => {
                            e({
                                shouldShowDailyLoginReward: t().checkShouldShowTips(r)
                            })
                        },
                        resetDailyLoginReward: () => {
                            e({
                                shouldShowDailyLoginReward: !1
                            })
                        }
                    }))(e, t, r)
                }));
            var u = r(23914);
            let f = () => {
                let {
                    userId: e
                } = (0, i.J)(), t = (0, u.A)(() => e), {
                    shouldShowDailyLoginReward: r,
                    handleDailyLoginRewardAction: n,
                    initializeDailyLoginReward: o,
                    resetDailyLoginReward: l,
                    checkShouldShowTips: d
                } = g();
                return (0, a.useEffect)(() => {
                    e ? o(e) : l()
                }, [e, o]), {
                    shouldShowDailyLoginReward: r,
                    handleDailyLoginReward: async () => {
                        let e = t();
                        if (!e) throw Error("Not authenticated");
                        return await n(e)
                    },
                    checkShouldShowDailyLoginReward: () => {
                        let e = t();
                        return !!e && d(e)
                    }
                }
            }
        },
        11323: (e, t, r) => {
            r.d(t, {
                X: () => i
            });
            var a = r(65547);
            let i = (0, a.createServerReference)("00c1a80328be50f440ad9a7f8bb253b07b7a09342d", a.callServer, void 0, a.findSourceMapURL, "markAllAsRead")
        },
        17068: (e, t, r) => {
            r.d(t, {
                _: () => i,
                c: () => a
            });
            let a = e => {
                    let t = new Date(e),
                        r = new Date,
                        a = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())),
                        i = new Date(Date.UTC(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()));
                    return a.getTime() === i.getTime()
                },
                i = e => {
                    if (8 !== e.length) throw Error("Date string must be 8 characters (YYYYMMDD)");
                    let t = parseInt(e.substring(0, 4));
                    return new Date(t, parseInt(e.substring(4, 6)) - 1, parseInt(e.substring(6, 8)))
                }
        },
        22374: (e, t, r) => {
            r.d(t, {
                Fr: () => a,
                Ny: () => n,
                er: () => i
            });
            let a = e => {
                    let t = e || (() => {
                        var e;
                        return null == (e = window.navigator) ? void 0 : e.userAgent
                    })();
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(t)
                },
                i = e => {
                    let t = window;
                    return (t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || (e => setTimeout(() => e(Date.now()), 16)))(e)
                },
                n = e => {
                    let t = window;
                    (t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || (e => clearTimeout(e)))(e)
                }
        },
        61680: (e, t, r) => {
            r.d(t, {
                NotificationProvider: () => u,
                h: () => f
            });
            var a = r(72011),
                i = r(73787),
                n = r(65547);
            let o = (0, n.createServerReference)("00be9eb08ea348a2c76180a0e49205412092f8496e", n.callServer, void 0, n.findSourceMapURL, "getUnreadCount");
            var l = r(11323),
                d = r(8581),
                s = r(92394),
                c = r(17068),
                w = r(33686);
            let g = (0, i.createContext)({
                    unreadCount: 0,
                    onMarkAllAsRead: () => {}
                }),
                u = e => {
                    let {
                        children: t
                    } = e, [r, n] = (0, i.useState)(0), {
                        isLoggedIn: u
                    } = (0, w.J)(), {
                        checkShouldShowDailyLoginReward: f
                    } = (0, d.J)();
                    (0, i.useEffect)(() => {
                        u && h()
                    }, [u]);
                    let h = async () => {
                            try {
                                var e;
                                let t = await o();
                                if ("number" == typeof(null == (e = t.data) ? void 0 : e.unread_count)) {
                                    let e = t.data.last_read_time,
                                        r = f(),
                                        a = e && (0, c.c)(e),
                                        i = t.data.unread_count + (r && !a ? 1 : 0);
                                    n(i)
                                }
                            } catch (e) {
                                s.Ay.error("Failed to fetch notification count:", e)
                            }
                        },
                        v = (0, i.useCallback)(async () => {
                            try {
                                await (0, l.X)(), n(0)
                            } catch (e) {
                                s.Ay.error("Failed to mark all as read:", e)
                            }
                        }, [n]);
                    return (0, a.jsx)(g.Provider, {
                        value: {
                            unreadCount: r,
                            onMarkAllAsRead: v
                        },
                        children: t
                    })
                },
                f = () => (0, i.useContext)(g)
        },
        70878: (e, t, r) => {
            r.d(t, {
                SettingsProvider: () => u,
                M: () => f
            });
            var a = r(72011),
                i = r(73787);
            let n = {
                reward_credit_config: {
                    daily_login_reward: 100,
                    invite_reward: 500,
                    new_user_reward: 500
                },
                invite_config: {
                    monthly_invite_limit: 10
                }
            };
            var o = r(5392),
                l = r(65547);
            let d = (0, l.createServerReference)("00daccedf5d96c2a742eb4d4844d38b2159567939c", l.callServer, void 0, l.findSourceMapURL, "fetchSettingsInfo");
            var s = r(92394);
            let c = {
                    settings: n,
                    isLoading: !1,
                    error: null,
                    lastFetchTime: null
                },
                w = (0, o.v)()((e, t, r) => ({ ...c,
                    ...(e => ({
                        fetchSettings: async () => {
                            try {
                                e({
                                    isLoading: !0,
                                    error: null
                                });
                                let t = await d();
                                if (0 === t.code && t.data) e({
                                    settings: {
                                        reward_credit_config: t.data.reward_credit_config,
                                        invite_config: t.data.invite_config
                                    },
                                    isLoading: !1,
                                    error: null,
                                    lastFetchTime: Date.now()
                                }), s.Ay.info("Settings fetched successfully", {
                                    settings: t.data
                                });
                                else {
                                    let r = t.message || "Failed to fetch settings";
                                    e({
                                        isLoading: !1,
                                        error: r
                                    }), s.Ay.error("Failed to fetch settings", Error(JSON.stringify(t)))
                                }
                            } catch (t) {
                                e({
                                    isLoading: !1,
                                    error: "Network error while fetching settings"
                                }), s.Ay.error("Settings fetch error", t)
                            }
                        },
                        setError: t => {
                            e({
                                error: t
                            })
                        }
                    }))(e, t, r)
                })),
                g = (0, i.createContext)({
                    settings: n,
                    isLoading: !1,
                    error: null,
                    refetchSettings: async () => {}
                }),
                u = e => {
                    let {
                        children: t
                    } = e, {
                        settings: r,
                        isLoading: n,
                        error: o,
                        fetchSettings: l
                    } = w();
                    return (0, i.useEffect)(() => {
                        l()
                    }, [l]), (0, a.jsx)(g.Provider, {
                        value: {
                            settings: r,
                            isLoading: n,
                            error: o,
                            refetchSettings: l
                        },
                        children: t
                    })
                },
                f = () => (0, i.useContext)(g)
        },
        74456: (e, t, r) => {
            r.d(t, {
                EnvProvider: () => s,
                D: () => c
            });
            var a = r(72011),
                i = r(73787),
                n = r(85385),
                o = r(22374);
            let l = ["ai_sdk", "yw_backend", "reactbits"],
                d = (0, i.createContext)({
                    isMobile: !1,
                    showNewMCPTips: !1,
                    viewedMCPIntegrations: [],
                    handleShowNewMCPTips: () => {},
                    markMCPIntegrationAsViewed: () => {},
                    isNewMCPIntegration: () => !1,
                    hasAnyNewMCPIntegrations: () => !1
                }),
                s = e => {
                    let {
                        children: t,
                        initialEnvInfo: r
                    } = e, [s, c] = (0, i.useState)(r), [w, g] = (0, i.useState)({
                        showNewMCPTips: !1,
                        viewedMCPIntegrations: []
                    });
                    return (0, i.useEffect)(() => {
                        let e = localStorage.getItem(n.rh);
                        e || (localStorage.getItem(n.V) ? (e = JSON.stringify(["yw_backend"]), localStorage.setItem(n.rh, e)) : e = "[]");
                        let t = {
                                isMobile: (0, o.Fr)()
                            },
                            r = JSON.parse(e),
                            a = l.some(e => !r.includes(e));
                        c(t), g({
                            showNewMCPTips: a,
                            viewedMCPIntegrations: r
                        })
                    }, []), (0, a.jsx)(d.Provider, {
                        value: { ...s,
                            ...w,
                            handleShowNewMCPTips: () => {
                                let e = [...new Set([...w.viewedMCPIntegrations, ...l])];
                                localStorage.setItem(n.rh, JSON.stringify(e)), g(t => ({ ...t,
                                    showNewMCPTips: !1,
                                    viewedMCPIntegrations: e
                                }))
                            },
                            markMCPIntegrationAsViewed: e => {
                                if (!w.viewedMCPIntegrations.includes(e)) {
                                    let t = [...w.viewedMCPIntegrations, e];
                                    localStorage.setItem(n.rh, JSON.stringify(t));
                                    let r = l.some(e => !t.includes(e));
                                    g(e => ({ ...e,
                                        showNewMCPTips: r,
                                        viewedMCPIntegrations: t
                                    }))
                                }
                            },
                            isNewMCPIntegration: e => l.includes(e) && !w.viewedMCPIntegrations.includes(e),
                            hasAnyNewMCPIntegrations: () => l.some(e => !w.viewedMCPIntegrations.includes(e))
                        },
                        children: t
                    })
                },
                c = () => (0, i.useContext)(d)
        },
        85385: (e, t, r) => {
            r.d(t, {
                FW: () => c,
                Hx: () => o,
                V: () => l,
                V2: () => s,
                Vt: () => n,
                lf: () => w,
                rh: () => d,
                v1: () => i
            });
            var a = r(63335);
            let i = "0000000000000000000000000000",
                n = "00000000-0000-0000-0000-000000000000";
            a.env.JWT_SECRET_KEY;
            let o = "first_time_favorite_users",
                l = "first_time_new_mcp_tips_for_backend",
                d = "new_mcp_integrations_viewed",
                s = "first_time_view_ai_app",
                c = 3,
                w = 500
        }
    }
]);