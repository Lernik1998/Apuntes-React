//
import { useState } from "react";
import styles from "../componentes/boton/estiloComponenteCSS.module.css";

import styled from "styled-components"; // BIBLIOTECA Styled Components la obtenemos mediante -> npm install styled-components

/*Con Styled Components, los estilos están completamente aislados, eliminando el riesgo de conflictos con otros componentes de tu proyecto.
Crea componentes con estilos encapsulados y esto evita conflictos de estilos porque cada componente tiene sus estilos propios y únicos. */

// Para controlar las propiedades del boton

type BotonProps = {
  // Type o Interface
  isLoading: boolean;
};

// Dentro de los backticks ` ` se pone el código CSS que tendra el elemento de HTML de la biblioteca STYLED
const Boton = styled.button<BotonProps>`
  background-color: ${(props) => (props.isLoading ? "red" : "green")};
  color: black;
  width: 50px;
  height: 50px;
`;

function ModulosCSS() {
     // Definir el estado isLoading
  const [isLoading, setIsLoading] = useState(false);


  console.log(styles);

  // También se podría pasar los estilos desde una constante.

  const estilo = ["btn btn-secondary", styles.padded].join(" ");

  return (
    <div>
      <h1>Estilos con MODULOS DE CSS</h1>
      <p>
        Creamos un archivo CSS para poder asignar los estilos, pero tampoco es
        la manera recomendada. Ya que afecta a todos los archivos del proyecto.
        <br />
        <br />
        Una solución más efectiva es usar módulos CSS, que permiten que los
        estilos sean locales a un componente, evitando que afecten a otros
        componentes.
      </p>
      <p>
        Se hace de la siguiente forma: className= / styles.button / Pero tiene
        que ser una clase, no puede ser un elemento HTML. ASÍ NO button/
        background-color: yellow; / ASÍ .button/ background-color: yellow; /
      </p>
      <button
        type="button"
        // className="btn btn-primary"

        /*Para indicar que se aplican varias clases de CSS, para ello lo envolvemos en un ARRAY y transformarlo en un STRING mediante JOIN
      que une Strings con un separador.*/

        className={[styles.button, styles.padded].join(" ")} // Así indicamos que el estilo que se va a usar es el que está dentro de la varible styles
      >
        Primary
      </button>
      <button
        type="button"
        className={["btn btn-secondary", styles.padded].join(" ")}
      >
        Secondary
      </button>
      <button type="button" className={estilo}>
        Third button
      </button>
      <Boton onClick={() => setIsLoading(!isLoading)} isLoading={isLoading}>Botón Styled</Boton>

      <ul className="list-group">
        <li className="list-group-item">An item</li>
      </ul>
    </div>
  );
}

export default ModulosCSS;
