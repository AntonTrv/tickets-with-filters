import './App.css';

import Ticket from "./app/containers/Ticket";
import CurrencyFilter from "./app/components/Currency";
import Stops from "./app/components/Stops";
import React from "react";
import Header from "./app/components/Header";
import Disclaimer from "./app/containers/Disclaimer/Disclaimer";

function App() {
  return (
    <div className="App">
        <Disclaimer/>
        <Header/>
        <Ticket/>
    </div>
  );
}

export default App;
