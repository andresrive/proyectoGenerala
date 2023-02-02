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
            this.cubilete.crearDados()
            this.cubilete.tirarDado()

            console.log("LLamadasATirarDados dentro de play()" + llamadasATirarDados)

            console.log(this.cubilete.arrayDados)
            // // console.log('----------------')
            let opciones = this.tablero.getOptions(this.cubilete.arrayDados)
            console.log(opciones)
            // let opciones = this.tablero.getOptions(this.cubilete.tirarDadosPrueba())  // volver a la funcion oroginal
            // console.log(opciones)
        }

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
    // end() {
    //     this.tablero.objPosibilidades[i].declarado.forEach(() => {
    //         // una funcion que itere sobre el array y mire si declarado es true
    //         //si sí, que el juego pare y no deje dar más a tirar dados
    //     })
    // } //cuando se completa el tablero



    let juego = new Juego()
    // juego.start()
    // juego.play()


    // EVENTOS VARIOS
    document.getElementById("tirarDados").addEventListener("click", () => {
        if (llamadasATirarDados >= 3) return
        juego.play()
        llamadasATirarDados++
        console.log("LLamadasATirarDados" + llamadasATirarDados)


    })

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


    // document.getElementById("botonOk").addEventListener("click", () => { //GUARDA LOS RESULTADOS

    // })

    // document.querySelector("#hidden button")[0].onclick = () => { //boton de reglas para empezar a jugar?

    // };


    // document.getElementById("escalera").appendChild("resultado de la ronda si puedo hacer escalera")

    // document.getElementById("escalera").addEventListener("click", () => { //ELIJO ESE RESULTADO COMO EL QUE QUIERO Y LUEGO LE DOY AL BOTON OK

    // })
    // document.getElementById("sumaSeis").appendChild("resultado de la ronda si puedo juntar uno o mas seis")

    // document.getElementById("sumaSeis").addEventListener("click", () => { //ELIJO ESE RESULTADO COMO EL QUE QUIERO Y LUEGO LE DOY AL BOTON OK

    // })


    // let escalera = document.getElementById("escalera")

    // if (escalera.innerHTML != "") { return }


    // if (!document.getElementById("sumaUno").innerHTML) "añadirle el valor"
    // else return




}

