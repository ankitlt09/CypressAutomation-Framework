describe('Testing Alerts & Popups on brwoser', function(){

    it('Alerts & Pop-ups Test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        

        cy.get('#alertbtn').click();

       
        
        cy.on('window:alert',(str)=>{

            expect(str).to.equal('Hello , share this practice page and share your knowledge');

        });

        cy.get('[value="Confirm"]').click(); 
        

       
        cy.on('window:confirm', (str)=>{
            //Mocha
            expect(str).to.equal("Hello , Are you sure you want to confirm?");
        })
    })
})