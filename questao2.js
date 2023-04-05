// Solicita ao usuário um número
let num = parseInt(prompt("Digite um número:"));

// Define as variáveis que representam os dois primeiros valores da sequência de Fibonacci
let a = 0;
let b = 1;

// Define uma variável para armazenar o próximo valor da sequência
let proximo = a + b;

// Enquanto o próximo valor for menor ou igual ao número informado pelo usuário
while (proximo <= num) {
  // Se o próximo valor for igual ao número informado pelo usuário, exibe uma mensagem indicando que o número pertence à sequência de Fibonacci e encerra o programa
  if (proximo === num) {
    console.log(num + " pertence à sequência de Fibonacci!");
    break;
  }

  // Atualiza os valores das variáveis a, b e próximo para continuar calculando a sequência de Fibonacci
  a = b;
  b = proximo;
  proximo = a + b;
}

// Se o próximo valor for maior que o número informado pelo usuário, exibe uma mensagem indicando que o número não pertence à sequência de Fibonacci
if (proximo > num) {
  console.log(num + " não pertence à sequência de Fibonacci!");
}
