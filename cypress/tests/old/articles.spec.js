/// <reference types = "cypress" />

describe('Article', () => {

    it('Cadastro de novo artigo', () => {
        cy.visit('login')
        cy.get('[placeholder=Email]').type('leonardormenezes83@gmail.com')
        cy.get('[placeholder=Password]').type('bootcamp@123')
        cy.get('.btn').click()

        cy.get('[ui-sref="app.editor"]').click()

        //form article
        const artName = 'Nome do Artigo' + new Date().getTime()
        const artDescription = 'Descrição do artigo' 
        const artBody = 'Corpo xpto'

        cy.get("[placeholder='Article Title']").type(artName)
        cy.get('[ng-model*=description]').type(artDescription)
        cy.get('[ng-model*=body]').type(artBody)
        cy.get('[ng-model*=tagField]').type('cypress')

        cy.contains('button','Publish Article').click()

        cy.contains(artName).should('be.visible')
       // cy.get('h1').should('have.text',artName)


    });

});