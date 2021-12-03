import React from 'react';
import { Container } from 'reactstrap';

function Administrador(){
    return(
        <>
        <h3>Administrador</h3>
        <Container>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link" href="/">Ver Usuarios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Registrar usuarios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Ver cultivos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Crear tipo de cultivo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Registrar cultivo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Asignar cultivo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Configurar parámetros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Asignar predio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Configurar predio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Conocer costos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Recolección de cultivo</a>
                </li>
            </ul>
        </Container>
        </>
    )
}

export{Administrador};