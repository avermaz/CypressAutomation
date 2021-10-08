// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework
/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        // Click the link to go to the shop
        cy.get(':nth-child(2) > .nav-link').click().debug

        // Pause test execution
        cy.pause()

        //Access Custom Command called 'selectProduct' and pass productName input/argument
        cy.selectProduct('Blackberry')
        cy.selectProduct('Nokia Edge')
    })
})