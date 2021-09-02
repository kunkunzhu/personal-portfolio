import React, { Component } from 'react'
import styled from 'styled-components'
import Brand from '../images/Portfolio.png'

const Container = styled.div`
    box-sizing: border-box;
    box-shadow: 5px 10px #888888;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    height: 300px;
    border: 1px solid black;
    padding: 0;
`

const Image = styled.img`
    height: 100%;
    border-radius: 30px;
    -webkit-filter: brightness(100%);
    &:hover {
        -webkit-filter: brightness(80%);
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        transition: all 1s ease;
    }
`

const ProjectInfo = styled.div`

    opacity: 0%;
    height: 150px;
    border-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    &:hover {
        opacity: 100%;
    }
`

const ProjectDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Title = styled.div`
    font-size: 25px;
    font-style: bold;
    font-weight: 600;
    letter-spacing: 0.015rem;
`

const Subtitle = styled.div`
    font-family: 'Fira Code', monospace;
    font-size: 20px;
`

const Text = styled.div`
    color: #333333;
    padding: 10px;
`


class ProjectBox extends Component {
    render () {
        return (
            <Container>
                <Image src={this.props.project.image}/>
                <ProjectInfo>
                    <ProjectDescription>
                        <Title>{this.props.title}</Title>
                        <Subtitle>{this.props.subtitle}</Subtitle>
                        <Text>{this.props.description}</Text>
                    </ProjectDescription>
                    {/* <ProjectButton/> */}
                </ProjectInfo>
            </Container>
        )
    }
}

export default ProjectBox