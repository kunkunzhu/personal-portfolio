import React, { Component, useState, useEffect } from 'react';
import Footer from '../Footer'; 
import Typist from 'react-typist';
import { Wrapper, Header, Type } from './JournalStyle'


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
                    <span>reflect.</span>
                    <Typist.Backspace count={8} delay={1000} />
                    <span>become.</span>
                    <Typist.Backspace count={7} delay={1000} />
                    <span>cherish.</span>
                    <Typist.Backspace count={8} delay={1000} />
                    <span>understand.</span>
                    <Typist.Backspace count={11} delay={1000} />
                    <span>remember.</span>
                    <Typist.Backspace count={9} delay={1000} />
                </Typist>
                ) : (
                    <span className="reason">
                        {"n"}
                    </span>
                    )}
        </Type>
        );
    }

class Journal extends Component{

    render() {
        return (
            <Wrapper>
                <Header>
                    <div className="precursor">
                        I write to &nbsp;
                    </div>
                   <TextLoop/>
                </Header>
                JOURNAL IN PROGRESS
                <Footer/>
            </Wrapper>
        )
    }
}

export default Journal
