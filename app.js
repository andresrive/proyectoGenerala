class Jugador {
    constructor() {
        this.nombre = ""
    }
}

class Dado {
    constructor(random) {
        this.img
        this.valor = random
    }
}

class TiradadeDados{
    constructor(){
        this.dados = []

    }
//asigna el valor randon a los dados
    printRandom(){
        return  Math.floor(Math.random()*(7-1)+1)  
     }
    tirarDados(){

        for( let i=1; i<=6; i++){
            let dado = new Dado(this.printRandom())
            this.dados.push(dado)
        }
    }

    volverATirar(dadosATirar){
      for(let i=0; i<dadosATirar.length; i++){
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
    getOptions(array){
        let resultados = []
        for( let i=0; i<array.length; i++){
            let dado = array[i]
         
         if(!resultados[dado.valor] ){
             let objResultado = { valor: dado.valor, cantidad:1, total:0}
             objResultado.total = objResultado.valor * objResultado.cantidad
             resultados[dado.valor] = objResultado
         }
         else{
            let objeto = resultados[dado.valor]
            objeto.cantidad  = objeto.cantidad+1
            objeto.total = objeto.valor * objeto.cantidad
            resultados[dado.valor] = objeto
         }
        }
        return resultados

    }
}

class Juego {
    constructor(){
        // imagen de fondo???
        this.tiradadeDados
    }

    start(){}
    play(){
        this.tiradadeDados = new TiradadeDados()
        this.tiradadeDados.tirarDados()
       // console.log(this.tiradadeDados)
        console.log("-------------------")
        this.tiradadeDados.volverATirar([1,3,5]) // indice  del array del dado q tiene q vovler a tirar
       // console.log(this.tiradadeDados)
        console.log("-------------------")
        this.tablero = new Tablero()
        this.tablero.getOptions(this.tiradadeDados.dados)
        //this.tablero.getOptions([1,3,3,5,5])
    }
    end(){}
}


let juego = new Juego()
juego.play()