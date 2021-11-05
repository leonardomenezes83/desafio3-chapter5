/// <reference types = "cypress" />

import articles from "../support/pages/articles";

describe('Article', () => {

    beforeEach(() => {
       cy.login()
       cy.visit('/')
    });
        
    it('Cadastro de novo artigo', () => {
        
        articles.acessarFormulario()
        articles.preencherFormulario()
        articles.submeterFormulario()
        articles.VerificarArtigo()

    });

});