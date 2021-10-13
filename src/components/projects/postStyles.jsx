import styled from "styled-components";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    color: var(--txt-clr);
    background-color: #FFFAF3;
    box-sizing: border-box;
`

export const Home = styled(Link)`
    z-index: 2000;
    position: fixed;
    left: 2rem;
    top: 4rem;
    font-size: 2rem;
    color: var(--rain);
    opacity: 0.5;
    cursor: crosshair;
`

/* HEADER STYLE */

export const Hero = styled.img`
    height: 20rem;
    width: auto;
`

export const Nutshell = styled(Table)`
    margin-left: 3.5rem;
    opacity: 0.7;
    margin-top: 1rem;
    margin-bottom: .25rem;
    text-align: left;
    th {
        font-size: 1.4rem;
        color: var(--blush);
    }
    td {
        font-size: 0.8rem;
        font-family: var(--txt-font);
        padding-right: 3rem;
        padding-bottom: .25rem;
    }
`

export const Title = styled.h1`
    padding-top: 1.5rem;
    font-size: 3rem;
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 1rem;
`

export const Subtitle = styled.h4`
    font-weight: normal;
    font-family: var(--txt-font);
    font-size: 0.8rem;
    margin-bottom: 1rem;
`

export const Summary = styled.header`
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem auto;
    background-image: linear-gradient(to bottom, #ffffff, #fffdff, #fffcfc, #fffaf8, #fffaf3);
`

/* CONTENT STYLE */

export const Content = styled.div`
    max-width: 100%;
    text-align: left;
    margin: 0 auto 0 auto;
`

export const Paragraph = styled.div`
    margin-right: auto;
    margin-left: auto;
    float: center;
    .subheading {
        font-size: 1.5rem;
        line-height: 2rem;
        margin-top: 1rem;
        padding-left: 1.5rem;
        color: var(--rain);
    }
    .subsubheading {
        font-size: 1.2rem;
        line-height: 1.5rem;
        padding-left: 0.5rem;
        text-transform: uppercase;
        color: var(--blush);
        opacity: 0.75;
    }
    .paragraph {
        font-family: var(--txt-font);
        padding-top: 1rem;
        padding-bottom: 1rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        b {
            font-family: inherit;
            &:hover {
                color: var(--blush);
            }
        }
        a {
            font-family: inherit;
            color: inherit;
            opacity: 0.6;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
                text-decoration-style: wavy;
                text-decoration-color: var(--rain);
            }
        }
        ol {
            max-width: 75%;
            margin: auto;
            padding-top: 1rem;
            li { 
                font-family: var(--txt-font);
                font-size: 0.9rem;
                opacity: 0.8;
            }
        }
    }
    img {
        max-width: 100%;
        .imgDisplay {
            padding-top: 1rem;
            width: 100%;
        }
    }
    .imgRow{
        display: flex;
        flex-direction: row; 
        flex-wrap: wrap;
        align-content: center; 
        justify-content: center;
        .smallerDisplay {
            padding: 1px;
            width: 45%;
        }
    }
    .subdivider{
        margin-top: 1.5rem;
        margin-bottom: 2rem;
        border-top: 1.5px dashed var(--blush);
        border-bottom: none;
        opacity: 0.3;
    }
`

export const Heading = styled.h3`
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`

export const SectionDivider = styled.hr`
    border-top-width: 1px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid var(--blush);
    opacity: 0.3;
`

export const Section = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin: 0 auto 0 auto;
    line-height: 150%;
    clear: both;
    max-width: 800px;
    overflow: hidden;
`