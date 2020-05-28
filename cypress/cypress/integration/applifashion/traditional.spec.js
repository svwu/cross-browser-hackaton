describe("Applitools Applifashion Page", () => {

    let viewPorts = [
        "ipad-2",
        "ipad-mini",
        "iphone-3",
        "iphone-4",
        "macbook-13",
        "samsung-note9",
        "samsung-s10"
    ];

    viewPorts.forEach((viewPort) => {
        it(`Check Page V1`, function () {
            cy.visit('https://demo.applitools.com/gridHackathonV1.html');

            cy.viewport(viewPort);
            cy.document().toMatchImageSnapshot({
                createDiffImage: true,
                threshold: 0.001,
                name: 'AP_V1_' + viewPort
            });

        });
    });

    viewPorts.forEach((viewPort) => {
        it(`Check Page V2`, function () {
            cy.visit('https://demo.applitools.com/gridHackathonV2.html');

            cy.viewport(viewPort);
            cy.document().toMatchImageSnapshot({
                createDiffImage: true,
                threshold: 0.001,
                name: 'AP_V2_' + viewPort
            });
        });
    });
});
