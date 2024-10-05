// Solicita o nome do jogador
let nomeJogador = prompt("Digite seu nome:");

// Gera um número aleatório entre 1 e 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let numeroUsuario = 0;

// Função para solicitar um número até o jogador acertar
while (numeroUsuario !== numeroAleatorio) {
    numeroUsuario = parseInt(prompt(`${nomeJogador}, adivinhe o número (entre 1 e 100):`));
    tentativas++;

    if (numeroUsuario > numeroAleatorio) {
        console.log("O número é menor.");
    } else if (numeroUsuario < numeroAleatorio) {
        console.log("O número é maior.");
    } else {
        console.alert(`Parabéns, ${nomeJogador}! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
    }
}
