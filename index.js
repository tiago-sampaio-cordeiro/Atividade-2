document.getElementById("caixaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valorSaque = parseInt(document.getElementById("saque").value);
    let notas = calcularNotas(valorSaque);
    exibirResultado(notas);
});

function calcularNotas(valor) {
    const notasDisponiveis = [100, 50, 20, 10, 5, 2];
    let resultado = {};

    for (let i = 0; i < notasDisponiveis.length; i++) {
        let nota = notasDisponiveis[i];
        if (valor >= nota) {
            resultado[nota] = Math.floor(valor / nota);
            valor %= nota;
        }
    }
    return resultado;
}

function exibirResultado(notas) {
    let resultadoDiv = document.getElementById("resultado");
    let notasDiv = document.getElementById("notas");
    notasDiv.innerHTML = "";

    for (let nota in notas) {
        notasDiv.innerHTML += notas[nota] + " nota(s) de " + nota + " reais<br>";
    }

    resultadoDiv.style.display = "block";
}