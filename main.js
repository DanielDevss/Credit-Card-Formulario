// TODO campos formulario
let inpName = document.querySelector('#name');
let inpNumber = document.querySelector('#noCard');
let inpDate = document.querySelector('#date');
let inpCvc = document.querySelector('#firma');
let selectTypeCard = document.querySelector('#typeCard');

// TODO campos tarjeta
let cardName = document.querySelector('#cardName');
let cardNumber = document.querySelector('#cardNumber')
let cardDate = document.querySelector('#cardDate')
let cardType = document.querySelector('#cardType')
let cardCVC = document.querySelector('#cardCvc')


let cardFront, cardBack;
cardFront = document.querySelector('#cardFront');
cardBack = document.querySelector('#cardBack');

// inpCvc.addEventListener('focus', () => {

// })

inpCvc.addEventListener('focus', () => rotarBack())
inpCvc.addEventListener('blur', () => rotarFront())


function rotarFront(){
    cardFront.style.transform = "perspective(500px) rotateY(0deg)"
    cardBack.style.transform = "perspective(500px) rotateY(180deg)"
}
function rotarBack(){
    cardFront.style.transform = "perspective(500px) rotateY(180deg)"
    cardBack.style.transform = "perspective(500px) rotateY(360deg)"
}

inpName.addEventListener('keyup', (e) => {
    cardName.textContent = inpName.value;
})

selectTypeCard.addEventListener('change', (e) => {
    if(selectTypeCard.value === "visa"){
        cardType.src = "images/visa.png";
    }
    else if(selectTypeCard.value === "master-card"){
        cardType.src = "images/mastercard.png";
    }
    else{
        cardType.src = "images/iconDefaultType.png";
    }
})

inpNumber.addEventListener('keyup', (e) => {
    cardNumber.textContent = agregarCaracter(inpNumber.value, " ", 4);
})

inpDate.addEventListener('keyup', (e)=> {
    cardDate.textContent = agregarCaracter(inpDate.value, " / ", 2)
})

inpCvc.addEventListener('keyup', (e) => {
    cardCVC.textContent = inpCvc.value
})

function agregarCaracter(cadena, caracter, pasos){
    let cadenaConCaracteres = "";
    const longitudCadena = cadena.length;
    for (let i = 0; i < longitudCadena; i += pasos) {
        if (i + pasos < longitudCadena) {
            cadenaConCaracteres += cadena.substring(i, i + pasos) + caracter;
        } else {
            cadenaConCaracteres += cadena.substring(i, longitudCadena);
        }
    }
    return cadenaConCaracteres;
}