try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9461bce2-bbdd-46d2-a083-ba3fc89c612e", e._sentryDebugIdIdentifier = "sentry-dbid-9461bce2-bbdd-46d2-a083-ba3fc89c612e")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7998], {
        25679: (e, t, r) => {
            r.d(t, {
                Y: () => l
            });
            var s = r(65547);
            let l = (0, s.createServerReference)("40de8933cd2b3236443b21e40fef4fd53d5363573a", s.callServer, void 0, s.findSourceMapURL, "issueCodeForSession")
        },
        47998: (e, t, r) => {
            r.d(t, {
                Header: () => R,
                default: () => D
            });
            var s = r(72011),
                l = r(3417),
                a = r(25679),
                n = r(73787),
                o = r(36039),
                i = r(92394),
                c = r(37600);
            let d = e => {
                let {
                    onSuccess: t,
                    onError: r
                } = e, {
                    loginWithGoogleOneTap: s,
                    trackTriggerLogin: l,
                    trackLoginResult: a
                } = (0, o.A)(), d = (0, n.useRef)(!1), u = (0, n.useRef)(0);
                (0, n.useEffect)(() => {
                    if (d.current) return;
                    let e = () => {
                        if (!window.google) return void(u.current < 20 ? (u.current += 1, i.Ay.info("Google One Tap initialization attempt ".concat(u.current, "/").concat(20)), setTimeout(e, 500)) : i.Ay.error("Failed to initialize Google One Tap: Google script not loaded after maximum attempts"));
                        if (!d.current) try {
                            window.google.accounts.id.initialize({
                                client_id: "541265544701-ig5gkv7jg7a6od2rip81vpv99fej0oja.apps.googleusercontent.com",
                                callback: x,
                                auto_select: !1,
                                cancel_on_tap_outside: !1,
                                prompt_parent_id: "google-one-tap-container"
                            }), window.google.accounts.id.prompt(e => {
                                i.Ay.info("Google One Tap prompt callback", {
                                    isNotDisplayed: e.isNotDisplayed(),
                                    isSkippedMoment: e.isSkippedMoment(),
                                    isDismissedMoment: e.isDismissedMoment(),
                                    momentType: e.getMomentType()
                                }), e.isNotDisplayed() ? i.Ay.info("Google One Tap not displayed", {
                                    reason: e.getMomentType()
                                }) : e.isSkippedMoment() ? i.Ay.info("Google One Tap skipped", {
                                    reason: e.getMomentType()
                                }) : e.isDismissedMoment() && i.Ay.info("Google One Tap dismissed", {
                                    reason: e.getMomentType()
                                })
                            }), d.current = !0, i.Ay.info("Google One Tap initialized successfully")
                        } catch (e) {
                            i.Ay.error("Error initializing Google One Tap", e), null == r || r(e)
                        }
                    };
                    return e(), () => {
                        var e, t, r;
                        (null == (r = window.google) || null == (t = r.accounts) || null == (e = t.id) ? void 0 : e.cancel) && window.google.accounts.id.cancel()
                    }
                }, [t, r]);
                let x = async e => {
                    try {
                        i.Ay.info("Google One Tap credential response received"), l("google_one_tap", "home"), await s(e.credential), a("google_one_tap", "success", "home", ""), null == t || t()
                    } catch (e) {
                        i.Ay.error("Google One Tap login error", e), a("google_one_tap", "failed", "home", e.message || "unknown error"), (0, c.P)({
                            message: "login failed, please try again later",
                            type: "error"
                        }), null == r || r(e)
                    }
                };
                return null
            };
            var u = r(53130),
                x = r(23914),
                p = r(86881),
                m = r(64342),
                f = r(89498);
            let h = "yourware_search_history",
                g = () => {
                    let e = () => {
                        try {
                            let e = localStorage.getItem(h);
                            return e ? JSON.parse(e) : []
                        } catch (e) {
                            return []
                        }
                    };
                    return {
                        getHistory: e,
                        addToHistory: t => {
                            if (!t.trim()) return;
                            let r = e(),
                                s = r.findIndex(e => e.query === t); - 1 !== s && r.splice(s, 1), r.unshift({
                                query: t.trim(),
                                timestamp: Date.now()
                            });
                            let l = r.slice(0, 10);
                            try {
                                localStorage.setItem(h, JSON.stringify(l))
                            } catch (e) {}
                        },
                        removeFromHistory: t => {
                            let r = e().filter(e => e.query !== t);
                            localStorage.setItem(h, JSON.stringify(r))
                        }
                    }
                };

            function b(e) {
                let {
                    inputRef: t,
                    onClickHistory: r,
                    onPreviewHistory: l,
                    className: a
                } = e, [o, i] = (0, n.useState)([]), [c, d] = (0, n.useState)(-1), {
                    getHistory: m,
                    removeFromHistory: h
                } = g(), {
                    track: b
                } = (0, p.s)();
                (0, n.useEffect)(() => {
                    i(m()), b("search_history", {
                        action: "show"
                    })
                }, []), (0, n.useEffect)(() => {
                    d(-1)
                }, [o]);
                let j = (0, x.A)(e => {
                    if (0 !== o.length) switch (e.key) {
                        case "ArrowDown":
                            e.preventDefault(), d(e => e < o.length - 1 ? e + 1 : -1);
                            break;
                        case "ArrowUp":
                            e.preventDefault(), d(e => e > 0 ? e - 1 : -1)
                    }
                });
                (0, n.useEffect)(() => {
                    let e = t.current;
                    if (e) return e.addEventListener("keydown", j), () => {
                        e.removeEventListener("keydown", j)
                    }
                }, [t, j]), (0, n.useEffect)(() => {
                    c >= 0 && c < o.length ? l(o[c].query) : -1 === c && l("")
                }, [c, o, l]);
                let v = (0, n.useCallback)(e => {
                        r(e)
                    }, []),
                    w = (0, n.useCallback)(e => {
                        var r;
                        h(e), i(m()), null == (r = t.current) || r.focus(), b("search_history", {
                            action: "delete",
                            query: e
                        })
                    }, []);
                return 0 === o.length ? null : (0, s.jsx)("div", {
                    className: (0, f.cn)("absolute top-full z-10 mt-2.5 w-full rounded-[16px] bg-white p-2 shadow-[0px_16px_32px_-1px_rgba(0,0,0,0.15)]", a),
                    children: (0, s.jsx)("div", {
                        className: "space-y-1",
                        children: o.map((e, t) => (0, s.jsxs)("button", {
                            onClick: () => v(e.query),
                            className: (0, f.cn)("group flex h-8 w-full cursor-pointer items-center gap-2 rounded-[8px] px-2 py-1 hover:bg-black/3", c === t && "bg-black/3"),
                            children: [(0, s.jsx)("div", {
                                className: "size-4",
                                children: (0, s.jsx)(u.uBk, {
                                    className: "size-4"
                                })
                            }), (0, s.jsx)("p", {
                                className: "flex-1 truncate text-left text-[14px]",
                                children: e.query
                            }), (0, s.jsx)("div", {
                                className: "size-4 opacity-0 group-hover:opacity-100",
                                onClick: t => {
                                    t.stopPropagation(), t.preventDefault(), w(e.query)
                                },
                                children: (0, s.jsx)(u.Qks, {
                                    className: "size-4"
                                })
                            })]
                        }, "".concat(e.query, "-").concat(e.timestamp)))
                    })
                })
            }

            function j(e) {
                let {
                    className: t
                } = e, [r, a] = (0, n.useState)(""), [o, i] = (0, n.useState)(""), [c, d] = (0, n.useState)(!1), h = (0, n.useRef)(null), j = (0, n.useRef)(null), {
                    addToHistory: v
                } = g(), {
                    track: w
                } = (0, p.s)(), y = o || r, k = y.length > 0, N = (0, l.useRouter)();
                (0, n.useEffect)(() => {
                    let e = new URLSearchParams(window.location.search).get("q");
                    e && a(e)
                }, []), (0, n.useEffect)(() => {
                    !c && o && a(o)
                }, [c, o]), (0, n.useEffect)(() => {
                    setTimeout(() => {
                        w("search_entrance", {
                            action: "show",
                            location: (0, m.em)()
                        })
                    }, 100)
                }, []), (0, n.useEffect)(() => {
                    c && w("search_entrance", {
                        action: "click",
                        location: (0, m.em)()
                    })
                }, [c]);
                let _ = (0, n.useCallback)(e => {
                        a(e.target.value), i("")
                    }, []),
                    C = (0, n.useCallback)(() => {
                        a(""), i(""), setTimeout(() => {
                            var e;
                            null == (e = h.current) || e.focus()
                        }, 10), w("search_entrance", {
                            action: "delete",
                            location: (0, m.em)()
                        })
                    }, []),
                    S = (0, x.A)(() => {
                        if (y.trim()) {
                            var e;
                            v(y), null == (e = h.current) || e.blur(), d(!1), w("search_confirm", {
                                query: y,
                                location: (0, m.em)(),
                                type: o ? "history" : "direct"
                            });
                            let t = "/results?q=".concat(encodeURIComponent(y));
                            if ("/results" === location.pathname) {
                                let e = (0, m.qn)("enter_from") || "";
                                N.replace(e ? "".concat(t, "&enter_from=").concat(e) : t, {
                                    scroll: !1
                                })
                            } else N.push("".concat(t, "&enter_from=").concat((0, m.em)()))
                        }
                    }),
                    A = (0, x.A)(e => {
                        if ("Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing) {
                            if ("Escape" === e.key) {
                                var t;
                                null == (t = h.current) || t.blur(), d(!1)
                            }
                        } else e.preventDefault(), S()
                    }),
                    E = (0, x.A)(e => {
                        i(e), setTimeout(() => {
                            S()
                        }, 10)
                    }),
                    L = (0, n.useCallback)(e => {
                        i(e)
                    }, []),
                    T = (0, n.useCallback)(() => {
                        d(!0)
                    }, []),
                    O = (0, n.useCallback)(e => {
                        var t;
                        (null == (t = j.current) ? void 0 : t.contains(e.relatedTarget)) || d(!1)
                    }, []);
                return (0, s.jsxs)("div", {
                    ref: j,
                    onFocus: T,
                    onBlur: O,
                    className: (0, f.cn)("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", "box-content flex h-9 max-w-[640px] items-center gap-2 rounded-full border", c ? "border-brand" : "border-black/12", t),
                    children: [(0, s.jsxs)("div", {
                        className: "flex h-full flex-1 items-center gap-2",
                        children: [(0, s.jsx)("input", {
                            ref: h,
                            type: "text",
                            value: y,
                            onChange: _,
                            onKeyDown: A,
                            placeholder: "Search for any content or user",
                            maxLength: 100,
                            className: "caret-brand h-full flex-1 pl-4 text-[14px] outline-none placeholder:text-black/30"
                        }), k && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("button", {
                                onClick: C,
                                className: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-full hover:bg-black/3",
                                "aria-label": "Clear search",
                                children: (0, s.jsx)(u.Qks, {
                                    className: "size-4"
                                })
                            }), (0, s.jsx)("div", {
                                className: "mx-0.5 h-4 w-px bg-black/12"
                            })]
                        })]
                    }), (0, s.jsx)("button", {
                        onClick: () => S(),
                        className: (0, f.cn)("mr-1 box-border flex h-7 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full hover:opacity-90 disabled:cursor-not-allowed", k ? "bg-brand text-white" : "text-brand bg-black/3"),
                        disabled: !k,
                        "aria-label": "Search",
                        children: (0, s.jsx)(u.uBk, {
                            className: "size-4"
                        })
                    }), c ? (0, s.jsx)(b, {
                        inputRef: h,
                        onClickHistory: E,
                        onPreviewHistory: L,
                        className: "absolute top-full z-50 mt-2 w-full max-w-[640px]"
                    }) : null]
                })
            }
            var v = r(33686),
                w = r(1652),
                y = r(74731),
                k = r(27743),
                N = r(28556),
                _ = r.n(N),
                C = r(93248),
                S = r(71246),
                A = r(66185),
                E = r(40605);
            let L = e => {
                    var t;
                    let {
                        onGotoSubscription: r,
                        onCloseMenu: i
                    } = e, [d, x] = (0, n.useState)(!1), {
                        showModal: f
                    } = (0, E.O)(), {
                        track: h
                    } = (0, p.s)(), {
                        logout: g
                    } = (0, o.A)(), b = (0, l.useRouter)(), {
                        user: j
                    } = (0, v.J)(), {
                        subscriptionInfo: y
                    } = (0, w.R)(), {
                        usage: N
                    } = (0, E.O)(), L = (0, n.useMemo)(() => (null == y ? void 0 : y.plan) === "Pro", [null == y ? void 0 : y.plan]);
                    (0, n.useEffect)(() => {
                        h("header_profile_show", {
                            location: (0, m.em)()
                        })
                    }, [y]);
                    let T = () => {
                            j && ((0, k.isComOrigin)() ? b.push("/profile/".concat(j.uid)) : window.location.href = "".concat((0, k.getComOrigin)(), "/profile/").concat(j.uid))
                        },
                        O = async () => {
                            try {
                                await g(), (0, a.Y)((0, k.getOrigin)()).catch(() => {
                                    (0, k.isComOrigin)() ? b.push("/"): window.location.href = (0, k.getComOrigin)()
                                })
                            } catch (e) {
                                (0, c.P)({
                                    message: "Failed to logout, please try again later",
                                    type: "error"
                                })
                            }
                            i()
                        };
                    return j ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            style: {
                                animation: "fadeIn 0.2s ease-out"
                            },
                            className: "jsx-e68520c3668174cd absolute top-11 right-0 z-10 w-[260px] rounded-[16px] border border-black/3 bg-white p-2 shadow-[0px_16px_32px_-1px_rgba(0,0,0,0.15)]",
                            children: [(0, s.jsxs)("div", {
                                className: "jsx-e68520c3668174cd flex items-center gap-3 p-2",
                                children: [(0, s.jsxs)("div", {
                                    onClick: T,
                                    className: "jsx-e68520c3668174cd relative h-11 w-11 flex-shrink-0 cursor-pointer rounded-full bg-black/6",
                                    children: [(0, s.jsx)("img", {
                                        src: j.photo_url || "/images/avatar.svg",
                                        alt: "User avatar",
                                        className: "jsx-e68520c3668174cd h-full w-full rounded-full object-cover"
                                    }), (0, s.jsx)(S.A, {
                                        className: "absolute -right-0.75 -bottom-px border-white",
                                        userBadge: null == (t = j.badge) ? void 0 : t.type,
                                        size: "12",
                                        tooltipSide: "right"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "jsx-e68520c3668174cd flex-1 space-y-0.5 overflow-hidden",
                                    children: [(0, s.jsx)("div", {
                                        className: "jsx-e68520c3668174cd truncate text-[20px] font-bold text-black/95",
                                        children: j.display_name || "User"
                                    }), (0, s.jsx)("div", {
                                        className: "jsx-e68520c3668174cd truncate text-[12px] text-black/65",
                                        children: j.email
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "jsx-e68520c3668174cd w-[244px] rounded-xl bg-black/3",
                                children: [(0, s.jsxs)("div", {
                                    className: "jsx-e68520c3668174cd flex h-[42px] items-center gap-2 overflow-hidden rounded-xl py-2 pr-2 pl-3",
                                    children: [(0, s.jsx)("div", {
                                        className: "jsx-e68520c3668174cd flex-1 text-[16px] font-bold text-black/95",
                                        children: L ? "Pro" : "Free"
                                    }), (0, s.jsx)("button", {
                                        onClick: () => r("avatar_hover_profile"),
                                        className: "jsx-e68520c3668174cd flex h-[26px] min-w-12 items-center justify-center rounded-lg bg-[#55644a] px-2 py-[5px] text-[12px] text-white transition-colors hover:bg-[#55644a]/90",
                                        children: L ? "View plans" : "Upgrade"
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "jsx-e68520c3668174cd px-2.5",
                                    children: (0, s.jsx)("div", {
                                        className: "jsx-e68520c3668174cd h-px bg-black/6"
                                    })
                                }), (0, s.jsxs)("button", {
                                    onClick: e => {
                                        e.stopPropagation(), x(!0)
                                    },
                                    className: "jsx-e68520c3668174cd flex h-10 w-full items-center gap-2 overflow-hidden rounded-xl px-2.5 py-3 hover:bg-black/6",
                                    children: [(0, s.jsx)(u.Djw, {
                                        className: "h-4 w-4"
                                    }), (0, s.jsx)("span", {
                                        className: "jsx-e68520c3668174cd flex-1 text-left text-[14px] text-black/95",
                                        children: "Credits"
                                    }), (0, s.jsxs)("div", {
                                        className: "jsx-e68520c3668174cd flex items-center gap-0.5",
                                        children: [(0, s.jsx)("span", {
                                            className: "jsx-e68520c3668174cd text-[12px] font-bold text-black/65",
                                            children: "number" == typeof(null == y ? void 0 : y.total_credits) ? y.total_credits.toLocaleString() : ""
                                        }), (0, s.jsx)(u.ye6, {
                                            className: "h-4 w-4 text-black/65"
                                        })]
                                    })]
                                }), (0, s.jsxs)("button", {
                                    onClick: e => {
                                        e.stopPropagation(), f(A.Y.HEADER_USER_MENU)
                                    },
                                    className: "jsx-e68520c3668174cd flex h-10 w-full items-center gap-2 overflow-hidden rounded-xl px-2.5 py-3 hover:bg-black/6",
                                    children: [(0, s.jsx)("img", {
                                        src: "/icons/backend_line_icon.svg",
                                        alt: "Backend",
                                        className: "jsx-e68520c3668174cd h-4 w-4"
                                    }), (0, s.jsx)("span", {
                                        className: "jsx-e68520c3668174cd flex-1 text-left text-[14px] text-black/95",
                                        children: "Backend"
                                    }), (0, s.jsxs)("div", {
                                        className: "jsx-e68520c3668174cd flex items-center gap-0.5",
                                        children: [(0, s.jsx)("span", {
                                            className: "jsx-e68520c3668174cd text-[12px] font-bold text-black/65",
                                            children: "".concat((null == N ? void 0 : N.active) || "0", "/").concat((null == N ? void 0 : N.total) || "0")
                                        }), (0, s.jsx)(u.ye6, {
                                            className: "h-4 w-4 text-black/65"
                                        })]
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "jsx-e68520c3668174cd flex flex-col gap-1",
                                children: [(0, s.jsxs)("div", {
                                    onClick: T,
                                    className: "jsx-e68520c3668174cd flex h-10 items-center gap-2 overflow-hidden rounded-xl px-2.5 py-3 hover:bg-black/3",
                                    children: [(0, s.jsx)(u.lAT, {
                                        className: "h-4 w-4"
                                    }), (0, s.jsx)("span", {
                                        className: "jsx-e68520c3668174cd flex-1 text-left text-[14px] text-black/95",
                                        children: "My Projects"
                                    }), (0, s.jsx)(u.ye6, {
                                        className: "h-4 w-4 text-black/65"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    onClick: () => {
                                        (0, k.isComOrigin)() ? b.push("/affiliate"): window.location.href = "".concat((0, k.getComOrigin)(), "/affiliate")
                                    },
                                    className: "jsx-e68520c3668174cd flex h-10 items-center gap-2 overflow-hidden rounded-xl px-2.5 py-3 hover:bg-black/3",
                                    children: [(0, s.jsx)(u.C_5, {
                                        className: "h-4 w-4"
                                    }), (0, s.jsx)("span", {
                                        className: "jsx-e68520c3668174cd flex-1 text-left text-[14px] text-black/95",
                                        children: "Affiliate"
                                    }), (0, s.jsx)(u.ye6, {
                                        className: "h-4 w-4 text-black/65"
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "jsx-e68520c3668174cd flex items-center justify-center rounded-lg px-2",
                                    children: (0, s.jsx)("div", {
                                        className: "jsx-e68520c3668174cd h-px w-full bg-black/6"
                                    })
                                }), (0, s.jsxs)("button", {
                                    onClick: O,
                                    className: "jsx-e68520c3668174cd flex h-10 items-center gap-2 overflow-hidden rounded-xl px-2.5 py-3 hover:bg-black/3",
                                    children: [(0, s.jsx)(u.jfQ, {
                                        className: "h-4 w-4"
                                    }), (0, s.jsx)("span", {
                                        className: "jsx-e68520c3668174cd flex-1 text-left text-[14px] text-black/95",
                                        children: "Logout"
                                    })]
                                })]
                            })]
                        }), d && (0, s.jsx)(C.I, {
                            subscription: y,
                            position: "header_profile",
                            onClose: () => x(!1)
                        }), (0, s.jsx)(_(), {
                            id: "e68520c3668174cd",
                            children: "@keyframes fadeIn{from{opacity:0;transform:translatey(-10px)}to{opacity:1;transform:translatey(0)}}"
                        })]
                    }) : null
                },
                T = () => {
                    let [e, t] = (0, n.useState)(!1), r = (0, n.useRef)(null), a = (0, l.useRouter)(), o = (0, l.usePathname)(), {
                        track: i
                    } = (0, p.s)(), c = (0, n.useRef)(null), {
                        user: d
                    } = (0, v.J)(), {
                        subscriptionInfo: x
                    } = (0, w.R)(), h = (0, y.I)(!1, 1200), g = (0, n.useMemo)(() => (null == x ? void 0 : x.plan) === "Pro", [null == x ? void 0 : x.plan]), b = (0, n.useMemo)(() => (0, m.em)(o), [o]);
                    (0, n.useEffect)(() => {
                        let e = e => {
                            r.current && !r.current.contains(e.target) && t(!1)
                        };
                        return document.addEventListener("mousedown", e), () => {
                            document.removeEventListener("mousedown", e)
                        }
                    }, []);
                    let j = e => {
                        (null == d ? void 0 : d.uid) && (i("sub_upgrade_click", {
                            click_from: e
                        }), (0, k.isComOrigin)() ? a.push("/subscription".concat(b ? "?location=".concat(b) : "")) : window.location.href = "".concat((0, k.getComOrigin)(), "/subscription").concat(b ? "?location=".concat(b) : ""))
                    };
                    return void 0 === d ? null : (0, s.jsxs)("div", {
                        className: "flex items-center",
                        children: ["/create" === o ? null : (0, s.jsxs)("div", {
                            className: "bg-brand hover:bg-brand/90 mr-3 flex h-9 items-center gap-1.5 rounded-[10px] px-2.5 text-[14px] leading-8 font-medium text-white",
                            onClick: () => {
                                i("header_create_click", {
                                    location: b
                                }), (0, k.isComOrigin)() ? a.push("/create") : window.location.href = (0, k.getComOrigin)() + "/create"
                            },
                            children: [(0, s.jsx)(u.Ld_, {
                                className: "h-[14px] w-[14px]"
                            }), "Create"]
                        }), d ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsxs)("div", {
                                className: (0, f.cn)("border-brand/30 text-brand mr-2.5 flex h-9 cursor-pointer items-center gap-[6px] rounded-[10px] border px-2.5 text-[14px] leading-8 font-medium hover:bg-black/3", x ? "" : "min-w-[65px] animate-pulse"),
                                onClick: () => j("header"),
                                children: [g && (0, s.jsx)(u.xsv, {
                                    className: "h-[14px] w-[14px]"
                                }), (0, s.jsx)("span", {
                                    children: x ? g ? "Pro" : "Upgrade" : ""
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "relative cursor-pointer rounded-full p-1 ".concat(e && "bg-black/6"),
                                ref: r,
                                onMouseEnter: () => {
                                    c.current && (clearTimeout(c.current), c.current = null), t(!0)
                                },
                                onMouseLeave: () => {
                                    c.current = setTimeout(() => {
                                        t(!1)
                                    }, 300)
                                },
                                onClick: e => {
                                    h ? t(!0) : e.target === e.currentTarget && (null == d ? void 0 : d.uid) && a.push("/profile/".concat(d.uid))
                                },
                                children: [(0, s.jsx)("div", {
                                    className: "flex cursor-pointer items-center",
                                    children: (0, s.jsx)("div", {
                                        className: "rounded-full bg-black/6 transition-transform focus:outline-none ".concat(o === "/profile/".concat(d.uid) && "ring ring-black ring-offset-2"),
                                        "aria-label": "Go to profile",
                                        children: (0, s.jsx)("img", {
                                            src: d.photo_url || "/images/avatar.svg",
                                            alt: "User avatar",
                                            className: "h-8 w-8 overflow-hidden rounded-full object-cover"
                                        })
                                    })
                                }), e && (0, s.jsx)(L, {
                                    onGotoSubscription: j,
                                    onCloseMenu: () => t(!1)
                                })]
                            })]
                        }) : (0, s.jsx)("div", {
                            className: "border-brand/30 text-brand h-9 cursor-pointer rounded-[10px] border px-2.5 text-[14px] leading-8 font-medium hover:bg-black/3",
                            onClick: () => {
                                i("header_login_click", {
                                    location: b
                                }), a.push("/login?returnTo=".concat(encodeURIComponent(window.location.href)))
                            },
                            children: "Sign in"
                        })]
                    })
                };
            var O = r(83363);
            let R = e => {
                    let {
                        className: t,
                        showLogo: r = !1,
                        onClickLogo: n
                    } = e, {
                        isLoggedIn: o
                    } = (0, v.J)(), c = (0, l.usePathname)(), u = (0, l.useRouter)(), x = !1 === o && ["/", "/home"].includes(c), p = ["/", "/home", "/results"].includes(c) || c.startsWith("/project/");
                    return (0, s.jsxs)(s.Fragment, {
                        children: [x && (0, s.jsx)(d, {
                            onSuccess: () => {
                                (0, a.Y)(window.location.href).catch(() => {
                                    u.refresh()
                                })
                            },
                            onError: e => {
                                i.Ay.error("Google One Tap error:", e)
                            }
                        }), (0, s.jsxs)("header", {
                            className: (0, f.cn)("bg-body sticky top-0 z-20 flex h-14 w-full flex-shrink-0 items-center justify-between gap-3 px-5 transition-all duration-300", r ? "justify-between" : "justify-end", t),
                            children: [r ? (0, s.jsx)(O.A, {
                                onClickLogo: n
                            }) : null, p ? (0, s.jsx)(j, {
                                className: "w-full max-w-[min(640px,calc(100%-500px))] max-lg:hidden"
                            }) : null, (0, s.jsx)(T, {})]
                        })]
                    })
                },
                D = R
        },
        54736: (e, t, r) => {
            r.d(t, {
                nD: () => i,
                ub: () => u,
                As: () => p,
                $m: () => d,
                $n: () => y,
                AM: () => N,
                hl: () => C,
                Wv: () => _,
                m_: () => j,
                ZI: () => w,
                k$: () => v
            });
            var s = r(72011),
                l = r(53130),
                a = r(73787);
            let n = (0, a.createContext)(void 0),
                o = () => {
                    let e = (0, a.useContext)(n);
                    if (!e) throw Error("Accordion components must be used within an Accordion");
                    return e
                },
                i = a.forwardRef((e, t) => {
                    let {
                        children: r,
                        type: l = "single",
                        collapsible: o = !0,
                        defaultValue: i,
                        className: c = "",
                        ...d
                    } = e, [u, x] = (0, a.useState)(i || null), [p, m] = (0, a.useState)([]);
                    return (0, s.jsx)(n.Provider, {
                        value: {
                            expandedItem: u,
                            expandedItems: p,
                            onToggle: e => {
                                "single" === l ? x(u === e && o ? null : e) : "multiple" === l && m(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
                            },
                            type: l,
                            collapsible: o
                        },
                        children: (0, s.jsx)("div", {
                            ref: t,
                            className: c,
                            ...d,
                            children: r
                        })
                    })
                });
            i.displayName = "Accordion";
            let c = a.forwardRef((e, t) => {
                let {
                    children: r,
                    value: l,
                    className: a = "",
                    ...n
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: "border-b border-black/12 px-3 py-8 ".concat(a),
                    ...n,
                    children: r
                })
            });
            c.displayName = "AccordionItem";
            let d = a.forwardRef((e, t) => {
                let {
                    children: r,
                    className: n = "",
                    ...i
                } = e, {
                    expandedItem: c,
                    expandedItems: d,
                    onToggle: u,
                    type: p
                } = o(), m = a.useContext(x), f = "single" === p ? c === m : d.includes(m);
                return (0, s.jsxs)("button", {
                    ref: t,
                    className: "hover:text-brand flex w-full cursor-pointer items-center justify-between text-left ".concat(n),
                    onClick: () => u(m),
                    ...i,
                    children: [r, (0, s.jsx)(l.eQr, {
                        className: "h-4 w-4 transition-transform ".concat(f ? "rotate-180 transform" : "", " transition-all duration-300")
                    })]
                })
            });
            d.displayName = "AccordionTrigger";
            let u = a.forwardRef((e, t) => {
                let {
                    children: r,
                    className: l = "",
                    ...n
                } = e, {
                    expandedItem: i,
                    expandedItems: c,
                    type: d
                } = o(), u = a.useContext(x);
                return ("single" === d ? i === u : c.includes(u)) ? (0, s.jsx)("div", {
                    ref: t,
                    className: "pt-3 text-[14px] text-black/65 ".concat(l),
                    ...n,
                    children: r
                }) : null
            });
            u.displayName = "AccordionContent";
            let x = a.createContext(""),
                p = a.forwardRef((e, t) => {
                    let {
                        children: r,
                        value: l,
                        ...a
                    } = e;
                    return (0, s.jsx)(x.Provider, {
                        value: l,
                        children: (0, s.jsx)(c, {
                            ref: t,
                            value: l,
                            ...a,
                            children: r
                        })
                    })
                });
            p.displayName = "AccordionItem";
            var m = r(32539),
                f = r(89826);

            function h() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, f.QP)((0, m.$)(t))
            }
            var g = r(76907);

            function b(e) {
                let {
                    delayDuration: t = 0,
                    ...r
                } = e;
                return (0, s.jsx)(g.Kq, {
                    "data-slot": "tooltip-provider",
                    delayDuration: t,
                    ...r
                })
            }

            function j(e) {
                let { ...t
                } = e;
                return (0, s.jsx)(b, {
                    delayDuration: 700,
                    children: (0, s.jsx)(g.bL, {
                        "data-slot": "tooltip",
                        ...t
                    })
                })
            }

            function v(e) {
                let { ...t
                } = e;
                return (0, s.jsx)(g.l9, {
                    "data-slot": "tooltip-trigger",
                    ...t
                })
            }

            function w(e) {
                let {
                    className: t,
                    sideOffset: r = 0,
                    children: l,
                    arrowColor: a = "#2C2C2C",
                    backgroundColor: n = "#2C2C2C",
                    ...o
                } = e;
                return (0, s.jsx)(g.ZL, {
                    children: (0, s.jsxs)(g.UC, {
                        "data-slot": "tooltip-content",
                        sideOffset: r,
                        className: h("animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-[6px] px-[6px] py-[5px] text-xs text-balance text-white", t),
                        style: {
                            backgroundColor: n
                        },
                        ...o,
                        children: [l, (0, s.jsx)(g.i3, {
                            className: "z-50 h-1 w-3",
                            asChild: !0,
                            children: (0, s.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "12",
                                height: "4",
                                viewBox: "0 0 12 4",
                                fill: "currentColor",
                                children: (0, s.jsx)("path", {
                                    d: "M3.91421 1.41421L5.83005 3.33005C6.20005 3.70005 6.79995 3.70005 7.16995 3.33005L9.08579 1.41421C9.99129 0.508708 11.2194 0 12.5 0L6.5 0L0.5 0C1.78058 0 3.00871 0.508707 3.91421 1.41421Z",
                                    fill: a
                                })
                            })
                        })]
                    })
                })
            }
            let y = (0, a.forwardRef)((e, t) => {
                let {
                    tooltip: r,
                    tooltipSide: l = "top",
                    className: a,
                    children: n,
                    ...o
                } = e, i = (0, s.jsx)("button", {
                    ref: t,
                    className: h("rounded-[10px] p-1.5 transition-all duration-300", "cursor-pointer hover:bg-black/3", "disabled:cursor-not-allowed disabled:opacity-50", a),
                    ...o,
                    children: n
                });
                return r ? (0, s.jsxs)(j, {
                    children: [(0, s.jsx)(v, {
                        asChild: !0,
                        children: i
                    }), (0, s.jsx)(w, {
                        side: l,
                        sideOffset: 4,
                        children: r
                    })]
                }) : i
            });
            y.displayName = "Button";
            var k = r(42156);
            let N = k.bL,
                _ = k.l9;
            k.Mz, k.ZL;
            let C = a.forwardRef((e, t) => {
                let {
                    className: r,
                    align: l = "center",
                    sideOffset: a = 4,
                    showArrow: n = !1,
                    ...o
                } = e;
                return (0, s.jsx)(k.ZL, {
                    children: (0, s.jsxs)(k.UC, {
                        ref: t,
                        align: l,
                        sideOffset: a,
                        className: h("z-50", r),
                        ...o,
                        children: [o.children, n && (0, s.jsx)(k.i3, {
                            className: "fill-popover -my-px drop-shadow-[0_1px_0_hsl(var(--border))]"
                        })]
                    })
                })
            });
            C.displayName = k.UC.displayName
        },
        64342: (e, t, r) => {
            r.d(t, {
                em: () => l,
                qn: () => a
            });
            var s = r(72191);
            let l = e => {
                    let t = e;
                    return void 0 === t && (t = window.location.pathname), t.split("/")[1] || "home"
                },
                a = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    try {
                        return new URLSearchParams(window.location.search).get(e) || t
                    } catch (e) {
                        return s.error("getQueryParam error: ".concat(e)), t
                    }
                }
        },
        71246: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var s = r(72011),
                l = r(53130),
                a = r(54736);
            r(73787);
            var n = r(89498);

            function o(e) {
                let {
                    className: t,
                    size: r,
                    background: l,
                    icon: o,
                    tooltip: i = "",
                    tooltipSide: c = "left"
                } = e;
                return (0, s.jsxs)(a.m_, {
                    children: [(0, s.jsx)(a.k$, {
                        asChild: !0,
                        children: (0, s.jsx)("div", {
                            className: (0, n.cn)("box-content flex cursor-pointer items-center justify-center rounded-full border-white", "32" === r ? "h-8 w-8 border-2" : "20" === r ? "h-5 w-5 border-2" : "h-3 w-3 border-1", t),
                            style: {
                                background: l
                            },
                            children: (0, s.jsx)(o, {
                                size: "32" === r ? 20 : "20" === r ? 14 : 8
                            })
                        })
                    }), (0, s.jsx)(a.ZI, {
                        side: c,
                        children: i
                    })]
                })
            }

            function i(e) {
                let {
                    className: t,
                    userBadge: r,
                    size: a = "12",
                    tooltipSide: i = "left"
                } = e;
                return r ? "FoundingCreator" === r ? (0, s.jsx)(o, {
                    className: (0, n.cn)("text-white", t),
                    size: a,
                    background: "linear-gradient(94deg, #B9BEC8 0%, #959AA4 100%)",
                    icon: l.uz8,
                    tooltip: "Founding Creator",
                    tooltipSide: i
                }) : "Team" === r ? (0, s.jsx)(o, {
                    className: (0, n.cn)("text-brand", t),
                    size: a,
                    background: "linear-gradient(94deg, #E3E3DD 0%, #C6C8B8 100%)",
                    icon: l.A_B,
                    tooltip: "Team",
                    tooltipSide: i
                }) : "Founder" === r ? (0, s.jsx)(o, {
                    className: (0, n.cn)("text-white", t),
                    size: a,
                    background: "linear-gradient(94deg, #C7AB73 0%, #B9A375 100%)",
                    icon: l.A_B,
                    tooltip: "Founder",
                    tooltipSide: i
                }) : null : null
            }
        },
        72913: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            var s, l, a = r(72011),
                n = r(73787);
            null == (l = globalThis || window) || null == (s = l.requestIdleCallback) || s.call(l, () => r.e(6531).then(r.t.bind(r, 98036, 23)));
            let o = e => {
                let {
                    animationPath: t,
                    animationData: s,
                    className: l = "",
                    style: o,
                    renderer: i = "svg",
                    loop: c = !0,
                    autoplay: d = !0,
                    errorComponent: u,
                    loadingComponent: x,
                    onError: p,
                    onLoad: m
                } = e, f = (0, n.useRef)(null), [h, g] = (0, n.useState)(null), [b, j] = (0, n.useState)(!0);
                return ((0, n.useEffect)(() => {
                    let e = null,
                        l = !0;
                    return (async () => {
                        try {
                            g(null), j(!0);
                            let a = (await r.e(6531).then(r.t.bind(r, 98036, 23))).default;
                            if (!l || !f.current) return;
                            (e = a.loadAnimation({
                                container: f.current,
                                renderer: i,
                                loop: c,
                                autoplay: d,
                                path: t,
                                ...s && {
                                    animationData: s
                                }
                            })).addEventListener("DOMLoaded", () => {
                                l && (j(!1), null == m || m())
                            }), e.addEventListener("error", () => {
                                l && (g("Lottie loading error"), j(!1), null == p || p("Lottie loading error"))
                            })
                        } catch (e) {
                            l && (g("Lottie loading error"), j(!1), null == p || p("Lottie loading error"))
                        }
                    })(), () => {
                        l = !1, e && e.destroy()
                    }
                }, [t, c, d, i]), h && u) ? u : b && x ? x : (0, a.jsx)("div", {
                    ref: f,
                    className: l,
                    style: o
                })
            }
        },
        82140: (e, t, r) => {
            r.d(t, {
                W: () => c,
                Y: () => d
            });
            var s = r(13937),
                l = r.n(s),
                a = r(51459),
                n = r.n(a),
                o = r(62986),
                i = r.n(o);

            function c(e) {
                let t = l()(e);
                return t.isToday() ? t.format("HH:mm") : t.format("M/D")
            }

            function d(e, t) {
                return e ? new Date(1e3 * e).toLocaleDateString("en-US", t || {
                    month: "short",
                    day: "numeric"
                }) : ""
            }
            l().extend(n()), l().extend(i())
        },
        83363: (e, t, r) => {
            r.d(t, {
                A: () => i,
                D: () => o
            });
            var s = r(72011),
                l = r(3417),
                a = r(27743),
                n = r(89498);
            let o = e => {
                    let {
                        className: t,
                        hideName: r = !1,
                        onClickLogo: o
                    } = e, i = (0, l.useRouter)();
                    return (0, s.jsxs)("div", {
                        className: (0, n.cn)("flex items-center gap-2", t),
                        onClick: () => {
                            null == o || o(), (0, a.isComOrigin)() ? window.location.href = (0, a.getComOrigin)() : i.push("/")
                        },
                        children: [(0, s.jsx)("img", {
                            src: "/icons/logo.svg",
                            alt: "YouWare Logo",
                            className: "text-brand h-6 w-6"
                        }), !r && (0, s.jsx)("div", {
                            className: "mt-[3px] text-base text-black/95 max-[400px]:hidden lg:text-xl xl:text-[20px]",
                            children: "YouWare"
                        })]
                    })
                },
                i = o
        },
        93248: (e, t, r) => {
            r.d(t, {
                I: () => f
            });
            var s = r(72011),
                l = r(53130),
                a = r(54736),
                n = r(3417),
                o = r(73787),
                i = r(65547);
            let c = (0, i.createServerReference)("40218b760c4817b3d9da3935e1048d30bbef97177a", i.callServer, void 0, i.findSourceMapURL, "fetchCreditUsage");
            var d = r(72913),
                u = r(86881),
                x = r(27743),
                p = r(82140),
                m = r(89498);

            function f(e) {
                let {
                    subscription: t,
                    position: r,
                    onClose: i
                } = e, f = (0, n.usePathname)(), [h, g] = (0, o.useState)([]), [b, j] = (0, o.useState)(!1), [v, w] = (0, o.useState)(""), [y, k] = (0, o.useState)(!1), N = (0, o.useRef)(null), {
                    track: _
                } = (0, u.s)(), C = (0, n.useRouter)();
                (0, o.useEffect)(() => {
                    _("credits_usage_pop_up_show", {
                        enter_from: r,
                        credits_num: (null == t ? void 0 : t.total_credits) || 0
                    })
                }, [r, t]), (0, o.useEffect)(() => {
                    S()
                }, []);
                let S = (0, o.useCallback)(async () => {
                        if (!b) {
                            j(!0);
                            try {
                                let r = await c({
                                    limit: 20,
                                    cursor: v
                                });
                                if (0 === r.code && r.data) {
                                    var e, t;
                                    console.log("========= response.data", r.data);
                                    let s = r.data.records || [];
                                    g(e => [...e, ...s]), w((null == (e = r.data.page_info) ? void 0 : e.next_cursor) || ""), k((null == (t = r.data.page_info) ? void 0 : t.has_more) || !1)
                                }
                            } catch (e) {
                                console.error("Failed to load credit usage:", e)
                            } finally {
                                j(!1)
                            }
                        }
                    }, [b, v]),
                    A = (0, o.useCallback)(() => {
                        h.length > 0 && y && !b && v && S()
                    }, [h.length, y, b, v]),
                    E = (0, o.useCallback)(() => {
                        let e = N.current;
                        if (!e) return;
                        let {
                            scrollTop: t,
                            scrollHeight: r,
                            clientHeight: s
                        } = e;
                        r - t - s < 100 && A()
                    }, [A]);
                return (0, o.useEffect)(() => {
                    let e = N.current;
                    if (e) return e.addEventListener("scroll", E), () => e.removeEventListener("scroll", E)
                }, [E]), (0, s.jsx)("div", {
                    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/12",
                    children: (0, s.jsxs)("div", {
                        className: "relative flex h-[600px] w-full max-w-[640px] flex-col rounded-[16px] border border-black/3 bg-white p-5 pb-0 shadow-[0px_16px_32px_-1px_rgba(0,0,0,0.1)]",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-shrink-0 items-start justify-center gap-2",
                            children: [(0, s.jsxs)("div", {
                                className: "flex-1",
                                children: [(0, s.jsx)("h2", {
                                    className: "text-[20px] font-bold",
                                    children: "Credits usage"
                                }), (0, s.jsx)("div", {
                                    className: "text-[12px] text-black/45",
                                    children: "Micro-spends (<1 credit) are not shown."
                                })]
                            }), (0, s.jsx)("button", {
                                onClick: i,
                                className: "flex h-6 w-6 cursor-pointer items-center justify-center rounded-[8px] p-1 transition-colors hover:bg-black/3",
                                children: (0, s.jsx)(l.Qks, {
                                    className: "h-4 w-4"
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "my-3 flex h-12 w-full flex-shrink-0 items-center gap-2 rounded-[10px] border border-black/6 bg-black/3 pr-2 pl-3",
                            children: [(0, s.jsx)(l.IId, {
                                className: "text-brand h-5 w-5"
                            }), (0, s.jsxs)("div", {
                                className: "flex-1 text-[16px] font-bold",
                                children: [((null == t ? void 0 : t.total_credits) || 0).toLocaleString(), " Credits"]
                            }), !f.startsWith("/subscription") && (0, s.jsx)("button", {
                                className: "bg-brand hover:bg-brand/90 flex h-8 cursor-pointer items-center justify-center rounded-[10px] px-[10px] text-[14px] text-white transition-colors",
                                onClick: () => {
                                    _("sub_upgrade_click", {
                                        click_from: "credits_usage"
                                    }), C.push("/subscription?location=pop_up")
                                },
                                children: (null == t ? void 0 : t.is_vip) ? "View plans" : "Upgrade"
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "mb-[38px] flex w-full flex-1 flex-col overflow-hidden rounded-[10px] border border-black/6",
                            children: [(0, s.jsxs)("div", {
                                className: "thin-scrollbar flex items-center gap-5 overflow-y-auto border-b border-black/6 bg-[#F7F7F7] px-3 py-2.5 text-[12px] text-black/45",
                                children: [(0, s.jsx)("div", {
                                    className: "w-25",
                                    children: "Date"
                                }), (0, s.jsx)("div", {
                                    className: "flex-1",
                                    children: "Details"
                                }), (0, s.jsx)("div", {
                                    className: "w-25",
                                    children: "Credits change"
                                })]
                            }), (0, s.jsx)("div", {
                                ref: N,
                                className: "thin-scrollbar flex-1 overflow-y-auto",
                                children: 0 === h.length ? (0, s.jsx)("div", {
                                    className: "flex h-96 items-center justify-center text-[12px] text-black/65",
                                    children: b ? (0, s.jsx)(d.A, {
                                        animationPath: "/animations/lottie-task-loading.json",
                                        className: "h-20 w-20"
                                    }) : "No credit usage records found"
                                }) : (0, s.jsxs)(s.Fragment, {
                                    children: [h.map((e, t) => {
                                        var r;
                                        return (0, s.jsxs)("div", {
                                            className: "flex items-center gap-5 border-b border-black/3 px-3 py-2.5 text-[12px]",
                                            children: [(0, s.jsx)("div", {
                                                className: "w-25",
                                                children: (0, p.Y)(e.date_timestamp)
                                            }), (0, s.jsx)("div", {
                                                className: (0, m.cn)("flex-1 truncate", e.project_id || e.project_url ? "cursor-pointer hover:underline" : ""),
                                                onClick: () => {
                                                    (e.project_id || e.project_url) && window.open((0, x.getProjectOrigin)() + (e.project_url || "/editor/".concat(e.project_id)), "_blank")
                                                },
                                                children: e.description
                                            }), (0, s.jsxs)("div", {
                                                className: "flex w-25 items-center gap-1",
                                                children: [(0, s.jsxs)("span", {
                                                    children: ["consumption" === e.transaction_type ? "-" : "+", e.credit_cost]
                                                }), (null == (r = e.extra_data) ? void 0 : r.help_type) === "engagement" && (0, s.jsxs)(a.m_, {
                                                    children: [(0, s.jsx)(a.k$, {
                                                        asChild: !0,
                                                        children: (0, s.jsx)(l.Kt4, {
                                                            className: "h-3 w-3 flex-shrink-0 cursor-pointer text-black/45 hover:text-black/65"
                                                        })
                                                    }), (0, s.jsx)(a.ZI, {
                                                        side: "top",
                                                        sideOffset: 4,
                                                        children: (0, s.jsx)("div", {
                                                            className: "w-72 p-1.5",
                                                            children: "Daily project engagement reward is earned through views, reactions, saves, remixes, and comments on your projects — designed to reward creativity and genuine engagement. Rewards are calculated based on the previous UTC day. Suspicious or inauthentic activity won't count."
                                                        })
                                                    })]
                                                })]
                                            })]
                                        }, t)
                                    }), b && h.length > 0 && (0, s.jsx)("div", {
                                        className: "flex items-center justify-center py-4",
                                        children: (0, s.jsx)("div", {
                                            className: "text-[12px] text-black/45",
                                            children: "Loading more..."
                                        })
                                    })]
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "absolute bottom-3 left-1/2 -translate-x-1/2",
                            children: (0, s.jsx)("button", {
                                className: "cursor-pointer text-[12px] text-black/65 transition-colors hover:text-black/95 hover:underline",
                                onClick: () => {
                                    window.open("/legal/credits", "_blank")
                                },
                                children: "How credits work"
                            })
                        })]
                    })
                })
            }
        }
    }
]);