import React, { Component } from "react";
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateinicial = {
  cita: {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  },
  error: false
};

class NuevaCita extends Component {
  state = {...stateinicial};
 // Cuando el usuario escribe en los inputs
  handleChange = e =>{
    // colocar el texto en el state
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name] : e.target.value
      }
    })
  }

  //Cuando el ususairo envia formulairo
  handlesubmit = e=>{
    e.preventDefault();
    // Extraer los valores del state
    const {mascota,propietario,fecha,hora,sintomas} = this.state.cita;
    // Validar que todos los campos esten llenos
    if(mascota === '' || propietario === '' ||hora === '' ||fecha === '' ||
    sintomas === ''){
      this.setState({
        error: true
      })

      // Detener la ejecución
      return;
    }

    // generar objeto con los datos
    const nuevaCita = {...this.state.cita};
    nuevaCita.id = uuid();
    // Agregar la cita al state del App
    this.props.crearNuevaCita(nuevaCita)
    // Reiniciar formulario
    this.setState({...stateinicial });
  }
  render() {
    // extraer valor del error
    const { error} = this.state;

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el Formulario para agendar una cita
          </h2>
          { error ? <div className="alert alert-danger mt-5 mb-5 text-center">TODOS LOS CAMPOS SON OBLIGATORIOS</div>:null}
          <form
          onSubmit= {this.handlesubmit}
          >
            {/* 1er campo del formulario */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota:{" "}
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
              </div>
            </div>
            {/* 2do campo del formulario */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre del Dueño:{" "}
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Dueño"
                  name="propietario"
                  onChange={this.handleChange}
                  value={this.state.cita.propietario}
                />
              </div>
            </div>
            {/* 3er campo del formulario */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha </label>
              <div className="col-sm-8 col-lg-4">
                <input
                 type="date" 
                 className="form-control" 
                 name="fecha" 
                 onChange={this.handleChange}
                  value={this.state.cita.fecha}/>
              </div>
              {/* 4to campo del formulario */}
              <label className="col-sm-4 col-lg-2 col-form-label">Hora </label>
              <div className="col-sm-8 col-lg-4">
                <input 
                type="time" 
                className="form-control"
                name="hora" 
                onChange={this.handleChange}
                value={this.state.cita.hora}
                />
              </div>
            </div>

            {/* 5to campo del formulario */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Síntomas:{" "}
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="sintomas"
                  placeholder="Escribe los síntomas"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                ></textarea>
              </div>
            </div>
            <input type="submit" className="py-3 mt-2 btn btn-success btn-block"
            value="Agregar Nueva Cita"/>
          </form>
        </div>
      </div>
    );
  }
}

// PropTypes es una forma de documentar nuestra aplicacion indicando que tipo de valor se pasa y si es necesario o no
NuevaCita.propTypes = {
  crearNuevaCita: PropTypes.func.isRequired
}

export default NuevaCita;
