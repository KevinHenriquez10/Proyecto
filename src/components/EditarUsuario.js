import React from 'react';
import { Container } from 'reactstrap';

function EditarUsuario(){
    return(
        <>
        <h1>Editar Usuario</h1>
        <Container>
            <div className="div-editarUsuario">
                <label htmlFor="Nombre">Nombre: </label>
                <input type="text" placeholder="Nombre" id="form-registro-nombre" name="Nombre" />
                <br/>
                <br/>
                <label for="Apellidos">Apéllido: </label>
                <input type="text" placeholder="Apellidos" id="form-registro-apellidos" name="Apellidos" />
                <br/>
                <br/>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Tipo de Documento</option>
                    <option value="1">C.C</option>
                    <option value="2">C.E</option>
                    <option value="3">NIT</option>
                </select>
                <br/>
                <br/>
                <label for="Documento">Número de Documento: </label>
                <input type="number" placeholder="Número de Documento" id="form-registro-documento" name="Documento" />
                <br/>
                <br/>
                <label for="Correo">Correo: </label>
                <input type="email" placeholder="Correo" id="form-registro-correo" name="Correo" />
                <br/>
                <br/>
                <label for="Telefono">Teléfono: </label>
                <input type="number" placeholder="Telefono" id="form-registro-telefono" name="Telefono" />
                <br/>
                <br/>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Rol</option>
                    <option value="1">Administrador</option>
                    <option value="2">Usuario Configuración</option>
                    <option value="3">Usuario Gestión</option>
                </select>
                <br/>
                <br/>
                <button type="button" class="btn btn-primary">Actualizar</button>
            </div>
        </Container>
        </>
    )
}

export {EditarUsuario};