import React, { Component } from 'react'
import styled from 'styled-components'
import { Card } from 'react-bootstrap'

const ProjCard = styled(Card)`
    background: white;
    height: 510px;
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
        background: #183550;
        color: white;
    }
`


const ProjInfo = styled(Card.ImgOverlay)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 500px;
    padding: 20px;
    .title {
        text-transform: lowercase;
        font-size: 35px;  
        letter-spacing: 0.1rem;
        font-weight: 600;
        .arrow{
            color: white;
            font-size: 25px;
            margin-right: 20px;
            float: right;
            &:hover {
                transform: translate(0.5em,0);
                transition: 0.3s ease-out; 
            }
        }
    }
    hr {
        color: white;
        border: 0;
        border-bottom: 1px dashed white;
        height: 0;
        margin-bottom: 10px;
        width: 90%;
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
        padding-top: 5px;
    }
`

const ProjImage = styled(Card.Img)`
    border-radius: 20px;
    margin-top: 15px;
    z-index: 5;
    opacity: 1;
    width: 500px;
`

class ProjectBox extends Component {

    renderProjText = () => {
        return (
            <ProjInfo>
                <div className="title">
                    {this.props.project.title}
                    &nbsp;
                    <span className="arrow">
                        <i class="fas fa-chevron-right"></i>
                    </span>
                </div>
                <hr/>
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