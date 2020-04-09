var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"; //mudando o nome do titulo

// Criando a variavel paciente utilizando o querySelector do document + classe:
var paciente = document.querySelector("#primeiro-paciente");

//Criando a variavel tdPeso utilizando o querySelector da variavel paciente + classe:
var tdPeso = paciente.querySelector(".info-peso");      //em vez de document, eu utilizo o o paciente..
var peso = tdPeso.textContent;                          //com o .textContent eu consigo pegar o valor do conteudo

//Criando a variavel tdAltura utilizando o querySelector da variavel paciente + classe:
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

//fazendo o calculo do imc:
var imc = peso / (altura*altura);

//Criando a variavel tdImc utilizando o querySelector da variavel paciente + classe:
var tdImc = paciente.querySelector(".info-imc");

//verificacao do pesso e da altura
var pesoEhValido = true;
var alturaEhValido = true;

if (peso <= 0 || peso >= 1000){
    pesoEhValido = false;
}
if (altura <= 0 || altura >= 3){
    alturaEhValido = false;
}

if (pesoEhValido && alturaEhValido){
    tdImc.textContent = imc; //mudando o valor do imc
}
else if(pesoEhValido && !alturaEhValido){
    tdImc.textContent = "altura invalida";
}
else if(!pesoEhValido && alturaEhValido){
    tdImc.textContent = "peso invalido";
}
else tdImc.textContent = "peso e altura invalidos";

    




