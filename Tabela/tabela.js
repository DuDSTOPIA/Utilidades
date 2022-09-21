

// cria o titulo da tabela apenas
export function constroi_Form_e_cabecalho_Tabela(...args) {

    let table = document.querySelector('table');

    let thead = document.createElement('thead');
    let tr = document.createElement('tr')
    
    thead.appendChild(tr);
    
    // Repassa a funcao celula para cada item adicionado no paramentro arguments//
    args.forEach(criaForm)
    args.forEach(celula);



    // Cria as celulas do cabeçalho da tabela //
    function celula(item) {
        let th = document.createElement('th');

        // estilos da tabela e das celulas 
        table.style.margin = 'auto auto'
        th.setAttribute('style', `border: 1px solid blue; 
                                    font-Size: 20px; 
                                    padding: 1em 2em; 
                                    background-Color: lightgray;`
        )
        
        tr.appendChild(th)
        th.textContent = item
                
    }

    
    // cria formulario
    function criaForm(item) {
        let form = document.querySelector('form');
        let divInput = document.createElement('div');
        
        
        let label = document.createElement('label');
        let input = document.createElement('input');
        let quebra_linha = document.createElement('br')
        

        
        // adicionando seletor class, o for em label, type e require//

        let stringClassOrId = item.replace(' ', '_')
        console.log(stringClassOrId)

        divInput.setAttribute('class', 'infoInput');
        divInput.appendChild(label);

        label.setAttribute('class', 'tituloInput');
        label.setAttribute('for', `${stringClassOrId.toLowerCase()}`);
        label.innerHTML = `${item}: `;

        divInput.appendChild(quebra_linha);
        divInput.appendChild(input);

        input.setAttribute('type', 'text');
        input.setAttribute('class', `${stringClassOrId.toLowerCase()}`);
        input.setAttribute('id', `${stringClassOrId.toLowerCase()}`);
        input.setAttribute('required', '');
        
        //adicionando os estilos Form
        form.setAttribute('style', `display: flex; 
        margin: 3em 3em; 
        justify-Content: space-around;`)
        label.setAttribute('style',`color:blue; 
        font-Size:20px; font-Weight: 500`);                           
                                    
                                    
                                    
    form.appendChild(divInput);
                                    
                                    

    }
    // adicionando atributos e style do botao // 
    
    let $wrapper = document.querySelector('form')
    $wrapper.insertAdjacentHTML('beforeend', "<button type='submit' class='button_Submit'> Incluir</button>");
    let button = document.querySelector('.button_Submit');
    button.setAttribute('style', `color: blue; font-size: 13px; 
                                    font-Weight: 550; 
                                    width: 6em;`)
    
    table.appendChild(thead)

}



export function constroi_corpo_tabela(...args) {

    

    let table = document.querySelector('table');

    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr')
    
    tbody.appendChild(tr);
    
    // Repassa a funcao celula para cada item repassado no paramentro arguments//
    args.forEach((item) => {
        let stringClassOrId = item.replace(' ', '_')
        let seletor = `.${stringClassOrId.toLowerCase()}`;
        let retorno = document.querySelector(seletor);
        celula(retorno)
    })
        
    function celula(item) {

        let td = document.createElement('td');

        // estilos da tabela e das celulas 
        table.style.margin = 'auto auto'
        td.setAttribute('style', `border: 1px solid blue; 
                                    font-size: 16px; 
                                    padding: 1em 2em`);

        tr.appendChild(td)
        td.textContent = item.value;
        item.value = '';
         
    }
       
    table.appendChild(tbody)
    let primeiroForm = (args[0])
    let seletor = `.${primeiroForm.toLowerCase()}`
    let retorno = document.querySelector(seletor);
    retorno.focus();
    
}