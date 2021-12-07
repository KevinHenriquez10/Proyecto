import React, {useState, useRef} from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header';
import {Footer} from '../components/footer';
import {Link} from 'react-router-dom';


function CrearTCultivo(){
    
        let cultivos=[];
        const areaDest = useRef();
        const canSem = useRef();
        const tCultivo = useRef();
        const canAgua = useRef();
        const canFert = useRef();
        const tReco = useRef();
        const canReco = useRef();
        const tipCultivo = useRef();
        const [success, setSuccess] = useState();
        const guardarCultivo = () => {
            const tipoCultivo = tipCultivo.current.value;
            const area = areaDest.current.value;
            const canSemillas = canSem.current.value;
            const tiempoCultivo = tCultivo.current.value;
            const cantAgua = canAgua.current.value;
            const cantFertilizante = canFert.current.value;
            const tiempoRecoleccion = tReco.current.value;
            const cantRecoleccion = canReco.current.value;
            const cultivo = {
                "Área": area,
                "Cantidad_Semillas": canSemillas,
                "Tiempo_de_Cultivo": tiempoCultivo,
                "Cantidad_Agua": cantAgua,
                "Cantidad_Fertilizante": cantFertilizante,
                "Tiempo_Recoleccion": tiempoRecoleccion,
                "Cantidad_Recoleccion": cantRecoleccion,
                "Tipo_Cultivo": tipoCultivo
            }
            cultivos = JSON.parse(localStorage.getItem("listaCultivos")) || [];
            cultivos.push(cultivo);
            localStorage.setItem("listaCultivos", JSON.stringify(cultivos));
            areaDest.current.value="";
            canSem.current.value="";
            tCultivo.current.value="";
            canAgua.current.value="";
            canFert.current.value="";
            tReco.current.value="";
            canReco.current.value="";
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        };
    return(
        <>
        {success && <div className="alert alert-success" role="alert">
            Guardado con exito
        </div>}
        <Container>
            <Header />
            <hr></hr>
            <h3>Usuario de configuración</h3>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <a class="nav-link" href="/">Inicio</a>
                                    <a class="nav-link" href="/usuarioConfiguracion/registro">Registro</a>
                                    <a class="nav-link" href="/usuarioConfiguracion/asignacionPredio">Asignación</a>
                                    <a class="nav-link" href="/usuarioConfiguracion/crearCultivo">Crear tipo cultivo</a>
                                    <a class="nav-link" href="/usuarioConfiguracion/parametro">Configuración de parámetros</a>  
                                </div>
                            </div>
                        </div>
                </nav>
            </div>

            <Container>
        <div className="layoutAuthentication">
                        <div id="layoutAuthentication_content">
                            <main>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-7">
                                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Crear Tipo de Cultivo</h3></div>
                                                <div class="card-body">
                                                    <form>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="text" placeholder="Ingrese el area destinada" ref={areaDest}/>
                                                                    <label for="inputArea1">Área Destinada</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="apellidoUsuario" type="text" placeholder="Ingrese el apellido del usuario" ref={canSem} />
                                                                    <label for="inputNombre">Cantidad de Semilla por Hectarea</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="text" placeholder="Ingrese el area destinada" ref ={tCultivo}/>
                                                                    <label for="inputArea1">Tiempo del Cultivo (semanas)</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="apellidoUsuario" type="number" placeholder="Ingrese el apellido del usuario" ref={canAgua} />
                                                                    <label for="inputNombre">Cantidad de Agua (m<sup>3</sup>)</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="number" placeholder="Ingrese el area destinada" ref={canFert} />
                                                                    <label for="inputArea1">Kg de Fertilizante por Hectarea</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="apellidoUsuario" type="text" placeholder="Ingrese el apellido del usuario" ref={tReco} />
                                                                    <label for="inputNombre">Tiempo de Recolección (meses)</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="number" placeholder="Ingrese el area destinada" ref={canReco} />
                                                                    <label for="inputArea1">Kg de Recolectado por Hectarea</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="areaDestinada" type="text" placeholder="Ingrese el area destinada" ref={tipCultivo}/>
                                                                    <label for="inputArea1">Tipo de Cultivo</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Container>
                                                        <div class="btn-group" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-primary" style={{marginRight: "15px",  borderRadius: "5px",}} onClick={guardarCultivo} >Crear</button>
                                                            <Link to="/cultivos">
                                                            <button type="button" class="btn btn-primary" style={{marginRight: "15px",  borderRadius: "5px"}}>Ver Cultivos</button>
                                                            </Link>
                                                            <button type="button" class="btn btn-primary" style={{borderRadius: "5px"}}>Cancelar</button>
                                                        </div>
                                                        </Container>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    
        </Container>
            <Footer />
        </Container>
        </>
    )
}

export{CrearTCultivo};