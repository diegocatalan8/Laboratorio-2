import "./Header.css";
import { Link } from "wouter";
export default function Header(props) {
    return (
        <header className="header-app">
            <div className="container-title">
                <h1>Restaurante UMG</h1>
            </div>
            <nav className="nav-app">
                <ul>
                    <Link to="/"><li >Entradas</li></Link>
                    <Link to="/Principales"><li  >Platos Principales</li></Link>
                    <li onClick={()=>{props.setClase(false)}}>Ensaladas</li>
                </ul>
            </nav>
        </header>
    );
}