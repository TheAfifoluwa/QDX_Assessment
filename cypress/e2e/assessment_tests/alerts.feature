Feature: Alerts on selenium Easy web application
        As a user, I should be able to use alerts adequately on the selenium easy application
        And have access to the web app

    Background: User is on the site
        Given User is on selenium easy web page

    Scenario Outline: User should be able to use the different types of alerts on the selenium easy test site
        When User clicks the "Alerts & Modals" button
        And User clicks the "Bootstrap Alerts" button
        Then User sees the alertHeader
        When User clicks the "Autocloseable success message" button
        Then User sees the AutocloseableSuccessMessage
        When User clicks the "Normal success message" button
        Then User sees the NormalSuccessMessage
        And User clicks the successCancelIcon
        When User clicks the "Autocloseable warning message" button
        Then User sees the AutocloseableWarningMessage
        When User clicks the "Normal warning message" button
        Then User sees the NormalWarningMessage
        And User clicks the warningCancelIcon
        When User clicks the "Autocloseable danger message" button
        Then User sees the AutocloseabledangerMessage
        When User clicks the "Normal danger message" button
        Then User sees the NormaldangerMessage
        And User clicks the dangerCancelIcon
        When User clicks the "Autocloseable info message" button
        Then User sees the AutocloseableInfoMessage
        When User clicks the "Normal info message" button
        Then User sees the NormalInfoMessage
        And User clicks the infoCancelIcon
        
    