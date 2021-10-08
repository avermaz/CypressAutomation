// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

//<reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        // Select field and type in 'ca'
        cy.get('.search-keyword').type('ca')
    })
})