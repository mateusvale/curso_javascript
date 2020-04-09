var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// utilizando o querySelector do paciente.
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");      //em vez de document, eu utilizo o o paciente..
var peso = tdPeso.textContent;                          //com o .textContent eu consigo pegar o valor do conteudo

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(peso);
console.log(altura);

var imc = peso / (altura*altura);
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;


