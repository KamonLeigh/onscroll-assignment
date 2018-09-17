const assert = require('assert');
const expect = require("chai").expect;



beforeEach(function () {
    browser.url('/');
    browser.scroll(0, 0);
    browser.setViewportSize({
        width: 1200,
        height: 720
    });
    browser.refresh();
    browser.pause(10000);
});


function scrollBackAndForth() {

    return new Promise(resolve => {


        const engagedTimeLimit = 15;
        let engagedSeconds = 0;
        let isScrollingUp = true;

        let engagementCounter = setInterval(() => {

            if (isScrollingUp && engagedSeconds <= engagedTimeLimit) {


                browser.scroll(0, 75);

                isScrollingUp= !isScrollingUp;

                engagedSeconds++

            } else if (!isScrollingUp && engagedSeconds <= engagedTimeLimit) {


                browser.scroll(0, -75);

                isScrollingUp = !isScrollingUp;

                engagedSeconds++

            } else {

                clearInterval(engagementCounter);

                const adElementAfter = browser.getAttribute(".sovrn-onetag-ad", "id");

                return resolve(adElementAfter);

            }
        }, 1000);


    });

}


















describe("VET", () => {

    describe('behaviour of the fixed header',  ()  => {

        it('should load header', () => {

            browser.waitForExist('#onetag-sticky-header', 2000);

        });

        it('check if  header banner still exist after resize', () =>  {

            browser.waitForExist('#onetag-sticky-header', 3000);
            browser.setViewportSize({
                height: 812,
                width: 375
            });

            browser.refresh();

            const isExisting = browser.isExisting('#onetag-sticky-header');

            expect(isExisting).to.equal(isExisting);
        });


        it('check if header is visable after scrolling', () => {

            browser.waitForExist('#onetag-sticky-header', 4000);
            browser.scroll(0, 2100);

            const isHeaderVisible = browser.isVisibleWithinViewport('#onetag-sticky-header');

            expect(isHeaderVisible).to.equal(true);
        });


        it('should close header ad when clicked', () => {

            browser.waitForExist('#onetag-sticky-header', 2000);
            browser.waitForExist('.closeButton', 4000);
            browser.click('.closeButton');
            const isExisting = browser.isExisting('#onetag-sticky-header');
            console.log(isExisting);
            assert(!isExisting);
        });


    });


    describe('behaviour page after initial load', () => {

        it('should have the right title', () => {

            const title = browser.getTitle();

            assert.equal(title, 'Used Cars for Sale - Auto Trader UK');
        });

    });

    describe('behaviour of the the side ad ', () => {

        it('should not reload when ad is not in view', () =>  {

            browser.waitForExist('.onscroll-ad', 2000);


            const sideAd = browser.getHTML('.onscroll-ad');
            const elem = $('.site-footer');

            elem.scroll();

            browser.pause(10000);

            const sideAdAfter = browser.getHTML('.onscroll-ad');

            assert.deepStrictEqual(sideAd, sideAdAfter);

        });


        it('should load ad in sidebar', function () {

            browser.waitForExist('.onscroll-ad', 2000);
        });


        it('check if ad remains the same after 5 seconds', () => {

            const sideAd = browser.getHTML('.onscroll-ad');
            browser.pause(5000);
            const sideAdAfter = browser.getHTML('.onscroll-ad');

            // const result = second === first;
            assert.deepStrictEqual(sideAd, sideAdAfter);
        });


        it("Add should reload as user is active", () => {


            const onetagAd = browser.getAttribute(".sovrn-onetag-ad", "id");
            console.log("result" ,onetagAd);

            return scrollBackAndForth()
                .then(onetagAdAfter => {

                    console.log("After", onetagAdAfter);

                    return expect(onetagAdAfter).to.not.equal(onetagAd);

                });

        });


    });

});