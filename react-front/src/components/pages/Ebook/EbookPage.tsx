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
            <span className="ebook-text-highlight">O que este eBook é:</span> Uma série de projetos práticos para você usar e aprender, o eBook vai dissecar cada projeto e explicar o que cada função faz, como usar e pra que você deve usar cada função.
              Cada projeto te ensina um tópico importante da OpenGL, ao final do livro você será capaz de programar aplicações OpenGL sozinho, pois terá um conhecimento muito mais amplo da API.
            </p>
            
            <p>
              Para quem está começando este pode ser um conteúdo difícil de encontrar, e quando encontra é difícil de entender, a maioria dos tutoriais ensinam apenas funções antigas da OpenGL,
              que não são mais usadas mais hoje em dia, além de serem limitados em conteúdo. Este eBook é guia completo para te tirar do zero e te colocar no lugar de um programador OpenGL.
            </p>

            <p>
            <span className="ebook-text-highlight">O que este eBook não é:</span> Este eBook não vai te transformar em um mestre jedi da programação de jogos, ele não te ensina a criar games AAA, nem mesmo jogos 2D <span className="ebook-highlight-dark">(leia o Bonus!)</span>, porém, ele vai te dar o pontapé inicial que
            você precisa para iniciar sua carreira, seja para criar suas próprias game engines ou para criar seus games do zero.
            </p>

            <p>
              <span className="ebook-text-highlight">O que você vai aprender:</span> Em cada capítulo o livro ensina um tópico importante da OpenGL.
              <ul className="ebook-chapters">
                <li><span>No primeiro capítulo: </span>Você vai aprender o famoso Hello World, como criar uma simples aplicação OpenGL com uma janela colorida!</li>
                <li><span>No segundo capítulo: </span>Você vai aprender a renderizar um simples triângulo na tela, este capítulo está recheado de informações importantes! como programar e criar um shader, como usar a memória de vídeo para carregar dados de geometria, como invocar um shader para renderização, o que são arrays de vértices, layout de vértice, etc.</li>
                <li><span>No terceiro capítulo: </span>Você vai aprender uma técnica de renderização utilizando índices, essa técnica evita o consumo exagerado de memória e evita a repetição de vértices de um modelo 2D/3D.</li>
                <li><span>No quarto e quinto capítulos: </span>Você vai aprender a aplicar texturas nas formas geométricas, e como lidar com texturas dentro dos shaders, também verá como utilizar múltiplas texturas e aplicar blend nelas!</li>
                <li><span>No sexto capítulo: </span>Você vai aprender a criar e aplicar transformações geométricas e como aplica-las no vertex shader.</li>
                <li><span>No sétimo capítulo: </span>Você vai aprender a criar e aplicar projeções em perspectiva, este tipo de projeção torna nossas aplicações 3D mais realistas! também verá como aplica-las dentro d vertex shader.</li>
                <li><span>No oitavo e último capítulo: </span>Você vai aprender a técnica de instancing, para renderizar o mesmo modelo 3D diversas vezes, mudando suas propriedades, essa técnica é importante pois pode melhorar, e muito,
              o desempenho de uma aplicação 3D.</li>
              </ul>
            </p>

            <p>
            <span className="ebook-text-highlight">Bonus:</span> <span className="ebook-highlight-dark">Um eBook extra gratuito!</span> que vai te ensinar a criar e programar um jogo 2D do zero!
            aprenda os conceitos e as técnicas utilizadas para renderização de games 2D, como criar um Sprite Batch, um renderizador de fontes 2D, e mais! Para você adquirir esse eBook basta me enviar um email com um pedido, uma semana após adquirir finalizar a sua compra!
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