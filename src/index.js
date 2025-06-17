// Função para identificar a bandeira do cartão de crédito utilizando regex.
function identificarBandeira(numeroCartao) {
  // Remove espaços e traços
  const numero = numeroCartao.replace(/[\s-]/g, '');

  const bandeiras = [
    { nome: 'Visa', regex: /^4[0-9]{12}(?:[0-9]{3})?$/ },
    { nome: 'Mastercard', regex: /^5[1-5][0-9]{14}$/ },
    { nome: 'American Express', regex: /^3[47][0-9]{13}$/ },
    { nome: 'Diners Club', regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
    { nome: 'Discover', regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
    { nome: 'Elo', regex: /^(4011(78|79)|431274|438935|451416|457393|504175|5067[0-6][0-9]|50677[0-8]|5090[0-9]{2}|627780|636297|636368|6500(31|32|33|34|35|36|37|38|39)|6504(85|86|87|88|89)|6505(01|02|03|04|05|06|07|08|09)|6507(01|02|03|04|05|06|07|08|09)|6509(21|22|23|24|25|26|27|28|29)|6516(52|53|54|55|56|57|58|59)|6550(00|01|02|03|04|05|06|07|08|09))[0-9]{10,12}$/ },
    { nome: 'Hipercard', regex: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/ }
  ];

  for (const bandeira of bandeiras) {
    if (bandeira.regex.test(numero)) {
      return bandeira.nome;
    }
  }
  return 'Bandeira desconhecida';
}

// Exemplo de uso:
console.log(identificarBandeira('4111 1111 1111 1111')); // Visa
console.log(identificarBandeira('5500 0000 0000 0004')); // Mastercard