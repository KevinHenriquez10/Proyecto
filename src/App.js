import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import icono from './assets/img/icono.png'
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter}from 'reactstrap'
import { render } from '@testing-library/react';
import caucho from './assets/img/caucho.jpg'
import forraje from './assets/img/forraje.jpg'
import oleoginoso from './assets/img/oleoginoso.jpg'
import alimentario from './assets/img/alimentario.jpg'
import { Registro } from './components/Registro';
import { VerUsuarios } from './components/VerUsuarios';
import { EditarUsuario } from './components/EditarUsuario';
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
        <div className="div-Header">
              <img src={icono} alt="" width="34px" height= "30px" />
        El Redil S.A.S
        </div>
      </header>
      <hr></hr>
    </Container>
    <Container>
      <div className="div-front">
        <div className="div-login">
          <div class="shadow p-3 mb-5 bg-body rounded">
        Iniciar Sesión
          <form>
            <div class="form-floating mb-3" style={{paddingLeft: "15px", paddingRight: "15px"}}>
              <input type="text" class="form-control" id="usuario" placeholder="name@example.com"/>
              <label for="usuario" style={{paddingLeft: "25px"}}>Usuario</label>
            </div>
            <div class="form-floating" style={{paddingLeft: "15px", paddingRight: "15px"}}>
              <input type="password" class="form-control" id="password" placeholder="Password"/>
              <label for="password" style={{paddingLeft: "25px"}}>Password</label>
              <button type="button" class="btn btn-primary" style={{ float: 'left', marginTop: '15px', marginRight: '15px',  width: '100%'}}>Ingresar</button>
              <button type="button" class="btn btn-primary" style={{ marginTop: '15px', width: '100%'}}>Registrate</button>
              <br></br>
            <p style={{marginTop: '20px'}}>Olvidaste tu contraseña?</p>
            </div>
          </form>
          </div>
        </div>
        <div className="div-texto1">
          Bienvenidos!
        </div>
        <div className="div-textoBienvenida">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."        
        </div>
        <div className="div-textoBienvenida">
          <img src={oleoginoso} alt="" style={{width: "45%", marginRight: "15px", height: "150px", marginTop: "50px"}}/>
          <img src={alimentario} alt="" style={{width: "45%", marginRight: "15px", height: "150px", marginTop: "50px"}}/>
          <img src={caucho} alt="" style={{width: "45%", marginRight: "15px", height: "150px", marginTop: "50px"}}/>
          <img src={forraje} alt="" style={{width: "45%", marginRight: "15px", height: "150px", marginTop: "50px"}}/>
        </div>
      </div>
    </Container>
    {/*<Registro />*/}
    <Container>
      <footer>
        <div className="div-footer">
          <hr></hr>
          Dirección: Avenida Siempre Viva-123
          <br></br>
          Email: elredilsas@elredil.co
          <br></br>
          Tel: 035-3465526 
          <br></br>
          Cel: 301-4578856
          <br></br>
        </div>
      </footer>
    </Container>
    <VerUsuarios/>
    <Registro/>
    <EditarUsuario/>
  </>
  );
  }
}
export default App;
