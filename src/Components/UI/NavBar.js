import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {


    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
               <a 
                className="navbar-brand"
                href='http://montucuy.org/'
               >
                   <img className='logoBarra' src='./assets/logo_principal.png' alt='logo'></img>
                </a>
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Eventos
                </Link>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    

                    <NavLink 
                        className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                        
                        to="/login"
                    >
                        Login
                    </NavLink>
                   
                    
                </div>
                </div>
            </div>
        </nav>
       
    )
}