Feature: Dropdowns on selenium Easy web application
        As a user, I should be able to use dropdowns adequately on the selenium easy application
        And have access to the web app

    Background: User is on the site
        Given User is on selenium easy web page

    Scenario Outline: User should be able to select single value and multiple values from a dropdown
        When User clicks the "Input Forms" button
        And User clicks the "Select Dropdown List" button
        Then User sees the selectDropdown Header
        And User sees the selectList Header
        When User clicks the dropdownfield
        Then User sees their selected option
        And user sees the multiSelect Header
        When User clicks the "California" button
        And User clicks the "First Selected" button
        Then User sees the first selected message
        And User clicks the "Get All Selected" button
        Then User sees all the selected options
        
      