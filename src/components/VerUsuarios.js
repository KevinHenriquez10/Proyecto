import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'

function VerUsuarios() {
    return(
        <>
        <Container>
            <Header />
            <hr></hr>
        </Container>
        <Container>
        <table class="table table-bordered">
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
            <Footer />
        </Container>
        </>
    );
}

export {VerUsuarios};