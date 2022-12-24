import React, { useState } from 'react'
import './service.css'

const Service = () => {
  const [toggleState, SetToggleState] = useState(0)

  const toggleTab = (index) => {
    SetToggleState(index)
  }


  return (
    <section className="services section" id='services'>
        <h2 className='section__title'>Services</h2>
        <span className='section__subtitle'>What i offer </span>


        <div className='services__container container grid'>


 <div className='services__content'>

          <div>
            <i className='uil uil-web-grid  services__icon'></i>
            <h3 className='services__title'> Product <br/> Designer</h3>
          </div>

          <span className='services__button' onClick={() => toggleTab(1)}>view more<i className='uil uil-arrow-right services__button-icon'></i> </span>


        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">
            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

            <h3 className='services__modal-title'>software</h3>
            <p className='services__modal-description'>Service with ore than 3 years of work expirence providing quality work to clients and companies</p>


            <ul className='services__modal-services grid'>
              <li className='services__modal-services'>
                <i className='uil uil-check-circle services__modal-icon'></i>
                <p className='services__modal-info'>
                  i developed the user interface
                </p>
              </li>



              <li className='services__modal-service'>
                <i className='uil uil-check-circle services__modal-icon'></i>
                <p className='services__modal-info'>
                 Web Page development
                </p>
              </li>



              <li className='services__modal-services'>
                <i className='uil uil-check-circle services__modal-icon'></i>
                <p className='services__modal-info'>
                  Good Peformance application
                </p>
              </li>


               <li className='services__modal-service'>
                <i className='uil uil-check-circle services__modal-icon'></i>
                <p className='services__modal-info'>
                 responsive pplication
                </p>
              </li>


               <li className='services__modal-service'>
                <i className='uil uil-check-circle services__modal-icon'></i>
                <p className='services__modal-info'>
                 rich product
                </p>
              </li>
            </ul>

          </div>
        </div>

        </div>



  <div className='services__content'>

          <div>
            <i className='uil uil-arrow  services__icon'></i>
            <h3 className='services__title'>goog <br/> be</h3>
          </div>


          <span className='services__button' onClick={() => toggleTab(2)}>view more<i className='uil uil-arrow-right services__button-icon'></i> </span>


        <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">
            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

            <h3 className='services__modal-title'></h3>
            <p className='services__modal-description'>Service with ore than 3 years of work expirence providing quality work to clients and companies</p>


            <ul className='service__modal-service grid'>
              <li className='services__modal-service'>
                <i className='uil uil-check-circle services__modal-icon'></i>
                <p className='services__modal-info'>
                  i developed the user interface
                </p>
              </li>



              <li className='services__modal-service'>
                <i className='uil uil-check-circle services__modal-icon'></i>
                <p className='services__modal-info'>
                 Web Page development
                </p>
              </li>



              <li className='services__modal-service'>
                <i className='uil uil-check-circle services__modal-icon'></i>
                <p className='services__modal-info'>
                  Good Peformance application
                </p>
              </li>


               <li className='services__modal-service'>
                <i className='uil uil-check-circle services__modal-icon'></i>
                <p className='services__modal-info'>
                 responsive pplication
                </p>
              </li>


               <li className='services__modal-service'>
                <i className='uil uil-check-circle services__modal-icon'></i>
                <p className='services__modal-info'>
                 rich product
                </p>
              </li>
            </ul>

          </div>
        </div>

        </div>

{/*         
  <div className='services__content'>

<div>
  <i className='uil uil services__icon'></i>
  <h3 className='services__title'>old <br/> meat</h3>
</div>

<span className='services__button'>view more<i className='uil uil-arrow-right services__button-icon'></i> </span>


<div className='services__modal'>
<div className="services__modal-content">
  <i className='uil uil-times services__modal-close'></i>

  <h3 className='services__modal-title'>Front-end Developer</h3>
  <p className='services__modal-description'>Service with ore than 3 years of work expirence providing quality work to clients and companies</p>


  <ul className='service__modal-service grid'>
    <li className='services__modal-service'>
      <i className='uil uil-check-circle services__modal-icon'></i>
      <p className='services__modal-info'>
        i developed the user interface
      </p>
    </li>



    <li className='services__modal-service'>
      <i className='uil uil-check-circle services__modal-icon'></i>
      <p className='services__modal-info'>
       Web Page development
      </p>
    </li>



    <li className='services__modal-service'>
      <i className='uil uil-check-circle services__modal-icon'></i>
      <p className='services__modal-info'>
        Good Peformance application
      </p>
    </li>


     <li className='services__modal-service'>
      <i className='uil uil-check-circle services__modal-icon'></i>
      <p className='services__modal-info'>
       responsive pplication
      </p>
    </li>


     <li className='services__modal-service'>
      <i className='uil uil-check-circle services__modal-icon'></i>
      <p className='services__modal-info'>
       rich product
      </p>
    </li>
  </ul>

</div>
</div>

</div> */}




        </div>
    </section>
  )
}

export default Service