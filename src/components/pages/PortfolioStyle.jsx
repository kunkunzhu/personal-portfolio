import styled from 'styled-components'
import foreground from '../../images/Portfolio0.png'
import background from '../../images/Portfolio1.png'

// export const Hello = styled.header`
//     color: var(--txt-clr);
//     opacity: 75%;
//     text-align: center;
//     font-size: 2.6rem;
//     font-weight: 600;
//     letter-spacing: 0.05rem;
//     margin-top: 210px;
//     background-color: transparent;
//     @media (max-width: 700px) {
//         font-size: 1.75rem;
//         position: absolute;
//         top: 0;
//         left: 220px;
//         transition: 0.2s ease-out;
//     }
// `

// export const Text = styled.div`
//     font-family: 'Fira Code', monospace;
//     background: transparent;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     color: var(--txt-clr);
//     margin-top: 25px;
//     margin-left: 300px;
//     font-size: 1rem;
//     @media (max-width: 700px) {
//         font-size: 0.8rem;
//         margin-left: 240px;
//         margin-top: 200px;
//         transition: 0.2s ease-out;
//     }
// `

// export const Intro = styled.div`
//     height: 500px;   
//     background: url(${Brand});
//     background-repeat: no-repeat;
//     background-position: top;
//     background-size: 1100px;
//     width: 100%;
//     @media (max-width: 700px) {
//         background-size: 800px;
//         transition: 0.2s ease-out;
//     }
// `
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

export const Resume = styled.a`
    opacity: 0.7;
    font-family: var(--txt-font);
    color: var(--txt-clr);
    text-decoration: none;
    font-size: 18px;
    padding: 10px;
    background: white;
    :hover {   
        opacity: 0.5;
        text-decoration: underline;
        text-decoration-style: wavy;
        text-decoration-color: var(--rain);
    }
`

export const Background = styled.div`
    background: url(${background});
    height: 750px;
    background-repeat: no-repeat;
    background-size: 400px;
    width: 50%;
    margin: auto;
    margin-left: 450px;
    margin-top: -1430px;
    z-index: 1;
    overflow: hidden;
    opacity: 0.8;
    @media (max-width: 992px) and (min-width: 768px) {
        margin-left: 300px;
        transition: 0.5s ease-out;
    }
    @media (max-width: 768px) and (min-width: 600px) {
        background-size: 300px;
        margin-left: 150px;
        margin-top: -1400px;
        transition: 0.5s ease-out;
    }
    @media (max-width: 600px) {
        transition: 0.5s ease-out;
        background-size: 250px;
        margin-left: 120px;
        margin-top: -1350px;
    }
`

export const Foreground = styled.div`
    background: url(${foreground});
    height: 1200px;
    background-repeat: no-repeat;
    background-size: 600px;
    width: 50%;
    margin: auto;
    margin-top: 250px;
    z-index: 99;
    overflow: hidden;
    opacity: 0.9;
    @media (max-width: 768px) and (min-width: 600px) {
        background-size: 400px;
        transition: 0.5s ease-out;
    }
    @media (max-width: 600px) {
        background-size: 300px;
        transition: 0.5s ease-out;
    }
`