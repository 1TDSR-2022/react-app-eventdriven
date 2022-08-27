import React from "react";
import {Routes, Route} from 'react-router-dom' 
import Home from "./Components/home/Home";
import Menu from "./Components/menu/Menu";
import MinhasRotas from "./routes/MinhasRotas";


export default function App(){
    return(
        <div>
            <h1>APP</h1>
            
               <MinhasRotas/>
                <Menu/>
        </div>
    )
}