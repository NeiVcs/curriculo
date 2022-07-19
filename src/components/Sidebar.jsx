import React from "react"
import Avatar from "../img/eu.jpeg"
import SocialNetworks from './SocialNetworks'
import InformationContainer from "./InformationContainer"

import '../styles/components/sidebar.sass'


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Valdinei Crispim" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="" className="btn">Download do currículo</a>
        </aside>
        )
}

export default Sidebar