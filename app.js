class Jugador {
    constructor() {
        this.nombre = ""
    }
}

class Dados {
    constructor() {
        this.valor = undefined
        this.imgDado1 = document.getElementById("dado1").createElement('img')
        this.imgDado1.src = ""

        this.imgDado1.src = // pendiente de cargar img
            this.imgDado2 = document.createElement('img')
        this.imgDado1.src = // pendiente de cargar img 
            this.imgDado3 = document.createElement('img')
        this.imgDado1.src = // pendiente de cargar img 
            this.imgDado4 = document.createElement('img')
        this.imgDado1.src = // pendiente de cargar img 
            this.imgDado5 = document.createElement('img')
        this.imgDado1.src = // pendiente de cargar img    
    }

    printRandom() {
        (Math.floor(Math.random() * (7 - 1) + 1))
    }
}


class Cubilete {
    constructor() {
        this.dado = new Dado()
        this.arrayDados = []
    }
    tirarDados() {
        for (let i = 1; i <= 5; i++) {
            let dado = new Dados()
            dado.printRandom()
            this.arrayDados.push(dado)
        }
    }

    volverATirar(dadosATirar) {
        let indice
        let indiceDado
        for (let i = 0; i < dadosATirar.length; i++) {
            indice = dadosATirar[i]
            indiceDado = this.arrayDados[indice]
            this.valor = this.printRandom()
        }
        console.log(indiceDado.valor)
    }

}



// crear un array con todos los dados, iterar sobre los elemnteos del array con un for each
//para modificar los valores



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
    getOptions() { }

}

class Juego {
    constructor() {
        this.tablero = new Tablero()
        this.jugador = new Jugador()
        this.dados = new Dado()

    }

    start() { }
    play() {


    }
    end() { }
}
