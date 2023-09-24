const body = document.querySelector('body');
const firstBtn = document.querySelector('button');

let clickCount = 0;

firstBtn.addEventListener('click', () => {

    clickCount++;
    if (clickCount === 3) {
        const para = document.createElement('p');
        para.textContent = "Welcome to Management e[X]posed!";
        body.appendChild(para);
    }
})