/// <reference types="cypress" />

import Carrinho from '../support/pages/carrinho';

describe ('Validar Carrinho', () => {

    it('Acessar um carrinho com sucesso', () => {
        //Acessando produto
        Carrinho.acessarProduto();
        Carrinho.inserirProdutocarrinho(); 
    });
    it('Acessar um carrinho com sucesso combo', () => {
        //Acessando produto
        Carrinho.acessarProdutocombo();
        Carrinho.inserirProdutocarrinhocombo(); 
    });
    
})