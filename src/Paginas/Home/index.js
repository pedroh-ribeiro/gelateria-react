import React from "react";
import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import '../Home/estilo.css'

export default function Home() {
    return (
        <main>
            <Header />
            
            <section className="secao-banner">
                <div className="container banner">
                    <h1>SORVETE ARTESANAL</h1>
                </div>
            </section>

            <section className="secao sabores">
                <img className="imagem-secao" src="../assets/banner-sabores.jpg"></img>
                <div className="metade">
                    <h2 className="texto">NOSSOS SABORES</h2>
                    <span className="texto">Novos e deliciosos!</span>
                    <p className="texto">Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar! Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                </div>
            </section>

            <section className="secao eventos">
                <div className="metade">
                    <h2 className="texto">NOSSOS EVENTOS</h2>
                    <span className="texto">Delícias com sorvete!</span>
                    <p className="texto">Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gnte.</p>

                </div>
                <img className="imagem-secao" src="../assets/eventos-image.jpg"></img>
            </section>
            
            <section className="secao sobre">
                <img className="imagem-secao" src="../assets/sobre-image.jpg"></img>
                <div className="metade">
                    <h2 className="texto">SOBRE NÓS</h2>
                    <span className="texto">Alegria em cada casquinha!</span>
                    <p className="texto">Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzinhdo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                </div>
            </section>

            <Footer />
        </main>
    )
}