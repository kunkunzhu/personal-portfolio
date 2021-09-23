import React, { Component } from 'react'
import styled from 'styled-components'

{/* no overlap with background image */}

const Wrap = styled.button`
    box-shadow:  0px 4px 10px black;
    width: 250px;
    height: 60px;
    margin: auto;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    user-select: none;
    cursor: pointer;
    border-radius: 100px;
`

const Switch = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: inherit;
    height: inherit;
    font-size: 1.2rem;
    letter-spacing: .2rem;
    &:first-child {
        background: blue;
        color: black;
    }
    &:nth-child(2){
        background: pink;
        color: white;
        clip-path: inset(0 50% 0 0);
        transition: .3s cubic-bezier(0,0,0,1);
    }
    #on {
        background-color: blue;
        clip-path: inset(0 0 0 50%);
    }
    #off {
        background-color: pink;
        clip-path: inset(0 50% 0 0);
    }
`

const Option = styled.div`
    width: 50%;
    position: absolute;
    height: inherit;
    display: flex;
    box-sizing: border-box;
    p {
        font-family: var(--txt-font);
        margin: auto;
        display: flex;
    }
    &:nth-child(1){
        right: 0;
    }
`


class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {toggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(prevState => ({
            toggleOn: !prevState.toggleOn
        }));
    }
    render() {
        return (
            <Wrap onClick={this.handleClick}> {/* where to insert event handler? */}
                <Switch>
                    <Option>
                        <p>design.</p>
                    </Option>
                    <Option>
                        <p>dev.</p>
                    </Option>
                </Switch>
                {this.toggleOn
                    ?
                    <Switch id="toggle">
                    <Option>
                        <p>design.</p>
                    </Option>
                    <Option>
                        <p>dev.</p>
                    </Option>
                </Switch>
                    :
                    <Switch id="toggle">
                    <Option>
                        <p>design.</p>
                    </Option>
                    <Option>
                        <p>dev.</p>
                    </Option>
                </Switch>
                }
            </Wrap>
        )
    }
}
export default Toggle