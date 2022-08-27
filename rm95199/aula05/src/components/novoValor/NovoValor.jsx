import React from "react"
import { useState } from "react"

export default function NovoValor() {
    
    const[frase, setFrase] = useState("")
  
    //const minhaFuncao = () => {
    //    setFrase("Novo Valor")
    //}
    

    return(
        <div>
            <h2>Vamos escrever uma frase</h2>
            <div>
                <label>Motivação : </label>
                <input type="text" onChange={(e) => setFrase(e.target.value)}/>
                <p>Mtivação do dia <span>{frase}</span></p>
            </div>
        </div>       
    )
}