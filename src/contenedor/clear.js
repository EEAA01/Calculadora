import React from "react";
import "../Estilos/clear.css"

const Clear = (props) =>(
    <div className="clearButton" onClick={props.limpiar} >
        {props.children}
    </div>
);

export default Clear;