/// <reference types="Cypress" />

describe("API Security HTTP Request",function(){

    it("Intercept API Request",function(){

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>
        {

            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

            req.continue((res)=>
          {
           // expect(res.statusCode).to.equal(403)
          })
         }).as("dummyUrl");

         cy.get("button[class='btn btn-primary']").click()
        

         cy.wait('@dummyUrl').then(({request, response})=>
         {
             cy.get('tr').should('have.length',response.body.length+1);
 
         });;

        

        
        
        
    })
})