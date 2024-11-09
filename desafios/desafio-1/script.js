nomeHeroi = "Cand King"
xpHeroi = 11000
classificadorHeroi = "Nenhum"

if (xpHeroi<1000) {
    classificadorHeroi = "Ferro"
} else if (xpHeroi>=1000 && xpHeroi<=2000){
    classificadorHeroi = "Bronze"
} else if (xpHeroi>2000 && xpHeroi<=5000){
    classificadorHeroi = "Prata"
} else if (xpHeroi>5000 && xpHeroi<=7000){
    classificadorHeroi = "Ouro"
} else if (xpHeroi>7000 && xpHeroi<=8000){
    classificadorHeroi = "Platina"
} else if (xpHeroi>8000 && xpHeroi<=9000){
    classificadorHeroi = "Ascendente"
} else if (xpHeroi>9000 && xpHeroi<=10000){
    classificadorHeroi = "Imortal"
} else if (xpHeroi>=10001) {
    classificadorHeroi = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + classificadorHeroi)