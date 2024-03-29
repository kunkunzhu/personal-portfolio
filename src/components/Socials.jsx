import React, { Component } from 'react'
import styled from 'styled-components'

const SocialLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 25px;
    opacity: 85%;
    padding: 20px;
    @media (max-width: 960px) {
        justify-content: center;
    }
`
const Social = styled.a`
    color: var(--blush);
    width: 50px;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    padding: 15px;
    &:hover {
        opacity: 60%;
        padding: 10px;
        font-size: 30px;
        transform: skew(-2deg);
        transition: 0.2s ease-out;
        text-shadow: 2px 2px 0px var(--rain);
    }
`

class Socials extends Component {
    render() {
        return(
            <SocialLinks>
                <Social href={'https://www.instagram.com/zkunzhu'} target='_blank' rel='noreferrer'>
                    <i className='fab fa-instagram'></i>
                </Social>
                <Social href={'https://www.linkedin.com/in/kun-zhu-05b53a193/'} target='_blank' rel='noreferrer'>
                        <i className='fab fa-linkedin'></i>
                </Social>
                <Social href={'https://github.com/kunkunzhu'} target='_blank' rel='noreferrer'>
                    <i className='fab fa-github'></i>
                </Social>
                <Social href={'https://twitter.com/kunleidoscopic'} target='_blank' rel='noreferrer'>
                    <i class="fab fa-twitter"></i>
                </Social>
            </SocialLinks>
        )
    }
}

export default Socials;