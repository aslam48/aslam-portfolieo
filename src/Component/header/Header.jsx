import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
    <nav className='nav container'>
        <a href="index.html" className='nav__logo'>aslam</a>

        <div className='nav__menu'>
            <ul className="nav__list grid">

                <li className="nav__item">
                    <a href='me' className='nave__link' >
                        <i className='uil uil- nav__logo'></i>
                    </a>
                </li>


                <li className="nav__item">
                    <a href='me' className='nave__link' >
                        <i className='uil uil- nav__logo'></i>
                    </a>
                </li>

                <li className="nav__item">
                    <a href='me' className='nave__link' >
                        <i className='uil uil- nav__logo'></i>
                    </a>
                </li>

                <li className="nav__item">
                    <a href='me' className='nave__link' >
                        <i className='uil uil- nav__logo'></i>
                    </a>
                </li>

                <li className="nav__item">
                    <a href='me' className='nave__link' >
                        <i className='uil uil- nav__logo'></i>
                    </a>
                </li>


                <li className="nav__item">
                    <a href='me' className='nave__link' >
                        <i className='uil uil- nav__logo'></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    </header>
  )
}

export default Header