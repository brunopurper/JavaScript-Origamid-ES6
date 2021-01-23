var idade = 23;

console.log(idade);

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4 --> Resto de divisão

// ======================= Parte 2 do módulo ===================== //


var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// ============== OPERADORES ARITMÉTICOS UNÁRIOS    ============= //
 
var x = 5;
console.log(x++);
console.log(++x);
console.log(x);

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// Exercício 

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35

// Crie duas expressões que retornem NaN
var ale = 'minhaidadeé';
var ale2 = 'minhaidadeé';
console.log(isNaN(ale));

// Somar a string '200' com o número 50 e retornar 250
var string = '200';
var number = 50;
var somans = + string + number;
console.log(somans);
// Incremente o número 5 e retorne o seu valor incrementado
var number5 = 5;
number5++
console.log(number5);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
// Resolução
var somapeso = (+numero /2) + unidade;
console.log(somapeso);
