const {adicao, subtracao, multiplicacao, divisao} = require("./calculadora.js")

test("Soma correta", () => {
    expect(adicao(3,2)).toBe(5)
})

test("subtracao correta", () => {
    expect(subtracao(5,1)).toBe(4)
})

test("multiplicacao correta", () => {
    expect(multiplicacao(1,2)).toBe(2)
})

test("divisao correta", () => {
    expect(divisao(10,5)).toBe(2)
})