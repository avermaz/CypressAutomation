// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Static method using SELECT Method to identify the SELECT box
        // .should checked the value AFTER selection (Chai Assertion)
        cy.get('select').select('option2').should('have.value','option2')
    })
})