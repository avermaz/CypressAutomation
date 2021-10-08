// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

//<reference types="cypress" />

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
        
        // Assert to check length
        cy.get('.product:visible').should('have.length', 4)

        // Assert if logo text is correctly displayed (Text Compare)
        cy.get('.brand').should('have.text', 'GREENKART')
    })
})