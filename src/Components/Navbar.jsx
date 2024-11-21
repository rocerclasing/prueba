import { Link } from "react-router-dom";
import Icon from "../assets/img/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar" style={{ backgroundColor: '#20d397', width: '100%', padding: '10px 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                {/* Contenedor para el logo y "Dogos" */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Icono */}
                    <img src={Icon} alt="Logo" style={{ width: '30px', height: '30px', marginRight: '5px' }} /> {/* Ajusta el tamaño del ícono */}
                    
                    {/* span "dogos" al lado del ícono */}
                    <span style={{ color: 'white', fontSize: '5px', fontWeight: 'bold' }}>
                        Dogos
                    </span>
                </div>
                
                {/* Links de navegación */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Link to="/" className="btn" style={{ color: 'white', fontSize: '16px', lineHeight: '1.44', marginRight: '15px' }}>
                        Adopt
                    </Link>
                    <Link to="/logout" className="btn" style={{ color: 'white', fontSize: '16px', lineHeight: '1.44', marginRight: '15px' }}>
                        Logout
                    </Link>
                    <Link to="/OurPets" className="btn" style={{ color: 'white', fontSize: '16px', lineHeight: '1.44' }}>
                        OurPets
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
