describe('Handling Child Windows', ()=>{

    it('Should Handle Child Window',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //cypress cannot perform actions in new tab, testing should be carried out in same tab so remove target attribute from anchor tag
        cy.get('#opentab').invoke('removeAttr','target').click();

        //cypress directly cannot perform testing on new url, so it used origin() to work with new url
        cy.origin("https://www.qaclickacademy.com",()=>{
            // cy.get("#navbarSupportedContent a[href*='about']").click(); //parent child selector
            cy.get('a').contains("About us").click();

            cy.get('h2').contains("Welcome to QAClick Academy").should('contain','Welcome to QAClick Academy')
        })
        


    })

})