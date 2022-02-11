
"use strict";

const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');
const section = document.querySelector('section');

for(let i = 1; i < 400; i++) {
    banner.innerHTML += "<div class='blocks'></div>";
    const duration = Math.random() * 5;
    blocks[i].style.animationDuration = 2 + duration + 's';
    blocks[i].style.animationDelay = duration + 's';
}

setTimeout(function() {
    section.classList.add('active');
    location.reload();
}, 15000);
