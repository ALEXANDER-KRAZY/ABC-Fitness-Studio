let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item) {
    cart.push(item);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Item added.");
}

function viewCart() {

    let cartList =
        document.getElementById("cartItems");

    cartList.innerHTML = "";

    cart.forEach(item => {

        let li =
            document.createElement("li");

        li.textContent = item;

        cartList.appendChild(li);
    });

    document.getElementById(
        "cartModal"
    ).style.display = "block";
}

function closeCart() {

    document.getElementById(
        "cartModal"
    ).style.display = "none";
}

function clearCart() {

    cart = [];

    localStorage.removeItem("cart");

    document.getElementById(
        "cartItems"
    ).innerHTML = "";

    alert("Cart cleared.");
}

function processOrder() {

    alert("Thank you for your order.");

    clearCart();
}
