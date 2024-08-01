---
title: ¿Qué es JavaScript?
description: JavaScript es uno de los lenguajes de programación más usados y populares del mundo. Nació en 1995 para darle interactividad a las páginas web y desde entonces ha evolucionado hasta convertirse en un lenguaje de programación de propósito general. Dicho de otra forma, se puede usar casi para cualquier cosa.
---

<video class="container video" controls>
    <source src="/assets/video/introduccion/intro-js.mp4" type="video/mp4">
</video>

## Información
JavaScript es uno de los lenguajes de programación más usados y populares del mundo. Nació en 1995 para darle interactividad a las páginas web y desde entonces ha evolucionado hasta convertirse en un lenguaje de programación de propósito general. Dicho de otra forma: se puede usar casi para cualquier cosa.

:::note
¿Qué es programar? Es el acto de construir un programa o conjunto de instrucciones para decirle a una computadora qué y cómo queremos que haga algo. No es diferente a cuando "programamos" la lavadora, sólo que en vez de pulsar un botón, vamos a usar texto. A este texto se le conoce como "código".
:::

## Por qué aprender JavaScript
JavaScript es, a día de hoy, el único lenguaje de programación que todos los navegadores web entienden sin necesidad de realizar ningún paso previo. Esto hace que casi cualquier página web que visitas tiene alguna línea de JavaScript en su interior.

Su curva de aprendizaje para iniciarte es muy corta ya que en muy poco tiempo puedes empezar a hacer cosas interesantes. Para alcanzar a ser un buen programador en JavaScript necesitarás años de práctica, pero para empezar a hacer cosas interesantes bastará con poco tiempo.

Por si fuera poco, JavaScript es uno de los lenguajes de programación más demandados en el mercado laboral. Es normal, ya que es un lenguaje muy versátil y que se puede usar para casi cualquier cosa.

Además, con JavaScript vas a poder desarrollar casi cualquier cosa que te propongas. Desde aplicaciones web, móviles y de escritorio a backend, videojuegos, inteligencia artificial, Internet de las cosas. Todo un mundo de posibilidades con un sólo lenguaje.

## Comprueba lo que has aprendido
<form id="knowledgeForm">
    <label class="checkbox-container">Que es JS
        <input type="checkbox" name="knowledge" >
        <span class="checkmark"></span>
    </label>
</form>

<style>
    .container {
      box-shadow: 0 0 50px rgb(255, 255, 255);
      border-radius: 25px
    }

.checkbox-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 18px;
    user-select: none;
}

.checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 5px;
}

.checkbox-container:hover input ~ .checkmark {
    background-color: #ccc;
}

.checkbox-container input:checked ~ .checkmark {
    background-color: #2196F3;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
    display: block;
}

.checkbox-container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 7px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}

button {
    background-color: #2196F3;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0b7dda;
}

</style>