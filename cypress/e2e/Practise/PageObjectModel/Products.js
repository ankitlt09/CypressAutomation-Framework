class Products{

    checkOutButton(){
        return  cy.get('a').contains('Checkout');
    }
}

export default Products