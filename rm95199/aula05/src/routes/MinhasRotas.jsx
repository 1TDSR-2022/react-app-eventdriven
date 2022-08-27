import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../components/home/Home"

export default function MinhasRotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}