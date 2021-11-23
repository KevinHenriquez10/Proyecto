import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import icono from './assets/img/icono.png'
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter}from 'reactstrap'
import { render } from '@testing-library/react';

const data = [
  { id: 1, tipo: "Alimentario", producto: "Platano"},
  { id: 2, tipo: "Oleaginoso", producto: "Girasol"},
  { id: 3, tipo: "Industrial", producto: "Caucho"},
  { id: 4, tipo: "Alimentario", producto: "Maiz"},
  { id: 5, tipo: "Alimentario", producto: "Trigo"},
  { id: 6, tipo: "Forraje", producto: "Cebada"},

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
