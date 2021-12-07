import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header';
import {Footer} from '../components/footer';
import {Link} from 'react-router-dom';

function ConfiguracionParametro(){
    return(
        <>
        <Container>
            <Header />
            <hr></hr>
            <h3>Usuario de configuración</h3>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link" href="/">Inicio</a>
                                <a class="nav-link" href="/usuarioConfiguracion/registro">Registro</a>
                                <a class="nav-link" href="/usuarioConfiguracion/asignacionPredio">Asignación</a>
                                <a class="nav-link" href="/usuarioConfiguracion/crearCultivo">Crear tipo cultivo</a>
                                <a class="nav-link" href="/usuarioConfiguracion/parametro">Configuración de parámetros</a>  
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
                                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Configuración de Parametros</h3></div>
                                                <div class="card-body">
                                                    <form>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="text" placeholder="Ingrese el area destinada" />
                                                                    <label for="inputArea1">Valor metro de agua</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                <select class="form-control" id="idUsuario" type="text" placeholder="Ingrese el identificación del usuario">
                                                                    <option value="1">Arroz</option>
                                                                    <option value="2">Maíz</option>
                                                                    <option value="3">Trigo</option>
                                                                </select>
                                                                <label for="tipoDocumento">Semilla</label>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="text" placeholder="Ingrese el area destinada" />
                                                                    <label for="inputArea1">Valor Semilla</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                <select class="form-control" id="idUsuario" type="text" placeholder="Ingrese el identificación del usuario">
                                                                    <option value="1">NITRAX-S 28-4-0-6S</option>
                                                                    <option value="2">TRIPLE 15-15-15</option>
                                                                    <option value="3">NPK 10-30-10</option>
                                                                </select>
                                                                <label for="tipoDocumento">Fertilizante</label>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="text" placeholder="Ingrese el area destinada" />
                                                                    <label for="inputArea1">Valor Fertilizante</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-primary" style={{marginRight: "15px",  borderRadius: "5px"}} >Guardar</button>
                                                            <button type="button" class="btn btn-primary" style={{marginRight: "15px",  borderRadius: "5px"}}>Limpiar</button>
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
export{ConfiguracionParametro};