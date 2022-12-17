import React from 'react'
import './home.css'
import Socials from './Socials'
import Date from './Date'
import ScroolDown from './ScroolDown'

const Home = () => {
  return (
    <div>
        <section className="home section" id='home'>
            <div className="home__container container grid">
                <div className="home__content grid">

                    <Socials/>

                    <div className='home__img'></div>

                    <Date/>
                </div>

                <ScroolDown/>
            </div>
        </section>
    </div>
  )
}

export default Home