/// <reference types="Cypress" />

describe("My First Test Suite",function(){

    it("My firstTest case", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        cy.get('.search-keyword').type('ca');

        cy.wait(2000);

        cy.get('.product:visible').should('have.length', 4);

        // Parent-child chaining

        cy.get('.products').as('productLocator'); // alias name assigned as variable

        cy.get('@productLocator').find('.product').should('have.length', 4);

        // cy.get(':nth-child(2) > .product-action > button').click();  in-built cypress locator 

        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function(){
            console.log("Added to cart");  // console.log is not a cypress command
        })


        // clicking the element dynamically rather than selecting statically through index
        cy.get('.products').find('.product').each(($el, index, $list) => {

            const testVar = $el.find('h4.product-name').text()
            if(testVar.includes('Cashews')){
                cy.wrap($el).find('button').click();
            }

        })
        //Non cypress commands cannot resolve promise by themselves.We need to resolve it manually using then()

        cy.get('.brand').should('have.text','GREENKART'); // Assertion automatically handles promise chaining

       // should is a chai assertion

        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text());
        })




        // const logo = cy.get('.brand'); this will throw error as promise is not handeld
        // cy.log(logo.text()); & text() is a jquery command not cypress command

    })

})