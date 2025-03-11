const paresDeMoedas = [
    "EUR/USD", "US 500", "EUR/GBP", "US 100", "GBP/USD", 
    "USD/CAD", "AUD/CAD", "AUD/JPY", "NZD/CAD", "EUR/AUD"
];

function iniciarGeracaoSinal() {
    const loader = document.getElementById("loader");
    const loadingMessage = document.getElementById("loading-message");
    loader.style.display = "block";
    loadingMessage.style.display = "block";

    setTimeout(() => {
        gerarSinal();
        loader.style.display = "none";
        loadingMessage.style.display = "none";
    }, 20000);  // Tempo de espera simulado para geração do sinal
}

function gerarSinal() {
    let parEscolhido = paresDeMoedas[Math.floor(Math.random() * paresDeMoedas.length)];
    let sinal = Math.random() > 0.5 ? "CALL" : "SELL";

    document.getElementById("par-escolhido").value = parEscolhido;
    let sinalInput = document.getElementById("sinal");
    sinalInput.value = sinal;
    sinalInput.style.color = sinal === "CALL" ? "#00FF00" : "#FF0000";

    iniciarCronometro();
}

function iniciarCronometro() {
    const timer = document.getElementById("timer");
    timer.style.display = "block";
    let tempo = 60;
    timer.innerText = `Expira em: 1:00`;

    const intervalo = setInterval(() => {
        tempo--;
        let minutos = Math.floor(tempo / 60);
        let segundos = tempo % 60;
        timer.innerText = `Expira em: ${minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
        
        if (tempo <= 0) {
            clearInterval(intervalo);
            timer.style.display = "none";
        }
    }, 1000);
}

function gerarSinal() {
    let parEscolhido = paresDeMoedas[Math.floor(Math.random() * paresDeMoedas.length)];
    let sinal = Math.random() > 0.5 ? "CALL" : "SELL";

    // Toca o áudio de sinal gerado
    document.getElementById("audio-sinal").play();

    document.getElementById("par-escolhido").value = parEscolhido;
    let sinalInput = document.getElementById("sinal");
    sinalInput.value = sinal;
    sinalInput.style.color = sinal === "CALL" ? "#00FF00" : "#FF0000";

    iniciarCronometro();
}
