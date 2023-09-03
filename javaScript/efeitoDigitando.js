const primeiroTitulo = document.getElementById("first-title");
const segundoTitulo = document.getElementById("second-title");

digitarTexto(primeiroTitulo, "Faltam");

var titulosDigitados = primeiroTitulo.textContent.length == 6 && segundoTitulo.textContent.length == 16; 

console.log(titulosDigitados)


function digitarTexto(elemento, texto) {
    let i = 0;

    const intervalo = setInterval(() => {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
            
            if (segundoTitulo.textContent.length < "pra gente se ver".length) {
                digitarTexto(segundoTitulo, "pra gente se ver");
            }
            
            let titulosDigitados = segundoTitulo.textContent.length == "pra gente se ver".length;
            
            if (titulosDigitados) {
                verificarString();
            }
        }
    }, 100);
}

const pontinhos = "...";
const atraso = 500;

var digitar = true;
var apagar = false;
var contador = 0;

function verificarString() {
    if (digitar) {
        setTimeout(digitarPontinhos, atraso)
    }
    if (apagar) {
        setTimeout(apagarPontinhos, atraso)
    }
}

function digitarPontinhos() {
    segundoTitulo.textContent += pontinhos.charAt();

    contador++;

    if (contador == 3) {
        apagar = true;
        digitar = false;
    }

    verificarString();
}

function apagarPontinhos() {
    let numeroDeCaracteresApagados = 1;

    let texto2 = segundoTitulo.textContent.slice(0, -numeroDeCaracteresApagados);

    segundoTitulo.textContent = texto2;

    contador--;
        
    if (contador == 0) {
        apagar = false
        digitar = true
    }

    verificarString();
}
