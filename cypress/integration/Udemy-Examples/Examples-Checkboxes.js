// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Tick a SINGLE checkbox using .check
        // should(be.checked) as a CHAI assertion (Behaviour assertion  type)
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        // Untick the box
        cy.get('#checkBoxOption1').uncheck()

        // Tick MULTIPLE checkboxs using .check and passing an ARRAY OF ELEMENTS
        // NOTE THIS ONLY WORKS input[type="checkbox"] as this is COMMON to all 3 checkboxes
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

    })
})