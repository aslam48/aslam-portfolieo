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
            <i className='uil uil-arrow  services__icon'></i>
            <h3 className='services__title'>Front-end Development</h3>
          </div>


          <span className='services__button' onClick={() => toggleTab(1)}>view more<i className='uil uil-arrow-right services__button-icon'></i> </span>


        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">
            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

            <h3 className='services__modal-title'>Front-end Developer </h3>
            <p className='services__modal-description'>Service with more than 3 years of work expirence providing quality work to clients and companies</p>


            <ul className='service__modal-service grid'>
              <li className='services__modal-service'>
                <i className='uil uil-check-circle services__modal-icon'></i>
                <p className='services__modal-info'>
                   Developed The Good Rich User Interface
                </p>
              </li>



              <li className='services__modal-service'>
                <i className='uil uil-check-circle services__modal-icon'></i>
                <p className='services__modal-info'>
                 React SDK
                </p>
              </li>



              <li className='services__modal-service'>
                <i className='uil uil-check-circle services__modal-icon'></i>
                <p className='services__modal-info'>
                  Good Peformance Application
                </p>
              </li>


               <li className='services__modal-service'>
                <i className='uil uil-check-circle services__modal-icon'></i>
                <p className='services__modal-info'>
                 Responsive Application
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
  <h3 className='services__title'>BlockChain Development</h3>
</div>

<span className='services__button' onClick={() => toggleTab(2)}>view more<i className='uil uil-arrow-right services__button-icon'></i> </span>


<div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
<div className="services__modal-content">
  <i  onClick={() => toggleTab(0)}  className='uil uil-times services__modal-close'></i>

  <h3 className='services__modal-title'>BlockChain Developer</h3>
  <p className='services__modal-description'>Good Integrator of Web3 with solana and metamask</p>


  <ul className='service__modal-service grid'>
    <li className='services__modal-service'>
      <i className='uil uil-check-circle services__modal-icon'></i>
      <p className='services__modal-info'>
        Developed the User Unterface
      </p>
    </li>



    <li className='services__modal-service'>
      <i className='uil uil-check-circle services__modal-icon'></i>
      <p className='services__modal-info'>
      Smart Contract Integrator 
      </p>
    </li>



    <li className='services__modal-service'>
      <i className='uil uil-check-circle services__modal-icon'></i>
      <p className='services__modal-info'>
       Build on Ether.js, Solana, Etherum, MetaMask
      </p>
    </li>


     {/* <li className='services__modal-service'>
      <i className='uil uil-check-circle services__modal-icon'></i>
      <p className='services__modal-info'>
       Responsive Application
      </p>
    </li> */}


     {/* <li className='services__modal-service'>
      <i className='uil uil-check-circle services__modal-icon'></i>
      <p className='services__modal-info'>
       Rich Product
      </p>
    </li> */}

  </ul>

</div>
</div>

</div>




        </div>
    </section>
  )
}

export default Service