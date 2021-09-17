import React, { Component } from 'react';
import styled from 'styled-components'
import Footer from '../Footer'; 
{/*import Scribbles from '../Scribbles'*/}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    height: 100vh;
`
const Header = styled.div`
    padding: 50px;
    margin-top: 60px;
    align-items: flex-start;
    text-align: left;
    line-height: 0.75;
    font-size: 200px;
    font-weight: 600;
    letter-spacing: 0.02rem;
    color: #FFFDFA;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #333333;
    position: absolute;
    top: 0;
`

class Gallery extends Component{
    render() {
        return (
            <Wrapper>
                <Header>
                make messy art & take up space.
                </Header>
                GALLERY IN PROGRESS
                <Footer/>
            </Wrapper>
        )
    }
}

export default Gallery
