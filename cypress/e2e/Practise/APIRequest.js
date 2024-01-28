

describe("API Testing through Cypress",function(){

    it("testing API calls",function(){

        cy.request("POST","https://rahulshettyacademy.com/Library/Addbook.php",{

        
            "name":"Diary of Wimpy Kid",
            "isbn": "cnde",
            "aisle":"2278",
            "author":"Dairlympe"
        }).then((response)=>{
            // expect(response.body).to.have.property("Msg","successfully added");
            expect(response.status).to.eq(200);

        })

    })
})