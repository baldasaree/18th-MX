const body = document.querySelector('body');
const firstBtn = document.querySelector('button');

let clickCount = 0;

firstBtn.addEventListener('click', () => {

    clickCount++;

    if (clickCount === 5) {
        firstBtn.textContent = "Almost There";
    }

    if (clickCount === 8) {
        firstBtn.textContent = "Really Close";
    }
    
    if (clickCount === 10) {
        const para = document.createElement('p');
        para.textContent = "Welcome to Liaison Officer of the 18th Management e[X]posed!";
        body.appendChild(para);
    }
})
