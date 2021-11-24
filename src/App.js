import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import icono from './assets/img/icono.png'
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter}from 'reactstrap'
import { render } from '@testing-library/react';

const data = [
  { id: 1, tipo: "Alimentario", tiempo: "12 meses", terreno: "10 hectareas", producto: "Platano"},
  { id: 2, tipo: "Oleaginoso", tiempo: "9 meses", terreno: "100 hectareas", producto: "Girasol"},
  { id: 3, tipo: "Industrial", tiempo: "16 meses", terreno: "18 hectareas", producto: "Caucho"},
  { id: 4, tipo: "Alimentario", tiempo: "8 meses", terreno: "40 hectareas", producto: "Maiz"},
  { id: 5, tipo: "Alimentario", tiempo: "14 meses", terreno: "35 hectareas", producto: "Trigo"},
  { id: 6, tipo: "Forraje", tiempo: "18 meses", terreno: "34 hectareas", producto: "Cebada"},

];

class App extends React.Component{
  state = {
    data: data
  }

  render(){
  return (
  <>
    <Container>
      <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <img src={icono} alt="" width="34px" height= "30px" />
    <a class="navbar-brand" href="#">El Redil</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Quienes somos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </header>
    </Container>
    <Container>
      <br />
      <Button color="success">Insertar Nuevo Cultivo</Button>
      <br /><br />
      <Table>
        <thead>
          <tr>
            <th>
              Id
            </th>
            <th>
              Tipo
            </th>
            <th>
              Tiempo
            </th>
            <th>
              Area Asignada
            </th>
            <th>
              Producto
            </th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((elemento) => (
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.tipo}</td>
              <td>{elemento.tiempo}</td>
              <td>{elemento.terreno}</td>
              <td>{elemento.producto}</td>
              <td><Button color="primary">Editar</Button>{"  "}
              <Button color="danger">eliminar</Button></td>
            </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  </>
  );
  }
}


export default App;
