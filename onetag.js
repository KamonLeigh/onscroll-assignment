var u = "undefined" != typeof window && window === this ? this : "undefined" != typeof global ? global : this;

function B(g, d) {
    function b() {
    }

    b.prototype = d.prototype;
    g.prototype = new b;
    g.prototype.constructor = g;
    for (var a in d) if (u.Object.defineProperties) {
        var c = u.Object.getOwnPropertyDescriptor(d, a);
        void 0 !== c && u.Object.defineProperty(g, a, c)
    } else g[a] = d[a]
}

(function () {
    function g(d, b, a) {
        function c(e, n) {
            if (!b[e]) {
                if (!d[e]) {
                    var h = "function" == typeof require && require;
                    if (!n && h) return h(e, !0);
                    if (f) return f(e, !0);
                    h = Error("Cannot find module '" + e + "'");
                    throw h.code = "MODULE_NOT_FOUND", h;
                }
                h = b[e] = {i: {}};
                d[e][0].call(h.i, function (a) {
                    return c(d[e][1][a] || a)
                }, h, h.i, g, d, b, a)
            }
            return b[e].i
        }

        for (var f = "function" == typeof require && require, e = 0; e < a.length; e++) c(a[e]);
        return c
    }

    return g
})()({
    1: [function (g, d) {
        function b(a, c) {
            this.b = a;
            this.a = c
        }

        b.prototype.lb = function (a) {
            var c =
                this.c(), f = this.a.min;
            a(c <= this.a.max && c >= f)
        };
        b.prototype.c = function () {
            return this.b.window.innerWidth
        };
        d.i = b
    }, {}], 2: [function (g, d) {
        d.i = function (b, a, c) {
            (new (g(3))(b, a, c)).B()
        }
    }, {3: 3}], 3: [function (g, d) {
        function b(a, c, f) {
            this.X = a;
            this.G = c;
            this.window = c.window;
            this.I = c.viewability;
            this.j = c.viewableEngagedTime;
            this.F = c.adRenderingService;
            this.m = c.engagementBeacon;
            this.na = c.postbidFactory;
            this.C = a.contentId;
            this.a = a.settings;
            this.a.iv = "sf";
            this.l = this.a.headerMode || !1;
            this.margin = this.a.margin || 0;
            this.A =
                this.a.vetReload || !1;
            this.W = this.a.closeButtonEnabled || !1;
            this.V = this.a.closeButtonDelay || 1;
            this.backgroundColor = this.a.backgroundColor || "rgba(0,0,0,0)";
            this.v = this.a.scrollDelay || 0;
            this.zIndex = this.a.zIndex || 999999;
            this.placeholder = f;
            this.g = this.Z();
            this.o = !1
        }

        b.prototype.B = function () {
            this.K() ? this.u() : (this.placeholder.setAttribute("id", this.g), this.O(), this.c(), this.window.addEventListener("DOMContentLoaded", this.c.bind(this), !1), this.window.addEventListener("load", this.c.bind(this), !1), this.window.addEventListener("resize",
                this.c.bind(this), !1), this.v && this.window.addEventListener("scroll", this.c.bind(this), !1), this.m.ha("#" + this.g, this.C))
        };
        b.prototype.Z = function () {
            return this.l ? "onetag-sticky-header" : "onetag-sticky-footer"
        };
        b.prototype.K = function () {
            return this.window.document.getElementById(this.g) ? !0 : !1
        };
        b.prototype.c = function () {
            this.pa() && (this.s(), this.window.removeEventListener("scroll", this.c.bind(this)))
        };
        b.prototype.pa = function () {
            var a = this.window.pageYOffset;
            return !this.o && a >= this.v && this.I.la(this.placeholder)
        };
        b.prototype.s = function () {
            this.o = !0;
            "other" === this.a.demandType ? this.na.create(this.X, this.G, this.placeholder).B(this.f.bind(this)) : this.F.ua(this.a, this.placeholder, this.f.bind(this))
        };
        b.prototype.f = function (a, c) {
            this.b = a;
            c && this.ra(c);
            this.N();
            this.W && this.oa();
            this.A && (this.A = !1, this.qa())
        };
        b.prototype.ra = function (a) {
            this.a.width = a.width;
            this.a.height = a.height;
            this.placeholder.style.height = a.height + "px";
            this.b.style.width = a.width + "px";
            this.b.style.height = a.height + "px"
        };
        b.prototype.O = function () {
            this.placeholder.style.backgroundColor =
                this.backgroundColor;
            this.placeholder.style.width = "100%";
            this.placeholder.style.position = "fixed";
            this.placeholder.style.zIndex = this.zIndex;
            this.placeholder.style.bottom = "0px"
        };
        b.prototype.N = function () {
            this.a.isSafeFrame && this.Y();
            this.b.style.margin = "0 auto";
            this.b.style.position = "relative";
            this.b.style.display = "block";
            this.b.style.height = this.a.height + "px";
            this.b.style.width = this.a.width + "px";
            this.M()
        };
        b.prototype.Y = function () {
            var a = this.b.parentNode;
            a.parentNode === this.placeholder && (a.style.width =
                "100%")
        };
        b.prototype.M = function () {
            this.l ? (this.placeholder.style.marginTop = this.margin + "px", this.placeholder.style.top = "0px") : (this.placeholder.style.marginBottom = this.margin + "px", this.placeholder.style.bottom = "0px")
        };
        b.prototype.qa = function () {
            this.j.start();
            this.a.selector = "#" + this.g;
            this.j.Ta(this.a, this.placeholder, this.J.bind(this))
        };
        b.prototype.J = function (a) {
            this.j.Pa(a);
            this.s();
            this.m.ha(this.a.selector, this.C);
            this.a.iv = "vet";
            return !0
        };
        b.prototype.u = function () {
            this.placeholder.parentNode.removeChild(this.placeholder);
            this.j.Qa("#" + this.g)
        };
        b.prototype.U = function () {
            this.u()
        };
        b.prototype.oa = function () {
            var a = this;
            setTimeout(function () {
                var c = a.T();
                a.L(c);
                a.P(c);
                c.addEventListener("click", a.U.bind(a), !1)
            }, 1E3 * this.V)
        };
        b.prototype.T = function () {
            var a = this.window.document.createElement("div");
            a.setAttribute("class", "closeButton");
            a.innerHTML = "&times";
            return a
        };
        b.prototype.L = function (a) {
            this.placeholder.insertBefore(a, this.placeholder.firstChild)
        };
        b.prototype.P = function (a) {
            a = a.style;
            a.position = "absolute";
            a.cursor = "pointer";
            a.background = "#a9a9a9";
            a.textAlign = "center";
            a.width = "20px";
            a.height = "20px";
            a.lineHeight = "20px";
            a.left = this.a.width / 2 - 20 + "px";
            a.marginLeft = "50%";
            a.fontSize = "20px";
            a.fontFamily = "sans-serif";
            this.l ? a.bottom = "-20px" : a.top = "-20px"
        };
        d.i = b
    }, {}], 4: [function (g, d) {
        d.i = function (b, a, c) {
            b.settings.iv = "vet";
            a.postbidFactory.create(b, a, c).B()
        }
    }, {}], 5: [function (g, d) {
        var b = g(6);
        d.i = b
    }, {6: 6}], 6: [function (g, d) {
        function b(a) {
            this.window = a;
            this.document = this.window.document;
            this.o = 0;
            this.a = {
                before: this.j.bind(this), after: this.f.bind(this),
                append: this.b.bind(this), prepend: this.s.bind(this)
            }
        }

        b.prototype.B = function (a, c, f) {
            var b = c.settings || {}, d = b.customCSS || {}, g = b.method || "append",
                h = this.ca(b.selector || "body");
            if (h) {
                var m = f.adSizeService.Ia(b);
                b.width = m.width;
                b.height = m.height;
                d = this.l(b.width, b.height, d);
                this.m(h, d, g);
                "onetag-vet-content" === c.type && this.g(b.height, h);
                a(c, f, d)
            }
        };
        b.prototype.g = function (a, c) {
            var b = c.getBoundingClientRect().height;
            c.style.paddingTop = (b - a) / 2 + "px"
        };
        b.prototype.ca = function (a) {
            var c = void 0;
            try {
                c = this.document.querySelector(a)
            } catch (b) {
                this.window.console.log("Sovrn OneTag Error:",
                    b.message)
            }
            return c
        };
        b.prototype.l = function (a, c, b) {
            var e = this.document.createElement("div");
            e.setAttribute("class", "sovrn-onetag-ad");
            e.setAttribute("id", "onetag-wrapper-" + this.o++);
            e.style.width = a + "px";
            e.style.height = c + "px";
            e.style.margin = "0 auto";
            this.c(b, e);
            return e
        };
        b.prototype.c = function (a, c) {
            Object.keys(a).forEach(function (b) {
                c.style[b] = a[b]
            })
        };
        b.prototype.m = function (a, c, b) {
            this.a[b](a, c)
        };
        b.prototype.s = function (a, c) {
            a.insertBefore(c, a.firstChild)
        };
        b.prototype.b = function (a, c) {
            a.appendChild(c)
        };
        b.prototype.j = function (a, c) {
            a.parentNode.insertBefore(c, a)
        };
        b.prototype.f = function (a, c) {
            a.parentNode.insertBefore(c, a.nextSibling)
        };
        d.i = b
    }, {}], 7: [function (g, d) {
        var b = g(9), a = g(13), c = g(16), f = g(8), e = g(14), v = g(15);
        d.i = function (d, g) {
            var m = d.window, p = new f(m, d.httpClient, d.config), q = new a(m), m = new c(m, p, d), p = void 0;
            if (g) return p = new v(d, m, q), new b(d, p);
            p = new e(d, m, q);
            return new b(d, p)
        }
    }, {13: 13, 14: 14, 15: 15, 16: 16, 8: 8, 9: 9}], 8: [function (g, d) {
        function b(a, c, b) {
            this.window = a;
            this.c = c;
            this.b = b;
            this.a = null
        }

        b.prototype.get =
            function (a) {
                var c = this;
                this.a ? a(this.a) : this.c.get(this.b.cookieEndpoint + this.window.location.origin, function (b) {
                    c.a = b.ljt_reader;
                    a(c.a)
                }, !0)
            };
        d.i = b
    }, {}], 9: [function (g, d) {
        function b(a, c) {
            this.b = a.engagementMonitor;
            this.l = a.httpClient;
            this.j = a.config;
            this.window = a.window;
            this.c = this.g = !0;
            this.a = c
        }

        b.prototype.start = function (a, c) {
            this.a.start(a, c);
            this.b.start();
            this.b.ia("user_active", this.u.bind(this));
            this.b.ia("user_inactive", this.v.bind(this));
            this.window.addEventListener("unload", this.f.bind(this,
                !0));
            this.a.Na(this.f.bind(this, !1));
            this.A()
        };
        b.prototype.A = function () {
            this.window.setInterval(this.s.bind(this), 1E3)
        };
        b.prototype.s = function () {
            this.a.Ua(this.g)
        };
        b.prototype.ha = function (a, c) {
            var b = this.m(this.window.document.querySelector(a));
            this.o(a, c, b) && this.a.da(a, c, b)
        };
        b.prototype.o = function (a, c, b) {
            if (!b) {
                var e = this;
                setTimeout(function () {
                    e.ha(a, c)
                }, 1E3);
                return !1
            }
            return !0
        };
        b.prototype.m = function (a) {
            a = a.getElementsByTagName("iframe");
            for (var c = 0; c < a.length; c++) {
                var b = a[c].getBoundingClientRect();
                if (b.width && b.height) return b
            }
        };
        b.prototype.u = function () {
            this.c = this.g = !0
        };
        b.prototype.v = function () {
            this.g = !1;
            this.c && this.f(!1);
            this.c = !1
        };
        b.prototype.f = function (a) {
            var c = this, b = this.a.Ja();
            this.a.H();
            this.a.getMetadata(function (e) {
                c.l.tb(c.j.beaconEndpoint, {metadata: e, payloads: b}, a)
            })
        };
        d.i = b
    }, {}], 10: [function (g, d) {
        function b(a, c) {
            this.window = a;
            this.C = c.C;
            this.D = c.D;
            this.type = "LIGHT";
            this.b = 0;
            this.a = 1
        }

        b.prototype.ba = function () {
            return {
                type: this.type, selector: this.D, contentId: this.C, refreshes: this.b,
                impressions: this.a
            }
        };
        b.prototype.ya = function () {
            this.b += 1;
            this.a += 1
        };
        b.prototype.H = function () {
            this.a = this.b = 0
        };
        d.i = b
    }, {}], 11: [function (g, d) {
        function b(a) {
            this.window = a;
            this.type = "PAGE";
            this.c = this.b = this.a = 0
        }

        b.prototype.ba = function () {
            return {type: this.type, dwellTime: this.a, engagedDwellTime: this.b, scrollDepth: this.c}
        };
        b.prototype.xa = function () {
            this.b += 1
        };
        b.prototype.za = function () {
            this.a += 1;
            this.c = Math.max(this.c, this.window.pageYOffset)
        };
        b.prototype.H = function () {
            this.b = this.a = 0
        };
        d.i = b
    }, {}], 12: [function (g,
                           d) {
        function b(a, c) {
            this.D = c.D;
            this.C = c.C;
            this.S = c.S;
            this.window = a;
            this.type = "PLACEMENT";
            this.f = this.c = 0;
            this.a = 1;
            this.g = this.b = 0
        }

        b.prototype.ba = function () {
            var a = this.j();
            return {
                type: this.type,
                secondsInView: this.f,
                viewableEngagedTime: this.c,
                dimensions: a,
                aboveTheFold: this.l(a),
                refreshes: this.b,
                impressions: this.a,
                selector: this.D,
                contentId: this.C,
                dwellTime: this.g
            }
        };
        b.prototype.j = function () {
            return {
                top: this.S.top + this.window.scrollY,
                left: this.S.left + this.window.scrollX,
                height: this.S.height,
                width: this.S.width
            }
        };
        b.prototype.xa = function (a) {
            a && (this.c += 1)
        };
        b.prototype.za = function (a) {
            a && (this.f += 1);
            this.g += 1
        };
        b.prototype.H = function () {
            this.b = this.a = this.f = this.c = 0
        };
        b.prototype.ya = function () {
            this.b += 1;
            this.a += 1
        };
        b.prototype.l = function (a) {
            return 0 <= this.window.innerHeight - (a.height / 2 + a.top)
        };
        d.i = b
    }, {}], 13: [function (g, d) {
        function b(b) {
            this.window = b;
            this.a = {Placement: f, Page: c, Light: a}
        }

        var a = g(10), c = g(11), f = g(12);
        b.prototype.create = function (a, c) {
            return new this.a[a](this.window, c)
        };
        d.i = b
    }, {10: 10, 11: 11, 12: 12}], 14: [function (g,
                                                 d) {
        function b(a, c, b) {
            this.window = a.window;
            this.m = a.viewability;
            this.l = a.adSizeService;
            this.a = {};
            this.f = c;
            this.g = b;
            this.c = this.g.create("Page");
            this.b = null;
            this.j = function () {
            }
        }

        b.prototype.start = function (a, c) {
            this.b = a;
            c && this.f.Da()
        };
        b.prototype.da = function (a, c, b) {
            var e = this.a[a];
            e && (e.zb = null);
            this.s(e, c) && this.j();
            if (this.u(e, c)) return e.metrics.ya();
            this.o(a, c, b)
        };
        b.prototype.o = function (a, c, b) {
            var e = this.window.document.querySelector(a);
            b = this.g.create("Placement", {D: a, C: c, S: b});
            this.a[a] = {
                selector: a,
                element: e, contentId: c, metrics: b
            }
        };
        b.prototype.s = function (a, c) {
            return a && a.contentId !== c
        };
        b.prototype.u = function (a, c) {
            return a && a.contentId === c
        };
        b.prototype.Na = function (a) {
            this.j = a
        };
        b.prototype.Ua = function (a) {
            a && this.c.xa();
            this.c.za();
            this.v(a)
        };
        b.prototype.v = function (a) {
            for (var c in this.a) if (this.a.hasOwnProperty(c)) {
                var b = this.a[c], e = b.metrics, b = this.m.la(this.l.Ga(b));
                a && e.xa(b);
                e.za(b)
            }
        };
        b.prototype.H = function () {
            for (var a in this.a) this.a.hasOwnProperty(a) && this.a[a].metrics.H();
            this.c.H()
        };
        b.prototype.Ja = function () {
            var a = [this.c.ba()], c;
            for (c in this.a) this.a.hasOwnProperty(c) && a.push(this.a[c].metrics.ba());
            return a
        };
        b.prototype.getMetadata = function (a) {
            return this.f.get(this.b, function (c) {
                return a(c)
            })
        };
        d.i = b
    }, {}], 15: [function (g, d) {
        function b(a, c, b) {
            this.f = c;
            this.g = b;
            this.a = {};
            this.c = function () {
            }
        }

        b.prototype.start = function (a) {
            this.b = a;
            this.f.Da()
        };
        b.prototype.da = function (a, c) {
            var b = this.a[a];
            if (!b || this.l(b, c)) return this.j(a, c), this.c();
            b.metrics.ya();
            return this.c()
        };
        b.prototype.j =
            function (a, c) {
                var b = this.g.create("Light", {D: a, C: c});
                this.a[a] = {selector: a, contentId: c, metrics: b}
            };
        b.prototype.l = function (a, c) {
            return a && a.contentId !== c
        };
        b.prototype.Na = function (a) {
            this.c = a
        };
        b.prototype.H = function () {
            for (var a in this.a) this.a.hasOwnProperty(a) && this.a[a].metrics.H()
        };
        b.prototype.Ja = function () {
            var a = [], c;
            for (c in this.a) this.a.hasOwnProperty(c) && a.push(this.a[c].metrics.ba());
            return a
        };
        b.prototype.getMetadata = function (a) {
            return this.f.get(this.b, function (c) {
                return a({
                    pageViewSalt: c.pageViewSalt,
                    url: c.url, containerId: c.containerId
                })
            })
        };
        b.prototype.Ua = function () {
            return !1
        };
        d.i = b
    }, {}], 16: [function (g, d) {
        function b(a, c, b) {
            this.window = a;
            this.j = this.f();
            this.c = c;
            this.a = !0;
            this.b = b.geoLocationService
        }

        b.prototype.get = function (a, c) {
            var b = this;
            this.ka(function (e) {
                var d = {
                    pageViewSalt: b.j,
                    screenWidth: b.window.screen.width,
                    screenHeight: b.window.screen.height,
                    documentHeight: b.g(),
                    url: b.window.location.href,
                    containerId: a,
                    ljtReader: "",
                    location: e
                };
                if (!b.a) return c(d);
                b.c.get(function (a) {
                    d.ljtReader = a;
                    return c(d)
                })
            })
        };
        b.prototype.ka = function (a) {
            this.b.ka(function (c) {
                return a(c)
            })
        };
        b.prototype.f = function () {
            return +new Date + Math.floor(1E3 * Math.random())
        };
        b.prototype.g = function () {
            var a = this.window.document.body, c = this.window.document.documentElement;
            return Math.max(a.scrollHeight, a.offsetHeight, c.clientHeight, c.scrollHeight, c.offsetHeight)
        };
        b.prototype.Da = function () {
            this.a = !1
        };
        d.i = b
    }, {}], 17: [function (g, d) {
        var b = g(18), a = g(20), c = g(21);
        d.i = function (f, e) {
            var d = new a(f), g = new c(f, e);
            return new b(d, g, f)
        }
    }, {18: 18, 20: 20, 21: 21}],
    18: [function (g, d) {
        function b(a, c, b) {
            this.b = a;
            this.g = c;
            this.a = {};
            this.f = [];
            this.j = [];
            this.c = [];
            this.window = b;
            this.m = !1
        }

        b.prototype.start = function () {
            this.m || (this.m = !0, this.b.Ra(this.o.bind(this)), this.b.start(), this.g.Ra(this.o.bind(this)), this.g.start(), this.f.push(this.b), this.f.push(this.g), this.j.push(this.b), this.c.push(this.g), this.c.push(this.b))
        };
        b.prototype.ia = function (a, c) {
            "undefined" === typeof this.a[a] && (this.a[a] = []);
            this.a[a].push(c)
        };
        b.prototype.o = function (a, c, b) {
            this.l(a, {name: a});
            c &&
            this.s() ? (a = "user_active", this.l(a, {name: a}), this.v()) : !c && this.u(b.id) && (a = "user_inactive", this.l(a, {name: a}))
        };
        b.prototype.v = function () {
            for (var a = this.f.length; a--;) this.f[a].reset()
        };
        b.prototype.s = function () {
            for (var a = this.j.length; a--;) if (!this.j[a].R) return !1;
            return !0
        };
        b.prototype.u = function (a) {
            for (var c = this.c.length; c--;) if (this.c[c].id === a) return !0;
            return !1
        };
        b.prototype.l = function (a, c) {
            if (this.a[a]) for (var b = this.a[a].length; b--;) this.a[a][b](c)
        };
        d.i = b
    }, {}], 19: [function (g, d) {
        function b(a) {
            this.id =
                a;
            this.R = !0;
            this.a = null
        }

        b.prototype.Ra = function (a) {
            this.a = a
        };
        b.prototype.ea = function (a, c) {
            this.a(this.id + "_" + a, c, this)
        };
        b.prototype.$ = function (a, c, b) {
            function e(a) {
                b(a)
            }

            a.addEventListener ? a.addEventListener(c, e.bind(this), !1) : a.attachEvent("on" + c, e.bind(this))
        };
        b.prototype.reset = function () {
            this.R = !0
        };
        d.i = b
    }, {}], 20: [function (g, d) {
        function b(c) {
            a.call(this, "focus");
            this.window = c
        }

        var a = g(19);
        B(b, a);
        b.prototype.start = function () {
            this.$(this.window, "focus", this.Fa.bind(this));
            this.$(this.window, "focusin",
                this.Fa.bind(this));
            this.$(this.window, "blur", this.Ea.bind(this));
            this.$(this.window, "focusout", this.Ea.bind(this))
        };
        b.prototype.Fa = function () {
            this.R = !0;
            this.ea("active", !0)
        };
        b.prototype.Ea = function () {
            if (this.window.document.hasFocus()) return this.ea("active", !0);
            this.ea("inactive", !1)
        };
        d.i = b
    }, {19: 19}], 21: [function (g, d) {
        function b(c, b) {
            a.call(this, "input");
            this.La = !1;
            this.xb = b || 10;
            this.Sa = "mousemove mousedown scroll keyup keypress keydown touchstart touchmove touchend".split(" ");
            this.window = c
        }

        var a =
            g(19);
        B(b, a);
        b.prototype.start = function () {
            for (var a = 0; a < this.Sa.length; a++) this.$(this.window, this.Sa[a], this.ta.bind(this));
            this.La || (this.La = !0, this.ta())
        };
        b.prototype.ta = function () {
            this.R || this.ea("active", !0);
            clearTimeout(this.yb);
            this.yb = setTimeout(this.kb.bind(this), 1E3 * this.xb);
            this.R = !0
        };
        b.prototype.kb = function () {
            this.R && this.ea("inactive", !1);
            this.R = !1
        };
        b.prototype.reset = function () {
            a.prototype.reset.call(this);
            this.ta()
        };
        d.i = b
    }, {19: 19}], 22: [function (g, d) {
        var b = g(23), a = g(24);
        d.i = function (c,
                        f) {
            var e = new a(c, f);
            return new b(e)
        }
    }, {23: 23, 24: 24}], 23: [function (g, d) {
        function b(a) {
            this.f = a
        }

        b.prototype.mb = function (a, c) {
            if (this.a(a)) c(!0); else {
                var b = this.l(a), e = this.j(b), e = this.o.bind(this, e, c), d;
                for (d in b) b.hasOwnProperty(d) && this.b(b[d], e)
            }
        };
        b.prototype.b = function (a, c) {
            var b = this, e = {ga: [], aa: 0};
            a.forEach(function (d, g) {
                var h = b.m.bind(b, g, a, e, c);
                b.f.create(d).lb(h)
            })
        };
        b.prototype.m = function (a, c, b, e, d) {
            var g = this;
            b.ga[a] = d;
            b.aa++;
            if (b.aa === c.length) {
                var h = this.g(c);
                b.ga.forEach(function (a, b) {
                    h =
                        g.c(h, a, c[b].settings.rule)
                });
                return e(h)
            }
        };
        b.prototype.o = function (a, c, b) {
            a.ga.push(b);
            a.aa++;
            if (a.aa === a.pb) return a = a.ga.every(function (a) {
                return a
            }), c(a)
        };
        b.prototype.a = function (a) {
            return !a || 0 === a.length
        };
        b.prototype.g = function (a) {
            return "EXCLUDE" === a[0].settings.rule
        };
        b.prototype.c = function (a, c, b) {
            return "EXCLUDE" === b ? a && !c : a || c
        };
        b.prototype.l = function (a) {
            var c = {};
            a.forEach(function (a) {
                c[a.type] || (c[a.type] = []);
                c[a.type].push(a)
            });
            return c
        };
        b.prototype.j = function (a) {
            return {
                ga: [], pb: Object.keys(a).length,
                aa: 0
            }
        };
        d.i = b
    }, {}], 24: [function (g, d) {
        function b(a, c) {
            this.a = a;
            this.b = c
        }

        b.prototype.create = function (a) {
            return new this.b[a.type + "@" + a.revision](this.a, a.settings)
        };
        d.i = b
    }, {}], 25: [function (g, d) {
        var b = g(26);
        d.i = b
    }, {26: 26}], 26: [function (g, d) {
        function b() {
            this.a = new a
        }

        var a = g(27);
        b.prototype.tb = function (a, b, e) {
            var d = this.a.create();
            d.open("POST", a, e ? !1 : !0);
            d.setRequestHeader("Content-Type", "application/json");
            d.send(JSON.stringify(b))
        };
        b.prototype.get = function (a, b, e) {
            var d = this.a.create();
            d.onreadystatechange =
                function () {
                    if (4 === d.readyState) {
                        var a = void 0;
                        try {
                            a = JSON.parse(d.responseText)
                        } catch (c) {
                            a = {}
                        }
                        b(a)
                    }
                };
            d.open("GET", a, !0);
            d.withCredentials = !!e;
            d.send()
        };
        d.i = b
    }, {27: 27}], 27: [function (g, d) {
        function b() {
        }

        b.prototype.create = function () {
            return new XMLHttpRequest
        };
        d.i = b
    }, {}], 28: [function (g, d) {
        var b = g(29);
        d.i = b
    }, {29: 29}], 29: [function (g, d) {
        function b(a, c, b) {
            this.g = c.adRenderingService;
            this.A = c.adSizeService;
            this.window = c.window;
            this.o = c.bidderParamsParser;
            this.oa = c.config.prebidUrl;
            this.F = c.geoLocationService;
            this.a = a.settings;
            this.c = this.A.Ia(this.a);
            this.b = this.g.Ca(this.c.width, this.c.height);
            this.I = this.V();
            this.j = "sovrn-postbid" + this.c.width + "x" + this.c.height;
            this.ra = this.O();
            this.m = this.N();
            this.Z = this.o.sb(this.a.bidders, this.a.iv);
            this.Ab = this.a.revShareAdjustments;
            this.placeholder = b;
            this.M = this.a.cmpTimeout || 1E4;
            this.K = this.a.allowAuctionWithoutConsent || !0;
            this.P = this.a.gdprMode || !1
        }

        b.prototype.B = function (a) {
            this.f = void 0 === a ? function () {
            } : a;
            this.placeholder.appendChild(this.b);
            this.Za();
            this.Wa();
            this.Ya()
        };
        b.prototype.Ya = function () {
            var a = this;
            this.na = this.window.setInterval(function () {
                a.Y() && (a.window.clearInterval(a.na), a.Xa(a.b.contentWindow.pbjs))
            }, 1E3)
        };
        b.prototype.Xa = function (a) {
            var c = this;
            this.F.Ma("EU", function (b, e) {
                if (c.P && (e || b)) return a.que.push(function () {
                    a.setConfig({consentManagement: {cmpApi: "iab", timeout: c.M, allowAuctionWithoutConsent: c.K}});
                    c.v(a)
                });
                c.v(a)
            })
        };
        b.prototype.v = function (a) {
            var c = this;
            a.que.push(function () {
                c.a.revShareAdjustments && c.o.$a(a, c.a.revShareAdjustments);
                c.J(a);
                c.X(a)
            })
        };
        b.prototype.J = function (a) {
            a.addAdUnits([{code: this.j, sizes: this.I, bids: this.Z}])
        };
        b.prototype.X = function (a) {
            a.requestBids({timeout: 1E3, bidsBackHandler: this.L.bind(this, a)})
        };
        b.prototype.L = function (a) {
            this.l = this.a.passbackHtml;
            var c = a.getAdserverTargetingForAdUnitCode(this.j);
            if (c && c.hb_adid) return this.qa(a, c);
            if (this.l) return this.pa();
            this.g.ua(this.a, this.placeholder, this.f);
            return this.s()
        };
        b.prototype.pa = function () {
            var a = this.m, c = a.contentWindow.document;
            if (this.a.isSafeFrame) return this.u(this.l);
            a.width = this.c.width;
            a.height = this.c.height;
            c.write(this.l);
            c.close();
            this.f(this.b, this.c)
        };
        b.prototype.qa = function (a, c) {
            var b = this.m.contentWindow.document;
            if (this.a.isSafeFrame) return this.u(this.W(a, c.hb_adid));
            a.renderAd(b, c.hb_adid);
            return this.f(this.b, this.U(c.hb_size))
        };
        b.prototype.U = function (a) {
            a = a.split("x");
            return {width: Number(a[0]), height: Number(a[1])}
        };
        b.prototype.u = function (a) {
            var c = this.G(this.a);
            c.adCode = a;
            this.g.ua(c, this.placeholder, this.f);
            return this.s()
        };
        b.prototype.W = function (a,
                                  c) {
            var b = a.getBidResponses()[this.j].bids.find(function (a) {
                return a.adId === c
            });
            return b.ad ? b.ad : b.adUrl ? this.T(b) : ""
        };
        b.prototype.T = function (a) {
            var c = {
                frameborder: 0,
                scrolling: "no",
                marginheight: 0,
                marginwidth: 0,
                topmargin: 0,
                leftmargin: 0,
                width: 0,
                height: 0,
                allowTransparency: !0
            };
            c.width = a.width;
            c.height = a.height;
            c.src = a.adUrl;
            a = "<iframe";
            for (var b = Object.getOwnPropertyNames(c), e = 0; e < b.length; e++) a += " " + b[e] + '="' + c[b[e]] + '"';
            return a + "></iframe>"
        };
        b.prototype.Y = function () {
            return !!this.b.contentWindow.pbjs
        };
        b.prototype.N = function () {
            for (var a = this.window.document.createElement("iframe"), c = {
                frameborder: 0,
                scrolling: "no",
                marginheight: 0,
                marginwidth: 0,
                topmargin: 0,
                leftmargin: 0,
                width: 0,
                height: 0,
                allowTransparency: !0,
                id: "postbid_if"
            }, b = Object.getOwnPropertyNames(c), e = 0; e < b.length; e++) a.setAttribute(b[e], c[b[e]]);
            return a
        };
        b.prototype.s = function () {
            this.b.parentNode.removeChild(this.b)
        };
        b.prototype.Wa = function () {
            this.b.contentDocument.body.appendChild(this.m)
        };
        b.prototype.O = function () {
            var a = this.window.document.createElement("script");
            a.setAttribute("src", this.oa);
            a.setAttribute("async", "");
            a.setAttribute("type", "text/javascript");
            return a
        };
        b.prototype.Za = function () {
            var a = this.g.Ha(this.b);
            a.open();
            a.close();
            a.body.appendChild(this.ra)
        };
        b.prototype.V = function () {
            var a = this.a.sizes;
            return a ? a.map(function (a) {
                a = a.split("x");
                return [Number(a[0]), Number(a[1])]
            }) : [[this.a.width, this.a.height]]
        };
        b.prototype.G = function (a) {
            return JSON.parse(JSON.stringify(a))
        };
        d.i = b
    }, {}], 30: [function (g, d) {
        var b = g(31);
        d.i = b
    }, {31: 31}], 31: [function (g, d) {
        function b(a,
                   c) {
            this.b = c;
            this.window = a
        }

        b.prototype.la = function (a) {
            if ("SAFEFRAME" === this.window.state) return this.window.$sf.ext.inViewPercentage() / 100 >= this.b;
            a = a.getBoundingClientRect();
            return this.f(a, this.window.innerWidth) * this.c(a, this.window.innerHeight) / (a.width * a.height) >= this.b
        };
        b.prototype.f = function (a, c) {
            return this.a(a.right, c) - this.a(a.left, c)
        };
        b.prototype.c = function (a, c) {
            return this.a(a.bottom, c) - this.a(a.top, c)
        };
        b.prototype.a = function (a, c) {
            return Math.max(0, Math.min(a, c))
        };
        d.i = b
    }, {}], 32: [function (g,
                           d) {
        function b(a, c, b) {
            this.window = a;
            this.b = b;
            this.protocol = this.window.location.protocol;
            this.v = c;
            this.a = {};
            this.f = null
        }

        b.prototype.ua = function (a, c, b) {
            b = void 0 === b ? function () {
            } : b;
            if (a.isSafeFrame) this.o(a, c, b); else {
                var e = this.Ca(a.width, a.height);
                c.appendChild(e);
                var d = this.Ha(e);
                d.open();
                d.write(this.c(a));
                setTimeout(function () {
                    d.close();
                    return b(e)
                }, 0)
            }
        };
        b.prototype.Ca = function (a, c) {
            var b = this.window.document.createElement("iframe");
            b.width = a + "px";
            b.height = c + "px";
            b.setAttribute("frameBorder", "0");
            b.setAttribute("scrolling", "no");
            b.setAttribute("marginwidth", "0");
            b.setAttribute("marginheight", "0");
            return b
        };
        b.prototype.o = function (a, c, b) {
            var e = this;
            this.v.get(function (d) {
                e.u(d, {width: a.width, height: a.height, adCode: a.adCode || e.c(a)}, c, b)
            })
        };
        b.prototype.u = function (a, c, b, e) {
            var d = b.id + "-safe-frame", g = this.window.document.createElement("div");
            g.setAttribute("id", d);
            b.appendChild(g);
            this.a[d] = {placeholder: b, rb: e};
            this.f || this.g(a);
            b = new a.PosConfig({id: d, dest: d, w: c.width, h: c.height});
            a.render(new a.Position(d,
                c.adCode, null, b));
            this.l(d)
        };
        b.prototype.g = function (a) {
            this.f = new a.Config({auto: !1, renderFile: this.b.safeFrameUrls.html, onEndPosRender: this.s.bind(this)})
        };
        b.prototype.l = function (a) {
            var c = this;
            setTimeout(function () {
                c.window.document.getElementById(a).dispatchEvent(c.j())
            }, 500)
        };
        b.prototype.j = function () {
            if ("function" === typeof this.window.Event) return new this.window.Event("load");
            var a = this.window.document.createEvent("CustomEvent");
            a.initCustomEvent("load", !1, !1, void 0);
            return a
        };
        b.prototype.c = function (a) {
            return '<script src="' +
                this.m(a) + '">\x3c/script>'
        };
        b.prototype.s = function (a) {
            var c = this.a[a];
            c.rb(c.placeholder.querySelector("#" + a));
            delete this.a[a]
        };
        b.prototype.m = function (a) {
            var c = a.iv;
            a = this.protocol + this.b.adRenderUrl + a.zoneId + "&width=" + a.width + "&height=" + a.height;
            c && (a = a + "&iv=" + c);
            return a
        };
        b.prototype.Ha = function (a) {
            return a.contentDocument || a.contentWindow && a.contentWindow.document || a.document
        };
        d.i = b
    }, {}], 33: [function (g, d) {
        function b(a) {
            this.window = a;
            this.a = null
        }

        var a = g(35), c = g(34);
        b.prototype.eb = function () {
            return this.a ?
                this.a : this.window.googletag ? this.a = new a(this.window.pbjs, this.window.googletag, this.b) : this.window.apntag ? this.a = new c(this.window.pbjs, this.window.apntag, this.b) : null
        };
        b.prototype.b = function (a) {
            return a.replace(/\\\//g, "/").replace(/\\\./g, ".")
        };
        d.i = b
    }, {34: 34, 35: 35}], 34: [function (g, d) {
        function b(a, c, b) {
            this.c = a;
            this.a = c;
            this.b = b
        }

        b.prototype.Va = function (a) {
            a = this.b(a);
            var c = this.f(a);
            this.a.modifyTag(a, {keywords: c});
            this.c.setTargetingForAst()
        };
        b.prototype.f = function (a) {
            var c = {};
            a = this.a.requests.tags[a].keywords;
            for (var b = Object.keys(a), e = 0; e < b.length; e++) "hb_" !== b[e].substring(0, 3).toLowerCase() && (c[b[e]] = a[b[e]]);
            return c
        };
        b.prototype.reload = function (a) {
            this.a.refresh(this.b(a))
        };
        d.i = b
    }, {}], 35: [function (g, d) {
        function b(a, c, b) {
            this.c = a;
            this.b = c;
            this.a = b
        }

        b.prototype.Va = function (a) {
            this.c.setTargetingForGPTAsync([this.a(a)])
        };
        b.prototype.f = function (a) {
            for (var c = this.b.pubads().getSlots(), b = 0; b < c.length; b++) if (a === c[b].getSlotElementId()) return c[b]
        };
        b.prototype.reload = function (a) {
            a = this.f(this.a(a));
            this.b.pubads().refresh([a])
        };
        d.i = b
    }, {}], 36: [function (g, d) {
        function b() {
        }

        b.prototype.sa = function (a) {
            return (a = this.b(a)) ? a.getBoundingClientRect() : {width: 0, height: 0}
        };
        b.prototype.Ga = function (a) {
            a.trackedIframe && this.c(a) || (a.trackedIframe = this.b(a.element));
            return a.trackedIframe ? a.trackedIframe : a.element
        };
        b.prototype.ma = function (a, b) {
            if (a.useNativeReload) return !0;
            var f = a.sizeTolerance || 10;
            return this.a(a).some(function (a) {
                var d = Math.abs(b.height - a.height) < f;
                return Math.abs(b.width - a.width) < f && d
            })
        };
        b.prototype.Ia = function (a) {
            return a.sizes ?
                this.a(a).reduce(function (a, b) {
                    return a.width * a.height < b.width * b.height ? b : a
                }, {width: 0, height: 0}) : {width: a.width, height: a.height}
        };
        b.prototype.a = function (a) {
            var b = a.sizes;
            return b ? b.map(function (a) {
                a = a.split("x");
                return {width: Number(a[0]), height: Number(a[1])}
            }) : [{height: a.height, width: a.width}]
        };
        b.prototype.c = function (a) {
            for (var b = a.trackedIframe; b.parentNode;) if (b = b.parentNode, b === a.element) return !0;
            return !1
        };
        b.prototype.b = function (a) {
            a = a.getElementsByTagName("iframe");
            for (var b = 0; b < a.length; b++) {
                var f =
                    a[b].getBoundingClientRect();
                if (f.width && f.height) return a[b]
            }
        };
        d.i = b
    }, {}], 37: [function (g, d) {
        function b() {
        }

        b.prototype.$a = function (a, b) {
            Object.keys(b).forEach(function (f) {
                a.bidderSettings[f] = {
                    bidCpmAdjustment: function (a) {
                        return a * Number(b[f])
                    }
                }
            })
        };
        b.prototype.sb = function (a, b) {
            var f = this, e = [];
            Object.keys(a).forEach(function (d) {
                e = e.concat(f.a(d, a, b))
            });
            return e
        };
        b.prototype.a = function (a, b, f) {
            var e = this;
            return b[a].map(function (b) {
                return {bidder: a, params: e.b(a, b, f)}
            })
        };
        b.prototype.b = function (a, b, f) {
            f &&
            "sovrn" === a && (b.iv = f);
            return b
        };
        d.i = b
    }, {}], 38: [function (g, d) {
        function b(a) {
            this.window = a.window;
            this.g = a.httpClient;
            this.l = a.config.dfpGatewayUrl;
            this.f = a.adLocator;
            this.a = null
        }

        b.prototype.o = function (a) {
            if (this.a) return this.a;
            a = a.getAdUnitPath().split("/");
            for (var b = 0; b < a.length; b++) {
                var f = Number(a[b]);
                if (f) return this.a = f
            }
            return 0
        };
        b.prototype.u = function (a, b) {
            for (var f = 0; f < a.length; f++) {
                var e = this.f.ca(a[f]);
                if (e && e.id === b || e && e.querySelector("#" + b)) return !0
            }
            return !1
        };
        b.prototype.b = function (a, b,
                                  f) {
            f = void 0 === f ? 0 : f;
            if (25 <= f) b({}); else {
                var e = a.getResponseInformation();
                if (e) b(e); else {
                    var d = this;
                    setTimeout(function () {
                        d.b(a, b, ++f)
                    }, 200)
                }
            }
        };
        b.prototype.G = function (a, b, f) {
            var e = this;
            this.o(a) ? this.b(a, function (a) {
                if (!a.lineItemId || !e.j(b)) return f(!1);
                f(!0)
            }) : f(!1)
        };
        b.prototype.j = function (a) {
            var b = a.lineItemTypes || [], f = a.roadblockingType || !1;
            return (a.ordersToExclude || []).length || b.length || f
        };
        b.prototype.c = function (a, b) {
            var f = this;
            this.g.get(this.l + "/" + this.a + "/" + a.lineItemId, function (e) {
                f.s(e, a,
                    b)
            })
        };
        b.prototype.s = function (a, b, f) {
            if ("PENDING" === a.state) {
                var e = this;
                setTimeout(function () {
                    e.c(b, f)
                }, 2E3)
            }
            "READY" === a.state && f(a)
        };
        b.prototype.ob = function (a, b, f) {
            var e = this, d = a.getSlotElementId();
            this.u(b.selectorsToExclude || [], d) ? f(!0) : this.G(a, b, function (d) {
                if (!d) return f(!1);
                e.b(a, function (a) {
                    e.c(a, function (a) {
                        return f(e.m(a, b))
                    })
                })
            })
        };
        b.prototype.m = function (a, b) {
            return this.A(a, b) || this.v(a, b) || this.F(a, b)
        };
        b.prototype.v = function (a, b) {
            for (var f = b.lineItemTypes || [], e = 0; e < f.length; e++) {
                var d =
                    "all" === f[e].priority, g = a.priority === Number(f[e].priority);
                if (a.lineItemType === f[e].type && (d || g)) return !0
            }
            return !1
        };
        b.prototype.A = function (a, b) {
            return -1 < (b.ordersToExclude || []).indexOf(a.orderId)
        };
        b.prototype.F = function (a, b) {
            return b.roadblockingType ? "CREATIVE_SET" === a.roadblockingType : !1
        };
        d.i = b
    }, {}], 39: [function (g, d) {
        function b(a, b, f) {
            this.window = a;
            this.f = b;
            this.o = f;
            this.b = {};
            this.c = {}
        }

        b.prototype.fb = function (a, b) {
            for (var f = Object.keys(this.b), e = 0; e < f.length; e++) this.Ba(a, this.c[f[e]], b)
        };
        b.prototype.Ba =
            function (a, b, f) {
                var e = this.a(b);
                this.f.ma(a, this.b[e]) && this.o.ob(b, a, this.s.bind(this, e, f))
            };
        b.prototype.s = function (a, b, f) {
            f || b("#" + a)
        };
        b.prototype.gb = function () {
            for (var a = this.Ka(), b = [], f = 0; f < a.length; f++) {
                var e = a[f], d = this.g(e);
                this.l(d) && b.push(e)
            }
            return b
        };
        b.prototype.jb = function () {
            for (var a = this.j(), b = 0; b < a.length; b++) {
                var f = a[b], e = this.a(f);
                this.m(e);
                this.c[e] = f
            }
        };
        b.prototype.ub = function (a) {
            var b = this.a(a);
            this.m(b);
            this.c[b] = a
        };
        b.prototype.m = function (a) {
            var b = this.g(a);
            this.l(b) && (this.b[a] =
                {width: b.width, height: b.height})
        };
        b.prototype.Ka = function () {
            for (var a = this.j(), b = [], f = 0; f < a.length; f++) b.push(this.a(a[f]));
            return b
        };
        b.prototype.j = function () {
            var a = this.window.googletag.pubads();
            return a.getSlots ? a.getSlots() : this.window.googletag.getSlots()
        };
        b.prototype.g = function (a) {
            return (a = this.window.document.querySelector("#" + a)) ? this.f.sa(a) : {width: 0, height: 0}
        };
        b.prototype.nb = function () {
            var a = this.window.googletag;
            return !!a && a.pubadsReady
        };
        b.prototype.l = function (a) {
            return 50 <= a.width && 50 <=
                a.height
        };
        b.prototype.bb = function (a) {
            var b = this;
            this.window.googletag.cmd.push(function () {
                b.window.googletag.pubads().addEventListener("slotRenderEnded", function (b) {
                    a(b.slot)
                })
            })
        };
        b.prototype.ab = function (a) {
            var b = this;
            this.window.googletag.cmd.push(function () {
                b.window.googletag.pubads().addEventListener("impressionViewable", function (f) {
                    f = b.a(f.slot);
                    a("#" + f)
                })
            })
        };
        b.prototype.ib = function () {
            var a = this.window.googletag;
            a.cmd = a.cmd || []
        };
        b.prototype.a = function (a) {
            return a.getSlotElementId().replace(/\//g,
                "\\/").replace(/\./g, "\\.")
        };
        d.i = b
    }, {}], 40: [function (g, d) {
        function b(a) {
            this.window = a.window;
            this.c = a.adSizeService;
            this.f = a;
            this.a = null
        }

        var a = g(39), c = g(38);
        b.prototype.get = function (b) {
            if (!this.a) {
                var e = new c(this.f);
                this.a = new a(this.window, this.c, e)
            }
            return this.b(b)
        };
        b.prototype.b = function (a) {
            return this.a.nb() ? (this.a.ib(), this.a.jb(), a(this.a)) : setTimeout(this.b.bind(this, a), 1E3)
        };
        d.i = b
    }, {38: 38, 39: 39}], 41: [function (g, d) {
        function b(a) {
            this.c = a.config;
            this.f = a.httpClient;
            this.window = a.window;
            this.b =
                !1;
            this.a = []
        }

        b.prototype.Ma = function (a, b) {
            var f = this;
            this.ka(function (e) {
                f.l(a, function (a) {
                    return e ? 0 === a.length ? b({message: "Grouping not found"}, null) : b(null, -1 < a.indexOf(e)) : b({message: "Location not found"}, null)
                })
            })
        };
        b.prototype.ka = function (a) {
            var b = this, f = this.g("location");
            if (f) return a(f);
            this.a.push(a);
            if (this.b) return !1;
            this.b = !0;
            this.f.get(this.c.geoLocationUrl, function (a) {
                var f = a.country;
                f && b.j("location", f);
                b.a.forEach(function (a) {
                    return a(f)
                });
                b.a = [];
                b.b = !1
            })
        };
        b.prototype.j = function (a,
                                  b) {
            try {
                this.window.localStorage.setItem(a, JSON.stringify(b))
            } catch (f) {
            }
        };
        b.prototype.g = function (a) {
            try {
                return JSON.parse(this.window.localStorage.getItem(a))
            } catch (b) {
                return !1
            }
        };
        b.prototype.l = function (a, b) {
            var f = this, e = "grouping_" + a, d = this.g(e);
            d ? b(d) : this.f.get(this.c.geoGroupingUrl + "regionalbloc/" + a, function (a) {
                var d = [];
                a.countries && (d = a.countries.map(function (a) {
                    return a.code
                }), f.j(e, d));
                return b(d)
            })
        };
        d.i = b
    }, {}], 42: [function (g, d) {
        function b(a, b, f, e) {
            this.F = a;
            this.window = a.window;
            this.A = a.adLocator;
            this.j = a.engagementBeacon;
            this.G = a.geoLocationService;
            this.g = a.config;
            this.a = f;
            this.L = b;
            this.f = e;
            this.s = {};
            this.u = {};
            this.b = null;
            this.o = {}
        }

        b.prototype.B = function (a, b) {
            this.b = a.containerId;
            this.o = a.settings || {};
            this.u = b;
            this.N(a.contents, b);
            if (this.M(a.contents) && (this.a.B(), this.Z(a.contents))) {
                var f = this;
                this.f.get(function (a) {
                    a.ab(f.X.bind(f))
                })
            }
            this.U() && this.O()
        };
        b.prototype.N = function (a, b) {
            for (var f = 0; f < a.length; f++) {
                var e = a[f];
                this.J(a[f], this.K.bind(this, e, b[e.type + "@" + e.revision]))
            }
        };
        b.prototype.K =
            function (a, b, f) {
                f && this.V(a, b)
            };
        b.prototype.J = function (a, b) {
            this.L.mb(a.filters, function (a) {
                return b(a)
            })
        };
        b.prototype.V = function (a, b) {
            this.v(a) ? this.P(b, a) : this.A.B(b, a, this.F)
        };
        b.prototype.O = function () {
            var a = this;
            this.T(function (b) {
                a.j.start(a.b, b);
                a.m()
            })
        };
        b.prototype.m = function () {
            var a = this;
            return this.f.get(function (b) {
                b = b.gb();
                0 === b.length && setTimeout(a.m.bind(a), 1E3);
                for (var f = 0; f < b.length; f++) a.j.ha("#" + b[f], b[f])
            })
        };
        b.prototype.P = function (a, b) {
            var f = this, e = b.settings;
            if (e.dfpMode) this.f.get(function (d) {
                var g =
                    d.Ka().map(function (a) {
                        return "#" + a
                    });
                f.c(a, b, g);
                d.fb(e, function (a) {
                    f.a.wa([a])
                });
                d.bb(f.Y.bind(f, a, b, d))
            }); else {
                var d = this.I(e.selectors || e.selector);
                this.a.wa(d);
                this.c(a, b, d)
            }
        };
        b.prototype.Y = function (a, b, f, e) {
            var d = this;
            f.ub(e);
            f.Ba(b.settings, e, function (f) {
                d.c(a, b, [f]);
                d.a.wa([f])
            })
        };
        b.prototype.I = function (a) {
            return [].concat(a)
        };
        b.prototype.c = function (a, b, f) {
            if (b.settings.useImpressionViewable) this.W(f, b); else for (var e = 0; e < f.length; e++) {
                var d = f[e], g = this.l(b);
                g.settings.selector = d;
                delete g.settings.selectors;
                this.a.da(g, a)
            }
        };
        b.prototype.W = function (a, b) {
            for (var f = 0; f < a.length; f++) this.s[a[f]] = b
        };
        b.prototype.Z = function (a) {
            for (var b = 0; b < a.length; b++) if (a[b].settings.useImpressionViewable) return !0;
            return !1
        };
        b.prototype.X = function (a) {
            var b = this.l(this.s[a]), f = this.u[b.type + "@" + b.revision];
            b.settings.selector = a;
            delete b.settings.selectors;
            this.a.da(b, f)
        };
        b.prototype.l = function (a) {
            return JSON.parse(JSON.stringify(a))
        };
        b.prototype.M = function (a) {
            for (var b = 0; b < a.length; b++) if (this.v(a[b])) return !0;
            return !1
        };
        b.prototype.v =
            function (a) {
                return -1 !== a.type.indexOf("onetag-vet")
            };
        b.prototype.U = function () {
            var a = this.g.featureToggles.engagementBeacon;
            return this.o.disableEngagementTracking || !a ? !1 : !0
        };
        b.prototype.T = function (a) {
            var b = this.window.navigator.cb || this.window.cb;
            "1" === b || "yes" === b ? a(!0) : this.G.Ma(this.g.noTrackingGeoGroup, function (b, c) {
                return b ? a(!0) : a(c)
            })
        };
        d.i = b
    }, {}], 43: [function (g, d) {
        function b(a) {
            this.a = a
        }

        b.prototype.create = function (a, b, f) {
            return new this.a(a, b, f)
        };
        d.i = b
    }, {}], 44: [function (g, d) {
        function b(a, b) {
            this.window =
                a;
            this.a = !1;
            this.b = b
        }

        b.prototype.get = function (a) {
            this.f();
            if (this.c()) a(this.window.$sf.host); else {
                var b = this;
                setTimeout(function () {
                    b.get(a)
                }, 500)
            }
        };
        b.prototype.f = function () {
            if (!this.window.$sf && !this.a) {
                this.a = !0;
                var a = this.window.document.createElement("script");
                a.setAttribute("src", this.b.safeFrameUrls.lib);
                this.window.document.body.appendChild(a)
            }
        };
        b.prototype.c = function () {
            var a = this.window.$sf;
            return a && a.host && a.host.boot ? !0 : !1
        };
        d.i = b
    }, {}], 45: [function (g, d) {
        function b(a) {
            this.window = a
        }

        b.prototype.create =
            function (a) {
                return new this.window.MutationObserver(a)
            };
        d.i = b
    }, {}], 46: [function (g, d) {
        function b(a, b) {
            this.b = a.pbjs;
            this.c = b;
            this.a = null
        }

        b.prototype.fa = function (a) {
            if (this.a = this.c.eb()) return this.b ? this.j(a) : this.a.reload(a)
        };
        b.prototype.j = function (a) {
            var b = this, f = this.g(a), e = {
                adUnitCodes: [a], bidsBackHandler: function () {
                    b.a.Va(a);
                    b.a.reload(a)
                }
            };
            f && (e.adUnits = [f]);
            this.b.requestBids(e)
        };
        b.prototype.f = function (a) {
            for (var b = a.bids, f = 0; f < b.length; f++) "sovrn" === b[f].bidder && (b[f].params.iv = "vet");
            return a
        };
        b.prototype.g = function (a) {
            var b = this.b.adUnits;
            if (!b) return null;
            for (var f = 0; f < b.length; f++) if (b[f].code === a) return this.f(b[f])
        };
        d.i = b
    }, {}], 47: [function (g, d) {
        function b(a, b, f) {
            this.o = a;
            this.g = a.viewableEngagedTime;
            this.s = a.engagementBeacon;
            this.f = a.adLocator;
            this.b = a.adSizeService;
            this.window = a.window;
            this.L = b;
            this.I = a.config.lazyLoadWaitTime || 20;
            this.K = f;
            this.l = {};
            this.a = {};
            this.c = {}
        }

        b.prototype.B = function () {
            this.g.start()
        };
        b.prototype.wa = function (a) {
            for (var b = 0; b < a.length; b++) this.l[a[b]] || (this.l[a[b]] =
                !0)
        };
        b.prototype.da = function (a, b) {
            this.J(a, b);
            this.m(a, b)
        };
        b.prototype.m = function (a, b) {
            var f = {childList: !0, subtree: !0}, e = a.settings.selector, d = this.f.ca(e);
            if (d) {
                if (this.j(a, b, d), !this.a[e]) {
                    var g = this;
                    this.K.create(function (f, m) {
                        f.forEach(function () {
                            g.j(a, b, d);
                            g.a[e] && m.disconnect()
                        })
                    }).observe(d, f)
                }
            } else setTimeout(this.m.bind(this, a, b), 1E3)
        };
        b.prototype.J = function (a, b) {
            var f = a.settings.selector, d = this.f.ca(f);
            d && this.j(a, b, d);
            this.a[f] || this.P(a, b, f)
        };
        b.prototype.P = function (a, b, d) {
            var e = this, g =
                0, n = setInterval(function () {
                var h = e.f.ca(d);
                g++;
                h && (e.j(a, b, h), (e.a[d] || g > e.I) && clearInterval(n))
            }, 1E3)
        };
        b.prototype.j = function (a, b, d) {
            var e = a.settings || {}, g = this.b.sa(d);
            this.O(e, g) ? this.F(a, b, d) : this.A(a, b, d)
        };
        b.prototype.O = function (a, b) {
            return this.a[a.selector] ? !1 : this.b.ma(a, b)
        };
        b.prototype.F = function (a, b, d) {
            var e = a.settings || {};
            this.a[e.selector] = {ja: b, definition: a, element: d};
            this.g.Ta(e, d, this.v.bind(this))
        };
        b.prototype.A = function (a, b, d) {
            var e = (a.settings || {}).selector;
            this.c[e] = this.c[e] ||
                [];
            this.G(e, a) || this.c[e].push({ja: b, definition: a, element: d})
        };
        b.prototype.G = function (a, b) {
            for (var d = this.c[a], e = 0; e < d.length; e++) if (d[e].definition.contentId === b.contentId) return !0;
            return !1
        };
        b.prototype.v = function (a) {
            var b = a.D, d = this.a[b];
            if (!this.l[b]) return delete this.a[b], this.g.Qa(b), !1;
            var d = d.definition.settings, e = this.b.sa(a.element);
            if (!this.b.ma(d, e)) return this.M(a.D, e), !1;
            this.N(b);
            this.g.Pa(a);
            this.fa(b);
            return !0
        };
        b.prototype.M = function (a, b) {
            var d = this.a[a], e = this.c[a];
            if (e) for (var g =
                0; g < e.length; g++) {
                var n = e[g], h = n.definition.settings;
                if (this.b.ma(h, b)) {
                    d.ja = n.ja;
                    d.definition.settings = h;
                    break
                }
            }
        };
        b.prototype.fa = function (a) {
            var b = this.a[a].definition, d = b.contentId;
            b.settings.useNativeReload ? this.L.fa(a.substring(1)) : this.u(this.a[a]);
            this.s.ha(a, d)
        };
        b.prototype.N = function (a) {
            a = this.a[a].element;
            var b = a.getBoundingClientRect(), d = b.width;
            a.style.minHeight = b.height + "px";
            a.style.minWidth = d + "px"
        };
        b.prototype.u = function (a) {
            this.f.B(a.ja, a.definition, this.o)
        };
        d.i = b
    }, {}], 48: [function (g,
                           d) {
        function b(a, b) {
            this.g = a.viewability;
            this.c = a.engagementMonitor;
            this.m = a.adSizeService;
            this.window = a.window;
            this.a = {};
            this.b = null;
            this.f = !1;
            this.o = b || 20
        }

        b.prototype.start = function () {
            var a = this;
            this.f || (this.c.start(), this.b = this.l(), this.u(), this.c.ia("user_active", function () {
                a.b || (a.b = a.l())
            }), this.c.ia("user_inactive", function () {
                a.window.clearInterval(a.b);
                a.b = null
            }), this.f = !0)
        };
        b.prototype.Ta = function (a, b, d) {
            var e = a.selector;
            this.a[e] = {
                Aa: 0, va: 0, wb: a.reloadTime || 20, D: e, element: b, Oa: 0, vb: a.reloadLimit ||
                Infinity, size: {width: a.width, height: a.height}, qb: d
            }
        };
        b.prototype.Qa = function (a) {
            delete this.a[a]
        };
        b.prototype.u = function () {
            this.window.setInterval(this.j.bind(this, this.v), 1E3)
        };
        b.prototype.l = function () {
            return this.window.setInterval(this.j.bind(this, this.A), 1E3)
        };
        b.prototype.j = function (a) {
            for (var b in this.a) this.a.hasOwnProperty(b) && a.call(this, this.a[b])
        };
        b.prototype.v = function (a) {
            a.va++
        };
        b.prototype.A = function (a) {
            var b = this.m.Ga(a);
            this.g.la(b) && a.Aa++;
            this.s(b, a) && this.fa(a)
        };
        b.prototype.fa =
            function (a) {
                a.qb(a) && (a.Oa++, a.Aa = 0, a.va = 0, a.zb = null)
            };
        b.prototype.s = function (a, b) {
            var d = this.g.la(a), e = b.Aa >= b.wb, g = b.va >= this.o, n = b.Oa >= b.vb;
            return d && e && !n && g
        };
        b.prototype.Pa = function (a) {
            for (var b = a.element.childNodes, d = b.length; 0 < d; d--) a.element.removeChild(b[d - 1])
        };
        d.i = b
    }, {}], 49: [function (g, d) {
        function b(a) {
            this.window = a
        }

        b.prototype.hb = function () {
            var a = void 0;
            try {
                a = this.window.top, a.state = "FRIENDLY"
            } catch (b) {
                a = this.window, a.state = "UNFRIENDLY", a.$sf && a.$sf.ext && (a.state = "SAFEFRAME")
            }
            return a
        };
        d.i = b
    }, {}], 50: [function (g, d) {
        function b(d, g, w, k) {
            var x = new v(b.window), r = d.containerId, t = d.settings.isVetLicensing,
                y = d.settings.disengagementThreshold, z = d.settings.minimumAdLoadtime, l = x.hb();
            if (a(l, r)) return !1;
            l.__onetag.containerIds[r] = !0;
            var G = new F, H = new m, J = new I, x = new K(l), C = new p(l), r = new q(l, C), A = new n(l, k),
                A = new h(l, A, k), M = new L(l), O = new N(l, f(t)), y = new P(l, y), S = new Q(R);
            k = {
                config: k,
                window: l,
                adLocator: M,
                httpClient: G,
                viewability: O,
                engagementMonitor: y,
                adRenderingService: A,
                adSizeService: H,
                postbidFactory: S,
                bidderParamsParser: J,
                adServerHandlerProvider: C
            };
            k.geoLocationService = new T(k);
            k.engagementBeacon = new U(k, t);
            k.viewableEngagedTime = new V(k, z);
            t = new W(k);
            w = new X(k, w);
            var z = new Y(k, r, x), D = new e(k, w, z, t), E = !1;
            if (c(l.document)) return D.B(d, g), !0;
            l.document.addEventListener("readystatechange", function () {
                !E && c(l.document) && (D.B(d, g), E = !0)
            });
            return !0
        }

        function a(a, b) {
            a.__onetag || (a.__onetag = {});
            a.__onetag.containerIds = a.__onetag.containerIds || {};
            return a.__onetag.containerIds[b] ? !0 : !1
        }

        function c(a) {
            a = a.readyState;
            return "interactive" === a || "complete" === a
        }

        function f(a) {
            var b = .5;
            a && (b = 1);
            return b
        }

        var e = g(42), v = g(49), n = g(44), h = g(32), m = g(36), p = g(33), q = g(46), Y = g(47), W = g(40),
            K = g(45), U = g(7), L = g(5), F = g(25), P = g(17), N = g(30), X = g(22), T = g(41), R = g(28), Q = g(43),
            V = g(48), I = g(37);
        b.window = window;
        d.i = b
    }, {
        17: 17,
        22: 22,
        25: 25,
        28: 28,
        30: 30,
        32: 32,
        33: 33,
        36: 36,
        37: 37,
        40: 40,
        41: 41,
        42: 42,
        43: 43,
        44: 44,
        45: 45,
        46: 46,
        47: 47,
        48: 48,
        49: 49,
        5: 5,
        7: 7
    }], 51: [function (g) {
        var d = {"onetag-vet-postbid-content@*": g(4), "onetag-sticky-overlay@*": g(2)},
            b = {"onetag-screensize-filter@*": g(1)};
        g(50)({
            containerId: "e8cd462b-be23-43e8-92fa-a27608a36b64", contents: [{
                name: "vet ws",
                containerId: "e8cd462b-be23-43e8-92fa-a27608a36b64",
                contentId: "7fdba57e-2c86-4f98-9075-95444175e979",
                type: "onetag-vet-postbid-content",
                revision: "*",
                repo: "@onscroll",
                settings: {
                    integrationType: "vet-reload",
                    demandType: "other",
                    headerBiddingType: "postbid",
                    sizes: ["300x250"],
                    passbackHtml: '<img src="http://via.placeholder.com/300x250">',
                    bidders: {appnexus: [{label: "asdasd", placementId: "123123"}]},
                    selectors: ["#onscroll-mpu-atf"],
                    reloadTime: "20",
                    customDeviceTypes: [{name: "Phone", min: "1", max: "768"}, {
                        name: "Tablet",
                        min: "769",
                        max: "992"
                    }, {name: "Desktop", min: "993", max: "9999"}]
                },
                filters: [],
                enabled: !0
            }, {
                name: "so",
                containerId: "e8cd462b-be23-43e8-92fa-a27608a36b64",
                contentId: "54dfcb1d-f6b4-44c1-9874-4d6d01034d9a",
                type: "onetag-sticky-overlay",
                revision: "*",
                repo: "@onscroll",
                settings: {
                    integrationType: "sticky-overlay",
                    demandType: "other",
                    sizes: ["728x90"],
                    passbackHtml: '<img src="http://via.placeholder.com/720x90">',
                    bidders: {
                        appnexus: [{
                            label: "asdasd",
                            placementId: "asd"
                        }]
                    },
                    overlayMode: "header",
                    closeButtonEnabled: !0,
                    closeButtonDelay: 1,
                    zIndex: 99999,
                    margin: "55",
                    vetReload: !0,
                    reloadTime: "20",
                    customDeviceTypes: [{name: "Phone", min: "1", max: "768"}, {
                        name: "Tablet",
                        min: "769",
                        max: "992"
                    }, {name: "Desktop", min: "993", max: "9999"}],
                    headerMode: !0
                },
                filters: [{
                    type: "onetag-screensize-filter",
                    repo: "@onscroll",
                    revision: "*",
                    settings: {min: "1", max: "768", rule: "EXCLUDE"}
                }],
                enabled: !0
            }], settings: {revShareAdjustments: {appnexus: 1}}
        }, d, b, {
            prebidUrl: "https://ap.lijit.com/www/headerauction/prebid.min.js",
            adRenderUrl: "//ap.lijit.com/www/delivery/fpi.js?z=",
            cookieEndpoint: "https://ap.lijit.com/readerinfo?loc=",
            beaconEndpoint: "https://onetag-metrics-collector.onscroll.com/metrics",
            dfpGatewayUrl: "https://dfp-gateway.us.onscroll.com/1",
            featureToggles: {engagementBeacon: !0},
            safeFrameUrls: {
                html: "//get.s-onetag.com/safeframe-urls/safe-frame-internal.html",
                lib: "//get.s-onetag.com/safeframe-urls/safe-frame.js"
            },
            safeFrameTarget: "#sf_pos_rel_el_",
            geoLocationUrl: "//onetag-geo.onscroll.com/",
            geoGroupingUrl: "//onetag-geo-grouping-api.onscroll.com/",
            noTrackingGeoGroup: "EU",
            cmpUrl: "//sovrn.mgr.consensu.org"
        })
    }, {1: 1, 2: 2, 4: 4, 50: 50}]
}, {}, [51]);
/*
date-of-deployment: UTC2018-05-29T15:57:17Z
contents:
onetag-vet-postbid-content: 2.3.180220140201
onetag-sticky-overlay: 3.4.180412120439
filters:
onetag-screensize-filter: 1.0.180129120119
*/
var u = "undefined" != typeof window && window === this ? this : "undefined" != typeof global ? global : this;

function B(g, d) {
    function b() {
    }

    b.prototype = d.prototype;
    g.prototype = new b;
    g.prototype.constructor = g;
    for (var a in d) if (u.Object.defineProperties) {
        var c = u.Object.getOwnPropertyDescriptor(d, a);
        void 0 !== c && u.Object.defineProperty(g, a, c)
    } else g[a] = d[a]
}

(function () {
    function g(d, b, a) {
        function c(e, n) {
            if (!b[e]) {
                if (!d[e]) {
                    var h = "function" == typeof require && require;
                    if (!n && h) return h(e, !0);
                    if (f) return f(e, !0);
                    h = Error("Cannot find module '" + e + "'");
                    throw h.code = "MODULE_NOT_FOUND", h;
                }
                h = b[e] = {i: {}};
                d[e][0].call(h.i, function (a) {
                    return c(d[e][1][a] || a)
                }, h, h.i, g, d, b, a)
            }
            return b[e].i
        }

        for (var f = "function" == typeof require && require, e = 0; e < a.length; e++) c(a[e]);
        return c
    }

    return g
})()({
    1: [function (g, d) {
        function b(a, c) {
            this.b = a;
            this.a = c
        }

        b.prototype.lb = function (a) {
            var c =
                this.c(), f = this.a.min;
            a(c <= this.a.max && c >= f)
        };
        b.prototype.c = function () {
            return this.b.window.innerWidth
        };
        d.i = b
    }, {}], 2: [function (g, d) {
        d.i = function (b, a, c) {
            (new (g(3))(b, a, c)).B()
        }
    }, {3: 3}], 3: [function (g, d) {
        function b(a, c, f) {
            this.X = a;
            this.G = c;
            this.window = c.window;
            this.I = c.viewability;
            this.j = c.viewableEngagedTime;
            this.F = c.adRenderingService;
            this.m = c.engagementBeacon;
            this.na = c.postbidFactory;
            this.C = a.contentId;
            this.a = a.settings;
            this.a.iv = "sf";
            this.l = this.a.headerMode || !1;
            this.margin = this.a.margin || 0;
            this.A =
                this.a.vetReload || !1;
            this.W = this.a.closeButtonEnabled || !1;
            this.V = this.a.closeButtonDelay || 1;
            this.backgroundColor = this.a.backgroundColor || "rgba(0,0,0,0)";
            this.v = this.a.scrollDelay || 0;
            this.zIndex = this.a.zIndex || 999999;
            this.placeholder = f;
            this.g = this.Z();
            this.o = !1
        }

        b.prototype.B = function () {
            this.K() ? this.u() : (this.placeholder.setAttribute("id", this.g), this.O(), this.c(), this.window.addEventListener("DOMContentLoaded", this.c.bind(this), !1), this.window.addEventListener("load", this.c.bind(this), !1), this.window.addEventListener("resize",
                this.c.bind(this), !1), this.v && this.window.addEventListener("scroll", this.c.bind(this), !1), this.m.ha("#" + this.g, this.C))
        };
        b.prototype.Z = function () {
            return this.l ? "onetag-sticky-header" : "onetag-sticky-footer"
        };
        b.prototype.K = function () {
            return this.window.document.getElementById(this.g) ? !0 : !1
        };
        b.prototype.c = function () {
            this.pa() && (this.s(), this.window.removeEventListener("scroll", this.c.bind(this)))
        };
        b.prototype.pa = function () {
            var a = this.window.pageYOffset;
            return !this.o && a >= this.v && this.I.la(this.placeholder)
        };
        b.prototype.s = function () {
            this.o = !0;
            "other" === this.a.demandType ? this.na.create(this.X, this.G, this.placeholder).B(this.f.bind(this)) : this.F.ua(this.a, this.placeholder, this.f.bind(this))
        };
        b.prototype.f = function (a, c) {
            this.b = a;
            c && this.ra(c);
            this.N();
            this.W && this.oa();
            this.A && (this.A = !1, this.qa())
        };
        b.prototype.ra = function (a) {
            this.a.width = a.width;
            this.a.height = a.height;
            this.placeholder.style.height = a.height + "px";
            this.b.style.width = a.width + "px";
            this.b.style.height = a.height + "px"
        };
        b.prototype.O = function () {
            this.placeholder.style.backgroundColor =
                this.backgroundColor;
            this.placeholder.style.width = "100%";
            this.placeholder.style.position = "fixed";
            this.placeholder.style.zIndex = this.zIndex;
            this.placeholder.style.bottom = "0px"
        };
        b.prototype.N = function () {
            this.a.isSafeFrame && this.Y();
            this.b.style.margin = "0 auto";
            this.b.style.position = "relative";
            this.b.style.display = "block";
            this.b.style.height = this.a.height + "px";
            this.b.style.width = this.a.width + "px";
            this.M()
        };
        b.prototype.Y = function () {
            var a = this.b.parentNode;
            a.parentNode === this.placeholder && (a.style.width =
                "100%")
        };
        b.prototype.M = function () {
            this.l ? (this.placeholder.style.marginTop = this.margin + "px", this.placeholder.style.top = "0px") : (this.placeholder.style.marginBottom = this.margin + "px", this.placeholder.style.bottom = "0px")
        };
        b.prototype.qa = function () {
            this.j.start();
            this.a.selector = "#" + this.g;
            this.j.Ta(this.a, this.placeholder, this.J.bind(this))
        };
        b.prototype.J = function (a) {
            this.j.Pa(a);
            this.s();
            this.m.ha(this.a.selector, this.C);
            this.a.iv = "vet";
            return !0
        };
        b.prototype.u = function () {
            this.placeholder.parentNode.removeChild(this.placeholder);
            this.j.Qa("#" + this.g)
        };
        b.prototype.U = function () {
            this.u()
        };
        b.prototype.oa = function () {
            var a = this;
            setTimeout(function () {
                var c = a.T();
                a.L(c);
                a.P(c);
                c.addEventListener("click", a.U.bind(a), !1)
            }, 1E3 * this.V)
        };
        b.prototype.T = function () {
            var a = this.window.document.createElement("div");
            a.setAttribute("class", "closeButton");
            a.innerHTML = "&times";
            return a
        };
        b.prototype.L = function (a) {
            this.placeholder.insertBefore(a, this.placeholder.firstChild)
        };
        b.prototype.P = function (a) {
            a = a.style;
            a.position = "absolute";
            a.cursor = "pointer";
            a.background = "#a9a9a9";
            a.textAlign = "center";
            a.width = "20px";
            a.height = "20px";
            a.lineHeight = "20px";
            a.left = this.a.width / 2 - 20 + "px";
            a.marginLeft = "50%";
            a.fontSize = "20px";
            a.fontFamily = "sans-serif";
            this.l ? a.bottom = "-20px" : a.top = "-20px"
        };
        d.i = b
    }, {}], 4: [function (g, d) {
        d.i = function (b, a, c) {
            b.settings.iv = "vet";
            a.postbidFactory.create(b, a, c).B()
        }
    }, {}], 5: [function (g, d) {
        var b = g(6);
        d.i = b
    }, {6: 6}], 6: [function (g, d) {
        function b(a) {
            this.window = a;
            this.document = this.window.document;
            this.o = 0;
            this.a = {
                before: this.j.bind(this), after: this.f.bind(this),
                append: this.b.bind(this), prepend: this.s.bind(this)
            }
        }

        b.prototype.B = function (a, c, f) {
            var b = c.settings || {}, d = b.customCSS || {}, g = b.method || "append",
                h = this.ca(b.selector || "body");
            if (h) {
                var m = f.adSizeService.Ia(b);
                b.width = m.width;
                b.height = m.height;
                d = this.l(b.width, b.height, d);
                this.m(h, d, g);
                "onetag-vet-content" === c.type && this.g(b.height, h);
                a(c, f, d)
            }
        };
        b.prototype.g = function (a, c) {
            var b = c.getBoundingClientRect().height;
            c.style.paddingTop = (b - a) / 2 + "px"
        };
        b.prototype.ca = function (a) {
            var c = void 0;
            try {
                c = this.document.querySelector(a)
            } catch (b) {
                this.window.console.log("Sovrn OneTag Error:",
                    b.message)
            }
            return c
        };
        b.prototype.l = function (a, c, b) {
            var e = this.document.createElement("div");
            e.setAttribute("class", "sovrn-onetag-ad");
            e.setAttribute("id", "onetag-wrapper-" + this.o++);
            e.style.width = a + "px";
            e.style.height = c + "px";
            e.style.margin = "0 auto";
            this.c(b, e);
            return e
        };
        b.prototype.c = function (a, c) {
            Object.keys(a).forEach(function (b) {
                c.style[b] = a[b]
            })
        };
        b.prototype.m = function (a, c, b) {
            this.a[b](a, c)
        };
        b.prototype.s = function (a, c) {
            a.insertBefore(c, a.firstChild)
        };
        b.prototype.b = function (a, c) {
            a.appendChild(c)
        };
        b.prototype.j = function (a, c) {
            a.parentNode.insertBefore(c, a)
        };
        b.prototype.f = function (a, c) {
            a.parentNode.insertBefore(c, a.nextSibling)
        };
        d.i = b
    }, {}], 7: [function (g, d) {
        var b = g(9), a = g(13), c = g(16), f = g(8), e = g(14), v = g(15);
        d.i = function (d, g) {
            var m = d.window, p = new f(m, d.httpClient, d.config), q = new a(m), m = new c(m, p, d), p = void 0;
            if (g) return p = new v(d, m, q), new b(d, p);
            p = new e(d, m, q);
            return new b(d, p)
        }
    }, {13: 13, 14: 14, 15: 15, 16: 16, 8: 8, 9: 9}], 8: [function (g, d) {
        function b(a, c, b) {
            this.window = a;
            this.c = c;
            this.b = b;
            this.a = null
        }

        b.prototype.get =
            function (a) {
                var c = this;
                this.a ? a(this.a) : this.c.get(this.b.cookieEndpoint + this.window.location.origin, function (b) {
                    c.a = b.ljt_reader;
                    a(c.a)
                }, !0)
            };
        d.i = b
    }, {}], 9: [function (g, d) {
        function b(a, c) {
            this.b = a.engagementMonitor;
            this.l = a.httpClient;
            this.j = a.config;
            this.window = a.window;
            this.c = this.g = !0;
            this.a = c
        }

        b.prototype.start = function (a, c) {
            this.a.start(a, c);
            this.b.start();
            this.b.ia("user_active", this.u.bind(this));
            this.b.ia("user_inactive", this.v.bind(this));
            this.window.addEventListener("unload", this.f.bind(this,
                !0));
            this.a.Na(this.f.bind(this, !1));
            this.A()
        };
        b.prototype.A = function () {
            this.window.setInterval(this.s.bind(this), 1E3)
        };
        b.prototype.s = function () {
            this.a.Ua(this.g)
        };
        b.prototype.ha = function (a, c) {
            var b = this.m(this.window.document.querySelector(a));
            this.o(a, c, b) && this.a.da(a, c, b)
        };
        b.prototype.o = function (a, c, b) {
            if (!b) {
                var e = this;
                setTimeout(function () {
                    e.ha(a, c)
                }, 1E3);
                return !1
            }
            return !0
        };
        b.prototype.m = function (a) {
            a = a.getElementsByTagName("iframe");
            for (var c = 0; c < a.length; c++) {
                var b = a[c].getBoundingClientRect();
                if (b.width && b.height) return b
            }
        };
        b.prototype.u = function () {
            this.c = this.g = !0
        };
        b.prototype.v = function () {
            this.g = !1;
            this.c && this.f(!1);
            this.c = !1
        };
        b.prototype.f = function (a) {
            var c = this, b = this.a.Ja();
            this.a.H();
            this.a.getMetadata(function (e) {
                c.l.tb(c.j.beaconEndpoint, {metadata: e, payloads: b}, a)
            })
        };
        d.i = b
    }, {}], 10: [function (g, d) {
        function b(a, c) {
            this.window = a;
            this.C = c.C;
            this.D = c.D;
            this.type = "LIGHT";
            this.b = 0;
            this.a = 1
        }

        b.prototype.ba = function () {
            return {
                type: this.type, selector: this.D, contentId: this.C, refreshes: this.b,
                impressions: this.a
            }
        };
        b.prototype.ya = function () {
            this.b += 1;
            this.a += 1
        };
        b.prototype.H = function () {
            this.a = this.b = 0
        };
        d.i = b
    }, {}], 11: [function (g, d) {
        function b(a) {
            this.window = a;
            this.type = "PAGE";
            this.c = this.b = this.a = 0
        }

        b.prototype.ba = function () {
            return {type: this.type, dwellTime: this.a, engagedDwellTime: this.b, scrollDepth: this.c}
        };
        b.prototype.xa = function () {
            this.b += 1
        };
        b.prototype.za = function () {
            this.a += 1;
            this.c = Math.max(this.c, this.window.pageYOffset)
        };
        b.prototype.H = function () {
            this.b = this.a = 0
        };
        d.i = b
    }, {}], 12: [function (g,
                           d) {
        function b(a, c) {
            this.D = c.D;
            this.C = c.C;
            this.S = c.S;
            this.window = a;
            this.type = "PLACEMENT";
            this.f = this.c = 0;
            this.a = 1;
            this.g = this.b = 0
        }

        b.prototype.ba = function () {
            var a = this.j();
            return {
                type: this.type,
                secondsInView: this.f,
                viewableEngagedTime: this.c,
                dimensions: a,
                aboveTheFold: this.l(a),
                refreshes: this.b,
                impressions: this.a,
                selector: this.D,
                contentId: this.C,
                dwellTime: this.g
            }
        };
        b.prototype.j = function () {
            return {
                top: this.S.top + this.window.scrollY,
                left: this.S.left + this.window.scrollX,
                height: this.S.height,
                width: this.S.width
            }
        };
        b.prototype.xa = function (a) {
            a && (this.c += 1)
        };
        b.prototype.za = function (a) {
            a && (this.f += 1);
            this.g += 1
        };
        b.prototype.H = function () {
            this.b = this.a = this.f = this.c = 0
        };
        b.prototype.ya = function () {
            this.b += 1;
            this.a += 1
        };
        b.prototype.l = function (a) {
            return 0 <= this.window.innerHeight - (a.height / 2 + a.top)
        };
        d.i = b
    }, {}], 13: [function (g, d) {
        function b(b) {
            this.window = b;
            this.a = {Placement: f, Page: c, Light: a}
        }

        var a = g(10), c = g(11), f = g(12);
        b.prototype.create = function (a, c) {
            return new this.a[a](this.window, c)
        };
        d.i = b
    }, {10: 10, 11: 11, 12: 12}], 14: [function (g,
                                                 d) {
        function b(a, c, b) {
            this.window = a.window;
            this.m = a.viewability;
            this.l = a.adSizeService;
            this.a = {};
            this.f = c;
            this.g = b;
            this.c = this.g.create("Page");
            this.b = null;
            this.j = function () {
            }
        }

        b.prototype.start = function (a, c) {
            this.b = a;
            c && this.f.Da()
        };
        b.prototype.da = function (a, c, b) {
            var e = this.a[a];
            e && (e.zb = null);
            this.s(e, c) && this.j();
            if (this.u(e, c)) return e.metrics.ya();
            this.o(a, c, b)
        };
        b.prototype.o = function (a, c, b) {
            var e = this.window.document.querySelector(a);
            b = this.g.create("Placement", {D: a, C: c, S: b});
            this.a[a] = {
                selector: a,
                element: e, contentId: c, metrics: b
            }
        };
        b.prototype.s = function (a, c) {
            return a && a.contentId !== c
        };
        b.prototype.u = function (a, c) {
            return a && a.contentId === c
        };
        b.prototype.Na = function (a) {
            this.j = a
        };
        b.prototype.Ua = function (a) {
            a && this.c.xa();
            this.c.za();
            this.v(a)
        };
        b.prototype.v = function (a) {
            for (var c in this.a) if (this.a.hasOwnProperty(c)) {
                var b = this.a[c], e = b.metrics, b = this.m.la(this.l.Ga(b));
                a && e.xa(b);
                e.za(b)
            }
        };
        b.prototype.H = function () {
            for (var a in this.a) this.a.hasOwnProperty(a) && this.a[a].metrics.H();
            this.c.H()
        };
        b.prototype.Ja = function () {
            var a = [this.c.ba()], c;
            for (c in this.a) this.a.hasOwnProperty(c) && a.push(this.a[c].metrics.ba());
            return a
        };
        b.prototype.getMetadata = function (a) {
            return this.f.get(this.b, function (c) {
                return a(c)
            })
        };
        d.i = b
    }, {}], 15: [function (g, d) {
        function b(a, c, b) {
            this.f = c;
            this.g = b;
            this.a = {};
            this.c = function () {
            }
        }

        b.prototype.start = function (a) {
            this.b = a;
            this.f.Da()
        };
        b.prototype.da = function (a, c) {
            var b = this.a[a];
            if (!b || this.l(b, c)) return this.j(a, c), this.c();
            b.metrics.ya();
            return this.c()
        };
        b.prototype.j =
            function (a, c) {
                var b = this.g.create("Light", {D: a, C: c});
                this.a[a] = {selector: a, contentId: c, metrics: b}
            };
        b.prototype.l = function (a, c) {
            return a && a.contentId !== c
        };
        b.prototype.Na = function (a) {
            this.c = a
        };
        b.prototype.H = function () {
            for (var a in this.a) this.a.hasOwnProperty(a) && this.a[a].metrics.H()
        };
        b.prototype.Ja = function () {
            var a = [], c;
            for (c in this.a) this.a.hasOwnProperty(c) && a.push(this.a[c].metrics.ba());
            return a
        };
        b.prototype.getMetadata = function (a) {
            return this.f.get(this.b, function (c) {
                return a({
                    pageViewSalt: c.pageViewSalt,
                    url: c.url, containerId: c.containerId
                })
            })
        };
        b.prototype.Ua = function () {
            return !1
        };
        d.i = b
    }, {}], 16: [function (g, d) {
        function b(a, c, b) {
            this.window = a;
            this.j = this.f();
            this.c = c;
            this.a = !0;
            this.b = b.geoLocationService
        }

        b.prototype.get = function (a, c) {
            var b = this;
            this.ka(function (e) {
                var d = {
                    pageViewSalt: b.j,
                    screenWidth: b.window.screen.width,
                    screenHeight: b.window.screen.height,
                    documentHeight: b.g(),
                    url: b.window.location.href,
                    containerId: a,
                    ljtReader: "",
                    location: e
                };
                if (!b.a) return c(d);
                b.c.get(function (a) {
                    d.ljtReader = a;
                    return c(d)
                })
            })
        };
        b.prototype.ka = function (a) {
            this.b.ka(function (c) {
                return a(c)
            })
        };
        b.prototype.f = function () {
            return +new Date + Math.floor(1E3 * Math.random())
        };
        b.prototype.g = function () {
            var a = this.window.document.body, c = this.window.document.documentElement;
            return Math.max(a.scrollHeight, a.offsetHeight, c.clientHeight, c.scrollHeight, c.offsetHeight)
        };
        b.prototype.Da = function () {
            this.a = !1
        };
        d.i = b
    }, {}], 17: [function (g, d) {
        var b = g(18), a = g(20), c = g(21);
        d.i = function (f, e) {
            var d = new a(f), g = new c(f, e);
            return new b(d, g, f)
        }
    }, {18: 18, 20: 20, 21: 21}],
    18: [function (g, d) {
        function b(a, c, b) {
            this.b = a;
            this.g = c;
            this.a = {};
            this.f = [];
            this.j = [];
            this.c = [];
            this.window = b;
            this.m = !1
        }

        b.prototype.start = function () {
            this.m || (this.m = !0, this.b.Ra(this.o.bind(this)), this.b.start(), this.g.Ra(this.o.bind(this)), this.g.start(), this.f.push(this.b), this.f.push(this.g), this.j.push(this.b), this.c.push(this.g), this.c.push(this.b))
        };
        b.prototype.ia = function (a, c) {
            "undefined" === typeof this.a[a] && (this.a[a] = []);
            this.a[a].push(c)
        };
        b.prototype.o = function (a, c, b) {
            this.l(a, {name: a});
            c &&
            this.s() ? (a = "user_active", this.l(a, {name: a}), this.v()) : !c && this.u(b.id) && (a = "user_inactive", this.l(a, {name: a}))
        };
        b.prototype.v = function () {
            for (var a = this.f.length; a--;) this.f[a].reset()
        };
        b.prototype.s = function () {
            for (var a = this.j.length; a--;) if (!this.j[a].R) return !1;
            return !0
        };
        b.prototype.u = function (a) {
            for (var c = this.c.length; c--;) if (this.c[c].id === a) return !0;
            return !1
        };
        b.prototype.l = function (a, c) {
            if (this.a[a]) for (var b = this.a[a].length; b--;) this.a[a][b](c)
        };
        d.i = b
    }, {}], 19: [function (g, d) {
        function b(a) {
            this.id =
                a;
            this.R = !0;
            this.a = null
        }

        b.prototype.Ra = function (a) {
            this.a = a
        };
        b.prototype.ea = function (a, c) {
            this.a(this.id + "_" + a, c, this)
        };
        b.prototype.$ = function (a, c, b) {
            function e(a) {
                b(a)
            }

            a.addEventListener ? a.addEventListener(c, e.bind(this), !1) : a.attachEvent("on" + c, e.bind(this))
        };
        b.prototype.reset = function () {
            this.R = !0
        };
        d.i = b
    }, {}], 20: [function (g, d) {
        function b(c) {
            a.call(this, "focus");
            this.window = c
        }

        var a = g(19);
        B(b, a);
        b.prototype.start = function () {
            this.$(this.window, "focus", this.Fa.bind(this));
            this.$(this.window, "focusin",
                this.Fa.bind(this));
            this.$(this.window, "blur", this.Ea.bind(this));
            this.$(this.window, "focusout", this.Ea.bind(this))
        };
        b.prototype.Fa = function () {
            this.R = !0;
            this.ea("active", !0)
        };
        b.prototype.Ea = function () {
            if (this.window.document.hasFocus()) return this.ea("active", !0);
            this.ea("inactive", !1)
        };
        d.i = b
    }, {19: 19}], 21: [function (g, d) {
        function b(c, b) {
            a.call(this, "input");
            this.La = !1;
            this.xb = b || 10;
            this.Sa = "mousemove mousedown scroll keyup keypress keydown touchstart touchmove touchend".split(" ");
            this.window = c
        }

        var a =
            g(19);
        B(b, a);
        b.prototype.start = function () {
            for (var a = 0; a < this.Sa.length; a++) this.$(this.window, this.Sa[a], this.ta.bind(this));
            this.La || (this.La = !0, this.ta())
        };
        b.prototype.ta = function () {
            this.R || this.ea("active", !0);
            clearTimeout(this.yb);
            this.yb = setTimeout(this.kb.bind(this), 1E3 * this.xb);
            this.R = !0
        };
        b.prototype.kb = function () {
            this.R && this.ea("inactive", !1);
            this.R = !1
        };
        b.prototype.reset = function () {
            a.prototype.reset.call(this);
            this.ta()
        };
        d.i = b
    }, {19: 19}], 22: [function (g, d) {
        var b = g(23), a = g(24);
        d.i = function (c,
                        f) {
            var e = new a(c, f);
            return new b(e)
        }
    }, {23: 23, 24: 24}], 23: [function (g, d) {
        function b(a) {
            this.f = a
        }

        b.prototype.mb = function (a, c) {
            if (this.a(a)) c(!0); else {
                var b = this.l(a), e = this.j(b), e = this.o.bind(this, e, c), d;
                for (d in b) b.hasOwnProperty(d) && this.b(b[d], e)
            }
        };
        b.prototype.b = function (a, c) {
            var b = this, e = {ga: [], aa: 0};
            a.forEach(function (d, g) {
                var h = b.m.bind(b, g, a, e, c);
                b.f.create(d).lb(h)
            })
        };
        b.prototype.m = function (a, c, b, e, d) {
            var g = this;
            b.ga[a] = d;
            b.aa++;
            if (b.aa === c.length) {
                var h = this.g(c);
                b.ga.forEach(function (a, b) {
                    h =
                        g.c(h, a, c[b].settings.rule)
                });
                return e(h)
            }
        };
        b.prototype.o = function (a, c, b) {
            a.ga.push(b);
            a.aa++;
            if (a.aa === a.pb) return a = a.ga.every(function (a) {
                return a
            }), c(a)
        };
        b.prototype.a = function (a) {
            return !a || 0 === a.length
        };
        b.prototype.g = function (a) {
            return "EXCLUDE" === a[0].settings.rule
        };
        b.prototype.c = function (a, c, b) {
            return "EXCLUDE" === b ? a && !c : a || c
        };
        b.prototype.l = function (a) {
            var c = {};
            a.forEach(function (a) {
                c[a.type] || (c[a.type] = []);
                c[a.type].push(a)
            });
            return c
        };
        b.prototype.j = function (a) {
            return {
                ga: [], pb: Object.keys(a).length,
                aa: 0
            }
        };
        d.i = b
    }, {}], 24: [function (g, d) {
        function b(a, c) {
            this.a = a;
            this.b = c
        }

        b.prototype.create = function (a) {
            return new this.b[a.type + "@" + a.revision](this.a, a.settings)
        };
        d.i = b
    }, {}], 25: [function (g, d) {
        var b = g(26);
        d.i = b
    }, {26: 26}], 26: [function (g, d) {
        function b() {
            this.a = new a
        }

        var a = g(27);
        b.prototype.tb = function (a, b, e) {
            var d = this.a.create();
            d.open("POST", a, e ? !1 : !0);
            d.setRequestHeader("Content-Type", "application/json");
            d.send(JSON.stringify(b))
        };
        b.prototype.get = function (a, b, e) {
            var d = this.a.create();
            d.onreadystatechange =
                function () {
                    if (4 === d.readyState) {
                        var a = void 0;
                        try {
                            a = JSON.parse(d.responseText)
                        } catch (c) {
                            a = {}
                        }
                        b(a)
                    }
                };
            d.open("GET", a, !0);
            d.withCredentials = !!e;
            d.send()
        };
        d.i = b
    }, {27: 27}], 27: [function (g, d) {
        function b() {
        }

        b.prototype.create = function () {
            return new XMLHttpRequest
        };
        d.i = b
    }, {}], 28: [function (g, d) {
        var b = g(29);
        d.i = b
    }, {29: 29}], 29: [function (g, d) {
        function b(a, c, b) {
            this.g = c.adRenderingService;
            this.A = c.adSizeService;
            this.window = c.window;
            this.o = c.bidderParamsParser;
            this.oa = c.config.prebidUrl;
            this.F = c.geoLocationService;
            this.a = a.settings;
            this.c = this.A.Ia(this.a);
            this.b = this.g.Ca(this.c.width, this.c.height);
            this.I = this.V();
            this.j = "sovrn-postbid" + this.c.width + "x" + this.c.height;
            this.ra = this.O();
            this.m = this.N();
            this.Z = this.o.sb(this.a.bidders, this.a.iv);
            this.Ab = this.a.revShareAdjustments;
            this.placeholder = b;
            this.M = this.a.cmpTimeout || 1E4;
            this.K = this.a.allowAuctionWithoutConsent || !0;
            this.P = this.a.gdprMode || !1
        }

        b.prototype.B = function (a) {
            this.f = void 0 === a ? function () {
            } : a;
            this.placeholder.appendChild(this.b);
            this.Za();
            this.Wa();
            this.Ya()
        };
        b.prototype.Ya = function () {
            var a = this;
            this.na = this.window.setInterval(function () {
                a.Y() && (a.window.clearInterval(a.na), a.Xa(a.b.contentWindow.pbjs))
            }, 1E3)
        };
        b.prototype.Xa = function (a) {
            var c = this;
            this.F.Ma("EU", function (b, e) {
                if (c.P && (e || b)) return a.que.push(function () {
                    a.setConfig({consentManagement: {cmpApi: "iab", timeout: c.M, allowAuctionWithoutConsent: c.K}});
                    c.v(a)
                });
                c.v(a)
            })
        };
        b.prototype.v = function (a) {
            var c = this;
            a.que.push(function () {
                c.a.revShareAdjustments && c.o.$a(a, c.a.revShareAdjustments);
                c.J(a);
                c.X(a)
            })
        };
        b.prototype.J = function (a) {
            a.addAdUnits([{code: this.j, sizes: this.I, bids: this.Z}])
        };
        b.prototype.X = function (a) {
            a.requestBids({timeout: 1E3, bidsBackHandler: this.L.bind(this, a)})
        };
        b.prototype.L = function (a) {
            this.l = this.a.passbackHtml;
            var c = a.getAdserverTargetingForAdUnitCode(this.j);
            if (c && c.hb_adid) return this.qa(a, c);
            if (this.l) return this.pa();
            this.g.ua(this.a, this.placeholder, this.f);
            return this.s()
        };
        b.prototype.pa = function () {
            var a = this.m, c = a.contentWindow.document;
            if (this.a.isSafeFrame) return this.u(this.l);
            a.width = this.c.width;
            a.height = this.c.height;
            c.write(this.l);
            c.close();
            this.f(this.b, this.c)
        };
        b.prototype.qa = function (a, c) {
            var b = this.m.contentWindow.document;
            if (this.a.isSafeFrame) return this.u(this.W(a, c.hb_adid));
            a.renderAd(b, c.hb_adid);
            return this.f(this.b, this.U(c.hb_size))
        };
        b.prototype.U = function (a) {
            a = a.split("x");
            return {width: Number(a[0]), height: Number(a[1])}
        };
        b.prototype.u = function (a) {
            var c = this.G(this.a);
            c.adCode = a;
            this.g.ua(c, this.placeholder, this.f);
            return this.s()
        };
        b.prototype.W = function (a,
                                  c) {
            var b = a.getBidResponses()[this.j].bids.find(function (a) {
                return a.adId === c
            });
            return b.ad ? b.ad : b.adUrl ? this.T(b) : ""
        };
        b.prototype.T = function (a) {
            var c = {
                frameborder: 0,
                scrolling: "no",
                marginheight: 0,
                marginwidth: 0,
                topmargin: 0,
                leftmargin: 0,
                width: 0,
                height: 0,
                allowTransparency: !0
            };
            c.width = a.width;
            c.height = a.height;
            c.src = a.adUrl;
            a = "<iframe";
            for (var b = Object.getOwnPropertyNames(c), e = 0; e < b.length; e++) a += " " + b[e] + '="' + c[b[e]] + '"';
            return a + "></iframe>"
        };
        b.prototype.Y = function () {
            return !!this.b.contentWindow.pbjs
        };
        b.prototype.N = function () {
            for (var a = this.window.document.createElement("iframe"), c = {
                frameborder: 0,
                scrolling: "no",
                marginheight: 0,
                marginwidth: 0,
                topmargin: 0,
                leftmargin: 0,
                width: 0,
                height: 0,
                allowTransparency: !0,
                id: "postbid_if"
            }, b = Object.getOwnPropertyNames(c), e = 0; e < b.length; e++) a.setAttribute(b[e], c[b[e]]);
            return a
        };
        b.prototype.s = function () {
            this.b.parentNode.removeChild(this.b)
        };
        b.prototype.Wa = function () {
            this.b.contentDocument.body.appendChild(this.m)
        };
        b.prototype.O = function () {
            var a = this.window.document.createElement("script");
            a.setAttribute("src", this.oa);
            a.setAttribute("async", "");
            a.setAttribute("type", "text/javascript");
            return a
        };
        b.prototype.Za = function () {
            var a = this.g.Ha(this.b);
            a.open();
            a.close();
            a.body.appendChild(this.ra)
        };
        b.prototype.V = function () {
            var a = this.a.sizes;
            return a ? a.map(function (a) {
                a = a.split("x");
                return [Number(a[0]), Number(a[1])]
            }) : [[this.a.width, this.a.height]]
        };
        b.prototype.G = function (a) {
            return JSON.parse(JSON.stringify(a))
        };
        d.i = b
    }, {}], 30: [function (g, d) {
        var b = g(31);
        d.i = b
    }, {31: 31}], 31: [function (g, d) {
        function b(a,
                   c) {
            this.b = c;
            this.window = a
        }

        b.prototype.la = function (a) {
            if ("SAFEFRAME" === this.window.state) return this.window.$sf.ext.inViewPercentage() / 100 >= this.b;
            a = a.getBoundingClientRect();
            return this.f(a, this.window.innerWidth) * this.c(a, this.window.innerHeight) / (a.width * a.height) >= this.b
        };
        b.prototype.f = function (a, c) {
            return this.a(a.right, c) - this.a(a.left, c)
        };
        b.prototype.c = function (a, c) {
            return this.a(a.bottom, c) - this.a(a.top, c)
        };
        b.prototype.a = function (a, c) {
            return Math.max(0, Math.min(a, c))
        };
        d.i = b
    }, {}], 32: [function (g,
                           d) {
        function b(a, c, b) {
            this.window = a;
            this.b = b;
            this.protocol = this.window.location.protocol;
            this.v = c;
            this.a = {};
            this.f = null
        }

        b.prototype.ua = function (a, c, b) {
            b = void 0 === b ? function () {
            } : b;
            if (a.isSafeFrame) this.o(a, c, b); else {
                var e = this.Ca(a.width, a.height);
                c.appendChild(e);
                var d = this.Ha(e);
                d.open();
                d.write(this.c(a));
                setTimeout(function () {
                    d.close();
                    return b(e)
                }, 0)
            }
        };
        b.prototype.Ca = function (a, c) {
            var b = this.window.document.createElement("iframe");
            b.width = a + "px";
            b.height = c + "px";
            b.setAttribute("frameBorder", "0");
            b.setAttribute("scrolling", "no");
            b.setAttribute("marginwidth", "0");
            b.setAttribute("marginheight", "0");
            return b
        };
        b.prototype.o = function (a, c, b) {
            var e = this;
            this.v.get(function (d) {
                e.u(d, {width: a.width, height: a.height, adCode: a.adCode || e.c(a)}, c, b)
            })
        };
        b.prototype.u = function (a, c, b, e) {
            var d = b.id + "-safe-frame", g = this.window.document.createElement("div");
            g.setAttribute("id", d);
            b.appendChild(g);
            this.a[d] = {placeholder: b, rb: e};
            this.f || this.g(a);
            b = new a.PosConfig({id: d, dest: d, w: c.width, h: c.height});
            a.render(new a.Position(d,
                c.adCode, null, b));
            this.l(d)
        };
        b.prototype.g = function (a) {
            this.f = new a.Config({auto: !1, renderFile: this.b.safeFrameUrls.html, onEndPosRender: this.s.bind(this)})
        };
        b.prototype.l = function (a) {
            var c = this;
            setTimeout(function () {
                c.window.document.getElementById(a).dispatchEvent(c.j())
            }, 500)
        };
        b.prototype.j = function () {
            if ("function" === typeof this.window.Event) return new this.window.Event("load");
            var a = this.window.document.createEvent("CustomEvent");
            a.initCustomEvent("load", !1, !1, void 0);
            return a
        };
        b.prototype.c = function (a) {
            return '<script src="' +
                this.m(a) + '">\x3c/script>'
        };
        b.prototype.s = function (a) {
            var c = this.a[a];
            c.rb(c.placeholder.querySelector("#" + a));
            delete this.a[a]
        };
        b.prototype.m = function (a) {
            var c = a.iv;
            a = this.protocol + this.b.adRenderUrl + a.zoneId + "&width=" + a.width + "&height=" + a.height;
            c && (a = a + "&iv=" + c);
            return a
        };
        b.prototype.Ha = function (a) {
            return a.contentDocument || a.contentWindow && a.contentWindow.document || a.document
        };
        d.i = b
    }, {}], 33: [function (g, d) {
        function b(a) {
            this.window = a;
            this.a = null
        }

        var a = g(35), c = g(34);
        b.prototype.eb = function () {
            return this.a ?
                this.a : this.window.googletag ? this.a = new a(this.window.pbjs, this.window.googletag, this.b) : this.window.apntag ? this.a = new c(this.window.pbjs, this.window.apntag, this.b) : null
        };
        b.prototype.b = function (a) {
            return a.replace(/\\\//g, "/").replace(/\\\./g, ".")
        };
        d.i = b
    }, {34: 34, 35: 35}], 34: [function (g, d) {
        function b(a, c, b) {
            this.c = a;
            this.a = c;
            this.b = b
        }

        b.prototype.Va = function (a) {
            a = this.b(a);
            var c = this.f(a);
            this.a.modifyTag(a, {keywords: c});
            this.c.setTargetingForAst()
        };
        b.prototype.f = function (a) {
            var c = {};
            a = this.a.requests.tags[a].keywords;
            for (var b = Object.keys(a), e = 0; e < b.length; e++) "hb_" !== b[e].substring(0, 3).toLowerCase() && (c[b[e]] = a[b[e]]);
            return c
        };
        b.prototype.reload = function (a) {
            this.a.refresh(this.b(a))
        };
        d.i = b
    }, {}], 35: [function (g, d) {
        function b(a, c, b) {
            this.c = a;
            this.b = c;
            this.a = b
        }

        b.prototype.Va = function (a) {
            this.c.setTargetingForGPTAsync([this.a(a)])
        };
        b.prototype.f = function (a) {
            for (var c = this.b.pubads().getSlots(), b = 0; b < c.length; b++) if (a === c[b].getSlotElementId()) return c[b]
        };
        b.prototype.reload = function (a) {
            a = this.f(this.a(a));
            this.b.pubads().refresh([a])
        };
        d.i = b
    }, {}], 36: [function (g, d) {
        function b() {
        }

        b.prototype.sa = function (a) {
            return (a = this.b(a)) ? a.getBoundingClientRect() : {width: 0, height: 0}
        };
        b.prototype.Ga = function (a) {
            a.trackedIframe && this.c(a) || (a.trackedIframe = this.b(a.element));
            return a.trackedIframe ? a.trackedIframe : a.element
        };
        b.prototype.ma = function (a, b) {
            if (a.useNativeReload) return !0;
            var f = a.sizeTolerance || 10;
            return this.a(a).some(function (a) {
                var d = Math.abs(b.height - a.height) < f;
                return Math.abs(b.width - a.width) < f && d
            })
        };
        b.prototype.Ia = function (a) {
            return a.sizes ?
                this.a(a).reduce(function (a, b) {
                    return a.width * a.height < b.width * b.height ? b : a
                }, {width: 0, height: 0}) : {width: a.width, height: a.height}
        };
        b.prototype.a = function (a) {
            var b = a.sizes;
            return b ? b.map(function (a) {
                a = a.split("x");
                return {width: Number(a[0]), height: Number(a[1])}
            }) : [{height: a.height, width: a.width}]
        };
        b.prototype.c = function (a) {
            for (var b = a.trackedIframe; b.parentNode;) if (b = b.parentNode, b === a.element) return !0;
            return !1
        };
        b.prototype.b = function (a) {
            a = a.getElementsByTagName("iframe");
            for (var b = 0; b < a.length; b++) {
                var f =
                    a[b].getBoundingClientRect();
                if (f.width && f.height) return a[b]
            }
        };
        d.i = b
    }, {}], 37: [function (g, d) {
        function b() {
        }

        b.prototype.$a = function (a, b) {
            Object.keys(b).forEach(function (f) {
                a.bidderSettings[f] = {
                    bidCpmAdjustment: function (a) {
                        return a * Number(b[f])
                    }
                }
            })
        };
        b.prototype.sb = function (a, b) {
            var f = this, e = [];
            Object.keys(a).forEach(function (d) {
                e = e.concat(f.a(d, a, b))
            });
            return e
        };
        b.prototype.a = function (a, b, f) {
            var e = this;
            return b[a].map(function (b) {
                return {bidder: a, params: e.b(a, b, f)}
            })
        };
        b.prototype.b = function (a, b, f) {
            f &&
            "sovrn" === a && (b.iv = f);
            return b
        };
        d.i = b
    }, {}], 38: [function (g, d) {
        function b(a) {
            this.window = a.window;
            this.g = a.httpClient;
            this.l = a.config.dfpGatewayUrl;
            this.f = a.adLocator;
            this.a = null
        }

        b.prototype.o = function (a) {
            if (this.a) return this.a;
            a = a.getAdUnitPath().split("/");
            for (var b = 0; b < a.length; b++) {
                var f = Number(a[b]);
                if (f) return this.a = f
            }
            return 0
        };
        b.prototype.u = function (a, b) {
            for (var f = 0; f < a.length; f++) {
                var e = this.f.ca(a[f]);
                if (e && e.id === b || e && e.querySelector("#" + b)) return !0
            }
            return !1
        };
        b.prototype.b = function (a, b,
                                  f) {
            f = void 0 === f ? 0 : f;
            if (25 <= f) b({}); else {
                var e = a.getResponseInformation();
                if (e) b(e); else {
                    var d = this;
                    setTimeout(function () {
                        d.b(a, b, ++f)
                    }, 200)
                }
            }
        };
        b.prototype.G = function (a, b, f) {
            var e = this;
            this.o(a) ? this.b(a, function (a) {
                if (!a.lineItemId || !e.j(b)) return f(!1);
                f(!0)
            }) : f(!1)
        };
        b.prototype.j = function (a) {
            var b = a.lineItemTypes || [], f = a.roadblockingType || !1;
            return (a.ordersToExclude || []).length || b.length || f
        };
        b.prototype.c = function (a, b) {
            var f = this;
            this.g.get(this.l + "/" + this.a + "/" + a.lineItemId, function (e) {
                f.s(e, a,
                    b)
            })
        };
        b.prototype.s = function (a, b, f) {
            if ("PENDING" === a.state) {
                var e = this;
                setTimeout(function () {
                    e.c(b, f)
                }, 2E3)
            }
            "READY" === a.state && f(a)
        };
        b.prototype.ob = function (a, b, f) {
            var e = this, d = a.getSlotElementId();
            this.u(b.selectorsToExclude || [], d) ? f(!0) : this.G(a, b, function (d) {
                if (!d) return f(!1);
                e.b(a, function (a) {
                    e.c(a, function (a) {
                        return f(e.m(a, b))
                    })
                })
            })
        };
        b.prototype.m = function (a, b) {
            return this.A(a, b) || this.v(a, b) || this.F(a, b)
        };
        b.prototype.v = function (a, b) {
            for (var f = b.lineItemTypes || [], e = 0; e < f.length; e++) {
                var d =
                    "all" === f[e].priority, g = a.priority === Number(f[e].priority);
                if (a.lineItemType === f[e].type && (d || g)) return !0
            }
            return !1
        };
        b.prototype.A = function (a, b) {
            return -1 < (b.ordersToExclude || []).indexOf(a.orderId)
        };
        b.prototype.F = function (a, b) {
            return b.roadblockingType ? "CREATIVE_SET" === a.roadblockingType : !1
        };
        d.i = b
    }, {}], 39: [function (g, d) {
        function b(a, b, f) {
            this.window = a;
            this.f = b;
            this.o = f;
            this.b = {};
            this.c = {}
        }

        b.prototype.fb = function (a, b) {
            for (var f = Object.keys(this.b), e = 0; e < f.length; e++) this.Ba(a, this.c[f[e]], b)
        };
        b.prototype.Ba =
            function (a, b, f) {
                var e = this.a(b);
                this.f.ma(a, this.b[e]) && this.o.ob(b, a, this.s.bind(this, e, f))
            };
        b.prototype.s = function (a, b, f) {
            f || b("#" + a)
        };
        b.prototype.gb = function () {
            for (var a = this.Ka(), b = [], f = 0; f < a.length; f++) {
                var e = a[f], d = this.g(e);
                this.l(d) && b.push(e)
            }
            return b
        };
        b.prototype.jb = function () {
            for (var a = this.j(), b = 0; b < a.length; b++) {
                var f = a[b], e = this.a(f);
                this.m(e);
                this.c[e] = f
            }
        };
        b.prototype.ub = function (a) {
            var b = this.a(a);
            this.m(b);
            this.c[b] = a
        };
        b.prototype.m = function (a) {
            var b = this.g(a);
            this.l(b) && (this.b[a] =
                {width: b.width, height: b.height})
        };
        b.prototype.Ka = function () {
            for (var a = this.j(), b = [], f = 0; f < a.length; f++) b.push(this.a(a[f]));
            return b
        };
        b.prototype.j = function () {
            var a = this.window.googletag.pubads();
            return a.getSlots ? a.getSlots() : this.window.googletag.getSlots()
        };
        b.prototype.g = function (a) {
            return (a = this.window.document.querySelector("#" + a)) ? this.f.sa(a) : {width: 0, height: 0}
        };
        b.prototype.nb = function () {
            var a = this.window.googletag;
            return !!a && a.pubadsReady
        };
        b.prototype.l = function (a) {
            return 50 <= a.width && 50 <=
                a.height
        };
        b.prototype.bb = function (a) {
            var b = this;
            this.window.googletag.cmd.push(function () {
                b.window.googletag.pubads().addEventListener("slotRenderEnded", function (b) {
                    a(b.slot)
                })
            })
        };
        b.prototype.ab = function (a) {
            var b = this;
            this.window.googletag.cmd.push(function () {
                b.window.googletag.pubads().addEventListener("impressionViewable", function (f) {
                    f = b.a(f.slot);
                    a("#" + f)
                })
            })
        };
        b.prototype.ib = function () {
            var a = this.window.googletag;
            a.cmd = a.cmd || []
        };
        b.prototype.a = function (a) {
            return a.getSlotElementId().replace(/\//g,
                "\\/").replace(/\./g, "\\.")
        };
        d.i = b
    }, {}], 40: [function (g, d) {
        function b(a) {
            this.window = a.window;
            this.c = a.adSizeService;
            this.f = a;
            this.a = null
        }

        var a = g(39), c = g(38);
        b.prototype.get = function (b) {
            if (!this.a) {
                var e = new c(this.f);
                this.a = new a(this.window, this.c, e)
            }
            return this.b(b)
        };
        b.prototype.b = function (a) {
            return this.a.nb() ? (this.a.ib(), this.a.jb(), a(this.a)) : setTimeout(this.b.bind(this, a), 1E3)
        };
        d.i = b
    }, {38: 38, 39: 39}], 41: [function (g, d) {
        function b(a) {
            this.c = a.config;
            this.f = a.httpClient;
            this.window = a.window;
            this.b =
                !1;
            this.a = []
        }

        b.prototype.Ma = function (a, b) {
            var f = this;
            this.ka(function (e) {
                f.l(a, function (a) {
                    return e ? 0 === a.length ? b({message: "Grouping not found"}, null) : b(null, -1 < a.indexOf(e)) : b({message: "Location not found"}, null)
                })
            })
        };
        b.prototype.ka = function (a) {
            var b = this, f = this.g("location");
            if (f) return a(f);
            this.a.push(a);
            if (this.b) return !1;
            this.b = !0;
            this.f.get(this.c.geoLocationUrl, function (a) {
                var f = a.country;
                f && b.j("location", f);
                b.a.forEach(function (a) {
                    return a(f)
                });
                b.a = [];
                b.b = !1
            })
        };
        b.prototype.j = function (a,
                                  b) {
            try {
                this.window.localStorage.setItem(a, JSON.stringify(b))
            } catch (f) {
            }
        };
        b.prototype.g = function (a) {
            try {
                return JSON.parse(this.window.localStorage.getItem(a))
            } catch (b) {
                return !1
            }
        };
        b.prototype.l = function (a, b) {
            var f = this, e = "grouping_" + a, d = this.g(e);
            d ? b(d) : this.f.get(this.c.geoGroupingUrl + "regionalbloc/" + a, function (a) {
                var d = [];
                a.countries && (d = a.countries.map(function (a) {
                    return a.code
                }), f.j(e, d));
                return b(d)
            })
        };
        d.i = b
    }, {}], 42: [function (g, d) {
        function b(a, b, f, e) {
            this.F = a;
            this.window = a.window;
            this.A = a.adLocator;
            this.j = a.engagementBeacon;
            this.G = a.geoLocationService;
            this.g = a.config;
            this.a = f;
            this.L = b;
            this.f = e;
            this.s = {};
            this.u = {};
            this.b = null;
            this.o = {}
        }

        b.prototype.B = function (a, b) {
            this.b = a.containerId;
            this.o = a.settings || {};
            this.u = b;
            this.N(a.contents, b);
            if (this.M(a.contents) && (this.a.B(), this.Z(a.contents))) {
                var f = this;
                this.f.get(function (a) {
                    a.ab(f.X.bind(f))
                })
            }
            this.U() && this.O()
        };
        b.prototype.N = function (a, b) {
            for (var f = 0; f < a.length; f++) {
                var e = a[f];
                this.J(a[f], this.K.bind(this, e, b[e.type + "@" + e.revision]))
            }
        };
        b.prototype.K =
            function (a, b, f) {
                f && this.V(a, b)
            };
        b.prototype.J = function (a, b) {
            this.L.mb(a.filters, function (a) {
                return b(a)
            })
        };
        b.prototype.V = function (a, b) {
            this.v(a) ? this.P(b, a) : this.A.B(b, a, this.F)
        };
        b.prototype.O = function () {
            var a = this;
            this.T(function (b) {
                a.j.start(a.b, b);
                a.m()
            })
        };
        b.prototype.m = function () {
            var a = this;
            return this.f.get(function (b) {
                b = b.gb();
                0 === b.length && setTimeout(a.m.bind(a), 1E3);
                for (var f = 0; f < b.length; f++) a.j.ha("#" + b[f], b[f])
            })
        };
        b.prototype.P = function (a, b) {
            var f = this, e = b.settings;
            if (e.dfpMode) this.f.get(function (d) {
                var g =
                    d.Ka().map(function (a) {
                        return "#" + a
                    });
                f.c(a, b, g);
                d.fb(e, function (a) {
                    f.a.wa([a])
                });
                d.bb(f.Y.bind(f, a, b, d))
            }); else {
                var d = this.I(e.selectors || e.selector);
                this.a.wa(d);
                this.c(a, b, d)
            }
        };
        b.prototype.Y = function (a, b, f, e) {
            var d = this;
            f.ub(e);
            f.Ba(b.settings, e, function (f) {
                d.c(a, b, [f]);
                d.a.wa([f])
            })
        };
        b.prototype.I = function (a) {
            return [].concat(a)
        };
        b.prototype.c = function (a, b, f) {
            if (b.settings.useImpressionViewable) this.W(f, b); else for (var e = 0; e < f.length; e++) {
                var d = f[e], g = this.l(b);
                g.settings.selector = d;
                delete g.settings.selectors;
                this.a.da(g, a)
            }
        };
        b.prototype.W = function (a, b) {
            for (var f = 0; f < a.length; f++) this.s[a[f]] = b
        };
        b.prototype.Z = function (a) {
            for (var b = 0; b < a.length; b++) if (a[b].settings.useImpressionViewable) return !0;
            return !1
        };
        b.prototype.X = function (a) {
            var b = this.l(this.s[a]), f = this.u[b.type + "@" + b.revision];
            b.settings.selector = a;
            delete b.settings.selectors;
            this.a.da(b, f)
        };
        b.prototype.l = function (a) {
            return JSON.parse(JSON.stringify(a))
        };
        b.prototype.M = function (a) {
            for (var b = 0; b < a.length; b++) if (this.v(a[b])) return !0;
            return !1
        };
        b.prototype.v =
            function (a) {
                return -1 !== a.type.indexOf("onetag-vet")
            };
        b.prototype.U = function () {
            var a = this.g.featureToggles.engagementBeacon;
            return this.o.disableEngagementTracking || !a ? !1 : !0
        };
        b.prototype.T = function (a) {
            var b = this.window.navigator.cb || this.window.cb;
            "1" === b || "yes" === b ? a(!0) : this.G.Ma(this.g.noTrackingGeoGroup, function (b, c) {
                return b ? a(!0) : a(c)
            })
        };
        d.i = b
    }, {}], 43: [function (g, d) {
        function b(a) {
            this.a = a
        }

        b.prototype.create = function (a, b, f) {
            return new this.a(a, b, f)
        };
        d.i = b
    }, {}], 44: [function (g, d) {
        function b(a, b) {
            this.window =
                a;
            this.a = !1;
            this.b = b
        }

        b.prototype.get = function (a) {
            this.f();
            if (this.c()) a(this.window.$sf.host); else {
                var b = this;
                setTimeout(function () {
                    b.get(a)
                }, 500)
            }
        };
        b.prototype.f = function () {
            if (!this.window.$sf && !this.a) {
                this.a = !0;
                var a = this.window.document.createElement("script");
                a.setAttribute("src", this.b.safeFrameUrls.lib);
                this.window.document.body.appendChild(a)
            }
        };
        b.prototype.c = function () {
            var a = this.window.$sf;
            return a && a.host && a.host.boot ? !0 : !1
        };
        d.i = b
    }, {}], 45: [function (g, d) {
        function b(a) {
            this.window = a
        }

        b.prototype.create =
            function (a) {
                return new this.window.MutationObserver(a)
            };
        d.i = b
    }, {}], 46: [function (g, d) {
        function b(a, b) {
            this.b = a.pbjs;
            this.c = b;
            this.a = null
        }

        b.prototype.fa = function (a) {
            if (this.a = this.c.eb()) return this.b ? this.j(a) : this.a.reload(a)
        };
        b.prototype.j = function (a) {
            var b = this, f = this.g(a), e = {
                adUnitCodes: [a], bidsBackHandler: function () {
                    b.a.Va(a);
                    b.a.reload(a)
                }
            };
            f && (e.adUnits = [f]);
            this.b.requestBids(e)
        };
        b.prototype.f = function (a) {
            for (var b = a.bids, f = 0; f < b.length; f++) "sovrn" === b[f].bidder && (b[f].params.iv = "vet");
            return a
        };
        b.prototype.g = function (a) {
            var b = this.b.adUnits;
            if (!b) return null;
            for (var f = 0; f < b.length; f++) if (b[f].code === a) return this.f(b[f])
        };
        d.i = b
    }, {}], 47: [function (g, d) {
        function b(a, b, f) {
            this.o = a;
            this.g = a.viewableEngagedTime;
            this.s = a.engagementBeacon;
            this.f = a.adLocator;
            this.b = a.adSizeService;
            this.window = a.window;
            this.L = b;
            this.I = a.config.lazyLoadWaitTime || 20;
            this.K = f;
            this.l = {};
            this.a = {};
            this.c = {}
        }

        b.prototype.B = function () {
            this.g.start()
        };
        b.prototype.wa = function (a) {
            for (var b = 0; b < a.length; b++) this.l[a[b]] || (this.l[a[b]] =
                !0)
        };
        b.prototype.da = function (a, b) {
            this.J(a, b);
            this.m(a, b)
        };
        b.prototype.m = function (a, b) {
            var f = {childList: !0, subtree: !0}, e = a.settings.selector, d = this.f.ca(e);
            if (d) {
                if (this.j(a, b, d), !this.a[e]) {
                    var g = this;
                    this.K.create(function (f, m) {
                        f.forEach(function () {
                            g.j(a, b, d);
                            g.a[e] && m.disconnect()
                        })
                    }).observe(d, f)
                }
            } else setTimeout(this.m.bind(this, a, b), 1E3)
        };
        b.prototype.J = function (a, b) {
            var f = a.settings.selector, d = this.f.ca(f);
            d && this.j(a, b, d);
            this.a[f] || this.P(a, b, f)
        };
        b.prototype.P = function (a, b, d) {
            var e = this, g =
                0, n = setInterval(function () {
                var h = e.f.ca(d);
                g++;
                h && (e.j(a, b, h), (e.a[d] || g > e.I) && clearInterval(n))
            }, 1E3)
        };
        b.prototype.j = function (a, b, d) {
            var e = a.settings || {}, g = this.b.sa(d);
            this.O(e, g) ? this.F(a, b, d) : this.A(a, b, d)
        };
        b.prototype.O = function (a, b) {
            return this.a[a.selector] ? !1 : this.b.ma(a, b)
        };
        b.prototype.F = function (a, b, d) {
            var e = a.settings || {};
            this.a[e.selector] = {ja: b, definition: a, element: d};
            this.g.Ta(e, d, this.v.bind(this))
        };
        b.prototype.A = function (a, b, d) {
            var e = (a.settings || {}).selector;
            this.c[e] = this.c[e] ||
                [];
            this.G(e, a) || this.c[e].push({ja: b, definition: a, element: d})
        };
        b.prototype.G = function (a, b) {
            for (var d = this.c[a], e = 0; e < d.length; e++) if (d[e].definition.contentId === b.contentId) return !0;
            return !1
        };
        b.prototype.v = function (a) {
            var b = a.D, d = this.a[b];
            if (!this.l[b]) return delete this.a[b], this.g.Qa(b), !1;
            var d = d.definition.settings, e = this.b.sa(a.element);
            if (!this.b.ma(d, e)) return this.M(a.D, e), !1;
            this.N(b);
            this.g.Pa(a);
            this.fa(b);
            return !0
        };
        b.prototype.M = function (a, b) {
            var d = this.a[a], e = this.c[a];
            if (e) for (var g =
                0; g < e.length; g++) {
                var n = e[g], h = n.definition.settings;
                if (this.b.ma(h, b)) {
                    d.ja = n.ja;
                    d.definition.settings = h;
                    break
                }
            }
        };
        b.prototype.fa = function (a) {
            var b = this.a[a].definition, d = b.contentId;
            b.settings.useNativeReload ? this.L.fa(a.substring(1)) : this.u(this.a[a]);
            this.s.ha(a, d)
        };
        b.prototype.N = function (a) {
            a = this.a[a].element;
            var b = a.getBoundingClientRect(), d = b.width;
            a.style.minHeight = b.height + "px";
            a.style.minWidth = d + "px"
        };
        b.prototype.u = function (a) {
            this.f.B(a.ja, a.definition, this.o)
        };
        d.i = b
    }, {}], 48: [function (g,
                           d) {
        function b(a, b) {
            this.g = a.viewability;
            this.c = a.engagementMonitor;
            this.m = a.adSizeService;
            this.window = a.window;
            this.a = {};
            this.b = null;
            this.f = !1;
            this.o = b || 20
        }

        b.prototype.start = function () {
            var a = this;
            this.f || (this.c.start(), this.b = this.l(), this.u(), this.c.ia("user_active", function () {
                a.b || (a.b = a.l())
            }), this.c.ia("user_inactive", function () {
                a.window.clearInterval(a.b);
                a.b = null
            }), this.f = !0)
        };
        b.prototype.Ta = function (a, b, d) {
            var e = a.selector;
            this.a[e] = {
                Aa: 0, va: 0, wb: a.reloadTime || 20, D: e, element: b, Oa: 0, vb: a.reloadLimit ||
                Infinity, size: {width: a.width, height: a.height}, qb: d
            }
        };
        b.prototype.Qa = function (a) {
            delete this.a[a]
        };
        b.prototype.u = function () {
            this.window.setInterval(this.j.bind(this, this.v), 1E3)
        };
        b.prototype.l = function () {
            return this.window.setInterval(this.j.bind(this, this.A), 1E3)
        };
        b.prototype.j = function (a) {
            for (var b in this.a) this.a.hasOwnProperty(b) && a.call(this, this.a[b])
        };
        b.prototype.v = function (a) {
            a.va++
        };
        b.prototype.A = function (a) {
            var b = this.m.Ga(a);
            this.g.la(b) && a.Aa++;
            this.s(b, a) && this.fa(a)
        };
        b.prototype.fa =
            function (a) {
                a.qb(a) && (a.Oa++, a.Aa = 0, a.va = 0, a.zb = null)
            };
        b.prototype.s = function (a, b) {
            var d = this.g.la(a), e = b.Aa >= b.wb, g = b.va >= this.o, n = b.Oa >= b.vb;
            return d && e && !n && g
        };
        b.prototype.Pa = function (a) {
            for (var b = a.element.childNodes, d = b.length; 0 < d; d--) a.element.removeChild(b[d - 1])
        };
        d.i = b
    }, {}], 49: [function (g, d) {
        function b(a) {
            this.window = a
        }

        b.prototype.hb = function () {
            var a = void 0;
            try {
                a = this.window.top, a.state = "FRIENDLY"
            } catch (b) {
                a = this.window, a.state = "UNFRIENDLY", a.$sf && a.$sf.ext && (a.state = "SAFEFRAME")
            }
            return a
        };
        d.i = b
    }, {}], 50: [function (g, d) {
        function b(d, g, w, k) {
            var x = new v(b.window), r = d.containerId, t = d.settings.isVetLicensing,
                y = d.settings.disengagementThreshold, z = d.settings.minimumAdLoadtime, l = x.hb();
            if (a(l, r)) return !1;
            l.__onetag.containerIds[r] = !0;
            var G = new F, H = new m, J = new I, x = new K(l), C = new p(l), r = new q(l, C), A = new n(l, k),
                A = new h(l, A, k), M = new L(l), O = new N(l, f(t)), y = new P(l, y), S = new Q(R);
            k = {
                config: k,
                window: l,
                adLocator: M,
                httpClient: G,
                viewability: O,
                engagementMonitor: y,
                adRenderingService: A,
                adSizeService: H,
                postbidFactory: S,
                bidderParamsParser: J,
                adServerHandlerProvider: C
            };
            k.geoLocationService = new T(k);
            k.engagementBeacon = new U(k, t);
            k.viewableEngagedTime = new V(k, z);
            t = new W(k);
            w = new X(k, w);
            var z = new Y(k, r, x), D = new e(k, w, z, t), E = !1;
            if (c(l.document)) return D.B(d, g), !0;
            l.document.addEventListener("readystatechange", function () {
                !E && c(l.document) && (D.B(d, g), E = !0)
            });
            return !0
        }

        function a(a, b) {
            a.__onetag || (a.__onetag = {});
            a.__onetag.containerIds = a.__onetag.containerIds || {};
            return a.__onetag.containerIds[b] ? !0 : !1
        }

        function c(a) {
            a = a.readyState;
            return "interactive" === a || "complete" === a
        }

        function f(a) {
            var b = .5;
            a && (b = 1);
            return b
        }

        var e = g(42), v = g(49), n = g(44), h = g(32), m = g(36), p = g(33), q = g(46), Y = g(47), W = g(40),
            K = g(45), U = g(7), L = g(5), F = g(25), P = g(17), N = g(30), X = g(22), T = g(41), R = g(28), Q = g(43),
            V = g(48), I = g(37);
        b.window = window;
        d.i = b
    }, {
        17: 17,
        22: 22,
        25: 25,
        28: 28,
        30: 30,
        32: 32,
        33: 33,
        36: 36,
        37: 37,
        40: 40,
        41: 41,
        42: 42,
        43: 43,
        44: 44,
        45: 45,
        46: 46,
        47: 47,
        48: 48,
        49: 49,
        5: 5,
        7: 7
    }], 51: [function (g) {
        var d = {"onetag-vet-postbid-content@*": g(4), "onetag-sticky-overlay@*": g(2)},
            b = {"onetag-screensize-filter@*": g(1)};
        g(50)({
            containerId: "e8cd462b-be23-43e8-92fa-a27608a36b64", contents: [{
                name: "vet ws",
                containerId: "e8cd462b-be23-43e8-92fa-a27608a36b64",
                contentId: "7fdba57e-2c86-4f98-9075-95444175e979",
                type: "onetag-vet-postbid-content",
                revision: "*",
                repo: "@onscroll",
                settings: {
                    demandType: "other",
                    headerBiddingType: "postbid",
                    sizes: ["300x250"],
                    passbackHtml: '<img src="http://via.placeholder.com/300x250">',
                    bidders: {appnexus: [{label: "asdasd", placementId: "123123"}]},
                    selectors: ["#onscroll-mpu-atf"],
                    ...reloadSettings
                },
                filters: [],
                enabled: !0
            }, {
                name: "so",
                containerId: "e8cd462b-be23-43e8-92fa-a27608a36b64",
                contentId: "54dfcb1d-f6b4-44c1-9874-4d6d01034d9a",
                type: "onetag-sticky-overlay",
                revision: "*",
                repo: "@onscroll",
                settings: {
                    demandType: "other",
                    sizes: ["728x90"],
                    passbackHtml: '<img src="http://via.placeholder.com/720x90">',
                    bidders: {
                        appnexus: [{
                            label: "asdasd",
                            placementId: "asd"
                        }]
                    },
                    overlayMode: "header",
                    zIndex: 99999,
                    margin: "55",
                    headerMode: !0
                },
                filters: [{
                    type: "onetag-screensize-filter",
                    repo: "@onscroll",
                    revision: "*",
                    settings: {rule: "EXCLUDE", ...stickyFilterSettings}}],
                enabled: !0
            }], settings: {revShareAdjustments: {appnexus: 1}}
        }, d, b, {
            prebidUrl: "https://ap.lijit.com/www/headerauction/prebid.min.js",
            adRenderUrl: "//ap.lijit.com/www/delivery/fpi.js?z=",
            cookieEndpoint: "https://ap.lijit.com/readerinfo?loc=",
            beaconEndpoint: "https://onetag-metrics-collector.onscroll.com/metrics",
            dfpGatewayUrl: "https://dfp-gateway.us.onscroll.com/1",
            featureToggles: {engagementBeacon: !0},
            safeFrameUrls: {
                html: "//get.s-onetag.com/safeframe-urls/safe-frame-internal.html",
                lib: "//get.s-onetag.com/safeframe-urls/safe-frame.js"
            },
            safeFrameTarget: "#sf_pos_rel_el_",
            geoLocationUrl: "//onetag-geo.onscroll.com/",
            geoGroupingUrl: "//onetag-geo-grouping-api.onscroll.com/",
            noTrackingGeoGroup: "EU",
            cmpUrl: "//sovrn.mgr.consensu.org"
        })
    }, {1: 1, 2: 2, 4: 4, 50: 50}]
}, {}, [51]);
/*
date-of-deployment: UTC2018-05-29T15:57:17Z
contents:
onetag-vet-postbid-content: 2.3.180220140201
onetag-sticky-overlay: 3.4.180412120439
filters:
onetag-screensize-filter: 1.0.180129120119
*/
