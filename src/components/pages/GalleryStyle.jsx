import { Modal, Tabs } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'

/* landing header style */

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-clr);
`
export const colorAnimation = keyframes`
    0% { -webkit-text-stroke-color #EF9A9D; }
    25% { -webkit-text-stroke-color #EAB771; }
    50% { -webkit-text-stroke-color #BCDF62; }
    75% { -webkit-text-stroke-color #62DFD9; }
    100% { -webkit-text-stroke-color: #9666DB; } 
`

export const Header = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    padding: 100px;
    margin-top: 50px;
    & caption {
        padding-left: 25px;
        opacity: 0;
        letter-spacing: 0.2rem;
        height: 250px;
        text-align: left;
        font-size: 1rem;
        line-height: 2rem;
        color: var(--txt-clr);
        z-index: 1;
        &:hover {
            opacity: .75;
            transition: 0.5s ease-in;
        }
    }
    & header {
        line-height: 0.75;
        font-size: 120px;
        font-weight: 600;
        letter-spacing: 0.02rem;
        color: #FFFDFA;
        -webkit-text-stroke-width: 1.25px;
        -webkit-text-stroke-color: var(--txt-clr);
        animation-name: ${colorAnimation};
        animation-duration: 10s;
        animation-iteration-count: infinite; 
        z-index: 2;
    }
`

/* gallery display style */

export const GalleryTabs = styled(Tabs)`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    margin-bottom: 0;
    list-style: none;
    justify-content: center;
    .tab {
        cursor: pointer;
        border: 0px;
        background: transparent;
        font-size: 1.5rem;
        color: var(--txt-clr);
        opacity: 0.8;
        margin: 5px;
        padding: 20px;
        display: list-item;
        font-family: var(--txt-font);
        text-align: -webkit-match-parent;
        &:hover {
            text-decoration: underline;
            text-decoration-color: var(--rain);
            text-decoration-style: wavy;
            background: white;
            color: var(--blush);
        }
        &>.active {
            text-decoration: underline;
            text-decoration-color: var(--rain);
            text-decoration-style: wavy;
            background: white;
        }
    }
`

export const DrawingCard = styled.div`
    display: inline-block;
    background: var(--bg-clr);
    padding: 2px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1.5em;
    cursor: pointer;
    .browser {
        border: 1px solid var(--rain);
        border-bottom: 0;
        color: var(--rain);
        padding: 2px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 12px;
    }
    &:hover {
        img {
            padding: 0px;
            border: 2px solid var(--rain);
        }
        .browser {
            background-color: var(--rain);
            color: white;
        }
        box-shadow: 10px 12px var(--bg-clr), 
        10px 12px 0px 2px var(--blush);
    }
`

export const Drawing = styled.img`
    max-width:100%;
    padding: 1px;
    border: 1px solid var(--rain);
    opacity: 0.7;
    &:hover {
        opacity: 1;
        transition: 0.1s ease-in;
    }
`

export const Visual = styled.img`
    max-width:100%;
    padding: 2px;
    border: 1px solid var(--blush);
    opacity: 0.7;
    &:hover {
        opacity: 1;
        transition: 0.1s ease-in;
    }
`

export const VisualCard = styled.div`
    display: inline-block;
    background: var(--bg-clr);
    padding: 4px;
    padding-bottom: 0;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 25px;
    border: 1px solid var(--blush);
    cursor: pointer;
    &:hover {
        img {
            border: 1px solid var(--rain);
        }
        margin-bottom: 24px;
        padding: 3px;
        padding-bottom: 0;
        border: 2px solid var(--blush);
        box-shadow: 10px 12px var(--bg-clr), 
        10px 12px 0px 2px var(--rain);
    }
`

export const Masonry = styled.div`
    column-count: 4;
    column-gap: 1.5em;
    row-gap: 3em;
    padding: 0;
    width: 80vw;
    @media (max-width: 1200px) {
        column-count: 3;
        @media (max-width: 768px) {
            column-count: 2;
            @media (max-width: 320px) {
                column-count: 1;
            }
        }
    }
`


/* modal display style */

export const Image = styled.img`
    max-width: 500px;
    align-items: center;
    position:fixed;
    background: white;
    margin: 20px;
    height: 70%;
    width: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    box-shadow: 10px 12px var(--bg-clr), 
    10px 12px 0px 2px var(--blush);
`

export const ModalCard = styled(Modal)`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    z-index: 10;
    text-align: center;
    padding: 25px;
    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        font-family: var(--txt-font);
        margin-top: 1.7rem;
        font-size: 2rem;
        color: #FFFDFA;
        -webkit-text-stroke-width: 0.75px;
        -webkit-text-stroke-color: #005B93;
        z-index: 11;
    }
`