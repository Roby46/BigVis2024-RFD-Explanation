// Version 1.19.2 sunburst-chart - https://github.com/vasturiano/sunburst-chart
! function(t, n) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Sunburst = n()
}(this, (function() {
	"use strict";

	function t(t) {
		return function(t) {
			if (Array.isArray(t)) return n(t)
		}(t) || function(t) {
			if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
		}(t) || function(t, e) {
			if (!t) return;
			if ("string" == typeof t) return n(t, e);
			var r = Object.prototype.toString.call(t).slice(8, -1);
			"Object" === r && t.constructor && (r = t.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(t);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(t, e)
		}(t) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function n(t, n) {
		(null == n || n > t.length) && (n = t.length);
		for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
		return r
	}! function(t, n) {
		void 0 === n && (n = {});
		var e = n.insertAt;
		if (t && "undefined" != typeof document) {
			var r = document.head || document.getElementsByTagName("head")[0],
				i = document.createElement("style");
			i.type = "text/css", "top" === e && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t))
		}
	}(".sunburst-viz .slice path {\n  cursor: pointer;\n}\n\n.sunburst-viz text {\n  dominant-baseline: middle;\n  text-anchor: middle;\n  pointer-events: none;\n  fill: #222;\n}\n\n.sunburst-viz .text-contour {\n  fill: none;\n  stroke: white;\n  stroke-linejoin: 'round';\n}\n\n.sunburst-viz .main-arc {\n  stroke-width: 1px;\n  transition: opacity .4s;\n}\n\n.sunburst-viz .main-arc:hover {\n  opacity: 0.85;\n  transition: opacity .05s;\n}\n\n.sunburst-viz .hidden-arc {\n  fill: none;\n}\n\n.sunburst-viz .tooltip {\n  max-width: 620px;\n  white-space: normal;\n}\n\n.sunburst-viz .tooltip-title {\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.sunburst-viz {\n  position: relative;\n}\n");
	var e = "http://www.w3.org/1999/xhtml",
		r = {
			svg: "http://www.w3.org/2000/svg",
			xhtml: e,
			xlink: "http://www.w3.org/1999/xlink",
			xml: "http://www.w3.org/XML/1998/namespace",
			xmlns: "http://www.w3.org/2000/xmlns/"
		};

	function i(t) {
		var n = t += "",
			e = n.indexOf(":");
		return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), r.hasOwnProperty(n) ? {
			space: r[n],
			local: t
		} : t
	}

	function o(t) {
		return function() {
			var n = this.ownerDocument,
				r = this.namespaceURI;
			return r === e && n.documentElement.namespaceURI === e ? n.createElement(t) : n.createElementNS(r, t)
		}
	}

	function a(t) {
		return function() {
			return this.ownerDocument.createElementNS(t.space, t.local)
		}
	}

	function u(t) {
		var n = i(t);
		return (n.local ? a : o)(n)
	}

	function l() {}

	function s(t) {
		return null == t ? l : function() {
			return this.querySelector(t)
		}
	}

	function c() {
		return []
	}

	function f(t) {
		return null == t ? c : function() {
			return this.querySelectorAll(t)
		}
	}

	function h(t) {
		return function() {
			return null == (n = t.apply(this, arguments)) ? [] : Array.isArray(n) ? n : Array.from(n);
			var n
		}
	}

	function p(t) {
		return function() {
			return this.matches(t)
		}
	}

	function d(t) {
		return function(n) {
			return n.matches(t)
		}
	}
	var y = Array.prototype.find;

	function v() {
		return this.firstElementChild
	}
	var g = Array.prototype.filter;

	function m() {
		return Array.from(this.children)
	}

	function w(t) {
		return new Array(t.length)
	}

	function _(t, n) {
		this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
	}

	function x(t, n, e, r, i, o) {
		for (var a, u = 0, l = n.length, s = o.length; u < s; ++u)(a = n[u]) ? (a.__data__ = o[u], r[u] = a) : e[u] = new _(t, o[u]);
		for (; u < l; ++u)(a = n[u]) && (i[u] = a)
	}

	function b(t, n, e, r, i, o, a) {
		var u, l, s, c = new Map,
			f = n.length,
			h = o.length,
			p = new Array(f);
		for (u = 0; u < f; ++u)(l = n[u]) && (p[u] = s = a.call(l, l.__data__, u, n) + "", c.has(s) ? i[u] = l : c.set(s, l));
		for (u = 0; u < h; ++u) s = a.call(t, o[u], u, o) + "", (l = c.get(s)) ? (r[u] = l, l.__data__ = o[u], c.delete(s)) : e[u] = new _(t, o[u]);
		for (u = 0; u < f; ++u)(l = n[u]) && c.get(p[u]) === l && (i[u] = l)
	}

	function M(t) {
		return t.__data__
	}

	function A(t) {
		return "object" == typeof t && "length" in t ? t : Array.from(t)
	}

	function S(t, n) {
		return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
	}

	function N(t) {
		return function() {
			this.removeAttribute(t)
		}
	}

	function $(t) {
		return function() {
			this.removeAttributeNS(t.space, t.local)
		}
	}

	function k(t, n) {
		return function() {
			this.setAttribute(t, n)
		}
	}

	function E(t, n) {
		return function() {
			this.setAttributeNS(t.space, t.local, n)
		}
	}

	function T(t, n) {
		return function() {
			var e = n.apply(this, arguments);
			null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
		}
	}

	function C(t, n) {
		return function() {
			var e = n.apply(this, arguments);
			null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
		}
	}

	function O(t) {
		return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
	}

	function j(t) {
		return function() {
			this.style.removeProperty(t)
		}
	}

	function P(t, n, e) {
		return function() {
			this.style.setProperty(t, n, e)
		}
	}

	function R(t, n, e) {
		return function() {
			var r = n.apply(this, arguments);
			null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
		}
	}

	function I(t, n) {
		return t.style.getPropertyValue(n) || O(t).getComputedStyle(t, null).getPropertyValue(n)
	}

	function L(t) {
		return function() {
			delete this[t]
		}
	}

	function q(t, n) {
		return function() {
			this[t] = n
		}
	}

	function z(t, n) {
		return function() {
			var e = n.apply(this, arguments);
			null == e ? delete this[t] : this[t] = e
		}
	}

	function B(t) {
		return t.trim().split(/^|\s+/)
	}

	function D(t) {
		return t.classList || new H(t)
	}

	function H(t) {
		this._node = t, this._names = B(t.getAttribute("class") || "")
	}

	function X(t, n) {
		for (var e = D(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
	}

	function U(t, n) {
		for (var e = D(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
	}

	function V(t) {
		return function() {
			X(this, t)
		}
	}

	function Y(t) {
		return function() {
			U(this, t)
		}
	}

	function F(t, n) {
		return function() {
			(n.apply(this, arguments) ? X : U)(this, t)
		}
	}

	function W() {
		this.textContent = ""
	}

	function G(t) {
		return function() {
			this.textContent = t
		}
	}

	function Z(t) {
		return function() {
			var n = t.apply(this, arguments);
			this.textContent = null == n ? "" : n
		}
	}

	function K() {
		this.innerHTML = ""
	}

	function Q(t) {
		return function() {
			this.innerHTML = t
		}
	}

	function J(t) {
		return function() {
			var n = t.apply(this, arguments);
			this.innerHTML = null == n ? "" : n
		}
	}

	function tt() {
		this.nextSibling && this.parentNode.appendChild(this)
	}

	function nt() {
		this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
	}

	function et() {
		return null
	}

	function rt() {
		var t = this.parentNode;
		t && t.removeChild(this)
	}

	function it() {
		var t = this.cloneNode(!1),
			n = this.parentNode;
		return n ? n.insertBefore(t, this.nextSibling) : t
	}

	function ot() {
		var t = this.cloneNode(!0),
			n = this.parentNode;
		return n ? n.insertBefore(t, this.nextSibling) : t
	}

	function at(t) {
		return function() {
			var n = this.__on;
			if (n) {
				for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.options);
				++i ? n.length = i : delete this.__on
			}
		}
	}

	function ut(t, n, e) {
		return function() {
			var r, i = this.__on,
				o = function(t) {
					return function(n) {
						t.call(this, n, this.__data__)
					}
				}(n);
			if (i)
				for (var a = 0, u = i.length; a < u; ++a)
					if ((r = i[a]).type === t.type && r.name === t.name) return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = o, r.options = e), void(r.value = n);
			this.addEventListener(t.type, o, e), r = {
				type: t.type,
				name: t.name,
				value: n,
				listener: o,
				options: e
			}, i ? i.push(r) : this.__on = [r]
		}
	}

	function lt(t, n, e) {
		var r = O(t),
			i = r.CustomEvent;
		"function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
	}

	function st(t, n) {
		return function() {
			return lt(this, t, n)
		}
	}

	function ct(t, n) {
		return function() {
			return lt(this, t, n.apply(this, arguments))
		}
	}
	_.prototype = {
		constructor: _,
		appendChild: function(t) {
			return this._parent.insertBefore(t, this._next)
		},
		insertBefore: function(t, n) {
			return this._parent.insertBefore(t, n)
		},
		querySelector: function(t) {
			return this._parent.querySelector(t)
		},
		querySelectorAll: function(t) {
			return this._parent.querySelectorAll(t)
		}
	}, H.prototype = {
		add: function(t) {
			this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
		},
		remove: function(t) {
			var n = this._names.indexOf(t);
			n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
		},
		contains: function(t) {
			return this._names.indexOf(t) >= 0
		}
	};
	var ft = [null];

	function ht(t, n) {
		this._groups = t, this._parents = n
	}

	function pt() {
		return new ht([
			[document.documentElement]
		], ft)
	}

	function dt(t) {
		return "string" == typeof t ? new ht([
			[document.querySelector(t)]
		], [document.documentElement]) : new ht([
			[t]
		], ft)
	}

	function yt(t, n) {
		return null == t || null == n ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
	}

	function vt(t, n) {
		return null == t || null == n ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
	}

	function gt(t) {
		let n, e, r;

		function i(t, r, i = 0, o = t.length) {
			if (i < o) {
				if (0 !== n(r, r)) return o;
				do {
					const n = i + o >>> 1;
					e(t[n], r) < 0 ? i = n + 1 : o = n
				} while (i < o)
			}
			return i
		}
		return 2 !== t.length ? (n = yt, e = (n, e) => yt(t(n), e), r = (n, e) => t(n) - e) : (n = t === yt || t === vt ? t : mt, e = t, r = t), {
			left: i,
			center: function(t, n, e = 0, o = t.length) {
				const a = i(t, n, e, o - 1);
				return a > e && r(t[a - 1], n) > -r(t[a], n) ? a - 1 : a
			},
			right: function(t, r, i = 0, o = t.length) {
				if (i < o) {
					if (0 !== n(r, r)) return o;
					do {
						const n = i + o >>> 1;
						e(t[n], r) <= 0 ? i = n + 1 : o = n
					} while (i < o)
				}
				return i
			}
		}
	}

	function mt() {
		return 0
	}
	ht.prototype = pt.prototype = {
		constructor: ht,
		select: function(t) {
			"function" != typeof t && (t = s(t));
			for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
				for (var o, a, u = n[i], l = u.length, c = r[i] = new Array(l), f = 0; f < l; ++f)(o = u[f]) && (a = t.call(o, o.__data__, f, u)) && ("__data__" in o && (a.__data__ = o.__data__), c[f] = a);
			return new ht(r, this._parents)
		},
		selectAll: function(t) {
			t = "function" == typeof t ? h(t) : f(t);
			for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
				for (var a, u = n[o], l = u.length, s = 0; s < l; ++s)(a = u[s]) && (r.push(t.call(a, a.__data__, s, u)), i.push(a));
			return new ht(r, i)
		},
		selectChild: function(t) {
			return this.select(null == t ? v : function(t) {
				return function() {
					return y.call(this.children, t)
				}
			}("function" == typeof t ? t : d(t)))
		},
		selectChildren: function(t) {
			return this.selectAll(null == t ? m : function(t) {
				return function() {
					return g.call(this.children, t)
				}
			}("function" == typeof t ? t : d(t)))
		},
		filter: function(t) {
			"function" != typeof t && (t = p(t));
			for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
				for (var o, a = n[i], u = a.length, l = r[i] = [], s = 0; s < u; ++s)(o = a[s]) && t.call(o, o.__data__, s, a) && l.push(o);
			return new ht(r, this._parents)
		},
		data: function(t, n) {
			if (!arguments.length) return Array.from(this, M);
			var e, r = n ? b : x,
				i = this._parents,
				o = this._groups;
			"function" != typeof t && (e = t, t = function() {
				return e
			});
			for (var a = o.length, u = new Array(a), l = new Array(a), s = new Array(a), c = 0; c < a; ++c) {
				var f = i[c],
					h = o[c],
					p = h.length,
					d = A(t.call(f, f && f.__data__, c, i)),
					y = d.length,
					v = l[c] = new Array(y),
					g = u[c] = new Array(y);
				r(f, h, v, g, s[c] = new Array(p), d, n);
				for (var m, w, _ = 0, S = 0; _ < y; ++_)
					if (m = v[_]) {
						for (_ >= S && (S = _ + 1); !(w = g[S]) && ++S < y;);
						m._next = w || null
					}
			}
			return (u = new ht(u, i))._enter = l, u._exit = s, u
		},
		enter: function() {
			return new ht(this._enter || this._groups.map(w), this._parents)
		},
		exit: function() {
			return new ht(this._exit || this._groups.map(w), this._parents)
		},
		join: function(t, n, e) {
			var r = this.enter(),
				i = this,
				o = this.exit();
			return "function" == typeof t ? (r = t(r)) && (r = r.selection()) : r = r.append(t + ""), null != n && (i = n(i)) && (i = i.selection()), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i
		},
		merge: function(t) {
			for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), u = new Array(i), l = 0; l < a; ++l)
				for (var s, c = e[l], f = r[l], h = c.length, p = u[l] = new Array(h), d = 0; d < h; ++d)(s = c[d] || f[d]) && (p[d] = s);
			for (; l < i; ++l) u[l] = e[l];
			return new ht(u, this._parents)
		},
		selection: function() {
			return this
		},
		order: function() {
			for (var t = this._groups, n = -1, e = t.length; ++n < e;)
				for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0;)(r = i[o]) && (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), a = r);
			return this
		},
		sort: function(t) {
			function n(n, e) {
				return n && e ? t(n.__data__, e.__data__) : !n - !e
			}
			t || (t = S);
			for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
				for (var a, u = e[o], l = u.length, s = i[o] = new Array(l), c = 0; c < l; ++c)(a = u[c]) && (s[c] = a);
				s.sort(n)
			}
			return new ht(i, this._parents).order()
		},
		call: function() {
			var t = arguments[0];
			return arguments[0] = this, t.apply(null, arguments), this
		},
		nodes: function() {
			return Array.from(this)
		},
		node: function() {
			for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
				for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
					var a = r[i];
					if (a) return a
				}
			return null
		},
		size: function() {
			let t = 0;
			for (const n of this) ++t;
			return t
		},
		empty: function() {
			return !this.node()
		},
		each: function(t) {
			for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
				for (var i, o = n[e], a = 0, u = o.length; a < u; ++a)(i = o[a]) && t.call(i, i.__data__, a, o);
			return this
		},
		attr: function(t, n) {
			var e = i(t);
			if (arguments.length < 2) {
				var r = this.node();
				return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
			}
			return this.each((null == n ? e.local ? $ : N : "function" == typeof n ? e.local ? C : T : e.local ? E : k)(e, n))
		},
		style: function(t, n, e) {
			return arguments.length > 1 ? this.each((null == n ? j : "function" == typeof n ? R : P)(t, n, null == e ? "" : e)) : I(this.node(), t)
		},
		property: function(t, n) {
			return arguments.length > 1 ? this.each((null == n ? L : "function" == typeof n ? z : q)(t, n)) : this.node()[t]
		},
		classed: function(t, n) {
			var e = B(t + "");
			if (arguments.length < 2) {
				for (var r = D(this.node()), i = -1, o = e.length; ++i < o;)
					if (!r.contains(e[i])) return !1;
				return !0
			}
			return this.each(("function" == typeof n ? F : n ? V : Y)(e, n))
		},
		text: function(t) {
			return arguments.length ? this.each(null == t ? W : ("function" == typeof t ? Z : G)(t)) : this.node().textContent
		},
		html: function(t) {
			return arguments.length ? this.each(null == t ? K : ("function" == typeof t ? J : Q)(t)) : this.node().innerHTML
		},
		raise: function() {
			return this.each(tt)
		},
		lower: function() {
			return this.each(nt)
		},
		append: function(t) {
			var n = "function" == typeof t ? t : u(t);
			return this.select((function() {
				return this.appendChild(n.apply(this, arguments))
			}))
		},
		insert: function(t, n) {
			var e = "function" == typeof t ? t : u(t),
				r = null == n ? et : "function" == typeof n ? n : s(n);
			return this.select((function() {
				return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
			}))
		},
		remove: function() {
			return this.each(rt)
		},
		clone: function(t) {
			return this.select(t ? ot : it)
		},
		datum: function(t) {
			return arguments.length ? this.property("__data__", t) : this.node().__data__
		},
		on: function(t, n, e) {
			var r, i, o = function(t) {
					return t.trim().split(/^|\s+/).map((function(t) {
						var n = "",
							e = t.indexOf(".");
						return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
							type: t,
							name: n
						}
					}))
				}(t + ""),
				a = o.length;
			if (!(arguments.length < 2)) {
				for (u = n ? ut : at, r = 0; r < a; ++r) this.each(u(o[r], n, e));
				return this
			}
			var u = this.node().__on;
			if (u)
				for (var l, s = 0, c = u.length; s < c; ++s)
					for (r = 0, l = u[s]; r < a; ++r)
						if ((i = o[r]).type === l.type && i.name === l.name) return l.value
		},
		dispatch: function(t, n) {
			return this.each(("function" == typeof n ? ct : st)(t, n))
		},
		[Symbol.iterator]: function*() {
			for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
				for (var r, i = t[n], o = 0, a = i.length; o < a; ++o)(r = i[o]) && (yield r)
		}
	};
	const wt = gt(yt).right;
	gt((function(t) {
		return null === t ? NaN : +t
	})).center;
	var _t = wt;
	const xt = Math.sqrt(50),
		bt = Math.sqrt(10),
		Mt = Math.sqrt(2);

	function At(t, n, e) {
		const r = (n - t) / Math.max(0, e),
			i = Math.floor(Math.log10(r)),
			o = r / Math.pow(10, i),
			a = o >= xt ? 10 : o >= bt ? 5 : o >= Mt ? 2 : 1;
		let u, l, s;
		return i < 0 ? (s = Math.pow(10, -i) / a, u = Math.round(t * s), l = Math.round(n * s), u / s < t && ++u, l / s > n && --l, s = -s) : (s = Math.pow(10, i) * a, u = Math.round(t / s), l = Math.round(n / s), u * s < t && ++u, l * s > n && --l), l < u && .5 <= e && e < 2 ? At(t, n, 2 * e) : [u, l, s]
	}

	function St(t, n, e) {
		return At(t = +t, n = +n, e = +e)[2]
	}

	function Nt(t, n) {
		switch (arguments.length) {
			case 0:
				break;
			case 1:
				this.range(t);
				break;
			default:
				this.range(n).domain(t)
		}
		return this
	}

	function $t(t, n, e) {
		t.prototype = n.prototype = e, e.constructor = t
	}

	function kt(t, n) {
		var e = Object.create(t.prototype);
		for (var r in n) e[r] = n[r];
		return e
	}

	function Et() {}
	var Tt = .7,
		Ct = 1 / Tt,
		Ot = "\\s*([+-]?\\d+)\\s*",
		jt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
		Pt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
		Rt = /^#([0-9a-f]{3,8})$/,
		It = new RegExp(`^rgb\\(${Ot},${Ot},${Ot}\\)$`),
		Lt = new RegExp(`^rgb\\(${Pt},${Pt},${Pt}\\)$`),
		qt = new RegExp(`^rgba\\(${Ot},${Ot},${Ot},${jt}\\)$`),
		zt = new RegExp(`^rgba\\(${Pt},${Pt},${Pt},${jt}\\)$`),
		Bt = new RegExp(`^hsl\\(${jt},${Pt},${Pt}\\)$`),
		Dt = new RegExp(`^hsla\\(${jt},${Pt},${Pt},${jt}\\)$`),
		Ht = {
			aliceblue: 15792383,
			antiquewhite: 16444375,
			aqua: 65535,
			aquamarine: 8388564,
			azure: 15794175,
			beige: 16119260,
			bisque: 16770244,
			black: 0,
			blanchedalmond: 16772045,
			blue: 255,
			blueviolet: 9055202,
			brown: 10824234,
			burlywood: 14596231,
			cadetblue: 6266528,
			chartreuse: 8388352,
			chocolate: 13789470,
			coral: 16744272,
			cornflowerblue: 6591981,
			cornsilk: 16775388,
			crimson: 14423100,
			cyan: 65535,
			darkblue: 139,
			darkcyan: 35723,
			darkgoldenrod: 12092939,
			darkgray: 11119017,
			darkgreen: 25600,
			darkgrey: 11119017,
			darkkhaki: 12433259,
			darkmagenta: 9109643,
			darkolivegreen: 5597999,
			darkorange: 16747520,
			darkorchid: 10040012,
			darkred: 9109504,
			darksalmon: 15308410,
			darkseagreen: 9419919,
			darkslateblue: 4734347,
			darkslategray: 3100495,
			darkslategrey: 3100495,
			darkturquoise: 52945,
			darkviolet: 9699539,
			deeppink: 16716947,
			deepskyblue: 49151,
			dimgray: 6908265,
			dimgrey: 6908265,
			dodgerblue: 2003199,
			firebrick: 11674146,
			floralwhite: 16775920,
			forestgreen: 2263842,
			fuchsia: 16711935,
			gainsboro: 14474460,
			ghostwhite: 16316671,
			gold: 16766720,
			goldenrod: 14329120,
			gray: 8421504,
			green: 32768,
			greenyellow: 11403055,
			grey: 8421504,
			honeydew: 15794160,
			hotpink: 16738740,
			indianred: 13458524,
			indigo: 4915330,
			ivory: 16777200,
			khaki: 15787660,
			lavender: 15132410,
			lavenderblush: 16773365,
			lawngreen: 8190976,
			lemonchiffon: 16775885,
			lightblue: 11393254,
			lightcoral: 15761536,
			lightcyan: 14745599,
			lightgoldenrodyellow: 16448210,
			lightgray: 13882323,
			lightgreen: 9498256,
			lightgrey: 13882323,
			lightpink: 16758465,
			lightsalmon: 16752762,
			lightseagreen: 2142890,
			lightskyblue: 8900346,
			lightslategray: 7833753,
			lightslategrey: 7833753,
			lightsteelblue: 11584734,
			lightyellow: 16777184,
			lime: 65280,
			limegreen: 3329330,
			linen: 16445670,
			magenta: 16711935,
			maroon: 8388608,
			mediumaquamarine: 6737322,
			mediumblue: 205,
			mediumorchid: 12211667,
			mediumpurple: 9662683,
			mediumseagreen: 3978097,
			mediumslateblue: 8087790,
			mediumspringgreen: 64154,
			mediumturquoise: 4772300,
			mediumvioletred: 13047173,
			midnightblue: 1644912,
			mintcream: 16121850,
			mistyrose: 16770273,
			moccasin: 16770229,
			navajowhite: 16768685,
			navy: 128,
			oldlace: 16643558,
			olive: 8421376,
			olivedrab: 7048739,
			orange: 16753920,
			orangered: 16729344,
			orchid: 14315734,
			palegoldenrod: 15657130,
			palegreen: 10025880,
			paleturquoise: 11529966,
			palevioletred: 14381203,
			papayawhip: 16773077,
			peachpuff: 16767673,
			peru: 13468991,
			pink: 16761035,
			plum: 14524637,
			powderblue: 11591910,
			purple: 8388736,
			rebeccapurple: 6697881,
			red: 16711680,
			rosybrown: 12357519,
			royalblue: 4286945,
			saddlebrown: 9127187,
			salmon: 16416882,
			sandybrown: 16032864,
			seagreen: 3050327,
			seashell: 16774638,
			sienna: 10506797,
			silver: 12632256,
			skyblue: 8900331,
			slateblue: 6970061,
			slategray: 7372944,
			slategrey: 7372944,
			snow: 16775930,
			springgreen: 65407,
			steelblue: 4620980,
			tan: 13808780,
			teal: 32896,
			thistle: 14204888,
			tomato: 16737095,
			turquoise: 4251856,
			violet: 15631086,
			wheat: 16113331,
			white: 16777215,
			whitesmoke: 16119285,
			yellow: 16776960,
			yellowgreen: 10145074
		};

	function Xt() {
		return this.rgb().formatHex()
	}

	function Ut() {
		return this.rgb().formatRgb()
	}

	function Vt(t) {
		var n, e;
		return t = (t + "").trim().toLowerCase(), (n = Rt.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? Yt(n) : 3 === e ? new Gt(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? Ft(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? Ft(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = It.exec(t)) ? new Gt(n[1], n[2], n[3], 1) : (n = Lt.exec(t)) ? new Gt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = qt.exec(t)) ? Ft(n[1], n[2], n[3], n[4]) : (n = zt.exec(t)) ? Ft(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Bt.exec(t)) ? nn(n[1], n[2] / 100, n[3] / 100, 1) : (n = Dt.exec(t)) ? nn(n[1], n[2] / 100, n[3] / 100, n[4]) : Ht.hasOwnProperty(t) ? Yt(Ht[t]) : "transparent" === t ? new Gt(NaN, NaN, NaN, 0) : null
	}

	function Yt(t) {
		return new Gt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
	}

	function Ft(t, n, e, r) {
		return r <= 0 && (t = n = e = NaN), new Gt(t, n, e, r)
	}

	function Wt(t, n, e, r) {
		return 1 === arguments.length ? ((i = t) instanceof Et || (i = Vt(i)), i ? new Gt((i = i.rgb()).r, i.g, i.b, i.opacity) : new Gt) : new Gt(t, n, e, null == r ? 1 : r);
		var i
	}

	function Gt(t, n, e, r) {
		this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
	}

	function Zt() {
		return `#${tn(this.r)}${tn(this.g)}${tn(this.b)}`
	}

	function Kt() {
		const t = Qt(this.opacity);
		return `${1===t?"rgb(":"rgba("}${Jt(this.r)}, ${Jt(this.g)}, ${Jt(this.b)}${1===t?")":`, ${t})`}`
	}

	function Qt(t) {
		return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
	}

	function Jt(t) {
		return Math.max(0, Math.min(255, Math.round(t) || 0))
	}

	function tn(t) {
		return ((t = Jt(t)) < 16 ? "0" : "") + t.toString(16)
	}

	function nn(t, n, e, r) {
		return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new rn(t, n, e, r)
	}

	function en(t) {
		if (t instanceof rn) return new rn(t.h, t.s, t.l, t.opacity);
		if (t instanceof Et || (t = Vt(t)), !t) return new rn;
		if (t instanceof rn) return t;
		var n = (t = t.rgb()).r / 255,
			e = t.g / 255,
			r = t.b / 255,
			i = Math.min(n, e, r),
			o = Math.max(n, e, r),
			a = NaN,
			u = o - i,
			l = (o + i) / 2;
		return u ? (a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4, u /= l < .5 ? o + i : 2 - o - i, a *= 60) : u = l > 0 && l < 1 ? 0 : a, new rn(a, u, l, t.opacity)
	}

	function rn(t, n, e, r) {
		this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
	}

	function on(t) {
		return (t = (t || 0) % 360) < 0 ? t + 360 : t
	}

	function an(t) {
		return Math.max(0, Math.min(1, t || 0))
	}

	function un(t, n, e) {
		return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
	}
	$t(Et, Vt, {
		copy(t) {
			return Object.assign(new this.constructor, this, t)
		},
		displayable() {
			return this.rgb().displayable()
		},
		hex: Xt,
		formatHex: Xt,
		formatHex8: function() {
			return this.rgb().formatHex8()
		},
		formatHsl: function() {
			return en(this).formatHsl()
		},
		formatRgb: Ut,
		toString: Ut
	}), $t(Gt, Wt, kt(Et, {
		brighter(t) {
			return t = null == t ? Ct : Math.pow(Ct, t), new Gt(this.r * t, this.g * t, this.b * t, this.opacity)
		},
		darker(t) {
			return t = null == t ? Tt : Math.pow(Tt, t), new Gt(this.r * t, this.g * t, this.b * t, this.opacity)
		},
		rgb() {
			return this
		},
		clamp() {
			return new Gt(Jt(this.r), Jt(this.g), Jt(this.b), Qt(this.opacity))
		},
		displayable() {
			return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
		},
		hex: Zt,
		formatHex: Zt,
		formatHex8: function() {
			return `#${tn(this.r)}${tn(this.g)}${tn(this.b)}${tn(255*(isNaN(this.opacity)?1:this.opacity))}`
		},
		formatRgb: Kt,
		toString: Kt
	})), $t(rn, (function(t, n, e, r) {
		return 1 === arguments.length ? en(t) : new rn(t, n, e, null == r ? 1 : r)
	}), kt(Et, {
		brighter(t) {
			return t = null == t ? Ct : Math.pow(Ct, t), new rn(this.h, this.s, this.l * t, this.opacity)
		},
		darker(t) {
			return t = null == t ? Tt : Math.pow(Tt, t), new rn(this.h, this.s, this.l * t, this.opacity)
		},
		rgb() {
			var t = this.h % 360 + 360 * (this.h < 0),
				n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
				e = this.l,
				r = e + (e < .5 ? e : 1 - e) * n,
				i = 2 * e - r;
			return new Gt(un(t >= 240 ? t - 240 : t + 120, i, r), un(t, i, r), un(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
		},
		clamp() {
			return new rn(on(this.h), an(this.s), an(this.l), Qt(this.opacity))
		},
		displayable() {
			return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
		},
		formatHsl() {
			const t = Qt(this.opacity);
			return `${1===t?"hsl(":"hsla("}${on(this.h)}, ${100*an(this.s)}%, ${100*an(this.l)}%${1===t?")":`, ${t})`}`
		}
	}));
	var ln = t => () => t;

	function sn(t) {
		return 1 == (t = +t) ? cn : function(n, e) {
			return e - n ? function(t, n, e) {
				return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
					function(r) {
						return Math.pow(t + r * n, e)
					}
			}(n, e, t) : ln(isNaN(n) ? e : n)
		}
	}

	function cn(t, n) {
		var e = n - t;
		return e ? function(t, n) {
			return function(e) {
				return t + e * n
			}
		}(t, e) : ln(isNaN(t) ? n : t)
	}
	var fn = function t(n) {
		var e = sn(n);

		function r(t, n) {
			var r = e((t = Wt(t)).r, (n = Wt(n)).r),
				i = e(t.g, n.g),
				o = e(t.b, n.b),
				a = cn(t.opacity, n.opacity);
			return function(n) {
				return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = a(n), t + ""
			}
		}
		return r.gamma = t, r
	}(1);

	function hn(t, n) {
		n || (n = []);
		var e, r = t ? Math.min(n.length, t.length) : 0,
			i = n.slice();
		return function(o) {
			for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o;
			return i
		}
	}

	function pn(t, n) {
		var e, r = n ? n.length : 0,
			i = t ? Math.min(r, t.length) : 0,
			o = new Array(i),
			a = new Array(r);
		for (e = 0; e < i; ++e) o[e] = _n(t[e], n[e]);
		for (; e < r; ++e) a[e] = n[e];
		return function(t) {
			for (e = 0; e < i; ++e) a[e] = o[e](t);
			return a
		}
	}

	function dn(t, n) {
		var e = new Date;
		return t = +t, n = +n,
			function(r) {
				return e.setTime(t * (1 - r) + n * r), e
			}
	}

	function yn(t, n) {
		return t = +t, n = +n,
			function(e) {
				return t * (1 - e) + n * e
			}
	}

	function vn(t, n) {
		var e, r = {},
			i = {};
		for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? r[e] = _n(t[e], n[e]) : i[e] = n[e];
		return function(t) {
			for (e in r) i[e] = r[e](t);
			return i
		}
	}
	var gn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
		mn = new RegExp(gn.source, "g");

	function wn(t, n) {
		var e, r, i, o = gn.lastIndex = mn.lastIndex = 0,
			a = -1,
			u = [],
			l = [];
		for (t += "", n += "";
			(e = gn.exec(t)) && (r = mn.exec(n));)(i = r.index) > o && (i = n.slice(o, i), u[a] ? u[a] += i : u[++a] = i), (e = e[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, l.push({
			i: a,
			x: yn(e, r)
		})), o = mn.lastIndex;
		return o < n.length && (i = n.slice(o), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? l[0] ? function(t) {
			return function(n) {
				return t(n) + ""
			}
		}(l[0].x) : function(t) {
			return function() {
				return t
			}
		}(n) : (n = l.length, function(t) {
			for (var e, r = 0; r < n; ++r) u[(e = l[r]).i] = e.x(t);
			return u.join("")
		})
	}

	function _n(t, n) {
		var e, r, i = typeof n;
		return null == n || "boolean" === i ? ln(n) : ("number" === i ? yn : "string" === i ? (e = Vt(n)) ? (n = e, fn) : wn : n instanceof Vt ? fn : n instanceof Date ? dn : (r = n, !ArrayBuffer.isView(r) || r instanceof DataView ? Array.isArray(n) ? pn : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? vn : yn : hn))(t, n)
	}

	function xn(t, n) {
		return t = +t, n = +n,
			function(e) {
				return Math.round(t * (1 - e) + n * e)
			}
	}
	var bn, Mn = 180 / Math.PI,
		An = {
			translateX: 0,
			translateY: 0,
			rotate: 0,
			skewX: 0,
			scaleX: 1,
			scaleY: 1
		};

	function Sn(t, n, e, r, i, o) {
		var a, u, l;
		return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, l /= u), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
			translateX: i,
			translateY: o,
			rotate: Math.atan2(n, t) * Mn,
			skewX: Math.atan(l) * Mn,
			scaleX: a,
			scaleY: u
		}
	}

	function Nn(t, n, e, r) {
		function i(t) {
			return t.length ? t.pop() + " " : ""
		}
		return function(o, a) {
			var u = [],
				l = [];
			return o = t(o), a = t(a),
				function(t, r, i, o, a, u) {
					if (t !== i || r !== o) {
						var l = a.push("translate(", null, n, null, e);
						u.push({
							i: l - 4,
							x: yn(t, i)
						}, {
							i: l - 2,
							x: yn(r, o)
						})
					} else(i || o) && a.push("translate(" + i + n + o + e)
				}(o.translateX, o.translateY, a.translateX, a.translateY, u, l),
				function(t, n, e, o) {
					t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
						i: e.push(i(e) + "rotate(", null, r) - 2,
						x: yn(t, n)
					})) : n && e.push(i(e) + "rotate(" + n + r)
				}(o.rotate, a.rotate, u, l),
				function(t, n, e, o) {
					t !== n ? o.push({
						i: e.push(i(e) + "skewX(", null, r) - 2,
						x: yn(t, n)
					}) : n && e.push(i(e) + "skewX(" + n + r)
				}(o.skewX, a.skewX, u, l),
				function(t, n, e, r, o, a) {
					if (t !== e || n !== r) {
						var u = o.push(i(o) + "scale(", null, ",", null, ")");
						a.push({
							i: u - 4,
							x: yn(t, e)
						}, {
							i: u - 2,
							x: yn(n, r)
						})
					} else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
				}(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, l), o = a = null,
				function(t) {
					for (var n, e = -1, r = l.length; ++e < r;) u[(n = l[e]).i] = n.x(t);
					return u.join("")
				}
		}
	}
	var $n = Nn((function(t) {
			const n = new("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + "");
			return n.isIdentity ? An : Sn(n.a, n.b, n.c, n.d, n.e, n.f)
		}), "px, ", "px)", "deg)"),
		kn = Nn((function(t) {
			return null == t ? An : (bn || (bn = document.createElementNS("http://www.w3.org/2000/svg", "g")), bn.setAttribute("transform", t), (t = bn.transform.baseVal.consolidate()) ? Sn((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : An)
		}), ", ", ")", ")");

	function En(t) {
		return +t
	}
	var Tn = [0, 1];

	function Cn(t) {
		return t
	}

	function On(t, n) {
		return (n -= t = +t) ? function(e) {
			return (e - t) / n
		} : (e = isNaN(n) ? NaN : .5, function() {
			return e
		});
		var e
	}

	function jn(t, n, e) {
		var r = t[0],
			i = t[1],
			o = n[0],
			a = n[1];
		return i < r ? (r = On(i, r), o = e(a, o)) : (r = On(r, i), o = e(o, a)),
			function(t) {
				return o(r(t))
			}
	}

	function Pn(t, n, e) {
		var r = Math.min(t.length, n.length) - 1,
			i = new Array(r),
			o = new Array(r),
			a = -1;
		for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r;) i[a] = On(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
		return function(n) {
			var e = _t(t, n, 1, r) - 1;
			return o[e](i[e](n))
		}
	}

	function Rn(t, n) {
		return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
	}

	function In() {
		var t, n, e, r, i, o, a = Tn,
			u = Tn,
			l = _n,
			s = Cn;

		function c() {
			var t, n, e, l = Math.min(a.length, u.length);
			return s !== Cn && (t = a[0], n = a[l - 1], t > n && (e = t, t = n, n = e), s = function(e) {
				return Math.max(t, Math.min(n, e))
			}), r = l > 2 ? Pn : jn, i = o = null, f
		}

		function f(n) {
			return null == n || isNaN(n = +n) ? e : (i || (i = r(a.map(t), u, l)))(t(s(n)))
		}
		return f.invert = function(e) {
				return s(n((o || (o = r(u, a.map(t), yn)))(e)))
			}, f.domain = function(t) {
				return arguments.length ? (a = Array.from(t, En), c()) : a.slice()
			}, f.range = function(t) {
				return arguments.length ? (u = Array.from(t), c()) : u.slice()
			}, f.rangeRound = function(t) {
				return u = Array.from(t), l = xn, c()
			}, f.clamp = function(t) {
				return arguments.length ? (s = !!t || Cn, c()) : s !== Cn
			}, f.interpolate = function(t) {
				return arguments.length ? (l = t, c()) : l
			}, f.unknown = function(t) {
				return arguments.length ? (e = t, f) : e
			},
			function(e, r) {
				return t = e, n = r, c()
			}
	}

	function Ln(t, n) {
		if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
		var e, r = t.slice(0, e);
		return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
	}

	function qn(t) {
		return (t = Ln(Math.abs(t))) ? t[1] : NaN
	}
	var zn, Bn = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

	function Dn(t) {
		if (!(n = Bn.exec(t))) throw new Error("invalid format: " + t);
		var n;
		return new Hn({
			fill: n[1],
			align: n[2],
			sign: n[3],
			symbol: n[4],
			zero: n[5],
			width: n[6],
			comma: n[7],
			precision: n[8] && n[8].slice(1),
			trim: n[9],
			type: n[10]
		})
	}

	function Hn(t) {
		this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + ""
	}

	function Xn(t, n) {
		var e = Ln(t, n);
		if (!e) return t + "";
		var r = e[0],
			i = e[1];
		return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
	}
	Dn.prototype = Hn.prototype, Hn.prototype.toString = function() {
		return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
	};
	var Un = {
		"%": (t, n) => (100 * t).toFixed(n),
		b: t => Math.round(t).toString(2),
		c: t => t + "",
		d: function(t) {
			return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
		},
		e: (t, n) => t.toExponential(n),
		f: (t, n) => t.toFixed(n),
		g: (t, n) => t.toPrecision(n),
		o: t => Math.round(t).toString(8),
		p: (t, n) => Xn(100 * t, n),
		r: Xn,
		s: function(t, n) {
			var e = Ln(t, n);
			if (!e) return t + "";
			var r = e[0],
				i = e[1],
				o = i - (zn = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
				a = r.length;
			return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Ln(t, Math.max(0, n + o - 1))[0]
		},
		X: t => Math.round(t).toString(16).toUpperCase(),
		x: t => Math.round(t).toString(16)
	};

	function Vn(t) {
		return t
	}
	var Yn, Fn, Wn, Gn = Array.prototype.map,
		Zn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

	function Kn(t) {
		var n, e, r = void 0 === t.grouping || void 0 === t.thousands ? Vn : (n = Gn.call(t.grouping, Number), e = t.thousands + "", function(t, r) {
				for (var i = t.length, o = [], a = 0, u = n[0], l = 0; i > 0 && u > 0 && (l + u + 1 > r && (u = Math.max(1, r - l)), o.push(t.substring(i -= u, i + u)), !((l += u + 1) > r));) u = n[a = (a + 1) % n.length];
				return o.reverse().join(e)
			}),
			i = void 0 === t.currency ? "" : t.currency[0] + "",
			o = void 0 === t.currency ? "" : t.currency[1] + "",
			a = void 0 === t.decimal ? "." : t.decimal + "",
			u = void 0 === t.numerals ? Vn : function(t) {
				return function(n) {
					return n.replace(/[0-9]/g, (function(n) {
						return t[+n]
					}))
				}
			}(Gn.call(t.numerals, String)),
			l = void 0 === t.percent ? "%" : t.percent + "",
			s = void 0 === t.minus ? "−" : t.minus + "",
			c = void 0 === t.nan ? "NaN" : t.nan + "";

		function f(t) {
			var n = (t = Dn(t)).fill,
				e = t.align,
				f = t.sign,
				h = t.symbol,
				p = t.zero,
				d = t.width,
				y = t.comma,
				v = t.precision,
				g = t.trim,
				m = t.type;
			"n" === m ? (y = !0, m = "g") : Un[m] || (void 0 === v && (v = 12), g = !0, m = "g"), (p || "0" === n && "=" === e) && (p = !0, n = "0", e = "=");
			var w = "$" === h ? i : "#" === h && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "",
				_ = "$" === h ? o : /[%p]/.test(m) ? l : "",
				x = Un[m],
				b = /[defgprs%]/.test(m);

			function M(t) {
				var i, o, l, h = w,
					M = _;
				if ("c" === m) M = x(t) + M, t = "";
				else {
					var A = (t = +t) < 0 || 1 / t < 0;
					if (t = isNaN(t) ? c : x(Math.abs(t), v), g && (t = function(t) {
							t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r) switch (t[r]) {
								case ".":
									i = n = r;
									break;
								case "0":
									0 === i && (i = r), n = r;
									break;
								default:
									if (!+t[r]) break t;
									i > 0 && (i = 0)
							}
							return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t
						}(t)), A && 0 == +t && "+" !== f && (A = !1), h = (A ? "(" === f ? f : s : "-" === f || "(" === f ? "" : f) + h, M = ("s" === m ? Zn[8 + zn / 3] : "") + M + (A && "(" === f ? ")" : ""), b)
						for (i = -1, o = t.length; ++i < o;)
							if (48 > (l = t.charCodeAt(i)) || l > 57) {
								M = (46 === l ? a + t.slice(i + 1) : t.slice(i)) + M, t = t.slice(0, i);
								break
							}
				}
				y && !p && (t = r(t, 1 / 0));
				var S = h.length + t.length + M.length,
					N = S < d ? new Array(d - S + 1).join(n) : "";
				switch (y && p && (t = r(N + t, N.length ? d - M.length : 1 / 0), N = ""), e) {
					case "<":
						t = h + t + M + N;
						break;
					case "=":
						t = h + N + t + M;
						break;
					case "^":
						t = N.slice(0, S = N.length >> 1) + h + t + M + N.slice(S);
						break;
					default:
						t = N + h + t + M
				}
				return u(t)
			}
			return v = void 0 === v ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, v)) : Math.max(0, Math.min(20, v)), M.toString = function() {
				return t + ""
			}, M
		}
		return {
			format: f,
			formatPrefix: function(t, n) {
				var e = f(((t = Dn(t)).type = "f", t)),
					r = 3 * Math.max(-8, Math.min(8, Math.floor(qn(n) / 3))),
					i = Math.pow(10, -r),
					o = Zn[8 + r / 3];
				return function(t) {
					return e(i * t) + o
				}
			}
		}
	}

	function Qn(t, n, e, r) {
		var i, o = function(t, n, e) {
			e = +e;
			const r = (n = +n) < (t = +t),
				i = r ? St(n, t, e) : St(t, n, e);
			return (r ? -1 : 1) * (i < 0 ? 1 / -i : i)
		}(t, n, e);
		switch ((r = Dn(null == r ? ",f" : r)).type) {
			case "s":
				var a = Math.max(Math.abs(t), Math.abs(n));
				return null != r.precision || isNaN(i = function(t, n) {
					return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(qn(n) / 3))) - qn(Math.abs(t)))
				}(o, a)) || (r.precision = i), Wn(r, a);
			case "":
			case "e":
			case "g":
			case "p":
			case "r":
				null != r.precision || isNaN(i = function(t, n) {
					return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, qn(n) - qn(t)) + 1
				}(o, Math.max(Math.abs(t), Math.abs(n)))) || (r.precision = i - ("e" === r.type));
				break;
			case "f":
			case "%":
				null != r.precision || isNaN(i = function(t) {
					return Math.max(0, -qn(Math.abs(t)))
				}(o)) || (r.precision = i - 2 * ("%" === r.type))
		}
		return Fn(r)
	}

	function Jn(t) {
		var n = t.domain;
		return t.ticks = function(t) {
			var e = n();
			return function(t, n, e) {
				if (!((e = +e) > 0)) return [];
				if ((t = +t) == (n = +n)) return [t];
				const r = n < t,
					[i, o, a] = r ? At(n, t, e) : At(t, n, e);
				if (!(o >= i)) return [];
				const u = o - i + 1,
					l = new Array(u);
				if (r)
					if (a < 0)
						for (let t = 0; t < u; ++t) l[t] = (o - t) / -a;
					else
						for (let t = 0; t < u; ++t) l[t] = (o - t) * a;
				else if (a < 0)
					for (let t = 0; t < u; ++t) l[t] = (i + t) / -a;
				else
					for (let t = 0; t < u; ++t) l[t] = (i + t) * a;
				return l
			}(e[0], e[e.length - 1], null == t ? 10 : t)
		}, t.tickFormat = function(t, e) {
			var r = n();
			return Qn(r[0], r[r.length - 1], null == t ? 10 : t, e)
		}, t.nice = function(e) {
			null == e && (e = 10);
			var r, i, o = n(),
				a = 0,
				u = o.length - 1,
				l = o[a],
				s = o[u],
				c = 10;
			for (s < l && (i = l, l = s, s = i, i = a, a = u, u = i); c-- > 0;) {
				if ((i = St(l, s, e)) === r) return o[a] = l, o[u] = s, n(o);
				if (i > 0) l = Math.floor(l / i) * i, s = Math.ceil(s / i) * i;
				else {
					if (!(i < 0)) break;
					l = Math.ceil(l * i) / i, s = Math.floor(s * i) / i
				}
				r = i
			}
			return t
		}, t
	}

	function te() {
		var t = In()(Cn, Cn);
		return t.copy = function() {
			return Rn(t, te())
		}, Nt.apply(t, arguments), Jn(t)
	}

	function ne(t) {
		return function(n) {
			return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t)
		}
	}

	function ee(t) {
		return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t)
	}

	function re(t) {
		return t < 0 ? -t * t : t * t
	}

	function ie(t) {
		var n = t(Cn, Cn),
			e = 1;
		return n.exponent = function(n) {
			return arguments.length ? 1 === (e = +n) ? t(Cn, Cn) : .5 === e ? t(ee, re) : t(ne(e), ne(1 / e)) : e
		}, Jn(n)
	}

	function oe() {
		var t = ie(In());
		return t.copy = function() {
			return Rn(t, oe()).exponent(t.exponent())
		}, Nt.apply(t, arguments), t
	}

	function ae(t) {
		var n = 0,
			e = t.children,
			r = e && e.length;
		if (r)
			for (; --r >= 0;) n += e[r].value;
		else n = 1;
		t.value = n
	}

	function ue(t, n) {
		t instanceof Map ? (t = [void 0, t], void 0 === n && (n = se)) : void 0 === n && (n = le);
		for (var e, r, i, o, a, u = new he(t), l = [u]; e = l.pop();)
			if ((i = n(e.data)) && (a = (i = Array.from(i)).length))
				for (e.children = i, o = a - 1; o >= 0; --o) l.push(r = i[o] = new he(i[o])), r.parent = e, r.depth = e.depth + 1;
		return u.eachBefore(fe)
	}

	function le(t) {
		return t.children
	}

	function se(t) {
		return Array.isArray(t) ? t[1] : null
	}

	function ce(t) {
		void 0 !== t.data.value && (t.value = t.data.value), t.data = t.data.data
	}

	function fe(t) {
		var n = 0;
		do {
			t.height = n
		} while ((t = t.parent) && t.height < ++n)
	}

	function he(t) {
		this.data = t, this.depth = this.height = 0, this.parent = null
	}

	function pe(t) {
		t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
	}

	function de() {
		var t = 1,
			n = 1,
			e = 0,
			r = !1;

		function i(i) {
			var o = i.height + 1;
			return i.x0 = i.y0 = e, i.x1 = t, i.y1 = n / o, i.eachBefore(function(t, n) {
				return function(r) {
					r.children && function(t, n, e, r, i) {
						for (var o, a = t.children, u = -1, l = a.length, s = t.value && (r - n) / t.value; ++u < l;)(o = a[u]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * s
					}(r, r.x0, t * (r.depth + 1) / n, r.x1, t * (r.depth + 2) / n);
					var i = r.x0,
						o = r.y0,
						a = r.x1 - e,
						u = r.y1 - e;
					a < i && (i = a = (i + a) / 2), u < o && (o = u = (o + u) / 2), r.x0 = i, r.y0 = o, r.x1 = a, r.y1 = u
				}
			}(n, o)), r && i.eachBefore(pe), i
		}
		return i.round = function(t) {
			return arguments.length ? (r = !!t, i) : r
		}, i.size = function(e) {
			return arguments.length ? (t = +e[0], n = +e[1], i) : [t, n]
		}, i.padding = function(t) {
			return arguments.length ? (e = +t, i) : e
		}, i
	}

	function ye(t) {
		return function() {
			return t
		}
	}
	Yn = Kn({
		thousands: ",",
		grouping: [3],
		currency: ["$", ""]
	}), Fn = Yn.format, Wn = Yn.formatPrefix, he.prototype = ue.prototype = {
		constructor: he,
		count: function() {
			return this.eachAfter(ae)
		},
		each: function(t, n) {
			let e = -1;
			for (const r of this) t.call(n, r, ++e, this);
			return this
		},
		eachAfter: function(t, n) {
			for (var e, r, i, o = this, a = [o], u = [], l = -1; o = a.pop();)
				if (u.push(o), e = o.children)
					for (r = 0, i = e.length; r < i; ++r) a.push(e[r]);
			for (; o = u.pop();) t.call(n, o, ++l, this);
			return this
		},
		eachBefore: function(t, n) {
			for (var e, r, i = this, o = [i], a = -1; i = o.pop();)
				if (t.call(n, i, ++a, this), e = i.children)
					for (r = e.length - 1; r >= 0; --r) o.push(e[r]);
			return this
		},
		find: function(t, n) {
			let e = -1;
			for (const r of this)
				if (t.call(n, r, ++e, this)) return r
		},
		sum: function(t) {
			return this.eachAfter((function(n) {
				for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
				n.value = e
			}))
		},
		sort: function(t) {
			return this.eachBefore((function(n) {
				n.children && n.children.sort(t)
			}))
		},
		path: function(t) {
			for (var n = this, e = function(t, n) {
					if (t === n) return t;
					var e = t.ancestors(),
						r = n.ancestors(),
						i = null;
					t = e.pop(), n = r.pop();
					for (; t === n;) i = t, t = e.pop(), n = r.pop();
					return i
				}(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
			for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
			return r
		},
		ancestors: function() {
			for (var t = this, n = [t]; t = t.parent;) n.push(t);
			return n
		},
		descendants: function() {
			return Array.from(this)
		},
		leaves: function() {
			var t = [];
			return this.eachBefore((function(n) {
				n.children || t.push(n)
			})), t
		},
		links: function() {
			var t = this,
				n = [];
			return t.each((function(e) {
				e !== t && n.push({
					source: e.parent,
					target: e
				})
			})), n
		},
		copy: function() {
			return ue(this).eachBefore(ce)
		},
		[Symbol.iterator]: function*() {
			var t, n, e, r, i = this,
				o = [i];
			do {
				for (t = o.reverse(), o = []; i = t.pop();)
					if (yield i, n = i.children)
						for (e = 0, r = n.length; e < r; ++e) o.push(n[e])
			} while (o.length)
		}
	};
	const ve = Math.abs,
		ge = Math.atan2,
		me = Math.cos,
		we = Math.max,
		_e = Math.min,
		xe = Math.sin,
		be = Math.sqrt,
		Me = 1e-12,
		Ae = Math.PI,
		Se = Ae / 2,
		Ne = 2 * Ae;

	function $e(t) {
		return t >= 1 ? Se : t <= -1 ? -Se : Math.asin(t)
	}
	const ke = Math.PI,
		Ee = 2 * ke,
		Te = 1e-6,
		Ce = Ee - Te;

	function Oe(t) {
		this._ += t[0];
		for (let n = 1, e = t.length; n < e; ++n) this._ += arguments[n] + t[n]
	}
	class je {
		constructor(t) {
			this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == t ? Oe : function(t) {
				let n = Math.floor(t);
				if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
				if (n > 15) return Oe;
				const e = 10 ** n;
				return function(t) {
					this._ += t[0];
					for (let n = 1, r = t.length; n < r; ++n) this._ += Math.round(arguments[n] * e) / e + t[n]
				}
			}(t)
		}
		moveTo(t, n) {
			this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`
		}
		closePath() {
			null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
		}
		lineTo(t, n) {
			this._append`L${this._x1=+t},${this._y1=+n}`
		}
		quadraticCurveTo(t, n, e, r) {
			this._append`Q${+t},${+n},${this._x1=+e},${this._y1=+r}`
		}
		bezierCurveTo(t, n, e, r, i, o) {
			this._append`C${+t},${+n},${+e},${+r},${this._x1=+i},${this._y1=+o}`
		}
		arcTo(t, n, e, r, i) {
			if (t = +t, n = +n, e = +e, r = +r, (i = +i) < 0) throw new Error(`negative radius: ${i}`);
			let o = this._x1,
				a = this._y1,
				u = e - t,
				l = r - n,
				s = o - t,
				c = a - n,
				f = s * s + c * c;
			if (null === this._x1) this._append`M${this._x1=t},${this._y1=n}`;
			else if (f > Te)
				if (Math.abs(c * u - l * s) > Te && i) {
					let h = e - o,
						p = r - a,
						d = u * u + l * l,
						y = h * h + p * p,
						v = Math.sqrt(d),
						g = Math.sqrt(f),
						m = i * Math.tan((ke - Math.acos((d + f - y) / (2 * v * g))) / 2),
						w = m / g,
						_ = m / v;
					Math.abs(w - 1) > Te && this._append`L${t+w*s},${n+w*c}`, this._append`A${i},${i},0,0,${+(c*h>s*p)},${this._x1=t+_*u},${this._y1=n+_*l}`
				} else this._append`L${this._x1=t},${this._y1=n}`;
			else;
		}
		arc(t, n, e, r, i, o) {
			if (t = +t, n = +n, o = !!o, (e = +e) < 0) throw new Error(`negative radius: ${e}`);
			let a = e * Math.cos(r),
				u = e * Math.sin(r),
				l = t + a,
				s = n + u,
				c = 1 ^ o,
				f = o ? r - i : i - r;
			null === this._x1 ? this._append`M${l},${s}` : (Math.abs(this._x1 - l) > Te || Math.abs(this._y1 - s) > Te) && this._append`L${l},${s}`, e && (f < 0 && (f = f % Ee + Ee), f > Ce ? this._append`A${e},${e},0,1,${c},${t-a},${n-u}A${e},${e},0,1,${c},${this._x1=l},${this._y1=s}` : f > Te && this._append`A${e},${e},0,${+(f>=ke)},${c},${this._x1=t+e*Math.cos(i)},${this._y1=n+e*Math.sin(i)}`)
		}
		rect(t, n, e, r) {
			this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${e=+e}v${+r}h${-e}Z`
		}
		toString() {
			return this._
		}
	}

	function Pe() {
		return new je
	}

	function Re(t) {
		return t.innerRadius
	}

	function Ie(t) {
		return t.outerRadius
	}

	function Le(t) {
		return t.startAngle
	}

	function qe(t) {
		return t.endAngle
	}

	function ze(t) {
		return t && t.padAngle
	}

	function Be(t, n, e, r, i, o, a) {
		var u = t - e,
			l = n - r,
			s = (a ? o : -o) / be(u * u + l * l),
			c = s * l,
			f = -s * u,
			h = t + c,
			p = n + f,
			d = e + c,
			y = r + f,
			v = (h + d) / 2,
			g = (p + y) / 2,
			m = d - h,
			w = y - p,
			_ = m * m + w * w,
			x = i - o,
			b = h * y - d * p,
			M = (w < 0 ? -1 : 1) * be(we(0, x * x * _ - b * b)),
			A = (b * w - m * M) / _,
			S = (-b * m - w * M) / _,
			N = (b * w + m * M) / _,
			$ = (-b * m + w * M) / _,
			k = A - v,
			E = S - g,
			T = N - v,
			C = $ - g;
		return k * k + E * E > T * T + C * C && (A = N, S = $), {
			cx: A,
			cy: S,
			x01: -c,
			y01: -f,
			x11: A * (i / x - 1),
			y11: S * (i / x - 1)
		}
	}

	function De() {
		var t = Re,
			n = Ie,
			e = ye(0),
			r = null,
			i = Le,
			o = qe,
			a = ze,
			u = null,
			l = function(t) {
				let n = 3;
				return t.digits = function(e) {
					if (!arguments.length) return n;
					if (null == e) n = null;
					else {
						const t = Math.floor(e);
						if (!(t >= 0)) throw new RangeError(`invalid digits: ${e}`);
						n = t
					}
					return t
				}, () => new je(n)
			}(s);

		function s() {
			var s, c, f, h = +t.apply(this, arguments),
				p = +n.apply(this, arguments),
				d = i.apply(this, arguments) - Se,
				y = o.apply(this, arguments) - Se,
				v = ve(y - d),
				g = y > d;
			if (u || (u = s = l()), p < h && (c = p, p = h, h = c), p > Me)
				if (v > Ne - Me) u.moveTo(p * me(d), p * xe(d)), u.arc(0, 0, p, d, y, !g), h > Me && (u.moveTo(h * me(y), h * xe(y)), u.arc(0, 0, h, y, d, g));
				else {
					var m, w, _ = d,
						x = y,
						b = d,
						M = y,
						A = v,
						S = v,
						N = a.apply(this, arguments) / 2,
						$ = N > Me && (r ? +r.apply(this, arguments) : be(h * h + p * p)),
						k = _e(ve(p - h) / 2, +e.apply(this, arguments)),
						E = k,
						T = k;
					if ($ > Me) {
						var C = $e($ / h * xe(N)),
							O = $e($ / p * xe(N));
						(A -= 2 * C) > Me ? (b += C *= g ? 1 : -1, M -= C) : (A = 0, b = M = (d + y) / 2), (S -= 2 * O) > Me ? (_ += O *= g ? 1 : -1, x -= O) : (S = 0, _ = x = (d + y) / 2)
					}
					var j = p * me(_),
						P = p * xe(_),
						R = h * me(M),
						I = h * xe(M);
					if (k > Me) {
						var L, q = p * me(x),
							z = p * xe(x),
							B = h * me(b),
							D = h * xe(b);
						if (v < Ae)
							if (L = function(t, n, e, r, i, o, a, u) {
									var l = e - t,
										s = r - n,
										c = a - i,
										f = u - o,
										h = f * l - c * s;
									if (!(h * h < Me)) return [t + (h = (c * (n - o) - f * (t - i)) / h) * l, n + h * s]
								}(j, P, B, D, q, z, R, I)) {
								var H = j - L[0],
									X = P - L[1],
									U = q - L[0],
									V = z - L[1],
									Y = 1 / xe(((f = (H * U + X * V) / (be(H * H + X * X) * be(U * U + V * V))) > 1 ? 0 : f < -1 ? Ae : Math.acos(f)) / 2),
									F = be(L[0] * L[0] + L[1] * L[1]);
								E = _e(k, (h - F) / (Y - 1)), T = _e(k, (p - F) / (Y + 1))
							} else E = T = 0
					}
					S > Me ? T > Me ? (m = Be(B, D, j, P, p, T, g), w = Be(q, z, R, I, p, T, g), u.moveTo(m.cx + m.x01, m.cy + m.y01), T < k ? u.arc(m.cx, m.cy, T, ge(m.y01, m.x01), ge(w.y01, w.x01), !g) : (u.arc(m.cx, m.cy, T, ge(m.y01, m.x01), ge(m.y11, m.x11), !g), u.arc(0, 0, p, ge(m.cy + m.y11, m.cx + m.x11), ge(w.cy + w.y11, w.cx + w.x11), !g), u.arc(w.cx, w.cy, T, ge(w.y11, w.x11), ge(w.y01, w.x01), !g))) : (u.moveTo(j, P), u.arc(0, 0, p, _, x, !g)) : u.moveTo(j, P), h > Me && A > Me ? E > Me ? (m = Be(R, I, q, z, h, -E, g), w = Be(j, P, B, D, h, -E, g), u.lineTo(m.cx + m.x01, m.cy + m.y01), E < k ? u.arc(m.cx, m.cy, E, ge(m.y01, m.x01), ge(w.y01, w.x01), !g) : (u.arc(m.cx, m.cy, E, ge(m.y01, m.x01), ge(m.y11, m.x11), !g), u.arc(0, 0, h, ge(m.cy + m.y11, m.cx + m.x11), ge(w.cy + w.y11, w.cx + w.x11), g), u.arc(w.cx, w.cy, E, ge(w.y11, w.x11), ge(w.y01, w.x01), !g))) : u.arc(0, 0, h, M, b, g) : u.lineTo(R, I)
				}
			else u.moveTo(0, 0);
			if (u.closePath(), s) return u = null, s + "" || null
		}
		return s.centroid = function() {
			var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
				r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Ae / 2;
			return [me(r) * e, xe(r) * e]
		}, s.innerRadius = function(n) {
			return arguments.length ? (t = "function" == typeof n ? n : ye(+n), s) : t
		}, s.outerRadius = function(t) {
			return arguments.length ? (n = "function" == typeof t ? t : ye(+t), s) : n
		}, s.cornerRadius = function(t) {
			return arguments.length ? (e = "function" == typeof t ? t : ye(+t), s) : e
		}, s.padRadius = function(t) {
			return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : ye(+t), s) : r
		}, s.startAngle = function(t) {
			return arguments.length ? (i = "function" == typeof t ? t : ye(+t), s) : i
		}, s.endAngle = function(t) {
			return arguments.length ? (o = "function" == typeof t ? t : ye(+t), s) : o
		}, s.padAngle = function(t) {
			return arguments.length ? (a = "function" == typeof t ? t : ye(+t), s) : a
		}, s.context = function(t) {
			return arguments.length ? (u = null == t ? null : t, s) : u
		}, s
	}
	Pe.prototype = je.prototype;
	var He = {
		value: () => {}
	};

	function Xe() {
		for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
			if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
			r[t] = []
		}
		return new Ue(r)
	}

	function Ue(t) {
		this._ = t
	}

	function Ve(t, n) {
		for (var e, r = 0, i = t.length; r < i; ++r)
			if ((e = t[r]).name === n) return e.value
	}

	function Ye(t, n, e) {
		for (var r = 0, i = t.length; r < i; ++r)
			if (t[r].name === n) {
				t[r] = He, t = t.slice(0, r).concat(t.slice(r + 1));
				break
			} return null != e && t.push({
			name: n,
			value: e
		}), t
	}
	Ue.prototype = Xe.prototype = {
		constructor: Ue,
		on: function(t, n) {
			var e, r, i = this._,
				o = (r = i, (t + "").trim().split(/^|\s+/).map((function(t) {
					var n = "",
						e = t.indexOf(".");
					if (e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), t && !r.hasOwnProperty(t)) throw new Error("unknown type: " + t);
					return {
						type: t,
						name: n
					}
				}))),
				a = -1,
				u = o.length;
			if (!(arguments.length < 2)) {
				if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
				for (; ++a < u;)
					if (e = (t = o[a]).type) i[e] = Ye(i[e], t.name, n);
					else if (null == n)
					for (e in i) i[e] = Ye(i[e], t.name, null);
				return this
			}
			for (; ++a < u;)
				if ((e = (t = o[a]).type) && (e = Ve(i[e], t.name))) return e
		},
		copy: function() {
			var t = {},
				n = this._;
			for (var e in n) t[e] = n[e].slice();
			return new Ue(t)
		},
		call: function(t, n) {
			if ((e = arguments.length - 2) > 0)
				for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
			if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
			for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
		},
		apply: function(t, n, e) {
			if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
			for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e)
		}
	};
	var Fe, We, Ge = 0,
		Ze = 0,
		Ke = 0,
		Qe = 1e3,
		Je = 0,
		tr = 0,
		nr = 0,
		er = "object" == typeof performance && performance.now ? performance : Date,
		rr = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
			setTimeout(t, 17)
		};

	function ir() {
		return tr || (rr(or), tr = er.now() + nr)
	}

	function or() {
		tr = 0
	}

	function ar() {
		this._call = this._time = this._next = null
	}

	function ur(t, n, e) {
		var r = new ar;
		return r.restart(t, n, e), r
	}

	function lr() {
		tr = (Je = er.now()) + nr, Ge = Ze = 0;
		try {
			! function() {
				ir(), ++Ge;
				for (var t, n = Fe; n;)(t = tr - n._time) >= 0 && n._call.call(void 0, t), n = n._next;
				--Ge
			}()
		} finally {
			Ge = 0,
				function() {
					var t, n, e = Fe,
						r = 1 / 0;
					for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Fe = n);
					We = t, cr(r)
				}(), tr = 0
		}
	}

	function sr() {
		var t = er.now(),
			n = t - Je;
		n > Qe && (nr -= n, Je = t)
	}

	function cr(t) {
		Ge || (Ze && (Ze = clearTimeout(Ze)), t - tr > 24 ? (t < 1 / 0 && (Ze = setTimeout(lr, t - er.now() - nr)), Ke && (Ke = clearInterval(Ke))) : (Ke || (Je = er.now(), Ke = setInterval(sr, Qe)), Ge = 1, rr(lr)))
	}

	function fr(t, n, e) {
		var r = new ar;
		return n = null == n ? 0 : +n, r.restart((e => {
			r.stop(), t(e + n)
		}), n, e), r
	}
	ar.prototype = ur.prototype = {
		constructor: ar,
		restart: function(t, n, e) {
			if ("function" != typeof t) throw new TypeError("callback is not a function");
			e = (null == e ? ir() : +e) + (null == n ? 0 : +n), this._next || We === this || (We ? We._next = this : Fe = this, We = this), this._call = t, this._time = e, cr()
		},
		stop: function() {
			this._call && (this._call = null, this._time = 1 / 0, cr())
		}
	};
	var hr = Xe("start", "end", "cancel", "interrupt"),
		pr = [],
		dr = 0,
		yr = 1,
		vr = 2,
		gr = 3,
		mr = 4,
		wr = 5,
		_r = 6;

	function xr(t, n, e, r, i, o) {
		var a = t.__transition;
		if (a) {
			if (e in a) return
		} else t.__transition = {};
		! function(t, n, e) {
			var r, i = t.__transition;

			function o(t) {
				e.state = yr, e.timer.restart(a, e.delay, e.time), e.delay <= t && a(t - e.delay)
			}

			function a(o) {
				var s, c, f, h;
				if (e.state !== yr) return l();
				for (s in i)
					if ((h = i[s]).name === e.name) {
						if (h.state === gr) return fr(a);
						h.state === mr ? (h.state = _r, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[s]) : +s < n && (h.state = _r, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete i[s])
					} if (fr((function() {
						e.state === gr && (e.state = mr, e.timer.restart(u, e.delay, e.time), u(o))
					})), e.state = vr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === vr) {
					for (e.state = gr, r = new Array(f = e.tween.length), s = 0, c = -1; s < f; ++s)(h = e.tween[s].value.call(t, t.__data__, e.index, e.group)) && (r[++c] = h);
					r.length = c + 1
				}
			}

			function u(n) {
				for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(l), e.state = wr, 1), o = -1, a = r.length; ++o < a;) r[o].call(t, i);
				e.state === wr && (e.on.call("end", t, t.__data__, e.index, e.group), l())
			}

			function l() {
				for (var r in e.state = _r, e.timer.stop(), delete i[n], i) return;
				delete t.__transition
			}
			i[n] = e, e.timer = ur(o, 0, e.time)
		}(t, e, {
			name: n,
			index: r,
			group: i,
			on: hr,
			tween: pr,
			time: o.time,
			delay: o.delay,
			duration: o.duration,
			ease: o.ease,
			timer: null,
			state: dr
		})
	}

	function br(t, n) {
		var e = Ar(t, n);
		if (e.state > dr) throw new Error("too late; already scheduled");
		return e
	}

	function Mr(t, n) {
		var e = Ar(t, n);
		if (e.state > gr) throw new Error("too late; already running");
		return e
	}

	function Ar(t, n) {
		var e = t.__transition;
		if (!e || !(e = e[n])) throw new Error("transition not found");
		return e
	}

	function Sr(t, n) {
		var e, r;
		return function() {
			var i = Mr(this, t),
				o = i.tween;
			if (o !== e)
				for (var a = 0, u = (r = e = o).length; a < u; ++a)
					if (r[a].name === n) {
						(r = r.slice()).splice(a, 1);
						break
					} i.tween = r
		}
	}

	function Nr(t, n, e) {
		var r, i;
		if ("function" != typeof e) throw new Error;
		return function() {
			var o = Mr(this, t),
				a = o.tween;
			if (a !== r) {
				i = (r = a).slice();
				for (var u = {
						name: n,
						value: e
					}, l = 0, s = i.length; l < s; ++l)
					if (i[l].name === n) {
						i[l] = u;
						break
					} l === s && i.push(u)
			}
			o.tween = i
		}
	}

	function $r(t, n, e) {
		var r = t._id;
		return t.each((function() {
				var t = Mr(this, r);
				(t.value || (t.value = {}))[n] = e.apply(this, arguments)
			})),
			function(t) {
				return Ar(t, r).value[n]
			}
	}

	function kr(t, n) {
		var e;
		return ("number" == typeof n ? yn : n instanceof Vt ? fn : (e = Vt(n)) ? (n = e, fn) : wn)(t, n)
	}

	function Er(t) {
		return function() {
			this.removeAttribute(t)
		}
	}

	function Tr(t) {
		return function() {
			this.removeAttributeNS(t.space, t.local)
		}
	}

	function Cr(t, n, e) {
		var r, i, o = e + "";
		return function() {
			var a = this.getAttribute(t);
			return a === o ? null : a === r ? i : i = n(r = a, e)
		}
	}

	function Or(t, n, e) {
		var r, i, o = e + "";
		return function() {
			var a = this.getAttributeNS(t.space, t.local);
			return a === o ? null : a === r ? i : i = n(r = a, e)
		}
	}

	function jr(t, n, e) {
		var r, i, o;
		return function() {
			var a, u, l = e(this);
			if (null != l) return (a = this.getAttribute(t)) === (u = l + "") ? null : a === r && u === i ? o : (i = u, o = n(r = a, l));
			this.removeAttribute(t)
		}
	}

	function Pr(t, n, e) {
		var r, i, o;
		return function() {
			var a, u, l = e(this);
			if (null != l) return (a = this.getAttributeNS(t.space, t.local)) === (u = l + "") ? null : a === r && u === i ? o : (i = u, o = n(r = a, l));
			this.removeAttributeNS(t.space, t.local)
		}
	}

	function Rr(t, n) {
		var e, r;

		function i() {
			var i = n.apply(this, arguments);
			return i !== r && (e = (r = i) && function(t, n) {
				return function(e) {
					this.setAttributeNS(t.space, t.local, n.call(this, e))
				}
			}(t, i)), e
		}
		return i._value = n, i
	}

	function Ir(t, n) {
		var e, r;

		function i() {
			var i = n.apply(this, arguments);
			return i !== r && (e = (r = i) && function(t, n) {
				return function(e) {
					this.setAttribute(t, n.call(this, e))
          
        //AGGIUNTA ID ALL'AVVIO  
        var sunb_slice = document.querySelectorAll(".main-arc");
        //console.log(sunb_slice)
		for(i=0; i<sunb_slice.length; i++){
			var text = sunb_slice[i].nextSibling.nextSibling.firstChild.innerHTML;
			
			//console.log("----");
			//console.log(sunb_slice[i].__data__);
			//console.log("Parent");
			//console.log(sunb_slice[i].__data__.parent);	

			if(sunb_slice[i].__data__.parent != null){
				
				var parentName = sunb_slice[i].__data__.parent.data.name;
				var parts_parent = parentName.split(':');
				var part_parent = parts_parent[0].trim(); 
				if(part_parent=="specializations" || part_parent == "generalizations" || part_parent=="RFD found" || part_parent == "new RFDs" || part_parent == "RFD not found"){

					var parts = text.split(':');
					var part = parts[0].trim(); 

					var fullID=part_parent.concat(part);
					sunb_slice[i].id=fullID;

				}else{
					var parts = text.split(':');
					var part = parts[0].trim(); 
		
					sunb_slice[i].id=part;
				}
			}	
		  }
				}
			}(t, i)), e
		}
		return i._value = n, i
	}

	function Lr(t, n) {
		return function() {
			br(this, t).delay = +n.apply(this, arguments)
		}
	}

	function qr(t, n) {
		return n = +n,
			function() {
				br(this, t).delay = n
			}
	}

	function zr(t, n) {
		return function() {
			Mr(this, t).duration = +n.apply(this, arguments)
		}
	}

	function Br(t, n) {
		return n = +n,
			function() {
				Mr(this, t).duration = n
			}
	}
	var Dr = pt.prototype.constructor;

	function Hr(t) {
		return function() {
			this.style.removeProperty(t)
		}
	}
	var Xr = 0;

	function Ur(t, n, e, r) {
		this._groups = t, this._parents = n, this._name = e, this._id = r
	}

	function Vr(t) {
		return pt().transition(t)
	}

	function Yr() {
		return ++Xr
	}
	var Fr = pt.prototype;
	Ur.prototype = Vr.prototype = {
		constructor: Ur,
		select: function(t) {
			var n = this._name,
				e = this._id;
			"function" != typeof t && (t = s(t));
			for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
				for (var u, l, c = r[a], f = c.length, h = o[a] = new Array(f), p = 0; p < f; ++p)(u = c[p]) && (l = t.call(u, u.__data__, p, c)) && ("__data__" in u && (l.__data__ = u.__data__), h[p] = l, xr(h[p], n, e, p, h, Ar(u, e)));
			return new Ur(o, this._parents, n, e)
		},
		selectAll: function(t) {
			var n = this._name,
				e = this._id;
			"function" != typeof t && (t = f(t));
			for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
				for (var l, s = r[u], c = s.length, h = 0; h < c; ++h)
					if (l = s[h]) {
						for (var p, d = t.call(l, l.__data__, h, s), y = Ar(l, e), v = 0, g = d.length; v < g; ++v)(p = d[v]) && xr(p, n, e, v, d, y);
						o.push(d), a.push(l)
					} return new Ur(o, a, n, e)
		},
		selectChild: Fr.selectChild,
		selectChildren: Fr.selectChildren,
		filter: function(t) {
			"function" != typeof t && (t = p(t));
			for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
				for (var o, a = n[i], u = a.length, l = r[i] = [], s = 0; s < u; ++s)(o = a[s]) && t.call(o, o.__data__, s, a) && l.push(o);
			return new Ur(r, this._parents, this._name, this._id)
		},
		merge: function(t) {
			if (t._id !== this._id) throw new Error;
			for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
				for (var l, s = n[u], c = e[u], f = s.length, h = a[u] = new Array(f), p = 0; p < f; ++p)(l = s[p] || c[p]) && (h[p] = l);
			for (; u < r; ++u) a[u] = n[u];
			return new Ur(a, this._parents, this._name, this._id)
		},
		selection: function() {
			return new Dr(this._groups, this._parents)
		},
		transition: function() {
			for (var t = this._name, n = this._id, e = Yr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
				for (var a, u = r[o], l = u.length, s = 0; s < l; ++s)
					if (a = u[s]) {
						var c = Ar(a, n);
						xr(a, t, e, s, u, {
							time: c.time + c.delay + c.duration,
							delay: 0,
							duration: c.duration,
							ease: c.ease
						})
					} return new Ur(r, this._parents, t, e)
		},
		call: Fr.call,
		nodes: Fr.nodes,
		node: Fr.node,
		size: Fr.size,
		empty: Fr.empty,
		each: Fr.each,
		on: function(t, n) {
			var e = this._id;
			return arguments.length < 2 ? Ar(this.node(), e).on.on(t) : this.each(function(t, n, e) {
				var r, i, o = function(t) {
					return (t + "").trim().split(/^|\s+/).every((function(t) {
						var n = t.indexOf(".");
						return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
					}))
				}(n) ? br : Mr;
				return function() {
					var a = o(this, t),
						u = a.on;
					u !== r && (i = (r = u).copy()).on(n, e), a.on = i
				}
			}(e, t, n))
		},
		attr: function(t, n) {
			var e = i(t),
				r = "transform" === e ? kn : kr;
			return this.attrTween(t, "function" == typeof n ? (e.local ? Pr : jr)(e, r, $r(this, "attr." + t, n)) : null == n ? (e.local ? Tr : Er)(e) : (e.local ? Or : Cr)(e, r, n))
		},
		attrTween: function(t, n) {
			var e = "attr." + t;
			if (arguments.length < 2) return (e = this.tween(e)) && e._value;
			if (null == n) return this.tween(e, null);
			if ("function" != typeof n) throw new Error;
			var r = i(t);
			return this.tween(e, (r.local ? Rr : Ir)(r, n))
		},
		style: function(t, n, e) {
			var r = "transform" == (t += "") ? $n : kr;
			return null == n ? this.styleTween(t, function(t, n) {
				var e, r, i;
				return function() {
					var o = I(this, t),
						a = (this.style.removeProperty(t), I(this, t));
					return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a)
				}
			}(t, r)).on("end.style." + t, Hr(t)) : "function" == typeof n ? this.styleTween(t, function(t, n, e) {
				var r, i, o;
				return function() {
					var a = I(this, t),
						u = e(this),
						l = u + "";
					return null == u && (this.style.removeProperty(t), l = u = I(this, t)), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, u))
				}
			}(t, r, $r(this, "style." + t, n))).each(function(t, n) {
				var e, r, i, o, a = "style." + n,
					u = "end." + a;
				return function() {
					var l = Mr(this, t),
						s = l.on,
						c = null == l.value[a] ? o || (o = Hr(n)) : void 0;
					s === e && i === c || (r = (e = s).copy()).on(u, i = c), l.on = r
				}
			}(this._id, t)) : this.styleTween(t, function(t, n, e) {
				var r, i, o = e + "";
				return function() {
					var a = I(this, t);
					return a === o ? null : a === r ? i : i = n(r = a, e)
				}
			}(t, r, n), e).on("end.style." + t, null)
		},
		styleTween: function(t, n, e) {
			var r = "style." + (t += "");
			if (arguments.length < 2) return (r = this.tween(r)) && r._value;
			if (null == n) return this.tween(r, null);
			if ("function" != typeof n) throw new Error;
			return this.tween(r, function(t, n, e) {
				var r, i;

				function o() {
					var o = n.apply(this, arguments);
					return o !== i && (r = (i = o) && function(t, n, e) {
						return function(r) {
							this.style.setProperty(t, n.call(this, r), e)
						}
					}(t, o, e)), r
				}
				return o._value = n, o
			}(t, n, null == e ? "" : e))
		},
		text: function(t) {
			return this.tween("text", "function" == typeof t ? function(t) {
				return function() {
					var n = t(this);
					this.textContent = null == n ? "" : n
				}
			}($r(this, "text", t)) : function(t) {
				return function() {
					this.textContent = t
				}
			}(null == t ? "" : t + ""))
		},
		textTween: function(t) {
			var n = "text";
			if (arguments.length < 1) return (n = this.tween(n)) && n._value;
			if (null == t) return this.tween(n, null);
			if ("function" != typeof t) throw new Error;
			return this.tween(n, function(t) {
				var n, e;

				function r() {
					var r = t.apply(this, arguments);
					return r !== e && (n = (e = r) && function(t) {
						return function(n) {
							this.textContent = t.call(this, n)
						}
					}(r)), n
				}
				return r._value = t, r
			}(t))
		},
		remove: function() {
			return this.on("end.remove", function(t) {
				return function() {
					var n = this.parentNode;
					for (var e in this.__transition)
						if (+e !== t) return;
					n && n.removeChild(this)
				}
			}(this._id))
		},
		tween: function(t, n) {
			var e = this._id;
			if (t += "", arguments.length < 2) {
				for (var r, i = Ar(this.node(), e).tween, o = 0, a = i.length; o < a; ++o)
					if ((r = i[o]).name === t) return r.value;
				return null
			}
			return this.each((null == n ? Sr : Nr)(e, t, n))
		},
		delay: function(t) {
			var n = this._id;
			return arguments.length ? this.each(("function" == typeof t ? Lr : qr)(n, t)) : Ar(this.node(), n).delay
		},
		duration: function(t) {
			var n = this._id;
			return arguments.length ? this.each(("function" == typeof t ? zr : Br)(n, t)) : Ar(this.node(), n).duration
		},
		ease: function(t) {
			var n = this._id;
			return arguments.length ? this.each(function(t, n) {
				if ("function" != typeof n) throw new Error;
				return function() {
					Mr(this, t).ease = n
				}
			}(n, t)) : Ar(this.node(), n).ease
		},
		easeVarying: function(t) {
			if ("function" != typeof t) throw new Error;
			return this.each(function(t, n) {
				return function() {
					var e = n.apply(this, arguments);
					if ("function" != typeof e) throw new Error;
					Mr(this, t).ease = e
				}
			}(this._id, t))
		},
		end: function() {
			var t, n, e = this,
				r = e._id,
				i = e.size();
			return new Promise((function(o, a) {
				var u = {
						value: a
					},
					l = {
						value: function() {
							0 == --i && o()
						}
					};
				e.each((function() {
					var e = Mr(this, r),
						i = e.on;
					i !== t && ((n = (t = i).copy())._.cancel.push(u), n._.interrupt.push(u), n._.end.push(l)), e.on = n
				})), 0 === i && o()
			}))
		},
		[Symbol.iterator]: Fr[Symbol.iterator]
	};
	var Wr = {
		time: null,
		delay: 0,
		duration: 250,
		ease: function(t) {
			return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
		}
	};

	function Gr(t, n) {
		for (var e; !(e = t.__transition) || !(e = e[n]);)
			if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
		return e
	}

	function Zr(t) {
		var n = typeof t;
		return null != t && ("object" == n || "function" == n)
	}
	pt.prototype.interrupt = function(t) {
		return this.each((function() {
			! function(t, n) {
				var e, r, i, o = t.__transition,
					a = !0;
				if (o) {
					for (i in n = null == n ? null : n + "", o)(e = o[i]).name === n ? (r = e.state > vr && e.state < wr, e.state = _r, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : a = !1;
					a && delete t.__transition
				}
			}(this, t)
		}))
	}, pt.prototype.transition = function(t) {
		var n, e;
		t instanceof Ur ? (n = t._id, t = t._name) : (n = Yr(), (e = Wr).time = ir(), t = null == t ? null : t + "");
		for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
			for (var a, u = r[o], l = u.length, s = 0; s < l; ++s)(a = u[s]) && xr(a, t, n, s, u, e || Gr(a, n));
		return new Ur(r, this._parents, t, n)
	};
	var Kr = "object" == typeof global && global && global.Object === Object && global,
		Qr = "object" == typeof self && self && self.Object === Object && self,
		Jr = Kr || Qr || Function("return this")(),
		ti = function() {
			return Jr.Date.now()
		},
		ni = /\s/;
	var ei = /^\s+/;

	function ri(t) {
		return t ? t.slice(0, function(t) {
			for (var n = t.length; n-- && ni.test(t.charAt(n)););
			return n
		}(t) + 1).replace(ei, "") : t
	}
	var ii = Jr.Symbol,
		oi = Object.prototype,
		ai = oi.hasOwnProperty,
		ui = oi.toString,
		li = ii ? ii.toStringTag : void 0;
	var si = Object.prototype.toString;
	var ci = "[object Null]",
		fi = "[object Undefined]",
		hi = ii ? ii.toStringTag : void 0;

	function pi(t) {
		return null == t ? void 0 === t ? fi : ci : hi && hi in Object(t) ? function(t) {
			var n = ai.call(t, li),
				e = t[li];
			try {
				t[li] = void 0;
				var r = !0
			} catch (t) {}
			var i = ui.call(t);
			return r && (n ? t[li] = e : delete t[li]), i
		}(t) : function(t) {
			return si.call(t)
		}(t)
	}
	var di = "[object Symbol]";
	var yi = NaN,
		vi = /^[-+]0x[0-9a-f]+$/i,
		gi = /^0b[01]+$/i,
		mi = /^0o[0-7]+$/i,
		wi = parseInt;

	function _i(t) {
		if ("number" == typeof t) return t;
		if (function(t) {
				return "symbol" == typeof t || function(t) {
					return null != t && "object" == typeof t
				}(t) && pi(t) == di
			}(t)) return yi;
		if (Zr(t)) {
			var n = "function" == typeof t.valueOf ? t.valueOf() : t;
			t = Zr(n) ? n + "" : n
		}
		if ("string" != typeof t) return 0 === t ? t : +t;
		t = ri(t);
		var e = gi.test(t);
		return e || mi.test(t) ? wi(t.slice(2), e ? 2 : 8) : vi.test(t) ? yi : +t
	}
	var xi = "Expected a function",
		bi = Math.max,
		Mi = Math.min;

	function Ai(t, n, e) {
		var r, i, o, a, u, l, s = 0,
			c = !1,
			f = !1,
			h = !0;
		if ("function" != typeof t) throw new TypeError(xi);

		function p(n) {
			var e = r,
				o = i;
			return r = i = void 0, s = n, a = t.apply(o, e)
		}

		function d(t) {
			var e = t - l;
			return void 0 === l || e >= n || e < 0 || f && t - s >= o
		}

		function y() {
			var t = ti();
			if (d(t)) return v(t);
			u = setTimeout(y, function(t) {
				var e = n - (t - l);
				return f ? Mi(e, o - (t - s)) : e
			}(t))
		}

		function v(t) {
			return u = void 0, h && r ? p(t) : (r = i = void 0, a)
		}

		function g() {
			var t = ti(),
				e = d(t);
			if (r = arguments, i = this, l = t, e) {
				if (void 0 === u) return function(t) {
					return s = t, u = setTimeout(y, n), c ? p(t) : a
				}(l);
				if (f) return clearTimeout(u), u = setTimeout(y, n), p(l)
			}
			return void 0 === u && (u = setTimeout(y, n)), a
		}
		return n = _i(n) || 0, Zr(e) && (c = !!e.leading, o = (f = "maxWait" in e) ? bi(_i(e.maxWait) || 0, n) : o, h = "trailing" in e ? !!e.trailing : h), g.cancel = function() {
			void 0 !== u && clearTimeout(u), s = 0, r = l = i = u = void 0
		}, g.flush = function() {
			return void 0 === u ? a : v(ti())
		}, g
	}

	function Si(t, n) {
		for (var e = 0; e < n.length; e++) {
			var r = n[e];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, (i = r.key, o = void 0, "symbol" == typeof(o = function(t, n) {
				if ("object" != typeof t || null === t) return t;
				var e = t[Symbol.toPrimitive];
				if (void 0 !== e) {
					var r = e.call(t, n || "default");
					if ("object" != typeof r) return r;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === n ? String : Number)(t)
			}(i, "string")) ? o : String(o)), r)
		}
		var i, o
	}

	function Ni(t, n, e) {
		return n && Si(t.prototype, n), e && Si(t, e), Object.defineProperty(t, "prototype", {
			writable: !1
		}), t
	}

	function $i(t, n) {
		return function(t) {
			if (Array.isArray(t)) return t
		}(t) || function(t, n) {
			var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
			if (null != e) {
				var r, i, o, a, u = [],
					l = !0,
					s = !1;
				try {
					if (o = (e = e.call(t)).next, 0 === n) {
						if (Object(e) !== e) return;
						l = !1
					} else
						for (; !(l = (r = o.call(e)).done) && (u.push(r.value), u.length !== n); l = !0);
				} catch (t) {
					s = !0, i = t
				} finally {
					try {
						if (!l && null != e.return && (a = e.return(), Object(a) !== a)) return
					} finally {
						if (s) throw i
					}
				}
				return u
			}
		}(t, n) || function(t, n) {
			if (!t) return;
			if ("string" == typeof t) return ki(t, n);
			var e = Object.prototype.toString.call(t).slice(8, -1);
			"Object" === e && t.constructor && (e = t.constructor.name);
			if ("Map" === e || "Set" === e) return Array.from(t);
			if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ki(t, n)
		}(t, n) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function ki(t, n) {
		(null == n || n > t.length) && (n = t.length);
		for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
		return r
	}
	var Ei = Ni((function t(n, e) {
		var r = e.default,
			i = void 0 === r ? null : r,
			o = e.triggerUpdate,
			a = void 0 === o || o,
			u = e.onChange,
			l = void 0 === u ? function(t, n) {} : u;
		! function(t, n) {
			if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
		}(this, t), this.name = n, this.defaultVal = i, this.triggerUpdate = a, this.onChange = l
	}));

	function Ti(t) {
		var n = t.stateInit,
			e = void 0 === n ? function() {
				return {}
			} : n,
			r = t.props,
			i = void 0 === r ? {} : r,
			o = t.methods,
			a = void 0 === o ? {} : o,
			u = t.aliases,
			l = void 0 === u ? {} : u,
			s = t.init,
			c = void 0 === s ? function() {} : s,
			f = t.update,
			h = void 0 === f ? function() {} : f,
			p = Object.keys(i).map((function(t) {
				return new Ei(t, i[t])
			}));
		return function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				n = Object.assign({}, e instanceof Function ? e(t) : e, {
					initialised: !1
				}),
				r = {};

			function i(n) {
				return o(n, t), u(), i
			}
			var o = function(t, e) {
					c.call(i, t, n, e), n.initialised = !0
				},
				u = Ai((function() {
					n.initialised && (h.call(i, n, r), r = {})
				}), 1);
			return p.forEach((function(t) {
				i[t.name] = function(t) {
					var e = t.name,
						o = t.triggerUpdate,
						a = void 0 !== o && o,
						l = t.onChange,
						s = void 0 === l ? function(t, n) {} : l,
						c = t.defaultVal,
						f = void 0 === c ? null : c;
					return function(t) {
						var o = n[e];
						if (!arguments.length) return o;
						var l = void 0 === t ? f : t;
						return n[e] = l, s.call(i, l, n, o), !r.hasOwnProperty(e) && (r[e] = o), a && u(), i
					}
				}(t)
			})), Object.keys(a).forEach((function(t) {
				i[t] = function() {
					for (var e, r = arguments.length, o = new Array(r), u = 0; u < r; u++) o[u] = arguments[u];
					return (e = a[t]).call.apply(e, [i, n].concat(o))
				}
			})), Object.entries(l).forEach((function(t) {
				var n = $i(t, 2),
					e = n[0],
					r = n[1];
				return i[e] = i[r]
			})), i.resetProps = function() {
				return p.forEach((function(t) {
					i[t.name](t.defaultVal)
				})), i
			}, i.resetProps(), n._rerender = u, i
		}
	}
	var Ci = function(t) {
		return "function" == typeof t ? t : "string" == typeof t ? function(n) {
			return n[t]
		} : function(n) {
			return t
		}
	};

	function Oi(t) {
		return Oi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		}, Oi(t)
	}! function(t, n) {
		void 0 === n && (n = {});
		var e = n.insertAt;
		if (t && "undefined" != typeof document) {
			var r = document.head || document.getElementsByTagName("head")[0],
				i = document.createElement("style");
			i.type = "text/css", "top" === e && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t))
		}
	}(".tooltip {\n  position: absolute;\n  padding: 5px;\n  border-radius: 3px;\n  font: 12px sans-serif;\n  color: #eee;\n  background: rgba(0,0,0,0.65);\n  pointer-events: none;\n}\n");
	var ji = Ti({
			props: {
				content: {
					default: !1
				}
			},
			init: function(t, n) {
				var e = dt(!!t && "object" === Oi(t) && !!t.node && "function" == typeof t.node ? t.node() : t);
				n.tooltipEl = e.append("div").attr("class", "tooltip"), n.mouseInside = !1, e.on("mousemove.tooltip", (function(t) {
					n.mouseInside = !0;
					var r = function(t, n) {
							if (t = function(t) {
									let n;
									for (; n = t.sourceEvent;) t = n;
									return t
								}(t), void 0 === n && (n = t.currentTarget), n) {
								var e = n.ownerSVGElement || n;
								if (e.createSVGPoint) {
									var r = e.createSVGPoint();
									return r.x = t.clientX, r.y = t.clientY, [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
								}
								if (n.getBoundingClientRect) {
									var i = n.getBoundingClientRect();
									return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop]
								}
							}
							return [t.pageX, t.pageY]
						}(t),
						i = e.node(),
						o = i.offsetWidth,
						a = i.offsetHeight;
					n.tooltipEl.style("left", r[0] + "px").style("top", r[1] + "px").style("transform", "translate(-".concat(r[0] / o * 100, "%, ").concat(a - r[1] < 100 ? "calc(-100% - 6px)" : "21px", ")"))
				})), e.on("mouseover.tooltip", (function() {
					n.mouseInside = !0, n.content && n.tooltipEl.style("display", "inline")
				})), e.on("mouseout.tooltip", (function() {
					n.mouseInside = !1, n.tooltipEl.style("display", "none")
				}))
			},
			update: function(t) {
				t.tooltipEl.style("display", t.content && t.mouseInside ? "inline" : "none"), t.tooltipEl.html(t.content || "")
			}
		}),
		Pi = function(t) {
			var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
				e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
				r = e.strokeWidth,
				i = void 0 === r ? 1 : r,
				o = e.fontFamily,
				a = void 0 === o ? "sans-serif" : o,
				u = new OffscreenCanvas(0, 0).getContext("2d");
			return u ? (u.font = "".concat(n, "px ").concat(a), u.measureText(t).width + i) : 0
		},
		Ri = 12,
		Ii = Ti({
			props: {
				width: {
					default: 500
				},
				height: {
					//default: window.innerHeight
					default:500
				},
				data: {
					onChange: function(t, n) {
						n.needsReparse = !0
					}
				},
				children: {
					default: "children",
					onChange: function(t, n) {
						n.needsReparse = !0
					}
				},
				sort: {
					onChange: function(t, n) {
						n.needsReparse = !0
					}
				},
				label: {
					default: function(t) {
						return t.name
					}
				},
				labelOrientation: {
					default: "auto"
				},
				size: {
					default: "value",
					onChange: function(t, n) {
						n.needsReparse = !0
					}
				},
				color: {
					default: function(t) {
						return "lightgrey"
					}
				},
				strokeColor: {
					default: function(t) {
						return "white"
					}
				},
				nodeClassName: {},
				minSliceAngle: {
					default: .2
				},
				maxLevels: {},
				excludeRoot: {
					default: !1,
					onChange: function(t, n) {
						n.needsReparse = !0
					}
				},
				centerRadius: {
					default: .1
				},
				radiusScaleExponent: {
					default: .5
				},
				showLabels: {
					default: !0
				},
				handleNonFittingLabel: {},
				tooltipContent: {
					default: function(t) {
						return ""
					},
					triggerUpdate: !1
				},
				tooltipTitle: {
					default: null,
					triggerUpdate: !1
				},
				showTooltip: {
					default: function(t) {
						return !0
					},
					triggerUpdate: !1
				},
				focusOnNode: {
					onChange: function(t, n) {
						t && n.initialised && function t(e) {
							n.svg.selectAll(".slice").filter((function(t) {
								return t === e
							})).each((function(n) {
								this.parentNode.appendChild(this), n.parent && t(n.parent)
							}))
						}(t.__dataNode)
					}
				},
				onClick: {
					triggerUpdate: !1
				},
				onHover: {
					triggerUpdate: !1
				},
				transitionDuration: {
					default: 750,
					triggerUpdate: !1
				}
			},
			methods: {
				_parseData: function(t) {
					if (t.data) {
						var n = ue(t.data, Ci(t.children)).sum(Ci(t.size));
						if (t.sort && n.sort(t.sort), de().padding(0)(n), t.excludeRoot) {
							var e = te().domain([n.y1 - n.y0, 1]);
							n.descendants().forEach((function(t) {
								t.y0 = e(t.y0), t.y1 = e(t.y1)
							}))
						}
						n.descendants().forEach((function(t, n) {
							t.id = n, t.data.__dataNode = t
						})), t.layoutData = n.descendants()
					}
				}
			},
			aliases: {
				onNodeClick: "onClick"
			},
			init: function(t, n) {
				var e = this;
				n.chartId = Math.round(1e12 * Math.random()), n.radiusScale = oe(), n.angleScale = te().domain([0, 10]).range([0, 2 * Math.PI]).clamp(!0), n.arc = De().startAngle((function(t) {
					return n.angleScale(t.x0)
				})).endAngle((function(t) {
					return n.angleScale(t.x1)
				})).innerRadius((function(t) {
					return Math.max(0, n.radiusScale(t.y0))
				})).outerRadius((function(t) {
					return Math.max(0, n.radiusScale(t.y1))
				}));
				var r = dt(t).append("div").attr("class", "sunburst-viz");
				n.svg = r.append("svg"), n.canvas = n.svg.append("g").style("font-family", "sans-serif").style("font-size", "".concat(12, "px")), n.tooltip = ji()(r), n.svg.on("click", (function(t) {
					return (n.onClick || e.focusOnNode)(null, t)
				})).on("mouseover", (function(t) {
					return n.onHover && n.onHover(null, t)
				}))
			},
			update: function(n) {
				var e = this;
				n.needsReparse && (this._parseData(), n.needsReparse = !1);
				var r = Math.min(n.width, n.height) / 2;
				if (n.radiusScale.range([r * Math.max(0, Math.min(1, n.centerRadius)), r]), n.radiusScaleExponent > 0 && n.radiusScale.exponent(n.radiusScaleExponent), n.svg.style("width", n.width + "px").style("height", n.height + "px").attr("viewBox", "".concat(-n.width / 2, " ").concat(-n.height / 2, " ").concat(n.width, " ").concat(n.height)), n.layoutData) {
					var i = n.focusOnNode && n.focusOnNode.__dataNode.y0 >= 0 && n.focusOnNode.__dataNode || {
							x0: 0,
							x1: 1,
							y0: 0,
							y1: 1
						},
						o = n.canvas.selectAll(".slice").data(n.layoutData.filter((function(t) {
							return t.x1 > i.x0 && t.x0 < i.x1 && (t.x1 - t.x0) / (i.x1 - i.x0) > n.minSliceAngle / 360 && (!n.maxLevels || t.depth - (i.depth || (n.excludeRoot ? 1 : 0)) < n.maxLevels) && (t.y0 >= 0 || i.parent)
						})), (function(t) {
							return t.id
						})),
						a = Ci(n.label),
						u = Ci(n.color),
						l = Ci(n.strokeColor),
						s = Ci(n.nodeClassName),
						c = Vr().duration(n.transitionDuration),
						f = n.layoutData[0].y1 - n.layoutData[0].y0,
						h = Math.min(1, i.y0 + f * Math.min(i.hasOwnProperty("height") ? i.height + 1 : 1 / 0, n.maxLevels || 1 / 0));
					n.svg.transition(c).tween("scale", (function() {
						var t = _n(n.angleScale.domain(), [i.x0, i.x1]),
							e = _n(n.radiusScale.domain(), [i.y0, h]);
						return function(r) {
							n.angleScale.domain(t(r)), n.radiusScale.domain(e(r))
						}
					}));
					var p = o.exit().transition(c).remove();
					p.select("path.main-arc").attrTween("d", (function(t) {
					//AGGIUNTA ID ALL'UPDATE  
					var sunb_slice = document.querySelectorAll(".main-arc");
					//console.log(sunb_slice)
					for(i=0; i<sunb_slice.length; i++){
						var text = sunb_slice[i].nextSibling.nextSibling.firstChild.innerHTML;

						//console.log("----");
						//console.log(sunb_slice[i].__data__);
						//console.log("Parent");
						//console.log(sunb_slice[i].__data__.parent);	
						if(sunb_slice[i].__data__.parent != null){

							var parentName = sunb_slice[i].__data__.parent.data.name;
							var parts_parent = parentName.split(':');
							var part_parent = parts_parent[0].trim(); 
							if(part_parent=="specializations" || part_parent == "generalizations" || part_parent=="RFD found" || part_parent == "new RFDs" || part_parent == "RFD not found"){
							
								var parts = text.split(':');
								var part = parts[0].trim(); 
							
								var fullID=part_parent.concat(part);
								sunb_slice[i].id=fullID;
							
							}else{
								var parts = text.split(':');
								var part = parts[0].trim(); 
							
								sunb_slice[i].id=part;
							}
						}	
					  }
            
						return function() {
							return n.arc(t)
						}
					})), p.select("path.hidden-arc").attrTween("d", (function(t) {
						return function() {
							return b(t)
						}
					}));
					var d = o.enter().append("g").style("opacity", 0).on("click", (function(t, r) {
						t.stopPropagation(), (n.onClick || e.focusOnNode)(r.data, t)
					})).on("mouseover", (function(t, e) {
						t.stopPropagation(), n.onHover && n.onHover(e.data, t), n.tooltip.content(!!n.showTooltip(e.data, e) && '<div class="tooltip-title">'.concat(n.tooltipTitle ? n.tooltipTitle(e.data, e) : function(t) {
							var n = [],
								e = t;
							for (; e;) n.unshift(e), e = e.parent;
							return n
						}(e).slice(n.excludeRoot ? 1 : 0).map((function(t) {
							return a(t.data)
						})).join(" &rarr; "), "</div>").concat(n.tooltipContent(e.data, e)))
					})).on("mouseout", (function() {
						return n.tooltip.content(!1)
					}));
					d.append("path").attr("class", "main-arc").style("stroke", (function(t) {
            //console.log(d) //Stampa all'inizio ed ogni volta che si torna indietro
						return l(t.data, t.parent)
					})).style("fill", (function(t) {
						return u(t.data, t.parent)
					})), d.append("path").attr("class", "hidden-arc").attr("id", (function(t) {
						return "hidden-arc-".concat(n.chartId, "-").concat(t.id)
					}));
					var y = d.append("text").attr("class", "angular-label");
					y.append("textPath").attr("class", "text-contour").attr("startOffset", "50%").attr("xlink:href", (function(t) {
						return "#hidden-arc-".concat(n.chartId, "-").concat(t.id)
					})), y.append("textPath").attr("class", "text-stroke").attr("startOffset", "50%").attr("xlink:href", (function(t) {
						return "#hidden-arc-".concat(n.chartId, "-").concat(t.id)
					}));
          
					var v = d.append("g").attr("class", "radial-label");
					v.append("text").attr("class", "text-contour"), v.append("text").attr("class", "text-stroke"), d.selectAll(".text-contour").style("stroke-width", "".concat(5, "px"));
					var g = o.merge(d);
					g.style("opacity", 1).attr("class", (function(n) {
						return ["slice"].concat(t("".concat(s(n.data) || "").split(" ").map((function(t) {
							return t.trim()
						})))).filter((function(t) {
							return t
						})).join(" ")
					})), g.select("path.main-arc").transition(c).attrTween("d", (function(t) {
						return function() {
							return n.arc(t)
						}
					})).style("stroke", (function(t) {
						return l(t.data, t.parent)
					})).style("fill", (function(t) {
						return u(t.data, t.parent)
					}));


					var m = n.showLabels && ["angular", "auto"].includes(n.labelOrientation.toLowerCase()),
						w = n.showLabels && ["radial", "auto"].includes(n.labelOrientation.toLowerCase());
					m && g.select("path.hidden-arc").transition(c).attrTween("d", (function(t) {
						return function() {
							return b(t)
						}
					})), g.select("text.angular-label").select("textPath.text-contour"), g.select("text.angular-label").select("textPath.text-stroke"), g.select("g.radial-label").select("text.text-contour"), g.select("g.radial-label").select("text.text-stroke");
					var _ = function(t) {
							if (!n.showLabels) return {
								label: "",
								fits: !1
							};
							var e = "angular" !== ("auto" === n.labelOrientation ? function(t) {
									var e = (n.angleScale(t.x0) + n.angleScale(t.x1)) / 2 % Math.PI,
										r = e > Math.PI / 4 && e < 3 * Math.PI / 4 ? N(t) ? "radial" : S(t) ? "angular" : null : S(t) ? "angular" : N(t) ? "radial" : null;
									if (!r) {
										if (n.radiusScale(t.y0) * (n.angleScale(t.x1) - n.angleScale(t.x0)) < 17) r = "angular";
										else r = M(t) < A(t) ? "radial" : "angular"
									}
									return r
								}(t) : n.labelOrientation),
								r = a(t.data),
								i = e ? N(t) : S(t);
							if (!i && n.handleNonFittingLabel) {
								var o = e ? A(t) : M(t),
									u = n.handleNonFittingLabel(r, o, t);
								u && (r = u, i = !0)
							}
							return {
								isRadial: e,
								label: r,
								fits: i
							}
						},
						x = new Map;
					g.select(".angular-label").transition(c).styleTween("display", (function(t) {
						return function() {
							x.set(t, _(t));
							var n = x.get(t),
								e = n.isRadial,
								r = n.fits;
							return m && !e && r ? null : "none"
						}
					})), g.select(".radial-label").transition(c).styleTween("display", (function(t) {
						return function() {
							var n = x.get(t),
								e = n.isRadial,
								r = n.fits;
							return w && e && r ? null : "none"
						}
					})), m && g.selectAll("text.angular-label").selectAll("textPath").transition(c).textTween((function(t) {
						return function() {
							return x.get(t).label
						}
					})), w && g.selectAll("g.radial-label").selectAll("text").transition(c).textTween((function(t) {
						return function() {
							return x.get(t).label
						}
					})).attrTween("transform", (function(t) {
						return function() {
							return function(t) {
								var e = (n.angleScale(t.x0) + n.angleScale(t.x1) - Math.PI) / 2,
									r = Math.max(0, (n.radiusScale(t.y0) + n.radiusScale(t.y1)) / 2),
									i = r * Math.cos(e),
									o = r * Math.sin(e),
									a = 180 * e / Math.PI;
								return e > Math.PI / 2 && e < 3 * Math.PI / 2 && (a += 180), "translate(".concat(i, ", ").concat(o, ") rotate(").concat(a, ")")
							}(t)
						}
					}))

          
				}



				function b(t) {
					var e = Math.PI / 2,
						r = [n.angleScale(t.x0) - e, n.angleScale(t.x1) - e],
						i = Math.max(0, (n.radiusScale(t.y0) + n.radiusScale(t.y1)) / 2);
					if (!(i && r[1] - r[0])) return "";
					var o = (r[1] + r[0]) / 2,
						a = o > 0 && o < Math.PI;
					a && r.reverse();
					var u = Pe();
					return u.arc(0, 0, i, r[0], r[1], a), u.toString()
				}

				function M(t) {
					var e = n.angleScale(t.x1) - n.angleScale(t.x0);
					return Math.max(0, (n.radiusScale(t.y0) + n.radiusScale(t.y1)) / 2) * e
				}

				function A(t) {
					return n.radiusScale(t.y1) - n.radiusScale(t.y0)
				}

				function S(t) {
					return Pi(a(t.data).toString(), Ri, {
						strokeWidth: 5
					}) < M(t)
				}

				function N(t) {
					return !(n.radiusScale(t.y0) * (n.angleScale(t.x1) - n.angleScale(t.x0)) < 17) && Pi(a(t.data).toString(), Ri, {
						strokeWidth: 5
					}) < A(t)
				}
			}
		});
	return Ii
}));


function sendRFD(lhs, rhs, old_lhs, old_rhs, type){
	//alert(lhs)
	//alert(rhs)
	//alert(old_lhs)
	//alert(old_rhs)
	//alert("Sono in sendRFD");

	var jsonRFD = {
		rhs: rhs,
		lhs: lhs,
		old_lhs: old_lhs,
		old_rhs: old_rhs,
		type: type
	  };

	console.log("[sendRFD] jsonRFD");
	console.log(jsonRFD);

	var queryParams = $.param(jsonRFD);
	console.log("[sendRFD] queryParams");
	console.log(queryParams);

    $.ajax({
		type:"GET",
		dataType:"text",
		contentType: "application/text",
		xhrFields: { withCredentials: false },
		crossDomain: true,
		// async: false, // async dovrebbe andare bene in quanto è una componente di output
		data: jsonRFD,
		url:"http://127.0.0.1:5000/ask",
	})
	.done(function(response){
	    var jsonResponse = JSON.parse(response);
		console.log("Response http://127.0.0.1:5000/ask: ",response)
		//console.log("Response http://127.0.0.1:5000/ask getjson: ",getjson)
		console.log("Response http://127.0.0.1:5000/ask parsed: ", jsonResponse);

		var llmQuery = jsonResponse['LLMQuery'];
		//alert("Dataset Loaded Successfully!");
		var url = 'http://127.0.0.1:5000/LLM_Answer2.html?prompt=' + encodeURIComponent(llmQuery);

        // Esegui il reindirizzamento con l'URL contenente i dati come parametri
        var popup = window.open(url, 'Popup', 'width=800,height=600');
	})
	.fail(function(xhr, textStatus, errorThrown){
		console.log("ERROR http://127.0.0.1:5000/ask: ",xhr.responseText)
		//alert("Dataset upload error! "+errorThrown);
		return xhr.responseText;

	}).then(function(value){

	})

}

function sendRFD_prompt(lhs, rhs, old_lhs, old_rhs, type){
	//alert(lhs)
	//alert(rhs)
	//alert(old_lhs)
	//alert(old_rhs)
	//alert("Sono in sendRFD");

	var jsonRFD = {
		rhs: rhs,
		lhs: lhs,
		old_lhs: old_lhs,
		old_rhs: old_rhs,
		type: type
	  };

	console.log("[sendRFD_prompt] jsonRFD");
	console.log(jsonRFD);

	var queryParams = $.param(jsonRFD);
	console.log("[sendRFD_prompt] queryParams");
	console.log(queryParams);

    $.ajax({
		type:"GET",
		dataType:"text",
		contentType: "application/text",
		xhrFields: { withCredentials: false },
		crossDomain: true,
		// async: false, // async dovrebbe andare bene in quanto è una componente di output
		data: jsonRFD,
		url:"http://127.0.0.1:5000/ask",
	})
	.done(function(response){
	    var jsonResponse = JSON.parse(response);
		console.log("Response http://127.0.0.1:5000/ask: ",response)
		//console.log("Response http://127.0.0.1:5000/ask getjson: ",getjson)
		console.log("Response http://127.0.0.1:5000/ask parsed: ", jsonResponse);

		var llmQuery = jsonResponse['LLMQuery'];
		//alert("Dataset Loaded Successfully!");
		var url = 'http://127.0.0.1:5000/LLM_Chat.html?prompt=' + encodeURIComponent(llmQuery);

        // Esegui il reindirizzamento con l'URL contenente i dati come parametri
        var popup = window.open(url, 'Popup', 'width=800,height=600');
	})
	.fail(function(xhr, textStatus, errorThrown){
		console.log("ERROR http://127.0.0.1:5000/ask: ",xhr.responseText)
		//alert("Dataset upload error! "+errorThrown);
		return xhr.responseText;

	}).then(function(value){

	})

}


// Funzione per convertire una stringa in un Set
function stringToSet(inputString) {
	return new Set(
	  inputString
		.replace(/[\[\]']+/g, '') // Rimuove le parentesi quadre e le virgolette
		.split(', ') // Divide la stringa in base alla virgola e allo spazio
	);
  }
   
  // Funzione per calcolare la differenza tra due Set
  function difference(setA, setB) {
	return new Set([...setA].filter(x => !setB.has(x)));
  }
   


function generateSunburst(filename){

	className='sunburst-viz';
	var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].innerHTML.trim() !== '') {
            //console.log(className + ' with index ' + i + ' is not empty. Emptying...');
            elements[i].innerHTML = ''; // Empty the non-empty div
        } else {
            //console.log(className + ' with index ' + i + ' is empty.');
        }
    }
	//console.log("Scheme");
	//console.log(d3.schemePaired);

	//const color = d3.scaleOrdinal(d3.schemePaired);
	//const color = d3.scale.ordinal(d3.schemePaired);
	
	// Define a color scale using d3.scale.category10()
    const color = d3.scale.category20();

	filename="./static/Json_percentages/"+ filename;
	console.log(filename);

    fetch(filename).then(res => res.json()).then(data => {
      Sunburst()
        .data(data)
        .label('name')
        .size('size')
        .color((d, parent) => color(parent ? parent.data.name : null)) //colore delle fette 
        .tooltipContent((d, node) => ``) //Size: <i>${node.value}</i>
        (document.getElementById('sunburst'));
    })
}


function createchart(){

	// Select all elements with the class 'example-class'
	const elementsToDelete = document.querySelectorAll('.waves')	
	// Iterate over the selected elements
	elementsToDelete.forEach(function(element) {
	 // Remove each element
	element.remove();
	});

	const tutorialButton = document.getElementById('tutorial-buttonID');
	tutorialButton.className ='tutorial-button-up'
    //tutorialButton.style.display = 'none'; // Nasconde il pulsante
	//tutorialButton.classList.remove('tutorial-button');
	//tutorialButton.classList.add('tutorial-button-up');

	// Select all elements with the class 'logo'
	const logos = document.querySelectorAll('.logo');

	// Iterate over the selected elements
	logos.forEach(function(logo) {
    	// Replace the class 'logo' with 'logo_small'
   	 logo.classList.remove('logo');
    	logo.classList.add('logo_small');
	});	

	
	var element = document.getElementById("sezioneRisultati");
        if (element) {
            element.style.display = "block";
        }

    var par = document.getElementById('colltree');
    if(par != null){
        par.parentNode.removeChild(par);
    }
    
    var par2 = document.getElementById('sunchart');
    if(par2 != null){
        par2.parentNode.removeChild(par2);
        var  risultati = $('#risultati').DataTable();
        risultati.rows().remove().draw();

    }
    
    var a = document.getElementById('file1').value;
    var temp2 = a.split("jsonForChart");
    var b = "percentages"+temp2[1];

	
	var element = document.getElementById("load_dataset");
	element.remove();
	var element = document.getElementById("load_json");
	element.remove();


	generateSunburst(b);

    a = "./static/Json_chart/jsonForChart"+temp2[1];

	jQuery.fn.d3Click = function()
{
    this.each(function(i,e){
    var evt = new MouseEvent("click");
    e.dispatchEvent(evt);
});
};


treeJSON = d3.json(a, function(error, treeData) {

    // Calculate total nodes, max label length
    var totalNodes = 0;
    var maxLabelLength = 0;
    // variables for drag/drop
    var selectedNode = null;
    var draggingNode = null;
    // panning variables
    var panSpeed = 100;
    var panBoundary = 20; // Within 20px from edges will pan when dragging.
    // Misc. variables
    var i = 0;
    var duration = 750;
    var root;

    // size of the diagram
    var viewerWidth = $("#contenitore").width();
    var viewerHeight = $(document).height();

    var tree = d3.layout.tree()
        .size([viewerHeight, viewerWidth]);

    // define a d3 diagonal projection for use by the node paths later on.
    var diagonal = d3.svg.diagonal()
        .projection(function(d) {
            return [d.y, d.x];
        });

    // A recursive helper function for performing some setup by walking through all nodes
    function visit(parent, visitFn, childrenFn) {
        if (!parent) return;

        visitFn(parent);

        var children = childrenFn(parent);
        if (children) {
            var count = children.length;
            for (var i = 0; i < count; i++) {
                visit(children[i], visitFn, childrenFn);

            }
        }
    }

    // Call visit function to establish maxLabelLength
    visit(treeData, function(d) {
        totalNodes++;
        maxLabelLength = Math.max(d.name.length, maxLabelLength);

    }, function(d) {
        return d.children && d.children.length > 0 ? d.children : null;
    });

    // sort the tree according to the node names
    function sortTree() {
        tree.sort(function(a, b) {
            return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
        });
    }
    // Sort the tree initially incase the JSON isn't in a sorted order.
    sortTree();

    // TODO: Pan function, can be better implemented.
    function pan(domNode, direction) {
        var speed = panSpeed;
        if (panTimer) {
            clearTimeout(panTimer);
            translateCoords = d3.transform(svgGroup.attr("transform"));
            if (direction == 'left' || direction == 'right') {
                translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
                translateY = translateCoords.translate[1];
            } else if (direction == 'up' || direction == 'down') {
                translateX = translateCoords.translate[0];
                translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
            }
            scaleX = translateCoords.scale[0];
            scaleY = translateCoords.scale[1];
            scale = zoomListener.scale();
            svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
            d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
            zoomListener.scale(zoomListener.scale());
            zoomListener.translate([translateX, translateY]);
            panTimer = setTimeout(function() {
                pan(domNode, speed, direction);
            }, 50);
        }
    }

    // Define the zoom function for the zoomable tree

    function zoom() {
        svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
    var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 10]).on("zoom", zoom);

    function initiateDrag(d, domNode) {
        draggingNode = d;
        d3.select(domNode).select('.ghostCircle').attr('pointer-events', 'none');
        d3.selectAll('.ghostCircle').attr('class', 'ghostCircle show');
        d3.select(domNode).attr('class', 'node activeDrag');

        svgGroup.selectAll("g.node").sort(function(a, b) { // select the parent and sort the path's
            if (a.id != draggingNode.id) return 1; // a is not the hovered element, send "a" to the back
            else return -1; // a is the hovered element, bring "a" to the front
        });

        // if nodes has children, remove the links and nodes
        if (nodes.length > 1) {
            // remove link paths
            links = tree.links(nodes);
            nodePaths = svgGroup.selectAll("path.link")
                .data(links, function(d) {
                    return d.target.id;
                }).remove();
            // remove child nodes
            nodesExit = svgGroup.selectAll("g.node")
                .data(nodes, function(d) {
                    return d.id;
                }).filter(function(d, i) {
                    if (d.id == draggingNode.id) {
                        return false;
                    }
                    return true;
                }).remove();
        }

        // remove parent link
        parentLink = tree.links(tree.nodes(draggingNode.parent));
        svgGroup.selectAll('path.link').filter(function(d, i) {
            if (d.target.id == draggingNode.id) {
                return true;
            }
            return false;
        }).remove();

        dragStarted = null;
    }

    // define the baseSvg, attaching a class for styling and the zoomListener
    var baseSvg = d3.select("#tree-container").append("svg")
        .attr("id", "colltree")
        .attr("width", viewerWidth)
        .attr("height", viewerHeight*0.8)
        .attr("class", "overlay")
        .call(zoomListener);

    // Helper functions for collapsing and expanding nodes.
    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }

    function expand(d) {
        if (d._children) {
            d.children = d._children;
            d.children.forEach(expand);
            d._children = null;
        }
    }

    var overCircle = function(d) {
        selectedNode = d;
        updateTempConnector();
    };
    var outCircle = function(d) {
        selectedNode = null;
        updateTempConnector();
    };

    // Function to update the temporary connector indicating dragging affiliation
    var updateTempConnector = function() {
        var data = [];
        if (draggingNode !== null && selectedNode !== null) {
            // have to flip the source coordinates since we did this for the existing connectors on the original tree
            data = [{
                source: {
                    x3: selectedNode.y0,
                    y3: selectedNode.x0
                },
                target: {
                    x: draggingNode.y0,
                    y: draggingNode.x0
                }
            }];
        }
        var link = svgGroup.selectAll(".templink").data(data);

        link.enter().append("path")
            .attr("class", "templink")
            .attr("d", d3.svg.diagonal())
            .attr('pointer-events', 'none');

        link.attr("d", d3.svg.diagonal());

        link.exit().remove();
    };

    // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

    function centerNode(source) {
        scale = zoomListener.scale();
        x2p = -source.y0;
        y2p = -source.x0;
        x2p = x2p * scale + viewerWidth / 2;
        y2p = y2p * scale + viewerHeight / 2;
        d3.select('g').transition()
            .duration(duration)
            .attr("transform", "translate(" + x2p + "," + y2p + ")scale(" + scale + ")");
        zoomListener.scale(scale);
        zoomListener.translate([x2p, y2p]);
    }

    // Toggle children function
    function toggleChildren(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else if (d._children) {
            d.children = d._children;
            d._children = null;
        }
        return d;
    }

    // Toggle children on click.
    function click(d) {
		//Qui stampa con il click sul collapsible tree
		//console.log("Click");
		//console.log(d);

        if (d3.event.defaultPrevented) return; // click suppressed
		//NEW RFD
        if (d.name == "new RFDs") {
            var  risultati = $('#risultati').DataTable();
            var lista = d._children;
            d = toggleChildren(d);
            update(d);
            centerNode(d);
			//console.log(lista);
            if(lista != null){  
                //$("#new_RFDs").d3Click();    
				var element = document.getElementById('new RFDs');
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}
				
				
                for(let i=0; i<lista.length; i++){
                    var listalhs = lista[i]._children;
                    if(listalhs != null){
                        for (let j = 0; j<listalhs.length;j++) {                        
                            //risultati.row.add(["Not Available","Not Available","new RFD",""+listalhs[j].name, ""+lista[i].name]).draw(false);     
							var newRow = risultati.row.add([
								"Not Available","Not Available","new RFD",""+listalhs[j].name, ""+lista[i].name,
								'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\',\'none\', \'new RFD\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>',
								'<center><button class="button-82-pushable" role="button" onclick="sendRFD_prompt(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\',\'none\', \'new RFD\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Interact </span></button></center>'

							]).draw(false).node();
                        }
                    }
                    else{
                       lista[i]._children = lista[i].children;
                       lista[i].children = null;
                       var listalhs = lista[i]._children;
                        update(lista[i]);
                        for (let j = 0; j<listalhs.length;j++) {
                            //risultati.row.add(["Not Available","Not Available","new RFD",""+listalhs[j].name, ""+lista[i].name]).draw(false);

							var newRow = risultati.row.add([
								"Not Available","Not Available","new RFD",""+listalhs[j].name, ""+lista[i].name,
								'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\' ,\'none\', \'new RFD\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>',
							    '<center><button class="button-82-pushable" role="button" onclick="sendRFD_prompt(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\' ,\'none\', \'new RFD\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Interact </span></button></center>'
							]).draw(false).node();
                        }
                    }
                }
            } else {
               //$("#RFDs").d3Click();

			   var element = document.getElementById('RFDs');
			   if (element) {
				   var event = new MouseEvent('click', {
					   bubbles: true,
					   cancelable: true,
					   view: window
				   });
				   element.dispatchEvent(event);
			   } else {
				   //console.error("Element with ID '" + elementId + "' not found.");
			   }

               var filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                               return risultati.row(value).data()[2] == "new RFD";
                            } );
                        risultati.rows( filteredData )
                        .remove()
                        .draw();
               lista2 = d._children;
               for (let j = 0; j<lista2.length;j++) {
                   filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                               return risultati.row(value).data()[2] == "new RFD: "+lista2[j].name+"  ";
                            } );
                        risultati.rows( filteredData )
                        .remove()
                        .draw();
               }
            }
		//END NEW RFD
        } else if (d.name == "RFD found") {
            var  risultati = $('#risultati').DataTable();
            var lista = d._children;
            d = toggleChildren(d);
            update(d);
            centerNode(d);
            if(lista != null){
                //$("#RFD_found").d3Click();

				var element = document.getElementById('RFD found');
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}


                for(let i=0; i<lista.length; i++){
                    var listalhs = lista[i]._children;

                    if(listalhs != null){
                        for (let j = 0; j<listalhs.length;j++) {
                            //risultati.row.add([""+listalhs[j].name,""+lista[i].name,"RFD found",""+listalhs[j].name, ""+lista[i].name]).draw(false);

							var newRow = risultati.row.add([
								""+listalhs[j].name,""+lista[i].name,"RFD found",""+listalhs[j].name, ""+lista[i].name,
								'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,,\'none\', \'none\', \'RFD Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>',
    							'<center><button class="button-82-pushable" role="button" onclick="sendRFD_prompt(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,,\'none\', \'none\', \'RFD Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Interact </span></button></center>'
							]).draw(false).node();

                        }
                    } else{
                        lista[i]._children = lista[i].children;
                        lista[i].children = null;
                        var listalhs = lista[i]._children;
                        update(lista[i]);
                        for (let j = 0; j<listalhs.length;j++) {
                            //risultati.row.add([""+listalhs[j].name,""+lista[i].name,"RFD found",""+listalhs[j].name, ""+lista[i].name]).draw(false);

							var newRow = risultati.row.add([
								""+listalhs[j].name,""+lista[i].name,"RFD found",""+listalhs[j].name, ""+lista[i].name,
								'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\', \'none\' , \'RFD Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>',
								'<center><button class="button-82-pushable" role="button" onclick="sendRFD_prompt(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\', \'none\' , \'RFD Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Interact </span></button></center>'
							  ]).draw(false).node();
                        }
                    }
                }
            } else {
                //$("#RFDs").d3Click();

				var element = document.getElementById('RFDs');
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}


                var filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                               return risultati.row(value).data()[2] == "RFD found";
                            } );
                        risultati.rows( filteredData )
                        .remove()
                        .draw();
               lista2 = d._children;
               for (let j = 0; j<lista2.length;j++) {
                   filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                               return risultati.row(value).data()[2] == "RFD found: "+lista2[j].name+"  ";
                            } );
                        risultati.rows( filteredData )
                        .remove()
                        .draw();
               }

            }
        } else if (d.name == "RFD not found") {

            var  risultati = $('#risultati').DataTable();
            var lista = d._children;
            d = toggleChildren(d);
            update(d);
            centerNode(d);
            if(lista != null){
                //$("#RFD_not_found").d3Click();
				//DA TESTARE
				var element = document.getElementById('RFD not found');
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}

                for(let i=0; i<lista.length; i++){
                    var listalhs = lista[i]._children;
                    if(listalhs != null){
                        for (let j = 0; j<listalhs.length;j++) {
                            //risultati.row.add([""+listalhs[j].name,""+lista[i].name,"RFD not found","Not Available","Not Available"]).draw(false);

							var newRow = risultati.row.add([
								""+listalhs[j].name,""+lista[i].name,"RFD not found","Not Available","Not Available",
								'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,\'none\' ,\'none\', \'RFD not Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>',
								'<center><button class="button-82-pushable" role="button" onclick="sendRFD_prompt(this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,\'none\' ,\'none\', \'RFD not Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Interact </span></button></center>'
							  ]).draw(false).node();
                        }
                    } else {
                        lista[i]._children = lista[i].children;
                        lista[i].children = null;
                        var listalhs = lista[i]._children;
                        update(lista[i]);
                        for (let j = 0; j<listalhs.length;j++) {
                            //risultati.row.add([""+listalhs[j].name,""+lista[i].name,"RFD not found","Not Available","Not Available"]).draw(false);

							var newRow = risultati.row.add([
								""+listalhs[j].name,""+lista[i].name,"RFD not found","Not Available","Not Available",
								'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,\'none\',\'none\', \'RFD not Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>',
								'<center><button class="button-82-pushable" role="button" onclick="sendRFD_prompt(this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,\'none\',\'none\', \'RFD not Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Interact </span></button></center>'
							  ]).draw(false).node();
                        }
                    }
                }
            } else {
                //$("#RFDs").d3Click();

				var element = document.getElementById('RFDs');
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}


                var filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                               return risultati.row(value).data()[2] == "RFD not found";
                            } );
                        risultati.rows( filteredData )
                        .remove()
                        .draw();
               lista2 = d._children;
               for (let j = 0; j<lista2.length;j++) {
                   filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                               return risultati.row(value).data()[2] == "RFD not found: "+lista2[j].name+"  ";
                            } );
                        risultati.rows( filteredData )
                        .remove()
                        .draw();
               }
            }

        } else if (d.name == "generalizations") {

            var  risultati = $('#risultati').DataTable();
            var lista = d._children;
            d = toggleChildren(d);
            update(d);
            centerNode(d);
            if(lista != null){
                if(lista.length!=0){
                 //$("#generalizations").d3Click();
				 //DA TESTARE
				 var element = document.getElementById('generalizations');
				 if (element) {
					 var event = new MouseEvent('click', {
						 bubbles: true,
						 cancelable: true,
						 view: window
					 });
					 element.dispatchEvent(event);
				 } else {
					 //console.error("Element with ID '" + elementId + "' not found.");
				 }

                }
                for(let i=0; i<lista.length; i++){
                    var listalhs = lista[i]._children;
                    if(listalhs != null){
                        for (let j = 0; j<listalhs.length;j++) {
                            //risultati.row.add(["nd","nd","generalizations",""+listalhs[j].name, ""+lista[i].name]).draw(false);
							var newRow = risultati.row.add([
								"Not Available",
								"Not Available",
								"generalizations",
								"" + listalhs[j].name,
								"" + lista[i].name,
								"",
								""
								//'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\' , \'generalization\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>'
							]).draw(false).node();
                        }
                    } else {
                        lista[i]._children = lista[i].children;
                        lista[i].children = null;
                        var listalhs = lista[i]._children;
                        update(lista[i]);
                        for (let j = 0; j<listalhs.length;j++) {
                            //risultati.row.add(["Not Available","Not Available","generalizations",""+listalhs[j].name, ""+lista[i].name]).draw(false);
							var newRow = risultati.row.add([
								"Not Available",
								"Not Available",
								"generalizations",
								"" + listalhs[j].name,
								"" + lista[i].name,
								"",
								""
								//'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\',\'generalization\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>'
							]).draw(false).node();
                        }
                    }
                }
            } else {
                //$("#RFDs").d3Click();

				var element = document.getElementById('RFDs');
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}

                var filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                               return risultati.row(value).data()[2] == "generalizations";
                            } );
                        risultati.rows( filteredData )
                        .remove()
                        .draw();
               lista2 = d._children;
               for (let j = 0; j<lista2.length;j++) {
                   filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                               return risultati.row(value).data()[2] == "generalizations: "+lista2[j].name;
                            } );
                        risultati.rows( filteredData )
                        .remove()
                        .draw();
               }
            }

        } else if (d.name == "specializations") {
            var  risultati = $('#risultati').DataTable();
            var lista = d._children;
            d = toggleChildren(d);
            update(d);
            centerNode(d);
            if(lista != null){
                //$("#specializations").d3Click();

				var element = document.getElementById('specializations');
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}


                for(let i=0; i<lista.length; i++){
                    var listalhs = lista[i]._children;
                    if(listalhs != null){
                        for (let j = 0; j<listalhs.length;j++) {
                            //risultati.row.add(["Not Available","Not Available","specializations",""+listalhs[j].name, ""+lista[i].name]).draw(false);
							var newRow = risultati.row.add([
								"Not Available",
								"Not Available",
								"specializations",
								"" + listalhs[j].name,
								"" + lista[i].name,
								"",
								""
								//'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\', \'specialization\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>'
							  ]).draw(false).node();
                        }
                    } else {
                      lista[i]._children = lista[i].children;
                        lista[i].children = null;
                        var listalhs = lista[i]._children;
                        update(lista[i]);
                        for (let j = 0; j<listalhs.length;j++) {
                            //risultati.row.add(["Not Available","Not Available","specializations",""+listalhs[j].name, ""+lista[i].name]).draw(false);
							var newRow = risultati.row.add([
								"Not Available",
								"Not Available",
								"specializations",
								"" + listalhs[j].name,
								"" + lista[i].name,
								"",
								""
								//'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\' , \'specialization\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>'
							  ]).draw(false).node();
                        }
                    }
                }
            } else {
                //$("#RFDs").d3Click();

				var element = document.getElementById('RFDs');
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}

                var filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                               return risultati.row(value).data()[2] == "specializations";
                            } );
                        risultati.rows( filteredData )
                        .remove()
                        .draw();
               lista2 = d._children;
               for (let j = 0; j<lista2.length;j++) {
                   filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                               return risultati.row(value).data()[2] == "specializations: "+lista2[j].name;
                            } );
                        risultati.rows( filteredData )
                        .remove()
                        .draw();
               }
            }
        }
		//Fette esterne
        else if (d.parent.name == "RFD found") {
            var  risultati = $('#risultati').DataTable();
            var filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                               return risultati.row(value).data()[2] == "RFD found";
                            } );
                        risultati.rows( filteredData )
                        .remove()
                        .draw();
            var lista = d._children;
            var parente = d.parent;
            var figli = parente.children;
            d = toggleChildren(d);
            update(d);
            centerNode(d);
            if(lista != null){
                //var nomepath = "#RFD_found"+d.name;
                //$(nomepath).d3Click();
				//console.log(nomepath);
				var nomepath = "RFD found"+d.name;
				var element = document.getElementById(nomepath);
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}

                for(let i=0; i<lista.length; i++){
                    var listalhs = lista[i]._children;

                    for (let j = 0; j<listalhs.length;j++) {
                        var myArray = listalhs[j].name.split("LHS:");
                        var word = myArray[0];
                        myArray=word.split("RHS: ");
                        word=myArray[1];
                        //risultati.row.add([""+lista[i].name,""+word,"RFD found: "+word,""+lista[i].name, ""+word]).draw(false);

						var newRow = risultati.row.add([
							""+lista[i].name,
							""+word,
							"RFD found: "+word,
							""+lista[i].name,
							""+word,
							'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\', \'none\',\'RFD Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>',
							'<center><button class="button-82-pushable" role="button" onclick="sendRFD_prompt(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\', \'none\',\'RFD Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Interact </span></button></center>'
						]).draw(false).node();

                    }
                }
            } else {
                //$("#RFD_found").d3Click();


				var element = document.getElementById("RFD found");
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}


                risultati = $('#risultati').DataTable();
                var filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                                var confronto = "RFD found: "+ d.name+"  ";
                               return risultati.row(value).data()[2] == confronto;
                            } );
                        risultati.rows( filteredData ).remove().draw();
                if (!risultati.data().any() ) {
                    for(let i=0; i<figli.length; i++){
                    var listalhs = figli[i]._children;

                    for (let j = 0; j<listalhs.length;j++) {
                            //risultati.row.add(["Not Available","Not Available","RFD found",""+listalhs[j].name, ""+figli[i].name]).draw(false);

							var newRow = risultati.row.add([
								"Not Available",
								"Not Available",
								"RFD found",
								""+listalhs[j].name,
								""+figli[i].name,
								'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\', \'none\', \'RFD Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>',
                                '<center><button class="button-82-pushable" role="button" onclick="sendRFD_prompt(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\', \'none\', \'RFD Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Interact </span></button></center>'
							]).draw(false).node();
                    }
                }
                }
            }
        } else if (d.parent.name == "new RFDs") {
            var  risultati = $('#risultati').DataTable();
            var filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                               return risultati.row(value).data()[2] == "new RFD";
                            } );
                        risultati.rows( filteredData )
                        .remove()
                        .draw();
            var lista = d._children;
            var parente = d.parent;
            var figli = parente.children;
            d = toggleChildren(d);
            update(d);
            centerNode(d);
            if(lista != null){

                //var nomepath = "#new_RFDs"+d.name;
                //$(nomepath).d3Click();


				var nomepath = "new RFDs"+d.name;
				var element = document.getElementById(nomepath);
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}

                for(let i=0; i<lista.length; i++){
                    var listalhs = lista[i]._children;

                    for (let j = 0; j<listalhs.length;j++) {
                        var myArray = listalhs[j].name.split("LHS:");
                        var word = myArray[0];
                        myArray=word.split("RHS: ");
                        word=myArray[1];

						//risultati.row.add(["Not Available","Not Available","new RFD: "+word,""+lista[i].name,""+word]).draw(false);


						var newRow = risultati.row.add([
							"Not Available",
							"Not Available",
							"new RFD: "+word,
							""+lista[i].name,
							""+word,
							'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\', \'none\', \'new RFD\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>',
							'<center><button class="button-82-pushable" role="button" onclick="sendRFD_prompt(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\', \'none\', \'new RFD\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Interact </span></button></center>'
						  ]).draw(false).node();
                    }
                }
            } else {
                //$("#new_RFDs").d3Click();

				var element = document.getElementById("new RFDs");
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}




                risultati = $('#risultati').DataTable();
                var filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                                var confronto = "new RFD: "+ d.name+"  ";
                               return risultati.row(value).data()[2] == confronto;
                            } );
                        risultati.rows( filteredData ).remove().draw();
                if (!risultati.data().any() ) {
                    for(let i=0; i<figli.length; i++){
                    var listalhs = figli[i]._children;

                    for (let j = 0; j<listalhs.length;j++) {
                            //risultati.row.add(["Not Available","Not Available","new RFD",""+listalhs[j].name, ""+figli[i].name]).draw(false);


							var newRow = risultati.row.add([

								"Not Available",
								"Not Available",
								"new RFD",
								""+listalhs[j].name,
								""+figli[i].name,
								'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\', \'none\',\'new RFD\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>',
								'<center><button class="button-82-pushable" role="button" onclick="sendRFD_prompt(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent,\'none\', \'none\',\'new RFD\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Interact </span></button></center>'

							]).draw(false).node();
                    }
                }
                }
            }
        } else if (d.parent.name == "RFD not found") {
            var  risultati = $('#risultati').DataTable();
            var filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                               return risultati.row(value).data()[2] == "RFD not found";
                            } );
                        risultati.rows( filteredData )
                        .remove()
                        .draw();
            var lista = d._children;
            var parente = d.parent;
            var figli = parente.children;
            d = toggleChildren(d);
            update(d);
            centerNode(d);
            if(lista != null){
                //var nomepath = "#RFD_not_found"+d.name;
                //$(nomepath).d3Click();

				var nomepath = "RFD not found"+d.name;
				var element = document.getElementById(nomepath);
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}

                for(let i=0; i<lista.length; i++){
                    var listalhs = lista[i]._children;

                    for (let j = 0; j<listalhs.length;j++) {
                        var myArray = listalhs[j].name.split("LHS:");
                        var word = myArray[0];
                        myArray=word.split("RHS: ");
                        word=myArray[1];
                        //risultati.row.add([""+lista[i].name,""+word,"RFD not found: "+word,"Not Available","Not Available"]).draw(false);


						var newRow = risultati.row.add([
							""+lista[i].name,
							""+word,
							"RFD not found: "+word,
							"Not Available",
							"Not Available",
							'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,\'none\', \'none\', \'RFD not Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>',
							'<center><button class="button-82-pushable" role="button" onclick="sendRFD_prompt(this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,\'none\', \'none\', \'RFD not Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Interact </span></button></center>'
						]).draw(false).node();
                    }
                }
            } else {
              //$("#RFD_not_found").d3Click();

			  var element = document.getElementById("RFD not found");
			  if (element) {
				  var event = new MouseEvent('click', {
					  bubbles: true,
					  cancelable: true,
					  view: window
				  });
				  element.dispatchEvent(event);
			  } else {
				  //console.error("Element with ID '" + elementId + "' not found.");
			  }


              risultati = $('#risultati').DataTable();
                var filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                                var confronto = "RFD not found: "+ d.name+"  ";
                               return risultati.row(value).data()[2] == confronto;
                            } );
                        risultati.rows( filteredData ).remove().draw();
                if (!risultati.data().any() ) {
                    for(let i=0; i<figli.length; i++){
                    var listalhs = figli[i]._children;

                    for (let j = 0; j<listalhs.length;j++) {
                        //risultati.row.add([""+listalhs[j].name,figli[i].name,"RFD not found","Not Available","Not Available"]).draw(false);

						var newRow = risultati.row.add([
							""+listalhs[j].name,
							figli[i].name,
							"RFD not found",
							"Not Available",
							"Not Available",
							'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,\'none\', \'none\',  \'RFD not Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>',
							'<center><button class="button-82-pushable" role="button" onclick="sendRFD_prompt(this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,\'none\', \'none\',  \'RFD not Found\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Interact </span></button></center>'
						]).draw(false).node();
                    }
                }
                }
            }

        }else if (d.parent.name == "specializations") {
            var  risultati = $('#risultati').DataTable();
            var filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                               return risultati.row(value).data()[2] == "specializations";
                            } );
                        risultati.rows( filteredData )
                        .remove()
                        .draw();
            var lista = d._children;
            var parente = d.parent;
            var figli = parente.children;
            d = toggleChildren(d);
            update(d);
            centerNode(d);
            if(lista != null){
                //var nomepath = "#specializations"+d.name;
                //$(nomepath).d3Click();

				var nomepath = "specializations"+d.name;
				var element = document.getElementById(nomepath);
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}



                for(let i=0; i<lista.length; i++){
                    var listalhs = lista[i]._children;
                    for (let j = 0; j<listalhs.length;j++) {

                        var myArray = listalhs[j].name.split("LHS: ");
                        var word = myArray[1];
                        //risultati.row.add([""+word,""+d.name,"specializations: "+d.name,""+lista[i].name, ""+d.name]).draw(false);
						console.log(lista[i].name);
						//Rimuove i caratteri non necessari e divide la stringa in un array
						var arrayspec = lista[i].name.replace(/[\[\]']+/g, '').split(', ') // Divide la stringa in base alla virgola e allo spazio
						// Stampa l'array risultante
						console.log(arrayspec);
						//Rimuove i caratteri non necessari e divide la stringa in un array
						var arrayoriginal = word.replace(/[\[\]']+/g, '').split(', ') // Divide la stringa in base alla virgola e allo spazio
						// Stampa l'array risultante
						console.log(arrayoriginal);
						// Converti le stringhe in Set
						const set_specializzazione = stringToSet(lista[i].name);
						const set_originale = stringToSet(word);
						// Calcola la differenza tra i due Set
						const differenceSet = difference(set_specializzazione, set_originale);
						// Stampa i Set e la loro differenza
						console.log('Set 1:', set_specializzazione);
						console.log('Set 2:', set_originale);
						console.log('Differenza (Set 1 - Set 2):', differenceSet);
						var set_common = set_specializzazione;
						set_common = difference(set_common, differenceSet);
						console.log(set_common);
						colored_row= '[' + Array.from(set_common).map(element => `'${element}'`).join(', ');
						colored_row= colored_row + ', <span style="color: #2CD200;"><strong>' + Array.from(differenceSet).map(element => `'${element}'`).join(', ') + "</strong></span>]";
						console.log(colored_row);

						var newRow = risultati.row.add([
							""+word,
							""+d.name,
							"specializations: "+ d.name,
							""+colored_row,
							""+d.name,
							'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent, this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent, this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent, \'specialization\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>',
							'<center><button class="button-82-pushable" role="button" onclick="sendRFD_prompt(this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent, this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent, this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent, \'specialization\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Interact </span></button></center>'
						  ]).draw(false).node();

                    }
                }
            } else {
                //$("#specializations").d3Click();


				var element = document.getElementById("specializations");
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}


                risultati = $('#risultati').DataTable();
                var filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                    var confronto = "specializations: "+ d.name;
                    return risultati.row(value).data()[2] == confronto;
                } );
                risultati.rows( filteredData ).remove().draw();
                for (let i = 0; i<figli.length;i++) {
                    var figlidifiglio = figli[i]._children;
                    for(let j = 0; j<figlidifiglio.length; j++){
ù                        //risultati.row.add(["Not Available","Not Available","specializations",""+figlidifiglio[j].name, ""+figli[i].name]).draw(false);
						var newRow = risultati.row.add([
							"Not Available",
							"Not Available",
							"specializations",
							""+figlidifiglio[j].name,
							""+figli[i].name,
							'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent, \'none\', \'none\' , \'specialization\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>',
							'<center><button class="button-82-pushable" role="button" onclick="sendRFD_prompt(this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent, \'none\', \'none\' , \'specialization\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Interact </span></button></center>'
						  ]).draw(false).node();

                    }
                }
            }
        } else if (d.parent.name == "generalizations") {
             var  risultati = $('#risultati').DataTable();
            var filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                               return risultati.row(value).data()[2] == "generalizations";
                            } );
                        risultati.rows( filteredData )
                        .remove()
                        .draw();
            var lista = d._children;
            var parente = d.parent;
            var figli = parente.children;
            d = toggleChildren(d);
            update(d);
            centerNode(d);

            if(lista != null){
                //var nomepath = "#generalizations"+d.name;
                //$(nomepath).d3Click();
				var nomepath = "generalizations"+d.name;
				var element = document.getElementById(nomepath);
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}


                for(let i=0; i<lista.length; i++){
                    var listalhs = lista[i]._children;
                    for (let j = 0; j<listalhs.length;j++) {
	
                        var myArray = listalhs[j].name.split("LHS: ");
                        var word = myArray[1];
                        //risultati.row.add([""+word,""+d.name,"specializations: "+d.name,""+lista[i].name, ""+d.name]).draw(false);
						console.log(lista[i].name);
						//Rimuove i caratteri non necessari e divide la stringa in un array
						var arrayspec = lista[i].name.replace(/[\[\]']+/g, '').split(', ') // Divide la stringa in base alla virgola e allo spazio
						// Stampa l'array risultante
						console.log(arrayspec);
						//Rimuove i caratteri non necessari e divide la stringa in un array
						var arrayoriginal = word.replace(/[\[\]']+/g, '').split(', ') // Divide la stringa in base alla virgola e allo spazio
						// Stampa l'array risultante
						console.log(arrayoriginal);
						// Converti le stringhe in Set
						const set_generalizzazione = stringToSet(lista[i].name);
						const set_originale = stringToSet(word);
						// Calcola la differenza tra i due Set
						const differenceSet = difference(set_originale, set_generalizzazione);
						// Stampa i Set e la loro differenza
						console.log('Set 1:', set_originale);
						console.log('Set 2:', set_generalizzazione);
						console.log('Differenza (Set 1 - Set 2):', differenceSet);

						var set_common = set_originale;
						set_common = difference(set_common, differenceSet);
						console.log(set_common);

						colored_row= '[' + Array.from(set_common).map(element => `'${element}'`).join(', ');
						colored_row= colored_row + ', <span style="color: red;"><strong>' + Array.from(differenceSet).map(element => `'${element}'`).join(', ') + "</strong></span>]";
						console.log(colored_row);


						var newRow = risultati.row.add([
							""+colored_row,
							""+d.name,
							"generalizations: "+d.name,
							""+lista[i].name,
							""+d.name,
							'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent, this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent, this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent, \'generalization\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>',
							'<center><button class="button-82-pushable" role="button" onclick="sendRFD_prompt(this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent, this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent, this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent, \'generalization\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Interact </span></button></center>'

						]).draw(false).node();


                    }
                }
            } else {

                //$("#generalizations").d3Click();
				var element = document.getElementById("generalizations");
				if (element) {
					var event = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					element.dispatchEvent(event);
				} else {
					//console.error("Element with ID '" + elementId + "' not found.");
				}

                risultati = $('#risultati').DataTable();
                var filteredData = risultati.rows().indexes().filter( function ( value, index ) {
                    var confronto = "generalizations: "+ d.name;
                    return risultati.row(value).data()[2] == confronto;
                } );
                risultati.rows( filteredData ).remove().draw();
                for (let i = 0; i<figli.length;i++) {
                    var figlidifiglio = figli[i]._children;
                    for(let j = 0; j<figlidifiglio.length; j++){
                        //risultati.row.add(["Not Available","Not Available","generalizations",""+figlidifiglio[j].name, ""+figli[i].name]).draw(false);

						var newRow = risultati.row.add([
							"Not Available","Not Available","generalizations",""+figlidifiglio[j].name, ""+figli[i].name,"",""
							//'<center><button class="button-82-pushable" role="button" onclick="sendRFD(this.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,this.parentNode.parentNode.previousElementSibling.textContent, \'none\', \'none\', \'generalization\' );"> <span class="button-82-shadow"></span> <span class="button-82-edge"></span> <span class="button-82-front text"> Explain </span></button></center>'
						  ]).draw(false).node(); 
                    }
                }   
            }
        } 
    }





    function update(source) {
        // Compute the new height, function counts total children of root node and sets tree height accordingly.
        // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
        // This makes the layout more consistent.
        var levelWidth = [1];
        var childCount = function(level, n) {

            if (n.children && n.children.length > 0) {
                if (levelWidth.length <= level + 1) levelWidth.push(0);

                levelWidth[level + 1] += n.children.length;
                n.children.forEach(function(d) {
                    childCount(level + 1, d);
                });
            }
        };
        childCount(0, root);
        var newHeight = d3.max(levelWidth) * 25; // 25 pixels per line  
        tree = tree.size([newHeight, viewerWidth]);

        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse(),
            links = tree.links(nodes);

        // Set widths between levels based on maxLabelLength.
        //nodes.forEach(function(d) {
        //    var tmp = 3;
        //    if(d.depth == 3)
        //        tmp = 4
        //    d.y = (d.depth * (maxLabelLength * tmp)); //maxLabelLength * 10px
        //    // alternatively to keep a fixed scale one can set a fixed depth per level
        //    // Normalize for fixed-depth by commenting out below line
        //    // d.y = (d.depth * 500); //500px per level.
        //});

		
        // Set widths between levels based on maxLabelLength.
        nodes.forEach(function(d) {
            var tmp = 2;
            if(d.depth == 3)
                tmp = 2
            d.y = (d.depth * (maxLabelLength * tmp)); //maxLabelLength * 10px
            // alternatively to keep a fixed scale one can set a fixed depth per level
            // Normalize for fixed-depth by commenting out below line
            // d.y = (d.depth * 500); //500px per level.
        });

        // Update the nodes…
        node = svgGroup.selectAll("g.node")
            .data(nodes, function(d) {
                return d.id || (d.id = ++i);
            });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("g")
            //.call(dragListener)
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on('click', click)
            .attr("id",function(d) {
                if(d.name=="RFDs"||d.name=="specializations"||d.name=="generalizations"||d.name=="new RFDs"||d.name=="RFD not found"||d.name=="RFD found"){
                    var nom = "tree"+d.name;
                    var finale = nom.replaceAll(" ","_");
                    return finale;
                } else {
                    var nom = "tree"+d.parent.name+""+d.name;
                    var finale = nom.replaceAll(" ","_");
                    return finale;
                }
            });

        nodeEnter.append("circle")
            .attr('class', 'nodeCircle')
            .attr("r", 0)
            .style("fill", function(d) {
                return d._children ? "lightsteelblue" : "#fff";
            })
            

        nodeEnter.append("text")
            .attr("x", function(d) {
                return d.children || d._children ? -10 : 10;
            })
            .attr("dy", ".35em")
            .attr('class', 'nodeText')
            .attr("text-anchor", function(d) {
                if(d.depth == 3){
                    return "middle";
                }
                return d.children || d._children ? "end" : "start";
            })
            .text(function(d) {
                return d.name;
            })
            .style("fill-opacity", 0);

        // phantom node to give us mouseover in a radius around it
        nodeEnter.append("circle")
            .attr('class', 'ghostCircle')
            .attr("r", 30)
            .attr("opacity", 0.2) // change this to zero to hide the target area
            .style("fill", "red")
            .attr('pointer-events', 'mouseover')
            .on("mouseover", function(node) {
                overCircle(node);
            })
            .on("mouseout", function(node) {
                outCircle(node);
            });

        // Update the text to reflect whether node has children or not.
        node.select('text')
            .attr("x", function(d) {
                return d.children || d._children ? -10 : 10;
            })
            .attr("dx", function(d) {
                if(d.depth == 3){
                    return "1.35em";
                }
            })
            .attr("text-anchor", function(d) {
                if(d.depth == 3){
                    return "left";
                }
                return d.children || d._children ? "end" : "start";
            })
            .text(function(d) {
                return d.name;
            });

        // Change the circle fill depending on whether it has children and is collapsed
        node.select("circle.nodeCircle")
            .attr("r", 4.5)
            .style("fill", function(d) {
                return d._children ? "lightsteelblue" : "#fff";
            });

        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
            .duration(duration)
            .attr("transform", function(d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        // Fade the text in
        nodeUpdate.select("text")
            .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function(d) {
                return "translate(" + source.y3 + "," + source.x3 + ")";
            })
            .remove();

        nodeExit.select("circle")
            .attr("r", 0);

        nodeExit.select("text")
            .style("fill-opacity", 0);

        // Update the links…
        var link = svgGroup.selectAll("path.link")
            .data(links, function(d) {
                return d.target.id;
            });

        // Enter any new links at the parent's previous position.
        link.enter().insert("path", "g")
            .attr("class", "link")
            .attr("d", function(d) {
                var o = {
                    x: source.x0,
                    y: source.y0
                };
                return diagonal({
                    source: o,
                    target: o
                });
            });

        // Transition links to their new position.
        link.transition()
            .duration(duration)
            .attr("d", diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(duration)
            .attr("d", function(d) {
                var o = {
                    x: source.x3,
                    y: source.y3
                };
                return diagonal({
                    source: o,
                    target: o
                });
            })
            .remove();

        // Stash the old positions for transition.
        nodes.forEach(function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }

    // Append a group which holds all nodes and which the zoom Listener can act upon.
    var svgGroup = baseSvg.append("g");

    // Define the root
    root = treeData;
    root.x0 = viewerHeight / 2;
    root.y0 = 0;
	
	// Collapse all children of roots children before rendering.
	root.children.forEach(function(child){
		collapse(child);
	});

    // Layout the tree initially and center on the root node.
    update(root);
    centerNode(root);
});

}


