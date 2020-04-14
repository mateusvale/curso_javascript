//iremos precisar selecionar todos os pacientes:
var pacientes = document.querySelectorAll(".paciente");

//fazer um lopp para pegar todos os pacientes:
pacientes.forEach(function(paciente){
    //evento de listener de mouse - duplo click:
    paciente.addEventListener("dblclick", function(){
        //remocao de tag
        this.remove();
    });
})