const e = require('./elements').ELEMENTS;

class Carrinho {

    acessarProduto() {
        cy.visit('https://dev.totvs.store/br/produto/assinatura-digital-by-vertsign.html')
    }
    inserirProdutocarrinho() {
        cy.wait(1500)
        .get(e.btnAdicinacarrinho)
        .should('be.visible').and('be.enabled')
        .click(); 
    }
    acessarProdutocombo() {
        cy.visit('https://dev.totvs.store/br/produto/gestao-de-codigos-fonte-by-itup.html')
    }
    inserirProdutocarrinhocombo() {
        cy.wait(2000)
        .get(e.btnBundle)
        .should('be.visible').and('be.enabled')
        .click(); 
        cy.get(e.btnAdicinacarrinho)
        .should('be.visible').and('be.enabled')
        .click(); 
    }
    acessarProdutorange() {
        cy.visit('https://dev.totvs.store/br/produto/parceiros-app-totvs-meu-checklist.html')
    }
    inserirProdutocarrinhorange() {
    cy.wait(2000)
    cy.get(e.btnRange)
    .should('be.visible').and('be.enabled')
    .click();
    cy.wait(2000)
    //cy.get('#modal-content__qty').click();
    }
}
export default new Carrinho(); 