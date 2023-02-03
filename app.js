window.onload = () => {

    let llamadasATirarDados = 0;



    class Jugador {
        constructor() {
            this.nombre = ""
        }
    }

    class Dado {
        constructor(identificador) {
            this.valor = this.printRandom()
            this.seleccionado = false;
            this.identificador = identificador
            this.dom = document.getElementById(`dado${identificador}`)
            switch (this.valor) {
                case 1:
                    this.dom.src = "./images/imagenDado1.png"
                    break;
                case 2:
                    this.dom.src = "./images/imagenDado2.png"
                    break;
                case 3:
                    this.dom.src = "./images/imagenDado3.png"
                    break;
                case 4:
                    this.dom.src = "./images/imagenDado4.png"
                    break;
                case 5:
                    this.dom.src = "./images/imagenDado5.png"
                    break;
                case 6:
                    this.dom.src = "./images/imagenDado6.png"
                    break;
            }
        }

        printRandom() {
            return (Math.floor(Math.random() * (7 - 1) + 1))
        }

        recalcularValorDado() {
            this.valor = this.printRandom() // llamo la funcion cuando tengo que recualcualr el valor de los dados en las otras tiradas de dados
        }

        seleccionar() {
            this.seleccionado = !this.seleccionado;
        }
    }

    class Cubilete {
        constructor() {
            this.arrayDados = []
        }

        crearDados() {
            if (this.arrayDados.length === 0) { //para saber si es la primer tirada, array vacio
                for (let i = 1; i <= 5; i++) {
                    this.dado = new Dado(i)
                    this.arrayDados.push(this.dado)
                }
            }
            console.log(this.arrayDados)
            return this.arrayDados;
        }

        tirarDado() {
            this.arrayDados.forEach((dado, i) => {
                if (!dado.seleccionado) {
                    let newDado = new Dado(i + 1);
                    this.arrayDados.splice(i, 1, newDado);
                }
            })
            console.log(this.arrayDados)
            return this.arrayDados;
        }

        recalcularValorDado() {
            this.valor = this.printRandom() // llamo la funcion cuando tengo que recualcualr el valor de los dados en las otras tiradas de dados
        }

    }

    class Tablero {
        constructor() {
            this.objPosibilidades = [
                {
                    idDom: "sumaUno",
                    valor: 1,
                    declarado: false
                },
                {
                    idDom: "sumaDos",
                    valor: 2,
                    declarado: false
                },
                {
                    idDom: "sumaTres",
                    valor: 3,
                    declarado: false
                },
                {
                    idDom: "sumaCuatro",
                    valor: 4,
                    declarado: false
                },
                {
                    idDom: "sumaCinco",
                    valor: 5,
                    declarado: false
                },
                {
                    idDom: "sumaSeis",
                    valor: 6,
                    declarado: false
                },
                {
                    idDom: "escalera",
                    valor: "escalera",
                    declarado: false
                },
                {
                    idDom: "fullHouse",
                    valor: "fullHouse",
                    declarado: false
                },
                {
                    idDom: "poker",
                    valor: "pocker",
                    declarado: false
                },
                {
                    idDom: "generala",
                    valor: "generala",
                    declarado: false
                }]
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
                    let full = { valor: "fullHouse", cantidad: 1, total: 35 }
                    arrayObjCantidad.push(full)
                }
                else {
                    let poker = { valor: "pocker", cantidad: 1, total: 45 }
                    arrayObjCantidad.push(poker)
                }
            }

            else if (cantidadOpciones === 5) {
                let control = true;

                // chequear si son consecutivos
                for (let i = arrayObjCantidad.length - 1; i > 0; i--) {
                    let valor1 = arrayObjCantidad[i].valor
                    let valor2 = arrayObjCantidad[i - 1].valor
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
            this.score = 0
        }

        start() { }


        play() {
            this.cubilete.crearDados()
            this.cubilete.tirarDado()
            console.log(this.cubilete.arrayDados)

            let arrayOpciones = this.tablero.getOptions(this.cubilete.arrayDados)
            console.log(arrayOpciones)


            // compara los valores y los imprime en el tablero si no esta seleccionado.
            this.tablero.objPosibilidades.forEach((posibilidad) => {
                if (!posibilidad.declarado) {
                    document.getElementById(posibilidad.idDom).innerHTML = "";
                    arrayOpciones.forEach((opcion) => {
                        if (opcion.valor === posibilidad.valor) {
                            document.getElementById(posibilidad.idDom).innerHTML = opcion.total;
                        }
                    })
                }

            })

            /* this.aumentarScore += arrayOpciones[i].total */
            /* if(){} */

            /*  return arrayOpciones */
        }




        /*   1 - tirar dados
          2- seleccionar dados y volver a tirar (tirardados)
          3 - llamar a getOptions y posibilidades de score.
         4 - validacion de opciones  para tablero
          5-Mostrar posibilidades al jugador en ele tablero
         6 - jugador elige posibilidad 
         /7- toca boton Ok y guardar la posibilidad en el tablero
           8 - vuelvo a tirar dados
           asi hasta cuando??? hasta que todas las opciones del tablero estan cubiertas */


        /*   } */
        reset() {
            this.tablero.objPosibilidades.forEach((posibilidad) => {
                if (!posibilidad.declarado) {
                    document.getElementById(posibilidad.idDom).innerHTML = ""
                }
            })

            llamadasATirarDados = 0

            this.cubilete.arrayDados.forEach((dado) => {
                dado.seleccionado = false
                document.getElementById(`dado${dado.identificador}`).style.backgroundColor = "white"
            })
            console.log(this.cubilete.arrayDados)
            /*    if (juego.cubilete.arrayDados[0].seleccionado) {
                   document.getElementById("dado1").style.backgroundColor = "#ffaaaa"
               } else { document.getElementById("dado1").style.backgroundColor = "white" }
    */
        }
        end() {
            if (Number(this.score) >= 10) {
                document.getElementById("victoria").classList.remove('hidden')
            }
        } //cuando se llega a 130

    }


    let juego = new Juego()
    /* juego.start()
    juego.play() */
    /* juego.reset() */



    // EVENTOS VARIOS
    document.getElementById("tirarDados").addEventListener("click", () => {
        if (llamadasATirarDados === 3) return
        juego.play()
        llamadasATirarDados++
    })


    //clicks DADOS
    document.getElementById("dado1").addEventListener("click", () => {
        juego.cubilete.arrayDados[0].seleccionar();
        if (juego.cubilete.arrayDados[0].seleccionado) {
            document.getElementById("dado1").style.backgroundColor = "#ffaaaa"
        } else { document.getElementById("dado1").style.backgroundColor = "white" }

    })
    document.getElementById("dado2").addEventListener("click", () => {
        juego.cubilete.arrayDados[1].seleccionar();
        if (juego.cubilete.arrayDados[1].seleccionado) {
            document.getElementById("dado2").style.backgroundColor = "#ffaaaa"
        } else { document.getElementById("dado2").style.backgroundColor = "white" }

    })
    document.getElementById("dado3").addEventListener("click", () => {
        juego.cubilete.arrayDados[2].seleccionar();
        if (juego.cubilete.arrayDados[2].seleccionado) {
            document.getElementById("dado3").style.backgroundColor = "#ffaaaa"
        } else { document.getElementById("dado3").style.backgroundColor = "white" }

    })
    document.getElementById("dado4").addEventListener("click", () => {
        juego.cubilete.arrayDados[3].seleccionar();
        if (juego.cubilete.arrayDados[3].seleccionado) {
            document.getElementById("dado4").style.backgroundColor = "#ffaaaa"
        } else { document.getElementById("dado4").style.backgroundColor = "white" }

    })
    document.getElementById("dado5").addEventListener("click", () => {
        juego.cubilete.arrayDados[4].seleccionar();
        if (juego.cubilete.arrayDados[4].seleccionado) {
            document.getElementById("dado5").style.backgroundColor = "#ffaaaa"
        } else { document.getElementById("dado5").style.backgroundColor = "white" }

    })

    //Eventos botones tablero
    document.getElementById("sumaUno").addEventListener("click", () => {
        juego.tablero.objPosibilidades[0].declarado = true;
        document.getElementById("sumaUno").style.color = "white"
        document.getElementById("sumaUno").style.fontWeight = "bold"
        juego.score += Number(document.getElementById("sumaUno").innerHTML)
        document.getElementById('resultadoJuego').innerHTML = juego.score
        console.log("score", juego.score)
        juego.end()
        juego.reset()
    })
    document.getElementById("sumaDos").addEventListener("click", () => {
        juego.tablero.objPosibilidades[1].declarado = true;
        document.getElementById("sumaDos").style.color = "white"
        document.getElementById("sumaDos").style.fontWeight = "bold"
        juego.score += Number(document.getElementById("sumaDos").innerHTML)
        document.getElementById('resultadoJuego').innerHTML = juego.score
        console.log("score", juego.score)
        juego.end()
        juego.reset()

    })
    document.getElementById("sumaTres").addEventListener("click", () => {
        juego.tablero.objPosibilidades[2].declarado = true;
        document.getElementById("sumaTres").style.color = "white"
        document.getElementById("sumaTres").style.fontWeight = "bold"
        juego.score += Number(document.getElementById("sumaTres").innerHTML)
        //document.elementbyIdSCORE ACTUALIZAR!!!!!
        document.getElementById('resultadoJuego').innerHTML = juego.score
        console.log("score", juego.score)
        juego.end()
        juego.reset()
    })
    document.getElementById("sumaCuatro").addEventListener("click", () => {
        juego.tablero.objPosibilidades[3].declarado = true;
        document.getElementById("sumaCuatro").style.color = "white"
        document.getElementById("sumaCuatro").style.fontWeight = "bold"
        juego.score += Number(document.getElementById("sumaCuatro").innerHTML)
        document.getElementById('resultadoJuego').innerHTML = juego.score
        console.log("score", juego.score)
        juego.end()
        juego.reset()
    })
    document.getElementById("sumaCinco").addEventListener("click", () => {
        juego.tablero.objPosibilidades[4].declarado = true;
        document.getElementById("sumaCinco").style.color = "white"
        document.getElementById("sumaCinco").style.fontWeight = "bold"
        juego.score += Number(document.getElementById("sumaCinco").innerHTML)
        document.getElementById('resultadoJuego').innerHTML = juego.score
        console.log("score", juego.score)
        juego.end()
        juego.reset()
    })
    document.getElementById("sumaSeis").addEventListener("click", () => {
        juego.tablero.objPosibilidades[5].declarado = true;
        document.getElementById("sumaSeis").style.color = "white"
        document.getElementById("sumaSeis").style.fontWeight = "bold"
        juego.score += Number(document.getElementById("sumaSeis").innerHTML)
        document.getElementById('resultadoJuego').innerHTML = juego.score
        console.log("score", juego.score)
        juego.end()
        juego.reset()
    })
    document.getElementById("escalera").addEventListener("click", () => {
        juego.tablero.objPosibilidades[6].declarado = true;
        document.getElementById("escalera").style.color = "white"
        document.getElementById("escalera").style.fontWeight = "bold"
        juego.score += Number(document.getElementById("escalera").innerHTML)
        document.getElementById('resultadoJuego').innerHTML = juego.score
        console.log("score", juego.score)
        juego.end()
        juego.reset()
    })
    document.getElementById("fullHouse").addEventListener("click", () => {
        juego.tablero.objPosibilidades[7].declarado = true;
        document.getElementById("fullHouse").style.color = "white"
        document.getElementById("fullHouse").style.fontWeight = "bold"
        juego.score += Number(document.getElementById("fullHouse").innerHTML)
        document.getElementById('resultadoJuego').innerHTML = juego.score
        console.log("score", juego.score)
        juego.end()
        juego.reset()
    })
    document.getElementById("poker").addEventListener("click", () => {
        juego.tablero.objPosibilidades[8].declarado = true
        document.getElementById("poker").style.color = "white"
        document.getElementById("poker").style.fontWeight = "bold"
        juego.score += Number(document.getElementById("poker").innerHTML)
        document.getElementById('resultadoJuego').innerHTML = juego.score
        console.log("score", juego.score)
        juego.end()
        juego.reset()
    })
    document.getElementById("generala").addEventListener("click", () => {
        juego.tablero.objPosibilidades[9].declarado = true;
        document.getElementById("generala").style.color = "white"
        document.getElementById("generala").style.fontWeight = "bold"
        juego.score += Number(document.getElementById("generala").innerHTML)
        document.getElementById('resultadoJuego').innerHTML = juego.score
        console.log("score", juego.score)
        juego.end()
        juego.reset()
    })


}


