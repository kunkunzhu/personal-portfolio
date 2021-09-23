import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavWrapper = styled.div`
    top: 0;
    display: flex;
    z-index: 999;
    height: 50px;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    justify-content: flex-end;
    position: sticky; 
    background-color: #FFFDFA;
    opacity: 75%;
    backdrop-filter: blur(3px);
    @media (max-width: 960px) {
        justify-content: center;
}
`

export const NavLogo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    position: absolute;
    top: 0.4rem;
    font-weight: bold;
    left: 20px;
    color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:  var(--rain);
    &:hover {
        cursor: pointer;
        transform: skew(-2deg);
        -webkit-transition: 0.1s ease-out;
        transition: 0.2s ease-out;
        -webkit-text-stroke-color: var(--blush);
        text-shadow: 3px 3px 0px var(--rain);
}
`
export const NavMenu = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, auto);
    list-style: none;
    justify-content: end;
    margin-right: 25px;
`
export const Section = styled(Link)`
    color: var(--txt-clr);
    font-size: 22px;
    padding: 10px 20px 10px;
    display: table;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        -webkit-transition: 0.2s ease-out;
        transition: 0.2s ease-out;
        border-bottom: 4px solid var(--rain);
        color: white;
        background: #fefefa;
        text-align: center;
        text-overflow: clip;
        color: var(--blush);
}
`
