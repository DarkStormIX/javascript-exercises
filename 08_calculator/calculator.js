const add = function(firstNumber, secondNumber) {
	var sum = firstNumber + secondNumber;
  return sum;
};

const subtract = function(firstNumber, secondNumber) {
	var difference = firstNumber - secondNumber;
  return difference;
};

const sum = function(array) {
	return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(baseNumber, index) {
	return Math.pow(baseNumber, index);
};

const factorial = function(number) {
	if(number == 0){
    return 1;
  }
  else{
    var sum = 1;
    for(let i=1;i<=number;i++){
      sum *= i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
