import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    width: 100%;
    margin-top: 50px;
    background-color: #F5BBBE;
    border-top: 2.5px solid white;
    display: flex;
    align-items: center;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    bottom: 0;
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