import React, { Component } from 'react'
import styled from 'styled-components'
import beforePic from '../images/beforeProfile.jpg'
import afterPic from '../images/afterProfile.jpg'

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 960px) {
        flex-direction: column;
        transition: 1.5s ease-out;
    }

`
const Image = styled.div`
    width: 260px;
    height: 360px;
    background: url(${beforePic});
    background-size: 260px 360px;
    display: inline-block;
    &:hover {
        opacity: 90%;
        transition: 0.6s ease-out; 
        background: url(${afterPic});
        background-size: 260px 360px;
        box-shadow: 10px 10px 0px #A5CCE4;
    }
    @media (max-width: 960px) {
        width: 234px;
        height: 324px;
        background-size: 234px 324px;
        transition: 0.4s ease-out;
        &:hover {
            background-size: 234px 324px;
        }
    }
`
const Text = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    width: 480px;
    margin-left: 40px;
    padding: 20px;
    @media (max-width: 960px) {
        align-items: center;
        width: 300px;
        margin-left: 40px;
    }
`

const Name = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 960px) {
        margin-left: 20px;
        flex-direction: column;
    }
`

const EngName = styled.header`
    font-size: 4rem;
    font-weight: 600;
    letter-spacing: 0.15rem;
    color: #FFFDFA;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #A5CCE4;
    @media (max-width: 960px) {
        transition: 0.4s ease-out; 
        font-size: 3rem;
    }
    &:hover{
        transition: 0.2s ease-out; 
        color: #A5CCE4;
    }
`

const ChiName = styled.header`
    opacity: 60%;
    margin-top: 10px;
    margin-left: 20px;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: #F5BBBE;
    &:hover{
        transition: 0.2s ease-out; 
        opacity: 100%;
    }
    @media (max-width: 960px) {
        transition: 0.4s ease-out; 
        font-size: 1.5rem;
        margin: 0;
    }
`
const Noun = styled.ol`
    opacity: 75%;
    font-family: 'Fira Code', monospace;
    font-style: italic;
    font-size: 1.4rem;
    color: #F5BBBE;
    padding: 5px;
    @media (max-width: 960px) {
        margin-left: 20px;
        transition: 0.4s ease-out; 
        font-size: 1.2rem;
        padding: 0;
    }
`
const Definitions = styled.ol`
    font-family: 'Fira Code', monospace;
    margin-left: 25px;
    margin-top: 10px;
    @media (max-width: 960px) {
        letter-spacing: -0.02rem;
        margin-top: 15px;
        margin-left: 25px;
        width: 220px;
    }
`

const Definition = styled.li`
    color: #333333;
    font-size: 18px;
    font-family: 'Fira Code', monospace;
    @media (max-width: 960px) {
        font-size: 14px;
    }
`

const Coop = styled.a`
    font-size: 18px;
    font-family: 'Fira Code', monospace;
    color: #5285A5;
    text-decoration: none;
    @media (max-width: 960px) {
        font-size: 14px;
    }
    &:hover{
        color: #A5CCE4;
        text-decoration: underline;
    }
`

class About extends Component {
    render() {
        return (
            <AboutWrapper>
                <Image>
                </Image>
                <Text>
                    <Name>
                    <EngName>Kun Zhu</EngName>
                    <ChiName>/朱子鲲/</ChiName></Name>
                    <Noun>Noun</Noun>
                    <Definitions>
                        <Definition>
                            an aspiring frontend developer and UX designer interning at <Coop href={"https://www.e-butterfly.org/"} target='_blank' rel='noreferrer'>eButterfly</Coop>
                        </Definition>
                        <Definition>
                            an Mathematics student at the University of Waterloo minoring in Cognitive Science
                        </Definition>
                        <Definition>
                            a lover of books, the sunlight, and creative expressions of all forms.
                        </Definition>
                    </Definitions>
                </Text>
            </AboutWrapper>
        )
    }
}

export default About