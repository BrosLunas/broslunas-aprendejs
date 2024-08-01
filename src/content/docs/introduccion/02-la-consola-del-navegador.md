---
title: La consola del navegador
description: La consola nos permite ejecutar código JavaScript en tiempo real y ver el resultado.
---

<video class="container video" controls>
    <source src="/assets/video/introduccion/consola.mp4" type="video/mp4">
</video>


Para poder seguir el curso y probar lo que vas haciendo necesitarás por ahora un navegador web. Seguramente ya tengas uno instalado, si no es así, te recomiendo que instales Google Chrome o Brave Browser.

Todos los navegadores tienen una herramienta llamada consola. La consola nos permite ejecutar código JavaScript en tiempo real y ver el resultado. También ahí podemos ver los errores, advertencias y trazas que se producen en nuestro código.

Aunque podemos ejecutar código JavaScript de otras formas, para empezar, vamos a usar esta herramienta que nos ofrece el navegador.

:::note
Recuerda que llamamos código a las instrucciones que le damos a la computadora para que haga algo.
:::

## Cómo abrir la consola
Para abrir la consola del navegador debes hacer lo siguiente:
- Abre tu navegador web favorito, por ejemplo, Google Chrome.
- Ve a la página about:blank en la barra de direcciones. Así evitaremos que la página web que hemos cargado nos moleste.
- Haz click derecho en cualquier parte de la página y selecciona la opción Inspeccionar Elemento o Inspect.
Aquí podrás ejecutar tu código JavaScript y ver el resultado. Es lo que usaremos en las primeras clases del curso. Más adelante pasaremos a usar un editor de código más potente.

![Consola](/assets/img/introduccion/consola.png)


## Comprueba lo que has aprendido
<form id="knowledgeForm">
    <label class="checkbox-container">Para qué sirve la consola del navegador.
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