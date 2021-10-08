Feature: Test ECommerce Form data

    Test application adding to basket
    @Smoke
    Scenario: Ecommerce Home page fill data
        Given I open ECommerce page
        When I fill the form details
            | name  | gender |
            | Apple | Male   |
        Then Validate the form behaviour
        And Select the Shop page