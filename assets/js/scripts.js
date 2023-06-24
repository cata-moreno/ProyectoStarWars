
//conectar y obtener info api, transformar datos json, crear variables

const consumoStarWars=(contador, x) => {
    let suma = contador + 1
    let endpoint = 'https://swapi.dev/api/people/' + suma ;
    fetch(endpoint)
    .then (respuesta =>respuesta.json())
    .then (personaje=>{
        
        //variables cards 
        let datoNombre = personaje.name
        let datoAltura = personaje.height
        let datoPeso  = personaje.mass
        let color = 'color' + x

        let contenedor = document.getElementsByClassName('contenedor')[x]

        // child contenedor
        let carta = document.createElement('div')
        carta.setAttribute('class','card m-3 ancho')
        contenedor.appendChild(carta)

        // child carta        
        let row = document.createElement('div')
        row.setAttribute('class','row g-0')
        carta.appendChild(row)

        // child row
        let col1 = document.createElement('div')
        col1.setAttribute('class','col-md-2 d-flex justify-content-center align-items-center')
        row.appendChild (col1)

         // cirulo
        let circulo = document.createElement('div')
        circulo.setAttribute('class', `circulo ${color}`)
        col1.appendChild(circulo)

        //col2
        let col2 = document.createElement('div')
        col2.setAttribute('class','col-md-10')
        row.appendChild(col2)

        //card2
        let cardTwo = document.createElement('div')
        cardTwo.setAttribute('class','card-body')
        col2.appendChild(cardTwo)

        //nombre
        let nombre = document.createElement('h5')
        nombre.setAttribute('class','card-title')
        nombre.innerHTML = datoNombre
        cardTwo.appendChild(nombre)

        //info
        let parrafo = document.createElement('p')
        parrafo.setAttribute('class','card-text"')
        parrafo.innerHTML = `<b>Altura</b>: ${datoAltura} cm <br><b>Peso:</b> ${datoPeso} kg`
        cardTwo.appendChild(parrafo)

    })
}

//arreglos para personajes

//primeros personajes 1-5
let array1 = [0,1,2,3,4]

function* recorrerArray1() {
    let i = 0
    yield array1[i]
    i++
    yield array1[i]
    i++
    yield array1[i]
    i++
    yield array1[i]
    i++
    yield array1[i]
    i++
    }

let numeroDeTurno = recorrerArray1()
let a = 0 

$('#rango1').mouseenter (() => {
    
    if (array1.includes(a)) {
        let contador = numeroDeTurno.next().value 
        consumoStarWars(contador,0)
        a++
    }

})

//segundos personajes 6-11
let array2 = [5,6,7,8,9]
    function* recorrerArray2() {
    let i = 0
    yield array2[i]
    i++
    yield array2[i]
    i++
    yield array2[i]
    i++
    yield array2[i]
    i++
    yield array2[i]
    i++
    }

let numeroDeTurno2 = recorrerArray2()
let b = 5

$('#rango2').mouseenter (() => {
    
    if (array2.includes(b)) {
        let contador = numeroDeTurno2.next().value 
        consumoStarWars(contador,1)
        b++
    } 
    
})

//terceros personajes 12-17
let array3 = [10,11,12,13,14]
function* recorrerArray3() {
    let i = 0
    yield array3[i]
    i++
    yield array3[i]
    i++
    yield array3[i]
    i++
    yield array3[i]
    i++
    yield array3[i]
    i++
    }

let numeroDeTurno3 = recorrerArray3()
let c = 10

$('#rango3').mouseenter (() => {

    if (array3.includes(c)) {
        let contador = numeroDeTurno3.next().value 
        consumoStarWars(contador,2)
        c++
    } 
    
    
})