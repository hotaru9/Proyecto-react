
import React from "react"
import './index.css';
import {Header} from "./Componentes/Header";
import {List} from "./Componentes/Productos/index";
import 'boxicons'; 

function App() {
  return (
    <div className="App">

   <Header/> 
   <List/> 

    </div>
  );
}

export default App;
