const el = require('./elements').ELEMENTS;

class Home {

    acessarStore() {
        cy.visit('https://dev.totvs.store/');
    }
    realizarPesquisa(){
        cy.get(el.btnBusca)
        .type('Assinatura Digital by Vertsign{enter}')
        cy.contains('h2', 'Assinatura Digital by Vertsign')
    }
    realizarPesquisaerro(){
        cy.get(el.btnBusca)
        .type('BTS{enter}')
        cy.get(el.alertMsg)
        .contains('Sentimos muito, mas não encontramos a página que você tentou acessar. O que pode ter acontecido?')
    }
    acessarLead(){
        cy.get(el.btnBusca)
        .type('Secretaria Digital by doc.Xpress{enter}')
        cy.contains('h2', 'Secretaria Digital by doc.Xpress').click()
        cy.wait(2000)
        .get(el.btnLead)
        .should('be.visible')
        .click()
    }
    realizarLeaddadosbrancos() {
        cy.wait(3000).get(el.formLead).should('be.visible')
        cy.get(el.btnLeadenviar).should('be.visible').click()
        cy.get(el.formLead).find('.mage-error').should('have.length', 8)
        cy.contains('Este é um campo obrigatório.').should('have.length', 1)
        cy.get(el.btnFechalead).first('be.visible').click()
    }
    realizarLead() {
        cy.get(el.lbnLeadname).type('Teste Lead')
        cy.get(el.lbnLeademail).type('testelead@mailinator.com')
        cy.get(el.lbnLeadcel).type('11948986867')
        cy.get(el.lbnLeadtel).type('1194898686')
        cy.get(el.lbnLeadassunto).type('Teste enviar um lead e este e o assunto')
        cy.route('POST', '**/hubspot/lead/').as('postLead');
        cy.get(el.btnLeadenviar).click()
        cy.wait('@postLead').then((xhr) => {

            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('success').eq(true);
            expect(xhr.response.body.id).is.not.null;

        })
        cy.get(el.alertMsgleadtitulo).contains('Recebemos as suas informações. Muito obrigado!')
        cy.get(el.alertMsglead).eq(2).contains('Em breve entraremos em contato.')
        cy.get(el.btnconfLead).click()
    }
}

export default new Home(); 