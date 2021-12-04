import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'

function Costos(){
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

            <div><h4>Costos</h4></div><br/>

            <div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">Id</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Área asignada</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Semilla</th>
                        <th scope="col">Fertilizante</th>
                        <th scope="col">Agua</th>
                        <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>      
                                </div>
                            </td>
                            <th scope="row">108</th>
                            <td>Cereal</td>
                            <td>Arroz</td>
                            <td>204 m<sup>2</sup></td>
                            <td>208000</td>
                            <td>102000</td>
                            <td>30000</td>
                            <td>340000</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>      
                                </div>
                            </td>
                            <th scope="row">209</th>
                            <td>Fruta</td>
                            <td>Platano</td>
                            <td>206 m<sup>2</sup></td>
                            <td>500000</td>
                            <td>300000</td>
                            <td>100000</td>
                            <td>900000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div><button type="button" class="btn btn-primary">Detalle</button></div><hr/>

            <Container>
                <label for="CantidadSemilla">Cantidad de semilla (kg): </label>
                <input type="number" id="cantidad-semilla" name="CantidadSemilla" />
                <br/>
                <br/>
                <label for="ValorSemilla">Valor semilla: </label>
                $<input type="number" id="valor-semilla" name="ValorSemilla" />
                <br/>
                <br/>
                <label for="CantidaFertilizante">Cantidad fertilizante (kg): </label>
                <input type="number" id="cantidad-fertilizante" name="CantidadFertilizante" />
                <br/>
                <br/>
                <label for="ValorUnitario">Valor unitario: </label>
                $<input type="number" id="valor-unitario" name="ValorUnitario" />
                <br/>
                <br/>
                <label for="ValorAgua">Valor m<sup>3</sup> de agua: </label>
                $<input type="number" id="valor-agua" name="ValorAgua" />
                <br/>
                <br/>
                <label for="Cantidad">Cantidad: </label>
                <input type="number" id="cantidad" name="Cantidad" />
                <br/>
                <br/>

                <div>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">Semilla</th>
                            <th scope="col">Fertilizante</th>
                            <th scope="col">Agua</th>
                            <th scope="col">Total costo siembra</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </Container>

            <Footer />
        </Container>
        </>
    )
}

export{Costos}