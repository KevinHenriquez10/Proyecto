import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'

function CrearTCultivo(){
    return(
        <>
        
        <Container>
            <Header />

            <h3>Usuario de configuración</h3>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <a class="nav-link" href="/">Registro</a>
                                    <a class="nav-link" href="/">Asignación</a>
                                    <a class="nav-link" href="/">Crear tipo cultivo</a>
                                    <a class="nav-link" href="/">Configuración de parámetros</a>  
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
                                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Crear Tipo de Cultivo</h3></div>
                                                <div class="card-body">
                                                    <form>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="text" placeholder="Ingrese el area destinada" />
                                                                    <label for="inputArea1">Área Destinada</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="apellidoUsuario" type="text" placeholder="Ingrese el apellido del usuario" />
                                                                    <label for="inputNombre">Cantidad de Semilla por Hectarea</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="text" placeholder="Ingrese el area destinada" />
                                                                    <label for="inputArea1">Tiempo del Cultivo (semanas)</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="apellidoUsuario" type="text" placeholder="Ingrese el apellido del usuario" />
                                                                    <label for="inputNombre">Cantidad de Agua (m<sup>3</sup>)</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="text" placeholder="Ingrese el area destinada" />
                                                                    <label for="inputArea1">Kg de Fertilizante por Hectarea</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="apellidoUsuario" type="text" placeholder="Ingrese el apellido del usuario" />
                                                                    <label for="inputNombre">Tiempo de Recolección (meses)</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="text" placeholder="Ingrese el area destinada" />
                                                                    <label for="inputArea1">Kg de Recolectado por Hectarea</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-primary" style={{marginRight: "15px",  borderRadius: "5px"}} >Crear</button>
                                                            <button type="button" class="btn btn-primary" style={{marginRight: "15px",  borderRadius: "5px"}}>Ver Cultivos</button>
                                                            <button type="button" class="btn btn-primary" style={{borderRadius: "5px"}}>Cancelar</button>
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

export{CrearTCultivo};