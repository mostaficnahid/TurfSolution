try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cffc1b17-ef77-4056-9854-982fb366af6b", e._sentryDebugIdIdentifier = "sentry-dbid-cffc1b17-ef77-4056-9854-982fb366af6b")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3926], {
        12542: (e, t, s) => {
            s.d(t, {
                t: () => a
            });
            var n = s(70878);
            let a = () => {
                let {
                    settings: e,
                    isLoading: t,
                    error: s,
                    refetchSettings: a
                } = (0, n.M)();
                return {
                    reward_credit_config: e.reward_credit_config,
                    invite_config: e.invite_config,
                    settings: e,
                    isLoading: t,
                    error: s,
                    refetchSettings: a,
                    isSettingsReady: !t && !s && !!e
                }
            }
        },
        43106: (e, t, s) => {
            s.d(t, {
                f: () => i
            });
            var n = s(73787),
                a = s(65547);
            let r = (0, a.createServerReference)("00d91935fa93c84c3118836d2f0aa99d902ad07c8d", a.callServer, void 0, a.findSourceMapURL, "fetchInviteInfo"),
                i = () => {
                    let [e, t] = (0, n.useState)(!1), [s, a] = (0, n.useState)(null), [i, l] = (0, n.useState)(!1), [o, c] = (0, n.useState)(null), d = async () => {
                        t(!0), s || await x()
                    }, x = async () => {
                        try {
                            l(!0), c(null);
                            let e = await r();
                            0 === e.code && e.data ? a(e.data) : c(e.message || "Failed to fetch invite info")
                        } catch (e) {
                            c(e instanceof Error ? e.message : "Failed to fetch invite info")
                        } finally {
                            l(!1)
                        }
                    };
                    return {
                        isOpen: e,
                        inviteInfo: s,
                        loading: i,
                        error: o,
                        openInviteModal: d,
                        closeInviteModal: () => {
                            t(!1), c(null)
                        },
                        fetchInviteInfo: x,
                        retryFetchInviteInfo: () => {
                            x()
                        }
                    }
                }
        },
        56866: (e, t, s) => {
            s.d(t, {
                default: () => l
            });
            var n = s(72011),
                a = s(91636),
                r = s.n(a);
            s(73787);
            var i = s(89498);

            function l(e) {
                let {
                    error: t = "Something went wrong!",
                    reset: s,
                    className: a
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, i.cn)("flex flex-col", a),
                    children: (0, n.jsxs)("main", {
                        className: "mb-20 flex w-full flex-1 flex-col items-center justify-center px-6 sm:px-4",
                        children: [(0, n.jsx)("h2", {
                            className: "text-center text-[28px]/8 sm:text-[32px]/9 md:text-[40px]/10",
                            children: t
                        }), (0, n.jsx)("p", {
                            className: "mt-3 text-center text-sm text-black/45 sm:text-base",
                            children: "Please try again later or contact support if the problem persists."
                        }), (0, n.jsxs)("div", {
                            className: "mt-12 flex gap-4 sm:mt-16 md:mt-20",
                            children: [(0, n.jsx)("button", {
                                onClick: () => {
                                    s ? s() : window.location.reload()
                                },
                                className: "shine-effect flex h-12 w-36 cursor-pointer items-center justify-center rounded-full bg-black/95 text-sm text-white sm:h-14 sm:w-40 sm:text-base",
                                children: "Try Again"
                            }), (0, n.jsx)(r(), {
                                href: "/",
                                className: "shine-effect flex h-12 w-36 cursor-pointer items-center justify-center rounded-full border border-black/95 text-sm text-black/95 sm:h-14 sm:w-40 sm:text-base",
                                children: "Go Home"
                            })]
                        })]
                    })
                })
            }
        },
        69092: (e, t, s) => {
            s.d(t, {
                Sidebar: () => D
            });
            var n = s(72011),
                a = s(53130),
                r = s(91636),
                i = s.n(r),
                l = s(73787);
            let o = {
                src: "/_next/static/media/slider-activity-banner.54ff7429.png"
            };
            var c = s(86881),
                d = s(74706),
                x = s(27743),
                p = s(89498),
                m = s(74456);
            let h = e => {
                    let {
                        isExpanded: t
                    } = e;
                    return (0, n.jsx)("div", {
                        className: (0, p.cn)("pointer-events-none absolute flex items-center justify-center rounded-[5px] bg-white px-[5px] py-[2px] transition-all duration-200 ease-in-out", t ? "top-1/2 right-[10px] -translate-y-1/2" : "top-[-6px] right-[-6px]"),
                        children: (0, n.jsx)("span", {
                            className: "text-[10px] font-bold text-[#55644A] italic",
                            children: "New"
                        })
                    })
                },
                u = e => {
                    let {
                        isExpanded: t,
                        className: s
                    } = e, {
                        track: r
                    } = (0, c.s)(), {
                        showNewMCPTips: l
                    } = (0, m.D)();
                    return (0, n.jsxs)("div", {
                        className: (0, p.cn)("flex flex-col gap-2", s),
                        children: [(0, n.jsxs)("div", {
                            className: "relative",
                            children: [(0, n.jsxs)(i(), {
                                className: (0, p.cn)("bg-brand hover:bg-brand/90 flex h-9 cursor-pointer items-center rounded-[10px] px-2.5 text-[14px] font-medium text-white", t ? "gap-1.5" : ""),
                                href: "/create",
                                prefetch: !0,
                                onClick: () => r("sidebar_create_click"),
                                children: [(0, n.jsx)(a.Ld_, {
                                    className: "h-4 w-4 flex-shrink-0"
                                }), (0, n.jsx)("span", {
                                    className: (0, p.cn)("translate-y-[1.5px] overflow-hidden whitespace-nowrap transition-all duration-200 ease-in-out", t ? "max-w-none opacity-100" : "max-w-0 opacity-0"),
                                    children: "Create"
                                })]
                            }), l && (0, n.jsx)(h, {
                                isExpanded: t
                            })]
                        }), (0, n.jsxs)(i(), {
                            className: (0, p.cn)("flex h-9 cursor-pointer items-center rounded-[10px] border border-black/6 px-2.5 text-[14px] font-medium text-black/65 transition-colors hover:bg-black/3", t ? "gap-1.5" : ""),
                            href: "/create?tab=upload",
                            onClick: () => r("sidebar_upload_click"),
                            children: [(0, n.jsx)(a.dcE, {
                                className: "h-4 w-4 flex-shrink-0"
                            }), (0, n.jsx)("span", {
                                className: (0, p.cn)("overflow-hidden whitespace-nowrap transition-all duration-200 ease-in-out", t ? "max-w-none opacity-100" : "max-w-0 opacity-0"),
                                children: "Upload"
                            })]
                        })]
                    })
                };
            var f = s(3417),
                b = s(1652),
                g = s(33686),
                v = s(45050),
                w = s(72913),
                j = s(12542),
                y = s(37600),
                k = s(43106);
            let N = e => {
                    let {
                        onClose: t
                    } = e, {
                        fetchInviteInfo: s,
                        inviteInfo: r,
                        loading: i,
                        error: o
                    } = (0, k.f)(), {
                        subscriptionInfo: d
                    } = (0, b.R)(), {
                        track: p
                    } = (0, c.s)(), {
                        reward_credit_config: m
                    } = (0, j.t)(), [h, u] = (0, l.useState)(!0);
                    (0, l.useEffect)(() => {
                        f()
                    }, []);
                    let f = (0, l.useCallback)(async () => {
                            await s(), u(!1)
                        }, [s]),
                        g = (0, l.useMemo)(() => (null == r ? void 0 : r.invite_code) ? "".concat((0, x.getOrigin)(), "/invite/").concat(r.invite_code) : "", [null == r ? void 0 : r.invite_code]),
                        N = e => {
                            e.preventDefault(), e.stopPropagation(), t()
                        },
                        _ = async e => {
                            e.preventDefault(), e.stopPropagation(), p("invite_copy_link_click", {
                                credits_num: (null == d ? void 0 : d.total_credits) || 0,
                                monthly_invites: (null == r ? void 0 : r.monthly_invited_count) || 0
                            });
                            try {
                                await navigator.clipboard.writeText(g), (0, y.P)({
                                    message: "Link copied to clipboard",
                                    type: "success"
                                })
                            } catch (e) {
                                (0, y.P)({
                                    message: "Failed to copy link, please try again",
                                    type: "error"
                                })
                            }
                        },
                        C = (() => {
                            var e, t, l;
                            return h || i ? (0, n.jsx)("div", {
                                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4",
                                children: (0, n.jsx)("div", {
                                    className: "relative flex h-[298px] w-[480px] max-w-[calc(100vw-32px)] flex-col items-center justify-center gap-5 rounded-2xl bg-white p-5 shadow-[0px_16px_48px_1px_rgba(0,0,0,0.2)]",
                                    children: (0, n.jsx)(w.A, {
                                        animationPath: "/animations/lottie-task-loading.json",
                                        className: "h-20 w-20"
                                    })
                                })
                            }) : o || (null == r ? void 0 : r.invite_code) === null ? (0, n.jsx)("div", {
                                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4",
                                children: (0, n.jsxs)("div", {
                                    className: "relative flex h-[298px] w-[480px] max-w-[calc(100vw-32px)] flex-col items-center justify-center gap-5 rounded-2xl bg-white p-5 shadow-[0px_16px_48px_1px_rgba(0,0,0,0.2)]",
                                    children: [(0, n.jsx)("button", {
                                        onClick: N,
                                        className: "absolute top-3 right-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-[8px] p-1 transition-colors hover:bg-black/3",
                                        children: (0, n.jsx)(a.Qks, {
                                            className: "h-4 w-4"
                                        })
                                    }), (0, n.jsx)("p", {
                                        className: "text-sm text-black/95",
                                        children: "Failed to get invite link"
                                    }), (0, n.jsx)("button", {
                                        onClick: s,
                                        className: "bg-brand h-9 flex-shrink-0 cursor-pointer rounded-[10px] px-3 text-sm text-white",
                                        children: "Retry"
                                    })]
                                })
                            }) : (0, n.jsx)("div", {
                                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4",
                                children: (0, n.jsxs)("div", {
                                    className: "relative flex w-[480px] max-w-[calc(100vw-32px)] flex-col gap-4 rounded-2xl bg-white p-5 shadow-[0px_16px_48px_1px_rgba(0,0,0,0.2)] sm:gap-5 sm:p-6",
                                    children: [(0, n.jsx)("button", {
                                        onClick: N,
                                        className: "absolute top-3 right-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-[8px] p-1 transition-colors hover:bg-black/3 sm:top-4 sm:right-4",
                                        children: (0, n.jsx)(a.Qks, {
                                            className: "h-4 w-4"
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "flex flex-col items-center gap-3 pt-2 text-center sm:py-3",
                                        children: [(0, n.jsx)(a.Bik, {
                                            className: "text-brand h-10 w-10 sm:h-12 sm:w-12"
                                        }), (0, n.jsxs)("div", {
                                            className: "space-y-1",
                                            children: [(0, n.jsx)("h2", {
                                                className: "text-lg font-bold text-black/95 sm:text-xl",
                                                children: "Invite to get credits"
                                            }), (0, n.jsxs)("p", {
                                                className: "text-sm text-black/65 sm:text-sm",
                                                children: [(0, n.jsx)("span", {
                                                    children: "Share your invitation link, get "
                                                }), (0, n.jsxs)("span", {
                                                    className: "font-bold text-black/95",
                                                    children: [m.invite_reward, " free credits"]
                                                }), (0, n.jsx)("span", {
                                                    children: " for every friend who signs up."
                                                })]
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: "rounded-lg bg-black/3 px-2 py-1 text-xs font-bold text-black/30 sm:px-[6px]",
                                            children: ["Monthly invites:", " ", (0, n.jsx)("span", {
                                                children: Math.min(null != (e = null == r ? void 0 : r.monthly_invited_count) ? e : 0, null != (t = null == r ? void 0 : r.monthly_invite_limit) ? t : 10)
                                            }), "/", (0, n.jsx)("span", {
                                                children: null != (l = null == r ? void 0 : r.monthly_invite_limit) ? l : 10
                                            })]
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "flex flex-col gap-2",
                                        children: [(0, n.jsx)("h3", {
                                            className: "text-xs font-bold text-black/95",
                                            children: "Share your invitation link"
                                        }), (0, n.jsxs)("div", {
                                            className: "flex flex-col gap-3 text-black/95 sm:flex-row sm:gap-2",
                                            children: [(0, n.jsxs)("div", {
                                                className: "flex h-9 min-w-0 flex-1 items-center gap-2 rounded-[10px] border border-black/6 px-3",
                                                children: [(0, n.jsx)(a.Y$G, {
                                                    className: "h-4 w-4 flex-shrink-0"
                                                }), (0, n.jsx)("div", {
                                                    className: "min-w-0 flex-1 truncate text-sm",
                                                    children: g
                                                })]
                                            }), (0, n.jsx)("button", {
                                                onClick: _,
                                                className: "bg-brand hover:bg-brand/90 h-9 flex-shrink-0 cursor-pointer rounded-[10px] px-4 text-sm text-white sm:px-3",
                                                children: "Copy link"
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })();
                    return (0, v.createPortal)(C, document.body)
                },
                _ = e => {
                    let {
                        isExpanded: t,
                        className: s
                    } = e, {
                        track: r
                    } = (0, c.s)(), {
                        openInviteModal: i,
                        closeInviteModal: l,
                        isOpen: o
                    } = (0, k.f)(), {
                        subscriptionInfo: d
                    } = (0, b.R)(), {
                        isLoggedIn: x
                    } = (0, g.J)(), m = (0, f.useRouter)();
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: (0, p.cn)("flex cursor-pointer gap-2 rounded-[10px] border border-black/3 bg-white p-3 transition-all duration-200 hover:bg-black/3", s),
                            onClick: e => {
                                if (!x) return void m.push("/login?returnTo=".concat(encodeURIComponent(window.location.href)));
                                r("invite_entrance_click", {
                                    credits_num: (null == d ? void 0 : d.total_credits) || 0
                                }), i()
                            },
                            children: [(0, n.jsx)(a.Bik, {
                                className: "h-4 w-4 flex-shrink-0"
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-1 flex-col gap-0.5",
                                children: [(0, n.jsx)("span", {
                                    className: "text-[16px] font-bold",
                                    children: "Invite friend"
                                }), (0, n.jsx)("span", {
                                    className: "text-[12px] text-black/65",
                                    children: "Get 500 credits each"
                                })]
                            })]
                        }), o && (0, n.jsx)(N, {
                            onClose: l
                        })]
                    })
                };
            var C = s(61680),
                E = s(96711);
            let I = e => {
                    let {
                        label: t,
                        icon: s,
                        activeIcon: a,
                        href: r,
                        prefetch: o = null,
                        isExpanded: d,
                        onClick: x,
                        accessoryNode: m,
                        badgeNode: h
                    } = e, {
                        track: u
                    } = (0, c.s)(), b = (0, f.usePathname)() === r, g = (0, l.useCallback)(() => {
                        u("sidebar_tab_click", {
                            tab_name: t
                        }), x && x()
                    }, [x, t, u]);
                    return (0, n.jsxs)(i(), {
                        className: (0, p.cn)("relative flex h-9 cursor-pointer items-center gap-2 rounded-[10px] px-2.5 py-2 text-[14px]", b ? "bg-black/3 text-black/95" : "text-black/65 hover:bg-black/3 hover:text-black/95"),
                        href: r,
                        prefetch: o,
                        onClick: g,
                        children: [(0, n.jsx)(b ? a : s, {
                            className: "h-4 w-4 flex-shrink-0"
                        }), (0, n.jsx)("span", {
                            className: (0, p.cn)("flex-1 overflow-hidden text-left font-medium whitespace-nowrap transition-all duration-200 ease-in-out", d ? "max-w-none opacity-100" : "max-w-0 opacity-0"),
                            children: t
                        }), d && m ? (0, n.jsx)("div", {
                            children: m
                        }) : !d && h ? (0, n.jsx)("div", {
                            className: "absolute inset-0",
                            children: h
                        }) : null]
                    })
                },
                S = e => {
                    let {
                        isExpanded: t,
                        className: s
                    } = e, {
                        userId: r
                    } = (0, g.J)(), {
                        track: i
                    } = (0, c.s)(), {
                        unreadCount: o,
                        onMarkAllAsRead: d
                    } = (0, C.h)(), [x, m] = (0, l.useState)(!0);
                    (0, l.useEffect)(() => {
                        i("notification_entrance_show", {
                            unread_message_num: o
                        })
                    }, [o]), (0, l.useEffect)(() => {
                        m((0, E.$)())
                    }, []);
                    let h = (0, l.useCallback)(async () => {
                        i("notification_entrance_click", {
                            unread_message_num: o
                        }), d()
                    }, [i, o, d]);
                    return (0, n.jsxs)("div", {
                        className: (0, p.cn)("flex flex-col gap-2", s),
                        children: [(0, n.jsx)(I, {
                            label: "Explore",
                            href: "/",
                            prefetch: !0,
                            icon: a.BZ,
                            activeIcon: a.MV9,
                            isExpanded: t
                        }), (0, n.jsx)(I, {
                            label: "Blog",
                            href: "/blog",
                            prefetch: !1,
                            icon: a.L4U,
                            activeIcon: a.cPU,
                            isExpanded: t
                        }), (0, n.jsx)(I, {
                            label: "Affiliate",
                            href: "/affiliate",
                            prefetch: !1,
                            icon: a.C_5,
                            activeIcon: a.XkL,
                            isExpanded: t
                        }), (0, n.jsx)(I, {
                            label: "Plugin",
                            href: "/plugin",
                            prefetch: !1,
                            icon: a.WEF,
                            activeIcon: a.bik,
                            isExpanded: t,
                            accessoryNode: x ? null : (0, n.jsxs)("div", {
                                className: "flex items-center justify-center gap-[1px] rounded-full bg-[#B68C37] py-[1px] pr-[1px] pl-1 text-white",
                                children: [(0, n.jsx)("span", {
                                    className: "pt-[2px] text-[8px]",
                                    children: "+500"
                                }), (0, n.jsx)(a.IId, {
                                    className: "h-3 w-3"
                                })]
                            }),
                            badgeNode: x ? null : (0, n.jsx)(a.IId, {
                                className: "absolute top-0.5 left-4.5 h-3 w-3 rounded-[5px] text-[#B68C37]"
                            })
                        }), (0, n.jsx)(I, {
                            label: "My Projects",
                            href: r ? "/profile/".concat(r) : "/login",
                            prefetch: null,
                            icon: a.lAT,
                            activeIcon: a.gsv,
                            isExpanded: t
                        }), (0, n.jsx)(I, {
                            label: "Notification",
                            href: r ? "/notification" : "/login",
                            prefetch: null,
                            icon: a.aPH,
                            activeIcon: a.Biv,
                            isExpanded: t,
                            onClick: h,
                            accessoryNode: o > 0 ? (0, n.jsx)("span", {
                                className: (0, p.cn)("flex h-4 min-w-[16px] items-center justify-center rounded-[5px] bg-[#D42727] px-[4px] py-[2px] text-[10px] leading-[10px] font-bold text-white italic"),
                                children: o > 99 ? "99+" : o
                            }) : null,
                            badgeNode: o > 0 ? (0, n.jsx)("span", {
                                className: (0, p.cn)("absolute top-0.5 left-4.5 flex h-4 min-w-[16px] items-center justify-center rounded-[5px] bg-[#D42727] px-[4px] py-[2px] text-[10px] font-bold text-white italic"),
                                children: o > 99 ? "99+" : o
                            }) : null
                        })]
                    })
                },
                A = e => {
                    let {
                        isExpanded: t,
                        tabBlankHover: s,
                        onToggleExpanded: r,
                        onMouseEnter: l,
                        onMouseLeave: o,
                        className: d
                    } = e, {
                        track: x
                    } = (0, c.s)();
                    return (0, n.jsxs)("div", {
                        className: (0, p.cn)("relative flex h-14 cursor-pointer items-center px-1.5 transition-all duration-200", t ? "justify-between" : "justify-center", d),
                        onMouseEnter: l,
                        onMouseLeave: o,
                        children: [(0, n.jsxs)(i(), {
                            href: "/",
                            className: (0, p.cn)("flex items-center", !t && s && "hidden"),
                            onClick: () => x("sidebar_tab_click", {
                                tab_name: "Logo"
                            }),
                            children: [(0, n.jsx)("img", {
                                src: "/icons/logo.svg",
                                alt: "YouWare Logo",
                                className: (0, p.cn)("h-6 w-6 transition-all duration-200")
                            }), (0, n.jsx)("img", {
                                src: "/icons/menu-title.svg",
                                alt: "menu title",
                                className: (0, p.cn)("aspect-[75.40/11.00] h-[11px] w-[75.403px] overflow-visible transition-all duration-200 ease-in-out", t ? "ml-2 max-w-none opacity-100" : "max-w-0 opacity-0")
                            })]
                        }), (0, n.jsx)("button", {
                            onClick: r,
                            className: (0, p.cn)("ml-auto cursor-pointer rounded-[6px] transition-all duration-200", t ? "h-6 w-6 p-1 hover:cursor-w-resize hover:bg-black/3" : "h-9 w-9 bg-black/3 p-2.5 hover:cursor-e-resize hover:bg-black/6", t || s ? "block" : "hidden"),
                            children: (0, n.jsx)(a.YI5, {
                                className: "h-4 w-4"
                            })
                        })]
                    })
                },
                M = e => {
                    let {
                        isExpanded: t,
                        className: s
                    } = e, {
                        track: r
                    } = (0, c.s)();
                    return (0, n.jsxs)("div", {
                        className: (0, p.cn)("flex gap-1", t ? "mx-1 flex-row" : "flex-col", s),
                        children: [(0, n.jsx)("button", {
                            className: "rounded-[8px] p-[7px] transition-colors hover:bg-black/3",
                            onClick: () => {
                                r("sidebar_social_click", {
                                    social_platform: "Twitter"
                                }), window.open("https://x.com/YouWareAI", "_blank")
                            },
                            children: (0, n.jsx)(a.ase, {
                                className: "h-[14px] w-[14px] text-black/65"
                            })
                        }), (0, n.jsx)("button", {
                            className: "rounded-[8px] p-[7px] transition-colors hover:bg-black/3",
                            onClick: () => {
                                r("sidebar_social_click", {
                                    social_platform: "Discord"
                                }), window.open("https://discord.gg/6fBAZ2tzfK", "_blank")
                            },
                            children: (0, n.jsx)(a.r53, {
                                className: "h-[14px] w-[14px] text-black/65"
                            })
                        })]
                    })
                },
                D = e => {
                    let {
                        initialExpanded: t = !0
                    } = e, [s, r] = (0, l.useState)(t), [m, h] = (0, l.useState)(!1), {
                        track: f
                    } = (0, c.s)();
                    (0, l.useEffect)(() => {
                        (0, d.gN)(s)
                    }, [s]);
                    let b = e => {
                            r(e), f("sidebar_switch_click", {
                                action: e ? "open" : "close"
                            })
                        },
                        g = (0, l.useCallback)(e => {
                            e.preventDefault()
                        }, []);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: (0, p.cn)("fixed top-0 left-0 z-50 hidden h-14 items-center px-3", "max-md:flex"),
                            children: [(0, n.jsx)("div", {
                                className: "p-2",
                                onClick: () => b(!0),
                                children: (0, n.jsx)(a.tOc, {
                                    className: "h-4 w-4"
                                })
                            }), (0, n.jsxs)(i(), {
                                href: "/",
                                className: "flex items-center",
                                onClick: () => f("sidebar_tab_click", {
                                    tab_name: "Logo"
                                }),
                                children: [(0, n.jsx)("img", {
                                    src: "/icons/logo.svg",
                                    alt: "YouWare Logo",
                                    className: "mr-1 ml-3 h-6 w-6 max-[390px]:ml-1 max-[370px]:hidden"
                                }), (0, n.jsx)("span", {
                                    className: "flex-1 text-[16px] max-[480px]:hidden",
                                    children: "YouWare"
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: (0, p.cn)("fixed inset-0 z-50 touch-none bg-black/12 md:hidden", !s && "hidden"),
                            onClick: () => b(!1),
                            onTouchMove: g
                        }), (0, n.jsxs)("aside", {
                            className: (0, p.cn)("flex h-full flex-col items-stretch bg-[#F1EFEC] px-2 pb-3 transition-all duration-200 ease-in-out", "md:relative md:transition-[width]", s ? "md:w-[211px]" : "md:w-[53px]", "max-md:fixed max-md:top-0 max-md:left-0 max-md:z-50 max-md:w-[211px] max-md:px-3 max-md:transition-transform", s ? "max-md:translate-x-0" : "max-md:-translate-x-full"),
                            children: [(0, n.jsx)(A, {
                                isExpanded: s,
                                tabBlankHover: m,
                                onToggleExpanded: () => b(!s),
                                onMouseEnter: () => h(!0),
                                onMouseLeave: () => h(!1)
                            }), (0, n.jsx)(S, {
                                isExpanded: s,
                                className: "mt-1 mb-8"
                            }), (0, n.jsx)(u, {
                                isExpanded: s
                            }), (0, n.jsx)("div", {
                                className: (0, p.cn)("flex-1 cursor-pointer", {
                                    "hover:cursor-e-resize": !s
                                }),
                                onClick: () => {
                                    s || b(!0)
                                },
                                onMouseEnter: () => h(!0),
                                onMouseLeave: () => h(!1)
                            }), (0, n.jsx)("div", {
                                className: (0, p.cn)("my-2 overflow-hidden rounded-[10px] transition-all delay-[200ms] duration-200 ease-in-out", s ? "max-h-20 scale-100 opacity-100 delay-[200ms] hover:bg-black/3" : "pointer-events-none max-h-0 max-w-0 scale-95 border-0 p-0 opacity-0 duration-0"),
                                children: (0, n.jsx)("img", {
                                    src: o.src,
                                    className: "aspect-[194/82] w-full cursor-pointer",
                                    alt: "",
                                    onClick: () => {
                                        f("sidebar_ad_click", {
                                            ad_name: "founding_creator"
                                        }), window.open("".concat((0, x.getProjectOrigin)(), "/project/bountymission-4xqqsk131m?enter_from=home&screen_status=1"), "_blank")
                                    }
                                })
                            }), (0, n.jsx)(_, {
                                isExpanded: s,
                                className: (0, p.cn)("transition-all duration-200 ease-in-out", s ? "max-h-20 scale-100 opacity-100 delay-[200ms] hover:bg-black/3" : "pointer-events-none max-h-0 max-w-0 scale-95 border-0 p-0 opacity-0 duration-0")
                            }), (0, n.jsx)(M, {
                                isExpanded: s,
                                className: "mt-2"
                            })]
                        })]
                    })
                }
        },
        93392: (e, t, s) => {
            s.d(t, {
                A: () => c,
                ErrorBoundary: () => o
            });
            var n = s(72011),
                a = s(53130),
                r = s(73787),
                i = s(92394);
            let l = {
                maxRetries: 3,
                reportToSentry: !0
            };
            class o extends r.Component {
                static getDerivedStateFromError(e) {
                    return {
                        hasError: !0,
                        error: e
                    }
                }
                componentDidCatch(e, t) {
                    let n = this.options.componentName || "Unknown";
                    if (i.Ay.error("Error Boundary caught error in ".concat(n), e, {
                            componentName: n,
                            errorInfo: t.componentStack,
                            retryCount: this.state.retryCount
                        }), this.options.reportToSentry && s.e(4286).then(s.bind(s, 14286)).then(s => {
                            s.captureException(e, {
                                tags: {
                                    component: n,
                                    errorBoundary: !0
                                },
                                extra: {
                                    errorInfo: t,
                                    retryCount: this.state.retryCount
                                }
                            })
                        }).catch(e => {
                            i.Ay.error("Failed to report error to Sentry", e)
                        }), this.options.onError) try {
                        this.options.onError(e, t)
                    } catch (e) {
                        i.Ay.error("Error in custom error handler", e)
                    }
                    this.setState({
                        error: e,
                        errorInfo: t
                    })
                }
                render() {
                    let {
                        hasError: e,
                        error: t
                    } = this.state, {
                        children: s,
                        fallback: n,
                        renderError: a
                    } = this.props;
                    return e && t ? a ? a(t, this.handleRetry) : n || this.renderDefaultError(t) : s
                }
                constructor(e) {
                    super(e), this.handleRetry = () => {
                        let {
                            maxRetries: e = 3
                        } = this.options;
                        if (this.state.retryCount >= e) return void i.Ay.warn("Max retries reached (".concat(e, "). Please refresh the page."));
                        if (i.Ay.info("Error Boundary retry attempt", {
                                retryCount: this.state.retryCount + 1,
                                maxRetries: e,
                                componentName: this.options.componentName
                            }), this.options.onRetry) try {
                            this.options.onRetry()
                        } catch (e) {
                            i.Ay.error("Error in custom retry handler", e)
                        }
                        this.setState({
                            hasError: !1,
                            error: null,
                            errorInfo: null,
                            retryCount: this.state.retryCount + 1
                        })
                    }, this.handleRefresh = () => {
                        window.location.reload()
                    }, this.renderDefaultError = e => (0, n.jsxs)("div", {
                        className: "mx-auto flex min-h-[120px] w-full max-w-[280px] items-center justify-center gap-2 p-2 sm:max-w-sm sm:gap-3 sm:p-4",
                        children: [(0, n.jsx)("div", {
                            className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#55644A]/10 sm:h-8 sm:w-8",
                            children: (0, n.jsx)(a.sFm, {
                                className: "h-3 w-3 text-[#55644A] sm:h-4 sm:w-4"
                            })
                        }), (0, n.jsx)("h3", {
                            className: "text-sm font-medium text-[#55644A] sm:text-base",
                            children: "Something went wrong"
                        })]
                    }), this.state = {
                        hasError: !1,
                        error: null,
                        errorInfo: null,
                        retryCount: 0
                    }, this.options = { ...l,
                        ...e
                    }
                }
            }
            let c = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = t.componentName || e.displayName || e.name || "Component",
                    a = a => (0, n.jsx)(o, { ...t,
                        componentName: s,
                        children: (0, n.jsx)(e, { ...a
                        })
                    });
                return a.displayName = "withErrorBoundary(".concat(s, ")"), a
            }
        },
        96711: (e, t, s) => {
            s.d(t, {
                $: () => a,
                s: () => r
            });
            let n = "plugin_page_visited",
                a = () => {
                    try {
                        let e = localStorage.getItem(n);
                        return !!e && JSON.parse(e)
                    } catch (e) {
                        return console.error("Error checking plugin page visit status:", e), !1
                    }
                },
                r = () => {
                    try {
                        localStorage.setItem(n, JSON.stringify(!0))
                    } catch (e) {
                        console.error("Error marking plugin page as visited:", e)
                    }
                }
        }
    }
]);