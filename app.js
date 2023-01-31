class Jugador {
    constructor() {
        this.nombre = ""
    }
}

class Dado {
    constructor(identificador) {
        this.valor = (Math.floor(Math.random() * (7 - 1) + 1)) 
         //this.valor = this.printRandom()  PREGUNTAR PORQUE NO SE PUEDE!!!!!
        this.seleccionado = false;
         
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
        (Math.floor(Math.random() * (7 - 1) + 1))
    }

    recalcularValorDado() {
        this.valor = this.printRandom() // llamo la funcion cuando tengo que recualcualr el valor de los dados en las otras tiradas de dados
    }
}


class Cubilete {
    constructor() {
        this.dado = new Dado()
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

    tirarDador() {
        if (this.arrayDados.length === 0) { //para saber si es la primer tirada, array vacio
            for (let i = 1; i <= 5; i++) {
                let dado = new Dado()

                this.arrayDados.push(dado)
            }
        }

        else {
            for (let i = 1; i <= 5; i++) {
                let objetoDelArrayDADO = this.arrayDados[i]       //es un objeto dado!
                if (objetoDelArrayDADO.selecionado === true) {
                    objetoDelArrayDADO.recalcularValorDado()
                }
            }

        }
     
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
    getOptions() { }

}

class Juego {
    constructor() {
        this.tablero = new Tablero()
        this.jugador = new Jugador()
        
        this.cubilete = new Cubilete()

    }

    start() { }
    play() {
  this.cubilete.tirarDador()
  console.log(this.cubilete.arrayDados)

    }
    end() { }
}

let juego = new Juego()
juego.play()