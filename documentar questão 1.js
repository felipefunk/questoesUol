let totalDivida = 1400 //define o valor total da Dívida

const atlDivida = (valorRecebido) =>{ //Define Function para alterar a dívida com entrada de valor na função 
    totalDivida -= valorRecebido // pega a dívida total e subtraí o valor recebido na chamada de função
    return totalDivida // returna o valor total da dívida
}

for (let i=0; i<12; i++){ //repetição por 12 vezes
    atlDivida(70) // chama função altDivida passando o valor de 70 para diminuir do total
}

console.log(totalDivida);