

tabela('Eduardo', 'CPF', 'RG', 'DN');


function tabela(...arguments) {

    //busca o seletor table no DOM//
    let table = document.querySelector('table');

    // Cria a thead e a tr na table//
    let thead = document.createElement('thead');
    let tr = document.createElement('tr')
    
    thead.appendChild(tr);
    
    // Repassa a funcao celula para cada item repassado no paramentro arguments//
    arguments.forEach(celula);
    

    
    function celula(item) {
        let th = document.createElement('th');

        // estilos da tabela e das celulas 
        table.style.margin = 'auto auto'
        th.style.border = '2px solid black';
        th.style.fontSize = '16px';
        th.style.padding = '1em 2em'

        tr.appendChild(th)
        th.textContent = item
        console.log(item)        
    }
    
    
    
    table.appendChild(thead)
}