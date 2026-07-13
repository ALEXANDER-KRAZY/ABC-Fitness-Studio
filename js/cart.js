// ===============================
// ABC Fitness Studio
// Shopping Cart
// Uses sessionStorage
// ===============================

// Retrieve cart or create an empty one
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Track if an order has already been processed
let processed = sessionStorage.getItem("processed") === "true";

// -------------------------------
// Save cart
// -------------------------------
function saveCart() {
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

// -------------------------------
// Add item
// -------------------------------
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    saveCart();

    alert(name + " has been added to your cart.");
}

// -------------------------------
// View cart
// -------------------------------
function viewCart() {

    const display = document.getElementById("cartDisplay");

    if (cart.length === 0) {
        display.innerHTML = "<p>Your shopping cart is empty.</p>";
        return;
    }

    let html = "<h3>Selected Items</h3>";
    let total = 0;

    html += "<table>";
    html += "<tr>";
    html += "<th>Item</th>";
    html += "<th>Price</th>";
    html += "</tr>";

    cart.forEach(function(item) {

        html += "<tr>";
        html += "<td>" + item.name + "</td>";
        html += "<td>$" + item.price.toFixed(2) + "</td>";
        html += "</tr>";

        total += item.price;

    });

    html += "</table>";

    html += "<br>";

    html += "<h3>Total: $" + total.toFixed(2) + "</h3>";

    display.innerHTML = html;
}

// -------------------------------
// Clear cart
// -------------------------------
function clearCart() {

    if (cart.length === 0) {

        alert("Your cart is already empty.");

        return;

    }

    cart = [];

    processed = false;

    sessionStorage.removeItem("processed");

    saveCart();

    document.getElementById("cartDisplay").innerHTML =
        "<p>Your shopping cart is empty.</p>";

    alert("Cart cleared successfully.");

}

// -------------------------------
// Process order
// -------------------------------
function processOrder() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }

    if (processed) {

        alert("This order has already been processed.");

        return;

    }

    alert("Thank you! Your order has been processed successfully.");

    processed = true;

    sessionStorage.setItem("processed", "true");

    cart = [];

    saveCart();

    document.getElementById("cartDisplay").innerHTML =
        "<p>Your shopping cart is empty.</p>";

}

// -------------------------------
// Load existing cart
// -------------------------------
window.onload = function () {

    if (cart.length > 0) {

        viewCart();

    }

};
