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
    }
    realizarLead() {
        cy.get(el.btnLead).click()
        cy.get(el.lbnLeadname).type('Teste Lead')
        cy.get(el.lbnLeademail).type('testelead@mailinator.com')
        cy.get(el.lbnLeadcel).type('11948986867')
        cy.get(el.lbnLeadtel).type('1194898686')
        cy.get(el.lbnLeadassunto).type('Teste enviar um lead e este e o assunto')
        cy.get(el.btnLeadenviar).click()
        cy.get(el.alertMsgleadtitulo)
        .contains('Recebemos as suas informações. Muito obrigado!')
        cy.get(el.alertMsglead)
        .contains('Recebemos as suas informações. Muito obrigado!')
        cy.get(el.alertMsglead)
        .contains('Em breve entraremos em contato.')
        cy.get(el.btnconfLead).click()
    }

}

export default new Home(); 