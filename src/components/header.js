import React from 'react';
import icono from '../assets/img/icono.png'

function Header () {
    return (
    <>
    <header>
        <div className="div-Header">
            <img src={icono} alt="" width="34px" height= "30px" />
        El Redil S.A.S
        </div>
    </header>
    </>
    )}

export { Header }