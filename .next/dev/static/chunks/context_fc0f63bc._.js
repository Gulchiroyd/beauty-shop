(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/context/cart-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const addItem = (newItem)=>{
        setItems((prev)=>{
            const existing = prev.find((item)=>item.id === newItem.id);
            if (existing) {
                return prev.map((item)=>item.id === newItem.id ? {
                        ...item,
                        quantity: item.quantity + newItem.quantity
                    } : item);
            }
            return [
                ...prev,
                newItem
            ];
        });
    };
    const removeItem = (id)=>{
        setItems((prev)=>prev.filter((item)=>item.id !== id));
    };
    const updateQuantity = (id, quantity)=>{
        if (quantity <= 0) {
            removeItem(id);
            return;
        }
        setItems((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    quantity
                } : item));
    };
    const clearCart = ()=>{
        setItems([]);
    };
    const total = items.reduce((sum, item)=>sum + item.price * item.quantity, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            items,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            total
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/cart-context.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(CartProvider, "6WAym07vHedVzpAy8bFDJKqtv8I=");
_c = CartProvider;
function useCart() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
}
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/language-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const translations = {
    uz: {
        home: "Bosh sahifa",
        shop: "Do'kon",
        about: "Biz haqida",
        contact: "Bog'lanish",
        cart: "Savat",
        wishlist: "Sevimli",
        search: "Qidirish",
        categories: "Kategoriyalar",
        skincare: "Teri parvarishi",
        makeup: "Makiyaj",
        powder: "Pudra",
        creams: "Kremlar",
        add_to_cart: "Savatga qo'shish",
        checkout: "Rasmdiy rasmiylashtirish",
        price: "Narx",
        rating: "Reyting",
        new_arrival: "Yangi kelgan",
        special_offer: "Maxsus taklif",
        lips: "Lablar",
        eyes: "Ko'zlar",
        face: "Yuz",
        foundation: "Podlova",
        serums: "Serumlari",
        rhode: "Rhode",
        rare_beauty: "Rare Beauty",
        kylie: "Kylie Cosmetics",
        shop_by_brand: "Brend bo'yicha xarid qiling",
        featured_from_brand: "Bu brenddan mashhur",
        new_from_brand: "Bu brenddan yangi",
        price_uzs: "so'm",
        delivery_country: "O'zbekiston bo'ylab yetkazib berish",
        available_only_uzbekistan: "Faqat O'zbekistonda mavjud"
    },
    en: {
        home: "Home",
        shop: "Shop",
        about: "About",
        contact: "Contact",
        cart: "Cart",
        wishlist: "Wishlist",
        search: "Search",
        categories: "Categories",
        skincare: "Skincare",
        makeup: "Makeup",
        powder: "Powder",
        creams: "Creams",
        add_to_cart: "Add to Cart",
        checkout: "Checkout",
        price: "Price",
        rating: "Rating",
        new_arrival: "New Arrival",
        special_offer: "Special Offer",
        lips: "Lips",
        eyes: "Eyes",
        face: "Face",
        foundation: "Foundation",
        serums: "Serums",
        rhode: "Rhode",
        rare_beauty: "Rare Beauty",
        kylie: "Kylie Cosmetics",
        shop_by_brand: "Shop by Brand",
        featured_from_brand: "Featured from this brand",
        new_from_brand: "New from this brand",
        price_uzs: "UZS",
        delivery_country: "Delivery throughout Uzbekistan",
        available_only_uzbekistan: "Available only in Uzbekistan"
    },
    ru: {
        home: "Главная",
        shop: "Магазин",
        about: "О нас",
        contact: "Контакт",
        cart: "Корзина",
        wishlist: "Избранное",
        search: "Поиск",
        categories: "Категории",
        skincare: "Уход за кожей",
        makeup: "Макияж",
        powder: "Пудра",
        creams: "Кремы",
        add_to_cart: "Добавить в корзину",
        checkout: "Оформить заказ",
        price: "Цена",
        rating: "Рейтинг",
        new_arrival: "Новое поступление",
        special_offer: "Специальное предложение",
        lips: "Губы",
        eyes: "Глаза",
        face: "Лицо",
        foundation: "Основа",
        serums: "Сыворотки",
        rhode: "Rhode",
        rare_beauty: "Rare Beauty",
        kylie: "Kylie Cosmetics",
        shop_by_brand: "Покупайте по брендам",
        featured_from_brand: "Популярное от этого бренда",
        new_from_brand: "Новое от этого бренда",
        price_uzs: "UZS",
        delivery_country: "Доставка по Узбекистану",
        available_only_uzbekistan: "Доступно только в Узбекистане"
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/language-context.tsx",
        lineNumber: 128,
        columnNumber: 10
    }, this);
}
_s(LanguageProvider, "JgNS4s3wc06/6u6z+Ak7Ai5ELN8=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=context_fc0f63bc._.js.map