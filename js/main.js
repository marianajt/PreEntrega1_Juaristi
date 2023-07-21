function calcularPromedio() {
    let totalCalificaciones = 5;
    let sumaCalificaciones = 0;
  
    let contador = 1;
    while (contador <= totalCalificaciones) {
      let calificacion = parseFloat(prompt(`Ingresa la calificación ${contador}:`));
  
      if (isNaN(calificacion)) {
        alert("Por favor, ingresa un número válido.");
        continue;
      }
  
      sumaCalificaciones += calificacion;
      contador++;
    }
  
    let promedio = sumaCalificaciones / totalCalificaciones;
  
    if (promedio >= 60) {
      alert('El promedio fue mayor de 60, aprobaron!"');
    } else {
      alert('A los alumnos se les dificulto la materia, su promedio fue menor de 60');
    }
  }
  
  calcularPromedio();
  