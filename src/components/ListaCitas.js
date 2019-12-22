import React from "react";
import Cita from "./Cita.js";
import PropTypes from "prop-types";

const ListaCitas = ({ citas, eliminarCita }) => {
    //verificar que mensaje mostrar
    // con Object.keys puedo verificar si existen datos en mi arreglo de objetos
    const mensaje = Object.keys(citas).length === 0 ? 'No existen citas' : 'Administra las citas';
    return (
    <div className="card mt-2 py-5">
      <div className="card-body">
    <h2 className="card-title text-center">{mensaje}</h2>
        <div className="lista-citas">
          {citas.map(cita => (
            <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
          ))}
        </div>
      </div>
    </div>
  );
};

// PropTypes es una forma de documentar nuestra aplicacion indicando que tipo de valor se pasa y si es necesario o no
ListaCitas.propTypes = {
  citas: PropTypes.array.isRequired,
  eliminarCita: PropTypes.func.isRequired
};
export default ListaCitas;
