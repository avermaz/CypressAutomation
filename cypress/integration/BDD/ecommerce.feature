Feature: End to End Ecommerce Validation

    Test application adding to basket
    @Regression
    Scenario: Ecommerce Produce Delivery
        Given I open ECommerce page
        When I add items to Cart
        And Validate the total prices
        Then Select the country, submit and verify confirmation message