import React from "react";
import { useState } from "react";
export default function NovoValor(){
     
    const [frase, setFrase] = useState('')
    return(

        <div>
            <h2>Vamos escever uma frase!</h2>

            <label>Motivação: </label>
            <input type="text" onChange={(e) => setFrase(e.target.value)}/>

            <p>Motivação do dia - <span>{frase}</span></p>
        </div>
    )
}