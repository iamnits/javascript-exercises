const convertToCelsius = function(F) {
  return Math.round((5.0/9.0) * (F - 32) * 10) / 10;
};

const convertToFahrenheit = function(C) {
  return Math.round(((9.0 / 5.0) * C + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
