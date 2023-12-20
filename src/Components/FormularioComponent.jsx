import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({

    });

    const conseguirDatosFormulario = e => {
        e.preventDefault()
        let datos = e.target;
        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value
        }
        console.log(usuario);
        setUsuario(usuario);

    }
    return (
        <div>
            <h1>Formularios con React</h1>
            { usuario.bio && usuario.nombre && usuario.apellido && usuario.bio.length >= 1 &&
            (
            <div className = "info_usuario label label-pink">
                {usuario.nombre} {usuario.apellido} es {usuario.genero} y su biografía es: {usuario.bio}
            </div>
            )}


            <form onSubmit = {conseguirDatosFormulario}>
                <input type = "text" 
                    placeholder = 'Nombre' 
                    name = "nombre"
                />
                <input type="text" 
                    placeholder='Apellido' 
                    name = "apellido"
                />
                <select name = "genero">
                    <option value="hombre"> Hombre </option>
                    <option value="mujer"> Mujer </option>
                </select>
                <textarea placeholder='Biografía' name = "bio"></textarea>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
