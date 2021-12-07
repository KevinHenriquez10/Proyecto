import { Header } from "./header";
import { Footer } from "./footer";
import { Login } from "./login";
import { Bienvenida } from "./section-Bienvenida";
import { Container } from "reactstrap";
import {Link} from 'react-router-dom';

function Home() {
    return (
        <>
        <Container>
        <Header />
        <hr></hr>
        <Link to="/administrador"> Administrador |</Link>
        <Link to="/usuarioConfiguracion/registro"> Usuario de Configuración |</Link>
        <Link to="/usuarioGestion/asignarArea"> Usuario de Gestión</Link> 
        <div className="div-front">
        <Login />
        <Bienvenida />        
        </div>
        <Footer />
        </Container>
        </>
    );
}export {Home};