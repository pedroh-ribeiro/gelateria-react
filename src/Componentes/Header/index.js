import React from "react";
import { Link } from "react-router-dom";
import './estilo.css'


export default function Header() {
    return (
        <header>
            <div className="container topo">
                <img className="logo" src="../assets/logo.png"></img>
                <nav className="menu-topo">
                    <Link className="link-topo" to="/">Home</Link>
                    <Link className="link-topo" to="/sabores">Sabores</Link>
                    <Link className="link-topo" to="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    )
}