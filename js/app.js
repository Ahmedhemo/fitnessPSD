// MENU SECTION

var li1 = document.querySelectorAll('li')[0];
var li2 = document.querySelectorAll('li')[1];
var li3 = document.querySelectorAll('li')[2];
var li4 = document.querySelectorAll('li')[3];
var li5 = document.querySelectorAll('li')[4];

li1.addEventListener('click',function(){
    li2.classList.remove('active');
    li3.classList.remove('active');
    li4.classList.remove('active');
    li5.classList.remove('active');
    this.classList.add('active');
})
li2.addEventListener('click',function(){
    li1.classList.remove('active');
    li3.classList.remove('active');
    li4.classList.remove('active');
    li5.classList.remove('active');
    this.classList.add('active');
})
li3.addEventListener('click',function(){
    li1.classList.remove('active');
    li2.classList.remove('active');
    li4.classList.remove('active');
    li5.classList.remove('active');
    this.classList.add('active');
})
li4.addEventListener('click',function(){
    li1.classList.remove('active');
    li2.classList.remove('active');
    li3.classList.remove('active');
    li5.classList.remove('active');
    this.classList.add('active');
})
li5.addEventListener('click',function(){
    li1.classList.remove('active');
    li2.classList.remove('active');
    li3.classList.remove('active');
    li4.classList.remove('active');
    this.classList.add('active');
})

// Mobile menu

var mobileMenu = document.querySelector('.mobile-menu');
var mobileMenu2 = document.querySelector('.mobile-menu-2');
var menu = document.querySelector('.header .menu');

mobileMenu.addEventListener('click', function(){
    menu.classList.toggle('toggle-menu');
 })


// slider js
var boxClick1 = document.querySelector('.services .box-1');
var boxClick2 = document.querySelector('.services .box-2');
var boxClick3 = document.querySelector('.services .box-3');
var boxClick4 = document.querySelector('.services .box-4');
var slider1 = document.querySelector('.slider-1');
var slider2 = document.querySelector('.slider-2');
var slider3 = document.querySelector('.slider-3');
var slider4 = document.querySelector('.slider-4');


boxClick1.addEventListener('click', function(){
    this.classList.remove('box');
    this.classList.add('active');
    this.classList.add('color-1');
    boxClick4.classList.remove('color-4');
    boxClick2.classList.remove('color-2');
    boxClick3.classList.remove('color-3');

    boxClick3.classList.remove('active');
    boxClick3.classList.add('box');
    boxClick2.classList.remove('active');
    boxClick2.classList.add('box');
    boxClick4.classList.remove('active');
    boxClick4.classList.add('box');

    slider1.classList.add('active-slider');
    slider2.classList.remove('active-slider');
    slider3.classList.remove('active-slider');
    slider4.classList.remove('active-slider');
})
boxClick2.addEventListener('click', function(){
    this.classList.remove('box');
    this.classList.add('active');
    this.classList.add('color-2');
    boxClick1.classList.remove('color-1');
    boxClick4.classList.remove('color-4');
    boxClick3.classList.remove('color-3');

    boxClick1.classList.remove('active');
    boxClick1.classList.add('box');
    boxClick3.classList.remove('active');
    boxClick3.classList.add('box');
    boxClick4.classList.remove('active');
    boxClick4.classList.add('box');

    slider1.classList.remove('active-slider');
    slider2.classList.add('active-slider');
    slider3.classList.remove('active-slider');
    slider4.classList.remove('active-slider');
})
boxClick3.addEventListener('click', function(){
    this.classList.remove('box');
    this.classList.add('active');
    this.classList.add('color-3');
    boxClick1.classList.remove('color-1');
    boxClick2.classList.remove('color-2');
    boxClick4.classList.remove('color-4');

    boxClick1.classList.remove('active');
    boxClick1.classList.add('box');
    boxClick2.classList.remove('active');
    boxClick2.classList.add('box');
    boxClick4.classList.remove('active');
    boxClick4.classList.add('box');

    slider1.classList.remove('active-slider');
    slider2.classList.remove('active-slider');
    slider3.classList.add('active-slider');
    slider4.classList.remove('active-slider');
})
boxClick4.addEventListener('click', function(){
    this.classList.remove('box');
    this.classList.add('active');
    this.classList.add('color-4');
    boxClick1.classList.remove('color-1');
    boxClick2.classList.remove('color-2');
    boxClick3.classList.remove('color-3');

    boxClick1.classList.remove('active');
    boxClick1.classList.add('box');
    boxClick2.classList.remove('active');
    boxClick2.classList.add('box');
    boxClick3.classList.remove('active');
    boxClick3.classList.add('box');

    slider1.classList.remove('active-slider');
    slider2.classList.remove('active-slider');
    slider3.classList.remove('active-slider');
    slider4.classList.add('active-slider');
})

















