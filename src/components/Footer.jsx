import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.footer`
    width: 100%;
    background-color: var(--blush);
    opacity: 75%;
    border-top: 2.5px solid white;
    display: flex;
    text-align: center;
    min-height: 70px;
    flex-direction: column;
    justify-content: center;
    margin-top: 200px;
`

const Credit = styled.div`
    background-color: var(--blush);
    font-size: 12px;
    font-family: var(--txt-font);
    color: white;
`

class Footer extends Component {
    render() {
        return (
            <Wrap>
                <Credit>
                    Designed + Developed by Kun Zhu 💙
                    2021
                </Credit>
            </Wrap>
        )
    }
}

export default Footer