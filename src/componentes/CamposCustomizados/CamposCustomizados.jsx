import "./CamposCustomizados.css";

function CamposCustomizados(props) {
    return(

        <div className="CamposCustomizados_root">
    <span>
{props.label}
    </span>
    <input {...props} className="CamposCustomizados_input"/>
  </div>
);
}

export default CamposCustomizados;
