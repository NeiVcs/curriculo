import React from "react"
import AboutContainer from "./AboutContainer"
import TecnologiesContainer from "./TecnologiesContainer"
import ProjectsContainer from "./ProjectsContainer"

import '../styles/components/maincontent.sass'

const MainContent = () => {
    return (
        <main id="main-content">
            <AboutContainer/>
            <TecnologiesContainer/>
            <ProjectsContainer/>
        </main>
        )
}

export default MainContent