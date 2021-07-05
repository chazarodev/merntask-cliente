import React, {Fragment, useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, mostrarFormulario} = proyectosContext;

    //state para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: '',
    });

    //Extraer nombre del proyecto
    const {nombre} = proyecto;

    //Lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        });
    };

    //Cuando el usuario envía un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        //validar el proyecto

        //Agregar al state

        //Reiniciar el formulario
    }

    //Mostrar formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    };

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario} 
            >
                Nuevo Proyecto
            </button>

            {formulario 
            ?   (<form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
                    <input 
                        type="text" 
                        className="input-text"
                        placeholder="Nombre del proyecto"   
                        name="nombre"
                        value={nombre}
                        onChange={onChangeProyecto} 
                    />
                    <input 
                        type="submit" 
                        className="btn btn-primario btn-block"
                        value="Agregar proyecto"    
                    />
                </form>) : null
            }
        </Fragment>  
    );
}
 
export default NuevoProyecto;