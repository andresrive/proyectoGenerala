class Jugador {
    constructor() {
        this.nombre = ""
    }
}

class Dados {
    constructor() {
        this.dados = []
        this.imgDado1 = document.createElement('img')
        /* this.imgDado1.src = // pendiente de cargar img */
        this.imgDado2 = document.createElement('img')
        /*   this.imgDado1.src = // pendiente de cargar img */
        this.imgDado3 = document.createElement('img')
        /*   this.imgDado1.src = // pendiente de cargar img */
        this.imgDado4 = document.createElement('img')
        /*  this.imgDado1.src = // pendiente de cargar img */
        this.imgDado5 = document.createElement('img')
        /*  this.imgDado1.src = // pendiente de cargar img    */
    }

    printRandom() {
     return (Math.floor(Math.random() * (7 - 1) + 1))
    }
    

    tirarDados() {
        for (let i = 1; i <= 5; i++) {
            let dado = new Dados()
            this.dados.push(dado)
        }
    }

    volverATirar(dadosATirar) {
        for (let i = 0; i < dadosATirar.length; i++) {
            let indice = dadosATirar[i]
            let indiceDado = this.dados[indice]
            indiceDado.valor = this.printRandom()
        }
        console.log(indiceDado.valor)
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
