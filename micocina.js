const closeModalIngresar = document.querySelector('#close-modal-ingresar');
const modalIngresarProducto = document.querySelector('.modal-ingresar-producto');

closeModalIngresar.addEventListener('click',()=>{
    modalIngresarProducto.classList.remove('mostrar-agregar-pro');
    modalIngresarProducto.classList.add('ocultar-agregar-pro');
});