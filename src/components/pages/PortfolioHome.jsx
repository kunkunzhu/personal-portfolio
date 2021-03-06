import React, { Component, useState, useEffect } from 'react';
import { Wrap, Intro, Text, Hello, Resume } from './PortfolioStyle'
import Footer from '../Footer';
import Projects from '../Projects'
import Typist from 'react-typist';

const TextLoop = () => {
    const[mounted, setMounted] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, [mounted]);

    return (
        <Hello>
            {mounted ? (
                <Typist 
                    className="reason" 
                    onTypingDone={() => 
                    setMounted(false)}>
                    <span>Hello, I'm Kun.</span>
                    <Typist.Backspace count={15} delay={800} />
                </Typist>
            ) : (
                <span className="reason">
                    {"n"}
                </span>
            )}
        </Hello>
    );
}


class PortfolioHome extends Component{
    render() {
        return (
            <Wrap>
                <Intro>
                    <TextLoop/>
                    <Text>
                        A mathematics student <br/>
                        at the University of <br/>
                        Waterloo inspired by <br/>
                        the intersection between <br/>
                        technology & empathy.
                    </Text>
                </Intro>
                <Resume href={'https://drive.google.com/file/d/1oC_g0TETDlrmVohAp4LWxYebllsa4fwP/view?usp=sharing'} target='_blank' rel='noreferrer'>
                    resume.
                </Resume>
                <Projects/>
                <Footer/>
            </Wrap>
        )
    }
}

export default PortfolioHome
