import React from "react"

import '../styles/components/tecnologiescontainer.sass'
import '../styles/components/maincontent.sass'

import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact
} from 'react-icons/di'

const tecnologies = [
    {id: 'html', name: 'HTML5', icon: <DiHtml5/>},
    {id: 'css', name: 'CSS3', icon: <DiCss3/>},
    {id: 'js', name: 'JavaScript', icon: <DiJsBadge/>},
    {id: 'node', name: 'Node.js', icon: <DiNodejsSmall/>},
    {id: 'mysql', name: 'MySQL', icon: <DiMysql/>},
    {id: 'react', name: 'React', icon: <DiReact/>},
]

const TecnologiesContainer = () => {
    return (
        <section id="tecnologies-container">
            <h2>Tecnologias</h2>
            <div className="tecnologies-grid">
                {tecnologies.map((tec) => (
                    <div className="tecnology-card" id={tec.id} key={tec.id}>
                        {tec.icon}
                        <div className="tecnology-info">
                            <h3>{tec.name}</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        )
}

export default TecnologiesContainer