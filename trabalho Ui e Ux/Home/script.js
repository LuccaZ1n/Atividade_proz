document.addEventListener("DOMContentLoaded", function() {
  // Função para animar o background gradiente da seção hero
  function animateBackground() {
      const background = document.querySelector('.background');
      const gradientAnimation = () => {
          let colors = ['#ffffff', '#f3f3f3', '#e6e6e6', '#d9d9d9', '#cccccc'];
          colors.push(colors.shift());
          background.style.background = `linear-gradient(120deg, ${colors.join(', ')})`;
      };
      setInterval(gradientAnimation, 20000);
  }

  animateBackground();

  // Função para animar a aparência dos produtos na seção de produtos
  function animateProducts() {
      const products = document.querySelectorAll('.product');
      products.forEach(product => {
          product.addEventListener('mouseenter', () => {
              product.style.transform = 'translateY(-20px)';
              product.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
          });
          product.addEventListener('mouseleave', () => {
              product.style.transform = 'translateY(0)';
              product.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
          });
      });
  }

  animateProducts();

  // Função para controlar o evento de clique nos botões "Comprar"
  function handleBuyButtonClick() {
      const buyButtons = document.querySelectorAll('.product button');
      buyButtons.forEach(button => {
          button.addEventListener('click', () => {
              const productName = button.parentElement.querySelector('h3').textContent;
              alert(`Você comprou o ${productName}!`);
          });
      });
  }

  handleBuyButtonClick();
});
