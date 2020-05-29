describe("Applitools Applifashion Page", () => {

    it(`Save Page V1`, function () {
        browser.url('https://demo.applitools.com/gridHackathonV1.html');
        browser.saveScreen('Applitools V1', {});

    });

    it(`Compary Page V1`, function () {
        expect(browser.checkScreen('Applitools V1', {})).toEqual(0);
    });
});
