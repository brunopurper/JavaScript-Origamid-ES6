// Uma string sem nada dentro é um valor FALSO
// ! nega uma operação booleana
// Booleano é um dado primitivo, e temos sempre dois valores, true ou false.

var possuiGraduacao = true;
var possuiDoutorado = false;

// Podemos manipular esses dados com as estruturas de condição if e else.

if (possuiGraduacao) {
  // => O valor dentro dos parenteses e avaliado em false ou true.
  console.log("Possui graduação!");
} else {
  console.log("Não possui graduação!");
}

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação, mas não possui doutorado

// ================ OPERADORES DE COMPARAÇÃO ================

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true (! + =) => != <- Pergunta se é diferente
10 != '10' // false
10 !== '10' // true
