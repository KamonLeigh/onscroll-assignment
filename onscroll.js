function renderAds() {
    onscrollCode(getAdSettings("leaderboard", 728, 90));
    onscrollCode(getAdSettings("mpu-atf", 300, 250));
    // onscrollCode(getAdSettings("skyscraper-top", 160, 600)),
    // onscrollCode(getStickyAdSettings("sticky-skyscraper", 160, 600)),
    // onscrollCode(getAdSettings("skyscraper", 160, 600));

    // var e = getAdSettings("bottom-leader", 728, 90, function () {
    //     EngagementOverlay.showLabel('<div class="half">Top of page banners deliver the lowest viewability and engagement scores</div>')
    // });
    // onscrollCode(e)
}

function getAdSettings(e, t, n, o) {
    var r = '<img src="http://demo.onscroll.com/spectator/images/ads/PINK-' + t + "x" + n + '.png">',
        a = '<img src="http://demo.onscroll.com/spectator/images/ads/ORANGE-' + t + "x" + n + '.png">',
        s = '<img src="http://demo.onscroll.com/spectator/images/ads/BLUE-' + t + "x" + n + '.png">',
        d = '<img src="http://demo.onscroll.com/spectator/images/ads/GREEN-' + t + "x" + n + '.png">',
        i = '<img src="http://demo.onscroll.com/spectator/images/ads/PURPLE-' + t + "x" + n + '.png">';
    return {
        adCodes: [btoa(r), btoa(a), btoa(s), btoa(d), btoa(i)],
        width: t,
        height: n,
        placeholder: "onscroll-" + e,
        callbacks: {
            loaded: function () {
                AdOverlay.updateLoaded(e, !0), AdOverlay.updateCounter(e), o && o()
            }, inView: function (t) {
                AdOverlay.updatePercent(e, t)
            }, refresh: function () {
                AdOverlay.updateCounter(e)
            }
        }
    }
}

function getStickyAdSettings(e, t, n, o) {
    var r = getAdSettings(e, t, n, o);
    return r.sticky = !0, r.footerElement = ".site-footer", r.margin = 80, r.marginTop = 75, r
}

function startEngagementMonitor() {
    UserEngagement.init({time: 5});
    var e = setInterval(incrementTime, 1e3);
    UserEngagement.bindEvent("user_inactive", function () {
        EngagementOverlay.updateStatus(!1), clearInterval(e)
    }), UserEngagement.bindEvent("user_active", function () {
        clearInterval(e), EngagementOverlay.updateStatus(!0), e = setInterval(incrementTime, 1e3)
    }), observeEvents()
}

function incrementTime() {
    EngagementOverlay.incTime();
    AdOverlay.updateTime("leaderboard");
    AdOverlay.updateTime("mpu-atf");
    // AdOverlay.updateTime("skyscraper-top");
    // AdOverlay.updateTime("sticky-skyscraper");
    // AdOverlay.updateTime("skyscraper");
    // AdOverlay.updateTime("bottom-leader");
}

function observeEvents() {
    for (var e = ["mousemove", "mousedown", "scroll", "keyup", "keydown", "touchstart", "touchmove", "touchend", "blur", "focus"], t = !1, n = 0; n < e.length; n++) bindEvent(window, e[n], function (e) {
        e.type != t && EngagementOverlay.incEvent(), t = e.type, EngagementOverlay.showEvent(e.type)
    })
}

function bindEvent(e, t, n) {
    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
}

function startStickyLeader(e) {
    startStickyLeader.scrolled = !1, document.body.style.paddingTop = "250px";
    var t = document.querySelector(".top-banner").style;
    t.position = "fixed", t.top = "30px", t.width = "100%", t.zIndex = 9999, bindEvent(window, "scroll", function () {
        startStickyLeader.scrolled || (startStickyLeader.scrolled = !0, t.borderBottom = "1px solid silver", setTimeout(function () {
            document.body.style.paddingTop = "30px", t.position = "static", t.borderBottom = "0"
        }, e))
    })
}

renderAds(), startEngagementMonitor();
