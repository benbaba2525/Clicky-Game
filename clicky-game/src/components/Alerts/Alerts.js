import React from "react";
import "./Alerts.css";
import { Alert } from 'react-bootstrap';


const Alerts = props => (
  <div className="navbar ">
    <div>Clicky Game</div>
    <Alert bsStyle={`${props.alertType}`}>
        <h3>
            <strong>{props.message1}</strong> {props.message2}
        </h3>
    </Alert>
  </div>
);

export default Alerts;
