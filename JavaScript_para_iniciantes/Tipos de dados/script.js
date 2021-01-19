// utilizar o typeof para vereficicar o tipo de dado da variável!

var nome = 'Bruno';
var idade = 22;
var time = null;
var simbolo = Symbol();
console.log(typeof simbolo);

// Podemos somar String's -> Concatenação

var nome = 'Bruno';
var sobrenome = 'Purper';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

// Podemos somar números com String's

var gols = 1000;
var frase = 'Romario fez ' + gols + ' gols';

//  Temos como ignorar o atributo do caracter utilizando -> "\" e a frase entre `--`

var melhor = 'teste';

var frase1 = 'Este é o \"melhor\" jogo';

// TEMPLATE STRING  `${var}`

var gols = 1000;
var frase = 'Romario fez ' + gols + ' gols';
var frase2 = `Romario fez ${gols * 2} gols`; // Posso até mesmo fazer operações aritiméticas com a variável.

console.log(frase2);

// Exercícios

var ex01 = 'Uma string';
var ex02 = ''