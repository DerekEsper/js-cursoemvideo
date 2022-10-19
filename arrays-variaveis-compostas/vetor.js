var valores = [5, 8, 9, 7, 0];

valores.push(3); // ADICIONA O NUMERO 3 NA LISTA 
valores.sort(); // COLOCA EM ORDE ALFABÉTICA
console.log(valores);
console.log(`O vetor tem ${valores.length} posições`); // QUANTIDADE DE ELEMENTOS DA ARRAY
console.log(`O primeiro valor do vetor é ${valores[0]}`); // ${valores[0]} VALOR DA POSIÇÃO 0

var posicao = valores.indexOf(7); //ENCONTRAR O VALOR DENTRO DE UMA ARRAY 

if (posicao == - 1) {  // -1 SIGNIFICA QUE O VALOR NÃO FOI ENCONTRADO
    console.log("O valor não foi encontrado")
}else {
    
    console.log(`O valor está na posição ${posicao}`);
}