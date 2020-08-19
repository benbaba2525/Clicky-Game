// IMPORTS
import React from 'react';
import "./Main.css";
// PROPS: Main
const Main = props => (
    <main className={`${props.shake}`}>
        <p className = "flicker-1 header-font"><strong>Click on an image to earn points, But don't click on any more than once!!</strong></p>
        <div className="container-fulid">
       {props.children}
     </div>
        
    </main>
)
// EXPORT DEFAULT: Main
export default Main;
