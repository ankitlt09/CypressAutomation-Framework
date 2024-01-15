describe('Working in Framework',function(){

    // hooks 
    before(function(){
        //to pull data from other file
        cy.fixture('example').then(function(data){
            this.data = data
            
        })

    })

    it('should take data from external file',function(){

        cy.visit("https://rahulshettyacademy.com/angularpractice/");

        cy.get("input[name='name']:nth-child(2)").type(this.data.name);

        //to get the attribute of a tag, we use attr keyword of jQuery , checking property
        cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2');

        cy.get('select').select(this.data.gender);

        //to verify the value of input is same in other input box
        cy.get('h4 input[name="name"]').should('have.value',this.data.name);

        // to verify element is disabled on the webpage, checking behaviour
        cy.get('#inlineRadio3').should('be.disabled');

        // cy.pause(); //can use debug() as 
         cy.get('a').contains('Shop').click().debug();

        // cy.get('.card-title').each(($mobile,index,$list)=>{

        //     if($mobile.text().includes("Blackberry")){
        //         cy.get('button').eq(index).click();

        //     }
        // })

        //the above code can be wrapped in custom command in support directory
       
        //basic JS foreach loop is ok, but can lead to flakiness -
        // perhaps it's better to use cypress wrap method to allow the array to be iterated with cypress 'each' method
        cy.wrap(this.data.productName).each((element)=>{
            cy.log('${element}');
            cy.selectProduct(element);
        })

    })
})