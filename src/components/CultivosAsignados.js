import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header';
import {Footer} from '../components/footer';
import {Link} from 'react-router-dom';
function CultivosAsignados(){
    const cultivos = JSON.parse(localStorage.getItem("listaCultivos"));
    return(
        <>
        <Container>
            <Header />
            <hr></hr>
            <Link to="/">Home </Link>
            <h3>Cultivos Asignados</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Tipo</th>
                        <th scope="col">Área m2</th>
                        <th scope="col">Fecha Siembra</th>
                        <th scope="col">Fecha Recolección</th>
                    </tr>
                </thead>
                <tbody>
                {cultivos.map( (p) => <tr>
                    <td>{p.Tipo_Cultivo}</td>
                    <td>{p.Área}</td>
                    <td>{p.Tiempo_de_Cultivo}</td>
                    <td>{p.Tiempo_Recoleccion}</td>
                </tr>)}
                </tbody>
                
            </table>
            <Footer />
        </Container>
        </>
    )
}

export {CultivosAsignados};