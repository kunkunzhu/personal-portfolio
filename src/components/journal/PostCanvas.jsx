import React from 'react'
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
        font-family: var(--accent-font);
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 1.8rem;
        margin-bottom: 0.4rem;
    }
    .excerpt {
        font-size: 0.8rem;
        line-height: 0.8rem;
        max-width: calc(100% - 3.5rem);
        // make it conditional based on the size of the background image ...
    }
    @media (max-width: 992px) and (min-width: 768px) { 
        .title {
            font-size: 1.4rem;
            line-height: 1.4rem;
        }
        .excerpt {
            visibility: hidden;
        }
    } 
`

export const PostTitle = styled.h1`
    font-family: var(--accent-font);
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.8rem;
    margin-bottom: 0.4rem;
`

export const PostRow = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: var(--txt-clr);
    padding: 5px 15px 5px 15px;
    .info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .date {
            font-size: 1.2rem;
            opacity: 0.8;
        }
    }
    .excerpt {
        font-size: 0.8rem;
        line-height: 0.8rem;
        padding: 5px 40% 15px 0px;
        opacity: 0.4;
    }
    hr {
        border: 0;
        border-top: 1px solid var(--rain);
    }
    &: hover {
        background-color: var(--night);
        color: var(--bg-clr);
        transition: 0.4s ease-in-out;
        .excerpt {
            opacity: 0.8;
        }
    }
`

export function PostCanvas(props) {

    const renderPostText = () => {
        return (
            <PostInfo className="text" to={props.post.path}>
                <PostTitle>
                    {props.post.title}
                </PostTitle>
                <small className="date">
                    {props.post.date}
                </small>
                <div className="excerpt">
                    {props.post.excerpt}
                </div>
            </PostInfo>
        )
    }

    return (
        <PostCard>
            {renderPostText()}
            <div className="overlay"></div>
            <PostImage src={props.post.image}/>
        </PostCard>
    )
}

export function PostItem(props){

    const renderPostText = () => {
        return (
            <PostRow  to={props.post.path}>
                <div className='info'>
                    <PostTitle>
                        {props.post.title}
                    </PostTitle>
                    <PostTitle className='date'>
                        {props.post.date}
                    </PostTitle>
                </div>
                <div className='excerpt'>
                    {props.post.excerpt}
                </div>
                <hr/>
            </PostRow>
        )
    }


    return (
        <div>
            {renderPostText()}
        </div>
    )
}