class Jugador {
    constructor() {
        this.nombre = ""
    }
}

class Dado {
    constructor(identificador) {
        /* this.valor = (Math.floor(Math.random() * (7 - 1) + 1)) */
        this.valor = this.printRandom()
        this.seleccionado = false;
        this.identificador = identificador
        //this.imgDado1 = document.getElementById("dado1").createElement('img')
        //this.imgDado1.src = "images/imagenDado1.png"
        //this.imgDado2 = document.createElement('img')
        //this.imgDado1.src = // pendiente de cargar img 
        //    this.imgDado3 = document.createElement('img')
        //this.imgDado1.src = // pendiente de cargar img 
        //  this.imgDado4 = document.createElement('img')
        //this.imgDado1.src = // pendiente de cargar img 
        //  this.imgDado5 = document.createElement('img')
        /*  this.imgDado1.src = // pendiente de cargar img   */
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

    /* tirarDados(arraySegundaTirada) {   // en una sola funcion iterar sobre el array y con el evento click ''anular'' los indices de array por los q no tien q ieterar el for each
         if( arrayDados.length = 0 ) { //para saber si es la primer tirada, array vacio
          for (let i = 1; i <= 5; i++) {
              let dado = new Dado()
              this.arrayDados.push(dado)
          }
         } 
         else {
          for ( let i=0; i<arraySegundaTirada.length; i++){
              if
          }
          let seleccionado = false;
          this.arrayDados[i] = !seleccionado // si el elemento es seleccionado con un click
          this.arrayDados[i] = 
         }
      
      } */

    tirarDado() {
        if (this.arrayDados.length === 0) { //para saber si es la primer tirada, array vacio
            for (let i = 1; i <= 5; i++) {
                this.dado = new Dado(i)
                this.arrayDados.push(this.dado)
                /*  this.arrayDados.forEach(
                     printRandom()
                 ) */
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
        return generala
    }
}



/*     volverATirar(dadosATirar) {
             let indice
             let indiceDado
             for (let i = 0; i < dadosATirar.length; i++) {
                 indice = dadosATirar[i]
                 indiceDado = this.arrayDados[indice]
                 this.valor = this.printRandom()
             }
             console.log(indiceDado.valor)
         }
      */

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
            let generala = { valor: "generala", cantidad: 1, total: 50 }
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
            let bandera = true;

            // chequear si son consecutivos
            for (let i = arrayObjCantidad.length - 1; i > 0; i--) {
                let valor1 = arrayObjCantidad[i].valor
                let valor2 = arrayObjCantidad[i - 1].valor
                if ((valor2 - valor1) !== 1) {
                    bandera = false;
                }  // no son consecutivos, no hace nada
            }
            if (bandera === true) {
                let escalera = { valor: "escalera", cantidad: 1, total: 30 }
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

    start() { }
    play() {
        this.cubilete.tirarDado()
        console.log(this.cubilete.arrayDados)
        console.log('----------------')
        /*   let opciones = this.tablero.getOptions(this.cubilete.arrayDados)
          console.log(opciones) */
        let opciones = this.tablero.getOptions(this.cubilete.tirarDadosPrueba())  // volver a la funcion oroginal
        console.log(opciones)


    }
    end() { }
}

let juego = new Juego()
juego.play()

