import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'

function Administrador(){
    return(
        <>
        
        <Container>
            <Header />

            <h3>Administrador</h3>
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

            <Footer />
        </Container>
        </>
    )
}

export{Administrador};