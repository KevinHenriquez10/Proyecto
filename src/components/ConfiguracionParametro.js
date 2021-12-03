import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'

function ConfiguracionParametro(){
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

            <div><h4>Configuración de parámetros</h4></div><br/>
            <div>
                <label for="ValorAgua">Valor metro de agua: </label>
                $<input type="number" placeholder="Valor metro de agua" id="valor-agua" name="ValorAgua" />
                <br/>
                <br/>
                <label for="Semilla">Semilla: </label>
                <select  aria-label="Default select example">
                    <option selected>Seleccione semilla</option>
                    <option value="1">Arroz</option>
                    <option value="2">Maíz</option>
                    <option value="2">Trigo</option>
                </select>
                <br/>
                <br/>
                <label for="ValorSemilla">Valor semilla: </label>
                $<input type="number" placeholder="Valor semilla" id="valor-semilla" name="ValorSemilla" />
                <br/>
                <br/>
                <label for="Fertilizante">Fertilizante: </label>
                <select  aria-label="Default select example">
                    <option selected>Seleccione fertilizante</option>
                    <option value="1">NITRAX-S 28-4-0-6S</option>
                    <option value="2">TRIPLE 15-15-15</option>
                    <option value="2">NPK 10-30-10</option>
                </select>
                <br/>
                <br/>
                <label for="ValorFertilizante">Valor fertilizante: </label>
                $<input type="number" placeholder="Valor fertilizante" id="valor-fertilizante" name="ValorFertilizante" />
                <br/>
                <br/>
                <button type="button" class="btn btn-primary">Guardar</button>
                <button type="button" class="btn btn-primary">Limpiar</button>
                <button type="button" class="btn btn-primary">Cancelar</button>

            </div>    

            <Footer />
        </Container>
        </>
    )

}
export{ConfiguracionParametro};