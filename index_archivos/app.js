// assets/app.js

document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const botonesAgregar = document.querySelectorAll('.producto button');
    botonesAgregar.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            const producto = {
                nombre: document.querySelectorAll('.producto h3')[index].textContent,
                precio: parseFloat(document.querySelectorAll('.producto p')[index].textContent.replace('$', '')),
                cantidad: 1
            };

            const productoExistente = carrito.find(item => item.nombre === producto.nombre);
            if (productoExistente) {
                productoExistente.cantidad++;
            } else {
                carrito.push(producto);
            }

            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert('Producto agregado al carrito');
        });
    });
});
