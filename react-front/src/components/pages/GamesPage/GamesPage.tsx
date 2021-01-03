import React from 'react'
import Header from '../../organisms/Header/Header'
import ContentTemplate from '../../templates/ContentTemplate'
import Div from '../../atoms/Div/Div'
import HotmartButton from '../../molecules/HotmartButton/HotmartButton'

const GamesPage = function({}){
  return (
    <>
      <Header/>
      <ContentTemplate background="white">
        <Div>
          <Div display="flex" flex="center" alignItems="center" pb="8px">
            <img src="https://lh3.googleusercontent.com/QiqMPG8sEBNYWP67ilDjwnrju8_mGmwEkSzhhO5bp0PKEWzEoTVAOHO0GFiKEHB6_1o=s180-rw" className="dimension-m"/>
            <h2>Dimension M</h2>
          </Div>
          <Div>
            <iframe
            src="https://itch.io/embed/704998?bg_color=ffffff&amp;fg_color=000000&amp;link_color=fa5c5c&amp;border_color=979797"
            width="552px"
            height="167px"
            />
          </Div>
          <Div>
            <HotmartButton link={ `https://pay.hotmart.com/E45287330F?checkoutMode=1` } text="Comprar na Hotmart"/>
          </Div>
        </Div>
      </ContentTemplate>
    </>
  );
}

export default GamesPage;