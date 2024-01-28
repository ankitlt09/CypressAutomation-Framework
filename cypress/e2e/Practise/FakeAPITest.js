/// <reference types="Cypress" />

describe("Intercept API Calls",function(){

    it("Mock Http Response",function(){

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        //manipulating the http response at run time

        cy.intercept({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode: 200,
            body :[{
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302" }]
        }).as('bookretrivals');

        cy.get("button[class='btn btn-primary']").click();
        cy.wait("@bookretrivals").then(({request, response})=>
        {
            cy.get('tr').should('have.length',response.body.length+1);

        });
        cy.get('p').should('have.text','Oops only 1 Book available');


    })
})