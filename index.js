

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');
  const resultContainer = document.getElementById('result-container');
  const pizzaIdInput = document.getElementById('pizza-id');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const pizzaId = parseInt(pizzaIdInput.value);

    if (!isNaN(pizzaId)) {
      const foundPizza = pizzas.find(pizza => pizza.id === pizzaId);
      if (foundPizza) {
        renderPizzaCard(resultContainer, foundPizza);
        localStorage.setItem('lastPizzaId', pizzaId);
      } else {
        renderError(resultContainer, "ID no existente.");
      }
    } else {
      renderError(resultContainer, "Por favor, ingrese un ID válido.");
    }
  });

  const lastPizzaId = localStorage.getItem('lastPizzaId');
  if (lastPizzaId) {
    const foundPizza = pizzas.find(pizza => pizza.id === parseInt(lastPizzaId));
    if (foundPizza) {
      renderPizzaCard(resultContainer, foundPizza);
    }
  }
});

function renderPizzaCard(container, pizza) {
  container.innerHTML = `
    <div class="card">
      <h2>${pizza.nombre}</h2>
      <img src="${pizza.imagen}" alt="${pizza.nombre}">
      <p>Precio: $${pizza.precio}</p>
    </div>
  `;
}

function renderError(container, message) {
  container.innerHTML = `<p class="error">${message}</p>`;
}

const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "../img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "../img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "../img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "../img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "../img/anana.png",
  },
];
