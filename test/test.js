const assert = require('assert');


beforeEach(function(){
    browser.url('/');
    browser.scroll(0, 0);
    browser.setViewportSize({
        width: 1200,
        height: 464
    });
    browser.refresh();
    browser.pause(5000);
});

describe('behaviour of the fixed header', function() {

    it('should load header', function(){
        browser.url('/');
        browser.waitForExist('#onetag-sticky-header', 2000);

    });

    it('check if  header banner still exist after resize', function(){
        browser.url('/');
        browser.waitForExist('#onetag-sticky-header', 3000);
        browser.setViewportSize({
            height: 812,
            width: 375
        });
        browser.refresh();
        const isExisting = browser.isExisting('#onetag-sticky-header');
        assert.equal(isExisting, false);
    });


    it('check if header is visable after scrolling', function() {
        browser.url('/');
        browser.waitForExist('#onetag-sticky-header', 4000);
        browser.scroll(0, 250);
        browser.isVisibleWithinViewport('#onetag-sticky-header');
    });


    it('should close header ad when clicked', function() {
        browser.url('/');
        browser.waitForExist('#onetag-sticky-header', 2000);
        browser.waitForExist('.closeButton', 4000);
        browser.click('.closeButton');
        const isExisting = browser.isExisting('#onetag-sticky-header');
        console.log(isExisting);
        assert(!isExisting);
    });


});


describe('behaviour page after initial load', function() {

    it('should have the right title', () => {
        browser.url('/');
        const title = browser.getTitle();
        assert.equal(title, 'Used Cars for Sale - Auto Trader UK');
    });

});

describe('behaviour of the the side ad ', () => {

    it('should not reload when ad is not in view', function(){
        browser.url('/');
        browser.waitForExist('.onscroll-ad', 2000);
        const first = browser.getHTML('.onscroll-ad');
        const elem = $('.site-footer');
        elem.scroll();
        browser.pause(20000);
        const second = browser.getHTML('.onscroll-ad');
        assert.deepStrictEqual(first, second);

    });


    it('check if ad reloads', function(done){
        browser.url('/');
        const first = browser.getHTML('.onscroll-ad');


        let i = 0;
        let toggle = true;


             setInterval(function(){
            if(toggle && i <=25){
                browser.moveTo(null, 10, 10);
                toggle = !toggle;
                i++;
            } else if (!toggle && i <=25){
                browser.moveTo(null, -10, -10);
                toggle = !toggle;
                i++;
            } else {
                clearInterval(timer);
                const second = browser.getHTML('.onscroll-ad');
                assert.notDeepEqual(first, second);
                done();
            }
        }, 1000);


    });


    it('should load ad in sidebar', function(){
        browser.url('/');
        browser.waitForExist('.onscroll-ad', 2000);
    });

    it('check if ad remains the same after 5 seconds', function(){
        browser.url('/');
        const first = browser.getHTML('.onscroll-ad');
        browser.pause(5000);
        const second = browser.getHTML('.onscroll-ad');

        // const result = second === first;
        assert.deepStrictEqual(first, second);
    });

});