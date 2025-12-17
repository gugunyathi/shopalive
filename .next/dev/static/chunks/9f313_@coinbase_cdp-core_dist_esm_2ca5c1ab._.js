(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web157.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultExportFromCjs",
    ()=>e
]);
function e(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web163.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__module",
    ()=>e
]);
var e = {
    exports: {}
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web180.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__module",
    ()=>r
]);
var r = {
    exports: {}
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web164.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__require",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web180$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web180.js [app-client] (ecmascript)");
;
var h;
function c() {
    return h ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web180$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports : (h = 1, function() {
        var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = {
            // Bit-wise rotation left
            rotl: function(r, t) {
                return r << t | r >>> 32 - t;
            },
            // Bit-wise rotation right
            rotr: function(r, t) {
                return r << 32 - t | r >>> t;
            },
            // Swap big-endian to little-endian and vice versa
            endian: function(r) {
                if (r.constructor == Number) return u.rotl(r, 8) & 16711935 | u.rotl(r, 24) & 4278255360;
                for(var t = 0; t < r.length; t++)r[t] = u.endian(r[t]);
                return r;
            },
            // Generate an array of any length of random bytes
            randomBytes: function(r) {
                for(var t = []; r > 0; r--)t.push(Math.floor(Math.random() * 256));
                return t;
            },
            // Convert a byte array to big-endian 32-bit words
            bytesToWords: function(r) {
                for(var t = [], n = 0, o = 0; n < r.length; n++, o += 8)t[o >>> 5] |= r[n] << 24 - o % 32;
                return t;
            },
            // Convert big-endian 32-bit words to a byte array
            wordsToBytes: function(r) {
                for(var t = [], n = 0; n < r.length * 32; n += 8)t.push(r[n >>> 5] >>> 24 - n % 32 & 255);
                return t;
            },
            // Convert a byte array to a hex string
            bytesToHex: function(r) {
                for(var t = [], n = 0; n < r.length; n++)t.push((r[n] >>> 4).toString(16)), t.push((r[n] & 15).toString(16));
                return t.join("");
            },
            // Convert a hex string to a byte array
            hexToBytes: function(r) {
                for(var t = [], n = 0; n < r.length; n += 2)t.push(parseInt(r.substr(n, 2), 16));
                return t;
            },
            // Convert a byte array to a base-64 string
            bytesToBase64: function(r) {
                for(var t = [], n = 0; n < r.length; n += 3)for(var o = r[n] << 16 | r[n + 1] << 8 | r[n + 2], e = 0; e < 4; e++)n * 8 + e * 6 <= r.length * 8 ? t.push(f.charAt(o >>> 6 * (3 - e) & 63)) : t.push("=");
                return t.join("");
            },
            // Convert a base-64 string to a byte array
            base64ToBytes: function(r) {
                r = r.replace(/[^A-Z0-9+\/]/ig, "");
                for(var t = [], n = 0, o = 0; n < r.length; o = ++n % 4)o != 0 && t.push((f.indexOf(r.charAt(n - 1)) & Math.pow(2, -2 * o + 8) - 1) << o * 2 | f.indexOf(r.charAt(n)) >>> 6 - o * 2);
                return t;
            }
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web180$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports = u;
    }(), __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web180$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web165.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__require",
    ()=>c
]);
var o, u;
function c() {
    if (u) return o;
    u = 1;
    var t = {
        // UTF-8 encoding
        utf8: {
            // Convert a string to a byte array
            stringToBytes: function(n) {
                return t.bin.stringToBytes(unescape(encodeURIComponent(n)));
            },
            // Convert a byte array to a string
            bytesToString: function(n) {
                return decodeURIComponent(escape(t.bin.bytesToString(n)));
            }
        },
        // Binary encoding
        bin: {
            // Convert a string to a byte array
            stringToBytes: function(n) {
                for(var e = [], r = 0; r < n.length; r++)e.push(n.charCodeAt(r) & 255);
                return e;
            },
            // Convert a byte array to a string
            bytesToString: function(n) {
                for(var e = [], r = 0; r < n.length; r++)e.push(String.fromCharCode(n[r]));
                return e.join("");
            }
        }
    };
    return o = t, o;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web166.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ __turbopack_context__.s([
    "__require",
    ()=>t
]);
var f, e;
function t() {
    if (e) return f;
    e = 1, f = function(r) {
        return r != null && (u(r) || n(r) || !!r._isBuffer);
    };
    function u(r) {
        return !!r.constructor && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
    }
    function n(r) {
        return typeof r.readFloatLE == "function" && typeof r.slice == "function" && u(r.slice(0, 0));
    }
    return f;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web162.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__require",
    ()=>G
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web163$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web163.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web164$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web164.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web165$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web165.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web166$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web166.js [app-client] (ecmascript)");
;
;
;
;
var x;
function G() {
    return x ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web163$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports : (x = 1, function() {
        var v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web164$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])(), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web165$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])().utf8, B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web166$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])(), F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web165$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])().bin, d = function(o, f) {
            o.constructor == String ? f && f.encoding === "binary" ? o = F.stringToBytes(o) : o = p.stringToBytes(o) : B(o) ? o = Array.prototype.slice.call(o, 0) : !Array.isArray(o) && o.constructor !== Uint8Array && (o = o.toString());
            for(var u = v.bytesToWords(o), a = o.length * 8, n = 1732584193, r = -271733879, i = -1732584194, t = 271733878, e = 0; e < u.length; e++)u[e] = (u[e] << 8 | u[e] >>> 24) & 16711935 | (u[e] << 24 | u[e] >>> 8) & 4278255360;
            u[a >>> 5] |= 128 << a % 32, u[(a + 64 >>> 9 << 4) + 14] = a;
            for(var _ = d._ff, c = d._gg, l = d._hh, y = d._ii, e = 0; e < u.length; e += 16){
                var T = n, b = r, A = i, I = t;
                n = _(n, r, i, t, u[e + 0], 7, -680876936), t = _(t, n, r, i, u[e + 1], 12, -389564586), i = _(i, t, n, r, u[e + 2], 17, 606105819), r = _(r, i, t, n, u[e + 3], 22, -1044525330), n = _(n, r, i, t, u[e + 4], 7, -176418897), t = _(t, n, r, i, u[e + 5], 12, 1200080426), i = _(i, t, n, r, u[e + 6], 17, -1473231341), r = _(r, i, t, n, u[e + 7], 22, -45705983), n = _(n, r, i, t, u[e + 8], 7, 1770035416), t = _(t, n, r, i, u[e + 9], 12, -1958414417), i = _(i, t, n, r, u[e + 10], 17, -42063), r = _(r, i, t, n, u[e + 11], 22, -1990404162), n = _(n, r, i, t, u[e + 12], 7, 1804603682), t = _(t, n, r, i, u[e + 13], 12, -40341101), i = _(i, t, n, r, u[e + 14], 17, -1502002290), r = _(r, i, t, n, u[e + 15], 22, 1236535329), n = c(n, r, i, t, u[e + 1], 5, -165796510), t = c(t, n, r, i, u[e + 6], 9, -1069501632), i = c(i, t, n, r, u[e + 11], 14, 643717713), r = c(r, i, t, n, u[e + 0], 20, -373897302), n = c(n, r, i, t, u[e + 5], 5, -701558691), t = c(t, n, r, i, u[e + 10], 9, 38016083), i = c(i, t, n, r, u[e + 15], 14, -660478335), r = c(r, i, t, n, u[e + 4], 20, -405537848), n = c(n, r, i, t, u[e + 9], 5, 568446438), t = c(t, n, r, i, u[e + 14], 9, -1019803690), i = c(i, t, n, r, u[e + 3], 14, -187363961), r = c(r, i, t, n, u[e + 8], 20, 1163531501), n = c(n, r, i, t, u[e + 13], 5, -1444681467), t = c(t, n, r, i, u[e + 2], 9, -51403784), i = c(i, t, n, r, u[e + 7], 14, 1735328473), r = c(r, i, t, n, u[e + 12], 20, -1926607734), n = l(n, r, i, t, u[e + 5], 4, -378558), t = l(t, n, r, i, u[e + 8], 11, -2022574463), i = l(i, t, n, r, u[e + 11], 16, 1839030562), r = l(r, i, t, n, u[e + 14], 23, -35309556), n = l(n, r, i, t, u[e + 1], 4, -1530992060), t = l(t, n, r, i, u[e + 4], 11, 1272893353), i = l(i, t, n, r, u[e + 7], 16, -155497632), r = l(r, i, t, n, u[e + 10], 23, -1094730640), n = l(n, r, i, t, u[e + 13], 4, 681279174), t = l(t, n, r, i, u[e + 0], 11, -358537222), i = l(i, t, n, r, u[e + 3], 16, -722521979), r = l(r, i, t, n, u[e + 6], 23, 76029189), n = l(n, r, i, t, u[e + 9], 4, -640364487), t = l(t, n, r, i, u[e + 12], 11, -421815835), i = l(i, t, n, r, u[e + 15], 16, 530742520), r = l(r, i, t, n, u[e + 2], 23, -995338651), n = y(n, r, i, t, u[e + 0], 6, -198630844), t = y(t, n, r, i, u[e + 7], 10, 1126891415), i = y(i, t, n, r, u[e + 14], 15, -1416354905), r = y(r, i, t, n, u[e + 5], 21, -57434055), n = y(n, r, i, t, u[e + 12], 6, 1700485571), t = y(t, n, r, i, u[e + 3], 10, -1894986606), i = y(i, t, n, r, u[e + 10], 15, -1051523), r = y(r, i, t, n, u[e + 1], 21, -2054922799), n = y(n, r, i, t, u[e + 8], 6, 1873313359), t = y(t, n, r, i, u[e + 15], 10, -30611744), i = y(i, t, n, r, u[e + 6], 15, -1560198380), r = y(r, i, t, n, u[e + 13], 21, 1309151649), n = y(n, r, i, t, u[e + 4], 6, -145523070), t = y(t, n, r, i, u[e + 11], 10, -1120210379), i = y(i, t, n, r, u[e + 2], 15, 718787259), r = y(r, i, t, n, u[e + 9], 21, -343485551), n = n + T >>> 0, r = r + b >>> 0, i = i + A >>> 0, t = t + I >>> 0;
            }
            return v.endian([
                n,
                r,
                i,
                t
            ]);
        };
        d._ff = function(o, f, u, a, n, r, i) {
            var t = o + (f & u | ~f & a) + (n >>> 0) + i;
            return (t << r | t >>> 32 - r) + f;
        }, d._gg = function(o, f, u, a, n, r, i) {
            var t = o + (f & a | u & ~a) + (n >>> 0) + i;
            return (t << r | t >>> 32 - r) + f;
        }, d._hh = function(o, f, u, a, n, r, i) {
            var t = o + (f ^ u ^ a) + (n >>> 0) + i;
            return (t << r | t >>> 32 - r) + f;
        }, d._ii = function(o, f, u, a, n, r, i) {
            var t = o + (u ^ (f | ~a)) + (n >>> 0) + i;
            return (t << r | t >>> 32 - r) + f;
        }, d._blocksize = 16, d._digestsize = 16, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web163$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports = function(o, f) {
            if (o == null) throw new Error("Illegal argument " + o);
            var u = v.wordsToBytes(d(o, f));
            return f && f.asBytes ? u : f && f.asString ? F.bytesToString(u) : v.bytesToHex(u);
        };
    }(), __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web163$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web139.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web157$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web157.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web162$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web162.js [app-client] (ecmascript)");
;
;
var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web162$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])();
const a = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web157$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultExportFromCjs"])(t);
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web140.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectFramework",
    ()=>a,
    "getFramework",
    ()=>i
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function n() {
    try {
        return typeof navigator < "u" && navigator.product === "ReactNative";
    } catch  {
        return !1;
    }
}
function r() {
    try {
        if (typeof window > "u") return typeof __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] < "u" && __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && "__NEXT_PROCESSED_ENV" in __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env;
        const e = window;
        return !!(e.__NEXT_DATA__ || e.next || document.getElementById("__next"));
    } catch  {
        return !1;
    }
}
function o() {
    try {
        if (typeof window > "u") return !1;
        const e = window;
        return !!(e.__VUE__ || e.__VUE_DEVTOOLS_GLOBAL_HOOK__ || document.querySelector("[data-v-]"));
    } catch  {
        return !1;
    }
}
function u() {
    try {
        if (typeof window > "u") return !1;
        const e = window;
        return e.__REACT_DEVTOOLS_GLOBAL_HOOK__ || e.React ? !0 : !!document.querySelector("[data-reactroot], [data-reactid], ._reactRoot, ._reactRootContainer");
    } catch  {
        return !1;
    }
}
function a() {
    return u() ? "react" : n() ? "react-native" : r() ? "nextjs" : o() ? "vue" : "unknown";
}
let t = null;
function i() {
    return t === null && (t = a()), t;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web139$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web139.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web140$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web140.js [app-client] (ecmascript)");
;
;
const y = "1f8d3e558f493e38a037dbfadb8ba344", v = "d473b1dcc969105adab157226cd9cf63", i = Symbol.for("@coinbase/cdp-analytics");
function g() {
    const t = globalThis;
    return t[i] || (t[i] = {
        identifier: "",
        enabled: !0,
        isProduction: !1,
        isUsingMocks: !1,
        sendEvent: o,
        sendActionCallEvent: (e)=>o({
                ...e,
                type: "action_call"
            }),
        sendHookCallEvent: (e)=>o({
                ...e,
                type: "hook_call"
            }),
        sendComponentCallEvent: (e)=>o({
                ...e,
                type: "component_call"
            }),
        versionRegistry: {},
        registerPackageVersion: (e, s)=>{
            n.versionRegistry[e] = s;
        }
    }), t[i];
}
const n = g();
async function o(t) {
    if (!n.enabled || !n.identifier) return;
    const e = Date.now(), r = [
        {
            user_id: n.identifier,
            event_type: t.type,
            platform: c() ? "web" : "native",
            timestamp: e,
            event_properties: {
                project_name: "cdp-embedded-wallet",
                framework: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web140$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFramework"])(),
                isLocalHost: u(),
                isUsingMocks: n.isUsingMocks,
                package_versions: n.versionRegistry,
                ...t
            }
        }
    ], a = JSON.stringify(r), d = e.toString(), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web139$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(a + d), f = {
        client: n.isProduction ? v : y,
        e: a,
        checksum: l
    };
    await fetch("https://cca-lite.coinbase.com/amp", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(f)
    });
}
function c() {
    return typeof window < "u" && typeof document < "u";
}
function u() {
    return c() ? window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" : !1;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web159.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__module",
    ()=>e
]);
var e = {
    exports: {}
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web178.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__exports",
    ()=>r
]);
var r = {};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web160.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__require",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web178.js [app-client] (ecmascript)");
;
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/ var $;
function X() {
    if ($) return __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"];
    $ = 1;
    var E = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), U = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), C = Symbol.iterator;
    function D(t) {
        return t === null || typeof t != "object" ? null : (t = C && t[C] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var w = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, A = Object.assign, S = {};
    function _(t, e, n) {
        this.props = t, this.context = e, this.refs = S, this.updater = n || w;
    }
    _.prototype.isReactComponent = {}, _.prototype.setState = function(t, e) {
        if (typeof t != "object" && typeof t != "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, t, e, "setState");
    }, _.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate");
    };
    function h() {}
    h.prototype = _.prototype;
    function y(t, e, n) {
        this.props = t, this.context = e, this.refs = S, this.updater = n || w;
    }
    var v = y.prototype = new h();
    v.constructor = y, A(v, _.prototype), v.isPureReactComponent = !0;
    var g = Array.isArray, i = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }, O = Object.prototype.hasOwnProperty;
    function R(t, e, n, r, s, f) {
        return n = f.ref, {
            $$typeof: E,
            type: t,
            key: e,
            ref: n !== void 0 ? n : null,
            props: f
        };
    }
    function q(t, e) {
        return R(t.type, e, void 0, void 0, void 0, t.props);
    }
    function T(t) {
        return typeof t == "object" && t !== null && t.$$typeof === E;
    }
    function z(t) {
        var e = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + t.replace(/[=:]/g, function(n) {
            return e[n];
        });
    }
    var H = /\/+/g;
    function m(t, e) {
        return typeof t == "object" && t !== null && t.key != null ? z("" + t.key) : e.toString(36);
    }
    function j() {}
    function G(t) {
        switch(t.status){
            case "fulfilled":
                return t.value;
            case "rejected":
                throw t.reason;
            default:
                switch(typeof t.status == "string" ? t.then(j, j) : (t.status = "pending", t.then(function(e) {
                    t.status === "pending" && (t.status = "fulfilled", t.value = e);
                }, function(e) {
                    t.status === "pending" && (t.status = "rejected", t.reason = e);
                })), t.status){
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw t.reason;
                }
        }
        throw t;
    }
    function a(t, e, n, r, s) {
        var f = typeof t;
        (f === "undefined" || f === "boolean") && (t = null);
        var u = !1;
        if (t === null) u = !0;
        else switch(f){
            case "bigint":
            case "string":
            case "number":
                u = !0;
                break;
            case "object":
                switch(t.$$typeof){
                    case E:
                    case N:
                        u = !0;
                        break;
                    case d:
                        return u = t._init, a(u(t._payload), e, n, r, s);
                }
        }
        if (u) return s = s(t), u = r === "" ? "." + m(t, 0) : r, g(s) ? (n = "", u != null && (n = u.replace(H, "$&/") + "/"), a(s, e, n, "", function(W) {
            return W;
        })) : s != null && (T(s) && (s = q(s, n + (s.key == null || t && t.key === s.key ? "" : ("" + s.key).replace(H, "$&/") + "/") + u)), e.push(s)), 1;
        u = 0;
        var p = r === "" ? "." : r + ":";
        if (g(t)) for(var c = 0; c < t.length; c++)r = t[c], f = p + m(r, c), u += a(r, e, n, f, s);
        else if (c = D(t), typeof c == "function") for(t = c.call(t), c = 0; !(r = t.next()).done;)r = r.value, f = p + m(r, c++), u += a(r, e, n, f, s);
        else if (f === "object") {
            if (typeof t.then == "function") return a(G(t), e, n, r, s);
            throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
        }
        return u;
    }
    function l(t, e, n) {
        if (t == null) return t;
        var r = [], s = 0;
        return a(t, r, "", "", function(f) {
            return e.call(n, f, s++);
        }), r;
    }
    function K(t) {
        if (t._status === -1) {
            var e = t._result;
            e = e(), e.then(function(n) {
                (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n);
            }, function(n) {
                (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n);
            }), t._status === -1 && (t._status = 0, t._result = e);
        }
        if (t._status === 1) return t._result.default;
        throw t._result;
    }
    var P = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e)) return;
        } else if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] == "object" && typeof __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit == "function") {
            __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("uncaughtException", t);
            return;
        }
        console.error(t);
    };
    function B() {}
    return __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].Children = {
        map: l,
        forEach: function(t, e, n) {
            l(t, function() {
                e.apply(this, arguments);
            }, n);
        },
        count: function(t) {
            var e = 0;
            return l(t, function() {
                e++;
            }), e;
        },
        toArray: function(t) {
            return l(t, function(e) {
                return e;
            }) || [];
        },
        only: function(t) {
            if (!T(t)) throw Error("React.Children.only expected to receive a single React element child.");
            return t;
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].Component = _, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].Fragment = M, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].Profiler = I, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].PureComponent = y, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].StrictMode = Y, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].Suspense = x, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(t) {
            return i.H.useMemoCache(t);
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].cache = function(t) {
        return function() {
            return t.apply(null, arguments);
        };
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].cloneElement = function(t, e, n) {
        if (t == null) throw Error("The argument must be a React element, but you passed " + t + ".");
        var r = A({}, t.props), s = t.key, f = void 0;
        if (e != null) for(u in e.ref !== void 0 && (f = void 0), e.key !== void 0 && (s = "" + e.key), e)!O.call(e, u) || u === "key" || u === "__self" || u === "__source" || u === "ref" && e.ref === void 0 || (r[u] = e[u]);
        var u = arguments.length - 2;
        if (u === 1) r.children = n;
        else if (1 < u) {
            for(var p = Array(u), c = 0; c < u; c++)p[c] = arguments[c + 2];
            r.children = p;
        }
        return R(t.type, s, void 0, void 0, f, r);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].createContext = function(t) {
        return t = {
            $$typeof: U,
            _currentValue: t,
            _currentValue2: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, t.Provider = t, t.Consumer = {
            $$typeof: L,
            _context: t
        }, t;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].createElement = function(t, e, n) {
        var r, s = {}, f = null;
        if (e != null) for(r in e.key !== void 0 && (f = "" + e.key), e)O.call(e, r) && r !== "key" && r !== "__self" && r !== "__source" && (s[r] = e[r]);
        var u = arguments.length - 2;
        if (u === 1) s.children = n;
        else if (1 < u) {
            for(var p = Array(u), c = 0; c < u; c++)p[c] = arguments[c + 2];
            s.children = p;
        }
        if (t && t.defaultProps) for(r in u = t.defaultProps, u)s[r] === void 0 && (s[r] = u[r]);
        return R(t, f, void 0, void 0, null, s);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].createRef = function() {
        return {
            current: null
        };
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].forwardRef = function(t) {
        return {
            $$typeof: k,
            render: t
        };
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].isValidElement = T, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].lazy = function(t) {
        return {
            $$typeof: d,
            _payload: {
                _status: -1,
                _result: t
            },
            _init: K
        };
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].memo = function(t, e) {
        return {
            $$typeof: b,
            type: t,
            compare: e === void 0 ? null : e
        };
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].startTransition = function(t) {
        var e = i.T, n = {};
        i.T = n;
        try {
            var r = t(), s = i.S;
            s !== null && s(n, r), typeof r == "object" && r !== null && typeof r.then == "function" && r.then(B, P);
        } catch (f) {
            P(f);
        } finally{
            i.T = e;
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].unstable_useCacheRefresh = function() {
        return i.H.useCacheRefresh();
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].use = function(t) {
        return i.H.use(t);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useActionState = function(t, e, n) {
        return i.H.useActionState(t, e, n);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useCallback = function(t, e) {
        return i.H.useCallback(t, e);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useContext = function(t) {
        return i.H.useContext(t);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useDebugValue = function() {}, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useDeferredValue = function(t, e) {
        return i.H.useDeferredValue(t, e);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useEffect = function(t, e, n) {
        var r = i.H;
        if (typeof n == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return r.useEffect(t, e);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useId = function() {
        return i.H.useId();
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useImperativeHandle = function(t, e, n) {
        return i.H.useImperativeHandle(t, e, n);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useInsertionEffect = function(t, e) {
        return i.H.useInsertionEffect(t, e);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useLayoutEffect = function(t, e) {
        return i.H.useLayoutEffect(t, e);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useMemo = function(t, e) {
        return i.H.useMemo(t, e);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useOptimistic = function(t, e) {
        return i.H.useOptimistic(t, e);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useReducer = function(t, e, n) {
        return i.H.useReducer(t, e, n);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useRef = function(t) {
        return i.H.useRef(t);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useState = function(t) {
        return i.H.useState(t);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useSyncExternalStore = function(t, e, n) {
        return i.H.useSyncExternalStore(t, e, n);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useTransition = function() {
        return i.H.useTransition();
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].version = "19.1.2", __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"];
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web179.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__module",
    ()=>e
]);
var e = {
    exports: {}
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web161.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__require",
    ()=>De
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web179$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web179.js [app-client] (ecmascript)");
;
/**
* @license React
* react.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web179$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports;
var _e;
function De() {
    return _e ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web179$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports : (_e = 1, function(P, u) {
        ("TURBOPACK compile-time value", "development") !== "production" && function() {
            function ye(e, t) {
                Object.defineProperty(h.prototype, e, {
                    get: function() {
                        console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
                    }
                });
            }
            function ve(e) {
                return e === null || typeof e != "object" ? null : (e = ne && e[ne] || e["@@iterator"], typeof e == "function" ? e : null);
            }
            function N(e, t) {
                e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
                var r = e + "." + t;
                oe[r] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, e), oe[r] = !0);
            }
            function h(e, t, r) {
                this.props = e, this.context = t, this.refs = z, this.updater = r || ue;
            }
            function G() {}
            function M(e, t, r) {
                this.props = e, this.context = t, this.refs = z, this.updater = r || ue;
            }
            function Q(e) {
                return "" + e;
            }
            function E(e) {
                try {
                    Q(e);
                    var t = !1;
                } catch  {
                    t = !0;
                }
                if (t) {
                    t = console;
                    var r = t.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
                    return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", n), Q(e);
                }
            }
            function w(e) {
                if (e == null) return null;
                if (typeof e == "function") return e.$$typeof === Ce ? null : e.displayName || e.name || null;
                if (typeof e == "string") return e;
                switch(e){
                    case U:
                        return "Fragment";
                    case x:
                        return "Profiler";
                    case J:
                        return "StrictMode";
                    case re:
                        return "Suspense";
                    case Se:
                        return "SuspenseList";
                    case Ae:
                        return "Activity";
                }
                if (typeof e == "object") switch(typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof){
                    case Z:
                        return "Portal";
                    case ee:
                        return (e.displayName || "Context") + ".Provider";
                    case q:
                        return (e._context.displayName || "Context") + ".Consumer";
                    case te:
                        var t = e.render;
                        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                    case W:
                        return t = e.displayName || null, t !== null ? t : w(e.type) || "Memo";
                    case T:
                        t = e._payload, e = e._init;
                        try {
                            return w(e(t));
                        } catch  {}
                }
                return null;
            }
            function B(e) {
                if (e === U) return "<>";
                if (typeof e == "object" && e !== null && e.$$typeof === T) return "<...>";
                try {
                    var t = w(e);
                    return t ? "<" + t + ">" : "<...>";
                } catch  {
                    return "<...>";
                }
            }
            function K() {
                var e = i.A;
                return e === null ? null : e.getOwner();
            }
            function F() {
                return Error("react-stack-top-frame");
            }
            function X(e) {
                if (S.call(e, "key")) {
                    var t = Object.getOwnPropertyDescriptor(e, "key").get;
                    if (t && t.isReactWarning) return !1;
                }
                return e.key !== void 0;
            }
            function Ee(e, t) {
                function r() {
                    ce || (ce = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
                }
                r.isReactWarning = !0, Object.defineProperty(e, "key", {
                    get: r,
                    configurable: !0
                });
            }
            function we() {
                var e = w(this.type);
                return le[e] || (le[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e !== void 0 ? e : null;
            }
            function L(e, t, r, n, o, c, a, f) {
                return r = c.ref, e = {
                    $$typeof: Y,
                    type: e,
                    key: t,
                    props: c,
                    _owner: o
                }, (r !== void 0 ? r : null) !== null ? Object.defineProperty(e, "ref", {
                    enumerable: !1,
                    get: we
                }) : Object.defineProperty(e, "ref", {
                    enumerable: !1,
                    value: null
                }), e._store = {}, Object.defineProperty(e._store, "validated", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(e, "_debugInfo", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: null
                }), Object.defineProperty(e, "_debugStack", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: a
                }), Object.defineProperty(e, "_debugTask", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: f
                }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
            }
            function be(e, t) {
                return t = L(e.type, t, void 0, void 0, e._owner, e.props, e._debugStack, e._debugTask), e._store && (t._store.validated = e._store.validated), t;
            }
            function m(e) {
                return typeof e == "object" && e !== null && e.$$typeof === Y;
            }
            function Re(e) {
                var t = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + e.replace(/[=:]/g, function(r) {
                    return t[r];
                });
            }
            function D(e, t) {
                return typeof e == "object" && e !== null && e.key != null ? (E(e.key), Re("" + e.key)) : t.toString(36);
            }
            function V() {}
            function Oe(e) {
                switch(e.status){
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        throw e.reason;
                    default:
                        switch(typeof e.status == "string" ? e.then(V, V) : (e.status = "pending", e.then(function(t) {
                            e.status === "pending" && (e.status = "fulfilled", e.value = t);
                        }, function(t) {
                            e.status === "pending" && (e.status = "rejected", e.reason = t);
                        })), e.status){
                            case "fulfilled":
                                return e.value;
                            case "rejected":
                                throw e.reason;
                        }
                }
                throw e;
            }
            function g(e, t, r, n, o) {
                var c = typeof e;
                (c === "undefined" || c === "boolean") && (e = null);
                var a = !1;
                if (e === null) a = !0;
                else switch(c){
                    case "bigint":
                    case "string":
                    case "number":
                        a = !0;
                        break;
                    case "object":
                        switch(e.$$typeof){
                            case Y:
                            case Z:
                                a = !0;
                                break;
                            case T:
                                return a = e._init, g(a(e._payload), t, r, n, o);
                        }
                }
                if (a) {
                    a = e, o = o(a);
                    var f = n === "" ? "." + D(a, 0) : n;
                    return se(o) ? (r = "", f != null && (r = f.replace(pe, "$&/") + "/"), g(o, t, r, "", function(p) {
                        return p;
                    })) : o != null && (m(o) && (o.key != null && (a && a.key === o.key || E(o.key)), r = be(o, r + (o.key == null || a && a.key === o.key ? "" : ("" + o.key).replace(pe, "$&/") + "/") + f), n !== "" && a != null && m(a) && a.key == null && a._store && !a._store.validated && (r._store.validated = 2), o = r), t.push(o)), 1;
                }
                if (a = 0, f = n === "" ? "." : n + ":", se(e)) for(var s = 0; s < e.length; s++)n = e[s], c = f + D(n, s), a += g(n, t, r, c, o);
                else if (s = ve(e), typeof s == "function") for(s === e.entries && (de || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), de = !0), e = s.call(e), s = 0; !(n = e.next()).done;)n = n.value, c = f + D(n, s++), a += g(n, t, r, c, o);
                else if (c === "object") {
                    if (typeof e.then == "function") return g(Oe(e), t, r, n, o);
                    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                }
                return a;
            }
            function b(e, t, r) {
                if (e == null) return e;
                var n = [], o = 0;
                return g(e, n, "", "", function(c) {
                    return t.call(r, c, o++);
                }), n;
            }
            function Te(e) {
                if (e._status === -1) {
                    var t = e._result;
                    t = t(), t.then(function(r) {
                        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
                    }, function(r) {
                        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
                    }), e._status === -1 && (e._status = 0, e._result = t);
                }
                if (e._status === 1) return t = e._result, t === void 0 && console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, t), "default" in t || console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, t), t.default;
                throw e._result;
            }
            function l() {
                var e = i.H;
                return e === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
            }
            function ke() {}
            function R(e) {
                if (A === null) try {
                    var t = ("require" + Math.random()).slice(0, 7);
                    A = (P && P[t]).call(P, "timers").setImmediate;
                } catch  {
                    A = function(n) {
                        me === !1 && (me = !0, typeof MessageChannel > "u" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
                        var o = new MessageChannel();
                        o.port1.onmessage = n, o.port2.postMessage(void 0);
                    };
                }
                return A(e);
            }
            function y(e) {
                return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
            }
            function O(e, t) {
                t !== C - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), C = t;
            }
            function $(e, t, r) {
                var n = i.actQueue;
                if (n !== null) if (n.length !== 0) try {
                    I(n), R(function() {
                        return $(e, t, r);
                    });
                    return;
                } catch (o) {
                    i.thrownErrors.push(o);
                }
                else i.actQueue = null;
                0 < i.thrownErrors.length ? (n = y(i.thrownErrors), i.thrownErrors.length = 0, r(n)) : t(e);
            }
            function I(e) {
                if (!H) {
                    H = !0;
                    var t = 0;
                    try {
                        for(; t < e.length; t++){
                            var r = e[t];
                            do {
                                i.didUsePromise = !1;
                                var n = r(!1);
                                if (n !== null) {
                                    if (i.didUsePromise) {
                                        e[t] = r, e.splice(0, t);
                                        return;
                                    }
                                    r = n;
                                } else break;
                            }while (!0)
                        }
                        e.length = 0;
                    } catch (o) {
                        e.splice(0, t + 1), i.thrownErrors.push(o);
                    } finally{
                        H = !1;
                    }
                }
            }
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
            var Y = Symbol.for("react.transitional.element"), Z = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), ee = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), Ae = Symbol.for("react.activity"), ne = Symbol.iterator, oe = {}, ue = {
                isMounted: function() {
                    return !1;
                },
                enqueueForceUpdate: function(e) {
                    N(e, "forceUpdate");
                },
                enqueueReplaceState: function(e) {
                    N(e, "replaceState");
                },
                enqueueSetState: function(e) {
                    N(e, "setState");
                }
            }, ae = Object.assign, z = {};
            Object.freeze(z), h.prototype.isReactComponent = {}, h.prototype.setState = function(e, t) {
                if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState");
            }, h.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            };
            var d = {
                isMounted: [
                    "isMounted",
                    "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
                ],
                replaceState: [
                    "replaceState",
                    "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
                ]
            }, k;
            for(k in d)d.hasOwnProperty(k) && ye(k, d[k]);
            G.prototype = h.prototype, d = M.prototype = new G(), d.constructor = M, ae(d, h.prototype), d.isPureReactComponent = !0;
            var se = Array.isArray, Ce = Symbol.for("react.client.reference"), i = {
                H: null,
                A: null,
                T: null,
                S: null,
                V: null,
                actQueue: null,
                isBatchingLegacy: !1,
                didScheduleLegacyUpdate: !1,
                didUsePromise: !1,
                thrownErrors: [],
                getCurrentStack: null,
                recentlyCreatedOwnerStacks: 0
            }, S = Object.prototype.hasOwnProperty, ie = console.createTask ? console.createTask : function() {
                return null;
            };
            d = {
                react_stack_bottom_frame: function(e) {
                    return e();
                }
            };
            var ce, fe, le = {}, je = d.react_stack_bottom_frame.bind(d, F)(), Pe = ie(B(F)), de = !1, pe = /\/+/g, he = typeof reportError == "function" ? reportError : function(e) {
                if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                    var t = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                        error: e
                    });
                    if (!window.dispatchEvent(t)) return;
                } else if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] == "object" && typeof __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit == "function") {
                    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("uncaughtException", e);
                    return;
                }
                console.error(e);
            }, me = !1, A = null, C = 0, j = !1, H = !1, ge = typeof queueMicrotask == "function" ? function(e) {
                queueMicrotask(function() {
                    return queueMicrotask(e);
                });
            } : R;
            d = Object.freeze({
                __proto__: null,
                c: function(e) {
                    return l().useMemoCache(e);
                }
            }), u.Children = {
                map: b,
                forEach: function(e, t, r) {
                    b(e, function() {
                        t.apply(this, arguments);
                    }, r);
                },
                count: function(e) {
                    var t = 0;
                    return b(e, function() {
                        t++;
                    }), t;
                },
                toArray: function(e) {
                    return b(e, function(t) {
                        return t;
                    }) || [];
                },
                only: function(e) {
                    if (!m(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e;
                }
            }, u.Component = h, u.Fragment = U, u.Profiler = x, u.PureComponent = M, u.StrictMode = J, u.Suspense = re, u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, u.__COMPILER_RUNTIME = d, u.act = function(e) {
                var t = i.actQueue, r = C;
                C++;
                var n = i.actQueue = t !== null ? t : [], o = !1;
                try {
                    var c = e();
                } catch (s) {
                    i.thrownErrors.push(s);
                }
                if (0 < i.thrownErrors.length) throw O(t, r), e = y(i.thrownErrors), i.thrownErrors.length = 0, e;
                if (c !== null && typeof c == "object" && typeof c.then == "function") {
                    var a = c;
                    return ge(function() {
                        o || j || (j = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
                    }), {
                        then: function(s, p) {
                            o = !0, a.then(function(_) {
                                if (O(t, r), r === 0) {
                                    try {
                                        I(n), R(function() {
                                            return $(_, s, p);
                                        });
                                    } catch (Me) {
                                        i.thrownErrors.push(Me);
                                    }
                                    if (0 < i.thrownErrors.length) {
                                        var Ne = y(i.thrownErrors);
                                        i.thrownErrors.length = 0, p(Ne);
                                    }
                                } else s(_);
                            }, function(_) {
                                O(t, r), 0 < i.thrownErrors.length && (_ = y(i.thrownErrors), i.thrownErrors.length = 0), p(_);
                            });
                        }
                    };
                }
                var f = c;
                if (O(t, r), r === 0 && (I(n), n.length !== 0 && ge(function() {
                    o || j || (j = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
                }), i.actQueue = null), 0 < i.thrownErrors.length) throw e = y(i.thrownErrors), i.thrownErrors.length = 0, e;
                return {
                    then: function(s, p) {
                        o = !0, r === 0 ? (i.actQueue = n, R(function() {
                            return $(f, s, p);
                        })) : s(f);
                    }
                };
            }, u.cache = function(e) {
                return function() {
                    return e.apply(null, arguments);
                };
            }, u.captureOwnerStack = function() {
                var e = i.getCurrentStack;
                return e === null ? null : e();
            }, u.cloneElement = function(e, t, r) {
                if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
                var n = ae({}, e.props), o = e.key, c = e._owner;
                if (t != null) {
                    var a;
                    e: {
                        if (S.call(t, "ref") && (a = Object.getOwnPropertyDescriptor(t, "ref").get) && a.isReactWarning) {
                            a = !1;
                            break e;
                        }
                        a = t.ref !== void 0;
                    }
                    a && (c = K()), X(t) && (E(t.key), o = "" + t.key);
                    for(f in t)!S.call(t, f) || f === "key" || f === "__self" || f === "__source" || f === "ref" && t.ref === void 0 || (n[f] = t[f]);
                }
                var f = arguments.length - 2;
                if (f === 1) n.children = r;
                else if (1 < f) {
                    a = Array(f);
                    for(var s = 0; s < f; s++)a[s] = arguments[s + 2];
                    n.children = a;
                }
                for(n = L(e.type, o, void 0, void 0, c, n, e._debugStack, e._debugTask), o = 2; o < arguments.length; o++)c = arguments[o], m(c) && c._store && (c._store.validated = 1);
                return n;
            }, u.createContext = function(e) {
                return e = {
                    $$typeof: ee,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }, e.Provider = e, e.Consumer = {
                    $$typeof: q,
                    _context: e
                }, e._currentRenderer = null, e._currentRenderer2 = null, e;
            }, u.createElement = function(e, t, r) {
                for(var n = 2; n < arguments.length; n++){
                    var o = arguments[n];
                    m(o) && o._store && (o._store.validated = 1);
                }
                if (n = {}, o = null, t != null) for(s in fe || !("__self" in t) || "key" in t || (fe = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), X(t) && (E(t.key), o = "" + t.key), t)S.call(t, s) && s !== "key" && s !== "__self" && s !== "__source" && (n[s] = t[s]);
                var c = arguments.length - 2;
                if (c === 1) n.children = r;
                else if (1 < c) {
                    for(var a = Array(c), f = 0; f < c; f++)a[f] = arguments[f + 2];
                    Object.freeze && Object.freeze(a), n.children = a;
                }
                if (e && e.defaultProps) for(s in c = e.defaultProps, c)n[s] === void 0 && (n[s] = c[s]);
                o && Ee(n, typeof e == "function" ? e.displayName || e.name || "Unknown" : e);
                var s = 1e4 > i.recentlyCreatedOwnerStacks++;
                return L(e, o, void 0, void 0, K(), n, s ? Error("react-stack-top-frame") : je, s ? ie(B(e)) : Pe);
            }, u.createRef = function() {
                var e = {
                    current: null
                };
                return Object.seal(e), e;
            }, u.forwardRef = function(e) {
                e != null && e.$$typeof === W ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? console.error("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && e.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
                var t = {
                    $$typeof: te,
                    render: e
                }, r;
                return Object.defineProperty(t, "displayName", {
                    enumerable: !1,
                    configurable: !0,
                    get: function() {
                        return r;
                    },
                    set: function(n) {
                        r = n, e.name || e.displayName || (Object.defineProperty(e, "name", {
                            value: n
                        }), e.displayName = n);
                    }
                }), t;
            }, u.isValidElement = m, u.lazy = function(e) {
                return {
                    $$typeof: T,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: Te
                };
            }, u.memo = function(e, t) {
                e == null && console.error("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e), t = {
                    $$typeof: W,
                    type: e,
                    compare: t === void 0 ? null : t
                };
                var r;
                return Object.defineProperty(t, "displayName", {
                    enumerable: !1,
                    configurable: !0,
                    get: function() {
                        return r;
                    },
                    set: function(n) {
                        r = n, e.name || e.displayName || (Object.defineProperty(e, "name", {
                            value: n
                        }), e.displayName = n);
                    }
                }), t;
            }, u.startTransition = function(e) {
                var t = i.T, r = {};
                i.T = r, r._updatedFibers = /* @__PURE__ */ new Set();
                try {
                    var n = e(), o = i.S;
                    o !== null && o(r, n), typeof n == "object" && n !== null && typeof n.then == "function" && n.then(ke, he);
                } catch (c) {
                    he(c);
                } finally{
                    t === null && r._updatedFibers && (e = r._updatedFibers.size, r._updatedFibers.clear(), 10 < e && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), i.T = t;
                }
            }, u.unstable_useCacheRefresh = function() {
                return l().useCacheRefresh();
            }, u.use = function(e) {
                return l().use(e);
            }, u.useActionState = function(e, t, r) {
                return l().useActionState(e, t, r);
            }, u.useCallback = function(e, t) {
                return l().useCallback(e, t);
            }, u.useContext = function(e) {
                var t = l();
                return e.$$typeof === q && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"), t.useContext(e);
            }, u.useDebugValue = function(e, t) {
                return l().useDebugValue(e, t);
            }, u.useDeferredValue = function(e, t) {
                return l().useDeferredValue(e, t);
            }, u.useEffect = function(e, t, r) {
                e == null && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
                var n = l();
                if (typeof r == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
                return n.useEffect(e, t);
            }, u.useId = function() {
                return l().useId();
            }, u.useImperativeHandle = function(e, t, r) {
                return l().useImperativeHandle(e, t, r);
            }, u.useInsertionEffect = function(e, t) {
                return e == null && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"), l().useInsertionEffect(e, t);
            }, u.useLayoutEffect = function(e, t) {
                return e == null && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"), l().useLayoutEffect(e, t);
            }, u.useMemo = function(e, t) {
                return l().useMemo(e, t);
            }, u.useOptimistic = function(e, t) {
                return l().useOptimistic(e, t);
            }, u.useReducer = function(e, t, r) {
                return l().useReducer(e, t, r);
            }, u.useRef = function(e) {
                return l().useRef(e);
            }, u.useState = function(e) {
                return l().useState(e);
            }, u.useSyncExternalStore = function(e, t, r) {
                return l().useSyncExternalStore(e, t, r);
            }, u.useTransition = function() {
                return l().useTransition();
            }, u.version = "19.1.2", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
        }();
    }(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web179$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"], __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web179$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports), __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web179$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web158.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__require",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web159$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web159.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web160.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web161$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web161.js [app-client] (ecmascript)");
;
;
;
var r;
function s() {
    return r ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web159$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports : (r = 1, ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web159$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web161$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])(), __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web159$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web158$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web158.js [app-client] (ecmascript)");
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web158$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])();
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web4.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPlatformCrypto",
    ()=>i,
    "getPlatformOAuth",
    ()=>p,
    "getPlatformServices",
    ()=>e,
    "getPlatformStorage",
    ()=>u,
    "setPlatformServices",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
;
let r = null;
function n(t) {
    r = t;
}
function e() {
    if (!r) throw new Error("Platform services not initialized. This usually means the core package was not properly imported for your platform. For web apps, make sure you're importing from '@coinbase/cdp-core'. For React Native apps, ensure you have the proper platform resolution configured.");
    return r;
}
function i() {
    return e().crypto;
}
function u() {
    return e().storage;
}
function p() {
    return e().oauth;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web33.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeBase64",
    ()=>g,
    "encodeBase64",
    ()=>a
]);
function a(e) {
    if (typeof btoa < "u") return btoa(Array.from(e).map((t)=>String.fromCharCode(t)).join(""));
    const c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let r = "";
    for(let t = 0; t < e.length; t += 3){
        const h = e[t], n = t + 1 < e.length ? e[t + 1] : 0, s = t + 2 < e.length ? e[t + 2] : 0, o = h << 16 | n << 8 | s;
        r += c.charAt(o >> 18 & 63), r += c.charAt(o >> 12 & 63), r += t + 1 < e.length ? c.charAt(o >> 6 & 63) : "=", r += t + 2 < e.length ? c.charAt(o & 63) : "=";
    }
    return r;
}
function g(e) {
    if (typeof atob < "u") {
        const n = atob(e), s = new Uint8Array(n.length);
        for(let o = 0; o < n.length; o++)s[o] = n.charCodeAt(o);
        return s;
    }
    const c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = {};
    for(let n = 0; n < c.length; n++)r[c[n]] = n;
    const t = e.replace(/[^A-Za-z0-9+/]/g, ""), h = [];
    for(let n = 0; n < t.length; n += 4){
        const s = r[t[n]] || 0, o = r[t[n + 1]] || 0, l = r[t[n + 2]] || 0, f = r[t[n + 3]] || 0, i = s << 18 | o << 12 | l << 6 | f;
        h.push(i >> 16 & 255), n + 2 < t.length && h.push(i >> 8 & 255), n + 3 < t.length && h.push(i & 255);
    }
    return new Uint8Array(h);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web5.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "webCrypto",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web33$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web33.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
const p = {
    /**
   * Creates a secp256r1 key pair for the browser.
   *
   * @returns A secp256r1 key pair with private key and base64-encoded public key.
   */ async createKeyPair () {
        const e = await window.crypto.subtle.generateKey({
            name: "ECDSA",
            namedCurve: "P-256"
        }, !1, // Do not allow key export.
        [
            "sign",
            "verify"
        ]), t = await window.crypto.subtle.exportKey("spki", e.publicKey), r = new Uint8Array(t), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web33$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(r);
        return {
            privateKey: e.privateKey,
            publicKeyBase64: n
        };
    },
    /**
   * Creates an RSA key pair that allows private key export.
   *
   * @returns An RSA key pair with exportable private key and base64-encoded public key.
   */ async createExportKeyPair () {
        const e = await window.crypto.subtle.generateKey({
            name: "RSA-OAEP",
            modulusLength: 2048,
            publicExponent: new Uint8Array([
                1,
                0,
                1
            ]),
            hash: "SHA-256"
        }, !0, // Allow key export
        [
            "encrypt",
            "decrypt"
        ]), t = await window.crypto.subtle.exportKey("spki", e.publicKey), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web33$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(new Uint8Array(t));
        return {
            privateKey: e.privateKey,
            publicKeyBase64: r
        };
    },
    /**
   * Computes a hash of the given data.
   *
   * @param data - The data to hash.
   * @returns Promise that resolves to the hex-encoded hash.
   */ async hash (e) {
        const t = await window.crypto.subtle.digest("SHA-256", e), r = new Uint8Array(t);
        return Array.from(r).map((o)=>o.toString(16).padStart(2, "0")).join("");
    },
    /**
   * Generates a cryptographically secure random identifier.
   *
   * @returns A random string suitable for use as an identifier.
   */ generateRandomId () {
        const e = new Uint8Array(16);
        return window.crypto.getRandomValues(e), Array.from(e, (t)=>t.toString(16).padStart(2, "0")).join("");
    },
    /**
   * Generates a cryptographically secure random salt.
   *
   * @returns A random bigint salt.
   */ generateRandomSalt () {
        const e = new Uint8Array(32);
        window.crypto.getRandomValues(e);
        let t = 0n;
        for(let r = 0; r < e.length; r++)t = (t << 8n) + BigInt(e[r]);
        return t;
    },
    /**
   * Decrypts data using a private key with RSA-OAEP algorithm.
   *
   * @param privateKey - The private key to use for decryption.
   * @param encryptedData - Base64-encoded encrypted data.
   * @returns Promise that resolves to the decrypted string.
   */ async decryptWithPrivateKey (e, t) {
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web33$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBase64"])(t);
        return await window.crypto.subtle.decrypt("RSA-OAEP", e, r);
    }
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web6.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "webOAuth",
    ()=>s
]);
const s = {
    getRedirectUrl: ()=>(r(), window.location.href),
    initiateOAuthFlow: (o)=>{
        r(), window.location.href = o;
    },
    getOAuthParams: ()=>{
        r();
        const o = new URL(window.location.href), e = new URLSearchParams(o.search), t = e.get("code") ?? void 0, i = e.get("provider_type") ?? void 0, n = e.get("flow_id") ?? void 0, d = e.get("error") ?? void 0, c = e.get("error_description") ?? void 0;
        return (!t || !i || !n) && !d && !c ? null : {
            code: t,
            providerType: i,
            flowId: n,
            error: d,
            errorDescription: c
        };
    },
    cleanupOAuthParams: ()=>{
        r();
        const o = new URL(window.location.href), e = new URLSearchParams(o.search);
        e.delete("code"), e.delete("provider_type"), e.delete("flow_id"), e.delete("error"), e.delete("error_description"), o.search = e.toString(), window.history.replaceState({}, "", o.toString());
    }
};
function r() {
    if (typeof window > "u" || typeof window.location > "u" || typeof window.history > "u") throw new Error("OAuth is not supported in this browser");
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web7.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "webStorage",
    ()=>l
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
;
const l = {
    /**
   * Retrieves a value from localStorage.
   *
   * @param key - The storage key.
   * @returns Promise that resolves to the value.
   */ async getItem (e) {
        try {
            return localStorage.getItem(e);
        } catch (r) {
            return console.warn(`Failed to get item from localStorage: ${r}`), null;
        }
    },
    /**
   * Stores a value in localStorage.
   *
   * @param key - The storage key.
   * @param value - The value to store.
   * @returns Promise that resolves when the value is stored.
   */ async setItem (e, r) {
        try {
            localStorage.setItem(e, r);
        } catch (o) {
            throw console.warn(`Failed to set item in localStorage: ${o}`), o;
        }
    },
    /**
   * Removes a value from localStorage.
   *
   * @param key - The storage key.
   * @returns Promise that resolves when the value is removed.
   */ async removeItem (e) {
        try {
            localStorage.removeItem(e);
        } catch (r) {
            throw console.warn(`Failed to remove item from localStorage: ${r}`), r;
        }
    },
    /**
   * Clears all values from localStorage.
   *
   * @returns Promise that resolves when storage is cleared.
   */ async clear () {
        try {
            localStorage.clear();
        } catch (e) {
            throw console.warn(`Failed to clear localStorage: ${e}`), e;
        }
    }
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web8.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERSION",
    ()=>o
]);
const o = "0.0.73";
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web58.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__exports",
    ()=>r
]);
var r = {};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web61.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__exports",
    ()=>s
]);
var s = {};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web59.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__require",
    ()=>_
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web61$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web61.js [app-client] (ecmascript)");
;
var A;
function _() {
    if (A) return __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web61$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"];
    A = 1, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web61$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].byteLength = y, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web61$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].toByteArray = C, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web61$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].fromByteArray = B;
    for(var c = [], n = [], l = typeof Uint8Array < "u" ? Uint8Array : Array, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, p = d.length; s < p; ++s)c[s] = d[s], n[d.charCodeAt(s)] = s;
    n[45] = 62, n[95] = 63;
    function x(r) {
        var e = r.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var a = r.indexOf("=");
        a === -1 && (a = e);
        var o = a === e ? 0 : 4 - a % 4;
        return [
            a,
            o
        ];
    }
    function y(r) {
        var e = x(r), a = e[0], o = e[1];
        return (a + o) * 3 / 4 - o;
    }
    function i(r, e, a) {
        return (e + a) * 3 / 4 - a;
    }
    function C(r) {
        var e, a = x(r), o = a[0], v = a[1], t = new l(i(r, o, v)), h = 0, u = v > 0 ? o - 4 : o, f;
        for(f = 0; f < u; f += 4)e = n[r.charCodeAt(f)] << 18 | n[r.charCodeAt(f + 1)] << 12 | n[r.charCodeAt(f + 2)] << 6 | n[r.charCodeAt(f + 3)], t[h++] = e >> 16 & 255, t[h++] = e >> 8 & 255, t[h++] = e & 255;
        return v === 2 && (e = n[r.charCodeAt(f)] << 2 | n[r.charCodeAt(f + 1)] >> 4, t[h++] = e & 255), v === 1 && (e = n[r.charCodeAt(f)] << 10 | n[r.charCodeAt(f + 1)] << 4 | n[r.charCodeAt(f + 2)] >> 2, t[h++] = e >> 8 & 255, t[h++] = e & 255), t;
    }
    function L(r) {
        return c[r >> 18 & 63] + c[r >> 12 & 63] + c[r >> 6 & 63] + c[r & 63];
    }
    function g(r, e, a) {
        for(var o, v = [], t = e; t < a; t += 3)o = (r[t] << 16 & 16711680) + (r[t + 1] << 8 & 65280) + (r[t + 2] & 255), v.push(L(o));
        return v.join("");
    }
    function B(r) {
        for(var e, a = r.length, o = a % 3, v = [], t = 16383, h = 0, u = a - o; h < u; h += t)v.push(g(r, h, h + t > u ? u : h + t));
        return o === 1 ? (e = r[a - 1], v.push(c[e >> 2] + c[e << 4 & 63] + "==")) : o === 2 && (e = (r[a - 2] << 8) + r[a - 1], v.push(c[e >> 10] + c[e >> 4 & 63] + c[e << 2 & 63] + "=")), v.join("");
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web61$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"];
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web62.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__exports",
    ()=>e
]);
var e = {};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web60.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__require",
    ()=>q
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web62$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web62.js [app-client] (ecmascript)");
;
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var d;
function q() {
    return d ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web62$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"] : (d = 1, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web62$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].read = function(s, a, N, w, M) {
        var t, r, h = M * 8 - w - 1, e = (1 << h) - 1, f = e >> 1, i = -7, o = N ? M - 1 : 0, x = N ? -1 : 1, p = s[a + o];
        for(o += x, t = p & (1 << -i) - 1, p >>= -i, i += h; i > 0; t = t * 256 + s[a + o], o += x, i -= 8);
        for(r = t & (1 << -i) - 1, t >>= -i, i += w; i > 0; r = r * 256 + s[a + o], o += x, i -= 8);
        if (t === 0) t = 1 - f;
        else {
            if (t === e) return r ? NaN : (p ? -1 : 1) * (1 / 0);
            r = r + Math.pow(2, w), t = t - f;
        }
        return (p ? -1 : 1) * r * Math.pow(2, t - w);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web62$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].write = function(s, a, N, w, M, t) {
        var r, h, e, f = t * 8 - M - 1, i = (1 << f) - 1, o = i >> 1, x = M === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = w ? 0 : t - 1, c = w ? 1 : -1, I = a < 0 || a === 0 && 1 / a < 0 ? 1 : 0;
        for(a = Math.abs(a), isNaN(a) || a === 1 / 0 ? (h = isNaN(a) ? 1 : 0, r = i) : (r = Math.floor(Math.log(a) / Math.LN2), a * (e = Math.pow(2, -r)) < 1 && (r--, e *= 2), r + o >= 1 ? a += x / e : a += x * Math.pow(2, 1 - o), a * e >= 2 && (r++, e /= 2), r + o >= i ? (h = 0, r = i) : r + o >= 1 ? (h = (a * e - 1) * Math.pow(2, M), r = r + o) : (h = a * Math.pow(2, o - 1) * Math.pow(2, M), r = 0)); M >= 8; s[N + p] = h & 255, p += c, h /= 256, M -= 8);
        for(r = r << M | h, f += M; f > 0; s[N + p] = r & 255, p += c, r /= 256, f -= 8);
        s[N + p - c] |= I * 128;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web62$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"]);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web57.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__require",
    ()=>Sr
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web58.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web59$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web59.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web60$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web60.js [app-client] (ecmascript)");
;
;
;
/*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/ var Z;
function Sr() {
    return Z ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"] : (Z = 1, function(d) {
        const R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web59$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])(), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web60$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])(), k = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
        d.Buffer = u, d.SlowBuffer = nr, d.INSPECT_MAX_BYTES = 50;
        const U = 2147483647;
        d.kMaxLength = U, u.TYPED_ARRAY_SUPPORT = Q(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
        function Q() {
            try {
                const i = new Uint8Array(1), r = {
                    foo: function() {
                        return 42;
                    }
                };
                return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(i, r), i.foo() === 42;
            } catch  {
                return !1;
            }
        }
        Object.defineProperty(u.prototype, "parent", {
            enumerable: !0,
            get: function() {
                if (u.isBuffer(this)) return this.buffer;
            }
        }), Object.defineProperty(u.prototype, "offset", {
            enumerable: !0,
            get: function() {
                if (u.isBuffer(this)) return this.byteOffset;
            }
        });
        function B(i) {
            if (i > U) throw new RangeError('The value "' + i + '" is invalid for option "size"');
            const r = new Uint8Array(i);
            return Object.setPrototypeOf(r, u.prototype), r;
        }
        function u(i, r, t) {
            if (typeof i == "number") {
                if (typeof r == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
                return T(i);
            }
            return P(i, r, t);
        }
        u.poolSize = 8192;
        function P(i, r, t) {
            if (typeof i == "string") return rr(i, r);
            if (ArrayBuffer.isView(i)) return tr(i);
            if (i == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i);
            if (w(i, ArrayBuffer) || i && w(i.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (w(i, SharedArrayBuffer) || i && w(i.buffer, SharedArrayBuffer))) return S(i, r, t);
            if (typeof i == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
            const n = i.valueOf && i.valueOf();
            if (n != null && n !== i) return u.from(n, r, t);
            const e = ir(i);
            if (e) return e;
            if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof i[Symbol.toPrimitive] == "function") return u.from(i[Symbol.toPrimitive]("string"), r, t);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i);
        }
        u.from = function(i, r, t) {
            return P(i, r, t);
        }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
        function $(i) {
            if (typeof i != "number") throw new TypeError('"size" argument must be of type number');
            if (i < 0) throw new RangeError('The value "' + i + '" is invalid for option "size"');
        }
        function v(i, r, t) {
            return $(i), i <= 0 ? B(i) : r !== void 0 ? typeof t == "string" ? B(i).fill(r, t) : B(i).fill(r) : B(i);
        }
        u.alloc = function(i, r, t) {
            return v(i, r, t);
        };
        function T(i) {
            return $(i), B(i < 0 ? 0 : C(i) | 0);
        }
        u.allocUnsafe = function(i) {
            return T(i);
        }, u.allocUnsafeSlow = function(i) {
            return T(i);
        };
        function rr(i, r) {
            if ((typeof r != "string" || r === "") && (r = "utf8"), !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
            const t = M(i, r) | 0;
            let n = B(t);
            const e = n.write(i, r);
            return e !== t && (n = n.slice(0, e)), n;
        }
        function _(i) {
            const r = i.length < 0 ? 0 : C(i.length) | 0, t = B(r);
            for(let n = 0; n < r; n += 1)t[n] = i[n] & 255;
            return t;
        }
        function tr(i) {
            if (w(i, Uint8Array)) {
                const r = new Uint8Array(i);
                return S(r.buffer, r.byteOffset, r.byteLength);
            }
            return _(i);
        }
        function S(i, r, t) {
            if (r < 0 || i.byteLength < r) throw new RangeError('"offset" is outside of buffer bounds');
            if (i.byteLength < r + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
            let n;
            return r === void 0 && t === void 0 ? n = new Uint8Array(i) : t === void 0 ? n = new Uint8Array(i, r) : n = new Uint8Array(i, r, t), Object.setPrototypeOf(n, u.prototype), n;
        }
        function ir(i) {
            if (u.isBuffer(i)) {
                const r = C(i.length) | 0, t = B(r);
                return t.length === 0 || i.copy(t, 0, 0, r), t;
            }
            if (i.length !== void 0) return typeof i.length != "number" || D(i.length) ? B(0) : _(i);
            if (i.type === "Buffer" && Array.isArray(i.data)) return _(i.data);
        }
        function C(i) {
            if (i >= U) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + U.toString(16) + " bytes");
            return i | 0;
        }
        function nr(i) {
            return +i != i && (i = 0), u.alloc(+i);
        }
        u.isBuffer = function(r) {
            return r != null && r._isBuffer === !0 && r !== u.prototype;
        }, u.compare = function(r, t) {
            if (w(r, Uint8Array) && (r = u.from(r, r.offset, r.byteLength)), w(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(r) || !u.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (r === t) return 0;
            let n = r.length, e = t.length;
            for(let o = 0, h = Math.min(n, e); o < h; ++o)if (r[o] !== t[o]) {
                n = r[o], e = t[o];
                break;
            }
            return n < e ? -1 : e < n ? 1 : 0;
        }, u.isEncoding = function(r) {
            switch(String(r).toLowerCase()){
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1;
            }
        }, u.concat = function(r, t) {
            if (!Array.isArray(r)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (r.length === 0) return u.alloc(0);
            let n;
            if (t === void 0) for(t = 0, n = 0; n < r.length; ++n)t += r[n].length;
            const e = u.allocUnsafe(t);
            let o = 0;
            for(n = 0; n < r.length; ++n){
                let h = r[n];
                if (w(h, Uint8Array)) o + h.length > e.length ? (u.isBuffer(h) || (h = u.from(h)), h.copy(e, o)) : Uint8Array.prototype.set.call(e, h, o);
                else if (u.isBuffer(h)) h.copy(e, o);
                else throw new TypeError('"list" argument must be an Array of Buffers');
                o += h.length;
            }
            return e;
        };
        function M(i, r) {
            if (u.isBuffer(i)) return i.length;
            if (ArrayBuffer.isView(i) || w(i, ArrayBuffer)) return i.byteLength;
            if (typeof i != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof i);
            const t = i.length, n = arguments.length > 2 && arguments[2] === !0;
            if (!n && t === 0) return 0;
            let e = !1;
            for(;;)switch(r){
                case "ascii":
                case "latin1":
                case "binary":
                    return t;
                case "utf8":
                case "utf-8":
                    return L(i).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return t * 2;
                case "hex":
                    return t >>> 1;
                case "base64":
                    return K(i).length;
                default:
                    if (e) return n ? -1 : L(i).length;
                    r = ("" + r).toLowerCase(), e = !0;
            }
        }
        u.byteLength = M;
        function er(i, r, t) {
            let n = !1;
            if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r)) return "";
            for(i || (i = "utf8");;)switch(i){
                case "hex":
                    return ar(this, r, t);
                case "utf8":
                case "utf-8":
                    return G(this, r, t);
                case "ascii":
                    return sr(this, r, t);
                case "latin1":
                case "binary":
                    return yr(this, r, t);
                case "base64":
                    return pr(this, r, t);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return wr(this, r, t);
                default:
                    if (n) throw new TypeError("Unknown encoding: " + i);
                    i = (i + "").toLowerCase(), n = !0;
            }
        }
        u.prototype._isBuffer = !0;
        function E(i, r, t) {
            const n = i[r];
            i[r] = i[t], i[t] = n;
        }
        u.prototype.swap16 = function() {
            const r = this.length;
            if (r % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for(let t = 0; t < r; t += 2)E(this, t, t + 1);
            return this;
        }, u.prototype.swap32 = function() {
            const r = this.length;
            if (r % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for(let t = 0; t < r; t += 4)E(this, t, t + 3), E(this, t + 1, t + 2);
            return this;
        }, u.prototype.swap64 = function() {
            const r = this.length;
            if (r % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for(let t = 0; t < r; t += 8)E(this, t, t + 7), E(this, t + 1, t + 6), E(this, t + 2, t + 5), E(this, t + 3, t + 4);
            return this;
        }, u.prototype.toString = function() {
            const r = this.length;
            return r === 0 ? "" : arguments.length === 0 ? G(this, 0, r) : er.apply(this, arguments);
        }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(r) {
            if (!u.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
            return this === r ? !0 : u.compare(this, r) === 0;
        }, u.prototype.inspect = function() {
            let r = "";
            const t = d.INSPECT_MAX_BYTES;
            return r = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (r += " ... "), "<Buffer " + r + ">";
        }, k && (u.prototype[k] = u.prototype.inspect), u.prototype.compare = function(r, t, n, e, o) {
            if (w(r, Uint8Array) && (r = u.from(r, r.offset, r.byteLength)), !u.isBuffer(r)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r);
            if (t === void 0 && (t = 0), n === void 0 && (n = r ? r.length : 0), e === void 0 && (e = 0), o === void 0 && (o = this.length), t < 0 || n > r.length || e < 0 || o > this.length) throw new RangeError("out of range index");
            if (e >= o && t >= n) return 0;
            if (e >= o) return -1;
            if (t >= n) return 1;
            if (t >>>= 0, n >>>= 0, e >>>= 0, o >>>= 0, this === r) return 0;
            let h = o - e, f = n - t;
            const l = Math.min(h, f), p = this.slice(e, o), s = r.slice(t, n);
            for(let c = 0; c < l; ++c)if (p[c] !== s[c]) {
                h = p[c], f = s[c];
                break;
            }
            return h < f ? -1 : f < h ? 1 : 0;
        };
        function O(i, r, t, n, e) {
            if (i.length === 0) return -1;
            if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, D(t) && (t = e ? 0 : i.length - 1), t < 0 && (t = i.length + t), t >= i.length) {
                if (e) return -1;
                t = i.length - 1;
            } else if (t < 0) if (e) t = 0;
            else return -1;
            if (typeof r == "string" && (r = u.from(r, n)), u.isBuffer(r)) return r.length === 0 ? -1 : q(i, r, t, n, e);
            if (typeof r == "number") return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? e ? Uint8Array.prototype.indexOf.call(i, r, t) : Uint8Array.prototype.lastIndexOf.call(i, r, t) : q(i, [
                r
            ], t, n, e);
            throw new TypeError("val must be string, number or Buffer");
        }
        function q(i, r, t, n, e) {
            let o = 1, h = i.length, f = r.length;
            if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
                if (i.length < 2 || r.length < 2) return -1;
                o = 2, h /= 2, f /= 2, t /= 2;
            }
            function l(s, c) {
                return o === 1 ? s[c] : s.readUInt16BE(c * o);
            }
            let p;
            if (e) {
                let s = -1;
                for(p = t; p < h; p++)if (l(i, p) === l(r, s === -1 ? 0 : p - s)) {
                    if (s === -1 && (s = p), p - s + 1 === f) return s * o;
                } else s !== -1 && (p -= p - s), s = -1;
            } else for(t + f > h && (t = h - f), p = t; p >= 0; p--){
                let s = !0;
                for(let c = 0; c < f; c++)if (l(i, p + c) !== l(r, c)) {
                    s = !1;
                    break;
                }
                if (s) return p;
            }
            return -1;
        }
        u.prototype.includes = function(r, t, n) {
            return this.indexOf(r, t, n) !== -1;
        }, u.prototype.indexOf = function(r, t, n) {
            return O(this, r, t, n, !0);
        }, u.prototype.lastIndexOf = function(r, t, n) {
            return O(this, r, t, n, !1);
        };
        function or(i, r, t, n) {
            t = Number(t) || 0;
            const e = i.length - t;
            n ? (n = Number(n), n > e && (n = e)) : n = e;
            const o = r.length;
            n > o / 2 && (n = o / 2);
            let h;
            for(h = 0; h < n; ++h){
                const f = parseInt(r.substr(h * 2, 2), 16);
                if (D(f)) return h;
                i[t + h] = f;
            }
            return h;
        }
        function ur(i, r, t, n) {
            return A(L(r, i.length - t), i, t, n);
        }
        function hr(i, r, t, n) {
            return A(mr(r), i, t, n);
        }
        function fr(i, r, t, n) {
            return A(K(r), i, t, n);
        }
        function cr(i, r, t, n) {
            return A(gr(r, i.length - t), i, t, n);
        }
        u.prototype.write = function(r, t, n, e) {
            if (t === void 0) e = "utf8", n = this.length, t = 0;
            else if (n === void 0 && typeof t == "string") e = t, n = this.length, t = 0;
            else if (isFinite(t)) t = t >>> 0, isFinite(n) ? (n = n >>> 0, e === void 0 && (e = "utf8")) : (e = n, n = void 0);
            else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            const o = this.length - t;
            if ((n === void 0 || n > o) && (n = o), r.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            e || (e = "utf8");
            let h = !1;
            for(;;)switch(e){
                case "hex":
                    return or(this, r, t, n);
                case "utf8":
                case "utf-8":
                    return ur(this, r, t, n);
                case "ascii":
                case "latin1":
                case "binary":
                    return hr(this, r, t, n);
                case "base64":
                    return fr(this, r, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return cr(this, r, t, n);
                default:
                    if (h) throw new TypeError("Unknown encoding: " + e);
                    e = ("" + e).toLowerCase(), h = !0;
            }
        }, u.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            };
        };
        function pr(i, r, t) {
            return r === 0 && t === i.length ? R.fromByteArray(i) : R.fromByteArray(i.slice(r, t));
        }
        function G(i, r, t) {
            t = Math.min(i.length, t);
            const n = [];
            let e = r;
            for(; e < t;){
                const o = i[e];
                let h = null, f = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                if (e + f <= t) {
                    let l, p, s, c;
                    switch(f){
                        case 1:
                            o < 128 && (h = o);
                            break;
                        case 2:
                            l = i[e + 1], (l & 192) === 128 && (c = (o & 31) << 6 | l & 63, c > 127 && (h = c));
                            break;
                        case 3:
                            l = i[e + 1], p = i[e + 2], (l & 192) === 128 && (p & 192) === 128 && (c = (o & 15) << 12 | (l & 63) << 6 | p & 63, c > 2047 && (c < 55296 || c > 57343) && (h = c));
                            break;
                        case 4:
                            l = i[e + 1], p = i[e + 2], s = i[e + 3], (l & 192) === 128 && (p & 192) === 128 && (s & 192) === 128 && (c = (o & 15) << 18 | (l & 63) << 12 | (p & 63) << 6 | s & 63, c > 65535 && c < 1114112 && (h = c));
                    }
                }
                h === null ? (h = 65533, f = 1) : h > 65535 && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), h = 56320 | h & 1023), n.push(h), e += f;
            }
            return lr(n);
        }
        const Y = 4096;
        function lr(i) {
            const r = i.length;
            if (r <= Y) return String.fromCharCode.apply(String, i);
            let t = "", n = 0;
            for(; n < r;)t += String.fromCharCode.apply(String, i.slice(n, n += Y));
            return t;
        }
        function sr(i, r, t) {
            let n = "";
            t = Math.min(i.length, t);
            for(let e = r; e < t; ++e)n += String.fromCharCode(i[e] & 127);
            return n;
        }
        function yr(i, r, t) {
            let n = "";
            t = Math.min(i.length, t);
            for(let e = r; e < t; ++e)n += String.fromCharCode(i[e]);
            return n;
        }
        function ar(i, r, t) {
            const n = i.length;
            (!r || r < 0) && (r = 0), (!t || t < 0 || t > n) && (t = n);
            let e = "";
            for(let o = r; o < t; ++o)e += Ir[i[o]];
            return e;
        }
        function wr(i, r, t) {
            const n = i.slice(r, t);
            let e = "";
            for(let o = 0; o < n.length - 1; o += 2)e += String.fromCharCode(n[o] + n[o + 1] * 256);
            return e;
        }
        u.prototype.slice = function(r, t) {
            const n = this.length;
            r = ~~r, t = t === void 0 ? n : ~~t, r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < r && (t = r);
            const e = this.subarray(r, t);
            return Object.setPrototypeOf(e, u.prototype), e;
        };
        function y(i, r, t) {
            if (i % 1 !== 0 || i < 0) throw new RangeError("offset is not uint");
            if (i + r > t) throw new RangeError("Trying to access beyond buffer length");
        }
        u.prototype.readUintLE = u.prototype.readUIntLE = function(r, t, n) {
            r = r >>> 0, t = t >>> 0, n || y(r, t, this.length);
            let e = this[r], o = 1, h = 0;
            for(; ++h < t && (o *= 256);)e += this[r + h] * o;
            return e;
        }, u.prototype.readUintBE = u.prototype.readUIntBE = function(r, t, n) {
            r = r >>> 0, t = t >>> 0, n || y(r, t, this.length);
            let e = this[r + --t], o = 1;
            for(; t > 0 && (o *= 256);)e += this[r + --t] * o;
            return e;
        }, u.prototype.readUint8 = u.prototype.readUInt8 = function(r, t) {
            return r = r >>> 0, t || y(r, 1, this.length), this[r];
        }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(r, t) {
            return r = r >>> 0, t || y(r, 2, this.length), this[r] | this[r + 1] << 8;
        }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(r, t) {
            return r = r >>> 0, t || y(r, 2, this.length), this[r] << 8 | this[r + 1];
        }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(r, t) {
            return r = r >>> 0, t || y(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
        }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(r, t) {
            return r = r >>> 0, t || y(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
        }, u.prototype.readBigUInt64LE = x(function(r) {
            r = r >>> 0, I(r, "offset");
            const t = this[r], n = this[r + 7];
            (t === void 0 || n === void 0) && F(r, this.length - 8);
            const e = t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, o = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + n * 2 ** 24;
            return BigInt(e) + (BigInt(o) << BigInt(32));
        }), u.prototype.readBigUInt64BE = x(function(r) {
            r = r >>> 0, I(r, "offset");
            const t = this[r], n = this[r + 7];
            (t === void 0 || n === void 0) && F(r, this.length - 8);
            const e = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], o = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n;
            return (BigInt(e) << BigInt(32)) + BigInt(o);
        }), u.prototype.readIntLE = function(r, t, n) {
            r = r >>> 0, t = t >>> 0, n || y(r, t, this.length);
            let e = this[r], o = 1, h = 0;
            for(; ++h < t && (o *= 256);)e += this[r + h] * o;
            return o *= 128, e >= o && (e -= Math.pow(2, 8 * t)), e;
        }, u.prototype.readIntBE = function(r, t, n) {
            r = r >>> 0, t = t >>> 0, n || y(r, t, this.length);
            let e = t, o = 1, h = this[r + --e];
            for(; e > 0 && (o *= 256);)h += this[r + --e] * o;
            return o *= 128, h >= o && (h -= Math.pow(2, 8 * t)), h;
        }, u.prototype.readInt8 = function(r, t) {
            return r = r >>> 0, t || y(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
        }, u.prototype.readInt16LE = function(r, t) {
            r = r >>> 0, t || y(r, 2, this.length);
            const n = this[r] | this[r + 1] << 8;
            return n & 32768 ? n | 4294901760 : n;
        }, u.prototype.readInt16BE = function(r, t) {
            r = r >>> 0, t || y(r, 2, this.length);
            const n = this[r + 1] | this[r] << 8;
            return n & 32768 ? n | 4294901760 : n;
        }, u.prototype.readInt32LE = function(r, t) {
            return r = r >>> 0, t || y(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
        }, u.prototype.readInt32BE = function(r, t) {
            return r = r >>> 0, t || y(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
        }, u.prototype.readBigInt64LE = x(function(r) {
            r = r >>> 0, I(r, "offset");
            const t = this[r], n = this[r + 7];
            (t === void 0 || n === void 0) && F(r, this.length - 8);
            const e = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (n << 24);
            return (BigInt(e) << BigInt(32)) + BigInt(t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
        }), u.prototype.readBigInt64BE = x(function(r) {
            r = r >>> 0, I(r, "offset");
            const t = this[r], n = this[r + 7];
            (t === void 0 || n === void 0) && F(r, this.length - 8);
            const e = (t << 24) + // Overflow
            this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
            return (BigInt(e) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n);
        }), u.prototype.readFloatLE = function(r, t) {
            return r = r >>> 0, t || y(r, 4, this.length), m.read(this, r, !0, 23, 4);
        }, u.prototype.readFloatBE = function(r, t) {
            return r = r >>> 0, t || y(r, 4, this.length), m.read(this, r, !1, 23, 4);
        }, u.prototype.readDoubleLE = function(r, t) {
            return r = r >>> 0, t || y(r, 8, this.length), m.read(this, r, !0, 52, 8);
        }, u.prototype.readDoubleBE = function(r, t) {
            return r = r >>> 0, t || y(r, 8, this.length), m.read(this, r, !1, 52, 8);
        };
        function a(i, r, t, n, e, o) {
            if (!u.isBuffer(i)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (r > e || r < o) throw new RangeError('"value" argument is out of bounds');
            if (t + n > i.length) throw new RangeError("Index out of range");
        }
        u.prototype.writeUintLE = u.prototype.writeUIntLE = function(r, t, n, e) {
            if (r = +r, t = t >>> 0, n = n >>> 0, !e) {
                const f = Math.pow(2, 8 * n) - 1;
                a(this, r, t, n, f, 0);
            }
            let o = 1, h = 0;
            for(this[t] = r & 255; ++h < n && (o *= 256);)this[t + h] = r / o & 255;
            return t + n;
        }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(r, t, n, e) {
            if (r = +r, t = t >>> 0, n = n >>> 0, !e) {
                const f = Math.pow(2, 8 * n) - 1;
                a(this, r, t, n, f, 0);
            }
            let o = n - 1, h = 1;
            for(this[t + o] = r & 255; --o >= 0 && (h *= 256);)this[t + o] = r / h & 255;
            return t + n;
        }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(r, t, n) {
            return r = +r, t = t >>> 0, n || a(this, r, t, 1, 255, 0), this[t] = r & 255, t + 1;
        }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(r, t, n) {
            return r = +r, t = t >>> 0, n || a(this, r, t, 2, 65535, 0), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
        }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(r, t, n) {
            return r = +r, t = t >>> 0, n || a(this, r, t, 2, 65535, 0), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
        }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(r, t, n) {
            return r = +r, t = t >>> 0, n || a(this, r, t, 4, 4294967295, 0), this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255, t + 4;
        }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(r, t, n) {
            return r = +r, t = t >>> 0, n || a(this, r, t, 4, 4294967295, 0), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
        };
        function W(i, r, t, n, e) {
            H(r, n, e, i, t, 7);
            let o = Number(r & BigInt(4294967295));
            i[t++] = o, o = o >> 8, i[t++] = o, o = o >> 8, i[t++] = o, o = o >> 8, i[t++] = o;
            let h = Number(r >> BigInt(32) & BigInt(4294967295));
            return i[t++] = h, h = h >> 8, i[t++] = h, h = h >> 8, i[t++] = h, h = h >> 8, i[t++] = h, t;
        }
        function V(i, r, t, n, e) {
            H(r, n, e, i, t, 7);
            let o = Number(r & BigInt(4294967295));
            i[t + 7] = o, o = o >> 8, i[t + 6] = o, o = o >> 8, i[t + 5] = o, o = o >> 8, i[t + 4] = o;
            let h = Number(r >> BigInt(32) & BigInt(4294967295));
            return i[t + 3] = h, h = h >> 8, i[t + 2] = h, h = h >> 8, i[t + 1] = h, h = h >> 8, i[t] = h, t + 8;
        }
        u.prototype.writeBigUInt64LE = x(function(r, t = 0) {
            return W(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
        }), u.prototype.writeBigUInt64BE = x(function(r, t = 0) {
            return V(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
        }), u.prototype.writeIntLE = function(r, t, n, e) {
            if (r = +r, t = t >>> 0, !e) {
                const l = Math.pow(2, 8 * n - 1);
                a(this, r, t, n, l - 1, -l);
            }
            let o = 0, h = 1, f = 0;
            for(this[t] = r & 255; ++o < n && (h *= 256);)r < 0 && f === 0 && this[t + o - 1] !== 0 && (f = 1), this[t + o] = (r / h >> 0) - f & 255;
            return t + n;
        }, u.prototype.writeIntBE = function(r, t, n, e) {
            if (r = +r, t = t >>> 0, !e) {
                const l = Math.pow(2, 8 * n - 1);
                a(this, r, t, n, l - 1, -l);
            }
            let o = n - 1, h = 1, f = 0;
            for(this[t + o] = r & 255; --o >= 0 && (h *= 256);)r < 0 && f === 0 && this[t + o + 1] !== 0 && (f = 1), this[t + o] = (r / h >> 0) - f & 255;
            return t + n;
        }, u.prototype.writeInt8 = function(r, t, n) {
            return r = +r, t = t >>> 0, n || a(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
        }, u.prototype.writeInt16LE = function(r, t, n) {
            return r = +r, t = t >>> 0, n || a(this, r, t, 2, 32767, -32768), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
        }, u.prototype.writeInt16BE = function(r, t, n) {
            return r = +r, t = t >>> 0, n || a(this, r, t, 2, 32767, -32768), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
        }, u.prototype.writeInt32LE = function(r, t, n) {
            return r = +r, t = t >>> 0, n || a(this, r, t, 4, 2147483647, -2147483648), this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24, t + 4;
        }, u.prototype.writeInt32BE = function(r, t, n) {
            return r = +r, t = t >>> 0, n || a(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
        }, u.prototype.writeBigInt64LE = x(function(r, t = 0) {
            return W(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
        }), u.prototype.writeBigInt64BE = x(function(r, t = 0) {
            return V(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
        });
        function X(i, r, t, n, e, o) {
            if (t + n > i.length) throw new RangeError("Index out of range");
            if (t < 0) throw new RangeError("Index out of range");
        }
        function j(i, r, t, n, e) {
            return r = +r, t = t >>> 0, e || X(i, r, t, 4), m.write(i, r, t, n, 23, 4), t + 4;
        }
        u.prototype.writeFloatLE = function(r, t, n) {
            return j(this, r, t, !0, n);
        }, u.prototype.writeFloatBE = function(r, t, n) {
            return j(this, r, t, !1, n);
        };
        function J(i, r, t, n, e) {
            return r = +r, t = t >>> 0, e || X(i, r, t, 8), m.write(i, r, t, n, 52, 8), t + 8;
        }
        u.prototype.writeDoubleLE = function(r, t, n) {
            return J(this, r, t, !0, n);
        }, u.prototype.writeDoubleBE = function(r, t, n) {
            return J(this, r, t, !1, n);
        }, u.prototype.copy = function(r, t, n, e) {
            if (!u.isBuffer(r)) throw new TypeError("argument should be a Buffer");
            if (n || (n = 0), !e && e !== 0 && (e = this.length), t >= r.length && (t = r.length), t || (t = 0), e > 0 && e < n && (e = n), e === n || r.length === 0 || this.length === 0) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
            if (e < 0) throw new RangeError("sourceEnd out of bounds");
            e > this.length && (e = this.length), r.length - t < e - n && (e = r.length - t + n);
            const o = e - n;
            return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, e) : Uint8Array.prototype.set.call(r, this.subarray(n, e), t), o;
        }, u.prototype.fill = function(r, t, n, e) {
            if (typeof r == "string") {
                if (typeof t == "string" ? (e = t, t = 0, n = this.length) : typeof n == "string" && (e = n, n = this.length), e !== void 0 && typeof e != "string") throw new TypeError("encoding must be a string");
                if (typeof e == "string" && !u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                if (r.length === 1) {
                    const h = r.charCodeAt(0);
                    (e === "utf8" && h < 128 || e === "latin1") && (r = h);
                }
            } else typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
            if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
            if (n <= t) return this;
            t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, r || (r = 0);
            let o;
            if (typeof r == "number") for(o = t; o < n; ++o)this[o] = r;
            else {
                const h = u.isBuffer(r) ? r : u.from(r, e), f = h.length;
                if (f === 0) throw new TypeError('The value "' + r + '" is invalid for argument "value"');
                for(o = 0; o < n - t; ++o)this[o + t] = h[o % f];
            }
            return this;
        };
        const g = {};
        function b(i, r, t) {
            g[i] = class extends t {
                constructor(){
                    super(), Object.defineProperty(this, "message", {
                        value: r.apply(this, arguments),
                        writable: !0,
                        configurable: !0
                    }), this.name = `${this.name} [${i}]`, this.stack, delete this.name;
                }
                get code() {
                    return i;
                }
                set code(e) {
                    Object.defineProperty(this, "code", {
                        configurable: !0,
                        enumerable: !0,
                        value: e,
                        writable: !0
                    });
                }
                toString() {
                    return `${this.name} [${i}]: ${this.message}`;
                }
            };
        }
        b("ERR_BUFFER_OUT_OF_BOUNDS", function(i) {
            return i ? `${i} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
        }, RangeError), b("ERR_INVALID_ARG_TYPE", function(i, r) {
            return `The "${i}" argument must be of type number. Received type ${typeof r}`;
        }, TypeError), b("ERR_OUT_OF_RANGE", function(i, r, t) {
            let n = `The value of "${i}" is out of range.`, e = t;
            return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? e = z(String(t)) : typeof t == "bigint" && (e = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (e = z(e)), e += "n"), n += ` It must be ${r}. Received ${e}`, n;
        }, RangeError);
        function z(i) {
            let r = "", t = i.length;
            const n = i[0] === "-" ? 1 : 0;
            for(; t >= n + 4; t -= 3)r = `_${i.slice(t - 3, t)}${r}`;
            return `${i.slice(0, t)}${r}`;
        }
        function Br(i, r, t) {
            I(r, "offset"), (i[r] === void 0 || i[r + t] === void 0) && F(r, i.length - (t + 1));
        }
        function H(i, r, t, n, e, o) {
            if (i > t || i < r) {
                const h = typeof r == "bigint" ? "n" : "";
                let f;
                throw r === 0 || r === BigInt(0) ? f = `>= 0${h} and < 2${h} ** ${(o + 1) * 8}${h}` : f = `>= -(2${h} ** ${(o + 1) * 8 - 1}${h}) and < 2 ** ${(o + 1) * 8 - 1}${h}`, new g.ERR_OUT_OF_RANGE("value", f, i);
            }
            Br(n, e, o);
        }
        function I(i, r) {
            if (typeof i != "number") throw new g.ERR_INVALID_ARG_TYPE(r, "number", i);
        }
        function F(i, r, t) {
            throw Math.floor(i) !== i ? (I(i, t), new g.ERR_OUT_OF_RANGE("offset", "an integer", i)) : r < 0 ? new g.ERR_BUFFER_OUT_OF_BOUNDS() : new g.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${r}`, i);
        }
        const xr = /[^+/0-9A-Za-z-_]/g;
        function Er(i) {
            if (i = i.split("=")[0], i = i.trim().replace(xr, ""), i.length < 2) return "";
            for(; i.length % 4 !== 0;)i = i + "=";
            return i;
        }
        function L(i, r) {
            r = r || 1 / 0;
            let t;
            const n = i.length;
            let e = null;
            const o = [];
            for(let h = 0; h < n; ++h){
                if (t = i.charCodeAt(h), t > 55295 && t < 57344) {
                    if (!e) {
                        if (t > 56319) {
                            (r -= 3) > -1 && o.push(239, 191, 189);
                            continue;
                        } else if (h + 1 === n) {
                            (r -= 3) > -1 && o.push(239, 191, 189);
                            continue;
                        }
                        e = t;
                        continue;
                    }
                    if (t < 56320) {
                        (r -= 3) > -1 && o.push(239, 191, 189), e = t;
                        continue;
                    }
                    t = (e - 55296 << 10 | t - 56320) + 65536;
                } else e && (r -= 3) > -1 && o.push(239, 191, 189);
                if (e = null, t < 128) {
                    if ((r -= 1) < 0) break;
                    o.push(t);
                } else if (t < 2048) {
                    if ((r -= 2) < 0) break;
                    o.push(t >> 6 | 192, t & 63 | 128);
                } else if (t < 65536) {
                    if ((r -= 3) < 0) break;
                    o.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                } else if (t < 1114112) {
                    if ((r -= 4) < 0) break;
                    o.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                } else throw new Error("Invalid code point");
            }
            return o;
        }
        function mr(i) {
            const r = [];
            for(let t = 0; t < i.length; ++t)r.push(i.charCodeAt(t) & 255);
            return r;
        }
        function gr(i, r) {
            let t, n, e;
            const o = [];
            for(let h = 0; h < i.length && !((r -= 2) < 0); ++h)t = i.charCodeAt(h), n = t >> 8, e = t % 256, o.push(e), o.push(n);
            return o;
        }
        function K(i) {
            return R.toByteArray(Er(i));
        }
        function A(i, r, t, n) {
            let e;
            for(e = 0; e < n && !(e + t >= r.length || e >= i.length); ++e)r[e + t] = i[e];
            return e;
        }
        function w(i, r) {
            return i instanceof r || i != null && i.constructor != null && i.constructor.name != null && i.constructor.name === r.name;
        }
        function D(i) {
            return i !== i;
        }
        const Ir = function() {
            const i = "0123456789abcdef", r = new Array(256);
            for(let t = 0; t < 16; ++t){
                const n = t * 16;
                for(let e = 0; e < 16; ++e)r[n + e] = i[t] + i[e];
            }
            return r;
        }();
        function x(i) {
            return typeof BigInt > "u" ? dr : i;
        }
        function dr() {
            throw new Error("BigInt not supported");
        }
    }(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"]), __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"]);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web34.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "b",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web57$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web57.js [app-client] (ecmascript)");
;
var f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web57$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])();
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web112.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concat",
    ()=>f,
    "decoder",
    ()=>s,
    "encoder",
    ()=>d
]);
const d = new TextEncoder(), s = new TextDecoder();
function f(...n) {
    const c = n.reduce((e, { length: r })=>e + r, 0), t = new Uint8Array(c);
    let o = 0;
    for (const e of n)t.set(e, o), o += e.length;
    return t;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web169.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeBase64",
    ()=>a,
    "encodeBase64",
    ()=>o
]);
function o(t) {
    if (Uint8Array.prototype.toBase64) return t.toBase64();
    const e = 32768, n = [];
    for(let r = 0; r < t.length; r += e)n.push(String.fromCharCode.apply(null, t.subarray(r, r + e)));
    return btoa(n.join(""));
}
function a(t) {
    if (Uint8Array.fromBase64) return Uint8Array.fromBase64(t);
    const e = atob(t), n = new Uint8Array(e.length);
    for(let r = 0; r < e.length; r++)n[r] = e.charCodeAt(r);
    return n;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web147.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>i,
    "encode",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web112$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web112.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web169$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web169.js [app-client] (ecmascript)");
;
;
function i(r) {
    if (Uint8Array.fromBase64) return Uint8Array.fromBase64(typeof r == "string" ? r : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web112$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decoder"].decode(r), {
        alphabet: "base64url"
    });
    let e = r;
    e instanceof Uint8Array && (e = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web112$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decoder"].decode(e)), e = e.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web169$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBase64"])(e);
    } catch  {
        throw new TypeError("The input to be decoded is not correctly encoded.");
    }
}
function p(r) {
    let e = r;
    return typeof e == "string" && (e = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web112$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encoder"].encode(e)), Uint8Array.prototype.toBase64 ? e.toBase64({
        alphabet: "base64url",
        omitPadding: !0
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web169$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web64.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JOSEError",
    ()=>c,
    "JOSENotSupported",
    ()=>E,
    "JWSInvalid",
    ()=>o,
    "JWTInvalid",
    ()=>r
]);
class c extends Error {
    static code = "ERR_JOSE_GENERIC";
    code = "ERR_JOSE_GENERIC";
    constructor(s, e){
        super(s, e), this.name = this.constructor.name, Error.captureStackTrace?.(this, this.constructor);
    }
}
class E extends c {
    static code = "ERR_JOSE_NOT_SUPPORTED";
    code = "ERR_JOSE_NOT_SUPPORTED";
}
class o extends c {
    static code = "ERR_JWS_INVALID";
    code = "ERR_JWS_INVALID";
}
class r extends c {
    static code = "ERR_JWT_INVALID";
    code = "ERR_JWT_INVALID";
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web170.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>S
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web64.js [app-client] (ecmascript)");
;
const S = (e, s)=>{
    const a = `SHA-${e.slice(-3)}`;
    switch(e){
        case "HS256":
        case "HS384":
        case "HS512":
            return {
                hash: a,
                name: "HMAC"
            };
        case "PS256":
        case "PS384":
        case "PS512":
            return {
                hash: a,
                name: "RSA-PSS",
                saltLength: parseInt(e.slice(-3), 10) >> 3
            };
        case "RS256":
        case "RS384":
        case "RS512":
            return {
                hash: a,
                name: "RSASSA-PKCS1-v1_5"
            };
        case "ES256":
        case "ES384":
        case "ES512":
            return {
                hash: a,
                name: "ECDSA",
                namedCurve: s.namedCurve
            };
        case "Ed25519":
        case "EdDSA":
            return {
                name: "Ed25519"
            };
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOSENotSupported"](`alg ${e} is not supported either by JOSE or your javascript runtime`);
    }
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web171.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>o
]);
const o = (t, r)=>{
    if (t.startsWith("RS") || t.startsWith("PS")) {
        const { modulusLength: e } = r.algorithm;
        if (typeof e != "number" || e < 2048) throw new TypeError(`${t} requires key modulusLength to be 2048 bits or larger`);
    }
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web181.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkSigCryptoKey",
    ()=>u
]);
function r(t, e = "algorithm.name") {
    return new TypeError(`CryptoKey does not support this operation, its ${e} must be ${t}`);
}
function o(t, e) {
    return t.name === e;
}
function c(t) {
    return parseInt(t.name.slice(4), 10);
}
function h(t) {
    switch(t){
        case "ES256":
            return "P-256";
        case "ES384":
            return "P-384";
        case "ES512":
            return "P-521";
        default:
            throw new Error("unreachable");
    }
}
function i(t, e) {
    if (!t.usages.includes(e)) throw new TypeError(`CryptoKey does not support this operation, its usages must include ${e}.`);
}
function u(t, e, n) {
    switch(e){
        case "HS256":
        case "HS384":
        case "HS512":
            {
                if (!o(t.algorithm, "HMAC")) throw r("HMAC");
                const a = parseInt(e.slice(2), 10);
                if (c(t.algorithm.hash) !== a) throw r(`SHA-${a}`, "algorithm.hash");
                break;
            }
        case "RS256":
        case "RS384":
        case "RS512":
            {
                if (!o(t.algorithm, "RSASSA-PKCS1-v1_5")) throw r("RSASSA-PKCS1-v1_5");
                const a = parseInt(e.slice(2), 10);
                if (c(t.algorithm.hash) !== a) throw r(`SHA-${a}`, "algorithm.hash");
                break;
            }
        case "PS256":
        case "PS384":
        case "PS512":
            {
                if (!o(t.algorithm, "RSA-PSS")) throw r("RSA-PSS");
                const a = parseInt(e.slice(2), 10);
                if (c(t.algorithm.hash) !== a) throw r(`SHA-${a}`, "algorithm.hash");
                break;
            }
        case "Ed25519":
        case "EdDSA":
            {
                if (!o(t.algorithm, "Ed25519")) throw r("Ed25519");
                break;
            }
        case "ES256":
        case "ES384":
        case "ES512":
            {
                if (!o(t.algorithm, "ECDSA")) throw r("ECDSA");
                const a = h(e);
                if (t.algorithm.namedCurve !== a) throw r(a, "algorithm.namedCurve");
                break;
            }
        default:
            throw new TypeError("CryptoKey does not support this operation");
    }
    i(t, n);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web173.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>r,
    "withAlg",
    ()=>t
]);
function i(n, e, ...o) {
    if (o = o.filter(Boolean), o.length > 2) {
        const f = o.pop();
        n += `one of type ${o.join(", ")}, or ${f}.`;
    } else o.length === 2 ? n += `one of type ${o[0]} or ${o[1]}.` : n += `of type ${o[0]}.`;
    return e == null ? n += ` Received ${e}` : typeof e == "function" && e.name ? n += ` Received function ${e.name}` : typeof e == "object" && e != null && e.constructor?.name && (n += ` Received an instance of ${e.constructor.name}`), n;
}
const r = (n, ...e)=>i("Key must be ", n, ...e);
function t(n, e, ...o) {
    return i(`Key for the ${n} algorithm must be `, e, ...o);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web172.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web181$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web181.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web173$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web173.js [app-client] (ecmascript)");
;
;
const s = async (t, r, e)=>{
    if (r instanceof Uint8Array) {
        if (!t.startsWith("HS")) throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web173$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r, "CryptoKey", "KeyObject", "JSON Web Key"));
        return crypto.subtle.importKey("raw", r, {
            hash: `SHA-${t.slice(-3)}`,
            name: "HMAC"
        }, !1, [
            e
        ]);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web181$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkSigCryptoKey"])(r, t, e), r;
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web148.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web170$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web170.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web171$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web171.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web172$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web172.js [app-client] (ecmascript)");
;
;
;
const y = async (t, o, e)=>{
    const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web172$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, o, "sign");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web171$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, r);
    const i = await crypto.subtle.sign((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web170$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, r.algorithm), r, e);
    return new Uint8Array(i);
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web149.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>a
]);
const a = (...o)=>{
    const t = o.filter(Boolean);
    if (t.length === 0 || t.length === 1) return !0;
    let e;
    for (const s of t){
        const r = Object.keys(s);
        if (!e || e.size === 0) {
            e = new Set(r);
            continue;
        }
        for (const n of r){
            if (e.has(n)) return !1;
            e.add(n);
        }
    }
    return !0;
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web174.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>n,
    "isCryptoKey",
    ()=>e,
    "isKeyObject",
    ()=>r
]);
function e(t) {
    return t?.[Symbol.toStringTag] === "CryptoKey";
}
function r(t) {
    return t?.[Symbol.toStringTag] === "KeyObject";
}
const n = (t)=>e(t) || r(t);
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web115.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>r
]);
function o(t) {
    return typeof t == "object" && t !== null;
}
const r = (t)=>{
    if (!o(t) || Object.prototype.toString.call(t) !== "[object Object]") return !1;
    if (Object.getPrototypeOf(t) === null) return !0;
    let e = t;
    for(; Object.getPrototypeOf(e) !== null;)e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(t) === e;
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web175.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isJWK",
    ()=>r,
    "isPrivateJWK",
    ()=>o,
    "isPublicJWK",
    ()=>e,
    "isSecretJWK",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web115$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web115.js [app-client] (ecmascript)");
;
function r(t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web115$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t) && typeof t.kty == "string";
}
function o(t) {
    return t.kty !== "oct" && typeof t.d == "string";
}
function e(t) {
    return t.kty !== "oct" && typeof t.d > "u";
}
function c(t) {
    return t.kty === "oct" && typeof t.k == "string";
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web150.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web173$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web173.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web174$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web174.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web175$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web175.js [app-client] (ecmascript)");
;
;
;
const s = (r)=>r?.[Symbol.toStringTag], o = (r, e, t)=>{
    if (e.use !== void 0) {
        let i;
        switch(t){
            case "sign":
            case "verify":
                i = "sig";
                break;
            case "encrypt":
            case "decrypt":
                i = "enc";
                break;
        }
        if (e.use !== i) throw new TypeError(`Invalid key for this operation, its "use" must be "${i}" when present`);
    }
    if (e.alg !== void 0 && e.alg !== r) throw new TypeError(`Invalid key for this operation, its "alg" must be "${r}" when present`);
    if (Array.isArray(e.key_ops)) {
        let i;
        switch(!0){
            case t === "sign":
            case r === "dir":
            case r.includes("CBC-HS"):
                i = t;
                break;
            case r.startsWith("PBES2"):
                i = "deriveBits";
                break;
            case /^A\d{3}(?:GCM)?(?:KW)?$/.test(r):
                !r.includes("GCM") && r.endsWith("KW") ? i = "unwrapKey" : i = t;
                break;
            case t === "encrypt":
                i = "wrapKey";
                break;
            case t === "decrypt":
                i = r.startsWith("RSA") ? "unwrapKey" : "deriveBits";
                break;
        }
        if (i && e.key_ops?.includes?.(i) === !1) throw new TypeError(`Invalid key for this operation, its "key_ops" must include "${i}" when present`);
    }
    return !0;
}, h = (r, e, t)=>{
    if (!(e instanceof Uint8Array)) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web175$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJWK"])(e)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web175$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSecretJWK"])(e) && o(r, e, t)) return;
            throw new TypeError('JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present');
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web174$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e)) throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web173$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAlg"])(r, e, "CryptoKey", "KeyObject", "JSON Web Key", "Uint8Array"));
        if (e.type !== "secret") throw new TypeError(`${s(e)} instances for symmetric algorithms must be of type "secret"`);
    }
}, m = (r, e, t)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web175$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJWK"])(e)) switch(t){
        case "decrypt":
        case "sign":
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web175$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrivateJWK"])(e) && o(r, e, t)) return;
            throw new TypeError("JSON Web Key for this operation be a private JWK");
        case "encrypt":
        case "verify":
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web175$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPublicJWK"])(e) && o(r, e, t)) return;
            throw new TypeError("JSON Web Key for this operation be a public JWK");
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web174$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e)) throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web173$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAlg"])(r, e, "CryptoKey", "KeyObject", "JSON Web Key"));
    if (e.type === "secret") throw new TypeError(`${s(e)} instances for asymmetric algorithms must not be of type "secret"`);
    if (e.type === "public") switch(t){
        case "sign":
            throw new TypeError(`${s(e)} instances for asymmetric algorithm signing must be of type "private"`);
        case "decrypt":
            throw new TypeError(`${s(e)} instances for asymmetric algorithm decryption must be of type "private"`);
    }
    if (e.type === "private") switch(t){
        case "verify":
            throw new TypeError(`${s(e)} instances for asymmetric algorithm verifying must be of type "public"`);
        case "encrypt":
            throw new TypeError(`${s(e)} instances for asymmetric algorithm encryption must be of type "public"`);
    }
}, d = (r, e, t)=>{
    r.startsWith("HS") || r === "dir" || r.startsWith("PBES2") || /^A(?:128|192|256)(?:GCM)?(?:KW)?$/.test(r) || /^A(?:128|192|256)CBC-HS(?:256|384|512)$/.test(r) ? h(r, e, t) : m(r, e, t);
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web151.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>w
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web64.js [app-client] (ecmascript)");
;
const w = (n, r, a, e, s)=>{
    if (s.crit !== void 0 && e?.crit === void 0) throw new n('"crit" (Critical) Header Parameter MUST be integrity protected');
    if (!e || e.crit === void 0) return /* @__PURE__ */ new Set();
    if (!Array.isArray(e.crit) || e.crit.length === 0 || e.crit.some((i)=>typeof i != "string" || i.length === 0)) throw new n('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    let t;
    a !== void 0 ? t = new Map([
        ...Object.entries(a),
        ...r.entries()
    ]) : t = r;
    for (const i of e.crit){
        if (!t.has(i)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOSENotSupported"](`Extension Header Parameter "${i}" is not recognized`);
        if (s[i] === void 0) throw new n(`Extension Header Parameter "${i}" is missing`);
        if (t.get(i) && e[i] === void 0) throw new n(`Extension Header Parameter "${i}" MUST be integrity protected`);
    }
    return new Set(e.crit);
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web176.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>i
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web64.js [app-client] (ecmascript)");
;
function n(e) {
    let a, r;
    switch(e.kty){
        case "RSA":
            {
                switch(e.alg){
                    case "PS256":
                    case "PS384":
                    case "PS512":
                        a = {
                            name: "RSA-PSS",
                            hash: `SHA-${e.alg.slice(-3)}`
                        }, r = e.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "RS256":
                    case "RS384":
                    case "RS512":
                        a = {
                            name: "RSASSA-PKCS1-v1_5",
                            hash: `SHA-${e.alg.slice(-3)}`
                        }, r = e.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "RSA-OAEP":
                    case "RSA-OAEP-256":
                    case "RSA-OAEP-384":
                    case "RSA-OAEP-512":
                        a = {
                            name: "RSA-OAEP",
                            hash: `SHA-${parseInt(e.alg.slice(-3), 10) || 1}`
                        }, r = e.d ? [
                            "decrypt",
                            "unwrapKey"
                        ] : [
                            "encrypt",
                            "wrapKey"
                        ];
                        break;
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        case "EC":
            {
                switch(e.alg){
                    case "ES256":
                        a = {
                            name: "ECDSA",
                            namedCurve: "P-256"
                        }, r = e.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "ES384":
                        a = {
                            name: "ECDSA",
                            namedCurve: "P-384"
                        }, r = e.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "ES512":
                        a = {
                            name: "ECDSA",
                            namedCurve: "P-521"
                        }, r = e.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "ECDH-ES":
                    case "ECDH-ES+A128KW":
                    case "ECDH-ES+A192KW":
                    case "ECDH-ES+A256KW":
                        a = {
                            name: "ECDH",
                            namedCurve: e.crv
                        }, r = e.d ? [
                            "deriveBits"
                        ] : [];
                        break;
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        case "OKP":
            {
                switch(e.alg){
                    case "Ed25519":
                    case "EdDSA":
                        a = {
                            name: "Ed25519"
                        }, r = e.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "ECDH-ES":
                    case "ECDH-ES+A128KW":
                    case "ECDH-ES+A192KW":
                    case "ECDH-ES+A256KW":
                        a = {
                            name: e.crv
                        }, r = e.d ? [
                            "deriveBits"
                        ] : [];
                        break;
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
    }
    return {
        algorithm: a,
        keyUsages: r
    };
}
const i = async (e)=>{
    if (!e.alg) throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
    const { algorithm: a, keyUsages: r } = n(e), t = {
        ...e
    };
    return delete t.alg, delete t.use, crypto.subtle.importKey("jwk", t, a, e.ext ?? !e.d, e.key_ops ?? r);
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web152.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web175$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web175.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web147$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web147.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web176$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web176.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web174$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web174.js [app-client] (ecmascript)");
;
;
;
;
let c;
const f = async (e, r, s, i = !1)=>{
    c ||= /* @__PURE__ */ new WeakMap();
    let n = c.get(e);
    if (n?.[s]) return n[s];
    const t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web176$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ...r,
        alg: s
    });
    return i && Object.freeze(e), n ? n[s] = t : c.set(e, {
        [s]: t
    }), t;
}, E = (e, r)=>{
    c ||= /* @__PURE__ */ new WeakMap();
    let s = c.get(e);
    if (s?.[r]) return s[r];
    const i = e.type === "public", n = !!i;
    let t;
    if (e.asymmetricKeyType === "x25519") {
        switch(r){
            case "ECDH-ES":
            case "ECDH-ES+A128KW":
            case "ECDH-ES+A192KW":
            case "ECDH-ES+A256KW":
                break;
            default:
                throw new TypeError("given KeyObject instance cannot be used for this algorithm");
        }
        t = e.toCryptoKey(e.asymmetricKeyType, n, i ? [] : [
            "deriveBits"
        ]);
    }
    if (e.asymmetricKeyType === "ed25519") {
        if (r !== "EdDSA" && r !== "Ed25519") throw new TypeError("given KeyObject instance cannot be used for this algorithm");
        t = e.toCryptoKey(e.asymmetricKeyType, n, [
            i ? "verify" : "sign"
        ]);
    }
    if (e.asymmetricKeyType === "rsa") {
        let a;
        switch(r){
            case "RSA-OAEP":
                a = "SHA-1";
                break;
            case "RS256":
            case "PS256":
            case "RSA-OAEP-256":
                a = "SHA-256";
                break;
            case "RS384":
            case "PS384":
            case "RSA-OAEP-384":
                a = "SHA-384";
                break;
            case "RS512":
            case "PS512":
            case "RSA-OAEP-512":
                a = "SHA-512";
                break;
            default:
                throw new TypeError("given KeyObject instance cannot be used for this algorithm");
        }
        if (r.startsWith("RSA-OAEP")) return e.toCryptoKey({
            name: "RSA-OAEP",
            hash: a
        }, n, i ? [
            "encrypt"
        ] : [
            "decrypt"
        ]);
        t = e.toCryptoKey({
            name: r.startsWith("PS") ? "RSA-PSS" : "RSASSA-PKCS1-v1_5",
            hash: a
        }, n, [
            i ? "verify" : "sign"
        ]);
    }
    if (e.asymmetricKeyType === "ec") {
        const o = /* @__PURE__ */ new Map([
            [
                "prime256v1",
                "P-256"
            ],
            [
                "secp384r1",
                "P-384"
            ],
            [
                "secp521r1",
                "P-521"
            ]
        ]).get(e.asymmetricKeyDetails?.namedCurve);
        if (!o) throw new TypeError("given KeyObject instance cannot be used for this algorithm");
        r === "ES256" && o === "P-256" && (t = e.toCryptoKey({
            name: "ECDSA",
            namedCurve: o
        }, n, [
            i ? "verify" : "sign"
        ])), r === "ES384" && o === "P-384" && (t = e.toCryptoKey({
            name: "ECDSA",
            namedCurve: o
        }, n, [
            i ? "verify" : "sign"
        ])), r === "ES512" && o === "P-521" && (t = e.toCryptoKey({
            name: "ECDSA",
            namedCurve: o
        }, n, [
            i ? "verify" : "sign"
        ])), r.startsWith("ECDH-ES") && (t = e.toCryptoKey({
            name: "ECDH",
            namedCurve: o
        }, n, i ? [] : [
            "deriveBits"
        ]));
    }
    if (!t) throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    return s ? s[r] = t : c.set(e, {
        [r]: t
    }), t;
}, d = async (e, r)=>{
    if (e instanceof Uint8Array || (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web174$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCryptoKey"])(e)) return e;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web174$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyObject"])(e)) {
        if (e.type === "secret") return e.export();
        if ("toCryptoKey" in e && typeof e.toCryptoKey == "function") try {
            return E(e, r);
        } catch (i) {
            if (i instanceof TypeError) throw i;
        }
        let s = e.export({
            format: "jwk"
        });
        return f(e, s, r);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web175$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJWK"])(e)) return e.k ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web147$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(e.k) : f(e, e, r, !0);
    throw new Error("unreachable");
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web111.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlattenedSign",
    ()=>x
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web147$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web147.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web148$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web148.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web149$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web149.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web112$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web112.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web150$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web150.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web151$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web151.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web152$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web152.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class x {
    #r;
    #e;
    #t;
    constructor(e){
        if (!(e instanceof Uint8Array)) throw new TypeError("payload must be an instance of Uint8Array");
        this.#r = e;
    }
    setProtectedHeader(e) {
        if (this.#e) throw new TypeError("setProtectedHeader can only be called once");
        return this.#e = e, this;
    }
    setUnprotectedHeader(e) {
        if (this.#t) throw new TypeError("setUnprotectedHeader can only be called once");
        return this.#t = e, this;
    }
    async sign(e, l) {
        if (!this.#e && !this.#t) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JWSInvalid"]("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web149$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.#e, this.#t)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JWSInvalid"]("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
        const c = {
            ...this.#e,
            ...this.#t
        }, p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web151$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JWSInvalid"], /* @__PURE__ */ new Map([
            [
                "b64",
                !0
            ]
        ]), l?.crit, this.#e, c);
        let o = !0;
        if (p.has("b64") && (o = this.#e.b64, typeof o != "boolean")) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JWSInvalid"]('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        const { alg: t } = c;
        if (typeof t != "string" || !t) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web150$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, e, "sign");
        let i = this.#r;
        o && (i = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web112$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encoder"].encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web147$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(i)));
        let n;
        this.#e ? n = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web112$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encoder"].encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web147$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(JSON.stringify(this.#e))) : n = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web112$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encoder"].encode("");
        const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web112$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])(n, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web112$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encoder"].encode("."), i), m = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web152$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e, t), w = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web148$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, m, f), a = {
            signature: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web147$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(w),
            payload: ""
        };
        return o && (a.payload = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web112$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decoder"].decode(i)), this.#t && (a.header = this.#t), this.#e && (a.protected = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web112$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decoder"].decode(n)), a;
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web63.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompactSign",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web111$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web111.js [app-client] (ecmascript)");
;
class o {
    #e;
    constructor(e){
        this.#e = new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web111$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlattenedSign"](e);
    }
    setProtectedHeader(e) {
        return this.#e.setProtectedHeader(e), this;
    }
    async sign(e, r) {
        const t = await this.#e.sign(e, r);
        if (t.payload === void 0) throw new TypeError("use the flattened module for creating JWS with b64: false");
        return `${t.protected}.${t.payload}.${t.signature}`;
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web113.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>o
]);
const o = (e)=>Math.floor(e.getTime() / 1e3);
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web114.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>t
]);
const o = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i, t = (c)=>{
    const s = o.exec(c);
    if (!s || s[4] && s[1]) throw new TypeError("Invalid time period format");
    const a = parseFloat(s[2]), r = s[3].toLowerCase();
    let e;
    switch(r){
        case "sec":
        case "secs":
        case "second":
        case "seconds":
        case "s":
            e = Math.round(a);
            break;
        case "minute":
        case "minutes":
        case "min":
        case "mins":
        case "m":
            e = Math.round(a * 60);
            break;
        case "hour":
        case "hours":
        case "hr":
        case "hrs":
        case "h":
            e = Math.round(a * 3600);
            break;
        case "day":
        case "days":
        case "d":
            e = Math.round(a * 86400);
            break;
        case "week":
        case "weeks":
        case "w":
            e = Math.round(a * 604800);
            break;
        default:
            e = Math.round(a * 31557600);
            break;
    }
    return s[1] === "-" || s[4] === "ago" ? -e : e;
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web65.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JWTClaimsBuilder",
    ()=>d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web112$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web112.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web113$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web113.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web114$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web114.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web115$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web115.js [app-client] (ecmascript)");
;
;
;
;
function s(r, t) {
    if (!Number.isFinite(t)) throw new TypeError(`Invalid ${r} input`);
    return t;
}
class d {
    #t;
    constructor(t){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web115$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t)) throw new TypeError("JWT Claims Set MUST be an object");
        this.#t = structuredClone(t);
    }
    data() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web112$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encoder"].encode(JSON.stringify(this.#t));
    }
    get iss() {
        return this.#t.iss;
    }
    set iss(t) {
        this.#t.iss = t;
    }
    get sub() {
        return this.#t.sub;
    }
    set sub(t) {
        this.#t.sub = t;
    }
    get aud() {
        return this.#t.aud;
    }
    set aud(t) {
        this.#t.aud = t;
    }
    set jti(t) {
        this.#t.jti = t;
    }
    set nbf(t) {
        typeof t == "number" ? this.#t.nbf = s("setNotBefore", t) : t instanceof Date ? this.#t.nbf = s("setNotBefore", (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web113$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t)) : this.#t.nbf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web113$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(/* @__PURE__ */ new Date()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web114$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t);
    }
    set exp(t) {
        typeof t == "number" ? this.#t.exp = s("setExpirationTime", t) : t instanceof Date ? this.#t.exp = s("setExpirationTime", (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web113$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t)) : this.#t.exp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web113$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(/* @__PURE__ */ new Date()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web114$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t);
    }
    set iat(t) {
        typeof t > "u" ? this.#t.iat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web113$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(/* @__PURE__ */ new Date()) : t instanceof Date ? this.#t.iat = s("setIssuedAt", (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web113$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t)) : typeof t == "string" ? this.#t.iat = s("setIssuedAt", (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web113$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(/* @__PURE__ */ new Date()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web114$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t)) : this.#t.iat = s("setIssuedAt", t);
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web49.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignJWT",
    ()=>d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web63$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web63.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web65$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web65.js [app-client] (ecmascript)");
;
;
;
class d {
    #s;
    #t;
    constructor(t = {}){
        this.#t = new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web65$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JWTClaimsBuilder"](t);
    }
    setIssuer(t) {
        return this.#t.iss = t, this;
    }
    setSubject(t) {
        return this.#t.sub = t, this;
    }
    setAudience(t) {
        return this.#t.aud = t, this;
    }
    setJti(t) {
        return this.#t.jti = t, this;
    }
    setNotBefore(t) {
        return this.#t.nbf = t, this;
    }
    setExpirationTime(t) {
        return this.#t.exp = t, this;
    }
    setIssuedAt(t) {
        return this.#t.iat = t, this;
    }
    setProtectedHeader(t) {
        return this.#s = t, this;
    }
    async sign(t, e) {
        const s = new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web63$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompactSign"](this.#t.data());
        if (s.setProtectedHeader(this.#s), Array.isArray(this.#s?.crit) && this.#s.crit.includes("b64") && this.#s.b64 === !1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JWTInvalid"]("JWTs MUST NOT use unencoded payload");
        return s.sign(t, e);
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web38.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toAuthState",
    ()=>s,
    "toAuthStateUser",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
const a = (t)=>({
        userId: t.userId,
        // Deprecated fields - keep for backward compatibility
        evmAccounts: t.evmAccounts?.map((c)=>c) ?? [],
        evmSmartAccounts: t.evmSmartAccounts?.map((c)=>c) ?? [],
        solanaAccounts: t.solanaAccounts?.map((c)=>c) ?? [],
        // New account object fields
        evmAccountObjects: t.evmAccountObjects,
        evmSmartAccountObjects: t.evmSmartAccountObjects,
        solanaAccountObjects: t.solanaAccountObjects,
        authenticationMethods: t.authenticationMethods.reduce((c, o)=>(c[o.type] = o, c), {}),
        mfaMethods: t.mfaMethods
    }), s = (t, c, o)=>{
    const e = new Date(c).getTime();
    return {
        accessToken: t,
        expiresAt: e,
        user: a(o)
    };
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web43.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isChainIdSupportedForCDPSends",
    ()=>u,
    "isChainIdSupportedForCDPUserOps",
    ()=>d,
    "isChainSupportedForCDPSends",
    ()=>p,
    "sendTransactionChainIdToNameMapping",
    ()=>c,
    "sortKeys",
    ()=>t,
    "userOperationChainIdToNameMapping",
    ()=>m,
    "userOperationNameToChainIdMapping",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index6.js [app-client] (ecmascript)");
;
const t = (e)=>!e || typeof e != "object" ? e : Array.isArray(e) ? e.map(t) : Object.keys(e).sort().reduce((r, n)=>(r[n] = t(e[n]), r), {}), p = (e)=>Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SendEvmTransactionWithEndUserAccountBodyNetwork"]).includes(e), s = {
    "base-sepolia": 84532,
    base: 8453,
    ethereum: 1,
    "ethereum-sepolia": 11155111,
    avalanche: 43114,
    polygon: 137,
    optimism: 10,
    arbitrum: 42161
}, c = Object.fromEntries(Object.entries(s).map(([e, r])=>[
        r,
        e
    ])), u = (e)=>Object.values(s).includes(e), a = {
    "base-sepolia": 84532,
    base: 8453,
    ethereum: 1,
    "ethereum-sepolia": 11155111,
    avalanche: 43114,
    polygon: 137,
    optimism: 10,
    arbitrum: 42161,
    zora: 7777777,
    bnb: 56
}, m = Object.fromEntries(Object.entries(a).map(([e, r])=>[
        r,
        e
    ])), d = (e)=>Object.values(a).includes(e);
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getConfig",
    ()=>g,
    "getCoreAuthManager",
    ()=>u,
    "getCoreOAuthManager",
    ()=>s,
    "setConfig",
    ()=>a,
    "setCoreAuthManager",
    ()=>l,
    "setCoreOAuthManager",
    ()=>h
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
;
let r = null, n = null, e = null;
const a = (t)=>{
    r = t;
}, g = ()=>{
    if (!r) throw new Error("SDK not initialized");
    return r;
}, l = (t)=>{
    n = t;
}, u = ()=>{
    if (!n) throw new Error("SDK not initialized");
    return n;
}, h = (t)=>{
    e = t;
}, s = ()=>{
    if (!e) throw new Error("SDK not initialized");
    return e;
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web27.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthManager",
    ()=>R
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web49$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web49.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web38.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web43.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const i = 60 * 1e3;
class R {
    projectId;
    authState = null;
    walletSecret = null;
    authStateChangeCallbacks = [];
    initPromise = null;
    refreshTimeout = null;
    /**
   * Initializes the token manager.
   *
   * @param projectId - The project ID.
   */ constructor(e){
        this.projectId = e, this.initPromise = this._doInitialize();
    }
    /**
   * Gets the current user, or null if there is no user signed in.
   *
   * @returns The current user.
   */ getUser() {
        return this.authState?.user ?? null;
    }
    /**
   * Returns whether the user is signed in - i.e., whether there is an unexpired
   * access token and user. Attempts to refresh the token if it's expired.
   *
   * @returns True if the user is signed in, false otherwise.
   */ async isSignedIn() {
        if (!this.authState) return !1;
        if (this.authState.expiresAt > Date.now() + i) return !0;
        try {
            return await this.getToken() !== null;
        } catch  {
            return !1;
        }
    }
    /**
   * Signs out the user, clearing all authentication state.
   */ async signOut() {
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logOutEndUser"])(this.projectId);
        } catch  {} finally{
            await this.clearAuthState();
        }
    }
    /**
   * Adds a callback to be called when the auth state changes.
   *
   * @param callback - The function to call when the auth state changes.
   */ addAuthStateChangeCallback(e) {
        this.authStateChangeCallbacks.push(e), e(this.authState?.user ?? null);
    }
    /**
   * Gets the access token, refreshing it if it is expired. Returns null if the user is not
   * signed in.
   *
   * @param options - The options for getting the token.
   * @param options.forceRefresh - Whether to force a refresh of the token.
   * @returns The access token.
   */ async getToken(e) {
        return (e?.forceRefresh || this.shouldRefreshToken()) && await this.refreshAccessToken(), this.authState?.accessToken ?? null;
    }
    /**
   * Gets the expiration time of the access token, or null if the user is not signed in.
   *
   * @returns The expiration time of the access token.
   */ async getTokenExpiration() {
        return this.authState?.expiresAt ?? null;
    }
    /**
   * Gets the currently registered wallet secret ID. Rejects if the user is not signed in.
   *
   * @returns The wallet secret ID.
   */ async getWalletSecretId() {
        if (!await this.isSignedIn()) throw new Error("Cannot get wallet secret ID if the user is not signed in");
        return this.shouldRefreshWalletSecret() && await this.refreshWalletSecret(), this.walletSecret.walletSecretId;
    }
    /**
   * Gets the X-Wallet-Auth header. Rejects if the user is not signed in.
   *
   * @param options - The options for the request.
   * @param options.requestMethod - The HTTP method of the request.
   * @param options.requestHost - The host of the request.
   * @param options.requestPath - The path of the request.
   * @param options.requestData - The data of the request.
   * @returns The X-Wallet-Auth header.
   */ async getXWalletAuth(e) {
        if (!await this.isSignedIn()) throw new Error("Cannot get X-Wallet-Auth header if the user is not signed in");
        this.shouldRefreshWalletSecret() && await this.refreshWalletSecret();
        const t = `${e.requestMethod} ${e.requestHost}${e.requestPath}`, r = Math.floor(Date.now() / 1e3), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformCrypto"])(), s = {
            uris: [
                t
            ]
        };
        if (e.requestData && Object.keys(e.requestData).length > 0) {
            const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortKeys"])(e.requestData);
            s.reqHash = await a.hash(new TextEncoder().encode(JSON.stringify(h)));
        }
        return await new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web49$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignJWT"](s).setProtectedHeader({
            alg: "ES256",
            typ: "JWT"
        }).setIssuedAt(r).setNotBefore(r).setJti(a.generateRandomId()).sign(this.walletSecret.keyPair.privateKey);
    }
    /**
   * Gets the authentication state.
   *
   * @returns The authentication state.
   */ getAuthState() {
        return this.authState;
    }
    /**
   * Sets the authentication state.
   *
   * @param authState - The authentication state.
   */ async setAuthState(e) {
        this.authState = e, this.authStateChangeCallbacks.forEach((t)=>t(this.authState?.user ?? null)), this.scheduleTokenRefresh();
    }
    /**
   * Clears the authentication state.
   */ async clearAuthState() {
        this.authState = null, this.walletSecret = null, this.cancelTokenRefresh(), this.authStateChangeCallbacks.forEach((e)=>e(null));
    }
    /**
   * Ensures the AuthManager is initialized before proceeding.
   * If initialization is already in progress, waits for it to complete.
   */ async ensureInitialized() {
        if (this.initPromise) {
            await this.initPromise;
            return;
        }
        throw new Error("AuthManager not initialized");
    }
    /**
   * Internal async initialization logic.
   */ async _doInitialize() {
        try {
            await this.refreshAccessToken(), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreOAuthManager"])().handleOAuthCode();
        } catch (e) {
            console.warn("Failed to refresh access token during initialization:", e);
        }
    }
    /**
   * Returns whether the token should be refreshed.
   *
   * @returns True if the token should be refreshed, false otherwise.
   */ shouldRefreshToken() {
        return !(this.authState && this.authState.expiresAt > Date.now() + i);
    }
    /**
   * Refreshes the access token and transitions the auth state accordingly.
   * If a refresh is already in progress, it will wait for that refresh to complete.
   *
   * @returns The new access token.
   */ async refreshAccessToken() {
        try {
            const e = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refreshAccessToken"])(this.projectId, {
                grantType: "refresh_token"
            }), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAuthState"])(e.accessToken, e.validUntil, e.endUser);
            await this.setAuthState(t);
        } catch  {
            await this.signOut();
        }
    }
    /**
   * Schedules a token refresh to occur exactly when shouldRefreshToken() would return true.
   * Uses the same REFRESH_CREDENTIALS_BUFFER_MS timing as the rest of the auth system.
   */ scheduleTokenRefresh() {
        if (this.cancelTokenRefresh(), !this.authState) return;
        const t = this.authState.expiresAt - i - Date.now();
        t <= 0 || (this.refreshTimeout = setTimeout(async ()=>{
            await this.refreshAccessToken(), this.scheduleTokenRefresh();
        }, t));
    }
    /**
   * Cancels any scheduled token refresh.
   */ cancelTokenRefresh() {
        this.refreshTimeout && (clearTimeout(this.refreshTimeout), this.refreshTimeout = null);
    }
    /**
   * Returns whether the wallet secret should be refreshed.
   *
   * @returns True if the wallet secret should be refreshed, false otherwise.
   */ shouldRefreshWalletSecret() {
        return !(this.walletSecret && this.walletSecret.expiresAt > Date.now() + i);
    }
    /**
   * Refreshes the wallet secret. Assumes the user is signed in.
   *
   * @returns The wallet secret.
   */ async refreshWalletSecret() {
        const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformCrypto"])(), t = this.walletSecret?.walletSecretId ?? e.generateRandomId(), r = this.walletSecret?.keyPair ?? await e.createKeyPair(), a = this.authState.expiresAt, s = new Date(a).toISOString();
        this.walletSecret = {
            walletSecretId: t,
            keyPair: r,
            expiresAt: a
        };
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerTemporaryWalletSecret"])(this.projectId, this.authState.user.userId, {
                walletSecretId: t,
                publicKey: r.publicKeyBase64,
                validUntil: s
            });
        } catch (h) {
            throw this.walletSecret = null, h;
        }
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web28.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomAuthError",
    ()=>e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index8.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index6.js [app-client] (ecmascript)");
;
;
class e extends Error {
    /**
   * Creates a new CustomAuthError.
   *
   * @param message - The error message.
   */ constructor(r){
        super(r), this.name = "CustomAuthError";
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web36.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CUSTOM_AUTH_REFRESH_BUFFER_MS",
    ()=>n,
    "CustomAuthManager",
    ()=>l
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web27$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web27.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web28$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web28.js [app-client] (ecmascript) <locals>");
;
;
;
const n = 60 * 60 * 1e3;
class l extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web27$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthManager"] {
    /**
   * Signs out the user, clearing all authentication state.
   * For custom auth, we only clear local state without calling the CDP logout API,
   * as authentication is managed by the external identity provider.
   */ async signOut() {
        await this.clearAuthState();
    }
    /**
   * Gets the access token by calling the customAuth.getJwt callback.
   * Returns null if the user is not signed in.
   *
   * @returns The access token from the custom auth provider.
   */ async getToken() {
        const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])();
        if (!e.customAuth) return console.error("Custom auth configuration not found"), await this.clearAuthState(), null;
        try {
            const t = await e.customAuth.getJwt();
            return t ? (this.authState && (this.authState.accessToken = t, this.authState.expiresAt = Date.now() + n), t) : (await this.clearAuthState(), null);
        } catch (t) {
            const r = new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web28$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CustomAuthError"](t instanceof Error ? t.message : "Failed to get custom auth JWT");
            return console.error(r), await this.clearAuthState(), null;
        }
    }
    /**
   * Internal async initialization logic for custom auth.
   * No-op for custom auth since tokens are provided via customAuth.getJwt callback.
   * Unlike standard CDP auth, custom auth doesn't need token refresh or OAuth handling.
   */ async _doInitialize() {}
    /**
   * Custom auth always fetches fresh tokens, so never needs to "refresh" in the traditional sense.
   *
   * @returns Always false since custom auth doesn't use token refresh logic.
   */ shouldRefreshToken() {
        return !1;
    }
    /**
   * Custom auth doesn't use CDP's token refresh mechanism.
   * Tokens are always provided fresh from the customAuth.getJwt callback.
   * This method should never be called, but we override it as a defensive measure.
   */ async refreshAccessToken() {}
    /**
   * Custom auth provides fresh tokens on each request via customAuth.getJwt,
   * so no scheduled refresh is needed. This method is a no-op for custom auth.
   */ scheduleTokenRefresh() {
        this.cancelTokenRefresh();
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web35.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAuthManager",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web27$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web27.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web36$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web36.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
;
function a(t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().customAuth?.getJwt ? new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web36$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomAuthManager"](t) : new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web27$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthManager"](t);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web37.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OAuthManager",
    ()=>A
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
class A {
    oauthFlowState = null;
    oauthStateChangeCallbacks = [];
    /**
   * Adds a callback to be called when the OAuth state changes.
   *
   * @param callback - The function to call when the OAuth state changes.
   */ async addOAuthStateChangeCallback(t) {
        this.oauthStateChangeCallbacks.push(t), t(this.oauthFlowState);
    }
    /**
   * Sets the OAuth flow state.
   *
   * @param oauthFlowState - The OAuth flow state.
   */ async setOAuthFlowState(t) {
        this.oauthFlowState = t, this.oauthStateChangeCallbacks.forEach((a)=>a(this.oauthFlowState));
    }
    /**
   * Clears the OAuth flow state.
   */ async clearOAuthFlowState() {
        this.oauthFlowState = null, this.oauthStateChangeCallbacks.forEach((t)=>t(null));
    }
    /**
   * Gets the OAuth flow state.
   *
   * @returns The OAuth flow state.
   */ async getOAuthFlowState() {
        return this.oauthFlowState;
    }
    /**
   * Handles the OAuth code.
   *
   * @param url - The URL to handle.
   * @returns A promise that resolves when the OAuth code is handled.
   * @throws An error if the URL is required and not provided.
   */ async handleOAuthCode(t) {
        try {
            const a = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformOAuth"])().getOAuthParams(t);
            if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformOAuth"])().cleanupOAuthParams(), !a) return;
            const { providerType: e, code: r, flowId: o, error: s, errorDescription: u } = a;
            if (s || u) {
                await this.setOAuthFlowState({
                    providerType: e,
                    status: "error",
                    errorDescription: s ?? u,
                    code: r,
                    flowId: o,
                    error: s
                });
                return;
            }
            if (!r || !e || !o) return;
            await this.setOAuthFlowState({
                providerType: e,
                status: "pending",
                code: r,
                flowId: o
            }), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyOAuth"])({
                code: r,
                providerType: e,
                flowId: o
            }), await this.setOAuthFlowState({
                providerType: e,
                status: "success",
                code: r,
                flowId: o
            });
        } catch (a) {
            const e = a instanceof Error ? a.message : "Unknown error";
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformOAuth"])().cleanupOAuthParams(), await this.setOAuthFlowState({
                status: "error",
                errorDescription: e
            });
        }
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web39.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSignedIn",
    ()=>i,
    "withAuth",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
;
const i = async (n)=>await n.isSignedIn();
async function f(n, r, o) {
    if (!await i(r)) throw new Error("User not signed in");
    const c = r.getUser();
    if ("evmAccount" in n && !c.evmAccounts?.find((t)=>t === n.evmAccount)) throw new Error("EVM account not found");
    if ("evmSmartAccount" in n && !c.evmSmartAccounts?.find((t)=>t === n.evmSmartAccount)) throw new Error("EVM Smart Account not found");
    if ("solanaAccount" in n && !c.solanaAccounts?.find((t)=>t === n.solanaAccount)) throw new Error("Solana account not found");
    const e = await r.getWalletSecretId();
    return o({
        ...n,
        user: c,
        walletSecretId: e
    });
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web42.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockAddress",
    ()=>t,
    "mockUser",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
;
const t = "0x0000000000000000000000000000000000000000", s = {
    userId: "mock-user-id",
    evmAccounts: [
        t
    ],
    evmSmartAccounts: [],
    solanaAccounts: [
        "5fNfvyp5f3BB9T24s6bC8QjDXuJqvU8WjziJpEQi9PWT"
    ],
    evmAccountObjects: [
        {
            address: t,
            createdAt: "2024-01-01T00:00:00Z"
        }
    ],
    evmSmartAccountObjects: [],
    solanaAccountObjects: [
        {
            address: "5fNfvyp5f3BB9T24s6bC8QjDXuJqvU8WjziJpEQi9PWT",
            createdAt: "2024-01-01T00:00:00Z"
        }
    ],
    authenticationMethods: {
        email: {
            type: "email",
            email: "test@test.com"
        }
    }
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web40.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MockAuthManager",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web42$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web42.js [app-client] (ecmascript)");
;
;
;
class n {
    authState = null;
    authStateChangeCallback = null;
    /**
   * Initializes the mock auth manager.
   *
   * @param _projectId - The project ID (unused in mock implementation).
   */ constructor(t){}
    /**
   * Awaitable method whose promise only resolves when the auth manager is ready to be used.
   *
   * @returns A promise that resolves when the auth manager is ready to be used.
   */ async ensureInitialized() {
        return Promise.resolve();
    }
    /**
   * Gets the current user, or null if there is no user signed in.
   *
   * @returns The current mock user if signed in, null otherwise.
   */ getUser() {
        return this.authState?.user ?? null;
    }
    /**
   * Returns whether the user is signed in - i.e., whether there is an unexpired
   * access token and user.
   *
   * @returns True if the mock user is signed in and token is not expired, false otherwise.
   */ async isSignedIn() {
        return this.authState ? Promise.resolve(this.authState.expiresAt > Date.now()) : Promise.resolve(!1);
    }
    /**
   * Signs out the user, clearing all authentication state.
   * In the mock implementation, this simply clears the local auth state.
   */ async signOut() {
        await this.clearAuthState();
    }
    /**
   * Sets a callback to be called when the auth state changes.
   * The callback is immediately called with the current auth state.
   *
   * @param callback - The function to call when the auth state changes.
   *                  Will be called with the current user or null.
   */ addAuthStateChangeCallback(t) {
        this.authStateChangeCallback = t, t(this.authState?.user ?? null);
    }
    /**
   * Gets the access token. For mock, this always returns a valid token if signed in.
   * If the current token is expired, it will be refreshed automatically.
   *
   * @param options - The options for getting the token.
   * @param options.forceRefresh - Whether to force a refresh of the token.
   * @returns The mock access token if signed in, null otherwise.
   */ async getToken(t) {
        return this.authState ? ((t?.forceRefresh || this.authState.expiresAt <= Date.now()) && await this.refreshToken(), this.authState?.accessToken ?? null) : null;
    }
    /**
   * Gets the expiration time of the access token, or null if the user is not signed in.
   *
   * @returns The expiration time of the access token.
   */ async getTokenExpiration() {
        return this.authState?.expiresAt ?? null;
    }
    /**
   * Gets the currentlly registered wallet secret ID.
   *
   * @returns The wallet secret ID.
   */ async getWalletSecretId() {
        return "mock-wallet-secret-id";
    }
    /**
   * Gets the X-Wallet-Auth header value.
   *
   * @param _options - The options for the request.
   * @param _options.requestMethod - The HTTP method of the request.
   * @param _options.requestHost - The host of the request.
   * @param _options.requestPath - The path of the request.
   * @param _options.requestData - The data of the request.
   * @returns The X-Wallet-Auth header value.
   */ async getXWalletAuth(t) {
        if (!this.authState) throw new Error("User not signed in");
        return "x-wallet-auth";
    }
    /**
   * Gets the authentication state.
   *
   * @returns The authentication state.
   */ getAuthState() {
        return this.authState;
    }
    /**
   * Sets the authentication state.
   * This will trigger the auth state change callback if one is registered.
   *
   * @param authState - The new authentication state to set.
   */ async setAuthState(t) {
        this.authState = t, this.authStateChangeCallback && this.authStateChangeCallback(this.authState?.user ?? null);
    }
    /**
   * Clears the authentication state.
   * This will trigger the auth state change callback if one is registered.
   */ async clearAuthState() {
        this.authState = null, this.authStateChangeCallback && this.authStateChangeCallback(null);
    }
    /**
   * Refreshes the mock token.
   * Only refreshes if there is an existing auth state (user is signed in).
   * Sets a new mock token with a 24-hour expiration.
   *
   * @private
   */ async refreshToken() {
        this.authState && await this.setAuthState({
            accessToken: "mock-access-token",
            expiresAt: Date.now() + 1e3 * 60 * 60 * 24,
            user: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web42$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUser"]
        });
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web41.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MockOAuthManager",
    ()=>i
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web4.js [app-client] (ecmascript)");
;
;
;
;
class i {
    oauthFlowState = null;
    oauthStateChangeCallbacks = [];
    /**
   * Initializes the mock OAuth manager.
   */ constructor(){
        this.handleOAuthCode();
    }
    /**
   * Gets the current user, or null if there is no user signed in.
   *
   * @returns The current mock user if signed in, null otherwise.
   */ async getOAuthFlowState() {
        return this.oauthFlowState ?? null;
    }
    /**
   * Sets the OAuth flow state.
   *
   * @param oauthFlowState - The OAuth flow state to set.
   */ async setOAuthFlowState(t) {
        this.oauthFlowState = t, this.oauthStateChangeCallbacks.forEach((a)=>a(this.oauthFlowState));
    }
    /**
   * Adds a callback to be called when the OAuth state changes.
   *
   * @param callback - The function to call when the OAuth state changes.
   */ async addOAuthStateChangeCallback(t) {
        this.oauthStateChangeCallbacks.push(t), t(this.oauthFlowState);
    }
    /**
   * Clears the OAuth flow state.
   */ async clearOAuthFlowState() {
        this.oauthFlowState = null, this.oauthStateChangeCallbacks.forEach((t)=>t(null));
    }
    /**
   * Awaitable method whose promise only resolves when the OAuth manager is ready to be used.
   */ async handleOAuthCode() {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformOAuth"])()?.cleanupOAuthParams(), await this.setOAuthFlowState({
            providerType: "google",
            status: "pending",
            code: "mock-oauth-code",
            flowId: "mock-flow-id"
        }), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyOAuth"])({
            code: "mock-oauth-code",
            providerType: "google",
            flowId: "mock-flow-id"
        }), await this.setOAuthFlowState({
            providerType: "google",
            status: "success",
            code: "mock-oauth-code",
            flowId: "mock-flow-id"
        });
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web117.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>o
]);
const o = "2.33.0";
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web87.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseError",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web117$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web117.js [app-client] (ecmascript)");
;
let r = {
    getDocsUrl: ({ docsBaseUrl: s, docsPath: t = "", docsSlug: e })=>t ? `${s ?? "https://viem.sh"}${t}${e ? `#${e}` : ""}` : void 0,
    version: `viem@${__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web117$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]}`
};
class u extends Error {
    constructor(t, e = {}){
        const i = e.cause instanceof u ? e.cause.details : e.cause?.message ? e.cause.message : e.details, n = e.cause instanceof u && e.cause.docsPath || e.docsPath, a = r.getDocsUrl?.({
            ...e,
            docsPath: n
        }), l = [
            t || "An error occurred.",
            "",
            ...e.metaMessages ? [
                ...e.metaMessages,
                ""
            ] : [],
            ...a ? [
                `Docs: ${a}`
            ] : [],
            ...i ? [
                `Details: ${i}`
            ] : [],
            ...r.version ? [
                `Version: ${r.version}`
            ] : []
        ].join(`
`);
        super(l, e.cause ? {
            cause: e.cause
        } : void 0), Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "metaMessages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BaseError"
        }), this.details = i, this.docsPath = n, this.metaMessages = e.metaMessages, this.name = e.name ?? this.name, this.shortMessage = t, this.version = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web117$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"];
    }
    walk(t) {
        return c(this, t);
    }
}
function c(s, t) {
    return t?.(s) ? s : s && typeof s == "object" && "cause" in s && s.cause !== void 0 ? c(s.cause, t) : t ? null : s;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web90.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntegerOutOfRangeError",
    ()=>$,
    "SizeOverflowError",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web87.js [app-client] (ecmascript)");
;
class $ extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ max: e, min: r, signed: s, size: n, value: a }){
        super(`Number "${a}" is not in safe ${n ? `${n * 8}-bit ${s ? "signed" : "unsigned"} ` : ""}integer range ${e ? `(${r} to ${e})` : `(above ${r})`}`, {
            name: "IntegerOutOfRangeError"
        });
    }
}
class c extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ givenSize: e, maxSize: r }){
        super(`Size cannot exceed ${r} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError"
        });
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web82.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SizeExceedsPaddingSizeError",
    ()=>n,
    "SliceOffsetOutOfBoundsError",
    ()=>d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web87.js [app-client] (ecmascript)");
;
class d extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ offset: r, position: s, size: e }){
        super(`Slice ${s === "start" ? "starting" : "ending"} at offset "${r}" is out-of-bounds (size: ${e}).`, {
            name: "SliceOffsetOutOfBoundsError"
        });
    }
}
class n extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ size: r, targetSize: s, type: e }){
        super(`${e.charAt(0).toUpperCase()}${e.slice(1).toLowerCase()} size (${r}) exceeds padding size (${s}).`, {
            name: "SizeExceedsPaddingSizeError"
        });
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web81.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pad",
    ()=>f,
    "padBytes",
    ()=>i,
    "padHex",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web82$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web82.js [app-client] (ecmascript)");
;
function f(n, { dir: r, size: t = 32 } = {}) {
    return typeof n == "string" ? p(n, {
        dir: r,
        size: t
    }) : i(n, {
        dir: r,
        size: t
    });
}
function p(n, { dir: r, size: t = 32 } = {}) {
    if (t === null) return n;
    const e = n.replace("0x", "");
    if (e.length > t * 2) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web82$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SizeExceedsPaddingSizeError"]({
        size: Math.ceil(e.length / 2),
        targetSize: t,
        type: "hex"
    });
    return `0x${e[r === "right" ? "padEnd" : "padStart"](t * 2, "0")}`;
}
function i(n, { dir: r, size: t = 32 } = {}) {
    if (t === null) return n;
    if (n.length > t) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web82$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SizeExceedsPaddingSizeError"]({
        size: n.length,
        targetSize: t,
        type: "bytes"
    });
    const e = new Uint8Array(t);
    for(let a = 0; a < t; a++){
        const o = r === "right";
        e[o ? a : t - a - 1] = n[o ? a : n.length - a - 1];
    }
    return e;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web80.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHex",
    ()=>e
]);
function e(t, { strict: r = !0 } = {}) {
    return !t || typeof t != "string" ? !1 : r ? /^0x[0-9a-fA-F]*$/.test(t) : t.startsWith("0x");
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web83.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "size",
    ()=>i
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web80$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web80.js [app-client] (ecmascript)");
;
function i(t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web80$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(t, {
        strict: !1
    }) ? Math.ceil((t.length - 2) / 2) : t.length;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web89.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertSize",
    ()=>s,
    "hexToBigInt",
    ()=>z,
    "hexToNumber",
    ()=>g
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web90$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web90.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web83$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web83.js [app-client] (ecmascript)");
;
;
function s(n, { size: i }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web83$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"])(n) > i) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web90$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SizeOverflowError"]({
        givenSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web83$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"])(n),
        maxSize: i
    });
}
function z(n, i = {}) {
    const { signed: o } = i;
    i.size && s(n, {
        size: i.size
    });
    const e = BigInt(n);
    if (!o) return e;
    const r = (n.length - 2) / 2, f = (1n << BigInt(r) * 8n - 1n) - 1n;
    return e <= f ? e : e - BigInt(`0x${"f".padStart(r * 2, "f")}`) - 1n;
}
function g(n, i = {}) {
    return Number(z(n, i));
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web73.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "boolToHex",
    ()=>z,
    "bytesToHex",
    ()=>m,
    "numberToHex",
    ()=>y,
    "stringToHex",
    ()=>$,
    "toHex",
    ()=>B
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web90$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web90.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web81$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web81.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web89$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web89.js [app-client] (ecmascript)");
;
;
;
const b = /* @__PURE__ */ Array.from({
    length: 256
}, (n, e)=>e.toString(16).padStart(2, "0"));
function B(n, e = {}) {
    return typeof n == "number" || typeof n == "bigint" ? y(n, e) : typeof n == "string" ? $(n, e) : typeof n == "boolean" ? z(n, e) : m(n, e);
}
function z(n, e = {}) {
    const t = `0x${Number(n)}`;
    return typeof e.size == "number" ? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web89$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"])(t, {
        size: e.size
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web81$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(t, {
        size: e.size
    })) : t;
}
function m(n, e = {}) {
    let t = "";
    for(let i = 0; i < n.length; i++)t += b[n[i]];
    const r = `0x${t}`;
    return typeof e.size == "number" ? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web89$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"])(r, {
        size: e.size
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web81$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(r, {
        dir: "right",
        size: e.size
    })) : r;
}
function y(n, e = {}) {
    const { signed: t, size: r } = e, i = BigInt(n);
    let o;
    r ? t ? o = (1n << BigInt(r) * 8n - 1n) - 1n : o = 2n ** (BigInt(r) * 8n) - 1n : typeof n == "number" && (o = BigInt(Number.MAX_SAFE_INTEGER));
    const g = typeof o == "bigint" && t ? -o - 1n : 0;
    if (o && i > o || i < g) {
        const f = typeof n == "bigint" ? "n" : "";
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web90$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntegerOutOfRangeError"]({
            max: o ? `${o}${f}` : void 0,
            min: `${g}${f}`,
            signed: t,
            size: r,
            value: `${n}${f}`
        });
    }
    const u = `0x${(t && i < 0 ? (1n << BigInt(r * 8)) + BigInt(i) : i).toString(16)}`;
    return r ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web81$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(u, {
        size: r
    }) : u;
}
const d = /* @__PURE__ */ new TextEncoder();
function $(n, e = {}) {
    const t = d.encode(n);
    return m(t, e);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web72.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializeAuthorizationList",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web73.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web45$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web45.js [app-client] (ecmascript)");
;
;
function f(r) {
    if (!r || r.length === 0) return [];
    const t = [];
    for (const o of r){
        const { chainId: n, nonce: e, ...s } = o, a = o.address;
        t.push([
            n ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(n) : "0x",
            a,
            e ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(e) : "0x",
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web45$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toYParitySignatureArray"])({}, s)
        ]);
    }
    return t;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web75.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "boolToBytes",
    ()=>B,
    "hexToBytes",
    ()=>y,
    "numberToBytes",
    ()=>T,
    "stringToBytes",
    ()=>l,
    "toBytes",
    ()=>F
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web87.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web80$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web80.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web81$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web81.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web89$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web89.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web73.js [app-client] (ecmascript)");
;
;
;
;
;
const A = /* @__PURE__ */ new TextEncoder();
function F(e, n = {}) {
    return typeof e == "number" || typeof e == "bigint" ? T(e, n) : typeof e == "boolean" ? B(e, n) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web80$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(e) ? y(e, n) : l(e, n);
}
function B(e, n = {}) {
    const r = new Uint8Array(1);
    return r[0] = Number(e), typeof n.size == "number" ? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web89$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"])(r, {
        size: n.size
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web81$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(r, {
        size: n.size
    })) : r;
}
const t = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function m(e) {
    if (e >= t.zero && e <= t.nine) return e - t.zero;
    if (e >= t.A && e <= t.F) return e - (t.A - 10);
    if (e >= t.a && e <= t.f) return e - (t.a - 10);
}
function y(e, n = {}) {
    let r = e;
    n.size && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web89$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"])(r, {
        size: n.size
    }), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web81$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(r, {
        dir: "right",
        size: n.size
    }));
    let i = r.slice(2);
    i.length % 2 && (i = `0${i}`);
    const z = i.length / 2, d = new Uint8Array(z);
    for(let f = 0, o = 0; f < z; f++){
        const b = m(i.charCodeAt(o++)), c = m(i.charCodeAt(o++));
        if (b === void 0 || c === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"](`Invalid byte sequence ("${i[o - 2]}${i[o - 1]}" in "${i}").`);
        d[f] = b * 16 + c;
    }
    return d;
}
function T(e, n) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(e, n);
    return y(r);
}
function l(e, n = {}) {
    const r = A.encode(e);
    return typeof n.size == "number" ? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web89$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"])(r, {
        size: n.size
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web81$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(r, {
        dir: "right",
        size: n.size
    })) : r;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web103.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blobsToCommitments",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web75$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web75.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web73.js [app-client] (ecmascript)");
;
;
function y(o) {
    const { kzg: s } = o, n = o.to ?? (typeof o.blobs[0] == "string" ? "hex" : "bytes"), m = typeof o.blobs[0] == "string" ? o.blobs.map((t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web75$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(t)) : o.blobs, b = [];
    for (const t of m)b.push(Uint8Array.from(s.blobToKzgCommitment(t)));
    return n === "bytes" ? b : b.map((t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(t));
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web104.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blobsToProofs",
    ()=>h
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web75$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web75.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web73.js [app-client] (ecmascript)");
;
;
function h(t) {
    const { kzg: m } = t, c = t.to ?? (typeof t.blobs[0] == "string" ? "hex" : "bytes"), s = typeof t.blobs[0] == "string" ? t.blobs.map((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web75$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(o)) : t.blobs, i = typeof t.commitments[0] == "string" ? t.commitments.map((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web75$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(o)) : t.commitments, n = [];
    for(let o = 0; o < s.length; o++){
        const f = s[o], l = i[o];
        n.push(Uint8Array.from(m.computeBlobKzgProof(f, l)));
    }
    return c === "bytes" ? n : n.map((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(o));
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web143.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ __turbopack_context__.s([
    "Hash",
    ()=>d,
    "abytes",
    ()=>r,
    "aexists",
    ()=>h,
    "anumber",
    ()=>w,
    "aoutput",
    ()=>l,
    "byteSwap",
    ()=>u,
    "byteSwap32",
    ()=>c,
    "clean",
    ()=>g,
    "createHasher",
    ()=>E,
    "createView",
    ()=>p,
    "isBytes",
    ()=>o,
    "isLE",
    ()=>i,
    "rotr",
    ()=>b,
    "swap32IfBE",
    ()=>x,
    "toBytes",
    ()=>y,
    "u32",
    ()=>a,
    "utf8ToBytes",
    ()=>s
]);
function o(e) {
    return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function w(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw new Error("positive integer expected, got " + e);
}
function r(e, ...t) {
    if (!o(e)) throw new Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(e.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function h(e, t = !0) {
    if (e.destroyed) throw new Error("Hash instance has been destroyed");
    if (t && e.finished) throw new Error("Hash#digest() has already been called");
}
function l(e, t) {
    r(e);
    const n = t.outputLen;
    if (e.length < n) throw new Error("digestInto() expects output buffer of length at least " + n);
}
function a(e) {
    return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
}
function g(...e) {
    for(let t = 0; t < e.length; t++)e[t].fill(0);
}
function p(e) {
    return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function b(e, t) {
    return e << 32 - t | e >>> t;
}
const i = new Uint8Array(new Uint32Array([
    287454020
]).buffer)[0] === 68;
function u(e) {
    return e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
}
function c(e) {
    for(let t = 0; t < e.length; t++)e[t] = u(e[t]);
    return e;
}
const x = i ? (e)=>e : c;
function s(e) {
    if (typeof e != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(e));
}
function y(e) {
    return typeof e == "string" && (e = s(e)), r(e), e;
}
class d {
}
function E(e) {
    const t = (f)=>e().update(y(f)).digest(), n = e();
    return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = ()=>e(), t;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web156.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chi",
    ()=>U,
    "HashMD",
    ()=>m,
    "Maj",
    ()=>_,
    "SHA256_IV",
    ()=>B,
    "setBigUint64",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web143.js [app-client] (ecmascript)");
;
function y(o, t, s, n) {
    if (typeof o.setBigUint64 == "function") return o.setBigUint64(t, s, n);
    const i = BigInt(32), h = BigInt(4294967295), e = Number(s >> i & h), r = Number(s & h), c = n ? 4 : 0, u = n ? 0 : 4;
    o.setUint32(t + c, e, n), o.setUint32(t + u, r, n);
}
function U(o, t, s) {
    return o & t ^ ~o & s;
}
function _(o, t, s) {
    return o & t ^ o & s ^ t & s;
}
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash"] {
    constructor(t, s, n, i){
        super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = s, this.padOffset = n, this.isLE = i, this.buffer = new Uint8Array(t), this.view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createView"])(this.buffer);
    }
    update(t) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBytes"])(t), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(t);
        const { view: s, buffer: n, blockLen: i } = this, h = t.length;
        for(let e = 0; e < h;){
            const r = Math.min(i - this.pos, h - e);
            if (r === i) {
                const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createView"])(t);
                for(; i <= h - e; e += i)this.process(c, e);
                continue;
            }
            n.set(t.subarray(e, e + r), this.pos), this.pos += r, e += r, this.pos === i && (this.process(s, 0), this.pos = 0);
        }
        return this.length += t.length, this.roundClean(), this;
    }
    digestInto(t) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aoutput"])(t, this), this.finished = !0;
        const { buffer: s, view: n, blockLen: i, isLE: h } = this;
        let { pos: e } = this;
        s[e++] = 128, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(this.buffer.subarray(e)), this.padOffset > i - e && (this.process(n, 0), e = 0);
        for(let f = e; f < i; f++)s[f] = 0;
        y(n, i - 8, BigInt(this.length * 8), h), this.process(n, 0);
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createView"])(t), c = this.outputLen;
        if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const u = c / 4, p = this.get();
        if (u > p.length) throw new Error("_sha2: outputLen bigger than state");
        for(let f = 0; f < u; f++)r.setUint32(4 * f, p[f], h);
    }
    digest() {
        const { buffer: t, outputLen: s } = this;
        this.digestInto(t);
        const n = t.slice(0, s);
        return this.destroy(), n;
    }
    _cloneInto(t) {
        t || (t = new this.constructor()), t.set(...this.get());
        const { blockLen: s, buffer: n, length: i, finished: h, destroyed: e, pos: r } = this;
        return t.destroyed = e, t.finished = h, t.length = i, t.pos = r, i % s && t.buffer.set(n), t;
    }
    clone() {
        return this._cloneInto();
    }
}
const B = /* @__PURE__ */ Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
]);
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web144.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SHA256",
    ()=>E,
    "sha256",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web156$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web156.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web143.js [app-client] (ecmascript)");
;
;
const B = /* @__PURE__ */ Uint32Array.from([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
]), h = /* @__PURE__ */ new Uint32Array(64);
class E extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web156$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HashMD"] {
    constructor(o = 32){
        super(64, o, 8, !1), this.A = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web156$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][0] | 0, this.B = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web156$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][1] | 0, this.C = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web156$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][2] | 0, this.D = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web156$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][3] | 0, this.E = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web156$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][4] | 0, this.F = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web156$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][5] | 0, this.G = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web156$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][6] | 0, this.H = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web156$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][7] | 0;
    }
    get() {
        const { A: o, B: r, C: t, D: s, E: a, F: f, G: c, H: e } = this;
        return [
            o,
            r,
            t,
            s,
            a,
            f,
            c,
            e
        ];
    }
    // prettier-ignore
    set(o, r, t, s, a, f, c, e) {
        this.A = o | 0, this.B = r | 0, this.C = t | 0, this.D = s | 0, this.E = a | 0, this.F = f | 0, this.G = c | 0, this.H = e | 0;
    }
    process(o, r) {
        for(let x = 0; x < 16; x++, r += 4)h[x] = o.getUint32(r, !1);
        for(let x = 16; x < 64; x++){
            const H = h[x - 15], d = h[x - 2], m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(H, 7) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(H, 18) ^ H >>> 3, l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(d, 17) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(d, 19) ^ d >>> 10;
            h[x] = l + h[x - 7] + m + h[x - 16] | 0;
        }
        let { A: t, B: s, C: a, D: f, E: c, F: e, G: n, H: A } = this;
        for(let x = 0; x < 64; x++){
            const H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(c, 6) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(c, 11) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(c, 25), d = A + H + (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web156$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chi"])(c, e, n) + B[x] + h[x] | 0, l = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(t, 2) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(t, 13) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(t, 22)) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web156$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Maj"])(t, s, a) | 0;
            A = n, n = e, e = c, c = f + d | 0, f = a, a = s, s = t, t = d + l | 0;
        }
        t = t + this.A | 0, s = s + this.B | 0, a = a + this.C | 0, f = f + this.D | 0, c = c + this.E | 0, e = e + this.F | 0, n = n + this.G | 0, A = A + this.H | 0, this.set(t, s, a, f, c, e, n, A);
    }
    roundClean() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(h);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(this.buffer);
    }
}
const y = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHasher"])(()=>new E());
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web93.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sha256",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web144$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web144.js [app-client] (ecmascript)");
;
const o = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web144$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"];
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web92.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sha256",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web93$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web93.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web80$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web80.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web75$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web75.js [app-client] (ecmascript)");
;
;
;
function p(t, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web93$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web80$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(t, {
        strict: !1
    }) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web75$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBytes"])(t) : t);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web146.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "commitmentToVersionedHash",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web73.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web92$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web92.js [app-client] (ecmascript)");
;
;
function f(t) {
    const { commitment: e, version: s = 1 } = t, n = t.to ?? (typeof e == "string" ? "hex" : "bytes"), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web92$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(e);
    return o.set([
        s
    ], 0), n === "bytes" ? o : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(o);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web105.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "commitmentsToVersionedHashes",
    ()=>r
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web146$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web146.js [app-client] (ecmascript)");
;
function r(o) {
    const { commitments: t, version: n } = o, e = o.to ?? (typeof t[0] == "string" ? "hex" : "bytes"), s = [];
    for (const m of t)s.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web146$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commitmentToVersionedHash"])({
        commitment: m,
        to: e,
        version: n
    }));
    return s;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web168.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bytesPerBlob",
    ()=>t,
    "bytesPerFieldElement",
    ()=>e,
    "fieldElementsPerBlob",
    ()=>s,
    "maxBytesPerTransaction",
    ()=>l
]);
const e = 32, s = 4096, t = 131072, l = 761855;
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web97.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "versionedHashVersionKzg",
    ()=>e
]);
const e = 1;
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web100.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlobSizeTooLargeError",
    ()=>t,
    "EmptyBlobError",
    ()=>d,
    "InvalidVersionedHashSizeError",
    ()=>l,
    "InvalidVersionedHashVersionError",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web97$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web97.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web87.js [app-client] (ecmascript)");
;
;
class t extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ maxSize: e, size: r }){
        super("Blob size is too large.", {
            metaMessages: [
                `Max: ${e} bytes`,
                `Given: ${r} bytes`
            ],
            name: "BlobSizeTooLargeError"
        });
    }
}
class d extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super("Blob data must not be empty.", {
            name: "EmptyBlobError"
        });
    }
}
class l extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ hash: e, size: r }){
        super(`Versioned hash "${e}" size is invalid.`, {
            metaMessages: [
                "Expected: 32",
                `Received: ${r}`
            ],
            name: "InvalidVersionedHashSizeError"
        });
    }
}
class c extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ hash: e, version: r }){
        super(`Versioned hash "${e}" version is invalid.`, {
            metaMessages: [
                `Expected: ${__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web97$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["versionedHashVersionKzg"]}`,
                `Received: ${r}`
            ],
            name: "InvalidVersionedHashVersionError"
        });
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web141.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NegativeOffsetError",
    ()=>i,
    "PositionOutOfBoundsError",
    ()=>n,
    "RecursiveReadLimitExceededError",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web87.js [app-client] (ecmascript)");
;
class i extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ offset: e }){
        super(`Offset \`${e}\` cannot be negative.`, {
            name: "NegativeOffsetError"
        });
    }
}
class n extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ length: e, position: r }){
        super(`Position \`${r}\` is out of bounds (\`0 < position < ${e}\`).`, {
            name: "PositionOutOfBoundsError"
        });
    }
}
class c extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ count: e, limit: r }){
        super(`Recursive read limit of \`${r}\` exceeded (recursive read count: \`${e}\`).`, {
            name: "RecursiveReadLimitExceededError"
        });
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web88.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCursor",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web141$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web141.js [app-client] (ecmascript)");
;
const h = {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: /* @__PURE__ */ new Map(),
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit () {
        if (this.recursiveReadCount >= this.recursiveReadLimit) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web141$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecursiveReadLimitExceededError"]({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
        });
    },
    assertPosition (t) {
        if (t < 0 || t > this.bytes.length - 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web141$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PositionOutOfBoundsError"]({
            length: this.bytes.length,
            position: t
        });
    },
    decrementPosition (t) {
        if (t < 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web141$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NegativeOffsetError"]({
            offset: t
        });
        const i = this.position - t;
        this.assertPosition(i), this.position = i;
    },
    getReadCount (t) {
        return this.positionReadCount.get(t || this.position) || 0;
    },
    incrementPosition (t) {
        if (t < 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web141$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NegativeOffsetError"]({
            offset: t
        });
        const i = this.position + t;
        this.assertPosition(i), this.position = i;
    },
    inspectByte (t) {
        const i = t ?? this.position;
        return this.assertPosition(i), this.bytes[i];
    },
    inspectBytes (t, i) {
        const s = i ?? this.position;
        return this.assertPosition(s + t - 1), this.bytes.subarray(s, s + t);
    },
    inspectUint8 (t) {
        const i = t ?? this.position;
        return this.assertPosition(i), this.bytes[i];
    },
    inspectUint16 (t) {
        const i = t ?? this.position;
        return this.assertPosition(i + 1), this.dataView.getUint16(i);
    },
    inspectUint24 (t) {
        const i = t ?? this.position;
        return this.assertPosition(i + 2), (this.dataView.getUint16(i) << 8) + this.dataView.getUint8(i + 2);
    },
    inspectUint32 (t) {
        const i = t ?? this.position;
        return this.assertPosition(i + 3), this.dataView.getUint32(i);
    },
    pushByte (t) {
        this.assertPosition(this.position), this.bytes[this.position] = t, this.position++;
    },
    pushBytes (t) {
        this.assertPosition(this.position + t.length - 1), this.bytes.set(t, this.position), this.position += t.length;
    },
    pushUint8 (t) {
        this.assertPosition(this.position), this.bytes[this.position] = t, this.position++;
    },
    pushUint16 (t) {
        this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, t), this.position += 2;
    },
    pushUint24 (t) {
        this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, t >> 8), this.dataView.setUint8(this.position + 2, t & 255), this.position += 3;
    },
    pushUint32 (t) {
        this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, t), this.position += 4;
    },
    readByte () {
        this.assertReadLimit(), this._touch();
        const t = this.inspectByte();
        return this.position++, t;
    },
    readBytes (t, i) {
        this.assertReadLimit(), this._touch();
        const s = this.inspectBytes(t);
        return this.position += i ?? t, s;
    },
    readUint8 () {
        this.assertReadLimit(), this._touch();
        const t = this.inspectUint8();
        return this.position += 1, t;
    },
    readUint16 () {
        this.assertReadLimit(), this._touch();
        const t = this.inspectUint16();
        return this.position += 2, t;
    },
    readUint24 () {
        this.assertReadLimit(), this._touch();
        const t = this.inspectUint24();
        return this.position += 3, t;
    },
    readUint32 () {
        this.assertReadLimit(), this._touch();
        const t = this.inspectUint32();
        return this.position += 4, t;
    },
    get remaining () {
        return this.bytes.length - this.position;
    },
    setPosition (t) {
        const i = this.position;
        return this.assertPosition(t), this.position = t, ()=>this.position = i;
    },
    _touch () {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
        const t = this.getReadCount();
        this.positionReadCount.set(this.position, t + 1), t > 0 && this.recursiveReadCount++;
    }
};
function a(t, { recursiveReadLimit: i = 8192 } = {}) {
    const s = Object.create(h);
    return s.bytes = t, s.dataView = new DataView(t.buffer, t.byteOffset, t.byteLength), s.positionReadCount = /* @__PURE__ */ new Map(), s.recursiveReadLimit = i, s;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web145.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toBlobs",
    ()=>S
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web168$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web168.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web100$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web100.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web88$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web88.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web83$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web83.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web75$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web75.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web73.js [app-client] (ecmascript)");
;
;
;
;
;
;
function S(e) {
    const m = e.to ?? (typeof e.data == "string" ? "hex" : "bytes"), i = typeof e.data == "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web75$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(e.data) : e.data, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web83$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"])(i);
    if (!o) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web100$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyBlobError"]();
    if (o > __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web168$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxBytesPerTransaction"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web100$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlobSizeTooLargeError"]({
        maxSize: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web168$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxBytesPerTransaction"],
        size: o
    });
    const s = [];
    let n = !0, r = 0;
    for(; n;){
        const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web88$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCursor"])(new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web168$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesPerBlob"]));
        let l = 0;
        for(; l < __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web168$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldElementsPerBlob"];){
            const b = i.slice(r, r + (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web168$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesPerFieldElement"] - 1));
            if (t.pushByte(0), t.pushBytes(b), b.length < 31) {
                t.pushByte(128), n = !1;
                break;
            }
            l++, r += 31;
        }
        s.push(t);
    }
    return m === "bytes" ? s.map((t)=>t.bytes) : s.map((t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(t.bytes));
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web106.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toBlobSidecars",
    ()=>k
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web103$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web103.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web104$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web104.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web145$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web145.js [app-client] (ecmascript)");
;
;
;
function k(t) {
    const { data: i, kzg: n, to: m } = t, s = t.blobs ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web145$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBlobs"])({
        data: i,
        to: m
    }), b = t.commitments ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web103$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blobsToCommitments"])({
        blobs: s,
        kzg: n,
        to: m
    }), r = t.proofs ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web104$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blobsToProofs"])({
        blobs: s,
        commitments: b,
        kzg: n,
        to: m
    }), c = [];
    for(let o = 0; o < s.length; o++)c.push({
        blob: s[o],
        commitment: b[o],
        proof: r[o]
    });
    return c;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web79.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concatHex",
    ()=>n
]);
function n(e) {
    return `0x${e.reduce((c, r)=>c + r.replace("0x", ""), "")}`;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web85.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trim",
    ()=>f
]);
function f(e, { dir: n = "left" } = {}) {
    let t = typeof e == "string" ? e.replace("0x", "") : e, i = 0;
    for(let l = 0; l < t.length - 1 && t[n === "left" ? l : t.length - l - 1].toString() === "0"; l++)i++;
    return t = n === "left" ? t.slice(i) : t.slice(0, t.length - i), typeof e == "string" ? (t.length === 1 && n === "right" && (t = `${t}0`), `0x${t.length % 2 === 1 ? `0${t}` : t}`) : t;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web86.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toRlp",
    ()=>m
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web87.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web88$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web88.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web75$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web75.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web73.js [app-client] (ecmascript)");
;
;
;
;
function m(n, e = "hex") {
    const i = s(n), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web88$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCursor"])(new Uint8Array(i.length));
    return i.encode(h), e === "hex" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(h.bytes) : h.bytes;
}
function s(n) {
    return Array.isArray(n) ? p(n.map((e)=>s(e))) : y(n);
}
function p(n) {
    const e = n.reduce((t, f)=>t + f.length, 0), i = o(e);
    return {
        length: e <= 55 ? 1 + e : 1 + i + e,
        encode (t) {
            e <= 55 ? t.pushByte(192 + e) : (t.pushByte(247 + i), i === 1 ? t.pushUint8(e) : i === 2 ? t.pushUint16(e) : i === 3 ? t.pushUint24(e) : t.pushUint32(e));
            for (const { encode: f } of n)f(t);
        }
    };
}
function y(n) {
    const e = typeof n == "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web75$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(n) : n, i = o(e.length);
    return {
        length: e.length === 1 && e[0] < 128 ? 1 : e.length <= 55 ? 1 + e.length : 1 + i + e.length,
        encode (t) {
            e.length === 1 && e[0] < 128 ? t.pushBytes(e) : e.length <= 55 ? (t.pushByte(128 + e.length), t.pushBytes(e)) : (t.pushByte(183 + i), i === 1 ? t.pushUint8(e.length) : i === 2 ? t.pushUint16(e.length) : i === 3 ? t.pushUint24(e.length) : t.pushUint32(e.length), t.pushBytes(e));
        }
    };
}
function o(n) {
    if (n < 2 ** 8) return 1;
    if (n < 2 ** 16) return 2;
    if (n < 2 ** 24) return 3;
    if (n < 2 ** 32) return 4;
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]("Length is too large.");
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web98.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "maxUint256",
    ()=>n
]);
const n = 2n ** 256n - 1n;
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web99.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidAddressError",
    ()=>d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web87.js [app-client] (ecmascript)");
;
class d extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ address: s }){
        super(`Address "${s}" is invalid.`, {
            metaMessages: [
                "- Address must be a hex value of 20 bytes (40 hex characters).",
                "- Address must match its checksum counterpart."
            ],
            name: "InvalidAddressError"
        });
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web101.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidChainIdError",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web87.js [app-client] (ecmascript)");
;
class o extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ chainId: r }){
        super(typeof r == "number" ? `Chain ID "${r}" is invalid.` : "Chain ID is invalid.", {
            name: "InvalidChainIdError"
        });
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web109.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gweiUnits",
    ()=>e
]);
const e = {
    ether: -9,
    wei: 9
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web110.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatUnits",
    ()=>a
]);
function a(r, n) {
    let t = r.toString();
    const i = t.startsWith("-");
    i && (t = t.slice(1)), t = t.padStart(n, "0");
    let [l, e] = [
        t.slice(0, t.length - n),
        t.slice(t.length - n)
    ];
    return e = e.replace(/(0+)$/, ""), `${i ? "-" : ""}${l || "0"}${e ? `.${e}` : ""}`;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web108.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatGwei",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web109$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web109.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web110$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web110.js [app-client] (ecmascript)");
;
;
function f(r, t = "wei") {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web110$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(r, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web109$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gweiUnits"][t]);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web102.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeeCapTooHighError",
    ()=>n,
    "TipAboveFeeCapError",
    ()=>h
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web108$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web108.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web87.js [app-client] (ecmascript)");
;
;
class n extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause: r, maxFeePerGas: e } = {}){
        super(`The fee cap (\`maxFeePerGas\`${e ? ` = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web108$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(e)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause: r,
            name: "FeeCapTooHighError"
        });
    }
}
Object.defineProperty(n, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class h extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause: r, maxPriorityFeePerGas: e, maxFeePerGas: t } = {}){
        super([
            `The provided tip (\`maxPriorityFeePerGas\`${e ? ` = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web108$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(e)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${t ? ` = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web108$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(t)} gwei` : ""}).`
        ].join(`
`), {
            cause: r,
            name: "TipAboveFeeCapError"
        });
    }
}
Object.defineProperty(h, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web77.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LruMap",
    ()=>r
]);
class r extends Map {
    constructor(e){
        super(), Object.defineProperty(this, "maxSize", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.maxSize = e;
    }
    get(e) {
        const t = super.get(e);
        return super.has(e) && t !== void 0 && (this.delete(e), super.set(e, t)), t;
    }
    set(e, t) {
        if (super.set(e, t), this.maxSize && this.size > this.maxSize) {
            const s = this.keys().next().value;
            s && this.delete(s);
        }
        return this;
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web142.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromBig",
    ()=>s,
    "rotlBH",
    ()=>B,
    "rotlBL",
    ()=>a,
    "rotlSH",
    ()=>m,
    "rotlSL",
    ()=>A,
    "split",
    ()=>h
]);
const o = /* @__PURE__ */ BigInt(4294967295), i = /* @__PURE__ */ BigInt(32);
function s(t, r = !1) {
    return r ? {
        h: Number(t & o),
        l: Number(t >> i & o)
    } : {
        h: Number(t >> i & o) | 0,
        l: Number(t & o) | 0
    };
}
function h(t, r = !1) {
    const n = t.length;
    let l = new Uint32Array(n), c = new Uint32Array(n);
    for(let e = 0; e < n; e++){
        const { h: u, l: f } = s(t[e], r);
        [l[e], c[e]] = [
            u,
            f
        ];
    }
    return [
        l,
        c
    ];
}
const m = (t, r, n)=>t << n | r >>> 32 - n, A = (t, r, n)=>r << n | t >>> 32 - n, B = (t, r, n)=>r << n - 32 | t >>> 64 - n, a = (t, r, n)=>t << n - 32 | r >>> 64 - n;
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web91.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Keccak",
    ()=>p,
    "keccakP",
    ()=>G,
    "keccak_256",
    ()=>Q
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web142$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web142.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web143.js [app-client] (ecmascript)");
;
;
const R = BigInt(0), f = BigInt(1), j = BigInt(2), q = BigInt(7), v = BigInt(256), z = BigInt(113), _ = [], g = [], B = [];
for(let n = 0, t = f, s = 1, i = 0; n < 24; n++){
    [s, i] = [
        i,
        (2 * s + 3 * i) % 5
    ], _.push(2 * (5 * i + s)), g.push((n + 1) * (n + 2) / 2 % 64);
    let o = R;
    for(let r = 0; r < 7; r++)t = (t << f ^ (t >> q) * z) % v, t & j && (o ^= f << (f << /* @__PURE__ */ BigInt(r)) - f);
    B.push(o);
}
const A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web142$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["split"])(B, !0), C = A[0], D = A[1], O = (n, t, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web142$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlBH"])(n, t, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web142$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlSH"])(n, t, s), w = (n, t, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web142$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlBL"])(n, t, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web142$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlSL"])(n, t, s);
function G(n, t = 24) {
    const s = new Uint32Array(10);
    for(let i = 24 - t; i < 24; i++){
        for(let e = 0; e < 10; e++)s[e] = n[e] ^ n[e + 10] ^ n[e + 20] ^ n[e + 30] ^ n[e + 40];
        for(let e = 0; e < 10; e += 2){
            const h = (e + 8) % 10, l = (e + 2) % 10, u = s[l], c = s[l + 1], b = O(u, c, 1) ^ s[h], H = w(u, c, 1) ^ s[h + 1];
            for(let a = 0; a < 50; a += 10)n[e + a] ^= b, n[e + a + 1] ^= H;
        }
        let o = n[2], r = n[3];
        for(let e = 0; e < 24; e++){
            const h = g[e], l = O(o, r, h), u = w(o, r, h), c = _[e];
            o = n[c], r = n[c + 1], n[c] = l, n[c + 1] = u;
        }
        for(let e = 0; e < 50; e += 10){
            for(let h = 0; h < 10; h++)s[h] = n[e + h];
            for(let h = 0; h < 10; h++)n[e + h] ^= ~s[(h + 2) % 10] & s[(h + 4) % 10];
        }
        n[0] ^= C[i], n[1] ^= D[i];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(s);
}
class p extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash"] {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(t, s, i, o = !1, r = 24){
        if (super(), this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, this.enableXOF = !1, this.blockLen = t, this.suffix = s, this.outputLen = i, this.enableXOF = o, this.rounds = r, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(i), !(0 < t && t < 200)) throw new Error("only keccak-f1600 function is supported");
        this.state = new Uint8Array(200), this.state32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(this.state);
    }
    clone() {
        return this._cloneInto();
    }
    keccak() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swap32IfBE"])(this.state32), G(this.state32, this.rounds), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swap32IfBE"])(this.state32), this.posOut = 0, this.pos = 0;
    }
    update(t) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBytes"])(t), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(t);
        const { blockLen: s, state: i } = this, o = t.length;
        for(let r = 0; r < o;){
            const e = Math.min(s - this.pos, o - r);
            for(let h = 0; h < e; h++)i[this.pos++] ^= t[r++];
            this.pos === s && this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = !0;
        const { state: t, suffix: s, pos: i, blockLen: o } = this;
        t[i] ^= s, (s & 128) !== 0 && i === o - 1 && this.keccak(), t[o - 1] ^= 128, this.keccak();
    }
    writeInto(t) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this, !1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(t), this.finish();
        const s = this.state, { blockLen: i } = this;
        for(let o = 0, r = t.length; o < r;){
            this.posOut >= i && this.keccak();
            const e = Math.min(i - this.posOut, r - o);
            t.set(s.subarray(this.posOut, this.posOut + e), o), this.posOut += e, o += e;
        }
        return t;
    }
    xofInto(t) {
        if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
        return this.writeInto(t);
    }
    xof(t) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(t), this.xofInto(new Uint8Array(t));
    }
    digestInto(t) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aoutput"])(t, this), this.finished) throw new Error("digest() was already called");
        return this.writeInto(t), this.destroy(), t;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = !0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(this.state);
    }
    _cloneInto(t) {
        const { blockLen: s, suffix: i, outputLen: o, rounds: r, enableXOF: e } = this;
        return t || (t = new p(s, i, o, e, r)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = r, t.suffix = i, t.outputLen = o, t.enableXOF = e, t.destroyed = this.destroyed, t;
    }
}
const J = (n, t, s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web143$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHasher"])(()=>new p(t, n, s)), Q = J(1, 136, 256 / 8);
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web76.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "keccak256",
    ()=>k
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web91$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web91.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web80$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web80.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web75$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web75.js [app-client] (ecmascript)");
;
;
;
function k(t, e) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web91$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak_256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web80$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(t, {
        strict: !1
    }) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web75$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBytes"])(t) : t);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web74.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checksumAddress",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web75$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web75.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web76$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web76.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web77$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web77.js [app-client] (ecmascript)");
;
;
;
const r = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web77$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LruMap"](8192);
function a(s, o) {
    if (r.has(`${s}.${o}`)) return r.get(`${s}.${o}`);
    const c = s.substring(2).toLowerCase(), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web76$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web75$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringToBytes"])(c)), e = c.split("");
    for(let t = 0; t < 40; t += 2)n[t >> 1] >> 4 >= 8 && e[t] && (e[t] = e[t].toUpperCase()), (n[t >> 1] & 15) >= 8 && e[t + 1] && (e[t + 1] = e[t + 1].toUpperCase());
    const i = `0x${e.join("")}`;
    return r.set(`${s}.${o}`, i), i;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web78.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAddress",
    ()=>h,
    "isAddressCache",
    ()=>r
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web77$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web77.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web74$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web74.js [app-client] (ecmascript)");
;
;
const i = /^0x[a-fA-F0-9]{40}$/, r = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web77$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LruMap"](8192);
function h(t, s) {
    const { strict: n = !0 } = s ?? {}, e = `${t}.${n}`;
    if (r.has(e)) return r.get(e);
    const o = i.test(t) ? t.toLowerCase() === t ? !0 : n ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web74$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checksumAddress"])(t) === t : !0 : !1;
    return r.set(e, o), o;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web84.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "slice",
    ()=>O,
    "sliceBytes",
    ()=>u,
    "sliceHex",
    ()=>l
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web82$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web82.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web80$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web80.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web83$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web83.js [app-client] (ecmascript)");
;
;
;
function O(e, f, i, { strict: o } = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web80$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(e, {
        strict: !1
    }) ? l(e, f, i, {
        strict: o
    }) : u(e, f, i, {
        strict: o
    });
}
function t(e, f, i) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web83$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"])(e) !== i - f) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web82$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliceOffsetOutOfBoundsError"]({
        offset: i,
        position: "end",
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web83$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"])(e)
    });
}
function u(e, f, i, { strict: o } = {}) {
    const r = e.slice(f, i);
    return o && t(r, f, i), r;
}
function l(e, f, i, { strict: o } = {}) {
    const r = `0x${e.replace("0x", "").slice(f * 2, i * 2)}`;
    return o && t(r, f, i), r;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web96.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertTransactionEIP1559",
    ()=>d,
    "assertTransactionEIP2930",
    ()=>B,
    "assertTransactionEIP4844",
    ()=>L,
    "assertTransactionEIP7702",
    ()=>C,
    "assertTransactionLegacy",
    ()=>K
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web97$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web97.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web98$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web98.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web99$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web99.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web87.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web100$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web100.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web101$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web101.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web102$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web102.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web78$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web78.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web83$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web83.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web84$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web84.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web89$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web89.js [app-client] (ecmascript)");
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
function C(t) {
    const { authorizationList: e } = t;
    if (e) for (const o of e){
        const { chainId: r } = o, i = o.address;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web78$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(i)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web99$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
            address: i
        });
        if (r < 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web101$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
            chainId: r
        });
    }
    d(t);
}
function L(t) {
    const { blobVersionedHashes: e } = t;
    if (e) {
        if (e.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web100$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyBlobError"]();
        for (const o of e){
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web83$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"])(o), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web89$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web84$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"])(o, 0, 1));
            if (r !== 32) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web100$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidVersionedHashSizeError"]({
                hash: o,
                size: r
            });
            if (i !== __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web97$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["versionedHashVersionKzg"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web100$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidVersionedHashVersionError"]({
                hash: o,
                version: i
            });
        }
    }
    d(t);
}
function d(t) {
    const { chainId: e, maxPriorityFeePerGas: o, maxFeePerGas: r, to: i } = t;
    if (e <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web101$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId: e
    });
    if (i && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web78$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(i)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web99$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: i
    });
    if (r && r > __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web98$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxUint256"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web102$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas: r
    });
    if (o && r && o > r) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web102$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TipAboveFeeCapError"]({
        maxFeePerGas: r,
        maxPriorityFeePerGas: o
    });
}
function B(t) {
    const { chainId: e, maxPriorityFeePerGas: o, gasPrice: r, maxFeePerGas: i, to: a } = t;
    if (e <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web101$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId: e
    });
    if (a && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web78$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(a)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web99$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: a
    });
    if (o || i) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
    if (r && r > __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web98$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxUint256"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web102$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas: r
    });
}
function K(t) {
    const { chainId: e, maxPriorityFeePerGas: o, gasPrice: r, maxFeePerGas: i, to: a } = t;
    if (a && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web78$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(a)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web99$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: a
    });
    if (typeof e < "u" && e <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web101$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId: e
    });
    if (o || i) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
    if (r && r > __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web98$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxUint256"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web102$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas: r
    });
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web95.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidSerializableTransactionError",
    ()=>c,
    "InvalidStorageKeySizeError",
    ()=>d,
    "prettyPrint",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web87.js [app-client] (ecmascript)");
;
function o(n) {
    const r = Object.entries(n).map(([a, e])=>e === void 0 || e === !1 ? null : [
            a,
            e
        ]).filter(Boolean), i = r.reduce((a, [e])=>Math.max(a, e.length), 0);
    return r.map(([a, e])=>`  ${`${a}:`.padEnd(i + 1)}  ${e}`).join(`
`);
}
class c extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ transaction: r }){
        super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
                "Provided Transaction:",
                "{",
                o(r),
                "}",
                "",
                "To infer the type, either provide:",
                "- a `type` to the Transaction, or",
                "- an EIP-1559 Transaction with `maxFeePerGas`, or",
                "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
                "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
                "- an EIP-7702 Transaction with `authorizationList`, or",
                "- a Legacy Transaction with `gasPrice`"
            ],
            name: "InvalidSerializableTransactionError"
        });
    }
}
class d extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web87$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ storageKey: r }){
        super(`Size for storage key "${r}" is invalid. Expected 32 bytes. Got ${Math.floor((r.length - 2) / 2)} bytes.`, {
            name: "InvalidStorageKeySizeError"
        });
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web94.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTransactionType",
    ()=>d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web95$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web95.js [app-client] (ecmascript)");
;
function d(e) {
    if (e.type) return e.type;
    if (typeof e.authorizationList < "u") return "eip7702";
    if (typeof e.blobs < "u" || typeof e.blobVersionedHashes < "u" || typeof e.maxFeePerBlobGas < "u" || typeof e.sidecars < "u") return "eip4844";
    if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u") return "eip1559";
    if (typeof e.gasPrice < "u") return typeof e.accessList < "u" ? "eip2930" : "legacy";
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web95$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSerializableTransactionError"]({
        transaction: e
    });
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web107.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializeAccessList",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web99$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web99.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web95$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web95.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web78$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web78.js [app-client] (ecmascript)");
;
;
;
function a(r) {
    if (!r || r.length === 0) return [];
    const n = [];
    for(let o = 0; o < r.length; o++){
        const { address: i, storageKeys: e } = r[o];
        for(let t = 0; t < e.length; t++)if (e[t].length - 2 !== 64) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web95$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStorageKeySizeError"]({
            storageKey: e[t]
        });
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web78$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(i, {
            strict: !1
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web99$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
            address: i
        });
        n.push([
            i,
            e
        ]);
    }
    return n;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web45.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializeTransaction",
    ()=>re,
    "toYParitySignatureArray",
    ()=>g
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web72$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web72.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web103$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web103.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web104$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web104.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web105$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web105.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web106$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web106.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web79$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web79.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web85$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web85.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web73.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web86$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web86.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web96$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web96.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web94$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web94.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web107$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web107.js [app-client] (ecmascript)");
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
function re(e, t) {
    const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web94$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionType"])(e);
    return i === "eip1559" ? J(e, t) : i === "eip2930" ? K(e, t) : i === "eip4844" ? D(e, t) : i === "eip7702" ? w(e, t) : M(e);
}
function w(e, t) {
    const { authorizationList: i, chainId: o, gas: r, nonce: n, to: c, value: a, maxFeePerGas: f, maxPriorityFeePerGas: x, accessList: d, data: l } = e;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web96$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertTransactionEIP7702"])(e);
    const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web107$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAccessList"])(d), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web72$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAuthorizationList"])(i);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web79$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatHex"])([
        "0x04",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web86$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRlp"])([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(o),
            n ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(n) : "0x",
            x ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(x) : "0x",
            f ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(f) : "0x",
            r ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(r) : "0x",
            c ?? "0x",
            a ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(a) : "0x",
            l ?? "0x",
            u,
            m,
            ...g(e, t)
        ])
    ]);
}
function D(e, t) {
    const { chainId: i, gas: o, nonce: r, to: n, value: c, maxFeePerBlobGas: a, maxFeePerGas: f, maxPriorityFeePerGas: x, accessList: d, data: l } = e;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web96$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertTransactionEIP4844"])(e);
    let u = e.blobVersionedHashes, m = e.sidecars;
    if (e.blobs && (typeof u > "u" || typeof m > "u")) {
        const p = typeof e.blobs[0] == "string" ? e.blobs : e.blobs.map((P)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(P)), z = e.kzg, y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web103$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blobsToCommitments"])({
            blobs: p,
            kzg: z
        });
        if (typeof u > "u" && (u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web105$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commitmentsToVersionedHashes"])({
            commitments: y
        })), typeof m > "u") {
            const P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web104$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blobsToProofs"])({
                blobs: p,
                commitments: y,
                kzg: z
            });
            m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web106$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBlobSidecars"])({
                blobs: p,
                commitments: y,
                proofs: P
            });
        }
    }
    const G = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web107$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAccessList"])(d), L = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(i),
        r ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(r) : "0x",
        x ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(x) : "0x",
        f ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(f) : "0x",
        o ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(o) : "0x",
        n ?? "0x",
        c ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(c) : "0x",
        l ?? "0x",
        G,
        a ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(a) : "0x",
        u ?? [],
        ...g(e, t)
    ], I = [], A = [], E = [];
    if (m) for(let p = 0; p < m.length; p++){
        const { blob: z, commitment: y, proof: P } = m[p];
        I.push(z), A.push(y), E.push(P);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web79$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatHex"])([
        "0x03",
        m ? // If sidecars are enabled, envelope turns into a "wrapper":
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web86$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRlp"])([
            L,
            I,
            A,
            E
        ]) : // If sidecars are disabled, standard envelope is used:
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web86$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRlp"])(L)
    ]);
}
function J(e, t) {
    const { chainId: i, gas: o, nonce: r, to: n, value: c, maxFeePerGas: a, maxPriorityFeePerGas: f, accessList: x, data: d } = e;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web96$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertTransactionEIP1559"])(e);
    const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web107$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAccessList"])(x), u = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(i),
        r ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(r) : "0x",
        f ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(f) : "0x",
        a ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(a) : "0x",
        o ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(o) : "0x",
        n ?? "0x",
        c ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(c) : "0x",
        d ?? "0x",
        l,
        ...g(e, t)
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web79$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatHex"])([
        "0x02",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web86$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRlp"])(u)
    ]);
}
function K(e, t) {
    const { chainId: i, gas: o, data: r, nonce: n, to: c, value: a, accessList: f, gasPrice: x } = e;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web96$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertTransactionEIP2930"])(e);
    const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web107$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAccessList"])(f), l = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(i),
        n ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(n) : "0x",
        x ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(x) : "0x",
        o ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(o) : "0x",
        c ?? "0x",
        a ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(a) : "0x",
        r ?? "0x",
        d,
        ...g(e, t)
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web79$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatHex"])([
        "0x01",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web86$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRlp"])(l)
    ]);
}
function M(e, t) {
    const { chainId: i = 0, gas: o, data: r, nonce: n, to: c, value: a, gasPrice: f } = e;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web96$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertTransactionLegacy"])(e);
    let x = [
        n ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(n) : "0x",
        f ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(f) : "0x",
        o ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(o) : "0x",
        c ?? "0x",
        a ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(a) : "0x",
        r ?? "0x"
    ];
    return i > 0 && (x = [
        ...x,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(i),
        "0x",
        "0x"
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web86$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRlp"])(x);
}
function g(e, t) {
    const i = t ?? e, { v: o, yParity: r } = i;
    if (typeof i.r > "u") return [];
    if (typeof i.s > "u") return [];
    if (typeof o > "u" && typeof r > "u") return [];
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web85$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(i.r), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web85$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(i.s);
    return [
        typeof r == "number" ? r ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(1) : "0x" : o === 0n ? "0x" : o === 1n ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(1) : o === 27n ? "0x" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web73$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(1),
        n === "0x00" ? "0x" : n,
        c === "0x00" ? "0x" : c
    ];
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authenticateWithJWT",
    ()=>je,
    "exportEvmAccount",
    ()=>Qe,
    "exportSolanaAccount",
    ()=>Xe,
    "getAccessToken",
    ()=>We,
    "getAccessTokenExpiration",
    ()=>He,
    "getCurrentUser",
    ()=>Pe,
    "getUserOperation",
    ()=>Ge,
    "initialize",
    ()=>_e,
    "isSignedIn",
    ()=>xe,
    "onAuthStateChange",
    ()=>Re,
    "onOAuthStateChange",
    ()=>Be,
    "sendEvmTransaction",
    ()=>Je,
    "sendSolanaTransaction",
    ()=>Le,
    "sendUserOperation",
    ()=>qe,
    "signEvmHash",
    ()=>De,
    "signEvmMessage",
    ()=>ze,
    "signEvmTransaction",
    ()=>Ne,
    "signEvmTypedData",
    ()=>Ve,
    "signInWithEmail",
    ()=>Ue,
    "signInWithOAuth",
    ()=>Me,
    "signInWithSms",
    ()=>Ce,
    "signOut",
    ()=>Ke,
    "signSolanaMessage",
    ()=>$e,
    "signSolanaTransaction",
    ()=>Fe,
    "verifyEmailOTP",
    ()=>Oe,
    "verifyOAuth",
    ()=>be,
    "verifySmsOTP",
    ()=>Te
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web34$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web34.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index7.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$node_modules$2f$bs58$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/node_modules/bs58/src/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web35$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web35.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web36$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web36.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web37$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web37.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web38.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web39.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web40$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web40.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web41$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web41.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web42$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web42.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web43.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web28$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web28.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web45$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web45.js [app-client] (ecmascript)");
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
const _e = async (e)=>{
    if (!e.projectId) throw new Error("Project ID is required");
    e.disableAnalytics === void 0 || e.disableAnalytics === !1 ? (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].identifier = e.projectId, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].isUsingMocks = e.useMock === !0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].isProduction = !e.basePath || e.basePath === "https://api.cdp.coinbase.com/platform") : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].enabled = !1;
    let n;
    try {
        n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId !== e.projectId;
    } catch  {
        n = !0;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setConfig"])(e), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCoreAuthManager"])(new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web40$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MockAuthManager"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCoreOAuthManager"])(new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web41$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MockOAuthManager"]());
        return;
    }
    let t;
    try {
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformServices"])();
        t = r.secureStorage ? {
            getRefreshToken: ()=>r.secureStorage.getItem("cdp_refresh_token"),
            setRefreshToken: (s)=>r.secureStorage.setItem("cdp_refresh_token", s),
            removeRefreshToken: ()=>r.secureStorage.removeItem("cdp_refresh_token")
        } : // This is used only in WebKit browsers by virtue of the API
        {
            getRefreshToken: ()=>r.storage.getItem("cdp_refresh_token"),
            setRefreshToken: (s)=>r.storage.setItem("cdp_refresh_token", s),
            removeRefreshToken: ()=>r.storage.removeItem("cdp_refresh_token")
        };
    } catch  {
        t = void 0;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configureCdpApiClient"])({
        debugging: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().debugging,
        basePath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().basePath,
        refreshTokenStorage: t
    }), n) {
        const r = new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web37$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthManager"]();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCoreOAuthManager"])(r);
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web35$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuthManager"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCoreAuthManager"])(s), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAuthManager"])(s);
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().ensureInitialized();
}, Ue = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "sign_in_with_email"
    }), y({
        email: e.email,
        type: "email"
    })), Ce = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "sign_in_with_sms"
    }), y({
        phoneNumber: e.phoneNumber,
        type: "sms"
    })), Me = async (e)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "sign_in_with_oauth"
    });
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformServices"])().oauth.getRedirectUrl();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock) {
        const r = new URL(n);
        r.searchParams.set("code", "mock-oauth-code"), r.searchParams.set("provider_type", e), r.searchParams.set("flow_id", "mock-flow-id"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformServices"])().oauth.initiateOAuthFlow(r.toString());
        return;
    }
    const { authUrl: t } = await y({
        redirectUrl: n,
        type: e
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformServices"])().oauth.initiateOAuthFlow(t);
}, Oe = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "verify_email_otp"
    }), A(e, "Mock email OTP verified", (n, t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyEmailAuthentication"])(n, t))), Te = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "verify_sms_otp"
    }), A(e, "Mock SMS OTP verified", (n, t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifySmsAuthentication"])(n, t))), be = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "verify_oauth"
    }), A(e, "Mock OAuth code verified", (n, t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyOAuthCode"])(n, t.providerType, t))), je = async ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "authenticate_with_jwt"
    });
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])();
    if (!e.customAuth?.getJwt) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web28$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CustomAuthError"]("customAuth.getJwt callback not configured. Please provide customAuth with getJwt in initialize() config.");
    let n;
    try {
        n = await e.customAuth.getJwt();
    } catch (u) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web28$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CustomAuthError"](u instanceof Error ? u.message : "Failed to get custom auth JWT");
    }
    if (!n) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web28$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CustomAuthError"]("customAuth.getJwt returned null or undefined");
    if (e.useMock) return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().setAuthState({
        accessToken: n,
        expiresAt: Date.now() + 1e3 * 60 * 60 * 24,
        user: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web42$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUser"]
    }), {
        message: "Mock JWT authentication successful",
        user: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web42$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUser"],
        isNewUser: !1
    };
    const t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticateUserWithCustomAuth"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId), r = new Date(Date.now() + __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web36$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_AUTH_REFRESH_BUFFER_MS"]).toISOString();
    let s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAuthState"])(n, r, t.endUser);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().setAuthState(s), e.ethereum?.createOnLogin && (s = await M(s, n, r, e.ethereum.createOnLogin)), e.solana?.createOnLogin && (s = await O(s, n, r)), {
        message: "Authentication successful",
        user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().getUser(),
        isNewUser: t.isNewEndUser
    };
}, Pe = async ()=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "get_current_user"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().getUser()), xe = async ()=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "is_signed_in"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().isSignedIn()), Ke = async ()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "sign_out"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().signOut();
        return;
    }
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().isSignedIn()) throw new Error("User not signed in");
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().signOut();
}, We = async (e = {
    forceRefresh: !1
})=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "get_access_token"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().getToken(e)), He = async ()=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "get_access_token_expiration"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().getTokenExpiration()), Re = (e)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().addAuthStateChangeCallback(e);
}, Be = (e)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreOAuthManager"])().addOAuthStateChangeCallback(e);
}, De = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "sign_evm_hash"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock ? {
        signature: "0x0"
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: n, walletSecretId: t })=>({
            signature: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEvmHashWithEndUserAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, n.userId, {
                hash: e.hash,
                address: e.evmAccount,
                walletSecretId: t
            })).signature
        }))), Ne = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "sign_evm_transaction"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock ? {
        signedTransaction: "0x0"
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: n, walletSecretId: t })=>{
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web45$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeTransaction"])(e.transaction);
        return {
            signedTransaction: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEvmTransactionWithEndUserAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, n.userId, {
                transaction: r,
                address: e.evmAccount,
                walletSecretId: t
            })).signedTransaction
        };
    })), Fe = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "sign_solana_transaction"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock ? {
        signedTransaction: "mock-signed-transaction"
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: n, walletSecretId: t })=>({
            signedTransaction: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signSolanaTransactionWithEndUserAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, n.userId, {
                transaction: e.transaction,
                address: e.solanaAccount,
                walletSecretId: t
            })).signedTransaction
        }))), Je = async (e)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "send_evm_transaction"
    }), !(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChainSupportedForCDPSends"])(e.network)) throw new Error(`Chain ${e.network} is not supported by the CDP Apis`);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock) return {
        transactionHash: "0x0"
    };
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web45$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeTransaction"])(e.transaction);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: t, walletSecretId: r })=>({
            transactionHash: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendEvmTransactionWithEndUserAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, t.userId, {
                transaction: n,
                address: e.evmAccount,
                walletSecretId: r,
                network: e.network
            })).transactionHash
        }));
}, Le = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "send_solana_transaction"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock ? {
        transactionSignature: "mock-signature"
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: n, walletSecretId: t })=>({
            transactionSignature: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendSolanaTransactionWithEndUserAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, n.userId, {
                transaction: e.transaction,
                address: e.solanaAccount,
                walletSecretId: t,
                network: e.network
            })).transactionSignature
        }))), ze = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "sign_evm_message"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock ? {
        signature: "0x0"
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: n, walletSecretId: t })=>({
            signature: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEvmMessageWithEndUserAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, n.userId, {
                message: e.message,
                address: e.evmAccount,
                walletSecretId: t
            })).signature
        }))), $e = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "sign_solana_message"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock ? {
        signature: "mockSignature"
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: n, walletSecretId: t })=>({
            signature: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signSolanaMessageWithEndUserAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, n.userId, {
                message: e.message,
                address: e.solanaAccount,
                walletSecretId: t
            })).signature
        }))), Ve = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "sign_evm_typed_data"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock ? {
        signature: "0x0"
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: n, walletSecretId: t })=>({
            signature: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEvmTypedDataWithEndUserAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, n.userId, {
                typedData: e.typedData,
                address: e.evmAccount,
                walletSecretId: t
            })).signature
        }))), qe = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "send_user_operation"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock ? {
        userOperationHash: "0x1234567890123456789012345678901234567890123456789012345678901234"
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: n, walletSecretId: t })=>({
            userOperationHash: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendUserOperationWithEndUserAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, n.userId, e.evmSmartAccount, {
                network: e.network,
                calls: e.calls.map((s)=>({
                        to: s.to,
                        value: String(s.value ?? 0n),
                        data: s.data ?? "0x"
                    })),
                walletSecretId: t,
                useCdpPaymaster: e.useCdpPaymaster ?? !1,
                paymasterUrl: e.paymasterUrl,
                dataSuffix: e.dataSuffix
            })).userOpHash
        }))), Ge = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "get_user_operation"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock ? {
        userOpHash: e.userOperationHash,
        network: e.network,
        calls: [
            {
                to: "0x1234567890123456789012345678901234567890",
                value: "0",
                data: "0x"
            }
        ],
        status: "complete",
        transactionHash: "0x9876543210987654321098765432109876543210987654321098765432109876",
        receipts: []
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: n })=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserOperationWithEndUserAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, n.userId, e.evmSmartAccount, e.userOperationHash))), Qe = async (e)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "export_evm_account"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock) return {
        privateKey: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web34$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].Buffer.from("mock-private-key").toString("hex")
    };
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformCrypto"])(), t = await n.createExportKeyPair();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: r, walletSecretId: s })=>{
        const i = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportEndUserEvmAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, r.userId, {
            address: e.evmAccount,
            walletSecretId: s,
            exportEncryptionKey: t.publicKeyBase64
        }), u = await n.decryptWithPrivateKey(t.privateKey, i.encryptedPrivateKey);
        return {
            privateKey: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web34$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].Buffer.from(u).toString("hex")
        };
    });
}, Xe = async (e)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "export_solana_account"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock) {
        const r = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web34$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].Buffer.from("mock-private-key").subarray(0, 32), s = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web34$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].Buffer.alloc(32);
        r.copy(s);
        const i = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keypair"].fromSeed(s), u = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web34$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].Buffer.concat([
            i.secretKey.subarray(0, 32),
            i.publicKey.toBytes()
        ]);
        return {
            privateKey: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$node_modules$2f$bs58$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].encode(u)
        };
    }
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformCrypto"])(), t = await n.createExportKeyPair();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: r, walletSecretId: s })=>{
        const i = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportEndUserSolanaAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, r.userId, {
            address: e.solanaAccount,
            walletSecretId: s,
            exportEncryptionKey: t.publicKeyBase64
        }), u = await n.decryptWithPrivateKey(t.privateKey, i.encryptedPrivateKey), l = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keypair"].fromSeed(new Uint8Array(u)), h = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web34$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].Buffer.concat([
            l.secretKey.subarray(0, 32),
            l.publicKey.toBytes()
        ]);
        return {
            privateKey: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$node_modules$2f$bs58$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].encode(h)
        };
    });
}, y = async (e)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock) return "redirectUrl" in e ? {
        authUrl: "mock-auth-url",
        flowId: "mock-flow-id"
    } : {
        message: "Mock sign in initiated",
        flowId: "mock-flow-id"
    };
    if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().isSignedIn()) throw new Error("User is already authenticated. Please sign out first.");
    const t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initiateAuthentication"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, e);
    return "authUrl" in t ? {
        flowId: t.flowId,
        authUrl: t.authUrl
    } : {
        flowId: t.flowId,
        message: "message" in t ? t.message : ""
    };
}, A = async (e, n, t)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock) return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().setAuthState({
        accessToken: "mock-access-token",
        expiresAt: Date.now() + 1e3 * 60 * 60 * 24,
        user: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web42$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUser"]
    }), {
        message: n,
        user: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web42$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUser"],
        isNewUser: !1
    };
    const r = await t((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, e);
    let s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAuthState"])(r.accessToken, r.validUntil, r.endUser);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().setAuthState(s);
    const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])();
    i.ethereum?.createOnLogin && (s = await M(s, r.accessToken, r.validUntil, i.ethereum.createOnLogin)), i.solana?.createOnLogin && (s = await O(s, r.accessToken, r.validUntil));
    const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().getUser();
    return {
        message: r.message,
        user: u,
        isNewUser: r.isNewEndUser
    };
}, M = async (e, n, t, r)=>{
    let s = e;
    if (!e.user.evmAccountObjects || e.user.evmAccountObjects.length === 0) try {
        const i = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().getWalletSecretId();
        let u = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEndUserEvmAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, e.user.userId, {
            walletSecretId: i
        }), l = !1;
        const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().ethereum;
        if (h?.createOnLogin === "smart" && (l = h.enableSpendPermissions ?? !1), r === "smart") {
            const v = u.evmAccountObjects?.[0]?.address;
            if (!v) throw new Error("No EVM account found to use as owner for smart account");
            u = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEndUserEvmSmartAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, e.user.userId, {
                owner: v,
                enableSpendPermissions: l
            });
        }
        s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAuthState"])(n, t, u), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().setAuthState(s);
    } catch (i) {
        throw new Error(`Failed to create EVM account: ${i}`);
    }
    if (r === "smart" && (!s.user.evmSmartAccountObjects || s.user.evmSmartAccountObjects.length === 0)) try {
        const i = s.user.evmAccountObjects[0]?.address, u = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEndUserEvmSmartAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, s.user.userId, {
            owner: i,
            enableSpendPermissions: !1
        });
        s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAuthState"])(n, t, u), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().setAuthState(s);
    } catch (i) {
        throw new Error(`Failed to create EVM Smart Account: ${i}`);
    }
    return s;
}, O = async (e, n, t)=>{
    let r = e;
    if (!e.user.solanaAccountObjects || e.user.solanaAccountObjects.length === 0) try {
        const s = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().getWalletSecretId(), i = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEndUserSolanaAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, e.user.userId, {
            walletSecretId: s
        });
        r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAuthState"])(n, t, i), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().setAuthState(r);
    } catch (s) {
        throw new Error(`Failed to create Solana account: ${s}`);
    }
    return r;
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web30.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputValidationError",
    ()=>a,
    "InternalError",
    ()=>l,
    "ModuleResolutionError",
    ()=>n,
    "ValidationError",
    ()=>i
]);
class n extends Error {
    /**
   * The name of the missing module.
   */ moduleName;
    /**
   * The API or feature that requires the missing module.
   */ requiredFor;
    /**
   * Creates a new ModuleResolutionError.
   *
   * @param moduleName - The name of the missing module.
   * @param requiredFor - The API or feature that requires the module.
   * @param message - Optional custom error message.
   */ constructor(r, s, t){
        const o = `${s} is not available in this React Native environment. Please ensure ${r} is installed.`;
        super(t || o), this.name = "ModuleResolutionError", this.moduleName = r, this.requiredFor = s;
    }
}
class a extends Error {
    /**
   * Creates a new InputValidationError.
   *
   * @param message - The validation error message.
   */ constructor(r){
        super(r), this.name = "InputValidationError";
    }
}
class i extends Error {
    /**
   * Creates a new ValidationError.
   *
   * @param message - The validation error message.
   */ constructor(r){
        super(r), this.name = "ValidationError";
    }
}
class l extends Error {
    /**
   * Creates a new InternalError.
   *
   * @param message - The internal error message.
   */ constructor(r){
        super(r), this.name = "InternalError";
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web46.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toSpendPermission",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web30$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web30.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web4.js [app-client] (ecmascript)");
;
;
function y(e, o) {
    if (e.period !== void 0 && e.periodInDays !== void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web30$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputValidationError"]("Cannot specify both 'period' and 'periodInDays'. Please provide only one.");
    if (e.period === void 0 && e.periodInDays === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web30$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputValidationError"]("Must specify either 'period' (in seconds) or 'periodInDays'.");
    const t = e.period ?? e.periodInDays * 24 * 60 * 60, d = /* @__PURE__ */ new Date(), c = e.start ?? d, r = e.end, f = Math.floor(c.getTime() / 1e3), E = r ? Math.floor(r.getTime() / 1e3) : 281474976710655;
    return {
        account: e.account,
        spender: e.spender,
        allowance: e.allowance,
        token: D(e.token, o),
        period: t,
        start: f,
        end: E,
        salt: e.salt ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformCrypto"])().generateRandomSalt(),
        extraData: e.extraData ?? "0x"
    };
}
function D(e, o) {
    if (e === "eth") return "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
    if (e === "usdc") {
        const t = n[o]?.usdc;
        if (!t) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web30$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputValidationError"](`Automatic token address lookup for ${e} is not supported on ${o}. Please provide the token address manually.`);
        return t;
    }
    return e;
}
const n = {
    base: {
        usdc: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
    },
    "base-sepolia": {
        usdc: "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
    }
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web10.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSpendPermission",
    ()=>h
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web39.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web46$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web46.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
;
;
const h = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "create_spend_permission"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock ? {
        userOperationHash: "0x1234567890123456789012345678901234567890123456789012345678901234"
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: n, walletSecretId: s })=>{
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web46$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSpendPermission"])({
            ...e,
            account: e.evmSmartAccount
        }, e.network);
        return {
            userOperationHash: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSpendPermissionWithEndUserAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, n.userId, e.evmSmartAccount, {
                // spend permission options
                spender: r.spender,
                token: r.token,
                allowance: r.allowance.toString(),
                period: r.period.toString(),
                start: r.start.toString(),
                end: r.end.toString(),
                salt: r.salt.toString(),
                // api options
                walletSecretId: s,
                network: e.network,
                useCdpPaymaster: e.useCdpPaymaster ?? !1,
                paymasterUrl: e.paymasterUrl
            })).userOpHash
        };
    }));
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web11.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listSpendPermissions",
    ()=>k
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web39.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
;
const k = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "list_spend_permissions"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock ? {
        spendPermissions: [
            {
                permission: {
                    account: e.evmSmartAccount,
                    spender: "0x5678901234567890123456789012345678901234",
                    token: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
                    allowance: "1000000000000000000",
                    period: "86400",
                    start: "1640995200",
                    end: "1672531200",
                    salt: "123456789",
                    extraData: "0x"
                },
                permissionHash: "0x1234567890123456789012345678901234567890123456789012345678901234",
                revoked: !1,
                createdAt: "2024-01-01T00:00:00Z",
                network: e.network
            }
        ],
        hasNextPage: !1
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: t })=>{
        const n = {};
        e.pageSize !== void 0 && (n.pageSize = e.pageSize), e.pageToken !== void 0 && (n.pageToken = e.pageToken);
        const s = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listSpendPermissionsWithEndUserAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, t.userId, e.evmSmartAccount, n);
        return {
            spendPermissions: s.spendPermissions,
            hasNextPage: !!s.nextPageToken,
            nextPageToken: s.nextPageToken
        };
    }));
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web12.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "revokeSpendPermission",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web39.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
;
const f = async (e)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "revoke_spend_permission"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock ? {
        userOperationHash: "0x1234567890123456789012345678901234567890123456789012345678901234"
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: s, walletSecretId: t })=>({
            userOperationHash: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revokeSpendPermissionWithEndUserAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, s.userId, e.evmSmartAccount, {
                permissionHash: e.permissionHash,
                walletSecretId: t,
                network: e.network,
                useCdpPaymaster: e.useCdpPaymaster ?? !1,
                paymasterUrl: e.paymasterUrl
            })).userOpHash
        })));
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web13.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentUserSync",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
const s = ()=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "get_current_user_sync"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().getUser());
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web47.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toTransactionSigner",
    ()=>A
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@solana/transactions/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@solana/addresses/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web13.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web33$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web33.js [app-client] (ecmascript)");
;
;
;
;
function A(n) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserSync"])();
    if (!t || !t.solanaAccountObjects?.length) throw new Error("No accounts found. User must be authenticated and have at least one Solana account");
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionEncoder"])(), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionDecoder"])();
    return {
        address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["address"])(n),
        signTransactions: async (c)=>{
            const o = [];
            for (const s of c){
                const i = new Uint8Array(r.encode(s)), { signedTransaction: d } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signSolanaTransaction"])({
                    solanaAccount: n,
                    transaction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web33$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(i)
                }), e = a.decode((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web33$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBase64"])(d)).signatures[n];
                if (!e) throw new Error("Wallet did not return a signature for the selected account.");
                o.push(Object.freeze({
                    [n]: e
                }));
            }
            return o;
        }
    };
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web50.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COINBASE_SMART_WALLET_FACTORY_ABI",
    ()=>e,
    "COINBASE_SMART_WALLET_FACTORY_ADDRESS",
    ()=>t
]);
const t = "0xba5ed110efdba3d005bfc882d75358acbbb85842", e = [
    {
        inputs: [
            {
                name: "implementation_",
                type: "address"
            }
        ],
        stateMutability: "payable",
        type: "constructor"
    },
    {
        inputs: [],
        name: "OwnerRequired",
        type: "error"
    },
    {
        inputs: [
            {
                name: "owners",
                type: "bytes[]"
            },
            {
                name: "nonce",
                type: "uint256"
            }
        ],
        name: "createAccount",
        outputs: [
            {
                name: "account",
                type: "address"
            }
        ],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                name: "owners",
                type: "bytes[]"
            },
            {
                name: "nonce",
                type: "uint256"
            }
        ],
        name: "getAddress",
        outputs: [
            {
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "implementation",
        outputs: [
            {
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "initCodeHash",
        outputs: [
            {
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web51.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createReplaySafeTypedData",
    ()=>u,
    "createSmartAccountSignatureWrapper",
    ()=>y,
    "signAndWrapTypedDataForSmartAccount",
    ()=>b
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/viem/_esm/utils/data/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodePacked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/viem/_esm/utils/abi/encodePacked.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
;
;
async function b(e) {
    const { smartAccount: t, hash: a, chainId: n, ownerAddress: r } = e, o = u({
        hash: a,
        chainId: n,
        smartAccountAddress: t
    }), { signature: i } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEvmTypedData"])({
        evmAccount: r,
        typedData: o
    });
    return {
        signature: y({
            signatureHex: i
        })
    };
}
function u({ hash: e, chainId: t, smartAccountAddress: a }) {
    return {
        domain: {
            name: "Coinbase Smart Wallet",
            version: "1",
            chainId: t,
            verifyingContract: a
        },
        types: {
            EIP712Domain: [
                {
                    name: "name",
                    type: "string"
                },
                {
                    name: "version",
                    type: "string"
                },
                {
                    name: "chainId",
                    type: "uint256"
                },
                {
                    name: "verifyingContract",
                    type: "address"
                }
            ],
            CoinbaseSmartWalletMessage: [
                {
                    name: "hash",
                    type: "bytes32"
                }
            ]
        },
        primaryType: "CoinbaseSmartWalletMessage",
        message: {
            hash: e
        }
    };
}
function y({ signatureHex: e }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliceHex"])(e, 0, 32), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliceHex"])(e, 32, 64), n = +`0x${e.slice(130, 132)}`, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodePacked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodePacked"])([
        "bytes32",
        "bytes32",
        "uint8"
    ], [
        t,
        a,
        n
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeAbiParameters"])([
        d
    ], [
        {
            ownerIndex: 0,
            signatureData: r
        }
    ]);
}
const d = {
    components: [
        {
            name: "ownerIndex",
            type: "uint8"
        },
        {
            name: "signatureData",
            type: "bytes"
        }
    ],
    name: "SignatureWrapper",
    type: "tuple"
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web52.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toAccount",
    ()=>r
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web99$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web99.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web78$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web78.js [app-client] (ecmascript)");
;
;
function r(n) {
    if (typeof n == "string") {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web78$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(n, {
            strict: !1
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web99$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
            address: n
        });
        return {
            address: n,
            type: "json-rpc"
        };
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web78$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(n.address, {
        strict: !1
    })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web99$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: n.address
    });
    return {
        address: n.address,
        nonceManager: n.nonceManager,
        sign: n.sign,
        signAuthorization: n.signAuthorization,
        signMessage: n.signMessage,
        signTransaction: n.signTransaction,
        signTypedData: n.signTypedData,
        source: "custom",
        type: "local"
    };
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web29.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toViemAccount",
    ()=>_
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/viem/_esm/utils/signature/hashTypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeErc6492Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/viem/_esm/utils/signature/serializeErc6492Signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/viem/_esm/utils/data/pad.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/viem/_esm/utils/typedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/viem/_esm/utils/signature/hashMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web13.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web50$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web50.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web51$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web51.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web52$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web52.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function _(n) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserSync"])();
    if (!r || !r.evmAccountObjects?.length && !r.evmSmartAccountObjects?.length) throw new Error("No accounts found - user must be authenticated and have at least one EVM account or smart account");
    const c = r.evmAccountObjects?.some((e)=>e.address === n) ?? !1, s = r.evmSmartAccountObjects?.some((e)=>e.address === n) ?? !1;
    if (!c && !s) throw new Error(`Cannot sign for address ${n} - not authorized for this account`);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web52$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAccount"])({
        address: n,
        /**
     * Signs a message using CDP's message signing functionality.
     * Supports string messages, hex strings, and byte arrays.
     *
     * @param root0 - The parameters object
     * @param root0.message - The message to sign, can be a string, hex string, or byte array
     * @returns The signature as a hex string
     */ async signMessage ({ message: e }) {
            let t;
            if (typeof e == "string") t = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEvmMessage"])({
                evmAccount: n,
                message: e
            })).signature;
            else if ("raw" in e) {
                const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(e);
                t = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEvmHash"])({
                    evmAccount: n,
                    hash: a
                })).signature;
            } else throw new Error("Unsupported message format");
            return t;
        },
        /**
     * Signs a transaction using CDP's transaction signing functionality.
     * Converts Viem's transaction format to CDP's AllowedEvmTransactionType.
     *
     * @param transaction - The transaction to sign in Viem's format
     * @returns The signature as a hex string
     */ async signTransaction (e) {
            const t = {
                to: e.to,
                value: e.value,
                data: e.data,
                nonce: e.nonce,
                gas: e.gas,
                chainId: e.chainId ?? 1
            };
            return e.gasPrice !== void 0 ? (t.maxFeePerGas = e.gasPrice, t.maxPriorityFeePerGas = e.gasPrice) : (t.maxFeePerGas = e.maxFeePerGas, t.maxPriorityFeePerGas = e.maxPriorityFeePerGas), (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEvmTransaction"])({
                evmAccount: n,
                transaction: t
            })).signedTransaction;
        },
        /**
     * Signs EIP-712 typed data using CDP's typed data signing functionality.
     * Handles domain separation and type encoding according to the EIP-712 specification.
     * For smart accounts, implements replay-safe hash and signature wrapping.
     *
     * @param params - The typed data parameters following the EIP-712 specification
     * @returns The signature as a hex string
     */ async signTypedData (e) {
            if (s) {
                const t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web51$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signAndWrapTypedDataForSmartAccount"])({
                    smartAccount: n,
                    ownerAddress: r.evmAccountObjects?.[0]?.address,
                    hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashTypedData"])(e),
                    chainId: Number(e.domain.chainId)
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeErc6492Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeErc6492Signature"])({
                    address: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web50$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE_SMART_WALLET_FACTORY_ADDRESS"],
                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                        abi: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web50$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE_SMART_WALLET_FACTORY_ABI"],
                        functionName: "createAccount",
                        args: [
                            [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(r.evmAccountObjects?.[0]?.address)
                            ],
                            0n
                        ]
                    }),
                    signature: t.signature
                });
            } else {
                const t = {
                    domain: e.domain,
                    types: {
                        EIP712Domain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTypesForEIP712Domain"])({
                            domain: e.domain
                        }),
                        ...e.types
                    },
                    primaryType: e.primaryType,
                    message: e.message
                };
                return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEvmTypedData"])({
                    evmAccount: n,
                    typedData: t
                })).signature;
            }
        },
        /**
     * Signs a raw message hash using CDP's message signing functionality.
     *
     * @param message - The message hash to sign
     * @returns The signature as a hex string
     */ async sign (e) {
            return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEvmHash"])({
                evmAccount: n,
                hash: e.hash
            })).signature;
        }
    });
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web14.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchWithX402",
    ()=>g
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/viem/_esm/utils/address/isAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web13.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web47$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web47.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web29$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web29.js [app-client] (ecmascript)");
;
;
;
;
function g(e = {}) {
    const a = e.fetch ?? globalThis.fetch;
    let r = null;
    return {
        fetchWithPayment: async (...d)=>{
            if (!r) {
                const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserSync"])();
                if (!t) throw new Error("User not authenticated");
                const o = (()=>{
                    if (e.address && (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(e.address)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web29$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toViemAccount"])(e.address);
                    if (e.address && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(e.address)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web47$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTransactionSigner"])(e.address);
                    if (t.evmSmartAccountObjects?.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web29$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toViemAccount"])(t.evmSmartAccountObjects[0].address);
                    if (t.evmAccountObjects?.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web29$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toViemAccount"])(t.evmAccountObjects[0].address);
                    if (t.solanaAccountObjects?.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web47$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTransactionSigner"])(t.solanaAccountObjects[0].address);
                    throw new Error("No account found");
                })();
                try {
                    const { wrapFetchWithPayment: u } = await (()=>{
                        const e = new Error("Cannot find module 'x402-fetch'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    })();
                    r = u(a, o, e.maxValue, e.paymentRequirementsSelector, e.config);
                } catch  {
                    throw new Error("x402-fetch is not installed. Make sure x402-fetch is installed and try again.");
                }
            }
            return r(...d);
        }
    };
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web15.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "linkGoogle",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
;
async function u() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "link_google"
    }), !await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().isSignedIn()) throw new Error("User must be signed in to link a Google account");
    const t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initiateAuthentication"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, {
        type: "google",
        redirectUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformOAuth"])().getRedirectUrl()
    });
    if (!("authUrl" in t)) throw new Error("Failed to initiate Google authentication");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformOAuth"])().initiateOAuthFlow(t.authUrl);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web16.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "linkSms",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
async function c(e) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "link_sms"
    }), !await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().isSignedIn()) throw new Error("User must be signed in to link a phone number");
    const n = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initiateAuthentication"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, {
        phoneNumber: e,
        type: "sms"
    });
    return {
        flowId: n.flowId,
        message: "message" in n ? n.message : ""
    };
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web17.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "linkEmail",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
async function c(e) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "link_email"
    }), !await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().isSignedIn()) throw new Error("User must be signed in to link an email");
    const i = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initiateAuthentication"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, {
        email: e,
        type: "email"
    });
    return {
        flowId: i.flowId,
        message: "message" in i ? i.message : ""
    };
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web18.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "linkOAuth",
    ()=>g
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
;
async function g(t) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "link_oauth"
    }), !await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().isSignedIn()) throw new Error("User must be signed in to link an OAuth account");
    const i = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initiateAuthentication"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, {
        type: t,
        redirectUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformOAuth"])().getRedirectUrl()
    });
    if (!("authUrl" in i)) throw new Error(`Failed to initiate ${t} authentication`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformOAuth"])().initiateOAuthFlow(i.authUrl);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web19.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "linkApple",
    ()=>g
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
;
async function g() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "link_apple"
    }), !await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])().isSignedIn()) throw new Error("User must be signed in to link an Apple account");
    const t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initiateAuthentication"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, {
        type: "apple",
        redirectUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformOAuth"])().getRedirectUrl()
    });
    if (!("authUrl" in t)) throw new Error("Failed to initiate Apple authentication");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformOAuth"])().initiateOAuthFlow(t.authUrl);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web48.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateUserAuthState",
    ()=>i
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web30$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web30.js [app-client] (ecmascript)");
;
function i(r, t) {
    if (!r) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web30$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]("User must be signed in");
    if (!t) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web30$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalError"]("No auth state found");
    return {
        user: r,
        authState: t
    };
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web20.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEvmEoaAccount",
    ()=>U
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web38.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web30$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web30.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web48$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web48.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
async function U() {
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "create_evm_eoa_account"
    });
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), { user: e, authState: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web48$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserAuthState"])(t.getUser(), t.getAuthState()), n = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEndUserEvmAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, e.userId, {
        walletSecretId: await t.getWalletSecretId()
    }), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAuthStateUser"])(n);
    await t.setAuthState({
        ...a,
        user: r
    });
    const c = new Set(e.evmAccounts || []), o = r.evmAccounts?.find((s)=>!c.has(s));
    if (!o) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web30$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalError"]("EVM EOA account was not created. Check the network log for more details.");
    return o;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web21.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEvmSmartAccount",
    ()=>C
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web38.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web20$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web20.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web30$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web30.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web48$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web48.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
async function C(a) {
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "create_evm_smart_account"
    });
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), { user: r, authState: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web48$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserAuthState"])(e.getUser(), e.getAuthState()), c = await (async ()=>r.evmAccountObjects?.[0]?.address ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web20$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEvmEoaAccount"])())(), m = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEndUserEvmSmartAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, r.userId, {
        owner: c,
        enableSpendPermissions: a?.enableSpendPermissions ?? !1
    }), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAuthStateUser"])(m);
    await e.setAuthState({
        ...s,
        user: n
    });
    const i = new Set(r.evmSmartAccountObjects?.map((t)=>t.address) || []), o = n.evmSmartAccountObjects?.find((t)=>!i.has(t.address))?.address;
    if (!o) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web30$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalError"]("EVM Smart Account was not created. Check the network log for more details.");
    return o;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web22.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSolanaAccount",
    ()=>C
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web38.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web30$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web30.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web48$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web48.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
async function C() {
    __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "create_solana_account"
    });
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), { user: e, authState: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web48$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserAuthState"])(t.getUser(), t.getAuthState()), n = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEndUserSolanaAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, e.userId, {
        walletSecretId: await t.getWalletSecretId()
    }), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAuthStateUser"])(n);
    await t.setAuthState({
        ...r,
        user: a
    });
    const c = new Set(e.solanaAccounts || []), o = a.solanaAccounts?.find((s)=>!c.has(s));
    if (!o) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web30$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalError"]("Solana account was not created. Check the network log for more details.");
    return o;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web23.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initiateMfaEnrollment",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web39.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
;
const f = async (r)=>(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "initiate_mfa_enrollment"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock ? {
        authUrl: "otpauth://totp/MockApp:mock@example.com?secret=MOCKTOTP&issuer=MockApp",
        secret: "MOCKTOTP"
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: o })=>{
        const t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initiateMfaEnrollment"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, o.userId, r.mfaMethod);
        return {
            authUrl: t.authUrl,
            secret: t.secret
        };
    }));
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web24.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitMfaEnrollment",
    ()=>S
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web38.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web39.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web42$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web42.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web48$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web48.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const S = async (e)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "submit_mfa_enrollment"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock) return {
        user: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web42$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUser"]
    };
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), { authState: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web48$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserAuthState"])(t.getUser(), t.getAuthState()), m = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])({}, t, async ({ user: n })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitMfaEnrollment"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, n.userId, e.mfaMethod, {
            mfaCode: e.mfaCode
        })), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web38$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAuthStateUser"])(m.endUser);
    return await t.setAuthState({
        ...a,
        user: r
    }), {
        user: r
    };
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web25.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initiateMfaVerification",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web39.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
;
const u = async (t)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "initiate_mfa_verification"
    }), !(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: a })=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initiateMfaVerification"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, a.userId, t.mfaMethod);
    });
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web26.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitMfaVerification",
    ()=>d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web39.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web44.js [app-client] (ecmascript)");
;
;
;
;
;
const d = async (t)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].sendActionCallEvent({
        name: "submit_mfa_verification"
    }), !(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().useMock) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web39$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAuth"])(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreAuthManager"])(), async ({ user: r })=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitMfaVerification"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web44$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])().projectId, r.userId, t.mfaMethod, {
            mfaCode: t.mfaCode
        });
    });
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web53.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createJSONStorage",
    ()=>F,
    "persist",
    ()=>w,
    "subscribeWithSelector",
    ()=>R
]);
const H = (m)=>(h, n, r)=>{
        const s = r.subscribe;
        return r.subscribe = (c, i, a)=>{
            let l = c;
            if (i) {
                const g = a?.equalityFn || Object.is;
                let v = c(r.getState());
                l = (f)=>{
                    const u = c(f);
                    if (!g(v, u)) {
                        const y = v;
                        i(v = u, y);
                    }
                }, a?.fireImmediately && i(v, v);
            }
            return s(l);
        }, m(h, n, r);
    }, R = H;
function F(m, h) {
    let n;
    try {
        n = m();
    } catch  {
        return;
    }
    return {
        getItem: (s)=>{
            var e;
            const c = (a)=>a === null ? null : JSON.parse(a, void 0), i = (e = n.getItem(s)) != null ? e : null;
            return i instanceof Promise ? i.then(c) : c(i);
        },
        setItem: (s, e)=>n.setItem(s, JSON.stringify(e, void 0)),
        removeItem: (s)=>n.removeItem(s)
    };
}
const p = (m)=>(h)=>{
        try {
            const n = m(h);
            return n instanceof Promise ? n : {
                then (r) {
                    return p(r)(n);
                },
                catch (r) {
                    return this;
                }
            };
        } catch (n) {
            return {
                then (r) {
                    return this;
                },
                catch (r) {
                    return p(r)(n);
                }
            };
        }
    }, O = (m, h)=>(n, r, s)=>{
        let e = {
            storage: F(()=>localStorage),
            partialize: (t)=>t,
            version: 0,
            merge: (t, S)=>({
                    ...S,
                    ...t
                }),
            ...h
        }, c = !1;
        const i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
        let l = e.storage;
        if (!l) return m((...t)=>{
            console.warn(`[zustand persist middleware] Unable to update item '${e.name}', the given storage is currently unavailable.`), n(...t);
        }, r, s);
        const g = ()=>{
            const t = e.partialize({
                ...r()
            });
            return l.setItem(e.name, {
                state: t,
                version: e.version
            });
        }, v = s.setState;
        s.setState = (t, S)=>{
            v(t, S), g();
        };
        const f = m((...t)=>{
            n(...t), g();
        }, r, s);
        s.getInitialState = ()=>f;
        let u;
        const y = ()=>{
            var t, S;
            if (!l) return;
            c = !1, i.forEach((o)=>{
                var d;
                return o((d = r()) != null ? d : f);
            });
            const b = ((S = e.onRehydrateStorage) == null ? void 0 : S.call(e, (t = r()) != null ? t : f)) || void 0;
            return p(l.getItem.bind(l))(e.name).then((o)=>{
                if (o) if (typeof o.version == "number" && o.version !== e.version) {
                    if (e.migrate) {
                        const d = e.migrate(o.state, o.version);
                        return d instanceof Promise ? d.then((I)=>[
                                !0,
                                I
                            ]) : [
                            !0,
                            d
                        ];
                    }
                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                } else return [
                    !1,
                    o.state
                ];
                return [
                    !1,
                    void 0
                ];
            }).then((o)=>{
                var d;
                const [I, _] = o;
                if (u = e.merge(_, (d = r()) != null ? d : f), n(u, !0), I) return g();
            }).then(()=>{
                b?.(u, void 0), u = r(), c = !0, a.forEach((o)=>o(u));
            }).catch((o)=>{
                b?.(void 0, o);
            });
        };
        return s.persist = {
            setOptions: (t)=>{
                e = {
                    ...e,
                    ...t
                }, t.storage && (l = t.storage);
            },
            clearStorage: ()=>{
                l?.removeItem(e.name);
            },
            getOptions: ()=>e,
            rehydrate: ()=>y(),
            hasHydrated: ()=>c,
            onHydrate: (t)=>(i.add(t), ()=>{
                    i.delete(t);
                }),
            onFinishHydration: (t)=>(a.add(t), ()=>{
                    a.delete(t);
                })
        }, e.skipHydration || y(), u || f;
    }, w = O;
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web54.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventEmitter",
    ()=>n
]);
class n {
    events = {};
    /**
   * Add an event listener.
   *
   * @param event - The name of the event to listen for.
   * @param listener - The function to call when the event is emitted.
   */ on(e, s) {
        this.events[e] || (this.events[e] = []), this.events[e].push(s);
    }
    /**
   * Remove an event listener.
   *
   * @param event - The name of the event to remove the listener from.
   * @param listener - The function to remove from the event listeners.
   */ removeListener(e, s) {
        if (!this.events[e]) return;
        const t = this.events[e].indexOf(s);
        t > -1 && this.events[e].splice(t, 1);
    }
    /**
   * Emit an event.
   *
   * @param event - The name of the event to emit.
   * @param args - The arguments to pass to the event listeners.
   */ emit(e, ...s) {
        this.events[e] && this.events[e].forEach((t)=>{
            try {
                t(...s);
            } catch (i) {
                console.error(`Error in event listener for ${e}:`, i);
            }
        });
    }
    /**
   * Remove all listeners for an event.
   *
   * @param event - The name of the event to remove all listeners from. If not provided, removes all listeners for all events.
   */ removeAllListeners(e) {
        e ? delete this.events[e] : this.events = {};
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web55.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web8.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web34$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web34.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index8.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$node_modules$2f$bs58$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/node_modules/bs58/src/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web43.js [app-client] (ecmascript)");
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
__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].registerPackageVersion("core", __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"]);
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web155.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__module",
    ()=>e
]);
var e = {
    exports: {}
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web154.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__require",
    ()=>O
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web155$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web155.js [app-client] (ecmascript)");
;
var w;
function O() {
    return w ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web155$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports : (w = 1, function(d) {
        var g = Object.prototype.hasOwnProperty, c = "~";
        function h() {}
        Object.create && (h.prototype = /* @__PURE__ */ Object.create(null), new h().__proto__ || (c = !1));
        function b(s, t, n) {
            this.fn = s, this.context = t, this.once = n || !1;
        }
        function m(s, t, n, r, l) {
            if (typeof n != "function") throw new TypeError("The listener must be a function");
            var u = new b(n, r || s, l), o = c ? c + t : t;
            return s._events[o] ? s._events[o].fn ? s._events[o] = [
                s._events[o],
                u
            ] : s._events[o].push(u) : (s._events[o] = u, s._eventsCount++), s;
        }
        function y(s, t) {
            --s._eventsCount === 0 ? s._events = new h() : delete s._events[t];
        }
        function f() {
            this._events = new h(), this._eventsCount = 0;
        }
        f.prototype.eventNames = function() {
            var t = [], n, r;
            if (this._eventsCount === 0) return t;
            for(r in n = this._events)g.call(n, r) && t.push(c ? r.slice(1) : r);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(n)) : t;
        }, f.prototype.listeners = function(t) {
            var n = c ? c + t : t, r = this._events[n];
            if (!r) return [];
            if (r.fn) return [
                r.fn
            ];
            for(var l = 0, u = r.length, o = new Array(u); l < u; l++)o[l] = r[l].fn;
            return o;
        }, f.prototype.listenerCount = function(t) {
            var n = c ? c + t : t, r = this._events[n];
            return r ? r.fn ? 1 : r.length : 0;
        }, f.prototype.emit = function(t, n, r, l, u, o) {
            var a = c ? c + t : t;
            if (!this._events[a]) return !1;
            var e = this._events[a], p = arguments.length, v, i;
            if (e.fn) {
                switch(e.once && this.removeListener(t, e.fn, void 0, !0), p){
                    case 1:
                        return e.fn.call(e.context), !0;
                    case 2:
                        return e.fn.call(e.context, n), !0;
                    case 3:
                        return e.fn.call(e.context, n, r), !0;
                    case 4:
                        return e.fn.call(e.context, n, r, l), !0;
                    case 5:
                        return e.fn.call(e.context, n, r, l, u), !0;
                    case 6:
                        return e.fn.call(e.context, n, r, l, u, o), !0;
                }
                for(i = 1, v = new Array(p - 1); i < p; i++)v[i - 1] = arguments[i];
                e.fn.apply(e.context, v);
            } else {
                var E = e.length, _;
                for(i = 0; i < E; i++)switch(e[i].once && this.removeListener(t, e[i].fn, void 0, !0), p){
                    case 1:
                        e[i].fn.call(e[i].context);
                        break;
                    case 2:
                        e[i].fn.call(e[i].context, n);
                        break;
                    case 3:
                        e[i].fn.call(e[i].context, n, r);
                        break;
                    case 4:
                        e[i].fn.call(e[i].context, n, r, l);
                        break;
                    default:
                        if (!v) for(_ = 1, v = new Array(p - 1); _ < p; _++)v[_ - 1] = arguments[_];
                        e[i].fn.apply(e[i].context, v);
                }
            }
            return !0;
        }, f.prototype.on = function(t, n, r) {
            return m(this, t, n, r, !1);
        }, f.prototype.once = function(t, n, r) {
            return m(this, t, n, r, !0);
        }, f.prototype.removeListener = function(t, n, r, l) {
            var u = c ? c + t : t;
            if (!this._events[u]) return this;
            if (!n) return y(this, u), this;
            var o = this._events[u];
            if (o.fn) o.fn === n && (!l || o.once) && (!r || o.context === r) && y(this, u);
            else {
                for(var a = 0, e = [], p = o.length; a < p; a++)(o[a].fn !== n || l && !o[a].once || r && o[a].context !== r) && e.push(o[a]);
                e.length ? this._events[u] = e.length === 1 ? e[0] : e : y(this, u);
            }
            return this;
        }, f.prototype.removeAllListeners = function(t) {
            var n;
            return t ? (n = c ? c + t : t, this._events[n] && y(this, n)) : (this._events = new h(), this._eventsCount = 0), this;
        }, f.prototype.off = f.prototype.removeListener, f.prototype.addListener = f.prototype.on, f.prefixed = c, f.EventEmitter = f, d.exports = f;
    }(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web155$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"]), __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web155$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web67.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web154$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web154.js [app-client] (ecmascript)");
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web154$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])();
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web153.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>o
]);
const o = "0.1.1";
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web116.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVersion",
    ()=>e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web153$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web153.js [app-client] (ecmascript)");
;
function e() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web153$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"];
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web68.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseError",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web116$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web116.js [app-client] (ecmascript)");
;
class s extends Error {
    constructor(r, e = {}){
        const a = (()=>{
            if (e.cause instanceof s) {
                if (e.cause.details) return e.cause.details;
                if (e.cause.shortMessage) return e.cause.shortMessage;
            }
            return e.cause && "details" in e.cause && typeof e.cause.details == "string" ? e.cause.details : e.cause?.message ? e.cause.message : e.details;
        })(), u = e.cause instanceof s && e.cause.docsPath || e.docsPath, c = `https://oxlib.sh${u ?? ""}`, l = [
            r || "An error occurred.",
            ...e.metaMessages ? [
                "",
                ...e.metaMessages
            ] : [],
            ...a || u ? [
                "",
                a ? `Details: ${a}` : void 0,
                u ? `See: ${c}` : void 0
            ] : []
        ].filter((d)=>typeof d == "string").join(`
`);
        super(l, e.cause ? {
            cause: e.cause
        } : void 0), Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "docs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BaseError"
        }), Object.defineProperty(this, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: `ox@${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web116$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersion"])()}`
        }), this.cause = e.cause, this.details = a, this.docs = c, this.docsPath = u, this.shortMessage = r;
    }
    walk(r) {
        return i(this, r);
    }
}
function i(t, r) {
    return r?.(t) ? t : t && typeof t == "object" && "cause" in t && t.cause ? i(t.cause, r) : r ? null : t;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web69.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseError",
    ()=>t,
    "InternalError",
    ()=>u,
    "InvalidInputError",
    ()=>n,
    "InvalidParamsError",
    ()=>m,
    "InvalidRequestError",
    ()=>f,
    "LimitExceededError",
    ()=>d,
    "MethodNotFoundError",
    ()=>p,
    "MethodNotSupportedError",
    ()=>l,
    "ParseError",
    ()=>g,
    "ResourceNotFoundError",
    ()=>c,
    "ResourceUnavailableError",
    ()=>s,
    "TransactionRejectedError",
    ()=>i,
    "VersionNotSupportedError",
    ()=>b,
    "parse",
    ()=>O,
    "parseError",
    ()=>P
]);
function O(a, e = {}) {
    const { raw: r = !1 } = e, o = a;
    if (r) return a;
    if (o.error) throw P(o.error);
    return o.result;
}
function P(a) {
    const e = a;
    if (e instanceof Error && !("code" in e)) return new u({
        cause: e,
        data: e,
        message: e.message
    });
    const { code: r } = e;
    return r === u.code ? new u(e) : r === n.code ? new n(e) : r === m.code ? new m(e) : r === f.code ? new f(e) : r === d.code ? new d(e) : r === p.code ? new p(e) : r === l.code ? new l(e) : r === g.code ? new g(e) : r === c.code ? new c(e) : r === s.code ? new s(e) : r === i.code ? new i(e) : r === b.code ? new b(e) : new u({
        cause: e instanceof Error ? e : void 0,
        data: e,
        message: e.message
    });
}
class t extends Error {
    constructor(e){
        const { cause: r, code: o, message: w, data: v } = e;
        super(w, {
            cause: r
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.BaseError"
        }), Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.cause = r, this.code = o, this.data = v;
    }
}
class n extends t {
    constructor(e = {}){
        super({
            code: n.code,
            data: e.data,
            message: e.message ?? "Missing or invalid parameters."
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32e3
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.InvalidInputError"
        });
    }
}
Object.defineProperty(n, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32e3
});
class c extends t {
    constructor(e = {}){
        super({
            code: c.code,
            data: e.data,
            message: e.message ?? "Requested resource not found."
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32001
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.ResourceNotFoundError"
        });
    }
}
Object.defineProperty(c, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32001
});
class s extends t {
    constructor(e = {}){
        super({
            code: s.code,
            data: e.data,
            message: e.message ?? "Requested resource not available."
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32002
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.ResourceUnavailableError"
        });
    }
}
Object.defineProperty(s, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32002
});
class i extends t {
    constructor(e = {}){
        super({
            code: i.code,
            data: e.data,
            message: e.message ?? "Transaction creation failed."
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32003
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.TransactionRejectedError"
        });
    }
}
Object.defineProperty(i, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32003
});
class l extends t {
    constructor(e = {}){
        super({
            code: l.code,
            data: e.data,
            message: e.message ?? "Method is not implemented."
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32004
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.MethodNotSupportedError"
        });
    }
}
Object.defineProperty(l, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32004
});
class d extends t {
    constructor(e = {}){
        super({
            code: d.code,
            data: e.data,
            message: e.message ?? "Rate limit exceeded."
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32005
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.LimitExceededError"
        });
    }
}
Object.defineProperty(d, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32005
});
class b extends t {
    constructor(e = {}){
        super({
            code: b.code,
            data: e.data,
            message: e.message ?? "JSON-RPC version not supported."
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32006
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.VersionNotSupportedError"
        });
    }
}
Object.defineProperty(b, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32006
});
class f extends t {
    constructor(e = {}){
        super({
            code: f.code,
            data: e.data,
            message: e.message ?? "Input is not a valid JSON-RPC request."
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32600
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.InvalidRequestError"
        });
    }
}
Object.defineProperty(f, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32600
});
class p extends t {
    constructor(e = {}){
        super({
            code: p.code,
            data: e.data,
            message: e.message ?? "Method does not exist."
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32601
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.MethodNotFoundError"
        });
    }
}
Object.defineProperty(p, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32601
});
class m extends t {
    constructor(e = {}){
        super({
            code: m.code,
            data: e.data,
            message: e.message ?? "Invalid method parameters."
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32602
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.InvalidParamsError"
        });
    }
}
Object.defineProperty(m, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32602
});
class u extends t {
    constructor(e = {}){
        super({
            cause: e.cause,
            code: u.code,
            data: e.data,
            message: e.message ?? "Internal JSON-RPC error."
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32603
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.InternalError"
        });
    }
}
Object.defineProperty(u, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32603
});
class g extends t {
    constructor(e = {}){
        super({
            code: g.code,
            data: e.data,
            message: e.message ?? "Failed to parse JSON-RPC response."
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32700
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.ParseError"
        });
    }
}
Object.defineProperty(g, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32700
});
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web66.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AtomicReadyWalletRejectedUpgradeError",
    ()=>m,
    "AtomicityNotSupportedError",
    ()=>w,
    "BundleTooLargeError",
    ()=>h,
    "ChainDisconnectedError",
    ()=>l,
    "DisconnectedError",
    ()=>c,
    "DuplicateIdError",
    ()=>f,
    "IsUndefinedError",
    ()=>E,
    "ProviderRpcError",
    ()=>u,
    "SwitchChainError",
    ()=>d,
    "UnauthorizedError",
    ()=>a,
    "UnknownBundleIdError",
    ()=>p,
    "UnsupportedChainIdError",
    ()=>s,
    "UnsupportedMethodError",
    ()=>i,
    "UnsupportedNonOptionalCapabilityError",
    ()=>b,
    "UserRejectedRequestError",
    ()=>n,
    "from",
    ()=>q,
    "parseError",
    ()=>O
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web67$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web67.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web68$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web68.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web69$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web69.js [app-client] (ecmascript)");
;
;
;
class u extends Error {
    constructor(e, t){
        super(t), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ProviderRpcError"
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.code = e, this.details = t;
    }
}
class n extends u {
    constructor({ message: e = "The user rejected the request." } = {}){
        super(4001, e), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 4001
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.UserRejectedRequestError"
        });
    }
}
Object.defineProperty(n, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4001
});
class a extends u {
    constructor({ message: e = "The requested method and/or account has not been authorized by the user." } = {}){
        super(4100, e), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 4100
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.UnauthorizedError"
        });
    }
}
Object.defineProperty(a, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4100
});
class i extends u {
    constructor({ message: e = "The provider does not support the requested method." } = {}){
        super(4200, e), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 4200
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.UnsupportedMethodError"
        });
    }
}
Object.defineProperty(i, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4200
});
class c extends u {
    constructor({ message: e = "The provider is disconnected from all chains." } = {}){
        super(4900, e), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 4900
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.DisconnectedError"
        });
    }
}
Object.defineProperty(c, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4900
});
class l extends u {
    constructor({ message: e = "The provider is not connected to the requested chain." } = {}){
        super(4901, e), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 4901
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.ChainDisconnectedError"
        });
    }
}
Object.defineProperty(l, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4901
});
class d extends u {
    constructor({ message: e = "An error occurred when attempting to switch chain." } = {}){
        super(4902, e), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 4902
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.SwitchChainError"
        });
    }
}
Object.defineProperty(d, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4902
});
class b extends u {
    constructor({ message: e = "This Wallet does not support a capability that was not marked as optional." } = {}){
        super(5700, e), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 5700
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.UnsupportedNonOptionalCapabilityError"
        });
    }
}
Object.defineProperty(b, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5700
});
class s extends u {
    constructor({ message: e = "This Wallet does not support the requested chain ID." } = {}){
        super(5710, e), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 5710
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.UnsupportedChainIdError"
        });
    }
}
Object.defineProperty(s, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5710
});
class f extends u {
    constructor({ message: e = "There is already a bundle submitted with this ID." } = {}){
        super(5720, e), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 5720
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.DuplicateIdError"
        });
    }
}
Object.defineProperty(f, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5720
});
class p extends u {
    constructor({ message: e = "This bundle id is unknown / has not been submitted." } = {}){
        super(5730, e), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 5730
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.UnknownBundleIdError"
        });
    }
}
Object.defineProperty(p, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5730
});
class h extends u {
    constructor({ message: e = "The call bundle is too large for the Wallet to process." } = {}){
        super(5740, e), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 5740
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.BundleTooLargeError"
        });
    }
}
Object.defineProperty(h, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5740
});
class m extends u {
    constructor({ message: e = "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade." } = {}){
        super(5750, e), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 5750
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.AtomicReadyWalletRejectedUpgradeError"
        });
    }
}
Object.defineProperty(m, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5750
});
class w extends u {
    constructor({ message: e = "The wallet does not support atomic execution but the request requires it." } = {}){
        super(5760, e), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 5760
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.AtomicityNotSupportedError"
        });
    }
}
Object.defineProperty(w, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5760
});
function q(r, e = {}) {
    const { includeEvents: t = !0 } = e;
    if (!r) throw new E();
    return {
        ...t ? {
            on: r.on?.bind(r),
            removeListener: r.removeListener?.bind(r)
        } : {},
        async request (v) {
            try {
                const o = await r.request(v);
                return o && typeof o == "object" && "jsonrpc" in o ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web69$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(o) : o;
            } catch (o) {
                throw O(o);
            }
        }
    };
}
function O(r) {
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web69$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseError"])(r);
    if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web69$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalError"]) {
        if (!e.data) return e;
        const { code: t } = e.data;
        if (t === c.code) return new c(e);
        if (t === l.code) return new l(e);
        if (t === n.code) return new n(e);
        if (t === a.code) return new a(e);
        if (t === i.code) return new i(e);
        if (t === d.code) return new d(e);
        if (t === m.code) return new m(e);
        if (t === w.code) return new w(e);
        if (t === h.code) return new h(e);
        if (t === p.code) return new p(e);
        if (t === f.code) return new f(e);
        if (t === s.code) return new s(e);
        if (t === b.code) return new b(e);
    }
    return e;
}
class E extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web68$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super("`provider` is undefined."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.IsUndefinedError"
        });
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EIP1193ProviderError",
    ()=>o,
    "RPCRequestError",
    ()=>c,
    "STANDARD_ERROR_CODES",
    ()=>r,
    "validateRequest",
    ()=>v,
    "validateUserConnected",
    ()=>s,
    "validateUserHasEvmSmartAccount",
    ()=>y,
    "validateUserOwnsAddress",
    ()=>f,
    "validateUserOwnsEOA",
    ()=>A,
    "validateUserOwnsSmartAccount",
    ()=>_
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
;
;
;
;
const r = {
    rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901,
        unsupportedChain: 4902
    }
};
class o extends Error {
    /**
   * The error code from EIP1193ErrorCode enum.
   */ code;
    /**
   * Creates a new EIP-1193 Provider error.
   *
   * @param code - The error code from EIP1193ErrorCode enum.
   * @param message - The error message.
   */ constructor(t, n){
        super(n), this.code = t;
    }
}
class c extends Error {
    /**
   * The error code from RPCErrorCode type.
   */ code;
    /**
   * Creates a new RPC Invalid Params error.
   *
   * @param code - The error code from RPCErrorCode type.
   * @param message - The error message.
   */ constructor(t, n){
        super(n), this.code = t;
    }
}
const h = /* @__PURE__ */ new Set([
    "eth_accounts",
    "eth_requestAccounts",
    "personal_sign",
    "eth_sendTransaction",
    "eth_signTypedData_v4",
    "eth_chainId",
    "eth_sign",
    "wallet_disconnect",
    "wallet_switchEthereumChain",
    "wallet_sendCalls",
    "wallet_getCallsStatus",
    "wallet_getCapabilities"
]);
function v(e, { chains: t }) {
    const { method: n, params: a } = e;
    if (typeof n != "string" || n.length === 0) throw new c(r.rpc.invalidParams, "'method' must be a non-empty string.");
    const i = (a ?? [])[0]?.chainId;
    if (typeof i == "string" && !t.some((d)=>d.id === Number.parseInt(i, 16))) throw new o(r.provider.unsupportedChain, `Chain ${i} not supported - make sure the provider is configured with the correct chains.`);
    if (a !== void 0 && !Array.isArray(a)) throw new c(r.rpc.invalidParams, "'params' must be an array if provided.");
    if (!h.has(n)) throw new o(r.provider.unsupportedMethod, `Method ${e.method} not supported`);
}
async function s() {
    const e = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    if (!e) throw new o(r.provider.unauthorized, "User not connected");
    return e;
}
async function f(e) {
    const t = await s();
    if (!t.evmAccounts?.includes(e) && !t.evmSmartAccounts?.includes(e)) throw new o(r.provider.unauthorized, "Address not owned by user");
    return t;
}
async function A(e) {
    const t = await s();
    if (!t.evmAccounts?.includes(e)) throw new o(r.provider.unauthorized, "EOA not owned by user");
    return t;
}
async function _(e) {
    const t = await s();
    if (!t.evmSmartAccounts?.includes(e)) throw new o(r.provider.unauthorized, "Smart account not owned by user");
    return t;
}
async function y() {
    const e = await s();
    if (!e.evmSmartAccountObjects?.[0]) throw new o(r.provider.unauthorized, "No EVM smart accounts available");
    return e;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web118.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleAccounts",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
;
async function s() {
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])())?.evmAccountObjects?.map((e)=>e.address) || [];
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web119.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleEthSign",
    ()=>h
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
;
;
async function h(t) {
    const [n, e] = t;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserOwnsEOA"])(e);
    try {
        const { signature: r } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEvmHash"])({
            evmAccount: e,
            hash: n
        });
        return r;
    } catch (r) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIP1193ProviderError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].provider.userRejectedRequest, r instanceof Error ? r.message : "Signing failed");
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web120.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleGetCallsStatus",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
;
async function a(o, e) {
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIP1193ProviderError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].provider.unsupportedMethod, "wallet_getCallsStatus is not supported with EOAs");
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web121.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleGetCapabilities",
    ()=>e
]);
async function e() {
    return {};
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web122.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handlePersonalSign",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/viem/_esm/utils/signature/hashMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
;
;
;
async function u(r) {
    const [o, t] = r;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserOwnsAddress"])(t);
    try {
        const { signature: e } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEvmHash"])({
            evmAccount: t,
            hash: d(o)
        });
        return e;
    } catch (e) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIP1193ProviderError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].provider.userRejectedRequest, e instanceof Error ? e.message : "Signing failed");
    }
}
function d(r) {
    return typeof r == "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])({
        raw: r
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(r);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web177.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pad",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web167$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web167.js [app-client] (ecmascript)");
;
function o(r, i = {}) {
    const { dir: n, size: e = 32 } = i;
    if (e === 0) return r;
    const t = r.replace("0x", "");
    if (t.length > e * 2) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web167$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SizeExceedsPaddingSizeError"]({
        size: Math.ceil(t.length / 2),
        targetSize: e,
        type: "Hex"
    });
    return `0x${t[n === "right" ? "padEnd" : "padStart"](e * 2, "0")}`;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web167.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntegerOutOfRangeError",
    ()=>d,
    "SizeExceedsPaddingSizeError",
    ()=>p,
    "fromNumber",
    ()=>m,
    "padLeft",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web68$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web68.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web177$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web177.js [app-client] (ecmascript)");
;
;
function m(t, i = {}) {
    const { signed: r, size: e } = i, o = BigInt(t);
    let n;
    e ? r ? n = (1n << BigInt(e) * 8n - 1n) - 1n : n = 2n ** (BigInt(e) * 8n) - 1n : typeof t == "number" && (n = BigInt(Number.MAX_SAFE_INTEGER));
    const u = typeof n == "bigint" && r ? -n - 1n : 0;
    if (n && o > n || o < u) {
        const s = typeof t == "bigint" ? "n" : "";
        throw new d({
            max: n ? `${n}${s}` : void 0,
            min: `${u}${s}`,
            signed: r,
            size: e,
            value: `${t}${s}`
        });
    }
    const a = `0x${(r && o < 0 ? (1n << BigInt(e * 8)) + BigInt(o) : o).toString(16)}`;
    return e ? c(a, e) : a;
}
function c(t, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web177$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(t, {
        dir: "left",
        size: i
    });
}
class d extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web68$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ max: i, min: r, signed: e, size: o, value: n }){
        super(`Number \`${n}\` is not in safe${o ? ` ${o * 8}-bit` : ""}${e ? " signed" : " unsigned"} integer range ${i ? `(\`${r}\` to \`${i}\`)` : `(above \`${r}\`)`}`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.IntegerOutOfRangeError"
        });
    }
}
class p extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web68$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ size: i, targetSize: r, type: e }){
        super(`${e.charAt(0).toUpperCase()}${e.slice(1).toLowerCase()} size (\`${i}\`) exceeds padding size (\`${r}\`).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SizeExceedsPaddingSizeError"
        });
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web123.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleRequestAccounts",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web167$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web167.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
;
;
async function s(e, t) {
    const n = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserConnected"])();
    return e.emit("connect", {
        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web167$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"])(t.getState().chainId)
    }), n.evmAccountObjects?.map((c)=>c.address) || [];
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web124.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleSendCalls",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
;
async function n(e, t) {
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIP1193ProviderError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].provider.unsupportedMethod, "wallet_sendCalls is not supported with EOAs");
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web125.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleSendTransaction",
    ()=>E
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/viem/_esm/clients/createWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web43.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
;
;
;
;
async function E(e, d, m) {
    const [a] = e;
    if (!a || typeof a != "object") throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RPCRequestError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].rpc.invalidParams, "Transaction parameter must be an object");
    if (!a.to) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RPCRequestError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].rpc.invalidParams, "Transaction must include 'to' field");
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserOwnsEOA"])(a.from);
    const o = d.getState(), r = a.chainId ? Number(a.chainId) : o.chainId;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChainIdSupportedForCDPSends"])(r)) try {
        const { transactionHash: n } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendEvmTransaction"])({
            evmAccount: a.from,
            transaction: {
                ...c(a),
                chainId: r
            },
            network: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransactionChainIdToNameMapping"][r]
        });
        return n;
    } catch (n) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RPCRequestError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].rpc.transactionRejected, n instanceof Error ? n.message : "Transaction failed");
    }
    else try {
        const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletClient"])({
            // Safe as we check before calling this handler that chainId is configured
            chain: o.chains.find((s)=>s.id === r),
            transport: m[r],
            account: a.from
        }), p = o.chains.find((s)=>s.id === r), h = await n.prepareTransactionRequest({
            ...c(a),
            chain: p
        }), { signedTransaction: f } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEvmTransaction"])({
            evmAccount: a.from,
            transaction: {
                ...h,
                type: "eip1559"
            }
        });
        return await n.sendRawTransaction({
            serializedTransaction: f
        });
    } catch (n) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RPCRequestError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].rpc.transactionRejected, n instanceof Error ? n.message : "Transaction failed");
    }
}
function c(e) {
    return {
        to: e.to,
        data: e.data,
        value: e.value ? BigInt(e.value) : void 0,
        nonce: e.nonce ? Number(e.nonce) : void 0,
        gas: e.gas ? BigInt(e.gas) : void 0,
        maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
        type: "eip1559"
    };
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web126.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleSignTypedData",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
;
;
async function p(t) {
    const [r, a] = t;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserOwnsEOA"])(r);
    try {
        const { signature: e } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEvmTypedData"])({
            evmAccount: r,
            typedData: JSON.parse(a)
        });
        return e;
    } catch (e) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIP1193ProviderError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].provider.userRejectedRequest, e instanceof Error ? e.message : "Signing failed");
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web127.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleChainId",
    ()=>a
]);
async function a(n) {
    return `0x${n.getState().chainId.toString(16)}`;
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web128.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleDisconnect",
    ()=>i
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
;
async function i() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])() && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])();
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web129.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleSwitchEthereumChain",
    ()=>a
]);
function a(t, e) {
    const n = Number.parseInt(t[0].chainId, 16);
    e.getState().setChainId(n);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web70.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEOAHandlers",
    ()=>D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web118$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web118.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web119$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web119.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web120$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web120.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web121$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web121.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web122$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web122.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web123$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web123.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web124$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web124.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web125$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web125.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web126$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web126.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web127$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web127.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web128$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web128.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web129$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web129.js [app-client] (ecmascript)");
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
function D() {
    return {
        eth_accounts: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web118$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleAccounts"],
        eth_requestAccounts: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web123$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleRequestAccounts"],
        personal_sign: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web122$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handlePersonalSign"],
        eth_sendTransaction: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web125$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSendTransaction"],
        eth_signTypedData_v4: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web126$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSignTypedData"],
        wallet_disconnect: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web128$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleDisconnect"],
        wallet_switchEthereumChain: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web129$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSwitchEthereumChain"],
        eth_sign: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web119$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleEthSign"],
        eth_chainId: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web127$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleChainId"],
        wallet_sendCalls: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web124$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSendCalls"],
        wallet_getCallsStatus: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web120$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleGetCallsStatus"],
        wallet_getCapabilities: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web121$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleGetCapabilities"]
    };
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web130.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleAccounts",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
;
async function s() {
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])())?.evmSmartAccountObjects?.map((r)=>r.address) || [];
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web131.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleEthSign",
    ()=>h
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web51$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web51.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
;
;
async function h(e, n) {
    const [a, t] = e, o = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserOwnsSmartAccount"])(t);
    try {
        const { signature: r } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web51$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signAndWrapTypedDataForSmartAccount"])({
            smartAccount: t,
            ownerAddress: o.evmAccounts[0],
            hash: a,
            chainId: n.getState().chainId
        });
        return r;
    } catch (r) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIP1193ProviderError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].provider.userRejectedRequest, r instanceof Error ? r.message : "Signing failed");
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web132.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleGetCallsStatus",
    ()=>I
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web43.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
;
;
;
async function I(t, s) {
    const i = t[0], c = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserHasEvmSmartAccount"])()).evmSmartAccountObjects?.[0]?.address, a = s.getState().chainId;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChainIdSupportedForCDPUserOps"])(a) || !__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userOperationChainIdToNameMapping"][a]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RPCRequestError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].rpc.invalidParams, "Chain ID is not supported for user operations");
    try {
        const e = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserOperation"])({
            userOperationHash: i,
            evmSmartAccount: c,
            network: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userOperationChainIdToNameMapping"][a]
        });
        return l(e);
    } catch (e) {
        throw console.log("Failed to get user operation status", e), new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RPCRequestError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].rpc.internal, "Failed to get user operation status");
    }
}
function l(t) {
    return {
        atomic: !0,
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userOperationNameToChainIdMapping"][t.network] ?? 0,
        receipts: t.receipts?.map((s)=>({
                transactionHash: s.transactionHash,
                blockHash: s.blockHash,
                blockNumber: BigInt(s.blockNumber ?? 0),
                gasUsed: BigInt(s.gasUsed ?? 0),
                logs: [],
                status: ""
            })),
        id: t.userOpHash,
        status: h(t.status),
        version: "1"
    };
}
function h(t) {
    switch(t){
        case "dropped":
        case "failed":
            return 400;
        case "complete":
            return 200;
        default:
            return 100;
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web133.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleGetCapabilities",
    ()=>h
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web43.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
async function h() {
    return !(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserConnected"])()).evmSmartAccounts?.length ? {} : Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userOperationChainIdToNameMapping"]).reduce((t, e)=>{
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(Number(e));
        return t[r] = {
            atomic: {
                status: "supported"
            },
            paymasterService: {
                supported: !0
            },
            dataSuffix: {
                supported: !0
            }
        }, t;
    }, {});
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web134.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handlePersonalSign",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/viem/_esm/utils/signature/hashMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web51$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web51.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
;
;
;
async function p(r, a) {
    const [o, e] = r, s = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserOwnsSmartAccount"])(e);
    try {
        const { signature: t } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web51$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signAndWrapTypedDataForSmartAccount"])({
            smartAccount: e,
            ownerAddress: s.evmAccounts[0],
            hash: g(o),
            chainId: a.getState().chainId
        });
        return t;
    } catch (t) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIP1193ProviderError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].provider.userRejectedRequest, t instanceof Error ? t.message : "Signing failed");
    }
}
function g(r) {
    return typeof r == "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])({
        raw: r
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(r);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web135.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleRequestAccounts",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web167$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web167.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
;
;
async function s(t, e) {
    const n = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserConnected"])();
    return t.emit("connect", {
        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web167$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNumber"])(e.getState().chainId)
    }), n.evmSmartAccountObjects?.map((c)=>c.address) || [];
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web136.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleSendCalls",
    ()=>I
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web43.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
;
;
;
async function I(r, t) {
    const [{ calls: i, capabilities: e }] = r, c = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserHasEvmSmartAccount"])()).evmSmartAccounts[0], s = t.getState().chainId;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChainIdSupportedForCDPUserOps"])(s)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RPCRequestError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].rpc.invalidParams, "Chain ID is not supported for user operations");
    const u = e?.dataSuffix?.value, p = e?.paymasterService?.url;
    try {
        return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendUserOperation"])({
            evmSmartAccount: c,
            calls: v(i),
            network: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web43$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userOperationChainIdToNameMapping"][s],
            paymasterUrl: p,
            dataSuffix: u
        })).userOperationHash;
    } catch (a) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RPCRequestError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].rpc.transactionRejected, a instanceof Error ? a.message : "User operation failed");
    }
}
function v(r) {
    return r.map((t)=>({
            to: t.to,
            data: t.data,
            value: t.value ? BigInt(t.value) : void 0
        }));
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web137.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleSendTransaction",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
;
async function a(n, o, s) {
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIP1193ProviderError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].provider.unsupportedMethod, "eth_sendTransaction is not supported with smart accounts. Use wallet_sendCalls instead.");
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web138.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleSignTypedData",
    ()=>A
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/viem/_esm/utils/signature/hashTypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web51$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web51.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
;
;
;
async function A(a, e) {
    const [t, n] = a, o = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserOwnsSmartAccount"])(t);
    try {
        const { signature: r } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web51$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signAndWrapTypedDataForSmartAccount"])({
            smartAccount: t,
            ownerAddress: o.evmAccounts[0],
            hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashTypedData"])(JSON.parse(n)),
            chainId: e.getState().chainId
        });
        return r;
    } catch (r) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIP1193ProviderError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].provider.userRejectedRequest, r instanceof Error ? r.message : "Signing failed");
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web71.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSmartAccountHandlers",
    ()=>E
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web127$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web127.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web128$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web128.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web129$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web129.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web130$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web130.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web131$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web131.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web132$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web132.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web133$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web133.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web134$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web134.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web135$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web135.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web136$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web136.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web137$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web137.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web138$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web138.js [app-client] (ecmascript)");
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
function E() {
    return {
        eth_accounts: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web130$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleAccounts"],
        eth_requestAccounts: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web135$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleRequestAccounts"],
        personal_sign: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web134$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handlePersonalSign"],
        eth_sendTransaction: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web137$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSendTransaction"],
        eth_signTypedData_v4: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web138$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSignTypedData"],
        wallet_disconnect: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web128$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleDisconnect"],
        wallet_switchEthereumChain: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web129$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSwitchEthereumChain"],
        eth_sign: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web131$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleEthSign"],
        eth_chainId: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web127$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleChainId"],
        wallet_sendCalls: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web136$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSendCalls"],
        wallet_getCallsStatus: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web132$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleGetCallsStatus"],
        wallet_getCapabilities: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web133$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleGetCapabilities"]
    };
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web56.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProvider",
    ()=>v
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web66$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web66.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web70$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web70.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web71$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web71.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
function v(c, a, r) {
    a.subscribe((e)=>e.chainId, (e, t)=>{
        e !== t && c.emit("chainChanged", e);
    }), a.subscribe((e)=>e.user, (e, t)=>{
        if (!(e?.userId === t?.userId && e?.evmAccounts?.length === t?.evmAccounts?.length)) {
            if (!e && t) {
                c.emit("disconnect", new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web66$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisconnectedError"]());
                return;
            }
            if (e && e.evmAccounts?.length && (!t || t.evmAccounts?.length === 0)) {
                const s = a.getState().chainId;
                c.emit("connect", {
                    chainId: s
                });
                return;
            }
        }
    });
    const { chainId: i, setChainId: o } = a.getState(), u = i || r.chains[0].id;
    return i || o(u), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web66$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])({
        request: async (e)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateRequest"])(e, r);
            const t = e, s = a.getState().user, n = !!(s?.evmSmartAccounts && s.evmSmartAccounts.length > 0) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web71$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSmartAccountHandlers"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web70$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEOAHandlers"])();
            switch(t.method){
                case "eth_accounts":
                    return n.eth_accounts();
                case "eth_requestAccounts":
                    return n.eth_requestAccounts(c, a);
                case "personal_sign":
                    return n.personal_sign(t.params, a);
                case "eth_sendTransaction":
                    return n.eth_sendTransaction(t.params, a, r.transports);
                case "wallet_disconnect":
                    return n.wallet_disconnect();
                case "wallet_switchEthereumChain":
                    return n.wallet_switchEthereumChain(t.params, a);
                case "eth_sign":
                    return n.eth_sign(t.params, a);
                case "eth_signTypedData_v4":
                    return n.eth_signTypedData_v4(t.params, a);
                case "eth_chainId":
                    return n.eth_chainId(a);
                case "wallet_sendCalls":
                    return n.wallet_sendCalls(t.params, a);
                case "wallet_getCallsStatus":
                    return n.wallet_getCallsStatus(t.params, a);
                case "wallet_getCapabilities":
                    return n.wallet_getCapabilities();
                // Catch-all for any unknown method
                default:
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIP1193ProviderError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_ERROR_CODES"].provider.unsupportedMethod, `Method ${t.method} not supported`);
            }
        },
        // Event emitter methods - only the ones required by the interface
        on: c.on.bind(c),
        removeListener: c.removeListener.bind(c)
    });
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web31.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCDPEmbeddedWallet",
    ()=>U
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web53$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web53.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web54$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web54.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web55$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web55.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web56$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web56.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function U(e) {
    if (e.chains.length === 0) throw new Error("At least one chain must be configured");
    if (!e.transports) throw new Error("Transports must be provided");
    const o = e.chains, i = e.transports;
    if (o.length === 0) throw new Error("No chains found in configuration");
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web54$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"](), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformStorage"])(), a = {
        getItem: (t)=>n.getItem(t),
        setItem: (t, r)=>n.setItem(t, r),
        removeItem: (t)=>n.removeItem(t)
    }, s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web53$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeWithSelector"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web53$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((t)=>({
            chainId: o[0].id,
            setChainId: (r)=>t({
                    chainId: r
                }),
            chains: o,
            user: null,
            setUser: (r)=>t({
                    user: r
                })
        }), {
        name: "cdp-provider-store",
        storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web53$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>a)
    })));
    return s.persist.rehydrate(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChange"])((t)=>{
        s.getState().setUser(t);
    }), {
        provider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web56$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProvider"])(m, s, {
            chains: o,
            transports: i
        })
    };
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web7.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web8.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web9.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web10$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web10.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web11$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web11.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index8.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web12$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web12.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web13.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web14$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web14.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web15$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web15.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web16$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web16.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web17$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web17.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web18$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web18.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web19$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web19.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web20$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web20.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web21$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web21.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web22.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web23.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web24$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web24.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web25$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web25.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web26$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web26.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web27$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web27.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web28$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web28.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web29$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web29.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web30$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web30.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web31$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web31.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-core/dist/esm/index.web32.js [app-client] (ecmascript)");
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
__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].registerPackageVersion("core", __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPlatformServices"])({
    crypto: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webCrypto"],
    storage: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webStorage"],
    oauth: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$core$2f$dist$2f$esm$2f$index$2e$web6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webOAuth"]
});
;
}),
]);

//# sourceMappingURL=9f313_%40coinbase_cdp-core_dist_esm_2ca5c1ab._.js.map