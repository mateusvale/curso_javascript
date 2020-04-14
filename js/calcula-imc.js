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

//fazendo o calculo do imc utilizando a funcao calculaImc:
var imc = calculaImc(peso,altura);

//Criando a variavel tdImc utilizando o querySelector da variavel pacientes + classe:
var tdImc = pacientes[i].querySelector(".info-imc");

//verificacao do peso e da altura
var pesoEhValido = validaPeso(peso);
var alturaEhValido = validaAltura(altura);

if (pesoEhValido && alturaEhValido){
    tdImc.textContent = imc //mudando o valor do textContent do tdImc para o valor do calculo do imc (caso esteja nos parametros certos)
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


function calculaImc (peso,altura){
    var imc = 0;
    imc =  peso / (altura*altura);
    return imc.toFixed(2); //Esse .toFixed(2) fara com que tenha apenas duas casas decimais.
}

function validaPeso(peso){
    if (peso <= 0 || peso >= 1000){
        return false;
    }
    else{
        return true;
    }
}

function validaAltura(altura){
    if (altura <= 0 || altura >= 3){
        return false;
    }
    else{
        return true;
    }
}