var num = 0; //{1}
console.log(num);

num = num + 2;
console.log(num);

num = num * 3;
console.log(num);

num = num / 2;
console.log(num);

num++;
console.log(num);

num--;
console.log(num);

num += 1; //{2}
console.log(num);

num -= 1;
console.log(num);

num *= 3;
console.log(num);

num /= 2;
console.log(num);

num %= 3;
console.log(num);

console.log('num == 1: ' + (num == 1));//{3}

console.log('num === 1: ' + (num === 1));

console.log('num != 1: ' + (num != 1));

console.log('num > 1: ' + (num > 1));

console.log('num < ' + (num < 1));

console.log('num >= 1: ' + (num >= 1));

console.log('num <= ' + (num <= 1));

console.log('true && false: ' + (true && false));//{4}

console.log('false || true: ' + (false || true));

console.log('!true: ' + (!true));

console.log('5 & 1: ', (5 & 1));

console.log('5 | 1: ', (5 | 1));

console.log('~5 : ', (~5));

console.log('5 ^ 1: ', (5 ^ 1));

console.log('5 << 1: ', (5 << 1));

console.log('5 >> 1: ', (5 >> 1));

console.log('typeof num: ', typeof num);

console.log('typeof Packt: ', typeof 'Packt');

console.log('typeof true: ', typeof true);

console.log('typeof [1,2,3]: ', typeof [1, 2, 3]);

console.log('typeof {name: John}: ', typeof { name: 'John' });

var myObj = { name: 'John', age: 21 };
delete myObj.age;
console.log(myObj); //exibe Object {name: "John"}


// var carros = {
//     carro1: 'Fusca',
//     carro2: 'Celta',
//     carro3: 'Fiat Uno'
// }

// console.log('carros', typeof carros);
// console.log('carros',carros);
// delete(carros.carro1);
// console.log('Novo objeto', carros);

