describe('Testing Dynamic Table Contents',()=>{
    it('should test dynamic element',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //to navigate nth element on browser
        cy.get('tr td:nth-child(2)').each(($el, index, list)=>{

            const text = $el.text(); //text() is a jQuery method
            if(text.includes('Python')){

                // next() works only with get() as it deals with DOM of the webpage
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    cy.log(index);
                    const priceText = price.text();
                    expect(priceText).to.equal('25');
                })

            }
    
    
        })
    })
})