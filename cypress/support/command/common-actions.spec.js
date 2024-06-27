

let home
let form
let dropdown 
let alert
let modal

before('load all element locators', ()=>{
    cy.fixture('selectors').then((ele)=>{
        home = ele.homePage
        form = ele.simpleForm
        dropdown = ele.dropdown
        alert = ele.alerts
        modal = ele.modals

    })
})



Cypress.Commands.add('clickButton', (text) => {
    cy.contains(text).should('exist').click()
})

Cypress.Commands.add('enterMessage', (text) => {
    switch (text) {
        case 'message':
            cy.typeAnyText(form.singleInputField, 'Hello again')
            break
        case 'value1':
            cy.typeAnyText(form.firstInputField, '12')
            break
        case 'value2':
            cy.typeAnyText(form.secondInputField, '20')

    }
})