(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index24.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index13.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index21.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index14.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__require",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index21$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index21.js [app-client] (ecmascript)");
;
var h;
function c() {
    return h ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index21$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports : (h = 1, function() {
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
        __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index21$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports = u;
    }(), __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index21$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index15.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index16.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index12.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__require",
    ()=>G
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index13.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index14$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index14.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index15$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index15.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index16$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index16.js [app-client] (ecmascript)");
;
;
;
;
var x;
function G() {
    return x ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports : (x = 1, function() {
        var v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index14$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])(), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index15$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])().utf8, B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index16$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])(), F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index15$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])().bin, d = function(o, f) {
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
        }, d._blocksize = 16, d._digestsize = 16, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports = function(o, f) {
            if (o == null) throw new Error("Illegal argument " + o);
            var u = v.wordsToBytes(d(o, f));
            return f && f.asBytes ? u : f && f.asString ? F.bytesToString(u) : v.bytesToHex(u);
        };
    }(), __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index10.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index24$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index24.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index12$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index12.js [app-client] (ecmascript)");
;
;
var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index12$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])();
const a = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index24$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultExportFromCjs"])(t);
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index11.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index10$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index10.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index11$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index11.js [app-client] (ecmascript)");
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
                framework: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index11$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFramework"])(),
                isLocalHost: u(),
                isUsingMocks: n.isUsingMocks,
                package_versions: n.versionRegistry,
                ...t
            }
        }
    ], a = JSON.stringify(r), d = e.toString(), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index10$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(a + d), f = {
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index18.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index22.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__exports",
    ()=>r
]);
var r = {};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index19.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__require",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index22.js [app-client] (ecmascript)");
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
    if ($) return __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"];
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].Children = {
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
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].Component = _, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].Fragment = M, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].Profiler = I, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].PureComponent = y, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].StrictMode = Y, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].Suspense = x, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(t) {
            return i.H.useMemoCache(t);
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].cache = function(t) {
        return function() {
            return t.apply(null, arguments);
        };
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].cloneElement = function(t, e, n) {
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
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].createContext = function(t) {
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
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].createElement = function(t, e, n) {
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
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].createRef = function() {
        return {
            current: null
        };
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].forwardRef = function(t) {
        return {
            $$typeof: k,
            render: t
        };
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].isValidElement = T, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].lazy = function(t) {
        return {
            $$typeof: d,
            _payload: {
                _status: -1,
                _result: t
            },
            _init: K
        };
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].memo = function(t, e) {
        return {
            $$typeof: b,
            type: t,
            compare: e === void 0 ? null : e
        };
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].startTransition = function(t) {
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
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].unstable_useCacheRefresh = function() {
        return i.H.useCacheRefresh();
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].use = function(t) {
        return i.H.use(t);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useActionState = function(t, e, n) {
        return i.H.useActionState(t, e, n);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useCallback = function(t, e) {
        return i.H.useCallback(t, e);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useContext = function(t) {
        return i.H.useContext(t);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useDebugValue = function() {}, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useDeferredValue = function(t, e) {
        return i.H.useDeferredValue(t, e);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useEffect = function(t, e, n) {
        var r = i.H;
        if (typeof n == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return r.useEffect(t, e);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useId = function() {
        return i.H.useId();
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useImperativeHandle = function(t, e, n) {
        return i.H.useImperativeHandle(t, e, n);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useInsertionEffect = function(t, e) {
        return i.H.useInsertionEffect(t, e);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useLayoutEffect = function(t, e) {
        return i.H.useLayoutEffect(t, e);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useMemo = function(t, e) {
        return i.H.useMemo(t, e);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useOptimistic = function(t, e) {
        return i.H.useOptimistic(t, e);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useReducer = function(t, e, n) {
        return i.H.useReducer(t, e, n);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useRef = function(t) {
        return i.H.useRef(t);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useState = function(t) {
        return i.H.useState(t);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useSyncExternalStore = function(t, e, n) {
        return i.H.useSyncExternalStore(t, e, n);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].useTransition = function() {
        return i.H.useTransition();
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"].version = "19.1.2", __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index22$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__exports"];
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index23.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index20.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__require",
    ()=>De
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index23.js [app-client] (ecmascript)");
;
/**
* @license React
* react.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports;
var _e;
function De() {
    return _e ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports : (_e = 1, function(P, u) {
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
    }(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"], __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports), __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index17.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__require",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index18$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index18.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index19$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index19.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index20$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index20.js [app-client] (ecmascript)");
;
;
;
var r;
function s() {
    return r ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index18$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports : (r = 1, ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index18$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index20$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])(), __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index18$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__module"].exports);
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index3.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index17$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index17.js [app-client] (ecmascript)");
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index17$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])();
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index4.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERSION",
    ()=>o
]);
const o = "0.0.73";
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index9.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERROR_DOCS_PAGE_URL",
    ()=>o
]);
const o = "https://docs.cdp.coinbase.com/api-v2/docs/errors";
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index8.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APIError",
    ()=>a,
    "HttpErrorType",
    ()=>u,
    "UnknownApiError",
    ()=>d,
    "UnknownError",
    ()=>c,
    "isOpenAPIError",
    ()=>p
]);
const u = {
    unexpected_error: "unexpected_error",
    unauthorized: "unauthorized",
    not_found: "not_found",
    bad_gateway: "bad_gateway",
    service_unavailable: "service_unavailable",
    unknown: "unknown"
};
class a extends Error {
    statusCode;
    errorType;
    errorMessage;
    correlationId;
    errorLink;
    /**
   * Constructor for the APIError class
   *
   * @param statusCode - The HTTP status code
   * @param errorType - The type of error
   * @param errorMessage - The error message
   * @param correlationId - The correlation ID
   * @param errorLink - URL to documentation about this error
   * @param cause - The cause of the error
   */ constructor(e, o, t, n, s, i){
        super(t, {
            cause: i
        }), this.name = "APIError", this.statusCode = e, this.errorType = o, this.errorMessage = t, n !== void 0 && (this.correlationId = n), s !== void 0 && (this.errorLink = s);
    }
    /**
   * Convert the error to a JSON object, excluding undefined properties
   *
   * @returns The error as a JSON object
   */ toJSON() {
        return {
            name: this.name,
            statusCode: this.statusCode,
            errorType: this.errorType,
            errorMessage: this.errorMessage,
            ...this.correlationId && {
                correlationId: this.correlationId
            },
            ...this.errorLink && {
                errorLink: this.errorLink
            }
        };
    }
}
class d extends a {
    /**
   * Constructor for the UnknownApiError class
   *
   * @param errorType - The type of error
   * @param errorMessage - The error message
   * @param cause - The cause of the error
   */ constructor(e, o, t){
        super(0, e, o, void 0, void 0, t), this.name = "UnknownApiError";
    }
}
class c extends Error {
    /**
   * Constructor for the UnknownError class
   *
   * @param message - The error message
   * @param cause - The cause of the error
   */ constructor(e, o){
        super(e, {
            cause: o
        }), this.name = "UnknownError";
    }
}
function p(r) {
    return r !== null && typeof r == "object" && "errorType" in r && typeof r.errorType == "string" && "errorMessage" in r && typeof r.errorMessage == "string";
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index7.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cdpApiClient",
    ()=>I,
    "configureCdpApiClient",
    ()=>$,
    "setAuthManager",
    ()=>x
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index9.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index8.js [app-client] (ecmascript)");
;
;
;
const h = ()=>typeof window < "u" && typeof document < "u";
let a = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "https://api.cdp.coinbase.com/platform"
}), o = null;
const $ = (r)=>{
    a = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
        baseURL: r.basePath || "https://api.cdp.coinbase.com/platform",
        // Only enable cookies in browser environments where they're supported
        withCredentials: h()
    }), a.interceptors.request.use({
        "$.use": async (e)=>{
            const t = b(e), s = l(e);
            if (!o || p(s.pathname) || w(s.pathname) && !await o.isSignedIn() || !q(s.pathname)) return e;
            const n = await o.getXWalletAuth({
                requestMethod: t,
                requestHost: s.host,
                requestPath: s.pathname,
                requestData: e.data
            });
            return n && (e.headers["X-Wallet-Auth"] = n), e;
        }
    }["$.use"]), a.interceptors.request.use({
        "$.use": async (e)=>{
            const t = l(e);
            if (!o || p(t.pathname) || w(t.pathname) && !await o.isSignedIn()) return e;
            const s = await o.getToken();
            return s && s !== "" && (e.headers.Authorization = `Bearer ${s}`), e;
        }
    }["$.use"]), h() || a.interceptors.request.use({
        "$.use": async (e)=>{
            let t = e.headers["User-Agent"];
            return t = t ? `${t} CDP/reactnative` : "CDP/reactnative", e.headers["User-Agent"] = t, e;
        }
    }["$.use"]), r.refreshTokenStorage && R(r.refreshTokenStorage), r.debugging && (a.interceptors.request.use({
        "$.use": (e)=>(console.log("Request:", e), e)
    }["$.use"]), a.interceptors.response.use({
        "$.use": (e)=>(console.log("Response:", e), e)
    }["$.use"]));
}, x = (r)=>{
    o = r;
}, A = (r, e)=>({
        ...r,
        headers: {
            ...r.headers || {},
            "X-Idempotency-Key": e
        }
    }), I = async (r, e)=>{
    T(r), e && e !== "" && (r = A(r, e));
    try {
        return (await a(r)).data;
    } catch (t) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(t) && !t.response) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnknownApiError"](__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpErrorType"].unknown, t.cause instanceof Error ? t.cause.message : t.message, t.cause);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(t) && t.response) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOpenAPIError"])(t.response.data)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"](t.response.status, t.response.data.errorType, t.response.data.errorMessage, t.response.data.correlationId, t.response.data.errorLink, t.cause);
            {
                const s = t.response.status;
                switch(s){
                    case 401:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"](s, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpErrorType"].unauthorized, "Unauthorized.", void 0, `${__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_DOCS_PAGE_URL"]}#unauthorized`, t.cause);
                    case 404:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"](s, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpErrorType"].not_found, "API not found.", void 0, `${__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_DOCS_PAGE_URL"]}#not_found`, t.cause);
                    case 502:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"](s, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpErrorType"].bad_gateway, "Bad gateway.", void 0, `${__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_DOCS_PAGE_URL"]}`, t.cause);
                    case 503:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"](s, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpErrorType"].service_unavailable, "Service unavailable. Please try again later.", void 0, `${__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_DOCS_PAGE_URL"]}`, t.cause);
                    default:
                        {
                            let n = "";
                            if (t.response.data) try {
                                n = JSON.stringify(t.response.data);
                            } catch  {
                                n = String(t.response.data);
                            }
                            const f = n ? `An unexpected error occurred: ${n}` : "An unexpected error occurred.";
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"](s, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpErrorType"].unexpected_error, f, void 0, `${__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_DOCS_PAGE_URL"]}`, t.cause);
                        }
                }
            }
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnknownError"]("Something went wrong. Please reach out at https://discord.com/channels/1220414409550336183/1271495764580896789 for help.", t instanceof Error ? t : void 0);
    }
}, R = (r)=>{
    a.interceptors.response.use({
        "R.use": async (e)=>{
            try {
                if (U(e)) {
                    const t = e.data?.refreshToken;
                    t && await r.setRefreshToken(t);
                }
            } catch (t) {
                console.warn("Failed to store refresh token:", t);
            }
            return e;
        }
    }["R.use"], {
        "R.use": (e)=>Promise.reject(e)
    }["R.use"]), a.interceptors.request.use({
        "R.use": async (e)=>{
            try {
                if (k(e.url)) {
                    const t = await r.getRefreshToken();
                    t && (e.data = {
                        ...e.data,
                        refreshToken: t
                    });
                }
                P(e.url) && await r.removeRefreshToken();
            } catch (t) {
                console.warn("Failed to retrieve refresh token:", t);
            }
            return e;
        }
    }["R.use"]);
}, P = (r)=>r ? /^\/v2\/embedded-wallet-api\/projects\/[^/]+\/auth\/logout$/.test(r) : !1, k = (r)=>r ? /^\/v2\/embedded-wallet-api\/projects\/[^/]+\/auth\/(refresh|logout)$/.test(r) : !1, U = (r)=>{
    const e = r.config.url;
    return e ? /^\/v2\/embedded-wallet-api\/projects\/[^/]+\/auth\/(verify\/(email|sms|oauth\/.*)|refresh)$/.test(e) : !1;
}, T = (r)=>{
    if (!a.getUri() || a.getUri() === "") throw new Error("CDP client URI not configured. Call configure() first.");
    if (!r.url || r.url === "") throw new Error("AxiosRequestConfig URL is empty. This should never happen.");
    if (!r.method || r.method === "") throw new Error("AxiosRequestConfig method is empty. This should never happen.");
}, b = (r)=>r.method?.toString().toUpperCase() || "GET", l = (r)=>{
    if (!r.url) throw new Error("URL is required for authentication");
    const e = a.getUri() + r.url;
    return new URL(e);
}, p = (r)=>/^\/platform\/v2\/embedded-wallet-api\/projects\/[^/]+\/auth\/(refresh|logout)$/.test(r), q = (r)=>!/^\/platform\/v2\/embedded-wallet-api\/projects\/[^/]+\/auth\/custom\/authenticate$/.test(r), w = (r)=>{
    const e = /^\/platform\/v2\/embedded-wallet-api\/projects\/[^/]+\/auth\/(init)$/, t = /^\/platform\/v2\/embedded-wallet-api\/projects\/[^/]+\/auth\/verify\//;
    return e.test(r) || t.test(r);
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authenticateUserWithCustomAuth",
    ()=>m,
    "createEndUserEvmAccount",
    ()=>T,
    "createEndUserEvmSmartAccount",
    ()=>w,
    "createEndUserSolanaAccount",
    ()=>f,
    "createSpendPermissionWithEndUserAccount",
    ()=>C,
    "exportEndUserEvmAccount",
    ()=>E,
    "exportEndUserSolanaAccount",
    ()=>g,
    "getAuthenticatedEndUser",
    ()=>h,
    "getUserOperationWithEndUserAccount",
    ()=>P,
    "initiateAuthentication",
    ()=>d,
    "initiateMfaEnrollment",
    ()=>G,
    "initiateMfaVerification",
    ()=>V,
    "listSpendPermissionsWithEndUserAccount",
    ()=>A,
    "logOutEndUser",
    ()=>u,
    "recordMfaEnrollmentPrompted",
    ()=>q,
    "refreshAccessToken",
    ()=>l,
    "registerTemporaryWalletSecret",
    ()=>$,
    "revokeSpendPermissionWithEndUserAccount",
    ()=>U,
    "sendEvmTransactionWithEndUserAccount",
    ()=>S,
    "sendSolanaTransactionWithEndUserAccount",
    ()=>k,
    "sendUserOperationWithEndUserAccount",
    ()=>O,
    "signEvmHashWithEndUserAccount",
    ()=>v,
    "signEvmMessageWithEndUserAccount",
    ()=>b,
    "signEvmTransactionWithEndUserAccount",
    ()=>j,
    "signEvmTypedDataWithEndUserAccount",
    ()=>y,
    "signSolanaHashWithEndUserAccount",
    ()=>W,
    "signSolanaMessageWithEndUserAccount",
    ()=>M,
    "signSolanaTransactionWithEndUserAccount",
    ()=>x,
    "submitMfaEnrollment",
    ()=>H,
    "submitMfaVerification",
    ()=>D,
    "verifyEmailAuthentication",
    ()=>i,
    "verifyOAuthCode",
    ()=>c,
    "verifySmsAuthentication",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index7.js [app-client] (ecmascript)");
;
const d = (e, t, n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/auth/init`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: t
    }, n), i = (e, t, n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/auth/verify/email`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: t
    }, n), p = (e, t, n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/auth/verify/sms`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: t
    }, n), c = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/auth/verify/oauth/${t}`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), l = (e, t, n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/auth/refresh`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: t
    }, n), u = (e, t, n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/auth/logout`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: t
    }, n), m = (e, t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/auth/custom/authenticate`,
        method: "POST"
    }, t), h = (e, t, n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}`,
        method: "GET"
    }, n), $ = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/wallet-secrets`,
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), T = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/evm`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), v = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/evm/sign`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), j = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/evm/sign/transaction`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), S = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/evm/send/transaction`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), b = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/evm/sign/message`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), y = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/evm/sign/typed-data`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), E = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/evm/export`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), w = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/evm/smart-accounts`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), P = (e, t, n, a, r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/evm/smart-accounts/${n}/user-operations/${a}`,
        method: "GET"
    }, r), O = (e, t, n, a, r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/evm/smart-accounts/${n}/send`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: a
    }, r), C = (e, t, n, a, r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/evm/smart-accounts/${n}/spend-permissions`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: a
    }, r), A = (e, t, n, a, r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/evm/smart-accounts/${n}/spend-permissions/list`,
        method: "GET",
        params: a
    }, r), U = (e, t, n, a, r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/evm/smart-accounts/${n}/spend-permissions/revoke`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: a
    }, r), f = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/solana`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), g = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/solana/export`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), W = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/solana/sign`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), M = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/solana/sign/message`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), x = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/solana/sign/transaction`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), k = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/solana/send/transaction`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: n
    }, a), G = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/mfa/enroll/${n}/init`,
        method: "POST"
    }, a), H = (e, t, n, a, r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/mfa/enroll/${n}/submit`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: a
    }, r), V = (e, t, n, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/mfa/verify/${n}/init`,
        method: "POST"
    }, a), D = (e, t, n, a, r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/mfa/verify/${n}/submit`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: a
    }, r), q = (e, t, n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cdpApiClient"])({
        url: `/v2/embedded-wallet-api/projects/${e}/end-users/${t}/mfa/prompt`,
        method: "PUT"
    }, n);
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index6.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbiFunctionType",
    ()=>V,
    "AbiInputType",
    ()=>B,
    "AbiStateMutability",
    ()=>Y,
    "AccountType",
    ()=>e,
    "AchDetailsAccountType",
    ()=>la,
    "AddressRiskNetwork",
    ()=>va,
    "AddressRiskRiskLevel",
    ()=>ua,
    "AssetType",
    ()=>n,
    "CapabilityStatus",
    ()=>o,
    "CoolPaymentMethodType",
    ()=>ca,
    "CreateDepositDestinationRequestType",
    ()=>l,
    "CreatePaymentMethodRequestAchType",
    ()=>pa,
    "CreatePaymentMethodRequestFedwireType",
    ()=>ma,
    "CryptoDepositDestinationType",
    ()=>d,
    "CustomerType",
    ()=>i,
    "DepositDestinationType",
    ()=>s,
    "DeveloperJWTAuthenticationType",
    ()=>f,
    "EmailAuthenticationType",
    ()=>T,
    "ErrorType",
    ()=>a,
    "EthValueCriterionOperator",
    ()=>q,
    "EthValueCriterionType",
    ()=>j,
    "EvmAddressCriterionOperator",
    ()=>L,
    "EvmAddressCriterionType",
    ()=>z,
    "EvmDataCriterionType",
    ()=>G,
    "EvmDataParameterConditionListOperator",
    ()=>X,
    "EvmDataParameterConditionOperator",
    ()=>H,
    "EvmMessageCriterionType",
    ()=>ne,
    "EvmNetworkCriterionNetworksItem",
    ()=>$,
    "EvmNetworkCriterionOperator",
    ()=>ee,
    "EvmNetworkCriterionType",
    ()=>Z,
    "EvmSwapsNetwork",
    ()=>I,
    "EvmTypedAddressConditionOperator",
    ()=>_e,
    "EvmTypedNumericalConditionOperator",
    ()=>re,
    "EvmUserOperationNetwork",
    ()=>C,
    "EvmUserOperationStatus",
    ()=>N,
    "InitiateEmailAuthenticationNextStepType",
    ()=>O,
    "InitiateEmailAuthenticationRequestType",
    ()=>k,
    "InitiateSmsAuthenticationNextStepType",
    ()=>R,
    "InitiateSmsAuthenticationRequestType",
    ()=>P,
    "InvitationStatus",
    ()=>S,
    "KnownAbiType",
    ()=>F,
    "KnownIdlType",
    ()=>Ee,
    "LimitPeriod",
    ()=>da,
    "LinkAccountType",
    ()=>t,
    "LinkableEntityRole",
    ()=>A,
    "LinkableEntityType",
    ()=>E,
    "ListEvmTokenBalancesNetwork",
    ()=>U,
    "ListSolanaTokenBalancesNetwork",
    ()=>Xe,
    "MfaMethod",
    ()=>D,
    "MintAddressCriterionOperator",
    ()=>xe,
    "MintAddressCriterionType",
    ()=>be,
    "NetUSDChangeCriterionOperator",
    ()=>W,
    "NetUSDChangeCriterionType",
    ()=>K,
    "Network",
    ()=>c,
    "OAuth2ProviderType",
    ()=>g,
    "OnchainDataResultSchemaColumnsItemType",
    ()=>Ge,
    "OnrampOrderFeeType",
    ()=>oa,
    "OnrampOrderPaymentMethodTypeId",
    ()=>ia,
    "OnrampOrderStatus",
    ()=>_a,
    "OnrampPaymentLinkType",
    ()=>ra,
    "OnrampQuotePaymentMethodTypeId",
    ()=>sa,
    "PermissionCatalogObjectsItemType",
    ()=>M,
    "PermissionSubjectType",
    ()=>b,
    "PermissionVerb",
    ()=>x,
    "PolicyScope",
    ()=>He,
    "PrepareUserOperationRuleAction",
    ()=>Fe,
    "PrepareUserOperationRuleOperation",
    ()=>Ye,
    "ProgramIdCriterionOperator",
    ()=>Oe,
    "ProgramIdCriterionType",
    ()=>Pe,
    "RefreshAccessTokenBodyGrantType",
    ()=>Ta,
    "RequirementErrorCode",
    ()=>r,
    "RequirementField",
    ()=>_,
    "SendEvmTransactionRuleAction",
    ()=>ae,
    "SendEvmTransactionRuleOperation",
    ()=>te,
    "SendEvmTransactionWithEndUserAccountBodyNetwork",
    ()=>ha,
    "SendSolTransactionRuleAction",
    ()=>Ie,
    "SendSolTransactionRuleOperation",
    ()=>Ue,
    "SendSolanaTransactionWithEndUserAccountBodyNetwork",
    ()=>fa,
    "SendUserOperationRuleAction",
    ()=>Ve,
    "SendUserOperationRuleOperation",
    ()=>Be,
    "SignEvmHashRuleAction",
    ()=>ze,
    "SignEvmHashRuleOperation",
    ()=>Le,
    "SignEvmMessageRuleAction",
    ()=>ie,
    "SignEvmMessageRuleOperation",
    ()=>oe,
    "SignEvmTransactionRuleAction",
    ()=>J,
    "SignEvmTransactionRuleOperation",
    ()=>Q,
    "SignEvmTypedDataFieldCriterionType",
    ()=>se,
    "SignEvmTypedDataRuleAction",
    ()=>le,
    "SignEvmTypedDataRuleOperation",
    ()=>pe,
    "SignEvmTypedDataVerifyingContractCriterionOperator",
    ()=>de,
    "SignEvmTypedDataVerifyingContractCriterionType",
    ()=>ce,
    "SignSolMessageRuleAction",
    ()=>je,
    "SignSolMessageRuleOperation",
    ()=>qe,
    "SignSolTransactionRuleAction",
    ()=>Re,
    "SignSolTransactionRuleOperation",
    ()=>Ce,
    "SmsAuthenticationType",
    ()=>h,
    "SolAddressCriterionOperator",
    ()=>ve,
    "SolAddressCriterionType",
    ()=>me,
    "SolDataCriterionType",
    ()=>ke,
    "SolDataParameterConditionListOperator",
    ()=>Se,
    "SolDataParameterConditionOperator",
    ()=>Ae,
    "SolMessageCriterionType",
    ()=>Me,
    "SolNetworkCriterionNetworksItem",
    ()=>we,
    "SolNetworkCriterionOperator",
    ()=>De,
    "SolNetworkCriterionType",
    ()=>Ne,
    "SolValueCriterionOperator",
    ()=>ye,
    "SolValueCriterionType",
    ()=>ue,
    "SpendPermissionNetwork",
    ()=>w,
    "SplAddressCriterionOperator",
    ()=>he,
    "SplAddressCriterionType",
    ()=>Te,
    "SplValueCriterionOperator",
    ()=>ge,
    "SplValueCriterionType",
    ()=>fe,
    "TransferCancellationReason",
    ()=>u,
    "TransferFeeType",
    ()=>m,
    "TransferRequestAmountType",
    ()=>y,
    "TransferReversalReason",
    ()=>v,
    "TransferStatus",
    ()=>p,
    "TransferStatusChangedWebhookEventEventType",
    ()=>ya,
    "X402DiscoveryResourceType",
    ()=>na,
    "X402PaymentPayloadNetwork",
    ()=>Je,
    "X402PaymentPayloadScheme",
    ()=>We,
    "X402PaymentRequirementsNetwork",
    ()=>Ze,
    "X402PaymentRequirementsScheme",
    ()=>Qe,
    "X402SettleErrorReason",
    ()=>ea,
    "X402SupportedPaymentKindNetwork",
    ()=>ta,
    "X402SupportedPaymentKindScheme",
    ()=>aa,
    "X402VerifyInvalidReason",
    ()=>$e,
    "X402Version",
    ()=>Ke
]);
const e = {
    prime: "prime",
    business: "business",
    cdp: "cdp"
}, a = {
    already_exists: "already_exists",
    bad_gateway: "bad_gateway",
    faucet_limit_exceeded: "faucet_limit_exceeded",
    forbidden: "forbidden",
    idempotency_error: "idempotency_error",
    internal_server_error: "internal_server_error",
    invalid_request: "invalid_request",
    invalid_sql_query: "invalid_sql_query",
    invalid_signature: "invalid_signature",
    malformed_transaction: "malformed_transaction",
    not_found: "not_found",
    payment_method_required: "payment_method_required",
    rate_limit_exceeded: "rate_limit_exceeded",
    request_canceled: "request_canceled",
    service_unavailable: "service_unavailable",
    timed_out: "timed_out",
    unauthorized: "unauthorized",
    policy_violation: "policy_violation",
    policy_in_use: "policy_in_use",
    account_limit_exceeded: "account_limit_exceeded",
    network_not_tradable: "network_not_tradable",
    guest_permission_denied: "guest_permission_denied",
    guest_region_forbidden: "guest_region_forbidden",
    guest_transaction_limit: "guest_transaction_limit",
    guest_transaction_count: "guest_transaction_count",
    phone_number_verification_expired: "phone_number_verification_expired",
    document_verification_failed: "document_verification_failed",
    recipient_allowlist_violation: "recipient_allowlist_violation",
    recipient_allowlist_pending: "recipient_allowlist_pending",
    travel_rules_recipient_violation: "travel_rules_recipient_violation",
    transfer_amount_out_of_bounds: "transfer_amount_out_of_bounds",
    transfer_recipient_address_invalid: "transfer_recipient_address_invalid",
    transfer_quote_expired: "transfer_quote_expired",
    mfa_already_enrolled: "mfa_already_enrolled",
    mfa_invalid_code: "mfa_invalid_code",
    mfa_flow_expired: "mfa_flow_expired",
    mfa_required: "mfa_required",
    mfa_not_enrolled: "mfa_not_enrolled"
}, t = {
    business: "business",
    prime: "prime"
}, n = {
    fiat: "fiat",
    crypto: "crypto"
}, i = {
    individual: "individual",
    business: "business"
}, o = {
    enabled: "enabled",
    restricted: "restricted",
    disabled: "disabled",
    pending: "pending"
}, _ = {
    individualfirstName: "individual.firstName",
    individuallastName: "individual.lastName",
    individualdateOfBirth: "individual.dateOfBirth",
    individualaddress: "individual.address",
    individualnationalityCode: "individual.nationalityCode",
    individualtaxNumber: "individual.taxNumber",
    individualverificationdocument: "individual.verification.document"
}, r = {
    information_missing: "information_missing",
    invalid_address: "invalid_address",
    verification_document_dob_mismatch: "verification_document_dob_mismatch",
    verification_document_expired: "verification_document_expired"
}, s = {
    crypto: "crypto"
}, c = {
    base: "base",
    ethereum: "ethereum",
    solana: "solana",
    aptos: "aptos",
    arbitrum: "arbitrum",
    optimism: "optimism",
    polygon: "polygon",
    sui: "sui"
}, d = {
    crypto: "crypto"
}, l = {
    crypto: "crypto"
}, p = {
    quoted: "quoted",
    processing: "processing",
    completed: "completed",
    failed: "failed",
    canceled: "canceled",
    expired: "expired",
    reversed: "reversed"
}, m = {
    bank: "bank",
    conversion: "conversion",
    network: "network",
    other: "other"
}, v = {
    user_requested: "user_requested",
    compliance_reversal: "compliance_reversal",
    fraud_reversal: "fraud_reversal",
    network_reversal: "network_reversal",
    system_reversal: "system_reversal"
}, u = {
    user_canceled: "user_canceled",
    system_canceled: "system_canceled",
    expired: "expired",
    compliance_canceled: "compliance_canceled",
    risk_canceled: "risk_canceled",
    duplicate_canceled: "duplicate_canceled",
    insufficient_funds_canceled: "insufficient_funds_canceled"
}, y = {
    target: "target",
    source: "source"
}, T = {
    email: "email"
}, h = {
    sms: "sms"
}, f = {
    jwt: "jwt"
}, g = {
    google: "google",
    apple: "apple",
    x: "x"
}, b = {
    team_member: "team_member",
    api_key: "api_key"
}, x = {
    create_api_key: "create_api_key",
    read_api_key: "read_api_key",
    update_api_key: "update_api_key",
    delete_api_key: "delete_api_key",
    create_project: "create_project",
    read_project: "read_project",
    update_project: "update_project",
    delete_project: "delete_project",
    read_entity: "read_entity",
    update_entity: "update_entity",
    invite_team_member: "invite_team_member",
    read_team_member: "read_team_member",
    update_team_member: "update_team_member",
    remove_team_member: "remove_team_member",
    create_role: "create_role",
    read_role: "read_role",
    update_role: "update_role",
    delete_role: "delete_role",
    create_permission: "create_permission",
    read_permission: "read_permission",
    update_permission: "update_permission",
    delete_permission: "delete_permission",
    manage_billing: "manage_billing",
    view_audit_logs: "view_audit_logs",
    manage_all: "manage_all"
}, E = {
    business: "business",
    prime: "prime"
}, A = {
    admin: "admin",
    owner: "owner"
}, S = {
    pending: "pending",
    accepted: "accepted",
    rejected: "rejected",
    canceled: "canceled",
    expired: "expired"
}, k = {
    email: "email"
}, P = {
    sms: "sms"
}, O = {
    "verify-otp": "verify-otp"
}, R = {
    "verify-otp": "verify-otp"
}, C = {
    "base-sepolia": "base-sepolia",
    base: "base",
    arbitrum: "arbitrum",
    optimism: "optimism",
    zora: "zora",
    polygon: "polygon",
    bnb: "bnb",
    avalanche: "avalanche",
    ethereum: "ethereum",
    "ethereum-sepolia": "ethereum-sepolia"
}, N = {
    pending: "pending",
    signed: "signed",
    broadcast: "broadcast",
    complete: "complete",
    dropped: "dropped",
    failed: "failed"
}, w = {
    base: "base",
    "base-sepolia": "base-sepolia",
    ethereum: "ethereum",
    "ethereum-sepolia": "ethereum-sepolia",
    optimism: "optimism",
    arbitrum: "arbitrum",
    avalanche: "avalanche",
    polygon: "polygon"
}, D = {
    totp: "totp"
}, I = {
    base: "base",
    ethereum: "ethereum",
    arbitrum: "arbitrum",
    optimism: "optimism"
}, U = {
    base: "base",
    "base-sepolia": "base-sepolia",
    ethereum: "ethereum"
}, M = {
    entity: "entity",
    project: "project"
}, j = {
    ethValue: "ethValue"
}, q = {
    ">": ">",
    ">=": ">=",
    "<": "<",
    "<=": "<=",
    "==": "=="
}, z = {
    evmAddress: "evmAddress"
}, L = {
    in: "in",
    not_in: "not in"
}, F = {
    erc20: "erc20",
    erc721: "erc721",
    erc1155: "erc1155"
}, Y = {
    pure: "pure",
    view: "view",
    nonpayable: "nonpayable",
    payable: "payable"
}, V = {
    function: "function"
}, B = {
    constructor: "constructor",
    error: "error",
    event: "event",
    fallback: "fallback",
    receive: "receive"
}, H = {
    ">": ">",
    ">=": ">=",
    "<": "<",
    "<=": "<=",
    "==": "=="
}, X = {
    in: "in",
    not_in: "not in"
}, G = {
    evmData: "evmData"
}, K = {
    netUSDChange: "netUSDChange"
}, W = {
    ">": ">",
    ">=": ">=",
    "<": "<",
    "<=": "<=",
    "==": "=="
}, J = {
    reject: "reject",
    accept: "accept"
}, Q = {
    signEvmTransaction: "signEvmTransaction"
}, Z = {
    evmNetwork: "evmNetwork"
}, $ = {
    "base-sepolia": "base-sepolia",
    base: "base",
    ethereum: "ethereum",
    "ethereum-sepolia": "ethereum-sepolia",
    avalanche: "avalanche",
    polygon: "polygon",
    optimism: "optimism",
    arbitrum: "arbitrum",
    zora: "zora",
    bnb: "bnb"
}, ee = {
    in: "in",
    not_in: "not in"
}, ae = {
    reject: "reject",
    accept: "accept"
}, te = {
    sendEvmTransaction: "sendEvmTransaction"
}, ne = {
    evmMessage: "evmMessage"
}, ie = {
    reject: "reject",
    accept: "accept"
}, oe = {
    signEvmMessage: "signEvmMessage"
}, _e = {
    in: "in",
    not_in: "not in"
}, re = {
    ">": ">",
    ">=": ">=",
    "<": "<",
    "<=": "<=",
    "==": "=="
}, se = {
    evmTypedDataField: "evmTypedDataField"
}, ce = {
    evmTypedDataVerifyingContract: "evmTypedDataVerifyingContract"
}, de = {
    in: "in",
    not_in: "not in"
}, le = {
    reject: "reject",
    accept: "accept"
}, pe = {
    signEvmTypedData: "signEvmTypedData"
}, me = {
    solAddress: "solAddress"
}, ve = {
    in: "in",
    not_in: "not in"
}, ue = {
    solValue: "solValue"
}, ye = {
    ">": ">",
    ">=": ">=",
    "<": "<",
    "<=": "<=",
    "==": "=="
}, Te = {
    splAddress: "splAddress"
}, he = {
    in: "in",
    not_in: "not in"
}, fe = {
    splValue: "splValue"
}, ge = {
    ">": ">",
    ">=": ">=",
    "<": "<",
    "<=": "<=",
    "==": "=="
}, be = {
    mintAddress: "mintAddress"
}, xe = {
    in: "in",
    not_in: "not in"
}, Ee = {
    SystemProgram: "SystemProgram",
    TokenProgram: "TokenProgram",
    AssociatedTokenProgram: "AssociatedTokenProgram"
}, Ae = {
    ">": ">",
    ">=": ">=",
    "<": "<",
    "<=": "<=",
    "==": "=="
}, Se = {
    in: "in",
    not_in: "not in"
}, ke = {
    solData: "solData"
}, Pe = {
    programId: "programId"
}, Oe = {
    in: "in",
    not_in: "not in"
}, Re = {
    reject: "reject",
    accept: "accept"
}, Ce = {
    signSolTransaction: "signSolTransaction"
}, Ne = {
    solNetwork: "solNetwork"
}, we = {
    "solana-devnet": "solana-devnet",
    solana: "solana"
}, De = {
    in: "in",
    not_in: "not in"
}, Ie = {
    reject: "reject",
    accept: "accept"
}, Ue = {
    sendSolTransaction: "sendSolTransaction"
}, Me = {
    solMessage: "solMessage"
}, je = {
    reject: "reject",
    accept: "accept"
}, qe = {
    signSolMessage: "signSolMessage"
}, ze = {
    reject: "reject",
    accept: "accept"
}, Le = {
    signEvmHash: "signEvmHash"
}, Fe = {
    reject: "reject",
    accept: "accept"
}, Ye = {
    prepareUserOperation: "prepareUserOperation"
}, Ve = {
    reject: "reject",
    accept: "accept"
}, Be = {
    sendUserOperation: "sendUserOperation"
}, He = {
    project: "project",
    account: "account"
}, Xe = {
    solana: "solana",
    "solana-devnet": "solana-devnet"
}, Ge = {
    String: "String",
    UInt8: "UInt8",
    UInt16: "UInt16",
    UInt32: "UInt32",
    UInt64: "UInt64",
    UInt128: "UInt128",
    UInt256: "UInt256",
    Int8: "Int8",
    Int16: "Int16",
    Int32: "Int32",
    Int64: "Int64",
    Int128: "Int128",
    Int256: "Int256",
    Float32: "Float32",
    Float64: "Float64",
    Bool: "Bool",
    Date: "Date",
    DateTime: "DateTime",
    DateTime64: "DateTime64",
    UUID: "UUID"
}, Ke = {
    NUMBER_1: 1
}, We = {
    exact: "exact"
}, Je = {
    "base-sepolia": "base-sepolia",
    base: "base",
    "solana-devnet": "solana-devnet",
    solana: "solana"
}, Qe = {
    exact: "exact"
}, Ze = {
    "base-sepolia": "base-sepolia",
    base: "base",
    "solana-devnet": "solana-devnet",
    solana: "solana"
}, $e = {
    insufficient_funds: "insufficient_funds",
    invalid_scheme: "invalid_scheme",
    invalid_network: "invalid_network",
    invalid_x402_version: "invalid_x402_version",
    invalid_payment_requirements: "invalid_payment_requirements",
    invalid_payload: "invalid_payload",
    invalid_exact_evm_payload_authorization_value: "invalid_exact_evm_payload_authorization_value",
    invalid_exact_evm_payload_authorization_value_too_low: "invalid_exact_evm_payload_authorization_value_too_low",
    invalid_exact_evm_payload_authorization_valid_after: "invalid_exact_evm_payload_authorization_valid_after",
    invalid_exact_evm_payload_authorization_valid_before: "invalid_exact_evm_payload_authorization_valid_before",
    invalid_exact_evm_payload_authorization_typed_data_message: "invalid_exact_evm_payload_authorization_typed_data_message",
    invalid_exact_evm_payload_authorization_from_address_kyt: "invalid_exact_evm_payload_authorization_from_address_kyt",
    invalid_exact_evm_payload_authorization_to_address_kyt: "invalid_exact_evm_payload_authorization_to_address_kyt",
    invalid_exact_evm_payload_signature: "invalid_exact_evm_payload_signature",
    invalid_exact_evm_payload_signature_address: "invalid_exact_evm_payload_signature_address",
    invalid_exact_svm_payload_transaction: "invalid_exact_svm_payload_transaction",
    invalid_exact_svm_payload_transaction_amount_mismatch: "invalid_exact_svm_payload_transaction_amount_mismatch",
    invalid_exact_svm_payload_transaction_create_ata_instruction: "invalid_exact_svm_payload_transaction_create_ata_instruction",
    invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee: "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee",
    invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset: "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset",
    invalid_exact_svm_payload_transaction_instructions: "invalid_exact_svm_payload_transaction_instructions",
    invalid_exact_svm_payload_transaction_instructions_length: "invalid_exact_svm_payload_transaction_instructions_length",
    invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction: "invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction",
    invalid_exact_svm_payload_transaction_instructions_compute_price_instruction: "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction",
    invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high: "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high",
    invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked: "invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked",
    invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked: "invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked",
    invalid_exact_svm_payload_transaction_not_a_transfer_instruction: "invalid_exact_svm_payload_transaction_not_a_transfer_instruction",
    invalid_exact_svm_payload_transaction_cannot_derive_receiver_ata: "invalid_exact_svm_payload_transaction_cannot_derive_receiver_ata",
    invalid_exact_svm_payload_transaction_receiver_ata_not_found: "invalid_exact_svm_payload_transaction_receiver_ata_not_found",
    invalid_exact_svm_payload_transaction_sender_ata_not_found: "invalid_exact_svm_payload_transaction_sender_ata_not_found",
    invalid_exact_svm_payload_transaction_simulation_failed: "invalid_exact_svm_payload_transaction_simulation_failed",
    invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata: "invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata",
    invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts: "invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts",
    invalid_exact_svm_payload_transaction_fee_payer_transferring_funds: "invalid_exact_svm_payload_transaction_fee_payer_transferring_funds"
}, ea = {
    insufficient_funds: "insufficient_funds",
    invalid_scheme: "invalid_scheme",
    invalid_network: "invalid_network",
    invalid_x402_version: "invalid_x402_version",
    invalid_payment_requirements: "invalid_payment_requirements",
    invalid_payload: "invalid_payload",
    invalid_exact_evm_payload_authorization_value: "invalid_exact_evm_payload_authorization_value",
    invalid_exact_evm_payload_authorization_valid_after: "invalid_exact_evm_payload_authorization_valid_after",
    invalid_exact_evm_payload_authorization_valid_before: "invalid_exact_evm_payload_authorization_valid_before",
    invalid_exact_evm_payload_authorization_typed_data_message: "invalid_exact_evm_payload_authorization_typed_data_message",
    invalid_exact_evm_payload_authorization_from_address_kyt: "invalid_exact_evm_payload_authorization_from_address_kyt",
    invalid_exact_evm_payload_authorization_to_address_kyt: "invalid_exact_evm_payload_authorization_to_address_kyt",
    invalid_exact_evm_payload_signature_address: "invalid_exact_evm_payload_signature_address",
    settle_exact_svm_block_height_exceeded: "settle_exact_svm_block_height_exceeded",
    settle_exact_svm_transaction_confirmation_timed_out: "settle_exact_svm_transaction_confirmation_timed_out"
}, aa = {
    exact: "exact"
}, ta = {
    "base-sepolia": "base-sepolia",
    base: "base",
    "solana-devnet": "solana-devnet",
    solana: "solana"
}, na = {
    http: "http"
}, ia = {
    GUEST_CHECKOUT_APPLE_PAY: "GUEST_CHECKOUT_APPLE_PAY"
}, oa = {
    FEE_TYPE_NETWORK: "FEE_TYPE_NETWORK",
    FEE_TYPE_EXCHANGE: "FEE_TYPE_EXCHANGE"
}, _a = {
    ONRAMP_ORDER_STATUS_PENDING_AUTH: "ONRAMP_ORDER_STATUS_PENDING_AUTH",
    ONRAMP_ORDER_STATUS_PENDING_PAYMENT: "ONRAMP_ORDER_STATUS_PENDING_PAYMENT",
    ONRAMP_ORDER_STATUS_PROCESSING: "ONRAMP_ORDER_STATUS_PROCESSING",
    ONRAMP_ORDER_STATUS_COMPLETED: "ONRAMP_ORDER_STATUS_COMPLETED",
    ONRAMP_ORDER_STATUS_FAILED: "ONRAMP_ORDER_STATUS_FAILED"
}, ra = {
    PAYMENT_LINK_TYPE_APPLE_PAY_BUTTON: "PAYMENT_LINK_TYPE_APPLE_PAY_BUTTON"
}, sa = {
    CARD: "CARD",
    ACH: "ACH",
    APPLE_PAY: "APPLE_PAY",
    PAYPAL: "PAYPAL",
    FIAT_WALLET: "FIAT_WALLET",
    CRYPTO_WALLET: "CRYPTO_WALLET"
}, ca = {
    ach: "ach",
    fedwire: "fedwire"
}, da = {
    unknown: "unknown",
    daily: "daily",
    weekly: "weekly",
    monthly: "monthly",
    biweekly: "biweekly"
}, la = {
    checking: "checking",
    savings: "savings"
}, pa = {
    ach: "ach"
}, ma = {
    fedwire: "fedwire"
}, va = {
    base: "base",
    ethereum: "ethereum"
}, ua = {
    risk_indicated: "risk_indicated",
    no_risk_indicated: "no_risk_indicated"
}, ya = {
    transferstatus_changed: "transfer.status_changed"
}, Ta = {
    refresh_token: "refresh_token"
}, ha = {
    base: "base",
    "base-sepolia": "base-sepolia",
    ethereum: "ethereum",
    "ethereum-sepolia": "ethereum-sepolia",
    avalanche: "avalanche",
    polygon: "polygon",
    optimism: "optimism",
    arbitrum: "arbitrum"
}, fa = {
    solana: "solana",
    "solana-devnet": "solana-devnet"
};
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index7.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-api-client/dist/esm/index8.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"].registerPackageVersion("api_client", __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$api$2d$client$2f$dist$2f$esm$2f$index4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"]);
;
}),
]);

//# sourceMappingURL=9f313_%40coinbase_cdp-api-client_dist_esm_324c046a._.js.map