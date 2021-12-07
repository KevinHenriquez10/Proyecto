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
        <Link to="/usuarios">Usuarios |</Link>
        <Link to="/administrador/registro"> Registro |</Link>
        <Link to="/crearCultivo"> Crear Cultivos |</Link>
        <Link to="/cultivos"> Ver Cultivos |</Link>
        <div className="div-front">
        <Login />
        <Bienvenida />        
        </div>
        <Footer />
        </Container>
        </>
    );
}export {Home};