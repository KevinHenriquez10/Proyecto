import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header';
import {Footer} from '../components/footer';
import {Link} from 'react-router-dom';

function AsignacionPredio(){
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
        </Container>
        <Container>
        <div className="layoutAuthentication">
                        <div id="layoutAuthentication_content">
                            <main>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-7">
                                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Asignación de Predio</h3></div>
                                                <div class="card-body">
                                                    <form>
                                                    <div class="row mb-3">
                                                        <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                <select class="form-control" id="buscar" type="text" placeholder="Ingrese el código o nombre">
                                                                    <option value="codigo">Código</option>
                                                                    <option value="nombre">Nombre</option>
                                                                </select>
                                                                <label for="busqueda">Buscar por (Código/Nombre)</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="buscar1" type="text" placeholder="Ingrese el el código o nombre" />
                                                                    <label for="busqueda1">Escriba su busqueda</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-primary" style={{marginRight: "15px",  borderRadius: "5px"}} >Buscar</button>
                                                            <button type="button" class="btn btn-primary" style={{borderRadius: "5px"}}>Limpiar</button>
                                                        </div>
                                                        <br/>
                                                        <br/>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="codigoPredio" type="text" placeholder="Ingrese el codigo del predio" />
                                                                    <label for="inputCodigo">Código</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="nombrePredio" type="text" placeholder="Ingrese el nombre del predio" />
                                                                    <label for="inputNombre">Nombre Predio</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="nombreUsuario" type="text" placeholder="Ingrese el nombre del usuario" />
                                                                    <label for="inputNombre">Nombres</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="apellidoUsuario" type="text" placeholder="Ingrese el apellido del usuario" />
                                                                    <label for="inputApellido">Apellidos</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="identificación" type="text" placeholder="Ingrese la identificación del usuario" />
                                                                    <label for="inputId">Identificación</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="direccion" type="text" placeholder="Ingrese la direccion" />
                                                                    <label for="inputDireccion">Dirección</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-floating mb-3">
                                                            <input class="form-control" id="correoUsuario" type="email" placeholder="Ingrese el correo del Usuario" />
                                                            <label for="inputEmail">Correo</label>
                                                        </div>
                                                        
                                                        <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-primary" style={{marginRight: "15px",  borderRadius: "5px"}} >Asignar</button>
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
        
        </>
    )
}
export{AsignacionPredio};