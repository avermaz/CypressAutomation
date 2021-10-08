// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        // Select field and type in 'ca'
        cy.get('.search-keyword').type('ca')

        // wait 2 seconds for results to load
        cy.wait(2000)

        // NB should is a CHAI assertion
        // .get is like findelements and count the number of elements (i.e 4)
        // Use :visible to count only VISIBLE ELEMENTS
        cy.get('.product:visible').should('have.length', 4)

        // use .find instead of :visible to limit SCOPE of search area
        // Parent child chaining
        cy.get('.products').find('.product').should('have.length', 4)

        //return me the 2nd product using .eq and click on ADD TO CART using .contains to find specific text
        //we LIMIT SCOPE of search using .eq(2) and only search for text in THAT INDEX ONLY and then CLICK
        // THIS IS HARDCODED
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    })
})