function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

// Example usage:
const celsiusTemperature = 25; // Replace this with your Celsius temperature
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(`Temperature in Fahrenheit: ${fahrenheitTemperature}`);
