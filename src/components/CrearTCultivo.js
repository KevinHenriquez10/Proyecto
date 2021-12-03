import React from 'react';
import { Container } from 'reactstrap';

function CrearTCultivo(){
    return(
        <>
        <h3>Usuario de configuración</h3>
        <Container>
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

            <div><h4>Crear tipo de cultivo</h4></div><br/>
            <div className="div-crearTipoCultivo">
                <label for="AreaDestinada">Área destinada:</label>
                <input type="number" placeholder="Área destinada" id="area-destinada" name="AreaDestinada" />
                <br/>
                <br/>
                <label for="CatidadSemilla">Cantidad semilla por hectarea: </label>
                <input type="number" placeholder="Cantidad semilla por hectarea" id="cantidad-semilla" name="CatidadSemilla" />
                <br/>
                <br/>
                <label for="TiempoCultivo">Tiempo del cultivo (en semanas): </label>
                <input type="number" placeholder="Tiempo del cultivo" id="tiempo-cultivo" name="TiempoCultivo" />
                <br/>
                <br/>
                <label for="CantidadAgua">Cantidad de agua(metros cubicos): </label>
                <input type="number" placeholder="Cantidad de agua" id="cantidad-agua" name="CantidadAgua" />
                <br/>
                <br/>
                <label for="KilogramoFertilizante">kilogramo de fertilizante por hectarea: </label>
                <input type="number" placeholder="kilogramo de fertilizante por hectarea" id="kilogramo-fertilizante" name="KilogramoFertilizante" />
                <br/>
                <br/>
                <label for="TiempoRecoleccion">Tiempo de recolección(en meses): </label>
                <input type="number" placeholder="Tiempo de recolección" id="tiempo-recoleccion" name="TiempoRecoleccion" />
                <br/>
                <br/>
                <label for="KilogramoRecolectado">kilogramo recolectado por hectarea: </label>
                <input type="number" placeholder="kilogramo recolectado por hectarea" id="kilogramo-recolectado" name="KilogramoRecolectado" />
                <br/>
                <br/>
                <button type="button" class="btn btn-primary">Crear</button>
                <button type="button" class="btn btn-primary">Ver cultivos</button>
                <button type="button" class="btn btn-primary">Cancelar</button>
            </div>
        </Container>
        </>
    )
}

export{CrearTCultivo};