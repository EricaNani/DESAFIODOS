let persona = {
    nombre: 'nico',
    edad: 21,
    saludar: () => console.log('hola')
}
let persona2 = {
    nombre: 'eri',
    edad: 24,
    saludar: () => console.log('hola lucas')
}

let persona3 = {
    nombre: 'lucas',
    edad: 28,
    saludar: () => console.log('hola eri')
}
let animal = {
    nombre: 'romana',
    edad: 11,
    saludar: () => console.log('hola estupida')
}

let personasAnotadas = [persona, persona2, persona3, animal]

let nombresAgencia = personasAnotadas.map(item => {
    return item.nombre
})

let edadesAgencia = personasAnotadas.map(item => {
    return item.edad
})

console.log(nombresAgencia, edadesAgencia)

let compra1 = {
    nombre: 'taza',
    cantidad: 3,
    descripcion: 'blablaba',
    precioTotal: 600,
}

let arr = [
    {
        nombre: "taza",
        cantidad: 3,
        descripcion: 'blablaba',
        precioTotal: 600,
    },
    {
        nombre: "plato",
        cantidad: 1,
        descripcion: 'blablaba',
        precioTotal: 200,
    },
    {
        nombre: "tenedor",
        cantidad: 7,
        descripcion: 'blablaba',
        precioTotal: 600,
    },
    {
        nombre: "cuchara",
        cantidad: 2,
        descripcion: 'blablaba',
        precioTotal: 600,
    },
]


let precioTotalProducto = edadesAgencia.reduce((acumulador, edad) => {
    return acumulador + precio * cantidadProductos
})
let promedioEdadAgencia = sumaEdadAgencia / personasAnotadas.length

console.log(promedioEdadAgencia)