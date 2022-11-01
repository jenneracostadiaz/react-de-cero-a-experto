Para iniciar el proyecto en Vite tenemos que ejecturalo de la siguiente manera
<code>yarn dev</code>
Eliminamos todo el src, para hacer nuestras primeras pruebas, creamos el main.jsx e importamos los elementos para renderizar nuestra aplicacion
<code>import React from "react";</code>
<code>import ReactDOM from "react-dom/client";</code>
Todo en react inicia con un componente, y un componente no es mas que una funcion
<code>
function App() {
  return (<h1>Hola Mundo</h1>);
}
</code>
Renderizemos
<code>
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
</code>



<code>
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hola Mundo</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
</code>