// Product Data
const products = [
    { id: 1, name: "Web Development Tool", price: 99.99, rating: 4, category: "web", image: "web.webp" },
    { id: 2, name: "Mobile App Design", price: 199.99, rating: 5, category: "apps", image: "mobile.jpg" },
    { id: 3, name: "React JS Development", price: 149.99, rating: 4, category: "web", image: "react.jpg" },
    { id: 4, name: "Node.js Backend Tool", price: 79.99, rating: 3, category: "web", image: "node.jpg" },
    { id: 5, name: "UX/UI Design Kit", price: 129.99, rating: 5, category: "apps", image: "ui&ux.png" },
    { id: 6, name: "JavaScript Masterclass", price: 49.99, rating: 4, category: "web", image: "js.jpg" }
];

// Function to render products
function renderProducts(productsToDisplay) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ""; // Clear existing products

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Rating: ${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}</p>
        `;
        
        productGrid.appendChild(productCard);
    });
}

// Initial render
renderProducts(products);

// Filter and Sort Functionality
document.getElementById('category-filter').addEventListener('change', filterProducts);
document.getElementById('price-filter').addEventListener('change', filterProducts);
document.getElementById('rating-filter').addEventListener('change', filterProducts);

function filterProducts() {
    let filteredProducts = [...products];

    const categoryFilter = document.getElementById('category-filter').value;
    if (categoryFilter) {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }

    const priceFilter = document.getElementById('price-filter').value;
    if (priceFilter === 'low') {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (priceFilter === 'high') {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    const ratingFilter = document.getElementById('rating-filter').value;
    if (ratingFilter) {
        filteredProducts = filteredProducts.filter(product => product.rating >= ratingFilter);
    }

    renderProducts(filteredProducts);
}

// To-Do List Functionality
document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value;
    
    if (taskText) {
        const todoList = document.getElementById('todo-list');
        const newTask = document.createElement('li');
        newTask.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
        todoList.appendChild(newTask);
        taskInput.value = "";
    }
});

function removeTask(button) {
    button.parentElement.remove();
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('thank-you-message').style.display = 'block';
});
