module.exports = [
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/useSendComponentCallOnce.BHZMuo6E.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>g,
    "u",
    ()=>nt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function U(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var E = {
    exports: {}
}, T = {
    exports: {}
}, S;
function H() {
    return S || (S = 1, function() {
        var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = {
            // Bit-wise rotation left
            rotl: function(c, u) {
                return c << u | c >>> 32 - u;
            },
            // Bit-wise rotation right
            rotr: function(c, u) {
                return c << 32 - u | c >>> u;
            },
            // Swap big-endian to little-endian and vice versa
            endian: function(c) {
                if (c.constructor == Number) return l.rotl(c, 8) & 16711935 | l.rotl(c, 24) & 4278255360;
                for(var u = 0; u < c.length; u++)c[u] = l.endian(c[u]);
                return c;
            },
            // Generate an array of any length of random bytes
            randomBytes: function(c) {
                for(var u = []; c > 0; c--)u.push(Math.floor(Math.random() * 256));
                return u;
            },
            // Convert a byte array to big-endian 32-bit words
            bytesToWords: function(c) {
                for(var u = [], a = 0, f = 0; a < c.length; a++, f += 8)u[f >>> 5] |= c[a] << 24 - f % 32;
                return u;
            },
            // Convert big-endian 32-bit words to a byte array
            wordsToBytes: function(c) {
                for(var u = [], a = 0; a < c.length * 32; a += 8)u.push(c[a >>> 5] >>> 24 - a % 32 & 255);
                return u;
            },
            // Convert a byte array to a hex string
            bytesToHex: function(c) {
                for(var u = [], a = 0; a < c.length; a++)u.push((c[a] >>> 4).toString(16)), u.push((c[a] & 15).toString(16));
                return u.join("");
            },
            // Convert a hex string to a byte array
            hexToBytes: function(c) {
                for(var u = [], a = 0; a < c.length; a += 2)u.push(parseInt(c.substr(a, 2), 16));
                return u;
            },
            // Convert a byte array to a base-64 string
            bytesToBase64: function(c) {
                for(var u = [], a = 0; a < c.length; a += 3)for(var f = c[a] << 16 | c[a + 1] << 8 | c[a + 2], d = 0; d < 4; d++)a * 8 + d * 6 <= c.length * 8 ? u.push(s.charAt(f >>> 6 * (3 - d) & 63)) : u.push("=");
                return u.join("");
            },
            // Convert a base-64 string to a byte array
            base64ToBytes: function(c) {
                c = c.replace(/[^A-Z0-9+\/]/ig, "");
                for(var u = [], a = 0, f = 0; a < c.length; f = ++a % 4)f != 0 && u.push((s.indexOf(c.charAt(a - 1)) & Math.pow(2, -2 * f + 8) - 1) << f * 2 | s.indexOf(c.charAt(a)) >>> 6 - f * 2);
                return u;
            }
        };
        T.exports = l;
    }()), T.exports;
}
var F, m;
function x() {
    if (m) return F;
    m = 1;
    var s = {
        // UTF-8 encoding
        utf8: {
            // Convert a string to a byte array
            stringToBytes: function(l) {
                return s.bin.stringToBytes(unescape(encodeURIComponent(l)));
            },
            // Convert a byte array to a string
            bytesToString: function(l) {
                return decodeURIComponent(escape(s.bin.bytesToString(l)));
            }
        },
        // Binary encoding
        bin: {
            // Convert a string to a byte array
            stringToBytes: function(l) {
                for(var c = [], u = 0; u < l.length; u++)c.push(l.charCodeAt(u) & 255);
                return c;
            },
            // Convert a byte array to a string
            bytesToString: function(l) {
                for(var c = [], u = 0; u < l.length; u++)c.push(String.fromCharCode(l[u]));
                return c.join("");
            }
        }
    };
    return F = s, F;
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var B, O;
function N() {
    if (O) return B;
    O = 1, B = function(c) {
        return c != null && (s(c) || l(c) || !!c._isBuffer);
    };
    function s(c) {
        return !!c.constructor && typeof c.constructor.isBuffer == "function" && c.constructor.isBuffer(c);
    }
    function l(c) {
        return typeof c.readFloatLE == "function" && typeof c.slice == "function" && s(c.slice(0, 0));
    }
    return B;
}
var A;
function V() {
    return A || (A = 1, function() {
        var s = H(), l = x().utf8, c = N(), u = x().bin, a = function(f, d) {
            f.constructor == String ? d && d.encoding === "binary" ? f = u.stringToBytes(f) : f = l.stringToBytes(f) : c(f) ? f = Array.prototype.slice.call(f, 0) : !Array.isArray(f) && f.constructor !== Uint8Array && (f = f.toString());
            for(var o = s.bytesToWords(f), y = f.length * 8, r = 1732584193, t = -271733879, e = -1732584194, n = 271733878, i = 0; i < o.length; i++)o[i] = (o[i] << 8 | o[i] >>> 24) & 16711935 | (o[i] << 24 | o[i] >>> 8) & 4278255360;
            o[y >>> 5] |= 128 << y % 32, o[(y + 64 >>> 9 << 4) + 14] = y;
            for(var p = a._ff, h = a._gg, v = a._hh, _ = a._ii, i = 0; i < o.length; i += 16){
                var P = r, D = t, I = e, L = n;
                r = p(r, t, e, n, o[i + 0], 7, -680876936), n = p(n, r, t, e, o[i + 1], 12, -389564586), e = p(e, n, r, t, o[i + 2], 17, 606105819), t = p(t, e, n, r, o[i + 3], 22, -1044525330), r = p(r, t, e, n, o[i + 4], 7, -176418897), n = p(n, r, t, e, o[i + 5], 12, 1200080426), e = p(e, n, r, t, o[i + 6], 17, -1473231341), t = p(t, e, n, r, o[i + 7], 22, -45705983), r = p(r, t, e, n, o[i + 8], 7, 1770035416), n = p(n, r, t, e, o[i + 9], 12, -1958414417), e = p(e, n, r, t, o[i + 10], 17, -42063), t = p(t, e, n, r, o[i + 11], 22, -1990404162), r = p(r, t, e, n, o[i + 12], 7, 1804603682), n = p(n, r, t, e, o[i + 13], 12, -40341101), e = p(e, n, r, t, o[i + 14], 17, -1502002290), t = p(t, e, n, r, o[i + 15], 22, 1236535329), r = h(r, t, e, n, o[i + 1], 5, -165796510), n = h(n, r, t, e, o[i + 6], 9, -1069501632), e = h(e, n, r, t, o[i + 11], 14, 643717713), t = h(t, e, n, r, o[i + 0], 20, -373897302), r = h(r, t, e, n, o[i + 5], 5, -701558691), n = h(n, r, t, e, o[i + 10], 9, 38016083), e = h(e, n, r, t, o[i + 15], 14, -660478335), t = h(t, e, n, r, o[i + 4], 20, -405537848), r = h(r, t, e, n, o[i + 9], 5, 568446438), n = h(n, r, t, e, o[i + 14], 9, -1019803690), e = h(e, n, r, t, o[i + 3], 14, -187363961), t = h(t, e, n, r, o[i + 8], 20, 1163531501), r = h(r, t, e, n, o[i + 13], 5, -1444681467), n = h(n, r, t, e, o[i + 2], 9, -51403784), e = h(e, n, r, t, o[i + 7], 14, 1735328473), t = h(t, e, n, r, o[i + 12], 20, -1926607734), r = v(r, t, e, n, o[i + 5], 4, -378558), n = v(n, r, t, e, o[i + 8], 11, -2022574463), e = v(e, n, r, t, o[i + 11], 16, 1839030562), t = v(t, e, n, r, o[i + 14], 23, -35309556), r = v(r, t, e, n, o[i + 1], 4, -1530992060), n = v(n, r, t, e, o[i + 4], 11, 1272893353), e = v(e, n, r, t, o[i + 7], 16, -155497632), t = v(t, e, n, r, o[i + 10], 23, -1094730640), r = v(r, t, e, n, o[i + 13], 4, 681279174), n = v(n, r, t, e, o[i + 0], 11, -358537222), e = v(e, n, r, t, o[i + 3], 16, -722521979), t = v(t, e, n, r, o[i + 6], 23, 76029189), r = v(r, t, e, n, o[i + 9], 4, -640364487), n = v(n, r, t, e, o[i + 12], 11, -421815835), e = v(e, n, r, t, o[i + 15], 16, 530742520), t = v(t, e, n, r, o[i + 2], 23, -995338651), r = _(r, t, e, n, o[i + 0], 6, -198630844), n = _(n, r, t, e, o[i + 7], 10, 1126891415), e = _(e, n, r, t, o[i + 14], 15, -1416354905), t = _(t, e, n, r, o[i + 5], 21, -57434055), r = _(r, t, e, n, o[i + 12], 6, 1700485571), n = _(n, r, t, e, o[i + 3], 10, -1894986606), e = _(e, n, r, t, o[i + 10], 15, -1051523), t = _(t, e, n, r, o[i + 1], 21, -2054922799), r = _(r, t, e, n, o[i + 8], 6, 1873313359), n = _(n, r, t, e, o[i + 15], 10, -30611744), e = _(e, n, r, t, o[i + 6], 15, -1560198380), t = _(t, e, n, r, o[i + 13], 21, 1309151649), r = _(r, t, e, n, o[i + 4], 6, -145523070), n = _(n, r, t, e, o[i + 11], 10, -1120210379), e = _(e, n, r, t, o[i + 2], 15, 718787259), t = _(t, e, n, r, o[i + 9], 21, -343485551), r = r + P >>> 0, t = t + D >>> 0, e = e + I >>> 0, n = n + L >>> 0;
            }
            return s.endian([
                r,
                t,
                e,
                n
            ]);
        };
        a._ff = function(f, d, o, y, r, t, e) {
            var n = f + (d & o | ~d & y) + (r >>> 0) + e;
            return (n << t | n >>> 32 - t) + d;
        }, a._gg = function(f, d, o, y, r, t, e) {
            var n = f + (d & y | o & ~y) + (r >>> 0) + e;
            return (n << t | n >>> 32 - t) + d;
        }, a._hh = function(f, d, o, y, r, t, e) {
            var n = f + (d ^ o ^ y) + (r >>> 0) + e;
            return (n << t | n >>> 32 - t) + d;
        }, a._ii = function(f, d, o, y, r, t, e) {
            var n = f + (o ^ (d | ~y)) + (r >>> 0) + e;
            return (n << t | n >>> 32 - t) + d;
        }, a._blocksize = 16, a._digestsize = 16, E.exports = function(f, d) {
            if (f == null) throw new Error("Illegal argument " + f);
            var o = s.wordsToBytes(a(f, d));
            return d && d.asBytes ? o : d && d.asString ? u.bytesToString(o) : s.bytesToHex(o);
        };
    }()), E.exports;
}
var G = V();
const J = /* @__PURE__ */ U(G);
function K() {
    try {
        return typeof navigator < "u" && navigator.product === "ReactNative";
    } catch  {
        return !1;
    }
}
function $() {
    try {
        if (("TURBOPACK compile-time value", "undefined") > "u") return typeof process < "u" && process.env && "__NEXT_PROCESSED_ENV" in process.env;
        const s = window;
        return !!(s.__NEXT_DATA__ || s.next || document.getElementById("__next"));
    } catch  {
        return !1;
    }
}
function z() {
    try {
        if (("TURBOPACK compile-time value", "undefined") > "u") return !1;
        const s = window;
        return !!(s.__VUE__ || s.__VUE_DEVTOOLS_GLOBAL_HOOK__ || document.querySelector("[data-v-]"));
    } catch  {
        return !1;
    }
}
function W() {
    try {
        if (("TURBOPACK compile-time value", "undefined") > "u") return !1;
        const s = window;
        return s.__REACT_DEVTOOLS_GLOBAL_HOOK__ || s.React ? !0 : !!document.querySelector("[data-reactroot], [data-reactid], ._reactRoot, ._reactRootContainer");
    } catch  {
        return !1;
    }
}
function X() {
    return W() ? "react" : K() ? "react-native" : $() ? "nextjs" : z() ? "vue" : "unknown";
}
let R = null;
function Z() {
    return R === null && (R = X()), R;
}
const b = "1f8d3e558f493e38a037dbfadb8ba344", Q = "d473b1dcc969105adab157226cd9cf63", C = Symbol.for("@coinbase/cdp-analytics");
function Y() {
    const s = globalThis;
    return s[C] || (s[C] = {
        identifier: "",
        enabled: !0,
        isProduction: !1,
        isUsingMocks: !1,
        sendEvent: w,
        sendActionCallEvent: (l)=>w({
                ...l,
                type: "action_call"
            }),
        sendHookCallEvent: (l)=>w({
                ...l,
                type: "hook_call"
            }),
        sendComponentCallEvent: (l)=>w({
                ...l,
                type: "component_call"
            }),
        versionRegistry: {},
        registerPackageVersion: (l, c)=>{
            g.versionRegistry[l] = c;
        }
    }), s[C];
}
const g = Y();
async function w(s) {
    if (!g.enabled || !g.identifier) return;
    const l = Date.now(), u = [
        {
            user_id: g.identifier,
            event_type: s.type,
            platform: k() ? "web" : "native",
            timestamp: l,
            event_properties: {
                project_name: "cdp-embedded-wallet",
                framework: Z(),
                isLocalHost: j(),
                isUsingMocks: g.isUsingMocks,
                package_versions: g.versionRegistry,
                ...s
            }
        }
    ], a = JSON.stringify(u), f = l.toString(), d = J(a + f), o = {
        client: g.isProduction ? Q : b,
        e: a,
        checksum: d
    };
    await fetch("https://cca-lite.coinbase.com/amp", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(o)
    });
}
function k() {
    return ("TURBOPACK compile-time value", "undefined") < "u" && typeof document < "u";
}
function j() {
    return k() ? window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" : !1;
}
function nt(s) {
    const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        l.current || (g.sendComponentCallEvent({
            name: s
        }), l.current = !0);
    }, [
        s
    ]);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SvgIcon",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const n = ({ children: o, ...r })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        role: "img",
        "aria-hidden": r["aria-label"] ? void 0 : !0,
        ...r,
        children: o
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconCoinbaseWordmark.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconCoinbaseWordmark",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-ssr] (ecmascript)");
;
;
;
const o = (i)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SvgIcon"], {
        width: "67",
        height: "13",
        viewBox: "0 0 67 13",
        fill: "none",
        ...i,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("g", {
                clipPath: "url(#clip0_7507_87)",
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                    d: "M13.5224 3.8526C11.0884 3.8526 9.18662 5.70351 9.18662 8.18134C9.18662 10.6592 11.0404 12.4942 13.5224 12.4942C16.0044 12.4942 17.8903 10.6275 17.8903 8.1655C17.8903 5.71935 16.0366 3.8526 13.5224 3.8526ZM13.5388 10.7085C12.1527 10.7085 11.1371 9.63014 11.1371 8.18195C11.1371 6.71731 12.1363 5.63954 13.5224 5.63954C14.9248 5.63954 15.9399 6.73376 15.9399 8.18195C15.9399 9.63014 14.9248 10.7085 13.5388 10.7085ZM18.4219 5.7358H19.631V12.334H21.565V4.01344H18.4219V5.7358ZM4.31932 5.63893C5.33499 5.63893 6.14083 6.26646 6.44675 7.19983H8.4939C8.12291 5.20453 6.47899 3.8526 4.33574 3.8526C1.90179 3.8526 0 5.70351 0 8.18195C0 10.6604 1.85375 12.4948 4.33574 12.4948C6.43094 12.4948 8.10709 11.1429 8.47809 9.13116H6.44675C6.15665 10.0645 5.3508 10.7085 4.33514 10.7085C2.93266 10.7085 1.94984 9.63014 1.94984 8.18195C1.95045 6.71731 2.91746 5.63893 4.31932 5.63893ZM55.1696 7.37713L53.7513 7.16815C53.0744 7.07189 52.5909 6.84647 52.5909 6.3152C52.5909 5.7358 53.2198 5.44641 54.0736 5.44641C55.0084 5.44641 55.6051 5.84851 55.734 6.50833H57.6035C57.3937 4.83472 56.1044 3.85321 54.1223 3.85321C52.0752 3.85321 50.7213 4.8993 50.7213 6.37978C50.7213 7.79568 51.6081 8.61695 53.3967 8.87406L54.815 9.08303C55.5084 9.17929 55.8952 9.45346 55.8952 9.96828C55.8952 10.6281 55.2182 10.9016 54.2835 10.9016C53.1389 10.9016 52.4942 10.435 52.3975 9.72701H50.4957C50.6733 11.3525 51.9462 12.4948 54.2671 12.4948C56.3787 12.4948 57.7805 11.5292 57.7805 9.8714C57.7805 8.39092 56.7655 7.61839 55.1696 7.37713ZM20.598 0.585792C19.8888 0.585792 19.3567 1.10061 19.3567 1.80856C19.3567 2.51651 19.8882 3.03133 20.598 3.03133C21.3071 3.03133 21.8393 2.51651 21.8393 1.80856C21.8393 1.10061 21.3071 0.585792 20.598 0.585792ZM48.9807 6.86231C48.9807 5.06014 47.8848 3.85321 45.5639 3.85321C43.372 3.85321 42.1472 4.96388 41.9051 6.66978H43.8233C43.92 6.00996 44.4358 5.46286 45.5317 5.46286C46.5151 5.46286 46.9986 5.89725 46.9986 6.42852C46.9986 7.12063 46.1119 7.29731 45.016 7.41003C43.5332 7.57087 41.6959 8.08569 41.6959 10.017C41.6959 11.5139 42.8083 12.479 44.5811 12.479C45.9672 12.479 46.8375 11.8996 47.2729 10.9821C47.3374 11.8027 47.9498 12.334 48.8043 12.334H49.9325V10.6123H48.9813V6.86231H48.9807ZM47.0789 8.95448C47.0789 10.0651 46.1119 10.8858 44.9351 10.8858C44.2095 10.8858 43.5971 10.58 43.5971 9.93659C43.5971 9.11593 44.5805 8.89051 45.483 8.79425C46.3534 8.71383 46.8369 8.52069 47.0789 8.15027V8.95448ZM36.8122 3.8526C35.732 3.8526 34.8295 4.30345 34.1848 5.05953V0.505371H32.2508V12.334H34.1526V11.2398C34.7973 12.0282 35.7162 12.4948 36.8122 12.4948C39.133 12.4948 40.89 10.6604 40.89 8.18195C40.89 5.70351 39.1008 3.8526 36.8122 3.8526ZM36.5221 10.7085C35.136 10.7085 34.1203 9.63014 34.1203 8.18195C34.1203 6.73376 35.1518 5.63954 36.5379 5.63954C37.9403 5.63954 38.9232 6.71792 38.9232 8.18195C38.9232 9.63014 37.9081 10.7085 36.5221 10.7085ZM27.6249 3.8526C26.3678 3.8526 25.5456 4.36742 25.062 5.09182V4.01344H23.1438V12.3334H25.0779V7.81152C25.0779 6.54001 25.8837 5.63893 27.0764 5.63893C28.1887 5.63893 28.8814 6.4273 28.8814 7.57026V12.334H30.8155V7.42587C30.8161 5.33308 29.7366 3.8526 27.6249 3.8526ZM67 7.90839C67 5.52683 65.2594 3.85321 62.9221 3.85321C60.4401 3.85321 58.6186 5.71996 58.6186 8.18195C58.6186 10.7731 60.5691 12.4948 62.9544 12.4948C64.9693 12.4948 66.5487 11.3038 66.9513 9.6143H64.9364C64.6463 10.3545 63.9372 10.7731 62.986 10.7731C61.7447 10.7731 60.8099 10.0006 60.6007 8.64863H66.9994V7.90839H67ZM60.7138 7.26441C61.0203 6.10562 61.8906 5.54267 62.8899 5.54267C63.9858 5.54267 64.8239 6.1702 65.0173 7.26441H60.7138Z",
                    fill: "currentColor"
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("defs", {
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("clipPath", {
                    id: "clip0_7507_87",
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("rect", {
                        width: "67",
                        height: "11.9895",
                        fill: "white",
                        transform: "translate(0 0.505371)"
                    })
                })
            })
        ]
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconLock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconLock",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-ssr] (ecmascript)");
;
;
;
const n = (r)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SvgIcon"], {
        width: "11",
        height: "11",
        viewBox: "0 0 11 11",
        ...r,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M2.98877 4.49512V3.49512C2.98877 1.83826 4.33192 0.495117 5.98877 0.495117C7.64562 0.495117 8.98877 1.83826 8.98877 3.49512V4.49512H10.9888V10.4951H0.98877V4.49512H2.98877ZM7.78877 3.49512C7.78877 2.501 6.98288 1.69512 5.98877 1.69512C4.99466 1.69512 4.18877 2.501 4.18877 3.49512V4.49512H7.78877V3.49512Z",
            fill: "currentColor"
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/CoinbaseFooter/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoinbaseFooter",
    ()=>x
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconCoinbaseWordmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconCoinbaseWordmark.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconLock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconLock.js [app-ssr] (ecmascript)");
;
;
;
;
;
const r = "CoinbaseFooter-module__footer___d0ToM", a = "CoinbaseFooter-module__text___dmxyS", _ = "CoinbaseFooter-module__icon___3-qMm", o = {
    footer: r,
    text: a,
    icon: _,
    "coinbase-icon": "CoinbaseFooter-module__coinbase-icon___Ws6HN"
}, x = ({ className: n = "", ...t })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: `${o.footer} ${n}`,
        ...t,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconLock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconLock"], {
                className: o.icon
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("p", {
                className: o.text,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        children: "Secured by "
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconCoinbaseWordmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconCoinbaseWordmark"], {
                        className: o["coinbase-icon"],
                        "aria-label": "Coinbase"
                    })
                ]
            })
        ]
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/LoadingSpinner/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingSpinner",
    ()=>g
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const p = "LoadingSpinner-module__spinner___-zo6Y", i = {
    spinner: p,
    "spinner-circle": "LoadingSpinner-module__spinner-circle___9Jfm7"
}, g = ({ className: o, staticStroke: c, staticStrokeColor: r = "currentColor", strokeWidth: e = "3", style: l })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-label": "loading",
        width: "24",
        height: "24",
        stroke: "currentColor",
        className: o,
        style: l,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("g", {
            className: i.spinner,
            children: [
                c && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "9.5",
                    fill: "none",
                    strokeWidth: e,
                    stroke: r,
                    opacity: r === "currentColor" ? "0.2" : void 0
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("circle", {
                    className: i["spinner-circle"],
                    cx: "12",
                    cy: "12",
                    r: "9.5",
                    fill: "none",
                    strokeWidth: e
                })
            ]
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/primitive.tsx
__turbopack_context__.s([
    "canUseDOM",
    ()=>canUseDOM,
    "composeEventHandlers",
    ()=>composeEventHandlers,
    "getActiveElement",
    ()=>getActiveElement,
    "getOwnerDocument",
    ()=>getOwnerDocument,
    "getOwnerWindow",
    ()=>getOwnerWindow,
    "isFrame",
    ()=>isFrame
]);
var canUseDOM = !!(("TURBOPACK compile-time value", "undefined") !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
        originalEventHandler?.(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    };
}
function getOwnerWindow(element) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error("Cannot access window outside of the DOM");
    }
    return element?.ownerDocument?.defaultView ?? window;
}
function getOwnerDocument(element) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error("Cannot access document outside of the DOM");
    }
    return element?.ownerDocument ?? document;
}
function getActiveElement(node, activeDescendant = false) {
    const { activeElement } = getOwnerDocument(node);
    if (!activeElement?.nodeName) {
        return null;
    }
    if (isFrame(activeElement) && activeElement.contentDocument) {
        return getActiveElement(activeElement.contentDocument.body, activeDescendant);
    }
    if (activeDescendant) {
        const id = activeElement.getAttribute("aria-activedescendant");
        if (id) {
            const element = getOwnerDocument(activeElement).getElementById(id);
            if (element) {
                return element;
            }
        }
    }
    return activeElement;
}
function isFrame(element) {
    return element.tagName === "IFRAME";
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/shopalive/shopalive/node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/primitive.tsx
__turbopack_context__.s([
    "canUseDOM",
    ()=>canUseDOM,
    "composeEventHandlers",
    ()=>composeEventHandlers,
    "getActiveElement",
    ()=>getActiveElement,
    "getOwnerDocument",
    ()=>getOwnerDocument,
    "getOwnerWindow",
    ()=>getOwnerWindow,
    "isFrame",
    ()=>isFrame
]);
var canUseDOM = !!(("TURBOPACK compile-time value", "undefined") !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
        originalEventHandler?.(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    };
}
function getOwnerWindow(element) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error("Cannot access window outside of the DOM");
    }
    return element?.ownerDocument?.defaultView ?? window;
}
function getOwnerDocument(element) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error("Cannot access document outside of the DOM");
    }
    return element?.ownerDocument ?? document;
}
function getActiveElement(node, activeDescendant = false) {
    const { activeElement } = getOwnerDocument(node);
    if (!activeElement?.nodeName) {
        return null;
    }
    if (isFrame(activeElement) && activeElement.contentDocument) {
        return getActiveElement(activeElement.contentDocument.body, activeDescendant);
    }
    if (activeDescendant) {
        const id = activeElement.getAttribute("aria-activedescendant");
        if (id) {
            const element = getOwnerDocument(activeElement).getElementById(id);
            if (element) {
                return element;
            }
        }
    }
    return activeElement;
}
function isFrame(element) {
    return element.tagName === "IFRAME";
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/shopalive/shopalive/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Branch",
    ()=>Branch,
    "DismissableLayer",
    ()=>DismissableLayer,
    "DismissableLayerBranch",
    ()=>DismissableLayerBranch,
    "Root",
    ()=>Root
]);
// src/dismissable-layer.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$escape$2d$keydown$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](DismissableLayerContext);
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({});
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node2)=>setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event)=>{
        const target = event.target;
        const isPointerDownOnBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target));
        if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
        onPointerDownOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event)=>{
        const target = event.target;
        const isFocusInBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target));
        if (isFocusInBranch) return;
        onFocusOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$escape$2d$keydown$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEscapeKeydown"])((event)=>{
        const isHighestLayer = index === context.layers.size - 1;
        if (!isHighestLayer) return;
        onEscapeKeyDown?.(event);
        if (!event.defaultPrevented && onDismiss) {
            event.preventDefault();
            onDismiss();
        }
    }, ownerDocument);
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!node) return;
        if (disableOutsidePointerEvents) {
            if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
                ownerDocument.body.style.pointerEvents = "none";
            }
            context.layersWithOutsidePointerEventsDisabled.add(node);
        }
        context.layers.add(node);
        dispatchUpdate();
        return ()=>{
            if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
                ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
            }
        };
    }, [
        node,
        ownerDocument,
        disableOutsidePointerEvents,
        context
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>{
            if (!node) return;
            context.layers.delete(node);
            context.layersWithOutsidePointerEventsDisabled.delete(node);
            dispatchUpdate();
        };
    }, [
        node,
        context
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleUpdate = ()=>force({});
        document.addEventListener(CONTEXT_UPDATE, handleUpdate);
        return ()=>document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...layerProps,
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
            ...props.style
        },
        onFocusCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    });
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](DismissableLayerContext);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const node = ref.current;
        if (node) {
            context.branches.add(node);
            return ()=>{
                context.branches.delete(node);
            };
        }
    }, [
        context.branches
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...props,
        ref: composedRefs
    });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
    const handlePointerDownOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onPointerDownOutside);
    const isPointerInsideReactTreeRef = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleClickRef = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](()=>{});
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handlePointerDown = (event)=>{
            if (event.target && !isPointerInsideReactTreeRef.current) {
                let handleAndDispatchPointerDownOutsideEvent2 = function() {
                    handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                        discrete: true
                    });
                };
                var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
                const eventDetail = {
                    originalEvent: event
                };
                if (event.pointerType === "touch") {
                    ownerDocument.removeEventListener("click", handleClickRef.current);
                    handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
                    ownerDocument.addEventListener("click", handleClickRef.current, {
                        once: true
                    });
                } else {
                    handleAndDispatchPointerDownOutsideEvent2();
                }
            } else {
                ownerDocument.removeEventListener("click", handleClickRef.current);
            }
            isPointerInsideReactTreeRef.current = false;
        };
        const timerId = window.setTimeout(()=>{
            ownerDocument.addEventListener("pointerdown", handlePointerDown);
        }, 0);
        return ()=>{
            window.clearTimeout(timerId);
            ownerDocument.removeEventListener("pointerdown", handlePointerDown);
            ownerDocument.removeEventListener("click", handleClickRef.current);
        };
    }, [
        ownerDocument,
        handlePointerDownOutside
    ]);
    return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: ()=>isPointerInsideReactTreeRef.current = true
    };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
    const handleFocusOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onFocusOutside);
    const isFocusInsideReactTreeRef = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleFocus = (event)=>{
            if (event.target && !isFocusInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                    discrete: false
                });
            }
        };
        ownerDocument.addEventListener("focusin", handleFocus);
        return ()=>ownerDocument.removeEventListener("focusin", handleFocus);
    }, [
        ownerDocument,
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function dispatchUpdate() {
    const event = new CustomEvent(CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchDiscreteCustomEvent"])(target, event);
    } else {
        target.dispatchEvent(event);
    }
}
var Root = DismissableLayer;
var Branch = DismissableLayerBranch;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/shopalive/shopalive/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusScope",
    ()=>FocusScope,
    "Root",
    ()=>Root
]);
// src/focus-scope.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
    const [container, setContainer] = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const onMountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onMountAutoFocusProp);
    const onUnmountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onUnmountAutoFocusProp);
    const lastFocusedElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setContainer(node));
    const focusScope = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current;
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (trapped) {
            let handleFocusIn2 = function(event) {
                if (focusScope.paused || !container) return;
                const target = event.target;
                if (container.contains(target)) {
                    lastFocusedElementRef.current = target;
                } else {
                    focus(lastFocusedElementRef.current, {
                        select: true
                    });
                }
            }, handleFocusOut2 = function(event) {
                if (focusScope.paused || !container) return;
                const relatedTarget = event.relatedTarget;
                if (relatedTarget === null) return;
                if (!container.contains(relatedTarget)) {
                    focus(lastFocusedElementRef.current, {
                        select: true
                    });
                }
            }, handleMutations2 = function(mutations) {
                const focusedElement = document.activeElement;
                if (focusedElement !== document.body) return;
                for (const mutation of mutations){
                    if (mutation.removedNodes.length > 0) focus(container);
                }
            };
            var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
            document.addEventListener("focusin", handleFocusIn2);
            document.addEventListener("focusout", handleFocusOut2);
            const mutationObserver = new MutationObserver(handleMutations2);
            if (container) mutationObserver.observe(container, {
                childList: true,
                subtree: true
            });
            return ()=>{
                document.removeEventListener("focusin", handleFocusIn2);
                document.removeEventListener("focusout", handleFocusOut2);
                mutationObserver.disconnect();
            };
        }
    }, [
        trapped,
        container,
        focusScope.paused
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (container) {
            focusScopesStack.add(focusScope);
            const previouslyFocusedElement = document.activeElement;
            const hasFocusedCandidate = container.contains(previouslyFocusedElement);
            if (!hasFocusedCandidate) {
                const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
                container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                container.dispatchEvent(mountEvent);
                if (!mountEvent.defaultPrevented) {
                    focusFirst(removeLinks(getTabbableCandidates(container)), {
                        select: true
                    });
                    if (document.activeElement === previouslyFocusedElement) {
                        focus(container);
                    }
                }
            }
            return ()=>{
                container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                setTimeout(()=>{
                    const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
                    container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    container.dispatchEvent(unmountEvent);
                    if (!unmountEvent.defaultPrevented) {
                        focus(previouslyFocusedElement ?? document.body, {
                            select: true
                        });
                    }
                    container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    focusScopesStack.remove(focusScope);
                }, 0);
            };
        }
    }, [
        container,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]);
    const handleKeyDown = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>{
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
            const container2 = event.currentTarget;
            const [first, last] = getTabbableEdges(container2);
            const hasTabbableElementsInside = first && last;
            if (!hasTabbableElementsInside) {
                if (focusedElement === container2) event.preventDefault();
            } else {
                if (!event.shiftKey && focusedElement === last) {
                    event.preventDefault();
                    if (loop) focus(first, {
                        select: true
                    });
                } else if (event.shiftKey && focusedElement === first) {
                    event.preventDefault();
                    if (loop) focus(last, {
                        select: true
                    });
                }
            }
        }
    }, [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        tabIndex: -1,
        ...scopeProps,
        ref: composedRefs,
        onKeyDown: handleKeyDown
    });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        focus(candidate, {
            select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
function getTabbableEdges(container) {
    const candidates = getTabbableCandidates(container);
    const first = findVisible(candidates, container);
    const last = findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
function findVisible(elements, container) {
    for (const element of elements){
        if (!isHidden(element, {
            upTo: container
        })) return element;
    }
}
function isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden") return true;
    while(node){
        if (upTo !== void 0 && node === upTo) return false;
        if (getComputedStyle(node).display === "none") return true;
        node = node.parentElement;
    }
    return false;
}
function isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({
            preventScroll: true
        });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
    }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
    let stack = [];
    return {
        add (focusScope) {
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) {
                activeFocusScope?.pause();
            }
            stack = arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            stack = arrayRemove(stack, focusScope);
            stack[0]?.resume();
        }
    };
}
function arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) {
        updatedArray.splice(index, 1);
    }
    return updatedArray;
}
function removeLinks(items) {
    return items.filter((item)=>item.tagName !== "A");
}
var Root = FocusScope;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/shopalive/shopalive/node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Presence",
    ()=>Presence,
    "Root",
    ()=>Root
]);
// src/presence.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function useStateMachine(initialState, machine) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"]((state, event)=>{
        const nextState = machine[state][event];
        return nextState ?? state;
    }, initialState);
}
// src/presence.tsx
var Presence = (props)=>{
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({
        present: presence.isPresent
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(presence.ref, getElementRef(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](child, {
        ref
    }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const stylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const prevPresentRef = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](present);
    const prevAnimationNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
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
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const currentAnimationName = getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
    }, [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = getAnimationName(styles);
            if (present) {
                send("MOUNT");
            } else if (currentAnimationName === "none" || styles?.display === "none") {
                send("UNMOUNT");
            } else {
                const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) {
                    send("ANIMATION_OUT");
                } else {
                    send("UNMOUNT");
                }
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (node) {
            let timeoutId;
            const ownerWindow = node.ownerDocument.defaultView ?? window;
            const handleAnimationEnd = (event)=>{
                const currentAnimationName = getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
                if (event.target === node && isCurrentAnimation) {
                    send("ANIMATION_END");
                    if (!prevPresentRef.current) {
                        const currentFillMode = node.style.animationFillMode;
                        node.style.animationFillMode = "forwards";
                        timeoutId = ownerWindow.setTimeout(()=>{
                            if (node.style.animationFillMode === "forwards") {
                                node.style.animationFillMode = currentFillMode;
                            }
                        });
                    }
                }
            };
            const handleAnimationStart = (event)=>{
                if (event.target === node) {
                    prevAnimationNameRef.current = getAnimationName(stylesRef.current);
                }
            };
            node.addEventListener("animationstart", handleAnimationStart);
            node.addEventListener("animationcancel", handleAnimationEnd);
            node.addEventListener("animationend", handleAnimationEnd);
            return ()=>{
                ownerWindow.clearTimeout(timeoutId);
                node.removeEventListener("animationstart", handleAnimationStart);
                node.removeEventListener("animationcancel", handleAnimationEnd);
                node.removeEventListener("animationend", handleAnimationEnd);
            };
        } else {
            send("ANIMATION_END");
        }
    }, [
        node,
        send
    ]);
    return {
        isPresent: [
            "mounted",
            "unmountSuspended"
        ].includes(state),
        ref: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node2)=>{
            stylesRef.current = node2 ? getComputedStyle(node2) : null;
            setNode(node2);
        }, [])
    };
}
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root = Presence;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/shopalive/shopalive/node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusGuards",
    ()=>FocusGuards,
    "Root",
    ()=>FocusGuards,
    "useFocusGuards",
    ()=>useFocusGuards
]);
// src/focus-guards.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var count = 0;
function FocusGuards(props) {
    useFocusGuards();
    return props.children;
}
function useFocusGuards() {
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
        document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
        document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
        count++;
        return ()=>{
            if (count === 1) {
                document.querySelectorAll("[data-radix-focus-guard]").forEach((node)=>node.remove());
            }
            count--;
        };
    }, []);
}
function createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.outline = "none";
    element.style.opacity = "0";
    element.style.position = "fixed";
    element.style.pointerEvents = "none";
    return element;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/shopalive/shopalive/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/shopalive/shopalive/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullWidthClassName",
    ()=>fullWidthClassName,
    "noScrollbarsClassName",
    ()=>noScrollbarsClassName,
    "removedBarSizeVariable",
    ()=>removedBarSizeVariable,
    "zeroRightClassName",
    ()=>zeroRightClassName
]);
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';
}),
"[project]/shopalive/shopalive/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */ __turbopack_context__.s([
    "assignRef",
    ()=>assignRef
]);
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
    return ref;
}
}),
"[project]/shopalive/shopalive/node_modules/use-callback-ref/dist/es2015/useRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useCallbackRef(initialValue, callback) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(function() {
        return {
            // value
            value: initialValue,
            // last callback
            callback: callback,
            // "memoized" public interface
            facade: {
                get current () {
                    return ref.value;
                },
                set current (value){
                    var last = ref.value;
                    if (last !== value) {
                        ref.value = value;
                        ref.callback(value, last);
                    }
                }
            }
        };
    })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}
}),
"[project]/shopalive/shopalive/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergeRefs",
    ()=>useMergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/use-callback-ref/dist/es2015/useRef.js [app-ssr] (ecmascript)");
;
;
;
var useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
var currentValues = new WeakMap();
function useMergeRefs(refs, defaultValue) {
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(defaultValue || null, function(newValue) {
        return refs.forEach(function(ref) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, newValue);
        });
    });
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect(function() {
        var oldValue = currentValues.get(callbackRef);
        if (oldValue) {
            var prevRefs_1 = new Set(oldValue);
            var nextRefs_1 = new Set(refs);
            var current_1 = callbackRef.current;
            prevRefs_1.forEach(function(ref) {
                if (!nextRefs_1.has(ref)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, null);
                }
            });
            nextRefs_1.forEach(function(ref) {
                if (!prevRefs_1.has(ref)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, current_1);
                }
            });
        }
        currentValues.set(callbackRef, refs);
    }, [
        refs
    ]);
    return callbackRef;
}
}),
"[project]/shopalive/shopalive/node_modules/use-sidecar/dist/es2015/medium.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMedium",
    ()=>createMedium,
    "createSidecarMedium",
    ()=>createSidecarMedium
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
;
function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function() {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function(data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function() {
                buffer = buffer.filter(function(x) {
                    return x !== item;
                });
            };
        },
        assignSyncMedium: function(cb) {
            assigned = true;
            while(buffer.length){
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function(x) {
                    return cb(x);
                },
                filter: function() {
                    return buffer;
                }
            };
        },
        assignMedium: function(cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function() {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function() {
                return Promise.resolve().then(executeQueue);
            };
            cycle();
            buffer = {
                push: function(x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function(filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                }
            };
        }
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) {
        options = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({
        async: true,
        ssr: false
    }, options);
    return medium;
}
}),
"[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "effectCar",
    ()=>effectCar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/use-sidecar/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
var effectCar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSidecarMedium"])();
}),
"[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/UI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>RemoveScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
;
;
;
;
var nothing = function() {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */ var RemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function(props, parentRef) {
    var ref = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(props, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode"
    ]);
    var SideCar = sideCar;
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergeRefs"])([
        ref,
        parentRef
    ]);
    var containerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, rest), callbacks);
    return __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, enabled && __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](SideCar, {
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effectCar"],
        removeScrollBar: removeScrollBar,
        shards: shards,
        noRelative: noRelative,
        noIsolation: noIsolation,
        inert: inert,
        setCallbacks: setCallbacks,
        allowPinchZoom: !!allowPinchZoom,
        lockRef: ref,
        gapMode: gapMode
    }), forwardProps ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps), {
        ref: containerRef
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps, {
        className: className,
        ref: containerRef
    }), children));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"],
    zeroRight: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"]
};
;
}),
"[project]/shopalive/shopalive/node_modules/use-sidecar/dist/es2015/exports.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportSidecar",
    ()=>exportSidecar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
var SideCar = function(_a) {
    var sideCar = _a.sideCar, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "sideCar"
    ]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}
}),
"[project]/shopalive/shopalive/node_modules/get-nonce/dist/es2015/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNonce",
    ()=>getNonce,
    "setNonce",
    ()=>setNonce
]);
var currentNonce;
var setNonce = function(nonce) {
    currentNonce = nonce;
};
var getNonce = function() {
    if (currentNonce) {
        return currentNonce;
    }
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};
}),
"[project]/shopalive/shopalive/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stylesheetSingleton",
    ()=>stylesheetSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/get-nonce/dist/es2015/index.js [app-ssr] (ecmascript)");
;
function makeStyleTag() {
    if (!document) return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNonce"])();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    } else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function(style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function() {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};
}),
"[project]/shopalive/shopalive/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleHookSingleton",
    ()=>styleHookSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)");
;
;
var styleHookSingleton = function() {
    var sheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stylesheetSingleton"])();
    return function(styles, isDynamic) {
        __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
            sheet.add(styles);
            return function() {
                sheet.remove();
            };
        }, [
            styles && isDynamic
        ]);
    };
};
}),
"[project]/shopalive/shopalive/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleSingleton",
    ()=>styleSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)");
;
var styleSingleton = function() {
    var useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleHookSingleton"])();
    var Sheet = function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
}),
"[project]/shopalive/shopalive/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/shopalive/shopalive/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGapWidth",
    ()=>getGapWidth,
    "zeroGap",
    ()=>zeroGap
]);
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
};
var parse = function(x) {
    return parseInt(x || '', 10) || 0;
};
var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right)
    ];
};
var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    if ("TURBOPACK compile-time truthy", 1) {
        return zeroGap;
    }
    //TURBOPACK unreachable
    ;
    var offsets;
    var documentWidth;
    var windowWidth;
};
}),
"[project]/shopalive/shopalive/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollBar",
    ()=>RemoveScrollBar,
    "lockAttribute",
    ()=>lockAttribute,
    "useLockAttribute",
    ()=>useLockAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)");
;
;
;
;
var Style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleSingleton"])();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    return "\n  .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noScrollbarsClassName"], " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(''), "\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removedBarSizeVariable"], ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
        return function() {
            var newCounter = getCurrentUseCounter() - 1;
            if (newCounter <= 0) {
                document.body.removeAttribute(lockAttribute);
            } else {
                document.body.setAttribute(lockAttribute, newCounter.toString());
            }
        };
    }, []);
};
var RemoveScrollBar = function(_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */ var gap = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGapWidth"])(gapMode);
    }, [
        gapMode
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '')
    });
};
}),
"[project]/shopalive/shopalive/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonPassive",
    ()=>nonPassive
]);
var passiveSupported = false;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
{
    var options;
}
var nonPassive = passiveSupported ? {
    passive: false
} : false;
}),
"[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleScroll",
    ()=>handleScroll,
    "locationCouldBeScrolled",
    ()=>locationCouldBeScrolled
]);
var alwaysContainsScroll = function(node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function(node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return(// not-not-scrollable
    styles[overflow] !== 'hidden' && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowY');
};
var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowX');
};
var locationCouldBeScrolled = function(axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    }while (current && current !== ownerDocument.body)
    return false;
};
var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight
    ];
};
var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth
    ];
};
var elementCouldBeScrolled = function(axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */ return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        if (!target) {
            break;
        }
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        var parent_1 = target.parentNode;
        // we will "bubble" from ShadowDom in case we are, or just to the parent in normal case
        // this is the same logic used in focus-lock
        target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
    }while (// portaled content
    !targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target))
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
}),
"[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollSideCar",
    ()=>RemoveScrollSideCar,
    "getDeltaXY",
    ()=>getDeltaXY,
    "getTouchXY",
    ()=>getTouchXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var getTouchXY = function(event) {
    return 'changedTouches' in event ? [
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
    ] : [
        0,
        0
    ];
};
var getDeltaXY = function(event) {
    return [
        event.deltaX,
        event.deltaY
    ];
};
var extractRef = function(ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([]);
    var touchStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([
        0,
        0
    ]);
    var activeAxis = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]();
    var id = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](idCounter++)[0];
    var Style = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleSingleton"])[0];
    var lastProps = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](props);
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        lastProps.current = props;
    }, [
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                props.lockRef.current
            ], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function(el) {
                return el.classList.add("allow-interactivity-".concat(id));
            });
            return function() {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function(el) {
                    return el.classList.remove("allow-interactivity-".concat(id));
                });
            };
        }
        return;
    }, [
        props.inert,
        props.lockRef.current,
        props.shards
    ]);
    var shouldCancelEvent = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event, parent) {
        if ('touches' in event && event.touches.length === 2 || event.type === 'wheel' && event.ctrlKey) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        } else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
        // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleScroll"])(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function(e) {
            return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
        })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
                return node.contains(event.target);
            });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(name, delta, target, should) {
        var event = {
            name: name,
            delta: delta,
            target: target,
            should: should,
            shadowParent: getOutermostShadowParent(target)
        };
        shouldPreventQueue.current.push(event);
        setTimeout(function() {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
                return e !== event;
            });
        }, 1);
    }, []);
    var scrollTouchStart = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        document.addEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        document.addEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        return function() {
            lockStack = lockStack.filter(function(inst) {
                return inst !== Style;
            });
            document.removeEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.removeEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.removeEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, inert ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: generateStyle(id)
    }) : null, removeScrollBar ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScrollBar"], {
        noRelative: props.noRelative,
        gapMode: props.gapMode
    }) : null);
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while(node !== null){
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}
}),
"[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/use-sidecar/dist/es2015/exports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportSidecar"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effectCar"], __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScrollSideCar"]);
}),
"[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/UI.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-ssr] (ecmascript)");
;
;
;
;
var ReactRemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScroll"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, props, {
        ref: ref,
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
});
ReactRemoveScroll.classNames = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScroll"].classNames;
const __TURBOPACK__default__export__ = ReactRemoveScroll;
}),
"[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript)");
}),
"[project]/shopalive/shopalive/node_modules/aria-hidden/dist/es2015/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hideOthers",
    ()=>hideOthers,
    "inertOthers",
    ()=>inertOthers,
    "supportsInert",
    ()=>supportsInert,
    "suppressOthers",
    ()=>suppressOthers
]);
var getDefaultParent = function(originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    }).filter(function(x) {
        return Boolean(x);
    });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */ var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            } else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                } catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
        hiddenNodes.forEach(function(node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-aria-hidden';
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    // we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live]')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
var inertOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-inert-ed';
    }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
var supportsInert = function() {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
var suppressOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-suppressed';
    }
    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);
};
}),
"[project]/shopalive/shopalive/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Close",
    ()=>Close,
    "Content",
    ()=>Content,
    "Description",
    ()=>Description,
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger,
    "Overlay",
    ()=>Overlay,
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root,
    "Title",
    ()=>Title,
    "Trigger",
    ()=>Trigger,
    "WarningProvider",
    ()=>WarningProvider,
    "createDialogScope",
    ()=>createDialogScope
]);
// src/dialog.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-portal/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/aria-hidden/dist/es2015/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props)=>{
    const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: DIALOG_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DialogProvider, {
        scope: __scopeDialog,
        triggerRef,
        contentRef,
        contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
        titleId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
        descriptionId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setOpen((prevOpen)=>!prevOpen), [
            setOpen
        ]),
        modal,
        children
    });
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, context.onOpenToggle)
    });
});
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
    forceMount: void 0
});
var DialogPortal = (props)=>{
    const { __scopeDialog, forceMount, children, container } = props;
    const context = useDialogContext(PORTAL_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PortalProvider, {
        scope: __scopeDialog,
        forceMount,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
                present: forceMount || context.open,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
                    asChild: true,
                    container,
                    children: child
                })
            }))
    });
};
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DialogOverlayImpl, {
            ...overlayProps,
            ref: forwardedRef
        })
    }) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return(// Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"], {
        as: Slot,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ],
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            "data-state": getState(context.open),
            ...overlayProps,
            ref: forwardedRef,
            style: {
                pointerEvents: "auto",
                ...overlayProps.style
            }
        })
    }));
});
var CONTENT_NAME = "DialogContent";
var DialogContent = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DialogContentModal, {
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DialogContentNonModal, {
            ...contentProps,
            ref: forwardedRef
        })
    });
});
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.contentRef, contentRef);
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const content = contentRef.current;
        if (content) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideOthers"])(content);
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DialogContentImpl, {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onCloseAutoFocus, (event)=>{
            event.preventDefault();
            context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusOutside, (event)=>event.preventDefault())
    });
});
var DialogContentNonModal = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const hasPointerDownOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DialogContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            props.onCloseAutoFocus?.(event);
            if (!event.defaultPrevented) {
                if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            props.onInteractOutside?.(event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === "pointerdown") {
                    hasPointerDownOutsideRef.current = true;
                }
            }
            const target = event.target;
            const targetIsTrigger = context.triggerRef.current?.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
                event.preventDefault();
            }
        }
    });
});
var DialogContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, contentRef);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusGuards"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FocusScope"], {
                asChild: true,
                loop: true,
                trapped: trapFocus,
                onMountAutoFocus: onOpenAutoFocus,
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DismissableLayer"], {
                    role: "dialog",
                    id: context.contentId,
                    "aria-describedby": context.descriptionId,
                    "aria-labelledby": context.titleId,
                    "data-state": getState(context.open),
                    ...contentProps,
                    ref: composedRefs,
                    onDismiss: ()=>context.onOpenChange(false)
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TitleWarning, {
                        titleId: context.titleId
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DescriptionWarning, {
                        contentRef,
                        descriptionId: context.descriptionId
                    })
                ]
            })
        ]
    });
});
var TITLE_NAME = "DialogTitle";
var DialogTitle = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].h2, {
        id: context.titleId,
        ...titleProps,
        ref: forwardedRef
    });
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].p, {
        id: context.descriptionId,
        ...descriptionProps,
        ref: forwardedRef
    });
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, ()=>context.onOpenChange(false))
    });
});
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(TITLE_WARNING_NAME, {
    contentName: CONTENT_NAME,
    titleName: TITLE_NAME,
    docsSlug: "dialog"
});
var TitleWarning = ({ titleId })=>{
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (titleId) {
            const hasTitle = document.getElementById(titleId);
            if (!hasTitle) console.error(MESSAGE);
        }
    }, [
        MESSAGE,
        titleId
    ]);
    return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId })=>{
    const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const describedById = contentRef.current?.getAttribute("aria-describedby");
        if (descriptionId && describedById) {
            const hasDescription = document.getElementById(descriptionId);
            if (!hasDescription) console.warn(MESSAGE);
        }
    }, [
        MESSAGE,
        contentRef,
        descriptionId
    ]);
    return null;
};
var Root = Dialog;
var Trigger = DialogTrigger;
var Portal = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/lite.1fxw3LjI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "c",
    ()=>a
]);
function a() {
    for(var n, r = 0, t = "", s = arguments.length; r < s; r++)(n = arguments[r]) && typeof n == "string" && (t += (t && " ") + n);
    return t;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Modal/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>w,
    "ModalClose",
    ()=>G,
    "ModalContent",
    ()=>j,
    "ModalDescription",
    ()=>I,
    "ModalTitle",
    ()=>P,
    "ModalTrigger",
    ()=>Q
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$lite$2e$1fxw3LjI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/lite.1fxw3LjI.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ThemeProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ThemeProvider/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const x = "Modal-module__modal___MUsZA", N = "Modal-module__overlay___-RqGQ", h = "Modal-module__spacer___dIfOA", a = {
    modal: x,
    overlay: N,
    spacer: h
}, j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children: r, className: t = "", overlayClassName: c = "", overlayStyle: l, ...i }, d)=>{
    const { cssVariables: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ThemeProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])(), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...s,
            ...l
        }), [
        s,
        l
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogPortal"], {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogOverlay"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$lite$2e$1fxw3LjI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(a.overlay, c),
            style: m,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: a.spacer
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    ...i,
                    ref: d,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$lite$2e$1fxw3LjI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(a.modal, t),
                    children: r
                })
            ]
        })
    });
});
j.displayName = "ModalContent";
const w = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], G = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogClose"], I = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], P = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], Q = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"];
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/transition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTERED",
    ()=>s,
    "ENTERING",
    ()=>c,
    "EXITED",
    ()=>N,
    "EXITING",
    ()=>r,
    "PRE_ENTER",
    ()=>T,
    "PRE_EXIT",
    ()=>o,
    "STATUS",
    ()=>n,
    "UNMOUNTED",
    ()=>I,
    "getEndStatus",
    ()=>i,
    "getState",
    ()=>R,
    "getTimeout",
    ()=>D,
    "nextTick",
    ()=>X,
    "startOrEnd",
    ()=>t
]);
const T = 0, c = 1, s = 2, o = 3, r = 4, N = 5, I = 6, n = [
    "preEnter",
    "entering",
    "entered",
    "preExit",
    "exiting",
    "exited",
    "unmounted"
], R = (E)=>({
        _s: E,
        status: n[E],
        isEnter: E < 3,
        isMounted: E !== 6,
        isResolved: E === 2 || E > 4
    }), t = (E)=>E ? 6 : 5, i = (E, e)=>{
    switch(E){
        case 1:
        case 0:
            return 2;
        case 4:
        case 3:
            return t(e);
    }
}, D = (E)=>typeof E == "object" ? [
        E.enter,
        E.exit
    ] : [
        E,
        E
    ], X = (E, e)=>requestAnimationFrame(()=>{
        requestAnimationFrame(()=>{
            E(e + 1);
        });
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/hooks/useTransitionMap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransitionMap",
    ()=>L
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/transition.js [app-ssr] (ecmascript)");
;
;
const w = (f, s, l, c, o, E)=>{
    o && (clearTimeout(o), cancelAnimationFrame(o));
    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getState"])(s), a = new Map(c.current);
    a.set(f, p), l(a), c.current = a, E?.({
        key: f,
        current: p
    });
}, L = (f = {})=>{
    const { allowMultiple: s, enter: l = !0, exit: c = !0, preEnter: o, preExit: E, timeout: p = 200, initialEntered: a, mountOnEnter: _, unmountOnExit: m, onStateChange: d } = f, [x, g] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(/* @__PURE__ */ new Map()), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(x), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(/* @__PURE__ */ new Map()), [I, O] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimeout"])(p), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((t, e)=>{
        const { initialEntered: i = a } = e || {}, r = i ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTERED"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOrEnd"])(_ ?? !1);
        w(t, r, g, n), T.current.set(t, {});
    }, [
        a,
        _
    ]), X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
        const e = new Map(n.current);
        return e.delete(t) ? (g(e), n.current = e, T.current.delete(t), !0) : !1;
    }, []), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
        const e = n.current.get(t);
        if (!e) {
            ("TURBOPACK compile-time value", "development") !== "production" && ("TURBOPACK compile-time value", "development") !== "test" && console.error(`[React-Transition-State] invalid key: ${t}`);
            return;
        }
        const { timerId: i } = T.current.get(t) ?? {}, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEndStatus"])(e._s, m ?? !1);
        r && w(t, r, g, n, i, d);
    }, [
        d,
        m
    ]), N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((t, e)=>{
        const i = n.current.get(t);
        if (!i) {
            ("TURBOPACK compile-time value", "development") !== "production" && console.error(`[React-Transition-State] invalid key: ${t}`);
            return;
        }
        const r = T.current.get(t), R = (S)=>{
            switch(w(t, S, g, n, r.timerId, d), S){
                case __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTERING"]:
                    I >= 0 && (r.timerId = setTimeout(()=>M(t), I));
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EXITING"]:
                    O >= 0 && (r.timerId = setTimeout(()=>M(t), O));
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRE_ENTER"]:
                case __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRE_EXIT"]:
                    r.timerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nextTick"])(R, S);
                    break;
            }
        }, b = i.isEnter;
        typeof e != "boolean" && (e = !b), e ? b || (R(l ? o ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRE_ENTER"] : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTERING"] : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTERED"]), s || n.current.forEach((S, v)=>v !== t && N(v, !1))) : b && R(c ? E ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRE_EXIT"] : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EXITING"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOrEnd"])(m ?? !1));
    }, [
        d,
        M,
        s,
        l,
        c,
        o,
        E,
        I,
        O,
        m
    ]), $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
        if (!(!s && t !== !1)) for (const e of n.current.keys())N(e, t);
    }, [
        s,
        N
    ]);
    return {
        stateMap: x,
        toggle: N,
        toggleAll: $,
        endTransition: M,
        setItem: P,
        deleteItem: X
    };
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/SwitchTransition/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SwitchTransition",
    ()=>k
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$hooks$2f$useTransitionMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/hooks/useTransitionMap.js [app-ssr] (ecmascript)");
;
;
;
;
const V = {
    "transition-wrapper": "SwitchTransition-module__transition-wrapper___jrI35"
}, W = (v)=>{
    const { children: n, index: r, itemKey: i, initialEntered: u, setItem: f, deleteItem: p, stateMap: y, transitionName: I, parentKey: m } = v;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>(f(i, {
            initialEntered: u
        }), ()=>{
            p(i);
        }), [
        i,
        u,
        f,
        p
    ]);
    const { isEnter: h, isMounted: w, isResolved: x, status: g } = y.get(i) || {};
    return w ? n({
        "data-index": r,
        inert: !h,
        itemKey: i,
        "data-transition": I,
        "data-status": g,
        "data-is-enter": h,
        "data-is-resolved": x,
        "data-parent": m
    }) : null;
}, k = ({ allowMultiple: v, animateHeight: n, autoFocus: r, initialEntered: i, as: u = "div", children: f, className: p = "", enter: y, exit: I, items: m, mountOnEnter: h, onStateChange: w, preEnter: x, preExit: g, style: q, timeout: e = 200, transitionName: $, transitionRef: z, unmountOnExit: L, ...E })=>{
    const N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(m[0]), O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(), o = E.id || O, [S, A] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), [C, K] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$hooks$2f$useTransitionMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransitionMap"])({
        allowMultiple: v,
        initialEntered: !1,
        mountOnEnter: h,
        unmountOnExit: L,
        preEnter: x,
        preExit: g,
        enter: y,
        exit: I,
        timeout: e,
        onStateChange: w
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(z, ()=>({
            transition: n || r ? {
                ...a,
                toggle: (t)=>{
                    a.toggle(t), A(t);
                }
            } : a
        })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!n) return;
        let t = null;
        const s = T.current;
        if (!s) return;
        const d = setTimeout(()=>{
            const c = s.querySelector(`[data-is-enter="true"][data-parent="${o}"]`);
            if (!c) return;
            const l = c?.scrollHeight ?? null;
            l !== null && K(l), t = new ResizeObserver((B)=>{
                for (const D of B){
                    const G = D.contentRect.height;
                    K(G);
                }
            }), t.observe(c);
        }, 0);
        return ()=>{
            d && clearTimeout(d), t?.disconnect();
        };
    }, [
        n,
        S,
        o
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!r) return;
        const t = typeof e == "number" ? e : e.enter;
        if (t === void 0) return;
        const s = setTimeout(()=>{
            const d = T.current?.querySelector(`[data-is-enter="true"][data-parent="${o}"]`);
            if (!d) return;
            const c = typeof r == "string" ? r : 'input, textarea, select, button, [tabindex]:not([tabindex="-1"])', l = d.querySelector(c);
            l && l.focus();
        }, t);
        return ()=>{
            s && clearTimeout(s);
        };
    }, [
        r,
        S,
        o,
        e
    ]);
    const M = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: m.map((t, s)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(W, {
                index: s,
                itemKey: t,
                setItem: a.setItem,
                deleteItem: a.deleteItem,
                stateMap: a.stateMap,
                initialEntered: i ? N.current === t : void 0,
                transitionName: $,
                parentKey: o,
                children: f
            }, t))
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(u, {
        ...E,
        id: o,
        ref: T,
        "data-transition": $ || void 0,
        "data-animate-height": n,
        className: `${V["transition-wrapper"]} ${p}`,
        style: {
            ...q,
            "--cdp-web-transition-enter-timeout": typeof e == "object" ? `${e.enter ?? 200}ms` : void 0,
            "--cdp-web-transition-exit-timeout": typeof e == "object" ? `${e.exit ?? 200}ms` : void 0,
            "--cdp-web-transition-timeout": typeof e == "number" ? `${e}ms` : void 0,
            "--cdp-web-transition-height": n && C ? `${C}px` : void 0
        },
        children: n ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            children: M
        }) : M
    });
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/SwitchFadeTransition/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SwitchFadeTransition",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchTransition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/SwitchTransition/index.js [app-ssr] (ecmascript)");
;
;
;
;
const o = {
    "switch-fade-transition": "SwitchFadeTransition-module__switch-fade-transition___--lbT"
}, c = ({ children: t, className: i = "", ...n })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchTransition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchTransition"], {
        transitionName: "fade",
        className: `${o["switch-fade-transition"]} ${i}`,
        preEnter: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        ...n,
        children: t
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/VisuallyHidden/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisuallyHidden",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const d = {
    "visually-hidden": "VisuallyHidden-module__visually-hidden___tD5Vj"
}, a = ({ as: s = "span", children: l })=>l ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(s, {
        className: d["visually-hidden"],
        children: l
    }) : null;
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/hooks/useTimer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTimer",
    ()=>I
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const I = ()=>{
    const [i, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!n.current) {
            r(null);
            return;
        }
        const t = n.current - Date.now();
        t <= 0 ? (r(0), e.current && clearInterval(e.current)) : r(Math.ceil(t / 1e3));
    }, []), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
        e.current && clearInterval(e.current), n.current = Date.now() + t * 1e3, r(t), e.current = setInterval(u, 1e3);
    }, [
        u
    ]), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        e.current && clearInterval(e.current), r(null), n.current = null;
    }, []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            e.current && clearInterval(e.current);
        }, []), {
        timeRemaining: i,
        start: a,
        reset: s
    };
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconAppleLogo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconAppleLogo",
    ()=>h
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-ssr] (ecmascript)");
;
;
;
const h = (o)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SvgIcon"], {
        width: "14",
        height: "16",
        viewBox: "0 0 14 16",
        fill: "currentColor",
        ...o,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M10.0787 0C10.1159 0 10.1532 0 10.1925 0C10.2839 1.12836 9.85317 1.97146 9.32974 2.58201C8.81615 3.18834 8.11286 3.77641 6.97537 3.68718C6.89949 2.57498 7.33088 1.79441 7.8536 1.18527C8.33839 0.617575 9.22716 0.112414 10.0787 0Z"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M13.5221 11.7446C13.5221 11.7558 13.5221 11.7657 13.5221 11.7762C13.2025 12.7444 12.7465 13.5741 12.19 14.3442C11.6821 15.0432 11.0596 15.984 9.94808 15.984C8.98765 15.984 8.3497 15.3664 7.36537 15.3496C6.32414 15.3327 5.75153 15.866 4.79952 16.0002C4.69062 16.0002 4.58172 16.0002 4.47493 16.0002C3.77585 15.899 3.21167 15.3454 2.80066 14.8465C1.5887 13.3725 0.652147 11.4685 0.477905 9.0319C0.477905 8.79302 0.477905 8.55485 0.477905 8.31597C0.551677 6.57215 1.399 5.15432 2.52525 4.46719C3.11963 4.10185 3.93674 3.7906 4.84659 3.92971C5.23653 3.99014 5.6349 4.12363 5.98408 4.25571C6.315 4.38288 6.72883 4.60841 7.12087 4.59647C7.38645 4.58874 7.65062 4.45033 7.91831 4.35267C8.7024 4.06953 9.47103 3.74493 10.4842 3.89739C11.7017 4.08147 12.5659 4.62246 13.0999 5.45714C12.0699 6.11265 11.2556 7.10049 11.3947 8.7874C11.5184 10.3197 12.4092 11.2162 13.5221 11.7446Z"
            })
        ]
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconCheck.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconCheck",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-ssr] (ecmascript)");
;
;
;
const n = (e)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SvgIcon"], {
        viewBox: "0 0 16 16",
        width: "16",
        height: "16",
        fill: "currentColor",
        ...e,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            fillRule: "evenodd",
            d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
            clipRule: "evenodd"
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconGoogleColorLogo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconGoogleColorLogo",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-ssr] (ecmascript)");
;
;
;
const p = (e)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SvgIcon"], {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        ...e,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32 16.3637C32 15.2292 31.8961 14.1383 31.7032 13.091H16.3265V19.2801H25.1132C24.7347 21.2801 23.5844 22.9747 21.8553 24.1092V28.1237H27.1317C30.2189 25.3383 32 21.2365 32 16.3637Z",
                fill: "#4285F4"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.3265 32C20.7347 32 24.4304 30.5674 27.1317 28.1237L21.8553 24.1092C20.3933 25.0692 18.5232 25.6364 16.3265 25.6364C12.0742 25.6364 8.47497 22.8218 7.19111 19.04H1.73656V23.1855C4.42302 28.4145 9.94436 32 16.3265 32Z",
                fill: "#34A853"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.19111 19.04C6.86458 18.08 6.67904 17.0546 6.67904 16.0001C6.67904 14.9455 6.86457 13.9201 7.1911 12.9601V8.81463H1.73655C0.630798 10.9746 0 13.4183 0 16.0001C0 18.5819 0.630805 21.0254 1.73656 23.1855L7.19111 19.04Z",
                fill: "#FBBC05"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.3265 6.36364C18.7236 6.36364 20.8757 7.17091 22.5677 8.75637L27.2505 4.16728C24.423 1.58546 20.7273 0 16.3265 0C9.94436 0 4.42301 3.58554 1.73655 8.81463L7.1911 12.9601C8.47496 9.17827 12.0742 6.36364 16.3265 6.36364Z",
                fill: "#EA4335"
            })
        ]
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconXLogo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconXLogo",
    ()=>e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-ssr] (ecmascript)");
;
;
;
const e = (L)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SvgIcon"], {
        width: "15",
        height: "15",
        viewBox: "0 0 15 15",
        fill: "none",
        ...L,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            fill: "currentColor",
            d: "M8.92704 6.34822L14.5111 0H13.1879L8.33921 5.51207L4.4666 0H0L5.85615 8.33522L0 14.9923H1.32333L6.44364 9.17137L10.5334 14.9923H15L8.92671 6.34822H8.92704ZM7.11456 8.40866L6.52121 7.57866L1.80014 0.974259H3.83269L7.64265 6.30422L8.236 7.13422L13.1885 14.0623H11.156L7.11456 8.40897V8.40866Z"
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconXMark.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconXMark",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-ssr] (ecmascript)");
;
;
;
const n = (r)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SvgIcon"], {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...r,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            fillRule: "evenodd",
            d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
            clipRule: "evenodd"
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/capitalize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "capitalize",
    ()=>r
]);
function r(t) {
    return t.length === 0 ? t : t.charAt(0).toUpperCase() + t.slice(1);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/OAuthStatusModal/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OAUTH_IS_ACCOUNT_LINK_SESSION_STORAGE_KEY",
    ()=>g,
    "OAUTH_PROVIDER_SESSION_STORAGE_KEY",
    ()=>p,
    "OAuthStatusModal",
    ()=>Nt,
    "OAuthStatusModalContent",
    ()=>Z,
    "default",
    ()=>Nt,
    "useOauthStatusModal",
    ()=>It
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index5.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$useSendComponentCallOnce$2e$BHZMuo6E$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/useSendComponentCallOnce.BHZMuo6E.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/CDPReactProvider/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$CoinbaseFooter$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/CoinbaseFooter/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$LoadingSpinner$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/LoadingSpinner/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Modal/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchFadeTransition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/SwitchFadeTransition/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/VisuallyHidden/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$hooks$2f$useTimer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/hooks/useTimer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconAppleLogo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconAppleLogo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconCheck.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconGoogleColorLogo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconGoogleColorLogo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconXLogo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconXLogo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconXMark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconXMark.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/capitalize.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const Y = "OAuthStatusModal-module__status___vU6x7", j = "OAuthStatusModal-module__graphic___2fKoa", D = "OAuthStatusModal-module__pad___oooMz", F = "OAuthStatusModal-module__spinner___Q3dYq", z = "OAuthStatusModal-module__icon___Lj5Gf", V = "OAuthStatusModal-module__subhead___Pg9GI", W = "OAuthStatusModal-module__description___0qOZY", X = "OAuthStatusModal-module__ring___mKwSb", J = "OAuthStatusModal-module__invisible___IeRd0", t = {
    "oauth-status-modal": "OAuthStatusModal-module__oauth-status-modal___I69Ii",
    "transition-wrapper": "OAuthStatusModal-module__transition-wrapper___TmPRh",
    status: Y,
    graphic: j,
    pad: D,
    spinner: F,
    icon: z,
    "icon-success": "OAuthStatusModal-module__icon-success___gqMWr",
    "icon-error": "OAuthStatusModal-module__icon-error___psI7m",
    subhead: V,
    description: W,
    ring: X,
    "ring-success": "OAuthStatusModal-module__ring-success___unyM9",
    "ring-error": "OAuthStatusModal-module__ring-error___OsgqU",
    invisible: J
}, p = "cdp-react-sign-in-with-oauth-provider-name", g = "cdp-react-sign-in-with-oauth-is-account-link", Q = [
    "pending",
    "success",
    "error"
], It = ()=>{
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProviderName"])() || "";
    return {
        persistOAuthState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
            sessionStorage.setItem(p, n), sessionStorage.setItem(g, e ? "true" : "false");
        }, [
            n
        ])
    };
}, Nt = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$useSendComponentCallOnce$2e$BHZMuo6E$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])("oauth_status_modal");
    const [n, o] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), { oauthState: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOAuthState"])(), [d, a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProviderName"])(), u = e?.providerType || "google";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (e?.status === "pending" || e?.status === "error" || e?.status === "success") {
            const l = sessionStorage.getItem(p);
            if (l === null || l !== c) return;
            sessionStorage.removeItem(p), o(!0);
            const m = sessionStorage.getItem(g) === "true";
            sessionStorage.removeItem(g), a(m);
        }
    }, [
        e?.status,
        c
    ]), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
        open: n,
        onOpenChange: o,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModalContent"], {
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModalTitle"], {
                        children: "OAuth Status"
                    })
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModalDescription"], {
                        children: [
                            d ? `Linking your ${u} account` : `Signing in with ${u}`,
                            " ",
                            e?.status ? `${e?.status === "success" ? "successful" : e?.status === "error" ? "failed" : "pending"}` : ""
                        ]
                    })
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Z, {
                    isAccountLink: d,
                    handleClose: ()=>o(!1)
                })
            ]
        })
    });
}, Z = ({ isAccountLink: n, handleClose: o })=>{
    const { oauthState: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOAuthState"])(), d = e?.providerType || "google", { timeRemaining: a, start: c, reset: u } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$hooks$2f$useTimer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimer"])(), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), v = 250, f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((i)=>{
        m.current === i || i === void 0 || (m.current = i, l.current?.transition.toggle(i));
    }, []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        f(e?.status), e?.status === "success" && c(3);
    }, [
        e?.status,
        f,
        c
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        a !== null && a <= 0 && (u(), o());
    }, [
        a,
        u,
        o
    ]), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: t["oauth-status-modal"],
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchFadeTransition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchFadeTransition"], {
                animateHeight: !1,
                timeout: v,
                items: Q,
                initialEntered: !1,
                transitionRef: l,
                className: t["transition-wrapper"],
                children: ({ itemKey: i, ...C })=>{
                    const T = et[i];
                    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        ...C,
                        className: t.status,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(T, {
                            isAccountLink: n,
                            timeRemaining: a,
                            provider: d
                        })
                    });
                }
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$CoinbaseFooter$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoinbaseFooter"], {})
        ]
    });
}, B = ({ isAccountLink: n, provider: o })=>{
    const e = ot[o];
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: t.graphic,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$LoadingSpinner$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
                        strokeWidth: "5%",
                        staticStroke: !0,
                        staticStrokeColor: "var(--cdp-web-colors-line-default)",
                        className: t.spinner
                    }),
                    e && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: t.icon,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(e, {})
                    })
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: t.subhead,
                children: n ? `Linking your ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["capitalize"])(o)} account` : `Signing in with ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["capitalize"])(o)}`
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: t.description,
                children: "Just a moment..."
            })
        ]
    });
}, tt = ({ isAccountLink: n, timeRemaining: o, provider: e })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: t.graphic,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: `${t.ring} ${t["ring-success"]}`
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: `${t.icon} ${t["icon-success"]}`,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconCheck"], {})
                    })
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: t.subhead,
                children: n ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["capitalize"])(e)} account linked` : `Signed in with ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["capitalize"])(e)}`
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("p", {
                className: `${t.description} ${o === null ? t.invisible : ""}`,
                children: [
                    "This window will automatically close in ",
                    o ?? "soon"
                ]
            })
        ]
    }), st = ({ isAccountLink: n })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: `${t.graphic} ${t.pad}`,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: `${t.ring} ${t["ring-error"]}`
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: `${t.icon} ${t["icon-error"]}`,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconXMark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconXMark"], {})
                    })
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: t.subhead,
                children: n ? "Account linking failed" : "Sign in failed"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: t.description,
                children: "Something went wrong. Please try again."
            })
        ]
    }), et = {
    pending: B,
    success: tt,
    error: st
}, ot = {
    google: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconGoogleColorLogo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconGoogleColorLogo"],
    apple: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconAppleLogo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconAppleLogo"],
    x: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconXLogo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconXLogo"]
};
;
}),
];

//# sourceMappingURL=9f313_2a33cea6._.js.map