var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"; //mudando o nome do titulo com .textContent

// Criando a variavel paciente utilizando o querySelector do document + id:
//var paciente = document.querySelector("#primeiro-paciente"); #Nesse caso, so ira pegar o primeiro paciente. Precisamos pegar todos os pacientes.

// Criando a variavel paciente utilizando o querySelectorAll do document + classe. 
//Isso fara com que seja criado um array contendo todos as classes com nome paciente:
var pacientes = document.querySelectorAll(".paciente");

//criando um variavel com o tamanho do array
var numeroPacientes = pacientes.length;

//criar um loop for para que seja utilizado todos os pacientes:
for (var i=0 ; i < numeroPacientes; i++){

//Criando a variavel tdPeso utilizando o querySelector da variavel pacientes + classe:
var tdPeso = pacientes[i].querySelector(".info-peso");      //em vez de document, eu utilizo o o pacientes[i]..
var peso = tdPeso.textContent;                          //com o .textContent eu consigo pegar o valor do conteudo

//Criando a variavel tdPeso utilizando o querySelector da variavel pacientes + classe:
var tdPeso = pacientes[i].querySelector(".info-peso");      //em vez de document, eu utilizo o pacientes[i]..
var peso = tdPeso.textContent;                          //com o .textContent eu consigo pegar o valor do conteudo

//Criando a variavel tdAltura utilizando o querySelector da variavel paciente + classe:
var tdAltura = pacientes[i].querySelector(".info-altura");
var altura = tdAltura.textContent;

//fazendo o calculo do imc:
var imc = peso / (altura*altura);

//Criando a variavel tdImc utilizando o querySelector da variavel pacientes + classe:
var tdImc = pacientes[i].querySelector(".info-imc");

//verificacao do peso e da altura
var pesoEhValido = true;
var alturaEhValido = true;

if (peso <= 0 || peso >= 1000){
    pesoEhValido = false;
}
if (altura <= 0 || altura >= 3){
    alturaEhValido = false;
}

if (pesoEhValido && alturaEhValido){
    tdImc.textContent = imc.toFixed(2); //mudando o valor do textContent do tdImc para o valor do calculo do imc (caso esteja nos parametros certos)
}
else if(pesoEhValido && !alturaEhValido){
    tdImc.textContent = "altura invalida";
    pacientes[i].classList.add("paciente-invalido");
}
else if(!pesoEhValido && alturaEhValido){
    tdImc.textContent = "peso invalido";
    pacientes[i].classList.add("paciente-invalido");
}
else {
    tdImc.textContent = "peso e altura invalidos";
    pacientes[i].classList.add("paciente-invalido");
}}

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

    //precisamos colocar as tds criadas dentro da tr. Logo precisamos utilizar os seguintes codigos:
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    //como iremos entao colocar essa tr na tabela? Iremos tbm utilizar o append child:
    var tabela = document.querySelector("#tabela-pacientes"); //pegamos o tdbody onde tem a tabela contendo todos os tr`s
    tabela.appendChild(pacienteTr);

});


