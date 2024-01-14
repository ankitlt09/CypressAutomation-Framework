describe('Handle Hidden Mouse Hover elements',function(){

    it('should handle mouse hover elements',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // cypress directly doesn't handle mouse events, so use jQuery method
        // cy.get('div.mouse-hover-content').invoke('show');  // show() works with direct parent only
        cy.contains('Top').click({force:true}); // use force keyword to work with hidden element without showing it on the DOM

        // verify url if contains the expected path
        cy.url().should('include','top');
    })
})