import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from '../Components/home/Home'
import NovoValor from "../Components/novoValor/NovoValor";

export default function MinhasRotas(){
    
    
    
    return(
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/nv' element={<NovoValor/>}/>
            </Routes>
        </>
    )
}