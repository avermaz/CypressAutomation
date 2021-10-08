// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // WE need to let CYPRESS know to SWITCH to FRAMES

        // Retrieve FRAME ID using dev tool or test runner/Chropath to load FRAME
        cy.frameLoaded('#courses-iframe')

        // Switch to iFrame Mode
        // Click on the mentorship link
        // use eq(0) as there are 7 results returned and we only need the 1st one
        cy.iframe().find("a[href*='mentorship']").eq(0).click()

        // Chai Count Assertion to count packages (Bronze and Platinum)
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
        
    })
})