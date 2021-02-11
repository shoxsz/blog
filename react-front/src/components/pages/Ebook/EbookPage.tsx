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

            <p>
              Esse eBook vai te ensinar a programar em OpenGL! programe aplicações 2D e 3D! solicite ainda o seu eBook bônus gratuito!
            </p>

            <p>
            <span className="ebook-text-highlight">O que este eBook é:</span> Uma série de projetos práticos! o eBook vai dissecar cada projeto e explicar o que cada função faz, como usar e para que você deve usar cada função.
              Em cada projeto você vai ampliar o seu conhecimento sobre OpenGL!
            </p>
            
            <p>
              Para quem está começando este pode ser um conteúdo difícil de encontrar, e quando encontra é difícil de entender, a maioria dos tutoriais ensinam apenas funções antigas da OpenGL,
              que não são mais usadas hoje em dia, além de serem limitados em conteúdo. Esse eBook é guia prático e claro que vai te ensinar definitivamente OpenGL.
            </p>

            <p>
            <span className="ebook-text-highlight">O que este eBook não é:</span> Este eBook não vai te transformar em um mestre jedi da programação de jogos, ele não te ensina a criar games AAA, nem mesmo jogos 2D <span className="ebook-highlight-dark">(leia o Bonus!)</span>, porém, ele vai te dar o pontapé inicial que
            você precisa para iniciar sua carreira, seja para criar suas próprias game engines ou para criar seus games do zero.
            </p>

            <p>
              <span className="ebook-text-highlight">O que você vai aprender:</span>
              <ul className="ebook-chapters">
                <li><span>No primeiro capítulo: </span>Como criar uma simples janela colorida!</li>
                <li><span>No segundo capítulo: </span>Renderizar um simples triângulo, criar o seu primeiro shader, entender o que são vértices, arrays de vértices, layout de vértices, etc.</li>
                <li><span>No terceiro capítulo: </span>Usar índices para renderização.</li>
                <li><span>No quarto e quinto capítulos: </span>Como trabalhar com múltiplas texturas na sua aplicação e nos shaders.</li>
                <li><span>No sexto capítulo: </span>Criar transformações geométricas e como aplica-las no vertex shader.</li>
                <li><span>No sétimo capítulo: </span>Criar projeções em perspectiva para deixar as cenas 3D mais realistas.</li>
                <li><span>No oitavo e último capítulo: </span>Técnica de instancing, como renderizar várias instâncias de um modelo 3D numa única chamada, alterando as suas propriedades.</li>
              </ul>
            </p>

            <p>
            Adquira o eBook <span className="ebook-highlight-dark">OpenGL na Prática</span> e ganhe o eBook <span className="ebook-text-highlight">Programando um Jogo 2D com OpenGL</span>, que vai te ensinar a criar
            e organizar um jogo 2D usando OpenGL e C++! é muto fácil, basta me enviar um email(<span className="ebook-highlight-dark">paulomarcio18p1@gmail.com</span>) pedindo o eBook uma semana após adquirir a sua cópia do <span className="ebook-highlight-dark">OpenGL na Prática</span>.
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
          <Div className="ebook-call">
            <Div className="ebook-call-list">
              <h3>GRÁTIS</h3>
            </Div>
            <Div className="ebook-cover">
              <img src="cover-bonus.jpg"/>
            </Div>
          </Div>

          <h2 className="ebook-button-text ebook-offer">de <span className="ebook-price">R$40</span> por apenas R$27!</h2>
          <h4 className="ebook-button-text">Você tem até 7 dias para devolução</h4>
          <Div className="ebook-button">
            <HotmartButton link="https://pay.hotmart.com/P45286896T?checkoutMode=10&bid=1609697548141" text="Acesse Agora" />
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