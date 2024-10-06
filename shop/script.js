let boss = document.querySelector('.banzaservice');
let espoir = document.querySelector('.ctg');
boss.addEventListener('click', function cliquer() {
    espoir.style.display = 'block';
});
let menu = document.querySelector('.carse');
menu.addEventListener('click', function cliquer() {
    espoir.style.display = 'none';
});

let boss1 = document.querySelector('.banzaservice1');
let espoir1 = document.querySelector('.ctg1');
boss1.addEventListener('click', function cliquer() {
    espoir1.style.display = 'block';
});
let menu1 = document.querySelector('.carse1');
menu1.addEventListener('click', function cliquer() {
    espoir1.style.display = 'none';
});

let boss2 = document.querySelector('.banzaservice2');
let espoir2 = document.querySelector('.ctg2');
boss2.addEventListener('click', function cliquer() {
    espoir2.style.display = 'block';
});
let menu2 = document.querySelector('.carse2');
menu2.addEventListener('click', function cliquer() {
    espoir2.style.display = 'none';
});

let boss3 = document.querySelector('.banzaservice3');
let espoir3 = document.querySelector('.ctg3');
boss3.addEventListener('click', function cliquer() {
    espoir3.style.display = 'block';
});
let menu3 = document.querySelector('.carse3');
menu3.addEventListener('click', function cliquer() {
    espoir3.style.display = 'none';
});

let produit1 = document.querySelector('.oncli');
let produit2 = document.querySelector('.outcli');
let produit3 = document.querySelector('.produit');
let produit4 = document.querySelector('.produit1');
let produit5 = document.querySelector('.produit2');
let produit6 = document.querySelector('.onclit');
let produit7 = document.querySelector('.outclit');
let produit8 = document.querySelector('.onclis');
let produit9 = document.querySelector('.outclis');

produit1.addEventListener('click', function banza(){
    produit5.style.display = 'block';
    produit3.style.display = 'none';
});

produit2.addEventListener('click', function philos(){
    produit4.style.display = 'block';
    produit3.style.display = 'none';
});

produit6.addEventListener('click', function banza(){
    produit3.style.display = 'block';
    produit4.style.display = 'none';
});

produit7.addEventListener('click', function philos(){
    produit5.style.display = 'block';
    produit4.style.display = 'none';
});

produit8.addEventListener('click', function banza(){
    produit4.style.display = 'block';
    produit5.style.display = 'none';
});

produit9.addEventListener('click', function philos(){
    produit3.style.display = 'block';
    produit5.style.display = 'none';
});

let div = document.querySelector('.former');
let button = document.querySelector('.buy');
let prix = document.querySelector('.prices');
button.addEventListener('click', function philos(){
    div.style.display = 'block';
    prix.style.display = 'none';
})

let form = document.getElementById('myform');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let number = document.getElementById('number').value.trim();
    let address = document.getElementById('address').value.trim();
    let code = document.getElementById('code').value.trim();
    let country = document.getElementById('country').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || number === '' || address=== '' || code === '' || country === '' || message === '') {
        alert('tous les champs sont obligatoires.');
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(! emailRegex.test(email)){
        alert('veuillez entrer une adresse email valide');
        return;
    }
    alert('achat soumis avec succès! la livraison dans après une semaine dès que votre paiement sera admis');
    form.reset();
});