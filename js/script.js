
const numberKilometers = prompt ('inserisci il numeno di kilometri');
const Age = prompt ("Inserisci l'età del passeggero ");

// ------------------

const verificationKilo = parseInt(numberKilometers)
const verificationAge = parseInt(Age)





// CALCOLO PREZZO BIGLIETTO


 var ticketPrice= numberKilometers * 0.21 


// SCONTISTICA


var ticketDiscount = (ticketPrice * 20) / 100 
var ticketDiscountSenior = (ticketPrice * 40) / 100 

if (Age < 18){
    ticketPrice * 0.8 
}

if (Age > 18 && Age < 60){
    ticketPrice 
}


if (Age > 60){
     ticketPrice * 0.6 
}

document.querySelector('h1').innerHTML =  'Il prezzo del biglietto è'  + ' ' +  ticketPrice 

console.log ( typeof ticketDiscount,typeof ticketPrice )






// VALIDAZIONE 
if (isNaN (verificationAge)) {

    alert('Non è un numero')
    
}

if (isNaN (verificationKilo)) {

    alert('Non è un numero')
    
}


    // INIZIO FORM 


    const myButton = document.getElementById('my-button');

    myButton.addEventListener ('click',
        function() {

            alert(' cliccato ')

    }
    );




const h1 = document.querySelector('h1');

const myDiv = document.getElementById('my-div');
