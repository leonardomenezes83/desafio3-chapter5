/// <reference types="cypress" />

describe('Cadastro', () => {

    it('Cadastro com sucesso', () => {

        cy.visit('register')
        cy.get('[placeholder=Username]').type('LeonardoMenezes')
        cy.get('[placeholder=Email]').type('leonardormenezes83@gmail.com')
        cy.get('[placeholder=Password]').type('bootcamp@123')
        cy.get('.btn').click()

        cy.contains('No articles are here... yet.').should('not.be.visible')
    });
    it('Cadastro com sucesso - VIA API', () => {
            
        cy.intercept({
            // objetivo do intercept: como será localizado uma rota
            // url = https://api.realworld.io/api/users
            // hostname = https://api.realworld.io
            // path = /api/users
        
            method: 'POST',
            //url: 'https://api.realworld.io/api/users'
            path: '/api/users'    
        },{
            //manipular a rota
            statusCode: 200,
            fixture: 'cadastro-sucesso.json'
         
        }).as('postUsers')

        cy.visit('register')
        cy.get('[placeholder=Username]').type('LeonardoMenezes')
        cy.get('[placeholder=Email]').type('leonardormenezes83@gmail.com')
        cy.get('[placeholder=Password]').type('bootcamp@123')
        cy.get('.btn').click()

        cy.contains('No articles are here... yet.').should('be.visible')
        
    });
    it('Cadastro com e-mail e usuário já existente', () => {

        cy.intercept({
            method: 'POST',
            path: '/api/users'    
        },{
            statusCode: 422,
            fixture: 'cadastro-email-usuario-existente.json'

        }).as('postUsers')
        
        cy.visit('register')
        cy.get('[placeholder=Username]').type('LeonardoMenezes')
        cy.get('[placeholder=Email]').type('leonardormenezes83@gmail.com')
        cy.get('[placeholder=Password]').type('bootcamp@123')
        cy.get('.btn').click()
    
        cy.contains('email has already been taken').should('be.visible')
        cy.contains('username has already been taken').should('be.visible')

    });

    it('Cadastro com e-mail já existente', () => {
        cy.intercept({
            method: 'POST',
            path: '/api/users'    
        },{
            statusCode: 422,
            fixture: 'cadastro-email-existente.json'

        }).as('postUsers')
        
        cy.visit('register')
        cy.get('[placeholder=Username]').type('LeonardoMenezes')
        cy.get('[placeholder=Email]').type('leonardormenezes83@gmail.com')
        cy.get('[placeholder=Password]').type('bootcamp@123')
        cy.get('.btn').click()
    
        cy.contains('email has already been taken').should('be.visible')
        //cy.contains('username has already been taken').should('not.be.visible')

    });
    it('Cadastro com usuário já existente', () => {
        cy.intercept({
            method: 'POST',
            path: '/api/users'    
        },{
            statusCode: 422,
            fixture: 'cadastro-usuario-existente.json'

        }).as('postUsers')
        
        cy.visit('register')
        cy.get('[placeholder=Username]').type('LeonardoMenezes')
        cy.get('[placeholder=Email]').type('leonardormenezes83@gmail.com')
        cy.get('[placeholder=Password]').type('bootcamp@123')
        cy.get('.btn').click()
    
        //cy.contains('email has already been taken').should('not.be.visible')
        cy.contains('username has already been taken').should('be.visible')

    });
});