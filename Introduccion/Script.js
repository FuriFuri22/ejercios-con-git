/*alert('Bienvenido')

let saludoUser = prompt('Por favor, ingrese su nombre',);

alert(`Hola ${saludoUser}`);

let num1 = parseInt(prompt(` ${saludoUser}, por favor ingrese un numero`,));
let num2 = parseInt(prompt(`${saludoUser} ingresa otro numero`,));

alert(`La suma es ${num1+num2}, la resta es ${num1 - num2}, la multiplicacion es ${num1*num2}, la division es ${num1/num2}`)*/

/*let string = '1254'
console.log(typeof(+string))*/

/*let userName = prompt('Por favor, ingrese su nombre',);
let lastName = prompt('Por favor, ingrese su apellido',);

alert(`Bienvenido ${lastName.toUpperCase()}`)*/

/*const miArray = ['pipi pipi', 5, ()=>{}, {}, []];*/

/*const nombres = ['Pan', 'Harina', 'Carne'];

const indice = nombres.indexOf('Pan')

console.log(indice)*/

/*function practicaFuunciones(){
  let arrayDeNumeros = [6, 8, 9, 45, 3, 4];
    const numeros = (nuevoValor, posicion) => {
       arrayDeNumeros.splice(posicion, 1, nuevoValor)
    }

    numeros(7, arrayDeNumeros.indexOf(45));

    console.log(arrayDeNumeros);
}*/

const INVITADOS = [ 'Lucas', 'Matias', 'Jose', 'Pedro', 'Martina', 'Marcelo', 'Esteban', 'Marcela', 'Martin'];

console.log(`El numero de invitados es ${INVITADOS.length} y el ultimo invitado es ${INVITADOS[INVITADOS.length - 1]}`);

INVITADOS.splice(INVITADOS.indexOf('Pedro'), 1);
INVITADOS.push('Pedro');
INVITADOS.splice(INVITADOS.indexOf('Martina'), 1);

const newListIN = INVITADOS.flatMap(x => [x + `. orden: ${INVITADOS.indexOf(x) + 1}`]);
console.log(newListIN)

console.log(newListIN.sort());

//INVITADOS.forEach()

/*function primero (fn){
  setTimeout(() => {
     console.log('Primero'); 
   fn();
  },2000)
}

function segundo (){
 console.log('Segundo');
}
primero(segundo);

const primero = (fn) => {
  setTimeout(() => {
    console.log('Primero'); 
  fn();
 },2000)
}

const segundo = () => {
  console.log('Segundo');
}

primero(segundo)*/

/*const miArray = ['hugo', 'loer', 'fer']

miArray.forEach((nombre, indice) => console.log(nombre, indice))*/

/*const user = {};

user.name = 'Robert'
user.lastName = 'Zilbert'
console.log(user)

user.name = 'Jane'

console.log(user)

for( let key in user){
  console.log(key)
}*/