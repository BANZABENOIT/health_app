let opennav = document.querySelector('.icon1');
let closenav = document.querySelector('.fermer');
let menu = document.querySelector('.menu');
let positionmenu = menu.getBoundingClientRect().left
opennav.addEventListener('click', ()=> {
    if(positionmenu<0){
        menu.classList.add('monter');
    }
});

closenav.addEventListener('click', ()=> {
    if(positionmenu<0){
        menu.classList.remove('monter');
    }
});