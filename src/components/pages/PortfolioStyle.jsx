import styled from 'styled-components'
import Brand from '../../images/Portfolio.png'

export const Hello = styled.header`
    color: var(--txt-clr);
    opacity: 75%;
    text-align: center;
    font-size: 2.6rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    margin-top: 210px;
    background-color: transparent;
    @media (max-width: 700px) {
        font-size: 1.75rem;
        position: absolute;
        top: 0;
        left: 220px;
        transition: 0.2s ease-out;
    }
`

export const Text = styled.div`
    font-family: 'Fira Code', monospace;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--txt-clr);
    margin-top: 25px;
    margin-left: 300px;
    font-size: 1rem;
    @media (max-width: 700px) {
        font-size: 0.8rem;
        margin-left: 240px;
        margin-top: 200px;
        transition: 0.2s ease-out;
    }
`

export const Intro = styled.div`
    height: 500px;   
    background: url(${Brand});
    background-repeat: no-repeat;
    background-position: top;
    background-size: 1100px;
    width: 100%;
    @media (max-width: 700px) {
        background-size: 800px;
        transition: 0.2s ease-out;
    }
`
export const Wrap = styled.div`
    scroll-behavior: smooth;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    background-color: var(--bg-clr);
`