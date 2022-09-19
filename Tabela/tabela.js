//

// cria o titulo da tabela apenas
export function tabelaCabeçalho(...args) {

    
    let table = document.querySelector('table');

    
    let thead = document.createElement('thead');
    let tr = document.createElement('tr')
    
    thead.appendChild(tr);
    
    
    // Repassa a funcao celula para cada item adicionado no paramentro arguments//
    args.forEach(criaForm)
    args.forEach(celula);

    // Criei um jeito de fazer o formulario junto com o cabeçalho da tabela, 
    //agora preciso criar a iteração



    
    // Cria as celulas do cabeçalho da tabela //
    function celula(item) {
        let th = document.createElement('th');

        // estilos da tabela e das celulas 
        table.style.margin = 'auto auto'
        th.style.border = '1px solid black';
        th.style.fontSize = '20px';
        th.style.padding = '1em 2em'
        th.style.backgroundColor = 'lightgray'

        tr.appendChild(th)
        th.textContent = item
        console.log(item)        
    }

    

    function criaForm(item) {
        let form = document.querySelector('form');
        
        let divInput = document.createElement('div');
        let label = document.createElement('label');
        let input = document.createElement('input');

        divInput.setAttribute('class', 'infoInput');
        divInput.appendChild(label)
        label.setAttribute('class', 'tituloInput');
        label.setAttribute('for', item)
        label.innerHTML = item;
        divInput.appendChild(input)
        input.setAttribute('type', 'text')
        input.setAttribute('require', '')

        form.style.display = 'flex'
        label.style.fontSize = '20px'
        label.style.fontWeight = '500'

        form.appendChild(divInput)
    }


    
    table.appendChild(thead)
}



export function tabelaCorpo(...args) {

    
    let table = document.querySelector('table');

    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr')
    
    tbody.appendChild(tr);
    
    // Repassa a funcao celula para cada item repassado no paramentro arguments//
    args.forEach(celula);
        
    function celula(item) {
        let td = document.createElement('th');

        // estilos da tabela e das celulas 
        table.style.margin = 'auto auto'
        td.style.border = '1px solid black';
        td.style.fontSize = '16px';
        td.style.padding = '1em 2em'

        tr.appendChild(td)
        td.textContent = item.value;
        console.log(item) 
    }
       
    table.appendChild(tbody)
}