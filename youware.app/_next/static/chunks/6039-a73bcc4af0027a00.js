try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        r = (new e.Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "16507bd1-53ee-4358-b43c-943799f0bf15", e._sentryDebugIdIdentifier = "sentry-dbid-16507bd1-53ee-4358-b43c-943799f0bf15")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6039], {
        22375: (e, r, t) => {
            t.d(r, {
                cQ: () => n,
                cZ: () => a,
                oi: () => l
            });
            let i = "visit_source";

            function o() {
                try {
                    let e = localStorage.getItem(i);
                    return e ? JSON.parse(e) : {}
                } catch (e) {
                    return console.error("Failed to parse visit source data:", e), {}
                }
            }

            function n() {
                let e = function(e) {
                    try {
                        let r = new URL(e).searchParams,
                            t = r.get("invite_code");
                        if (t) return {
                            type: "invite_code",
                            value: t,
                            url: e,
                            timestamp: Date.now()
                        };
                        let i = r.get("utm_source");
                        if (i) return {
                            type: "utm_source",
                            value: i,
                            url: e,
                            timestamp: Date.now()
                        };
                        return null
                    } catch (e) {
                        return console.error("Failed to extract source from URL:", e), null
                    }
                }(window.location.href);
                if (!e) return;
                let r = { ...o()
                };
                r.first_source || (r.first_source = e), r.latest_source = e, "invite_code" === e.type ? r.latest_invite_code = e : "utm_source" === e.type && (r.latest_utm_source = e);
                try {
                    localStorage.setItem(i, JSON.stringify(r))
                } catch (e) {
                    console.error("Failed to save visit source data:", e)
                }
            }

            function a() {
                var e, r;
                let t = o(),
                    i = Date.now();
                return (null == (e = t.latest_source) ? void 0 : e.type) === "utm_source" ? null : (null == (r = t.latest_source) ? void 0 : r.type) === "invite_code" && t.latest_source.timestamp && i - t.latest_source.timestamp <= 2592e6 ? t.latest_source.value : null
            }

            function l() {
                var e, r, t, i, n, a;
                let l = o();
                return {
                    first_impression_source_type: (null == (e = l.first_source) ? void 0 : e.type) || "",
                    first_impression_source_value: (null == (r = l.first_source) ? void 0 : r.value) || "",
                    first_impression_source_url: (null == (t = l.first_source) ? void 0 : t.url) || "",
                    last_impression_source_type: (null == (i = l.latest_source) ? void 0 : i.type) || "",
                    last_impression_source_value: (null == (n = l.latest_source) ? void 0 : n.value) || "",
                    last_impression_source_url: (null == (a = l.latest_source) ? void 0 : a.url) || ""
                }
            }
        },
        36039: (e, r, t) => {
            let i, o;
            t.d(r, {
                AuthProvider: () => E,
                A: () => L
            });
            var n = t(72011),
                a = t(38416),
                l = t(39365),
                s = t(3417),
                c = t(73787),
                u = t(65547);
            let d = (0, u.createServerReference)("607baf8d576196ea02c59569b52a7fb7d6fbbeddcd", u.callServer, void 0, u.findSourceMapURL, "login"),
                f = (0, u.createServerReference)("40cc41a927e30c521955d9da046e73f61667a9c1ae", u.callServer, void 0, u.findSourceMapURL, "fetchInviteInfo"),
                g = (0, u.createServerReference)("405211f6c1865629877ee98b6b67fd7f287e155f82", u.callServer, void 0, u.findSourceMapURL, "linkProjects");
            var y = t(33686),
                h = t(86881),
                v = t(74706),
                _ = t(76516);
            let p = (0, u.createServerReference)("009676ce71364ebabe564ba4a429ef7b278a25fbdc", u.callServer, void 0, u.findSourceMapURL, "logout");
            var w = t(38407);
            let m = JSON.parse('{"apiKey":"AIzaSyB9Jdqpb4h5RgHmRRJSfqTOfBT-DPV34jA","authDomain":"gglogin.youware.com","projectId":"yourware-arco","storageBucket":"yourware-arco.firebasestorage.app","messagingSenderId":"541265544701","appId":"1:541265544701:web:d52622395895582c9c4594"}');

            function S() {
                if (!o) {
                    let {
                        auth: e
                    } = m ? (i = (0, _.Dk)().length ? (0, _.Dk)()[0] : (0, _.Wp)(m), o = (0, l.xI)(i), (0, l.oM)(o, l.gz), w.G.setup(), {
                        app: i,
                        auth: o
                    }) : (console.error("firebaseConfig is undefined"), {
                        app: void 0,
                        auth: void 0
                    });
                    o = e
                }
                return o
            }
            async function b() {
                let e = S();
                if (!e) throw console.error("auth is undefined"), Error("auth is undefined");
                try {
                    return await e.signOut(), console.log("sign out successfully"), await p()
                } catch (e) {
                    throw console.error("sign out error:", e), e
                }
            }
            var A = t(92394),
                I = t(22375);
            let k = (0, c.createContext)({
                    googleLoginLoading: !1,
                    loginWithGoogle: async () => {},
                    loginWithGoogleOneTap: async e => {},
                    sendLinkToEmail: async (e, r) => {},
                    signInWithEmailLink: async (e, r) => {},
                    isSignInWithEmailLink: e => !1,
                    logout: async () => {},
                    inviteCode: null,
                    inviterInfo: null,
                    inviteLoading: !1,
                    inviteError: null,
                    hasInvited: !1,
                    asyncCheckShouldShowInvite: async () => !1,
                    trackTriggerLogin: () => {},
                    trackLoginResult: () => {}
                }),
                E = e => {
                    let {
                        children: r
                    } = e, {
                        user: t,
                        setUser: i
                    } = (0, y.J)(), [o, u] = (0, c.useState)(!1), [_, p] = (0, c.useState)(null), [w, m] = (0, c.useState)(null), [E, L] = (0, c.useState)(!1), [R, O] = (0, c.useState)(null), [P, j] = (0, c.useState)(!1), D = S(), F = new l.HF, {
                        identify: T,
                        track: C
                    } = (0, h.s)(), N = (0, s.useSearchParams)();
                    (0, c.useEffect)(() => {
                        var e;
                        let r = null == (e = (0, v.jL)()) ? void 0 : e.yw_id;
                        T(t), r && window.gtag && window.gtag("config", "G-6Z2G4L6M8E", {
                            user_id: r
                        }), a.gV({
                            id: r,
                            ...t && {
                                username: t.display_name
                            }
                        })
                    }, [t]), (0, c.useEffect)(() => {
                        t && _ && j(!0)
                    }, [t]), (0, c.useEffect)(() => {
                        let e = N.get("invite_code") || (0, I.cZ)();
                        e && (p(e), L(!0), O(null), f(e).then(e => {
                            0 === e.code && e.data ? (m(e.data), A.Ay.info("Fetched inviter info", {
                                inviter_info: e.data
                            })) : (O("Failed to fetch inviter information"), A.Ay.error("Failed to fetch inviter info", Error("API error: ".concat(e.code))))
                        }).catch(e => {
                            O("Error fetching inviter information"), A.Ay.error("Error fetching inviter info", e)
                        }).finally(() => {
                            L(!1)
                        }))
                    }, [N]);
                    let G = async () => {
                            try {
                                if (u(!0), !D) throw A.Ay.error("auth is undefined"), Error("auth is undefined");
                                F.setCustomParameters({
                                    prompt: "select_account"
                                }), F.addScope("https://www.googleapis.com/auth/userinfo.profile");
                                let e = await (0, l.df)(D, F);
                                if (await D.signOut(), !e) throw Error("Failed to login");
                                await Z(e);
                                let r = _ || N.get("invite_code") || (0, I.cZ)() || "",
                                    t = await x(e, r);
                                i(t), B(t.uid), A.Ay.info("sign in with google success")
                            } catch (e) {
                                throw A.Ay.error("sign in with google error", e), e
                            } finally {
                                u(!1)
                            }
                        },
                        U = async (e, r) => {
                            if (!D) throw A.Ay.error("auth is undefined"), Error("auth is undefined");
                            try {
                                let t = await (0, l.hK)(D, e, r);
                                if (await D.signOut(), !t) throw Error("Failed to sign in with email link");
                                let o = _ || N.get("invite_code") || (0, I.cZ)() || "",
                                    n = await x(t, o);
                                i(n), B(n.uid), A.Ay.info("sign in with email link success", {
                                    loginUser: n
                                })
                            } catch (e) {
                                throw A.Ay.error("sign in with email link error", e), e
                            } finally {
                                window.localStorage.removeItem("emailForSignIn")
                            }
                        },
                        J = async (e, r) => {
                            try {
                                if (A.Ay.info("login with email"), !D) throw A.Ay.error("auth is undefined"), Error("auth is undefined");
                                await (0, l.MN)(D, e, {
                                    url: r,
                                    handleCodeInApp: !0
                                }), A.Ay.info("send sign in link to email success")
                            } catch (e) {
                                throw A.Ay.error("send sign in link to email error:", e), e
                            }
                        },
                        M = async e => {
                            try {
                                if (!D) throw A.Ay.error("auth is undefined"), Error("auth is undefined");
                                let r = l.HF.credential(e),
                                    t = await (0, l.eN)(D, r);
                                if (await D.signOut(), !t) throw Error("Failed to login with Google One Tap");
                                await Z(t);
                                let o = _ || N.get("invite_code") || (0, I.cZ)() || "",
                                    n = await x(t, o);
                                i(n), B(n.uid), A.Ay.info("sign in with Google One Tap success")
                            } catch (e) {
                                throw A.Ay.error("sign in with Google One Tap error", e), e
                            }
                        },
                        W = async () => {
                            try {
                                console.log("sign out"), await b(), i(null)
                            } catch (e) {
                                throw console.error("sign out error:", e), e
                            }
                        },
                        Z = async e => {
                            let r = e.user;
                            A.Ay.info("sync google user profile", {
                                user: r
                            });
                            let t = r.providerData.find(e => "google.com" === e.providerId);
                            if (A.Ay.info("sync google providerInfo", {
                                    providerInfo: t
                                }), t) {
                                let {
                                    displayName: e,
                                    photoURL: i
                                } = t;
                                if (!r.displayName && e && await (0, l.r7)(r, {
                                        displayName: e
                                    }), !r.photoURL && i) {
                                    let e = i.replace(/=s\d+-c$/, "=s400-c");
                                    await (0, l.r7)(r, {
                                        photoURL: e
                                    })
                                }
                            }
                        },
                        x = async (e, r) => {
                            var t;
                            let i = e.user;
                            A.Ay.info("sync user to server", {
                                user: i
                            });
                            let o = await i.getIdToken(),
                                n = await d(o, r);
                            if (200 !== n.code || !(null == (t = n.data) ? void 0 : t.userInfo)) throw Error("sync user to server failed");
                            return n.data.userInfo
                        },
                        B = async e => {
                            if (A.Ay.info("handle anonymous projects"), e) {
                                let r = JSON.parse(localStorage.getItem("Anonymous_Projects") || "[]");
                                if (r.length > 0) try {
                                    g({
                                        uid: e,
                                        project_ids: r
                                    }), localStorage.removeItem("Anonymous_Projects"), A.Ay.info("Projects linked successfully in background")
                                } catch (e) {
                                    A.Ay.error("Background project linking failed:", e)
                                }
                            }
                        },
                        H = async () => new Promise(e => {
                            let r = null !== N.get("invite_code") && !t && !P;
                            e(null != r && r)
                        });
                    return (0, n.jsx)(k.Provider, {
                        value: {
                            googleLoginLoading: o,
                            loginWithGoogle: G,
                            loginWithGoogleOneTap: M,
                            sendLinkToEmail: J,
                            isSignInWithEmailLink: e => D ? (0, l.Pj)(D, e) : (A.Ay.error("auth is undefined"), !1),
                            signInWithEmailLink: U,
                            logout: W,
                            inviteCode: _,
                            inviterInfo: w,
                            inviteLoading: E,
                            inviteError: R,
                            hasInvited: P,
                            asyncCheckShouldShowInvite: H,
                            trackTriggerLogin: (e, r) => {
                                var t;
                                C("login_continue_button_click", {
                                    login_platform: e,
                                    enter_from: r,
                                    inviter_user_id: (null == w || null == (t = w.user) ? void 0 : t.uid) || "",
                                    ...(0, I.oi)()
                                })
                            },
                            trackLoginResult: (e, r, t, i) => {
                                var o;
                                C("login_status", {
                                    login_platform: e,
                                    result: r,
                                    fail_reason: i,
                                    enter_from: t,
                                    inviter_user_id: (null == w || null == (o = w.user) ? void 0 : o.uid) || "",
                                    ...(0, I.oi)()
                                })
                            }
                        },
                        children: r
                    })
                },
                L = () => (0, c.useContext)(k)
        }
    }
]);