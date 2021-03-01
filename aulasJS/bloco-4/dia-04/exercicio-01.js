// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
//   medals: {
//     golden: 2,
//     silver: 3
//   }
// };

// console.log (`A jogadora ${player.name} ${player.lastName} tem ${player.age} de idade.`);
// console.log (`A jogadora ${player.name} ${player.name} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`);
// console.log (`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`);

// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(15, 16));
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrent: "Sim"
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrent: "Sim"
};

console.log('------------------Exercício 1------------------');
console.log(`Bem-vinda, ${info.personagem}`);
console.log();

console.log('------------------Exercício 2------------------');
console.log(info);
console.log();

console.log('------------------Exercício 3------------------');
for (const key in info) {
  console.log(key);
}
console.log();

console.log('------------------Exercício 4------------------');
for (const key in info) {
  console.log(info[key]);
}
console.log();

console.log('------------------Exercício 5------------------');
for (const key in info2) {
  console.log (info[key] + " e " + info2[key]);
}