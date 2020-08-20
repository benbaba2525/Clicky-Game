import React from "react";
import "./Alerts.css";



const Alerts = props => (
  <div className="navbar ">
    <div>Clicky Game</div>
        <h3>
        <div className={props.message1}>{props.message2}</div>
        </h3>

  </div>
);

export default Alerts;
