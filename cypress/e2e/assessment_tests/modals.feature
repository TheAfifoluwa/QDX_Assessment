Feature: Modals on selenium Easy web application
        As a user, I should be able to use modals adequately on the selenium easy application
        And have access to the web app

    Background: User is on the site
        Given User is on selenium easy web page

    Scenario Outline: User should be able to use the two different types of modals on the selenium easy test site
        When User clicks the "Alerts & Modals" button
        And User clicks the "Bootstrap Modals" button
        Then User sees the modalHeader
        And User sees the singleModal Header
        When User clicks the singleModal button
        Then User sees the singleModal message
        And User clicks the "Close" button
        And User clicks the second singleModal button
        And User clicks the "Save changes" button
        And User clicks the third singleModal button
        And User clicks the "×" button
        And User sees the multiModal Header
        When User clicks the multiModal button
        Then User sees the multiModal Message
        When User clicks the multiModalChild button
        Then User sees the multichild message
        When User clicks the multiChildClose button
        And User clicks the second multiModalChild button
        And User clicks the multiChildCancel button
        And User clicks the Close button
        And User clicks the second multiModal button
        And User clicks the Savechanges button
        And User clicks the third multiModal button
        And User clicks the cancel button

       