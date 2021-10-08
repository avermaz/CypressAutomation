// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        // Manually handle promise (Focus on element 1st ensuring step RESOLVED BEFORE saving to variable)
        // 1st get focus on the brand (.then ensure its resolves)
        cy.get('.brand').then(function (logoelement) 
        {
            // 2nd save text into a variable
            // Force log entry by WRAPPING using cy.log()
            cy.log(logoelement.text())
        })

        // This will NOT WORK as JQuery Methods (.text() is a JQuery method, 
        // so it doesn’t work with Parent child chaining for resolving promises, 
        // HENCE PROMISE BREAKS and code fails)
        // const logo=cy.get('.brand').text()
    })
})