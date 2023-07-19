Feature: Home Component
  As a user
  I want to see the Home page
  So that I can interact with the form and get weather information

  Scenario: Display Home page with form and information sections
    Given I open the Home page
    Then I should see the form section
    And I should see the information section

  Scenario: Enter data in the form and get weather information
    Given I open the Home page
    When I enter "New York" as the city and "US" as the country in the form
    And I submit the form
    Then I should see weather information in the information section
