import React from 'react'
import './index.scss'
import { Link, useLocation } from 'react-router-dom'


function Navbar() {

    const location = useLocation()

    const routes = [{ path: "/", label: "Liste des persos" }, { path: "/characComparator", label: "Comparateur" }, { path: "/characInfos", label: "Infos perso" }]
    return (
        <div className='navContainer'>
            {routes.map((route) => (
                <Link style={{ backgroundColor: route.path == location.pathname && "white", color: route.path == location.pathname && 'black' }} key={route.path} className='navLink' to={route.path}>{route.label}</Link>
            ))}
        </div>
    )
}

export default Navbar