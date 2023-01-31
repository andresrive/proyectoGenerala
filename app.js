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

        this.imgLado1 = document.createElement('img')
        this.imgLado1.src = "proyectoGenerala/images/imagenDado1.png"

        this.imgLado2 = document.createElement('img')
        this.imgLado2.src = "proyectoGenerala/images/imagenDado2.png"

        this.imgLado3 = document.createElement('img')
        this.imgLado3.src = "proyectoGenerala/images/imagenDado3.png"

        this.imgLado4 = document.createElement('img')
        this.imgLado4.src = "proyectoGenerala/images/imagenDado4.png"

        this.imgLado5 = document.createElement('img')
        this.imgLado5.src = "proyectoGenerala/images/imagenDado5.png"

        this.imgLado6 = document.createElement('img')
        this.imgLado6.src = "proyectoGenerala/images/imagenDado6.png"

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

    tirarDado() {
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
        this.cubilete.tirarDado()
        console.log(this.cubilete.arrayDados)

    }
    end() { }
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









