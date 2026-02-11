// Ahora la lista contiene objetos con 'text' (el mensaje) e 'image' (la foto)
const scenes = [
    { 
        text: "¡Hola, Kath! Quería decirte algo importante...", 
        image: "saludando.png" 
    },
    { 
        text: "Solo es que me ha impresionado mucho tu actidud", 
        image: "enternecido.png" 
    },
    { 
        text: "La verdad no esperaba que fueras a tomar la inciativa tan rápido", 
        image: "enternecido.png" 
    },
    { 
        text: "O que tomaras como especial las citas que propuse", 
        image: "enternecido.png" 
    },
    { 
        text: "Y me encanta que dijeras que soy único en mi especie jaja", 
        image: "nervioso.png" 
    },
    { 
        text: "Tal vez estos días he estado un poco desaparecido, perdón por eso", 
        image: "sorry.png" 
    },
    { 
        text: "Pero te quería dar un pequeño detalle", 
        image: "rosas.png" 
    },
    { 
        text: "Espero que te haya gustado", 
        image: "nervioso.png" 
    },
    { 
        text: "¡Y recuerda que me gustas mucho! ❤️", 
        image: "loud.png" 
    }
];

let currentStep = 1;

// Referencias a los elementos del HTML
const container = document.getElementById('game-container');
const messageText = document.getElementById('message-text');
const sprite = document.getElementById('character-sprite');

// Función para avanzar la historia
function nextMessage() {
    if (currentStep < scenes.length) {
        // Obtenemos la escena actual
        const currentScene = scenes[currentStep];

        // 1. Cambiamos el texto
        messageText.innerText = currentScene.text;

        // 2. Cambiamos la imagen (src)
        sprite.src = currentScene.image;
        
        currentStep++;
    } else {
        currentStep = 0;
    }
}

// Evento para detectar click
container.addEventListener('click', nextMessage);