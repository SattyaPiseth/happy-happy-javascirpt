'use strict';

let image = document.querySelector('#image');
let title = document.querySelector('#title');
let btnYes = document.querySelector('#btnYes');
let btnNo = document.querySelector('#btnNo');
let happySound = new Audio("./assets/happy-happy-happy-cat.mp3")
let sadSound = new Audio("./assets/crying-cat.mp3")

btnYes.addEventListener('click', () => {
    image.src = "https://media.tenor.com/lCKwsD2OW1kAAAAi/happy-cat-happy-happy-cat.gif";
    title.innerHTML = "Awww I love you too!";
    sadSound.pause();
    happySound.play();
    happySound.loop = true;
})
let btnYesScale = 1;
let btnNoScale = 1;


btnNo.addEventListener('click', () => {
    image.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmZsNm8yeWhlNGxyNGphczZ2Z2VjcDZjdXZ0YWhnd2V5dXY2a3E2ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/qxRMbqPKaXbUYB28Eu/giphy.gif";
    title.innerHTML = "You're breaking my heart!";
    happySound.pause();
    sadSound.play();
    sadSound.loop = true;
    btnYesScale +=0.1;
    btnNoScale -=0.1;
    btnYes.style.transform = `scale(${btnYesScale})`;
    btnNo.style.transform = `scale(${btnNoScale})`;
})