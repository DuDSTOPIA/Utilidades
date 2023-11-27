import {constroi_Form_e_cabecalho_Tabela} from './tabela.js'
import {constroi_corpo_tabela} from './tabela.js'

/* Aqui constroi o cabeçalho e os parametros sao os nomes dos inputs*/
constroi_Form_e_cabecalho_Tabela('Nome', 'Sobrenome', 'Idade', 'CPF', 'RG');



form.addEventListener('submit', event => {
    event.preventDefault();
    constroi_corpo_tabela('Nome', 'Sobrenome', 'Idade', 'CPF', 'RG')
})




