import React, { Component } from 'react'
import { 
    AboutWrapper, 
    Image, 
    Text, 
    Name, 
    EngName, 
    ChiName, 
    Definition, 
    Definitions, 
    Link }
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
                    {/* <Noun>Noun</Noun> */}
                    <Definitions>
                        <Definition>
                            Kun is a second year student at the University of Waterloo, <Link href={'https://branch-celsius-f27.notion.site/Study-Repository-9f179ada5dd34d64815ea99820ad8a4a'} target='_blank' rel='noreferrer'>
                            studying
                            </Link> Statistics / Combinatorics & Optimization with a minor in Cognitive Science.
                            <br/>
                            She is an aspiring designer/developer delighted by the intersection between technology & empathy.
                        </Definition>
                        <Definition>
                            Creative expressions of all forms arouse her curiosity: literature, art, photography, mathematics. 
                            She feel the most at home while <Link href={'https://sincerelykun.substack.com/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile'} target='_blank' rel='noreferrer'>
                            writing, 
                            </Link> reading, drawing, and <Link href={'https://open.spotify.com/user/eliinaz.z?si=e8297252e4484e82'} target='_blank' rel='noreferrer'>listening to music.</Link>
                        </Definition>
                    </Definitions>
                </Text>
            </AboutWrapper>
        )
    }
}

export default About