const validaCPF = require('./validadorcpf');

test('CPF válido deve retornar true', () => {
    const cpf = '529.982.247-25'; 
    expect(validaCPF(cpf)).toBe(true);
});

test('CPF inválido deve retornar false', () => {
    const cpf = '123.456.789-00'; // CPF inválido (todos os dígitos iguais)
    expect(validaCPF(cpf)).toBe(false);
});

test('CPF inválido deve retornar false', () => {
    const cpf = '111.111.111-11'; // CPF inválido (formato inválido)
    expect(validaCPF(cpf)).toBe(false);
});
