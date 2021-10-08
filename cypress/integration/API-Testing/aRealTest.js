// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps
        
        // Go to page
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        // Click on Virtual Library
        cy.get("button[class='btn btn-primary']").click()
    })
})