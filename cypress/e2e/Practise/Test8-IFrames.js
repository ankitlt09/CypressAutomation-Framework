/// <reference types="Cypress" /> 
// to provide auto-suggestion

import 'cypress-iframe';

describe('Handle Iframes',function(){

    it('should handle iframe on the webpage',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.frameLoaded('#courses-iframe');


        //* denotes regular expression rather writing complete text use 
        cy.iframe().find('a[href*="mentorship"]').eq(0).click(); // click the first element


        // use find()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2); 




    })
})