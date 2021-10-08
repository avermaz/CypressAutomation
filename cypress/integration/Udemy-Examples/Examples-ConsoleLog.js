// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website using a MANUAL PROMISE .then to fire command at the correct time
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/").then(function()
        {
            console.log('SYNC version')
        })

        // Push this message to console in BROWSER Terminal
        console.log('Async version')
    })
})