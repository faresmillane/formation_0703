Feature: navigate and search

  Scenario: search davidson in google
    Given I navigate to google
    And I accept cgu
    When I fill "davidson consulting" in the search bar
    Then I should have a result
