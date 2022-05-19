"use strict";
// alert('un mensaje');
// document.write(3 + 5);
// console.log('')
// let numero1= parseInt(prompt('primer numero'));
// let numero2= parseInt(prompt('segundo numero'));

// document.write('el numero es ' + (numero1+numero2))

// let n1 = parseInt(prompt("ingrese el primer numero"));
// let n2 = parseInt(prompt("ingrese el segundo numero"));
// let n3 = parseInt(prompt("ingrese el tercer numero"));

// if (n1 > n2 && n1 > n3) {
//     document.write("el mayor es " + n1);
// } else if (n2 > n3) {
//         document.write("el mayor es " + n2);
//     } else {
//         document.write("el mayor es " + n3);
//     }

// let n1 = parseInt(prompt('ingrese un numero'));

// if (n1 % 2 === 0) {
//     document.write('el numero es par')
// } else {
//     document.write('el numero no es par')
// }

// let frase = prompt('ingrese una frase');

// document.write(`las vocales que aparecen en :${frase}`);


// if (frase.includes('a')) {
//     document.write('a');
// }

// if (frase.includes('e')) {
//     document.write('e');
// }

// if (frase.includes('i')) {
//     document.write('i');
// }

// if (frase.includes('o')) {
//     document.write('o');
// }

// if (frase.includes('u')) {
//     document.write('u');
// }

// let n1 = parseInt(prompt('ingrese un numero'))

// if (n1 % 2 === 0 ) {
//     document.write('el numero es divisible en 2')
// } else if(n1 % 3 === 0) {
//     document.write('el numero es divisible en 3')
// } else if(n1 % 5 === 0) {
//     document.write('el numero es divisible en 5')
// } else if(n1 % 7 === 0) {
//     document.write('el numero es divisible en 7')
// }

let n1 = parseInt(prompt('ingrese un numero'))

if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {

if (n1 % 2 === 0 ) {
    document.write('el numero es divisible en 2 ');
}
if(n1 % 3 === 0) {
    document.write('el numero es divisible en 3 ');
}
if(n1 % 5 === 0) {
    document.write('el numero es divisible en 5 ');
}
if(n1 % 7 === 0) {
    document.write('el numero es divisible en 7 ');
} 

}else {
    document.write('el numero no es divisible ni en 2,3,5 o 7');
}