import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'
import {Link} from 'react-router-dom';

function Administrador(){
    return(
        <>
        <Container>
            <Header />
            <div class="container-fluid px-4">
                    <h2 class="mt-4">Administrador</h2>
                    <ol class="breadcrumb mb-4">
                        
                    </ol>
                    <div class="row">
                    <div class="col-xl-3 col-md-6">
                            <div class="card bg-success text-white mb-4">
                                <div class="card-body">Ver Usuarios</div>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <a class="small text-white stretched-link" href="/editarLote"></a>
                                    <div class="small text-white"><svg class="svg-inline--fa fa-angle-right fa-w-8"
                                            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                                            data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6">
                            <div class="card bg-success text-white mb-4">
                                <div class="card-body">Registrar Usuarios</div>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <a class="small text-white stretched-link" href="/editarLote"></a>
                                    <div class="small text-white"><svg class="svg-inline--fa fa-angle-right fa-w-8"
                                            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                                            data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6">
                            <div class="card bg-success text-white mb-4">
                                <div class="card-body">Crear Tipo de Cultivo</div>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <a class="small text-white stretched-link" href="/editarLote"></a>
                                    <div class="small text-white"><svg class="svg-inline--fa fa-angle-right fa-w-8"
                                            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                                            data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6">
                            <div class="card bg-success text-white mb-4">
                                <div class="card-body">Registrar Cultivos</div>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <a class="small text-white stretched-link" href="/editarLote"></a>
                                    <div class="small text-white"><svg class="svg-inline--fa fa-angle-right fa-w-8"
                                            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                                            data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6">
                            <div class="card bg-success text-white mb-4">
                                <div class="card-body">Asignar Cultivo</div>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <a class="small text-white stretched-link" href="/editarLote"></a>
                                    <div class="small text-white"><svg class="svg-inline--fa fa-angle-right fa-w-8"
                                            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                                            data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6">
                            <div class="card bg-success text-white mb-4">
                                <div class="card-body">Configurar Parámetros</div>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <a class="small text-white stretched-link" href="/editarLote"></a>
                                    <div class="small text-white"><svg class="svg-inline--fa fa-angle-right fa-w-8"
                                            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                                            data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6">
                            <div class="card bg-success text-white mb-4">
                                <div class="card-body">Ver Cultivos</div>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <a class="small text-white stretched-link" href="/editarLote"></a>
                                    <div class="small text-white"><svg class="svg-inline--fa fa-angle-right fa-w-8"
                                            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                                            data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6">
                            <div class="card bg-success text-white mb-4">
                                <div class="card-body">Asignar Predio</div>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <a class="small text-white stretched-link" href="/editarLote"></a>
                                    <div class="small text-white"><svg class="svg-inline--fa fa-angle-right fa-w-8"
                                            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                                            data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6">
                            <div class="card bg-success text-white mb-4">
                                <div class="card-body">Configurar Predio</div>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <a class="small text-white stretched-link" href="/editarLote"></a>
                                    <div class="small text-white"><svg class="svg-inline--fa fa-angle-right fa-w-8"
                                            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                                            data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6">
                            <div class="card bg-success text-white mb-4">
                                <div class="card-body">Conocer Costos</div>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <a class="small text-white stretched-link" href="/editarLote"></a>
                                    <div class="small text-white"><svg class="svg-inline--fa fa-angle-right fa-w-8"
                                            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                                            data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6">
                            <div class="card bg-success text-white mb-4">
                                <div class="card-body">Recolección de Cultivos</div>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <a class="small text-white stretched-link" href="/editarLote"></a>
                                    <div class="small text-white"><svg class="svg-inline--fa fa-angle-right fa-w-8"
                                            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                                            data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            <Footer />
        </Container>
        </>
    )
}

export{Administrador};