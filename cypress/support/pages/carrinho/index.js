const e = require('./elements').ELEMENTS;

class Carrinho {

    acessarProduto() {
        cy.visit('https://dev.totvs.store/br/produto/assinatura-digital-by-vertsign.html')
    }

    acessarProdutocombo() {
        cy.visit('https://dev.totvs.store/br/produto/gestao-de-codigos-fonte-by-itup.html')
    }

    inserirProdutocarrinho() {
        cy.wait(1500)
        .get(e.btnAdicinacarrinho)
        .should('be.visible')
        .should('be.enabled')
        .click(); 
    }
    inserirProdutocarrinhocombo() {
        cy.wait(2000)
        .get(e.btnBundle)
        .should('be.visible')
        .should('be.enabled')
        .click(); 
        cy.get(e.btnAdicinacarrinho)
        .should('be.visible')
        .should('be.enabled')
        .click(); 

    }
}

export default new Carrinho(); 