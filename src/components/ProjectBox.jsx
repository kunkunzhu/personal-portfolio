import React, { Component } from 'react'
import styled from 'styled-components'
import { Card } from 'react-bootstrap'

const ProjCard = styled(Card)`
    background: white;
    height: 550px;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    color: var(--txt-clr);
    cursor: pointer;
    @media (max-width: 850px) {
        width: 400px;
    }
    &:hover {
        transition: 0.5s ease-out; 
        background: #1A3A4F;
        color: white;
    }
`

const ProjInfo = styled(Card.Body)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 400px;
    margin: auto;
    padding: 20px;
    .title{
        opacity: 0.5;
        text-transform: lowercase;
        font-size: 35px;  
        letter-spacing: 0.1rem;
        font-weight: 600;
    }
    .subtitle{
        font-family: var(--txt-font);
        font-size: 18px;
        font-style: bold;
        font-weight: 600px;
    }
    .text{
        opacity: 0.5;
        font-family: var(--txt-font);
        padding-top: 15px;
    }
`

const ProjImage = styled(Card.Img)`
    border-radius: 15px;
    margin-top: 15px;
    z-index: 5;
    opacity: 1;
    width: 540px;
`

class ProjectBox extends Component {

    renderProjText = () => {
        return (
            <ProjInfo>
                <div className="title">{this.props.project.title}</div>
                <div className="subtitle">{this.props.project.subtitle}</div>
                <div className="text">{this.props.project.description}</div>
            </ProjInfo>
        )
    }

    render () {

        return (
            <ProjCard >
                <ProjImage src={this.props.project.image}/>
                {this.renderProjText()}
            </ProjCard>
        )
    }
}

export default ProjectBox