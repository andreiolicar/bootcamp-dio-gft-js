let pontuacaoRanked = ranked(150, 10)
let nivelRanked

function ranked(vitorias, derrotas){
    let resultadoRanked = vitorias - derrotas
    return resultadoRanked
}

if (pontuacaoRanked<10) {
    nivelRanked = "Ferro"
} else if (pontuacaoRanked>=11 && pontuacaoRanked<=20) {
    nivelRanked = "Bronze"
} else if (pontuacaoRanked>=21 && pontuacaoRanked<=50) {
    nivelRanked = "Prata"
} else if (pontuacaoRanked>=51 && pontuacaoRanked<=80) {
    nivelRanked = "Ouro"
} else if (pontuacaoRanked>=81 && pontuacaoRanked<=90) {
    nivelRanked = "Diamante"
} else if (pontuacaoRanked>=91 && pontuacaoRanked<=100) {
    nivelRanked = "Lendário"
} else if (pontuacaoRanked>=101) {
    nivelRanked = "Imortal"
}

console.log(`O Herói tem de saldo de ${pontuacaoRanked} e está no nível de ${nivelRanked}`)