/*tenho que pensar em um comportamento de clicar e aparecer uma classe*/ 


/*referencia da imagem  responsavel pelo meu menu*/ 
const $menu = document.querySelector('.menu-ul')
const $btMenuOpen = document.querySelector('.btnMenu_open')
const $btMenuClose = document.querySelector('.btnMenu_close')


/* tem que passar uma funçao pois ela so vai ser executada no momento do clique btMenu*/ 
/* quando eu clciar no btMenu quero adicionar uma classe no btMenu*/ 

/*para click  e aparecer o menu*/ 
$btMenuOpen.addEventListener('click', function(){

    $menu.classList.add('menu-ul_open')

})

/*para desclick  e desaparecer o menu*/ 
$btMenuClose.addEventListener('click', function(){

    $menu.classList.remove('menu-ul_open')

})