import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

let form

before('load all element locators', ()=>{
    cy.fixture('selectors').then((ele)=>{
        form = ele.simpleForm
    })
})



Given(/^User is on selenium easy web page$/, () => {
	cy.visit('/')
});



When(/^User clicks the "([^"]*)" button$/, (button_text) => {
	cy.clickButton(button_text)
});


Then(/^User sees the simpleFormDemo Header$/, () => {
  cy.get(form.simpleFormHeader)
  .should('contain.text', 'This would be your first example to start with Selenium.')
});

Then(/^User sees the singleInput Header$/, () => {
  cy.get(form.singleInputHeader)
  .should('contain.text', 'Single Input Field')
});

When(/^User inserts the "([^"]*)"$/, (field) => {
	cy.enterMessage(field)

});

When(/^User clicks the show message button$/, () => {
  cy.clickAnyElement(form.showMessageButton)
});

Then(/^User sees their entered message$/, () => {
  cy.get(form.confirmMessageValue)
  .should('contain.text', 'Hello again')
});

Then(/^user sees the multiFormDemo Header$/, () => {
	cy.get(form.multipleInputHeader)
  .should('contain.text', 'Two Input Fields')
});

When(/^User clicks the Get total button$/, () => {
  cy.clickAnyElement(form.getTotalButton)
});


Then(/^User sees the summed value$/, () => {
  cy.get(form.confirmTotalValue)
  .should('contain.text', '32')
});
