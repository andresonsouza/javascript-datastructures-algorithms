/**
 * @description exemplo 01
 */

function sayHello() {
 console.log('Hello!');   
}

sayHello();

/**
 * 
 * @description exemplo 02
 */

function output(text) {
    console.log(text);
}

output('Hello!');
// nesse caso o segundo argumento passado é ignorado
output('Hello!', 'Other text');


/**
 * @description exemplo 03
 */

function sum(num1, num2) {
    return num1 + num2;
}

let result = sum(1,2);
console.log(result); //saída 3
output(result); //saída 3
