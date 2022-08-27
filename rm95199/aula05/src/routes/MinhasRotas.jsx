import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../components/home/Home"
import NovoValor from "../components/novoValor/NovoValor"

export default function MinhasRotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nv" element={NovoValor}></Route>
            </Routes>
        </>
    )
}