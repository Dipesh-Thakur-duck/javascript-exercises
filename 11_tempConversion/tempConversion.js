const convertToCelsius = function(value) {
  const celsius = (value - 32) * 5/9;
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(value) {
  const fahrenheit = (value * 9/5) + 32;
  return Number(fahrenheit.toFixed(1));
};

console.log(convertToCelsius(78));
console.log(convertToFahrenheit(32));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
