/// <reference types="cypress" />

import Home from '../support/pages/home';

describe ('Validar Home', () => {

it('Acessar a home com sucesso', () => {
    //Acessando home
    Home.acessarStore();
});
it('Realizar um pesquisa com sucesso', () => {
    //Acessando home
    Home.acessarStore();
    Home.realizarPesquisa();
});
it('Realizar um pesquisa erro', () => {
    //Acessando home
    Home.acessarStore();
    Home.realizarPesquisaerro();
});
it.only('Realizar um lead', () => {
    Home.acessarStore(); 
    Home.acessarLead(); 
    Home.realizarLead();    
})


})