// -------------------------------------------------------
// PREAMBULO

// El premabulo tiene como cometido la identificación de la autoría del trabajo
// El nombre será mostrada en el elemento HTML #equipo de la página web
// Cada equipo debe actualizar la constante con su nombre de equipo

const nombreDelEquipoDeLaboratorio = "XXXX";
document.getElementById("equipo").innerHTML = nombreDelEquipoDeLaboratorio;

// -------------------------------------------------------
// PROYECTO FIGURAS

// Aplicacion web que ilustra un simple juego de emparejamiento de figuras
// hacendo uso de la API Drag and DROPº
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
// https://web.dev/drag-and-drop/

// Se muestra un patrón de figura y tres figuras alternativas como respuesta.
// El usuario debe arrrastrar una de las tres figuras y soltarla en el patrón
// Si el emparejamiento es correcto, se visualiza modificando el estilo del patrón y
// desactivando la operación de arrastrar y soltar.
// Para modificar los estilos se hace uso de las propiedades style y draggable
//   https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
//   https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable

// Los elementos HTML que representan figuras incluyen un atributo data-figura
// que almacena el tipo de figura.
// Los atributos data-* pueden manipularse mediante la propiedad dataset
// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*
//

// -------------------------------------------------------
//  VARIABLES

const figurasDisponibles = ["circulo", "triangulo", "hoja"];

// VARIABLES DE ELEMENTOS HTML CON EVENTOS ASOCIADOS

// Elementos que pueden ser arrastrados (atributo HTML draggable="true")
const figuras = document.querySelectorAll(".panel__alternativas .figura");

figuras.forEach((figura) => {
  figura.addEventListener("dragstart", dragStart);
  figura.addEventListener("dragend", ___dragEnd);
});

// Panel donde se admite soltar los elementos arrastrados

const panelPatron = document.getElementById("panelPatron");

panelPatron.addEventListener("dragenter", ___dragEnter);
panelPatron.addEventListener("dragover", dragOver);
panelPatron.addEventListener("dragleave", dragLeave);
panelPatron.addEventListener("drop", drop);

//  -------------------------------------------------------
//  FUNCIONES

//  -------------------------------------------------------
// Funcion principal

function comienzo() {
  // Visualiza en el panel del patron una de las posibles figuras disponibles

  // Escoge aleatoriamente la figura que será mostrada en el patrón
  const forma = elementoAleatorio(figurasDisponibles);

  // Accede al elemento HTML donde se incluirá la figura
  const selector = ".panel__patron .figura";
  const elementoFiguraEnPatron = document.querySelector(selector);

  // Se actualizan los atributos HTML class y data-figura
  // para visualizar e identificar la figura mostrada en el patrón
  elementoFiguraEnPatron.classList.add(forma);
  elementoFiguraEnPatron.dataset.figura = forma;
}

//  -------------------------------------------------------
// Gestores de eventos
// Los eventos para arrastrar y soltar figuras pueden dividirse en tres grupos:
//  1) dragStart y dragEnd
//         gestionan la acción de arrastrar
//  2) dragEnter, dragOver, dragLeave
//         gestionan la acción de sobrevolar una zona preparada para soltar un elemento
//  3) dragdrop
//         gestionan la acción de soltar un elemento en una zona preparada para soltarlo

function dragStart(e) {
  // Esta función tiene dos cometidos:

  // Muestra visualmente que se ha iniciado el arrastre añadiendo a
  // la figura el estilo figura--arrastrando
  e.target.classList.add("figura--arrastrando");

  // Almacena el tipo de figura (data-figura) en los datos de transferencia
  // para poder comprobar, al soltar la figura, si coincide con el patrón
  e.dataTransfer.setData("text/plain", e.target.dataset.figura);
}

function ___dragEnd(e) {
  // Si se suelta la figura en una zona exterior al patrón, el efecto es como
  // si se hubiera cancelado la operación.
  // Esta función elimina de la figura el estilo de clase figura--arrastrando
  // con el objetivo de que su aspecto vuelva a ser el original
}

function ___dragEnter(e) {
  // Esta función se limita a hacer notar que la figura arrastrada entra en la zona del patrón
  // El efecto visual se consigue añadiendo al panelPatrón el estilo de clase figura--sobrevolando
}

function dragOver(e) {
  // Si la figura se mantiene dentro del panel del patrón sin soltarla, no es necesario
  // hacer ningún cambio.
  e.preventDefault();
  return false;
}

function dragLeave(e) {
  // Esta función se limita a hacer notar que la figura arrastrada sale de la zona del patrón
  // El efecto visual se consigue eliminando del panelPatrón el estilo de clase figura--sobrevolando
  if (e.target.id == "panelPatron") {
    e.target.classList.remove("figura--sobrevolando");
  }
}

function drop(e) {
  // Muestra visualmente que se ha soltado la figura en el panel del patrón.
  // Se suprime el estilo figura--sobrevolando para que el panel patrón
  // vuelva a su aspecto original

  e.preventDefault();

  if (e.target.id == "panelPatron") {
    e.target.classList.remove("figura--sobrevolando");
  }

  // Se recuperan:
  // la figura soltada (a partir de los datos de transferencia)
  // y la figura del patrón (almacenada en el atributo data-figura)
  const figuraSoltada = e.dataTransfer.getData("text/plain");
  const figuraDelPatron = e.target.dataset.figura;

  if (figuraSoltada == figuraDelPatron) {
    // Si ambas figuras coinciden, se ilustra la coincidencia:

    // (1) se detiene el proceso de arrastre (las figuras dejan de ser arrastrables)
    figuras.forEach((figura) => {
      figura.draggable = false;
    });

    // (2) ocultando la figura arrastrada
    const selector = `.panel__alternativas [data-figura="${figuraSoltada}"]`;
    elementoArrastrado = document.querySelector(selector);
    elementoArrastrado.style.opacity = "0%";

    // y (3) se modifica el aspecto del patrón para remarcar la coincidencia

    ___modificaAspectoDelPatron(panelPatron);
  }

  return false;
}

//  -------------------------------------------------------
//  Funciones auxiliares

function ___modificaAspectoDelPatron(panelPatron) {
  // Modicar los estilos del patrón para que se note el cambio
  // Por ejemplo:
  //   usar un borde discontinuo con un color llamativo
  //   alterar el color de fondo del patrón
  //   añadir una sombra al patrón
}

//  Devuelve un elemento aerbitraio del array
//  Resumen: Math.floor(Math.random() * array.length);
function elementoAleatorio(array) {
  // Numero de elementos en el array
  const size = array.length;

  // Numero real aleatorio entre 0 y size (numero de elementos del array)
  // Se basa en que Math.random() devuelve un numero real aleatorio entre 0 y 1
  const indiceRealAleatorio = Math.random() * size;

  // Redondeo del número real obtenido al entero más próximo
  // para que se corresponda con una posición (indice) correcta.
  const indiceALeatorio = Math.floor(indiceRealAleatorio);

  // Devuelve el elemento del array ubicad en el indice aleatorio
  return array[indiceALeatorio];
}

//  Funcion principal que da comienzo a la ejecución

comienzo();
