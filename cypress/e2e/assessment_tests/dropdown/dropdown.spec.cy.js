import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

let dropdown 

before('load all element locators', ()=>{
    cy.fixture('selectors').then((ele)=>{
        dropdown = ele.dropdown

    })
})


Given(/^User is on selenium easy web page$/, () => {
	cy.visit('/')
});

When(/^User clicks the "([^"]*)" button$/, (button_text) => {
	cy.clickButton(button_text)
});


Then(/^User sees the selectDropdown Header$/, () => {
	cy.get(dropdown.dropdownHeader)
  .should('contain.text', 'This would be your first example on select dropd down list to with Selenium.')
});

Then(/^User sees the selectList Header$/, () => {
	cy.get(dropdown.selectListHeader)
  .should('contain.text', 'Select List Demo')
});

When(/^User clicks the dropdownfield$/, () => {
	cy.get(dropdown.selectListField).select('Sunday')
});


Then(/^User sees their selected option$/, () => {
	cy.get(dropdown.confirmSelection)
  .should('contain.text', 'Day selected :- Sunday')
});

Then(/^user sees the multiSelect Header$/, () => {
	cy.get(dropdown.multiSelectListHeader)
  .should('contain.text', 'Multi Select List Demo')
});


Then(/^User sees the first selected message$/, () => {
	cy.get(dropdown.firstSelectedMessage)
  .should('contain.text', 'First selected option is : California')
});


Then(/^User sees all the selected options$/, () => {
	cy.get(dropdown.getAllSelectedMessage)
  .should('contain.text', 'Options selected are : California')
});
