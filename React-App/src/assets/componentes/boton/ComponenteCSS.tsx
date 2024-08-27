import "../boton/estiloComponenteCSS.module.css";


function ComponenteCSS() {
  return (
    <div>
      <h1>Estilos con CSS</h1>
      <p>Creamos un archivo CSS para poder asignar los estilos, pero tampoco es la manera recomendada.
        Ya que afecta a todos los archivos del proyecto.
        <br />
        <br />
        Una solución más efectiva es usar módulos CSS, que permiten que los estilos sean locales a un componente, evitando que afecten a otros componentes.
      </p>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>

      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </div>
  );
}

export default ComponenteCSS;
