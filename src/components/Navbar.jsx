import React, { Component } from 'react'
import { NavWrapper, NavLogo, NavMenu, Section } from './NavStyle'

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