// Output
const display = //TODO Captura referencia a elemento "DisplayInf" con "getElementById"
const displaySup = //TODO Captura referencia a elemento "displaySup" con "querySelector"
// Numeros
const botonesNumeros = //TODO Captura referencia a elementos 'boton' con "querySelector"
// Operaciones
const botonequal = //TODO Captura referencia a elemento "equal" con "getElementById"
const botonesOperaciones = //TODO Captura referencia a elemento "operaciones" con "getElementsByClassName"
// Limpiar
const botonClear = //TODO Captura referencia a elemento "clear" con "getElementById"

// Variables para operaciones
let operacion = '', equalParaDisplaySup = '='
let operandoUno = 0, operandoDos = 0, resultado = 0


// Listeners
//botonEqual y botonClean es un elemento, no una colección, por lo que no es necesario convertirlo a un array
//TODO: Enlaza el evento click a la función procesarClickOperacion àra el botonEqual, y limpiarContenido para el botonClear



// Capturador botones numeros
Array.from(botonesNumeros).forEach(htmlelement => {
    //TODO Agregar evento click a cada boton de número, y llamar a la función procesarClickNumero
});

// Capturador botones operaciones
Array.from(botonesOperaciones).forEach(htmlelement => {
     //TODO Agregar evento click a cada boton de operaciones y llamar a la función procesarClickOperacion
});



// Procesar eventos
function procesarClickNumero(event) {
    let numeroClickado = //Obtener el número del botón clickeado
    if(operacion==='') {
        if(operandoUno===0)
            operandoUno = ''

        operandoUno += numeroClickado
        imprimirEnDisplay(operandoUno)
    } else if (operacion.length>0) {
        if(operandoDos===0)
            operandoDos=''

        operandoDos+=numeroClickado
        imprimirEnDisplaySuperior(operandoUno, operacion, operandoDos, '')
        imprimirEnDisplay(operandoDos)
    }
}


// Procesador de operaciones aritmeticas
function procesarClickOperacion(event) {
    let operacionClickada = event.target.textContent
    equalParaDisplaySup = '='

    if (operacionClickada==="=") {
        switch (operacion) {
            case '+':
                //TODO: Llama a la función suma con operandoUno y operandoDos y asigna el resultado a la variable resultado
                imprimirEnDisplaySuperior(operandoUno, operacion, operandoDos, resultado)
                break

            case '-':
                //TODO: Llama a la función resta y asigna el resultado a la variable resultado
                imprimirEnDisplaySuperior(operandoUno, operacion, operandoDos, resultado)
                break

            case 'x':
                //TODO: Llama a la función multiplicacion y asigna el resultado a la variable resultado
                imprimirEnDisplaySuperior(operandoUno, operacion, operandoDos, resultado)
                break

            case '/':
                //TODO: Llama a la función division y asigna el resultado a la variable resultado
                imprimirEnDisplaySuperior(operandoUno, operacion, operandoDos, resultado)
                break
        }
        operandoUno = parseInt(resultado)
        operacion = ''
        operandoDos = 0
        //TODO: Llama a la función imprimirEnDisplay y pasa como argumento el resultado

    } else {
        operacion = operacionClickada
    }
}


// Operaciones aritmeticas
function suma(numeroUno, numeroDos) {
    return parseFloat(numeroUno) + parseFloat(numeroDos)
}

function resta(numeroUno, numeroDos) {
    return parseFloat(numeroUno) - parseFloat(numeroDos)
}

function multiplicacion(numeroUno, numeroDos) {
    return parseFloat(numeroUno) * parseFloat(numeroDos)
}

function division(numeroUno, numeroDos) {
    return parseFloat(numeroUno) / parseFloat(numeroDos)
}


// Mostrar display inferior
function imprimirEnDisplay(valor) {
    //Mostrar el valor en el display inferior
}


// Mostrar display superior
function imprimirEnDisplaySuperior(valorUno, operacion, valorDos, resultado) {
    //Desconmenta la siguiente linea para mostrar el contenido en el display superior, y rellena lo que falta
    // valorUno + operacion + valorDos + equalParaDisplaySup + resultado

}


// Clear display
function limpiarContenido() {
    operandoUno=0
    operandoDos=0
    operacion=''
    resultado=0
    equalParaDisplaySup = ''
    imprimirEnDisplay(0)
    imprimirEnDisplaySuperior(0, '', '', '')
}