(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index184.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OffchainLookupError",
    ()=>l,
    "OffchainLookupResponseMalformedError",
    ()=>u,
    "OffchainLookupSenderMismatchError",
    ()=>g
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index125$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index125.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index104$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index104.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index116$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index116.js [app-client] (ecmascript)");
;
;
;
class l extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index104$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ callbackSelector: r, cause: e, data: n, extraData: f, sender: c, urls: o }){
        super(e.shortMessage || "An error occurred while fetching for an offchain result.", {
            cause: e,
            metaMessages: [
                ...e.metaMessages || [],
                e.metaMessages?.length ? "" : [],
                "Offchain Gateway Call:",
                o && [
                    "  Gateway URL(s):",
                    ...o.map((d)=>`    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index116$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrl"])(d)}`)
                ],
                `  Sender: ${c}`,
                `  Data: ${n}`,
                `  Callback selector: ${r}`,
                `  Extra data: ${f}`
            ].flat(),
            name: "OffchainLookupError"
        });
    }
}
class u extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index104$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ result: r, url: e }){
        super("Offchain gateway response is malformed. Response data must be a hex value.", {
            metaMessages: [
                `Gateway URL: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index116$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrl"])(e)}`,
                `Response: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index125$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(r)}`
            ],
            name: "OffchainLookupResponseMalformedError"
        });
    }
}
class g extends __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index104$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ sender: r, to: e }){
        super("Reverted sender address does not match target contract address (`to`).", {
            metaMessages: [
                `Contract address: ${e}`,
                `OffchainLookup sender address: ${r}`
            ],
            name: "OffchainLookupSenderMismatchError"
        });
    }
}
;
}),
"[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index183.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ccipRequest",
    ()=>A,
    "offchainLookup",
    ()=>J,
    "offchainLookupAbiItem",
    ()=>T,
    "offchainLookupSignature",
    ()=>I
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index46$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index46.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index184$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index184.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index35$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index35.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index109$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index109.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index146$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index146.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index163$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index163.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index135$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index135.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index167$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index167.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index185$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index185.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index125$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index125.js [app-client] (ecmascript)");
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
const I = "0x556f1830", T = {
    name: "OffchainLookup",
    type: "error",
    inputs: [
        {
            name: "sender",
            type: "address"
        },
        {
            name: "urls",
            type: "string[]"
        },
        {
            name: "callData",
            type: "bytes"
        },
        {
            name: "callbackFunction",
            type: "bytes4"
        },
        {
            name: "extraData",
            type: "bytes"
        }
    ]
};
async function J(c, { blockNumber: i, blockTag: p, data: a, to: o }) {
    const { args: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index109$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeErrorResult"])({
        data: a,
        abi: [
            T
        ]
    }), [r, s, f, e, t] = n, { ccipRead: u } = c, d = u && typeof u?.request == "function" ? u.request : A;
    try {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index163$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddressEqual"])(o, r)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index184$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OffchainLookupSenderMismatchError"]({
            sender: r,
            to: o
        });
        const l = s.includes(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index185$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localBatchGatewayUrl"]) ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index185$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localBatchGatewayRequest"])({
            data: f,
            ccipRequest: d
        }) : await d({
            data: f,
            sender: r,
            urls: s
        }), { data: y } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index46$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["call"])(c, {
            blockNumber: i,
            blockTag: p,
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index135$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
                e,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index146$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeAbiParameters"])([
                    {
                        type: "bytes"
                    },
                    {
                        type: "bytes"
                    }
                ], [
                    l,
                    t
                ])
            ]),
            to: o
        });
        return y;
    } catch (l) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index184$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OffchainLookupError"]({
            callbackSelector: e,
            cause: l,
            data: a,
            extraData: t,
            sender: r,
            urls: s
        });
    }
}
async function A({ data: c, sender: i, urls: p }) {
    let a = new Error("An unknown error occurred.");
    for(let o = 0; o < p.length; o++){
        const n = p[o], r = n.includes("{data}") ? "GET" : "POST", s = r === "POST" ? {
            data: c,
            sender: i
        } : void 0, f = r === "POST" ? {
            "Content-Type": "application/json"
        } : {};
        try {
            const e = await fetch(n.replace("{sender}", i.toLowerCase()).replace("{data}", c), {
                body: JSON.stringify(s),
                headers: f,
                method: r
            });
            let t;
            if (e.headers.get("Content-Type")?.startsWith("application/json") ? t = (await e.json()).data : t = await e.text(), !e.ok) {
                a = new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index35$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpRequestError"]({
                    body: s,
                    details: t?.error ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index125$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(t.error) : e.statusText,
                    headers: e.headers,
                    status: e.status,
                    url: n
                });
                continue;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index167$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(t)) {
                a = new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index184$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OffchainLookupResponseMalformedError"]({
                    result: t,
                    url: n
                });
                continue;
            }
            return t;
        } catch (e) {
            a = new __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index35$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpRequestError"]({
                body: s,
                details: e.message,
                url: n
            });
        }
    }
    throw a;
}
;
}),
]);

//# sourceMappingURL=9f313_%40coinbase_cdp-hooks_dist_esm_5fed0777._.js.map