import { useState } from "react";
import Tarjeta, { CuerpoTarjeta } from "./assets/componentes/Card";
import EjercicioBoton from "./assets/componentes/EjercicioBoton";
import ListGroup from "./assets/componentes/ListGroup";
import ListGroupEV from "./assets/componentes/ListGroupEv";
import NavBar from "./assets/componentes/NavBar";
import Titulo from "./assets/componentes/Titulo";
import EjercicioListaBotones from "./assets/componentes/EjercicioListaBotones";
import StyleInline from "./assets/componentes/StyleInline";
import ComponenteCSS from "./assets/componentes/boton/ComponenteCSS";
import ModulosCSS from "./assets/componentes/ModulosCSS";

const App = () => {
  const lista = ["Lernik", "Sara", "David", "Anto"];

  // Definimos la función como una Fat Arrow Function

  const handleSelect = (elemento: string) => {
    alert("Se ha seleccionado el elemento " + elemento);
  };

  const handleSelect2 = (elemento: string) => {
    alert(
      "Estamos pasando otra función, handleSelect2 para capturar el elemento " +
        elemento
    );
  };

  const listaInventada: string[] = []; // Para quitar el ANY e inicializar un vector vacio

  // Probando el condicional {} con el operador ternario ? : donde en : se podria haber añadido otro componente

  const contenidoListaInv =
    listaInventada.length !== 0 ? (
      <ListGroupEV data={listaInventada} onSelect={handleSelect2} />
    ) : (
      "No hay nada en la lista"
    );

  // Ejercicio Botón

  const [isLoading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(!isLoading);
  };

  //Por convención se llamará siempre App
  // Todo este código está en jsx que luego JavaScript podrá leer transformandolo a React.createElement para que sea legible por el explorador WEB
  return (
    <div>
      <h1>Apuntes REACT</h1>
      <div>
        <h2>Exportando el componente Titulo</h2>
        <Titulo />
      </div>
      <div>
        <h2>Importando el componente Card</h2>
        <Tarjeta>
          <CuerpoTarjeta
            titulo="Titulo del CUERPO de la TARJETA!!!!!"
            texto="Este es el texto"
          />
        </Tarjeta>
        {/*   <CuerpoTarjeta titulo={"ESTE ES EL TITULO!!!"} texto={"Y ESTE ES EL TEXTO!!!"}/>  */}
      </div>
      <div>
        <h2>Pasando propiedades </h2>
        <NavBar body={"El argumento que estamos pasando es este de AQUÍ"} />
      </div>
      <div>
        <h3>Primer List Group</h3>
        <ListGroup data={lista} />
      </div>
      <div>
        <p>
          En cada componente que exista un useState va a tener su propio estado
          independiente.
        </p>
        <h3>Segundo List Group</h3>
        <ListGroup data={lista} />
      </div>
      <div>
        <h3>Lista con una función - Función como propiedad</h3>
        <ListGroupEV data={lista} onSelect={handleSelect} />{" "}
        {/*Le pasamos una función, que por convención cuando pasamos una función a un componente se tiene que llamar HANDLE SELECT*/}
        <p>
          De esta manera podemos ir creando funciones que se van a encontrar en
          COMPONENTES de más arriba como App y podemos ir pasandolos a
          componenetes que están más abajo como ListGroupEV y vamos a poder
          hacer que tengan comportamientos diferentes dependiendo de la función
          que le pasemos.
        </p>
        <ListGroupEV data={lista} onSelect={handleSelect2} />
      </div>
      <div>
        <h4>Diferencia entre State y Props</h4>
        <p>
          State - Valores de VARIABLES que se encuentran dentro de las funciones
          / Valores o datos internos del componente. / Pueden MUTAR Props -
          Serian los ARGUMENTOS que le vamos pasando a los componentes o
          componenetes funcionales / Argumentos que les pasamos a los
          componentes. / Son INMUTABLES
        </p>
      </div>
      <div>
        <h4>Truthy y falsy</h4>
        {/* && evalua TRUE*/}
        <p>
          Se emplea el operador {"" && "No hay nada escrito"}
          <br />
          {"Algo escrito" && "Hay algo escrito"}
          <br />
          {undefined && "Indefinido"}
          <br />
          {null && "Nulo"}
          <br />
          {false && "Falso"}
          <br />
          {0 && "Número 0 que es false"}{" "}
          {/* Esto saca 0, hay que tener Cuidado!*/}
          <br />
          Evaluamos si existe un List
          <br />
          {lista.length !== 0 && "Existe la lista"}
        </p>
      </div>

      <div>
        <h3>Probando condicional</h3>
        {contenidoListaInv}
      </div>
      <div>
        <h4>Ejercicio botón</h4>
        <EjercicioBoton
          children="Haz click"
          isLoading={isLoading}
          onClick={handleLoading}
        />
      </div>
      <div>
        <h4>Ejecicio Lista con botones</h4>
        <EjercicioListaBotones lista={lista} />
      </div>
      <div>
        <h3>Estilos a los botones</h3>
        <StyleInline />
      </div>
      <div>
        <h4>Aplicando CSS a un archivo </h4>
        <ComponenteCSS />
      </div>
      <div>
        <h3>Modulos de CSS </h3>
      <ModulosCSS/>
      </div>
    </div>
  );
};

export default App;
