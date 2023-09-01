import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/Slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import "./Home.scss"
import CatCard from '../../components/catCard/CatCard'
import { cards } from '../../data'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=> (
          <CatCard item={card} key={card.id}/>
        ))}
      </Slide>
    </div>
  )
}

export default Home