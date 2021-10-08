import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"; // Allows access to syntax

Given('I open ECommerce page', () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
})

// cannot use => with Mocha Hooks so you function () as we are loading data into this from beforeEach.js
When('I add items to Cart', function () {

    cy.get(':nth-child(2) > .nav-link').click()
    this.dataGlobal.productName.forEach(function (element) {
        cy.selectProduct(element)
    });

    And('Validate the total prices', () => {
        cy.contains('Checkout').click()
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            cy.log($el.text())
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            cy.log(res)

            sum = Number(sum) + Number(res)
        }).then(function () {
            cy.log(sum)
            expect(Number(115000)).to.equal(sum)
        })
    })

    Then('Select the country, submit and verify confirmation message', () => {
        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({ force: true })
        cy.get('.ng-untouched > .btn').click()

        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    })
})