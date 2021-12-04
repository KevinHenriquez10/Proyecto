import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'

function ConfiguracionPredio(){
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

            <div><h4>Configuración de predio</h4></div><br/>

            <div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Área asignada</th>
                        <th scope="col">Configuraciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">108</th>
                            <td>Cereal</td>
                            <td>Arroz</td>
                            <td>204 m<sup>2</sup></td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-primary" style={{marginRight: "15px",  borderRadius: "5px"}} >Editar</button>
                                    <button type="button" class="btn btn-primary" style={{borderRadius: "5px"}}>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">209</th>
                            <td>Fruta</td>
                            <td>Platano</td>
                            <td>206 m<sup>2</sup></td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-primary" style={{marginRight: "15px",  borderRadius: "5px"}} >Editar</button>
                                    <button type="button" class="btn btn-primary" style={{borderRadius: "5px"}}>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div><hr/>

            <Container>
                <label for="IdCultivo">Id cultivo: </label>
                <input type="number" id="id-cultivo" name="IdCultivo"  />
                <br/>
                <br/>
                <label htmlFor="TipoCultivo">Tipo de cultivo: </label>
                <input type="text" id="tipo-cultivo" name="TipoCultivo" />
                <br/>
                <br/>
                <label htmlFor="Producto">Producto: </label>
                <input type="text" id="producto" name="Producto" />
                <br/>
                <br/>
                <label for="AreaAsignada">Área asignada (m<sup>2</sup>): </label>
                <input type="number" id="area-asignada" name="AreaAsignada" />
                <br/>
                <br/>
                <label for="CantidadSemilla">Cantidad de semilla (kg): </label>
                <input type="number" id="cantidad-semilla" name="CantidadSemilla" />
                <br/>
                <br/>
                <label for="TiempoCultivo">Tiempo del cultivo (en semanas): </label>
                <input type="number" id="tiempo-cultivo" name="TiempoCultivo" />
                <br/>
                <br/>
                <label for="CantidadAgua">Cantidad de agua (m<sup>3</sup>): </label>
                <input type="number" id="cantidad-agua" name="CantidadAgua" />
                <br/>
                <br/>
                <label for="CantidaFertilizante">Cantidad de fertilizante por hectarea (kg): </label>
                <input type="number" id="cantidad-fertilizante" name="CantidadFertilizante" />
                <br/>
                <br/>
                <label for="KgRecogido">Kilogramos recogidos: </label>
                <input type="number" id="kg-recogido" name="KgRecogido" />
                <br/>
                <br/>
                <label for="TiempoEspera">Tiempo de espera (en semanas): </label>
                <input type="number" id="tiempo-espera" name="TiempoEspera" />
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
                <button type="button" class="btn btn-primary">Guardar cambios</button>
                <button type="button" class="btn btn-primary">Cancelar</button>
            </Container>

            <Footer />
        </Container>
        </>
    )
}

export{ConfiguracionPredio};