// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework
/// <reference types="cypress" />

//IMPORT the exported HomePage.js file in support/pageObjects folder
import HomePage from '../../support/pageObjects/HomePage'

describe('My First Test Suite', function () { // Test Suite Level

    // Add a HOOK at the DESCRIBE level
    before(function () {
        // runs once before all tests in the block

        // Search for the FIXTURE file and store into 'data'
        cy.fixture('example').then(function (data) 
        {
            // this. make the data available GLOBALLY in a new variable called 'dataGlobal'
            // Otherwise it only available in this code loop ONLY
            this.dataGlobal = data
        })
    })

    // Create an OBJECT of HomePage.js pageObject file and store in a variable
    // Created in DESCRIBE LEVEL so that available to all ITS (test cases)
    const homePage = new HomePage()

    it('Visit Test Case', function () { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        // Get locator from HomePage.js and type in name USING DATA FROM FIXTURE - example.json
        homePage.getName().type(this.dataGlobal.name)

        // Get locator from HomePage.js USING DATA FROM FIXTURE - example.json
        homePage.getGender().select(this.dataGlobal.gender)
    })
})