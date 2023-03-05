import React from "react";
import './estilo.css'


export default function Footer() {
    return (
        <footer>
            <div className="container rodape">
                <div className="flex">
                    <div className="contatos">
                        <img className="logo-rodape" src="../assets/logo.png"></img>
                    </div>
                    <div className="contatos">
                        <h4>ENDEREÇO</h4>
                        <p>Av. Bernardino de Compor, 98</p>
                        <p>São Paulo, SP 12345-678</p>
                    </div>
                    
                    <div className="contatos">
                        <h4>CONTATO</h4>
                        <p>pedroh-ribeiro@outlook.com</p>
                        <p>Tel: (21) 12345-6789</p>
                    </div>
                    
                    <div className="contatos">
                        <h4>HORÁRIOS</h4>
                        <p>ABERTO TODOS OS DIAS</p>
                        <p>10:00 - 22:00</p>
                    </div>
                </div>

            </div>
            <p className="copy">Gelateria orgulhosamente desenvolvida por Pedro Ribeiro</p>
        </footer>
    )
}