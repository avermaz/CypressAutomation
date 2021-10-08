// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // NB Cypress will auto accept alerts. You cannot change this behaviour. //

        // ALERT Popup
        // Open Alert
        cy.get('#alertbtn').click()

        //Trigger event for alerts and check via a assertion <-- ALERT POPUP
        cy.on('window:alert', (str) => {
            // Mocha Chai COMPARE TWO STRINGS Assertion
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // CONFIRM Popup
        // Open Alert (using custom CSS)
        cy.get('[value="Confirm"]').click()

        //Trigger event for alerts and check via a assertion <-- CONFIRM POPUP
        cy.on('window:confirm', (str) => {
            // Mocha Chai COMPARE TWO STRINGS Assertion
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })
})