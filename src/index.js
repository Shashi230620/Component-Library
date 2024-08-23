import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"
import Accorrdion from "./Website/Components/Accordion/Accorrdion";
import Accordion_Table from "./Website/Components/Accordion/Accordion_Table";



ReactDOM.render(<>
<BrowserRouter>
<App />
</BrowserRouter>
</>,document.getElementById("root"))