describe("Applitools Applifashion Page", () => {

    it(`Check Index Page for regression`, function () {


        // Check the app page
        cy.eyesCheckWindow({
            tag: "App Window",
            target: 'window',
            fully: true
        });

        cy.eyesClose()
    });
});
