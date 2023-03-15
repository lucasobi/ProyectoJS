// Palabra secreta
var palabraSecreta = "argentina";

// Letras adivinadas
var letrasAdivinadas = [];

// Número de intentos disponibles
var intentosRestantes = 3;

// Función para procesar la letra introducida por el jugador
function procesarLetra(letra) {
  letrasAdivinadas.push(letra);
  if (palabraSecreta.indexOf(letra) === -1) {
    intentosRestantes--;
  }
}

// Bucle del juego
while (intentosRestantes > 0) {
  // Mostrar el estado actual del juego
  var palabraActual = "";
  for (var i = 0; i < palabraSecreta.length; i++) {
    if (letrasAdivinadas.indexOf(palabraSecreta[i]) !== -1) {
      palabraActual += palabraSecreta[i];
    } else {
      palabraActual += "_";
    }
  }
  console.log(palabraActual);
  console.log("Letras adivinadas: " + letrasAdivinadas.join(", "));
  console.log("Intentos restantes: " + intentosRestantes);
  
  // Pedir al usuario que introduzca una letra
  var letraIntroducida = prompt("Introduce una letra:");
  
  // Procesar la letra introducida
  procesarLetra(letraIntroducida);
  
  // Comprobar si el jugador ha ganado
  if (palabraSecreta === palabraActual && letrasAdivinadas.length === palabraSecreta.length) {
    console.log("¡Felicidades, has ganado!");
    break;
  }
}

// Mensaje final de victoria o derrota
if (intentosRestantes === 0) {
  console.log("Lo siento, has perdido. La palabra secreta era '" + palabraSecreta + "'.");
}
