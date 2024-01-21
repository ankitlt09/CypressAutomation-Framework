Feature: End to End Ecommerce validation

    application Regression

    Scenario: Ecommerce products delivery validation
    Given I open Ecommerce page
    When I add items to the cart
    And Validate the total prices
    Then submit with select the country and verify Thank you msg 