// Cart rows store product IDs and quantities; prices come from products.js.
function removeFromCart(id) {
    cart = cart.filter(function (item) { return item.id !== id; });
    const saved = saveCart();
    renderCart();
    if (saved) showMessage("Car removed from your cart.");
}

function changeQuantity(id, amount) {
    const item = cart.find(function (entry) { return entry.id === id; });
    item.quantity = Math.max(1, item.quantity + amount);
    saveCart();
    renderCart();
    // Keep keyboard focus on the same quantity control after rebuilding rows.
    const control = document.getElementById((amount > 0 ? "increase-" : "decrease-") + id);
    if (control && !control.disabled) control.focus();
    else document.getElementById("increase-" + id).focus();
}

function renderCart() {
    const body = document.getElementById("cart-items");
    body.innerHTML = "";
    let totalPrice = 0;
    document.getElementById("empty-cart").hidden = cart.length > 0;
    document.getElementById("cart-content").hidden = cart.length === 0;

    // A loop makes one table row for each distinct product.
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const car = products.find(function (product) { return product.id === item.id; });
        const lineTotal = car.price * item.quantity;
        totalPrice += lineTotal;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><div class="cart-product"><img src="${car.images[0]}" alt="${car.name}" width="100" height="70"><div><strong>${car.name}</strong><span>${car.category}</span></div></div></td>
            <td>${formatPrice(car.price)}</td>
            <td><div class="quantity-controls"><button id="decrease-${car.id}" type="button" aria-label="Decrease ${car.name} quantity" ${item.quantity === 1 ? "disabled" : ""}>−</button><span class="quantity" aria-label="Quantity">${item.quantity}</span><button id="increase-${car.id}" type="button" aria-label="Increase ${car.name} quantity">+</button></div></td>
            <td class="line-total">${formatPrice(lineTotal)}</td>
            <td><button class="remove-button" type="button" aria-label="Remove ${car.name} from cart">Remove</button></td>`;
        row.querySelector(".remove-button").addEventListener("click", function () { removeFromCart(car.id); });
        row.querySelector("#increase-" + car.id).addEventListener("click", function () { changeQuantity(car.id, 1); });
        row.querySelector("#decrease-" + car.id).addEventListener("click", function () { changeQuantity(car.id, -1); });
        body.appendChild(row);
    }
    document.getElementById("cart-total").textContent = formatPrice(totalPrice);
    updateCartCount();
}

renderCart();
