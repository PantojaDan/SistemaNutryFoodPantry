const capa = document.querySelector('.capa');
const iconLoad = document.querySelector('.icon-load');
const ingresar = document.querySelector('#ingresar');

ingresar.addEventListener('click',()=>{
    capa.classList.remove('hide');
    capa.classList.add('show');
    iconLoad.classList.remove('paused');
});