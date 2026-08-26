// função para transformar
function celsiusParaFahrenheit(c) {
    return c * 1.8 + 32;
}

// função para converter 
function converterLista(temperaturas) {
    return temperaturas.map(celsiusParaFahrenheit);
}

// função para classificar
function classificarTemperatura(c) {
    if (c <= 0) {
        return "congelante";
    } else if (c < 25) {
        return "ameno";
    } else {
        return "quente";
    }
}

// função para gerar a lista
function gerarRelatorio(temperaturas) {
    let fahrenheit = converterLista(temperaturas);

    let relatorio = temperaturas.map(function(c, i) {
        let classificacao = classificarTemperatura(c);

        return `${c}°C=${fahrenheit[i].toFixed(1)}°F(${classificacao})`;
    });

    return `Entrada: [${temperaturas.join(", ")}] → Saída: [${relatorio.join(", ")}]`;
}


function executar() {

    let temperaturas = [];

    for (let i = 0; i < 5; i++) {
        let c = Number(prompt(`Digite a ${i + 1}ª temperatura em Celsius:`));

        temperaturas.push(c);
    }

    document.getElementById("resultado").innerHTML =
        gerarRelatorio(temperaturas);
}