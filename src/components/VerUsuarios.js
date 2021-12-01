import React from 'react';
import { Container } from 'reactstrap';
import icono from '../assets/img/icono.png';

function VerUsuarios() {
    return(
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
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Rol</th>
                <th scope="col">Opciones</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <th scope="row">8900</th>
                        <td>Juan Pérez</td>
                        <td>Administrador</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-primary" style={{marginRight: "15px",  borderRadius: "5px"}} >Editar</button>
                                <button type="button" class="btn btn-primary" style={{borderRadius: "5px"}}>Eliminar</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3040</th>
                        <td>María López</td>
                        <td>Administrador</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-primary">Editar</button>
                                <button type="button" class="btn btn-primary">Eliminar</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">8045</th>
                        <td>Eugenio Pérez</td>
                        <td>Usuario Confidencial</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-primary">Editar</button>
                                <button type="button" class="btn btn-primary">Eliminar</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3009</th>
                        <td>Nicolás Díaz</td>
                        <td>Usuario Gestión</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-primary">Editar</button>
                                <button type="button" class="btn btn-primary">Eliminar</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4004</th>
                        <td>Pedro Pérez</td>
                        <td>Usuario Gestión</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-primary">Editar</button>
                                <button type="button" class="btn btn-primary">Eliminar</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">5460</th>
                        <td>Viviana Ruíz</td>
                        <td>Usuario Gestión</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-primary">Editar</button>
                                <button type="button" class="btn btn-primary">Eliminar</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Container>
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
        </>
    );
}

export {VerUsuarios};