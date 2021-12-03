import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'


function RegistroPredio(){
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

            <div><h4>Registro de predio</h4></div><br/>
            <div className="div-registroPredio">
                <label htmlFor="NombrePredio">Nombre predio: </label>
                <input type="text" placeholder="Nombre predio" id="form-registro-nombrePredio" name="NombrePredio" />
                <br/>
                <br/>
                <label for="Codigo">Código: </label>
                <input type="number" placeholder="Código" id="form-registro-codigo" name="Codigo" />
                <br/>
                <br/>
                <label for="Area">Área: </label>
                <input type="number" placeholder="Área" id="form-registro-area" name="Area" />
                <br/>
                <br/>
                <h5> Ubicación:</h5>
                <label htmlFor="Latitud">Latitud: </label>
                <input type="text" placeholder="Latitud" id="form-registro-latitud" name="Latitud" />
                <br/>
                <br/>
                <label htmlFor="Longitud">Longitud: </label>
                <input type="text" placeholder="Longitud" id="form-registro-longitud" name="Longitud" />
            </div>
            <br/>
            <div>   
            <button type="button" class="btn btn-primary">Guardar</button>
            <button type="button" class="btn btn-primary">Limpiar</button>
            <button type="button" class="btn btn-primary">Cancelar</button>
            </div>

            <Footer />
        </Container>
        </>
    )
}

export {RegistroPredio};