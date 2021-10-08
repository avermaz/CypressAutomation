// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Go to page
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        // MOCKED REQUEST SETUP
        // Set request URL to monitor
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req) => {  // req = the request object as populated using the method and url from above 
                // define the MOCK request URL with malhotra
                req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

                // Send MOCK request to the BROWSER using CONTINUE method with the MODIFIED request (Authorname)
                req.continue((res) => {
                    // Check status is 200 as expected using Chai Assertion
                    expect(res.statusCode).to.equal(200)
                })
            }).as('dummyURL') // store as a REFERENCE value as it yield a PROMISE

        // Click on Virtual Library (NB you have to click on the link 1st you ensure the MOCK RESPONSE is populated)
        cy.get("button[class='btn btn-primary']").click()

        // wait until Cypress INTERCEPTS the REQUEST
        cy.wait('@dummyURL')
    })
})