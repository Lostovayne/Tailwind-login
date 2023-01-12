const abrirCarrito = document.querySelector('#abrir-menu'); 
const productos =  document.querySelector('#productos'); 
const menuMobile = document.querySelector('#menu-mobile');
const mostrar = document.querySelector('#mostrar');

abrirCarrito.addEventListener('click', () => {
    
    productos.classList.toggle("hidden")
    productos.classList.toggle('flex');
    mostrar.classList.toggle("hidden")
    menuMobile.classList.toggle("flex")
    menuMobile.classList.toggle('hidden');
    
    
})