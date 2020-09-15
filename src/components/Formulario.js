import React, {Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';

const Formulario = ({crearCita}) => {

    //Crear State de CitasReact
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })
    const [ error, actualizarError] = useState(false)

    //Funcion que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    //extraer valores
    const { mascota, propietario, fecha, hora, sintomas} = cita;

    //cuando el usuario emvia datos
    const submitCita = (e) => {
        e.preventDefault();

        //Validacion 
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        //Eliminar msj de error
        actualizarError(false)
        //asiganar un ID
        cita.id = uuid();

        //Crear la cita
        crearCita(cita)

        //Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

            <form
                onSubmit={submitCita}
            >
            <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={actualizarState}
                    value= {mascota}
                />
                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={actualizarState}
                    value= {propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value= {fecha}
                />                
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value= {hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    placeholder="Describa los sintomas"
                    onChange={actualizarState}
                    value= {sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button button-primary"
                >Agregar Cita</button>
            </form>
            



        </Fragment>
     );
}
 
export default Formulario;