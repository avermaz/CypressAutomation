import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"; // Allows access to syntax

//IMPORT the exported HomePage.js file in support/pageObjects folder
import HomePage from '../../../support/pageObjects/HomePage'
// Create an OBJECT of HomePage.js pageObject file and store in a variable
const homePage = new HomePage()

let name // A GLOBAL Variable to store the DATATABLE from the feature file

Given('I open ECommerce page', () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
})

When('I fill the form details', function (DataTable) { // Access data using DataTable
    //Store Name in name variable so THEN step can access
    name = DataTable.rawTable[1][0]
    //Convert to AARAY and access via INDEX
    homePage.getName().type(DataTable.rawTable[1][0])
    homePage.getGender().select(DataTable.rawTable[1][1])
})

Then('Validate the form behaviour', () => {
    cy.get(':nth-child(4) > .ng-untouched').should('have.value', name)
})

And('Select the Shop page', () => {
    cy.get(':nth-child(2) > .nav-link').click()
})