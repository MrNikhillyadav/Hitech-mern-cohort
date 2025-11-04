import './navbar.css'
import { Link } from 'react-router-dom'

export function Navbar(){
    return (
        <div className="Navbar">
            <Link to={'/home'} >Home</Link>
            <Link to={'/contact'} >Contact</Link>
            <Link to={'/about'} >About</Link>
            <Link to={'/blog'} >Blog</Link>
            <Link to={'/todo'} >Todos</Link>
        </div>
    )
}