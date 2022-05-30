import React from 'react'
import Carditems from './Carditems';
import './Cards.css';
function Cards() {
  return (
    <div className='cards'>
        <h1>check out these EPIC Destinations!</h1>
      <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
             <Carditems
             src='image/img9.jpg' text="Expolre the hidden waterfall deep inside the Amazon jungle" 
             label="Adventure" path="/services"
             />
              <Carditems
             src='image/img2.jpg' text="Travel through the islands of Bali in a private cruise" 
             label="Luxury" path="/services"
             />
        </ul>
        <ul className='cards__items'>
        <Carditems
              src='image/img5.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <Carditems
              src='image/img4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <Carditems
              src='image/img8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Cards
