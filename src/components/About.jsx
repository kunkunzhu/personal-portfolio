import React, { Component } from 'react'
import { 
    AboutWrapper, 
    Image, 
    Text, 
    Name, 
    EngName, 
    ChiName, 
    Noun, 
    Definition, 
    Definitions, 
    Coop }
from './AboutStyles'

class About extends Component {
    render() {
        return (
            <AboutWrapper>
                <Image>
                </Image>
                <Text>
                    <Name>
                    <EngName>Kun Zhu</EngName>
                    <ChiName>/朱子鲲/</ChiName></Name>
                    <Noun>Noun</Noun>
                    <Definitions>
                        <Definition>
                            a devoloper & designer, currently interning at <Coop href={"https://www.e-butterfly.org/"} target='_blank' rel='noreferrer'>eButterfly</Coop>.
                        </Definition>
                        <Definition>
                            a sophomore studying Mathematics at the University of Waterloo.
                        </Definition>
                        <Definition>
                            a student of life, driven by creativity and curiosity.
                        </Definition>
                    </Definitions>
                </Text>
            </AboutWrapper>
        )
    }
}

export default About