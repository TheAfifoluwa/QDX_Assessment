import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

let alert

before('load all element locators', ()=>{
    cy.fixture('selectors').then((ele)=>{
        alert = ele.alerts
    })
})


Given(/^User is on selenium easy web page$/, () => {
	cy.visit('/')
});

When(/^User clicks the "([^"]*)" button$/, (button_text) => {
	cy.clickButton(button_text)
});


Then(/^User sees the alertHeader$/, () => {
	cy.get(alert.alertHeader)
  .should('contain.text', 'Bootstrap Alert messages')
});


Then(/^User sees the AutocloseableSuccessMessage$/, () => {
	cy.get(alert.autocloseableSuccessMessage)
  .should('contain.text', 'I\'m an autocloseable success  message. I will hide in 5 seconds.')
});


Then(/^User sees the NormalSuccessMessage$/, () => {
	cy.get(alert.normalSuccessMessage)
  .should('contain.text', 'I\'m a normal success message. To close use  the appropriate button.')
});

Then(/^User clicks the successCancelIcon$/, () => {
	cy.clickAnyElement(alert.normalSuccessClose)
});


Then(/^User sees the AutocloseableWarningMessage$/, () => {
	cy.get(alert.autocloseableWarningMessage)
  .should('contain.text', 'I\'m an autocloseable warning message. I will hide in 3 seconds.')
});


Then(/^User sees the NormalWarningMessage$/, () => {
	cy.get(alert.normalWarningMessage)
  .should('contain.text', 'I\'m a normal warning message. To close use  the appropriate button.')
});

Then(/^User clicks the warningCancelIcon$/, () => {
	cy.clickAnyElement(alert.normalWarningClose)
});

Then(/^User sees the AutocloseabledangerMessage$/, () => {
	cy.get(alert.autocloseableDangerMessage)
  .should('contain.text', 'I\'m an autocloseable danger message. I will hide in 5 seconds.')
});


Then(/^User sees the NormaldangerMessage$/, () => {
    cy.get(alert.normalDangerMessage)
    .should('contain.text', 'I\'m a normal danger message. To close use  the appropriate button.')
});

Then(/^User clicks the dangerCancelIcon$/, () => {
	cy.clickAnyElement(alert.normalDangerClose)
});


Then(/^User sees the AutocloseableInfoMessage$/, () => {
	cy.get(alert.autocloseableInfoMessage)
  .should('contain.text', 'I\'m an autocloseable info message. I will hide in 6 seconds.')
});


Then(/^User sees the NormalInfoMessage$/, () => {
    cy.get(alert.normalInfoMessage)
    .should('contain.text', 'I\'m a normal info message. To close use  the appropriate button.')
});

Then(/^User clicks the infoCancelIcon$/, () => {
	cy.clickAnyElement(alert.normalInfoClose)
});
