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
        const linkText = document.createTextNode("sini dong");

        link.href = "https://line.me/ti/g/eTcMJdMpnZ";
        para.textContent = "met ya bank";
        link.appendChild(linkText);
        
        body.appendChild(para);
        body.appendChild(link);
    }
})
