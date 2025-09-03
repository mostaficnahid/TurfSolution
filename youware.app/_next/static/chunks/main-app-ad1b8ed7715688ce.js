try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6ffceb0b-f3ba-4291-84af-3c6400818c56", e._sentryDebugIdIdentifier = "sentry-dbid-6ffceb0b-f3ba-4291-84af-3c6400818c56")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7358], {
        30562: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                onRouterTransitionStart: () => l
            });
            var s = a(82470),
                r = a(54905),
                i = a(79513);
            let o = () => "https://www.youware.com".includes("staging") && !0,
                n = () => !o();
            globalThis._sentryRewritesTunnelPath = void 0, globalThis.SENTRY_RELEASE = void 0, globalThis._sentryBasePath = void 0, globalThis._sentryRewriteFramesAssetPrefixPath = "", globalThis._sentryAssetPrefix = void 0, globalThis._sentryExperimentalThirdPartyOriginStackFrames = void 0, globalThis._sentryRouteManifest = '{"dynamicRoutes":[{"path":"/auth/:provider","regex":"^/auth/([^/]+)$","paramNames":["provider"]},{"path":"/editor/:projectID","regex":"^/editor/([^/]+)$","paramNames":["projectID"]},{"path":"/invite/:code","regex":"^/invite/([^/]+)$","paramNames":["code"]},{"path":"/profile/:userId","regex":"^/profile/([^/]+)$","paramNames":["userId"]},{"path":"/project/:slug","regex":"^/project/([^/]+)$","paramNames":["slug"]}],"staticRoutes":[{"path":"/"},{"path":"/affiliate"},{"path":"/ai-website-builder"},{"path":"/plugin"},{"path":"/@loginlogin"},{"path":"/@subscriptionsubscription"},{"path":"/blog"},{"path":"/create"},{"path":"/create-from"},{"path":"/home"},{"path":"/legal/credits"},{"path":"/legal/mobile/privacy-policy"},{"path":"/legal/mobile/terms-of-service"},{"path":"/legal/privacy-policy"},{"path":"/legal/subscriber-terms"},{"path":"/login"},{"path":"/notification"},{"path":"/push/route"},{"path":"/ready"},{"path":"/results"},{"path":"/sso"},{"path":"/subscription"},{"path":"/test-event"}]}', s.Ts({
                dsn: "https://c9dd75b7518e5c60e99d77b107e89ddc@o4509474635644928.ingest.us.sentry.io/4509474637021191",
                integrations: [r.w()],
                enabled: !0,
                tracesSampleRate: o() ? 1 : .01 * !!n(),
                replaysSessionSampleRate: 0,
                replaysOnErrorSampleRate: 0,
                debug: !1,
                _experiments: {
                    enableLogs: !0
                },
                environment: (n() ? "production" : o() ? "staging" : "development") || "unknown"
            });
            let l = i.Nc
        },
        50053: (e, t, a) => {
            Promise.resolve().then(a.t.bind(a, 51560, 23)), Promise.resolve().then(a.t.bind(a, 37576, 23)), Promise.resolve().then(a.t.bind(a, 73625, 23)), Promise.resolve().then(a.t.bind(a, 60145, 23)), Promise.resolve().then(a.t.bind(a, 40349, 23)), Promise.resolve().then(a.t.bind(a, 70727, 23)), Promise.resolve().then(a.t.bind(a, 31461, 23)), Promise.resolve().then(a.bind(a, 81573))
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [5783, 1813, 8581], () => (t(30562), t(7013), t(50053))), _N_E = e.O()
    }
]);