import React, { Component } from 'react'
import styled from 'styled-components'
import StackGrid from 'react-stack-grid'
import ProjectsInfo from './ProjectsInfo'
import ProjectBox from './ProjectBox'

const Wrapper = styled.div`
    width: 80vw;
    min-height: 800px;
    margin: auto;
    padding-top: 100px;
    align-items: center;
    @media (max-width: 750px) {
        margin-top: -200px;
    }
`

class Projects extends Component {
    renderProjectCells = () => {
        const projects = ['voicenoted', 'technova', 'brand']
        var projectArray = []
        for(var i = 0; i < projects.length; i++) {
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
                <StackGrid 
                    columnWidth={575} 
                    gutterWidth={15} 
                    gutterHeight={25} 
                    easing={"cubicIn"}>
                    {this.renderProjectCells()}
                </StackGrid>
            </Wrapper>
        )
    }
}


export default Projects