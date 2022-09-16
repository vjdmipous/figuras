# Introducción

Este repositorio es una actividad de la asignatura IPO (Interacción Personal Ordenador). La asignatura IPO se imparte en las titulaciones de informática de la Universidad de Sevilla.

La actividad tiene como cometido completar el proyecto web inacabado del repositorio atendiendo a unos objetivos que se detallan en este documento.

El proyecto ilustra un simple juego de emparejamiento de figuras hacendo uso de la API Drag and DROP.
Para más información sobre esta API puede consultarse [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) y [Webdev](https://web.dev/drag-and-drop/)

En pantalla se muestra un patrón de figura y tres figuras alternativas como respuesta.
El usuario debe arrrastrar una de las tres figuras y soltarla en el patrón.
Para señalar que el emparejamiento es correcto, se modifica el estilo del patrón y se
desactiva la operación de arrastrar y soltar. Para modificar los estilos se hace uso de las propiedades style [MDN: style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) y draggable [MDN: draggable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable)

Los elementos HTML que representan figuras incluyen un atributo _data-figura_
que almacena el tipo de figura. Los atributos data-\_ pueden manipularse mediante la propiedad dataset
[MDN data-\*](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)

# Contenido

La carperta _www_ incluye los ficheros de partida: _index.html_, _script.js_ y _style.css_.

Los cambios se harán fundamentalmente en _style.css_ y _script.js_. En general, consistirán en:

- añadir declaraciones en las reglas CSS preexistentes
- completar funciones vacías en JS. Para su fácil identificación, los nombres de las funciones a completar comenzarán con tres subrayados. Ej.: \_\_\_funcionVacia()

Se admitirán cambios puntuales en la hoja CSS:

- que obedezcan a alguna observación realizada explícitamente en la actividad
- para fomentar la comprensión de la interacción o realzar la estética (márgenes, sombras, redondeado de esquinas, etc.)
- para dotar de un diseño cromático y tipográfico personal al proyecto.

Los cambios en _index.html_ serán admitidos sólo en el caso de que la solución aportada suponga una modificación significativa de la composición del proyecto que requiera dicha intervención.

# Identificación del trabajo:

- script.js: Se actualizará el nombre del equipo de laboratorio en la variable

            const nombreDelEquipoDeLaboratorio = "XXXXXX";

- style.css: Se actualizará el nombre del equipo de laboratorio en la cabecera

             /* EQUIPO <<XXXXXXX>> */

# Objetivos:

El objetivo de la actividad es el aprendizaje de las dos siguientes técnicas:

- realizar composiciones apoyándose exclusivamente en el flujo normal [MDN: Normal Flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow). Es decir, los valores de la propiedad _display_ se limitan a: _block_, _inline_ y _inline-block_. 
- interacción basada en arrastrar y soltar.

Desde el punto de vista del diseño, esta actividad pretende:

- reflexionar sobre los problemas que presenta el flujo normal respecto al espaciado, la distribución y, especilamente, respecto al centrado (el valor _auto_ en la propiedad _margin_)
- el uso apropiado de las unidades de medida espaciales en el diseño (em, rem, %, ...)
- la estilización de los elementos como apoyo a la comprensión de la interacción (ej.: ¿cómo hacer notar al usuario que sus acciones son correctas?)
- la flexibilidad en el diseño: _var()_, _calc()_, _clamp(min, preferente, max)_, :root

# Indicaciones

El estilo de codificación en el proyecto se apoya en las siguientes características:

- Atributo id: reservar este atributo para el acceso en JS de elementos HTML
- Atributo class: reservar las clases fundamentalmente para estilizar con CSS los elementos HTML
- [Notación BEM](https://getbem.com/) para seleccionar en CSS los elementos HTML
- Notación hsl() para codificar los colores
- Elemento :root para aunar las variables del diseño cromático y tipográfico
- Variables: Generalizar los estilos CSS mediante el uso de variables var() y la función calc()
- Uso preferente de unidades de longitud flexibles (em, rem, vh, vw, %)
- Criterio homogéneo de organización y nomenclatura
  - En reglas y declaraciones en CSS
  - En variables/funciones en JS
  - Notación camello en los nombres en JS
- Comentarios
  - incluir las referencias utilizadas para el diseño o codificación (MDN, Youtube, Stackoverflow , Coolors, etc.)
  - comentar los aspectos que faciliten la lectura del código cuando sea necesario, evitando los comentarios triviales que se limitan a reescribir el código
