describe('Checking new Actions on the WebPage',function(){

    
    it('Checkbox Actions', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //click() can also be used but check() is more reliable
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked'); // uncheck checkbox

        // selecting multiple checkbox of same tag
        cy.get('input[type="checkbox"]').check(['option2','option3']);


    })

    it('Checking Drop downs',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //Static Drop down
        cy.get('select[id="dropdown-class-example"]').select('option2').should('have.value','option2');

        //Dynamic Drop down
        cy.get('input[placeholder="Type to Select Countries"]').type('ind');
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

                if($el.text()==='India'){
                    cy.wrap($el).click();
                }

        });


        cy.get('input[placeholder="Type to Select Countries"]').should('have.value','India'); // case sensitive

    });

    it('Checking Radio & Visibility Elements', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        cy.get('input[placeholder="Hide/Show Example"]').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('input[placeholder="Hide/Show Example"]').should('not.be.visible')
        cy.get('#show-textbox').click();
        cy.get('input[placeholder="Hide/Show Example"]').should('be.visible');

        //checking radio button

        cy.get('input[value="radio2"]').check().should('be.checked');
    })

})