// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Go to page
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        // MOCKED RESPONSE SETUP
        // Give the request, and then the STUB/MOCKED response + both are JSON type
        // cy.intercept({requestobject}, {responseobject})

        // go to the page on chrome/Network tab and see the request
        // NB Cypress does not make this call DIRECTLY, cypress just LISTENS out for this call in the browser
        cy.intercept(
            // Monitoring information
            {
                method: 'GET',
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },

            // Set MOCKED/STUBED RESPONSE
            // https://docs.cypress.io/api/commands/intercept#Stubbing-a-response
            {
                statusCode: 200,
                body:
                    [
                        {
                            "book_name": "RestAssured with Java",
                            "isbn": "RSU",
                            "aisle": "2301"
                        }
                    ]
            }).as('bookretrievals') // collect into REFERENCE variable (Manual Promise)

        // Click on Virtual Library (NB you have to click on the link 1st you ensure the MOCK RESPONSE is populated)
        cy.get("button[class='btn btn-primary']").click()
        
        // wait until Cypress INTERCEPTS the RESPONSE
        cy.wait('@bookretrievals')

        //Chai Assertion
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})