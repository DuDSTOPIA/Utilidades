import {constroi_Form_e_cabecalho_Tabela} from './tabela.js'
import {constroi_corpo_tabela} from './tabela.js'

constroi_Form_e_cabecalho_Tabela('Nome', 'CPF', 'RG', 'Nascimento');


form.addEventListener('submit', event => {
    event.preventDefault();
    constroi_corpo_tabela('nome', 'cpf', 'rg', 'nascimento')
})



