// VARIÁVEIS

var num = 1; // {1}

num = 3; // {2}

var price = 1.5; // {3}

var myName = 'Packt'; // {4}

var trueValue = true; // {5}

var nullVar = null; // {6} - Sem valor

var und; // {7} - Declarada mas ainda não recebeu nenhum valor

console.log('num' + num);

console.log('price' + price);

console.log('myName' + myName);

console.log('trueVallue' + trueValue);

console.log('nullVar' + nullVar);

console.log('und' + und);

// ESCOPO DAS VRIÁVEIS

var myVariable = 'Global';

var myOtherVariable = 'Global';

function myFunction() {
  var myVariable = 'Local';
  return myVariable;
}

function myOtherFunction() {
  myOtherVariable = 'Local';
  return myOtherVariable;
}

console.log(myVariable); // {1}

console.log(myFunction()); // {2}

console.log(myOtherVariable); // {3}

console.log(myOtherFunction()); // {4}

console.log(myOtherVariable); // {5}