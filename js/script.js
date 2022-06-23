console.log('JS OK')

/*

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un elemento contenitore nel DOM e aggiungendo (attraverso il metodo append(), appendChild() o innerHTML) i vari elementi html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


*/

/*
1- creare un contatore per stampare inumeri da 1 a 100
2- creare un if se sono multipli di 3 scrivere "FIZZ"
3- creare un if se sono multipli di 5 e scrivere "BUZZ"
4- creare un if se sono multipli di 3 e 5 e scrivere "FIZZBUZZ"
*/


// 1-
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log('FIZZ');
    }
    if (i % 5 == 0) {
        console.log('BUZZ');
    }
    if (i % 5 == 0 && i % 3 == 0) {
        console.log('FIZZBUZZ')
    }
    console.log(i);
}