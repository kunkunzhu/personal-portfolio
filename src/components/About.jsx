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
                            an aspiring frontend developer and UX designer interning at <Coop href={"https://www.e-butterfly.org/"} target='_blank' rel='noreferrer'>eButterfly</Coop>
                        </Definition>
                        <Definition>
                            a Mathematics student at the University of Waterloo minoring in Cognitive Science
                        </Definition>
                        <Definition>
                            a generalist at heart, driven by creativity and curiosity.
                        </Definition>
                    </Definitions>
                </Text>
            </AboutWrapper>
        )
    }
}

export default About