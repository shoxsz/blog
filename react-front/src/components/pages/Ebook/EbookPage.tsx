import { Card } from '@material-ui/core'
import React from 'react'
import Div from '../../atoms/Div/Div'
import HotmartButton from '../../molecules/HotmartButton/HotmartButton'
import Header from '../../organisms/Header/Header'

import "./EbookPage.sass"

const EbookPage = function(props){

  return (
    <>
      <Header/>
        <div className="ebook-content">
        
        <Div className="ebook-title">
          <span>Ebook OpenGL na Prática</span>
        </Div>

        <Div className="ebook-title-imgs" display="flex">
          <Div><img className="ebook-title-imgs-ogl" src="ogl.png"/></Div>
          <Div><img className="ebook-title-imgs-cpp" src="cpp.svg"/></Div>
        </Div>

        <Div className="ebook-text">
          <Card className="ebook-card">

            <Div display="flex"><img width="64" src="bs.png"/></Div>
            
            <p>Você é programador e quer aprender a usar OpenGL, uma das API's gráficas mais usadas na indústria dos games, <span className="ebook-text-highlight">quer criar os seus próprios jogos do absoluto zero mas não sabe por onde começar</span>,
            pesquisa na internet e não acha nenhum tutorial que te ensine de verdade.
            </p>

            <p>Este ebook vai te ensinar OpenGL moderna sem enrolação, direto ao ponto, <span className="ebook-text-highlight">você vai aprender renderização de formas geométricas, programação de shaders, texturas, transformações, projeções,
            renderização 2D e 3D e mais!</span> Este ebook ainda disponibiliza diversos projetos que você possa praticar e acompanhar.
            </p>

            <p>Depois de ler e aprender com este ebook você vai estar capacitado para programar jogos 2D e até 3D, <span className="ebook-text-highlight">ele vai te
            dar o ponta pé inicial que você precisa para se tornar um programador de jogos melhor.</span>
            </p>
            
            <Div display="flex" justifyContent="flex-end"><img width="64" src="ek.png"/></Div>

          </Card>

          <Div className="ebook-call">
            <Div className="ebook-call-list">
              <h3>Aprenda OpenGL</h3>
              <ul className="ebook-list">
                <li>Programação 2D</li>
                <li>Programação 3D</li>
                <li>Programação de Shaders</li>
                <li>Transformações e projeções</li>
                <li>Vários projetos para praticar</li>
              </ul>
            </Div>
            <Div className="ebook-cover">
              <img src="cover.png"/>
            </Div>
          </Div>

          <h2 className="ebook-button-text">Clique no botão e compre agora!</h2>
          <h2 className="ebook-button-text ebook-offer">de <span className="ebook-price">R$40</span> por apenas R$27!</h2>
          <h4 className="ebook-button-text">Você tem até 7 dias para devolução</h4>
          <Div className="ebook-button">
            <HotmartButton link="https://pay.hotmart.com/P45286896T?checkoutMode=10&bid=1609697548141" text="Comprar Agora" />
          </Div>

          <Div width="100%" height="1px" backgroundColor="black" mt="16px" mb="16px"/>
        </Div>

        <Div className="ebook-examples">

          <h1>O que você também pode fazer</h1>

          <Div className="ebook-iframe">
            <h3>Clone do Flappy Bird</h3>
            <iframe src="https://giphy.com/embed/U3QYVH7oCOcncFARmQ" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          </Div>

          <Div className="ebook-iframe">
            <h3>Dimension M - Jogo para Android</h3>
            <iframe src="https://www.youtube.com/embed/vQe_VKpuW-I" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </Div>

          <Div className="ebook-iframe">
            <h3>Modelo 3D animado</h3>
            <img src="3dmodel.png"/>
          </Div>

        </Div>

      </div>
    </>
  );
}

export default EbookPage;