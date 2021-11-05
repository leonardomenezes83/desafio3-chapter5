/// <reference types = "cypress" />

//import articles from '../support/pages/articles'
describe('Article', () => {

    beforeEach(() => {
       cy.login()
       cy.visit('/')
    });
        
    it.only('Cadastro de novo artigo', () => {
        
        cy.request({
            method: 'POST',
            url: 'https://api.realworld.io/api/users/login',
            body: { 
                "user": {
                    "email": "leonardormenezes83@gmail.com", 
                    "password": "bootcamp@123"
                      }
             },
        }).then(response => {
            console.log(response.body.user.token)

            //json path
            //console.log(response.body.user.token)

            window.localStorage.setItem('jwtToken', response.body.user.token)
        })
        cy.visit('login')


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