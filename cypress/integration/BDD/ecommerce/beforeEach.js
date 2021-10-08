beforeEach(function () {
    // runsbefore EVERY tests in the block

    // Search for the FIXTURE file and store into 'data'
    cy.fixture('example').then(function (data) {
        // this. make the data available GLOBALLY in a new variable called 'dataGlobal'
        // Otherwise it only available in this code loop ONLY
        this.dataGlobal = data
    })
})