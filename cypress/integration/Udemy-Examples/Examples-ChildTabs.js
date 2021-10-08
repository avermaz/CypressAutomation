// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // NB Cypress does not let you do this natively!
        // DELETE THE TARGET ATTRIBUTE using .invoke removeAttr so that it opens in the SAME window
        // .invoke = Invoke a function on the previously yielded subject.
        // 'removeAttr' = jquery function
        // 'target' = attribute I want to remove (could also be https://www.w3schools.com/tags/ref_attributes.asp)
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        // Navigate back to page
        cy.go('back')
        
        // Get the URL and do a Chai assertion
        cy.url().should('include', 'AutomationPractice')

        // Navigate forward to the page
        cy.go('forward')

    })
})