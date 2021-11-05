const el = require('./elements').ELEMENTS

    const artName = 'Nome do Artigo' + new Date().getTime()
    const artDescription = 'Descrição do artigo' 
    const artBody = 'Corpo xpto'


  
    class Articles {

    acessarFormulario() {
        cy.get(el.linkNovoArtigo).click()

    }

    preencherFormulario() {
        cy.get(el.inputTitle).type(artName)
        cy.get(el.inputDescription).type(artDescription)
        cy.get(el.inputBody).type(artBody)
        cy.get(el.inputTags).type('cypress')

    }

    submeterFormulario() {
        cy.contains('button','Publish Article').click()

    }

    VerificarArtigo(){
        cy.contains(artName).should('be.visible')

    }

}

export default new Articles()