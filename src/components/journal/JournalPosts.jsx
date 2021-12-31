import React, { Component } from 'react'
import styled from 'styled-components'
import { Masonry } from '../pages/JournalStyle'
import JournalInfo from './JournalInfo'
import PostCanvas from './PostCanvas'

const Wrapper = styled.div`
    margin: auto;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
`

class JournalPosts extends Component {
    renderPostCanvases = () => {
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
        for(let i = 0; i < posts.length; i++) {
            const post = JournalInfo[posts[i]]
            postsArray.push(
                <PostCanvas post={post}/>
            )
        }
        return postsArray
    }
    
    render () {
        return (
            <Wrapper>
                <Masonry>
                    {this.renderPostCanvases()}
                </Masonry>
            </Wrapper>
        )
    }
}


export default JournalPosts