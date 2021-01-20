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

        <Div className="ebook-text">
          <Card className="ebook-card">
            <Div className="ebook-sub-title">
              <span>Aprenda a programar em OpenGL e C++ e crie os seus próprios jogos</span>
            </Div>

            <p>
              <span style={ { fontFamily: "Bowlby One SC", marginRight: "4px" } }>Sobre o ebook:</span> Se você é um programador e tem interesse em OpenGL, deseja criar seus próprios jogos ou aplicações gráficas, mas nunca teve tempo, ou sempre achou tudo muito complicado,
              <span style={{ color: "#FF7F50", fontWeight: "bolder" }}> este ebook vai te ensinar de forma prática e rápida como usar as funções da OpenGL para programar aplicações 2D e 3D.</span>
            </p>

            <p>
              Este ebook te ensina de forma prática e direta como criar aplicações gráficas com OpenGL e C++,
              aprender OpenGL pode ser muito desafiador, ela exige muito conhecimento teórico sobre computação gráfica, matemática e até mesmo a API tem uma complexidade elevada. <span style={{ color: "#FF7F50", fontWeight: "bolder" }}>Neste ebook você vai aprender
              a programar em OpenGL de forma prática e direta, sem muita enrolação, ele é acompanhado de diversos projetos para cada capítulo, além do projeto de um jogo 2D que pode servir como exemplo
              de como colocar em prática o que você está aprendendo.</span>
            </p>
            
            <p>
              <span style={ { fontFamily: "Bowlby One SC", marginRight: "4px" } }>OpenGL</span> é uma das API's gráficas mais famosas da indústria, ela é usada para criação de diversos tipos de programa: Jogos, Modelagem 3D, CAD, etc. além disso, OpenGL
              pode ser usada para criação de jogos em diversas plataformas: desktop, mobile e até web! se você almeja criar jogos ou game engines, OpenGL é quase um requisito.
            </p>

            <p>
            <span style={ { fontFamily: "Bowlby One SC", marginRight: "4px" } }>Por que C++?</span> É possível aprender OpenGL em diversas linguagens, Java, javascript, C, etc. O ebook te ensina OpenGL usando C++, ela é uma das linguagens mais utilizadas na criação de jogos em todo o mundo, principalmente para jogos grandes como GTA5, Dota, CSGO, League of Legends, etc.
              é uma linguagem muito flexível, extremamente rápida e permite a programação em diversos paradigmas.
            </p>

            
            <Div mt="40px">
              <span style={ { fontFamily: "Bowlby One SC", marginRight: "4px" } }>Sobre o autor:</span>
              Programo desde os 15 anos, curto criar jogos em C++/Java com OpenGL, criei esse blog com o intuito de ensinar um pouco do que sei e de mostrar
              os projetos nos quais tenho trabalhado, aqui já criei tutoriais ensinando programação 2D e 3D, também tenho dois jogos lançados da play store:
            </Div>

            <ul className="ebook-games-list">
              <li>
                <a href="https://play.google.com/store/apps/details?id=paulo.games.lolmaze" target="_blank">
                  <Div display="flex" alignItems="center">
                    <img src="/dimm.png" />
                    Dimension M
                  </Div>
                </a>
              </li>
              
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.games.crackit" target="_blank">
                  <Div display="flex">
                    <img src="/maget.png" />
                    Mage Tap
                  </Div>
                </a>
              </li>
            </ul>

          </Card>

          <h2 className="ebook-button-text">Se este ebook te interessa clique no botão para compra-lo!</h2>
          <h4 className="ebook-button-text">Você tem até 7 dias para devolução</h4>
          <Div className="ebook-button">
            <HotmartButton link="https://pay.hotmart.com/P45286896T?checkoutMode=10&bid=1609697548141" text="Comprar Agora" />
          </Div>
        </Div>

        <Div display="flex" alignItems="center" flexDirection="column">

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