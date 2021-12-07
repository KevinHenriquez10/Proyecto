import React from 'react';
import {Header} from '../components/header';
import {Footer} from '../components/footer';
import {Container} from 'reactstrap';

function VerUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    return(
        <>
        <Container>
            <Header />
            <hr></hr>
        <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Rol</th>
                <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map( (p) => <tr>
                    <td>{p.Nombre}</td>
                    <td>{p.Rol}</td>
                    <td><button type="button" class="btn btn-primary" style={{marginRight: "15px",  borderRadius: "5px"}} >Editar</button>
                    <button type="button" class="btn btn-primary" style={{borderRadius: "5px"}}>Eliminar</button></td>
                    </tr>)}
                </tbody>
            </table>
            <Footer />
            </Container>
        </>
    );
}

export {VerUsuarios};