const num1 = parseFloat(prompt("Insira o primeiro número para calcular: "));
const num2 = parseFloat(prompt("Insira o segundo número para calcular: "));

let soma = num1 + num2;
let subt = num1 - num2;
let div = num1 / num2;
let mult = num1 * num2;

alert("Os resultados dos cálculos são: \n" + 
"Soma: " + soma + "\n" +
"Subtração: " + subt + "\n" + 
"Divisão: " + div + "\n" + 
"Multiplicação: " + mult);