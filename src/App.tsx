import React from "react";
// components
import Navbar from "./components/Navbar";
import CalendarContainer from "./components/CalendarContainer";
import ModalReservation from "./components/ModalReservation";
import Paginator from "./components/Paginator";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <CalendarContainer />
      <ModalReservation />
      <Paginator />
    </div>
  );
};

export default App;
