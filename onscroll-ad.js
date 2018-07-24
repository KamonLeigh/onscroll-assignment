function onscrollCode(t) {
    function e(t) {
        var e = V.createElement("div"), n = e.style;
        return e.id = t, o(n), e
    }

    function n(t, e) {
        var n = E(t), i = V.createElement("div"), r = i.style;
        return o(r), i.id = e, document.body.contains(t) ? ("iframe" === n.nodeName.toLowerCase() ? (n.parentNode.insertBefore(i, n), n.style.display = "none", G = M() ? !1 : G) : n.appendChild(i), i) : (t.appendChild(i), i)
    }

    function o(t) {
        t.clear = "both", t.position = "relative", t.left = 0, t.top = 0, t.margin = "0px auto", t.width = P + "px", t.height = Y + "px"
    }

    function i(t) {
        return document.getElementById(t) || V.getElementById(t)
    }

    function r(t, e, n) {
        t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)
    }

    function c() {
        return setInterval(function () {
            l() && et++, u() && ($.refresh && $.refresh(), b())
        }, 1e3)
    }

    function u() {
        return l() && et % Z == 0 && 0 != et
    }

    function a() {
        ot = !0, s(), G ? (H(), y(X)) : (y(X), p())
    }

    function s() {
        W || d(), z = w(F, V), R = O(V), S = R - W.top - J - f()
    }

    function d() {
        ot && (ot = !1, W = g(ut), N = x(F, V))
    }

    function f() {
        return Q ? (f.footerElement || (f.footerElement = V.querySelector(Q)), f.footerElement ? R - z - f.footerElement.getBoundingClientRect().top : (Q = !1, 0)) : 0
    }

    function l() {
        var t = at.getBoundingClientRect(), e = t.right - t.left, n = t.bottom - t.top, o = e * n, i = h(t, N.width),
            r = v(t, N.height), c = i * r;
        return $.inView && $.inView(c / o), c / o >= U
    }

    function h(t, e) {
        var n = m(t.left, e), o = m(t.right, e);
        return o - n
    }

    function v(t, e) {
        var n = m(t.top, e), o = m(t.bottom, e);
        return o - n
    }

    function m(t, e) {
        return Math.max(0, Math.min(t, e))
    }

    function p() {
        at.style.position = nt.position
    }

    function g(t) {
        var e = 0, n = t.getBoundingClientRect().left;
        if (t.offsetParent) do e += t.offsetTop; while (t = t.offsetParent);
        return {top: e, left: n}
    }

    function E(t) {
        for (var e = window.frameElement, n = window, o = t; e;) {
            o = e;
            try {
                var i = n.parent;
                e = i.frameElement, n = i
            } catch (r) {
                return o
            }
        }
        return o
    }

    function w(t, e) {
        var n = 0;
        return "number" == typeof t.pageYOffset ? n = t.pageYOffset : e.body && (e.body.scrollLeft || e.body.scrollTop) ? n = e.body.scrollTop : e.documentElement && (e.documentElement.scrollLeft || e.documentElement.scrollTop) && (n = e.documentElement.scrollTop), n
    }

    function x(t, e) {
        var n = 0, o = 0;
        return "number" == typeof t.innerWidth ? (n = t.innerWidth, o = t.innerHeight) : e.documentElement && (e.documentElement.clientWidth || e.documentElement.clientHeight) && (n = e.documentElement.clientWidth, o = e.documentElement.clientHeight), {
            width: n,
            height: o
        }
    }

    function y(t) {
        return L() ? void 0 : y.adLoaded ? void l() : void((t || l()) && (y.adLoaded = !0, $.loaded && $.loaded(), b()))
    }

    function b() {
        b.counter = b.counter || 1;
        var t = A(),
            e = "<html><head><style>body{margin:0 0 0 0;padding:0 0 0 0;height:100%;}#counter{z-index:9999;position:absolute;top:3px;right:3px;font-size:20px}</style></head><body>" + t + "</body></html>";
        for (b.counter++; st.hasChildNodes();) st.removeChild(st.lastChild);
        var n = document.createElement("iframe");
        if (n.width = P + "px", n.height = Y + "px", n.frameBorder = "0", n.scrolling = "no", st && st.appendChild(n), window.navigator.userAgent.match(/MSIE\s/)) n.contentWindow.contents = e, n.src = "javascript:window['contents']"; else {
            var o = n.contentDocument || n.contentWindow && n.contentWindow.document || n.document;
            o.open(), o.write(e), setTimeout(function () {
                o.close()
            }, 0)
        }
    }

    function A() {
        return I(D && D.length == j.length ? j[_()] : j[C()])
    }

    function C() {
        return (!C.nextIndex || C.nextIndex >= j.length) && (C.nextIndex = 0), C.nextIndex++, C.nextIndex - 1
    }

    function _() {
        for (var t = Math.random(), e = D[0], n = 0; n < D.length; n++) {
            if (e > t) return n;
            e += D[n + 1]
        }
        return 0
    }

    function I(t) {
        var e, n, o, i, r, c, u, a, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", d = 0,
            f = 0, l = [];
        if (!t) return t;
        t += "";
        do i = s.indexOf(t.charAt(d++)), r = s.indexOf(t.charAt(d++)), c = s.indexOf(t.charAt(d++)), u = s.indexOf(t.charAt(d++)), a = i << 18 | r << 12 | c << 6 | u, e = a >> 16 & 255, n = a >> 8 & 255, o = 255 & a, l[f++] = 64 == c ? String.fromCharCode(e) : 64 == u ? String.fromCharCode(e, n) : String.fromCharCode(e, n, o); while (d < t.length);
        return l.join("")
    }

    function T(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    }

    function O(t) {
        var e = t.body, n = t.documentElement;
        return Math.max(Math.max(e.scrollHeight, n.scrollHeight), Math.max(e.offsetHeight, n.offsetHeight), Math.max(e.clientHeight, n.clientHeight))
    }

    function M() {
        var t = navigator.userAgent;
        return t.indexOf("Safari") >= 0 && t.indexOf("Chrome") < 0
    }

    function H() {
        var t = at.style;
        if (R > z + J) if (z >= W.top - K) {
            var e = K + Y + J + f();
            z >= R - e ? (t.position = nt.position, t.top = S - Y + "px", t.left = null) : (t.position = "fixed", t.top = K + "px", t.left = W.left + "px")
        } else t.position = nt.position, t.top = "0", t.left = null; else p()
    }

    function L() {
        return F.__onscroll && F.__onscroll.block || window.__onscroll && window.__onscroll.block
    }

    function B() {
        return function (t, e) {
            function n() {
                try {
                    var n = t.top;
                    e = n.document, t = n
                } catch (o) {
                    e = document
                }
            }

            function o(e) {
                e = e || {};
                var n = h(c).observe(t), o = v(c, e.time).observe(t);
                m.push(n), m.push(o), E.push(n), w.push(o), w.push(n), setInterval(i, 5e3)
            }

            function i(t) {
                t || (t = e);
                for (var n, o, r = t.getElementsByTagName("iframe"), c = r.length; c--;) {
                    o = r.item(c);
                    try {
                        if (n = o.contentDocument, !g[o] && n) {
                            g[o] = !0;
                            for (var u = m.length; u--;) m[u].observe(o.contentWindow);
                            i(n)
                        }
                    } catch (a) {
                        g[o] = !0
                    }
                }
            }

            function r(t, e) {
                "undefined" == typeof p[t] && (p[t] = []), p[t].push(e)
            }

            function c(t, e, n) {
                return d(t, {name: t}), e && a() ? (t = "user_active", d(t, {name: t}), void u()) : void(!e && s(n.id) && (t = "user_inactive", d(t, {name: t})))
            }

            function u() {
                for (var t = m.length; t--;) m[t].reset()
            }

            function a() {
                for (var t = E.length; t--;) if (!E[t].isActive) return !1;
                return !0
            }

            function s(t) {
                for (var e = w.length; e--;) if (w[e].id === t) return !0;
                return !1
            }

            function d(t, e) {
                if (p[t]) for (var n = p[t].length; n--;) p[t][n](e)
            }

            function f(t, e, n) {
                t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)
            }

            function l(t, e, n, o) {
                this.id = t, this.isActive = !0, this.observe = n, this.processEvent = function (n, o) {
                    e(t + "_" + n, o, this)
                }, this.reset = o || function () {
                    this.isActive = !0
                }
            }

            function h(t) {
                function e(t) {
                    return r ? u : (r = t, c = r.document, "function" == typeof c.hasFocus ? (u.isActive = c.hasFocus(), setInterval(i, 1e3)) : (f(t, "focus", n), f(t, "focusin", n), f(t, "blur", o), f(t, "focusout", o)), u)
                }

                function n() {
                    u.isActive = !0, u.processEvent("active", !0)
                }

                function o() {
                    u.isActive = !1, u.processEvent("inactive", !1)
                }

                function i() {
                    var t = c.hasFocus();
                    t && !u.isActive && (u.isActive = !0, u.processEvent("active", !0)), !t && u.isActive && (u.isActive = !1, u.processEvent("inactive", !1))
                }

                var r, c, u = new l("focus", t, e, !1);
                return u
            }

            function v(t, e) {
                function n(t) {
                    return f(t, "mousemove", r), f(t, "mousedown", r), f(t, "scroll", r), f(t, "keyup", r), f(t, "keypress", r), f(t, "keydown", r), f(t, "touchstart", r), f(t, "touchmove", r), f(t, "touchend", r), a || (a = !0, r()), u
                }

                function o() {
                    u.isActive = !0, r()
                }

                function i() {
                    u.isActive && u.processEvent("inactive", !1), u.isActive = !1
                }

                function r() {
                    u.isActive || u.processEvent("active", !0), clearTimeout(c), c = setTimeout(i, 1e3 * e), u.isActive = !0
                }

                e = e || 10;
                var c, u = new l("input", t, n, o), a = !1;
                return u
            }

            var m = [], p = {}, g = [], E = [], w = [];
            return n(), {init: o, bindEvent: r}
        }(window, document)
    }

    var S, W, k, N, R, z, F, V, j = t.adCodes || [t.adCode], D = t.probabilities || [], P = t.width, Y = t.height,
        q = t.placeholder, G = !!t.sticky, J = t.margin || 0, K = t.marginTop || 0, Q = t.footerElement,
        U = t.percent || .5, X = !!t.outOfView, Z = t.refresh, $ = t.callbacks, tt = t.disengagementThreshold || 5,
        et = 0, nt = {position: "relative"}, ot = !1;
    try {
        F = window.top, V = F.document
    } catch (it) {
        F = window, V = document
    }
    if (!L()) {
        var rt = i(q);
        if (rt) {
            var ct = T(0, 999), ut = n(rt, ct + "_wrapper"), at = e(ct + "_onScrOllRoot"), st = e(ct + "_onScrOllAd");
            if (ut.appendChild(at), at.appendChild(st), r(F, "scroll", a), r(F, "resize", a), r(F, "load", a), setInterval(d, 300), setTimeout(a, 0), Z) {
                k = c();
                var dt = B();
                dt.init({time: tt}), dt.bindEvent("user_active", function () {
                    k || (k = c())
                }), dt.bindEvent("user_inactive", function () {
                    clearInterval(k), k = null
                })
            }
        }
    }
}
