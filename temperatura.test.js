const {celsiusParaFahrenheit,fahrenheitParaCelsiu} = require("./temperatura")

test("Celsius para Fahrenheit correto", () => {
    expect(celsiusParaFahrenheit(40)).toBe(104)
})
test("Fahrenheit para Celsius correto", () => {
    expect(fahrenheitParaCelsiu(104)).toBe(40)
})


