import React from 'react'

const qualification = () => {
  return (
    <section className='quaification section'>

        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'> My Persona Journey</span>

       <div className='qualification__container container'>
        <div className='qualification__tabs'>
            <div className='qualification__button qualification__active button--flex'>
                <i className='uil uil-qualification-cap qualification-icon'></i>Education
            </div>

            <div className='qualification__button button--flex'>
                     <i className='uil uil-qualification-alt qualification-icon'></i>Expirence
            </div>
        </div>

        <div className='qualification__sections'>
          <div className='qualification__content'>
            <div className='qualification__data'>

              <div>
                <h3 className='qualification__title'> </h3>
                  <span className='qualification__subtitle'>Spain - instutuin</span>
                  <div className='qualification__calender'>
                    <i className='uil uil-calender-alt'></i>2021 -  present
                  </div>
              </div>

       <div></div>
            </div>
          </div>
        </div>

        </div> 
    </section>
  )
}

export default qualification