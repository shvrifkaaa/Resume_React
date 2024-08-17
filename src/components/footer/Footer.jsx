import github from'../../img/icons/gitHub.svg'
import insta from '../../img/icons/instagram.svg'
import linkedin from '../../img/icons/linkedIn.svg'
import tw from '../../img/icons/twitter.svg'
import vk from '../../img/icons/vk.svg'

import React from 'react'
import './Footer.css'

export default function Footer() {
  return (

            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">
                            <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                            <li className="social__item"><a href="#!"><img src={insta} alt="Link" /></a></li>
                            <li className="social__item"><a href="#!"><img src={tw} alt="Link" /></a></li>
                            <li className="social__item"><a href="#!"><img src={github} alt="Link" /></a></li>
                            <li className="social__item"><a href="#!"><img src={linkedin} alt="Link" /></a></li>
                        </ul>
                        <div className="copyright">
                            <p>© 2024 frontend-dev.com</p>
                        </div>
                    </div>
                </div>
            </footer>
 
    )
}
