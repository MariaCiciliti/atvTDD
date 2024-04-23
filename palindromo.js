function verificaPalindromo(string) {
    string = string.replace(/\s/g, '').toLowerCase();
    return string === string.split('').reverse().join('');
  }

  module.exports = verificaPalindromo;