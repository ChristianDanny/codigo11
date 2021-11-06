/*
VARIABLES
las variables son contenedores de valores, existen diferentes tipos de variables
entre ellas tenemos la variable tipo LET y tipo CONST y tambien una que no es recomendable
usar que es VAR
 no se empieza por numero ni por caracter especial 
 se empieza en minuscula
*/

//LET

let nombre = 'soy christian';
let yabiku;
console.log(nombre);
console.log(yabiku);

yabiku = 'CUALQUIER VALOR';
console.log(yabiku);

//CONST
const PI = 3.14;
console.log(PI); // SALE ERROR PORQUE ES UNA VARIABL CONSTANTE Y NO PUEDE SER MODIFICADA
/*PI = 2;*/
//TIPOS DE DATOS
let user = 'Christian';//el valor que va dentro de comilla simple -> STRING
let age = 35; // numero
let isMan = true; // boolean - verdadero o falso ---- true o false
let isMan2 = false; 
let account = null; // valor nulo
let married; // undefined
let hash = Symbol("123456") // Symbol -- valor unico
let alumno ={
    sexo: 'femenino',
    edad: 34,
    grado: 2
}//objeto
account = {
    sexo: 'masculino'
}

console.log( user,"es" ,typeof user)
console.log( age, typeof age)
console.log( isMan, typeof isMan)
console.log( isMan2, typeof isMan2)
console.log( account, typeof account)
console.log( married, typeof married)
console.log( hash, typeof hash)
console.log( alumno, typeof alumno)
/*
Cambiar tipo de DATO
*/ 

let age2 = 30;
let age3 = '30';
console.log(age2, typeof age2);
console.log(age2,  String(age2).replace('30', 200))
console.log(age2, typeof Boolean(age2))
console.log(age3, typeof Number(age3))
console.log(age3,  Number(age3).toFixed(1))