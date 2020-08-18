import React from "react";
import Alerts from "./Alerts";
import Banner from "./Banner";
import Score from "./Score";
import Main from "./Main";
import Footer from "./Footer";


function App() {
  return (
    <div className="fluid-container lodge h-100vh">
       <Alerts />
       <Banner />
       <Score />
       <Main />

      

      <Footer />
    </div>
  );
}

export default App;
