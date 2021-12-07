import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter}from 'reactstrap';
import { render } from '@testing-library/react';
import { Registro } from './components/Registro';
import { VerUsuarios } from './components/VerUsuarios';
import { EditarUsuario } from './components/EditarUsuario';
import { Bienvenida } from './components/section-Bienvenida';
import { RegistroPredio } from './components/RegistroPredio';
import { AsignacionPredio } from './components/AsignacionPredio';
import { Administrador } from './components/Administrador';
import { CrearTCultivo } from './components/CrearTCultivo';
import { ConfiguracionParametro } from './components/ConfiguracionParametro';
import { AsignarArea } from './components/AsignarArea';
import { CultivosAsignados } from './components/CultivosAsignados';
import { ConfiguracionPredio } from './components/ConfiguracionPredio';
import { Costos } from './components/Costos';
import { Recogida } from './components/Recogida';
import { Home } from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/usuarios" element={<VerUsuarios />}/>
        <Route path="/administrador/registro" element={<Registro />}/>
      </Routes>
    </BrowserRouter>
    {/* <Container>
      <Header />
      <hr></hr>
    </Container>
    <Container>
      <div className="div-front">
        <Login />
        <Bienvenida />        
      </div>
    </Container>
    <Container>
    <Footer />
    </Container>
    <Administrador/>
    <VerUsuarios/>
    <EditarUsuario/>
    <Registro/>
    <CultivosAsignados/>
    <RegistroPredio/>
    <AsignacionPredio/>
    <CrearTCultivo/>
    <ConfiguracionParametro/>
    <AsignarArea/>
    <ConfiguracionPredio/>
    <Costos/>
    <Recogida/> */}
  </>
  );
  }
}
export default App;
