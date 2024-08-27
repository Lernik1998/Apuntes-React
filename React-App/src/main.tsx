import React from "react";
import ReactDOM from "react-dom/client"; // Aqui podemos observar que estamos usando la biblioteca ReactDom
import App from "./App.tsx";

// import './index.css' Ya no necesitamos los estilos por defecto que nos facilita Vite
//import "bootstrap/dist/css/bootstrap.min.css"; Vamos a desactivar Bootstrap para probar StyleInline

// Lo vamos a usar para crear un nodo de React dentro del elemento root(Ubicado en index.html "Div") y además lo va a reenderizar
ReactDOM.createRoot(document.getElementById("root")!).render(
  // Va a ser el encargado de pintar todo
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pero podríamos tener mas bibliotecas por aqui
