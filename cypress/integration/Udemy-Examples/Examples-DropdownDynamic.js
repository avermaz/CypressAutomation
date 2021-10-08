// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Enter text into the AJAX Dynamic field
        cy.get('#autocomplete').type('ind')

        // Each (iterate) loop code
        // NB we start at 1st get('.ui-menu-item div') and 
        cy.get('.ui-menu-item div').each(($el, index, $list) => 
        {
            // cycle thought until match equals India   
            if ($el.text() === 'India') 
            {
                // When ABOVE condition is met TRIGGER a click action 
                // NB cannot directly call click() as deprecated method
                $el.trigger("click")
            }
        })

        // .should checked the value AFTER selection (Chai Assertion)
        cy.get('#autocomplete').should('have.value','India')
    })
})