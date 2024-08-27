import { useState } from "react";

interface EjercicioListaBotones {
  lista: string[];
  onSelect?: (elemento: string) => void;
}

function EjercicioListaBotones({ lista, onSelect }: EjercicioListaBotones) {
  // Estado -> Marcamos de azul cuando se haya seleccionado algún elemento de la lista
  const [index, setIndex] = useState(-1);

  const capturarClick = (elemento: string, i: number) => {
    setIndex(i);

    onSelect?.(elemento);
  };

  /* No se puede modificar directamente el ARRAY lista recibido como PROP en el componente. Los props SON INMUTABLES
    Estado -> Crear un estado local para manejar la lista: En lugar de modificar directamente la prop lista,
     crea un estado local llamado items para gestionar la lista internamente.*/

  const [item, setItems] = useState(lista);

  const capturarClickAnadir = () => {
    alert("Minion añadido a la lista");

    setItems((prevItems) => [...prevItems, "Minion"]);
  };

  const capturarClickEliminar = (item: string[]) => {
    if (item.length <= 0) {
      alert("La lista ya está vacía!!");
      return;
    }
    alert("Minion eliminado a la lista a " + item[item.length - 1]);
    setItems((prevItems) => {
      return prevItems.slice(0, -1); // Elimina el último elemento del VECTOR
    });
  };

  return (
    <div>
      <button
        onClick={capturarClickAnadir}
        type="button"
        className="btn btn-primary"
      >
        Agregar
      </button>
      <button
        onClick={() => capturarClickEliminar(item)}
        type="button"
        className="btn btn-primary"
      >
        Eliminar
      </button>
      <ul className="list-group">
        {item.map((elemento, i) => (
          <li
            key={i}
            onClick={() => capturarClick(elemento, i)}
            className={`list-group-item ${i === index ? "active" : ""} `}
          >
            {elemento}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EjercicioListaBotones;
