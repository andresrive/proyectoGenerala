class Jugador {
    constructor() {
        this.nombre = ""
    }
}

let imgLado1 = document.createElement('img')
imgLado1.src = "proyectoGenerala/images/imagenDado1.png"

let imgLado2 = document.createElement('img')
imgLado2.src = "proyectoGenerala/images/imagenDado2.png"

let imgLado3 = document.createElement('img')
imgLado3.src = "proyectoGenerala/images/imagenDado3.png"

let imgLado4 = document.createElement('img')
imgLado4.src = "proyectoGenerala/images/imagenDado4.png"

let imgLado5 = document.createElement('img')
imgLado5.src = "proyectoGenerala/images/imagenDado5.png"

let imgLado6 = document.createElement('img')
imgLado6.src = "proyectoGenerala/images/imagenDado6.png"

class Dado {
    constructor(identificador) {
        this.valor = this.printRandom()
        this.seleccionado = false;
        this.identificador = identificador
        this.img = ""
        switch (this.valor) {
            case 1:
                this.imgDado1.src = "images/imagenDado1.png"
                break;

            default:
                break;
        }
    }

    printRandom() {
        return (Math.floor(Math.random() * (7 - 1) + 1))
    }

    recalcularValorDado() {
        this.valor = this.printRandom() // llamo la funcion cuando tengo que recualcualr el valor de los dados en las otras tiradas de dados
    }
}

class Cubilete {
    constructor() {
        this.arrayDados = []
    }

    tirarDado() {
        if (this.arrayDados.length === 0) { //para saber si es la primer tirada, array vacio
            for (let i = 1; i <= 5; i++) {
                this.dado = new Dado(i)
                this.arrayDados.push(this.dado)
            }
        }

        else {
            for (let i = 1; i <= 5; i++) {
                let objetoDelArrayDADO = this.arrayDados[i]       //es un objeto dado!
                if (objetoDelArrayDADO.selecionado === true) {
                    objetoDelArrayDADO  // que se devuelva a el mismo????
                }

                else if (objetoDelArrayDADO.selecionado === false) {
                    objetoDelArrayDADO.recalcularValorDado()
                }
            }
        }
    }

    tirarDadosPrueba() {
        let pocker = [
            { valor: 5, seleccionado: false, identificador: 1 },
            { valor: 5, seleccionado: false, identificador: 2 },
            { valor: 5, seleccionado: false, identificador: 3 },
            { valor: 5, seleccionado: false, identificador: 4 },
            { valor: 4, seleccionado: false, identificador: 5 }
        ]

        let full = [
            { valor: 5, seleccionado: false, identificador: 1 },
            { valor: 5, seleccionado: false, identificador: 2 },
            { valor: 5, seleccionado: false, identificador: 3 },
            { valor: 4, seleccionado: false, identificador: 4 },
            { valor: 4, seleccionado: false, identificador: 5 }
        ]


        let generala = [
            { valor: 5, seleccionado: false, identificador: 1 },
            { valor: 5, seleccionado: false, identificador: 2 },
            { valor: 5, seleccionado: false, identificador: 3 },
            { valor: 5, seleccionado: false, identificador: 4 },
            { valor: 5, seleccionado: false, identificador: 5 }
        ]


        let escalera = [
            { valor: 1, seleccionado: false, identificador: 1 },
            { valor: 2, seleccionado: false, identificador: 2 },
            { valor: 3, seleccionado: false, identificador: 3 },
            { valor: 4, seleccionado: false, identificador: 4 },
            { valor: 5, seleccionado: false, identificador: 5 }
        ]


        let escalera1 = [
            { valor: 2, seleccionado: false, identificador: 1 },
            { valor: 3, seleccionado: false, identificador: 2 },
            { valor: 4, seleccionado: false, identificador: 3 },
            { valor: 5, seleccionado: false, identificador: 4 },
            { valor: 6, seleccionado: false, identificador: 5 }
        ]


        let escaleraChunga = [
            { valor: 2, seleccionado: false, identificador: 1 },
            { valor: 1, seleccionado: false, identificador: 2 },
            { valor: 4, seleccionado: false, identificador: 3 },
            { valor: 5, seleccionado: false, identificador: 4 },
            { valor: 6, seleccionado: false, identificador: 5 }
        ]
        /* return escaleraChunga */
        return full
    }
}


class Tablero {
    constructor() {
        this.posibilidad1 = 0
        this.posibilidad2 = 0
        this.posibilidad3 = 0
        this.posibilidad4 = 0
        this.posibilidad5 = 0
        this.posibilidad6 = 0
        this.escalera = 25
        this.full = 35
        this.pocker = 45
        this.generala = 55

    }

    getOptions(arrayDados) {     //obtengo opcines numericas
        let arrayValores = arrayDados.map((dado) => {
            return dado.valor
        }) //array de numeros
        arrayValores.sort() // ordenado

        let arrayObjCantidad = []

        arrayValores.forEach((valor) => {
            if (arrayObjCantidad.length === 0) { // si el array esta vacio creo los objetos 
                let obj = { valor: valor, cantidad: 1, total: valor }
                arrayObjCantidad.push(obj)
            }
            else {                                     //iguala los valores, en caso de coindicir, aumenta cantidad y total
                if (valor === arrayObjCantidad[arrayObjCantidad.length - 1].valor) {
                    arrayObjCantidad[arrayObjCantidad.length - 1].cantidad++
                    arrayObjCantidad[arrayObjCantidad.length - 1].total += valor
                }
                else {                                // en caso de no existir, creo el objeto
                    let obj = { valor: valor, cantidad: 1, total: valor }
                    arrayObjCantidad.push(obj)

                }
            }
        })

        // obtengo opciones de posibilidades 'especiales'
        let cantidadOpciones = arrayObjCantidad.length   // devuelve numero de cantidades
        if (cantidadOpciones === 1) {
            let generala = { valor: "generala", cantidad: 1, total: 55 }
            arrayObjCantidad.push(generala)
        }
        else if (cantidadOpciones === 2) {
            if (arrayObjCantidad[0].cantidad === 2 || arrayObjCantidad[0].cantidad === 3) {
                let full = { valor: "full", cantidad: 1, total: 35 }
                arrayObjCantidad.push(full)
            }
            else {
                let poker = { valor: "pocker", cantidad: 1, total: 45 }
                arrayObjCantidad.push(poker)
            }
        }

        else if (cantidadOpciones === 5) {
            /*  console.log("opcion 5 valores") */
            let control = true;

            // chequear si son consecutivos
            for (let i = arrayObjCantidad.length - 1; i > 0; i--) {
                let valor1 = arrayObjCantidad[i].valor
                let valor2 = arrayObjCantidad[i - 1].valor
                /* console.log("consecutivos? " + valor1 + " " +valor2) */
                if ((valor1 - valor2) !== 1) {
                    control = false;
                }  // no son consecutivos, no hace nada
            }
            if (control === true) {
                /* console.log("opcion escalera") */
                let escalera = { valor: "escalera", cantidad: 1, total: 35 }
                arrayObjCantidad.push(escalera)  // son consecutivos, agrego escalera!
            }
        }

        return arrayObjCantidad
    }
}


class Juego {
    constructor() {
        this.tablero = new Tablero()
        this.jugador = new Jugador()
        this.cubilete = new Cubilete()

    }

    start() {
        //1 - mostrar pantalla bienvenida
        // 2 - boton de start (oculta un div y muestraa otro)
        // 3 - mostrar pagina nueva - dibujar tablero vacio y los dados y sus img
    } // boton DOM

    play() {
        this.cubilete.tirarDado()
        console.log(this.cubilete.arrayDados)
        console.log('----------------')
        /* let opciones = this.tablero.getOptions(this.cubilete.arrayDados)
        console.log(opciones) */
        let opciones = this.tablero.getOptions(this.cubilete.tirarDadosPrueba())  // volver a la funcion oroginal
        console.log(opciones)


        //1 - tirar dados
        // 2- seleccionar dados y volver a tirar (tirardados)
        // 3 - llamar a getOptions y posibilidades de score.
        //4 - validacion de opciones  para tablero
        //5-Mostrar posibilidades al jugador en ele tablero
        //6 - jugador elige posibilidad 
        //7- toca boton Ok y guardar la posibilidad en el tablero
        // 8 - vuelvo a tirar dados
        // asi hasta cuando??? hasta que todas las opciones del tablero estan cubiertas


    }
    end() { } //cuando se completa el tablero
}

let juego = new Juego()
juego.play()


// EVENTOS VARIOS
document.getElementById("dado1").appendChild("resultado del primer dado") //Y ASI PARA LOS OTROS 4 DADOS
document.getElementById("tirarDados").addEventListener("click", () => {

})
document.getElementById("botonOk").addEventListener("click", () => { //GUARDA LOS RESULTADOS

})

document.querySelector("#hidden button")[0].onclick = () => { //boton de reglas para empezar a jugar?

};

window.onload = () => { }  // TODO DENTRO DE ESTO

document.getElementById("dado1").addEventListener("click", () => { //EN TODOS LOS DADOS
    //funcion que cambie "this.seleccionado" a true y a false constantemente   
})

document.getElementById("escalera").appendChild("resultado de la ronda si puedo hacer escalera")

document.getElementById("escalera").addEventListener("click", () => { //ELIJO ESE RESULTADO COMO EL QUE QUIERO Y LUEGO LE DOY AL BOTON OK

})
document.getElementById("sumaSeis").appendChild("resultado de la ronda si puedo juntar uno o mas seis")

document.getElementById("sumaSeis").addEventListener("click", () => { //ELIJO ESE RESULTADO COMO EL QUE QUIERO Y LUEGO LE DOY AL BOTON OK

})









