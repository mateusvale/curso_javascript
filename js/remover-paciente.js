var pacientes = document.querySelectorAll(".paciente");

//iremos precisar pegar a tabela
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("fadeOut");   //iremos criar a classe no css

    setTimeout(function(){                      //iremos criar essa funcao para o apagamento ocorrer mais lentamente

        var alvoEvento = event.target;          // com o .target, iremos conseguir pegar a tag q apertarmos
        var paiDoAlvo = alvoEvento.parentNode;  // nao queremos apagar a tag do target, e sim o pai, que eh a linha
        paiDoAlvo.remove();                     // logo iremos apagar a linha da tabela. 

    }, 500);

    

    //podemos remover a linhas utilizando apenas uma linha de codigo:
    //event.target.parentNode.remove();
})