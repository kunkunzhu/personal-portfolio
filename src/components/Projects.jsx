import React, { Component } from 'react'
import styled from 'styled-components'
import { Masonry } from './ProjectsStyle.jsx'
import ProjectsInfo from './ProjectsInfo'
import ProjectBox from './ProjectBox'

const Wrapper = styled.div`
    margin: auto;
    padding-top: 50px;
    width: 100%;
    align-items: center;
    padding-right: 20px;
    padding-left: 20px;
    @media (max-width: 750px) and (min-width: 600px) {
        margin-top: -250px;
    }
    @media (max-width: 600px) {
        margin-top: -350px;
    }
`

class Projects extends Component {
    renderProjectCells = () => {
        const projects = ['voicenoted', 'technova21', 'mood']
        let projectArray = []
        for(let i = 0; i < projects.length; i++) {
            const project = ProjectsInfo[projects[i]]
            projectArray.push(
                <ProjectBox project={project}/>
            )
        }
        return projectArray
    }
    
    render () {
        return (
            <Wrapper>
                <Masonry>
                    {this.renderProjectCells()}
                </Masonry>
            </Wrapper>
        )
    }
}


export default Projects