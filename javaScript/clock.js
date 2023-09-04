document.addEventListener("DOMContentLoaded", () => {

    const dataFinal = new Date("2023-11-02T12:00:00");
  
    function mostrarRelogio() {
        function atualizarRelogio() {
            const dataAtual = new Date();

            const diferencaEmMilissegundos = dataFinal - dataAtual;

            const intSemanas = Math.floor(diferencaEmMilissegundos / (7 * 24 * 60 * 60 * 1000));
            const intDias = Math.floor((diferencaEmMilissegundos % (7 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
            const intHoras = Math.floor((diferencaEmMilissegundos % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            const intMinutos = Math.floor((diferencaEmMilissegundos % (60 * 60 * 1000)) / (60 * 1000));
            const intSegundos = Math.floor((diferencaEmMilissegundos % (60 * 1000)) / 1000);

            var nomes = ["semanas", "dias", "horas", "minutos", "segundos"]
            var valores = [intSemanas, intDias, intHoras, intMinutos, intSegundos]
    
            nomes.forEach((element, indice) => {
                let elemento = document.getElementById(`${element}`);
    
                elemento.textContent = valores[indice];
            });
            /* console.log("Função atualizarRelogio foi chamada"); */
        }
        atualizarRelogio()
        setInterval(atualizarRelogio, 1000);
    }
    
    mostrarRelogio()
});
