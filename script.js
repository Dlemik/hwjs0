function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
}


function addToCart(productName) {
  const cartItems = document.getElementById('cartItems');
  const emptyMessage = document.getElementById('emptyMessage');

  emptyMessage.style.display = 'none';

  const item = document.createElement('div');
  item.classList.add('cart-item');
  item.innerHTML = `
    <span>productName</span>
    <button onclick="removeItem(this)">Удалить</button>
  `;

  cartItems.appendChild(item);
}

function removeItem(button) {
  const item = button.parentElement;
  item.remove();

  const cartItems = document.getElementById('cartItems');
  const emptyMessage = document.getElementById('emptyMessage');

  if (cartItems.children.length === 0) {
    emptyMessage.style.display = 'block';
  }
}