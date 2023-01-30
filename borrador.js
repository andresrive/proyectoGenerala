class Jugador {
    constructor() {
        this.nombre = ""
    }
}

class Dado {
    constructor(random) {
        this.img
        this.valor = random  //dejamos este valor aqui???
    }
}

class TiradadeDados {
    constructor() {
        this.dados = []

    }
    //asigna el valor randon a los dados
    printRandom() {
        return Math.floor(Math.random() * (7 - 1) + 1)
    }

    tirarDados() {
        for (let i = 1; i <= 5; i++) {
            this.dado = new Dado(this.printRandom())
            this.dados.push(dado)
        }
    }

     volverATirar(dadosATirar) {
        for (let i = 0; i < dadosATirar.length; i++) {
            let indice = dadosATirar[i]
            let dado = this.dados[indice]
            dado.valor = this.printRandom()
        }
    }
} 

class Tablero {
    contructor() {
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

    //funcion que calcula las posibilidades  a nivel puntaje que tenes despues de las 3 tiradas.
    getOptions(array) {
        let resultados = [] // el array devuelve un objeto 'dado' con un valor
        for (let i = 0; i < array.length; i++) {
            let dado = array[i]

            //si recibo un valor por primera vez, entra al if y modifica el objeto
            if (!resultados[dado.valor]) {
                let objResultado = { valor: dado.valor, cantidad: 1, total: 0 }
                objResultado.total = objResultado.valor * objResultado.cantidad
                resultados[dado.valor] = objResultado
            }
            //si ya recibi un valor igual, aumenta su cantidad, suma su valor y aumenta el total de objetos recibidos con ese valor
            else {
                let objetoDelArray = resultados[dado.valor]
                objetoDelArray.cantidad = objetoDelArray.cantidad + 1
                objetoDelArray.total = objetoDelArray.valor * objetoDelArray.cantidad
                resultados[dado.valor] = objetoDelArray
            }
        }
        return resultados

    }
}

class Juego {
    constructor() {
        // imagen de fondo???
        this.tiradadeDados
    }

    start() { }
    play() {
        this.tiradadeDados = new TiradadeDados()
        this.tiradadeDados.tirarDados()
        console.log(this.tiradadeDados)
        console.log("-------------------")
        this.tiradadeDados.volverATirar([1, 3, 5]) // indice  del array del dado q tiene q vovler a tirar
        console.log(this.tiradadeDados)
        console.log("-------------------")
        this.tablero = new Tablero()
        //this.tablero.getOptions(this.tiradadeDados.dados)
        let r = this.tablero.getOptions([
            { valor: 2 },
            { valor: 3 },
            { valor: 3 },
            { valor: 3 },
            { valor: 5 },
            { valor: 6 }
        ])

        console.log(r)
    }
    end() { }
}


let juego = new Juego()
juego.play()