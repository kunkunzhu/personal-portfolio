import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
{/* import Section from './Section' */}

const NavWrapper = styled.div`
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

const NavLogo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    position: absolute;
    top: 0.4rem;
    font-weight: bold;
    left: 20px;
    color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:  #A5CCE4;
    &:hover {
        cursor: pointer;
        transform: skew(-2deg);
        -webkit-transition: 0.1s ease-out;
        transition: 0.2s ease-out;
        -webkit-text-stroke-color: #F5BBBE;
        text-shadow: 3px 3px 0px #A5CCE4;
    }
`
const NavMenu = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, auto);
    list-style: none;
    justify-content: end;
    margin-right: 25px;
`
const Section = styled(Link)`
    color: #333333;
    font-size: 22px;
    padding: 10px 20px 10px;
    display: table;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        -webkit-transition: 0.2s ease-out;
        transition: 0.2s ease-out;
        border-bottom: 4px solid #A5CCE4;
        color: white;
        background: #fefefa;
        text-align: center;
        text-overflow: clip;
        color: #F5BBBE;
    }
`

class Navbar extends Component {
    render () {
      return (
        <NavWrapper>
            <NavLogo to='/'>
                鲲   <i class="fas fa-fish"> </i>
            </NavLogo>
            <NavMenu>
                <li>
                    <Section to='/portfolio'>
                        Portfolio
                    </Section>
                </li>
                <li>
                    <Section to='/journal'>
                        Journal
                    </Section>
                </li>
                <li>
                    <Section to='/gallery'>
                        Gallery
                    </Section>
                </li>
            </NavMenu>
        </NavWrapper>
      )
    }
  }
  
  export default Navbar