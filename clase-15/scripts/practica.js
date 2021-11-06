function sumar(a,b){
    return a+b;
}
function restar(a,b){
    return a-b;
}
function multiplicar(a,b){
    return a*b;
}
function dividir(a,b){
    return a/b;
}
function potencia(a,b){
    return Math.pow(a,b);
}

function operaciones(){
        let a = parseFloat(prompt("ingresa el primer numero"));
        let b = parseFloat(prompt("ingresa el segundo numero"));
        
        console.log('los numeros son: ', a,'y',b)
        console.log('sumar a+b = ', sumar(a,b));
        console.log('restar a-b = ', restar(a,b));
        console.log('multiplicar a*b = ', multiplicar(a,b));
        console.log('dividr a/b = ', dividir(a,b));
        console.log('potencia de a y b = ', potencia(a,b));
}
operaciones();