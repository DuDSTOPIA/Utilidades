import {tabelaCabeçalho} from './tabela.js'
import {tabelaCorpo} from './tabela.js'

let nome = document.querySelector('#nome');
let cpf = document.querySelector('#cpf');
let rg = document.querySelector('#rg');
let nascimento = document.querySelector('#nascimento');

let form = document.querySelector('#form');

tabelaCabeçalho('UH', 'Classe', 'Modelo', 'Valor');

form.addEventListener('submit', event => {
    event.preventDefault();
    tabelaCorpo(nome, cpf, rg, nascimento)
    console.log(nome)
})