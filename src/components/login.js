import React from 'react';

function Login (){
    return(
        <div className="div-login">
            <div class="shadow p-3 mb-5 bg-body rounded">
            Iniciar Sesión
            <form>
                <div class="form-floating mb-3" style={{paddingLeft: "15px", paddingRight: "15px"}}>
                <input type="text" class="form-control" id="usuario" placeholder="name@example.com"/>
                <label for="usuario" style={{paddingLeft: "25px"}}>Usuario</label>
                </div>
                <div class="form-floating" style={{paddingLeft: "15px", paddingRight: "15px"}}>
                <input type="password" class="form-control" id="password" placeholder="Password"/>
                <label for="password" style={{paddingLeft: "25px"}}>Password</label>
                <button type="button" class="btn btn-primary" style={{ float: 'left', marginTop: '15px', marginRight: '15px',  width: '100%'}}>Ingresar</button>
                <button type="button" class="btn btn-primary" style={{ marginTop: '15px', width: '100%'}}>Registrate</button>
                <br></br>
                <p style={{marginTop: '20px'}}>Olvidaste tu contraseña?</p>
                </div>
            </form>
            </div>
        </div>
    )
} export {Login}