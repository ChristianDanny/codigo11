/*
EJERCICIO 1
function suma(a,b){
    return a+b;
}

suma(2,3);
console.log(`suma`,suma(3,4));
*/

/*
EJERCICIO 2
function promedio(a,b,c,d){
    return (a+b+c+d)/4;
}
function notas(){
    let a = Number(prompt(`ingrese nota 1`));
    let b = Number(prompt(`ingrese nota 1`));
    let c = Number(prompt(`ingrese nota 1`));
    let d = Number(prompt(`ingrese nota 1`));

    console.log('promedio = ', promedio(a,b,c,d));
}
notas();
*/

/*
EJERCICIO 3
function area(a,b){
    return a*b;
}
function rectangulo (){
    let a=Number(prompt(`Ingrese base`));
    let b=Number(prompt(`Ingrese altura`));
    console.log(`area`, area(a,b));
}
rectangulo();
*/

/*
EJERCICIO 4
function area(a,b){
    return (a*b)/2;
}
function triangulo (){
    let a=Number(prompt(`Ingrese base`));
    let b=Number(prompt(`Ingrese altura`));
    console.log(`area`, area(a,b));
}
triangulo();
*/

/*
EJERCICIO 5
const PI = 3.14;
function area(r){
    return PI*Math.pow(r,2);
}
function circunferencia (){
    let r=Number(prompt(`Ingrese radio`));

    console.log(`area`, area(r));
}
circunferencia();
*/

/*
EJERCICIO 6
function sueldo(a, b){
    return a*b;
}

function semanal(){
    let a = Number(prompt(`Ingrese horas trabajadas`));
    let b = Number(prompt(`Ingrese salario por hora`));
    console.log(`Horas trabajadas =`, a);
    console.log(`Salarioxhora =`, b);
    console.log(`sueldo =`, sueldo(a,b));
}
semanal();
*/
/*
//EJERCICIO 7
function pulgadas(){
    let metros =Number(prompt("Ingrese los metros que necesita"));
    let cambio = metros * 39.3701;
    alert(`Total de pulgadas es: ${cambio}`);
}
pulgadas();
*/
/*
EJERCICIO 8
function moneda(){
    let soles = Number(prompt(`Ingrese moneda soles`));
    let dolar = soles /4;
    console.log(`Tu dinero en soles`, soles)
    console.log(`Tu dinero en dolares es`, dolar)
}
moneda();
*/

/*
EJERCICIO 9
const fecha_actual = 2021;
function edad(año){
    return fecha_actual - año;
}
function personal(){
    let año = Number(prompt(`Ingrese año que nació`));
    console.log(`La edad es: `,edad(año));
}
personal();
*/

/*
//EJERCICIO 10
function personas(){
    //debugger
    menor = 999;
    for(let i=0; i<3;i++){
        let nombre= prompt(`Ingrese nombre`);
        let age = Number(prompt('Ingresa tu edad'));
        if(menor > age){
            menor = age;
        }

        console.log(nombre);
        console.log(age);
    }
    
    alert(`la edad menor es:  ${menor}`);
}
personas();
*/

/*
EJERCICIO 11
function bono() {
    let age = Number(prompt(`Ingrese cuantos años de antiguedad`));
    switch (age) {
        case 1:
            alert(`tu bono es $100`)
            break;
        case 2:
            alert(`tu bono es $200`)
            break;
        case 3:
            alert(`tu bono es $300`)
            break;
        case 4:
            alert(`tu bono es $400`)
            break;
        case 5:
            alert(`tu bono es $500`)
            break;
        default:
            if(age>5){
                alert(`tu bono es $1000`)
            }
            break;
    }
}
bono();
*/

/*
EJERCICIO 12
function  sueldo() {
    salario = 1500;
    for (let i = 0; i < 6; i++) {
        salario = salario + (salario)*0.1;
        console.log(`año `,i,`:`,salario);
    }    
    console.log(`su nuevo salario es: `,salario);
}
sueldo();
*/

/*
EJERCICIO 13
function notas(nota) {
    if(nota>10 && nota<21){
        return "aprobado";
    }else{
        return "desaprobado";
    }
}

function calificaciones(){
    let n = Number(prompt(`ingrese cantidad de alumnos`));
    for(let i=0;i<n;i++){
        let nota = Number(prompt(`ingrese nota`));
        alert(notas(nota));
    }
    
}

calificaciones();
*/

/*
EJERCICIO 14
function focos(){
    let verde=0;
    let ver=``;
    let blanco=0;
    let bla=``;
    let rojo=0;
    let roj=``;
    let n= prompt(`Cantidad de focos`);
    for( let i=0;i<n;i++){
        let foco = prompt(`Ingresa  el color que quieres (verde, blanco y rojo)`).toLocaleLowerCase();
        if(foco==`verde`){
            verde++;
            //ver=`verde`;
        }
        if(foco==`blanco`){
            blanco++;
           // bla=`blanco`;
        }
        if(foco==`rojo`){
            rojo++;
            //roj=`rojo`;
        }
    }   
    console.log(`del color son: `,verde,`verde`, blanco, `blanco`, rojo, `rojo`); 
    console.log(verde);
    console.log(blanco);
    console.log(rojo);
    
}
focos();
*/
/*
//EJERCICIO 15
function votar() {
    let n = prompt(`cantidad de personas`);
    for(let i=0;i<n;i++){
        let age = prompt(`digite edad de la persona`);
        if(age>=18 && age<80){
            alert(`puede votar`)
        }else{
            alert(`no puede votar`);
        }
    }
}
votar();
*/
