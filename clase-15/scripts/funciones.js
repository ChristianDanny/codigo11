function suma(a, b){
    return a + b;
}
function resta(a, b){
    return a - b;
}


console.log(suma(3,4));
console.log(suma(2,5));
console.log(suma(1,6));
console.log(suma(4,2));
console.log(suma(8,1));

(function(){
    function calculadora(){
        let a = parseFloat(prompt("ingresa el primer numero"));
        let b = parseFloat(prompt("ingresa el segundo numero"));
    
        console.log('sumar a+b = ', suma(a,b));
        console.log('restar a+b = ', resta(a,b));
    }
    
    calculadora();    
})()


