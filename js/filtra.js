var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value); //console.log(campoFiltro.value);

    //precisamos pegar os nomes dos pacientes:
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){

        for (var i = 0; i < pacientes.length; i++){
            var tdNome = pacientes[i].querySelector(".info-nome");
            var nome = tdNome.textContent;

            //para usar expressoes regulares:
            var expressao = new RegExp(this.value, "i");    // "i" eh nao caseSensitive

            if (!expressao.test(nome)){                        //se o nome digitado nao for igual ao nome do paciente
                pacientes[i].classList.add("invisivel");    // ira criar a classe no css que ira apagar o display
            }else{
                pacientes[i].classList.remove("invisivel"); //ira remover a classe, fazendo com que a linha apareca
            }
        }
    }else{
        for (var i = 0; i < pacientes.length; i++){
            pacientes[i].classList.remove("invisivel");
    }}





})