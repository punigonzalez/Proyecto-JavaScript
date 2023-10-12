

let sueldo = inputSueldo
let calcularPromedioAgui= document.getElementById 
("btnCalcularAguinaldo")

calcularPromedioAgui.addEventListener ("click", ()=>{
    
    let inputSueldo = document.getElementById ("inputSueldo")
    
    let promedioAgui = (inputSueldo.value/2)
   
    let lugarParrafoAgui = document.getElementById ("cajaAguinaldo")
    let parrafoAgui = document.createElement ("p")
    parrafoAgui.innerHTML= `<h5>Teniendo en cuenta que tenes tu ultimo salario neto fue de $${parseFloat(inputSueldo.value).toLocaleString()}, te corresponden $${promedioAgui.toLocaleString()} de aguinaldo<h5/>`
    lugarParrafoAgui.append (parrafoAgui)
    
   
    //clase constructora que devuelve los datos que ingreso el usuario    
    class Usuario {
        constructor(fechaIngreso, semestre, año,mayorSueldo, aguinaldo) {
            this.fechaIngreso = fechaIngreso,
            this.semestre = semestre,
            this.año = año,
            this.mayorSueldo = mayorSueldo,
            this.aguinaldo = aguinaldo;
        }
    }
    const fechaIngreso = document.getElementById ("inputDate")
    const semestreCalcular = document.getElementById ("lang")
    const año = document.getElementById ("añoCalc")
    const usuario = []
    const usuario1= new Usuario(fechaIngreso.value,semestreCalcular.value, año.value, parseFloat(inputSueldo.value).toLocaleString() ,parseFloat(promedioAgui).toLocaleString() );    
    
    usuario.push(usuario1)
    console.log(usuario);
}
    )