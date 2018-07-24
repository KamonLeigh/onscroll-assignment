var AdOverlay = function () {
    var t = {
        adDetails: {}, getAdDetails: function (e, n) {
            if (!t.adDetails[e + n]) {
                var o = ".onscroll-ads-list ." + e + "." + n;
                t.adDetails[e] = document.querySelector(o)
            }
            return t.adDetails[e]
        }, updateTime: function (e) {
            var n = t.getAdDetails(e, "time"), o = t.getAdDetails(e, "percent").textContent;
            o > 50 && (n.textContent = parseInt(n.textContent) + 1 + "s")
        }, updatePercent: function (e, n) {
            var o = t.getAdDetails(e, "percent");
            o.textContent = (100 * n).toFixed(0)
        }, updateCounter: function (e) {
            var n = t.getAdDetails(e, "counter");
            n.textContent = parseInt(n.textContent) + 1
        }, updateLoaded: function (e, n) {
            var o = t.getAdDetails(e, "loaded");
            o.textContent = n ? "YES" : "NO", n ? (o.style.color = "#21EA21", t.makeColActive(e)) : (o.style.color = "red", t.makeColInactive(e))
        }, makeColInactive: function (t) {
            [].forEach.call(document.querySelectorAll(".onscroll-ads-list ." + t), function (t) {
                t.classList.add("inactive")
            })
        }, makeColActive: function (t) {
            [].forEach.call(document.querySelectorAll(".onscroll-ads-list ." + t), function (t) {
                t.classList.remove("inactive")
            })
        }
    }, e = ["leaderboard", "mpu-atf"];
    return e.forEach(function (e) {
        t.updateLoaded(e, !1), t.updatePercent(e, 0)
    }), t
}(), EngagementOverlay = function () {
    function t(t, e, n) {
        t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)
    }

    var e = {
        lastLabel: "",
        defaultLabel: "<img src='images/arrow.png'/>Scroll down to view our demo<img src='images/arrow.png'/>",
        incTime: function () {
            var t = document.getElementById("total-active-time");
            t.textContent = parseInt(t.textContent) + 1 + "s"
        },
        incEvent: function () {
            var t = document.getElementById("onscroll-total-events");
            t.textContent = parseInt(t.textContent) + 1
        },
        showEvent: function (t) {
            var e = document.getElementById("onscroll-last-event");
            e.textContent = t
        },
        updateStatus: function (t) {
            var e = document.getElementById("onscroll-user-status");
            e.textContent = t ? "YES" : "NO", e.style.color = t ? "#21EA21" : "red"
        },
        addPositionLabel: function (t) {
            e.scrollLabels.push(t)
        },
        showLabel: function (t) {
            e.lastLabel !== t && (document.querySelector(".onscroll-top-banner .section.content").innerHTML = t, e.lastLabel = t)
        },
        init: function () {
            t(document, "scroll", function () {
                window.pageYOffset < 10 && e.showLabel(e.defaultLabel)
            })
        }
    };
    return e.updateStatus(!0), e.showLabel(e.defaultLabel), e.init(), e
}();


