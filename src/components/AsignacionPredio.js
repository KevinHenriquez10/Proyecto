import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'

function AsignacionPredio(){
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
            
            <div><h4>Asignación de predio</h4></div><br/>
                <div>
                    <label for="Buscar">Buscar: </label>
                    <select  aria-label="Default select example">
                        <option value="1">Código</option>
                        <option value="2">Nombre</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="text"  id="form-buscar" name="Buscar" />
                    <br/>
                    <br/>
                    <button type="button" class="btn btn-primary">Buscar</button>
                    <button type="button" class="btn btn-primary">Limpiar</button>
                </div>
        </Container>

        <Container>
            <div>
                <h6>Realizar asignación del predio</h6>
                <label for="Codigo">Código: </label>
                <input type="number" placeholder="Código" id="form-registro-codigo" name="Codigo" />
                <br/>
                <br/>
                <label htmlFor="NombrePredio">Nombre predio: </label>
                <input type="text" placeholder="Nombre predio" id="form-registro-nombrePredio" name="NombrePredio" />
                <br/>
                <br/>
            </div>
            <div>
                <label for="A">A: </label>
                <br/>
                <label htmlFor="Nombre">Nombre: </label>
                <input type="text" placeholder="Nombre" id="form-registro-nombre" name="Nombre" />
                <br/>
                <br/>
                <label for="Apellidos">Apellidos: </label>
                <input type="text" placeholder="Apellidos" id="form-registro-apellidos" name="Apellidos" />
                <br/>
                <br/>
                <label for="Documento">Id: </label>
                <input type="number" placeholder="Id" id="form-registro-id" name="Id" />
                <br/>
                <br/>
                <label for="Correo">Correo: </label>
                <input type="email" placeholder="Correo" id="form-registro-correo" name="Correo" />
                <br/>
                <br/>
                <label htmlFor="Direccion">Dirección: </label>
                <input type="text" placeholder="Dirección" id="form-registro-direccion" name="Direccion" />
                <br/>
                <br/>
                <button type="button" class="btn btn-primary">Asignar</button>
                <button type="button" class="btn btn-primary">Cancelar</button>
            </div>

            <Footer />
        </Container>
        </>
    )
}
export{AsignacionPredio};