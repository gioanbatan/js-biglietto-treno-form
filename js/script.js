// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2 (BONUS):
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

// DATA
// Prezzo per km di 0.21€
const pricePerKm = 0.21;
console.log("pricePerKm", pricePerKm)

// INPUT
// L'utente fornisce i km da percorrere attraverso l'input
const userAgeInput = document.getElementById("user-age");
console.log(userAgeInput);

// L'uterte fornisce l'età attraverso l'input
const userDistanceInput = document.getElementById("user-distance");
console.log(userDistanceInput);

// Pulsante per l'invio dati
const sendBtn = document.getElementById("send-btn");

// DATA PROCESSING
// Click sul punsante "Invia!"
sendBtn.addEventListener("click", function() {
    console.log("CLICK btn")
    console.log(userAgeInput.value);
    console.log(userDistanceInput.value);

    // Memorizzo il valore  di userAgeInput in userAge
    const userAge = parseInt(userAgeInput.value);
    // Memorizzo il valore  di userDistanceInput in userDistance
    const userDistance = parseInt(userDistanceInput.value);
    console.log("userAge", userAge, typeof(userAge), "userDistance", userDistance, typeof(userDistance))
    
    
    if (isNaN(userAge) || isNaN(userDistance)) {
        alert("ERRORE! Inserire solo numeri!")
    }

    // Calcolare prezzo parziale moltiplicando prezzo per km per i km da percorrere
    let pricePartial = parseInt(userDistance * pricePerKm);
    console.log("partial", pricePartial);
    
    // Sconto
    let discount = 0;
    
    // Sconto minorenni
    // SE età utente è minore di 18 ALLORA impostare lo sconto a 20%
    if (userAge < 18) {
        discount = 20;
    } else if (userAge >= 65) {
        // Sconto over 65
        // ALTRIMENTI SE età utente è maggiore/uguale a 65 ALLORA impostare lo sconto a 40%
        discount = 40;
    }
    // ALTRIMENTI lo sconto resta a 0%

    // Applicare sconto a prezzo parziale per ottenere prezzo totale
    const priceTotal = (pricePartial - ((pricePartial / 100) * discount)).toFixed(2);
    console.log("total", priceTotal);
    
    // OUTPUT
    // Mostrare prezzo finale su schermo
    document.getElementById("final-price").innerHTML = `Il prezzo del tuo biglietto è: ${priceTotal} €`;

    // Pulizia input
    userAgeInput.value = "";
    userDistanceInput.value = "";
})