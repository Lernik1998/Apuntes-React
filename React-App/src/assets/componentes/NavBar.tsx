/*Hay que crear un interfaz, ya que nos aparece este ERROR en props 
-> El parámetro 'props' tiene un tipo 'any' implícitamente.ts(7006), que indica que props no tiene tipo(TypeScript).
Esta interfaz va a indicar el tipo de props
  */

interface NavBarProps {
  // Hay que indicar lo que va a recibir y el tipo del valor (String,Int,Bool...)
  body: string;
}

// Haremos uso de la propiedades dentro de los componentes, para ello hay que recordar el nombre de la propiedad que le estamos pasando desde App.tsx
function NavBar(props: NavBarProps) {
  // Y por convención hay que indicar como parametro props e indicar que ese parametro (props) va a tener la forma que se indica en la interfaz NavBarProps
  // Para obtener la propiedades
  const { body } = props;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <p>{body}</p>
        {/* El body */}
      </div>
    </nav>
  );
}

export default NavBar;

/* *
function bodyNavBar() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
*/
