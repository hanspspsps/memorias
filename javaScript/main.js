const dataAtual = new Date()
const dataFinal = "2023-11-02"

const dia = String(dataAtual.getDate()).padStart(2, '0')
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0')
const ano = dataAtual.getFullYear()

const dataAtualFormatada = `${ano}-${mes}-${dia}` 
// Fotmato ano/mês/dia

const diferencaEmDias = calcularDiferencaEmDias(dataAtualFormatada, dataFinal)
/* console.log(typeof diferencaEmDias) */

function calcularDiferencaEmDias(data1, data2) {

    let dataInicial = new Date(data1)
    let dataFinal = new Date(data2)
    /* console.log(dataFinal, dataInicial) */

    let diferencaEmMilissegundos = dataFinal - dataInicial
  
    let diferencaEntreDatas = diferencaEmMilissegundos / (1000 * 60 * 60 * 24)
  
    return Math.abs(Math.round(diferencaEntreDatas)) 
    // Math.abs para garantir um valor positivo
}

function mostrarDiasNaTela(diferencaEmDias) {
    const elementoH2 = document.getElementById('box-days')

    elementoH2.textContent = diferencaEmDias
}

mostrarDiasNaTela(diferencaEmDias)
