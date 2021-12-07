import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header';
import {Footer} from '../components/footer';
import {Link} from 'react-router-dom';


function AsignarArea(){
    return(
        <>
        <Container>
            <Header />

            <h3>Usuario de Gestión</h3>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link" href="/">Asignar Área</a>
                                <a class="nav-link" href="/">Configuración de predio</a>
                                <a class="nav-link" href="/">Costos</a>
                                <a class="nav-link" href="/">Recogida</a>  
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <Container>
        <div className="layoutAuthentication">
                        <div id="layoutAuthentication_content">
                            <main>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-7">
                                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Asignación de Área</h3></div>
                                                <div class="card-body">
                                                    <form>
                                                    <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="text" placeholder="Ingrese el area destinada" />
                                                                    <label for="inputArea1">Id Cultivo</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="apellidoUsuario" type="text" placeholder="Ingrese el apellido del usuario" />
                                                                    <label for="inputNombre">Tipo de Cultivo</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="text" placeholder="Ingrese el area destinada" />
                                                                    <label for="inputArea1">Producto</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="apellidoUsuario" type="text" placeholder="Ingrese el apellido del usuario" />
                                                                    <label for="inputNombre">Área Asignada (m<sup>2</sup>)</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="text" placeholder="Ingrese el area destinada" />
                                                                    <label for="inputArea1">Cantidad de Semilla (kg)</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="apellidoUsuario" type="text" placeholder="Ingrese el apellido del usuario" />
                                                                    <label for="inputNombre">Tiempo del Cultivo (semanas)</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="text" placeholder="Ingrese el area destinada" />
                                                                    <label for="inputArea1">Cantidad de Agua (m<sup>3</sup>)</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="apellidoUsuario" type="text" placeholder="Ingrese el apellido del usuario" />
                                                                    <label for="inputNombre">Cantidad de Fertilizante por Hectarea (Kg)</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="text" placeholder="Ingrese el area destinada" />
                                                                    <label for="inputArea1">Kilogramos Recogidos</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="apellidoUsuario" type="text" placeholder="Ingrese el apellido del usuario" />
                                                                    <label for="inputNombre">Tiempo de Espera (semanas)</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="fechaNacimiento" type="date" placeholder="Ingrese la fecha de nacimiento del usuario" />
                                                                    <label for="inputFecha">Fecha de Siembra</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="fechaNacimiento" type="date" placeholder="Ingrese la fecha de nacimiento del usuario" />
                                                                    <label for="inputFecha">Fecha de Recogida</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-primary" style={{marginRight: "15px",  borderRadius: "5px"}} >Asignar</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    
        </Container>
        <Footer />
        </Container>
        </>
    )
}

export{AsignarArea};