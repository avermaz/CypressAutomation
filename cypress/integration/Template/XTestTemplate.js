// all Test Cases "it" must be WRAPPED in Test Suite "describe" - MOCHA Framework

// https://docs.cypress.io/guides/getting-started/writing-your-first-test#Write-your-first-test

describe('My First Test Suite', () => { // Test Suite Level

    it('My First Test Case', () => { // Test Case Level - Test 1
        // Test Steps
        expect(true).to.equal(true)
    })

    it('My Second Test Case', () => { // Test Case Level - Test 2
        // Test Steps
        expect(true).to.equal(false)
    })

})