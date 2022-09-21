import {constroi_Form_e_cabecalho_Tabela} from './tabela.js'
import {constroi_corpo_tabela} from './tabela.js'

constroi_Form_e_cabecalho_Tabela('Uh', 'Classe', 'Valor Single', 'Valor Double', 'Valor Triple');


form.addEventListener('submit', event => {
    event.preventDefault();
    constroi_corpo_tabela('Uh', 'Classe', 'Valor Single', 'Valor Double', 'Valor Triple')
})



