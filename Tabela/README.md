
<h1> CRIAÇÃO DE TABELA (VERTICAL POR ENQUANTO) em JS </h1>

<p> Durante meus cursos, sempre acabo me esbarrando com a nescessidade de criar tabelas para diferentes finalidades. Por isso criei esse programa pra facilitar minha vida quando precisar de uma. Eu sei que há varias frameworks ou tutoriais no youtube pra fazer isso, mas uma vez que eu criar, vou ter o conhecimento nescessario para alterar e manipular essa ferramenta quando eu quiser. </p>

# Modo de usar:

1. <h3> First thisgs first: </h3>
    <p> - Coloca o arquivo na pasta do projeto e importa as funções. </p>
    <p> - Depois, crie uma tag "form" e uma tag "table", pois essas, seráo as tags buscadas pela função para saber onde criar o formulario e a tabela. </p>
   
   
2. O arquivo tem basicamente duas funções:

  - constroi_Form_e_cabecalho_Tabela() que cria o formulario e o titulo da tabela. A lista de inputs do formulario e de titulo da tabela, são os parametros da função.
   
     Ex: constroi_Form_e_cabecalho_Tabela('Nome', 'CPF', 'RG', 'DataNasc')

  > [!TIP]
  > Lembrando que esse parametro é um array, entao pode ser quantos parametros quizer, mas eu configurei o css padrao para o tamanho da tabela de 4 a 6 parametros. Se for usar mais que isso, observa se será nescessario diminuir um pouco as fontes e espassamentos. o arquivo é pequeno da pra achar facil, são 3:   Form, botao e celulas. </p>

  > [!important]
  > Uma ultima coisa sobre a primeira função, eu nao adicionei nenhum tipo de regra pra maiuscula ou minuscula. Do jeito que for escrito nos parametros vai aparecer no form e no titulo da tabela. Minha opinião atual é que essa é uma questão do contexto de uso da tabela. Talvez altere isso futuramente.

  - constroi_corpo_tabela(): Faz com que tudo que for digitado no formulario seja incluido nas celulas do corpo da tabela enquanto a tabela vai sendo criada.

  <p> Como você pode ver no arquivo main.js, a primeira função é só importar e colocar os parametros. Mas essa segunda, você coloca em um addEventListener, os parametros são os mesmos. Só na base do Ctrl + C, Ctrl + V; Não importa o capslock ativo ou nao, por padrao ele converte pra minuscula pra usar como id e class, lembra disso quando for estilizzar.</p>

