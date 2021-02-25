let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let maiorNumero = 0;
let quantidadeDeNumerosImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
  resultado = resultado + numbers[index];  
}

console.log (numbers);

if (numbers[numbers.length -1] > 20) {
  console.log ('O ultimo numero do array é maior que 20');
} else {
  console.log ('O ultimo numero do array é menor ou igual a 20');
}

for (let index = 0; index < numbers.length; index += 1) {
  let result = numbers[index] % 2;
  if (result != 0) {
    quantidadeDeNumerosImpares += 1;
  } else {
    console.log ('nenhum valor ímpar encontrado');
  }
}
console.log (`Quantidade de numeros ímpares: ${quantidadeDeNumerosImpares}`);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
for (let index = 0; index < numbers.length; index += 1) {
  if (maiorNumero < numbers[index]) {
    maiorNumero = numbers[index];
  }
}

console.log (maiorNumero);

console.log ('Soma de todos os números: ' + resultado);
console.log ('Média aritmética: ' + resultado / 10);

