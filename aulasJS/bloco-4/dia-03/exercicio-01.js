let linhaDeAsteriscos = [];
let quantidadeDeAsterisco = 5;
let quantidadeDeLinhas = 5;

for (let indexLinha = 1; indexLinha <= quantidadeDeAsterisco; indexLinha += 1) {
  linhaDeAsteriscos += "*";  
}
for (let indexNumeroDeLinhas = 1; indexNumeroDeLinhas <= quantidadeDeLinhas; indexNumeroDeLinhas += 1) {
  console.log (linhaDeAsteriscos);
}