import React, { Component, useState, useEffect } from 'react';
import Footer from '../Footer'; 
import Typist from 'react-typist';
import { Wrapper, Header, Type } from './JournalStyle'
import JournalPosts from '../journal/JournalPosts';
import { Button } from 'react-bootstrap'

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

const Landing = (props) => {
    return (
        <Header>
            <div className='text'>
                <div className="precursor">
                    I write to &nbsp;
                </div>
                <TextLoop/>
            </div>
            <Button
            // onClick={props.changeView("gallery")
            >change view</Button>
        </Header>
    )
}


class JournalHome extends Component{

    constructor() {
        super();
        this.state = {
            view: "list",
        }
        this.changeView = this.changeView.bind(this);
    }

    changeView = (selectedView) => {
        this.setState({
            view: selectedView
        });
    }

    render() {
        return (
            <Wrapper>
                <Landing
                //  changeView={this.changeView}
                 />
                <JournalPosts 
                // view={this.view}
                />
                <Footer/>
            </Wrapper>
        )
    }
}

export default JournalHome
