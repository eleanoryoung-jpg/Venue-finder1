"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _React = React,
  useState = _React.useState,
  useMemo = _React.useMemo,
  useEffect = _React.useEffect,
  useCallback = _React.useCallback,
  useRef = _React.useRef;

// ═══ CONSTANTS ═══
var REGIONS = {
  "Northeast": ["New York", "Boston", "Philadelphia", "Washington DC", "Pittsburgh"],
  "Southeast": ["Atlanta", "Miami", "Charlotte", "Nashville", "Raleigh"],
  "Midwest": ["Chicago", "Detroit", "Minneapolis", "Columbus", "Indianapolis"],
  "Southwest": ["Dallas", "Houston", "Austin", "Phoenix", "Denver"],
  "West Coast": ["San Francisco", "Los Angeles", "Seattle", "Portland", "San Diego"]
};
var EVENT_SIZES = ["Intimate (8-20)", "Mid-size (20-50)", "Large (50-100+)"];
var STATUSES = ["Prospect", "Contacted", "Booked", "Used", "Archived"];
var STATUS_COLORS = {
  Prospect: "#6B6B65",
  Contacted: "#2A7A5A",
  Booked: "#0A0A0A",
  Used: "#1A5C3A",
  Archived: "#AAAAAA"
};
var STORAGE_KEY = "venue-tracker-data-v2";
var API_KEY_STORAGE = "venue-tracker-api-key";
var DISCOVER_TYPES = [{
  value: "upscale restaurants with private dining rooms",
  label: "Upscale restaurants with private dining"
}, {
  value: "Michelin star restaurants with private dining rooms",
  label: "Michelin Star restaurants"
}, {
  value: "fine dining restaurants for executive dinners",
  label: "Fine dining for executive dinners"
}, {
  value: "trendy restaurants with event spaces for networking",
  label: "Trendy venues for networking events"
}, {
  value: "restaurants and venues with large private event spaces for 50+ guests",
  label: "Large event spaces (50+)"
}];
var loadVenues = function loadVenues() {
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
    // try migrating old data
    var old = localStorage.getItem("venue-tracker-data");
    if (old) {
      var parsed = JSON.parse(old);
      return parsed.map(function (v) {
        return _objectSpread(_objectSpread({}, v), {}, {
          visited: v.status === "Visited" ? true : false,
          website: v.website || ""
        });
      });
    }
  } catch (e) {}
  return [{
    id: 1,
    name: "The Capital Grille",
    city: "New York",
    region: "Northeast",
    eventSizes: ["Intimate (8-20)", "Mid-size (20-50)"],
    pricePerHead: 185,
    privateRoom: true,
    av: false,
    dietary: true,
    exclusivity: 4,
    status: "Used",
    visited: true,
    website: "https://www.thecapitalgrille.com",
    notes: "Excellent private dining room on 2nd floor. Sommelier very attentive. Used for Q3 CISO dinner — great feedback.",
    contact: "Sarah M.",
    phone: "(212) 555-0134",
    lastUsed: "2025-09-15",
    rating: 5
  }, {
    id: 2,
    name: "RPM Italian",
    city: "Chicago",
    region: "Midwest",
    eventSizes: ["Intimate (8-20)", "Mid-size (20-50)"],
    pricePerHead: 165,
    privateRoom: true,
    av: false,
    dietary: true,
    exclusivity: 5,
    status: "Used",
    visited: true,
    website: "https://www.rpmrestaurants.com/rpm-italian",
    notes: "Hard to get the private room — book 6+ weeks out. Celebrity chef kitchen. Clients love it.",
    contact: "Marco D.",
    phone: "(312) 555-0198",
    lastUsed: "2025-08-22",
    rating: 5
  }, {
    id: 3,
    name: "Nobu Dallas",
    city: "Dallas",
    region: "Southwest",
    eventSizes: ["Intimate (8-20)", "Mid-size (20-50)", "Large (50-100+)"],
    pricePerHead: 210,
    privateRoom: true,
    av: true,
    dietary: true,
    exclusivity: 5,
    status: "Booked",
    visited: false,
    website: "https://www.noburestaurants.com/dallas",
    notes: "Booked for Feb exec dinner. Multiple private spaces available. AV in the larger room.",
    contact: "Jennifer L.",
    phone: "(214) 555-0267",
    lastUsed: "",
    rating: 0
  }, {
    id: 4,
    name: "The Sloane",
    city: "San Francisco",
    region: "West Coast",
    eventSizes: ["Mid-size (20-50)", "Large (50-100+)"],
    pricePerHead: 140,
    privateRoom: true,
    av: true,
    dietary: true,
    exclusivity: 3,
    status: "Contacted",
    visited: true,
    website: "",
    notes: "Modern event space with great AV setup. Rooftop option for cocktail hour. Good for product launch events.",
    contact: "David K.",
    phone: "(415) 555-0312",
    lastUsed: "",
    rating: 4
  }, {
    id: 5,
    name: "STK Atlanta",
    city: "Atlanta",
    region: "Southeast",
    eventSizes: ["Intimate (8-20)", "Mid-size (20-50)"],
    pricePerHead: 155,
    privateRoom: true,
    av: false,
    dietary: true,
    exclusivity: 4,
    status: "Prospect",
    visited: false,
    website: "https://www.stksteakhouse.com/venues/atlanta",
    notes: "Recommended by sales team. Upscale vibe, good energy. Need to do site visit.",
    contact: "",
    phone: "",
    lastUsed: "",
    rating: 0
  }, {
    id: 6,
    name: "Mbar at Mandarin Oriental",
    city: "Miami",
    region: "Southeast",
    eventSizes: ["Intimate (8-20)"],
    pricePerHead: 225,
    privateRoom: true,
    av: false,
    dietary: true,
    exclusivity: 5,
    status: "Contacted",
    visited: false,
    website: "",
    notes: "Ultra-premium. Perfect for C-suite intimate dinners. Ocean views. Waiting on private dining availability for March.",
    contact: "Isabella R.",
    phone: "(305) 555-0445",
    lastUsed: "",
    rating: 0
  }, {
    id: 7,
    name: "The Warehouse District Venue",
    city: "Minneapolis",
    region: "Midwest",
    eventSizes: ["Mid-size (20-50)", "Large (50-100+)"],
    pricePerHead: 95,
    privateRoom: true,
    av: true,
    dietary: true,
    exclusivity: 2,
    status: "Used",
    visited: true,
    website: "",
    notes: "Great value for larger field events. Industrial chic vibe. Full AV with projector and sound. Catering is flexible.",
    contact: "Tom H.",
    phone: "(612) 555-0178",
    lastUsed: "2025-07-10",
    rating: 4
  }, {
    id: 8,
    name: "Ocean Prime",
    city: "Denver",
    region: "Southwest",
    eventSizes: ["Intimate (8-20)", "Mid-size (20-50)"],
    pricePerHead: 170,
    privateRoom: true,
    av: false,
    dietary: true,
    exclusivity: 4,
    status: "Prospect",
    visited: false,
    website: "https://www.oceanprime.com",
    notes: "Corporate dining favorite in LoDo. Multiple private rooms. Need to reach out for pricing on 30-person events.",
    contact: "",
    phone: "",
    lastUsed: "",
    rating: 0
  }];
};
var guessRegion = function guessRegion(city) {
  var cl = city.toLowerCase();
  for (var _i = 0, _Object$entries = Object.entries(REGIONS); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      region = _Object$entries$_i[0],
      cities = _Object$entries$_i[1];
    if (cities.some(function (c) {
      return cl.includes(c.toLowerCase()) || c.toLowerCase().includes(cl);
    })) return region;
  }
  return "";
};
var emptyVenue = function emptyVenue() {
  return {
    id: Date.now(),
    name: "",
    city: "",
    region: "",
    eventSizes: [],
    pricePerHead: 0,
    privateRoom: false,
    av: false,
    dietary: false,
    exclusivity: 0,
    status: "Prospect",
    visited: false,
    website: "",
    notes: "",
    contact: "",
    phone: "",
    lastUsed: "",
    rating: 0
  };
};

// ═══ SHARED STYLES ═══
var sel = {
  padding: "8px 12px",
  borderRadius: 8,
  border: "1.5px solid #D8D8D0",
  background: "#FFFFFF",
  fontSize: 13,
  fontFamily: "'DM Sans',sans-serif",
  color: "#0A0A0A",
  outline: "none",
  cursor: "pointer",
  minWidth: 130,
  boxSizing: "border-box"
};
var inp = _objectSpread(_objectSpread({}, sel), {}, {
  cursor: "text",
  width: "100%"
});
var btnP = {
  padding: "10px 24px",
  borderRadius: 8,
  border: "none",
  background: "#0A0A0A",
  color: "#EBF245",
  fontSize: 13,
  fontFamily: "'DM Sans',sans-serif",
  fontWeight: 700,
  cursor: "pointer",
  letterSpacing: "0.02em"
};
var btnS = _objectSpread(_objectSpread({}, btnP), {}, {
  background: "transparent",
  color: "#0A0A0A",
  border: "1.5px solid #0A0A0A"
});
var lbl = {
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#6B6B65",
  fontFamily: "'DM Sans',sans-serif",
  fontWeight: 600
};

// ═══ REUSABLE ═══
var Stars = function Stars(_ref) {
  var rating = _ref.rating,
    onRate = _ref.onRate,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 16 : _ref$size,
    _ref$interactive = _ref.interactive,
    interactive = _ref$interactive === void 0 ? false : _ref$interactive;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2
    }
  }, [1, 2, 3, 4, 5].map(function (s) {
    return /*#__PURE__*/React.createElement("span", {
      key: s,
      onClick: function onClick() {
        return interactive && onRate && onRate(s);
      },
      style: {
        cursor: interactive ? "pointer" : "default",
        fontSize: size,
        color: s <= rating ? "#0A0A0A" : "#D0D0C8",
        transition: "color 0.15s",
        userSelect: "none"
      }
    }, "\u2605");
  }));
};
var Tag = function Tag(_ref2) {
  var children = _ref2.children,
    _ref2$color = _ref2.color,
    color = _ref2$color === void 0 ? "#0A0A0A" : _ref2$color,
    _ref2$filled = _ref2.filled,
    filled = _ref2$filled === void 0 ? false : _ref2$filled;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: 6,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.02em",
      background: filled ? color : "transparent",
      color: filled ? color === "0A0A0A" || color === "#0A0A0A" ? "#EBF245" : "#fff" : color,
      border: "1.5px solid ".concat(color),
      lineHeight: "20px",
      whiteSpace: "nowrap"
    }
  }, children);
};
var Toggle = function Toggle(_ref3) {
  var checked = _ref3.checked,
    onChange = _ref3.onChange,
    label = _ref3.label;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      cursor: "pointer",
      fontSize: 13,
      color: "#3A3A35"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return onChange(!checked);
    },
    style: {
      width: 36,
      height: 20,
      borderRadius: 10,
      background: checked ? "#0A0A0A" : "#D0D0C8",
      transition: "background 0.2s",
      position: "relative",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 8,
      background: checked ? "#EBF245" : "#fff",
      position: "absolute",
      top: 2,
      left: checked ? 18 : 2,
      transition: "left 0.2s",
      boxShadow: "0 1px 3px rgba(0,0,0,0.15)"
    }
  })), label);
};
var Spinner = function Spinner() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      border: "3px solid #E8E2D9",
      borderTopColor: "#8B7355",
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite",
      margin: "0 auto"
    }
  });
};

// ═══ MAIN APP ═══
function VenueTracker() {
  var _useState = useState(loadVenues),
    _useState2 = _slicedToArray(_useState, 2),
    venues = _useState2[0],
    setVenues = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    search = _useState4[0],
    setSearch = _useState4[1];
  var _useState5 = useState("All"),
    _useState6 = _slicedToArray(_useState5, 2),
    filterRegion = _useState6[0],
    setFilterRegion = _useState6[1];
  var _useState7 = useState("All"),
    _useState8 = _slicedToArray(_useState7, 2),
    filterSize = _useState8[0],
    setFilterSize = _useState8[1];
  var _useState9 = useState("All"),
    _useState10 = _slicedToArray(_useState9, 2),
    filterStatus = _useState10[0],
    setFilterStatus = _useState10[1];
  var _useState11 = useState("All"),
    _useState12 = _slicedToArray(_useState11, 2),
    filterVisited = _useState12[0],
    setFilterVisited = _useState12[1]; // "All" | "Yes" | "No"
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    filterPrivate = _useState14[0],
    setFilterPrivate = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    filterAV = _useState16[0],
    setFilterAV = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    filterDietary = _useState18[0],
    setFilterDietary = _useState18[1];
  var _useState19 = useState(0),
    _useState20 = _slicedToArray(_useState19, 2),
    filterExclusivity = _useState20[0],
    setFilterExclusivity = _useState20[1];
  var _useState21 = useState(300),
    _useState22 = _slicedToArray(_useState21, 2),
    budgetMax = _useState22[0],
    setBudgetMax = _useState22[1];
  var _useState23 = useState("name"),
    _useState24 = _slicedToArray(_useState23, 2),
    sortBy = _useState24[0],
    setSortBy = _useState24[1];
  var _useState25 = useState("grid"),
    _useState26 = _slicedToArray(_useState25, 2),
    view = _useState26[0],
    setView = _useState26[1];
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    selectedVenue = _useState28[0],
    setSelectedVenue = _useState28[1];
  var _useState29 = useState(false),
    _useState30 = _slicedToArray(_useState29, 2),
    isEditing = _useState30[0],
    setIsEditing = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    showAddForm = _useState32[0],
    setShowAddForm = _useState32[1];
  var _useState33 = useState(false),
    _useState34 = _slicedToArray(_useState33, 2),
    showDiscover = _useState34[0],
    setShowDiscover = _useState34[1];
  var _useState35 = useState(false),
    _useState36 = _slicedToArray(_useState35, 2),
    showSettings = _useState36[0],
    setShowSettings = _useState36[1];
  var _useState37 = useState(new Set()),
    _useState38 = _slicedToArray(_useState37, 2),
    compareIds = _useState38[0],
    setCompareIds = _useState38[1];

  // Discover state
  var _useState39 = useState(""),
    _useState40 = _slicedToArray(_useState39, 2),
    discoverCity = _useState40[0],
    setDiscoverCity = _useState40[1];
  var _useState41 = useState(DISCOVER_TYPES[0].value),
    _useState42 = _slicedToArray(_useState41, 2),
    discoverType = _useState42[0],
    setDiscoverType = _useState42[1];
  var _useState43 = useState([]),
    _useState44 = _slicedToArray(_useState43, 2),
    discoveredVenues = _useState44[0],
    setDiscoveredVenues = _useState44[1];
  var _useState45 = useState(false),
    _useState46 = _slicedToArray(_useState45, 2),
    isSearching = _useState46[0],
    setIsSearching = _useState46[1];
  var _useState47 = useState(""),
    _useState48 = _slicedToArray(_useState47, 2),
    searchError = _useState48[0],
    setSearchError = _useState48[1];
  var _useState49 = useState(new Set()),
    _useState50 = _slicedToArray(_useState49, 2),
    savedIds = _useState50[0],
    setSavedIds = _useState50[1];
  var _useState51 = useState("single"),
    _useState52 = _slicedToArray(_useState51, 2),
    searchMode = _useState52[0],
    setSearchMode = _useState52[1];
  var _useState53 = useState(""),
    _useState54 = _slicedToArray(_useState53, 2),
    batchCities = _useState54[0],
    setBatchCities = _useState54[1];
  var _useState55 = useState({
      current: 0,
      total: 0,
      currentCity: ""
    }),
    _useState56 = _slicedToArray(_useState55, 2),
    batchProgress = _useState56[0],
    setBatchProgress = _useState56[1];

  // AI Tools state
  var _useState57 = useState(null),
    _useState58 = _slicedToArray(_useState57, 2),
    aiModal = _useState58[0],
    setAiModal = _useState58[1];
  var _useState59 = useState(false),
    _useState60 = _slicedToArray(_useState59, 2),
    aiLoading = _useState60[0],
    setAiLoading = _useState60[1];
  var _useState61 = useState(""),
    _useState62 = _slicedToArray(_useState61, 2),
    aiResult = _useState62[0],
    setAiResult = _useState62[1];
  var _useState63 = useState({
      date: "",
      guestCount: 20,
      eventType: "Executive dinner",
      notes: ""
    }),
    _useState64 = _slicedToArray(_useState63, 2),
    emailForm = _useState64[0],
    setEmailForm = _useState64[1];
  var _useState65 = useState({
      accountName: "",
      city: "",
      guestCount: 30,
      budget: 5000,
      eventType: "Client appreciation dinner",
      goals: ""
    }),
    _useState66 = _slicedToArray(_useState65, 2),
    briefForm = _useState66[0],
    setBriefForm = _useState66[1];
  var _useState67 = useState({
      description: ""
    }),
    _useState68 = _slicedToArray(_useState67, 2),
    matchForm = _useState68[0],
    setMatchForm = _useState68[1];
  var _useState69 = useState({
      guestCount: 20,
      dietaryNeeds: "",
      preferences: ""
    }),
    _useState70 = _slicedToArray(_useState69, 2),
    menuForm = _useState70[0],
    setMenuForm = _useState70[1];
  var _useState71 = useState(null),
    _useState72 = _slicedToArray(_useState71, 2),
    aiVenueCtx = _useState72[0],
    setAiVenueCtx = _useState72[1];
  var _useState73 = useState("tracker"),
    _useState74 = _slicedToArray(_useState73, 2),
    mode = _useState74[0],
    setMode = _useState74[1]; // "tracker" | "aitools"

  var _useState75 = useState(function () {
      try {
        return localStorage.getItem(API_KEY_STORAGE) || "";
      } catch (e) {
        return "";
      }
    }),
    _useState76 = _slicedToArray(_useState75, 2),
    apiKey = _useState76[0],
    setApiKey = _useState76[1];

  // Persist venues
  useEffect(function () {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(venues));
    } catch (e) {}
  }, [venues]);
  var saveVenue = useCallback(function (v) {
    setVenues(function (p) {
      return p.map(function (x) {
        return x.id === v.id ? v : x;
      });
    });
    setSelectedVenue(v);
    setIsEditing(false);
  }, []);
  var addVenue = useCallback(function (v) {
    setVenues(function (p) {
      return [].concat(_toConsumableArray(p), [v]);
    });
    setShowAddForm(false);
    setSelectedVenue(v);
  }, []);
  var deleteVenue = useCallback(function (id) {
    setVenues(function (p) {
      return p.filter(function (v) {
        return v.id !== id;
      });
    });
    setSelectedVenue(null);
  }, []);
  var duplicateVenue = useCallback(function (v) {
    var dupe = _objectSpread(_objectSpread({}, v), {}, {
      id: Date.now(),
      name: "".concat(v.name, " (Copy)"),
      status: "Prospect",
      visited: false,
      lastUsed: "",
      rating: 0
    });
    setVenues(function (p) {
      return [].concat(_toConsumableArray(p), [dupe]);
    });
    setSelectedVenue(dupe);
  }, []);
  var filtered = useMemo(function () {
    var r = venues.filter(function (v) {
      if (search && !v.name.toLowerCase().includes(search.toLowerCase()) && !v.city.toLowerCase().includes(search.toLowerCase())) return false;
      if (filterRegion !== "All" && v.region !== filterRegion) return false;
      if (filterSize !== "All" && !v.eventSizes.includes(filterSize)) return false;
      if (filterStatus !== "All" && v.status !== filterStatus) return false;
      if (filterVisited === "Yes" && !v.visited) return false;
      if (filterVisited === "No" && v.visited) return false;
      if (filterPrivate && !v.privateRoom) return false;
      if (filterAV && !v.av) return false;
      if (filterDietary && !v.dietary) return false;
      if (filterExclusivity > 0 && v.exclusivity < filterExclusivity) return false;
      if (v.pricePerHead > budgetMax && v.pricePerHead > 0) return false;
      return true;
    });
    r.sort(function (a, b) {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.pricePerHead - b.pricePerHead;
      if (sortBy === "exclusivity") return b.exclusivity - a.exclusivity;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "city") return a.city.localeCompare(b.city);
      return 0;
    });
    return r;
  }, [venues, search, filterRegion, filterSize, filterStatus, filterVisited, filterPrivate, filterAV, filterDietary, filterExclusivity, budgetMax, sortBy]);
  var stats = useMemo(function () {
    return {
      total: venues.length,
      used: venues.filter(function (v) {
        return v.status === "Used";
      }).length,
      booked: venues.filter(function (v) {
        return v.status === "Booked";
      }).length,
      visited: venues.filter(function (v) {
        return v.visited;
      }).length,
      regions: new Set(venues.filter(function (v) {
        return v.region;
      }).map(function (v) {
        return v.region;
      })).size,
      avgPrice: venues.length ? Math.round(venues.reduce(function (a, v) {
        return a + v.pricePerHead;
      }, 0) / venues.length) : 0
    };
  }, [venues]);

  // ── Discover ──
  var searchOneCity = useCallback( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(city, vtype) {
      var res, t, data, txt, clean, parsed, m, s, e;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("/api/api-proxy", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                apiKey: apiKey,
                model: "claude-sonnet-4-20250514",
                max_tokens: 8192,
                messages: [{
                  role: "user",
                  content: "List 15-20 real, currently operating ".concat(vtype, " in ").concat(city, " suited for corporate dinners and executive events.\n\nReturn ONLY a raw JSON array. No markdown, no backticks, no explanation.\n\nEach object must have exactly these fields:\n{\"name\":\"Restaurant Name\",\"cuisine\":\"Type\",\"priceRange\":\"$$$$\",\"estimatedPricePerHead\":150,\"privateRoom\":true,\"capacity\":\"10-40 guests\",\"description\":\"1-2 sentences about why it's great for corporate events\",\"neighborhood\":\"Area/District\",\"knownFor\":\"Signature feature, award, or notable quality\",\"website\":\"https://... or empty string if unknown\",\"sources\":\"Known from Yelp, TripAdvisor, Google, OpenTable, Michelin, etc.\"}\n\nIMPORTANT RULES:\n- Only include REAL restaurants that currently exist\n- For the website field: include the restaurant's actual website URL if you are confident it is correct, otherwise use an empty string \u2014 do NOT guess\n- Return 15-20 venues\n- Output ONLY the JSON array, nothing else")
                }]
              })
            });
          case 2:
            res = _context.sent;
            if (res.ok) {
              _context.next = 10;
              break;
            }
            _context.next = 6;
            return res.text();
          case 6:
            t = _context.sent;
            if (!(res.status === 401)) {
              _context.next = 9;
              break;
            }
            throw new Error("Invalid API key.");
          case 9:
            throw new Error("API error ".concat(res.status));
          case 10:
            _context.next = 12;
            return res.json();
          case 12:
            data = _context.sent;
            txt = data.content.filter(function (b) {
              return b.type === "text";
            }).map(function (b) {
              return b.text;
            }).join("\n");
            if (txt.trim()) {
              _context.next = 16;
              break;
            }
            throw new Error("No results for ".concat(city));
          case 16:
            clean = txt.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
            parsed = null;
            try {
              parsed = JSON.parse(clean);
            } catch (e) {}
            if (!parsed) {
              m = clean.match(/\[\s*\{[\s\S]*\}\s*\]/);
              if (m) {
                try {
                  parsed = JSON.parse(m[0]);
                } catch (e) {}
              }
            }
            if (!parsed) {
              s = clean.indexOf("["), e = clean.lastIndexOf("]");
              if (s !== -1 && e > s) {
                try {
                  parsed = JSON.parse(clean.substring(s, e + 1));
                } catch (e) {}
              }
            }
            if (!(!parsed || !Array.isArray(parsed) || parsed.length === 0)) {
              _context.next = 23;
              break;
            }
            throw new Error("Could not parse results for ".concat(city));
          case 23:
            return _context.abrupt("return", parsed.map(function (v, i) {
              return {
                name: v.name || "Unknown",
                cuisine: v.cuisine || "",
                priceRange: v.priceRange || "$$$",
                estimatedPricePerHead: v.estimatedPricePerHead || 0,
                privateRoom: v.privateRoom !== false,
                capacity: v.capacity || "",
                description: v.description || "",
                neighborhood: v.neighborhood || "",
                knownFor: v.knownFor || "",
                website: v.website || "",
                sources: v.sources || "",
                city: city,
                _id: "disc-".concat(Date.now(), "-").concat(city.replace(/\s/g, ""), "-").concat(i)
              };
            }));
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }(), [apiKey]);
  var discoverVenues = useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var cities, errors, _loop, i;
    return _regeneratorRuntime().wrap(function _callee2$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (apiKey) {
            _context3.next = 3;
            break;
          }
          setShowSettings(true);
          return _context3.abrupt("return");
        case 3:
          cities = searchMode === "batch" ? batchCities.split(/[,\n]/).map(function (c) {
            return c.trim();
          }).filter(Boolean) : [discoverCity.trim()];
          if (!(!cities.length || !cities[0])) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return");
        case 6:
          setIsSearching(true);
          setSearchError("");
          setDiscoveredVenues([]);
          setSavedIds(new Set());
          setBatchProgress({
            current: 0,
            total: cities.length,
            currentCity: cities[0]
          });
          errors = [];
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
            var city, vs;
            return _regeneratorRuntime().wrap(function _loop$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  city = cities[i];
                  setBatchProgress({
                    current: i,
                    total: cities.length,
                    currentCity: city
                  });
                  _context2.prev = 2;
                  _context2.next = 5;
                  return searchOneCity(city, discoverType);
                case 5:
                  vs = _context2.sent;
                  setDiscoveredVenues(function (p) {
                    return [].concat(_toConsumableArray(p), _toConsumableArray(vs));
                  });
                  _context2.next = 12;
                  break;
                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2["catch"](2);
                  errors.push(city);
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _loop, null, [[2, 9]]);
          });
          i = 0;
        case 14:
          if (!(i < cities.length)) {
            _context3.next = 19;
            break;
          }
          return _context3.delegateYield(_loop(), "t0", 16);
        case 16:
          i++;
          _context3.next = 14;
          break;
        case 19:
          setBatchProgress(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, {
              current: cities.length
            });
          });
          if (errors.length > 0) setSearchError("Completed with errors. Could not search: ".concat(errors.join(", ")));
          setIsSearching(false);
        case 22:
        case "end":
          return _context3.stop();
      }
    }, _callee2);
  })), [discoverCity, discoverType, apiKey, searchMode, batchCities, searchOneCity]);
  var saveDiscovered = useCallback(function (dv) {
    var city = dv.city || discoverCity.trim();
    setVenues(function (p) {
      return [].concat(_toConsumableArray(p), [{
        id: Date.now() + Math.random(),
        name: dv.name,
        city: city,
        region: guessRegion(city),
        eventSizes: [],
        pricePerHead: dv.estimatedPricePerHead || 0,
        privateRoom: dv.privateRoom || false,
        av: false,
        dietary: false,
        exclusivity: dv.priceRange === "$$$$$" ? 5 : dv.priceRange === "$$$$" ? 4 : 3,
        status: "Prospect",
        visited: false,
        website: dv.website || "",
        notes: "".concat(dv.description || "", "\n\nNeighborhood: ").concat(dv.neighborhood || "—", "\nKnown for: ").concat(dv.knownFor || "—", "\nCuisine: ").concat(dv.cuisine || "—", "\nCapacity: ").concat(dv.capacity || "—").concat(dv.sources ? "\nFound on: ".concat(dv.sources) : "").trim(),
        contact: "",
        phone: "",
        lastUsed: "",
        rating: 0
      }]);
    });
    setSavedIds(function (p) {
      return new Set([].concat(_toConsumableArray(p), [dv._id]));
    });
  }, [discoverCity]);
  var exportCSV = useCallback(function () {
    var hdrs = ["Name", "City", "Region", "Website", "Price/Head", "Status", "Visited", "Private Room", "AV", "Dietary", "Exclusivity", "Rating", "Contact", "Phone", "Notes"];
    var rows = venues.map(function (v) {
      return [v.name, v.city, v.region, v.website || "", v.pricePerHead, v.status, v.visited ? "Yes" : "No", v.privateRoom ? "Yes" : "No", v.av ? "Yes" : "No", v.dietary ? "Yes" : "No", v.exclusivity, v.rating, v.contact, v.phone, "\"".concat((v.notes || "").replace(/"/g, '""'), "\"")];
    });
    var csv = [hdrs.join(",")].concat(_toConsumableArray(rows.map(function (r) {
      return r.join(",");
    }))).join("\n");
    var blob = new Blob([csv], {
      type: "text/csv"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "venue-tracker-export.csv";
    a.click();
    URL.revokeObjectURL(url);
  }, [venues]);
  var toggleCompare = useCallback(function (id) {
    setCompareIds(function (p) {
      var n = new Set(p);
      if (n.has(id)) n["delete"](id);else if (n.size < 5) n.add(id);
      return n;
    });
  }, []);

  // ── Venue photo fetcher ──
  var fetchVenuePhoto = useCallback( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(name, city) {
      var key, _data$photos, _data$photos2, query, res, data, url;
      return _regeneratorRuntime().wrap(function _callee3$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            key = "".concat(name, "-").concat(city);
            if (!photoCache[key]) {
              _context4.next = 3;
              break;
            }
            return _context4.abrupt("return", photoCache[key]);
          case 3:
            _context4.prev = 3;
            query = "".concat(name, " ").concat(city, " restaurant interior dining");
            _context4.next = 7;
            return fetch("".concat(PHOTOS_PROXY, "?query=").concat(encodeURIComponent(query), "&per_page=1"));
          case 7:
            res = _context4.sent;
            console.log("[Photo] ".concat(name, ": status ").concat(res.status));
            if (res.ok) {
              _context4.next = 12;
              break;
            }
            console.warn("[Photo] ".concat(name, ": failed with ").concat(res.status));
            return _context4.abrupt("return", null);
          case 12:
            _context4.next = 14;
            return res.json();
          case 14:
            data = _context4.sent;
            console.log("[Photo] ".concat(name, ": response"), data);
            url = (data === null || data === void 0 || (_data$photos = data.photos) === null || _data$photos === void 0 || (_data$photos = _data$photos[0]) === null || _data$photos === void 0 || (_data$photos = _data$photos.src) === null || _data$photos === void 0 ? void 0 : _data$photos.landscape) || (data === null || data === void 0 || (_data$photos2 = data.photos) === null || _data$photos2 === void 0 || (_data$photos2 = _data$photos2[0]) === null || _data$photos2 === void 0 || (_data$photos2 = _data$photos2.src) === null || _data$photos2 === void 0 ? void 0 : _data$photos2.large) || null;
            console.log("[Photo] ".concat(name, ": url ="), url);
            if (url) photoCache[key] = url;
            return _context4.abrupt("return", url);
          case 22:
            _context4.prev = 22;
            _context4.t0 = _context4["catch"](3);
            console.error("[Photo] ".concat(name, ": error"), _context4.t0);
            return _context4.abrupt("return", null);
          case 26:
          case "end":
            return _context4.stop();
        }
      }, _callee3, null, [[3, 22]]);
    }));
    return function (_x3, _x4) {
      return _ref6.apply(this, arguments);
    };
  }(), []);
  var callAI = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(prompt) {
      var maxTokens,
        res,
        data,
        _args5 = arguments;
      return _regeneratorRuntime().wrap(function _callee4$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            maxTokens = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : 4096;
            if (apiKey) {
              _context5.next = 4;
              break;
            }
            setShowSettings(true);
            return _context5.abrupt("return", null);
          case 4:
            _context5.next = 6;
            return fetch("/api/api-proxy", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                apiKey: apiKey,
                model: "claude-sonnet-4-20250514",
                max_tokens: maxTokens,
                messages: [{
                  role: "user",
                  content: prompt
                }]
              })
            });
          case 6:
            res = _context5.sent;
            if (res.ok) {
              _context5.next = 9;
              break;
            }
            throw new Error("API error ".concat(res.status));
          case 9:
            _context5.next = 11;
            return res.json();
          case 11:
            data = _context5.sent;
            return _context5.abrupt("return", data.content.filter(function (b) {
              return b.type === "text";
            }).map(function (b) {
              return b.text;
            }).join("\n"));
          case 13:
          case "end":
            return _context5.stop();
        }
      }, _callee4);
    }));
    return function callAI(_x5) {
      return _ref7.apply(this, arguments);
    };
  }();
  var generateEmail = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(venue) {
      var r;
      return _regeneratorRuntime().wrap(function _callee5$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            setAiLoading(true);
            setAiResult("");
            _context6.prev = 2;
            _context6.next = 5;
            return callAI("Draft a professional but warm outreach email to book a private event at this restaurant. Write 3 versions: Formal, Friendly, and Brief.\n\nVenue: ".concat(venue.name, " in ").concat(venue.city).concat(venue.website ? "\nWebsite: ".concat(venue.website) : "", "\nEvent date: ").concat(emailForm.date || "TBD", "\nGuest count: ").concat(emailForm.guestCount, "\nEvent type: ").concat(emailForm.eventType, "\nNotes: ").concat(emailForm.notes || "None", "\nContact: ").concat(venue.contact || "Events Manager", "\n\nFormat with \"--- VERSION 1: FORMAL ---\", \"--- VERSION 2: FRIENDLY ---\", \"--- VERSION 3: BRIEF ---\" headers. Sign off as \"[Your Name], Field Marketing\""));
          case 5:
            r = _context6.sent;
            setAiResult(r);
            _context6.next = 12;
            break;
          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](2);
            setAiResult("Error: " + _context6.t0.message);
          case 12:
            _context6.prev = 12;
            setAiLoading(false);
            return _context6.finish(12);
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee5, null, [[2, 9, 12, 15]]);
    }));
    return function generateEmail(_x6) {
      return _ref8.apply(this, arguments);
    };
  }();
  var generateBrief = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var cityVenues, r;
      return _regeneratorRuntime().wrap(function _callee6$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            setAiLoading(true);
            setAiResult("");
            cityVenues = venues.filter(function (v) {
              return v.city.toLowerCase().includes(briefForm.city.toLowerCase());
            });
            _context7.prev = 3;
            _context7.next = 6;
            return callAI("Create a comprehensive event brief for a field marketing dinner.\n\nAccount: ".concat(briefForm.accountName, "\nCity: ").concat(briefForm.city, "\nGuest count: ").concat(briefForm.guestCount, "\nTotal budget: $").concat(briefForm.budget, "\nEvent type: ").concat(briefForm.eventType, "\nGoals: ").concat(briefForm.goals || "Build relationships, generate pipeline", "\n\n").concat(cityVenues.length > 0 ? "Venues in our tracker for this city:\n".concat(cityVenues.map(function (v) {
              return "- ".concat(v.name, ": $").concat(v.pricePerHead, "/head, ").concat(v.privateRoom ? "private room" : "no private room", ", status: ").concat(v.status, ", rating: ").concat(v.rating, "/5").concat(v.website ? ", website: ".concat(v.website) : "");
            }).join("\n")) : "No venues in tracker for this city yet.", "\n\nCreate a brief with: 1. Event Overview, 2. Target Attendees, 3. Venue Recommendations (top 3 from tracker if available + 2 new suggestions), 4. Suggested Menu, 5. Budget Breakdown, 6. Run of Show, 7. Follow-up Plan, 8. Success Metrics"));
          case 6:
            r = _context7.sent;
            setAiResult(r);
            _context7.next = 13;
            break;
          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](3);
            setAiResult("Error: " + _context7.t0.message);
          case 13:
            _context7.prev = 13;
            setAiLoading(false);
            return _context7.finish(13);
          case 16:
          case "end":
            return _context7.stop();
        }
      }, _callee6, null, [[3, 10, 13, 16]]);
    }));
    return function generateBrief() {
      return _ref9.apply(this, arguments);
    };
  }();
  var generateComparison = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var sel, r;
      return _regeneratorRuntime().wrap(function _callee7$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            sel = venues.filter(function (v) {
              return compareIds.has(v.id);
            });
            if (!(sel.length < 2)) {
              _context8.next = 3;
              break;
            }
            return _context8.abrupt("return");
          case 3:
            setAiLoading(true);
            setAiResult("");
            _context8.prev = 5;
            _context8.next = 8;
            return callAI("Create a detailed side-by-side venue comparison for stakeholder review.\n\nVenues:\n".concat(sel.map(function (v, i) {
              return "VENUE ".concat(i + 1, ": ").concat(v.name, "\n- City: ").concat(v.city, " (").concat(v.region, ")\n- Price/head: $").concat(v.pricePerHead, "\n- Private room: ").concat(v.privateRoom ? "Yes" : "No", "\n- AV: ").concat(v.av ? "Yes" : "No", "\n- Dietary: ").concat(v.dietary ? "Yes" : "No", "\n- Exclusivity: ").concat(v.exclusivity, "/5\n- Rating: ").concat(v.rating, "/5\n- Status: ").concat(v.status, "\n- Visited: ").concat(v.visited ? "Yes" : "No", "\n- Website: ").concat(v.website || "Not listed", "\n- Notes: ").concat(v.notes || "None");
            }).join("\n\n"), "\n\nInclude: 1. Executive Summary, 2. Comparison Table, 3. Detailed Analysis per venue, 4. Cost comparison for 20 and 40 guests, 5. Recommendation with ranking, 6. Booking Notes"));
          case 8:
            r = _context8.sent;
            setAiResult(r);
            _context8.next = 15;
            break;
          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](5);
            setAiResult("Error: " + _context8.t0.message);
          case 15:
            _context8.prev = 15;
            setAiLoading(false);
            return _context8.finish(15);
          case 18:
          case "end":
            return _context8.stop();
        }
      }, _callee7, null, [[5, 12, 15, 18]]);
    }));
    return function generateComparison() {
      return _ref10.apply(this, arguments);
    };
  }();
  var generateMatch = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var r;
      return _regeneratorRuntime().wrap(function _callee8$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            setAiLoading(true);
            setAiResult("");
            _context9.prev = 2;
            _context9.next = 5;
            return callAI("You are a field marketing venue expert. Recommend the best venues from our tracker for this event.\n\nEvent: ".concat(matchForm.description, "\n\nOur venues:\n").concat(venues.map(function (v) {
              return "- ".concat(v.name, " (").concat(v.city, ", ").concat(v.region, "): $").concat(v.pricePerHead, "/head | Private: ").concat(v.privateRoom ? "Y" : "N", " | AV: ").concat(v.av ? "Y" : "N", " | Exclusivity: ").concat(v.exclusivity, "/5 | Rating: ").concat(v.rating, "/5 | Status: ").concat(v.status, " | Visited: ").concat(v.visited ? "Y" : "N", " | Sizes: ").concat(v.eventSizes.join(", ")).concat(v.website ? " | Web: ".concat(v.website) : "");
            }).join("\n"), "\n\nInclude: 1. Best Matches (top 3-5 with specific reasons), 2. Gaps (if nothing fits), 3. Logistics Tips"));
          case 5:
            r = _context9.sent;
            setAiResult(r);
            _context9.next = 12;
            break;
          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9["catch"](2);
            setAiResult("Error: " + _context9.t0.message);
          case 12:
            _context9.prev = 12;
            setAiLoading(false);
            return _context9.finish(12);
          case 15:
          case "end":
            return _context9.stop();
        }
      }, _callee8, null, [[2, 9, 12, 15]]);
    }));
    return function generateMatch() {
      return _ref11.apply(this, arguments);
    };
  }();
  var generateMenu = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(venue) {
      var r;
      return _regeneratorRuntime().wrap(function _callee9$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            setAiLoading(true);
            setAiResult("");
            _context10.prev = 2;
            _context10.next = 5;
            return callAI("Create a detailed menu plan for a corporate event.\n\nVenue: ".concat(venue.name, " in ").concat(venue.city).concat(venue.website ? "\nWebsite: ".concat(venue.website) : "", "\nPrice/head: $").concat(venue.pricePerHead, "\nGuest count: ").concat(menuForm.guestCount, "\nDietary needs: ").concat(menuForm.dietaryNeeds || "Mix — some vegetarian, potential gluten-free", "\nPreferences: ").concat(menuForm.preferences || "Upscale corporate dining", "\n\nInclude: 1. Pre-dinner cocktail hour, 2. 3-course menu with options, 3. Dietary accommodations, 4. Wine pairings, 5. Estimated cost breakdown, 6. Questions to ask the venue, 7. Things to confirm (minimums, fees, etc.)"));
          case 5:
            r = _context10.sent;
            setAiResult(r);
            _context10.next = 12;
            break;
          case 9:
            _context10.prev = 9;
            _context10.t0 = _context10["catch"](2);
            setAiResult("Error: " + _context10.t0.message);
          case 12:
            _context10.prev = 12;
            setAiLoading(false);
            return _context10.finish(12);
          case 15:
          case "end":
            return _context10.stop();
        }
      }, _callee9, null, [[2, 9, 12, 15]]);
    }));
    return function generateMenu(_x7) {
      return _ref12.apply(this, arguments);
    };
  }();

  // ── Components ──

  var AiModal = function AiModal() {
    if (!aiModal) return null;
    var titles = {
      email: "Draft Outreach Email",
      brief: "Event Brief Generator",
      compare: "Venue Comparison Report",
      match: "Smart Venue Matching",
      menu: "Dietary & Menu Planner"
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(44,38,34,0.5)",
        zIndex: 250,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(4px)"
      },
      onClick: function onClick(e) {
        if (e.target === e.currentTarget) {
          setAiModal(null);
          setAiResult("");
        }
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#FDFCFA",
        borderRadius: 16,
        width: 720,
        maxHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "24px 32px",
        borderBottom: "1px solid #E8E2D9",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 20,
        fontFamily: "'Playfair Display',serif",
        color: "#2C2622"
      }
    }, titles[aiModal]), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setAiModal(null);
        setAiResult("");
      },
      style: {
        background: "none",
        border: "none",
        fontSize: 20,
        cursor: "pointer",
        color: "#A09889"
      }
    }, "\u2715")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "24px 32px",
        overflowY: "auto",
        flex: 1
      }
    }, aiModal === "email" && !aiResult && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: "#5A5348",
        margin: 0
      }
    }, "Generating email for ", /*#__PURE__*/React.createElement("strong", null, aiVenueCtx === null || aiVenueCtx === void 0 ? void 0 : aiVenueCtx.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Event Date"), /*#__PURE__*/React.createElement("input", {
      type: "date",
      value: emailForm.date,
      onChange: function onChange(e) {
        return setEmailForm(_objectSpread(_objectSpread({}, emailForm), {}, {
          date: e.target.value
        }));
      },
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 4
      })
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Guest Count"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: emailForm.guestCount,
      onChange: function onChange(e) {
        return setEmailForm(_objectSpread(_objectSpread({}, emailForm), {}, {
          guestCount: +e.target.value
        }));
      },
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 4
      })
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Event Type"), /*#__PURE__*/React.createElement("select", {
      value: emailForm.eventType,
      onChange: function onChange(e) {
        return setEmailForm(_objectSpread(_objectSpread({}, emailForm), {}, {
          eventType: e.target.value
        }));
      },
      style: _objectSpread(_objectSpread({}, sel), {}, {
        marginTop: 4,
        width: "100%"
      })
    }, ["Executive dinner", "Client appreciation dinner", "Team celebration", "Product launch event", "Networking cocktail reception", "CISO/CIO roundtable dinner", "Prospect dinner"].map(function (o) {
      return /*#__PURE__*/React.createElement("option", {
        key: o
      }, o);
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Additional Notes"), /*#__PURE__*/React.createElement("textarea", {
      value: emailForm.notes,
      onChange: function onChange(e) {
        return setEmailForm(_objectSpread(_objectSpread({}, emailForm), {}, {
          notes: e.target.value
        }));
      },
      rows: 2,
      placeholder: "Any specific requests...",
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 4
      })
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return generateEmail(aiVenueCtx);
      },
      disabled: aiLoading,
      style: _objectSpread(_objectSpread({}, btnP), {}, {
        opacity: aiLoading ? .6 : 1
      })
    }, "Generate 3 Email Versions")), aiModal === "brief" && !aiResult && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Account / Client Name"), /*#__PURE__*/React.createElement("input", {
      value: briefForm.accountName,
      onChange: function onChange(e) {
        return setBriefForm(_objectSpread(_objectSpread({}, briefForm), {}, {
          accountName: e.target.value
        }));
      },
      placeholder: "e.g. Stripe, Databricks...",
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 4
      })
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "City"), /*#__PURE__*/React.createElement("input", {
      value: briefForm.city,
      onChange: function onChange(e) {
        return setBriefForm(_objectSpread(_objectSpread({}, briefForm), {}, {
          city: e.target.value
        }));
      },
      placeholder: "e.g. Austin",
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 4
      })
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Guest Count"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: briefForm.guestCount,
      onChange: function onChange(e) {
        return setBriefForm(_objectSpread(_objectSpread({}, briefForm), {}, {
          guestCount: +e.target.value
        }));
      },
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 4
      })
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Budget ($)"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: briefForm.budget,
      onChange: function onChange(e) {
        return setBriefForm(_objectSpread(_objectSpread({}, briefForm), {}, {
          budget: +e.target.value
        }));
      },
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 4
      })
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Event Type"), /*#__PURE__*/React.createElement("select", {
      value: briefForm.eventType,
      onChange: function onChange(e) {
        return setBriefForm(_objectSpread(_objectSpread({}, briefForm), {}, {
          eventType: e.target.value
        }));
      },
      style: _objectSpread(_objectSpread({}, sel), {}, {
        marginTop: 4,
        width: "100%"
      })
    }, ["Client appreciation dinner", "Executive roundtable", "Product launch", "Networking event", "CISO dinner", "Prospect dinner"].map(function (o) {
      return /*#__PURE__*/React.createElement("option", {
        key: o
      }, o);
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Goals & Context"), /*#__PURE__*/React.createElement("textarea", {
      value: briefForm.goals,
      onChange: function onChange(e) {
        return setBriefForm(_objectSpread(_objectSpread({}, briefForm), {}, {
          goals: e.target.value
        }));
      },
      rows: 2,
      placeholder: "What do you want to accomplish?",
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 4
      })
    })), /*#__PURE__*/React.createElement("button", {
      onClick: generateBrief,
      disabled: aiLoading || !briefForm.accountName || !briefForm.city,
      style: _objectSpread(_objectSpread({}, btnP), {}, {
        opacity: aiLoading || !briefForm.accountName || !briefForm.city ? .6 : 1
      })
    }, "Generate Event Brief")), aiModal === "match" && !aiResult && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: "#5A5348",
        margin: 0
      }
    }, "Describe your event and AI will recommend from your ", venues.length, " tracked venues."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Describe Your Event"), /*#__PURE__*/React.createElement("textarea", {
      value: matchForm.description,
      onChange: function onChange(e) {
        return setMatchForm(_objectSpread(_objectSpread({}, matchForm), {}, {
          description: e.target.value
        }));
      },
      rows: 4,
      placeholder: "e.g. CISO dinner in Chicago, 15 guests, $200/head, must have private room, high-end preferred.",
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 4
      })
    })), /*#__PURE__*/React.createElement("button", {
      onClick: generateMatch,
      disabled: aiLoading || !matchForm.description,
      style: _objectSpread(_objectSpread({}, btnP), {}, {
        opacity: aiLoading || !matchForm.description ? .6 : 1
      })
    }, "Find Best Matches")), aiModal === "compare" && !aiResult && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: "#5A5348",
        margin: "0 0 12px"
      }
    }, "Comparing ", compareIds.size, " venues:"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginBottom: 16
      }
    }, venues.filter(function (v) {
      return compareIds.has(v.id);
    }).map(function (v) {
      return /*#__PURE__*/React.createElement(Tag, {
        key: v.id,
        filled: true,
        color: "#8B7355"
      }, v.name, " \u2014 ", v.city);
    })), /*#__PURE__*/React.createElement("button", {
      onClick: generateComparison,
      disabled: aiLoading,
      style: _objectSpread(_objectSpread({}, btnP), {}, {
        opacity: aiLoading ? .6 : 1
      })
    }, "Generate Comparison Report")), aiModal === "menu" && !aiResult && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: "#5A5348",
        margin: 0
      }
    }, "Menu planning for ", /*#__PURE__*/React.createElement("strong", null, aiVenueCtx === null || aiVenueCtx === void 0 ? void 0 : aiVenueCtx.name), " ($", aiVenueCtx === null || aiVenueCtx === void 0 ? void 0 : aiVenueCtx.pricePerHead, "/head)"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Guest Count"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: menuForm.guestCount,
      onChange: function onChange(e) {
        return setMenuForm(_objectSpread(_objectSpread({}, menuForm), {}, {
          guestCount: +e.target.value
        }));
      },
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 4,
        maxWidth: 140
      })
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Dietary Needs"), /*#__PURE__*/React.createElement("textarea", {
      value: menuForm.dietaryNeeds,
      onChange: function onChange(e) {
        return setMenuForm(_objectSpread(_objectSpread({}, menuForm), {}, {
          dietaryNeeds: e.target.value
        }));
      },
      rows: 2,
      placeholder: "e.g. 3 vegetarian, 1 gluten-free, 1 nut allergy...",
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 4
      })
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Preferences"), /*#__PURE__*/React.createElement("textarea", {
      value: menuForm.preferences,
      onChange: function onChange(e) {
        return setMenuForm(_objectSpread(_objectSpread({}, menuForm), {}, {
          preferences: e.target.value
        }));
      },
      rows: 2,
      placeholder: "e.g. Japanese preferred, no raw fish, impressive dessert...",
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 4
      })
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return generateMenu(aiVenueCtx);
      },
      disabled: aiLoading,
      style: _objectSpread(_objectSpread({}, btnP), {}, {
        opacity: aiLoading ? .6 : 1
      })
    }, "Generate Menu Plan")), aiLoading && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "32px 0",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Spinner, null), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "#8B8279",
        fontSize: 14,
        marginTop: 16
      }
    }, "AI is working on it...")), aiResult && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        border: "1px solid #E8E2D9",
        borderRadius: 10,
        padding: 24,
        fontSize: 14,
        color: "#3D3832",
        lineHeight: 1.7,
        whiteSpace: "pre-wrap",
        maxHeight: 480,
        overflowY: "auto"
      }
    }, aiResult), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return navigator.clipboard.writeText(aiResult);
      },
      style: btnP
    }, "\uD83D\uDCCB Copy"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setAiResult("");
      },
      style: btnS
    }, "\u2190 Back"))))));
  };
  var SettingsModal = function SettingsModal() {
    var _useState77 = useState(apiKey),
      _useState78 = _slicedToArray(_useState77, 2),
      tmp = _useState78[0],
      setTmp = _useState78[1];
    var _useState79 = useState(""),
      _useState80 = _slicedToArray(_useState79, 2),
      testRes = _useState80[0],
      setTestRes = _useState80[1];
    var _useState81 = useState(false),
      _useState82 = _slicedToArray(_useState81, 2),
      testing = _useState82[0],
      setTesting = _useState82[1];
    var test = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var r;
        return _regeneratorRuntime().wrap(function _callee10$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              if (tmp.trim()) {
                _context11.next = 3;
                break;
              }
              setTestRes("❌ No key entered");
              return _context11.abrupt("return");
            case 3:
              setTesting(true);
              setTestRes("Testing...");
              _context11.prev = 5;
              _context11.next = 8;
              return fetch("/api/api-proxy", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  apiKey: tmp.trim(),
                  model: "claude-sonnet-4-20250514",
                  max_tokens: 50,
                  messages: [{
                    role: "user",
                    content: "Say hello in 3 words"
                  }]
                })
              });
            case 8:
              r = _context11.sent;
              setTestRes(r.ok ? "✅ Key is valid!" : "\u274C Error ".concat(r.status));
              _context11.next = 15;
              break;
            case 12:
              _context11.prev = 12;
              _context11.t0 = _context11["catch"](5);
              setTestRes("❌ Network error: " + _context11.t0.message);
            case 15:
              _context11.prev = 15;
              setTesting(false);
              return _context11.finish(15);
            case 18:
            case "end":
              return _context11.stop();
          }
        }, _callee10, null, [[5, 12, 15, 18]]);
      }));
      return function test() {
        return _ref13.apply(this, arguments);
      };
    }();
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(44,38,34,0.45)",
        zIndex: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(4px)"
      },
      onClick: function onClick(e) {
        if (e.target === e.currentTarget) setShowSettings(false);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#FDFCFA",
        borderRadius: 16,
        width: 520,
        padding: 36,
        boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "0 0 8px",
        fontFamily: "'Playfair Display',serif",
        color: "#2C2622",
        fontSize: 22
      }
    }, "Settings"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 24px",
        fontSize: 14,
        color: "#8B8279",
        lineHeight: 1.5
      }
    }, "The Discover and AI features use the Anthropic API. Get a key from ", /*#__PURE__*/React.createElement("a", {
      href: "https://console.anthropic.com/",
      target: "_blank",
      style: {
        color: "#8B7355"
      }
    }, "console.anthropic.com"), "."), /*#__PURE__*/React.createElement("label", {
      style: _objectSpread(_objectSpread({}, lbl), {}, {
        marginBottom: 6,
        display: "block"
      })
    }, "Anthropic API Key"), /*#__PURE__*/React.createElement("input", {
      type: "password",
      value: tmp,
      onChange: function onChange(e) {
        return setTmp(e.target.value);
      },
      placeholder: "sk-ant-...",
      style: _objectSpread(_objectSpread({}, inp), {}, {
        fontSize: 14,
        padding: "12px 16px",
        marginBottom: 4
      })
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12,
        color: "#A09889",
        margin: "0 0 16px"
      }
    }, "Stored locally in this browser only."), testRes && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
        fontSize: 13,
        background: testRes.startsWith("✅") ? "#F0F9F4" : testRes.startsWith("❌") ? "#FFF5F5" : "#FFF9EE",
        color: testRes.startsWith("✅") ? "#2D6A4F" : testRes.startsWith("❌") ? "#8B4444" : "#8B7355",
        border: "1px solid ".concat(testRes.startsWith("✅") ? "#B7E4C7" : testRes.startsWith("❌") ? "#E8C4C4" : "#E8D9B8")
      }
    }, testRes), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        var t = tmp.trim();
        setApiKey(t);
        try {
          localStorage.setItem(API_KEY_STORAGE, t);
        } catch (e) {}
        setShowSettings(false);
      },
      style: btnP
    }, "Save Key"), /*#__PURE__*/React.createElement("button", {
      onClick: test,
      disabled: testing,
      style: _objectSpread(_objectSpread({}, btnS), {}, {
        opacity: testing ? .6 : 1
      })
    }, testing ? "Testing..." : "Test Key"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowSettings(false);
      },
      style: btnS
    }, "Cancel"), apiKey && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setApiKey("");
        setTmp("");
        try {
          localStorage.removeItem(API_KEY_STORAGE);
        } catch (e) {}
      },
      style: _objectSpread(_objectSpread({}, btnS), {}, {
        color: "#C0392B",
        borderColor: "#C0392B",
        marginLeft: "auto"
      })
    }, "Remove Key"))));
  };
  var DetailPanel = function DetailPanel(_ref14) {
    var venue = _ref14.venue;
    var _useState83 = useState(_objectSpread({}, venue)),
      _useState84 = _slicedToArray(_useState83, 2),
      ed = _useState84[0],
      setEd = _useState84[1];
    var editing = isEditing;
    // Reset edit state when venue changes
    useEffect(function () {
      setEd(_objectSpread({}, venue));
    }, [venue.id]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        width: 520,
        height: "100vh",
        background: "#FDFCFA",
        borderLeft: "1px solid #E8E2D9",
        zIndex: 100,
        overflowY: "auto",
        boxShadow: "-8px 0 40px rgba(0,0,0,0.08)",
        animation: "slideInRight 0.25s ease"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "28px 32px",
        borderBottom: "1px solid #E8E2D9",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, editing ? /*#__PURE__*/React.createElement("input", {
      value: ed.name,
      onChange: function onChange(e) {
        return setEd(_objectSpread(_objectSpread({}, ed), {}, {
          name: e.target.value
        }));
      },
      style: _objectSpread(_objectSpread({}, inp), {}, {
        fontSize: 20,
        fontWeight: 600,
        fontFamily: "'Playfair Display',serif"
      })
    }) : /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 22,
        fontFamily: "'Playfair Display',serif",
        color: "#2C2622",
        fontWeight: 600
      }
    }, venue.name), editing ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: ed.city,
      onChange: function onChange(e) {
        return setEd(_objectSpread(_objectSpread({}, ed), {}, {
          city: e.target.value,
          region: guessRegion(e.target.value) || ed.region
        }));
      },
      placeholder: "City",
      style: _objectSpread(_objectSpread({}, inp), {}, {
        width: 140
      })
    }), /*#__PURE__*/React.createElement("select", {
      value: ed.region,
      onChange: function onChange(e) {
        return setEd(_objectSpread(_objectSpread({}, ed), {}, {
          region: e.target.value
        }));
      },
      style: sel
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Region"), Object.keys(REGIONS).map(function (r) {
      return /*#__PURE__*/React.createElement("option", {
        key: r
      }, r);
    }))) : /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 14,
        color: "#8B8279"
      }
    }, venue.city, venue.region ? " \xB7 ".concat(venue.region) : "")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setSelectedVenue(null);
        setIsEditing(false);
      },
      style: {
        background: "none",
        border: "none",
        fontSize: 22,
        cursor: "pointer",
        color: "#A09889",
        padding: 4,
        lineHeight: 1
      }
    }, "\u2715")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "24px 32px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginBottom: 20,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, editing ? /*#__PURE__*/React.createElement("select", {
      value: ed.status,
      onChange: function onChange(e) {
        return setEd(_objectSpread(_objectSpread({}, ed), {}, {
          status: e.target.value
        }));
      },
      style: sel
    }, STATUSES.map(function (s) {
      return /*#__PURE__*/React.createElement("option", {
        key: s
      }, s);
    })) : /*#__PURE__*/React.createElement(Tag, {
      filled: true,
      color: STATUS_COLORS[venue.status]
    }, venue.status), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        cursor: "pointer",
        fontSize: 13,
        color: "#5A5348",
        padding: "6px 14px",
        borderRadius: 20,
        border: "1.5px solid ".concat((editing ? ed.visited : venue.visited) ? "#2D8659" : "#D5CEC4"),
        background: (editing ? ed.visited : venue.visited) ? "#F0F9F4" : "transparent",
        transition: "all 0.2s"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: editing ? ed.visited : venue.visited,
      onChange: function onChange(e) {
        return editing && setEd(_objectSpread(_objectSpread({}, ed), {}, {
          visited: e.target.checked
        }));
      },
      disabled: !editing,
      style: {
        accentColor: "#2D8659",
        width: 14,
        height: 14
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: (editing ? ed.visited : venue.visited) ? "#2D8659" : "#8B8279"
      }
    }, "Visited")), venue.privateRoom && /*#__PURE__*/React.createElement(Tag, {
      color: "#5B8A72"
    }, "Private Room"), venue.av && /*#__PURE__*/React.createElement(Tag, {
      color: "#4A6FA5"
    }, "AV Ready"), venue.dietary && /*#__PURE__*/React.createElement(Tag, {
      color: "#7B68AE"
    }, "Dietary Flex")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Website"), editing ? /*#__PURE__*/React.createElement("input", {
      value: ed.website || "",
      onChange: function onChange(e) {
        return setEd(_objectSpread(_objectSpread({}, ed), {}, {
          website: e.target.value
        }));
      },
      placeholder: "https://...",
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 4
      })
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4
      }
    }, venue.website ? /*#__PURE__*/React.createElement("a", {
      href: venue.website,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        fontSize: 13,
        color: "#4A6FA5",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: 4
      }
    }, "\uD83D\uDD17 ", venue.website) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#A09889"
      }
    }, "\u2014"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Price / Head"), editing ? /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: ed.pricePerHead,
      onChange: function onChange(e) {
        return setEd(_objectSpread(_objectSpread({}, ed), {}, {
          pricePerHead: +e.target.value
        }));
      },
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 4
      })
    }) : /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 24,
        fontWeight: 600,
        color: "#2C2622",
        fontFamily: "'Playfair Display',serif"
      }
    }, "$", venue.pricePerHead)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Exclusivity"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Stars, {
      rating: editing ? ed.exclusivity : venue.exclusivity,
      interactive: editing,
      onRate: function onRate(r) {
        return setEd(_objectSpread(_objectSpread({}, ed), {}, {
          exclusivity: r
        }));
      },
      size: 20
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Your Rating"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Stars, {
      rating: editing ? ed.rating : venue.rating,
      interactive: editing,
      onRate: function onRate(r) {
        return setEd(_objectSpread(_objectSpread({}, ed), {}, {
          rating: r
        }));
      },
      size: 20
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Last Used"), editing ? /*#__PURE__*/React.createElement("input", {
      type: "date",
      value: ed.lastUsed,
      onChange: function onChange(e) {
        return setEd(_objectSpread(_objectSpread({}, ed), {}, {
          lastUsed: e.target.value
        }));
      },
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 4
      })
    }) : /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 15,
        color: "#3D3832"
      }
    }, venue.lastUsed || "—"))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Event Sizes"), editing ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 8,
        flexWrap: "wrap"
      }
    }, EVENT_SIZES.map(function (sz) {
      return /*#__PURE__*/React.createElement("label", {
        key: sz,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontSize: 13,
          cursor: "pointer",
          color: "#5A5348"
        }
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        checked: ed.eventSizes.includes(sz),
        onChange: function onChange(e) {
          return setEd(_objectSpread(_objectSpread({}, ed), {}, {
            eventSizes: e.target.checked ? [].concat(_toConsumableArray(ed.eventSizes), [sz]) : ed.eventSizes.filter(function (s) {
              return s !== sz;
            })
          }));
        }
      }), " ", sz);
    })) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        marginTop: 6,
        flexWrap: "wrap"
      }
    }, venue.eventSizes.length ? venue.eventSizes.map(function (s) {
      return /*#__PURE__*/React.createElement(Tag, {
        key: s,
        color: "#8B7355"
      }, s);
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#A09889"
      }
    }, "\u2014"))), editing && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginBottom: 24,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Toggle, {
      checked: ed.privateRoom,
      onChange: function onChange(v) {
        return setEd(_objectSpread(_objectSpread({}, ed), {}, {
          privateRoom: v
        }));
      },
      label: "Private Room"
    }), /*#__PURE__*/React.createElement(Toggle, {
      checked: ed.av,
      onChange: function onChange(v) {
        return setEd(_objectSpread(_objectSpread({}, ed), {}, {
          av: v
        }));
      },
      label: "AV Ready"
    }), /*#__PURE__*/React.createElement(Toggle, {
      checked: ed.dietary,
      onChange: function onChange(v) {
        return setEd(_objectSpread(_objectSpread({}, ed), {}, {
          dietary: v
        }));
      },
      label: "Dietary Flex"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Contact"), editing ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: ed.contact,
      onChange: function onChange(e) {
        return setEd(_objectSpread(_objectSpread({}, ed), {}, {
          contact: e.target.value
        }));
      },
      placeholder: "Name",
      style: _objectSpread(_objectSpread({}, inp), {}, {
        width: "50%"
      })
    }), /*#__PURE__*/React.createElement("input", {
      value: ed.phone,
      onChange: function onChange(e) {
        return setEd(_objectSpread(_objectSpread({}, ed), {}, {
          phone: e.target.value
        }));
      },
      placeholder: "Phone",
      style: _objectSpread(_objectSpread({}, inp), {}, {
        width: "50%"
      })
    })) : /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 14,
        color: "#3D3832"
      }
    }, venue.contact ? "".concat(venue.contact).concat(venue.phone ? " \xB7 ".concat(venue.phone) : "") : "" || "—")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "Notes"), editing ? /*#__PURE__*/React.createElement("textarea", {
      value: ed.notes,
      onChange: function onChange(e) {
        return setEd(_objectSpread(_objectSpread({}, ed), {}, {
          notes: e.target.value
        }));
      },
      rows: 4,
      style: _objectSpread(_objectSpread({}, inp), {}, {
        marginTop: 6,
        resize: "vertical"
      })
    }) : /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "6px 0 0",
        fontSize: 14,
        color: "#5A5348",
        lineHeight: 1.6,
        whiteSpace: "pre-line"
      }
    }, venue.notes || "—")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
      }
    }, editing ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return saveVenue(ed);
      },
      style: btnP
    }, "Save Changes"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setIsEditing(false);
      },
      style: btnS
    }, "Cancel")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setIsEditing(true);
      },
      style: btnP
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setAiVenueCtx(venue);
        setAiModal("email");
      },
      style: btnS
    }, "\u2709 Email"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setAiVenueCtx(venue);
        setAiModal("menu");
      },
      style: btnS
    }, "\uD83C\uDF7D Menu"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return duplicateVenue(venue);
      },
      style: btnS
    }, "\u29C9 Duplicate"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        if (confirm("Delete this venue?")) deleteVenue(venue.id);
      },
      style: _objectSpread(_objectSpread({}, btnS), {}, {
        color: "#C0392B",
        borderColor: "#C0392B"
      })
    }, "Delete")))));
  };
  var AddForm = function AddForm() {
    var _useState85 = useState(emptyVenue()),
      _useState86 = _slicedToArray(_useState85, 2),
      nv = _useState86[0],
      setNv = _useState86[1];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(44,38,34,0.45)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(4px)"
      },
      onClick: function onClick(e) {
        if (e.target === e.currentTarget) setShowAddForm(false);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#FDFCFA",
        borderRadius: 16,
        width: 560,
        maxHeight: "88vh",
        overflowY: "auto",
        padding: 36,
        boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "0 0 24px",
        fontFamily: "'Playfair Display',serif",
        color: "#2C2622",
        fontSize: 24
      }
    }, "Add New Venue"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: nv.name,
      onChange: function onChange(e) {
        return setNv(_objectSpread(_objectSpread({}, nv), {}, {
          name: e.target.value
        }));
      },
      placeholder: "Venue name",
      style: _objectSpread(_objectSpread({}, inp), {}, {
        fontSize: 16
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: nv.city,
      onChange: function onChange(e) {
        return setNv(_objectSpread(_objectSpread({}, nv), {}, {
          city: e.target.value,
          region: guessRegion(e.target.value) || nv.region
        }));
      },
      placeholder: "City",
      style: inp
    }), /*#__PURE__*/React.createElement("select", {
      value: nv.region,
      onChange: function onChange(e) {
        return setNv(_objectSpread(_objectSpread({}, nv), {}, {
          region: e.target.value
        }));
      },
      style: sel
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Select Region"), Object.keys(REGIONS).map(function (r) {
      return /*#__PURE__*/React.createElement("option", {
        key: r
      }, r);
    }))), /*#__PURE__*/React.createElement("input", {
      value: nv.website || "",
      onChange: function onChange(e) {
        return setNv(_objectSpread(_objectSpread({}, nv), {}, {
          website: e.target.value
        }));
      },
      placeholder: "Website (https://...)",
      style: inp
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: _objectSpread(_objectSpread({}, lbl), {}, {
        marginBottom: 4,
        display: "block"
      })
    }, "Price / Head ($)"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: nv.pricePerHead || "",
      onChange: function onChange(e) {
        return setNv(_objectSpread(_objectSpread({}, nv), {}, {
          pricePerHead: +e.target.value
        }));
      },
      style: inp
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: _objectSpread(_objectSpread({}, lbl), {}, {
        marginBottom: 4,
        display: "block"
      })
    }, "Status"), /*#__PURE__*/React.createElement("select", {
      value: nv.status,
      onChange: function onChange(e) {
        return setNv(_objectSpread(_objectSpread({}, nv), {}, {
          status: e.target.value
        }));
      },
      style: sel
    }, STATUSES.map(function (s) {
      return /*#__PURE__*/React.createElement("option", {
        key: s
      }, s);
    })))), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer",
        fontSize: 13,
        color: "#5A5348",
        padding: "10px 14px",
        borderRadius: 8,
        border: "1.5px solid ".concat(nv.visited ? "#2D8659" : "#D5CEC4"),
        background: nv.visited ? "#F0F9F4" : "transparent"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: nv.visited,
      onChange: function onChange(e) {
        return setNv(_objectSpread(_objectSpread({}, nv), {}, {
          visited: e.target.checked
        }));
      },
      style: {
        accentColor: "#2D8659",
        width: 14,
        height: 14
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: nv.visited ? "#2D8659" : "#8B8279"
      }
    }, "I've visited this venue")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: _objectSpread(_objectSpread({}, lbl), {}, {
        marginBottom: 8,
        display: "block"
      })
    }, "Event Sizes"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        flexWrap: "wrap"
      }
    }, EVENT_SIZES.map(function (sz) {
      return /*#__PURE__*/React.createElement("label", {
        key: sz,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontSize: 13,
          cursor: "pointer",
          color: "#5A5348"
        }
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        checked: nv.eventSizes.includes(sz),
        onChange: function onChange(e) {
          return setNv(_objectSpread(_objectSpread({}, nv), {}, {
            eventSizes: e.target.checked ? [].concat(_toConsumableArray(nv.eventSizes), [sz]) : nv.eventSizes.filter(function (s) {
              return s !== sz;
            })
          }));
        }
      }), " ", sz);
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 20,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Toggle, {
      checked: nv.privateRoom,
      onChange: function onChange(v) {
        return setNv(_objectSpread(_objectSpread({}, nv), {}, {
          privateRoom: v
        }));
      },
      label: "Private Room"
    }), /*#__PURE__*/React.createElement(Toggle, {
      checked: nv.av,
      onChange: function onChange(v) {
        return setNv(_objectSpread(_objectSpread({}, nv), {}, {
          av: v
        }));
      },
      label: "AV Ready"
    }), /*#__PURE__*/React.createElement(Toggle, {
      checked: nv.dietary,
      onChange: function onChange(v) {
        return setNv(_objectSpread(_objectSpread({}, nv), {}, {
          dietary: v
        }));
      },
      label: "Dietary Flex"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: _objectSpread(_objectSpread({}, lbl), {}, {
        marginBottom: 4,
        display: "block"
      })
    }, "Exclusivity"), /*#__PURE__*/React.createElement(Stars, {
      rating: nv.exclusivity,
      interactive: true,
      onRate: function onRate(r) {
        return setNv(_objectSpread(_objectSpread({}, nv), {}, {
          exclusivity: r
        }));
      },
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: nv.contact,
      onChange: function onChange(e) {
        return setNv(_objectSpread(_objectSpread({}, nv), {}, {
          contact: e.target.value
        }));
      },
      placeholder: "Contact name",
      style: inp
    }), /*#__PURE__*/React.createElement("input", {
      value: nv.phone,
      onChange: function onChange(e) {
        return setNv(_objectSpread(_objectSpread({}, nv), {}, {
          phone: e.target.value
        }));
      },
      placeholder: "Phone",
      style: inp
    })), /*#__PURE__*/React.createElement("textarea", {
      value: nv.notes,
      onChange: function onChange(e) {
        return setNv(_objectSpread(_objectSpread({}, nv), {}, {
          notes: e.target.value
        }));
      },
      placeholder: "Notes \u2014 booking tips, room details, what worked well...",
      rows: 3,
      style: _objectSpread(_objectSpread({}, inp), {}, {
        resize: "vertical"
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        if (nv.name && nv.city) addVenue(nv);
      },
      style: _objectSpread(_objectSpread({}, btnP), {}, {
        opacity: nv.name && nv.city ? 1 : 0.5
      })
    }, "Add Venue"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowAddForm(false);
      },
      style: btnS
    }, "Cancel")))));
  };
  var DiscoverPanel = function DiscoverPanel() {
    // Build city list: all REGIONS cities + unique cities from saved venues
    var allCities = useMemo(function () {
      var regionCities = Object.values(REGIONS).flat();
      var venueCities = venues.map(function (v) {
        return v.city;
      }).filter(Boolean);
      return _toConsumableArray(new Set([].concat(_toConsumableArray(regionCities), _toConsumableArray(venueCities)))).sort();
    }, [venues]);

    // Batch selection state (local to panel)
    var _useState87 = useState(function () {
        var existing = new Set(batchCities.split(/[,\n]/).map(function (c) {
          return c.trim();
        }).filter(Boolean));
        return existing;
      }),
      _useState88 = _slicedToArray(_useState87, 2),
      batchSelected = _useState88[0],
      setBatchSelected = _useState88[1];
    var _useState89 = useState(""),
      _useState90 = _slicedToArray(_useState89, 2),
      citySearch = _useState90[0],
      setCitySearch = _useState90[1];
    var filteredCities = citySearch ? allCities.filter(function (c) {
      return c.toLowerCase().includes(citySearch.toLowerCase());
    }) : allCities;
    var toggleCity = function toggleCity(city) {
      setBatchSelected(function (prev) {
        var next = new Set(prev);
        if (next.has(city)) next["delete"](city);else if (next.size < 15) next.add(city);
        return next;
      });
    };

    // Sync batchSelected → batchCities string whenever selection changes
    useEffect(function () {
      setBatchCities(_toConsumableArray(batchSelected).join("\n"));
    }, [batchSelected]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        width: 560,
        height: "100vh",
        background: "#FFFFFF",
        borderRight: "1px solid #E0E0D8",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        boxShadow: "8px 0 40px rgba(0,0,0,0.08)",
        animation: "slideInLeft 0.25s ease"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "24px 28px",
        borderBottom: "1px solid #E0E0D8",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 20,
        fontFamily: "'Playfair Display',serif",
        color: "#0A0A0A"
      }
    }, "Discover Venues"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13,
        color: "#6B6B65"
      }
    }, "Find venues in any city to add to your tracker")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowDiscover(false);
      },
      style: {
        background: "none",
        border: "none",
        fontSize: 20,
        cursor: "pointer",
        color: "#A0A09A",
        padding: 4,
        lineHeight: 1
      }
    }, "\u2715")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        border: "1.5px solid #D8D8D0",
        borderRadius: 8,
        overflow: "hidden",
        marginBottom: 14
      }
    }, ["single", "batch"].map(function (m) {
      return /*#__PURE__*/React.createElement("button", {
        key: m,
        onClick: function onClick() {
          return setSearchMode(m);
        },
        style: {
          flex: 1,
          padding: "7px 0",
          border: "none",
          background: searchMode === m ? "#0A0A0A" : "#FFFFFF",
          color: searchMode === m ? "#EBF245" : "#6B6B65",
          fontSize: 12,
          cursor: "pointer",
          fontWeight: 700
        }
      }, m === "single" ? "Single City" : "Batch Search");
    })), searchMode === "single" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: _objectSpread(_objectSpread({}, lbl), {}, {
        display: "block",
        marginBottom: 4
      })
    }, "City"), /*#__PURE__*/React.createElement("input", {
      value: discoverCity,
      onChange: function onChange(e) {
        return setDiscoverCity(e.target.value);
      },
      placeholder: "e.g. Houston, Nashville, Raleigh...",
      onKeyDown: function onKeyDown(e) {
        return e.key === "Enter" && discoverVenues();
      },
      style: _objectSpread(_objectSpread({}, inp), {}, {
        padding: "10px 14px"
      })
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: _objectSpread(_objectSpread({}, lbl), {}, {
        display: "block",
        marginBottom: 4
      })
    }, "Venue Type"), /*#__PURE__*/React.createElement("select", {
      value: discoverType,
      onChange: function onChange(e) {
        return setDiscoverType(e.target.value);
      },
      style: _objectSpread(_objectSpread({}, sel), {}, {
        width: "100%",
        padding: "10px 14px"
      })
    }, DISCOVER_TYPES.map(function (t) {
      return /*#__PURE__*/React.createElement("option", {
        key: t.value,
        value: t.value
      }, t.label);
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: discoverVenues,
      disabled: isSearching || !discoverCity.trim(),
      style: _objectSpread(_objectSpread({}, btnP), {}, {
        opacity: isSearching || !discoverCity.trim() ? .6 : 1,
        padding: "11px 0"
      })
    }, isSearching ? "Searching..." : "Search Venues")) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: _objectSpread({}, lbl)
    }, "Select Cities ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#0A0A0A",
        fontWeight: 700
      }
    }, "(", batchSelected.size, "/15)")), batchSelected.size > 0 && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setBatchSelected(new Set());
      },
      style: {
        background: "none",
        border: "none",
        fontSize: 11,
        color: "#6B6B65",
        cursor: "pointer",
        fontWeight: 600,
        padding: 0
      }
    }, "Clear all")), batchSelected.size > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 5,
        marginBottom: 8
      }
    }, _toConsumableArray(batchSelected).map(function (city) {
      return /*#__PURE__*/React.createElement("span", {
        key: city,
        onClick: function onClick() {
          return toggleCity(city);
        },
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
          background: "#0A0A0A",
          color: "#EBF245",
          padding: "3px 10px",
          borderRadius: 6,
          fontSize: 12,
          fontWeight: 600,
          cursor: "pointer"
        }
      }, city, " ", /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14,
          lineHeight: 1
        }
      }, "\xD7"));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: citySearch,
      onChange: function onChange(e) {
        return setCitySearch(e.target.value);
      },
      placeholder: "Search cities...",
      style: _objectSpread(_objectSpread({}, inp), {}, {
        padding: "8px 12px",
        marginBottom: 0
      })
    }), batchSelected.size < 15 && /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: 180,
        overflowY: "auto",
        border: "1.5px solid #D8D8D0",
        borderTop: "none",
        borderRadius: "0 0 8px 8px",
        background: "#FFFFFF",
        position: "relative",
        zIndex: 10
      }
    }, filteredCities.filter(function (c) {
      return !batchSelected.has(c);
    }).length === 0 ? /*#__PURE__*/React.createElement("p", {
      style: {
        padding: "10px 12px",
        fontSize: 13,
        color: "#A0A09A",
        margin: 0
      }
    }, "No cities found") : filteredCities.filter(function (c) {
      return !batchSelected.has(c);
    }).map(function (city) {
      return /*#__PURE__*/React.createElement("div", {
        key: city,
        onClick: function onClick() {
          return toggleCity(city);
        },
        style: {
          padding: "8px 14px",
          fontSize: 13,
          color: "#0A0A0A",
          cursor: "pointer",
          transition: "background 0.1s",
          borderBottom: "1px solid #F4F4F0"
        },
        onMouseEnter: function onMouseEnter(e) {
          return e.currentTarget.style.background = "#EBF245";
        },
        onMouseLeave: function onMouseLeave(e) {
          return e.currentTarget.style.background = "transparent";
        }
      }, city, venues.some(function (v) {
        return v.city === city;
      }) && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          color: "#6B6B65",
          marginLeft: 6
        }
      }, "(", venues.filter(function (v) {
        return v.city === city;
      }).length, " saved)"));
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: _objectSpread(_objectSpread({}, lbl), {}, {
        display: "block",
        marginBottom: 4
      })
    }, "Venue Type"), /*#__PURE__*/React.createElement("select", {
      value: discoverType,
      onChange: function onChange(e) {
        return setDiscoverType(e.target.value);
      },
      style: _objectSpread(_objectSpread({}, sel), {}, {
        width: "100%",
        padding: "10px 14px"
      })
    }, DISCOVER_TYPES.map(function (t) {
      return /*#__PURE__*/React.createElement("option", {
        key: t.value,
        value: t.value
      }, t.label);
    }))), isSearching && batchProgress.total > 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#3A3A35",
        fontWeight: 600
      }
    }, "Searching ", batchProgress.currentCity, "..."), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#6B6B65"
      }
    }, batchProgress.current, "/", batchProgress.total)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: "#E0E0D8",
        borderRadius: 3,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        background: "#0A0A0A",
        borderRadius: 3,
        width: "".concat(batchProgress.current / batchProgress.total * 100, "%"),
        transition: "width 0.5s ease"
      }
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: discoverVenues,
      disabled: isSearching || batchSelected.size === 0,
      style: _objectSpread(_objectSpread({}, btnP), {}, {
        opacity: isSearching || batchSelected.size === 0 ? .6 : 1,
        padding: "11px 0"
      })
    }, isSearching ? "Searching ".concat(batchProgress.current + 1, "/").concat(batchProgress.total, "...") : "Search ".concat(batchSelected.size, " ").concat(batchSelected.size === 1 ? "City" : "Cities"))), !apiKey && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "10px 0 0",
        fontSize: 12,
        color: "#C0392B",
        fontWeight: 600
      }
    }, "\u26A0 Set up your API key in Settings to enable search.")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "16px 28px"
      }
    }, isSearching && discoveredVenues.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "32px 0",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Spinner, null), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "#6B6B65",
        fontSize: 14,
        marginTop: 12
      }
    }, "Searching", batchProgress.currentCity ? " ".concat(batchProgress.currentCity) : "", "...")), searchError && /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#FFF5F5",
        border: "1px solid #E8C4C4",
        borderRadius: 10,
        padding: 16,
        color: "#8B4444",
        fontSize: 13,
        marginBottom: 12
      }
    }, searchError), discoveredVenues.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: "#0A0A0A",
        fontWeight: 700
      }
    }, discoveredVenues.length, " venues found", isSearching ? " (searching...)" : ""), savedIds.size > 0 && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        color: "#1A5C3A",
        fontWeight: 700
      }
    }, savedIds.size, " saved \u2713")), function () {
      var cities = _toConsumableArray(new Set(discoveredVenues.map(function (v) {
        return v.city || "Unknown";
      })));
      var multi = cities.length > 1;
      return multi ? cities.map(function (city) {
        var cvs = discoveredVenues.filter(function (v) {
          return v.city === city;
        });
        return /*#__PURE__*/React.createElement("div", {
          key: city,
          style: {
            marginBottom: 24
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 10
          }
        }, /*#__PURE__*/React.createElement("h3", {
          style: {
            margin: 0,
            fontSize: 15,
            fontFamily: "'Playfair Display',serif",
            color: "#0A0A0A"
          }
        }, city), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 11,
            color: "#6B6B65",
            background: "#F4F4F0",
            padding: "2px 8px",
            borderRadius: 6,
            fontWeight: 600
          }
        }, cvs.length), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            height: 1,
            background: "#E0E0D8"
          }
        })), cvs.map(function (dv) {
          return /*#__PURE__*/React.createElement(DiscCard, {
            key: dv._id,
            dv: dv
          });
        }));
      }) : /*#__PURE__*/React.createElement(React.Fragment, null, discoveredVenues.map(function (dv) {
        return /*#__PURE__*/React.createElement(DiscCard, {
          key: dv._id,
          dv: dv
        });
      }));
    }()), !isSearching && !searchError && discoveredVenues.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "48px 0",
        color: "#A0A09A"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 44,
        margin: "0 0 10px"
      }
    }, "\uD83C\uDF77"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        fontFamily: "'Playfair Display',serif",
        color: "#3A3A35"
      }
    }, "Search any city to discover venues"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12,
        maxWidth: 340,
        margin: "6px auto 0",
        lineHeight: 1.6
      }
    }, "Use Batch Search to pick multiple cities at once \u2014 perfect for quarterly planning."))));
  };
  var DiscCard = function DiscCard(_ref15) {
    var dv = _ref15.dv;
    var isSaved = savedIds.has(dv._id);
    var alreadyIn = venues.some(function (v) {
      return v.name.toLowerCase() === dv.name.toLowerCase();
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        borderRadius: 10,
        padding: 16,
        border: "1.5px solid #E8E2D9",
        marginBottom: 10,
        animation: "fadeIn 0.3s ease"
      },
      onMouseEnter: function onMouseEnter(e) {
        e.currentTarget.style.borderColor = "#C8B89A";
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.borderColor = "#E8E2D9";
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontSize: 15,
        fontFamily: "'Playfair Display',serif",
        color: "#2C2622",
        fontWeight: 600
      }
    }, dv.name), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontSize: 12,
        color: "#8B8279"
      }
    }, [dv.neighborhood, dv.cuisine].filter(Boolean).join(" · "))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "#8B7355",
        whiteSpace: "nowrap",
        marginLeft: 8
      }
    }, dv.priceRange)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12,
        color: "#5A5348",
        lineHeight: 1.5,
        margin: "8px 0 10px"
      }
    }, dv.description), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 5,
        flexWrap: "wrap",
        marginBottom: 8
      }
    }, dv.privateRoom && /*#__PURE__*/React.createElement(Tag, {
      color: "#5B8A72"
    }, "Private Dining"), dv.capacity && /*#__PURE__*/React.createElement(Tag, {
      color: "#4A6FA5"
    }, dv.capacity), dv.estimatedPricePerHead > 0 && /*#__PURE__*/React.createElement(Tag, {
      color: "#8B7355"
    }, "~$", dv.estimatedPricePerHead, "/head")), dv.knownFor && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 11,
        color: "#A09889",
        fontStyle: "italic",
        margin: "0 0 4px"
      }
    }, "Known for: ", dv.knownFor), dv.website && /*#__PURE__*/React.createElement("a", {
      href: dv.website,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        fontSize: 11,
        color: "#4A6FA5",
        display: "block",
        marginBottom: 4,
        textDecoration: "none"
      }
    }, "\uD83D\uDD17 ", dv.website), dv.sources && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 11,
        color: "#4A6FA5",
        margin: "0 0 10px",
        fontWeight: 500
      }
    }, "\uD83D\uDCCD ", dv.sources), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return !isSaved && !alreadyIn && saveDiscovered(dv);
      },
      disabled: isSaved || alreadyIn,
      style: _objectSpread(_objectSpread({}, btnP), {}, {
        width: "100%",
        textAlign: "center",
        fontSize: 12,
        padding: "8px 0",
        background: isSaved || alreadyIn ? "#D5CEC4" : "#8B7355",
        cursor: isSaved || alreadyIn ? "default" : "pointer"
      })
    }, alreadyIn ? "Already in Tracker" : isSaved ? "✓ Saved" : "＋ Save to Tracker"));
  };

  // ── Venue photo component ──
  var VenuePhoto = function VenuePhoto(_ref16) {
    var name = _ref16.name,
      city = _ref16.city,
      _ref16$height = _ref16.height,
      height = _ref16$height === void 0 ? 160 : _ref16$height;
    var _useState91 = useState(null),
      _useState92 = _slicedToArray(_useState91, 2),
      photoUrl = _useState92[0],
      setPhotoUrl = _useState92[1];
    var _useState93 = useState(true),
      _useState94 = _slicedToArray(_useState93, 2),
      loading = _useState94[0],
      setLoading = _useState94[1];
    useEffect(function () {
      var cancelled = false;
      setLoading(true);
      fetchVenuePhoto(name, city).then(function (url) {
        if (!cancelled) {
          setPhotoUrl(url);
          setLoading(false);
        }
      });
      return function () {
        cancelled = true;
      };
    }, [name, city]);

    // Deterministic gradient from venue name
    var hue = name.split("").reduce(function (a, c) {
      return a + c.charCodeAt(0);
    }, 0) % 360;
    var gradient = "linear-gradient(135deg, hsl(".concat(hue, ",25%,20%) 0%, hsl(").concat((hue + 40) % 360, ",30%,35%) 100%)");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        height: height,
        borderRadius: "10px 10px 0 0",
        overflow: "hidden",
        position: "relative",
        background: gradient,
        flexShrink: 0
      }
    }, loading && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 20,
        height: 20,
        border: "2px solid rgba(255,255,255,0.3)",
        borderTopColor: "#fff",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite"
      }
    })), !loading && photoUrl && /*#__PURE__*/React.createElement("img", {
      src: photoUrl,
      alt: name,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      },
      onError: function onError() {
        return setPhotoUrl(null);
      }
    }), !loading && !photoUrl && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 28
      }
    }, "\uD83C\uDF7D"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "rgba(255,255,255,0.7)",
        fontWeight: 600,
        textAlign: "center",
        padding: "0 12px"
      }
    }, name)));
  };
  var VenueCard = useCallback(function (_ref17) {
    var venue = _ref17.venue;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: function onClick(e) {
        e.stopPropagation();
        toggleCompare(venue.id);
      },
      style: {
        position: "absolute",
        top: 10,
        right: 10,
        width: 22,
        height: 22,
        borderRadius: 4,
        border: "2px solid ".concat(compareIds.has(venue.id) ? "#8B7355" : "#D5CEC4"),
        background: compareIds.has(venue.id) ? "#8B7355" : "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 2,
        fontSize: 12,
        color: "#fff",
        transition: "all 0.15s"
      }
    }, compareIds.has(venue.id) && "✓"), /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        setSelectedVenue(venue);
        setIsEditing(false);
      },
      style: {
        background: "#fff",
        borderRadius: 12,
        padding: 22,
        border: "1.5px solid ".concat((selectedVenue === null || selectedVenue === void 0 ? void 0 : selectedVenue.id) === venue.id ? "#C8B89A" : "#E8E2D9"),
        cursor: "pointer",
        transition: "all 0.2s",
        boxShadow: (selectedVenue === null || selectedVenue === void 0 ? void 0 : selectedVenue.id) === venue.id ? "0 4px 20px rgba(139,115,85,0.15)" : "0 1px 4px rgba(0,0,0,0.04)"
      },
      onMouseEnter: function onMouseEnter(e) {
        e.currentTarget.style.borderColor = "#C8B89A";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 6px 24px rgba(139,115,85,0.12)";
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.borderColor = (selectedVenue === null || selectedVenue === void 0 ? void 0 : selectedVenue.id) === venue.id ? "#C8B89A" : "#E8E2D9";
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = (selectedVenue === null || selectedVenue === void 0 ? void 0 : selectedVenue.id) === venue.id ? "0 4px 20px rgba(139,115,85,0.15)" : "0 1px 4px rgba(0,0,0,0.04)";
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontSize: 16,
        fontFamily: "'Playfair Display',serif",
        color: "#2C2622",
        fontWeight: 600,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, venue.name), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "3px 0 0",
        fontSize: 13,
        color: "#8B8279"
      }
    }, venue.city, venue.region ? " \xB7 ".concat(venue.region) : "")), /*#__PURE__*/React.createElement(Tag, {
      filled: true,
      color: STATUS_COLORS[venue.status]
    }, venue.status)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        fontWeight: 600,
        color: "#2C2622",
        fontFamily: "'Playfair Display',serif"
      }
    }, "$", venue.pricePerHead), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#A09889"
      }
    }, "/head"), venue.visited && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "#2D8659",
        fontWeight: 600,
        background: "#F0F9F4",
        padding: "2px 8px",
        borderRadius: 10,
        border: "1px solid #B7E4C7"
      }
    }, "\u2713 Visited"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto"
      }
    }, /*#__PURE__*/React.createElement(Stars, {
      rating: venue.exclusivity,
      size: 14
    }))), venue.website && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 11,
        color: "#4A6FA5",
        margin: "0 0 8px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, "\uD83D\uDD17 ", venue.website), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 5,
        flexWrap: "wrap"
      }
    }, venue.privateRoom && /*#__PURE__*/React.createElement(Tag, {
      color: "#5B8A72"
    }, "Private"), venue.av && /*#__PURE__*/React.createElement(Tag, {
      color: "#4A6FA5"
    }, "AV"), venue.dietary && /*#__PURE__*/React.createElement(Tag, {
      color: "#7B68AE"
    }, "Dietary"), venue.eventSizes.map(function (s) {
      return /*#__PURE__*/React.createElement(Tag, {
        key: s,
        color: "#B8A48E"
      }, s.split(" ")[0]);
    })), venue.rating > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        paddingTop: 10,
        borderTop: "1px solid #F0ECE6",
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "#A09889",
        textTransform: "uppercase",
        letterSpacing: "0.06em"
      }
    }, "Rating"), /*#__PURE__*/React.createElement(Stars, {
      rating: venue.rating,
      size: 12
    }))));
  }, [selectedVenue, compareIds, toggleCompare]);
  var VenueRow = function VenueRow(_ref18) {
    var venue = _ref18.venue;
    return /*#__PURE__*/React.createElement("tr", {
      onClick: function onClick() {
        setSelectedVenue(venue);
        setIsEditing(false);
      },
      style: {
        cursor: "pointer",
        transition: "background 0.15s"
      },
      onMouseEnter: function onMouseEnter(e) {
        return e.currentTarget.style.background = "#F8F5F0";
      },
      onMouseLeave: function onMouseLeave(e) {
        return e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "13px 16px",
        fontFamily: "'Playfair Display',serif",
        fontWeight: 600,
        fontSize: 14,
        color: "#2C2622"
      }
    }, venue.name), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "13px 12px",
        fontSize: 13,
        color: "#5A5348"
      }
    }, venue.city), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "13px 12px",
        fontSize: 13,
        color: "#8B8279"
      }
    }, venue.region), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "13px 12px",
        fontSize: 14,
        fontWeight: 600
      }
    }, "$", venue.pricePerHead), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "13px 12px"
      }
    }, venue.website ? /*#__PURE__*/React.createElement("a", {
      href: venue.website,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      style: {
        fontSize: 12,
        color: "#4A6FA5",
        textDecoration: "none"
      }
    }, "\uD83D\uDD17 Visit") : "—"), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "13px 12px",
        fontSize: 13
      }
    }, venue.visited ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#2D8659",
        fontWeight: 600
      }
    }, "\u2713 Yes") : /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#A09889"
      }
    }, "No")), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "13px 12px"
      }
    }, /*#__PURE__*/React.createElement(Stars, {
      rating: venue.exclusivity,
      size: 13
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "13px 12px"
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      filled: true,
      color: STATUS_COLORS[venue.status]
    }, venue.status)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "13px 12px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 3
      }
    }, venue.privateRoom && /*#__PURE__*/React.createElement(Tag, {
      color: "#5B8A72"
    }, "P"), venue.av && /*#__PURE__*/React.createElement(Tag, {
      color: "#4A6FA5"
    }, "AV"), venue.dietary && /*#__PURE__*/React.createElement(Tag, {
      color: "#7B68AE"
    }, "D"))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "13px 12px"
      }
    }, /*#__PURE__*/React.createElement(Stars, {
      rating: venue.rating,
      size: 13
    })));
  };
  var leftShift = showDiscover ? 560 : 0;
  var rightShift = selectedVenue ? 520 : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "#F5F1EB"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0A0A0A",
      padding: "28px 40px 0",
      color: "#FFFFFF"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.15em",
      color: "#EBF245",
      fontWeight: 700
    }
  }, "Field Marketing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 32,
      fontFamily: "'Playfair Display',serif",
      fontWeight: 600,
      color: "#FFFFFF"
    }
  }, "Venue Tracker")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      alignItems: "flex-end",
      marginBottom: 4,
      flexWrap: "wrap"
    }
  }, [{
    label: "Total",
    val: stats.total
  }, {
    label: "Avg $/Head",
    val: "".concat(stats.avgPrice)
  }, {
    label: "Regions",
    val: stats.regions
  }, {
    label: "Visited",
    val: stats.visited
  }, {
    label: "Used",
    val: stats.used
  }, {
    label: "Booked",
    val: stats.booked
  }].map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.label,
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 20,
        fontWeight: 700,
        fontFamily: "'Playfair Display',serif",
        color: "#EBF245"
      }
    }, s.val), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontSize: 10,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: "#888884"
      }
    }, s.label));
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowSettings(true);
    },
    style: {
      background: "none",
      border: "1px solid #333330",
      borderRadius: 8,
      color: "#888884",
      padding: "8px 14px",
      fontSize: 12,
      cursor: "pointer",
      fontWeight: 600
    }
  }, "\u2699 Settings"), /*#__PURE__*/React.createElement("button", {
    onClick: exportCSV,
    style: {
      background: "none",
      border: "1px solid #333330",
      borderRadius: 8,
      color: "#888884",
      padding: "8px 14px",
      fontSize: 12,
      cursor: "pointer",
      fontWeight: 600
    }
  }, "\u2193 CSV"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 0
    }
  }, [{
    key: "tracker",
    label: "My Venues",
    icon: "◻"
  }, {
    key: "aitools",
    label: "AI Tools",
    icon: "✦"
  }].map(function (tab) {
    return /*#__PURE__*/React.createElement("button", {
      key: tab.key,
      onClick: function onClick() {
        return setMode(tab.key);
      },
      style: {
        padding: "12px 28px",
        border: "none",
        borderRadius: "10px 10px 0 0",
        fontSize: 14,
        fontWeight: 700,
        cursor: "pointer",
        letterSpacing: "0.02em",
        transition: "all 0.2s",
        background: mode === tab.key ? "#F4F4F0" : "transparent",
        color: mode === tab.key ? "#0A0A0A" : "#888884"
      }
    }, tab.icon, " ", tab.label);
  }))), mode === "aitools" && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 40px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFFFFF",
      borderRadius: "0 12px 12px 12px",
      padding: "32px 36px",
      border: "1px solid #E0E0D8"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 6px",
      fontSize: 20,
      fontFamily: "'Playfair Display',serif",
      color: "#0A0A0A"
    }
  }, "AI-Powered Event Tools"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 28px",
      fontSize: 14,
      color: "#6B6B65"
    }
  }, "Plan events, match venues, generate briefs \u2014 powered by your tracker data."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
      gap: 20
    }
  }, [{
    icon: "🎯",
    title: "Smart Venue Matching",
    desc: "Describe your event and AI picks the best from your ".concat(venues.length, " tracked venues."),
    action: function action() {
      return setAiModal("match");
    },
    enabled: true
  }, {
    icon: "📋",
    title: "Event Brief Generator",
    desc: "Enter an account and city — get a full event plan with venue recs, menu, budget, timeline.",
    action: function action() {
      return setAiModal("brief");
    },
    enabled: true
  }, {
    icon: "⚖️",
    title: "Venue Comparison Report",
    desc: compareIds.size >= 2 ? "".concat(compareIds.size, " venues selected \u2014 generate side-by-side report.") : "Select 2-5 venues via checkboxes on My Venues. (".concat(compareIds.size, " selected)"),
    action: function action() {
      if (compareIds.size >= 2) setAiModal("compare");
    },
    enabled: compareIds.size >= 2
  }, {
    icon: "✉️",
    title: "Draft Outreach Email",
    desc: "Open any venue in My Venues and click '✉ Email' to generate 3 booking email versions.",
    action: null,
    enabled: false
  }, {
    icon: "🍽️",
    title: "Dietary & Menu Planner",
    desc: "Open any venue and click '🍽 Menu' to get custom menu suggestions based on dietary needs.",
    action: null,
    enabled: false
  }].map(function (card) {
    return /*#__PURE__*/React.createElement("div", {
      key: card.title,
      onClick: card.action || undefined,
      style: {
        background: card.action && card.enabled ? "#F4F4F0" : "#FAFAFA",
        borderRadius: 10,
        padding: 24,
        border: "1.5px solid #E0E0D8",
        transition: "all 0.2s",
        cursor: card.action ? "pointer" : "default",
        opacity: card.action || !card.enabled === false ? 1 : 0.6
      },
      onMouseEnter: function onMouseEnter(e) {
        if (card.action) {
          e.currentTarget.style.borderColor = "#0A0A0A";
          e.currentTarget.style.background = "#EBF245";
        }
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.borderColor = "#E0E0D8";
        e.currentTarget.style.background = card.action && card.enabled ? "#F4F4F0" : "#FAFAFA";
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 26,
        margin: "0 0 10px"
      }
    }, card.icon), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "0 0 6px",
        fontSize: 16,
        fontFamily: "'Playfair Display',serif",
        color: "#0A0A0A"
      }
    }, card.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: "#6B6B65",
        lineHeight: 1.6
      }
    }, card.desc));
  })))), mode === "tracker" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 40px",
      background: "#FFFFFF",
      borderBottom: "1px solid #E0E0D8",
      marginLeft: leftShift,
      marginRight: rightShift,
      transition: "margin 0.25s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: "0 0 220px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "Search venues or cities...",
    style: _objectSpread(_objectSpread({}, inp), {}, {
      paddingLeft: 34
    })
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 11,
      top: "50%",
      transform: "translateY(-50%)",
      color: "#A0A09A",
      fontSize: 15
    }
  }, "\u2315")), /*#__PURE__*/React.createElement("select", {
    value: filterRegion,
    onChange: function onChange(e) {
      return setFilterRegion(e.target.value);
    },
    style: sel
  }, /*#__PURE__*/React.createElement("option", {
    value: "All"
  }, "All Regions"), Object.keys(REGIONS).map(function (r) {
    return /*#__PURE__*/React.createElement("option", {
      key: r
    }, r);
  })), /*#__PURE__*/React.createElement("select", {
    value: filterSize,
    onChange: function onChange(e) {
      return setFilterSize(e.target.value);
    },
    style: sel
  }, /*#__PURE__*/React.createElement("option", {
    value: "All"
  }, "All Sizes"), EVENT_SIZES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s
    }, s);
  })), /*#__PURE__*/React.createElement("select", {
    value: filterStatus,
    onChange: function onChange(e) {
      return setFilterStatus(e.target.value);
    },
    style: sel
  }, /*#__PURE__*/React.createElement("option", {
    value: "All"
  }, "All Statuses"), STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s
    }, s);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      border: "1.5px solid #D8D8D0",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, ["All", "Yes", "No"].map(function (v) {
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setFilterVisited(v);
      },
      style: {
        padding: "7px 14px",
        border: "none",
        background: filterVisited === v ? "#0A0A0A" : "#FFFFFF",
        color: filterVisited === v ? "#EBF245" : "#6B6B65",
        fontSize: 12,
        cursor: "pointer",
        fontWeight: 700,
        whiteSpace: "nowrap"
      }
    }, v === "All" ? "All Visited" : v === "Yes" ? "✓ Visited" : "Not Visited");
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#6B6B65",
      whiteSpace: "nowrap"
    }
  }, "\u2264 $"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 50,
    max: 300,
    value: budgetMax,
    onChange: function onChange(e) {
      return setBudgetMax(+e.target.value);
    },
    style: {
      width: 90
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "#0A0A0A",
      minWidth: 36
    }
  }, budgetMax))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      marginTop: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    checked: filterPrivate,
    onChange: setFilterPrivate,
    label: "Private Room"
  }), /*#__PURE__*/React.createElement(Toggle, {
    checked: filterAV,
    onChange: setFilterAV,
    label: "AV Ready"
  }), /*#__PURE__*/React.createElement(Toggle, {
    checked: filterDietary,
    onChange: setFilterDietary,
    label: "Dietary Flex"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#6B6B65"
    }
  }, "Min Exclusivity"), /*#__PURE__*/React.createElement(Stars, {
    rating: filterExclusivity,
    interactive: true,
    onRate: function onRate(r) {
      return setFilterExclusivity(r === filterExclusivity ? 0 : r);
    },
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: sortBy,
    onChange: function onChange(e) {
      return setSortBy(e.target.value);
    },
    style: _objectSpread(_objectSpread({}, sel), {}, {
      minWidth: 110
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: "name"
  }, "Sort: Name"), /*#__PURE__*/React.createElement("option", {
    value: "price"
  }, "Sort: Price"), /*#__PURE__*/React.createElement("option", {
    value: "exclusivity"
  }, "Sort: Exclusivity"), /*#__PURE__*/React.createElement("option", {
    value: "rating"
  }, "Sort: Rating"), /*#__PURE__*/React.createElement("option", {
    value: "city"
  }, "Sort: City")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      border: "1.5px solid #D8D8D0",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, ["grid", "table"].map(function (v) {
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setView(v);
      },
      style: {
        padding: "6px 14px",
        border: "none",
        background: view === v ? "#0A0A0A" : "#FFFFFF",
        color: view === v ? "#EBF245" : "#6B6B65",
        fontSize: 12,
        cursor: "pointer",
        fontWeight: 700
      }
    }, v === "grid" ? "◻ Grid" : "☰ Table");
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowDiscover(function (d) {
        return !d;
      });
    },
    style: _objectSpread(_objectSpread({}, btnS), {}, {
      padding: "8px 18px",
      fontSize: 13,
      background: showDiscover ? "#0A0A0A" : "transparent",
      color: showDiscover ? "#EBF245" : "#0A0A0A"
    })
  }, showDiscover ? "✕ Close Discover" : "⌕ Discover Venues"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowAddForm(true);
    },
    style: btnP
  }, "+ Add Venue")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 40px 80px",
      marginLeft: leftShift,
      marginRight: rightShift,
      transition: "margin 0.25s ease"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: 13,
      color: "#6B6B65"
    }
  }, "Showing ", filtered.length, " of ", venues.length, " venues"), view === "grid" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
      gap: 14
    }
  }, filtered.map(function (v) {
    return /*#__PURE__*/React.createElement(VenueCard, {
      key: v.id,
      venue: v
    });
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFFFFF",
      borderRadius: 12,
      border: "1.5px solid #E0E0D8",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderBottom: "2px solid #E0E0D8"
    }
  }, ["Venue", "City", "Region", "$/Head", "Website", "Visited", "Exclusivity", "Status", "Features", "Rating"].map(function (h) {
    return /*#__PURE__*/React.createElement("th", {
      key: h,
      style: {
        padding: "11px 14px",
        textAlign: "left",
        fontSize: 10,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: "#6B6B65",
        fontWeight: 700,
        background: "#F4F4F0"
      }
    }, h);
  }))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(function (v) {
    return /*#__PURE__*/React.createElement(VenueRow, {
      key: v.id,
      venue: v
    });
  })))), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "60px 20px",
      color: "#A0A09A"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 48,
      margin: "0 0 12px"
    }
  }, "\uD83C\uDF7D"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      fontFamily: "'Playfair Display',serif",
      color: "#3A3A35"
    }
  }, "No venues match your filters"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13
    }
  }, "Try adjusting your search or filters")))), showDiscover && mode === "tracker" && /*#__PURE__*/React.createElement(DiscoverPanel, null), selectedVenue && /*#__PURE__*/React.createElement(DetailPanel, {
    key: selectedVenue.id,
    venue: selectedVenue
  }), showAddForm && /*#__PURE__*/React.createElement(AddForm, null), showSettings && /*#__PURE__*/React.createElement(SettingsModal, null), /*#__PURE__*/React.createElement(AiModal, null), compareIds.size > 0 && mode === "tracker" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 0,
      left: leftShift,
      right: rightShift,
      background: "#0A0A0A",
      padding: "13px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      zIndex: 90,
      boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
      transition: "left 0.25s ease,right 0.25s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#EBF245",
      fontSize: 13,
      fontWeight: 700
    }
  }, compareIds.size, " venue", compareIds.size > 1 ? "s" : "", " selected"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, venues.filter(function (v) {
    return compareIds.has(v.id);
  }).map(function (v) {
    return /*#__PURE__*/React.createElement("span", {
      key: v.id,
      style: {
        background: "#1A1A1A",
        color: "#EBF245",
        padding: "3px 10px",
        borderRadius: 6,
        fontSize: 12,
        fontWeight: 600
      }
    }, v.name);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      if (compareIds.size >= 2) {
        setMode("aitools");
        setAiModal("compare");
      }
    },
    disabled: compareIds.size < 2,
    style: _objectSpread(_objectSpread({}, btnP), {}, {
      padding: "8px 20px",
      fontSize: 13,
      background: compareIds.size >= 2 ? "#EBF245" : "#333330",
      color: compareIds.size >= 2 ? "#0A0A0A" : "#6B6B65",
      cursor: compareIds.size >= 2 ? "pointer" : "default"
    })
  }, "\u2696\uFE0F Compare", compareIds.size < 2 ? " (need ".concat(2 - compareIds.size, " more)") : ""), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCompareIds(new Set());
    },
    style: _objectSpread(_objectSpread({}, btnS), {}, {
      padding: "8px 16px",
      fontSize: 13,
      color: "#888884",
      borderColor: "#333330"
    })
  }, "Clear"))));
}

;(function(){
  var __mountNode = document.getElementById('root');
  if (!__mountNode) {
    __mountNode = document.createElement('div');
    __mountNode.id = 'root';
    document.body.prepend(__mountNode);
  }
  ReactDOM.render(React.createElement(VenueTracker, null), __mountNode);
})();
