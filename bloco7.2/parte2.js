const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// console.table(lesson1);

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addTurno = (obj, chave, valor) => obj[chave] = valor;
addTurno(lesson2, 'turno', 'manhã');
console.log(`Questão 1: resultado > ${Object.values(lesson2)}\n`);

// Questão 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeyObj = obj => Object.keys(obj);
console.log(`Questão 2: resultado > ${listKeyObj(lesson2)}\n`);

// Questão 3 - Crie uma função para mostrar o tamanho de um objeto.
const tamanhoObj = obj => Object.keys(obj).length;
console.log(`Questão 3: resultado > ${tamanhoObj(lesson2)}\n`);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valorObj = obj => Object.values(obj);
console.log(`Questão 4: resultado > ${valorObj(lesson1)}\n`);

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);
