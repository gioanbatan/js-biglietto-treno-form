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

// INPUT
// L'utente fornisce i km da percorrere attraverso l'input

// L'uterte fornisce l'età attraverso l'input

// DATA PROCESSING
// Calcolare prezzo parziale moltiplicando prezzo per km per i km da percorrere

// SE età utente è minore di 18 ALLORA impostare lo sconto a 20%
// ALTRIMENTI SE età utente è maggiore/uguale a 65 ALLORA impostare lo sconto a 40%
// ALTRIMENTI lo sconto resta a 0%

// Applicare sconto a prezzo parziale per ottenere prezzo finale

// OUTPUT
// Mostrare prezzo finale su schermo