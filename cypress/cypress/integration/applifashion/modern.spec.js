describe("Applitools Applifashion Page", () => {

    it(`Check Index Page for regression`, function () {

        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'AppliFashion Shop',
            testName: 'Hackaton Submission',
        });

        // Check the app page
        cy.eyesCheckWindow({
            tag: "App Window",
            target: 'window',
            fully: true
        });

        cy.eyesClose()
    });
});
