import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header.js';
import NuevaCita from './components/NuevaCita.js';
import ListaCitas from './components/ListaCitas.js';


class App extends Component {
  state = {
    citas: []
  }
  // Se ejecuta cuando la aplicacion carga
  componentDidMount(){
    // vamos a obtener lo que haya en el storage..
    const citasLS = localStorage.getItem('citas');
    // Se comprueba si existen datos en el storage o no..
    if(citasLS){
      this.setState({
        citas:JSON.parse(citasLS) // Se asigna en el state lo que habia en el storage pero transformado a arreglo
      })
    }
  }
  // Cuando se actualiza el state(eliminacion o agregacion de citas)
  // Este metodo no soporta arreglos por lo tanto debe de transformarse en string. 
  // El primer valor es el nombre de la llave y el segundo es el arrglo transformado en String
  componentDidUpdate(){
    localStorage.setItem('citas',JSON.stringify(this.state.citas))
  }

  // Eliminar una cita
  eliminarCitas = id =>{
    // Antes de modificar el state(Eliminar en este caso) se crea una copia
    const citasActuales = [...this.state.citas];
    // utiliza filter para sacar el id del arreglo
    const citas = citasActuales.filter(cita =>cita.id !== id)
    //La línea anterior retorna todos los objetos con id diferente al que se busca.. de esta manera se elimina el deseado
    // actualizar le state 
    this.setState({
      citas
    })
  }

  crearNuevaCita = datos => {
    // copiar el state actual
    const citas=[...this.state.citas,datos];
    // agregar nuevo state
    this.setState({
      citas:citas
    }) 
  }
  render() {
    return (
      <div className="container">
        <Header
          titulo = "Administrador Pacientes veterinaria"
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
              crearNuevaCita = {this.crearNuevaCita}
            />
          </div>
        </div>
        <div className="mt-5 col-md-10 mx-auto">
          <ListaCitas 
            citas= {this.state.citas}
            eliminarCita = {this.eliminarCitas}
          />
        </div>
      </div>
    );
  }
}

export default App;
