const AGE_MAX = 18;
const SEX = 'm';

//COMILLAS ES ALT +96
function Welcome(name){
    return `Bienvenido al bar ${name}`
}
function notWelcome(name){
    return `No eres Bienvenido al bar ${name}`;
}
function notSupportAge(name){
    return `Eres menor para entrar al bar ${name}`;
}
function ElBar(){
    //DEBUGGER
    let name = prompt('Ingresa tu nombre');
    let age = Number(prompt('Ingresa tu edad'));
    let sex = prompt('Ingresa sexo');

    if(age> AGE_MAX && sex.toLocaleLowerCase() == SEX){
        alert(Welcome(name));
    }else if(age < AGE_MAX){
        alert(notSupportAge(name));
    }else{
        alert(notWelcome(name))
    }
}
//ElBar();

function flavorChose(flavor){
    return `el sabor que elegiste fue ${flavor}`;
}
function flavorNotFound(flavor){
    return `el sabor ${flavor} no lo tenemos aun`;
}
function LaHeladeria(){
    let flavor = prompt(`Ingresa  el sabor que quieres (fresa, melon, sandia, naranja, kiwi)`).toLocaleLowerCase();
    switch (flavor) {
        case 'fresa':{
            alert(flavorChose(flavor));
            break;
        }
        case `melon`:{
            alert(flavorChose(flavor));
            break;
        }
        case `sandia`:{
            alert(flavorChose(flavor));
            break;
        }
        case `naranja`:{
            alert(flavorChose(flavor));
            break;
        }
        case `kiwi`:{
            alert(flavorChose(flavor));
            break;
        }
        default:{
            alert(flavorNotFound);
        break;
        }
    }
    alert(`vuelva pronto`);
}
//LaHeladeria();

function suma(a, b){
    if(arguments.length>2) throw console.error(`no soporta mas de 2 argumentos`)
    return a + b
}

suma(2,3)

console.log(`efshi`)

/*
FUNCION QUE GRABARA LOS NOMBRES DE 7 A 9 CARACTERES
*/ 
function saveName(name){
    //debugger;
    try {
        if(name.length < 6) throw `SHORT`;
        if(name.length > 10) throw `LONG`;
        message = `El nombre ${name} es correcto`
    } catch (err) {
        if(err === `SHORT`) {
            message = `El nombre ${name} es muy corto`
        };
        if(err === `LONG`) {
            message = `El nombre ${name} es muy largo`
        };   
    }
    finally{ 
        console.log(`Nombre evaluado`, message);
    }
}

saveName(`ana`);
saveName(`Luis`);
saveName(`Christian123`);
