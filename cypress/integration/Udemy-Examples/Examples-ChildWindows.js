// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // NB Cypress does not let you do this natively!
        cy.get('#opentab').then(function (el) 
        {
            // Store the href attribute into url variable using PROP
            const url = el.prop('href')

            // show in Cypress LOG
            cy.log(url)

            // Visit the URL
            cy.visit(url)
        })
    })
})