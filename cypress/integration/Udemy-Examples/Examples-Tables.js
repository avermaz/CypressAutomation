// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // This selects ONLY the "2nd COLUMN"
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            // save to variable
            const text = $el.text()

            // cycle thought until match equals Python   
            if (text.includes("Python")) 
            {
                // get the text of NEXT element of 'tr td:nth-child2'
                // need to use .then() as need to RESOLVED PROMISE
                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) 
                {
                    // save to variable
                    const priceText = price.text()

                    // Do assertion to check value
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})