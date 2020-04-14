//criando uma variavel a partir do document.querySelector:
var botaoAdicionar = document.querySelector("#adicionar-paciente");

//criando um evento a partir do click do botao
botaoAdicionar.addEventListener("click",function(event){

    //primeiro precisamos tirar o acao default do botao, que eh enviar e fazer um refresh na pagina.
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    //Extraindo as informacoes do paciente do form utilizando a funcao obtemPacienteDoFormulario com o form como parametro:
    var paciente = obtemPacienteDoFormulario(form);

       //para que possamos criar um paciente com esses dados, precisamos criar uma td (relativa ao novo paciente) e 5 novas 
    //tds (nome, peso, altura, gordura e imc). Nesse caso, iremos utilizar a funcao montaTr com paciente como parametro:
    var pacienteTr = montaTr (paciente);
    
    
    //precisamos ver se esse paciente eh valido:
    var erros = validaPaciente(paciente);

    if (erros.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }

    //como iremos entao colocar essa tr na tabela? Iremos tbm utilizar o append child:
    var tabela = document.querySelector("#tabela-pacientes"); //pegamos o tdbody onde tem a tabela contendo todos os tr`s
    tabela.appendChild(pacienteTr);

    form.reset();
       

});

//Funcao para extrair as informacoes do paciente do form
function obtemPacienteDoFormulario(form){
    //criando um ojeto
    var paciente = {
        nome: form.nome.value, //estou pegando o name de cada input e adicionando o .value - isso fara com que eu consiga pegar o valor do input
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value) //utilizando essa funcao do arquivo calcula-imc.js
    }

    return paciente; //retornando o objeto paciente
}

//Funcao para criacao de uma tr. Preciso usar como parametro o objeto paciente:
function montaTr (paciente){

    //criacao de uma tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //criacao das 5 td's utilizando a funcao montatd.
    //precisamos colocar as tds criadas dentro da tr. Logo precisamos utilizar os seguintes codigos:
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    
    return pacienteTr;  //precisamos retornar a tr
}

//Funcao para criacao de td. Estamos colocando essa tr com uma classe igual das outras tr. Utilizando o objeto paciente como dado.
function montaTd (dado, classe){
    var td = document.createElement("td"); //criacao da td
    td.textContent = dado;                 //adicionando valores na td criada.
    td.classList.add(classe);              //adicionando a classe

    return td;

}

function validaPaciente(paciente){

    var erros = [];

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}
