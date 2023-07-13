

let P1 = parseInt(prompt("Calificacion del primer alumno"))
let P2 = parseInt(prompt("Calificacion del segundo alumno"))
let P3 = parseInt(prompt("Calificacion del tercer alumno"))
let P4 = parseInt(prompt("Calificacion del cuarto alumno"))
let P5 = parseInt(prompt("Calificacion del quinto alumno"))


function Avg(){
    alert("El promedio de la clase fue " + (A1+A2+A3+A4+A5)/5)
}

if((Avg > 60)){
    alert("El promedio fue mayor de 60, aprobaron!");
}
else{
    alert("A los alumnos se les dificulto la materia, su promedio fue menor de 60")
}

