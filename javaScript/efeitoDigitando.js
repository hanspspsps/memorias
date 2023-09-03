const tituloComEfeito = document.querySelector('.efeito-digitacao');

const textoNoDataValue = document.querySelector('.efeito-pontinhos').getAttribute('data-value');
const tituloComEfeitoPontinhos = document.querySelector('.efeito-pontinhos');

const pontinhos = "...";

const atraso = 500;

var contadorDeLetras = 0;

digitarTexto();

function digitarTexto() {

    if (contadorDeLetras < textoNoDataValue.length) {
        tituloComEfeito.textContent += textoNoDataValue.charAt(contadorDeLetras);
        contadorDeLetras++;
        setTimeout(digitarTexto, 200);
    } else {    
        digitarPontinhos()
    }
}

var digitar = true 
var apagar = false
var i = 0

function verificarTamanhoDaString() {
    
    if (digitar) {
        setTimeout(digitarPontinhos, atraso)
    }
    if (apagar) {
        setTimeout(apagarPontinhos, atraso)
    }
}

function apagarPontinhos() {

    let texto = tituloComEfeitoPontinhos.textContent;
    let numeroDeCaracteresApagados = 1;

    let novoTexto = texto.slice(0, -numeroDeCaracteresApagados);

    tituloComEfeitoPontinhos.textContent = novoTexto;

    i--;
        
    if (i == 0) {
        apagar = false
        digitar = true
    }

    verificarTamanhoDaString();
}

function digitarPontinhos() {
    tituloComEfeitoPontinhos.textContent += pontinhos.charAt();
    i++;

    if (i == 3) {
        apagar = true
        digitar = false
    }

    verificarTamanhoDaString();
}
