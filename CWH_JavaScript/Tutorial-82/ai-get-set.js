class Temperature {
    constructor(celsius) {
      this._celsius = celsius;
    }
  
    // Getter for temperature in Celsius
    get celsius() {
      return this._celsius;
    }
  
    // Setter for temperature in Celsius
    set celsius(value) {
      if (value < 0) {
        // throw new Error('Temperature must be a positive value');
        console.log(('Temperature must be a positive value'))
      }
      this._celsius = value;
    }
  
    // Getter for temperature in Fahrenheit
    get fahrenheit() {
      return (this._celsius * 9/5) + 32;
    }
  
    // Getter for temperature in Kelvin
    get kelvin() {
      return this._celsius + 273.15;
    }
  }
  
  // Create a new Temperature object with a temperature of 20 degrees Celsius
  const temp = new Temperature(20);
  
  // Try to set the temperature to a negative value
  temp.celsius = -10; // Throws an error
  
  // Set the temperature to a positive value
  temp.celsius = 30;
  
  // Get the temperature in Fahrenheit
  console.log(temp.fahrenheit); // 86
  
  // Get the temperature in Kelvin
  console.log(temp.kelvin); // 303.15