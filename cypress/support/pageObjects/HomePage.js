// Set the CLASS name = i.e. HomePage
class HomePage 
{
    // Declare a new METHOD with a meaningful name
    getName() 
    {
        // Add the object locator to search and add a RETURN keyword to return locator
        return cy.get(':nth-child(1) > .form-control')
    }

    getGender() 
    {
        return cy.get('select')
    }
}

// expose this class and make this class available TO ALL OTHER FILES in your framework
export default HomePage;