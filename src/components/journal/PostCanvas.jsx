import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PostCard = styled.div`
    position: relative;
    display: inline-block;
    .text {
        visibility: hidden;
    }
    &:hover {
        .overlay {
            position: absolute;
            top: 0;
            width: 100%;
            height: calc(100% - 0.25rem);
            left: 0;
            background-color: black;
            opacity: 0.7;
            z-index: 9;
            display: block;
            transition: 0.2s ease-in;
        }
        .text {
            visibility: visible;
            transition: 0.25s ease-in;
        }
    }
`
export const PostImage = styled.img`
    max-width:100%;
`
export const PostInfo = styled(Link)`
    text-decoration: none;
    position: absolute;
    top: 1.5rem;
    left: 1rem;
    text-align: left;
    color: white;
    z-index: 10;
    max-width: calc(100% - 2rem);
    cursor: crosshair;
    .title {
        font-family: var(--txt-font);
        font-weight: 500;
        font-size: 2rem;
        line-height: 1.8rem;
        margin-bottom: 0.4rem;
    }
    .excerpt {
        font-size: 0.8rem;
        line-height: 0.8rem;
        max-width: calc(100% - 3.5rem);
    }
`

class PostCanvas extends Component {

    renderPostText = () => {
        return (
            <PostInfo className="text" to={this.props.post.path}>
                <h1 className="title">
                    {this.props.post.title}
                </h1>
                <small className="date">
                    {this.props.post.date}
                </small>
                <div className="excerpt">
                    {this.props.post.excerpt}
                </div>
            </PostInfo>
        )
    }

    render() {
        return (
            <PostCard>
                {this.renderPostText()}
                <div className="overlay"></div>
                <PostImage src={this.props.post.image}/>
            </PostCard>
        )
    }
}

export default PostCanvas