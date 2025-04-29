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

console.log(somma(2, 3));
console.log(somma2(2, 3));
console.log(somma3(2, 3));

// Snack 2
// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (a) => a * a;

console.log(quadrato(6));
