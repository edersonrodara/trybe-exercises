let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
  resultado = resultado + numbers[index];  
}

console.log (numbers);

if (numbers[numbers.length -1] > 20) {
  console.log ('O ultimo numero do array é maior que 20');
} else {
  console.log ('O ultimo numero do array é menor ou igual a 20');
}

console.log ('Soma de todos os números: ' + resultado);
console.log ('Média aritmética: ' + resultado / 10);

