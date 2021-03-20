'use strict';

const circles = document.getElementsByClassName('circle'),
    box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),
    oneHeart = document.querySelector('.heart.first'),
    hearts = document.querySelectorAll('.heart');


//console.log(oneHeart);
//console.log(hearts);
console.dir(box);
box.style.width = '500px';
box.style.borderRadius = '20px';
box.style.backgroundColor = 'orange';

buttons[1].classList.add('active');
buttons[1].classList.remove('active');

const div = document.createElement('div');
div.classList.add('black');
//box.replaceWith(div);
box.after(div);
box.textContent = 'Заголовок';
div.innerHTML = '<h1>Заголовок</h1>';