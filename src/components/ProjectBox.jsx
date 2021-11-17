import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const ProjCard = styled.div`
    height: 475px;
    border: 1px solid rgba(0,0,0,.1);
    width: 100%;
    display: inline-block;
    border-radius: 15px;
    box-sizing: border-box;
    color: var(--txt-clr);
    cursor: pointer;
    background: white;
    &:hover {
        box-shadow: 0 0 10px 5px rgb(165 204 228 / 0.3);
        background: var(--night);
        color: white;
        transition: 0.2s ease-out; 
        .image {
            padding-top: 40%;
            transition: 0.2s ease-out; 
            overflow: visible;
        }
        .linkSection {
            visibility: visible;
            transition: 0.4s ease-out; 
        }
    }
`


const ProjInfo = styled.div`
    padding: 1rem 1.5rem;
    cursor: default;
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
        opacity: 0.75;
    }
    .linkSection {
        display: flex;
        height: 1.5rem;
        flex-direction: row;
        visibility: hidden;
        justify-content: space-between;
        font-family: var(--txt-font);
        .categories {
            font-family: inherit;
            margin-top: 2rem;
            padding: 0.5rem;
            font-size: 0.75rem;
            text-transform: uppercase;
            opacity: 0.5;
        }
        .link {
            cursor: crosshair;
            margin-top: 1.75rem;
            flex: 0 0 auto;
            align-self: flex-start;
            border-radius: 20px;
            border: 1px solid var(--blush);
            padding: 0.5rem;
            text-decoration: none;
            padding-left: 1rem;
            padding-right: 1rem;
            background: inherit;
            color: var(--blush);
            text-decoration: none;
            font-family: inherit;
            font-size: 1.1rem;
            &:hover {
                color: white;
                background: var(--blush);
                border: none; 
                box-shadow: 0 0 15px 0 var(--rain);
                transition: 0.1s ease-out; 
            }
        }
    }
`
const ProjText = styled.div`
    font-family: var(--txt-font);
    position: relative;
    height: 1.5rem;
    overflow: collapse;
`

const ProjImage = styled.div`
    width: 100%;
    padding-top: 50%;
    display: inline-block;
    background-position: 40% 40%;
    background-size: 100%;
    background-repeat: no-repeat;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-image: url(${(props) => props.image});
    cursor: crosshair;
`

class ProjectBox extends Component {

    renderProjText = () => {
        return (
            <ProjInfo>
                <div className="header">
                    <div className="title">{this.props.project.title}</div>
                    <div className="subtitle">
                        {this.props.project.subtitle}
                    </div>
                </div>
                <ProjText>{this.props.project.description}</ProjText>
                <div className="linkSection">
                    <span className="categories">
                        /{this.props.project.categories}/
                    </span>
                    <Link to={this.props.project.path} style={{fontFamily: "var(--txt-font)"}}>
                        <button className="link">
                            {this.props.project.prompt}
                        </button>
                    </Link>
                </div>
            </ProjInfo>
        )
    }

    render () {

        return (
            <ProjCard >
                <ProjImage className="image" image={this.props.project.image}/>
                {this.renderProjText()}
            </ProjCard>
        )
    }
}

export default ProjectBox