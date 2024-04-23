function celsiusParaFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitParaCelsiu(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}
module.exports = {celsiusParaFahrenheit,fahrenheitParaCelsiu}