import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'


function AsignarArea(){
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

            <div><h4>Asignación de área</h4></div><br/>
            <div>
                <label for="IdCultivo">Id cultivo: </label>
                <input type="number" placeholder="Id cultivo" id="id-cultivo" name="IdCultivo" />
                <br/>
                <br/>
                <label htmlFor="TipoCultivo">Tipo de cultivo: </label>
                <input type="text" placeholder="Tipo de cultivo" id="tipo-cultivo" name="TipoCultivo" />
                <br/>
                <br/>
                <label htmlFor="Producto">Producto: </label>
                <input type="text" placeholder="Producto" id="producto" name="Producto" />
                <br/>
                <br/>
                <label for="AreaAsignada">Área asignada (m<sup>2</sup>): </label>
                <input type="number" placeholder="Área asignada" id="area-asignada" name="AreaAsignada" />
                <br/>
                <br/>
                <label for="CantidadSemilla">Cantidad de semilla (kg): </label>
                <input type="number" placeholder="Cantidad de semilla" id="cantidad-semilla" name="CantidadSemilla" />
                <br/>
                <br/>
                <label for="TiempoCultivo">Tiempo del cultivo (en semanas): </label>
                <input type="number" placeholder="Tiempo del cultivo" id="tiempo-cultivo" name="TiempoCultivo" />
                <br/>
                <br/>
                <label for="CantidadAgua">Cantidad de agua (m<sup>3</sup>): </label>
                <input type="number" placeholder="Cantidad de agua" id="cantidad-agua" name="CantidadAgua" />
                <br/>
                <br/>
                <label for="CantidaFertilizante">Cantidad de fertilizante por hectarea (kg): </label>
                <input type="number" placeholder="Cantidad de fertilizante por hectarea" id="cantidad-fertilizante" name="CantidadFertilizante" />
                <br/>
                <br/>
                <label for="KgRecogido">Kilogramos recogidos: </label>
                <input type="number" placeholder="Kilogramos recogidos" id="kg-recogido" name="KgRecogido" />
                <br/>
                <br/>
                <label for="TiempoEspera">Tiempo de espera (en semanas): </label>
                <input type="number" placeholder="Tiempo de espera" id="tiempo-espera" name="TiempoEspera" />
                <br/>
                <br/>
                <label for="FechaSiembra">Fecha siembra:</label>
                <input type="date" id="fecha-siembra" name="FechaSiembra"></input>
                <br/>
                <br/>
                <label for="FechaRecogida">Fecha Recogida:</label>
                <input type="date" id="fecha-recogida" name="FechaRecogida"></input>
                <br/>
                <br/>
                <button type="button" class="btn btn-primary">Asignar</button>
            </div>

            <Footer />
        </Container>
        </>
    )
}

export{AsignarArea};