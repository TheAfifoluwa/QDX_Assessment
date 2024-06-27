Feature: Simple Forms on selenium Easy web application
        As a user, I should be able to fill forms on the selenium easy application
        And have access to the web app

    Background: User is on the site
        Given User is on selenium easy web page

    Scenario Outline: User should be able to fill both the single and multi field forms
        When User clicks the "Input Forms" button
        And User clicks the "Simple Form Demo" button
        Then User sees the simpleFormDemo Header
        And User sees the singleInput Header
        When User inserts the "message"
        And User clicks the show message button
        Then User sees their entered message
        And user sees the multiFormDemo Header
        When User inserts the "value1"
        And User inserts the "value2"
        And User clicks the Get total button
        Then User sees the summed value
      