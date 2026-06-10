import { i as e, j as t, n, r, t as i } from "./service-DPC6BPEh.js";
import { reactive as a, ref as o, watch as s } from "vue";
//#region node_modules/@primevue/core/api/index.mjs
var c = {
	STARTS_WITH: "startsWith",
	CONTAINS: "contains",
	NOT_CONTAINS: "notContains",
	ENDS_WITH: "endsWith",
	EQUALS: "equals",
	NOT_EQUALS: "notEquals",
	IN: "in",
	LESS_THAN: "lt",
	LESS_THAN_OR_EQUAL_TO: "lte",
	GREATER_THAN: "gt",
	GREATER_THAN_OR_EQUAL_TO: "gte",
	BETWEEN: "between",
	DATE_IS: "dateIs",
	DATE_IS_NOT: "dateIsNot",
	DATE_BEFORE: "dateBefore",
	DATE_AFTER: "dateAfter"
};
//#endregion
//#region node_modules/@primevue/core/config/index.mjs
function l(e) {
	"@babel/helpers - typeof";
	return l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, l(e);
}
function u(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function d(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? u(Object(n), !0).forEach(function(t) {
			f(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function f(e, t, n) {
	return (t = p(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function p(e) {
	var t = m(e, "string");
	return l(t) == "symbol" ? t : t + "";
}
function m(e, t) {
	if (l(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t);
		if (l(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var h = {
	ripple: !1,
	inputStyle: null,
	inputVariant: null,
	locale: {
		startsWith: "Starts with",
		contains: "Contains",
		notContains: "Not contains",
		endsWith: "Ends with",
		equals: "Equals",
		notEquals: "Not equals",
		noFilter: "No Filter",
		lt: "Less than",
		lte: "Less than or equal to",
		gt: "Greater than",
		gte: "Greater than or equal to",
		dateIs: "Date is",
		dateIsNot: "Date is not",
		dateBefore: "Date is before",
		dateAfter: "Date is after",
		clear: "Clear",
		apply: "Apply",
		matchAll: "Match All",
		matchAny: "Match Any",
		addRule: "Add Rule",
		removeRule: "Remove Rule",
		accept: "Yes",
		reject: "No",
		choose: "Choose",
		upload: "Upload",
		cancel: "Cancel",
		completed: "Completed",
		pending: "Pending",
		fileSizeTypes: [
			"B",
			"KB",
			"MB",
			"GB",
			"TB",
			"PB",
			"EB",
			"ZB",
			"YB"
		],
		dayNames: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		],
		dayNamesShort: [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		],
		dayNamesMin: [
			"Su",
			"Mo",
			"Tu",
			"We",
			"Th",
			"Fr",
			"Sa"
		],
		monthNames: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		monthNamesShort: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		],
		chooseYear: "Choose Year",
		chooseMonth: "Choose Month",
		chooseDate: "Choose Date",
		prevDecade: "Previous Decade",
		nextDecade: "Next Decade",
		prevYear: "Previous Year",
		nextYear: "Next Year",
		prevMonth: "Previous Month",
		nextMonth: "Next Month",
		prevHour: "Previous Hour",
		nextHour: "Next Hour",
		prevMinute: "Previous Minute",
		nextMinute: "Next Minute",
		prevSecond: "Previous Second",
		nextSecond: "Next Second",
		am: "am",
		pm: "pm",
		today: "Today",
		weekHeader: "Wk",
		firstDayOfWeek: 0,
		showMonthAfterYear: !1,
		dateFormat: "mm/dd/yy",
		weak: "Weak",
		medium: "Medium",
		strong: "Strong",
		passwordPrompt: "Enter a password",
		emptyFilterMessage: "No results found",
		searchMessage: "{0} results are available",
		selectionMessage: "{0} items selected",
		emptySelectionMessage: "No selected item",
		emptySearchMessage: "No results found",
		fileChosenMessage: "{0} files",
		noFileChosenMessage: "No file chosen",
		emptyMessage: "No available options",
		aria: {
			trueLabel: "True",
			falseLabel: "False",
			nullLabel: "Not Selected",
			star: "1 star",
			stars: "{star} stars",
			selectAll: "All items selected",
			unselectAll: "All items unselected",
			close: "Close",
			previous: "Previous",
			next: "Next",
			navigation: "Navigation",
			scrollTop: "Scroll Top",
			moveTop: "Move Top",
			moveUp: "Move Up",
			moveDown: "Move Down",
			moveBottom: "Move Bottom",
			moveToTarget: "Move to Target",
			moveToSource: "Move to Source",
			moveAllToTarget: "Move All to Target",
			moveAllToSource: "Move All to Source",
			pageLabel: "Page {page}",
			firstPageLabel: "First Page",
			lastPageLabel: "Last Page",
			nextPageLabel: "Next Page",
			prevPageLabel: "Previous Page",
			rowsPerPageLabel: "Rows per page",
			jumpToPageDropdownLabel: "Jump to Page Dropdown",
			jumpToPageInputLabel: "Jump to Page Input",
			selectRow: "Row Selected",
			unselectRow: "Row Unselected",
			expandRow: "Row Expanded",
			collapseRow: "Row Collapsed",
			showFilterMenu: "Show Filter Menu",
			hideFilterMenu: "Hide Filter Menu",
			filterOperator: "Filter Operator",
			filterConstraint: "Filter Constraint",
			editRow: "Row Edit",
			saveEdit: "Save Edit",
			cancelEdit: "Cancel Edit",
			listView: "List View",
			gridView: "Grid View",
			slide: "Slide",
			slideNumber: "{slideNumber}",
			zoomImage: "Zoom Image",
			zoomIn: "Zoom In",
			zoomOut: "Zoom Out",
			rotateRight: "Rotate Right",
			rotateLeft: "Rotate Left",
			listLabel: "Option List"
		}
	},
	filterMatchModeOptions: {
		text: [
			c.STARTS_WITH,
			c.CONTAINS,
			c.NOT_CONTAINS,
			c.ENDS_WITH,
			c.EQUALS,
			c.NOT_EQUALS
		],
		numeric: [
			c.EQUALS,
			c.NOT_EQUALS,
			c.LESS_THAN,
			c.LESS_THAN_OR_EQUAL_TO,
			c.GREATER_THAN,
			c.GREATER_THAN_OR_EQUAL_TO
		],
		date: [
			c.DATE_IS,
			c.DATE_IS_NOT,
			c.DATE_BEFORE,
			c.DATE_AFTER
		]
	},
	zIndex: {
		modal: 1100,
		overlay: 1e3,
		menu: 1e3,
		tooltip: 1100
	},
	theme: void 0,
	unstyled: !1,
	pt: void 0,
	ptOptions: {
		mergeSections: !0,
		mergeProps: !1
	},
	csp: { nonce: void 0 }
}, g = Symbol();
function _(e, t) {
	var n = { config: a(t) };
	return e.config.globalProperties.$primevue = n, e.provide(g, n), y(), b(e, n), n;
}
var v = [];
function y() {
	r.clear(), v.forEach(function(e) {
		return e?.();
	}), v = [];
}
function b(t, a) {
	var c = o(!1), l = function() {
		if (a.config?.theme !== "none" && !e.isStyleNameLoaded("common")) {
			var t, r = n.getCommonTheme?.call(n) || {}, i = r.primitive, o = r.semantic, s = r.global, c = r.style, l = { nonce: (t = a.config) == null || (t = t.csp) == null ? void 0 : t.nonce };
			n.load(i?.css, d({ name: "primitive-variables" }, l)), n.load(o?.css, d({ name: "semantic-variables" }, l)), n.load(s?.css, d({ name: "global-variables" }, l)), n.loadStyle(d({ name: "global-style" }, l), c), e.setLoadedStyleName("common");
		}
	};
	r.on("theme:change", function(e) {
		c.value ||= (t.config.globalProperties.$primevue.config.theme = e, !0);
	});
	var u = s(a.config, function(e, t) {
		i.emit("config:change", {
			newValue: e,
			oldValue: t
		});
	}, {
		immediate: !0,
		deep: !0
	}), f = s(function() {
		return a.config.ripple;
	}, function(e, t) {
		i.emit("config:ripple:change", {
			newValue: e,
			oldValue: t
		});
	}, {
		immediate: !0,
		deep: !0
	}), p = s(function() {
		return a.config.theme;
	}, function(t, n) {
		c.value || e.setTheme(t), a.config.unstyled || l(), c.value = !1, i.emit("config:theme:change", {
			newValue: t,
			oldValue: n
		});
	}, {
		immediate: !0,
		deep: !1
	}), m = s(function() {
		return a.config.unstyled;
	}, function(e, t) {
		!e && a.config.theme && l(), i.emit("config:unstyled:change", {
			newValue: e,
			oldValue: t
		});
	}, {
		immediate: !0,
		deep: !0
	});
	v.push(u), v.push(f), v.push(p), v.push(m);
}
var x = { install: function(e, n) {
	_(e, t(h, n));
} };
//#endregion
//#region src/utils/primeThemePresets.ts
function S(e, t) {
	e.use(x, { theme: {
		preset: t,
		options: { darkModeSelector: ".dark" }
	} });
}
//#endregion
export { S as setupPrimeVue };
