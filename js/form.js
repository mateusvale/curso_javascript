//criando uma variavel a partir do document.querySelector:
var botaoAdicionar = document.querySelector("#adicionar-paciente");

//criando um evento a partir do click do botao
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value; //estou pegando o name de cada input e adicionando o .value - isso fara com que eu consiga pegar o valor do input
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //para que possamos criar um paciente com esses dados, precisamos criar uma td (relativa ao novo paciente) e 5 novas tds (nome, peso, altura, gordura e imc)

    //criacao de uma tr
    var pacienteTr = document.createElement("tr");

    //criacao das 5 tds:
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //colocando os valores nas tds:
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura); //utilizando essa funcao do arquivo calcula-imc.js

    //precisamos colocar as tds criadas dentro da tr. Logo precisamos utilizar os seguintes codigos:
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd)

    //como iremos entao colocar essa tr na tabela? Iremos tbm utilizar o append child:
    var tabela = document.querySelector("#tabela-pacientes"); //pegamos o tdbody onde tem a tabela contendo todos os tr`s
    tabela.appendChild(pacienteTr);

});