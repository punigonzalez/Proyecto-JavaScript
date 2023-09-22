//pide nombre al usuario y si no escribe nada o no es un string, vuelve a pedir nombre hasta que lo ponga
let nombre = prompt("Ingresa tu nombre");
while (nombre === "" || !isNaN(nombre) ) {
    alert("Ingresa un nombre valido por favor.");
    nombre = prompt("Ingresa tu nombre");
}
//pide edad al usuario y si no es un numero o no pone nada, lo pide hasta que ponga 
let edad= prompt("Ingresa tu edad")
while (isNaN(edad) || edad==="") {
    alert("Ingresa una edad valida por favor.");
    edad = prompt("Ingresa edad");
}


function calculador(operacion) {
    switch (operacion) {
        case "vacaciones":
            let diasVacaciones;
            do {
                diasVacaciones = parseInt(prompt("Ingresa la cantidad de días que te tomas por vacaciones"));
            } while (isNaN(diasVacaciones));

            let ultimoSueldo;
            do {
                ultimoSueldo = parseFloat(prompt("Ingresa el último sueldo que obtuviste. (Sin puntos ni comas)"));
            } while (isNaN(ultimoSueldo));

            let calculoVacaciones = ultimoSueldo / 25;
            let resultadoFinalVacaciones = calculoVacaciones * diasVacaciones;
            alert(`Te corresponden $${resultadoFinalVacaciones.toLocaleString()} por los ${diasVacaciones} dias de vacaciones.`);
            break;
        case "aguinaldo":
            let mejorSalario;
            do {
                mejorSalario = parseInt(prompt("Ingresa tu mayor sueldo en el ultimo semestre. (Sin puntos ni comas)"));
            } while (isNaN(mejorSalario));
            
            let aguinaldo= mejorSalario/2
            alert (`Tu aguinaldo debe ser de $${aguinaldo.toLocaleString()} aproximadamente.`)
            break;
        case "indemnizacion":
            alert("Función de Indemnización aún no implementada");
            break;
    }
//clase constructora que devuelve un objeto con el nombre, edad y que operacion realizo el usuario, 
//todo eso lo guarda en un array usuario.
class Usuario {
    constructor(nombre, edad, operacion) {
        this.nombre = nombre,
        this.edad = edad,
        this.operacion = operacion;
    }
}

const usuario = []
const usuario1= new Usuario(nombre, edad, operacion);    

usuario.push(usuario1)
console.log(usuario);


}



do {
    let operacion;
    do {
        operacion = prompt(`Hola ${nombre}, escribi la operacion que deseas realizar.\n\n Vacaciones \n Aguinaldo \n Indemnización`).toLowerCase();
    } while (operacion !== "vacaciones" && operacion !== "aguinaldo" && operacion !== "indemnizacion");

    calculador(operacion);

    let seguirOperando = confirm("¿Deseas realizar otra operación?\n\nSi: Aceptar\nNo: Cancelar");
    if (!seguirOperando) {
        break; 
    }
} while (true); 




