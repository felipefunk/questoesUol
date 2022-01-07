let a = "5" //define variável a como string contendo número 5
let b = 10 // define variável b como number contendo número 10

if (a === 5){ //verifica com === o valor e o tipo, portanto, a não é um 5 de tipo number e sim um 5 de tipo string
    a = 4 // atribuí ao a o valor de 4
    b = 1// atribuí ao b o valor de 1
}
//o retorno não é o que está dentro do if por causa da comparação ser como "===", que compara tipo e conteúdo, se utilizasse apenas a comparação de "==", os dados de a e b seriam, respectivamente, 4 e 1
console.log(a, b);