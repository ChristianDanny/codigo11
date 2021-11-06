let numbers = [0,1,2,3,4,5,6,7,8,9,10];
let nombres = [`sebastian`,`jose`,`luis`,`pedro`];
let sabores = [`uva`,`melon`,`sandia`];
let pruebas = [[`ZERO`,1,2,3,4], 0, [1,2,3,4]]
console.log(`numeros`, numbers);
console.log(`nombres`, nombres);
console.log(`sabores`, sabores);

console.log(nombres[0])
console.log(nombres[4])

console.log(`prueba`, pruebas[0][0])

/*LENGTH */
numbers.length//LONGITUD DEL ARRAY

/*PUSH */
numbers.push(11)// agregar un numero al final del array

/*UNSHIFT */
numbers.unshift(11)//agregar numero al inicio del array
/* POP */
numbers.pop();//Eliminar el ultimo elemento del array
/*shift */
numbers.shift();//eliminar el primer elemento de un array
/*SPLICE*/
numbers.splice(2,2);

let alumno = {
    nombre: `sebastian`,
    lastname: `yabiku`,
    age: 35,
    grade: 5,
    sex: `m`,
    getName: function(){
        return this.nombre;
    },
    getFullName: function(){
        return `${this.nombre} ${this.lastname}`;
    },
};
console.log(`alumno nombre`, alumno.getName());

let profesores = {
    nombre: `sebastian`,
    lastname: `yabiku`,
    age: 35,
    grade: 5,
    sex: `m`,
    experience: [
        {
            college: `santisima trinidad`,
            age: 2022,
        },
        {
            college: `recoleta `,
            age: 2000,
        },
    ],
};
