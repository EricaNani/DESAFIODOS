var edadUno = prompt('Ingrese aqui la primer edad');

var edadDos = prompt('Ingrese aqui la segunda edad');

var res;

if(edadUno < edadDos){
    res = (edadDos - edadUno);
} else {
    res = (edadUno - edadDos);
}

console.log('La diferencia de edad es: ' + res);