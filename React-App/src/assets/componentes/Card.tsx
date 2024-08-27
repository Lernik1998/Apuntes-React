import { ReactNode } from "react";

interface TarjetaProps {
  children: ReactNode; // Si quisieramos pasar otro componente(<Tarjeta/>) o un código HTML sería con REACTNODE
  // De esta forma se crean componentes que pueden tener como parametros otros componentes COMPONENTES DENTRO DE COMPONENTES
}

function Tarjeta(props: TarjetaProps) {
  const { children } = props;
  //Creamos el objeto para pasarselo al style
  const width = {
    width: 350, // Al tener una sola propiedad se puede crear directamente en la etiqueta style
  };
  return (
    <div className="card" style={width}>
      {/*React espera un Objeto */}
      <div className="card-body"></div>
      {/* Creado dentro directamente*/}
      <p>Objeto</p>
      <div className="card">
        {" "}
        {/*style={{ width: 10, height: 10 }} */}
        <div>
          <h2> Empleando fragments </h2>
          {children}
        </div>
      </div>
    </div>
  );
}

/*Para evitar tener que introducir todo el contenido en otro div,se emplean los fragments, que permiten
tener el código HTML podriamos poner directamente <Fragment> o simplemente <>
 */

interface CuerpoTarjetaProps {
  // Si quisieramos que alguna de estas propiedades fuera opcional, se indica con el simbolo de ?
  titulo: string;
  texto?: string;
}

export function CuerpoTarjeta(props: CuerpoTarjetaProps) {
  // Export nos permite poder exportarlo a cualquier otro lugar del proyecto
  const { titulo, texto } = props;
  return (
    <>
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{texto}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );
}

export default Tarjeta;
