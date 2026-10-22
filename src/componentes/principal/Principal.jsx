import { Link } from "react-router-dom";
import "./Principal.css";
import { GiBackstab } from "react-icons/gi";


function Principal(props) {
  return (
    <main className="Principal_root">
      <div className="Principal_titulo">

      {props.voltarPara && (<Link to={props.voltarPara}>
      {<GiBackstab size={24} />}
      </Link>)}

      <h2>{props.titulo}</h2>
      </div>

      {props.children}
    </main>
  );
}

export default Principal;
