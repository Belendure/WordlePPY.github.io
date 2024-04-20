let intentos = 5;
const diccionario = ['PIEZA', 'POETA', 'PUEDO', 'PASAR', 'PARED','POLLO','PIZZA', 'POSAR' ]

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);
const input = document.getElementById("guess-input");
const valor = input.value;

const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        terminar("<h2>GANASTE😀</h2>")
        return;
    }
    for (let i in palabra){
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "verde")
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "amarillo")
        } else {
            console.log(INTENTO[i], "gris")
        }
    }
    intentos--;
    if (intentos==0){
        terminar("<h2>Perdiste😖</h2>")
    } 
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";
  
    for (let letra in palabra) {
      const SPAN = document.createElement("span");
      SPAN.className = "letter";
      if (INTENTO[letra] === palabra[letra]) {
        SPAN.innerHTML = INTENTO[letra];
        SPAN.style.backgroundColor = "green";
      } else if (palabra.includes(INTENTO[letra])) {
        SPAN.innerHTML = INTENTO[letra];
        SPAN.style.backgroundColor = "yellow";
      } else {
        SPAN.innerHTML = INTENTO[letra];
        SPAN.style.backgroundColor = "grey";
      }
      ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
  }
  
  
  function terminar(mensaje){
      const INPUT = document.getElementById("guess-input");
      INPUT.disabled = true;
      button.disabled = true;
      let contenedor = document.getElementById('guesses');
      contenedor.innerHTML = mensaje;
  }
  
  function leerIntento(){
      let intento = document.getElementById("guess-input");
      intento = intento.value;
      intento = intento.toUpperCase(); 
      return intento;
  }
  
  