import React from "react"
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon"/>
                <div>
                    <h3>Telefone</h3>
                    <p>(19)99725-9533</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="mail-icon"/>
                <div>
                    <h3>E-mail</h3>
                    <p>neivcs@hotmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon"/>
                <div>
                    <h3>Localização</h3>
                    <p>Campinas / SP</p>
                </div>
            </div>
        </section>
        )
}

export default InformationContainer