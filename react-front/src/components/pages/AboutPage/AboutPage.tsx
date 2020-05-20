import React from 'react'
import ContentTemplate from '../../templates/ContentTemplate'
import Header from '../../organisms/Header/Header'
import Div from '../../atoms/Div/Div'

import './AboutPage.sass'
import SocialLinkList from '../../molecules/SocialLinkList/SocialLinkList'

export default class AboutPage extends React.Component<{}>{
  render(){
    return (
      <>
      <Header/>
      <ContentTemplate background="#e9eeff">
        <Div padding="28px" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <h2>Sobre</h2>
          <img className="eu" src="/eu.jpg"/>
          <Div pl="48px" pr="48px">
            <p>
              Meu nome é Paulo Márcio, nasci em 1995, atualmente trabalho como desenvolvedor freelancer,
              principalmente com desenvolvimento de sistemas utilizando <b className="hoverable"><i>React</i></b> e <b className="hoverable"><i>NodejS</i></b>.
            </p>
            <p>
              Cursei ciência da computação até o 7º período mas acabei saindo da faculdade, então mudei de cidade e comecei a trabalhar como freelancer
              pela plataforma do <a href="https://www.workana.com/freelancer/31bf157a151d6f117372c9ce7dd389c1?ref=user_dropdown" target="__blank" className="about-link"><b>Workana</b></a>, atualmente minha conta lá esta inativa mas já cheguei ao nível hero<img className="workana-hero" src="/workana-hero.svg"></img>.
            </p>
            <p>
              Criei esse blog para que eu possa dedicar mais tempo ao desenvolvimento de jogos, essa sempre foi uma área 
              do meu interesse e foi o principal motivo para eu começar a programar. Atualmente tenho
              um jogo lançado na <a href="https://play.google.com/store/apps/developer?id=Crack+It+Games" target="__blank" className="about-link"><b>Google Play Store</b></a>.
            </p>

            <h4 className="dimension-m-title">Dimension M</h4>

            <Div display="flex">
              <img src="https://lh3.googleusercontent.com/QiqMPG8sEBNYWP67ilDjwnrju8_mGmwEkSzhhO5bp0PKEWzEoTVAOHO0GFiKEHB6_1o=s180-rw" className="dimension-m"/>

              <Div>
                <p>
                  Quando criei esse jogo eu me inspirei no pacman, mas queria fazer algo mais
                  frenético, um jogo mais rápido, lançei ele na play store para saber como era a experiência de publicar
                  um jogo, ver as pessoas jogando e comentando sobre ele, foi uma boa experência ver amigos e familiares jogando.
                </p>
                <p>
                  Desde então não criei mais jogos pois me dediquei a trabalhar como freelancer, inicialmente desenvolvendo scrapers em python,
                  depois peguei alguns trabalhos com <b className="hoverable"><i>React</i></b> e <b className="hoverable"><i>NodejS</i></b>, atualmente eu trabalho com essa stack.
                </p>
              </Div>
            </Div>
            <Div mt="22px">
              <SocialLinkList/>
            </Div>
          </Div>
        </Div>
      </ContentTemplate>
      </>
    )
  }
}