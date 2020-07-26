'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('heart'),
      oneHeart = document.querySelector('.heart');

console.dir(box);

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';