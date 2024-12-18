document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
  
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        data.products.forEach(product => {
          const card = document.createElement('div');
          card.className = 'card';
  
          card.innerHTML = `
            <img src="${product.images[0]}" alt="${product.title}">
            <div class="card-content">
              <h2 class="card-title">${product.title}</h2>
              <p class="card-description">${product.description}</p>
              <p class="card-price">$${product.price}</p>
            </div>
          `;
  
          gridContainer.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  });
  