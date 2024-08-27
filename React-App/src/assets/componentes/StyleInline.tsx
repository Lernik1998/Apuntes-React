function StyleInline() {
  const estilos = {
    backgroundColor: "red",
  };

  return (
    <div>
      <h1>Estilos con StyleInline</h1>
      <p>No es muy recomendable, cuando usamos Inline no soportan animaciones ni opciones mas avanzadas de CSS</p>

      <button
        style={estilos} // Recibe un objeto
        type="button"
        className="btn btn-primary"
      >
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

export default StyleInline;
