import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'


function RegistroPredio(){
    return(
        <>
        <Container>
            <Header />

            <h2>Usuario de Configuración</h2>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link" href="/">Registro</a>
                                <a class="nav-link" href="/">Asignación</a>
                                <a class="nav-link" href="/">Crear Tipo Cultivo</a>
                                <a class="nav-link" href="/">Configuración de Parámetros</a>  
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
                                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Registrar Predio</h3></div>
                                                <div class="card-body">
                                                    <form>
                                                        <div class="form-floating mb-3">
                                                            <input class="form-control" id="nombrePredio" type="text" placeholder="Ingrese el nombre del predio" />
                                                            <label for="inputNombre">Nombre Predio</label>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="codigoPredio" type="text" placeholder="Ingrese el codigo del predio" />
                                                                    <label for="inputCodigo">Código</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="area" type="text" placeholder="Ingrese el area" />
                                                                    <label for="inputArea">Área</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="latitud" type="text" placeholder="Ingrese la latitud" />
                                                                    <label for="inputLatitud">Latitud</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="longitud" type="text" placeholder="Ingrese la longitud" />
                                                                    <label for="inputLongitud">Longitud</label>
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

export {RegistroPredio};