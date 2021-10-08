// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

/// <reference types="cypress" />

describe('My First Test Suite', () => { // Test Suite Level

    it('Visit Test Case', () => { // Test Case Level - Test 1
        // Test Steps

        // Visit this website
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        // Select field and type in 'ca'
        cy.get('.search-keyword').type('ca')

        // wait 2 seconds for results to load
        cy.wait(2000)

        // Each (iterate) loop code
        // NB we start at 1st .product because of .find('.product')
        cy.get('.products').find('.product').each(($el, index, $list) => {

            // jump to h4.product-name and return text and save to text variable textVeg
            const textVeg = $el.find('h4.product-name').text()

            // Check IF textVeg is equal to specified text i.e. Cashews
            // https://www.w3schools.com/jsref/jsref_includes.asp
            if (textVeg.includes('Cashews')) 
            {
                // When ABOVE condition is met TRIGGER a click action 
                // NB cannot directly call click() as deprecated method
                $el.find('button').trigger("click")
            }
        })

        // https://www.udemy.com/course/cypress-tutorial/learn/lecture/15647436#overview      
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})