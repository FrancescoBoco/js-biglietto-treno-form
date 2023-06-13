
const numberKilometers = prompt ('inserisci il numeno di kilometri');
const Age = prompt ("Inserisci l'età del passeggero ");

// ------------------

const verificationKilo = parseInt(numberKilometers)
const verificationAge = parseInt(Age)





// CALCOLO PREZZO BIGLIETTO


 var ticketPrice = numberKilometers * 0.21 


// SCONTISTICA




var ticketDiscount = (ticketPrice * 20) / 100 
var ticketDiscountSenior = (ticketPrice * 40) / 100 

if (Age < 18){
    document.writeln ('Il prezzo del biglietto è' + ' ' + (ticketPrice - ticketDiscount) )
}

if (Age > 18 && Age < 60){
    document.writeln ('Il prezzo del biglietto è' + ' ' + ticketPrice )
}


if (Age > 60){
    document.writeln ( 'Il prezzo del biglietto è'  + ' ' +  (ticketPrice - ticketDiscountSenior) )
}

console.log ( typeof ticketDiscount,typeof ticketPrice )


// VALIDAZIONE 
if (isNaN (verificationAge)) {

    alert('Non è un numero')
    
    }

if (isNaN (verificationKilo)) {

    alert('Non è un numero')
    
    }