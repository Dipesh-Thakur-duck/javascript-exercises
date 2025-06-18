const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach((item)=>{
    sum += item;
  })
  return sum;
};

const multiply = function(arr) {
  let multiplication = 1;
  arr.forEach((item)=>{
    multiplication *= item;
  })
  return multiplication;
};

const power = function(base, exponent) {
	if(exponent === 1){
    return base;
  }
  return base * power(base, exponent-1);
};

const factorial = function(number) {
  if(number === 0){
    return 1;
  }
	return number * factorial(number - 1)
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
