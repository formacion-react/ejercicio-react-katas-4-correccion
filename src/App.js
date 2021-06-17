import { useState } from "react";
import { Boton } from "./componentes/Boton/Boton";
import { Numero } from "./componentes/Numero";

function App() {
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);
  const [numeroActivo, setNumeroActivo] = useState(null);
  const incrementaNumeros = () => {
    if (numeros[numeros.length - 1] === 20) {
      return;
    }
    setNumeros(numeros.map((numero) => numero + 1));
  };
  const decrementaNumeros = () => {
    if (numeros[0] === 0) {
      return;
    }
    setNumeros(numeros.map((numero) => numero - 1));
  };
  return (
    <>
      <div className="contenedor">
        <Boton accion={decrementaNumeros}>{"<<"}</Boton>
        {numeros.map((numero) => (
          <Boton key={numero} accion={() => setNumeroActivo(numero)}>
            {numero}
          </Boton>
        ))}
        <Boton accion={incrementaNumeros}>{">>"}</Boton>
        <Numero numero={numeroActivo} />
        <button className="boton">Cualquiera</button>
      </div>
    </>
  );
}

export default App;
