// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website (HARD CODED)
        // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        // Visit this website (Using env variable from cypress.json)
        cy.visit(Cypress.env('url'))
    })
})