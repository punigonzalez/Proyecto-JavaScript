let nombre = prompt("Inresa tu nombre");

while (nombre === "") {
    alert("Ingresa un nombre por favor");
    nombre = prompt("Ingresa tu nombre");
}

function calculador(operacion) {
    switch (operacion) {
        case 1:
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
        case 2:
            let mejorSalario;
            do {
                mejorSalario = parseInt(prompt("Ingresa tu mayor sueldo en el ultimo semestre. (Sin puntos ni comas)"));
            } while (isNaN(mejorSalario));
            
            let aguinaldo= mejorSalario/2
            alert (`Tu aguinaldo debe ser de $${aguinaldo.toLocaleString()} aproximadamente.`)
            break;
        case 3:
            alert("Función de Indemnización aún no implementada");
            break;
    }
}

do {
    let operacion;
    do {
        operacion = parseInt(prompt(`Hola ${nombre}, elige el número de operación que deseas realizar.\n1: Vacaciones \n2: Aguinaldo \n3: Indemnización`));
    } while (operacion !== 1 && operacion !== 2 && operacion !== 3);

    calculador(operacion);

    let seguirOperando = confirm("¿Deseas realizar otra operación?\n\nSi: Aceptar\nNo: Cancelar");
    if (!seguirOperando) {
        break; 
    }
} while (true); 
