
class HomePage{
    
    getEditBox(){

        return cy.get("input[name='name']:nth-child(2)"); 
    }

    getGender(){
        return cy.get('select');
    }

    getTwoDataBinding(){

        return  cy.get('h4 input[name="name"]');
        
    }

    

    getCheckDisableButton(){
        return cy.get('#inlineRadio3');
    }

    getShopTab(){
        return  cy.get('a').contains('Shop');
    }

}



export default HomePage