import React from "react";
import NavScrollExample from "./Navbars";
import Cardspc from "./Cardspc";
import "./cardspc.css"
function App() {
  return (
    <div>
      <NavScrollExample />
      <div className="cards">
      <Cardspc/>
      <Cardspc/>
      <Cardspc/>
      <Cardspc/>
      <Cardspc/>
      <Cardspc/>
      </div>
    </div>
  );
}
export default App;
