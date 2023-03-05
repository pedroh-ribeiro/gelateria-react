import React from "react";
import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import 'C:/Users/ribei/VSCode/DevMedia/Gelateria/src/Paginas/Sabores/estilo.css'


export default function Sabores() {
    return (
        <main>
            <Header />
            <main>
                <section className="secao-banner-sabores">
                    <div className="container banner-sabores">
                        <h1>NOSSOS SABORES</h1>
                    </div>
                </section>

                <section className="container secao-sabores">
                    <h2 className="titulo-sabores">SABORES DE SORVETE</h2>
                    <div className="container secao-cards">
                        
                        <div className="card">
                            <img src="../assets/sabor-oreo.png"></img>
                            <div className="texto-card">
                                <h3>Sorvete de Oreo</h3>
                                <p>Um delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                            </div>
                        </div>
                        
                        <div className="card">
                            <img src="../assets/sabor-pistache.png"></img>
                            <div className="texto-card">
                                <h3>Sorvete Pistache</h3>
                                <p>Cremoso sorvete sabor pistache com pedacinhos de semente</p>
                            </div>
                        </div>
                        
                        <div className="card">
                            <img src="../assets/sabor-cookies-avela.png"></img>
                            <div className="texto-card">
                                <h3>Sorvete Cookies & Avelã</h3>
                                <p>O nosso melhor sorvete. Você vai adorar o sabor</p>
                            </div>
                        </div>
                        
                        <div className="card">
                            <img src="../assets/sorbet-kiwi.png"></img>
                            <div className="texto-card">
                                <h3>Sorvete de Kiwi</h3>
                                <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                            </div>
                        </div>
                        
                        <div className="card">
                            <img src="../assets/sorbet-morango.png"></img>
                            <div className="texto-card">
                                <h3>Sorvete de Morango</h3>
                                <p>Sorvete de morango gourmet, tradicional e saboroso</p>
                            </div>
                        </div>
                        
                        <div className="card">
                            <img src="../assets/sorbet-limao.png"></img>
                            <div className="texto-card">
                                <h3>Sorvete de Limão Sisciliano</h3>
                                <p>O incrível sorvete gourmet de limão sisciliano vai te encantar</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </main>
    )
}