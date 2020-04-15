var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){

    console.log("fui apertado");

    var xhr = new XMLHttpRequest(); //objeto responsavel por fazer requisicoes HTTP

    //metodo open e requisicao GET - isso eh equivalente a verificacao se o endereco esta correto. Apenas isso.
    xhr.open ("GET","https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        if (xhr.status == 200){ //status da requisicao.
            //O arquivo que esta nesta pagina esta num formato JSON
            var resposta = xhr.responseText; // resposta ira conter o testo do xhr
        
            //ira transformar o JSON em objetos, o qual eh muito mais facil de se manipular
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
        })
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
        }

        
    
    })

    xhr.send();


})