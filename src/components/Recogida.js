import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'

function Recogida(){
    return(
        <>
        <Container>
            <Header />
            <h3>Usuario de gestión</h3>
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

            <div><h4>Recogida</h4></div><br/>

            <div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Fecha inicio</th>
                        <th scope="col">Fecha final</th>
                        <th scope="col">Estimación recolección</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>108</td>
                            <td>Cereal</td>
                            <td>Arroz</td>
                            <td><input type="date" id="fecha-inicio" name="FechaInicio"></input></td>
                            <td><input type="date" id="fecha-final" name="Fechafinal"></input></td>
                            <td><input type="date" id="estimacion-recoleccion" name="EstimacionRecoleccion"></input></td>
                        </tr>

                        <tr>
                            <td>209</td>
                            <td>Fruta</td>
                            <td>platano</td>
                            <td><input type="date" id="fecha-inicio" name="FechaInicio"></input></td>
                            <td><input type="date" id="fecha-final" name="Fechafinal"></input></td>
                            <td><input type="date" id="estimacion-recoleccion" name="EstimacionRecoleccion"></input></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </Container>
        </>
    )
}

export{Recogida};