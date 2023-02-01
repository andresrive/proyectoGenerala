window.onload = () => {

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
                    this.dom.src = "images/imagenDado1.png"
                    break;
                case 2:
                    this.dom.src = "images/imagenDado2.png"
                    break;
                case 3:
                    this.dom.src = "images/imagenDado3.png"
                    break;
                case 4:
                    this.dom.src = "images/imagenDado4.png"
                    break;
                case 5:
                    this.dom.src = "images/imagenDado5.png"
                    break;
                case 6:
                    this.dom.src = "images/imagenDado1.png"
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
            // for (let i = 0; i <= 5; i++) {
            //     let objetoDelArrayDADO = this.arrayDados[i]       //es un objeto dado!
            //     console.log(objetoDelArrayDADO.seleccionado)
            //     if (!objetoDelArrayDADO.seleccionado) {
            //         objetoDelArrayDADO  // que se devuelva a el mismo????
            //     }

            //     else if (objetoDelArrayDADO.seleccionado == false) {
            //         objetoDelArrayDADO.recalcularValorDado()
            //     }
            // }
        }


        /* tirarDadosPrueba() {
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
        /*  return full */
        /*  }  */


    }

    class Tablero {
        constructor() {
            this.objPosibilidades = [
                {dom : document.getElementById("sumaUno"),
                    nombre: this.posibilidad1,
                    declarado: false
                },
                {dom : document.getElementById("sumaDos"),
                    nombre: this.posibilidad2,
                    declarado: false
                },
                {dom : document.getElementById("sumaTres"),
                    nombre: this.posibilidad3,
                declarado: false
                },
                {dom : document.getElementById("sumaCuatro"),
                    nombre: this.posibilidad4,
                    declarado: false
                },
                {dom : document.getElementById("sumaCinco"),
                    nombre: this.posibilidad5,
                    declarado: false
                },
                {dom : document.getElementById("sumaSeis"),
                    nombre: this.posibilidad6,
                    declarado: false
                },
                {dom : document.getElementById("escalera"),
                    nombre: this.escalera,
                    declarado: false
                },
                {dom : document.getElementById("fullHouse"),
                    nombre: this.full,
                    declarado: false
                },
                {dom : document.getElementById("poker"),
                    nombre: this.pocker,
                    declarado: false
                },
                {dom : document.getElementById("generala"),
                nombre: this.generala,
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

        controlaTablero() {
                this.objPosibilidades.declarado == true;
        }
        
         /*    let options = this.getOptions(this.arrayDados)
            options.forEach((option, i) => {
                if (!option.declarado) {
                    //mostrar valor de las opciones

                }
                
            }) */

        }

    



    class Juego {
        constructor() {
            this.tablero = new Tablero()
            this.jugador = new Jugador()
            this.cubilete = new Cubilete()

        }

        start() {
            this.cubilete.crearDados()

            //1 - mostrar pantalla bienvenida
            // 2 - boton de start (oculta un div y muestraa otro)
            // 3 - mostrar pagina nueva - dibujar tablero vacio y los dados y sus img
        } // boton DOM

        play() {
            this.cubilete.tirarDado()
            console.log(this.cubilete.arrayDados)
            // console.log('----------------')
            this.tablero.objPosibilidades[0].dom.innerHTML = this.cubilete.dado.valor
            this.tablero.objPosibilidades[1].dom.innerHTML = "hola"
            this.tablero.objPosibilidades[2].dom.innerHTML = "hola"
            this.tablero.objPosibilidades[3].dom.innerHTML = "hola"
            this.tablero.objPosibilidades[4].dom.innerHTML = "hola"
            this.tablero.objPosibilidades[5].dom.innerHTML = "hola"
            this.tablero.objPosibilidades[6].dom.innerHTML = "hola"
            this.tablero.objPosibilidades[7].dom.innerHTML = "hola"
            this.tablero.objPosibilidades[8].dom.innerHTML = "hola"
            this.tablero.objPosibilidades[9].dom.innerHTML = "hola"


            let opciones = this.tablero.getOptions(this.cubilete.arrayDados)
            console.log(opciones)
            // let opciones = this.tablero.getOptions(this.cubilete.tirarDadosPrueba())  // volver a la funcion oroginal
            // console.log(opciones)


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
    juego.start()
    juego.play()


    // EVENTOS VARIOS
    document.getElementById("tirarDados").addEventListener("click", () => {
        juego.play()
    })

    document.getElementById("dado1").addEventListener("click", () => {

        juego.cubilete.arrayDados[0].seleccionar();

        console.log(juego.cubilete.arrayDados[0])
    })
    // document.getElementById("botonOk").addEventListener("click", () => { //GUARDA LOS RESULTADOS

    // })

    // document.querySelector("#hidden button")[0].onclick = () => { //boton de reglas para empezar a jugar?

    // };

    // window.onload = () => { }  // TODO DENTRO DE ESTO

    // document.getElementById("dado1").addEventListener("click", () => { //EN TODOS LOS DADOS
    //     //funcion que cambie "this.seleccionado" a true y a false constantemente
    // })

    // document.getElementById("escalera").appendChild("resultado de la ronda si puedo hacer escalera")

    // document.getElementById("escalera").addEventListener("click", () => { //ELIJO ESE RESULTADO COMO EL QUE QUIERO Y LUEGO LE DOY AL BOTON OK

    // })
    // document.getElementById("sumaSeis").appendChild("resultado de la ronda si puedo juntar uno o mas seis")

    // document.getElementById("sumaSeis").addEventListener("click", () => { //ELIJO ESE RESULTADO COMO EL QUE QUIERO Y LUEGO LE DOY AL BOTON OK

    // })


    // let escalera = document.getElementById("escalera")

    // if (escalera.innerHTML != "") { return }


    /* if (!document.getElementById("sumaUno").innerHTML) "añadirle el valor" */

}





