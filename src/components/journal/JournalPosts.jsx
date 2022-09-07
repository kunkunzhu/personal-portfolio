import React, { Component } from 'react'
import styled from 'styled-components'
import { Masonry, List } from '../pages/JournalStyle'
import JournalInfo from './JournalInfo'
import { PostCanvas, PostItem } from './PostCanvas'

const Wrapper = styled.div`
    margin: auto;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
`

const JournalPosts = (props) => {
    const renderPostCanvases = (view) => {
        const posts = [
            'twentytwentyone',
            'indigo',
            'founddocumentary',
            'beingbelonging',
            'asurvivalguidefortheseason',
            'pastimes', 
            'idontwanttobeanyoneelsebutmyselfanymore', 
            'reopening2',
            'torontotrip1',
            'twenty',
            'reopening1',
            'daylight',
            'amathematicalidentitycrisis',
        ]
        let postsArray = []
        if (view === "gallery") {
            posts.map(postName => {
                const post = JournalInfo[postName]
                postsArray.push(
                    <PostCanvas post={post}/>
                )
            })
        } else {
            posts.map(postName => {
                const post = JournalInfo[postName]
                postsArray.push(
                    <PostItem post={post}/>
                )
            })
        }
        return postsArray
    }
    
    return (
        <Wrapper>
            { props.view === "gallery" ?
                <Masonry>
                    {renderPostCanvases("gallery")}
                </Masonry>
                :
                <List>
                   {renderPostCanvases("list")} 
                </List>
            }
        </Wrapper>
    )
}


export default JournalPosts