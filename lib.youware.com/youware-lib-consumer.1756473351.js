! function(e) {
    "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    "use strict";
    Object.defineProperty(document, "domain", {
        value: document.domain,
        writable: !1,
        configurable: !1
    });
    const e = Object.getOwnPropertyDescriptor(Document.prototype, "cookie"),
        t = ["_ga", "_gcl_au", "client_id", "yw_id", "sidebar_expanded", "_ga_6Z2G4L6M8E", "install_flag", "cf_clearance", "passcode-session", "session_v2", "staging_session_v2", "x-yw-access"];
    async function r(e) {
        return new Promise((t, r) => {
            const n = new FileReader;
            n.onloadend = () => {
                const e = n.result.split(",")[1];
                t(e)
            }, n.onerror = r, n.readAsDataURL(e)
        })
    }

    function n(e) {
        let t;
        t = e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        const r = String.fromCharCode.apply(null, Array.from(t));
        return btoa(r)
    }
    Object.defineProperty(document, "cookie", {
        get: function() {
            const r = e ? .get ? .call(this);
            return (n = r) ? n.split(";").map(e => e.trim()).filter(e => {
                const r = e.split("=")[0].trim();
                return !t.includes(r)
            }).join("; ") : n;
            var n
        },
        set: function(t) {
            const r = function(e) {
                const t = e.split(";").map(e => e.trim()).filter(e => !e.toLowerCase().startsWith("domain="));
                return t.push(`domain=${location.hostname}`), t.join("; ")
            }(t);
            return e ? .set ? .call(this, r)
        },
        configurable: !1
    });
    const i = {
        chunkSize: 16384,
        highWaterMark: 65536
    };
    let s = null;
    const o = window.fetch;
    let a = {
        urlPatterns: [],
        messageManager: null
    };
    const l = new Map;

    function d(e) {
        const t = [];
        if (!e) return {
            entries: t
        };
        if (e instanceof Headers) e.forEach((e, r) => {
            t.push([r, e])
        });
        else if (Array.isArray(e)) t.push(...e);
        else
            for (const [r, n] of Object.entries(e)) t.push([r, String(n)]);
        return {
            entries: t
        }
    }
    async function g(e, t) {
        let g, c, f = null;
        if (e instanceof Request ? (c = e, g = c.url, f = e.body, t && ("body" in t && (f = t.body), c = new Request(c, t))) : (g = e instanceof URL ? e.toString() : e, f = t ? .body, c = new Request(g, t)), ! function(e) {
                return a.urlPatterns.some(t => e.includes(t))
            }(g)) return o(e, t);
        const h = `${Date.now()}-${Math.random().toString(36).substring(2,9)}`;
        try {
            const e = new AbortController;
            l.set(h, e), c.signal && c.signal.addEventListener("abort", () => {
                e.abort(), s.sendEvent("fetch-proxy:stream-control", {
                    requestId: h,
                    action: "abort"
                })
            });
            const t = await async function(e) {
                    if (null == e) return {
                        type: "null",
                        data: null
                    };
                    if ("string" == typeof e) try {
                        return JSON.parse(e), {
                            type: "json",
                            data: e
                        }
                    } catch {
                        return {
                            type: "string",
                            data: e
                        }
                    }
                    if (e instanceof URLSearchParams) return {
                        type: "urlsearchparams",
                        data: e.toString()
                    };
                    if (e instanceof FormData) {
                        const t = [],
                            n = [];
                        return e.forEach((e, i) => {
                            if (e instanceof File) {
                                const s = r(e).then(r => {
                                    t.push([i, {
                                        name: e.name,
                                        type: e.type,
                                        size: e.size,
                                        lastModified: e.lastModified,
                                        content: r
                                    }])
                                });
                                n.push(s)
                            } else t.push([i, e])
                        }), await Promise.all(n), {
                            type: "formdata",
                            data: t
                        }
                    }
                    if (e instanceof Blob) {
                        const t = await r(e);
                        return {
                            type: "blob",
                            data: {
                                type: e.type,
                                size: e.size,
                                content: t
                            }
                        }
                    }
                    if (e instanceof ArrayBuffer) return {
                        type: "arraybuffer",
                        data: n(e)
                    };
                    if (ArrayBuffer.isView(e)) return {
                        type: "arraybuffer",
                        data: n(e)
                    };
                    if (e instanceof ReadableStream) {
                        const t = new Response(e),
                            n = await t.blob();
                        return {
                            type: "stream",
                            data: await r(n)
                        }
                    }
                    throw new Error(`Unsupported body type: ${Object.prototype.toString.call(e)}`)
                }(f),
                o = {
                    requestId: h,
                    url: g,
                    method: c.method,
                    headers: d(c.headers),
                    body: t,
                    credentials: c.credentials,
                    mode: c.mode,
                    cache: c.cache,
                    redirect: c.redirect,
                    referrer: c.referrer,
                    referrerPolicy: c.referrerPolicy,
                    integrity: c.integrity,
                    keepalive: c.keepalive,
                    signal: c.signal ? {
                        aborted: c.signal.aborted
                    } : void 0
                };
            if (!s) throw new Error("Fetch proxy not initialized. Call initializeFetchInterceptor with messageManager first.");
            const a = await s.invoke("fetch-proxy:fetch", o),
                p = (u = a.headers, new Headers(u.entries)),
                w = function(e, t = {}, r, n) {
                    const s = { ...i,
                        ...t
                    };
                    let o = 0,
                        a = !1,
                        l = null,
                        d = null;
                    return new ReadableStream({
                        async start(t) {
                            l = t;
                            const i = r.onEvent("fetch-proxy:stream-control", t => {
                                    if (t.requestId === e) switch (t.action) {
                                        case "end":
                                            !a && l && (l.close(), a = !0, d ? .());
                                            break;
                                        case "error":
                                            !a && l && (l.error(new Error(t.error || "Stream error")), a = !0, d ? .());
                                            break;
                                        case "abort":
                                            !a && l && (l.error(new DOMException("Stream aborted", "AbortError")), a = !0, d ? .())
                                    }
                                }),
                                s = () => {
                                    !a && l && (l.error(new DOMException("Stream aborted", "AbortError")), a = !0, d ? .())
                                };
                            n && n.addEventListener("abort", s), d = () => {
                                i(), n && n.removeEventListener("abort", s)
                            }
                        },
                        async pull(t) {
                            if (!a) try {
                                const n = await r.invoke("fetch-proxy:stream-read", {
                                    requestId: e,
                                    chunkIndex: o
                                });
                                if (n.done) a || (t.close(), a = !0, d ? .());
                                else {
                                    const e = new Uint8Array(n.chunk);
                                    t.enqueue(e), o++
                                }
                            } catch (n) {
                                console.error("[Stream Proxy] Error in pull:", n), a || (t.error(n), a = !0, d ? .())
                            }
                        },
                        cancel(t) {
                            a = !0, r.sendEvent("fetch-proxy:stream-control", {
                                requestId: e,
                                action: "abort",
                                error: t ? .toString()
                            }), d ? .()
                        }
                    }, {
                        highWaterMark: s.highWaterMark,
                        size: e => e.byteLength
                    })
                }(h, {}, s, e.signal),
                y = new Response(w, {
                    status: a.status,
                    statusText: a.statusText,
                    headers: p
                });
            return Object.defineProperties(y, {
                url: {
                    value: a.url,
                    writable: !1
                },
                redirected: {
                    value: a.redirected,
                    writable: !1
                },
                type: {
                    value: a.type,
                    writable: !1
                },
                ok: {
                    value: a.ok,
                    writable: !1
                }
            }), y
        } catch (p) {
            throw l.delete(h), p
        }
        var u
    }

    function c(e) {
        if (!e.messageManager) throw new Error("messageManager is required in config");
        if (!e.urlPatterns) throw new Error("urlPatterns is required in config");
        var t;
        t = e, a = { ...a,
            ...t
        }, t.messageManager && (s = t.messageManager), t.urlPatterns && (a.urlPatterns = t.urlPatterns), window.fetch = g, "undefined" != typeof globalThis && (globalThis.fetch = g)
    }
    const f = new class {
        isParent;
        customTargetWindow;
        customTargetOrigin;
        eventHandlers = {};
        invokeHandlers = {};
        pending;
        invokeCallbacks = new Map;
        allowedOrigins;
        iframeSelector;
        generateMessageId;
        logger;
        constructor(e) {
            this.isParent = e.isParent, this.pending = new Map, this.allowedOrigins = e.allowedOrigins || ["youware\\.app", "yourware\\.app", "yourware\\.so", "youware\\.com", "localhost|127\\.0\\.0\\.1", "csb\\.app"], this.iframeSelector = e.iframeSelector || "#youware-runtime", this.generateMessageId = e.generateMessageId || this.defaultGenerateMessageId, this.logger = e.logger, this.logger ? .info("MessageManager initialized", {
                envType: this.isParent ? "parent" : "child",
                allowedOrigins: this.allowedOrigins,
                iframeSelector: this.iframeSelector
            }), this.listen()
        }
        defaultGenerateMessageId() {
            return Date.now() + Math.random().toString(36).substring(2)
        }
        get targetWindow() {
            return this.customTargetWindow ? this.customTargetWindow : "undefined" != typeof window ? this.isParent ? document.querySelector(this.iframeSelector) ? .contentWindow : window.parent : void 0
        }
        get targetOrigin() {
            return this.customTargetOrigin ? this.customTargetOrigin : "*"
        }
        allowOrigin(e) {
            const t = this.allowedOrigins.some(t => new RegExp(t).test(e));
            return t || this.logger ? .warn("Origin rejected", {
                origin: e,
                allowedPatterns: this.allowedOrigins
            }), t
        }
        setTarget(e) {
            this.customTargetWindow = e.window, this.customTargetOrigin = e.origin, this.logger ? .info("Target updated", {
                hasWindow: !!e.window,
                origin: e.origin
            })
        }
        addAllowedOrigin(e) {
            this.allowedOrigins.includes(e) || (this.allowedOrigins.push(e), this.logger ? .info("Added allowed origin pattern", {
                pattern: e,
                totalPatterns: this.allowedOrigins.length
            }))
        }
        removeAllowedOrigin(e) {
            const t = this.allowedOrigins.indexOf(e);
            t > -1 && (this.allowedOrigins.splice(t, 1), this.logger ? .info("Removed allowed origin pattern", {
                pattern: e,
                totalPatterns: this.allowedOrigins.length
            }))
        }
        sendEvent(e, t, r = 3, n = 1e3) {
            const i = this.generateMessageId(),
                s = {
                    id: i,
                    type: "event",
                    event: e,
                    data: t
                };
            this.logger ? .info("Sending event", {
                event: e,
                messageId: i,
                dataType: typeof t,
                maxRetries: r,
                timeout: n
            }), this.sendMessageWithRetry(s, r, n)
        }
        sendEventWithTransferable(e, t, r, n = 3, i = 1e3) {
            const s = this.generateMessageId(),
                o = {
                    id: s,
                    type: "event",
                    event: e,
                    data: t
                };
            this.logger ? .info("Sending event with transferable", {
                event: e,
                messageId: s,
                dataType: typeof t,
                transferableCount: r.length,
                maxRetries: n,
                timeout: i
            }), this.sendMessageWithRetry(o, n, i, r)
        }
        invoke(e, t) {
            return new Promise((r, n) => {
                const i = this.generateMessageId(),
                    s = {
                        id: i,
                        type: "invoke",
                        event: e,
                        data: t
                    };
                this.logger ? .info("Invoking remote method", {
                    event: e,
                    messageId: i,
                    dataType: typeof t
                }), this.invokeCallbacks.set(i, {
                    resolve: r,
                    reject: n
                });
                const o = setTimeout(() => {
                    if (this.invokeCallbacks.get(i)) {
                        this.invokeCallbacks.delete(i);
                        const t = `Invoke ACK timeout: ${e}`;
                        this.logger ? .error(t, {
                            event: e,
                            messageId: i
                        }), n(new Error(t))
                    }
                }, 5e3);
                this.pending.set(i, {
                    timer: o,
                    attempt: 0
                }), this.targetWindow ? .postMessage(s, this.targetOrigin)
            })
        }
        invokeWithTransferable(e, t, r) {
            return new Promise((n, i) => {
                const s = this.generateMessageId(),
                    o = {
                        id: s,
                        type: "invoke",
                        event: e,
                        data: t
                    };
                this.logger ? .info("Invoking remote method with transferable", {
                    event: e,
                    messageId: s,
                    dataType: typeof t,
                    transferableCount: r.length
                }), this.invokeCallbacks.set(s, {
                    resolve: n,
                    reject: i
                });
                const a = setTimeout(() => {
                    if (this.invokeCallbacks.get(s)) {
                        this.invokeCallbacks.delete(s);
                        const t = `Invoke ACK timeout: ${e}`;
                        this.logger ? .error(t, {
                            event: e,
                            messageId: s
                        }), i(new Error(t))
                    }
                }, 5e3);
                this.pending.set(s, {
                    timer: a,
                    attempt: 0
                }), this.targetWindow ? .postMessage(o, this.targetOrigin, r)
            })
        }
        sendMessageWithRetry(e, t, r, n) {
            const i = (s = 0) => {
                if (s > 0 && this.logger ? .warn("Message retry attempt", {
                        event: e.event,
                        messageId: e.id,
                        attempt: s + 1,
                        maxAttempts: t + 1
                    }), this.targetWindow ? .postMessage(e, this.targetOrigin, n), "event" === e.type) {
                    const n = setTimeout(() => {
                        if (s >= t) return this.pending.delete(e.id), void this.logger ? .error("Message failed after all retries", {
                            event: e.event,
                            messageId: e.id,
                            totalAttempts: s + 1
                        });
                        i(s + 1)
                    }, r * 2 ** s);
                    this.pending.set(e.id, {
                        timer: n,
                        attempt: s
                    })
                }
            };
            i()
        }
        listen() {
            "undefined" != typeof window && (this.logger ? .info("Started listening for messages"), window.addEventListener("message", e => {
                if (!this.allowOrigin(e.origin) || !e.data ? .type || !e.data ? .id) return;
                const t = e.data;
                switch (this.logger ? .info("Received message", {
                    type: t.type,
                    event: t.event,
                    messageId: t.id,
                    origin: e.origin
                }), t.type) {
                    case "event":
                        this.sendAck(t.id, e.origin);
                        const r = this.eventHandlers[t.event];
                        r && r.length > 0 && r.forEach(e => {
                            try {
                                e(t.data)
                            } catch (r) {
                                this.logger ? .error("Event handler error", {
                                    event: t.event,
                                    error: r instanceof Error ? r.message : String(r)
                                })
                            }
                        });
                        break;
                    case "invoke":
                        this.sendAck(t.id, e.origin), this.handleInvoke(t, e.origin);
                        break;
                    case "response":
                        this.handleResponse(t);
                        break;
                    case "ack":
                        this.handleAck(t)
                }
            }))
        }
        sendAck(e, t) {
            const r = {
                id: this.generateMessageId(),
                type: "ack",
                event: "ack",
                originalId: e
            };
            this.targetWindow ? .postMessage(r, t)
        }
        async handleInvoke(e, t) {
            try {
                const r = this.invokeHandlers[e.event];
                if (!r) {
                    const t = `No handler for invoke: ${e.event}`;
                    throw this.logger ? .error(t, {
                        event: e.event,
                        messageId: e.id
                    }), new Error(t)
                }
                this.logger ? .debug("Executing invoke handler", {
                    event: e.event,
                    messageId: e.id
                });
                const n = await r(e.data),
                    i = {
                        id: this.generateMessageId(),
                        type: "response",
                        event: "response",
                        originalId: e.id,
                        data: n
                    },
                    s = this.extractTransferableFromResult(n);
                s.length > 0 ? (this.logger ? .debug("Sending response with transferable objects", {
                    event: e.event,
                    originalId: e.id,
                    transferableCount: s.length
                }), this.targetWindow ? .postMessage(i, t, s)) : this.targetWindow ? .postMessage(i, t)
            } catch (r) {
                const n = r instanceof Error ? r.message : String(r);
                this.logger ? .error("Invoke handler failed", {
                    event: e.event,
                    messageId: e.id,
                    error: n
                });
                const i = {
                    id: this.generateMessageId(),
                    type: "response",
                    event: "response",
                    originalId: e.id,
                    error: n
                };
                this.targetWindow ? .postMessage(i, t)
            }
        }
        extractTransferableFromResult(e) {
            const t = [];
            if (!e) return t;
            if (e.buffer instanceof ArrayBuffer) t.push(e.buffer);
            else if (e instanceof ArrayBuffer) t.push(e);
            else if ("object" == typeof e)
                for (const r of Object.values(e)) r instanceof ArrayBuffer ? t.push(r) : r && "object" == typeof r && "buffer" in r && r.buffer instanceof ArrayBuffer && t.push(r.buffer);
            return t
        }
        handleResponse(e) {
            const t = this.invokeCallbacks.get(e.originalId);
            t ? (e.error ? (this.logger ? .error("Invoke failed with error", {
                originalId: e.originalId,
                error: e.error
            }), t.reject(new Error(e.error))) : (this.logger ? .info("Invoke completed successfully", {
                originalId: e.originalId,
                resultType: typeof e.data
            }), t.resolve(e.data)), this.invokeCallbacks.delete(e.originalId)) : this.logger ? .warn("No callback found for response", {
                originalId: e.originalId
            })
        }
        handleAck(e) {
            const {
                originalId: t
            } = e, r = this.pending.get(t);
            r ? (clearTimeout(r.timer), this.pending.delete(t), this.logger ? .debug("ACK received, cleared timeout", {
                originalId: t
            })) : this.logger ? .warn("Received ACK for unknown message", {
                originalId: t
            })
        }
        onEvent(e, t) {
            const r = e;
            return this.eventHandlers[r] || (this.eventHandlers[r] = []), this.eventHandlers[r].push(t), this.logger ? .info("Registered event handler", {
                event: r,
                handlerCount: this.eventHandlers[r].length
            }), () => {
                const e = this.eventHandlers[r];
                if (e) {
                    const n = e.indexOf(t);
                    n > -1 && (e.splice(n, 1), this.logger ? .info("Removed specific event handler", {
                        event: r,
                        remainingHandlers: e.length
                    }), 0 === e.length && delete this.eventHandlers[r])
                }
            }
        }
        onInvoke(e, t) {
            this.invokeHandlers[e] = t, this.logger ? .info("Registered invoke handler", {
                event: e
            })
        }
        offInvoke(e) {
            delete this.invokeHandlers[e], this.logger ? .info("Removed invoke handler", {
                event: e
            })
        }
        updateLogConfig(e) {
            void 0 !== e.logger && (this.logger = e.logger), this.logger ? .info("Log configuration updated", e)
        }
        destroy() {
            this.logger ? .info("Starting MessageManager cleanup"), this.pending.forEach((e, t) => {
                clearTimeout(e.timer)
            }), this.pending.clear(), this.invokeCallbacks.forEach((e, t) => {
                e.reject(new Error("MessageManager destroyed"))
            }), this.invokeCallbacks.clear(), this.eventHandlers = {}, this.invokeHandlers = {}, this.logger ? .info("MessageManager destroyed")
        }
    }({
        isParent: !1
    });
    ! function() {
        try {
            c({
                urlPatterns: ["api.youware.com/public/v1/ai/", "backend.youware.com"],
                messageManager: f
            })
        } catch (e) {
            console.error("Failed to initialize fetch interceptor:", e)
        }
    }();
    const h = {
        innerRequest: function(e, t) {
            if (!e) throw new Error("[ywSdk] innerRequest apiName parameter cannot be null or undefined");
            return f.invoke("innerRequest", {
                apiName: e,
                params: t
            })
        },
        getLoginStatus: async function() {
            return f.invoke("getLoginStatus", void 0)
        },
        requestLogin: async function(e) {
            return f.invoke("requestLogin", e)
        }
    };

    function u(e) {
        if ("string" == typeof e && e.includes("${")) return t = e,
            function(e) {
                return t.replace(/\${(\w+)}/g, function(t, r) {
                    return void 0 !== e[r] ? e[r] : t
                })
            };
        if ("object" == typeof e && null !== e) {
            const t = Array.isArray(e) ? [] : {};
            for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = u(e[r]));
            return t
        }
        var t;
        return e
    }

    function p(e) {
        return null === e || "object" != typeof e ? e : (Object.keys(e).forEach(t => {
            null !== e[t] && "object" == typeof e[t] && p(e[t])
        }), Object.freeze(e))
    }
    Object.defineProperty(window, "ywSdk", {
        value: h,
        writable: !1,
        configurable: !1
    }), async function() {
        const e = document.getElementById("yw-manifest-data");
        if (!e) return;
        const t = e.textContent || "";
        let r;
        try {
            r = JSON.parse(t)
        } catch (n) {
            console.error("Error parsing yw_manifest.json (inside yw-manifest-data script block) failed:", n);
            try {
                const e = await fetch("/yw_manifest.json");
                r = await e.json()
            } catch (i) {
                return void console.error("Error parsing yw_manifest.json (fetch from /yw_manifest.json) failed:", i)
            }
        }
        try {
            const e = p(u(r));
            Object.defineProperty(window, "ywConfig", {
                value: e,
                writable: !1,
                configurable: !1
            })
        } catch (n) {
            console.error("Error processing ywConfig:", n)
        }
    }()
});