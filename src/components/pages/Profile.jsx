import React, { Component } from 'react'
import styled from 'styled-components'
import Social from '../Socials'
import About from '../About'
import Footer from '../Footer'; 

const Wrapper = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--bg-clr);
`

class Profile extends Component {
    render() {
        return (
            <Wrapper>
                <About/>
                <Social/>
                <Footer/>
            </Wrapper>
        )
    }
}

export default Profile