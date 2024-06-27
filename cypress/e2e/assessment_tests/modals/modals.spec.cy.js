import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

let modal

before('load all element locators', ()=>{
    cy.fixture('selectors').then((ele)=>{

        modal = ele.modals

    })
})


Given(/^User is on selenium easy web page$/, () => {
	cy.visit('/')
});

When(/^User clicks the "([^"]*)" button$/, (button_text) => {
	cy.clickButton(button_text)
});


Then(/^User sees the modalHeader$/, () => {
	cy.get(modal.modalHeader)
  .should('contain.text', 'Bootstrap Modal Example for Automation')
});

Then(/^User sees the singleModal Header$/, () => {
	cy.get(modal.singleModalHeader)
  .should('contain.text', 'Single Modal Example')
});

When(/^User clicks the singleModal button$/, () => {
	cy.clickAnyElement(modal.singleModalButton)
});

Then(/^User sees the singleModal message$/, () => {
	cy.get(modal.singleModalMessage)
  .should('contain.text', 'This is the place where the content for the modal dialog displays')
});



Then(/^User clicks the second singleModal button$/, () => {
	cy.clickAnyElement(modal.singleModalButton)
});


Then(/^User clicks the third singleModal button$/, () => {
	cy.clickAnyElement(modal.singleModalButton)
});


Then(/^User sees the multiModal Header$/, () => {
	cy.get(modal.multiModalHeader)
  .should('contain.text', 'Multiple Modal Example')
});

When(/^User clicks the multiModal button$/, () => {
	cy.clickAnyElement(modal.multiModalButton)
});

Then(/^User sees the multiModal Message$/, () => {
	cy.get(modal.multiModalMessage)
  .should('contain.text', 'Click launch modal button to launch second modal.')
});

When(/^User clicks the multiModalChild button$/, () => {
	cy.clickAnyElement(modal.multiModalChildButton)
});

Then(/^User sees the multichild message$/, () => {
	cy.get(modal.multiModalChildMessage)
  .should('contain.text', 'This is the place where the content for the modal dialog displays.')
});

When(/^User clicks the multiChildClose button$/, () => {
	cy.clickAnyElement(modal.modalChildCloseButton)
});


When(/^User clicks the second multiModalChild button$/, () => {
	cy.clickAnyElement(modal.multiModalChildButton)
});

When(/^User clicks the multiChildCancel button$/, () => {
	cy.clickAnyElement(modal.modalChildCancelIcon)
});

When(/^User clicks the Close button$/, () => {
	cy.clickAnyElement(modal.multiModalCloseButton)
});



When(/^User clicks the second multiModal button$/, () => {
	cy.clickAnyElement(modal.multiModalButton)
});

When(/^User clicks the Savechanges button$/, () => {
	cy.clickAnyElement(modal.multiModalSaveButton)
});


When(/^User clicks the third multiModal button$/, () => {
	cy.clickAnyElement(modal.multiModalButton)
});

When(/^User clicks the cancel button$/, () => {
	cy.clickAnyElement(modal.multiModalCancelIcon)
});


