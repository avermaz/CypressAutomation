// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Post the following information to the SERVER with the details attached
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name": "Learn Appium Automation with Java",
            "isbn": "bcdsss",
            "aisle": "22s7",
            "author": "John Foxman"
        }).then(function (response) // RESOLIVE the PROMISE and CAPTURE the response
        {
            // Validate the response body
            // https://docs.cypress.io/api/commands/request#Command-Log
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.eq(200)
        })
    })
})