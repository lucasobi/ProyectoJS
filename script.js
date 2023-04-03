// Palabras posibles
const words = ['javascript', 'programacion', 'desarrollo', 'tecnologia', 'html', 'css', 'fullstack'];

// Número máximo de intentos
const maxWrongGuesses = 6;

// Variables globales
let word = '';
let guessedLetters = [];
let remainingGuesses = 0;

// Seleccionar una palabra al azar
function selectRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

// Inicializar el juego
function initializeGame() {
  word = selectRandomWord(words);
  guessedLetters = [];
  remainingGuesses = maxWrongGuesses;
  updateUI();
}

// Actualizar la interfaz de usuario
function updateUI() {
  // Mostrar las letras adivinadas y los intentos restantes
  document.getElementById('guessedLetters').textContent = `Letras adivinadas: ${guessedLetters.join(', ')}`;
  document.getElementById('remainingGuesses').textContent = `Intentos restantes: ${remainingGuesses}`;

  // Mostrar la palabra oculta
  const wordContainer = document.getElementById('word');
  wordContainer.innerHTML = '';
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (guessedLetters.includes(letter)) {
      // Mostrar la letra adivinada
      const letterElement = document.createElement('span');
      letterElement.textContent = letter;
      wordContainer.appendChild(letterElement);
    } else {
      // Mostrar un guión bajo para las letras no adivinadas
      const underscoreElement = document.createElement('span');
      underscoreElement.textContent = '_';
      wordContainer.appendChild(underscoreElement);
    }
  }

  // Mostrar un mensaje si el jugador ha ganado o perdido
  const messageElement = document.getElementById('message');
  if (hasPlayerWon()) {
    messageElement.textContent = '¡Felicidades, has gan
