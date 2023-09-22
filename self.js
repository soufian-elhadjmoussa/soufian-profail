window.onload = function(){


const munu_btn = document.querySelector('.humbrger ');
const mobile_menu = document.querySelector('.mobile ');
const logo_menu = document.querySelector('.logo ');
const spa = document.querySelector('.spa ');
munu_btn.addEventListener('click', function() 
{
    munu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    logo_menu.classList.toggle('is-active');
    spa.classList.toggle('is-active');
});

}