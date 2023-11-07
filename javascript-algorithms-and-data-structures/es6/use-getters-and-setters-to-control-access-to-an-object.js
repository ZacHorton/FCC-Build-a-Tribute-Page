// Only change code below this line
class Thermostat  {
   constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
    this._celsius = 5/9 * (fahrenheit - 32);
  }
  // getter
  get temperature() {
    return this._celsius;
  }
  // setter
  set temperature(updatedCelsius) {  
    this._celsius = updatedCelsius;
  }
} 
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
