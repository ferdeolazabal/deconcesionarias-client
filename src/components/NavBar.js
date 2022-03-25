import { Link } from 'react-router-dom'

export const NavBar = () => {

    return (
    
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                deConcesionarias
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                </div>
            </div>
        
            <div className="d-flex">
            <Link 
                className="navbar-brand" 
                to="/PropertiesEdit"
            >
                Editar Propiedades
            </Link>
                
            </div>
        </nav>

    )
}
