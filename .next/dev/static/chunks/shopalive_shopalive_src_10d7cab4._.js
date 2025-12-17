(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/shopalive/shopalive/src/components/LiveBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveBadge",
    ()=>LiveBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
;
;
const LiveBadge = ({ viewers, className, size = 'md' })=>{
    const sizeClasses = {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-1.5 bg-live text-live-foreground font-semibold rounded-full', sizeClasses[size]),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative flex h-2 w-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-live-foreground opacity-75"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/LiveBadge.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative inline-flex rounded-full h-2 w-2 bg-live-foreground"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/LiveBadge.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/LiveBadge.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    "LIVE"
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/LiveBadge.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            viewers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-foreground/80 text-sm font-medium",
                children: [
                    viewers.toLocaleString(),
                    " watching"
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/LiveBadge.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/LiveBadge.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LiveBadge;
var _c;
__turbopack_context__.k.register(_c, "LiveBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-border bg-transparent text-foreground hover:bg-secondary",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-secondary/50 text-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            gradient: "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/25"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-lg px-3",
            lg: "h-12 rounded-xl px-8 text-base",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/button.tsx",
        lineNumber: 43,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/PaymentModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaymentModal",
    ()=>PaymentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bitcoin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bitcoin$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/bitcoin.js [app-client] (ecmascript) <export default as Bitcoin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const PaymentModal = ({ product, onClose, onSuccess })=>{
    _s();
    const [selectedMethod, setSelectedMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSubMethod, setSelectedSubMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [processing, setProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handlePayment = ()=>{
        setProcessing(true);
        // Simulate payment processing
        setTimeout(()=>{
            setProcessing(false);
            onSuccess();
        }, 2000);
    };
    const paymentMethods = [
        {
            id: 'card',
            name: 'Card Payment',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
            description: 'Visa, Mastercard, Amex',
            subOptions: [
                {
                    id: 'visa',
                    name: 'Visa',
                    icon: '💳'
                },
                {
                    id: 'mastercard',
                    name: 'Mastercard',
                    icon: '💳'
                },
                {
                    id: 'amex',
                    name: 'American Express',
                    icon: '💳'
                }
            ]
        },
        {
            id: 'mobile',
            name: 'Mobile Pay',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"],
            description: 'Apple Pay, Google Pay, Samsung Pay',
            subOptions: [
                {
                    id: 'apple',
                    name: 'Apple Pay',
                    icon: ''
                },
                {
                    id: 'google',
                    name: 'Google Pay',
                    icon: '🅖'
                },
                {
                    id: 'samsung',
                    name: 'Samsung Pay',
                    icon: '🅢'
                }
            ]
        },
        {
            id: 'crypto',
            name: 'Cryptocurrency',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bitcoin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bitcoin$3e$__["Bitcoin"],
            description: 'Bitcoin, Ethereum, USDC',
            subOptions: [
                {
                    id: 'bitcoin',
                    name: 'Bitcoin (BTC)',
                    icon: '₿'
                },
                {
                    id: 'ethereum',
                    name: 'Ethereum (ETH)',
                    icon: 'Ξ'
                },
                {
                    id: 'usdc',
                    name: 'USDC',
                    icon: '$'
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-md bg-card rounded-t-3xl sm:rounded-2xl max-h-[90vh] overflow-hidden animate-slideUp",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 border-b border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-foreground",
                                children: "Checkout"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 rounded-full hover:bg-muted transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: product.image,
                                    alt: product.name,
                                    className: "w-16 h-16 rounded-lg object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-medium text-foreground line-clamp-1",
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                "by ",
                                                product.seller.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary font-bold",
                                                    children: [
                                                        "$",
                                                        product.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                product.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground line-through",
                                                    children: [
                                                        "$",
                                                        product.originalPrice
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 space-y-3 overflow-y-auto max-h-[50vh]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-muted-foreground mb-3",
                                children: "Select payment method"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            paymentMethods.map((method)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSelectedMethod(selectedMethod === method.id ? null : method.id);
                                                setSelectedSubMethod(null);
                                            },
                                            className: `w-full flex items-center gap-3 p-4 rounded-xl border transition-all ${selectedMethod === method.id ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50 hover:bg-muted/50'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-2 rounded-lg ${selectedMethod === method.id ? 'bg-primary text-primary-foreground' : 'bg-muted'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(method.icon, {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-foreground",
                                                            children: method.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: method.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: `w-5 h-5 text-muted-foreground transition-transform ${selectedMethod === method.id ? 'rotate-90' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        selectedMethod === method.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-4 pl-4 border-l-2 border-primary/30 space-y-2 animate-fadeIn",
                                            children: method.subOptions.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedSubMethod(sub.id),
                                                    className: `w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${selectedSubMethod === sub.id ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xl w-8 text-center",
                                                            children: sub.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex-1 text-left text-sm font-medium text-foreground",
                                                            children: sub.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        selectedSubMethod === sub.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-4 h-4 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, sub.id, true, {
                                                    fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, method.id, true, {
                                    fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-border bg-muted/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-bold text-foreground",
                                        children: [
                                            "$",
                                            product.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "gradient",
                                className: "w-full h-12 text-base font-semibold",
                                disabled: !selectedSubMethod || processing,
                                onClick: handlePayment,
                                children: processing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Processing..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : `Pay $${product.price}`
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-center text-muted-foreground mt-3",
                                children: "🔒 Secure payment powered by encrypted connection"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/PaymentModal.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PaymentModal, "3xSi3XXCkAWTXdnmTxR28QERK9M=");
_c = PaymentModal;
var _c;
__turbopack_context__.k.register(_c, "PaymentModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/ProductCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$PaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/PaymentModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const ProductCard = ({ product, variant = 'overlay', onAddToCart, onAddToWishlist })=>{
    _s();
    const [isLiked, setIsLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPayment, setShowPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const discount = product.originalPrice ? Math.round((product.originalPrice - product.price) / product.originalPrice * 100) : null;
    const handleBuyClick = ()=>{
        setShowPayment(true);
    };
    const handlePaymentSuccess = ()=>{
        setShowPayment(false);
        toast({
            title: "Payment Successful! 🎉",
            description: `You've purchased ${product.name}`
        });
    };
    if (variant === 'compact') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 glass rounded-xl p-3 slide-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: product.image,
                            alt: product.name,
                            className: "w-14 h-14 rounded-lg object-cover"
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-foreground truncate",
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary font-bold",
                                            children: [
                                                "$",
                                                product.price
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        product.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground text-xs line-through",
                                            children: [
                                                "$",
                                                product.originalPrice
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "outline",
                                    className: "h-8",
                                    onClick: ()=>onAddToCart?.(product),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            className: "h-4 w-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Cart"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    className: "gradient-primary border-0 glow h-8",
                                    onClick: handleBuyClick,
                                    children: "Buy"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                showPayment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$PaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentModal"], {
                    product: product,
                    onClose: ()=>setShowPayment(false),
                    onSuccess: handlePaymentSuccess
                }, void 0, false, {
                    fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    }
    if (variant === 'grid') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass rounded-2xl overflow-hidden group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative aspect-square",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: product.image,
                                    alt: product.name,
                                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                discount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full",
                                    children: [
                                        "-",
                                        discount,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setIsLiked(!isLiked);
                                        onAddToWishlist?.(product);
                                    },
                                    className: "absolute top-3 right-3 p-2 glass rounded-full hover:scale-110 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-5 w-5', isLiked ? 'fill-accent text-accent' : 'text-foreground')
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium text-foreground mb-1 truncate",
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary font-bold text-lg",
                                                    children: [
                                                        "$",
                                                        product.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                product.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground text-sm line-through",
                                                    children: [
                                                        "$",
                                                        product.originalPrice
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            className: "gradient-primary border-0",
                                            onClick: handleBuyClick,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                showPayment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$PaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentModal"], {
                    product: product,
                    onClose: ()=>setShowPayment(false),
                    onSuccess: handlePaymentSuccess
                }, void 0, false, {
                    fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                    lineNumber: 141,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    }
    // Overlay variant (default)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass rounded-2xl p-4 flex items-center gap-4 slide-up max-w-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: product.image,
                                alt: product.name,
                                className: "w-20 h-20 rounded-xl object-cover"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            discount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full",
                                children: [
                                    "-",
                                    discount,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-foreground mb-1 truncate",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary font-bold text-lg",
                                        children: [
                                            "$",
                                            product.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    product.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground text-sm line-through",
                                        children: [
                                            "$",
                                            product.originalPrice
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        className: "gradient-primary border-0 flex-1",
                                        onClick: handleBuyClick,
                                        children: "Buy Now"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: ()=>{
                                            setIsLiked(!isLiked);
                                            onAddToWishlist?.(product);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-4 w-4', isLiked && 'fill-accent text-accent')
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showPayment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$PaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentModal"], {
                product: product,
                onClose: ()=>setShowPayment(false),
                onSuccess: handlePaymentSuccess
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/ProductCard.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(ProductCard, "MkxpmwBj3W/CreZOb1LCbgd7LK8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/SellerInfo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SellerInfo",
    ()=>SellerInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const SellerInfo = ({ seller, className, variant = 'default' })=>{
    _s();
    const [isFollowing, setIsFollowing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (variant === 'compact') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-3', className),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: seller.avatar,
                    alt: seller.name,
                    className: "w-10 h-10 rounded-full object-cover ring-2 ring-primary"
                }, void 0, false, {
                    fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-foreground truncate",
                                    children: seller.name
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                seller.isVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                    className: "h-4 w-4 text-primary flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                                    lineNumber: 27,
                                    columnNumber: 35
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: [
                                "@",
                                seller.username
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-4 glass rounded-2xl p-4', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: seller.avatar,
                        alt: seller.name,
                        className: "w-14 h-14 rounded-full object-cover ring-2 ring-primary"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-1 -right-1 bg-success text-success-foreground text-xs font-bold px-1.5 py-0.5 rounded-full",
                        children: "LIVE"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 mb-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-foreground truncate",
                                children: seller.name
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            seller.isVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                className: "h-5 w-5 text-primary flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                                lineNumber: 50,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "@",
                            seller.username
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 text-sm text-muted-foreground mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    seller.followers.toLocaleString(),
                                    " followers"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: isFollowing ? 'secondary' : 'default',
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(!isFollowing && 'gradient-primary border-0'),
                onClick: ()=>setIsFollowing(!isFollowing),
                children: isFollowing ? 'Following' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                            className: "h-4 w-4 mr-1"
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Follow"
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/SellerInfo.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SellerInfo, "YFMWbCdVrzdRngNTHSCSfHAIZbE=");
_c = SellerInfo;
var _c;
__turbopack_context__.k.register(_c, "SellerInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/LiveChat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveChat",
    ()=>LiveChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const LiveChat = ({ messages, onSendMessage, className })=>{
    _s();
    const [newMessage, setNewMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveChat.useEffect": ()=>{
            scrollToBottom();
        }
    }["LiveChat.useEffect"], [
        messages
    ]);
    const handleSend = ()=>{
        if (newMessage.trim()) {
            onSendMessage?.(newMessage);
            setNewMessage('');
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col h-full', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto scrollbar-hide p-4 space-y-3",
                children: [
                    messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-start gap-2 fade-in', message.type === 'purchase' && 'bg-primary/20 rounded-lg p-2 -mx-2', message.type === 'join' && 'opacity-60'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: message.avatar,
                                    alt: message.username,
                                    className: "w-8 h-8 rounded-full object-cover flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-sm text-foreground",
                                            children: message.username
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        message.type === 'purchase' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full",
                                            children: "🎉 Purchased!"
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-foreground/80 break-words",
                                            children: message.type === 'join' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "italic",
                                                children: message.message
                                            }, void 0, false, {
                                                fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : message.message
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, message.id, true, {
                            fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "secondary",
                            size: "icon",
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                className: "h-5 w-5 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "secondary",
                            size: "icon",
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "h-5 w-5 text-accent"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    value: newMessage,
                                    onChange: (e)=>setNewMessage(e.target.value),
                                    onKeyPress: handleKeyPress,
                                    placeholder: "Say something...",
                                    className: "pr-12 bg-secondary border-border"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "icon",
                                    className: "absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 gradient-primary",
                                    onClick: handleSend,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/LiveChat.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LiveChat, "YdSvd8q7Hk6Mw9odOhCODJVjT50=");
_c = LiveChat;
var _c;
__turbopack_context__.k.register(_c, "LiveChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const DropdownMenuPortal = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DropdownMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"];
const DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"];
const DropdownMenuSubTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "ml-auto h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"].displayName;
const DropdownMenuSubContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"].displayName;
const DropdownMenuContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
            lineNumber: 60,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = DropdownMenuContent;
DropdownMenuContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DropdownMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = DropdownMenuItem;
DropdownMenuItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 105,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
                lineNumber: 104,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"].displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"].displayName;
const DropdownMenuLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c12 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
        lineNumber: 142,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c13 = DropdownMenuLabel;
DropdownMenuLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const DropdownMenuSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c15 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx",
        lineNumber: 159,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c16 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_context__.k.register(_c, "DropdownMenuSubTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c2, "DropdownMenuSubContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "DropdownMenuSubContent");
__turbopack_context__.k.register(_c4, "DropdownMenuContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "DropdownMenuContent");
__turbopack_context__.k.register(_c6, "DropdownMenuItem$React.forwardRef");
__turbopack_context__.k.register(_c7, "DropdownMenuItem");
__turbopack_context__.k.register(_c8, "DropdownMenuCheckboxItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c10, "DropdownMenuRadioItem$React.forwardRef");
__turbopack_context__.k.register(_c11, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c12, "DropdownMenuLabel$React.forwardRef");
__turbopack_context__.k.register(_c13, "DropdownMenuLabel");
__turbopack_context__.k.register(_c14, "DropdownMenuSeparator$React.forwardRef");
__turbopack_context__.k.register(_c15, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c16, "DropdownMenuShortcut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/SocialShare.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialShare",
    ()=>SocialShare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
// Custom icons for platforms not in Lucide
const TikTokIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: "h-5 w-5",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
        }, void 0, false, {
            fileName: "[project]/shopalive/shopalive/src/components/SocialShare.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/SocialShare.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = TikTokIcon;
const WhatsAppIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: "h-5 w-5",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
        }, void 0, false, {
            fileName: "[project]/shopalive/shopalive/src/components/SocialShare.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/SocialShare.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = WhatsAppIcon;
const SnapchatIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: "h-5 w-5",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301a.32.32 0 0 1 .114-.023c.12 0 .24.045.33.12.12.09.18.21.18.36 0 .24-.15.42-.345.495l-.018.006c-.012.004-.018.006-.024.009l-.012.003c-.303.12-.705.27-1.155.27-.12 0-.24-.015-.36-.03-.06 0-.12-.015-.18-.015-.315 0-.69.15-.9.315-.195.135-.315.315-.405.495a1.635 1.635 0 0 1-.36.555c-.3.315-.71.51-1.14.51-.3 0-.57-.09-.855-.195l-.21-.105c-.135-.045-.21-.075-.27-.075-.12 0-.255.045-.45.12-.195.06-.405.195-.69.315a4.39 4.39 0 0 1-1.605.36c-.54 0-1.08-.105-1.59-.36-.285-.12-.495-.255-.69-.315-.195-.075-.33-.12-.45-.12-.06 0-.135.03-.27.075l-.21.105c-.285.105-.555.195-.855.195-.42 0-.84-.195-1.14-.51a1.726 1.726 0 0 1-.36-.555c-.09-.18-.21-.36-.405-.495-.21-.165-.585-.315-.9-.315-.06 0-.12.015-.18.015-.12.015-.24.03-.36.03-.45 0-.855-.15-1.155-.27l-.012-.003c-.006-.003-.012-.005-.024-.009l-.018-.006c-.195-.075-.345-.255-.345-.495 0-.15.06-.27.18-.36a.395.395 0 0 1 .33-.12c.039 0 .078.008.114.023.374.18.733.285 1.033.301.198 0 .326-.045.401-.09a9.58 9.58 0 0 1-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.859 1.069 11.216.793 12.206.793z"
        }, void 0, false, {
            fileName: "[project]/shopalive/shopalive/src/components/SocialShare.tsx",
            lineNumber: 26,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/SocialShare.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = SnapchatIcon;
const SocialShare = ({ productName, streamTitle })=>{
    _s();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const shareText = productName ? `Check out ${productName} on Tyle!` : streamTitle ? `Watch "${streamTitle}" live on Tyle!` : 'Check out this amazing live stream on Tyle!';
    const handleShare = (platform)=>{
        toast({
            title: `Sharing to ${platform}`,
            description: `"${shareText}" will be posted to your ${platform}`
        });
    };
    const platforms = [
        {
            name: 'TikTok',
            icon: TikTokIcon,
            color: 'hover:bg-[#ff0050]/20'
        },
        {
            name: 'Instagram',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
            color: 'hover:bg-[#E4405F]/20'
        },
        {
            name: 'X (Twitter)',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"],
            color: 'hover:bg-foreground/20'
        },
        {
            name: 'Facebook',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
            color: 'hover:bg-[#1877F2]/20'
        },
        {
            name: 'Snapchat',
            icon: SnapchatIcon,
            color: 'hover:bg-[#FFFC00]/20'
        },
        {
            name: 'WhatsApp',
            icon: WhatsAppIcon,
            color: 'hover:bg-[#25D366]/20'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "secondary",
                    size: "icon",
                    className: "rounded-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/SocialShare.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/shopalive/shopalive/src/components/SocialShare.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/SocialShare.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                className: "w-48 glass",
                children: platforms.map((platform)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>handleShare(platform.name),
                        className: `flex items-center gap-3 cursor-pointer ${platform.color}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(platform.icon, {}, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/SocialShare.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: platform.name
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/SocialShare.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, platform.name, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/SocialShare.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/SocialShare.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/SocialShare.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SocialShare, "XbQoRqPDPo6PJEzRId7w4FMisDk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c3 = SocialShare;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TikTokIcon");
__turbopack_context__.k.register(_c1, "WhatsAppIcon");
__turbopack_context__.k.register(_c2, "SnapchatIcon");
__turbopack_context__.k.register(_c3, "SocialShare");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/data/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockChatMessages",
    ()=>mockChatMessages,
    "mockLiveStreams",
    ()=>mockLiveStreams,
    "mockProducts",
    ()=>mockProducts,
    "mockSellers",
    ()=>mockSellers,
    "mockWishlist",
    ()=>mockWishlist
]);
const mockSellers = [
    {
        id: '1',
        name: 'Sofia Chen',
        username: 'sofiastyle',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        followers: 125000,
        isVerified: true
    },
    {
        id: '2',
        name: 'Marcus Johnson',
        username: 'marcusfits',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        followers: 89000,
        isVerified: true
    },
    {
        id: '3',
        name: 'Luna Martinez',
        username: 'lunalooks',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
        followers: 234000,
        isVerified: true
    },
    {
        id: '4',
        name: 'Alex Kim',
        username: 'alexfinds',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
        followers: 56000,
        isVerified: false
    }
];
const mockProducts = [
    {
        id: 'p1',
        name: 'Designer Silk Scarf',
        price: 89.99,
        originalPrice: 149.99,
        image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=200&h=200&fit=crop',
        seller: mockSellers[0]
    },
    {
        id: 'p2',
        name: 'Vintage Leather Bag',
        price: 199.99,
        originalPrice: 299.99,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=200&fit=crop',
        seller: mockSellers[0]
    },
    {
        id: 'p3',
        name: 'Limited Sneakers',
        price: 249.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop',
        seller: mockSellers[1]
    },
    {
        id: 'p4',
        name: 'Gold Statement Earrings',
        price: 59.99,
        originalPrice: 89.99,
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop',
        seller: mockSellers[2]
    },
    {
        id: 'p5',
        name: 'Tech Smartwatch',
        price: 399.99,
        originalPrice: 499.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
        seller: mockSellers[3]
    }
];
const mockLiveStreams = [
    {
        id: 'ls1',
        seller: mockSellers[0],
        title: '🔥 FLASH SALE! Designer accessories at 40% OFF',
        viewers: 12453,
        products: [
            mockProducts[0],
            mockProducts[1]
        ],
        thumbnail: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1200&fit=crop',
        isLive: true,
        category: 'Fashion'
    },
    {
        id: 'ls2',
        seller: mockSellers[1],
        title: 'Sneaker drop! Exclusive releases 👟',
        viewers: 8921,
        products: [
            mockProducts[2]
        ],
        thumbnail: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&h=1200&fit=crop',
        isLive: true,
        category: 'Streetwear'
    },
    {
        id: 'ls3',
        seller: mockSellers[2],
        title: 'Jewelry haul - New arrivals ✨',
        viewers: 23104,
        products: [
            mockProducts[3]
        ],
        thumbnail: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1200&fit=crop',
        isLive: true,
        category: 'Jewelry'
    },
    {
        id: 'ls4',
        seller: mockSellers[3],
        title: 'Tech gadgets under $500 💻',
        viewers: 5672,
        products: [
            mockProducts[4]
        ],
        thumbnail: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=1200&fit=crop',
        isLive: true,
        category: 'Tech'
    }
];
const mockChatMessages = [
    {
        id: 'c1',
        userId: 'u1',
        username: 'fashionlover',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop',
        message: 'Love this scarf! 😍',
        timestamp: new Date(),
        type: 'message'
    },
    {
        id: 'c2',
        userId: 'u2',
        username: 'shopper2024',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop',
        message: 'Is this available in blue?',
        timestamp: new Date(),
        type: 'message'
    },
    {
        id: 'c3',
        userId: 'u3',
        username: 'luxuryfinds',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=50&h=50&fit=crop',
        message: 'Just bought the bag! 🛍️',
        timestamp: new Date(),
        type: 'purchase'
    },
    {
        id: 'c4',
        userId: 'u4',
        username: 'newbie_buyer',
        avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=50&h=50&fit=crop',
        message: 'joined the stream',
        timestamp: new Date(),
        type: 'join'
    }
];
const mockWishlist = [
    {
        id: 'w1',
        product: mockProducts[0],
        addedAt: new Date(),
        priceWhenAdded: 89.99,
        aiRecommended: false
    },
    {
        id: 'w2',
        product: mockProducts[2],
        addedAt: new Date(),
        priceWhenAdded: 269.99,
        aiRecommended: true
    },
    {
        id: 'w3',
        product: mockProducts[4],
        addedAt: new Date(),
        priceWhenAdded: 399.99,
        aiRecommended: true
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/StreamViewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StreamViewer",
    ()=>StreamViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$LiveBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/LiveBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ProductCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$SellerInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/SellerInfo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$LiveChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/LiveChat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$SocialShare$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/SocialShare.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/data/mockData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const StreamViewer = ({ stream, isActive, onNext, onPrevious, hasNext, hasPrevious, onAddToCart })=>{
    _s();
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showChat, setShowChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showProducts, setShowProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isLiked, setIsLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [likeCount, setLikeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Math.floor(Math.random() * 50000) + 10000);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockChatMessages"]);
    const [currentProductIndex, setCurrentProductIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Rotate products every 5 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StreamViewer.useEffect": ()=>{
            if (!isActive || stream.products.length <= 1) return;
            const interval = setInterval({
                "StreamViewer.useEffect.interval": ()=>{
                    setCurrentProductIndex({
                        "StreamViewer.useEffect.interval": (prev)=>(prev + 1) % stream.products.length
                    }["StreamViewer.useEffect.interval"]);
                }
            }["StreamViewer.useEffect.interval"], 5000);
            return ({
                "StreamViewer.useEffect": ()=>clearInterval(interval)
            })["StreamViewer.useEffect"];
        }
    }["StreamViewer.useEffect"], [
        isActive,
        stream.products.length
    ]);
    const handleLike = ()=>{
        setIsLiked(!isLiked);
        setLikeCount((prev)=>isLiked ? prev - 1 : prev + 1);
    };
    const handleSendMessage = (message)=>{
        const newMessage = {
            id: `msg-${Date.now()}`,
            userId: 'current-user',
            username: 'you',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop',
            message,
            timestamp: new Date(),
            type: 'message'
        };
        setMessages((prev)=>[
                ...prev,
                newMessage
            ]);
    };
    const currentProduct = stream.products[currentProductIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: stream.thumbnail,
                        alt: stream.title,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 p-4 z-10 safe-area-top",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$LiveBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveBadge"], {
                            viewers: stream.viewers
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "secondary",
                                    size: "icon",
                                    className: "rounded-full glass",
                                    onClick: ()=>setIsMuted(!isMuted),
                                    children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                        lineNumber: 103,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                        lineNumber: 103,
                                        columnNumber: 60
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$SocialShare$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialShare"], {
                                    streamTitle: stream.title
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            hasPrevious && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onPrevious,
                className: "absolute top-20 left-1/2 -translate-x-1/2 z-10 p-2 text-foreground/50 hover:text-foreground transition-colors animate-bounce",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                    className: "h-8 w-8"
                }, void 0, false, {
                    fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                    lineNumber: 116,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            hasNext && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onNext,
                className: "absolute bottom-32 left-1/2 -translate-x-1/2 z-10 p-2 text-foreground/50 hover:text-foreground transition-colors animate-bounce",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-8 w-8"
                }, void 0, false, {
                    fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-4 bottom-40 flex flex-col items-center gap-4 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "rounded-full h-12 w-12",
                                onClick: handleLike,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-7 w-7 transition-all', isLiked && 'fill-accent text-accent scale-110')
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-foreground/80 font-medium",
                                children: [
                                    (likeCount / 1000).toFixed(1),
                                    "K"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-full h-12 w-12', showChat && 'bg-secondary'),
                                onClick: ()=>setShowChat(!showChat),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                    className: "h-7 w-7"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-foreground/80 font-medium",
                                children: "Chat"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-full h-12 w-12', showProducts && 'bg-secondary'),
                                onClick: ()=>setShowProducts(!showProducts),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                    className: "h-7 w-7"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-foreground/80 font-medium",
                                children: "Shop"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "relative mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: stream.seller.avatar,
                                alt: stream.seller.name,
                                className: "w-12 h-12 rounded-full object-cover ring-2 ring-primary"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -bottom-1 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-2 rounded-full",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-16 p-4 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$SellerInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SellerInfo"], {
                        seller: stream.seller,
                        variant: "compact",
                        className: "mb-3"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-foreground font-medium mb-4 line-clamp-2",
                        children: stream.title
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    showProducts && currentProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                        product: currentProduct,
                        variant: "compact",
                        onAddToCart: onAddToCart,
                        onAddToWishlist: (p)=>console.log('Add to wishlist:', p)
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    stream.products.length > 1 && showProducts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-1.5 mt-3",
                        children: stream.products.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentProductIndex(idx),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-2 h-2 rounded-full transition-all', idx === currentProductIndex ? 'bg-primary w-4' : 'bg-foreground/30')
                            }, idx, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 bottom-0 w-80 glass-dark z-20 slide-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 border-b border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-foreground",
                                children: "Live Chat"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: ()=>setShowChat(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$LiveChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveChat"], {
                        messages: messages,
                        onSendMessage: handleSendMessage,
                        className: "h-[calc(100%-60px)]"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
                lineNumber: 223,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/StreamViewer.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StreamViewer, "6mt1wpfOMtED/7Gxn4kSEFLTo8o=");
_c = StreamViewer;
var _c;
__turbopack_context__.k.register(_c, "StreamViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/LiveFeed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveFeed",
    ()=>LiveFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$StreamViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/StreamViewer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const LiveFeed = ({ streams, onAddToCart })=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchStartY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const touchEndY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const goToNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LiveFeed.useCallback[goToNext]": ()=>{
            if (currentIndex < streams.length - 1) {
                setCurrentIndex({
                    "LiveFeed.useCallback[goToNext]": (prev)=>prev + 1
                }["LiveFeed.useCallback[goToNext]"]);
            }
        }
    }["LiveFeed.useCallback[goToNext]"], [
        currentIndex,
        streams.length
    ]);
    const goToPrevious = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LiveFeed.useCallback[goToPrevious]": ()=>{
            if (currentIndex > 0) {
                setCurrentIndex({
                    "LiveFeed.useCallback[goToPrevious]": (prev)=>prev - 1
                }["LiveFeed.useCallback[goToPrevious]"]);
            }
        }
    }["LiveFeed.useCallback[goToPrevious]"], [
        currentIndex
    ]);
    // Handle wheel scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveFeed.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            let scrollTimeout;
            let lastScrollTime = 0;
            const scrollCooldown = 500;
            const handleWheel = {
                "LiveFeed.useEffect.handleWheel": (e)=>{
                    e.preventDefault();
                    const now = Date.now();
                    if (now - lastScrollTime < scrollCooldown) return;
                    if (e.deltaY > 50) {
                        goToNext();
                        lastScrollTime = now;
                    } else if (e.deltaY < -50) {
                        goToPrevious();
                        lastScrollTime = now;
                    }
                }
            }["LiveFeed.useEffect.handleWheel"];
            container.addEventListener('wheel', handleWheel, {
                passive: false
            });
            return ({
                "LiveFeed.useEffect": ()=>container.removeEventListener('wheel', handleWheel)
            })["LiveFeed.useEffect"];
        }
    }["LiveFeed.useEffect"], [
        goToNext,
        goToPrevious
    ]);
    // Handle touch swipe
    const handleTouchStart = (e)=>{
        touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchMove = (e)=>{
        touchEndY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = ()=>{
        const diff = touchStartY.current - touchEndY.current;
        const threshold = 50;
        if (diff > threshold) {
            goToNext();
        } else if (diff < -threshold) {
            goToPrevious();
        }
    };
    // Handle keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveFeed.useEffect": ()=>{
            const handleKeyDown = {
                "LiveFeed.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'ArrowDown' || e.key === 'j') {
                        goToNext();
                    } else if (e.key === 'ArrowUp' || e.key === 'k') {
                        goToPrevious();
                    }
                }
            }["LiveFeed.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "LiveFeed.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["LiveFeed.useEffect"];
        }
    }["LiveFeed.useEffect"], [
        goToNext,
        goToPrevious
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "h-full w-full overflow-hidden relative",
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        children: [
            streams.map((stream, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute inset-0 transition-transform duration-500 ease-out', index === currentIndex && 'z-10', index < currentIndex && '-translate-y-full', index > currentIndex && 'translate-y-full'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$StreamViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamViewer"], {
                        stream: stream,
                        isActive: index === currentIndex,
                        onNext: goToNext,
                        onPrevious: goToPrevious,
                        hasNext: currentIndex < streams.length - 1,
                        hasPrevious: currentIndex > 0,
                        onAddToCart: onAddToCart
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/LiveFeed.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, stream.id, false, {
                    fileName: "[project]/shopalive/shopalive/src/components/LiveFeed.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-1.5",
                children: streams.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentIndex(index),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-1 rounded-full transition-all duration-300', index === currentIndex ? 'h-8 bg-primary' : 'h-4 bg-foreground/30 hover:bg-foreground/50')
                    }, index, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/LiveFeed.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/LiveFeed.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/LiveFeed.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LiveFeed, "7A796JzJg6cIqtnG4giy4NPGAyY=");
_c = LiveFeed;
var _c;
__turbopack_context__.k.register(_c, "LiveFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/BottomNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNav",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const BottomNav = ({ activeTab, onTabChange })=>{
    const tabs = [
        {
            id: 'home',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
            label: 'Home'
        },
        {
            id: 'discover',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
            label: 'Discover'
        },
        {
            id: 'create',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
            label: '',
            isSpecial: true
        },
        {
            id: 'wishlist',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
            label: 'Wishlist'
        },
        {
            id: 'profile',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
            label: 'Profile'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-border/50 safe-area-bottom",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-around h-16 max-w-lg mx-auto",
            children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onTabChange(tab.id),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col items-center justify-center flex-1 h-full transition-all', tab.isSpecial && 'relative', !tab.isSpecial && activeTab === tab.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'),
                    children: tab.isSpecial ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gradient-primary rounded-xl p-3 glow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "h-6 w-6 text-primary-foreground"
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/BottomNav.tsx",
                            lineNumber: 35,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/BottomNav.tsx",
                        lineNumber: 34,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/BottomNav.tsx",
                                lineNumber: 39,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs mt-1 font-medium",
                                children: tab.label
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/BottomNav.tsx",
                                lineNumber: 40,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true)
                }, tab.id, false, {
                    fileName: "[project]/shopalive/shopalive/src/components/BottomNav.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/shopalive/shopalive/src/components/BottomNav.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/BottomNav.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BottomNav;
var _c;
__turbopack_context__.k.register(_c, "BottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/TopTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopTabs",
    ()=>TopTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
;
;
const TopTabs = ({ activeTab, onTabChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onTabChange('following'),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg font-semibold transition-all', activeTab === 'following' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground/80'),
                children: "Following"
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/TopTabs.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-px h-6 bg-border"
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/TopTabs.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onTabChange('foryou'),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg font-semibold transition-all', activeTab === 'foryou' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground/80'),
                children: "For You"
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/TopTabs.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute bottom-0 h-0.5 bg-primary rounded-full transition-all duration-300 w-16', activeTab === 'following' ? '-translate-x-12' : 'translate-x-10')
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/TopTabs.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/TopTabs.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TopTabs;
var _c;
__turbopack_context__.k.register(_c, "TopTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/WishlistView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistView",
    ()=>WishlistView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ProductCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/button.tsx [app-client] (ecmascript)");
// Add missing import
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
;
;
;
;
const WishlistView = ({ items, onRemove, onBuy })=>{
    const aiRecommended = items.filter((i)=>i.aiRecommended);
    const saved = items.filter((i)=>!i.aiRecommended);
    const priceDrops = items.filter((i)=>i.product.originalPrice && i.product.price < i.priceWhenAdded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-10 glass-dark p-4 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold font-display text-foreground",
                        children: "My Items"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground mt-1",
                        children: [
                            items.length,
                            " items saved • ",
                            priceDrops.length,
                            " price drops"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            aiRecommended.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 rounded-lg bg-accent/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "h-5 w-5 text-accent"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-foreground",
                                        children: "AI Picks For You"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Based on your watching history"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: aiRecommended.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                        product: item.product,
                                        variant: "grid",
                                        onAddToCart: ()=>onBuy?.(item)
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "AI Pick"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.id, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            priceDrops.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "p-4 border-t border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 rounded-lg bg-success/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                    className: "h-5 w-5 text-success"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-foreground",
                                        children: "Price Drops"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Items that went on sale"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: priceDrops.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass rounded-xl p-3 flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item.product.image,
                                        alt: item.product.name,
                                        className: "w-16 h-16 rounded-lg object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-foreground truncate",
                                                children: item.product.name
                                            }, void 0, false, {
                                                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-success font-bold",
                                                        children: [
                                                            "$",
                                                            item.product.price
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground text-sm line-through",
                                                        children: [
                                                            "$",
                                                            item.priceWhenAdded
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-success text-xs font-semibold",
                                                        children: [
                                                            "-$",
                                                            (item.priceWhenAdded - item.product.price).toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        className: "gradient-primary",
                                        onClick: ()=>onBuy?.(item),
                                        children: "Buy"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.id, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            saved.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "p-4 border-t border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 rounded-lg bg-secondary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "h-5 w-5 text-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-foreground",
                                        children: "Saved Items"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Items you've added"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: saved.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                        product: item.product,
                                        variant: "grid",
                                        onAddToCart: ()=>onBuy?.(item)
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onRemove?.(item.id),
                                        className: "absolute top-3 right-3 p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "h-4 w-4 text-destructive"
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.id, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center h-[60vh] text-center p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-full bg-secondary mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: "h-10 w-10 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-foreground mb-2",
                        children: "No items yet"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground max-w-xs",
                        children: "Start browsing live streams and save items you love. Our AI will also suggest items based on your interests!"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/WishlistView.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WishlistView;
;
var _c;
__turbopack_context__.k.register(_c, "WishlistView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/DiscoverView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiscoverView",
    ()=>DiscoverView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$LiveBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/LiveBadge.tsx [app-client] (ecmascript)");
;
;
;
;
;
const DiscoverView = ({ streams, sellers, onStreamClick, onSellerClick })=>{
    const categories = [
        {
            name: 'Trending',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            color: 'bg-primary/20 text-primary'
        },
        {
            name: 'Fashion',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
            color: 'bg-accent/20 text-accent'
        },
        {
            name: 'Tech',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
            color: 'bg-success/20 text-success'
        },
        {
            name: 'Beauty',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
            color: 'bg-pink-500/20 text-pink-400'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-10 glass-dark p-4 border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            placeholder: "Search sellers, products, or categories...",
                            className: "pl-10 bg-secondary border-border"
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-foreground mb-3",
                        children: "Browse Categories"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 overflow-x-auto scrollbar-hide pb-2",
                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap', cat.color),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(cat.icon, {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: cat.name
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, cat.name, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "p-4 border-t border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-foreground mb-3",
                        children: "Top Sellers"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 overflow-x-auto scrollbar-hide pb-2",
                        children: sellers.map((seller)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSellerClick(seller),
                                className: "flex flex-col items-center gap-2 min-w-[80px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: seller.avatar,
                                                alt: seller.name,
                                                className: "w-16 h-16 rounded-full object-cover ring-2 ring-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -bottom-1 left-1/2 -translate-x-1/2 bg-live text-live-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full",
                                                children: "LIVE"
                                            }, void 0, false, {
                                                fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-foreground font-medium truncate w-full text-center",
                                        children: seller.username
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, seller.id, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "p-4 border-t border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-foreground mb-3",
                        children: "Live Now"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: streams.map((stream)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onStreamClick(stream),
                                className: "relative aspect-[3/4] rounded-2xl overflow-hidden group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: stream.thumbnail,
                                        alt: stream.title,
                                        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-3 left-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$LiveBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveBadge"], {
                                            size: "sm"
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute top-3 right-3 text-xs font-medium text-foreground/80 glass px-2 py-1 rounded-full",
                                        children: [
                                            (stream.viewers / 1000).toFixed(1),
                                            "K"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: stream.seller.avatar,
                                                        alt: stream.seller.name,
                                                        className: "w-6 h-6 rounded-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-foreground truncate",
                                                        children: stream.seller.username
                                                    }, void 0, false, {
                                                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-foreground line-clamp-2 text-left",
                                                children: stream.title
                                            }, void 0, false, {
                                                fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, stream.id, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/DiscoverView.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DiscoverView;
var _c;
__turbopack_context__.k.register(_c, "DiscoverView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/ProfileView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileView",
    ()=>ProfileView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3X3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$lib$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/lib/context/UserContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const ProfileView = ({ seller, isOwnProfile = true })=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('videos');
    const [isFollowing, setIsFollowing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { user: dbUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$lib$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvmAddress"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const copyToClipboard = (text)=>{
        navigator.clipboard.writeText(text);
        toast({
            title: "Copied!",
            description: "Wallet address copied to clipboard"
        });
    };
    // Use database user data if available for own profile
    const user = isOwnProfile && dbUser ? {
        id: dbUser._id,
        name: dbUser.username,
        username: dbUser.username,
        avatar: dbUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
        followers: dbUser.followers,
        isVerified: dbUser.isVerified
    } : seller || {
        id: 'me',
        name: 'Your Name',
        username: 'yourprofile',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
        followers: 1234,
        isVerified: false
    };
    const stats = [
        {
            label: 'Following',
            value: '156'
        },
        {
            label: 'Followers',
            value: user.followers.toLocaleString()
        },
        {
            label: 'Likes',
            value: '12.5K'
        }
    ];
    const tabs = [
        {
            id: 'videos',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"],
            label: 'Videos'
        },
        {
            id: 'products',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"],
            label: 'Products'
        },
        {
            id: 'liked',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"],
            label: 'Liked'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold font-display text-foreground",
                        children: [
                            "@",
                            user.username
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isOwnProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: user.avatar,
                                alt: user.name,
                                className: "w-24 h-24 rounded-full object-cover ring-4 ring-primary/30"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            user.isVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-1 -right-1 bg-primary rounded-full p-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                    className: "h-5 w-5 text-primary-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-foreground mt-4 flex items-center gap-1",
                        children: [
                            user.name,
                            user.isVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                className: "h-5 w-5 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                lineNumber: 88,
                                columnNumber: 31
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-8 mt-4",
                        children: stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-bold text-foreground",
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, stat.label, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isOwnProfile && address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-md mt-6 p-4 rounded-xl bg-card border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                        className: "h-5 w-5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-sm",
                                        children: "Wallet Address"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 bg-background rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "text-xs text-muted-foreground flex-1 truncate",
                                        children: address
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "h-8 w-8 flex-shrink-0",
                                        onClick: ()=>copyToClipboard(address),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "h-8 w-8 flex-shrink-0",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://basescan.org/address/${address}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            dbUser?.walletId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mt-2",
                                children: [
                                    "Wallet ID: ",
                                    dbUser.walletId.slice(0, 20),
                                    "..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mt-6 w-full max-w-xs",
                        children: isOwnProfile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "secondary",
                                    className: "flex-1",
                                    children: "Edit Profile"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "secondary",
                                    size: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1', !isFollowing && 'gradient-primary border-0'),
                                    variant: isFollowing ? 'secondary' : 'default',
                                    onClick: ()=>setIsFollowing(!isFollowing),
                                    children: isFollowing ? 'Following' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                className: "h-4 w-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                                lineNumber: 163,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Follow"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "secondary",
                                    className: "flex-1",
                                    children: "Message"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground text-center mt-4 max-w-xs",
                        children: "Live shopping enthusiast 🛍️ | Fashion & Tech | Drop in to see what's new!"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex",
                    children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab(tab.id),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1 flex items-center justify-center gap-2 py-3 border-b-2 transition-colors', activeTab === tab.id ? 'border-foreground text-foreground' : 'border-transparent text-muted-foreground'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                lineNumber: 195,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, tab.id, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-0.5 p-0.5",
                children: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aspect-[3/4] bg-secondary relative overflow-hidden group cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `https://images.unsplash.com/photo-${1550000000000 + i * 10000}?w=300&h=400&fit=crop`,
                                alt: `Content ${i}`,
                                className: "w-full h-full object-cover group-hover:scale-105 transition-transform",
                                onError: (e)=>{
                                    e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop';
                                }
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-foreground font-semibold",
                                    children: "View"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/ProfileView.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProfileView, "4pGg5i+22szXzZjPEaXZif8p9Wo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$lib$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvmAddress"],
        __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = ProfileView;
var _c;
__turbopack_context__.k.register(_c, "ProfileView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/badge.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/LandingPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingPage",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
'use client';
;
;
;
;
const LandingPage = ({ onGetStarted })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background text-foreground overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "relative z-10 border-b border-border/40 backdrop-blur-xl bg-background/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4 py-4 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                className: "w-6 h-6 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                                lineNumber: 25,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-display text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
                                            children: "ShopAlive"
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: onGetStarted,
                                    size: "lg",
                                    className: "bg-gradient-to-r from-primary to-accent hover:opacity-90",
                                    children: "Launch App"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 container mx-auto px-4 pt-20 pb-32",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto text-center space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    className: "bg-primary/10 text-primary border-primary/30 px-4 py-2 animate-pulse-ring",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "The Future of Social Shopping"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-display text-5xl md:text-7xl font-bold leading-tight",
                                    children: [
                                        "Shop Live,",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient",
                                            children: "Shop Easy"
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto",
                                    children: "Discover products through live streams, connect with sellers in real-time, and checkout instantly."
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: onGetStarted,
                                            size: "lg",
                                            className: "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 h-14 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    className: "w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Start Shopping Live"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            variant: "outline",
                                            className: "border-2 border-primary/30 hover:border-primary text-lg px-8 h-14",
                                            children: [
                                                "Watch Demo",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-5 h-5 ml-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12",
                                    children: [
                                        {
                                            label: "Live Streams",
                                            value: "10K+"
                                        },
                                        {
                                            label: "Active Users",
                                            value: "50K+"
                                        },
                                        {
                                            label: "Products",
                                            value: "100K+"
                                        }
                                    ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-display text-3xl md:text-4xl font-bold text-primary",
                                                    children: stat.value
                                                }, void 0, false, {
                                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: stat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, stat.label, true, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative py-24 bg-card/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-4 mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-4xl md:text-5xl font-bold",
                                    children: "Why Choose ShopAlive?"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                                    children: "Experience shopping like never before with our innovative live streaming platform"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",
                            children: [
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"],
                                    title: "Live Shopping",
                                    description: "Watch products in action through live streams. See how they work, ask questions, and make informed decisions.",
                                    gradient: "from-primary to-orange-500"
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                                    title: "Instant Checkout",
                                    description: "One-tap checkout with secure payment. No hassle, no waiting. Get what you want instantly.",
                                    gradient: "from-accent to-pink-500"
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                    title: "Social Commerce",
                                    description: "Connect with sellers and other shoppers. Share your finds, get recommendations, build community.",
                                    gradient: "from-purple-500 to-accent"
                                }
                            ].map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,53,0.2)] overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                                className: "w-7 h-7 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-display text-2xl font-bold mb-3",
                                            children: feature.title
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground leading-relaxed",
                                            children: feature.description
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, feature.title, true, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-4 mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-4xl md:text-5xl font-bold",
                                    children: "How It Works"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                                    children: "Start shopping live in three simple steps"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-12 max-w-5xl mx-auto",
                            children: [
                                {
                                    step: "01",
                                    title: "Browse Live Streams",
                                    description: "Explore live shopping streams from your favorite sellers and brands"
                                },
                                {
                                    step: "02",
                                    title: "Interact & Shop",
                                    description: "Chat with sellers, ask questions, and add products to your cart in real-time"
                                },
                                {
                                    step: "03",
                                    title: "Checkout Instantly",
                                    description: "Complete your purchase with one tap using secure, instant checkout"
                                }
                            ].map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative text-center",
                                    children: [
                                        index < 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mb-6 font-display text-3xl font-bold text-white",
                                            children: step.step
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-display text-2xl font-bold mb-3",
                                            children: step.title
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground",
                                            children: step.description
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, step.step, true, {
                                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-card/50 border border-primary/30 backdrop-blur-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                className: "w-16 h-16 mx-auto text-primary animate-float"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-4xl md:text-5xl font-bold",
                                children: "Ready to Start Shopping?"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                                children: "Join thousands of shoppers discovering amazing products through live streams"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onGetStarted,
                                size: "lg",
                                className: "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-12 h-16 text-white group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "w-6 h-6 mr-2 group-hover:scale-110 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Launch ShopAlive"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "relative py-12 border-t border-border/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-display text-xl font-bold",
                                        children: "ShopAlive"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "© 2025 ShopAlive. All rights reserved."
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/LandingPage.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LandingPage;
var _c;
__turbopack_context__.k.register(_c, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/dialog.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/ui/dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/ui/dialog.tsx",
                                lineNumber: 46,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/ui/dialog.tsx",
                                lineNumber: 47,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/ui/dialog.tsx",
                        lineNumber: 45,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/ui/dialog.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/dialog.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/dialog.tsx",
        lineNumber: 55,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/dialog.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/dialog.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/SignInModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInModal",
    ()=>SignInModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$AuthButton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-react/dist/components/AuthButton/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
'use client';
;
;
;
;
const SignInModal = ({ open, onOpenChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                    className: "w-8 h-8 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/components/SignInModal.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/components/SignInModal.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/SignInModal.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-center text-2xl",
                            children: "Sign In to Go Live"
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/SignInModal.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "text-center",
                            children: "Create your profile to start streaming and showcase your products"
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/SignInModal.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/shopalive/shopalive/src/components/SignInModal.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$react$2f$dist$2f$components$2f$AuthButton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthButton"], {}, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/SignInModal.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground text-center",
                            children: "By signing in, you agree to our Terms of Service and Privacy Policy"
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/components/SignInModal.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/shopalive/shopalive/src/components/SignInModal.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/shopalive/shopalive/src/components/SignInModal.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/SignInModal.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SignInModal;
var _c;
__turbopack_context__.k.register(_c, "SignInModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const ScrollArea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/ui/scroll-area.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/ui/scroll-area.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/ui/scroll-area.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/scroll-area.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = ScrollArea;
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ScrollBar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/shopalive/shopalive/src/components/ui/scroll-area.tsx",
            lineNumber: 33,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/shopalive/shopalive/src/components/ui/scroll-area.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = ScrollBar;
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"].displayName;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrollArea$React.forwardRef");
__turbopack_context__.k.register(_c1, "ScrollArea");
__turbopack_context__.k.register(_c2, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/components/CartModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartModal",
    ()=>CartModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$PaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/PaymentModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const CartModal = ({ items, onClose, onRemoveItem, onUpdateQuantity, onClearCart })=>{
    _s();
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const subtotal = items.reduce((sum, item)=>sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;
    const handleCheckout = ()=>{
        if (items.length === 0) return;
        // For now, just show a success message
        toast({
            title: "Checkout Initiated! 🛍️",
            description: `Total: $${total.toFixed(2)} for ${items.length} items`
        });
        onClearCart();
        onClose();
    };
    const handleBuyNow = (item)=>{
        setSelectedProduct(item);
    };
    const handlePaymentSuccess = ()=>{
        if (selectedProduct) {
            onRemoveItem(selectedProduct.id);
            setSelectedProduct(null);
            toast({
                title: "Payment Successful! 🎉",
                description: `You've purchased ${selectedProduct.name}`
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 animate-in fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        onClick: onClose
                    }, void 0, false, {
                        fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-0 bottom-0 w-full max-w-md glass border-l border-border animate-in slide-in-from-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-4 border-b border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                className: "h-5 w-5 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-foreground",
                                                children: "Shopping Cart"
                                            }, void 0, false, {
                                                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    "(",
                                                    items.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: onClose,
                                        className: "rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center h-[calc(100%-8rem)] p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            className: "h-10 w-10 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-foreground mb-2",
                                        children: "Your cart is empty"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-center",
                                        children: "Add items from live streams to get started!"
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                        className: "h-[calc(100%-16rem)] p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3 p-3 glass rounded-xl slide-up",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: item.image,
                                                            alt: item.name,
                                                            className: "w-20 h-20 rounded-lg object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-foreground truncate",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground truncate",
                                                                    children: [
                                                                        "by ",
                                                                        item.seller.name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                    lineNumber: 112,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-primary font-bold",
                                                                            children: [
                                                                                "$",
                                                                                item.price
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                            lineNumber: 116,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        item.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-muted-foreground text-xs line-through",
                                                                            children: [
                                                                                "$",
                                                                                item.originalPrice
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                            lineNumber: 118,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                    lineNumber: 115,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mt-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 glass rounded-lg",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    size: "sm",
                                                                                    variant: "ghost",
                                                                                    className: "h-6 w-6 p-0",
                                                                                    onClick: ()=>onUpdateQuantity(item.id, Math.max(1, item.quantity - 1)),
                                                                                    children: "-"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                                    lineNumber: 125,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-medium w-6 text-center",
                                                                                    children: item.quantity
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                                    lineNumber: 135,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    size: "sm",
                                                                                    variant: "ghost",
                                                                                    className: "h-6 w-6 p-0",
                                                                                    onClick: ()=>onUpdateQuantity(item.id, item.quantity + 1),
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                                    lineNumber: 138,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                            lineNumber: 124,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            size: "sm",
                                                                            variant: "ghost",
                                                                            className: "h-6 px-2",
                                                                            onClick: ()=>handleBuyNow(item),
                                                                            children: "Buy Now"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                            lineNumber: 147,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            className: "h-8 w-8 text-destructive hover:text-destructive",
                                                            onClick: ()=>onRemoveItem(item.id),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-background/95 backdrop-blur",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground",
                                                                children: "Subtotal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-foreground",
                                                                children: [
                                                                    "$",
                                                                    subtotal.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground",
                                                                children: "Tax (10%)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-foreground",
                                                                children: [
                                                                    "$",
                                                                    tax.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-lg font-bold pt-2 border-t border-border",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-foreground",
                                                                children: "Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-primary",
                                                                children: [
                                                                    "$",
                                                                    total.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "w-full gradient-primary border-0 glow",
                                                size: "lg",
                                                onClick: handleCheckout,
                                                children: [
                                                    "Checkout (",
                                                    items.length,
                                                    " ",
                                                    items.length === 1 ? 'item' : 'items',
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            selectedProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$PaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentModal"], {
                product: selectedProduct,
                onClose: ()=>setSelectedProduct(null),
                onSuccess: handlePaymentSuccess
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/components/CartModal.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(CartModal, "of5pEiih202pvJ0G0s9wPVOzrbs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = CartModal;
var _c;
__turbopack_context__.k.register(_c, "CartModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/views/Index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$LiveFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/LiveFeed.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$BottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/BottomNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$TopTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/TopTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$WishlistView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/WishlistView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$DiscoverView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/DiscoverView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ProfileView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ProfileView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$LandingPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/LandingPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$SignInModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/SignInModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/toaster.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$CartModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/CartModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopalive/shopalive/node_modules/@coinbase/cdp-hooks/dist/esm/index5.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const Index = ()=>{
    _s();
    const [showLanding, setShowLanding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    const [feedTab, setFeedTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('foryou');
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showCart, setShowCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSignIn, setShowSignIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const isSignedIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsSignedIn"])();
    const isAuthenticated = isSignedIn;
    const handleTabChange = (tab)=>{
        if ((tab === 'create' || tab === 'profile') && !isAuthenticated) {
            setShowSignIn(true);
            return;
        }
        setActiveTab(tab);
    };
    if (showLanding) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$LandingPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPage"], {
            onGetStarted: ()=>setShowLanding(false)
        }, void 0, false, {
            fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
            lineNumber: 39,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    const addToCart = (product)=>{
        setCartItems((prev)=>{
            const existing = prev.find((item)=>item.id === product.id);
            if (existing) {
                toast({
                    title: "Updated Cart",
                    description: `${product.name} quantity increased`
                });
                return prev.map((item)=>item.id === product.id ? {
                        ...item,
                        quantity: item.quantity + 1
                    } : item);
            }
            toast({
                title: "Added to Cart! 🛒",
                description: `${product.name} has been added to your cart`
            });
            return [
                ...prev,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });
    };
    const removeFromCart = (id)=>{
        setCartItems((prev)=>prev.filter((item)=>item.id !== id));
        toast({
            title: "Removed from Cart",
            description: "Item has been removed from your cart"
        });
    };
    const updateQuantity = (id, quantity)=>{
        setCartItems((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    quantity
                } : item));
    };
    const clearCart = ()=>{
        setCartItems([]);
    };
    const cartItemCount = cartItems.reduce((sum, item)=>sum + item.quantity, 0);
    const renderContent = ()=>{
        switch(activeTab){
            case 'home':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 left-0 right-0 z-30 flex justify-between items-center px-4 safe-area-top",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$TopTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopTabs"], {
                                    activeTab: feedTab,
                                    onTabChange: setFeedTab
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "relative glass rounded-full",
                                    onClick: ()=>setShowCart(true),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        cartItemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center",
                                            children: cartItemCount > 99 ? '99+' : cartItemCount
                                        }, void 0, false, {
                                            fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$LiveFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveFeed"], {
                            streams: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockLiveStreams"],
                            onAddToCart: addToCart
                        }, void 0, false, {
                            fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'discover':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$DiscoverView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiscoverView"], {
                    streams: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockLiveStreams"],
                    sellers: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockSellers"],
                    onStreamClick: (stream)=>{
                        console.log('Navigate to stream:', stream.id);
                        setActiveTab('home');
                    },
                    onSellerClick: (seller)=>{
                        console.log('Navigate to seller:', seller.id);
                    }
                }, void 0, false, {
                    fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'wishlist':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$WishlistView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WishlistView"], {
                    items: __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockWishlist"],
                    onRemove: (id)=>console.log('Remove:', id),
                    onBuy: (item)=>console.log('Buy:', item)
                }, void 0, false, {
                    fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'profile':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ProfileView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileView"], {
                    isOwnProfile: true
                }, void 0, false, {
                    fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                    lineNumber: 133,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'create':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 glow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-4xl",
                                    children: "📹"
                                }, void 0, false, {
                                    fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-foreground mb-2",
                                children: "Go Live"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground max-w-xs mx-auto",
                                children: "Start streaming and showcase your products to thousands of viewers!"
                            }, void 0, false, {
                                fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-screen overflow-hidden bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "h-full pb-16",
                children: renderContent()
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$BottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomNav"], {
                activeTab: activeTab,
                onTabChange: handleTabChange
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$SignInModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInModal"], {
                open: showSignIn,
                onOpenChange: setShowSignIn
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showCart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$CartModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartModal"], {
                items: cartItems,
                onClose: ()=>setShowCart(false),
                onRemoveItem: removeFromCart,
                onUpdateQuantity: updateQuantity,
                onClearCart: clearCart
            }, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopalive/shopalive/src/views/Index.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Index, "ycKmJhd2EvomeoohfGX3VRDaBeo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$shopalive$2f$shopalive$2f$node_modules$2f40$coinbase$2f$cdp$2d$hooks$2f$dist$2f$esm$2f$index5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsSignedIn"]
    ];
});
_c = Index;
const __TURBOPACK__default__export__ = Index;
var _c;
__turbopack_context__.k.register(_c, "Index");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopalive/shopalive/src/views/Index.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/shopalive/shopalive/src/views/Index.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=shopalive_shopalive_src_10d7cab4._.js.map