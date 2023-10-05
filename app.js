const ShopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async () => {
    const response = await fetch("main.js");
    const data = await response.json();
    console.log(main);
};
getProducts();



productos.array.forEach(product => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = ´
    <img src="${product.img}">
        <h3>${product.nombre}</h3>
       <p class="price">${product.precio} $</p> 
       ´;
