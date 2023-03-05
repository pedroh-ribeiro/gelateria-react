import React from "react";
import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import './estilo.css'

export default function Sobre() {
    return (
        <main>

            <Header />

            <section className="secao-banner-sobre">
                <div className="container banner-sobre">
                    <h1>A GELATERIA</h1>
                </div>
            </section>

            <section className="container texto-sobre">
                <h2>Sobre Nós</h2>
                <span className="span">Nós simplesmente amamos sorvete!</span>
                <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresáriais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
            </section>

            <section className="lado-a-lado">
                <div className="metade-imagem">
                    <img src="./assets/sobre-image.jpg"></img>
                </div>
                <div className="metade-imagem">
                    <img src="./assets/sorveteria.jpg"></img>
                </div>
            </section>

            <Footer />
        </main>
    )
}