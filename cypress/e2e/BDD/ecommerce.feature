Feature: End to End Ecommerce validation

    application Regression

    @Regression
    Scenario: Ecommerce products delivery validation
    Given I open Ecommerce page
    When I add items to the cart
    And Validate the total prices
    Then submit with select the country and verify Thank you msg 

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
     | name   | gender |
     | Bazz   | Male   | 
    Then validate the forms behaviour
    And select the Shop Page