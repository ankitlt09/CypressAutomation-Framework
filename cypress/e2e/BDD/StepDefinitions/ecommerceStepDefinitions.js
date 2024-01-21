import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjectModel/HomePage";
import Products from "../PageObjectModel/Products";


const homePage = new HomePage();
const productPage = new Products();


Given('I open Ecommerce page',()=>{

    cy.visit(Cypress.env('url') +"/angularpractice/");

});


When('I add items to the cart',()=>{


    homePage.getEditBox().type(this.data.name);

    //to get the attribute of a tag, we use attr keyword of jQuery , checking property
   homePage.getEditBox().should('have.attr','minlength','2');

    homePage.getGender().select(this.data.gender);

    //to verify the value of input is same in other input box
    homePage.getTwoDataBinding().should('have.value',this.data.name);

    // to verify element is disabled on the webpage, checking behaviour
    homePage.getCheckDisableButton().should('be.disabled');

    // cy.pause(); //can use debug() as 
     homePage.getShopTab().click().debug();

     Cypress.config('defaultCommandTimeout', 8000); // this is explicit wait for the element, 
    //declaring it at the top of spec will make the scope global for the test spec file

    // cy.get('.card-title').each(($mobile,index,$list)=>{

    //     if($mobile.text().includes("Blackberry")){
    //         cy.get('button').eq(index).click();

    //     }
    // })

    //the above code can be wrapped in custom command in support directory
   
    //basic JS foreach loop is ok, but can lead to flakiness -
    // perhaps it's better to use cypress wrap method to allow the array to be iterated with cypress 'each' method
    cy.wrap(this.data.productName).each((element)=>{
        cy.log(element);
        cy.selectProduct(element);
    })

    productPage.checkOutButton().click();
});

And('Validate the total prices',()=>{

    var sum=0; // every variable is by default string in Javascript
    cy.get('tr td:nth-child(4) strong').each(($price, index, $list)=>{
       
        const amount = $price.text();
        cy.log(amount);
        var res = amount.split(' ');
        res = res[1].trim();
        sum = Number(sum) + Number(res); // convert to Number

    }).then(function(){
        cy.log(sum);
    })
  

    cy.get('h3 strong').then(function(element){

        const amount = element.text();
        cy.log(amount);
        var total = amount.split(' ');
        total = total[1].trim();
        expect(Number(total)).to.equal(Number(sum));


    });


});

Then('submit with select the country and verify Thank you msg',()=>{
    cy.get('button').contains('Checkout').click();

    cy.get('input#country').type("India");

    

    cy.get('li > a').contains('India').click();

    cy.get('#checkbox2').click({force:true}); // to avoid element not interactable issue

    cy.get('input[value="Purchase"]').click();

    cy.get('.alert').then(function(element){

        const actualText = element.text();
        expect(actualText.includes('Success')).to.be.true;
    })

});


