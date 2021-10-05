import React, { Component } from 'react'
import styled from 'styled-components'

const ProjCard = styled.div`
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 8px;
    width: 100%;
    display: block;
    padding: 4rem;
    border-radius: 15px;
    box-sizing: border-box;
    color: var(--txt-clr);
    cursor: pointer;
`


const ProjInfo = styled.div`
    padding: 20px;
    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.8rem;
        flex-direction: column;
        align-items: flex-start;
    }
    .title {
        text-transform: lowercase;
        font-size: 2.2rem;  
        letter-spacing: 0.1rem;
        font-weight: 600;
    }
    .subtitle{
        font-family: var(--txt-font);
        font-size: 1rem;
        font-style: bold;
        font-weight: 600px;
        flex: 0 0 auto;
    }
    .text{
        font-family: var(--txt-font);
        position: relative;
        height: 1.5rem;
        overflow: hidden;
    }
`

const ProjImage = styled.a`
    width: 100%;
    padding-top: 50%;
    display: inline-block;
    background-position: 50% 0;
    background-size: cover;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-image: url(../images/project_thumbnails/TechnovaPic.png);
`

class ProjectBox extends Component {

    renderProjText = () => {
        return (
            <ProjInfo>
                <div className="header">
                    <div className="title">{this.props.project.title}</div>
                    <div className="subtitle">{this.props.project.subtitle}</div>
                </div>
                <div className="text">{this.props.project.description}</div>
            </ProjInfo>
        )
    }

    render () {

        return (
            <ProjCard >
                <ProjImage href="#"/>
                {this.renderProjText()}
            </ProjCard>
        )
    }
}

export default ProjectBox