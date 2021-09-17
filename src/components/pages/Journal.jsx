import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components'
import Footer from '../Footer'; 
import Typist from 'react-typist';

const Wrapper = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    height: 100vh;
`

const Header = styled.header`
    display: flex;
    text-align: left;
    flex-direction: column;
    position: relative;
    left: -400px;
    top: -100px;
    font-weight: 1200;
    font-size: 85px;
    .precursor {
        color: #FFFDFA;
        font-family: 'Fira Code', monospace;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #333333;
    }
    @media (max-width: 1200px) {
        font-weight: normal;
        font-size: 60px;
        flex-direction: column;
        position: relative;
        left: 0;
        top: -150px;
    }
`
const Type = styled.div`
    font-weight: 1200;
    font-size: 85px;
    color: #333333;
    @media (max-width: 1200px) {
        font-size: 60px;
    }
    & span {
        font-family: 'Fira Code', monospace;
    }
`

const TextLoop = () => {
    const[mounted, setMounted] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, [mounted]);

    return (
        <Type>
            {mounted ? (
                <Typist className="reason" onTypingDone={() => setMounted(false)}>
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
