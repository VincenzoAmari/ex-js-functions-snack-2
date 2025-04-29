// Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

function somma(a, b) {
  return a + b;
}

const somma2 = function (a, b) {
  return a + b;
};

const somma3 = (a, b) => a + b;

console.log(somma(2, 3)); //5
console.log(somma2(2, 3)); //5
console.log(somma3(2, 3)); //5

// Snack 2
// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (a) => a * a;

console.log(quadrato(6)); //36

// Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma4 = (a, b) => a + b;
const moltipicazione = (a, b) => a * b;
const sottrazione = (a, b) => a - b;
const divisione = (a, b) => a / b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(4, 2, somma4)); //6
console.log(eseguiOperazione(4, 2, moltipicazione)); //8
console.log(eseguiOperazione(4, 2, sottrazione)); //2
console.log(eseguiOperazione(8, 2, divisione)); //4

// Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

const timer = creaTimer(1000);

function creaTimer(timer) {
  return function () {
    setTimeout(() => {
      return console.log("tempo Scaduto!");
    }, timer);
  };
}

timer();

// Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

let intervallo;

function stampaOgniSecondo(frase) {
  intervallo = setInterval(() => {
    console.log(frase);
  }, 1000);
}

stampaOgniSecondo("stampo ogni secondo");

setTimeout(() => {
  clearInterval(intervallo);
  console.log("fine");
}, 5000);
