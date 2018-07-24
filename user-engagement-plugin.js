function createUserEngagement() {
    return function (e, t) {
        function n() {
            try {
                var n = e.top;
                t = n.document, e = n
            } catch (i) {
                t = document
            }
        }

        function i(t) {
            t = t || {};
            var n = d(s).observe(e), i = m(s, t.time).observe(e);
            p.push(n), p.push(i), g.push(n), l.push(i), l.push(n), setInterval(c, 5e3)
        }

        function c(e) {
            e || (e = t);
            for (var n, i, o = e.getElementsByTagName("iframe"), s = o.length; s--;) {
                i = o.item(s);
                try {
                    if (n = i.contentDocument, !E[i] && n) {
                        E[i] = !0;
                        for (var r = p.length; r--;) p[r].observe(i.contentWindow);
                        c(n)
                    }
                } catch (u) {
                    E[i] = !0
                }
            }
        }

        function o(e, t) {
            "undefined" == typeof A[e] && (A[e] = []), A[e].push(t)
        }

        function s(e, t, n) {
            return a(e, {name: e}), t && u() ? (e = "user_active", a(e, {name: e}), void r()) : void(!t && v(n.id) && (e = "user_inactive", a(e, {name: e})))
        }

        function r() {
            for (var e = p.length; e--;) p[e].reset()
        }

        function u() {
            for (var e = g.length; e--;) if (!g[e].isActive) return !1;
            return !0
        }

        function v(e) {
            for (var t = l.length; t--;) if (l[t].id === e) return !0;
            return !1
        }

        function a(e, t) {
            if (A[e]) for (var n = A[e].length; n--;) A[e][n](t)
        }

        function f(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
        }

        function h(e, t, n, i) {
            this.id = e, this.isActive = !0, this.observe = n, this.processEvent = function (n, i) {
                t(e + "_" + n, i, this)
            }, this.reset = i || function () {
                this.isActive = !0
            }
        }

        function d(e) {
            function t(e) {
                return o ? r : (o = e, s = o.document, "function" == typeof s.hasFocus ? (r.isActive = s.hasFocus(), setInterval(c, 1e3)) : (f(e, "focus", n), f(e, "focusin", n), f(e, "blur", i), f(e, "focusout", i)), r)
            }

            function n() {
                r.isActive = !0, r.processEvent("active", !0)
            }

            function i() {
                r.isActive = !1, r.processEvent("inactive", !1)
            }

            function c() {
                var e = s.hasFocus();
                e && !r.isActive && (r.isActive = !0, r.processEvent("active", !0)), !e && r.isActive && (r.isActive = !1, r.processEvent("inactive", !1))
            }

            var o, s, r = new h("focus", e, t, !1);
            return r
        }

        function m(e, t) {
            function n(e) {
                return f(e, "mousemove", o), f(e, "mousedown", o), f(e, "scroll", o), f(e, "keyup", o), f(e, "keypress", o), f(e, "keydown", o), f(e, "touchstart", o), f(e, "touchmove", o), f(e, "touchend", o), u || (u = !0, o()), r
            }

            function i() {
                r.isActive = !0, o()
            }

            function c() {
                r.isActive && r.processEvent("inactive", !1), r.isActive = !1
            }

            function o() {
                r.isActive || r.processEvent("active", !0), clearTimeout(s), s = setTimeout(c, 1e3 * t), r.isActive = !0
            }

            t = t || 10;
            var s, r = new h("input", e, n, i), u = !1;
            return r
        }

        var p = [], A = {}, E = [], g = [], l = [];
        return n(), {init: i, bindEvent: o}
    }(window, document)
}

window.UserEngagement = createUserEngagement();
