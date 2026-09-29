// Product catalog: an array containing one object per car.
const products = [
    {
        "id": 1,
        "name": "Porsche 911",
        "price": 115000,
        "description": "An iconic sports coupe with a rear-engine layout and a driver-focused cabin.",
        "category": "Sports Cars",
        "images": [
            "images/sports/porsche-911-1.jpg",
            "images/sports/porsche-911-2.jpg"
        ]
    },
    {
        "id": 2,
        "name": "Chevrolet Corvette",
        "price": 72000,
        "description": "A dramatic mid-engine sports car built around an engaging driving experience.",
        "category": "Sports Cars",
        "images": [
            "images/sports/chevrolet-corvette-1.jpg",
            "images/sports/chevrolet-corvette-2.jpg"
        ]
    },
    {
        "id": 3,
        "name": "Mazda MX-5",
        "price": 32000,
        "description": "A lightweight two-seat roadster with a folding roof and playful handling.",
        "category": "Sports Cars",
        "images": [
            "images/sports/mazda-mx-5-1.jpg",
            "images/sports/mazda-mx-5-2.jpg"
        ]
    },
    {
        "id": 4,
        "name": "BMW X5",
        "price": 68000,
        "description": "A spacious premium SUV that combines everyday versatility with a comfortable cabin.",
        "category": "SUV",
        "images": [
            "images/suv/bmw-x5-1.jpg",
            "images/suv/bmw-x5-2.jpg"
        ]
    },
    {
        "id": 5,
        "name": "Volvo XC90",
        "price": 62000,
        "description": "A family SUV with understated Scandinavian design and flexible seating.",
        "category": "SUV",
        "images": [
            "images/suv/volvo-xc90-1.jpg",
            "images/suv/volvo-xc90-2.jpg"
        ]
    },
    {
        "id": 6,
        "name": "Land Rover Defender",
        "price": 61000,
        "description": "A distinctive SUV with a practical interior and adventurous character.",
        "category": "SUV",
        "images": [
            "images/suv/land-rover-defender-1.jpg",
            "images/suv/land-rover-defender-2.jpg"
        ]
    },
    {
        "id": 7,
        "name": "Mercedes-Benz S-Class",
        "price": 118000,
        "description": "A flagship luxury sedan with a spacious cabin and an emphasis on passenger comfort.",
        "category": "Luxury Cars",
        "images": [
            "images/luxury/mercedes-benz-s-class-1.jpg",
            "images/luxury/mercedes-benz-s-class-2.jpg"
        ]
    },
    {
        "id": 8,
        "name": "Bentley Continental GT",
        "price": 245000,
        "description": "A grand touring coupe that pairs elegant craftsmanship with long-distance comfort.",
        "category": "Luxury Cars",
        "images": [
            "images/luxury/bentley-continental-gt-1.jpg",
            "images/luxury/bentley-continental-gt-2.jpg"
        ]
    },
    {
        "id": 9,
        "name": "Rolls-Royce Ghost",
        "price": 350000,
        "description": "A luxury sedan with a serene interior and an unmistakable road presence.",
        "category": "Luxury Cars",
        "images": [
            "images/luxury/rolls-royce-ghost-1.jpg",
            "images/luxury/rolls-royce-ghost-2.jpg"
        ]
    },
    {
        "id": 10,
        "name": "Tesla Model 3",
        "price": 42000,
        "description": "An electric sedan with a minimalist cabin and a streamlined silhouette.",
        "category": "Electric Cars",
        "images": [
            "images/electric/tesla-model-3-1.jpg",
            "images/electric/tesla-model-3-2.jpg"
        ]
    },
    {
        "id": 11,
        "name": "Porsche Taycan",
        "price": 99000,
        "description": "An electric sports sedan with distinctive styling and a low, driver-oriented seating position.",
        "category": "Electric Cars",
        "images": [
            "images/electric/porsche-taycan-1.jpg",
            "images/electric/porsche-taycan-2.jpg"
        ]
    },
    {
        "id": 12,
        "name": "Hyundai Ioniq 5",
        "price": 45000,
        "description": "An electric crossover with geometric styling and a spacious, flexible cabin.",
        "category": "Electric Cars",
        "images": [
            "images/electric/hyundai-ioniq-5-1.jpg",
            "images/electric/hyundai-ioniq-5-2.jpg"
        ]
    }
];

// Shared, basic functions are used by each page's own JavaScript file.
const cartKey = "carStoreCart";
let cart = readCart();
let messageTimer;

function formatPrice(price) {
    return "$" + price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function readCart() {
    try {
        const savedCart = JSON.parse(localStorage.getItem(cartKey) || "[]");
        if (!Array.isArray(savedCart)) return [];
        const validCart = [];
        // Validate saved data, and merge repeated IDs into a single row.
        savedCart.forEach(function (item) {
            if (!item || !Number.isSafeInteger(item.quantity) || item.quantity < 1) return;
            const car = products.find(function (product) { return product.id === item.id; });
            if (!car) return;
            const existing = validCart.find(function (entry) { return entry.id === item.id; });
            if (existing) existing.quantity += item.quantity;
            else validCart.push({ id: item.id, quantity: item.quantity });
        });
        return validCart;
    } catch (error) {
        return [];
    }
}

function showMessage(message) {
    const status = document.getElementById("status");
    status.textContent = message;
    status.classList.add("visible");
    clearTimeout(messageTimer);
    messageTimer = setTimeout(function () { status.classList.remove("visible"); }, 3500);
}

function saveCart() {
    try {
        localStorage.setItem(cartKey, JSON.stringify(cart));
        updateCartCount();
        return true;
    } catch (error) {
        updateCartCount();
        showMessage("Browser storage is unavailable. Your cart cannot be saved between pages.");
        return false;
    }
}

function updateCartCount() {
    let count = 0;
    cart.forEach(function (item) { count += item.quantity; });
    document.getElementById("cart-count").textContent = count;
}

function addToCart(id) {
    const existing = cart.find(function (item) { return item.id === id; });
    if (existing) existing.quantity += 1;
    else cart.push({ id: id, quantity: 1 });
    const car = products.find(function (product) { return product.id === id; });
    if (saveCart()) showMessage(car.name + " added to your cart.");
}

function changeImage(image, car, currentIndex, counter) {
    const nextIndex = (currentIndex + 1) % car.images.length;
    image.src = car.images[nextIndex];
    image.alt = car.name + " - photo " + (nextIndex + 1);
    counter.textContent = (nextIndex + 1) + " / " + car.images.length;
    return nextIndex;
}

function renderProducts(cars) {
    const grid = document.getElementById("product-grid");
    cars.forEach(function (car) {
        const card = document.createElement("article");
        card.className = "product-card";
        card.id = "car-" + car.id;
        // This markup uses only our own catalog data, never user input.
        card.innerHTML = `
            <div class="card-photo">
                <img src="${car.images[0]}" alt="${car.name} - photo 1" loading="lazy" width="800" height="520">
                <span class="image-counter">1 / ${car.images.length}</span>
                <button class="change-image" type="button" aria-label="Next image of ${car.name}">Next Image</button>
            </div>
            <div class="card-body">
                <p class="eyebrow">${car.category}</p>
                <h3>${car.name}</h3>
                <p class="description">${car.description}</p>
                <div class="card-bottom"><strong class="price">${formatPrice(car.price)}</strong><button class="add-button" type="button" aria-label="Add ${car.name} to cart">Add to Cart</button></div>
            </div>`;
        let imageIndex = 0;
        card.querySelector(".change-image").addEventListener("click", function () {
            imageIndex = changeImage(card.querySelector("img"), car, imageIndex, card.querySelector(".image-counter"));
        });
        card.querySelector(".add-button").addEventListener("click", function () { addToCart(car.id); });
        grid.appendChild(card);
    });
}

// Refresh when another tab changes the saved cart, or the user returns with Back.
window.addEventListener("storage", function (event) {
    if (event.key === cartKey || event.key === null) {
        cart = readCart();
        updateCartCount();
        if (typeof renderCart === "function") renderCart();
    }
});
window.addEventListener("pageshow", function () {
    cart = readCart();
    updateCartCount();
    if (typeof renderCart === "function") renderCart();
});
