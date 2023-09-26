const body = document.querySelector('body');
const firstBtn = document.querySelector('button');

let clickCount = 0;

firstBtn.addEventListener('click', () => {

    clickCount++;

    if (clickCount === 5) {
        firstBtn.textContent = "DIKIT LAGIII";
    }

    if (clickCount === 8) {
        firstBtn.textContent = "BENERAN DIKIT LAGI";
    }
    
    if (clickCount === 10) {
        const para = document.createElement('p');
        const link = document.createElement('a');
        para.textContent = "Welcome to Liaison Officer of the 18th Management e[X]posed!";
        body.appendChild(para);
    }
})
