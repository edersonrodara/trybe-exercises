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

console.log(`Bem-vinda, ${info.personagem}`);
console.log(info);

for (const key in info) {
  console.log(key);
}