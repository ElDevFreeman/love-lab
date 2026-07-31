// Sincronizar el texto de la historia con el tiempo
var audio = document.querySelector("audio");
var storyText = document.querySelector("#story-text");

// Array de fragmentos de la historia con tiempos de aparicion
var storyData = [
  { text: "Donde todo comenzo...", time: 5 },
  { text: "No era un dia cualquiera, ni una hora cualquiera.", time: 12 },
  { text: "Era un 23 de junio...", time: 20 },
  { text: "Cuando el reloj marcaba las 11:30 de la noche.", time: 27 },
  { text: "El mundo dormia, pero algo desperto entre nosotros.", time: 35 },
  { text: "Un mensaje que no pretendia cambiar nada...", time: 44 },
  { text: "...termino cambiandolo todo.", time: 52 },
  { text: "Esa noche, sin saberlo, se planto una semilla.", time: 60 },
  { text: "Una semilla que creceria con el tiempo...", time: 70 },
  { text: "Como un arbol que extiende sus ramas.", time: 78 },
  { text: "Y florece con cada recuerdo compartido.", time: 86 },
  { text: "Con cada palabra dicha...", time: 95 },
  { text: "Y cada silencio entendido.", time: 103 },
  { text: "Desde esa noche, el tiempo no ha dejado de contar a nuestro favor.", time: 112 },
  { text: "Cada segundo que pasa es un segundo mas juntos.", time: 124 },
  { text: "Un segundo mas de esta historia...", time: 135 },
  { text: "Que comenzo con la valentia de un mensaje en medio de la noche.", time: 144 },
  { text: "Y esta historia apenas comienza...", time: 158 },
  { text: "Te amo con todo mi corazon.", time: 170 },
  { text: "Nuestra historia sigue escribiendose...", time: 185 },
];

// Animar los textos de la historia
function updateStoryText() {
  var time = Math.floor(audio.currentTime);
  var currentLine = storyData.find(
    function(line) { return time >= line.time && time < line.time + 8; }
  );

  if (currentLine) {
    var fadeInDuration = 0.5;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    storyText.style.opacity = opacity;
    storyText.innerHTML = currentLine.text;
  } else {
    storyText.style.opacity = 0;
    storyText.innerHTML = "";
  }
}

setInterval(updateStoryText, 500);

// Funcion para ocultar el titulo y mostrar el timer
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
    // Mostrar el timer despues de que desaparece el titulo
    var timer = document.querySelector(".timer-section");
    if (timer) {
      timer.style.opacity = "1";
      timer.style.transform = "translateX(-50%) translateY(0)";
    }
  }, 3000);
}

// Ocultar titulo despues de 50 segundos y mostrar timer
setTimeout(ocultarTitulo, 50000);
