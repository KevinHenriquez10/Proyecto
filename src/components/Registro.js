import React from 'react';
import { Container } from 'reactstrap';

function Registro () {
    return (
        <>  
        <Container>
            <div className="div-texto1">
               Registro
            </div>
            <div className="div-registro">
                <label htmlFor="Nombre">Nombre: </label>
                <input type="text" placeholder="Nombre" id="form-registro-nombre" name="Nombre" />
                <br/>
                <br/>
                <label for="Apellido">Apéllido: </label>
                <input type="text" placeholder="Apellido" id="form-registro-apellido" name="Apellido" />
                <br/>
                <br/>
                <label for="Correo">Correo: </label>
                <input type="email" placeholder="Correo" id="form-registro-correo" name="Correo" />
                <br/>
                <br/>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Tipo de Documento</option>
                    <option value="1">C.C</option>
                    <option value="2">C.E</option>
                    <option value="3">T.I</option>
                    <option value="4">NIT</option>
                </select>
                <br/>
                <br/>
                <label for="Documento">Documento: </label>
                <input type="number" placeholder="Documento" id="form-registro-documento" name="Documento" />
                <br/>
                <br/>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Sexo</option>
                    <option value="1">Hombre</option>
                    <option value="2">Mujer</option>
                </select>
            </div>
        </Container>
        </>
    );
}

export {Registro};