import {
	w as t,
	p as e,
	h as n,
	o as s,
	_ as i,
	g as a,
	a as o,
	b as r,
	i as l,
	f as c,
	c as u,
	r as d,
	B as h,
	F as p,
	l as f,
	d as m,
	e as g,
	y,
	v,
	j as w,
	q as b,
	k as x,
	m as S,
	t as k,
	n as C,
	s as _,
	u as E,
	x as N,
	z as L,
	C as T,
	A as I,
	D as A,
	E as P,
	G as M,
	H as B,
	I as D,
	J as O,
	K as R,
	L as j,
	M as $,
	N as F,
	O as H,
	P as z,
	Q as q,
	R as U,
	S as W,
	T as V,
	U as G,
	V as X,
	W as Y,
	X as Z,
	Y as J
}
	from '//songsterr.com/static/preact.14f0a75b.js';
var K = {
	f: t
},
	Q = s.f;
!function (t) {
	var s = e.Symbol || (e.Symbol = {
	});
	n(s, t) || Q(s, t, {
		value: K.f(t)
	})
}('asyncIterator');
/*! *****************************************************************************
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
***************************************************************************** */
var tt = function (t, e) {
	return (tt = Object.setPrototypeOf || {
		__proto__: [
		]
	}
		instanceof Array && function (t, e) {
			t.__proto__ = e
		}
		|| function (t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		})(t, e)
};
function et(t, e) {
	function n() {
		this.constructor = t
	}
	tt(t, e),
		t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
}
var nt,
	st,
	it,
	at = function () {
		return (at = Object.assign || function (t) {
			for (var e, n = 1, s = arguments.length; n < s; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
			return t
		}).apply(this, arguments)
	};
function ot(t) {
	var e = 'function' == typeof Symbol && Symbol.iterator,
		n = e && t[e],
		s = 0;
	if (n) return n.call(t);
	if (t && 'number' == typeof t.length) return {
		next: function () {
			return t && s >= t.length && (t = void 0),
			{
				value: t && t[s++],
				done: !t
			}
		}
	};
	throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
}
function rt(t, e) {
	var n = 'function' == typeof Symbol && t[Symbol.iterator];
	if (!n) return t;
	var s,
		i,
		a = n.call(t),
		o = [
		];
	try {
		for (; (void 0 === e || e-- > 0) && !(s = a.next()).done;) o.push(s.value)
	} catch (t) {
		i = {
			error: t
		}
	} finally {
		try {
			s && !s.done && (n = a.return) && n.call(a)
		} finally {
			if (i) throw i.error
		}
	}
	return o
}
function lt() {
	for (var t = [
	], e = 0; e < arguments.length; e++) t = t.concat(rt(arguments[e]));
	return t
}
function ct(t) {
	switch (Object.prototype.toString.call(t)) {
		case '[object Error]':
		case '[object Exception]':
		case '[object DOMException]':
			return !0;
		default:
			return vt(t, Error)
	}
}
function ut(t) {
	return '[object ErrorEvent]' === Object.prototype.toString.call(t)
}
function dt(t) {
	return '[object DOMError]' === Object.prototype.toString.call(t)
}
function ht(t) {
	return '[object String]' === Object.prototype.toString.call(t)
}
function pt(t) {
	return null === t || 'object' != typeof t && 'function' != typeof t
}
function ft(t) {
	return '[object Object]' === Object.prototype.toString.call(t)
}
function mt(t) {
	return 'undefined' != typeof Event && vt(t, Event)
}
function gt(t) {
	return 'undefined' != typeof Element && vt(t, Element)
}
function yt(t) {
	return Boolean(t && t.then && 'function' == typeof t.then)
}
function vt(t, e) {
	try {
		return t instanceof e
	} catch (t) {
		return !1
	}
}
function wt(t) {
	try {
		for (var e = t, n = [
		], s = 0, i = 0, a = ' > '.length, o = void 0; e && s++ < 5 && !('html' === (o = bt(e)) || s > 1 && i + n.length * a + o.length >= 80);) n.push(o),
			i += o.length,
			e = e.parentNode;
		return n.reverse().join(' > ')
	} catch (t) {
		return '<unknown>'
	}
}
function bt(t) {
	var e,
		n,
		s,
		i,
		a,
		o = t,
		r = [
		];
	if (!o || !o.tagName) return '';
	if (r.push(o.tagName.toLowerCase()), o.id && r.push('#' + o.id), (e = o.className) && ht(e)) for (n = e.split(/\s+/), a = 0; a < n.length; a++) r.push('.' + n[a]);
	var l = [
		'type',
		'name',
		'title',
		'alt'
	];
	for (a = 0; a < l.length; a++) s = l[a],
		(i = o.getAttribute(s)) && r.push('[' + s + '="' + i + '"]');
	return r.join('')
}
!function (t) {
	t.Ok = 'ok',
		t.Exited = 'exited',
		t.Crashed = 'crashed',
		t.Abnormal = 'abnormal'
}(nt || (nt = {
})),
	function (t) {
		t.Fatal = 'fatal',
			t.Error = 'error',
			t.Warning = 'warning',
			t.Log = 'log',
			t.Info = 'info',
			t.Debug = 'debug',
			t.Critical = 'critical'
	}(st || (st = {
	})),
	function (t) {
		t.fromString = function (e) {
			switch (e) {
				case 'debug':
					return t.Debug;
				case 'info':
					return t.Info;
				case 'warn':
				case 'warning':
					return t.Warning;
				case 'error':
					return t.Error;
				case 'fatal':
					return t.Fatal;
				case 'critical':
					return t.Critical;
				case 'log':
				default:
					return t.Log
			}
		}
	}(st || (st = {
	})),
	function (t) {
		t.Unknown = 'unknown',
			t.Skipped = 'skipped',
			t.Success = 'success',
			t.RateLimit = 'rate_limit',
			t.Invalid = 'invalid',
			t.Failed = 'failed'
	}(it || (it = {
	})),
	function (t) {
		t.fromHttpCode = function (e) {
			return e >= 200 && e < 300 ? t.Success : 429 === e ? t.RateLimit : e >= 400 && e < 500 ? t.Invalid : e >= 500 ? t.Failed : t.Unknown
		}
	}(it || (it = {
	}));
var xt = Object.setPrototypeOf || ({
	__proto__: [
	]
}
	instanceof Array ? function (t, e) {
		return t.__proto__ = e,
			t
	}
	: function (t, e) {
		for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
		return t
	}),
	St = function (t) {
		function e(e) {
			var n = this.constructor,
				s = t.call(this, e) || this;
			return s.message = e,
				s.name = n.prototype.constructor.name,
				xt(s, n.prototype),
				s
		}
		return et(e, t),
			e
	}(Error),
	kt = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
	Ct = function () {
		function t(t) {
			'string' == typeof t ? this._fromString(t) : this._fromComponents(t),
				this._validate()
		}
		return t.prototype.toString = function (t) {
			void 0 === t && (t = !1);
			var e = this,
				n = e.host,
				s = e.path,
				i = e.pass,
				a = e.port,
				o = e.projectId;
			return e.protocol + '://' + e.user + (t && i ? ':' + i : '') + '@' + n + (a ? ':' + a : '') + '/' + (s ? s + '/' : s) + o
		},
			t.prototype._fromString = function (t) {
				var e = kt.exec(t);
				if (!e) throw new St('Invalid Dsn');
				var n = rt(e.slice(1), 6),
					s = n[0],
					i = n[1],
					a = n[2],
					o = void 0 === a ? '' : a,
					r = n[3],
					l = n[4],
					c = void 0 === l ? '' : l,
					u = '',
					d = n[5],
					h = d.split('/');
				if (h.length > 1 && (u = h.slice(0, - 1).join('/'), d = h.pop()), d) {
					var p = d.match(/^\d+/);
					p && (d = p[0])
				}
				this._fromComponents({
					host: r,
					pass: o,
					path: u,
					projectId: d,
					port: c,
					protocol: s,
					user: i
				})
			},
			t.prototype._fromComponents = function (t) {
				this.protocol = t.protocol,
					this.user = t.user,
					this.pass = t.pass || '',
					this.host = t.host,
					this.port = t.port || '',
					this.path = t.path || '',
					this.projectId = t.projectId
			},
			t.prototype._validate = function () {
				var t = this;
				if (['protocol',
					'user',
					'host',
					'projectId'].forEach((function (e) {
						if (!t[e]) throw new St('Invalid Dsn: ' + e + ' missing')
					})), !this.projectId.match(/^\d+$/)) throw new St('Invalid Dsn: Invalid projectId ' + this.projectId);
				if ('http' !== this.protocol && 'https' !== this.protocol) throw new St('Invalid Dsn: Invalid protocol ' + this.protocol);
				if (this.port && isNaN(parseInt(this.port, 10))) throw new St('Invalid Dsn: Invalid port ' + this.port)
			},
			t
	}();
i({
	target: 'URL',
	proto: !0,
	enumerable: !0
}, {
	toJSON: function () {
		return URL.prototype.toString.call(this)
	}
});
var _t = function () {
	function t() {
		this._hasWeakSet = 'function' == typeof WeakSet,
			this._inner = this._hasWeakSet ? new WeakSet : [
			]
	}
	return t.prototype.memoize = function (t) {
		if (this._hasWeakSet) return !!this._inner.has(t) || (this._inner.add(t), !1);
		for (var e = 0; e < this._inner.length; e++) if (this._inner[e] === t) return !0;
		return this._inner.push(t),
			!1
	},
		t.prototype.unmemoize = function (t) {
			if (this._hasWeakSet) this._inner.delete(t);
			else for (var e = 0; e < this._inner.length; e++) if (this._inner[e] === t) {
				this._inner.splice(e, 1);
				break
			}
		},
		t
}();
function Et(t) {
	try {
		return t && 'function' == typeof t && t.name || '<anonymous>'
	} catch (t) {
		return '<anonymous>'
	}
}
function Nt(t, e) {
	return void 0 === e && (e = 0),
		'string' != typeof t || 0 === e || t.length <= e ? t : t.substr(0, e) + '...'
}
function Lt(t, e) {
	if (!Array.isArray(t)) return '';
	for (var n = [
	], s = 0; s < t.length; s++) {
		var i = t[s];
		try {
			n.push(String(i))
		} catch (t) {
			n.push('[value cannot be serialized]')
		}
	}
	return n.join(e)
}
function Tt(t, e) {
	return !!ht(t) && (n = e, '[object RegExp]' === Object.prototype.toString.call(n) ? e.test(t) : 'string' == typeof e && - 1 !== t.indexOf(e));
	var n
}
function It(t, e, n) {
	if (e in t) {
		var s = t[e],
			i = n(s);
		if ('function' == typeof i) try {
			i.prototype = i.prototype || {
			},
				Object.defineProperties(i, {
					__sentry_original__: {
						enumerable: !1,
						value: s
					}
				})
		} catch (t) {
		}
		t[e] = i
	}
}
function At(t) {
	if (ct(t)) {
		var e = t,
			n = {
				message: e.message,
				name: e.name,
				stack: e.stack
			};
		for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (n[s] = e[s]);
		return n
	}
	if (mt(t)) {
		var i = t,
			a = {
			};
		a.type = i.type;
		try {
			a.target = gt(i.target) ? wt(i.target) : Object.prototype.toString.call(i.target)
		} catch (t) {
			a.target = '<unknown>'
		}
		try {
			a.currentTarget = gt(i.currentTarget) ? wt(i.currentTarget) : Object.prototype.toString.call(i.currentTarget)
		} catch (t) {
			a.currentTarget = '<unknown>'
		}
		for (var s in 'undefined' != typeof CustomEvent && vt(t, CustomEvent) && (a.detail = i.detail), i) Object.prototype.hasOwnProperty.call(i, s) && (a[s] = i);
		return a
	}
	return t
}
function Pt(t, e, n) {
	void 0 === e && (e = 3),
		void 0 === n && (n = 102400);
	var s,
		i = Dt(t, e);
	return s = i,
		function (t) {
			return ~ - encodeURI(t).split(/%..|./).length
		}(JSON.stringify(s)) > n ? Pt(t, e - 1, n) : i
}
function Mt(t, e) {
	return 'domain' === e && t && 'object' == typeof t && t._events ? '[Domain]' : 'domainEmitter' === e ? '[DomainEmitter]' : 'undefined' != typeof global && t === global ? '[Global]' : 'undefined' != typeof window && t === window ? '[Window]' : 'undefined' != typeof document && t === document ? '[Document]' : ft(n = t) && 'nativeEvent' in n && 'preventDefault' in n && 'stopPropagation' in n ? '[SyntheticEvent]' : 'number' == typeof t && t != t ? '[NaN]' : void 0 === t ? '[undefined]' : 'function' == typeof t ? '[Function: ' + Et(t) + ']' : t;
	var n
}
function Bt(t, e, n, s) {
	if (void 0 === n && (n = 1 / 0), void 0 === s && (s = new _t), 0 === n) return function (t) {
		var e = Object.prototype.toString.call(t);
		if ('string' == typeof t) return t;
		if ('[object Object]' === e) return '[Object]';
		if ('[object Array]' === e) return '[Array]';
		var n = Mt(t);
		return pt(n) ? n : e
	}(e);
	if (null != e && 'function' == typeof e.toJSON) return e.toJSON();
	var i = Mt(e, t);
	if (pt(i)) return i;
	var a = At(e),
		o = Array.isArray(e) ? [
		] : {
			};
	if (s.memoize(e)) return '[Circular ~]';
	for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (o[r] = Bt(r, a[r], n - 1, s));
	return s.unmemoize(e),
		o
}
function Dt(t, e) {
	try {
		return JSON.parse(JSON.stringify(t, (function (t, n) {
			return Bt(t, n, e)
		})))
	} catch (t) {
		return '**non-serializable**'
	}
}
function Ot(t, e) {
	void 0 === e && (e = 40);
	var n = Object.keys(At(t));
	if (n.sort(), !n.length) return '[object has no keys]';
	if (n[0].length >= e) return Nt(n[0], e);
	for (var s = n.length; s > 0; s--) {
		var i = n.slice(0, s).join(', ');
		if (!(i.length > e)) return s === n.length ? i : Nt(i, e)
	}
	return ''
}
function Rt(t) {
	var e,
		n;
	if (ft(t)) {
		var s = t,
			i = {
			};
		try {
			for (var a = ot(Object.keys(s)), o = a.next(); !o.done; o = a.next()) {
				var r = o.value;
				void 0 !== s[r] && (i[r] = Rt(s[r]))
			}
		} catch (t) {
			e = {
				error: t
			}
		} finally {
			try {
				o && !o.done && (n = a.return) && n.call(a)
			} finally {
				if (e) throw e.error
			}
		}
		return i
	}
	return Array.isArray(t) ? t.map(Rt) : t
}
function jt() {
	return '[object process]' === Object.prototype.toString.call('undefined' != typeof process ? process : 0)
}
var $t = {
};
function Ft() {
	return jt() ? global : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : $t
}
function Ht() {
	var t = Ft(),
		e = t.crypto || t.msCrypto;
	if (void 0 !== e && e.getRandomValues) {
		var n = new Uint16Array(8);
		e.getRandomValues(n),
			n[3] = 4095 & n[3] | 16384,
			n[4] = 16383 & n[4] | 32768;
		var s = function (t) {
			for (var e = t.toString(16); e.length < 4;) e = '0' + e;
			return e
		};
		return s(n[0]) + s(n[1]) + s(n[2]) + s(n[3]) + s(n[4]) + s(n[5]) + s(n[6]) + s(n[7])
	}
	return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, (function (t) {
		var e = 16 * Math.random() | 0;
		return ('x' === t ? e : 3 & e | 8).toString(16)
	}))
}
function zt(t) {
	if (!t) return {
	};
	var e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
	if (!e) return {
	};
	var n = e[6] || '',
		s = e[8] || '';
	return {
		host: e[4],
		path: e[5],
		protocol: e[2],
		relative: e[5] + n + s
	}
}
function qt(t) {
	if (t.message) return t.message;
	if (t.exception && t.exception.values && t.exception.values[0]) {
		var e = t.exception.values[0];
		return e.type && e.value ? e.type + ': ' + e.value : e.type || e.value || t.event_id || '<unknown>'
	}
	return t.event_id || '<unknown>'
}
function Ut(t) {
	var e = Ft();
	if (!('console' in e)) return t();
	var n = e.console,
		s = {
		};
	[
		'debug',
		'info',
		'warn',
		'error',
		'log',
		'assert'
	].forEach((function (t) {
		t in e.console && n[t].__sentry_original__ && (s[t] = n[t], n[t] = n[t].__sentry_original__)
	}));
	var i = t();
	return Object.keys(s).forEach((function (t) {
		n[t] = s[t]
	})),
		i
}
function Wt(t, e, n) {
	t.exception = t.exception || {
	},
		t.exception.values = t.exception.values || [
		],
		t.exception.values[0] = t.exception.values[0] || {
		},
		t.exception.values[0].value = t.exception.values[0].value || e || '',
		t.exception.values[0].type = t.exception.values[0].type || n || 'Error'
}
function Vt(t, e) {
	void 0 === e && (e = {
	});
	try {
		t.exception.values[0].mechanism = t.exception.values[0].mechanism || {
		},
			Object.keys(e).forEach((function (n) {
				t.exception.values[0].mechanism[n] = e[n]
			}))
	} catch (t) {
	}
}
var Gt = Ft(),
	Xt = 'Sentry Logger ',
	Yt = function () {
		function t() {
			this._enabled = !1
		}
		return t.prototype.disable = function () {
			this._enabled = !1
		},
			t.prototype.enable = function () {
				this._enabled = !0
			},
			t.prototype.log = function () {
				for (var t = [
				], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				this._enabled && Ut((function () {
					Gt.console.log(Xt + '[Log]: ' + t.join(' '))
				}))
			},
			t.prototype.warn = function () {
				for (var t = [
				], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				this._enabled && Ut((function () {
					Gt.console.warn(Xt + '[Warn]: ' + t.join(' '))
				}))
			},
			t.prototype.error = function () {
				for (var t = [
				], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				this._enabled && Ut((function () {
					Gt.console.error(Xt + '[Error]: ' + t.join(' '))
				}))
			},
			t
	}();
Gt.__SENTRY__ = Gt.__SENTRY__ || {
};
var Zt = Gt.__SENTRY__.logger || (Gt.__SENTRY__.logger = new Yt);
function Jt() {
	if (!('fetch' in Ft())) return !1;
	try {
		return new Headers,
			new Request(''),
			new Response,
			!0
	} catch (t) {
		return !1
	}
}
function Kt(t) {
	return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
}
function Qt() {
	if (!Jt()) return !1;
	try {
		return new Request('_', {
			referrerPolicy: 'origin'
		}),
			!0
	} catch (t) {
		return !1
	}
}
var te,
	ee = Ft(),
	ne = {
	},
	se = {
	};
function ie(t) {
	t && 'string' == typeof t.type && 'function' == typeof t.callback && (ne[t.type] = ne[t.type] || [
	], ne[t.type].push(t.callback), function (t) {
		if (!se[t]) switch (se[t] = !0, t) {
			case 'console':
				'console' in ee && [
					'debug',
					'info',
					'warn',
					'error',
					'log',
					'assert'
				].forEach((function (t) {
					t in ee.console && It(ee.console, t, (function (e) {
						return function () {
							for (var n = [
							], s = 0; s < arguments.length; s++) n[s] = arguments[s];
							ae('console', {
								args: n,
								level: t
							}),
								e && Function.prototype.apply.call(e, ee.console, n)
						}
					}))
				}));
				break;
			case 'dom':
				'document' in ee && (ee.document.addEventListener('click', de('click', ae.bind(null, 'dom')), !1), ee.document.addEventListener('keypress', he(ae.bind(null, 'dom')), !1), [
					'EventTarget',
					'Node'
				].forEach((function (t) {
					var e = ee[t] && ee[t].prototype;
					e && e.hasOwnProperty && e.hasOwnProperty('addEventListener') && (It(e, 'addEventListener', (function (t) {
						return function (e, n, s) {
							return n && n.handleEvent ? ('click' === e && It(n, 'handleEvent', (function (t) {
								return function (e) {
									return de('click', ae.bind(null, 'dom'))(e),
										t.call(this, e)
								}
							})), 'keypress' === e && It(n, 'handleEvent', (function (t) {
								return function (e) {
									return he(ae.bind(null, 'dom'))(e),
										t.call(this, e)
								}
							}))) : ('click' === e && de('click', ae.bind(null, 'dom'), !0)(this), 'keypress' === e && he(ae.bind(null, 'dom'))(this)),
								t.call(this, e, n, s)
						}
					})), It(e, 'removeEventListener', (function (t) {
						return function (e, n, s) {
							try {
								t.call(this, e, n.__sentry_wrapped__, s)
							} catch (t) {
							}
							return t.call(this, e, n, s)
						}
					})))
				})));
				break;
			case 'xhr':
				!function () {
					if ('XMLHttpRequest' in ee) {
						var t = [
						],
							e = [
							],
							n = XMLHttpRequest.prototype;
						It(n, 'open', (function (n) {
							return function () {
								for (var s = [
								], i = 0; i < arguments.length; i++) s[i] = arguments[i];
								var a = this,
									o = s[1];
								a.__sentry_xhr__ = {
									method: ht(s[0]) ? s[0].toUpperCase() : s[0],
									url: s[1]
								},
									ht(o) && 'POST' === a.__sentry_xhr__.method && o.match(/sentry_key/) && (a.__sentry_own_request__ = !0);
								var r = function () {
									if (4 === a.readyState) {
										try {
											a.__sentry_xhr__ && (a.__sentry_xhr__.status_code = a.status)
										} catch (t) {
										}
										try {
											var n = t.indexOf(a);
											if (- 1 !== n) {
												t.splice(n);
												var i = e.splice(n)[0];
												a.__sentry_xhr__ && void 0 !== i[0] && (a.__sentry_xhr__.body = i[0])
											}
										} catch (t) {
										}
										ae('xhr', {
											args: s,
											endTimestamp: Date.now(),
											startTimestamp: Date.now(),
											xhr: a
										})
									}
								};
								return 'onreadystatechange' in a && 'function' == typeof a.onreadystatechange ? It(a, 'onreadystatechange', (function (t) {
									return function () {
										for (var e = [
										], n = 0; n < arguments.length; n++) e[n] = arguments[n];
										return r(),
											t.apply(a, e)
									}
								})) : a.addEventListener('readystatechange', r),
									n.apply(a, s)
							}
						})),
							It(n, 'send', (function (n) {
								return function () {
									for (var s = [
									], i = 0; i < arguments.length; i++) s[i] = arguments[i];
									return t.push(this),
										e.push(s),
										ae('xhr', {
											args: s,
											startTimestamp: Date.now(),
											xhr: this
										}),
										n.apply(this, s)
								}
							}))
					}
				}();
				break;
			case 'fetch':
				(function () {
					if (!Jt()) return !1;
					var t = Ft();
					if (Kt(t.fetch)) return !0;
					var e = !1,
						n = t.document;
					if (n && 'function' == typeof n.createElement) try {
						var s = n.createElement('iframe');
						s.hidden = !0,
							n.head.appendChild(s),
							s.contentWindow && s.contentWindow.fetch && (e = Kt(s.contentWindow.fetch)),
							n.head.removeChild(s)
					} catch (t) {
						Zt.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', t)
					}
					return e
				})() && It(ee, 'fetch', (function (t) {
					return function () {
						for (var e = [
						], n = 0; n < arguments.length; n++) e[n] = arguments[n];
						var s = {
							args: e,
							fetchData: {
								method: oe(e),
								url: re(e)
							},
							startTimestamp: Date.now()
						};
						return ae('fetch', at({
						}, s)),
							t.apply(ee, e).then((function (t) {
								return ae('fetch', at(at({
								}, s), {
									endTimestamp: Date.now(),
									response: t
								})),
									t
							}), (function (t) {
								throw ae('fetch', at(at({
								}, s), {
									endTimestamp: Date.now(),
									error: t
								})),
								t
							}))
					}
				}));
				break;
			case 'history':
				!function () {
					if (function () {
						var t = Ft(),
							e = t.chrome,
							n = e && e.app && e.app.runtime,
							s = 'history' in t && !!t.history.pushState && !!t.history.replaceState;
						return !n && s
					}()) {
						var t = ee.onpopstate;
						ee.onpopstate = function () {
							for (var e = [
							], n = 0; n < arguments.length; n++) e[n] = arguments[n];
							var s = ee.location.href,
								i = te;
							if (te = s, ae('history', {
								from: i,
								to: s
							}), t) return t.apply(this, e)
						},
							It(ee.history, 'pushState', e),
							It(ee.history, 'replaceState', e)
					}
					function e(t) {
						return function () {
							for (var e = [
							], n = 0; n < arguments.length; n++) e[n] = arguments[n];
							var s = e.length > 2 ? e[2] : void 0;
							if (s) {
								var i = te,
									a = String(s);
								te = a,
									ae('history', {
										from: i,
										to: a
									})
							}
							return t.apply(this, e)
						}
					}
				}();
				break;
			case 'error':
				fe = ee.onerror,
					ee.onerror = function (t, e, n, s, i) {
						return ae('error', {
							column: s,
							error: i,
							line: n,
							msg: t,
							url: e
						}),
							!!fe && fe.apply(this, arguments)
					};
				break;
			case 'unhandledrejection':
				me = ee.onunhandledrejection,
					ee.onunhandledrejection = function (t) {
						return ae('unhandledrejection', t),
							!me || me.apply(this, arguments)
					};
				break;
			default:
				Zt.warn('unknown instrumentation type:', t)
		}
	}(t.type))
}
function ae(t, e) {
	var n,
		s;
	if (t && ne[t]) try {
		for (var i = ot(ne[t] || [
		]), a = i.next(); !a.done; a = i.next()) {
			var o = a.value;
			try {
				o(e)
			} catch (e) {
				Zt.error('Error while triggering instrumentation handler.\nType: ' + t + '\nName: ' + Et(o) + '\nError: ' + e)
			}
		}
	} catch (t) {
		n = {
			error: t
		}
	} finally {
			try {
				a && !a.done && (s = i.return) && s.call(i)
			} finally {
				if (n) throw n.error
			}
		}
}
function oe(t) {
	return void 0 === t && (t = [
	]),
		'Request' in ee && vt(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : 'GET'
}
function re(t) {
	return void 0 === t && (t = [
	]),
		'string' == typeof t[0] ? t[0] : 'Request' in ee && vt(t[0], Request) ? t[0].url : String(t[0])
}
var le,
	ce,
	ue = 0;
function de(t, e, n) {
	return void 0 === n && (n = !1),
		function (s) {
			le = void 0,
				s && ce !== s && (ce = s, ue && clearTimeout(ue), n ? ue = setTimeout((function () {
					e({
						event: s,
						name: t
					})
				})) : e({
					event: s,
					name: t
				}))
		}
}
function he(t) {
	return function (e) {
		var n;
		try {
			n = e.target
		} catch (t) {
			return
		}
		var s = n && n.tagName;
		s && ('INPUT' === s || 'TEXTAREA' === s || n.isContentEditable) && (le || de('input', t)(e), clearTimeout(le), le = setTimeout((function () {
			le = void 0
		}), 1000))
	}
}
var pe,
	fe = null,
	me = null,
	ge = a.Promise,
	ye = t('species'),
	ve = function (t) {
		var e,
			n;
		this.promise = new t((function (t, s) {
			if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor');
			e = t,
				n = s
		})),
			this.resolve = r(e),
			this.reject = r(n)
	},
	we = function (t, e) {
		if (o(t), l(e) && e.constructor === t) return e;
		var n = function (t) {
			return new ve(t)
		}(t);
		return (0, n.resolve)(e),
			n.promise
	},
	be = !!ge && c((function () {
		ge.prototype.finally.call({
			then: function () {
			}
		}, (function () {
		}))
	}));
i({
	target: 'Promise',
	proto: !0,
	real: !0,
	forced: be
}, {
	finally: function (t) {
		var e = function (t, e) {
			var n,
				s = o(t).constructor;
			return void 0 === s || null == (n = o(s)[ye]) ? e : r(n)
		}(this, u('Promise')),
			n = 'function' == typeof t;
		return this.then(n ? function (n) {
			return we(e, t()).then((function () {
				return n
			}))
		}
			: t, n ? function (n) {
				return we(e, t()).then((function () {
					throw n
				}))
			}
			: t)
	}
}),
	'function' != typeof ge || ge.prototype.finally || d(ge.prototype, 'finally', u('Promise').prototype.finally),
	function (t) {
		t.PENDING = 'PENDING',
			t.RESOLVED = 'RESOLVED',
			t.REJECTED = 'REJECTED'
	}(pe || (pe = {
	}));
var xe = function () {
	function t(t) {
		var e = this;
		this._state = pe.PENDING,
			this._handlers = [
			],
			this._resolve = function (t) {
				e._setResult(pe.RESOLVED, t)
			},
			this._reject = function (t) {
				e._setResult(pe.REJECTED, t)
			},
			this._setResult = function (t, n) {
				e._state === pe.PENDING && (yt(n) ? n.then(e._resolve, e._reject) : (e._state = t, e._value = n, e._executeHandlers()))
			},
			this._attachHandler = function (t) {
				e._handlers = e._handlers.concat(t),
					e._executeHandlers()
			},
			this._executeHandlers = function () {
				if (e._state !== pe.PENDING) {
					var t = e._handlers.slice();
					e._handlers = [
					],
						t.forEach((function (t) {
							t.done || (e._state === pe.RESOLVED && t.onfulfilled && t.onfulfilled(e._value), e._state === pe.REJECTED && t.onrejected && t.onrejected(e._value), t.done = !0)
						}))
				}
			};
		try {
			t(this._resolve, this._reject)
		} catch (t) {
			this._reject(t)
		}
	}
	return t.resolve = function (e) {
		return new t((function (t) {
			t(e)
		}))
	},
		t.reject = function (e) {
			return new t((function (t, n) {
				n(e)
			}))
		},
		t.all = function (e) {
			return new t((function (n, s) {
				if (Array.isArray(e)) if (0 !== e.length) {
					var i = e.length,
						a = [
						];
					e.forEach((function (e, o) {
						t.resolve(e).then((function (t) {
							a[o] = t,
								0 == (i -= 1) && n(a)
						})).then(null, s)
					}))
				} else n([]);
				else s(new TypeError('Promise.all requires an array as input.'))
			}))
		},
		t.prototype.then = function (e, n) {
			var s = this;
			return new t((function (t, i) {
				s._attachHandler({
					done: !1,
					onfulfilled: function (n) {
						if (e) try {
							return void t(e(n))
						} catch (t) {
							return void i(t)
						} else t(n)
					},
					onrejected: function (e) {
						if (n) try {
							return void t(n(e))
						} catch (t) {
							return void i(t)
						} else i(e)
					}
				})
			}))
		},
		t.prototype.catch = function (t) {
			return this.then((function (t) {
				return t
			}), t)
		},
		t.prototype.finally = function (e) {
			var n = this;
			return new t((function (t, s) {
				var i,
					a;
				return n.then((function (t) {
					a = !1,
						i = t,
						e && e()
				}), (function (t) {
					a = !0,
						i = t,
						e && e()
				})).then((function () {
					a ? s(i) : t(i)
				}))
			}))
		},
		t.prototype.toString = function () {
			return '[object SyncPromise]'
		},
		t
}(),
	Se = function () {
		function t(t) {
			this._limit = t,
				this._buffer = [
				]
		}
		return t.prototype.isReady = function () {
			return void 0 === this._limit || this.length() < this._limit
		},
			t.prototype.add = function (t) {
				var e = this;
				return this.isReady() ? (- 1 === this._buffer.indexOf(t) && this._buffer.push(t), t.then((function () {
					return e.remove(t)
				})).then(null, (function () {
					return e.remove(t).then(null, (function () {
					}))
				})), t) : xe.reject(new St('Not adding Promise due to buffer limit reached.'))
			},
			t.prototype.remove = function (t) {
				return this._buffer.splice(this._buffer.indexOf(t), 1)[0]
			},
			t.prototype.length = function () {
				return this._buffer.length
			},
			t.prototype.drain = function (t) {
				var e = this;
				return new xe((function (n) {
					var s = setTimeout((function () {
						t && t > 0 && n(!1)
					}), t);
					xe.all(e._buffer).then((function () {
						clearTimeout(s),
							n(!0)
					})).then(null, (function () {
						n(!0)
					}))
				}))
			},
			t
	}(),
	ke = {
		nowSeconds: function () {
			return Date.now() / 1000
		}
	},
	Ce = jt() ? function () {
		try {
			return (t = module, t.require('perf_hooks')).performance
		} catch (t) {
			return
		}
		var t
	}() : function () {
		var t = Ft().performance;
		if (t && t.now) return {
			now: function () {
				return t.now()
			},
			timeOrigin: Date.now() - t.now()
		}
	}(),
	_e = void 0 === Ce ? ke : {
		nowSeconds: function () {
			return (Ce.timeOrigin + Ce.now()) / 1000
		}
	},
	Ee = ke.nowSeconds.bind(ke);
_e.nowSeconds.bind(_e),
	function () {
		var t = Ft().performance;
		t && (t.timeOrigin ? t.timeOrigin : t.timing && t.timing.navigationStart || Date.now())
	}();
var Ne = function () {
	function t() {
		this._notifyingListeners = !1,
			this._scopeListeners = [
			],
			this._eventProcessors = [
			],
			this._breadcrumbs = [
			],
			this._user = {
			},
			this._tags = {
			},
			this._extra = {
			},
			this._contexts = {
			}
	}
	return t.clone = function (e) {
		var n = new t;
		return e && (n._breadcrumbs = lt(e._breadcrumbs), n._tags = at({
		}, e._tags), n._extra = at({
		}, e._extra), n._contexts = at({
		}, e._contexts), n._user = e._user, n._level = e._level, n._span = e._span, n._session = e._session, n._transactionName = e._transactionName, n._fingerprint = e._fingerprint, n._eventProcessors = lt(e._eventProcessors)),
			n
	},
		t.prototype.addScopeListener = function (t) {
			this._scopeListeners.push(t)
		},
		t.prototype.addEventProcessor = function (t) {
			return this._eventProcessors.push(t),
				this
		},
		t.prototype.setUser = function (t) {
			return this._user = t || {
			},
				this._session && this._session.update({
					user: t
				}),
				this._notifyScopeListeners(),
				this
		},
		t.prototype.getUser = function () {
			return this._user
		},
		t.prototype.setTags = function (t) {
			return this._tags = at(at({
			}, this._tags), t),
				this._notifyScopeListeners(),
				this
		},
		t.prototype.setTag = function (t, e) {
			var n;
			return this._tags = at(at({
			}, this._tags), ((n = {
			})[t] = e, n)),
				this._notifyScopeListeners(),
				this
		},
		t.prototype.setExtras = function (t) {
			return this._extra = at(at({
			}, this._extra), t),
				this._notifyScopeListeners(),
				this
		},
		t.prototype.setExtra = function (t, e) {
			var n;
			return this._extra = at(at({
			}, this._extra), ((n = {
			})[t] = e, n)),
				this._notifyScopeListeners(),
				this
		},
		t.prototype.setFingerprint = function (t) {
			return this._fingerprint = t,
				this._notifyScopeListeners(),
				this
		},
		t.prototype.setLevel = function (t) {
			return this._level = t,
				this._notifyScopeListeners(),
				this
		},
		t.prototype.setTransactionName = function (t) {
			return this._transactionName = t,
				this._notifyScopeListeners(),
				this
		},
		t.prototype.setTransaction = function (t) {
			return this.setTransactionName(t)
		},
		t.prototype.setContext = function (t, e) {
			var n;
			return null === e ? delete this._contexts[t] : this._contexts = at(at({
			}, this._contexts), ((n = {
			})[t] = e, n)),
				this._notifyScopeListeners(),
				this
		},
		t.prototype.setSpan = function (t) {
			return this._span = t,
				this._notifyScopeListeners(),
				this
		},
		t.prototype.getSpan = function () {
			return this._span
		},
		t.prototype.getTransaction = function () {
			var t,
				e,
				n,
				s,
				i = this.getSpan();
			return (null === (t = i) || void 0 === t ? void 0 : t.transaction) ? null === (e = i) || void 0 === e ? void 0 : e.transaction : (null === (s = null === (n = i) || void 0 === n ? void 0 : n.spanRecorder) || void 0 === s ? void 0 : s.spans[0]) ? i.spanRecorder.spans[0] : void 0
		},
		t.prototype.setSession = function (t) {
			return t ? this._session = t : delete this._session,
				this._notifyScopeListeners(),
				this
		},
		t.prototype.getSession = function () {
			return this._session
		},
		t.prototype.update = function (e) {
			if (!e) return this;
			if ('function' == typeof e) {
				var n = e(this);
				return n instanceof t ? n : this
			}
			return e instanceof t ? (this._tags = at(at({
			}, this._tags), e._tags), this._extra = at(at({
			}, this._extra), e._extra), this._contexts = at(at({
			}, this._contexts), e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint)) : ft(e) && (e = e, this._tags = at(at({
			}, this._tags), e.tags), this._extra = at(at({
			}, this._extra), e.extra), this._contexts = at(at({
			}, this._contexts), e.contexts), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint)),
				this
		},
		t.prototype.clear = function () {
			return this._breadcrumbs = [
			],
				this._tags = {
				},
				this._extra = {
				},
				this._user = {
				},
				this._contexts = {
				},
				this._level = void 0,
				this._transactionName = void 0,
				this._fingerprint = void 0,
				this._span = void 0,
				this._session = void 0,
				this._notifyScopeListeners(),
				this
		},
		t.prototype.addBreadcrumb = function (t, e) {
			var n = at({
				timestamp: Ee()
			}, t);
			return this._breadcrumbs = void 0 !== e && e >= 0 ? lt(this._breadcrumbs, [
				n
			]).slice(- e) : lt(this._breadcrumbs, [
				n
			]),
				this._notifyScopeListeners(),
				this
		},
		t.prototype.clearBreadcrumbs = function () {
			return this._breadcrumbs = [
			],
				this._notifyScopeListeners(),
				this
		},
		t.prototype.applyToEvent = function (t, e) {
			var n;
			if (this._extra && Object.keys(this._extra).length && (t.extra = at(at({
			}, this._extra), t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = at(at({
			}, this._tags), t.tags)), this._user && Object.keys(this._user).length && (t.user = at(at({
			}, this._user), t.user)), this._contexts && Object.keys(this._contexts).length && (t.contexts = at(at({
			}, this._contexts), t.contexts)), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
				t.contexts = at({
					trace: this._span.getTraceContext()
				}, t.contexts);
				var s = null === (n = this._span.transaction) || void 0 === n ? void 0 : n.name;
				s && (t.tags = at({
					transaction: s
				}, t.tags))
			}
			return this._applyFingerprint(t),
				t.breadcrumbs = lt(t.breadcrumbs || [
				], this._breadcrumbs),
				t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0,
				this._notifyEventProcessors(lt(Le(), this._eventProcessors), t, e)
		},
		t.prototype._notifyEventProcessors = function (t, e, n, s) {
			var i = this;
			return void 0 === s && (s = 0),
				new xe((function (a, o) {
					var r = t[s];
					if (null === e || 'function' != typeof r) a(e);
					else {
						var l = r(at({
						}, e), n);
						yt(l) ? l.then((function (e) {
							return i._notifyEventProcessors(t, e, n, s + 1).then(a)
						})).then(null, o) : i._notifyEventProcessors(t, l, n, s + 1).then(a).then(null, o)
					}
				}))
		},
		t.prototype._notifyScopeListeners = function () {
			var t = this;
			this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((function (e) {
				e(t)
			})), this._notifyingListeners = !1)
		},
		t.prototype._applyFingerprint = function (t) {
			t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [
				t.fingerprint
			] : [
				],
				this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
				t.fingerprint && !t.fingerprint.length && delete t.fingerprint
		},
		t
}();
function Le() {
	var t = Ft();
	return t.__SENTRY__ = t.__SENTRY__ || {
	},
		t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [
		],
		t.__SENTRY__.globalEventProcessors
}
function Te(t) {
	Le().push(t)
}
var Ie = function () {
	function t(t) {
		this.errors = 0,
			this.sid = Ht(),
			this.timestamp = Date.now(),
			this.started = Date.now(),
			this.duration = 0,
			this.status = nt.Ok,
			t && this.update(t)
	}
	return t.prototype.update = function (t) {
		void 0 === t && (t = {
		}),
			t.user && (t.user.ip_address && (this.ipAddress = t.user.ip_address), t.did || (this.did = t.user.id || t.user.email || t.user.username)),
			this.timestamp = t.timestamp || Date.now(),
			t.sid && (this.sid = 32 === t.sid.length ? t.sid : Ht()),
			t.did && (this.did = '' + t.did),
			'number' == typeof t.started && (this.started = t.started),
			'number' == typeof t.duration ? this.duration = t.duration : this.duration = this.timestamp - this.started,
			t.release && (this.release = t.release),
			t.environment && (this.environment = t.environment),
			t.ipAddress && (this.ipAddress = t.ipAddress),
			t.userAgent && (this.userAgent = t.userAgent),
			'number' == typeof t.errors && (this.errors = t.errors),
			t.status && (this.status = t.status)
	},
		t.prototype.close = function (t) {
			t ? this.update({
				status: t
			}) : this.status === nt.Ok ? this.update({
				status: nt.Exited
			}) : this.update()
		},
		t.prototype.toJSON = function () {
			return Rt({
				sid: '' + this.sid,
				init: !0,
				started: new Date(this.started).toISOString(),
				timestamp: new Date(this.timestamp).toISOString(),
				status: this.status,
				errors: this.errors,
				did: 'number' == typeof this.did || 'string' == typeof this.did ? '' + this.did : void 0,
				duration: this.duration,
				attrs: Rt({
					release: this.release,
					environment: this.environment,
					ip_address: this.ipAddress,
					user_agent: this.userAgent
				})
			})
		},
		t
}(),
	Ae = function () {
		function t(t, e, n) {
			void 0 === e && (e = new Ne),
				void 0 === n && (n = 3),
				this._version = n,
				this._stack = [
					{
					}
				],
				this.getStackTop().scope = e,
				this.bindClient(t)
		}
		return t.prototype.isOlderThan = function (t) {
			return this._version < t
		},
			t.prototype.bindClient = function (t) {
				this.getStackTop().client = t,
					t && t.setupIntegrations && t.setupIntegrations()
			},
			t.prototype.pushScope = function () {
				var t = Ne.clone(this.getScope());
				return this.getStack().push({
					client: this.getClient(),
					scope: t
				}),
					t
			},
			t.prototype.popScope = function () {
				return !(this.getStack().length <= 1 || !this.getStack().pop())
			},
			t.prototype.withScope = function (t) {
				var e = this.pushScope();
				try {
					t(e)
				} finally {
					this.popScope()
				}
			},
			t.prototype.getClient = function () {
				return this.getStackTop().client
			},
			t.prototype.getScope = function () {
				return this.getStackTop().scope
			},
			t.prototype.getStack = function () {
				return this._stack
			},
			t.prototype.getStackTop = function () {
				return this._stack[this._stack.length - 1]
			},
			t.prototype.captureException = function (t, e) {
				var n = this._lastEventId = Ht(),
					s = e;
				if (!e) {
					var i = void 0;
					try {
						throw new Error('Sentry syntheticException')
					} catch (t) {
						i = t
					}
					s = {
						originalException: t,
						syntheticException: i
					}
				}
				return this._invokeClient('captureException', t, at(at({
				}, s), {
					event_id: n
				})),
					n
			},
			t.prototype.captureMessage = function (t, e, n) {
				var s = this._lastEventId = Ht(),
					i = n;
				if (!n) {
					var a = void 0;
					try {
						throw new Error(t)
					} catch (t) {
						a = t
					}
					i = {
						originalException: t,
						syntheticException: a
					}
				}
				return this._invokeClient('captureMessage', t, e, at(at({
				}, i), {
					event_id: s
				})),
					s
			},
			t.prototype.captureEvent = function (t, e) {
				var n = this._lastEventId = Ht();
				return this._invokeClient('captureEvent', t, at(at({
				}, e), {
					event_id: n
				})),
					n
			},
			t.prototype.lastEventId = function () {
				return this._lastEventId
			},
			t.prototype.addBreadcrumb = function (t, e) {
				var n = this.getStackTop(),
					s = n.scope,
					i = n.client;
				if (s && i) {
					var a = i.getOptions && i.getOptions() || {
					},
						o = a.beforeBreadcrumb,
						r = void 0 === o ? null : o,
						l = a.maxBreadcrumbs,
						c = void 0 === l ? 100 : l;
					if (!(c <= 0)) {
						var u = Ee(),
							d = at({
								timestamp: u
							}, t),
							h = r ? Ut((function () {
								return r(d, e)
							})) : d;
						null !== h && s.addBreadcrumb(h, Math.min(c, 100))
					}
				}
			},
			t.prototype.setUser = function (t) {
				var e = this.getScope();
				e && e.setUser(t)
			},
			t.prototype.setTags = function (t) {
				var e = this.getScope();
				e && e.setTags(t)
			},
			t.prototype.setExtras = function (t) {
				var e = this.getScope();
				e && e.setExtras(t)
			},
			t.prototype.setTag = function (t, e) {
				var n = this.getScope();
				n && n.setTag(t, e)
			},
			t.prototype.setExtra = function (t, e) {
				var n = this.getScope();
				n && n.setExtra(t, e)
			},
			t.prototype.setContext = function (t, e) {
				var n = this.getScope();
				n && n.setContext(t, e)
			},
			t.prototype.configureScope = function (t) {
				var e = this.getStackTop(),
					n = e.scope,
					s = e.client;
				n && s && t(n)
			},
			t.prototype.run = function (t) {
				var e = Me(this);
				try {
					t(this)
				} finally {
					Me(e)
				}
			},
			t.prototype.getIntegration = function (t) {
				var e = this.getClient();
				if (!e) return null;
				try {
					return e.getIntegration(t)
				} catch (e) {
					return Zt.warn('Cannot retrieve integration ' + t.id + ' from the current Hub'),
						null
				}
			},
			t.prototype.startSpan = function (t) {
				return this._callExtensionMethod('startSpan', t)
			},
			t.prototype.startTransaction = function (t, e) {
				return this._callExtensionMethod('startTransaction', t, e)
			},
			t.prototype.traceHeaders = function () {
				return this._callExtensionMethod('traceHeaders')
			},
			t.prototype.startSession = function (t) {
				this.endSession();
				var e = this.getStackTop(),
					n = e.scope,
					s = e.client,
					i = s && s.getOptions() || {
					},
					a = i.release,
					o = i.environment,
					r = new Ie(at(at({
						release: a,
						environment: o
					}, n && {
						user: n.getUser()
					}), t));
				return n && n.setSession(r),
					r
			},
			t.prototype.endSession = function () {
				var t = this.getStackTop(),
					e = t.scope,
					n = t.client;
				if (e) {
					var s = e.getSession && e.getSession();
					s && (s.close(), n && n.captureSession && n.captureSession(s), e.setSession())
				}
			},
			t.prototype._invokeClient = function (t) {
				for (var e, n = [
				], s = 1; s < arguments.length; s++) n[s - 1] = arguments[s];
				var i = this.getStackTop(),
					a = i.scope,
					o = i.client;
				o && o[t] && (e = o)[t].apply(e, lt(n, [
					a
				]))
			},
			t.prototype._callExtensionMethod = function (t) {
				for (var e = [
				], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
				var s = Pe(),
					i = s.__SENTRY__;
				if (i && i.extensions && 'function' == typeof i.extensions[t]) return i.extensions[t].apply(this, e);
				Zt.warn('Extension method ' + t + ' couldn\'t be found, doing nothing.')
			},
			t
	}();
function Pe() {
	var t = Ft();
	return t.__SENTRY__ = t.__SENTRY__ || {
		extensions: {
		},
		hub: void 0
	},
		t
}
function Me(t) {
	var e = Pe(),
		n = Oe(e);
	return Re(e, t),
		n
}
function Be() {
	var t = Pe();
	return De(t) && !Oe(t).isOlderThan(3) || Re(t, new Ae),
		jt() ? function (t) {
			try {
				var e = (s = Pe().__SENTRY__) && s.extensions && s.extensions.domain && s.extensions.domain.active;
				if (!e) return Oe(t);
				if (!De(e) || Oe(e).isOlderThan(3)) {
					var n = Oe(t).getStackTop();
					Re(e, new Ae(n.client, Ne.clone(n.scope)))
				}
				return Oe(e)
			} catch (e) {
				return Oe(t)
			}
			var s
		}(t) : Oe(t)
}
function De(t) {
	return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
}
function Oe(t) {
	return t && t.__SENTRY__ && t.__SENTRY__.hub || (t.__SENTRY__ = t.__SENTRY__ || {
	}, t.__SENTRY__.hub = new Ae),
		t.__SENTRY__.hub
}
function Re(t, e) {
	return !!t && (t.__SENTRY__ = t.__SENTRY__ || {
	}, t.__SENTRY__.hub = e, !0)
}
function je(t) {
	for (var e = [
	], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
	var s = Be();
	if (s && s[t]) return s[t].apply(s, lt(e));
	throw new Error('No hub defined or ' + t + ' was not found on the hub, please open a bug report.')
}
function $e(t, e) {
	var n;
	try {
		throw new Error('Sentry syntheticException')
	} catch (t) {
		n = t
	}
	return je('captureException', t, {
		captureContext: e,
		originalException: t,
		syntheticException: n
	})
}
function Fe(t) {
	je('withScope', t)
}
var He,
	ze = function () {
		function t(t) {
			this.dsn = t,
				this._dsnObject = new Ct(t)
		}
		return t.prototype.getDsn = function () {
			return this._dsnObject
		},
			t.prototype.getBaseApiEndpoint = function () {
				var t = this._dsnObject,
					e = t.protocol ? t.protocol + ':' : '',
					n = t.port ? ':' + t.port : '';
				return e + '//' + t.host + n + (t.path ? '/' + t.path : '') + '/api/'
			},
			t.prototype.getStoreEndpoint = function () {
				return this._getIngestEndpoint('store')
			},
			t.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
				return this.getStoreEndpoint() + '?' + this._encodedAuth()
			},
			t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
				return this._getEnvelopeEndpoint() + '?' + this._encodedAuth()
			},
			t.prototype.getStoreEndpointPath = function () {
				var t = this._dsnObject;
				return (t.path ? '/' + t.path : '') + '/api/' + t.projectId + '/store/'
			},
			t.prototype.getRequestHeaders = function (t, e) {
				var n = this._dsnObject,
					s = [
						'Sentry sentry_version=7'
					];
				return s.push('sentry_client=' + t + '/' + e),
					s.push('sentry_key=' + n.user),
					n.pass && s.push('sentry_secret=' + n.pass),
				{
					'Content-Type': 'application/json',
					'X-Sentry-Auth': s.join(', ')
				}
			},
			t.prototype.getReportDialogEndpoint = function (t) {
				void 0 === t && (t = {
				});
				var e = this._dsnObject,
					n = this.getBaseApiEndpoint() + 'embed/error-page/',
					s = [
					];
				for (var i in s.push('dsn=' + e.toString()), t) if ('dsn' !== i) if ('user' === i) {
					if (!t.user) continue;
					t.user.name && s.push('name=' + encodeURIComponent(t.user.name)),
						t.user.email && s.push('email=' + encodeURIComponent(t.user.email))
				} else s.push(encodeURIComponent(i) + '=' + encodeURIComponent(t[i]));
				return s.length ? n + '?' + s.join('&') : n
			},
			t.prototype._getEnvelopeEndpoint = function () {
				return this._getIngestEndpoint('envelope')
			},
			t.prototype._getIngestEndpoint = function (t) {
				return '' + this.getBaseApiEndpoint() + this._dsnObject.projectId + '/' + t + '/'
			},
			t.prototype._encodedAuth = function () {
				var t,
					e = {
						sentry_key: this._dsnObject.user,
						sentry_version: '7'
					};
				return t = e,
					Object.keys(t).map((function (e) {
						return encodeURIComponent(e) + '=' + encodeURIComponent(t[e])
					})).join('&')
			},
			t
	}(),
	qe = [
	],
	Ue = function () {
		function t(t, e) {
			this._integrations = {
			},
				this._processing = 0,
				this._backend = new t(e),
				this._options = e,
				e.dsn && (this._dsn = new Ct(e.dsn))
		}
		return t.prototype.captureException = function (t, e, n) {
			var s = this,
				i = e && e.event_id;
			return this._process(this._getBackend().eventFromException(t, e).then((function (t) {
				return s._captureEvent(t, e, n)
			})).then((function (t) {
				i = t
			}))),
				i
		},
			t.prototype.captureMessage = function (t, e, n, s) {
				var i = this,
					a = n && n.event_id,
					o = pt(t) ? this._getBackend().eventFromMessage('' + t, e, n) : this._getBackend().eventFromException(t, n);
				return this._process(o.then((function (t) {
					return i._captureEvent(t, n, s)
				})).then((function (t) {
					a = t
				}))),
					a
			},
			t.prototype.captureEvent = function (t, e, n) {
				var s = e && e.event_id;
				return this._process(this._captureEvent(t, e, n).then((function (t) {
					s = t
				}))),
					s
			},
			t.prototype.captureSession = function (t) {
				t.release ? this._sendSession(t) : Zt.warn('Discarded session because of missing release')
			},
			t.prototype.getDsn = function () {
				return this._dsn
			},
			t.prototype.getOptions = function () {
				return this._options
			},
			t.prototype.flush = function (t) {
				var e = this;
				return this._isClientProcessing(t).then((function (n) {
					return e._getBackend().getTransport().close(t).then((function (t) {
						return n && t
					}))
				}))
			},
			t.prototype.close = function (t) {
				var e = this;
				return this.flush(t).then((function (t) {
					return e.getOptions().enabled = !1,
						t
				}))
			},
			t.prototype.setupIntegrations = function () {
				var t,
					e;
				this._isEnabled() && (this._integrations = (t = this._options, e = {
				}, function (t) {
					var e = t.defaultIntegrations && lt(t.defaultIntegrations) || [
					],
						n = t.integrations,
						s = [
						];
					if (Array.isArray(n)) {
						var i = n.map((function (t) {
							return t.name
						})),
							a = [
							];
						e.forEach((function (t) {
							- 1 === i.indexOf(t.name) && - 1 === a.indexOf(t.name) && (s.push(t), a.push(t.name))
						})),
							n.forEach((function (t) {
								- 1 === a.indexOf(t.name) && (s.push(t), a.push(t.name))
							}))
					} else 'function' == typeof n ? (s = n(e), s = Array.isArray(s) ? s : [
						s
					]) : s = lt(e);
					var o = s.map((function (t) {
						return t.name
					})),
						r = 'Debug';
					return - 1 !== o.indexOf(r) && s.push.apply(s, lt(s.splice(o.indexOf(r), 1))),
						s
				}(t).forEach((function (t) {
					e[t.name] = t,
						function (t) {
							- 1 === qe.indexOf(t.name) && (t.setupOnce(Te, Be), qe.push(t.name), Zt.log('Integration installed: ' + t.name))
						}(t)
				})), e))
			},
			t.prototype.getIntegration = function (t) {
				try {
					return this._integrations[t.id] || null
				} catch (e) {
					return Zt.warn('Cannot retrieve integration ' + t.id + ' from the current Client'),
						null
				}
			},
			t.prototype._updateSessionFromEvent = function (t, e) {
				var n,
					s,
					i,
					a = !1,
					o = !1,
					r = e.exception && e.exception.values;
				if (r) {
					o = !0;
					try {
						for (var l = ot(r), c = l.next(); !c.done; c = l.next()) {
							var u = c.value.mechanism;
							if (u && !1 === u.handled) {
								a = !0;
								break
							}
						}
					} catch (t) {
						n = {
							error: t
						}
					} finally {
						try {
							c && !c.done && (s = l.return) && s.call(l)
						} finally {
							if (n) throw n.error
						}
					}
				}
				var d = e.user;
				if (!t.userAgent) {
					var h = e.request ? e.request.headers : {
					};
					for (var p in h) if ('user-agent' === p.toLowerCase()) {
						i = h[p];
						break
					}
				}
				t.update(at(at({
				}, a && {
					status: nt.Crashed
				}), {
					user: d,
					userAgent: i,
					errors: t.errors + Number(o || a)
				}))
			},
			t.prototype._sendSession = function (t) {
				this._getBackend().sendSession(t)
			},
			t.prototype._isClientProcessing = function (t) {
				var e = this;
				return new xe((function (n) {
					var s = 0,
						i = setInterval((function () {
							0 == e._processing ? (clearInterval(i), n(!0)) : (s += 1, t && s >= t && (clearInterval(i), n(!1)))
						}), 1)
				}))
			},
			t.prototype._getBackend = function () {
				return this._backend
			},
			t.prototype._isEnabled = function () {
				return !1 !== this.getOptions().enabled && void 0 !== this._dsn
			},
			t.prototype._prepareEvent = function (t, e, n) {
				var s = this,
					i = this.getOptions().normalizeDepth,
					a = void 0 === i ? 3 : i,
					o = at(at({
					}, t), {
						event_id: t.event_id || (n && n.event_id ? n.event_id : Ht()),
						timestamp: t.timestamp || Ee()
					});
				this._applyClientOptions(o),
					this._applyIntegrationsMetadata(o);
				var r = e;
				n && n.captureContext && (r = Ne.clone(r).update(n.captureContext));
				var l = xe.resolve(o);
				return r && (l = r.applyToEvent(o, n)),
					l.then((function (t) {
						return 'number' == typeof a && a > 0 ? s._normalizeEvent(t, a) : t
					}))
			},
			t.prototype._normalizeEvent = function (t, e) {
				if (!t) return null;
				var n = at(at(at(at(at({
				}, t), t.breadcrumbs && {
					breadcrumbs: t.breadcrumbs.map((function (t) {
						return at(at({
						}, t), t.data && {
							data: Dt(t.data, e)
						})
					}))
				}), t.user && {
					user: Dt(t.user, e)
				}), t.contexts && {
					contexts: Dt(t.contexts, e)
				}), t.extra && {
					extra: Dt(t.extra, e)
				});
				return t.contexts && t.contexts.trace && (n.contexts.trace = t.contexts.trace),
					n
			},
			t.prototype._applyClientOptions = function (t) {
				var e = this.getOptions(),
					n = e.environment,
					s = e.release,
					i = e.dist,
					a = e.maxValueLength,
					o = void 0 === a ? 250 : a;
				'environment' in t || (t.environment = 'environment' in e ? n : 'production'),
					void 0 === t.release && void 0 !== s && (t.release = s),
					void 0 === t.dist && void 0 !== i && (t.dist = i),
					t.message && (t.message = Nt(t.message, o));
				var r = t.exception && t.exception.values && t.exception.values[0];
				r && r.value && (r.value = Nt(r.value, o));
				var l = t.request;
				l && l.url && (l.url = Nt(l.url, o))
			},
			t.prototype._applyIntegrationsMetadata = function (t) {
				var e = t.sdk,
					n = Object.keys(this._integrations);
				e && n.length > 0 && (e.integrations = n)
			},
			t.prototype._sendEvent = function (t) {
				this._getBackend().sendEvent(t)
			},
			t.prototype._captureEvent = function (t, e, n) {
				return this._processEvent(t, e, n).then((function (t) {
					return t.event_id
				}), (function (t) {
					Zt.error(t)
				}))
			},
			t.prototype._processEvent = function (t, e, n) {
				var s = this,
					i = this.getOptions(),
					a = i.beforeSend,
					o = i.sampleRate;
				if (!this._isEnabled()) return xe.reject(new St('SDK not enabled, will not send event.'));
				var r = 'transaction' === t.type;
				return !r && 'number' == typeof o && Math.random() > o ? xe.reject(new St('This event has been sampled, will not send event.')) : this._prepareEvent(t, n, e).then((function (t) {
					if (null === t) throw new St('An event processor returned null, will not send event.');
					if (e && e.data && !0 === e.data.__sentry__ || r || !a) return t;
					var n = a(t, e);
					if (void 0 === n) throw new St('`beforeSend` method has to return `null` or a valid event.');
					return yt(n) ? n.then((function (t) {
						return t
					}), (function (t) {
						throw new St('beforeSend rejected with ' + t)
					})) : n
				})).then((function (t) {
					if (null === t) throw new St('`beforeSend` returned `null`, will not send event.');
					var e = n && n.getSession && n.getSession();
					return !r && e && s._updateSessionFromEvent(e, t),
						s._sendEvent(t),
						t
				})).then(null, (function (t) {
					if (t instanceof St) throw t;
					throw s.captureException(t, {
						data: {
							__sentry__: !0
						},
						originalException: t
					}),
					new St('Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ' + t)
				}))
			},
			t.prototype._process = function (t) {
				var e = this;
				this._processing += 1,
					t.then((function (t) {
						return e._processing -= 1,
							t
					}), (function (t) {
						return e._processing -= 1,
							t
					}))
			},
			t
	}(),
	We = function () {
		function t() {
		}
		return t.prototype.sendEvent = function (t) {
			return xe.resolve({
				reason: 'NoopTransport: Event has been skipped because no Dsn is configured.',
				status: it.Skipped
			})
		},
			t.prototype.close = function (t) {
				return xe.resolve(!0)
			},
			t
	}(),
	Ve = function () {
		function t(t) {
			this._options = t,
				this._options.dsn || Zt.warn('No DSN provided, backend will not do anything.'),
				this._transport = this._setupTransport()
		}
		return t.prototype.eventFromException = function (t, e) {
			throw new St('Backend has to implement `eventFromException` method')
		},
			t.prototype.eventFromMessage = function (t, e, n) {
				throw new St('Backend has to implement `eventFromMessage` method')
			},
			t.prototype.sendEvent = function (t) {
				this._transport.sendEvent(t).then(null, (function (t) {
					Zt.error('Error while sending event: ' + t)
				}))
			},
			t.prototype.sendSession = function (t) {
				this._transport.sendSession ? this._transport.sendSession(t).then(null, (function (t) {
					Zt.error('Error while sending session: ' + t)
				})) : Zt.warn('Dropping session because custom transport doesn\'t implement sendSession')
			},
			t.prototype.getTransport = function () {
				return this._transport
			},
			t.prototype._setupTransport = function () {
				return new We
			},
			t
	}();
function Ge(t, e) {
	return {
		body: JSON.stringify({
			sent_at: (new Date).toISOString()
		}) + '\n' + JSON.stringify({
			type: 'session'
		}) + '\n' + JSON.stringify(t),
		type: 'session',
		url: e.getEnvelopeEndpointWithUrlEncodedAuth()
	}
}
function Xe(t, e) {
	var n = 'transaction' === t.type,
		s = {
			body: JSON.stringify(t),
			type: t.type || 'event',
			url: n ? e.getEnvelopeEndpointWithUrlEncodedAuth() : e.getStoreEndpointWithUrlEncodedAuth()
		};
	if (n) {
		var i = JSON.stringify({
			event_id: t.event_id,
			sent_at: (new Date).toISOString()
		}) + '\n' + JSON.stringify({
			type: t.type
		}) + '\n' + s.body;
		s.body = i
	}
	return s
}
var Ye = function () {
	function t() {
		this.name = t.id
	}
	return t.prototype.setupOnce = function () {
		He = Function.prototype.toString,
			Function.prototype.toString = function () {
				for (var t = [
				], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				var n = this.__sentry_original__ || this;
				return He.apply(n, t)
			}
	},
		t.id = 'FunctionToString',
		t
}(),
	Ze = [
		/^Script error\.?$/,
		/^Javascript error: Script error\.? on line 0$/
	],
	Je = function () {
		function t(e) {
			void 0 === e && (e = {
			}),
				this._options = e,
				this.name = t.id
		}
		return t.prototype.setupOnce = function () {
			Te((function (e) {
				var n = Be();
				if (!n) return e;
				var s = n.getIntegration(t);
				if (s) {
					var i = n.getClient(),
						a = i ? i.getOptions() : {
						},
						o = s._mergeOptions(a);
					if (s._shouldDropEvent(e, o)) return null
				}
				return e
			}))
		},
			t.prototype._shouldDropEvent = function (t, e) {
				return this._isSentryError(t, e) ? (Zt.warn('Event dropped due to being internal Sentry Error.\nEvent: ' + qt(t)), !0) : this._isIgnoredError(t, e) ? (Zt.warn('Event dropped due to being matched by `ignoreErrors` option.\nEvent: ' + qt(t)), !0) : this._isDeniedUrl(t, e) ? (Zt.warn('Event dropped due to being matched by `denyUrls` option.\nEvent: ' + qt(t) + '.\nUrl: ' + this._getEventFilterUrl(t)), !0) : !this._isAllowedUrl(t, e) && (Zt.warn('Event dropped due to not being matched by `allowUrls` option.\nEvent: ' + qt(t) + '.\nUrl: ' + this._getEventFilterUrl(t)), !0)
			},
			t.prototype._isSentryError = function (t, e) {
				if (!e.ignoreInternal) return !1;
				try {
					return t && t.exception && t.exception.values && t.exception.values[0] && 'SentryError' === t.exception.values[0].type || !1
				} catch (t) {
					return !1
				}
			},
			t.prototype._isIgnoredError = function (t, e) {
				return !(!e.ignoreErrors || !e.ignoreErrors.length) && this._getPossibleEventMessages(t).some((function (t) {
					return e.ignoreErrors.some((function (e) {
						return Tt(t, e)
					}))
				}))
			},
			t.prototype._isDeniedUrl = function (t, e) {
				if (!e.denyUrls || !e.denyUrls.length) return !1;
				var n = this._getEventFilterUrl(t);
				return !!n && e.denyUrls.some((function (t) {
					return Tt(n, t)
				}))
			},
			t.prototype._isAllowedUrl = function (t, e) {
				if (!e.allowUrls || !e.allowUrls.length) return !0;
				var n = this._getEventFilterUrl(t);
				return !n || e.allowUrls.some((function (t) {
					return Tt(n, t)
				}))
			},
			t.prototype._mergeOptions = function (t) {
				return void 0 === t && (t = {
				}),
				{
					allowUrls: lt(this._options.whitelistUrls || [
					], this._options.allowUrls || [
					], t.whitelistUrls || [
					], t.allowUrls || [
					]),
					denyUrls: lt(this._options.blacklistUrls || [
					], this._options.denyUrls || [
					], t.blacklistUrls || [
					], t.denyUrls || [
					]),
					ignoreErrors: lt(this._options.ignoreErrors || [
					], t.ignoreErrors || [
					], Ze),
					ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal
				}
			},
			t.prototype._getPossibleEventMessages = function (t) {
				if (t.message) return [t.message];
				if (t.exception) try {
					var e = t.exception.values && t.exception.values[0] || {
					},
						n = e.type,
						s = void 0 === n ? '' : n,
						i = e.value,
						a = void 0 === i ? '' : i;
					return ['' + a,
					s + ': ' + a]
				} catch (e) {
					return Zt.error('Cannot extract message for event ' + qt(t)),
						[
						]
				}
				return []
			},
			t.prototype._getEventFilterUrl = function (t) {
				try {
					if (t.stacktrace) {
						var e = t.stacktrace.frames;
						return e && e[e.length - 1].filename || null
					}
					if (t.exception) {
						var n = t.exception.values && t.exception.values[0].stacktrace && t.exception.values[0].stacktrace.frames;
						return n && n[n.length - 1].filename || null
					}
					return null
				} catch (e) {
					return Zt.error('Cannot extract url for event ' + qt(t)),
						null
				}
			},
			t.id = 'InboundFilters',
			t
	}(),
	Ke = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
	Qe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
	tn = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
	en = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
	nn = /\((\S*)(?::(\d+))(?::(\d+))\)/,
	sn = /Minified React error #\d+;/i;
function an(t) {
	var e = null,
		n = 0;
	t && ('number' == typeof t.framesToPop ? n = t.framesToPop : sn.test(t.message) && (n = 1));
	try {
		if (e = function (t) {
			if (!t || !t.stacktrace) return null;
			for (var e, n = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, s = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, i = t.stacktrace.split('\n'), a = [
			], o = 0; o < i.length; o += 2) {
				var r = null;
				(e = n.exec(i[o])) ? r = {
					url: e[2],
					func: e[3],
					args: [
					],
					line: + e[1],
					column: null
				}
					: (e = s.exec(i[o])) && (r = {
						url: e[6],
						func: e[3] || e[4],
						args: e[5] ? e[5].split(',') : [
						],
						line: + e[1],
						column: + e[2]
					}),
					r && (!r.func && r.line && (r.func = '?'), a.push(r))
			}
			return a.length ? {
				message: rn(t),
				name: t.name,
				stack: a
			}
				: null
		}(t)) return on(e, n)
	} catch (t) {
	}
	try {
		if (e = function (t) {
			if (!t || !t.stack) return null;
			for (var e, n, s, i = [
			], a = t.stack.split('\n'), o = 0; o < a.length; ++o) {
				if (n = Ke.exec(a[o])) {
					var r = n[2] && 0 === n[2].indexOf('native');
					n[2] && 0 === n[2].indexOf('eval') && (e = nn.exec(n[2])) && (n[2] = e[1], n[3] = e[2], n[4] = e[3]),
						s = {
							url: n[2] && 0 === n[2].indexOf('address at ') ? n[2].substr('address at '.length) : n[2],
							func: n[1] || '?',
							args: r ? [
								n[2]
							] : [
								],
							line: n[3] ? + n[3] : null,
							column: n[4] ? + n[4] : null
						}
				} else if (n = tn.exec(a[o])) s = {
					url: n[2],
					func: n[1] || '?',
					args: [
					],
					line: + n[3],
					column: n[4] ? + n[4] : null
				};
				else {
					if (!(n = Qe.exec(a[o]))) continue;
					n[3] && n[3].indexOf(' > eval') > - 1 && (e = en.exec(n[3])) ? (n[1] = n[1] || 'eval', n[3] = e[1], n[4] = e[2], n[5] = '') : 0 !== o || n[5] || void 0 === t.columnNumber || (i[0].column = t.columnNumber + 1),
						s = {
							url: n[3],
							func: n[1] || '?',
							args: n[2] ? n[2].split(',') : [
							],
							line: n[4] ? + n[4] : null,
							column: n[5] ? + n[5] : null
						}
				}
				!s.func && s.line && (s.func = '?'),
					i.push(s)
			}
			return i.length ? {
				message: rn(t),
				name: t.name,
				stack: i
			}
				: null
		}(t)) return on(e, n)
	} catch (t) {
	}
	return {
		message: rn(t),
		name: t && t.name,
		stack: [
		],
		failed: !0
	}
}
function on(t, e) {
	try {
		return at(at({
		}, t), {
			stack: t.stack.slice(e)
		})
	} catch (e) {
		return t
	}
}
function rn(t) {
	var e = t && t.message;
	return e ? e.error && 'string' == typeof e.error.message ? e.error.message : e : 'No error message'
}
function ln(t) {
	var e = un(t.stack),
		n = {
			type: t.name,
			value: t.message
		};
	return e && e.length && (n.stacktrace = {
		frames: e
	}),
		void 0 === n.type && '' === n.value && (n.value = 'Unrecoverable error caught'),
		n
}
function cn(t) {
	return {
		exception: {
			values: [
				ln(t)
			]
		}
	}
}
function un(t) {
	if (!t || !t.length) return [];
	var e = t,
		n = e[0].func || '',
		s = e[e.length - 1].func || '';
	return - 1 === n.indexOf('captureMessage') && - 1 === n.indexOf('captureException') || (e = e.slice(1)),
		- 1 !== s.indexOf('sentryWrapped') && (e = e.slice(0, - 1)),
		e.slice(0, 50).map((function (t) {
			return {
				colno: null === t.column ? void 0 : t.column,
				filename: t.url || e[0].url,
				function: t.func || '?',
				in_app: !0,
				lineno: null === t.line ? void 0 : t.line
			}
		})).reverse()
}
function dn(t, e, n) {
	var s,
		i;
	if (void 0 === n && (n = {
	}), ut(t) && t.error) return cn(an(t = t.error));
	if (dt(t) || (i = t, '[object DOMException]' === Object.prototype.toString.call(i))) {
		var a = t,
			o = a.name || (dt(a) ? 'DOMError' : 'DOMException'),
			r = a.message ? o + ': ' + a.message : o;
		return Wt(s = hn(r, e, n), r),
			'code' in a && (s.tags = at(at({
			}, s.tags), {
				'DOMException.code': '' + a.code
			})),
			s
	}
	return ct(t) ? s = cn(an(t)) : ft(t) || mt(t) ? (Vt(s = function (t, e, n) {
		var s = {
			exception: {
				values: [
					{
						type: mt(t) ? t.constructor.name : n ? 'UnhandledRejection' : 'Error',
						value: 'Non-Error ' + (n ? 'promise rejection' : 'exception') + ' captured with keys: ' + Ot(t)
					}
				]
			},
			extra: {
				__serialized__: Pt(t)
			}
		};
		if (e) {
			var i = un(an(e).stack);
			s.stacktrace = {
				frames: i
			}
		}
		return s
	}(t, e, n.rejection), {
		synthetic: !0
	}), s) : (Wt(s = hn(t, e, n), '' + t, void 0), Vt(s, {
		synthetic: !0
	}), s)
}
function hn(t, e, n) {
	void 0 === n && (n = {
	});
	var s = {
		message: t
	};
	if (n.attachStacktrace && e) {
		var i = un(an(e).stack);
		s.stacktrace = {
			frames: i
		}
	}
	return s
}
var pn = function () {
	function t(t) {
		this.options = t,
			this._buffer = new Se(30),
			this._rateLimits = {
			},
			this._api = new ze(this.options.dsn),
			this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
	}
	return t.prototype.sendEvent = function (t) {
		throw new St('Transport Class has to implement `sendEvent` method')
	},
		t.prototype.close = function (t) {
			return this._buffer.drain(t)
		},
		t.prototype._handleResponse = function (t) {
			var e = t.requestType,
				n = t.response,
				s = t.headers,
				i = t.resolve,
				a = t.reject,
				o = it.fromHttpCode(n.status);
			this._handleRateLimit(s) && Zt.warn('Too many requests, backing off till: ' + this._disabledUntil(e)),
				o !== it.Success ? a(n) : i({
					status: o
				})
		},
		t.prototype._disabledUntil = function (t) {
			return this._rateLimits[t] || this._rateLimits.all
		},
		t.prototype._isRateLimited = function (t) {
			return this._disabledUntil(t) > new Date(Date.now())
		},
		t.prototype._handleRateLimit = function (t) {
			var e,
				n,
				s,
				i,
				a = Date.now(),
				o = t['x-sentry-rate-limits'],
				r = t['retry-after'];
			if (o) {
				try {
					for (var l = ot(o.trim().split(',')), c = l.next(); !c.done; c = l.next()) {
						var u = c.value.split(':', 2),
							d = parseInt(u[0], 10),
							h = 1000 * (isNaN(d) ? 60 : d);
						try {
							for (var p = (s = void 0, ot(u[1].split(';'))), f = p.next(); !f.done; f = p.next()) {
								var m = f.value;
								this._rateLimits[m || 'all'] = new Date(a + h)
							}
						} catch (t) {
							s = {
								error: t
							}
						} finally {
							try {
								f && !f.done && (i = p.return) && i.call(p)
							} finally {
								if (s) throw s.error
							}
						}
					}
				} catch (t) {
					e = {
						error: t
					}
				} finally {
					try {
						c && !c.done && (n = l.return) && n.call(l)
					} finally {
						if (e) throw e.error
					}
				}
				return !0
			}
			return !!r && (this._rateLimits.all = new Date(a + function (t, e) {
				if (!e) return 60000;
				var n = parseInt('' + e, 10);
				if (!isNaN(n)) return 1000 * n;
				var s = Date.parse('' + e);
				return isNaN(s) ? 60000 : s - t
			}(a, r)), !0)
		},
		t
}(),
	fn = Ft(),
	mn = function (t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return et(e, t),
			e.prototype.sendEvent = function (t) {
				return this._sendRequest(Xe(t, this._api), t)
			},
			e.prototype.sendSession = function (t) {
				return this._sendRequest(Ge(t, this._api), t)
			},
			e.prototype._sendRequest = function (t, e) {
				var n = this;
				if (this._isRateLimited(t.type)) return Promise.reject({
					event: e,
					type: t.type,
					reason: 'Transport locked till ' + this._disabledUntil(t.type) + ' due to too many requests.',
					status: 429
				});
				var s = {
					body: t.body,
					method: 'POST',
					referrerPolicy: Qt() ? 'origin' : ''
				};
				return void 0 !== this.options.fetchParameters && Object.assign(s, this.options.fetchParameters),
					void 0 !== this.options.headers && (s.headers = this.options.headers),
					this._buffer.add(new xe((function (e, i) {
						fn.fetch(t.url, s).then((function (s) {
							var a = {
								'x-sentry-rate-limits': s.headers.get('X-Sentry-Rate-Limits'),
								'retry-after': s.headers.get('Retry-After')
							};
							n._handleResponse({
								requestType: t.type,
								response: s,
								headers: a,
								resolve: e,
								reject: i
							})
						})).catch(i)
					})))
			},
			e
	}(pn),
	gn = function (t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return et(e, t),
			e.prototype.sendEvent = function (t) {
				return this._sendRequest(Xe(t, this._api), t)
			},
			e.prototype.sendSession = function (t) {
				return this._sendRequest(Ge(t, this._api), t)
			},
			e.prototype._sendRequest = function (t, e) {
				var n = this;
				return this._isRateLimited(t.type) ? Promise.reject({
					event: e,
					type: t.type,
					reason: 'Transport locked till ' + this._disabledUntil(t.type) + ' due to too many requests.',
					status: 429
				}) : this._buffer.add(new xe((function (e, s) {
					var i = new XMLHttpRequest;
					for (var a in i.onreadystatechange = function () {
						if (4 === i.readyState) {
							var a = {
								'x-sentry-rate-limits': i.getResponseHeader('X-Sentry-Rate-Limits'),
								'retry-after': i.getResponseHeader('Retry-After')
							};
							n._handleResponse({
								requestType: t.type,
								response: i,
								headers: a,
								resolve: e,
								reject: s
							})
						}
					}, i.open('POST', t.url), n.options.headers) n.options.headers.hasOwnProperty(a) && i.setRequestHeader(a, n.options.headers[a]);
					i.send(t.body)
				})))
			},
			e
	}(pn),
	yn = function (t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return et(e, t),
			e.prototype.eventFromException = function (t, e) {
				return function (t, e, n) {
					var s = dn(e, n && n.syntheticException || void 0, {
						attachStacktrace: t.attachStacktrace
					});
					return Vt(s, {
						handled: !0,
						type: 'generic'
					}),
						s.level = st.Error,
						n && n.event_id && (s.event_id = n.event_id),
						xe.resolve(s)
				}(this._options, t, e)
			},
			e.prototype.eventFromMessage = function (t, e, n) {
				return void 0 === e && (e = st.Info),
					function (t, e, n, s) {
						void 0 === n && (n = st.Info);
						var i = hn(e, s && s.syntheticException || void 0, {
							attachStacktrace: t.attachStacktrace
						});
						return i.level = n,
							s && s.event_id && (i.event_id = s.event_id),
							xe.resolve(i)
					}(this._options, t, e, n)
			},
			e.prototype._setupTransport = function () {
				if (!this._options.dsn) return t.prototype._setupTransport.call(this);
				var e = at(at({
				}, this._options.transportOptions), {
					dsn: this._options.dsn
				});
				return this._options.transport ? new this._options.transport(e) : Jt() ? new mn(e) : new gn(e)
			},
			e
	}(Ve),
	vn = 0;
function wn() {
	return vn > 0
}
function bn() {
	vn += 1,
		setTimeout((function () {
			vn -= 1
		}))
}
function xn(t, e, n) {
	if (void 0 === e && (e = {
	}), 'function' != typeof t) return t;
	try {
		if (t.__sentry__) return t;
		if (t.__sentry_wrapped__) return t.__sentry_wrapped__
	} catch (e) {
		return t
	}
	var s = function () {
		var s = Array.prototype.slice.call(arguments);
		try {
			n && 'function' == typeof n && n.apply(this, arguments);
			var i = s.map((function (t) {
				return xn(t, e)
			}));
			return t.handleEvent ? t.handleEvent.apply(this, i) : t.apply(this, i)
		} catch (t) {
			throw bn(),
			Fe((function (n) {
				n.addEventProcessor((function (t) {
					var n = at({
					}, t);
					return e.mechanism && (Wt(n, void 0, void 0), Vt(n, e.mechanism)),
						n.extra = at(at({
						}, n.extra), {
							arguments: s
						}),
						n
				})),
					$e(t)
			})),
			t
		}
	};
	try {
		for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (s[i] = t[i])
	} catch (t) {
	}
	t.prototype = t.prototype || {
	},
		s.prototype = t.prototype,
		Object.defineProperty(t, '__sentry_wrapped__', {
			enumerable: !1,
			value: s
		}),
		Object.defineProperties(s, {
			__sentry__: {
				enumerable: !1,
				value: !0
			},
			__sentry_original__: {
				enumerable: !1,
				value: t
			}
		});
	try {
		Object.getOwnPropertyDescriptor(s, 'name').configurable && Object.defineProperty(s, 'name', {
			get: function () {
				return t.name
			}
		})
	} catch (t) {
	}
	return s
}
var Sn = function () {
	function t(e) {
		this.name = t.id,
			this._onErrorHandlerInstalled = !1,
			this._onUnhandledRejectionHandlerInstalled = !1,
			this._options = at({
				onerror: !0,
				onunhandledrejection: !0
			}, e)
	}
	return t.prototype.setupOnce = function () {
		Error.stackTraceLimit = 50,
			this._options.onerror && (Zt.log('Global Handler attached: onerror'), this._installGlobalOnErrorHandler()),
			this._options.onunhandledrejection && (Zt.log('Global Handler attached: onunhandledrejection'), this._installGlobalOnUnhandledRejectionHandler())
	},
		t.prototype._installGlobalOnErrorHandler = function () {
			var e = this;
			this._onErrorHandlerInstalled || (ie({
				callback: function (n) {
					var s = n.error,
						i = Be(),
						a = i.getIntegration(t),
						o = s && !0 === s.__sentry_own_request__;
					if (a && !wn() && !o) {
						var r = i.getClient(),
							l = pt(s) ? e._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : e._enhanceEventWithInitialFrame(dn(s, void 0, {
								attachStacktrace: r && r.getOptions().attachStacktrace,
								rejection: !1
							}), n.url, n.line, n.column);
						Vt(l, {
							handled: !1,
							type: 'onerror'
						}),
							i.captureEvent(l, {
								originalException: s
							})
					}
				},
				type: 'error'
			}), this._onErrorHandlerInstalled = !0)
		},
		t.prototype._installGlobalOnUnhandledRejectionHandler = function () {
			var e = this;
			this._onUnhandledRejectionHandlerInstalled || (ie({
				callback: function (n) {
					var s = n;
					try {
						'reason' in n ? s = n.reason : 'detail' in n && 'reason' in n.detail && (s = n.detail.reason)
					} catch (t) {
					}
					var i = Be(),
						a = i.getIntegration(t),
						o = s && !0 === s.__sentry_own_request__;
					if (!a || wn() || o) return !0;
					var r = i.getClient(),
						l = pt(s) ? e._eventFromIncompleteRejection(s) : dn(s, void 0, {
							attachStacktrace: r && r.getOptions().attachStacktrace,
							rejection: !0
						});
					l.level = st.Error,
						Vt(l, {
							handled: !1,
							type: 'onunhandledrejection'
						}),
						i.captureEvent(l, {
							originalException: s
						})
				},
				type: 'unhandledrejection'
			}), this._onUnhandledRejectionHandlerInstalled = !0)
		},
		t.prototype._eventFromIncompleteOnError = function (t, e, n, s) {
			var i,
				a = ut(t) ? t.message : t;
			if (ht(a)) {
				var o = a.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
				o && (i = o[1], a = o[2])
			}
			var r = {
				exception: {
					values: [
						{
							type: i || 'Error',
							value: a
						}
					]
				}
			};
			return this._enhanceEventWithInitialFrame(r, e, n, s)
		},
		t.prototype._eventFromIncompleteRejection = function (t) {
			return {
				exception: {
					values: [
						{
							type: 'UnhandledRejection',
							value: 'Non-Error promise rejection captured with value: ' + t
						}
					]
				}
			}
		},
		t.prototype._enhanceEventWithInitialFrame = function (t, e, n, s) {
			t.exception = t.exception || {
			},
				t.exception.values = t.exception.values || [
				],
				t.exception.values[0] = t.exception.values[0] || {
				},
				t.exception.values[0].stacktrace = t.exception.values[0].stacktrace || {
				},
				t.exception.values[0].stacktrace.frames = t.exception.values[0].stacktrace.frames || [
				];
			var i = isNaN(parseInt(s, 10)) ? void 0 : s,
				a = isNaN(parseInt(n, 10)) ? void 0 : n,
				o = ht(e) && e.length > 0 ? e : function () {
					try {
						return document.location.href
					} catch (t) {
						return ''
					}
				}();
			return 0 === t.exception.values[0].stacktrace.frames.length && t.exception.values[0].stacktrace.frames.push({
				colno: i,
				filename: o,
				function: '?',
				in_app: !0,
				lineno: a
			}),
				t
		},
		t.id = 'GlobalHandlers',
		t
}(),
	kn = [
		'EventTarget',
		'Window',
		'Node',
		'ApplicationCache',
		'AudioTrackList',
		'ChannelMergerNode',
		'CryptoOperation',
		'EventSource',
		'FileReader',
		'HTMLUnknownElement',
		'IDBDatabase',
		'IDBRequest',
		'IDBTransaction',
		'KeyOperation',
		'MediaController',
		'MessagePort',
		'ModalWindow',
		'Notification',
		'SVGElementInstance',
		'Screen',
		'TextTrack',
		'TextTrackCue',
		'TextTrackList',
		'WebSocket',
		'WebSocketWorker',
		'Worker',
		'XMLHttpRequest',
		'XMLHttpRequestEventTarget',
		'XMLHttpRequestUpload'
	],
	Cn = function () {
		function t(e) {
			this.name = t.id,
				this._options = at({
					XMLHttpRequest: !0,
					eventTarget: !0,
					requestAnimationFrame: !0,
					setInterval: !0,
					setTimeout: !0
				}, e)
		}
		return t.prototype.setupOnce = function () {
			var t = Ft();
			this._options.setTimeout && It(t, 'setTimeout', this._wrapTimeFunction.bind(this)),
				this._options.setInterval && It(t, 'setInterval', this._wrapTimeFunction.bind(this)),
				this._options.requestAnimationFrame && It(t, 'requestAnimationFrame', this._wrapRAF.bind(this)),
				this._options.XMLHttpRequest && 'XMLHttpRequest' in t && It(XMLHttpRequest.prototype, 'send', this._wrapXHR.bind(this)),
				this._options.eventTarget && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : kn).forEach(this._wrapEventTarget.bind(this))
		},
			t.prototype._wrapTimeFunction = function (t) {
				return function () {
					for (var e = [
					], n = 0; n < arguments.length; n++) e[n] = arguments[n];
					var s = e[0];
					return e[0] = xn(s, {
						mechanism: {
							data: {
								function: Et(t)
							},
							handled: !0,
							type: 'instrument'
						}
					}),
						t.apply(this, e)
				}
			},
			t.prototype._wrapRAF = function (t) {
				return function (e) {
					return t.call(this, xn(e, {
						mechanism: {
							data: {
								function: 'requestAnimationFrame',
								handler: Et(t)
							},
							handled: !0,
							type: 'instrument'
						}
					}))
				}
			},
			t.prototype._wrapEventTarget = function (t) {
				var e = Ft(),
					n = e[t] && e[t].prototype;
				n && n.hasOwnProperty && n.hasOwnProperty('addEventListener') && (It(n, 'addEventListener', (function (e) {
					return function (n, s, i) {
						try {
							'function' == typeof s.handleEvent && (s.handleEvent = xn(s.handleEvent.bind(s), {
								mechanism: {
									data: {
										function: 'handleEvent',
										handler: Et(s),
										target: t
									},
									handled: !0,
									type: 'instrument'
								}
							}))
						} catch (t) {
						}
						return e.call(this, n, xn(s, {
							mechanism: {
								data: {
									function: 'addEventListener',
									handler: Et(s),
									target: t
								},
								handled: !0,
								type: 'instrument'
							}
						}), i)
					}
				})), It(n, 'removeEventListener', (function (t) {
					return function (e, n, s) {
						var i,
							a = n;
						try {
							var o = null === (i = a) || void 0 === i ? void 0 : i.__sentry_wrapped__;
							o && t.call(this, e, o, s)
						} catch (t) {
						}
						return t.call(this, e, a, s)
					}
				})))
			},
			t.prototype._wrapXHR = function (t) {
				return function () {
					for (var e = [
					], n = 0; n < arguments.length; n++) e[n] = arguments[n];
					var s = this,
						i = [
							'onload',
							'onerror',
							'onprogress',
							'onreadystatechange'
						];
					return i.forEach((function (t) {
						t in s && 'function' == typeof s[t] && It(s, t, (function (e) {
							var n = {
								mechanism: {
									data: {
										function: t,
										handler: Et(e)
									},
									handled: !0,
									type: 'instrument'
								}
							};
							return e.__sentry_original__ && (n.mechanism.data.handler = Et(e.__sentry_original__)),
								xn(e, n)
						}))
					})),
						t.apply(this, e)
				}
			},
			t.id = 'TryCatch',
			t
	}(),
	_n = function () {
		function t(e) {
			this.name = t.id,
				this._options = at({
					console: !0,
					dom: !0,
					fetch: !0,
					history: !0,
					sentry: !0,
					xhr: !0
				}, e)
		}
		return t.prototype.addSentryBreadcrumb = function (t) {
			this._options.sentry && Be().addBreadcrumb({
				category: 'sentry.' + ('transaction' === t.type ? 'transaction' : 'event'),
				event_id: t.event_id,
				level: t.level,
				message: qt(t)
			}, {
				event: t
			})
		},
			t.prototype.setupOnce = function () {
				var t = this;
				this._options.console && ie({
					callback: function () {
						for (var e = [
						], n = 0; n < arguments.length; n++) e[n] = arguments[n];
						t._consoleBreadcrumb.apply(t, lt(e))
					},
					type: 'console'
				}),
					this._options.dom && ie({
						callback: function () {
							for (var e = [
							], n = 0; n < arguments.length; n++) e[n] = arguments[n];
							t._domBreadcrumb.apply(t, lt(e))
						},
						type: 'dom'
					}),
					this._options.xhr && ie({
						callback: function () {
							for (var e = [
							], n = 0; n < arguments.length; n++) e[n] = arguments[n];
							t._xhrBreadcrumb.apply(t, lt(e))
						},
						type: 'xhr'
					}),
					this._options.fetch && ie({
						callback: function () {
							for (var e = [
							], n = 0; n < arguments.length; n++) e[n] = arguments[n];
							t._fetchBreadcrumb.apply(t, lt(e))
						},
						type: 'fetch'
					}),
					this._options.history && ie({
						callback: function () {
							for (var e = [
							], n = 0; n < arguments.length; n++) e[n] = arguments[n];
							t._historyBreadcrumb.apply(t, lt(e))
						},
						type: 'history'
					})
			},
			t.prototype._consoleBreadcrumb = function (t) {
				var e = {
					category: 'console',
					data: {
						arguments: t.args,
						logger: 'console'
					},
					level: st.fromString(t.level),
					message: Lt(t.args, ' ')
				};
				if ('assert' === t.level) {
					if (!1 !== t.args[0]) return;
					e.message = 'Assertion failed: ' + (Lt(t.args.slice(1), ' ') || 'console.assert'),
						e.data.arguments = t.args.slice(1)
				}
				Be().addBreadcrumb(e, {
					input: t.args,
					level: t.level
				})
			},
			t.prototype._domBreadcrumb = function (t) {
				var e;
				try {
					e = t.event.target ? wt(t.event.target) : wt(t.event)
				} catch (t) {
					e = '<unknown>'
				}
				0 !== e.length && Be().addBreadcrumb({
					category: 'ui.' + t.name,
					message: e
				}, {
					event: t.event,
					name: t.name
				})
			},
			t.prototype._xhrBreadcrumb = function (t) {
				if (t.endTimestamp) {
					if (t.xhr.__sentry_own_request__) return;
					var e = t.xhr.__sentry_xhr__ || {
					},
						n = e.method,
						s = e.url,
						i = e.status_code,
						a = e.body;
					Be().addBreadcrumb({
						category: 'xhr',
						data: {
							method: n,
							url: s,
							status_code: i
						},
						type: 'http'
					}, {
						xhr: t.xhr,
						input: a
					})
				}
			},
			t.prototype._fetchBreadcrumb = function (t) {
				t.endTimestamp && (t.fetchData.url.match(/sentry_key/) && 'POST' === t.fetchData.method || (t.error ? Be().addBreadcrumb({
					category: 'fetch',
					data: t.fetchData,
					level: st.Error,
					type: 'http'
				}, {
					data: t.error,
					input: t.args
				}) : Be().addBreadcrumb({
					category: 'fetch',
					data: at(at({
					}, t.fetchData), {
						status_code: t.response.status
					}),
					type: 'http'
				}, {
					input: t.args,
					response: t.response
				})))
			},
			t.prototype._historyBreadcrumb = function (t) {
				var e = Ft(),
					n = t.from,
					s = t.to,
					i = zt(e.location.href),
					a = zt(n),
					o = zt(s);
				a.path || (a = i),
					i.protocol === o.protocol && i.host === o.host && (s = o.relative),
					i.protocol === a.protocol && i.host === a.host && (n = a.relative),
					Be().addBreadcrumb({
						category: 'navigation',
						data: {
							from: n,
							to: s
						}
					})
			},
			t.id = 'Breadcrumbs',
			t
	}(),
	En = function () {
		function t(e) {
			void 0 === e && (e = {
			}),
				this.name = t.id,
				this._key = e.key || 'cause',
				this._limit = e.limit || 5
		}
		return t.prototype.setupOnce = function () {
			Te((function (e, n) {
				var s = Be().getIntegration(t);
				return s ? s._handler(e, n) : e
			}))
		},
			t.prototype._handler = function (t, e) {
				if (!(t.exception && t.exception.values && e && vt(e.originalException, Error))) return t;
				var n = this._walkErrorTree(e.originalException, this._key);
				return t.exception.values = lt(n, t.exception.values),
					t
			},
			t.prototype._walkErrorTree = function (t, e, n) {
				if (void 0 === n && (n = [
				]), !vt(t[e], Error) || n.length + 1 >= this._limit) return n;
				var s = ln(an(t[e]));
				return this._walkErrorTree(t[e], e, lt([s], n))
			},
			t.id = 'LinkedErrors',
			t
	}(),
	Nn = Ft(),
	Ln = function () {
		function t() {
			this.name = t.id
		}
		return t.prototype.setupOnce = function () {
			Te((function (e) {
				var n,
					s,
					i;
				if (Be().getIntegration(t)) {
					if (!Nn.navigator && !Nn.location && !Nn.document) return e;
					var a = (null === (n = e.request) || void 0 === n ? void 0 : n.url) || (null === (s = Nn.location) || void 0 === s ? void 0 : s.href),
						o = (Nn.document || {
						}).referrer,
						r = (Nn.navigator || {
						}).userAgent,
						l = at(at(at({
						}, null === (i = e.request) || void 0 === i ? void 0 : i.headers), o && {
							Referer: o
						}), r && {
							'User-Agent': r
						}),
						c = at(at({
						}, a && {
							url: a
						}), {
							headers: l
						});
					return at(at({
					}, e), {
						request: c
					})
				}
				return e
			}))
		},
			t.id = 'UserAgent',
			t
	}(),
	Tn = function (t) {
		function e(e) {
			return void 0 === e && (e = {
			}),
				t.call(this, yn, e) || this
		}
		return et(e, t),
			e.prototype.showReportDialog = function (t) {
				void 0 === t && (t = {
				}),
					Ft().document && (this._isEnabled() ? function (t) {
						if (void 0 === t && (t = {
						}), t.eventId) if (t.dsn) {
							var e = document.createElement('script');
							e.async = !0,
								e.src = new ze(t.dsn).getReportDialogEndpoint(t),
								t.onLoad && (e.onload = t.onLoad),
								(document.head || document.body).appendChild(e)
						} else Zt.error('Missing dsn option in showReportDialog call');
						else Zt.error('Missing eventId option in showReportDialog call')
					}(at(at({
					}, t), {
						dsn: t.dsn || this.getDsn()
					})) : Zt.error('Trying to call showReportDialog with Sentry Client disabled'))
			},
			e.prototype._prepareEvent = function (e, n, s) {
				return e.platform = e.platform || 'javascript',
					e.sdk = at(at({
					}, e.sdk), {
						name: 'sentry.javascript.browser',
						packages: lt(e.sdk && e.sdk.packages || [
						], [
							{
								name: 'npm:@sentry/browser',
								version: '5.28.0'
							}
						]),
						version: '5.28.0'
					}),
					t.prototype._prepareEvent.call(this, e, n, s)
			},
			e.prototype._sendEvent = function (e) {
				var n = this.getIntegration(_n);
				n && n.addSentryBreadcrumb(e),
					t.prototype._sendEvent.call(this, e)
			},
			e
	}(Ue),
	In = [
		new Je,
		new Ye,
		new Cn,
		new _n,
		new Sn,
		new En,
		new Ln
	];
!function (t) {
	if (void 0 === t && (t = {
	}), void 0 === t.defaultIntegrations && (t.defaultIntegrations = In), void 0 === t.release) {
		var e = Ft();
		e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id)
	}
	void 0 === t.autoSessionTracking && (t.autoSessionTracking = !1),
		function (t, e) {
			!0 === e.debug && Zt.enable();
			var n = Be(),
				s = new t(e);
			n.bindClient(s)
		}(Tn, t),
		t.autoSessionTracking && function () {
			var t = Ft(),
				e = Be(),
				n = 'complete' === document.readyState,
				s = !1,
				i = function () {
					s && n && e.endSession()
				},
				a = function () {
					n = !0,
						i(),
						t.removeEventListener('load', a)
				};
			e.startSession(),
				n || t.addEventListener('load', a);
			try {
				var o = new PerformanceObserver((function (t, e) {
					t.getEntries().forEach((function (t) {
						'first-contentful-paint' === t.name && t.startTime < r && (e.disconnect(), s = !0, i())
					}))
				})),
					r = 'hidden' === document.visibilityState ? 0 : 1 / 0;
				document.addEventListener('visibilitychange', (function (t) {
					r = Math.min(r, t.timeStamp)
				}), {
					once: !0
				}),
					o.observe({
						type: 'paint',
						buffered: !0
					})
			} catch (t) {
				s = !0,
					i()
			}
		}()
}({
	dsn: window.__SENTRY_DSN__ || '',
	release: window.__RELEASE__ || '',
	environment: window.__STAGE__ || '',
	autoBreadcrumbs: !0,
	whitelistUrls: [
		/.*\.songsterr\.(com|dev)/
	],
	blacklistUrls: [
		/\/inj_js\//i,
		/\/gpt\/pubads/i
	],
	ignoreErrors: [
		'Network request failed',
		'NetworkError when attempting to fetch resource',
		'The operation was aborted',
		'Failed to fetch',
		'Unable to decode audio data',
		/ResizeObserver/,
		/MediaDecodeAudioData/,
		/Blocked a frame with origin/
	],
	beforeSend: (t, e) => - 1 !== window.navigator.userAgent.indexOf('HeadlessChrome') ? null : (console && (e.originalException || e.syntheticException) && console.error(e.originalException || e.syntheticException), t),
	beforeBreadcrumb: (t, e) => 'xhr' === t.category ? null : t
});
var An = {
	app: 'C3rr3',
	tablature: 'C3r160',
	tablatureFullscreen: 'C3r160 C3r34s',
	debug: 'C3r16x',
	tos: 'C3r1lo',
	popupOverlay: 'C3rk5',
	footer: 'C3r1sh',
	footerWithAds: 'C3r1sh C3r2hm',
	copyright: 'C3r1az',
	rightSidebar: 'C3r8m',
	appFree: 'C3rr3 C3ry6',
	appPlus: 'C3rr3 C3r348'
};
const Pn = 'undefined' != typeof window,
	Mn = 27;
var Bn = h(),
	Dn = Pn ? g : y;
function On(...t) {
	const e = p(Bn),
		n = f({
		});
	return Dn((function () {
		return e.on('@changed', (function (e, s) {
			t.some((t => t in s)) && n[1]({
			})
		}))
	}), [
	]),
		m((function () {
			const n = e.get(),
				s = {
					dispatch: e.dispatch,
					store: e
				};
			for (const e of t) s[e] = n[e];
			return s
		}), [
			n[0]
		])
}
function Rn(t, ...e) {
	return function (n) {
		return v(t, Object.assign({
		}, n, On.apply(null, e)))
	}
}
const jn = h(null),
	$n = t => t && t.props;
function Fn(t, e) {
	const n = Object.create(null);
	return t && w(t).forEach((t => {
		t && (n[t.key] = (t => e && $n(t) ? e(t) : t)(t))
	})),
		n
}
function Hn(t, e, n) {
	return null != n[e] ? n[e] : t.props && t.props[e]
}
function zn(t, e, n) {
	const s = Fn(t.children),
		i = function (t, e) {
			function n(n) {
				return n in e ? e[n] : t[n]
			}
			t = t || {
			},
				e = e || {
				};
			const s = Object.create(null);
			let i,
				a = [
				];
			for (const n in t) n in e ? a.length && (s[n] = a, a = [
			]) : a.push(n);
			const o = {
			};
			for (const t in e) {
				if (s[t]) for (i = 0; i < s[t].length; i++) {
					const e = s[t][i];
					o[s[t][i]] = n(e)
				}
				o[t] = n(t)
			}
			for (i = 0; i < a.length; i++) o[a[i]] = n(a[i]);
			return o
		}(e, s);
	return Object.keys(i).forEach((a => {
		const o = i[a];
		if (!$n(o)) return;
		const r = a in e,
			l = a in s,
			c = e[a],
			u = $n(c) && !c.props.in;
		!l || r && !u ? l || !r || u ? l && r && $n(c) && (i[a] = b(o, {
			onExited: n.bind(null, o),
			in: c.props.in,
			exit: Hn(o, 'exit', t),
			enter: Hn(o, 'enter', t)
		})) : i[a] = b(o, {
			in: !1
		}) : i[a] = b(o, {
			onExited: n.bind(null, o),
			in: !0,
			exit: Hn(o, 'exit', t),
			enter: Hn(o, 'enter', t)
		})
	})),
		i
}
const qn = Object.values || (t => Object.keys(t).map((e => t[e])));
class Un extends x {
	constructor(t) {
		super(t);
		const e = this.handleExited.bind(this);
		this.state = {
			handleExited: e,
			firstRender: !0
		}
	}
	componentDidMount() {
		this.appeared = !0
	}
	static getDerivedStateFromProps(t, {
		children: e,
		handleExited: n,
		firstRender: s
	}) {
		return {
			children: s ? (i = t, a = n, Fn(i.children, (t => b(t, {
				onExited: a.bind(null, t),
				in: !0,
				appear: Hn(t, 'appear', i),
				enter: Hn(t, 'enter', i),
				exit: Hn(t, 'exit', i)
			})))) : zn(t, e, n),
			firstRender: !1
		};
		var i,
			a
	}
	handleExited(t, e) {
		const n = Fn(this.props.children);
		t.key in n || (t.props.onExited && t.props.onExited(e), this.setState((e => {
			const n = Object.assign({
			}, e.children);
			return delete n[t.key],
			{
				children: n
			}
		})))
	}
	render() {
		const t = this.props,
			{
				component: e,
				childFactory: n
			}
				= t,
			s = function (t, e) {
				if (null == t) return {
				};
				var n,
					s,
					i = {
					},
					a = Object.keys(t);
				for (s = 0; s < a.length; s++) n = a[s],
					e.indexOf(n) >= 0 || (i[n] = t[n]);
				return i
			}(t, [
				'component',
				'childFactory'
			]),
			i = qn(this.state.children).map(n);
		return delete s.appear,
			delete s.enter,
			delete s.exit,
			v(jn.Provider, {
				value: {
					isMounting: !this.appeared
				}
			}, e ? v(e, s, i) : v(S, null, i))
	}
}
Un.defaultProps = {
	component: null,
	childFactory: t => t
};
class Wn extends x {
	constructor(t, e) {
		super(t, e);
		const n = e && !e.isMounting ? t.enter : t.appear;
		let s;
		this.appearStatus = null,
			t.in ? n ? (s = 'exited', this.appearStatus = 'entering') : s = 'entered' : s = t.unmountOnExit || t.mountOnEnter ? 'unmounted' : 'exited',
			this.state = {
				status: s
			},
			this.nextCallback = null
	}
	static getDerivedStateFromProps({
		in: t
	}, e) {
		return t && 'unmounted' === e.status ? {
			status: 'exited'
		}
			: null
	}
	componentDidMount() {
		this.updateStatus(!0, this.appearStatus)
	}
	componentDidUpdate(t) {
		let e = null;
		if (t !== this.props) {
			const {
				status: t
			}
				= this.state;
			this.props.in ? 'entering' !== t && 'entered' !== t && (e = 'entering') : 'entering' !== t && 'entered' !== t || (e = 'exiting')
		}
		this.updateStatus(!1, e)
	}
	componentWillUnmount() {
		this.cancelNextCallback()
	}
	getTimeouts() {
		const {
			timeout: t
		}
			= this.props;
		let e,
			n,
			s;
		return e = n = s = t,
			null != t && 'number' != typeof t && (e = t.exit, n = t.enter, s = t.appear),
		{
			exit: e,
			enter: n,
			appear: s
		}
	}
	updateStatus(t = !1, e) {
		if (null !== e) {
			this.cancelNextCallback();
			const s = (n = this) ? n.base || 1 === n.nodeType && n : null;
			'entering' === e ? this.performEnter(s, t) : this.performExit(s)
		} else this.props.unmountOnExit && 'exited' === this.state.status && this.setState({
			status: 'unmounted'
		});
		var n
	}
	performEnter(t, e) {
		const {
			enter: n
		}
			= this.props,
			s = this.context ? this.context.isMounting : e,
			i = this.getTimeouts();
		e || n ? (this.props.onEnter(t, s), this.safeSetState({
			status: 'entering'
		}, (() => {
			this.props.onEntering(t, s),
				this.onTransitionEnd(t, i.enter, (() => {
					this.safeSetState({
						status: 'entered'
					}, (() => {
						this.props.onEntered(t, s)
					}))
				}))
		}))) : this.safeSetState({
			status: 'entered'
		}, (() => {
			this.props.onEntered(t)
		}))
	}
	performExit(t) {
		const {
			exit: e
		}
			= this.props,
			n = this.getTimeouts();
		e ? (this.props.onExit(t), this.safeSetState({
			status: 'exiting'
		}, (() => {
			this.props.onExiting(t),
				this.onTransitionEnd(t, n.exit, (() => {
					this.safeSetState({
						status: 'exited'
					}, (() => {
						this.props.onExited(t)
					}))
				}))
		}))) : this.safeSetState({
			status: 'exited'
		}, (() => {
			this.props.onExited(t)
		}))
	}
	cancelNextCallback() {
		null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
	}
	safeSetState(t, e) {
		e = this.setNextCallback(e),
			this.setState(t, e)
	}
	setNextCallback(t) {
		let e = !0;
		return this.nextCallback = n => {
			e && (e = !1, this.nextCallback = null, t(n))
		},
			this.nextCallback.cancel = () => {
				e = !1
			},
			this.nextCallback
	}
	onTransitionEnd(t, e, n) {
		this.setNextCallback(n),
			t ? (this.props.addEndListener && this.props.addEndListener(t, this.nextCallback), null != e && setTimeout(this.nextCallback, e)) : setTimeout(this.nextCallback, 0)
	}
	render() {
		return 'unmounted' === this.state.status ? null : v(jn.Provider, {
			value: null
		}, this.props.children)
	}
}
function Vn() {
}
Wn.contextType = jn,
	Wn.defaultProps = {
		in: !1,
		mountOnEnter: !1,
		unmountOnExit: !1,
		appear: !1,
		enter: !0,
		exit: !0,
		onEnter: Vn,
		onEntering: Vn,
		onEntered: Vn,
		onExit: Vn,
		onExiting: Vn,
		onExited: Vn
	};
class Gn extends x {
	constructor() {
		super(...arguments),
			this.onEnter = (t, e) => {
				if (t) {
					const n = this.props.animationStyles[e ? 'appear' : 'enter'];
					this.removeClasses(t, 'exit'),
						n && t.classList.add(n)
				}
				this.props.onEnter && this.props.onEnter(t)
			},
			this.onEntering = (t, e) => {
				if (t) {
					const n = this.props.animationStyles[(e ? 'appear' : 'enter') + 'Active'],
						s = window.requestAnimationFrame;
					n && s((() => {
						s((() => {
							t && t.classList.add(n)
						}))
					}))
				}
				this.props.onEntering && this.props.onEntering(t)
			},
			this.onEntered = (t, e) => {
				if (t) {
					const n = this.props.animationStyles[(e ? 'appear' : 'enter') + 'Done'];
					this.removeClasses(t, e ? 'appear' : 'enter'),
						n && t.classList.add(n)
				}
				this.props.onEntered && this.props.onEntered(t)
			},
			this.onExit = t => {
				if (t) {
					const e = this.props.animationStyles.exit;
					this.removeClasses(t, 'appear'),
						this.removeClasses(t, 'enter'),
						e && t.classList.add(e)
				}
				this.props.onExit && this.props.onExit(t)
			},
			this.onExiting = t => {
				if (t) {
					const e = this.props.animationStyles.exitActive,
						n = window.requestAnimationFrame;
					e && n((() => {
						n((() => {
							t && t.classList.add(e)
						}))
					}))
				}
				this.props.onExiting && this.props.onExiting(t)
			},
			this.onExited = t => {
				if (t) {
					const e = this.props.animationStyles.exitDone;
					this.removeClasses(t, 'exit'),
						e && t.classList.add(e)
				}
				this.props.onExited && this.props.onExited(t)
			}
	}
	removeClasses(t, e) {
		const n = this.props.animationStyles[e],
			s = this.props.animationStyles[e + 'Active'],
			i = this.props.animationStyles[e + 'Done'];
		n && t.classList.remove(n),
			s && t.classList.remove(s),
			i && t.classList.remove(i)
	}
	render() {
		return v(Wn, Object.assign({
		}, this.props, {
			onEnter: this.onEnter,
			onEntered: this.onEntered,
			onEntering: this.onEntering,
			onExit: this.onExit,
			onExiting: this.onExiting,
			onExited: this.onExited
		}))
	}
}
Gn.defaultProps = {
	timeout: 200
};
var Xn = {
	button: 'Cpb24q',
	active: 'Cpb180',
	buttonGreen: 'Cpb24q Cpb318',
	buttonBlue: 'Cpb24q Cpb2au',
	buttonGrey: 'Cpb24q Cpb2j',
	buttonDisabled: 'Cpb24q Cpb2j Cpb8g',
	buttonRed: 'Cpb24q Cpb2uv',
	buttonFloat: 'Cpb24q Cpb2tm',
	buttonLink: 'Cpb24q Cpb1oz',
	buttonLinkFloat: 'Cpb24q Cpb1oz Cpb2z8',
	link: 'Cpbc6',
	buttonBlock: 'Cpb24q Cpbza',
	buttonSmall: 'Cpb24q Cpb13f',
	google: 'Cpb24q Cpb1jm',
	googleIcon: 'Cpb9k',
	popupButton: 'Cpb24q Cpb14i',
	popupButtonSmall: 'Cpbpb',
	popupButtonGreen: 'Cpb24q Cpb14i Cpb1t2',
	popupButtonBlue: 'Cpb24q Cpb14i Cpb1y5',
	popupButtonOrange: 'Cpb24q Cpb14i Cpb2xu',
	popupButtonGreenSmall: 'Cpb24q Cpb14i Cpb1t2 Cpbpb Cpb1o9',
	popupButtonBlueSmall: 'Cpb24q Cpb14i Cpb1y5 Cpbpb Cpb2zd',
	submitRevisionButton: 'Cpb24q Cpb14i Cpb1t2 Cpb1a8',
	submitRevisionButtonWarning: 'Cpb24q Cpb14i Cpb2xu Cpb1xh',
	addAnnotation: 'Cpb24q Cpb14i Cpb1t2 Cpbpb Cpb1o9 Cpb2bq',
	removeAnnotation: 'Cpb24q Cpb2uv Cpbpb Cpb2z3',
	buttonBig: 'Cpb24q Cpb2zn',
	greenHighlight: 'Cpbjz',
	orangeHighlight: 'Cpb1m5'
};
const Yn = {
	animationStyles: {
		exitActive: 'Cp54w',
		enterActive: 'Cp5pf',
		enter: 'Cp5aq',
		exit: 'Cp5u'
	}
};
var Zn,
	Jn,
	Kn = Rn(class extends x {
		constructor() {
			super(...arguments),
				this.onDisagree = () => {
					this.props.dispatch('consent/toggle', !1)
				},
				this.onAgree = () => {
					this.props.dispatch('consent/toggle', !0)
				}
		}
		render() {
			if ('on' === this.props.experiments.googlefc) return;
			let t = null;
			return void 0 === this.props.consent.profiling && (t = v(Gn, Yn, v('section', {
				className: 'Cyocr'
			}, v('div', {
				className: 'Cyo1vs'
			}, 'We use cookies and other technologies to provide you with tailored advertising and better experience.', v('div', {
				className: 'Cyo166'
			}, v('button', {
				id: 'accept',
				className: 'Cpb24q Cpb318 Cyo2ax',
				onClick: this.onAgree
			}, 'Accept'), v('button', {
				id: 'refuse',
				className: 'Cpb24q Cpb1oz Cyo94',
				onClick: this.onDisagree
			}, 'I don\'t allow this')), v('div', {
				className: 'Cyoei'
			}, 'Learn more on personalization data handling in our ', v('a', {
				href: '/a/wa/privacy',
				target: '_blank'
			}, 'Privacy Policy'), '.'))))),
				v(Un, null, t)
		}
	}, 'consent', 'experiments'),
	Qn = function (t) {
		return function (e, n, s, i) {
			r(n);
			var a = k(e),
				o = C(a),
				l = _(a.length),
				c = t ? l - 1 : 0,
				u = t ? - 1 : 1;
			if (s < 2) for (; ;) {
				if (c in o) {
					i = o[c],
						c += u;
					break
				}
				if (c += u, t ? c < 0 : l <= c) throw TypeError('Reduce of empty array with no initial value')
			}
			for (; t ? c >= 0 : l > c; c += u) c in o && (i = n(i, o[c], c, a));
			return i
		}
	},
	ts = {
		left: Qn(!1),
		right: Qn(!0)
	},
	es = Object.defineProperty,
	ns = {
	},
	ss = function (t) {
		throw t
	},
	is = u('navigator', 'userAgent') || '',
	as = a.process,
	os = as && as.versions,
	rs = os && os.v8;
rs ? Jn = (Zn = rs.split('.'))[0] + Zn[1] : is && (!(Zn = is.match(/Edge\/(\d+)/)) || Zn[1] >= 74) && (Zn = is.match(/Chrome\/(\d+)/)) && (Jn = Zn[1]);
var ls = Jn && + Jn,
	cs = 'process' == N(a.process),
	us = ts.left,
	ds = L('reduce'),
	hs = function (t, e) {
		if (n(ns, 'reduce')) return ns.reduce;
		e || (e = {
		});
		var s = [
		].reduce,
			i = !!n(e, 'ACCESSORS') && e.ACCESSORS,
			a = n(e, 0) ? e[0] : ss,
			o = n(e, 1) ? e[1] : void 0;
		return ns.reduce = !!s && !c((function () {
			if (i && !E) return !0;
			var t = {
				length: - 1
			};
			i ? es(t, 1, {
				enumerable: !0,
				get: ss
			}) : t[1] = 1,
				s.call(t, a, o)
		}))
	}(0, {
		1: 0
	});
i({
	target: 'Array',
	proto: !0,
	forced: !ds || !hs || !cs && ls > 79 && ls < 83
}, {
	reduce: function (t) {
		return us(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
	}
});
const ps = t => 11531520 * t[0] / t[1],
	fs = t => t / 11531520;
function ms(t) {
	return 1024 === t
}
function gs(t) {
	return t >= 24 && t <= 31
}
function ys(t) {
	return t >= 32 && t <= 39
}
const vs = [
];
function ws(t) {
	return t.text.length < 6 ? - 1 * Math.floor(t.width / 2) : - 6
}
class bs {
	constructor(t, e, n) {
		this.index = e,
			this.prevBeat = null,
			this.nextBeat = null,
			this.duration = t.duration,
			this.type = t.type,
			this.dotted = t.dotted,
			this.tuplet = t.tuplet || 0,
			this.rest = t.rest,
			this.pickStroke = t.pickStroke,
			this.upStroke = t.upStroke,
			this.downStroke = t.downStroke,
			this.letRing = t.letRing,
			this.palmMute = t.palmMute,
			this.wideVibrato = t.wideVibrato,
			this.vibrato = t.vibrato,
			this.width = 0,
			this.voice = 0,
			this.beamStart = t.beamStart,
			this.beamStop = t.beamStop,
			this.tupletStart = t.tupletStart,
			this.tupletStop = t.tupletStop,
			this.layout = n,
			this.notes = t.notes ? new Array(t.notes.length) : vs,
			this.chord = t.chord ? {
				layer: null,
				text: void 0 !== t.chord.text && void 0 !== t.chord.text.text ? t.chord.text.text : t.chord.text,
				width: t.chord.width
			}
				: void 0,
			this.text = void 0,
			this.originalText = t.text ? {
				layer: null,
				text: void 0 !== t.text.text && void 0 !== t.text.text.text ? t.text.text.text : t.text.text,
				width: t.text.width
			}
				: void 0,
			this.lyrics = void 0 !== t.lyrics ? t.lyrics.map((t => ({
				layer: null,
				text: t.text,
				width: t.width
			}))) : void 0
	}
	getLyricsPosition(t, e) {
		const n = ws(t),
			s = this.layout.absoluteX + n;
		let i = 0;
		return e >= s && (i = e - s + 1),
		{
			x1: s,
			x2: s + t.width,
			diff: i
		}
	}
	getHatPosition() {
		const t = this.layout.absoluteX - 5;
		return {
			x1: t,
			x2: t + 13
		}
	}
	getTextPosition(t) {
		const e = t.text.length < 4 ? - 1 * Math.floor(t.width / 2) : - 10,
			n = this.layout.absoluteX + e;
		return {
			x1: n,
			x2: n + t.width
		}
	}
	getChordPosition(t) {
		const e = t.width,
			n = this.layout.absoluteX - Math.floor(e / 2);
		return {
			x1: n,
			x2: n + e
		}
	}
	hasSlide() {
		return void 0 !== this.notes.find((t => void 0 !== t.slide))
	}
	isSubchordOf(t) {
		return function (t, e) {
			for (let n = 0; n < t.length; n++) {
				const s = t[n];
				let i = !1;
				for (let t = 0; t < e.length; t++) {
					const n = e[t];
					if (s.string === n.string && s.fret === n.fret) {
						i = !0;
						break
					}
				}
				if (!i) return !1
			}
			return !0
		}(this.notes, t.notes)
	}
	isDropChord() {
		const t = this;
		let e = null;
		for (let n = 0; n < t.notes.length; n++) {
			const s = t.notes[n];
			if (s.dead) return !1;
			if (null === e && (e = s.fret), s.fret !== e) return !1
		}
		return t.notes.length > 0
	}
	isOpenChord() {
		const t = this;
		for (let e = 0; e < t.notes.length; e++) {
			const n = t.notes[e];
			if (n.dead) return !1;
			if (0 !== n.fret) return !1
		}
		return t.notes.length > 0
	}
	hasOnlyDeadNotes() {
		return function (t) {
			for (let e = 0; e < t.length; e++) if (!t[e].dead) return !1;
			return t.length > 0
		}(this.notes)
	}
}
class xs {
	constructor(t) {
		this.x = 0,
			this.originX = 0,
			this.absoluteX = 0,
			this.absoluteLoopLeftX = 0,
			this.absoluteLoopRightX = 0,
			this.measureLayout = t,
			this.duration = Number.MAX_VALUE,
			this.beats = [
			],
			this.occurrences = [
			],
			this.shifts = [
			],
			this.usedStrings = 0,
			this.usedRest = !1,
			this.durationBeforeNextPickStroke = null
	}
	get stringY() {
		return this.measureLayout.lineLayout.stringY
	}
	get maxX() {
		return this.measureLayout.lineLayout.maxX
	}
	get minX() {
		return this.measureLayout.lineLayout.minX
	}
	get leftTime() {
		return this.occurrences[0]
	}
	get rightTime() {
		return this.occurrences[this.occurrences.length - 1]
	}
	get loopLeftTime() {
		return this.occurrences[0]
	}
	get firstLoopRightTime() {
		return this.occurrences[0] + this.duration
	}
	get loopRightTime() {
		return this.occurrences[this.occurrences.length - 1] + this.duration
	}
}
function Ss(t, e) {
	return t.layout.measureLayout.lineLayout !== e.layout.measureLayout.lineLayout
}
function ks(t, e, n = !1) {
	if (t === e && !n) return 0;
	let s = e.layout.x;
	if (n) {
		const t = e.nextBeat;
		t && (s = t.layout.x, function (t, e) {
			return t.layout.measureLayout.measure.index !== e.layout.measureLayout.measure.index
		}(e, t) && (s += e.layout.measureLayout.width))
	}
	let i = t.layout.measureLayout.measure.layout.x + s - t.layout.absoluteX;
	const a = e.layout.measureLayout.measure.index;
	let o = - 1,
		r = t;
	for (; r && o < a;) {
		const t = r.layout.measureLayout.measure;
		t.index > o && t.index < a && (i += t.layout.width),
			o = t.index,
			r = r.nextBeat
	}
	return i
}
function Cs(t) {
	return Ss(t.firstRef().beat, t.lastRef().beat)
}
class _s {
	constructor(t) {
		this.refs = [
			t
		],
			this.keep = !0,
			this.layer = null
	}
	reset(t) {
		this.refs = [
			t
		]
	}
	addRef(t) {
		this.refs.push(t)
	}
	firstRef() {
		return this.refs[0]
	}
	lastRef() {
		return this.refs[this.refs.length - 1]
	}
	indexOfNote(t) {
		for (let e = 0; e < this.refs.length; e++) if (this.refs[e].note === t) return e;
		return - 1
	}
	indexOfBeat(t) {
		for (let e = 0; e < this.refs.length; e++) if (this.refs[e].beat === t) return e;
		return - 1
	}
}
function Es(t, e) {
	return t.x1 <= e.x1 && e.x1 < t.x2 || e.x1 <= t.x1 && t.x1 < e.x2
}
const Ns = {
	capo: 10,
	letRing: 2,
	palmMute: 2,
	harmonic: 2,
	vibrato: 2,
	wideVibrato: 2,
	lineHangingText: 4,
	measureNumber: 0,
	measureAlternateEnding: 4,
	measureMarker: 7,
	measureTempo: 6,
	beatText: 4,
	beatChord: 1,
	beatLyrics: 1,
	beatHat: 0,
	noteBend: 0,
	tripletFeel: 10
},
	Ls = {
		capo: 18,
		letRing: 14,
		palmMute: 14,
		harmonic: 14,
		vibrato: 7,
		wideVibrato: 8,
		lineHangingText: 18,
		measureNumber: 5,
		measureAlternateEnding: 14,
		measureMarker: 18,
		measureTempo: 16,
		beatText: 18,
		beatChord: 17,
		beatLyrics: 17,
		tripletFeel: 42,
		beatHat: 10
	};
class Ts {
	constructor() {
		this.levels = new Map,
			this.height = 0
	}
	_getLevel(t) {
		let e = this.levels.get(t);
		return e || (e = [
		], this.levels.set(t, e)),
			e
	}
	acquireLayer(t, e) {
		const n = Ls[t];
		return this.acquireLayerWithHeight(t, n, e)
	}
	acquireLayerWithHeight(t, e, n) {
		const s = Ns[t],
			i = {
				x1: n.x1,
				x2: n.x2,
				height: e,
				y: 0,
				diff: n.diff
			};
		return this._getLevel(s).push(i),
			i
	}
	_fitLayer(t, e, n, s) {
		let i = t;
		if (n > 0 && n !== Ns.beatLyrics) for (const t of s) Es(t, e) && (i = Math.max(i, t.y + t.height));
		e.y = i,
			this.height = Math.max(this.height, e.y + e.height),
			s.push(e)
	}
	shake(t = 22) {
		const e = [
		];
		this.height = t;
		const n = Array.from(this.levels.keys()).sort(((t, e) => t - e));
		for (const s of n) {
			const n = this.levels.get(s) || [
			];
			for (const i of n) this._fitLayer(t, i, s, e)
		}
	}
}
class Is {
	constructor(t, e) {
		this.layers = new Ts,
			this.bottomLayers = new Ts,
			this.x = 0,
			this.y = 0,
			this.maxX = t,
			this.maxY = 0,
			this.minX = 0,
			this.line = e,
			this.height = 0
	}
	get stringY() {
		return this.y + this.layers.height
	}
	get loopY() {
		return this.y + 20 - 5
	}
	get loopHeight() {
		return this.height - 40 + 10
	}
}
const As = {
	letRing: function (t) {
		return Ps(t)
	},
	palmMute: function (t) {
		return Ps(t)
	},
	harmonic: function (t) {
		return Ps(t)
	},
	vibrato: Ms,
	wideVibrato: Ms
};
function Ps(t) {
	if (!t.start || !t.stop) throw new Error('Wrong line effect state');
	return {
		x1: t.start.absoluteX - 20,
		x2: t.stop.absoluteX + 10
	}
}
function Ms(t) {
	const {
		start: e,
		stop: n
	}
		= t;
	if (!e || !n) throw new Error('Wrong line effect state');
	let s = null;
	const i = n.measureLayout.measure,
		a = i.beatsLayouts,
		o = a.findIndex((t => t === n));
	if (o > - 1 && o < a.length - 1) s = a[o + 1];
	else {
		const t = n.measureLayout.lineLayout.line.measures,
			e = t.findIndex((t => t === i));
		e > - 1 && e < t.length - 1 && (s = t[e + 1].beatsLayouts[0])
	}
	return {
		x1: e.absoluteX,
		x2: s ? s.absoluteX : n.maxX
	}
}
function Bs(t) {
	const e = t.firstRef().note.bend;
	if (!e) throw new Error('Wrong state at bend note');
	return - 1 * (- 5 - e.tone / 4)
}
class Ds {
	constructor(t, e, n) {
		this.index = t,
			this.strings = e.strings,
			this.measures = [
			],
			this.effects = [
			],
			this.spaces = new Array(this.strings),
			this.width = 0,
			this.rhythmLines = 0,
			this.layout = new Is(n, this),
			this.hangingText = [
			],
			this.capo = 0 === t && e.capo ? {
				capo: e.capo,
				layer: null
			}
				: void 0
	}
	joinLineEffect(t, e, n) {
		const s = t[e];
		s && !n.detected && (n.detected = !0, n.value = s, n.start = t.layout),
			s && s === n.value && (n.stop = t.layout),
			s ? n.value && s !== n.value && (this.finishLineEffect(e, n), this.joinLineEffect(t, e, n)) : this.finishLineEffect(e, n)
	}
	finishLineEffect(t, e) {
		if (e.detected) {
			const n = this.layout.layers.acquireLayer(t, As[t](e));
			this.effects.push({
				effect: t,
				layer: n,
				effectValue: e.value
			}),
				e.detected = !1,
				e.value = void 0,
				e.start = null,
				e.stop = null
		}
	}
	getHangingTextPosition(t) {
		const e = this.layout.minX;
		return {
			x1: e,
			x2: e + t.width
		}
	}
	prepare(t, e, n, s) {
		const i = [
		],
			a = t.usedDrums,
			o = n(this);
		for (const t of this.hangingText) t.layer = this.layout.layers.acquireLayer('lineHangingText', this.getHangingTextPosition(t));
		const r = this.capo;
		void 0 !== r && (r.layer = this.layout.layers.acquireLayer('capo', function (t, e) {
			return {
				x1: e - 120,
				x2: e
			}
		}(r.capo, this.layout.maxX)));
		for (let t = 0; t < this.spaces.length; t++) this.spaces[t] = [
		];
		const l = {
			detected: !1,
			start: null,
			stop: null,
			value: void 0
		},
			c = {
				detected: !1,
				start: null,
				stop: null,
				value: void 0
			},
			u = {
				detected: !1,
				start: null,
				stop: null,
				value: void 0
			},
			d = {
				detected: !1,
				start: null,
				stop: null,
				value: void 0
			},
			h = {
				detected: !1,
				start: null,
				stop: null,
				value: void 0
			};
		for (const n of this.measures) {
			n.scaleIt(o),
				this.rhythmLines = Math.max(this.rhythmLines, n.rhythmLines);
			const r = n.alternateEnding;
			r && (r.layer = this.layout.layers.acquireLayer('measureAlternateEnding', n.getAlternateEndingPosition()));
			const p = n.marker;
			p && (p.layer = this.layout.layers.acquireLayer('measureMarker', n.getMarkerPosition(p)));
			const f = n.tripletFeel;
			f && (f.layer = this.layout.layers.acquireLayer('tripletFeel', n.getTripletFeelPosition()));
			let m = 0;
			for (const o of n.beatsLayouts) for (const n of o.beats) if (n.lyrics) {
				for (const t of n.lyrics) if (t) {
					const e = n.getLyricsPosition(t, m);
					m = e.x2,
						t.layer = this.layout.bottomLayers.acquireLayer('beatLyrics', e)
				}
			} else {
				const o = n.originalText;
				if (o) {
					const t = this.layout.maxX + 5 - n.layout.absoluteX;
					let e = o;
					if (s && e.width > t) {
						const {
							phrase: n,
							rest: a
						}
							= s(e.text, e.width, t);
						e = n,
							i.push(a)
					}
					e && (e.layer = this.layout.layers.acquireLayer('beatText', n.getTextPosition(e)), n.text = e)
				}
				const r = n.chord;
				r && (r.layer = this.layout.layers.acquireLayer('beatChord', n.getChordPosition(r))),
					0 === n.voice && (this.joinLineEffect(n, 'letRing', l), this.joinLineEffect(n, 'palmMute', c), this.joinLineEffect(n, 'harmonic', u), this.joinLineEffect(n, 'vibrato', d), this.joinLineEffect(n, 'wideVibrato', h));
				for (const s of n.notes) {
					if (!s.rest) {
						const e = a ? s.drumString(a) : s.string;
						if (e % 1 == 0 && e >= 0 && e < t.strings) {
							const i = s.margin(4, t);
							if (i) {
								const t = n.layout.absoluteX - i,
									s = i << 1,
									a = this.spaces[e];
								if (a) {
									const e = a.length;
									if (e) {
										const o = a[e - 1];
										o.x + o.w >= t ? (o.x = Math.min(o.x, t), o.w = n.layout.absoluteX + i - o.x) : a.push({
											x: t,
											w: s
										})
									} else a.push({
										x: t,
										w: s
									})
								}
							}
							!a || 59 != s.fret && 93 != s.fret || n.hat || (n.hat = {
								type: 'ride',
								layer: this.layout.layers.acquireLayer('beatHat', n.getHatPosition())
							})
						}
					}
					const i = s.bendStart;
					if (i) {
						const t = e.getBendCoordinates(i, s);
						t.x1 += n.layout.absoluteX,
							t.x2 += n.layout.absoluteX,
							i.layer = this.layout.layers.acquireLayerWithHeight('noteBend', Bs(i), t)
					}
				}
			}
			for (const t of n.tempoLayouts) t.layer = this.layout.layers.acquireLayer('measureTempo', n.getTempoPosition(t))
		}
		return this.finishLineEffect('letRing', l),
			this.finishLineEffect('palmMute', c),
			this.finishLineEffect('harmonic', u),
			this.finishLineEffect('vibrato', d),
			this.finishLineEffect('wideVibrato', h),
			this.layout.layers.shake(),
			this.layout.bottomLayers.shake(12 * this.strings + 35 * this.rhythmLines),
			this.layout.layers.height += 20,
			this.layout.height = this.layout.layers.height + this.layout.bottomLayers.height + 20,
			this.layout.maxY = this.layout.y + this.layout.height,
			i
	}
}
class Os {
	constructor(t, e) {
		this.measure = t,
			this.x = 0,
			this.originX = 0,
			this.width = 0,
			this.originWidth = 0,
			this.lineLayout = e
	}
	get maxX() {
		return this.lineLayout.maxX
	}
	get minX() {
		return this.lineLayout.minX
	}
}
const Rs = {
	bpm: 100,
	type: 4,
	position: 0
};
class js {
	constructor(t, e, n, s) {
		this.index = e,
			this.hasSignature = !!t.signature,
			this.signature = t.signature || n,
			this.duration = 0,
			this.scale = t.scale || 1,
			this.rest = t.rest,
			this.repeatStart = t.repeatStart,
			this.repeat = Math.min(t.repeat || 0, 10),
			this.voices = new Array(t.voices.length),
			this.beatsLayouts = [
			],
			this.beatsLayoutsByTime = new Map,
			this.beatsLayoutsTimes = null,
			this.tempoLayouts = [
			],
			this.tempoLayoutsByTime = new Map,
			this.tempoLayoutsTimes = null,
			this.rhythmLines = 0,
			this.width = 0,
			this.tripletFeel = t.tripletFeel ? {
				layer: null,
				feel: t.tripletFeel
			}
				: void 0,
			this.marker = t.marker ? {
				layer: null,
				text: t.marker.text,
				width: t.marker.width
			}
				: void 0,
			this.alternateEnding = t.alternateEnding ? {
				layer: null,
				alternateEnding: t.alternateEnding
			}
				: void 0,
			this.layout = new Os(this, s)
	}
	scaleIt(t) {
		this.layout.x = Math.floor(this.layout.originX * t),
			this.layout.width = Math.floor(this.layout.originWidth * t);
		const e = this.beatsLayouts,
			n = this.tempoLayouts;
		let s = e[0];
		s.absoluteLoopLeftX = this.layout.x;
		for (const e of n) e.measureOffset = Math.floor(e.originMeasureOffset * t);
		for (const n of e) {
			if (n.x = Math.floor(n.originX * t), n.absoluteX = this.layout.x + n.x, s !== n) {
				const t = n.x - s.x,
					e = t < 40 ? 0.5 : 0.8,
					i = Math.floor(t * e);
				s.absoluteLoopRightX = s.absoluteX + i,
					n.absoluteLoopLeftX = n.absoluteX - (t - i)
			}
			s = n
		}
		s.absoluteLoopRightX = this.layout.x + this.layout.width
	}
	getTempoPosition(t) {
		const e = Math.floor((this.layout.width - t.measureOffset) * t.tempo.position),
			n = this.layout.x + t.measureOffset + e;
		return {
			x1: n,
			x2: n + (t.tempo.bpm >= 100 ? 44 : 35)
		}
	}
	getMarkerPosition(t) {
		const e = this.layout.x;
		return {
			x1: e,
			x2: e + t.width
		}
	}
	getNumberPosition() {
		const t = this.layout.x;
		return {
			x1: t,
			x2: t + (this.index < 99 ? 17 : 22)
		}
	}
	getAlternateEndingPosition() {
		const t = this.layout.x;
		return {
			x1: t,
			x2: t + this.layout.width - 6
		}
	}
	getTripletFeelPosition() {
		const t = this.layout.x;
		return {
			x1: t,
			x2: t + 90
		}
	}
}
const $s = [
	[{
		key: 38,
		value: {
			name: 'AS',
			string: 1.5
		}
	},
	{
		key: 40,
		value: {
			name: 'ES',
			string: 2.5
		}
	}
	],
	[
		{
			key: 35,
			value: {
				name: 'ABD',
				string: 3.5
			}
		},
		{
			key: 36,
			value: {
				name: 'BD',
				string: 4.5
			}
		}
	],
	[
		{
			key: 41,
			value: {
				name: 'LFT',
				string: 3.5
			}
		},
		{
			key: 43,
			value: {
				name: 'HFT',
				string: 2.5
			}
		}
	],
	[
		{
			key: 47,
			value: {
				name: 'LMT',
				string: 1
			}
		},
		{
			key: 48,
			value: {
				name: 'HMT',
				string: 0.5
			}
		}
	],
	[
		{
			key: 51,
			value: {
				name: 'RC1',
				string: 0
			}
		},
		{
			key: 59,
			value: {
				name: 'RC2',
				string: 0
			}
		}
	],
	[
		{
			key: 49,
			value: {
				name: 'CC1',
				string: - 1
			}
		},
		{
			key: 57,
			value: {
				name: 'CC2',
				string: 0
			}
		}
	],
	[
		{
			key: 60,
			value: {
				name: 'HBG',
				string: 2.5
			}
		},
		{
			key: 61,
			value: {
				name: 'LBG',
				string: 3
			}
		}
	],
	[
		{
			key: 76,
			value: {
				name: 'HWB',
				string: 1
			}
		},
		{
			key: 77,
			value: {
				name: 'LWB',
				string: 1.5
			}
		}
	]
],
	Fs = {
		hq: 'High Q',
		sl: 'Slap',
		Ssh: 'Scratch Push',
		Sll: 'Scratch Pull',
		Stx: 'Sticks',
		sc: 'Square Click',
		mc: 'Metronome Click',
		mb: 'Metronome Bell',
		BD: 'Bass Drum',
		ABD: 'Acoustic Bass Drum',
		HC: 'Hand Clap',
		S: 'Snare',
		AS: 'Acoustic Snare',
		ES: 'Electric Snare',
		SS: 'Snare Side Stick',
		SR: 'Snare Rim Shot',
		xH: 'Closed Hi Hat',
		oH: 'Open Hi Hat',
		fH: 'Foot Hi Hat',
		hH: 'Half Hi Hat',
		HT: 'High Tom',
		LT: 'Low Tom',
		FT: 'Floor Tom',
		LFT: 'Low Floor Tom',
		HFT: 'High Floor Tom',
		MT: 'Mid Tom',
		LMT: 'Low-Mid Tom',
		HMT: 'Hi-Mid Tom',
		CC: 'Crash Cymbal',
		CC1: 'Crash Cymbal 1',
		CC2: 'Crash Cymbal 2',
		RC: 'Ride Cymbal',
		RC1: 'Ride Cymbal 1',
		RC2: 'Ride Cymbal 2',
		RE: 'Ride Edge',
		SC: 'Splash Cymbal',
		cC: 'Chinese Cymbal',
		rb: 'Ride Bell',
		ta: 'Tambourine',
		cb: 'Cowbell',
		hcb: 'High Cowbell',
		lcb: 'Low Cowbell',
		vs: 'Vibraslap',
		BG: 'Bongo',
		HBG: 'Hi Bongo',
		LBG: 'Low Bongo',
		xC: 'Mute Hi Conga',
		oC: 'Open Hi Conga',
		LC: 'Low Conga',
		ht: 'High Timbale',
		lt: 'Low Timbale',
		ha: 'High Agogo',
		la: 'Low Agogo',
		ca: 'Cabasa',
		ma: 'Maracas',
		SW: 'Short Whistle',
		LW: 'Long Whistle',
		SG: 'Short Guiro',
		LG: 'Long Guiro',
		cl: 'Claves',
		WB: 'Wood Block',
		HWB: 'Hi Wood Block',
		LWB: 'Low Wood Block',
		xU: 'Mute Cuica',
		oU: 'Open Cuica',
		xT: 'Mute Triangle',
		oT: 'Open Triangle',
		Sh: 'Shaker',
		JB: 'Jingle Bell',
		BT: 'Bell Tree',
		Cs: 'Castinets',
		xS: 'Mute Surdo',
		oS: 'Open Surdo'
	},
	Hs = [
		3,
		3,
		1,
		- 1,
		1.5,
		1.5,
		1.5,
		1.5,
		4.5,
		4.5,
		1.5,
		1.5,
		1.5,
		1.5,
		3,
		- 0.5,
		3,
		5.5,
		2,
		- 0.5,
		1,
		1,
		- 1,
		0,
		0,
		- 1,
		0.5,
		2.5,
		0,
		0,
		- 1,
		4.5,
		0,
		2.5,
		2.5,
		4.5,
		4.5,
		5,
		5,
		5.5,
		0.5,
		1,
		4.5,
		3.5,
		5,
		5.5,
		- 1.5,
		- 1,
		2.5,
		1,
		1,
		5.5,
		5.5,
		- 0.5,
		- 0.5,
		- 1,
		- 1,
		- 1,
		- 1.5,
		6,
		6
	];
Hs[64] = 1.5,
	Hs[65] = - 1,
	Hs[66] = 0;
const zs = [
	3,
	3,
	1,
	- 1.5,
	1.5,
	1.5,
	2,
	2,
	4,
	3.5,
	1.5,
	1.5,
	1.5,
	1.5,
	2.5,
	- 0.5,
	3,
	4.5,
	2.5,
	- 0.5,
	2,
	1,
	- 1,
	0.5,
	0,
	- 1.5,
	0,
	1.5,
	- 1,
	0,
	- 0.5,
	5,
	1,
	2,
	3,
	4.5,
	4.5,
	5,
	4,
	4.5,
	5,
	5.5,
	4.5,
	3.5,
	5,
	5.5,
	- 1.5,
	- 1,
	2.5,
	1,
	1.5,
	4.5,
	4.5,
	- 0.5,
	- 0.5,
	- 1,
	- 1,
	- 1,
	- 1.5,
	5,
	5
];
zs[64] = 1.5,
	zs[65] = - 0.5,
	zs[66] = 0,
	zs[75] = - 0.5,
	zs[72] = 0.5;
const qs = {
	hq: 9,
	sl: 6,
	Ssh: 13,
	Sll: 9,
	Stx: 11,
	sc: 8,
	mc: 10,
	mb: 10,
	ABD: 15,
	BD: 10,
	SS: 9,
	S: 5,
	AS: 10,
	HC: 10,
	ES: 9,
	FT: 9,
	LFT: 13,
	xH: 9,
	fH: 7,
	LT: 8,
	LMT: 14,
	oH: 9,
	MT: 10,
	CC: 10,
	CC1: 14,
	HT: 9,
	RC: 10,
	RE: 10,
	RC1: 14,
	cC: 9,
	rb: 7,
	ta: 6,
	SC: 10,
	cb: 8,
	hcb: 10,
	lcb: 10,
	CC2: 14,
	vs: 9,
	RC2: 14,
	BG: 10,
	HBG: 16,
	LBG: 15,
	xC: 9,
	oC: 9,
	LC: 9,
	ht: 7,
	lt: 4,
	ha: 8,
	la: 6,
	ca: 8,
	ma: 10,
	SW: 11,
	LW: 10,
	SG: 10,
	LG: 10,
	cl: 6,
	WB: 14,
	HWB: 17,
	LWB: 16,
	xU: 9,
	oU: 9,
	xT: 8,
	oT: 9,
	Sh: 9,
	JB: 9,
	BT: 9,
	Cs: 9,
	xS: 9,
	oS: 9
},
	Us = [
		'hq',
		'sl',
		'Ssh',
		'Sll',
		'Stx',
		'sc',
		'mc',
		'mb',
		'BD',
		'BD',
		'SS',
		'S',
		'HC',
		'S',
		'FT',
		'xH',
		'FT',
		'fH',
		'LT',
		'oH',
		'MT',
		'MT',
		'CC',
		'HT',
		'RC',
		'cC',
		'rb',
		'ta',
		'SC',
		'cb',
		'CC',
		'vs',
		'RC',
		'BG',
		'BG',
		'xC',
		'oC',
		'LC',
		'ht',
		'lt',
		'ha',
		'la',
		'ca',
		'ma',
		'SW',
		'LW',
		'SG',
		'LG',
		'cl',
		'WB',
		'WB',
		'xU',
		'oU',
		'xT',
		'oT',
		'Sh',
		'JB',
		'BT',
		'Cs',
		'xS',
		'oS'
	];
function Ws(t, e) {
	return (e ? zs[t - 27] : Hs[t - 27]) || 0
}
Us[64] = 'SR',
	Us[65] = 'hH',
	Us[66] = 'RE',
	Us[72] = 'lcb',
	Us[75] = 'hcb';
class Vs {
	constructor(t, e, n) {
		this.beat = e,
			this.index = n,
			this.rest = t.rest,
			this.tie = t.tie,
			this.string = t.string || 0,
			this.fret = t.fret || 0,
			this.bend = t.bend,
			this.vibrato = t.vibrato,
			this.harmonic = t.harmonic,
			this.hp = t.hp,
			this.slide = t.slide,
			this.ghost = t.ghost,
			this.dead = t.dead,
			this.slideStart = null,
			this.slideEnd = null,
			this.slurStart = null,
			this.slurEnd = null,
			this.tieStart = null,
			this.tieEnd = null,
			this.bendStart = null,
			this.bendPart = null,
			this.bendEnd = null,
			this.prevNoteOnString = null,
			this.nextNoteOnString = null
	}
	get isVisible() {
		return !(!this.bendStart && !this.slurStart && this.tie && !this.ghost)
	}
	margin(t, e) {
		if (!this.isVisible) return 0;
		if (e && e.usedDrums) {
			const n = e.usedDrums.get(this.fret);
			if (n) {
				const e = n.name || 'S';
				return (qs[e] || 0) + t
			}
			return t
		}
		let n = 4;
		return this.dead ? n = 4 : this.fret >= 10 && (n = 8),
			this.ghost && (n += 5),
			n + t
	}
	drumString(t) {
		const e = t.get(this.fret);
		return e && e.string || 0
	}
}
const Gs = new Map,
	Xs = [
	],
	Ys = [
	];
class Zs {
	constructor(t, e, n, s) {
		this.index = e,
			this.strings = ms(t.instrumentId) ? s ? 5 : 6 : t.strings,
			this.frets = t.frets,
			this.tuning = t.tuning,
			this.voices = t.voices,
			this.name = t.name,
			this.automations = t.automations,
			this.measures = new Array(t.measures.length),
			this.instrument = t.instrument,
			this.instrumentId = t.instrumentId,
			this.name = t.name,
			this.artist = t.artist,
			this.title = t.title,
			this.capo = t.capo,
			this.tempos = Ys,
			this.timeline = Gs,
			this.shifts = Xs,
			this.timestamps = Xs,
			this.songId = t.songId,
			this.partId = t.partId,
			this.revisionId = t.revisionId,
			this.source = t,
			this.difficulty = null,
			this.sourceLyrics = n,
			this.withLyrics = t.withLyrics,
			this.usedDrums = ms(t.instrumentId) ? new Map : null,
			this.isDrumStdOn = s
	}
	hasTimeline() {
		return this.timeline !== Gs
	}
}
class Js {
	constructor(t) {
		this.startIndex = t.index,
			this.endIndex = 0,
			this.alternateEndings = new Map
	}
	addEnding(t, e) {
		this.alternateEndings.set(t, e.index)
	}
	getEnding(t) {
		return this.alternateEndings.get(t)
	}
}
class Ks {
	constructor(t, e, n) {
		const s = function (t, e, n) {
			const s = e.width,
				i = [
				];
			let a = new Ds(0, t, s);
			i.push(a),
				t.tuning && (a.width = 25);
			for (const e of t.measures) e.width + a.width > s && a.measures.length > 0 && (a = new Ds(i.length, t, s), i.push(a)),
				a.measures.push(e),
				e.layout.lineLayout = a.layout,
				e.layout.originX = a.width,
				e.layout.originWidth = e.width,
				a.width += e.width;
			let o = [
			],
				r = 0;
			const l = i.length,
				c = e.makeScaleStrategy(l);
			for (a of i) a.hangingText = o,
				a.layout.y = r,
				o = a.prepare(t, e, c, n),
				r += a.layout.height;
			return {
				lines: i,
				height: r
			}
		}(t, e, n);
		this.slicingMode = e,
			this.lines = s.lines,
			this.height = s.height
	}
}
class Qs {
	constructor(t) {
		this.tempo = {
			bpm: t.bpm,
			type: t.type,
			position: t.position || 0,
			linear: t.linear || !1,
			visible: t.visible || !1
		},
			this.measureOffset = 0,
			this.originMeasureOffset = 0
	}
}
class ti {
	constructor(t, e) {
		this.lyrics = !1,
			this.index = e,
			this.rest = t && t.rest || !1,
			this.beats = t && !this.rest ? new Array(t.beats.length) : [
			],
			this.hasSameRhythm = !t || t.hasSameRhythm || !1
	}
}
class ei extends class {
	constructor(t) {
		this.width = t
	}
	areBeatsInSameSlice(t, e) {
		return t.layout.stringY === e.layout.stringY
	}
	getBendCoordinates(t, e) {
		const n = t.firstRef().beat,
			s = t.lastRef(),
			i = s.note,
			a = i.nextNoteOnString,
			o = !!a && !!a.bendStart && !!a.tie,
			r = o ? s.beat.nextBeat : s.beat,
			l = ks(n, e.beat);
		return {
			x1: ks(n, n) - l,
			x2: ks(n, r, !o) - l - function (t) {
				const e = t.nextNoteOnString;
				return e && !e.tie ? 12 : 0
			}(i)
		}
	}
	bendsForNote(t) {
		const e = t.bendStart || t.bendPart || t.bendEnd;
		return e ? [
			e
		] : [
			]
	}
}
{
	calcTabSize(t) {
		return t.reduce(((t, e) => ({
			width: Math.max(e.width, t.width),
			height: t.height + e.height
		})), {
			width: 0,
			height: 0
		})
	}
	expectedSliceWidth(t) {
		return this.width
	}
	finalVerticalSeparatorPosition(t) {
		return null
	}
	getBendCoordinates(t, e) {
		const n = super.getBendCoordinates(t, e),
			s = n.x1;
		let i = n.x2;
		if (function (t) {
			const e = t.lastRef().beat,
				n = e.nextBeat ? e.nextBeat : e;
			return Ss(t.firstRef().beat, n)
		}(t)) {
			const e = t.firstRef().beat;
			i = e.layout.maxX - e.layout.absoluteX - 12
		}
		return {
			x1: s,
			x2: i
		}
	}
	getTieSlurPathLength(t, e, n = !1) {
		return this.areBeatsInSameSlice(t, e) ? e.layout.absoluteX - t.layout.absoluteX : n ? e.layout.absoluteX : t.layout.maxX - t.layout.absoluteX
	}
	makeScaleStrategy(t) {
		return e => e.index === t - 1 ? 1 : e.layout.maxX / e.width
	}
	normalizeBeatCoordinates(t) {
		for (const e of t) delete e.normalizationData
	}
	shouldDrawBendOnNote(t, e) {
		return !!e.bendStart && e.bendStart === t
	}
	stringLineMaxX(t) {
		return t.layout.maxX - 1
	}
}
ps([1,
	4]),
	ps([1,
		8]),
	ps([1,
		16]);
const ni = t => ps((t => t.split('/').map((t => + t)))(t));
[
	'1/4',
	'1/4',
	'1/4'
].map(ni),
	[
		'3/8',
		'3/8',
		'1/8'
	].map(ni),
	[
		'3/4',
		'1/4',
		'1/4'
	].map(ni),
	[
		'1/2',
		'1/4',
		'1/4'
	].map(ni),
	[
		'1/2',
		'1/4',
		'1/8'
	].map(ni),
	[
		'1/2',
		'1/4',
		'1/4'
	].map(ni),
	[
		'3/4',
		'3/4',
		'3/8'
	].map(ni);
const si = t => Rs.bpm / Rs.type * 960 / (t.bpm / t.type),
	ii = t => t / 960 * 60000 / Rs.bpm,
	ai = (t, e) => t * e * Rs.type;
function oi(t, e) {
	const n = t.get(e);
	if (!n) throw new Error('Broken timeline');
	return n
}
function ri(t, e) {
	return 2 * t + e
}
function li(t, e, n) {
	const {
		timeline: s,
		timestamps: i
	}
		= t,
		a = i[0],
		o = i[i.length - 1];
	if (e <= a) return oi(s, a);
	if (e >= o) return oi(s, o);
	let r = 0,
		l = i.length,
		c = 0,
		u = i[0];
	for (; l - r > 1;) {
		c = Math.floor((r + l) / 2);
		const t = i[c];
		if (e < t) l = c;
		else {
			if (!(e > t)) {
				u = t;
				break
			}
			r = c
		}
	}
	return u = l - r > 1 ? i['left' === n ? c : c - 1] : i[r],
		oi(s, u)
}
function ci(t, e) {
	let n = t.tempos[0];
	for (const s of t.tempos) {
		if (s.timestamp > e) break;
		n = s
	}
	return n ? n.tempo : Rs
}
function ui(t, e, n, s, i) {
	const a = n.measureLayout.measure.reprise,
		o = s.measureLayout.measure.reprise;
	let r = n.leftTime;
	const l = s.leftTime,
		c = s.firstLoopRightTime;
	!a || o && a.startIndex === o.startIndex || (r = n.rightTime);
	const u = r;
	let d = e;
	if (r > e || e >= c) {
		const n = li(t, e, 'left'),
			s = n.leftTime,
			a = n.rightTime;
		d = r <= s && s < c ? s : r <= a && a < c ? a : 'right' === i ? l : u
	}
	return {
		cursor: d,
		loopStart: r,
		loopEnd: c
	}
}
function di(t, e, n) {
	let s = t.measures[0];
	for (const n of t.measures) {
		if (n.layout.x > e) break;
		s = n
	}
	const i = s.beatsLayouts;
	let a = 0,
		o = i.length,
		r = 0,
		l = i[0];
	for (; o - a > 1;) {
		r = Math.floor((a + o) / 2),
			l = i[r];
		const t = l.absoluteX;
		if (t < e) a = r;
		else {
			if (!(t > e)) break;
			o = r
		}
	}
	if (o - a > 1) return l;
	{
		if (o === i.length) return i[a];
		const t = i[a],
			s = i[o],
			r = s.absoluteX - t.absoluteX,
			l = function (t) {
				switch (t) {
					case 'left':
						return 0.2;
					case 'right':
						return 0.8;
					default:
						return 0.5
				}
			}(n);
		return t.absoluteX + r * l > e ? t : s
	}
}
function hi(t, e, n) {
	let s = 0,
		i = t.lines.length,
		a = t.lines[0];
	for (; i - s > 1;) {
		const n = Math.floor((s + i) / 2),
			o = t.lines[n];
		if (e.y < o.layout.y) i = n;
		else {
			if (!(e.y > o.layout.maxY)) {
				a = o;
				break
			}
			s = n
		}
	}
	return di(a, e.x, n)
}
const pi = new Map;
function fi(t, e) {
	let n = pi.get(t);
	return n || (n = 130 * Math.log(fs(t) + 1) + 20, pi.set(t, n)),
		e ? 0.2 * n : n
}
function mi(t) {
	t.layout.usedRest = !0
}
function gi(t, e) {
	e.rest || (t.layout.usedStrings |= 1 << e.string)
}
function yi(t, e) {
	var n;
	ms(t.instrumentId) && t.usedDrums && t.usedDrums.set(e.fret, (n = e.fret, {
		string: e.string,
		name: Us[n - 27] || '*',
		fret: n
	}))
}
function vi(t, e, n, s) {
	const i = t.hp || 'legato' === t.slide,
		a = s[t.string];
	!a || i || t.tie || (a.addRef({
		note: t,
		beat: e,
		measure: n
	}), a.firstRef().note.slurStart = a, a.lastRef().note.slurEnd = a, s[t.string] = void 0),
		!a && i && (s[t.string] = new _s({
			note: t,
			beat: e,
			measure: n
		}))
}
function wi(t, e, n, s) {
	const i = 'legato' === t.slide || 'shift' === t.slide,
		a = s[t.string];
	a && !t.tie && (a.addRef({
		note: t,
		beat: e,
		measure: n
	}), a.firstRef().note.slideStart = a, a.lastRef().note.slideEnd = a, s[t.string] = void 0),
		i && (s[t.string] = new _s({
			note: t,
			beat: e,
			measure: n
		}))
}
function bi(t, e, n, s) {
	const i = s.get(t.string);
	if (!i && t.bend && t.tie && 0 === t.bend.points[0].tone && (t.ghost = !0), i && !t.bend && t.tie && (i.keep = !0, i.addRef({
		note: t,
		beat: e,
		measure: n
	})), i && (t.bend || !t.bend && !t.tie)) {
		i.firstRef().note.bendStart = i;
		for (let t = 1; t < i.refs.length - 1; t++) i.refs[t].note.bendPart = i;
		i.lastRef().note.bendEnd = i,
			s.delete(t.string)
	}
	t.bend && s.set(t.string, new _s({
		note: t,
		beat: e,
		measure: n
	}))
}
function xi(t, e, n) {
	for (const [t,
		e] of n.entries()) if (e.keep) e.keep = !1;
		else {
			e.firstRef().note.bendStart = e;
			for (let t = 1; t < e.refs.length - 1; t++) e.refs[t].note.bendPart = e;
			e.lastRef().note.bendEnd = e,
				n.delete(t)
		}
}
function Si(t, e, n, s) {
	const i = s[t.string];
	i ? t.tie ? (i.addRef({
		note: t,
		beat: e,
		measure: n
	}), i.firstRef().note.tieStart = i, i.lastRef().note.tieEnd = i, s[t.string] = new _s({
		note: t,
		beat: e,
		measure: n
	})) : i.reset({
		note: t,
		beat: e,
		measure: n
	}) : s[t.string] = new _s({
		note: t,
		beat: e,
		measure: n
	})
}
function ki(t, e) {
	const n = t.string,
		s = e[n];
	s && (s.nextNoteOnString = t, t.prevNoteOnString = s),
		e[n] = t
}
function Ci(t, e) {
	if (t.repeatStart && (e = {
		lastReprise: new Js(t),
		inReprise: !0
	}), t.alternateEnding) {
		if (e && e.lastReprise) {
			t.reprise = e.lastReprise;
			for (const n of t.alternateEnding.alternateEnding) e.lastReprise.addEnding(n, t)
		}
	} else e && e.inReprise && (t.reprise = e.lastReprise);
	if (t.repeat) {
		if (!e || !e.lastReprise) throw Error('Broken ending of reprise');
		e.lastReprise.endIndex = t.index,
			e.inReprise = !1
	}
	return e
}
const _i = [
	{
		duration: [
			1,
			1
		],
		type: 1,
		rest: !0,
		notes: [
			{
				rest: !0
			}
		]
	}
];
function Ei(t, e) {
	const n = function (t) {
		return t.hasSignature ? 50 : 15
	}(t);
	for (const i of e.filter((e => + e.measure == + t.index + 1))) {
		const e = (s = i.position, Math.floor(11531520 * s));
		let a = t.tempoLayoutsByTime.get(e);
		a || (a = new Qs(i), a.measureOffset = n, a.originMeasureOffset = n, t.tempoLayoutsByTime.set(e, a))
	}
	var s;
	t.tempoLayoutsTimes = [
		...t.tempoLayoutsByTime.keys()
	].sort(((t, e) => t - e)),
		t.tempoLayouts = t.tempoLayoutsTimes.reduce(((e, n) => {
			const s = t.tempoLayoutsByTime.get(n);
			return s && e.push(s),
				e
		}), [
		])
}
function Ni(t, e) {
	const n = t.beatsLayoutsByTime;
	let s = function (t) {
		return t.hasSignature ? 60 : 25
	}(t);
	const i = [
		...n.keys()
	].sort(((t, e) => t - e));
	t.beatsLayoutsTimes = i;
	let a = 0,
		o = n.get(0);
	const r = t.rest && !(e && e[t.index] && e[t.index].beats.length > 0);
	if (o) {
		t.beatsLayouts[0] = o;
		for (let e = 1; e < i.length; e++) {
			const l = i[e],
				c = n.get(l);
			c && (o.x = s, o.originX = s, s += fi(l - a, r), t.beatsLayouts[e] = c, a = l, o = c)
		}
		o.x = s,
			o.originX = s,
			s += fi(t.duration - a, r);
		const e = t.marker ? t.marker.width : 0;
		t.width = Math.ceil(Math.max(t.width, s, e))
	}
}
const Li = {
	useStdDrumNotation: !1
},
	Ti = Pn && window.performance && window.performance.now ? window.performance.now.bind(window.performance) : Date.now;
function Ii(t, e) {
	let n;
	return () => {
		clearTimeout(n),
			n = setTimeout((() => t.apply(this, arguments)), e)
	}
}
function Ai(t, e) {
	let n = !1;
	return () => {
		n || (t.call(), n = !0, setTimeout((function () {
			n = !1
		}), e))
	}
}
const Pi = [
	'scroll',
	'keydown',
	'click',
	'mousemove',
	'mousedown'
],
	Mi = new class {
		constructor() {
			this.trackActivity = Ai((() => {
				this.lastActivityTimestampMs = Ti()
			}), 200),
				Pn && (this.reset(), this.engage())
		}
		engage() {
			for (const t of Pi) window.addEventListener(t, this.trackActivity)
		}
		disengage() {
			for (const t of Pi) window.removeEventListener(t, this.trackActivity)
		}
		reset() {
			this.setIsActive(!1)
		}
		setIsActive(t) {
			!this.isActive && t ? this.disengage() : this.isActive && !t && this.engage(),
				this.lastActivityTimestampMs = Ti(),
				this.isActive = t
		}
		getTimeSinceLastActivity() {
			return this.isActive ? 0 : Math.round((Ti() - this.lastActivityTimestampMs) / 60000)
		}
	};
function Bi(t = 21) {
	for (var e = ''; t-- > 0;) e += 'bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz'[64 * Math.random() | 0];
	return e
}
function Di(t, e) {
	let n;
	for (n = e; t > 1; t--) n += e;
	return n
}
const Oi = Pn && window.performance || {
	offset: Date.now(),
	now: function () {
		return Date.now() - this.offset
	}
};
function Ri(t) {
	return t / 1000
}
class ji {
	constructor(t) {
		this.onMessage = t => {
			try {
				const e = t.data.message;
				t.data.timestampMs && t.data.timestampMs,
					null != t.data.index && t.data.index,
					null != t.data.url && t.data.url,
					'worker/packet' === e ? this.onPacket(t.data) : 'worker/error' === e ? this.onError(t.data) : t.data.url === this.state.url && ('worker/load' === e ? this.onLoad(t.data) : 'worker/loaded' === e ? this.onLoaded(t.data) : 'worker/opened' === e ? this.onOpened(t.data) : 'worker/empty' === e && this.onEmpty(t.data))
			} catch (t) {
				console.error(t),
					this.callback.onError(t)
			}
		},
			this.state = {
				speed: 100,
				pitchShift: 0,
				cursor: 0,
				loopStart: 0,
				loopEnd: 0,
				type: 'focus',
				isPlaying: !1,
				isCountIn: !1,
				url: ''
			};
		try {
			let t = new window.AudioContext;
			if (44100 !== t.sampleRate && 48000 !== t.sampleRate) {
				const e = t.createBufferSource();
				e.buffer = t.createBuffer(1, 1, 48000),
					e.connect(t.destination),
					e.start(0),
					'close' in t && t.close(),
					t = new window.AudioContext
			}
			t.onstatechange = () => {
				console.log(`Audio context changed state to ${this.context.state}, isPlaying: ${this.state.isPlaying}, sample rate ${this.context.sampleRate}`)
			},
				this.context = t,
				this.freezeCheckSampleRate = this.context.sampleRate
		} catch (t) {
			console.error(t),
				console.log('There is no audio context'),
				this.context = null
		}
		window.Worker && (this.worker = new Worker('/static/WebWorker.95a425cf.js'), this.worker.onmessage = this.onMessage, this.worker.onerror = t.onError),
			this.callback = t,
			this.buffers = [
				null,
				null,
				null,
				null,
				null
			],
			this.sources = [
				null,
				null,
				null,
				null,
				null
			],
			this.reuseIndex = 0,
			this.startedTime = null,
			this.token = '',
			this.countinDuration = 0,
			this.workerTs = 0,
			this.workerDelay = 0,
			this.hack = function () {
				try {
					const t = document.createElement('div');
					t.innerHTML = '<audio x-webkit-airplay=\'deny\'></audio>';
					const e = t.children.item(0);
					return e.disableRemotePlayback = !0,
						e.controls = !1,
						e.src = 'data:audio/mpeg;base64,//uQx' + Di(23, 'A') + 'WGluZwAAAA8AAAACAAACcQCA' + Di(16, 'gICA') + Di(66, '/') + '8AAABhTEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB9AAAAnGMHkkI' + Di(320, 'A') + '//sQxAADgnABGiAAQBCqgCRMAAgEAH' + Di(15, '/') + '7+n/9FTuQsQH//////2NG0jWUGlio5gLQTOtIoeR2WX////X4s9Atb/JRVCbBUpeRUq' + Di(18, '/') + '9RUi0f2jn/+xDECgPCjAEQAABN4AAANIAAAAQVTEFNRTMuMTAw' + Di(97, 'V') + 'Q==',
						e.loop = !0,
						e.load(),
					{
						play() {
							try {
								const t = e.play();
								t && t.then((() => {
									'mediaSession' in navigator && (navigator.mediaSession.playbackState = 'playing')
								}), (t => console.warn('Hack play failed', t)))
							} catch (t) {
								console.error(t)
							}
						},
						pause() {
							try {
								const t = e.pause();
								t && t.then((() => {
								}), (t => console.warn('Hack pause failed', t))),
									'mediaSession' in navigator && (navigator.mediaSession.playbackState = 'paused')
							} catch (t) {
								console.error(t)
							}
						}
					}
				} catch (t) {
					return console.error(t),
						null
				}
			}(),
			this.noSound = !1,
			this.marginIssueReported = !1,
			this.workerStarted = !1,
			this.hasSingleTrack = !1
	}
	get shouldUseWorker() {
		return this.context && this.worker && !this.noSound && !('mute' === this.state.type && this.hasSingleTrack)
	}
	resumeContext() {
		const t = this.context;
		t && 'running' !== t.state && 'resume' in t && (console.info('Resume context', t.state), t.resume().catch(console.error.bind(console)))
	}
	createAudioBuffers(t, e) {
		const n = 1.02 * e;
		for (let s = 0; s < this.buffers.length; s++) {
			const i = this.buffers[s];
			i && i.numberOfChannels === t && i.sampleRate === e && i.length === n || (this.buffers[s] = this.context.createBuffer(t, n, e))
		}
	}
	onOpened(t) {
		this.createAudioBuffers(t.channels, t.sampleRate),
			this.callback.onOpened(t)
	}
	onEmpty(t) {
		this.callback.onEmpty(t)
	}
	onLoad(t) {
		this.callback.onLoad(t)
	}
	onLoaded(t) {
		this.noSound = !1,
			this.callback.onLoaded(t)
	}
	onError(t) {
		this.noSound = !0,
			this.callback.onError(t.error, t.isNetworkError)
	}
	onPacket(t) {
		if (!this.state.isPlaying) return;
		if (this.token !== t.token) return;
		const e = this.context;
		if (e.sampleRate !== this.freezeCheckSampleRate) return console.warn('SampleRate has changed', e.sampleRate, this.freezeCheckSampleRate),
			void this.callback.onFreeze();
		this.reuseIndex = (this.reuseIndex + 1) % this.buffers.length;
		const n = this.buffers[this.reuseIndex];
		if (n.copyToChannel ? (n.copyToChannel(t.buffer0, 0), t.buffer1 && n.copyToChannel(t.buffer1, 1)) : (n.getChannelData(0).set(t.buffer0), t.buffer1 && n.getChannelData(1).set(t.buffer1)), !this.gain) {
			const t = e.createGain();
			t.gain.value = 1,
				t.connect(e.destination),
				this.gain = t
		}
		const s = e.createBufferSource();
		s.buffer = n,
			s.connect(this.gain),
			this.sources[this.reuseIndex] = s;
		let i = 0;
		if (null !== this.startedTime) {
			i = this.startedTime + Ri(t.timestampMs);
			const n = i - e.currentTime;
			n < 0.2 && (console.log('Ahead of time schedule margin', n), console.info(`Sound generation delay ${this.workerDelay}ms`)),
				!this.marginIssueReported && t.timestampMs > 2000 && (n < 0 && console.log('Ahead of time schedule margin is negative', n), n >= 0 && n < 0.2 && console.log('Ahead of time schedule margin is too small', n), this.marginIssueReported = !0)
		} else i = e.currentTime + 0.05,
			this.startedTime = i,
			this.workerDelay = Math.floor(Oi.now() - this.workerTs),
			console.info(`Sound generation delay ${this.workerDelay}ms`),
			function (t, e) {
				if (t) throw new Error(e)
			}(0 !== t.timestampMs, `Got initial audio packet with unexpected timestamp ${t.timestampMs}`);
		s.start(i, 0, Ri(t.durationMs))
	}
	play() {
		this.resumeContext(),
			this.marginIssueReported = !1,
			this.shouldUseWorker ? this.worker.postMessage([this.startGenerateSoundPackets()]) : this.startWithoutSound(),
			this.state = Object.assign({
			}, this.state, {
				isPlaying: !0
			})
	}
	getWorkerPosition() {
		let {
			cursor: t,
			loopStart: e,
			loopEnd: n
		}
			= this.state;
		return this.state.speed < 100 && this.correctTimestampFor50Timeline && (t = this.correctTimestampFor50Timeline(t), e = this.correctTimestampFor50Timeline(e), n = this.correctTimestampFor50Timeline(n)),
		{
			cursor: t,
			loopStart: e,
			loopEnd: n
		}
	}
	pause() {
		return this.turnOffSound(),
			this.state.isPlaying && (this.state = Object.assign({
			}, this.state, {
				isPlaying: !1
			}), this.workerStarted && (this.workerStarted = !1, this.worker.postMessage([{
				message: 'worker/stopGenerate'
			},
			{
				message: 'worker/seek',
				position: this.getWorkerPosition()
			}
			]))),
			this.state.cursor
	}
	turnOffSound() {
		if (this.state.isPlaying) {
			const t = this.gain;
			if (t) {
				t.gain.setValueAtTime(1, this.context.currentTime),
					t.gain.linearRampToValueAtTime(0.0001, this.context.currentTime + 0.01),
					this.gain = null;
				for (const t of this.sources) t && setTimeout((t => () => {
					try {
						t.stop()
					} catch (t) {
					}
				})(t), 20);
				this.sources.fill(null)
			}
			this.state = Object.assign({
			}, this.state, {
				cursor: this.getCursor()
			}),
				this.startedTime = null,
				this.hack && this.hack.pause()
		}
	}
	seek(t, e, n) {
		this.turnOffSound(),
			this.state = Object.assign({
			}, this.state, {
				cursor: t,
				loopStart: e,
				loopEnd: n
			}),
			this.shouldUseWorker ? this.worker.postMessage([{
				message: 'worker/seek',
				position: this.getWorkerPosition()
			},
			this.state.isPlaying && this.startGenerateSoundPackets()]) : this.state.isPlaying && this.startWithoutSound()
	}
	speed(t) {
		return this.turnOffSound(),
			this.state = Object.assign({
			}, this.state, {
				speed: t
			}),
			this.shouldUseWorker ? this.worker.postMessage([{
				message: 'worker/setSpeed',
				speed: t
			},
			{
				message: 'worker/seek',
				position: this.getWorkerPosition()
			},
			this.state.isPlaying && this.startGenerateSoundPackets()]) : this.state.isPlaying && this.startWithoutSound(),
			this.state.cursor
	}
	type(t) {
		this.state = Object.assign({
		}, this.state, {
			type: t
		})
	}
	pitch(t) {
		return this.turnOffSound(),
			this.state = Object.assign({
			}, this.state, {
				pitchShift: t
			}),
			this.shouldUseWorker ? this.worker.postMessage([{
				message: 'worker/setPitch',
				pitchShift: t
			},
			{
				message: 'worker/seek',
				position: this.getWorkerPosition()
			},
			this.state.isPlaying && this.startGenerateSoundPackets()]) : this.state.isPlaying && this.startWithoutSound(),
			this.state.cursor
	}
	startWithoutSound() {
		this.updateCountIn(),
			this.startedTime = Oi.now() / 1000
	}
	updateCountIn() {
		let t = null;
		if (this.countinDuration = 0, this.state.isCountIn) {
			t = this.findBpmAndBeatByTimestamp(this.state.cursor);
			const e = 48000;
			this.countinDuration = Math.floor(60 / t.bpm * t.beat * 100 / this.state.speed * e) / e
		}
		return t
	}
	startGenerateSoundPackets() {
		return this.hack && this.hack.play(),
			this.token = Bi(),
			this.workerTs = Oi.now(),
			this.workerStarted = !0,
		{
			message: 'worker/startGenerate',
			token: this.token,
			countIn: this.updateCountIn()
		}
	}
	reset(t, e, n, s) {
		this.turnOffSound();
		const i = this.state.isPlaying;
		this.state = Object.assign({
		}, this.state, {
			cursor: t.cursor,
			loopStart: t.loopStart,
			loopEnd: t.loopEnd,
			speed: e,
			pitchShift: n,
			isPlaying: !1,
			isCountIn: s
		}),
			this.token = Bi(),
			this.shouldUseWorker && this.worker.postMessage([i && {
				message: 'worker/stopGenerate'
			},
			{
				message: 'worker/reset'
			},
			{
				message: 'worker/setSpeed',
				speed: e
			},
			{
				message: 'worker/setPitch',
				pitchShift: n
			},
			{
				message: 'worker/seek',
				position: this.getWorkerPosition()
			}
			])
	}
	setBuffer(t, e) {
		this.state.url = e,
			this.worker.postMessage([{
				message: 'worker/setBuffer',
				buffer0: t.getChannelData(0),
				buffer1: t.numberOfChannels > 1 ? t.getChannelData(1) : null,
				sampleRate: t.sampleRate,
				url: e
			},
			{
				message: 'worker/seek',
				position: this.getWorkerPosition()
			},
			this.state.isPlaying && this.startGenerateSoundPackets()])
	}
	open(t) {
		this.state.url = t,
			this.worker.postMessage([{
				message: 'worker/open',
				url: t
			},
			{
				message: 'worker/seek',
				position: this.getWorkerPosition()
			}
			])
	}
	clearBuffer() {
		this.shouldUseWorker && this.worker.postMessage([{
			message: 'worker/clearBuffer'
		}
		])
	}
	setCountin(t) {
		this.state = Object.assign({
		}, this.state, {
			isCountIn: t
		})
	}
	getCursor() {
		const {
			state: t
		}
			= this;
		if (t.isPlaying && null !== this.startedTime) {
			const e = 1000 * Math.max(this.passed(), 0);
			let n = (e > 0 ? e * (t.speed / 100) : 0) + t.cursor;
			return t.loopEnd && n > t.loopEnd && (n = t.loopStart + (n - t.loopStart) % (t.loopEnd - t.loopStart)),
				n
		}
		return t.cursor
	}
	getActualPosition() {
		return {
			cursor: this.getCursor(),
			loopStart: this.state.loopStart,
			loopEnd: this.state.loopEnd
		}
	}
	get isPlaying() {
		return this.state.isPlaying
	}
	passed() {
		const {
			context: t,
			startedTime: e,
			countinDuration: n
		}
			= this;
		return null === e ? 0 : this.shouldUseWorker ? (t => 'getOutputTimestamp' in t ? t.getOutputTimestamp().contextTime : t.currentTime)(t) - e - n : Oi.now() / 1000 - e - n
	}
	isPositionChanged() {
		return this.state.isPlaying && this.passed() > 0
	}
}
async function $i(t) {
	if (t.get().user.hasPlus) return import('//www.songsterr.com/static/playerPlus.c4f11aa0.js')
}
async function Fi(t) {
	const e = t.get();
	if (e.demo.enabled && 27 === e.data.songId) return import('//www.songsterr.com/playerDemo.17956f3a.js')
}
function Hi(t, e) {
	t('player/changeLoop', e)
}
async function zi(t, e) {
	try {
		let n = await $i(t);
		if (n && n.demo && !n.demo()) return n.plusChangeSpeed(t, e);
		if (n = await Fi(t), n) return n.demoChangeSpeed(t, e)
	} catch (t) {
		console.error(t)
	}
}
async function qi(t, e) {
	try {
		let n = await $i(t);
		if (n && n.demo && !n.demo()) return n.plusChangePitch(t, e);
		if (n = await Fi(t), n) return n.demoChangePitch(t, e)
	} catch (t) {
		console.error(t)
	}
}
function Ui(t, {
	enabled: e = !1
}) {
	t('player/suspend', 'fullscreen'),
		t('screen/toggleFullscreen', {
			enabled: e
		}),
		t('player/resume', 'fullscreen')
}
async function Wi(t, e) {
	try {
		let n = await $i(t);
		if (n && n.demo && !n.demo()) return n.plusChangeType(t, e);
		if (n = await Fi(t), n) return n.demoChangeType(t, e)
	} catch (t) {
		console.error(t)
	}
}
function Vi(t, e) {
	return t === e || t.cursor === e.cursor && t.loopStart === e.loopStart && t.loopEnd === e.loopEnd
}
const Gi = {
	bpm: 72,
	type: 4,
	position: 0
},
	Xi = t => ({
		player: Object.assign({
		}, t.player, {
			isAudioFailed: !1,
			isAudioNetworkFailed: !1
		})
	}),
	Yi = t => {
		!Pn && t.on('@init', (() => ({
			player: {
				audio: null,
				part: null,
				shouldPlay: !1,
				canPlay: !1,
				isLoopChanging: !1,
				isCountin: !1,
				position: {
					cursor: 0,
					loopStart: 0,
					loopEnd: 0
				},
				type: 'focus',
				pitchShift: 0,
				speed: 100,
				tempo: Gi,
				locks: [
				],
				playbackAvailable: !0,
				webworkerOperational: !0,
				isAudioFailed: !1,
				isAudioNetworkFailed: !1
			}
		}))),
			Pn && t.on('data/loadSong:processing', ((t, {
				songId: e,
				partId: n,
				revisionId: s
			}) => {
				if (t.data.songId !== e) {
					const e = {
						cursor: 0,
						loopEnd: 0,
						loopStart: 0
					},
						n = t.player.isCountin;
					return t.player.audio && t.player.audio.reset(e, 100, 0, n),
					{
						player: Object.assign({
						}, t.player, {
							part: null,
							shouldPlay: !1,
							isCountin: n,
							position: e,
							type: 'focus',
							pitchShift: 0,
							speed: 100,
							isAudioFailed: !1,
							isAudioNetworkFailed: !1
						})
					}
				}
				return t.player.audio.pause(),
					Xi(t)
			}));
		const e = (t, {
			meta: e
		}) => {
			t.player.audio.hasSingleTrack = !e.tracks || 1 === e.tracks.length
		};
		function n(t, e) {
			const {
				audio: n,
				shouldPlay: s
			}
				= t.player,
				i = t.player.locks;
			if (i.includes(e) || i.push(e), t.player.canPlay) {
				const e = Object.assign({
				}, t.player, {
					canPlay: !1
				});
				return s && n.isPlaying && (n.pause(), e.position = n.getActualPosition()),
				{
					player: e
				}
			}
		}
		function s(t, e) {
			const {
				audio: n,
				shouldPlay: s,
				locks: i
			}
				= t.player;
			Array.isArray(e) || (e = [
				e
			]);
			for (const t of e) {
				const e = i.findIndex((e => e === t));
				- 1 !== e && i.splice(e, 1)
			}
			const a = !i.length;
			if (!t.player.canPlay && a) return s && !n.isPlaying && n.play(),
			{
				player: Object.assign({
				}, t.player, {
					canPlay: a
				})
			}
		}
		Pn && t.on('data/loadSong:loadedMeta', e),
			Pn && t.on('data/loadSong:reuseMeta', e),
			t.on('data/loadSong:inflate', ((t, {
				part: e
			}) => {
				if (!Pn) return {
					player: Object.assign({
					}, t.player, {
						part: e
					})
				};
				t.player.audio.correctTimestampFor50Timeline = t => function (t, e) {
					if (0 === e) return 0;
					const {
						timestamps: n
					}
						= t,
						s = n[n.length - 1];
					if (e <= 0) return ri(e, t.shifts[0] || 0);
					if (e >= s) return ri(e, t.shifts[n.length - 1] || 0);
					let i = 0,
						a = n.length,
						o = 0,
						r = 0;
					for (; a - i > 1;) {
						o = Math.floor((i + a) / 2);
						const t = n[o];
						if (e < t) a = o;
						else {
							if (!(e > t)) {
								r = o;
								break
							}
							i = o
						}
					}
					return r = i,
						ri(e, t.shifts[r] || 0)
				}(e, t),
					t.player.audio.findBpmAndBeatByTimestamp = t => function (t, e) {
						if (!t) return console.error('Broken or empty Part. Count In doest\'t work.'),
						{
							bpm: 0,
							beat: 0
						};
						const n = li(t, e, 'left');
						return {
							bpm: t.tempos[0].tempo.bpm,
							beat: n.measureLayout.measure.signature[0]
						}
					}(e, t);
				const n = ci(e, t.player.position.cursor);
				return {
					player: Object.assign({
					}, t.player, {
						part: e,
						tempo: n
					})
				}
			})),
			t.on('player/open', (t => n(t, 'playerOpen'))),
			t.on('player/open', ((t, {
				url: e
			}) => (t.player.audio.open(e), Xi(t)))),
			t.on('player/opened', (t => s(t, 'playerOpen'))),
			t.on('player/load', (t => n(t, 'playerLoad'))),
			t.on('player/load', Xi),
			t.on('player/loaded', (t => s(t, 'playerLoad'))),
			t.on('player/loaded', Xi),
			t.on('player/empty', (t => n(t, 'playerLoad'))),
			t.on('player/error', ((t, {
				isNetworkError: e
			}) => ({
				player: Object.assign({
				}, t.player, {
					isAudioFailed: !0,
					isAudioNetworkFailed: e
				})
			}))),
			t.on('player/error', (t => s(t, [
				'playerOpen',
				'playerLoad'
			]))),
			t.on('player/init', ((t, {
				audio: e,
				playbackAvailable: n
			}) => ({
				player: Object.assign({
				}, t.player, {
					audio: e,
					playbackAvailable: n
				})
			}))),
			t.on('player/moveCursor', ((t, e) => {
				t.player.audio.seek(e.cursor, e.loopStart, e.loopEnd);
				const n = t.player.part ? ci(t.player.part, e.cursor) : t.player.tempo;
				return {
					player: Object.assign({
					}, t.player, {
						position: e,
						tempo: n
					})
				}
			})),
			t.on('player/togglePlay', ((t, e) => {
				const n = null != e ? e : !t.player.shouldPlay;
				Pn && Mi.setIsActive(n);
				const s = Object.assign({
				}, t.player, {
					shouldPlay: n
				}),
					{
						audio: i,
						canPlay: a
					}
						= t.player;
				return n && i.resumeContext(),
					a && n ? !i.isPlaying && i.play() : i.isPlaying && (i.pause(), s.position = i.getActualPosition()),
				{
					player: s
				}
			})),
			t.on('player/changeLoop', ((t, e) => ({
				player: Object.assign({
				}, t.player, {
					isLoopChanging: e
				})
			}))),
			t.on('player/toggleLoop', (t => {
				const e = t.player.audio,
					n = 0 !== t.player.position.loopEnd,
					s = e.getCursor(),
					i = Object.assign({
					}, t.player, {
						position: {
							cursor: s,
							loopStart: 0,
							loopEnd: 0
						}
					});
				if (!n && t.player.part) {
					const e = function (t, e) {
						const n = li(t, e, 'left').measureLayout.measure.beatsLayouts;
						return {
							loopStart: n[0].loopLeftTime,
							loopEnd: n[n.length - 1].firstLoopRightTime
						}
					}(t.player.part, s);
					i.position.loopStart = e.loopStart,
						i.position.loopEnd = e.loopEnd
				}
				return e.seek(i.position.cursor, i.position.loopStart, i.position.loopEnd),
				{
					player: i
				}
			})),
			t.on('player/changeSpeed', ((t, {
				speed: e
			}) => {
				const {
					audio: n
				}
					= t.player;
				return n.speed(e),
				{
					player: Object.assign({
					}, t.player, {
						speed: e
					})
				}
			})),
			t.on('player/changePitch', ((t, e) => {
				const {
					audio: n
				}
					= t.player;
				return n.pitch(e),
				{
					player: Object.assign({
					}, t.player, {
						pitchShift: e
					})
				}
			})),
			t.on('player/changeType', ((t, {
				type: e
			}) => {
				const {
					audio: n
				}
					= t.player;
				return n.type(e),
				{
					player: Object.assign({
					}, t.player, {
						type: e
					})
				}
			})),
			t.on('player/suspend', n),
			t.on('player/resume', s),
			t.on('player/tempoApply', ((t, e) => ({
				player: Object.assign({
				}, t.player, {
					tempo: e
				})
			}))),
			t.on('player/toggleCountIn', (t => {
				const e = Object.assign({
				}, t.player, {
					isCountin: !t.player.isCountin
				});
				return e.audio.setCountin(e.isCountin),
				{
					player: e
				}
			})),
			t.on('user/signOut', (e => {
				!async function (t) {
					try {
						(await import('//www.songsterr.com/static/playerPlus.c4f11aa0.js')).plusRestoreDefaults(t)
						//
					} catch (t) {
						console.error(t)
					}
				}(t)
			})),
			Pn && t.on('navigate', (t => t.route.isPanel ? n(t, 'isPanel') : s(t, 'isPanel')))
	},
	Zi = [
		4,
		10,
		16,
		21
	];
function Ji({
	x: t = 0,
	maxX: e = 0,
	y: n = 0,
	num: s,
	isAnnotate: i = !1,
	openAnnotation: a
}) {
	const o = Zi[s.toString().length - 1],
		r = !i && o + 67 + 7 > e,
		l = `add-${s}`,
		c = i ? s : `${s} Add${r ? '' : ' comment'}`;
	return v(S, null, v('path', {
		key: 'path',
		className: i ? 'Ca91rg' : 'Ca9117',
		'data-annot-num': s,
		'data-has-annotation': i,
		'aria-labelledby': l,
		onClick: a,
		d: `M${t + 7} ${n + 13}l-2 3-2-3c-2 0-3-1-3-3v-7c0-2 1-3 3-3h${i ? o : o + (r ? 22 : 67)}c2 0 3 1 3 3v7c0 2-1 3-3 3z`
	}), v('text', {
		key: 'text',
		className: 'Ca92q3',
		x: t + 2.4,
		y: n + 10,
		id: l
	}, c))
}
function Ki(t) {
	return t.layout.y + t.layout.layers.height - 18
}
function Qi({
	lines: t,
	part: e
}) {
	const {
		dispatch: n,
		annotations: s
	}
		= On('annotations'),
		i = e ? s.parts && s.parts[e.partId] || [
		] : null;
	if (!i) return;
	const a = t => {
		n('annotations/toggle', t.target.getAttribute('data-annot-num'))
	};
	return v(S, null, t.map((t => t.measures.map((e => v(Ji, {
		key: e.index,
		isAnnotate: void 0 !== i[e.index + 1],
		x: e.layout.x + 2,
		y: Ki(t),
		maxX: e.layout.width,
		num: e.index + 1,
		openAnnotation: a
	}))))))
}
var ta = Rn(class extends x {
	componentDidCatch(t) {
		console.error(t),
			this.props.dispatch('data/errorCursor')
	}
	render() {
		return this.props.isCursorFailed ? null : this.props.children
	}
}, 'isCursorFailed');
const ea = 'M.5 36h-1.5l3-10.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25',
	na = 'c1.25-.25 2.75-2.25 3-2.75h1z',
	sa = 'c.7-.25 1.25-.5 2-1.5l1.5-5.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25',
	ia = `${ea}${na}`,
	aa = `${ea}${sa}${na}`,
	oa = `${ea}${sa}${sa}${na}`,
	ra = `${ea}${sa}${sa}${sa}${na}`,
	la = `${ea}${sa}${sa}${sa}${sa}${na}`,
	ca = 'M10.8 0a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 12.4 0z',
	ua = `${ca}M0-4l9 8m0-8l-9 8`,
	da = `${ca}M9-4L0 4`,
	ha = 'M9.2-3c1 1.9-.4 4.1-2.9 5.4-2.4 1.3-4.9 1.2-6-.8-1-1.9.4-4.3 2.9-5.5 2.4-1.3 4.9-1 6 .9z',
	pa = `${ha}M-3-6L12 5`;
class fa extends x {
	render() {
		const t = this.props.part.strings <= 4 ? 12 : 0,
			e = 0 !== t ? `translate(0, ${- t})` : void 0,
			n = [
				v('ellipse', {
					id: 'dot',
					cx: 10,
					cy: 17.5 - t,
					rx: 1.5,
					ry: 1.5
				}),
				v('rect', {
					id: 'rest1',
					y: 24 - t,
					x: - 6,
					width: 12,
					height: 6
				}),
				v('rect', {
					id: 'rest2',
					y: 18 - t,
					x: - 6,
					width: 12,
					height: 6
				}),
				v('path', {
					id: 'rest4',
					transform: e,
					d: 'M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z'
				}),
				v('path', {
					id: 'rest8',
					transform: e,
					d: ia
				}),
				v('path', {
					id: 'rest16',
					transform: e,
					d: aa
				}),
				v('path', {
					id: 'rest32',
					transform: e,
					d: oa
				}),
				v('path', {
					id: 'rest64',
					transform: e,
					d: ra
				}),
				v('path', {
					id: 'rest128',
					transform: e,
					d: la
				}),
				v('path', {
					id: 'tempo',
					d: 'M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z'
				})
			];
		return v('defs', {
		}, this.props.part.usedDrums ? [
			...n,
			v('path', {
				id: 'drumCross',
				d: 'M0-4l9 8m0-8l-9 8'
			}),
			v('path', {
				id: 'drumHat',
				d: 'M-2-7l6.5-4l6.5 4',
				style: 'fill: none'
			}),
			v('path', {
				id: 'drumHatEdge',
				d: 'M-2-7h8l5 -5',
				style: 'fill: none'
			}),
			v('path', {
				id: 'drumTriangle',
				d: 'M0 3l4.7-7 4.7 7z'
			}),
			v('path', {
				id: 'drumRhomb',
				d: 'M5-4.5l5 4-5 4-5-4 5-4z'
			}),
			v('path', {
				id: 'drumCircleCross',
				d: ua,
				style: 'fill: none'
			}),
			v('path', {
				id: 'drumCircleStroke',
				d: da,
				style: 'fill: none'
			}),
			v('path', {
				id: 'drum',
				d: ha
			}),
			v('path', {
				id: 'drumStroke',
				d: pa
			})
		] : n)
	}
}
const ma = (t, e, n = !1) => {
	if (!Pn || !document.body) switch (t) {
		case 'small':
		case 'medium':
			return 720;
		default:
			return 850
	}
	if (n) return e.width - 30;
	const s = Math.max(e.width - 100 - 90, 750);
	return Math.min(s, 880) - 30
},
	ga = t => {
		if (Pn) {
			if (window.visualViewport) return {
				width: window.visualViewport.width,
				height: window.visualViewport.height
			};
			if (document.documentElement) return {
				width: document.documentElement.clientWidth,
				height: document.documentElement.clientHeight
			}
		}
		switch (t) {
			case 'small':
				return {
					width: 414,
					height: 736
				};
			case 'medium':
				return {
					width: 768,
					height: 1024
				};
			case 'large':
				return {
					width: 1070,
					height: 900
				};
			default:
				return {
					width: 1280,
					height: 900
				}
		}
	};
function ya({
	text: t,
	layout: e,
	xoffset: n
}) {
	const s = t.layer;
	if (s) {
		const i = e ? s.x1 - e.absoluteX : s.x1,
			a = - 1 * s.y;
		return v('text', {
			className: 'D191u2',
			x: i + n,
			y: a,
			dy: '-0.25em'
		}, t.text)
	}
	return null
}
function va({
	capo: t,
	layer: e
}) {
	if (!e) return null;
	const {
		x1: n,
		y: s
	}
		= e;
	return v(S, null, v('path', {
		id: 'capo',
		transform: `translate(${n}, ${- 16 - s})`,
		d: 'M24.5 1.5c.5.5.25 2.5-.25 2.5C13 3.5 7 3.9 3.8 4.35c0 0-.05 3.9 2.7 6.15 2.75 2.25 5 2.5 7.75 2.75 3 0 1.75.5 1.75.75s1.25.75-.75 1c-3 .25-7 0-10-1 .5.5.75 1.25.5 1.5L4.5 17C2.76 16.75.6 15.25 0 13l1-1.25c.5-.75 1.75.25 1.75.25C2 10.75.25 6.5.25 3.75.25 1.5 1 1 2 .75S19 0 24.5 1.5zm-1.3 1.65c.65-.3 1.05-.9-.7-1.15-3.75-.75-14.75-.75-20-.5-.5 0-1 .25-1.25 1.25-.75 3 2.25 8.5 2.5 9.25L3 13s-1-.5-1.5-.5L1 13c.75 2 1.75 2.25 3.25 2.75l.5-.5C4.75 14.75 4 14 4 14l1.25-1c3 1 5.25 1.5 9.75 1.25.12-.01.25-.25 0-.25-3.75 0-6.5-.75-8.5-2.25S2.5 7.25 3 3.5c-.13-.05 9.8-1.2 20.2-.35z',
		className: 'ol2ld',
		key: 'capo_symbol'
	}), v('text', {
		className: 'ol20f',
		x: 30 + n,
		y: - 3 - s,
		key: 'capo_text'
	}, `Capo ${t}${function (t) {
		switch (t) {
			case 1:
				return 'st';
			case 2:
				return 'nd';
			case 3:
				return 'rd';
			default:
				return 'th'
		}
	}(t)} fret`))
}
function wa({
	layer: t
}) {
	const {
		x1: e,
		x2: n,
		y: s
	}
		= t,
		i = n - e,
		a = e,
		o = - 1 * s - 2,
		r = [
			v('text', {
				className: 'Bmz29t',
				x: a,
				y: o,
				key: 'letring'
			}, 'let ring')
		];
	return i > 46 && (r.push(v('line', {
		className: 'Bmzmn Bmz8a',
		x1: 46 + a,
		y1: - 3 + o,
		x2: i - 2 + a,
		y2: - 3 + o,
		key: 'dotted'
	})), r.push(v('line', {
		className: 'Bmzmn',
		x1: i + a,
		y1: 1 + o,
		x2: i + a,
		y2: - 7 + o,
		key: 'line'
	}))),
		v(S, null, r)
}
function ba({
	layer: t
}) {
	const {
		x1: e,
		x2: n,
		y: s
	}
		= t,
		i = e,
		a = - 1 * s - 2,
		o = n - e,
		r = [
			v('text', {
				className: 'Dv2mi',
				x: i,
				y: a,
				key: 'pm'
			}, 'P. M.')
		];
	return o > 35 && (r.push(v('line', {
		className: 'Dv1nu Dv1vp',
		x1: 35 + i,
		y1: - 3 + a,
		x2: o - 2 + i,
		y2: - 3 + a,
		key: 'dotted'
	})), r.push(v('line', {
		className: 'Dv1nu',
		x1: o + i,
		y1: 1 + a,
		x2: o + i,
		y2: - 7 + a,
		key: 'line'
	}))),
		v(S, null, r)
}
function xa({
	layer: t,
	effectValue: e
}) {
	const {
		x1: n,
		x2: s,
		y: i
	}
		= t,
		a = s - n,
		o = n,
		r = - 1 * i - 2;
	let l = 'Harm.';
	switch (e) {
		case 'artificial':
			l = 'A.H.';
			break;
		case 'semi':
			l = 'S.H.';
			break;
		case 'tapped':
			l = 'T.H.';
			break;
		case 'pinch':
			l = 'P.H.'
	}
	const c = [
		v('text', {
			className: 'Cwh1ss',
			x: o,
			y: r,
			key: 'harm'
		}, l)
	];
	return a > 40 && (c.push(v('line', {
		className: 'Cwh2nl Cwhc4',
		x1: 40 + o,
		y1: - 3 + r,
		x2: a - 2 + o,
		y2: - 3 + r,
		key: 'dotted'
	})), c.push(v('line', {
		className: 'Cwh2nl',
		x1: a + o,
		y1: 1 + r,
		x2: a + o,
		y2: - 7 + r,
		key: 'line'
	}))),
		v(S, null, c)
}
function Sa({
	layer: t,
	wide: e
}) {
	const {
		x1: n,
		x2: s,
		y: i
	}
		= t,
		a = s - n,
		o = function (t, e, n, s) {
			let i = `M${e} ${n + 4}l3-3.5`,
				a = `v${s ? 2 : 1}.8l-3 3.5`;
			for (let e = 0; e < t; e++) i += 'a.5.5 0 0 1 .7 0l2.3 2a.5.5 0 0 0 .7 0l1.8-2',
				a += 'a.5.5 0 0 1-.7 0l-2.3-2a.5.5 0 0 0-.7 0l-1.8 2';
			return i + a + 'z'
		}(a > 14 ? Math.floor((a - 3) / 5.5) : 2, n, - (i + 6), e);
	return v('path', {
		className: 'io2pf',
		d: o
	})
}
class ka extends x {
	constructor() {
		super(...arguments),
			this.renderEffect = (t, e) => {
				const n = {
					layer: t.layer,
					key: `${t.effect}-${this.props.line.index}-${e}`,
					line: this.props.line,
					effectValue: t.effectValue
				};
				switch (t.effect) {
					case 'letRing':
						return v(wa, n);
					case 'palmMute':
						return v(ba, n);
					case 'harmonic':
						return v(xa, n);
					case 'vibrato':
						return v(Sa, Object.assign({
						}, n, {
							wide: !1
						}));
					case 'wideVibrato':
						return v(Sa, Object.assign({
						}, n, {
							wide: !0
						}));
					default:
						return null
				}
			}
	}
	render() {
		return v(S, null, this.props.line.effects.map(this.renderEffect))
	}
}
var Ca = {
	harmonic: 'Chqw4',
	rest0: 'r',
	rest1: 'Chq1kc',
	rest2: 'Chq13a',
	rest3: 'Chqb3',
	voice0: 'v',
	voice1: 'Chqcb',
	voice2: 'Chqvm',
	voice3: 'Chq2sx',
	drums0: 'Chq1dx',
	drums1: 'Chq6l',
	drums2: 'Chqs4',
	drums3: 'Chq1yg',
	stick0: 'Chq2du',
	stick1: 'Chq2ba',
	stick2: 'Chq23u',
	stick3: 'Chq22j',
	voiceDrum0: 'Chq2i1',
	voiceDrum1: 'Chq2ud',
	voiceDrum2: 'Chqrz',
	voiceDrum3: 'Chq23d',
	note: 'Chq1fz',
	noteDrum: 'Chq11j'
};
const _a = 31,
	Ea = 34,
	Na = 91,
	La = 46,
	Ta = 92,
	Ia = 53,
	Aa = [
		[36,
			'Kick/Bass\nDrum'],
		[
			35,
			'Acoustic\nBass\nDrum'
		],
		[
			50,
			'High\nFloor\nTom'
		],
		[
			48,
			'High\nTom'
		],
		[
			47,
			'Mid\nTom'
		],
		[
			45,
			'Low\n(Floor)\nTom'
		],
		[
			41,
			'Low\n(Floor)\nTom'
		],
		[
			43,
			'Very\nLow\nTom'
		],
		[
			38,
			'Snare'
		],
		[
			40,
			'Electric\nSnare'
		],
		[
			37,
			'Side\nStick\nSnare'
		],
		[
			Na,
			'Rim\nShot\nSnare'
		],
		[
			42,
			'Closed\nHi Hat'
		],
		[
			Ta,
			'Half\nHi Hat'
		],
		[
			La,
			'Open\nHi Hat'
		],
		[
			44,
			'Foot\nHi Hat'
		],
		[
			93,
			'Ride\nEdge\n'
		],
		[
			59,
			'Ride\nEdge\n'
		],
		[
			51,
			'Ride\nCymbal\n'
		],
		[
			Ia,
			'Ride\nBell'
		],
		[
			55,
			'Splash\n'
		],
		[
			52,
			'China\n\n'
		],
		[
			49,
			'High\nCrash\n'
		],
		[
			57,
			'Medium\nCrash\n'
		],
		[
			99,
			'Low\nCowbell'
		],
		[
			56,
			'Cowbell'
		],
		[
			102,
			'High\nCowbell'
		],
		[
			27,
			'High Q'
		],
		[
			28,
			'Slap'
		],
		[
			29,
			'Scratch\nPush'
		],
		[
			30,
			'Scratch\nPull'
		],
		[
			_a,
			'Sticks'
		],
		[
			32,
			'Square\nClick'
		],
		[
			33,
			'Metronome\nClick'
		],
		[
			Ea,
			'Metronome\nBell'
		],
		[
			39,
			'Hand\nClap'
		],
		[
			54,
			'Tambourine\n'
		],
		[
			58,
			'Vibraslap'
		],
		[
			60,
			'High\nBongo'
		],
		[
			61,
			'Low\nBongo'
		],
		[
			62,
			'Mute\nHigh\nConga'
		],
		[
			63,
			'Open\nHigh\nConga'
		],
		[
			64,
			'Low\nConga'
		],
		[
			65,
			'High\nTimbale'
		],
		[
			66,
			'Low\nTimbale'
		],
		[
			67,
			'High\nAgogo'
		],
		[
			68,
			'Low\nAgogo'
		],
		[
			69,
			'Cabasa'
		],
		[
			70,
			'Maracas'
		],
		[
			71,
			'Short\nWhistle'
		],
		[
			72,
			'Long\nWhistle'
		],
		[
			73,
			'Short\nGuiro\n'
		],
		[
			74,
			'Long\nGuiro\n'
		],
		[
			75,
			'Claves'
		],
		[
			76,
			'High\nWood\nBlock'
		],
		[
			77,
			'Low\nWood\nBlock'
		],
		[
			78,
			'Mute\nCuica'
		],
		[
			79,
			'Open\nCuica'
		],
		[
			80,
			'Mute\nTriangle'
		],
		[
			81,
			'Open\nTriangle'
		],
		[
			82,
			'Shaker\n'
		],
		[
			83,
			'Jingle\nBell\n'
		],
		[
			84,
			'Bell\nTree\n'
		],
		[
			85,
			'Castinets\n'
		],
		[
			86,
			'Mute\nSurdo\n'
		],
		[
			87,
			'Open\nSurdo\n'
		]
	],
	Pa = [
		42,
		44,
		37,
		29,
		30,
		33,
		55,
		51,
		78,
		80,
		86,
		32,
		62,
		93,
		59
	],
	Ma = [
		49,
		57
	],
	Ba = [
		56,
		102,
		99,
		54,
		76,
		77
	];
function Da(t, e) {
	const n = 12 * (5 - e) + 3;
	return Pa.includes(t) || Ma.includes(t) || t === Ta || t === La || 52 === t || 93 === t || 59 === t ? 'M0 4v' + (n - 4) : Ba.includes(t) ? 'M0 3v' + (n - 3) : `M0 0v${n}`
}
function Oa({
	fret: t,
	className: e,
	transform: n
}) {
	return Pa.includes(t) ? v('use', {
		className: e,
		transform: n,
		xlinkHref: '#drumCross'
	}) : Ma.includes(t) ? v('use', {
		className: e,
		transform: n,
		xlinkHref: '#drumCross',
		style: 'stroke-width: 2'
	}) : 52 === t ? v('g', {
		className: e,
		transform: n
	}, v('use', {
		xlinkHref: '#drumHat'
	}), v('use', {
		xlinkHref: '#drumCross',
		style: 'stroke-width: 2'
	})) : Ba.includes(t) ? v('use', {
		className: e,
		transform: n,
		xlinkHref: '#drumTriangle'
	}) : [
		Ia,
		Na,
		Ea
	].includes(t) ? v('use', {
		className: e,
		transform: n,
		xlinkHref: '#drumRhomb'
	}) : [
		La
	].includes(t) ? v('use', {
		className: e,
		transform: n,
		xlinkHref: '#drumCircleCross'
	}) : [
		Ta
	].includes(t) ? v('use', {
		className: e,
		transform: n,
		xlinkHref: '#drumCircleStroke'
	}) : [
		_a
	].includes(t) ? v('use', {
		className: e,
		transform: n,
		xlinkHref: '#drumStroke'
	}) : v('use', {
		className: e,
		transform: n,
		xlinkHref: '#drum'
	})
}
function Ra(t = !1) {
	return t ? 7 : 0
}
class ja extends x {
	render() {
		const {
			note: t,
			beat: e,
			part: n,
			x: s
		}
			= this.props,
			i = `translate(${s}, 0)`;
		if (e.rest) {
			if (e.layout.usedStrings || 0 !== e.voice && e.layout.usedRest) return null;
			const t = Ca[`rest${e.voice}`],
				n = v('use', {
					className: t,
					xlinkHref: `#rest${e.type}`,
					transform: i,
					key: 'rest'
				});
			if (e.dotted) {
				const e = v('use', {
					className: t,
					xlinkHref: '#dot',
					transform: i,
					key: 'dot'
				});
				return v(S, null, n, e)
			}
			return n
		}
		if (!t.isVisible) return null;
		if (n.usedDrums && n.isDrumStdOn) {
			const n = Ca[`drums${e.voice}`],
				i = `translate(${s}, ${0.5 + 12 * t.string})`,
				a = t.orientation ? i : i + ' translate(-10, 0)';
			return v(S, null, 1 !== e.type && v('path', {
				className: Ca[`stick${e.voice}`],
				transform: i,
				d: Da(t.fret, t.string)
			}), (t.tie || t.ghost) && v('text', {
				x: s - 6,
				y: 12 * t.string + Ra(!1) + 5
			}, '('), v(Oa, {
				fret: t.fret,
				className: n,
				transform: a
			}), (t.tie || t.ghost) && v('text', {
				x: s + 11,
				y: 12 * t.string + Ra(!1) + 5
			}, ')'))
		}
		let a = '',
			o = 0;
		const r = n.usedDrums;
		if (r) {
			const e = n.usedDrums.get(t.fret);
			e && (a = e.name || '*', o = e.string || 0)
		} else a = t.dead ? 'X' : t.fret.toString(),
			o = t.string;
		const l = `${r ? 'voiceDrum' : 'voice'}${e.voice}`,
			c = v('text', {
				className: Ca[l],
				x: s,
				y: 12 * o + Ra(!1),
				key: 'text',
				style: {
					fill: e.color
				}
			}, t.tie || t.ghost ? `(${a})` : a);
		if (t.harmonic) {
			const t = v('path', {
				className: Ca.harmonic,
				transform: `translate(${s - 17}, ${12 * o - 3.5} )`,
				d: 'M 0,3.5 L 3.5,0 7,3.5 3.5,7 Z',
				key: 'harmonic'
			});
			return v(S, null, t, c)
		}
		return c
	}
}
function $a(t, e, n, s, i) {
	const a = e ? e.margin(0) : 0,
		o = 12 * s - 7,
		r = i - a - (n ? n.margin(0) : 0),
		l = Math.min(Math.floor(r / 3), 10),
		c = Math.max(8, 3),
		u = c - 1;
	return `M${a + t} ${o}c${l}-${c} ${r - l}-${c} ${r} 0c-${l}-${u}-${r - l}-${u}-${r} 0z`
}
class Fa extends x {
	render() {
		const {
			x: t,
			start: e,
			end: n,
			slicingMode: s
		}
			= this.props;
		if (n) {
			const e = n.firstRef().beat,
				i = n.lastRef().beat,
				a = n.lastRef().note;
			if (i.layout && e.layout) {
				const n = s.getTieSlurPathLength(e, i, !0);
				return v('path', {
					className: 'B5ex2',
					d: $a(t - n, null, a, a.string, n)
				})
			}
		} else if (e) {
			const n = e.firstRef().beat,
				i = e.lastRef().beat,
				a = e.firstRef().note,
				o = e.lastRef().note;
			if (i.layout && n.layout) {
				const e = s.areBeatsInSameSlice(n, i),
					r = s.getTieSlurPathLength(n, i);
				return v('path', {
					className: 'B5ex2',
					d: $a(t, a, e ? o : null, a.string, r)
				})
			}
		}
		return null
	}
}
function Ha(t, e, n, s, i) {
	const a = e ? e.margin(0) : 0,
		o = 12 * s + 7,
		r = i - a - (n ? n.margin(0) : 0),
		l = Math.min(Math.floor(r / 3), 10),
		c = Math.max(7, 3),
		u = c - 1;
	return `M${a + t} ${o}c${l} ${c} ${r - l} ${c} ${r} 0c-${l} ${u}-${r - l} ${u}-${r} 0z`
}
class za extends x {
	render() {
		const {
			x: t,
			start: e,
			end: n,
			slicingMode: s
		}
			= this.props;
		if (n) {
			const e = n.firstRef().beat,
				i = n.lastRef().beat,
				a = n.lastRef().note;
			if (i.layout && e.layout) {
				const n = s.getTieSlurPathLength(e, i, !0),
					o = a.string;
				return v('path', {
					className: 'Cug2cl',
					d: Ha(t - n, null, a, o, n)
				})
			}
		}
		if (e) {
			const n = e.firstRef().beat,
				i = e.lastRef().beat,
				a = e.firstRef().note,
				o = e.lastRef().note;
			if (i.layout && n.layout) {
				const e = s.areBeatsInSameSlice(n, i),
					r = s.getTieSlurPathLength(n, i),
					l = a.string;
				return v('path', {
					className: 'Cug2cl',
					d: Ha(t, a, e ? o : null, l, r)
				})
			}
		}
		return null
	}
}
class qa extends x {
	render() {
		const {
			x: t,
			start: e,
			end: n,
			slicingMode: s
		}
			= this.props;
		if (e) {
			const n = e.firstRef().beat,
				i = e.lastRef().beat,
				a = e.firstRef().note,
				o = e.lastRef().note;
			if (i.layout && n.layout) {
				const e = a.string,
					r = a.fret > o.fret ? - 1 : 1,
					l = s.areBeatsInSameSlice(n, i),
					c = s.getTieSlurPathLength(n, i);
				if (l) {
					const n = a.margin(2),
						s = o.margin(2);
					return v('line', {
						className: 'I32lk',
						x1: n + t,
						y1: 12 * e + 2 * r,
						x2: c - s + t,
						y2: 12 * e - 2 * r
					})
				}
				{
					const n = a.margin(2);
					return v('line', {
						className: 'I32lk',
						x1: n + t,
						y1: 12 * e + 2 * r,
						x2: c + t,
						y2: 12 * e - r
					})
				}
			}
		} else if (n) {
			const e = n.firstRef().beat,
				i = n.lastRef().beat,
				a = n.firstRef().note,
				o = n.lastRef().note;
			if (i.layout && e.layout) {
				const n = o.string,
					r = a.fret > o.fret ? - 1 : 1,
					l = s.getTieSlurPathLength(e, i, !0),
					c = o.margin(2),
					u = t - l;
				return v('line', {
					className: 'I32lk',
					x1: u,
					y1: 12 * n + 2 * r,
					x2: l - c + u,
					y2: 12 * n - r
				})
			}
		}
		return null
	}
}
function Ua({
	x: t,
	y: e,
	up: n
}) {
	return v('path', {
		className: 'Ccv14l',
		d: `M ${t},${e} l 2,${n ? 5 : - 5} -4,0 2,${n ? - 5 : 5}`
	})
}
const Wa = [
	'¼',
	'½',
	'¾'
];
function Va({
	x: t,
	y: e,
	up: n,
	tone: s
}) {
	return v('text', {
		className: n ? 'Cqco1' : 'Cqc2d5',
		x: t,
		y: n ? e - 4 : e + 11
	}, function (t) {
		if (100 === t) return 'full';
		if (t) {
			let e = '';
			const n = Math.floor(t / 100);
			n && (e += n);
			const s = t % 100;
			return s >= 25 && (e += Wa[Math.floor(s / 25) - 1]),
				e
		}
		return ''
	}(s))
}
function Ga(t, e) {
	if (!t) return !1;
	const n = t.firstRef().note.bend;
	if (!n) return !1;
	const s = n.points,
		i = s.length;
	return !(i < 1) && s[i - 1].tone === e
}
function Xa(t, e, n, s, i) {
	return {
		elements: e ? [
			...t.elements,
			e
		] : t.elements,
		prevTone: n,
		prevX: s,
		prevY: i
	}
}
function Ya(t) {
	const e = t.cfx,
		n = t.note,
		s = e.firstRef().note,
		i = s.bend;
	if (!i) return null;
	const {
		x1: a,
		x2: o
	}
		= t.slicingMode.getBendCoordinates(e, n),
		r = o - a,
		l = a + t.x,
		{
			elements: c
		}
			= i.points.reduce(function (t, e, n) {
				const s = 12 * t.string - 5;
				return function (i, a, o) {
					const {
						tone: r,
						position: l
					}
						= a,
						c = 0 === r ? s : - 5 - r / 4;
					if (0 === o) return t.tie || 0 === r ? Xa(i, null, r, e, 0 !== r ? c : s) : Xa(i, function (t, e, n, s, i) {
						return [v('line', {
							key: `prebend-${t}`,
							className: 'Cni34n',
							x1: n,
							y1: s + - 3,
							x2: n,
							y2: i
						}),
						v(Ua, {
							key: `arrow-${t}`,
							x: n,
							y: i,
							up: !0
						}),
						v(Va, {
							key: `y-${t}`,
							tone: e,
							x: n,
							y: i,
							up: !0
						})]
					}(o, r, e, s, c), r, e, c);
					const {
						prevTone: u,
						prevX: d,
						prevY: h
					}
						= i,
						p = n * l / 60 + e;
					return Xa(i, r === u ? function (t, e, n, s, i, a) {
						return e <= 0 ? null : [
							v('line', {
								key: `hold-${t}`,
								className: 'Cnie8 Cnix5',
								x1: n,
								y1: s,
								x2: i,
								y2: a
							})
						]
					}(o, r, d, c, p, c) : function (t, e, n, s, i, a, o, r, l) {
						const c = l < o,
							u = e.prevNoteOnString,
							d = u && !!u.bendEnd,
							h = u && (!!u.bendStart || !!u.bendPart || !!u.bendEnd),
							p = u && function (t) {
								if (!t) return !1;
								const e = t.firstRef().note.bend;
								if (!e) return !1;
								const n = e.points,
									s = n.length;
								if (s < 2) return !1;
								const i = n[s - 2].tone;
								return n[s - 1].tone === i
							}(u.bendEnd) && Ga(u.bendEnd, 0),
							f = e.tie && d && !p && Ga(u.bendEnd, n) && 0 !== n,
							m = i !== a || 0 !== n || f && h ? 0 : e.margin(2),
							g = [
								v('path', {
									key: `bend-${t}`,
									className: 'Cnie8',
									d: `M ${a + m},${o} Q ${r},${o} ${r},${c ? l + 4 : l - 4}`
								}),
								v(Ua, {
									key: `arrow-${t}`,
									x: r,
									y: l,
									up: c
								})
							];
						return 0 !== s ? [
							...g,
							v(Va, {
								key: `y-${t}`,
								tone: s,
								x: r,
								y: l,
								up: c
							})
						] : g
					}(o, t, u, r, e, d, h, p, c), r, p, c)
				}
			}(s, l, r), {
				elements: [
				],
				prevTone: 0,
				prevX: 0,
				prevY: 0
			});
	return v(S, null, c)
}
function Za({
	lyrics: t,
	x: e
}) {
	const n = t.layer;
	if (n) {
		const s = ws(t) + e + n.diff;
		return v('text', {
			className: 'l',
			x: s,
			y: n.y + n.height,
			key: 'lyrics'
		}, t.text)
	}
	return null
}
class Ja extends x {
	render() {
		const {
			note: t,
			x: e
		}
			= this.props,
			n = t.string,
			s = 'above' === t.slide || 'upwards' === t.slide ? 1 : - 1,
			i = 'above' === t.slide || 'below' === t.slide ? - 1 : 1,
			a = t.margin(2);
		return v('line', {
			className: 'I32lk',
			x1: i * a + e,
			y1: 12 * n + 2 * s,
			x2: i * (a + 15) + e,
			y2: 12 * n - 2 * s
		})
	}
}
function Ka({
	fingerL: t,
	string: e,
	x: n,
	fret: s
}) {
	let i;
	switch (t) {
		case 1:
			i = 'D1x1gs';
			break;
		case 2:
			i = 'D1x2oz';
			break;
		case 3:
			i = 'D1x1ve';
			break;
		case 4:
			i = 'D1x26i';
			break;
		case 5:
			i = 'D1x2b0';
			break;
		default:
			i = 'D1x1gs'
	}
	let a = 10,
		o = 13;
	'number' == typeof s && Math.floor(s / 10) > 0 && (a = 14, o = 17);
	const r = v('circle', {
		className: i,
		cx: n + o,
		cy: 12 * e - 6,
		r: 6
	}),
		l = v('text', {
			className: 'D1x1q9',
			x: n + a,
			y: 12 * e - 2.5
		}, 5 === t ? 'T' : t);
	return v(S, null, r, l)
}
class Qa extends x {
	renderStroke(t, e, n, s) {
		const i = 12 * (n - e + 1),
			a = t ? 4 : i - 4,
			o = t ? 0 : i,
			r = a,
			l = a,
			c = 12 * (e - 0.5),
			u = s - 15;
		return v(S, null, v('line', {
			className: 'ex1kp',
			x1: 4 + u,
			y1: c,
			x2: 4 + u,
			y2: 12 * (n + 0.5),
			key: 'line'
		}), v('polygon', {
			className: 'ex105',
			key: 'polygon',
			points: `${4 + u},${o + c} ${0 + u},${r + c} ${8 + u},${l + c} ${4 + u},${o + c}`
		}))
	}
	render() {
		const t = [
		],
			{
				layout: e,
				part: n,
				measure: s,
				slicingMode: i,
				beatFingering: a
			}
				= this.props,
			o = this.props.x + e.x;
		let r = 0;
		for (const l of e.beats) if (l.lyrics) for (const e of l.lyrics) t.push(v(Za, {
			lyrics: e,
			key: 'lyrics',
			x: o
		}));
		else {
			l.text && t.push(v(ya, {
				text: l.text,
				layout: e,
				key: 'text',
				xoffset: o
			}));
			const c = l.chord;
			c && c.layer && t.push(v('text', {
				className: 'exh6',
				y: - 1 * c.layer.y,
				x: Math.max(- 1 * Math.floor(c.width / 2) + o, - 15),
				dy: '-0.25em',
				key: 'chord'
			}, c.text));
			let u = Number.MAX_VALUE,
				d = 0;
			if (!s.rest) {
				if (n.usedDrums) {
					const t = l.notes.map((t => ({
						string: Math.floor(2 * t.string),
						note: t
					})));
					t.sort(((t, e) => t.string - e.string));
					let e = null;
					for (const n of t) n.note.orientation = !(e && Math.abs(n.string - e.string) <= 1 && e.note.orientation),
						e = n
				}
				l.hat && n.isDrumStdOn && t.push(v('path', {
					className: 'exkb',
					d: `M${o - 2}${- l.hat.layer.y}h8l5 -5`,
					key: 'drumHat'
				}));
				for (const e of l.notes) {
					!l.upStroke && !l.downStroke || e.tie || (u = Math.min(u, e.string), d = Math.max(d, e.string)),
						t.push(v(ja, {
							note: e,
							beat: l,
							key: 'note' + r,
							part: n,
							x: o
						})),
						e.tieStart && t.push(v(za, {
							start: e.tieStart,
							key: 'tie' + r,
							slicingMode: i,
							x: o
						})),
						e.tieEnd && Cs(e.tieEnd) && t.push(v(za, {
							end: e.tieEnd,
							key: 'tieEnd' + r,
							slicingMode: i,
							x: o
						})),
						e.slurStart && t.push(v(Fa, {
							start: e.slurStart,
							key: 'slur' + r,
							slicingMode: i,
							x: o
						})),
						e.slurEnd && Cs(e.slurEnd) && t.push(v(Fa, {
							end: e.slurEnd,
							key: 'slurEnd' + r,
							slicingMode: i,
							x: o
						})),
						e.slide && 'shift' !== e.slide && 'legato' !== e.slide && 'unknown' !== e.slide && t.push(v(Ja, {
							note: e,
							beat: l,
							key: 'slideShort' + r,
							x: o
						})),
						e.slideStart && t.push(v(qa, {
							start: e.slideStart,
							key: 'slide' + r,
							slicingMode: i,
							x: o
						})),
						e.slideEnd && Cs(e.slideEnd) && t.push(v(qa, {
							end: e.slideEnd,
							key: 'slideEnd' + r,
							slicingMode: i,
							x: o
						}));
					const s = i.bendsForNote(e);
					for (let n = 0; n < s.length; n++) {
						const a = s[n];
						i.shouldDrawBendOnNote(a, e) && t.push(v(Ya, {
							cfx: a,
							note: e,
							key: `bend-${n}-${r}`,
							slicingMode: i,
							x: o
						}))
					}
					const c = a && a.fingerings.find((t => t.string === e.string));
					c && t.push(v(Ka, {
						fingerL: c.fingerL,
						key: 'finger' + r,
						x: o,
						string: e.string,
						fret: e.fret
					})),
						r++
				}
				n.usedDrums || (l.upStroke || l.downStroke) && u < d && t.push(this.renderStroke(!!l.upStroke, u, d, o))
			}
		}
		return v(S, null, t)
	}
}
const to = 'M8.8 0v23.84c0 .88-.3 1.71-.91 2.46A5.15 5.15 0 0 1 5.66 28c-.9.4-1.8.6-2.65.6a3.03 3.03 0 0 1-2.05-.65 2.43 2.43 0 0 1-.96-1.8 4 4 0 0 1 .96-2.4 7.74 7.74 0 0 1 2.29-1.81c.8-.42 1.69-.64 2.6-.64.89 0 1.64.24 2.23.7V0z',
	eo = 'M.8 0h15v3.5H.8z';
function no({
	tripletFeel: {
		feel: t,
		layer: e
	},
	x: n
}) {
	if (!e) return null;
	const {
		y: s
	}
		= e,
		i = 'off' === t,
		a = '16th' === t,
		o = '8th' === t;
	return v('g', {
		transform: `translate(${n},-${s + 42})`
	}, v('path', {
		d: to,
		transform: 'translate(10,10)',
		className: 'Bc72ex'
	}), v('path', {
		d: to,
		transform: 'translate(25,10)',
		className: 'Bc72ex'
	}), v('path', {
		d: eo,
		transform: 'translate(18,10)',
		className: 'Bc72ex'
	}), a && v('path', {
		d: eo,
		transform: 'translate(18,15)',
		className: 'Bc72ex'
	}), v('path', {
		d: to,
		transform: 'translate(48,10)',
		className: 'Bc72ex'
	}), v('path', {
		d: to,
		transform: 'translate(63,10)',
		className: 'Bc72ex'
	}), (i || a) && v('path', {
		d: eo,
		transform: 'translate(56,10)',
		className: 'Bc72ex'
	}), a && v('path', {
		d: 'M8.8 0h7v3.5h-7z',
		transform: 'translate(56,15)',
		className: 'Bc72ex'
	}), o && v('path', {
		d: 'M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z',
		transform: 'translate(63,10)',
		className: 'Bc72ex'
	}), !i && v('text', {
		className: 'Bc7xk',
		x: 64,
		y: 0
	}, 3), !i && v('path', {
		className: 'Bc733l',
		d: 'M51 7V4h9m7 0h9v3'
	}), v('path', {
		d: 'M37 27v-1h10v1zm0 3v-1h10v1z',
		className: 'Bc72ex'
	}))
}
var so = {
	voice0: 'h',
	voice1: 'Bup2te',
	voice2: 'Bupwd',
	voice3: 'Bup1a0'
};
class io extends x {
	render() {
		const {
			voice: t,
			line: e,
			x: n
		}
			= this.props;
		if (t.hasSameRhythm) return null;
		const s = 35 * t.index + 12 * e.strings,
			i = t.beats;
		let a = '',
			o = 0;
		const r = new Array(4);
		let l = !1;
		for (const t of i) {
			const e = t.layout.x;
			1 !== t.type && (a += 2 === t.type ? `M${n + e},${s + 9 + 2}v9` : `M${n + e},${s + 2}v18`);
			let c = 0,
				u = 8;
			if (t.beamStart ? l = !0 : t.beamStop && (l = !1), l) {
				if (t.index === i.length - 1) throw new Error('Something wrong with beaming model');
				const n = i[t.index + 1];
				let s = Math.min(t.type, n.type);
				for (t.tupletStop && (s = Math.min(s, 8)); u <= s;) {
					let s = r[c];
					s ? s.length += n.layout.x - t.layout.x : (s = {
						x: e,
						length: n.layout.x - t.layout.x
					}, r[c] = s),
						c++,
						u *= 2
				}
			}
			const d = c,
				h = c < o || t.tupletStop || t.beamStop;
			for (; c < o; c++, u *= 2) {
				const t = r[c];
				r[c] = void 0,
					t && (a += `M${n + t.x},${s + 18 - 5 * c}v2h${t.length}v-2z`)
			}
			for (; u <= t.type; c++, u *= 2) a += `M${n + e},${s + 18 - 5 * c}v2h${h ? '-7' : '7'}v-2z`;
			t.dotted && 1 !== t.type && (a += `M${n + e + 4},${s + 18 - 5 * c}v2h2v-2z`),
				o = d
		}
		if (!a.length) return null;
		const c = `voice${t.index}`;
		return v('path', {
			className: so[c],
			key: t.index,
			d: a
		})
	}
}
function ao(t = !1) {
	return t ? 3 : 0
}
function oo({
	strings: t,
	tuplet: e,
	voice: n,
	start: s,
	stop: i,
	x: a
}) {
	const o = s.layout.x + a,
		r = i.layout.x - s.layout.x,
		l = Math.round(r / 2),
		c = e > 9 ? 8 : 5,
		u = `M 0,0 L 0,6 ${l - c},6 M ${l + c},6 L ${r},6 ${r},0`,
		d = 12 * t + 35 * (n.index + 1) - 12;
	return v('g', {
		transform: `translate(${o},${d})`
	}, v('text', {
		className: 'Fy2jt',
		x: l,
		y: 9 + ao(!1)
	}, e), v('path', {
		className: 'Fy3m',
		d: u
	}))
}
function ro(t) {
	const {
		layer: e,
		alternateEnding: n
	}
		= t.alternateEnding;
	if (e) {
		const {
			x1: s,
			x2: i,
			y: a
		}
			= e,
			o = i - s,
			r = t.x;
		return v('g', {
			transform: `translate(${r},${- 1 * a - 14})`
		}, v('text', {
			className: 'Bee2b8',
			x: 4,
			y: '14'
		}, n.join(',')), v('path', {
			className: 'Bee1no',
			d: `M 1,14 L 1,0 ${o - 6},0`
		}))
	}
	return null
}
function lo({
	marker: t,
	x: e
}) {
	const n = t.layer;
	return n ? v('text', {
		className: 'B6i262',
		x: e,
		y: - 1 * n.y,
		dy: '-0.25em'
	}, t.text) : null
}
function co({
	line: t,
	x: e
}) {
	const n = 12 * (t.strings - 1);
	return v('g', {
		className: 'Rep',
		transform: `translate(${e},0)`
	}, v('rect', {
		className: 'B0i2q7',
		width: 4,
		height: n
	}), v('path', {
		className: 'B0imb',
		d: `M 8,0 L 8,${n}`
	}), v('ellipse', {
		className: 'B0i1ux',
		cx: 13,
		cy: Math.floor(n / 3),
		rx: 2,
		ry: 2
	}), v('ellipse', {
		className: 'B0i1ux',
		cx: 13,
		cy: Math.floor(2 * n / 3),
		rx: 2,
		ry: 2
	}))
}
function uo({
	line: t,
	measure: e,
	x: n
}) {
	const s = 12 * (t.strings - 1);
	return v('g', {
		transform: `translate(${e.layout.width - 18 + n},0)`
	}, e.repeat > 2 && v('text', {
		className: 'B0ija',
		x: 5,
		y: - 2
	}, e.repeat + 'x'), v('rect', {
		className: 'B0i2q7',
		x: 14,
		width: 4,
		height: s
	}), v('path', {
		className: 'B0imb',
		d: `M 11,0 L 11,${s}`
	}), v('ellipse', {
		className: 'B0i1ux',
		cx: 6,
		cy: Math.floor(s / 3),
		rx: 2,
		ry: 2
	}), v('ellipse', {
		className: 'B0i1ux',
		cx: 6,
		cy: Math.floor(2 * s / 3),
		rx: 2,
		ry: 2
	}))
}
function ho(t = !1) {
	return t ? 7 : 0
}
class po extends x {
	render() {
		const {
			measure: t,
			line: e,
			part: n,
			slicingMode: s,
			measureFingering: i
		}
			= this.props,
			a = t.layout.x,
			o = [
				v('text', {
					className: 'm',
					x: 3 + a,
					y: - 7.2,
					key: 'MeasureNumber'
				}, t.index + 1)
			];
		t.repeatStart && o.push(v(co, {
			line: e,
			key: 'RepriseStart',
			x: a
		}));
		const r = t.tripletFeel;
		r && o.push(v(no, {
			tripletFeel: r,
			key: 'TripletFeel',
			x: a
		})),
			t.repeat && o.push(v(uo, {
				line: e,
				measure: t,
				key: 'RepriseEnd',
				x: a
			})),
			t.alternateEnding && o.push(v(ro, {
				alternateEnding: t.alternateEnding,
				key: 'AlternateEnding',
				x: a
			})),
			t.marker && o.push(v(lo, {
				marker: t.marker,
				key: 'Marker',
				x: a
			}));
		for (const e of t.tempoLayouts.values()) {
			const {
				tempo: t,
				layer: n
			}
				= e;
			t && n && o.push(v('g', {
				className: 'vssu',
				transform: `translate(${n.x1},${- 1 * n.y})`,
				key: 'tempo'
			}, v('use', {
				xlinkHref: '#tempo'
			}), v('text', {
				className: 'vs1qc',
				y: - 3,
				x: 8
			}, `=${t.bpm}`)))
		}
		let l = 0;
		for (const e of t.beatsLayoutsByTime.values()) {
			const r = i && i.voices[0].beats.find((t => t.index === l));
			o.push(v(Qa, {
				layout: e,
				key: l,
				part: n,
				measure: t,
				slicingMode: s,
				x: a,
				beatFingering: r
			})),
				l++
		}
		if (t.hasSignature) {
			const e = Math.floor(n.strings / 2 * 12);
			o.push(v('text', {
				className: 'vscf',
				x: 35 + a,
				y: e + - 8 + ho(!1),
				key: 't1'
			}, t.signature[0])),
				o.push(v('text', {
					className: 'vscf',
					x: 35 + a,
					y: e + 21 + ho(!1),
					key: 't2'
				}, t.signature[1]))
		}
		if (t.rhythmLines) {
			let n = 0;
			for (const s of t.voices) if (!s.hasSameRhythm && !s.rest) {
				o.push(v(io, {
					voice: s,
					key: 'Rhythm' + s.index,
					line: e,
					x: a
				}));
				let t = 0,
					i = null;
				for (const r of s.beats) r && (r.tupletStart && (t = r.tuplet, i = r), t && i && r.tupletStop && (o.push(v(oo, {
					strings: e.strings,
					tuplet: t,
					start: i,
					stop: r,
					voice: s,
					key: 'Tuplet' + n,
					x: a
				})), t = 0, n++))
			}
		}
		return v(S, null, o)
	}
}
const fo = (t, e) => t + `H${e.x}m${e.w},0`;
function mo({
	line: t,
	hasTuning: e,
	slicingMode: n,
	part: s
}) {
	const i = t.spaces,
		a = 12 * (t.strings - 1);
	let o = '';
	const r = t.measures;
	for (let t = e ? 1 : 0; t < r.length; t++) o += `M${r[t].layout.x},0v${a}`;
	const l = r[0].layout.x,
		c = n.stringLineMaxX(t);
	if (s.usedDrums && s.isDrumStdOn) for (let e = 0; e < t.strings; e++) o += `M${l},${12 * e} H${c}`;
	else for (let e = 0; e < t.strings; e++) o += `M${l},${12 * e}` + i[e].reduce(fo, '') + `H${c}`;
	const u = n.finalVerticalSeparatorPosition(t);
	return u && (o += `H${u}`),
		o += 'V0',
		v('path', {
			className: 'Eh1jo',
			d: o
		})
}
const go = [
	'C',
	'C#',
	'D',
	'D#',
	'E',
	'F',
	'F#',
	'G',
	'G#',
	'A',
	'A#',
	'B'
],
	yo = [
		43,
		38,
		33,
		28
	],
	vo = [
		43,
		38,
		33,
		26
	],
	wo = [
		43,
		38,
		33,
		28,
		23
	],
	bo = [
		48,
		43,
		38,
		33,
		28,
		23
	],
	xo = [
		64,
		59,
		55,
		50,
		45,
		40
	],
	So = [
		64,
		59,
		55,
		50,
		45,
		38
	],
	ko = [
		64,
		59,
		55,
		50,
		45,
		40,
		35
	],
	Co = {
		4: {
			'E1 A1 D2 G2': 'Standard 4-string bass',
			'D#1 G#1 C#2 F#3': 'Down 1/2 step',
			'D1 G1 C2 F2': 'Down 1 step',
			'C1 F1 A#1 D#2': 'Down 2 step',
			'D1 A1 D2 G2': 'Drop D'
		},
		5: {
			'B0 E1 A1 D2 G2': 'Standard 5-string bass'
		},
		6: {
			'E2 A2 D3 G3 B3 E4': 'Standard tuning',
			'D2 A2 D3 G3 A3 D4': 'DADGAD Dsus4',
			'D2 A2 D3 G3 B3 D4': 'Double drop D',
			'D2 A2 D3 G3 B3 E4': 'Drop D',
			'E2 A2 E3 A3 C#3 E4': 'Open A major',
			'C2 G2 C3 G3 C3 E4': 'Open C major',
			'D2 A2 D3 F#3 A3 D4': 'Open D major',
			'E2 B2 E3 G#3 B3 E4': 'Open E major',
			'E2 B2 E3 G3 B3 E4': 'Open E minor',
			'D2 G2 D3 G3 B3 D4': 'Open G major',
			'D2 G2 D3 G3 A#3 D4': 'Open G minor',
			'E3 A3 D4 G4 B3 E5': 'Nashville guitar',
			'B0 E1 A1 D2 G2 C3': 'Standard 6-string bass'
		},
		7: {
			'B1 E2 A2 D3 G3 B3 E4': '7-string guitar'
		}
	};
function _o(t, e = !0) {
	return t.map((t => {
		const n = Math.floor(t / 12) - 1;
		return go[t % 12] + (e ? n : '')
	}))
}
function Eo(t, e) {
	const n = function (t, e) {
		if (gs(t)) {
			if (6 === e.length) return e[3] === e[5] + 12 ? So : xo;
			if (7 === e.length) return ko
		} else if (ys(t)) {
			if (4 === e.length) return e[1] === e[3] + 12 ? vo : yo;
			if (5 === e.length) return wo;
			if (6 === e.length) return bo
		}
		return e
	}(t, e);
	if (n) {
		const t = n[0] - e[0];
		for (let s = 0; s < n.length; s++) if (e[s] + t !== n[s]) return;
		return {
			tuningName: No(n),
			pitch: t,
			standard: n
		}
	}
}
function No(t) {
	const e = _o(t).reverse().join(' '),
		n = _o(t, !1).reverse().join(' ');
	if (t.length in Co && e in Co[t.length]) return Co[t.length][e];
	const s = n.split(' ');
	return s.map(((t, e) => e === s.length - 1 ? t.toLowerCase() : t)).join(' ')
}
function Lo({
	tuning: t
}) {
	return t ? v(S, null, _o(t, !1).map(((t, e) => v('text', {
		x: 0,
		y: 12 * e,
		key: e,
		className: 'C8nsu'
	}, ((t, e) => 0 === e ? t.toLowerCase() : t)(t, e))))) : null
}
class To extends x {
	render() {
		const {
			inlineDefs: t,
			line: e,
			noPadding: n,
			part: s,
			tuning: i,
			slicingMode: a,
			fingering: o
		}
			= this.props,
			r = a.expectedSliceWidth(e.width) + (n ? 0 : 30),
			l = e.capo,
			c = !!i,
			u = e.layout.height,
			d = `${n ? 0 : - 15} -${e.layout.layers.height} ${r} ${u}`;
		return v('svg', {
			xmlns: 'http://www.w3.org/2000/svg',
			version: '1.1',
			width: r,
			viewBox: d,
			className: 'n'
		}, t && v(fa, {
			part: s
		}), c && v(Lo, {
			tuning: i
		}), !!l && v(va, l), v(mo, {
			line: e,
			hasTuning: c,
			slicingMode: a,
			part: s
		}), e.hangingText.map(((t, e) => v(ya, {
			text: t,
			layout: void 0,
			key: e,
			xoffset: 0
		}))), v(ka, {
			line: e
		}), e.measures.map((t => {
			const n = o && o.measures.find((e => e.index === t.index));
			return v(po, {
				key: t.index,
				measure: t,
				line: e,
				part: s,
				slicingMode: a,
				measureFingering: n
			})
		})))
	}
}
function Io({
	lines: t,
	part: e,
	tuning: n,
	slicingMode: s,
	fingering: i
}) {
	return v(S, null, t.map((t => v(To, {
		line: t,
		key: t.index,
		part: e,
		tuning: 0 === t.index && n,
		slicingMode: s,
		fingering: i
	}))))
}
var Ao = T((({
	part: t,
	lines: e,
	tuning: n,
	slicingMode: s,
	fingering: i
}) => v(S, {
}, v('svg', {
	width: 0,
	viewBox: '0 0 0 0',
	className: 'Cxrdx'
}, v(fa, {
	part: t
})), v(Io, {
	part: t,
	lines: e,
	tuning: n,
	slicingMode: s,
	fingering: i
}))));
function Po({
	reference: t,
	firstLineLayoutHeigth: e,
	handlePitchshift: n,
	isActive: s,
	isPitchshiftToStandard: i
}) {
	const {
		player: {
			pitchShift: a
		}
	}
		= On('player'),
		o = e - 47;
	let r = 'Shift pitch (R)';
	0 !== a ? r = 'Pitch shifted (R)' : i && (r = 'Pitch can be shifted to match standard tuning (R)');
	const l = 5 * (Math.abs(a).toString(10).length - 1) + (a > 0 ? 2 : 0);
	return v('g', {
		ref: t,
		vectorEffect: 'non-scaling-stroke',
		transform: `translate(-8 ${o})`,
		className: s ? 'Bls16p Bls1wi' : 'Bls16p',
		onClick: n,
		'data-tab-button': 'tuning-button'
	}, v('title', null, r), v('rect', {
		x: 0,
		y: 3,
		rx: 4,
		ry: 4,
		width: 25,
		height: 23,
		filter: 'url(#svg_shadow)',
		className: 'Bls1ap'
	}), v('path', {
		d: 'M9.7 19.1h-6m2-2l-2 2 2 2m10-2h6m-2 2l2-2-2-2',
		'stroke-width': '1.3'
	}), v('path', {
		d: 'M9.7 7.1v7s0 3 3 3 3-3 3-3v-7m-3 10v5',
		'stroke-width': '1.6'
	}), (i || 0 !== a) && v('rect', {
		x: 18,
		y: 0,
		width: 13 + l,
		height: 13,
		rx: 6.5,
		ry: 6.5,
		className: 'Bls178'
	}), 0 !== a && v('text', {
		x: 20,
		y: 9.5
	}, `${a > 0 ? '+' : ''}${a}`))
}
function Mo({
	layer: t,
	hideLayer: e
}) {
	return t && 'drawing' !== t && v('div', {
		className: 'Cg820h',
		onClick: e,
		id: 'hide-layer-overlay'
	})
}
function Bo({
	up: t
}) {
	return v('svg', {
		width: '26',
		height: '23',
		role: 'img'
	}, v('rect', {
		width: 26,
		height: 23,
		rx: 4,
		ry: 4
	}), v('path', {
		d: t ? 'M7 12h5v5h2v-5h5v-2h-5v-5h-2v5h-5v2z' : 'M7.5 12h11v-2h-11v2z'
	}))
}
const Do = t => {
	const {
		part: e
	}
		= t;
	return e && (gs(e.instrumentId) || ys(e.instrumentId)) && e.tuning
};
var Oo = Rn(class extends x {
	constructor(t) {
		super(t),
			this.hidePopup = t => {
				t.preventDefault(),
					this.props.dispatch('layer/hide')
			},
			this.tuneUp = t => {
				t.preventDefault();
				const {
					pitchShift: e
				}
					= this.props.player;
				e < 12 && qi(this.props.store, e + 1)
			},
			this.tuneDown = t => {
				t.preventDefault();
				const {
					pitchShift: e
				}
					= this.props.player;
				e > - 12 && qi(this.props.store, e - 1)
			},
			this.reset = t => {
				t.preventDefault(),
					qi(this.props.store, 0)
			},
			this.renderCurrentTuning = () => {
				if (Do(this.props.player)) {
					const t = this.props.player.part.tuning.map((t => t + this.props.player.pitchShift));
					return v('div', {
						className: 'D0l11f D0lsm',
						'aria-label': 'Current tuning'
					}, v('div', {
						className: 'D0l124'
					}, 'CURRENT TUNING'), v('div', {
						id: 'tuning',
						className: 'D0l3u'
					}, No(t)))
				}
				return null
			},
			this.renderQuickButton = () => {
				if (0 !== this.props.player.pitchShift) return v('div', {
					className: 'D0l11f'
				}, v('button', {
					className: 'D0lvz D0l1rc',
					onClick: this.reset,
					role: 'button',
					'aria-label': 'Restore original tuning'
				}, 'Restore original tuning'));
				if (Do(this.props.player)) {
					const t = Eo(this.props.player.part.instrumentId, this.props.player.part.tuning);
					if (t && 0 !== t.pitch) return v('div', {
						className: 'D0l11f'
					}, v('button', {
						className: 'D0lvz D0l1rc',
						role: 'button',
						'aria-label': 'Quick shift pitch',
						onClick: e => {
							qi(this.props.store, t.pitch)
						}
					}, `Convert to ${t.tuningName}`))
				}
				return null
			},
			this.keyMap = {
				enter: this.hidePopup,
				left: this.tuneDown,
				down: this.tuneDown,
				up: this.tuneUp,
				right: this.tuneUp
			}
	}
	componentDidMount() {
		window.hotKeysManager.bind(this.keyMap, {
			onPopup: !0
		})
	}
	componentWillUnmount() {
		window.hotKeysManager.unbind(this.keyMap, {
			onPopup: !0
		});
		const {
			player: t,
			ensureLineVisibility: e
		}
			= this.props,
			n = li(t.part, t.audio.getCursor(), 'left');
		n && e(null, n.measureLayout.lineLayout, !1)
	}
	render() {
		const t = this.renderQuickButton(),
			e = this.renderCurrentTuning(),
			{
				pitchShift: n
			}
				= this.props.player,
			{
				tab: s,
				tuningButton: i
			}
				= this.props;
		let a = this.props.firstLineLayoutHeigth - 58,
			o = 55;
		if (s && i) {
			const t = s.getBoundingClientRect(),
				e = i.getBoundingClientRect();
			o = e.left - t.left + e.width + 21,
				a = e.top + e.height - t.top - 37.5,
				a < 2 && (a = 2)
		}
		return v('div', {
			className: 'D0l1ig',
			title: 'You can use arrow keys',
			role: 'dialog',
			'aria-label': 'Shift Pitch',
			style: {
				top: `${a}px`,
				left: `${o}px`
			}
		}, e, e && v('div', {
			className: 'D0l1xo'
		}), v('div', {
			className: 'D0l11f D0l29v'
		}, v('button', {
			className: 'D0lvz D0lvp',
			onClick: this.tuneDown,
			disabled: n <= - 12,
			'aria-label': 'Step down'
		}, v(Bo, {
			up: !1
		})), v('span', {
			className: 'D0l1by',
			'aria-label': 'Current pitch'
		}, (n > 0 ? '+' : '') + n), v('button', {
			className: 'D0lvz D0lvp',
			onClick: this.tuneUp,
			disabled: n >= 12,
			'aria-label': 'Step up'
		}, v(Bo, {
			up: !0
		}))), t && v('div', {
			className: 'D0l1xo'
		}), t)
	}
}, 'player'),
	Ro = {
		wrap: 'Cmfli',
		shadow: 'Cmf35k',
		body: 'Cmfed',
		loading: 'Cmf8e',
		icon: 'Cmf1mc'
	};
function jo(t) {
	return Math.round(10000 * t) / 10000
}
function $o({
	width: t,
	height: e
}) {
	const n = 1 * t,
		s = function (t, e, n, s, i, a, o) {
			const r = 0.95 * n,
				l = 0.45 * n,
				c = 0.6 * n,
				u = 0.3 * n,
				d = Math.atan2(r, n / 2),
				h = Math.sin(d),
				p = Math.cos(d),
				f = c * h,
				m = c * p,
				g = u * h,
				y = u * p;
			return `M ${jo(t + m)},${jo(e + f)}
	 Q ${jo(t)},${jo(e)} ${jo(t + l)},${jo(e)}
	 L ${jo(t + n - l)},${jo(e)}
	 Q ${jo(t + n)},${jo(e)} ${jo(t + n - m)},${jo(e + f)}
	 L ${jo(t + n / 2 + y)},${jo(e + r - g)}
	 Q ${jo(t + n / 2)},${jo(e + r)} ${jo(t + n / 2 - y)},${jo(e + r - g)}
	 z`
		}((t - n) / 2, 0.33 * t, n),
		i = function (t, e, n) {
			const s = t / 2,
				i = jo(1.3 * s),
				a = jo(s);
			return `M 0,${i}
	 Q 0,0 ${a},0 q ${a},0 ${a},${i}
	 v ${jo(e - 2 * i)}
	 q 0,${i} -${a},${i} q -${a},0 -${a},-${i}
	 v -${jo(e - 2 * i)}`
		}(t, e);
	return v(S, null, v('path', {
		className: Ro.shadow,
		filter: 'url(#CursorShadow)',
		d: i,
		key: 'shadow'
	}), v('path', {
		className: Ro.body,
		d: i,
		key: 'body'
	}), v('path', {
		className: Ro.icon,
		d: s,
		key: 'path'
	}))
}
function Fo(t, e) {
	const n = t.measureLayout,
		s = e.measureLayout;
	return n !== s ? n.lineLayout !== s.lineLayout || n.measure.index + 1 !== s.measure.index : t.x >= e.x
}
const Ho = t => t.player.shouldPlay && t.player.canPlay,
	zo = (t, e, n, s) => {
		let i = n.stringY;
		if (1 !== t) {
			i = 0;
			for (const e of s) {
				if (e === n.line) break;
				i += Math.round(t * e.layout.height)
			}
			i = i / t + n.layers.height
		}
		return Uo(t, e, i)
	},
	qo = (t, e, n, s) => Uo(t, e, n.stringY),
	Uo = (t, e, n) => (1 === t ? '' : `scale(${t}) `) + ` translate3d(${e - 6 + 15}px, ${n - 22}px, 0)`;
var Wo = Rn(class extends x {
	constructor(t) {
		super(t),
			this.el = I(),
			this.stopPlayback = () => {
				this.props.dispatch('player/togglePlay', !1),
					requestAnimationFrame((() => this.props.dispatch('player/moveCursor', {
						cursor: 0,
						loopStart: 0,
						loopEnd: 0
					})))
			},
			this.handleBackspace = t => {
				t.preventDefault();
				const {
					loopStart: e,
					loopEnd: n
				}
					= this.props.player.position;
				this.props.dispatch('player/moveCursor', {
					cursor: e,
					loopStart: e,
					loopEnd: n
				})
			},
			this.handleLeft = t => {
				t.preventDefault();
				const {
					part: e
				}
					= this.props,
					{
						loopStart: n,
						loopEnd: s
					}
						= this.props.player.position,
					i = li(e, this.props.player.audio.getCursor(), 'left'),
					a = i.measureLayout.measure.index,
					o = i.measureLayout.measure.beatsLayouts[0];
				let r = n;
				if (i !== o) {
					const t = o.leftTime;
					r = t > n ? t : n
				} else if (a > 0) {
					const {
						rightTime: t,
						leftTime: i
					}
						= e.measures[a - 1].beatsLayouts[0];
					r = 0 === s || n <= i ? i : n <= t ? t : n
				}
				this.props.dispatch('player/moveCursor', {
					cursor: r,
					loopStart: n,
					loopEnd: s
				})
			},
			this.handleRight = t => {
				t.preventDefault();
				const {
					part: e
				}
					= this.props,
					{
						loopStart: n,
						loopEnd: s
					}
						= this.props.player.position,
					i = li(e, this.props.player.audio.getCursor(), 'left').measureLayout.measure.index;
				let a = null;
				if (i < e.measures.length - 1) {
					const {
						rightTime: t,
						leftTime: n
					}
						= e.measures[i + 1].beatsLayouts[0];
					0 === s || t < s ? a = t : n < s && (a = n)
				}
				null !== a && this.props.dispatch('player/moveCursor', {
					cursor: a,
					loopStart: n,
					loopEnd: s
				})
			},
			this.handleUp = t => {
				t.preventDefault();
				const {
					part: e
				}
					= this.props,
					{
						loopStart: n,
						loopEnd: s
					}
						= this.props.player.position,
					i = li(e, this.props.player.audio.getCursor(), 'left'),
					a = i.measureLayout.lineLayout.line.index;
				if (a > 0) {
					const t = di(this.props.lines[a - 1], i.absoluteX, 'left');
					let e = null;
					const {
						rightTime: o,
						leftTime: r
					}
						= t;
					0 === s || n <= r ? e = r : n <= o && (e = o),
						null !== e && this.props.dispatch('player/moveCursor', {
							cursor: e,
							loopStart: n,
							loopEnd: s
						})
				}
			},
			this.handleDown = t => {
				t.preventDefault();
				const {
					part: e
				}
					= this.props,
					{
						loopStart: n,
						loopEnd: s
					}
						= this.props.player.position,
					i = li(e, this.props.player.audio.getCursor(), 'left'),
					a = i.measureLayout.lineLayout.line.index;
				if (a < this.props.lines.length - 1) {
					const t = di(this.props.lines[a + 1], i.absoluteX, 'left');
					let e = null;
					const {
						rightTime: o,
						leftTime: r
					}
						= t;
					0 === s || o < s ? e = o : r < s && (e = r),
						e && this.props.dispatch('player/moveCursor', {
							cursor: e,
							loopStart: n,
							loopEnd: s
						})
				}
			},
			this.state = {
				scale: t.scale,
				visible: !1
			},
			this.animationPlayId = void 0,
			this.keyMap = {
				backspace: this.handleBackspace,
				left: this.handleLeft,
				down: this.handleDown,
				up: this.handleUp,
				right: this.handleRight
			},
			this.tempoIndex = 0,
			this.pause = !0,
			this.layout = null,
			this.layoutTimestamp = 0,
			this.nextLayout = null,
			this.nextLayoutTimestamp = 0,
			this.formatTransform = 'iOS' === this.props.browser.family || 'Safari' === this.props.browser.family ? zo : qo
	}
	componentDidMount() {
		this.animationSeek(!1),
			this.state.visible || this.setState({
				visible: !0
			}),
			window.hotKeysManager.bind(this.keyMap, {
				onTab: !0
			})
	}
	componentDidUpdate(t, e, n) {
		const s = this.props,
			i = s.part !== t.part || s.lines !== t.lines,
			a = s.player.position !== t.player.position;
		if ((i || a) && (this.layout = null, this.layoutTimestamp = 0, this.nextLayout = null, this.nextLayoutTimestamp = 0), s.scale !== t.scale || i || a || s.player.speed !== t.player.speed || s.player.type !== t.player.type || s.player.pitchShift !== t.player.pitchShift || Ho(s) !== Ho(t)) {
			let e = this.animationSeek;
			Ho(t) ? e = Ho(s) ? this.animationRestart : this.animationPause : Ho(s) && (e = this.animationPlay);
			const n = t.part === s.part && t.lines === s.lines;
			e.call(this, n)
		}
	}
	componentWillUnmount() {
		this.pause = !0,
			this.animationPlayId && cancelAnimationFrame(this.animationPlayId),
			window.hotKeysManager.unbind(this.keyMap, {
				onTab: !0
			})
	}
	applyCursorCoordinates(t) {
		const {
			el: e,
			layout: n,
			nextLayout: s,
			layoutTimestamp: i
		}
			= this;
		let a;
		if (s && Fo(n, s)) {
			const t = n.absoluteLoopRightX - n.absoluteX,
				o = s.absoluteX - s.absoluteLoopLeftX,
				r = n.duration * t / (t + o),
				l = n.duration - r;
			a = a => {
				const c = a - i;
				e.current.style.transform = c < r ? this.formatTransform(this.props.scale, n.absoluteX + t * c / r, n.measureLayout.lineLayout, this.props.lines) : this.formatTransform(this.props.scale, s.absoluteLoopLeftX + o * (c - r) / l, s.measureLayout.lineLayout, this.props.lines)
			}
		} else {
			const t = s ? s.absoluteX - n.absoluteX : n.absoluteLoopRightX - n.absoluteX;
			a = s => {
				e.current.style.transform = this.formatTransform(this.props.scale, n.absoluteX + t * (s - i) / n.duration, n.measureLayout.lineLayout, this.props.lines)
			}
		}
		return a(t),
			a
	}
	updateCurrentTempo(t) {
		const e = this.props.part.tempos,
			n = n => e[n].timestamp <= t && (n === e.length - 1 || t < e[n + 1].timestamp);
		n(this.tempoIndex) || (this.tempoIndex = e.findIndex(((t, e) => n(e))), - 1 === this.tempoIndex && (this.tempoIndex = 0), this.props.dispatch('player/tempoApply', e[this.tempoIndex].tempo))
	}
	findLayoutUnderCursor(t) {
		if (!this.layout || !(this.layoutTimestamp <= t && t < this.layoutTimestamp + this.layout.duration)) {
			const e = function (t, e, n = 'left') {
				const {
					timestamps: s
				}
					= t,
					i = s[0],
					a = s[s.length - 1];
				if (e <= i) return 0;
				if (e >= a) return s.length - 1;
				let o = 0,
					r = s.length,
					l = 0;
				for (; r - o > 1;) {
					l = Math.floor((o + r) / 2);
					const t = s[l];
					if (e < t) r = l;
					else {
						if (!(e > t)) return l;
						o = l
					}
				}
				return r - o > 1 ? 'left' === n ? l : l - 1 : o
			}(this.props.part, t),
				{
					timeline: n,
					timestamps: s
				}
					= this.props.part;
			this.layoutTimestamp = s[e],
				this.layout = n.get(this.layoutTimestamp);
			let i = e < s.length - 1 ? s[e + 1] : null;
			const a = this.props.player.position.loopEnd;
			return 0 !== a && (null === i || i >= a - 1e-15) && (i = this.props.player.position.loopStart),
				this.nextLayout = null !== i ? n.get(i) : null,
				!0
		}
		return !1
	}
	animationSeek(t) {
		const e = this.props.player.audio.getCursor();
		this.findLayoutUnderCursor(e),
			this.applyCursorCoordinates(e),
			this.props.player.isLoopChanging || this.props.ensureLineVisibility(null, this.layout.measureLayout.lineLayout, !t),
			this.updateCurrentTempo(e)
	}
	animationPlay(t) {
		this.animationPlayId && cancelAnimationFrame(this.animationPlayId);
		let e = !1;
		const n = this.props.player.audio.getCursor();
		this.findLayoutUnderCursor(n);
		let s = this.applyCursorCoordinates(n),
			i = null;
		const a = () => {
			const t = this.layout.absoluteLoopRightX - this.layout.absoluteX,
				e = this.nextLayout.absoluteX - this.nextLayout.absoluteLoopLeftX,
				n = this.layout.duration * t / (t + e) * 0.8;
			return i = t => !!(this.layout && this.nextLayout && t - this.layoutTimestamp > n) && (this.props.ensureLineVisibility(this.layout.measureLayout.lineLayout, this.nextLayout.measureLayout.lineLayout, !1), i = null, !0),
				i
		};
		this.nextLayout && Fo(this.layout, this.nextLayout) && a()(n) || this.props.ensureLineVisibility(null, this.layout.measureLayout.lineLayout, !1);
		const o = window.requestAnimationFrame,
			r = () => {
				try {
					if (e || this.props.player.audio.isPositionChanged() && (e = !0), e) {
						const t = this.props.player.audio.getCursor();
						s && s(t),
							i && i(t),
							this.findLayoutUnderCursor(t) && (s = this.applyCursorCoordinates(t), this.nextLayout && Fo(this.layout, this.nextLayout) && a(), !this.nextLayout && t >= this.layout.loopRightTime - 1e-15 && (this.stopPlayback(), this.pause = !0)),
							this.updateCurrentTempo(t)
					}
					this.pause || (this.animationPlayId = o(r))
				} catch (t) {
					console.error(t)
				}
			};
		this.pause = !1,
			this.animationPlayId = o(r)
	}
	animationPause(t) {
		this.pause = !0
	}
	animationRestart(t) {
		this.animationPlayId && cancelAnimationFrame(this.animationPlayId),
			this.layout = null,
			this.layoutTimestamp = 0,
			this.nextLayout = null,
			this.nextLayoutTimestamp = 0,
			this.animationPlay(t)
	}
	moveTo(t) {
		const e = t.beatsLayouts;
		this.props.dispatch('player/moveCursor', {
			cursor: e[0].leftTime,
			loopStart: this.props.player.position.loopStart,
			loopEnd: this.props.player.position.loopEnd
		})
	}
	render() {
		const t = 12 * (this.props.part.strings - 1) + 22 + 12,
			e = !(this.props.player.canPlay || this.props.route.isPanel);
		return v('div', {
			className: Ro.wrap,
			ref: this.el
		}, this.state.visible && v('svg', {
			width: 12,
			height: t,
			className: e ? Ro.loading : Ro.normal
		}, v('defs', {
		}, v('filter', {
			id: 'CursorShadow',
			x: '-40%',
			width: '180%'
		}, v('feGaussianBlur', {
			in: 'SourceGraphic',
			stdDeviation: '2'
		}), v('feOffset', {
			dx: '0',
			dy: '2'
		}))), v($o, {
			width: 12,
			height: t
		})))
	}
}, 'player', 'route', 'browser');
class Vo extends x {
	render() {
		const {
			x: t,
			layout: e,
			handle: n
		}
			= this.props,
			s = e.measureLayout.lineLayout,
			i = s.loopY + 10,
			a = s.loopHeight - 20,
			o = `translate(${t},${i})`,
			r = 'left' === n ? 'matrix(-1,0,0,1,1,0)' : '',
			l = Math.floor(a / 2);
		return v('g', {
			className: 'Cqz26s',
			transform: o,
			'data-loop-handle': n
		}, v('path', {
			d: `M0 ${l - 12}q15 0 15 12t-15 12m1 0v${l - 12}h-2 v-${a}h2z`,
			className: 'Cqz2o9',
			transform: r
		}), v('path', {
			d: `M8 ${l - 4.5}l-4.5 4.5l4.5 4.5`,
			className: 'Cqzp7',
			transform: r
		}), v('rect', {
			x: - 10,
			y: - 1,
			height: a,
			width: 27,
			transform: r,
			className: 'Cqz154'
		}))
	}
}
class Go extends x {
	render() {
		const {
			leftLayout: t,
			rightLayout: e,
			lines: n
		}
			= this.props,
			s = t.absoluteLoopLeftX,
			i = e.absoluteLoopRightX,
			a = t.measureLayout.lineLayout,
			o = e.measureLayout.lineLayout,
			r = 'Cqz1rb';
		if (a === o) return v('rect', {
			className: r,
			rx: 3,
			height: a.loopHeight,
			x: s,
			y: a.loopY,
			width: i - s + 1
		});
		{
			const t = a.line.index,
				e = o.line.index,
				l = e - t,
				c = new Array(l + 1);
			c[0] = v('rect', {
				className: r,
				rx: 3,
				height: a.loopHeight,
				x: s,
				y: a.loopY,
				width: a.maxX - s,
				key: t
			}),
				c[l] = v('rect', {
					className: r,
					rx: 3,
					height: o.loopHeight,
					x: o.minX,
					y: o.loopY,
					width: i - o.minX,
					key: e
				});
			for (let s = t + 1; s < e; s++) {
				const e = n[s].layout;
				c[s - t] = v('rect', {
					className: r,
					rx: 3,
					height: e.loopHeight,
					x: e.minX,
					y: e.loopY,
					width: e.maxX,
					key: s
				})
			}
			return v('g', null, c)
		}
	}
}
const Xo = Pn && 'scrollBehavior' in document.documentElement.style;
class Yo {
	constructor() {
		this.animationLoop = () => {
			const t = (t => 0.5 * (1 - Math.cos(Math.PI * t)))(Math.min((Ti() - this.startTime) / 100, 1)),
				e = this.startY + (this.y - this.startY) * t;
			if (window.scrollTo(0, e), e !== this.y) {
				const t = window.requestAnimationFrame;
				this.scrollId = t(this.animationLoop)
			} else this.scrollId = void 0
		},
			this.y = 0,
			this.startY = 0,
			this.startTime = 0,
			this.scrollId = void 0
	}
	scroll(t, e, n) {
		if (this.scrollId && (cancelAnimationFrame(this.scrollId), this.scrollId = void 0), Xo) window.scrollTo({
			left: 0,
			top: t,
			behavior: e ? 'instant' : 'smooth'
		});
		else if (e || Math.abs(t - n) <= 5) window.scrollTo(0, t);
		else {
			this.y = t,
				this.startY = n,
				this.startTime = Ti();
			const e = window.requestAnimationFrame;
			this.scrollId = e(this.animationLoop)
		}
	}
	unmount() {
		this.scrollId && (cancelAnimationFrame(this.scrollId), this.scrollId = void 0)
	}
}
function Zo(t) {
	return 'android' === t.toLowerCase()
}
function Jo(t) {
	return 'ios' === t.toLowerCase()
}
const Ko = t => {
	!Pn && t.on('device/init', ((t, {
		device: e,
		browser: n
	}) => ({
		device: e,
		browser: n
	})))
};
function Qo(t) {
	const e = p(Bn),
		n = t.href || t.to,
		s = t.onClick,
		i = A((t => {
			(t => !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey))(t) || (t.preventDefault(), s && s(), e.dispatch('navigate', n))
		}), [
			n,
			s
		]);
	return v('a', Object.assign({
	}, t, {
		href: n,
		onClick: i,
		to: null
	}))
}
function tr() {
	return v('svg', {
		width: 54,
		height: 54,
		viewBox: '0 0 54 54'
	}, v('path', {
		d: 'M48 0a6 6 0 0 1 6 6v42a6 6 0 0 1-6 6h-42a6 6 0 0 1-6-6v-42a6 6 0 0 1 6-6zm-6.5 22.5h-10v-10h-9v10h-10v9h10v10h9v-10h10v-9z',
		fill: '#68d517'
	}))
}
function er({
	shadow: t = '#CA7F06',
	width: e = 54,
	height: n = 30,
	id: s = 'iconDemo'
}) {
	return v('svg', {
		width: e,
		height: n,
		viewBox: '0 0 54 30'
	}, v('defs', {
	}, v('filter', {
		id: s,
		x: '-200%',
		y: '-200%',
		width: '400%',
		height: '400%',
		'filter-units': 'objectBoundingBox',
		'color-interpolation-filters': 'sRGB'
	}, v('feGaussianBlur', {
		in: 'SourceGraphic'
	}), v('feOffset', {
		dy: 3,
		result: 'offsetBlur'
	}), v('feFlood', {
		'flood-color': t,
		'flood-opacity': 1
	}), v('feComposite', {
		in2: 'offsetBlur',
		operator: 'in',
		result: 'dropShadow'
	}), v('feBlend', {
		in: 'SourceGraphic',
		in2: 'dropShadow'
	}))), v('path', {
		d: 'M6.75 0h40.5A6.75 6.75 0 0 1 54 6.75v13.5A6.75 6.75 0 0 1 47.25 27H6.75A6.75 6.75 0 0 1 0 20.25V6.75A6.75 6.75 0 0 1 6.75 0z',
		fill: '#FF9D00',
		filter: `url(#${s})`,
		databackgound: ''
	}), v('path', {
		fill: '#FFF',
		d: 'M13.18 15.76c.02.29.06.52.11.69.06.17.13.29.23.36s.23.1.38.1.28-.03.37-.1c.1-.07.18-.19.23-.36.06-.17.1-.4.11-.69a15.57 15.57 0 0 0 0-2.13 3.03 3.03 0 0 0-.1-.69.67.67 0 0 0-.24-.36.62.62 0 0 0-.37-.1.66.66 0 0 0-.38.1.67.67 0 0 0-.23.36c-.05.17-.09.4-.1.69a16.65 16.65 0 0 0 0 2.13zm4.12-6.55v9.47h-2.57V17.6h-.03c-.17.44-.4.76-.68.96-.28.2-.66.3-1.13.3-.89 0-1.5-.36-1.86-1.05a7.6 7.6 0 0 1-.53-3.28c0-.75.06-1.39.18-1.9.12-.5.28-.92.5-1.23.2-.32.46-.55.76-.68a2.4 2.4 0 0 1 2.02.03c.3.17.51.45.65.87h.03V9.2h2.66zM14.63 5.48h2.69v2.69h-2.69zM22.12 12.42c-.1-.2-.3-.3-.58-.3-.28 0-.46.1-.57.3-.1.2-.15.5-.15.93v.35h1.46v-.35c0-.43-.05-.74-.16-.93zm-1.3 3.77c0 .43.07.72.22.86a.7.7 0 0 0 .5.21c.23 0 .42-.09.55-.28.14-.2.2-.56.2-1.1h2.39c-.02.98-.27 1.72-.75 2.22-.48.5-1.28.74-2.38.74-.64 0-1.17-.07-1.6-.21a2.19 2.19 0 0 1-1.05-.7 3.02 3.02 0 0 1-.57-1.3 9.42 9.42 0 0 1-.17-1.93c0-.77.07-1.41.2-1.94.12-.54.32-.97.6-1.3.27-.34.63-.58 1.05-.73.43-.15.94-.23 1.54-.23.54 0 1 .06 1.4.2.4.12.73.33 1 .63s.47.7.6 1.18c.14.49.2 1.1.2 1.82v.81h-3.93v1.05zM29.22 12.7c-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26H25.4v-7.97h2.57v.97h.03c.34-.79.99-1.18 1.93-1.18.55 0 .97.1 1.26.3.29.2.52.51.69.92.2-.45.48-.77.84-.95.36-.18.75-.27 1.16-.27.3 0 .57.03.82.1.25.06.47.18.65.34.2.17.34.4.45.67.1.27.16.63.16 1.06v6.01h-2.65v-5.26c0-.33-.05-.58-.15-.72-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26h-2.65v-5.26c0-.33-.05-.58-.15-.72zM39.4 15.93c.02.32.06.57.12.76.06.19.14.31.23.38.1.07.21.1.36.1s.27-.03.37-.1c.1-.07.17-.2.23-.38.05-.19.09-.44.1-.76a21.45 21.45 0 0 0 0-2.47 3.69 3.69 0 0 0-.1-.76c-.06-.19-.13-.32-.23-.39a.63.63 0 0 0-.37-.1.6.6 0 0 0-.36.1c-.1.07-.17.2-.23.39-.06.18-.1.44-.12.76a20.82 20.82 0 0 0 0 2.47zm3.99.3c-.07.5-.23.95-.47 1.34-.23.39-.57.7-1.02.93-.45.23-1.04.34-1.79.34-.78 0-1.39-.1-1.84-.31-.45-.21-.8-.51-1.02-.89a3.4 3.4 0 0 1-.43-1.32 13 13 0 0 1 .01-3.17c.07-.5.23-.95.47-1.34.23-.4.57-.7 1.02-.95a3.78 3.78 0 0 1 1.79-.36c.78 0 1.39.11 1.84.33.45.22.8.53 1.02.9.23.4.37.84.43 1.34a13 13 0 0 1-.01 3.16z'
	}))
}
var nr = {
	base: 'oo2w1',
	horizontalPopup: 'oo2w1 oo18g',
	verticalPopup: 'oo2w1 oo1bv',
	verticalLeftPopup: 'oo2w1 ookx',
	speedPopup: 'oo2w1 oo18g oo2yd',
	soloPopup: 'oo2w1 oo18g oo2dw',
	mutePopup: 'oo2w1 oo18g ool',
	loopPopup: 'oo2w1 oo18g ootw',
	printPopup: 'oo2w1 oo18g oo2wr',
	pitchshiftPopup: 'oo2w1 oo1r5',
	link: 'oonk',
	basewrapper: 'oo1og',
	wrapper: 'oo1og oo1tk',
	demowrapper: 'oo1og oo2f9',
	text: 'oo1jh',
	linkText: 'oom9',
	demoText: 'oo2fi',
	divider: 'oo1pt'
};
function sr(t, e, n) {
	return n ? nr[`${n}Popup`] : t ? nr.horizontalPopup : e ? nr.verticalLeftPopup : nr.verticalPopup
}
function ir({
	title: t,
	left: e,
	horizontal: n,
	classPrefix: s,
	leftOffset: i,
	topOffset: a
}) {
	let o = {
	};
	void 0 !== i && void 0 !== a && (o = {
		top: `${a}px`,
		left: `${i}px`
	});
	const {
		dispatch: r
	}
		= On(),
		l = A((() => {
			r('demo/activate')
		}), [
			r
		]),
		c = A((() => {
			r('curiosity/setConversionProps', {
				'Last referring link': `${t} Popup`
			})
		}), [
			t,
			r
		]);
	return v('div', {
		className: sr(n, e, s),
		style: o,
		role: 'dialog'
	}, v(Qo, {
		className: nr.link,
		to: '/a/wa/plus',
		'aria-label': `${t} is available on the Plus plan`,
		onClick: c
	}, v('span', {
		className: nr.wrapper
	}, v(tr, null)), v('div', {
		className: nr.text
	}, `${t} is available`, v('br', null), 'on the Plus plan', v('br', null), v('span', {
		className: nr.linkText
	}, 'See plans and pricing'))), v('div', {
		className: nr.divider
	}), v(Qo, {
		className: nr.link,
		to: '/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1',
		'aria-label': 'Try out Demo Song (all the features enabled)',
		onClick: l
	}, v('span', {
		className: nr.demowrapper
	}, v(er, null)), v('div', {
		className: nr.demoText
	}, `Try out ${t}`, v('br', null), v('span', {
		className: nr.linkText
	}, 'on the Demo Song'))))
}
class ar extends x {
	render() {
		const {
			dispatch: t,
			device: e,
			experiments: n
		}
			= On('device', 'experiments'),
			s = this.props.os || e.os,
			i = this.props.extra || {
			},
			a = this.props.attrs || {
			},
			o = ((t, e, n = {
			}) => {
				const s = n.source ? n.source + '_googlefc' : 'googlefc',
					i = e.googlefc || 'notset';
				return Zo(t) ? `https://play.google.com/store/apps/details?id=com.songsterr&referrer=utm_source%3D${s}%26utm_campaign%3D${i}` + (n.songId ? `%26tab_id%3D${n.songId}` : '') : `https://apps.apple.com/app/apple-store/id399211291?pt=414338&mt=8&at=10lcbo&ct=${s}_${i}`
			})(s, n, i),
			r = A((() => {
				t('player/togglePlay', !1)
			}), [
			]);
		return v('a', Object.assign({
		}, a, {
			href: o,
			onClick: r
		}), this.props.children)
	}
}
var or = '/static/media/appstore.dd39ee94.svg',
	rr = '/static/media/gplay.c1996475.svg';
function lr({
	title: t,
	left: e,
	leftOffset: n,
	topOffset: s,
	horizontal: i,
	device: a
}) {
	let o = e ? 'Crg11j Crg2sa' : i ? 'Crg11j Crg2by' : 'Crg11j Crg2kf',
		r = {
		};
	void 0 !== n && void 0 !== s && (r = {
		top: `${s}px`,
		left: `${n}px`
	}, o = 'Crg11j Crg170');
	let l = 'subscribe in the app';
	return Zo(a.os) && (l = 'buy in the app'),
		v('div', {
			role: 'dialog',
			className: o,
			style: r
		}, v(ar, {
			attrs: {
				className: 'Crg1fe',
				'aria-label': `${t} ${l}`
			},
			extra: {
				source: 'popup'
			}
		}, v('div', null, v('div', {
			className: 'Crg19s'
		}, t), v('div', {
			className: 'Crg1tt'
		}, l)), Zo(a.os) ? v('img', {
			src: rr,
			width: 160,
			height: 47,
			alt: 'Google Play'
		}) : v('img', {
			src: or,
			width: 160,
			height: 53,
			alt: 'AppStore'
		})))
}
function cr({
	tab: t,
	tuningButton: e
}) {
	const {
		device: n
	}
		= On('device');
	let s = 0,
		i = 0;
	if (t && e) {
		const n = t.getBoundingClientRect(),
			a = e.getBoundingClientRect();
		s = a.left - n.left + a.width + 21,
			i = a.top - n.top - (23 - a.height) - 14.5,
			i < 2 && (i = 2)
	}
	return Zo(n.os) ? v(lr, {
		title: 'Pitch Shift',
		device: n,
		leftOffset: s,
		topOffset: i
	}) : v(ir, {
		title: 'Pitch Shift',
		classPrefix: 'pitchshift',
		leftOffset: s,
		topOffset: i
	})
}
let ur = !0;
'undefined' != typeof document && 'function' == typeof document.createElement || (ur = !1);
const dr = ur ? document.createElement('canvas') : null;
dr && 'function' == typeof dr.getContext || (ur = !1);
const hr = dr && 'function' == typeof dr.getContext ? dr.getContext('2d') : null;
function pr(t, e) {
	if (!ur || !hr) return 0;
	const n = Object.assign({
	}, {
		style: 'normal',
		constiant: 'normal',
		weight: 'normal',
		size: 13,
		family: 'Helvetica Neue',
		align: 'start',
		baseline: 'alphabetic'
	}, e),
		s = 'number' == typeof n.size ? n.size + 'px' : n.size;
	return hr.font = `${n.style} ${n.constiant} ${n.weight} ${s} ${n.family}`,
		hr.textAlign = n.align,
		hr.textBaseline = n.baseline,
		hr.measureText(t).width
}
ur = !!hr && 'function' == typeof hr.measureText;
const fr = {
	family: 'Helvetica Neue',
	size: 13
};
function mr(t, e, n) {
	const s = t.split(' ');
	let i = s[0],
		a = pr(i, fr),
		o = 1;
	for (; o < s.length - 1; o++) {
		const t = pr(s[o], fr);
		if (a + 3.6139 + t > n) break;
		i += ' ' + s[o],
			a += 3.6139 + t
	}
	return i += '…',
	{
		phrase: {
			text: i,
			width: a + 13,
			layer: null
		},
		rest: {
			text: '…' + s.slice(o).join(' '),
			width: e - a + 13,
			layer: null
		}
	}
}
const gr = t => t.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-').replace(/[^a-z0-9-_]/g, '').replace(/-+/g, '-').replace(/^-*/g, '');
function yr(t, e = 0, n, s) {
	return t ? function (t, e, n) {
		return `/a/wsa/${t}${function (t) {
			if (void 0 !== t) {
				if (ms(t)) return 'drum-tab-s';
				if (ys(t)) return 'bass-tab-s'
			}
			return 'tab-s'
		}(n)}${e}`
	}((i = t.artist, a = t.title, gr(`${i}-${a}-`)), function (t, e, n) {
		return n ? `${t}t${e}/r${n}` : `${t}t${e}`
	}(t.songId, e, n), s) : '/';
	var i,
		a
}
function vr(t, e) {
	return `/a/wa/SongAdminTools/${t}?id=${e}`
}
function wr(t) {
	return `https://www.songsterr.com${t}`
}
function br(t) {
	switch (t) {
		case 'subscribe':
			return '/a/wa/plus/payment';
		case 'favorites':
			return '/a/wa/favorites';
		case 'account':
			return '/a/wa/account';
		case 'submit':
			return '/a/wa/submit';
		default:
			return '/'
	}
}
function xr() {
	return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
}
function Sr(t) {
	const e = t.rules || t.cssRules;
	for (const t of e) if (t.style.content && t.style.content.length) {
		const e = xr() + xr() + '-' + xr() + '-' + xr() + '-' + xr() + '-' + xr() + xr() + xr(),
			n = t.style.content.substring(0, 62) + e + t.style.content.substring(62 + e.length);
		n.length === t.style.content.length ? t.style.content = n : console.error('Something wrong with tracker url length')
	}
}
function kr(t, e) {
	if ('prod' !== window.__STAGE__) return;
	const n = t.rules || t.cssRules;
	for (const t of n) {
		const n = JSON.stringify({
			name: 'Printed tab',
			props: e
		}),
			s = window.btoa(n);
		t.style.content = `url(${wr(`/actions/events/track?data=${s}`)})`
	}
}
const Cr = !Pn || !!window.requestAnimationFrame;
var _r = t('iterator');
try {
	var Er = 0,
		Nr = {
			next: function () {
				return {
					done: !!Er++
				}
			},
			return: function () {
			}
		};
	Nr[_r] = function () {
		return this
	},
		Array.from(Nr, (function () {
			throw 2
		}))
} catch (t) {
}
var Lr = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView,
	Tr = {
	};
Tr[t('toStringTag')] = 'z';
var Ir,
	Ar = '[object z]' === String(Tr),
	Pr = t('toStringTag'),
	Mr = 'Arguments' == N(function () {
		return arguments
	}()),
	Br = Ar ? N : function (t) {
		var e,
			n,
			s;
		return void 0 === t ? 'Undefined' : null === t ? 'Null' : 'string' == typeof (n = function (t, e) {
			try {
				return t[e]
			} catch (t) {
			}
		}(e = Object(t), Pr)) ? n : Mr ? N(e) : 'Object' == (s = N(e)) && 'function' == typeof e.callee ? 'Arguments' : s
	},
	Dr = s.f,
	Or = a.Int8Array,
	Rr = Or && Or.prototype,
	jr = a.Uint8ClampedArray,
	$r = jr && jr.prototype,
	Fr = Or && P(Or),
	Hr = Rr && P(Rr),
	zr = Object.prototype,
	qr = zr.isPrototypeOf,
	Ur = t('toStringTag'),
	Wr = M('TYPED_ARRAY_TAG'),
	Vr = Lr && !!B && 'Opera' !== Br(a.opera),
	Gr = !1,
	Xr = {
		Int8Array: 1,
		Uint8Array: 1,
		Uint8ClampedArray: 1,
		Int16Array: 2,
		Uint16Array: 2,
		Int32Array: 4,
		Uint32Array: 4,
		Float32Array: 4,
		Float64Array: 8
	},
	Yr = function (t) {
		return l(t) && n(Xr, Br(t))
	};
for (Ir in Xr) a[Ir] || (Vr = !1);
if ((!Vr || 'function' != typeof Fr || Fr === Function.prototype) && (Fr = function () {
	throw TypeError('Incorrect invocation')
}, Vr)) for (Ir in Xr) a[Ir] && B(a[Ir], Fr);
if ((!Vr || !Hr || Hr === zr) && (Hr = Fr.prototype, Vr)) for (Ir in Xr) a[Ir] && B(a[Ir].prototype, Hr);
if (Vr && P($r) !== Hr && B($r, Hr), E && !n(Hr, Ur)) for (Ir in Gr = !0, Dr(Hr, Ur, {
	get: function () {
		return l(this) ? this[Wr] : void 0
	}
}), Xr) a[Ir] && D(a[Ir], Wr, Ir);
var Zr = {
	NATIVE_ARRAY_BUFFER_VIEWS: Vr,
	TYPED_ARRAY_TAG: Gr && Wr,
	aTypedArray: function (t) {
		if (Yr(t)) return t;
		throw TypeError('Target is not a typed array')
	},
	aTypedArrayConstructor: function (t) {
		if (B) {
			if (qr.call(Fr, t)) return t
		} else for (var e in Xr) if (n(Xr, Ir)) {
			var s = a[e];
			if (s && (t === s || qr.call(s, t))) return t
		}
		throw TypeError('Target is not a typed array constructor')
	},
	exportTypedArrayMethod: function (t, e, s) {
		if (E) {
			if (s) for (var i in Xr) {
				var o = a[i];
				o && n(o.prototype, t) && delete o.prototype[t]
			}
			Hr[t] && !s || d(Hr, t, s ? e : Vr && Rr[t] || e)
		}
	},
	exportTypedArrayStaticMethod: function (t, e, s) {
		var i,
			o;
		if (E) {
			if (B) {
				if (s) for (i in Xr) (o = a[i]) && n(o, t) && delete o[t];
				if (Fr[t] && !s) return;
				try {
					return d(Fr, t, s ? e : Vr && Or[t] || e)
				} catch (t) {
				}
			}
			for (i in Xr) !(o = a[i]) || o[t] && !s || d(o, t, e)
		}
	},
	isView: function (t) {
		var e = Br(t);
		return 'DataView' === e || n(Xr, e)
	},
	isTypedArray: Yr,
	TypedArray: Fr,
	TypedArrayPrototype: Hr
},
	Jr = Zr.NATIVE_ARRAY_BUFFER_VIEWS,
	Kr = a.ArrayBuffer,
	Qr = a.Int8Array,
	tl = !Jr || !c((function () {
		Qr(1)
	})) || !c((function () {
		new Qr(- 1)
	})) || !function (t, e) {
		var n,
			s = !1;
		try {
			var i = {
			};
			i[_r] = function () {
				return {
					next: function () {
						return {
							done: s = !0
						}
					}
				}
			},
				n = i,
				new Qr,
				new Qr(null),
				new Qr(1.5),
				new Qr(n)
		} catch (t) {
		}
		return s
	}() || c((function () {
		return 1 !== new Qr(new Kr(2), 1, void 0).length
	})),
	el = function (t, e, n) {
		for (var s in e) d(t, s, e[s], n);
		return t
	},
	nl = function (t, e, n) {
		if (!(t instanceof e)) throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
		return t
	},
	sl = function (t) {
		if (void 0 === t) return 0;
		var e = O(t),
			n = _(e);
		if (e !== n) throw RangeError('Wrong length or index');
		return n
	},
	il = Math.abs,
	al = Math.pow,
	ol = Math.floor,
	rl = Math.log,
	ll = Math.LN2,
	cl = function (t) {
		for (var e = k(this), n = _(e.length), s = arguments.length, i = R(s > 1 ? arguments[1] : void 0, n), a = s > 2 ? arguments[2] : void 0, o = void 0 === a ? n : R(a, n); o > i;) e[i++] = t;
		return e
	},
	ul = $.f,
	dl = s.f,
	hl = F.get,
	pl = F.set,
	fl = a.ArrayBuffer,
	ml = fl,
	gl = a.DataView,
	yl = gl && gl.prototype,
	vl = Object.prototype,
	wl = a.RangeError,
	bl = function (t, e, n) {
		var s,
			i,
			a,
			o = new Array(n),
			r = 8 * n - e - 1,
			l = (1 << r) - 1,
			c = l >> 1,
			u = 23 === e ? al(2, - 24) - al(2, - 77) : 0,
			d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0,
			h = 0;
		for ((t = il(t)) != t || 1 / 0 === t ? (i = t != t ? 1 : 0, s = l) : (s = ol(rl(t) / ll), t * (a = al(2, - s)) < 1 && (s--, a *= 2), (t += s + c >= 1 ? u / a : u * al(2, 1 - c)) * a >= 2 && (s++, a /= 2), s + c >= l ? (i = 0, s = l) : s + c >= 1 ? (i = (t * a - 1) * al(2, e), s += c) : (i = t * al(2, c - 1) * al(2, e), s = 0)); e >= 8; o[h++] = 255 & i, i /= 256, e -= 8);
		for (s = s << e | i, r += e; r > 0; o[h++] = 255 & s, s /= 256, r -= 8);
		return o[--h] |= 128 * d,
			o
	},
	xl = function (t, e) {
		var n,
			s = t.length,
			i = 8 * s - e - 1,
			a = (1 << i) - 1,
			o = a >> 1,
			r = i - 7,
			l = s - 1,
			c = t[l--],
			u = 127 & c;
		for (c >>= 7; r > 0; u = 256 * u + t[l], l--, r -= 8);
		for (n = u & (1 << - r) - 1, u >>= - r, r += e; r > 0; n = 256 * n + t[l], l--, r -= 8);
		if (0 === u) u = 1 - o;
		else {
			if (u === a) return n ? NaN : c ? - 1 / 0 : 1 / 0;
			n += al(2, e),
				u -= o
		}
		return (c ? - 1 : 1) * n * al(2, u - e)
	},
	Sl = function (t) {
		return [255 & t]
	},
	kl = function (t) {
		return [255 & t,
		t >> 8 & 255]
	},
	Cl = function (t) {
		return [255 & t,
		t >> 8 & 255,
		t >> 16 & 255,
		t >> 24 & 255]
	},
	_l = function (t) {
		return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
	},
	El = function (t) {
		return bl(t, 23, 4)
	},
	Nl = function (t) {
		return bl(t, 52, 8)
	},
	Ll = function (t, e) {
		dl(t.prototype, e, {
			get: function () {
				return hl(this)[e]
			}
		})
	},
	Tl = function (t, e, n, s) {
		var i = sl(n),
			a = hl(t);
		if (i + e > a.byteLength) throw wl('Wrong index');
		var o = hl(a.buffer).bytes,
			r = i + a.byteOffset,
			l = o.slice(r, r + e);
		return s ? l : l.reverse()
	},
	Il = function (t, e, n, s, i, a) {
		var o = sl(n),
			r = hl(t);
		if (o + e > r.byteLength) throw wl('Wrong index');
		for (var l = hl(r.buffer).bytes, c = o + r.byteOffset, u = s(+ i), d = 0; d < e; d++) l[c + d] = u[a ? d : e - d - 1]
	};
if (Lr) {
	if (!c((function () {
		fl(1)
	})) || !c((function () {
		new fl(- 1)
	})) || c((function () {
		return new fl,
			new fl(1.5),
			new fl(NaN),
			'ArrayBuffer' != fl.name
	}))) {
		for (var Al, Pl = (ml = function (t) {
			return nl(this, ml),
				new fl(sl(t))
		}).prototype = fl.prototype, Ml = ul(fl), Bl = 0; Ml.length > Bl;) (Al = Ml[Bl++]) in ml || D(ml, Al, fl[Al]);
		Pl.constructor = ml
	}
	B && P(yl) !== vl && B(yl, vl);
	var Dl = new gl(new ml(2)),
		Ol = yl.setInt8;
	Dl.setInt8(0, 2147483648),
		Dl.setInt8(1, 2147483649),
		!Dl.getInt8(0) && Dl.getInt8(1) || el(yl, {
			setInt8: function (t, e) {
				Ol.call(this, t, e << 24 >> 24)
			},
			setUint8: function (t, e) {
				Ol.call(this, t, e << 24 >> 24)
			}
		}, {
			unsafe: !0
		})
} else ml = function (t) {
	nl(this, ml, 'ArrayBuffer');
	var e = sl(t);
	pl(this, {
		bytes: cl.call(new Array(e), 0),
		byteLength: e
	}),
		E || (this.byteLength = e)
},
	gl = function (t, e, n) {
		nl(this, gl, 'DataView'),
			nl(t, ml, 'DataView');
		var s = hl(t).byteLength,
			i = O(e);
		if (i < 0 || i > s) throw wl('Wrong offset');
		if (i + (n = void 0 === n ? s - i : _(n)) > s) throw wl('Wrong length');
		pl(this, {
			buffer: t,
			byteLength: n,
			byteOffset: i
		}),
			E || (this.buffer = t, this.byteLength = n, this.byteOffset = i)
	},
	E && (Ll(ml, 'byteLength'), Ll(gl, 'buffer'), Ll(gl, 'byteLength'), Ll(gl, 'byteOffset')),
	el(gl.prototype, {
		getInt8: function (t) {
			return Tl(this, 1, t)[0] << 24 >> 24
		},
		getUint8: function (t) {
			return Tl(this, 1, t)[0]
		},
		getInt16: function (t) {
			var e = Tl(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
			return (e[1] << 8 | e[0]) << 16 >> 16
		},
		getUint16: function (t) {
			var e = Tl(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
			return e[1] << 8 | e[0]
		},
		getInt32: function (t) {
			return _l(Tl(this, 4, t, arguments.length > 1 ? arguments[1] : void 0))
		},
		getUint32: function (t) {
			return _l(Tl(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
		},
		getFloat32: function (t) {
			return xl(Tl(this, 4, t, arguments.length > 1 ? arguments[1] : void 0), 23)
		},
		getFloat64: function (t) {
			return xl(Tl(this, 8, t, arguments.length > 1 ? arguments[1] : void 0), 52)
		},
		setInt8: function (t, e) {
			Il(this, 1, t, Sl, e)
		},
		setUint8: function (t, e) {
			Il(this, 1, t, Sl, e)
		},
		setInt16: function (t, e) {
			Il(this, 2, t, kl, e, arguments.length > 2 ? arguments[2] : void 0)
		},
		setUint16: function (t, e) {
			Il(this, 2, t, kl, e, arguments.length > 2 ? arguments[2] : void 0)
		},
		setInt32: function (t, e) {
			Il(this, 4, t, Cl, e, arguments.length > 2 ? arguments[2] : void 0)
		},
		setUint32: function (t, e) {
			Il(this, 4, t, Cl, e, arguments.length > 2 ? arguments[2] : void 0)
		},
		setFloat32: function (t, e) {
			Il(this, 4, t, El, e, arguments.length > 2 ? arguments[2] : void 0)
		},
		setFloat64: function (t, e) {
			Il(this, 8, t, Nl, e, arguments.length > 2 ? arguments[2] : void 0)
		}
	});
j(ml, 'ArrayBuffer'),
	j(gl, 'DataView');
var Rl = {
	ArrayBuffer: ml,
	DataView: gl
},
	jl = function (t, e) {
		var n = function (t) {
			var e = O(t);
			if (e < 0) throw RangeError('The argument can\'t be less than 0');
			return e
		}(t);
		if (n % e) throw RangeError('Wrong offset');
		return n
	},
	$l = t('iterator'),
	Fl = function (t) {
		if (null != t) return t[$l] || t['@@iterator'] || H[Br(t)]
	},
	Hl = t('iterator'),
	zl = Array.prototype,
	ql = function (t) {
		return void 0 !== t && (H.Array === t || zl[Hl] === t)
	},
	Ul = function (t, e, n) {
		if (r(t), void 0 === e) return t;
		switch (n) {
			case 0:
				return function () {
					return t.call(e)
				};
			case 1:
				return function (n) {
					return t.call(e, n)
				};
			case 2:
				return function (n, s) {
					return t.call(e, n, s)
				};
			case 3:
				return function (n, s, i) {
					return t.call(e, n, s, i)
				}
		}
		return function () {
			return t.apply(e, arguments)
		}
	},
	Wl = Zr.aTypedArrayConstructor,
	Vl = function (t) {
		var e,
			n,
			s,
			i,
			a,
			o,
			r = k(t),
			l = arguments.length,
			c = l > 1 ? arguments[1] : void 0,
			u = void 0 !== c,
			d = Fl(r);
		if (null != d && !ql(d)) for (o = (a = d.call(r)).next, r = [
		]; !(i = o.call(a)).done;) r.push(i.value);
		for (u && l > 2 && (c = Ul(c, arguments[2], 2)), n = _(r.length), s = new (Wl(this))(n), e = 0; n > e; e++) s[e] = u ? c(r[e], e) : r[e];
		return s
	},
	Gl = t('species'),
	Xl = function (t, e) {
		var n;
		return z(t) && ('function' != typeof (n = t.constructor) || n !== Array && !z(n.prototype) ? l(n) && null === (n = n[Gl]) && (n = void 0) : n = void 0),
			new (void 0 === n ? Array : n)(0 === e ? 0 : e)
	},
	Yl = [
	].push,
	Zl = function (t) {
		var e = 1 == t,
			n = 2 == t,
			s = 3 == t,
			i = 4 == t,
			a = 6 == t,
			o = 7 == t,
			r = 5 == t || a;
		return function (l, c, u, d) {
			for (var h, p, f = k(l), m = C(f), g = Ul(c, u, 3), y = _(m.length), v = 0, w = d || Xl, b = e ? w(l, y) : n || o ? w(l, 0) : void 0; y > v; v++) if ((r || v in m) && (p = g(h = m[v], v, f), t)) if (e) b[v] = p;
			else if (p) switch (t) {
				case 3:
					return !0;
				case 5:
					return h;
				case 6:
					return v;
				case 2:
					Yl.call(b, h)
			} else switch (t) {
				case 4:
					return !1;
				case 7:
					Yl.call(b, h)
			}
			return a ? - 1 : s || i ? i : b
		}
	},
	Jl = {
		forEach: Zl(0),
		map: Zl(1),
		filter: Zl(2),
		some: Zl(3),
		every: Zl(4),
		find: Zl(5),
		findIndex: Zl(6),
		filterOut: Zl(7)
	},
	Kl = t('species');
q((function (t) {
	var e = $.f,
		o = Jl.forEach,
		r = F.get,
		c = F.set,
		d = s.f,
		h = G.f,
		p = Math.round,
		f = a.RangeError,
		m = Rl.ArrayBuffer,
		g = Rl.DataView,
		y = Zr.NATIVE_ARRAY_BUFFER_VIEWS,
		v = Zr.TYPED_ARRAY_TAG,
		w = Zr.TypedArray,
		b = Zr.TypedArrayPrototype,
		x = Zr.aTypedArrayConstructor,
		S = Zr.isTypedArray,
		k = 'BYTES_PER_ELEMENT',
		C = 'Wrong length',
		N = function (t, e) {
			for (var n = 0, s = e.length, i = new (x(t))(s); s > n;) i[n] = e[n++];
			return i
		},
		L = function (t, e) {
			d(t, e, {
				get: function () {
					return r(this)[e]
				}
			})
		},
		T = function (t) {
			var e;
			return t instanceof m || 'ArrayBuffer' == (e = Br(t)) || 'SharedArrayBuffer' == e
		},
		I = function (t, e) {
			return S(t) && 'symbol' != typeof e && e in t && String(+ e) == String(e)
		},
		A = function (t, e) {
			return I(t, e = W(e, !0)) ? V(2, t[e]) : h(t, e)
		},
		P = function (t, e, s) {
			return !(I(t, e = W(e, !0)) && l(s) && n(s, 'value')) || n(s, 'get') || n(s, 'set') || s.configurable || n(s, 'writable') && !s.writable || n(s, 'enumerable') && !s.enumerable ? d(t, e, s) : (t[e] = s.value, t)
		};
	E ? (y || (G.f = A, s.f = P, L(b, 'buffer'), L(b, 'byteOffset'), L(b, 'byteLength'), L(b, 'length')), i({
		target: 'Object',
		stat: !0,
		forced: !y
	}, {
		getOwnPropertyDescriptor: A,
		defineProperty: P
	}), t.exports = function (t, n, h) {
		var x = t.match(/\d+$/)[0] / 8,
			L = t + (h ? 'Clamped' : '') + 'Array',
			I = 'get' + t,
			A = 'set' + t,
			P = a[L],
			M = P,
			O = M && M.prototype,
			R = {
			},
			j = function (t, e) {
				d(t, e, {
					get: function () {
						return function (t, e) {
							var n = r(t);
							return n.view[I](e * x + n.byteOffset, !0)
						}(this, e)
					},
					set: function (t) {
						return function (t, e, n) {
							var s = r(t);
							h && (n = (n = p(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n),
								s.view[A](e * x + s.byteOffset, n, !0)
						}(this, e, t)
					},
					enumerable: !0
				})
			};
		y ? tl && (M = n((function (t, e, n, s) {
			return nl(t, M, L),
				function (t, e, n) {
					var s,
						i;
					return B && 'function' == typeof (s = e.constructor) && s !== n && l(i = s.prototype) && i !== n.prototype && B(t, i),
						t
				}(l(e) ? T(e) ? void 0 !== s ? new P(e, jl(n, x), s) : void 0 !== n ? new P(e, jl(n, x)) : new P(e) : S(e) ? N(M, e) : Vl.call(M, e) : new P(sl(e)), t, M)
		})), B && B(M, w), o(e(P), (function (t) {
			t in M || D(M, t, P[t])
		})), M.prototype = O) : (M = n((function (t, e, n, s) {
			nl(t, M, L);
			var i,
				a,
				o,
				r = 0,
				u = 0;
			if (l(e)) {
				if (!T(e)) return S(e) ? N(M, e) : Vl.call(M, e);
				i = e,
					u = jl(n, x);
				var d = e.byteLength;
				if (void 0 === s) {
					if (d % x) throw f(C);
					if ((a = d - u) < 0) throw f(C)
				} else if ((a = _(s) * x) + u > d) throw f(C);
				o = a / x
			} else o = sl(e),
				i = new m(a = o * x);
			for (c(t, {
				buffer: i,
				byteOffset: u,
				byteLength: a,
				length: o,
				view: new g(i)
			}); r < o;) j(t, r++)
		})), B && B(M, w), O = M.prototype = U(b)),
			O.constructor !== M && D(O, 'constructor', M),
			v && D(O, v, L),
			R[L] = M,
			i({
				global: !0,
				forced: M != P,
				sham: !y
			}, R),
			k in M || D(M, k, x),
			k in O || D(O, k, x),
			function (t) {
				var e = u(t),
					n = s.f;
				E && e && !e[Kl] && n(e, Kl, {
					configurable: !0,
					get: function () {
						return this
					}
				})
			}(L)
	}) : t.exports = function () {
	}
}))('Uint32', (function (t) {
	return function (e, n, s) {
		return t(this, e, n, s)
	}
}));
class Ql {
	constructor(t, e, n) {
		this.x = + t.toFixed(2),
			this.y = + e.toFixed(2),
			this.time = n || Date.now()
	}
	distanceTo(t) {
		return Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2))
	}
	equals(t) {
		return this.x === t.x && this.y === t.y && this.time === t.time
	}
	velocityFrom(t) {
		return this.time !== t.time ? this.distanceTo(t) / (this.time - t.time) : 0
	}
}
class tc {
	constructor(t, e, n, s, i, a) {
		this.startPoint = t,
			this.control2 = e,
			this.control1 = n,
			this.endPoint = s,
			this.startWidth = i,
			this.endWidth = a
	}
	static fromPoints(t, e) {
		const n = this.calculateControlPoints(t[0], t[1], t[2]).c2,
			s = this.calculateControlPoints(t[1], t[2], t[3]).c1;
		return new tc(t[1], n, s, t[2], e.start, e.end)
	}
	static calculateControlPoints(t, e, n) {
		const s = t.x - e.x,
			i = t.y - e.y,
			a = e.x - n.x,
			o = e.y - n.y,
			r = (t.x + e.x) / 2,
			l = (t.y + e.y) / 2,
			c = (e.x + n.x) / 2,
			u = (e.y + n.y) / 2,
			d = Math.sqrt(s * s + i * i),
			h = Math.sqrt(a * a + o * o),
			p = h / (d + h),
			f = c + (r - c) * p,
			m = u + (l - u) * p,
			g = e.x - f,
			y = e.y - m;
		return {
			c1: new Ql(r + g, l + y),
			c2: new Ql(c + g, u + y)
		}
	}
	length() {
		let t,
			e,
			n = 0;
		for (let s = 0; s <= 10; s += 1) {
			const i = s / 10,
				a = this.point(i, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x),
				o = this.point(i, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
			if (s > 0) {
				const s = a - t,
					i = o - e;
				n += Math.sqrt(s * s + i * i)
			}
			t = a,
				e = o
		}
		return n
	}
	point(t, e, n, s, i) {
		return e * (1 - t) * (1 - t) * (1 - t) + 3 * n * (1 - t) * (1 - t) * t + 3 * s * (1 - t) * t * t + i * t * t * t
	}
}
class ec {
	constructor(t, e = {
	}) {
		this.canvas = t,
			this.options = e,
			this._handleMouseDown = t => {
				1 === t.which && (this._mouseButtonDown = !0, this._strokeBegin(t))
			},
			this._handleMouseMove = t => {
				this._mouseButtonDown && this._strokeMoveUpdate(t)
			},
			this._handleMouseUp = t => {
				1 === t.which && this._mouseButtonDown && (this._mouseButtonDown = !1, this._strokeEnd(t))
			},
			this._handleTouchStart = t => {
				if (t.targetTouches.length > 1) this._multitouchActive = !0;
				else {
					const e = t.changedTouches[0];
					this._strokeBegin(e)
				}
			},
			this._handleTouchMove = t => {
				if (1 === t.targetTouches.length && !this._multitouchActive) {
					const e = t.targetTouches[0];
					this._strokeMoveUpdate(e)
				}
			},
			this._handleTouchEnd = t => {
				if (t.target === this.canvas && 0 === t.targetTouches.length) if (this._multitouchActive) this._multitouchActive = !1;
				else {
					t.preventDefault();
					const e = t.changedTouches[0];
					this._strokeEnd(e)
				}
			},
			this.velocityFilterWeight = e.velocityFilterWeight || 0.7,
			this.minWidth = e.minWidth || 0.5,
			this.maxWidth = e.maxWidth || 2.5,
			this.throttle = 'throttle' in e ? e.throttle : 16,
			this.minDistance = 'minDistance' in e ? e.minDistance : 5,
			this.dotSize = e.dotSize || function () {
				return (this.minWidth + this.maxWidth) / 2
			},
			this.penColor = e.penColor || 'black',
			this.backgroundColor = e.backgroundColor || 'rgba(0,0,0,0)',
			this.onBegin = e.onBegin,
			this.onEnd = e.onEnd,
			this._strokeMoveUpdate = this.throttle ? Ai(ec.prototype._strokeUpdate, this.throttle) : ec.prototype._strokeUpdate,
			this._ctx = t.getContext('2d'),
			this.clear(),
			this.on()
	}
	clear() {
		const {
			_ctx: t,
			canvas: e
		}
			= this;
		t.fillStyle = this.backgroundColor,
			t.clearRect(0, 0, e.width, e.height),
			t.fillRect(0, 0, e.width, e.height),
			this._data = [
			],
			this._reset(),
			this._isEmpty = !0
	}
	eraserMode() {
		this._ctx.globalCompositeOperation = 'destination-out'
	}
	penMode() {
		this._ctx.globalCompositeOperation = 'source-over'
	}
	fromDataURL(t, e = {
	}, n) {
		const s = new Image,
			i = e.ratio || window.devicePixelRatio || 1,
			a = e.width || this.canvas.width / i,
			o = e.height || this.canvas.height / i;
		this._reset();
		const r = this._ctx.globalCompositeOperation;
		this._ctx.globalCompositeOperation = 'source-over',
			s.onload = () => {
				this._ctx.drawImage(s, 0, 0, a, o),
					this._ctx.globalCompositeOperation = r,
					n && n()
			},
			s.onerror = t => {
				this._ctx.globalCompositeOperation = r,
					n && n(t)
			},
			s.src = t,
			this._isEmpty = !1
	}
	toDataURL(t = 'image/png', e) {
		switch (t) {
			case 'image/svg+xml':
				return this._toSVG();
			default:
				return this.canvas.toDataURL(t, e)
		}
	}
	on() {
		this.canvas.style.touchAction = 'pinch-zoom',
			this.canvas.style.msTouchAction = 'pinch-zoom',
			this.options.isTablet ? this._handleTouchEvents() : window.PointerEvent ? this._handlePointerEvents() : this._handleMouseEvents()
	}
	off() {
		this.canvas.style.touchAction = 'auto',
			this.canvas.style.msTouchAction = 'auto',
			this.canvas.removeEventListener('pointerdown', this._handleMouseDown),
			this.canvas.removeEventListener('pointermove', this._handleMouseMove),
			document.removeEventListener('pointerup', this._handleMouseUp),
			this.canvas.removeEventListener('mousedown', this._handleMouseDown),
			this.canvas.removeEventListener('mousemove', this._handleMouseMove),
			document.removeEventListener('mouseup', this._handleMouseUp),
			this.canvas.removeEventListener('touchstart', this._handleTouchStart),
			this.canvas.removeEventListener('touchmove', this._handleTouchMove),
			this.canvas.removeEventListener('touchend', this._handleTouchEnd)
	}
	isEmpty() {
		return this._isEmpty
	}
	isClear() {
		const t = this._ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data.buffer;
		return !new Uint32Array(t).some((t => 0 !== t))
	}
	fromData(t, e = !0) {
		e && this.clear(),
			this._fromData(t, (({
				color: t,
				curve: e
			}) => this._drawCurve({
				color: t,
				curve: e
			})), (({
				color: t,
				point: e
			}) => this._drawDot({
				color: t,
				point: e
			}))),
			this._data = t
	}
	toData() {
		return this._data
	}
	_strokeBegin(t) {
		const e = {
			color: this.penColor,
			points: [
			]
		};
		'function' == typeof this.onBegin && this.onBegin(t),
			this._data.push(e),
			this._reset(),
			this._strokeUpdate(t)
	}
	_strokeUpdate(t) {
		if (0 === this._data.length) return void this._strokeBegin(t);
		const e = t.clientX,
			n = t.clientY,
			s = this._createPoint(e, n),
			i = this._data[this._data.length - 1],
			a = i.points,
			o = a.length > 0 && a[a.length - 1],
			r = !!o && s.distanceTo(o) <= this.minDistance,
			l = i.color;
		if (!o || !o || !r) {
			const t = this._addPoint(s);
			o ? t && this._drawCurve({
				color: l,
				curve: t
			}) : this._drawDot({
				color: l,
				point: s
			}),
				a.push({
					time: s.time,
					x: s.x,
					y: s.y
				})
		}
	}
	_strokeEnd(t) {
		this._strokeUpdate(t),
			'function' == typeof this.onEnd && this.onEnd(t)
	}
	_handlePointerEvents() {
		this._mouseButtonDown = !1,
			this.canvas.addEventListener('pointerdown', this._handleMouseDown),
			this.canvas.addEventListener('pointermove', this._handleMouseMove),
			document.addEventListener('pointerup', this._handleMouseUp)
	}
	_handleMouseEvents() {
		this._mouseButtonDown = !1,
			this.canvas.addEventListener('mousedown', this._handleMouseDown),
			this.canvas.addEventListener('mousemove', this._handleMouseMove),
			document.addEventListener('mouseup', this._handleMouseUp)
	}
	_handleTouchEvents() {
		this._multitouchActive = !1,
			this.canvas.addEventListener('touchstart', this._handleTouchStart, {
				passive: !1
			}),
			this.canvas.addEventListener('touchmove', this._handleTouchMove, {
				passive: !1
			}),
			this.canvas.addEventListener('touchend', this._handleTouchEnd, {
				passive: !1
			})
	}
	_reset() {
		this._lastPoints = [
		],
			this._lastVelocity = 0,
			this._lastWidth = (this.minWidth + this.maxWidth) / 2,
			this._ctx.fillStyle = this.penColor
	}
	_createPoint(t, e) {
		const n = this.canvas.getBoundingClientRect();
		return new Ql(t - n.left, e - n.top, (new Date).getTime())
	}
	_addPoint(t) {
		const {
			_lastPoints: e
		}
			= this;
		if (e.push(t), e.length > 2) {
			3 === e.length && e.unshift(e[0]);
			const t = this._calculateCurveWidths(e[1], e[2]),
				n = tc.fromPoints(e, t);
			return e.shift(),
				n
		}
		return null
	}
	_calculateCurveWidths(t, e) {
		const n = this.velocityFilterWeight * e.velocityFrom(t) + (1 - this.velocityFilterWeight) * this._lastVelocity,
			s = this._strokeWidth(n),
			i = {
				end: s,
				start: this._lastWidth
			};
		return this._lastVelocity = n,
			this._lastWidth = s,
			i
	}
	_strokeWidth(t) {
		return Math.max(this.maxWidth / (t + 1), this.minWidth)
	}
	_drawCurveSegment(t, e, n) {
		const s = this._ctx;
		s.moveTo(t, e),
			s.arc(t, e, n, 0, 2 * Math.PI, !1),
			this._isEmpty = !1
	}
	_drawCurve({
		color: t,
		curve: e
	}) {
		const n = this._ctx,
			s = e.endWidth - e.startWidth,
			i = 2 * Math.floor(e.length());
		n.beginPath(),
			n.fillStyle = t;
		for (let t = 0; t < i; t += 1) {
			const n = t / i,
				a = n * n,
				o = a * n,
				r = 1 - n,
				l = r * r,
				c = l * r;
			let u = c * e.startPoint.x;
			u += 3 * l * n * e.control1.x,
				u += 3 * r * a * e.control2.x,
				u += o * e.endPoint.x;
			let d = c * e.startPoint.y;
			d += 3 * l * n * e.control1.y,
				d += 3 * r * a * e.control2.y,
				d += o * e.endPoint.y;
			const h = Math.min(e.startWidth + o * s, this.maxWidth);
			this._drawCurveSegment(u, d, h)
		}
		n.closePath(),
			n.fill()
	}
	_drawDot({
		color: t,
		point: e
	}) {
		const n = this._ctx,
			s = 'function' == typeof this.dotSize ? this.dotSize() : this.dotSize;
		n.beginPath(),
			this._drawCurveSegment(e.x, e.y, s),
			n.closePath(),
			n.fillStyle = t,
			n.fill()
	}
	_fromData(t, e, n) {
		for (const s of t) {
			const {
				color: t,
				points: i
			}
				= s;
			if (i.length > 1) for (let n = 0; n < i.length; n += 1) {
				const s = i[n],
					a = new Ql(s.x, s.y, s.time);
				this.penColor = t,
					0 === n && this._reset();
				const o = this._addPoint(a);
				o && e({
					color: t,
					curve: o
				})
			} else this._reset(),
				n({
					color: t,
					point: i[0]
				})
		}
	}
	_toSVG() {
		const t = this._data,
			e = Math.max(window.devicePixelRatio || 1, 1),
			n = this.canvas.width / e,
			s = this.canvas.height / e,
			i = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		i.setAttribute('width', this.canvas.width.toString()),
			i.setAttribute('height', this.canvas.height.toString()),
			this._fromData(t, (({
				color: t,
				curve: e
			}) => {
				const n = document.createElement('path');
				if (!(isNaN(e.control1.x) || isNaN(e.control1.y) || isNaN(e.control2.x) || isNaN(e.control2.y))) {
					const s = `M ${e.startPoint.x.toFixed(3)},${e.startPoint.y.toFixed(3)} C ${e.control1.x.toFixed(3)},${e.control1.y.toFixed(3)} ${e.control2.x.toFixed(3)},${e.control2.y.toFixed(3)} ${e.endPoint.x.toFixed(3)},${e.endPoint.y.toFixed(3)}`;
					n.setAttribute('d', s),
						n.setAttribute('stroke-width', (2.25 * e.endWidth).toFixed(3)),
						n.setAttribute('stroke', t),
						n.setAttribute('fill', 'none'),
						n.setAttribute('stroke-linecap', 'round'),
						i.appendChild(n)
				}
			}), (({
				color: t,
				point: e
			}) => {
				const n = document.createElement('circle'),
					s = 'function' == typeof this.dotSize ? this.dotSize() : this.dotSize;
				n.setAttribute('r', s.toString()),
					n.setAttribute('cx', e.x.toString()),
					n.setAttribute('cy', e.y.toString()),
					n.setAttribute('fill', t),
					i.appendChild(n)
			}));
		const a = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${n} ${s}" width="${n}" height="${s}">`;
		let o = i.innerHTML;
		if (void 0 === o) {
			const t = document.createElement('dummy'),
				e = i.childNodes;
			t.innerHTML = '';
			for (let n = 0; n < e.length; n += 1) t.appendChild(e[n].cloneNode(!0));
			o = t.innerHTML
		}
		return 'data:image/svg+xml;base64,' + btoa(a + o + '</svg>')
	}
}
class nc extends Error {
	constructor(t, e, ...n) {
		super(...n),
			Error.captureStackTrace && Error.captureStackTrace(this, nc),
			this.name = 'ValidationError',
			this.reasons = t,
			this.message = e || 'Form validation failed'
	}
}
class sc extends nc {
	constructor(t, e, ...n) {
		super(t, e, ...n),
			Error.captureStackTrace && Error.captureStackTrace(this, sc),
			this.name = 'ValidationWarning'
	}
}
class ic extends Error {
	constructor(...t) {
		super(...t),
			Error.captureStackTrace && Error.captureStackTrace(this, ic),
			this.name = 'FraudError',
			this.message = 'Email verification failed'
	}
}
class ac extends Error {
	constructor(t, ...e) {
		super(...e),
			Error.captureStackTrace && Error.captureStackTrace(this, ic),
			this.name = 'RestrainError',
			this.action = t,
			this.message = 'Your actions appear suspicious.'
	}
}
class oc extends Error {
	constructor(t, e, ...n) {
		super(...n),
			Error.captureStackTrace && Error.captureStackTrace(this, oc),
			this.name = 'NetworkError',
			this.status = t,
			this.message = `${t} ${e}`,
			Pn && (this.onLine = navigator && navigator.onLine)
	}
}
async function rc(t, e = {
}, n = {
}, s = null) {
	s = s || {
		method: 'post',
		credentials: 'include'
	},
		n = Object.assign({
		}, n, {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		});
	const i = JSON.stringify(e);
	return fetch(t, Object.assign({
	}, s, {
		headers: n,
		body: i
	}))
}
function lc(t) {
	if (!t.ok) throw new oc(t.status, t.statusText)
}
async function cc(t, e) {
	if (406 === t.status) throw new ac(e)
}
function uc(t, e) {
	if (403 === t.status) throw new nc({
		__all__: e
	}, e)
}
async function dc(t) {
	if (406 === t.status) {
		const e = await t.json();
		throw new nc(e, e.message)
	}
}
async function hc(t) {
	if (412 === t.status) {
		const e = 'Please wait for reCAPTCHA logo to appear in the lower right corner',
			n = await t.json();
		throw new nc({
			__all__: e
		}, n.message)
	}
}
async function pc(t) {
	if (422 === t.status) {
		const e = await t.json();
		throw new nc(e.message || e.data || e)
	}
}
async function fc(t) {
	if (422 === t.status || 423 === t.status) {
		const e = await t.json();
		throw 423 === t.status ? new sc(e.reasons) : new nc(e.reasons || e)
	}
}
async function mc(t) {
	if (!t.ok && 409 !== t.status) throw new Error('Oops, something went wrong. Please try again later')
}
async function gc(t, e, n, s, i) {
	if (!Pn) throw new Error('Not Implemented');
	const a = `/api/notes?songId=${t}&part=${e}&revision=${n}&width=${s}&height=${i}`,
		o = await fetch(a, {
			credentials: 'include'
		});
	return lc(o),
		o.json()
}
let yc = [
];
const vc = (t, e, n) => yc.find((s => s.songId === t && s.part === e && s.revision === n)),
	wc = t => !(!t.isTablet || 'iOS' !== t.os) || Pn && t.isDesktop && 'Mac OS X' === t.os && 'ontouchstart' in window;
let bc,
	xc = !1;
const Sc = (t, e) => {
	t && ('pen' === e ? (t.penMode(), t.minWidth = 1.3, t.maxWidth = 1.3) : 'eraser' === e && (t.eraserMode(), t.minWidth = 16, t.maxWidth = 16))
},
	kc = t => {
		!Pn && t.on('@init', (() => ({
			drawing: {
				pad: void 0,
				tool: 'pen',
				canvasHeight: 0,
				canvasWidth: 0,
				saving: !1,
				status: 'unset',
				adminMenuOpened: !1,
				adminDrawingsList: [
				]
			}
		}))),
			t.on('drawing/switchTool', ((t, e) => (t.drawing.tool !== e && Sc(t.drawing.pad, e), {
				drawing: Object.assign({
				}, t.drawing, {
					tool: e
				})
			}))),
			t.on('drawing/setPad', ((e, n) => {
				const s = new ec(n, {
					throttle: 0,
					minDistance: 2,
					penColor: '#5BD907',
					isTablet: wc(e.device),
					onBegin: () => {
						clearTimeout(bc),
							t.dispatch('drawing/lineStarted')
					},
					onEnd: () => {
						clearTimeout(bc),
							bc = setTimeout((() => t.dispatch('drawing/save')), 4000),
							t.dispatch('drawing/lineEnded')
					}
				});
				return Sc(s, 'pen'),
				{
					drawing: Object.assign({
					}, e.drawing, {
						pad: s
					})
				}
			})),
			t.on('data/loadSong:processing', (t => {
				if ('on' !== t.experiments.drawing) return;
				const {
					pad: e
				}
					= t.drawing;
				return clearTimeout(bc),
					e && e.clear(),
					Sc(e, 'pen'),
				{
					drawing: Object.assign({
					}, t.drawing, {
						tool: 'pen',
						status: 'unset'
					})
				}
			})),
			t.on('data/loadSong:inflate', ((e, {
				part: n
			}) => {
				if ('on' !== e.experiments.drawing) return;
				const s = wc(e.device),
					i = (t => {
						if (!Pn || !t) return 850;
						let e = {
							width: window.outerWidth,
							height: window.outerHeight
						};
						return e.height > e.width && (e = {
							height: e.width,
							width: e.height
						}),
							ma('medium', e)
					})(s),
					a = (t => t ? 30 : 130)(s),
					o = new ei(i),
					r = new Ks(n, o, mr),
					l = Math.floor(r.height),
					c = Math.floor(i) + a;
				return ((t, e, n) => n ? t * e < 16777216 : e < 16300)(c, l, s) ? (Pn && t.dispatch('drawing/load', {
					width: c,
					height: l
				}), {
					drawing: Object.assign({
					}, e.drawing, {
						canvasHeight: l,
						canvasWidth: c
					})
				}) : {
						drawing: Object.assign({
						}, e.drawing, {
							canvasHeight: 0,
							canvasWidth: 0
						})
					}
			})),
			t.on('drawing/load', (async (e, {
				width: n,
				height: s,
				id: i
			}) => {
				try {
					if (e.user.isAdmin && (i || e.drawing.adminDrawingId)) {
						const n = await async function (t) {
							const e = `/api/notes/${t}`,
								n = await fetch(e, {
									credentials: 'include'
								});
							return lc(n),
								n.json()
						}(i || e.drawing.adminDrawingId);
						return void (n.image ? t.dispatch('drawing/load:done', n) : console.log('Image not found'))
					}
					const {
						songId: a,
						partId: o
					}
						= e.data,
						r = e.data.part.revisionId,
						l = vc(a, o, r);
					if (l && l.image) console.log('Found cached image'),
						setTimeout((() => t.dispatch('drawing/load:done', l)), 500);
					else if (e.user.isLoggedIn) {
						console.log('Cached image not found, loading from server');
						const e = await gc(a, o, r, n, s);
						e.image ? t.dispatch('drawing/load:done', e) : console.log('Server does not found any images')
					}
				} catch (t) {
					console.log(t)
				}
			})),
			t.on('drawing/load:done', ((t, e) => {
				if (e.songId !== t.data.songId || e.part !== t.data.partId || e.revision !== t.data.part.revisionId) return void console.log('Loaded image lost its relevance');
				const {
					pad: n,
					canvasHeight: s,
					canvasWidth: i
				}
					= t.drawing;
				n && s === e.height && e.width === i ? (n.fromDataURL(e.image, {
					ratio: 1
				}), !vc(t.data.songId, t.data.partId, t.data.part.revisionId) && yc.push(e)) : console.log('Loaded image has wrong sizes')
			})),
			t.on('drawing/save', (async e => {
				const {
					pad: n,
					canvasHeight: s,
					canvasWidth: i,
					saving: a
				}
					= e.drawing;
				if (n && !n.isEmpty() && !a && 0 !== s && 0 !== i) try {
					const a = {
						image: n.toDataURL(),
						width: i,
						height: s,
						songId: e.data.songId,
						part: e.data.partId,
						revision: e.data.part.revisionId
					};
					t.dispatch('drawing/save:init', a),
						e.user.isLoggedIn && await async function (t) {
							const e = await rc('/api/notes', t);
							return lc(e),
								e.json()
						}(a),
						setTimeout((() => t.dispatch('drawing/save:done')), 800)
				} catch (e) {
					console.log(e),
						t.dispatch('drawing/save:error')
				}
			})),
			t.on('drawing/save:init', ((t, e) => {
				const n = vc(e.songId, e.part, e.revision);
				return n ? (console.log('Updating cached image'), n.image = e.image, n.width = e.width, n.height = e.height) : (console.log('Storing new image in cache'), yc.push(e)),
				{
					drawing: Object.assign({
					}, t.drawing, {
						saving: !0,
						status: 'saving'
					})
				}
			})),
			t.on('drawing/save:done', (t => ({
				drawing: Object.assign({
				}, t.drawing, {
					status: 'changed' === t.drawing.status ? 'changed' : 'saved',
					saving: !1
				})
			}))),
			t.on('drawing/save:error', (t => ({
				drawing: Object.assign({
				}, t.drawing, {
					saving: !1
				})
			}))),
			t.on('drawing/lineStarted', (t => ({
				drawing: Object.assign({
				}, t.drawing, {
					status: 'changed'
				})
			}))),
			t.on('drawing/lineEnded', (e => {
				t.dispatch('curiosity/event', {
					event: 'Drew a line',
					Tool: e.drawing.tool
				}),
					xc || document.cookie.includes('ScrShwn-duse') || (xc = !0, setTimeout((() => t.dispatch('curiosity/trigerHJ', 'show_markup_feedback')), 30000))
			})),
			t.on('user/signOut', (t => {
				if ('on' !== t.experiments.drawing) return;
				clearTimeout(bc);
				const {
					pad: e
				}
					= t.drawing;
				return e && e.clear(),
					yc = [
					],
				{
					drawing: Object.assign({
					}, t.drawing, {
						status: 'unset'
					})
				}
			})),
			Pn && t.on('user/signIn', (async e => {
				if ('on' !== e.experiments.drawing) return;
				clearTimeout(bc);
				const {
					pad: n
				}
					= e.drawing;
				n && n.clear(),
					yc = [
					];
				const {
					songId: s,
					partId: i
				}
					= e.data,
					{
						canvasHeight: a,
						canvasWidth: o
					}
						= e.drawing,
					r = e.data.part.revisionId,
					l = await gc(s, i, r, o, a);
				l.image ? t.dispatch('drawing/load:done', l) : console.log('Server does not found drawings on SignIn')
			})),
			t.on('drawing/toggleAdminMenu', (t => ({
				drawing: Object.assign({
				}, t.drawing, {
					adminMenuOpened: !t.drawing.adminMenuOpened,
					adminDrawingsList: [
					],
					adminDrawingId: void 0
				})
			}))),
			t.on('drawing/loadDrawingsData', (async e => {
				try {
					const e = (await async function () {
						const t = await fetch('/api/notes/data', {
							credentials: 'include'
						});
						return lc(t),
							t.json()
					}()).map((t => Object.assign({
					}, t, {
						updated: new Date(t.updatedAt)
					})));
					t.dispatch('drawing/loadDrawingsData:done', e)
				} catch (t) {
					console.log(t)
				}
			})),
			t.on('drawing/loadDrawingsData:done', ((t, e) => ({
				drawing: Object.assign({
				}, t.drawing, {
					adminDrawingsList: e
				})
			}))),
			t.on('drawing/loadDrawingById', ((e, n) => {
				try {
					const s = e.drawing.adminDrawingsList.find((t => t.id === n));
					if (e.user.isAdmin && s) {
						const {
							songId: i,
							partId: a,
							part: o
						}
							= e.data;
						if (s.songId === i && s.part === a && s.revision === o.revisionId) {
							const {
								pad: s
							}
								= e.drawing;
							s && s.clear(),
								t.dispatch('drawing/load', {
									width: 0,
									height: 0,
									id: n
								})
						} else {
							const e = yr({
								songId: s.songId,
								artist: '',
								title: ''
							}, s.part, s.revision);
							setTimeout((() => t.dispatch('navigate', e)), 500)
						}
						return {
							drawing: Object.assign({
							}, e.drawing, {
								adminDrawingId: n
							})
						}
					}
				} catch (t) {
					console.log(t)
				}
			}))
	};
var Cc = Rn(class extends x {
	componentDidMount() {
		this.props.dispatch('drawing/setPad', this.canvas)
	}
	render() {
		const {
			isFullscreen: t
		}
			= this.props,
			{
				canvasHeight: e,
				canvasWidth: n,
				tool: s
			}
				= this.props.drawing,
			{
				layer: i
			}
				= this.props.layer;
		let a = wc(this.props.device) ? 'C9j1is C9j7o' : 'C9j1is C9j1nb';
		return a = `${a} ${'drawing' !== i ? 'C9j176' : ''} ${'pen' === s ? 'C9j1n9' : 'C9j16d'}`,
			(t || 0 === e || 0 === n) && (a = 'C9j1is C9jgx'),
			v('div', {
				className: a
			}, v('canvas', {
				ref: t => {
					this.canvas = t
				},
				width: n,
				height: e
			}))
	}
}, 'drawing', 'layer', 'device');
const _c = /(\b(https?):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;
function Ec({
	children: t,
	styles: e
}) {
	const n = (s = t, s.replace(_c, (t => '' + t + '')).split('')).map(((t, n) => _c.test(t) ? v('a', {
		className: e.link,
		key: `url${n}`,
		href: t,
		rel: 'noopener noreferrer ugc',
		target: '_blank'
	}, t) : v(S, {
		key: `text${n}`
	}, t)));
	var s;
	return v('p', {
		className: e.message
	}, n)
}
const Nc = Pn ? 6 : 3;
async function Lc(t, e, n, s = {
	Accept: 'application/json'
}) {
	let i = 0,
		a = '';
	const o = {
		headers: s,
		signal: n
	};
	for (let e = 0; e < Nc && 404 !== i; e++) {
		try {
			if (n.aborted) return;
			const r = await fetch(t(e), o);
			if (n.aborted) return;
			if (r.ok) return await ('application/json' === s.Accept ? r.json() : r.arrayBuffer());
			i = r.status,
				a = 404 === r.status ? 'Not Found' : r.statusText || 'Network Error'
		} catch (t) {
			if (console.error(t), n.aborted || 'AbortError' === t.name) return;
			i = 0,
				a = t.message || 'Network Error'
		}
		await new Promise((t => setTimeout(t, 20 * e)))
	}
	throw new oc(i, a)
}
const Tc = t => {
	!Pn && t.on('@init', (() => ({
		annotations: {
			parts: {
			},
			isLoading: !1,
			isError: !1,
			revisionId: void 0,
			measure: 0
		}
	}))),
		t.on('annotations/load:processing', (t => ({
			annotations: Object.assign({
			}, t.annotations, {
				parts: {
				},
				isLoading: !0,
				isError: !1
			})
		}))),
		t.on('annotations/load:done', ((t, {
			annotations: e,
			revisionId: n
		}) => ({
			annotations: Object.assign({
			}, t.annotations, {
				parts: e,
				revisionId: n,
				isLoading: !1,
				isError: !1
			})
		}))),
		t.on('annotations/load:error', (t => ({
			annotations: Object.assign({
			}, t.annotations, {
				parts: {
				},
				isLoading: !1,
				isError: !0
			})
		}))),
		t.on('annotations/toggle', ((t, e) => 'annotation' === t.layer.layer ? t.annotations.measure === e ? {
			layer: {
				layer: null
			}
		}
			: {
				annotations: Object.assign({
				}, t.annotations, {
					measure: e
				})
			}
			: {
				annotations: Object.assign({
				}, t.annotations, {
					measure: e
				}),
				layer: {
					layer: 'annotation'
				}
			})),
		t.on('annotations/submit', ((t, {
			annotation: e
		}) => {
			const {
				partId: n,
				measure: s
			}
				= e;
			delete e.partId,
				delete e.measure,
				delete e.revisionId;
			const i = t.annotations.parts;
			return i[n] = i[n] || {
			},
				i[n][s] = i[n][s] || [
				],
				i[n][s].push(e),
			{
				annotations: Object.assign({
				}, t.annotations, {
					parts: i
				})
			}
		})),
		t.on('annotations/remove', ((t, {
			form: e
		}) => {
			const {
				partId: n,
				id: s,
				measure: i
			}
				= e,
				a = t.annotations.parts,
				o = a[n][i];
			return o.splice(o.findIndex((t => t.id === s)), 1),
				o || delete a[n][i],
			{
				annotations: Object.assign({
				}, t.annotations, {
					parts: a
				})
			}
		}))
};
function Ic(t) {
	return null == t || 0 === t.length ? 'Should not be empty' : !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t) && 'Invalid e-mail address'
}
function Ac(t) {
	return 0 === t.length && 'Should not be empty'
}
function Pc(t) {
	return t.length >= 1000 ? 'Should be less than 1000 characters' : 0 === (t = t.replace(/[^\w\s_]/, '').trim()).length ? 'Should not be empty' : t.length < 3 && 'Please provide more meaningful edit summary'
}
function Mc(t) {
	return 0 === (t = t.replace(/[^\w\s_]/, '').trim()).length ? 'Should not be empty' : t.length < 3 && 'Please provide more meaningful annotation'
}
function Bc(t) {
	return Ac(t)
}
function Dc(t) {
	return 0 === t.length && 'Tell us how can we help you'
}
function Oc(t) {
	return t.length ? [
		'.gp3',
		'.gp4',
		'.gp5'
	].includes(t[0].name.substr(- 4)) ? void 0 : 'Choose right file format' : 'Upload the file'
}
function Rc(t, e) {
	return 0 === t.length ? 'Should not be empty' : t.length < 5 ? 'Should be at least 5 symbols long' : !(!e || t === e) && 'Passwords should match'
}
function jc(t) {
	return !t && 'Should be checked'
}
function $c(t, e) {
	return t && t.reasons && t.reasons[e]
}
function Fc(...t) {
	const e = t.map((t => {
		let e;
		return e = 'checkbox' === t.field.type ? t.field.checked : 'file' === t.field.type ? t.field.files : t.field.value,
		{
			[
				t.field.name
			]: t.validator(e)
		}
	})).reduce(((t, e) => Object.assign(t, e)), {
	});
	if (Object.keys(e).reduce(((t, n) => t || !!e[n]), !1)) throw new nc(e);
	return null
}
function Hc({
	width: t,
	height: e,
	fill: n,
	className: s = '',
	style: i,
	id: a
}) {
	return v('svg', {
		className: `Csr2lv ${s}`,
		id: a,
		width: t,
		height: e,
		style: i,
		viewBox: '25 25 50 50',
		'aria-labelledby': 'spinner-title'
	}, v('circle', {
		stroke: n,
		cx: '50',
		cy: '50',
		r: '20'
	}))
}
function zc({
	processing: t,
	title: e,
	id: n,
	width: s = 17,
	height: i = 17,
	isDisabled: a = !1
}) {
	return v('button', {
		id: n,
		className: a ? Xn.buttonDisabled : Xn[n] || Xn.buttonGreen,
		disabled: a || t
	}, t && v(Hc, {
		width: s,
		height: i,
		fill: '#fff',
		className: 'Csr8e'
	}), v('span', null, e))
}
const qc = {
	enter: 'Cc12kx',
	enterActive: 'Cc18o',
	exit: 'Cc172',
	exitActive: 'Cc19r'
};
function Uc({
	errorMessage: t,
	name: e
}) {
	return v(Un, {
		className: 'Bvq2sa Cc128t',
		component: 'aside'
	}, t && v(Gn, {
		animationStyles: qc,
		timeout: 300
	}, v('div', {
		className: 'Cc118'
	}, v('span', {
		className: 'Cc1124',
		role: 'alert',
		'aria-label': e
	}, t))))
}
var Wc = {
	base: 'fal3',
	input: 'fal3 fa2hs',
	textarea: 'fal3 fa2hs fad6',
	readonly: 'fal3 fa2hs fa323',
	field: 'fa1vk',
	fieldError: 'fa1vk fa1du',
	space: 'Bvq2sa fa24z',
	hint: 'Bvq8m faiw'
},
	Vc = {
		error: 'Bmph8',
		title: 'Bmp16t',
		rejected: 'Bmp1fm',
		content: 'Bmp2pa',
		exitActive: 'Bmp102',
		enterActive: 'Bmp64',
		enter: 'Bmp25l',
		exit: 'Bmpc0'
	};
function Gc({
	styles: t,
	error: e,
	errorMessage: n,
	name: s = 'form'
}) {
	const i = t || Vc,
		a = X();
	let o = n;
	const r = {
		enter: i.enter,
		enterActive: i.enterActive,
		exit: i.exit,
		exitActive: i.exitActive
	};
	return !o && e && (o = function (t) {
		if (t instanceof nc) {
			if (t.reasons) {
				if (t.reasons.__all__) return t.reasons.__all__;
				const e = t.reasons.length && t.reasons[t.reasons.length - 1].message;
				if (e) return e
			}
			return 'Please fix the errors and try again'
		}
		return t.message || 'Oops, something went wrong. Please try again later'
	}(e)),
		y((() => {
			a.current.scrollIntoView && a.current.scrollIntoView()
		}), [
			o
		]),
		e instanceof ac && e.action ? v(Un, {
			component: 'div',
			className: i.error,
			ref: a
		}, e && v(Gn, {
			animationStyles: r,
			timeout: 300
		}, v('div', {
			className: i.rejected,
			key: 'error'
		}, v('span', {
			className: i.content,
			role: 'alert',
			'aria-label': s
		}, `Your actions appear suspicious. We will reject any attempt to ${e.action} within the next twenty four hours. `, 'Please contact ', v('a', {
			href: 'mailto:support@songsterr.com',
			'data-action': 'support'
		}, 'support@songsterr.com'), ' if you think we made a mistake.')))) : v(Un, {
			component: 'div',
			className: i.error,
			ref: a
		}, o && v(Gn, {
			animationStyles: r,
			timeout: 300
		}, v('div', {
			className: i.title,
			key: 'error'
		}, v('span', {
			className: i.content,
			role: 'alert',
			'aria-label': s
		}, o))))
}
const Xc = Y(((t, e) => {
	const n = t.styles || Wc,
		{
			type: s,
			name: i,
			error: a,
			defaultValue: o,
			label: r,
			placeholder: l,
			readonly: c,
			autocomplete: u
		}
			= t,
		{
			popup: d,
			errorStyles: h
		}
			= t,
		[
			p,
			m
		] = f(o),
		g = t.error && $c(a, i);
	return v('label', {
		className: g ? n.fieldError : n.field,
		'data-input': i
	}, d ? v(Gc, {
		styles: h,
		errorMessage: g,
		name: i
	}) : v('div', {
		className: n.space
	}, r && v('div', {
		className: n.hint,
		'data-label': i
	}, r)), c && v('div', {
		className: n.readonly,
		name: i
	}, o), !c && 'textarea' === s && v('textarea', {
		name: i,
		placeholder: l,
		onChange: t => m(t.target.value),
		className: n.textarea,
		autoComplete: u || 'on',
		ref: e
	}), !c && 'textarea' !== s && v('input', {
		type: s,
		name: i,
		value: p,
		placeholder: l,
		onChange: t => m(t.target.value),
		autoComplete: u || 'on',
		className: n.input,
		ref: e
	}), !d && v(Uc, {
		name: i,
		errorMessage: g
	}))
}));
var Yc = {
	wrapper: 'B8y7s',
	header: 'B8y2e0',
	loader: 'B8y3',
	title: 'B8y27h',
	headerTrack: 'B8yek',
	annotation: 'B8yzm',
	annotationContent: 'B8y2sx',
	message: 'B8y1ey',
	datename: 'B8y1e8',
	deleteSplitter: 'B8y2ql',
	removeBtn: 'B8ywq',
	notification: 'B8y2r',
	notificationText: 'B8y16p',
	removeActions: 'B8y1mu',
	link: 'B8y1kn',
	addForm: 'B8y1zg',
	textarea: 'B8y3e',
	addActions: 'B8ys5',
	authActions: 'B8yd5',
	motto: 'B8y2t3',
	loginText: 'B8y1sj',
	loginActions: 'B8y2uf',
	scroller: 'B8y32t',
	alert: 'B8y1wg',
	errorTitle: 'Bmp16t B8y2e1'
},
	Zc = {
		error: 'B482tq',
		title: 'B481im',
		rejected: 'B482xk',
		content: 'B482oe',
		exitActive: 'B48fa',
		enterActive: 'B481ms',
		enter: 'B4831f',
		exit: 'B481h7'
	},
	Jc = {
		exitActive: 'fyhd',
		enterActive: 'fy100',
		enter: 'fycc',
		exit: 'fy2ir'
	};
const Kc = () => v('svg', {
	width: '10',
	height: '12'
}, v('path', {
	d: 'M9.4 2.3l-.7 8.3c-.1.8-.8 1.4-1.6 1.4H2.9c-.8 0-1.5-.6-1.6-1.4L.6 2.3zM3 3.8c0-.2-.2-.4-.4-.4s-.4.2-.4.4l.4 7.1c0 .2.2.3.3.3.2 0 .4-.1.4-.3zm2.4 0c0-.2-.2-.4-.4-.4s-.4.2-.4.4l.1 7.1c0 .2.1.3.3.3.2 0 .3-.1.3-.3zm2.4 0c0-.2-.2-.4-.4-.4s-.4.2-.4.4l-.3 7.1c0 .2.2.3.4.3.1 0 .3-.1.3-.3zm2.2-2H0C0 1.3.3.9.8.9h2.4c.1-.5.4-.9.8-.9h1.8c.5 0 .9.4 1 .9h2.5c.4 0 .7.4.7.9z'
})),
	Qc = ({
		onClick: t,
		id: e
	}) => v('button', {
		className: 'u2o7',
		onClick: t
	}, v('svg', {
		width: 11,
		height: 11,
		'aria-labelledby': `${e}-close`
	}, v('title', {
		id: `${e}-close`
	}, 'Close'), v('path', {
		d: 'M1 1l9 9m-9 0l9-9'
	}))),
	tu = Object.assign({
	}, Vc, Zc, {
		title: Yc.errorTitle
	});
var eu = Rn(class extends x {
	constructor(t) {
		super(t),
			this.message = I(),
			this.addAnnotation = async t => {
				t.preventDefault();
				const e = this.message.current;
				if (!e) throw new Error('Wrong textarea value state');
				try {
					Fc({
						field: e,
						validator: Mc
					}),
						this.setState({
							processing: !0,
							error: null
						});
					const t = this.props.annotations.measure,
						{
							data: n,
							meta: s,
							user: i
						}
							= this.props;
					await async function (t, {
						data: e,
						meta: n,
						user: s,
						message: i,
						measure: a
					}) {
						const o = {
							revisionId: n.revisionId,
							partId: e.partId,
							personId: s.profile.id,
							personName: s.profile.name,
							measure: a,
							message: i
						};
						t('annotations/submit', {
							annotation: await async function (t) {
								const e = new FormData;
								e.append('revisionId', t.revisionId.toString()),
									e.append('partId', t.partId.toString()),
									e.append('measure', t.measure.toString()),
									e.append('message', t.message);
								const n = await fetch('/api/annotation', {
									method: 'post',
									credentials: 'include',
									body: e
								});
								await pc(n),
									lc(n);
								const s = await n.json();
								return Object.assign({
								}, t, s)
							}(o)
						})
					}(this.props.dispatch, {
						data: n,
						meta: s,
						user: i,
						message: e.value,
						measure: t
					}),
						this.setState({
							processing: !1,
							error: null
						}),
						e.value = ''
				} catch (t) {
					console.error(t),
						this.setState({
							error: t,
							processing: !1
						})
				}
			},
			this.toggleNotification = (t = 0) => {
				this.setState({
					notificationId: t
				})
			},
			this.removeAnnotation = async t => {
				t.preventDefault();
				try {
					if (this.setState({
						notifyProcessing: !0,
						error: null
					}), this.state.notificationId) {
						const t = this.props.annotations.measure,
							{
								notificationId: e
							}
								= this.state,
							{
								data: n,
								meta: s,
								user: i
							}
								= this.props;
						await async function (t, {
							data: e,
							meta: n,
							user: s,
							id: i,
							measure: a
						}) {
							const o = {
								partId: e.partId,
								revisionId: n ? n.revisionId : 0,
								personId: s.profile.id,
								id: i,
								measure: a
							};
							await async function (t) {
								const e = `/api/annotation/${t}`,
									n = await fetch(e, {
										method: 'delete',
										credentials: 'include'
									});
								return await pc(n),
								{
									annotationRemoved: !!n.ok
								}
							}(i),
								t('annotations/remove', {
									form: o
								})
						}(this.props.dispatch, {
							data: n,
							meta: s,
							user: i,
							id: e,
							measure: t
						})
					}
					this.setState({
						notifyProcessing: !1,
						error: null,
						notificationId: 0
					})
				} catch (t) {
					console.error(t),
						this.setState({
							error: t,
							notifyProcessing: !1
						})
				}
			},
			this.onClose = t => {
				t.preventDefault(),
					this.props.dispatch('layer/hide')
			},
			this.state = {
				error: null,
				processing: !1,
				notifyProcessing: !1,
				notificationId: 0
			},
			this.keyMap = {
				space: this.onClose
			}
	}
	componentDidMount() {
		window.hotKeysManager.bind(this.keyMap, {
			onPopup: !0
		})
	}
	componentWillUnmount() {
		this.setState({
			notificationId: 0,
			error: null
		}),
			window.hotKeysManager.unbind(this.keyMap, {
				onPopup: !0
			})
	}
	render() {
		const {
			annotations: t,
			part: e
		}
			= this.props,
			n = e ? t.parts && t.parts[e.partId] || [
			] : null;
		if (!n) return;
		const s = this.props.annotations.measure,
			{
				isLoggedIn: i,
				profile: a,
				isAdmin: o
			}
				= this.props.user,
			{
				notificationId: r
			}
				= this.state,
			l = this.props.data.part.name + ' ' + this.props.data.part.instrument,
			c = [
				i && v('section', {
					'data-section': 'submit',
					key: 'submit'
				}, v('form', {
					noValidate: !0,
					onSubmit: this.addAnnotation,
					className: Yc.addForm
				}, v(Gc, {
					styles: tu,
					error: this.state.error && 'ValidationError' === this.state.error.name ? null : this.state.error
				}), v(Xc, {
					ref: this.message,
					name: 'message',
					type: 'textarea',
					error: this.state.error,
					placeholder: 'Save and share your tips, findings and resources useful for learning this bar.',
					styles: Yc,
					errorStyles: tu,
					popup: !0
				}), v('div', {
					className: Yc.addActions
				}, v(zc, {
					id: 'addAnnotation',
					title: 'Add comment',
					processing: this.state.processing,
					width: 10,
					height: 10
				})))),
				!i && v('section', {
					className: Yc.authActions,
					'data-section': 'welcome',
					key: 'welcome'
				}, v('p', {
					className: Yc.motto
				}, 'Have some thoughts?'), v('p', {
					className: Yc.motto
				}, 'Share them with community!'), v('p', {
					className: Yc.loginText
				}, 'Please login or register to comment on this tab.'), v('div', {
					className: Yc.loginActions
				}, v(Qo, {
					to: '/a/wa/signin',
					className: Xn.popupButtonGreenSmall
				}, 'Login'), v(Qo, {
					to: '/a/wa/signup',
					className: Xn.popupButtonBlueSmall
				}, 'Register')))
			],
			u = v('section', {
				'data-section': 'annotations'
			}, n[s] && n[s].map(((t, e) => v('div', {
				className: Yc.annotation,
				key: t.id
			}, v(Un, null, i && t.id === r && v(Gn, {
				animationStyles: Jc,
				timeout: {
					enter: 1000,
					exit: 300
				}
			}, v('form', {
				className: Yc.notification,
				onSubmit: this.removeAnnotation
			}, v('div', {
				className: Yc.notificationText
			}, 'Delete the comment?'), v('div', {
				className: Yc.removeActions
			}, v(zc, {
				id: 'removeAnnotation',
				title: 'Yes',
				processing: this.state.notifyProcessing,
				width: 10,
				height: 10
			}), v('button', {
				className: Xn.popupButtonBlueSmall,
				onClick: this.toggleNotification,
				disabled: this.state.notifyProcessing,
				type: 'button'
			}, 'No'))))), v('div', {
				className: Yc.annotationContent
			}, v(Ec, {
				styles: Yc
			}, t.message), v('div', {
				className: Yc.datename
			}, `${t.dateAdded} by ${t.personName}`)), i && (a.id === t.personId || o) && v('div', {
				className: Yc.deleteSplitter
			}), i && (a.id === t.personId || o) && v('button', {
				className: Yc.removeBtn,
				onClick: this.toggleNotification.bind(this, t.id)
			}, v(Kc, null), v('span', null, 'Delete'))))));
		return v('div', {
			className: Yc.wrapper
		}, v('header', {
			className: Yc.header,
			key: 'header'
		}, v('div', {
			className: Yc.title
		}, v('strong', {
			className: Yc.marker
		}, s), v('span', {
			className: Yc.headerBar
		}, 'Bar'), v(Qc, {
			onClick: this.onClose,
			id: 'annitation'
		})), v('div', {
			className: Yc.headerTrack
		}, l)), v('div', {
			className: Yc.scroller
		}, t.isLoading && v('div', {
			className: Yc.loader
		}, v(Hc, {
			width: 30,
			height: 30,
			fill: '#fff'
		})), t.isError && v('h4', {
			className: Yc.alert
		}, 'Failed to load annotations'), u, c))
	}
}, 'user', 'data', 'meta', 'annotations'),
	nu = {
		exitActive: 'Bqpmo',
		enterActive: 'Bqpfs',
		enter: 'Bqpb3',
		exit: 'Bqp13z'
	};
const su = {
	animationStyles: {
		exitActive: 'B0d135',
		enterActive: 'B0drd',
		enter: 'B0d1ix',
		exit: 'B0d2y8'
	}
};
function iu(t) {
	return e => e === t
}
const au = Pn && 'ontouchstart' in window;
function ou(t, e) {
	const {
		position: n
	}
		= t;
	Vi(n, e.position) || e.moveCursor(n)
}
class ru extends x {
	constructor(t) {
		super(t),
			this.onResize = () => this.setState(((t, e) => {
				const {
					body: n,
					documentElement: s
				}
					= document,
					i = this.wrap;
				if (i && n && s) {
					const t = i.getBoundingClientRect(),
						a = t.left + 15 + n.scrollLeft + s.scrollLeft,
						o = t.top + 0 + (window.visualViewport ? window.visualViewport.pageTop : document.body.scrollTop + document.documentElement.scrollTop);
					return {
						scale: t.width / (e.width + 30),
						pageX: a,
						pageY: o,
						clientHeight: window.visualViewport ? window.visualViewport.height : document.documentElement.clientHeight
					}
				}
				return null
			})),
			this.onTouchStart = t => {
				if (au && 'mousedown' === t.type) return;
				const e = t.target && t.target.getAttribute('data-annot-num');
				if (null != (t.target.parentElement && t.target.parentElement.getAttribute('data-tab-button')) || null != e) return;
				if (this.props.layer && 'drawing' !== this.props.layer) return this.props.hideLayer(),
					t.preventDefault(),
					void t.stopPropagation();
				const n = t.target.parentElement && t.target.parentElement.getAttribute('data-loop-handle'),
					s = this.getTouchPoint(t);
				if (this.lastTouch = s, 'left' === n || 'right' === n) {
					if (t.preventDefault(), t.stopPropagation(), this.props.startLoopChange(), this.activeLoopHandle = n, 'left' === this.activeLoopHandle ? this.setState((t => ({
						deltaLeftX: t.loopStartX - s.x
					}))) : this.setState((t => ({
						deltaRightX: t.loopEndX - s.x
					}))), !this.onTouchMoveTickId) {
						const t = window.requestAnimationFrame;
						this.onTouchMoveTickId = t(this.onTouchMoveTick)
					}
					document.addEventListener('touchmove', this.onTouchMove, !!window.PASSIVE && {
						passive: !1
					}),
						document.addEventListener('mousemove', this.onTouchMove)
				}
				document.addEventListener('touchend', this.onTouchEnd),
					document.addEventListener('mouseup', this.onTouchEnd)
			},
			this.onTouchMove = t => {
				t.preventDefault(),
					t.stopPropagation(),
					this.lastTouch = this.getTouchPoint(t)
			},
			this.ensureLineVisibility = (t, e, n) => {
				const {
					showPitchshiftLayer: s,
					isSmallScreen: i,
					isLandscapeScreen: a
				}
					= this.props,
					o = window.visualViewport ? window.visualViewport.pageTop : window.scrollY,
					r = this.state.scale,
					l = i && !a ? 48 : 0,
					c = i && !a ? 48 : 0,
					u = o - this.state.pageY + l,
					d = o - this.state.pageY + this.state.clientHeight - c,
					h = d - u,
					p = e.line.index,
					f = this.state.model.lines;
				if (t && (t.maxY * r < u || d < t.y * r)) return;
				let m = o;
				const {
					loopStartLayout: g,
					loopEndLayout: y
				}
					= this.state;
				if (s) m = 0;
				else if (g && y) {
					let t = e.y * r - u;
					if (t < 0) m = o + t;
					else if (t = d - e.maxY * r, t < 0 && (m = o - t), p < y.measureLayout.lineLayout.line.index) {
						const n = f[p + 1];
						if (n) {
							const s = e.y,
								i = n.layout.maxY;
							(i - s) * r < h && (t = d - i * r, t < 0 && (m = o - t))
						}
					}
				} else if (0 === p) m = 0;
				else if (m = e.y * r + this.state.pageY - l, p < f.length - 1) {
					const t = f[p - 1],
						e = f[p + 1];
					if (t && e) {
						const n = t.layout.y;
						(e.layout.maxY - n) * r < h && (m = n * r + this.state.pageY - l)
					}
				}
				m !== o && this.windowScroller.scroll(m, n, o)
			},
			this.onTouchMoveTick = () => {
				this.lastTouch && this.setState((t => {
					const e = this.lastTouch;
					if (!e) throw new Error('Wrong state during touch move');
					const n = {
						position: t.position,
						loopStartX: t.loopStartX,
						loopStartLayout: t.loopStartLayout,
						loopEndX: t.loopEndX,
						loopEndLayout: t.loopEndLayout
					};
					{
						const {
							loopStartLayout: s,
							loopEndLayout: i
						}
							= n;
						if (!s || !i) throw new Error('Wrong loop state');
						if ('left' === this.activeLoopHandle) {
							const a = {
								x: this.limitX(e.x + t.deltaLeftX),
								y: e.y
							},
								o = hi(this.state.model, a, 'left');
							o.stringY < i.stringY || o.stringY === i.stringY && a.x <= i.absoluteLoopLeftX ? (n.loopStartLayout = o, n.loopStartX = a.x) : (n.loopStartLayout = n.loopEndLayout, n.loopStartX = s.absoluteLoopLeftX)
						} else {
							const a = {
								x: this.limitX(e.x + t.deltaRightX),
								y: e.y
							},
								o = hi(this.state.model, a, 'right');
							o.stringY > s.stringY || o.stringY === s.stringY && a.x >= s.absoluteLoopRightX ? (n.loopEndLayout = o, n.loopEndX = a.x) : (n.loopEndLayout = n.loopStartLayout, n.loopEndX = i.absoluteLoopRightX)
						}
					}
					{
						const {
							loopStartLayout: e,
							loopEndLayout: s
						}
							= n;
						if (e && s && (e !== t.loopStartLayout || s !== t.loopEndLayout)) {
							const t = ui(this.props.part, n.position.cursor, e, s, this.activeLoopHandle),
								i = n.position;
							i.cursor === t.cursor && i.loopStart === t.loopStart && i.loopEnd === t.loopEnd || (n.position = t)
						}
					}
					return this.lastTouch = null,
						n
				}));
				const t = window.requestAnimationFrame;
				this.onTouchMoveTickId = t(this.onTouchMoveTick)
			},
			this.onTouchEnd = t => {
				if (this.props.fingeringEditorEnabled) {
					const e = this.getTouchPoint(t),
						n = hi(this.state.model, e),
						s = n.measureLayout.lineLayout.stringY,
						i = e.y - s;
					if (i < - 10 || i > 73) return;
					const a = Math.floor(i / 12),
						o = i - 12 * a <= 6 ? a : a + 1;
					for (const t of n.beats) if (t.notes.find((t => t.string === o))) {
						this.props.addFingering({
							measure: n.measureLayout.measure.index,
							beat: t.index,
							string: o
						});
						break
					}
				} else {
					if (this.activeLoopHandle) document.removeEventListener('touchmove', this.onTouchMove),
						document.removeEventListener('mousemove', this.onTouchMove),
						t.preventDefault(),
						this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId),
						this.onTouchMoveTickId = void 0,
						this.activeLoopHandle = void 0,
						this.setState((t => (this.props.moveCursor(this.state.position), this.props.finishLoopChange(), {
							loopStartX: t.loopStartLayout ? t.loopStartLayout.absoluteLoopLeftX : 0,
							loopEndX: t.loopEndLayout ? t.loopEndLayout.absoluteLoopRightX : 0
						})));
					else {
						const s = this.getTouchPoint(t);
						e = this.lastTouch,
							n = s,
							(e ? Math.abs(n.x - e.x) + Math.abs(n.y - e.y) : 0) < 7 && (t.preventDefault(), this.setState((t => {
								const e = {
									position: t.position,
									loopStartX: t.loopStartX,
									loopStartLayout: t.loopStartLayout,
									loopEndX: t.loopEndX,
									loopEndLayout: t.loopEndLayout
								},
									n = hi(t.model, s);
								if (0 === this.props.position.loopStart && 0 === this.props.position.loopEnd) e.position = {
									cursor: n.leftTime,
									loopStart: 0,
									loopEnd: 0
								};
								else {
									const t = n.leftTime,
										s = n.rightTime;
									if (e.position.loopStart <= t && t < e.position.loopEnd) e.position = {
										cursor: t,
										loopStart: e.position.loopStart,
										loopEnd: e.position.loopEnd
									};
									else if (e.position.loopStart <= s && s < e.position.loopEnd) e.position = {
										cursor: s,
										loopStart: e.position.loopStart,
										loopEnd: e.position.loopEnd
									};
									else {
										const s = n.measureLayout.measure.beatsLayouts;
										e.loopStartLayout = s[0],
											e.loopEndLayout = s[s.length - 1],
											e.loopStartX = e.loopStartLayout.absoluteLoopLeftX,
											e.loopEndX = e.loopEndLayout.absoluteLoopRightX,
											e.position = {
												cursor: t,
												loopStart: e.loopStartLayout.loopLeftTime,
												loopEnd: e.loopEndLayout.firstLoopRightTime
											}
									}
								}
								return this.props.moveCursor(e.position),
									e
							}))),
							this.lastTouch = null
					}
					var e,
						n;
					document.removeEventListener('touchend', this.onTouchEnd),
						document.removeEventListener('mouseup', this.onTouchEnd)
				}
			},
			this.refWrap = t => {
				this.wrap = t
			},
			this.refMain = t => {
				this.tab = t
			},
			this.refTuning = t => {
				this.tuningButton = t
			};
		const e = t.part,
			n = t.width,
			s = new ei(n);
		this.state = {
			model: new Ks(e, s, mr),
			mirrorWidth: n,
			mirrorPart: e,
			mirrorPosition: t.position,
			position: t.position,
			loopStartLayout: null,
			loopStartX: 0,
			loopEndLayout: null,
			loopEndX: 0,
			deltaLeftX: 0,
			deltaRightX: 0,
			pageX: 0,
			pageY: 0,
			clientHeight: 0,
			scale: 1,
			isPitchshiftToStandard: !1
		},
			this.lastTouch = null,
			this.activeLoopHandle = void 0,
			this.onTouchMoveTickId = void 0,
			this.windowScroller = new Yo
	}
	componentDidMount() {
		if (this.props.print || 0 === this.props.position.loopStart && 0 === this.props.position.loopEnd || ou(this.state, this.props), Cr) {
			const t = this.wrap;
			t && (t.addEventListener('touchstart', this.onTouchStart, !!window.PASSIVE && {
				passive: !1
			}), t.addEventListener('mousedown', this.onTouchStart))
		}
		window.addEventListener('resize', Ii(this.onResize, 250)),
			this.onResize()
	}
	componentDidCatch(t) {
	}
	componentDidUpdate(t) {
		0 === this.props.position.loopStart && 0 === this.props.position.loopEnd || ou(this.state, this.props),
			this.props.part === t.part && this.props.width === t.width || requestAnimationFrame((() => this.onResize()))
	}
	componentWillUnmount() {
		this.windowScroller.unmount()
	}
	static getDerivedStateFromProps(t, e) {
		const n = t.part,
			s = t.width,
			i = n !== e.mirrorPart || s !== e.mirrorWidth,
			a = new ei(s),
			o = i ? new Ks(n, a, mr) : e.model;
		let r = e.position;
		Vi(e.mirrorPosition, t.position) || (r = t.position);
		let l = e.loopStartLayout,
			c = e.loopStartX,
			u = !1,
			d = e.loopEndLayout,
			h = e.loopEndX,
			p = !1;
		const {
			tuning: f,
			instrumentId: m
		}
			= n,
			g = f && Eo(m, f);
		let y = !1;
		return (gs(m) || ys(m)) && g && 0 !== g.pitch && (y = !0),
			0 !== r.loopStart || 0 !== r.loopEnd ? (!i && l && - 1 !== l.occurrences.findIndex(iu(r.loopStart)) || (l = li(n, r.loopStart, 'left'), c = l.absoluteLoopLeftX, u = !0), !i && d && - 1 !== d.occurrences.findIndex(iu(r.loopEnd - d.duration)) || (d = li(n, r.loopEnd, 'right'), h = d.absoluteLoopRightX, p = !0), (u || p) && (r = ui(n, r.cursor, l, d))) : (l = null, c = 0, d = null, h = 0),
		{
			model: o,
			mirrorWidth: s,
			mirrorPart: n,
			mirrorPosition: t.position,
			position: r,
			loopStartLayout: l,
			loopStartX: c,
			loopEndLayout: d,
			loopEndX: h,
			isPitchshiftToStandard: y
		}
	}
	limitX(t) {
		return Math.min(Math.max(t, 0), this.props.width - 1)
	}
	getTouchPoint(t) {
		const e = t.changedTouches ? t.changedTouches[0] : t;
		return {
			x: (e.pageX - this.state.pageX) / this.state.scale,
			y: (e.pageY - this.state.pageY) / this.state.scale
		}
	}
	render() {
		const {
			loopStartLayout: t,
			loopEndLayout: e,
			loopStartX: n,
			loopEndX: s,
			isPitchshiftToStandard: i
		}
			= this.state,
			{
				lines: a,
				height: o,
				slicingMode: r
			}
				= this.state.model,
			{
				part: l,
				plusAccess: c,
				isFullscreen: u,
				handlePitchshift: d,
				showPitchshiftPopup: h,
				showPitchshiftLayer: p,
				tuning: f,
				layer: m,
				hideLayer: g,
				fingering: y,
				drawingCanvasEnabled: w
			}
				= this.props,
			b = this.props.width + 30,
			x = `-14.5 -0.5 ${b} ${o}`,
			k = a[0].layout.layers.height;
		return v(S, null, v('section', {
			className: c ? u ? 'Hdoi Hd2ur' : 'Hdoi' : u ? 'Hdoi Hd2ur Hd1fb' : 'Hdoi Hd2n2',
			id: 'tablature',
			'data-id': c ? 'Print--plus' : 'Print--free',
			role: 'application',
			key: 'main',
			ref: this.refMain
		}, w && v(Cc, {
			isFullscreen: u
		}), v(Mo, {
			layer: m,
			hideLayer: g
		}), v(Ao, {
			part: l,
			lines: a,
			tuning: f,
			slicingMode: r,
			fingering: y
		}), v(ta, null, Cr && v(Wo, {
			scale: this.state.scale,
			part: l,
			lines: a,
			ensureLineVisibility: this.ensureLineVisibility
		}), v('svg', {
			width: b,
			viewBox: x,
			ref: this.refWrap,
			className: 'Hdq5',
			preserveAspectRatio: 'xMidYMid meet',
			id: 'handler'
		}, Cr && t && e && v(Go, {
			leftLayout: t,
			rightLayout: e,
			lines: a
		}), Cr && t && v(Vo, {
			x: n,
			layout: t,
			handle: 'left'
		}), Cr && e && v(Vo, {
			x: s,
			layout: e,
			handle: 'right'
		}), Pn && v(Qi, {
			lines: a,
			part: l
		}), l.tuning && v(Po, {
			reference: this.refTuning,
			firstLineLayoutHeigth: k,
			handlePitchshift: d,
			isPitchshiftToStandard: i,
			isActive: h || p
		}))), v(Un, null, 'annotation' === m && v(Gn, {
			animationStyles: nu,
			timeout: 400,
			key: 'annotation_feed'
		}, v('aside', {
			className: 'Hd1sk',
			id: 'annotationFeed'
		}, v(eu, {
			part: l
		}))), h && v(Gn, Object.assign({
		}, su, {
			key: 'popup'
		}), v(cr, {
			tab: this.tab,
			tuningButton: this.tuningButton
		})), p && v(Gn, Object.assign({
		}, su, {
			key: 'layer'
		}), v(Oo, {
			firstLineLayoutHeigth: k,
			ensureLineVisibility: this.ensureLineVisibility,
			tab: this.tab,
			tuningButton: this.tuningButton
		})))))
	}
}
class lu extends x {
	render() {
		const t = new Array(7);
		for (let e = 0; e < 7; e++) {
			const n = new Array(5);
			for (let t = 0; t < 5; t++) n[t] = v('div', {
				className: 'Bx1gp',
				key: t + 1
			});
			t[e] = v('div', {
				className: 'Bx1ry',
				key: e + 1
			}, n)
		}
		return v('div', {
			className: 'Bx2bg',
			role: 'main'
		}, t)
	}
}
function cu(t) {
	return !t || !t.restriction || !t.restriction.length
}
const uu = 'M9 25a2 2 0 0 1-2-2v-5h2v3a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v3h-2v-5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2z',
	du = 'M1.5 12.5h15m-4.5 4.5l4.5 -4.5l-4.5-4.5';
function hu({
	width: t,
	height: e,
	styles: {
		icon: n,
		stroke: s
	}
}) {
	return v('svg', {
		width: t || 29,
		height: e || 27,
		viewBox: '0 0 29 27',
		className: n,
		'aria-labelledby': 'title-signin'
	}, v('title', {
		id: 'title-signin'
	}, 'Sign In'), v('path', {
		d: uu
	}), v('path', {
		className: s,
		'stroke-width': 2,
		d: du
	}))
}
function pu() {
	const t = 'translate(7 10) scale(1.3)';
	return v('svg', {
		width: 55,
		height: 55,
		viewBox: '0 0 55 55'
	}, v('path', {
		d: 'M48 0a6 6 0 0 1 6 6v42a6 6 0 0 1-6 6h-42a6 6 0 0 1-6-6v-42a6 6 0 0 1 6-6z',
		fill: '#FFAD00'
	}), v('path', {
		d: uu,
		fill: '#FFF',
		transform: t
	}), v('path', {
		d: du,
		stroke: '#FFF',
		'stroke-width': '2',
		fill: 'none',
		transform: t
	}))
}
function fu({
	onClick: t,
	id: e
}) {
	return v(Qo, {
		className: 'oo2w1 qp2u5',
		id: e,
		to: '/a/wa/signin',
		onClick: t,
		role: 'dialog',
		'aria-label': 'Login to favorite this tab.'
	}, v('span', {
		className: 'oo1og qp1mc'
	}, v(pu, null)), v('div', {
		className: 'oo1jh qp18j'
	}, 'Please ', v('span', {
		className: 'qpb7'
	}, 'login'), ' or register', v('br', null), 'to favorite this tab.'))
}
const mu = 'M14 21l-7.25 4.75c-.25.25-2 .5-1.5-1L8 16l-6.75-4.5c-.75-.5-2.5-2 0-2.25L10 8.5 12.75 1C13 0 15 0 15.25 1L18 8.5l8.75.75c2.5.25.75 1.75 0 2.25L20 16l2.75 8.75c.5 1.5-1.25 1.25-1.5 1L14 21z',
	gu = `${mu}m0-2.25l6.75 4.75-3-8.25 7.25-4.5-8.5-.5L14 3l-2.5 7.25-8.5.5 7.25 4.5-3 8.25L14 18.75z`;
function yu({
	width: t,
	height: e,
	viewbox: n,
	title: s = 'Favorite',
	styles: {
		icon: i
	},
	id: a,
	state: o
}) {
	const r = `title-${a || 'favorite'}`;
	return v('svg', {
		width: t || 29,
		height: e || 27,
		viewBox: n || '0 0 29 27',
		className: i,
		'data-icon': o,
		id: a,
		'aria-labelledby': r
	}, v('title', {
		id: r
	}, s), v('path', {
		d: 'fill' === o ? mu : gu
	}))
}
function vu(t) {
	t.forEach((t => {
		void 0 !== t.difficultyV3 && (t.difficulty = t.difficultyV3)
	}))
}
const wu = 'indexedDB' in window;
let bu;
const xu = (t, e) => (bu || (bu = new Promise((function (t, e) {
	const n = window.indexedDB.open('data', 1);
	n.onerror = t => {
		t.preventDefault(),
			e(n.error)
	},
		n.onupgradeneeded = () => {
			const t = n.result;
			t.onerror = n => {
				n.preventDefault(),
					e(t.error)
			},
				t.createObjectStore('revisions')
		},
		n.onsuccess = () => t(n.result)
}))), bu).then((n => new Promise(((s, i) => {
	const a = n.transaction('revisions', t);
	a.oncomplete = () => s(),
		a.onerror = () => i(a.error),
		e(a.objectStore('revisions'))
})))).catch((t => {
	console.log(t)
}));
async function Su(t) {
	if (wu) try {
		let e = null;
		return await xu('readonly', (n => {
			e = n.get(t)
		})),
			e && e.result
	} catch (t) {
		return console.log(t),
			null
	}
}
async function ku(t, e) {
	if (wu) try {
		return xu('readwrite', (n => {
			n.put(e, t)
		}))
	} catch (t) {
		return console.log(t),
			null
	}
}
function Cu(t) {
	return t.difficulty ? t.difficulty : null
}
const _u = t => (t.sort(((t, e) => {
	const n = t.artist.localeCompare(e.artist);
	return 0 === n ? t.title.localeCompare(e.title) : n
})), t);
function Eu(t) {
	const e = t.tracks;
	if (void 0 === e) return;
	const n = e.filter((t => gs(t.instrumentId) && void 0 !== t.difficulty));
	vu(n);
	let s = - 1;
	if (void 0 !== t.defaultTrack && gs(e[t.defaultTrack].instrumentId)) t.difficulty = e[t.defaultTrack].difficulty;
	else if (n.forEach(((t, e) => {
		(- 1 === s || (t.views || 0) > (n[s].views || 0)) && (s = e)
	})), - 1 !== s) {
		const e = n[s].difficulty;
		t.difficulty = e
	}
}
function Nu(t) {
	return t.forEach(Eu),
		t
}
const Lu = {
	animationStyles: Jc
};
function Tu() {
	const {
		dispatch: t,
		user: e,
		data: n,
		favorites: s,
		meta: i,
		layer: a
	}
		= On('user', 'data', 'favorites', 'meta', 'experiments', 'layer'),
		o = 'favorite' === a.layer,
		r = e.isLoggedIn,
		l = n.partId,
		c = r && (n.wasFavoriteOnServerRender || s.favorites.some((t => t.songId === i.songId))),
		u = A((e => {
			if (r) {
				if (c) t('favorites/delete', i.songId);
				else {
					const {
						songId: e,
						artist: n,
						title: s,
						tracks: a
					}
						= i,
						o = {
							songId: e,
							artist: n,
							title: s,
							tracks: a ? a.map((({
								instrument: t,
								instrumentId: e,
								name: n,
								difficulty: s,
								tuning: i
							}) => ({
								instrument: t,
								instrumentId: e,
								name: n,
								tuning: i,
								difficulty: s
							}))) : a,
							defaultTrack: l
						};
					Eu(o),
						t('favorites/add', {
							songId: e,
							song: o
						})
				}
				a.layer && t('layer/hide')
			} else o ? t('layer/hide') : t('layer/show', 'favorite')
		}), [
			a,
			r,
			c,
			i,
			l
		]);
	return v('div', {
		className: 'Bt91tp',
		id: 'favorite'
	}, v('button', {
		className: 'Bt92ck',
		id: 'favorite-toggle',
		onClick: u,
		title: c ? 'Remove from favorites' : 'Add to favorites'
	}, v(yu, {
		width: 30,
		height: 30,
		viewbox: '-4 -3 35 35',
		state: c ? 'fill' : 'none',
		styles: {
			icon: c ? 'Bt9vx Bt91pv' : 'Bt9vx'
		},
		id: 'favorite-icon'
	})), v(Un, null, o && v(Gn, Lu, v(fu, {
		id: 'favorite-popup'
	}))))
}
function Iu({
	styles: t
}) {
	return v('svg', {
		width: 25,
		height: 24,
		viewBox: '0 0 25 24',
		className: t.icon,
		id: 'revisions-icon',
		role: 'img',
		'aria-labelledby': 'revisions-title-id'
	}, v('title', {
		id: 'revisions-title-id'
	}, 'Revisions'), v('path', {
		className: t.strokeAnim,
		'stroke-width': '2',
		d: 'M19 10.5V17a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h9'
	}), v('path', {
		className: t.stroke,
		'stroke-width': '1.8',
		'stroke-linecap': 'round',
		strokeLinejoin: 'round',
		d: 'M17.8 7l-7 6.6-4.5 1.7 1.9-4.6 7-6.6'
	}), v('path', {
		className: t.fill,
		d: 'M8.2 10.7l2.6 2.9-4.5 1.7zM19.4 6.3l1.8-1.7c1.4-1.4-2-5-3.5-3.6l-1.8 1.7z'
	}))
}
const Au = Y(((t, e) => {
	const {
		id: n,
		label: s,
		name: i,
		error: a,
		errorStyles: o,
		accept: r,
		popup: l,
		isDropFileAvailable: c
	}
		= t,
		[
			u,
			d
		] = f(null),
		h = A((t => {
			const e = t.target.files.length ? t.target.files[0].name : null;
			d(e)
		}), [
		]),
		[
			p,
			m
		] = f(null),
		[
			g,
			w
		] = f(null),
		b = function (...t) {
			const e = X();
			return y((() => {
				t.forEach((t => {
					t && ('function' == typeof t ? t(e.current) : t.current = e.current)
				}))
			}), [
				t
			]),
				e
		}(e, X(null));
	c && y((() => {
		let t = 0;
		const e = t => {
			t.preventDefault(),
				t.stopPropagation()
		},
			n = e => {
				e.preventDefault(),
					e.stopPropagation(),
					t++,
					e.dataTransfer.items && e.dataTransfer.items.length > 0 && m(!0)
			},
			s = e => {
				e.preventDefault(),
					e.stopPropagation(),
					t--,
					t > 0 || m(!1)
			},
			i = e => {
				e.preventDefault(),
					e.stopPropagation(),
					m(!1),
					e.dataTransfer.files && e.dataTransfer.files.length > 0 && (a(e.dataTransfer.files), e.dataTransfer.clearData(), t = 0)
			},
			a = t => {
				try {
					b.current.files = t,
						Fc({
							field: b.current,
							validator: Oc
						}),
						w(null),
						d(t[0].name),
						b.current.files = t
				} catch (t) {
					w(t),
						d(null),
						b.current.files = null
				}
			};
		return window.addEventListener('dragenter', n),
			window.addEventListener('dragleave', s),
			window.addEventListener('dragover', e),
			window.addEventListener('drop', i),
			() => {
				window.removeEventListener('dragenter', n),
					window.removeEventListener('dragleave', s),
					window.removeEventListener('dragover', e),
					window.removeEventListener('drop', i)
			}
	}), [
	]);
	const x = $c(g || a, i),
		S = v('span', {
			className: l ? 'fal3 fa2hs fa323 Bxa1r9 Bxamx' : 'fal3 fa2hs fa323 Bxa1r9',
			'data-info': 'filename'
		}, u),
		k = v('span', {
			className: l ? 'Cpb24q Cpb14i Cpb1y5 Bxa1i9' : 'Cpb24q Cpb318 Bxa2gt',
			'data-info': 'button'
		}, (l ? 'Upload' : 'Choose') + ' your .gp5 file');
	return v('label', {
		className: l ? 'Bxa2cr Bxa2sv' : 'Bxa2cr',
		'data-input': i
	}, l ? v(Gc, {
		styles: o,
		errorMessage: x,
		name: i
	}) : v('div', {
		className: 'Bvq2sa fa24z Bxa12i'
	}, s && v('div', {
		className: 'Bvq8m faiw Bxa1r3',
		'data-label': i
	}, s)), v('input', {
		id: n,
		accept: r,
		name: i,
		type: 'file',
		ref: b,
		onChange: h,
		className: 'Bxa1sh'
	}), p && v('div', {
		className: 'Bxa29k',
		'data-id': n
	}, v('div', {
		className: 'Bxa1bo'
	}, v('svg', {
		width: '188',
		height: '100',
		fill: 'none'
	}, v('path', {
		className: 'Bxa1m8',
		strokeWidth: '4',
		strokeDasharray: '8 8',
		d: 'M2 2h104v24H82v48H2V2z'
	}), v('mask', {
		id: 'a',
		maskUnits: 'userSpaceOnUse',
		x: '80',
		y: '24',
		width: '108',
		height: '76'
	}, v('path', {
		fill: '#fff',
		d: 'M186 24H82a2 2 0 00-2 2v72c0 1.1.9 2 2 2h104a2 2 0 002-2V26a2 2 0 00-2-2z'
	})), v('g', {
		mask: 'url(#a)'
	}, v('path', {
		className: 'Bxa1m8',
		strokeWidth: '8',
		d: 'M186 24H82a2 2 0 00-2 2v72c0 1.1.9 2 2 2h104a2 2 0 002-2V26a2 2 0 00-2-2z'
	}), v('path', {
		className: 'Bxa2j3',
		d: 'M132.02 77H135.98V63.74H149.06V60.2H135.98V46.94H132.02V60.2H118.94V63.74H132.02V77Z'
	}))), v('div', {
		className: 'Bxa6e'
	}, 'Drop GuitarPro file here'))), u ? S : k, !l && v(Uc, {
		name: i,
		errorMessage: x
	}))
}));
function Pu(t) {
	const e = 'PLUS',
		n = t.subscription || null,
		s = 'lifetime' === t.sra_license,
		i = !!n && n.isPayPal,
		a = n ? n.startDate : null,
		o = n ? n.cancellationDate : null,
		r = a && o ? function (t) {
			const e = new Date(t);
			return e.setDate(e.getDate() + 30),
				new Date(e).toISOString()
		}(o) : null;
	return {
		id: + t.id,
		uid: t.uid,
		name: t.name,
		email: t.email,
		admin: t.admin,
		plan: e,
		subscription: n,
		isLegacyPayPal: i,
		isAndroidLifetime: s,
		planStartDate: a,
		planCancelDate: o,
		planEndDate: r
	}
}
function Mu(t) {
	'requestIdleCallback' in window ? window.requestIdleCallback(t, {
		timeout: 500
	}) : setTimeout(t, 0)
}
const Bu = t => new Promise((e => setTimeout(e, t)));
function Du(t) {
	t.name = t.name.replace(/Дорожка/g, 'Track')
}
const Ou = [
	'dqsljvtekg760',
	'd34shlm8p2ums2',
	'd3cqchs6g3b5ew'
],
	Ru = [
		'd3rrfvx08uyjp1',
		'dodkcbujl0ebx',
		'dj1usja78sinh'
	],
	ju = 'offline' === (Pn ? window.__STAGE__ : process.env.STAGE);
async function $u(t, e, n) {
	const s = `/api/meta/${t}${e ? `/${e}` : ''}`,
		i = await Lc((() => s), 0, n);
	if (n.aborted || !i) return null;
	if (i.tracks) {
		let t = 0;
		for (const e of i.tracks) {
			Du(e),
				e.partId = t;
			const {
				instrumentId: n
			}
				= e;
			ms(n) ? e.isDrums = !0 : ys(n) ? e.isBassGuitar = !0 : gs(n) && (e.isGuitar = !0),
				t++
		}
	}
	return i
}
async function Fu(t, e) {
	let n = null;
	const s = new AbortController;
	for (; !n;) try {
		n = await $u(t, e, s.signal)
	} catch (t) {
		console.error(t),
			await Bu(1000)
	}
	return n
}
const Hu = {
	song: null,
	songSubmitted: !1,
	songError: null,
	revision: null,
	revisionSubmitted: !1,
	revisionError: null
},
	zu = t => {
		!Pn && t.on('@init', (() => ({
			uploads: Hu
		}))),
			t.on('upload/song:uploaded', ((t, {
				songSubmitted: e,
				song: n
			}) => ({
				uploads: Object.assign({
				}, t.uploads, {
					songError: null,
					songSubmitted: e,
					song: n
				})
			}))),
			t.on('upload/reset', (() => ({
				uploads: Hu
			}))),
			t.on('upload/song:error', ((t, {
				error: e
			}) => ({
				uploads: Object.assign({
				}, t.uploads, {
					songError: e
				})
			}))),
			t.on('upload/revision:uploaded', ((t, {
				revisionSubmitted: e,
				revision: n
			}) => ({
				uploads: Object.assign({
				}, t.uploads, {
					revisionError: null,
					revisionSubmitted: e,
					revision: n
				})
			}))),
			t.on('upload/revision:error', ((t, {
				error: e
			}) => ({
				uploads: Object.assign({
				}, t.uploads, {
					revisionError: e
				})
			})))
	};
class qu {
	constructor() {
		this.aborted = !1
	}
	addEventListener() {
	}
	removeEventListener() {
	}
	dispatchEvent(t) {
		return !1
	}
}
class Uu {
	constructor() {
		this.signal = new qu
	}
	abort() {
		this.signal.aborted = !0
	}
}
Object.defineProperty(Uu, 'name', {
	value: 'AbortController'
}),
	Object.defineProperty(qu, 'name', {
		value: 'AbortSignal'
	});
var Wu = 'undefined' != typeof AbortController ? AbortController : Uu,
	Vu = {
		motto: 'pb1bh',
		actions: 'pb9p',
		notes: 'pbfy',
		notesWarning: 'pbfy pbdr',
		field: 'fa1vk pb1on',
		textarea: 'pb2nl'
	};
const Gu = Object.assign({
}, Zc, {
	content: 'B482oe Cjk2mi'
}),
	Xu = ({
		meta: t
	}) => {
		const {
			dispatch: e
		}
			= On(),
			n = X(),
			s = X(),
			[
				i,
				a
			] = f(!1),
			[
				o,
				r
			] = f(null),
			[
				l,
				c
			] = f(null),
			[
				u,
				d
			] = f(null),
			h = A((i => {
				i.preventDefault();
				const o = new Wu;
				return (async (n, s, i, o) => {
					a(!0),
						r(null);
					try {
						Fc({
							field: n,
							validator: Pc
						}, {
							field: s,
							validator: Oc
						});
						const a = {
							file: s.files[0],
							summary: n.value,
							songId: t.songId.toString(),
							force: i
						};
						await async function (t, e, n) {
							try {
								const s = await async function (t, e) {
									const n = new FormData;
									n.append('file', t.file),
										n.append('songId', t.songId),
										n.append('summary', t.summary),
										t.force && n.append('force', t.force.toString());
									const s = await fetch('/api/revision', {
										signal: e,
										method: 'post',
										credentials: 'include',
										body: n
									});
									if (e && e.aborted) return;
									await fc(s),
										await mc(s);
									const i = {
										revisionId: + (a = await s.json()).id,
										songId: + a.song.id,
										artist: a.song.artist.name,
										title: a.song.title
									};
									var a;
									return {
										revisionSubmitted: !!s.ok,
										revision: i
									}
								}(e, n);
								if (n && n.aborted) return;
								if (t('upload/revision:uploaded', s), s.revisionSubmitted) {
									const e = await Fu(s.revision.songId, s.revision.revisionId);
									e && t('navigate', yr(e, 0, e.revisionId))
								}
							} catch (e) {
								throw t('upload/revision:error', {
									error: e
								}),
								e
							}
						}(e, a, o),
							d(null)
					} catch (t) {
						t instanceof sc ? (c(!0), d(t)) : (c(!1), r(t))
					}
					a(!1)
				})(s.current, n.current, l, o.signal),
					o.abort.bind(o)
			}), [
				s,
				n,
				l
			]),
			p = t.tracks && t.tracks.length > 2;
		return v('form', {
			noValidate: !0,
			className: Vu.form,
			onSubmit: h,
			action: ''
		}, v(Gc, {
			styles: Zc,
			error: o
		}), v('p', {
			className: Vu.motto,
			'aria-label': 'motto'
		}, 'Download the latest revision from the list below.', v('br', null), 'Update it and upload back as a new revision of the song.'), p && v('p', {
			className: Vu.notesWarning,
			role: 'warning'
		}, `Make sure that the file you upload has at least ${t.tracks.length - 1} tracks!`), v(Au, {
			id: 'revisionFile',
			accept: '.gp3, .gp4, .gp5',
			label: 'Upload your .gp5 file',
			ref: n,
			name: 'file',
			error: u || o,
			popup: !0,
			errorStyles: u ? Gu : Zc,
			isDropFileAvailable: !0
		}), v('p', {
			className: Vu.notes,
			role: 'instructions'
		}, 'We support only Guitar Pro 3, 4, and 5 files at the moment.', v('br', null), 'If you have GP6/7 (.gpx, .gp) tab, please export it to GP5 version first.', v('br', null), v('a', {
			href: 'https://www.guitar-pro.com/en/index.php',
			rel: 'noopener noreferrer',
			target: '_blank'
		}, 'Guitar Pro'), ': File → Export → GP5', v('br', null), v('a', {
			href: 'https://sourceforge.net/projects/tuxguitar',
			rel: 'noopener noreferrer',
			target: '_blank'
		}, 'TuxGuitar'), ': File → Save As → Guitar Pro 5'), v(Xc, {
			ref: s,
			name: 'summary',
			type: 'textarea',
			error: o,
			placeholder: 'Briefly explain your changes (fixed errors, replaces with whole new version, corrected tempo, etc)',
			styles: Vu,
			errorStyles: Zc,
			popup: !0
		}), v('div', {
			className: Vu.actions
		}, v(zc, {
			id: u ? 'submitRevisionButtonWarning' : 'submitRevisionButton',
			title: l ? 'I\'m sure. Upload the file' : 'Submit a new revision',
			processing: i
		})), v('p', {
			className: Vu.notes
		}, 'This song will switch to your revision in a few minutes.', v('br', null), 'We’ll notify you by email.'))
	};
function Yu() {
	return v('svg', {
		width: 15,
		height: 8,
		viewBox: '0 0 15 8'
	}, v('path', {
		d: 'M8 2.9a1.1 1.1 0 0 0 0 2.2 1.1 1.1 0 0 0 0-2.2zm0 4a2.9 2.9 0 0 1 0-5.8 2.9 2.9 0 0 1 0 5.8zM14.5 3C13.2 2 10.9.3 8 .3S2.8 2 1.5 3c-.9.6-.9 1.4 0 2C2.8 6 5.1 7.7 8 7.7S13.2 6 14.5 5c.9-.6.9-1.4 0-2z'
	}))
}
function Zu() {
	return v('svg', {
		width: 8,
		height: 8,
		viewBox: '0 0 8 8'
	}, v('path', {
		d: 'M6 0H2v4H0l4 4L8 4H6V0z'
	}))
}
const Ju = ({
	revision: t,
	meta: e,
	user: n,
	partId: s
}) => {
	const i = !t.tracks,
		a = t.revisionId === e.revisionId,
		o = yr(e, t.tracks ? Math.min(t.tracks - 1, s) : 0, t.revisionId),
		r = new Date(t.date).toLocaleDateString(),
		l = vr('deleteRevision', t.revisionId),
		c = vr('editRevision', t.revisionId),
		u = n.isAdmin && v('span', {
			className: 'Bo62u2'
		}, v('a', {
			className: 'Bo62f2',
			href: c,
			target: '_blank'
		}, 'edit'), v('a', {
			className: 'Bo62f2',
			href: l,
			target: '_blank'
		}, 'delete')),
		d = {
			className: 'Bo62l4',
			to: o,
			'aria-label': 'action'
		},
		h = {
			className: 'Bo634b',
			href: t.source,
			'aria-label': 'download',
			download: !0,
			target: '_blank'
		},
		p = v('span', {
			className: 'Bo6wu'
		}, !a && v(Qo, d, v(Yu, null), ' view'), a && n.isLoggedIn && v('a', h, v(Zu, null), ' download'));
	let f;
	return f = i ? 'Bo629f Bo61lm' : a ? 'Bo629f Bo6qu' : 'Bo629f',
		v('li', {
			key: t.revisionId,
			className: f
		}, v('p', {
			className: 'Bo6v9'
		}, t.summary), v('p', {
			className: 'Bo6300'
		}, `${r} – by `, v('span', {
			className: 'Bo62t7'
		}, t.person), u, !i && p))
},
	Ku = t => {
		!Pn && t.on('@init', (() => ({
			revisions: {
				revisions: null,
				isLoading: !0,
				isError: !1,
				songId: void 0
			}
		}))),
			t.on('data/loadSong:processing', ((t, {
				songId: e
			}) => {
				if (t.revisions.songId && e !== t.revisions.songId) return {
					revisions: {
						revisions: null,
						isLoading: !0,
						isError: !1,
						songId: void 0
					}
				}
			})),
			t.on('revisions/load:processing', ((t, {
				songId: e
			}) => {
				if (t.data.songId === e) return {
					revisions: Object.assign({
					}, t.revisions, {
						songId: e,
						revisions: null,
						isLoading: !0,
						isError: !1
					})
				}
			})),
			t.on('revisions/load:done', ((t, {
				revisions: e,
				songId: n
			}) => {
				if (t.data.songId === n) return {
					revisions: Object.assign({
					}, t.revisions, {
						revisions: e,
						isLoading: !1,
						isError: !1
					})
				}
			})),
			t.on('revisions/load:error', ((t, {
				error: e,
				songId: n
			}) => {
				if (t.data.songId === n) return {
					revisions: Object.assign({
					}, t.revisions, {
						revisions: null,
						isLoading: !1,
						isError: !0
					})
				}
			}))
	};
const Qu = t => ({
	height: t - 76
}),
	td = () => {
		const {
			dispatch: t,
			data: e,
			user: n,
			revisions: s,
			uploads: i,
			meta: a,
			screen: o
		}
			= On('data', 'user', 'revisions', 'uploads', 'meta', 'screen'),
			{
				isLoggedIn: r,
				isAdmin: l
			}
				= n,
			{
				isLoading: c
			}
				= s,
			{
				revision: u,
				revisionError: d,
				revisionSubmitted: h
			}
				= i,
			[
				p,
				w
			] = f(Qu(o.viewport.height)),
			b = X();
		m((async () => {
			const n = new Wu;
			return await async function (t, e, n) {
				try {
					t('revisions/load:processing', {
						songId: e
					}),
						t('revisions/load:done', {
							songId: e,
							revisions: await async function (t, e) {
								const n = `/api/meta/${t}/revisions`;
								return await Lc((() => n), 0, e)
							}(e, n)
						})
				} catch (s) {
					if (n.aborted) return;
					t('revisions/load:error', {
						songId: e,
						error: s
					})
				}
			}(t, e.songId, n.signal),
				n.abort.bind(n)
		}), [
			e.songId
		]),
			g((() => {
				const t = b.current.scrollHeight,
					e = Qu(o.viewport.height).height,
					n = Object.assign({
					}, p, {
						height: Math.min(t + 107, e)
					});
				p.height !== n.height && w(n)
			}), [
				o,
				b,
				s,
				u,
				i
			]),
			y((() => t('upload/reset')), [
			]);
		const x = r ? 'Submit a new revision' : 'Revisions',
			S = r && u && !d,
			k = r && u && u.songId !== a.songId,
			C = k ? `${u.artist} – ${u.title}` : '',
			_ = v('section', {
				className: 'B7d2cx',
				'data-section': 'welcome'
			}, v('p', {
				className: 'B7d26j'
			}, 'Have a better tab for this song?'), v('p', {
				className: 'B7d26j'
			}, 'Care to fix the current tab?'), v('p', {
				className: 'B7d26j B7d1sn'
			}, 'Submit your corrections for everyone to enjoy!'), v('div', {
				className: 'B7dnt',
				'aria-label': 'auth'
			}, 'Please ', v(Qo, {
				'data-link': 'signin',
				to: '/a/wa/signin'
			}, 'login'), ' or ', v(Qo, {
				'data-link': 'signup',
				to: '/a/wa/signup'
			}, 'register'), ' to submit a new revision.')),
			E = v('section', {
				className: 'B7dq0',
				'data-section': 'submit'
			}, v(Xu, {
				meta: a
			})),
			N = v('section', {
				className: 'B7d2cx',
				'data-section': 'duplicate'
			}, v('p', {
				className: 'B7d26j',
				'aria-label': 'motto'
			}, 'Submitted version already exists on Songsterr.'), !k && v('p', {
				className: 'B7d26j B7dkb',
				'aria-label': 'info'
			}, 'Uploaded file looks exactly like the latest version of this song.'), k && v('div', null, v('p', {
				className: 'B7d26j B7dkb',
				'aria-label': 'info'
			}, 'Uploaded file looks like duplicate of ', v('br', null), v(Qo, {
				to: yr(u),
				'data-link': 'duplicate'
			}, C)))),
			L = v('section', {
				className: 'B7d2cx',
				'data-section': 'success'
			}, v('div', null, v('p', {
				className: 'B7d26j'
			}, 'Thanks for contributing to Songsterr!'), v('p', {
				className: 'B7d26j B7dkb'
			}, 'We are processing the file and will redirect to a new revision as soon as possible.'), v('div', null, v(Hc, {
				fill: '#fefefe',
				width: 30,
				height: 30
			})))),
			T = v('section', {
				'data-section': 'revisions'
			}, v('ul', {
				className: 'B7d12e'
			}, s.revisions && s.revisions.map((t => v(Ju, {
				revision: t,
				meta: a,
				user: {
					isLoggedIn: r,
					isAdmin: l
				},
				partId: e.partId,
				key: t.revisionId
			})))));
		return v('div', {
			id: 'revisions-popup',
			className: 'B7d7m',
			style: p
		}, v('h3', {
			className: 'B7d2ae'
		}, x), v('div', {
			className: 'B7dep'
		}, v('div', {
			className: 'B7d1bt',
			ref: b
		}, !r && _, r && !S && E, S && !h && N, S && h && L, c && v('div', {
			className: 'B7d70'
		}, v(Hc, {
			className: 'Csr1bt',
			width: 25,
			height: 24,
			fill: '#f7f6ee'
		})), !c && T)), v('div', {
			className: 'B7d345'
		}))
	};
var ed = {
	revisions: 'Cqx2uq',
	toggle: 'Cqx2e',
	toggleActive: 'Cqx2e Cqx33y',
	icon: 'Cqx1lw',
	fill: 'Cqxq9',
	stroke: 'Cqx8s',
	strokeAnim: 'Cqx8s Cqx1zx'
};
const nd = {
	animationStyles: Jc
},
	sd = () => {
		const {
			dispatch: t,
			layer: e
		}
			= On('layer'),
			n = 'revisions' === e.layer,
			s = A((() => {
				'revisions' === e.layer ? t('layer/hide') : t('layer/show', 'revisions')
			}), [
				e.layer
			]),
			i = {
				className: n ? ed.toggleActive : ed.toggle,
				id: 'revisions-toggle',
				onClick: s,
				title: n ? 'Hide revisions' : 'Show revisions'
			},
			a = v(td, null);
		return v('div', {
			className: ed.revisions,
			id: 'revisions'
		}, v('button', i, v(Iu, {
			styles: ed
		})), v(Un, null, n && v(Gn, nd, a)))
	};
var id = {
	button: 'B2917c',
	circle: 'B291u8',
	arrow: 'B2928q',
	shape: 'B29122',
	text: 'B2925c',
	play: 'B291nj',
	stroke: 'B292i6',
	playLoading: 'B291nj B29dz',
	newLabel: 'B2930q',
	active: 'B2917c B292bk',
	main: 'B2917c B299c',
	mainActive: 'B2917c B292bk B292tv',
	footerButton: 'B29t9',
	footerActive: 'B29t9 B29262',
	icon: 'B291uh',
	textHelp: 'B2925c B29cg',
	speed: 'B29122 B2917y',
	loop: 'B292i6 B292ed',
	solo: 'B29122 B292zv',
	mute: 'B292i6 B291ph',
	learn: 'B29122 B293c',
	print: 'B292i6 B291hj',
	countin: 'B29122 B29x7',
	fingering: 'B292i6 B2911u',
	pen: 'B29122 B291zg'
};
const ad = 'M8.3 20.4c-3.9-.1-5.2-4.1-5.3-4.6-.3-.6-1.3-4.7-1.3-4.7s-.8-2.6-.7-2.7c.1-.2.4-.2.9-.1 2 .4 2.3 1.6 2.6 3.3.1.5.5 2.2.9 2.1.4-.1.4-3.2.4-3.2v-6.4c0-.8.9-1.2 1.4-1.2.5 0 1.5.4 1.5 1.2v5.6-7.5c0-.8.6-1.2 1.3-1.2.7 0 1.4.4 1.4 1.2v8.3-6.4c0-.8.8-1.2 1.4-1.2.6 0 1.5.5 1.5 1.2v7.2-5.3c.2-.6.7-.9 1.4-.9s1.4.7 1.3 1.3c-.1 1.7-.1 2.7-.2 4.1-.1 1.1-.2 1.4-.1 4 0 1.1-.3 2.9-1.4 4.6-1 1.5-1 1.5-1 2.1 0 1.2-1.8 1.8-3.6 1.8-1.4 0-4-.6-4-1.6l-.1-1.2',
	od = 'M25.4 13.76c.38-.33.95-.59 1.41-.6.46 0 1.04.26 1.42.59l1.98 1.96c.33.37.6.95.6 1.4 0 .46-.26 1.05-.59 1.42l-2.4 2.43-7.17 7.25a3.5 3.5 0 01-1.8.87l-3.75.42c-.25-.02-.64-.14-.78-.3-.13-.15-.2-.55-.2-.8l.77-3.38c.15-.54.42-1.03.8-1.44zm3.83 3.79c.17-.13.17-.22.17-.43 0-.2 0-.29-.18-.42l-1.98-1.96c-.13-.17-.2-.17-.42-.17-.2 0-.3 0-.43.18l-1.2 1.23 2.83 2.79zm-12.55 7.01c-.24.23-.36.44-.42.77l-.62 2.7 3.06-.34c.4-.03.68-.16.96-.47l6.95-7.03-2.84-2.8zm6.46 3.53h6.98a.78.78 0 010 1.55h-6.98a.78.78 0 010-1.55z';
function rd(t) {
	switch (t) {
		case 'speed':
			return 'M13 26c0-.5 0-1.1-.8-1.1s-1.3 1.2 0 1.8c1.5.6 2.4 1 2.4 2.3 0 1.4-.8 2.1-2.4 2.1s-2.3-.5-2.3-2.3h1.4s-.2 1.3.9 1.3 1.3-1.4 0-2-2.2-.8-2.2-2.1c0-1.4.8-2.1 2.2-2.1 1.5 0 2.2.65 2.2 2.1zm4.9-2a1.9 2.1 0 1 1 0 4.2h-1.1v2.8h-1.4v-7zm-1.12 1v2.2h.62a1 1.1 0 1 0 0-2.2zm5.12 4.9h2.6v1.1h-4v-7h4v1.1h-2.6v1.7h2.4v1.1h-2.4zm4.9 0h2.6v1.1h-4v-7h4v1.1h-2.6v1.7h2.4v1.1h-2.4zm6.1-5.9a1.8 3.1 0 1 1 0 7h-2.6v-7zm-.5 5.9a.9 2 0 1 0 0-4.8h-.7v4.8h.7z';
		case 'loop':
			return 'M29.5 17.5h2v10h-12m3-2.6l-3 2.6 3 2.6m-6.5-2.5h-2v-10h12m-3-2.6l3 2.6-3 2.6';
		case 'solo':
			return 'M12.5 24a10 10 0 1 1 20 0 8 8 0 0 1-1.3 4c-2 2-5 2.5-5 2.5a.6.6 0 0 1-.7-.5v-9a.6.6 0 0 1 .7-.5l4.55 2.8a8.3 8.5 0 0 0-16.5 0l4.55-2.8a.6.6 0 0 1 .7.5v9a.6.6 0 0 1-.7.5s-3-.5-5-2.5a8 8 0 0 1-1.3-4zm5.5-1a.5.5 0 0 0-.5-.3c-2.8 2-3 1.7-3 2.7 0 .9.5 2 3 2.9a.5.5 0 0 0 .5-.3zm9 5a.5.5 0 0 0 .5.3c2.5-.9 3-2 3-2.9 0-1-.2-.7-3-2.7a.5.5 0 0 0-.5.3z';
		case 'mute':
			return 'M23.5 30c0 1-1 2-2 1l-5-5h-2.5q-1 0-1-1v-4.5q0-1 1-1h2.5l5-5c1-1 2 0 2 1z m3-10.5l6 6m0-6l-6 6';
		case 'print':
			return 'M16.5 28h-2c-.8 0-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5h16c.8 0 1.5.7 1.5 1.5v5c0 .8-.7 1.5-1.5 1.5h-2v3c0 .8-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5zm0 0v-4h12v4m-12-8v-6h12v6m-9.5 9h7m-7-2h7';
		case 'countin':
			return 'M34 22a11.5 11.5 0 1 0-1 4.7l-1.8-.8a9.5 9.5 0 1 1-8.7-13.4v2A7.5 7.5 0 0 1 30 22zm-13.2 2.65c0 .6.5 1.3 1.45 1.3s1.45-.65 1.45-1.3S23.35 23 22.25 23H21v-1.5h1.25c1 0 1.3-1 1.3-1.5s-.4-1.2-1.3-1.2-1.35.75-1.35 1.2h-2c0-1.2 1-2.75 3.35-2.75S25.5 18.8 25.5 20s-.9 2-1.5 2.2c.85.25 1.7 1.15 1.7 2.45s-1 2.8-3.45 2.8-3.45-1.5-3.45-2.8';
		case 'fingering':
			return ad;
		case 'pen':
			return od
	}
}
class ld extends x {
	render() {
		const {
			pressed: t,
			disabled: e,
			onClick: n,
			icon: s,
			text: i,
			footer: a,
			title: o,
			titlePressed: r,
			hasPopup: l
		}
			= this.props,
			c = a ? 32 : 55,
			u = function (t, e) {
				return t ? 'countin' === e ? '7 6 33 33' : 'loop' === e ? '12 12 22 22' : '9 8 27 27' : '-4 -4 55 55'
			}(a, s);
		let d = a ? id.footerButton : id.button;
		t && (d = a ? id.footerActive : id.active);
		const h = `${s}-title-id`;
		return v('button', {
			className: d,
			onClick: n,
			'aria-haspopup': l,
			'aria-pressed': t,
			id: `control-${s}`,
			disabled: e
		}, 'pen' === s && v('label', {
			className: id.newLabel
		}, 'NEW'), v('svg', {
			className: id.icon,
			width: c,
			height: c,
			viewBox: u,
			role: 'img',
			'aria-labelledby': h
		}, v('title', {
			id: h
		}, t && r ? r : o), !a && v('circle', {
			className: id.circle,
			cx: '22.5',
			cy: '22.5',
			r: '22.5',
			filter: 'url(#svg_shadow)'
		}), 'help' !== s ? v('path', {
			className: id[s],
			d: rd(s)
		}) : v('text', {
			className: id.textHelp,
			'text-anchor': 'middle',
			x: '22',
			y: '30'
		}, '?'), 'fingering' === s && v('path', {
			className: id[s],
			d: 'M7.1 13.7c.8.3 1.6 2.2 1.6 3.3'
		}), i && v('text', {
			className: id.text,
			'text-anchor': 'middle',
			x: '22',
			y: '21'
		}, i)))
	}
}
class cd extends x {
	render() {
		const {
			width: t,
			height: e,
			className: n
		}
			= this.props;
		return v('svg', {
			className: n,
			height: e,
			width: t,
			viewBox: '0 0 9 9'
		}, v('rect', {
			y: '1.17',
			width: '1.65',
			height: '10',
			transform: 'rotate(-45 0 1.17)'
		}), v('rect', {
			x: '7.07',
			width: '1.65',
			height: '10',
			transform: 'rotate(45 7.07 0)'
		}))
	}
}
function ud() {
	const {
		layer: t
	}
		= On('layer'),
		[
			e,
			n
		] = f(!1),
		s = A((() => n(!0)), [
		]);
	return e || 'revisions' === t.layer ? null : v('div', {
		className: 'Cgn1hz',
		onClick: () => {
			Pn && window.localStorage.setItem('MarkBanner', 'seen')
		}
	}, v('svg', {
		className: 'Cgn2oh',
		width: 25,
		height: 25,
		viewBox: '0 0 20 20'
	}, v('path', {
		d: od
	})), v('p', {
		className: 'Cgnvk'
	}, 'New MARKUP feature'), v('div', {
		className: 'Cgn2m'
	}), v('div', {
		className: 'Cgn1l7',
		onClick: s
	}, v(cd, {
		width: 30,
		height: 30
	})), v('a', {
		href: '/a/wa/help#how-to-use-markups'
	}, v('p', {
		className: 'Cgn14e'
	}, 'More info in FAQ')))
}
function dd({
	styles: t
}) {
	return v('svg', {
		width: 21,
		height: 21,
		viewBox: '1050 24.198 18 20.996',
		className: t.icon,
		id: 'tab-delete-icon',
		role: 'img',
		'aria-labelledby': 'tab-delete-id'
	}, v('title', {
		id: 'tab-delete-id'
	}, 'Delete Tab'), v('path', {
		className: t.strokeAnim,
		d: 'M1063.828 45.177l-10.282.017c-1.224-.003-2.215-.959-2.218-2.14V28.767c0-.434.364-.785.814-.785l13.716-.017c.45 0 .814.352.814.785v14.287c-.003 1.181-.995 2.138-2.219 2.14h-.625zm-10.768-15.625V42.86c0 .315.264.57.591.57h10.667a.58.58 0 0 0 .591-.57V29.552h-11.849z'
	}), v('path', {
		className: t.fill,
		d: 'M1062.375 29.552h-7.094c-.449 0-.813-.352-.813-.785v-2.229c.002-1.292 1.087-2.339 2.426-2.34h3.868c1.339.001 2.425 1.048 2.426 2.34v2.229c0 .433-.364.785-.813.785zm-6.15-1.57h5.206v-1.266a.786.786 0 0 0-.8-.771h-3.607a.786.786 0 0 0-.799.771v1.266zM1059 41.691c-.483 0-.875-.351-.875-.785v-8.719c0-.433.392-.784.875-.784s.875.351.875.784v8.719c0 .434-.392.785-.875.785zM1055.781 41.691c-.483 0-.875-.351-.875-.785v-8.719c0-.433.392-.784.875-.784s.875.351.875.784v8.719c0 .434-.392.785-.875.785zM1062.25 41.691c-.483 0-.875-.351-.875-.785v-8.718c0-.434.392-.785.875-.785s.875.351.875.785v8.718c0 .434-.392.785-.875.785z'
	}), v('path', {
		className: t.strokeAnim,
		d: 'M1067.169 29.677h-16.338c-.459 0-.831-.441-.831-.875 0-.433.372-.851.831-.851h16.338c.459 0 .831.418.831.851 0 .434-.372.875-.831.875z'
	}))
}
var hd = {
	delete: 'Clg1x0',
	button: 'Clg2gl',
	buttonActive: 'Clg2gl Clg9',
	icon: 'Clg1p2',
	fill: 'Clg1cq',
	strokeAnim: 'Clg1cq Clg2dv'
};
const pd = ({
	meta: t
}) => {
	const {
		dispatch: e,
		user: n,
		editor: s
	}
		= On('user', 'editor'),
		i = s.processingDeletion,
		a = A((() => {
			((t, e) => {
				let n = 'You are about to delete the whole song with all its revisions permanently.';
				if (t) return window.confirm(n);
				n += ` Please enter the song title to confirm deletion: ${e}`;
				const s = window.prompt(n);
				return s === e || (s && window.alert('Song title does not match. Aborting deletion.'), !1)
			})(n.isAdmin, t.title) && e('editor/delete', t)
		}), [
			e,
			n,
			t
		]);
	return v('div', {
		className: hd.delete,
		id: 'deletion'
	}, i && v(Hc, {
		width: 21,
		height: 21,
		fill: '#42a4f8'
	}), !i && v('button', {
		className: hd.button,
		onClick: a
	}, v(dd, {
		styles: hd
	})))
};
function fd() {
	return v('div', {
		className: 'ca2pz'
	}, v('p', {
	}, 'Left hand'), v('img', {
		src: '/static/media/hand.978a1cd8.svg',
		width: 76.6,
		height: 100.1,
		alt: 'Fingerging hint'
	}))
}
const md = {
	animationStyles: Jc
};
function gd() {
	const {
		dispatch: t,
		fingering: e
	}
		= On('fingering', 'experiments'),
		n = A((() => {
			t('fingering/toggle')
		}), [
			t
		]);
	return v('div', {
		className: 'Bk32i',
		id: 'fingering'
	}, v('button', {
		className: 'Bk2dm',
		id: 'fingering-toggle',
		title: 'Toggle fingering',
		onClick: n
	}, v('svg', {
		width: 30,
		height: 30,
		viewBox: '-6 -4 30 30',
		role: 'img',
		id: 'fingering-icon'
	}, v('path', {
		d: ad
	}), v('path', {
		d: 'M7.1 13.7c.8.3 1.6 2.2 1.6 3.3'
	}))), v(Un, null, e.shown && v(Gn, md, v(fd, null))))
}
var yd = {
	title: 'Cni2u8',
	line: 'Cni1wm',
	toggle: 'Cni2ar',
	wrap: 'Cni1z1',
	wrapHorizontal: 'Cni7i',
	notation: 'Cni1hf',
	name: 'Cni13m',
	def: 'Cni2ul',
	notation__old: 'Cni1hf Cni2fb',
	subtitle: 'Cni29f',
	figure: 'Cnijf'
},
	vd = {
		exitActive: 'Bvp2xa',
		enterActive: 'Bvp2w2',
		enter: 'Bvpwa',
		exit: 'Bvp1pc'
	};
const wd = {
	animationStyles: vd
},
	bd = {
		animationStyles: Jc
	};
function xd({
	x: t,
	fret: e,
	string: n
}) {
	const s = Ca.drums0,
		i = v(Oa, {
			fret: e,
			className: s,
			transform: `translate(${t}, ${0.5 + 12 * n})`
		});
	return 93 === e || 59 === e ? v(S, null, v('use', {
		className: s,
		transform: `translate(${t}, -5.5)`,
		xlinkHref: '#drumHatEdge'
	}), i) : i
}
function Sd({
	x: t,
	title: e,
	fret: n,
	string: s
}) {
	return v(S, null, v('text', {
		'text-anchor': 'middle'
	}, e.split('\n').reverse().map(((e, n) => v('tspan', {
		x: t,
		y: - 14 * (n + 1)
	}, e)))), v(xd, {
		x: t,
		fret: n,
		string: s
	}))
}
function kd({
	end: t
}) {
	let e = 'M0,0v48';
	for (let n = 0; n < 5; n++) e += `M0,${12 * n} h${t}`;
	return e += 'V0',
		v('path', {
			className: 'Eh1jo',
			d: e
		})
}
const Cd = T((({
	usedDrums: t,
	horizontal: e
}) => {
	const {
		layer: n,
		experiments: s
	}
		= On('layer', 'experiments'),
		i = 'help_notation' === n.layer,
		a = 'drop' !== s.drum_standard_notation,
		o = a ? function (t, e) {
			let n = Aa.filter((e => t.has(e[0])));
			t.has(41) && t.has(45) && (n = n.filter((t => 45 !== t[0])));
			const s = [
			];
			for (let t = 0; t < n.length; t += 4) s.push(n.slice(t, t + 4));
			return e && s.length % 2 == 1 && s.push([]),
				s
		}(t, e) : function (t) {
			const e = Math.floor((t.size + 2) / 3),
				n = [
					...t.values()
				];
			return [n.slice(0, e),
			n.slice(e, 2 * e),
			n.slice(2 * e)]
		}(t);
	return v(Un, null, i && v(Gn, e ? wd : bd, v('div', {
		className: e ? yd.wrapHorizontal : yd.wrap
	}, v('div', {
		className: a ? yd.notation : yd.notation__old,
		id: 'drum_notation'
	}, v('h3', {
		className: yd.title
	}, 'Instruments in the current track'), a ? o.map((t => v('svg', {
		className: yd.figure,
		width: 240,
		height: 130
	}, v('g', {
		transform: 'translate(0, 54)'
	}, v(kd, {
		end: 240
	}), t.map(((t, e) => v(Sd, {
		fret: t[0],
		string: Ws(t[0], !0),
		title: t[1],
		x: 60 * e + 30
	}))))))) : o.map(((t, e) => v('div', {
		className: yd.col,
		key: e
	}, t.map((t => v('dl', {
		className: yd.line,
		key: t.name
	}, v('dt', {
		className: yd.name
	}, t.name), v('dd', {
		className: yd.def
	}, Fs[t.name])))))))))))
}));
var _d = {
	header: 'Clxc',
	headerNonSelectable: 'Clxc Cl5x',
	song: 'Clwh',
	dash: 'Cl1r4',
	artist: 'Cl2pm',
	part: 'Cl2eu',
	partDifficulty: 'Cl2eu Clme',
	instrument: 'Cl2jb',
	difficulty: 'Cl4v',
	fill: 'Cl14r',
	fillText: 'Cl2z8',
	explainDifficultyLink: 'Cl1vp',
	difficultyLinksPanel: 'Clkv',
	findEasierSongsLink: 'Cl2ah',
	reportInvalidDifficultyLink: 'Cl2ah Cl1mf',
	label: 'Cled',
	showroom: 'Clly',
	demo: 'Cl2yo',
	instrumentTab: 'Clpi',
	separator: 'Cl30y',
	desktopNoBorder: 'Cl30y Clpp',
	tabletNoBorder: 'Cl30y Cl1sb'
};
const Ed = {
	animationStyles: Jc,
	timeout: 500
};
class Nd extends x {
	constructor() {
		super(),
			this.pendingHideHint = null,
			this.onEscHintClick = () => {
				this.cancelPendingHideHint(),
					this.setState({
						showHint: !1
					})
			},
			this.state = {
				showHint: !1
			}
	}
	componentWillReceiveProps(t) {
		const e = this.props;
		t.isFullscreen !== e.isFullscreen && (this.cancelPendingHideHint(), t.isFullscreen && (this.setState({
			showHint: !0
		}), this.pendingHideHint = setTimeout((() => {
			this.setState({
				showHint: !1
			})
		}), 3500))),
			t.isFullscreen || this.setState({
				showHint: !1
			})
	}
	componentWillUnmount() {
		this.cancelPendingHideHint()
	}
	render() {
		const t = this.props.isFullscreen,
			e = 'fullscreen-title-id';
		return v('div', {
			id: 'fullscreen'
		}, v(Un, null, this.state.showHint && v(Gn, Ed, v('div', {
			className: 'B9qd6',
			onClick: this.onEscHintClick
		}, 'Press ESC to exit fullscreen mode'))), v('div', {
			className: 'B9q2mp',
			id: 'fullscreen-controls'
		}, v('button', {
			className: t ? 'B9q17r B9qvh' : 'B9q17r',
			onClick: this.props.handleFullscreen,
			'aria-label': 'fullscreen'
		}, v('svg', {
			width: 24,
			height: 17,
			role: 'img',
			'aria-labelledby': e
		}, v('title', {
			id: e
		}, t ? 'Turn off fullscreen mode (ESC)' : 'Turn on fullscreen mode (Alt + Enter)'), v('path', {
			className: 'B9q1gg',
			d: t ? 'M18.948 17.041h-2.015l.001-2.326c0-1.412 1.031-2.679 2.655-2.679h4.277l-.016 2.02h-4.183c-.49-.042-.735.186-.735.685 0 .498.006 1.265.016 2.3zM4.918 17.072h2.015v-2.326c0-1.412-1.031-2.679-2.655-2.679H0l.016 2.02H4.2c.49-.042.734.186.734.685 0 .499-.006 1.265-.016 2.3zM18.948.032h-2.015l.001 2.325c0 1.412 1.031 2.679 2.655 2.679h4.277l-.016-2.019h-4.183c-.49.041-.735-.187-.735-.686 0-.498.006-1.264.016-2.299zM4.918 0h2.015v2.326c0 1.412-1.031 2.679-2.655 2.679H0l.016-2.019H4.2c.49.041.734-.187.734-.686 0-.498-.006-1.265-.016-2.3z' : 'M2.015 5.005H0l.001-2.326C.001 1.267 1.032 0 2.656 0h4.277l-.016 2.02H2.734c-.49-.042-.735.186-.735.685 0 .498.006 1.265.016 2.3zM21.985 5.036H24l-.001-2.326c0-1.412-1.03-2.679-2.654-2.679h-4.278l.016 2.02h4.184c.49-.042.734.186.734.685 0 .499-.006 1.265-.016 2.3zM2.015 11.996H0l.001 2.325C.001 15.733 1.032 17 2.656 17h4.277l-.016-2.019H2.734c-.49.041-.735-.187-.735-.686 0-.498.006-1.264.016-2.299zM21.985 11.964H24l-.001 2.326c0 1.412-1.03 2.679-2.654 2.679h-4.278l.016-2.019h4.184c.49.041.734-.187.734-.686 0-.498-.006-1.265-.016-2.3z'
		})))))
	}
	cancelPendingHideHint() {
		null != this.pendingHideHint && (clearTimeout(this.pendingHideHint), this.pendingHideHint = null)
	}
}
function Ld(t) {
	return 60000 / t / 4
}
class Td {
	constructor(t) {
		Object.keys(t).forEach((e => {
			this[e] = t[e]
		})),
			this.VALUES = [
				this.VERY_EASY,
				this.EASY,
				this.BELOW_INTERMEDIATE,
				this.INTERMEDIATE,
				this.UPPER_INTERMEDIATE,
				this.HARD,
				this.VERY_HARD,
				this.INSANE
			],
			this.nameToEntryMap = new Map,
			this.nameToIndexMap = new Map;
		for (let t = 0; t < this.VALUES.length; t++) {
			const e = this.VALUES[t];
			this.nameToIndexMap.set(e.name, t),
				this.nameToEntryMap.set(e.name, e)
		}
	}
	static forSkillTestResults(t, e, n) {
		function s(t) {
			return 60000 / t / 4
		}
		const i = s(t),
			a = s(e),
			o = s(n);
		return new Td({
			VERY_EASY: {
				name: 'VERY_EASY',
				rh: 4 * i,
				lh: 4 * a,
				legato: 4 * o
			},
			EASY: {
				name: 'EASY',
				rh: 2 * i,
				lh: 2 * a,
				legato: 2 * o
			},
			BELOW_INTERMEDIATE: {
				name: 'BELOW_INTERMEDIATE',
				rh: 1.5 * i,
				lh: 1.5 * a,
				legato: 1.5 * o
			},
			INTERMEDIATE: {
				name: 'INTERMEDIATE',
				rh: 1.25 * i,
				lh: 1.25 * a,
				legato: 1.25 * o
			},
			UPPER_INTERMEDIATE: {
				name: 'UPPER_INTERMEDIATE',
				rh: 1.1 * i,
				lh: 1.1 * a,
				legato: 1.1 * o
			},
			HARD: {
				name: 'HARD',
				rh: i,
				lh: a,
				legato: o
			},
			VERY_HARD: {
				name: 'VERY_HARD',
				rh: 0.9 * i,
				lh: 0.9 * a,
				legato: 0.9 * o
			},
			INSANE: {
				name: 'INSANE',
				rh: 0.8 * i,
				lh: 0.7 * a,
				legato: 0.7 * o
			}
		})
	}
	increment(t, e = 1) {
		const n = this.indexOf(t);
		if (- 1 === n) throw new Error(`Unable to find complexity ${t}`);
		const s = this.VALUES,
			i = s.length - 1;
		return s[Math.min(Math.max(0, n + e), i)]
	}
	forName(t) {
		return this.nameToEntryMap.get(t)
	}
	indexOf(t) {
		if (null === t) return - 1;
		const e = t.name,
			n = this.nameToIndexMap.get(e);
		return void 0 === n ? - 1 : n
	}
	max(t, e) {
		return 1 === this.compare(t, e) ? t : e
	}
	min(t, e) {
		return 1 === this.compare(t, e) ? e : t
	}
	compare(t, e) {
		const n = this.indexOf(t),
			s = this.indexOf(e);
		return n === s ? 0 : n > s ? 1 : - 1
	}
	forLHOnly(t) {
		return this.forDuration('legato', t)
	}
	forLH(t) {
		return this.forDuration('lh', t)
	}
	forRH(t) {
		return this.forDuration('rh', t)
	}
	forDuration(t, e) {
		const n = this.VALUES;
		for (let s = n.length - 1; s >= 0; s--) {
			const i = n[s],
				a = i[t];
			if (void 0 === a) throw new Error(`Unable to find complexity for lookup property ${t}`);
			if (0 === s) {
				if (e >= a) return i
			} else if (s === n.length - 1) {
				if (e <= a) return i
			} else if (e <= a) return i
		}
		return n[0]
	}
}
const Id = new Td({
	VERY_EASY: {
		name: 'VERY_EASY',
		rh: Ld(60),
		lh: Ld(41),
		legato: Ld(20)
	},
	EASY: {
		name: 'EASY',
		rh: Ld(90),
		lh: Ld(50),
		legato: Ld(45)
	},
	BELOW_INTERMEDIATE: {
		name: 'BELOW_INTERMEDIATE',
		rh: Ld(120),
		lh: Ld(65),
		legato: Ld(70)
	},
	INTERMEDIATE: {
		name: 'INTERMEDIATE',
		rh: Ld(160),
		lh: Ld(80),
		legato: Ld(95)
	},
	UPPER_INTERMEDIATE: {
		name: 'UPPER_INTERMEDIATE',
		rh: Ld(210),
		lh: Ld(110),
		legato: Ld(125)
	},
	HARD: {
		name: 'HARD',
		rh: Ld(250),
		lh: Ld(136),
		legato: Ld(143)
	},
	VERY_HARD: {
		name: 'VERY_HARD',
		rh: Ld(281),
		lh: Ld(140),
		legato: Ld(150)
	},
	INSANE: {
		name: 'INSANE',
		rh: Ld(290),
		lh: Ld(150),
		legato: Ld(160)
	}
});
var Ad = {
	difficulty: 'Cae2ew',
	field: 'Cae1y3',
	placeholder: 'Cae1r7',
	difficulty1: 'Cae2ew Cae1nm',
	difficulty2: 'Cae2ew Cae2c',
	difficulty3: 'Cae2ew Cae1kv',
	difficulty4: 'Cae2ew Cae2t8',
	difficulty5: 'Cae2ew Cae1eb',
	difficulty6: 'Cae2ew Cae10m',
	difficulty7: 'Cae2ew Cae5k',
	difficulty8: 'Cae2ew Caey'
};
const Pd = {
};
Pd[Id.VERY_EASY.name] = 'Beginner. Tier 1',
	Pd[Id.EASY.name] = 'Beginner. Tier 2',
	Pd[Id.BELOW_INTERMEDIATE.name] = 'Intermediate. Tier 1',
	Pd[Id.INTERMEDIATE.name] = 'Intermediate. Tier 2',
	Pd[Id.UPPER_INTERMEDIATE.name] = 'Intermediate. Tier 3',
	Pd[Id.HARD.name] = 'Advanced. Tier 1',
	Pd[Id.VERY_HARD.name] = 'Advanced. Tier 2',
	Pd[Id.INSANE.name] = 'Advanced. Tier 3';
const Md = {
};
Md[Id.VERY_EASY.name] = 'Very Easy',
	Md[Id.EASY.name] = 'Easy',
	Md[Id.BELOW_INTERMEDIATE.name] = 'Below Intermediate',
	Md[Id.INTERMEDIATE.name] = 'Intermediate',
	Md[Id.UPPER_INTERMEDIATE.name] = 'Upper Intermediate',
	Md[Id.HARD.name] = 'Hard',
	Md[Id.VERY_HARD.name] = 'Very Hard',
	Md[Id.INSANE.name] = 'Master';
const Bd = v('i', null),
	Dd = t => {
		const {
			id: e,
			difficultyString: n,
			difficultyNA: s,
			isNumerated: i
		}
			= t;
		if (!n || s) return v('span', {
			className: Ad.placeholder,
			title: 'Not calculated'
		});
		const a = Id.forName(n),
			o = Id.indexOf(a) + 1,
			r = t['data-field'];
		let l = Ad[`difficulty${o}`];
		return r && (l = `${Ad.difficulty} ${l} ${Ad.field}`, i || (l += ` ${Ad.difficultyNonNumerated}`)),
			v('span', {
				id: e,
				className: l,
				'data-field': r,
				title: (c = n, Pd[c] || '')
			}, Bd, Bd, Bd, Bd, Bd, Bd, Bd, Bd);
		var c
	};
var Od = Rn(class extends x {
	constructor() {
		super(...arguments),
			this.onUnderstandLinkClick = t => {
				t.preventDefault(),
					this.props.dispatch('layer/hide')
			},
			this.onStillHaveQuestionsLinkClick = t => {
			},
			this.onReportInvalidDifficultyClick = () => {
				this.props.dispatch('curiosity/event', {
					event: 'Clicked on Report Invalid Difficulty Link'
				})
			}
	}
	componentDidMount() {
	}
	render() {
		return v('div', {
			className: 'oo2w1 Im2gu',
			id: 'explain-difficulty-popup'
		}, v('span', {
			className: 'oo1jh Im2lf'
		}, 'Each guitar track is assigned a difficulty level based on:', v('ol', {
		}, v('li', {
		}, 'The speed required for playing left and right hand. Faster is harder.'), v('li', {
		}, 'The techniques required: bends, vibrato, harmonics, sweep picking, string skipping, etc. and their combinations.'), v('li', {
		}, 'The relative complexity of the chords used: F is harder than G because it requires a barre, Cm7b5 is harder than C5, etc.')), v('p', {
		}, 'We usually skip the hardest 30% of a song (to skip solos) and roughly calculate the difficulty level based on the remaining 70%. In most cases, you can play the whole song in a band if you can play just 70% of the song.'), v('p', {
		}, v('i', {
		}, 'Disclaimer: the difficulty detection algorithm is experimental and designed for classic rock/metal songs that are played with a pick and it may produce less accurate results for other styles.')), v('p', {
		}, 'If you think that a difficulty value is incorrect, please ', v(Qo, {
			to: '/a/wa/report_invalid_difficulty',
			onClick: this.onReportInvalidDifficultyClick
		}, 'send us a report'), ' with a detailed explanation of why you think it should be different, so we can make Songsterr better.'), v('div', {
			className: 'Im1h4'
		}, v('a', {
			onClick: this.onUnderstandLinkClick,
			href: '',
			role: 'button'
		}, 'I understand, all clear'), v(Qo, {
			to: '/a/wa/help#contact-us',
			onClick: this.onStillHaveQuestionsLinkClick
		}, 'I still have questions'))))
	}
});
const Rd = {
	page: '',
	isPanel: !1
},
	jd = [
		['/',
			{
				page: 'search',
				isPanel: !0
			}
		],
		[
			'/a/wa/favorites',
			{
				page: 'favorites',
				isPanel: !0
			}
		],
		[
			'/a/wa/plus',
			{
				page: 'plus',
				isPanel: !0
			}
		],
		[
			'/a/wa/privacy',
			{
				page: 'privacy',
				isPanel: !0
			}
		],
		[
			'/a/wa/terms',
			{
				page: 'terms',
				isPanel: !0
			}
		],
		[
			'/a/wa/do-not-sell-my-personal-information',
			{
				page: 'dnsmpd',
				isPanel: !0
			}
		],
		[
			'/a/wa/submit',
			{
				page: 'submit',
				isPanel: !0
			}
		],
		[
			'/a/wa/about',
			{
				page: 'about',
				isPanel: !0
			}
		],
		[
			'/a/wa/jobs',
			{
				page: 'jobs',
				isPanel: !0
			}
		],
		[
			'/a/wa/help',
			{
				page: 'help',
				isPanel: !0
			}
		],
		[
			'/a/wa/signin',
			{
				page: 'signin',
				isPanel: !0
			}
		],
		[
			'/a/wa/signup',
			{
				page: 'signup',
				isPanel: !0
			}
		],
		[
			'/a/wa/report_invalid_difficulty',
			{
				page: 'report_invalid_difficulty',
				isPanel: !0
			}
		],
		[
			'/a/wa/recoverpassword',
			{
				page: 'recoverpassword',
				isPanel: !0,
				isRecover: !0
			}
		],
		[
			'/a/wa/account/password',
			{
				page: 'changepassword',
				isPanel: !0
			}
		],
		[
			'/a/wa/forgotpassword',
			{
				page: 'forgotpassword',
				isPanel: !0
			}
		],
		[
			'/a/wa/account',
			{
				page: 'account',
				isPanel: !0
			}
		],
		[
			'/a/wa/account/subscription',
			{
				page: 'cancelPlus',
				isPanel: !0
			}
		],
		[
			'/a/wa/account/deactivate',
			{
				page: 'deactivate',
				isPanel: !0
			}
		],
		[
			'/a/wa/account/card',
			{
				page: 'updateCard',
				isPanel: !0
			}
		],
		[
			'/a/wa/plus/payment',
			{
				page: 'subscribePlus',
				isPanel: !0
			}
		],
		[
			'/a/wa/howtoreadtab',
			{
				page: 'howToReadTab',
				isPanel: !0
			}
		],
		[
			/^\/a\/wsa\/(.*)tab-s(\d+)t(\d+)\/r(\d+)/,
			(t, e, n, s) => ({
				page: 'tab',
				name: t,
				songId: e,
				partId: n,
				revisionId: s,
				isPanel: !1
			})
		],
		[
			/^\/a\/wsa\/(.*)tab-s(\d+)t(\d+)/,
			(t, e, n) => ({
				page: 'tab',
				name: t,
				songId: e,
				partId: n,
				revisionId: null,
				isPanel: !1
			})
		],
		[
			/^\/a\/wsa\/(.*)tab-s(\d+)/,
			(t, e) => ({
				page: 'tab',
				name: t,
				songId: e,
				partId: '0',
				revisionId: null,
				isPanel: !1
			})
		],
		[
			/^\/a\/wsa\/(.*)tabs-a(\d+)/,
			(t, e) => ({
				page: 'artist',
				name: t,
				artistId: e,
				isPanel: !0
			})
		]
	];
function $d(t) {
	for (const [e,
		n] of jd) if (e instanceof RegExp) {
			const s = t.match(e);
			if (s) return 'function' == typeof n ? n.apply(null, [
			].concat(s).slice(1)) : n
		} else if (t === e) return 'function' == typeof n ? n.apply(null) : n;
	return Rd
}
function Fd(t) {
	const e = {
	};
	return t.split('&').map((t => t.split('=').map(decodeURIComponent))).forEach((t => {
		e[t[0]] = t[1] || ''
	})),
		e
}
function Hd(t, e, n) {
	return function (t, e) {
		if (e.user.isLoggedIn) {
			if ('/a/wa/signin' === t || '/a/wa/signup' === t) return '/a/wa/account';
			if (e.user.hasPlus) {
				if ('/a/wa/account/deactivate' === t) return '/a/wa/account';
				if (t.startsWith('/a/wa/plus')) return '/a/wa/account'
			} else if ('/a/wa/account/card' === t) return '/a/wa/account'
		} else {
			if (t.startsWith('/a/wa/account')) return '/a/wa/signin?next=account';
			if ('/a/wa/plus/payment' === t) return '/a/wa/signin?next=subscribe'
		}
	}(t ? t.toLowerCase() : '/', n)
}
function zd(t, e, n) {
	const s = {
		route: $d(t.toLowerCase())
	};
	return e && e.length ? s.query = Fd(e) : function (t) {
		for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
		return !0
	}(n.query) || (s.query = {
	}),
		s
}
const qd = t => {
	!Pn && t.on('@init', (() => ({
		route: {
			page: '',
			isPanel: !1
		},
		query: {
		}
	}))),
		!Pn && t.on('route/init', ((t, {
			pathname: e,
			query: n
		}) => ({
			route: $d(e.toLowerCase()),
			query: n
		}))),
		t.on('navigate', ((t, e) => {
			let [n,
				s] = e.split('#')[0].split('?');
			const i = Hd(n, 0, t);
			return i && ([n,
				s] = i.split('?'), e = i),
				Pn && history.pushState(null, '', e),
				zd(n, s, t)
		})),
		t.on('popstate', ((e, {
			pathname: n,
			search: s
		}) => {
			const i = s && s.substring(1),
				a = Hd(n, 0, e);
			return a ? (console.log('Found redirect to', a), history.replaceState(null, '', a), void t.dispatch('navigate', a)) : zd(n, i, e)
		})),
		Pn && window.addEventListener('popstate', (function () {
			t.dispatch('popstate', {
				pathname: location.pathname,
				search: location.search
			})
		}))
},
	Ud = t => t ? ((t.isBassGuitar ? ' Bass' : t.isDrums && ' Drum') || '') + ' Tab' : ' Tab';
function Wd(t) {
	const e = Object.keys(t).filter((e => t[e])).map((e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)).join('&');
	return e.length ? `?${e}` : ''
}
function Vd(t) {
	const e = Fd(document.location.search.substring(1));
	t.length ? e.pattern = t : delete e.pattern,
		history.replaceState(null, '', `${document.location.pathname || '/'}${Wd(e)}`)
}
function Gd(t) {
	const e = Fd(document.location.search.substring(1));
	t.length && 'ALL INSTRUMENTS' !== t ? e.inst = Yd(t) : delete e.inst,
		history.replaceState(null, '', `${document.location.pathname || '/'}${Wd(e)}`)
}
function Xd(t, e, n) {
	const s = Pn ? Fd(document.location.search.substring(1)) : Object.assign({
	}, n);
	t.length && 'ALL INSTRUMENTS' !== t ? s.inst = Yd(t) : delete s.inst;
	let i = '/';
	switch (e.page) {
		case 'search':
			i = '/';
			break;
		case 'favorites':
			i = '/a/wa/favorites';
			break;
		case 'artist':
			i = `/a/wsa/${e.name}tabs-a${e.artistId}`
	}
	return `${i}${Wd(s)}`
}
function Yd(t) {
	switch (t) {
		case 'GUITAR':
			return 'guitar';
		case 'DRUMS':
			return 'drum';
		case 'BASS':
			return 'bass';
		default:
			return ''
	}
}
function Zd(t, e) {
	return Wd({
		pattern: t ? t.pattern : void 0,
		inst: e.filters && 'ALL INSTRUMENTS' !== e.filters.instrument && e.filters.instrument ? Yd(e.filters.instrument) : void 0
	})
}
const Jd = 'Songsterr',
	Kd = 'Songsterr Tabs with Rhythm',
	Qd = {
		favorites: 'Favorites',
		plus: 'Songsterr Plus',
		submit: 'Submit Tab',
		about: 'About',
		jobs: 'Jobs',
		help: 'Questions',
		signin: 'Sign In',
		signup: 'Sign Up',
		report_invalid_difficulty: 'Invalid Difficulty Report',
		recoverpassword: 'Recover Password',
		changepassword: 'Change Password',
		forgotpassword: 'Forgot your password?',
		account: 'Account',
		cancelPlus: 'Cancel Subscription',
		deactivate: 'Deactivate account',
		updateCard: 'Update card',
		subscribePlus: 'Paying',
		howToReadTab: 'How to Read a Tab',
		privacy: 'Privacy Policy',
		terms: 'Terms Of Service',
		dnsmpd: 'Do Not Sell My Personal Information',
		'': '',
		tab: '',
		search: '',
		artist: ''
	};
function th(t, e = 'Guitar') {
	if (t) {
		if ('DRUMS' === t.instrument) return 'Drum';
		if ('BASS' === t.instrument) return 'Bass';
		if ('GUITAR' === t.instrument) return 'Guitar'
	}
	return e
}
function eh(t) {
	y((() => nh(t)), [
	])
}
function nh(t) {
	document.title = function (t) {
		const e = t.route;
		return 'artist' === e.page ? function (t) {
			return [t.artist && t.artist.pattern && ih(t.artist.pattern),
			oh(t),
				Kd].filter(Boolean).join(' | ')
		}(t) : 'tab' === e.page ? function (t) {
			const {
				meta: e,
				track: n
			}
				= t,
				s = n && e.tracks && !function (t, e) {
					return t.isBassGuitar ? 1 === e.filter((t => t.isBassGuitar)).length : t.isDrums ? 1 === e.filter((t => t.isDrums)).length : !!t.isGuitar && 1 === e.filter((t => t.isGuitar)).length
				}(n, e.tracks) ? ` - ${n.name} - ${n.instrument}` : '',
				i = cu(e) ? '' : ' (Temporary Removed by Music Publisher) ';
			return `${e.title}${Ud(n)} by ${e.artist}${s}${i} | ${Kd}`
		}(t) : 'search' === e.page ? function (t) {
			return [t.search && t.search.pattern && ih(t.search.pattern),
			ah(t),
				Jd].filter(Boolean).join(' | ')
		}(t) : function (t) {
			return [rh(t),
				Kd].join(' | ')
		}(t)
	}(t),
		window.ga && window.ga('send', 'pageview', {
			location: window.location.href,
			title: document.title
		}),
		function (t) {
			try {
				const e = document.styleSheets;
				for (let n = 0; n < e.length; n++) {
					const s = e[n];
					'print' === s.media.mediaText && 'print-ga' === s.ownerNode.id && Sr(s),
						'print' === s.media.mediaText && 'print-mp' === s.ownerNode.id && kr(s, t)
				}
			} catch (t) {
				console.error('PrintTracker: ' + t)
			}
		}(function (t) {
			return 'tab' === t.route.page && t.meta ? {
				page: t.route.page,
				Artist: t.meta.artist,
				Title: t.meta.title
			}
				: {
					page: t.route.page
				}
		}(t))
}
jd.map((([t,
	e]) => 'string' == typeof t && 'string' == typeof e.page ? {
		[
			e.page
		]: t
	}
		: {
		})).reduce(((t, e) => Object.assign(t, e)), {
		});
const sh = (t, e) => t.artist.artists[e] || 'Unknown Artist',
	ih = t => t.length > 0 ? `Search results for: '${t}'` : void 0,
	ah = t => [th(t.popular && t.popular.filters, 'Guitar'),
		'Tabs with Rhythm'].join(' '),
	oh = t => [sh(t, + t.route.artistId),
	th(t.artist && t.artist.filters, ''),
		'Tabs'].join(' '),
	rh = t => Qd[t.route.page] || '';
function lh({
	styles: t
}) {
	return v('svg', {
		width: 13,
		height: 13,
		className: t.icon,
		viewBox: '0 -3 13 13',
		fill: 'none',
		xmlns: 'http://www.w3.org/2000/svg'
	}, v('rect', {
		y: 1,
		width: 13,
		height: 11,
		rx: 3,
		className: t.fill
	}), v('path', {
		className: t.fillText,
		d: 'M4.032 5.18h1.46c.02-.68.25-1.23 1.04-1.23.52 0 .86.32.86.8 0 .62-.52.91-.94 1.27-.66.57-.69 1.02-.69 1.84h1.33c0-.7.12-.89.7-1.29.64-.44 1.13-.96 1.13-1.79 0-1.23-.95-2.05-2.37-2.05-1.6 0-2.43.96-2.52 2.45zm3.16 3.29h-1.55V10h1.55V8.47z'
	}))
}
const ch = {
	animationStyles: Jc
},
	uh = T((function ({
		plusAccess: t,
		allowedByLicense: e,
		isSmallScreen: n,
		isDesktop: s,
		usedDrums: i,
		difficulty: a,
		isDeleted: o,
		isPanel: r,
		isFullscreen: l,
		fingeringDisabled: c,
		handleFullscreen: u,
		handleNotation: d
	}) {
		const {
			dispatch: h,
			route: p,
			isMetaLoading: f,
			layer: m,
			meta: g,
			track: w,
			demo: b,
			artist: x,
			editor: S,
			device: k,
			experiments: C
		}
			= On('route', 'isMetaLoading', 'layer', 'meta', 'track', 'demo', 'artist', 'editor', 'device', 'experiments');
		y((() => {
			if ('tab' === p.page && !f && function (t, e, n) {
				return + t.songId === e.songId && + t.partId === (n && n.partId) && (!t.revisionId || + t.revisionId === e.revisionId)
			}(p, g, w)) return nh({
				route: p,
				meta: g,
				track: w
			}),
				void h('curiosity/countdown:start');
			h('curiosity/countdown:clear')
		}), [
			p,
			g,
			w,
			f
		]);
		const _ = Ud(w),
			E = !t && e;
		let N = a;
		N || w && w.difficulty && (N = w.difficulty);
		const L = !o && !l && e,
			T = !o && !n && !l && e,
			I = !(o || n || l || 'on' !== C.drawing || !Pn || 'seen' === window.localStorage.getItem('MarkBanner')),
			A = T && S.canDelete,
			P = n && !c,
			M = N && !l && !b.enabled,
			B = !n && M && 'difficulty_explained_popup' === m.layer;
		if (Pn && 'mediaSession' in navigator) try {
			navigator.mediaSession.metadata = new MediaMetadata({
				title: g.title + _,
				artist: g.artist,
				artwork: [
					{
						src: '/static/media/artwork-96x96.7f1b5856.png',
						sizes: '96x96',
						type: 'image/png'
					},
					{
						src: '/static/media/artwork-128x128.8a4c15a5.png',
						sizes: '128x128',
						type: 'image/png'
					},
					{
						src: '/static/media/artwork-192x192.ef4ca073.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/static/media/artwork-256x256.89e212c5.png',
						sizes: '256x256',
						type: 'image/png'
					},
					{
						src: '/static/media/artwork-384x384.e3f936a7.png',
						sizes: '384x384',
						type: 'image/png'
					},
					{
						src: '/static/media/artwork-512x512.cab80a9e.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			})
		} catch (t) {
			console.error(t)
		}
		let D = _d.header,
			O = _d.separator;
		return 'drawing' === m.layer && (k.isTablet ? (O = _d.tabletNoBorder, D = _d.headerNonSelectable) : O = _d.desktopNoBorder),
			v('header', {
				className: D,
				id: 'header'
			}, L && v(Tu, null), v(r ? 'div' : 'h1', {
				className: _d.song
			}, v(Qo, {
				className: _d.artist,
				'aria-label': 'artist',
				to: `${R = g,
					R ? `/a/wsa/${gr(`${R.artist || ''}-`)}tabs-a${R.artistId}` : '/'}${Zd(x, x)}`
			}, g.artist), v('span', {
				className: _d.dash
			}, ' - '), v('span', {
				className: _d.title,
				'aria-label': 'title'
			}, g.title), v('span', {
				className: _d.instrumentTab,
				'aria-label': 'tab type'
			}, _), !l && b.enabled && v(Qo, {
				to: '/a/wa/plus',
				className: _d.demo,
				'aria-label': 'Demo Song',
				onClick: () => {
					h('curiosity/setConversionProps', {
						'Last referring link': 'Demo Link'
					})
				}
			}, v(er, {
				width: 42,
				height: 22,
				shadow: 'transparent',
				id: 'iconDemo2'
			}))), P && v(gd, null), A && v(pd, {
				meta: g
			}), T && v(sd, null), I && v(ud, null), !n && v(Nd, {
				isFullscreen: l,
				handleFullscreen: u
			}), E && v(Qo, {
				id: 'text-showroom',
				className: _d.showroom,
				to: '/a/wa/plus?from=header_link',
				onClick: () => {
					h('curiosity/setConversionProps', {
						'Last referring link': 'Header Link'
					})
				}
			}, `Learn "${g.title}" faster with Songsterr Plus plan!`), !o && w && v(r ? 'div' : 'h2', {
				className: M ? _d.partDifficulty : _d.part
			}, v('span', {
				className: _d.name,
				'aria-label': 'name'
			}, w.name), ' - ', v('span', {
				className: _d.instrument,
				'aria-label': 'instrument'
			}, w.instrument), n && !o && i && v('button', {
				className: yd.toggle,
				onClick: d
			}, '(notation)'), n && !o && i && v(Cd, {
				usedDrums: i
			}), n && v('hr', {
				className: _d.separator,
				width: 250
			}), M && v('span', {
				className: _d.difficulty,
				'aria-label': 'track difficulty (rhythm)'
			}, v('span', {
				className: _d.label
			}, 'Track difficulty (Rhythm)'), v(Dd, {
				id: 'track-difficulty',
				difficultyString: N
			}), s && v('button', {
				className: _d.explainDifficultyLink,
				onClick: () => {
					h('layer/show', 'difficulty_explained_popup')
				},
				title: 'Explain how difficulty is calculated',
				id: 'explain_difficulty_link'
			}, v(lh, {
				styles: _d
			})), s && v(Un, null, B && v(Gn, ch, v(Od, null))))), !n && v('hr', {
				className: O,
				width: 410
			}));
		var R
	}));
const dh = 'a1 1 0 1 0 2 0 1 1 0 1 0-2 0',
	hh = 'M3 24v-7h2.5v4h1.5v-4h1.5v4h1.5v-4h5v4h1.5v-4h1.5v4h1.5v-4h1.5v4h1.5v-4h2.5v7z',
	ph = 'M7 10v7H3c-3 0-3-7 0-7z',
	fh = 'm1 0h.7c1-1.75 3-1.75 3-1.75a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6c2 0 2 10.5 0 10.5h-1.6a1.7 1.7 0 1 1-2.3 0h-1.6a1.7 1.7 0 1 1-2.3 0H14a1.7 1.7 0 1 1-2.3 0s-2 0-3-1.75H8z',
	mh = `${ph}m1 0h2s-.1-1 .8-1l2 .3V8.08a2 2.5 45 1 1 1.6 0v1.46l3.6.54v-2a2 2.5 45 1 1 1.6 0v2.24l1.2.18s.5-1.8 1.85-1.8 1.85 2.4 1.85 2.4l1.5.2c1.5 0 1.5 4.3 0 4.3l-1.5.2s-.5 2.4-1.85 2.4-1.85-1.8-1.85-1.8l-1.2.18v2.24a2 2.5 45 1 1-1.6 0v-2l-3.6.54v1.46a2 2.5 45 1 1-1.6 0V17.6l-2 .3c-.9 0-.8-1-.8-1H8z`,
	gh = `${ph}m1 0c1 0 1.5-.5 2-1.5s.9-.9 1.5-.5l.8.52a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l2.7 1.9c1 .7 2.1 1.4 0 2.3-1.8.8-3.5 1.5-5.4 2.3-1 .4-1.4.2-1.4-.8 0-.8-.1-1.6-1.8-2.6-2-1-6-2.7-11-2.7zm2.8.8${dh}m2.8 1.8${dh}m2.8 1.8${dh}m2.8 1.8${dh}m2.8 1.8${dh}`,
	yh = [
		`${hh}M3 9c0-4 2-6 6-6 8 0 4 8 16 8v5H3z`,
		'M17 6a1.5 1.5 0 1 1 0 1.7H3C2 7.7 2 6 3 6h14zM2 10.7c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8z',
		`${hh}M3 16v-2h1.2l-1-3V7h3v4l-1 3h3.65l-1-3V5h3v6l-1 3h3.65l-1-3V2h3v9l-1 3h3.65l-1-3V5h3v6l-1 3h3.65l-1-3V7h3v4l-1 3H25v2zm.7-6.5v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1`,
		`${hh}M9.8.1${dh}m3 1.36${dh}m3 1.36${dh}m3 1.36${dh}m3 1.36${dh}M3.43 10.52l.44-3.36 21.49 5.54-.18.88-21.75-3.06zM3 15.25l.25-2.72 21.78 2.19-.03.9-22-.37zM25.56 4.99s2.99.98.82 4.07L5.47-.23C6.6-4.34 8.2-3.05 8.61-3.06l16.95 8.05zm-21.39.15l.74-3.38 20.97 8.67-.23.83L4.17 5.14z`,
		`${ph}${fh}m12.7 2.5c1.5 0 1.5-2 0-2h-8c-1.5 0-1.5 2 0 2zm0 4c1.5 0 1.5-2 0-2h-8c-1.5 0-1.5 2 0 2z`,
		`${ph}${fh}m3.9 1.25${dh}m3.9 0${dh}m3.9 0${dh}m-7.8 4.5${dh}m3.9 0${dh}m3.9 0${dh}`,
		`${ph}m1 0c1.94-.05 1.08-1.86 3.33-1.54a1.3 1.3 0 1 1 1.4.32l1.4.32a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32s2.69.04 2.69 3.59c0 1.53-.75 4.62-3.65 4.62-1.23 0-2.18-1.59-3.5-1.59-2.8 0-3.88 2.8-7.22 2.8-1.87 0-2.04-3.77-4.25-3.77zm2.84.8${dh}m2.8.65${dh}m2.8.65${dh}m2.8.65${dh}m2.8.65${dh}`,
		`${ph}m1 0h.7c1-1.75 3-1.75 3-1.75h11c2 0 2 10.5 0 10.5h-11s-2 0-3-1.75H8zm3 5.5a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m-4-4a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0M13 19a1.5 1.5 0 1 1-1 2.5 1.5 1.5 0 1 1-1-2.5zM19 19a1.5 1.5 0 1 1-1 2.5 1.5 1.5 0 1 1-1-2.5zM13 8a1.5 1.5 0 1 1 1-2.5A1.5 1.5 0 1 1 15 8zM19 8a1.5 1.5 0 1 1 1-2.5A1.5 1.5 0 1 1 21 8z`,
		mh,
		`${mh}m4 2c-1 0-1 3 0 3l7-.5c1 0 1-2 0-2z`,
		`${ph}m1 0h2s-.1-1 .8-1l2 .3V8.08a2 2.5 45 1 1 1.6 0v1.46l3.6.54v-2a2 2.5 45 1 1 1.6 0v2.24l2 .3a3.2 4.5 0 1 1 0 5.66l-2 .3v2.24a2 2.5 45 1 1-1.6 0v-2l-3.6.54v1.46a2 2.5 45 1 1-1.6 0V17.6l-2 .3c-.9 0-.8-1-.8-1H8zm4 2c-1 0-1 3 0 3l7-.5c1 0 1-2 0-2z`,
		'M20 8c1.5 0 3 0 3 1s-1.5 2.5-1.5 2.5l-9.5 11s1.5 0 1.5.5v1h-7v-1c0-.5 1.5-.5 1.5-.5V3c0-1.25 2.5-1.25 2.5 0C13 3 19 8 20 8zm-2.5.5l-1.5-1V14l1.5-1.5v-4zm-2.75-1.75L13.5 6v10.5l1.25-1.25v-8.5zM12 5.5L10.5 5v14.5L12 18V5.5zm9 4c-.5-.5-2 0-2.5-.5v2.5l2.5-2z',
		'M16 16h-4l1.5-7.5h1L16 16zM9 8.25l3.5.25-1.25 7.5L9 8.25zM16.75 16L15.5 8.5l3.5-.25L16.75 16zm.75.5l1 7a6.5 2 0 0 1-9 0l1-7a6.5 2 0 0 0 7 0zm-7-.5c-2 0-6-9-6-9L8 8l2.5 8zM20 8l3.5-1s-4 9-6 9L20 8zM4.5 5.5a9.5 2 0 1 1 19 0 9.5 2 0 1 1-19 0zm3-.2a6.5 1.2 0 1 0 13 0 6.5 1.2 0 1 0-13 0z',
		'M15.5 17c0 1 4 1 4 5-3 2-9 2-12 0 0-4 4-4 4-5s-1-1-1.5-3-.5-5.5 3.5-5.5 4 3.5 3.5 5.5-1.5 2-1.5 3zm7-2.5c2 .5 3 1.5 3 2.5s-2 2-5.5 2c-1.5-2.5-4.5-1-2-4 1-1 1.5-4-.5-6 0-1 2-2.5 3-2 2 0 3 1 3 4-.5 1-1 2-1 3.5zm-6-6.5c-.5-.5-.5-.5-1-.75 0-.75 0-.75-.5-1.25-.5-1.5 0-3 2.5-3 2 0 3 1 2.5 2.5-2.5 0-3 1.5-3.5 2.5zM9 15c2.5 3-1 1.5-2 4-3.5 0-5.5-1-5.5-2s1-2 3-2.5c-1 0-2-1.5-2-1.5 1.3-1.7 1-3 1-4s2-3 3-2c1-1 3 1 3 2-2 2-1.5 5-.5 6zm1.5-7c-.5-.75-.5-2.5-4-2.5 0-2.5 3.5-3 4.5-2 1.5 1 1.5 2.5 1.5 3.75 0 0-1.5.25-2 .75z',
		'M3 15c-1.5 0-5 1.5-5-1.5S1.5 12 3 12v3zm1 0v-3h3a1.2 1.2 0 1 1 1 0h2.75a1.2 1.2 0 1 1 1 0h2.75a1.2 1.2 0 1 1 1 0H18v3h-1a5.5 4 0 1 1-11.5 0H7zm3 0a5.5 3 0 0 0 3.5 3v-3zm5 3a5.5 3 0 0 0 3.5-3H12zm13 1V8l-.5-.5S21 11.5 19 12v3c2 .5 5.5 4.5 5.5 4.5l.5-.5z',
		'M20.5 10.5a1 1.3 10 1 1-1 1l-1 1a1 1.3 10 1 1-1 1l-1 1a1 1.3 10 1 1-1 1l-4 4.5c-.5.5 1 1.5 2.5 0 .5-.5.5-1.5 1-1.75s1.27 0 1.5.5l1 6.25c0 .5-.5 1-1 1-1.5 0-2-2.5-5.5-1s-6-2.5-4-4.5L19.5 8c.5-.5.5-1.5 0-2l-2-2c-1 0-3-2-2-3s3 1 3 2l2 2c2.5 1 1.75 3.75.75 4.5l-.75 1z',
		'M3 14l1.5.5v-3L3 12s-5.5-.25-5.5 1S3 14 3 14zm2.5.5h2a1.2 1.2 0 1 1 2 0h2a1.2 1.2 0 1 1 2 0h2a1.2 1.2 0 1 1 2 0h2v-3h-14zm13 1.5h-1.75l.25-1.25h-1l.25 1.25h-3.5l.25-1.25h-1l.25 1.25h-3.5L9 14.75H8L8.25 16H6.5v1h12v-1zm7.75.75v-7.5L26 9l-3.5 2.5h-2v3h2L26 17l.25-.25z',
		'M28 15h-4a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-5.5a2 2 0 1 1 0-4h26z',
		`${hh}M3 7v9h22V7H3zm1.5 4a2.5 2.5 0 1 1 0 1H7v-1zm8.1-1.6a2.5 2.5 0 1 1-.7.7l1.7 1.7.7-.7zm7.9 4.6a2.5 2.5 0 1 1 1 0v-2.5h-1z`,
		'M11 4c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm11.7-1.7c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm-8.3 8.3c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm11.7-1.7c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5z',
		'M8 20.4a8.5 8.5 0 1 1 11.2 0 1.25 1.25 0 1 0 1.65 1.88 11 11 0 1 0-14.5 0A1.25 1.25 0 1 0 8 20.4zM9.64 8.63a6.5 6.5 0 1 0 2.91-1.24l1.7 3.95a1.6 1.6 0 0 1-2.93 1.25z',
		`${ph}m1 0l3 .2s.8-1.5 1.8-1.5a1.8 2 45 1 1 1.6 0c2 0 3 2.2 3 2.2s1-2.2 3-2.2a1.8 2 45 1 1 1.6 0c1 0 1.5 2.2 1.5 2.2a1.7 4 0 1 1 0 5.26s-.5 2.2-1.5 2.2a1.8 2 45 1 1-1.6 0c-2 0-3-2.2-3-2.2s-1 2.2-3 2.2a1.8 2 45 1 1-1.6 0c-1 0-1.8-1.5-1.8-1.5l-3 .2z`,
		'M22.5 3c2 2-.5 4-4 8 0 0-7 11-9 13-1 1-1.5 1-3-.5S4 21 5 20C7 18 17.5 9.5 17.5 9.5c2-2.5 4.5-4 3.5-5.25S19 5 17 6.5c0 0-3 4.5-5 6.5-1.5 1.5-2 0-3.5-1.5S7 9.5 7.5 9c2-2 8.5-4.25 8.5-4.25C19 2.5 20.5 1 22.5 3z',
		'M8 5c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm8-8c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm8-4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1z',
		'M6.17 9.65a9.03 4.82 0 1 0 8.26-3.35l1.83 1.39a7.43 3.5 0 1 1-8.59 2.4l7.04 2.06.2-.46-11-4.23a.7.7 0 1 0-.48 1.39zM6.8 2.8l9.57 6.25-.37.45-3.19-1.76a7.43 3.5 0 0 0-3.02.78l-1.54-.73a9.03 4.82 0 0 1 2.74-1.05L6 4a.7.7 0 0 1 .8-1.2zm17 9.76a9.03 4.82 0 0 1-3.21 3.69v7.18a9.03 4.82 0 0 0 3.21-3.69zm-4.92 4.29a9.03 4.82 0 0 1-8.44-.06l-.04 7.17a9.03 4.82 0 0 0 8.48.07zm-10.11-.69a9.03 4.82 0 0 1-3-3.2v7.18a9.03 4.82 0 0 0 3 3.2z'
	];
function vh({
	instrumentId: t,
	name: e,
	className: n,
	transform: s
}) {
	const i = function (t) {
		return 1024 === t ? 24 : t < 32 ? t < 24 ? t < 16 ? t < 8 ? 0 : 1 : t < 21 ? 2 : 3 : t < 27 ? t < 26 ? 4 : 5 : 6 : t < 40 ? 7 : t < 68 ? t < 47 ? t < 43 ? t < 42 ? 8 : 9 : t < 46 ? 10 : 11 : t < 56 ? t < 48 ? 12 : 13 : t < 64 ? 14 : 15 : t < 96 ? t < 80 ? t < 72 ? 16 : 17 : t < 88 ? 18 : 19 : t < 112 ? t < 104 ? 20 : 21 : t < 120 ? 22 : 23
	}(t),
		a = e && 6 === i && e.includes('James Hetfield'),
		o = a ? gh : yh[i],
		r = a ? 'translate(-7 14)rotate(-45)' : function (t) {
			return 3 === t ? ' translate(13 0)rotate(45)scale(.75)' : 1 === t || t >= 4 && t <= 10 || 14 === t || 16 === t || 17 === t || 21 === t ? 'translate(-5 14)rotate(-45)' : void 0
		}(i);
	return v('path', {
		d: o,
		transform: (r || s) && `${s || ''}${r || ''}`,
		className: n
	})
}
class wh extends x {
	render() {
		let t = this.props.active ? 'C1031w' : 'C101oh';
		return t = this.props.mobile ? 'C102z2' : t,
			v('svg', {
				className: this.props.className,
				width: '27',
				height: '27',
				viewBox: '0 0 27 27'
			}, v(vh, {
				className: t,
				instrumentId: this.props.instrumentId,
				name: this.props.name
			}))
	}
}
function bh(t, e) {
	const n = document.querySelector('#mixer-button') || null,
		s = n ? n.offsetTop : 42,
		i = function (t) {
			return 42 - 47 * t
		}(function (t) {
			if (t < 2) return 1;
			if (2 === t) return 2;
			const e = document.querySelector('#mixer-button') || null,
				n = e ? Math.floor((e.offsetTop + 42) / 47) : 3,
				s = Math.floor(t / 2);
			return n < s ? n : s
		}(t));
	return {
		height: Math.min(47 * t, e - 2 * (s + i) - 20),
		top: i
	}
}
function xh(t) {
	return {
		top: - 1 * t.top + 15
	}
}
var Sh = Rn(class extends x {
	constructor(t) {
		super(t),
			this.updateHeight = () => {
				const t = bh((this.props.meta.tracks || [
				]).length, this.props.screen.viewport.height),
					e = xh(t),
					n = {
						height: t.height
					},
					s = this.state.style;
				s.height === t.height && s.top === t.top || this.setState(Object.assign({
				}, this.state, {
					style: t,
					arrowStyle: e,
					scrollerStyle: n
				}))
			};
		const e = bh((this.props.meta.tracks || [
		]).length, this.props.screen.viewport.height),
			n = xh(e),
			s = {
				height: e.height
			};
		this.state = {
			style: e,
			arrowStyle: n,
			scrollerStyle: s
		}
	}
	componentDidMount() {
		this.updateHeight()
	}
	componentDidUpdate() {
		this.updateHeight()
	}
	render() {
		const {
			meta: t,
			data: e
		}
			= this.props,
			n = this.props.screen.isSmall,
			{
				partId: s,
				revisionId: i
			}
				= e,
			a = t.tracks || [
			],
			o = n ? null : this.state.style,
			r = a && a.map(((e, a) => {
				const o = s === a,
					r = '' + (o ? 'Cv3137 Cv31y7' : 'Cv3137'),
					l = n ? e.instrument : `${e.name} - ${e.instrument}`;
				return v('div', {
					className: r,
					key: a,
					'aria-label': 'track'
				}, v(Qo, {
					className: 'Cv3p6',
					to: yr(t, a, i, e.instrumentId),
					'aria-current': o ? 'page' : void 0
				}, v(wh, {
					className: 'Cv3tw',
					instrumentId: e.instrumentId,
					name: e.name,
					active: o
				}), v('span', {
					className: 'Cv32cz'
				}, l)))
			}));
		return v('div', {
			className: n ? 'Cv3x8 Cv35z' : 'Cv3x8',
			style: o,
			role: 'dialog',
			'aria-label': 'Select track'
		}, n ? r : v('div', {
			className: 'Cv31yt',
			style: this.state.scrollerStyle
		}, r), n ? null : v('div', {
			className: 'Cv34h',
			style: this.state.arrowStyle
		}))
	}
}, 'data', 'screen', 'meta');
class kh extends x {
	constructor(t) {
		super(t),
			this.state = {
				loading: !t.canPlay
			}
	}
	componentDidUpdate(t) {
		const {
			canPlay: e
		}
			= this.props;
		t.canPlay && !e ? (this.animationTimer && clearTimeout(this.animationTimer), this.animationTimer = setTimeout((() => this.setState({
			loading: !0
		})), 600)) : !t.canPlay && e && (this.animationTimer && clearTimeout(this.animationTimer), this.animationTimer = setTimeout((() => this.setState({
			loading: !1
		})), 600))
	}
	render() {
		const {
			onClick: t,
			shouldPlay: e,
			footer: n,
			title: s,
			titlePressed: i
		}
			= this.props,
			{
				loading: a
			}
				= this.state;
		let o = n ? id.footerButton : id.main;
		e && (o = n ? id.footerButton : id.mainActive);
		const r = a ? id.playLoading : id.play,
			l = n ? 32 : 65,
			c = n ? '-2 0 24 24' : '-5 -4 65 65',
			u = (n ? 'footer' : 'main') + 'play-title-id';
		return v('button', {
			className: o,
			onClick: t,
			'aria-pressed': e
		}, a && n ? v(Hc, {
			width: l,
			height: l,
			fill: '#128DF6'
		}) : v('svg', {
			className: id.icon,
			width: l,
			height: l,
			viewBox: c,
			role: 'img',
			'aria-labelledby': u,
			'data-loading': a
		}, !n && v('defs', null, v('filter', {
			id: 'svg_shadow',
			width: '200%',
			height: '200%',
			x: '-50%',
			y: '-50%'
		}, v('feMorphology', {
			radius: 1,
			operator: 'dilate',
			in: 'SourceAlpha',
			result: 'a'
		}), v('feOffset', {
			dy: 1,
			in: 'a',
			result: 'b'
		}), v('feGaussianBlur', {
			stdDeviation: 2,
			in: 'b',
			result: 'c'
		}), v('feComposite', {
			in: 'c',
			in2: 'SourceAlpha',
			operator: 'out',
			result: 'd'
		}), v('feColorMatrix', {
			values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0',
			in: 'd',
			result: 'e'
		}), v('feBlend', {
			in: 'SourceGraphic',
			in2: 'e',
			mode: 'normal'
		}))), v('title', {
			id: u
		}, e && i ? i : s), !n && v('circle', {
			className: id.circle,
			cx: '27.5',
			cy: '27.5',
			r: '27.5',
			filter: 'url(#svg_shadow)'
		}), v('path', {
			className: r,
			transform: n ? void 0 : 'translate(19 15)',
			d: e ? 'M-1 4c0-2 0-2 2-2h3c2 0 2 0 2 2v17c0 2 0 2-2 2h-3c-2 0-2 0-2-2zm12 0c0-2 0-2 2-2h3c2 0 2 0 2 2v17c0 2 0 2-2 2h-3c-2 0-2 0-2-2z' : 'M1 3s0-2 2-2 12.2 7 15 8.9c2.7 2 2.7 3.2 0 5.2-2.8 1.9-13 8.9-15 8.9s-2-2-2-2z'
		})))
	}
}
class Ch extends x {
	render() {
		const {
			onClick: t,
			pressed: e,
			title: n,
			titlePressed: s,
			name: i,
			instrumentId: a
		}
			= this.props,
			o = 'mixer-title-id';
		return v('button', {
			className: e ? id.active : id.button,
			onClick: t,
			id: 'control-mixer',
			'aria-haspopup': !0,
			'aria-pressed': e
		}, v('svg', {
			className: id.icon,
			width: 55,
			height: 55,
			viewBox: '-4 -4 55 55',
			role: 'img',
			'aria-labelledby': o
		}, v('title', {
			id: o
		}, e && s ? s : n), v('circle', {
			className: id.arrow,
			cx: '7',
			cy: '39',
			r: '6'
		}), v('circle', {
			className: id.circle,
			cx: '22.5',
			cy: '22.5',
			r: '22.5',
			filter: 'url(#svg_shadow)'
		}), v(vh, {
			className: id.shape,
			instrumentId: a,
			name: i,
			transform: 'translate(9 9)'
		})))
	}
}
function _h() {
	return v('svg', {
		width: 54,
		height: 54,
		viewBox: '0 0 54 54'
	}, v('path', {
		d: 'M8 0h38a8 8 0 0 1 8 8v38a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z',
		fill: '#F1452D'
	}), v('path', {
		d: 'M23.5 31V12a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3zM23.5 42v-2a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3z',
		fill: '#FDE3DF'
	}))
}
function Eh(t, e) {
	return t ? 'oo2w1 hfxd hf8r' : e ? 'oo2w1 hfxd hf1si' : 'oo2w1 hfxd hf19b'
}
function Nh({
	title: t,
	left: e,
	horizontal: n
}) {
	const {
		dispatch: s
	}
		= On(),
		i = A((() => {
			s('layer/hide')
		}), [
			s
		]);
	return v('div', {
		className: Eh(n, e),
		role: 'dialog'
	}, v('div', {
		className: 'hf1j4',
		'aria-label': `${t} mode has no effect`,
		onClick: i
	}, v('span', {
		className: 'hfhd hf1qv'
	}, v(_h, null)), v('div', {
		className: 'hf2wq'
	}, 'This song has only one', v('br', null), `instrument track. ${t}`, v('br', null), 'mode has no effect.')))
}
const Lh = (t, ...e) => v('svg', t, v('defs', null, v('filter', {
	id: 'drawing-glow'
}, v('feGaussianBlur', {
	stdDeviation: 0.7,
	result: 'coloredBlur'
}), v('feMerge', null, v('feMergeNode', {
	in: 'coloredBlur'
}), v('feMergeNode', {
	in: 'coloredBlur'
}), v('feMergeNode', {
	in: 'SourceGraphic'
})))), ...e);
function Th() {
	const {
		drawing: t,
		device: e,
		user: n,
		dispatch: s
	}
		= On('drawing', 'user', 'device'),
		i = 'pen' === t.tool ? 'x314w x32s2' : 'x314w x32s2 x31gc',
		a = A((() => {
			'pen' !== t.tool && s('drawing/switchTool', 'pen')
		}), [
			t.tool
		]),
		o = 'eraser' === t.tool ? 'x314w x3jb' : 'x314w x3jb x32qr',
		r = A((() => {
			'eraser' !== t.tool && s('drawing/switchTool', 'eraser')
		}), [
			t.tool
		]);
	let l = v('div', {
		className: 'x3231 x31d2'
	});
	'saving' === t.status || 'changed' === t.status ? l = v('div', {
		className: 'x3231 x3a8'
	}, 'Saving...') : 'saved' === t.status && (l = v('div', {
		className: 'x3231 x34f'
	}, 'All saved'));
	const c = A((() => {
		s('curiosity/event', {
			event: 'Clicked a markup popup link',
			Action: 'SignUp'
		})
	}), [
	]),
		u = A((() => {
			s('curiosity/event', {
				event: 'Clicked a markup popup link',
				Action: 'SignIn'
			})
		}), [
		]),
		d = wc(e);
	return v('div', {
		className: d ? 'x3nw x3ll' : 'x3nw x39p'
	}, v('div', {
		className: 'x3240'
	}, n.isLoggedIn && l, v('div', {
		className: 'x311g'
	}, v('button', {
		className: i,
		title: 'Pen',
		onClick: a
	}, Lh({
		width: 25,
		height: 25,
		viewBox: '0 0 20 20'
	}, v('path', {
		d: od
	}))), v('button', {
		className: o,
		title: 'Eraser',
		onclick: r
	}, Lh({
		width: 26,
		height: 25
	}, v('rect', {
		x: 1,
		y: 22,
		width: 11,
		height: 2,
		rx: 1
	}), v('rect', {
		x: 13,
		y: 22,
		width: 3,
		height: 2,
		rx: 1
	}), v('rect', {
		x: 18,
		y: 22,
		width: 3,
		height: 2,
		rx: 1
	}), v('rect', {
		x: 23,
		y: 22,
		width: 3,
		height: 2,
		rx: 1
	}), v('rect', {
		className: 'x323y',
		x: 15,
		y: 2,
		width: 11,
		height: 19,
		rx: 1,
		transform: 'rotate(44.58 14.967 2.377)',
		fill: 'none'
	}), v('path', {
		d: 'M15 3a482.37 482.37 0 00-7.12 6.74l7.5 7.5 6.62-7.24-7-7z'
	})))), !n.isLoggedIn && v('p', {
		className: 'x3p4'
	}, v(Qo, {
		href: '/a/wa/signup',
		onClick: c
	}, 'SignUp'), ' or ', v(Qo, {
		href: '/a/wa/signin',
		onClick: u
	}, 'SignIn'), ' to save markups.')), d ? v('div', {
		className: 'x3al'
	}, v('img', {
		className: 'x32zh',
		width: 34,
		height: 36,
		src: '/static/media/rotate.56a92ddb.svg',
		alt: 'Rotation'
	}), v('p', null, 'Rotate your screen to start markups')) : v('div', {
		className: 'x3al'
	}, v('img', {
		className: 'x316p',
		width: 46,
		height: 28,
		src: '/static/media/widen.35f5e17c.svg',
		alt: 'Wide screen'
	}), v('p', null, 'Widen your screen to start markups')))
}
function Ih(t, e) {
	const n = Math.round(e.bpm * t / 12),
		s = Math.round(100 * t / 12);
	return {
		tempo: Object.assign({
		}, e, {
			bpm: n
		}),
		speed: s,
		position: Ph(s)
	}
}
function Ah(t, e) {
	return Object.assign({
	}, e, {
		bpm: Math.round(e.bpm * t / 100)
	})
}
function Ph(t) {
	return + (100 * (function (t) {
		return Math.round(t / 100 * 12) / 12 * 100
	}(t) - 25) / 150).toFixed(6)
}
var Mh = Rn(class extends x {
	constructor(t) {
		super(t),
			this.hidePopup = t => {
				t.preventDefault(),
					this.props.dispatch('layer/hide')
			},
			this.getPageCoordinates = () => {
				const {
					body: t,
					documentElement: e
				}
					= document,
					n = this.ruler;
				if (n && t && e) {
					const s = n.getBoundingClientRect();
					return {
						rulerX: s.left + t.scrollLeft + e.scrollLeft,
						rulerY: s.top + t.scrollTop + e.scrollTop,
						rulerW: s.width
					}
				}
				throw new Error('Wrong Usage')
			},
			this.onResize = Ii((() => this.setState(this.getPageCoordinates)), 250),
			this.handleFaster = t => {
				t.preventDefault(),
					this.setState((t => function (t, e, n, s) {
						const i = Math.round(t / 100 * 12);
						return i >= 21 ? {
							tempo: e,
							speed: t,
							position: n
						}
							: Ih(i + 1, s)
					}(t.speed, t.tempo, t.position, this.props.player.tempo)), (() => {
						this.dispatchSpeed(this.state.speed)
					}))
			},
			this.handleSlower = t => {
				t.preventDefault(),
					this.setState((t => function (t, e, n, s) {
						const i = Math.round(t / 100 * 12);
						return i <= 3 ? {
							tempo: e,
							speed: t,
							position: n
						}
							: Ih(i - 1, s)
					}(t.speed, t.tempo, t.position, this.props.player.tempo)), (() => {
						this.dispatchSpeed(this.state.speed)
					}))
			},
			this.dispatchSpeed = t => {
				zi(this.props.store, t)
			},
			this.onTouchStart = t => {
				const e = this.getTouchPoint(t);
				if (this.lastTouch = e, t.preventDefault(), !this.onTouchMoveTickId) {
					const t = window.requestAnimationFrame;
					this.onTouchMoveTickId = t(this.onTouchMoveTick)
				}
				document.addEventListener('touchmove', this.onTouchMove, window.PASSIVE),
					document.addEventListener('mousemove', this.onTouchMove),
					document.addEventListener('touchend', this.onTouchEnd),
					document.addEventListener('mouseup', this.onTouchEnd)
			},
			this.onTouchMove = t => {
				t.preventDefault(),
					t.stopPropagation(),
					this.lastTouch = this.getTouchPoint(t)
			},
			this.onTouchMoveTick = () => {
				const t = this.lastTouch;
				if (t) {
					const e = this.getNewPosition(t);
					this.state.tempo.bpm === e.tempo.bpm && this.state.tempo.type === e.tempo.type && this.state.speed === e.speed && this.state.position === e.position || this.setState(e),
						this.lastTouch = null
				}
				const e = window.requestAnimationFrame;
				this.onTouchMoveTickId = e(this.onTouchMoveTick)
			},
			this.onTouchEnd = t => {
				document.removeEventListener('touchmove', this.onTouchMove),
					document.removeEventListener('mousemove', this.onTouchMove),
					document.removeEventListener('touchend', this.onTouchEnd),
					document.removeEventListener('mouseup', this.onTouchEnd),
					this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId),
					this.onTouchMoveTickId = void 0;
				let e = this.state.speed;
				const n = this.lastTouch;
				if (n) {
					const t = this.getNewPosition(n);
					this.setState(t),
						e = t.speed
				}
				this.dispatchSpeed(e)
			},
			this.refWrap = t => {
				this.wrap = t
			},
			this.refRuler = t => {
				this.ruler = t
			},
			this.changeBpmState = t => {
				this.setState((e => function (t, e, n, s, i) {
					const a = e.bpm + i,
						o = + (100 * a / s.bpm).toFixed(2),
						r = Math.round(o);
					return r < 25 || r > 175 ? {
						tempo: e,
						speed: t,
						position: n
					}
						: {
							tempo: Object.assign({
							}, s, {
								bpm: a
							}),
							speed: o,
							position: Ph(o)
						}
				}(e.speed, e.tempo, e.position, this.props.player.tempo, t)), (() => {
					this.dispatchSpeed(this.state.speed)
				}))
			},
			this.bpmPlus = () => {
				this.changeBpmState(1)
			},
			this.bpmPlusKeyPress = t => {
				13 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.changeBpmState(1))
			},
			this.bpmMinus = () => {
				this.changeBpmState(- 1)
			},
			this.bpmMinusPress = t => {
				13 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.changeBpmState(- 1))
			};
		const e = t.player.speed,
			n = Ah(e, t.player.tempo);
		this.state = {
			speed: e,
			tempo: n,
			position: Ph(e),
			active: !1,
			deltaLeftX: 0,
			deltaRightX: 0,
			rulerX: null,
			rulerY: null,
			rulerW: null,
			mirrorSpeed: 0,
			mirrorTempo: 0
		},
			this.lastTouch = null,
			this.keyMap = {
				enter: this.hidePopup,
				left: this.handleSlower,
				down: this.handleSlower,
				up: this.handleFaster,
				right: this.handleFaster,
				'+': this.bpmPlus,
				'-': this.bpmMinus
			},
			this.onTouchMoveTickId = void 0
	}
	static getDerivedStateFromProps(t, e) {
		if (e.mirrorSpeed !== t.player.speed || e.mirrorTempo !== t.player.tempo) {
			const e = t.player.speed;
			return {
				speed: e,
				tempo: Ah(e, t.player.tempo),
				position: Ph(e),
				mirrorSpeed: t.player.speed,
				mirrorTempo: t.player.tempo
			}
		}
		return null
	}
	componentDidMount() {
		const t = this.wrap;
		t && (t.addEventListener('touchstart', this.onTouchStart, window.PASSIVE), t.addEventListener('mousedown', this.onTouchStart)),
			window.addEventListener('resize', this.onResize),
			window.hotKeysManager.bind(this.keyMap, {
				onPopup: !0
			})
	}
	componentWillUnmount() {
		window.hotKeysManager.unbind(this.keyMap, {
			onPopup: !0
		});
		const t = this.wrap;
		t && (t.removeEventListener('touchstart', this.onTouchStart), t.removeEventListener('mousedown', this.onTouchStart)),
			document.removeEventListener('touchmove', this.onTouchMove),
			document.removeEventListener('mousemove', this.onTouchMove),
			document.removeEventListener('touchend', this.onTouchEnd),
			document.removeEventListener('mouseup', this.onTouchEnd),
			window.removeEventListener('resize', this.onResize),
			this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId)
	}
	getNewPosition(t) {
		var e,
			n,
			s;
		return e = 100 * t.x / t.w,
			n = Math.round(150 * e / 100 + 25),
			s = this.props.player.tempo,
			Ih(Math.round(n / 100 * 12), s)
	}
	getTouchPoint(t) {
		let {
			rulerX: e,
			rulerY: n,
			rulerW: s
		}
			= this.state;
		if (null === e || null === n || null === s) {
			const t = this.getPageCoordinates();
			this.setState(t),
				e = t.rulerX,
				n = t.rulerY,
				s = t.rulerW
		}
		const i = t.changedTouches ? t.changedTouches[0] : t;
		return {
			x: Math.max(Math.min(i.pageX - e, s), 0),
			w: s,
			y: i.pageY - n
		}
	}
	render() {
		const t = 100 === this.state.speed ? 'c72sg c7pt' : 'c72sg',
			e = 100 === this.state.speed ? 'c71yw c71cf' : 'c71yw';
		return v('div', {
			className: 'c72a8',
			role: 'dialog',
			'aria-label': 'Speed'
		}, v('div', {
			className: e
		}, v('button', {
			onClick: this.bpmMinus,
			onKeyDown: this.bpmMinusPress
		}, v('svg', {
			width: 12,
			height: 12,
			viewBox: '0 0 12 2'
		}, v('rect', {
			y: '2',
			width: '2',
			height: '12',
			transform: 'rotate(-90 0 2)'
		}))), v('span', {
			'aria-label': 'Tempo'
		}, this.state.tempo.bpm, ' bpm'), v('button', {
			onClick: this.bpmPlus,
			onKeyDown: this.bpmPlusKeyPress
		}, v('svg', {
			width: 12,
			height: 12,
			viewBox: '0 0 12 12'
		}, v('rect', {
			x: '5',
			width: '2',
			height: '12'
		}), v('rect', {
			y: '7',
			width: '2',
			height: '12',
			transform: 'rotate(-90 0 7)'
		})))), v('div', {
			className: 'c7xa',
			title: 'You can use arrow keys',
			ref: this.refWrap
		}, v('label', {
			className: 'c7295 c77r'
		}, v('span', null, '25%')), v('label', {
			className: 'c7295 c72fh'
		}, v('span', null, '50%')), v('label', {
			className: 'c7295 c71fc'
		}, v('span', null, '75%')), v('label', {
			className: 'c7295 c7264'
		}, v('span', null, '100%')), v('label', {
			className: 'c7295 c7ru'
		}, v('span', null, '125%')), v('label', {
			className: 'c7295 c71cp'
		}, v('span', null, '150%')), v('label', {
			className: 'c7295 c7f1'
		}, v('span', null, '175%')), v('div', {
			className: 'c7344',
			ref: this.refRuler
		}, v('div', {
			className: 'c7268',
			style: {
				left: this.state.position + '%'
			},
			role: 'slider',
			'aria-valuenow': this.state.speed,
			'aria-valuemin': 25,
			'aria-valuemax': 175,
			'aria-valuetext': this.state.tempo.bpm + ' bpm'
		}, v('div', {
			className: t
		})))))
	}
}, 'player');
const Bh = {
	animationStyles: vd
};
class Dh extends x {
	render() {
		const {
			device: t
		}
			= this.props,
			e = 'mixer' === this.props.layer,
			n = 'plus_speed' === this.props.layer,
			s = 'speed' === this.props.layer,
			i = 'plus_solo' === this.props.layer,
			a = 'solo_single' === this.props.layer,
			o = 'plus_mute' === this.props.layer,
			r = 'plus_loop' === this.props.layer,
			l = 'plus_print' === this.props.layer,
			c = 'help_notation' === this.props.layer,
			u = this.props.fingeringActive && !this.props.fingeringDisabled,
			d = 'drawing' === this.props.layer,
			h = Zo(t.os) || Jo(t.os),
			p = 'solo' === this.props.type,
			f = 'mute' === this.props.type,
			m = this.props.loop,
			g = this.props.isCountin,
			{
				plusAccess: y
			}
				= this.props,
			w = !y;
		return v('aside', {
			className: 'Cs717g',
			'aria-controls': 'tablature',
			id: 'controls'
		}, v('div', {
			className: 'Cs71cc'
		}), v('div', {
			className: 'Cs72lw'
		}, v('div', {
			className: 'Cs7sn'
		}, v(kh, {
			shouldPlay: this.props.shouldPlay,
			canPlay: this.props.canPlay,
			onClick: this.props.handlePlay,
			title: 'Play (Space)',
			titlePressed: 'Pause (Space)'
		})), v('div', {
			className: 'Cs7sn',
			id: 'mixer-button'
		}, v(Ch, {
			pressed: e,
			onClick: this.props.handleMixer,
			title: 'Show tracks (T)',
			titlePressed: 'Hide tracks (T)',
			instrumentId: this.props.track ? this.props.track.instrumentId : 31,
			name: this.props.track ? this.props.track.name : ''
		}), v(Un, null, e && v(Gn, Bh, v(Sh, null)))), v('div', {
			className: 'Cs7sn'
		}, v(ld, {
			icon: 'speed',
			text: `${Math.round(this.props.speed)}%`,
			pressed: s,
			onClick: this.props.handleSpeed,
			title: 'Change playback speed (S)',
			hasPopup: !0
		}), v(Un, null, n && v(Gn, Object.assign({
		}, Bh, {
			key: 'popup'
		}), h ? v(lr, {
			title: 'Tempo Control',
			device: t,
			horizontal: !0
		}) : v(ir, {
			title: 'Tempo Control',
			horizontal: !0,
			classPrefix: 'speed'
		})), s && v(Gn, Object.assign({
		}, Bh, {
			key: 'layer'
		}), v(Mh, null)))), v('div', {
			className: 'Cs7sn'
		}, v(ld, {
			icon: 'solo',
			pressed: p,
			onClick: this.props.handleSolo,
			title: 'Play current track solo (F)',
			titlePressed: 'Play focus mix of all tracks (F)',
			hasPopup: w
		}), v(Un, null, i && v(Gn, Bh, h ? v(lr, {
			title: 'Solo Mode',
			device: t,
			horizontal: !0
		}) : v(ir, {
			title: 'Solo Mode',
			horizontal: !0,
			classPrefix: 'solo'
		})), a && v(Gn, Bh, v(Nh, {
			title: 'Solo',
			horizontal: !0
		})))), v('div', {
			className: 'Cs7sn'
		}, v(ld, {
			icon: 'mute',
			pressed: f,
			onClick: this.props.handleMute,
			title: 'Mute current track (M)',
			titlePressed: 'Unmute current track (M)',
			hasPopup: w
		}), v(Un, null, o && v(Gn, Bh, v(ir, {
			title: 'Mute Mode',
			horizontal: !0,
			classPrefix: 'mute'
		})))), v('div', {
			className: 'Cs7sn'
		}, v(ld, {
			icon: 'loop',
			pressed: m,
			onClick: this.props.handleLoop,
			title: 'Turn loop mode on (L)',
			titlePressed: 'Turn loop mode off (L)',
			hasPopup: w
		}), v(Un, null, r && v(Gn, Bh, h ? v(lr, {
			title: 'Loop Mode',
			device: t,
			horizontal: !0
		}) : v(ir, {
			title: 'Loop Mode',
			horizontal: !0,
			classPrefix: 'loop'
		})))), this.props.drawingEnabled && v('div', {
			className: 'Cs7sn'
		}, v(ld, {
			icon: 'pen',
			pressed: d,
			onClick: this.props.handleDrawing,
			title: 'Show markup panel (U)',
			titlePressed: 'Hide markup panel (U)'
		}), v(Un, null, d && v(Gn, Bh, v(Th, null)))), v('div', {
			className: 'Cs7sn'
		}, v(ld, {
			icon: 'countin',
			pressed: g,
			onClick: this.props.handleCountin,
			title: 'Turn count-in mode on (C)',
			titlePressed: 'Turn count-in mode off (C)'
		})), v('div', {
			className: 'Cs7sn'
		}, v(ld, {
			icon: 'print',
			onClick: this.props.handlePrint,
			title: 'Print (P)'
		}), v(Un, null, l && v(Gn, Bh, v(ir, {
			title: 'Printing',
			horizontal: !0,
			classPrefix: 'print'
		})))), !this.props.fingeringDisabled && v('div', {
			className: 'Cs7sn'
		}, v(ld, {
			icon: 'fingering',
			pressed: this.props.fingeringActive,
			onClick: this.props.handleFingering,
			title: 'Turn fingering on',
			titlePressed: 'Turn fingering off'
		}), v(Un, null, u && v(Gn, Bh, v(fd, null)))), v('div', {
			className: 'Cs715d'
		}, v('div', {
			className: this.props.usedDrums ? 'Cs7sn Cs72iy' : 'Cs7sn Cs72iy Cs714e'
		}, v(ld, {
			icon: 'help',
			pressed: c,
			onClick: this.props.handleNotation,
			title: 'Show drum notation',
			titlePressed: 'Hide drum notation'
		}), this.props.usedDrums && v(Cd, {
			usedDrums: this.props.usedDrums,
			horizontal: !0
		})))))
	}
}
const Oh = {
	animationStyles: {
		exitActive: 'hd33v',
		enterActive: 'hd10c',
		enter: 'hd1ve',
		exit: 'hd138'
	}
};
class Rh extends x {
	render() {
		const {
			device: t
		}
			= this.props,
			e = 'plus_speed' === this.props.layer,
			n = 'plus_solo' === this.props.layer,
			s = 'solo_single' === this.props.layer,
			i = 'plus_loop' === this.props.layer,
			{
				shouldPlay: a,
				canPlay: o
			}
				= this.props,
			r = 'solo' === this.props.type,
			l = 100 !== this.props.speed,
			c = this.props.loop,
			u = this.props.isCountin,
			d = !this.props.plusAccess,
			h = Zo(t.os) || Jo(t.os);
		return v('footer', {
			className: 'x72sw',
			'aria-controls': 'tablature'
		}, v('div', {
			className: 'x728w',
			id: 'alt-controls'
		}, v(kh, {
			shouldPlay: a,
			canPlay: o,
			onClick: this.props.handlePlay,
			title: 'Play'
		})), v('div', {
			className: 'x7x',
			id: 'mobile-controls'
		}, v('div', {
			className: 'x72iz'
		}, v(ld, {
			footer: !0,
			icon: 'countin',
			pressed: u,
			onClick: this.props.handleCountin,
			title: 'Turn count-in mode on (C)',
			titlePressed: 'Turn count-in mode off (C)'
		})), v('div', {
			className: 'x72iz'
		}, v(ld, {
			footer: !0,
			icon: 'loop',
			pressed: c,
			onClick: this.props.handleLoop,
			title: 'Turn loop mode on',
			titlePressed: 'Turn loop mode off',
			hasPopup: d
		}), v(Un, null, i && v(Gn, Oh, h ? v(lr, {
			title: 'Loop Mode',
			device: t,
			left: !0
		}) : v(ir, {
			title: 'Loop Mode',
			left: !0
		})))), v('div', {
			className: 'x72iz'
		}, v(kh, {
			onClick: this.props.handlePlay,
			title: 'Play',
			titlePressed: 'Pause',
			footer: !0,
			shouldPlay: a,
			canPlay: o
		})), v('div', {
			className: 'x72iz'
		}, v(ld, {
			footer: !0,
			icon: 'speed',
			text: `${this.props.speed}%`,
			pressed: l,
			onClick: this.props.handleSpeed,
			title: 'Change playback speed',
			hasPopup: d
		}), v(Un, null, e && v(Gn, Oh, h ? v(lr, {
			title: 'Tempo Control',
			device: t
		}) : v(ir, {
			title: 'Tempo Control'
		})))), v('div', {
			className: 'x72iz'
		}, v(ld, {
			footer: !0,
			icon: 'solo',
			pressed: r,
			onClick: this.props.handleSolo,
			title: 'Play the current track solo',
			titlePressed: 'Play the focus mix of all tracks',
			hasPopup: d
		}), v(Un, null, n && v(Gn, Oh, h ? v(lr, {
			title: 'Solo Mode',
			device: t
		}) : v(ir, {
			title: 'Solo Mode'
		})), s && v(Gn, Oh, v(Nh, {
			title: 'Solo'
		}))))))
	}
}
function jh({
	styles: {
		icon: t,
		stroke: e
	}
}) {
	return v('svg', {
		width: 27,
		height: 25,
		viewBox: '0 0 27 25',
		className: t
	}, v('path', {
		d: 'M0 5h27M0 12h27M0 19h27',
		className: e,
		'stroke-width': 2
	}))
}
function $h({
	up: t,
	styles: {
		icon: e,
		stroke: n
	}
}) {
	return v('svg', {
		width: 14,
		height: 12,
		viewBox: '0 0 26 17',
		className: e
	}, v('path', {
		d: t ? 'M3 14L13 4l10 10' : 'M3 4l10 10L23 4',
		className: n,
		'stroke-width': 4,
		'stroke-linecap': 'square'
	}))
}
function Fh({
	width: t,
	height: e,
	styles: {
		icon: n,
		stroke: s
	}
}) {
	return v('svg', {
		width: t || 29,
		height: e || 27,
		viewBox: '0 0 1000 820',
		className: n,
		'aria-labelledby': 'title-faq'
	}, v('title', {
		id: 'title-faq'
	}, 'Frequently Asked Questions'), v('path', {
		d: 'M 74 109.4 C 74 109.4 89.9 75 109.4 75 L 890.6 75 C 910.1 75 925 89.9 925 109.4 L 925 594.3 C 925 613.8 910.1 625 890.6 625 L 640 625 C 585 625 530 700 500 733 C 470 700 415 625 360 625 L 109.4 625 C 89.9 625 74.1 613.8 74.1 594.3 L 75 109.4 L 74 109.4 Z M 109.4 0 C 49 0 0 49 0 109.4 L 0 594.3 C 0 654.7 49.7 700 110.1 700 L 356 700 C 390 700 451.2 814.8 500 814.8 C 548.8 814.8 610 700 644 700 L 890.4 700 C 950.8 700 1000 654.7 1000 594.3 L 1000 109.4 C 1000 49 951 0 890.6 0 L 109.4 0 Z M 821.5 443.8 L 851.5 474.5 L 819.1 507.1 L 785.1 472.8 C 767.8 483.8 747.8 487.1 727.5 487.1 C 657.8 487.1 610.5 437.1 610.5 363.1 C 610.5 290.1 661.5 237.8 732.5 237.8 C 800.5 237.8 850.1 289.8 850.1 360.5 C 850.1 395.1 839.5 426.8 821.5 443.8 Z M 752.5 374.1 L 772.5 394.8 C 776.8 385.8 777.5 372.5 777.5 362.1 C 777.5 319.8 760.8 296.5 730.8 296.5 C 701.1 296.5 683.8 320.8 683.8 362.8 C 683.8 402.8 701.8 429.8 728.8 429.8 C 734.1 429.8 737.1 429.1 741.5 426.8 L 720.1 406.1 L 752.5 374.1 Z M 368.9 244.1 L 185.2 244.1 L 185.2 481.5 L 257.9 481.5 L 257.9 396.1 L 353.5 396.1 L 353.5 340.1 L 257.9 340.1 L 257.9 303.8 L 368.9 303.8 L 368.9 244.1 Z M 513.9 244.1 L 441.9 244.1 L 354.3 481.5 L 427.9 481.5 L 439.6 447.8 L 515.9 447.8 L 527.6 481.5 L 601.3 481.5 L 513.9 244.1 Z M 499.9 396.8 L 455.3 396.8 C 463.3 372.8 474.3 336.5 478.3 320.1 C 478.3 320.1 495.6 383.1 499.9 396.8 Z'
	}))
}
var Hh = {
	header: 'C363k',
	wrapper: 'C361vt',
	stroke: 'C3624f',
	burger: 'C3634',
	help: 'C361w0',
	mixer: 'C36ua',
	instrument: 'C3633g',
	img: 'C36o6',
	title: 'C36102',
	icon: 'C362np'
};
const zh = {
	animationStyles: Jc
};
function qh(t) {
	const {
		search: e,
		popular: n
	}
		= On('search', 'popular'),
		s = 'mixer' === t.layer,
		{
			track: i
		}
			= t,
		a = i ? i.instrument : 'Instrument';
	return v('header', {
		className: Hh.header,
		'aria-controls': 'tablature'
	}, v('div', {
		className: Hh.wrapper
	}, v(Qo, {
		to: `/${Zd(e, n)}`,
		className: Hh.burger,
		title: 'Search',
		id: 'burger'
	}, v(jh, {
		styles: Hh
	})), v('button', {
		className: Hh.mixer,
		onClick: t.handleMixer,
		role: 'button',
		id: 'control-mixer',
		title: s ? 'Hide tracks' : 'Show tracks',
		'aria-haspopup': !0,
		'aria-pressed': s
	}, v('div', {
		className: Hh.title
	}, a, v($h, {
		up: s,
		styles: Hh
	}))), v(Qo, {
		to: '/a/wa/help',
		className: Hh.help,
		title: 'Help'
	}, v(Fh, {
		width: 27,
		height: 25,
		styles: Hh
	}))), v(Un, null, s && v(Gn, zh, v(Sh, null))))
}
function Uh(t, e, n, s) {
	const i = t.length,
		a = Math.ceil(i * n / e),
		o = Math.ceil((i * n + s * a) / e);
	if (1 === o) return [t];
	const r = (e - s) / n,
		l = [
			0
		],
		c = [
		];
	for (let e = 0; e < o; e++) {
		let n = t.substr(l[e], r).trim().lastIndexOf(' ');
		- 1 === n && (n = t.substr(l[e]).length),
			l.push(n + l[e]),
			c.push(t.substr(l[e], n))
	}
	return c
}
function Wh({
	level: t,
	title: e,
	action: n,
	reason: s
}) {
	const {
		screen: i,
		device: a
	}
		= On('screen', 'device');
	if (Pn) {
		const {
			dispatch: t
		}
			= On();
		y((() => t('curiosity/event', {
			event: 'Alert',
			Reason: s
		})), [
		])
	}
	const o = function (t) {
		switch (t) {
			case 'error':
				return 'Ce123t Ce11ar';
			case 'notice':
				return 'Ce123t Ce1285';
			default:
				return 'Ce123t Ce128'
		}
	}(t),
		r = a.isPhone ? 0 : 190,
		l = i.viewport.width - r,
		c = Uh(e, l, 9, 10),
		u = Uh(n, l, 7, 10),
		d = 'undefined' == typeof btoa ? t => Buffer.from(t, 'binary').toString('base64') : btoa;
	return v('section', {
		className: o,
		role: 'alert'
	}, c.map((t => v('img', {
		height: 31,
		'aria-label': 'title',
		alt: e,
		src: 'data:image/svg+xml;base64,' + d(`<svg xmlns='http://www.w3.org/2000/svg' width='${9 * t.length + 10}' height='31'>
			<text x='50%' y='50%' font-family='"songsterr-condensed", sans-serif-condensed, Arial, sans-serif' font-weight='400' letter-spacing='-0.6px' font-size='20px' fill='#fff' dominant-baseline='middle' text-anchor='middle'>${t}</text>
		  </svg>`)
	}))), n && u.map((t => v('img', {
		height: 22,
		'aria-label': 'action',
		alt: n,
		src: 'data:image/svg+xml;base64,' + d(`<svg xmlns='http://www.w3.org/2000/svg' width='${7 * t.length + 10}' height='22'>
			<text x='50%' y='50%' font-family='"songsterr", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' font-size='14px' fill='#fff' dominant-baseline='middle' text-anchor='middle'>${t}</text>
		  </svg>`)
	}))))
}
class Vh extends x {
	render() {
		return v('svg', {
			width: 112,
			height: 112,
			viewBox: '0 0 112 112'
		}, v('g', {
			fill: 'none',
			fillRule: 'evenodd',
			stroke: '#FD651A',
			'stroke-width': '11',
			transform: 'translate(6 6)'
		}, v('circle', {
			cx: 50,
			cy: 50,
			r: 50
		}), v('path', {
			d: 'M16.5 84.5l68-69',
			'stroke-linecap': 'square'
		})))
	}
}
function Gh() {
	return v(Wh, {
		level: 'notice',
		title: 'Sorry this content has been removed in your country at the request of the underlying music publisher.',
		action: 'We will work hard to license this content and make sure music creators get paid, which is our philosophy at Songsterr. In the meantime if you would like to provide us a comment we could share with the publisher, please do so.',
		reason: 'license'
	}, v(Vh, null))
}
var Xh = {
	item: 'Beifj',
	wrapper: 'Bei2e1',
	numerated: 'Beifj Bei2fq',
	name: 'Beiqi',
	artist: 'Bei15k',
	favorite: 'Beifj Bei2e9',
	active: 'Bei168',
	removal: 'Bei2ts',
	controls: 'Bei5d',
	buttons: 'Bei20c',
	cancel: 'Cpb24q Cpb2j Cpb24q Cpb13f Bei2zx',
	remove: 'Cpb24q Cpb2uv Cpb24q Cpb13f Bei2du',
	fav: 'Bei275',
	icon: 'Bei1yt'
};
const Yh = T((({
	song: t,
	isActive: e,
	numerated: n,
	difficultyNA: s = !1
}) => {
	let i = n ? Xh.numerated : Xh.item;
	e && (i += ' ' + Xh.active);
	const a = t.tracks && t.tracks[t.defaultTrack],
		o = a ? t.difficulty : null,
		r = yr(t, t.defaultTrack, void 0, a && a.instrumentId || void 0);
	return v(Qo, {
		className: i,
		'data-song': '',
		to: r
	}, v('div', {
		className: Xh.wrapper
	}, v('div', {
		className: Xh.name,
		'data-field': 'name'
	}, t.title), v('div', {
		className: Xh.artist,
		'data-field': 'artist'
	}, t.artist)), v(Dd, {
		'data-field': 'difficulty',
		difficultyString: o,
		difficultyNA: s,
		isNumerated: n || !1
	}))
}));
function Zh({
	width: t,
	height: e,
	styles: n,
	fill: s,
	onClick: i,
	role: a
}) {
	return v('svg', {
		width: t || 18,
		height: e || 18,
		viewBox: '0 0 18 18',
		fill: s,
		onClick: i,
		role: a,
		className: n.iconReset
	}, v('circle', {
		cx: 9,
		cy: 9,
		r: 8.15
	}), v('path', {
		d: 'M11.7 6.3l-5.4 5.4m5.4 0L6.3 6.3'
	}))
}
function Jh({
	width: t,
	height: e,
	styles: {
		icon: n
	}
}) {
	return v('svg', {
		width: t || 20,
		height: e || 20,
		viewBox: '0 0 20 20',
		className: n
	}, v('path', {
		d: 'M14.84 13.485a8.276 8.276 0 001.804-5.168C16.644 3.727 12.915 0 8.322 0 3.729 0 0 3.727 0 8.317s3.729 8.317 8.322 8.317a8.286 8.286 0 005.177-1.807l4.691 4.854a1.04 1.04 0 001.486.014l.018-.017a1.042 1.042 0 00-.012-1.488l-4.841-4.705zM1.85 8.317a6.473 6.473 0 0112.944 0 6.473 6.473 0 01-12.944 0z'
	}))
}
var Kh = {
	search: 'Cgl1ut',
	staticSearch: 'Cgl1ut Cgl2mk',
	field: 'Cgl126',
	iconReset: 'Cgl2ed',
	icon: 'Cgl35m'
};
function Qh({
	loading: t,
	className: e,
	placeholder: n,
	value: s,
	setValue: i,
	isDesktop: a,
	inputRef: o
}) {
	const r = a && Pn && - 1 === window.location.search.indexOf('l11_tracking=') && - 1 === window.location.href.indexOf('#');
	r && y((() => o.current.focus()), [
	]);
	const l = t ? v(Hc, {
		fill: '#777',
		width: 20,
		height: 20,
		className: 'Csr28t'
	}) : v(Jh, {
		width: 20,
		height: 20,
		styles: Kh
	});
	return v('div', {
		className: e || Kh.search
	}, l, v('input', {
		autofocus: r,
		className: Kh.field,
		'data-hotkey': !0,
		type: 'text',
		placeholder: n,
		value: s,
		ref: o,
		enterkeyhint: 'search',
		onInput: t => i(t.currentTarget.value),
		onKeyDown: t => 27 === t.keyCode && i('')
	}), s && v(Zh, {
		styles: Kh,
		onClick: () => {
			i(''),
				o.current.focus()
		},
		role: 'button'
	}))
}
var tp = {
	basepanel: 'Cdy7e',
	content: 'Cdy21j',
	panel: 'Cdy7e Cdydg',
	spacer: 'Cdyqt',
	title: 'Cdy1u3',
	subtitle: 'Cdy3t',
	section: 'Cdy2w8',
	form: 'Cdy2xy',
	actions: 'Cdypn'
},
	ep = {
		menu: 'oo22s',
		item: 'oocf',
		logo: 'oo24k',
		title: 'oo27r',
		icon: 'ooq4',
		stroke: 'ooe2'
	};
function np({
	width: t,
	height: e,
	styles: {
		icon: n
	}
}) {
	return v('svg', {
		width: t || 29,
		height: e || 27,
		viewBox: '0 0 29 27',
		className: n
	}, v('path', {
		d: 'M20.5 17.9l5.7 5.5a1.2 1.2 0 1 1-1.7 1.7L19 19.4a9.8 9.8 0 1 1 1.5-1.5zm-7.6 1.5a7.6 7.6 0 1 0 0-15.2 7.6 7.6 0 0 0 0 15.2z'
	}))
}
function sp({
	width: t,
	height: e,
	styles: {
		icon: n
	}
}) {
	return v('svg', {
		width: t || 28,
		height: e || 27,
		viewBox: '0 0 280 270',
		className: n,
		'aria-labelledby': 'title-account'
	}, v('title', {
		id: 'title-account'
	}, 'Account'), v('path', {
		d: 'M280 261c0-9-11-30-35-43-23-12-62-14-68-21-3-3-7-19 1-41 9-6 10-26 10-26s5 0 7-7c2-6 5-15 7-24 2-8-1-11-6-11-1 0 8-27 0-52-6-21-28-36-56-36S90 15 84 36c-8 25 1 52 0 52-5 0-8 3-6 11 2 9 5 18 7 24 2 7 7 7 7 7s1 20 10 26c8 22 4 38 1 41-6 7-45 9-68 21-24 13-35 34-35 43m0 0c0 8 14 11 17 6 4-10 16-27 27-32 29-15 67-15 75-23 7-7 7-49 5-53-3-8-9-17-9-31-7 1-8-3-11-15-4-19-2-19 1-20-6-20-8-38 0-54 9-19 25-19 35-19s26 0 35 19c8 16 6 34 0 54 3 1 5 1 1 20-3 12-4 16-11 15 0 14-6 23-9 31-2 4-2 46 5 53 8 8 46 8 75 23 11 5 23 22 27 32 3 5 17 2 17-6'
	}))
}
function ip({
	id: t,
	title: e,
	isLoggedIn: n
}) {
	const {
		search: s,
		popular: i,
		favorites: a
	}
		= On('search', 'popular', 'favorites'),
		o = {
			styles: ep
		},
		r = 'search' === t,
		l = n ? '/a/wa/account' : '/a/wa/signin?next=account';
	return v('nav', {
		className: ep.menu
	}, r ? v('span', {
		className: ep.logo
	}, v('img', {
		src: '/static/media/mobiletext.305d7d46.svg',
		width: 124,
		height: 48,
		alt: 'Songsterr'
	})) : v('h1', {
		className: ep.title
	}, e), v(Qo, {
		className: ep.item,
		href: l
	}, v(n ? sp : hu, o)), !r && v(Qo, {
		id: 'menu-search',
		className: ep.item,
		href: `/${Zd(s, i)}`
	}, v(np, o)), r && v(Qo, {
		id: 'menu-favorites',
		className: ep.item,
		href: `/a/wa/favorites${Zd(a, a)}`
	}, v(yu, o)))
}
const ap = new Map;
class op extends x {
	constructor() {
		super(...arguments),
			this.ref = I()
	}
	getListId() {
		const {
			id: t,
			panel: e,
			listId: n
		}
			= this.props;
		return `list-${e || t}-${n || '-'}`
	}
	componentDidMount() {
		const t = this.ref.current;
		if (t && 'function' == typeof t.scroll) {
			const e = ap.get(this.getListId());
			void 0 !== e && t.scroll(0, e || 0)
		}
	}
	componentWillUnmount() {
		const t = this.ref.current && this.ref.current.scrollTop || 0;
		ap.set(this.getListId(), t)
	}
	render() {
		const {
			screen: t,
			user: e
		}
			= On('screen', 'user'),
			{
				id: n,
				panel: s,
				title: i,
				onClick: a
			}
				= this.props,
			o = this.props.styles ? Object.assign({
			}, tp, this.props.styles) : tp,
			r = `panel-${s || n}`;
		return v('main', {
			className: o.panel,
			id: r,
			onClick: a,
			ref: this.ref
		}, v('div', {
			className: o.content
		}, t.isSmall ? v(ip, {
			id: n,
			title: i,
			isLoggedIn: e.isLoggedIn
		}) : v('h1', {
			className: o.title,
			id: 'top'
		}, i), v(S, null, this.props.children)))
	}
}
const rp = {
};
function lp(t, e) {
	t.onload = function () {
		this.onerror = this.onload = null,
			e(null, t)
	},
		t.onerror = function () {
			this.onerror = this.onload = null,
				e(new Error('Failed to load ' + this.src), t)
		}
}
function cp(t, e) {
	t.onreadystatechange = function () {
		'complete' !== this.readyState && 'loaded' !== this.readyState || (this.onreadystatechange = null, e(null, t))
	}
}
function up(t, e) {
	return rp[e] || (rp[e] = new Promise(((n, s) => {
		!function (t, e) {
			const n = document.head || document.getElementsByTagName('head')[0],
				s = document.createElement('script');
			s.async = !0,
				s.defer = !0,
				s.src = t,
				('onload' in s ? lp : cp)(s, e),
				s.onload || lp(s, e),
				n.appendChild(s)
		}(t, ((t, i) => {
			t ? (window[e] = !1, s(t)) : (window[e] = !0, n())
		}))
	}))),
		rp[e]
}
const dp = [
	'touchstart',
	'click',
	'scroll',
	'mousewheel',
	'mousemove',
	'mousedown'
],
	hp = t => t.replace(/["'=!+#*~;^()<>[\],&]/, '');
function pp({
	route: t,
	block: e,
	options: n,
	personalization: s,
	songId: i,
	artist: a,
	song: o
}) {
	if (t.page !== n.page) return void (console && console.log('notsy fire blocked', {
		block: e,
		songId: i
	}));
	const r = !s,
		l = [
		];
	n.isTargeted && (i && l.push(['songID',
		i]), a && l.push(['artist',
			a]), o && l.push(['song',
				o])),
		console && console.log('notsy fire success', {
			block: e,
			npa: r,
			targeting: l
		}),
		window.notsyInit({
			page: e,
			npa: r,
			targeting: l
		})
}
function fp(t, e) {
	if (!Pn) return;
	console && console.log('notsy use', t, e);
	const {
		dispatch: n,
		ads: s,
		consent: i,
		data: a,
		meta: o,
		route: r,
		isMetaLoading: l
	}
		= On('ads', 'consent', 'data', 'meta', 'route', 'isMetaLoading');
	if (s.notsyFailed) return;
	if (l) return;
	if (void 0 === i.profiling) return;
	if (2629 === o.songId) return;
	window.googlefc = void 0;
	const c = !!i.profiling,
		{
			songId: u,
			partId: d,
			revisionId: h
		}
			= a,
		p = hp(o.artist),
		f = hp(o.title),
		m = [
			u,
			d,
			h,
			p,
			f,
			c,
			r.page
		];
	if (s.notsyLoaded) y((() => n('notsy/fire', {
		route: r,
		block: t,
		songId: u,
		artist: p,
		song: f,
		options: e,
		personalization: c
	})), m);
	else {
		let s;
		const i = A((async () => {
			clearTimeout(s),
				dp.forEach((t => document.removeEventListener(t, i))),
				n('notsy/load', {
					route: r,
					block: t,
					songId: u,
					artist: p,
					song: f,
					options: e,
					personalization: c
				})
		}), m);
		y((() => (dp.forEach((t => document.addEventListener(t, i))), s = setTimeout((async () => {
			dp.forEach((t => document.removeEventListener(t, i))),
				n('notsy/load', {
					route: r,
					block: t,
					songId: u,
					artist: p,
					song: f,
					options: e,
					personalization: c
				})
		}), 5000), () => clearTimeout(s))), m)
	}
}
const mp = t => {
	!Pn && t.on('@init', (() => ({
		ads: {
			notsyLoaded: null,
			notsyFailed: null
		}
	}))),
		t.on('notsy/fire', (async (t, e) => pp(e))),
		t.on('notsy/load', ((e, n) => async function (t, e) {
			try {
				await async function () {
					return 'dev' === window.__STAGE__ ? null : Promise.all([up('https://www.googletagservices.com/tag/js/gpt.js', '__LOADED_GTP__'),
					up('https://cdn-b.notsy.io/sng/' + ('stage' === window.__STAGE__ ? 'alpha.js' : 'prebid.js'), '__LOADED_NOTSY__')])
				}(),
					pp(t),
					e('notsy/load:done', {
						loaded: window.__LOADED_NOTSY__
					})
			} catch (t) {
				e('notsy/load:error')
			}
		}(n, t.dispatch))),
		t.on('notsy/load:done', ((t, {
			loaded: e
		}) => ({
			ads: {
				notsyLoaded: e,
				notsyFailed: !e
			}
		}))),
		t.on('notsy/load:error', (() => ({
			ads: {
				notsyLoaded: !1,
				notsyFailed: !0
			}
		})))
};
const gp = T((({
	page: t
}) => {
	const {
		dispatch: e,
		ads: n
	}
		= On('ads'),
		s = A((() => {
			e('curiosity/setConversionProps', {
				'Last referring link': 'Panel Banner'
			})
		}), [
		]);
	return fp('search_panel', {
		isTargeted: !1,
		page: t
	}),
		v('div', {
			className: 'am1mp',
			id: 'showroom_sidebar'
		}, v('div', {
			className: 'B641uo am1rz',
			id: 'Redesign_ATF_tab_page_468x60'
		}, n.notsyFailed && v(Qo, {
			className: 'am1s2',
			to: '/a/wa/plus',
			onClick: s
		}, v('img', {
			src: '/static/media/plus-banner-sidebar.ec2eb1fd.svg',
			alt: 'Get Plus'
		}))))
}));
class yp extends x {
	render() {
		return v('svg', {
			width: 189,
			height: 100,
			viewBox: '0 0 189 100',
			fill: '#E03A3A'
		}, v('rect', {
			x: '90',
			width: '98',
			height: '4.1'
		}), v('rect', {
			x: '90',
			y: '24',
			width: '98',
			height: '4.1'
		}), v('rect', {
			x: '91',
			y: '48',
			width: '98',
			height: '4.1'
		}), v('rect', {
			x: '54.12',
			y: '47.15',
			width: '38.82',
			height: '4.1',
			transform: 'rotate(40.52 54.12 47.15)'
		}), v('rect', {
			x: '91',
			y: '72',
			width: '97',
			height: '4.1'
		}), v('rect', {
			y: '96',
			width: '188',
			height: '4.1'
		}), v('circle', {
			cx: '31',
			cy: '31',
			r: '29',
			stroke: '#E03A3A',
			'stroke-width': '4.1',
			fill: 'none'
		}))
	}
}
function vp({
	id: t,
	icon: e,
	header: n,
	headerColor: s,
	hint: i,
	children: a
}) {
	const o = 'red' === s ? 'Cjv34i Cjvnv' : 'Cjv34i';
	return v('div', {
		className: 'Cjvnd',
		'data-stub': t
	}, e(), v('div', {
		className: 'Cjv33n'
	}, v('div', {
		className: o
	}, n), i && v('div', {
		className: 'Cjv1ie',
		'aria-label': 'hint'
	}, i())), a)
}
const wp = () => ({
	search: {
		pattern: '',
		songs: [
		]
	}
}),
	bp = t => {
		!Pn && t.on('@init', wp),
			t.on('songs/search', ((t, {
				songs: e,
				pattern: n
			}) => ({
				search: {
					songs: e,
					pattern: n
				}
			}))),
			t.on('songs/reset', (t => {
				if (t.search.songs.length || t.search.pattern.length) return {
					search: {
						pattern: '',
						songs: [
						]
					}
				}
			}))
	},
	xp = {
		instrument: 'ALL INSTRUMENTS',
		difficulty: 'Any Difficulty',
		tunings: {
		}
	},
	Sp = [
		'ALL INSTRUMENTS',
		'GUITAR',
		'BASS',
		'DRUMS'
	],
	kp = [
		'Any Difficulty',
		'Beginner',
		'Intermediate',
		'Advanced'
	],
	Cp = t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
function _p(t) {
	const e = t.split(':');
	return {
		instrument: e[0],
		tuning: e[1]
	}
}
function Ep(t, e) {
	if ('ALL TUNINGS' === e) return t;
	const n = _p(e),
		s = n.tuning,
		i = n.instrument;
	return t.filter((t => function (t) {
		const e = t.tracks;
		if (e) for (let t = 0; t < e.length; t++) {
			const n = e[t];
			if (void 0 !== n.tuning && _o(n.tuning).join(',') === s) {
				if ('BASS' === i && ys(n.instrumentId)) return !0;
				if ('GUITAR' === i && gs(n.instrumentId)) return !0
			}
		}
		return !1
	}(t)))
}
function Np(t, e) {
	function n(t, e) {
		const n = t.tracks;
		if (n) for (let t = 0; t < n.length; t++) if (e(n[t].instrumentId)) return !0;
		return !1
	}
	return t.filter((t => {
		if ('BASS' === e) return n(t, ys);
		if ('DRUMS' === e) return n(t, ms);
		if ('GUITAR' === e) return n(t, gs);
		if ('ALL INSTRUMENTS' === e) return !0;
		throw new Error(`Invalid instrument filter value (${e})`)
	}))
}
function Lp(t, e, n) {
	return function (t, e) {
		return 'none' !== e ? t.slice().sort(((t, n) => {
			const s = Cu(t),
				i = Cu(n);
			let a = Id.VERY_EASY,
				o = Id.VERY_EASY;
			null !== s && (a = Id.forName(s)),
				null !== i && (o = Id.forName(i));
			const r = 'asc' === e ? Id.compare(a, o) : Id.compare(o, a);
			return 0 === r ? function (t, e) {
				const n = Pp(t),
					s = Pp(e);
				return n < s ? - 1 : n > s ? 1 : 0
			}(n, t) : r
		})) : t
	}(function (t, e) {
		if (t) return 'Any Difficulty' === e ? t.slice() : t.slice().filter((t => {
			if (!t.difficulty) return !1;
			const n = Id.forName(t.difficulty);
			if (null === n) return !1;
			if ('Beginner' === e) return Id.compare(n, Id.EASY) <= 0;
			if ('Intermediate' === e) {
				const t = Id.compare(n, Id.BELOW_INTERMEDIATE) >= 0,
					e = Id.compare(n, Id.HARD) < 0;
				return t && e
			}
			return 'Advanced' === e && Id.compare(n, Id.HARD) >= 0
		}))
	}(t, n), e)
}
function Tp(t, e) {
	return Object.assign({
	}, t, {
		difficulty: e
	})
}
function Ip(t, e) {
	return Object.assign({
	}, t, {
		instrument: e
	})
}
function Ap(t, e, n) {
	const s = Object.assign({
	}, t, {
		tunings: Object.assign({
		}, t.tunings)
	});
	return s.tunings[e] = n,
		s
}
function Pp(t) {
	return t.tracks ? 0 === t.tracks.length ? 0 : t.tracks[t.defaultTrack].views : 0
}
async function Mp(t, e, n) {
	try {
		if (t('songs/popular:loading'), n && n.aborted) return;
		const s = await async function (t = 200, e, n) {
			let s = `/api/songs?size=${t}`;
			const i = e && e.tuning,
				a = !i,
				o = 'popular_songs';
			if (i && (s += '&tuning=' + e.tuning.join(','), e && e.instrument && (s += '&inst=' + e.instrument.toLowerCase())), a) {
				const t = await Su(o);
				if (t) return t
			}
			const r = await fetch(s, {
				signal: n
			});
			if (n && n.aborted) return [];
			lc(r);
			const l = Nu(await r.json());
			return a && await ku(o, l),
				n && n.aborted ? [
				] : l
		}(200, e);
		if (n && n.aborted) return;
		t('songs/popular', {
			songs: s,
			filters: e
		})
	} catch (t) {
	}
}
const Bp = t => {
	!Pn && t.on('@init', (() => ({
		popular: {
			songs: [
			],
			defaultSongs: [
			],
			filters: xp,
			loading: !1
		}
	}))),
		t.on('songs/popular:loading', (t => ({
			popular: Object.assign({
			}, t.popular, {
				loading: !0
			})
		}))),
		t.on('songs/popular', ((t, {
			songs: e,
			filters: n
		}) => n && n.tuning ? {
			popular: Object.assign({
			}, t.popular, {
				songs: e,
				loading: !1
			})
		}
				: {
					popular: Object.assign({
					}, t.popular, {
						songs: e,
						defaultSongs: e,
						loading: !1
					})
				})),
		t.on('songs/filter/difficulty', ((t, e) => ({
			popular: Object.assign({
			}, t.popular, {
				filters: Tp(t.popular.filters, e)
			})
		}))),
		t.on('songs/filter/instrument', ((t, e) => ({
			popular: Object.assign({
			}, t.popular, {
				filters: Ip(t.popular.filters, e)
			})
		}))),
		t.on('songs/filter/tuning', ((t, {
			instrument: e,
			tuning: n
		}) => ({
			popular: Object.assign({
			}, t.popular, {
				filters: Ap(t.popular.filters, e, n)
			})
		}))),
		t.on('songs/filter/reset', (t => ({
			popular: Object.assign({
			}, t.popular, {
				filters: xp
			})
		})))
};
function Dp({
	styles: {
		icon: t,
		stroke: e
	}
}) {
	return v('svg', {
		width: 10,
		height: 6,
		viewBox: '0 1 10 6',
		className: t
	}, v('path', {
		d: 'M1 1l4 4 4-4',
		className: e
	}))
}
const Op = '15v-9c0-1.037-.429-3.811-.429-3.811.286-.214.286-1.138.286-1.32 0-.229-.25-.869-.857-.869s-.857.64-.857.869c0 .182 0 1.147.286 1.32 0 0-.429 2.819-.429 3.811v9s0 1 1 1 1-1 1-1z';
function Rp({
	className: t,
	instrument: e
}) {
	switch (e) {
		case 'ALL INSTRUMENTS':
			return v('svg', {
				width: 19,
				height: 16,
				viewBox: '0 0 19 16',
				className: t
			}, v('path', {
				d: `M15 ${Op}`
			}), v('path', {
				d: `M19 ${Op}`
			}), v('path', {
				'fill-rule': 'evenodd',
				'clip-rule': 'evenodd',
				d: 'M1.818 1.28a.97.97 0 01.801-.948c.757-.145 1.917-.332 2.88-.332.965 0 2.125.187 2.881.332a.97.97 0 01.802.949v1.476c.192-.193.464-.314.766-.314.581 0 1.052.447 1.052 1 0 .552-.471 1-1.052 1-.302 0-.574-.121-.766-.315v1.437c.192-.194.464-.315.766-.315.581 0 1.052.448 1.052 1s-.471 1-1.052 1c-.302 0-.574-.121-.766-.315v1.437c.192-.194.464-.315.766-.315.581 0 1.052.448 1.052 1s-.471 1-1.052 1c-.302 0-.574-.121-.766-.315v.809c0 .552-.445 1.449-1.052 1.449v.5h-5.26v-.5c-.581 0-1.052-.897-1.052-1.45v-.807a1.075 1.075 0 01-.766.314c-.581 0-1.052-.448-1.052-1s.471-1 1.052-1c.302 0 .574.12.766.314v-1.435a1.075 1.075 0 01-.766.314c-.581 0-1.052-.448-1.052-1s.471-1 1.052-1c.302 0 .574.12.766.314v-1.436a1.075 1.075 0 01-.766.315c-.581 0-1.052-.448-1.052-1 0-.553.471-1 1.052-1 .302 0 .574.12.766.314v-1.476zm1.277 2.126a.75.75 0 01.75-.75h.078a.75.75 0 01.75.75v5.706a.75.75 0 01-.75.75h-.078a.75.75 0 01-.75-.75v-5.706zm4.207-.75a.75.75 0 00-.75.75v5.706c0 .414.336.75.75.75h.078a.75.75 0 00.75-.75v-5.706a.75.75 0 00-.75-.75h-.078zm.828 12.344v-2h-5.26v2s0 1 2.63 1 2.63-1 2.63-1z'
			}));
		case 'GUITAR':
			return v('svg', {
				width: 19,
				height: 18,
				viewBox: '0 0 14 18',
				className: t
			}, v('path', {
				'fill-rule': 'evenodd',
				'clip-rule': 'evenodd',
				d: 'M2.314 1.44c0-.515.417-.965 1.02-1.067.963-.163 2.44-.373 3.666-.373s2.703.21 3.666.373c.602.102 1.02.552 1.02 1.068v1.661c.244-.218.59-.354.975-.354.74 0 1.339.504 1.339 1.125s-.6 1.125-1.339 1.125c-.384 0-.73-.136-.975-.354v1.616c.244-.218.59-.354.975-.354.74 0 1.339.504 1.339 1.125 0 .622-.6 1.125-1.339 1.125-.384 0-.73-.136-.975-.354v1.616c.244-.218.59-.354.975-.354.74 0 1.339.504 1.339 1.125s-.6 1.125-1.339 1.125c-.384 0-.73-.136-.975-.354v.91c0 .62-.566 1.63-1.339 1.63v.563h-6.694v-.563c-.74 0-1.34-1.01-1.34-1.63v-.91c-.244.218-.59.354-.974.354-.74 0-1.339-.504-1.339-1.125s.6-1.125 1.339-1.125c.384 0 .73.136.975.354v-1.615c-.245.217-.59.353-.975.353-.74 0-1.339-.503-1.339-1.125 0-.621.6-1.125 1.339-1.125.384 0 .73.136.975.354v-1.616c-.245.218-.59.354-.975.354-.74 0-1.339-.504-1.339-1.125s.6-1.125 1.339-1.125c.384 0 .73.136.975.354v-1.661zm1.625 2.298a.75.75 0 01.75-.75h.508a.75.75 0 01.75.75v6.607a.75.75 0 01-.75.75h-.508a.75.75 0 01-.75-.75v-6.607zm5.15-.75a.75.75 0 00-.75.75v6.607c0 .414.335.75.75.75h.508a.75.75 0 00.75-.75v-6.607a.75.75 0 00-.75-.75h-.508zm1.258 11.637h-6.694v2.25s0 1.125 3.347 1.125 3.347-1.125 3.347-1.125v-2.25z'
			}));
		case 'BASS':
			return v('svg', {
				width: 19,
				height: 18,
				viewBox: '0 0 16 18',
				className: t
			}, v('path', {
				'fill-rule': 'evenodd',
				'clip-rule': 'evenodd',
				d: 'M4.39.373c-.602.102-1.02.552-1.02 1.068l.086 1.31h-.46a1.313 1.313 0 10-2.301.732 1.313 1.313 0 102.245.806h.615l.257 3.948h-.58a1.313 1.313 0 10-2.301.732 1.313 1.313 0 102.245.806h.736l.145 2.225c0 .621 0 1 .652 1.5v.563h6.695v-.563c.653-.5.653-.879.653-1.5l.049-.758h.683a1.313 1.313 0 102.245-.806 1.313 1.313 0 10-2.301-.732h-.527l.258-3.978h.596a1.313 1.313 0 102.245-.806 1.313 1.313 0 10-2.301-.732h-.44l.179-2.747c0-.516-.418-.966-1.02-1.068-.964-.163-2.44-.373-3.666-.373-1.227 0-2.703.21-3.667.373zm7.014 14.252h-6.695v2.25s0 1.125 3.348 1.125c3.347 0 3.347-1.125 3.347-1.125v-2.25z'
			}), v('circle', {
				fill: '#fff',
				r: 1,
				cx: 6,
				cy: 4
			}), v('circle', {
				fill: '#fff',
				r: 1,
				cx: 10,
				cy: 5
			}), v('circle', {
				fill: '#fff',
				r: 1,
				cx: 10,
				cy: 10
			}), v('circle', {
				fill: '#fff',
				r: 1,
				cx: 6,
				cy: 9
			}));
		case 'DRUMS':
			return v('svg', {
				width: 19,
				height: 19,
				viewBox: '0 0 18 19',
				className: t
			}, v('path', {
				'fill-rule': 'evenodd',
				'clip-rule': 'evenodd',
				d: 'M18 14.847a1.918 1.918 0 01-.085.537 2.888 2.888 0 01-.232.55 3.705 3.705 0 01-.816 1.026 5.618 5.618 0 01-.707.53 7.124 7.124 0 01-.943.507c-.014-.09-.012-4.747-.012-4.747 0-.53.004-1.098.012-1.703a6.735 6.735 0 001.309-.773c.173-.133.34-.276.497-.428.163-.158.312-.33.446-.514.134-.185.248-.386.339-.598.094-.216.156-.446.185-.682l.006 6.295h.001zm-11.175-2.668c.177.04 1.112.19 1.112.19.332.049.706.091 1.123.127.417.037.837.055 1.262.055.422 0 .843-.024 1.262-.072a14.308 14.308 0 002.2-.422v6.448c-.324.097-.671.181-1.042.254-.324.064-.692.12-1.106.168-.436.05-.875.075-1.314.073-.463 0-.903-.018-1.32-.055a18.009 18.009 0 01-1.112-.127l-.55-.088a7.536 7.536 0 01-.514-.103l-.001-6.448zm-4.169-3.357c.05.415.197.812.429 1.16.229.347.506.656.822.917.45.363.955.64 1.494.822v6.448a3.985 3.985 0 01-1.239-.604 3.976 3.976 0 01-.48-.398 3.41 3.41 0 01-.44-.526 3.804 3.804 0 01-.36-.664 3.39 3.39 0 01-.226-.803v-6.352zm15.343-1.632a2.175 2.175 0 01-.17.795c-.13.312-.308.6-.526.852-.272.316-.58.598-.915.839-.416.3-.863.55-1.332.747a8.69 8.69 0 01-.84.32c-.327.108-.69.207-1.087.296-.396.088-.826.16-1.291.217-.478.059-.959.089-1.44.089-.502 0-1.029-.02-1.58-.06-.546-.04-1.09-.11-1.627-.212a11.28 11.28 0 01-1.525-.398 4.947 4.947 0 01-1.262-.618 5.496 5.496 0 01-.88-.73 3.675 3.675 0 01-.532-.708 2.356 2.356 0 01-.266-.712 4.05 4.05 0 01-.07-.761c-.022-.474.118-.94.394-1.316l-2.582-.79a.744.744 0 01-.278-.169.85.85 0 01-.156-.236.522.522 0 01-.006-.353.424.424 0 01.22-.314.745.745 0 01.339-.066c.105.003.211.021.312.055.05.019.545.193.545.193l8.729 3.245.105.097a.308.308 0 01.023.29.287.287 0 01-.133.163.218.218 0 01-.17-.006c-.015 0-.2-.052-.555-.157a549.208 549.208 0 01-5.176-1.579c-.1.14-.187.287-.26.442-.087.169-.125.36-.11.55.015.221.059.44.126.651.077.23.198.44.354.619.197.222.427.41.683.555.357.201.736.353 1.129.454a13.61 13.61 0 002.415.483c.698.064 1.271.096 1.719.096a15.048 15.048 0 002.13-.187c.437-.069.869-.162 1.296-.278a5.084 5.084 0 001.147-.453c.332-.176.614-.342.847-.495.206-.132.396-.287.567-.465.139-.143.246-.313.319-.5.07-.199.103-.409.098-.62a1.153 1.153 0 00-.231-.668 2.76 2.76 0 00-.602-.604 5.515 5.515 0 00-.874-.53 10.19 10.19 0 00-2.434-.837 4.178 4.178 0 00-.863-.102c-.031-.016-1.55-1.376-1.55-1.376.309-.009.614-.005.915.012.3.016.605.04.914.072.57.056 1.134.153 1.69.29.294.073.584.16.869.265.277.102.549.222.81.362.452.239.883.52 1.286.84.301.238.572.516.804.827a2.66 2.66 0 01.539 1.582v.002h-.001zm-15.1-6.075a1.449 1.449 0 01-.231-.232.62.62 0 01-.11-.26.6.6 0 01.064-.353.412.412 0 01.277-.254.75.75 0 01.34.006c.102.024.2.065.289.121.042.03 7.315 4.599 8.056 5.069.031.033.06.07.084.108a.467.467 0 01.03.133.248.248 0 01-.053.157c-.062.088-.118.134-.17.138-.059.002-.395-.163-.395-.163-.184-.099-2.367-1.293-2.367-1.293-.2.04-.525.116-.973.23-.55.146-1.091.327-1.62.543-.079-.026-1.24-.705-1.356-.782.128-.063 1.25-.599 1.499-.689a5.15 5.15 0 01.77-.217c-.532-.282-1.04-.56-1.524-.833-.437-.248-2.61-1.429-2.61-1.429z'
			}));
		case 'ALL TUNINGS':
			return v('svg', {
				width: 14,
				height: 16,
				viewBox: '0 0 14 16',
				className: t
			}, v('path', {
				fill: 'none',
				'data-style': 'stroke',
				'stroke-width': 2,
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
				d: 'M5 1v7.3c0 .522.4 2.7 2 2.7s2-2.178 2-2.7v-7.3'
			}), v('rect', {
				x: 6,
				y: 10,
				width: 2,
				height: 6,
				rx: 1
			}), v('rect', {
				y: 2,
				width: 2,
				height: 6,
				rx: 1
			}), v('rect', {
				x: 12,
				y: 2,
				width: 2,
				height: 6,
				rx: 1
			}));
		default:
			return null
	}
}
var jp = {
	outer: 'Bj1jq',
	stroke: 'Bjq9',
	filterIcon: 'Bj41',
	title: 'Bj1jq Bj1x4',
	active: 'Bj1jq Bj1',
	icon: 'Bj1r8',
	customSelect: 'Bj1ss',
	chosenValue: 'Bj15n',
	opened: 'Bj170',
	left: 'Bj1g5'
};
const $p = [
	...Sp,
	'ALL TUNINGS'
],
	Fp = ({
		id: t,
		onChange: e,
		opened: n,
		onClick: s,
		selectedValue: i,
		disabled: a,
		values: o,
		labels: r,
		left: l,
		linkUrls: c,
		title: u
	}) => {
		const d = X();
		y((() => {
			const e = {
				up: t => {
					t.preventDefault(),
						t.stopPropagation();
					const e = document.activeElement && document.activeElement.previousSibling;
					e && e.hasAttribute && e.hasAttribute('data-filter') ? e.focus() : d.current && d.current.children && d.current.children[0].focus()
				},
				down: t => {
					t.preventDefault(),
						t.stopPropagation();
					const e = document.activeElement && document.activeElement.nextSibling;
					e && e.hasAttribute && e.hasAttribute('data-filter') ? e.focus() : d.current && d.current.children && d.current.children[0].focus()
				},
				space: t => {
					t.preventDefault(),
						t.stopPropagation()
				},
				tab: () => {
					if (document.activeElement && document.activeElement.hasAttribute('data-filter')) {
						const t = document.activeElement.nextSibling;
						t && t.hasAttribute && t.hasAttribute('data-filter') || s()
					}
				},
				esc: t => {
					t.preventDefault(),
						t.stopPropagation(),
						s()
				}
			};
			return n && (window.hotKeysManager.bind(e, {
				onPanelPopup: !0
			}, t), window.hotKeysManager.bindMeta('shift+tab', (() => {
				if (document.activeElement && document.activeElement.hasAttribute('data-filter')) {
					const t = document.activeElement.previousSibling;
					t && t.hasAttribute && t.hasAttribute('data-filter') || s()
				} else s()
			}), t)),
				() => {
					n && (window.hotKeysManager.unbind(e, {
						onPanelPopup: !0
					}, t), window.hotKeysManager.unbindMeta('shift+tab', t))
				}
		}), [
			t,
			n
		]);
		let h = 0 !== o.indexOf(i) || n ? jp.active : '';
		const p = `${jp.customSelect} ${n ? jp.opened : ''} ${l ? jp.left : ''}`;
		let f = a ? r[0] : r[o.indexOf(i)] || i;
		$p.includes(f.toUpperCase()) && (f = v(Rp, {
			className: jp.filterIcon,
			instrument: f.toUpperCase()
		}));
		const m = t => {
			t.preventDefault(),
				t.stopPropagation(),
				s(),
				t.target.focus()
		};
		return v(S, {
		}, v('button', {
			id: `${t}Button`,
			className: `${h} ${jp.title}`,
			onClick: m,
			onKeyPress: t => 13 === t.keyCode && m(t),
			disabled: a,
			title: `Filter by ${u}`
		}, l && v(Dp, {
			styles: jp
		}), f, !l && v(Dp, {
			styles: jp
		})), v('div', {
			id: t,
			className: p,
			ref: d,
			role: 'list'
		}, o.map(((t, n) => {
			const a = r && void 0 !== r[n] && r[n] || t,
				o = void 0 !== i && i === t,
				l = o ? jp.chosenValue : void 0,
				u = n => {
					n.preventDefault(),
						e(t),
						s()
				},
				d = c ? c[n] : '.';
			return v('a', {
				className: l,
				onClick: u,
				onKeyPress: t => 13 === t.keyCode && u(t),
				href: d,
				'data-filter': !0,
				'data-value': a,
				'data-selected': o,
				role: 'listitem',
				title: a
			}, a)
		}))))
	};
function Hp(t) {
	const {
		tuningFilter: e,
		instrumentFilter: n,
		difficultyFilter: s,
		setTuningFilter: i,
		setInstrumentFilter: a,
		setDifficultyFilter: o,
		isSmallScreen: r,
		spacerSize: l,
		numberSpacer: c,
		instrumentSEOLinks: u,
		activeFilter: d,
		onFilterClick: h
	}
		= t;
	let {
		difficultyFilterNA: p
	}
		= t;
	void 0 === p && (p = !1);
	const f = 'DRUMS' === n,
		m = function (t) {
			const e = [
			];
			function n(t, n, s = 0, i) {
				0 !== s && (n = function (t, e) {
					return t.map((t => t + e))
				}(n, s));
				const a = `${i = i || 'ALL INSTRUMENTS'}:${_o(n).join(',')}`,
					o = function (t) {
						return _o(t, !1).reverse().join(' ')
					}(n);
				e.push([`${t} (${o})`,
					a])
			}
			function s() {
				n('Standard 6-string', xo, 0, 'GUITAR'),
					n('Standard 7-string', ko, 0, 'GUITAR'),
					n('Drop D', So, 0, 'GUITAR'),
					n('Drop C#', So, - 1, 'GUITAR'),
					n('Drop C', So, - 2, 'GUITAR'),
					n('Drop B', So, - 3, 'GUITAR'),
					n('Drop A#', So, - 4, 'GUITAR'),
					n('Drop A', So, - 5, 'GUITAR'),
					n('Drop G#', So, - 6, 'GUITAR'),
					n('Drop G', So, - 7, 'GUITAR'),
					n('Drop F#', So, - 8, 'GUITAR'),
					n('Drop F', So, - 9, 'GUITAR')
			}
			if (e.push([Cp('ALL TUNINGS'),
				'ALL TUNINGS']), 'BASS' === t) {
				n('Standard 4-string', yo, 0, 'BASS'),
					n('Standard 5-string', wo, 0, 'BASS'),
					n('Standard 6-string', bo, 0, 'BASS'),
					n('Drop D', vo, 0, 'BASS'),
					n('Drop C#', vo, - 1, 'BASS'),
					n('Drop C', vo, - 2, 'BASS'),
					n('Drop B', vo, - 3, 'BASS'),
					n('Drop A#', vo, - 4, 'BASS'),
					n('Drop A', vo, - 5, 'BASS');
				for (let t = 1; t <= 7; t++) n(`${t} st down`, yo, - t, 'BASS')
			} else if ('GUITAR' === t) {
				s();
				for (let t = 1; t <= 7; t++) n(`${t} st down`, xo, - t, 'GUITAR')
			} else if ('ALL INSTRUMENTS' === t) {
				s();
				for (let t = 1; t <= 7; t++) n(`${t} st down`, xo, - t, 'GUITAR');
				n('Bass: 4-string', yo, 0, 'BASS'),
					n('Bass: 5-string', wo, 0, 'BASS'),
					n('Bass: 6-string', bo, 0, 'BASS'),
					n('Bass: Drop D', vo, 0, 'BASS'),
					n('Bass: Drop C#', vo, - 1, 'BASS'),
					n('Bass: Drop C', vo, - 2, 'BASS'),
					n('Bass: Drop B', vo, - 3, 'BASS'),
					n('Bass: Drop A#', vo, - 4, 'BASS'),
					n('Bass: Drop A', vo, - 5, 'BASS')
			}
			return e
		}(n);
	let g = 'Cw9206 Cw920x';
	return 'big' === l ? g = 'Cw9206 Cw91r4' : 'small' === l && (g = 'Cw9206 Cw920x Cw95a'),
		v('div', {
			className: 'Cw92oa'
		}, v('div', {
			className: g
		}, c && v('span', {
			className: 'Cw91la'
		}, '#')), v('div', {
			className: 'Cw9206 Cw91u4'
		}, v(Fp, {
			id: 'filterByInstrumentSelect',
			onChange: a,
			selectedValue: n,
			opened: 'instrument' === d,
			onClick: () => {
				h('instrument')
			},
			values: Sp,
			labels: Sp.map(Cp),
			linkUrls: u,
			title: 'instrument'
		})), !r && v('div', {
			className: 'Cw9206'
		}, v(Fp, {
			id: 'filterByTuningSelect',
			onChange: i,
			selectedValue: e,
			opened: 'tunning' === d,
			onClick: () => {
				h('tunning')
			},
			disabled: f,
			values: m.map((t => t[1])),
			labels: m.map((t => t[0])),
			title: 'tuning'
		})), v('div', {
			className: 'Cw9206'
		}, v(Fp, {
			id: 'filterByDifficultySelect',
			onChange: t => {
				o(t)
			},
			opened: 'difficulty' === d,
			onClick: () => {
				h('difficulty')
			},
			left: !0,
			disabled: p,
			selectedValue: s,
			values: kp,
			labels: kp,
			title: 'difficulty'
		})))
}
var zp = {
	title: 'Cdy1u3 C052eq',
	difficultyFilteringHintText: 'Cdy1u3 C052eq C052q7',
	list: 'C052ub',
	popular: 'C052ub C051qq',
	search: 'C052ub C052lr',
	header: 'C0533g',
	showroom: 'C05p1',
	button: 'Cpb24q Cpb318 C05198',
	resetFilterHint: 'C051uh',
	stubWrapper: 'C05186'
};
const qp = (t, e, n) => {
	y((() => {
		const s = () => {
			e.current && e.current.focus()
		},
			i = {
				up: n => {
					n.preventDefault(),
						n.stopPropagation();
					const s = document.activeElement;
					if (s && s.hasAttribute && s.hasAttribute('data-song')) {
						const t = s.previousSibling;
						t && t.hasAttribute && t.hasAttribute('data-song') ? t.focus() : e.current && e.current.focus()
					} else t.current && t.current.children && t.current.children[0].focus()
				},
				down: e => {
					e.preventDefault(),
						e.stopPropagation();
					const n = document.activeElement && document.activeElement.nextSibling;
					n && n.hasAttribute && n.hasAttribute('data-song') ? n.focus() : t.current && t.current.children && t.current.children[0].focus()
				},
				space: s,
				'keyboard*': s
			};
		return window.hotKeysManager.bind(i, {
			onPanel: !0
		}, n),
			() => {
				window.hotKeysManager.unbind(i, {
					onPanel: !0
				}, n)
			}
	}), [
	])
};
function Up({
	noObserver: t,
	children: e
}) {
	return v('div', {
		className: t ? 'D1n1ps' : 'D1n1ps D1n29v'
	}, e)
}
const Wp = (t, e) => t && t.map((t => {
	const n = t.tracks;
	if (n) {
		const s = n.reduce(e, - 1);
		return - 1 !== s ? Object.assign({
		}, t, {
			defaultTrack: s
		}) : t
	}
	return t
})),
	Vp = () => !1;
function Gp(t) {
	return 'BASS' === t ? ys : 'DRUMS' === t ? ms : 'GUITAR' === t ? gs : Vp
}
const Xp = t => {
	if (t) {
		if (t.isDrums) return ms;
		if (t.isBassGuitar) return ys
	}
	return gs
};
function Yp({
	numResults: t,
	resetFilter: e
}) {
	const n = t => {
		t.preventDefault(),
			e()
	};
	return t > 0 ? v('div', {
		className: zp.resetFilterHint
	}, v('a', {
		onClick: n,
		'data-action': 'resetFilters',
		tabIndex: 0
	}, 'Reset filter'), ` to see ${t} ${s = t,
	0 === s || s > 1 ? 'tabs' : 'tab'}`) : v('div', {
		className: zp.resetFilterHint
	}, 'Start a ', v('a', {
		onClick: n,
		'data-action': 'resetFilters',
		tabIndex: 0
	}, 'new search'));
	var s
}
const Zp = T((({
	route: t,
	query: e,
	user: n,
	device: s,
	isSmallScreen: i
}) => {
	const {
		search: a,
		popular: o,
		meta: r,
		track: l,
		dispatch: c
	}
		= On('search', 'popular', 'meta', 'user', 'track');
	y((() => nh({
		route: t,
		search: a,
		popular: o
	})), [
		a.pattern,
		o.filters
	]);
	const u = X(),
		d = X();
	qp(u, d, 'SongsPanel');
	const {
		isDesktop: h
	}
		= s,
		p = a.pattern,
		[
			g,
			w
		] = f(p),
		b = ((t, e = 200) => {
			const [n,
				s] = f(t);
			return y((() => {
				if ('' === t) return void s(t);
				const n = setTimeout((() => {
					s(t)
				}), e);
				return () => clearTimeout(n)
			}), [
				t
			]),
				n
		})(g),
		[
			x,
			S
		] = f(s.isPhone ? 30 : 2000),
		{
			hasPlus: k
		}
			= n,
		C = 'none',
		_ = o.filters.instrument,
		E = () => {
			Gd('ALL INSTRUMENTS'),
				c('songs/filter/reset')
		},
		N = o.filters.difficulty,
		L = o.filters.tunings[_] || 'ALL TUNINGS',
		[
			T,
			I
		] = f(null),
		P = p.length > 0,
		M = !P,
		B = 'ALL TUNINGS' === L ? o.defaultSongs : o.songs,
		D = a.songs,
		O = (P ? D : B) || [
		],
		R = b !== p || M && o.loading,
		j = M && 0 === O.length;
	y((() => {
		if (p !== b) {
			const t = new Wu;
			return async function (t, e, n) {
				try {
					if (e.length) {
						const s = await async function (t, e) {
							const n = `/api/songs?pattern=${encodeURIComponent(t)}&size=200`,
								s = await fetch(n, {
									signal: e
								});
							return e && e.aborted ? [
							] : (lc(s), Nu(await s.json()))
						}(e, n);
						if (n && n.aborted) return;
						t('songs/search', {
							songs: s,
							pattern: e
						})
					} else t('songs/reset')
				} catch (t) {
				}
			}(c, b, t.signal),
				Vd(b),
				t.abort.bind(t)
		}
	}), [
		p,
		b
	]),
		y((() => {
			const t = {
			};
			if ('ALL TUNINGS' === L) return;
			{
				const e = _p(L),
					n = e.tuning.split(',').map((t => {
						const e = + t.slice(- 1),
							n = t.substring(0, t.length - 1);
						return go.indexOf(n) + 12 * (e + 1)
					}));
				t.tuning = n,
					t.instrument = e.instrument
			}
			const e = new Wu;
			return Mp(c, t, e.signal),
				e.abort.bind(e)
		}), [
			L
		]);
	let $ = Xp(l);
	'ALL INSTRUMENTS' !== _ && ($ = Gp(_));
	const F = (t, e, n, s) => $(e.instrumentId) && (- 1 === t || e.views > s[t].views) ? n : t,
		H = m((() => Wp(O, F)), [
			O,
			$
		]),
		z = 'ALL INSTRUMENTS' !== _ && 'GUITAR' !== _,
		q = m((() => {
			const t = Np(z ? H : Lp(H, C, N), _);
			return P ? Ep(t, L) : t
		}), [
			H,
			C,
			N,
			_,
			L
		]),
		U = h && !k,
		W = Sp.map((n => Xd(n, t, e))),
		V = {
			tuningFilter: L,
			instrumentFilter: _,
			difficultyFilter: N,
			setTuningFilter: t => c('songs/filter/tuning', {
				instrument: _,
				tuning: t
			}),
			setInstrumentFilter: t => {
				Gd(t),
					c('songs/filter/instrument', t)
			},
			setDifficultyFilter: t => c('songs/filter/difficulty', t),
			difficultyFilterNA: z,
			spacerSize: P ? 'normal' : 'big',
			numberSpacer: !P,
			isSmallScreen: i,
			instrumentSEOLinks: W,
			activeFilter: T,
			onFilterClick: t => {
				I(t === T ? null : t)
			}
		},
		G = A((() => {
			I(null)
		}), [
		]),
		Y = A((() => {
			E(),
				w('')
		}), [
		]),
		Z = th(o.filters, ''),
		J = '' !== Z ? ` ${Z}` : '';
	return v(op, {
		title: P ? `Search${J} Tabs` : `Popular${J} Tabs`,
		id: 'search',
		styles: zp,
		onClick: G
	}, v(Up, {
	}, v(Qh, {
		value: g,
		setValue: w,
		isDesktop: h,
		loading: R,
		inputRef: d,
		placeholder: 'Search over 500,000 tabs'
	}), v(Hp, V), U && v(gp, {
		page: t.page
	})), !j && q.length > 0 && [
		v('div', {
			className: P ? zp.search : zp.popular,
			'data-list': P ? 'search' : 'popular',
			ref: u
		}, q.slice(0, x).map((t => v(Yh, {
			song: t,
			isActive: r && r.songId === t.songId,
			numerated: !P,
			key: t.songId,
			difficultyNA: z
		}))))
	], !j && q.length > 0 && q.length > x && v('button', {
		className: zp.button,
		onClick: () => S(x + 50)
	}, 'Show more'), !j && 0 === q.length && v('div', {
		className: zp.stubWrapper
	}, v(vp, {
		id: 'notfound',
		header: 'No tabs found',
		headerColor: 'red',
		icon: () => v(yp, null)
	}, Yp({
		numResults: O.length,
		resetFilter: O.length > 0 ? E : Y
	}))))
}));
class Jp extends x {
	render() {
		const {
			width: t,
			height: e,
			className: n
		}
			= this.props;
		return v('svg', {
			className: n,
			height: e,
			width: t,
			viewBox: '0 0 16 4'
		}, v('circle', {
			cx: '2',
			cy: '2',
			r: '2'
		}), v('circle', {
			cx: '8',
			cy: '2',
			r: '2'
		}), v('circle', {
			cx: '14',
			cy: '2',
			r: '2'
		}))
	}
}
let Kp;
const Qp = T((({
	song: t,
	addOptions: e,
	removeCaption: n,
	onAdd: s,
	onClose: i,
	onRemove: a
}) => {
	const o = {
		current: [
		]
	},
		r = A((t => {
			t.preventDefault(),
				t.stopPropagation()
		}), [
		]),
		l = A((t => {
			t.preventDefault(),
				t.stopPropagation(),
				void 0 === Kp || Kp >= o.current.length - 1 ? Kp = 0 : Kp += 1,
				o.current && o.current[Kp].focus()
		}), [
		]),
		c = A((t => {
			t.preventDefault(),
				t.stopPropagation(),
				void 0 === Kp || Kp <= 0 ? Kp = o.current.length - 1 : Kp -= 1,
				o.current && o.current[Kp].focus()
		}), [
		]);
	return y((() => {
		const t = {
			up: c,
			down: l,
			tab: i,
			esc: i,
			space: r
		};
		return window.hotKeysManager.bind(t, {
			onPanelPopup: !0
		}),
			Kp = void 0,
			() => {
				window.hotKeysManager.unbind(t, {
					onPanelPopup: !0
				}),
					Kp = void 0
			}
	}), [
		e
	]),
		v('div', {
			className: 'C8mr5',
			'data-dropdown': ''
		}, e && 0 !== e.length && v('div', {
			className: 'C8mn2'
		}, v('p', {
		}, 'Add to playlist:'), e.map((e => e.active ? v('button', {
			ref: t => {
				o.current.push(t)
			},
			onClick: () => {
				s(t, e.id)
			}
		}, e.name) : v('button', {
			onClick: r,
			className: 'C8m2jh',
			tabIndex: - 1
		}, e.name)))), v('button', {
			ref: t => {
				o.current.push(t)
			},
			className: 'C8m1k',
			onClick: a,
			'data-feature': 'remove'
		}, n))
}));
const tf = T((({
	song: t,
	addOptions: e,
	dropdownShown: n,
	optionsAlwaysOn: s,
	removeCaption: i,
	onAdd: a,
	onOptionsClick: o,
	onRemove: r
}) => {
	const l = n || s ? 'Cht32a Chtog' : 'Cht32a',
		c = A((e => {
			e.preventDefault(),
				e.stopPropagation(),
				n ? o() : o(t.songId)
		}), [
			t,
			n
		]),
		u = A((() => o()), [
		]);
	return v('div', {
		className: l,
		onClick: c
	}, v('button', {
		className: 'Cht9n',
		title: 'Options'
	}, v(Jp, {
		width: 16,
		height: 4
	})), n && v(Qp, {
		addOptions: e,
		song: t,
		onRemove: r,
		removeCaption: i,
		onAdd: a,
		onClose: u
	}))
})),
	ef = {
		animationStyles: {
			exitActive: 'Br024a',
			enterActive: 'Br02a8',
			enter: 'Br02l9',
			exit: 'Br01vc'
		}
	},
	nf = T((({
		song: t,
		isActive: e,
		addOptions: n,
		dropdownShown: s,
		optionsAlwaysOn: i,
		isPhone: a,
		inSetlist: o,
		onAdd: r,
		onClick: l,
		onOptionsClick: c,
		onRemove: u,
		difficultyNA: d
	}) => {
		void 0 === d && (d = !1);
		const [h,
			p] = f(!1);
		let m = Xh.favorite;
		e && (m += ' ' + Xh.active),
			h && (m += ' ' + Xh.removal);
		const g = t.tracks && t.tracks[t.defaultTrack],
			y = g && t.difficulty,
			w = yr(t, t.defaultTrack, void 0, g && g.instrumentId || void 0),
			b = A((t => {
				t.preventDefault(),
					t.stopPropagation(),
					p(!h)
			}), [
				h
			]),
			x = A((t => {
				t.preventDefault(),
					t.stopPropagation(),
					p(!1),
					u()
			}), [
				u
			]);
		return v(Qo, {
			className: m,
			'data-song': '',
			to: w,
			onClick: l
		}, a && v('div', {
			role: 'button',
			className: Xh.fav,
			onClick: b,
			title: 'Remove from favorites'
		}, v(yu, {
			width: 17,
			height: 17,
			state: 'fill',
			title: 'Remove from favorites',
			styles: Xh
		})), v('div', {
			className: Xh.wrapper
		}, v('div', {
			className: Xh.name,
			'data-field': 'name'
		}, t.title), v('div', {
			className: Xh.artist,
			'data-field': 'artist'
		}, t.artist)), !a && v(tf, {
			song: t,
			addOptions: n,
			dropdownShown: s,
			optionsAlwaysOn: i,
			removeCaption: o ? 'Remove from this playlist' : 'Remove from favorites',
			onAdd: r,
			onOptionsClick: c,
			onRemove: u
		}), v(Dd, {
			'data-field': 'difficulty',
			difficultyNA: d,
			difficultyString: y,
			isNumerated: !0
		}), a && v(Un, {
			component: 'div',
			className: Xh.controls
		}, h && v(Gn, ef, v('div', {
			className: Xh.buttons
		}, v('button', {
			className: Xh.cancel,
			onClick: b,
			'data-action': 'cancel'
		}, 'Cancel'), v('button', {
			className: Xh.remove,
			onClick: x,
			'data-action': 'remove'
		}, 'Remove')))))
	}));
class sf extends x {
	render() {
		return v('svg', {
			width: 189,
			height: 101,
			viewBox: '0 0 189 101',
			fill: 'none'
		}, v('rect', {
			x: '139',
			y: '60',
			width: '50',
			height: '4',
			rx: '1',
			fill: '#3A3A3A'
		}), v('rect', {
			y: '60',
			width: '50',
			height: '4',
			rx: '1',
			fill: '#3A3A3A'
		}), v('path', {
			fill: '#3A3A3A',
			d: 'M94 78L95.1452 76.3603L94.009 75.5668L92.8669 76.3519L94 78ZM115 61L113.879 59.3438L112.698 60.1431L113.069 61.5199L115 61ZM107.5 36.5L105.631 37.2109L106.089 38.4157L107.375 38.4961L107.5 36.5ZM82 36.5L82.1217 38.4963L83.464 38.4144L83.8947 37.1405L82 36.5ZM73 61L74.9249 61.5429L75.3139 60.1637L74.1331 59.3519L73 61ZM43.899 38.8232L43.7773 36.8269L43.899 38.8232ZM43.3933 40.6454L44.5264 38.9973L43.3933 40.6454ZM94.9901 3.60352L96.8595 2.89262L94.9901 3.60352ZM93.108 3.63874L91.2134 2.99828L93.108 3.63874ZM145.072 40.6433L143.951 38.9871L145.072 40.6433ZM123.248 98.4268L122.102 100.067L123.248 98.4268ZM124.786 97.347L126.717 96.8271L124.786 97.347ZM64.2801 98.4324L65.4132 100.081L64.2801 98.4324ZM62.7511 97.3369L60.8262 96.794L62.7511 97.3369ZM65.4132 100.081L95.1331 79.6481L92.8669 76.3519L63.147 96.7843L65.4132 100.081ZM92.8548 79.6397L122.102 100.067L124.393 96.7872L95.1452 76.3603L92.8548 79.6397ZM126.717 96.8271L116.931 60.4801L113.069 61.5199L122.855 97.867L126.717 96.8271ZM116.121 62.6562L146.194 42.2995L143.951 38.9871L113.879 59.3438L116.121 62.6562ZM144.699 36.821L107.625 34.5039L107.375 38.4961L144.449 40.8132L144.699 36.821ZM109.369 35.7891L96.8595 2.89262L93.1207 4.31441L105.631 37.2109L109.369 35.7891ZM91.2134 2.99828L80.1053 35.8595L83.8947 37.1405L95.0027 4.27919L91.2134 2.99828ZM81.8783 34.5037L43.7773 36.8269L44.0207 40.8195L82.1217 38.4963L81.8783 34.5037ZM42.2603 42.2935L71.8669 62.6481L74.1331 59.3519L44.5264 38.9973L42.2603 42.2935ZM71.0751 60.4571L60.8262 96.794L64.676 97.8799L74.9249 61.5429L71.0751 60.4571ZM43.7773 36.8269C40.9293 37.0006 39.9091 40.6771 42.2603 42.2935L44.5264 38.9973C45.3101 39.5361 44.97 40.7616 44.0207 40.8195L43.7773 36.8269ZM96.8595 2.89262C95.8593 0.26248 92.1145 0.332526 91.2134 2.99828L95.0027 4.27919C94.7023 5.16779 93.4541 5.19112 93.1207 4.31441L96.8595 2.89262ZM146.194 42.2995C148.563 40.6953 147.555 36.9995 144.699 36.821L144.449 40.8132C143.497 40.7537 143.161 39.5218 143.951 38.9871L146.194 42.2995ZM122.102 100.067C124.399 101.67 127.445 99.5316 126.717 96.8271L122.855 97.867C122.612 96.9655 123.627 96.2526 124.393 96.7872L122.102 100.067ZM63.147 96.7843C63.9182 96.2542 64.9301 96.9791 64.676 97.8799L60.8262 96.794C60.0641 99.4962 63.0996 101.671 65.4132 100.081L63.147 96.7843Z'
		}))
	}
}
const af = ({
	name: t,
	onConfirm: e,
	onCancel: n,
	setName: s
}) => {
	const i = X(null);
	y((() => {
		i.current && i.current.focus()
	}), [
	]),
		i.current && i.current.focus();
	const a = t.length > 15 ? 2 : 1;
	return v('form', {
		className: 'Ga1e5',
		noValidate: !0,
		onClick: t => {
			t.stopPropagation()
		}
	}, v('textarea', {
		spellcheck: !1,
		className: 'Ga1e5',
		placeholder: 'New playlist',
		maxlength: 30,
		rows: a,
		value: t,
		ref: i,
		autoComplete: 'off',
		onKeyDown: t => {
			13 === t.keyCode && (t.preventDefault(), e()),
				27 === t.keyCode && (t.preventDefault(), n())
		},
		onChange: t => {
			s(t.target.value)
		}
	}))
};
const of = T((({
	name: t,
	id: e,
	removable: n,
	confirmRemove: s,
	active: i,
	shaking: a,
	onClick: o,
	onRemoveClick: r
}) => {
	let l = i ? 'Bdjzv Bdj101' : 'Bdjzv';
	return l = s ? 'Bdjzv Bdjs6' : l,
		l = `${l} ${a ? 'Bdj2c2' : ''}`,
		v('li', {
			className: l,
			onClick: () => {
				o(e)
			},
			'data-playlist': t
		}, v('button', {
			className: 'Bdj7m',
			title: t
		}, t), n && v('button', {
			className: 'Bdj2r3',
			onClick: t => {
				t.stopPropagation(),
					r(e)
			},
			'data-feature': 'remove'
		}, v(cd, {
			width: 9,
			height: 9
		})))
})),
	rf = () => {
		const {
			setlists: t,
			dispatch: e
		}
			= On('setlists'),
			{
				activeSetId: n,
				createSetForm: s,
				removeSetId: i,
				markedIds: a
			}
				= t,
			[
				o,
				r
			] = f('unset');
		A((t => {
			t.preventDefault(),
				r('hide' === o ? 'show' : 'hide')
		}), [
			o
		]);
		let l = null;
		return 'show' === o ? l = 'Cdq2sr' : 'hide' === o && (l = 'Cdq2h8'),
			v('aside', {
				id: 'playlist-menu',
				className: 'Cdq1f7'
			}, v('div', {
				className: 'Cdqqa'
			}, v('ul', {
				className: l
			}, v(of, {
				name: 'Favorites',
				active: !n,
				onClick: () => e('setlists/select', void 0)
			}), v('li', {
			}, v('button', {
				id: 'create-playlist',
				className: 'Cdqyl',
				onClick: t => {
					t.stopPropagation(),
						e('setlists/openCreate')
				}
			}, 'Create playlist')), s && v('li', {
				className: 'Cdqmm'
			}, v(af, {
				name: s.name,
				onConfirm: () => e('setlists/confirmCreate'),
				onCancel: () => e('setlists/cancelCreate'),
				setName: t => e('setlists/changeName', t)
			})), t.setlists.map((t => v(of, {
				id: t.id,
				name: t.name,
				active: t.id === n,
				shaking: a.includes(t.id),
				removable: !0,
				confirmRemove: i === t.id,
				onRemoveClick: n => e(i === t.id ? 'setlists/confirmRemove' : 'setlists/initRemove', n),
				onClick: t => e('setlists/select', t)
			}))))))
	};
class lf extends x {
	render() {
		return v('svg', {
			height: 100,
			width: 188,
			viewBox: '0 0 188 100',
			fill: '#3A3A3A'
		}, v('rect', {
			x: '53',
			width: '135',
			height: '4.1'
		}), v('rect', {
			x: '53',
			y: '24',
			width: '135',
			height: '4.1'
		}), v('rect', {
			x: '89',
			y: '48',
			width: '99',
			height: '4.1'
		}), v('rect', {
			y: '48',
			width: '70',
			height: '4.1'
		}), v('rect', {
			x: '33',
			y: '85',
			width: '70',
			height: '4.1',
			transform: 'rotate(-90 33 85)'
		}), v('rect', {
			x: '53',
			y: '72',
			width: '135',
			height: '4.1'
		}), v('rect', {
			y: '96',
			width: '188',
			height: '4.1'
		}))
	}
}
const cf = T((({
	route: t,
	query: e,
	user: n,
	device: s,
	isSmallScreen: i
}) => {
	const {
		favorites: a,
		setlists: o,
		meta: r,
		track: l,
		dispatch: c
	}
		= On('favorites', 'setlists', 'meta', 'track');
	eh({
		route: t
	});
	const u = X(),
		d = X();
	qp(u, d, 'FavoritesPanel');
	const {
		hasPlus: h,
		isLoggedIn: p
	}
		= n,
		{
			isDesktop: g,
			isPhone: y,
			isTablet: w
		}
			= s,
		{
			pattern: b,
			loading: x
		}
			= a,
		{
			activeSetId: S
		}
			= o,
		k = g && !h,
		[
			C
		] = f('none'),
		[
			_,
			E
		] = f(void 0),
		[
			N,
			L
		] = f(null),
		T = a.filters.instrument,
		I = () => {
			Gd('ALL INSTRUMENTS'),
				c('favorites/filter/reset')
		},
		P = a.filters.difficulty,
		M = a.filters.tunings[T] || 'ALL TUNINGS';
	let B = Xp(l);
	'ALL INSTRUMENTS' !== T && (B = Gp(T));
	const D = (t, e, n, s) => B(e.instrumentId) && (- 1 === t || e.views > s[t].views) ? n : t,
		O = m((() => {
			const t = S ? o.setlists.find((t => t.id === S)).songs : a.favorites;
			return Wp(t, D)
		}), [
			a.favorites,
			S,
			o.setlists,
			B
		]),
		R = m((() => function (t, e) {
			if (e && '' !== e) {
				const n = e.toLowerCase().trim().split(' ').filter((t => t));
				return t.filter((t => {
					const e = t.title.toLowerCase(),
						s = t.artist.toLowerCase();
					return n.every((t => - 1 !== e.indexOf(t) || - 1 !== s.indexOf(t)))
				}))
			}
			return t
		}(O, b)), [
			O,
			b
		]),
		j = 'ALL INSTRUMENTS' !== T && 'GUITAR' !== T,
		$ = m((() => Ep(Np(j ? R : Lp(R, C, P), T), M)), [
			R,
			C,
			P,
			T,
			M
		]),
		F = !y && o.setlists && o.setlists.length > 0,
		H = a.favorites && a.favorites.length > 0,
		z = O && O.length > 0,
		q = $ && $.length > 0,
		U = Sp.map((n => Xd(n, t, e))),
		W = {
			tuningFilter: M,
			instrumentFilter: T,
			difficultyFilter: P,
			setTuningFilter: t => c('favorites/filter/tuning', {
				instrument: T,
				tuning: t
			}),
			setInstrumentFilter: t => {
				Gd(t),
					c('favorites/filter/instrument', t)
			},
			setDifficultyFilter: t => c('favorites/filter/difficulty', t),
			difficultyFilterNA: j,
			isSmallScreen: i,
			spacerSize: y ? 'big' : 'small',
			instrumentSEOLinks: U,
			activeFilter: N,
			onFilterClick: t => {
				L(t === N ? null : t),
					E(void 0)
			}
		},
		V = A((t => {
			c('favorites/filter', t),
				Vd(t)
		}), [
		]),
		G = A((t => {
			t.preventDefault(),
				c('setlists/select', void 0)
		}), [
		]),
		Y = t => {
			E(t),
				L(null),
				c('setlists/panelClick')
		},
		Z = A((() => {
			E(void 0),
				L(null),
				c('setlists/panelClick')
		}), [
		]),
		J = A((() => {
			I(),
				V('')
		}), [
		]),
		K = S ? `Filter ${o.setlists.find((t => t.id === S)).name}` : 'Filter favorites';
	return v(op, {
		title: 'Favorites',
		id: 'favorites',
		styles: {
			panel: y ? 'Cdy7e Cdydg Cma2ey' : 'Cdy7e Cdydg Cma58'
		},
		onClick: Z
	}, (H || F) && v(Up, {
		noObserver: !0
	}, v(Qh, {
		inputRef: d,
		value: b,
		isDesktop: g,
		loading: x,
		placeholder: K,
		setValue: V
	})), (H || F) && v('div', {
		className: 'Cma2io'
	}, !y && v(rf, null), z && q && v('div', {
		className: y ? 'Cma2tv' : 'Cma18o'
	}, v(Up, {
	}, v(Hp, W), p && k && v(gp, {
		page: t.page
	})), v('div', {
		ref: u,
		className: 'Cma24g',
		'data-list': 'favorites'
	}, $.map((t => {
		const e = [
		];
		o.setlists.forEach((n => {
			const s = !n.songs.find((e => e.songId === t.songId));
			e.push({
				name: n.name,
				id: n.id,
				active: s
			})
		}));
		const n = S ? () => c('setlists/removeSong', {
			setlistId: S,
			songId: t.songId
		}) : () => c('favorites/delete', t.songId);
		return v(nf, {
			key: `${S}${t.songId}`,
			isPhone: y,
			song: t,
			addOptions: e,
			dropdownShown: _ === t.songId,
			isActive: r && r.songId === t.songId,
			optionsAlwaysOn: w,
			inSetlist: !!S,
			onAdd: (t, e) => c('setlists/addSong', {
				song: t,
				setlistId: e
			}),
			onClick: () => {
				c('setlists/panelClick')
			},
			onOptionsClick: Y,
			onRemove: n,
			difficultyNA: j
		})
	})))), z && !q && v('div', {
		className: 'Cma26m'
	}, v('div', {
		className: zp.stubWrapper
	}, v(Hp, W), v(vp, {
		id: 'notfound',
		header: 'No tabs found',
		headerColor: 'red',
		icon: () => v(yp, null)
	}, Yp({
		numResults: R.length,
		resetFilter: R.length > 0 ? I : J
	})))), !z && v('div', {
		className: 'Cma26m'
	}, v('div', {
		className: zp.stubWrapper
	}, S ? v(vp, {
		id: 'notfound',
		header: 'Playlist is empty',
		icon: () => v(lf, null)
	}, v('div', {
		className: 'Cmar5'
	}, v('a', {
		onClick: G,
		tabIndex: 0
	}, 'Go to Favorites'), ' to fill it with songs')) : v(vp, {
		id: 'nofavorites',
		header: 'You have no favorites',
		icon: () => v(sf, null),
		hint: () => 'To create a favorite, open a song and click on the star.'
	})))), !F && !H && v(vp, {
		id: 'nofavorites',
		header: 'You have no favorites',
		icon: () => v(sf, null),
		hint: () => 'To create a favorite, open a song and click on the star.'
	}))
}));
function uf({
	options: t,
	id: e,
	label: n,
	name: s,
	selected: i,
	handleChange: a
}) {
	return v('label', {
		className: 'vhei'
	}, v('div', {
		className: 'Bvq2sa vh1nf'
	}, n && v('div', {
		className: 'Bvq8m vhy9'
	}, n)), v('div', {
		className: 'vh213'
	}, v('select', {
		id: e,
		className: 'vh71',
		name: s,
		value: i,
		onChange: a
	}, t.map((t => v('option', {
		key: t,
		value: t
	}, t)))), v('div', {
		className: 'vh1nn'
	})), v('aside', {
		className: 'Bvq2sa vh1nf'
	}))
}
var df = {
	actions: 'B3f2vs',
	notice: 'olqe B3f353',
	fieldDifficulty: 'vhei B3f1pu'
};
const hf = [
	'Beginner',
	'Intermediate',
	'Advanced'
],
	pf = () => {
		const {
			dispatch: t
		}
			= On(),
			e = X(),
			n = X(),
			s = X(),
			[
				i,
				a
			] = f(!1),
			[
				o,
				r
			] = f(null),
			[
				l,
				c
			] = f(hf[1]),
			u = A((i => {
				i.preventDefault();
				const o = new Wu;
				return (async (e, n, s, i, o) => {
					a(!0),
						r(null);
					try {
						Fc({
							field: e,
							validator: Ac
						}, {
							field: n,
							validator: Ac
						}, {
							field: s,
							validator: Oc
						});
						const a = {
							file: s.files[0],
							title: n.value,
							artist: e.value,
							difficulty: i
						};
						await async function (t, e, n) {
							try {
								const s = await async function (t, e) {
									const n = new FormData;
									n.append('file', t.file),
										n.append('title', t.title),
										n.append('artist', t.artist),
										n.append('difficulty', t.difficulty);
									const s = await fetch('/api/song', {
										signal: e,
										method: 'post',
										credentials: 'include',
										body: n
									});
									if (e && e.aborted) return {
										songSubmitted: !1,
										song: null
									};
									await fc(s),
										await mc(s);
									const i = {
										songId: (a = await s.json()).id,
										artist: a.artist.name,
										title: a.title,
										defaultTrack: 0,
										tracks: [
										]
									};
									var a;
									return {
										songSubmitted: !!s.ok,
										song: i
									}
								}(e, n);
								if (n && n.aborted) return;
								if (t('upload/song:uploaded', s), s.songSubmitted) {
									const e = await Fu(s.song.songId);
									e && t('navigate', yr(e))
								}
							} catch (e) {
								throw t('upload/song:error', {
									error: e
								}),
								e
							}
						}(t, a, o)
					} catch (t) {
						console.error(t),
							r(t)
					}
					a(!1)
				})(e.current, n.current, s.current, l, o.signal),
					o.abort.bind(o)
			}), [
				e,
				n,
				s,
				l
			]);
		return v('form', {
			noValidate: !0,
			className: df.form,
			onSubmit: u,
			action: ''
		}, v(Gc, {
			error: o
		}), v(Xc, {
			type: 'text',
			label: 'Artist',
			ref: e,
			name: 'artist',
			error: o
		}), v(Xc, {
			type: 'text',
			label: 'Title',
			ref: n,
			name: 'title',
			error: o
		}), v(uf, {
			id: 'select-difficulty',
			label: 'Difficulty',
			name: 'difficulty',
			options: hf,
			selected: l,
			handleChange: t => c(t.currentTarget.value)
		}), v('p', {
			className: df.notice,
			'aria-label': 'hint'
		}, 'We support only Guitar Pro 3, 4, and 5 files at the moment.', v('br', null), 'If you have GP6/7 (.gpx, .gp) tab, please export it to GP5 version first.'), v('p', {
			className: df.notice,
			'aria-label': 'instructions'
		}, v('a', {
			href: 'https://www.guitar-pro.com/en/index.php',
			rel: 'noopener noreferrer',
			target: '_blank'
		}, 'Guitar Pro'), ': File → Export → GP5', v('br', null), v('a', {
			href: 'https://sourceforge.net/projects/tuxguitar',
			rel: 'noopener noreferrer',
			target: '_blank'
		}, 'TuxGuitar'), ': File → Save As → Guitar Pro 5'), v(Au, {
			id: 'tabFile',
			accept: '.gp3, .gp4, .gp5',
			label: 'Guitar Pro Tab',
			ref: s,
			name: 'file',
			error: o,
			isDropFileAvailable: !0
		}), v('div', {
			className: df.actions
		}, v(zc, {
			id: 'submitTab',
			title: 'Submit',
			processing: i
		})))
	};
function ff() {
	return v('svg', {
		width: 189,
		height: 105,
		viewBox: '0 0 189 105'
	}, v('path', {
		d: 'M62 39C63.1046 39 64 38.1046 64 37C64 35.8954 63.1046 35 62 35V39ZM127 35C125.895 35 125 35.8954 125 37C125 38.1046 125.895 39 127 39V35ZM185 38V102H189V38H185ZM186 101H3V105H186V101ZM4 102V38H0V102H4ZM3 39H62V35H3V39ZM127 39H186V35H127V39ZM3 101C3.55228 101 4 101.448 4 102H0C0 103.657 1.34316 105 3 105V101ZM185 102C185 101.448 185.448 101 186 101V105C187.657 105 189 103.657 189 102H185ZM189 38C189 36.3431 187.657 35 186 35V39C185.448 39 185 38.5523 185 38H189ZM4 38C4 38.5523 3.55228 39 3 39V35C1.34315 35 0 36.3431 0 38H4Z',
		fill: '#3A3A3A'
	}), v('path', {
		d: 'M92.5 68C92.5 69.1046 93.3954 70 94.5 70C95.6046 70 96.5 69.1046 96.5 68H92.5ZM95.9142 1.08579C95.1332 0.304738 93.8668 0.304738 93.0858 1.08579L80.3579 13.8137C79.5768 14.5948 79.5768 15.8611 80.3579 16.6421C81.1389 17.4232 82.4052 17.4232 83.1863 16.6421L94.5 5.32843L105.814 16.6421C106.595 17.4232 107.861 17.4232 108.642 16.6421C109.423 15.8611 109.423 14.5948 108.642 13.8137L95.9142 1.08579ZM96.5 68V2.5H92.5V68H96.5Z',
		fill: '#3A3A3A'
	}))
}
const mf = T((() => {
	const {
		dispatch: t,
		uploads: e,
		user: n,
		route: s
	}
		= On('uploads', 'user', 'route');
	eh({
		route: s
	});
	const {
		song: i,
		songSubmitted: a,
		songError: o
	}
		= e,
		{
			isLoggedIn: r
		}
			= n,
		l = !r,
		c = r && !i,
		u = r && i && !o,
		d = u && !a,
		h = u && a;
	return y((() => t('upload/reset')), [
	]),
		v(op, {
			title: 'Submit Tab',
			id: 'submit'
		}, l && v(vp, {
			id: 'submit',
			header: 'Have a tab to share?',
			icon: () => v(ff, null),
			hint: () => v('span', {
			}, 'Please ', v(Qo, {
				to: '/a/wa/signin?next=submit',
				'data-link': 'signin'
			}, 'login'), ' or ', v(Qo, {
				to: '/a/wa/signup?next=submit',
				'data-link': 'signup'
			}, 'register'), ' to submit your tab.')
		}), c && v('section', {
			className: 'ol1u6 Jx31q',
			'data-section': 'submit'
		}, v('h4', {
			className: 'ol1gf Jx2bq'
		}, 'Have a tab to share?', v('br', null), 'Upload it in Guitar Pro format and fill in the fields below.'), v('div', null, v('p', {
			className: 'olqe Jx2om'
		}, 'Your tab will appear on the site in a few minutes,', v('br', null), ' and we\'ll send you an email with a link to it.'), v(pf, null))), d && v('section', {
			className: 'ol1u6 Jx31q',
			'data-section': 'duplicate'
		}, v('h4', {
			className: 'ol1gf Jx2bq'
		}, 'Submitted song already exists on Songsterr.'), v('div', null, v('p', {
			className: 'olqe Jx2om'
		}, 'If you feel that you have a better version, please submit it via Upload New Revision button on existing song\'s page.'), v(Qo, {
			className: Xn.buttonGreen,
			to: yr(i)
		}, 'View existing song'))), h && v('section', {
			className: 'ol1u6 Jx31q',
			'data-section': 'success'
		}, v('h4', {
			className: 'ol1gf Jx2bq'
		}, 'Thanks for contributing to Songsterr!'), v('div', null, v('p', {
			className: 'olqe Jx2om'
		}, 'We are processing your tab and will redirect to it as soon as possible.'), v('div', null, v(Hc, {
			fill: '#777',
			width: 25,
			height: 20
		})))))
})),
	gf = t => {
		!Pn && t.on('@init', (() => ({
			artist: {
				loading: !1,
				id: 0,
				songs: [
				],
				artists: {
				},
				pattern: '',
				filters: xp
			}
		}))),
			t.on('artist/filter', ((t, e) => ({
				artist: Object.assign({
				}, t.artist, {
					pattern: e
				})
			}))),
			t.on('artist/load:processing', ((t, {
				id: e
			}) => t.artist.id !== e ? {
				artist: Object.assign({
				}, t.artist, {
					id: e,
					loading: !0
				})
			}
					: null)),
			t.on('artist/load:done', ((t, {
				id: e,
				songs: n
			}) => {
				if (t.artist.id !== e) return null;
				let s = t.artist.artists;
				return n.length && (s = Object.assign({
				}, s, {
					[
						e
					]: n[0].artist
				})),
				{
					artist: Object.assign({
					}, t.artist, {
						songs: n,
						artists: s,
						loading: !1
					})
				}
			})),
			t.on('artist/load:error', ((t, {
				id: e
			}) => t.artist.id === e ? {
				artist: Object.assign({
				}, t.artist, {
					songs: [
					],
					loading: !1
				})
			}
					: null)),
			t.on('data/loadSong:loadedMeta', ((t, {
				meta: e
			}) => ({
				artist: Object.assign({
				}, t.artist, {
					artists: Object.assign({
					}, t.artist.artists, {
						[
							e.artistId
						]: e.artist
					})
				})
			}))),
			t.on('artist/filter/difficulty', ((t, e) => ({
				artist: Object.assign({
				}, t.artist, {
					filters: Tp(t.artist.filters, e)
				})
			}))),
			t.on('artist/filter/instrument', ((t, e) => ({
				artist: Object.assign({
				}, t.artist, {
					filters: Ip(t.artist.filters, e)
				})
			}))),
			t.on('artist/filter/tuning', ((t, {
				instrument: e,
				tuning: n
			}) => ({
				artist: Object.assign({
				}, t.artist, {
					filters: Ap(t.artist.filters, e, n)
				})
			}))),
			t.on('artist/filter/reset', (t => ({
				artist: Object.assign({
				}, t.artist, {
					filters: xp
				})
			})))
	},
	yf = T((({
		route: t,
		query: e,
		user: n,
		device: s,
		isSmallScreen: i
	}) => {
		const {
			artist: a,
			meta: o,
			track: r,
			dispatch: l
		}
			= On('artist', 'meta', 'track');
		y((() => nh({
			route: t,
			artist: a
		})), [
			a.filters
		]);
		const c = X(),
			u = X();
		qp(c, u, 'ArtistPanel');
		const d = + t.artistId,
			h = a.artists[d] || 'Unknown Artist',
			p = th(a.filters, ''),
			g = `${h}${'' !== p ? ` ${p}` : ''} Tabs`,
			{
				isDesktop: w
			}
				= s,
			{
				hasPlus: b
			}
				= n,
			{
				loading: x,
				pattern: S
			}
				= a,
			k = w && !b;
		y((() => {
			if (a.id !== d) {
				const t = new Wu;
				return async function (t, e, n) {
					try {
						t('artist/load:processing', {
							id: e
						}),
							t('artist/load:done', {
								id: e,
								songs: await async function (t, e) {
									const n = `/api/artist/${t}/songs?size=500`,
										s = await fetch(n, {
											signal: e
										});
									return e && e.aborted ? [
									] : (lc(s), Nu(await s.json()))
								}(e, n)
							})
					} catch (n) {
						t('artist/load:error', {
							id: e,
							error: n
						})
					}
				}(l, d, t.signal),
					t.abort.bind(t)
			}
		}), [
			d
		]);
		const [C,
			_] = f(null),
			E = 'none',
			N = a.filters.instrument,
			L = () => {
				Gd('ALL INSTRUMENTS'),
					l('artist/filter/reset')
			},
			T = a.filters.difficulty,
			I = a.filters.tunings[N] || 'ALL TUNINGS',
			P = 'ALL INSTRUMENTS' !== N && 'GUITAR' !== N;
		let M = Xp(r);
		'ALL INSTRUMENTS' !== N && (M = Gp(N));
		const B = (t, e, n, s) => M(e.instrumentId) && (- 1 === t || e.views > s[t].views) ? n : t,
			D = m((() => Wp(a.songs, B)), [
				a.songs,
				M
			]),
			O = m((() => function (t, e) {
				let n = t;
				if (e && '' !== e) {
					const s = e.toLowerCase().trim().split(' ').filter((t => t));
					n = t.filter((t => {
						const e = t.title.toLowerCase();
						return s.every((t => - 1 !== e.indexOf(t)))
					}))
				}
				return n
			}(D, S)), [
				D,
				S
			]),
			R = m((() => Ep(Np(P ? O : Lp(O, E, T), N), I)), [
				O,
				E,
				T,
				N,
				I
			]),
			j = A((t => {
				l('artist/filter', t),
					Vd(t)
			}), [
			]),
			$ = A((() => {
				L(),
					j('')
			}), [
			]),
			F = Sp.map((n => Xd(n, t, e))),
			H = {
				tuningFilter: I,
				instrumentFilter: N,
				difficultyFilter: T,
				setTuningFilter: t => l('artist/filter/tuning', {
					instrument: N,
					tuning: t
				}),
				setInstrumentFilter: t => {
					Gd(t),
						l('artist/filter/instrument', t)
				},
				setDifficultyFilter: t => l('artist/filter/difficulty', t),
				difficultyFilterNA: P,
				isSmallScreen: i,
				instrumentSEOLinks: F,
				activeFilter: C,
				onFilterClick: t => {
					_(t === C ? null : t)
				}
			},
			z = A((() => {
				_(null)
			}), [
			]);
		return v(op, {
			title: g,
			id: 'artist',
			listId: d,
			styles: zp,
			onClick: z
		}, v(Up, {
		}, v(Qh, {
			inputRef: u,
			value: S,
			isDesktop: w,
			loading: x,
			placeholder: i ? 'Filter tabs' : `Filter ${h} tabs`,
			setValue: j
		}), v(Hp, H), k && v(gp, {
			page: t.page
		})), !x && R.length > 0 && v('div', {
			className: zp.popular,
			'data-list': 'artist',
			ref: c
		}, R.map((t => v(Yh, {
			song: t,
			isActive: o && o.songId === t.songId,
			numerated: !1,
			key: t.songId,
			difficultyNA: P
		})))), !x && 0 === R.length && v('div', {
			className: zp.stubWrapper
		}, v(vp, {
			id: 'notfound',
			header: 'No tabs found',
			headerColor: 'red',
			icon: () => v(yp, null)
		}, Yp({
			numResults: O.length,
			resetFilter: O.length > 0 ? L : $
		}))))
	}));
var vf = {
	panel: 'Cdy7e Cdydg vfvk',
	content: 'Cdy21j vf38'
};
const wf = t => {
	!Pn && t.on('@init', (() => ({
		textpage: {
			slug: '',
			title: '',
			content: '',
			isLoading: !1,
			isError: !1
		}
	}))),
		t.on('textpage/load:processing', ((t, e) => ({
			textpage: {
				slug: e,
				title: '',
				content: '',
				isLoading: !0,
				isError: !1
			}
		}))),
		t.on('textpage/load:done', ((t, e) => ({
			textpage: Object.assign({
			}, e, {
				isLoading: !1,
				isError: !1
			})
		}))),
		t.on('textpage/load:error', (t => ({
			textpage: Object.assign({
			}, t.textpage, {
				title: '',
				content: '',
				isLoading: !1,
				isError: !0
			})
		})))
},
	bf = {
		privacy: 'Privacy Policy',
		terms: 'Terms Of Service',
		dnsmpd: 'Do Not Sell My Personal Information'
	};
class xf extends x {
	render() {
		eh(this.props);
		const {
			textpage: t,
			experiments: e
		}
			= On('textpage', 'experiments');
		if (Pn) {
			const t = p(Bn);
			y((() => {
				!async function (t, e) {
					const n = t.get().textpage;
					if (n.slug !== e || n.isError) try {
						t.dispatch('textpage/load:processing', e);
						const n = await async function (t) {
							const e = '/api/textpage/' + t,
								n = await fetch(e);
							return lc(n),
								n.json()
						}(e);
						n.slug === t.get().textpage.slug && t.dispatch('textpage/load:done', n)
					} catch (n) {
						console.log(e, t.get().textpage.slug),
							e === t.get().textpage.slug && t.dispatch('textpage/load:error', n)
					}
				}(t, this.props.route.page)
			}), [
				this.props.route.page
			]),
				y((() => {
					const n = document.getElementById('manage-consent');
					n && n.addEventListener('click', (function () {
						'on' === e.googlefc ? window && window.googlefc && window.googlefc.showRevocationMessage ? window.googlefc.showRevocationMessage() : alert('Something Went Wrong. Please refresh page.') : t.dispatch('consent/toggle', void 0)
					}))
				}), [
				])
		}
		return v(op, {
			title: t.title || bf[t.slug] || 'Placeholder',
			id: t.slug,
			styles: vf
		}, v('div', {
			className: 'ol1u6 vw2mu'
		}, t.isLoading && v(Wh, {
			level: 'info',
			title: 'Loading...',
			reason: 'textpage_loading'
		}), t.isError && v(Wh, {
			level: 'info',
			title: 'Something went wrong',
			action: 'Please, try to reload page.',
			reason: 'textpage_error'
		}), !t.isLoading && !t.isError && v('div', {
			className: 'vwrb',
			dangerouslySetInnerHTML: {
				__html: t.content
			}
		})))
	}
}
var Sf = '/static/media/signature.3ede03cb.svg',
	kf = {
		hidden: 'Cjj2pa',
		top: 'Cjjjv',
		up: 'Cjj2o4',
		HowToReadTabPanel: 'Cjjax',
		HelpPanel: 'Cjj1ei',
		tocArrow: 'Cjj16h'
	};
const Cf = (t = 'top') => v('a', {
	id: t,
	className: kf.hidden
}),
	_f = (t, e = '#top') => v('div', {
		className: kf.top
	}, v('a', {
		href: e,
		className: `${kf.up} ${kf[t]}`
	}, v('svg', {
		width: 54,
		height: 54,
		viewBox: '0 0 54 54',
		'aria-labelledby': 'help-toc'
	}, v('defs', null, v('filter', {
		id: 'toc_shadow',
		width: '200%',
		height: '200%',
		x: '-50%',
		y: '-50%'
	}, v('feGaussianBlur', {
		stdDeviation: 2.1468,
		in: 'SourceGraphic'
	}), v('feOffset', {
		dy: 2,
		result: 'toca'
	}), v('feFlood', {
		'flood-color': '#000000',
		'flood-opacity': 0.15
	}), v('feComposite', {
		in2: 'toca',
		operator: 'in',
		result: 'tocb'
	}), v('feBlend', {
		in: 'SourceGraphic',
		in2: 'tocb',
		mode: 'normal'
	}))), v('title', {
		id: 'help-toc'
	}, 'Table of Content'), v('circle', {
		cx: 27,
		cy: 27,
		r: 20,
		filter: 'url(#toc_shadow)'
	}), v('path', {
		className: kf.tocArrow,
		d: 'M27 20v14m-7-7l7-7 7 7',
		'stroke-width': 2,
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round'
	}))));
var Ef = {
	exitActive: 'mc1iw',
	enterActive: 'mc30d',
	enter: 'mc1lp',
	exit: 'mc291'
};
function Nf(t) {
	return v(Gn, Object.assign({
	}, t, {
		timeout: {
			enter: 300,
			exit: 0
		},
		animationStyles: Ef
	}), v('section', {
		className: t.className,
		'data-section': t['data-section']
	}, t.children))
}
function Lf({
	id: t,
	className: e,
	children: n,
	href: s
}) {
	let i = s;
	if (!i) {
		const {
			data: t,
			meta: e
		}
			= On('data', 'meta');
		i = yr(e, t.partId, t.revisionId)
	}
	return v(Qo, {
		id: t,
		to: i,
		className: e || Xn.buttonGreen
	}, n || 'Click here to continue')
}
const Tf = [
	'signin',
	'signup',
	'subscribePlus',
	'updateCard',
	'help'
];
function If() {
	if (Pn) return up(`https://www.google.com/recaptcha/api.js?render=${window.__RECAPTCHA_KEY__}`, '__LOADED_RECAPTCHA__')
}
async function Af(t) {
	if (Pn) try {
		return window.grecaptcha || await If(),
			await window.grecaptcha.execute(window.__RECAPTCHA_KEY__, {
				action: t
			})
	} catch (t) {
	}
}
function Pf() {
	If();
	const {
		data: t,
		meta: e,
		user: n,
		experiments: s,
		device: i
	}
		= On('data', 'meta', 'user', 'experiments', 'device'),
		{
			isLoggedIn: a,
			profile: o
		}
			= n,
		r = yr(e, t.partId, t.revisionId);
	On();
	const [l,
		c] = f({
			error: null,
			next: !1,
			processing: !1
		}),
		u = X(),
		d = X(),
		h = X(),
		p = l.error,
		m = A((async t => {
			t.preventDefault();
			let e = '',
				n = '',
				l = '';
			try {
				const t = [
				];
				if (a) n = o.name,
					e = o.email;
				else {
					const s = u.current;
					s && (t.push({
						field: s,
						validator: Bc
					}), n = s.value);
					const i = d.current;
					i && (t.push({
						field: i,
						validator: Ic
					}), e = i.value)
				}
				const p = h.current;
				p && (t.push({
					field: p,
					validator: Dc
				}), l = p.value),
					Fc(...t),
					c({
						error: null,
						processing: !0,
						next: !1
					});
				const f = {
					page: wr(r),
					productName: 'SRW',
					'Operating System': i.os,
					DeviceType: i.type,
					Useragent: window.navigator && window.navigator.userAgent
				};
				for (const t in s) Object.prototype.hasOwnProperty.call(s, t) && (f[`Experiment: ${t}`] = s[t]);
				if (!(await async function (t) {
					const e = {
						'X-Recaptcha-Token': await Af('feedback')
					},
						n = await rc('/feedback/web', t, e);
					return await hc(n),
						lc(n),
						n
				}({
					name: n,
					subject: 'message from website',
					email: e,
					message: l,
					properties: f
				})).ok) return void c({
					error: new nc({
						summary: 'Something Went Wrong, please try again later'
					}),
					processing: !1,
					next: !1
				});
				c({
					processing: !1,
					error: null,
					next: !0
				})
			} catch (t) {
				c({
					error: t,
					processing: !1,
					next: !1
				})
			}
		}), [
			a,
			o,
			r
		]),
		g = l.next ? v(Nf, {
			key: 'done',
			className: 'ol1u6 Cv02g0',
			'data-section': 'done'
		}, v('h4', {
			className: 'Cxq1pl'
		}, 'Thanks for reaching out!'), v('h5', {
			className: 'Cxq1pl Cxq211'
		}, 'We will get back to you soon'), v(Lf, null)) : v(Nf, {
			key: 'help',
			className: 'ol1u6 Cv01j7',
			'data-section': 'form'
		}, v('h2', {
			className: 'Cv020y',
			id: 'contact-us'
		}, 'Have not found the answer? Write to us!'), v('form', {
			noValidate: !0,
			onSubmit: m
		}, v(Gc, {
			error: p
		}), v(Xc, {
			ref: u,
			name: 'name',
			type: 'name',
			label: 'Name',
			placeholder: 'Name',
			defaultValue: a ? o.name : '',
			autocomplete: 'name',
			readonly: a,
			error: p
		}), v(Xc, {
			ref: d,
			name: 'email',
			type: 'email',
			label: 'Email',
			defaultValue: a ? o.email : '',
			placeholder: 'Email',
			autocomplete: 'email',
			readonly: a,
			error: p
		}), v(Xc, {
			ref: h,
			type: 'textarea',
			name: 'summary',
			label: 'Questions',
			placeholder: 'How can we help you?',
			error: p
		}), v('div', {
			className: 'Cv0jn'
		}, v(zc, {
			title: 'Send',
			processing: l.processing
		}), v(Lf, {
			className: Xn.buttonLinkFloat
		}, 'Cancel'))));
	return v(Un, null, g)
}
const Mf = t => {
	!Pn && t.on('@init', (() => ({
		faq: {
			content: void 0,
			isLoading: !1,
			isError: !1
		}
	}))),
		t.on('faq/load:processing', (t => ({
			faq: {
				content: void 0,
				isLoading: !0,
				isError: !1
			}
		}))),
		t.on('faq/load:done', ((t, e) => {
			if ('on' !== t.experiments.drawing) {
				const t = e.find((t => 'songsterr-player' === t.id));
				if (t) {
					const e = t.records.findIndex((t => 'how-to-use-markups' === t.id));
					- 1 !== e && (t.records = t.records.slice(0, e).concat(t.records.slice(e + 1)))
				}
			}
			return {
				faq: {
					content: e,
					isLoading: !1,
					isError: !1
				}
			}
		})),
		t.on('faq/load:error', (t => ({
			faq: {
				content: void 0,
				isLoading: !1,
				isError: !0
			}
		})))
},
	Bf = (t, e) => 'string' == typeof t ? e.test(t) : Array.isArray(t) ? t.some((t => Bf(t, e))) : !(!t.props || !t.props.children) && Bf(t.props.children, e);
function Df(t) {
	if (void 0 === t) return [];
	function e(t) {
		if (null === t) return '';
		if (Array.isArray(t)) return t.map((t => e(t)));
		if ('string' == typeof t) return t;
		if (t.tag) {
			let n = {
			};
			if ('a' === t.tag) {
				if (t.attrs.href && t.attrs.href.startsWith('/')) return v(Qo, Object.assign({
				}, t.attrs), e(t.children));
				n = {
					rel: 'noopener noreferrer',
					target: '_blank'
				}
			}
			return v(`${t.tag}`, Object.assign({
			}, t.attrs, n), e(t.children))
		}
	}
	return t && t.map((t => Object.assign({
	}, t, {
		records: t.records.map((t => Object.assign({
		}, t, {
			answer: t.answer.map((t => e(t)))
		})))
	})))
}
var Of = T((t => {
	eh(t);
	const {
		device: {
			isPhone: e
		}
	}
		= t,
		{
			faq: {
				content: n,
				isLoading: s,
				isError: i
			}
		}
			= On('faq');
	if (Pn) {
		const t = p(Bn);
		y((() => {
			!async function (t) {
				if (void 0 === t.get().faq.content) try {
					t.dispatch('faq/load:processing');
					const e = await async function () {
						const t = await fetch('/api/faq/compact');
						return lc(t),
							(await t.json()).filter((t => t.isSRW))
					}();
					t.dispatch('faq/load:done', e)
				} catch (e) {
					t.dispatch('faq/load:error', e)
				}
			}(t)
		}), [
		])
	}
	const a = m((() => Df(n)), [
		n
	]),
		o = X(),
		r = X(),
		[
			l,
			c
		] = f(a[0] && a[0].id),
		[
			u,
			d
		] = f(''),
		h = m((() => {
			if (u.length) {
				const t = new RegExp(u.replace(/[^\w\d ]/gi, '').split(' ').filter((t => t)).map((t => t.trim())).join('|'), 'i');
				return a.map((e => {
					const n = e.records.filter((e => t.test(e.question) || Bf(e.answer, t)));
					return n.length > 0 ? Object.assign({
					}, e, {
						records: n
					}) : null
				})).filter(Boolean)
			}
			return a
		}), [
			a,
			u
		]),
		g = m((() => h.length && h.every((t => t.id !== l)) ? h[0].id : l), [
			h,
			l
		]),
		w = t => e && u || g === t.id ? 'k82y9 k82a8' : 'k82y9',
		b = h.length && h.find((t => t.id === g)).records.length - h.length,
		x = b > 0 && `margin-bottom:${25 * b}px`;
	return v(op, {
		title: 'FAQ',
		id: 'help',
		styles: vf
	}, Cf('toc'), !i && v('div', {
		className: 'k8pi'
	}, v(Qh, {
		className: Kh.staticSearch,
		value: u,
		setValue: d,
		isDesktop: !0,
		loading: s,
		inputRef: r,
		placeholder: 'How can we help?'
	})), s && v(Hc, {
		id: 'faq-loader',
		fill: '#777',
		width: 35,
		height: 35,
		style: {
			margin: '30px auto'
		}
	}), _f('HelpPanel', '#toc'), ((t = '#contact-us') => v('div', {
		className: 'B632le'
	}, v('a', {
		href: t,
		className: 'B632ms'
	}, v('svg', {
		width: 54,
		height: 54,
		viewBox: '0 0 54 54',
		'aria-labelledby': 'help-contact-us'
	}, v('defs', null, v('filter', {
		id: 'contact_shadow',
		width: '200%',
		height: '200%',
		x: '-50%',
		y: '-50%'
	}, v('feGaussianBlur', {
		stdDeviation: 2.1468,
		in: 'SourceGraphic'
	}), v('feOffset', {
		dy: 2,
		result: 'contacta'
	}), v('feFlood', {
		'flood-color': '#000000',
		'flood-opacity': 0.15
	}), v('feComposite', {
		in2: 'contacta',
		operator: 'in',
		result: 'contactb'
	}), v('feBlend', {
		in: 'SourceGraphic',
		in2: 'contactb',
		mode: 'normal'
	}))), v('title', {
		id: 'help-contact-us'
	}, 'Contact Us'), v('circle', {
		cx: 27,
		cy: 27,
		r: 20,
		filter: 'url(#contact_shadow)'
	}), v('path', {
		className: 'B63134',
		d: 'M36.1 18.5H17.8c-1.2 0-2 .8-2 2v13.1c0 1.1.8 1.9 2 1.9h18.3c1.2 0 2.1-.8 2.1-1.9V20.5c0-1.2-.9-2-2.1-2zm-.1 1.3l-9 8.9-9-8.9h18zM17.1 33.3V20.7l6.3 6.3-6.3 6.3zm.9.9l6.3-6.3 2.2 2.2c.3.3.8.3 1 0l2.1-2.2 6.4 6.3H18zm18.8-.9L30.6 27l6.2-6.3v12.6z',
		'fill-width': 2
	})))))('#contact-us'), h.length > 0 && v('nav', {
		className: 'k81ms',
		id: 'faq-toc'
	}, v('ul', {
		className: 'k826a',
		ref: o,
		style: x
	}, v('li', {
		className: 'k82y9'
	}, v(Qo, {
		to: '/a/wa/howtoreadtab',
		'data-link': 'how to read tab',
		className: 'k81s2'
	}, 'How to Read a Tab')), h.map((t => v('li', {
		className: w(t),
		id: t.id
	}, v('button', {
		onClick: () => {
			c(t.id)
		}
	}, t.section), v('ul', {
		className: 'k82dz',
		style: x ? 'display:block; padding: 0;' : ''
	}, t.records.map((t => v('li', {
		className: 'k8oc'
	}, v('a', {
		href: '#' + t.id
	}, t.question)))))))))), v('section', {
		'data-section': 'qa',
		className: 'k81gq',
		itemscope: !0,
		itemtype: 'https://schema.org/FAQPage'
	}, h.map((t => v('article', {
		className: 'k84s'
	}, v('h2', {
		className: 'k8286'
	}, v('span', null, t.section)), v('ul', null, t.records.map((t => v('li', {
		className: 'k8327',
		itemscope: !0,
		itemprop: 'mainEntity',
		itemtype: 'https://schema.org/Question'
	}, v('a', {
		className: 'k824x',
		id: t.id
	}, t.id), v('h3', {
		className: 'k81ai',
		itemprop: 'name'
	}, t.question), v('div', {
		className: 'k81ch',
		itemscope: !0,
		itemprop: 'acceptedAnswer',
		itemtype: 'https://schema.org/Answer'
	}, v('div', {
		itemprop: 'text'
	}, t.answer), 'How to use markups?' === t.question && v('img', {
		src: '/static/media/markup.43c548bc.png',
		width: 650,
		height: 287,
		alt: 'Markup demo',
		itemprop: 'image',
		itemscope: !0,
		itemtype: 'https://schema.org/ImageObject'
	}))))))))), !i && !s && !h.length && v('div', {
		className: 'k8j5',
		id: 'faq-noanswers'
	}, 'No answers found'), i && v('div', {
		id: 'faq-network-error',
		className: 'k8j5'
	}, 'Sorry, but there are some problems with network.', v('br', {
	}), 'Please, try to reload page')), v(Pf, null))
}));
class Rf extends x {
	render() {
		const t = this.props.className;
		return v('svg', {
			width: 26,
			height: 26,
			viewBox: '0 0 26 26',
			className: t
		}, v('g', {
			fill: 'none',
			fillRule: 'evenodd'
		}, v('rect', {
			width: '26',
			height: '26',
			fill: '#FFF',
			rx: '3'
		}), v('g', {
			fill: '#000'
		}, v('path', {
			fill: '#EA4335',
			d: 'M13 7.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C17.46 4.89 15.43 4 13 4 9.48 4 6.44 6.02 4.96 8.96l2.91 2.26C8.6 9.05 10.62 7.48 13 7.48z'
		}), v('path', {
			fill: '#4285F4',
			d: 'M21.64 13.2c0-.74-.06-1.28-.19-1.84H13v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z'
		}), v('path', {
			fill: '#FBBC05',
			d: 'M7.88 14.78a5.54 5.54 0 0 1-.3-1.78c0-.62.11-1.22.29-1.78L4.96 8.96A9.008 9.008 0 0 0 4 13c0 1.45.35 2.82.96 4.04l2.92-2.26z'
		}), v('path', {
			fill: '#34A853',
			d: 'M13 22c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74l-2.91 2.26C6.45 19.98 9.48 22 13 22z'
		}), v('path', {
			fill: 'none',
			d: 'M4 4h18v18H4z'
		}))))
	}
}
const jf = ({
	onClick: t,
	processing: e,
	disabled: n,
	title: s,
	id: i
}) => v('button', {
	id: i,
	className: Xn.google,
	onClick: t,
	disabled: n || e
}, e && v(Hc, {
	width: 25,
	height: 20,
	fill: '#fff',
	className: 'Csrjl'
}), !e && v(Rf, {
	className: Xn.googleIcon
}), v('span', null, s));
async function $f() {
	window.__INITIALIZED_GAPI__ || (await up('https://apis.google.com/js/client.js', '__LOADED_GAPI__'), await new Promise(((t, e) => {
		if (!window.gapi) return e(new Error('No window.gapi'));
		window.gapi.load('client:auth2', {
			callback: function () {
				setTimeout((function () {
					if (!window.gapi || !window.gapi.client) return e(new Error('No window.gapi.client'));
					window.__INITIALIZED_GAPI__ = !0,
						window.gapi.client.init({
							clientId: window.__GOOGLE_CLIENT_ID__,
							scope: 'profile email'
						}).then(t, e)
				}), 1)
			},
			onerror: e
		})
	})))
}
const Ff = 'Oops, something went wrong. Please try again later';
function Hf(t) {
	if (!(t instanceof Error) && t.error) switch (t.error.toLowerCase()) {
		case 'popup_closed_by_user':
			return null;
		case 'idpiframe_initialization_failed':
			return t.details ? new Error(t.details) : new Error(Ff);
		case 'popup_blocked_by_browser':
			return new Error('Pop-up blocked by browser. Please try again');
		case 'access_denied':
			return new Error('Access was not granted. Please try again');
		default:
			return new Error(Ff)
	}
	return new Error(Ff)
}
var zf = Rn(class extends x {
	constructor() {
		super(...arguments),
			this.email = I(),
			this.password = I(),
			this.state = {
				error: null,
				processing: !1,
				googleError: null,
				googleInitialized: !1,
				googleProcessing: !1
			},
			this.redirect = () => {
				const {
					next: t
				}
					= this.props.query;
				t && t.includes('/mailer/') ? window.location.replace(window.location.origin + t) : this.props.dispatch('navigate', br(t))
			},
			this.handleSignin = async t => {
				t.preventDefault();
				const e = this.email && this.email.current,
					n = this.password && this.password.current;
				if (e && n) try {
					Fc({
						field: e,
						validator: Ic
					}, {
						field: n,
						validator: Rc
					}),
						this.setState({
							processing: !0,
							error: null
						});
					const t = await async function (t, e) {
						const n = {
							'X-Recaptcha-Token': await Af('signin')
						},
							s = {
								email: t,
								password: e
							},
							i = await rc('/auth/signin', s, n);
						return await hc(i),
							uc(i, 'Invalid email or password'),
							await cc(i, 'signin'),
							lc(i),
							Pu(await i.json())
					}(e.value, n.value);
					this.props.dispatch('user/signIn', t),
						this.setState({
							processing: !1,
							error: null
						}),
						this.redirect()
				} catch (t) {
					this.setState({
						processing: !1,
						error: t
					})
				}
			},
			this.handleGoogleSignin = async t => {
				t.preventDefault();
				try {
					this.setState({
						googleProcessing: !0,
						googleError: null
					});
					const t = await async function (t) {
						await $f();
						const e = window.gapi;
						return await e.auth2.getAuthInstance().signIn(),
							async function (t, e) {
								const n = `/auth/google-token?id_token=${t}`,
									s = await fetch(n, {
										credentials: 'include',
										method: 'get'
									});
								return uc(s, 'Invalid email or password'),
									lc(s),
								{
									profile: Pu(await s.json()),
									isCreated: 201 === s.status
								}
							}(e.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token)
					}(this.props.consent.profiling);
					this.props.dispatch('user/googleSignIn', t),
						this.setState({
							googleProcessing: !1,
							googleError: null
						}),
						this.redirect()
				} catch (t) {
					const e = Hf(t);
					this.setState({
						googleProcessing: !1,
						googleError: e
					})
				}
			}
	}
	componentDidMount() {
		(async function () {
			try {
				await $f()
			} catch (t) {
				'idpiframe_initialization_failed' !== t.error && console.error(t)
			}
		})().then((() => {
			this.setState({
				googleInitialized: !0
			})
		}))
	}
	render() {
		eh(this.props);
		const t = this.props.query.next,
			e = t ? `?next=${encodeURIComponent(t)}` : '',
			{
				googleInitialized: n,
				googleError: s,
				googleProcessing: i
			}
				= this.state;
		return v(op, {
			title: 'Sign In',
			id: 'signin'
		}, v(S, null, v('section', {
			className: 'ol1u6 z9263',
			'data-section': 'google'
		}, v('form', {
			noValidate: !0,
			onSubmit: this.handleGoogleSignin
		}, v(Gc, {
			error: s
		}), v(jf, {
			id: 'google-signin',
			title: n ? 'Continue with Google' : 'Loading...',
			onClick: this.handleGoogleSignin,
			processing: i,
			disabled: !n
		}))), v('section', {
			className: 'ol1u6 z925t',
			'data-section': 'signin'
		}, v('div', {
			className: 'z910q'
		}, v('span', null, 'or')), v(Gc, {
			error: this.state.error
		}), v('form', {
			noValidate: !0,
			onSubmit: this.handleSignin,
			action: ''
		}, v(Xc, {
			ref: this.email,
			name: 'email',
			type: 'email',
			placeholder: 'Email',
			error: this.state.error,
			autocomplete: 'email'
		}), v(Xc, {
			ref: this.password,
			name: 'password',
			type: 'password',
			placeholder: 'Password',
			error: this.state.error,
			autocomplete: 'current-password'
		}), v(zc, {
			id: 'signin',
			title: 'Sign in',
			processing: this.state.processing
		}))), v('section', {
			className: 'ol1u6 z91o2',
			'data-section': 'forgot'
		}, v(Qo, {
			to: '/a/wa/forgotPassword',
			className: Xn.buttonLink
		}, 'Forgot your password?')), v('section', {
			className: 'ol1u6 z915g',
			'data-section': 'signup'
		}, v('h3', {
			className: 'ol1gf z912'
		}, 'Don\'t have an account?'), v(Qo, {
			to: '/a/wa/signup' + e,
			id: 'create_acc',
			className: Xn.buttonGreen
		}, 'Sign up'))))
	}
}, 'consent'),
	qf = Rn(class extends x {
		constructor(t) {
			super(t),
				this.name = I(),
				this.email = I(),
				this.password = I(),
				this.terms = I(),
				this.handleCreate = async t => {
					t.preventDefault();
					const e = this.name.current,
						n = this.email.current,
						s = this.password.current,
						i = this.terms.current;
					try {
						Fc({
							field: e,
							validator: Bc
						}, {
							field: n,
							validator: Ic
						}, {
							field: s,
							validator: Rc
						}, {
							field: i,
							validator: jc
						}),
							this.setState({
								processing: !0,
								error: null
							});
						const t = await async function (t, e, n, s) {
							const i = {
								'X-Recaptcha-Token': await Af('signup')
							},
								a = {
									name: t,
									email: e,
									password: n
								},
								o = await rc('/auth/signup', a, i);
							return await hc(o),
								await pc(o),
								await cc(o, 'signup'),
								uc(o, 'Disposable email domain detected. Please, use different email.'),
								lc(o),
								Pu(await o.json())
						}(e.value, n.value, s.value, this.props.consent.profiling);
						this.props.dispatch('user/signUp', t),
							this.setState({
								processing: !1,
								error: null
							}),
							this.props.dispatch('navigate', br(this.props.query.next))
					} catch (t) {
						this.setState({
							processing: !1,
							error: t
						})
					}
				},
				this.loadContent = () => {
					this.setState(this.state)
				},
				this.state = {
					error: null,
					processing: !1
				}
		}
		render() {
			eh(this.props),
				If();
			const t = this.props.query.next,
				e = t ? `?next=${encodeURIComponent(t)}` : '',
				{
					error: n,
					processing: s
				}
					= this.state;
			return v(op, {
				title: 'Sign Up',
				id: 'signup'
			}, v('section', {
				className: 'ol1u6 zgqj',
				'data-section': 'signup'
			}, v('h3', {
				className: 'ol1gf zg1xo'
			}, 'Sign up for a free Songsterr Account'), v(Gc, {
				error: n
			}), v('form', {
				noValidate: !0,
				onSubmit: this.handleCreate,
				action: ''
			}, v(Xc, {
				ref: this.name,
				name: 'name',
				type: 'text',
				placeholder: 'Name',
				error: n,
				autocomplete: 'name'
			}), v(Xc, {
				ref: this.email,
				name: 'email',
				type: 'email',
				placeholder: 'Email',
				error: n,
				autocomplete: 'email'
			}), v(Xc, {
				ref: this.password,
				name: 'password',
				type: 'password',
				placeholder: 'Password',
				error: n,
				autocomplete: 'new-password'
			}), v('div', {
				className: 'zg2vm'
			}, v('label', {
				className: 'zg1ib'
			}, v('input', {
				ref: this.terms,
				name: 'terms',
				type: 'checkbox'
			}), v('span', {
				className: 'zg1bt'
			}, 'I agree to the ', v('a', {
				href: '/a/wa/terms',
				target: '_blank',
				rel: 'license'
			}, 'Terms'), ' and ', v('a', {
				href: '/a/wa/privacy',
				target: '_blank',
				rel: 'privacy'
			}, 'Privacy policy'), '.'))), v('div', {
				className: 'zg244'
			}, v(zc, {
				id: 'signup',
				title: 'Create an account',
				processing: s
			}), v(Qo, {
				to: '/a/wa/signin' + e,
				className: Xn.buttonLinkFloat,
				rel: 'prev'
			}, 'Cancel')))))
		}
	}, 'user', 'consent');
function Uf() {
	const {
		dispatch: t,
		store: e
	}
		= On(),
		{
			payment: n
		}
			= e.get();
	y((() => {
		Wf(n, t)
	}), [
	])
}
async function Wf(t, e) {
	if (!t.dropin.loading && !t.dropin.ready) try {
		e('dropin/init:processing');
		const t = async function () {
			const t = await fetch('/auth/billing/token', {
				method: 'get',
				credentials: 'include'
			});
			return await pc(t),
				lc(t),
				t.json()
		}(),
			n = import('./dropin.fd2d6768.js'),
			[
				s,
				i
			] = await Promise.all([n,
				t]);
		e('dropin/init:done', {
			module: s,
			token: i
		})
	} catch (t) {
		e('dropin/init:error', t)
	}
}
const Vf = t => {
	!Pn && t.on('@init', (() => ({
		payment: {
			dropin: {
				loading: !1,
				ready: !1,
				error: null,
				module: null,
				token: null
			}
		}
	}))),
		t.on('dropin/init:processing', (t => ({
			payment: {
				dropin: Object.assign({
				}, t.payment.dropin, {
					loading: !0,
					ready: !1
				})
			}
		}))),
		t.on('dropin/init:done', ((t, {
			module: e,
			token: n
		}) => ({
			payment: {
				dropin: Object.assign({
				}, t.payment.dropin, {
					loading: !1,
					ready: !0,
					error: null,
					module: e,
					token: n
				})
			}
		}))),
		t.on('dropin/init:error', ((t, e) => ({
			payment: {
				dropin: Object.assign({
				}, t.payment.dropin, {
					error: e,
					loading: !1
				})
			}
		}))),
		t.on('user/signOut', (t => ({
			payment: {
				dropin: {
					loading: !1,
					ready: !1,
					module: null,
					token: null,
					error: null
				}
			}
		}))),
		t.on('user/signIn', (e => Wf(e.payment, t.dispatch))),
		t.on('user/signUp', (e => Wf(e.payment, t.dispatch))),
		t.on('user/googleSignIn', (e => Wf(e.payment, t.dispatch)))
};
function Gf() {
	const {
		dispatch: t
	}
		= On(),
		[
			e,
			n
		] = f(!1),
		[
			s,
			i
		] = f(null),
		a = A((async e => {
			i(null),
				n(!0),
				e.preventDefault();
			try {
				t('user/profile', await async function () {
					const t = await rc('/auth/promo/sra');
					return uc(t, 'Can not be applied'),
						await async function (t) {
							if (409 === t.status) {
								const e = await t.json();
								throw new nc({
									__all__: e.message
								}, e.message)
							}
						}(t),
						await pc(t),
						await dc(t),
						lc(t),
						Pu(await t.json())
				}()),
					t('curiosity/conversion', {
						event: 'Activated android promo'
					})
			} catch (e) {
				i(e),
					t('curiosity/error', {
						error: 'Android Promo',
						message: e.message
					})
			}
			n(!1)
		}), [
		]);
	return v('form', {
		noValidate: !0,
		onSubmit: a,
		action: ''
	}, v(Gc, {
		error: s
	}), v('div', {
		className: 'Bg42w6'
	}, v(zc, {
		id: 'startAndroidPromo',
		title: 'Start free trial',
		processing: e
	})))
}
var Xf = Rn(class extends x {
	constructor(t) {
		super(t),
			this.name = I(),
			this.email = I(),
			this.onUpgradeClick = () => {
				this.props.dispatch('curiosity/setConversionProps', {
					'Last referring link': 'AccountPanel Upgrade Link'
				})
			},
			this.onCancelClick = () => {
			},
			this.handleSignOut = async t => {
				t.preventDefault();
				try {
					this.setState({
						signoutProcessing: !0,
						signoutError: null
					}),
						await async function () {
							const t = await fetch('/auth/signout', {
								method: 'post',
								credentials: 'include'
							});
							if (403 === t.status) throw new Error('You already signed out. Please refresh page');
							return lc(t),
								t.json()
						}(),
						this.props.dispatch('user/signOut'),
						async function () {
							try {
								await $f();
								const t = window.gapi;
								t.auth2.getAuthInstance().isSignedIn.get() && await t.auth2.getAuthInstance().signOut()
							} catch (t) {
							}
						}(),
						this.setState({
							signoutProcessing: !1,
							signoutError: null
						}),
						this.props.dispatch('navigate', '/a/wa/signin')
				} catch (t) {
					this.setState({
						signoutProcessing: !1,
						signoutError: t
					})
				}
			},
			this.handleSave = async t => {
				t.preventDefault();
				const e = this.name.current,
					n = this.email.current;
				try {
					Fc({
						field: e,
						validator: Bc
					}, {
						field: n,
						validator: Ic
					}),
						this.setState({
							processing: !0,
							error: null
						});
					const t = await async function (t, e) {
						const n = {
							name: t,
							email: e
						},
							s = await rc('/auth/change', n);
						return await pc(s),
							lc(s),
							Pu(await s.json())
					}(e.value, n.value);
					this.props.dispatch('user/profile', t),
						this.setState({
							processing: !1,
							error: null
						})
				} catch (t) {
					this.setState({
						processing: !1,
						error: t
					})
				}
			},
			this.state = {
				error: null,
				processing: !1,
				signoutError: null,
				signoutProcessing: !1
			}
	}
	render() {
		eh(this.props),
			Uf();
		const {
			hasPlus: t,
			hasSubscription: e,
			isLoggedIn: n,
			profile: s
		}
			= this.props.user;
		if (!n) return v(op, {
			title: 'Account',
			id: 'account'
		}, v('div', {
			className: 'Panel-inner'
		}));
		const {
			planCancelDate: i,
			planEndDate: a,
			name: o,
			email: r,
			isLegacyPayPal: l,
			isAndroidLifetime: c,
			plan: u
		}
			= s,
			d = c && !t ? 'Android Lifetime' : u,
			h = c && !t,
			p = c && t && !s.subscription,
			f = e && !i,
			m = !t && !c,
			g = f || m,
			y = t && a;
		return v(op, {
			title: 'Account',
			id: 'account'
		}, v('div', {
			className: 'Panel-inner'
		}, v('section', {
			className: 'ol1u6 C2d7m',
			'data-section': 'update'
		}, v('form', {
			noValidate: !0,
			onSubmit: this.handleSave,
			action: ''
		}, v(Gc, {
			error: this.state.error
		}), v(Xc, {
			type: 'text',
			label: 'Name',
			ref: this.name,
			name: 'name',
			defaultValue: o,
			error: this.state.error,
			autocomplete: 'name'
		}), v(Xc, {
			type: 'email',
			label: 'Email',
			ref: this.email,
			name: 'email',
			defaultValue: r,
			error: this.state.error,
			autocomplete: 'email'
		}), v(Qo, {
			to: '/a/wa/account/password',
			className: 'C2d1q5',
			'data-link': 'password'
		}, 'Change password'), v('div', {
			className: 'C2d1zt'
		}, v(zc, {
			title: 'Save',
			processing: this.state.processing
		})))), v('section', {
			className: 'ol1u6 C2dm0',
			'data-section': 'profile'
		}, v('div', {
			className: 'fa1vk C2d20d C2d2wc',
			'data-input': 'type'
		}, v('aside', {
			className: 'Bvq2sa fa24z C2dr C2d2yi'
		}, v('div', {
			className: 'Bvq8m faiw C2d1ok',
			'data-label': 'type'
		}, 'Account Type')), v('div', {
			className: 'C2d2f4',
			'data-value': 'type'
		}, d), v('aside', {
			className: 'Bvq2sa fa24z C2dr C2d2yi'
		})), h && v('div', {
			className: 'olqe C2d2g5 C2d1x6',
			'data-label': 'android-notice'
		}, v('p', null, 'You have all the features unlocked for the ', v(ar, {
			os: 'Android',
			extra: {
				source: 'account'
			}
		}, 'Songsterr Android'), ' app.'), v('p', null, v(Qo, {
			id: 'upgradeFromAndroid',
			to: '/a/wa/plus',
			onClick: this.onUpgradeClick
		}, 'Upgrade to PLUS'), ' to get all the features across all the platforms, or start a one month free trial.', v(Gf, null))), p && v('div', {
			className: 'olqe C2d2g5 C2d1x6',
			'data-label': 'android-notice'
		}, v('p', null, 'This is a one month free trial.')), g && v('div', {
			className: 'fa1vk C2d20d C2d2wc',
			'data-input': 'type'
		}, v('aside', {
			className: 'Bvq2sa fa24z C2dr'
		}), v('div', {
			className: 'C2d1q5'
		}, m && v(Qo, {
			id: 'upgradeToPlus',
			to: '/a/wa/plus',
			className: 'C2d31w',
			onClick: this.onUpgradeClick
		}, 'Upgrade to PLUS'), f && v(Qo, {
			id: 'cancelSubscription',
			to: '/a/wa/account/subscription',
			className: 'C2d31w',
			onClick: this.onCancelClick,
			'data-link': 'cancel'
		}, 'Cancel subscription')), v('aside', {
			className: 'Bvq2sa fa24z C2dr'
		})), y && v('div', null, v('div', {
			className: 'fa1vk C2d20d C2d1d9',
			'data-input': 'cancellation'
		}, v('aside', {
			className: 'Bvq2sa fa24z C2dr'
		}, v('div', {
			className: 'Bvq8m faiw C2d1ok',
			'data-label': 'cancellation'
		}, 'Status')), v('div', {
			className: 'C2d2f4',
			'data-value': 'cancellation'
		}, 'Canceled'), v('aside', {
			className: 'Bvq2sa fa24z C2dr C2d2yi'
		})), v('p', {
			className: 'olqe C2d2g5 C2d1e5',
			'data-label': 'cancellation-notice'
		}, 'Active till the end of the last paid month.'))), e && !i && !l && v('section', {
			className: 'ol1u6 C2d2sf',
			'data-section': 'card'
		}, v('div', {
			className: 'fa1vk C2d20d C2d2fm',
			'data-input': 'card'
		}, v('aside', {
			className: 'Bvq2sa fa24z C2dr'
		}, v('div', {
			className: 'Bvq8m faiw C2d1ok',
			'data-label': 'card'
		}, 'Card')), v('div', {
			className: 'C2d2q6'
		}, v('div', {
			className: 'C2d1ue'
		}, v('div', {
			className: 'C2d1r5',
			'data-value': 'card'
		}, 'XXXX-XXXX-XXXX-XXXX'), v('div', {
			className: 'C2d12k'
		}, v(Qo, {
			id: 'updateCardLink',
			to: '/a/wa/account/card',
			'data-link': 'card'
		}, 'Update card')))), v('aside', {
			className: 'Bvq2sa fa24z C2dr'
		}))), v('section', {
			className: 'ol1u6 C2d2gw',
			'data-section': 'privacy'
		}, v('p', {
			className: 'olqe C2d2g5',
			'data-label': 'privacy-notice'
		}, 'You are in control of the content in your Songsterr account, even if you stop using Songsterr or decide to delete your account altogether.'), v('div', {
			className: 'fa1vk C2d20d',
			'data-input': 'export'
		}, v('aside', {
			className: 'Bvq2sa fa24z C2dr'
		}, v('div', {
			className: 'Bvq8m faiw C2d1ok',
			'data-label': 'card'
		}, 'Export')), v('a', {
			id: 'exportPersonalData',
			className: 'C2d31w',
			target: '_blank',
			href: '/api/privacy/data',
			'data-link': 'export'
		}, 'Download my data (JSON)'), v('aside', {
			className: 'Bvq2sa fa24z C2dr'
		})), !t && v('div', {
			className: 'fa1vk C2d20d C2d16c',
			'data-input': 'deactivate'
		}, v('aside', {
			className: 'Bvq2sa fa24z C2dr'
		}, v('div', {
			className: 'Bvq8m faiw C2d1ok',
			'data-label': 'card'
		}, 'Delete')), v(Qo, {
			to: '/a/wa/account/deactivate',
			className: 'C2d31w',
			'data-link': 'deactivate'
		}, 'Deactivate my account'), v('aside', {
			className: 'Bvq2sa fa24z C2dr'
		}))), v('section', {
			className: 'ol1u6 C2dnj',
			'data-section': 'signout'
		}, v('form', {
			noValidate: !0,
			onSubmit: this.handleSignOut
		}, v(zc, {
			id: 'signout',
			title: 'Sign out',
			processing: this.state.signoutProcessing
		})))))
	}
}, 'user', 'experiments'),
	Yf = Rn(class extends x {
		constructor(t) {
			super(t),
				this.email = I(),
				this.handleSubmit = async t => {
					t.preventDefault();
					const e = this.email.current;
					try {
						Fc({
							field: e,
							validator: Ic
						}),
							this.setState({
								processing: !0,
								error: null
							}),
							await async function (t) {
								const e = new FormData;
								e.append('email', t);
								const n = await fetch('/a/ra/person/forgotPassword.json', {
									method: 'post',
									credentials: 'include',
									body: e
								});
								return await pc(n),
									lc(n),
									n.json()
							}(e.value),
							this.props.dispatch('user/forgotPassword'),
							this.setState({
								processing: !1,
								error: null,
								next: !0,
								email: e.value
							})
					} catch (t) {
						this.setState({
							processing: !1,
							error: t
						})
					}
				},
				this.state = {
					error: null,
					email: '',
					processing: !1,
					next: !1
				}
		}
		render() {
			const t = v(Nf, {
				key: 'form',
				className: 'Cxq2a7',
				'data-section': 'form'
			}, v('h4', {
				className: 'Cxq1pl'
			}, 'Please enter the email address you use to sign in to your account.'), v('form', {
				noValidate: !0,
				onSubmit: this.handleSubmit,
				action: ''
			}, v(Gc, {
				error: this.state.error
			}), v(Xc, {
				label: 'Email',
				ref: this.email,
				placeholder: 'Email',
				type: 'email',
				name: 'email',
				autocomplete: 'email',
				error: this.state.error
			}), v('div', {
				className: 'Cxq18v'
			}, v(zc, {
				title: 'Submit',
				processing: this.state.processing
			}), v(Lf, {
				href: '/a/wa/signin',
				className: Xn.buttonLinkFloat
			}, 'Cancel')))),
				e = v(Nf, {
					key: 'done',
					className: 'Cxq2a7',
					'data-section': 'done'
				}, v('h4', {
					className: 'Cxq1pl'
				}, 'We\'ve sent instructions to ', this.state.email), v(Lf, {
					href: '/a/wa/signin'
				})),
				n = this.state.next ? e : t;
			return v(op, {
				title: 'Forgot your password?',
				id: 'forgotPassword'
			}, v(Un, null, n))
		}
	}),
	Zf = Rn(class extends x {
		constructor(t) {
			super(t),
				this.password = I(),
				this.passwordAgain = I(),
				this.handleSubmit = async t => {
					t.preventDefault();
					const e = this.password.current,
						n = this.passwordAgain.current;
					try {
						if (Fc({
							field: e,
							validator: Rc
						}, {
							field: n,
							validator: t => function (t, e) {
								return !(!e || t === e) && 'Passwords should match'
							}(t, e.value)
						}), this.setState({
							processing: !0,
							error: null
						}), this.props.route.isRecover) {
							const t = this.props.query.key || '',
								n = await async function (t, e) {
									const n = new FormData;
									n.append('key', t),
										n.append('password', e);
									const s = await fetch('/a/ra/person/recoverPassword.json', {
										method: 'post',
										credentials: 'include',
										body: n
									});
									return await pc(s),
										lc(s),
										s.json()
								}(t, e.value);
							this.props.dispatch('user/recoverPassword', n)
						} else {
							const t = await async function (t) {
								const e = {
									password: t
								},
									n = await rc('/auth/change', e);
								return await pc(n),
									lc(n),
									Pu(await n.json())
							}(e.value);
							this.props.dispatch('user/changePassword', t)
						}
						this.setState({
							processing: !1,
							error: null,
							next: !0
						})
					} catch (t) {
						this.setState({
							processing: !1,
							error: t
						})
					}
				},
				this.state = {
					error: null,
					processing: !1,
					next: !1,
					errorPassword: '',
					errorPasswordAgain: ''
				}
		}
		render() {
			eh(this.props);
			const t = v(Nf, {
				key: 'form',
				className: 'Cxq2a7'
			}, v('h4', {
				className: 'Cxq1pl'
			}, 'Please enter your new password.'), v('form', {
				noValidate: !0,
				onSubmit: this.handleSubmit,
				action: ''
			}, v(Gc, {
				error: this.state.error
			}), v(Xc, {
				type: 'password',
				label: 'New password',
				placeholder: 'New password',
				name: 'password',
				ref: this.password,
				error: this.state.error,
				autocomplete: 'new-password'
			}), v(Xc, {
				type: 'password',
				label: 'Once again',
				placeholder: 'Once again',
				name: 'passwordAgain',
				ref: this.passwordAgain,
				error: this.state.error,
				autocomplete: 'new-password'
			}), v('div', {
				className: 'Cxq18v'
			}, v(zc, {
				title: 'Save',
				processing: this.state.processing
			}), v(Qo, {
				to: this.props.route.isRecover ? '/' : '/a/wa/account',
				className: Xn.buttonLinkFloat
			}, 'Cancel')))),
				e = v(Nf, {
					key: 'done',
					className: 'Cxq2a7'
				}, v('h4', {
					className: 'Cxq1pl'
				}, 'Your password has been changed.'), v(Lf, {
					href: '/a/wa/account'
				})),
				n = this.state.next ? e : t,
				s = this.props.route.isRecover ? 'Recover Password' : 'Change Password',
				i = this.props.route.isRecover ? 'recoverPassword' : 'account-password';
			return v(op, {
				id: i,
				title: s
			}, v(Un, null, n))
		}
	}, 'user'),
	Jf = {
		exitActive: 'Bhege',
		enterActive: 'Bhe1s1',
		exit: 'Bhe1rx',
		enter: 'Bhe2lk'
	};
const Kf = [
	{
		w: 'Songsterr Plus ROCKS. Great features and great sound, and totally web-based. I love the looping feature. Plenty of songs available, too: I did a random search for several songs and found accurate versions of all of them.',
		a: 'Rob Hampton',
		s: 'heartwoodguitar.com'
	},
	{
		w: 'With Songsterr Plus our students learn songs faster and practice more frequently. Thank you, on the behalf of our in-home lesson community. You guys are Teriffic!',
		a: 'Winston McFarlane',
		s: 'VisionMusicLive.com'
	},
	{
		w: 'With Songsterr Plus learning to play guitar has never been so simple, or so enjoyable.',
		a: 'Anze Sustar',
		s: 'YourChords.com'
	},
	{
		w: 'I would definitely recommend Songsterr Plus to everybody who learn playing guitar. It’s simple and user-friendly way to play songs you like, no matter what is your level.',
		a: 'Kevin Wimer',
		s: 'jamplay.com'
	},
	{
		w: 'Most people start learning guitar for the only reason – to play their favorite songs. Songsterr Plus is a great way to learn a lot of new songs both for beginners and skilled guitarists.',
		a: 'Paul Hackett',
		s: 'guitarnoise.com'
	}
],
	Qf = (t, e, n) => v('tr', null, v('td', null), v('td', {
		className: 'B022o'
	}, v('em', {
		className: 'B02e1'
	}, t), v('div', {
		className: 'B011h'
	}, e)), v('td', {
		className: n ? '' : 'B01j5'
	}, n ? 'YES' : 'NO'), v('td', null, 'YES'));
var tm = Rn(class extends x {
	constructor(t) {
		super(t),
			this.handlePrevNote = Ai((() => this.setState((t => ({
				counter: 0 === t.counter ? Kf.length - 1 : t.counter - 1,
				transition: 'left'
			})))), 400),
			this.handleNextNote = Ai((() => this.setState((t => ({
				counter: t.counter === Kf.length - 1 ? 0 : t.counter + 1,
				transition: 'right'
			})))), 400),
			this.state = {
				counter: 0,
				transition: 'left'
			}
	}
	render() {
		eh(this.props),
			this.props.user.isLoggedIn && Uf();
		const t = Kf[this.state.counter],
			e = this.props.user.isLoggedIn ? '/a/wa/account' : '/a/wa/signin?next=account',
			{
				isTablet: n,
				os: s
			}
				= this.props.device,
			{
				dispatch: i
			}
				= On(),
			a = A((() => {
				i('demo/activate')
			}), [
				i
			]),
			o = A((() => {
			}), [
				i
			]);
		return v(op, {
			title: 'Songsterr Plus',
			id: 'plus',
			styles: vf
		}, v('section', {
			className: 'ol1u6 B02mx',
			'data-section': 'plus'
		}, v('h4', {
			className: 'ol1gf B01s8'
		}, 'Sign-up takes less than a minute. Safe & Secure.'), v('div', {
			className: 'B0221'
		}, v('table', {
			className: 'B034j'
		}, v('thead', null, v('tr', null, v('th', null), v('th', null), v('th', null, 'FREE'), v('th', null, 'PLUS'))), v('tbody', null, Qf('Playback', 'A key feature of Songsterr Tab Player. Allows you to playback tabs with a realistic guitar engine.', !0), Qf('Print', v('span', null, 'High quality, high contrast printing of tabs. You can print either the whole tab or just the selected page. Here is a ', v('a', {
			href: '/static/media/printoutSample.d7437358.pdf',
			target: '_blank',
			rel: 'noopener noreferrer'
		}, 'sample printout'), '.')), Qf('Tempo Control', 'Adjust playback speed without changing pitch. Indispensable feature for learning complicated parts of the song.'), Qf('Loop', 'Allows you to playback the selected measures over and over again. Looping can be very helpful for training when you\'re learning a particular part of the song.'), Qf('Mute', 'Silences the current track. Mute your instrument and play along with the rest of the band.'), Qf('Solo', 'Makes the selected track audible, and silences all the other tracks. Use this to learn your part of the song.'), Qf('Pitch Shift', 'Allows you to change the sound pitch to match your guitar tuning.'), Qf('Ad Free', 'Removes all the ads from the site. Gives more screen real estate for the player on the song page.'), Qf('Mobile App', 'Get our mobile apps free of charge. Simply sign in to your Songsterr Account.')), v('tfoot', null, v('tr', null, v('td', null), v('td', null, 'PRICE'), v('td', null, 'FREE'), v('td', null, '$9.90/month')))), v('aside', {
			className: 'B073'
		}, v(Qo, {
			to: this.props.user.isLoggedIn ? '/a/wa/plus/payment' : '/a/wa/signin?next=subscribe',
			onClick: o,
			id: 'CTA-side',
			className: 'Cpb24q Cpb2zn Cpbjz B01ob'
		}, 'Subscribe to Plus', v('span', null, ' for $9.90/month')), v(Qo, {
			to: '/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1',
			onClick: a,
			id: 'demo',
			'data-action': 'demosong',
			className: 'Cpb24q Cpb2zn Cpb1m5 B0oh'
		}, 'Demo Song', v('span', null, 'all features enabled')), n && v(ar, {
			attrs: {
				id: 'Plus-store',
				className: 'B01yc'
			},
			extra: {
				source: 'plus'
			}
		}, Zo(s) ? v('img', {
			src: rr,
			width: 145,
			height: 42.59375,
			alt: 'Google Play'
		}) : v('img', {
			src: or,
			width: 145,
			height: 48.03125,
			alt: 'AppStore'
		}))))), v('section', {
			className: 'ol1u6 B0136',
			'data-section': 'words'
		}, v('div', {
			className: 'B01p9'
		}, v('img', {
			src: '/static/media/plus-guitars.83a60d47.svg',
			width: 175,
			height: 261,
			alt: 'Guitars'
		})), v('div', {
			className: 'B01j2'
		}, v('span', {
			className: 'B01h6'
		}, 'Hundreds of thousands'), ' of guitarists worldwide have used Songsterr Plus to learn over 100,000 songs & 500,000 tabs by 40,000 artists!'), v('div', {
			className: 'B01q9'
		}, v('div', {
			className: 'B02ng'
		}, v('div', {
			className: 'B0el'
		}, 'Check out what guitar experts say about Songsterr Plus.'), v(Un, {
			component: 'div',
			className: 'B01v'
		}, v(Gn, {
			animationStyles: Jf,
			key: t.a
		}, v('div', {
			className: 'B0a2'
		}, t.w, v('br', null), t.a, ' ', v('span', {
			className: 'B02d8'
		}, t.s))))), v('div', {
			className: 'B02l6'
		}), v('div', {
			className: 'B01pm'
		}, v('button', {
			className: 'Cpb24q Cpb2j Cpb24q Cpb13f B0295',
			onClick: this.handlePrevNote
		}, 'Prev'), v('button', {
			className: 'Cpb24q Cpb2j Cpb24q Cpb13f B0295',
			onClick: this.handleNextNote
		}, 'Next')))), v('section', {
			className: 'ol1u6 B01q3',
			'data-section': 'info'
		}, v('div', {
			className: 'B01fd'
		}, v('article', {
			className: 'B02kp'
		}, v('h3', {
			className: 'B01o4'
		}, 'Is this a long-term commitment?'), v('p', {
			className: 'B017w'
		}, 'No. It\'s a pay-as-you-go service. You can cancel any time with one click on your ', v(Qo, {
			to: e,
			'data-action': 'account'
		}, 'account page'), '. If you cancel, you\'ll be able to use paid features until the end of the paid month (30 days since your last payment).')), v('article', {
			className: 'B02kp B02bl'
		}, v('h3', {
			className: 'B01o4'
		}, 'What payment types do you accept?'), v('p', {
			className: 'B017w'
		}, 'Currently, we accept PayPal, Visa, MasterCard, Discover, American Express and JCB. At this time we only accept payments online so we will not be able to accept a P.O., invoice you, or take an order over the phone.')), v('article', {
			className: 'B02kp'
		}, v('h3', {
			className: 'B01o4'
		}, 'Are there any hidden charges?'), v('p', {
			className: 'B017w'
		}, 'There are no hidden charges. Monthly price gives you access to paid features of all the tabs on Songsterr. We are confident that you\'ll enjoy your subscription and we\'ll give you a 100% "no questions asked" refund otherwise.')))), v('section', {
			className: 'ol1u6 B0lt',
			'data-section': 'footer'
		}, v(Qo, {
			to: this.props.user.isLoggedIn ? '/a/wa/plus/payment' : '/a/wa/signin?next=subscribe',
			onClick: o,
			id: 'CTA-footer',
			className: 'Cpb24q Cpb318 B0lr'
		}, 'Subscribe to Plus', v('span', null, ' for $9.90/month'))))
	}
}, 'user', 'device', 'experiments');
const em = () => v('div', {
	className: 'o21v0',
	'data-section': 'secured'
}, v('img', {
	src: '/static/media/ssllock.c5d6947c.svg',
	alt: 'Secured'
}), v('span', {
	className: 'o22e4'
}, 'HTTPS/SSL'), v('div', {
	className: 'o216d'
}, 'Secured by ', v('a', {
	className: 'o235l',
	href: 'https://www.braintreegateway.com/merchants/xdmf4zdb54vjr7hj/verified',
	target: '_blank'
}, 'Braintree'))),
	nm = {
		enter: 'B7i20k',
		enterActive: 'B7i80',
		exit: 'B7i17n',
		exitActive: 'B7i8e'
	},
	sm = v('div', null, 'Your actions appear suspicious. We will reject any attempt to subscribe within the next twenty four hours. ', 'Please contact ', v('a', {
		href: 'mailto:support@songsterr.com',
		'data-action': 'support'
	}, 'support@songsterr.com'), ' if you think we made a mistake.'),
	im = v('div', null, 'Verification of your Songsterr Account email failed. Please double check it, ', v(Qo, {
		to: '/a/wa/account',
		'data-action': 'account'
	}, 'change it'), ' if necessary and then try to pay again. If this doesn\'t help, please contact ', v('a', {
		href: 'mailto:support@songsterr.com',
		'data-action': 'support'
	}, 'support@songsterr.com'), ' using your mail, website or app.'),
	am = v('div', null, 'reCAPTCHA validation failed. If you are not a robot, please contact ', v('a', {
		href: 'mailto:support@songsterr.com?subject=reCAPTCHA Validation Failed',
		'data-action': 'support'
	}, 'support@songsterr.com'), ' using your mail, website or app.');
function om({
	error: t
}) {
	return v(Un, null, t && v(Gn, {
		animationStyles: nm,
		timeout: 300
	}, v('div', {
		className: 'Ced10e',
		key: 'error',
		role: 'alert',
		'aria-label': 'form'
	}, !t.isFraud && !t.isRejected && !t.isRecaptcha && t.message, t.isFraud && im, t.isRejected && sm, t.isRecaptcha && am)))
}
const rm = t => {
	Uf();
	const {
		mode: e,
		submitButton: n,
		cancelLink: s
	}
		= t,
		{
			dispatch: i,
			payment: a
		}
			= On('payment'),
		[
			o,
			r
		] = f(null),
		[
			l,
			c
		] = f(null),
		[
			u,
			d
		] = f(!1),
		h = X(),
		p = A((async () => {
			try {
				d(!0),
					c(null);
				const {
					type: n,
					nonce: s,
					deviceData: a
				}
					= await o.requestPaymentMethod(),
					{
						subscription: r
					}
						= await async function (t, e, n) {
							const s = `/auth/billing/${n}`,
								i = {
									'X-Recaptcha-Token': await Af(n)
								},
								a = {
									nonce: t,
									deviceData: e
								},
								o = await rc(s, a, i);
							return function (t) {
								if (403 === t.status) throw new ic
							}(o),
								await hc(o),
								await pc(o),
								await dc(o),
								lc(o),
								Pu(await o.json())
						}(s, a, e);
				i('user/subscribePlus', {
					mode: e,
					subscription: r,
					paymentType: 'PayPalAccount' === n ? 'PayPal' : 'Card'
				}),
					t.toggleNext()
			} catch (t) {
				await o.clearSelectedPaymentMethod(),
					i('curiosity/error', {
						error: 'Subscription',
						message: t.message
					});
				const n = ((t, e) => {
					const {
						name: n,
						message: s
					}
						= t,
						i = 'FraudError' === n,
						a = s.toLowerCase().includes('recaptcha'),
						o = s.includes('risk_threshold') || s.includes('fraud') || s.includes('suspicious');
					if ('DropinError' === n) {
						let e = 'Please fix the errors and try again.';
						const n = t._braintreeWebError && t._braintreeWebError.code || !1;
						return 'HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED' === n && (e = 'CVV did not pass verification.'),
							'HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR' === n && (e = 'Network error occurred. Please try again later.'),
						{
							message: e,
							isFraud: i,
							isRejected: o,
							isRecaptcha: a
						}
					}
					return 'ValidationError' === n && s.includes('cvv') ? {
						message: 'CVV did not pass verification.',
						isFraud: i,
						isRejected: o,
						isRecaptcha: a
					}
						: 'SubscriptionError' === n ? {
							message: s,
							isFraud: i,
							isRejected: o,
							isRecaptcha: a
						}
							: i ? {
								message: 'Email verification failed.',
								isFraud: i,
								isRejected: o,
								isRecaptcha: a
							}
								: {
									message: 'subscribe' === e ? 'There was a problem processing your credit card. Please double check your data and try again. If this doesn\'t help, please contact your bank to find out the reason of declined transaction.' : 'Unfortunately, on our side, we just see the message "Payment declined" without details. The transaction may be getting declined because of a high level of recent activity on a card, a card being over its limit, or due to a range of other reasons which only the bank knows. Please contact your bank to find out the reason.',
									isFraud: i,
									isRejected: o,
									isRecaptcha: a
								}
				})(t, e);
				(n.isRejected || n.isFraud) && i('curiosity/fraud'),
					c(n),
					d(!1)
			}
		}), [
			o
		]);
	y((async () => {
		const {
			ready: t,
			token: e,
			module: n
		}
			= a.dropin;
		if (!o && t) try {
			const t = await n.getInstance({
				authorization: e,
				container: h.current
			});
			r(t)
		} catch (t) {
			c(t)
		}
		return o && o.on('paymentMethodRequestable', (async t => {
			t.paymentMethodIsSelected && 'PayPalAccount' === t.type && await p()
		})),
			() => {
				o && o.teardown()
			}
	}), [
		a,
		o,
		p
	]);
	const m = A((async t => {
		t.preventDefault(),
			await p()
	}), [
		o,
		p
	]),
		g = v('div', {
			className: 'D4i1bb'
		}, v(zc, {
			id: n.id,
			title: n.name,
			isDisabled: !o || u,
			processing: u
		}), s && v(Qo, {
			to: s.link,
			className: Xn.buttonLink,
			'data-action': 'cancel'
		}, 'Cancel'));
	return v('form', {
		noValidate: !0,
		onSubmit: m
	}, v(om, {
		error: l
	}), v('div', {
		className: 'D4i202',
		ref: h
	}), v('div', {
		className: 'D4ih8'
	}, g, v(em, null)))
};
var lm = {
	panel: 'Cdy7e Bebfs'
},
	cm = Rn(class extends x {
		constructor(t) {
			super(t),
				this.toggleNext = t => {
					this.setState({
						next: !0
					})
				},
				this.state = {
					next: !1
				}
		}
		render() {
			eh(this.props),
				If();
			const t = v(Nf, {
				key: 'payment',
				className: 'ol1u6 C0z2s0',
				'data-section': 'form'
			}, v('h4', {
				className: 'ol1gf C0z35c'
			}, 'Thanks for subscribing. Your hard earned money goes towards making Songsterr an even better product.'), v(rm, {
				mode: 'subscribe',
				toggleNext: this.toggleNext,
				submitButton: {
					name: 'Pay',
					id: 'pay'
				},
				cancelLink: {
					link: '/a/wa/plus'
				}
			}), v('div', {
				className: 'C0z26n',
				'data-section': 'footer'
			}, 'Click Pay to sign up for a recurring monthly subscription. You will be immediately charged for its first month. You can cancel any time with 1 click from your ', v(Qo, {
				to: '/a/wa/account'
			}, 'account page'), '. After cancellation, you will stay on the paid plan until the end of your last paid month.')),
				e = v(Nf, {
					key: 'paying-success',
					className: 'ol1u6 C0zkv',
					'data-section': 'done'
				}, v('h4', {
					className: 'ol1gf C0z35c'
				}, 'Thanks for subscribing!'), v(Lf, null)),
				n = this.state.next ? e : t;
			return v(op, {
				title: 'Paying',
				id: 'plus-payment',
				styles: lm
			}, v(Un, null, n))
		}
	});
const um = 'I\'m sure, cancel my subscription';
var dm = Rn(class extends x {
	constructor(t) {
		super(t),
			this.cancelSubscription = async t => {
				t.preventDefault();
				try {
					this.setState({
						processing: !0,
						error: null
					});
					let t = this.props.user.profile;
					t && t.isLegacyPayPal || (t = await async function () {
						const t = await fetch('/auth/billing/cancel', {
							method: 'post',
							credentials: 'include'
						});
						if (500 === t.status || 403 === t.status) throw new Error('You have no subscription');
						return await pc(t),
							await dc(t),
							lc(t),
							Pu(await t.json())
					}()),
						this.props.dispatch('user/cancelPlus', t),
						this.setState({
							processing: !1,
							error: null,
							next: !0
						})
				} catch (t) {
					this.props.dispatch('curiosity/error', {
						error: 'Subscription',
						message: t.message
					}),
						this.setState({
							processing: !1,
							error: t
						})
				}
			},
			this.cancelPayPal = () => {
				this.setState({
					next: !0
				})
			},
			this.state = {
				error: null,
				processing: !1,
				next: !1
			}
	}
	render() {
		eh(this.props);
		const t = v(Nf, {
			key: 'cancel',
			className: 'Cxq2a7',
			'data-section': 'form'
		}, v('h4', {
			className: 'Cxq1pl'
		}, 'Are you sure you want to cancel your subscription?'), v('form', {
			noValidate: !0,
			onSubmit: this.cancelSubscription
		}, v(Gc, {
			error: this.state.error
		}), v('div', {
			className: 'Cxq18v'
		}, this.props.user.profile.isLegacyPayPal ? v('a', {
			target: '_blank',
			onClick: this.cancelPayPal,
			href: 'https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=F6Q2JNH34XCCG',
			className: Xn.buttonGreen,
			'data-action': 'cancelPayPal'
		}, um) : v(zc, {
			id: 'confirmCancelation',
			title: um,
			processing: this.state.processing
		}), v(Qo, {
			to: '/a/wa/account',
			className: Xn.buttonLink,
			'data-action': 'cancel'
		}, 'No, keep it')))),
			e = v(Nf, {
				key: 'done',
				className: 'Cxq2a7',
				'data-section': 'done'
			}, v('h4', {
				className: 'Cxq1pl'
			}, this.props.user.profile.isLegacyPayPal ? 'Your Sonsgterr Plus subscription will remain active until you cancel it on PayPal.' : 'Cancelled, Songsterr plus will be active till the end of the last paid month.'), v(Lf, {
				id: 'doneCancelation',
				href: '/a/wa/account'
			})),
			n = this.state.next ? e : t;
		return v(op, {
			title: 'Cancel Subscription',
			id: 'account-subscription'
		}, v(Un, null, n))
	}
}),
	hm = Rn(class extends x {
		constructor(t) {
			super(t),
				this.deactivate = async t => {
					t.preventDefault();
					try {
						this.setState({
							error: null,
							processing: !0
						}),
							await async function () {
								await async function () {
									const t = await fetch('/auth/deactivate', {
										method: 'post',
										credentials: 'include'
									});
									if (403 === t.status) throw new Error('You already signed out. Please refresh page');
									return lc(t),
										t.text()
								}();
								try {
									await $f();
									const t = window.gapi;
									t.auth2.getAuthInstance().isSignedIn.get() && t.auth2.getAuthInstance().currentUser.get().disconnect()
								} catch (t) {
								}
							}(),
							this.props.dispatch('user/deactivate'),
							this.setState({
								processing: !1,
								error: null,
								next: !0
							})
					} catch (t) {
						this.setState({
							processing: !1,
							error: Hf(t)
						})
					}
				},
				this.state = {
					error: null,
					processing: !1,
					next: !1
				}
		}
		render() {
			eh(this.props);
			const t = v(Nf, {
				key: 'deactivate',
				className: 'Cxq2a7',
				'data-section': 'form'
			}, v('h4', {
				className: 'Cxq1pl'
			}, 'Are you sure you want to permanently deactivate you account? You will loose all your user data.'), v('form', {
				noValidate: !0,
				onSubmit: this.deactivate
			}, v(Gc, {
				error: this.state.error
			}), v('div', {
				className: 'Cxq18v'
			}, v(zc, {
				title: 'I\'m sure, deactivate my account',
				processing: this.state.processing
			}), v(Qo, {
				to: '/a/wa/account',
				className: Xn.buttonLink
			}, 'Cancel')))),
				e = v(Nf, {
					key: 'done',
					className: 'Cxq2a7',
					'data-section': 'done'
				}, v('h4', {
					className: 'Cxq1pl'
				}, 'Your account was successfully deactivated.'), v(Lf, null)),
				n = this.state.next ? e : t;
			return v(op, {
				title: 'Deactivate account',
				id: 'account-deactivate'
			}, v(Un, null, n))
		}
	}, 'user'),
	pm = Rn(class extends x {
		constructor(t) {
			super(t),
				this.toggleNext = () => {
					this.setState({
						next: !0
					})
				},
				this.state = {
					next: !1
				}
		}
		render() {
			eh(this.props);
			const t = v(Nf, {
				key: 'updateCard',
				className: 'ol1u6 Bj2v1',
				'data-section': 'form'
			}, v(rm, {
				mode: 'update',
				toggleNext: this.toggleNext,
				submitButton: {
					name: 'Update',
					id: 'updateCard'
				},
				cancelLink: {
					link: '/a/wa/account'
				}
			})),
				e = v(Nf, {
					key: 'paying-success',
					className: 'ol1u6 Bj2wu',
					'data-section': 'done'
				}, v('h4', {
					className: 'ol1gf Bj210f'
				}, 'Your credit card was successfully updated.'), v(Lf, null)),
				n = this.state.next ? e : t;
			return v(op, {
				title: 'Update card',
				id: 'account-card',
				styles: lm
			}, v(Un, null, n))
		}
	}),
	fm = function (t, e, n, s, i, a, o, r) {
		for (var l, c = i, u = 0, d = !!o && Ul(o, r, 3); u < s;) {
			if (u in n) {
				if (l = d ? d(n[u], u, e) : n[u], a > 0 && z(l)) c = fm(t, e, l, _(l.length), c, a - 1) - 1;
				else {
					if (c >= 9007199254740991) throw TypeError('Exceed the acceptable array length');
					t[c] = l
				}
				c++
			}
			u++
		}
		return c
	},
	mm = fm;
i({
	target: 'Array',
	proto: !0
}, {
	flat: function () {
		var t = arguments.length ? arguments[0] : void 0,
			e = k(this),
			n = _(e.length),
			s = Xl(e, 0);
		return s.length = mm(s, e, e, n, 0, void 0 === t ? 1 : O(t)),
			s
	}
}),
	Z('flat');
const gm = '/static/media/mock.09613161.svg',
	ym = {
		understandingTab: {
			icon: '/static/media/01-understanding-tab.f7b2338e.svg',
			name: 'Understanding Tab',
			content: [
				[{
					text: 'Guitar tab or tablature is a very popular method of notating guitar music. What makes tab so popular is that, once you get the hang of it, it is very easy to read.\n\nIn order to understand tab, you need to visualize a guitar neck as if you are playing the guitar and looking down on the neck. Tab consists of 6 horizontal lines that represent the strings of the guitar. The thickest string being the bottom most line and the thinnest string being the topmost.'
				},
				{
					img: '/static/media/htrgt-1.9fe2699f.svg',
					style: {
						margin: 'auto'
					}
				},
				{
					text: 'Numbers are then placed on these lines to represent finger positions on the guitar fret board. If you read the diagram below you would play this on a guitar by putting your finger just behind the 2nd fret on the 5th string, then you would play the note at the 4th fret, then again on the 2nd fret. The ‘zero’ represents playing an open string. As musical notes this would read as follows B C# B A.'
				},
				{
					img: '/static/media/htrgt-2.f494b03e.svg',
					style: {
						margin: 'auto 0 auto auto'
					}
				}
				]
			]
		},
		chord: {
			icon: '/static/media/02-guitar-tab-chords.64c31c75.svg',
			name: 'Guitar Tab Chords',
			content: [
				[{
					text: 'To tab a chord the notes would be placed in a vertical line upon the horizontal ones. This diagram represents a C Chord. You would strum the bottom 5 strings of the guitar in one motion if you were to read this tab properly:'
				},
				{
					img: '/static/media/guitar-chords-1.8ad933d3.svg',
					style: {
						padding: 0
					}
				},
				{
					text: 'And in this case you would strum the ‘C Chord’ three times:'
				},
				{
					img: '/static/media/guitar-chords-2.5e0e6238.svg',
					style: {
						padding: 0
					}
				}
				]
			]
		},
		hammerOn: {
			icon: '/static/media/03-hammer-on.c0ed6c3d.svg',
			name: 'Hammer-On',
			isSmall: !0,
			content: [
				[{
					text: 'Hammer-on is executed by picking a note and then hammering done with the fretting hand on the second note. The second note isn’t actually picked but kind of echos the first one. Song example with this technique: '
				},
				{
					text: 'Black Sabbath – Paranoid',
					url: '/a/wsa/black-sabbath-paranoid-tab-s296t1'
				},
				{
					text: '. Hammer-ons are written in a tab like this:'
				}
				],
				[
					{
						img: '/static/media/hammer-on.61aaa908.svg'
					}
				]
			]
		},
		pullOff: {
			icon: '/static/media/04-pull-off.bc5ba841.svg',
			name: 'Pull-Off',
			isSmall: !0,
			content: [
				[{
					text: 'Pull-off is the opposite of a hammer-on, so the first note is played again then the fretting hand pulls the finger off and lets the one fretted behind it play. Song example with this technique: '
				},
				{
					text: 'Metallica – Nothing Else Matters',
					url: '/a/wsa/metallica-nothing-else-matters-tab-s439171t1'
				},
				{
					text: ' (bar 5).'
				}
				],
				[
					{
						img: '/static/media/pull-off.0707e82f.svg'
					}
				]
			]
		},
		bend: {
			icon: '/static/media/05-bends.0634c11d.svg',
			name: 'Bends',
			isSmall: !0,
			content: [
				[{
					text: 'This is where the fretting hand actually bends the string to give a wobbly effect. It\'s often used in solos. Song example with this technique: '
				},
				{
					text: 'AC/DC - You Shook Me All Night Long',
					url: '/a/wsa/ac-dc-you-shook-me-all-night-long-tab-s63275t0'
				},
				{
					text: ' (bar 17).'
				}
				],
				[
					{
						img: '/static/media/bend.bb209bc8.svg'
					}
				]
			]
		},
		releaseBend: {
			icon: '/static/media/06-release-band.81327208.svg',
			name: 'Release Bend',
			isSmall: !0,
			content: [
				[{
					text: 'Release bend is just like a bend, but it tells you when to release the bend and go to the next note. Song example with this technique: '
				},
				{
					text: 'Guns N’ Roses – Don’t Cry (Slash guitar solo)',
					url: '/a/wsa/guns-n-roses-don-t-cry-tab-s125t3'
				},
				{
					text: ' (bar 41).'
				}
				],
				[
					{
						img: '/static/media/release-bend.34031a53.svg'
					}
				]
			]
		},
		slide: {
			icon: '/static/media/07-slide.b9f445d3.svg',
			name: 'Slide',
			isSmall: !0,
			content: [
				[{
					text: 'For a slide you start off plucking the first note and slide on the string up or down to the second. Song example with this technique: '
				},
				{
					text: 'Dire Straits – Sultans of Swing',
					url: '/a/wsa/dire-straits-sultans-of-swing-tab-s30084t1'
				},
				{
					text: ' (bar 5). In the tab below you would play the first note on the 10th fret then slide the finger that is holding that note up to the 8th fret (a slide-down):'
				}
				],
				[
					{
						img: '/static/media/slide_a.08590532.svg'
					},
					{
						text: 'Or here you slide your finger from the 3rd fret to the 5th without lifting your finger (a slide-up):'
					},
					{
						img: '/static/media/slide_b.965fe962.svg'
					}
				]
			]
		},
		legatoSlide: {
			icon: '/static/media/08-legato-slide.f0ce8c32.svg',
			name: 'Legato Slide',
			isSmall: !0,
			content: [
				[{
					text: 'The same as usual slide except the second note is not struck. Song example with this technique: '
				},
				{
					text: 'Black Sabbath – Iron Man',
					url: '/a/wsa/black-sabbath-iron-man-tab-s8t1'
				},
				{
					text: ' (bar 10).'
				}
				],
				[
					{
						img: '/static/media/legato-slide.e7e2d800.svg'
					}
				]
			]
		},
		vibrato: {
			icon: '/static/media/09-vibrato.9dd4ab03.svg',
			name: 'Vibrato',
			isSmall: !0,
			content: [
				[{
					text: 'Vibrato is like a constant rhythmic bending of the string. You do a bend up and bend down quickly to create a moving sound. Song example with this technique: '
				},
				{
					text: 'Jimi Hendrix – Purple Haze',
					url: '/a/wsa/jimi-hendrix-purple-haze-tab-s310t0'
				},
				{
					text: ' (bar 3).'
				}
				],
				[
					{
						img: '/static/media/vibrato.ee3998f4.svg'
					}
				]
			]
		},
		wideVibrato: {
			icon: '/static/media/010-Wide-Vibrato.1bb30adf.svg',
			name: 'Wide Vibrato',
			isSmall: !0,
			content: [
				[{
					text: 'The pitch is varied to a greater degree by vibrating with the fretting hand. Song example with this technique: '
				},
				{
					text: 'Black Label Society - In This River',
					url: '/a/wsa/black-label-society-in-this-river-tab-s21536t3'
				},
				{
					text: '.'
				}
				],
				[
					{
						img: '/static/media/wide-vibrato.f0ad4435.svg'
					}
				]
			]
		},
		letRing: {
			icon: '/static/media/011-let-ring.753e521e.svg',
			name: 'Let ring',
			isSmall: !0,
			content: [
				[{
					text: '"Let ring" marker tells you to let that note ring until the end of the dashed line. Song example with this technique: '
				},
				{
					text: 'Metallica – Enter Sandman',
					url: '/a/wsa/metallica-enter-sandman-tab-s19t1'
				},
				{
					text: '.'
				}
				],
				[
					{
						img: '/static/media/let-ring.714e6589.svg'
					}
				]
			]
		},
		palmMute: {
			icon: '/static/media/012-palm-mute.aea43c8f.svg',
			name: 'Palm Mute',
			isSmall: !0,
			content: [
				[{
					text: 'A palm mute effect is achieved when you take the side of your right hand (4th finger side) and lightly touch the string at the edge of the bridge. This will give the notes that you are playing a muffled sound. Song example with this technique: '
				},
				{
					text: 'Green Day – Basket Case',
					url: '/a/wsa/green-day-basket-case-tab-s1401t2'
				},
				{
					text: '.'
				}
				],
				[
					{
						img: '/static/media/palm-mute.4084f271.svg'
					}
				]
			]
		},
		ghostNote: {
			icon: '/static/media/013-gost-note.ae26f566.svg',
			name: 'Ghost Note',
			isSmall: !0,
			content: [
				[{
					text: 'The best description of a ghost note, is a note that is felt but not heard. You will play the note softer, and without emphasis. A ghost note can be played by fretting a note, but not picking it. Ghost notes are barely audible, but they do a lot to the feel of the music. The notation for the ghost note is round brackets. Song example with this technique: '
				},
				{
					text: 'Rush – La Villa Strangiato',
					url: '/a/wsa/rush-la-villa-strangiato-tab-s16588t3'
				},
				{
					text: ' (bar 194).'
				}
				],
				[
					{
						img: '/static/media/ghost-note.1985c0f8.svg'
					}
				]
			]
		},
		deadNote: {
			icon: '/static/media/014-dead-note.404e4602.svg',
			name: 'Dead Note',
			isSmall: !0,
			content: [
				[{
					text: 'Dead note refers to muting the strings with your left hand. A dead note effect is achieved by lightly resting your left hand across the strings without actually pressing the strings against the fret. Song example with this technique: '
				},
				{
					text: 'Nirvana - Smells Like Teen Spirit',
					url: '/a/wsa/nirvana-smells-like-teen-spirit-tab-s269t1'
				},
				{
					text: '.'
				}
				],
				[
					{
						img: '/static/media/dead-note.5913848a.svg'
					}
				]
			]
		},
		upDownStroke: {
			icon: '/static/media/015-up-down-strokes.a283b571.svg',
			name: 'Up/Down Strokes',
			isSmall: !0,
			content: [
				[{
					text: 'The first chord is to be played with a down stroke, the second chord is to be played with an up stroke and the third is to be played with a down stroke again. Song example with this technique: '
				},
				{
					text: 'Nirvana – Where Did You Sleep Last Night',
					url: '/a/wsa/nirvana-where-did-you-sleep-last-night-tab-s234t0'
				},
				{
					text: '.'
				}
				],
				[
					{
						img: '/static/media/up-down-stroke.d0490779.svg'
					}
				]
			]
		},
		naturalHarmonic: {
			icon: '/static/media/016-natural-harmonics.f8d2dc8d.svg',
			name: 'Natural Harmonics',
			isSmall: !0,
			content: [
				[{
					text: 'Natural harmonics are notes that produce a bell like sound when you touch a string over a particular fret bar. The notation that is most commonly used is the fret that you will touch with romb sign before. Song example with this technique: '
				},
				{
					text: 'Metallica - Welcome Home (Sanitarium)',
					url: '/a/wsa/metallica-welcome-home-sanitarium-tab-s585t0'
				},
				{
					text: '.'
				}
				],
				[
					{
						img: '/static/media/natural-harmonics.2b556f8f.svg'
					}
				]
			]
		},
		polyphony: {
			icon: '/static/media/028-polyphony.f27e60a3.svg',
			name: 'Polyphony',
			isSmall: !0,
			content: [
				[{
					text: 'Polyphony is a type of musical texture consisting of two or more simultaneous lines of independent melody. In the tabs, one of these lines is shown in gray with the number of the fret, the other in black. Song example: '
				},
				{
					text: 'Stairway To Heaven',
					url: '/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1'
				},
				{
					text: '.'
				}
				],
				[
					{
						img: '/static/media/polyphony.9f623662.svg'
					}
				]
			]
		},
		pinchHarmonic: {
			icon: '/static/media/030-pinch-harmonic.23b276b6.svg',
			name: 'Pinch Harmonic',
			isSmall: !0,
			content: [
				[{
					text: 'A pinch harmonic is a guitar technique to achieve artificial harmonics in which the player’s thumb or index finger on the picking hand slightly catches the string which the player picked, silencing the fundamental frequency of the string, and letting one of the harmonics dominate. Song example with this technique: '
				},
				{
					text: 'Slipknot - Duality',
					url: '/a/wsa/slipknot-duality-tab-s18211t0'
				},
				{
					text: ' (bar 23).'
				}
				],
				[
					{
						img: '/static/media/pinchHarmonic.2f90a55a.svg'
					}
				]
			]
		},
		rhythmNotation: {
			icon: '/static/media/017-rhythm-notation.ca37e0cd.svg',
			name: 'Rhythm Notation',
			content: [
				[{
					text: 'Tabs do not have information on the rhythm or lengths of the notes – only on their pitch. This means you can play the same tab in different ways. Although with Songsterr you can see and hear the tab as it is being played, rhythm notation will tell you exactly when to play note and how long to hold it. We use rhythm notation which is very similar to sheet music notation (scores). The basics of rhythm notation are explained below.'
				}
				]
			]
		},
		beat: {
			icon: '/static/media/027-the-beat.b3d0fe61.svg',
			name: 'The Beat',
			content: [
				[{
					text: 'Music is based in time. Most music has a steady, recurring pulse called the beat. It’s the steady rhythm to which you want to tap your foot or dance. Think of any music you’ve heard in a dance club and you can quickly imagine the beat of the music. The element of time in a piece of music revolves around the beat.'
				}
				]
			]
		},
		bar: {
			icon: '/static/media/018-bars.463a4589.svg',
			name: 'Bars',
			content: [
				[{
					text: 'To help keep our place in music, beats are grouped into bars, or measures as they are also called. Bars are delineated by bar lines. In many songs four beats make up one bar. The steady pulse would be counted 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, … and so on. Beat one always marks the beginning of the bar.'
				},
				{
					img: '/static/media/bars.5eed40e5.svg',
					style: {
						padding: 0
					}
				}
				]
			]
		},
		timeSignature: {
			icon: '/static/media/019-time-signature.cd0b09c6.svg',
			name: 'Time Signature',
			content: [
				[{
					text: 'When reading tab, we can look at the time signature. This is that fraction that happens at the beginning of each tab. The top number in the fraction stands for the number of beats in a bar (in most cases it is 4). The bottom number stands for the note value that is equal to the beat of the music. In most cases the bottom number is also 4, which indicates that the 1/4 note is the pulse of the music. In other words, 4/4 time means each bar is equal to 4 1/4 notes.'
				},
				{
					img: '/static/media/time-signature.107dfc00.svg',
					style: {
						padding: 0,
						margin: 'auto'
					}
				}
				]
			]
		},
		notesAndRests: {
			icon: '/static/media/020-notes-and-rests.c89e09ce.svg',
			name: 'Notes and Rests',
			content: [
				[{
					text: 'Rhythm notation is created by altering the appearance of notes to indicate the relative duration that these notes occupy within a tab. Conversely, rests describe the relative length of silence. The names of the different notes and rests are derived from their fractional value of what is considered a beat:'
				},
				{
					img: '/static/media/notesRest-1.08b47b0e.svg'
				}
				],
				[
					{
						text: 'All the basic rhythmic values are just simple fractions of the 4-beat whole note. Let\'s look at the rhythm notation of the tab below:'
					},
					{
						img: '/static/media/notesRest-2.5661e5af.svg',
						style: {
							'padding-top': 0
						}
					},
					{
						text: 'We can see that each note has the value of quarter. Quarter notes last one beat each. You can play this tab fast or slow, but the relative duration stays the same (one note for one beat). Another example:'
					},
					{
						img: '/static/media/notesRest-3.c71fe703.svg'
					},
					{
						text: 'Here you can see the pause with duration of half (two beats) and then chord D5 is played four times with duration of eighth (half of a beat)'
					}
				],
				[
					{
						text: 'All rhythm values can be constructed from two rhythm values of half the duration:'
					},
					{
						img: '/static/media/notesRest-4.f90565a2.svg'
					}
				]
			]
		},
		dot: {
			icon: '/static/media/021-dots.31f934b1.svg',
			name: 'Dots',
			isSmall: !0,
			content: [
				[{
					text: 'Notes and rests can be attended by a small dot, appearing just to the right of the rhythmic element. This increases the duration of the note or rest by one half:'
				}
				],
				[
					{
						img: '/static/media/dots.24f8ffd3.svg'
					}
				]
			]
		},
		tie: {
			icon: '/static/media/022-ties.58e79b31.svg',
			name: 'Ties',
			isSmall: !0,
			content: [
				[{
					text: 'The duration of notes can also be increased by the use of ties. When tied together, the following notes are held for the duration of the second note as well. Rests are never tied together.'
				}
				],
				[
					{
						img: '/static/media/ties.aa8cb53c.svg'
					}
				]
			]
		},
		beam: {
			icon: '/static/media/023-beams.d7a856ca.svg',
			name: 'Beams',
			isSmall: !0,
			content: [
				[{
					text: 'It is common for smaller valued notes to be grouped together via beams. Grouped notes usually have the length of one beat. Rests are never beamed:'
				}
				],
				[
					{
						img: '/static/media/beams.a6ed9567.svg'
					}
				]
			]
		},
		triplet: {
			icon: '/static/media/024-triplets.41bcb169.svg',
			name: 'Triplets',
			content: [
				[{
					text: 'Generally triplet consists of three notes that will have duration of two notes of the same length when playing. In the example below notes are grouped in three\'s because the duration of 3 of this triplet\'s 1/8 notes equal the duration of only one 1/4 note (not 3/8). So basically instead of dividing the 1/4 note by 2 to get 1/8th notes, we have divided by three. In standard music notation these usually have a 3 written underneath the group.'
				},
				{
					img: '/static/media/triplets.0476992f.svg',
					style: {
						padding: '8px 0'
					}
				}
				]
			]
		},
		swingRhythm: {
			icon: '/static/media/029-swing-rhythm.92e5f4be.svg',
			name: 'Swing Rhythm',
			content: [
				[{
					text: 'In swing rhythm the pulse is divided unequally, such that certain subdivisions (typically either eighth note or sixteenth note subdivisions) alternate between long and short durations. Check out '
				},
				{
					text: 'this example',
					url: '/a/wsa/swing-and-straight-demonstration-tab-s475779t0'
				},
				{
					text: ' to discover the difference between swing eighths and straight ones.'
				}
				],
				[
					{
						img: '/static/media/swingRhythm.947dca91.svg',
						style: {
							padding: '8px 0'
						}
					}
				]
			]
		},
		repeat: {
			icon: '/static/media/025-repeats.62f9d46a.svg',
			name: 'Repeats',
			content: [
				[{
					text: 'Repeat is one of the most confusing parts of a tab notation. When a pair of dots accompanies a double bar, it signifies that you must repeat music either from the very front of the piece or front the previous repeat symbol as follows:'
				},
				{
					img: '/static/media/repeats.74bd695e.svg',
					style: {
						margin: '0 auto'
					}
				},
				{
					text: 'You should ignore repeat symbols with the dots on the right side the first time you encounter them; when you come to a repeat symbol with dots on the left side, jump back to the previous repeat symbol facing the opposite direction (if there is no previous symbol, go to the beginning of the piece). The next time you come to the repeat symbol, ignore it and keep going unless it includes instructions such as "3x" (repeat three times). See '
				},
				{
					text: 'Nirvana - Smells Like Teen Spirit',
					url: '/a/wsa/nirvana-smells-like-teen-spirit-tab-s269t2'
				},
				{
					text: ' song for example (bar 5).'
				}
				]
			]
		},
		alternateEnding: {
			icon: '/static/media/026-alternate-endings.25ed73fc.svg',
			name: 'Alternate Endings',
			content: [
				[{
					text: 'A section will often have a different ending after each repeat. The example below includes a first and a second ending. Play until you hit the repeat symbol, jump back to the previous repeat symbol (not shown on the picture) and play until you reach the bracketed first ending, skip the measures under the bracket and jump immediately to the second ending, and then continue. See '
				},
				{
					text: 'Eric Clapton - Tears In Heaven',
					url: '/a/wsa/eric-clapton-tears-in-heaven-tab-s4t2'
				},
				{
					text: ' for example (bar 45).'
				},
				{
					img: '/static/media/alternate-endings.245eefed.svg',
					style: {
						margin: '0 auto'
					}
				}
				]
			]
		}
	};
Object.keys(ym).map((t => ym[t].name)).join(' ');
const vm = function (t) {
	let e = '';
	return Object.keys(t).forEach((n => {
		let s = '',
			i = '';
		t[n].content.flat().some((t => (t.text && (s += t.text), t.img && (i = wr(t.img)), t.img))),
			e += `{
	  "@type": "HowToStep",
	  "url": "${wr(`/a/wa/howtoreadtab#${n}`)}",
	  "name": "${t[n].name}",
	  "image": {
		"@type": "ImageObject",
		"url": "${i || wr(gm)}"
	  },
	  "itemListElement": [{
		"@type": "HowToDirection",
		"text": "${s.replace(/"/g, '\\"')}"
	  }]
	},`
	})),
		`{
	"@context": "http://schema.org",
	"@type": "HowTo",
	"name": "How to Read a Tab",
	"description": "A complete list of musical techniques for reading tablature",
	"totalTime": "PT15M",
		"tool": [
	  {
		"@type": "HowToTool",
		"name": "music instrument"
	  }, {
		"@type": "HowToTool",
		"name": "tabulature"
	  }
	],
	"step": [${e.slice(0, - 1)}]
  }`
}(ym),
	wm = t => {
		!Pn && t.on('@init', (() => ({
			tabFeatures: void 0
		}))),
			t.on('tabFeatures/set', ((t, {
				features: e
			}) => ({
				tabFeatures: e
			}))),
			t.on('data/loadSong:processing', (() => ({
				tabFeatures: void 0
			})))
	};
function bm(t, e, n) {
	return [v('header', {
		className: 'C6vnt',
		'data-id': e
	}, v('h3', {
		className: 'C6vbn'
	}, t.name), n && v('a', {
		id: e,
		className: 'C6vnn'
	}, t.name)),
	xm(t)]
}
function xm(t) {
	const e = [
	];
	return t.content.forEach((n => {
		const s = [
		];
		n.forEach((e => {
			e.img ? s.push(v('img', {
				src: e.img,
				className: 'C6v1yr',
				style: e.style,
				alt: t.name
			})) : e.url ? s.push(v(Qo, {
				className: 'C6v10s',
				to: e.url
			}, e.text)) : s.push(v('p', {
				className: 'C6vmb'
			}, e.text))
		})),
			e.push(v('div', {
				className: 'C6v12c'
			}, s))
	})),
		e
}
function Sm(t, {
	hasIndex: e,
	hasPlus: n
}) {
	const s = [
	];
	let i = 0,
		a = [
		],
		o = 1;
	const r = () => {
		i && (2 !== i && 1 !== i || (n ? a.push(v('img', {
			src: gm,
			className: 2 === i ? 'C6v1a8' : 'C6v1xw'
		})) : a.push(v(Qo, {
			to: '/a/wa/plus',
			className: 2 === i ? 'C6v1a8' : 'C6v30v'
		}, v('img', {
			src: 2 === i ? '/static/media/plusSmallMock.315595c2.svg' : '/static/media/plusBigMock.828e7a22.svg'
		})))), s.push(v('div', {
			className: 'C6v22m',
			'data-section': `group-${o}`
		}, a)), a = [
		], i = 0, o++)
	};
	for (const n in t) t[n].isSmall ? (3 === i && r(), i++, a.push(bm(t[n], n, e))) : (r(), s.push(v('article', {
		className: 'C6v1tq',
		'data-section': n
	}, bm(t[n], n, e))));
	return r(),
		s
}
var km = Rn(T((function (t) {
	eh(t);
	const {
		isSmallScreen: e,
		track: n
	}
		= t,
		{
			hasPlus: s
		}
			= t.user,
		i = !e && function (t, e) {
			if (!t) return;
			const n = [
			],
				s = [
				];
			for (const i of Object.keys(e)) t[i] && (e[i].isSmall ? s.push(i) : n.push(i));
			return [...n,
			...s].reduce(((t, n) => (t[n] = e[n], t)), {
			})
		}(function (t, e, n) {
			if (!e) return !1;
			let s = t;
			return void 0 === s && (s = function (t) {
				const e = {
				};
				t.voices > 1 && (e.polyphony = !0);
				for (const n of t.measures) {
					n.repeat && (e.repeat = !0),
						n.tripletFeel && (e.swingRhythm = !0),
						n.alternateEnding && (e.alternateEnding = !0);
					for (const t of n.voices) if (!t.rest) for (const n of t.beats) {
						n.letRing && (e.letRing = !0),
							3 === n.tuplet && (e.triplet = !0),
							n.dotted && (e.dot = !0),
							(n.upStroke || n.downStroke) && (e.upDownStroke = !0),
							n.palmMute && (e.palmMute = !0),
							n.chord && (e.chord = !0),
							n.wideVibrato && (e.wideVibrato = !0);
						for (const t of n.notes) t.hp && (e.hammerOn = !0, e.pullOff = !0),
							t.tie && (e.tie = !0),
							t.bend && (t.bend.points[0].tone > t.bend.points[1].tone && (e.releaseBend = !0), e.bend = !0),
							t.ghost && (e.ghostNote = !0),
							t.dead && (e.deadNote = !0),
							t.vibrato && (e.vibrato = !0),
							'downwards' !== t.slide && 'shift' !== t.slide || (e.slide = !0),
							'legato' === t.slide && (e.legatoSlide = !0),
							'natural' === t.harmonic && (e.naturalHarmonic = !0),
							'pinch' === t.harmonic && (e.pinchHarmonic = !0)
					}
				}
				return e
			}(e), n('tabFeatures/set', {
				features: s
			})),
				s
		}(t.tabFeatures, t.data.part, t.dispatch), ym);
	return v(op, {
		title: 'How to Read a Tab',
		id: 'howToReadTab',
		styles: vf
	}, v('div', {
		className: 'C6v34k'
	}, !e && i && v('section', {
		className: 'C6v1oz'
	}, v('header', {
		className: 'C6v18r'
	}, v('h2', {
		className: 'C6v1a'
	}, 'Symbols and icons in the current track:'), v('span', {
		className: 'C6vsm'
	}, `${n.name} - ${n.instrument}`)), Sm(i, {
		hasIndex: !1,
		hasPlus: s
	})), Cf('toc'), v('section', {
		className: 'C6vgk',
		'data-section': 'toc'
	}, v('h2', {
		className: 'C6v2ep'
	}, 'Table of Contents'), v('div', {
		className: 'C6v2eu'
	}, function (t) {
		const e = [
		];
		for (const n in t) e.push(v('a', {
			className: 'C6vwb',
			href: `#${n}`
		}, v('img', {
			src: t[n].icon,
			className: 'C6v2jn'
		}), v('span', {
			className: 'C6v2j2'
		}, t[n].name)));
		return e
	}(ym))), _f('HowToReadTabPanel', '#toc'), v('section', {
		className: 'C6vbz'
	}, Sm(ym, {
		hasIndex: !0,
		hasPlus: s
	})), v('script', {
		type: 'application/ld+json'
	}, vm)))
})), 'data', 'track', 'user');
function Cm({
	width: t,
	height: e,
	styles: {
		icon: n,
		stroke: s
	}
}) {
	return v('svg', {
		width: t || 29,
		height: e || 27,
		viewBox: '0 0 29 27',
		className: n
	}, v('path', {
		d: 'M2 11a2 2 0 0 1 2-2h5v2h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2z'
	}), v('path', {
		className: s,
		'stroke-width': 2,
		d: 'M14.5 17v-15.5m-5 5l5 -5l5 5'
	}))
}
function _m(t) {
	return 0 === t.length && 'We unable to make difficulty bar feature better without your feedback'
}
function Em(t) {
	return 0 === t.length ? 'Cannot be empty' : t.indexOf('[_]/8') >= 0 && 'Please write your estimated difficulty level'
}
var Nm = Rn(class extends x {
	constructor(t) {
		super(t),
			this.name = I(),
			this.email = I(),
			this.summary = I(),
			this.why = I(),
			this.help = async t => {
				const e = JSON.stringify(this.props.experiments);
				t.preventDefault();
				let n = '',
					s = '',
					i = '',
					a = '';
				try {
					const t = [
					];
					this.props.user.isLoggedIn ? (s = this.props.user.profile.name, n = this.props.user.profile.email) : (s = 'Unknown', n = 'unknown@unknown.com');
					const r = this.summary && this.summary.current;
					r && (t.push({
						field: r,
						validator: Em
					}), i = r.value);
					const l = this.why && this.why.current;
					if (l && (t.push({
						field: l,
						validator: _m
					}), a = l.value), Fc(...t), this.setState({
						error: null,
						processing: !0
					}), '[_]/8' === i) return void this.setState({
						processing: !1,
						error: null,
						next: !0
					});
					const {
						meta: c,
						data: u
					}
						= this.props,
						d = wr(yr(c, u.partId, u.revisionId));
					o = {
						'entry.1399374818': s,
						'entry.1118530694': n,
						'entry.1897623272': i,
						'entry.969552357': a,
						'entry.809423345': `${d} ${e}`
					},
						function (t, e) {
							try {
								const t = new XMLHttpRequest;
								t.open('POST', 'https://docs.google.com/forms/d/e/1FAIpQLScovZQQlqnQ1cFM0ZZxZpWZ7Bq6IoEwV33I7TGu2GJu6hDjSQ/formResponse', !0),
									t.setRequestHeader('Accept', 'application/xml, text/xml, */*; q=0.01'),
									t.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8'),
									t.send(e)
							} catch (t) {
							}
						}(0, Object.keys(o).reduce(((t, e) => (t.push(`${e}=${encodeURIComponent(o[e])}`), t)), [
						]).join('&')),
						this.setState({
							processing: !1,
							error: null,
							next: !0
						})
				} catch (t) {
					this.setState({
						error: t,
						processing: !1
					})
				}
				var o
			},
			this.state = {
				error: null,
				processing: !1,
				next: !1
			}
	}
	componentDidMount() {
		if (Pn && this.summary && this.summary.current) {
			const t = this.summary.current,
				e = '[_]/8'.indexOf('_');
			t.setSelectionRange(e - 1, e + 2),
				t.focus()
		}
	}
	render() {
		eh(this.props);
		let t = '[_]/8';
		this.props.track && this.props.track.difficulty && (t += ` instead of ${Id.indexOf(Id.forName(this.props.track.difficulty)) + 1}/8`);
		const e = this.props.user.isLoggedIn,
			n = this.state.error,
			s = v(Nf, {
				key: 'help',
				className: 'Cxq2a7',
				'data-section': 'form'
			}, v('form', {
				noValidate: !0,
				onSubmit: this.help
			}, v(Gc, {
				error: n
			}), e && v(Xc, {
				ref: this.name,
				name: 'name',
				type: 'name',
				label: 'Name',
				placeholder: 'Name',
				defaultValue: e ? this.props.user.profile.name : '',
				autocomplete: 'name',
				readonly: e,
				error: n
			}), e && v(Xc, {
				ref: this.email,
				name: 'email',
				type: 'email',
				label: 'Email',
				defaultValue: e ? this.props.user.profile.email : '',
				placeholder: 'Email',
				autocomplete: 'email',
				readonly: e,
				error: n
			}), v(Xc, {
				ref: this.summary,
				type: 'input',
				name: 'estimatedDifficulty',
				label: 'Difficulty',
				defaultValue: t,
				placeholder: 'Your estimated difficulty level for the track',
				error: n
			}), v(Xc, {
				ref: this.why,
				type: 'textarea',
				name: 'why',
				label: 'Why',
				placeholder: 'Examples: complex techniques (which?), solo is too hard, complex chords, riffs are too fast, another song (which?) are easier but has greater difficulty value.',
				error: n
			}), v('div', {
				className: 'Cxq18v'
			}, v(zc, {
				id: 'send-report-btn',
				title: 'Send',
				processing: this.state.processing
			}), v(Lf, {
				className: Xn.buttonLinkFloat
			}, 'Cancel')))),
			i = v(Nf, {
				key: 'done',
				className: 'Cxq2a7',
				'data-section': 'done'
			}, v('h4', {
				className: 'Cxq1pl'
			}, 'Thanks for your report!'), v(Lf, null)),
			a = this.state.next ? i : s;
		return v(op, {
			title: 'Invalid Difficulty Report',
			id: 'report_invalid_difficulty'
		}, v(Un, null, a))
	}
}, 'user', 'track', 'experiments', 'meta', 'data');
function Lm({
	width: t,
	height: e,
	styles: {
		icon: n
	}
}) {
	return v('svg', {
		width: t || 29,
		height: e || 27,
		viewBox: '0 0 29 27',
		className: n
	}, v('path', {
		d: 'M16 12V4.5a1.5 1.5 0 0 0-3 0V12H5.5a1.5 1.5 0 0 0 0 3H13v7.5a1.5 1.5 0 0 0 3 0V15h7.5a1.5 1.5 0 0 0 0-3H16zm-5-2V3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7h7a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-7v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-7H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7z'
	}))
}
var Tm = {
	pane: 'Beb2d7',
	divider: 'Beb2lf',
	dividerTop: 'Beb3q',
	float: 'Beb1b1',
	icon: 'Beb10p',
	item: 'Beb2qb',
	logo: 'Beb1do',
	text: 'Beb1j5',
	stroke: 'Beb33b',
	itemActive: 'Beb2qb Beb1cn',
	logoText: 'Beb11f',
	overlay: 'Beb27t',
	sidebar: 'Beb24i',
	jobs: 'Beb27l'
},
	Im = {
		exitActive: 'ixbp',
		enterActive: 'ix299',
		enter: 'ix159',
		exit: 'ix2qb'
	},
	Am = {
		exitActive: 'Btos5',
		enterActive: 'Bto2jw',
		enter: 'Bto2az',
		exit: 'Bto32v'
	};
const Pm = {
	signin: [
		'signup',
		'forgotpassword'
	],
	account: [
		'changepassword',
		'cancelPlus',
		'deactivate',
		'updateCard'
	],
	plus: [
		'subscribePlus'
	]
};
function Mm({
	id: t,
	route: e,
	url: n,
	songUrl: s,
	children: i
}) {
	const a = p(Bn),
		o = t === e.page || t in Pm && - 1 !== Pm[t].indexOf(e.page),
		r = t === e.page ? s : n,
		l = A((t => {
			t.preventDefault(),
				a.dispatch('navigate', r)
		}), [
			r
		]);
	return v('a', {
		href: r,
		onClick: l,
		id: `menu-${t}`,
		class: o ? Tm.itemActive : Tm.item
	}, i)
}
function Bm(t) {
	const {
		search: e,
		popular: n
	}
		= On('search', 'popular');
	return v(Mm, Object.assign({
	}, t, {
		url: `${t.url}${Zd(e, n)}`
	}))
}
function Dm(t) {
	const {
		favorites: e
	}
		= On('favorites');
	return v(Mm, Object.assign({
	}, t, {
		url: `${t.url}${Zd(e, e)}`
	}))
}
function Om(t) {
	t.preventDefault()
}
const Rm = {
	search: Zp,
	favorites: cf,
	artist: yf,
	plus: tm,
	submit: mf,
	about: class extends x {
		render() {
			return eh(this.props),
				v(op, {
					title: 'About',
					id: 'about',
					styles: vf
				}, v('div', {
					className: 'B2r2uc'
				}, v('div', {
					className: 'B2r322'
				}, v('p', null, 'Songsterr is an ', v('strong', null, 'archive of guitar, bass and drum tabs'), '. It is collaboratively built and maintained by your fellow music lovers. Anyone with Internet access can contribute new tabs and make changes to existing ones. Much like ', v('a', {
					href: 'http://www.wikipedia.org/',
					rel: 'noopener noreferrer',
					target: '_blank'
				}, 'Wikipedia'), ', contributions cannot damage Songsterr because the software allows easy reversal of mistakes and experienced editors are watching to help and ensure that edits are cumulative improvements.'), v('p', null, 'Songsterr is also an ', v('strong', null, 'online tab player'), ' which makes learning tabs easier. It accompanies each tab with a song audio and automatically scrolls through each tab, indicating exactly which note is being played.')), v('div', {
					className: 'B2r2nh'
				}, v('p', null, v(Qo, {
					to: '/a/wa/plus'
				}, 'Paid plan'), ' unlocks advanced player features, including Print, Tempo Control, Loop and more.'), v('p', null, 'Finally, Songsterr has a ', v('strong', null, 'mobile app for ', v(ar, {
					os: 'iOS',
					extra: {
						source: 'about'
					}
				}, 'iOS'), ' and ', v(ar, {
					os: 'Android',
					extra: {
						source: 'about'
					}
				}, 'Android')), ' with instant access to realistic playback of 100,000 songs (500,000 tab tracks) from Songsterr.com. With the Songsterr app you no longer need to download tabs from third-party sites or upload them from your computer to your device.'), v('p', null, 'Songsterr is ', v('strong', null, '100% legal'), '. Support by paid users is the only thing that keeps the site alive by allowing us to pay royalties to music creators.'), v('p', null, v(Qo, {
					to: '/a/wa/help#contact-us'
				}, 'Contact us'), ' if you have any questions.'), v('div', {
					className: 'B2r1xp'
				}, v('img', {
					src: Sf,
					width: 182,
					height: 53,
					alt: 'Songsterr'
				}))), v('div', {
					className: 'B2rf3'
				}, v('div', {
					className: 'B2r110'
				}, v(ar, {
					os: 'iOS',
					extra: {
						source: 'about'
					}
				}, v('img', {
					src: or,
					width: 160,
					height: 53,
					alt: 'AppStore'
				})), v(ar, {
					os: 'Android',
					extra: {
						source: 'about'
					}
				}, v('img', {
					src: rr,
					width: 180.425532,
					height: 53,
					alt: 'Google Play'
				}))))))
		}
	},
	jobs: function (t) {
		return eh(t),
			v(op, {
				title: 'Работа в Songsterr',
				id: 'jobs',
				styles: vf
			}, v('div', {
				className: 'ry96'
			}, v('div', {
				className: 'ry2am'
			}, v('p', null, 'Одиннадцать лет назад мы поставили цель — дать людям действительно эффективный способ разучивания любимых песен. Мы с нуля создали ', v(Qo, {
				to: '/a/wa/about'
			}, 'продукт'), ', которым сегодня пользуются миллионы людей по всему миру. Наши ', v(ar, {
				os: 'iOS',
				extra: {
					source: 'jobs'
				}
			}, 'iOS'), ' и ', v(ar, {
				os: 'Android',
				extra: {
					source: 'jobs'
				}
			}, 'Android'), ' приложения стабильно держатся в топе лучших приложений App Store и Google Play. О нас писали Techcrunch, Mashable, Lifehacker и The Wall Street Journal.'), v('p', null, 'Если вы хотите работать в нашей команде, то пишите на ', v('a', {
				href: 'mailto:hq@songsterr.com'
			}, 'hq@songsterr.com'), '. Нам нужны iOS, Android и JavaScript разработчики и тестировщики.')), v('div', {
				className: 'ry1re'
			}, v('h3', {
				className: 'ry1rc'
			}, 'Причины работать с нами'), v('ul', {
				className: 'ry1fq'
			}, v('li', null, v('span', null, v('strong', null, 'Удаленная работа с гибким графиком.'), ' Нам важен только результат.')), v('li', null, v('span', null, v('strong', null, 'Оплачиваемый испытательный срок с частичной занятостью.'), ' Вы меняете работу, только если вам действительно у нас понравится. Никаких рисков.')), v('li', null, v('span', null, v('strong', null, 'Маленькая команда с плоской структурой.'), ' Ваш вклад будет огромным.')), v('li', null, v('span', null, v('strong', null, 'Ставка на рискованные инновационные идеи.'), ' Мы пытаемся в корне изменить подходы к обучению музыке.')), v('li', null, v('span', null, v('strong', null, 'Стабильность.'), ' Мы уже одиннадцать лет на рынке, уверенно прибыльны и растем.')), v('li', null, v('span', null, v('strong', null, 'Уникальная атмосфера.'), ' Культурная совместимость для нас важна не меньше, чем продуктивность.')), v('li', null, v('span', null, v('strong', null, 'Достойная компенсация.'), ' Мы предлагаем опцион, оплачиваем технику, поездки на конференции и занятия спортом.')))), v('div', {
				className: 'ry1u6'
			}, v('img', {
				src: Sf,
				width: 182,
				height: 53,
				alt: 'Songsterr'
			}))))
	},
	help: Of,
	signin: zf,
	signup: qf,
	report_invalid_difficulty: Nm,
	recoverpassword: Zf,
	changepassword: Zf,
	forgotpassword: Yf,
	account: Xf,
	cancelPlus: dm,
	deactivate: hm,
	updateCard: pm,
	subscribePlus: cm,
	howToReadTab: km,
	privacy: xf,
	terms: xf,
	dnsmpd: xf
},
	jm = T((({
		isSmallScreen: t,
		songUrl: e
	}) => {
		const {
			device: n,
			user: s,
			route: i,
			query: a
		}
			= On('device', 'user', 'route', 'query'),
			{
				isPanel: o,
				page: r
			}
				= i;
		n.isDesktop && y((() => function (t) {
			if (!document.body) return;
			const e = window.innerWidth - document.body.clientWidth,
				n = t ? '0px' : `${e}px`;
			document.body.style.overflow = t ? 'inherit' : 'hidden';
			const s = document.getElementById('app');
			s && (s.style.marginRight = n);
			const i = document.getElementById('controls');
			i && (i.style.marginRight = n);
			const a = document.getElementById('fullscreen-controls');
			a && (a.style.marginRight = n);
			const o = document.getElementById('showroom');
			o && (o.style.paddingRight = n);
			const r = document.documentElement;
			r && r.style.setProperty('--page-overflow-gap', n)
		}(!o)), [
			o
		]),
			Pn && g((() => function (t, e) {
				document.body && (t && Tf.includes(e) ? (document.body.classList.add('grecaptcha-visible'), If()) : document.body.classList.remove('grecaptcha-visible'))
			}(o, r)), [
				o,
				r
			]);
		const {
			isDesktop: l
		}
			= n,
			c = [
				'ru',
				'ru-mo',
				'be',
				'uk'
			].some((t => - 1 !== n.languages.indexOf(t))),
			{
				hasPlus: u,
				isLoggedIn: d,
				profile: h
			}
				= s;
		return v('div', {
			className: Tm.pane
		}, !t && v('nav', {
			className: Tm.float,
			id: 'tablist'
		}, v(Qo, {
			to: '/',
			id: 'logo',
			className: Tm.logo,
			title: 'Songsterr'
		}, v('img', {
			src: '/static/media/main.866931f6.svg',
			width: 30,
			height: 36,
			alt: 'Songsterr'
		}), v('img', {
			src: '/static/media/text.9cfe6bcf.svg',
			width: 62,
			height: 12,
			alt: 'Songsterr'
		})), v('div', {
			className: Tm.dividerTop
		}), v(Bm, {
			id: 'search',
			route: i,
			url: '/',
			songUrl: e
		}, v(np, {
			styles: Tm
		}), v('div', {
			className: Tm.text
		}, 'Songs')), v(Dm, {
			id: 'favorites',
			route: i,
			url: '/a/wa/favorites',
			songUrl: e
		}, v(yu, {
			styles: Tm
		}), v('div', {
			className: Tm.text
		}, 'Favorites')), l && v(Mm, {
			id: 'submit',
			route: i,
			url: '/a/wa/submit',
			songUrl: e
		}, v(Cm, {
			styles: Tm
		}), v('div', {
			className: Tm.text
		}, 'Submit Tab')), v('div', {
			className: Tm.divider
		}), !u && v(Mm, {
			id: 'plus',
			route: i,
			url: '/a/wa/plus',
			songUrl: e
		}, v(Lm, {
			styles: Tm
		}), v('div', {
			className: Tm.text
		}, 'Songsterr Plus')), v(Mm, {
			id: 'help',
			route: i,
			url: '/a/wa/help',
			songUrl: e
		}, v(Fh, {
			styles: Tm
		}), v('div', {
			className: Tm.text
		}, 'Questions?')), v('div', {
			className: Tm.divider
		}), !d && v(Mm, {
			id: 'signin',
			route: i,
			url: '/a/wa/signin',
			songUrl: e
		}, v(hu, {
			styles: Tm
		}), v('div', {
			className: Tm.text
		}, 'Sign In')), d && v(Mm, {
			id: 'account',
			route: i,
			url: '/a/wa/account',
			songUrl: e
		}, v(sp, {
			styles: Tm
		}), v('div', {
			className: Tm.text
		}, h.name)), v('div', {
			className: Tm.divider
		}), l && c && v(Qo, {
			id: 'menu-jobs',
			to: '/a/wa/jobs',
			className: Tm.jobs,
			title: 'Jobs at Songsterr'
		}, v('img', {
			src: '/static/media/jobs.9ce7bc25.svg',
			width: 79.271,
			height: 32,
			alt: 'Jobs'
		}))), v(Un, null, o && v(Gn, {
			animationStyles: Am,
			timeout: 400,
			key: 'overlay'
		}, v(Qo, {
			onTouchMove: Om,
			className: Tm.overlay,
			id: 'sidebar-overlay',
			to: e,
			title: 'Back to tab',
			tabIndex: - 1
		})), i.page in Rm && v(Gn, {
			animationStyles: Im,
			timeout: 400,
			key: i.page
		}, v(Rm[i.page], {
			route: i,
			query: a,
			user: s,
			device: n,
			isSmallScreen: t
		}))))
	}));
function $m() {
	const {
		dispatch: t,
		device: e
	}
		= On('device'),
		{
			os: n,
			isDesktop: s
		}
			= e;
	return Pn && y((() => t('curiosity/error', {
		error: 'Something Went Wrong'
	})), [
	]),
		v('section', {
			className: 'xke6'
		}, v('h5', {
			className: 'xk1ks'
		}, v('span', null, 'Something Went Wrong')), v('p', {
			className: 'xk302'
		}, 'We track these errors automatically, but if the problem persists feel free to ', v(Qo, {
			to: '/a/wa/help#contact-us'
		}, 'contact us'), '. In the meantime, try refreshing.'), !s && v('p', {
			className: 'xk302'
		}, 'Also can view this tab in the app', v(ar, {
			attrs: {
				id: 'Plus-store',
				className: 'xk11n'
			},
			extra: {
				source: 'sww'
			}
		}, Zo(n) ? v('img', {
			src: rr,
			width: 160,
			height: 47,
			alt: 'Google Play'
		}) : v('img', {
			src: or,
			width: 160,
			height: 53,
			alt: 'AppStore'
		}))))
}
function Fm() {
	return v('section', {
		className: 'C6x20e'
	}, v('h1', {
		className: 'C6xhc'
	}, v('span', null, 'Page Not Found!')), v('h2', {
		className: 'C6xy8'
	}, 'Please try ', v(Qo, {
		to: '/'
	}, 'searching'), ' for the song you need.'))
}
function Hm() {
	return v('section', {
		className: 'Bcaic',
		role: 'alert'
	}, v('h1', {
		className: 'Bca8k'
	}, v('span', null, 'The song was successfully deleted!')), v('h2', {
		className: 'Bca1ac'
	}, 'Try ', v(Qo, {
		to: '/'
	}, 'searching'), ' for other songs.'))
}
function zm() {
	if (Pn) {
		const {
			dispatch: t
		}
			= On();
		y((() => t('curiosity/error', {
			error: 'Network'
		})), [
		])
	}
	return v('section', {
		className: 'C6x20e'
	}, v('h1', {
		className: 'C6xhc'
	}, v('span', null, 'Network Error')), v('h2', {
		className: 'C6xy8'
	}, 'Please, check your network connection and try again.'))
}
var qm = {
	wrap: 'Calmr',
	inner: 'B641uo Cals',
	banner: 'Cal2xs'
};
const Um = T((() => {
	const t = X(),
		{
			dispatch: e,
			consent: n,
			ads: s,
			device: i
		}
			= On('consent', 'ads', 'device');
	if (void 0 === n.profiling) return;
	const a = Zo(i.os),
		o = [
			'ru',
			'ru-mo',
			'be',
			'uk'
		].some((t => - 1 !== i.languages.indexOf(t))),
		r = a ? 'Master rhytm skills with Rhythm Trainer by Songsterr' : 'Pento. Learn to improvise.',
		l = a ? 'Clicked on RRA banner' : 'Clicked on Pento banner',
		c = a ? 'https://play.google.com/store/apps/details?id=ru.demax.rhythmerr&referrer=utm_source%3DSRWMbanner320x50' : 'https://apps.apple.com/app/apple-store/id1339653031?pt=88060802&ct=SRWM_banner_320x50&mt=8',
		u = a ? o ? '/static/media/rra640ru.3dfded89.png' : '/static/media/rra640en.2ff86105.png' : o ? '/static/media/pento640ru.3bc567b2.png' : '/static/media/pento640en.051b67cf.png';
	return Pn && (fp('tab_page_mobile', {
		isTargeted: !0,
		page: 'tab'
	}), y((() => {
		const e = t.current;
		if (e) try {
			const t = document.getElementById('header'),
				n = new IntersectionObserver((t => {
					t.forEach((t => {
						t.isIntersecting ? e.classList.contains('hidden') && e.classList.remove('hidden') : !e.classList.contains('hidden') && e.classList.add('hidden')
					}))
				}), {
					rootMargin: '-120px 0px 0px 0px'
				});
			return t && n.observe(t),
				() => n.disconnect()
		} catch (t) {
		}
	}), [
		t
	])),
		v('div', {
			id: 'showroom_header',
			className: qm.wrap,
			ref: t
		}, v('div', {
			id: 'Redesign_ATF_tab_page_320х50',
			className: qm.inner
		}, s.notsyFailed && v('a', {
			className: qm.link,
			onClick: () => {
				e('curiosity/event', {
					event: l
				})
			},
			href: c,
			target: '_blank'
		}, v('img', {
			src: u,
			className: qm.banner,
			alt: r
		}))))
}));
function Wm(t) {
	switch (Number(t)) {
		case 1:
			return '/static/media/rri414.3c0c62dc.svg';
		case 2:
			return '/static/media/rri414_2.58402ce1.svg';
		case 3:
		default:
			return '/static/media/rri414_3.a7f92705.svg'
	}
}
const Vm = T((({
	songId: t
}) => {
	const {
		dispatch: e,
		device: n,
		user: s
	}
		= On('device', 'user'),
		i = A((() => {
			e('curiosity/setConversionProps', {
				'Last referring link': 'Footer Banner'
			})
		}), [
		]),
		a = Zo(n.os),
		o = Jo(n.os),
		r = !a && !o;
	if (o) {
		let t = Math.random() < 0.5,
			e = Math.floor(3 * Math.random());
		if (Pn && !window.__SHOWROOM_INITIALIZED__) {
			try {
				const n = document.querySelector('#showroom img').src.match(/rri414_?(\d)?/);
				n ? (t = !0, e = + (n[1] || 1)) : t = !1
			} catch (t) {
				console.error(t)
			}
			window.__SHOWROOM_INITIALIZED__ = !0
		}
		if (t && s.isLoggedIn && !s.hasPlus) return v('div', {
			className: 'Cqsav',
			id: 'showroom'
		}, v('a', {
			className: 'Cqs2sm',
			href: 'https://apps.apple.com/app/apple-store/id1319997438?pt=414338&mt=8',
			target: '_blank'
		}, v('img', {
			src: Wm(e),
			className: 'Cqspx',
			alt: 'Master rhytm skills with Rhythm Trainer by Songsterr'
		})))
	}
	if (r) {
		const {
			ads: t
		}
			= On('ads');
		return fp('tab_page', {
			isTargeted: !0,
			page: 'tab'
		}),
			v('div', {
				className: 'Cqsav',
				id: 'showroom'
			}, v('div', {
				className: 'B641uo Cqsg0',
				id: 'Redesign_ATF_tab_page_728x90'
			}, t.notsyFailed && v(Qo, {
				className: 'Cqs27c',
				to: '/a/wa/plus',
				onClick: i
			}, v('img', {
				src: '/static/media/plus-banner-footer.4228cdfb.svg',
				alt: 'Get Plus'
			}))))
	}
	return v('div', {
		className: 'Cqsav',
		id: 'showroom'
	}, v(ar, {
		attrs: {
			className: 'Cqs2sm'
		},
		extra: {
			songId: t,
			source: 'bottom_banner'
		},
		shouldTrack: !0
	}, v('img', {
		src: '/static/media/download414.e04f7a20.svg',
		className: 'Cqspx',
		alt: 'Download the App'
	})))
}));
var Gm = {
	exitActive: 'Cx8aa',
	enterActive: 'Cx82ez',
	enter: 'Cx821x',
	exit: 'Cx81x3'
};
function Xm(t) {
	return t ? 'B1vxv B1v1g1' : 'B1vxv B1v3s'
}
class Ym extends x {
	constructor(t) {
		super(t),
			this.state = {
				online: !Pn || navigator.onLine,
				className: Pn ? Xm(navigator.onLine) : 'B1vxv B1v1g1',
				message: Pn ? navigator.onLine ? null : 'offline' : null
			},
			this.updateOnlineStatus = this.updateOnlineStatus.bind(this),
			this.hideIndicator = this.hideIndicator.bind(this)
	}
	componentDidMount() {
		window.addEventListener('online', this.updateOnlineStatus),
			window.addEventListener('offline', this.updateOnlineStatus)
	}
	componentWillUnmount() {
		window.removeEventListener('online', this.updateOnlineStatus, !0),
			window.removeEventListener('offline', this.updateOnlineStatus, !0)
	}
	hideIndicator() {
		this.state.online && this.setState(Object.assign({
		}, this.state, {
			message: null
		}))
	}
	updateOnlineStatus() {
		navigator.onLine && (clearTimeout(this.hideIndicatorTimeout), this.hideIndicatorTimeout = setTimeout(this.hideIndicator, 5000)),
			this.setState({
				online: navigator.onLine,
				className: Xm(navigator.onLine),
				message: navigator.onLine ? 'live' : 'offline'
			})
	}
	render() {
		const {
			online: t,
			className: e,
			message: n
		}
			= this.state;
		let s = null;
		return !n && t || (s = v(Gn, {
			animationStyles: Gm,
			timeout: 400
		}, v('div', {
			className: e
		}, n))),
			v(Un, null, s)
	}
}
const Zm = t => {
	window && !window.confirm('Are you sure?') && t.preventDefault()
};
var Jm = ({
	meta: {
		songId: t
	},
	drawingExperiment: e,
	onDrawingMenuClick: n
}) => {
	const s = vr('deleteSong', t),
		i = vr('editSong', t),
		a = vr('updateSrwr', t),
		o = vr('rerender', t),
		r = vr('generatePng', t),
		l = vr('blockDueToLicenseRestriction', t);
	return v('nav', {
		className: 'Bkv1ys'
	}, v('a', {
		className: 'Bkv2i9',
		href: s,
		target: '_blank'
	}, 'Delete'), v('a', {
		className: 'Bkv2i9',
		href: i,
		target: '_blank'
	}, 'Edit'), v('a', {
		className: 'Bkv2i9',
		href: a,
		target: '_blank',
		onClick: Zm
	}, 'Update'), v('a', {
		className: 'Bkv2i9',
		href: o,
		target: '_blank',
		onClick: Zm
	}, 'Rerender'), v('a', {
		className: 'Bkv2i9',
		href: l,
		target: '_blank',
		onClick: Zm
	}, 'Block'), v('a', {
		className: 'Bkv2i9',
		href: r,
		target: '_blank'
	}, 'Generate PNG'), v('a', {
		className: 'Bkv2i9 Bkv35b',
		href: Pn && window.location.href.replace(/https:\/\/(.*?)\.songsterr\.(com|dev):*\d*/, 'https://midi.songsterr.dev'),
		target: '_blank'
	}, 'MIDI'), e && v('a', {
		className: 'Bkv2i9',
		href: '',
		onClick: n,
		target: '_blank'
	}, 'Drawings'))
},
	Km = Rn(class extends x {
		componentDidMount() {
			this.props.dispatch('drawing/loadDrawingsData')
		}
		render() {
			const {
				adminDrawingsList: t,
				adminDrawingId: e
			}
				= this.props.drawing,
				n = [
				];
			t.forEach((t => {
				const e = t.updated.toLocaleDateString('ru-RU'),
					s = n.find((t => e === t.date));
				s ? s.items.push(t) : n.push({
					date: e,
					items: [
						t
					]
				})
			}));
			const s = n.map((t => {
				const n = t.items.map((t => v('li', {
					className: t.id === e ? 'Bx8x4' : void 0,
					onClick: () => this.props.dispatch('drawing/loadDrawingById', t.id)
				}, `id${t.id}-song${t.songId}-user${t.owner}`)));
				return v('div', null, v('h2', null, t.date), v('ul', null, ...n))
			}));
			return v('div', {
				className: 'Bx82wj'
			}, v('h1', {
			}, 'Last updated drawings:'), ...s)
		}
	}, 'drawing');
const Qm = t => t < 100 ? 50 : 100,
	tg = {
		solo: 's',
		focus: 'f',
		mute: 'm'
	};
async function eg(t, e, n, s, i) {
	const a = t.get(),
		o = a.meta,
		r = Qm(a.player.speed),
		l = a.player.type,
		c = a.player.audio,
		u = !(null === c.context || !window.Worker),
		d = o.audio;
	if (c && d && u && Cr) {
		const i = `${e}/${s}/${d}/${r}/${tg[l]}/${n}.opus`;
		t.dispatch('player/open', {
			url: i
		})
	}
}
async function ng(t, e, n, s, i) {
	try {
		const a = t.get().data.songId !== e,
			o = t.get().data.partId !== n;
		Pn && t.dispatch('player/suspend', 'fetch'),
			t.dispatch('data/loadSong:processing', {
				songId: e,
				partId: n,
				revisionId: s,
				songHasChanged: a,
				partHasChanged: o
			});
		const r = t.get().data;
		let l = t.get().meta;
		if (!l || l.songId !== e || (s || r.customRevision) && l.revisionId !== s) {
			if (l = await $u(e, s, i.signal), i.signal.aborted || !l) return;
			l.tracks && vu(l.tracks),
				t.dispatch('data/loadSong:loadedMeta', {
					songId: e,
					revisionId: s,
					partId: n,
					meta: l
				})
		} else t.dispatch('data/loadSong:reuseMeta', {
			songId: e,
			revisionId: s,
			partId: n,
			meta: l
		});
		if (Pn && l.tracks && !l.tracks[n]) return void t.dispatch('navigate', yr(l));
		if (cu(l)) {
			const s = [
				sg(t, e, n, l.revisionId, l, i.signal)
			];
			Pn && (s.push(eg(t, e, n, l.revisionId)), async function (t, e, n) {
				const s = t.get();
				if (!s.device.isPhone && e) try {
					if (e !== s.annotations.revisionId) {
						t.dispatch('annotations/load:processing');
						const s = await async function (t, e) {
							const n = `/api/revision/${t}/annotations`;
							return Lc((() => n), 0, e)
						}(e, n);
						if (!s || n.aborted) return;
						t.dispatch('annotations/load:done', {
							revisionId: e,
							annotations: s
						})
					}
				} catch (e) {
					if (n.aborted) return;
					t.dispatch('annotations/load:error', e)
				}
			}(t, l.revisionId, i.signal)),
				await Promise.all(s)
		}
		if (i.signal.aborted) return;
		if (Pn) {
			const e = new Date,
				i = yr(l, n, s);
			e.setTime(e.getTime() + 7776000000),
				document.cookie = `lastSeenTrack=${i};expires=${e.toUTCString()};path=/`,
				t.dispatch('player/resume', 'fetch')
		}
	} catch (e) {
		if (i.signal.aborted) return;
		t.dispatch('data/loadSong:error', e)
	}
}
async function sg(t, e, n, s, i, a) {
	let o = t.get().data.part;
	if ((!o || o.songId !== e || o.partId !== n || s && o.revisionId !== s) && await Promise.all([ig(t, e, n, s, i, a),
	ag(t, e, s, i, a)]), a.aborted) return;
	const r = t.get().data;
	return o = r.part,
		o && async function (t, e, n, s, i, a, o, r) {
			const l = {
				useStdDrumNotation: 'drop' !== t.get().experiments.drum_standard_notation
			},
				[
					c,
					u
				] = function (t, e = [
				], n = Li) {
					const s = n.useStdDrumNotation || Li.useStdDrumNotation,
						i = new Zs(t, 0, e, s),
						a = new Ds(0, i, 0),
						o = i.voices || 1,
						r = new Array(o);
					for (let t = 0; t < o; t++) r[t] = {
						ties: new Array(i.strings),
						slides: new Array(i.strings),
						slurs: new Array(i.strings),
						bends: new Map,
						prevBeat: null,
						prevNoteOnString: new Map
					};
					let l = [
						4,
						4
					],
						c = null;
					const u = t.measures.length;
					for (let n = 0; n < u; n++) {
						const s = t.measures[n],
							o = new js(s, n, l, a.layout);
						i.measures[n] = o,
							o.hasSignature && (l = o.signature),
							Ei(o, i.automations.tempo),
							c = Ci(o, c);
						const u = s.voices.length;
						for (let t = 0; t < u; t++) {
							const e = s.voices[t],
								n = new ti(e, t);
							if (o.voices[t] = n, 0 !== t && e.rest) continue;
							o.rhythmLines += o.rest || n.hasSameRhythm ? 0 : 1;
							const a = r[t];
							let l = 0;
							const c = e.beats && e.beats.length ? e.beats : _i;
							for (let e = 0; e < c.length; e++) {
								const s = c[e];
								let r = o.beatsLayoutsByTime.get(l);
								r || (r = new xs(o.layout), o.beatsLayoutsByTime.set(l, r));
								const u = new bs(s, e, r);
								a.prevBeat && (a.prevBeat.nextBeat = u, u.prevBeat = a.prevBeat),
									a.prevBeat = u,
									n.beats[e] = u,
									u.voice = t,
									r.beats.unshift(u),
									l += ps(s.duration);
								const d = s.notes.length;
								for (let e = 0; e < d; e++) {
									const n = s.notes[e],
										r = new Vs(n, u, e);
									i.usedDrums && (r.string = Ws(r.fret, i.isDrumStdOn)),
										u.notes[e] = r,
										r.rest ? 0 === t && mi(u) : (gi(u, r), yi(i, r), bi(r, u, o, a.bends), wi(r, u, o, a.slides), vi(r, u, o, a.slurs), Si(r, u, o, a.ties), ki(r, a.prevNoteOnString))
								}
								xi(0, 0, a.bends);
								const h = u.notes.find((t => t.harmonic));
								u.harmonic = h ? h.harmonic : void 0
							}
							o.duration = Math.max(o.duration, l)
						}
						if (e) {
							const t = e[n];
							if (t) {
								const e = new ti(null, o.voices.length);
								e.lyrics = !0;
								let n = 0;
								const s = t.beats.length;
								for (let i = 0; i < s; i++) {
									const s = t.beats[i];
									let a = o.beatsLayoutsByTime.get(n);
									a || (a = new xs(o.layout), o.beatsLayoutsByTime.set(n, a));
									const r = new bs(s, i, a);
									e.beats[i] = r,
										a.beats.unshift(r),
										n += ps(r.duration)
								}
								s && (o.duration = Math.max(o.duration, n), o.voices.unshift(e))
							}
						}
						Ni(o, e)
					}
					i.usedDrums && !i.isDrumStdOn && function (t) {
						for (const e of $s) {
							let n = 0;
							for (const s of e) t.has(s.key) && n++;
							if (n > 1) for (const n of e) t.set(n.key, Object.assign({
							}, n.value, {
								fret: n.key
							}))
						}
					}(i.usedDrums);
					try {
						const t = function (t) {
							const e = new Map,
								n = [
								],
								s = [
								];
							let i = Rs,
								a = 960,
								o = 960,
								r = 0,
								l = 0,
								c = null,
								u = 0,
								d = !1,
								h = 0;
							for (let p = 0; p < t.length;) {
								if (h++, h > 100000) throw new Error('Watchdog');
								const f = t[p],
									m = f.beatsLayoutsByTime,
									g = f.tempoLayoutsByTime,
									y = ps(f.signature),
									v = f.beatsLayoutsTimes || [
									];
								let w = m.get(0),
									b = r;
								const x = r,
									S = l;
								if (w) {
									const t = l - 2 * r;
									w.shifts.push(t),
										n.push(t),
										w.occurrences.push(r),
										e.set(r, w);
									const c = g.get(0);
									c && (i = c.tempo, s.push({
										timestamp: r,
										tempo: i
									}), a = Math.floor(si(i)), o = Math.floor(2 * si(i)));
									for (let t = 1; t < v.length; t++) {
										const s = v[t],
											i = m.get(s);
										if (i) if (s < y) {
											const t = fs(s);
											r = x + ii(ai(t, a)),
												l = S + ii(ai(t, o)),
												w.duration = r - b;
											const c = l - 2 * r;
											w.shifts.push(c),
												n.push(c),
												i.occurrences.push(r),
												e.set(r, i),
												w = i,
												b = r
										} else i.occurrences.push(r)
									}
								}
								const k = fs(y);
								if (r = x + ii(ai(k, a)), l = S + ii(ai(k, o)), w && (w.duration = r - b), !f.reprise || f.reprise.startIndex !== f.index || c && c.startIndex === f.index || (c = f.reprise, u = 1), c) {
									if (f.repeat && u < f.repeat) p = c.startIndex,
										u++,
										d = !1;
									else if (p++, p < t.length) {
										const e = t[p];
										if (e.alternateEnding) {
											let t = !1;
											for (const n of e.alternateEnding.alternateEnding) if (n === u) {
												t = !0;
												break
											}
											t ? d = !0 : d ? (p = c.startIndex, u++, d = !1) : (p = c.getEnding(u) || c.endIndex + 1, d = !0)
										}
										p > c.endIndex && (c = !1, u = 0)
									}
								} else p++
							}
							return {
								timeline: e,
								tempos: s,
								shifts: n
							}
						}(i.measures);
						i.timeline = t.timeline,
							i.tempos = t.tempos,
							i.shifts = t.shifts,
							i.timestamps = [
								...i.timeline.keys()
							]
					} catch (t) {
						return [t,
							i]
					}
					return [null,
						i]
				}(i, a, l);
			if (c) throw c;
			r && r.aborted || (gs(u.instrumentId), t.dispatch('data/loadSong:inflate', {
				songId: e,
				revisionId: s,
				partId: n,
				part: u
			}))
		}(t, e, n, s, o, r.lyrics, 0, a)
}
async function ig(t, e, n, s, i, a) {
	const o = async function (t, e, n, s, i) {
		const a = `part_${e}_${n}_${s || ''}`;
		if (!ju) {
			const t = await Su(a);
			if (t) return t
		}
		const o = await Lc((i => ju ? `/data/${t}/${e}/${n}.json` : s ? `https://${Ou[i % Ou.length]}.cloudfront.net/${t}/${e}/${s}/${n}.json` : `https://${Ru[i % Ru.length]}.cloudfront.net/part/${e}/${n}`), 0, i);
		return !o || i.aborted ? null : (ju || await ku(a, o), o)
	}(e, s, n, i.image, a),
		[
			r
		] = await Promise.all([o]);
	r && !a.aborted && t.dispatch('data/loadSong:loadedPart', {
		songId: e,
		revisionId: s,
		partId: n,
		part: r
	})
}
async function ag(t, e, n, s, i) {
	let a = t.get().data.lyrics;
	if (!s.image || s.lyrics) {
		if (!a && (a = await async function (t, e, n, s) {
			const i = `lyrics_${e}_${n || ''}`;
			if (!ju) {
				const t = await Su(i);
				if (t) return t
			}
			const a = await Lc((s => ju ? `/data/${t}/${e}/lyrics.json` : n ? `https://${Ou[s % Ou.length]}.cloudfront.net/${t}/${e}/${n}/lyrics.json` : `https://${Ru[s % Ru.length]}.cloudfront.net/lyrics/${e}`), 0, s);
			return !a || s.aborted ? null : (ju || await ku(i, a), a)
		}(e, n, s.image, i), i.aborted)) return
	} else a = null;
	a !== t.get().data.lyrics && t.dispatch('data/loadSong:loadedLyrics', {
		songId: e,
		lyrics: a,
		meta: s
	})
}
const og = t => {
	!Pn && t.on('@init', (() => ({
		data: {
			songId: 0,
			partId: 0,
			revisionId: 0,
			ready: !1,
			isFailed: !1,
			isNotFound: !1,
			isNetworkFailed: !1,
			customRevision: !1
		},
		isCursorFailed: !1,
		isMetaLoading: !1,
		meta: {
			songId: 0,
			artistId: 0,
			revisionId: 0,
			audio: void 0,
			image: void 0,
			title: '',
			artist: '',
			restriction: '',
			tracks: void 0,
			lyrics: void 0
		},
		track: null
	}))),
		t.on('data/loadSong:processing', ((t, {
			songId: e,
			partId: n,
			revisionId: s
		}) => {
			const i = t.data.songId !== e;
			return {
				data: Object.assign({
				}, t.data, {
					songId: e,
					partId: n,
					revisionId: s,
					ready: !1,
					isFailed: !1,
					isNetworkFailed: !1,
					isNotFound: !1,
					wasFavoriteOnServerRender: i ? void 0 : t.data.wasFavoriteOnServerRender,
					lyrics: i ? void 0 : t.data.lyrics
				}),
				isCursorFailed: !1,
				isMetaLoading: !0
			}
		})),
		t.on('data/loadSong:loadedMeta', ((t, {
			songId: e,
			partId: n,
			revisionId: s,
			meta: i
		}) => ({
			data: Object.assign({
			}, t.data, {
				customRevision: !!t.data.revisionId
			}),
			isMetaLoading: !1,
			meta: i,
			track: i.tracks ? i.tracks[n] : null
		}))),
		t.on('data/loadSong:reuseMeta', ((t, {
			songId: e,
			partId: n,
			revisionId: s,
			meta: i
		}) => ({
			isMetaLoading: !1,
			track: i.tracks ? i.tracks[n] : null
		}))),
		t.on('data/loadSong:loadedPart', ((t, {
			songId: e,
			revisionId: n,
			partId: s,
			part: i
		}) => {
			if (t.data.songId !== e || t.data.partId !== s || t.data.revisionId && t.data.revisionId !== n) throw new Error('Wrong state at part loaded');
			return {
				data: Object.assign({
				}, t.data, {
					part: i
				})
			}
		})),
		t.on('data/loadSong:loadedLyrics', ((t, {
			songId: e,
			lyrics: n,
			meta: s
		}) => {
			if (t.data.songId !== e) throw new Error('Wrong state at lyrics loaded');
			return {
				data: Object.assign({
				}, t.data, {
					lyrics: n
				})
			}
		})),
		t.on('data/setWasFavoriteOnServerRender', ((t, e) => ({
			data: Object.assign({
			}, t.data, {
				wasFavoriteOnServerRender: e
			})
		}))),
		t.on('data/loadSong:error', ((t, e) => ({
			data: Object.assign({
			}, t.data, {
				isFailed: !0,
				isNetworkFailed: e instanceof oc && 0 === e.status,
				isNotFound: e instanceof oc && (404 === e.status || 400 === e.status)
			}),
			isMetaLoading: !1
		}))),
		t.on('data/errorCursor', (t => ({
			isCursorFailed: !0
		})))
};
function rg() {
	const {
		dispatch: t,
		screener: e
	}
		= On('screener'),
		n = e.active;
	return n ? v('div', {
		className: 'A1lj'
	}, v(Qc, {
		onClick: () => {
			t('screener/set', void 0)
		},
		id: 'screener'
	}), v('h2', {
		className: 'A179'
	}, n.title), v('p', {
		className: 'A1eo'
	}, n.body), v('a', {
		className: 'Cpb24q Cpb14i Cpb1y5 Ahd',
		href: n.link,
		onClick: () => {
			t('screener/set', void 0)
		},
		rel: 'noopener noreferrer',
		target: '_blank'
	}, n.button)) : null
}
const lg = t => ({
	user: {
		profile: t,
		hasPlus: 'PLUS' === t.plan,
		isAdmin: t.admin,
		hasSubscription: 'PLUS' === t.plan && !!t.subscription,
		isLoggedIn: !0
	}
}),
	cg = () => ({
		user: {
			profile: null,
			hasPlus: !1,
			hasSubscription: !1,
			isAdmin: !1,
			isLoggedIn: !1
		}
	});
function ug(t, e) {
	return Object.assign({
	}, t.user.profile, {
		subscription: e.subscription,
		plan: 'PLUS'
	})
}
const dg = t => {
	!Pn && t.on('@init', cg),
		!Pn && t.on('user/init', ((t, e) => lg(e))),
		t.on('user/signIn', ((t, e) => lg(e))),
		t.on('user/googleSignIn', ((t, e) => lg(e.profile))),
		t.on('user/signUp', ((t, e) => lg(e))),
		t.on('user/profile', ((t, e) => lg(e))),
		t.on('user/signOut', (t => ({
			user: {
				profile: null,
				hasPlus: !1,
				hasSubscription: !1,
				isAdmin: !1,
				isLoggedIn: !1
			}
		}))),
		t.on('user/recoverPassword', ((t, e) => lg(e))),
		t.on('user/subscribePlus', ((t, e) => {
			const n = ug(t, e);
			return lg(n)
		})),
		t.on('user/cancelPlus', ((t, e) => lg(e))),
		t.on('user/deactivate', (() => ({
			user: {
				profile: null,
				hasPlus: !1,
				hasSubscription: !1,
				isAdmin: !1,
				isLoggedIn: !1
			}
		})))
};
let hg,
	pg;
function fg(t, e, n, s) {
	try {
		window.ga('send', 'event', {
			eventCategory: t,
			eventAction: e,
			eventLabel: n,
			eventValue: s
		})
	} catch (t) {
		console.error(t)
	}
}
Pn && (void 0 !== document.hidden ? (hg = 'hidden', pg = 'visibilityState') : void 0 !== document.mozHidden ? (hg = 'mozHidden', pg = 'mozVisibilityState') : void 0 !== document.msHidden ? (hg = 'msHidden', pg = 'msVisibilityState') : void 0 !== document.webkitHidden && (hg = 'webkitHidden', pg = 'webkitVisibilityState'));
const mg = {
	'Used metronome': !1,
	'Used countin': !1,
	'Used solo': !1,
	'Used mute': !1,
	'Used playback': !1,
	'Used speed': !1,
	'Used loop': !1,
	'Used mixer': !1,
	'Used pitchshift': !1,
	'Used fullscreen': !1
},
	gg = () => ({
		curiosity: {
			conversion: {
			},
			VPT10Props: mg
		}
	}),
	yg = t => {
		if (!Pn && t.on('@init', gg), Pn) {
			function e(t, e) {
				window.amplitude.getInstance().setUserId(t.id)
			}
			function n(t, e) {
				window.amplitude.getInstance().setUserId(t.id)
			}
			function s() {
				window.amplitude.getInstance().setUserId(null)
			}
			{
				function i(t, e, n = {
				}) {
					try {
						const s = Object.assign({
							Plan: t.user.isLoggedIn ? t.user.profile.plan : void 0,
							Legacy: !1,
							'Device type (by useragent)': t.device.type
						}, n);
						for (const e in t.experiments) Object.prototype.hasOwnProperty.call(t.experiments, e) && (s[`Experiment: ${e}`] = t.experiments[e]);
						window.amplitude.getInstance().logEvent(e, s),
							'prod' !== window.__STAGE__ && console.log(`AD: ${e}`, s)
					} catch (t) {
						console.error(t)
					}
				}
				t.on('curiosity/conversion', ((t, e) => {
					i(t, e.event, Object.assign({
					}, e, t.curiosity.conversion, {
						event: void 0
					})),
						fg('Conversion', e.event)
				})),
					t.on('curiosity/event', ((t, e) => {
						i(t, e.event, Object.assign({
						}, e, {
							event: void 0
						}))
					}))
			}
			let o;
			t.on('curiosity/error', ((e, {
				error: n,
				message: s
			}) => {
				t.dispatch('curiosity/event', {
					event: 'Error',
					Error: n,
					Message: s
				}),
					fg('Error', n, s)
			})),
				t.on('curiosity/fraud', (t => {
					window.amplitude.getInstance().setUserProperties({
						'Auto-detected fraud': !0
					})
				})),
				t.on('curiosity/setConversionProps', ((t, e) => ({
					curiosity: Object.assign({
					}, t.curiosity, {
						conversion: Object.assign({
						}, t.curiosity.conversion, e)
					})
				}))),
				t.on('curiosity/countdown:start', (e => {
					clearTimeout(o),
						Mi.reset(),
						o = setTimeout((() => t.dispatch('curiosity/vpt10')), 600000)
				})),
				t.on('curiosity/countdown:clear', (t => {
					clearTimeout(o)
				})),
				t.on('data/loadSong:processing', (t => {
					clearTimeout(o)
				})),
				t.on('curiosity/vpt10', ((e, n) => {
					(function (e, n, s) {
						const i = e.meta,
							a = e.track;
						if (!i || !a) return;
						const o = Mi.getTimeSinceLastActivity(),
							r = e.fingering.shown,
							l = e.fingering.data.find((t => t.track === e.data.partId));
						t.dispatch('curiosity/event', Object.assign({
							event: 'Viewed player tab for 10 minutes'
						}, e.curiosity.VPT10Props, hg ? {
							'Web document is hidden': document[hg],
							'Web document visibility': document[pg]
						}
							: {
							}, {
							Orientation: window.matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape',
							Fullscreen: e.screen.fullscreen,
							Instrument: e.player.part ? e.player.part.instrument : void 0,
							Difficulty: a.difficulty,
							'Minutes Since Last Activity': o,
							Artist: i.artist,
							Title: i.title,
							'Song id': i.songId.toString(),
							'Track id': a.partId.toString(),
							'Fingering enabled': r && !!l
						})),
							fg('player', 'tried to learn song')
					})(e),
						e.meta && e.track && async function (t, e) {
							const n = JSON.stringify({
								event: 'Viewed player tab for 10 minutes',
								payload: e
							});
							try {
								(await fetch('/api/event/', {
									method: 'post',
									headers: {
										'Content-Type': 'application/json'
									},
									body: n
								})).ok
							} catch (t) {
								console.error(t)
							}
						}(0, {
							songId: e.meta.songId,
							revisionId: e.meta.revisionId,
							artistId: e.meta.artistId,
							partId: e.track.partId,
							instrumentId: e.track.instrumentId
						})
				}));
			const r = {
			};
			function a(t) {
				return e => ({
					curiosity: Object.assign({
					}, e.curiosity, {
						VPT10Props: Object.assign({
						}, e.curiosity.VPT10Props, {
							[
								t
							]: !0
						})
					})
				})
			}
			t.on('curiosity/trigerHJ', ((t, e) => {
				r[e] || !t.consent.profiling || t.screener.active || (console && console.info('hotjar event', e), window && 'function' == typeof window.hj && (window.hj('trigger', e), r[e] = !0))
			})),
				t.on('user/signIn', ((n, s) => {
					e(s, n.consent),
						t.dispatch('curiosity/conversion', {
							event: 'Signed in',
							'Auth method': 'Email'
						})
				})),
				t.on('user/googleSignIn', ((n, s) => {
					const {
						profile: i,
						isCreated: a
					}
						= s;
					e(i, n.consent),
						t.dispatch('curiosity/conversion', {
							event: a ? 'Signed up' : 'Signed in',
							'Auth method': 'Google'
						})
				})),
				t.on('user/signUp', ((n, s) => {
					e(s, n.consent),
						t.dispatch('curiosity/conversion', {
							event: 'Signed up',
							'Auth method': 'Email'
						})
				})),
				t.on('user/profile', ((t, e) => {
					n(e, t.consent)
				})),
				t.on('user/subscribePlus', ((e, s) => {
					'subscribe' === s.mode ? (t.dispatch('curiosity/conversion', {
						event: 'Subscribed',
						'Payment type': s.paymentType
					}), fg('Subscribe', 'get Subscription')) : 'update' === s.mode && (t.dispatch('curiosity/conversion', {
						event: 'Updated subscription',
						'Payment type': s.paymentType
					}), fg('Subscribe', 'update Subscription')),
						n(ug(e, s), e.consent)
				})),
				t.on('user/signOut', (e => {
					t.dispatch('curiosity/event', {
						event: 'Signed out'
					}),
						s()
				})),
				t.on('user/recoverPassword', ((t, e) => {
					n(e, t.consent)
				})),
				t.on('user/cancelPlus', ((e, s) => {
					n(s, e.consent),
						t.dispatch('curiosity/conversion', {
							event: 'Canceled subscription'
						})
				})),
				t.on('user/deactivate', (e => {
					t.dispatch('curiosity/conversion', {
						event: 'Deactivated account'
					}),
						s()
				})),
				t.on('consent/toggle', ((t, n) => {
					n ? t.user.isLoggedIn && e(t.user.profile) : t.consent.profiling && (s(), window.amplitude.getInstance().regenerateDeviceId())
				})),
				t.on('editor/delete:done', ((e, n) => t.dispatch('curiosity/event', {
					event: 'Deleted song',
					Artist: n.artist,
					Title: n.title,
					'Song id': n.songId.toString()
				}))),
				t.on('editor/delete:error', ((e, n) => t.dispatch('curiosity/error', {
					error: 'Deleted song',
					message: n.reason || n.message
				}))),
				t.on('favorites/add', (async (e, {
					songId: n,
					song: s
				}) => t.dispatch('curiosity/event', {
					event: 'Added favorite',
					Title: s.title,
					Artist: s.artist,
					'Song id': n.toString()
				}))),
				t.on('favorites/delete:processing', (async (e, {
					songId: n,
					song: s
				}) => t.dispatch('curiosity/event', {
					event: 'Removed favorite',
					Title: s.title,
					Artist: s.artist,
					'Song id': n.toString()
				}))),
				t.on('fingering/toggle', (e => {
					t.dispatch('curiosity/event', {
						event: e.fingering.shown ? 'Turned fingerings on' : 'Turned fingerings off'
					})
				})),
				t.on('upload/song:uploaded', ((e, {
					songSubmitted: n,
					song: s
				}) => {
					n && t.dispatch('curiosity/event', {
						event: 'Submitted tab',
						Artist: s.artist,
						Title: s.title
					})
				})),
				t.on('upload/song:error', ((e, {
					error: n
				}) => {
					t.dispatch('curiosity/error', {
						error: 'Submitted tab',
						message: n.message
					})
				})),
				t.on('upload/revision:uploaded', ((e, {
					revisionSubmitted: n,
					revision: s
				}) => {
					n && t.dispatch('curiosity/event', {
						event: 'Submitted revision',
						Artist: s.artist,
						Title: s.title
					})
				})),
				t.on('upload/revision:error', ((e, {
					error: n
				}) => {
					t.dispatch('curiosity/error', {
						error: 'Submitted revision',
						message: n.message
					})
				})),
				t.on('data/loadSong:processing', ((t, {
					songHasChanged: e
				}) => {
					if (e) return {
						curiosity: Object.assign({
						}, t.curiosity, {
							VPT10Props: mg
						})
					}
				})),
				t.on('player/changeSpeed', a('Used speed')),
				t.on('player/togglePlay', a('Used playback')),
				t.on('player/toggleLoop', a('Used loop')),
				t.on('player/changePitch', a('Used pitchshift')),
				t.on('player/changeLoop', a('Used loop')),
				t.on('player/changeType', ((t, {
					type: e
				}) => 'solo' === e ? a('Used solo')(t) : 'mute' === e ? a('Used mute')(t) : void 0)),
				t.on('screen/toggleFullscreen', ((t, {
					enabled: e
				}) => e && a('Used fullscreen')(t)))
		}
	},
	vg = t => t.user.hasPlus || t.demo.enabled,
	wg = (t, e) => t.layer.layer === e ? t.dispatch('layer/hide') : t.dispatch('layer/show', e),
	bg = t => cu(t.meta),
	xg = t => !t.route.isPanel,
	Sg = t => {
		const {
			experiments: e,
			screen: n,
			drawing: s
		}
			= t;
		return 'on' === e.drawing && !n.fullscreen && 0 !== s.canvasWidth && 0 !== s.canvasHeight
	},
	kg = t => {
		return !((!(e = t.meta) || !e.tracks || 1 === e.tracks.length) && (wg(t, 'solo_single'), 1));
		var e
	},
	Cg = t => e => !!vg(e) || (wg(e, t), !1),
	_g = t => (t.layer.layer && t.dispatch('layer/hide'), !0),
	Eg = t => e => (e.layer.layer && e.layer.layer !== t && e.dispatch('layer/hide'), !0);
var Ng = Rn(class extends x {
	constructor() {
		super(...arguments),
			this.userActivityTrackerWindowEventListeners = {
			},
			this.showLayer = t => this.props.dispatch('layer/show', t),
			this.hideLayer = () => this.props.dispatch('layer/hide'),
			this.moveCursor = t => function (t, e) {
				t('player/moveCursor', e)
			}(this.props.dispatch, t),
			this.startLoopChange = () => {
				this.props.dispatch('player/suspend', 'loop'),
					Hi(this.props.dispatch, !0)
			},
			this.finishLoopChange = () => {
				Hi(this.props.dispatch, !1),
					this.props.dispatch('player/resume', 'loop')
			},
			this.addFingering = ({
				measure: t,
				beat: e,
				string: n
			}) => this.props.dispatch('fingering/addFinger', {
				measure: t,
				beat: e,
				string: n
			}),
			this.handleAction = (t, e) => n => {
				n.stopPropagation(),
					n.preventDefault();
				for (const e of t) if (!e(this.props)) return;
				e(n)
			},
			this.handleFullscreen = this.handleAction([bg,
				xg], (() => {
					const t = !this.props.screen.fullscreen;
					fg('player', t ? 'fullScreenEntered' : 'fullScreenExited', 'draw', '0'),
						Ui(this.props.dispatch, {
							enabled: t
						})
				})),
			this.handlePlay = this.handleAction([bg,
				xg,
				Eg('drawing')], (t => {
					const {
						data: e,
						meta: n,
						isCursorFailed: s,
						player: i
					}
						= this.props;
					!n.audio || e.isFailed || s || (async function (t, e, n = null) {
						t('player/togglePlay', n)
					}(this.props.dispatch, i.audio), fg('player', i.shouldPlay ? 'pausePressed' : 'playPressed'))
				})),
			this.handleMixer = this.handleAction([bg,
				xg], (() => {
					this.props.meta && this.props.meta.tracks && wg(this.props, 'mixer')
				})),
			this.handleSpeed = this.handleAction([bg,
				xg,
				Cg('plus_speed')], (() => {
					this.props.screen.isSmall ? (_g(this.props), zi(this.props.store, 100 === this.props.player.speed ? 50 : 100)) : wg(this.props, 'speed')
				})),
			this.handlePitchshift = this.handleAction([bg,
				xg,
				Cg('plus_pitchshift'),
				_g], (() => {
					wg(this.props, 'pitchshift')
				})),
			this.handleCountin = this.handleAction([bg,
				xg,
				Eg('drawing')], (() => {
					!async function (t) {
						t('player/toggleCountIn')
					}(this.props.dispatch)
				})),
			this.handleSolo = this.handleAction([bg,
				xg,
				kg,
				Cg('plus_solo'),
				Eg('drawing')], (() => Wi(this.props.store, 'solo' === this.props.player.type ? 'focus' : 'solo'))),
			this.handleMute = this.handleAction([bg,
				xg,
				Cg('plus_mute'),
				Eg('drawing')], (() => Wi(this.props.store, 'mute' === this.props.player.type ? 'focus' : 'mute'))),
			this.handleLoop = this.handleAction([bg,
				xg,
				Cg('plus_loop'),
				_g], (() => async function (t) {
					try {
						let e = await $i(t);
						if (e && e.demo && !e.demo()) return e.plusToggleLoop(t);
						if (e = await Fi(t), e) return e.demoToggleLoop(t)
					} catch (t) {
						console.error(t)
					}
				}(this.props.store))),
			this.handlePrint = this.handleAction([bg,
				xg,
				Cg('plus_print'),
				Eg('drawing')], (() => {
					this.props.dispatch('player/togglePlay', !1),
						setTimeout((() => {
							window.print()
						}))
				})),
			this.handleFingering = this.handleAction([bg,
				xg,
				_g], (() => {
					this.props.dispatch('fingering/toggle')
				})),
			this.handleDrawing = this.handleAction([bg,
				xg,
				Sg,
				_g], (() => {
					this.props.dispatch('curiosity/event', {
						event: 'Pressed markup',
						Opened: 'drawing' !== this.props.layer.layer
					}),
						wg(this.props, 'drawing')
				})),
			this.handleNotation = this.handleAction([], (() => {
				'help_notation' === this.props.layer.layer ? this.props.dispatch('layer/hide') : this.props.dispatch('layer/show', 'help_notation')
			})),
			this.handleHide = this.handleAction([], (() => {
				if (this.props.route.isPanel) {
					const {
						meta: t,
						data: e
					}
						= this.props,
						n = yr(t, e.partId, e.revisionId);
					this.props.dispatch('navigate', n)
				}
				this.props.layer.layer ? this.props.dispatch('layer/hide') : this.props.screen.fullscreen && Ui(this.props.dispatch, {
					enabled: !1
				})
			})),
			this.drawingMenuHandler = t => {
				t.preventDefault(),
					this.props.dispatch('drawing/toggleAdminMenu')
			}
	}
	componentDidMount() {
		const t = window.hotKeysManager;
		t.bindOne('esc', this.handleHide, {
			parallel: !0
		}),
			Pn && - 1 === window.location.search.indexOf('l11_tracking=') && (t.bindOne('space', this.handlePlay, {
				onTab: !0
			}), t.bindOne('l', this.handleLoop, {
				onTab: !0
			}), t.bindOne('f', this.handleSolo, {
				onTab: !0
			}), t.bindOne('m', this.handleMute, {
				onTab: !0
			}), t.bindOne('r', this.handlePitchshift, {
				onTab: !0
			}), t.bindOne('t', this.handleMixer, {
				onTab: !0
			}), t.bindOne('s', this.handleSpeed, {
				onTab: !0
			}), t.bindOne('p', this.handlePrint, {
				onTab: !0
			}), t.bindOne('c', this.handleCountin, {
				onTab: !0
			}), t.bindOne('u', this.handleDrawing, {
				onTab: !0
			})),
			t.bindMeta('alt+enter', this.handleFullscreen),
			t.bindMeta('cmd+p', this.handlePrint)
	}
	componentDidCatch(t, e) {
		console.error(t)
	}
	showAttractors() {
		if (!window.__HAS_BEEN_SEEN_BEFORE__) return !1;
		const t = [
		];
		if (!this.props.route.isPanel && !this.props.layer.layer) for (const e of t) if (this.showAttractorOnce(e)) return !0;
		return !1
	}
	showAttractorOnce({
		layer: t,
		segment: e,
		storageKey: n
	}) {
		const {
			experiments: s
		}
			= this.props;
		if (void 0 !== e && 'on' !== s[e]) return !1;
		const i = n || t;
		return !function (t) {
			try {
				return JSON.parse(window.localStorage.getItem(t))
			} catch (t) {
				return null
			}
		}(i) && (this.props.dispatch('layer/show', t), function (t, e) {
			try {
				window.localStorage.setItem(t, JSON.stringify(!0))
			} catch (t) {
			}
		}(i), !0)
	}
	render() {
		const {
			user: t,
			player: e,
			data: n,
			meta: s,
			screen: i,
			layer: {
				layer: a
			},
			device: o,
			route: r,
			isMetaLoading: l,
			track: c,
			isCursorFailed: u,
			isDeleted: d,
			experiments: h,
			fingering: p,
			drawing: f
		}
			= this.props;
		if ('tab' === r.page) {
			const t = + r.songId,
				e = + r.partId,
				s = r.revisionId ? + r.revisionId : null;
			t === n.songId && e === n.partId && s === n.revisionId || y((() => {
				const n = new Wu;
				return ng(this.props.store, t, e, s, n),
					n.abort.bind(n)
			}), [
				t,
				e,
				s
			])
		}
		const g = e.part,
			w = cu(s),
			b = this.props.screen.fullscreen,
			x = this.props.screen.isSmall,
			S = this.props.screen.landscape,
			k = vg(this.props),
			C = yr(s, n.partId, n.revisionId),
			_ = r.isPanel,
			{
				pitchShift: E
			}
				= e,
			N = m((() => !!g && !!g.tuning && g.tuning.map((t => t + E))), [
				E,
				g
			]),
			L = !l && !!s,
			T = s && !!s.tracks,
			I = s && !!s.audio,
			A = !n.isFailed && w && !g && !d,
			P = !n.isFailed && w && g && !d,
			M = !n.isFailed && w && !k && !A,
			B = !n.isFailed && w && !k && o.isPhone,
			D = L && t.isAdmin,
			O = f.adminMenuOpened && t.isAdmin;
		let R,
			j = null;
		if (n.isNotFound ? j = v(Fm, null) : d ? j = v(Hm, null) : n.isNetworkFailed ? j = v(zm, null) : n.isFailed ? j = v($m, null) : w ? !L || T && I ? e.webworkerOperational ? e.playbackAvailable && Cr ? e.isAudioNetworkFailed ? j = v(Wh, {
			level: 'info',
			title: 'Audio can\'t be loaded because of network error.',
			action: 'Probably you are offline or connection was canceled',
			reason: 'network'
		}) : (e.isAudioFailed || u) && (j = v(Wh, {
			level: 'error',
			title: 'Sorry, but there are some problems with playback',
			action: 'Please, try to reload page',
			reason: e.isAudioFailed ? 'playback' : 'cursor'
		})) : j = v(Wh, {
			level: 'info',
			title: 'Sorry, playback is not supported in your browser',
			action: 'Try to use latest Google Chrome',
			reason: e.playbackAvailable ? 'animate' : 'audio'
		}) : j = v(Wh, {
			level: 'info',
			title: 'Sorry, playback is not possible on this song',
			action: 'Probably there is not enough memory',
			reason: 'webworker'
		}) : j = v(Wh, {
			level: 'info',
			title: 'Tab sound is being rendered',
			action: 'On average it takes about 20 minutes to process a tab',
			reason: 'render'
		}) : j = v(Gh, null), p.data) {
			const t = p.data.find((t => t.track === n.partId));
			t && (R = t.data)
		}
		const $ = 'on' === h.fingering,
			F = 'on' === h.drawing,
			H = F && !i.fullscreen && 0 !== f.canvasWidth && 0 !== f.canvasHeight;
		return v('div', {
			className: k ? An.appPlus : An.appFree,
			id: 'app',
			'data-isplaying': e.shouldPlay && e.canPlay
		}, v(Ym, null), !b && v(jm, {
			songUrl: C,
			isSmallScreen: x
		}), x && !S && v(qh, {
			track: c,
			layer: a,
			handleMixer: this.handleMixer
		}), v('section', {
			className: b ? An.tablatureFullscreen : An.tablature,
			role: _ ? 'complementary' : 'main'
		}, B && v(Um, null), !n.isNotFound && s && v(uh, {
			plusAccess: k,
			allowedByLicense: w,
			isSmallScreen: x,
			isDeleted: d,
			isDesktop: o.isDesktop,
			difficulty: g && g.partId === n.partId && g.difficulty,
			usedDrums: g && g.usedDrums,
			isPanel: _,
			isFullscreen: b,
			fingeringDisabled: !R,
			handleFullscreen: this.handleFullscreen,
			handleNotation: this.handleNotation
		}), j, v(x ? Rh : Dh, {
			shouldPlay: e.shouldPlay,
			canPlay: e.canPlay || _,
			partId: n.partId,
			track: c,
			device: o,
			layer: a,
			plusAccess: k,
			loop: 0 !== e.position.loopEnd,
			type: e.type,
			speed: e.speed,
			isCountin: e.isCountin,
			fingeringActive: p.shown,
			fingeringDisabled: !R || !$,
			drawingEnabled: H,
			handlePlay: this.handlePlay,
			handleMixer: this.handleMixer,
			handleSpeed: this.handleSpeed,
			handleSolo: this.handleSolo,
			handleMute: this.handleMute,
			handleLoop: this.handleLoop,
			handlePitchshift: this.handlePitchshift,
			handlePrint: this.handlePrint,
			handleCountin: this.handleCountin,
			handleNotation: this.handleNotation,
			handleFingering: this.handleFingering,
			handleDrawing: this.handleDrawing,
			usedDrums: g && g.usedDrums
		}), M && v('section', {
			className: An.showroom
		}, v(Vm, {
			songId: n.songId
		})), v(Kn, null), v(rg, null), A && v(lu, null), P && v(ru, {
			part: g,
			isFullscreen: b,
			isSmallScreen: x,
			isLandscapeScreen: S,
			plusAccess: k,
			shouldPlay: e.shouldPlay,
			showLayer: this.showLayer,
			hideLayer: this.hideLayer,
			width: i.available,
			position: e.position,
			moveCursor: this.moveCursor,
			startLoopChange: this.startLoopChange,
			finishLoopChange: this.finishLoopChange,
			handlePitchshift: this.handlePitchshift,
			showPitchshiftPopup: 'plus_pitchshift' === a,
			showPitchshiftLayer: 'pitchshift' === a,
			tuning: N,
			layer: a,
			fingering: p.shown && $ && R,
			fingeringEditorEnabled: p.editorEnabled && $,
			addFingering: this.addFingering,
			drawingCanvasEnabled: F
		}), P && v('footer', {
			className: M ? An.footerWithAds : An.footer
		}, v('div', {
			className: An.copyright,
			'aria-label': 'copyright'
		}, 'All content on this page is the property of the copyright owner of the original composition'), v('div', {
			className: An.tos,
			'aria-label': 'terms of service'
		}, v(Qo, {
			href: '/a/wa/about'
		}, 'About'), ' | ', v('a', {
			href: '/a/wa/privacy'
		}, 'Privacy Policy'), ' | ', v('a', {
			href: '/a/wa/terms'
		}, 'Terms Of Service'), ' | ', v('a', {
			href: '/a/wa/tags'
		}, 'Top Tags '), !1, !1, this.props.device.hasCCPA && ' | ', this.props.device.hasCCPA && v('a', {
			href: '/a/wa/do-not-sell-my-personal-information',
			rel: 'nofollow'
		}, 'Do Not Sell My Personal Information')))), !x && D && v(Jm, {
			meta: s,
			drawingExperiment: F,
			onDrawingMenuClick: this.drawingMenuHandler
		}), O && F && v(Km, null))
	}
}, 'user', 'data', 'player', 'screen', 'experiments', 'device', 'layer', 'route', 'query', 'isMetaLoading', 'meta', 'track', 'demo', 'isCursorFailed', 'isDeleted', 'fingering', 'drawing');
class Lg {
	constructor(t, e) {
		this.dispatch = (t, ...e) => {
			const {
				events: n
			}
				= this,
				s = {
				};
			let i = !1;
			if (n[t]) for (const a of n[t]) {
				const t = a(this.state, ...e);
				t && 'function' != typeof t.then && (Object.assign(s, t), i = !0, this.state = Object.assign({
				}, this.state, t))
			}
			i && this.dispatch('@changed', s)
		},
			this.events = {
			},
			this.state = e || {
			};
		for (const e of t) e && e(this);
		e || this.dispatch('@init', 1)
	}
	on(t, e) {
		return (this.events[t] || (this.events[t] = [
		])).push(e),
			() => {
				this.events[t] = this.events[t].filter((t => t !== e))
			}
	}
	get() {
		return this.state
	}
}
const Tg = t => ({
	isSmall: 'small' === t,
	isMedium: 'medium' === t,
	isLarge: 'large' === t,
	isWide: 'wide' === t
}),
	Ig = ga('large');
function Ag(t, e) {
	return {
		screen: Object.assign({
		}, t.screen, {
			fullscreen: e || !1,
			available: ma(t.screen.screen, t.screen.viewport, e || !1)
		}, Tg(t.screen.screen))
	}
}
const Pg = t => {
	!Pn && t.on('@init', (() => ({
		screen: {
			screen: 'large',
			viewport: Ig,
			available: ma('large', Ig),
			isSmall: !1,
			isMedium: !1,
			isLarge: !1,
			isWide: !1,
			fullscreen: !1,
			landscape: !1
		}
	}))),
		t.on('screen/resize', ((t, {
			screen: e,
			landscape: n,
			available: s,
			viewport: i
		}) => ({
			screen: Object.assign({
			}, t.screen, {
				screen: e,
				landscape: n,
				viewport: i,
				available: s
			}, Tg(e))
		}))),
		t.on('screen/toggleFullscreen', ((t, {
			enabled: e
		}) => Ag(t, e))),
		Pn && t.on('navigate', (t => Ag(t))),
		Pn && t.on('popstate', (t => Ag(t))),
		!Pn && t.on('device/init', ((t, {
			device: e
		}) => {
			const n = (t => {
				switch (t) {
					case 'phone':
						return 'small';
					case 'tablet':
						return 'medium';
					default:
						return 'large'
				}
			})(e.type),
				s = ga(n);
			return {
				screen: Object.assign({
				}, t.screen, {
					screen: n,
					landscape: s.width / s.height > 13 / 9,
					viewport: s,
					available: ma(n, s)
				}, Tg(n))
			}
		}))
},
	Mg = t => {
		!Pn && t.on('@init', (() => ({
			consent: {
				profiling: void 0,
				dnt: !1
			}
		}))),
			!Pn && t.on('consent/init', ((t, {
				dntHeader: e,
				profilingCookie: n,
				isGDPRCountry: s
			}) => {
				let i;
				return s ? 'yes' === n ? i = !0 : 'no' === n && (i = !1) : i = !0,
				{
					consent: {
						profiling: i,
						dnt: '1' === e
					}
				}
			})),
			t.on('consent/toggle', ((t, e) => {
				const n = new Date;
				return n.setTime(n.getTime() + 63072000000),
					document.cookie = `consent=${e ? 'yes' : 'no'};expires=${n.toUTCString()};path=/`,
					'on' !== t.experiments.googlefc && (window.adsbygoogle.pauseAdRequests = 0, window.adsbygoogle.requestNonPersonalizedAds = e ? 0 : 1),
				{
					consent: {
						profiling: e,
						dnt: t.consent.dnt
					}
				}
			}))
	},
	Bg = t => {
		!Pn && t.on('experiments/init', ((t, e) => ({
			experiments: e
		})))
	};
async function Dg(t, e) {
	try {
		t('favorites/load:processing'),
			t('favorites/load:done', await async function (t) {
				const e = !Pn && t ? {
					headers: {
						Cookie: t
					}
				}
					: {
						credentials: 'include'
					},
					n = await fetch('/api/favorites', e);
				lc(n);
				const s = await n.json();
				return Nu(_u(s))
			}(e))
	} catch (e) {
		console.error(e),
			t('favorites/load:error', e)
	} finally {
		t('data/setWasFavoriteOnServerRender', void 0)
	}
}
const Og = (t, e) => {
	const n = t.findIndex((t => t.songId === e));
	return t.slice(0, n).concat(t.slice(n + 1))
},
	Rg = (t, e) => _u([...t,
		e]),
	jg = t => {
		!Pn && t.on('@init', (() => ({
			favorites: {
				loading: !1,
				pattern: '',
				favorites: [
				],
				actionId: '',
				filters: xp
			}
		}))),
			t.on('user/signIn', (async e => Dg(t.dispatch, void 0))),
			t.on('user/googleSignIn', (async e => Dg(t.dispatch, void 0))),
			t.on('favorites/add', (async (e, {
				songId: n,
				song: s
			}) => {
				const i = Bi();
				try {
					t.dispatch('favorites/add:processing', {
						songId: n,
						song: s,
						actionId: i
					}),
						await async function (t) {
							const e = `/api/favorites/${t}`;
							lc(await fetch(e, {
								method: 'put',
								credentials: 'include'
							}))
						}(n),
						t.dispatch('favorites/add:done', {
							songId: n,
							song: s,
							actionId: i
						})
				} catch (e) {
					console.error(e),
						t.dispatch('favorites/add:error', {
							songId: n,
							song: s,
							actionId: i
						})
				}
			})),
			t.on('favorites/add:processing', ((t, {
				song: e,
				actionId: n
			}) => ({
				favorites: Object.assign({
				}, t.favorites, {
					favorites: Rg(t.favorites.favorites, e),
					actionId: n,
					loading: !0
				})
			}))),
			t.on('favorites/add:done', ((t, {
				actionId: e
			}) => t.favorites.actionId === e ? {
				favorites: Object.assign({
				}, t.favorites, {
					actionId: '',
					loading: !1
				})
			}
					: null)),
			t.on('favorites/add:error', ((t, {
				songId: e,
				actionId: n
			}) => t.favorites.actionId === n ? {
				favorites: Object.assign({
				}, t.favorites, {
					favorites: Og(t.favorites.favorites, e),
					actionId: '',
					loading: !1
				})
			}
					: null)),
			t.on('favorites/delete', (async (e, n) => {
				const s = Bi(),
					i = e.favorites.favorites.find((t => t.songId === n));
				if (i) try {
					t.dispatch('favorites/delete:processing', {
						songId: n,
						song: i,
						actionId: s
					}),
						await async function (t) {
							const e = `/api/favorites/${t}`;
							lc(await fetch(e, {
								method: 'delete',
								credentials: 'include'
							}))
						}(n),
						t.dispatch('favorites/delete:done', {
							songId: n,
							song: i,
							actionId: s
						})
				} catch (e) {
					console.error(e),
						t.dispatch('favorites/delete:error', {
							songId: n,
							song: i,
							actionId: s
						})
				}
			})),
			t.on('favorites/delete:processing', ((t, {
				songId: e,
				actionId: n
			}) => ({
				favorites: Object.assign({
				}, t.favorites, {
					favorites: Og(t.favorites.favorites, e),
					actionId: n,
					loading: !0
				})
			}))),
			t.on('favorites/delete:done', ((t, {
				actionId: e
			}) => t.favorites.actionId === e ? {
				favorites: Object.assign({
				}, t.favorites, {
					actionId: '',
					loading: !1
				})
			}
					: null)),
			t.on('favorites/delete:error', ((t, {
				song: e,
				actionId: n
			}) => t.favorites.actionId === n ? {
				favorites: Object.assign({
				}, t.favorites, {
					favorites: Rg(t.favorites.favorites, e),
					actionId: '',
					loading: !1
				})
			}
					: null)),
			t.on('favorites/load:processing', (t => ({
				favorites: Object.assign({
				}, t.favorites, {
					loading: !0
				})
			}))),
			t.on('favorites/load:done', ((t, e) => ({
				favorites: Object.assign({
				}, t.favorites, {
					favorites: e,
					actionId: '',
					loading: !1
				})
			}))),
			t.on('favorites/load:error', (t => ({
				favorites: Object.assign({
				}, t.favorites, {
					favorites: [
					],
					loading: !1
				})
			}))),
			t.on('favorites/filter', ((t, e) => ({
				favorites: Object.assign({
				}, t.favorites, {
					pattern: e
				})
			}))),
			t.on('user/signOut', (t => ({
				favorites: Object.assign({
				}, t.favorites, {
					favorites: [
					],
					pattern: '',
					actionId: ''
				})
			}))),
			t.on('favorites/filter/difficulty', ((t, e) => ({
				favorites: Object.assign({
				}, t.favorites, {
					filters: Tp(t.favorites.filters, e)
				})
			}))),
			t.on('favorites/filter/instrument', ((t, e) => ({
				favorites: Object.assign({
				}, t.favorites, {
					filters: Ip(t.favorites.filters, e)
				})
			}))),
			t.on('favorites/filter/tuning', ((t, {
				instrument: e,
				tuning: n
			}) => ({
				favorites: Object.assign({
				}, t.favorites, {
					filters: Ap(t.favorites.filters, e, n)
				})
			}))),
			t.on('favorites/filter/reset', (t => ({
				favorites: Object.assign({
				}, t.favorites, {
					filters: xp
				})
			})))
	},
	$g = (t, e) => {
		const n = t.findIndex((t => t.id === e));
		return t.slice(0, n).concat(t.slice(n + 1))
	};
async function Fg(t, e) {
	try {
		t('setlists/load:processing'),
			t('setlists/load:done', await async function (t) {
				const e = !Pn && t ? {
					headers: {
						Cookie: t
					}
				}
					: {
						credentials: 'include'
					},
					n = await fetch('/api/setlists', e);
				return lc(n),
					(await n.json()).map((t => ({
						name: t.name,
						id: t.id,
						songs: Nu(_u(t.songs))
					})))
			}(e))
	} catch (e) {
		console.error(e),
			t('setlists/load:error', e)
	}
}
async function Hg(t, e) {
	try {
		t('setlists/create:processing', {
			name: e
		}),
			t('setlists/create:done', (await async function (t) {
				const e = {
					name: t
				},
					n = await rc('/api/setlist', e);
				return lc(n),
					n.json()
			}(e)).id)
	} catch (e) {
		console.error(e),
			t('setlists/create:error')
	}
}
const zg = t => {
	!Pn && t.on('@init', (() => ({
		setlists: {
			loading: !1,
			activeSetId: void 0,
			setlists: [
			],
			markedIds: [
			],
			createSetForm: void 0
		}
	}))),
		t.on('user/signIn', (async e => Fg(t.dispatch, void 0))),
		t.on('user/googleSignIn', (async e => Fg(t.dispatch, void 0))),
		t.on('user/signOut', (t => ({
			setlists: Object.assign({
			}, t.setlists, {
				setlists: [
				],
				activeSetId: void 0
			})
		}))),
		t.on('setlists/load:processing', (t => ({
			setlists: Object.assign({
			}, t.setlists, {
				loading: !0
			})
		}))),
		t.on('setlists/load:done', ((t, e) => ({
			setlists: Object.assign({
			}, t.setlists, {
				setlists: e,
				loading: !1
			})
		}))),
		t.on('setlists/load:error', (t => ({
			setlists: Object.assign({
			}, t.setlists, {
				setlists: [
				],
				loading: !1
			})
		}))),
		t.on('setlists/select', ((t, e) => ({
			setlists: Object.assign({
			}, t.setlists, {
				activeSetId: e,
				removeSetId: void 0
			})
		}))),
		t.on('setlists/openCreate', (async e => {
			const {
				createSetForm: n,
				loading: s
			}
				= e.setlists;
			!s && n && '' !== n.name.trim() && await Hg(t.dispatch, n.name),
				t.dispatch('setlists/openCreate:init')
		})),
		t.on('setlists/openCreate:init', (t => ({
			setlists: Object.assign({
			}, t.setlists, {
				createSetForm: {
					name: ''
				}
			})
		}))),
		t.on('setlists/cancelEdit', (t => ({
			setlists: Object.assign({
			}, t.setlists, {
				createSetForm: void 0
			})
		}))),
		t.on('setlists/changeName', ((t, e) => t.setlists.createSetForm ? {
			setlists: Object.assign({
			}, t.setlists, {
				createSetForm: Object.assign({
				}, t.setlists.createSetForm, {
					name: e
				})
			})
		}
			: null)),
		t.on('setlists/confirmCreate', (e => {
			const {
				createSetForm: n,
				loading: s
			}
				= e.setlists;
			return !s && n && ('' !== n.name.trim() ? Hg(t.dispatch, n.name) : t.dispatch('setlists/cancelCreate')),
				null
		})),
		t.on('setlists/cancelCreate', (t => ({
			setlists: Object.assign({
			}, t.setlists, {
				createSetForm: void 0
			})
		}))),
		t.on('setlists/create:processing', ((t, {
			name: e
		}) => t.setlists.createSetForm ? {
			setlists: Object.assign({
			}, t.setlists, {
				loading: !0,
				setlists: [
					{
						id: 'new',
						name: e,
						songs: [
						]
					},
					...t.setlists.setlists
				],
				createSetForm: void 0
			})
		}
				: null)),
		t.on('setlists/create:done', ((t, e) => {
			const n = [
				...t.setlists.setlists
			],
				s = n.find((t => 'new' === t.id));
			return s && (s.id = e),
			{
				setlists: Object.assign({
				}, t.setlists, {
					setlists: n,
					loading: !1
				})
			}
		})),
		t.on('setlists/create:error', (t => ({
			setlists: Object.assign({
			}, t.setlists, {
				setlists: $g(t.setlists.setlists, 'new'),
				loading: !1
			})
		}))),
		t.on('setlists/initRemove', ((t, e) => {
			const {
				setlists: n
			}
				= t.setlists;
			return n.find((t => t.id === e)) ? {
				setlists: Object.assign({
				}, t.setlists, {
					removeSetId: e
				})
			}
				: null
		})),
		t.on('setlists/confirmRemove', ((e, n) => {
			const {
				removeSetId: s,
				loading: i,
				setlists: a
			}
				= e.setlists;
			if (!i && s === n) {
				const e = a.find((t => t.id === n));
				e && async function (t, e, n) {
					try {
						t('setlists/remove:processing', {
							id: e,
							name: n
						}),
							await async function (t) {
								const e = `/api/setlist/${t}`,
									n = await fetch(e, {
										method: 'delete',
										credentials: 'include'
									});
								return lc(n),
									n.json()
							}(e),
							t('setlists/remove:done')
					} catch (e) {
						console.error(e),
							Fg(t)
					}
				}(t.dispatch, n, e.name)
			}
			return null
		})),
		t.on('setlists/remove:processing', ((t, {
			id: e
		}) => ({
			setlists: Object.assign({
			}, t.setlists, {
				setlists: $g(t.setlists.setlists, e),
				activeSetId: void 0,
				loading: !0
			})
		}))),
		t.on('setlists/remove:done', (t => ({
			setlists: Object.assign({
			}, t.setlists, {
				loading: !1
			})
		}))),
		t.on('setlists/removeSong', (async (e, {
			songId: n,
			setlistId: s
		}) => {
			const {
				setlists: i,
				loading: a
			}
				= e.setlists,
				o = i.find((t => t.id === s));
			if (!a && o && o.songs) {
				const e = o.songs.find((t => t.songId === n));
				if (e) try {
					t.dispatch('setlists/removeSong:processing', {
						song: e,
						songId: n,
						setlist: o,
						setlistId: s
					}),
						await async function (t, e) {
							const n = `/api/setlist/song/${t}`,
								s = await rc(n, {
									songId: e
								}, {
								}, {
									method: 'delete',
									credentials: 'include'
								});
							return lc(s),
								s.json()
						}(s, n),
						t.dispatch('setlists/removeSong:done')
				} catch (e) {
					console.error(e),
						Fg(t.dispatch)
				}
			}
		})),
		t.on('setlists/removeSong:processing', ((t, {
			songId: e,
			setlistId: n
		}) => {
			const {
				setlists: s
			}
				= t.setlists,
				i = s.find((t => t.id === n));
			return i ? (i.songs = ((t, e) => {
				const n = t.findIndex((t => t.songId === e));
				return t.slice(0, n).concat(t.slice(n + 1))
			})(i.songs, e), {
				setlists: Object.assign({
				}, t.setlists, {
					setlists: [
						...s
					],
					loading: !0
				})
			}) : null
		})),
		t.on('setlists/removeSong:done', (t => ({
			setlists: Object.assign({
			}, t.setlists, {
				loading: !1
			})
		}))),
		t.on('setlists/addSong', (async (e, {
			song: n,
			setlistId: s
		}) => {
			const {
				setlists: i,
				loading: a
			}
				= e.setlists,
				o = i.find((t => t.id === s));
			if (!a && o && !o.songs.find((t => t.songId === n.songId))) try {
				t.dispatch('setlists/addSong:processing', {
					song: n,
					setlistId: s,
					setlist: o
				}),
					await async function (t, e) {
						const n = `/api/setlist/song/${t}`,
							s = {
								songId: e
							},
							i = await rc(n, s);
						return lc(i),
							i.json()
					}(s, n.songId),
					t.dispatch('setlists/addSong:done')
			} catch (e) {
				console.error(e),
					Fg(t.dispatch)
			}
		})),
		t.on('setlists/addSong:processing', ((e, {
			song: n,
			setlistId: s
		}) => {
			const {
				setlists: i,
				markedIds: a
			}
				= e.setlists,
				o = [
					...i
				],
				r = o.find((t => t.id === s));
			if (r) {
				r.songs = [
					n,
					...r.songs
				];
				const i = [
					...a
				];
				return a.includes(s) || (i.push(s), setTimeout((() => {
					t.dispatch('setlists/flushMark', s)
				}), 1500)),
				{
					setlists: Object.assign({
					}, e.setlists, {
						setlists: o,
						markedIds: i,
						loading: !0
					})
				}
			}
			return null
		})),
		t.on('setlists/addSong:done', (t => ({
			setlists: Object.assign({
			}, t.setlists, {
				loading: !1
			})
		}))),
		t.on('setlists/flushMark', ((t, e) => {
			const {
				markedIds: n
			}
				= t.setlists;
			if (n.includes(e)) {
				const s = n.findIndex((t => t === e));
				return {
					setlists: Object.assign({
					}, t.setlists, {
						markedIds: n.slice(0, s).concat(n.slice(s + 1))
					})
				}
			}
			return null
		})),
		t.on('setlists/panelClick', (e => {
			const {
				createSetForm: n
			}
				= e.setlists;
			return n && t.dispatch('setlists/confirmCreate'),
				null
		}))
},
	qg = () => ({
		layer: {
			layer: null
		}
	}),
	Ug = t => t.layer.layer ? {
		layer: {
			layer: null
		}
	}
		: null,
	Wg = t => {
		!Pn && t.on('@init', qg),
			t.on('layer/show', ((t, e) => ({
				layer: {
					layer: e
				}
			}))),
			t.on('navigate', Ug),
			t.on('layer/hide', Ug),
			t.on('screen/toggleFullscreen', Ug)
	},
	Vg = t => {
		!Pn && t.on('@init', (() => ({
			demo: {
				active: !1,
				enabled: !1
			}
		}))),
			t.on('demo/activate', (t => ({
				demo: {
					active: !0,
					enabled: 27 === t.data.songId
				}
			}))),
			t.on('data/loadSong:processing', ((t, {
				songId: e,
				partId: n,
				revisionId: s
			}) => t.demo.active ? 27 === e ? {
				demo: {
					active: !0,
					enabled: !0
				}
			}
				: {
					demo: {
						active: !1,
						enabled: !1
					}
				}
					: null))
	},
	Gg = () => ({
		isDeleted: !1,
		editor: {
			canDelete: !1,
			processingDeletion: !1
		}
	}),
	Xg = t => {
		const {
			user: e
		}
			= t;
		let n = !1;
		if (e.isLoggedIn) {
			const {
				editors: s
			}
				= t.meta;
			n = !!e.isAdmin || s && !s.some((t => t !== e.profile.id))
		}
		return {
			isDeleted: !1,
			editor: Object.assign({
			}, t.editor, {
				canDelete: n
			})
		}
	},
	Yg = t => {
		!Pn && t.on('@init', (() => ({
			isDeleted: !1,
			editor: {
				processingDeletion: !1,
				canDelete: !1
			}
		}))),
			t.on('data/loadSong:loadedMeta', Xg),
			t.on('user/init', Xg),
			t.on('user/signIn', Xg),
			t.on('user/googleSignIn', Xg),
			t.on('user/signUp', Xg),
			t.on('user/signOut', Gg),
			t.on('editor/delete', ((e, n) => (async function (t, e) {
				try {
					const n = new Wu;
					(await async function (t, e) {
						const n = `/api/song/${t.songId}`,
							s = await fetch(n, {
								method: 'delete',
								credentials: 'include',
								signal: e
							});
						return e && e.aborted ? {
							success: !1
						}
							: (lc(s), await pc(s), uc(s, 'Forbidden'), {
								success: !!s.ok
							})
					}(e, n.signal)).success ? t('editor/delete:done', {
						meta: e
					}) : t('editor/delete:error', new Error('Oops, something went wrong. Please try again later.')),
						n.abort.bind(n)
				} catch (e) {
					t('editor/delete:error', e)
				}
			}(t.dispatch, n), {
				isDeleted: e.isDeleted,
				editor: Object.assign({
				}, e.editor, {
					processingDeletion: !0
				})
			}))),
			t.on('editor/delete:done', ((t, e) => ({
				isDeleted: !0,
				editor: Object.assign({
				}, t.editor, {
					processingDeletion: !1
				})
			}))),
			t.on('editor/delete:error', ((t, e) => {
				const n = e.reason || e.message;
				return window && window.alert(`Error: ${n}`),
				{
					isDeleted: t.isDeleted,
					editor: Object.assign({
					}, t.editor, {
						processingDeletion: !1
					})
				}
			}))
	},
	Zg = [
		439171,
		23,
		455118,
		103,
		59950,
		99,
		456145,
		4,
		269,
		289,
		10,
		20,
		61178,
		399877,
		86181,
		338,
		435174,
		19,
		18645,
		210,
		8452
	];
async function Jg(t, e) {
	const n = t.get(),
		s = [
		];
	for (const t of n.screener.candidates) {
		const i = t.filter.bassPage;
		if ('unset' !== i) {
			const t = n.track;
			if (!t || 'yes' === i && !t.isBassGuitar || 'no' === i && t.isBassGuitar) continue
		}
		const a = t.filter.drumsPage;
		if ('unset' !== a) {
			const t = n.track;
			if (!t || 'yes' === a && !t.isDrums || 'no' === a && t.isDrums) continue
		}
		if (t.name.includes('Fingering') && !Zg.includes(+ n.data.songId)) continue;
		const o = t.filter.showAfterAction;
		o && o !== e.event || s.push(t)
	}
	if (s.length) {
		const e = s[Math.floor(Math.random() * s.length)];
		t.dispatch('screener/set', e)
	}
}
const Kg = t => {
	!Pn && t.on('@init', (() => ({
		screener: {
			active: void 0,
			candidates: [
			]
		}
	}))),
		t.on('screener/set', ((t, e) => (e && function (t) {
			const e = new Date;
			e.setTime(e.getTime() + 7776000000),
				document.cookie = `ScrShwn-${t.cookie}=true;expires=${e.toUTCString()};path=/`
		}(e), {
			screener: Object.assign({
			}, t.screener, {
				candidates: [
				],
				active: e
			})
		}))),
		t.on('screener/loaded', ((e, n) => (Mu((() => Jg(t, {
		}))), {
			screener: Object.assign({
			}, e.screener, {
				candidates: n,
				active: void 0
			})
		}))),
		t.on('curiosity/event', ((e, n) => {
			const {
				event: s
			}
				= n;
			e.screener.candidates.length && Mu((() => Jg(t, {
				event: s
			})))
		}))
};
function Qg(t) {
	const e = {
		measures: [
		]
	};
	for (const n of t) {
		const t = e.measures.find((t => t.index === n.measure));
		if (t) {
			const e = t.voices[0],
				s = e.beats.find((t => t.index === n.beat));
			s ? s.fingerings.push({
				string: n.string,
				fingerL: n.fingerL
			}) : e.beats.push({
				index: n.beat,
				fingerings: [
					{
						string: n.string,
						fingerL: n.fingerL
					}
				]
			})
		} else e.measures.push({
			index: n.measure,
			voices: [
				{
					beats: [
						{
							index: n.beat,
							fingerings: [
								{
									string: n.string,
									fingerL: n.fingerL
								}
							]
						}
					]
				}
			]
		})
	}
	return e
}
const ty = t => {
	!Pn && t.on('@init', (() => ({
		fingering: {
			data: [
			],
			shown: !0,
			editorEnabled: !1,
			saving: !1,
			editorMarks: [
			],
			editorFinger: 1
		}
	}))),
		t.on('fingering/toggle', (t => ({
			fingering: Object.assign({
			}, t.fingering, {
				shown: !t.fingering.shown
			})
		}))),
		t.on('fingering/toggleEditor', (t => ({
			fingering: Object.assign({
			}, t.fingering, {
				editorEnabled: !t.fingering.editorEnabled
			})
		}))),
		t.on('fingering/switchEditorFinger', ((t, e) => ({
			fingering: Object.assign({
			}, t.fingering, {
				editorFinger: e
			})
		}))),
		t.on('fingering/addFinger', ((t, {
			measure: e,
			beat: n,
			string: s
		}) => {
			let i = [
				...t.fingering.editorMarks
			];
			const a = i.findIndex((t => t.measure === e && t.beat === n && t.string === s));
			- 1 !== a ? i = i.slice(0, a).concat(i.slice(a + 1)) : i.push({
				measure: e,
				beat: n,
				string: s,
				fingerL: t.fingering.editorFinger
			});
			const o = [
				...t.fingering.data
			],
				r = t.fingering.data.findIndex((e => e.track === t.data.partId));
			return - 1 !== r ? o[r].data = Qg(i) : o.push({
				data: Qg(i),
				track: t.data.partId
			}),
			{
				fingering: Object.assign({
				}, t.fingering, {
					editorMarks: i,
					data: o,
					shown: !0
				})
			}
		})),
		t.on('fingering/save', (async e => {
			const {
				editorMarks: n,
				saving: s
			}
				= e.fingering;
			if (0 !== n.length && !s) try {
				t.dispatch('fingering/save:processing');
				const s = JSON.stringify(Qg(n));
				await async function (t, e, n) {
					const s = {
						data: n,
						songId: t,
						track: e
					},
						i = await rc('/api/fingering', s);
					return lc(i),
						i.json()
				}(e.meta.songId, e.data.partId, s),
					t.dispatch('fingering/save:done')
			} catch (e) {
				console.log(e),
					t.dispatch('fingering/save:done')
			}
		})),
		t.on('fingering/save:processing', (t => ({
			fingering: Object.assign({
			}, t.fingering, {
				saving: !0
			})
		}))),
		t.on('fingering/save:done', (t => ({
			fingering: Object.assign({
			}, t.fingering, {
				saving: !1
			})
		}))),
		t.on('data/loadSong:processing', (async (e, {
			songId: n
		}) => {
			try {
				if ('on' === e.experiments.fingering) {
					const e = await async function (t) {
						const e = `/api/fingering/${t}`,
							n = await fetch(e);
						return lc(n),
							(await n.json()).map((t => ({
								track: t.track,
								data: JSON.parse(t.data)
							})))
					}(n);
					t.dispatch('fingering/load:done', e)
				}
			} catch (e) {
				console.log(e),
					t.dispatch('fingering/load:error')
			}
		})),
		t.on('fingering/load:done', ((t, e) => {
			let n = [
			];
			const s = e.find((e => e.track === t.data.partId));
			return s && (n = function (t) {
				const e = [
				];
				return t.measures.forEach((t => {
					t.voices[0].beats.forEach((n => {
						n.fingerings.forEach((s => {
							e.push({
								measure: t.index,
								beat: n.index,
								string: s.string,
								fingerL: s.fingerL
							})
						}))
					}))
				})),
					e
			}(s.data)),
			{
				fingering: Object.assign({
				}, t.fingering, {
					data: e,
					editorMarks: n
				})
			}
		})),
		t.on('fingering/load:error', (t => ({
			fingering: Object.assign({
			}, t.fingering, {
				data: [
				]
			})
		})))
},
	ey = Array.from('1234567890qwertyuiopasdfghjklzxcvbnm'),
	ny = {
		backspace: 8,
		tab: 9,
		enter: 13,
		esc: 27,
		space: 32,
		left: 37,
		up: 38,
		right: 39,
		down: 40,
		0: 48,
		1: 49,
		2: 50,
		3: 51,
		4: 52,
		5: 53,
		6: 54,
		7: 55,
		8: 56,
		9: 57,
		a: 65,
		b: 66,
		c: 67,
		d: 68,
		e: 69,
		f: 70,
		g: 71,
		h: 72,
		i: 73,
		j: 74,
		k: 75,
		l: 76,
		m: 77,
		n: 78,
		o: 79,
		p: 80,
		q: 81,
		r: 82,
		s: 83,
		t: 84,
		u: 85,
		v: 86,
		w: 87,
		x: 88,
		y: 89,
		z: 90,
		'+': 187,
		'-': 189
	};
function sy(t) {
	const e = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
	return e || 'cmd' !== t ? e && 'ctrl' === t ? 'cmd' : t : 'ctrl'
}
class iy {
	constructor(t) {
		this.store = t,
			this.handlers = {
			},
			this.meta = {
			},
			this.bindSources = {
			},
			window.addEventListener('keydown', this.keyboardHandler.bind(this), !1),
			window.addEventListener('keyup', this.preventHandler.bind(this), !1)
	}
	preventHandler(t) {
		t.target instanceof HTMLButtonElement && 32 === t.keyCode && (this.store.get().route.isPanel || (t.preventDefault(), t.stopPropagation()))
	}
	keyboardHandler(t) {
		if (t.altKey || t.shiftKey || t.metaKey || t.ctrlKey) return void this.metaHandler(t);
		if (!this.handlers[t.keyCode]) return;
		if ((t.target instanceof HTMLInputElement || t.target instanceof HTMLTextAreaElement) && !t.target.hasAttribute('data-hotkey')) return;
		const e = this.handlers[t.keyCode];
		if (e.global) return void e.global(t);
		const n = this.store.get().route.isPanel;
		e.parallel && (n && function () {
			const t = document.activeElement;
			return !(!t || !['input',
				'select',
				'button',
				'textarea'].includes(t.tagName.toLowerCase()) || (t.blur && t.blur(), 0))
		}() || e.parallel(t)),
			n ? e.onPanelPopup ? e.onPanelPopup(t) : e.onPanel && e.onPanel(t) : e.onPopup ? e.onPopup(t) : e.onTab && e.onTab(t)
	}
	metaHandler(t) {
		if (16 === t.keyCode || 17 === t.keyCode || 18 === t.keyCode || 91 === t.keyCode) return;
		if (!this.meta[t.keyCode]) return;
		const e = this.meta[t.keyCode];
		t.altKey ? e.alt && e.alt(t) : t.ctrlKey ? e.ctrl && e.ctrl(t) : t.metaKey ? e.cmd && e.cmd(t) : t.shiftKey && e.shift && e.shift(t)
	}
	bindMeta(t, e, n = 'App') {
		const [s,
			i] = t.split('+');
		'shift' === s || 'ctrl' === s || 'alt' === s || 'cmd' === s ? (this.bindSources[`${i}-${s}`] = n, this.meta[ny[i]] = this.meta[ny[i]] || {
		}, this.meta[ny[i]][sy(s)] = e) : console.error('Please check your meta handler')
	}
	unbindMeta(t, e = 'App') {
		const [n,
			s] = t.split('+');
		if ('shift' !== n && 'ctrl' !== n && 'alt' !== n && 'cmd' !== n) return void console.error('Please check your meta handler');
		const i = this.bindSources[`${s}-${n}`] === e;
		this.meta[ny[s]] && i && delete this.meta[ny[s]][sy(n)]
	}
	bindOne(t, e, n, s = 'App') {
		this.bindSources[`${t}-${Object.keys(n)[0]}`] = s,
			this.handlers[ny[t]] = this.handlers[ny[t]] || {
			},
			this.handlers[ny[t]][Object.keys(n)[0]] = e
	}
	unbindOne(t, e, n = 'App') {
		const s = this.bindSources[`${t}-${Object.keys(e)[0]}`] === n;
		this.handlers[ny[t]] && s && delete this.handlers[ny[t]][Object.keys(e)[0]]
	}
	bind(t, e, n = 'App') {
		for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && ('keyboard*' === s ? ey.forEach((i => this.bindOne(i, t[s], e, n))) : this.bindOne(s, t[s], e, n))
	}
	unbind(t, e, n = 'App') {
		for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && ('keyboard*' === s ? ey.forEach((t => this.unbindOne(t, e, n))) : this.unbindOne(s, e, n))
	}
}
window.APP_INITED || (window.APP_INITED = !0, async function () {
	await async function () {
		if (window.AudioContext = window.AudioContext || window.webkitAudioContext, 'object' == typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__) for (const [t,
			e] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) window.__REACT_DEVTOOLS_GLOBAL_HOOK__[t] = 'function' == typeof e ? () => {
			}
				: null;
		window.PASSIVE = !1;
		try {
			const t = Object.defineProperty({
			}, 'passive', {
				get: function () {
					window.PASSIVE = {
						passive: !0
					}
				}
			});
			window.addEventListener('test', null, t)
		} catch (t) {
		}
		if ('function' != typeof SVGElement.prototype.focus && (SVGElement.prototype.focus = function () {
		}), 'function' != typeof CSSRuleList.prototype[Symbol.iterator] && (CSSRuleList.prototype[Symbol.iterator] = [
		][Symbol.iterator]), 'undefined' == typeof console) {
			const t = function () {
			};
			console = {
				error: t,
				info: t,
				log: t,
				warn: t
			}
		}
		const t = [
		];
		window.fetch || t.push(import('./fetch.0b77fc1b.js')),
			await Promise.all(t)
	}();
	const t = (t => new Lg([qd,
		Yi,
		og,
		dg,
		Pg,
		Mg,
		Tc,
		gf,
		Ko,
		Bg,
		jg,
		Wg,
		Ku,
		Vf,
		bp,
		zu,
		Bp,
		Vg,
		Yg,
		wm,
		mp,
		zg,
		Kg,
		wf,
		Mf,
		ty,
		kc,
		yg], t))(JSON.parse(document.getElementById('state').innerHTML));
	window.hotKeysManager = new iy(t);
	const e = t.get();
	!function (t) {
		const e = new ji({
			onError: (e, n = !1) => {
				const s = e.message || e;
				console.error(s),
					t.dispatch('player/error', {
						error: s,
						isNetworkError: n
					})
			},
			onFreeze: () => t.dispatch('player/togglePlay', !1),
			onOpened: () => t.dispatch('player/opened'),
			onLoad: () => t.dispatch('player/load'),
			onLoaded: () => t.dispatch('player/loaded'),
			onEmpty: () => t.dispatch('player/empty')
		}),
			n = !(null === e.context || !window.Worker);
		t.dispatch('player/init', {
			audio: e,
			playbackAvailable: n
		})
	}(t);
	const n = document.getElementById('root');
	if (!e.data.isFailed && - 1 !== e.data.songId && - 1 !== e.data.partId) {
		const n = new Wu;
		ng(t, e.data.songId, e.data.partId, e.data.revisionId, n)
	}
	J(v(Bn.Provider, {
		value: t
	}, v(Ng, {
		store: t
	})), n, n.firstElementChild);
	const s = () => {
		const e = (() => {
			if (Pn && window) {
				if (window.matchMedia('(max-width: 479px) and (max-height: 899px) and (orientation: portrait)').matches || window.matchMedia('(max-height: 479px) and (max-width: 899px) and (orientation: landscape)').matches) return 'small';
				if (window.matchMedia('(min-width: 480px) and (max-width: 1069px) and (orientation: portrait)').matches || window.matchMedia('(min-height: 480px) and (max-height: 1069px) and (orientation: landscape)').matches) return 'medium';
				if (window.matchMedia('(min-width: 1200px)').matches) return 'wide'
			}
			return 'large'
		})(),
			n = !!window.matchMedia('(orientation: landscape) and (min-aspect-ratio: 13/9)').matches,
			s = ga(e),
			i = ma(e, s, t.get().screen.fullscreen);
		t.dispatch('screen/resize', {
			screen: e,
			landscape: n,
			available: i,
			viewport: s
		})
	};
	window.addEventListener('resize', Ii(s, 100)),
		s();
	const i = e;
	if (Mu((() => {
		const e = t.get();
		e.popular.songs.length || Mp(t.dispatch),
			'favorites' !== i.route.page && e.user.isLoggedIn && (!e.favorites.favorites.length && Dg(t.dispatch), Fg(t.dispatch));
		const n = 'bot' === e.device.type,
			s = - 1 !== window.location.search.indexOf('ut=on'),
			a = - 1 !== window.location.search.indexOf('l11_tracking=');
		if (n || s || a || window.Cypress || setTimeout((() => {
			Mu((() => {
				!async function (t) {
					try {
						let e = await async function () {
							if (!Pn) throw new Error('Not Implemented');
							const t = await fetch('/api/screeners/decide', {
								credentials: 'include'
							});
							return lc(t),
								t.json()
						}();
						const n = t.get();
						e = e.filter((t => {
							const e = t.filter.visitedFirstTime;
							if ('unset' !== e && ('yes' === e && window.__HAS_BEEN_SEEN_BEFORE__ || 'no' === e && !window.__HAS_BEEN_SEEN_BEFORE__)) return !1;
							const s = t.filter.experiment;
							if (s) {
								let [t,
									e] = s.split('-');
								if (void 0 === e && (e = 'on'), n.experiments[t] !== e) return !1
							}
							return !0
						})),
							e.length && t.dispatch('screener/loaded', e)
					} catch (t) {
						console.error(t)
					}
				}(t)
			}))
		}), 10000), 'on' === e.experiments.googlefc && void 0 === e.consent.profiling) try {
			window.googlefc = window.googlefc || {
			},
				window.googlefc.callbackQueue = window.googlefc.callbackQueue || [
				],
				window.googlefc.callbackQueue.push({
					CONSENT_DATA_READY: function () {
						'function' == typeof __tcfapi && __tcfapi('getTCData', 0, ((e, n) => {
							n && (e.gdprApplies ? e.purpose && t.dispatch('consent/toggle', e.purpose.consents[1]) : t.dispatch('consent/toggle', !0))
						}))
					}
				})
		} catch (t) {
			console.error(t)
		}
	})), 'undefined' != typeof dataLayer && - 1 === String(window.location).indexOf('&ut=on')) {
		const {
			hasPlus: e,
			isLoggedIn: n
		}
			= t.get().user;
		dataLayer.push({
			event: n ? e ? 'VISITED_PLUS' : 'VISITED_FREE' : 'VISITED_ANON'
		})
	}
	'off' === t.get().query.sw ? function () {
		try {
			navigator.serviceWorker.ready.then((t => {
				t.unregister()
			}))
		} catch (t) {
			console.error(t)
		}
	}() : 'serviceWorker' in navigator && window.addEventListener('load', (() => {
		navigator.serviceWorker.register('/service-worker.js', {
			scope: '/'
		}).catch((t => {
			console.error('Error during service worker registration:', t)
		}))
	})),
		window.Cypress && (window.__store__ = t),
		window.trackNotsyEvent = (e, n) => 'prod' === window.__STAGE__ && t.dispatch('curiosity/event', Object.assign({
			event: e
		}, n));
	const a = () => t.dispatch('player/resume', 'pagehide'),
		o = () => t.dispatch('player/suspend', 'pagehide');
	window.addEventListener('pageshow', a, !1),
		window.addEventListener('resume', a, !1),
		window.addEventListener('pagehide', o, !1),
		window.addEventListener('freeze', o, !1),
		'mediaSession' in navigator && (navigator.mediaSession.setActionHandler('play', (function () {
			t.dispatch('curiosity/event', {
				event: 'Used media session: play'
			}),
				t.dispatch('player/togglePlay', !0)
		})), navigator.mediaSession.setActionHandler('pause', (function () {
			t.dispatch('curiosity/event', {
				event: 'Used media session: pause'
			}),
				t.dispatch('player/togglePlay', !1)
		})))
}().catch((t => {
	console.error(t)
})));
export {
	Mn as D,
	nl as a,
	Qm as b,
	Br as c,
	cs as d,
	is as e,
	Ul as f,
	Fl as g,
	ql as i,
	eg as l,
	el as r
};
//# sourceMappingURL=index.3d4504c0.js.map
