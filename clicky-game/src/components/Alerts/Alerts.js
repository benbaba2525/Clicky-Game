import React from "react";
import "./Alerts.css";



const Alerts = props => (
  <div className="navbar ">
    <div>Clicky Game</div>
    
    
        <h3>
            <strong>{props.message1}</strong> {props.message2}
        </h3>

  </div>
);

export default Alerts;
