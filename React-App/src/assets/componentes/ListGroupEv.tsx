// command + shift + r --> Create functional tsrfc

import { useState } from "react";

// import { MouseEvent } from "react"; Era para hacer la comprobación del evento

type Props = {
  // type == interface
  data: string[];
  // También lo haremos opcional, porque no siempre vamos a querer pasarle una función

  onSelect?: (elemento: string) => void; // Indicamos que es void, es decir, no devuelve nada y además el tipo de tado que recibe
  /* Para que no sea de tipo (parameter) onSelect: any y sea una función.
En este caso es una Fat Arrow Function, pero que no va a retornar nada*/
};

function ListGroupEV({ data, onSelect }: Props) {
  // Se indica la función en las propiedades y por supuesto hay que indicamos en la interfaz

  /* useState se le conoce como HOOK, que es una funcionalidad que viene incluida dentro de REACT (stateHook),
que nos ha permitido modificar variables dentro de un componente.
Y devuelve un ARRAY con 2 elementos, una VARIABLE para poder usarla dentro del componenente y además
una FUNCIÓN,que permite actualizar la variable */

  /* Con esta función se detectan las variables de data (ARRAY),con -1 se indica que no se seleccione ningún elemento por DEFECTO
                    además de que devuelve un ARRAY con 2 elementos (INDICE) que se puede modificar y (SETINDICE) es una función que 
                    permite modificar INDICE
  */

  /* Esta función captura o manipula el evento del click (Es una FAT Arrow Function)
Se ha inspeccionado MouseEvent por conveción se puede indicar que recibe un evento con la letra e o directamente event */

  const [indice, setIndice] = useState(-1);

  const capturarClick = (i: number, elemento: string) => {
    setIndice(i);
    /* Usamos la FUNCIÓN setIndex para cambiar el valor de indice, que es obtenido a través 
    de la FUNCIÓN capturarClick como un number.
    */

    /* No se puede invocar un objeto que es posiblemente "no definido".ts(2722) y para quitar este error evaluamos si existe 
    la función mediante los simbolos .?, que indica que en el caso de existir que ejecute la función onSelect*/

    onSelect?.(elemento); // Tiene que venir por las propiedades (Funciones desde las propiedades)
  };

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          Imprimiendo el valor de la posición 0: {data[0]}
        </li>
        <li className="list-group-item">Ahora iteraremos sobre la lista</li>

        {data.map((elemento, i) => (
          /* Para averiguar el tipo de evento que se está llevando a cabo, se puede hacer una función anonima con un console.log()
                                                                    IMPORTANTE!!!! Viene del modulo de React
            De esta manera nos apareceria el tipo de evento --> (parameter) e: React.MouseEvent<HTMLLIElement, MouseEvent>
            onClick={ (e) => console.log(e) }
            
            */
          <li
            onClick={() => capturarClick(i, elemento)} // También pasamos el elemento como argumento
            key={elemento}
            className={`list-group-item ${indice == i ? "active" : ""} `}
          >
            {elemento}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroupEV;
