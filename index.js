var textoentrada = document.getElementById('entrada')
var select = document.getElementById('select');
var opcaoValor = select.options;
var desativada = document.getElementById('disable')
var codificarMsg = document.getElementById('codificar')
var decodificarMsg = document.getElementById('decodificar')
var botaosubmit = document.getElementById('submit')
var resultadoMsg = document.getElementById('arearesultado')

select.addEventListener('change', function () {
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
    if (select.value == "base64") {

        if (codificarMsg.checked && true) {
            result64(textoentrada.value)
        }
        if (decodificarMsg.checked && true) {
            descript64(textoentrada.value)
        }
    }
    if (select.value == "cesar" && desativada.value > 0) {
        if (codificarMsg.checked && true) {
            cifraCesarCod(+desativada.value);
        }
        if (decodificarMsg.checked && true) {
            resultadoMsg.value = cifraDecod(textoentrada.value, +desativada.value)
        }
    }
}))

function result64(texto) {
    var resultCripto = btoa(texto)
    resultadoMsg.value = resultCripto
}

function descript64(texto) {
    var resultDescript = atob(texto)
    resultadoMsg.value = resultDescript
}

function cifraCesarCod(increment) {
    var string = textoentrada.value;
    var string1 = string.toUpperCase();
    var msgCifrada = "";
    var resto = 26 - increment;

    for (var i = 0; i < string1.length; i++) {
        var convertAsc = string1[i].charCodeAt();
        var convert1 = String.fromCharCode(convertAsc + increment)
        var convert2 = String.fromCharCode(convertAsc - resto);
        if (convertAsc >= 65 && convertAsc < 65 + resto) {
            msgCifrada += convert1;
        } else if (convertAsc >= 65 + resto && convertAsc <= 90) {
            msgCifrada += convert2;
        } else {
            msgCifrada += string1[i];
        }
    }
    return resultadoMsg.value = msgCifrada
}

function cifraDecod(arr, key) {
    arr = arr.split('')
    return arr.map((c) => {
        let code = c.charCodeAt();
        if (code >= 65 && code <= 90) {
            return (code - 65 - key < 0) ? String.fromCharCode(((code - 65 - key + 26) % 26) + 65) : String.fromCharCode(((code - 65 - key) % 26) + 65)
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 - key + 26) % 26) + 97)
        } else return c
    }).join('')
}