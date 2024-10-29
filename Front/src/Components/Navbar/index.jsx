import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'


function Navbar() {

    const routes = [{ path: "/", label: "Liste des persos" }, { path: "/characComparator", label: "Comparateur" }, { path: "/characInfos", label: "Infos perso" }]
    return (
        <div className='navContainer'>
            {routes.map((route) => (
                <Link key={route.path} className='navLink' to={route.path}>{route.label}</Link>
            ))}
        </div>
    )
}

export default Navbar