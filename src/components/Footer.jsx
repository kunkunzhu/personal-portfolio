import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.footer`
    width: 100%;
    background-color: #F5BBBE;
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
    background-color: #F5BBBE;
    font-size: 12px;
    font-family: 'Fira Code', monospace;
    color: white;
`

class Footer extends Component {
    render() {
        return (
            <Wrap>
                <Credit>
                    Designed + Coded by Kun Zhu 💙
                    2021
                </Credit>
            </Wrap>
        )
    }
}

export default Footer