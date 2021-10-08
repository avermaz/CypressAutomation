// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework
/// <reference types="cypress" />

describe('My First Test Suite', function () { // Test Suite Level

    // Add a HOOK at the DESCRIBE level
    before(function () {
        // runs once before all tests in the block

        // Search for the FIXTURE file and store into 'data'
        cy.fixture('example').then(function (data) {
            // this. make the data available GLOBALLY in a new variable called 'dataGlobal'
            // Otherwise it only available in this code loop ONLY
            this.dataGlobal = data
        })
    })

    it('Visit Test Case', function () { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        // Type in the name USING DATA FROM FIXTURE - example.json
        cy.get(':nth-child(1) > .form-control').type(this.dataGlobal.name)

        // Select gender USING DATA FROM FIXTURE - example.json
        cy.get('select').select(this.dataGlobal.gender)
    })
})