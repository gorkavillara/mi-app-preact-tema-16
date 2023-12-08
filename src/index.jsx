import { render } from "preact";
import "./style.css";

export function App() {
  return <h1>Hola mundo desde Preact</h1>;
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