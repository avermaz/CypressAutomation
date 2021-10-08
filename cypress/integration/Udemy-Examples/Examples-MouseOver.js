// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // JQuery Method called .show (this is used to check it ACTUALLY OPENS)
        cy.get('div.mouse-hover-content').invoke('show')
        // Get DOM element containing the 'Top' text
        cy.contains('Top').click()
        // Check URL contains #top
        cy.url().should('include', '#top')

        // FORCE CLICK ON HIDDEN ELEMENTS 
        // so we dont need to see the mouse over event, just click on the DESIRED option

        // Click on the DOM element containing the 'Reload' text WITH OUT clicking on the MOUSE OVER 
        cy.contains('Reload').click({force: true})

    })
})