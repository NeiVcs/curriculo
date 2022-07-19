import React from "react"

import '../styles/components/socialnetworks.sass'
import {FaLinkedinIn, FaGithub } from 'react-icons/fa'

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn/>},
    {name: "github", icon: <FaGithub/>},
]

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href="#" className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
        )
}

export default SocialNetworks