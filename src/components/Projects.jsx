import React, { Component } from 'react'
import styled from 'styled-components'
import StackGrid from 'react-stack-grid'
import ProjectsInfo from './ProjectsInfo'
import ProjectBox from './ProjectBox'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    min-height: 800px;
    position: relative;
    margin: auto;
    @media (max-width: 750px) {
        width: 400px;
    }
`

class Projects extends Component {
    renderProjectCells = () => {
        const projects = ['technova', 'book', 'mood']
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
                <StackGrid columnWidth={375} gutterWidth={35} gutterHeight={30} easing={"cubicIn"}>
                    {this.renderProjectCells()}
                </StackGrid>
            </Wrapper>
        )
    }
}


export default Projects