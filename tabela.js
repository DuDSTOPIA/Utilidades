let seletor = document.querySelector('table')





tabela()


function tabela() {

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tr = document.createElement('tr')
    let th = document.createElement('th')

    table.style.border = '2px solid black'
    table.style.fontSize = '16px';

    table.appendChild(thead);
    thead.appendChild(tr)
    tr.appendChild(th)

    th.textContent = 'texto'

    seletor.appendChild(table)
}