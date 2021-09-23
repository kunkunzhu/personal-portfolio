import React, { Component, useState, useEffect } from 'react';
import { Wrap, Intro, Text, Hello, Type } from './PortfolioStyle'
import Footer from '../Footer';
import Projects from '../Projects'
import Typist from 'react-typist';

const TextLoop = () => {
    const[mounted, setMounted] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, [mounted]);

    return (
        <Type>
            {mounted ? (
                <Typist 
                    className="reason" 
                    onTypingDone={() => 
                    setMounted(false)}>
                    <span>technology & empathy.</span>
                    <Typist.Backspace count={21} delay={800} />
                </Typist>
            ) : (
                <span className="reason">
                    {"n"}
                </span>
            )}
        </Type>
    );
}


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
                        <TextLoop/>
                    </Text>
                </Intro>
                {/* this.renderFilter() */} 
                <Projects/>
                <Footer/>
            </Wrap>
        )
    }
}

export default Portfolio
