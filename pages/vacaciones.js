//capturamos dom del formulario


let diasVacas = inputDias
let ultimoSalario = inputSalario

let calcularPromedio= document.getElementById 
("btnCalcular")

calcularPromedio.addEventListener ("click", ()=>{
    let inputDias = document.getElementById ("inputDias")
    let inputSalario = document.getElementById ("inputSalario")
    
    let resultadoDivision = (inputSalario.value/25)
    
    let promedio = (resultadoDivision*inputDias.value)
    

    let lugarParrafo = document.getElementById ("cajaVacaciones")
    let parrafo = document.createElement ("p")
    parrafo.innerHTML= `<h5>Teniendo en cuenta que tenes ${inputDias.value} dias de vacaciones y tu ultimo salario fue de $${parseFloat(inputSalario.value).toLocaleString()}, te corresponden $${promedio.toLocaleString()} de liquidacion por vacaciones<h5/>`
    lugarParrafo.append (parrafo)

    let btnReiniciar= document.createElement ("button")
    btnReiniciar.innerHTML += `<button class="btnReiniciar">`

//clase constructora que devuelve los datos que ingreso el usuario    
    class Usuario {
        constructor(diasVacaciones,salario, resultadoFinal) {
            this.diasVacaciones = diasVacaciones,
            this.salario = salario,
            this.resultadoFinal = resultadoFinal;
        }
    }
    
    const usuario = []
    const usuario1= new Usuario(inputDias.value, parseFloat(inputSalario.value).toLocaleString(), promedio.toLocaleString());    
    
    usuario.push(usuario1)
    console.log(usuario);

}
    )

