var number = prompt('Ingrese aqui su capital');

if (number > 10000 && number < 20000) {
    alert("Su capital alcanza para comprar un departamento")
} 
else if(number > 20000) {
    alert("Su capital alcanza para comprar un departamento en una zona residencial")
}

else{
    alert("Su capital no es suficiente para comprar un departamento")
};