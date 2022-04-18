const menuDashboard = document.querySelector('.menu-dashboard');
const menuHamburguer = document.querySelector('.menu-hamburguer-dash');

menuHamburguer.addEventListener('click',()=>{
    if(menuDashboard.classList.contains('hide-menu')){
        menuDashboard.classList.remove('hide-menu');
        menuDashboard.classList.add('show-menu');
    }else{
        menuDashboard.classList.remove('show-menu');
        menuDashboard.classList.add('hide-menu');
    }
});