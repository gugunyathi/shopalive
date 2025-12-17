(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/useSendComponentCallOnce.BHZMuo6E.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>g,
    "u",
    ()=>nt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
        if (typeof window > "u") return typeof __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] < "u" && __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && "__NEXT_PROCESSED_ENV" in __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env;
        const s = window;
        return !!(s.__NEXT_DATA__ || s.next || document.getElementById("__next"));
    } catch  {
        return !1;
    }
}
function z() {
    try {
        if (typeof window > "u") return !1;
        const s = window;
        return !!(s.__VUE__ || s.__VUE_DEVTOOLS_GLOBAL_HOOK__ || document.querySelector("[data-v-]"));
    } catch  {
        return !1;
    }
}
function W() {
    try {
        if (typeof window > "u") return !1;
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
    return typeof window < "u" && typeof document < "u";
}
function j() {
    return k() ? window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" : !1;
}
function nt(s) {
    const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        l.current || (g.sendComponentCallEvent({
            name: s
        }), l.current = !0);
    }, [
        s
    ]);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/lite.1fxw3LjI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SvgIcon",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const n = ({ children: o, ...r })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        role: "img",
        "aria-hidden": r["aria-label"] ? void 0 : !0,
        ...r,
        children: o
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconCoinbaseWordmark.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconCoinbaseWordmark",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-client] (ecmascript)");
;
;
;
const o = (i)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcon"], {
        width: "67",
        height: "13",
        viewBox: "0 0 67 13",
        fill: "none",
        ...i,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("g", {
                clipPath: "url(#clip0_7507_87)",
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                    d: "M13.5224 3.8526C11.0884 3.8526 9.18662 5.70351 9.18662 8.18134C9.18662 10.6592 11.0404 12.4942 13.5224 12.4942C16.0044 12.4942 17.8903 10.6275 17.8903 8.1655C17.8903 5.71935 16.0366 3.8526 13.5224 3.8526ZM13.5388 10.7085C12.1527 10.7085 11.1371 9.63014 11.1371 8.18195C11.1371 6.71731 12.1363 5.63954 13.5224 5.63954C14.9248 5.63954 15.9399 6.73376 15.9399 8.18195C15.9399 9.63014 14.9248 10.7085 13.5388 10.7085ZM18.4219 5.7358H19.631V12.334H21.565V4.01344H18.4219V5.7358ZM4.31932 5.63893C5.33499 5.63893 6.14083 6.26646 6.44675 7.19983H8.4939C8.12291 5.20453 6.47899 3.8526 4.33574 3.8526C1.90179 3.8526 0 5.70351 0 8.18195C0 10.6604 1.85375 12.4948 4.33574 12.4948C6.43094 12.4948 8.10709 11.1429 8.47809 9.13116H6.44675C6.15665 10.0645 5.3508 10.7085 4.33514 10.7085C2.93266 10.7085 1.94984 9.63014 1.94984 8.18195C1.95045 6.71731 2.91746 5.63893 4.31932 5.63893ZM55.1696 7.37713L53.7513 7.16815C53.0744 7.07189 52.5909 6.84647 52.5909 6.3152C52.5909 5.7358 53.2198 5.44641 54.0736 5.44641C55.0084 5.44641 55.6051 5.84851 55.734 6.50833H57.6035C57.3937 4.83472 56.1044 3.85321 54.1223 3.85321C52.0752 3.85321 50.7213 4.8993 50.7213 6.37978C50.7213 7.79568 51.6081 8.61695 53.3967 8.87406L54.815 9.08303C55.5084 9.17929 55.8952 9.45346 55.8952 9.96828C55.8952 10.6281 55.2182 10.9016 54.2835 10.9016C53.1389 10.9016 52.4942 10.435 52.3975 9.72701H50.4957C50.6733 11.3525 51.9462 12.4948 54.2671 12.4948C56.3787 12.4948 57.7805 11.5292 57.7805 9.8714C57.7805 8.39092 56.7655 7.61839 55.1696 7.37713ZM20.598 0.585792C19.8888 0.585792 19.3567 1.10061 19.3567 1.80856C19.3567 2.51651 19.8882 3.03133 20.598 3.03133C21.3071 3.03133 21.8393 2.51651 21.8393 1.80856C21.8393 1.10061 21.3071 0.585792 20.598 0.585792ZM48.9807 6.86231C48.9807 5.06014 47.8848 3.85321 45.5639 3.85321C43.372 3.85321 42.1472 4.96388 41.9051 6.66978H43.8233C43.92 6.00996 44.4358 5.46286 45.5317 5.46286C46.5151 5.46286 46.9986 5.89725 46.9986 6.42852C46.9986 7.12063 46.1119 7.29731 45.016 7.41003C43.5332 7.57087 41.6959 8.08569 41.6959 10.017C41.6959 11.5139 42.8083 12.479 44.5811 12.479C45.9672 12.479 46.8375 11.8996 47.2729 10.9821C47.3374 11.8027 47.9498 12.334 48.8043 12.334H49.9325V10.6123H48.9813V6.86231H48.9807ZM47.0789 8.95448C47.0789 10.0651 46.1119 10.8858 44.9351 10.8858C44.2095 10.8858 43.5971 10.58 43.5971 9.93659C43.5971 9.11593 44.5805 8.89051 45.483 8.79425C46.3534 8.71383 46.8369 8.52069 47.0789 8.15027V8.95448ZM36.8122 3.8526C35.732 3.8526 34.8295 4.30345 34.1848 5.05953V0.505371H32.2508V12.334H34.1526V11.2398C34.7973 12.0282 35.7162 12.4948 36.8122 12.4948C39.133 12.4948 40.89 10.6604 40.89 8.18195C40.89 5.70351 39.1008 3.8526 36.8122 3.8526ZM36.5221 10.7085C35.136 10.7085 34.1203 9.63014 34.1203 8.18195C34.1203 6.73376 35.1518 5.63954 36.5379 5.63954C37.9403 5.63954 38.9232 6.71792 38.9232 8.18195C38.9232 9.63014 37.9081 10.7085 36.5221 10.7085ZM27.6249 3.8526C26.3678 3.8526 25.5456 4.36742 25.062 5.09182V4.01344H23.1438V12.3334H25.0779V7.81152C25.0779 6.54001 25.8837 5.63893 27.0764 5.63893C28.1887 5.63893 28.8814 6.4273 28.8814 7.57026V12.334H30.8155V7.42587C30.8161 5.33308 29.7366 3.8526 27.6249 3.8526ZM67 7.90839C67 5.52683 65.2594 3.85321 62.9221 3.85321C60.4401 3.85321 58.6186 5.71996 58.6186 8.18195C58.6186 10.7731 60.5691 12.4948 62.9544 12.4948C64.9693 12.4948 66.5487 11.3038 66.9513 9.6143H64.9364C64.6463 10.3545 63.9372 10.7731 62.986 10.7731C61.7447 10.7731 60.8099 10.0006 60.6007 8.64863H66.9994V7.90839H67ZM60.7138 7.26441C61.0203 6.10562 61.8906 5.54267 62.8899 5.54267C63.9858 5.54267 64.8239 6.1702 65.0173 7.26441H60.7138Z",
                    fill: "currentColor"
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("defs", {
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("clipPath", {
                    id: "clip0_7507_87",
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("rect", {
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconLock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconLock",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-client] (ecmascript)");
;
;
;
const n = (r)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcon"], {
        width: "11",
        height: "11",
        viewBox: "0 0 11 11",
        ...r,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M2.98877 4.49512V3.49512C2.98877 1.83826 4.33192 0.495117 5.98877 0.495117C7.64562 0.495117 8.98877 1.83826 8.98877 3.49512V4.49512H10.9888V10.4951H0.98877V4.49512H2.98877ZM7.78877 3.49512C7.78877 2.501 6.98288 1.69512 5.98877 1.69512C4.99466 1.69512 4.18877 2.501 4.18877 3.49512V4.49512H7.78877V3.49512Z",
            fill: "currentColor"
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/CoinbaseFooter/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoinbaseFooter",
    ()=>x
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconCoinbaseWordmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconCoinbaseWordmark.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconLock.js [app-client] (ecmascript)");
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
}, x = ({ className: n = "", ...t })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: `${o.footer} ${n}`,
        ...t,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLock"], {
                className: o.icon
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("p", {
                className: o.text,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        children: "Secured by "
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconCoinbaseWordmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoinbaseWordmark"], {
                        className: o["coinbase-icon"],
                        "aria-label": "Coinbase"
                    })
                ]
            })
        ]
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/LoadingSpinner/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingSpinner",
    ()=>g
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const p = "LoadingSpinner-module__spinner___-zo6Y", i = {
    spinner: p,
    "spinner-circle": "LoadingSpinner-module__spinner-circle___9Jfm7"
}, g = ({ className: o, staticStroke: c, staticStrokeColor: r = "currentColor", strokeWidth: e = "3", style: l })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-label": "loading",
        width: "24",
        height: "24",
        stroke: "currentColor",
        className: o,
        style: l,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("g", {
            className: i.spinner,
            children: [
                c && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "9.5",
                    fill: "none",
                    strokeWidth: e,
                    stroke: r,
                    opacity: r === "currentColor" ? "0.2" : void 0
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("circle", {
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Modal/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$lite$2e$1fxw3LjI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/lite.1fxw3LjI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ThemeProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ThemeProvider/index.js [app-client] (ecmascript)");
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
}, j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ children: r, className: t = "", overlayClassName: c = "", overlayStyle: l, ...i }, d)=>{
    const { cssVariables: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ThemeProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])(), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...s,
            ...l
        }), [
        s,
        l
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogPortal"], {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogOverlay"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$lite$2e$1fxw3LjI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(a.overlay, c),
            style: m,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: a.spacer
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    ...i,
                    ref: d,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$lite$2e$1fxw3LjI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(a.modal, t),
                    children: r
                })
            ]
        })
    });
});
j.displayName = "ModalContent";
const w = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], G = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogClose"], I = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], P = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], Q = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"];
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/transition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/hooks/useTransitionMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransitionMap",
    ()=>L
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/transition.js [app-client] (ecmascript)");
;
;
const w = (f, s, l, c, o, E)=>{
    o && (clearTimeout(o), cancelAnimationFrame(o));
    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getState"])(s), a = new Map(c.current);
    a.set(f, p), l(a), c.current = a, E?.({
        key: f,
        current: p
    });
}, L = (f = {})=>{
    const { allowMultiple: s, enter: l = !0, exit: c = !0, preEnter: o, preExit: E, timeout: p = 200, initialEntered: a, mountOnEnter: _, unmountOnExit: m, onStateChange: d } = f, [x, g] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(/* @__PURE__ */ new Map()), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(x), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(/* @__PURE__ */ new Map()), [I, O] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeout"])(p), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((t, e)=>{
        const { initialEntered: i = a } = e || {}, r = i ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTERED"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOrEnd"])(_ ?? !1);
        w(t, r, g, n), T.current.set(t, {});
    }, [
        a,
        _
    ]), X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
        const e = new Map(n.current);
        return e.delete(t) ? (g(e), n.current = e, T.current.delete(t), !0) : !1;
    }, []), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
        const e = n.current.get(t);
        if (!e) {
            ("TURBOPACK compile-time value", "development") !== "production" && ("TURBOPACK compile-time value", "development") !== "test" && console.error(`[React-Transition-State] invalid key: ${t}`);
            return;
        }
        const { timerId: i } = T.current.get(t) ?? {}, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEndStatus"])(e._s, m ?? !1);
        r && w(t, r, g, n, i, d);
    }, [
        d,
        m
    ]), N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((t, e)=>{
        const i = n.current.get(t);
        if (!i) {
            ("TURBOPACK compile-time value", "development") !== "production" && console.error(`[React-Transition-State] invalid key: ${t}`);
            return;
        }
        const r = T.current.get(t), R = (S)=>{
            switch(w(t, S, g, n, r.timerId, d), S){
                case __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTERING"]:
                    I >= 0 && (r.timerId = setTimeout(()=>M(t), I));
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXITING"]:
                    O >= 0 && (r.timerId = setTimeout(()=>M(t), O));
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRE_ENTER"]:
                case __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRE_EXIT"]:
                    r.timerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTick"])(R, S);
                    break;
            }
        }, b = i.isEnter;
        typeof e != "boolean" && (e = !b), e ? b || (R(l ? o ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRE_ENTER"] : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTERING"] : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTERED"]), s || n.current.forEach((S, v)=>v !== t && N(v, !1))) : b && R(c ? E ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRE_EXIT"] : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXITING"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOrEnd"])(m ?? !1));
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
    ]), $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/SwitchTransition/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SwitchTransition",
    ()=>k
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$hooks$2f$useTransitionMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/hooks/useTransitionMap.js [app-client] (ecmascript)");
;
;
;
;
const V = {
    "transition-wrapper": "SwitchTransition-module__transition-wrapper___jrI35"
}, W = (v)=>{
    const { children: n, index: r, itemKey: i, initialEntered: u, setItem: f, deleteItem: p, stateMap: y, transitionName: I, parentKey: m } = v;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(f(i, {
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
    const N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(m[0]), O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), o = E.id || O, [S, A] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [C, K] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$hooks$2f$useTransitionMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionMap"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(z, ()=>({
            transition: n || r ? {
                ...a,
                toggle: (t)=>{
                    a.toggle(t), A(t);
                }
            } : a
        })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
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
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
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
    const M = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: m.map((t, s)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(W, {
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
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(u, {
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
        children: n ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            children: M
        }) : M
    });
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/SwitchFadeTransition/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SwitchFadeTransition",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchTransition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/SwitchTransition/index.js [app-client] (ecmascript)");
;
;
;
;
const o = {
    "switch-fade-transition": "SwitchFadeTransition-module__switch-fade-transition___--lbT"
}, c = ({ children: t, className: i = "", ...n })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchTransition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchTransition"], {
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/VisuallyHidden/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisuallyHidden",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const d = {
    "visually-hidden": "VisuallyHidden-module__visually-hidden___tD5Vj"
}, a = ({ as: s = "span", children: l })=>l ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(s, {
        className: d["visually-hidden"],
        children: l
    }) : null;
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/hooks/useTimer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTimer",
    ()=>I
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const I = ()=>{
    const [i, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!n.current) {
            r(null);
            return;
        }
        const t = n.current - Date.now();
        t <= 0 ? (r(0), e.current && clearInterval(e.current)) : r(Math.ceil(t / 1e3));
    }, []), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
        e.current && clearInterval(e.current), n.current = Date.now() + t * 1e3, r(t), e.current = setInterval(u, 1e3);
    }, [
        u
    ]), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        e.current && clearInterval(e.current), r(null), n.current = null;
    }, []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            e.current && clearInterval(e.current);
        }, []), {
        timeRemaining: i,
        start: a,
        reset: s
    };
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconAppleLogo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconAppleLogo",
    ()=>h
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-client] (ecmascript)");
;
;
;
const h = (o)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcon"], {
        width: "14",
        height: "16",
        viewBox: "0 0 14 16",
        fill: "currentColor",
        ...o,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M10.0787 0C10.1159 0 10.1532 0 10.1925 0C10.2839 1.12836 9.85317 1.97146 9.32974 2.58201C8.81615 3.18834 8.11286 3.77641 6.97537 3.68718C6.89949 2.57498 7.33088 1.79441 7.8536 1.18527C8.33839 0.617575 9.22716 0.112414 10.0787 0Z"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M13.5221 11.7446C13.5221 11.7558 13.5221 11.7657 13.5221 11.7762C13.2025 12.7444 12.7465 13.5741 12.19 14.3442C11.6821 15.0432 11.0596 15.984 9.94808 15.984C8.98765 15.984 8.3497 15.3664 7.36537 15.3496C6.32414 15.3327 5.75153 15.866 4.79952 16.0002C4.69062 16.0002 4.58172 16.0002 4.47493 16.0002C3.77585 15.899 3.21167 15.3454 2.80066 14.8465C1.5887 13.3725 0.652147 11.4685 0.477905 9.0319C0.477905 8.79302 0.477905 8.55485 0.477905 8.31597C0.551677 6.57215 1.399 5.15432 2.52525 4.46719C3.11963 4.10185 3.93674 3.7906 4.84659 3.92971C5.23653 3.99014 5.6349 4.12363 5.98408 4.25571C6.315 4.38288 6.72883 4.60841 7.12087 4.59647C7.38645 4.58874 7.65062 4.45033 7.91831 4.35267C8.7024 4.06953 9.47103 3.74493 10.4842 3.89739C11.7017 4.08147 12.5659 4.62246 13.0999 5.45714C12.0699 6.11265 11.2556 7.10049 11.3947 8.7874C11.5184 10.3197 12.4092 11.2162 13.5221 11.7446Z"
            })
        ]
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconCheck.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconCheck",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-client] (ecmascript)");
;
;
;
const n = (e)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcon"], {
        viewBox: "0 0 16 16",
        width: "16",
        height: "16",
        fill: "currentColor",
        ...e,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            fillRule: "evenodd",
            d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
            clipRule: "evenodd"
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconGoogleColorLogo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconGoogleColorLogo",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-client] (ecmascript)");
;
;
;
const p = (e)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcon"], {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        ...e,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32 16.3637C32 15.2292 31.8961 14.1383 31.7032 13.091H16.3265V19.2801H25.1132C24.7347 21.2801 23.5844 22.9747 21.8553 24.1092V28.1237H27.1317C30.2189 25.3383 32 21.2365 32 16.3637Z",
                fill: "#4285F4"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.3265 32C20.7347 32 24.4304 30.5674 27.1317 28.1237L21.8553 24.1092C20.3933 25.0692 18.5232 25.6364 16.3265 25.6364C12.0742 25.6364 8.47497 22.8218 7.19111 19.04H1.73656V23.1855C4.42302 28.4145 9.94436 32 16.3265 32Z",
                fill: "#34A853"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.19111 19.04C6.86458 18.08 6.67904 17.0546 6.67904 16.0001C6.67904 14.9455 6.86457 13.9201 7.1911 12.9601V8.81463H1.73655C0.630798 10.9746 0 13.4183 0 16.0001C0 18.5819 0.630805 21.0254 1.73656 23.1855L7.19111 19.04Z",
                fill: "#FBBC05"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.3265 6.36364C18.7236 6.36364 20.8757 7.17091 22.5677 8.75637L27.2505 4.16728C24.423 1.58546 20.7273 0 16.3265 0C9.94436 0 4.42301 3.58554 1.73655 8.81463L7.1911 12.9601C8.47496 9.17827 12.0742 6.36364 16.3265 6.36364Z",
                fill: "#EA4335"
            })
        ]
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconXLogo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconXLogo",
    ()=>e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-client] (ecmascript)");
;
;
;
const e = (L)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcon"], {
        width: "15",
        height: "15",
        viewBox: "0 0 15 15",
        fill: "none",
        ...L,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            fill: "currentColor",
            d: "M8.92704 6.34822L14.5111 0H13.1879L8.33921 5.51207L4.4666 0H0L5.85615 8.33522L0 14.9923H1.32333L6.44364 9.17137L10.5334 14.9923H15L8.92671 6.34822H8.92704ZM7.11456 8.40866L6.52121 7.57866L1.80014 0.974259H3.83269L7.64265 6.30422L8.236 7.13422L13.1885 14.0623H11.156L7.11456 8.40897V8.40866Z"
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconXMark.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconXMark",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-client] (ecmascript)");
;
;
;
const n = (r)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcon"], {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...r,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            fillRule: "evenodd",
            d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
            clipRule: "evenodd"
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/capitalize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/OAuthStatusModal/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$useSendComponentCallOnce$2e$BHZMuo6E$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/useSendComponentCallOnce.BHZMuo6E.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/CDPReactProvider/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$CoinbaseFooter$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/CoinbaseFooter/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$LoadingSpinner$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/LoadingSpinner/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Modal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchFadeTransition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/SwitchFadeTransition/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/VisuallyHidden/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$hooks$2f$useTimer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/hooks/useTimer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconAppleLogo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconAppleLogo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconGoogleColorLogo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconGoogleColorLogo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconXLogo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconXLogo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconXMark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconXMark.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/capitalize.js [app-client] (ecmascript)");
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
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProviderName"])() || "";
    return {
        persistOAuthState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
            sessionStorage.setItem(p, n), sessionStorage.setItem(g, e ? "true" : "false");
        }, [
            n
        ])
    };
}, Nt = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$useSendComponentCallOnce$2e$BHZMuo6E$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])("oauth_status_modal");
    const [n, o] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), { oauthState: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOAuthState"])(), [d, a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProviderName"])(), u = e?.providerType || "google";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    ]), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        open: n,
        onOpenChange: o,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalContent"], {
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalTitle"], {
                        children: "OAuth Status"
                    })
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalDescription"], {
                        children: [
                            d ? `Linking your ${u} account` : `Signing in with ${u}`,
                            " ",
                            e?.status ? `${e?.status === "success" ? "successful" : e?.status === "error" ? "failed" : "pending"}` : ""
                        ]
                    })
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Z, {
                    isAccountLink: d,
                    handleClose: ()=>o(!1)
                })
            ]
        })
    });
}, Z = ({ isAccountLink: n, handleClose: o })=>{
    const { oauthState: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOAuthState"])(), d = e?.providerType || "google", { timeRemaining: a, start: c, reset: u } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$hooks$2f$useTimer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimer"])(), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), v = 250, f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((i)=>{
        m.current === i || i === void 0 || (m.current = i, l.current?.transition.toggle(i));
    }, []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        f(e?.status), e?.status === "success" && c(3);
    }, [
        e?.status,
        f,
        c
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        a !== null && a <= 0 && (u(), o());
    }, [
        a,
        u,
        o
    ]), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: t["oauth-status-modal"],
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchFadeTransition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchFadeTransition"], {
                animateHeight: !1,
                timeout: v,
                items: Q,
                initialEntered: !1,
                transitionRef: l,
                className: t["transition-wrapper"],
                children: ({ itemKey: i, ...C })=>{
                    const T = et[i];
                    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        ...C,
                        className: t.status,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(T, {
                            isAccountLink: n,
                            timeRemaining: a,
                            provider: d
                        })
                    });
                }
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$CoinbaseFooter$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoinbaseFooter"], {})
        ]
    });
}, B = ({ isAccountLink: n, provider: o })=>{
    const e = ot[o];
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: t.graphic,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$LoadingSpinner$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
                        strokeWidth: "5%",
                        staticStroke: !0,
                        staticStrokeColor: "var(--cdp-web-colors-line-default)",
                        className: t.spinner
                    }),
                    e && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: t.icon,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(e, {})
                    })
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: t.subhead,
                children: n ? `Linking your ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capitalize"])(o)} account` : `Signing in with ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capitalize"])(o)}`
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: t.description,
                children: "Just a moment..."
            })
        ]
    });
}, tt = ({ isAccountLink: n, timeRemaining: o, provider: e })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: t.graphic,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: `${t.ring} ${t["ring-success"]}`
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: `${t.icon} ${t["icon-success"]}`,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {})
                    })
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: t.subhead,
                children: n ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capitalize"])(e)} account linked` : `Signed in with ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capitalize"])(e)}`
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("p", {
                className: `${t.description} ${o === null ? t.invisible : ""}`,
                children: [
                    "This window will automatically close in ",
                    o ?? "soon"
                ]
            })
        ]
    }), st = ({ isAccountLink: n })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: `${t.graphic} ${t.pad}`,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: `${t.ring} ${t["ring-error"]}`
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: `${t.icon} ${t["icon-error"]}`,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconXMark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconXMark"], {})
                    })
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: t.subhead,
                children: n ? "Account linking failed" : "Sign in failed"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: t.description,
                children: "Something went wrong. Please try again."
            })
        ]
    }), et = {
    pending: B,
    success: tt,
    error: st
}, ot = {
    google: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconGoogleColorLogo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconGoogleColorLogo"],
    apple: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconAppleLogo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAppleLogo"],
    x: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconXLogo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconXLogo"]
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/isApiError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isApiError",
    ()=>i
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index8.js [app-client] (ecmascript)");
;
const i = (r)=>r instanceof __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"];
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/hooks/useSignInWithOAuth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSignInWithOAuth",
    ()=>E
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$OAuthStatusModal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/OAuthStatusModal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$isApiError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/isApiError.js [app-client] (ecmascript)");
;
;
;
;
const E = ()=>{
    const { signInWithOAuth: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInWithOAuth"])(), [r, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), [l, e] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), i = "An error occurred while signing in. Please try again.", { persistOAuthState: u } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$OAuthStatusModal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOauthStatusModal"])();
    return {
        signInWithOAuth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async (a)=>{
            if (!r) {
                o.current = a, s(!0), e(null);
                try {
                    await n(a), u(!1);
                } catch (t) {
                    const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$isApiError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isApiError"])(t) ? t : t instanceof Error && t.message || i;
                    e(h), s(!1), console.error(t);
                }
            }
        }, [
            r,
            n,
            u
        ]),
        oauthProvider: o,
        isPending: r,
        error: l
    };
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/useSignInReducer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSignInReducer",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
function l(e, r) {
    switch(r.type){
        case "SET_AUTH_METHODS":
            return {
                ...e,
                authMethods: r.payload.authMethods
            };
        case "SET_AUTH_METHOD":
            return {
                ...e,
                authMethod: r.payload.authMethod,
                step: "credentials",
                email: "",
                phoneNumber: "",
                error: null
            };
        case "SET_EMAIL":
            return {
                ...e,
                email: r.payload.email,
                phoneNumber: "",
                error: null
            };
        case "SUBMIT_EMAIL":
            return {
                ...e,
                isPending: !0,
                email: r.payload.email,
                phoneNumber: "",
                error: null
            };
        case "SET_PHONE_NUMBER":
            return {
                ...e,
                phoneNumber: r.payload.phoneNumber,
                email: "",
                error: null
            };
        case "SUBMIT_PHONE_NUMBER":
            return {
                ...e,
                isPending: !0,
                phoneNumber: r.payload.phoneNumber,
                email: "",
                error: null
            };
        case "SUBMIT_EMAIL_SUCCESS":
        case "SUBMIT_PHONE_NUMBER_SUCCESS":
            return {
                ...e,
                error: null,
                flowId: r.payload.flowId,
                canResetOTP: !1,
                isPending: !1,
                otp: "",
                step: "verification"
            };
        case "SUBMIT_EMAIL_FAILURE":
        case "SUBMIT_PHONE_NUMBER_FAILURE":
            return {
                ...e,
                error: r.payload.error,
                isPending: !1
            };
        case "SET_OTP":
            return {
                ...e,
                error: null,
                otp: r.payload.otp
            };
        case "SUBMIT_OTP":
            return {
                ...e,
                error: null,
                isPending: !0,
                otp: r.payload.otp
            };
        case "SUBMIT_OTP_SUCCESS":
            return {
                ...e,
                error: null,
                isPending: !1,
                isSuccess: !0
            };
        case "SUBMIT_OTP_FAILURE":
            return {
                ...e,
                error: r.payload.error,
                isPending: !1,
                isSuccess: !1
            };
        case "ALLOW_RESET_OTP":
            return {
                ...e,
                canResetOTP: !0
            };
        case "RESET_OTP":
            return {
                ...e,
                error: null,
                canResetOTP: !1
            };
        case "CLEAR_ERROR":
            return {
                ...e,
                error: null
            };
        case "RESET_STATE":
            return {
                authMethod: e.authMethod,
                authMethods: e.authMethods,
                canResetOTP: !1,
                error: null,
                isPending: !1,
                isSuccess: !1,
                email: "",
                flowId: "",
                otp: "",
                phoneNumber: "",
                step: "credentials"
            };
        default:
            throw new Error("Unknown action type");
    }
}
const s = (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(l, e);
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInContext",
    ()=>u,
    "SignInProvider",
    ()=>v,
    "useSignInContext",
    ()=>M
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/CDPReactProvider/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$useSignInReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/useSignInReducer.js [app-client] (ecmascript)");
;
;
;
;
;
const a = {
    authMethod: "email",
    authMethods: [
        "email"
    ],
    canResetOTP: !1,
    email: "",
    error: null,
    flowId: "",
    isPending: !1,
    isSuccess: !1,
    otp: "",
    phoneNumber: "",
    step: "credentials"
}, u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    state: a,
    dispatch: ()=>{}
}), M = ()=>{
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(u);
    if (!t) throw new Error("useSignInContext must be used within a SignInProvider");
    return t;
}, v = ({ children: t, authMethods: n })=>{
    const { authMethods: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppConfig"])(), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>n?.filter((d)=>o.includes(d)) ?? o, [
        n,
        o
    ]), [s, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$useSignInReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInReducer"])({
        ...a,
        authMethod: e?.[0] || "email",
        authMethods: e
    }), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            state: {
                ...s,
                authMethods: e
            },
            dispatch: r
        }), [
        s,
        r,
        e
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(u.Provider, {
        value: c,
        children: t
    });
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/ButtonBase/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonBase",
    ()=>z
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$lite$2e$1fxw3LjI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/lite.1fxw3LjI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
const r = "ButtonBase-module__btn___9S8PJ", s = {
    btn: r,
    "full-width": "ButtonBase-module__full-width___vLJsn",
    "size-lg": "ButtonBase-module__size-lg___569jT",
    "size-md": "ButtonBase-module__size-md___sAsBJ",
    "size-sm": "ButtonBase-module__size-sm___xHCtU",
    "size-xs": "ButtonBase-module__size-xs___LiiO7"
}, i = {
    lg: s["size-lg"],
    md: s["size-md"],
    sm: s["size-sm"],
    xs: s["size-xs"],
    none: ""
}, z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ children: _, className: m = "", fullWidth: t = !1, isPending: a, size: e = "md", ...o }, d)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
        className: o.asChild ? "" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$lite$2e$1fxw3LjI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(s.btn, i[e] ?? i.md, t && s["full-width"], m),
        ref: d,
        "data-pending": a,
        "data-size": e,
        "data-full-width": t === !0 ? !0 : void 0,
        ...o,
        children: _
    }));
z.displayName = "ButtonBase";
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Button/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>x
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$lite$2e$1fxw3LjI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/lite.1fxw3LjI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$ButtonBase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/ButtonBase/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$LoadingSpinner$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/LoadingSpinner/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/VisuallyHidden/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const b = "Button-module__btn___Wj6Dr", h = "Button-module__primary___WGT--", S = "Button-module__secondary___Fx0LJ", r = {
    btn: b,
    "link-primary": "Button-module__link-primary___6Zgkh",
    "link-secondary": "Button-module__link-secondary___S0Qdo",
    primary: h,
    secondary: S,
    "transparent-primary": "Button-module__transparent-primary___iwWv5",
    "transparent-secondary": "Button-module__transparent-secondary___GfRXu",
    "control-btn": "Button-module__control-btn___9Gkoz"
}, e = {
    primary: r.primary,
    secondary: r.secondary,
    linkPrimary: r["link-primary"],
    linkSecondary: r["link-secondary"],
    transparentPrimary: r["transparent-primary"],
    transparentSecondary: r["transparent-secondary"],
    control: r["control-btn"]
}, x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ children: i, className: m = "", isPending: o, pendingLabel: s = "Loading...", size: _ = "md", variant: n = "primary", ...a }, d)=>{
    const l = n === "linkPrimary" || n === "linkSecondary" ? "none" : _;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$ButtonBase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonBase"], {
        className: a.asChild ? "" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$lite$2e$1fxw3LjI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(r.btn, e[n] ?? e.primary, m),
        ref: d,
        isPending: o,
        size: l,
        "data-variant": n,
        ...a,
        children: o ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$LoadingSpinner$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
                    "aria-hidden": "true"
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
                    children: s
                })
            ]
        }) : i
    });
});
x.displayName = "Button";
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconExclamationCircle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconExclamationCircle",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-client] (ecmascript)");
;
;
;
const n = (e)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcon"], {
        viewBox: "0 0 16 16",
        width: "16",
        height: "16",
        fill: "currentColor",
        ...e,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            fillRule: "evenodd",
            d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
            clipRule: "evenodd"
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Error/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Error",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconExclamationCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconExclamationCircle.js [app-client] (ecmascript)");
;
;
;
;
const i = "Error-module__error___zeTQt", l = "Error-module__text___wQxPI", x = "Error-module__icon___uwkis", r = {
    error: i,
    text: l,
    icon: x
}, p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ children: e, id: t, className: s = "", ...c }, _)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("p", {
        id: t,
        className: `${r.error} ${s}`,
        ref: _,
        ...c,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconExclamationCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconExclamationCircle"], {
                className: r.icon
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: r.text,
                children: e
            })
        ]
    }));
p.displayName = "Error";
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/ServerError/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServerError",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Error$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Error/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$isApiError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/isApiError.js [app-client] (ecmascript)");
;
;
;
;
;
const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ error: r, id: o, className: e = "" }, m)=>{
    const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$isApiError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isApiError"])(r) ? r.errorMessage : r;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Error$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Error"], {
        ref: m,
        id: o,
        className: e,
        children: i
    });
});
a.displayName = "ServerError";
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconEnvelope.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconEnvelope",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-client] (ecmascript)");
;
;
;
const p = (r)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcon"], {
        fill: "currentColor",
        width: "20",
        height: "14",
        viewBox: "1 0 20 14",
        ...r,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M0.98877 -0.00488281H20.9888V13.9951H0.98877V-0.00488281ZM18.9888 3.02648L10.9888 9.88362L2.98877 3.02648V11.9951H18.9888V3.02648ZM4.85869 1.99512L10.9888 7.24947L17.1188 1.99512H4.85869Z"
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconGoogleLogo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconGoogleLogo",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-client] (ecmascript)");
;
;
;
const n = (C)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcon"], {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        ...C,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M14.0229 5.47276C12.9867 4.48185 11.6683 3.9773 10.2002 3.9773C7.59563 3.9773 5.39102 5.7364 4.60468 8.10005C4.40449 8.70007 4.29096 9.34099 4.29096 10.0001C4.29096 10.6592 4.40449 11.3001 4.60448 11.9001C5.39102 14.2636 7.59563 16.0227 10.2002 16.0227C11.5456 16.0227 12.6911 15.6682 13.5865 15.0684C14.6454 14.3593 15.35 13.3002 15.5819 12.0502H10.2V8.18197H19.6182C19.7364 8.83652 19.8001 9.51834 19.8001 10.2274C19.8001 13.2729 18.7092 15.8366 16.8183 17.5775C15.1638 19.1045 12.9002 20 10.2002 20C6.2911 20 2.90932 17.7591 1.2636 14.491C0.586306 13.141 0.199951 11.6137 0.199951 10.0001C0.199951 8.38644 0.586306 6.85915 1.2638 5.50913C2.90932 2.24092 6.2911 0 10.2002 0C12.8958 0 15.1594 0.990915 16.8911 2.60456L14.0229 5.47276Z",
            fill: "currentColor"
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconPhone.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconPhone",
    ()=>e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-client] (ecmascript)");
;
;
;
const e = (r)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcon"], {
        width: "20",
        height: "20",
        viewBox: "1 1 20 18",
        fill: "currentColor",
        ...r,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M1.1491 -0.00488281H8.45971L9.66658 6.37031L4.99795 10.1828C6.38698 12.6261 8.42293 14.6527 10.8728 16.0291L14.6205 11.4246L20.9883 12.6341V19.8006L19.7231 19.9414L19.7044 19.9428C19.2823 19.9737 18.8499 19.9951 18.4114 19.9951C8.78359 19.9951 0.988281 12.1853 0.988281 2.55472C0.988281 2.00318 1.00905 1.45404 1.06228 0.899562L1.1491 -0.00488281ZM12.7308 16.9147C14.4886 17.6119 16.4051 17.9951 18.4114 17.9951C18.6019 17.9951 18.794 17.9904 18.9883 17.982V14.2899L15.4189 13.612L12.7308 16.9147ZM4.10333 8.33119L7.48023 5.57357L6.8028 1.99512H2.99675C2.99096 2.17961 2.98828 2.36593 2.98828 2.55472C2.98828 4.59716 3.38415 6.54689 4.10333 8.33119Z"
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/toOAuthProviderType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toOAuthProviderType",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index6.js [app-client] (ecmascript)");
;
function p(r) {
    const t = r.startsWith("oauth:") ? r.split(":")[1] : r;
    return __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuth2ProviderType"][t];
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInAuthMethodButtons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInAuthMethodButtons",
    ()=>U
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$hooks$2f$useSignInWithOAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/hooks/useSignInWithOAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Button/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$ServerError$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/ServerError/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconAppleLogo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconAppleLogo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconEnvelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconEnvelope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconGoogleLogo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconGoogleLogo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconPhone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconPhone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconXLogo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconXLogo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$toOAuthProviderType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/toOAuthProviderType.js [app-client] (ecmascript)");
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
const w = "SignInAuthMethodButtons-module__divider___zphEh", o = {
    "auth-method-buttons": "SignInAuthMethodButtons-module__auth-method-buttons___jYEH7",
    "auth-btn": "SignInAuthMethodButtons-module__auth-btn___o1a09",
    "auth-btn-icon": "SignInAuthMethodButtons-module__auth-btn-icon___VjvFY",
    "auth-btn-label": "SignInAuthMethodButtons-module__auth-btn-label___mEWd3",
    divider: w
}, g = {
    email: {
        label: "Continue with email",
        icon: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconEnvelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconEnvelope"], {})
    },
    sms: {
        label: "Continue with phone",
        icon: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconPhone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPhone"], {})
    },
    "oauth:google": {
        label: "Continue with Google",
        icon: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconGoogleLogo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconGoogleLogo"], {})
    },
    "oauth:apple": {
        label: "Continue with Apple",
        icon: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconAppleLogo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAppleLogo"], {})
    },
    "oauth:x": {
        label: "Continue with X",
        icon: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconXLogo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconXLogo"], {})
    }
}, U = ({ activeMethod: u })=>{
    const { state: { authMethods: a } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInContext"])(), { signInWithOAuth: l, isPending: s, error: h, oauthProvider: c } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$hooks$2f$useSignInWithOAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInWithOAuth"])(), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async (t)=>{
        const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$toOAuthProviderType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toOAuthProviderType"])(t);
        e && l(e);
    }, [
        l
    ]), { dispatch: d } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInContext"])(), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>(a || [
            "email"
        ]).map((t)=>{
            if (!g[t]) return null;
            const { label: e, icon: f } = g[t], p = t.startsWith("oauth:"), A = p ? ()=>m(t) : ()=>d({
                    type: "SET_AUTH_METHOD",
                    payload: {
                        authMethod: t
                    }
                }), I = p && c.current === (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$toOAuthProviderType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toOAuthProviderType"])(t) && s;
            return {
                key: t,
                label: e,
                icon: f,
                onClick: A,
                isPending: I
            };
        }).filter((t)=>t !== null), [
        a,
        d,
        m,
        s,
        c
    ]);
    return !i.length || i.length === 1 && i[0].key === u ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: o["auth-method-buttons"],
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: o.divider,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("hr", {}),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        children: "or"
                    })
                ]
            }),
            i.map((t)=>t.key === u ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    "aria-label": t.ariaLabel,
                    className: o["auth-btn"],
                    type: "button",
                    variant: "secondary",
                    onClick: t.onClick,
                    isPending: t.isPending,
                    children: [
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: o["auth-btn-icon"],
                            children: t.icon
                        }),
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: o["auth-btn-label"],
                            children: t.label
                        })
                    ]
                }, t.key)),
            h && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$ServerError$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServerError"], {
                error: h
            })
        ]
    });
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconArrowLeft.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconArrowLeft",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-client] (ecmascript)");
;
;
;
const n = (r)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcon"], {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "24",
        height: "24",
        ...r,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            fillRule: "evenodd",
            d: "M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z",
            clipRule: "evenodd"
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInBackButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInBackButton",
    ()=>T
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Button/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconArrowLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconArrowLeft.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
const _ = "SignInBackButton-module__icon___stNFS", k = {
    icon: _
}, T = ({ step: t, children: i, onClick: r, size: e = "md", variant: c = "transparentSecondary", ["aria-label"]: s = "Back", ...a })=>{
    const { state: o, dispatch: m } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInContext"])(), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>t || o.step, [
        t,
        o.step
    ]), l = (u)=>{
        r?.(u), m({
            type: "RESET_STATE"
        });
    };
    return p !== "verification" ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        type: "button",
        "aria-label": s,
        onClick: l,
        size: e,
        variant: c,
        ...a,
        children: i || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconArrowLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconArrowLeft"], {
            className: k.icon
        })
    });
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/Label/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>_
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const t = "Label-module__label___jDumT", b = {
    label: t
}, _ = ({ as: l = "label", children: e, className: a = "", ...s })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(l, {
        className: `${b.label} ${a}`,
        ...s,
        children: e
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/Field/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Field",
    ()=>S
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-form/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Label$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/Label/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Error$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Error/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
const b = {
    "field-wrapper": "Field-module__field-wrapper___SCcbl"
}, S = ({ children: l, className: t = "", inlineError: i, label: m, name: a, style: s, validators: p })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
        name: a,
        className: `${t} ${b["field-wrapper"]}`,
        style: s,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                asChild: !0,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Label$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                    children: m
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormValidityState"], {
                children: (e)=>l && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                        asChild: !0,
                        children: l(e)
                    })
            }),
            p?.map(([e, c], h)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {
                    match: e,
                    asChild: !0,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Error$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Error"], {
                        children: c
                    })
                }, h)),
            i && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {
                asChild: !0,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Error$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Error"], {
                    children: i
                })
            })
        ]
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/Input/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>o,
    "withValidityState",
    ()=>I
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
const d = "Input-module__input___-mK8z", t = {
    input: d,
    "size-lg": "Input-module__size-lg___IYoRG",
    "size-md": "Input-module__size-md___8hkn5",
    "size-sm": "Input-module__size-sm___cnynF",
    "size-xs": "Input-module__size-xs___aK-NH"
}, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className: e = "", size: s = "md", ...i }, n)=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const u = [
            t.input
        ], a = {
            lg: t["size-lg"],
            md: t["size-md"],
            sm: t["size-sm"],
            xs: t["size-xs"]
        };
        return s && u.push(a[s]), u.join(" ");
    }, [
        s
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
        ref: n,
        className: `${_} ${e}`,
        ...i
    });
});
o.displayName = "Input";
const I = (e)=>(i)=>{
        const n = i === void 0 || i.valid ? void 0 : !0;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(o, {
            ...e,
            "aria-invalid": n
        });
    };
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/isEmailInvalid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEmailInvalid",
    ()=>t
]);
const t = (s)=>!/^[^\s@]+@([^\s@.]+\.)+[^\s@.]+$/.test(s);
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/EmailForm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmailForm",
    ()=>N
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-form/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Field$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/Field/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/Input/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Button/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$ServerError$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/ServerError/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$isEmailInvalid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/isEmailInvalid.js [app-client] (ecmascript)");
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
const x = "EmailForm-module__form___L0wVX", o = {
    form: x,
    "server-error": "EmailForm-module__server-error___0TSPx"
}, N = ({ className: a = "", email: t, error: e, onEmailChange: m, isPending: l, submitLabel: s = "Continue", ...d })=>{
    const i = {
        autoComplete: "email",
        type: "email",
        placeholder: "name@example.com",
        required: !0
    }, n = (p)=>{
        m?.(p.target.value?.trim());
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
        className: `${o.form} ${a}`,
        ...d,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Field$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                label: "Email address",
                name: "email",
                validators: [
                    [
                        "valueMissing",
                        "Email is required"
                    ],
                    [
                        "typeMismatch",
                        "Use a valid email address"
                    ],
                    [
                        __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$isEmailInvalid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmailInvalid"],
                        "Use a valid email address"
                    ]
                ],
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withValidityState"])(m !== void 0 ? {
                    ...i,
                    value: t,
                    onChange: n
                } : i)
            }),
            e && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$ServerError$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServerError"], {
                error: e,
                className: o["server-error"]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormSubmit"], {
                asChild: !0,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "submit",
                    isPending: l,
                    children: s
                })
            })
        ]
    });
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconCheckCircle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconCheckCircle",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-client] (ecmascript)");
;
;
;
const c = (o)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcon"], {
        viewBox: "0 0 16 16",
        width: "16",
        height: "16",
        fill: "currentColor",
        ...o,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            fillRule: "evenodd",
            d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z",
            clipRule: "evenodd"
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/SuccessMessage/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SuccessMessage",
    ()=>l
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconCheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconCheckCircle.js [app-client] (ecmascript)");
;
;
;
;
const t = "SuccessMessage-module__success___ZOELg", _ = "SuccessMessage-module__icon___QpPW-", c = {
    success: t,
    icon: _
}, l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ children: e, id: o, className: r = "", ...a }, n)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("p", {
        id: o,
        className: `${c.success} ${r}`,
        ref: n,
        ...a,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconCheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheckCircle"], {
                className: c.icon
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                children: e
            })
        ]
    }));
l.displayName = "SuccessMessage";
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/OTP/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OTP",
    ()=>q
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$one$2d$time$2d$password$2d$field$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-one-time-password-field/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/Input/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Label$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/Label/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Error$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Error/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SuccessMessage$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/SuccessMessage/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const A = "OTP-module__otp___UjnM8", B = "OTP-module__input___Vbd5m", E = "OTP-module__label___cK41n", o = {
    otp: A,
    "group-container": "OTP-module__group-container___hNqnB",
    "input-container": "OTP-module__input-container___snmj7",
    input: B,
    label: E
}, q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ error: n, successMessage: i, passwordLength: d = 6, className: b = "", label: l, ...m }, r)=>{
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (n) return c;
        if (i) return p;
    }, [
        n,
        c,
        i,
        p
    ]), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(/* @__PURE__ */ new Map()), O = (e, a)=>{
        e ? u.current.set(a, e) : u.current.delete(a);
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const e = Array.from(u.current.values());
        typeof r == "function" ? r(e) : r && (r.current = e);
    }, [
        d,
        r
    ]), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: `${o.otp} ${b}`,
        children: [
            l && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Label$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                as: "p",
                id: _,
                className: o.label,
                "data-part": "label",
                children: l
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$one$2d$time$2d$password$2d$field$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneTimePasswordField"], {
                ...m,
                className: o["group-container"],
                "data-part": "input-group",
                "aria-invalid": !!n,
                "aria-describedby": h,
                "aria-labelledby": l ? _ : void 0,
                style: {
                    "--cdp-web-otp-input-width": `${Math.floor(100 / d)}%`
                },
                children: [
                    Array.from({
                        length: d
                    }, (e, a)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            className: o["input-container"],
                            "data-part": "input-container",
                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$one$2d$time$2d$password$2d$field$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneTimePasswordFieldInput"], {
                                asChild: !0,
                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    name: `${m.name || "otp"}-${a}`,
                                    ref: (P)=>O(P, a),
                                    className: o.input,
                                    "aria-invalid": !!n,
                                    "data-part": "input",
                                    "data-success": !!i
                                })
                            })
                        }, a)),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$one$2d$time$2d$password$2d$field$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneTimePasswordFieldHiddenInput"], {})
                ]
            }),
            !!n && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Error$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Error"], {
                id: c,
                "data-part": "error",
                children: n
            }),
            !!i && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SuccessMessage$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SuccessMessage"], {
                id: p,
                "data-part": "success",
                children: i
            })
        ]
    });
});
q.displayName = "OTP";
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/OTPForm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OTPForm",
    ()=>A
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-form/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$OTP$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/OTP/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Button/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$LoadingSpinner$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/LoadingSpinner/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/VisuallyHidden/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$isApiError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/isApiError.js [app-client] (ecmascript)");
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
const o = {
    "otp-form": "OTPForm-module__otp-form___G1-63",
    "form-footer": "OTPForm-module__form-footer___ybmdd",
    "server-state-wrapper": "OTPForm-module__server-state-wrapper___R5j5k",
    "loading-spinner": "OTPForm-module__loading-spinner___8N9XU",
    "resend-wrapper": "OTPForm-module__resend-wrapper___aZUAz",
    "reset-timer": "OTPForm-module__reset-timer___7ElWj"
}, A = ({ canResetOTP: m, error: t, isPending: a, onOTPChange: s, onResendOTP: l, otp: p, otpInputsRef: d, passwordLength: n, resendCountdown: i, successMessage: _, ...c })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
        ...c,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$OTP$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OTP"], {
                ref: d,
                name: "otp",
                "aria-label": "Enter code",
                autoSubmit: !0,
                passwordLength: n || 6,
                value: p,
                error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$isApiError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isApiError"])(t) ? t.message : t,
                onChange: (f)=>f.preventDefault(),
                onValueChange: s,
                className: o["otp-form"],
                successMessage: _
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: o["form-footer"],
                children: [
                    a && !m && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: o["server-state-wrapper"],
                        children: a && !m && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$LoadingSpinner$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
                            className: o["loading-spinner"]
                        })
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: o["resend-wrapper"],
                        children: [
                            m && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormSubmit"], {
                                asChild: !0,
                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    onClick: l,
                                    isPending: a,
                                    variant: "linkPrimary",
                                    children: "Resend code"
                                })
                            }),
                            !m && i !== null && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                className: o["reset-timer"],
                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("p", {
                                    children: [
                                        "Resend code in ",
                                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                            "aria-hidden": "true",
                                            children: [
                                                i,
                                                "s"
                                            ]
                                        }),
                                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
                                            children: [
                                                i,
                                                " ",
                                                i === 1 ? "second" : "seconds"
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/SwitchSlideTransition/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SwitchSlideTransition",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchTransition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/SwitchTransition/index.js [app-client] (ecmascript)");
;
;
;
;
const a = {
    "switch-slide-transition": "SwitchSlideTransition-module__switch-slide-transition___FykQG"
}, u = ({ children: t, className: i = "", direction: n = "left", timeout: r = 300, ...s })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchTransition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchTransition"], {
        transitionName: `slide-${n}`,
        className: `${a["switch-slide-transition"]} ${i}`,
        preEnter: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        timeout: r,
        ...s,
        children: t
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/hooks/useEmailForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEmailForm",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$isApiError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/isApiError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInProvider.js [app-client] (ecmascript)");
;
;
;
;
const f = ({ submit: t })=>{
    const { state: n, dispatch: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInContext"])(), a = "An error occurred while signing in. Please try again.", s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        o({
            type: "SET_EMAIL",
            payload: {
                email: e
            }
        });
    }, [
        o
    ]), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async ({ email: e, onSuccess: l, onError: E })=>{
        if (!n.isPending) {
            o({
                type: "SUBMIT_EMAIL",
                payload: {
                    email: e
                }
            });
            try {
                const { flowId: r } = await t(e);
                o({
                    type: "SUBMIT_EMAIL_SUCCESS",
                    payload: {
                        flowId: r
                    }
                }), l?.();
            } catch (r) {
                const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$isApiError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isApiError"])(r) ? r : r instanceof Error && r.message || a;
                o({
                    type: "SUBMIT_EMAIL_FAILURE",
                    payload: {
                        error: c
                    }
                }), console.error(r), E?.(c);
            }
        }
    }, [
        o,
        n.isPending,
        t
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            setEmail: s,
            submitEmail: i
        }), [
        s,
        i
    ]);
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/hooks/useOTPForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOTPForm",
    ()=>A
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$hooks$2f$useTimer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/hooks/useTimer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$isApiError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/isApiError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInProvider.js [app-client] (ecmascript)");
;
;
;
;
;
const A = ({ passwordLength: a, submit: T })=>{
    const { state: n, dispatch: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInContext"])(), { timeRemaining: o, start: c, reset: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$hooks$2f$useTimer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimer"])(), p = "An error occurred while signing in. Please try again.", m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
        e({
            type: "SET_OTP",
            payload: {
                otp: t
            }
        });
    }, [
        e
    ]), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async ({ otp: t, onSuccess: d, onError: f })=>{
        if (!n.isPending) {
            if (t.length !== a) {
                e({
                    type: "SET_OTP",
                    payload: {
                        otp: t
                    }
                });
                return;
            }
            e({
                type: "SUBMIT_OTP",
                payload: {
                    otp: t
                }
            });
            try {
                await T(t), e({
                    type: "SUBMIT_OTP_SUCCESS",
                    payload: {
                        otp: t
                    }
                }), d?.(), r();
            } catch (s) {
                const O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$isApiError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isApiError"])(s) ? s : s instanceof Error && s.message || p;
                e({
                    type: "SUBMIT_OTP_FAILURE",
                    payload: {
                        error: O
                    }
                }), console.error(s), f?.(O);
            }
        }
    }, [
        e,
        n.isPending,
        a,
        T,
        r
    ]), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        e({
            type: "RESET_OTP"
        }), r();
    }, [
        e,
        r
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        o === 0 && n.step === "verification" && !n.canResetOTP && (e({
            type: "ALLOW_RESET_OTP"
        }), r());
    }, [
        o,
        r,
        n.step,
        n.canResetOTP,
        e
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            resendCountdown: o,
            resetOTP: P,
            resetResendTimer: r,
            setOTP: m,
            startResendTimer: c,
            submitOtp: y
        }), [
        o,
        P,
        r,
        m,
        c,
        y
    ]);
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInCredentials.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInCredentials",
    ()=>l
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const t = "SignInCredentials-module__credentials___LE04y", r = {
    credentials: t
}, l = ({ children: e, ...n })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        className: r.credentials,
        ...n,
        children: e
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/flows/SignInWithEmail.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInWithEmail",
    ()=>N,
    "SignInWithEmailDescription",
    ()=>U,
    "SignInWithEmailTitle",
    ()=>Q,
    "config",
    ()=>si
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index12$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index12.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$EmailForm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/EmailForm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$OTPForm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/OTPForm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchSlideTransition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/SwitchSlideTransition/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$hooks$2f$useEmailForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/hooks/useEmailForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$hooks$2f$useOTPForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/hooks/useOTPForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInCredentials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInCredentials.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInProvider.js [app-client] (ecmascript)");
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
const J = [
    "email",
    "otp"
], N = ({ step: n, autoFocus: r, onSuccess: E, children: c })=>{
    const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), h = 6, { isSignedIn: P } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsSignedIn"])(), { state: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInContext"])(), { signInWithEmail: T } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInWithEmail"])(), { linkEmail: O } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index12$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLinkEmail"])(), { verifyEmailOTP: I } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVerifyEmailOTP"])(), u = n || i.step, t = u === "credentials" ? "email" : "otp", d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t), { setEmail: v, submitEmail: f } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$hooks$2f$useEmailForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEmailForm"])({
        submit: (e)=>P ? O(e) : T({
                email: e
            })
    }), { resendCountdown: b, resetOTP: R, setOTP: w, startResendTimer: F, submitOtp: W } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$hooks$2f$useOTPForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOTPForm"])({
        passwordLength: h,
        submit: (e)=>I({
                flowId: i.flowId,
                otp: e
            })
    }), p = ()=>{
        F(60);
    }, C = ()=>{
        R(), f({
            email: i.email,
            onSuccess: p
        });
    }, x = (e)=>{
        e.preventDefault(), f({
            email: i.email,
            onSuccess: p
        });
    }, y = (e)=>{
        e.preventDefault(), W({
            otp: i.otp,
            onSuccess: E
        });
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        d.current !== t && (l.current?.transition.toggle(t), d.current = t);
    }, [
        t
    ]), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchSlideTransition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchSlideTransition"], {
        autoFocus: r,
        animateHeight: !1,
        items: J,
        initialEntered: !0,
        direction: t === "otp" ? "left" : "right",
        transitionRef: l,
        children: ({ itemKey: e, ...D })=>{
            let s = null;
            return e === "email" && (s = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$EmailForm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailForm"], {
                email: i.email,
                error: t === "email" && i.error || "",
                isPending: i.isPending,
                onEmailChange: v,
                onSubmit: x
            })), e === "otp" && (s = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$OTPForm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OTPForm"], {
                canResetOTP: i.canResetOTP,
                error: t === "otp" && i.error || "",
                isPending: i.isPending,
                onOTPChange: w,
                onResendOTP: C,
                onSubmit: y,
                otp: i.otp,
                resendCountdown: b,
                successMessage: i.isSuccess ? "Success!" : void 0
            })), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ...D,
                children: c ? c({
                    step: u,
                    Form: s
                }) : s
            });
        }
    });
}, Q = ({ step: n })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            n === "credentials" && "Sign in",
            n === "verification" && "Enter verification code"
        ]
    }), U = ({ step: n })=>{
    const { state: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            n === "credentials" && "We’ll send you a verification code via email.",
            n === "verification" && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Enter the 6 digit code sent to ",
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInCredentials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInCredentials"], {
                        children: r.email
                    })
                ]
            })
        ]
    });
}, si = {
    description: U,
    forms: N,
    title: Q
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconChevronDown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconChevronDown",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/SvgIcon.js [app-client] (ecmascript)");
;
;
;
const t = (e)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$SvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcon"], {
        viewBox: "0 0 16 16",
        fill: "currentColor",
        width: "16",
        height: "16",
        ...e,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            fillRule: "evenodd",
            d: "M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z",
            clipRule: "evenodd"
        })
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/Select/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>K,
    "SelectContent",
    ()=>j,
    "SelectItem",
    ()=>v,
    "SelectTrigger",
    ()=>b
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ThemeProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ThemeProvider/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$ButtonBase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/ButtonBase/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconChevronDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconChevronDown.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const o = {
    "select-trigger": "Select-module__select-trigger___yqioM",
    "select-icon": "Select-module__select-icon___hE7Wy",
    "select-content": "Select-module__select-content___6R8J9",
    "select-item": "Select-module__select-item___12l2C",
    "rotate-180": "Select-module__rotate-180___KuvGV"
}, K = ({ children: l, ...t })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
        ...t,
        children: l
    }), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ children: l, className: t = "", placeholder: c = "Select an option", size: r = "md", ...s }, n)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
        ...s,
        asChild: !0,
        children: l || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$ButtonBase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonBase"], {
            className: `${o["select-trigger"]} ${t}`,
            fullWidth: !0,
            ref: n,
            size: r,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    placeholder: c
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectIcon"], {
                    asChild: !0,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconChevronDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronDown"], {
                        className: o["select-icon"]
                    })
                })
            ]
        })
    }));
b.displayName = "SelectTrigger";
const j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ children: l, className: t = "", style: c, position: r = "popper", side: s = "bottom", sideOffset: n = 8, ..._ }, d)=>{
    const { cssVariables: S } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ThemeProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectPortal"], {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            position: r,
            side: s,
            sideOffset: n,
            className: `${o["select-content"]} ${t}`,
            ref: d,
            style: c ? {
                ...S,
                ...c
            } : S,
            ..._,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectScrollUpButton"], {
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconChevronDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronDown"], {
                        className: o["rotate-180"]
                    })
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectViewport"], {
                    children: l
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectScrollDownButton"], {
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconChevronDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronDown"], {})
                })
            ]
        })
    });
});
j.displayName = "SelectContent";
const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ children: l, indicator: t, ...c }, r)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        ...c,
        ref: r,
        className: o["select-item"],
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItemText"], {
                children: l
            }),
            t && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItemIndicator"], {
                asChild: !0,
                children: typeof t == "boolean" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {}) : t
            })
        ]
    }));
v.displayName = "SelectItem";
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/data/countryNames.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countryNames",
    ()=>a
]);
const a = {
    languageAE: "United Arab Emirates",
    languageBR: "Brazil",
    languageCA: "Canada",
    languageCO: "Colombia",
    languageGB: "United Kingdom",
    languageIN: "India",
    languageKE: "Kenya",
    languageMX: "Mexico",
    languagePH: "Philippines",
    languageUS: "United States"
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/data/countries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_COUNTRY_CODE",
    ()=>i,
    "OFAC_BLOCKED_COUNTRIES",
    ()=>e,
    "countries",
    ()=>u,
    "nonThrowingGetCountryCallingCode",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$getCountries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/libphonenumber-js/min/exports/getCountries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$getCountryCallingCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/libphonenumber-js/min/exports/getCountryCallingCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$data$2f$countryNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/data/countryNames.js [app-client] (ecmascript)");
;
;
const e = [
    "CU",
    "ET",
    "IR",
    "KP",
    "KZ",
    "MM",
    "RU",
    "SY"
], i = "US", o = {
    AE: "🇦🇪",
    BR: "🇧🇷",
    CA: "🇨🇦",
    CO: "🇨🇴",
    GB: "🇬🇧",
    IN: "🇮🇳",
    KE: "🇰🇪",
    MX: "🇲🇽",
    PH: "🇵🇭",
    US: "🇺🇸"
}, s = (n)=>{
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$getCountryCallingCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCountryCallingCode"])(n);
    } catch  {
        return;
    }
}, u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$getCountries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCountries"])().map((n)=>{
    const t = e.includes(n);
    return {
        callingCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$getCountryCallingCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCountryCallingCode"])(n),
        code: n,
        flag: t || !o[n] ? "" : o[n],
        name: t || !__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$data$2f$countryNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countryNames"][`language${n}`] ? "" : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$data$2f$countryNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countryNames"][`language${n}`]
    };
}).filter((n)=>!!n.flag && !!n.name);
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/CountrySelect/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountrySelect",
    ()=>v
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/Select/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$ButtonBase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/ButtonBase/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/VisuallyHidden/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/data/countries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconChevronDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconChevronDown.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const f = "CountrySelect-module__flag___bNBsn", c = {
    "country-select-trigger": "CountrySelect-module__country-select-trigger___xGSAp",
    "select-icon": "CountrySelect-module__select-icon___wEQVx",
    "country-select-content": "CountrySelect-module__country-select-content___WSd9-",
    "country-select-item": "CountrySelect-module__country-select-item___Mr6JZ",
    flag: f,
    "country-calling-code": "CountrySelect-module__country-calling-code___d61ih"
}, N = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"].sort((r, o)=>r.name.localeCompare(o.name)), v = ({ className: r = "", size: o, defaultValue: a, value: i, onValueChange: d })=>{
    const n = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"].find((t)=>t.code === (i ?? a));
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
        name: "country-code",
        defaultValue: a,
        value: i,
        onValueChange: d,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                "aria-label": "Country / region",
                placeholder: "+1",
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$ButtonBase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonBase"], {
                    className: `${c["country-select-trigger"]} ${r}`,
                    size: o,
                    children: [
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                            "aria-label": n?.name ?? "Select a country",
                            children: n && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                className: c["country-select-item"],
                                children: [
                                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                        "aria-hidden": "true",
                                        className: c.flag,
                                        children: n.flag
                                    }),
                                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
                                        children: n.name
                                    }),
                                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                        children: [
                                            "+",
                                            n.callingCode
                                        ]
                                    })
                                ]
                            })
                        }),
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectIcon"], {
                            asChild: !0,
                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconChevronDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronDown"], {
                                className: c["select-icon"]
                            })
                        })
                    ]
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                className: c["country-select-content"],
                children: N.map((t)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                        indicator: !0,
                        value: t.code,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                            className: c["country-select-item"],
                            children: [
                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                    "aria-hidden": "true",
                                    className: c.flag,
                                    children: t.flag
                                }),
                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                    children: t.name
                                }),
                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                    className: c["country-calling-code"],
                                    children: [
                                        "+",
                                        t.callingCode
                                    ]
                                })
                            ]
                        })
                    }, t.code))
            })
        ]
    });
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/parseValuesFromPhoneNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseValuesFromPhoneNumber",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumberWithError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/libphonenumber-js/min/exports/parsePhoneNumberWithError.js [app-client] (ecmascript)");
;
const a = (r, o)=>{
    const e = {
        value: r,
        e164: ""
    };
    try {
        const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumberWithError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePhoneNumberWithError"])(r, o);
        e.e164 = t.number;
    } catch  {}
    return e;
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/PhoneNumberInput/maskOverride.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMaskOverride",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/data/countries.js [app-client] (ecmascript)");
;
;
const n = (r)=>r.startsWith("1") ? r.slice(1) : r, i = {
    234: {
        /**
     * libphonenumber-js bug:
     *
     * Nigerial phone numbers require a 0 prefix for the mask to work.
     */ prefix: "0"
    },
    33: {
        /**
     * libphonenumber-js bug:
     *
     * French phone numbers require a 0 prefix for the mask to work.
     * On top of that, libphonenumber does not take that 0 into account on maxLength.
     * This means that if the user types a number with the 0, the number will be cropped short.
     *
     * Example: 01 23 45 67 89 would be cropped to 01 23 45 67 8.
     * Users could overcome this by omiting the 0, but this would mean the mask formatting would
     * not work, and the input would look plain 123456789.
     */ prefix: "0",
        maxLength: 10
    },
    1: {
        /**
     * libphonenumber-js bug:
     *
     * Calling code 1 Phone numbers cannot start with 1.
     * If we allow them to, the masks will show 1 (234) 567-890, and limit the length to 10
     * The above is an invalid US number though, as phone numbers need to have 10 digits EXCLUDING
     * the internation code 1.
     *
     * This does not introduce a bug because we already have the Country Code picker, so adding
     * the international code to the Phone input is a user mistake.
     */ normalizer: n
    },
    44: {
        /**
     * libphonenumber-js bug:
     *
     * GB has max 10 digit phone numbers AFTER A LEADING 0 (so actually 11)
     * On top of that, the libphonenumber-js mask does not work without the leading 0.
     *
     * This will enforce adding the leading 0, and override the max length to 11 instead of 10.
     */ prefix: "0",
        maxLength: 11
    },
    91: {
        /**
     * India phone number validation:
     *
     * Indian phone numbers must be exactly 10 digits (excluding country code).
     * libphonenumber-js allows 8-12 digits, but Indian mobile numbers are always 10 digits.
     * This override ensures the input is limited to exactly 10 digits.
     */ maxLength: 10
    }
}, a = (r)=>{
    if (!r) return {};
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonThrowingGetCountryCallingCode"])(r);
    return t ? i[t] ?? {} : {};
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/PhoneNumberInput/PhoneNumberMetadata.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhoneNumberMetadata",
    ()=>e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$Metadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/libphonenumber-js/min/exports/Metadata.js [app-client] (ecmascript)");
;
const e = new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$Metadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Metadata"]();
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/PhoneNumberInput/usePhoneNumberFormatter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePhoneNumberFormatter",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$es6$2f$parseIncompletePhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__parseIncompletePhoneNumber$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js [app-client] (ecmascript) <export default as parseIncompletePhoneNumber>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$getExampleNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/libphonenumber-js/min/exports/getExampleNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$AsYouType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/libphonenumber-js/min/exports/AsYouType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$parseValuesFromPhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/parseValuesFromPhoneNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$PhoneNumberInput$2f$maskOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/PhoneNumberInput/maskOverride.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$PhoneNumberInput$2f$PhoneNumberMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/PhoneNumberInput/PhoneNumberMetadata.js [app-client] (ecmascript)");
;
;
;
;
;
const i = {
    AC: "40123",
    AD: "312345",
    AE: "501234567",
    AF: "701234567",
    AG: "2684641234",
    AI: "2642351234",
    AL: "672123456",
    AM: "77123456",
    AO: "923123456",
    AR: "91123456789",
    AS: "6847331234",
    AT: "664123456",
    AU: "412345678",
    AW: "5601234",
    AX: "412345678",
    AZ: "401234567",
    BA: "61123456",
    BB: "2462501234",
    BD: "1812345678",
    BE: "470123456",
    BF: "70123456",
    BG: "43012345",
    BH: "36001234",
    BI: "79561234",
    BJ: "0195123456",
    BL: "690001234",
    BM: "4413701234",
    BN: "7123456",
    BO: "71234567",
    BQ: "3181234",
    BR: "11961234567",
    BS: "2423591234",
    BT: "17123456",
    BW: "71123456",
    BY: "294911911",
    BZ: "6221234",
    CA: "5062345678",
    CC: "412345678",
    CD: "991234567",
    CF: "70012345",
    CG: "061234567",
    CH: "781234567",
    CI: "0123456789",
    CK: "71234",
    CL: "221234567",
    CM: "671234567",
    CN: "13123456789",
    CO: "3211234567",
    CR: "83123456",
    CU: "51234567",
    CV: "9911234",
    CW: "95181234",
    CX: "412345678",
    CY: "96123456",
    CZ: "601123456",
    DE: "15123456789",
    DJ: "77831001",
    DK: "34412345",
    DM: "7672251234",
    DO: "8092345678",
    DZ: "551234567",
    EC: "991234567",
    EE: "51234567",
    EG: "1001234567",
    EH: "650123456",
    ER: "7123456",
    ES: "612345678",
    ET: "911234567",
    FI: "412345678",
    FJ: "7012345",
    FK: "51234",
    FM: "3501234",
    FO: "211234",
    FR: "612345678",
    GA: "06031234",
    GB: "7400123456",
    GD: "4734031234",
    GE: "555123456",
    GF: "694201234",
    GG: "7781123456",
    GH: "231234567",
    GI: "57123456",
    GL: "221234",
    GM: "3012345",
    GN: "601123456",
    GP: "690001234",
    GQ: "222123456",
    GR: "6912345678",
    GT: "51234567",
    GU: "6713001234",
    GW: "955012345",
    GY: "6091234",
    HK: "51234567",
    HN: "91234567",
    HR: "921234567",
    HT: "34101234",
    HU: "201234567",
    ID: "812345678",
    IE: "850123456",
    IL: "502345678",
    IM: "7924123456",
    IN: "8123456789",
    IO: "3801234",
    IQ: "7912345678",
    IR: "9123456789",
    IS: "6111234",
    IT: "3123456789",
    JE: "7797712345",
    JM: "8762101234",
    JO: "790123456",
    JP: "9012345678",
    KE: "712123456",
    KG: "700123456",
    KH: "91234567",
    KI: "72001234",
    KM: "3212345",
    KN: "8697652917",
    KP: "1921234567",
    KR: "1020000000",
    KW: "50012345",
    KY: "3453231234",
    KZ: "7710009998",
    LA: "2023123456",
    LB: "71123456",
    LC: "7582845678",
    LI: "660234567",
    LK: "712345678",
    LR: "770123456",
    LS: "50123456",
    LT: "61234567",
    LU: "628123456",
    LV: "21234567",
    LY: "912345678",
    MA: "650123456",
    MC: "612345678",
    MD: "62112345",
    ME: "67622901",
    MF: "690001234",
    MG: "321234567",
    MH: "2351234",
    MK: "72345678",
    ML: "65012345",
    MM: "92123456",
    MN: "88123456",
    MO: "66123456",
    MP: "6702345678",
    MQ: "696201234",
    MR: "22123456",
    MS: "6644923456",
    MT: "96961234",
    MU: "52512345",
    MV: "7712345",
    MW: "991234567",
    MX: "2221234567",
    MY: "123456789",
    MZ: "821234567",
    NA: "811234567",
    NC: "751234",
    NE: "93123456",
    NF: "381234",
    NG: "8021234567",
    NI: "81234567",
    NL: "612345678",
    NO: "40612345",
    NP: "9841234567",
    NR: "5551234",
    NU: "8884012",
    NZ: "211234567",
    OM: "92123456",
    PA: "61234567",
    PE: "912345678",
    PF: "87123456",
    PG: "70123456",
    PH: "9051234567",
    PK: "3012345678",
    PL: "512345678",
    PM: "551234",
    PR: "7872345678",
    PS: "599123456",
    PT: "912345678",
    PW: "6201234",
    PY: "961456789",
    QA: "33123456",
    RE: "692123456",
    RO: "712034567",
    RS: "601234567",
    RU: "9123456789",
    RW: "720123456",
    SA: "512345678",
    SB: "7421234",
    SC: "2510123",
    SD: "911231234",
    SE: "701234567",
    SG: "81234567",
    SH: "51234",
    SI: "31234567",
    SJ: "41234567",
    SK: "912123456",
    SL: "25123456",
    SM: "66661212",
    SN: "701234567",
    SO: "71123456",
    SR: "7412345",
    SS: "977123456",
    ST: "9812345",
    SV: "70123456",
    SX: "7215205678",
    SY: "944567890",
    SZ: "76123456",
    TA: "8999",
    TC: "6492311234",
    TD: "63012345",
    TG: "90112345",
    TH: "812345678",
    TJ: "917123456",
    TK: "7290",
    TL: "77212345",
    TM: "66123456",
    TN: "20123456",
    TO: "7715123",
    TR: "5012345678",
    TT: "8682911234",
    TV: "901234",
    TW: "912345678",
    TZ: "621234567",
    UA: "501234567",
    UG: "712345678",
    US: "2015550123",
    UY: "94231234",
    UZ: "912345678",
    VA: "3123456789",
    VC: "7844301234",
    VE: "4121234567",
    VG: "2843001234",
    VI: "3406421234",
    VN: "912345678",
    VU: "5912345",
    WF: "821234",
    WS: "7212345",
    XK: "43201234",
    YE: "712345678",
    YT: "639012345",
    ZA: "711234567",
    ZM: "955123456",
    ZW: "712345678"
}, u = (n, r)=>{
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$PhoneNumberInput$2f$PhoneNumberMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneNumberMetadata"].numberingPlan || !r) return 20;
        const { maxLength: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$PhoneNumberInput$2f$maskOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaskOverride"])(r);
        return e || (Math.max(...__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$PhoneNumberInput$2f$PhoneNumberMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneNumberMetadata"].numberingPlan.possibleLengths()) ?? 20);
    }, [
        r
    ]), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e, t)=>{
        const { prefix: M, normalizer: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$PhoneNumberInput$2f$maskOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaskOverride"])(t);
        if (M && e && !e.startsWith(M)) return M + e;
        const E = a ? a(e) : e;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$es6$2f$parseIncompletePhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__parseIncompletePhoneNumber$3e$__["parseIncompletePhoneNumber"])(E);
    }, []), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const t = s(), a = m(e, r).slice(0, t);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$parseValuesFromPhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseValuesFromPhoneNumber"])(a, r);
    }, [
        r,
        s,
        m
    ]), A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$PhoneNumberInput$2f$PhoneNumberMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneNumberMetadata"].selectNumberingPlan(e);
        const t = s(), M = n.slice(0, t), a = m(M, e);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$parseValuesFromPhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseValuesFromPhoneNumber"])(a, e);
    }, [
        n,
        s,
        m
    ]), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>r ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$getExampleNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExampleNumber"])(r ?? "US", i)?.formatNational().replace(/\d/g, "0") : "", [
        r
    ]), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>r ? new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$AsYouType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsYouType"](r).input(n) : n, [
        r,
        n
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            formatBeforePhoneNumberChange: T,
            formatBeforeCountryCodeChange: A,
            placeholder: o,
            formattedDisplayNumber: P
        }), [
        A,
        T,
        P,
        o
    ]);
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/PhoneNumberInput/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhoneNumberInput",
    ()=>T
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$CountrySelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/CountrySelect/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/Input/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/VisuallyHidden/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/data/countries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$PhoneNumberInput$2f$usePhoneNumberFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/PhoneNumberInput/usePhoneNumberFormatter.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const A = "PhoneNumberInput-module__invalid___zDA2p", E = "PhoneNumberInput-module__success___uPjMx", G = "PhoneNumberInput-module__input___H-XG-", l = {
    "phone-number-input": "PhoneNumberInput-module__phone-number-input___mYty2",
    "inline-country-calling-code": "PhoneNumberInput-module__inline-country-calling-code___FFgtI",
    invalid: A,
    success: E,
    input: G,
    "country-calling-code": "PhoneNumberInput-module__country-calling-code___N6zDW"
}, T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ autoComplete: a = "tel-national", className: _ = "", countryCode: n = "US", countryOptions: p = !0, onCountryCodeChange: g, onPhoneNumberChange: c, phoneNumber: f, ...u }, o)=>{
    const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        b.current = e, o && (typeof o == "function" ? o(e) : o.current = e);
    }, [
        o
    ]), { formatBeforePhoneNumberChange: v, formatBeforeCountryCodeChange: y, placeholder: P, formattedDisplayNumber: V } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$PhoneNumberInput$2f$usePhoneNumberFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePhoneNumberFormatter"])(f.value, n), j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        let t = e.target.value.replace(/\D/g, "");
        t === f.value && (t = t.slice(0, -1));
        const F = v(t);
        c?.(F);
    }, [
        v,
        c,
        f
    ]), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const t = y(e);
        g?.(e), c?.(t);
    }, [
        y,
        g,
        c
    ]), x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        r(e), setTimeout(()=>{
            b.current?.focus();
        }, 0);
    }, [
        r
    ]), i = typeof p == "boolean" ? p : p.length > 0, m = !i && n ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"].find((e)=>e.code === n) : void 0, N = u["aria-invalid"] && u["aria-invalid"] !== "false", I = u["data-success"] && u["data-success"] !== "false", D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const e = [
            l["phone-number-input"],
            _
        ];
        return N && e.push(l.invalid), I && e.push(l.success), !i && m && e.push(l["inline-country-calling-code"]), e.join(" ");
    }, [
        N,
        I,
        _,
        m,
        i
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        r(n);
    }, [
        n,
        r
    ]), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: D,
        children: [
            !i && m && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(U, {
                country: m
            }),
            i && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$CountrySelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountrySelect"], {
                "aria-label": "Country code",
                defaultValue: n,
                onValueChange: x
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                ...u,
                "aria-label": "Phone number",
                ref: C,
                className: l.input,
                autoComplete: a,
                onChange: j,
                placeholder: P,
                type: "tel",
                value: V
            })
        ]
    });
});
T.displayName = "PhoneNumberInput";
const U = ({ country: a })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
        className: l["country-calling-code"],
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                "aria-hidden": "true",
                children: a.flag
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
                children: a.name
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                children: [
                    "+",
                    a.callingCode
                ]
            })
        ]
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/hooks/usePhoneNumberValidators.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePhoneNumberValidators",
    ()=>h
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$validatePhoneNumberLength$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/libphonenumber-js/min/exports/validatePhoneNumberLength.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
const h = ({ countryCode: i = "US" })=>{
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$validatePhoneNumberLength$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validatePhoneNumberLength"])(s, i) === "INVALID_COUNTRY", [
        i
    ]), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$validatePhoneNumberLength$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validatePhoneNumberLength"])(s, i) === "INVALID_LENGTH", [
        i
    ]), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$validatePhoneNumberLength$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validatePhoneNumberLength"])(s, i) === "NOT_A_NUMBER", [
        i
    ]), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$validatePhoneNumberLength$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validatePhoneNumberLength"])(s, i) === "TOO_SHORT", [
        i
    ]), N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$validatePhoneNumberLength$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validatePhoneNumberLength"])(s, i) === "TOO_LONG", [
        i
    ]), I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((s)=>{
        const o = typeof s == "string" ? s : s.message;
        return /invalid phone number/i.test(o);
    }, []);
    return {
        isInvalidCountry: a,
        isInvalidLength: m,
        isInvalidNumber: e,
        isInvalidTooShort: l,
        isInvalidTooLong: N,
        isInvalidPhoneNumberError: I
    };
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/PhoneNumberForm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhoneNumberForm",
    ()=>D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-form/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Field$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/Field/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$PhoneNumberInput$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/PhoneNumberInput/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Button/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$ServerError$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/ServerError/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/VisuallyHidden/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$hooks$2f$usePhoneNumberValidators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/hooks/usePhoneNumberValidators.js [app-client] (ecmascript)");
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
const j = "PhoneNumberForm-module__form___ExO8G", m = {
    form: j,
    "server-error": "PhoneNumberForm-module__server-error___AQcMg",
    "phone-number-fieldset": "PhoneNumberForm-module__phone-number-fieldset___0TsSH"
}, q = ({ children: n })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("fieldset", {
        className: m["phone-number-fieldset"],
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("legend", {
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
                    children: "International phone number"
                })
            }),
            n
        ]
    }), D = ({ className: n = "", countryCode: t = "US", countryOptions: o = !0, error: r, isPending: h, onCountryCodeChange: a, onPhoneNumberChange: d, phoneNumber: p, submitLabel: b = "Continue", ...v })=>{
    const { isInvalidCountry: f, isInvalidLength: c, isInvalidNumber: _, isInvalidTooShort: P, isInvalidTooLong: N, isInvalidPhoneNumberError: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$hooks$2f$usePhoneNumberValidators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePhoneNumberValidators"])({
        countryCode: t
    }), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>r && s(r) ? "Use a valid phone number" : "", [
        r,
        s
    ]), g = !!r && !i, F = (typeof o == "boolean" ? o : o.length > 0) ? q : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
        className: `${m.form} ${n}`,
        ...v,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(F, {
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$Field$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    label: "Phone number",
                    name: "phone",
                    inlineError: i,
                    validators: [
                        [
                            "valueMissing",
                            "Phone number is required"
                        ],
                        [
                            "typeMismatch",
                            "Use a valid phone number"
                        ],
                        [
                            _,
                            "Use a valid phone number"
                        ],
                        [
                            f,
                            "Country is not supported"
                        ],
                        [
                            P,
                            "Phone number is too short"
                        ],
                        [
                            N,
                            "Phone number is too long"
                        ],
                        [
                            c,
                            "Phone number is the wrong length"
                        ]
                    ],
                    children: (l)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$PhoneNumberInput$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneNumberInput"], {
                            "aria-invalid": !(l === void 0 || l.valid) || !!i,
                            autoComplete: "tel-national",
                            countryOptions: o,
                            phoneNumber: p,
                            onPhoneNumberChange: d,
                            countryCode: t,
                            onCountryCodeChange: a,
                            required: !0
                        })
                })
            }),
            g && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$ServerError$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServerError"], {
                error: r,
                className: m["server-error"]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$form$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormSubmit"], {
                asChild: !0,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "submit",
                    isPending: h,
                    children: b
                })
            })
        ]
    });
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/formatPhoneNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatPhoneNumber",
    ()=>Qn
]);
const Jt = {
    version: 4,
    country_calling_codes: {
        1: [
            "US",
            "AG",
            "AI",
            "AS",
            "BB",
            "BM",
            "BS",
            "CA",
            "DM",
            "DO",
            "GD",
            "GU",
            "JM",
            "KN",
            "KY",
            "LC",
            "MP",
            "MS",
            "PR",
            "SX",
            "TC",
            "TT",
            "VC",
            "VG",
            "VI"
        ],
        7: [
            "RU",
            "KZ"
        ],
        20: [
            "EG"
        ],
        27: [
            "ZA"
        ],
        30: [
            "GR"
        ],
        31: [
            "NL"
        ],
        32: [
            "BE"
        ],
        33: [
            "FR"
        ],
        34: [
            "ES"
        ],
        36: [
            "HU"
        ],
        39: [
            "IT",
            "VA"
        ],
        40: [
            "RO"
        ],
        41: [
            "CH"
        ],
        43: [
            "AT"
        ],
        44: [
            "GB",
            "GG",
            "IM",
            "JE"
        ],
        45: [
            "DK"
        ],
        46: [
            "SE"
        ],
        47: [
            "NO",
            "SJ"
        ],
        48: [
            "PL"
        ],
        49: [
            "DE"
        ],
        51: [
            "PE"
        ],
        52: [
            "MX"
        ],
        53: [
            "CU"
        ],
        54: [
            "AR"
        ],
        55: [
            "BR"
        ],
        56: [
            "CL"
        ],
        57: [
            "CO"
        ],
        58: [
            "VE"
        ],
        60: [
            "MY"
        ],
        61: [
            "AU",
            "CC",
            "CX"
        ],
        62: [
            "ID"
        ],
        63: [
            "PH"
        ],
        64: [
            "NZ"
        ],
        65: [
            "SG"
        ],
        66: [
            "TH"
        ],
        81: [
            "JP"
        ],
        82: [
            "KR"
        ],
        84: [
            "VN"
        ],
        86: [
            "CN"
        ],
        90: [
            "TR"
        ],
        91: [
            "IN"
        ],
        92: [
            "PK"
        ],
        93: [
            "AF"
        ],
        94: [
            "LK"
        ],
        95: [
            "MM"
        ],
        98: [
            "IR"
        ],
        211: [
            "SS"
        ],
        212: [
            "MA",
            "EH"
        ],
        213: [
            "DZ"
        ],
        216: [
            "TN"
        ],
        218: [
            "LY"
        ],
        220: [
            "GM"
        ],
        221: [
            "SN"
        ],
        222: [
            "MR"
        ],
        223: [
            "ML"
        ],
        224: [
            "GN"
        ],
        225: [
            "CI"
        ],
        226: [
            "BF"
        ],
        227: [
            "NE"
        ],
        228: [
            "TG"
        ],
        229: [
            "BJ"
        ],
        230: [
            "MU"
        ],
        231: [
            "LR"
        ],
        232: [
            "SL"
        ],
        233: [
            "GH"
        ],
        234: [
            "NG"
        ],
        235: [
            "TD"
        ],
        236: [
            "CF"
        ],
        237: [
            "CM"
        ],
        238: [
            "CV"
        ],
        239: [
            "ST"
        ],
        240: [
            "GQ"
        ],
        241: [
            "GA"
        ],
        242: [
            "CG"
        ],
        243: [
            "CD"
        ],
        244: [
            "AO"
        ],
        245: [
            "GW"
        ],
        246: [
            "IO"
        ],
        247: [
            "AC"
        ],
        248: [
            "SC"
        ],
        249: [
            "SD"
        ],
        250: [
            "RW"
        ],
        251: [
            "ET"
        ],
        252: [
            "SO"
        ],
        253: [
            "DJ"
        ],
        254: [
            "KE"
        ],
        255: [
            "TZ"
        ],
        256: [
            "UG"
        ],
        257: [
            "BI"
        ],
        258: [
            "MZ"
        ],
        260: [
            "ZM"
        ],
        261: [
            "MG"
        ],
        262: [
            "RE",
            "YT"
        ],
        263: [
            "ZW"
        ],
        264: [
            "NA"
        ],
        265: [
            "MW"
        ],
        266: [
            "LS"
        ],
        267: [
            "BW"
        ],
        268: [
            "SZ"
        ],
        269: [
            "KM"
        ],
        290: [
            "SH",
            "TA"
        ],
        291: [
            "ER"
        ],
        297: [
            "AW"
        ],
        298: [
            "FO"
        ],
        299: [
            "GL"
        ],
        350: [
            "GI"
        ],
        351: [
            "PT"
        ],
        352: [
            "LU"
        ],
        353: [
            "IE"
        ],
        354: [
            "IS"
        ],
        355: [
            "AL"
        ],
        356: [
            "MT"
        ],
        357: [
            "CY"
        ],
        358: [
            "FI",
            "AX"
        ],
        359: [
            "BG"
        ],
        370: [
            "LT"
        ],
        371: [
            "LV"
        ],
        372: [
            "EE"
        ],
        373: [
            "MD"
        ],
        374: [
            "AM"
        ],
        375: [
            "BY"
        ],
        376: [
            "AD"
        ],
        377: [
            "MC"
        ],
        378: [
            "SM"
        ],
        380: [
            "UA"
        ],
        381: [
            "RS"
        ],
        382: [
            "ME"
        ],
        383: [
            "XK"
        ],
        385: [
            "HR"
        ],
        386: [
            "SI"
        ],
        387: [
            "BA"
        ],
        389: [
            "MK"
        ],
        420: [
            "CZ"
        ],
        421: [
            "SK"
        ],
        423: [
            "LI"
        ],
        500: [
            "FK"
        ],
        501: [
            "BZ"
        ],
        502: [
            "GT"
        ],
        503: [
            "SV"
        ],
        504: [
            "HN"
        ],
        505: [
            "NI"
        ],
        506: [
            "CR"
        ],
        507: [
            "PA"
        ],
        508: [
            "PM"
        ],
        509: [
            "HT"
        ],
        590: [
            "GP",
            "BL",
            "MF"
        ],
        591: [
            "BO"
        ],
        592: [
            "GY"
        ],
        593: [
            "EC"
        ],
        594: [
            "GF"
        ],
        595: [
            "PY"
        ],
        596: [
            "MQ"
        ],
        597: [
            "SR"
        ],
        598: [
            "UY"
        ],
        599: [
            "CW",
            "BQ"
        ],
        670: [
            "TL"
        ],
        672: [
            "NF"
        ],
        673: [
            "BN"
        ],
        674: [
            "NR"
        ],
        675: [
            "PG"
        ],
        676: [
            "TO"
        ],
        677: [
            "SB"
        ],
        678: [
            "VU"
        ],
        679: [
            "FJ"
        ],
        680: [
            "PW"
        ],
        681: [
            "WF"
        ],
        682: [
            "CK"
        ],
        683: [
            "NU"
        ],
        685: [
            "WS"
        ],
        686: [
            "KI"
        ],
        687: [
            "NC"
        ],
        688: [
            "TV"
        ],
        689: [
            "PF"
        ],
        690: [
            "TK"
        ],
        691: [
            "FM"
        ],
        692: [
            "MH"
        ],
        850: [
            "KP"
        ],
        852: [
            "HK"
        ],
        853: [
            "MO"
        ],
        855: [
            "KH"
        ],
        856: [
            "LA"
        ],
        880: [
            "BD"
        ],
        886: [
            "TW"
        ],
        960: [
            "MV"
        ],
        961: [
            "LB"
        ],
        962: [
            "JO"
        ],
        963: [
            "SY"
        ],
        964: [
            "IQ"
        ],
        965: [
            "KW"
        ],
        966: [
            "SA"
        ],
        967: [
            "YE"
        ],
        968: [
            "OM"
        ],
        970: [
            "PS"
        ],
        971: [
            "AE"
        ],
        972: [
            "IL"
        ],
        973: [
            "BH"
        ],
        974: [
            "QA"
        ],
        975: [
            "BT"
        ],
        976: [
            "MN"
        ],
        977: [
            "NP"
        ],
        992: [
            "TJ"
        ],
        993: [
            "TM"
        ],
        994: [
            "AZ"
        ],
        995: [
            "GE"
        ],
        996: [
            "KG"
        ],
        998: [
            "UZ"
        ]
    },
    countries: {
        AC: [
            "247",
            "00",
            "(?:[01589]\\d|[46])\\d{4}",
            [
                5,
                6
            ]
        ],
        AD: [
            "376",
            "00",
            "(?:1|6\\d)\\d{7}|[135-9]\\d{5}",
            [
                6,
                8,
                9
            ],
            [
                [
                    "(\\d{3})(\\d{3})",
                    "$1 $2",
                    [
                        "[135-9]"
                    ]
                ],
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "1"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "6"
                    ]
                ]
            ]
        ],
        AE: [
            "971",
            "00",
            "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",
            [
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
            ],
            [
                [
                    "(\\d{3})(\\d{2,9})",
                    "$1 $2",
                    [
                        "60|8"
                    ]
                ],
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[236]|[479][2-8]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d)(\\d{5})",
                    "$1 $2 $3",
                    [
                        "[479]"
                    ]
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "5"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        AF: [
            "93",
            "00",
            "[2-7]\\d{8}",
            [
                9
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[2-7]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        AG: [
            "1",
            "011",
            "(?:268|[58]\\d\\d|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([457]\\d{6})$|1",
            "268$1",
            0,
            "268"
        ],
        AI: [
            "1",
            "011",
            "(?:264|[58]\\d\\d|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([2457]\\d{6})$|1",
            "264$1",
            0,
            "264"
        ],
        AL: [
            "355",
            "00",
            "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",
            [
                6,
                7,
                8,
                9
            ],
            [
                [
                    "(\\d{3})(\\d{3,4})",
                    "$1 $2",
                    [
                        "80|9"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "4[2-6]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[2358][2-5]|4"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{5})",
                    "$1 $2",
                    [
                        "[23578]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "6"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        AM: [
            "374",
            "00",
            "(?:[1-489]\\d|55|60|77)\\d{6}",
            [
                8
            ],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[89]0"
                    ],
                    "0 $1"
                ],
                [
                    "(\\d{3})(\\d{5})",
                    "$1 $2",
                    [
                        "2|3[12]"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{2})(\\d{6})",
                    "$1 $2",
                    [
                        "1|47"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{2})(\\d{6})",
                    "$1 $2",
                    [
                        "[3-9]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        AO: [
            "244",
            "00",
            "[29]\\d{8}",
            [
                9
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[29]"
                    ]
                ]
            ]
        ],
        AR: [
            "54",
            "00",
            "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",
            [
                10,
                11
            ],
            [
                [
                    "(\\d{4})(\\d{2})(\\d{4})",
                    "$1 $2-$3",
                    [
                        "2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])",
                        "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
                        "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
                        "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2-$3",
                    [
                        "1"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "[68]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2-$3",
                    [
                        "[23]"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d)(\\d{4})(\\d{2})(\\d{4})",
                    "$2 15-$3-$4",
                    [
                        "9(?:2[2-469]|3[3-578])",
                        "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))",
                        "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
                        "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
                        "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3-$4"
                ],
                [
                    "(\\d)(\\d{2})(\\d{4})(\\d{4})",
                    "$2 15-$3-$4",
                    [
                        "91"
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3-$4"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{5})",
                    "$1-$2-$3",
                    [
                        "8"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{3})(\\d{3})(\\d{4})",
                    "$2 15-$3-$4",
                    [
                        "9"
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3-$4"
                ]
            ],
            "0",
            0,
            "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
            "9$1"
        ],
        AS: [
            "1",
            "011",
            "(?:[58]\\d\\d|684|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([267]\\d{6})$|1",
            "684$1",
            0,
            "684"
        ],
        AT: [
            "43",
            "00",
            "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",
            [
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13
            ],
            [
                [
                    "(\\d)(\\d{3,12})",
                    "$1 $2",
                    [
                        "1(?:11|[2-9])"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})",
                    "$1 $2",
                    [
                        "517"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3,5})",
                    "$1 $2",
                    [
                        "5[079]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3,10})",
                    "$1 $2",
                    [
                        "(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]",
                        "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{3,9})",
                    "$1 $2",
                    [
                        "[2-467]|5[2-6]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "5"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{4,7})",
                    "$1 $2 $3",
                    [
                        "5"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        AU: [
            "61",
            "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
            "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",
            [
                5,
                6,
                7,
                8,
                9,
                10,
                12
            ],
            [
                [
                    "(\\d{2})(\\d{3,4})",
                    "$1 $2",
                    [
                        "16"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2,4})",
                    "$1 $2 $3",
                    [
                        "16"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "14|4"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[2378]"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "1(?:30|[89])"
                    ]
                ]
            ],
            "0",
            0,
            "(183[12])|0",
            0,
            0,
            0,
            [
                [
                    "(?:(?:2(?:(?:[0-26-9]\\d|3[0-8]|5[0135-9])\\d|4(?:[02-9]\\d|10))|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90))|7(?:[013-57-9]\\d|2[0-8])\\d)\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",
                    [
                        9
                    ]
                ],
                [
                    "4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",
                    [
                        9
                    ]
                ],
                [
                    "180(?:0\\d{3}|2)\\d{3}",
                    [
                        7,
                        10
                    ]
                ],
                [
                    "190[0-26]\\d{6}",
                    [
                        10
                    ]
                ],
                0,
                0,
                0,
                [
                    "163\\d{2,6}",
                    [
                        5,
                        6,
                        7,
                        8,
                        9
                    ]
                ],
                [
                    "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",
                    [
                        9
                    ]
                ],
                [
                    "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",
                    [
                        6,
                        8,
                        10,
                        12
                    ]
                ]
            ],
            "0011"
        ],
        AW: [
            "297",
            "00",
            "(?:[25-79]\\d\\d|800)\\d{4}",
            [
                7
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[25-9]"
                    ]
                ]
            ]
        ],
        AX: [
            "358",
            "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
            "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",
            [
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
            ],
            0,
            "0",
            0,
            0,
            0,
            0,
            "18",
            0,
            "00"
        ],
        AZ: [
            "994",
            "00",
            "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",
            [
                9
            ],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "90"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "1[28]|2|365|46",
                        "1[28]|2|365[45]|46",
                        "1[28]|2|365(?:4|5[02])|46"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[13-9]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        BA: [
            "387",
            "00",
            "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "6[1-3]|[7-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2-$3",
                    [
                        "[3-5]|6[56]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "6"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        BB: [
            "1",
            "011",
            "(?:246|[58]\\d\\d|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "246$1",
            0,
            "246"
        ],
        BD: [
            "880",
            "00",
            "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",
            [
                6,
                7,
                8,
                9,
                10
            ],
            [
                [
                    "(\\d{2})(\\d{4,6})",
                    "$1-$2",
                    [
                        "31[5-8]|[459]1"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3,7})",
                    "$1-$2",
                    [
                        "3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{3,6})",
                    "$1-$2",
                    [
                        "[13-9]|2[23]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{7,8})",
                    "$1-$2",
                    [
                        "2"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        BE: [
            "32",
            "00",
            "4\\d{8}|[1-9]\\d{7}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "(?:80|9)0"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[239]|4[23]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[15-8]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "4"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        BF: [
            "226",
            "00",
            "(?:[025-7]\\d|44)\\d{6}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[024-7]"
                    ]
                ]
            ]
        ],
        BG: [
            "359",
            "00",
            "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
            [
                6,
                7,
                8,
                9,
                12
            ],
            [
                [
                    "(\\d)(\\d)(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "2"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "43[1-6]|70[1-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "2"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2,3})",
                    "$1 $2 $3",
                    [
                        "[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "(?:70|8)0"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{2})",
                    "$1 $2 $3",
                    [
                        "43[1-7]|7"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[48]|9[08]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "9"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        BH: [
            "973",
            "00",
            "[136-9]\\d{7}",
            [
                8
            ],
            [
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[13679]|8[02-4679]"
                    ]
                ]
            ]
        ],
        BI: [
            "257",
            "00",
            "(?:[267]\\d|31)\\d{6}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[2367]"
                    ]
                ]
            ]
        ],
        BJ: [
            "229",
            "00",
            "(?:01\\d|[24-689])\\d{7}",
            [
                8,
                10
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[24-689]"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4 $5",
                    [
                        "0"
                    ]
                ]
            ]
        ],
        BL: [
            "590",
            "00",
            "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",
            [
                9
            ],
            0,
            "0",
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"
                ],
                [
                    "(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"
                ],
                [
                    "80[0-5]\\d{6}"
                ],
                0,
                0,
                0,
                0,
                0,
                [
                    "9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"
                ]
            ]
        ],
        BM: [
            "1",
            "011",
            "(?:441|[58]\\d\\d|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "441$1",
            0,
            "441"
        ],
        BN: [
            "673",
            "00",
            "[2-578]\\d{6}",
            [
                7
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[2-578]"
                    ]
                ]
            ]
        ],
        BO: [
            "591",
            "00(?:1\\d)?",
            "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d)(\\d{7})",
                    "$1 $2",
                    [
                        "[235]|4[46]"
                    ]
                ],
                [
                    "(\\d{8})",
                    "$1",
                    [
                        "[67]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "8"
                    ]
                ]
            ],
            "0",
            0,
            "0(1\\d)?"
        ],
        BQ: [
            "599",
            "00",
            "(?:[34]1|7\\d)\\d{5}",
            [
                7
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            "[347]"
        ],
        BR: [
            "55",
            "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)",
            "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}",
            [
                8,
                9,
                10,
                11
            ],
            [
                [
                    "(\\d{4})(\\d{4})",
                    "$1-$2",
                    [
                        "300|4(?:0[02]|37|86)",
                        "300|4(?:0(?:0|20)|370|864)"
                    ]
                ],
                [
                    "(\\d{3})(\\d{2,3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "(?:[358]|90)0"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2-$3",
                    [
                        "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"
                    ],
                    "($1)"
                ],
                [
                    "(\\d{2})(\\d{5})(\\d{4})",
                    "$1 $2-$3",
                    [
                        "[16][1-9]|[2-57-9]"
                    ],
                    "($1)"
                ]
            ],
            "0",
            0,
            "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
            "$2"
        ],
        BS: [
            "1",
            "011",
            "(?:242|[58]\\d\\d|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([3-8]\\d{6})$|1",
            "242$1",
            0,
            "242"
        ],
        BT: [
            "975",
            "00",
            "[17]\\d{7}|[2-8]\\d{6}",
            [
                7,
                8
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[2-68]|7[246]"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "1[67]|7"
                    ]
                ]
            ]
        ],
        BW: [
            "267",
            "00",
            "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",
            [
                7,
                8,
                10
            ],
            [
                [
                    "(\\d{2})(\\d{5})",
                    "$1 $2",
                    [
                        "90"
                    ]
                ],
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[24-6]|3[15-9]"
                    ]
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[37]"
                    ]
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "0"
                    ]
                ],
                [
                    "(\\d{3})(\\d{4})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "8"
                    ]
                ]
            ]
        ],
        BY: [
            "375",
            "810",
            "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",
            [
                6,
                7,
                8,
                9,
                10,
                11
            ],
            [
                [
                    "(\\d{3})(\\d{3})",
                    "$1 $2",
                    [
                        "800"
                    ],
                    "8 $1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2,4})",
                    "$1 $2 $3",
                    [
                        "800"
                    ],
                    "8 $1"
                ],
                [
                    "(\\d{4})(\\d{2})(\\d{3})",
                    "$1 $2-$3",
                    [
                        "1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])",
                        "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"
                    ],
                    "8 0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2-$3-$4",
                    [
                        "1(?:[56]|7[467])|2[1-3]"
                    ],
                    "8 0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2-$3-$4",
                    [
                        "[1-4]"
                    ],
                    "8 0$1"
                ],
                [
                    "(\\d{3})(\\d{3,4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[89]"
                    ],
                    "8 $1"
                ]
            ],
            "8",
            0,
            "0|80?",
            0,
            0,
            0,
            0,
            "8~10"
        ],
        BZ: [
            "501",
            "00",
            "(?:0800\\d|[2-8])\\d{6}",
            [
                7,
                11
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1-$2",
                    [
                        "[2-8]"
                    ]
                ],
                [
                    "(\\d)(\\d{3})(\\d{4})(\\d{3})",
                    "$1-$2-$3-$4",
                    [
                        "0"
                    ]
                ]
            ]
        ],
        CA: [
            "1",
            "011",
            "[2-9]\\d{9}|3\\d{6}",
            [
                7,
                10
            ],
            0,
            "1",
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}",
                    [
                        10
                    ]
                ],
                [
                    "",
                    [
                        10
                    ]
                ],
                [
                    "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
                    [
                        10
                    ]
                ],
                [
                    "900[2-9]\\d{6}",
                    [
                        10
                    ]
                ],
                [
                    "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}",
                    [
                        10
                    ]
                ],
                0,
                [
                    "310\\d{4}",
                    [
                        7
                    ]
                ],
                0,
                [
                    "600[2-9]\\d{6}",
                    [
                        10
                    ]
                ]
            ]
        ],
        CC: [
            "61",
            "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
            "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
            [
                6,
                7,
                8,
                9,
                10,
                12
            ],
            0,
            "0",
            0,
            "([59]\\d{7})$|0",
            "8$1",
            0,
            0,
            [
                [
                    "8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",
                    [
                        9
                    ]
                ],
                [
                    "4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",
                    [
                        9
                    ]
                ],
                [
                    "180(?:0\\d{3}|2)\\d{3}",
                    [
                        7,
                        10
                    ]
                ],
                [
                    "190[0-26]\\d{6}",
                    [
                        10
                    ]
                ],
                0,
                0,
                0,
                0,
                [
                    "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",
                    [
                        9
                    ]
                ],
                [
                    "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",
                    [
                        6,
                        8,
                        10,
                        12
                    ]
                ]
            ],
            "0011"
        ],
        CD: [
            "243",
            "00",
            "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}",
            [
                7,
                8,
                9,
                10
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "88"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{5})",
                    "$1 $2",
                    [
                        "[1-6]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "2"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[89]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "5"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        CF: [
            "236",
            "00",
            "(?:[27]\\d{3}|8776)\\d{4}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[278]"
                    ]
                ]
            ]
        ],
        CG: [
            "242",
            "00",
            "222\\d{6}|(?:0\\d|80)\\d{7}",
            [
                9
            ],
            [
                [
                    "(\\d)(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "8"
                    ]
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[02]"
                    ]
                ]
            ]
        ],
        CH: [
            "41",
            "00",
            "8\\d{11}|[2-9]\\d{8}",
            [
                9,
                12
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "8[047]|90"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[2-79]|81"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4 $5",
                    [
                        "8"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        CI: [
            "225",
            "00",
            "[02]\\d{9}",
            [
                10
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d)(\\d{5})",
                    "$1 $2 $3 $4",
                    [
                        "2"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{4})",
                    "$1 $2 $3 $4",
                    [
                        "0"
                    ]
                ]
            ]
        ],
        CK: [
            "682",
            "00",
            "[2-578]\\d{4}",
            [
                5
            ],
            [
                [
                    "(\\d{2})(\\d{3})",
                    "$1 $2",
                    [
                        "[2-578]"
                    ]
                ]
            ]
        ],
        CL: [
            "56",
            "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0",
            "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",
            [
                9,
                10,
                11
            ],
            [
                [
                    "(\\d{5})(\\d{4})",
                    "$1 $2",
                    [
                        "219",
                        "2196"
                    ],
                    "($1)"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "44"
                    ]
                ],
                [
                    "(\\d)(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "2[1-36]"
                    ],
                    "($1)"
                ],
                [
                    "(\\d)(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "9[2-9]"
                    ]
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"
                    ],
                    "($1)"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "60|8"
                    ]
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{2})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "60"
                    ]
                ]
            ]
        ],
        CM: [
            "237",
            "00",
            "[26]\\d{8}|88\\d{6,7}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "88"
                    ]
                ],
                [
                    "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4 $5",
                    [
                        "[26]|88"
                    ]
                ]
            ]
        ],
        CN: [
            "86",
            "00|1(?:[12]\\d|79)\\d\\d00",
            "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}",
            [
                7,
                8,
                9,
                10,
                11,
                12
            ],
            [
                [
                    "(\\d{2})(\\d{5,6})",
                    "$1 $2",
                    [
                        "(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]",
                        "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1",
                        "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12",
                        "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123",
                        "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{5,6})",
                    "$1 $2",
                    [
                        "3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
                        "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
                        "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
                        "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "(?:4|80)0"
                    ]
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "10|2(?:[02-57-9]|1[1-9])",
                        "10|2(?:[02-57-9]|1[1-9])",
                        "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{3})(\\d{7,8})",
                    "$1 $2",
                    [
                        "9"
                    ]
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "80"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{3})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[3-578]"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{3})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1[3-9]"
                    ]
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3 $4",
                    [
                        "[12]"
                    ],
                    "0$1",
                    1
                ]
            ],
            "0",
            0,
            "(1(?:[12]\\d|79)\\d\\d)|0",
            0,
            0,
            0,
            0,
            "00"
        ],
        CO: [
            "57",
            "00(?:4(?:[14]4|56)|[579])",
            "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}",
            [
                8,
                10,
                11
            ],
            [
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "46"
                    ]
                ],
                [
                    "(\\d{3})(\\d{7})",
                    "$1 $2",
                    [
                        "6|90"
                    ],
                    "($1)"
                ],
                [
                    "(\\d{3})(\\d{7})",
                    "$1 $2",
                    [
                        "3[0-357]|9[14]"
                    ]
                ],
                [
                    "(\\d)(\\d{3})(\\d{7})",
                    "$1-$2-$3",
                    [
                        "1"
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3"
                ]
            ],
            "0",
            0,
            "0([3579]|4(?:[14]4|56))?"
        ],
        CR: [
            "506",
            "00",
            "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",
            [
                8,
                10
            ],
            [
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[2-7]|8[3-9]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "[89]"
                    ]
                ]
            ],
            0,
            0,
            "(19(?:0[0-2468]|1[09]|20|66|77|99))"
        ],
        CU: [
            "53",
            "119",
            "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}",
            [
                6,
                7,
                8,
                10
            ],
            [
                [
                    "(\\d{2})(\\d{4,6})",
                    "$1 $2",
                    [
                        "2[1-4]|[34]"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d)(\\d{6,7})",
                    "$1 $2",
                    [
                        "7"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d)(\\d{7})",
                    "$1 $2",
                    [
                        "[56]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{7})",
                    "$1 $2",
                    [
                        "8"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        CV: [
            "238",
            "0",
            "(?:[2-59]\\d\\d|800)\\d{4}",
            [
                7
            ],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3",
                    [
                        "[2-589]"
                    ]
                ]
            ]
        ],
        CW: [
            "599",
            "00",
            "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",
            [
                7,
                8
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[3467]"
                    ]
                ],
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "9[4-8]"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            "[69]"
        ],
        CX: [
            "61",
            "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
            "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
            [
                6,
                7,
                8,
                9,
                10,
                12
            ],
            0,
            "0",
            0,
            "([59]\\d{7})$|0",
            "8$1",
            0,
            0,
            [
                [
                    "8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",
                    [
                        9
                    ]
                ],
                [
                    "4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",
                    [
                        9
                    ]
                ],
                [
                    "180(?:0\\d{3}|2)\\d{3}",
                    [
                        7,
                        10
                    ]
                ],
                [
                    "190[0-26]\\d{6}",
                    [
                        10
                    ]
                ],
                0,
                0,
                0,
                0,
                [
                    "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",
                    [
                        9
                    ]
                ],
                [
                    "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",
                    [
                        6,
                        8,
                        10,
                        12
                    ]
                ]
            ],
            "0011"
        ],
        CY: [
            "357",
            "00",
            "(?:[279]\\d|[58]0)\\d{6}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{6})",
                    "$1 $2",
                    [
                        "[257-9]"
                    ]
                ]
            ]
        ],
        CZ: [
            "420",
            "00",
            "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",
            [
                9,
                10,
                11,
                12
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[2-8]|9[015-7]"
                    ]
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "96"
                    ]
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "9"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "9"
                    ]
                ]
            ]
        ],
        DE: [
            "49",
            "00",
            "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",
            [
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15
            ],
            [
                [
                    "(\\d{2})(\\d{3,13})",
                    "$1 $2",
                    [
                        "3[02]|40|[68]9"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3,12})",
                    "$1 $2",
                    [
                        "2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1",
                        "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{2,11})",
                    "$1 $2",
                    [
                        "[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]",
                        "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "138"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{5})(\\d{2,10})",
                    "$1 $2",
                    [
                        "3"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{5,11})",
                    "$1 $2",
                    [
                        "181"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d)(\\d{4,10})",
                    "$1 $2 $3",
                    [
                        "1(?:3|80)|9"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{7,8})",
                    "$1 $2",
                    [
                        "1[67]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{7,12})",
                    "$1 $2",
                    [
                        "8"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{5})(\\d{6})",
                    "$1 $2",
                    [
                        "185",
                        "1850",
                        "18500"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "7"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{7})",
                    "$1 $2",
                    [
                        "18[68]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{7})",
                    "$1 $2",
                    [
                        "15[1279]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{5})(\\d{6})",
                    "$1 $2",
                    [
                        "15[03568]",
                        "15(?:[0568]|31)"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{8})",
                    "$1 $2",
                    [
                        "18"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{7,8})",
                    "$1 $2 $3",
                    [
                        "1(?:6[023]|7)"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{2})(\\d{7})",
                    "$1 $2 $3",
                    [
                        "15[279]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{8})",
                    "$1 $2 $3",
                    [
                        "15"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        DJ: [
            "253",
            "00",
            "(?:2\\d|77)\\d{6}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[27]"
                    ]
                ]
            ]
        ],
        DK: [
            "45",
            "00",
            "[2-9]\\d{7}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[2-9]"
                    ]
                ]
            ]
        ],
        DM: [
            "1",
            "011",
            "(?:[58]\\d\\d|767|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([2-7]\\d{6})$|1",
            "767$1",
            0,
            "767"
        ],
        DO: [
            "1",
            "011",
            "(?:[58]\\d\\d|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            0,
            0,
            0,
            "8001|8[024]9"
        ],
        DZ: [
            "213",
            "00",
            "(?:[1-4]|[5-79]\\d|80)\\d{7}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[1-4]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "9"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[5-8]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        EC: [
            "593",
            "00",
            "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",
            [
                8,
                9,
                10,
                11
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2-$3",
                    [
                        "[2-7]"
                    ],
                    "(0$1)",
                    0,
                    "$1-$2-$3"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "9"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "1"
                    ]
                ]
            ],
            "0"
        ],
        EE: [
            "372",
            "00",
            "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",
            [
                7,
                8,
                10
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88",
                        "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"
                    ]
                ],
                [
                    "(\\d{4})(\\d{3,4})",
                    "$1 $2",
                    [
                        "[45]|8(?:00|[1-49])",
                        "[45]|8(?:00[1-9]|[1-49])"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "7"
                    ]
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "8"
                    ]
                ]
            ]
        ],
        EG: [
            "20",
            "00",
            "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",
            [
                8,
                9,
                10
            ],
            [
                [
                    "(\\d)(\\d{7,8})",
                    "$1 $2",
                    [
                        "[23]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{6,7})",
                    "$1 $2",
                    [
                        "1[35]|[4-6]|8[2468]|9[235-7]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[89]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{8})",
                    "$1 $2",
                    [
                        "1"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        EH: [
            "212",
            "00",
            "[5-8]\\d{8}",
            [
                9
            ],
            0,
            "0",
            0,
            0,
            0,
            0,
            "528[89]"
        ],
        ER: [
            "291",
            "00",
            "[178]\\d{6}",
            [
                7
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[178]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        ES: [
            "34",
            "00",
            "[5-9]\\d{8}",
            [
                9
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[89]00"
                    ]
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[5-9]"
                    ]
                ]
            ]
        ],
        ET: [
            "251",
            "00",
            "(?:11|[2-579]\\d)\\d{7}",
            [
                9
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[1-579]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        FI: [
            "358",
            "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
            "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",
            [
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
            ],
            [
                [
                    "(\\d{5})",
                    "$1",
                    [
                        "20[2-59]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3,7})",
                    "$1 $2",
                    [
                        "(?:[1-3]0|[68])0|70[07-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{4,8})",
                    "$1 $2",
                    [
                        "[14]|2[09]|50|7[135]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{6,10})",
                    "$1 $2",
                    [
                        "7"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{4,9})",
                    "$1 $2",
                    [
                        "(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"
                    ],
                    "0$1"
                ]
            ],
            "0",
            0,
            0,
            0,
            0,
            "1[03-79]|[2-9]",
            0,
            "00"
        ],
        FJ: [
            "679",
            "0(?:0|52)",
            "45\\d{5}|(?:0800\\d|[235-9])\\d{6}",
            [
                7,
                11
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[235-9]|45"
                    ]
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "0"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00"
        ],
        FK: [
            "500",
            "00",
            "[2-7]\\d{4}",
            [
                5
            ]
        ],
        FM: [
            "691",
            "00",
            "(?:[39]\\d\\d|820)\\d{4}",
            [
                7
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[389]"
                    ]
                ]
            ]
        ],
        FO: [
            "298",
            "00",
            "[2-9]\\d{5}",
            [
                6
            ],
            [
                [
                    "(\\d{6})",
                    "$1",
                    [
                        "[2-9]"
                    ]
                ]
            ],
            0,
            0,
            "(10(?:01|[12]0|88))"
        ],
        FR: [
            "33",
            "00",
            "[1-9]\\d{8}",
            [
                9
            ],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "8"
                    ],
                    "0 $1"
                ],
                [
                    "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4 $5",
                    [
                        "[1-79]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        GA: [
            "241",
            "00",
            "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",
            [
                7,
                8
            ],
            [
                [
                    "(\\d)(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[2-7]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "0"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "11|[67]"
                    ],
                    "0$1"
                ]
            ],
            0,
            0,
            "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})",
            "$1"
        ],
        GB: [
            "44",
            "00",
            "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",
            [
                7,
                9,
                10
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "800",
                        "8001",
                        "80011",
                        "800111",
                        "8001111"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3",
                    [
                        "845",
                        "8454",
                        "84546",
                        "845464"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{6})",
                    "$1 $2",
                    [
                        "800"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{5})(\\d{4,5})",
                    "$1 $2",
                    [
                        "1(?:38|5[23]|69|76|94)",
                        "1(?:(?:38|69)7|5(?:24|39)|768|946)",
                        "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{5,6})",
                    "$1 $2",
                    [
                        "1(?:[2-69][02-9]|[78])"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[25]|7(?:0|6[02-9])",
                        "[25]|7(?:0|6(?:[03-9]|2[356]))"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{6})",
                    "$1 $2",
                    [
                        "7"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[1389]"
                    ],
                    "0$1"
                ]
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",
                    [
                        9,
                        10
                    ]
                ],
                [
                    "7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",
                    [
                        10
                    ]
                ],
                [
                    "80[08]\\d{7}|800\\d{6}|8001111"
                ],
                [
                    "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",
                    [
                        7,
                        10
                    ]
                ],
                [
                    "70\\d{8}",
                    [
                        10
                    ]
                ],
                0,
                [
                    "(?:3[0347]|55)\\d{8}",
                    [
                        10
                    ]
                ],
                [
                    "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
                    [
                        10
                    ]
                ],
                [
                    "56\\d{8}",
                    [
                        10
                    ]
                ]
            ],
            0,
            " x"
        ],
        GD: [
            "1",
            "011",
            "(?:473|[58]\\d\\d|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "473$1",
            0,
            "473"
        ],
        GE: [
            "995",
            "00",
            "(?:[3-57]\\d\\d|800)\\d{6}",
            [
                9
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "70"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "32"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[57]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[348]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        GF: [
            "594",
            "00",
            "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}",
            [
                9
            ],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[5-7]|9[47]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[89]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        GG: [
            "44",
            "00",
            "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",
            [
                7,
                9,
                10
            ],
            0,
            "0",
            0,
            "([25-9]\\d{5})$|0",
            "1481$1",
            0,
            0,
            [
                [
                    "1481[25-9]\\d{5}",
                    [
                        10
                    ]
                ],
                [
                    "7(?:(?:781|839)\\d|911[17])\\d{5}",
                    [
                        10
                    ]
                ],
                [
                    "80[08]\\d{7}|800\\d{6}|8001111"
                ],
                [
                    "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",
                    [
                        7,
                        10
                    ]
                ],
                [
                    "70\\d{8}",
                    [
                        10
                    ]
                ],
                0,
                [
                    "(?:3[0347]|55)\\d{8}",
                    [
                        10
                    ]
                ],
                [
                    "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
                    [
                        10
                    ]
                ],
                [
                    "56\\d{8}",
                    [
                        10
                    ]
                ]
            ]
        ],
        GH: [
            "233",
            "00",
            "(?:[235]\\d{3}|800)\\d{5}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d{3})(\\d{5})",
                    "$1 $2",
                    [
                        "8"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[235]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        GI: [
            "350",
            "00",
            "(?:[25]\\d|60)\\d{6}",
            [
                8
            ],
            [
                [
                    "(\\d{3})(\\d{5})",
                    "$1 $2",
                    [
                        "2"
                    ]
                ]
            ]
        ],
        GL: [
            "299",
            "00",
            "(?:19|[2-689]\\d|70)\\d{4}",
            [
                6
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3",
                    [
                        "19|[2-9]"
                    ]
                ]
            ]
        ],
        GM: [
            "220",
            "00",
            "[2-9]\\d{6}",
            [
                7
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[2-9]"
                    ]
                ]
            ]
        ],
        GN: [
            "224",
            "00",
            "722\\d{6}|(?:3|6\\d)\\d{7}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "3"
                    ]
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[67]"
                    ]
                ]
            ]
        ],
        GP: [
            "590",
            "00",
            "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",
            [
                9
            ],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[5-79]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "8"
                    ],
                    "0$1"
                ]
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"
                ],
                [
                    "(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"
                ],
                [
                    "80[0-5]\\d{6}"
                ],
                0,
                0,
                0,
                0,
                0,
                [
                    "9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"
                ]
            ]
        ],
        GQ: [
            "240",
            "00",
            "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",
            [
                9
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[235]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{6})",
                    "$1 $2",
                    [
                        "[89]"
                    ]
                ]
            ]
        ],
        GR: [
            "30",
            "00",
            "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",
            [
                10,
                11,
                12
            ],
            [
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "21|7"
                    ]
                ],
                [
                    "(\\d{4})(\\d{6})",
                    "$1 $2",
                    [
                        "2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[2689]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3,4})(\\d{5})",
                    "$1 $2 $3",
                    [
                        "8"
                    ]
                ]
            ]
        ],
        GT: [
            "502",
            "00",
            "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",
            [
                8,
                11
            ],
            [
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[2-8]"
                    ]
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1"
                    ]
                ]
            ]
        ],
        GU: [
            "1",
            "011",
            "(?:[58]\\d\\d|671|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "671$1",
            0,
            "671"
        ],
        GW: [
            "245",
            "00",
            "[49]\\d{8}|4\\d{6}",
            [
                7,
                9
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "40"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[49]"
                    ]
                ]
            ]
        ],
        GY: [
            "592",
            "001",
            "(?:[2-8]\\d{3}|9008)\\d{3}",
            [
                7
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[2-9]"
                    ]
                ]
            ]
        ],
        HK: [
            "852",
            "00(?:30|5[09]|[126-9]?)",
            "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",
            [
                5,
                6,
                7,
                8,
                9,
                11
            ],
            [
                [
                    "(\\d{3})(\\d{2,5})",
                    "$1 $2",
                    [
                        "900",
                        "9003"
                    ]
                ],
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "8"
                    ]
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "9"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00"
        ],
        HN: [
            "504",
            "00",
            "8\\d{10}|[237-9]\\d{7}",
            [
                8,
                11
            ],
            [
                [
                    "(\\d{4})(\\d{4})",
                    "$1-$2",
                    [
                        "[237-9]"
                    ]
                ]
            ]
        ],
        HR: [
            "385",
            "00",
            "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}",
            [
                7,
                8,
                9
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "6[01]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2,3})",
                    "$1 $2 $3",
                    [
                        "8"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{4})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "1"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "6|7[245]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "9"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[2-57]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "8"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        HT: [
            "509",
            "00",
            "[2-589]\\d{7}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[2-589]"
                    ]
                ]
            ]
        ],
        HU: [
            "36",
            "00",
            "[235-7]\\d{8}|[1-9]\\d{7}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1"
                    ],
                    "(06 $1)"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"
                    ],
                    "(06 $1)"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[2-9]"
                    ],
                    "06 $1"
                ]
            ],
            "06"
        ],
        ID: [
            "62",
            "00[89]",
            "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}",
            [
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "15"
                    ]
                ],
                [
                    "(\\d{2})(\\d{5,9})",
                    "$1 $2",
                    [
                        "2[124]|[36]1"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{3})(\\d{5,7})",
                    "$1 $2",
                    [
                        "800"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{5,8})",
                    "$1 $2",
                    [
                        "[2-79]"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{3})(\\d{3,4})(\\d{3})",
                    "$1-$2-$3",
                    [
                        "8[1-35-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{6,8})",
                    "$1 $2",
                    [
                        "1"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "804"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d)(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "80"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{4})(\\d{4,5})",
                    "$1-$2-$3",
                    [
                        "8"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        IE: [
            "353",
            "00",
            "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",
            [
                7,
                8,
                9,
                10
            ],
            [
                [
                    "(\\d{2})(\\d{5})",
                    "$1 $2",
                    [
                        "2[24-9]|47|58|6[237-9]|9[35-9]"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{3})(\\d{5})",
                    "$1 $2",
                    [
                        "[45]0"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d)(\\d{3,4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[2569]|4[1-69]|7[14]"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "70"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "81"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[78]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "1"
                    ]
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "4"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{2})(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3 $4",
                    [
                        "8"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        IL: [
            "972",
            "0(?:0|1[2-9])",
            "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",
            [
                7,
                8,
                9,
                10,
                11,
                12
            ],
            [
                [
                    "(\\d{4})(\\d{3})",
                    "$1-$2",
                    [
                        "125"
                    ]
                ],
                [
                    "(\\d{4})(\\d{2})(\\d{2})",
                    "$1-$2-$3",
                    [
                        "121"
                    ]
                ],
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "[2-489]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "[57]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{3})",
                    "$1-$2-$3",
                    [
                        "12"
                    ]
                ],
                [
                    "(\\d{4})(\\d{6})",
                    "$1-$2",
                    [
                        "159"
                    ]
                ],
                [
                    "(\\d)(\\d{3})(\\d{3})(\\d{3})",
                    "$1-$2-$3-$4",
                    [
                        "1[7-9]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})",
                    "$1-$2 $3-$4",
                    [
                        "15"
                    ]
                ]
            ],
            "0"
        ],
        IM: [
            "44",
            "00",
            "1624\\d{6}|(?:[3578]\\d|90)\\d{8}",
            [
                10
            ],
            0,
            "0",
            0,
            "([25-8]\\d{5})$|0",
            "1624$1",
            0,
            "74576|(?:16|7[56])24"
        ],
        IN: [
            "91",
            "00",
            "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",
            [
                8,
                9,
                10,
                11,
                12,
                13
            ],
            [
                [
                    "(\\d{8})",
                    "$1",
                    [
                        "5(?:0|2[23]|3[03]|[67]1|88)",
                        "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)",
                        "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"
                    ],
                    0,
                    1
                ],
                [
                    "(\\d{4})(\\d{4,5})",
                    "$1 $2",
                    [
                        "180",
                        "1800"
                    ],
                    0,
                    1
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "140"
                    ],
                    0,
                    1
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "11|2[02]|33|4[04]|79[1-7]|80[2-46]",
                        "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])",
                        "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
                        "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
                        "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807",
                        "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
                        "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{5})(\\d{5})",
                    "$1 $2",
                    [
                        "[6-9]"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{4})(\\d{2,4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1(?:6|8[06])",
                        "1(?:6|8[06]0)"
                    ],
                    0,
                    1
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "18"
                    ],
                    0,
                    1
                ]
            ],
            "0"
        ],
        IO: [
            "246",
            "00",
            "3\\d{6}",
            [
                7
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "3"
                    ]
                ]
            ]
        ],
        IQ: [
            "964",
            "00",
            "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",
            [
                8,
                9,
                10
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[2-6]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "7"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        IR: [
            "98",
            "00",
            "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",
            [
                4,
                5,
                6,
                7,
                10
            ],
            [
                [
                    "(\\d{4,5})",
                    "$1",
                    [
                        "96"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{4,5})",
                    "$1 $2",
                    [
                        "(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "9"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[1-8]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        IS: [
            "354",
            "00|1(?:0(?:01|[12]0)|100)",
            "(?:38\\d|[4-9])\\d{6}",
            [
                7,
                9
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[4-9]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "3"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00"
        ],
        IT: [
            "39",
            "00",
            "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",
            [
                6,
                7,
                8,
                9,
                10,
                11,
                12
            ],
            [
                [
                    "(\\d{2})(\\d{4,6})",
                    "$1 $2",
                    [
                        "0[26]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3,6})",
                    "$1 $2",
                    [
                        "0[13-57-9][0159]|8(?:03|4[17]|9[2-5])",
                        "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"
                    ]
                ],
                [
                    "(\\d{4})(\\d{2,6})",
                    "$1 $2",
                    [
                        "0(?:[13-579][2-46-8]|8[236-8])"
                    ]
                ],
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "894"
                    ]
                ],
                [
                    "(\\d{2})(\\d{3,4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "0[26]|5"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "1(?:44|[679])|[378]|43"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3,4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "0[13-57-9][0159]|14"
                    ]
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{5})",
                    "$1 $2 $3",
                    [
                        "0[26]"
                    ]
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "0"
                    ]
                ],
                [
                    "(\\d{3})(\\d{4})(\\d{4,5})",
                    "$1 $2 $3",
                    [
                        "3"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}",
                    [
                        6,
                        7,
                        8,
                        9,
                        10,
                        11
                    ]
                ],
                [
                    "3[2-9]\\d{7,8}|(?:31|43)\\d{8}",
                    [
                        9,
                        10
                    ]
                ],
                [
                    "80(?:0\\d{3}|3)\\d{3}",
                    [
                        6,
                        9
                    ]
                ],
                [
                    "(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",
                    [
                        6,
                        8,
                        9,
                        10
                    ]
                ],
                [
                    "1(?:78\\d|99)\\d{6}",
                    [
                        9,
                        10
                    ]
                ],
                [
                    "3[2-8]\\d{9,10}",
                    [
                        11,
                        12
                    ]
                ],
                0,
                0,
                [
                    "55\\d{8}",
                    [
                        10
                    ]
                ],
                [
                    "84(?:[08]\\d{3}|[17])\\d{3}",
                    [
                        6,
                        9
                    ]
                ]
            ]
        ],
        JE: [
            "44",
            "00",
            "1534\\d{6}|(?:[3578]\\d|90)\\d{8}",
            [
                10
            ],
            0,
            "0",
            0,
            "([0-24-8]\\d{5})$|0",
            "1534$1",
            0,
            0,
            [
                [
                    "1534[0-24-8]\\d{5}"
                ],
                [
                    "7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"
                ],
                [
                    "80(?:07(?:35|81)|8901)\\d{4}"
                ],
                [
                    "(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"
                ],
                [
                    "701511\\d{4}"
                ],
                0,
                [
                    "(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"
                ],
                [
                    "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"
                ],
                [
                    "56\\d{8}"
                ]
            ]
        ],
        JM: [
            "1",
            "011",
            "(?:[58]\\d\\d|658|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            0,
            0,
            0,
            "658|876"
        ],
        JO: [
            "962",
            "00",
            "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[2356]|87"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{3})(\\d{5,6})",
                    "$1 $2",
                    [
                        "[89]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{7})",
                    "$1 $2",
                    [
                        "70"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "7"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        JP: [
            "81",
            "010",
            "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",
            [
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1-$2-$3",
                    [
                        "(?:12|57|99)0"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d)(\\d{4})",
                    "$1-$2-$3",
                    [
                        "1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])",
                        "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]",
                        "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "60"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{4})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "[36]|4(?:2[09]|7[01])",
                        "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
                        "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
                        "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "[14]|[289][2-9]|5[3-9]|7[2-4679]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "800"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "[257-9]"
                    ],
                    "0$1"
                ]
            ],
            "0",
            0,
            "(000[259]\\d{6})$|(?:(?:003768)0?)|0",
            "$1"
        ],
        KE: [
            "254",
            "000",
            "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",
            [
                7,
                8,
                9,
                10
            ],
            [
                [
                    "(\\d{2})(\\d{5,7})",
                    "$1 $2",
                    [
                        "[24-6]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{6})",
                    "$1 $2",
                    [
                        "[17]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[89]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        KG: [
            "996",
            "00",
            "8\\d{9}|[235-9]\\d{8}",
            [
                9,
                10
            ],
            [
                [
                    "(\\d{4})(\\d{5})",
                    "$1 $2",
                    [
                        "3(?:1[346]|[24-79])"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[235-79]|88"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d)(\\d{2,3})",
                    "$1 $2 $3 $4",
                    [
                        "8"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        KH: [
            "855",
            "00[14-9]",
            "1\\d{9}|[1-9]\\d{7,8}",
            [
                8,
                9,
                10
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[1-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "1"
                    ]
                ]
            ],
            "0"
        ],
        KI: [
            "686",
            "00",
            "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",
            [
                5,
                8
            ],
            0,
            "0"
        ],
        KM: [
            "269",
            "00",
            "[3478]\\d{6}",
            [
                7
            ],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3",
                    [
                        "[3478]"
                    ]
                ]
            ]
        ],
        KN: [
            "1",
            "011",
            "(?:[58]\\d\\d|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([2-7]\\d{6})$|1",
            "869$1",
            0,
            "869"
        ],
        KP: [
            "850",
            "00|99",
            "85\\d{6}|(?:19\\d|[2-7])\\d{7}",
            [
                8,
                10
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "8"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[2-7]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        KR: [
            "82",
            "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))",
            "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",
            [
                5,
                6,
                8,
                9,
                10,
                11,
                12,
                13,
                14
            ],
            [
                [
                    "(\\d{2})(\\d{3,4})",
                    "$1-$2",
                    [
                        "(?:3[1-3]|[46][1-4]|5[1-5])1"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{4})",
                    "$1-$2",
                    [
                        "1"
                    ]
                ],
                [
                    "(\\d)(\\d{3,4})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "2"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "[36]0|8"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3,4})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "[1346]|5[1-5]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "[57]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{5})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "5"
                    ],
                    "0$1"
                ]
            ],
            "0",
            0,
            "0(8(?:[1-46-8]|5\\d\\d))?"
        ],
        KW: [
            "965",
            "00",
            "18\\d{5}|(?:[2569]\\d|41)\\d{6}",
            [
                7,
                8
            ],
            [
                [
                    "(\\d{4})(\\d{3,4})",
                    "$1 $2",
                    [
                        "[169]|2(?:[235]|4[1-35-9])|52"
                    ]
                ],
                [
                    "(\\d{3})(\\d{5})",
                    "$1 $2",
                    [
                        "[245]"
                    ]
                ]
            ]
        ],
        KY: [
            "1",
            "011",
            "(?:345|[58]\\d\\d|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "345$1",
            0,
            "345"
        ],
        KZ: [
            "7",
            "810",
            "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}",
            [
                10,
                14
            ],
            0,
            "8",
            0,
            0,
            0,
            0,
            "33622|7",
            0,
            "8~10"
        ],
        LA: [
            "856",
            "00",
            "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",
            [
                8,
                9,
                10
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "2[13]|3[14]|[4-8]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "3"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "[23]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        LB: [
            "961",
            "00",
            "[27-9]\\d{7}|[13-9]\\d{6}",
            [
                7,
                8
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[27-9]"
                    ]
                ]
            ],
            "0"
        ],
        LC: [
            "1",
            "011",
            "(?:[58]\\d\\d|758|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([2-8]\\d{6})$|1",
            "758$1",
            0,
            "758"
        ],
        LI: [
            "423",
            "00",
            "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",
            [
                7,
                9
            ],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3",
                    [
                        "[2379]|8(?:0[09]|7)",
                        "[2379]|8(?:0(?:02|9)|7)"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "8"
                    ]
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "69"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "6"
                    ]
                ]
            ],
            "0",
            0,
            "(1001)|0"
        ],
        LK: [
            "94",
            "00",
            "[1-9]\\d{8}",
            [
                9
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "7"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[1-689]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        LR: [
            "231",
            "00",
            "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",
            [
                7,
                8,
                9
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "4[67]|[56]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "2"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[2-578]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        LS: [
            "266",
            "00",
            "(?:[256]\\d\\d|800)\\d{5}",
            [
                8
            ],
            [
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[2568]"
                    ]
                ]
            ]
        ],
        LT: [
            "370",
            "00",
            "(?:[3469]\\d|52|[78]0)\\d{6}",
            [
                8
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "52[0-7]"
                    ],
                    "(0-$1)",
                    1
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[7-9]"
                    ],
                    "0 $1",
                    1
                ],
                [
                    "(\\d{2})(\\d{6})",
                    "$1 $2",
                    [
                        "37|4(?:[15]|6[1-8])"
                    ],
                    "(0-$1)",
                    1
                ],
                [
                    "(\\d{3})(\\d{5})",
                    "$1 $2",
                    [
                        "[3-6]"
                    ],
                    "(0-$1)",
                    1
                ]
            ],
            "0",
            0,
            "[08]"
        ],
        LU: [
            "352",
            "00",
            "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",
            [
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11
            ],
            [
                [
                    "(\\d{2})(\\d{3})",
                    "$1 $2",
                    [
                        "2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3",
                    [
                        "2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "20[2-689]"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
                    "$1 $2 $3 $4",
                    [
                        "2(?:[0367]|4[3-8])"
                    ]
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "80[01]|90[015]"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "20"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "6"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
                    "$1 $2 $3 $4 $5",
                    [
                        "2(?:[0367]|4[3-8])"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})",
                    "$1 $2 $3 $4",
                    [
                        "[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"
                    ]
                ]
            ],
            0,
            0,
            "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"
        ],
        LV: [
            "371",
            "00",
            "(?:[268]\\d|90)\\d{6}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[269]|8[01]"
                    ]
                ]
            ]
        ],
        LY: [
            "218",
            "00",
            "[2-9]\\d{8}",
            [
                9
            ],
            [
                [
                    "(\\d{2})(\\d{7})",
                    "$1-$2",
                    [
                        "[2-9]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        MA: [
            "212",
            "00",
            "[5-8]\\d{8}",
            [
                9
            ],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "5[45]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{5})",
                    "$1-$2",
                    [
                        "5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{7})",
                    "$1-$2",
                    [
                        "8"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{6})",
                    "$1-$2",
                    [
                        "[5-7]"
                    ],
                    "0$1"
                ]
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"
                ],
                [
                    "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-8]|5[0-3]|8[0-7]))\\d{6}"
                ],
                [
                    "80[0-7]\\d{6}"
                ],
                [
                    "89\\d{7}"
                ],
                0,
                0,
                0,
                0,
                [
                    "(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"
                ]
            ]
        ],
        MC: [
            "377",
            "00",
            "(?:[3489]|6\\d)\\d{7}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "4"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[389]"
                    ]
                ],
                [
                    "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4 $5",
                    [
                        "6"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        MD: [
            "373",
            "00",
            "(?:[235-7]\\d|[89]0)\\d{6}",
            [
                8
            ],
            [
                [
                    "(\\d{3})(\\d{5})",
                    "$1 $2",
                    [
                        "[89]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "22|3"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[25-7]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        ME: [
            "382",
            "00",
            "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[2-9]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        MF: [
            "590",
            "00",
            "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",
            [
                9
            ],
            0,
            "0",
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"
                ],
                [
                    "(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"
                ],
                [
                    "80[0-5]\\d{6}"
                ],
                0,
                0,
                0,
                0,
                0,
                [
                    "9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"
                ]
            ]
        ],
        MG: [
            "261",
            "00",
            "[23]\\d{8}",
            [
                9
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{3})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[23]"
                    ],
                    "0$1"
                ]
            ],
            "0",
            0,
            "([24-9]\\d{6})$|0",
            "20$1"
        ],
        MH: [
            "692",
            "011",
            "329\\d{4}|(?:[256]\\d|45)\\d{5}",
            [
                7
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1-$2",
                    [
                        "[2-6]"
                    ]
                ]
            ],
            "1"
        ],
        MK: [
            "389",
            "00",
            "[2-578]\\d{7}",
            [
                8
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "2|34[47]|4(?:[37]7|5[47]|64)"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[347]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d)(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[58]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        ML: [
            "223",
            "00",
            "[24-9]\\d{7}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[24-9]"
                    ]
                ]
            ]
        ],
        MM: [
            "95",
            "00",
            "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",
            [
                6,
                7,
                8,
                9,
                10
            ],
            [
                [
                    "(\\d)(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "16|2"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[12]|452|678|86",
                        "[12]|452|6788|86"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[4-7]|8[1-35]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{3})(\\d{4,6})",
                    "$1 $2 $3",
                    [
                        "9(?:2[0-4]|[35-9]|4[137-9])"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "2"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "8"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "92"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{5})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "9"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        MN: [
            "976",
            "001",
            "[12]\\d{7,9}|[5-9]\\d{7}",
            [
                8,
                9,
                10
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[12]1"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[5-9]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{5,6})",
                    "$1 $2",
                    [
                        "[12]2[1-3]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{5,6})",
                    "$1 $2",
                    [
                        "[12](?:27|3[2-8]|4[2-68]|5[1-4689])",
                        "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{5})(\\d{4,5})",
                    "$1 $2",
                    [
                        "[12]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        MO: [
            "853",
            "00",
            "0800\\d{3}|(?:28|[68]\\d)\\d{6}",
            [
                7,
                8
            ],
            [
                [
                    "(\\d{4})(\\d{3})",
                    "$1 $2",
                    [
                        "0"
                    ]
                ],
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[268]"
                    ]
                ]
            ]
        ],
        MP: [
            "1",
            "011",
            "[58]\\d{9}|(?:67|90)0\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "670$1",
            0,
            "670"
        ],
        MQ: [
            "596",
            "00",
            "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}",
            [
                9
            ],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[5-79]|8(?:0[6-9]|[36])"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "8"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        MR: [
            "222",
            "00",
            "(?:[2-4]\\d\\d|800)\\d{5}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[2-48]"
                    ]
                ]
            ]
        ],
        MS: [
            "1",
            "011",
            "(?:[58]\\d\\d|664|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([34]\\d{6})$|1",
            "664$1",
            0,
            "664"
        ],
        MT: [
            "356",
            "00",
            "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",
            [
                8
            ],
            [
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[2357-9]"
                    ]
                ]
            ]
        ],
        MU: [
            "230",
            "0(?:0|[24-7]0|3[03])",
            "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",
            [
                7,
                8,
                10
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[2-46]|8[013]"
                    ]
                ],
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[57]"
                    ]
                ],
                [
                    "(\\d{5})(\\d{5})",
                    "$1 $2",
                    [
                        "8"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "020"
        ],
        MV: [
            "960",
            "0(?:0|19)",
            "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",
            [
                7,
                10
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1-$2",
                    [
                        "[34679]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[89]"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00"
        ],
        MW: [
            "265",
            "00",
            "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",
            [
                7,
                9
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "1[2-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "2"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[137-9]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        MX: [
            "52",
            "0[09]",
            "[2-9]\\d{9}",
            [
                10
            ],
            [
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "33|5[56]|81"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[2-9]"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00"
        ],
        MY: [
            "60",
            "00",
            "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",
            [
                8,
                9,
                10
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1-$2 $3",
                    [
                        "[4-79]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1-$2 $3",
                    [
                        "1(?:[02469]|[378][1-9]|53)|8",
                        "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{4})(\\d{4})",
                    "$1-$2 $3",
                    [
                        "3"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{3})(\\d{2})(\\d{4})",
                    "$1-$2-$3-$4",
                    [
                        "1(?:[367]|80)"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1-$2 $3",
                    [
                        "15"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1-$2 $3",
                    [
                        "1"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        MZ: [
            "258",
            "00",
            "(?:2|8\\d)\\d{7}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "2|8[2-79]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "8"
                    ]
                ]
            ]
        ],
        NA: [
            "264",
            "00",
            "[68]\\d{7,8}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "88"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "6"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "87"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "8"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        NC: [
            "687",
            "00",
            "(?:050|[2-57-9]\\d\\d)\\d{3}",
            [
                6
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})",
                    "$1.$2.$3",
                    [
                        "[02-57-9]"
                    ]
                ]
            ]
        ],
        NE: [
            "227",
            "00",
            "[027-9]\\d{7}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "08"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[089]|2[013]|7[0467]"
                    ]
                ]
            ]
        ],
        NF: [
            "672",
            "00",
            "[13]\\d{5}",
            [
                6
            ],
            [
                [
                    "(\\d{2})(\\d{4})",
                    "$1 $2",
                    [
                        "1[0-3]"
                    ]
                ],
                [
                    "(\\d)(\\d{5})",
                    "$1 $2",
                    [
                        "[13]"
                    ]
                ]
            ],
            0,
            0,
            "([0-258]\\d{4})$",
            "3$1"
        ],
        NG: [
            "234",
            "009",
            "(?:20|9\\d)\\d{8}|[78]\\d{9,13}",
            [
                10,
                11,
                12,
                13,
                14
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[7-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "20[129]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{2})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "2"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{4})(\\d{4,5})",
                    "$1 $2 $3",
                    [
                        "[78]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{5})(\\d{5,6})",
                    "$1 $2 $3",
                    [
                        "[78]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        NI: [
            "505",
            "00",
            "(?:1800|[25-8]\\d{3})\\d{4}",
            [
                8
            ],
            [
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[125-8]"
                    ]
                ]
            ]
        ],
        NL: [
            "31",
            "00",
            "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",
            [
                5,
                6,
                7,
                8,
                9,
                10,
                11
            ],
            [
                [
                    "(\\d{3})(\\d{4,7})",
                    "$1 $2",
                    [
                        "[89]0"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{7})",
                    "$1 $2",
                    [
                        "66"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{8})",
                    "$1 $2",
                    [
                        "6"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[1-578]|91"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{5})",
                    "$1 $2 $3",
                    [
                        "9"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        NO: [
            "47",
            "00",
            "(?:0|[2-9]\\d{3})\\d{4}",
            [
                5,
                8
            ],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "8"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[2-79]"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            "[02-689]|7[0-8]"
        ],
        NP: [
            "977",
            "00",
            "(?:1\\d|9)\\d{9}|[1-9]\\d{7}",
            [
                8,
                10,
                11
            ],
            [
                [
                    "(\\d)(\\d{7})",
                    "$1-$2",
                    [
                        "1[2-6]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{6})",
                    "$1-$2",
                    [
                        "1[01]|[2-8]|9(?:[1-59]|[67][2-6])"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{7})",
                    "$1-$2",
                    [
                        "9"
                    ]
                ]
            ],
            "0"
        ],
        NR: [
            "674",
            "00",
            "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}",
            [
                7
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[24-9]"
                    ]
                ]
            ]
        ],
        NU: [
            "683",
            "00",
            "(?:[4-7]|888\\d)\\d{3}",
            [
                4,
                7
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "8"
                    ]
                ]
            ]
        ],
        NZ: [
            "64",
            "0(?:0|161)",
            "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}",
            [
                5,
                6,
                7,
                8,
                9,
                10
            ],
            [
                [
                    "(\\d{2})(\\d{3,8})",
                    "$1 $2",
                    [
                        "8[1-79]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2,3})",
                    "$1 $2 $3",
                    [
                        "50[036-8]|8|90",
                        "50(?:[0367]|88)|8|90"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "24|[346]|7[2-57-9]|9[2-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "2(?:10|74)|[589]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3,4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1|2[028]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,5})",
                    "$1 $2 $3",
                    [
                        "2(?:[169]|7[0-35-9])|7"
                    ],
                    "0$1"
                ]
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00"
        ],
        OM: [
            "968",
            "00",
            "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",
            [
                7,
                8,
                9
            ],
            [
                [
                    "(\\d{3})(\\d{4,6})",
                    "$1 $2",
                    [
                        "[58]"
                    ]
                ],
                [
                    "(\\d{2})(\\d{6})",
                    "$1 $2",
                    [
                        "2"
                    ]
                ],
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[179]"
                    ]
                ]
            ]
        ],
        PA: [
            "507",
            "00",
            "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",
            [
                7,
                8,
                10,
                11
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1-$2",
                    [
                        "[1-57-9]"
                    ]
                ],
                [
                    "(\\d{4})(\\d{4})",
                    "$1-$2",
                    [
                        "[68]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "8"
                    ]
                ]
            ]
        ],
        PE: [
            "51",
            "00|19(?:1[124]|77|90)00",
            "(?:[14-8]|9\\d)\\d{7}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d{3})(\\d{5})",
                    "$1 $2",
                    [
                        "80"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d)(\\d{7})",
                    "$1 $2",
                    [
                        "1"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{2})(\\d{6})",
                    "$1 $2",
                    [
                        "[4-8]"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "9"
                    ]
                ]
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
            " Anexo "
        ],
        PF: [
            "689",
            "00",
            "4\\d{5}(?:\\d{2})?|8\\d{7,8}",
            [
                6,
                8,
                9
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3",
                    [
                        "44"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "4|8[7-9]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "8"
                    ]
                ]
            ]
        ],
        PG: [
            "675",
            "00|140[1-3]",
            "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",
            [
                7,
                8
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "18|[2-69]|85"
                    ]
                ],
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[78]"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00"
        ],
        PH: [
            "63",
            "00",
            "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",
            [
                6,
                8,
                9,
                10,
                11,
                12,
                13
            ],
            [
                [
                    "(\\d)(\\d{5})",
                    "$1 $2",
                    [
                        "2"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{4})(\\d{4,6})",
                    "$1 $2",
                    [
                        "3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2",
                        "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{5})(\\d{4})",
                    "$1 $2",
                    [
                        "346|4(?:27|9[35])|883",
                        "3469|4(?:279|9(?:30|56))|8834"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d)(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "2"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[3-7]|8[2-8]"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[89]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1"
                    ]
                ],
                [
                    "(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})",
                    "$1 $2 $3 $4",
                    [
                        "1"
                    ]
                ]
            ],
            "0"
        ],
        PK: [
            "92",
            "00",
            "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
            [
                8,
                9,
                10,
                11,
                12
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{2,7})",
                    "$1 $2 $3",
                    [
                        "[89]0"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{5})",
                    "$1 $2",
                    [
                        "1"
                    ]
                ],
                [
                    "(\\d{3})(\\d{6,7})",
                    "$1 $2",
                    [
                        "2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])",
                        "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{2})(\\d{7,8})",
                    "$1 $2",
                    [
                        "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{5})(\\d{5})",
                    "$1 $2",
                    [
                        "58"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{3})(\\d{7})",
                    "$1 $2",
                    [
                        "3"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "[24-9]"
                    ],
                    "(0$1)"
                ]
            ],
            "0"
        ],
        PL: [
            "48",
            "00",
            "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",
            [
                6,
                7,
                8,
                9,
                10
            ],
            [
                [
                    "(\\d{5})",
                    "$1",
                    [
                        "19"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})",
                    "$1 $2",
                    [
                        "11|20|64"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1",
                        "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"
                    ]
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2,3})",
                    "$1 $2 $3",
                    [
                        "64"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"
                    ]
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "1[2-8]|[2-7]|8[1-79]|9[145]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "8"
                    ]
                ]
            ]
        ],
        PM: [
            "508",
            "00",
            "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}",
            [
                6,
                9
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3",
                    [
                        "[45]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "7"
                    ]
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "8"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        PR: [
            "1",
            "011",
            "(?:[589]\\d\\d|787)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            0,
            0,
            0,
            "787|939"
        ],
        PS: [
            "970",
            "00",
            "[2489]2\\d{6}|(?:1\\d|5)\\d{8}",
            [
                8,
                9,
                10
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[2489]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "5"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "1"
                    ]
                ]
            ],
            "0"
        ],
        PT: [
            "351",
            "00",
            "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",
            [
                9
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "2[12]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "16|[236-9]"
                    ]
                ]
            ]
        ],
        PW: [
            "680",
            "01[12]",
            "(?:[24-8]\\d\\d|345|900)\\d{4}",
            [
                7
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[2-9]"
                    ]
                ]
            ]
        ],
        PY: [
            "595",
            "00",
            "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",
            [
                6,
                7,
                8,
                9,
                10,
                11
            ],
            [
                [
                    "(\\d{3})(\\d{3,6})",
                    "$1 $2",
                    [
                        "[2-9]0"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{5})",
                    "$1 $2",
                    [
                        "[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{3})(\\d{4,5})",
                    "$1 $2",
                    [
                        "2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "87"
                    ]
                ],
                [
                    "(\\d{3})(\\d{6})",
                    "$1 $2",
                    [
                        "9(?:[5-79]|8[1-7])"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[2-8]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "9"
                    ]
                ]
            ],
            "0"
        ],
        QA: [
            "974",
            "00",
            "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",
            [
                7,
                8,
                9,
                11
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "2[136]|8"
                    ]
                ],
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[3-7]"
                    ]
                ]
            ]
        ],
        RE: [
            "262",
            "00",
            "709\\d{6}|(?:26|[689]\\d)\\d{7}",
            [
                9
            ],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[26-9]"
                    ],
                    "0$1"
                ]
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"
                ],
                [
                    "(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"
                ],
                [
                    "80\\d{7}"
                ],
                [
                    "89[1-37-9]\\d{6}"
                ],
                0,
                0,
                0,
                0,
                [
                    "9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"
                ],
                [
                    "8(?:1[019]|2[0156]|84|90)\\d{6}"
                ]
            ]
        ],
        RO: [
            "40",
            "00",
            "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}",
            [
                6,
                9
            ],
            [
                [
                    "(\\d{3})(\\d{3})",
                    "$1 $2",
                    [
                        "2[3-6]",
                        "2[3-6]\\d9"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{4})",
                    "$1 $2",
                    [
                        "219|31"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[23]1"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[236-9]"
                    ],
                    "0$1"
                ]
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            " int "
        ],
        RS: [
            "381",
            "00",
            "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",
            [
                6,
                7,
                8,
                9,
                10,
                11,
                12
            ],
            [
                [
                    "(\\d{3})(\\d{3,9})",
                    "$1 $2",
                    [
                        "(?:2[389]|39)0|[7-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{5,10})",
                    "$1 $2",
                    [
                        "[1-36]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        RU: [
            "7",
            "810",
            "8\\d{13}|[347-9]\\d{9}",
            [
                10,
                14
            ],
            [
                [
                    "(\\d{4})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "7(?:1[0-8]|2[1-9])",
                        "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))",
                        "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"
                    ],
                    "8 ($1)",
                    1
                ],
                [
                    "(\\d{5})(\\d)(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "7(?:1[0-68]|2[1-9])",
                        "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))",
                        "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"
                    ],
                    "8 ($1)",
                    1
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "7"
                    ],
                    "8 ($1)",
                    1
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2-$3-$4",
                    [
                        "[349]|8(?:[02-7]|1[1-8])"
                    ],
                    "8 ($1)",
                    1
                ],
                [
                    "(\\d{4})(\\d{4})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "8"
                    ],
                    "8 ($1)"
                ]
            ],
            "8",
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "336(?:[013-9]\\d|2[013-9])\\d{5}|(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15-7]|6[0-35-79]|7[1-37-9]))\\d{7}",
                    [
                        10
                    ]
                ],
                [
                    "9\\d{9}",
                    [
                        10
                    ]
                ],
                [
                    "8(?:0[04]|108\\d{3})\\d{7}"
                ],
                [
                    "80[39]\\d{7}",
                    [
                        10
                    ]
                ],
                [
                    "808\\d{7}",
                    [
                        10
                    ]
                ]
            ],
            "8~10"
        ],
        RW: [
            "250",
            "00",
            "(?:06|[27]\\d\\d|[89]00)\\d{6}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "0"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "2"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[7-9]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        SA: [
            "966",
            "00",
            "(?:[15]\\d|800|92)\\d{7}",
            [
                9,
                10
            ],
            [
                [
                    "(\\d{4})(\\d{5})",
                    "$1 $2",
                    [
                        "9"
                    ]
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "5"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "8"
                    ]
                ]
            ],
            "0"
        ],
        SB: [
            "677",
            "0[01]",
            "[6-9]\\d{6}|[1-6]\\d{4}",
            [
                5,
                7
            ],
            [
                [
                    "(\\d{2})(\\d{5})",
                    "$1 $2",
                    [
                        "6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"
                    ]
                ]
            ]
        ],
        SC: [
            "248",
            "010|0[0-2]",
            "(?:[2489]\\d|64)\\d{5}",
            [
                7
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[246]|9[57]"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00"
        ],
        SD: [
            "249",
            "00",
            "[19]\\d{8}",
            [
                9
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[19]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        SE: [
            "46",
            "00",
            "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",
            [
                6,
                7,
                8,
                9,
                10,
                12
            ],
            [
                [
                    "(\\d{2})(\\d{2,3})(\\d{2})",
                    "$1-$2 $3",
                    [
                        "20"
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3"
                ],
                [
                    "(\\d{3})(\\d{4})",
                    "$1-$2",
                    [
                        "9(?:00|39|44|9)"
                    ],
                    "0$1",
                    0,
                    "$1 $2"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2})",
                    "$1-$2 $3",
                    [
                        "[12][136]|3[356]|4[0246]|6[03]|90[1-9]"
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3"
                ],
                [
                    "(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
                    "$1-$2 $3 $4",
                    [
                        "8"
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3 $4"
                ],
                [
                    "(\\d{3})(\\d{2,3})(\\d{2})",
                    "$1-$2 $3",
                    [
                        "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3"
                ],
                [
                    "(\\d{3})(\\d{2,3})(\\d{3})",
                    "$1-$2 $3",
                    [
                        "9(?:00|39|44)"
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3"
                ],
                [
                    "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})",
                    "$1-$2 $3 $4",
                    [
                        "1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3 $4"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1-$2 $3 $4",
                    [
                        "10|7"
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3 $4"
                ],
                [
                    "(\\d)(\\d{3})(\\d{3})(\\d{2})",
                    "$1-$2 $3 $4",
                    [
                        "8"
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3 $4"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1-$2 $3 $4",
                    [
                        "[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3 $4"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{3})",
                    "$1-$2 $3 $4",
                    [
                        "9"
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3 $4"
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1-$2 $3 $4 $5",
                    [
                        "[26]"
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3 $4 $5"
                ]
            ],
            "0"
        ],
        SG: [
            "65",
            "0[0-3]\\d",
            "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",
            [
                8,
                10,
                11
            ],
            [
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[369]|8(?:0[1-9]|[1-9])"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "8"
                    ]
                ],
                [
                    "(\\d{4})(\\d{4})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "7"
                    ]
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1"
                    ]
                ]
            ]
        ],
        SH: [
            "290",
            "00",
            "(?:[256]\\d|8)\\d{3}",
            [
                4,
                5
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            "[256]"
        ],
        SI: [
            "386",
            "00|10(?:22|66|88|99)",
            "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",
            [
                5,
                6,
                7,
                8
            ],
            [
                [
                    "(\\d{2})(\\d{3,6})",
                    "$1 $2",
                    [
                        "8[09]|9"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{5})",
                    "$1 $2",
                    [
                        "59|8"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[37][01]|4[0139]|51|6"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[1-57]"
                    ],
                    "(0$1)"
                ]
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00"
        ],
        SJ: [
            "47",
            "00",
            "0\\d{4}|(?:[489]\\d|79)\\d{6}",
            [
                5,
                8
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            "79"
        ],
        SK: [
            "421",
            "00",
            "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",
            [
                6,
                7,
                9
            ],
            [
                [
                    "(\\d)(\\d{2})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "21"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2,3})",
                    "$1 $2 $3",
                    [
                        "[3-5][1-8]1",
                        "[3-5][1-8]1[67]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{3})(\\d{3})(\\d{2})",
                    "$1/$2 $3 $4",
                    [
                        "2"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[689]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1/$2 $3 $4",
                    [
                        "[3-5]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        SL: [
            "232",
            "00",
            "(?:[237-9]\\d|66)\\d{6}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{6})",
                    "$1 $2",
                    [
                        "[236-9]"
                    ],
                    "(0$1)"
                ]
            ],
            "0"
        ],
        SM: [
            "378",
            "00",
            "(?:0549|[5-7]\\d)\\d{6}",
            [
                8,
                10
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[5-7]"
                    ]
                ],
                [
                    "(\\d{4})(\\d{6})",
                    "$1 $2",
                    [
                        "0"
                    ]
                ]
            ],
            0,
            0,
            "([89]\\d{5})$",
            "0549$1"
        ],
        SN: [
            "221",
            "00",
            "(?:[378]\\d|93)\\d{7}",
            [
                9
            ],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "8"
                    ]
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[379]"
                    ]
                ]
            ]
        ],
        SO: [
            "252",
            "00",
            "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",
            [
                6,
                7,
                8,
                9
            ],
            [
                [
                    "(\\d{2})(\\d{4})",
                    "$1 $2",
                    [
                        "8[125]"
                    ]
                ],
                [
                    "(\\d{6})",
                    "$1",
                    [
                        "[134]"
                    ]
                ],
                [
                    "(\\d)(\\d{6})",
                    "$1 $2",
                    [
                        "[15]|2[0-79]|3[0-46-8]|4[0-7]"
                    ]
                ],
                [
                    "(\\d)(\\d{7})",
                    "$1 $2",
                    [
                        "(?:2|90)4|[67]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[348]|64|79|90"
                    ]
                ],
                [
                    "(\\d{2})(\\d{5,7})",
                    "$1 $2",
                    [
                        "1|28|6[0-35-9]|7[67]|9[2-9]"
                    ]
                ]
            ],
            "0"
        ],
        SR: [
            "597",
            "00",
            "(?:[2-5]|68|[78]\\d|90)\\d{5}",
            [
                6,
                7
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})",
                    "$1-$2-$3",
                    [
                        "56"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})",
                    "$1-$2",
                    [
                        "[2-5]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{4})",
                    "$1-$2",
                    [
                        "[6-9]"
                    ]
                ]
            ]
        ],
        SS: [
            "211",
            "00",
            "[19]\\d{8}",
            [
                9
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[19]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        ST: [
            "239",
            "00",
            "(?:22|9\\d)\\d{5}",
            [
                7
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[29]"
                    ]
                ]
            ]
        ],
        SV: [
            "503",
            "00",
            "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?",
            [
                7,
                8,
                11
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[89]"
                    ]
                ],
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[267]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[89]"
                    ]
                ]
            ]
        ],
        SX: [
            "1",
            "011",
            "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "(5\\d{6})$|1",
            "721$1",
            0,
            "721"
        ],
        SY: [
            "963",
            "00",
            "[1-39]\\d{8}|[1-5]\\d{7}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[1-5]"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "9"
                    ],
                    "0$1",
                    1
                ]
            ],
            "0"
        ],
        SZ: [
            "268",
            "00",
            "0800\\d{4}|(?:[237]\\d|900)\\d{6}",
            [
                8,
                9
            ],
            [
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[0237]"
                    ]
                ],
                [
                    "(\\d{5})(\\d{4})",
                    "$1 $2",
                    [
                        "9"
                    ]
                ]
            ]
        ],
        TA: [
            "290",
            "00",
            "8\\d{3}",
            [
                4
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            "8"
        ],
        TC: [
            "1",
            "011",
            "(?:[58]\\d\\d|649|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([2-479]\\d{6})$|1",
            "649$1",
            0,
            "649"
        ],
        TD: [
            "235",
            "00|16",
            "(?:22|30|[689]\\d|77)\\d{6}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[236-9]"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00"
        ],
        TG: [
            "228",
            "00",
            "[279]\\d{7}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[279]"
                    ]
                ]
            ]
        ],
        TH: [
            "66",
            "00[1-9]",
            "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",
            [
                8,
                9,
                10,
                13
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "2"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[13-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "1"
                    ]
                ]
            ],
            "0"
        ],
        TJ: [
            "992",
            "810",
            "[0-57-9]\\d{8}",
            [
                9
            ],
            [
                [
                    "(\\d{6})(\\d)(\\d{2})",
                    "$1 $2 $3",
                    [
                        "331",
                        "3317"
                    ]
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "44[02-479]|[34]7"
                    ]
                ],
                [
                    "(\\d{4})(\\d)(\\d{4})",
                    "$1 $2 $3",
                    [
                        "3(?:[1245]|3[12])"
                    ]
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[0-57-9]"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "8~10"
        ],
        TK: [
            "690",
            "00",
            "[2-47]\\d{3,6}",
            [
                4,
                5,
                6,
                7
            ]
        ],
        TL: [
            "670",
            "00",
            "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",
            [
                7,
                8
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[2-489]|70"
                    ]
                ],
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "7"
                    ]
                ]
            ]
        ],
        TM: [
            "993",
            "810",
            "(?:[1-6]\\d|71)\\d{6}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2-$3-$4",
                    [
                        "12"
                    ],
                    "(8 $1)"
                ],
                [
                    "(\\d{3})(\\d)(\\d{2})(\\d{2})",
                    "$1 $2-$3-$4",
                    [
                        "[1-5]"
                    ],
                    "(8 $1)"
                ],
                [
                    "(\\d{2})(\\d{6})",
                    "$1 $2",
                    [
                        "[67]"
                    ],
                    "8 $1"
                ]
            ],
            "8",
            0,
            0,
            0,
            0,
            0,
            0,
            "8~10"
        ],
        TN: [
            "216",
            "00",
            "[2-57-9]\\d{7}",
            [
                8
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[2-57-9]"
                    ]
                ]
            ]
        ],
        TO: [
            "676",
            "00",
            "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",
            [
                5,
                7
            ],
            [
                [
                    "(\\d{2})(\\d{3})",
                    "$1-$2",
                    [
                        "[2-4]|50|6[09]|7[0-24-69]|8[05]"
                    ]
                ],
                [
                    "(\\d{4})(\\d{3})",
                    "$1 $2",
                    [
                        "0"
                    ]
                ],
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[5-9]"
                    ]
                ]
            ]
        ],
        TR: [
            "90",
            "00",
            "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",
            [
                7,
                10,
                12,
                13
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "512|8[01589]|90"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "5(?:[0-59]|61)",
                        "5(?:[0-59]|61[06])",
                        "5(?:[0-59]|61[06]1)"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[24][1-8]|3[1-9]"
                    ],
                    "(0$1)",
                    1
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{6,7})",
                    "$1 $2 $3",
                    [
                        "80"
                    ],
                    "0$1",
                    1
                ]
            ],
            "0"
        ],
        TT: [
            "1",
            "011",
            "(?:[58]\\d\\d|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([2-46-8]\\d{6})$|1",
            "868$1",
            0,
            "868"
        ],
        TV: [
            "688",
            "00",
            "(?:2|7\\d\\d|90)\\d{4}",
            [
                5,
                6,
                7
            ],
            [
                [
                    "(\\d{2})(\\d{3})",
                    "$1 $2",
                    [
                        "2"
                    ]
                ],
                [
                    "(\\d{2})(\\d{4})",
                    "$1 $2",
                    [
                        "90"
                    ]
                ],
                [
                    "(\\d{2})(\\d{5})",
                    "$1 $2",
                    [
                        "7"
                    ]
                ]
            ]
        ],
        TW: [
            "886",
            "0(?:0[25-79]|19)",
            "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",
            [
                7,
                8,
                9,
                10,
                11
            ],
            [
                [
                    "(\\d{2})(\\d)(\\d{4})",
                    "$1 $2 $3",
                    [
                        "202"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[258]0"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{3,4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]",
                        "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[49]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{4,5})",
                    "$1 $2 $3",
                    [
                        "7"
                    ],
                    "0$1"
                ]
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "#"
        ],
        TZ: [
            "255",
            "00[056]",
            "(?:[25-8]\\d|41|90)\\d{7}",
            [
                9
            ],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[89]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[24]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{7})",
                    "$1 $2",
                    [
                        "5"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[67]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        UA: [
            "380",
            "00",
            "[89]\\d{9}|[3-9]\\d{8}",
            [
                9,
                10
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]",
                        "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{5})",
                    "$1 $2",
                    [
                        "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])",
                        "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[3-7]|89|9[1-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[89]"
                    ],
                    "0$1"
                ]
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "0~0"
        ],
        UG: [
            "256",
            "00[057]",
            "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",
            [
                9
            ],
            [
                [
                    "(\\d{4})(\\d{5})",
                    "$1 $2",
                    [
                        "202",
                        "2024"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{6})",
                    "$1 $2",
                    [
                        "[27-9]|4(?:6[45]|[7-9])"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{7})",
                    "$1 $2",
                    [
                        "[34]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        US: [
            "1",
            "011",
            "[2-9]\\d{9}|3\\d{6}",
            [
                10
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1-$2",
                    [
                        "310"
                    ],
                    0,
                    1
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "($1) $2-$3",
                    [
                        "[2-9]"
                    ],
                    0,
                    1,
                    "$1-$2-$3"
                ]
            ],
            "1",
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[0-68]))\\d{4}|(?:2742|305[3-9]|472[247-9]|505[2-57-9]|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[0135-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"
                ],
                [
                    ""
                ],
                [
                    "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
                ],
                [
                    "900[2-9]\\d{6}"
                ],
                [
                    "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"
                ],
                0,
                0,
                0,
                [
                    "305209\\d{4}"
                ]
            ]
        ],
        UY: [
            "598",
            "0(?:0|1[3-9]\\d)",
            "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}",
            [
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13
            ],
            [
                [
                    "(\\d{3})(\\d{3,4})",
                    "$1 $2",
                    [
                        "0"
                    ]
                ],
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[49]0|8"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "9"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[124]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{2,4})",
                    "$1 $2 $3",
                    [
                        "0"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})",
                    "$1 $2 $3 $4",
                    [
                        "0"
                    ]
                ]
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
            " int. "
        ],
        UZ: [
            "998",
            "00",
            "(?:20|33|[5-9]\\d)\\d{7}",
            [
                9
            ],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "[235-9]"
                    ]
                ]
            ]
        ],
        VA: [
            "39",
            "00",
            "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",
            [
                6,
                7,
                8,
                9,
                10,
                11,
                12
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            "06698"
        ],
        VC: [
            "1",
            "011",
            "(?:[58]\\d\\d|784|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([2-7]\\d{6})$|1",
            "784$1",
            0,
            "784"
        ],
        VE: [
            "58",
            "00",
            "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",
            [
                10
            ],
            [
                [
                    "(\\d{3})(\\d{7})",
                    "$1-$2",
                    [
                        "[24-689]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        VG: [
            "1",
            "011",
            "(?:284|[58]\\d\\d|900)\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([2-578]\\d{6})$|1",
            "284$1",
            0,
            "284"
        ],
        VI: [
            "1",
            "011",
            "[58]\\d{9}|(?:34|90)0\\d{7}",
            [
                10
            ],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "340$1",
            0,
            "340"
        ],
        VN: [
            "84",
            "00",
            "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",
            [
                7,
                8,
                9,
                10
            ],
            [
                [
                    "(\\d{2})(\\d{5})",
                    "$1 $2",
                    [
                        "80"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{4})(\\d{4,6})",
                    "$1 $2",
                    [
                        "1"
                    ],
                    0,
                    1
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "6"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[357-9]"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "2[48]"
                    ],
                    "0$1",
                    1
                ],
                [
                    "(\\d{3})(\\d{4})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "2"
                    ],
                    "0$1",
                    1
                ]
            ],
            "0"
        ],
        VU: [
            "678",
            "00",
            "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",
            [
                5,
                7
            ],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[57-9]"
                    ]
                ]
            ]
        ],
        WF: [
            "681",
            "00",
            "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}",
            [
                6,
                9
            ],
            [
                [
                    "(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3",
                    [
                        "[47-9]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "8"
                    ]
                ]
            ]
        ],
        WS: [
            "685",
            "0",
            "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",
            [
                5,
                6,
                7,
                10
            ],
            [
                [
                    "(\\d{5})",
                    "$1",
                    [
                        "[2-5]|6[1-9]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3,7})",
                    "$1 $2",
                    [
                        "[68]"
                    ]
                ],
                [
                    "(\\d{2})(\\d{5})",
                    "$1 $2",
                    [
                        "7"
                    ]
                ]
            ]
        ],
        XK: [
            "383",
            "00",
            "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}",
            [
                8,
                9,
                10,
                11,
                12
            ],
            [
                [
                    "(\\d{3})(\\d{5})",
                    "$1 $2",
                    [
                        "[89]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[2-4]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "2|39"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{7,10})",
                    "$1 $2",
                    [
                        "3"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        YE: [
            "967",
            "00",
            "(?:1|7\\d)\\d{7}|[1-7]\\d{6}",
            [
                7,
                8,
                9
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "[1-6]|7(?:[24-6]|8[0-7])"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "7"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        YT: [
            "262",
            "00",
            "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}",
            [
                9
            ],
            0,
            "0",
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"
                ],
                [
                    "(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"
                ],
                [
                    "80\\d{7}"
                ],
                0,
                0,
                0,
                0,
                0,
                [
                    "9(?:(?:39|47)8[01]|769\\d)\\d{4}"
                ]
            ]
        ],
        ZA: [
            "27",
            "00",
            "[1-79]\\d{8}|8\\d{4,9}",
            [
                5,
                6,
                7,
                8,
                9,
                10
            ],
            [
                [
                    "(\\d{2})(\\d{3,4})",
                    "$1 $2",
                    [
                        "8[1-4]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2,3})",
                    "$1 $2 $3",
                    [
                        "8[1-4]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "860"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[1-9]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "8"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        ZM: [
            "260",
            "00",
            "800\\d{6}|(?:21|[579]\\d|63)\\d{7}",
            [
                9
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[28]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{7})",
                    "$1 $2",
                    [
                        "[579]"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ],
        ZW: [
            "263",
            "00",
            "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",
            [
                5,
                6,
                7,
                8,
                9,
                10
            ],
            [
                [
                    "(\\d{3})(\\d{3,5})",
                    "$1 $2",
                    [
                        "2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d)(\\d{3})(\\d{2,4})",
                    "$1 $2 $3",
                    [
                        "[49]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "80"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{7})",
                    "$1 $2",
                    [
                        "24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2",
                        "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"
                    ],
                    "(0$1)"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "7"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)",
                        "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{6})",
                    "$1 $2",
                    [
                        "8"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3,5})",
                    "$1 $2",
                    [
                        "1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "29[013-9]|39|54"
                    ],
                    "0$1"
                ],
                [
                    "(\\d{4})(\\d{3,5})",
                    "$1 $2",
                    [
                        "(?:25|54)8",
                        "258|5483"
                    ],
                    "0$1"
                ]
            ],
            "0"
        ]
    },
    nonGeographic: {
        800: [
            "800",
            0,
            "(?:00|[1-9]\\d)\\d{6}",
            [
                8
            ],
            [
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "\\d"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
                0,
                0,
                [
                    "(?:00|[1-9]\\d)\\d{6}"
                ]
            ]
        ],
        808: [
            "808",
            0,
            "[1-9]\\d{7}",
            [
                8
            ],
            [
                [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    [
                        "[1-9]"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                [
                    "[1-9]\\d{7}"
                ]
            ]
        ],
        870: [
            "870",
            0,
            "7\\d{11}|[235-7]\\d{8}",
            [
                9,
                12
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "[235-7]"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
                0,
                [
                    "(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"
                ],
                0,
                0,
                0,
                0,
                0,
                0,
                [
                    "2\\d{8}",
                    [
                        9
                    ]
                ]
            ]
        ],
        878: [
            "878",
            0,
            "10\\d{10}",
            [
                12
            ],
            [
                [
                    "(\\d{2})(\\d{5})(\\d{5})",
                    "$1 $2 $3",
                    [
                        "1"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                [
                    "10\\d{10}"
                ]
            ]
        ],
        881: [
            "881",
            0,
            "6\\d{9}|[0-36-9]\\d{8}",
            [
                9,
                10
            ],
            [
                [
                    "(\\d)(\\d{3})(\\d{5})",
                    "$1 $2 $3",
                    [
                        "[0-37-9]"
                    ]
                ],
                [
                    "(\\d)(\\d{3})(\\d{5,6})",
                    "$1 $2 $3",
                    [
                        "6"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
                0,
                [
                    "6\\d{9}|[0-36-9]\\d{8}"
                ]
            ]
        ],
        882: [
            "882",
            0,
            "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",
            [
                7,
                8,
                9,
                10,
                11,
                12
            ],
            [
                [
                    "(\\d{2})(\\d{5})",
                    "$1 $2",
                    [
                        "16|342"
                    ]
                ],
                [
                    "(\\d{2})(\\d{6})",
                    "$1 $2",
                    [
                        "49"
                    ]
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1[36]|9"
                    ]
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "3[23]"
                    ]
                ],
                [
                    "(\\d{2})(\\d{3,4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "16"
                    ]
                ],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "10|23|3(?:[15]|4[57])|4|51"
                    ]
                ],
                [
                    "(\\d{3})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "34"
                    ]
                ],
                [
                    "(\\d{2})(\\d{4,5})(\\d{5})",
                    "$1 $2 $3",
                    [
                        "[1-35]"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
                0,
                [
                    "342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",
                    [
                        7,
                        8,
                        9,
                        10,
                        12
                    ]
                ],
                0,
                0,
                0,
                [
                    "348[57]\\d{7}",
                    [
                        11
                    ]
                ],
                0,
                0,
                [
                    "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"
                ]
            ]
        ],
        883: [
            "883",
            0,
            "(?:[1-4]\\d|51)\\d{6,10}",
            [
                8,
                9,
                10,
                11,
                12
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{2,8})",
                    "$1 $2 $3",
                    [
                        "[14]|2[24-689]|3[02-689]|51[24-9]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "510"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "21"
                    ]
                ],
                [
                    "(\\d{4})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "51[13]"
                    ]
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    [
                        "[235]"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                [
                    "(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"
                ]
            ]
        ],
        888: [
            "888",
            0,
            "\\d{11}",
            [
                11
            ],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{5})",
                    "$1 $2 $3"
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
                0,
                0,
                0,
                0,
                0,
                0,
                [
                    "\\d{11}"
                ]
            ]
        ],
        979: [
            "979",
            0,
            "[1359]\\d{8}",
            [
                9
            ],
            [
                [
                    "(\\d)(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[1359]"
                    ]
                ]
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
                0,
                0,
                0,
                [
                    "[1359]\\d{8}"
                ]
            ]
        ]
    }
};
function _t(e, r) {
    var t = Array.prototype.slice.call(r);
    return t.push(Jt), e.apply(this, t);
}
function q(e, r) {
    e = e.split("-"), r = r.split("-");
    for(var t = e[0].split("."), n = r[0].split("."), d = 0; d < 3; d++){
        var i = Number(t[d]), a = Number(n[d]);
        if (i > a) return 1;
        if (a > i) return -1;
        if (!isNaN(i) && isNaN(a)) return 1;
        if (isNaN(i) && !isNaN(a)) return -1;
    }
    return e[1] && r[1] ? e[1] > r[1] ? 1 : e[1] < r[1] ? -1 : 0 : !e[1] && r[1] ? 1 : e[1] && !r[1] ? -1 : 0;
}
var Qt = {}.constructor;
function P(e) {
    return e != null && e.constructor === Qt;
}
function G(e) {
    "@babel/helpers - typeof";
    return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
    } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, G(e);
}
function T(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function qt(e, r) {
    for(var t = 0; t < r.length; t++){
        var n = r[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
}
function O(e, r, t) {
    return r && qt(e.prototype, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
var zt = "1.2.0", te = "1.7.35", z = " ext. ", ee = /^\d+$/, s = /* @__PURE__ */ function() {
    function e(r) {
        T(this, e), Tt(r), this.metadata = r, Ot.call(this, r);
    }
    return O(e, [
        {
            key: "getCountries",
            value: function() {
                return Object.keys(this.metadata.countries).filter(function(t) {
                    return t !== "001";
                });
            }
        },
        {
            key: "getCountryMetadata",
            value: function(t) {
                return this.metadata.countries[t];
            }
        },
        {
            key: "nonGeographic",
            value: function() {
                if (!(this.v1 || this.v2 || this.v3)) return this.metadata.nonGeographic || this.metadata.nonGeographical;
            }
        },
        {
            key: "hasCountry",
            value: function(t) {
                return this.getCountryMetadata(t) !== void 0;
            }
        },
        {
            key: "hasCallingCode",
            value: function(t) {
                if (this.getCountryCodesForCallingCode(t)) return !0;
                if (this.nonGeographic()) {
                    if (this.nonGeographic()[t]) return !0;
                } else {
                    var n = this.countryCallingCodes()[t];
                    if (n && n.length === 1 && n[0] === "001") return !0;
                }
            }
        },
        {
            key: "isNonGeographicCallingCode",
            value: function(t) {
                return this.nonGeographic() ? !!this.nonGeographic()[t] : !this.getCountryCodesForCallingCode(t);
            }
        },
        {
            key: "country",
            value: function(t) {
                return this.selectNumberingPlan(t);
            }
        },
        {
            key: "selectNumberingPlan",
            value: function(t, n) {
                if (t && ee.test(t) && (n = t, t = null), t && t !== "001") {
                    if (!this.hasCountry(t)) throw new Error("Unknown country: ".concat(t));
                    this.numberingPlan = new tt(this.getCountryMetadata(t), this);
                } else if (n) {
                    if (!this.hasCallingCode(n)) throw new Error("Unknown calling code: ".concat(n));
                    this.numberingPlan = new tt(this.getNumberingPlanMetadata(n), this);
                } else this.numberingPlan = void 0;
                return this;
            }
        },
        {
            key: "getCountryCodesForCallingCode",
            value: function(t) {
                var n = this.countryCallingCodes()[t];
                if (n) return n.length === 1 && n[0].length === 3 ? void 0 : n;
            }
        },
        {
            key: "getCountryCodeForCallingCode",
            value: function(t) {
                var n = this.getCountryCodesForCallingCode(t);
                if (n) return n[0];
            }
        },
        {
            key: "getNumberingPlanMetadata",
            value: function(t) {
                var n = this.getCountryCodeForCallingCode(t);
                if (n) return this.getCountryMetadata(n);
                if (this.nonGeographic()) {
                    var d = this.nonGeographic()[t];
                    if (d) return d;
                } else {
                    var i = this.countryCallingCodes()[t];
                    if (i && i.length === 1 && i[0] === "001") return this.metadata.countries["001"];
                }
            }
        },
        {
            key: "countryCallingCode",
            value: function() {
                return this.numberingPlan.callingCode();
            }
        },
        {
            key: "IDDPrefix",
            value: function() {
                return this.numberingPlan.IDDPrefix();
            }
        },
        {
            key: "defaultIDDPrefix",
            value: function() {
                return this.numberingPlan.defaultIDDPrefix();
            }
        },
        {
            key: "nationalNumberPattern",
            value: function() {
                return this.numberingPlan.nationalNumberPattern();
            }
        },
        {
            key: "possibleLengths",
            value: function() {
                return this.numberingPlan.possibleLengths();
            }
        },
        {
            key: "formats",
            value: function() {
                return this.numberingPlan.formats();
            }
        },
        {
            key: "nationalPrefixForParsing",
            value: function() {
                return this.numberingPlan.nationalPrefixForParsing();
            }
        },
        {
            key: "nationalPrefixTransformRule",
            value: function() {
                return this.numberingPlan.nationalPrefixTransformRule();
            }
        },
        {
            key: "leadingDigits",
            value: function() {
                return this.numberingPlan.leadingDigits();
            }
        },
        {
            key: "hasTypes",
            value: function() {
                return this.numberingPlan.hasTypes();
            }
        },
        {
            key: "type",
            value: function(t) {
                return this.numberingPlan.type(t);
            }
        },
        {
            key: "ext",
            value: function() {
                return this.numberingPlan.ext();
            }
        },
        {
            key: "countryCallingCodes",
            value: function() {
                return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
            }
        },
        {
            key: "chooseCountryByCountryCallingCode",
            value: function(t) {
                return this.selectNumberingPlan(t);
            }
        },
        {
            key: "hasSelectedNumberingPlan",
            value: function() {
                return this.numberingPlan !== void 0;
            }
        }
    ]), e;
}(), tt = /* @__PURE__ */ function() {
    function e(r, t) {
        T(this, e), this.globalMetadataObject = t, this.metadata = r, Ot.call(this, t.metadata);
    }
    return O(e, [
        {
            key: "callingCode",
            value: function() {
                return this.metadata[0];
            }
        },
        {
            key: "getDefaultCountryMetadataForRegion",
            value: function() {
                return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
            }
        },
        {
            key: "IDDPrefix",
            value: function() {
                if (!(this.v1 || this.v2)) return this.metadata[1];
            }
        },
        {
            key: "defaultIDDPrefix",
            value: function() {
                if (!(this.v1 || this.v2)) return this.metadata[12];
            }
        },
        {
            key: "nationalNumberPattern",
            value: function() {
                return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
            }
        },
        {
            key: "possibleLengths",
            value: function() {
                if (!this.v1) return this.metadata[this.v2 ? 2 : 3];
            }
        },
        {
            key: "_getFormats",
            value: function(t) {
                return t[this.v1 ? 2 : this.v2 ? 3 : 4];
            }
        },
        {
            key: "formats",
            value: function() {
                var t = this, n = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
                return n.map(function(d) {
                    return new re(d, t);
                });
            }
        },
        {
            key: "nationalPrefix",
            value: function() {
                return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
            }
        },
        {
            key: "_getNationalPrefixFormattingRule",
            value: function(t) {
                return t[this.v1 ? 4 : this.v2 ? 5 : 6];
            }
        },
        {
            key: "nationalPrefixFormattingRule",
            value: function() {
                return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
            }
        },
        {
            key: "_nationalPrefixForParsing",
            value: function() {
                return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
            }
        },
        {
            key: "nationalPrefixForParsing",
            value: function() {
                return this._nationalPrefixForParsing() || this.nationalPrefix();
            }
        },
        {
            key: "nationalPrefixTransformRule",
            value: function() {
                return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
            }
        },
        {
            key: "_getNationalPrefixIsOptionalWhenFormatting",
            value: function() {
                return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
            }
        },
        {
            key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
            value: function() {
                return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
            }
        },
        {
            key: "leadingDigits",
            value: function() {
                return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
            }
        },
        {
            key: "types",
            value: function() {
                return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
            }
        },
        {
            key: "hasTypes",
            value: function() {
                return this.types() && this.types().length === 0 ? !1 : !!this.types();
            }
        },
        {
            key: "type",
            value: function(t) {
                if (this.hasTypes() && et(this.types(), t)) return new de(et(this.types(), t), this);
            }
        },
        {
            key: "ext",
            value: function() {
                return this.v1 || this.v2 ? z : this.metadata[13] || z;
            }
        }
    ]), e;
}(), re = /* @__PURE__ */ function() {
    function e(r, t) {
        T(this, e), this._format = r, this.metadata = t;
    }
    return O(e, [
        {
            key: "pattern",
            value: function() {
                return this._format[0];
            }
        },
        {
            key: "format",
            value: function() {
                return this._format[1];
            }
        },
        {
            key: "leadingDigitsPatterns",
            value: function() {
                return this._format[2] || [];
            }
        },
        {
            key: "nationalPrefixFormattingRule",
            value: function() {
                return this._format[3] || this.metadata.nationalPrefixFormattingRule();
            }
        },
        {
            key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
            value: function() {
                return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
            }
        },
        {
            key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
            value: function() {
                return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
            }
        },
        {
            key: "usesNationalPrefix",
            value: function() {
                return !!(this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
                !ne.test(this.nationalPrefixFormattingRule()));
            }
        },
        {
            key: "internationalFormat",
            value: function() {
                return this._format[5] || this.format();
            }
        }
    ]), e;
}(), ne = /^\(?\$1\)?$/, de = /* @__PURE__ */ function() {
    function e(r, t) {
        T(this, e), this.type = r, this.metadata = t;
    }
    return O(e, [
        {
            key: "pattern",
            value: function() {
                return this.metadata.v1 ? this.type : this.type[0];
            }
        },
        {
            key: "possibleLengths",
            value: function() {
                if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths();
            }
        }
    ]), e;
}();
function et(e, r) {
    switch(r){
        case "FIXED_LINE":
            return e[0];
        case "MOBILE":
            return e[1];
        case "TOLL_FREE":
            return e[2];
        case "PREMIUM_RATE":
            return e[3];
        case "PERSONAL_NUMBER":
            return e[4];
        case "VOICEMAIL":
            return e[5];
        case "UAN":
            return e[6];
        case "PAGER":
            return e[7];
        case "VOIP":
            return e[8];
        case "SHARED_COST":
            return e[9];
    }
}
function Tt(e) {
    if (!e) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
    if (!P(e) || !P(e.countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(P(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + ie(e) + ": " + e, "."));
}
var ie = function(r) {
    return G(r);
};
function Y(e, r) {
    if (r = new s(r), r.hasCountry(e)) return r.country(e).countryCallingCode();
    throw new Error("Unknown country: ".concat(e));
}
function Ot(e) {
    var r = e.version;
    typeof r == "number" ? (this.v1 = r === 1, this.v2 = r === 2, this.v3 = r === 3, this.v4 = r === 4) : r ? q(r, zt) === -1 ? this.v2 = !0 : q(r, te) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
function w(e, r) {
    return ae(e, void 0, r);
}
function ae(e, r, t) {
    var n = t.type(r), d = n && n.possibleLengths() || t.possibleLengths();
    if (!d) return "IS_POSSIBLE";
    var i = e.length, a = d[0];
    return a === i ? "IS_POSSIBLE" : a > i ? "TOO_SHORT" : d[d.length - 1] < i ? "TOO_LONG" : d.indexOf(i, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function $e(e, r, t) {
    if (r === void 0 && (r = {}), t = new s(t), r.v2) {
        if (!e.countryCallingCode) throw new Error("Invalid phone number object passed");
        t.selectNumberingPlan(e.countryCallingCode);
    } else {
        if (!e.phone) return !1;
        if (e.country) {
            if (!t.hasCountry(e.country)) throw new Error("Unknown country: ".concat(e.country));
            t.country(e.country);
        } else {
            if (!e.countryCallingCode) throw new Error("Invalid phone number object passed");
            t.selectNumberingPlan(e.countryCallingCode);
        }
    }
    if (t.possibleLengths()) return wt(e.phone || e.nationalNumber, t);
    if (e.countryCallingCode && t.isNonGeographicCallingCode(e.countryCallingCode)) return !0;
    throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function wt(e, r) {
    switch(w(e, r)){
        case "IS_POSSIBLE":
            return !0;
        // This library ignores "local-only" phone numbers (for simplicity).
        // See the readme for more info on what are "local-only" phone numbers.
        // case 'IS_POSSIBLE_LOCAL_ONLY':
        // 	return !isInternational
        default:
            return !1;
    }
}
function b(e, r) {
    return e = e || "", new RegExp("^(?:" + r + ")$").test(e);
}
function oe(e, r) {
    var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (t) return (t = t.call(e)).next.bind(t);
    if (Array.isArray(e) || (t = ue(e)) || r) {
        t && (e = t);
        var n = 0;
        return function() {
            return n >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[n++]
            };
        };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ue(e, r) {
    if (e) {
        if (typeof e == "string") return rt(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return rt(e, r);
    }
}
function rt(e, r) {
    (r == null || r > e.length) && (r = e.length);
    for(var t = 0, n = new Array(r); t < r; t++)n[t] = e[t];
    return n;
}
var le = [
    "MOBILE",
    "PREMIUM_RATE",
    "TOLL_FREE",
    "SHARED_COST",
    "VOIP",
    "PERSONAL_NUMBER",
    "PAGER",
    "UAN",
    "VOICEMAIL"
];
function Z(e, r, t) {
    if (r = r || {}, !(!e.country && !e.countryCallingCode)) {
        t = new s(t), t.selectNumberingPlan(e.country, e.countryCallingCode);
        var n = r.v2 ? e.nationalNumber : e.phone;
        if (b(n, t.nationalNumberPattern())) {
            if (D(n, "FIXED_LINE", t)) return t.type("MOBILE") && t.type("MOBILE").pattern() === "" || !t.type("MOBILE") || D(n, "MOBILE", t) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
            for(var d = oe(le), i; !(i = d()).done;){
                var a = i.value;
                if (D(n, a, t)) return a;
            }
        }
    }
}
function D(e, r, t) {
    return r = t.type(r), !r || !r.pattern() || r.possibleLengths() && r.possibleLengths().indexOf(e.length) < 0 ? !1 : b(e, r.pattern());
}
function fe(e, r, t) {
    if (r = r || {}, t = new s(t), t.selectNumberingPlan(e.country, e.countryCallingCode), t.hasTypes()) return Z(e, r, t.metadata) !== void 0;
    var n = r.v2 ? e.nationalNumber : e.phone;
    return b(n, t.nationalNumberPattern());
}
function se(e, r, t) {
    var n = new s(t), d = n.getCountryCodesForCallingCode(e);
    return d ? d.filter(function(i) {
        return ce(r, i, t);
    }) : [];
}
function ce(e, r, t) {
    var n = new s(t);
    return n.selectNumberingPlan(r), n.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
var J = 2, he = 17, ge = 3, h = "0-9０-９٠-٩۰-۹", me = "-‐-―−ー－", ye = "／/", ve = "．.", Ne = "  ­​⁠　", be = "()（）［］\\[\\]", Ce = "~⁓∼～", y = "".concat(me).concat(ye).concat(ve).concat(Ne).concat(be).concat(Ce), R = "+＋", pe = new RegExp("([" + h + "])");
function Rt(e, r, t, n) {
    if (r) {
        var d = new s(n);
        d.selectNumberingPlan(r, t);
        var i = new RegExp(d.IDDPrefix());
        if (e.search(i) === 0) {
            e = e.slice(e.match(i)[0].length);
            var a = e.match(pe);
            if (!(a && a[1] != null && a[1].length > 0 && a[1] === "0")) return e;
        }
    }
}
function B(e, r) {
    if (e && r.numberingPlan.nationalPrefixForParsing()) {
        var t = new RegExp("^(?:" + r.numberingPlan.nationalPrefixForParsing() + ")"), n = t.exec(e);
        if (n) {
            var d, i, a = n.length - 1, $ = a > 0 && n[a];
            if (r.nationalPrefixTransformRule() && $) d = e.replace(t, r.nationalPrefixTransformRule()), a > 1 && (i = n[1]);
            else {
                var o = n[0];
                d = e.slice(o.length), $ && (i = n[1]);
            }
            var u;
            if ($) {
                var l = e.indexOf(n[1]), c = e.slice(0, l);
                c === r.numberingPlan.nationalPrefix() && (u = r.numberingPlan.nationalPrefix());
            } else u = n[0];
            return {
                nationalNumber: d,
                nationalPrefix: u,
                carrierCode: i
            };
        }
    }
    return {
        nationalNumber: e
    };
}
function j(e, r) {
    var t = B(e, r), n = t.carrierCode, d = t.nationalNumber;
    if (d !== e) {
        if (!Pe(e, d, r)) return {
            nationalNumber: e
        };
        if (r.possibleLengths() && !xe(d, r)) return {
            nationalNumber: e
        };
    }
    return {
        nationalNumber: d,
        carrierCode: n
    };
}
function Pe(e, r, t) {
    return !(b(e, t.nationalNumberPattern()) && !b(r, t.nationalNumberPattern()));
}
function xe(e, r) {
    switch(w(e, r)){
        case "TOO_SHORT":
        case "INVALID_LENGTH":
            return !1;
        default:
            return !0;
    }
}
function Dt(e, r, t, n) {
    var d = r ? Y(r, n) : t;
    if (e.indexOf(d) === 0) {
        n = new s(n), n.selectNumberingPlan(r, t);
        var i = e.slice(d.length), a = j(i, n), $ = a.nationalNumber, o = j(e, n), u = o.nationalNumber;
        if (!b(u, n.nationalNumberPattern()) && b($, n.nationalNumberPattern()) || w(u, n) === "TOO_LONG") return {
            countryCallingCode: d,
            number: i
        };
    }
    return {
        number: e
    };
}
function Q(e, r, t, n) {
    if (!e) return {};
    var d;
    if (e[0] !== "+") {
        var i = Rt(e, r, t, n);
        if (i && i !== e) d = !0, e = "+" + i;
        else {
            if (r || t) {
                var a = Dt(e, r, t, n), $ = a.countryCallingCode, o = a.number;
                if ($) return {
                    countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
                    countryCallingCode: $,
                    number: o
                };
            }
            return {
                // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
                // countryCallingCodeSource: 'UNSPECIFIED',
                number: e
            };
        }
    }
    if (e[1] === "0") return {};
    n = new s(n);
    for(var u = 2; u - 1 <= ge && u <= e.length;){
        var l = e.slice(1, u);
        if (n.hasCallingCode(l)) return n.selectNumberingPlan(l), {
            countryCallingCodeSource: d ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
            countryCallingCode: l,
            number: e.slice(u)
        };
        u++;
    }
    return {};
}
function Mt(e) {
    return e.replace(new RegExp("[".concat(y, "]+"), "g"), " ").trim();
}
var Lt = /(\$\d)/;
function kt(e, r, t) {
    var n = t.useInternationalFormat, d = t.withNationalPrefix;
    t.carrierCode, t.metadata;
    var i = e.replace(new RegExp(r.pattern()), n ? r.internationalFormat() : // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    d && r.nationalPrefixFormattingRule() ? r.format().replace(Lt, r.nationalPrefixFormattingRule()) : r.format());
    return n ? Mt(i) : i;
}
var Ee = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function Fe(e, r, t) {
    var n = new s(t);
    if (n.selectNumberingPlan(e, r), n.defaultIDDPrefix()) return n.defaultIDDPrefix();
    if (Ee.test(n.IDDPrefix())) return n.IDDPrefix();
}
var Ae = ";ext=", x = function(r) {
    return "([".concat(h, "]{1,").concat(r, "})");
};
function Gt(e) {
    var r = "20", t = "15", n = "9", d = "6", i = "[  \\t,]*", a = "[:\\.．]?[  \\t,-]*", $ = "#?", o = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", u = "(?:[xｘ#＃~～]|int|ｉｎｔ)", l = "[- ]+", c = "[  \\t]*", f = "(?:,{2}|;)", g = Ae + x(r), v = i + o + a + x(r) + $, p = i + u + a + x(n) + $, N = l + x(d) + "#", Yt = c + f + a + x(t) + $, Zt = c + "(?:,)+" + a + x(n) + $;
    return g + "|" + v + "|" + p + "|" + N + "|" + Yt + "|" + Zt;
}
var Ie = "[" + h + "]{" + J + "}", Se = "[" + R + "]{0,1}(?:[" + y + "]*[" + h + "]){3,}[" + y + h + "]*", _e = new RegExp("^[" + R + "]{0,1}(?:[" + y + "]*[" + h + "]){1,2}$", "i"), Te = Se + // Phone number extensions
"(?:" + Gt() + ")?", Oe = new RegExp(// Either a short two-digit-only phone number
"^" + Ie + "$|^" + Te + "$", "i");
function we(e) {
    return e.length >= J && Oe.test(e);
}
function Re(e) {
    return _e.test(e);
}
function De(e) {
    var r = e.number, t = e.ext;
    if (!r) return "";
    if (r[0] !== "+") throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
    return "tel:".concat(r).concat(t ? ";ext=" + t : "");
}
function Me(e, r) {
    var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (t) return (t = t.call(e)).next.bind(t);
    if (Array.isArray(e) || (t = Le(e)) || r) {
        t && (e = t);
        var n = 0;
        return function() {
            return n >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[n++]
            };
        };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Le(e, r) {
    if (e) {
        if (typeof e == "string") return nt(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return nt(e, r);
    }
}
function nt(e, r) {
    (r == null || r > e.length) && (r = e.length);
    for(var t = 0, n = new Array(r); t < r; t++)n[t] = e[t];
    return n;
}
function dt(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(d) {
            return Object.getOwnPropertyDescriptor(e, d).enumerable;
        })), t.push.apply(t, n);
    }
    return t;
}
function it(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = arguments[r] != null ? arguments[r] : {};
        r % 2 ? dt(Object(t), !0).forEach(function(n) {
            ke(e, n, t[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : dt(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
}
function ke(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
var at = {
    formatExtension: function(r, t, n) {
        return "".concat(r).concat(n.ext()).concat(t);
    }
};
function Ge(e, r, t, n) {
    if (t ? t = it(it({}, at), t) : t = at, n = new s(n), e.country && e.country !== "001") {
        if (!n.hasCountry(e.country)) throw new Error("Unknown country: ".concat(e.country));
        n.country(e.country);
    } else if (e.countryCallingCode) n.selectNumberingPlan(e.countryCallingCode);
    else return e.phone || "";
    var d = n.countryCallingCode(), i = t.v2 ? e.nationalNumber : e.phone, a;
    switch(r){
        case "NATIONAL":
            return i ? (a = S(i, e.carrierCode, "NATIONAL", n, t), M(a, e.ext, n, t.formatExtension)) : "";
        case "INTERNATIONAL":
            return i ? (a = S(i, null, "INTERNATIONAL", n, t), a = "+".concat(d, " ").concat(a), M(a, e.ext, n, t.formatExtension)) : "+".concat(d);
        case "E.164":
            return "+".concat(d).concat(i);
        case "RFC3966":
            return De({
                number: "+".concat(d).concat(i),
                ext: e.ext
            });
        // For reference, here's Google's IDD formatter:
        // https://github.com/google/libphonenumber/blob/32719cf74e68796788d1ca45abc85dcdc63ba5b9/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L1546
        // Not saying that this IDD formatter replicates it 1:1, but it seems to work.
        // Who would even need to format phone numbers in IDD format anyway?
        case "IDD":
            if (!t.fromCountry) return;
            var $ = je(i, e.carrierCode, d, t.fromCountry, n);
            return M($, e.ext, n, t.formatExtension);
        default:
            throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(r, '"'));
    }
}
function S(e, r, t, n, d) {
    var i = Be(n.formats(), e);
    return i ? kt(e, i, {
        useInternationalFormat: t === "INTERNATIONAL",
        withNationalPrefix: !(i.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && d && d.nationalPrefix === !1),
        carrierCode: r,
        metadata: n
    }) : e;
}
function Be(e, r) {
    for(var t = Me(e), n; !(n = t()).done;){
        var d = n.value;
        if (d.leadingDigitsPatterns().length > 0) {
            var i = d.leadingDigitsPatterns()[d.leadingDigitsPatterns().length - 1];
            if (r.search(i) !== 0) continue;
        }
        if (b(r, d.pattern())) return d;
    }
}
function M(e, r, t, n) {
    return r ? n(e, r, t) : e;
}
function je(e, r, t, n, d) {
    var i = Y(n, d.metadata);
    if (i === t) {
        var a = S(e, r, "NATIONAL", d);
        return t === "1" ? t + " " + a : a;
    }
    var $ = Fe(n, void 0, d.metadata);
    if ($) return "".concat($, " ").concat(t, " ").concat(S(e, null, "INTERNATIONAL", d));
}
function $t(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(d) {
            return Object.getOwnPropertyDescriptor(e, d).enumerable;
        })), t.push.apply(t, n);
    }
    return t;
}
function ot(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = arguments[r] != null ? arguments[r] : {};
        r % 2 ? $t(Object(t), !0).forEach(function(n) {
            Ue(e, n, t[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $t(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
}
function Ue(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function He(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function We(e, r) {
    for(var t = 0; t < r.length; t++){
        var n = r[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
}
function Ve(e, r, t) {
    return r && We(e.prototype, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
var Bt = /* @__PURE__ */ function() {
    function e(r, t, n) {
        if (He(this, e), !r) throw new TypeError("First argument is required");
        if (typeof r != "string") throw new TypeError("First argument must be a string");
        if (r[0] === "+" && !t) throw new TypeError("`metadata` argument not passed");
        if (P(t) && P(t.countries)) {
            n = t;
            var d = r;
            if (!Ye.test(d)) throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
            var i = Q(d, void 0, void 0, n), a = i.countryCallingCode, $ = i.number;
            if (t = $, r = a, !t) throw new Error("Invalid `number` argument passed: too short");
        }
        if (!t) throw new TypeError("`nationalNumber` argument is required");
        if (typeof t != "string") throw new TypeError("`nationalNumber` argument must be a string");
        Tt(n);
        var o = Xe(r, n), u = o.country, l = o.countryCallingCode;
        this.country = u, this.countryCallingCode = l, this.nationalNumber = t, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
            return n;
        };
    }
    return Ve(e, [
        {
            key: "setExt",
            value: function(t) {
                this.ext = t;
            }
        },
        {
            key: "getPossibleCountries",
            value: function() {
                return this.country ? [
                    this.country
                ] : se(this.countryCallingCode, this.nationalNumber, this.getMetadata());
            }
        },
        {
            key: "isPossible",
            value: function() {
                return $e(this, {
                    v2: !0
                }, this.getMetadata());
            }
        },
        {
            key: "isValid",
            value: function() {
                return fe(this, {
                    v2: !0
                }, this.getMetadata());
            }
        },
        {
            key: "isNonGeographic",
            value: function() {
                var t = new s(this.getMetadata());
                return t.isNonGeographicCallingCode(this.countryCallingCode);
            }
        },
        {
            key: "isEqual",
            value: function(t) {
                return this.number === t.number && this.ext === t.ext;
            }
        },
        {
            key: "getType",
            value: function() {
                return Z(this, {
                    v2: !0
                }, this.getMetadata());
            }
        },
        {
            key: "format",
            value: function(t, n) {
                return Ge(this, t, n ? ot(ot({}, n), {}, {
                    v2: !0
                }) : {
                    v2: !0
                }, this.getMetadata());
            }
        },
        {
            key: "formatNational",
            value: function(t) {
                return this.format("NATIONAL", t);
            }
        },
        {
            key: "formatInternational",
            value: function(t) {
                return this.format("INTERNATIONAL", t);
            }
        },
        {
            key: "getURI",
            value: function(t) {
                return this.format("RFC3966", t);
            }
        }
    ]), e;
}(), Ke = function(r) {
    return /^[A-Z]{2}$/.test(r);
};
function Xe(e, r) {
    var t, n, d = new s(r);
    return Ke(e) ? (t = e, d.selectNumberingPlan(t), n = d.countryCallingCode()) : n = e, {
        country: t,
        countryCallingCode: n
    };
}
var Ye = /^\+\d+$/;
function U(e) {
    "@babel/helpers - typeof";
    return U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
    } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, U(e);
}
function Ze(e, r, t) {
    return Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function Je(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function Qe(e, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(r && r.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), r && E(e, r);
}
function qe(e) {
    var r = Ut();
    return function() {
        var n = F(e), d;
        if (r) {
            var i = F(this).constructor;
            d = Reflect.construct(n, arguments, i);
        } else d = n.apply(this, arguments);
        return ze(this, d);
    };
}
function ze(e, r) {
    if (r && (U(r) === "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return jt(e);
}
function jt(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function H(e) {
    var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return H = function(n) {
        if (n === null || !tr(n)) return n;
        if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof r < "u") {
            if (r.has(n)) return r.get(n);
            r.set(n, d);
        }
        function d() {
            return A(n, arguments, F(this).constructor);
        }
        return d.prototype = Object.create(n.prototype, {
            constructor: {
                value: d,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), E(d, n);
    }, H(e);
}
function A(e, r, t) {
    return Ut() ? A = Reflect.construct : A = function(d, i, a) {
        var $ = [
            null
        ];
        $.push.apply($, i);
        var o = Function.bind.apply(d, $), u = new o();
        return a && E(u, a.prototype), u;
    }, A.apply(null, arguments);
}
function Ut() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function tr(e) {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function E(e, r) {
    return E = Object.setPrototypeOf || function(n, d) {
        return n.__proto__ = d, n;
    }, E(e, r);
}
function F(e) {
    return F = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, F(e);
}
var C = /* @__PURE__ */ function(e) {
    Qe(t, e);
    var r = qe(t);
    function t(n) {
        var d;
        return Je(this, t), d = r.call(this, n), Object.setPrototypeOf(jt(d), t.prototype), d.name = d.constructor.name, d;
    }
    return Ze(t);
}(/* @__PURE__ */ H(Error)), ut = new RegExp("(?:" + Gt() + ")$", "i");
function er(e) {
    var r = e.search(ut);
    if (r < 0) return {};
    for(var t = e.slice(0, r), n = e.match(ut), d = 1; d < n.length;){
        if (n[d]) return {
            number: t,
            ext: n[d]
        };
        d++;
    }
}
function rr(e, r) {
    var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (t) return (t = t.call(e)).next.bind(t);
    if (Array.isArray(e) || (t = nr(e)) || r) {
        t && (e = t);
        var n = 0;
        return function() {
            return n >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[n++]
            };
        };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nr(e, r) {
    if (e) {
        if (typeof e == "string") return lt(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return lt(e, r);
    }
}
function lt(e, r) {
    (r == null || r > e.length) && (r = e.length);
    for(var t = 0, n = new Array(r); t < r; t++)n[t] = e[t];
    return n;
}
var dr = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "０": "0",
    // Fullwidth digit 0
    "１": "1",
    // Fullwidth digit 1
    "２": "2",
    // Fullwidth digit 2
    "３": "3",
    // Fullwidth digit 3
    "４": "4",
    // Fullwidth digit 4
    "５": "5",
    // Fullwidth digit 5
    "６": "6",
    // Fullwidth digit 6
    "７": "7",
    // Fullwidth digit 7
    "８": "8",
    // Fullwidth digit 8
    "９": "9",
    // Fullwidth digit 9
    "٠": "0",
    // Arabic-indic digit 0
    "١": "1",
    // Arabic-indic digit 1
    "٢": "2",
    // Arabic-indic digit 2
    "٣": "3",
    // Arabic-indic digit 3
    "٤": "4",
    // Arabic-indic digit 4
    "٥": "5",
    // Arabic-indic digit 5
    "٦": "6",
    // Arabic-indic digit 6
    "٧": "7",
    // Arabic-indic digit 7
    "٨": "8",
    // Arabic-indic digit 8
    "٩": "9",
    // Arabic-indic digit 9
    "۰": "0",
    // Eastern-Arabic digit 0
    "۱": "1",
    // Eastern-Arabic digit 1
    "۲": "2",
    // Eastern-Arabic digit 2
    "۳": "3",
    // Eastern-Arabic digit 3
    "۴": "4",
    // Eastern-Arabic digit 4
    "۵": "5",
    // Eastern-Arabic digit 5
    "۶": "6",
    // Eastern-Arabic digit 6
    "۷": "7",
    // Eastern-Arabic digit 7
    "۸": "8",
    // Eastern-Arabic digit 8
    "۹": "9"
};
function Ht(e) {
    return dr[e];
}
function _(e) {
    for(var r = "", t = rr(e.split("")), n; !(n = t()).done;){
        var d = n.value, i = Ht(d);
        i && (r += i);
    }
    return r;
}
function ir(e, r) {
    var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (t) return (t = t.call(e)).next.bind(t);
    if (Array.isArray(e) || (t = ar(e)) || r) {
        t && (e = t);
        var n = 0;
        return function() {
            return n >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[n++]
            };
        };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ar(e, r) {
    if (e) {
        if (typeof e == "string") return ft(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ft(e, r);
    }
}
function ft(e, r) {
    (r == null || r > e.length) && (r = e.length);
    for(var t = 0, n = new Array(r); t < r; t++)n[t] = e[t];
    return n;
}
function st(e) {
    for(var r = "", t = ir(e.split("")), n; !(n = t()).done;){
        var d = n.value;
        r += $r(d, r) || "";
    }
    return r;
}
function $r(e, r, t) {
    return e === "+" ? r ? void 0 : "+" : Ht(e);
}
function or(e, r) {
    var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (t) return (t = t.call(e)).next.bind(t);
    if (Array.isArray(e) || (t = ur(e)) || r) {
        t && (e = t);
        var n = 0;
        return function() {
            return n >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[n++]
            };
        };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ur(e, r) {
    if (e) {
        if (typeof e == "string") return ct(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ct(e, r);
    }
}
function ct(e, r) {
    (r == null || r > e.length) && (r = e.length);
    for(var t = 0, n = new Array(r); t < r; t++)n[t] = e[t];
    return n;
}
function Wt(e, r) {
    var t = r.countries;
    r.defaultCountry;
    var n = r.metadata;
    n = new s(n);
    for(var d = or(t), i; !(i = d()).done;){
        var a = i.value;
        if (n.country(a), n.leadingDigits()) {
            if (e && e.search(n.leadingDigits()) === 0) return a;
        } else if (Z({
            phone: e,
            country: a
        }, void 0, n.metadata)) return a;
    }
}
function Vt(e, r) {
    var t = r.nationalNumber, n = r.defaultCountry, d = r.metadata, i = d.getCountryCodesForCallingCode(e);
    if (i) return i.length === 1 ? i[0] : Wt(t, {
        countries: i,
        defaultCountry: n,
        metadata: d.metadata
    });
}
var Kt = "+", lr = "[\\-\\.\\(\\)]?", ht = "([" + h + "]|" + lr + ")", fr = "^\\" + Kt + ht + "*[" + h + "]" + ht + "*$", sr = new RegExp(fr, "g"), W = h, cr = "[" + W + "]+((\\-)*[" + W + "])*", hr = "a-zA-Z", gr = "[" + hr + "]+((\\-)*[" + W + "])*", mr = "^(" + cr + "\\.)*" + gr + "\\.?$", yr = new RegExp(mr, "g"), gt = "tel:", V = ";phone-context=", vr = ";isub=";
function Nr(e) {
    var r = e.indexOf(V);
    if (r < 0) return null;
    var t = r + V.length;
    if (t >= e.length) return "";
    var n = e.indexOf(";", t);
    return n >= 0 ? e.substring(t, n) : e.substring(t);
}
function br(e) {
    return e === null ? !0 : e.length === 0 ? !1 : sr.test(e) || yr.test(e);
}
function Cr(e, r) {
    var t = r.extractFormattedPhoneNumber, n = Nr(e);
    if (!br(n)) throw new C("NOT_A_NUMBER");
    var d;
    if (n === null) d = t(e) || "";
    else {
        d = "", n.charAt(0) === Kt && (d += n);
        var i = e.indexOf(gt), a;
        i >= 0 ? a = i + gt.length : a = 0;
        var $ = e.indexOf(V);
        d += e.substring(a, $);
    }
    var o = d.indexOf(vr);
    if (o > 0 && (d = d.substring(0, o)), d !== "") return d;
}
var pr = 250, Pr = new RegExp("[" + R + h + "]"), xr = new RegExp("[^" + h + "#]+$");
function Er(e, r, t) {
    if (r = r || {}, t = new s(t), r.defaultCountry && !t.hasCountry(r.defaultCountry)) throw r.v2 ? new C("INVALID_COUNTRY") : new Error("Unknown country: ".concat(r.defaultCountry));
    var n = Ar(e, r.v2, r.extract), d = n.number, i = n.ext, a = n.error;
    if (!d) {
        if (r.v2) throw a === "TOO_SHORT" ? new C("TOO_SHORT") : new C("NOT_A_NUMBER");
        return {};
    }
    var $ = Sr(d, r.defaultCountry, r.defaultCallingCode, t), o = $.country, u = $.nationalNumber, l = $.countryCallingCode, c = $.countryCallingCodeSource, f = $.carrierCode;
    if (!t.hasSelectedNumberingPlan()) {
        if (r.v2) throw new C("INVALID_COUNTRY");
        return {};
    }
    if (!u || u.length < J) {
        if (r.v2) throw new C("TOO_SHORT");
        return {};
    }
    if (u.length > he) {
        if (r.v2) throw new C("TOO_LONG");
        return {};
    }
    if (r.v2) {
        var g = new Bt(l, u, t.metadata);
        return o && (g.country = o), f && (g.carrierCode = f), i && (g.ext = i), g.__countryCallingCodeSource = c, g;
    }
    var v = (r.extended ? t.hasSelectedNumberingPlan() : o) ? b(u, t.nationalNumberPattern()) : !1;
    return r.extended ? {
        country: o,
        countryCallingCode: l,
        carrierCode: f,
        valid: v,
        possible: v ? !0 : !!(r.extended === !0 && t.possibleLengths() && wt(u, t)),
        phone: u,
        ext: i
    } : v ? Ir(o, u, i) : {};
}
function Fr(e, r, t) {
    if (e) {
        if (e.length > pr) {
            if (t) throw new C("TOO_LONG");
            return;
        }
        if (r === !1) return e;
        var n = e.search(Pr);
        if (!(n < 0)) return e.slice(n).replace(xr, "");
    }
}
function Ar(e, r, t) {
    var n = Cr(e, {
        extractFormattedPhoneNumber: function(a) {
            return Fr(a, t, r);
        }
    });
    if (!n) return {};
    if (!we(n)) return Re(n) ? {
        error: "TOO_SHORT"
    } : {};
    var d = er(n);
    return d.ext ? d : {
        number: n
    };
}
function Ir(e, r, t) {
    var n = {
        country: e,
        phone: r
    };
    return t && (n.ext = t), n;
}
function Sr(e, r, t, n) {
    var d = Q(st(e), r, t, n.metadata), i = d.countryCallingCodeSource, a = d.countryCallingCode, $ = d.number, o;
    if (a) n.selectNumberingPlan(a);
    else if ($ && (r || t)) n.selectNumberingPlan(r, t), r && (o = r), a = t || Y(r, n.metadata);
    else return {};
    if (!$) return {
        countryCallingCodeSource: i,
        countryCallingCode: a
    };
    var u = j(st($), n), l = u.nationalNumber, c = u.carrierCode, f = Vt(a, {
        nationalNumber: l,
        defaultCountry: r,
        metadata: n
    });
    return f && (o = f, f === "001" || n.country(o)), {
        country: o,
        countryCallingCode: a,
        countryCallingCodeSource: i,
        nationalNumber: l,
        carrierCode: c
    };
}
function mt(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(d) {
            return Object.getOwnPropertyDescriptor(e, d).enumerable;
        })), t.push.apply(t, n);
    }
    return t;
}
function yt(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = arguments[r] != null ? arguments[r] : {};
        r % 2 ? mt(Object(t), !0).forEach(function(n) {
            _r(e, n, t[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : mt(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
}
function _r(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function Tr(e, r, t) {
    return Er(e, yt(yt({}, r), {}, {
        v2: !0
    }), t);
}
function vt(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(d) {
            return Object.getOwnPropertyDescriptor(e, d).enumerable;
        })), t.push.apply(t, n);
    }
    return t;
}
function Or(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = arguments[r] != null ? arguments[r] : {};
        r % 2 ? vt(Object(t), !0).forEach(function(n) {
            wr(e, n, t[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : vt(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
}
function wr(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function Rr(e, r) {
    return kr(e) || Lr(e, r) || Mr(e, r) || Dr();
}
function Dr() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mr(e, r) {
    if (e) {
        if (typeof e == "string") return Nt(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Nt(e, r);
    }
}
function Nt(e, r) {
    (r == null || r > e.length) && (r = e.length);
    for(var t = 0, n = new Array(r); t < r; t++)n[t] = e[t];
    return n;
}
function Lr(e, r) {
    var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (t != null) {
        var n = [], d = !0, i = !1, a, $;
        try {
            for(t = t.call(e); !(d = (a = t.next()).done) && (n.push(a.value), !(r && n.length === r)); d = !0);
        } catch (o) {
            i = !0, $ = o;
        } finally{
            try {
                !d && t.return != null && t.return();
            } finally{
                if (i) throw $;
            }
        }
        return n;
    }
}
function kr(e) {
    if (Array.isArray(e)) return e;
}
function Gr(e) {
    var r = Array.prototype.slice.call(e), t = Rr(r, 4), n = t[0], d = t[1], i = t[2], a = t[3], $, o, u;
    if (typeof n == "string") $ = n;
    else throw new TypeError("A text for parsing must be a string.");
    if (!d || typeof d == "string") a ? (o = i, u = a) : (o = void 0, u = i), d && (o = Or({
        defaultCountry: d
    }, o));
    else if (P(d)) i ? (o = d, u = i) : u = d;
    else throw new Error("Invalid second argument: ".concat(d));
    return {
        text: $,
        options: o,
        metadata: u
    };
}
function Br() {
    var e = Gr(arguments), r = e.text, t = e.options, n = e.metadata;
    return Tr(r, t, n);
}
function jr(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function Ur(e, r) {
    for(var t = 0; t < r.length; t++){
        var n = r[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
}
function Hr(e, r, t) {
    return r && Ur(e.prototype, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
var Wr = /* @__PURE__ */ function() {
    function e(r) {
        var t = r.onCountryChange, n = r.onCallingCodeChange;
        jr(this, e), this.onCountryChange = t, this.onCallingCodeChange = n;
    }
    return Hr(e, [
        {
            key: "reset",
            value: function(t) {
                var n = t.country, d = t.callingCode;
                this.international = !1, this.missingPlus = !1, this.IDDPrefix = void 0, this.callingCode = void 0, this.digits = "", this.resetNationalSignificantNumber(), this.initCountryAndCallingCode(n, d);
            }
        },
        {
            key: "resetNationalSignificantNumber",
            value: function() {
                this.nationalSignificantNumber = this.getNationalDigits(), this.nationalSignificantNumberMatchesInput = !0, this.nationalPrefix = void 0, this.carrierCode = void 0, this.complexPrefixBeforeNationalSignificantNumber = void 0;
            }
        },
        {
            key: "update",
            value: function(t) {
                for(var n = 0, d = Object.keys(t); n < d.length; n++){
                    var i = d[n];
                    this[i] = t[i];
                }
            }
        },
        {
            key: "initCountryAndCallingCode",
            value: function(t, n) {
                this.setCountry(t), this.setCallingCode(n);
            }
        },
        {
            key: "setCountry",
            value: function(t) {
                this.country = t, this.onCountryChange(t);
            }
        },
        {
            key: "setCallingCode",
            value: function(t) {
                this.callingCode = t, this.onCallingCodeChange(t, this.country);
            }
        },
        {
            key: "startInternationalNumber",
            value: function(t, n) {
                this.international = !0, this.initCountryAndCallingCode(t, n);
            }
        },
        {
            key: "appendDigits",
            value: function(t) {
                this.digits += t;
            }
        },
        {
            key: "appendNationalSignificantNumberDigits",
            value: function(t) {
                this.nationalSignificantNumber += t;
            }
        },
        {
            key: "getNationalDigits",
            value: function() {
                return this.international ? this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0)) : this.digits;
            }
        },
        {
            key: "getDigitsWithoutInternationalPrefix",
            value: function() {
                return this.international && this.IDDPrefix ? this.digits.slice(this.IDDPrefix.length) : this.digits;
            }
        }
    ]), e;
}();
function Vr(e, r) {
    var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (t) return (t = t.call(e)).next.bind(t);
    if (Array.isArray(e) || (t = Kr(e)) || r) {
        t && (e = t);
        var n = 0;
        return function() {
            return n >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[n++]
            };
        };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kr(e, r) {
    if (e) {
        if (typeof e == "string") return bt(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return bt(e, r);
    }
}
function bt(e, r) {
    (r == null || r > e.length) && (r = e.length);
    for(var t = 0, n = new Array(r); t < r; t++)n[t] = e[t];
    return n;
}
var m = "x", L = new RegExp(m);
function I(e, r) {
    if (r < 1) return "";
    for(var t = ""; r > 1;)r & 1 && (t += e), r >>= 1, e += e;
    return t + e;
}
function Ct(e, r) {
    return e[r] === ")" && r++, Xr(e.slice(0, r));
}
function Xr(e) {
    for(var r = [], t = 0; t < e.length;)e[t] === "(" ? r.push(t) : e[t] === ")" && r.pop(), t++;
    var n = 0, d = "";
    r.push(e.length);
    for(var i = 0, a = r; i < a.length; i++){
        var $ = a[i];
        d += e.slice(n, $), n = $ + 1;
    }
    return d;
}
function Yr(e, r, t) {
    for(var n = Vr(t.split("")), d; !(d = n()).done;){
        var i = d.value;
        if (e.slice(r + 1).search(L) < 0) return;
        r = e.search(L), e = e.replace(L, i);
    }
    return [
        e,
        r
    ];
}
function Zr(e, r, t) {
    var n = t.metadata, d = t.shouldTryNationalPrefixFormattingRule, i = t.getSeparatorAfterNationalPrefix, a = new RegExp("^(?:".concat(r.pattern(), ")$"));
    if (a.test(e.nationalSignificantNumber)) return Qr(e, r, {
        metadata: n,
        shouldTryNationalPrefixFormattingRule: d,
        getSeparatorAfterNationalPrefix: i
    });
}
function Jr(e, r) {
    return w(e, r) === "IS_POSSIBLE";
}
function Qr(e, r, t) {
    var n = t.metadata, d = t.shouldTryNationalPrefixFormattingRule, i = t.getSeparatorAfterNationalPrefix;
    if (e.nationalSignificantNumber, e.international, e.nationalPrefix, e.carrierCode, d(r)) {
        var a = pt(e, r, {
            useNationalPrefixFormattingRule: !0,
            getSeparatorAfterNationalPrefix: i,
            metadata: n
        });
        if (a) return a;
    }
    return pt(e, r, {
        useNationalPrefixFormattingRule: !1,
        getSeparatorAfterNationalPrefix: i,
        metadata: n
    });
}
function pt(e, r, t) {
    var n = t.metadata, d = t.useNationalPrefixFormattingRule, i = t.getSeparatorAfterNationalPrefix, a = kt(e.nationalSignificantNumber, r, {
        carrierCode: e.carrierCode,
        useInternationalFormat: e.international,
        withNationalPrefix: d,
        metadata: n
    });
    if (d || (e.nationalPrefix ? a = e.nationalPrefix + i(r) + a : e.complexPrefixBeforeNationalSignificantNumber && (a = e.complexPrefixBeforeNationalSignificantNumber + " " + a)), qr(a, e)) return a;
}
function qr(e, r) {
    return _(e) === r.getNationalDigits();
}
function zr(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function tn(e, r) {
    for(var t = 0; t < r.length; t++){
        var n = r[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
}
function en(e, r, t) {
    return r && tn(e.prototype, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
var rn = /* @__PURE__ */ function() {
    function e() {
        zr(this, e);
    }
    return en(e, [
        {
            key: "parse",
            value: function(t) {
                if (this.context = [
                    {
                        or: !0,
                        instructions: []
                    }
                ], this.parsePattern(t), this.context.length !== 1) throw new Error("Non-finalized contexts left when pattern parse ended");
                var n = this.context[0], d = n.branches, i = n.instructions;
                if (d) return {
                    op: "|",
                    args: d.concat([
                        k(i)
                    ])
                };
                if (i.length === 0) throw new Error("Pattern is required");
                return i.length === 1 ? i[0] : i;
            }
        },
        {
            key: "startContext",
            value: function(t) {
                this.context.push(t);
            }
        },
        {
            key: "endContext",
            value: function() {
                this.context.pop();
            }
        },
        {
            key: "getContext",
            value: function() {
                return this.context[this.context.length - 1];
            }
        },
        {
            key: "parsePattern",
            value: function(t) {
                if (!t) throw new Error("Pattern is required");
                var n = t.match(an);
                if (!n) {
                    if (dn.test(t)) throw new Error("Illegal characters found in a pattern: ".concat(t));
                    this.getContext().instructions = this.getContext().instructions.concat(t.split(""));
                    return;
                }
                var d = n[1], i = t.slice(0, n.index), a = t.slice(n.index + d.length);
                switch(d){
                    case "(?:":
                        i && this.parsePattern(i), this.startContext({
                            or: !0,
                            instructions: [],
                            branches: []
                        });
                        break;
                    case ")":
                        if (!this.getContext().or) throw new Error('")" operator must be preceded by "(?:" operator');
                        if (i && this.parsePattern(i), this.getContext().instructions.length === 0) throw new Error('No instructions found after "|" operator in an "or" group');
                        var $ = this.getContext(), o = $.branches;
                        o.push(k(this.getContext().instructions)), this.endContext(), this.getContext().instructions.push({
                            op: "|",
                            args: o
                        });
                        break;
                    case "|":
                        if (!this.getContext().or) throw new Error('"|" operator can only be used inside "or" groups');
                        if (i && this.parsePattern(i), !this.getContext().branches) if (this.context.length === 1) this.getContext().branches = [];
                        else throw new Error('"branches" not found in an "or" group context');
                        this.getContext().branches.push(k(this.getContext().instructions)), this.getContext().instructions = [];
                        break;
                    case "[":
                        i && this.parsePattern(i), this.startContext({
                            oneOfSet: !0
                        });
                        break;
                    case "]":
                        if (!this.getContext().oneOfSet) throw new Error('"]" operator must be preceded by "[" operator');
                        this.endContext(), this.getContext().instructions.push({
                            op: "[]",
                            args: nn(i)
                        });
                        break;
                    /* istanbul ignore next */ default:
                        throw new Error("Unknown operator: ".concat(d));
                }
                a && this.parsePattern(a);
            }
        }
    ]), e;
}();
function nn(e) {
    for(var r = [], t = 0; t < e.length;){
        if (e[t] === "-") {
            if (t === 0 || t === e.length - 1) throw new Error("Couldn't parse a one-of set pattern: ".concat(e));
            for(var n = e[t - 1].charCodeAt(0) + 1, d = e[t + 1].charCodeAt(0) - 1, i = n; i <= d;)r.push(String.fromCharCode(i)), i++;
        } else r.push(e[t]);
        t++;
    }
    return r;
}
var dn = /[\(\)\[\]\?\:\|]/, an = new RegExp(// any of:
"(\\||\\(\\?\\:|\\)|\\[|\\])");
function k(e) {
    return e.length === 1 ? e[0] : e;
}
function Pt(e, r) {
    var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (t) return (t = t.call(e)).next.bind(t);
    if (Array.isArray(e) || (t = $n(e)) || r) {
        t && (e = t);
        var n = 0;
        return function() {
            return n >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[n++]
            };
        };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $n(e, r) {
    if (e) {
        if (typeof e == "string") return xt(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return xt(e, r);
    }
}
function xt(e, r) {
    (r == null || r > e.length) && (r = e.length);
    for(var t = 0, n = new Array(r); t < r; t++)n[t] = e[t];
    return n;
}
function on(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function un(e, r) {
    for(var t = 0; t < r.length; t++){
        var n = r[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
}
function ln(e, r, t) {
    return r && un(e.prototype, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
var fn = /* @__PURE__ */ function() {
    function e(r) {
        on(this, e), this.matchTree = new rn().parse(r);
    }
    return ln(e, [
        {
            key: "match",
            value: function(t) {
                var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d = n.allowOverflow;
                if (!t) throw new Error("String is required");
                var i = K(t.split(""), this.matchTree, !0);
                if (i && i.match && delete i.matchedChars, !(i && i.overflow && !d)) return i;
            }
        }
    ]), e;
}();
function K(e, r, t) {
    if (typeof r == "string") {
        var n = e.join("");
        return r.indexOf(n) === 0 ? e.length === r.length ? {
            match: !0,
            matchedChars: e
        } : {
            partialMatch: !0
        } : n.indexOf(r) === 0 ? t && e.length > r.length ? {
            overflow: !0
        } : {
            match: !0,
            matchedChars: e.slice(0, r.length)
        } : void 0;
    }
    if (Array.isArray(r)) {
        for(var d = e.slice(), i = 0; i < r.length;){
            var a = r[i], $ = K(d, a, t && i === r.length - 1);
            if ($) {
                if ($.overflow) return $;
                if ($.match) {
                    if (d = d.slice($.matchedChars.length), d.length === 0) return i === r.length - 1 ? {
                        match: !0,
                        matchedChars: e
                    } : {
                        partialMatch: !0
                    };
                } else {
                    if ($.partialMatch) return {
                        partialMatch: !0
                    };
                    throw new Error(`Unsupported match result:
`.concat(JSON.stringify($, null, 2)));
                }
            } else return;
            i++;
        }
        return t ? {
            overflow: !0
        } : {
            match: !0,
            matchedChars: e.slice(0, e.length - d.length)
        };
    }
    switch(r.op){
        case "|":
            for(var o, u = Pt(r.args), l; !(l = u()).done;){
                var c = l.value, f = K(e, c, t);
                if (f) {
                    if (f.overflow) return f;
                    if (f.match) return {
                        match: !0,
                        matchedChars: f.matchedChars
                    };
                    if (f.partialMatch) o = !0;
                    else throw new Error(`Unsupported match result:
`.concat(JSON.stringify(f, null, 2)));
                }
            }
            return o ? {
                partialMatch: !0
            } : void 0;
        case "[]":
            for(var g = Pt(r.args), v; !(v = g()).done;){
                var p = v.value;
                if (e[0] === p) return e.length === 1 ? {
                    match: !0,
                    matchedChars: e
                } : t ? {
                    overflow: !0
                } : {
                    match: !0,
                    matchedChars: [
                        p
                    ]
                };
            }
            return;
        /* istanbul ignore next */ default:
            throw new Error("Unsupported instruction tree: ".concat(r));
    }
}
function Et(e, r) {
    var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (t) return (t = t.call(e)).next.bind(t);
    if (Array.isArray(e) || (t = sn(e)) || r) {
        t && (e = t);
        var n = 0;
        return function() {
            return n >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[n++]
            };
        };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sn(e, r) {
    if (e) {
        if (typeof e == "string") return Ft(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ft(e, r);
    }
}
function Ft(e, r) {
    (r == null || r > e.length) && (r = e.length);
    for(var t = 0, n = new Array(r); t < r; t++)n[t] = e[t];
    return n;
}
function cn(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function hn(e, r) {
    for(var t = 0; t < r.length; t++){
        var n = r[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
}
function gn(e, r, t) {
    return r && hn(e.prototype, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
var X = "9", mn = 15, yn = I(X, mn), vn = /[- ]/, Nn = function() {
    return /\[([^\[\]])*\]/g;
}, bn = function() {
    return /\d(?=[^,}][^,}])/g;
}, Cn = new RegExp("[" + y + "]*\\$1[" + y + "]*(\\$\\d[" + y + "]*)*$"), At = 3, pn = /* @__PURE__ */ function() {
    function e(r) {
        r.state;
        var t = r.metadata;
        cn(this, e), this.metadata = t, this.resetFormat();
    }
    return gn(e, [
        {
            key: "resetFormat",
            value: function() {
                this.chosenFormat = void 0, this.template = void 0, this.nationalNumberTemplate = void 0, this.populatedNationalNumberTemplate = void 0, this.populatedNationalNumberTemplatePosition = -1;
            }
        },
        {
            key: "reset",
            value: function(t, n) {
                this.resetFormat(), t ? (this.isNANP = t.callingCode() === "1", this.matchingFormats = t.formats(), n.nationalSignificantNumber && this.narrowDownMatchingFormats(n)) : (this.isNANP = void 0, this.matchingFormats = []);
            }
        },
        {
            key: "format",
            value: function(t, n) {
                var d = this;
                if (Jr(n.nationalSignificantNumber, this.metadata)) for(var i = Et(this.matchingFormats), a; !(a = i()).done;){
                    var $ = a.value, o = Zr(n, $, {
                        metadata: this.metadata,
                        shouldTryNationalPrefixFormattingRule: function(l) {
                            return d.shouldTryNationalPrefixFormattingRule(l, {
                                international: n.international,
                                nationalPrefix: n.nationalPrefix
                            });
                        },
                        getSeparatorAfterNationalPrefix: function(l) {
                            return d.getSeparatorAfterNationalPrefix(l);
                        }
                    });
                    if (o) return this.resetFormat(), this.chosenFormat = $, this.setNationalNumberTemplate(o.replace(/\d/g, m), n), this.populatedNationalNumberTemplate = o, this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(m), o;
                }
                return this.formatNationalNumberWithNextDigits(t, n);
            }
        },
        {
            key: "formatNationalNumberWithNextDigits",
            value: function(t, n) {
                var d = this.chosenFormat, i = this.chooseFormat(n);
                if (i) return i === d ? this.formatNextNationalNumberDigits(t) : this.formatNextNationalNumberDigits(n.getNationalDigits());
            }
        },
        {
            key: "narrowDownMatchingFormats",
            value: function(t) {
                var n = this, d = t.nationalSignificantNumber, i = t.nationalPrefix, a = t.international, $ = d, o = $.length - At;
                o < 0 && (o = 0), this.matchingFormats = this.matchingFormats.filter(function(u) {
                    return n.formatSuits(u, a, i) && n.formatMatches(u, $, o);
                }), this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1 && this.resetFormat();
            }
        },
        {
            key: "formatSuits",
            value: function(t, n, d) {
                return !(d && !t.usesNationalPrefix() && // !format.domesticCarrierCodeFormattingRule() &&
                !t.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !n && !d && t.nationalPrefixIsMandatoryWhenFormattingInNationalFormat());
            }
        },
        {
            key: "formatMatches",
            value: function(t, n, d) {
                var i = t.leadingDigitsPatterns().length;
                if (i === 0) return !0;
                d = Math.min(d, i - 1);
                var a = t.leadingDigitsPatterns()[d];
                if (n.length < At) try {
                    return new fn(a).match(n, {
                        allowOverflow: !0
                    }) !== void 0;
                } catch ($) {
                    return console.error($), !0;
                }
                return new RegExp("^(".concat(a, ")")).test(n);
            }
        },
        {
            key: "getFormatFormat",
            value: function(t, n) {
                return n ? t.internationalFormat() : t.format();
            }
        },
        {
            key: "chooseFormat",
            value: function(t) {
                for(var n = this, d = function() {
                    var u = a.value;
                    return n.chosenFormat === u ? "break" : Cn.test(n.getFormatFormat(u, t.international)) ? n.createTemplateForFormat(u, t) ? (n.chosenFormat = u, "break") : (n.matchingFormats = n.matchingFormats.filter(function(l) {
                        return l !== u;
                    }), "continue") : "continue";
                }, i = Et(this.matchingFormats.slice()), a; !(a = i()).done;){
                    var $ = d();
                    if ($ === "break") break;
                }
                return this.chosenFormat || this.resetFormat(), this.chosenFormat;
            }
        },
        {
            key: "createTemplateForFormat",
            value: function(t, n) {
                if (!(t.pattern().indexOf("|") >= 0)) {
                    var d = this.getTemplateForFormat(t, n);
                    if (d) return this.setNationalNumberTemplate(d, n), !0;
                }
            }
        },
        {
            key: "getSeparatorAfterNationalPrefix",
            value: function(t) {
                return this.isNANP || t && t.nationalPrefixFormattingRule() && vn.test(t.nationalPrefixFormattingRule()) ? " " : "";
            }
        },
        {
            key: "getInternationalPrefixBeforeCountryCallingCode",
            value: function(t, n) {
                var d = t.IDDPrefix, i = t.missingPlus;
                return d ? n && n.spacing === !1 ? d : d + " " : i ? "" : "+";
            }
        },
        {
            key: "getTemplate",
            value: function(t) {
                if (this.template) {
                    for(var n = -1, d = 0, i = t.international ? this.getInternationalPrefixBeforeCountryCallingCode(t, {
                        spacing: !1
                    }) : ""; d < i.length + t.getDigitsWithoutInternationalPrefix().length;)n = this.template.indexOf(m, n + 1), d++;
                    return Ct(this.template, n + 1);
                }
            }
        },
        {
            key: "setNationalNumberTemplate",
            value: function(t, n) {
                this.nationalNumberTemplate = t, this.populatedNationalNumberTemplate = t, this.populatedNationalNumberTemplatePosition = -1, n.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(n).replace(/[\d\+]/g, m) + I(m, n.callingCode.length) + " " + t : this.template = t;
            }
        },
        {
            key: "getTemplateForFormat",
            value: function(t, n) {
                var d = n.nationalSignificantNumber, i = n.international, a = n.nationalPrefix, $ = n.complexPrefixBeforeNationalSignificantNumber, o = t.pattern();
                o = o.replace(Nn(), "\\d").replace(bn(), "\\d");
                var u = yn.match(o)[0];
                if (!(d.length > u.length)) {
                    var l = new RegExp("^" + o + "$"), c = d.replace(/\d/g, X);
                    l.test(c) && (u = c);
                    var f = this.getFormatFormat(t, i), g;
                    if (this.shouldTryNationalPrefixFormattingRule(t, {
                        international: i,
                        nationalPrefix: a
                    })) {
                        var v = f.replace(Lt, t.nationalPrefixFormattingRule());
                        if (_(t.nationalPrefixFormattingRule()) === (a || "") + _("$1") && (f = v, g = !0, a)) for(var p = a.length; p > 0;)f = f.replace(/\d/, m), p--;
                    }
                    var N = u.replace(new RegExp(o), f).replace(new RegExp(X, "g"), m);
                    return g || ($ ? N = I(m, $.length) + " " + N : a && (N = I(m, a.length) + this.getSeparatorAfterNationalPrefix(t) + N)), i && (N = Mt(N)), N;
                }
            }
        },
        {
            key: "formatNextNationalNumberDigits",
            value: function(t) {
                var n = Yr(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, t);
                if (!n) {
                    this.resetFormat();
                    return;
                }
                return this.populatedNationalNumberTemplate = n[0], this.populatedNationalNumberTemplatePosition = n[1], Ct(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1);
            }
        },
        {
            key: "shouldTryNationalPrefixFormattingRule",
            value: function(t, n) {
                var d = n.international, i = n.nationalPrefix;
                if (t.nationalPrefixFormattingRule()) {
                    var a = t.usesNationalPrefix();
                    if (a && i || !a && !d) return !0;
                }
            }
        }
    ]), e;
}();
function Xt(e, r) {
    return Fn(e) || En(e, r) || xn(e, r) || Pn();
}
function Pn() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xn(e, r) {
    if (e) {
        if (typeof e == "string") return It(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return It(e, r);
    }
}
function It(e, r) {
    (r == null || r > e.length) && (r = e.length);
    for(var t = 0, n = new Array(r); t < r; t++)n[t] = e[t];
    return n;
}
function En(e, r) {
    var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (t != null) {
        var n = [], d = !0, i = !1, a, $;
        try {
            for(t = t.call(e); !(d = (a = t.next()).done) && (n.push(a.value), !(r && n.length === r)); d = !0);
        } catch (o) {
            i = !0, $ = o;
        } finally{
            try {
                !d && t.return != null && t.return();
            } finally{
                if (i) throw $;
            }
        }
        return n;
    }
}
function Fn(e) {
    if (Array.isArray(e)) return e;
}
function An(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function In(e, r) {
    for(var t = 0; t < r.length; t++){
        var n = r[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
}
function Sn(e, r, t) {
    return r && In(e.prototype, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
var _n = "[" + y + h + "]+", Tn = new RegExp("^" + _n + "$", "i"), On = "(?:[" + R + "][" + y + h + "]*|[" + y + h + "]+)", wn = new RegExp("[^" + y + h + "]+.*$"), Rn = /[^\d\[\]]/, Dn = /* @__PURE__ */ function() {
    function e(r) {
        var t = r.defaultCountry, n = r.defaultCallingCode, d = r.metadata, i = r.onNationalSignificantNumberChange;
        An(this, e), this.defaultCountry = t, this.defaultCallingCode = n, this.metadata = d, this.onNationalSignificantNumberChange = i;
    }
    return Sn(e, [
        {
            key: "input",
            value: function(t, n) {
                var d = kn(t), i = Xt(d, 2), a = i[0], $ = i[1], o = _(a), u;
                return $ && (n.digits || (n.startInternationalNumber(), o || (u = !0))), o && this.inputDigits(o, n), {
                    digits: o,
                    justLeadingPlus: u
                };
            }
        },
        {
            key: "inputDigits",
            value: function(t, n) {
                var d = n.digits, i = d.length < 3 && d.length + t.length >= 3;
                if (n.appendDigits(t), i && this.extractIddPrefix(n), this.isWaitingForCountryCallingCode(n)) {
                    if (!this.extractCountryCallingCode(n)) return;
                } else n.appendNationalSignificantNumberDigits(t);
                n.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(n.getNationalDigits(), function(a) {
                    return n.update(a);
                });
            }
        },
        {
            key: "isWaitingForCountryCallingCode",
            value: function(t) {
                var n = t.international, d = t.callingCode;
                return n && !d;
            }
        },
        {
            key: "extractCountryCallingCode",
            value: function(t) {
                var n = Q("+" + t.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), d = n.countryCallingCode, i = n.number;
                if (d) return t.setCallingCode(d), t.update({
                    nationalSignificantNumber: i
                }), !0;
            }
        },
        {
            key: "reset",
            value: function(t) {
                if (t) {
                    this.hasSelectedNumberingPlan = !0;
                    var n = t._nationalPrefixForParsing();
                    this.couldPossiblyExtractAnotherNationalSignificantNumber = n && Rn.test(n);
                } else this.hasSelectedNumberingPlan = void 0, this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0;
            }
        },
        {
            key: "extractNationalSignificantNumber",
            value: function(t, n) {
                if (this.hasSelectedNumberingPlan) {
                    var d = B(t, this.metadata), i = d.nationalPrefix, a = d.nationalNumber, $ = d.carrierCode;
                    if (a !== t) return this.onExtractedNationalNumber(i, $, a, t, n), !0;
                }
            }
        },
        {
            key: "extractAnotherNationalSignificantNumber",
            value: function(t, n, d) {
                if (!this.hasExtractedNationalSignificantNumber) return this.extractNationalSignificantNumber(t, d);
                if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
                    var i = B(t, this.metadata), a = i.nationalPrefix, $ = i.nationalNumber, o = i.carrierCode;
                    if ($ !== n) return this.onExtractedNationalNumber(a, o, $, t, d), !0;
                }
            }
        },
        {
            key: "onExtractedNationalNumber",
            value: function(t, n, d, i, a) {
                var $, o, u = i.lastIndexOf(d);
                if (u >= 0 && u === i.length - d.length) {
                    o = !0;
                    var l = i.slice(0, u);
                    l !== t && ($ = l);
                }
                a({
                    nationalPrefix: t,
                    carrierCode: n,
                    nationalSignificantNumber: d,
                    nationalSignificantNumberMatchesInput: o,
                    complexPrefixBeforeNationalSignificantNumber: $
                }), this.hasExtractedNationalSignificantNumber = !0, this.onNationalSignificantNumberChange();
            }
        },
        {
            key: "reExtractNationalSignificantNumber",
            value: function(t) {
                if (this.extractAnotherNationalSignificantNumber(t.getNationalDigits(), t.nationalSignificantNumber, function(n) {
                    return t.update(n);
                })) return !0;
                if (this.extractIddPrefix(t)) return this.extractCallingCodeAndNationalSignificantNumber(t), !0;
                if (this.fixMissingPlus(t)) return this.extractCallingCodeAndNationalSignificantNumber(t), !0;
            }
        },
        {
            key: "extractIddPrefix",
            value: function(t) {
                var n = t.international, d = t.IDDPrefix, i = t.digits;
                if (t.nationalSignificantNumber, !(n || d)) {
                    var a = Rt(i, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
                    if (a !== void 0 && a !== i) return t.update({
                        IDDPrefix: i.slice(0, i.length - a.length)
                    }), this.startInternationalNumber(t, {
                        country: void 0,
                        callingCode: void 0
                    }), !0;
                }
            }
        },
        {
            key: "fixMissingPlus",
            value: function(t) {
                if (!t.international) {
                    var n = Dt(t.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), d = n.countryCallingCode;
                    if (n.number, d) return t.update({
                        missingPlus: !0
                    }), this.startInternationalNumber(t, {
                        country: t.country,
                        callingCode: d
                    }), !0;
                }
            }
        },
        {
            key: "startInternationalNumber",
            value: function(t, n) {
                var d = n.country, i = n.callingCode;
                t.startInternationalNumber(d, i), t.nationalSignificantNumber && (t.resetNationalSignificantNumber(), this.onNationalSignificantNumberChange(), this.hasExtractedNationalSignificantNumber = void 0);
            }
        },
        {
            key: "extractCallingCodeAndNationalSignificantNumber",
            value: function(t) {
                this.extractCountryCallingCode(t) && this.extractNationalSignificantNumber(t.getNationalDigits(), function(n) {
                    return t.update(n);
                });
            }
        }
    ]), e;
}();
function Mn(e) {
    var r = e.search(On);
    if (!(r < 0)) {
        e = e.slice(r);
        var t;
        return e[0] === "+" && (t = !0, e = e.slice(1)), e = e.replace(wn, ""), t && (e = "+" + e), e;
    }
}
function Ln(e) {
    var r = Mn(e) || "";
    return r[0] === "+" ? [
        r.slice(1),
        !0
    ] : [
        r
    ];
}
function kn(e) {
    var r = Ln(e), t = Xt(r, 2), n = t[0], d = t[1];
    return Tn.test(n) || (n = ""), [
        n,
        d
    ];
}
function Gn(e, r) {
    return Hn(e) || Un(e, r) || jn(e, r) || Bn();
}
function Bn() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jn(e, r) {
    if (e) {
        if (typeof e == "string") return St(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return St(e, r);
    }
}
function St(e, r) {
    (r == null || r > e.length) && (r = e.length);
    for(var t = 0, n = new Array(r); t < r; t++)n[t] = e[t];
    return n;
}
function Un(e, r) {
    var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (t != null) {
        var n = [], d = !0, i = !1, a, $;
        try {
            for(t = t.call(e); !(d = (a = t.next()).done) && (n.push(a.value), !(r && n.length === r)); d = !0);
        } catch (o) {
            i = !0, $ = o;
        } finally{
            try {
                !d && t.return != null && t.return();
            } finally{
                if (i) throw $;
            }
        }
        return n;
    }
}
function Hn(e) {
    if (Array.isArray(e)) return e;
}
function Wn(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function Vn(e, r) {
    for(var t = 0; t < r.length; t++){
        var n = r[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
}
function Kn(e, r, t) {
    return r && Vn(e.prototype, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
var Xn = /* @__PURE__ */ function() {
    function e(r, t) {
        Wn(this, e), this.metadata = new s(t);
        var n = this.getCountryAndCallingCode(r), d = Gn(n, 2), i = d[0], a = d[1];
        this.defaultCountry = i, this.defaultCallingCode = a, this.reset();
    }
    return Kn(e, [
        {
            key: "getCountryAndCallingCode",
            value: function(t) {
                var n, d;
                return t && (P(t) ? (n = t.defaultCountry, d = t.defaultCallingCode) : n = t), n && !this.metadata.hasCountry(n) && (n = void 0), [
                    n,
                    d
                ];
            }
        },
        {
            key: "input",
            value: function(t) {
                var n = this.parser.input(t, this.state), d = n.digits, i = n.justLeadingPlus;
                if (i) this.formattedOutput = "+";
                else if (d) {
                    this.determineTheCountryIfNeeded(), this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state);
                    var a;
                    if (this.metadata.hasSelectedNumberingPlan() && (a = this.formatter.format(d, this.state)), a === void 0 && this.parser.reExtractNationalSignificantNumber(this.state)) {
                        this.determineTheCountryIfNeeded();
                        var $ = this.state.getNationalDigits();
                        $ && (a = this.formatter.format($, this.state));
                    }
                    this.formattedOutput = a ? this.getFullNumber(a) : this.getNonFormattedNumber();
                }
                return this.formattedOutput;
            }
        },
        {
            key: "reset",
            value: function() {
                var t = this;
                return this.state = new Wr({
                    onCountryChange: function(d) {
                        t.country = d;
                    },
                    onCallingCodeChange: function(d, i) {
                        t.metadata.selectNumberingPlan(i, d), t.formatter.reset(t.metadata.numberingPlan, t.state), t.parser.reset(t.metadata.numberingPlan);
                    }
                }), this.formatter = new pn({
                    state: this.state,
                    metadata: this.metadata
                }), this.parser = new Dn({
                    defaultCountry: this.defaultCountry,
                    defaultCallingCode: this.defaultCallingCode,
                    metadata: this.metadata,
                    state: this.state,
                    onNationalSignificantNumberChange: function() {
                        t.determineTheCountryIfNeeded(), t.formatter.reset(t.metadata.numberingPlan, t.state);
                    }
                }), this.state.reset({
                    country: this.defaultCountry,
                    callingCode: this.defaultCallingCode
                }), this.formattedOutput = "", this;
            }
        },
        {
            key: "isInternational",
            value: function() {
                return this.state.international;
            }
        },
        {
            key: "getCallingCode",
            value: function() {
                if (this.isInternational()) return this.state.callingCode;
            }
        },
        {
            key: "getCountryCallingCode",
            value: function() {
                return this.getCallingCode();
            }
        },
        {
            key: "getCountry",
            value: function() {
                var t = this.state.digits;
                if (t) return this._getCountry();
            }
        },
        {
            key: "_getCountry",
            value: function() {
                var t = this.state.country;
                return t;
            }
        },
        {
            key: "determineTheCountryIfNeeded",
            value: function() {
                (!this.state.country || this.isCountryCallingCodeAmbiguous()) && this.determineTheCountry();
            }
        },
        {
            key: "getFullNumber",
            value: function(t) {
                var n = this;
                if (this.isInternational()) {
                    var d = function($) {
                        return n.formatter.getInternationalPrefixBeforeCountryCallingCode(n.state, {
                            spacing: !!$
                        }) + $;
                    }, i = this.state.callingCode;
                    return d(i ? t ? "".concat(i, " ").concat(t) : i : "".concat(this.state.getDigitsWithoutInternationalPrefix()));
                }
                return t;
            }
        },
        {
            key: "getNonFormattedNationalNumberWithPrefix",
            value: function() {
                var t = this.state, n = t.nationalSignificantNumber, d = t.complexPrefixBeforeNationalSignificantNumber, i = t.nationalPrefix, a = n, $ = d || i;
                return $ && (a = $ + a), a;
            }
        },
        {
            key: "getNonFormattedNumber",
            value: function() {
                var t = this.state.nationalSignificantNumberMatchesInput;
                return this.getFullNumber(t ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits());
            }
        },
        {
            key: "getNonFormattedTemplate",
            value: function() {
                var t = this.getNonFormattedNumber();
                if (t) return t.replace(/[\+\d]/g, m);
            }
        },
        {
            key: "isCountryCallingCodeAmbiguous",
            value: function() {
                var t = this.state.callingCode, n = this.metadata.getCountryCodesForCallingCode(t);
                return n && n.length > 1;
            }
        },
        {
            key: "determineTheCountry",
            value: function() {
                this.state.setCountry(Vt(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, {
                    nationalNumber: this.state.nationalSignificantNumber,
                    defaultCountry: this.defaultCountry,
                    metadata: this.metadata
                }));
            }
        },
        {
            key: "getNumberValue",
            value: function() {
                var t = this.state, n = t.digits, d = t.callingCode, i = t.country, a = t.nationalSignificantNumber;
                if (n) {
                    if (this.isInternational()) return d ? "+" + d + a : "+" + n;
                    if (i || d) {
                        var $ = i ? this.metadata.countryCallingCode() : d;
                        return "+" + $ + a;
                    }
                }
            }
        },
        {
            key: "getNumber",
            value: function() {
                var t = this.state, n = t.nationalSignificantNumber, d = t.carrierCode, i = t.callingCode, a = this._getCountry();
                if (n && !(!a && !i)) {
                    if (a && a === this.defaultCountry) {
                        var $ = new s(this.metadata.metadata);
                        $.selectNumberingPlan(a);
                        var o = $.numberingPlan.callingCode(), u = this.metadata.getCountryCodesForCallingCode(o);
                        if (u.length > 1) {
                            var l = Wt(n, {
                                countries: u,
                                defaultCountry: this.defaultCountry,
                                metadata: this.metadata.metadata
                            });
                            l && (a = l);
                        }
                    }
                    var c = new Bt(a || i, n, this.metadata.metadata);
                    return d && (c.carrierCode = d), c;
                }
            }
        },
        {
            key: "isPossible",
            value: function() {
                var t = this.getNumber();
                return t ? t.isPossible() : !1;
            }
        },
        {
            key: "isValid",
            value: function() {
                var t = this.getNumber();
                return t ? t.isValid() : !1;
            }
        },
        {
            key: "getNationalNumber",
            value: function() {
                return this.state.nationalSignificantNumber;
            }
        },
        {
            key: "getChars",
            value: function() {
                return (this.state.international ? "+" : "") + this.state.digits;
            }
        },
        {
            key: "getTemplate",
            value: function() {
                return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || "";
            }
        }
    ]), e;
}();
function Yn(e, r, t) {
    return t || (t = r, r = void 0), new Xn(r, t).input(e);
}
function Zn() {
    return _t(Br, arguments);
}
function Jn() {
    return _t(Yn, arguments);
}
const Qn = (e)=>{
    try {
        const r = Zn(e), t = r?.formatNational();
        return `+${r?.countryCallingCode} ${t}`;
    } catch  {
        return Jn(e);
    }
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/hooks/usePhoneNumberForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePhoneNumberForm",
    ()=>U
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$isApiError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/isApiError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInProvider.js [app-client] (ecmascript)");
;
;
;
;
const U = ({ submit: t })=>{
    const { state: n, dispatch: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInContext"])(), s = "An error occurred while signing in. Please try again.", a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        o({
            type: "SET_PHONE_NUMBER",
            payload: {
                phoneNumber: e
            }
        });
    }, [
        o
    ]), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async ({ phoneNumber: e, onSuccess: E, onError: m })=>{
        if (!n.isPending) {
            o({
                type: "SUBMIT_PHONE_NUMBER",
                payload: {
                    phoneNumber: e
                }
            });
            try {
                const { flowId: r } = await t(e);
                o({
                    type: "SUBMIT_PHONE_NUMBER_SUCCESS",
                    payload: {
                        flowId: r
                    }
                }), E?.();
            } catch (r) {
                const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$isApiError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isApiError"])(r) ? r : r instanceof Error && r.message || s;
                o({
                    type: "SUBMIT_PHONE_NUMBER_FAILURE",
                    payload: {
                        error: c
                    }
                }), console.error(r), m?.(c);
            }
        }
    }, [
        o,
        n.isPending,
        t
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            setPhoneNumber: a,
            submitPhoneNumber: i
        }), [
        a,
        i
    ]);
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/flows/SignInWithSms.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInWithSms",
    ()=>ne,
    "SignInWithSmsDescription",
    ()=>oe,
    "SignInWithSmsTitle",
    ()=>te,
    "config",
    ()=>Pe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index11$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index11.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$OTPForm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/OTPForm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$PhoneNumberForm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/forms/PhoneNumberForm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchSlideTransition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/SwitchSlideTransition/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$formatPhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/formatPhoneNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$parseValuesFromPhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/parseValuesFromPhoneNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$hooks$2f$useOTPForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/hooks/useOTPForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$hooks$2f$usePhoneNumberForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/hooks/usePhoneNumberForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInCredentials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInCredentials.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInProvider.js [app-client] (ecmascript)");
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
const ee = [
    "phoneNumber",
    "otp"
], ne = ({ step: o, autoFocus: s, onSuccess: i, children: a })=>{
    const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), O = 6, { isSignedIn: v } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsSignedIn"])(), { state: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInContext"])(), { signInWithSms: C } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInWithSms"])(), { linkSms: I } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index11$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLinkSms"])(), { verifySmsOTP: y } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVerifySmsOTP"])(), [c, F] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("US"), [m, f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        value: "",
        e164: ""
    }), l = o || n.step, t = l === "credentials" ? "phoneNumber" : "otp", b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t), { setPhoneNumber: R, submitPhoneNumber: S } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$hooks$2f$usePhoneNumberForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePhoneNumberForm"])({
        submit: (e)=>v ? I(e) : C({
                phoneNumber: e
            })
    }), { resendCountdown: w, resetOTP: E, setOTP: W, startResendTimer: x, submitOtp: j } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$hooks$2f$useOTPForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOTPForm"])({
        passwordLength: O,
        submit: (e)=>y({
                flowId: n.flowId,
                otp: e
            })
    }), D = (e)=>{
        e.value !== m.value && (f(e), R(e.e164));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (n.phoneNumber === m.e164) return;
        const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$parseValuesFromPhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseValuesFromPhoneNumber"])(n.phoneNumber, c);
        f(e);
    }, [
        n.phoneNumber,
        c,
        m.e164
    ]);
    const P = ()=>{
        x(60);
    }, L = ()=>{
        E(), S({
            phoneNumber: n.phoneNumber,
            onSuccess: P
        });
    }, k = (e)=>{
        e.preventDefault(), S({
            phoneNumber: n.phoneNumber,
            onSuccess: P
        });
    }, M = (e)=>{
        e.preventDefault(), j({
            otp: n.otp,
            onSuccess: i
        });
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        b.current !== t && (d.current?.transition.toggle(t), b.current = t);
    }, [
        t
    ]), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchSlideTransition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchSlideTransition"], {
        autoFocus: s ? "input[type='tel']" : !1,
        animateHeight: !1,
        items: ee,
        initialEntered: !0,
        direction: t === "otp" ? "left" : "right",
        transitionRef: d,
        children: ({ itemKey: e, ...V })=>{
            let u = null;
            return e === "phoneNumber" && (u = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$PhoneNumberForm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneNumberForm"], {
                countryCode: c,
                error: t === "phoneNumber" && n.error || "",
                isPending: n.isPending,
                onCountryCodeChange: F,
                onPhoneNumberChange: D,
                onSubmit: k,
                phoneNumber: m
            })), e === "otp" && (u = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$forms$2f$OTPForm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OTPForm"], {
                canResetOTP: n.canResetOTP,
                error: t === "otp" && n.error || "",
                isPending: n.isPending,
                onOTPChange: W,
                onResendOTP: L,
                onSubmit: M,
                otp: n.otp,
                resendCountdown: w,
                successMessage: n.isSuccess ? "Success!" : void 0
            })), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ...V,
                children: a ? a({
                    step: l,
                    Form: u
                }) : u
            });
        }
    });
}, te = ({ step: o })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            o === "credentials" && "Sign in",
            o === "verification" && "Enter verification code"
        ]
    }), oe = ({ step: o })=>{
    const { state: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInContext"])(), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$formatPhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPhoneNumber"])(s.phoneNumber), [
        s.phoneNumber
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            o === "credentials" && "We’ll send you a verification code via text.",
            o === "verification" && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Enter the 6 digit code sent to",
                    " ",
                    i ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInCredentials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInCredentials"], {
                        children: i
                    }) : "your phone number"
                ]
            })
        ]
    });
}, Pe = {
    description: oe,
    forms: ne,
    title: te
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/flows/SignInWithOAuth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInWithOAuth",
    ()=>y,
    "SignInWithOAuthDescription",
    ()=>M,
    "SignInWithOAuthTitle",
    ()=>C,
    "config",
    ()=>R
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/CDPReactProvider/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$hooks$2f$useSignInWithOAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/hooks/useSignInWithOAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Button/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$ServerError$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/ServerError/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/capitalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$toOAuthProviderType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/toOAuthProviderType.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const y = ({ step: i, children: r })=>{
    const { authMethods: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppConfig"])(), d = n?.[0], t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$toOAuthProviderType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toOAuthProviderType"])(d), { signInWithOAuth: s, isPending: l, error: u } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$hooks$2f$useSignInWithOAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInWithOAuth"])(), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        t && s(t);
    }, [
        t,
        s
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        t && (o.current = t);
    }, [
        t
    ]);
    const c = o.current ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                fullWidth: !0,
                onClick: g,
                type: "submit",
                isPending: l,
                children: [
                    "Continue with ",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capitalize"])(o.current)
                ]
            }),
            u && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                style: {
                    marginTop: "0.5em"
                },
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$ServerError$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServerError"], {
                    error: u
                })
            })
        ]
    }) : null;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        children: r ? r({
            step: i,
            Form: c
        }) : c
    });
}, C = ()=>"Sign in", M = ()=>{
    const { authMethods: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppConfig"])(), r = i?.[0], n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$toOAuthProviderType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toOAuthProviderType"])(r);
    return `Sign in with your ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capitalize"])(n ?? "")} account.`;
}, R = {
    description: M,
    forms: y,
    title: C
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/index.Bvudzh_y.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>g
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$flows$2f$SignInWithEmail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/flows/SignInWithEmail.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$flows$2f$SignInWithSms$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/flows/SignInWithSms.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$flows$2f$SignInWithOAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/flows/SignInWithOAuth.js [app-client] (ecmascript)");
;
;
;
;
;
;
const s = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuth2ProviderType"]).reduce((o, r)=>(o[`oauth:${r.toLowerCase()}`] = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$flows$2f$SignInWithOAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"], o), {}), g = {
    ...s,
    email: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$flows$2f$SignInWithEmail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"],
    sms: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$flows$2f$SignInWithSms$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInDescription.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInDescription",
    ()=>M
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$index$2e$Bvudzh_y$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/index.Bvudzh_y.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
const u = "SignInDescription-module__description___jZLc6", _ = {
    description: u
}, M = ({ as: n = "p", authMethod: e, children: t, className: p = "", step: r, ...c })=>{
    const { state: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInContext"])(), m = r || o.step, s = e || o.authMethod, a = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$index$2e$Bvudzh_y$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"][s].description;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(n, {
        className: `${_.description} ${p}`,
        ...c,
        children: t || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(a, {
            step: m,
            authMethod: s
        })
    });
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInFooter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInFooter",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$CoinbaseFooter$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/CoinbaseFooter/index.js [app-client] (ecmascript)");
;
;
;
const n = (o)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$CoinbaseFooter$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoinbaseFooter"], {
        ...o
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInForm",
    ()=>B
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchFadeTransition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/SwitchFadeTransition/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$index$2e$Bvudzh_y$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/index.Bvudzh_y.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
const E = {
    "auth-method-wrapper": "SignInForm-module__auth-method-wrapper___uIOAB"
}, B = ({ autoFocus: l = !0, onSuccess: f, step: M, children: g, ...S })=>{
    const { state: r, dispatch: c } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInContext"])(), { authMethods: e } = r, w = M || r.step, m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(r.authMethod), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(e), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), [_, A] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(e || []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        let t = r.authMethod;
        const n = !e?.includes(r.authMethod), o = i.current && i.current.length === e?.length && i.current.some((h, s)=>h !== e?.[s]);
        if ((n || o) && (t = e?.[0]), t && t !== r.authMethod) {
            c({
                type: "SET_AUTH_METHOD",
                payload: {
                    authMethod: t
                }
            });
            return;
        }
        u.current?.transition && t && m.current !== t && (u.current.transition.toggle(t), m.current = t);
    }, [
        e,
        c,
        r.authMethod
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        i.current = e, A((t)=>{
            const n = e?.filter((o)=>!t.includes(o)) || [];
            return n.length ? [
                ...t,
                ...n
            ] : t;
        });
    }, [
        e
    ]), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$SwitchFadeTransition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchFadeTransition"], {
        animateHeight: !0,
        timeout: 250,
        items: _,
        initialEntered: !0,
        transitionRef: u,
        ...S,
        children: ({ itemKey: t, ...n })=>{
            const o = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$index$2e$Bvudzh_y$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"][t].forms;
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ...n,
                className: E["auth-method-wrapper"],
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(o, {
                    autoFocus: l,
                    step: w,
                    onSuccess: f,
                    children: ({ step: h, Form: s })=>g?.({
                            step: h,
                            authMethod: t,
                            Form: s
                        }) || s
                })
            });
        }
    });
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInImage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInImage",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/CDPReactProvider/index.js [app-client] (ecmascript)");
;
;
;
const a = "SignInImage-module__logo___rlzt-", m = {
    logo: a
}, p = (t)=>/^https?:\/\//.test(t), f = ({ className: t = "", alt: n, src: g })=>{
    const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppConfig"])(), s = o.appLogoUrl && p(o.appLogoUrl) ? o.appLogoUrl : void 0, l = g && p(g) ? g : s, r = n || o.appName || "";
    return l ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("img", {
        src: l,
        alt: r || "",
        className: `${m.logo} ${t}`,
        width: 64,
        height: 64
    }) : null;
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInTitle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInTitle",
    ()=>S
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$index$2e$Bvudzh_y$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/index.Bvudzh_y.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
const l = "SignInTitle-module__heading___QJ071", g = {
    heading: l
}, S = ({ as: s = "h2", children: t, className: i = "", authMethod: a, step: h, ...m })=>{
    const { state: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInContext"])(), r = h || o.step, e = a || o.authMethod, p = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$index$2e$Bvudzh_y$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"][e].title;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(s, {
        className: `${g.heading} ${i}`,
        ...m,
        children: t || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(p, {
            step: r,
            authMethod: e
        })
    });
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignIn",
    ()=>V
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$useSendComponentCallOnce$2e$BHZMuo6E$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/useSendComponentCallOnce.BHZMuo6E.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/CDPReactProvider/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInAuthMethodButtons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInAuthMethodButtons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInBackButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInBackButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInDescription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInDescription.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInFooter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInFooter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInTitle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
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
const F = "SignIn-module__footer___3Gkbc", t = {
    "sign-in": "SignIn-module__sign-in___cYpee",
    "title-desc-wrapper": "SignIn-module__title-desc-wrapper___VpPcA",
    "back-button": "SignIn-module__back-button___bmE-y",
    "back-button-wrapper": "SignIn-module__back-button-wrapper___Q9FA1",
    footer: F
}, N = ({ className: e = "", children: o, onSuccess: p, ...a })=>{
    const { state: _ } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignInContext"])(), { showCoinbaseFooter: g } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppConfig"])(), s = typeof o == "function" ? o(_) : o;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: `${t["sign-in"]} ${e}`,
        ...a,
        children: [
            s,
            !s && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: t["back-button-wrapper"],
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInBackButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInBackButton"], {
                            className: t["back-button"]
                        })
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInImage"], {}),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInForm"], {
                        onSuccess: p,
                        children: ({ authMethod: i, step: m, Form: l })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                        className: t["title-desc-wrapper"],
                                        children: [
                                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInTitle"], {
                                                step: m,
                                                authMethod: i
                                            }),
                                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInDescription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInDescription"], {
                                                step: m,
                                                authMethod: i
                                            })
                                        ]
                                    }),
                                    l,
                                    m === "credentials" && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInAuthMethodButtons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInAuthMethodButtons"], {
                                        activeMethod: i
                                    })
                                ]
                            })
                    }),
                    g && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInFooter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInFooter"], {
                        className: t.footer
                    })
                ]
            })
        ]
    });
}, V = ({ authMethods: e, ...o })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$useSendComponentCallOnce$2e$BHZMuo6E$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])("sign_in"), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInProvider"], {
        authMethods: e,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(N, {
            ...o
        })
    }));
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/childrenHasComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "childrenHasComponent",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const a = (r)=>typeof r == "object" && r !== null && "children" in r && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(r.children) || Array.isArray(r.children)), o = 10, s = (r, n, i = 0)=>i >= o ? !1 : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(r).some((e)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(e)) {
            if (e.type === n) return !0;
            if (a(e.props)) return s(e.props.children, n, i + 1);
        }
        return !1;
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignInModal/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInModal",
    ()=>mn,
    "SignInModalContent",
    ()=>m,
    "SignInModalTrigger",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$useSendComponentCallOnce$2e$BHZMuo6E$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/useSendComponentCallOnce.BHZMuo6E.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$lite$2e$1fxw3LjI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/lite.1fxw3LjI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/CDPReactProvider/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Button/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Modal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/VisuallyHidden/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconXMark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/icons/IconXMark.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$childrenHasComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/utils/childrenHasComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInBackButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInBackButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInTitle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInDescription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInDescription.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInAuthMethodButtons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInAuthMethodButtons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInFooter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignIn/SignInFooter.js [app-client] (ecmascript)");
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
;
const O = "SignInModal-module__trigger___IcJ8x", X = "SignInModal-module__footer___6qEo2", $ = "SignInModal-module__buttons___jhaVn", e = {
    trigger: O,
    "sign-in": "SignInModal-module__sign-in___n05-5",
    "no-footer": "SignInModal-module__no-footer___meSt1",
    "title-desc-wrapper": "SignInModal-module__title-desc-wrapper___--XLa",
    "sign-in-form": "SignInModal-module__sign-in-form___Jzx1-",
    "sign-in-image": "SignInModal-module__sign-in-image___DGg7B",
    footer: X,
    buttons: $,
    "back-button": "SignInModal-module__back-button___nMh2-",
    "close-icon": "SignInModal-module__close-icon___b-gMh"
}, M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null), q = ()=>{
    const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(M);
    if (!i) throw new Error("useSignInModalContext must be used within a SignInModal");
    return i;
}, p = ({ children: i, className: o = "", label: s, ...r })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalTrigger"], {
        asChild: !0,
        children: i || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$lite$2e$1fxw3LjI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(e.trigger, o),
            ...r,
            children: s || "Sign in"
        })
    }), m = (i)=>{
    const { showCoinbaseFooter: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$CDPReactProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppConfig"])(), { authMethods: s, onSuccess: r } = q();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalContent"], {
        ...i,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignIn"], {
            authMethods: s,
            onSuccess: r,
            className: `${e["sign-in"]} ${o ? "" : e["no-footer"]}`,
            ...i,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(G, {}),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: e.buttons,
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInBackButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInBackButton"], {
                                className: e["back-button"]
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalClose"], {
                                asChild: !0,
                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "aria-label": "Close",
                                    size: "md",
                                    variant: "transparentSecondary",
                                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$icons$2f$IconXMark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconXMark"], {
                                        className: e["close-icon"]
                                    })
                                })
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: e["sign-in-image"],
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInImage"], {})
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInForm"], {
                        onSuccess: r,
                        children: ({ authMethod: l, step: a, Form: d })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                        className: e["title-desc-wrapper"],
                                        children: [
                                            a === "verification" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
                                                as: "div",
                                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInTitle"], {})
                                            }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInTitle"], {}),
                                            a === "credentials" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
                                                as: "div",
                                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInDescription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInDescription"], {
                                                    authMethod: l
                                                })
                                            }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInDescription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInDescription"], {
                                                authMethod: l
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: e["sign-in-form"],
                                        children: d
                                    }),
                                    a === "credentials" && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInAuthMethodButtons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInAuthMethodButtons"], {
                                        activeMethod: l
                                    })
                                ]
                            })
                    }),
                    o && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInFooter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInFooter"], {
                        className: e.footer
                    })
                ]
            })
        })
    });
}, mn = ({ authMethods: i, children: o, open: s, setIsOpen: r, onSuccess: l })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$useSendComponentCallOnce$2e$BHZMuo6E$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])("sign_in_modal");
    const a = o ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$childrenHasComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["childrenHasComponent"])(o, p) : !1, d = o ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$utils$2f$childrenHasComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["childrenHasComponent"])(o, m) : !1, S = !a && !d, I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            authMethods: i,
            onSuccess: l
        }), [
        i,
        l
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(M.Provider, {
        value: I,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            open: s,
            onOpenChange: r,
            children: S ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(p, {
                        children: o
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(m, {})
                ]
            }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    o,
                    !d && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(m, {})
                ]
            })
        })
    });
}, G = ()=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$VisuallyHidden$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalTitle"], {
                asChild: !0,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInTitle"], {
                    as: "span"
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalDescription"], {
                asChild: !0,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignIn$2f$SignInDescription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInDescription"], {
                    as: "span"
                })
            })
        ]
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignOutButton/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignOutButton",
    ()=>d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$useSendComponentCallOnce$2e$BHZMuo6E$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/useSendComponentCallOnce.BHZMuo6E.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$lite$2e$1fxw3LjI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/lite.1fxw3LjI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/Button/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const g = {
    "sign-out-button": "SignOutButton-module__sign-out-button___qiybe"
}, d = ({ children: o, className: n = "", onSuccess: u, ...t })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$useSendComponentCallOnce$2e$BHZMuo6E$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])("sign_out_button");
    const { signOut: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignOut"])(), s = async ()=>{
        await i(), u?.();
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$Button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        className: t.asChild ? "" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$lite$2e$1fxw3LjI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(g["sign-out-button"], n),
        onClick: s,
        ...t,
        children: o || "Sign out"
    });
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/LoadingSkeleton/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingSkeleton",
    ()=>r
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const i = "LoadingSkeleton-module__loading___kqndV", t = {
    loading: i
}, r = ({ as: o = "div", children: n, className: a = "", style: d })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(o, {
        "aria-hidden": "true",
        className: `${t.loading} ${a}`,
        style: d,
        children: n
    });
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/AuthButton/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthButton",
    ()=>K
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$useSendComponentCallOnce$2e$BHZMuo6E$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/chunks/useSendComponentCallOnce.BHZMuo6E.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignInModal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignInModal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignOutButton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/SignOutButton/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$LoadingSkeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/ui/LoadingSkeleton/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const F = "AuthButton-module__loading___JpDqi", A = {
    loading: F
}, K = ({ children: d, closeOnSuccessDelay: S = 800, onSignInSuccess: g, onSignInSuccessTransitionEnd: p, onSignOutSuccess: h, placeholder: I, signInModal: O, signOutButton: _, ...b })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$chunks$2f$useSendComponentCallOnce$2e$BHZMuo6E$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])("auth_button");
    const { isInitialized: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsInitialized"])(), { isSignedIn: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsSignedIn"])(), [l, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(r), [e, c] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), [i, a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(void 0), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        g?.(), a(S);
    }, [
        S,
        g
    ]), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        h?.(), s(!1);
    }, [
        h
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (i === void 0) return;
        if (i === null) {
            o.current = !0;
            return;
        }
        const t = setTimeout(()=>{
            o.current = !0, c(!1), a(void 0);
        }, i);
        return ()=>{
            t && clearTimeout(t);
        };
    }, [
        i
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (e) return;
        let t = null;
        return o.current && (t = setTimeout(()=>{
            p?.(), o.current = !1, s(!0);
        }, 200)), ()=>{
            t && clearTimeout(t);
        };
    }, [
        e,
        p
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (r) {
            if (o.current) return;
            e ? a((t)=>t === void 0 ? 0 : t) : s(!0);
        } else s(!1);
    }, [
        r,
        e
    ]);
    const v = I ? I({
        className: A.loading
    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$ui$2f$LoadingSkeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSkeleton"], {
        className: A.loading
    }), B = _ ? _({
        onSuccess: T
    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignOutButton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignOutButton"], {
        onSuccess: T
    }), w = O ? O({
        open: e,
        setIsOpen: c,
        onSuccess: C
    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$SignInModal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInModal"], {
        open: e,
        setIsOpen: c,
        onSuccess: C
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ...b,
        children: d ? d({
            isInitialized: n,
            isSignedIn: l,
            Placeholder: v,
            SignOutButton: B,
            SignInModal: w
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                !n && v,
                n && l && B,
                n && !l && w
            ]
        })
    });
};
;
}),
]);

//# sourceMappingURL=9f313_%40coinbase_cdp-react_dist_65e552b4._.js.map