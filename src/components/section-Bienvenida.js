import React from 'react';
import caucho from '../assets/img/caucho.jpg'
import forraje from '../assets/img/forraje.jpg'
import oleoginoso from '../assets/img/oleoginoso.jpg'
import alimentario from '../assets/img/alimentario.jpg'

function Bienvenida(){
    return (
        <>
        <div className="div-texto1">
            Bienvenidos!
        </div>
        <div className="div-textoBienvenida">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."        
        </div>
        <div className="div-textoBienvenida">
            <img src={oleoginoso} alt="" style={{width: "45%", marginRight: "15px", height: "150px", marginTop: "50px"}}/>
            <img src={alimentario} alt="" style={{width: "45%", marginRight: "15px", height: "150px", marginTop: "50px"}}/>
            <img src={caucho} alt="" style={{width: "45%", marginRight: "15px", height: "150px", marginTop: "50px"}}/>
            <img src={forraje} alt="" style={{width: "45%", marginRight: "15px", height: "150px", marginTop: "50px"}}/>
        </div>
        </>
    )
}export {Bienvenida}