try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8bf41109-d3d8-49a5-814e-2c633cb5666e", e._sentryDebugIdIdentifier = "sentry-dbid-8bf41109-d3d8-49a5-814e-2c633cb5666e")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [925], {
        11832: () => {},
        17597: (e, t, l) => {
            "use strict";
            l.d(t, {
                A: () => d
            });
            var r = l(72011),
                s = l(53130),
                a = l(34620),
                n = l(73787),
                o = l(28196),
                i = l(66360),
                c = l(89498);
            let d = e => {
                let {
                    project: t,
                    isShowBorder: l = !1
                } = e, d = (0, n.useMemo)(() => {
                    var e, l;
                    return null != (l = null == (e = t.interaction) ? void 0 : e.count.reduce((e, t) => e + t.count, 0)) ? l : 0
                }, [t.interaction]), u = (e, t) => (0, r.jsxs)("div", {
                    className: (0, c.cn)("flex h-7 items-center gap-1 rounded-lg border border-black/[0.03] px-1.5 xl:h-auto xl:border-none xl:px-0", l && "xl:border xl:border-solid xl:px-1.5 xl:py-1"),
                    children: [e, (0, r.jsx)("span", {
                        className: "pt-0.5 text-[14px] text-black/95 xl:text-[12px] xl:text-black/45",
                        children: (0, i.Z)(t)
                    })]
                });
                return (0, r.jsxs)("div", {
                    className: "flex flex-row items-center gap-1.5",
                    children: [(() => {
                        var e;
                        return u((0, r.jsx)(s.tLq, {
                            className: "h-3 w-3 xl:h-3.5 xl:w-3.5 xl:text-black/45"
                        }), null != (e = t.view_count) ? e : 0)
                    })(), u((0, r.jsx)(a.default, {
                        src: o.A,
                        alt: "emoji reaction count",
                        className: "h-3.5 w-6.5 xl:h-3 xl:w-5.5"
                    }), d), (() => {
                        var e;
                        return u((0, r.jsx)(s.Z0O, {
                            className: "h-3 w-3 xl:h-3.5 xl:w-3.5 xl:text-black/45"
                        }), null != (e = t.comment_count) ? e : 0)
                    })()]
                })
            }
        },
        19209: (e, t, l) => {
            "use strict";
            l.d(t, {
                Home: () => es
            });
            var r = l(72011),
                s = l(3417),
                a = l(73787),
                n = l(65547);
            let o = (0, n.createServerReference)("004171157d17fada62a463765fe6e6887124f8f0df", n.callServer, void 0, n.findSourceMapURL, "fetchCategories");
            var i = l(86881),
                c = l(22375);
            l(11832);
            var d = l(53130),
                u = l(36039),
                x = l(11825),
                p = l(67542),
                m = l(92394),
                h = l(37600);
            let f = e => {
                let {
                    isOpen: t,
                    onClose: l
                } = e, [s, n] = (0, a.useState)(""), [o, c] = (0, a.useState)(!1), {
                    loginWithGoogle: f,
                    googleLoginLoading: g,
                    sendLinkToEmail: v,
                    isSignInWithEmailLink: j,
                    signInWithEmailLink: b,
                    inviteCode: w,
                    inviterInfo: y,
                    inviteLoading: N,
                    trackTriggerLogin: k,
                    trackLoginResult: _
                } = (0, u.A)(), {
                    track: S
                } = (0, i.s)();
                (0, a.useEffect)(() => {
                    if (w && y) {
                        var e;
                        S("invite_login_pop_up_show", {
                            inviter_user_id: (null == (e = y.user) ? void 0 : e.uid) || ""
                        })
                    }
                }, [w, y]), (0, a.useEffect)(() => {
                    if (j(window.location.href)) {
                        m.Ay.info("sign in with email link from invite");
                        let e = window.localStorage.getItem("emailForSignIn");
                        if (!e) return void m.Ay.error("emailForSignIn is not set");
                        s || n(e), c(!0), b(e, window.location.href).then(() => {
                            _("email", "success", "invite", ""), l()
                        }).catch(e => {
                            (0, h.P)({
                                message: "Failed to signin, please try again later",
                                type: "error"
                            }), _("email", "failed", "invite", e.message || "unknown error")
                        }).finally(() => {
                            c(!1)
                        })
                    }
                }, []);
                let A = async () => {
                        k("google", "invite");
                        try {
                            await f(), _("google", "success", "invite", ""), l()
                        } catch (e) {
                            (0, h.P)({
                                message: "Failed to signin, please try again later",
                                type: "error"
                            }), _("google", "failed", "invite", e.message || "unknown error")
                        }
                    },
                    C = async () => {
                        k("email", "invite");
                        let e = (0, p.DT)(s);
                        if (!e.valid) return void(0, x.S)({
                            title: "Email not Supported",
                            description: e.error,
                            confirmText: "Got it",
                            onConfirm: () => {}
                        });
                        window.localStorage.setItem("emailForSignIn", s), c(!0);
                        try {
                            await v(s, window.location.href), (0, x.S)({
                                title: "Check your inbox",
                                description: "We’ve sent a sign-in link to your email. Click it to get started.",
                                confirmText: "Got it",
                                onConfirm: () => {}
                            })
                        } catch (e) {
                            (0, h.P)({
                                message: "Failed to send, please try again",
                                type: "error"
                            })
                        } finally {
                            c(!1)
                        }
                    };
                return t ? (0, r.jsx)("div", {
                    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/20",
                    children: (0, r.jsxs)("div", {
                        className: "relative flex h-[440px] w-[400px] flex-col gap-5 rounded-2xl bg-white p-5 shadow-[0px_16px_48px_1px_rgba(0,0,0,0.2)]",
                        children: [(0, r.jsx)("button", {
                            onClick: l,
                            className: "absolute top-3 right-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-[8px] p-1 transition-colors hover:bg-black/3",
                            children: (0, r.jsx)(d.Qks, {
                                className: "h-4 w-4"
                            })
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col items-center gap-3 pt-3 text-center",
                            children: [(0, r.jsx)(d.Bik, {
                                className: "text-brand h-12 w-12"
                            }), (0, r.jsxs)("div", {
                                className: "space-y-1",
                                children: [(0, r.jsxs)("div", {
                                    className: "text-xl font-bold text-black/95",
                                    children: [(0, r.jsx)("h2", {
                                        children: (() => {
                                            var e;
                                            return N ? (0, r.jsx)(r.Fragment, {
                                                children: (0, r.jsx)("div", {
                                                    className: "mx-auto h-6 w-20 animate-pulse rounded bg-gray-200"
                                                })
                                            }) : (null == y || null == (e = y.user) ? void 0 : e.display_name) ? (0, r.jsx)(r.Fragment, {
                                                children: y.user.display_name
                                            }) : null
                                        })()
                                    }), (0, r.jsx)("span", {
                                        children: "invited you to try YouWare "
                                    })]
                                }), (0, r.jsxs)("p", {
                                    className: "text-sm text-black/65",
                                    children: ["100,000+ projects built and shared. ", (0, r.jsx)("br", {}), " A growing hub of talented creators, here to spark your next big idea."]
                                })]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex w-full flex-col items-center text-center",
                            children: [(0, r.jsxs)("button", {
                                className: "mb-4 flex h-[36px] w-full items-center justify-center gap-2 rounded-xl bg-[#2C2C2C] text-sm text-white ".concat(g ? "cursor-not-allowed opacity-70" : "cursor-pointer hover:bg-[#2C2C2C]/90"),
                                onClick: A,
                                disabled: g,
                                children: [g ? (0, r.jsx)(d.Fat, {
                                    className: "h-4 w-4 animate-spin text-white"
                                }) : (0, r.jsx)("img", {
                                    src: "/images/google-icon.svg",
                                    className: "h-4 w-4",
                                    alt: "Google"
                                }), (0, r.jsx)("span", {
                                    children: "Continue with Google"
                                })]
                            }), (0, r.jsx)("p", {
                                className: "mb-4 text-center text-sm text-black/95",
                                children: "or"
                            }), (0, r.jsx)("input", {
                                type: "email",
                                placeholder: "Enter your email",
                                className: "mb-4 h-[36px] w-full rounded-xl border border-black/30 bg-white/30 px-3 text-sm text-black/95 placeholder:text-black/30 focus:outline-none",
                                value: s,
                                onChange: e => n(e.target.value)
                            }), (0, r.jsx)("button", {
                                className: "flex h-[36px] w-full items-center justify-center gap-2 rounded-xl bg-[#55644A] text-center text-sm text-white ".concat(o ? "cursor-not-allowed opacity-70" : "cursor-pointer hover:bg-[#55644A]/90"),
                                onClick: C,
                                disabled: o,
                                children: o ? (0, r.jsx)(d.Fat, {
                                    className: "mx-auto h-4 w-4 animate-spin"
                                }) : "Continue with email"
                            })]
                        })]
                    })
                }) : null
            };
            var g = l(33686),
                v = l(12542);
            let j = "graduation_modal_shown",
                b = () => {
                    localStorage.setItem(j, "true")
                };

            function w(e) {
                let {
                    isOpen: t,
                    onClose: l
                } = e, {
                    reward_credit_config: s
                } = (0, v.t)();
                return t ? (0, r.jsx)("div", {
                    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/20",
                    children: (0, r.jsxs)("div", {
                        className: "relative flex w-[512px] flex-col rounded-2xl bg-white p-5 shadow-[0px_16px_48px_1px_rgba(0,0,0,0.2)]",
                        children: [(0, r.jsxs)("div", {
                            className: "relative mb-6 flex min-h-[148px] flex-col justify-between rounded-lg p-4",
                            style: {
                                backgroundImage: "url('/images/bg-pattern.svg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            },
                            children: [(0, r.jsx)("div", {
                                className: "flex justify-start",
                                children: (0, r.jsx)("span", {
                                    className: "inline-block rounded-md bg-white/15 px-2 py-1 text-sm font-bold text-white backdrop-blur-sm",
                                    children: "New"
                                })
                            }), (0, r.jsx)("div", {
                                className: "mt-auto",
                                children: (0, r.jsxs)("h2", {
                                    className: "text-2xl font-bold text-white",
                                    children: ["YouWare Has Graduated", (0, r.jsx)("br", {}), "from Alpha!"]
                                })
                            })]
                        }), (0, r.jsxs)("p", {
                            className: "mb-6 text-sm text-black/95",
                            children: ["Thanks for building with us during Alpha. ", (0, r.jsx)("br", {}), (0, r.jsx)("br", {}), "We're now officially launched — with a ", (0, r.jsx)("span", {
                                className: "font-bold",
                                children: "new credits-based"
                            }), " system that gives you more flexibility and control. ", (0, r.jsx)("br", {}), (0, r.jsx)("br", {}), (0, r.jsxs)("span", {
                                children: ["All users get ", (0, r.jsxs)("span", {
                                    className: "font-bold",
                                    children: [s.new_user_reward, " free credits"]
                                }), " to start."]
                            }), " ", (0, r.jsx)("br", {}), (0, r.jsx)("br", {}), "Pro plans now start at ", (0, r.jsx)("span", {
                                className: "font-bold",
                                children: "$20/month for 3,000 credits"
                            }), ", with higher tiers available. ", (0, r.jsx)("br", {}), (0, r.jsx)("br", {}), "As a thank-you, Pro subscribers before ", (0, r.jsx)("span", {
                                className: "font-bold",
                                children: "July 3"
                            }), " will receive", " ", (0, r.jsx)("span", {
                                className: "font-bold",
                                children: "1,000 bonus credits"
                            }), " — no action needed. ", (0, r.jsx)("br", {}), (0, r.jsx)("br", {}), "Let's keep building amazing things together."]
                        }), (0, r.jsxs)("div", {
                            className: "space-y-3",
                            children: [(0, r.jsx)("button", {
                                onClick: () => {
                                    console.log("Get started clicked"), b(), l()
                                },
                                className: "bg-brand hover:bg-brand/90 w-full cursor-pointer rounded-[10px] py-2 text-sm text-white",
                                children: "Get started"
                            }), (0, r.jsx)("button", {
                                onClick: () => {
                                    window.open("/legal/credits", "_blank"), console.log("Learn more about credits clicked"), b()
                                },
                                className: "w-full cursor-pointer rounded-[10px] border border-black/6 py-2 text-center text-sm text-black/95 hover:border-transparent hover:bg-black/3",
                                children: "Learn more about credits"
                            })]
                        })]
                    })
                }) : null
            }
            var y = l(74731),
                N = l(17068),
                k = l(89498);
            let _ = "backend-release-modal-shown-20250826",
                S = (0, N._)("20250826").getTime() + 1296e6,
                A = e => {
                    let {
                        title: t,
                        text: l
                    } = e, s = "text-[var(--text-icon-primary,rgba(0,0,0,0.95))] text-[14px] font-bold tracking-[-0.56px]";
                    return (0, r.jsxs)("div", {
                        className: "flex flex-row items-start",
                        children: [(0, r.jsx)("div", {
                            className: (0, k.cn)(s, "mr-1"),
                            children: "\xb7"
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("span", {
                                className: s,
                                children: "".concat(t, " ")
                            }), l]
                        })]
                    })
                },
                C = e => {
                    let {
                        isOpen: t,
                        onClose: l
                    } = e, a = (0, y.I)(!1, 720), n = (0, s.useRouter)();
                    if (!t) return null;
                    let o = () => {
                            localStorage.setItem(_, Date.now().toString()), l()
                        },
                        i = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            return (0, r.jsxs)("div", {
                                className: "leading-[1.4]",
                                children: [(0, r.jsx)("div", {
                                    className: "px-0.5 text-[20px] font-bold text-black/95",
                                    children: "Meet Google Nano Banana"
                                }), (0, r.jsx)("div", {
                                    className: "mt-1 text-[14px] font-normal text-black/65",
                                    children: "Fast, creative, and true to you."
                                }), (0, r.jsxs)("div", {
                                    className: (0, k.cn)("mt-3 flex flex-col gap-1 text-[14px] font-normal text-black/65", e),
                                    children: [(0, r.jsx)(A, {
                                        title: "SOTA Image Generation & Editing",
                                        text: "Create or refine visuals effortlessly with top-tier quality."
                                    }, "item-1"), (0, r.jsx)(A, {
                                        title: "Incredible Character Consistency",
                                        text: "Keep people, pets, or objects looking the same across edits."
                                    }, "item-2"), (0, r.jsx)(A, {
                                        title: "Lightning‑fast Preview",
                                        text: "Low latency and fast responses make image creation feel conversational."
                                    }, "item-3")]
                                })]
                            })
                        },
                        c = () => (0, r.jsx)("div", {
                            className: "flex w-full flex-col gap-3",
                            children: (0, r.jsx)("button", {
                                className: "bg-brand hover:bg-brand/90 h-[36px] w-full cursor-pointer rounded-[10px] text-[14px] leading-[36px] text-white",
                                onClick: () => void(n.push("/create"), o()),
                                children: "Try it"
                            })
                        });
                    return (0, r.jsx)("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
                        onClick: o,
                        children: (0, r.jsxs)("div", {
                            className: "relative flex overflow-hidden rounded-2xl bg-white shadow-2xl",
                            onClick: e => e.stopPropagation(),
                            children: [a ? (0, r.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, r.jsxs)("div", {
                                    className: "aspect-[2/1] w-full overflow-hidden",
                                    children: [(0, r.jsx)("img", {
                                        src: "https://public.youware.com/images/banana_release_mb.png",
                                        className: "h-full w-full object-cover",
                                        alt: " "
                                    }), (0, r.jsx)("div", {
                                        className: "absolute top-5 left-[22px] z-10 flex items-center justify-center rounded-[8px] border border-[rgba(85,100,74,0.12)] px-[8px] py-[3.5px] backdrop-blur-[2px]",
                                        children: (0, r.jsx)("div", {
                                            className: "text-[14px] font-bold text-[#55644A] italic",
                                            children: "New"
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-col gap-6 p-[20px]",
                                    children: [i("leading-[21px] gap-[6px]"), c()]
                                })]
                            }) : (0, r.jsxs)("div", {
                                className: "flex aspect-[3/2] w-[720px] max-w-[720px] flex-row",
                                children: [(0, r.jsx)("div", {
                                    className: "flex h-full w-1/2 flex-shrink-0 p-5",
                                    children: (0, r.jsxs)("div", {
                                        className: "flex flex-1 flex-col items-center justify-between",
                                        children: [(0, r.jsxs)("div", {
                                            className: "flex w-full flex-col items-start justify-center gap-6",
                                            children: [(0, r.jsx)("div", {
                                                className: "flex items-center justify-center rounded-[8px] border border-[rgba(85,100,74,0.12)] px-[8px] py-[3.5px] backdrop-blur-[2px]",
                                                children: (0, r.jsx)("span", {
                                                    className: "text-[14px] font-bold text-[#55644A] italic",
                                                    children: "New"
                                                })
                                            }), i("gap-[8px]")]
                                        }), c()]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "h-full w-1/2 flex-shrink-0",
                                    children: (0, r.jsx)("img", {
                                        src: "https://public.youware.com/images/banana_release_pc.png",
                                        className: "h-full w-full object-cover",
                                        alt: " "
                                    })
                                })]
                            }), (0, r.jsx)("button", {
                                onClick: o,
                                className: "absolute top-4 right-4 z-10",
                                children: (0, r.jsx)(d.Qks, {
                                    className: "h-5 w-5 cursor-pointer text-black/95 hover:text-black/65"
                                })
                            })]
                        })
                    })
                },
                I = ["0YGI0TEkfobzfNayCvkfjxQMHLb2", "365kNutYZDeteBuFqtk4U1lkT0p1", "3aVqjewMilP8sFchzro4cW1pPMV2", "48A23Imhyfft9NxPTNEa6LrV6Lk2", "52v0ySBk1xeKtwebTJoiqTyJ2Kq2", "57ORmQUEGxdLLMGwYqhmPpkNw7D2", "58hImWD3rCWOKbuu1ZdGvxBVXRt1", "5IVZ2Zldd5Vs1n1tRiydQsidImY2", "5UmZ4FATFBTlO5oZr80z9ZJekYF3", "5xPC2cJDoYgU8IAhL64H8vVzIVt2", "7dkp3UFHhTOeGxALaZpdCZbSpBY2", "7NfnuY8QmXgYkWaumvntvYE5Cnx1", "7PjSr4PwjAgQWbbbIJahGLarYDD3", "7W6rFNEKZgTY21r6WezEGa9OxOj2", "877pCyXjJ1RsesOBH318FcQyiYL2", "8mG0bQAg2GdnPr2BH3DrgLJgDfg1", "8PtcgPs1oWVK9qFzR33FG2SevED2", "95uQbVWHujT3vtyBmgVg7tYjhdo2", "9hwmQLjdBDPVUmFC5dCe5wqZgch2", "AEc0FeZ3HOfvnbR3AmddG85cyzR2", "aK7SP1IupxciXsEyMcIjcDPGXmj1", "AkHBD6qngSgFuXwnJwvp4BwnnTs1", "aSYgYdgTxzcv4cR9fOSs2rRiKPY2", "AxpiBZ5eL4UqZlcTSaTeAABNTop1", "BdOtby7M8ngF2gZlke1NWJMMk602", "BQ9HHVBRf5UbhBGiO2RFnIiZtCB2", "BTPfznX73gYQgS8vfPicHQ6sStx2", "C9WWSZaG3BWFUV7Kq0uWHsNNiEq1", "djUDjjo1DBfoDPQZDGV5Vj29eHf2", "Dmx6lwOHwFMzpUCmk8bMIhQDISr2", "Dpim97Ir2UYELpaNUEBcWLl3icn1", "DPkZvH0q2jWItFOxOnymxUQcLoh1", "Du7MwX52T5gfear2whbZebtXAZg1", "dukeKPAkIcOdZQjXPumUW2o5IlV2", "dwGm81YEfOdekUMCX0vMAGkXhkj1", "dxKIzYlrfqgdody9qhyEP9aXDIh1", "e4xjKkHDnUhOoQm8KbNL7oDymfB3", "e7x3DoRj8DhSZBHv9tzR6EZeBpE2", "EA00gXVojpfgv8UrcjYO50Ltcn92", "EBBhoshYIUfRaxzcAPgQN5nlNFf2", "ec5cDnc5fxZ2XtiATIcyFakoylU2", "El5zhG2rVbYGATfIDqwdd6VFOWw1", "epkn8AiNfrWHgdbcE4KRJTFe4sq2", "EskOvzt7NIfuTFEkkEUfcSntykK2", "euXBZsNLfsdAvnNzpyntzZH4D0q2", "EVZeTssmYbd8EExvm1XKhY3FLP92", "ExN8aW61UCXPN9LppJsLlVth6yh1", "f3UccsOf1ZNNXj9tndlTTNYVTgl1", "fcRgG6fsBvX5ItC79VA6c7h7pLs2", "FjLA7EtBk6aRxmTm3mqLRFy44hH2", "fNBTeciNpIW3fsKJXXrFhDpfuEj1", "G0uAwlL7ykZ0z2rtjiqs5mzGZkz1", "ga0z0YslmXN68NuLw8BmgzlqOeS2", "GjOnNhdFDAZJg6M6JDCjV7wXrEA3", "gTtXPr547pcbvRNnhMIXSqYLE7f2", "gXevhg8U1ORFmZKf2S2QQ8pyNOA2", "HekBmm8ZVuQeWeqKUZcv1gIgqht2", "hfERlZSfZZfXen4dTUmEQkcKlQs2", "hIm1ITZWP0R4N1CmjIIBAoyELtR2", "hlEPrNWYm6QWSmv2pp9QdpRD9Ni2", "HRbyY1nJRDcEh01trvQgcEp53yO2", "I6thgTDhyiOUOgtJWrpHzHGsU1o2", "IFJ8AEJGxfNWd8OopFl4fqCbfdg2", "iI2cRgzgdIUlb8NGUVB6KhXYiz32", "ilPSDAsIVVN82WahbPslIjWbl353", "ioRbvIb0RxQQyLKSdMnYX4mfqHD2", "IpxA34q9zQhEfCW1hJTZe2sYxaf1", "j5bk6J9wDjd7DKwcN1SAHVtRIGa2", "jdrO7qyuKug61fRSAsi8K2PVWEg2", "Jmey9up3KJSg5o02uhVBgdgOLlX2", "Jn0A08vYJEgtTXWnTlXFdKvMDZu2", "kfsGrlPIqFfPWppNlbw7QjuIBnp1", "kMC10oEYPXTESFwYcBdfYQbsxEJ3", "kRCavyu6YHNRlJaaxLLul8T2Mu03", "KylfP6plUsTj5JD5CL2gBgYkD4z1", "kzv8GQHHjfVWhcVFYiLL3tSBqnv2", "l2RChgRfkfNAw62tZX9IyMqfR7I2", "LBiYLXnkWVO4VRl1WsrekMBNcAA2", "LfzXbuVuV5YWx0UaDaDr9mrnJMW2", "LW9ypKszQXd0VJpfhzt2n4RJrSc2", "m0UekcpY8yXPHiIOzXoyxYZMIYX2", "M7nKdygnKGVElfzLQWFcBV4z67Q2", "mablIrglGYdrhDfOHmhPaZGqpJq2", "MM34OUfBQZO9DC5DUzvuox8B8di2", "mMS6gi2R2nXADfEXnQQUJGNtVCH3", "MS1Y9PJPdRMOxDFHCSfsVL3duxh1", "mS79o6rY0GTToIOxEbOXGRQVxN12", "n56gdIMG3iPjrUnb9zjHcI1VJ8r1", "NET4deFhOZMIRyr46IOO0nVYd9J3", "nONnKuun93UOIuMQ4i2x9bqFqI63", "NSoa75Qpsae5MOQvViTJBNxPJHd2", "OBrOxIFZtDcQY3FJsp4Z23jRgyH3", "OCDjCY6Iq9X396awMPm1wNvu0Ty2", "OJFqSmPa8LaxTUrbKb1N3WzaTCG3", "OuDLkbrYrueCm5yDORR3Oq77hN43", "Ox2nhQRyK6ht1G7VEnDYgJmdbBv2", "oZxohEVWtmSp9A6UI1V2PXHU17O2", "pjqhP4FIenYcXj1jedMyCeBlikc2", "pkq6w4TcPkf36XQ2uwwbh0ectu83", "puKC9zUGNCWoQ3Dm11J1nU7OFcg2", "pVG4boIgFbcaSwrONYgxakaN6G83", "pW1uSDvRVLND76CSvLD2o4Jp02p1", "pwHp3K5cHXP3pSi5ksVIhecHGgg1", "qCRG1gQdcZRGDs0ooHsz9TC52T63", "qGdvMIhgBGdhf2J95qvzK6Mlfng2", "QVzjSPcwcSO9m209rdQGhizJS7o1", "r2Q5zlaeCINXJEzrXF4fzoXT9nK2", "r37exNWpczMm6UCuXChcRNaGyZP2", "S4wDk4MBbSYg88NIEUDQpLq1XK73", "sf3R7ug6S4PRMD7EMwNCdkseQo13", "SOKXOfLa3tbV0LP3Sn1RUym9w8G2", "sXOPfpDsonZd9xyNOYprgxuyY3K2", "t2M2UpkohiR5WBREoyZfEEf7USo2", "TDvoFs3RuXg6EhKBsakpY7EsTuE3", "teHFABvD2bVXXlOCjexYmfHNUa13", "TYhqVw6GA2XgU9ROMWntIc4ickq1", "uGwWy2KMHEUcTc0iZ1sZGtAM2Vs2", "uKk8n27OYrWG4xzWYK42QcjNOpE3", "uTqv1xKG4aa5aWZhHVvWjLKwxof1", "uypoGF4r7TMaBSSjXUfS6eqAku93", "vBoAb7cMurNuCLRcHDeCUlVNKyJ3", "VwYgdZs4tqbHSJNBov3KfHvZrAN2", "vXwjJKxWcHaMwp3G0Q5uGNj8URz1", "WCm7qdUg8jg80UXFZ3ViSxjhxQh1", "WFulwI8ASCWeImtwGw0oIIYEUpO2", "worIgs0rVXSNEcJOdBGEjU6vz0p2", "wOzDHJzJlfcr8GnyMBbmyYmTPQH2", "WQdXHrY0TtNxmjW3XsPBRm3HzTP2", "wVQyJbztdtSxH0LZPO23WdJX37E2", "WxYjaBXf2aTKEJa4z4nlEkGwYEN2", "WyqlQ4yGx3Pd4r7SMm5IveXm04w2", "wzExrh1DlJN2F9VbX1cIvMGP6p62", "XfoaKTbWXihl6JKFKUn2ksAcYkQ2", "xPB57oHzBtYMOH7Qp2co1T7gkH92", "Y1ghCih8i2T78MLRFoTRvZ73SIi2", "Y78dGc0566M9JUiy6LRl1SiMSwX2", "Y9JWzgyB5RgB4bND5eaaRod2fiD2", "yaADvAVkZvgnU5xOGjwFLvb85Zx2", "yey2jwVSx1PrfVrM70ayTJsLQ772", "yg2P59yjzzQ6vxR3wxszPD23xDC3", "yhJafzbp59ct2wuhuWSsIPHwxBN2", "yk5DAajgiXVA2FvyOx7NvArG7ch2", "ytM3alaqnQUZd4UqMMkkh0j4EaF2", "Z1W8kiwDhgP1k6Fu5kqlq5Yc6T22", "ZEJ6gp22HKaZY8ydaM4GPu5QOfm1", "ZF0DZglEaOegT3N4I7NdrzbGcXt2", "zpyusCWKiycgoExky0ZUQN7Qc9O2", "zqj2pdaKAzRXYj9QUuKR3kGADcn2", "ZrhRY4rf1Yc5zToiGpiwi6fDvOp2", "zSevFyKZXTZCBCi50rDLRvVI4qR2", "ZtfFf7XUliXZVAHB3HPPNliPZUM2", "zxkHduriS4RcWc4cP7HgMsNyfG33", "ZYWbQAqw73eOpP93QPWdg3wj5jH2", "YwgqyaP9PhSHqXUNMV93ezPOkIl2", "uxsZgChhbMNdSDCQIq9ABcIkKJv1", "WUmtZuOuBrccKi6LtkTZLvK3eUH3"],
                E = "user-interview-state",
                R = () => localStorage.getItem(E) || "",
                P = e => {
                    localStorage.setItem(E, e)
                },
                T = e => {
                    let {
                        isOpen: t,
                        onClose: l
                    } = e;
                    return t ? (0, r.jsx)("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/12",
                        children: (0, r.jsxs)("div", {
                            className: "relative mx-4 w-full max-w-[480px] rounded-[16px] bg-white p-5 shadow-[0_16px_32px_-1px_rgba(0,0,0,0.1)]",
                            children: [(0, r.jsx)("button", {
                                onClick: () => {
                                    let e = R();
                                    e ? "once" === e && P("dismissed") : P("once"), l()
                                },
                                className: "absolute top-3 right-3 cursor-pointer rounded-[8px] p-1 transition-colors hover:bg-black/3",
                                children: (0, r.jsx)(d.Qks, {
                                    size: 16
                                })
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col items-center gap-6 pt-3",
                                children: [(0, r.jsx)(d.kpb, {
                                    size: 48,
                                    className: "text-brand"
                                }), (0, r.jsxs)("div", {
                                    className: "flex w-full flex-col items-center gap-1",
                                    children: [(0, r.jsx)("h2", {
                                        className: "text-center text-[20px] font-bold",
                                        children: "Exclusive User Interview Invitation"
                                    }), (0, r.jsxs)("p", {
                                        className: "text-center text-[14px]",
                                        children: ["Join our online user interview and receive a ", (0, r.jsx)("br", {}), (0, r.jsx)("strong", {
                                            className: "text-brand",
                                            children: "$50 Amazon Gift Card"
                                        }), " as a thank you."]
                                    })]
                                }), (0, r.jsx)("button", {
                                    onClick: () => {
                                        P("dismissed"), l(), window.open("https://cal.com/youware/user-interview", "_blank")
                                    },
                                    className: "bg-brand hover:bg-brand/90 mt-3 flex h-9 w-full cursor-pointer items-center justify-center rounded-[10px] text-[14px] text-white",
                                    children: "Schedule Your Time"
                                })]
                            })]
                        })
                    }) : null
                },
                D = "popup-display-time-record";

            function z() {
                let e = (() => {
                        let {
                            asyncCheckShouldShowInvite: e
                        } = (0, u.A)(), {
                            user: t
                        } = (0, g.J)();
                        return {
                            shouldShowInvite: e,
                            shouldShowAnnouncement: () => {
                                var e, l;
                                return Promise.resolve(!!((null == (e = t) || null == (l = e.metadata) ? void 0 : l.creationTime) && new Date(e.metadata.creationTime) < new Date("2025-07-03T00:00:00Z")) && "true" !== localStorage.getItem(j))
                            },
                            shouldShowBackendRelease: () => {
                                let e;
                                return Promise.resolve(!!(null == (e = t) ? void 0 : e.uid) && !localStorage.getItem(_) && Date.now() < S)
                            },
                            shouldShowUserInterview: () => {
                                let e;
                                return (null == (e = t) ? void 0 : e.uid) && I.includes(e.uid) ? Promise.resolve("dismissed" !== R()) : Promise.resolve(!1)
                            }
                        }
                    })(),
                    [t, l] = (0, a.useState)(!1),
                    [s, n] = (0, a.useState)(null),
                    {
                        user: o
                    } = (0, g.J)(),
                    i = [{
                        id: "user-interview",
                        shouldShow: e.shouldShowUserInterview,
                        globalExclude: !0,
                        Component: T
                    }, {
                        id: "announcement",
                        shouldShow: e.shouldShowAnnouncement,
                        globalExclude: !0,
                        Component: w
                    }, {
                        id: "invite",
                        shouldShow: e.shouldShowInvite,
                        globalExclude: !1,
                        Component: f
                    }, {
                        id: "backend-release",
                        shouldShow: e.shouldShowBackendRelease,
                        globalExclude: !0,
                        Component: C
                    }],
                    c = async () => {
                        let e = null;
                        for (let t of i)
                            if (await t.shouldShow()) {
                                e = t;
                                break
                            }
                        return e ? (() => {
                            let e = localStorage.getItem(D);
                            return e ? Number(e) : 0
                        })() > Date.now() - 864e5 && e.globalExclude ? null : e : null
                    };
                if ((0, a.useEffect)(() => {
                        (async () => {
                            let e = await c();
                            e && (n(e), l(!0))
                        })()
                    }, [o]), s) {
                    let {
                        Component: e
                    } = s;
                    return (0, r.jsx)(e, {
                        isOpen: t,
                        onClose: () => {
                            var e;
                            e = Date.now(), localStorage.setItem(D, e.toString()), l(!1), n(null)
                        }
                    })
                }
                return null
            }
            var O = l(41821),
                B = l(27743),
                U = l(17597),
                Y = l(71246),
                Z = l(85385),
                L = l(74456);
            let F = e => {
                var t, l;
                let {
                    index: n,
                    project: o,
                    className: c,
                    isActive: u,
                    onHover: x,
                    onLeave: p
                } = e, [m, h] = (0, a.useState)(!1), f = (0, a.useRef)(null), g = (0, s.useRouter)(), v = (0, a.useRef)(null), {
                    track: j
                } = (0, i.s)(), {
                    isMobile: b
                } = (0, L.D)();
                (0, a.useEffect)(() => {
                    let e = new IntersectionObserver(t => {
                        if (t[0].isIntersecting && !m) {
                            var l, r, s, a, i;
                            j("home_project_show", {
                                area: "spotlight_list",
                                project_id: o.project_id,
                                project_url: o.project_url,
                                index: n + 1,
                                project_views: null != (s = o.view_count) ? s : 0,
                                project_comments: null != (a = o.comment_count) ? a : 0,
                                project_reactions: null != (i = null == (r = o.interaction) || null == (l = r.count) ? void 0 : l.reduce((e, t) => {
                                    var l;
                                    return e + (null != (l = null == t ? void 0 : t.count) ? l : 0)
                                }, 0)) ? i : 0
                            }), h(!0), e.disconnect()
                        }
                    });
                    return f.current && e.observe(f.current), () => e.disconnect()
                }, [j, o.project_url, m, n]);
                let w = (0, a.useCallback)(() => {
                        var e, t, l, r, s;
                        j("home_project_click", {
                            area: "spotlight_list",
                            project_id: o.project_id,
                            project_url: o.project_url,
                            index: n + 1,
                            project_views: null != (l = o.view_count) ? l : 0,
                            project_comments: null != (r = o.comment_count) ? r : 0,
                            project_reactions: null != (s = null == (t = o.interaction) || null == (e = t.count) ? void 0 : e.reduce((e, t) => {
                                var l;
                                return e + (null != (l = null == t ? void 0 : t.count) ? l : 0)
                            }, 0)) ? s : 0
                        }), window.open("".concat((0, B.getProjectOrigin)()).concat(o.project_url, "?enter_from=spotlight"), "_blank")
                    }, [o, j]),
                    y = (0, a.useCallback)(e => {
                        var t, l, r;
                        if (e.preventDefault(), e.stopPropagation(), (null == (t = o.user) ? void 0 : t.uid) && (null == (l = o.user) ? void 0 : l.uid) !== Z.v1) {
                            let e = "/profile/".concat(null == (r = o.user) ? void 0 : r.uid);
                            j("home_creator_click", {
                                area: "spotlight_list",
                                project_id: o.project_id,
                                project_url: o.project_url,
                                creator_profile_url: e
                            }), g.push(e)
                        }
                    }, [o.user, g, j]);
                return o ? (0, r.jsxs)("div", {
                    ref: f,
                    className: "spotlight-card ".concat(u ? "active" : "", " ").concat(c || ""),
                    onClick: w,
                    onMouseEnter: () => {
                        null == x || x(n), j("home_project_hover", {
                            area: "spotlight_list",
                            project_id: o.project_id,
                            project_url: o.project_url,
                            index: n + 1
                        })
                    },
                    onMouseLeave: () => null == p ? void 0 : p(),
                    children: [(0, r.jsx)("div", {
                        className: "spotlight-card-image",
                        children: (0, r.jsx)(O.A, {
                            url: null != (l = null != (t = o.custom_cover_url) ? t : o.cover_url) ? l : "",
                            className: "h-full w-full object-cover transition-transform duration-300",
                            ref: v,
                            alwaysAnimated: !!b || void 0,
                            alt: o.title ? "Screenshot of ".concat(o.title) : "Screenshot of project"
                        })
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-1 flex-col justify-between gap-3 xl:gap-0 xl:py-1",
                        children: [(0, r.jsx)(V, {
                            project: o,
                            userClick: y
                        }), (0, r.jsx)(U.A, {
                            project: o
                        })]
                    }), u && (0, r.jsx)("div", {
                        className: "spotlight-card-arrow",
                        children: (0, r.jsx)(d.SJ3, {
                            className: "text-white",
                            size: 12
                        })
                    })]
                }) : null
            };
            F.displayName = "SpotlightCard";
            let V = e => {
                var t, l, s, a, n, o, i, c, d, u;
                let {
                    project: x,
                    userClick: p
                } = e;
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsx)("div", {
                        className: "spotlight-card-title-desktop",
                        children: null != (c = null != (i = x.custom_title) ? i : x.title) ? c : "".concat(null == (t = x.user) ? void 0 : t.display_name, "'s project")
                    }), (0, r.jsxs)("div", {
                        className: "spotlight-card-meta",
                        children: [(0, r.jsxs)("div", {
                            className: "spotlight-card-avatar",
                            children: [(0, r.jsx)("img", {
                                src: (null == (l = x.user) ? void 0 : l.photo_url) || "/images/avatar.svg",
                                className: "h-full w-full cursor-pointer rounded-full",
                                onClick: p,
                                alt: " ",
                                fetchPriority: "low"
                            }), (0, r.jsx)(Y.A, {
                                className: "spotlight-card-avatar-badge absolute -right-0.5 -bottom-px border-white",
                                userBadge: null == (a = x.user) || null == (s = a.badge) ? void 0 : s.type,
                                size: "12",
                                tooltipSide: "right"
                            })]
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("div", {
                                className: "spotlight-card-title-mobile",
                                children: null != (u = null != (d = x.custom_title) ? d : x.title) ? u : "".concat(null == (n = x.user) ? void 0 : n.display_name, "'s project")
                            }), (0, r.jsx)("div", {
                                className: "text-[12px] text-black/30",
                                onClick: p,
                                children: null == (o = x.user) ? void 0 : o.display_name
                            })]
                        })]
                    })]
                })
            };

            function X(e) {
                var t, l;
                let {
                    projects: s = []
                } = e, [n, o] = (0, a.useState)(0), [c, d] = (0, a.useState)(!1), u = (0, a.useRef)(null), x = (0, a.useRef)(null), p = (0, a.useRef)(null), {
                    track: m
                } = (0, i.s)(), h = s[n];
                (0, a.useEffect)(() => {
                    let e = u.current;
                    if (!e || !h) return;
                    let t = e.getBoundingClientRect();
                    0 === t.width || t.bottom < 100 || m("home_spot_project_play", {
                        area: "spotlight_play",
                        project_id: h.project_id,
                        project_url: h.project_url,
                        index: n + 1
                    })
                }, [n, h]);
                let f = (0, a.useCallback)(e => {
                        o(e), d(!0)
                    }, []),
                    g = (0, a.useCallback)(() => {
                        d(!1)
                    }, []),
                    v = (0, a.useCallback)(() => {
                        c || o(e => (e + 1) % s.length)
                    }, [s.length, c, o]);
                return (0, r.jsxs)("div", {
                    className: "spotlight-container",
                    children: [(0, r.jsx)("h1", {
                        className: "mx-2 w-full text-left text-[32px] font-medium max-sm:text-[30px]",
                        children: "Vibe Coding Community Spotlight"
                    }), (0, r.jsx)("div", {
                        className: "spotlight-play-container",
                        children: (0, r.jsxs)("div", {
                            className: "spotlight-play-wrapper",
                            children: [(0, r.jsx)("div", {
                                id: "spotlight-play",
                                ref: u,
                                className: "spotlight-play",
                                onClick: () => {
                                    m("home_project_click", {
                                        area: "spotlight_play",
                                        project_id: h.project_id,
                                        project_url: h.project_url,
                                        index: n + 1
                                    }), window.open((0, B.getProjectOrigin)() + h.project_url, "_blank")
                                },
                                children: (0, r.jsx)(O.A, {
                                    url: null != (l = null != (t = h.custom_cover_url) ? t : h.cover_url) ? l : "",
                                    className: "h-full w-full rounded-[12px] object-cover transition-transform duration-300",
                                    ref: x,
                                    alt: h.title ? "Screenshot of ".concat(h.title) : "Screenshot of project",
                                    loop: c,
                                    alwaysAnimated: !0,
                                    onEnded: v
                                })
                            }), (0, r.jsx)("div", {
                                className: "spotlight-card-list",
                                ref: p,
                                children: s.map((e, t) => (0, r.jsx)(F, {
                                    index: t,
                                    isActive: t === n,
                                    project: e,
                                    className: "col-span-1",
                                    onHover: f,
                                    onLeave: g
                                }, t))
                            })]
                        })
                    })]
                })
            }
            V.displayName = "SpotlightMetaInfo";
            let G = (0, n.createServerReference)("60d18ff2ba816aaaf59fc176dc18f973cb216270dd", n.callServer, void 0, n.findSourceMapURL, "getProjects"),
                M = (0, n.createServerReference)("7f3e7274b8ec32ac6b83cf7ab2a0bf9519e9254b45", n.callServer, void 0, n.findSourceMapURL, "getInstallFlag");
            var W = l(45661);
            let J = "category-switch";

            function Q(e) {
                let {
                    categories: t,
                    selectedCategory: l,
                    loading: s,
                    onCategoryChange: a
                } = e;
                return (0, r.jsx)("div", {
                    className: "bg-body no-scrollbar sticky top-14 z-1 box-content flex h-9.5 items-center gap-3 overflow-x-auto pb-3 whitespace-nowrap",
                    children: t && t.map(e => (0, r.jsx)("button", {
                        onClick: () => a(e),
                        disabled: s,
                        className: "".concat(s ? "" : "cursor-pointer", " min-w-[64px] flex-shrink-0 rounded-[10px] px-3 text-[14px] leading-9 transition-all ").concat((null == l ? void 0 : l.category_id) === e.category_id ? "bg-[#2C2C2C] text-white" : "border border-[rgba(0,0,0,0.06)] text-black/65 hover:border-transparent hover:bg-black/3"),
                        children: e.display_name
                    }, e.category_id))
                })
            }

            function H() {
                return (0, r.jsx)("div", {
                    className: "bg-body no-scrollbar sticky top-14 box-content flex h-9 items-center gap-3 overflow-x-auto pb-3 whitespace-nowrap",
                    children: Array(8).fill(0).map((e, t) => (0, r.jsx)("div", {
                        className: "h-10 w-24 animate-pulse rounded-[10px] bg-black/5"
                    }, t))
                })
            }
            var q = l(81880);
            let K = e => {
                var t, l;
                let {
                    project: n,
                    index: o,
                    area: c,
                    onUpdate: d,
                    tabName: u,
                    onExposure: x,
                    isShowInteractionInfoBorder: p
                } = e, [m, h] = (0, a.useState)(!1), f = (0, a.useRef)(null), g = (0, s.useRouter)(), v = (0, a.useRef)(null), {
                    track: j
                } = (0, i.s)();
                (0, a.useEffect)(() => {
                    let e = new IntersectionObserver(t => {
                        if (t[0].isIntersecting && !m) {
                            var l, r, s, a, i, d, p, f;
                            j("home_project_show", {
                                project_id: n.project_id,
                                project_url: n.project_url,
                                index: o + 1,
                                area: c,
                                tab_name: u,
                                project_views: null != (i = n.view_count) ? i : 0,
                                project_comments: null != (d = n.comment_count) ? d : 0,
                                project_reactions: null != (p = null == (r = n.interaction) || null == (l = r.count) ? void 0 : l.reduce((e, t) => {
                                    var l;
                                    return e + (null != (l = null == t ? void 0 : t.count) ? l : 0)
                                }, 0)) ? p : 0,
                                project_user_badge: null != (f = null == (a = n.user) || null == (s = a.badge) ? void 0 : s.type) ? f : ""
                            }), x && x(n.project_id, o, c, u), h(!0), e.disconnect()
                        }
                    });
                    return f.current && e.observe(f.current), () => e.disconnect()
                }, [j, n.project_url, o, c, m, x, u]);
                let b = (0, a.useCallback)(() => {
                        var e, t, l, r, s, a, i, d;
                        j("home_project_click", {
                            project_id: n.project_id,
                            project_url: n.project_url,
                            index: o + 1,
                            area: c,
                            tab_name: u,
                            project_views: null != (s = n.view_count) ? s : 0,
                            project_comments: null != (a = n.comment_count) ? a : 0,
                            project_reactions: null != (i = null == (t = n.interaction) || null == (e = t.count) ? void 0 : e.reduce((e, t) => {
                                var l;
                                return e + (null != (l = null == t ? void 0 : t.count) ? l : 0)
                            }, 0)) ? i : 0,
                            project_user_badge: null != (d = null == (r = n.user) || null == (l = r.badge) ? void 0 : l.type) ? d : ""
                        }), window.open("".concat((0, B.getProjectOrigin)()).concat(n.project_url, "?enter_from=home"), "_blank")
                    }, [n]),
                    w = (0, a.useCallback)(e => {
                        var t, l, r;
                        if (e.preventDefault(), e.stopPropagation(), (null == (t = n.user) ? void 0 : t.uid) && (null == (l = n.user) ? void 0 : l.uid) !== Z.v1) {
                            let e = "/profile/".concat(null == (r = n.user) ? void 0 : r.uid);
                            j("home_creator_click", {
                                project_id: n.project_id,
                                project_url: n.project_url,
                                creator_profile_url: e
                            }), g.push(e)
                        }
                    }, [n.user, g]);
                return (0, r.jsxs)("div", {
                    ref: f,
                    className: "flex w-full cursor-pointer flex-col gap-3 rounded-[16px] bg-white p-2 pb-3 duration-300",
                    onClick: b,
                    children: [(0, r.jsxs)("div", {
                        className: "flex h-full w-full flex-col gap-3",
                        children: [(0, r.jsx)("div", {
                            className: "relative overflow-hidden rounded-[8px] border border-black/6",
                            onMouseEnter: () => {
                                var e;
                                null == (e = v.current) || e.play()
                            },
                            onMouseLeave: () => {
                                var e;
                                null == (e = v.current) || e.pause()
                            },
                            children: (0, r.jsx)("div", {
                                className: "aspect-[16/9] w-full overflow-hidden",
                                children: (0, r.jsx)(O.A, {
                                    url: null != (l = null != (t = n.custom_cover_url) ? t : n.cover_url) ? l : "",
                                    className: "h-full w-full bg-black/6 object-cover transition-transform duration-300 hover:scale-102",
                                    ref: v,
                                    alt: " "
                                })
                            })
                        }), (0, r.jsx)(q.A, {
                            project: n,
                            userClick: w
                        })]
                    }), (0, r.jsx)("div", {
                        className: "px-1",
                        children: (0, r.jsx)(U.A, {
                            project: n,
                            isShowBorder: p
                        })
                    })]
                })
            };

            function $() {
                return (0, r.jsxs)("div", {
                    className: "flex w-full flex-col gap-3 rounded-[16px] bg-white p-2 pb-3",
                    children: [(0, r.jsx)("div", {
                        className: "relative overflow-hidden rounded-[8px]",
                        children: (0, r.jsx)("div", {
                            className: "aspect-[16/9] w-full animate-pulse bg-black/3"
                        })
                    }), (0, r.jsxs)("div", {
                        className: "flex items-center gap-2 px-1",
                        children: [(0, r.jsx)("div", {
                            className: "h-[30px] w-[30px] animate-pulse rounded-full bg-black/3"
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-1 flex-col gap-0.5",
                            children: [(0, r.jsx)("div", {
                                className: "h-4 w-[211px] max-w-full animate-pulse rounded bg-black/3"
                            }), (0, r.jsx)("div", {
                                className: "h-3 w-[102px] max-w-full animate-pulse rounded bg-black/3"
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "flex items-center gap-2 px-1",
                        children: (0, r.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, r.jsx)("div", {
                                className: "h-7 w-[38px] animate-pulse rounded-[8px] bg-black/3"
                            }), (0, r.jsx)("div", {
                                className: "h-7 w-[38px] animate-pulse rounded-[8px] bg-black/3"
                            }), (0, r.jsx)("div", {
                                className: "h-7 w-[38px] animate-pulse rounded-[8px] bg-black/3"
                            })]
                        })
                    })]
                })
            }

            function ee(e) {
                let {
                    categories: t,
                    initialCategory: l,
                    initialProjects: n,
                    initialPageInfo: o,
                    isNewInstall: c
                } = e, d = (0, s.useSearchParams)(), [u, x] = (0, a.useState)(l), [p, m] = (0, a.useState)(n), [h, f] = (0, a.useState)(!1), [g, v] = (0, a.useState)(null), [j, b] = (0, a.useState)({
                    next_cursor: (null == o ? void 0 : o.next_cursor) || "",
                    has_more: (null == o ? void 0 : o.has_more) || !0
                }), [w, y] = (0, a.useState)(!1), N = (0, a.useRef)(null), k = (0, a.useRef)(null), _ = (0, a.useRef)(null), S = (0, a.useRef)(null), A = (0, a.useRef)(!1), C = (0, a.useRef)(null), {
                    track: I,
                    inject: E
                } = (0, i.s)(), {
                    handleExposure: R
                } = (0, W.v)({
                    scene: "homepage"
                });
                (0, a.useEffect)(() => {
                    (async () => {
                        await M() || (document.cookie = "install_flag=true; path=/; max-age=".concat(2592e3, "; domain=").concat(".youware.com"))
                    })()
                }, []), (0, a.useEffect)(() => {
                    E({
                        is_new_user: c
                    })
                }, [c]), (0, a.useEffect)(() => {
                    let e = document.getElementById("page-scroll-div");
                    e && (S.current = e)
                }, []), (0, a.useEffect)(() => {
                    let e = d.get("category");
                    if (e && t.length > 0) {
                        let l = t.find(t => t.display_name.toLowerCase().replace(/\s/g, "") === e.toLowerCase().replace("-", ""));
                        if (l && l.category_id !== (null == u ? void 0 : u.category_id)) {
                            x(l), f(!0), m([]), C.current = null, A.current = !1, P(!0, l.category_id);
                            let e = new URLSearchParams(d);
                            e.delete("category");
                            let t = e.toString() ? "/?".concat(e.toString()) : "/";
                            window.history.replaceState({}, "", t)
                        }
                    }
                }, [d, t]);
                let P = async function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        if (A.current) return;
                        let l = G({
                            page_size: 24,
                            cursor: e ? "" : j.next_cursor,
                            ...c ? {
                                is_new_user: c
                            } : {},
                            ...t && "all" !== t ? {
                                category_id: t
                            } : {}
                        }, Object.fromEntries(d.entries()));
                        C.current = l;
                        try {
                            A.current = !0, e ? f(!0) : y(!0);
                            let t = await l;
                            if (C.current !== l) return void console.log("Request cancelled: newer request is available");
                            if (0 === t.code && t.data) {
                                var r;
                                let l = (null == (r = t.data) ? void 0 : r.projects) || [];
                                e ? m(l) : m(e => {
                                    let t = l.filter(t => !e.some(e => e.project_id === t.project_id));
                                    return [...e, ...t]
                                }), b(t.data.page_info), v(null)
                            } else v(t.message || "Failed to load projects")
                        } catch (e) {
                            if (C.current !== l) return void console.log("Request error ignored: newer request is available");
                            v("An error occurred while fetching projects"), b({
                                next_cursor: "",
                                has_more: !1
                            })
                        } finally {
                            C.current === l && (f(!1), y(!1), A.current = !1, C.current = null)
                        }
                    },
                    T = async e => {
                        if (I("home_category_tab_click", {
                                tab_name: e.display_name
                            }), _.current && S.current) {
                            let e = S.current.getBoundingClientRect(),
                                t = _.current.getBoundingClientRect().top - e.top;
                            t < 56 && setTimeout(() => {
                                var e, l;
                                null == (l = S.current) || l.scrollTo({
                                    top: (null == (e = S.current) ? void 0 : e.scrollTop) + t - 56,
                                    behavior: "smooth"
                                })
                            }, 100)
                        }
                        x(e), f(!0), m([]), C.current = null, A.current = !1, P(!0, e.category_id)
                    };
                (0, a.useEffect)(() => (e => {
                    let t = t => {
                        e(t.detail)
                    };
                    return window.addEventListener(J, t), () => {
                        window.removeEventListener(J, t)
                    }
                })(e => {
                    let {
                        categoryName: l,
                        scrollToProjects: r
                    } = e;
                    if (t.length > 0) {
                        let e = t.find(e => e.display_name.toLowerCase().replace(/\s/g, "") === l.toLowerCase().replace("-", ""));
                        e && e.category_id !== (null == u ? void 0 : u.category_id) && T(e), r && setTimeout(() => {
                            let e = document.getElementById("trending-projects");
                            e && e.scrollIntoView({
                                behavior: "instant"
                            })
                        }, 100)
                    }
                }), [t]);
                let D = () => {
                        h || w || !j.has_more || P(!1, u ? u.category_id : void 0)
                    },
                    z = (e, t) => {
                        m(l => l.map(l => l.project_id === e.project_id ? { ...l,
                            interaction: t
                        } : l))
                    };
                return (0, a.useEffect)(() => () => {
                    C.current = null
                }, []), (0, a.useEffect)(() => (N.current && N.current.disconnect(), N.current = new IntersectionObserver(e => {
                    let [t] = e;
                    !t.isIntersecting || !j.has_more || h || w || g || D()
                }, {
                    rootMargin: "0px",
                    threshold: .1
                }), k.current && N.current.observe(k.current), () => {
                    N.current && N.current.disconnect()
                }), [j.has_more, h, w, g, D]), (0, r.jsxs)("div", {
                    className: "relative w-full",
                    children: [(0, r.jsx)("div", {
                        ref: _,
                        className: "h-1 w-full"
                    }), (0, r.jsx)(Q, {
                        categories: t,
                        selectedCategory: u,
                        loading: h,
                        onCategoryChange: T
                    }), (0, r.jsxs)("div", {
                        className: "3xl:grid-cols-4 mx-auto grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 md:gap-8 xl:grid-cols-3",
                        "data-project-grid": !0,
                        children: [p.map((e, t) => (0, r.jsx)(K, {
                            project: e,
                            area: "codecamp",
                            index: t,
                            onUpdate: z,
                            onExposure: R,
                            tabName: (null == u ? void 0 : u.display_name) || "",
                            isShowInteractionInfoBorder: !0
                        }, "".concat(e.project_id, "-").concat(t))), (h || w) && Array(24).fill(0).map((e, t) => (0, r.jsx)($, {}, "skeleton-".concat(t)))]
                    }), 0 === p.length && !h && !g && (0, r.jsxs)("div", {
                        className: "my-8 py-16 text-center",
                        children: [(0, r.jsx)("p", {
                            className: "mb-2 text-xl font-medium text-black/95",
                            children: "No projects found"
                        }), (0, r.jsx)("p", {
                            className: "text-sm text-black/95",
                            children: "Upload your first project to get started"
                        })]
                    }), g ? (0, r.jsxs)("div", {
                        className: "my-8 flex flex-col items-center gap-2 p-6 text-center",
                        children: [(0, r.jsx)("p", {
                            className: "text-[14px] text-black/95",
                            children: "Something went wrong"
                        }), (0, r.jsx)("button", {
                            className: "cursor-pointer rounded-[10px] bg-[#2C2C2C] p-3 text-[14px] text-white",
                            onClick: D,
                            children: "Try again"
                        })]
                    }) : null, (0, r.jsx)("div", {
                        ref: k,
                        className: "absolute bottom-250 -z-10 h-1 w-full"
                    })]
                })
            }

            function et(e) {
                let {
                    categories: t,
                    selectedCategory: l
                } = e;
                return (0, r.jsxs)("div", {
                    className: "w-full",
                    children: [(null == t ? void 0 : t.length) ? (0, r.jsx)(Q, {
                        categories: t,
                        selectedCategory: l || null,
                        loading: !0,
                        onCategoryChange: () => {}
                    }) : (0, r.jsx)(H, {}), (0, r.jsx)("div", {
                        className: "3xl:grid-cols-4 mx-auto grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 md:gap-8 xl:grid-cols-3",
                        "data-project-grid": !0,
                        children: Array(12).fill(0).map((e, t) => (0, r.jsx)($, {}, "skeleton-".concat(t)))
                    })]
                })
            }
            let el = "yw-categories";

            function er(e) {
                let {
                    projectsPromise: t,
                    categories: l,
                    initialCategory: s
                } = e, {
                    projects: n,
                    pageInfo: o,
                    isNewUser: i
                } = (0, a.use)(t);
                return (0, r.jsx)(ee, {
                    categories: l,
                    initialCategory: s,
                    initialProjects: n,
                    initialPageInfo: o,
                    isNewInstall: i
                })
            }

            function es(e) {
                let {
                    spotlightPromise: t,
                    projectsPromise: l
                } = e, n = (0, a.use)(t), {
                    track: d
                } = (0, i.s)(), u = (0, s.useSearchParams)(), [x, p] = (0, a.useState)([]);
                (0, a.useEffect)(() => {
                    let e = (() => {
                        try {
                            let e = localStorage.getItem(el);
                            return e ? JSON.parse(e) : []
                        } catch (e) {
                            return console.error("Failed to load cached categories:", e), []
                        }
                    })();
                    e.length > 0 && p(e), o().then(e => {
                        if (!(null == e ? void 0 : e.data)) return;
                        let t = e.data;
                        ((e, t) => {
                            let l = JSON.stringify(e) !== JSON.stringify(t);
                            if (l) try {
                                localStorage.setItem(el, JSON.stringify(t))
                            } catch (e) {
                                console.error("Failed to cache categories:", e)
                            }
                            return l
                        })(x, t) && p(t)
                    }).catch(e => {
                        console.error("Failed to fetch categories:", e)
                    })
                }, []), (0, a.useEffect)(() => {
                    d("home_page_view", { ...(0, c.oi)()
                    });
                    let e = window.location.hash;
                    if (e) {
                        let t = e.substring(1),
                            l = () => {
                                let e = document.getElementById(t);
                                e ? e.scrollIntoView({
                                    behavior: "smooth"
                                }) : setTimeout(l, 100)
                            };
                        setTimeout(l, 200)
                    }
                }, [d]);
                let m = (0, a.useMemo)(() => {
                    let e = u.get("category"),
                        t = x.length > 0 ? x[0] : null;
                    if (e && x) {
                        let l = x.find(t => t.category_id === e);
                        l && (t = l)
                    }
                    return t
                }, [x, u]);
                return (0, r.jsxs)("div", {
                    className: "flex w-full flex-1 flex-col items-center px-5",
                    children: [(0, r.jsxs)("div", {
                        className: "home-container",
                        id: "trending-projects",
                        children: [n.length > 0 ? (0, r.jsx)(X, {
                            projects: n
                        }) : null, (0, r.jsx)("h2", {
                            className: "mx-2 mb-3 text-[20px] font-medium",
                            children: "Trending Projects"
                        }), x.length > 0 && m ? (0, r.jsx)(a.Suspense, {
                            fallback: (0, r.jsx)(et, {
                                categories: x,
                                selectedCategory: m
                            }),
                            children: (0, r.jsx)(er, {
                                projectsPromise: l,
                                categories: x,
                                initialCategory: m
                            })
                        }) : (0, r.jsx)(et, {
                            categories: x,
                            selectedCategory: m
                        })]
                    }), (0, r.jsx)("footer", {
                        className: "mt-12 w-full border-t border-black/12 px-4 py-4 text-center text-[12px] text-black/65 sm:py-6 sm:text-[14px]",
                        children: (0, r.jsx)("p", {
                            children: "\xa9 2025 YouWare"
                        })
                    }), (0, r.jsx)(z, {})]
                })
            }
        },
        28196: (e, t, l) => {
            "use strict";
            l.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/reaction-icon.de690e61.png",
                height: 1080,
                width: 1920,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAVFBMVEX2tyPwuyPVvCj/vyhMaXH9yy73xyH2sR/3ziv7xzyflmTFmzP+iS71eDmLvI9Vqcv2yyjSkC3zbxbwVDfYryToqRziph7Vtyn/1y/guiX/20HewCst3cusAAAAGHRSTlM3qfNYALkiZ/6WybbF4uZxWd6ivt1Zmfs9OYmSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAANElEQVR4nAXBCwJAIBBAwZc+uyWKSHT/e5oheksNOD7VuJ174V2mbzmtjGf0yxyCGOEOuB8nMQHCEk6PBwAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        41821: (e, t, l) => {
            "use strict";
            l.d(t, {
                A: () => f
            });
            var r = l(72011),
                s = l(73787),
                a = l(72913),
                n = l(22374),
                o = function(e) {
                    return e.Image = "image", e.Video = "video", e.AnimatedImage = "animated_image", e.Unsupported = "unsupported", e
                }(o || {});
            let i = ["jpg", "jpeg", "png"],
                c = ["gif", "webp"],
                d = ["mp4"],
                u = e => {
                    let {
                        isLoading: t
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: "flex h-full w-full flex-col items-center justify-center bg-black/3",
                        children: [(0, r.jsx)("img", {
                            src: "/images/failed-image.svg",
                            alt: "failed",
                            className: "h-[50px] w-[50px]"
                        }), (0, r.jsx)("div", {
                            className: "mt-3 text-[16px] text-black/30",
                            children: t ? "No Cover Detected" : "The cover format is wrong."
                        })]
                    })
                },
                x = () => (0, r.jsxs)("div", {
                    className: "flex h-full w-full flex-col items-center justify-center bg-black/3 pb-10",
                    children: [(0, r.jsx)(a.A, {
                        animationPath: "/animations/lottie-task-loading.json",
                        className: "h-[110px] w-[110px]"
                    }), (0, r.jsx)("div", {
                        className: "mt-[-18px] text-[16px] font-normal text-black/30",
                        children: "Uploading..."
                    })]
                }),
                p = (0, s.memo)(e => {
                    let {
                        url: t,
                        alt: l,
                        className: a
                    } = e, [n, o] = (0, s.useState)(!1);
                    return !t || t.includes("placehold.co") ? (0, r.jsx)(u, {
                        isLoading: !0
                    }) : n ? (0, r.jsx)(u, {
                        isLoading: !1
                    }) : (0, r.jsx)("div", {
                        className: "relative h-full w-full",
                        children: (0, r.jsx)("img", {
                            src: t,
                            alt: null != l ? l : "",
                            loading: "lazy",
                            sizes: "100%",
                            width: "100%",
                            height: "100%",
                            className: "h-full w-full bg-black/3 object-cover ".concat(a),
                            onError: () => {
                                o(!0)
                            }
                        })
                    })
                });
            p.displayName = "ImageCover";
            let m = (0, s.forwardRef)((e, t) => {
                    var l;
                    let {
                        url: a,
                        className: o
                    } = e, i = (0, s.useRef)(null), [c, d] = (0, s.useState)(!1), [x, p] = (0, s.useState)(!1);
                    return (0, s.useEffect)(() => {
                        p((0, n.Fr)())
                    }, []), (0, s.useEffect)(() => {
                        if (t && "object" == typeof t && i.current) {
                            let l = i.current,
                                r = l.play.bind(l),
                                s = l.pause.bind(l);
                            l.play = () => e.alwaysAnimated ? Promise.resolve() : r(), l.pause = () => {
                                e.alwaysAnimated || s()
                            }, t.current = l
                        }
                    }, [e.alwaysAnimated]), (0, r.jsx)("div", {
                        className: "relative h-full w-full overflow-hidden bg-black/3 ".concat(o),
                        children: c ? (0, r.jsx)(u, {
                            isLoading: !1
                        }) : (0, r.jsx)("video", {
                            ref: i,
                            src: a,
                            className: "h-full w-full object-cover",
                            muted: !0,
                            playsInline: !0,
                            loop: null == (l = e.loop) || l,
                            controls: !1,
                            autoPlay: e.alwaysAnimated,
                            onEnded: e.onEnded,
                            onError: () => {
                                d(!0)
                            }
                        })
                    })
                }),
                h = (0, s.memo)((0, s.forwardRef)((e, t) => {
                    if (e.isUploading) return (0, r.jsx)(x, {});
                    switch ((e => {
                        var t, l;
                        if (!e || e.includes("placehold.co")) return "image";
                        if (!URL.canParse(e)) return "unsupported";
                        let r = new URL(e).pathname.split("."),
                            s = r.length > 1 && null != (l = null == (t = r.pop()) ? void 0 : t.toLowerCase()) ? l : "";
                        return d.includes(s) ? "video" : i.includes(s) ? "image" : c.includes(s) ? "animated_image" : "unsupported"
                    })(e.url)) {
                        case "image":
                        case "animated_image":
                            return (0, r.jsx)(p, { ...e
                            });
                        case "video":
                            return (0, r.jsx)(m, { ...e,
                                ref: t
                            });
                        case "unsupported":
                            return (0, r.jsx)(u, {
                                isLoading: !1
                            })
                    }
                    return null
                }));
            h.displayName = "MediaCover";
            let f = h
        },
        45661: (e, t, l) => {
            "use strict";
            l.d(t, {
                v: () => n
            });
            var r = l(73787),
                s = l(65547);
            let a = (0, s.createServerReference)("60880273b88b0ac7429a7a289d3e3b5d4bcdb18f35", s.callServer, void 0, s.findSourceMapURL, "markImpression"),
                n = e => {
                    let {
                        batchInterval: t = 1e3,
                        scene: l
                    } = e, [s, n] = (0, r.useState)(new Set), o = (0, r.useRef)(null), i = (0, r.useCallback)(e => {
                        n(t => {
                            let l = new Set(t);
                            return l.add(e), l
                        })
                    }, []);
                    return (0, r.useEffect)(() => {
                        let e = async () => {
                            if (s.size > 0) {
                                let e = Array.from(s);
                                try {
                                    n(new Set), await a(e, l)
                                } catch (e) {
                                    console.error("Failed to report project exposures:", e)
                                }
                            }
                        };
                        return o.current && clearTimeout(o.current), s.size > 0 && (o.current = setTimeout(e, t)), () => {
                            o.current && clearTimeout(o.current)
                        }
                    }, [s, t]), {
                        handleExposure: i,
                        exposedProjectsCount: s.size
                    }
                }
        },
        66360: (e, t, l) => {
            "use strict";

            function r(e) {
                return e > 1e3 && e < 1e6 ? (e / 1e3).toFixed(1) + "K" : e > 1e6 ? (e / 1e6).toFixed(1) + "M" : e > 1e9 ? (e / 1e9).toFixed(1) + "B" : e
            }
            l.d(t, {
                Z: () => r
            });
            "undefined" != typeof Intl && "Segmenter" in Intl && new Intl.Segmenter(void 0, {
                granularity: "word"
            }), RegExp("^[\\p{P}\\p{Zs}]+$", "u")
        },
        80925: (e, t, l) => {
            Promise.resolve().then(l.bind(l, 19209)), Promise.resolve().then(l.bind(l, 56866)), Promise.resolve().then(l.bind(l, 47998)), Promise.resolve().then(l.bind(l, 69092)), Promise.resolve().then(l.bind(l, 93392))
        },
        81880: (e, t, l) => {
            "use strict";
            l.d(t, {
                A: () => a
            });
            var r = l(72011);
            l(73787);
            var s = l(71246);
            let a = e => {
                var t, l, a, n, o, i, c;
                let {
                    project: d,
                    userClick: u
                } = e;
                return (0, r.jsxs)("div", {
                    className: "flex flex-row justify-start gap-2 pl-1",
                    children: [(0, r.jsxs)("div", {
                        className: "relative mt-0.5 h-[30px] w-[30px] shrink-0",
                        children: [(0, r.jsx)("img", {
                            src: (null == (t = d.user) ? void 0 : t.photo_url) || "/images/avatar.svg",
                            className: "h-full w-full cursor-pointer rounded-full bg-black/6",
                            onClick: u,
                            alt: " ",
                            fetchPriority: "low",
                            loading: "lazy"
                        }), (0, r.jsx)(s.A, {
                            className: "absolute -right-0.5 -bottom-px border-white",
                            userBadge: null == (a = d.user) || null == (l = a.badge) ? void 0 : l.type,
                            size: "12",
                            tooltipSide: "right"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [(0, r.jsx)("div", {
                            className: "text-[14px] text-black/95",
                            children: null != (c = null != (i = d.custom_title) ? i : d.title) ? c : "".concat(null == (n = d.user) ? void 0 : n.display_name, "'s project")
                        }), (0, r.jsx)("div", {
                            className: "text-[12px] text-black/30",
                            onClick: u,
                            children: null == (o = d.user) ? void 0 : o.display_name
                        })]
                    })]
                })
            }
        }
    }
]);