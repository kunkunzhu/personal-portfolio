import styled from 'styled-components'
import beforePic from '../images/beforeProfile.jpg'
import afterPic from '../images/afterProfile.jpg'

export const AboutWrapper = styled.div`
    margin-top: 220px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 960px) {
        flex-direction: column;
        transition: 1.5s ease-out;
    }

`

// image dimension: 220x310
export const Image = styled.div` 
    width: 216px; 
    height: 299px;
    background: url(${beforePic});
    background-size: 216px 299px;
    display: inline-block;
    &:hover {
        opacity: 90%;
        transition: 0.6s ease-out; 
        background: url(${afterPic});
        background-size: 216px 299px;
        box-shadow: 10px 10px 0px var(--rain);
    }
    @media (max-width: 960px) {
        width: 180px; 
        height: 250px;
        background-size: 180px 250px;
        transition: 0.4s ease-out;
        &:hover {
            background-size: 180px 250px;
        }
    }
`
export const Text = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    width: 460px;
    margin-left: 40px;
    padding: 20px;
    @media (max-width: 960px) {
        align-items: center;
        width: 300px;
        margin-left: 40px;
    }
`

export const Name = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`

export const EngName = styled.header`
    font-size: 4rem;
    font-weight: 600;
    letter-spacing: 0.15rem;
    color: #FFFDFA;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--rain);
    @media (max-width: 960px) {
        transition: 0.4s ease-out; 
        font-size: 3rem;
    }
    &:hover{
        transition: 0.2s ease-out; 
        color: var(--rain);
    }
`

export const ChiName = styled.header`
    opacity: 60%;
    margin-top: 25px;
    margin-left: 10px;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: var(--blush);
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
export const Noun = styled.ol`
    opacity: 75%;
    font-family: var(--txt-font);
    font-style: italic;
    font-size: 1.4rem;
    color: var(--blush);
    padding: 5px;
    @media (max-width: 960px) {
        margin-left: 20px;
        transition: 0.4s ease-out; 
        font-size: 1.2rem;
        padding: 0;
    }
`
export const Definitions = styled.div`
    font-family: var(--txt-font);
    margin-left: 25px;
    margin-top: 10px;
    @media (max-width: 960px) {
        letter-spacing: -0.02rem;
        margin-top: 15px;
        margin-left: 5px;
        width: 235px;
    }
`

export const Definition = styled.div`
    margin-top: 1rem;
    color: var(--txt-clr);
    font-size: 18px;
    font-family: var(--txt-font);
    @media (max-width: 960px) {
        font-size: 14px;
    }
`

export const Link = styled.a`
    font-size: 18px;
    font-family: var(--txt-font);
    color: #5285A5;
    text-decoration: none;
    @media (max-width: 960px) {
        font-size: 14px;
    }
    &:hover{
        color: var(--rain);
        text-decoration: underline;
        text-decoration-style: wavy;
        text-decoration-color: var(--blush);
    }
`