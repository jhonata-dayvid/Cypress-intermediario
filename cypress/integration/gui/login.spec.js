///<reference types = "Cypress"/>

describe("login",() =>{
    it("sucessfully",()=>{
      cy.login() 

      cy.get('.qa-user-avatar').should('exist')
    })
})