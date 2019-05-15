//CRIANDO UMA CALCULADORA SIMPLES UTILIZANDO FUNÇŌES E NODEJS
'use strict';
const readline = require('readline-sync');
let res;
let x = readline.question('Type the first number: ');
let y = readline.question('Type the second number: ');
//Convertendo as strings em números
x = Number(x);
y = Number(y);

function sum(res){
	res = x + y;
	return res;
}
function subtraction(res){
	res = x - y;
	return res;
}
function multiplication(res){
	res = x * y;
	return res;
}
function division(res){
	res = x / y;
	return res;
}
//O fatorial vai exibir apenas do primeiro número inserido(no caso, o x)
function factorial(x){
	let fact = 1;
	for(let i = x; i >= 1; i--){
		fact*=i;
	}	
	return fact;
}
/*Esse código exibe o resultado de todas as operaçōes, mas tenho outro exemplo(bem parecido com esse), que exibe o resultado
apenas da operação desejada e também tem algumas operaçōes a mais*/
console.log('Sum: '+sum(res));
console.log('Subtraction: '+subtraction(res));
console.log('Multiplication: '+multiplication(res));
console.log('Division: '+division(res));
console.log('Factorial: '+factorial(x));


