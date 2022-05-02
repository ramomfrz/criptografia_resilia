var textoentrada = document.getElementById('entrada')
var select = document.getElementById('select');
var opcaoValor = select.options;
var desativada = document.getElementById('disable')
var codificarMsg = document.getElementById('codificar')
var decodificarMsg = document.getElementById('decodificar')
var botaosubmit = document.getElementById('submit')
var resultadoMsg = document.getElementById('arearesultado')

select.addEventListener('change', function () {     // Função para ativar/desativar a caixa da opção do cesar  
    if (opcaoValor.selectedIndex == 1) {
        desativada.disabled = false
    }
    else {
        desativada.disabled = true
    }
})

codificarMsg.addEventListener('click', function () {
    botaosubmit.value = "CODIFICAR MENSAGEM"
})

decodificarMsg.addEventListener('click', function () {
    botaosubmit.value = "DECODIFICAR MENSAGEM"
})

botaosubmit.addEventListener('click', (function (eve) {
    eve.preventDefault();
    result(textoentrada.value)
}))

function result(texto) {
    resultadoMsg.value = texto

}