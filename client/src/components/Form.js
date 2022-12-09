import React, { useState } from "react";

function Form(props){
    const [title, setTitle] = useState();
    const [category, setCategory] = useState();
    const [director, setDirector] = useState();
    const [message, setMessage] = useState();

    const insert = () => {
        let data = {
            method: "POST",
            body: JSON.stringify({ title, category, director }),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };

        fetch("/insert-film", data)
        .then((res) => res.json(res))
        .then((res) => {
            if (res) {
            setMessage("Película añadida correctamente")
            } else {
            setMessage("Ups! Algo pasó que la película no se añadió")
            }
        });
        
      };

    return (
        <div id="container">
            <div id="form" className="flex-center-column ">
                <h2>Añade una película</h2>
                <div  className="flex-center-column">
                    <label>Título</label>
                    <input onChange={(e) => {setTitle(e.target.value);}} type="text" name="title"/>
                    <label>Categoría</label>
                    <input onChange={(e) => {setCategory(e.target.value);}} type="text" name="category"/>
                    <label>Director</label>
                    <input onChange={(e) => {setDirector(e.target.value);}} type="text" name="director" />
                    <button className="button" onClick={insert}>Añadir</button>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
}

export default Form;