import React, { Component } from 'react';
import styled from 'styled-components'
import Brand from '../../images/Portfolio.png'
import Footer from '../Footer';
/* import MenuBar from '../MenuBar'; */
/* import Projects from '../Projects' */
/* import Toggle from '../Toggle' */

const Hello = styled.header`
    color: #333333;
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

const Text = styled.div`
    font-family: 'Fira Code', monospace;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333333;
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

/* const Tech = styled.span`
    font-family: 'Fira Code', monospace;
    background: transparent;
`

const Empathy = styled.span`
    font-family: 'Fira Code', monospace;
    background: transparent;
` */

const Intro = styled.div`
    height: 100vh;   
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
const Wrap = styled.div`
    height: 100vh;
    scroll-behavior: smooth;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
`

class Portfolio extends Component{

 /*   renderMenu = () => {
        const menuItems = [
            { label: 'Design.', id: 'ux' },
            { label: 'Development.', id: 'code' }];
            var projMenu = <MenuBar menuItems={menuItems} className="menu-bar"/>
        return projMenu
    } */

    render() {
        return (
            <Wrap>
                <Intro>
                    <Hello>
                        Hello, I am Kun.
                    </Hello>
                {/*    {this.renderMenu()} */}
                    <Text>
                        A mathematics student <br/>
                        at the University of <br/>
                        Waterloo inspired by <br/>
                        the intersection between <br/>
                        technology & empathy. {/* edit */}
                    </Text>
                </Intro>
                {/* <Toggle/> */}
                {/* <Projects/> */}
                <Footer/>
            </Wrap>
        )
    }
}

export default Portfolio
