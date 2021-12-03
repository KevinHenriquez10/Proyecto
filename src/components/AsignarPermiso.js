import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'

function AsignarPermiso(){
    return(
        <>
        <h3>Registro usuario</h3>
        <Container>
            <Header />

            <div><h4>Asignar permisos</h4></div><br/>
            <div>
                <label for="Buscar">Permisos: </label><br/>
                <select  aria-label="Default select example">
                    <option selected>Seleccione permiso</option>
                    <option value="1">Super Administrador</option>
                    <option value="2">Administrador</option>
                    <option value="2">Usuario</option>
                </select>
                <br/>
                <br/>
                <button type="button" class="btn btn-primary">Crear usuario</button>
                
            </div>

            <Footer />
        </Container>
        </>
    )
}

export{AsignarPermiso};