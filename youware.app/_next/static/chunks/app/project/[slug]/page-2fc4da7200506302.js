try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4ad4c551-b88c-45c2-9afd-f15c6027a31d", e._sentryDebugIdIdentifier = "sentry-dbid-4ad4c551-b88c-45c2-9afd-f15c6027a31d")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9144], {
        6050: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 15144)), Promise.resolve().then(r.bind(r, 18472)), Promise.resolve().then(r.bind(r, 56866))
        },
        11569: (e, t, r) => {
            "use strict";
            r.d(t, {
                i: () => s
            });
            let l = null,
                s = () => l ? Promise.resolve(l) : new Promise(e => {
                    if (!window.collectEvent) return void e("");
                    try {
                        window.collectEvent("getToken", t => {
                            t && t.ssid ? (l = t.ssid, e(t.ssid)) : e("")
                        })
                    } catch (t) {
                        e("")
                    }
                })
        },
        13683: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => i,
                m: () => o
            });
            var l = r(72011),
                s = r(73787),
                n = r(72913),
                a = r(95869),
                i = function(e) {
                    return e.Hover = "hover", e.Click = "click", e.None = "none", e
                }({});
            let o = e => {
                let {
                    emoji: t,
                    className: r,
                    width: i = 20,
                    height: o = 20,
                    selected: c = !1,
                    triggerType: d = "hover",
                    ...u
                } = e, [m, x] = (0, s.useState)(!1), {
                    getLottieData: p
                } = (0, a.k)(), [h, f] = (0, s.useState)(!1), g = "".concat(null == t ? void 0 : t.interaction_type, "-").concat(i, "-").concat(o), j = () => "none" !== d && ("hover" === d ? m : "click" === d && c);
                return (0, l.jsx)("div", {
                    className: r,
                    ...u,
                    onMouseEnter: () => x(!0),
                    onMouseLeave: () => x(!1),
                    children: (0, l.jsxs)("div", {
                        style: {
                            position: "relative",
                            width: i,
                            height: o
                        },
                        children: [j() && t && (0, l.jsx)(n.A, {
                            loop: "click" !== d || !c,
                            animationPath: t.lottie,
                            animationData: p(t.lottie),
                            className: "absolute top-0 left-0 h-full w-full",
                            style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: i,
                                height: o,
                                opacity: h && j() ? 1 : 0,
                                zIndex: 1
                            },
                            onLoad: () => f(!0)
                        }), (0, l.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: i,
                                height: o,
                                opacity: h && j() ? 0 : 1
                            },
                            children: (null == t ? void 0 : t.icon) ? (0, l.jsx)("img", {
                                src: t.icon,
                                alt: (null == t ? void 0 : t.display_name) || "",
                                width: i,
                                height: o,
                                style: {
                                    width: i,
                                    height: o
                                }
                            }, g) : null
                        })]
                    })
                })
            }
        },
        15144: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => a
            });
            var l = r(72011),
                s = r(3417),
                n = r(27743);

            function a() {
                let e = (0, s.useRouter)();
                return (0, l.jsx)("div", {
                    className: "relative flex h-screen max-h-screen min-h-screen",
                    children: (0, l.jsx)("div", {
                        className: "relative flex h-screen max-h-screen min-h-screen flex-1 flex-col overflow-y-auto",
                        children: (0, l.jsxs)("main", {
                            className: "mb-20 flex flex-1 flex-col items-center justify-center px-5",
                            children: [(0, l.jsx)("h1", {
                                className: "mb-2 text-[80px] sm:text-[100px] md:text-[128px]",
                                children: "404"
                            }), (0, l.jsx)("h2", {
                                className: "text-center text-[28px]/8 sm:text-[32px]/9 md:text-[40px]/10",
                                children: "Oops, this project is gone!"
                            }), (0, l.jsx)("p", {
                                className: "mt-3 text-center text-sm text-black/45 sm:text-base",
                                children: "The project you're looking for doesn't exist or has been removed."
                            }), (0, l.jsx)("button", {
                                onClick: () => {
                                    (0, n.isComOrigin)() ? e.push("/"): window.location.href = (0, n.getComOrigin)()
                                },
                                className: "bg-brand mt-12 flex h-12 w-36 cursor-pointer items-center justify-center rounded-[16px] text-sm text-white sm:mt-16 sm:h-14 sm:w-40 sm:text-base md:mt-20",
                                children: "Explore More"
                            })]
                        })
                    })
                })
            }
        },
        18472: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => eP
            });
            var l = r(72011),
                s = r(3417),
                n = r(73787),
                a = r(65547);
            let i = (0, a.createServerReference)("781b259d4e80c3d2558a4ef3b0db756a990335f295", a.callServer, void 0, a.findSourceMapURL, "reportStatsProjectIncr"),
                o = (0, a.createServerReference)("4060f9c6da13493fa066f28426358e2672f311cde8", a.callServer, void 0, a.findSourceMapURL, "viewProject");
            var c = r(95869),
                d = r(86881),
                u = r(11569),
                m = r(30467),
                x = r(22375),
                p = r(89498),
                h = r(53130),
                f = r(94749),
                g = r(45661),
                j = r(41821),
                v = r(66360);

            function b(e) {
                var t, r, s, a, i, o, c;
                let {
                    skeleton: d,
                    project: u,
                    layout: m,
                    handleClick: x,
                    index: f,
                    onExposure: g
                } = e, [b, w] = (0, n.useState)(!1), y = (0, n.useRef)(null);
                return ((0, n.useEffect)(() => {
                    let e = new IntersectionObserver(t => {
                        t[0].isIntersecting && !b && (g && (null == u ? void 0 : u.project_id) && g(u.project_id, f), w(!0), e.disconnect())
                    });
                    return y.current && e.observe(y.current), () => e.disconnect()
                }, [null == u ? void 0 : u.project_id, f, b, g]), d || !u) ? (0, l.jsx)(() => (0, l.jsxs)("div", {
                    ref: y,
                    className: (0, p.cn)("group flex cursor-pointer flex-row gap-3", "grid" === m && "flex-col gap-2", "mobile" === m && "flex-row px-5"),
                    children: [(0, l.jsx)("div", {
                        className: (0, p.cn)("aspect-video h-[100px] flex-shrink-0 animate-pulse overflow-hidden rounded-[12px] bg-black/5", "grid" === m && "aspect-video h-auto")
                    }), (0, l.jsxs)("div", {
                        className: "flex flex-col justify-between gap-2 py-1",
                        children: [(0, l.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [(0, l.jsx)("div", {
                                className: "h-4 animate-pulse rounded bg-black/5"
                            }), (0, l.jsx)("div", {
                                className: "h-3 w-2/3 animate-pulse rounded bg-black/5"
                            }), (0, l.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, l.jsx)("div", {
                                    className: "h-[14px] w-[14px] animate-pulse rounded-full bg-black/5"
                                }), (0, l.jsx)("div", {
                                    className: "h-3 w-16 animate-pulse rounded bg-black/5"
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center gap-1",
                                children: [(0, l.jsx)("div", {
                                    className: "h-3 w-3 animate-pulse rounded bg-black/5"
                                }), (0, l.jsx)("div", {
                                    className: "h-3 w-8 animate-pulse rounded bg-black/5"
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex items-center gap-1",
                                children: [(0, l.jsx)("div", {
                                    className: "h-3 w-3 animate-pulse rounded bg-black/5"
                                }), (0, l.jsx)("div", {
                                    className: "h-3 w-6 animate-pulse rounded bg-black/5"
                                })]
                            })]
                        })]
                    })]
                }), {}) : (0, l.jsxs)("div", {
                    ref: y,
                    className: (0, p.cn)("group flex cursor-pointer flex-row gap-3", "grid" === m && "flex-col gap-2", "mobile" === m && "flex-row px-5"),
                    onClick: () => u && x(u),
                    children: [(0, l.jsx)("div", {
                        className: (0, p.cn)("aspect-video h-[100px] flex-shrink-0 overflow-hidden rounded-[12px] bg-black/5", "grid" === m && "aspect-video h-auto"),
                        children: (0, l.jsx)(j.A, {
                            url: null != (i = null != (a = null == u ? void 0 : u.custom_cover_url) ? a : null == u ? void 0 : u.cover_url) ? i : "",
                            alt: " ",
                            className: "aspect-video h-full w-full rounded-[12px] border border-black/3 object-cover transition-transform duration-300 group-hover:scale-105"
                        })
                    }), (0, l.jsxs)("div", {
                        className: "flex flex-col justify-between gap-2 py-1",
                        children: [(0, l.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [(0, l.jsx)("h3", {
                                className: "line-clamp-2 text-[14px] font-normal [word-break:break-word] text-black/95",
                                children: null != (c = null != (o = null == u ? void 0 : u.custom_title) ? o : null == u ? void 0 : u.title) ? c : "".concat(null == u || null == (t = u.user) ? void 0 : t.display_name, "'s project")
                            }), (0, l.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, l.jsx)("img", {
                                    src: (null == u || null == (r = u.user) ? void 0 : r.photo_url) || "/images/avatar.svg",
                                    alt: " ",
                                    className: "h-[14px] w-[14px] rounded-full bg-black/5"
                                }), (0, l.jsx)("span", {
                                    className: "text-[12px] text-black/45",
                                    children: (null == u || null == (s = u.user) ? void 0 : s.display_name) || ""
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex items-center gap-3 text-[12px] text-black/45",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center gap-1",
                                children: [(0, l.jsx)(h.tLq, {
                                    className: "h-3 w-3 text-black/45"
                                }), (0, l.jsx)("span", {
                                    children: (0, v.Z)((null == u ? void 0 : u.view_count) || 0)
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex items-center gap-1",
                                children: [(0, l.jsx)(h.Z0O, {
                                    className: "h-3 w-3 text-black/45"
                                }), (0, l.jsx)("span", {
                                    children: (0, v.Z)((null == u ? void 0 : u.comment_count) || 0)
                                })]
                            })]
                        })]
                    })]
                }, (null == u ? void 0 : u.project_id) || f)
            }

            function w(e) {
                var t;
                let {
                    blogList: r,
                    layout: a = "sidebar"
                } = e, i = (0, s.useRouter)(), {
                    track: o
                } = (0, d.s)(), c = (0, n.useRef)(null), u = (0, n.useRef)(null), {
                    handleExposure: m
                } = (0, g.v)({
                    scene: "project_detail"
                }), x = (0, n.useRef)(!1), [j, v] = (0, n.useState)([]), [w, y] = (0, n.useState)(!1), [_, N] = (0, n.useState)(!1), [k, C] = (0, n.useState)(null), [S, E] = (0, n.useState)(0), [R, A] = (0, n.useState)(!0), [I, M] = (0, n.useState)((null == r || null == (t = r[0]) ? void 0 : t.category) || "unknown"), T = (0, n.useCallback)(async function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!r || 0 === r.length) return;
                    let t = e ? 0 : S,
                        l = Math.min(t + ("grid" === a ? 6 : 20), r.length);
                    if (t >= r.length) return void A(!1);
                    let s = r.slice(t, l).map(e => e.projectId);
                    try {
                        e ? y(!0) : N(!0);
                        let n = await (0, f.h)({
                            project_ids: s
                        });
                        if (0 === n.code && n.data) {
                            let s = n.data.projects || [],
                                a = r.slice(t, l).map(e => s.find(t => t.project_id === e.projectId)).filter(Boolean);
                            e ? v(a) : v(e => [...e, ...a]), E(l), A(l < r.length), C(null)
                        } else C(n.message || "Failed to load blog projects")
                    } catch (e) {
                        C("An error occurred while fetching blog projects")
                    } finally {
                        y(!1), N(!1)
                    }
                }, [r, S, a]);
                (0, n.useEffect)(() => {
                    x.current || (T(!0), x.current = !0)
                }, [T]);
                let L = (0, n.useCallback)(() => {
                    T(!1)
                }, [T]);
                (0, n.useEffect)(() => (c.current && c.current.disconnect(), c.current = new IntersectionObserver(e => {
                    let [t] = e;
                    !t.isIntersecting || !R || w || _ || k || L()
                }, {
                    rootMargin: "0px 0px 200px 0px",
                    threshold: .1
                }), u.current && c.current.observe(u.current), () => {
                    c.current && c.current.disconnect()
                }), [R, w, _, k, L]);
                let P = (0, n.useCallback)((e, t) => {
                    let r = j.find(t => t.project_id === e);
                    r && o("blog_project_show", {
                        project_url: r.project_url,
                        project_id: r.project_id,
                        index: t + 1,
                        tab_name: I,
                        location: "feed"
                    }), m(e)
                }, [j, o, m, I]);
                return (0, l.jsx)("div", {
                    className: (0, p.cn)("flex flex-shrink-0 flex-col gap-2", "sidebar" === a && "w-[360px] xl:w-[360px] 2xl:w-[480px]", "grid" === a && "w-full", "mobile" === a && "h-full w-full"),
                    children: (0, l.jsxs)("div", {
                        className: (0, p.cn)("thin-scrollbar h-full w-full overflow-y-scroll pr-5", "grid" === a && "pr-0", "mobile" === a && "pt-0 pr-0"),
                        children: [(0, l.jsx)("div", {
                            className: (0, p.cn)("px-2 pt-3 pb-2 text-[16px] font-bold text-black/95", "grid" === a && "mt-5", "mobile" === a && "px-6 pt-5"),
                            children: "Discover"
                        }), (0, l.jsx)("div", {
                            className: (0, p.cn)("grid" === a ? "xmd:grid-cols-3 grid grid-cols-2 gap-5 pt-2" : "flex flex-col gap-5"),
                            children: j.map((e, t) => (0, l.jsx)(b, {
                                project: e,
                                layout: a,
                                handleClick: e => {
                                    o("blog_project_click", {
                                        project_url: e.project_url,
                                        project_id: e.project_id,
                                        index: t + 1,
                                        tab_name: I,
                                        location: "feed"
                                    }), i.push(e.project_url + "?enter_from=app_page_featured")
                                },
                                index: t,
                                onExposure: P
                            }, e.project_id))
                        }), R && ("grid" === a ? w ? null : (0, l.jsx)("div", {
                            className: "mt-5 flex h-8 w-full items-center justify-center",
                            children: (0, l.jsx)("div", {
                                className: "flex h-full w-[160px] cursor-pointer items-center justify-center rounded-[10px] bg-black/6 text-center text-[14px] text-black/95 hover:bg-black/12",
                                onClick: L,
                                children: _ ? (0, l.jsx)("div", {
                                    className: "flex items-center justify-center",
                                    children: (0, l.jsx)(h.xNY, {
                                        className: "h-5 w-5 animate-spin text-black/30"
                                    })
                                }) : (0, l.jsx)("div", {
                                    children: "Show More"
                                })
                            })
                        }) : (0, l.jsxs)("div", {
                            className: "mb-5",
                            children: [(0, l.jsx)("div", {
                                ref: u,
                                className: "h-6 w-full"
                            }), _ && (0, l.jsx)("div", {
                                className: "flex items-center justify-center",
                                children: (0, l.jsx)(h.xNY, {
                                    className: "h-5 w-5 animate-spin text-black/30"
                                })
                            })]
                        })), w && (0, l.jsx)("div", {
                            className: "flex items-center justify-center py-2",
                            children: (0, l.jsx)(h.xNY, {
                                className: "h-6 w-6 animate-spin text-black/30"
                            })
                        }), k && (0, l.jsx)("div", {
                            className: "py-4 text-center text-[14px] text-red-500",
                            children: k
                        }), (0 === j.length || !R) && !w && !k && (0, l.jsx)("div", {
                            className: "py-8 text-center text-[14px] text-black/45",
                            children: "No more"
                        })]
                    })
                })
            }
            var y = r(64342),
                _ = r(5392);
            let N = (0, a.createServerReference)("60614e7c91561020c4b8dce5563e09aa3936489fd2", a.callServer, void 0, a.findSourceMapURL, "getRelatedProjects"),
                k = {
                    projects: [],
                    loading: !1,
                    loadingMore: !1,
                    hasMore: !1,
                    nextCursor: void 0,
                    error: void 0,
                    currentProjectId: void 0
                },
                C = (0, _.v)((e, t) => ({ ...k,
                    actions: {
                        fetchProjects: async (r, l) => {
                            let s = t(),
                                {
                                    projectId: n,
                                    isInitialFetch: a,
                                    pageSize: i
                                } = r;
                            if (s.currentProjectId !== n || !(s.projects.length > 0) || !a) {
                                s.currentProjectId !== n ? e({ ...k,
                                    currentProjectId: n,
                                    loading: !0
                                }) : e({
                                    loading: a,
                                    loadingMore: !a,
                                    error: void 0
                                });
                                try {
                                    let t = await N({
                                        project_id: n,
                                        page_size: i || 20,
                                        cursor: a ? void 0 : s.nextCursor
                                    }, l);
                                    if (0 === t.code && t.data) {
                                        let r = (t.data.projects || []).filter(e => e.project_id !== n);
                                        e(e => {
                                            var l, s;
                                            return {
                                                projects: a ? r : [...e.projects, ...r.filter(t => !e.projects.some(e => e.project_id === t.project_id))],
                                                hasMore: (null == (l = t.data) ? void 0 : l.page_info.has_more) || !1,
                                                nextCursor: null == (s = t.data) ? void 0 : s.page_info.next_cursor,
                                                loading: !1,
                                                loadingMore: !1,
                                                error: void 0
                                            }
                                        })
                                    } else e({
                                        loading: !1,
                                        loadingMore: !1,
                                        error: t.message
                                    })
                                } catch (t) {
                                    e({
                                        loading: !1,
                                        loadingMore: !1,
                                        error: "Failed to load projects"
                                    }), console.error("Project fetch error:", t)
                                }
                            }
                        },
                        loadMore: async (e, r) => {
                            let l = t();
                            l.loading || l.loadingMore || !l.hasMore || await t().actions.fetchProjects({
                                projectId: e,
                                isInitialFetch: !1
                            }, r)
                        },
                        reset: () => {
                            e(k)
                        },
                        dispose: () => {
                            e(k)
                        }
                    }
                }));

            function S(e) {
                let {
                    projectId: t,
                    layout: r = "sidebar",
                    onProjectClick: a
                } = e, i = (0, s.useRouter)(), {
                    track: o
                } = (0, d.s)(), c = (0, s.useSearchParams)(), u = (0, n.useRef)(null), x = (0, n.useRef)(null), {
                    handleExposure: f
                } = (0, g.v)({
                    scene: "project_detail"
                }), j = (0, n.useRef)(!1), {
                    projects: v,
                    loading: w,
                    loadingMore: _,
                    hasMore: N,
                    error: k,
                    actions: S
                } = C();
                (0, n.useEffect)(() => {
                    j.current || (S.fetchProjects({
                        projectId: t,
                        isInitialFetch: !0,
                        pageSize: "grid" === r ? 6 : 20
                    }, Object.fromEntries(c.entries())), j.current = !0)
                }, [t]);
                let E = (0, n.useCallback)(() => {
                    S.loadMore(t, Object.fromEntries(c.entries()))
                }, [t, S, c]);
                (0, n.useEffect)(() => (u.current && u.current.disconnect(), u.current = new IntersectionObserver(e => {
                    let [t] = e;
                    !t.isIntersecting || !N || w || _ || k || E()
                }, {
                    rootMargin: "0px 0px 200px 0px",
                    threshold: .1
                }), x.current && u.current.observe(x.current), () => {
                    u.current && u.current.disconnect()
                }), [N, w, _, k, S]);
                let R = (0, n.useCallback)((e, t) => {
                    let r = v.find(t => t.project_id === e);
                    r && o("app_page_featured_project_show", { ...(0, m.PO)(r),
                        index: t + 1,
                        project_views: r.view_count || 0,
                        project_comments: r.comment_count || 0,
                        enter_from: (0, y.qn)("enter_from")
                    }), f(e)
                }, [v, o, f]);
                return (0, l.jsx)("div", {
                    className: (0, p.cn)("flex flex-shrink-0 flex-col gap-2", "sidebar" === r && "w-[360px] xl:w-[360px] 2xl:w-[480px]", "grid" === r && "w-full", "mobile" === r && "h-full w-full"),
                    children: (0, l.jsxs)("div", {
                        className: (0, p.cn)("thin-scrollbar h-full w-full overflow-y-scroll pr-5", "grid" === r && "pr-0", "mobile" === r && "pt-0 pr-0"),
                        children: [(0, l.jsx)("div", {
                            className: (0, p.cn)("px-2 pt-3 pb-2 text-[16px] font-bold text-black/95", "grid" === r && "mt-5", "mobile" === r && "px-6 pt-5"),
                            children: "Discover"
                        }), (0, l.jsxs)("div", {
                            className: (0, p.cn)("grid" === r ? "xmd:grid-cols-3 grid grid-cols-2 gap-5 pt-2" : "flex flex-col gap-5"),
                            children: [0 === v.length && Array.from({
                                length: 6
                            }).map((e, t) => (0, l.jsx)(b, {
                                skeleton: !0,
                                layout: r,
                                handleClick: () => {},
                                index: t
                            }, t)), v.map((e, t) => (0, l.jsx)(b, {
                                project: e,
                                layout: r,
                                handleClick: e => {
                                    o("app_page_featured_project_click", { ...(0, m.PO)(e),
                                        index: t + 1,
                                        project_views: e.view_count || 0,
                                        project_comments: e.comment_count || 0,
                                        enter_from: c.get("enter_from") || ""
                                    }), a ? a(e) : i.push(e.project_url + "?enter_from=app_page_featured")
                                },
                                index: t,
                                onExposure: R
                            }, e.project_id))]
                        }), "grid" === r ? (0, l.jsx)("div", {
                            className: "mt-5 flex h-8 w-full items-center justify-center",
                            children: (0, l.jsx)("div", {
                                className: "flex h-full w-[160px] cursor-pointer items-center justify-center rounded-[10px] bg-black/6 text-center text-[14px] text-black/95 hover:bg-black/12",
                                onClick: E,
                                children: _ ? (0, l.jsx)("div", {
                                    className: "flex items-center justify-center",
                                    children: (0, l.jsx)(h.xNY, {
                                        className: "h-5 w-5 animate-spin text-black/30"
                                    })
                                }) : (0, l.jsx)("div", {
                                    children: "Show More"
                                })
                            })
                        }) : (0, l.jsxs)("div", {
                            className: "mb-5",
                            children: [(0, l.jsx)("div", {
                                ref: x,
                                className: "h-6 w-full"
                            }), _ && (0, l.jsx)("div", {
                                className: "flex items-center justify-center",
                                children: (0, l.jsx)(h.xNY, {
                                    className: "h-5 w-5 animate-spin text-black/30"
                                })
                            })]
                        }), w && (0, l.jsx)("div", {
                            className: "flex items-center justify-center py-2",
                            children: (0, l.jsx)(h.xNY, {
                                className: "h-6 w-6 animate-spin text-black/30"
                            })
                        }), k && (0, l.jsx)("div", {
                            className: "py-4 text-center text-[14px] text-red-500",
                            children: k
                        }), (0 === v.length || !N) && !w && !k && (0, l.jsx)("div", {
                            className: "py-8 text-center text-[14px] text-black/45",
                            children: "No more"
                        })]
                    })
                })
            }
            var E = r(87070);

            function R(e) {
                let {
                    project: t,
                    projectUrl: r,
                    className: s,
                    isFullScreen: a,
                    hideFullScreenButton: i = !1,
                    onFullScreen: o
                } = e, c = (0, n.useRef)(null), {
                    track: u
                } = (0, d.s)();
                return (0, n.useEffect)(() => {
                    let e = e => {
                        "Escape" === e.key && a && (null == o || o(!1))
                    };
                    return window.addEventListener("keydown", e), () => {
                        window.removeEventListener("keydown", e)
                    }
                }, [a, o]), (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)("div", {
                        className: (0, p.cn)("relative flex aspect-video w-full flex-shrink-0 overflow-hidden rounded-[16px] border border-black/6", a && "fixed inset-0 z-60 aspect-auto w-auto rounded-none border-none bg-white", s),
                        children: [(0, l.jsx)(E.A, {
                            project: t,
                            ref: c,
                            src: r || void 0,
                            mode: "consumer",
                            className: "flex-1 overflow-hidden transition-all duration-300 ".concat(a ? "!m-0 !rounded-none !border-none" : ""),
                            style: {
                                overscrollBehavior: "none"
                            },
                            loading: "eager",
                            seamless: !0
                        }), !i && a && (0, l.jsx)("button", {
                            onClick: () => {
                                a || u("app_page_full_screen_click", {
                                    project_id: t.project_id,
                                    project_url: t.project_url
                                }), null == o || o(!a)
                            },
                            className: "absolute right-4 bottom-4 z-[60] translate-y-0 cursor-pointer rounded-[10px] border border-black/12 bg-white p-2 opacity-100 transition-all duration-300 hover:bg-gray-100",
                            children: (0, l.jsx)(h.a3o, {
                                className: "h-4 w-4"
                            })
                        })]
                    })
                })
            }
            var A = r(54736),
                I = r(7119),
                M = r(36044),
                T = r(80992),
                L = r(27042),
                P = r(28151);
            let F = (0, a.createServerReference)("402dc2db9191d42688d5201ddf812cb1f17b4f1e50", a.callServer, void 0, a.findSourceMapURL, "getReportReasonsAction"),
                D = (0, a.createServerReference)("406ccb1a0c5d72a2b6c929fd12197061d65a544589", a.callServer, void 0, a.findSourceMapURL, "postReportAction");
            var O = r(37600);
            let z = {
                    project: "Why are you reporting this project?"
                },
                B = e => {
                    let {
                        contentId: t,
                        subjectType: r,
                        onClose: s,
                        trackExtra: a
                    } = e, [i, o] = (0, n.useState)([]), [c, u] = (0, n.useState)(null), [m, x] = (0, n.useState)(""), [f, g] = (0, n.useState)(!1), [j, v] = (0, n.useState)(!0), {
                        track: b
                    } = (0, d.s)();
                    (0, n.useEffect)(() => {
                        (async () => {
                            v(!0);
                            let e = await F({
                                entity_type: r
                            });
                            0 === e.code && e.data ? o(e.data.reasons) : (0, O.P)({
                                message: "Get report reasons failed, please try again later",
                                type: "error"
                            }), v(!1)
                        })()
                    }, []);
                    let w = async e => {
                            let {
                                reason: l,
                                details: n
                            } = e;
                            b("report_submit_click", { ...a,
                                report_reason: (null == c ? void 0 : c.reason) === "other" ? m : l
                            }), g(!0);
                            let i = await D({
                                entity_type: r,
                                entity_id: t,
                                reason: l,
                                details: n
                            });
                            g(!1), 0 === i.code && i.data ? (s(), (0, O.P)({
                                message: "Thanks for reporting. We’ll review this as soon as possible.",
                                type: "success"
                            })) : (0, O.P)({
                                message: "Report failed, please try again later",
                                type: "error"
                            })
                        },
                        y = !j && !f && c;
                    return (0, l.jsx)("div", {
                        className: "fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/20",
                        onClick: e => {
                            f || e.target === e.currentTarget && s()
                        },
                        children: (0, l.jsxs)("div", {
                            className: "flex w-[512px] max-w-[calc(100vw-32px)] flex-col gap-3 rounded-[16px] bg-white p-6 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.10),0px_16px_32px_-1px_rgba(12,12,13,0.1)]",
                            children: [(0, l.jsx)("h3", {
                                className: "text-[20px] font-bold",
                                children: z[r]
                            }), (0, l.jsx)("div", {
                                className: "flex w-full flex-col gap-1",
                                children: j ? (0, l.jsx)(l.Fragment, {
                                    children: [void 0, void 0, void 0, void 0].map((e, t) => (0, l.jsxs)("div", {
                                        className: "flex h-8 items-center gap-2",
                                        children: [(0, l.jsx)("div", {
                                            className: "h-4 w-4 animate-pulse rounded-full bg-gray-200"
                                        }), (0, l.jsx)("div", {
                                            className: "h-4 flex-1 animate-pulse rounded bg-gray-200"
                                        })]
                                    }, t))
                                }) : (0, l.jsxs)(l.Fragment, {
                                    children: [i.map(e => (0, l.jsxs)("div", {
                                        className: "flex h-8 cursor-pointer items-center gap-2",
                                        onClick: () => u(e),
                                        children: [(0, l.jsx)("div", {
                                            className: (0, p.cn)("hover:bg-brand/10 flex h-4 w-4 items-center justify-center rounded-full border border-solid border-black/12 p-[1px] transition-colors", (null == c ? void 0 : c.reason) === e.reason && "border-brand"),
                                            children: (0, l.jsx)("div", {
                                                className: (0, p.cn)("h-1.5 w-1.5 rounded-full bg-transparent", (null == c ? void 0 : c.reason) === e.reason && "bg-brand")
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "flex-1 pt-0.5 text-[14px] text-black/95",
                                            children: e.description
                                        })]
                                    }, e.reason)), (null == c ? void 0 : c.reason) === "other" && (0, l.jsx)("input", {
                                        type: "text",
                                        className: "h-8 rounded-[10px] border border-solid border-black/12 px-2 text-[14px] text-black/95 placeholder:text-black/30",
                                        value: m,
                                        onChange: e => x(e.target.value),
                                        placeholder: "Enter reason"
                                    })]
                                })
                            }), (0, l.jsxs)("div", {
                                className: "mt-3 flex items-center justify-end gap-2",
                                children: [(0, l.jsx)("button", {
                                    className: "h-9 w-[75px] cursor-pointer rounded-[10px] border border-solid border-black/12 text-[14px] text-black/95 hover:bg-black/6",
                                    onClick: s,
                                    disabled: f,
                                    children: "Cancel"
                                }), (0, l.jsx)("button", {
                                    className: (0, p.cn)("bg-brand flex h-9 w-[134px] cursor-pointer items-center justify-center rounded-[10px] text-[14px] text-white disabled:opacity-50", y && "hover:bg-brand/85"),
                                    onClick: () => {
                                        c && w({
                                            reason: c.reason,
                                            details: "other" === c.reason ? m : void 0
                                        })
                                    },
                                    disabled: !y,
                                    children: f ? (0, l.jsx)(h.rbo, {
                                        className: "h-4 w-4 animate-spin"
                                    }) : "Submit Report"
                                })]
                            })]
                        })
                    })
                };
            var U = r(85385),
                H = r(33686),
                W = r(58695),
                V = r(67861),
                J = r(11825),
                Y = r(34620),
                q = r(28196),
                Z = r(13683);

            function G(e) {
                var t, r;
                let {
                    project: s,
                    onEmojiClick: a
                } = e, i = (0, n.useMemo)(() => {
                    var e, t;
                    return null != (t = null == (e = s.interaction) ? void 0 : e.count.reduce((e, t) => e + t.count, 0)) ? t : 0
                }, [s.interaction]), {
                    emojis: o
                } = (0, c.k)(), d = (0, n.useMemo)(() => {
                    var e;
                    return 32 * ((null == (e = s.interaction) ? void 0 : e.count.length) || 0) + 16 + 56
                }, [null == (t = s.interaction) ? void 0 : t.count.length]), u = e => {
                    var t, r;
                    return (null == (r = s.interaction) || null == (t = r.status.find(t => t.interaction_type === e)) ? void 0 : t.status) === !0
                };
                return (0, l.jsxs)(L.rI, {
                    triggerType: "hover",
                    children: [(0, l.jsx)(L.ty, {
                        children: (0, l.jsxs)("button", {
                            className: "flex h-8 cursor-pointer items-center justify-center gap-1 rounded-[10px] bg-black/[0.03] px-2 py-2.5 hover:bg-black/6",
                            children: [(0, l.jsx)(Y.default, {
                                src: q.A,
                                alt: "emoji reaction count",
                                className: "h-3.5 w-6"
                            }), (0, l.jsx)("span", {
                                className: "text-sm text-black/95",
                                children: (0, v.Z)(i)
                            })]
                        })
                    }), (0, l.jsx)(L.SQ, {
                        autoPosition: !0,
                        estimatedHeight: d,
                        className: "left-1/2 w-20 -translate-x-1/2 p-1",
                        children: (0, l.jsx)("div", {
                            className: "flex flex-col gap-1",
                            children: null == (r = s.interaction) ? void 0 : r.count.map(e => {
                                let t = o.find(t => t.interaction_type === e.interaction_type);
                                return t ? (0, l.jsxs)("div", {
                                    className: (0, p.cn)("flex h-8 cursor-pointer items-center gap-1 rounded-[8px] px-2 py-1.5 transition-colors", u(e.interaction_type) ? "bg-lime-700/10" : "bg-white/3 hover:bg-black/6"),
                                    onClick: t => {
                                        t.stopPropagation(), t.preventDefault(), null == a || a(e.interaction_type)
                                    },
                                    children: [(0, l.jsx)(Z.m, {
                                        emoji: t,
                                        className: "h-5 w-5 flex-shrink-0",
                                        width: 20,
                                        height: 20,
                                        triggerType: Z.Z.Click,
                                        selected: u(e.interaction_type)
                                    }), (0, l.jsx)("span", {
                                        className: "text-sm font-normal text-black/95",
                                        children: (0, v.Z)(e.count)
                                    })]
                                }, e.interaction_type) : null
                            })
                        })
                    })]
                })
            }
            var X = r(91636),
                Q = r.n(X),
                K = r(68678);
            let $ = e => {
                var t, r;
                let {
                    project: s
                } = e, [a, i] = (0, n.useState)((null == (t = s.community_info) ? void 0 : t.is_favorited) || !1), [o, c] = (0, n.useState)((null == (r = s.community_info) ? void 0 : r.favorite_count) || 0), [u, x] = (0, n.useState)(!1), p = (0, n.useRef)(null), {
                    userId: f
                } = (0, H.J)(), {
                    checkAuth: g
                } = (0, W.M)(), {
                    track: j
                } = (0, d.s)();
                (0, n.useEffect)(() => () => {
                    p.current && clearTimeout(p.current)
                }, []), (0, n.useEffect)(() => {
                    if (!u) return;
                    let e = () => {
                            setTimeout(() => {
                                let e = document.activeElement;
                                e && "IFRAME" === e.tagName && (x(!1), p.current && (clearTimeout(p.current), p.current = null))
                            }, 100)
                        },
                        t = () => {
                            x(!1), p.current && (clearTimeout(p.current), p.current = null)
                        };
                    window.addEventListener("blur", e);
                    let r = document.querySelectorAll("iframe");
                    return r.forEach(e => {
                        e.addEventListener("focus", t)
                    }), () => {
                        window.removeEventListener("blur", e), r.forEach(e => {
                            e.removeEventListener("focus", t)
                        })
                    }
                }, [u]);
                let b = (0, n.useCallback)(e => {
                        x(e), !e && p.current && (clearTimeout(p.current), p.current = null)
                    }, []),
                    w = (0, n.useCallback)(async () => {
                        let e = !a,
                            t = e ? o + 1 : o - 1;
                        return j("app_page_save_button_click", {
                            action: a ? "false" : "true",
                            ...(0, m.PO)(s),
                            location: "app_page",
                            count: t,
                            status: f ? "success" : "need_login",
                            enter_from: (0, y.qn)("enter_from")
                        }), g(async () => {
                            i(e), c(t < 0 ? 0 : t);
                            let r = a ? "cancel" : "add";
                            "add" === r && f && (x(!0), p.current && clearTimeout(p.current), p.current = setTimeout(() => {
                                x(!1), p.current = null
                            }, 4e3));
                            try {
                                var l;
                                (null == (l = (await (0, K.s)(s.project_id, r)).data) ? void 0 : l.status) && f && "add" === r && (e => {
                                    try {
                                        let t = (() => {
                                            try {
                                                let e = localStorage.getItem(U.Hx);
                                                return e ? JSON.parse(e) : []
                                            } catch (e) {
                                                return []
                                            }
                                        })();
                                        t.includes(e) || (t.push(e), localStorage.setItem(U.Hx, JSON.stringify(t)))
                                    } catch (e) {}
                                })(f)
                            } catch (t) {
                                console.error("Failed to favorite project:", t), i(a), c(o), x(!1), p.current && (clearTimeout(p.current), p.current = null), (0, O.P)({
                                    message: e ? "Couldn't save project. Please check your network and try again." : "Couldn't unsave project. Please check your network and try again.",
                                    type: "error"
                                })
                            }
                        }, {
                            title: "Want to save this project?",
                            description: "Log in to save it and come back anytime.",
                            cancelText: "Cancel",
                            confirmText: "Log in"
                        })()
                    }, [f, a, o, s.project_id, s.project_url, j]);
                return (0, l.jsxs)(A.AM, {
                    open: u,
                    onOpenChange: b,
                    children: [(0, l.jsx)(A.Wv, {
                        asChild: !0,
                        children: (0, l.jsxs)(A.$n, {
                            tooltip: a ? "Saved" : "Save",
                            tooltipSide: "top",
                            className: "flex h-8 cursor-pointer items-center justify-center gap-1 rounded-[10px] bg-black/3 px-2 hover:bg-black/6",
                            onClick: e => {
                                e.stopPropagation(), e.preventDefault(), w()
                            },
                            children: [a ? (0, l.jsx)(h.H9m, {
                                className: "h-[14px] w-[14px]",
                                style: {
                                    color: "rgba(255, 201, 55, 0.95)"
                                }
                            }) : (0, l.jsx)(h.YSf, {
                                className: "h-[14px] w-[14px] text-black/95"
                            }), (0, l.jsx)("span", {
                                className: "text-sm font-normal text-black/95",
                                children: (0, v.Z)(o)
                            })]
                        })
                    }), (0, l.jsx)(A.hl, {
                        className: "w-auto translate-x-[-40px] rounded-[10px] p-0 shadow-[0px_16px_48px_1px_rgba(12,12,13,0.1)]",
                        side: "top",
                        align: "center",
                        sideOffset: 16,
                        children: (0, l.jsxs)("div", {
                            className: "flex items-center justify-center gap-1 rounded-[10px] bg-[#2C2C2C] py-1 pr-1 pl-3",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, l.jsx)("div", {
                                    className: "flex h-4 w-4 items-center justify-center",
                                    children: (0, l.jsx)(h.Jnp, {
                                        className: "h-[14.6px] w-[14.6px] text-[#14AE5C]"
                                    })
                                }), (0, l.jsx)("span", {
                                    className: "text-[14px] font-normal text-white/95",
                                    children: "Saved successfully！"
                                })]
                            }), (0, l.jsx)("div", {
                                className: "h-[10px] w-px bg-white/15"
                            }), (0, l.jsx)(Q(), {
                                href: "/profile/".concat(f, "?tab=saved"),
                                target: "_blank",
                                className: "flex h-8 items-center justify-center rounded-lg px-2 text-[14px] font-bold text-white/95",
                                children: "View list"
                            })]
                        })
                    })]
                })
            };

            function ee(e) {
                var t;
                let {
                    project: r,
                    className: s,
                    hideMore: a = !1,
                    hideRemix: i = !1,
                    handleFullScreen: o,
                    brandRemix: u = !1
                } = e, x = (null == (t = r.user) ? void 0 : t.uid) === U.v1, {
                    interact: f
                } = (0, c.k)(), {
                    remixAction: g,
                    isRemixing: j
                } = (0, V.N)(), {
                    track: b
                } = (0, d.s)(), [w, _] = (0, n.useState)(!1), [N, k] = (0, n.useState)(!1), [C, S] = (0, n.useState)(!1), [E, R] = (0, n.useState)(null), {
                    checkAuth: F
                } = (0, W.M)(), {
                    isLoggedIn: D
                } = (0, H.J)(), z = async () => {
                    if (b("remix_button_click", {
                            origin_project_id: r.project_id,
                            origin_project_url: r.project_url,
                            ...(0, m.bD)(r),
                            ...(0, m.iI)(r),
                            remix_count: r.remix_count,
                            location: "app_page",
                            access_control: r.allow_remix ? "allowed" : "not_allowed",
                            status: r.allow_remix ? D ? "success" : "need_login" : "not_allow",
                            enter_from: (0, y.qn)("enter_from")
                        }), !r.allow_remix) return void(0, J.S)({
                        title: "Not Supported",
                        description: "Building on this project is not allowed",
                        confirmText: "Got it",
                        onConfirm: () => {}
                    });
                    await g(r.project_id, "remix")
                }, Y = async () => F(async () => {
                    b("app_report_button_click", {
                        project_id: r.project_id,
                        project_url: r.project_url
                    }), k(!0)
                }, {
                    title: "Want to report this project?",
                    description: "Please log in to help keep the community safe.",
                    cancelText: "Cancel",
                    confirmText: "Log in"
                })(), q = async () => {
                    let e = async () => {
                        if (r.visibility !== T.wg.PRIVATE || r.passcode || E) _(!0);
                        else {
                            S(!0);
                            let e = await (0, I.v)({
                                project_id: r.project_id
                            });
                            0 === e.code && e.data ? (S(!1), _(!0), R(e.data)) : (S(!1), (0, O.P)({
                                message: "Network error, please try again later",
                                type: "error"
                            }))
                        }
                    };
                    D ? e() : F(e, {
                        title: "Log in to Join the Vibe",
                        description: "Join our community to share your favorite projects and enjoy 500 free credits as a welcome gift.",
                        confirmText: "Log in",
                        cancelText: "Continue Sharing",
                        onCancel: e
                    })()
                };
                return (0, l.jsxs)("div", {
                    className: (0, p.cn)("flex shrink-0 items-center gap-2", s),
                    children: [(0, l.jsx)("div", {
                        className: "flex items-center gap-2",
                        children: (0, l.jsxs)("div", {
                            className: "flex h-8 items-center justify-center gap-1 rounded-[10px]",
                            children: [(0, l.jsx)(h.tLq, {
                                className: "h-[14px] w-[14px] text-black/95"
                            }), (0, l.jsx)("span", {
                                className: "text-sm font-normal text-black/95",
                                children: (0, v.Z)(r.view_count || 0)
                            })]
                        })
                    }), (0, l.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [!x && (0, l.jsx)("div", {
                            className: (0, p.cn)("relative"),
                            children: (0, l.jsx)(G, {
                                project: r,
                                onEmojiClick: e => {
                                    (e => {
                                        var t, l, s, n;
                                        let a = null == (l = r.interaction) || null == (t = l.status.find(t => t.interaction_type === e)) ? void 0 : t.status;
                                        return b("emoji_reaction_click", {
                                            action: a ? "false" : "true",
                                            project_id: r.project_id,
                                            project_url: r.project_url,
                                            emoji: e,
                                            location: "app_page",
                                            status: D ? "success" : "need_login",
                                            count: ((null == (n = r.interaction) || null == (s = n.count.find(t => t.interaction_type === e)) ? void 0 : s.count) || 0) + (a ? -1 : 1),
                                            enter_from: (0, y.qn)("enter_from")
                                        }), F(async () => {
                                            f(r, e, a ? M.f.Cancel : M.f.Add)
                                        }, {
                                            title: "Love this project?",
                                            description: "Log in to leave reactions and show some love.",
                                            cancelText: "Cancel",
                                            confirmText: "Log in"
                                        })()
                                    })(e)
                                }
                            })
                        }), (0, l.jsx)($, {
                            project: r
                        }, r.project_id), !i && (0, l.jsxs)(A.$n, {
                            className: (0, p.cn)("flex h-8 cursor-pointer items-center justify-center gap-1 rounded-[10px] px-2.5 text-[14px] disabled:cursor-not-allowed", u ? "bg-brand hover:bg-brand/90 text-white" : "bg-black/3 text-black/95 hover:bg-black/6"),
                            onClick: z,
                            disabled: j,
                            children: [j ? (0, l.jsx)(h.xNY, {
                                className: "h-[14px] w-[14px] animate-spin"
                            }) : (0, l.jsx)(h.xP3, {
                                className: "h-[14px] w-[14px]"
                            }), u ? (0, l.jsx)("span", {
                                children: "Build on this"
                            }) : null, ((null == r ? void 0 : r.remix_count) || 0) > 0 && (0, l.jsx)("span", {
                                children: (0, v.Z)(r.remix_count || 0)
                            })]
                        }), (0, l.jsx)(A.$n, {
                            className: (0, p.cn)("flex h-8 w-8 cursor-pointer items-center justify-center rounded-[10px] bg-black/[0.03] hover:bg-black/6"),
                            tooltip: "Share",
                            tooltipSide: "top",
                            onClick: e => {
                                q()
                            },
                            disabled: C,
                            children: C ? (0, l.jsx)(h.xNY, {
                                className: "h-[14px] w-[14px] text-black/95"
                            }) : (0, l.jsx)(h.d6X, {
                                className: "h-[14px] w-[14px] text-black/95"
                            })
                        }), !a && (0, l.jsx)("div", {
                            className: (0, p.cn)("relative"),
                            children: (0, l.jsxs)(L.rI, {
                                triggerType: "hover",
                                children: [(0, l.jsx)(L.ty, {
                                    className: "flex h-8 w-8 cursor-pointer items-center justify-center rounded-[10px] bg-black/3 hover:bg-black/6",
                                    children: (0, l.jsx)(h.aWm, {
                                        className: "h-[14px] w-[14px]",
                                        color: "black"
                                    })
                                }), (0, l.jsx)(L.SQ, {
                                    className: "right-0 bottom-10 w-[148px]",
                                    children: (0, l.jsx)(L._2, {
                                        icon: h.qGO,
                                        label: "Report",
                                        onClick: Y
                                    })
                                })]
                            })
                        }), o && (0, l.jsx)("div", {
                            className: "mx-0.5 h-3 w-[1px] bg-black/6"
                        }), o && (0, l.jsx)(A.$n, {
                            className: "flex h-8 cursor-pointer items-center justify-center gap-1 rounded-[10px] bg-black/3 px-2 hover:bg-black/6 disabled:cursor-not-allowed",
                            tooltip: "Full screen",
                            tooltipSide: "top",
                            onClick: () => null == o ? void 0 : o(!0),
                            children: (0, l.jsx)(h.nHt, {
                                className: "h-[14px] w-[14px] text-black/95"
                            })
                        })]
                    }), w && (0, l.jsx)(P.A, {
                        project: E || r,
                        onClose: () => _(!1),
                        location: "app_page"
                    }), N && (0, l.jsx)(B, {
                        contentId: r.project_id,
                        subjectType: "project",
                        onClose: () => k(!1),
                        trackExtra: {
                            project_id: r.project_id,
                            project_url: r.project_url
                        }
                    })]
                })
            }
            let et = (0, a.createServerReference)("40ba6ab5864d95809b2f03694140a53acf5e209da3", a.callServer, void 0, a.findSourceMapURL, "getComments"),
                er = (0, a.createServerReference)("404bf4920a9a60be9be76c49b57718eb56ff5254e2", a.callServer, void 0, a.findSourceMapURL, "deleteComment"),
                el = (0, a.createServerReference)("40f515402df0f50290c8c2f592f7a29883afa4be71", a.callServer, void 0, a.findSourceMapURL, "createComment");
            var es = r(84762);

            function en(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 120,
                    l = e / t;
                return l >= .9 && l <= 1.1 ? {
                    width: r,
                    height: r
                } : l > 1.1 ? {
                    width: Math.round(4 * r / 3),
                    height: r
                } : {
                    width: r,
                    height: Math.round(4 * r / 3)
                }
            }
            let ea = {
                    project: null,
                    initialAnchorCommentId: null,
                    comments: [],
                    initialLoading: !1,
                    loadMoreLoading: !1,
                    hasMore: !1,
                    nextCursor: void 0,
                    sendingComment: !1,
                    replyTo: null,
                    totalCount: 0,
                    currentHighlightedId: "",
                    newlyCreatedComments: [],
                    anchorComment: null,
                    shouldFocusInput: !1,
                    content: "",
                    images: [],
                    charCount: 0,
                    errorMessage: "",
                    MAX_CHAR_COUNT: 5e3
                },
                ei = (0, _.v)((e, t) => ({ ...ea,
                    actions: {
                        init: (r, l) => {
                            e({
                                project: r,
                                initialAnchorCommentId: l,
                                currentHighlightedId: l || ""
                            }), t().actions.fetchComments(!0, r, l)
                        },
                        fetchComments: async function() {
                            var r, l, s;
                            let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                a = arguments.length > 1 ? arguments[1] : void 0,
                                i = arguments.length > 2 ? arguments[2] : void 0,
                                o = (null == a ? void 0 : a.project_id) || (null == (r = t().project) ? void 0 : r.project_id);
                            if (!o) return;
                            let c = i || t().initialAnchorCommentId;
                            n || 0 === t().comments.length ? e({
                                initialLoading: !0
                            }) : e({
                                loadMoreLoading: !0
                            });
                            try {
                                let r = await et({
                                    project_id: o,
                                    order: "asc",
                                    cursor: n ? "" : t().nextCursor || "",
                                    page_size: 15,
                                    anchor_comment_id: c || void 0
                                });
                                if (0 === r.code && r.data) {
                                    let a = r.data.comments || [],
                                        i = (e => {
                                            let t = new Set;
                                            return e.filter(e => !t.has(e.uuid) && (t.add(e.uuid), !0))
                                        })(n ? a : [...t().comments, ...a]);
                                    e({
                                        comments: i
                                    }), e({
                                        totalCount: r.data.total || 0,
                                        anchorComment: r.data.anchor_comment || null,
                                        hasMore: (null == (l = r.data.page_info) ? void 0 : l.has_more) || !1,
                                        nextCursor: null == (s = r.data.page_info) ? void 0 : s.cursor
                                    })
                                }
                            } catch (e) {
                                console.error("Failed to fetch comments:", e)
                            } finally {
                                e({
                                    initialLoading: !1,
                                    loadMoreLoading: !1
                                })
                            }
                        },
                        resetCommentInput: () => e({
                            content: "",
                            replyTo: null,
                            shouldFocusInput: !1,
                            images: [],
                            charCount: 0,
                            errorMessage: ""
                        }),
                        setReplyTo: t => e({
                            replyTo: t
                        }),
                        cancelReply: () => e({
                            replyTo: null
                        }),
                        setShouldFocusInput: t => e({
                            shouldFocusInput: t
                        }),
                        deleteComment: async r => {
                            var l;
                            let s = null == (l = t().project) ? void 0 : l.project_id;
                            s && 0 === (await er({
                                project_id: s,
                                comment_id: r.uuid
                            })).code && (e(e => ({
                                comments: e.comments.filter(e => e.uuid !== r.uuid),
                                newlyCreatedComments: e.newlyCreatedComments.filter(e => e.uuid !== r.uuid),
                                anchorComment: r.uuid === e.initialAnchorCommentId ? null : e.anchorComment,
                                totalCount: Math.max(e.totalCount - 1, 0)
                            })), r.uuid === t().initialAnchorCommentId && e({
                                anchorComment: null
                            }))
                        },
                        createComment: async () => {
                            var r, l;
                            let s = null == (r = t().project) ? void 0 : r.project_id;
                            if (!s) return;
                            let n = t().content,
                                a = t().images;
                            if (n.trim() || 0 !== a.length) {
                                e({
                                    sendingComment: !0
                                });
                                try {
                                    let r = await el({
                                        project_id: s,
                                        comment_text: n,
                                        reply_comment_id: (null == (l = t().replyTo) ? void 0 : l.uuid) || void 0,
                                        image_file_list: t().images.map(e => ({
                                            id: e.s3_key,
                                            width: e.width,
                                            height: e.height
                                        }))
                                    });
                                    if (0 === r.code && r.data) {
                                        let l = r.data,
                                            s = Math.max(t().totalCount + 1, 0);
                                        e(e => ({
                                            newlyCreatedComments: [l, ...e.newlyCreatedComments],
                                            totalCount: s,
                                            replyTo: null
                                        }))
                                    } else throw Error(r.message || "Failed to create comment")
                                } finally {
                                    e({
                                        sendingComment: !1
                                    })
                                }
                            }
                        },
                        setCommentContent: r => {
                            let l = t().actions.calculateCharCount(r),
                                s = t().MAX_CHAR_COUNT;
                            l <= s ? e({
                                content: r,
                                charCount: l,
                                errorMessage: ""
                            }) : e({
                                errorMessage: "Character limit exceeded. Maximum ".concat(s, " characters allowed.")
                            })
                        },
                        uploadImage: async r => {
                            if (!t().images.some(e => "uploading" === e.status)) try {
                                let {
                                    width: t,
                                    height: l
                                } = await new Promise((e, t) => {
                                    let l = new Image,
                                        s = URL.createObjectURL(r);
                                    l.onload = () => {
                                        let {
                                            naturalWidth: t,
                                            naturalHeight: r
                                        } = l;
                                        URL.revokeObjectURL(s), e({
                                            width: t,
                                            height: r
                                        })
                                    }, l.onerror = () => {
                                        URL.revokeObjectURL(s), t(Error("Failed to load image"))
                                    }, l.src = s
                                });
                                e(e => ({
                                    images: [...e.images, {
                                        status: "uploading",
                                        s3_uri: "",
                                        s3_key: "loading",
                                        width: t,
                                        height: l
                                    }]
                                }));
                                let s = await (0, es.Q)(r, {
                                    eventType: "image",
                                    isPublic: !0,
                                    needUrl: !0
                                });
                                e(e => ({
                                    images: e.images.map(e => "loading" === e.s3_key ? { ...e,
                                        status: "ready",
                                        s3_uri: s.file_url || "",
                                        s3_key: s.file_id
                                    } : e)
                                }))
                            } catch (t) {
                                console.error("Error uploading image:", t), e(e => ({
                                    images: e.images.filter(e => "loading" !== e.s3_key)
                                }))
                            }
                        },
                        deleteImage: t => {
                            e(e => ({
                                images: e.images.filter(e => e.s3_key !== t.s3_key)
                            }))
                        },
                        setCurrentHighlightedId: t => e({
                            currentHighlightedId: t
                        }),
                        calculateCharCount: e => {
                            let t = 0;
                            for (let r = 0; r < e.length; r++) {
                                let l = e.charCodeAt(r);
                                l >= 19968 && l <= 40959 || l >= 12352 && l <= 12447 || l >= 12448 && l <= 12543 || l >= 44032 && l <= 55215 || l >= 126976 && l <= 129535 ? t += 2 : t += 1
                            }
                            return t
                        },
                        dispose: () => {
                            e({ ...ea
                            })
                        }
                    }
                }));

            function eo(e) {
                let {
                    className: t,
                    noArrow: r
                } = e, {
                    totalCount: s
                } = ei();
                return (0, l.jsxs)("h3", {
                    className: (0, p.cn)("bg-body sticky top-0 z-10 mt-5 flex flex-row items-center justify-start gap-1.5 p-3 text-[16px] font-bold text-black/95", t),
                    children: [(0, l.jsx)("span", {
                        children: 1 === s ? "1 Comment" : "".concat(s, " Comments")
                    }), s > 0 && !r && (0, l.jsx)(h.vuo, {
                        className: "h-4 w-4 animate-bounce"
                    })]
                })
            }
            var ec = r(92394),
                ed = r(71246),
                eu = r(45050);

            function em(e) {
                let {
                    src: t,
                    alt: r = "",
                    isOpen: s,
                    onClose: a
                } = e;
                if ((0, n.useEffect)(() => {
                        let e = e => {
                            "Escape" === e.key && a()
                        };
                        return s ? (document.addEventListener("keydown", e), document.body.style.overflow = "hidden") : document.body.style.overflow = "unset", () => {
                            document.removeEventListener("keydown", e), document.body.style.overflow = "unset"
                        }
                    }, [s, a]), !s) return null;
                let i = (0, l.jsxs)("div", {
                    className: "fixed inset-0 z-[9999] flex items-center justify-center p-4",
                    style: {
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        backdropFilter: "blur(30px)"
                    },
                    onClick: a,
                    children: [(0, l.jsx)("div", {
                        className: "relative max-h-[90vh] max-w-[90vw] overflow-hidden",
                        onClick: e => e.stopPropagation(),
                        children: (0, l.jsx)("img", {
                            src: t,
                            alt: r,
                            className: "h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain",
                            onClick: a,
                            draggable: !1
                        })
                    }), (0, l.jsx)("div", {
                        className: "absolute top-6 right-12 z-10 flex h-8 w-8 cursor-pointer items-center justify-center overflow-visible rounded-[10px] bg-black/30",
                        onClick: a,
                        children: (0, l.jsx)(h.Qks, {
                            className: "h-4 w-4 text-white"
                        })
                    })]
                });
                return (0, eu.createPortal)(i, document.body)
            }
            let ex = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.floor(Date.now() / 1e3),
                    r = t - e;
                return r < 60 ? "".concat(r, "s ago") : r < 3600 ? "".concat(Math.floor(r / 60), "m ago") : r < 86400 ? "".concat(Math.floor(r / 3600), "h ago") : "".concat(Math.floor(r / 86400), "d ago")
            };

            function ep(e) {
                var t;
                let {
                    comment: r,
                    currentUserId: s,
                    projectAuthorId: a,
                    onReply: i,
                    onDelete: o,
                    isHighlighted: c = !1
                } = e, d = r.user.uid === s, u = r.user.uid === a, m = (0, n.useRef)(null), x = (0, n.useRef)(null), [f, g] = (0, n.useState)(!1), [v, b] = (0, n.useState)(""), [w, y] = (0, n.useState)(!1), [_, N] = (0, n.useState)(!1), k = (0, n.useMemo)(() => ex(r.create_time), [r.create_time]), C = () => {
                    if (x.current) {
                        let e = parseInt(window.getComputedStyle(x.current).lineHeight);
                        N(x.current.scrollHeight > 8 * e)
                    }
                };
                return (0, n.useMemo)(() => {
                    setTimeout(C, 0)
                }, [r.comment]), (0, l.jsxs)("div", {
                    ref: m,
                    className: (0, p.cn)("rounded-xl p-2", c && "bg-[#5581340F]"),
                    children: [(0, l.jsxs)("div", {
                        className: "flex items-start gap-3",
                        children: [(0, l.jsxs)("div", {
                            className: "group relative mt-0.5 h-[30px] w-[30px] shrink-0 cursor-pointer rounded-full",
                            onClick: () => window.open("/profile/".concat(r.user.uid), "_blank"),
                            children: [(0, l.jsx)("img", {
                                src: r.user.photo_url || "/images/avatar.svg",
                                alt: "",
                                className: "h-full w-full rounded-full"
                            }), (0, l.jsx)("div", {
                                className: "absolute inset-0 rounded-full bg-black/6 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                            }), (0, l.jsx)(ed.A, {
                                className: "absolute -right-0.5 -bottom-px border-white",
                                userBadge: null == (t = r.user.badge) ? void 0 : t.type,
                                size: "12",
                                tooltipSide: "right"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex flex-1 flex-col",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center justify-start gap-1",
                                children: [(0, l.jsx)("span", {
                                    className: "w-fit cursor-pointer text-xs text-black/65 hover:text-black/95",
                                    onClick: () => window.open("/profile/".concat(r.user.uid), "_blank"),
                                    children: r.user.display_name
                                }), u && (0, l.jsx)("span", {
                                    className: "h-4 rounded-full bg-[#EDEEF0] px-[5px] text-[10px] leading-[16px] font-bold text-[#475569]",
                                    children: "Creator"
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "mt-[2px] text-sm break-words text-black/95",
                                children: [r.reply_user && (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)("span", {
                                        className: "text-black/65",
                                        children: "Reply to "
                                    }), (0, l.jsx)("button", {
                                        className: "cursor-pointer font-bold text-black/95 hover:underline",
                                        onClick: () => window.open("/profile/".concat(r.reply_user.uid), "_blank"),
                                        children: r.reply_user.display_name
                                    }), (0, l.jsx)("span", {
                                        className: "text-black/65",
                                        children: ": "
                                    })]
                                }), (0, l.jsx)("div", {
                                    ref: x,
                                    className: (0, p.cn)("w-full max-w-none text-sm [word-break:break-word] whitespace-pre-line", r.reply_user && "inline", !w && _ && "line-clamp-8 overflow-hidden"),
                                    children: (e => {
                                        let t = /(https?:\/\/[^\s]+)/g;
                                        return e.split(t).map((e, r) => t.test(e) ? (0, l.jsx)("a", {
                                            href: e,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "pointer-events-auto cursor-pointer break-all text-[#0077FF] hover:underline",
                                            children: e
                                        }, r) : e)
                                    })(r.comment)
                                }), _ && (0, l.jsxs)("button", {
                                    onClick: () => {
                                        y(!w)
                                    },
                                    className: "mt-2 flex cursor-pointer items-center gap-1 rounded-lg bg-black/3 p-1 pl-2 text-[12px] text-black/65 transition-colors hover:bg-black/5",
                                    children: [(0, l.jsx)("span", {
                                        children: w ? "Collapse" : "Show all"
                                    }), (0, l.jsx)(h.eQr, {
                                        className: (0, p.cn)("h-3 w-3 transition-transform duration-200", w && "rotate-180")
                                    })]
                                })]
                            }), r.image_list && r.image_list.length > 0 && (0, l.jsx)("div", {
                                className: "mt-2 flex flex-wrap gap-2",
                                children: r.image_list.map((e, t) => {
                                    let {
                                        width: r,
                                        height: s
                                    } = e.width && e.height ? en(e.width, e.height) : {
                                        width: 120,
                                        height: 120
                                    };
                                    return (0, l.jsx)("div", {
                                        className: "relative",
                                        onClick: () => {
                                            b(e.origin_url || e.image_url || ""), g(!0)
                                        },
                                        style: {
                                            width: r,
                                            height: s
                                        },
                                        children: (0, l.jsx)(j.A, {
                                            url: e.image_url || e.origin_url || "",
                                            alt: "",
                                            className: "cursor-pointer rounded-[8px] bg-black/5 object-cover transition-opacity hover:opacity-90"
                                        })
                                    }, e.image_url || e.origin_url || t)
                                })
                            }), (0, l.jsxs)("div", {
                                className: "mt-[7.5px] flex items-center gap-2 text-xs text-black/30",
                                children: [(0, l.jsx)("span", {
                                    children: k
                                }), (0, l.jsx)("div", {
                                    className: "h-2 w-px bg-black/6"
                                }), (0, l.jsx)("span", {
                                    className: "cursor-pointer rounded-lg px-1.5 py-1 text-black/65 hover:bg-black/3",
                                    onClick: () => i(r),
                                    children: "Reply"
                                })]
                            })]
                        }), (d || s === a) && (0, l.jsxs)(L.rI, {
                            triggerType: "click",
                            children: [(0, l.jsx)(L.ty, {
                                children: (0, l.jsx)("div", {
                                    className: "flex h-6 w-6 items-center justify-center rounded-lg hover:bg-black/3",
                                    children: (0, l.jsx)(h.BlR, {
                                        className: "h-4 w-4 cursor-pointer text-black/95"
                                    })
                                })
                            }), (0, l.jsx)(L.SQ, {
                                className: (0, p.cn)("top-8 right-0 w-28"),
                                children: (0, l.jsx)(L._2, {
                                    icon: h.WFf,
                                    label: "Delete",
                                    onClick: () => o(r)
                                })
                            })]
                        })]
                    }), (0, l.jsx)(em, {
                        src: v,
                        isOpen: f,
                        onClose: () => g(!1)
                    })]
                })
            }
            let eh = function(e) {
                    let {
                        initialAnchorCommentId: t,
                        project: r,
                        commentInputHeight: a,
                        className: i,
                        innerClassName: o
                    } = e, {
                        comments: c,
                        initialLoading: u,
                        loadMoreLoading: m,
                        hasMore: x,
                        totalCount: f,
                        newlyCreatedComments: g,
                        anchorComment: j,
                        currentHighlightedId: v,
                        sendingComment: b,
                        actions: w
                    } = ei(), {
                        userId: y
                    } = (0, H.J)(), {
                        track: _
                    } = (0, d.s)(), N = (0, s.useSearchParams)(), k = (0, s.usePathname)(), C = (0, n.useRef)(!1), S = (0, n.useRef)(null), E = (0, n.useRef)(null), R = (0, n.useRef)(null), A = (0, n.useRef)(null), {
                        checkAuth: I
                    } = (0, W.M)(), M = e => I(async () => {
                        w.setReplyTo(e), w.setShouldFocusInput(!0)
                    }, {
                        title: "Want to leave a comment?",
                        description: "Log in to join the conversation and share your thoughts.",
                        cancelText: "Cancel",
                        confirmText: "Log in"
                    })(), T = async e => {
                        (0, J.S)({
                            title: "Delete this comment?",
                            description: "This action can't be undone.",
                            confirmText: "Delete",
                            cancelText: "Cancel",
                            onCancel: () => {},
                            onConfirm: async () => {
                                try {
                                    var t;
                                    await w.deleteComment(e), _("app_comment_delete", {
                                        project_id: r.project_id,
                                        project_url: r.project_url,
                                        comment_detail: e.comment,
                                        comments_num: f - 1,
                                        is_self_comment: e.user.uid === y,
                                        is_creator: (null == (t = r.user) ? void 0 : t.uid) === y
                                    })
                                } catch (e) {
                                    ec.vF.error("Failed to delete comment:", e)
                                }
                            },
                            confirmClassName: "bg-[#D42727]! hover:bg-[#D42727]/85!"
                        })
                    };
                    (0, n.useEffect)(() => {
                        if (S.current && S.current.disconnect(), !E.current || !x || u || m) return;
                        let e = new IntersectionObserver(e => {
                            e[0].isIntersecting && !u && !m && x && w.fetchComments()
                        }, {
                            root: null,
                            rootMargin: "300px",
                            threshold: .2
                        });
                        return e.observe(E.current), S.current = e, () => {
                            S.current && S.current.disconnect()
                        }
                    }, [u, m, x, w.fetchComments]), (0, n.useEffect)(() => {
                        C.current || (w.init(r, t), C.current = !0)
                    }, []), (0, n.useEffect)(() => () => {
                        R.current && clearTimeout(R.current)
                    }, []), (0, n.useEffect)(() => {
                        !u && v && v && (R.current && clearTimeout(R.current), R.current = setTimeout(() => {
                            w.setCurrentHighlightedId("");
                            let e = new URLSearchParams(N.toString());
                            e.delete("comment_id");
                            let t = "".concat(k).concat(e.toString() ? "?".concat(e.toString()) : "");
                            window.history.replaceState({}, "", t)
                        }, 3e3))
                    }, [u, v]);
                    let L = (0, n.useRef)(b);
                    return (0, n.useEffect)(() => {
                        L.current && !b && A.current && A.current.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        }), L.current = b
                    }, [b]), (0, l.jsx)("div", {
                        className: (0, p.cn)("flex min-h-[500px] flex-col", i),
                        children: (0, l.jsxs)("div", {
                            ref: A,
                            className: (0, p.cn)("h-full w-full p-2", o),
                            children: [u && 0 === c.length && (0, l.jsx)("div", {
                                className: "flex h-full items-center justify-center",
                                children: (0, l.jsx)("div", {
                                    className: "flex items-center space-x-2",
                                    children: (0, l.jsx)(h.xNY, {
                                        className: "h-6 w-6 animate-spin text-black/30"
                                    })
                                })
                            }), !u && 0 === c.length && 0 === g.length && (0, l.jsxs)("div", {
                                className: "mt-40 flex h-full flex-col items-center justify-center px-[60px] text-black/65",
                                children: [(0, l.jsx)(h.My6, {
                                    className: "mb-3 h-8 w-8 text-black/12"
                                }), (0, l.jsx)("p", {
                                    className: "mb-1 text-sm font-bold text-black/95",
                                    children: "Be the first to comment"
                                }), (0, l.jsx)("p", {
                                    className: "text-center text-xs text-black/65",
                                    children: "Add your voice and let the creator hear from you."
                                })]
                            }), (c.length > 0 || g.length > 0 || t) && (0, l.jsxs)(l.Fragment, {
                                children: [(() => {
                                    let e = new Set(g.map(e => e.uuid)),
                                        t = null == j ? void 0 : j.uuid,
                                        r = c.filter(r => !e.has(r.uuid) && r.uuid !== t);
                                    return [...[...g].sort((e, t) => new Date(t.create_time).getTime() - new Date(e.create_time).getTime()), ...j ? [j] : [], ...r]
                                })().map((e, t) => {
                                    var s;
                                    return (0, l.jsx)(ep, {
                                        comment: e,
                                        currentUserId: y || "",
                                        projectAuthorId: (null == (s = r.user) ? void 0 : s.uid) || "",
                                        onReply: M,
                                        onDelete: T,
                                        isHighlighted: e.uuid === v
                                    }, t)
                                }), x && (0, l.jsx)("div", {
                                    ref: E,
                                    className: "flex items-center justify-center py-4",
                                    children: m && (0, l.jsx)(h.xNY, {
                                        className: "h-6 w-6 animate-spin text-black/30"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "",
                                    style: {
                                        height: a
                                    }
                                })]
                            })]
                        })
                    })
                },
                ef = () => {
                    try {
                        let e = localStorage.getItem(U.V2);
                        return !!e && JSON.parse(e)
                    } catch (e) {
                        return !1
                    }
                },
                eg = e => {
                    let {
                        project: t,
                        isFullScreen: r,
                        style: s = "dark"
                    } = e, [a, i] = (0, n.useState)(!1), {
                        isLoggedIn: o
                    } = (0, H.J)();
                    (0, n.useEffect)(() => {
                        if (!ef() && o) {
                            i(!0);
                            try {
                                ef() || localStorage.setItem(U.V2, JSON.stringify(!0))
                            } catch (e) {}
                        }
                    }, [o]), (0, n.useEffect)(() => {
                        if (!a) return;
                        let e = () => {
                                setTimeout(() => {
                                    let e = document.activeElement;
                                    e && "IFRAME" === e.tagName && i(!1)
                                }, 100)
                            },
                            t = () => {
                                i(!1)
                            };
                        window.addEventListener("blur", e);
                        let r = document.querySelectorAll("iframe");
                        return r.forEach(e => {
                            e.addEventListener("focus", t)
                        }), () => {
                            window.removeEventListener("blur", e), r.forEach(e => {
                                e.removeEventListener("focus", t)
                            })
                        }
                    }, [a]);
                    let c = e => (0, l.jsxs)("div", {
                        className: "flex flex-col items-end justify-center gap-3 rounded-[10px] border border-black/3 bg-[#2C2C2C] p-3 ".concat(e ? "fixed right-2 bottom-2 z-100" : ""),
                        children: [(0, l.jsx)("div", {
                            className: "flex items-stretch gap-2",
                            children: (0, l.jsx)("span", {
                                className: "flex-1 text-[14px] text-white/95",
                                children: "AI APP consume credits from your balance during use."
                            })
                        }), (0, l.jsx)("span", {
                            className: "cursor-pointer text-[14px] font-bold text-white/95",
                            onClick: () => {
                                i(!1)
                            },
                            children: "Got it"
                        })]
                    });
                    return r ? a ? c(!0) : null : (0, l.jsxs)(A.AM, {
                        open: a,
                        children: [(0, l.jsx)(A.Wv, {
                            asChild: !0,
                            children: (0, l.jsx)("div", {
                                className: (0, p.cn)("flex h-[18px] flex-none items-center justify-center rounded-full px-[5px] py-[1px]", "dark" === s ? "bg-[#55644A]" : "border border-black/6 bg-white"),
                                children: (0, l.jsx)("span", {
                                    className: (0, p.cn)("text-xs font-bold", "dark" === s ? "text-white" : "text-black/95"),
                                    children: "AI App"
                                })
                            })
                        }), (0, l.jsx)(A.hl, {
                            className: "w-auto max-w-[350px] rounded-[10px] p-0 shadow-[0px_16px_32px_-1px_rgba(12,12,13,0.1)] outline-none focus:outline-none",
                            side: "top",
                            align: "center",
                            sideOffset: 26,
                            children: c(!1)
                        })]
                    })
                };

            function ej(e) {
                var t, r, n, a, i, o, c;
                let {
                    project: u,
                    isFullScreen: m,
                    style: x = "dark"
                } = e, p = (0, s.useRouter)(), {
                    track: h
                } = (0, d.s)(), f = () => {
                    var e;
                    (null == (e = u.user) ? void 0 : e.uid) && (h("app_creator_info_click", {
                        project_id: u.project_id,
                        project_url: u.project_url,
                        enter_from: (0, y.qn)("enter_from")
                    }), p.push("/profile/".concat(u.user.uid)))
                };
                return (0, l.jsxs)("div", {
                    className: "flex flex-row justify-start gap-2",
                    children: [(0, l.jsxs)("div", {
                        className: "relative h-10 w-10 shrink-0",
                        children: [(0, l.jsx)("img", {
                            src: (null == (t = u.user) ? void 0 : t.photo_url) || "/images/avatar.svg",
                            className: "h-full w-full cursor-pointer rounded-full bg-gray-200",
                            onClick: f,
                            alt: " "
                        }), (0, l.jsx)(ed.A, {
                            className: "absolute -right-px -bottom-px border-white",
                            userBadge: null == (n = u.user) || null == (r = n.badge) ? void 0 : r.type,
                            size: "12",
                            tooltipSide: "right"
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [(0, l.jsx)("div", {
                            className: "text-[16px] font-bold text-black/95",
                            children: null != (c = null != (o = u.custom_title) ? o : u.title) ? c : "".concat(null == (a = u.user) ? void 0 : a.display_name, "'s project")
                        }), (0, l.jsx)("div", {
                            className: "cursor-pointer text-[14px] text-black/45",
                            onClick: f,
                            children: null == (i = u.user) ? void 0 : i.display_name
                        })]
                    }), u.is_ai_app && (0, l.jsx)(eg, {
                        project: u,
                        isFullScreen: m,
                        style: x
                    })]
                })
            }
            let ev = async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        maxCount: t = 1,
                        maxSize: r = 5242880,
                        currentCount: l = 0,
                        onUpload: s
                    } = e;
                if (l >= t) return void(0, O.P)({
                    message: "Maximum ".concat(t, " image").concat(t > 1 ? "s" : "", " allowed"),
                    type: "error"
                });
                let n = document.createElement("input");
                n.type = "file", n.accept = "image/png, image/jpeg, image/gif, image/webp, image/jpg", n.multiple = !1, n.onchange = async e => {
                    var t;
                    let l = null == (t = e.target.files) ? void 0 : t[0];
                    if (l) {
                        if (l.size > r) {
                            (0, O.P)({
                                message: "Image size must be less than ".concat(Math.floor(r / 1048576), "MB"),
                                type: "error"
                            }), n.value = "";
                            return
                        }
                        if (!["image/png", "image/jpeg", "image/gif", "image/webp", "image/jpg"].includes(l.type)) {
                            (0, O.P)({
                                message: "Please select a valid image file (PNG, JPEG, GIF, or WebP)",
                                type: "error"
                            }), n.value = "";
                            return
                        }
                        if (s) try {
                            await s(l)
                        } catch (e) {
                            console.error("Image upload failed:", e), (0, O.P)({
                                message: "Failed to upload image. Please try again.",
                                type: "error"
                            })
                        }
                        n.value = ""
                    }
                }, n.click()
            };

            function eb(e) {
                var t, r;
                let {
                    replyTo: s,
                    onCancel: a
                } = e, [i, o] = (0, n.useState)(!1), c = (0, n.useRef)(null), {
                    content: u,
                    charCount: m,
                    sendingComment: x,
                    errorMessage: f,
                    MAX_CHAR_COUNT: g,
                    images: j,
                    actions: v,
                    project: b,
                    totalCount: w,
                    comments: _
                } = ei(), {
                    checkAuth: N
                } = (0, W.M)(), {
                    track: k
                } = (0, d.s)(), C = _.length > 0 ? "Drop a comment, vibe the moment." : "Comment box lonely, needs your voice only.", S = async () => {
                    try {
                        if (!u.trim() && 0 === j.length || m > g) return;
                        b && k("app_comment_sent", {
                            project_id: b.project_id,
                            project_url: b.project_url,
                            comments_num: w + 1,
                            comment_detail: u,
                            reply_detail: (null == s ? void 0 : s.comment) || "",
                            has_image: j.length > 0,
                            image_file: j.length > 0 ? j.map(e => e.s3_uri).join(",") : "",
                            enter_from: (0, y.qn)("enter_from")
                        }), await v.createComment(), v.resetCommentInput(), a && a()
                    } catch (e) {
                        console.error("Failed to submit comment:", e)
                    }
                };
                if ((0, n.useEffect)(() => {
                        o(!0)
                    }, []), (0, n.useEffect)(() => {
                        c.current && (c.current.style.height = "auto", c.current.style.height = "".concat(c.current.scrollHeight, "px"))
                    }, [u]), !i) return null;
                let E = (0, l.jsx)("div", {
                    className: "fixed inset-0 z-[50] flex items-center justify-center bg-black/20 px-4 sm:hidden",
                    onClick: e => {
                        e.target === e.currentTarget && a && a()
                    },
                    children: (0, l.jsxs)("div", {
                        className: "flex w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-[0px_16px_48px_1px_rgba(0,0,0,0.2)]",
                        children: [s && (0, l.jsx)("div", {
                            className: "mb-3 flex w-full items-start justify-between gap-2 pr-0 pl-2",
                            children: (0, l.jsxs)("div", {
                                className: "flex flex-col items-start gap-0.5",
                                children: [(0, l.jsxs)("span", {
                                    className: "text-xs text-black/30",
                                    children: ["Reply to ", s.user.display_name, ":"]
                                }), (0, l.jsx)("span", {
                                    className: "text-sm text-black/65",
                                    children: s.comment + (null != (r = null == (t = s.image_list) ? void 0 : t.length) && r ? " [image]" : "")
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: "w-full",
                            children: [(0, l.jsx)("textarea", {
                                id: "comment-input",
                                ref: c,
                                className: "max-h-[104px] w-full resize-none rounded-[10px] border border-black/6 bg-white px-3 py-[10px] text-sm placeholder-black/30 outline-none focus:border-black/65",
                                placeholder: C,
                                value: u,
                                onChange: e => N(async () => {
                                    v.setCommentContent(e.target.value)
                                }, {
                                    title: "Want to leave a comment?",
                                    description: "Log in to join the conversation and share your thoughts.",
                                    cancelText: "Cancel",
                                    confirmText: "Log in"
                                })(),
                                onKeyDown: e => {
                                    "Enter" !== e.key || e.nativeEvent.isComposing || e.shiftKey || (e.preventDefault(), S())
                                },
                                autoFocus: !0,
                                rows: 1
                            }), j.length > 0 && (0, l.jsx)("div", {
                                className: "mt-3 flex w-full flex-row items-center gap-2",
                                children: j.map(e => {
                                    let {
                                        width: t,
                                        height: r
                                    } = e.width && e.height ? en(e.width, e.height, 48) : {
                                        width: 48,
                                        height: 48
                                    };
                                    return (0, l.jsxs)("div", {
                                        className: "relative flex flex-row items-center justify-start gap-1",
                                        children: ["uploading" === e.status ? (0, l.jsx)("div", {
                                            className: "flex h-12 w-12 items-center justify-center rounded-[8px] bg-black/5",
                                            children: (0, l.jsx)(h.WIr, {
                                                className: "h-5 w-5 animate-spin text-black/95"
                                            })
                                        }) : (0, l.jsx)("img", {
                                            src: e.s3_uri,
                                            alt: "upload",
                                            className: "rounded-[8px] bg-black/5",
                                            style: {
                                                width: t,
                                                height: r
                                            }
                                        }), (0, l.jsx)("div", {
                                            className: "absolute inset-0 z-10 cursor-pointer items-center justify-center overflow-visible rounded-full",
                                            onClick: () => v.deleteImage(e),
                                            children: (0, l.jsx)("div", {
                                                className: "absolute top-[-8px] right-[-8px] z-20 flex h-5 w-5 items-center justify-center overflow-visible rounded-full bg-black",
                                                children: (0, l.jsx)(h.Qks, {
                                                    className: "h-4 w-4 text-white"
                                                })
                                            })
                                        })]
                                    }, e.s3_key)
                                })
                            })]
                        }), f && (0, l.jsx)("p", {
                            className: "mt-2 w-full overflow-hidden text-xs break-words text-[#D42727]",
                            children: f
                        }), (0, l.jsxs)("div", {
                            className: "mt-3 flex w-full justify-between",
                            children: [(0, l.jsx)("div", {
                                className: (0, p.cn)("flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-black/5", j.length >= 1 && "cursor-not-allowed opacity-50"),
                                onClick: () => {
                                    ev({
                                        currentCount: j.length,
                                        onUpload: v.uploadImage
                                    })
                                },
                                children: (0, l.jsx)(h.fsL, {
                                    className: "h-4 w-4 text-black/95"
                                })
                            }), (0, l.jsxs)("div", {
                                className: "flex gap-3",
                                children: [(0, l.jsx)("button", {
                                    className: "h-8 w-17 cursor-pointer rounded-[10px] border border-black/3 px-[10px] text-sm hover:border-transparent hover:bg-black/3 disabled:cursor-not-allowed",
                                    onClick: a || (() => {
                                        v.resetCommentInput()
                                    }),
                                    disabled: x,
                                    children: "Cancel"
                                }), (0, l.jsxs)("button", {
                                    className: (0, p.cn)("bg-brand flex h-8 cursor-pointer items-center gap-2 rounded-[10px] px-[10px] text-sm text-white", !u.trim() && 0 === j.length || m > g || x ? "cursor-not-allowed opacity-30" : ""),
                                    onClick: S,
                                    disabled: !u.trim() && 0 === j.length || m > g || x,
                                    children: [x && (0, l.jsx)(h.xNY, {
                                        className: "h-4 w-4 animate-spin"
                                    }), (0, l.jsx)("span", {
                                        children: "Comment"
                                    })]
                                })]
                            })]
                        })]
                    })
                });
                return (0, eu.createPortal)(E, document.body)
            }

            function ew() {
                let {
                    user: e
                } = (0, H.J)(), [t, r] = (0, n.useState)(!1), {
                    replyTo: s,
                    actions: a,
                    comments: i
                } = ei(), o = i.length > 0 ? "Drop a comment, vibe the moment." : "Comment box lonely, needs your voice only.";
                return (0, n.useEffect)(() => {
                    s && r(!0)
                }, [s]), (0, l.jsxs)("div", {
                    className: "flex flex-col p-4",
                    children: [(0, l.jsxs)("div", {
                        className: "flex w-full items-center justify-between gap-3",
                        children: [(0, l.jsx)("div", {
                            className: "mt-0.5 h-[30px] w-[30px] cursor-pointer rounded-full bg-cover bg-center",
                            style: {
                                backgroundImage: "url(".concat((null == e ? void 0 : e.photo_url) || "/images/avatar.svg", "), url('/images/avatar.svg')")
                            },
                            onClick: () => window.open("/profile/".concat(null == e ? void 0 : e.uid), "_blank")
                        }), (0, l.jsx)("div", {
                            className: "flex-1 cursor-pointer rounded-[10px] border border-black/6 bg-white px-3 py-[10px] text-sm transition-colors hover:border-black/20",
                            onClick: () => r(!0),
                            children: (0, l.jsx)("div", {
                                className: "text-black/30",
                                children: o
                            })
                        })]
                    }), t && (0, l.jsx)(eb, {
                        replyTo: s,
                        onCancel: () => {
                            r(!1), a.resetCommentInput()
                        }
                    })]
                })
            }

            function ey(e) {
                let {
                    project: t,
                    anchorCommentId: r
                } = e;
                return (0, l.jsxs)("div", {
                    className: "flex h-full w-full flex-col",
                    children: [(0, l.jsxs)("div", {
                        className: "flex-shrink-0",
                        children: [(0, l.jsx)("div", {
                            className: "flex w-full items-center p-5",
                            children: (0, l.jsx)(ej, {
                                project: t,
                                isFullScreen: !1,
                                style: "light"
                            })
                        }), (0, l.jsx)(ee, {
                            project: t,
                            className: "flex w-full items-center justify-between px-5",
                            hideMore: !0,
                            hideRemix: !0
                        }), (0, l.jsx)(eo, {
                            className: "bg-white px-6 pt-5 pb-2",
                            noArrow: !0
                        }), (0, l.jsx)(ew, {})]
                    }), (0, l.jsx)("div", {
                        className: "min-h-0 flex-1",
                        children: (0, l.jsx)(eh, {
                            project: t,
                            className: "h-full",
                            innerClassName: "overflow-y-scroll",
                            initialAnchorCommentId: r
                        })
                    })]
                })
            }

            function e_(e) {
                var t, r, n, a;
                let {
                    project: i,
                    onClickMoreProject: o,
                    onClickExpand: c
                } = e, u = (null == (t = i.user) ? void 0 : t.uid) === U.v1, {
                    isLoggedIn: m
                } = (0, H.J)(), x = (0, s.useRouter)(), {
                    track: f
                } = (0, d.s)(), {
                    remixAction: g,
                    isRemixing: j
                } = (0, V.N)(), b = async () => {
                    if (f("remix_button_click", {
                            origin_project_id: i.project_id,
                            origin_project_url: i.project_url,
                            remix_count: i.remix_count,
                            location: "app_page",
                            access_control: i.allow_remix ? "allowed" : "not_allowed",
                            status: i.allow_remix ? m ? "success" : "need_login" : "not_allow"
                        }), !i.allow_remix) return void(0, J.S)({
                        title: "Not Supported",
                        description: "Building on this project is not allowed",
                        confirmText: "Got it",
                        onConfirm: () => {}
                    });
                    await g(i.project_id, "remix")
                };
                return (0, l.jsxs)("div", {
                    className: (0, p.cn)("bg-body flex h-14 w-full max-w-full flex-row items-center justify-between gap-4 overflow-visible border-t border-black/6 px-4"),
                    children: [(0, l.jsxs)("div", {
                        id: "left-container",
                        className: "flex flex-1 shrink-0 flex-row items-center gap-2",
                        children: [(0, l.jsxs)("a", {
                            id: "logo-container",
                            className: (0, p.cn)("flex cursor-pointer flex-row items-center gap-1"),
                            onClick: e => {
                                f("app_watermark_button_click", {
                                    project_id: i.project_id,
                                    project_url: i.project_url
                                }), x.push("/")
                            },
                            children: [(0, l.jsx)("img", {
                                src: "/icons/logo.svg",
                                alt: "Logo",
                                className: "text-brand h-6 w-6"
                            }), (0, l.jsx)("div", {
                                className: "hidden text-base leading-5 text-black/95 sm:block",
                                children: "YouWare"
                            })]
                        }), !u && (0, l.jsx)("div", {
                            className: "h-[16px] w-[1px] bg-black/6"
                        }), !u && (0, l.jsxs)("div", {
                            id: "user-container",
                            className: (0, p.cn)("relative flex cursor-pointer flex-row items-center gap-2"),
                            onClick: e => {
                                var t;
                                x.push("/profile/".concat(null == (t = i.user) ? void 0 : t.uid)), f("app_creator_info_click", {
                                    project_id: i.project_id,
                                    project_url: i.project_url
                                })
                            },
                            children: [(0, l.jsx)("img", {
                                src: (null == (r = i.user) ? void 0 : r.photo_url) || "/images/avatar.svg",
                                alt: "",
                                className: "h-6 w-6 rounded-full bg-gray-200 object-cover"
                            }), (0, l.jsx)(ed.A, {
                                className: "absolute -right-0.5 -bottom-px border-white",
                                userBadge: null == (a = i.user) || null == (n = a.badge) ? void 0 : n.type,
                                size: "12",
                                tooltipSide: "right"
                            })]
                        })]
                    }), (0, l.jsx)("div", {
                        className: "bg-brand flex h-[36px] w-[86px] items-center justify-center rounded-[10px] border-none text-white shadow-[0px_8px_20px_0px_rgba(55,67,45,0.30)] active:bg-[#44503B] active:shadow-none",
                        onClick: o,
                        children: (0, l.jsx)("div", {
                            className: "flex items-center text-[14px]",
                            children: "Discover"
                        })
                    }), (0, l.jsxs)("div", {
                        className: "flex min-w-0 flex-1 items-center justify-end gap-2",
                        children: [(0, l.jsxs)("button", {
                            className: "flex h-8 cursor-pointer items-center gap-1 rounded-[10px] border border-black/6 px-1.5 disabled:bg-black/3",
                            onClick: b,
                            disabled: j,
                            children: [j ? (0, l.jsx)(h.xNY, {
                                className: "h-[14px] w-[14px] animate-spin"
                            }) : (0, l.jsx)(h.xP3, {
                                className: "h-[14px] w-[14px]"
                            }), (0, l.jsx)("div", {
                                className: "text-[14px]",
                                children: (0, v.Z)(i.remix_count || 0)
                            })]
                        }), (0, l.jsx)("div", {
                            className: "flex h-8 w-8 items-center justify-center rounded-[10px] border border-black/6",
                            onClick: c,
                            children: (0, l.jsx)(h.vuo, {
                                className: "h-4 w-4 text-black/95"
                            })
                        })]
                    })]
                })
            }
            let eN = e => {
                let {
                    children: t,
                    isOpen: r,
                    setIsOpen: s
                } = e;
                return r && (0, l.jsx)("div", {
                    className: "fixed inset-0 bottom-[env(safe-area-inset-bottom)] z-50 flex items-end justify-center bg-black/20 pt-14",
                    onClick: () => s(!1),
                    children: (0, l.jsx)("div", {
                        className: (0, p.cn)("flex h-full w-full flex-col overflow-hidden rounded-t-[24px] bg-white shadow-[0px_16px_48px_1px_rgba(0,0,0,0.2)] transition-transform duration-300", r ? "translate-x-0 translate-y-0" : "max-sm:translate-y-full sm:translate-x-[calc(100%+8px)]"),
                        onClick: e => {
                            e.stopPropagation(), e.preventDefault()
                        },
                        children: t
                    })
                })
            };

            function ek(e) {
                let {
                    project: t,
                    projectUrl: r,
                    screenStatus: s,
                    anchorCommentId: a,
                    blogList: i,
                    isBlogProject: o
                } = e, [c, d] = (0, n.useState)(!1), [u, m] = (0, n.useState)(void 0 !== a);
                return (0, l.jsxs)("div", {
                    className: "flex h-full w-full flex-col",
                    children: [(0, l.jsx)(R, {
                        className: "flex-1 rounded-none border-none",
                        project: t,
                        projectUrl: r,
                        hideFullScreenButton: !0
                    }), "force_full" !== s && "default_full" !== s && (0, l.jsx)(e_, {
                        project: t,
                        onClickMoreProject: () => d(!0),
                        onClickExpand: () => m(!0)
                    }), (0, l.jsx)(eN, {
                        isOpen: c,
                        setIsOpen: d,
                        children: o ? (0, l.jsx)(w, {
                            blogList: i || [],
                            layout: "mobile"
                        }) : (0, l.jsx)(S, {
                            projectId: t.project_id,
                            layout: "mobile"
                        })
                    }), (0, l.jsx)(eN, {
                        isOpen: u,
                        setIsOpen: m,
                        children: (0, l.jsx)(ey, {
                            project: t,
                            anchorCommentId: a
                        })
                    })]
                })
            }
            var eC = r(47998),
                eS = r(62140);

            function eE(e) {
                let {
                    project: t,
                    isFullScreen: r,
                    handleFullScreen: s
                } = e;
                return (0, l.jsx)("div", {
                    className: "mt-5",
                    children: (0, l.jsxs)("div", {
                        className: "flex h-[42px] w-full flex-shrink-0 flex-row items-center justify-between px-2",
                        children: [(0, l.jsx)(ej, {
                            project: t,
                            isFullScreen: r
                        }), (0, l.jsx)(ee, {
                            project: t,
                            handleFullScreen: s,
                            brandRemix: !0
                        })]
                    })
                })
            }

            function eR(e) {
                var t;
                let {
                    onHeightChange: r,
                    className: a
                } = e, {
                    replyTo: i,
                    actions: o,
                    content: c,
                    shouldFocusInput: u,
                    images: m,
                    sendingComment: x,
                    comments: f,
                    project: g,
                    totalCount: j
                } = ei(), {
                    user: v
                } = (0, H.J)(), {
                    checkAuth: b
                } = (0, W.M)(), {
                    track: w
                } = (0, d.s)(), _ = (0, n.useRef)(null), N = (0, n.useRef)(null), k = (0, n.useRef)(null), [C, S] = (0, n.useState)(!1), E = (0, s.useRouter)(), R = f.length > 0 ? "Drop a comment, vibe the moment." : "Comment box lonely, needs your voice only.";
                (0, n.useEffect)(() => {
                    if (!N.current || !r) return;
                    let e = new ResizeObserver(e => {
                        for (let t of e) r(t.contentRect.height)
                    });
                    return e.observe(N.current), () => {
                        e.disconnect()
                    }
                }, [r]), (0, n.useEffect)(() => {
                    N.current && r && r(N.current.offsetHeight)
                }, [r, i, u, m.length]), (0, n.useEffect)(() => {
                    if (_.current) {
                        let e = _.current;
                        e.style.overflowY = "hidden", e.style.height = "auto";
                        let t = Math.min(e.scrollHeight, 104);
                        e.style.height = "".concat(t, "px"), e.scrollHeight > 104 && (e.style.overflowY = "auto")
                    }
                }, [c]);
                let A = async () => {
                        (c.trim() || 0 !== m.length) && (g && w("app_comment_sent", {
                            project_id: g.project_id,
                            project_url: g.project_url,
                            comments_num: j + 1,
                            comment_detail: c,
                            reply_detail: (null == i ? void 0 : i.comment) || "",
                            has_image: m.length > 0,
                            image_file: m.length > 0 ? m.map(e => e.s3_uri).join(",") : "",
                            enter_from: (0, y.qn)("enter_from")
                        }), await o.createComment(), o.resetCommentInput())
                    },
                    I = () => {
                        var e;
                        if (!k.current || !N.current) return;
                        let t = k.current.closest(".overflow-y-scroll");
                        if (!t) return;
                        let r = t.getBoundingClientRect().bottom;
                        S(r >= k.current.getBoundingClientRect().top + (null == (e = N.current) ? void 0 : e.getBoundingClientRect().height))
                    };
                (0, n.useEffect)(() => {
                    var e;
                    let t = () => {
                        I()
                    };
                    I();
                    let r = null == (e = k.current) ? void 0 : e.closest(".overflow-y-scroll");
                    return r && r.addEventListener("scroll", t), window.addEventListener("resize", t), () => {
                        r && r.removeEventListener("scroll", t), window.removeEventListener("resize", t)
                    }
                }, []);
                let M = C || u || i || c.trim() || m.length > 0;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        ref: k,
                        className: (0, p.cn)("h-0 w-full")
                    }), (0, l.jsxs)("div", {
                        ref: N,
                        className: (0, p.cn)("bg-body w-full", M ? "absolute bottom-0 left-0 z-10 pl-5" : "relative", a),
                        children: [i && (0, l.jsx)("div", {
                            className: "h-px w-full bg-black/6"
                        }), (0, l.jsxs)("div", {
                            className: "flex w-full flex-col gap-3 p-3",
                            children: [i && (0, l.jsxs)("div", {
                                className: "flex w-full justify-between gap-2 pl-2",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex flex-col gap-1",
                                    children: [(0, l.jsxs)("div", {
                                        className: "text-[12px] text-black/30",
                                        children: ["Replying to ", null == (t = i.user) ? void 0 : t.display_name]
                                    }), (0, l.jsxs)("div", {
                                        className: "text-[14px] text-black/95",
                                        children: [i.comment, i.image_list && i.image_list.length > 0 && (0, l.jsx)("span", {
                                            className: "",
                                            children: "[image]"
                                        })]
                                    })]
                                }), (0, l.jsx)("button", {
                                    onClick: o.cancelReply,
                                    className: "flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-black/95 hover:bg-black/5",
                                    children: (0, l.jsx)(h.Qks, {
                                        className: "h-4 w-4"
                                    })
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-row items-start gap-3",
                                children: [(0, l.jsx)("div", {
                                    className: "flex-shrink-0 py-[3px]",
                                    children: (0, l.jsx)("img", {
                                        src: (null == v ? void 0 : v.photo_url) || "/images/avatar.svg",
                                        alt: " ",
                                        className: "h-[30px] w-[30px] cursor-pointer rounded-full bg-black/5",
                                        onClick: () => b(async () => {
                                            E.push("/profile/".concat(null == v ? void 0 : v.uid))
                                        }, {
                                            title: "Want to leave a comment?",
                                            description: "Log in to join the conversation and share your thoughts.",
                                            cancelText: "Cancel",
                                            confirmText: "Log in"
                                        })()
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "flex w-full flex-col gap-3",
                                    children: [(0, l.jsxs)("div", {
                                        className: "bg-body flex w-full flex-col items-center justify-center gap-2.5 rounded-[10px] border border-black/6 px-3 py-2.5",
                                        children: [(0, l.jsx)("textarea", {
                                            ref: _,
                                            value: c,
                                            onChange: e => b(async () => {
                                                o.setCommentContent(e.target.value)
                                            }, {
                                                title: "Want to leave a comment?",
                                                description: "Log in to join the conversation and share your thoughts.",
                                                cancelText: "Cancel",
                                                confirmText: "Log in"
                                            })(),
                                            onFocus: () => b(async () => {
                                                o.setShouldFocusInput(!0)
                                            }, {
                                                title: "Want to leave a comment?",
                                                description: "Log in to join the conversation and share your thoughts.",
                                                cancelText: "Cancel",
                                                confirmText: "Log in"
                                            })(),
                                            onKeyDown: e => {
                                                if ("Enter" === e.key && !e.shiftKey && !e.nativeEvent.isComposing) {
                                                    var t;
                                                    e.preventDefault(), A(), null == (t = _.current) || t.blur()
                                                }
                                            },
                                            placeholder: R,
                                            rows: 1,
                                            className: "max-h-[104px] w-full resize-none text-[14px] text-black/95 placeholder-black/30 outline-none"
                                        }), m.length > 0 && (0, l.jsx)("div", {
                                            className: "flex w-full flex-row items-center gap-2",
                                            children: m.map(e => {
                                                let {
                                                    width: t,
                                                    height: r
                                                } = e.width && e.height ? en(e.width, e.height, 32) : {
                                                    width: 32,
                                                    height: 32
                                                };
                                                return (0, l.jsxs)("div", {
                                                    className: "relative flex flex-row items-center justify-start gap-1",
                                                    children: ["uploading" === e.status ? (0, l.jsx)("div", {
                                                        className: "flex h-8 w-8 items-center justify-center rounded-[8px] bg-black/5",
                                                        children: (0, l.jsx)(h.WIr, {
                                                            className: "h-4 w-4 animate-spin text-black/95"
                                                        })
                                                    }) : (0, l.jsx)("img", {
                                                        src: e.s3_uri,
                                                        alt: " ",
                                                        className: "rounded-[8px] bg-black/5",
                                                        style: {
                                                            width: t,
                                                            height: r
                                                        }
                                                    }), (0, l.jsx)("div", {
                                                        className: "absolute inset-0 z-10 cursor-pointer items-center justify-center overflow-visible rounded-full opacity-0 hover:opacity-100",
                                                        onClick: () => o.deleteImage(e),
                                                        children: (0, l.jsx)("div", {
                                                            className: "absolute top-[-8px] right-[-8px] z-20 flex h-4 w-4 items-center justify-center overflow-visible rounded-full bg-black",
                                                            children: (0, l.jsx)(h.Qks, {
                                                                className: "h-4 w-4 text-white"
                                                            })
                                                        })
                                                    })]
                                                }, e.s3_key)
                                            })
                                        })]
                                    }), u && (0, l.jsxs)("div", {
                                        className: "flex flex-row justify-between",
                                        children: [(0, l.jsx)("div", {
                                            className: (0, p.cn)("flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-black/5", m.length >= 1 && "cursor-not-allowed opacity-50"),
                                            onClick: () => {
                                                ev({
                                                    currentCount: m.length,
                                                    onUpload: o.uploadImage
                                                })
                                            },
                                            children: (0, l.jsx)(h.fsL, {
                                                className: "h-4 w-4 text-black/95"
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "flex flex-row items-center gap-2",
                                            children: [(0, l.jsx)("button", {
                                                className: "flex h-[30px] w-[66px] cursor-pointer items-center justify-center rounded-[10px] border border-black/6 pt-0.5 text-[14px] text-black/95",
                                                onClick: () => {
                                                    o.resetCommentInput()
                                                },
                                                children: "Cancel"
                                            }), (0, l.jsx)("button", {
                                                className: (0, p.cn)("bg-brand flex h-[32px] w-[76px] cursor-pointer items-center justify-center rounded-[10px] pt-0.5 text-[14px] text-white disabled:cursor-not-allowed disabled:opacity-50", x && "cursor-not-allowed opacity-50"),
                                                disabled: !c.trim() && 0 === m.length || x || m.some(e => "uploading" === e.status),
                                                onClick: A,
                                                children: x ? (0, l.jsx)(h.WIr, {
                                                    className: "h-4 w-4 animate-spin text-white"
                                                }) : "Comment"
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }

            function eA(e) {
                let {
                    project: t,
                    projectUrl: r,
                    screenStatus: a,
                    anchorCommentId: i,
                    blogList: o,
                    isBlogProject: c
                } = e, {
                    track: u
                } = (0, d.s)(), m = (0, s.useRouter)(), [x, h] = (0, n.useState)(0), [f, g] = (0, n.useState)("force_full" === a || "default_full" === a), [j, v] = (0, n.useState)(!1), b = (0, n.useRef)(null), y = (0, n.useRef)(null), _ = "force_full" === a, {
                    totalCount: N
                } = ei(), k = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
                        [t, r] = (0, n.useState)(null);
                    return (0, n.useEffect)(() => {
                        let t = 0,
                            l = () => {
                                let l = Date.now();
                                l - t >= e && (r(window.innerWidth), t = l)
                            };
                        return r(window.innerWidth), window.addEventListener("resize", l), () => window.removeEventListener("resize", l)
                    }, [e]), t
                }(), C = k && k < 1080 ? "grid" : "sidebar", E = (0, n.useCallback)(e => {
                    _ || g(e)
                }, [_]), A = (0, n.useCallback)(e => {
                    h(e)
                }, []), I = e => {
                    m.push(e.project_url + "?enter_from=app_page_featured")
                }, M = (0, n.useCallback)(() => {
                    j || (v(!0), u("app_comment_panel_show", {
                        project_id: t.project_id,
                        project_url: t.project_url,
                        comments_count: N
                    }), console.log("CommentList is now visible in viewport with >100px"))
                }, [j, u, t.project_id, t.project_url]);
                return ((0, n.useEffect)(() => {
                    if (!b.current) return;
                    y.current && y.current.disconnect();
                    let e = new IntersectionObserver(e => {
                        e.forEach(e => {
                            e.isIntersecting && !j && M()
                        })
                    }, {
                        root: null,
                        rootMargin: "-250px 0px",
                        threshold: 0
                    });
                    return e.observe(b.current), y.current = e, () => {
                        y.current && y.current.disconnect()
                    }
                }, [b.current, j, M]), (0, n.useEffect)(() => {
                    if (i && b.current) {
                        let e = setTimeout(() => {
                            var e;
                            null == (e = b.current) || e.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })
                        }, 100);
                        return () => clearTimeout(e)
                    }
                }, [i, b.current]), null === k) ? (0, l.jsx)(eS.A, {}) : (0, l.jsxs)("div", {
                    className: "mt-14 flex h-[calc(100vh-56px)] min-h-[270px] w-full flex-col items-center justify-center",
                    children: [(0, l.jsx)(eC.Header, {
                        className: "fixed",
                        showLogo: !0,
                        onClickLogo: () => {
                            u("app_watermark_button_click", {
                                project_id: t.project_id,
                                project_url: t.project_url
                            })
                        }
                    }), (0, l.jsxs)("div", {
                        className: (0, p.cn)("flex h-full w-full flex-1 flex-row", "mx-auto max-w-[max(1080px,min(calc((100vh-3rem)*2/1),2560px))]"),
                        children: [(0, l.jsx)("div", {
                            className: "relative flex w-full flex-col",
                            children: (0, l.jsxs)("div", {
                                className: "no-scrollbar flex h-full w-full flex-col overflow-y-scroll px-5 transition-all duration-200",
                                children: [(0, l.jsx)(R, {
                                    project: t,
                                    projectUrl: r,
                                    isFullScreen: f,
                                    hideFullScreenButton: _,
                                    onFullScreen: E
                                }), (0, l.jsx)(eE, {
                                    isFullScreen: f,
                                    project: t,
                                    handleFullScreen: E
                                }), "grid" === C && (c ? (0, l.jsx)(w, {
                                    blogList: o || [],
                                    layout: "grid"
                                }) : (0, l.jsx)(S, {
                                    projectId: t.project_id,
                                    layout: "grid",
                                    onProjectClick: I
                                })), (0, l.jsxs)("div", {
                                    ref: b,
                                    children: [(0, l.jsx)(eo, {}), (0, l.jsx)(eR, {
                                        onHeightChange: A
                                    }), (0, l.jsx)(eh, {
                                        project: t,
                                        commentInputHeight: x,
                                        initialAnchorCommentId: i
                                    })]
                                })]
                            })
                        }), "sidebar" === C && (c ? (0, l.jsx)(w, {
                            blogList: o || [],
                            layout: "sidebar"
                        }) : (0, l.jsx)(S, {
                            projectId: t.project_id,
                            layout: "sidebar",
                            onProjectClick: I
                        }))]
                    })]
                })
            }
            var eI = r(94376),
                eM = r(83363);

            function eT(e) {
                let {
                    subdomain: t,
                    onVerificationSuccess: r
                } = e, [s, a] = (0, n.useState)(["", "", "", ""]), [i, o] = (0, n.useState)("idle"), [c, u] = (0, n.useState)(""), {
                    track: m
                } = (0, d.s)();
                (0, n.useEffect)(() => {
                    m("verify_passcode_page_show", {
                        project_url: window.location.pathname
                    })
                }, []);
                let x = (0, n.useRef)([]);
                (0, n.useEffect)(() => {
                    x.current[0] && x.current[0].focus()
                }, []);
                let p = (({
                        interval: e
                    }, t) => {
                        let r, l = !0,
                            s = (...s) => {
                                l && (t(...s), l = !1, r = setTimeout(() => {
                                    l = !0, r = void 0
                                }, e))
                            };
                        return s.isThrottled = () => void 0 !== r, s
                    })({
                        interval: 200
                    }, (e, t) => {
                        let r = e.target.value.slice(-1);
                        if ("" === r || /^[0-9a-zA-Z]$/.test(r)) {
                            let e = [...s];
                            if (e[t] = r, a(e), "" !== r && t < 3) {
                                var l;
                                null == (l = x.current[t + 1]) || l.focus()
                            }
                            "" !== r && 3 === t && e.every(e => "" !== e) && g(e.join(""))
                        }
                    }),
                    f = e => {
                        e.preventDefault();
                        let t = e.clipboardData.getData("text");
                        if (/^[0-9a-zA-Z]+$/.test(t)) {
                            var r, l;
                            let e = t.split(""),
                                n = [...s];
                            for (let t = 0; t < Math.min(4, e.length); t++) n[t] = e[t];
                            if (a(n), n.every(e => "" !== e)) null == (r = x.current[3]) || r.focus(), g(n.join(""));
                            else {
                                let e = n.findIndex(e => "" === e); - 1 !== e && (null == (l = x.current[e]) || l.focus())
                            }
                        }
                    },
                    g = async e => {
                        o("pending");
                        try {
                            let l = await (0, eI.a)(t, e);
                            (null == l ? void 0 : l.verified) && (null == l ? void 0 : l.iframe_url) ? (o("success"), m("verify_passcode_success", {
                                project_url: window.location.pathname
                            }), r(null == l ? void 0 : l.iframe_url)) : (o("error"), u("Code mismatch - verify with the owner"))
                        } catch (e) {
                            o("error"), u("Verification failed. Please try again.")
                        }
                    };
                return (0, l.jsxs)("div", {
                    className: "min-h-screen",
                    children: [(0, l.jsx)("div", {
                        className: "flex h-14 items-center px-5",
                        children: (0, l.jsx)(eM.D, {})
                    }), (0, l.jsxs)("div", {
                        className: "flex min-h-[calc(100vh-64px)] flex-col items-center justify-center pb-[15vh]",
                        children: [(0, l.jsx)("h1", {
                            className: "font-montserrat text-transform-capitalize mb-3 text-[40px] leading-[40px] font-medium",
                            children: "Locked Project"
                        }), (0, l.jsx)("p", {
                            className: "",
                            children: "A password is required to view this creation"
                        }), (0, l.jsx)("div", {
                            className: "my-12 flex justify-center space-x-4",
                            children: s.map((e, t) => (0, l.jsx)("input", {
                                ref: e => {
                                    x.current[t] = e
                                },
                                type: "text",
                                inputMode: "text",
                                autoComplete: "off",
                                maxLength: 1,
                                value: e,
                                onChange: e => p(e, t),
                                onKeyDown: e => ((e, t) => {
                                    if ("Backspace" === e.key && !s[t] && t > 0) {
                                        var r;
                                        null == (r = x.current[t - 1]) || r.focus()
                                    }
                                })(e, t),
                                onPaste: 0 === t ? f : void 0,
                                className: "h-24 w-18 rounded-[20px] border-none text-center text-[40px] font-medium [box-shadow:12.171px_4.868px_65.722px_0px_rgba(0,0,0,0.09)] transition-all focus:outline-black",
                                disabled: "pending" === i
                            }, t))
                        }), (0, l.jsxs)("div", {
                            className: "h-6 w-auto",
                            children: ["pending" === i && (0, l.jsxs)("div", {
                                className: "flex items-center justify-center gap-2",
                                children: [(0, l.jsx)(h.xNY, {
                                    className: "h-6 w-6 animate-spin"
                                }), (0, l.jsx)("p", {
                                    className: "text-center",
                                    children: "Verifying..."
                                })]
                            }), "success" === i && (0, l.jsx)("p", {
                                className: "text-center text-green-600",
                                children: "✨ Access granted!"
                            }), "error" === i && (0, l.jsx)("p", {
                                className: "text-center text-[#E60023]",
                                children: c
                            })]
                        })]
                    })]
                })
            }
            var eL = r(52423);

            function eP(e) {
                var t;
                let {
                    project: r,
                    urlHash: a,
                    screenStatus: p,
                    enterFrom: h,
                    isMobile: f,
                    anchorCommentId: g,
                    h1SEOContent: j,
                    blogList: v,
                    isBlogProject: b
                } = e, {
                    track: w
                } = (0, d.s)(), [y, _] = (0, n.useState)(null != (t = r.iframe_url) ? t : null), [N, k] = (0, n.useState)(r), {
                    registerInteractionCallback: S
                } = (0, c.k)(), {
                    actions: E
                } = ei(), {
                    actions: R
                } = C(), A = (0, n.useRef)(!1), [I, M] = (0, n.useState)(!1);
                return ((0, s.useRouter)(), (0, n.useEffect)(() => () => {
                    A.current = !0, setTimeout(() => {
                        A.current && (E.dispose(), R.dispose())
                    }, 100)
                }, []), (0, n.useEffect)(() => {
                    if (window.location.search.includes("yw_id=")) {
                        let e = new URL(window.location.href);
                        e.searchParams.delete("yw_id"), window.history.replaceState(null, "", e.pathname + e.search)
                    }
                }, []), ! function(e) {
                    let {
                        projectUrl: t
                    } = e;
                    (0, n.useEffect)(() => {
                        if (t && location.pathname === t) return;
                        let e = (() => {
                            let e, t = window.location.pathname;
                            return t.includes("/project/") ? ({
                                urlTitle: (e = t.split("/").pop() || "").split("-").slice(0, -1).join("-"),
                                urlHash: e.split("-").pop() || ""
                            }).urlTitle : ""
                        })();
                        if (!e) return void window.history.replaceState(null, "", t);
                        (0, eL.S)(e).then(e => {
                            var r;
                            (null == e || null == (r = e.data) ? void 0 : r.is_valid) ? window.history.replaceState(null, "", t): window.location.href = "/404"
                        }).catch(e => {
                            window.history.replaceState(null, "", t)
                        })
                    }, [])
                }({
                    projectUrl: N.project_url
                }), (0, n.useEffect)(() => {
                    let e = async () => {
                        let e = await o(a);
                        _((null == e ? void 0 : e.iframe_url) || ""), k(e)
                    };
                    N.need_passcode && !N.iframe_url && e()
                }, [N.need_passcode, N.iframe_url]), (0, n.useEffect)(() => {
                    S(N.project_id, (e, t) => {
                        k(e => ({ ...e,
                            interaction: t
                        }))
                    })
                }, [N.project_id, S]), (0, n.useEffect)(() => {
                    y && (w("app_page_view", {
                        is_blog: b,
                        enter_from: h,
                        ...(0, m.PO)(N),
                        ...(0, x.oi)()
                    }), (0, u.i)().then(e => {
                        i(N.project_id, "view", e, h)
                    }))
                }, [y]), N.need_passcode && !y) ? (0, l.jsx)(eT, {
                    subdomain: a,
                    onVerificationSuccess: e => {
                        _(e)
                    }
                }) : (0, l.jsxs)("div", {
                    className: "flex h-[100dvh] w-[100vw] flex-col",
                    children: [j && (0, l.jsx)("h1", {
                        className: "sr-only absolute top-0 left-[-10000px] h-[1px] w-[1px] overflow-hidden",
                        children: j
                    }), f ? (0, l.jsx)(ek, {
                        project: N,
                        projectUrl: y,
                        screenStatus: p,
                        anchorCommentId: g,
                        blogList: v,
                        isBlogProject: b
                    }) : (0, l.jsx)(eA, {
                        project: N,
                        projectUrl: y,
                        screenStatus: p,
                        anchorCommentId: g,
                        blogList: v,
                        isBlogProject: b
                    })]
                })
            }
        },
        22374: (e, t, r) => {
            "use strict";
            r.d(t, {
                Fr: () => l,
                Ny: () => n,
                er: () => s
            });
            let l = e => {
                    let t = e || (() => {
                        var e;
                        return null == (e = window.navigator) ? void 0 : e.userAgent
                    })();
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(t)
                },
                s = e => {
                    let t = window;
                    return (t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || (e => setTimeout(() => e(Date.now()), 16)))(e)
                },
                n = e => {
                    let t = window;
                    (t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || (e => clearTimeout(e)))(e)
                }
        },
        28196: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => l
            });
            let l = {
                src: "/_next/static/media/reaction-icon.de690e61.png",
                height: 1080,
                width: 1920,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAVFBMVEX2tyPwuyPVvCj/vyhMaXH9yy73xyH2sR/3ziv7xzyflmTFmzP+iS71eDmLvI9Vqcv2yyjSkC3zbxbwVDfYryToqRziph7Vtyn/1y/guiX/20HewCst3cusAAAAGHRSTlM3qfNYALkiZ/6WybbF4uZxWd6ivt1Zmfs9OYmSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAANElEQVR4nAXBCwJAIBBAwZc+uyWKSHT/e5oheksNOD7VuJ174V2mbzmtjGf0yxyCGOEOuB8nMQHCEk6PBwAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        30467: (e, t, r) => {
            "use strict";
            r.d(t, {
                PO: () => i,
                bD: () => n,
                iI: () => a,
                v5: () => s
            });
            var l = r(72652);
            let s = () => new URLSearchParams(window.location.search).get("trace_id") || (() => {
                    let e = Date.now().toString(36),
                        t = Math.random().toString(36).substring(2, 8);
                    return "trace_".concat(e, "_").concat(t)
                })(),
                n = e => ({
                    is_backend: +!!(0, l.i)(e)
                }),
                a = e => ({
                    is_ai_app: (null == e ? void 0 : e.is_ai_app) || !1
                }),
                i = e => ({
                    project_id: null == e ? void 0 : e.project_id,
                    project_url: null == e ? void 0 : e.project_url,
                    ...a(e),
                    ...n(e)
                })
        },
        43106: (e, t, r) => {
            "use strict";
            r.d(t, {
                f: () => a
            });
            var l = r(73787),
                s = r(65547);
            let n = (0, s.createServerReference)("00d91935fa93c84c3118836d2f0aa99d902ad07c8d", s.callServer, void 0, s.findSourceMapURL, "fetchInviteInfo"),
                a = () => {
                    let [e, t] = (0, l.useState)(!1), [r, s] = (0, l.useState)(null), [a, i] = (0, l.useState)(!1), [o, c] = (0, l.useState)(null), d = async () => {
                        t(!0), r || await u()
                    }, u = async () => {
                        try {
                            i(!0), c(null);
                            let e = await n();
                            0 === e.code && e.data ? s(e.data) : c(e.message || "Failed to fetch invite info")
                        } catch (e) {
                            c(e instanceof Error ? e.message : "Failed to fetch invite info")
                        } finally {
                            i(!1)
                        }
                    };
                    return {
                        isOpen: e,
                        inviteInfo: r,
                        loading: a,
                        error: o,
                        openInviteModal: d,
                        closeInviteModal: () => {
                            t(!1), c(null)
                        },
                        fetchInviteInfo: u,
                        retryFetchInviteInfo: () => {
                            u()
                        }
                    }
                }
        },
        45661: (e, t, r) => {
            "use strict";
            r.d(t, {
                v: () => a
            });
            var l = r(73787),
                s = r(65547);
            let n = (0, s.createServerReference)("60880273b88b0ac7429a7a289d3e3b5d4bcdb18f35", s.callServer, void 0, s.findSourceMapURL, "markImpression"),
                a = e => {
                    let {
                        batchInterval: t = 1e3,
                        scene: r
                    } = e, [s, a] = (0, l.useState)(new Set), i = (0, l.useRef)(null), o = (0, l.useCallback)(e => {
                        a(t => {
                            let r = new Set(t);
                            return r.add(e), r
                        })
                    }, []);
                    return (0, l.useEffect)(() => {
                        let e = async () => {
                            if (s.size > 0) {
                                let e = Array.from(s);
                                try {
                                    a(new Set), await n(e, r)
                                } catch (e) {
                                    console.error("Failed to report project exposures:", e)
                                }
                            }
                        };
                        return i.current && clearTimeout(i.current), s.size > 0 && (i.current = setTimeout(e, t)), () => {
                            i.current && clearTimeout(i.current)
                        }
                    }, [s, t]), {
                        handleExposure: o,
                        exposedProjectsCount: s.size
                    }
                }
        },
        56866: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => i
            });
            var l = r(72011),
                s = r(91636),
                n = r.n(s);
            r(73787);
            var a = r(89498);

            function i(e) {
                let {
                    error: t = "Something went wrong!",
                    reset: r,
                    className: s
                } = e;
                return (0, l.jsx)("div", {
                    className: (0, a.cn)("flex flex-col", s),
                    children: (0, l.jsxs)("main", {
                        className: "mb-20 flex w-full flex-1 flex-col items-center justify-center px-6 sm:px-4",
                        children: [(0, l.jsx)("h2", {
                            className: "text-center text-[28px]/8 sm:text-[32px]/9 md:text-[40px]/10",
                            children: t
                        }), (0, l.jsx)("p", {
                            className: "mt-3 text-center text-sm text-black/45 sm:text-base",
                            children: "Please try again later or contact support if the problem persists."
                        }), (0, l.jsxs)("div", {
                            className: "mt-12 flex gap-4 sm:mt-16 md:mt-20",
                            children: [(0, l.jsx)("button", {
                                onClick: () => {
                                    r ? r() : window.location.reload()
                                },
                                className: "shine-effect flex h-12 w-36 cursor-pointer items-center justify-center rounded-full bg-black/95 text-sm text-white sm:h-14 sm:w-40 sm:text-base",
                                children: "Try Again"
                            }), (0, l.jsx)(n(), {
                                href: "/",
                                className: "shine-effect flex h-12 w-36 cursor-pointer items-center justify-center rounded-full border border-black/95 text-sm text-black/95 sm:h-14 sm:w-40 sm:text-base",
                                children: "Go Home"
                            })]
                        })]
                    })
                })
            }
        },
        62140: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            var l = r(72011);
            r(73787);
            var s = r(89498);

            function n(e) {
                let {
                    className: t
                } = e, r = "a-liner-gradient";
                return (0, l.jsxs)("div", {
                    className: (0, s.cn)("flex h-[100dvh] w-full items-center justify-center", t),
                    children: [(0, l.jsx)("style", {
                        children: "\n        @keyframes shimmer {\n          0% { transform: translateX(-80px) skewX(8deg); }\n          100% { transform: translateX(320px) skewX(8deg); }\n        }\n        .shimmer-rect {\n          animation: shimmer 2s infinite;\n        }\n      "
                    }), (0, l.jsxs)("svg", {
                        width: "235",
                        height: "56",
                        viewBox: "0 0 235 56",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            display: "block"
                        },
                        children: [(0, l.jsxs)("defs", {
                            children: [(0, l.jsx)("mask", {
                                id: "mask-".concat(r),
                                children: (0, l.jsx)("image", {
                                    href: "/images/default-loading.svg",
                                    width: "235",
                                    height: "56",
                                    style: {
                                        filter: "brightness(5)"
                                    }
                                })
                            }), (0, l.jsxs)("linearGradient", {
                                id: "gradient-".concat(r),
                                x1: "0%",
                                y1: "0%",
                                x2: "100%",
                                y2: "30%",
                                children: [(0, l.jsx)("stop", {
                                    offset: "0%",
                                    stopColor: "transparent"
                                }), (0, l.jsx)("stop", {
                                    offset: "10%",
                                    stopColor: "rgba(255,255,255,0.3)"
                                }), (0, l.jsx)("stop", {
                                    offset: "40%",
                                    stopColor: "rgba(255,255,255,1)"
                                }), (0, l.jsx)("stop", {
                                    offset: "60%",
                                    stopColor: "rgba(255,255,255,1)"
                                }), (0, l.jsx)("stop", {
                                    offset: "90%",
                                    stopColor: "rgba(255,255,255,0.3)"
                                }), (0, l.jsx)("stop", {
                                    offset: "100%",
                                    stopColor: "transparent"
                                })]
                            })]
                        }), (0, l.jsx)("image", {
                            href: "/images/default-loading.svg",
                            width: "235",
                            height: "56"
                        }), (0, l.jsx)("g", {
                            mask: "url(#mask-".concat(r, ")"),
                            style: {
                                mixBlendMode: "screen"
                            },
                            children: (0, l.jsx)("rect", {
                                x: "-80",
                                y: "0",
                                width: "100",
                                height: "56",
                                fill: "url(#gradient-".concat(r, ")"),
                                className: "shimmer-rect"
                            })
                        })]
                    })]
                })
            }
        },
        66360: (e, t, r) => {
            "use strict";

            function l(e) {
                return e > 1e3 && e < 1e6 ? (e / 1e3).toFixed(1) + "K" : e > 1e6 ? (e / 1e6).toFixed(1) + "M" : e > 1e9 ? (e / 1e9).toFixed(1) + "B" : e
            }
            r.d(t, {
                Z: () => l
            });
            "undefined" != typeof Intl && "Segmenter" in Intl && new Intl.Segmenter(void 0, {
                granularity: "word"
            }), RegExp("^[\\p{P}\\p{Zs}]+$", "u")
        },
        67861: (e, t, r) => {
            "use strict";
            r.d(t, {
                V: () => i.Vt,
                N: () => p
            });
            var l = r(3417),
                s = r(73787),
                n = r(65547);
            let a = (0, n.createServerReference)("700ecf839a96d67033c42bb24780f0a3ef6886e68e", n.callServer, void 0, n.findSourceMapURL, "remixProject");
            var i = r(85385),
                o = r(11569),
                c = r(74731),
                d = r(27743),
                u = r(37600),
                m = r(58695);
            let x = e => ({
                    remix: "Failed to build on this project, please try again later",
                    create: "Failed to create project, please try again later"
                })[e],
                p = () => {
                    let e = (0, l.useRouter)(),
                        t = (0, c.I)(),
                        {
                            checkAuth: r
                        } = (0, m.M)(),
                        [n, i] = (0, s.useState)(!1);
                    return {
                        remixAction: (0, s.useCallback)(async (t, l, s) => r(async () => {
                            i(!0);
                            try {
                                let r = await (0, o.i)(),
                                    n = await a(t, r, s);
                                if (n.data) {
                                    let t = {
                                        enter_from: l
                                    };
                                    "create" === l && (t.createWeb = "true"), e.push("".concat((0, d.getOrigin)(), "/editor/").concat(n.data.project_id, "?").concat(new URLSearchParams(t).toString()))
                                } else(0, u.P)({
                                    message: x(l),
                                    type: "error"
                                })
                            } catch (e) {
                                console.log("error", e), (0, u.P)({
                                    message: x(l),
                                    type: "error"
                                })
                            } finally {
                                i(!1)
                            }
                            setTimeout(() => {
                                i(!1)
                            }, 1e3)
                        }, {
                            title: "Want to build on this project?",
                            description: "Log in to customize and make it your own.",
                            cancelText: "Cancel",
                            confirmText: "Log in"
                        })(), [t, e]),
                        isRemixing: n
                    }
                }
        },
        68678: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => s
            });
            var l = r(65547);
            let s = (0, l.createServerReference)("60e56bfe7cbf89b2ab97e0faf9599cd5d58674e9df", l.callServer, void 0, l.findSourceMapURL, "favoriteProject")
        },
        85385: (e, t, r) => {
            "use strict";
            r.d(t, {
                FW: () => d,
                Hx: () => a,
                V: () => i,
                V2: () => c,
                Vt: () => n,
                lf: () => u,
                rh: () => o,
                v1: () => s
            });
            var l = r(63335);
            let s = "0000000000000000000000000000",
                n = "00000000-0000-0000-0000-000000000000";
            l.env.JWT_SECRET_KEY;
            let a = "first_time_favorite_users",
                i = "first_time_new_mcp_tips_for_backend",
                o = "new_mcp_integrations_viewed",
                c = "first_time_view_ai_app",
                d = 3,
                u = 500
        },
        93392: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c,
                ErrorBoundary: () => o
            });
            var l = r(72011),
                s = r(53130),
                n = r(73787),
                a = r(92394);
            let i = {
                maxRetries: 3,
                reportToSentry: !0
            };
            class o extends n.Component {
                static getDerivedStateFromError(e) {
                    return {
                        hasError: !0,
                        error: e
                    }
                }
                componentDidCatch(e, t) {
                    let l = this.options.componentName || "Unknown";
                    if (a.Ay.error("Error Boundary caught error in ".concat(l), e, {
                            componentName: l,
                            errorInfo: t.componentStack,
                            retryCount: this.state.retryCount
                        }), this.options.reportToSentry && r.e(4286).then(r.bind(r, 14286)).then(r => {
                            r.captureException(e, {
                                tags: {
                                    component: l,
                                    errorBoundary: !0
                                },
                                extra: {
                                    errorInfo: t,
                                    retryCount: this.state.retryCount
                                }
                            })
                        }).catch(e => {
                            a.Ay.error("Failed to report error to Sentry", e)
                        }), this.options.onError) try {
                        this.options.onError(e, t)
                    } catch (e) {
                        a.Ay.error("Error in custom error handler", e)
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
                        children: r,
                        fallback: l,
                        renderError: s
                    } = this.props;
                    return e && t ? s ? s(t, this.handleRetry) : l || this.renderDefaultError(t) : r
                }
                constructor(e) {
                    super(e), this.handleRetry = () => {
                        let {
                            maxRetries: e = 3
                        } = this.options;
                        if (this.state.retryCount >= e) return void a.Ay.warn("Max retries reached (".concat(e, "). Please refresh the page."));
                        if (a.Ay.info("Error Boundary retry attempt", {
                                retryCount: this.state.retryCount + 1,
                                maxRetries: e,
                                componentName: this.options.componentName
                            }), this.options.onRetry) try {
                            this.options.onRetry()
                        } catch (e) {
                            a.Ay.error("Error in custom retry handler", e)
                        }
                        this.setState({
                            hasError: !1,
                            error: null,
                            errorInfo: null,
                            retryCount: this.state.retryCount + 1
                        })
                    }, this.handleRefresh = () => {
                        window.location.reload()
                    }, this.renderDefaultError = e => (0, l.jsxs)("div", {
                        className: "mx-auto flex min-h-[120px] w-full max-w-[280px] items-center justify-center gap-2 p-2 sm:max-w-sm sm:gap-3 sm:p-4",
                        children: [(0, l.jsx)("div", {
                            className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#55644A]/10 sm:h-8 sm:w-8",
                            children: (0, l.jsx)(s.sFm, {
                                className: "h-3 w-3 text-[#55644A] sm:h-4 sm:w-4"
                            })
                        }), (0, l.jsx)("h3", {
                            className: "text-sm font-medium text-[#55644A] sm:text-base",
                            children: "Something went wrong"
                        })]
                    }), this.state = {
                        hasError: !1,
                        error: null,
                        errorInfo: null,
                        retryCount: 0
                    }, this.options = { ...i,
                        ...e
                    }
                }
            }
            let c = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t.componentName || e.displayName || e.name || "Component",
                    s = s => (0, l.jsx)(o, { ...t,
                        componentName: r,
                        children: (0, l.jsx)(e, { ...s
                        })
                    });
                return s.displayName = "withErrorBoundary(".concat(r, ")"), s
            }
        },
        94376: (e, t, r) => {
            "use strict";
            r.d(t, {
                a: () => s
            });
            var l = r(65547);
            let s = (0, l.createServerReference)("60bfe35ddc35505f6b1d7508efbaee7cddc15a0431", l.callServer, void 0, l.findSourceMapURL, "verifyPasscode")
        },
        94749: (e, t, r) => {
            "use strict";
            r.d(t, {
                h: () => s
            });
            var l = r(65547);
            let s = (0, l.createServerReference)("405fae431051ff7fac64ae1854283fd0cc7b6864f1", l.callServer, void 0, l.findSourceMapURL, "getBatchProjects")
        }
    },
    e => {
        e.O(0, [5678, 1655, 2661, 3137, 6316, 8654, 1636, 9212, 4620, 4727, 6039, 3888, 7998, 2597, 7070, 5869, 5783, 1813, 8581, 7358], () => e(e.s = 6050)), _N_E = e.O()
    }
]);