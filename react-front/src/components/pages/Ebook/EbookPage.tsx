import React from 'react'
import HotmartButton from '../../molecules/HotmartButton/HotmartButton'
import Header from '../../organisms/Header/Header'
import ContentTemplate from '../../templates/ContentTemplate'

import "./EbookPage.sass"

const EbookPage = function({}){
  return (
    <>
      <Header/>
      <div className="ebook-content">

        <h1 className="ebook-title">Ebook OpenGL</h1>
        <img className="ebook-cover" src="/cover.png"></img>

        <div className="ebook-text">
          <p>
            Olá programador, se você conhece o blog já sabe um pouco sobre mim e o que eu curto fazer,
            pra quem ainda não conhece eu sou um desenvolvedor freelancer, trabalho com desenvolvimento web
            e crio games por hobbie, tenho dois games lançados na playstore você pode conferir eles aqui <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/developer?id=Crack+It+Games">PlayStore</a>.
          </p>

          <p>Esta é a minha página de sobre: <a target="_blank" rel="noopener noreferrer" href="/about">Sobre</a>.</p>

          <p>
            Este Ebook ensina programação com OpenGL, totalmente focado na prática, ao mesmo tempo que codifica shaders e objetos 3D ele
            te ensina com boas explicações o como e o porque das coisas, e o que foge à prática é referênciado por links no final do livro.

            Este Ebook é para programadores que curtem games ou gostam de computação gráfica, ele te da o ponta pé inicial para começar a programar
            aplicações 2D e 3D incríveis, o seu conteúdo inclui:

            <ol>
              <li>Programação de shaders</li>
              <li>Texturas 2D</li>
              <li>Programação 2D e 3D</li>
              <li>Transformações e Projeções</li>
              <li>Animações com transformações</li>
              <li>Etc.</li>
            </ol>

            O Ebook ainda <span style={ { color: "orange" } }>conta com projetos que você pode baixar para acompanhar, testar e praticar junto. Também inclui o projeto de um jogo 2D para que
            você tenha uma referência de como é criar um game simples usando C++ e OpenGL.</span>

          </p>
          <p>
            Se você é um programador e já pensou em criar jogos, você que não gosta da idéia de depender de engines e curte fazer tudo do zero, aprender OpenGL é quase um requisito,
            ela é <span style={ { color: "orange" } }>uma das API's mais usadas na criação de games hoje em dia, tanto para desktop, mobile e até web!</span> sua maior concorrente é o DirectX da Microsoft. Este ebook te ensina na
            prática e sem muita enrolação como usar as funções OpenGL para dar vida às suas ideias.
          </p>
        </div>

        <h2 className="ebook-button-text">Se este ebook te interessa clique no botão para compra-lo!</h2>
        <h4 className="ebook-button-text">Você tem até 7 dias para devolução</h4>
        <HotmartButton link="https://pay.hotmart.com/P45286896T?checkoutMode=10&bid=1609697548141" text="Comprar Agora" />

      </div>
    </>
  );
}

export default EbookPage;