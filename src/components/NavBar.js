import { Link, NavLink } from "react-router-dom";

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
                <ul className="navbar-nav ml-auto ">
                    
                    <span className="nav-item nav-link tet-info">
                        
                    </span>

                    <span
                        className="nav-item nav-link btn"
                    >
                        
                    </span>
                </ul>
            </div>
        </nav>

    )
}
