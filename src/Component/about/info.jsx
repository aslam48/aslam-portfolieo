import React from 'react'

const info = () => {
  return (
   
        <div className="about__info grid">

            <div className="about__box">
                <i class="bx bx-award about__icon" ></i>
                <h3 className="about__title">Expirence </h3>
                    <span className="about__subtitle">3+ Years</span>
               
            </div>


            <div className="about__box">
            <i class='bx bxs-briefcase  about__icon'></i>
                <h3 className="about__title">Project </h3>
                    <span className="about__subtitle">35+</span>
            </div>


            <div className="about__box">
            <i class='bx bx-collapse-horizontal about__icon' ></i>
                <h3 className="about__title">Open Source Contribution</h3>
                    <span className="about__subtitle"> 10+</span>
               
            </div>
    </div>
  )
}

export default info