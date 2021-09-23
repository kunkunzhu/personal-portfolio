import React, { Component } from 'react'
import styled from 'styled-components'
import voicenotedPic from '../images/project_thumbnails/VoicePic.png'

const ProjCard = styled.div`
    background: white;
    height: 400px;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: 0.5px solid #D0DEE7;
    color: var(--txt-clr);
    cursor: pointer;
    .image{
        height: 200px;
    }
    @media (max-width: 850px) {
        width: 400px;
    }
`

const ProjInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 400px;
    margin: auto;
    padding: 20px;
    .title{
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
        font-family: var(--txt-font);
        color: black;
        padding-top: 15px;
    }
`

const ProjImage = styled.div`
    z-index: -5;
    opacity: 1;
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
            <div>
                <image src={this.props.project.image}/>
            <ProjCard>
                
                {this.renderProjText()}
            </ProjCard>
            </div>
        )
    }
}

export default ProjectBox