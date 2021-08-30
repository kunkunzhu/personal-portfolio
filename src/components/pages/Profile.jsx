import React, { Component } from 'react'
import styled from 'styled-components'
import Social from '../Socials'
import About from '../About'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    height: 100vh;
`

class Profile extends Component {
    render() {
        return (
            <Wrapper>
                <About/>
                <Social/>
            </Wrapper>
        )
    }
}

export default Profile