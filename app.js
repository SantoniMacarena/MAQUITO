const products = [
    {"id": 1, 
    "name": "PRETAL", 
    "price": 10500, 
    "image": "https://mimale.com/2839-home_default/arnes-julius-k9-talla-1-l.jpg",
    "sizes": ["S", "M", "L"], 
    "colors": ["Rojo", "Azul", "Negro"] 
    },
    {"id": 2,
    "name": "BALL 2 KNOTS",
    "price": 5000,
    "image": "https://d22fxaf9t8d39k.cloudfront.net/7dc01d207f648021c08020f4870f7b62a11409088b941c725f65434a806b739a93683.jpeg",
    "sizes": ["Cachorro", "Adulto"],
    "colors": ["Rosa", "Verde", "Azul", "Naranja"]
    },
    {"id": 3,
    "name": "CUCHA - CUCHA",
    "price": 50000,
    "image": "https://m.media-amazon.com/images/I/61WdUeR1UEL._AC_UF1000,1000_QL80_.jpg",
    "sizes": ["Peques", "Medianos", "Big Brother/Sister"],
    "colors": ["Blanco", "Madera", "Negro", "Rosa"]
    },
    {"id": 4,
    "name": "BOMBER",
    "price": 20000,
    "image": "https://m.media-amazon.com/images/I/61lGXsAY6ZL._AC_UF894,1000_QL80_.jpg",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["Rojo", "Violeta", "Amarillo", "Celeste", "Naranja"]
    },
    {"id": 5,
    "name": "TIE",
    "price": 2700,
    "image": "https://i.pinimg.com/474x/35/cb/15/35cb15d2b10184f93b8d75f9c4a9390c.jpg",
    "sizes": ["XS" , "S"],
    "colors": ["Naranja" , "Verde", "Blanco"]
    },
    {"id": 6,
    "name": "ID",
    "price": 5000, 
    "image": "https://i.pinimg.com/originals/40/89/43/408943a9a18e9b97d423ce92c81c12bd.jpg",
    "sizes": ["Grande", "Pequeño"],
    "colors": ["Negro", "Violeta", "Verde", "Plateado", "Rojo"]
    },
    {"id": 7,
    "name": "HAT",
    "price": 6450,
    "image": "https://i.ebayimg.com/thumbs/images/g/Wf4AAOSwMUpczU0i/s-l640.jpg",
    "sizes": ["Small"],
    "colors": ["Negro", "Celeste", "Rosa"]
    },
    {"id": 8,
    "name": "NO-RAIN",
    "price": 18000,
    "image": "https://cdn.manomano.com/images/images_products/21449342/L/46791465_4.jpg",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["Naranja"]
    },
    {"id": 9,
    "name": "MEAL-KIT",
    "price": 65800,
    "image": "https://m.media-amazon.com/images/I/814Qgxp9ebL._AC_UF1000,1000_QL80_.jpg",
    "sizes": ["Mucha hambre" , "Poca hambre"],
    "colors": ["Azul" , "Rojo"]
    },
    {id: 10, 
    "name": "PATA-SUCIA",
    "price": 6000,
    "image": "https://acdn.mitiendanube.com/stores/001/013/003/products/a11-ae8247e8018530ad0116885695177054-480-0.jpg",
    "sizes": ["XS", "XL"],
        "colors": ["Azul", "Verde", "Rosa"]
    },
    {id: 11,
         name: "MOÑITO",
        price: 8000,
        image: "https://m.media-amazon.com/images/I/91ZPNVKL5ML.jpg",
        sizes: ["XXS", "XXL"],
        colors: ["Rojo" , "Blanco" , "Rosa"]
    },
    {id: 12,
        name: "PERSONAL-BARBER",
        price: 45000,
        image: "https://www.tustecnologiastuc.com/wp-content/uploads/WhatsApp-Image-2020-09-07-at-16.49.06.jpeg",
        sizes: ["Pack completo"],
        colors: ["Único disponible"]
    }
        ]

     // Función para mostrar los productos disponibles en la página
 function renderProducts() {
    const itemsContainer = document.getElementById('items-container');
    itemsContainer.innerHTML = '';
    products.forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}">
            <p><strong>Precio:</strong> $${product.price}</p>
            ${product.sizes ? `
            <div id="sizes-${product.id}">
                <label>Tamaño:</label><br>
                ${product.sizes.map(size => `<button class="size-btn" onclick="selectSize(${product.id}, '${size}')">${size}</button>`).join('')}
            </div>` : ''}
            ${product.colors ? `
            <div id="colors-${product.id}">
                <label>Color:</label><br>
                ${product.colors.map(color => `<button class="color-btn" onclick="selectColor(${product.id}, '${color}')">${color}</button>`).join('')}
            </div>` : ''}
            <br>
            <button onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;
        itemsContainer.appendChild(itemDiv);
    });
}




  // Función para agregar un producto al carrito
function addToCart(productId) {
const product = products.find(p => p.id === productId);
if (!product) return;

const selectedSize = selectedSizes[productId];
const selectedColor = selectedColors[productId];


if (!selectedSize || !selectedColor) {
alert('Por favor, seleccione un tamaño y un color');
return;
}


const item = {
id: product.id,
name: product.name,
price: product.price,
size: selectedSize,
color: selectedColor
};

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
cartItems.push(item);
localStorage.setItem('cartItems', JSON.stringify(cartItems));
renderCart();

// Abre el carrito después de agregar un producto
document.getElementById('cart').style.display = 'block';
}

// Variables para almacenar las selecciones
const selectedSizes = {};
const selectedColors = {};

// Función para seleccionar un tamaño
function selectSize(productId, size) {
    selectedSizes[productId] = size;
    const sizeButtons = document.querySelectorAll(`#sizes-${productId} .size-btn`);
    sizeButtons.forEach(btn => {
        btn.classList.toggle('selected', btn.textContent === size);
    });

}

 // Función para seleccionar un color
 function selectColor(productId, color) {
    selectedColors[productId] = color;
    const colorButtons = document.querySelectorAll(`#colors-${productId} .color-btn`);
    colorButtons.forEach(btn => {
        btn.classList.toggle('selected', btn.textContent === color);
    });
}
   //Carrito emergente
 document.getElementById('open-cart').addEventListener('click', function() {
    document.getElementById('cart').style.display = 'block';
});

document.getElementById('close-cart').addEventListener('click', function() {
    document.getElementById('cart').style.display = 'none';
});

// Eliminar un producto del carrito
function removeFromCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderCart();
}

// Render
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItemsContainer.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} - Tamaño: ${item.size} - Color: ${item.color}`;
        const removeIcon = document.createElement('span');
        removeIcon.textContent = '🗑️';
        removeIcon.classList.add('remove-icon');
        removeIcon.onclick = () => removeFromCart(item.id);
        li.appendChild(removeIcon);
        cartItemsContainer.appendChild(li);
    });
}
    // Función para agregar un producto al carrito
    function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const selectedSize = selectedSizes[productId];
    const selectedColor = selectedColors[productId];

    if (!selectedSize || !selectedColor) {
        alert('Por favor, seleccione un tamaño y un color');
        return;
    }

    const item = {
        id: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize,
        color: selectedColor
    };

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id && cartItem.size === item.size && cartItem.color === item.color);

    if (existingItem) {
        alert('El producto con las mismas características ya está en el carrito');
        return;
    }

    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderCart();

    // Abre el carrito después de agregar un producto
    document.getElementById('cart').style.display = 'block';
}
// Función para eliminar un producto específico del carrito
 function removeFromCart(productId) {
 let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Encuentra el índice del producto en el carrito
   const index = cartItems.findIndex(item => item.id === productId);
 if (index !== -1) {

// Elimina el producto del carrito en base a su índice
cartItems.splice(index, 1);

// Actualiza el carrito en el almacenamiento local
localStorage.setItem('cartItems', JSON.stringify(cartItems));

// Renderiza el carrito nuevamente
renderCart();
}
}
// checkout
function checkout() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (cartItems.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    const confirmCheckout = confirm(`El total a pagar es: $${total}. ¿Desea proceder con el pago?`);
    if (confirmCheckout) {
        alert('¡Gracias por su compra, su compañero K9 estará feliz!');
        localStorage.removeItem('cartItems');
        renderCart();
    }
}

renderProducts();
renderCart();
