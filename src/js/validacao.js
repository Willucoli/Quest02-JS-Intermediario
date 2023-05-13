
function enviar(){

    const validacao = [document.getElementById("nome"),document.getElementById("email"),document.getElementById("telefone"),document.getElementById("mensagem")]
    const validacaoObrigadoria = [document.getElementById("nomeObrigadorio"),document.getElementById("emailObrigadorio"),document.getElementById("numeroObrigadorio"),document.getElementById("msgObrigadorio")]

    for(let i = 0 ; i <validacao.length ; i++){
        
        let value= validacao[i].value;

        if(value !== ""){
            validacao[i].classList.add("obrigatorioPrenchido")
            validacaoObrigadoria[i].classList.remove("campoAparecer")

        }else if(value === ""){
            validacaoObrigadoria[i].classList.add("campoAparecer")
            validacao[i].classList.remove("obrigatorioPrenchido")
            validacao[i].classList.add("obrigatorioNaoPrenchido")
        }

    }

}
