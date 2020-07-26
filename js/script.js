'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

console.dir(box);

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 1000px';

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});


const div = document.createElement('div');
// const text = document.createTextMode('Tut bil ya!');

div.classList.add('black');

wrapper.append(div);

// wrapper.appendChild(div);

// wrapper.prepend(div);

wrapper.insertBefore(div, hearts[0]);

// hearts[1].before(div);
// hearts[1].after(div);

circles[1].remove();
wrapper.removeChild(hearts[3]);


hearts[0].replaceWith(circles[0]);


div.innerHTML = <h1>Hello WORLD!</h1>;
// div.textContent = "Hello";

div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');
