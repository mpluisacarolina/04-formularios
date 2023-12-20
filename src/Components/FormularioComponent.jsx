import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({});

    const conseguirDatosFormulario = e => {
        e.preventDefault()
        let datos = e.target;
        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value,
            enviar: datos.enviar.value
        }
        console.log(usuario);
        setUsuario(usuario);
    }

    const cambiarDatos = e => {
        let nameDelInput = e.target.name;

        setUsuario(estadoPrevio => ({
            ...estadoPrevio,
            [nameDelInput]: e.target.value
        })
        );

    }

    return (
        <div>
            <h1>Formularios con React</h1>
            { usuario.enviar &&
                (
                    <div className="info_usuario label label-pink">
                        {usuario.nombre} {usuario.apellido} es {usuario.genero} y su biografía es: {usuario.bio}
                    </div>
                )
            }

            <form onSubmit={conseguirDatosFormulario}>
                <input type="text"
                    placeholder='Nombre'
                    name="nombre"
                    onChange = {cambiarDatos}
                />

                <input type="text"
                    placeholder='Apellido'
                    name="apellido"
                    onChange = {cambiarDatos}
                />

                <select name="genero" onChange = {cambiarDatos}>
                    <option value="hombre"> Hombre </option>
                    <option value="mujer"> Mujer </option>
                </select>

                <textarea placeholder='Biografía'
                    name="bio"
                    onChange = {cambiarDatos}>
                </textarea>

                <input type="submit" value="Enviar" name="enviar" />

            </form>
        </div>
    )
}
