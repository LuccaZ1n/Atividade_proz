document.addEventListener("DOMContentLoaded", function() {
  // Função para selecionar método de pagamento
  var metodosPagamento = document.querySelectorAll('.metodo-pagamento');
  metodosPagamento.forEach(function(metodo) {
      metodo.addEventListener('click', function() {
          // Remove a classe 'selecionado' de todos os métodos de pagamento
          metodosPagamento.forEach(function(item) {
              item.classList.remove('selecionado');
          });

          // Adiciona a classe 'selecionado' apenas ao método de pagamento clicado
          metodo.classList.add('selecionado');

          // Obtém o nome do método de pagamento selecionado
          var metodoSelecionado = metodo.getAttribute('data-metodo');
          console.log('Método de pagamento selecionado: ' + metodoSelecionado);
          // Aqui você pode adicionar lógica adicional, como mostrar campos específicos para cada método de pagamento
      });
  });

  // Função para validar formulário de pagamento
  var formularioPagamento = document.getElementById('formulario-pagamento');
  if (formularioPagamento) {
      formularioPagamento.addEventListener('submit', function(event) {
          event.preventDefault(); // Impede o envio padrão do formulário

          // Aqui você pode adicionar lógica para validar os campos do formulário de pagamento
          var numeroCartao = document.getElementById('numero-cartao').value;
          var nomeCartao = document.getElementById('nome-cartao').value;
          var validadeCartao = document.getElementById('validade-cartao').value;
          var cvvCartao = document.getElementById('cvv-cartao').value;

          if (numeroCartao && nomeCartao && validadeCartao && cvvCartao) {
              alert('Formulário de pagamento enviado com sucesso!');
              // Aqui você pode adicionar lógica para enviar os dados do formulário para um servidor backend
          } else {
              alert('Por favor, preencha todos os campos do formulário de pagamento.');
          }
      });
  }

  // Outras funcionalidades podem ser adicionadas conforme necessário
});
 