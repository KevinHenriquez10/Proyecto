import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'

function CultivosAsignados(){
    return(
        <>
        <Container>
            <Header />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Área m2</th>
                        <th scope="col">Fecha siembra</th>
                        <th scope="col">Fecha recolección</th>
                        <th scope="col">Asignado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1008</th>
                        <td>Cereal</td>
                        <td>Arroz</td>
                        <td>3000</td>
                        <td>12/10/2021</td>
                        <td>12/01/2022</td>
                        <td>Juan Pérez</td>
                    </tr>
                    <tr>
                        <th scope="row">-</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th scope="row">-</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th scope="row">-</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th scope="row">-</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th scope="row">-</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            <Footer />
        </Container>
        </>
    )
}

export {CultivosAsignados};