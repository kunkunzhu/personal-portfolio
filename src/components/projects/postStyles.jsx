import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
    color: var(--txt-clr);
    background-color: #FFFAF3;
`

/* HEADER STYLE */

export const Hero = styled.img`
    height: 20rem;
    width: auto;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: 1rem;
    margin-left: 1rem;
`

export const Nutshell = styled.table`
    margin-left: 3.5rem;
    opacity: 0.7;
    grid-column: 2 / auto;
    margin-top: 1rem;
    margin-bottom: .25rem;
    text-align: left;
    border-collapse: collapse;
    tbody {
        display: table-row-group;
        vertical-align: middle;
    }
    tr {
        display: table-row;
        vertical-align: inherit;
        vertical-align: top;
        width: 25%;
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
    background-image: linear-gradient(to bottom, #ffffff, #fffdff, #fffcfc, #fffaf8, #fffaf3);
`

/* CONTENT STYLE */

export const Content = styled.div`
    width: 85vw;
    margin-bottom: 0;
    text-align: left;
`

export const Paragraph = styled.div`
    margin-right: auto;
    margin-left: auto;
    max-width: 1200px;
    .subheading {
        font-size: 1.5rem;
        line-height: 2rem;
        margin-top: 1rem;
        padding-left: 1.5rem;
        color: var(--rain);
    }
    .paragraph {
        font-family: var(--txt-font);
        padding-top: 1rem;
        padding-bottom: 1rem;
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
            text-decoration-style: none;
            &:hover {
                text-decoration-style: wavy;
                text-decoration-color: var(--rain);
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
        width: 100vw;
        display: flex;
        flex-direction: row; 
        flex-wrap: wrap;
        align-content: center; 
        align-items: center; 
        justify-content: center;
        margin-left: -5rem;
        .smallerDisplay {
            padding: 1px;
            width: 45%;
        }
    }
    .subdivider{
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        border-top: 1px dashed var(--blush);
        border-bottom: none;
        opacity: 0.3;
        width: 65%;
    }
`

export const Heading = styled.h3`
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
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
    padding-top: 4rem;
    padding-bottom: 4rem;
    margin: auto;
`