import React from "react";
import Buttons from "./Website/Components/Button/BUTTONS";
import Table from "./Website/Components/Table/Table";
import Overview from "./Website/Components/Overview/OVERVIEW";
import Accorrdion from "./Website/Components/Accordion/Accorrdion";
import Intropage from "./Website/WebLayout/Intropage";
import { Route, Routes } from "react-router-dom";

const App=()=>{
  return(<>
  <Routes>
  <Route path="/" element={<Intropage />} />
  <Route path="/overview" element={<Overview />} />
 <Route path="/button" element={<Buttons />} />
 <Route path="/table" element={<Table />} />
 <Route path="/accordion" element={<Accorrdion />} />
  </Routes>
  </>)
}
export default App;