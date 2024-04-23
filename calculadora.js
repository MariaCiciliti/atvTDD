
function adicao(num1, num2) {
    return num1 + num2;
  }
  
  function subtracao(num1, num2) {
    return num1 - num2;
  }
  
  function multiplicacao(num1, num2) {
    return num1 * num2;
  }
  
  function divisao(num1, num2) {
    if (num2 === 0) {
      return "Erro: divisão por zero";
    } else {
      return num1 / num2;
    }
  }
  module.exports ={adicao,subtracao,multiplicacao,divisao}
