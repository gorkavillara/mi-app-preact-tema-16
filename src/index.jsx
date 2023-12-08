import { render } from "preact";
import { signal } from "@preact/signals";
import "./style.css";

export const contador = signal(10);

export function App() {
  const incrementaContador = () => {
    contador.value++;
  };
  console.log("Renderizado App")
  return (
    <div>
      <h1>Hola mundo desde Preact</h1>
      <button onClick={incrementaContador}>Contador: {contador}</button>
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}

render(<App />, document.getElementById("app"));
