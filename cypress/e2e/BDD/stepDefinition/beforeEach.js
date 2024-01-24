beforeEach(()=>{
    //to pull data from other file
    cy.fixture('example').then(function(data){
        globalThis.data = data;
        
    });
});