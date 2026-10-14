const touches = [ ...document.querySelectorAll('.bouton') ];
const listsKeybord = touches.map(touch => touch.dataset.key);
const ecran = document.querySelector('.ecran');

addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

const calculer = (valeur) => {
    if (listsKeybord.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent = "";
            break;
            case '13': 
                const calcule = eval(ecran.textContent)
                ecran.textContent = calcule
            break;
            default:
                const indexkeycode = listsKeybord.indexOf(valeur)
                const touche = touches[indexkeycode]
                ecran.textContent += touche.innerHTML;
            break;
            
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})