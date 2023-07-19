Feature: Testing the getWeather function
  As a developer
  I want to test the getWeather function
  So that I can ensure it retrieves weather data for a given city and country

  Scenario: Retrieving weather data successfully
    Given a city "New York" and a country "US"
    When I call the getWeather function
    Then I should receive weather data

  Scenario: Handling API error
    Given a non-existent city "NonExistentCity" and an invalid country "InvalidCountry"
    When I call the getWeather function
    Then I should receive an error response
