import React from "react"
import {Link} from "react-router-dom"


export default function Menu() {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/nv">Novo Valor</Link></li>
                </ul>
            </nav>
        </header>
    )
}