declare namespace Cypress {
    interface Chainable {

    /** Comando que utiliza o '@gerarToken' para realizar login.
    * @example: cy.login()
    */
        login(): void

    /** Comando responsável em gerar do token.
    * @example: cy.gerarToken()
    */
         token(): void
    }
}