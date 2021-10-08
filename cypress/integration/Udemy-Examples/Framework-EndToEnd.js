// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework
/// <reference types="cypress" />

describe('My First Test Suite', function () { // Test Suite Level

    // Add a HOOK at the DESCRIBE level
    before(function () {
        // runs ONCE before all tests in the block

        // Search for the FIXTURE file and store into 'data'
        cy.fixture('example').then(function (data) {
            // this. make the data available GLOBALLY in a new variable called 'dataGlobal'
            // Otherwise it only available in this code loop ONLY
            this.dataGlobal = data
        })
    })

    it('Visit Test Case', function () { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        // Click the link to go to the shop
        cy.get(':nth-child(2) > .nav-link').click()

        // 'this.dataGlobal.productName' returns an ARRAY of productName from FIXTURES examples.json
        // FOR EACH loop will run through the ENTIRE ARRAY of productName 
        this.dataGlobal.productName.forEach(function (element) {
            //Access Custom Command called 'selectProduct' and pass productName input
            cy.selectProduct(element)
        });

        cy.contains('Checkout').click()

        //CODE TO CHECK THE TOTAL SUM OF THE BASKET AT CHECKOUT
        var sum = 0 // THIS IS USED TO STORE THE SUM IN BELOW LOOP
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            cy.log($el.text()) // display values in Test Runner with extra characters

            const amount = $el.text() // get the text value
            var res = amount.split(" ") // split retrive by SPACE i.e. if you have '£ 10' in two parts
            res = res[1].trim() // Access 2nd index of SPLIT and TRIM (Remove Space)
            cy.log(res) // display values in Test Runner CLEANED

            // Convert STRING to NUMBER TYPE
            sum = Number(sum) + Number(res) // This keeps adding to SUM everytime it goes around the LOOP
        }).then(function () // RESOLVE VIA A MANUAL PROMISE so this only fires AFTER THE entire loop COMPLETES
        {
            cy.log(sum) // display BASKET TOTAL value in Test Runner
            expect(Number(115000)).to.equal(sum) // Confirm basket amount using a hardcoded value
        })

        //Code to get to final page (non optimised code)
        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        // cy.get('#checkbox2').click() -- doesnt work
        cy.get('#checkbox2').click({ force: true })
        cy.get('.ng-untouched > .btn').click()
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-)')
        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    })
})