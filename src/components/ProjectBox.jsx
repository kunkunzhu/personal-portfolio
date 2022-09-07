import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const ProjCard = styled.div`
    border: 1px solid var(--night);
    width: 100%;
    display: inline-block;
    border-radius: 10px;
    box-sizing: border-box;
    color: var(--txt-clr);
    cursor: pointer;
    background: linear-gradient(to bottom, rgb( 255, 255, 255 ), rgb( 255, 255, 255 ), rgba( 255, 255, 255, 0 ));
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px 5px rgb(165 204 228 / 0.3);
        background: var(--night);
        color: white;
        transition: 0.3s ease-out; 
        .linkSection {
            visibility: visible;
            transition: 0.4s ease-out; 
        }
        .image {
            opacity: 1;
        }
    }
    @media (min-width: 768px) and (max-width: 992px) {
        color: red;
    }
`


const ProjInfo = styled.div`
    padding: 0rem 1rem 2.5rem 1rem;
    cursor: default;
    .header {
        margin-bottom: 0.8rem;
    }
    .title {
        text-transform: lowercase;
        font-size: 2.2rem;  
        font-weight: 600;
    }
    .subtitle{
        font-family: var(--txt-font);
        font-size: 1rem;
        font-style: bold;
        font-weight: 600px;
        opacity: 0.75;
    }
    @media (min-width: 768px) and (max-width: 992px) {
        .title {
            font-size: 1.5rem; 
        }
        .subtitle {
            font-size: 0.7rem;
        }
        .header {
            margin-bottom: 0.4rem;
        }
    }
`

const ProjHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: var(--txt-font);
    .link {
        cursor: crosshair;
        margin-top: 1rem;
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
    @media (min-width: 768px) and (max-width: 992px) {
        .link {
            margin-top: 0.4rem;
            font-size: 0.8rem;
            padding: 0.3rem 0.8rem 0.3rem 0.8rem;
        }
    }
`

const ProjText = styled.div`
    font-family: var(--txt-font);
    position: relative;
    height: 1rem;
    font-size: 14px;
    @media (min-width: 768px) and (max-width: 992px) {
        font-size: 12px;
        height: 0.5rem;
    }
`

const ProjImage = styled.div`
    width: 100%;
    padding-top: 50%;
    display: inline-block;
    background-position: 40% 40%;
    background-size: 100%;
    background-repeat: no-repeat;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-image: url(${(props) => props.image});
    cursor: crosshair;
    opacity: 0.75;
`

class ProjectBox extends Component {

    renderProjText = () => {
        return (
            <ProjInfo>
                <ProjHeader>
                    <div className="header">
                        <div className="title">{this.props.project.title}</div>
                        <div className="subtitle">
                            {this.props.project.subtitle}
                        </div>
                    </div>
                    <div>
                        <Link to={this.props.project.path} style={{fontFamily: "var(--txt-font)"}}>
                            <button className="link">
                                {this.props.project.prompt}
                            </button>
                        </Link>
                    </div>
                </ProjHeader>
                <ProjText>{this.props.project.description}</ProjText>
                    {/* <span className="categories">
                        /{this.props.project.categories}/
                    </span> */}
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